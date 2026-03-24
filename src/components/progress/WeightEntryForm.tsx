'use client';

import { useState } from 'react';
import { useWeightLog } from '@/hooks/useWeightLog';
import { toDateString } from '@/lib/dates';
import { useLanguage } from '@/contexts/LanguageContext';

export default function WeightEntryForm() {
  const { addEntry } = useWeightLog();
  const { t } = useLanguage();
  const [weight, setWeight] = useState('');
  const [saved, setSaved] = useState(false);

  const handleSave = async () => {
    const w = parseFloat(weight);
    if (!w || w < 20 || w > 300) return;
    await addEntry(toDateString(), w);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
    setWeight('');
  };

  return (
    <div className="flex items-center gap-2">
      <input
        type="number"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        placeholder={t('progress.todays_weight')}
        className="flex-1 px-3 py-2 border border-surface-border rounded-md text-xs text-content bg-white outline-none focus:border-brand-green"
        step="0.1"
      />
      <button
        onClick={handleSave}
        className="px-4 py-2 bg-brand-green text-white border-none rounded-md text-xs font-semibold cursor-pointer hover:bg-brand-green-mid transition-colors"
      >
        {saved ? `✓ ${t('progress.saved')}` : t('progress.log')}
      </button>
    </div>
  );
}
