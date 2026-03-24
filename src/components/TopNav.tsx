interface TopNavProps {
  targetCalories?: number | null;
}

export default function TopNav({ targetCalories }: TopNavProps) {
  const calDisplay = targetCalories ? `${targetCalories.toLocaleString()} cal/day` : '1,150 cal/day';

  return (
    <div className="bg-white border-b border-surface-border px-6 py-3.5 flex items-center gap-3">
      <div className="w-8 h-8 bg-[#1B5E3B] rounded-md flex items-center justify-center text-white font-bold text-[13px] flex-shrink-0">
        BB
      </div>
      <div className="text-[15px] font-semibold text-content">The plan that transforms how you eat.</div>
      <div className="text-xs text-content-muted ml-auto hidden sm:block">Gluten-free &middot; {calDisplay}</div>
    </div>
  );
}
