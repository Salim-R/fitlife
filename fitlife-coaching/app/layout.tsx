import './globals.css';
import type { Metadata } from 'next';
// 🔥 On abandonne Poppins pour Montserrat (Plus large, plus statutaire, plus premium)
import { Inter, Montserrat } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter', 
  preload: true 
});

const montserrat = Montserrat({ 
  weight: ['400', '600', '700', '900'], // Le 900 (Black) est crucial pour des gros titres agressifs
  subsets: ['latin'], 
  variable: '--font-heading', // On la renomme sémantiquement
  preload: true 
});

// 🔥 Copywriting "Élite" pour le SEO et le partage
export const metadata: Metadata = {
  title: 'FitLife | L\'Élite du Coaching Digital',
  description:
    'Ne vous entraînez plus au hasard. Programmes millimétrés et coaching premium pour des résultats implacables.',
  keywords:
    ['coaching premium', 'transformation physique', 'fitness', 'digital coaching', 'performance', 'musculation haute intensité'],
  authors: [{ name: 'FitLife Elite' }],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://fitlife-coaching.fr',
    siteName: 'FitLife Elite',
    images: [
      {
        url: 'https://fitlife-coaching.fr/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FitLife - L\'Élite du Coaching Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@FitLifeElite',
    creator: '@FitLifeElite',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning className="scroll-smooth">
      <head>
        {/* Speculation Rules : Parfait, on n'y touche pas, c'est de l'excellente technique */}
        <script
          type="speculationrules"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              prerender: [
                {
                  where: { and: [{ href_matches: '^/.*' }, { selector_matches: '[data-prerender]' }] },
                  eagerness: 'moderate',
                },
              ],
              prefetch: [
                {
                  where: { and: [{ href_matches: '^/.*' }, { selector_matches: '[data-prerender]' }] },
                  eagerness: 'moderate',
                },
              ],
            }),
          }}
        />
      </head>
      {/* 🔥 On applique la nouvelle variable de police */}
      <body className={`${inter.variable} ${montserrat.variable} flex min-h-screen flex-col font-sans bg-zinc-950 text-white selection:bg-lime-400 selection:text-black`}>
        {/* 🔥 defaultTheme="dark" force l'ambiance agressive et premium dès le chargement */}
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}