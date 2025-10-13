// components/faq.tsx
'use client';

import { useState } from 'react';

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    { q: "Combien de séances par semaine sont recommandées ?", a: "Le nombre de séances recommandées dépend de vos objectifs et de votre niveau de forme actuel. En général, nous recommandons 2 à 3 séances par semaine pour des résultats optimaux." },
    { q: "Proposez-vous des programmes pour débutants ?", a: "Absolument ! Nous avons des programmes adaptés à tous les niveaux, y compris les débutants. Nos coachs vous guideront pas à pas pour vous assurer une progression en toute sécurité." },
    { q: "Puis-je annuler mon abonnement à tout moment ?", a: "Oui, vous pouvez annuler votre abonnement à tout moment. Nous proposons des options flexibles pour s'adapter à vos besoins." },
    { q: "Quels types de régimes alimentaires proposez-vous ?", a: "Nos nutritionnistes élaborent des plans alimentaires personnalisés en fonction de vos objectifs, préférences et éventuelles restrictions alimentaires. Nous couvrons une large gamme de régimes, du végétarien au cétogène." },
    { q: "Quels types de coaching proposez-vous ?", a: "Nous proposons des coachings personnalisés en fitness, nutrition et bien-être, adaptés à vos objectifs personnels." },
    { q: "Comment réserver une séance d’essai gratuite ?", a: "Vous pouvez réserver une séance d’essai gratuite en remplissant le formulaire de contact ou en nous appelant directement." },
    { q: "Les programmes sont-ils adaptés aux débutants ?", a: "Absolument ! Nos programmes sont conçus pour convenir à tous les niveaux, des débutants aux sportifs confirmés." },
  ];

  return (
    <section id="faq" className="bg-background py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
          Questions fréquemment posées
        </h2>

        <div className="mx-auto mt-12 w-full max-w-3xl divide-y divide-gray-300">
          {faqs.map((item, i) => {
            const open = activeIndex === i;
            const panelId = `faq-panel-${i}`;
            const buttonId = `faq-button-${i}`;
            return (
              <div key={i} className="py-4">
                <button
                  id={buttonId}
                  aria-controls={panelId}
                  aria-expanded={open}
                  onClick={() => setActiveIndex(open ? null : i)}
                  className="flex w-full items-center justify-between text-left text-lg font-semibold text-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <span>{item.q}</span>
                  <span
                    className={`transition-transform duration-300 ${open ? 'rotate-180' : 'rotate-0'}`}
                    aria-hidden="true"
                  >
                    ▼
                  </span>
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!open}
                  className="pt-2 text-gray-600"
                >
                  {item.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
