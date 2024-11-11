"use client"

import { Card, CardContent } from "./ui/card"
import { motion, Variants } from "framer-motion"
import { Sparkles, TrendingUp, Users, Calendar, Award } from "lucide-react"

const cardVariants: Variants = {
  offscreen: {
    y: 50,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
}

const iconVariants: Variants = {
  hidden: { scale: 0 },
  visible: { scale: 1, transition: { type: "spring", stiffness: 300, damping: 10 } }
}

export function Results() {
  const stats = [
    { value: "5000", label: "Clients satisfaits", icon: Award, suffix: "+", color: "text-yellow-500" },
    { value: "98", label: "Taux de réussite", icon: TrendingUp, suffix: "%", color: "text-green-500" },
    { value: "25", label: "Coachs experts", icon: Users, suffix: "+", color: "text-blue-500" },
    { value: "10", label: "Années d'expérience", icon: Calendar, suffix: "", color: "text-purple-500" },
  ]

  return (
    <section id="results" className="py-24 bg-gradient-to-b from-orange-100 via-orange-50 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tight text-orange-600 sm:text-5xl md:text-6xl mb-4">
            Nos résultats parlent d'eux-mêmes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez l'impact de notre approche sur la vie de nos clients et la qualité de nos services.
          </p>
        </motion.div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
            >
              <motion.div variants={cardVariants}>
                <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                  <CardContent className="flex flex-col items-center justify-center p-6 relative">
                    <motion.div
                      className={`text-5xl mb-4 ${stat.color}`}
                      variants={iconVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <stat.icon className="w-12 h-12" />
                    </motion.div>
                    <div className="text-5xl font-bold text-gray-800 mb-2 relative">
                      {stat.value}
                      {stat.suffix}
                      <Sparkles className="absolute -top-2 -right-4 text-yellow-400 w-6 h-6 animate-pulse" />
                    </div>
                    <div className="text-xl text-gray-600 text-center font-medium">{stat.label}</div>
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary animate-gradient-x"></div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}