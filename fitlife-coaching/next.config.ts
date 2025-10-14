// next.config.ts
import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  poweredByHeader: false,

  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 640, 768, 1024, 1280, 1536],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },

  // Vu que tu as deux lockfiles (merci le chaos), on force le root sur CE projet.
  // Si tu supprimes le package-lock.json parent, tu peux enlever cette ligne.
  outputFileTracingRoot: path.resolve(__dirname),

  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|jpeg|png|gif|webp|avif|ico|ttf|otf|woff|woff2)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },

  async redirects() {
    return [
      // www → apex sur Vercel preview/prod
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.fitlife-coaching.vercel.app" }],
        destination: "https://fitlife-coaching.vercel.app/:path*",
        permanent: true,
      },
      // Si tu as le domaine custom, garde celle-ci aussi
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
