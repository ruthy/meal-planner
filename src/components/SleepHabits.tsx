import { SLEEP_STATS, SLEEP_TIPS, SLEEP_SCHEDULE } from '@/data/sleep';

export default function SleepHabits() {
  return (
    <div>
      {/* Stats row */}
      <div className="grid grid-cols-3 gap-2.5 mb-4">
        {SLEEP_STATS.map((s) => (
          <div key={s.label} className="bg-accent-purple-light rounded-md p-3.5 text-center">
            <div className="text-[22px] font-extrabold text-accent-purple-dark">{s.value}</div>
            <div className="text-[11px] uppercase text-accent-purple-dark tracking-wider">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Tips */}
      {SLEEP_TIPS.map((tip, i) => (
        <div key={i} className="bg-white border border-surface-border rounded-md p-3 mb-2">
          <div className="text-[13px] font-bold text-accent-purple-dark mb-0.5">{tip.title}</div>
          <div className="text-xs text-content-muted leading-relaxed">{tip.description}</div>
        </div>
      ))}

      {/* Evening routine */}
      <div className="bg-accent-purple-light rounded-md p-3.5 mt-3.5">
        <div className="text-xs font-bold text-accent-purple-dark uppercase tracking-wider mb-2.5">Evening routine</div>
        {SLEEP_SCHEDULE.map((item, i) => (
          <div key={i} className="flex items-center gap-2.5 mb-1.5">
            <span className="text-[11px] font-bold bg-accent-purple-dark text-white px-2 py-0.5 rounded-full whitespace-nowrap">
              {item.time}
            </span>
            <span className="text-xs text-accent-purple-dark">{item.action}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
