'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';

export default function LoginPage() {
  const [tab, setTab] = useState<'signin' | 'signup' | 'forgot'>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();
  const { t } = useLanguage();

  const handleSignIn = async () => {
    setError('');
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!password || password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }
    setLoading(true);
    const { error: err } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (err) {
      setError(err.message);
      return;
    }
    router.push('/dashboard');
    router.refresh();
  };

  const handleSignUp = async () => {
    setError('');
    if (!name) {
      setError('Please enter your full name.');
      return;
    }
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email.');
      return;
    }
    if (!password || password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }
    setLoading(true);
    const { error: err } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: name } },
    });
    setLoading(false);
    if (err) {
      setError(err.message);
      return;
    }
    setMessage(t('check_email_confirm'));
  };

  const handleForgotPassword = async () => {
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
    setMessage(t('check_email_reset'));
  };

  const inputClass =
    'w-full px-3.5 py-2.5 border-[1.5px] border-surface-border rounded-lg text-sm outline-none transition-colors focus:border-brand-green';

  return (
    <div
      className="fixed inset-0 flex items-center justify-center p-5"
      style={{ background: 'linear-gradient(160deg, #065F46 0%, #1D9E75 100%)' }}
    >
      <div className="bg-white rounded-2xl p-8 w-full max-w-[380px] shadow-2xl">
        {/* Logo */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-[#1B5E3B] rounded-2xl inline-flex items-center justify-center mb-3">
            <span className="text-3xl">🌿</span>
          </div>
          <div className="text-xl font-extrabold text-content">{t('app_name')}</div>
          <div className="text-xs text-content-muted mt-1">
            {t('app_tagline')} &mdash; {t('app_subtitle')}
          </div>
        </div>

        {/* Tabs */}
        {tab !== 'forgot' && (
          <div className="flex bg-surface-bg rounded-lg p-0.5 mb-6">
            {(['signin', 'signup'] as const).map((tabVal) => (
              <button
                key={tabVal}
                onClick={() => {
                  setTab(tabVal);
                  setError('');
                  setMessage('');
                }}
                className={`flex-1 py-2 border-none rounded-md text-[13px] font-bold cursor-pointer transition-all
                  ${tab === tabVal ? 'bg-brand-green text-white' : 'bg-transparent text-content-muted'}`}
              >
                {tabVal === 'signin' ? t('sign_in') : t('sign_up')}
              </button>
            ))}
          </div>
        )}

        {tab === 'forgot' && (
          <div className="text-center mb-6">
            <div className="text-lg font-bold text-content mb-1">{t('send_reset_link')}</div>
            <div className="text-xs text-content-muted">{t('check_email_reset')}</div>
          </div>
        )}

        {/* Error / Message */}
        {error && (
          <div className="bg-red-50 border border-red-300 rounded-md px-3 py-2 text-xs text-red-800 mb-3.5">
            {error}
          </div>
        )}
        {message && (
          <div className="bg-green-50 border border-green-300 rounded-md px-3 py-2 text-xs text-green-800 mb-3.5">
            {message}
          </div>
        )}

        {/* Sign In */}
        {tab === 'signin' && (
          <>
            <div className="mb-3.5">
              <label className="text-[11px] font-bold text-content-muted uppercase tracking-wider block mb-1.5">
                {t('email')}
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className={inputClass}
              />
            </div>
            <div className="mb-5">
              <label className="text-[11px] font-bold text-content-muted uppercase tracking-wider block mb-1.5">
                {t('password')}
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your password"
                className={inputClass}
              />
            </div>
            <button
              onClick={handleSignIn}
              disabled={loading}
              className="w-full py-3 bg-brand-green text-white border-none rounded-lg text-[15px] font-bold cursor-pointer hover:bg-brand-green-dark transition-colors disabled:opacity-50"
            >
              {loading ? `${t('common.loading')}` : `${t('sign_in')} →`}
            </button>
            <div className="text-center mt-3.5 text-xs text-content-muted">
              <button
                onClick={() => {
                  setTab('forgot');
                  setError('');
                  setMessage('');
                }}
                className="text-brand-green font-bold border-none bg-transparent cursor-pointer"
              >
                {t('forgot_password')}
              </button>
              {' · '}
              {t('no_account')}{' '}
              <button
                onClick={() => {
                  setTab('signup');
                  setError('');
                  setMessage('');
                }}
                className="text-brand-green font-bold border-none bg-transparent cursor-pointer"
              >
                {t('sign_up')}
              </button>
            </div>
          </>
        )}

        {/* Sign Up */}
        {tab === 'signup' && (
          <>
            <div className="mb-3.5">
              <label className="text-[11px] font-bold text-content-muted uppercase tracking-wider block mb-1.5">
                {t('full_name')}
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Ruthy Navon"
                className={inputClass}
              />
            </div>
            <div className="mb-3.5">
              <label className="text-[11px] font-bold text-content-muted uppercase tracking-wider block mb-1.5">
                {t('email')}
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className={inputClass}
              />
            </div>
            <div className="mb-5">
              <label className="text-[11px] font-bold text-content-muted uppercase tracking-wider block mb-1.5">
                {t('password')}
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a password (min 6 chars)"
                className={inputClass}
              />
            </div>
            <button
              onClick={handleSignUp}
              disabled={loading}
              className="w-full py-3 bg-brand-green text-white border-none rounded-lg text-[15px] font-bold cursor-pointer hover:bg-brand-green-dark transition-colors disabled:opacity-50"
            >
              {loading ? `${t('common.loading')}` : `${t('create_account')} →`}
            </button>
            <div className="text-center mt-3.5 text-xs text-content-muted">
              {t('have_account')}{' '}
              <button
                onClick={() => {
                  setTab('signin');
                  setError('');
                  setMessage('');
                }}
                className="text-brand-green font-bold border-none bg-transparent cursor-pointer"
              >
                {t('sign_in')}
              </button>
            </div>
          </>
        )}

        {/* Forgot Password */}
        {tab === 'forgot' && (
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
                className={inputClass}
              />
            </div>
            <button
              onClick={handleForgotPassword}
              disabled={loading}
              className="w-full py-3 bg-brand-green text-white border-none rounded-lg text-[15px] font-bold cursor-pointer hover:bg-brand-green-dark transition-colors disabled:opacity-50"
            >
              {loading ? `${t('common.loading')}` : `${t('send_reset_link')} →`}
            </button>
            <div className="text-center mt-3.5">
              <button
                onClick={() => {
                  setTab('signin');
                  setError('');
                  setMessage('');
                }}
                className="text-xs text-content-muted border-none bg-transparent cursor-pointer"
              >
                {t('back_to_signin')}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
