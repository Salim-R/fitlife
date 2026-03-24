'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Dumbbell, Activity, Target } from 'lucide-react';
import { LazyMotion, loadFeatures, m } from '@/components/motion';

// 🔥 Copywriting 100% "Élite Digital" - Fini les cours collectifs
const EXPERTISES = [
  {
    title: 'Programmation Sur-Mesure',
    description:
      'Pas de copier-coller. Des cycles d\'entraînement évolutifs basés sur votre biomécanique, vos leviers et vos objectifs de force ou d\'hypertrophie.',
    image: '/images/1.jpg',
    Icon: Dumbbell,
    href: '/#contact',
  },
  {
    title: 'Ingénierie Nutritionnelle',
    description:
      'Optimisation des macros, timing nutritionnel et supplémentation. Vous mangez pour performer et recomposer votre physique, sans privation absurde.',
    image: '/images/2.jpeg',
    Icon: Target,
    href: '/#contact',
  },
  {
    title: 'Suivi & Analyse Biométrique',
    description:
      'Check-in hebdomadaire, analyse vidéo de vos exécutions et réajustement constant des charges. Vous n\'êtes jamais livré à vous-même.',
    image: '/images/3.jpg',
    Icon: Activity,
    href: '/#contact',
  },
] as const;

export function Services() {
  return (
    // 🔥 Fond noir absolu pour la continuité
    <section id="services" className="bg-zinc-950 py-24 sm:py-32 relative overflow-hidden" aria-labelledby="services-title">
      
      {/* Ligne de séparation subtile en haut */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <LazyMotion features={loadFeatures}>
          <div className="flex flex-col items-center text-center mb-16 sm:mb-24">
            <m.div 
              className="mb-4 inline-flex items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="h-px w-8 bg-lime-400" />
              <span className="text-lime-400 font-bold tracking-[0.2em] uppercase text-xs">Nos Protocoles</span>
              <div className="h-px w-8 bg-lime-400" />
            </m.div>

            {/* 🔥 Typographie agressive */}
            <m.h2
              id="services-title"
              className="text-4xl font-heading font-black uppercase tracking-tighter text-white sm:text-5xl md:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              3 Piliers de <span className="text-zinc-600">Transformation</span>
            </m.h2>

            <m.p
              className="mt-6 max-w-2xl text-lg text-zinc-400 font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Chaque aspect de votre progression est monitoré, calculé et optimisé. Pas de place pour l&rsquo;improvisation ou le hasard.
            </m.p>
          </div>

          <ul className="grid gap-6 md:grid-cols-3" role="list">
            {EXPERTISES.map((service, index) => (
              <m.li
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group h-full"
              >
                {/* 🔥 Carte Premium : Sombre, bordure subtile, hover au néon */}
                <article className="relative flex flex-col h-full bg-zinc-900/50 border border-zinc-800/50 overflow-hidden transition-all duration-500 hover:border-lime-400/50 hover:bg-zinc-900 hover:shadow-[0_0_40px_rgba(204,255,0,0.05)]">
                  
                  {/* Image Header avec effet de révélation des couleurs */}
                  <div className="relative aspect-16/10 w-full overflow-hidden bg-zinc-950">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover grayscale opacity-50 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-80 group-hover:scale-105"
                      sizes="(max-width:768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
                    
                    {/* Icône Vectorielle Premium */}
                    <div className="absolute bottom-5 left-6 p-3 bg-zinc-950/80 backdrop-blur-md border border-zinc-800 text-lime-400 transition-transform duration-500 group-hover:-translate-y-2">
                      <service.Icon size={24} strokeWidth={2.5} />
                    </div>
                  </div>

                  {/* Contenu de la carte */}
                  <div className="flex flex-col flex-1 p-6 sm:p-8">
                    <h3 className="mb-3 text-xl font-black uppercase tracking-tight text-white group-hover:text-lime-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="mb-8 text-sm text-zinc-400 leading-relaxed flex-1">
                      {service.description}
                    </p>

                    {/* CTA Discret mais percutant */}
                    <Link 
                      href={service.href} 
                      className="mt-auto inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-300 transition-all group-hover:text-lime-400"
                    >
                      En savoir plus
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                  
                  {/* Ligne néon décorative en bas qui s'étend au hover */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-lime-400 transition-all duration-500 group-hover:w-full" />
                </article>
              </m.li>
            ))}
          </ul>
        </LazyMotion>
      </div>
    </section>
  );
}