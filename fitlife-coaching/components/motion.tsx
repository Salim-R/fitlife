'use client';

// Import direct : Framer Motion prend en charge le rendu serveur. Passer par
// `next/dynamic` avec `{ ssr: false }` retirerait le contenu du HTML initial,
// ce qui le rendrait invisible aux moteurs de recherche.
import { LazyMotion, m, AnimatePresence } from 'framer-motion';

// Le moteur d'animation n'est téléchargé qu'au moment où une animation
// démarre. `domAnimation` écarte les fonctions inutiles ici, glisser-déposer
// en tête, et divise le poids du paquet par quatre.
const loadFeatures = () => import('framer-motion').then((res) => res.domAnimation);

export { LazyMotion, m, AnimatePresence, loadFeatures };
