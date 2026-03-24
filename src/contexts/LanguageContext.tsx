'use client';

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';
import { en, he, lt } from '@/i18n';

type Lang = 'en' | 'he' | 'lt';
type Dir = 'ltr' | 'rtl';

interface LanguageContextType {
  lang: Lang;
  dir: Dir;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const translations: Record<Lang, Record<string, string>> = { en, he, lt };

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  dir: 'ltr',
  setLang: () => {},
  t: (key: string) => key,
});

function getInitialLang(): Lang {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('lang');
    if (stored === 'en' || stored === 'he' || stored === 'lt') return stored;
  }
  return 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  const dir: Dir = lang === 'he' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem('lang', newLang);
  }, []);

  const t = useCallback(
    (key: string): string => {
      return translations[lang][key] ?? key;
    },
    [lang],
  );

  return <LanguageContext.Provider value={{ lang, dir, setLang, t }}>{children}</LanguageContext.Provider>;
}

export const useLanguage = () => useContext(LanguageContext);
