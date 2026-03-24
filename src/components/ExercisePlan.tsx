'use client';

import { useState } from 'react';
import { EXERCISE_PLANS } from '@/data/exercises';
import { getTodayDayIndex } from '@/lib/dates';
import { useDailyTracking } from '@/hooks/useDailyTracking';
import { useLanguage } from '@/contexts/LanguageContext';

const DAY_KEYS = ['day.mon', 'day.tue', 'day.wed', 'day.thu', 'day.fri', 'day.sat', 'day.sun'] as const;

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
};

export default function ExercisePlan() {
  const [current, setCurrent] = useState(() => getTodayDayIndex());
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const { tracking, toggleExercise } = useDailyTracking();
  const { t } = useLanguage();

  const plan = EXERCISE_PLANS[current];

  return (
    <div>
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

      <div className="bg-brand-green-light border border-brand-green rounded-md p-3 mb-3 flex justify-between items-center">
        <div>
          <div className="text-sm font-bold text-brand-green-dark">
            {t(DAY_FULL_KEYS[plan.day] || plan.day)} &mdash; {t(EXERCISE_TYPE_KEYS[plan.type] || plan.type)}
          </div>
          <div className="text-[11px] text-brand-green-dark">
            {plan.time} &middot; {t('exercise.low_impact')}
          </div>
        </div>
      </div>

      {plan.moves.map((move, i) => (
        <div key={i} className="bg-white border border-surface-border rounded-md mb-1.5 overflow-hidden">
          <div className="flex items-center gap-2.5 p-2">
            <div className="w-[22px] h-[22px] rounded-full bg-brand-green-light text-brand-green-dark text-[10px] font-bold flex items-center justify-center flex-shrink-0">
              {i + 1}
            </div>
            <div className="flex-1">
              <div className="text-[13px] font-semibold text-content">{move.name}</div>
              <div className="text-[11px] text-content-muted">{move.description}</div>
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
                {activeVideo === move.videoUrl ? 'Close' : t('exercise.watch_video')}
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
