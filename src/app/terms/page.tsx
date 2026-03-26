'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageToggle from '@/components/LanguageToggle';

export default function TermsPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-surface-bg">
      <div className="fixed top-4 right-4 z-50">
        <LanguageToggle />
      </div>

      <div className="max-w-[700px] mx-auto px-5 py-16">
        <Link href="/" className="text-brand-green text-sm font-medium no-underline hover:underline mb-8 inline-block">
          &larr; {t('terms.back')}
        </Link>

        <h1 className="text-3xl font-extrabold text-content mb-2">{t('terms.title')}</h1>
        <p className="text-sm text-content-muted mb-8">{t('terms.last_updated')}</p>

        <div className="space-y-6 text-[15px] text-content leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-content mb-2">{t('terms.s1.title')}</h2>
            <p>{t('terms.s1.body')}</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-content mb-2">{t('terms.s2.title')}</h2>
            <p>{t('terms.s2.body')}</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-content mb-2">{t('terms.s3.title')}</h2>
            <p>{t('terms.s3.body')}</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-content mb-2">{t('terms.s4.title')}</h2>
            <p>{t('terms.s4.body')}</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-content mb-2">{t('terms.s5.title')}</h2>
            <p>{t('terms.s5.body')}</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-content mb-2">{t('terms.s6.title')}</h2>
            <p>{t('terms.s6.body')}</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-content mb-2">{t('terms.s7.title')}</h2>
            <p>{t('terms.s7.body')}</p>
          </section>
        </div>

        <div className="mt-10 pt-6 border-t border-surface-border text-center text-xs text-content-muted">
          &copy; 2026 {t('app_name')} &middot; {t('footer.copyright')}
        </div>
      </div>
    </div>
  );
}
