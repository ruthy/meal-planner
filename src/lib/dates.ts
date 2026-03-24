/** Returns 0=Mon, 1=Tue, ... 6=Sun */
export function getTodayDayIndex(): number {
  const d = new Date().getDay();
  return d === 0 ? 6 : d - 1;
}

/** Format date as YYYY-MM-DD */
export function toDateString(date: Date = new Date()): string {
  return date.toISOString().split('T')[0];
}

/** Get Monday of the current week */
export function getWeekStart(date: Date = new Date()): string {
  const d = new Date(date);
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1);
  d.setDate(diff);
  return toDateString(d);
}

export const DAY_LABELS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
