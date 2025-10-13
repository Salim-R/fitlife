'use client';

import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { TextArea } from '@/components/ui/text-area';
import { Send, Check, Loader2 } from 'lucide-react';
import { LazyMotion, loadFeatures, m } from '@/components/motion';

export function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', website: '' }); // website = honeypot
  const [errors, setErrors] = useState<{ [k: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const liveRef = useRef<HTMLParagraphElement>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!formData.name.trim()) e.name = 'Le nom est requis.';
    if (!/\S+@\S+\.\S+/.test(formData.email)) e.email = 'Une adresse e-mail valide est requise.';
    if (!formData.message.trim()) e.message = 'Le message est requis.';
    return e;
  };

  const handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;

    // anti-bot classique
    if (formData.website) return;

    setIsSubmitting(true);

    // TODO: appelle ici ta Server Action (Resend) quand tu veux passer en prod
    await new Promise(r => setTimeout(r, 800));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // confetti en lazy import pour ne pas gonfler le bundle initial
    const { default: confetti } = await import('canvas-confetti');
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });

    liveRef.current?.focus();
  };

  return (
    <section id="contact" className="bg-gradient-to-b from-orange-100 to-white py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <LazyMotion features={loadFeatures}>
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-orange-600 sm:text-5xl md:text-6xl">Contactez-nous</h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Prêt à transformer votre vie ? Laissez-nous un message et commencez votre voyage.
            </p>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mx-auto max-w-md rounded-lg bg-white p-8 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* honeypot */}
              <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" onChange={onChange} />

              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
                  Nom
                </label>
                <Input
                  id="name"
                  name="name"
                  required
                  onChange={onChange}
                  value={formData.name}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  className={`w-full border-gray-600 transition-all duration-300 focus:ring-2 focus:ring-orange-500 ${errors.name ? 'border-red-500' : ''}`}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-sm text-red-500">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  onChange={onChange}
                  value={formData.email}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className={`w-full border-gray-600 transition-all duration-300 focus:ring-2 focus:ring-orange-500 ${errors.email ? 'border-red-500' : ''}`}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-sm text-red-500">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">
                  Message
                </label>
                <TextArea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  onChange={onChange}
                  value={formData.message}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  className={`h-32 w-full resize-none transition-all duration-300 focus:ring-2 focus:ring-orange-500 ${
                    errors.message ? 'border-red-500' : 'border border-gray-600'
                  }`}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1 text-sm text-red-500">
                    {errors.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full transform bg-orange-500 text-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-orange-600 hover:shadow-lg"
                disabled={isSubmitting || isSubmitted}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Envoi en cours…
                  </span>
                ) : isSubmitted ? (
                  <span className="flex items-center justify-center">
                    <Check className="mr-2" />
                    Message envoyé !
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <Send className="mr-2" />
                    Envoyer
                  </span>
                )}
              </Button>

              {/* zone live pour lecteur d’écran */}
              <p ref={liveRef} tabIndex={-1} aria-live="polite" className="sr-only">
                {isSubmitted ? 'Votre message a été envoyé' : ''}
              </p>
            </form>
          </m.div>
        </LazyMotion>
      </div>
    </section>
  );
}
