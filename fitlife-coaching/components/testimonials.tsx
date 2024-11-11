"use client"

import { useState } from "react"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Testimonials() {
  const testimonials = [
    {
      quote: "Grâce à FitLife Coaching, j'ai complètement transformé mon corps et ma santé. Je me sens plus énergique que jamais !",
      author: "Marie D.",
      role: "Cliente depuis 2 ans"
    },
    {
      quote: "Les coachs de FitLife sont incroyables. Leur soutien et leur expertise m'ont aidé à dépasser mes limites.",
      author: "Thomas L.",
      role: "Client depuis 1 an"
    },
    {
      quote: "J'adore les cours collectifs ! L'ambiance est géniale et les résultats sont au rendez-vous.",
      author: "Sophie M.",
      role: "Cliente depuis 6 mois"
    },
    {
      quote: "FitLife a changé ma vie. J'ai perdu 20 kilos et gagné en confiance. Je recommande à 100% !",
      author: "Luc P.",
      role: "Client depuis 3 ans"
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="relative overflow-hidden bg-accent py-24 text-accent-foreground">
      <div className="container relative z-10 space-y-12">
        <h2 className="text-center text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Ce que disent nos clients
        </h2>
        <div className="relative mx-auto max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-white/10 backdrop-blur">
                <CardContent className="p-6 text-center">
                  <Quote className="mx-auto mb-4 h-12 w-12 text-primary" />
                  <p className="mb-4 text-xl italic">{testimonials[currentIndex].quote}</p>
                  <p className="font-semibold">{testimonials[currentIndex].author}</p>
                  <p className="text-sm text-accent-foreground/80">{testimonials[currentIndex].role}</p>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
          <div className="mt-8 flex justify-center space-x-4">
            <Button variant="outline" size="icon" onClick={prevTestimonial}>
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Témoignage précédent</span>
            </Button>
            <Button variant="outline" size="icon" onClick={nextTestimonial}>
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Témoignage suivant</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}