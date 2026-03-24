'use client';

// 🔥 On importe directement. Framer Motion GÈRE parfaitement le SSR.
// Ne jamais utiliser next/dynamic avec { ssr: false } pour des wrappers de contenu.
import { LazyMotion, m, AnimatePresence } from 'framer-motion';

// 🔥 Le "Lazy Loading" intelligent : 
// Le code de Framer Motion (qui est lourd) n'est chargé que lorsque l'animation démarre.
// "domAnimation" exclut les features inutiles comme le drag-and-drop, divisant le poids par 4.
const loadFeatures = () => import('framer-motion').then((res) => res.domAnimation);

// On réexporte proprement
export { LazyMotion, m, AnimatePresence, loadFeatures };