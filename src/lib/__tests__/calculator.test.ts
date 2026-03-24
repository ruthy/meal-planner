import { describe, it, expect } from 'vitest';
import { calculate, scaleMeals } from '@/lib/calculator';
import type { CalculatorInputs, MealDay } from '@/types';

describe('calculate', () => {
  const femaleInputs: CalculatorInputs = {
    gender: 'f',
    age: 30,
    weightKg: 70,
    heightCm: 165,
    activityLevel: 1.55,
    unitSystem: 'metric',
  };

  const maleInputs: CalculatorInputs = {
    gender: 'm',
    age: 30,
    weightKg: 80,
    heightCm: 180,
    activityLevel: 1.55,
    unitSystem: 'metric',
  };

  it('calculates female BMR using Mifflin-St Jeor formula', () => {
    const result = calculate(femaleInputs);
    // BMR = 10*70 + 6.25*165 - 5*30 - 161 = 700 + 1031.25 - 150 - 161 = 1420.25
    expect(result.bmr).toBe(1420.25);
  });

  it('calculates male BMR using Mifflin-St Jeor formula', () => {
    const result = calculate(maleInputs);
    // BMR = 10*80 + 6.25*180 - 5*30 + 5 = 800 + 1125 - 150 + 5 = 1780
    expect(result.bmr).toBe(1780);
  });

  it('calculates TDEE as BMR * activity level, rounded', () => {
    const result = calculate(femaleInputs);
    // TDEE = round(1420.25 * 1.55) = round(2201.3875) = 2201
    expect(result.tdee).toBe(Math.round(1420.25 * 1.55));
  });

  it('calculates loseTarget as max(1000, TDEE - 1000)', () => {
    const result = calculate(femaleInputs);
    expect(result.loseTarget).toBe(Math.max(1000, result.tdee - 1000));
  });

  it('floors loseTarget at 1000 when TDEE is very low', () => {
    const lowInputs: CalculatorInputs = {
      gender: 'f',
      age: 80,
      weightKg: 45,
      heightCm: 150,
      activityLevel: 1.2,
      unitSystem: 'metric',
    };
    const result = calculate(lowInputs);
    // BMR = 10*45 + 6.25*150 - 5*80 - 161 = 450 + 937.5 - 400 - 161 = 826.5
    // TDEE = round(826.5 * 1.2) = round(991.8) = 992
    // loseTarget = max(1000, 992 - 1000) = max(1000, -8) = 1000
    expect(result.loseTarget).toBe(1000);
  });

  it('calculates BMI correctly', () => {
    const result = calculate(femaleInputs);
    // BMI = 70 / (1.65)^2 = 70 / 2.7225 ≈ 25.71
    expect(result.bmi).toBeCloseTo(70 / 1.65 ** 2, 5);
  });

  it('assigns "Underweight" category for BMI < 18.5', () => {
    const underweightInputs: CalculatorInputs = {
      gender: 'f',
      age: 25,
      weightKg: 45,
      heightCm: 170,
      activityLevel: 1.2,
      unitSystem: 'metric',
    };
    // BMI = 45 / (1.7)^2 ≈ 15.57
    const result = calculate(underweightInputs);
    expect(result.bmiCategory).toBe('Underweight');
  });

  it('assigns "Normal weight" category for BMI 18.5-24.9', () => {
    const normalInputs: CalculatorInputs = {
      gender: 'f',
      age: 25,
      weightKg: 60,
      heightCm: 170,
      activityLevel: 1.2,
      unitSystem: 'metric',
    };
    // BMI = 60 / (1.7)^2 ≈ 20.76
    const result = calculate(normalInputs);
    expect(result.bmiCategory).toBe('Normal weight');
  });

  it('assigns "Overweight" category for BMI 25-29.9', () => {
    const result = calculate(femaleInputs);
    // BMI ≈ 25.71
    expect(result.bmiCategory).toBe('Overweight');
  });

  it('assigns "Obese" category for BMI >= 30', () => {
    const obeseInputs: CalculatorInputs = {
      gender: 'm',
      age: 40,
      weightKg: 110,
      heightCm: 175,
      activityLevel: 1.2,
      unitSystem: 'metric',
    };
    // BMI = 110 / (1.75)^2 ≈ 35.92
    const result = calculate(obeseInputs);
    expect(result.bmiCategory).toBe('Obese');
  });

  it('calculates macros correctly', () => {
    const result = calculate(femaleInputs);
    expect(result.macros.protein).toBe(Math.round(70 * 1.6));
    expect(result.macros.carbs).toBe(Math.round((result.loseTarget * 0.4) / 4));
    expect(result.macros.fat).toBe(Math.round((result.loseTarget * 0.3) / 9));
  });
});

