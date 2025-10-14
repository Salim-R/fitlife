'use client';

import { CheckCircle } from 'lucide-react';
import { LazyMotion, loadFeatures, m } from '@/components/motion';
import { useId } from 'react';

const REASONS = [
  'Coachs certifiés et expérimentés',
  'Programmes personnalisés',
  'Suivi nutritionnel inclus',
  'Équipement de pointe',
  'Communauté motivante',
  'Résultats garantis',
] as const;

export function WhyChooseUs() {
  const uid = useId();

  return (
    <section className="bg-secondary py-24" aria-labelledby={`${uid}-title`}>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id={`${uid}-title`} className="text-center text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
          Pourquoi choisir FitLife ?
        </h2>

        <LazyMotion features={loadFeatures}>
          <m.ul
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            role="list"
          >
            {REASONS.map((reason) => (
              <li key={reason} className="flex items-start gap-4">
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
