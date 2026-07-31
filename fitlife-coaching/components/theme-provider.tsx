'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { ThemeProviderProps } from 'next-themes';

/**
 * Le site n'existe qu'en thème sombre : la charte est bâtie sur un fond
 * zinc-950, et un rendu clair casserait tous les contrastes.
 *
 * `forcedTheme` suffit à l'imposer. Il rend inopérants `defaultTheme`,
 * `enableSystem` et le stockage local, qui ne sont donc pas déclarés : les
 * exposer laisserait croire qu'on peut basculer le thème depuis l'extérieur.
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      forcedTheme="dark"
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
