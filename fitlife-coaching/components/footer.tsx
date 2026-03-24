import Link from "next/link";
import { Facebook, Instagram, Linkedin, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    // 🔥 Fond zinc-950 et bordure très sombre pour se fondre avec la section précédente
    <footer className="border-t border-zinc-900 bg-zinc-950 py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          
          {/* 🔥 Identité Visuelle (Cohérente avec le Header) */}
          <div className="text-center md:text-left">
            <Link href="/" className="inline-block" aria-label="Accueil FitLife">
              <span className="font-heading text-3xl font-black uppercase tracking-tighter text-white">
                FIT<span className="text-lime-400">LIFE</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm font-medium text-zinc-400 leading-relaxed">
              L'ingénierie du corps humain. Périodisation, biomécanique et nutrition data-driven.
            </p>
          </div>

          {/* 🔥 Navigation Secondaire Premium (Uppercase, tracking large) */}
          <nav aria-label="Liens de pied de page" className="w-full md:w-auto">
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[11px] font-bold uppercase tracking-widest text-zinc-500">
              <li>
                <Link href="/#services" className="transition-colors hover:text-lime-400">Protocoles</Link>
              </li>
              <li>
                <Link href="/#results" className="transition-colors hover:text-lime-400">Résultats</Link>
              </li>
              <li>
                <Link href="/#our-team" className="transition-colors hover:text-lime-400">Le Hub</Link>
              </li>
              <li>
                <Link href="/#faq" className="transition-colors hover:text-lime-400">FAQ</Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Ligne de séparation */}
        <div className="h-px w-full bg-zinc-900 mb-8" />

        <div className="flex flex-col-reverse items-center justify-between gap-6 text-xs font-medium text-zinc-500 md:flex-row">
          
          {/* Copyright & Dev Credit (Pour ton portfolio !) */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <p>© {new Date().getFullYear()} FitLife Coaching. Tous droits réservés.</p>
            <p className="flex items-center gap-1">
              Architecture & Design par{" "}
              <a 
                href="https://salimportfolio.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-lime-400 transition-colors inline-flex items-center"
              >
                Salim Rhamoumi <ArrowUpRight size={12} className="ml-0.5" />
              </a>
            </p>
          </div>

          {/* Réseaux Sociaux */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 transition-transform duration-300 hover:-translate-y-1 hover:text-lime-400"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" aria-hidden="true" strokeWidth={1.5} />
            </a>
            
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 transition-transform duration-300 hover:-translate-y-1 hover:text-lime-400"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" aria-hidden="true" strokeWidth={1.5} />
            </a>

            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 transition-transform duration-300 hover:-translate-y-1 hover:text-lime-400"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" aria-hidden="true" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}