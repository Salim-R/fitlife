'use client';

import { useId, useState, useCallback } from 'react';
import { useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { LazyMotion, loadFeatures, m, AnimatePresence } from '@/components/motion';

// 🔥 Copywriting "High Ticket" : Fini l'ambiance, on parle de RÉSULTATS concrets et de ROI.
const TESTIMONIALS = [
  { 
    quote: "J'ai perdu 12kg de masse grasse tout en doublant mes max au squat. Le niveau de précision de la programmation est chirurgical. Aucun hasard, que des mathématiques.", 
    author: 'Marc V.', 
    role: 'Directeur Général', 
    stats: '-12kg Masse Grasse | +45% Force'
  },
  { 
    quote: "Ce n'est pas un simple coaching, c'est une refonte totale de mon hygiène de vie. Fini les blessures, fini la fatigue chronique. L'approche biomécanique a tout changé.", 
    author: 'Sophie T.', 
    role: 'Avocate d\'Affaires',
    stats: 'Réhabilitation & Performance'
  },
  { 
    quote: "J'avais stagné pendant 4 ans malgré 5 entraînements par semaine. En 90 jours ici, l'ingénierie nutritionnelle a débloqué mon métabolisme. Les résultats sont violents.", 
    author: 'Julien M.', 
    role: 'Entrepreneur Tech',
    stats: 'Recomposition Corporelle Extrême'
  },
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
      className="relative overflow-hidden bg-zinc-950 py-24 sm:py-32"
      aria-labelledby={`${uid}-title`}
    >
      {/* Ligne de séparation subtile en haut */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 inline-flex items-center gap-2">
            <div className="h-px w-8 bg-lime-400" />
            <span className="text-lime-400 font-bold tracking-[0.2em] uppercase text-xs">Études de Cas</span>
            <div className="h-px w-8 bg-lime-400" />
          </div>

          <h2 id={`${uid}-title`} className="text-4xl font-heading font-black uppercase tracking-tighter text-white sm:text-5xl md:text-6xl">
            Ils ont franchi <span className="text-zinc-600">Le Cap</span>
          </h2>
        </div>

        <LazyMotion features={loadFeatures}>
          <div
            className="relative mx-auto max-w-4xl"
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
                initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                animate={reduce ? { opacity: 1 } : { opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.05, filter: "blur(4px)" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="px-4 sm:px-12"
              >
                {/* 🔥 Carte de témoignage Premium */}
                <article className="relative bg-zinc-900/40 border border-zinc-800 p-8 sm:p-12 text-center transition-all">
                  <Quote className="mx-auto mb-6 h-10 w-10 text-zinc-700" aria-hidden="true" />
                  
                  {/* Les 5 Étoiles Vert Néon */}
                  <div className="flex justify-center gap-1 mb-8 text-lime-400">
                    <Star fill="currentColor" size={20} />
                    <Star fill="currentColor" size={20} />
                    <Star fill="currentColor" size={20} />
                    <Star fill="currentColor" size={20} />
                    <Star fill="currentColor" size={20} />
                  </div>

                  <div className="mx-auto min-h-[8rem] flex items-center justify-center">
                    <p className="text-xl sm:text-2xl font-medium text-white leading-relaxed">
                      "{t.quote}"
                    </p>
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-zinc-800 flex flex-col items-center justify-center gap-2">
                    {/* Le Badge de Résultat */}
                    <span className="inline-block bg-lime-400/10 text-lime-400 px-3 py-1 text-xs font-bold tracking-widest uppercase mb-2">
                      {t.stats}
                    </span>
                    <p className="font-heading font-black text-xl uppercase tracking-tight text-white">{t.author}</p>
                    <p className="text-sm font-bold tracking-widest uppercase text-zinc-500">{t.role}</p>
                  </div>
                </article>
              </m.div>
            </AnimatePresence>

            {/* 🔥 Contrôles Minimalistes et Agressifs */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <button 
                onClick={prev} 
                aria-label="Témoignage précédent"
                className="h-12 w-12 flex items-center justify-center border border-zinc-800 bg-zinc-900 text-zinc-400 transition-all hover:border-lime-400 hover:text-lime-400 hover:bg-zinc-950 focus:outline-none"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              
              {/* Indicateurs carrés (plus tech que les ronds) */}
              <div className="flex justify-center gap-3 px-6">
                {TESTIMONIALS.map((_, i) => {
                  const active = i === index;
                  return (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      aria-label={`Aller au témoignage ${i + 1}`}
                      aria-current={active ? 'true' : undefined}
                      className={`h-1.5 w-8 transition-all duration-300 ${
                        active ? 'bg-lime-400' : 'bg-zinc-800 hover:bg-zinc-600'
                      }`}
                    />
                  );
                })}
              </div>

              <button 
                onClick={next} 
                aria-label="Témoignage suivant"
                className="h-12 w-12 flex items-center justify-center border border-zinc-800 bg-zinc-900 text-zinc-400 transition-all hover:border-lime-400 hover:text-lime-400 hover:bg-zinc-950 focus:outline-none"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </LazyMotion>
      </div>
    </section>
  );
}