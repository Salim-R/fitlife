"use client";

import * as React from "react";
import Script from "next/script";
import { LazyMotion, loadFeatures, m, AnimatePresence } from "@/components/motion";
import { ChevronDown } from "lucide-react";

// 🔥 Copywriting "Élite" : On ne s'excuse pas, on pose un cadre strict.
const FAQ_ITEMS = [
  { 
    q: "Quelle est la fréquence d'entraînement exigée ?", 
    a: "Nous demandons un minimum incompressible de 3 à 4 séances par semaine. Une transformation physique radicale demande un stimulus fréquent et de la discipline. Si vous n'avez pas ce temps, ce protocole n'est pas pour vous." 
  },
  { 
    q: "Acceptez-vous les débutants complets ?", 
    a: "Oui. Le niveau technique de départ importe peu, c'est la capacité à suivre le plan à la lettre qui compte. Nous construisons vos bases biomécaniques de zéro pour éviter toute blessure." 
  },
  { 
    q: "Quel est l'engagement minimum ?", 
    a: "L'engagement initial est de 3 mois (90 jours). Il est physiologiquement et métaboliquement impossible de garantir une recomposition corporelle durable en moins de 12 semaines." 
  },
  { 
    q: "Comment gérez-vous la nutrition ?", 
    a: "Fini les régimes miracles. Vous recevez un plan de macros précis basé sur votre métabolisme de base et votre dépense énergétique. Nous l'ajustons chaque semaine selon l'évolution de votre poids et de vos mensurations." 
  },
  { 
    q: "Comment se déroule le suivi à distance ?", 
    a: "Check-in hebdomadaire obligatoire via notre plateforme. Vous envoyez vos mensurations, votre poids moyen et les vidéos de vos exercices clés. Nous corrigeons votre technique et ajustons les charges pour la semaine suivante." 
  }
] as const;

export function FAQ() {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  // JSON-LD SEO optimisé
  const faqJsonLd = React.useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQ_ITEMS.map(f => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a }
      }))
    }),
    []
  );

  return (
    // 🔥 On garde le fond ultra sombre
    <section id="faq" className="bg-zinc-950 py-24 sm:py-32 relative overflow-hidden">
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        strategy="afterInteractive"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <LazyMotion features={loadFeatures}>
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="mb-4 inline-flex items-center gap-2">
              <div className="h-px w-8 bg-lime-400" />
              <span className="text-lime-400 font-bold tracking-[0.2em] uppercase text-xs">Clarification</span>
              <div className="h-px w-8 bg-lime-400" />
            </div>

            <h2 className="text-4xl font-heading font-black uppercase tracking-tighter text-white sm:text-5xl md:text-6xl">
              Questions <span className="text-zinc-600">Fréquentes</span>
            </h2>
          </m.div>

          <div className="mx-auto mt-12 w-full max-w-3xl">
            <div className="space-y-4">
              {FAQ_ITEMS.map((item, i) => {
                const open = activeIndex === i;
                const panelId = `faq-panel-${i}`;
                const buttonId = `faq-button-${i}`;

                return (
                  <m.div 
                    key={item.q} 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    // 🔥 Design premium : fond très sombre, bordure au survol
                    className={`border transition-colors duration-300 ${open ? 'border-lime-400 bg-zinc-900/50' : 'border-zinc-800 bg-zinc-900/20 hover:border-zinc-700'}`}
                  >
                    <button
                      id={buttonId}
                      aria-controls={panelId}
                      aria-expanded={open}
                      onClick={() => setActiveIndex(open ? null : i)}
                      className="flex w-full items-center justify-between px-6 py-5 text-left focus:outline-none"
                    >
                      <span className={`text-base sm:text-lg font-bold transition-colors ${open ? 'text-lime-400' : 'text-zinc-300'}`}>
                        {item.q}
                      </span>
                      <div className={`ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${open ? 'border-lime-400 bg-lime-400 text-black rotate-180' : 'border-zinc-700 text-zinc-400'}`}>
                        <ChevronDown size={18} strokeWidth={2.5} />
                      </div>
                    </button>

                    <AnimatePresence>
                      {open && (
                        <m.div
                          id={panelId}
                          role="region"
                          aria-labelledby={buttonId}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-2 text-zinc-400 leading-relaxed text-sm sm:text-base">
                            {item.a}
                          </div>
                        </m.div>
                      )}
                    </AnimatePresence>
                  </m.div>
                );
              })}
            </div>
          </div>
        </LazyMotion>
      </div>
    </section>
  );
}