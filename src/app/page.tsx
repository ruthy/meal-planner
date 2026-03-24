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
import { useAuth } from '@/contexts/AuthContext';

export default function HomePage() {
  const { loading } = useAuth();
  const [targetCalories, setTargetCalories] = useState(1150);

  if (loading) {
    return (
      <div
        className="fixed inset-0 flex items-center justify-center"
        style={{ background: 'linear-gradient(160deg, #065F46 0%, #1D9E75 100%)' }}
      >
        <div className="text-white text-lg font-bold">Loading...</div>
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
          title="📊 Your progress"
          subtitle="Track your weight, streaks, and daily completion"
          barClass="bg-brand-green"
          defaultOpen={true}
        >
          <ProgressDashboard />
        </SectionWrap>

        {/* Calculator */}
        <SectionWrap
          title="🆓 Daily calorie calculator"
          subtitle="Find your exact daily calories based on age, height, weight & activity"
          barClass="bg-brand-green"
          defaultOpen={true}
        >
          <Calculator onTargetChange={setTargetCalories} />
        </SectionWrap>

        {/* Meal Planner */}
        <SectionWrap
          title="🌺 Daily meal planner"
          subtitle={`Gluten-free · 7 unique days · ${targetCalories.toLocaleString()} cal/day · tap any meal to expand`}
          barClass="bg-section-teal"
          defaultOpen={false}
        >
          <MealPlanner targetCalories={targetCalories} />
        </SectionWrap>

        {/* MetaBoost Shots */}
        <SectionWrap
          title="🍉 MetaBoost morning power shots"
          subtitle="Take 1 shot every morning on empty stomach — designed for women 40+"
          barClass="bg-gradient-to-br from-section-orange to-section-orange-dark"
          defaultOpen={true}
        >
          <MetaBoostShots />
        </SectionWrap>

        {/* Water Tracker */}
        <SectionWrap
          title="💧 Daily water intake tracker"
          subtitle="8 glasses a day — tap each glass to mark as drunk"
          barClass="bg-section-blue"
          defaultOpen={true}
        >
          <WaterTracker />
        </SectionWrap>

        {/* Key Rules */}
        <SectionWrap
          title="🎯 Key rules to follow every day"
          subtitle="Your 9 non-negotiable habits for fat loss success"
          barClass="bg-section-red"
          defaultOpen={true}
        >
          <KeyRules />
        </SectionWrap>

        {/* Sleep */}
        <SectionWrap
          title="💤 Sleep habits & fat loss"
          subtitle="Sleep is as important as diet — especially after 40"
          barClass="bg-section-purple"
          defaultOpen={true}
        >
          <SleepHabits />
        </SectionWrap>

        {/* Shopping List */}
        <SectionWrap
          title="🛒 Weekly shopping list"
          subtitle="Everything you need for 7 days — tap items to check off as you shop"
          barClass="bg-section-brown"
          defaultOpen={true}
        >
          <ShoppingList />
        </SectionWrap>

        {/* Exercise */}
        <SectionWrap
          title="🏋️ Weekly workout plan — 7 to 12 minutes a day"
          subtitle="Low-impact · no jumping · no gym needed · safe for joints"
          barClass="bg-brand-green"
          defaultOpen={true}
        >
          <ExercisePlan />
        </SectionWrap>

        {/* Footer */}
        <div className="text-center text-[11px] text-content-muted mt-7 pt-4 border-t border-surface-border">
          &copy; 2026 The plan that transforms how you eat &middot; Prepared by RNC Consulting &mdash; Ruthy Navon
        </div>
      </div>
    </>
  );
}
