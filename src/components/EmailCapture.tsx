'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useLanguage } from '@/contexts/LanguageContext';

export default function EmailCapture() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const { t } = useLanguage();
  const supabase = createClient();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setStatus('loading');
    const { error } = await supabase.from('email_captures').insert({ email, source: 'landing' });
    if (error) {
      // Duplicate email is fine — treat as success
      if (error.code === '23505') {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } else {
      setStatus('success');
    }
    setEmail('');
  };

  return (
    <section className="px-5 py-12">
      <div className="max-w-[540px] mx-auto text-center">
        <h3 className="text-lg md:text-xl font-bold text-content mb-4">{t('landing.email.title')}</h3>
        {status === 'success' ? (
          <div className="bg-brand-green-light border border-brand-green rounded-xl p-4 text-brand-green-dark font-semibold text-sm">
            {t('landing.email.success')}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2 max-w-[420px] mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('landing.email.placeholder')}
              className="flex-1 px-4 py-3 border border-surface-border rounded-xl text-sm text-content bg-white outline-none focus:border-brand-green transition-colors"
              required
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-5 py-3 bg-brand-green text-white font-bold text-sm rounded-xl hover:bg-brand-green-mid transition-colors disabled:opacity-50 whitespace-nowrap"
            >
              {status === 'loading' ? '...' : t('landing.email.button')}
            </button>
          </form>
        )}
        {status === 'error' && <p className="text-red-600 text-xs mt-2">{t('landing.email.error')}</p>}
      </div>
    </section>
  );
}
