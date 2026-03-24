import { describe, it, expect, beforeEach } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders, setLanguage } from '@/test/mocks';

import TopNav from '@/components/TopNav';
import KeyRules from '@/components/KeyRules';
import WaterTracker from '@/components/WaterTracker';
import StreakDisplay from '@/components/progress/StreakDisplay';

describe('i18n — Hebrew rendering', () => {
  beforeEach(() => {
    setLanguage('he');
  });

  it('TopNav in Hebrew still renders "DailyBite" (app name stays English)', () => {
    renderWithProviders(<TopNav />);
    expect(screen.getByText('DailyBite')).toBeInTheDocument();
  });

  it('KeyRules in Hebrew renders first rule in Hebrew', () => {
    renderWithProviders(<KeyRules />);
    expect(screen.getByText('שתי 8 כוסות מים כל יום')).toBeInTheDocument();
  });

  it('WaterTracker in Hebrew renders "כוסות"', () => {
    renderWithProviders(<WaterTracker />);
    expect(screen.getByText(/כוסות/)).toBeInTheDocument();
  });

  it('StreakDisplay in Hebrew renders "רצף ימים"', () => {
    renderWithProviders(<StreakDisplay />);
    expect(screen.getByText('רצף ימים')).toBeInTheDocument();
    expect(screen.getByText('רצף שיא')).toBeInTheDocument();
  });
});
