'use client';

import { useState } from 'react';
import { SHOTS } from '@/data/shots';
import { getTodayDayIndex } from '@/lib/dates';
import { useDailyTracking } from '@/hooks/useDailyTracking';
import { useLanguage } from '@/contexts/LanguageContext';

const DAY_KEYS = ['day.mon', 'day.tue', 'day.wed', 'day.thu', 'day.fri', 'day.sat', 'day.sun'] as const;
const DAY_ABBR = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'] as const;

const SHOT_NAME_KEYS: Record<string, string> = {
  'Metabolic Flush': 'shots.name.metabolic_flush',
  'Belly Blaster': 'shots.name.belly_blaster',
  'Immune Booster': 'shots.name.immune_booster',
  'Fat Flush': 'shots.name.fat_flush',
  'Anti-Inflammatory': 'shots.name.anti_inflammatory',
  'Detox Green': 'shots.name.detox_green',
  'Hormone Balance': 'shots.name.hormone_balance',
};

const SHOT_WHY_KEYS: Record<string, string> = {
  'Metabolic Flush': 'shots.why.metabolic_flush',
  'Belly Blaster': 'shots.why.belly_blaster',
  'Immune Booster': 'shots.why.immune_booster',
  'Fat Flush': 'shots.why.fat_flush',
  'Anti-Inflammatory': 'shots.why.anti_inflammatory',
  'Detox Green': 'shots.why.detox_green',
  'Hormone Balance': 'shots.why.hormone_balance',
};

const DAY_FULL_KEYS: Record<string, string> = {
  Monday: 'day.monday',
  Tuesday: 'day.tuesday',
  Wednesday: 'day.wednesday',
  Thursday: 'day.thursday',
  Friday: 'day.friday',
  Saturday: 'day.saturday',
  Sunday: 'day.sunday',
};

export default function MetaBoostShots() {
  const [current, setCurrent] = useState(() => getTodayDayIndex());
  const { tracking, toggleShot } = useDailyTracking();
  const { t } = useLanguage();

  const shot = SHOTS[current];

  return (
    <div>
      <div className="bg-accent-amber-light border border-[#FAC775] rounded-md p-3.5 mb-4 text-[13px] text-accent-amber-dark leading-relaxed">
        <strong>{t('shots.why_title')}</strong> {t('shots.why_text')}
      </div>

      <div className="flex gap-1.5 flex-wrap mb-4">
        {DAY_KEYS.map((key, i) => (
          <button
            key={key}
            onClick={() => setCurrent(i)}
            className={`px-3 py-1.5 border rounded-md text-xs font-medium cursor-pointer transition-all
              ${i === current ? 'text-white border-section-orange-dark' : 'bg-white border-surface-border text-content-muted hover:border-section-orange-dark hover:text-section-orange-dark'}`}
            style={i === current ? { background: '#92400E', borderColor: '#92400E' } : {}}
          >
            {t(key)}
          </button>
        ))}
      </div>

      <div className="rounded-md p-4 text-white" style={{ background: shot.color }}>
        <div className="text-base font-bold mb-0.5">{t(SHOT_NAME_KEYS[shot.name] || shot.name)}</div>
        <div className="text-[11px] opacity-80">
          {t(DAY_FULL_KEYS[shot.day] || shot.day)} &mdash; {t('shots.empty_stomach')}
        </div>

        <div className="mt-3 text-[11px] font-bold opacity-80 uppercase tracking-wider mb-1">
          {t('shots.ingredients')}
        </div>
        {shot.ingredients.map((_, i) => (
          <div key={i} className="flex items-center gap-2 py-1.5 border-b border-white/15">
            <span className="text-white/60">&#9679;</span>
            <span>{t(`shot.${DAY_ABBR[current]}.ingredient.${i}`)}</span>
          </div>
        ))}

        <div className="mt-3 text-[11px] font-bold opacity-80 uppercase tracking-wider mb-1">
          {t('shots.why_works')}
        </div>
        <div className="text-xs opacity-90 leading-relaxed">{t(SHOT_WHY_KEYS[shot.name] || shot.name)}</div>

        <button
          onClick={toggleShot}
          className={`w-full py-2.5 rounded-md text-[13px] font-semibold cursor-pointer mt-3 border-none transition-all
            ${
              tracking?.shot_done
                ? 'bg-[#065F46] text-white font-bold'
                : 'bg-white/15 text-white border-2 border-white/40'
            }`}
        >
          {tracking?.shot_done ? `✓ ${t('shots.done_today')}` : `✓ ${t('shots.mark_done')}`}
        </button>
      </div>
    </div>
  );
}
