"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { LazyMotion, m } from "@/components/motion";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isMenuOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [isMenuOpen]);

  // 🔥 Ordre revu pour le tunnel de vente
  const menuItems = [
    { href: "/#services", label: "Expertises" },
    { href: "/#results", label: "Résultats" },
    { href: "/#our-team", label: "L'Équipe" },
    { href: "/#testimonials", label: "Avis" },
    { href: "/#faq", label: "FAQ" },
  ];

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-60 focus:rounded-none focus:bg-lime-400 focus:px-3 focus:py-2 focus:text-black"
      >
        Aller au contenu
      </a>

      <LazyMotion features={() => import("framer-motion").then((m) => m.domAnimation)}>
        <m.header
          role="banner"
          className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 border-b ${
            isScrolled
              ? "bg-zinc-950/80 backdrop-blur-md border-white/10 py-3" // 🔥 Mode Glassmorphism sombre
              : "bg-transparent border-transparent py-5"
          }`}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              
              {/* 🔥 LOGO Premium */}
              <Link href="/" className="flex items-center group" aria-label="Accueil FitLife">
                <span className="font-heading text-2xl font-black uppercase tracking-tighter text-white transition-transform group-hover:scale-105">
                  FIT<span className="text-lime-400">LIFE</span>
                </span>
              </Link>

              {/* 🔥 NAVIGATION BUREAU Luxe */}
              <nav className="hidden md:flex items-center gap-8" aria-label="Navigation principale">
                <ul className="flex items-center gap-8">
                  {menuItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        prefetch={false}
                        className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:text-lime-400"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="flex items-center gap-4">
                {/* 🔥 CTA BUREAU (Tranchant, sans bords arrondis pour l'aspect agressif) */}
                <Link
                  href="/#contact"
                  className="hidden md:flex items-center justify-center bg-lime-400 px-6 py-2.5 text-[11px] font-black uppercase tracking-widest text-black transition-all hover:bg-lime-300 hover:shadow-[0_0_20px_rgba(204,255,0,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
                >
                  Démarrer
                </Link>

                {/* MENU MOBILE TOGGLE */}
                <button
                  className="md:hidden text-white focus:outline-none p-2"
                  onClick={() => setIsMenuOpen((v) => !v)}
                  aria-expanded={isMenuOpen}
                  aria-controls="mobile-menu"
                  aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                >
                  {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
              </div>
            </div>
          </div>

          {/* 🔥 MENU MOBILE (Noir et Vert Néon) */}
          <m.div
            id="mobile-menu"
            initial={false}
            animate={{ height: isMenuOpen ? "100vh" : 0, opacity: isMenuOpen ? 1 : 0 }}
            className="overflow-hidden bg-zinc-950 md:hidden absolute top-full left-0 w-full"
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8 pb-32">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  prefetch={false}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-black uppercase tracking-widest text-zinc-400 transition-colors hover:text-lime-400"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/#contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-8 flex items-center justify-center bg-lime-400 px-10 py-4 text-sm font-black uppercase tracking-widest text-black transition-all active:scale-95"
              >
                Commencer maintenant
              </Link>
            </div>
          </m.div>
        </m.header>
      </LazyMotion>
    </>
  );
}