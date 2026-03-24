import { describe, it, expect } from 'vitest';
import { getTodayDayIndex, toDateString, getWeekStart, DAY_LABELS } from '@/lib/dates';

describe('getTodayDayIndex', () => {
  it('returns a number between 0 and 6', () => {
    const idx = getTodayDayIndex();
    expect(idx).toBeGreaterThanOrEqual(0);
    expect(idx).toBeLessThanOrEqual(6);
  });
});

describe('toDateString', () => {
  it('returns a string in YYYY-MM-DD format', () => {
    const result = toDateString();
    expect(result).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });

  it('returns correct string for a specific date', () => {
    const date = new Date('2024-07-15T12:00:00Z');
    expect(toDateString(date)).toBe('2024-07-15');
  });
});

describe('getWeekStart', () => {
  it('returns a Monday for a known date', () => {
    // 2024-07-15 is a Monday; pass noon UTC to avoid timezone shifts
    const mon = new Date('2024-07-15T12:00:00');
    const result = getWeekStart(mon);
    expect(result).toBe('2024-07-15');
  });

  it('returns the preceding Monday when given a Wednesday', () => {
    // 2024-07-17 is a Wednesday
    const wed = new Date('2024-07-17T12:00:00');
    const result = getWeekStart(wed);
    expect(result).toBe('2024-07-15'); // Monday
  });

  it('returns the preceding Monday when given a Sunday', () => {
    // 2024-07-21 is a Sunday
    const sun = new Date('2024-07-21T12:00:00');
    const result = getWeekStart(sun);
    expect(result).toBe('2024-07-15'); // Monday
  });
});

describe('DAY_LABELS', () => {
  it('has exactly 7 entries', () => {
    expect(DAY_LABELS).toHaveLength(7);
  });
});
