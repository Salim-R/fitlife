// components/motion.tsx
'use client';

import dynamic from 'next/dynamic';
import type { FeatureBundle } from 'framer-motion';
import { m } from 'framer-motion';

// LazyMotion côté client uniquement
export const LazyMotion = dynamic(
  () => import('framer-motion').then(mod => mod.LazyMotion),
  { ssr: false }
);

// Optionnel: transitions de montage/démontage
export const AnimatePresence = dynamic(
  () => import('framer-motion').then(mod => mod.AnimatePresence),
  { ssr: false }
);

// Bundle de features minimal
export const loadFeatures = (): Promise<FeatureBundle> =>
  import('framer-motion').then(mod => mod.domAnimation as FeatureBundle);

// réexport pratique
export { m };
