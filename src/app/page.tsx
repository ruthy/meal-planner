'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import LanguageToggle from '@/components/LanguageToggle';
import EmailCapture from '@/components/EmailCapture';

export default function LandingPage() {
  const { user, loading } = useAuth();
  const { t } = useLanguage();
  const router = useRouter();
  const supabase = createClient();

  const [authTab, setAuthTab] = useState<'signin' | 'signup'>('signup');
  const [authName, setAuthName] = useState('');
  const [authEmail, setAuthEmail] = useState('');
  const [authPassword, setAuthPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [authMessage, setAuthMessage] = useState('');
  const [authLoading, setAuthLoading] = useState(false);

  const ctaHref = user ? '/dashboard' : '#auth';
  const ctaText = user ? t('landing.hero.cta_dashboard') : t('landing.hero.cta');

  const handleAuthSubmit = async () => {
    setAuthError('');
    setAuthMessage('');

    if (authTab === 'signup' && !authName) {
      setAuthError(t('landing.auth.error_name'));
      return;
    }
    if (!authEmail || !authEmail.includes('@')) {
      setAuthError(t('landing.auth.error_email'));
      return;
    }
    if (!authPassword || authPassword.length < 6) {
      setAuthError(t('landing.auth.error_password'));
      return;
    }

    setAuthLoading(true);

    if (authTab === 'signup') {
      const { error } = await supabase.auth.signUp({
        email: authEmail,
        password: authPassword,
        options: { data: { full_name: authName } },
      });
      setAuthLoading(false);
      if (error) {
        setAuthError(error.message);
        return;
      }
      setAuthMessage(t('check_email_confirm'));
    } else {
      const { error } = await supabase.auth.signInWithPassword({
        email: authEmail,
        password: authPassword,
      });
      setAuthLoading(false);
      if (error) {
        setAuthError(error.message);
        return;
      }
      router.push('/dashboard');
      router.refresh();
    }
  };

  return (
    <div className="min-h-screen bg-surface-bg">
      {/* Language Toggle - fixed top right */}
      <div className="fixed top-4 right-4 z-50">
        <LanguageToggle />
      </div>

      {/* ===== HERO ===== */}
      <section
        className="relative overflow-hidden px-5 pt-16 pb-20 md:pt-24 md:pb-28"
        style={{ background: 'linear-gradient(160deg, #065F46 0%, #1D9E75 100%)' }}
      >
        {/* Decorative circles */}
        <div className="absolute top-[-80px] right-[-80px] w-[260px] h-[260px] rounded-full bg-white/5" />
        <div className="absolute bottom-[-60px] left-[-60px] w-[200px] h-[200px] rounded-full bg-white/5" />

        <div className="relative max-w-[640px] mx-auto text-center">
          {/* Logo */}
          <img src="/logo.svg" alt="DailyBite" className="w-20 h-20 inline-block mb-6 drop-shadow-lg" />
          <div className="text-white/90 text-sm font-bold tracking-widest uppercase mb-4">{t('app_name')}</div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-5">
            {t('landing.hero.title')}
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-[520px] mx-auto mb-8">
            {t('landing.hero.subtitle')}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            {user ? (
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-brand-green-dark font-bold text-[15px] rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all no-underline"
              >
                {loading ? t('common.loading') : t('landing.hero.cta_dashboard')}
              </Link>
            ) : (
              <a
                href="#auth"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('auth')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-brand-green-dark font-bold text-[15px] rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all no-underline cursor-pointer"
              >
                {loading ? t('common.loading') : t('landing.hero.cta')}
              </a>
            )}
            <a
              href="#features"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center px-7 py-3.5 bg-white/10 text-white font-semibold text-[15px] rounded-xl border border-white/25 hover:bg-white/20 transition-all no-underline cursor-pointer"
            >
              {t('landing.hero.learn_more')}
            </a>
          </div>
        </div>
      </section>

      {/* ===== FEATURES GRID ===== */}
      <section id="features" className="px-5 py-16 md:py-20">
        <div className="max-w-[900px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-content mb-3">{t('landing.features.title')}</h2>
            <div className="w-12 h-1 bg-brand-green rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: '📸', titleKey: 'landing.feature.scanner.title', descKey: 'landing.feature.scanner.desc' },
              { icon: '🍽️', titleKey: 'landing.feature.meals.title', descKey: 'landing.feature.meals.desc' },
              { icon: '📊', titleKey: 'landing.feature.calculator.title', descKey: 'landing.feature.calculator.desc' },
              { icon: '💧', titleKey: 'landing.feature.water.title', descKey: 'landing.feature.water.desc' },
              { icon: '🏋️', titleKey: 'landing.feature.exercise.title', descKey: 'landing.feature.exercise.desc' },
              { icon: '🍉', titleKey: 'landing.feature.shots.title', descKey: 'landing.feature.shots.desc' },
              { icon: '📈', titleKey: 'landing.feature.progress.title', descKey: 'landing.feature.progress.desc' },
            ].map((f) => (
              <div
                key={f.titleKey}
                className="bg-white rounded-2xl p-6 border border-surface-border shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <div className="w-12 h-12 bg-brand-green-light rounded-xl flex items-center justify-center text-2xl mb-4">
                  {f.icon}
                </div>
                <h3 className="text-[15px] font-bold text-content mb-2">{t(f.titleKey)}</h3>
                <p className="text-[13px] text-content-muted leading-relaxed">{t(f.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SOCIAL PROOF ===== */}
      <section className="px-5 py-16 md:py-20 bg-brand-green-light">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-content text-center mb-10">
            {t('landing.social.title')}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { value: '1,150', labelKey: 'landing.social.stat1' },
              { value: '7', labelKey: 'landing.social.stat2' },
              { value: '30+', labelKey: 'landing.social.stat3' },
            ].map((s) => (
              <div
                key={s.labelKey}
                className="bg-white rounded-2xl p-6 text-center border border-surface-border shadow-sm"
              >
                <div className="text-3xl md:text-4xl font-extrabold text-brand-green mb-2">{s.value}</div>
                <div className="text-[13px] text-content-muted font-medium">{t(s.labelKey)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="px-5 py-16 md:py-20">
        <div className="max-w-[700px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-content mb-3">{t('landing.how.title')}</h2>
            <div className="w-12 h-1 bg-brand-green rounded-full mx-auto" />
          </div>

          <div className="space-y-8">
            {[
              { step: '1', titleKey: 'landing.how.step1.title', descKey: 'landing.how.step1.desc' },
              { step: '2', titleKey: 'landing.how.step2.title', descKey: 'landing.how.step2.desc' },
              { step: '3', titleKey: 'landing.how.step3.title', descKey: 'landing.how.step3.desc' },
            ].map((s) => (
              <div key={s.step} className="flex gap-5 items-start">
                <div className="w-10 h-10 shrink-0 bg-brand-green rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
                  {s.step}
                </div>
                <div>
                  <h3 className="text-[15px] font-bold text-content mb-1">{t(s.titleKey)}</h3>
                  <p className="text-[13px] text-content-muted leading-relaxed">{t(s.descKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SIGN UP / SIGN IN ===== */}
      <section
        id="auth"
        className="px-5 py-16 md:py-20"
        style={{ background: 'linear-gradient(160deg, #065F46 0%, #1D9E75 100%)' }}
      >
        <div className="max-w-[380px] mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2">{t('landing.auth.title')}</h2>
            <p className="text-white/70 text-sm">{t('landing.auth.subtitle')}</p>
          </div>

          {user ? (
            <div className="bg-white rounded-2xl p-8 shadow-2xl text-center">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-lg font-bold text-content mb-2">{t('landing.auth.already_signed_in')}</h3>
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center w-full py-3 bg-brand-green text-white border-none rounded-lg text-[15px] font-bold no-underline hover:bg-brand-green-dark transition-colors"
              >
                {t('landing.hero.cta_dashboard')}
              </Link>
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-6 shadow-2xl">
              {/* Tabs */}
              <div className="flex bg-surface-bg rounded-lg p-0.5 mb-5">
                {(['signup', 'signin'] as const).map((tabVal) => (
                  <button
                    key={tabVal}
                    onClick={() => {
                      setAuthTab(tabVal);
                      setAuthError('');
                      setAuthMessage('');
                    }}
                    className={`flex-1 py-2.5 border-none rounded-md text-[13px] font-bold cursor-pointer transition-all
                      ${authTab === tabVal ? 'bg-brand-green text-white' : 'bg-transparent text-content-muted'}`}
                  >
                    {tabVal === 'signin' ? t('sign_in') : t('sign_up')}
                  </button>
                ))}
              </div>

              {/* Error / Success */}
              {authError && (
                <div className="bg-red-50 border border-red-300 rounded-md px-3 py-2 text-xs text-red-800 mb-3">
                  {authError}
                </div>
              )}
              {authMessage && (
                <div className="bg-green-50 border border-green-300 rounded-md px-3 py-2 text-xs text-green-800 mb-3">
                  {authMessage}
                </div>
              )}

              {/* Name (signup only) */}
              {authTab === 'signup' && (
                <div className="mb-3">
                  <label className="text-[11px] font-bold text-content-muted uppercase tracking-wider block mb-1.5">
                    {t('full_name')}
                  </label>
                  <input
                    type="text"
                    value={authName}
                    onChange={(e) => setAuthName(e.target.value)}
                    placeholder={t('landing.auth.name_placeholder')}
                    className="w-full px-3.5 py-2.5 border-[1.5px] border-surface-border rounded-lg text-sm outline-none transition-colors focus:border-brand-green"
                  />
                </div>
              )}

              {/* Email */}
              <div className="mb-3">
                <label className="text-[11px] font-bold text-content-muted uppercase tracking-wider block mb-1.5">
                  {t('email')}
                </label>
                <input
                  type="email"
                  value={authEmail}
                  onChange={(e) => setAuthEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-3.5 py-2.5 border-[1.5px] border-surface-border rounded-lg text-sm outline-none transition-colors focus:border-brand-green"
                />
              </div>

              {/* Password */}
              <div className="mb-5">
                <label className="text-[11px] font-bold text-content-muted uppercase tracking-wider block mb-1.5">
                  {t('password')}
                </label>
                <input
                  type="password"
                  value={authPassword}
                  onChange={(e) => setAuthPassword(e.target.value)}
                  placeholder={
                    authTab === 'signup' ? t('landing.auth.password_create') : t('landing.auth.password_enter')
                  }
                  className="w-full px-3.5 py-2.5 border-[1.5px] border-surface-border rounded-lg text-sm outline-none transition-colors focus:border-brand-green"
                />
              </div>

              {/* Submit */}
              <button
                onClick={handleAuthSubmit}
                disabled={authLoading}
                className="w-full py-3 bg-brand-green text-white border-none rounded-lg text-[15px] font-bold cursor-pointer hover:bg-brand-green-dark transition-colors disabled:opacity-50"
              >
                {authLoading
                  ? t('common.loading')
                  : authTab === 'signup'
                    ? `${t('create_account')} →`
                    : `${t('sign_in')} →`}
              </button>

              {/* Switch link */}
              <div className="text-center mt-3 text-xs text-content-muted">
                {authTab === 'signup' ? t('have_account') : t('no_account')}{' '}
                <button
                  onClick={() => {
                    setAuthTab(authTab === 'signup' ? 'signin' : 'signup');
                    setAuthError('');
                    setAuthMessage('');
                  }}
                  className="text-brand-green font-bold border-none bg-transparent cursor-pointer"
                >
                  {authTab === 'signup' ? t('sign_in') : t('sign_up')}
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ===== BILINGUAL CALLOUT ===== */}
      <section className="px-5 py-10">
        <div className="max-w-[640px] mx-auto bg-white rounded-2xl p-6 md:p-8 border border-surface-border shadow-sm text-center">
          <p className="text-base md:text-lg font-semibold text-content">{t('landing.bilingual')}</p>
        </div>
      </section>

      {/* ===== EMAIL CAPTURE ===== */}
      <EmailCapture />

      {/* ===== FINAL CTA ===== */}
      <section
        className="px-5 py-16 md:py-20"
        style={{ background: 'linear-gradient(160deg, #065F46 0%, #1D9E75 100%)' }}
      >
        <div className="max-w-[540px] mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-5">{t('landing.cta.title')}</h2>
          <Link
            href={ctaHref}
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green-dark font-bold text-[16px] rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all no-underline mb-4"
          >
            {loading ? t('common.loading') : ctaText}
          </Link>
          <p className="text-white/70 text-sm">{t('landing.cta.subtitle')}</p>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="px-5 py-8 bg-brand-green-dark">
        <div className="max-w-[900px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-white/70 text-xs">
          <div>
            &copy; 2026 {t('app_name')} &middot; {t('footer.copyright')}
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors no-underline text-white/70">
              {t('landing.footer.privacy')}
            </a>
            <a href="#" className="hover:text-white transition-colors no-underline text-white/70">
              {t('landing.footer.terms')}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
