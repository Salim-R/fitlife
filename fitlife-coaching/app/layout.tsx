import './globals.css';
import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter', 
  preload: true 
});

const montserrat = Montserrat({ 
  // La graisse 900 porte les titres de section ; les trois autres couvrent
  // le reste. Charger toute la fonte alourdirait la page pour rien.
  weight: ['400', '600', '700', '900'],
  subsets: ['latin'], 
  variable: '--font-heading',
  preload: true 
});

const SITE = 'https://fitlife-coaching.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: 'FitLife · Démonstration de site pour un coach sportif',
  description:
    'Site de démonstration : présentation d\'une offre de coaching, méthode, profils concernés et prise de contact. Marque, coachs, témoignages et chiffres fictifs.',
  keywords:
    ['coaching sportif', 'site vitrine', 'démonstration', 'Next.js', 'transformation physique'],
  authors: [{ name: 'Salim Rhamoumi', url: 'https://www.salimrhamoumi.com' }],

  // La marque, les coachs, les témoignages et les chiffres de cette page sont
  // inventés. Tant qu'ils le sont, elle n'a rien à faire dans un index de
  // recherche : elle y côtoierait de vrais coachs sous une identité qui
  // n'existe pas, et ses résultats affichés se liraient comme des promesses.
  robots: { index: false, follow: false },

  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    // L'adresse déclarée était `fitlife-coaching.fr`, un domaine qui n'est pas
    // le nôtre, et l'image de partage y pointait aussi : tout partage du lien
    // produisait une vignette vide.
    url: SITE,
    siteName: 'FitLife',
    title: 'FitLife · Démonstration de site pour un coach sportif',
    description: 'Contenus fictifs. Réalisation Salim Rhamoumi, développeur web.',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        {/* Le navigateur précharge les pages marquées data-prerender au survol
            ou au premier signe d'intention. « moderate » attend un indice réel
            plutôt que de précharger sans discernement. */}
        <script
          type="speculationrules"
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
      <body className={`${inter.variable} ${montserrat.variable} flex min-h-screen flex-col font-sans bg-zinc-950 text-white selection:bg-lime-400 selection:text-black`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}