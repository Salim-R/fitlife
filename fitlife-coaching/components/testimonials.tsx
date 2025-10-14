'use client';

import { useId, useState, useCallback } from 'react';
import { useReducedMotion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { LazyMotion, loadFeatures, m, AnimatePresence } from '@/components/motion';

const TESTIMONIALS = [
  { quote: "Grâce à FitLife Coaching, j'ai complètement transformé mon corps et ma santé. Je me sens plus énergique que jamais !", author: 'Marie D.', role: 'Cliente depuis 2 ans' },
  { quote: "Les coachs de FitLife sont incroyables. Leur soutien et leur expertise m'ont aidé à dépasser mes limites.", author: 'Thomas L.', role: 'Client depuis 1 an' },
  { quote: "J'adore les cours collectifs ! L'ambiance est géniale et les résultats sont au rendez-vous.", author: 'Sophie M.', role: 'Cliente depuis 6 mois' },
  { quote: 'FitLife a changé ma vie. J’ai perdu 20 kilos et gagné en confiance. Je recommande à 100% !', author: 'Luc P.', role: 'Client depuis 3 ans' },
] as const;

export function Testimonials() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const uid = useId();

  const next = useCallback(() => setIndex(i => (i + 1) % TESTIMONIALS.length), []);
  const prev = useCallback(() => setIndex(i => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length), []);
  const goTo = useCallback((i: number) => setIndex(i), []);

  const t = TESTIMONIALS[index];

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-accent py-24 text-accent-foreground"
      aria-labelledby={`${uid}-title`}
    >
     <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        <h2 id={`${uid}-title`} className="text-center text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Ce que disent nos clients
        </h2>

        <LazyMotion features={loadFeatures}>
          <div
            className="relative mx-auto max-w-3xl"
            role="group"
            aria-roledescription="carousel"
            aria-label="Témoignages clients"
            aria-live="polite"
            onKeyDown={(e) => {
              if (e.key === 'ArrowRight') next();
              if (e.key === 'ArrowLeft') prev();
            }}
            tabIndex={0}
          >
            <AnimatePresence mode="wait" initial={false}>
              <m.div
                key={index}
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 50 }}
                animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, y: -50 }}
                transition={{ duration: 0.45 }}
              >
                <Card className="bg-white/10 backdrop-blur">
                  <CardContent className="p-6 text-center">
                    <Quote className="mx-auto mb-4 h-12 w-12 text-primary" aria-hidden="true" />
                    {/* Hauteur mini pour stabiliser le layout pendant les transitions */}
                    <div className="mx-auto min-h-[7.5rem]">
                      <p className="mb-4 text-xl italic">“{t.quote}”</p>
                    </div>
                    <p className="font-semibold">{t.author}</p>
                    <p className="text-sm text-accent-foreground/80">{t.role}</p>
                  </CardContent>
                </Card>
              </m.div>
            </AnimatePresence>

            {/* Contrôles */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <Button variant="outline" size="icon" onClick={prev} aria-label="Témoignage précédent">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={next} aria-label="Témoignage suivant">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Indicateurs */}
            <div className="mt-4 flex justify-center gap-2">
              {TESTIMONIALS.map((_, i) => {
                const active = i === index;
                return (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Aller au témoignage ${i + 1}`}
                    aria-current={active ? 'true' : undefined}
                    className={`h-2.5 w-2.5 rounded-full transition ${
                      active ? 'bg-primary' : 'bg-accent-foreground/30 hover:bg-accent-foreground/60'
                    }`}
                  />
                );
              })}
            </div>
          </div>
        </LazyMotion>
      </div>
    </section>
  );
}
