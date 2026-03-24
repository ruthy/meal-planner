'use client';

import { useState } from 'react';
import { calculate } from '@/lib/calculator';
import { useCalculatorSettings } from '@/hooks/useCalculatorSettings';
import type { CalculatorResult } from '@/types';

interface CalculatorProps {
  onTargetChange: (target: number) => void;
}

export default function Calculator({ onTargetChange }: CalculatorProps) {
  const { settings, saveSettings } = useCalculatorSettings();
  const [gender, setGender] = useState<'f' | 'm'>(settings.gender);
  const [unit, setUnit] = useState<'metric' | 'imperial'>(settings.unit_system);
  const [age, setAge] = useState(settings.age?.toString() || '');
  const [weight, setWeight] = useState(settings.weight_kg?.toString() || '');
  const [heightCm, setHeightCm] = useState(settings.height_cm?.toString() || '');
  const [heightFt, setHeightFt] = useState('');
  const [heightIn, setHeightIn] = useState('');
  const [activity, setActivity] = useState(settings.activity_level?.toString() || '1.55');
  const [result, setResult] = useState<CalculatorResult | null>(null);

  const handleCalculate = () => {
    let wt = parseFloat(weight) || 0;
    let ht = 0;

    if (unit === 'metric') {
      ht = parseFloat(heightCm) || 0;
    } else {
      const ft = parseFloat(heightFt) || 0;
      const inches = parseFloat(heightIn) || 0;
      ht = (ft * 12 + inches) * 2.54;
      wt = wt * 0.453592;
    }

    const a = parseFloat(age) || 0;
    if (!a || !wt || !ht) {
      alert('Please fill in all fields.');
      return;
    }

    const act = parseFloat(activity);
    const res = calculate({ gender, age: a, weightKg: wt, heightCm: ht, activityLevel: act, unitSystem: unit });
    setResult(res);
    onTargetChange(res.loseTarget);

    saveSettings({
      gender,
      age: a,
      weight_kg: wt,
      height_cm: ht,
      activity_level: act,
      unit_system: unit,
      target_calories: res.loseTarget,
      tdee: res.tdee,
      bmi: parseFloat(res.bmi.toFixed(1)),
    });
  };

  return (
    <div>
      <div className="bg-brand-green p-4 text-white">
        <h2 className="text-[17px] font-bold mb-1 text-white">Daily calorie calculator</h2>
        <p className="text-xs opacity-85 text-white">
          Find your exact daily calories based on age, height, weight &amp; activity
        </p>
      </div>
      <div className="p-5">
        {/* Gender */}
        <div className="flex gap-2.5 mb-4">
          {(['f', 'm'] as const).map((g) => (
            <button
              key={g}
              onClick={() => setGender(g)}
              className={`flex-1 py-2.5 border-2 rounded-md text-[13px] font-semibold cursor-pointer transition-all flex items-center justify-center gap-1.5
                ${gender === g ? 'border-brand-green bg-brand-green-light text-brand-green-dark' : 'border-surface-border bg-white text-content-muted hover:border-brand-green hover:text-brand-green'}`}
            >
              {g === 'f' ? '♀ Woman' : '♂ Man'}
            </button>
          ))}
        </div>

        {/* Units */}
        <div className="flex mb-4 border border-surface-border rounded-md overflow-hidden w-fit">
          {(['metric', 'imperial'] as const).map((u) => (
            <button
              key={u}
              onClick={() => setUnit(u)}
              className={`px-4 py-1.5 text-xs font-semibold cursor-pointer border-none transition-all
                ${unit === u ? 'bg-brand-green text-white' : 'bg-white text-content-muted'}`}
            >
              {u === 'metric' ? 'Metric (kg / cm)' : 'Imperial (lbs / ft)'}
            </button>
          ))}
        </div>

        {/* Form fields */}
        <div className="grid grid-cols-2 gap-3.5 mb-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-semibold text-content-muted uppercase tracking-wider">Age (years)</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="e.g. 64"
              className="px-3 py-2 border border-surface-border rounded-md text-[13px] text-content bg-white outline-none focus:border-brand-green"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-semibold text-content-muted uppercase tracking-wider">
              {unit === 'metric' ? 'Weight (kg)' : 'Weight (lbs)'}
            </label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="e.g. 75"
              className="px-3 py-2 border border-surface-border rounded-md text-[13px] text-content bg-white outline-none focus:border-brand-green"
            />
          </div>
          {unit === 'metric' ? (
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-semibold text-content-muted uppercase tracking-wider">
                Height (cm)
              </label>
              <input
                type="number"
                value={heightCm}
                onChange={(e) => setHeightCm(e.target.value)}
                placeholder="e.g. 165"
                className="px-3 py-2 border border-surface-border rounded-md text-[13px] text-content bg-white outline-none focus:border-brand-green"
              />
            </div>
          ) : (
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-semibold text-content-muted uppercase tracking-wider">
                Height (ft / in)
              </label>
              <input
                type="number"
                value={heightFt}
                onChange={(e) => setHeightFt(e.target.value)}
                placeholder="ft"
                className="px-3 py-2 border border-surface-border rounded-md text-[13px] text-content bg-white outline-none focus:border-brand-green mb-1"
              />
              <input
                type="number"
                value={heightIn}
                onChange={(e) => setHeightIn(e.target.value)}
                placeholder="in"
                className="px-3 py-2 border border-surface-border rounded-md text-[13px] text-content bg-white outline-none focus:border-brand-green"
              />
            </div>
          )}
        </div>

        {/* Activity */}
        <div className="flex flex-col gap-1.5 mb-4">
          <label className="text-[11px] font-semibold text-content-muted uppercase tracking-wider">
            Activity level
          </label>
          <select
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            className="px-3 py-2 border border-surface-border rounded-md text-[13px] text-content bg-white outline-none focus:border-brand-green"
          >
            <option value="1.2">Sedentary &mdash; little or no exercise</option>
            <option value="1.375">Lightly active &mdash; exercise 1&ndash;3 days/week</option>
            <option value="1.55">Moderately active &mdash; exercise 3&ndash;5 days/week</option>
            <option value="1.725">Very active &mdash; exercise 6&ndash;7 days/week</option>
            <option value="1.9">Extra active &mdash; physical job + exercise</option>
          </select>
        </div>

        <button
          onClick={handleCalculate}
          className="w-full py-3 bg-brand-green text-white border-none rounded-md text-sm font-bold cursor-pointer hover:bg-brand-green-mid transition-colors mt-1"
        >
          Calculate &amp; Adjust My Meal Plan
        </button>

        {/* Result */}
        {result && (
          <div className="mt-5 border-t border-surface-border pt-4">
            <div className="bg-brand-green-light border border-[#9FE1CB] rounded-lg p-4 mb-3.5 text-center">
              <div className="text-[40px] font-extrabold text-brand-green-dark leading-none">{result.tdee}</div>
              <div className="text-[13px] text-brand-green-mid mt-1">calories/day to maintain weight</div>
              <div className="text-[11px] text-brand-green-mid mt-1.5">Based on Mifflin-St Jeor formula</div>
            </div>

            <div className="grid grid-cols-3 gap-2 mb-3.5">
              <div className="bg-white border border-surface-border rounded-md p-3 text-center">
                <div className="text-lg font-bold text-content">{result.tdee}</div>
                <div className="text-[10px] text-content-muted uppercase tracking-wider mt-0.5">Maintain</div>
              </div>
              <div className="bg-brand-green-light border border-brand-green rounded-md p-3 text-center">
                <div className="text-lg font-bold text-brand-green-dark">{result.loseTarget}</div>
                <div className="text-[10px] text-brand-green-dark uppercase tracking-wider mt-0.5">Lose 1 kg/wk</div>
              </div>
              <div className="bg-white border border-surface-border rounded-md p-3 text-center">
                <div className="text-lg font-bold text-content">{result.tdee + 500}</div>
                <div className="text-[10px] text-content-muted uppercase tracking-wider mt-0.5">Gain</div>
              </div>
            </div>

            {/* BMI */}
            <div className="flex items-center gap-2.5 p-2.5 bg-white border border-surface-border rounded-md mb-2.5">
              <span
                className="px-3 py-1 rounded-full text-[11px] font-bold text-white"
                style={{ background: result.bmiColor }}
              >
                BMI {result.bmi.toFixed(1)}
              </span>
              <span className="text-xs text-content-muted flex-1">{result.bmiCategory}</span>
            </div>

            {/* Macros */}
            <div className="bg-surface-bg rounded-md p-3.5 mb-3.5">
              <h4 className="text-[11px] font-bold text-content-muted uppercase tracking-wider mb-2.5">
                Recommended macros for {result.loseTarget} cal/day
              </h4>
              {[
                { label: 'Protein', value: result.macros.protein, color: '#E74C3C' },
                { label: 'Carbs', value: result.macros.carbs, color: '#F39C12' },
                { label: 'Fat', value: result.macros.fat, color: '#3498DB' },
              ].map((m) => {
                const total = result.macros.protein + result.macros.carbs + result.macros.fat;
                return (
                  <div key={m.label} className="flex items-center gap-2.5 mb-2">
                    <span className="text-xs font-semibold text-content min-w-[60px]">{m.label}</span>
                    <div className="flex-1 bg-surface-border rounded-full h-2 overflow-hidden">
                      <div
                        className="h-2 rounded-full transition-all duration-500"
                        style={{ width: `${(m.value / total) * 100}%`, background: m.color }}
                      />
                    </div>
                    <span className="text-[11px] text-content-muted min-w-[42px] text-right">{m.value}g</span>
                  </div>
                );
              })}
            </div>

            <div className="bg-accent-amber-light border border-[#FAC775] rounded-md p-3 text-xs text-accent-amber-dark leading-relaxed">
              <strong>Your personalised target:</strong> Based on your stats,{' '}
              <strong>{result.loseTarget} cal/day</strong> creates a 1 kg/week weight loss.
            </div>

            <div className="bg-[#065F46] text-white p-3 rounded-md mt-3 text-[13px] font-semibold text-center">
              Your meal plan has been adjusted to <strong>{result.loseTarget.toLocaleString()} calories/day</strong>{' '}
              &mdash; scroll down to see your personalised meals!
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
