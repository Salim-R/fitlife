// components/hero.tsx
'use client';

import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { LazyMotion, m } from "@/components/motion";
import { useReducedMotion } from "framer-motion";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[url('/images/small-background.svg')] bg-cover bg-center md:hidden" />
      <div className="absolute inset-0 -z-10 hidden md:block">
        <Image
          src="/images/background.svg"
          alt="Salle de sport moderne"
          fill
          className="object-cover"
          priority
          fetchPriority="high"
          sizes="100vw"
        />
      </div>

      <div className="container relative z-10 mx-auto flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <LazyMotion features={() => import("framer-motion").then(m => m.domAnimation)}>
          <m.h1
            className="max-w-5xl font-display text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
            initial={reduce ? undefined : { opacity: 0, y: 20 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Transformez votre vie avec <span className="text-primary">FitLife Coaching</span>
          </m.h1>

          <m.p
            className="mt-6 max-w-2xl text-xl text-white/95 sm:text-2xl"
            initial={reduce ? undefined : { opacity: 0, y: 20 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            Votre partenaire fitness personnel à Paris pour atteindre vos objectifs de santé et de bien-être.
          </m.p>

          <m.div
            className="mt-10 flex flex-col gap-4 sm:flex-row"
            initial={reduce ? undefined : { opacity: 0, y: 20 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Button asChild size="lg" className="group text-lg transition-all duration-300 ease-in-out hover:scale-[1.03]">
              <Link href="/#contact" aria-label="Commencer votre voyage">
                Commencez votre voyage
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg border-white/70 bg-white/80 text-primary backdrop-blur-sm hover:bg-white hover:text-primary"
            >
              <Link href="/#services">En savoir plus</Link>
            </Button>
          </m.div>
        </LazyMotion>
      </div>
    </section>
  );
}
