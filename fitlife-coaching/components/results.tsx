"use client";

import * as React from "react";
import { Card, CardContent } from "./ui/card";
import { LazyMotion, loadFeatures, m } from "@/components/motion";
import type { Variants } from "framer-motion";
import { Target, TrendingUp, Activity, ShieldCheck } from "lucide-react";

const cardVariants: Variants = {
  offscreen: { y: 30, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0, duration: 0.8 }
  }
};

const iconVariants: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 20 } }
};

// 🔥 Des chiffres réalistes pour du "High Ticket" (Haut de gamme)
const STATS = [
  { value: "120", label: "Transformations Validées", icon: ShieldCheck, suffix: "+" },
  { value: "98", label: "Objectifs Atteints", icon: Target, suffix: "%" },
  { value: "3", label: "Mois d'Engagement Min.", icon: TrendingUp, suffix: "" },
  { value: "24/7", label: "Monitoring Actif", icon: Activity, suffix: "" }
] as const;

export function Results() {
  return (
    <section
      id="results"
      // 🔥 Fond très sombre pour contraster subtilement avec le zinc-950 du Hero
      className="bg-zinc-950 border-t border-zinc-900 py-24 sm:py-32 relative overflow-hidden"
      aria-labelledby="results-title"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-zinc-900/40 via-zinc-950 to-zinc-950 pointer-events-none" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <LazyMotion features={loadFeatures}>
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center sm:mb-24 flex flex-col items-center"
          >
            <div className="mb-4 inline-flex items-center gap-2">
              <div className="h-px w-8 bg-lime-400" />
              <span className="text-lime-400 font-bold tracking-[0.2em] uppercase text-xs">La Preuve</span>
              <div className="h-px w-8 bg-lime-400" />
            </div>

            <h2
              id="results-title"
              className="text-4xl font-heading font-black uppercase tracking-tighter text-white sm:text-5xl md:text-6xl"
            >
              Les Chiffres Ne <span className="text-zinc-600">Mentent Pas</span>
            </h2>
            <p className="mt-6 mx-auto max-w-2xl text-lg text-zinc-400 font-medium">
              Une méthodologie prouvée, testée et affinée. Voici la réalité mathématique derrière les transformations de mes athlètes.
            </p>
          </m.div>

          <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((stat, index) => (
              <m.div 
                key={stat.label} 
                initial="offscreen" 
                whileInView="onscreen" 
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
              >
                <m.div variants={cardVariants} className="h-full">
                  {/* 🔥 Cartes ultra-clean, sombres, sans ombres cheap */}
                  <Card className="h-full border-none bg-zinc-900/40 ring-1 ring-white/5 transition-all duration-300 hover:bg-zinc-900/80 hover:ring-lime-400/30">
                    <CardContent className="relative flex flex-col items-center justify-center p-8 sm:p-10 text-center">
                      
                      <m.div
                        className="mb-6 text-lime-400"
                        variants={iconVariants}
                        initial="hidden"
                        whileInView="visible"
                      >
                        <stat.icon className="h-10 w-10 opacity-80" strokeWidth={1.5} aria-hidden="true" />
                      </m.div>

                      <dt className="sr-only">{stat.label}</dt>
                      
                      {/* Typographie des nombres ultra massive */}
                      <dd className="relative mb-2 font-heading text-5xl sm:text-6xl font-black tracking-tighter text-white">
                        {stat.value}
                        <span className="text-3xl text-lime-400">{stat.suffix}</span>
                      </dd>
                      
                      <dd className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                        {stat.label}
                      </dd>

                      {/* Accent visuel Lime en bas de carte */}
                      <div
                        className="pointer-events-none absolute bottom-0 left-0 h-0.5 w-full bg-linear-to-r from-transparent via-lime-400/20 to-transparent"
                        aria-hidden="true"
                      />
                    </CardContent>
                  </Card>
                </m.div>
              </m.div>
            ))}
          </dl>
        </LazyMotion>
      </div>
    </section>
  );
}