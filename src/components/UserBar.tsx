'use client';

import { useAuth } from '@/contexts/AuthContext';

export default function UserBar() {
  const { user, signOut } = useAuth();

  const name = user?.user_metadata?.full_name?.split(' ')[0] || 'there';

  return (
    <div className="bg-[#085041] px-5 py-2.5 flex items-center justify-between">
      <div className="text-xs text-white">
        Welcome back, <strong>{name}</strong>!
      </div>
      <button
        onClick={signOut}
        className="text-[11px] px-3 py-1 bg-white/20 border border-white/40 rounded-full text-white cursor-pointer hover:bg-white/30 transition-colors"
      >
        Sign Out
      </button>
    </div>
  );
}
