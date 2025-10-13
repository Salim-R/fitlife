'use client';

import { CheckCircle } from 'lucide-react';
import { LazyMotion, loadFeatures, m } from '@/components/motion';

export function WhyChooseUs() {
  const reasons = [
    'Coachs certifiés et expérimentés',
    'Programmes personnalisés',
    'Suivi nutritionnel inclus',
    'Équipement de pointe',
    'Communauté motivante',
    'Résultats garantis',
  ];

  return (
    <section className="bg-secondary py-24">
      <div className="container">
        <h2 className="text-center text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
          Pourquoi choisir FitLife ?
        </h2>

        <LazyMotion features={loadFeatures}>
          <m.ul
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            {reasons.map(reason => (
              <li key={reason} className="flex items-start space-x-4">
                <CheckCircle className="mt-1 h-7 w-7 flex-shrink-0 text-primary" aria-hidden="true" />
                <span className="text-lg font-medium">{reason}</span>
              </li>
            ))}
          </m.ul>
        </LazyMotion>
      </div>
    </section>
  );
}
