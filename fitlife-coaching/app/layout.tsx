import './globals.css'
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  preload: true,
})

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  preload: true,
})

export const metadata: Metadata = {
  title: 'FitLife Coaching - Votre partenaire fitness à Lyon',
  description: 'FitLife Coaching vous aide à atteindre vos objectifs de santé et de bien-être à Lyon avec des programmes personnalisés et un suivi expert.',
  keywords: 'fitness, coaching, Lyon, santé, bien-être, entraînement personnel, nutrition, perte de poids, musculation',
  authors: [{ name: 'FitLife Coaching' }],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://fitlife-coaching.fr',
    siteName: 'FitLife Coaching',
    images: [
      {
        url: 'https://fitlife-coaching.fr/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FitLife Coaching - Transformez votre vie',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@FitLifeCoaching',
    creator: '@FitLifeCoaching',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-sans flex min-h-screen flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}