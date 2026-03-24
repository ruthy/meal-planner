'use client';

import { useStreaks } from '@/hooks/useStreaks';
import { useLanguage } from '@/contexts/LanguageContext';

export default function StreakDisplay() {
  const { currentStreak, longestStreak, loading } = useStreaks();
  const { t } = useLanguage();

  if (loading) return null;

  return (
    <div className="grid grid-cols-2 gap-2">
      <div className="bg-brand-green-light border border-brand-green rounded-md p-3 text-center">
        <div className="text-2xl font-extrabold text-brand-green-dark">{currentStreak}</div>
        <div className="text-[10px] text-brand-green-dark uppercase tracking-wider">{t('progress.day_streak')}</div>
      </div>
      <div className="bg-white border border-surface-border rounded-md p-3 text-center">
        <div className="text-2xl font-extrabold text-content">{longestStreak}</div>
        <div className="text-[10px] text-content-muted uppercase tracking-wider">{t('progress.best_streak')}</div>
      </div>
    </div>
  );
}
