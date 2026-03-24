import { ReminderSchedule } from '@/types';

let intervalId: ReturnType<typeof setInterval> | null = null;

export async function startReminders(schedule: ReminderSchedule[]): Promise<boolean> {
  if (typeof window === 'undefined' || !('Notification' in window)) return false;

  const permission = await Notification.requestPermission();
  if (permission !== 'granted') return false;

  if (intervalId) clearInterval(intervalId);
  const fired = new Set<string>();

  intervalId = setInterval(() => {
    const now = new Date();
    const hhmm = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    schedule.forEach((s) => {
      if (s.time === hhmm && !fired.has(s.time)) {
        fired.add(s.time);
        new Notification(s.title, { body: s.message });
        setTimeout(() => fired.delete(s.time), 90000);
      }
    });
  }, 30000);

  return true;
}

export function stopReminders() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
}
