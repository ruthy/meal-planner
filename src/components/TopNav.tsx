'use client';

import { useLanguage } from '@/contexts/LanguageContext';

interface TopNavProps {
  targetCalories?: number | null;
}

export default function TopNav({ targetCalories }: TopNavProps) {
  const { t } = useLanguage();
  const calDisplay = targetCalories
    ? `${targetCalories.toLocaleString()} ${t('meals.cal_day')}`
    : `1,150 ${t('meals.cal_day')}`;

  return (
    <div className="bg-white border-b border-surface-border px-6 py-3.5 flex items-center gap-3">
      <div className="w-8 h-8 bg-[#1B5E3B] rounded-md flex items-center justify-center text-white text-lg flex-shrink-0">
        🌿
      </div>
      <div className="text-[15px] font-semibold text-content">{t('app_name')}</div>
      <div className="text-xs text-content-muted ml-auto hidden sm:block">
        {t('meals.gf_rules')} &middot; {calDisplay}
      </div>
    </div>
  );
}
