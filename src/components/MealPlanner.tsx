'use client';

import { useMemo, useState } from 'react';
import { MEAL_DAYS, BASE_CALORIES } from '@/data/meals';
import { scaleMeals } from '@/lib/calculator';
import { getTodayDayIndex } from '@/lib/dates';
import { useDailyTracking } from '@/hooks/useDailyTracking';
import { useLanguage } from '@/contexts/LanguageContext';

const DAY_KEYS = ['day.mon', 'day.tue', 'day.wed', 'day.thu', 'day.fri', 'day.sat', 'day.sun'] as const;
const DAY_ABBR = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'] as const;

const MEAL_NAME_KEYS: Record<string, string> = {
  Breakfast: 'meals.breakfast',
  'Morning snack': 'meals.morning_snack',
  Lunch: 'meals.lunch',
  'Afternoon snack': 'meals.afternoon_snack',
  Dinner: 'meals.dinner',
  Dessert: 'meals.dessert',
};

const MEAL_SLOT_KEYS: Record<string, string> = {
  Breakfast: 'breakfast',
  'Morning snack': 'morning_snack',
  Lunch: 'lunch',
  'Afternoon snack': 'afternoon_snack',
  Dinner: 'dinner',
  Dessert: 'dessert',
};

interface MealPlannerProps {
  targetCalories: number;
}

export default function MealPlanner({ targetCalories }: MealPlannerProps) {
  const [currentDay, setCurrentDay] = useState(() => getTodayDayIndex());
  const [openMeals, setOpenMeals] = useState<Record<number, boolean>>({});
  const { tracking, toggleMealDone } = useDailyTracking();
  const { t } = useLanguage();

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
          { value: targetCalories.toLocaleString(), label: t('meals.cal_day'), green: true },
          { value: `~${Math.round((105 * targetCalories) / BASE_CALORIES)}g`, label: t('meals.protein') },
          { value: `~${Math.round((65 * targetCalories) / BASE_CALORIES)}g`, label: t('meals.carbs') },
          { value: `~${Math.round((38 * targetCalories) / BASE_CALORIES)}g`, label: t('meals.fat') },
        ].map((m) => (
          <div key={m.label} className="bg-white border border-surface-border rounded-md p-3 text-center">
            <div className={`text-lg font-bold ${m.green ? 'text-brand-green' : 'text-content'}`}>{m.value}</div>
            <div className="text-[10px] text-content-muted uppercase tracking-wider mt-0.5">{m.label}</div>
          </div>
        ))}
      </div>

      {/* Day strip */}
      <div className="flex gap-1.5 mb-3.5 flex-wrap">
        {DAY_KEYS.map((key, i) => (
          <button
            key={key}
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
            {t(key)}
          </button>
        ))}
      </div>

      {/* Day header + progress */}
      <div className="text-[13px] font-semibold text-content-muted mb-1.5">
        {t(`day.${day.label.toLowerCase()}`)} &mdash; {t(`meal.theme.${DAY_ABBR[currentDay]}`)}
      </div>
      <div className="flex justify-between text-[11px] mb-0.5 text-content-muted">
        <span>0 {t('common.cal')}</span>
        <span className="font-semibold" style={{ color: over ? '#C0392B' : '#1D9E75' }}>
          {totalCal} / {targetCalories.toLocaleString()} {t('common.cal')}
          {over && ` — +${totalCal - targetCalories} ${t('common.cal')}`}
        </span>
        <span>
          {targetCalories.toLocaleString()} {t('common.cal')}
        </span>
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
                  {t(MEAL_NAME_KEYS[meal.name] || meal.name)}
                  <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-surface-bg text-content-muted ml-1.5 border border-surface-border align-middle">
                    {meal.time}
                  </span>
                </div>
                <div className="text-[11px] text-content-muted mt-0.5">
                  {t('meals.protein')} {meal.p}g &middot; {t('meals.carbs')} {meal.c}g &middot; {t('meals.fat')}{' '}
                  {meal.f}g &middot; {meal.items.length} {t('meals.items_count')}
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
                {meal.cal} {t('common.cal')}
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
                        {t('meals.ingredient')}
                      </th>
                      <th className="text-[10px] font-semibold text-content-muted uppercase tracking-wider px-3.5 py-2 bg-surface-bg text-right border-b border-surface-border">
                        G
                      </th>
                      <th className="text-[10px] font-semibold text-content-muted uppercase tracking-wider px-3.5 py-2 bg-surface-bg text-right border-b border-surface-border max-[480px]:hidden">
                        {t('meals.protein')}
                      </th>
                      <th className="text-[10px] font-semibold text-content-muted uppercase tracking-wider px-3.5 py-2 bg-surface-bg text-right border-b border-surface-border max-[480px]:hidden">
                        {t('meals.carbs')}
                      </th>
                      <th className="text-[10px] font-semibold text-content-muted uppercase tracking-wider px-3.5 py-2 bg-surface-bg text-right border-b border-surface-border">
                        {t('meals.fat')}
                      </th>
                      <th className="text-[10px] font-semibold text-content-muted uppercase tracking-wider px-3.5 py-2 bg-surface-bg text-right border-b border-surface-border">
                        {t('common.cal')}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {meal.items.map((item, ii) => {
                      const itemKey = `meal.${DAY_ABBR[currentDay]}.${MEAL_SLOT_KEYS[meal.name] || meal.name}.${ii}`;
                      return (
                        <tr key={ii}>
                          <td
                            className={`text-xs px-3.5 py-1.5 border-t border-surface-border ${item.isNew ? 'text-[#3B6D11] font-semibold' : 'text-content'}`}
                          >
                            {t(itemKey)}
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
                      );
                    })}
                    <tr className="bg-surface-bg">
                      <td className="text-[11px] font-bold text-content px-3.5 py-1.5 border-t border-surface-border">
                        {t('meals.meal_total')}
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
                        {meal.cal} {t('common.cal')}
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
          {t('meals.day_total')}: {totalCal} / {targetCalories.toLocaleString()} {t('common.cal')}
        </span>
        <div className="flex gap-3">
          <span className="text-[11px] text-brand-green-mid font-medium">
            {t('meals.protein')} {totalP}g
          </span>
          <span className="text-[11px] text-brand-green-mid font-medium">
            {t('meals.carbs')} {totalC}g
          </span>
          <span className="text-[11px] text-brand-green-mid font-medium">
            {t('meals.fat')} {totalF}g
          </span>
        </div>
      </div>

      {/* GF note */}
      <div className="bg-accent-blue-light border border-[#B5D4F4] rounded-lg p-3 mt-3 text-xs text-accent-blue-dark leading-relaxed">
        <strong>{t('meals.gf_rules')}:</strong> {t('meals.gf_note')}
      </div>
    </div>
  );
}
