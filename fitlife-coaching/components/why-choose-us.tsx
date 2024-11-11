import { CheckCircle } from "lucide-react"

export function WhyChooseUs() {
  const reasons = [
    "Coachs certifiés et expérimentés",
    "Programmes personnalisés",
    "Suivi nutritionnel inclus",
    "Équipement de pointe",
    "Communauté motivante",
    "Résultats garantis",
  ]

  return (
    <section className="bg-secondary py-24">
      <div className="container">
        <h2 className="text-center text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
          Pourquoi choisir FitLife ?
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <div key={index} className="flex items-center space-x-4">
              <CheckCircle className="h-8 w-8 flex-shrink-0 text-primary" />
              <span className="text-xl font-medium">{reason}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}