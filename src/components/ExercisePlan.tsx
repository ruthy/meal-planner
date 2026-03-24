'use client';

import { useState } from 'react';
import { EXERCISE_PLANS } from '@/data/exercises';
import { getTodayDayIndex, DAY_LABELS } from '@/lib/dates';
import { useDailyTracking } from '@/hooks/useDailyTracking';

export default function ExercisePlan() {
  const [current, setCurrent] = useState(() => getTodayDayIndex());
  const { tracking, toggleExercise } = useDailyTracking();

  const plan = EXERCISE_PLANS[current];

  return (
    <div>
      <div className="flex gap-1.5 flex-wrap mb-3.5">
        {DAY_LABELS.map((label, i) => (
          <button
            key={label}
            onClick={() => setCurrent(i)}
            className={`px-2.5 py-2 border rounded-md text-xs font-semibold cursor-pointer transition-all text-center
              ${
                i === current
                  ? 'bg-brand-green-light border-brand-green-mid text-brand-green-dark'
                  : 'bg-white border-surface-border text-content-muted hover:border-brand-green hover:text-brand-green'
              }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="bg-brand-green-light border border-brand-green rounded-md p-3 mb-3 flex justify-between items-center">
        <div>
          <div className="text-sm font-bold text-brand-green-dark">
            {plan.day} &mdash; {plan.type}
          </div>
          <div className="text-[11px] text-brand-green-dark">{plan.time} &middot; low-impact &middot; no jumping</div>
        </div>
      </div>

      {plan.moves.map((move, i) => (
        <div key={i} className="flex items-center gap-2.5 p-2 bg-white border border-surface-border rounded-md mb-1.5">
          <div className="w-[22px] h-[22px] rounded-full bg-brand-green-light text-brand-green-dark text-[10px] font-bold flex items-center justify-center flex-shrink-0">
            {i + 1}
          </div>
          <div className="flex-1">
            <div className="text-[13px] font-semibold text-content">{move.name}</div>
            <div className="text-[11px] text-content-muted">{move.description}</div>
          </div>
          {move.videoUrl && (
            <a
              href={move.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-2.5 py-1 bg-red-50 border border-red-200 rounded-full text-[10px] font-semibold text-red-600 hover:bg-red-100 transition-colors flex-shrink-0"
            >
              <span>&#9654;</span> Video
            </a>
          )}
        </div>
      ))}

      <button
        onClick={toggleExercise}
        className={`w-full py-2.5 border-none rounded-md text-[13px] font-semibold cursor-pointer mt-2 transition-all
          ${tracking?.exercise_done ? 'bg-[#065F46] text-white font-bold' : 'bg-brand-green text-white'}`}
      >
        {tracking?.exercise_done ? '✓ Workout done today!' : '✓ Mark workout as done!'}
      </button>
    </div>
  );
}
