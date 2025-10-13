// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" }
    ],
  },
  // rien d'autre pour FM, pas d'alias, pas de transpilePackages
};

export default nextConfig;
