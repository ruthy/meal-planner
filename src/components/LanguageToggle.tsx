'use client';

import { useLanguage } from '@/contexts/LanguageContext';

const langs = ['en', 'he', 'lt'] as const;
const labels: Record<(typeof langs)[number], string> = { en: 'EN', he: 'עב', lt: 'LT' };

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  const toggle = () => {
    const currentIdx = langs.indexOf(lang);
    const nextIdx = (currentIdx + 1) % langs.length;
    setLang(langs[nextIdx]);
  };

  return (
    <button
      onClick={toggle}
      className="text-[11px] px-3 py-1 bg-white/20 border border-white/40 rounded-full text-white cursor-pointer hover:bg-white/30 transition-colors"
      aria-label="Toggle language"
    >
      {labels[lang]}
    </button>
  );
}
