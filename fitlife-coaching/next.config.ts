import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // L'en-tête X-Powered-By annonce la technologie du serveur : le retirer
  // prive un attaquant d'une information gratuite.
  poweredByHeader: false,
  reactStrictMode: true,

  // Les formats modernes sont servis en priorité, avec repli automatique.
  // Les tailles déclarées bornent ce que l'optimiseur accepte de générer.
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 640, 768, 1024, 1280, 1536],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },

  // Le dépôt contient le client dans un sous-dossier. Sans cette racine
  // explicite, Next remonte trop haut pour tracer les fichiers et embarque
  // des dépendances qui ne le concernent pas.
  outputFileTracingRoot: path.resolve(__dirname),

  async headers() {
    return [
      {
        // Ces fichiers portent une empreinte dans leur nom : leur contenu ne
        // change jamais, ils peuvent donc être gardés un an.
        source: "/:all*(svg|jpg|jpeg|png|gif|webp|avif|ico|ttf|otf|woff|woff2)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        // En-têtes de sécurité appliqués à toutes les routes.
        source: "/:path*",
        headers: [
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "origin-when-cross-origin" },
        ],
      },
    ];
  },

  async redirects() {
    return [
      // Repli applicatif : la redirection du sous-domaine www se règle mieux
      // au niveau DNS, mais celle-ci garantit le comportement si la zone
      // n'est pas encore propagée.
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