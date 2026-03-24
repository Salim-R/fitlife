'use client';

import Image from 'next/image';
import { LazyMotion, loadFeatures, m } from '@/components/motion';

// 🔥 Copywriting "Élite" : On transforme des profils basiques en experts redoutables.
const TEAM = [
  {
    name: 'Sophie Martin',
    role: 'Head of Performance',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    description: "Supervise la programmation globale. Spécialiste en biomécanique et hypertrophie fonctionnelle.",
  },
  {
    name: 'Thomas Dubois',
    role: 'Architecte Nutritionnel',
    image: '/images/thomas.png',
    description: "Ingénierie des macros et timing nutritionnel. Optimise la chimie du corps pour la recomposition.",
  },
  {
    name: 'Emma Lefebvre',
    role: 'Spécialiste Récupération & Mobilité',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80',
    description: "Optimise la longévité articulaire et la régénération nerveuse via des protocoles post-effort stricts.",
  },
  {
    name: 'Lucas Moreau',
    role: 'Expert Force & Puissance',
    image: 'https://images.unsplash.com/photo-1583468982228-19f19164aee2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1373&q=80',
    description: "Spécialisé dans le recrutement des fibres rapides et la surcharge progressive à haute intensité.",
  },
] as const;

export function OurTeam() {
  return (
    // 🔥 Toujours le fond zinc-950 pour la cohérence
    <section id="our-team" className="bg-zinc-950 py-24 sm:py-32 relative overflow-hidden" aria-labelledby="our-team-title">
      
      {/* Glow de fond subtil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[800px] bg-lime-400/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <LazyMotion features={loadFeatures}>
          <div className="flex flex-col items-center text-center mb-16 sm:mb-24">
            <m.div 
              className="mb-4 inline-flex items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="h-px w-8 bg-lime-400" />
              <span className="text-lime-400 font-bold tracking-[0.2em] uppercase text-xs">Le Hub</span>
              <div className="h-px w-8 bg-lime-400" />
            </m.div>

            <m.h2
              id="our-team-title"
              className="text-4xl font-heading font-black uppercase tracking-tighter text-white sm:text-5xl md:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Les Experts de votre <span className="text-zinc-600">Progression</span>
            </m.h2>
          </div>

          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((member, index) => (
              <m.li
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                {/* 🔥 Design Editorial : Sans bordure, focus sur l'image */}
                <div className="relative flex flex-col h-full bg-zinc-900/20 hover:bg-zinc-900/50 transition-colors duration-500 border border-zinc-800/30 hover:border-lime-400/30 overflow-hidden">
                  
                  {/* 🔥 Format Portrait (3/4) avec filtre de colorimétrie */}
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-950">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover grayscale opacity-60 transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                      sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
                    />
                    {/* Dégradé pour rendre le texte lisible */}
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80" />
                    
                    {/* Ligne d'accentuation */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-lime-400 transform -translate-y-full transition-transform duration-500 group-hover:translate-y-0" />
                  </div>

                  {/* Bloc de texte surélevé visuellement (remonte légèrement sur l'image) */}
                  <div className="relative z-10 flex flex-col p-6 -mt-16 sm:-mt-20">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-lime-400 mb-1">
                      {member.role}
                    </span>
                    <h3 className="text-xl font-heading font-black uppercase text-white tracking-tight mb-3">
                      {member.name}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                      {member.description}
                    </p>
                  </div>
                </div>
              </m.li>
            ))}
          </ul>
        </LazyMotion>
      </div>
    </section>
  );
}