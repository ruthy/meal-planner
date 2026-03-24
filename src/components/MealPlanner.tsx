'use client';

import { useMemo, useState } from 'react';
import { MEAL_DAYS, BASE_CALORIES } from '@/data/meals';
import { scaleMeals } from '@/lib/calculator';
import { getTodayDayIndex, DAY_LABELS } from '@/lib/dates';
import { useDailyTracking } from '@/hooks/useDailyTracking';

interface MealPlannerProps {
  targetCalories: number;
}

export default function MealPlanner({ targetCalories }: MealPlannerProps) {
  const [currentDay, setCurrentDay] = useState(() => getTodayDayIndex());
  const [openMeals, setOpenMeals] = useState<Record<number, boolean>>({});
  const { tracking, toggleMealDone } = useDailyTracking();

  const days = useMemo(() => scaleMeals(MEAL_DAYS, targetCalories, BASE_CALORIES), [targetCalories]);
  const day = days[currentDay];
  const totalCal = day.meals.reduce((s, m) => s + m.cal, 0);
  const totalP = day.meals.reduce((s, m) => s + m.p, 0);
  const totalC = day.meals.reduce((s, m) => s + m.c, 0);
  const totalF = day.meals.reduce((s, m) => s + m.f, 0);
  const pct = Math.min(100, Math.round((totalCal / targetCalories) * 100));
  const over = totalCal > targetCalories;

  return (
    <div>
      {/* Macro summary */}
      <div className="grid grid-cols-4 max-[480px]:grid-cols-2 gap-2 mb-4">
        {[
          { value: targetCalories.toLocaleString(), label: 'Cal / Day', green: true },
          { value: `~${Math.round((105 * targetCalories) / BASE_CALORIES)}g`, label: 'Protein' },
          { value: `~${Math.round((65 * targetCalories) / BASE_CALORIES)}g`, label: 'Carbs' },
          { value: `~${Math.round((38 * targetCalories) / BASE_CALORIES)}g`, label: 'Fat' },
        ].map((m) => (
          <div key={m.label} className="bg-white border border-surface-border rounded-md p-3 text-center">
            <div className={`text-lg font-bold ${m.green ? 'text-brand-green' : 'text-content'}`}>{m.value}</div>
            <div className="text-[10px] text-content-muted uppercase tracking-wider mt-0.5">{m.label}</div>
          </div>
        ))}
      </div>

      {/* Day strip */}
      <div className="flex gap-1.5 mb-3.5 flex-wrap">
        {DAY_LABELS.map((label, i) => (
          <button
            key={label}
            onClick={() => {
              setCurrentDay(i);
              setOpenMeals({});
            }}
            className={`px-3.5 py-1.5 border rounded-md text-xs font-medium cursor-pointer transition-all
              ${
                i === currentDay
                  ? 'bg-brand-green-light border-brand-green-mid text-brand-green-dark'
                  : 'bg-white border-surface-border text-content-muted hover:border-brand-green hover:text-brand-green'
              }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Day header + progress */}
      <div className="text-[13px] font-semibold text-content-muted mb-1.5">
        {day.label} &mdash; {day.theme}
      </div>
      <div className="flex justify-between text-[11px] mb-0.5 text-content-muted">
        <span>0 cal</span>
        <span className="font-semibold" style={{ color: over ? '#C0392B' : '#1D9E75' }}>
          {totalCal} / {targetCalories.toLocaleString()} cal{over && ` — +${totalCal - targetCalories} cal`}
        </span>
        <span>{targetCalories.toLocaleString()} cal</span>
      </div>
      <div className="bg-surface-bg rounded-full h-[7px] mb-3 overflow-hidden border border-surface-border">
        <div
          className="h-[7px] rounded-full transition-all duration-500"
          style={{ width: `${pct}%`, background: over ? '#C0392B' : '#1D9E75' }}
        />
      </div>

      {/* Meal blocks */}
      {day.meals.map((meal, mi) => {
        const key = `${currentDay}-${mi}`;
        const isOpen = !!openMeals[mi];
        const isDone = !!tracking?.meals_done[key];

        return (
          <div
            key={mi}
            className="bg-white border border-surface-border rounded-lg mb-2 overflow-hidden hover:shadow-sm transition-shadow"
          >
            <div
              className="flex items-center gap-2.5 px-3.5 py-3 cursor-pointer select-none"
              onClick={() => setOpenMeals((prev) => ({ ...prev, [mi]: !prev[mi] }))}
            >
              <span className="text-lg w-7 min-w-[28px] h-7 flex items-center justify-center flex-shrink-0">
                {meal.icon}
              </span>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold text-content">
                  {meal.name}
                  <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-surface-bg text-content-muted ml-1.5 border border-surface-border align-middle">
                    {meal.time}
                  </span>
                </div>
                <div className="text-[11px] text-content-muted mt-0.5">
                  Protein {meal.p}g &middot; Carbs {meal.c}g &middot; Fat {meal.f}g &middot; {meal.items.length} items
                </div>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleMealDone(key);
                }}
                className={`w-7 h-7 rounded-full border-2 flex items-center justify-center text-xs flex-shrink-0 ml-1 transition-all cursor-pointer
                  ${isDone ? 'bg-brand-green border-brand-green text-white' : 'bg-white border-surface-border'}`}
              >
                {isDone ? '✓' : '○'}
              </button>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-brand-green-light text-brand-green-dark flex-shrink-0 ml-1">
                {meal.cal} cal
              </span>
              <span
                className={`text-[11px] text-content-muted transition-transform flex-shrink-0 ml-1 ${isOpen ? 'rotate-180' : ''}`}
              >
                ▼
              </span>
            </div>

            {isOpen && (
              <div className="border-t border-surface-border">
                <table className="w-full border-collapse table-fixed">
                  <thead>
                    <tr>
                      <th className="text-[10px] font-semibold text-content-muted uppercase tracking-wider px-3.5 py-2 bg-surface-bg text-left border-b border-surface-border">
                        Ingredient
                      </th>
                      <th className="text-[10px] font-semibold text-content-muted uppercase tracking-wider px-3.5 py-2 bg-surface-bg text-right border-b border-surface-border">
                        G
                      </th>
                      <th className="text-[10px] font-semibold text-content-muted uppercase tracking-wider px-3.5 py-2 bg-surface-bg text-right border-b border-surface-border max-[480px]:hidden">
                        Protein
                      </th>
                      <th className="text-[10px] font-semibold text-content-muted uppercase tracking-wider px-3.5 py-2 bg-surface-bg text-right border-b border-surface-border max-[480px]:hidden">
                        Carbs
                      </th>
                      <th className="text-[10px] font-semibold text-content-muted uppercase tracking-wider px-3.5 py-2 bg-surface-bg text-right border-b border-surface-border">
                        Fat
                      </th>
                      <th className="text-[10px] font-semibold text-content-muted uppercase tracking-wider px-3.5 py-2 bg-surface-bg text-right border-b border-surface-border">
                        Cal
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {meal.items.map((item, ii) => (
                      <tr key={ii}>
                        <td
                          className={`text-xs px-3.5 py-1.5 border-t border-surface-border ${item.isNew ? 'text-[#3B6D11] font-semibold' : 'text-content'}`}
                        >
                          {item.name}
                          {item.isNew && ' ✓'}
                        </td>
                        <td className="text-xs text-content-muted px-3.5 py-1.5 border-t border-surface-border text-right">
                          {item.g}g
                        </td>
                        <td className="text-xs text-content-muted px-3.5 py-1.5 border-t border-surface-border text-right max-[480px]:hidden">
                          {item.p}g
                        </td>
                        <td className="text-xs text-content-muted px-3.5 py-1.5 border-t border-surface-border text-right max-[480px]:hidden">
                          {item.c}g
                        </td>
                        <td className="text-xs text-content-muted px-3.5 py-1.5 border-t border-surface-border text-right">
                          {item.f}g
                        </td>
                        <td className="text-xs text-content-muted px-3.5 py-1.5 border-t border-surface-border text-right">
                          {item.cal}
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-surface-bg">
                      <td className="text-[11px] font-bold text-content px-3.5 py-1.5 border-t border-surface-border">
                        Meal total
                      </td>
                      <td className="text-[11px] font-bold text-brand-green px-3.5 py-1.5 border-t border-surface-border text-right"></td>
                      <td className="text-[11px] font-bold text-brand-green px-3.5 py-1.5 border-t border-surface-border text-right max-[480px]:hidden">
                        {meal.p}g
                      </td>
                      <td className="text-[11px] font-bold text-brand-green px-3.5 py-1.5 border-t border-surface-border text-right max-[480px]:hidden">
                        {meal.c}g
                      </td>
                      <td className="text-[11px] font-bold text-brand-green px-3.5 py-1.5 border-t border-surface-border text-right">
                        {meal.f}g
                      </td>
                      <td className="text-[11px] font-bold text-brand-green px-3.5 py-1.5 border-t border-surface-border text-right">
                        {meal.cal} cal
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        );
      })}

      {/* Day total */}
      <div className="flex justify-between items-center flex-wrap gap-1.5 px-3.5 py-2.5 bg-brand-green-light border-t border-[#9FE1CB] rounded-b-lg -mt-0.5">
        <span className="text-[13px] font-bold text-brand-green-dark">
          Day total: {totalCal} / {targetCalories.toLocaleString()} cal
        </span>
        <div className="flex gap-3">
          <span className="text-[11px] text-brand-green-mid font-medium">Protein {totalP}g</span>
          <span className="text-[11px] text-brand-green-mid font-medium">Carbs {totalC}g</span>
          <span className="text-[11px] text-brand-green-mid font-medium">Fat {totalF}g</span>
        </div>
      </div>

      {/* GF note */}
      <div className="bg-accent-blue-light border border-[#B5D4F4] rounded-lg p-3 mt-3 text-xs text-accent-blue-dark leading-relaxed">
        <strong>Gluten-free rules:</strong> All ingredients are naturally GF. Use tamari instead of soy sauce. Choose
        certified GF protein powder (whey isolate or pea protein). Always check cottage cheese and yogurt labels &mdash;
        choose plain, unflavoured. Use a kitchen scale for the first 2 weeks.
      </div>
    </div>
  );
}
