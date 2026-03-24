'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useAuth } from '@/contexts/AuthContext';

interface StreakData {
  currentStreak: number;
  longestStreak: number;
  loading: boolean;
}

export function useStreaks(): StreakData {
  const { user } = useAuth();
  const supabase = createClient();
  const [data, setData] = useState<StreakData>({ currentStreak: 0, longestStreak: 0, loading: true });

  useEffect(() => {
    if (!user) return;

    async function load() {
      // Fetch last 90 days of tracking
      const since = new Date();
      since.setDate(since.getDate() - 90);
      const sinceStr = since.toISOString().split('T')[0];

      const { data: rows } = await supabase
        .from('daily_tracking')
        .select('track_date, meals_done, water_glasses, shot_done, exercise_done')
        .eq('user_id', user!.id)
        .gte('track_date', sinceStr)
        .order('track_date', { ascending: false });

      if (!rows || rows.length === 0) {
        setData({ currentStreak: 0, longestStreak: 0, loading: false });
        return;
      }

      // A day "counts" if at least one action was taken
      const activeDates = new Set<string>();
      for (const row of rows) {
        const meals = row.meals_done as Record<string, boolean>;
        const water = row.water_glasses as boolean[];
        const hasMeals = Object.values(meals).some(Boolean);
        const hasWater = water.some(Boolean);
        if (hasMeals || hasWater || row.shot_done || row.exercise_done) {
          activeDates.add(row.track_date);
        }
      }

      // Calculate streaks
      let currentStreak = 0;
      let longestStreak = 0;
      let streak = 0;
      const today = new Date();

      for (let i = 0; i < 90; i++) {
        const d = new Date(today);
        d.setDate(d.getDate() - i);
        const ds = d.toISOString().split('T')[0];

        if (activeDates.has(ds)) {
          streak++;
          if (i === 0 || (i > 0 && streak > 1) || currentStreak > 0) {
            currentStreak = streak;
          }
          longestStreak = Math.max(longestStreak, streak);
        } else {
          if (i === 0) {
            // Today not done yet, check from yesterday
            continue;
          }
          if (currentStreak === 0) currentStreak = streak;
          streak = 0;
        }
      }
      longestStreak = Math.max(longestStreak, streak);

      setData({ currentStreak, longestStreak, loading: false });
    }

    load();
  }, [user, supabase]);

  return data;
}
