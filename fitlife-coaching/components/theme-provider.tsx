'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { ThemeProviderProps } from 'next-themes';

export function ThemeProvider({
  children,
  attribute = 'class',
  defaultTheme = 'dark', // 🔥 On impose le dark mode par défaut
  enableSystem = false,  // 🔥 On ignore le mode clair/sombre de l'OS du visiteur
  storageKey = 'fitlife-theme',
  disableTransitionOnChange = true,
  ...props
}: ThemeProviderProps & { storageKey?: string; disableTransitionOnChange?: boolean }) {
  return (
    <NextThemesProvider
      attribute={attribute}
      defaultTheme={defaultTheme}
      enableSystem={enableSystem}
      storageKey={storageKey}
      disableTransitionOnChange={disableTransitionOnChange}
      forcedTheme="dark" // 🔥 Le cadenas final : empêche tout basculement accidentel en light mode
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}