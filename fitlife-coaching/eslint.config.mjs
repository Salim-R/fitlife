import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';

/**
 * Configuration à plat, format imposé depuis ESLint 9.
 *
 * Next 16 a retiré la commande `next lint`, qui lisait encore un .eslintrc :
 * le linter s'appelle désormais directement, et sa configuration vit ici.
 */
const config = [
  {
    ignores: ['.next/**', 'node_modules/**', 'out/**', 'next-env.d.ts'],
  },

  ...nextCoreWebVitals,
  ...nextTypescript,
];

export default config;
