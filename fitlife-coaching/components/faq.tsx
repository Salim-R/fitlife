import { useState } from "react";
  
export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    { question: "Combien de séances par semaine sont recommandées ?", answer: "Le nombre de séances recommandées dépend de vos objectifs et de votre niveau de forme actuel. En général, nous recommandons 2 à 3 séances par semaine pour des résultats optimaux." },
    { question: "Proposez-vous des programmes pour débutants ?", answer: "Absolument ! Nous avons des programmes adaptés à tous les niveaux, y compris les débutants. Nos coachs vous guideront pas à pas pour vous assurer une progression en toute sécurité." },
    { question: "Puis-je annuler mon abonnement à tout moment ?", answer: "Oui, vous pouvez annuler votre abonnement à tout moment. Nous proposons des options flexibles pour s'adapter à vos besoins." },
    { question: "Quels types de régimes alimentaires proposez-vous ?", answer: "Nos nutritionnistes élaborent des plans alimentaires personnalisés en fonction de vos objectifs, préférences et éventuelles restrictions alimentaires. Nous couvrons une large gamme de régimes, du végétarien au cétogène." },
    { question: 'Quels types de coaching proposez-vous ?', answer: 'Nous proposons des coachings personnalisés en fitness, nutrition et bien-être, adaptés à vos objectifs personnels.' },
    { question: 'Comment réserver une séance d’essai gratuite ?', answer: 'Vous pouvez réserver une séance d’essai gratuite en remplissant le formulaire de contact ou en nous appelant directement.' },
    { question: 'Les programmes sont-ils adaptés aux débutants ?', answer: 'Absolument ! Nos programmes sont conçus pour convenir à tous les niveaux, des débutants aux sportifs confirmés.' },
  ];

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
          Questions fréquemment posées
        </h2>
        <div className="mt-12 w-full max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 border-b border-gray-300 pb-4 cursor-pointer">
              <div onClick={() => toggleFAQ(index)} className="flex justify-between items-center text-gray-800 font-semibold text-lg">
                <span>{faq.question}</span>
                <span className={`transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : 'rotate-0'}`}>
                  ▼
                </span>
              </div>
              {activeIndex === index && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}