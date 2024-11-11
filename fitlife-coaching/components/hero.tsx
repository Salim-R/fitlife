import { ArrowRight } from "lucide-react"
import { Button } from "./ui/button"
import Image from "next/image"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <Image
        src="/images/background.svg"
        alt="Personne s'entraînant dans une salle de sport moderne"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        className="absolute inset-0 z-0"
      />
      <style jsx>{`
        @media (max-width: 768px) {
          .custom-small-screen-bg {
            background-image: url('/images/small-background.svg');
            background-size: cover;
            background-position: center;
          }
        }
      `}</style>
      <div className="absolute inset-0 custom-small-screen-bg z-0"></div>
      <div className="container relative z-20 mx-auto flex flex-col items-center justify-center min-h-screen text-center px-4">
        <motion.h1 
          className="max-w-4xl text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl font-poppins"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Transformez votre vie avec <span className="text-primary">FitLife Coaching</span>
        </motion.h1>
        <motion.p 
          className="mt-6 max-w-2xl text-xl text-white sm:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Votre partenaire fitness personnel à Paris pour atteindre vos objectifs de santé et de bien-être
        </motion.p>
        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button size="lg" className="text-lg group transition-all duration-300 ease-in-out transform hover:scale-105 bg-primary text-white hover:bg-primary-dark">
            Commencez votre voyage
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="outline" className="text-lg text-white border-white hover:bg-white hover:text-primary transition-all duration-300 ease-in-out transform hover:scale-105">
            En savoir plus
          </Button>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
      </motion.div>
    </section>
  )
}