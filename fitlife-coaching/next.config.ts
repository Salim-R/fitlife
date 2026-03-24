import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // 🔥 Sécurité & Performance de base
  poweredByHeader: false,
  reactStrictMode: true,

  // 🔥 Optimisation de l'affichage
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 640, 768, 1024, 1280, 1536],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },

  // Hack de tracing (à nettoyer un jour dans l'architecture de tes dossiers)
  outputFileTracingRoot: path.resolve(__dirname),

  async headers() {
    return [
      {
        // Cache agressif pour les assets
        source: "/:all*(svg|jpg|jpeg|png|gif|webp|avif|ico|ttf|otf|woff|woff2)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        // 🔥 BOUCLIER DE SÉCURITÉ ABSOLU (Applicable à toutes les routes)
        source: "/:path*",
        headers: [
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" }, // Force le HTTPS pendant 2 ans
          { key: "X-Frame-Options", value: "SAMEORIGIN" }, // Bloque le Clickjacking (Iframes)
          { key: "X-Content-Type-Options", value: "nosniff" }, // Bloque le MIME-sniffing
          { key: "Referrer-Policy", value: "origin-when-cross-origin" }, // Protège les données de navigation
        ],
      },
    ];
  },

  async redirects() {
    return [
      // Fallback de redirection (Privilégier la configuration DNS Vercel en production)
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.fitlife-coaching.vercel.app" }],
        destination: "https://fitlife-coaching.vercel.app/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.fitlife-coaching.fr" }],
        destination: "https://fitlife-coaching.fr/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;