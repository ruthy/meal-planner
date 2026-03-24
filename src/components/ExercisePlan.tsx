'use client';

import { useState, useEffect } from 'react';
import { YOGA_30_DAYS } from '@/data/exercises';
import { EXERCISE_30_DAYS } from '@/data/exercises30';
import { useDailyTracking } from '@/hooks/useDailyTracking';
import { useLanguage } from '@/contexts/LanguageContext';

type ProgramMode = 'yoga' | 'fitness';

function getYogaWeek(dayIndex: number): { week: number; name: string } {
  if (dayIndex < 7) return { week: 1, name: 'yoga30.week.1.name' };
  if (dayIndex < 14) return { week: 2, name: 'yoga30.week.2.name' };
  if (dayIndex < 21) return { week: 3, name: 'yoga30.week.3.name' };
  if (dayIndex < 28) return { week: 4, name: 'yoga30.week.4.name' };
  return { week: 5, name: 'yoga30.week.5.name' };
}

function getPhase(dayIndex: number): { phase: number; name: string } {
  if (dayIndex < 10) return { phase: 1, name: 'exercise30.phase.1.name' };
  if (dayIndex < 20) return { phase: 2, name: 'exercise30.phase.2.name' };
  return { phase: 3, name: 'exercise30.phase.3.name' };
}

const YOGA_WEEK_COLORS = {
  1: 'bg-teal-100 border-teal-300 text-teal-800',
  2: 'bg-blue-100 border-blue-300 text-blue-800',
  3: 'bg-indigo-100 border-indigo-300 text-indigo-800',
  4: 'bg-purple-100 border-purple-300 text-purple-800',
  5: 'bg-pink-100 border-pink-300 text-pink-800',
} as const;

const YOGA_WEEK_BAR_COLORS = {
  1: 'bg-teal-500',
  2: 'bg-blue-500',
  3: 'bg-indigo-500',
  4: 'bg-purple-500',
  5: 'bg-pink-500',
} as const;

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
  'Gentle Flow': 'exercise.type.gentle_flow',
  'Standing Basics': 'exercise.type.standing_basics',
  Flexibility: 'exercise.type.flexibility',
  'Balance & Focus': 'exercise.type.balance_focus',
  'Hip Openers': 'exercise.type.hip_openers',
  Restorative: 'exercise.type.restorative',
  'Full Body Flow': 'exercise.type.full_body_flow',
  'Standing Strength': 'exercise.type.standing_strength',
  'Core & Twists': 'exercise.type.core_twists',
};

