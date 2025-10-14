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

  const menuItems = [
    { href: "/#our-team", label: "Notre Équipe" },
    { href: "/#results", label: "Résultats" },
    { href: "/#faq", label: "FAQ" },
    { href: "/#contact", label: "Contact" },
    { href: "/#services", label: "Services" },
    { href: "/#testimonials", label: "Témoignages" },
  ];

  return (
    <>
      {/* Skip link (accessibilité) */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-white"
      >
        Aller au contenu
      </a>

      <LazyMotion features={() => import("framer-motion").then((m) => m.domAnimation)}>
        <m.header
          role="banner"
          className={`fixed left-0 right-0 top-0 z-50 border-b transition-all duration-300 ${
            isScrolled
              ? "bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60"
              : "bg-background/95"
          }`}
          initial={{ y: -80 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <Link href="/" className="flex items-center space-x-2" aria-label="Accueil FitLife">
                <span className="font-display text-2xl font-bold tracking-tight text-primary">
                  FitLife
                </span>
              </Link>

              <nav className="hidden md:flex" aria-label="Navigation principale">
                <ul className="flex items-center gap-8">
                  {menuItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        prefetch={false}
                        className="text-foreground/90 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <button
                className="rounded-md p-2 md:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                onClick={() => setIsMenuOpen((v) => !v)}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
                aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Menu mobile */}
          <m.div
            id="mobile-menu"
            initial={false}
            animate={{ height: isMenuOpen ? "auto" : 0, opacity: isMenuOpen ? 1 : 0 }}
            className="overflow-hidden border-t bg-background md:hidden"
            transition={{ duration: 0.25 }}
          >
            <div className="container mx-auto space-y-3 px-4 py-4">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  prefetch={false}
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-md px-2 py-2 text-foreground/90 transition-colors hover:bg-muted hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </m.div>
        </m.header>
      </LazyMotion>
    </>
  );
}
