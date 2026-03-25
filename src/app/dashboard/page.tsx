'use client';

import { useState } from 'react';
import TopNav from '@/components/TopNav';
import UserBar from '@/components/UserBar';
import ReminderBar from '@/components/ReminderBar';
import SectionWrap from '@/components/SectionWrap';
import Calculator from '@/components/Calculator';
import MealPlanner from '@/components/MealPlanner';
import MetaBoostShots from '@/components/MetaBoostShots';
import WaterTracker from '@/components/WaterTracker';
import KeyRules from '@/components/KeyRules';
import SleepHabits from '@/components/SleepHabits';
import ShoppingList from '@/components/ShoppingList';
import ExercisePlan from '@/components/ExercisePlan';
import ProgressDashboard from '@/components/progress/ProgressDashboard';
import FoodScanner from '@/components/FoodScanner';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';

export default function DashboardPage() {
  const { loading } = useAuth();
  const { t } = useLanguage();
  const [targetCalories, setTargetCalories] = useState(1150);

  if (loading) {
    return (
      <div
        className="fixed inset-0 flex items-center justify-center"
        style={{ background: 'linear-gradient(160deg, #065F46 0%, #1D9E75 100%)' }}
      >
        <div className="text-white text-lg font-bold">{t('common.loading')}</div>
      </div>
    );
  }

  return (
    <>
      <UserBar />
      <TopNav targetCalories={targetCalories} />

      <div className="max-w-[760px] mx-auto px-4 py-5 pb-10">
        <ReminderBar />

        {/* Progress Dashboard */}
        <SectionWrap
          title={t('section.progress.title')}
          subtitle={t('section.progress.subtitle')}
          barClass="bg-brand-green"
          defaultOpen={true}
        >
          <ProgressDashboard />
        </SectionWrap>

        {/* Scan My Plate */}
        <SectionWrap
          title={t('section.scan.title')}
          subtitle={t('section.scan.subtitle')}
          barClass="bg-brand-green"
          defaultOpen={false}
        >
          <FoodScanner />
        </SectionWrap>

        {/* Calculator */}
        <SectionWrap
          title={t('section.calculator.title')}
          subtitle={t('section.calculator.subtitle')}
          barClass="bg-brand-green"
          defaultOpen={true}
        >
          <Calculator onTargetChange={setTargetCalories} />
        </SectionWrap>

        {/* Meal Planner */}
        <SectionWrap
          title={t('section.meals.title')}
          subtitle={t('section.meals.subtitle')}
          barClass="bg-section-teal"
          defaultOpen={false}
        >
          <MealPlanner targetCalories={targetCalories} />
        </SectionWrap>

        {/* MetaBoost Shots */}
        <SectionWrap
          title={t('section.shots.title')}
          subtitle={t('section.shots.subtitle')}
          barClass="bg-gradient-to-br from-section-orange to-section-orange-dark"
          defaultOpen={true}
        >
          <MetaBoostShots />
        </SectionWrap>

        {/* Water Tracker */}
        <SectionWrap
          title={t('section.water.title')}
          subtitle={t('section.water.subtitle')}
          barClass="bg-section-blue"
          defaultOpen={true}
        >
          <WaterTracker />
        </SectionWrap>

        {/* Key Rules */}
        <SectionWrap
          title={t('section.rules.title')}
          subtitle={t('section.rules.subtitle')}
          barClass="bg-section-red"
          defaultOpen={true}
        >
          <KeyRules />
        </SectionWrap>

        {/* Sleep */}
        <SectionWrap
          title={t('section.sleep.title')}
          subtitle={t('section.sleep.subtitle')}
          barClass="bg-section-purple"
          defaultOpen={true}
        >
          <SleepHabits />
        </SectionWrap>

        {/* Shopping List */}
        <SectionWrap
          title={t('section.shopping.title')}
          subtitle={t('section.shopping.subtitle')}
          barClass="bg-section-brown"
          defaultOpen={true}
        >
          <ShoppingList />
        </SectionWrap>

        {/* Exercise */}
        <SectionWrap
          title={t('section.exercise.title')}
          subtitle={t('section.exercise.subtitle')}
          barClass="bg-brand-green"
          defaultOpen={true}
        >
          <ExercisePlan />
        </SectionWrap>

        {/* Footer */}
        <div className="text-center text-[11px] text-content-muted mt-7 pt-4 border-t border-surface-border">
          &copy; 2026 {t('app_name')} &middot; {t('footer.copyright')}
        </div>
      </div>
    </>
  );
}
