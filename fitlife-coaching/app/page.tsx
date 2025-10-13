'use client';

import { Hero } from '@/components/hero';
import { Services } from '@/components/services';
import { WhyChooseUs } from '@/components/why-choose-us';
import { Results } from '@/components/results';
import { Testimonials } from '@/components/testimonials';
import { FAQ } from '@/components/faq';
import { OurTeam } from '@/components/our-team';
import { ContactForm } from '@/components/contact-form';

// Remplace cet import:
// import { motion } from 'framer-motion';
import { LazyMotion, loadFeatures, m } from '@/components/motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <Hero />
        <LazyMotion features={loadFeatures}>
          <m.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}>
            <Services />
          </m.div>
          <m.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}>
            <WhyChooseUs />
          </m.div>
          <m.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}>
            <Results />
          </m.div>
          <m.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}>
            <Testimonials />
          </m.div>
          <m.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}>
            <FAQ />
          </m.div>
          <m.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}>
            <OurTeam />
          </m.div>
          <m.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}>
            <ContactForm />
          </m.div>
        </LazyMotion>
      </main>
    </div>
  );
}
