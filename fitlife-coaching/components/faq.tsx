"use client";

import * as React from "react";
import Script from "next/script";

const FAQ_ITEMS = [
  { q: "Combien de séances par semaine sont recommandées ?", a: "Le nombre de séances recommandées dépend de vos objectifs et de votre niveau de forme actuel. En général, nous recommandons 2 à 3 séances par semaine pour des résultats optimaux." },
  { q: "Proposez-vous des programmes pour débutants ?", a: "Absolument ! Nous avons des programmes adaptés à tous les niveaux, y compris les débutants. Nos coachs vous guideront pas à pas pour vous assurer une progression en toute sécurité." },
  { q: "Puis-je annuler mon abonnement à tout moment ?", a: "Oui, vous pouvez annuler votre abonnement à tout moment. Nous proposons des options flexibles pour s'adapter à vos besoins." },
  { q: "Quels types de régimes alimentaires proposez-vous ?", a: "Nos nutritionnistes élaborent des plans alimentaires personnalisés en fonction de vos objectifs, préférences et éventuelles restrictions alimentaires. Nous couvrons une large gamme de régimes, du végétarien au cétogène." },
  { q: "Quels types de coaching proposez-vous ?", a: "Nous proposons des coachings personnalisés en fitness, nutrition et bien-être, adaptés à vos objectifs personnels." },
  { q: "Comment réserver une séance d’essai gratuite ?", a: "Vous pouvez réserver une séance d’essai gratuite en remplissant le formulaire de contact ou en nous appelant directement." },
  { q: "Les programmes sont-ils adaptés aux débutants ?", a: "Absolument ! Nos programmes sont conçus pour convenir à tous les niveaux, des débutants aux sportifs confirmés." }
] as const;

export function FAQ() {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  // JSON-LD SEO (dépend d’un tableau stable)
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
    <section id="faq" className="bg-[hsl(var(--background))] py-24">
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        strategy="afterInteractive"
      />

      <div className="container mx-auto px-6">
        <h2 className="text-center text-4xl font-bold tracking-tight text-[hsl(var(--primary))] sm:text-5xl md:text-6xl">
          Questions fréquemment posées
        </h2>

        <div className="mx-auto mt-12 w-full max-w-3xl">
          <div className="space-y-2 [--sep:theme(colors.neutral.200)] dark:[--sep:theme(colors.neutral.800)]">
            {FAQ_ITEMS.map((item, i) => {
              const open = activeIndex === i;
              const panelId = `faq-panel-${i}`;
              const buttonId = `faq-button-${i}`;

              return (
                <div key={item.q} className="border-b pb-4 [border-color:var(--sep)]">
                  <button
                    id={buttonId}
                    aria-controls={panelId}
                    aria-expanded={open}
                    onClick={() => setActiveIndex(open ? null : i)}
                    className="flex w-full items-center justify-between text-left text-lg font-semibold text-[hsl(var(--foreground))] focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--primary))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--background))]"
                  >
                    <span>{item.q}</span>
                    <svg
                      className={`h-4 w-4 shrink-0 transition-transform duration-300 motion-reduce:transition-none ${open ? "rotate-180" : "rotate-0"}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
                    </svg>
                  </button>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    hidden={!open}
                    className="pt-2 text-[hsl(var(--foreground))/0.8]"
                  >
                    {item.a}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
