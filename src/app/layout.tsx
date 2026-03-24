import type { Metadata, Viewport } from 'next';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import { AuthProvider } from '@/contexts/AuthContext';
import { LanguageProvider } from '@/contexts/LanguageContext';

const siteUrl = 'https://www.dailybite.fit';

export const metadata: Metadata = {
  title: 'DailyBite — The plan that transforms how you eat.',
  description:
    'A personalized gluten-free meal planner for women 40+. Track meals, calories, water, exercise & weight — free, bilingual (EN/HE), works on any device.',
  manifest: '/manifest.json',
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'DailyBite',
    title: 'DailyBite — The plan that transforms how you eat.',
    description:
      'Gluten-free meal planner with 7-day menus, calorie calculator, water tracker, exercise videos & progress charts. Free. Works on iPhone & Android.',
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: 'DailyBite — Gluten-free meal planner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DailyBite — The plan that transforms how you eat.',
    description: 'Free gluten-free meal planner for women 40+. Track meals, water, exercise & weight.',
    images: ['/api/og'],
  },
  keywords: [
    'meal planner',
    'gluten free meal plan',
    'calorie tracker',
    'meal plan for women over 40',
    'weight loss meal plan',
    'gluten free diet',
    'daily meal planner',
    'water tracker',
    'exercise plan seniors',
    'Hebrew meal planner',
  ],
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'DailyBite',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#1D9E75',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              name: 'DailyBite',
              url: siteUrl,
              description: 'A personalized gluten-free meal planner for women 40+.',
              applicationCategory: 'HealthApplication',
              operatingSystem: 'Any',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
              },
              featureList: [
                '7-day gluten-free meal plans',
                'Personalized calorie calculator',
                'Water intake tracking',
                'Exercise videos for seniors',
                'Weight trend charts',
                'Hebrew and English support',
              ],
            }),
          }}
        />
      </head>
      <body>
        <LanguageProvider>
          <AuthProvider>{children}</AuthProvider>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
