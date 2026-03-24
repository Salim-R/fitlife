import { Hero } from '@/components/hero';
import { WhyChooseUs } from '@/components/why-choose-us';
import { Services } from '@/components/services';
import { OurTeam } from '@/components/our-team';
import { Results } from '@/components/results';
import { Testimonials } from '@/components/testimonials';
import { FAQ } from '@/components/faq';
import { ContactForm } from '@/components/contact-form';

export default function Home() {
  return (
    // 🔥 Le bg-zinc-950 global sécurise le fait qu'il n'y aura aucun flash blanc entre les sections
    <div className="flex min-h-screen flex-col bg-zinc-950 selection:bg-lime-400 selection:text-black">
      <main id="main" className="flex-1">
        {/* 1. L'Accroche */}
        <Hero />
        
        {/* 2. L'Autorité & La Philosophie */}
        <WhyChooseUs />
        
        {/* 3. L'Exécution technique */}
        <Services />
        
        {/* 4. Les Cerveaux derrière le système */}
        <OurTeam />
        
        {/* 5. La Preuve Mathématique */}
        <Results />
        
        {/* 6. La Preuve Sociale / Statut social */}
        <Testimonials />
        
        {/* 7. La destruction des objections */}
        <FAQ />
        
        {/* 8. L'Action (Filtre d'entrée) */}
        <ContactForm />
      </main>
    </div>
  );
}