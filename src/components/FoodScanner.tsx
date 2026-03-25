'use client';

import { useState, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface FoodItem {
  name: string;
  grams: number;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

interface ScanResult {
  items: FoodItem[];
  total: { calories: number; protein: number; carbs: number; fat: number };
}

async function compressImage(file: File, maxWidth = 800): Promise<string> {
  return new Promise((resolve) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d')!;
    const img = new Image();
    img.onload = () => {
      const scale = Math.min(1, maxWidth / img.width);
      canvas.width = img.width * scale;
      canvas.height = img.height * scale;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      resolve(canvas.toDataURL('image/jpeg', 0.7));
    };
    img.src = URL.createObjectURL(file);
  });
}

export default function FoodScanner() {
  const { t } = useLanguage();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ScanResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setError(null);
    setResult(null);

    const compressed = await compressImage(file);
    setImage(compressed);

    setLoading(true);
    try {
      const res = await fetch('/api/scan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image: compressed }),
      });

      if (!res.ok) {
        const errData = await res.json();
        if (errData.error === 'API key not configured') {
          setError(t('scan.no_key'));
        } else {
          setError(t('scan.error'));
        }
        return;
      }

      const data: ScanResult = await res.json();
      setResult(data);
    } catch {
      setError(t('scan.error'));
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setImage(null);
    setResult(null);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div>
      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        className="hidden"
        onChange={handleFileChange}
      />

      {/* Upload button */}
      {!image && !loading && (
        <button
          onClick={() => fileInputRef.current?.click()}
          className="w-full py-4 px-6 bg-brand-green text-white font-semibold rounded-lg text-base hover:opacity-90 transition-opacity cursor-pointer flex items-center justify-center gap-2"
        >
          <span className="text-xl">📸</span>
          {t('scan.button')}
        </button>
      )}

      {/* Image preview */}
      {image && (
        <div className="mt-3 rounded-lg overflow-hidden border border-surface-border">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt="Food photo" className="w-full max-h-[300px] object-cover" />
        </div>
      )}

      {/* Loading state */}
      {loading && (
        <div className="mt-4 flex flex-col items-center gap-3 py-6">
          <div className="w-8 h-8 border-3 border-brand-green border-t-transparent rounded-full animate-spin" />
          <p className="text-sm text-content-muted font-medium">{t('scan.analyzing')}</p>
        </div>
      )}

      {/* Error state */}
      {error && <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">{error}</div>}

      {/* Results */}
      {result && (
        <div className="mt-4">
          <h3 className="text-sm font-semibold text-content mb-2">{t('scan.results')}</h3>

          {/* Results table */}
          <div className="overflow-x-auto border border-surface-border rounded-lg">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-bg text-content-muted text-[11px] uppercase tracking-wider">
                  <th className="text-start px-3 py-2 font-semibold">{t('scan.item')}</th>
                  <th className="text-end px-3 py-2 font-semibold">{t('scan.grams')}</th>
                  <th className="text-end px-3 py-2 font-semibold">{t('scan.calories')}</th>
                  <th className="text-end px-3 py-2 font-semibold">{t('scan.protein')}</th>
                  <th className="text-end px-3 py-2 font-semibold">{t('scan.carbs')}</th>
                  <th className="text-end px-3 py-2 font-semibold">{t('scan.fat')}</th>
                </tr>
              </thead>
              <tbody>
                {result.items.map((item, i) => (
                  <tr key={i} className="border-t border-surface-border">
                    <td className="px-3 py-2 text-content font-medium">{item.name}</td>
                    <td className="text-end px-3 py-2 text-content-muted">{item.grams}g</td>
                    <td className="text-end px-3 py-2 text-brand-green font-semibold">{item.calories}</td>
                    <td className="text-end px-3 py-2 text-content-muted">{item.protein}g</td>
                    <td className="text-end px-3 py-2 text-content-muted">{item.carbs}g</td>
                    <td className="text-end px-3 py-2 text-content-muted">{item.fat}g</td>
                  </tr>
                ))}
                {/* Total row */}
                <tr className="border-t-2 border-brand-green bg-brand-green-light/30">
                  <td className="px-3 py-2 font-bold text-content">{t('scan.total')}</td>
                  <td className="text-end px-3 py-2" />
                  <td className="text-end px-3 py-2 font-bold text-brand-green">{result.total.calories}</td>
                  <td className="text-end px-3 py-2 font-bold text-content">{result.total.protein}g</td>
                  <td className="text-end px-3 py-2 font-bold text-content">{result.total.carbs}g</td>
                  <td className="text-end px-3 py-2 font-bold text-content">{result.total.fat}g</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Scan another button */}
          <button
            onClick={handleReset}
            className="mt-4 w-full py-3 px-6 bg-white border border-brand-green text-brand-green font-semibold rounded-lg text-sm hover:bg-brand-green-light transition-colors cursor-pointer flex items-center justify-center gap-2"
          >
            <span>📸</span>
            {t('scan.scan_another')}
          </button>
        </div>
      )}
    </div>
  );
}
