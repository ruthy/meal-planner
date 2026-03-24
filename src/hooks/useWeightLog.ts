'use client';

import { useCallback, useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import type { WeightEntry } from '@/types';

export function useWeightLog() {
  const { user } = useAuth();
  const supabase = createClient();
  const [entries, setEntries] = useState<WeightEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    async function load() {
      const { data } = await supabase
        .from('weight_log')
        .select('*')
        .eq('user_id', user!.id)
        .order('log_date', { ascending: true });

      if (data) setEntries(data as WeightEntry[]);
      setLoading(false);
    }

    load();
  }, [user, supabase]);

  const addEntry = useCallback(
    async (date: string, weightKg: number) => {
      if (!user) return;
      const entry = { user_id: user.id, log_date: date, weight_kg: weightKg };
      const { data } = await supabase
        .from('weight_log')
        .upsert(entry, { onConflict: 'user_id,log_date' })
        .select()
        .single();

      if (data) {
        setEntries((prev) => {
          const filtered = prev.filter((e) => e.log_date !== date);
          return [...filtered, data as WeightEntry].sort((a, b) => a.log_date.localeCompare(b.log_date));
        });
      }
    },
    [user, supabase],
  );

  const deleteEntry = useCallback(
    async (id: string) => {
      await supabase.from('weight_log').delete().eq('id', id);
      setEntries((prev) => prev.filter((e) => e.id !== id));
    },
    [supabase],
  );

  return { entries, loading, addEntry, deleteEntry };
}
