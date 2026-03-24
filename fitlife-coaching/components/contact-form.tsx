'use client';

import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { TextArea } from '@/components/ui/text-area';
import { Check, Loader2, ArrowRight } from 'lucide-react';
import { LazyMotion, loadFeatures, m } from '@/components/motion';

export function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', website: '' }); // honeypot
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const liveRef = useRef<HTMLParagraphElement>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!formData.name.trim()) e.name = 'Identité requise.';
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) e.email = 'Email non valide.';
    if (!formData.message.trim()) e.message = 'Veuillez décrire vos objectifs.';
    if (formData.message.length > 2000) e.message = 'Texte trop long.';
    return e;
  };

  const handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (isSubmitting || isSubmitted) return;

    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;

    // anti-bot
    if (formData.website) return;

    setIsSubmitting(true);

    // Simulation d'envoi
    await new Promise(r => setTimeout(r, 800));

    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // 🔥 FINI LES CONFETTIS. On fait un scroll smooth ou on affiche un message sec.
    liveRef.current?.focus();
  };

  return (
    // 🔥 Fond zinc-950 absolu. On garde le prospect dans l'immersion jusqu'au bout.
    <section id="contact" className="bg-zinc-950 py-24 sm:py-32 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-150 h-150 bg-lime-400/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <LazyMotion features={loadFeatures}>
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* Colonne de Gauche (Copywriting de Qualification) */}
            <m.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:w-5/12 flex flex-col justify-center"
            >
              <div className="mb-4 inline-flex items-center gap-2">
                <div className="h-px w-8 bg-lime-400" />
                <span className="text-lime-400 font-bold tracking-[0.2em] uppercase text-xs">Candidature</span>
              </div>

              <h2 className="mb-6 text-4xl font-heading font-black uppercase tracking-tighter text-white sm:text-5xl md:text-6xl">
                Rejoignez le <br /> <span className="text-zinc-600">Protocole</span>
              </h2>
              
              <p className="mb-8 text-lg font-medium leading-relaxed text-zinc-400">
                L&rsquo;entr&eacute;e dans nos programmes est soumise à validation. Détaillez votre situation actuelle, vos antécédents sportifs et votre objectif exact.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 bg-lime-400" />
                  <span className="text-sm font-bold uppercase tracking-widest text-white">Analyse de dossier sous 24h</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 bg-lime-400" />
                  <span className="text-sm font-bold uppercase tracking-widest text-white">Places limitées par trimestre</span>
                </div>
              </div>
            </m.div>

            {/* Colonne de Droite (Le Formulaire) */}
            <m.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="lg:w-7/12"
            >
              <div className="bg-zinc-900/40 border border-zinc-800 p-8 sm:p-10 backdrop-blur-sm">
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  {/* Honeypot */}
                  <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" onChange={onChange} />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-[11px] font-bold uppercase tracking-widest text-zinc-400">Identité Complète</label>
                      <Input
                        id="name"
                        name="name"
                        required
                        onChange={onChange}
                        value={formData.name}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                        className={`w-full rounded-none border-zinc-800 bg-zinc-900/50 text-white placeholder:text-zinc-600 focus:border-lime-400 focus:ring-1 focus:ring-lime-400 transition-all ${errors.name ? 'border-red-500' : ''}`}
                      />
                      {errors.name && <p id="name-error" className="mt-2 text-xs font-bold uppercase text-red-500">{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="mb-2 block text-[11px] font-bold uppercase tracking-widest text-zinc-400">Email de contact</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        onChange={onChange}
                        value={formData.email}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        className={`w-full rounded-none border-zinc-800 bg-zinc-900/50 text-white placeholder:text-zinc-600 focus:border-lime-400 focus:ring-1 focus:ring-lime-400 transition-all ${errors.email ? 'border-red-500' : ''}`}
                      />
                      {errors.email && <p id="email-error" className="mt-2 text-xs font-bold uppercase text-red-500">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-[11px] font-bold uppercase tracking-widest text-zinc-400">Situation actuelle & Objectifs précis</label>
                    <TextArea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      onChange={onChange}
                      value={formData.message}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      className={`w-full resize-none rounded-none border-zinc-800 bg-zinc-900/50 text-white placeholder:text-zinc-600 focus:border-lime-400 focus:ring-1 focus:ring-lime-400 transition-all ${errors.message ? 'border-red-500' : ''}`}
                    />
                    {errors.message && <p id="message-error" className="mt-2 text-xs font-bold uppercase text-red-500">{errors.message}</p>}
                  </div>

                  <Button
                    type="submit"
                    className="w-full group rounded-none bg-lime-400 px-8 py-6 text-sm font-black uppercase tracking-widest text-black transition-all hover:bg-lime-300 hover:shadow-[0_0_20px_rgba(204,255,0,0.2)] disabled:cursor-not-allowed disabled:opacity-50"
                    disabled={isSubmitting || isSubmitted}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <Loader2 className="mr-3 h-5 w-5 animate-spin" />
                        Transmission en cours
                      </span>
                    ) : isSubmitted ? (
                      <span className="flex items-center justify-center">
                        <Check className="mr-3 h-5 w-5" />
                        Dossier Reçu
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        Soumettre ma candidature
                        <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </span>
                    )}
                  </Button>

                  <p ref={liveRef} tabIndex={-1} aria-live="polite" className="sr-only">
                    {isSubmitted ? 'Votre dossier a été transmis avec succès.' : ''}
                  </p>
                </form>
              </div>
            </m.div>

          </div>
        </LazyMotion>
      </div>
    </section>
  );
}