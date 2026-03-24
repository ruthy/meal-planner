'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ResetPasswordPage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const supabase = createClient();
  const { t } = useLanguage();

  const handleReset = async () => {
    setError('');
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email.');
      return;
    }
    setLoading(true);
    const { error: err } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/update-password`,
    });
    setLoading(false);
    if (err) {
      setError(err.message);
      return;
    }
    setSent(true);
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center p-5"
      style={{ background: 'linear-gradient(160deg, #065F46 0%, #1D9E75 100%)' }}
    >
      <div className="bg-white rounded-2xl p-8 w-full max-w-[380px] shadow-2xl">
        <div className="text-center mb-6">
          <div className="text-xl font-extrabold text-content">{t('send_reset_link')}</div>
          <div className="text-xs text-content-muted mt-1">{t('check_email_reset')}</div>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-300 rounded-md px-3 py-2 text-xs text-red-800 mb-3.5">
            {error}
          </div>
        )}

        {sent ? (
          <div className="bg-green-50 border border-green-300 rounded-md p-4 text-sm text-green-800 text-center">
            {t('check_email_reset')}
            <div className="mt-3">
              <a href="/login" className="text-brand-green font-bold">
                {t('back_to_signin')}
              </a>
            </div>
          </div>
        ) : (
          <>
            <div className="mb-5">
              <label className="text-[11px] font-bold text-content-muted uppercase tracking-wider block mb-1.5">
                {t('email')}
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-3.5 py-2.5 border-[1.5px] border-surface-border rounded-lg text-sm outline-none focus:border-brand-green"
              />
            </div>
            <button
              onClick={handleReset}
              disabled={loading}
              className="w-full py-3 bg-brand-green text-white border-none rounded-lg text-[15px] font-bold cursor-pointer hover:bg-brand-green-dark transition-colors disabled:opacity-50"
            >
              {loading ? t('common.loading') : t('send_reset_link')}
            </button>
            <div className="text-center mt-3.5">
              <a href="/login" className="text-xs text-content-muted">
                {t('back_to_signin')}
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
