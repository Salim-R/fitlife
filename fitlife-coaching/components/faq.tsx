import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function FAQ() {
    const faqs = [
      {
        question: "Combien de séances par semaine sont recommandées ?",
        answer: "Le nombre de séances recommandées dépend de vos objectifs et de votre niveau de forme actuel. En général, nous recommandons 2 à 3 séances par semaine pour des résultats optimaux.",
      },
      {
        question: "Proposez-vous des programmes pour débutants ?",
        answer: "Absolument ! Nous avons des programmes adaptés à tous les niveaux, y compris les débutants. Nos coachs vous guideront pas à pas pour vous assurer une progression en toute sécurité.",
      },
      {
        question: "Puis-je annuler mon abonnement à tout moment ?",
        answer: "Oui, vous pouvez annuler votre abonnement à tout moment. Nous proposons des options flexibles pour s'adapter à vos besoins.",
      },
      {
        question: "Quels types de régimes alimentaires proposez-vous ?",
        answer: "Nos nutritionnistes élaborent des plans alimentaires personnalisés en fonction de vos objectifs, préférences et éventuelles restrictions alimentaires. Nous couvrons une large gamme de régimes, du végétarien au cétogène.",
      },
    ]
  
    return (
      <section className="bg-background py-24">
        <div className="container">
          <h2 className="text-center text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
            Questions fréquentes
          </h2>
          <Accordion type="single" collapsible className="mt-12 w-full max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    )
  }