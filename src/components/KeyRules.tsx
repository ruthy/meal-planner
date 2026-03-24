'use client';

import { RULES } from '@/data/rules';
import { useLanguage } from '@/contexts/LanguageContext';

export default function KeyRules() {
  const { t } = useLanguage();

  return (
    <div>
      {RULES.map((rule, i) => (
        <div
          key={i}
          className={`flex items-start gap-3 p-3 border rounded-md mb-2 ${
            i === RULES.length - 1 ? 'bg-[#EAF3DE] border-[#C0DD97]' : 'bg-white border-surface-border'
          }`}
        >
          <span className="text-xl flex-shrink-0">{rule.icon}</span>
          <div>
            <div className="text-[13px] font-bold text-content mb-0.5">{t(`rules.${i + 1}.title`)}</div>
            <div className="text-xs text-content-muted leading-relaxed">{t(`rules.${i + 1}.desc`)}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
