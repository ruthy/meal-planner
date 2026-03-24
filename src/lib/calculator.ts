import { CalculatorInputs, CalculatorResult, MealDay } from '@/types';

export function calculate(inputs: CalculatorInputs): CalculatorResult {
  const { gender, age, weightKg, heightCm, activityLevel } = inputs;

  // Mifflin-St Jeor
  const bmr =
    gender === 'f' ? 10 * weightKg + 6.25 * heightCm - 5 * age - 161 : 10 * weightKg + 6.25 * heightCm - 5 * age + 5;

  const tdee = Math.round(bmr * activityLevel);
  const loseTarget = Math.max(1000, tdee - 1000);

  const bmi = weightKg / (heightCm / 100) ** 2;
  let bmiCategory: string;
  let bmiColor: string;
  if (bmi < 18.5) {
    bmiCategory = 'Underweight';
    bmiColor = '#3498DB';
  } else if (bmi < 25) {
    bmiCategory = 'Normal weight';
    bmiColor = '#27AE60';
  } else if (bmi < 30) {
    bmiCategory = 'Overweight';
    bmiColor = '#F39C12';
  } else {
    bmiCategory = 'Obese';
    bmiColor = '#E74C3C';
  }

  const protein = Math.round(weightKg * 1.6);
  const carbs = Math.round((loseTarget * 0.4) / 4);
  const fat = Math.round((loseTarget * 0.3) / 9);

  return { bmr, tdee, loseTarget, bmi, bmiCategory, bmiColor, macros: { protein, carbs, fat } };
}

export function scaleMeals(baseMeals: MealDay[], targetCal: number, baseCal = 1150): MealDay[] {
  const ratio = targetCal / baseCal;
  return baseMeals.map((day) => ({
    ...day,
    meals: day.meals.map((meal) => ({
      ...meal,
      cal: Math.round(meal.cal * ratio),
      p: Math.round(meal.p * ratio),
      c: Math.round(meal.c * ratio),
      f: Math.round(meal.f * ratio),
      items: meal.items.map((item) => ({
        ...item,
        cal: Math.round(item.cal * ratio),
        g: Math.round(item.g * ratio),
        p: Math.round(item.p * ratio),
        c: Math.round(item.c * ratio),
        f: Math.round(item.f * ratio),
      })),
    })),
  }));
}
