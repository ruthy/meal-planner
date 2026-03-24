'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { toDateString } from '@/lib/dates';
import type { DailyTracking } from '@/types';

const DEFAULT_TRACKING: Omit<DailyTracking, 'user_id' | 'track_date'> = {
  meals_done: {},
  water_glasses: [false, false, false, false, false, false, false, false],
  shot_done: false,
  exercise_done: false,
  shopping_checked: {},
};

export function useDailyTracking() {
  const { user } = useAuth();
  const supabase = createClient();
  const [tracking, setTracking] = useState<DailyTracking | null>(null);
  const [loading, setLoading] = useState(true);
  const debounceRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  const trackingRef = useRef<DailyTracking | null>(null);

  const today = toDateString();

  // Keep ref in sync
  useEffect(() => {
    trackingRef.current = tracking;
  }, [tracking]);

  // Load today's tracking
  useEffect(() => {
    if (!user) return;

    async function load() {
      const { data } = await supabase
        .from('daily_tracking')
        .select('*')
        .eq('user_id', user!.id)
        .eq('track_date', today)
        .single();

      if (data) {
        setTracking(data as DailyTracking);
      } else {
        // Create a new row for today
        const newRow: DailyTracking = {
          user_id: user!.id,
          track_date: today,
          ...DEFAULT_TRACKING,
        };
        setTracking(newRow);
      }
      setLoading(false);
    }

    load();
  }, [user, today, supabase]);

  // Debounced save
  const save = useCallback(
    (updated: DailyTracking) => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(async () => {
        const { id: _id, ...rest } = updated;
        await supabase
          .from('daily_tracking')
          .upsert({ ...rest, updated_at: new Date().toISOString() }, { onConflict: 'user_id,track_date' });
      }, 300);
    },
    [supabase],
  );

  // Flush on page close
  useEffect(() => {
    const flush = () => {
      if (debounceRef.current && trackingRef.current) {
        clearTimeout(debounceRef.current);
        const { id: _id2, ...rest } = trackingRef.current;
        const body = JSON.stringify({ ...rest, updated_at: new Date().toISOString() });
        navigator.sendBeacon?.(
          `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/daily_tracking?on_conflict=user_id,track_date`,
          new Blob([body], { type: 'application/json' }),
        );
      }
    };
    window.addEventListener('beforeunload', flush);
    return () => window.removeEventListener('beforeunload', flush);
  }, []);

  const update = useCallback(
    (partial: Partial<DailyTracking>) => {
      setTracking((prev) => {
        if (!prev) return prev;
        const updated = { ...prev, ...partial };
        save(updated);
        return updated;
      });
    },
    [save],
  );

  const toggleMealDone = useCallback(
    (key: string) => {
      setTracking((prev) => {
        if (!prev) return prev;
        const meals_done = { ...prev.meals_done, [key]: !prev.meals_done[key] };
        const updated = { ...prev, meals_done };
        save(updated);
        return updated;
      });
    },
    [save],
  );

  const toggleGlass = useCallback(
    (index: number) => {
      setTracking((prev) => {
        if (!prev) return prev;
        const water_glasses = [...prev.water_glasses];
        water_glasses[index] = !water_glasses[index];
        const updated = { ...prev, water_glasses };
        save(updated);
        return updated;
      });
    },
    [save],
  );

  const toggleShot = useCallback(() => {
    update({ shot_done: !tracking?.shot_done });
  }, [tracking?.shot_done, update]);

  const toggleExercise = useCallback(() => {
    update({ exercise_done: !tracking?.exercise_done });
  }, [tracking?.exercise_done, update]);

  const toggleShopItem = useCallback(
    (key: string) => {
      setTracking((prev) => {
        if (!prev) return prev;
        const shopping_checked = { ...prev.shopping_checked, [key]: !prev.shopping_checked[key] };
        const updated = { ...prev, shopping_checked };
        save(updated);
        return updated;
      });
    },
    [save],
  );

  const resetWater = useCallback(() => {
    update({ water_glasses: [false, false, false, false, false, false, false, false] });
  }, [update]);

  const resetShopping = useCallback(() => {
    update({ shopping_checked: {} });
  }, [update]);

  return {
    tracking,
    loading,
    toggleMealDone,
    toggleGlass,
    toggleShot,
    toggleExercise,
    toggleShopItem,
    resetWater,
    resetShopping,
  };
}
