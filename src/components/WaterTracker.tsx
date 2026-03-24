'use client';

import { GLASSES } from '@/data/water';
import { useDailyTracking } from '@/hooks/useDailyTracking';

export default function WaterTracker() {
  const { tracking, toggleGlass, resetWater } = useDailyTracking();
  const glasses = tracking?.water_glasses || [false, false, false, false, false, false, false, false];
  const count = glasses.filter(Boolean).length;
  const pct = (count / 8) * 100;

  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <div className="text-[13px] font-bold text-content">
          Progress: <span className="text-section-blue">{count} / 8 glasses</span>
        </div>
        <button
          onClick={resetWater}
          className="text-[11px] px-3 py-1 bg-surface-bg border border-surface-border rounded-full cursor-pointer text-content-muted hover:border-section-blue transition-colors"
        >
          Reset
        </button>
      </div>

      <div className="bg-surface-border rounded-full h-1.5 mb-4 overflow-hidden">
        <div className="h-1.5 rounded-full bg-section-blue transition-all duration-400" style={{ width: `${pct}%` }} />
      </div>

      <div className="grid grid-cols-4 gap-2 mb-4">
        {GLASSES.map((glass, i) => (
          <div
            key={i}
            onClick={() => toggleGlass(i)}
            className={`border-2 rounded-md py-2.5 px-1.5 text-center cursor-pointer transition-all
              ${
                glasses[i]
                  ? 'bg-accent-blue-light border-section-blue'
                  : 'bg-surface-bg border-surface-border hover:border-section-blue'
              }`}
          >
            <div className="text-xl mb-0.5">{glasses[i] ? '✅' : '💧'}</div>
            <div className="text-[10px] font-bold text-content-muted">{glass.time}</div>
            <div className="text-[10px] text-content-muted">{glass.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
