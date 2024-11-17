"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { TextArea } from "@/components/ui/text-area"
import { motion } from "framer-motion"
import { useState } from "react"
import { Send, Check, Loader2 } from "lucide-react"
import confetti from 'canvas-confetti'

export function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name) newErrors.name = 'Le nom est requis.';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Une adresse e-mail valide est requise.';
    if (!formData.message) newErrors.message = 'Le message est requis.';
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  return (
    <section id="contact" className="bg-gradient-to-b from-orange-100 to-white py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold tracking-tight text-orange-600 sm:text-5xl md:text-6xl mb-4">
            Contactez-nous
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Prêt à transformer votre vie ? Laissez-nous un message et commencez votre voyage vers une meilleure version de vous-même.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white shadow-2xl rounded-lg p-8 max-w-md mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nom
              </label>
              <Input 
                id="name" 
                name="name" 
                required 
                className={`w-full transition-all duration-300 focus:ring-2 focus:ring-orange-500 border-gray-600 ${errors.name ? 'border-red-500' : ''}`}
                onChange={handleInputChange}
                value={formData.name}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                required 
                className={`w-full transition-all duration-300 focus:ring-2 focus:ring-orange-500 border-gray-600 ${errors.email ? 'border-red-500' : ''}`}
                onChange={handleInputChange}
                value={formData.email}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <TextArea 
                id="message" 
                name="message" 
                required 
                className={`w-full h-32 resize-none transition-all duration-300 focus:ring-2 focus:ring-orange-500 ${errors.message ? 'border-red-500' : 'border border-gray-600'}`}
                onChange={handleInputChange}
                value={formData.message}
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>
            <Button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
              disabled={isSubmitting || isSubmitted}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Envoi en cours...
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
          </form>
        </motion.div>
      </div>
    </section>
  )
}