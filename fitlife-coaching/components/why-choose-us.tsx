'use client';

import { useId } from 'react';
import { Crosshair, Activity, Cpu, ShieldAlert, Lock, TrendingUp } from 'lucide-react';
import { LazyMotion, loadFeatures, m } from '@/components/motion';

// 🔥 Copywriting "High Ticket" : On remplace les banalités par des standards militaires/scientifiques
const STANDARDS = [
  {
    title: 'Périodisation Millimétrée',
    description: 'Aucun programme générique. Vos cycles de force et d\'hypertrophie sont calculés selon vos leviers biomécaniques.',
    icon: Crosshair,
  },
  {
    title: 'Nutrition Data-Driven',
    description: 'Ajustement hebdomadaire de vos macros basé sur les variations de votre poids de corps et votre feedback métabolique.',
    icon: Cpu,
  },
  {
    title: 'Accountability Implacable',
    description: 'Check-ins stricts, analyse vidéo de vos exécutions. Vous ne serez jamais livré à vous-même, aucune excuse n\'est tolérée.',
    icon: ShieldAlert,
  },
  {
    title: 'Monitoring Actif',
    description: 'Suivi de la fatigue centrale, de la qualité du sommeil et du stress pour éviter le surentraînement et garantir la progression.',
    icon: Activity,
  },
  {
    title: 'Exclusivité & Focus',
    description: 'Nous limitons volontairement le nombre d\'athlètes suivis simultanément pour garantir une disponibilité et une réactivité absolues.',
    icon: Lock,
  },
  {
    title: 'Culture du Résultat',
    description: 'Nous ne vendons pas des séances ou de la motivation temporelle. Nous concevons l\'architecture de votre recomposition corporelle.',
    icon: TrendingUp,
  },
] as const;

export function WhyChooseUs() {
  const uid = useId();

  return (
    // 🔥 Toujours le fond zinc-950 pour souder toutes les sections ensemble
    <section className="relative overflow-hidden bg-zinc-950 py-24 sm:py-32 border-t border-zinc-900" aria-labelledby={`${uid}-title`}>
      
      {/* Background décoratif très subtil (grille) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 inline-flex items-center gap-2">
            <div className="h-px w-8 bg-lime-400" />
            <span className="text-lime-400 font-bold tracking-[0.2em] uppercase text-xs">Notre Philosophie</span>
            <div className="h-px w-8 bg-lime-400" />
          </div>

          <h2 id={`${uid}-title`} className="text-4xl font-heading font-black uppercase tracking-tighter text-white sm:text-5xl md:text-6xl">
            Le Standard <span className="text-zinc-600">D'Excellence</span>
          </h2>
        </div>

        <LazyMotion features={loadFeatures}>
          <m.div
            className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            role="list"
          >
            {STANDARDS.map((standard, i) => (
              <m.div 
                key={standard.title} 
                className="group relative flex flex-col gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                {/* Ligne d'accentuation à gauche, typique du design tech/cyber */}
                <div className="absolute -left-4 top-0 h-full w-[2px] bg-zinc-800 transition-colors duration-300 group-hover:bg-lime-400" />
                
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center bg-zinc-900 border border-zinc-800 text-lime-400 transition-transform duration-300 group-hover:scale-110 group-hover:border-lime-400/30">
                    <standard.icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold uppercase tracking-tight text-white group-hover:text-lime-400 transition-colors duration-300">
                    {standard.title}
                  </h3>
                </div>
                
                <p className="text-sm font-medium leading-relaxed text-zinc-400">
                  {standard.description}
                </p>
              </m.div>
            ))}
          </m.div>
        </LazyMotion>
      </div>
    </section>
  );
}