import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ⚠️ CRITICAL: Tells Next.js to build a tiny, self-contained node server
  output: "standalone",

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;