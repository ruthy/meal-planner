'use client';

import { useState } from 'react';
import { DETOX_PLAN, RECIPES, COMMON_TRIGGERS } from '@/data/gutHealth';
import { useLanguage } from '@/contexts/LanguageContext';

type Tab = 'tips' | 'tracker' | 'detox' | 'recipes';

interface TrackerEntry {
  food: string;
  snacks: string;
  stomach: number;
  bloating: boolean;
  bloatingTime: string;
  fatigue: boolean;
  notes: string;
}

const EMPTY_ENTRY: TrackerEntry = {
  food: '',
  snacks: '',
  stomach: 3,
  bloating: false,
  bloatingTime: '',
  fatigue: false,
  notes: '',
};

export default function GutHealth() {
  const { t } = useLanguage();
  const [tab, setTab] = useState<Tab>('tracker');
  const [entry, setEntry] = useState<TrackerEntry>({ ...EMPTY_ENTRY });
  const [saved, setSaved] = useState(false);
  const [expandedRecipe, setExpandedRecipe] = useState<string | null>(null);
  const [triggerChecks, setTriggerChecks] = useState<Record<string, 'yes' | 'maybe' | 'no' | null>>({});

  const EATING_TIPS = [
    'gut.tip.water_before',
    'gut.tip.no_water_during',
    'gut.tip.chew',
    'gut.tip.veggies_first',
    'gut.tip.fruit_alone',
    'gut.tip.no_snacking',
    'gut.tip.stop_before_bed',
    'gut.tip.warm_morning',
    'gut.tip.no_coffee_empty',
    'gut.tip.eat_calm',
  ] as const;

  const tabs: { key: Tab; labelKey: string; emoji: string }[] = [
    { key: 'tips', labelKey: 'gut.tab.tips', emoji: '💡' },
    { key: 'tracker', labelKey: 'gut.tab.tracker', emoji: '📋' },
    { key: 'detox', labelKey: 'gut.tab.detox', emoji: '🌿' },
    { key: 'recipes', labelKey: 'gut.tab.recipes', emoji: '🍽️' },
  ];

  const handleSaveEntry = () => {
    const key = `gut_tracker_${new Date().toISOString().split('T')[0]}`;
    const existing = JSON.parse(localStorage.getItem(key) || '[]');
    existing.push({ ...entry, timestamp: new Date().toISOString() });
    localStorage.setItem(key, JSON.stringify(existing));
    setEntry({ ...EMPTY_ENTRY });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const toggleTrigger = (trigger: string) => {
    setTriggerChecks((prev) => {
      const current = prev[trigger];
      const next =
        current === null || current === undefined
          ? 'yes'
          : current === 'yes'
            ? 'maybe'
            : current === 'maybe'
              ? 'no'
              : null;
      return { ...prev, [trigger]: next };
    });
  };

  const inputClass =
    'w-full px-3 py-2.5 border-[1.5px] border-surface-border rounded-lg text-sm outline-none transition-colors focus:border-brand-green bg-white';

  return (
    <div>
      {/* Tab Switcher */}
      <div className="flex bg-surface-bg rounded-xl p-1 mb-5 gap-1">
        {tabs.map((t_item) => (
          <button
            key={t_item.key}
            onClick={() => setTab(t_item.key)}
            className={`flex-1 py-2.5 rounded-lg text-[12px] font-bold border-none cursor-pointer transition-all
              ${tab === t_item.key ? 'bg-brand-green text-white shadow-sm' : 'bg-transparent text-content-muted'}`}
          >
            <span className="mr-1">{t_item.emoji}</span>
            {t(t_item.labelKey)}
          </button>
        ))}
      </div>

      {/* ===== EATING TIPS ===== */}
      {tab === 'tips' && (
        <div>
          <div className="p-4 bg-green-50 rounded-xl mb-5 border border-green-200">
            <h3 className="text-[15px] font-bold text-green-800 mb-2">{t('gut.tips.title')}</h3>
            <p className="text-[13px] text-green-700 leading-relaxed">{t('gut.tips.intro')}</p>
          </div>

          <div className="space-y-3">
            {EATING_TIPS.map((tipKey, i) => (
              <div
                key={tipKey}
                className="flex gap-3.5 items-start bg-white border border-surface-border rounded-xl p-4"
              >
                <div className="w-8 h-8 shrink-0 bg-brand-green rounded-full flex items-center justify-center text-white font-bold text-sm shadow-sm">
                  {i + 1}
                </div>
                <div>
                  <h4 className="text-[14px] font-bold text-content mb-1">{t(`${tipKey}.title`)}</h4>
                  <p className="text-[13px] text-content-muted leading-relaxed">{t(`${tipKey}.desc`)}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 p-4 bg-brand-green-light rounded-xl">
            <p className="text-[13px] text-content italic text-center leading-relaxed">{t('gut.tips.quote')}</p>
          </div>
        </div>
      )}

      {/* ===== BLOATING TRACKER ===== */}
      {tab === 'tracker' && (
        <div>
          <p className="text-[13px] text-content-muted mb-4 leading-relaxed">{t('gut.tracker.intro')}</p>

          {/* Food log */}
          <div className="mb-3">
            <label className="text-[11px] font-bold text-content-muted uppercase tracking-wider block mb-1.5">
              {t('gut.tracker.what_ate')}
            </label>
            <textarea
              value={entry.food}
              onChange={(e) => setEntry({ ...entry, food: e.target.value })}
              placeholder={t('gut.tracker.what_ate_placeholder')}
              className={`${inputClass} min-h-[60px] resize-none`}
            />
          </div>

          <div className="mb-3">
            <label className="text-[11px] font-bold text-content-muted uppercase tracking-wider block mb-1.5">
              {t('gut.tracker.snacks')}
            </label>
            <input
              type="text"
              value={entry.snacks}
              onChange={(e) => setEntry({ ...entry, snacks: e.target.value })}
              placeholder={t('gut.tracker.snacks_placeholder')}
              className={inputClass}
            />
          </div>

          {/* Stomach feeling 1-5 */}
          <div className="mb-3">
            <label className="text-[11px] font-bold text-content-muted uppercase tracking-wider block mb-2">
              {t('gut.tracker.stomach_feeling')}
            </label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  onClick={() => setEntry({ ...entry, stomach: n })}
                  className={`flex-1 py-2.5 rounded-lg border-none text-sm font-bold cursor-pointer transition-all
                    ${
                      entry.stomach === n
                        ? n <= 2
                          ? 'bg-red-500 text-white'
                          : n === 3
                            ? 'bg-yellow-500 text-white'
                            : 'bg-green-500 text-white'
                        : 'bg-surface-bg text-content-muted'
                    }`}
                >
                  {n}
                </button>
              ))}
            </div>
            <div className="flex justify-between text-[10px] text-content-muted mt-1 px-1">
              <span>{t('gut.tracker.worst')}</span>
              <span>{t('gut.tracker.best')}</span>
            </div>
          </div>

          {/* Bloating toggle */}
          <div className="flex gap-4 mb-3">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={entry.bloating}
                onChange={(e) => setEntry({ ...entry, bloating: e.target.checked })}
                className="w-4 h-4 accent-brand-green"
              />
              <span className="text-[13px] font-medium text-content">{t('gut.tracker.bloating')}</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={entry.fatigue}
                onChange={(e) => setEntry({ ...entry, fatigue: e.target.checked })}
                className="w-4 h-4 accent-brand-green"
              />
              <span className="text-[13px] font-medium text-content">{t('gut.tracker.fatigue')}</span>
            </label>
          </div>

          {entry.bloating && (
            <div className="mb-3">
              <label className="text-[11px] font-bold text-content-muted uppercase tracking-wider block mb-1.5">
                {t('gut.tracker.when_bloating')}
              </label>
              <input
                type="text"
                value={entry.bloatingTime}
                onChange={(e) => setEntry({ ...entry, bloatingTime: e.target.value })}
                placeholder={t('gut.tracker.when_placeholder')}
                className={inputClass}
              />
            </div>
          )}

          <div className="mb-4">
            <label className="text-[11px] font-bold text-content-muted uppercase tracking-wider block mb-1.5">
              {t('gut.tracker.notes')}
            </label>
            <input
              type="text"
              value={entry.notes}
              onChange={(e) => setEntry({ ...entry, notes: e.target.value })}
              placeholder={t('gut.tracker.notes_placeholder')}
              className={inputClass}
            />
          </div>

          <button
            onClick={handleSaveEntry}
            className="w-full py-3 bg-brand-green text-white border-none rounded-lg text-[14px] font-bold cursor-pointer hover:bg-brand-green-dark transition-colors"
          >
            {saved ? `✓ ${t('gut.tracker.saved')}` : t('gut.tracker.save')}
          </button>

          {/* Common Triggers */}
          <div className="mt-6 pt-5 border-t border-surface-border">
            <h3 className="text-[14px] font-bold text-content mb-1">{t('gut.triggers.title')}</h3>
            <p className="text-[12px] text-content-muted mb-3">{t('gut.triggers.subtitle')}</p>

            <div className="space-y-2">
              {COMMON_TRIGGERS.map((trigger) => {
                const status = triggerChecks[trigger];
                return (
                  <button
                    key={trigger}
                    onClick={() => toggleTrigger(trigger)}
                    className="w-full flex items-center justify-between px-3.5 py-2.5 bg-surface-bg rounded-lg border-none cursor-pointer text-left transition-colors hover:bg-surface-border/50"
                  >
                    <span className="text-[13px] text-content">{t(trigger)}</span>
                    <span className="text-[14px] w-6 text-center">
                      {status === 'yes' && '✓'}
                      {status === 'maybe' && '?'}
                      {status === 'no' && '✗'}
                      {!status && '—'}
                    </span>
                  </button>
                );
              })}
            </div>
            <p className="text-[11px] text-content-muted mt-2 text-center">{t('gut.triggers.legend')}</p>
          </div>

          {/* Weekly Analysis */}
          <div className="mt-5 p-4 bg-brand-green-light rounded-xl">
            <h3 className="text-[14px] font-bold text-content mb-3">{t('gut.analysis.title')}</h3>
            <ul className="space-y-2 text-[13px] text-content-muted">
              <li>• {t('gut.analysis.q1')}</li>
              <li>• {t('gut.analysis.q2')}</li>
              <li>• {t('gut.analysis.q3')}</li>
              <li>• {t('gut.analysis.q4')}</li>
            </ul>
          </div>
        </div>
      )}

      {/* ===== 48-HOUR DETOX ===== */}
      {tab === 'detox' && (
        <div>
          <div className="p-4 bg-green-50 rounded-xl mb-5 border border-green-200">
            <h3 className="text-[15px] font-bold text-green-800 mb-2">{t('gut.detox.title')}</h3>
            <p className="text-[13px] text-green-700 leading-relaxed">{t('gut.detox.intro')}</p>
          </div>

          <div className="space-y-3">
            {DETOX_PLAN.map((meal) => (
              <div key={meal.time} className="bg-white border border-surface-border rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{meal.time === 'morning' ? '🌅' : meal.time === 'noon' ? '☀️' : '🌙'}</span>
                  <h4 className="text-[14px] font-bold text-content">{t(meal.titleKey)}</h4>
                </div>
                <p className="text-[13px] text-content-muted leading-relaxed">{t(meal.descKey)}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 p-4 bg-yellow-50 rounded-xl border border-yellow-200">
            <p className="text-[12px] text-yellow-800 leading-relaxed">
              <strong>{t('gut.detox.tip_title')}</strong> {t('gut.detox.tip')}
            </p>
          </div>

          <div className="mt-3 p-4 bg-blue-50 rounded-xl border border-blue-200">
            <p className="text-[12px] text-blue-800 leading-relaxed">
              <strong>{t('gut.detox.improve_title')}</strong> {t('gut.detox.improve')}
            </p>
          </div>
        </div>
      )}

      {/* ===== ANTI-BLOAT RECIPES ===== */}
      {tab === 'recipes' && (
        <div>
          <p className="text-[13px] text-content-muted mb-4">{t('gut.recipes.intro')}</p>

          <div className="space-y-2">
            {RECIPES.map((recipe) => {
              const isOpen = expandedRecipe === recipe.id;
              return (
                <div key={recipe.id} className="bg-white border border-surface-border rounded-xl overflow-hidden">
                  <button
                    onClick={() => setExpandedRecipe(isOpen ? null : recipe.id)}
                    className="w-full flex items-center justify-between px-4 py-3.5 border-none bg-transparent cursor-pointer text-left"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{recipe.emoji}</span>
                      <div>
                        <div className="text-[14px] font-bold text-content">{t(recipe.nameKey)}</div>
                        <div className="text-[11px] text-content-muted">
                          ⏱ {recipe.prepTime} {t('gut.recipes.min')} · 🍽 {recipe.servings} {t('gut.recipes.servings')}
                        </div>
                      </div>
                    </div>
                    <span
                      className="text-[11px] text-content-muted transition-transform duration-200"
                      style={{ transform: isOpen ? 'rotate(0deg)' : 'rotate(-90deg)' }}
                    >
                      ▼
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 border-t border-surface-border pt-3">
                      <div className="mb-3">
                        <h4 className="text-[12px] font-bold text-brand-green uppercase mb-1.5">
                          {t('gut.recipes.ingredients')}
                        </h4>
                        <p className="text-[13px] text-content leading-relaxed whitespace-pre-line">
                          {t(recipe.ingredientsKey)}
                        </p>
                      </div>
                      <div className="mb-3">
                        <h4 className="text-[12px] font-bold text-brand-green uppercase mb-1.5">
                          {t('gut.recipes.instructions')}
                        </h4>
                        <p className="text-[13px] text-content leading-relaxed whitespace-pre-line">
                          {t(recipe.instructionsKey)}
                        </p>
                      </div>
                      {recipe.notesKey && (
                        <div className="p-3 bg-yellow-50 rounded-lg">
                          <p className="text-[12px] text-yellow-800">
                            <strong>💡</strong> {t(recipe.notesKey)}
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
