'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';

export default function UpdatePasswordPage() {
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const handleUpdate = async () => {
    setError('');
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }
    if (password !== confirm) {
      setError('Passwords do not match.');
      return;
    }
    setLoading(true);
    const { error: err } = await supabase.auth.updateUser({ password });
    setLoading(false);
    if (err) {
      setError(err.message);
      return;
    }
    router.push('/');
  };

  const inputClass =
    'w-full px-3.5 py-2.5 border-[1.5px] border-surface-border rounded-lg text-sm outline-none transition-colors focus:border-brand-green';

  return (
    <div
      className="fixed inset-0 flex items-center justify-center p-5"
      style={{ background: 'linear-gradient(160deg, #065F46 0%, #1D9E75 100%)' }}
    >
      <div className="bg-white rounded-2xl p-8 w-full max-w-[380px] shadow-2xl">
        <div className="text-center mb-6">
          <div className="text-xl font-extrabold text-content">Set New Password</div>
          <div className="text-xs text-content-muted mt-1">Choose a new password for your account</div>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-300 rounded-md px-3 py-2 text-xs text-red-800 mb-3.5">
            {error}
          </div>
        )}

        <div className="mb-3.5">
          <label className="text-[11px] font-bold text-content-muted uppercase tracking-wider block mb-1.5">
            New Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="New password (min 6 chars)"
            className={inputClass}
          />
        </div>
        <div className="mb-5">
          <label className="text-[11px] font-bold text-content-muted uppercase tracking-wider block mb-1.5">
            Confirm Password
          </label>
          <input
            type="password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            placeholder="Confirm new password"
            className={inputClass}
          />
        </div>
        <button
          onClick={handleUpdate}
          disabled={loading}
          className="w-full py-3 bg-brand-green text-white border-none rounded-lg text-[15px] font-bold cursor-pointer hover:bg-brand-green-dark transition-colors disabled:opacity-50"
        >
          {loading ? 'Updating...' : 'Update Password →'}
        </button>
      </div>
    </div>
  );
}
