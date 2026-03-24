'use client';

import { useState, useEffect } from 'react';
import { EXERCISE_PLANS } from '@/data/exercises';
import { EXERCISE_39_DAYS } from '@/data/exercises39';
import { getTodayDayIndex } from '@/lib/dates';
import { useDailyTracking } from '@/hooks/useDailyTracking';
import { useLanguage } from '@/contexts/LanguageContext';

const DAY_KEYS = ['day.mon', 'day.tue', 'day.wed', 'day.thu', 'day.fri', 'day.sat', 'day.sun'] as const;
const DAY_ABBR = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'] as const;

const DAY_FULL_KEYS: Record<string, string> = {
  Monday: 'day.monday',
  Tuesday: 'day.tuesday',
  Wednesday: 'day.wednesday',
  Thursday: 'day.thursday',
  Friday: 'day.friday',
  Saturday: 'day.saturday',
  Sunday: 'day.sunday',
};

const EXERCISE_TYPE_KEYS: Record<string, string> = {
  Cardio: 'exercise.type.cardio',
  Strength: 'exercise.type.strength',
  Core: 'exercise.type.core',
  Stretch: 'exercise.type.stretch',
  Rest: 'exercise.type.rest',
  'Lower Body': 'exercise.type.lower_body',
  'Upper Body': 'exercise.type.upper_body',
  'Full Body': 'exercise.type.full_body',
  'Lower Body + Core': 'exercise.type.lower_body_core',
  'Upper Body + Cardio': 'exercise.type.upper_body_cardio',
};

type ProgramMode = 'weekly' | '39day';

function getPhase(dayIndex: number): { phase: number; name: string } {
  if (dayIndex < 13) return { phase: 1, name: 'exercise39.phase.1.name' };
  if (dayIndex < 26) return { phase: 2, name: 'exercise39.phase.2.name' };
  return { phase: 3, name: 'exercise39.phase.3.name' };
}

const PHASE_COLORS = {
  1: 'bg-emerald-100 border-emerald-300 text-emerald-800',
  2: 'bg-amber-100 border-amber-300 text-amber-800',
  3: 'bg-purple-100 border-purple-300 text-purple-800',
} as const;

const PHASE_BAR_COLORS = {
  1: 'bg-emerald-500',
  2: 'bg-amber-500',
  3: 'bg-purple-500',
} as const;

