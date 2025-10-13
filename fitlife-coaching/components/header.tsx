"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { LazyMotion, loadFeatures, m } from "@/components/motion";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menuItems = [
    { href: "#our-team", label: "Notre Équipe" },
    { href: "#results", label: "Résultats" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
    { href: "#services", label: "Services" },
    { href: "#testimonials", label: "Témoignages" },
  ];

  return (
    <LazyMotion features={loadFeatures}>
      <m.header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/60 backdrop-blur text-gray-800" : "bg-white text-gray-800"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-poppins text-3xl font-bold tracking-tighter text-primary">FitLife</span>
            </Link>

            <nav className="hidden space-x-8 md:flex">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  data-prerender
                  className="text-lg font-medium transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <button
              className="md:hidden focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              onClick={() => setIsMenuOpen((v) => !v)}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Menu mobile animé mais simple, pas d’AnimatePresence nécessaire */}
        <m.div
          initial={false}
          animate={{ height: isMenuOpen ? "auto" : 0, opacity: isMenuOpen ? 1 : 0 }}
          className="md:hidden overflow-hidden border-t bg-background"
          transition={{ duration: 0.25 }}
        >
          <div className="container mx-auto space-y-4 px-4 py-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-lg font-medium transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </m.div>
      </m.header>
    </LazyMotion>
  );
}
