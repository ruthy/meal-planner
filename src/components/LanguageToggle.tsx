'use client';

import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const langs = ['en', 'he', 'lt'] as const;
const labels: Record<(typeof langs)[number], string> = { en: 'English', he: 'עברית', lt: 'Lietuvių' };
const flags: Record<(typeof langs)[number], string> = { en: '🇬🇧', he: '🇮🇱', lt: '🇱🇹' };

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1.5 text-[11px] px-3 py-1 bg-white/20 border border-white/40 rounded-full text-white cursor-pointer hover:bg-white/30 transition-colors"
        aria-label="Select language"
      >
        <span>{flags[lang]}</span>
        <span>{labels[lang]}</span>
        <span className="text-[9px]">▼</span>
      </button>

      {open && (
        <div className="absolute top-full mt-1 right-0 bg-white rounded-lg shadow-lg border border-surface-border overflow-hidden z-50 min-w-[140px]">
          {langs.map((l) => (
            <button
              key={l}
              onClick={() => {
                setLang(l);
                setOpen(false);
              }}
              className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 text-xs text-left border-none cursor-pointer transition-colors
                ${l === lang ? 'bg-brand-green-light text-brand-green-dark font-bold' : 'bg-white text-content hover:bg-surface-bg'}`}
            >
              <span className="text-base">{flags[l]}</span>
              <span>{labels[l]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
