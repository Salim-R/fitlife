'use client';

import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { LazyMotion, m } from "@/components/motion";
import { useReducedMotion } from "framer-motion";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-zinc-950">
      
      {/* 🔥 Dégradés allégés pour laisser respirer l'image */}
      <div className="absolute inset-0 z-10 bg-linear-to-b from-zinc-950/20 via-zinc-950/50 to-zinc-950 pointer-events-none" />
      <div className="absolute inset-0 z-10 bg-linear-to-r from-zinc-950 via-zinc-950/50 to-transparent pointer-events-none hidden md:block" />

      {/* 🔥 Opacité remontée à 40/50% pour assumer le visuel */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/background.svg"
          alt="Entraînement fitness haute intensité"
          fill
          className="object-cover grayscale opacity-40 mix-blend-luminosity"
          priority
          fetchPriority="high"
          sizes="100vw"
        />
      </div>

      <div className="container relative z-20 mx-auto flex flex-col items-start px-4 sm:px-6 lg:px-8 pt-20">
        <LazyMotion features={() => import("framer-motion").then(m => m.domAnimation)}>
          
          {/* 🔥 Badge mis à jour : Focus Data */}
          <m.div 
            className="mb-6 inline-flex border border-lime-400/20 bg-lime-400/5 px-4 py-1.5"
            initial={reduce ? undefined : { opacity: 0, y: 20 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-bold text-lime-400 tracking-[0.2em] uppercase text-[10px] sm:text-xs">
              Approche validée sur +120 cas réels
            </span>
          </m.div>

          {/* Titre inchangé (Déjà parfait) */}
          <m.h1
            className="max-w-4xl font-heading text-5xl font-black uppercase tracking-tighter text-white sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95]"
            initial={reduce ? undefined : { opacity: 0, y: 20 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Transforme ton <br />
            physique en <span className="text-lime-400">90 jours.</span>
          </m.h1>

          {/* 🔥 Sous-texte mis à jour : Plus tranchant */}
          <m.p
            className="mt-6 max-w-xl text-lg text-zinc-300 sm:text-xl font-medium leading-relaxed"
            initial={reduce ? undefined : { opacity: 0, y: 20 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Un système structuré, piloté par des données, pour des résultats mesurables semaine après semaine.
          </m.p>

          <m.div 
            className="mt-8 flex items-center gap-4"
            initial={reduce ? undefined : { opacity: 0, y: 20 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <div className="flex -space-x-3">
              <div className="h-10 w-10 rounded-full border-2 border-zinc-950 bg-zinc-800" />
              <div className="h-10 w-10 rounded-full border-2 border-zinc-950 bg-zinc-700" />
              <div className="h-10 w-10 rounded-full border-2 border-zinc-950 bg-lime-900" />
            </div>
            <div className="flex flex-col">
              <div className="flex gap-1 text-lime-400">
                <Star fill="currentColor" size={14} />
                <Star fill="currentColor" size={14} />
                <Star fill="currentColor" size={14} />
                <Star fill="currentColor" size={14} />
                <Star fill="currentColor" size={14} />
              </div>
              <span className="text-xs font-bold text-zinc-400 mt-1 uppercase tracking-wider">
                +120 clients transformés
              </span>
            </div>
          </m.div>

          <m.div
            className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            initial={reduce ? undefined : { opacity: 0, y: 20 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* 🔥 CTA mis à jour : Zéro friction */}
            <Link 
              href="/#contact" 
              className="group flex items-center justify-center bg-lime-400 px-8 py-4 text-sm font-black uppercase tracking-widest text-black transition-all hover:bg-lime-300 hover:shadow-[0_0_30px_rgba(204,255,0,0.2)]"
            >
              Commencer ma transformation
              <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link 
              href="/#results" 
              className="flex items-center justify-center border border-zinc-800 bg-zinc-950/50 backdrop-blur-sm px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-white hover:text-black hover:border-white"
            >
              Voir les résultats réels
            </Link>
          </m.div>

        </LazyMotion>
      </div>
    </section>
  );
}