export default function ExercisePlan() {
  const [mode, setMode] = useState<ProgramMode>('yoga');
  const [currentYoga, setCurrentYoga] = useState(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('yoga30_current_day');
        if (saved !== null) {
          const parsed = parseInt(saved, 10);
          if (!isNaN(parsed) && parsed >= 0 && parsed < 30) return parsed;
        }
      } catch {
        // localStorage unavailable
      }
    }
    return 0;
  });
  const [currentFit, setCurrentFit] = useState(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('exercise30_current_day');
        if (saved !== null) {
          const parsed = parseInt(saved, 10);
          if (!isNaN(parsed) && parsed >= 0 && parsed < 30) return parsed;
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

  // Persist yoga 30-day progress
  useEffect(() => {
    try {
      localStorage.setItem('yoga30_current_day', String(currentYoga));
    } catch {
      // localStorage unavailable
    }
  }, [currentYoga]);

  // Persist 39-day progress
  useEffect(() => {
    try {
      localStorage.setItem('exercise30_current_day', String(currentFit));
    } catch {
      // localStorage unavailable
    }
  }, [currentFit]);

  const plan = mode === 'yoga' ? YOGA_30_DAYS[currentYoga] : EXERCISE_30_DAYS[currentFit];
  const { week: yogaWeek, name: yogaWeekName } = getYogaWeek(currentYoga);
  const { phase, name: phaseName } = getPhase(currentFit);

  return (
    <div>
      {/* Program selector */}
      <div className="flex gap-2 mb-3">
        <button
          onClick={() => {
            setMode('yoga');
            setActiveVideo(null);
          }}
          className={`flex-1 px-3 py-2 rounded-md text-xs font-semibold border cursor-pointer transition-all
            ${
              mode === 'yoga'
                ? 'bg-brand-green text-white border-brand-green'
                : 'bg-white text-content-muted border-surface-border hover:border-brand-green hover:text-brand-green'
            }`}
        >
          {t('exercise30.program_select.weekly')}
        </button>
        <button
          onClick={() => {
            setMode('fitness');
            setActiveVideo(null);
          }}
          className={`flex-1 px-3 py-2 rounded-md text-xs font-semibold border cursor-pointer transition-all
            ${
              mode === 'fitness'
                ? 'bg-brand-green text-white border-brand-green'
                : 'bg-white text-content-muted border-surface-border hover:border-brand-green hover:text-brand-green'
            }`}
        >
          {t('exercise30.program_select.fitness')}
        </button>
      </div>

      {mode === 'yoga' ? (
        /* ── 30-Day Yoga Header ── */
        <div className="mb-3.5">
          {/* Week indicator */}
          <div
            className={`border rounded-md px-3 py-1.5 mb-2 text-xs font-bold ${YOGA_WEEK_COLORS[yogaWeek as 1 | 2 | 3 | 4 | 5]}`}
          >
            {t(yogaWeekName)}
          </div>

          {/* Progress bar */}
          <div className="mb-2">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[11px] text-content-muted font-medium">
                {t('yoga30.progress').replace('{current}', String(currentYoga + 1))}
              </span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-300 ${YOGA_WEEK_BAR_COLORS[yogaWeek as 1 | 2 | 3 | 4 | 5]}`}
                style={{ width: `${((currentYoga + 1) / 30) * 100}%` }}
              />
            </div>
          </div>

          {/* Day selector — scrollable row */}
          <div className="flex gap-1 overflow-x-auto pb-1 -mx-1 px-1">
            {YOGA_30_DAYS.map((_, i) => {
              const dayWeek = getYogaWeek(i);
              const isActive = i === currentYoga;
              return (
                <button
                  key={i}
                  onClick={() => {
                    setCurrentYoga(i);
                    setActiveVideo(null);
                  }}
                  className={`flex-shrink-0 w-8 h-8 rounded-full text-[10px] font-bold cursor-pointer transition-all border
                    ${
                      isActive
                        ? `${YOGA_WEEK_BAR_COLORS[dayWeek.week as 1 | 2 | 3 | 4 | 5]} text-white border-transparent`
                        : 'bg-white border-surface-border text-content-muted hover:border-brand-green hover:text-brand-green'
                    }`}
                >
                  {i + 1}
                </button>
              );
            })}
          </div>
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
                {t('exercise30.progress').replace('{current}', String(currentFit + 1))}
              </span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-300 ${PHASE_BAR_COLORS[phase as 1 | 2 | 3]}`}
                style={{ width: `${((currentFit + 1) / 30) * 100}%` }}
              />
            </div>
          </div>

          {/* Day selector — scrollable row */}
          <div className="flex gap-1 overflow-x-auto pb-1 -mx-1 px-1">
            {EXERCISE_30_DAYS.map((_, i) => {
              const dayPhase = getPhase(i);
              const isActive = i === currentFit;
              return (
                <button
                  key={i}
                  onClick={() => {
                    setCurrentFit(i);
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
            {mode === 'yoga' ? (
              <>
                {t('yoga30.day_label').replace('{n}', String(currentYoga + 1))} &mdash;{' '}
                {t(EXERCISE_TYPE_KEYS[plan.type] || plan.type)}
              </>
            ) : (
              <>
                {t('exercise30.day_label').replace('{n}', String(currentFit + 1))} &mdash;{' '}
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
                {mode === 'yoga'
                  ? t(`yoga30.d${currentYoga + 1}.move.${i}.name`)
                  : t(`exercise30.d${currentFit + 1}.move.${i}.name`)}
              </div>
              <div className="text-[11px] text-content-muted">
                {mode === 'yoga'
                  ? t(`yoga30.d${currentYoga + 1}.move.${i}.desc`)
                  : t(`exercise30.d${currentFit + 1}.move.${i}.desc`)}
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