describe('scaleMeals', () => {
  const baseMeals: MealDay[] = [
    {
      label: 'Monday',
      theme: 'Mediterranean',
      meals: [
        {
          name: 'Breakfast',
          icon: '🍳',
          time: '08:00',
          cal: 300,
          p: 20,
          c: 30,
          f: 10,
          items: [
            { name: 'Eggs', g: 100, p: 12, c: 1, f: 8, cal: 140 },
            { name: 'Toast', g: 50, p: 4, c: 20, f: 2, cal: 120 },
          ],
        },
        {
          name: 'Lunch',
          icon: '🥗',
          time: '13:00',
          cal: 400,
          p: 30,
          c: 40,
          f: 15,
          items: [
            { name: 'Chicken', g: 150, p: 25, c: 0, f: 5, cal: 200 },
            { name: 'Rice', g: 100, p: 3, c: 35, f: 1, cal: 150 },
          ],
        },
      ],
    },
    {
      label: 'Tuesday',
      theme: 'Asian',
      meals: [
        {
          name: 'Breakfast',
          icon: '🥣',
          time: '08:00',
          cal: 250,
          p: 15,
          c: 35,
          f: 8,
          items: [{ name: 'Oatmeal', g: 80, p: 10, c: 30, f: 5, cal: 200 }],
        },
      ],
    },
  ];

  it('returns same values when ratio is 1.0', () => {
    const scaled = scaleMeals(baseMeals, 1150, 1150);
    expect(scaled[0].meals[0].cal).toBe(300);
    expect(scaled[0].meals[0].items[0].cal).toBe(140);
    expect(scaled[0].meals[0].items[0].g).toBe(100);
  });

  it('doubles all numeric values when ratio is 2.0', () => {
    const scaled = scaleMeals(baseMeals, 2300, 1150);
    expect(scaled[0].meals[0].cal).toBe(600);
    expect(scaled[0].meals[0].p).toBe(40);
    expect(scaled[0].meals[0].c).toBe(60);
    expect(scaled[0].meals[0].f).toBe(20);
    expect(scaled[0].meals[0].items[0].cal).toBe(280);
    expect(scaled[0].meals[0].items[0].g).toBe(200);
    expect(scaled[0].meals[0].items[0].p).toBe(24);
  });

  it('preserves structure (same number of days, meals, items)', () => {
    const scaled = scaleMeals(baseMeals, 2000, 1150);
    expect(scaled.length).toBe(baseMeals.length);
    expect(scaled[0].meals.length).toBe(baseMeals[0].meals.length);
    expect(scaled[0].meals[0].items.length).toBe(baseMeals[0].meals[0].items.length);
    expect(scaled[1].meals.length).toBe(baseMeals[1].meals.length);
    expect(scaled[0].label).toBe('Monday');
    expect(scaled[1].label).toBe('Tuesday');
  });

  it('does not mutate original data', () => {
    const originalCal = baseMeals[0].meals[0].cal;
    const originalItemCal = baseMeals[0].meals[0].items[0].cal;
    scaleMeals(baseMeals, 2300, 1150);
    expect(baseMeals[0].meals[0].cal).toBe(originalCal);
    expect(baseMeals[0].meals[0].items[0].cal).toBe(originalItemCal);
  });

  it('rounds all values to integers', () => {
    const scaled = scaleMeals(baseMeals, 1300, 1150);
    for (const day of scaled) {
      for (const meal of day.meals) {
        expect(Number.isInteger(meal.cal)).toBe(true);
        expect(Number.isInteger(meal.p)).toBe(true);
        expect(Number.isInteger(meal.c)).toBe(true);
        expect(Number.isInteger(meal.f)).toBe(true);
        for (const item of meal.items) {
          expect(Number.isInteger(item.cal)).toBe(true);
          expect(Number.isInteger(item.g)).toBe(true);
          expect(Number.isInteger(item.p)).toBe(true);
          expect(Number.isInteger(item.c)).toBe(true);
          expect(Number.isInteger(item.f)).toBe(true);
        }
      }
    }
  });
});
