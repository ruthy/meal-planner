'use client';

import { useCallback, useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import type { CalculatorSettings } from '@/types';

const DEFAULTS: CalculatorSettings = {
  gender: 'f',
  age: 64,
  weight_kg: 75,
  height_cm: 165,
  activity_level: 1.55,
  unit_system: 'metric',
  target_calories: null,
  tdee: null,
  bmi: null,
};

export function useCalculatorSettings() {
  const { user } = useAuth();
  const supabase = createClient();
  const [settings, setSettings] = useState<CalculatorSettings>(DEFAULTS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    async function load() {
      const { data } = await supabase.from('calculator_settings').select('*').eq('user_id', user!.id).single();

      if (data) {
        setSettings(data as CalculatorSettings);
      }
      setLoading(false);
    }

    load();
  }, [user, supabase]);

  const saveSettings = useCallback(
    async (updated: Partial<CalculatorSettings>) => {
      if (!user) return;
      const merged = { ...settings, ...updated, user_id: user.id, updated_at: new Date().toISOString() };
      setSettings(merged);
      await supabase.from('calculator_settings').upsert(merged, { onConflict: 'user_id' });
    },
    [user, settings, supabase],
  );

  return { settings, loading, saveSettings };
}
