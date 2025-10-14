'use client';

import Image from 'next/image';
import { Card, CardContent } from './ui/card';
import { LazyMotion, loadFeatures, m } from '@/components/motion';

const TEAM = [
  {
    name: 'Sophie Martin',
    role: 'Coach en chef',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    description:
      'Sophie est spécialisée dans les programmes de remise en forme et de renforcement musculaire.',
  },
  {
    name: 'Thomas Dubois',
    role: 'Nutritionniste',
    image: '/images/thomas.png',
    description:
      'Expert en nutrition, Thomas crée des plans alimentaires personnalisés adaptés à vos objectifs de santé.',
  },
  {
    name: 'Emma Lefebvre',
    role: 'Coach de yoga',
    image:
      'https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80',
    description:
      "Emma vous accompagne dans des séances de yoga pour améliorer votre souplesse et réduire le stress.",
  },
  {
    name: 'Lucas Moreau',
    role: 'Coach de musculation',
    image:
      'https://images.unsplash.com/photo-1583468982228-19f19164aee2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1373&q=80',
    description:
      "Lucas est spécialisé dans les entraînements de haute intensité et de musculation.",
  },
] as const;

export function OurTeam() {
  return (
    <section id="our-team" className="bg-background py-24" aria-labelledby="our-team-title">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <LazyMotion features={loadFeatures}>
          <m.h2
            id="our-team-title"
            className="mb-12 text-center text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            Notre équipe
          </m.h2>

          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((member, index) => (
              <m.li
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    {/* Ratio fixe pour éviter le layout shift */}
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src={member.image}
                        alt={`${member.name}, ${member.role} chez FitLife Coaching`}
                        fill
                        className="object-cover"
                        sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
                        // Next/Image lazy par défaut; pas besoin d'en faire trop.
                      />
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="text-xl font-semibold text-primary">{member.name}</h3>
                      <p className="text-muted-foreground">{member.role}</p>
                      <p className="mt-2 text-sm text-foreground/80">{member.description}</p>
                    </div>
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