export default function ExercisePlan() {
  const [mode, setMode] = useState<ProgramMode>('weekly');
  const [current, setCurrent] = useState(() => getTodayDayIndex());
  const [current39, setCurrent39] = useState(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('exercise39_current_day');
        if (saved !== null) {
          const parsed = parseInt(saved, 10);
          if (!isNaN(parsed) && parsed >= 0 && parsed < 39) return parsed;
        }
      } catch {
        // localStorage unavailable
      }
    }
    return 0;
  });
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const { tracking, toggleExercise } = useDailyTracking();
  const { t } = useLanguage();

  // Persist 39-day progress
  useEffect(() => {
    try {
      localStorage.setItem('exercise39_current_day', String(current39));
    } catch {
      // localStorage unavailable
    }
  }, [current39]);

  const plan = mode === 'weekly' ? EXERCISE_PLANS[current] : EXERCISE_39_DAYS[current39];
  const { phase, name: phaseName } = getPhase(current39);

  return (
    <div>
      {/* Program selector */}
      <div className="flex gap-2 mb-3">
        <button
          onClick={() => {
            setMode('weekly');
            setActiveVideo(null);
          }}
          className={`flex-1 px-3 py-2 rounded-md text-xs font-semibold border cursor-pointer transition-all
            ${
              mode === 'weekly'
                ? 'bg-brand-green text-white border-brand-green'
                : 'bg-white text-content-muted border-surface-border hover:border-brand-green hover:text-brand-green'
            }`}
        >
          {t('exercise39.program_select.weekly')}
        </button>
        <button
          onClick={() => {
            setMode('39day');
            setActiveVideo(null);
          }}
          className={`flex-1 px-3 py-2 rounded-md text-xs font-semibold border cursor-pointer transition-all
            ${
              mode === '39day'
                ? 'bg-brand-green text-white border-brand-green'
                : 'bg-white text-content-muted border-surface-border hover:border-brand-green hover:text-brand-green'
            }`}
        >
          {t('exercise39.program_select.39day')}
        </button>
      </div>

      {mode === 'weekly' ? (
        /* ── Weekly Plan Day Selector ── */
        <div className="flex gap-1.5 flex-wrap mb-3.5">
          {DAY_KEYS.map((key, i) => (
            <button
              key={key}
              onClick={() => {
                setCurrent(i);
                setActiveVideo(null);
              }}
              className={`px-2.5 py-2 border rounded-md text-xs font-semibold cursor-pointer transition-all text-center
                ${
                  i === current
                    ? 'bg-brand-green-light border-brand-green-mid text-brand-green-dark'
                    : 'bg-white border-surface-border text-content-muted hover:border-brand-green hover:text-brand-green'
                }`}
            >
              {t(key)}
            </button>
          ))}
        </div>
      ) : (
        /* ── 39-Day Program Header ── */
        <div className="mb-3.5">
          {/* Phase indicator */}
          <div className={`border rounded-md px-3 py-1.5 mb-2 text-xs font-bold ${PHASE_COLORS[phase as 1 | 2 | 3]}`}>
            {t(phaseName)}
          </div>

          {/* Progress bar */}
          <div className="mb-2">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[11px] text-content-muted font-medium">
                {t('exercise39.progress').replace('{current}', String(current39 + 1))}
              </span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-300 ${PHASE_BAR_COLORS[phase as 1 | 2 | 3]}`}
                style={{ width: `${((current39 + 1) / 39) * 100}%` }}
              />
            </div>
          </div>

          {/* Day selector — scrollable row */}
          <div className="flex gap-1 overflow-x-auto pb-1 -mx-1 px-1">
            {EXERCISE_39_DAYS.map((_, i) => {
              const dayPhase = getPhase(i);
              const isActive = i === current39;
              return (
                <button
                  key={i}
                  onClick={() => {
                    setCurrent39(i);
                    setActiveVideo(null);
                  }}
                  className={`flex-shrink-0 w-8 h-8 rounded-full text-[10px] font-bold cursor-pointer transition-all border
                    ${
                      isActive
                        ? `${PHASE_BAR_COLORS[dayPhase.phase as 1 | 2 | 3]} text-white border-transparent`
                        : 'bg-white border-surface-border text-content-muted hover:border-brand-green hover:text-brand-green'
                    }`}
                >
                  {i + 1}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* ── Day Info Banner ── */}
      <div className="bg-brand-green-light border border-brand-green rounded-md p-3 mb-3 flex justify-between items-center">
        <div>
          <div className="text-sm font-bold text-brand-green-dark">
            {mode === 'weekly' ? (
              <>
                {t(DAY_FULL_KEYS[plan.day] || plan.day)} &mdash; {t(EXERCISE_TYPE_KEYS[plan.type] || plan.type)}
              </>
            ) : (
              <>
                {t('exercise39.day_label').replace('{n}', String(current39 + 1))} &mdash;{' '}
                {t(EXERCISE_TYPE_KEYS[plan.type] || plan.type)}
              </>
            )}
          </div>
          <div className="text-[11px] text-brand-green-dark">
            {plan.time} &middot; {t('exercise.low_impact')}
          </div>
        </div>
      </div>

      {/* ── Exercise Cards ── */}
      {plan.moves.map((move, i) => (
        <div key={i} className="bg-white border border-surface-border rounded-md mb-1.5 overflow-hidden">
          <div className="flex items-center gap-2.5 p-2">
            <div className="w-[22px] h-[22px] rounded-full bg-brand-green-light text-brand-green-dark text-[10px] font-bold flex items-center justify-center flex-shrink-0">
              {i + 1}
            </div>
            <div className="flex-1">
              <div className="text-[13px] font-semibold text-content">
                {mode === 'weekly'
                  ? t(`exercise.${DAY_ABBR[current]}.move.${i}.name`)
                  : t(`exercise39.d${current39 + 1}.move.${i}.name`)}
              </div>
              <div className="text-[11px] text-content-muted">
                {mode === 'weekly'
                  ? t(`exercise.${DAY_ABBR[current]}.move.${i}.desc`)
                  : t(`exercise39.d${current39 + 1}.move.${i}.desc`)}
              </div>
            </div>
            {move.videoUrl && (
              <button
                onClick={() => setActiveVideo(activeVideo === move.videoUrl ? null : (move.videoUrl ?? null))}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold transition-colors flex-shrink-0 border-none cursor-pointer
                  ${
                    activeVideo === move.videoUrl ? 'bg-red-600 text-white' : 'bg-red-50 text-red-600 hover:bg-red-100'
                  }`}
              >
                <span>{activeVideo === move.videoUrl ? '✕' : '▶'}</span>
                {activeVideo === move.videoUrl ? t('exercise.close_video') : t('exercise.watch_video')}
              </button>
            )}
          </div>
          {activeVideo === move.videoUrl && move.videoUrl && (
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${move.videoUrl}?rel=0&modestbranding=1`}
                title={move.name}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
        </div>
      ))}

      {/* ── Done Button ── */}
      <button
        onClick={toggleExercise}
        className={`w-full py-2.5 border-none rounded-md text-[13px] font-semibold cursor-pointer mt-2 transition-all
          ${tracking?.exercise_done ? 'bg-[#065F46] text-white font-bold' : 'bg-brand-green text-white'}`}
      >
        {tracking?.exercise_done ? `✓ ${t('exercise.done_today')}` : `✓ ${t('exercise.mark_done')}`}
      </button>
    </div>
  );
}
