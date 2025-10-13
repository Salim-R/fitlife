// components/motion.tsx
'use client';

import dynamic from 'next/dynamic';
import type { FeatureBundle } from 'framer-motion';
import { m } from 'framer-motion';

export const LazyMotion = dynamic(
  () => import('framer-motion').then(mod => mod.LazyMotion),
  { ssr: false }
);

// Optionnel mais utile pour les carrousels
export const AnimatePresence = dynamic(
  () => import('framer-motion').then(mod => mod.AnimatePresence),
  { ssr: false }
);

// Fonction de features (typée)
export const loadFeatures = () =>
  import('framer-motion').then(mod => mod.domAnimation as FeatureBundle);

export { m };
