// ── Meal Plan Types ──
export interface MealItem {
  name: string;
  g: number;
  p: number;
  c: number;
  f: number;
  cal: number;
  isNew?: boolean;
}

export interface Meal {
  name: string;
  icon: string;
  time: string;
  cal: number;
  p: number;
  c: number;
  f: number;
  items: MealItem[];
}

export interface MealDay {
  label: string;
  theme: string;
  meals: Meal[];
}

// ── MetaBoost Shots ──
export interface Shot {
  day: string;
  name: string;
  color: string;
  ingredients: string[];
  why: string;
}

// ── Exercise ──
export interface ExerciseMove {
  name: string;
  description: string;
}

export interface ExercisePlan {
  day: string;
  type: string;
  time: string;
  moves: ExerciseMove[];
}

// ── Rules ──
export interface Rule {
  icon: string;
  title: string;
  description: string;
}

// ── Sleep ──
export interface SleepTip {
  title: string;
  description: string;
}

export interface SleepScheduleItem {
  time: string;
  action: string;
}

// ── Shopping ──
export interface ShopCategory {
  name: string;
  items: string[];
}

// ── Water ──
export interface GlassInfo {
  time: string;
  label: string;
}

// ── Notifications ──
export interface ReminderSchedule {
  time: string;
  title: string;
  message: string;
}

// ── Calculator ──
export interface CalculatorInputs {
  gender: 'f' | 'm';
  age: number;
  weightKg: number;
  heightCm: number;
  activityLevel: number;
  unitSystem: 'metric' | 'imperial';
}

export interface CalculatorResult {
  bmr: number;
  tdee: number;
  loseTarget: number;
  bmi: number;
  bmiCategory: string;
  bmiColor: string;
  macros: { protein: number; carbs: number; fat: number };
}

// ── Daily Tracking (DB shape) ──
export interface DailyTracking {
  id?: string;
  user_id: string;
  track_date: string;
  meals_done: Record<string, boolean>;
  water_glasses: boolean[];
  shot_done: boolean;
  exercise_done: boolean;
  shopping_checked: Record<string, boolean>;
}

// ── Weight Log ──
export interface WeightEntry {
  id?: string;
  user_id?: string;
  log_date: string;
  weight_kg: number;
}

// ── Calculator Settings (DB shape) ──
export interface CalculatorSettings {
  user_id?: string;
  gender: 'f' | 'm';
  age: number;
  weight_kg: number;
  height_cm: number;
  activity_level: number;
  unit_system: 'metric' | 'imperial';
  target_calories: number | null;
  tdee: number | null;
  bmi: number | null;
}
