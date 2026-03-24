import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '@/test/mocks';

import TopNav from '@/components/TopNav';
import ReminderBar from '@/components/ReminderBar';
import KeyRules from '@/components/KeyRules';
import SleepHabits from '@/components/SleepHabits';
import WaterTracker from '@/components/WaterTracker';
import ShoppingList from '@/components/ShoppingList';
import ExercisePlan from '@/components/ExercisePlan';
import Calculator from '@/components/Calculator';
import MetaBoostShots from '@/components/MetaBoostShots';
import StreakDisplay from '@/components/progress/StreakDisplay';
import WeightEntryForm from '@/components/progress/WeightEntryForm';

describe('Component smoke tests', () => {
  it('TopNav renders "DailyBite"', () => {
    renderWithProviders(<TopNav />);
    expect(screen.getByText('DailyBite')).toBeInTheDocument();
  });

  it('ReminderBar renders reminder text', () => {
    renderWithProviders(<ReminderBar />);
    expect(screen.getByText('Get daily reminders')).toBeInTheDocument();
    expect(screen.getByText('Turn on')).toBeInTheDocument();
  });

  it('KeyRules renders all 9 rules including "Drink 8 glasses"', () => {
    renderWithProviders(<KeyRules />);
    expect(screen.getByText('Drink 8 glasses of water every day')).toBeInTheDocument();
    expect(screen.getByText('No processed food or added sugar')).toBeInTheDocument();
    expect(screen.getByText('Eat protein at every single meal')).toBeInTheDocument();
    expect(screen.getByText(/Stop eating 2/)).toBeInTheDocument();
    expect(screen.getByText(/Sleep 7/)).toBeInTheDocument();
    expect(screen.getByText(/7.*12 min workout every day/)).toBeInTheDocument();
    expect(screen.getByText(/Your daily calorie target/)).toBeInTheDocument();
    expect(screen.getByText('Lose 1 kg per week safely')).toBeInTheDocument();
    expect(screen.getByText(/If you miss a day/)).toBeInTheDocument();
  });

  it('SleepHabits renders sleep stats', () => {
    renderWithProviders(<SleepHabits />);
    expect(screen.getByText('10pm')).toBeInTheDocument();
    expect(screen.getByText('6am')).toBeInTheDocument();
    expect(screen.getByText(/Evening Routine/i)).toBeInTheDocument();
  });

  it('WaterTracker renders "0 / 8 glasses"', () => {
    renderWithProviders(<WaterTracker />);
    expect(screen.getByText(/0 \/ 8/)).toBeInTheDocument();
    expect(screen.getByText(/glasses/)).toBeInTheDocument();
  });

  it('ShoppingList renders category "Protein"', () => {
    renderWithProviders(<ShoppingList />);
    expect(screen.getByText('Protein')).toBeInTheDocument();
    expect(screen.getByText('Vegetables')).toBeInTheDocument();
    expect(screen.getByText('Fruit')).toBeInTheDocument();
  });

  it('ExercisePlan renders exercise type info', () => {
    renderWithProviders(<ExercisePlan />);
    // Should render day buttons and low impact text
    expect(screen.getByText(/Low impact/)).toBeInTheDocument();
  });

  it('Calculator renders form with Calculate button', () => {
    renderWithProviders(<Calculator onTargetChange={() => {}} />);
    expect(screen.getByText('Calculate')).toBeInTheDocument();
    expect(screen.getByText(/Age/)).toBeInTheDocument();
  });

  it('MetaBoostShots renders shot name', () => {
    renderWithProviders(<MetaBoostShots />);
    // One of the shot names should appear depending on the day
    const shotNames = [
      'Metabolic Flush',
      'Belly Blaster',
      'Immune Booster',
      'Fat Flush',
      'Anti-Inflammatory',
      'Detox Green',
      'Hormone Balance',
    ];
    const found = shotNames.some((name) => screen.queryByText(name));
    expect(found).toBe(true);
  });

  it('StreakDisplay renders current streak "5" and best streak "12"', () => {
    renderWithProviders(<StreakDisplay />);
    expect(screen.getByText('5')).toBeInTheDocument();
    expect(screen.getByText('12')).toBeInTheDocument();
    expect(screen.getByText('Day streak')).toBeInTheDocument();
    expect(screen.getByText('Best streak')).toBeInTheDocument();
  });

  it('WeightEntryForm renders the Log button', () => {
    renderWithProviders(<WeightEntryForm />);
    expect(screen.getByText('Log')).toBeInTheDocument();
  });
});
