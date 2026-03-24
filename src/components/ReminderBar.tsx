'use client';

import { useState } from 'react';
import { startReminders } from '@/lib/notifications';
import { REMINDER_SCHEDULE } from '@/data/reminders';

export default function ReminderBar() {
  const [active, setActive] = useState(false);

  const handleEnable = async () => {
    const ok = await startReminders(REMINDER_SCHEDULE);
    if (ok) setActive(true);
    else alert('Please allow notifications when prompted, or use Chrome/Safari.');
  };

  return (
    <div className="bg-[#065F46] rounded-lg px-5 py-2.5 flex items-center justify-between gap-3 flex-wrap mb-3.5">
      <div className="text-xs text-white font-semibold flex-1">Get daily reminders for meals, water &amp; workouts</div>
      <button
        onClick={handleEnable}
        className="bg-white/20 border-[1.5px] border-white/50 text-white rounded-full px-4 py-1.5 text-[11px] font-bold cursor-pointer whitespace-nowrap flex-shrink-0 hover:bg-white/35 transition-colors"
      >
        {active ? 'Reminders ON!' : 'Turn ON daily reminders'}
      </button>
    </div>
  );
}
