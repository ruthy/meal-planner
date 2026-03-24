'use client';

import StreakDisplay from './StreakDisplay';
import WeightEntryForm from './WeightEntryForm';
import WeightChart from './WeightChart';

export default function ProgressDashboard() {
  return (
    <div className="space-y-3">
      <StreakDisplay />
      <WeightEntryForm />
      <WeightChart goalWeight={68} />
    </div>
  );
}
