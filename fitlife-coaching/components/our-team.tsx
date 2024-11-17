import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { motion } from "framer-motion"

export function OurTeam() {
  const team = [
    {
      name: "Sophie Martin",
      role: "Coach en chef",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description: "Sophie est spécialisée dans les programmes de remise en forme et de renforcement musculaire."
    },
    {
      name: "Thomas Dubois",
      role: "Nutritionniste",
      image: "/images/thomas.png",
      description: "Expert en nutrition, Thomas crée des plans alimentaires personnalisés adaptés à vos objectifs de santé."
    },
    {
      name: "Emma Lefebvre",
      role: "Coach de yoga",
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      description: "Emma vous accompagne dans des séances de yoga pour améliorer votre souplesse et réduire le stress."
    },
    {
      name: "Lucas Moreau",
      role: "Coach de musculation",
      image: "https://images.unsplash.com/photo-1583468982228-19f19164aee2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1373&q=80",
      description: "Lucas est spécialisé dans les entraînements de haute intensité et de musculation."
    },
  ]

  return (
    <section className="bg-background py-24">
      <div className="container">
        <motion.h2
          className="text-center text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Notre équipe
        </motion.h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-64 w-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-xl font-semibold text-primary">{member.name}</h3>
                    <p className="text-muted-foreground">{member.role}</p>
                    <p className="text-sm text-gray-600 mt-2">{member.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}