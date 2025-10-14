'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { LazyMotion, loadFeatures, m } from '@/components/motion';

const SERVICES = [
  {
    title: 'Entraînement personnel',
    description:
      'Des séances sur mesure pour atteindre vos objectifs spécifiques. Nos coachs experts vous guideront à chaque étape de votre parcours fitness.',
    image: '/images/1.jpg',
    icon: '🏋️‍♂️',
    href: '/#contact',
  },
  {
    title: 'Conseils en nutrition',
    description:
      'Des plans alimentaires adaptés à votre mode de vie et vos objectifs. Apprenez à manger sainement sans sacrifier le goût.',
    image: '/images/2.jpeg',
    icon: '🥗',
    href: '/#contact',
  },
  {
    title: 'Cours collectifs',
    description:
      'Rejoignez nos séances de groupe motivantes et dynamiques. Une variété de cours pour tous les niveaux et tous les goûts.',
    image: '/images/3.jpg',
    icon: '👥',
    href: '/#contact',
  },
] as const;

export function Services() {
  return (
    <section id="services" className="bg-gradient-to-b from-background to-secondary/20 py-24" aria-labelledby="services-title">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <LazyMotion features={loadFeatures}>
          <m.h2
            id="services-title"
            className="mb-8 text-center text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Nos Services
          </m.h2>

          <m.p
            className="mx-auto mb-16 max-w-3xl text-center text-xl text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Découvrez notre gamme complète de services conçus pour vous aider à atteindre vos objectifs de fitness et de bien-être.
          </m.p>

          <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" role="list">
            {SERVICES.map((service, index) => (
              <m.li
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Card className="overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <CardHeader className="p-0">
                    {/* Ratio fixe pour tuer le CLS */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                      <Image
                        src={service.image}
                        alt={`${service.title} — FitLife Coaching`}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                        sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                        priority={index === 0}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" aria-hidden="true" />
                      <div className="absolute bottom-4 left-4 text-4xl text-white" aria-hidden="true">
                        {service.icon}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="p-6">
                    <CardTitle className="mb-2 text-2xl font-bold text-primary">{service.title}</CardTitle>
                    <p className="mb-4 text-muted-foreground">{service.description}</p>

                    <Button asChild variant="outline" className="group">
                      <Link href={service.href} aria-label={`En savoir plus sur ${service.title}`}>
                        En savoir plus
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </m.li>
            ))}
          </ul>
        </LazyMotion>
      </div>
    </section>
  );
}
