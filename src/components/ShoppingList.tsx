'use client';

import { SHOP_CATEGORIES } from '@/data/shopping';
import { useDailyTracking } from '@/hooks/useDailyTracking';
import { useLanguage } from '@/contexts/LanguageContext';

const CATEGORY_KEYS: Record<string, string> = {
  Protein: 'shopping.category.protein',
  Vegetables: 'shopping.category.vegetables',
  Fruit: 'shopping.category.fruit',
  'Grains & Carbs (GF)': 'shopping.category.grains',
  'Pantry & Cooking': 'shopping.category.pantry',
};

export default function ShoppingList() {
  const { tracking, toggleShopItem } = useDailyTracking();
  const { t } = useLanguage();
  const checked = tracking?.shopping_checked || {};

  return (
    <div>
      {SHOP_CATEGORIES.map((cat) => (
        <div key={cat.name}>
          <div className="text-[11px] font-bold text-content-muted uppercase tracking-wider mt-3.5 first:mt-0 mb-1.5 pb-1.5 border-b border-surface-border">
            {t(CATEGORY_KEYS[cat.name] || cat.name)}
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-1.5 mb-1">
            {cat.items.map((item, i) => {
              const key = `${cat.name}${i}`;
              const got = !!checked[key];
              return (
                <div
                  key={key}
                  onClick={() => toggleShopItem(key)}
                  className={`flex items-center gap-2 px-2.5 py-1.5 border rounded-md text-xs cursor-pointer transition-all select-none
                    ${
                      got
                        ? 'bg-surface-bg text-content-muted line-through border-surface-border'
                        : 'bg-white text-content border-surface-border hover:border-brand-green'
                    }`}
                >
                  <div
                    className={`w-[15px] h-[15px] border-[1.5px] rounded-sm flex items-center justify-center text-[9px] flex-shrink-0 transition-all
                    ${got ? 'bg-brand-green border-brand-green text-white' : 'border-surface-border'}`}
                  >
                    {got && '✓'}
                  </div>
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
