import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import { LazyMotion, loadFeatures, m } from "@/components/motion";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background image responsive moderne */}
      <div className="absolute inset-0 -z-10">
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

      {/* Option mobile: version plus légère en CSS si besoin */}
      <style jsx>{`
        @media (max-width: 768px) {
          .custom-small-screen-bg {
            background-image: url('/images/small-background.svg');
            background-size: cover;
            background-position: center;
          }
        }
      `}</style>
      <div className="absolute inset-0 custom-small-screen-bg -z-10" />

      <div className="container relative z-10 mx-auto flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <LazyMotion features={loadFeatures}>
          <m.h1
            className="font-poppins max-w-4xl text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Transformez votre vie avec <span className="text-primary">FitLife Coaching</span>
          </m.h1>

          <m.p
            className="mt-6 max-w-2xl text-xl text-white sm:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Votre partenaire fitness personnel à Paris pour atteindre vos objectifs de santé et de bien-être
          </m.p>

          <m.div
            className="mt-10 flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button size="lg" className="group bg-primary text-lg text-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-primary-dark">
              <a href="#contact" className="flex items-center justify-center">
                Commencez votre voyage
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg text-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-white hover:text-primary"
            >
              En savoir plus
            </Button>
          </m.div>
        </LazyMotion>
      </div>
    </section>
  );
}
