'use client';

import { useState, type ReactNode } from 'react';

interface SectionWrapProps {
  title: string;
  subtitle: string;
  barClass: string;
  defaultOpen?: boolean;
  headerRight?: ReactNode;
  children: ReactNode;
}

export default function SectionWrap({
  title,
  subtitle,
  barClass,
  defaultOpen = true,
  headerRight,
  children,
}: SectionWrapProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="bg-white border border-surface-border rounded-lg overflow-hidden mt-3.5">
      <div
        className={`cursor-pointer select-none flex items-center justify-between px-5 h-[76px] text-white ${barClass} hover:opacity-95`}
        onClick={() => setOpen((o) => !o)}
      >
        <div className="flex flex-col gap-0.5 flex-1 min-w-0 overflow-hidden">
          <div className="text-base font-bold text-white whitespace-nowrap overflow-hidden text-ellipsis">{title}</div>
          <div className="text-[11px] text-white/85 whitespace-nowrap overflow-hidden text-ellipsis">{subtitle}</div>
        </div>
        <div className="flex items-center gap-2.5 ml-4">
          {headerRight}
          <span
            className="text-[13px] text-white w-7 h-7 flex-shrink-0 bg-white/20 rounded-full flex items-center justify-center transition-transform duration-200"
            style={{ transform: open ? 'rotate(0deg)' : 'rotate(-90deg)' }}
          >
            &#9660;
          </span>
        </div>
      </div>
      {open && <div className="p-5">{children}</div>}
    </div>
  );
}
