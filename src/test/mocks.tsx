import React, { type ReactNode } from 'react';
import { render } from '@testing-library/react';
import { vi } from 'vitest';
import { en, he } from '@/i18n';

// ---- Mock Supabase client ----
vi.mock('@/lib/supabase/client', () => ({
  createClient: () => ({
    from: () => ({
      select: () => ({
        eq: () => ({
          eq: () => ({ single: () => Promise.resolve({ data: null }) }),
          gte: () => ({
            order: () => Promise.resolve({ data: [] }),
          }),
          single: () => Promise.resolve({ data: null }),
          order: () => Promise.resolve({ data: [] }),
        }),
        single: () => Promise.resolve({ data: null }),
        order: () => Promise.resolve({ data: [] }),
      }),
      upsert: () => ({
        select: () => ({
          single: () => Promise.resolve({ data: null }),
        }),
      }),
      delete: () => ({
        eq: () => Promise.resolve({ data: null }),
      }),
    }),
    auth: {
      getSession: () => Promise.resolve({ data: { session: null } }),
      onAuthStateChange: () => ({ data: { subscription: { unsubscribe: vi.fn() } } }),
      signOut: vi.fn(),
    },
  }),
}));

// ---- Mock hooks ----
vi.mock('@/hooks/useDailyTracking', () => ({
  useDailyTracking: () => ({
    tracking: {
      meals_done: {},
      water_glasses: [false, false, false, false, false, false, false, false],
      shot_done: false,
      exercise_done: false,
      shopping_checked: {},
    },
    loading: false,
    toggleMealDone: vi.fn(),
    toggleGlass: vi.fn(),
    toggleShot: vi.fn(),
    toggleExercise: vi.fn(),
    toggleShopItem: vi.fn(),
    resetWater: vi.fn(),
    resetShopping: vi.fn(),
  }),
}));

vi.mock('@/hooks/useCalculatorSettings', () => ({
  useCalculatorSettings: () => ({
    settings: {
      gender: 'f',
      age: 64,
      weight_kg: 75,
      height_cm: 165,
      activity_level: 1.55,
      unit_system: 'metric',
      target_calories: null,
      tdee: null,
      bmi: null,
    },
    loading: false,
    saveSettings: vi.fn(),
  }),
}));

vi.mock('@/hooks/useWeightLog', () => ({
  useWeightLog: () => ({
    entries: [],
    loading: false,
    addEntry: vi.fn(),
    deleteEntry: vi.fn(),
  }),
}));

vi.mock('@/hooks/useStreaks', () => ({
  useStreaks: () => ({
    currentStreak: 5,
    longestStreak: 12,
    loading: false,
  }),
}));

// ---- Mock notifications ----
vi.mock('@/lib/notifications', () => ({
  startReminders: vi.fn().mockResolvedValue(true),
  stopReminders: vi.fn(),
}));

// ---- Language mock providers ----

function createLanguageContext(translations: Record<string, string>, lang: 'en' | 'he') {
  const dir = lang === 'he' ? 'rtl' : 'ltr';
  const t = (key: string) => translations[key] ?? key;
  return { lang, dir, setLang: vi.fn(), t };
}

// We mock the LanguageContext by mocking the useLanguage hook
// Since components import { useLanguage } from '@/contexts/LanguageContext',
// we provide mock providers that override the context.

// Instead of re-mocking the module, we create wrapper components
// that provide context values via the real context provider mechanism.
// But since the real provider does side effects (localStorage, document.lang),
// we mock the entire module.

const enCtx = createLanguageContext(en, 'en');
const heCtx = createLanguageContext(he, 'he');

let currentLangCtx = enCtx;

vi.mock('@/contexts/LanguageContext', () => ({
  useLanguage: () => currentLangCtx,
  LanguageProvider: ({ children }: { children: ReactNode }) => <>{children}</>,
}));

vi.mock('@/contexts/AuthContext', () => ({
  useAuth: () => ({
    user: { id: 'test', user_metadata: { full_name: 'Test User' } },
    session: null,
    loading: false,
    signOut: vi.fn(),
  }),
  AuthProvider: ({ children }: { children: ReactNode }) => <>{children}</>,
}));

// ---- Render helpers ----

function Wrapper({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

export function renderWithProviders(ui: React.ReactElement) {
  return render(ui, { wrapper: Wrapper });
}

export function setLanguage(lang: 'en' | 'he') {
  if (lang === 'he') {
    currentLangCtx = heCtx;
  } else {
    currentLangCtx = enCtx;
  }
}
