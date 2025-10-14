"use client";

import * as React from "react";
import { Card, CardContent } from "./ui/card";
import { LazyMotion, loadFeatures, m } from "@/components/motion";
import type { Variants } from "framer-motion";
import { Sparkles, TrendingUp, Users, Calendar, Award } from "lucide-react";

const cardVariants: Variants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 0.8 }
  }
};

const iconVariants: Variants = {
  hidden: { scale: 0 },
  visible: { scale: 1, transition: { type: "spring", stiffness: 300, damping: 10 } }
};

const STATS = [
  { value: "5000", label: "Clients satisfaits", icon: Award, suffix: "+", color: "text-yellow-500" },
  { value: "98", label: "Taux de réussite", icon: TrendingUp, suffix: "%", color: "text-green-500" },
  { value: "25", label: "Coachs experts", icon: Users, suffix: "+", color: "text-blue-500" },
  { value: "10", label: "Années d'expérience", icon: Calendar, suffix: "", color: "text-purple-500" }
] as const;

export function Results() {
  return (
    <section
      id="results"
      className="bg-gradient-to-b from-orange-100 via-orange-50 to-background py-24"
      aria-labelledby="results-title"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <LazyMotion features={loadFeatures}>
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <h2
              id="results-title"
              className="mb-4 text-4xl font-bold tracking-tight text-orange-600 sm:text-5xl md:text-6xl"
            >
              Nos résultats parlent d&apos;eux-mêmes
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-700">
              Découvrez l&apos;impact de notre approche sur la vie de nos clients et la qualité de nos services.
            </p>
          </m.div>

          <dl className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map(stat => (
              <m.div key={stat.label} initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }}>
                <m.div variants={cardVariants}>
                  <Card className="overflow-hidden bg-white shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
                    <CardContent className="relative flex flex-col items-center justify-center p-6">
                      <m.div
                        className={`mb-3 text-5xl ${stat.color}`}
                        variants={iconVariants}
                        initial="hidden"
                        whileInView="visible"
                      >
                        <stat.icon className="h-12 w-12" aria-hidden="true" />
                      </m.div>

                      <dt className="sr-only">{stat.label}</dt>
                      <dd className="relative mb-1 text-5xl font-extrabold text-gray-900">
                        {stat.value}
                        {stat.suffix}
                        <Sparkles
                          className="pointer-events-none absolute -right-4 -top-2 h-6 w-6 animate-pulse text-yellow-400"
                          aria-hidden="true"
                        />
                      </dd>
                      <dd className="text-center text-lg text-gray-700">{stat.label}</dd>

                      <div
                        className="pointer-events-none absolute left-0 top-0 h-1 w-full animate-gradient-x bg-gradient-to-r from-primary via-secondary to-primary"
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
