'use client';

import { useState } from 'react';
import { SHOTS } from '@/data/shots';
import { getTodayDayIndex, DAY_LABELS } from '@/lib/dates';
import { useDailyTracking } from '@/hooks/useDailyTracking';

export default function MetaBoostShots() {
  const [current, setCurrent] = useState(() => getTodayDayIndex());
  const { tracking, toggleShot } = useDailyTracking();

  const shot = SHOTS[current];

  return (
    <div>
      <div className="bg-accent-amber-light border border-[#FAC775] rounded-md p-3.5 mb-4 text-[13px] text-accent-amber-dark leading-relaxed">
        <strong>Why take a morning shot?</strong> These all-natural elixirs flush out toxins, boost the metabolic
        switch, revive the immune system, and reduce inflammation &mdash; all on an empty stomach before breakfast for
        maximum absorption.
      </div>

      <div className="flex gap-1.5 flex-wrap mb-4">
        {DAY_LABELS.map((label, i) => (
          <button
            key={label}
            onClick={() => setCurrent(i)}
            className={`px-3 py-1.5 border rounded-md text-xs font-medium cursor-pointer transition-all
              ${i === current ? 'text-white border-section-orange-dark' : 'bg-white border-surface-border text-content-muted hover:border-section-orange-dark hover:text-section-orange-dark'}`}
            style={i === current ? { background: '#92400E', borderColor: '#92400E' } : {}}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="rounded-md p-4 text-white" style={{ background: shot.color }}>
        <div className="text-base font-bold mb-0.5">{shot.name}</div>
        <div className="text-[11px] opacity-80">{shot.day} &mdash; take on empty stomach before breakfast</div>

        <div className="mt-3 text-[11px] font-bold opacity-80 uppercase tracking-wider mb-1">Ingredients</div>
        {shot.ingredients.map((ing, i) => (
          <div key={i} className="flex items-center gap-2 py-1.5 border-b border-white/15">
            <span className="text-white/60">&#9679;</span>
            <span>{ing}</span>
          </div>
        ))}

        <div className="mt-3 text-[11px] font-bold opacity-80 uppercase tracking-wider mb-1">Why it works</div>
        <div className="text-xs opacity-90 leading-relaxed">{shot.why}</div>

        <button
          onClick={toggleShot}
          className={`w-full py-2.5 rounded-md text-[13px] font-semibold cursor-pointer mt-3 border-none transition-all
            ${
              tracking?.shot_done
                ? 'bg-[#065F46] text-white font-bold'
                : 'bg-white/15 text-white border-2 border-white/40'
            }`}
        >
          {tracking?.shot_done ? '✓ Done! Shot taken today' : '✓ Mark as done — shot taken!'}
        </button>
      </div>
    </div>
  );
}
