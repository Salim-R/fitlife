import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { motion } from "framer-motion"

export function Services() {
  const services = [
    {
      title: "Entraînement personnel",
      description: "Des séances sur mesure pour atteindre vos objectifs spécifiques. Nos coachs experts vous guideront à chaque étape de votre parcours fitness.",
      image: "/images/1.jpg",
      icon: "🏋️‍♂️"
    },
    {
      title: "Conseils en nutrition",
      description: "Des plans alimentaires adaptés à votre mode de vie et vos objectifs. Apprenez à manger sainement sans sacrifier le goût.",
      image: "/images/2.jpeg",
      icon: "🥗"
    },
    {
      title: "Cours collectifs",
      description: "Rejoignez nos séances de groupe motivantes et dynamiques. Une variété de cours pour tous les niveaux et tous les goûts.",
      image: "/images/3.jpg",
      icon: "👥"
    }
  ]

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-center text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Nos Services
        </motion.h2>
        <motion.p
          className="text-center text-xl text-muted-foreground max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Découvrez notre gamme complète de services conçus pour vous aider à atteindre vos objectifs de fitness et de bien-être.
        </motion.p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader className="p-0">
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white text-4xl">{service.icon}</div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="mb-2 text-2xl font-bold text-primary">{service.title}</CardTitle>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Button variant="outline" className="group">
                    En savoir plus
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}