import { Hero } from '@/components/hero';
import { Services } from '@/components/services';
import { WhyChooseUs } from '@/components/why-choose-us';
import { Results } from '@/components/results';
import { Testimonials } from '@/components/testimonials';
import { FAQ } from '@/components/faq';
import { OurTeam } from '@/components/our-team';
import { ContactForm } from '@/components/contact-form';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main id="main" className="flex-1">
        <Hero />
        <Services />
        <WhyChooseUs />
        <Results />
        <Testimonials />
        <FAQ />
        <OurTeam />
        <ContactForm />
      </main>
    </div>
  );
}
