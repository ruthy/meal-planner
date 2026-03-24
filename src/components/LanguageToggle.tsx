'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  const toggle = () => {
    setLang(lang === 'en' ? 'he' : 'en');
  };

  return (
    <button
      onClick={toggle}
      className="text-[11px] px-3 py-1 bg-white/20 border border-white/40 rounded-full text-white cursor-pointer hover:bg-white/30 transition-colors"
      aria-label="Toggle language"
    >
      {lang === 'en' ? 'עב' : 'EN'}
    </button>
  );
}
