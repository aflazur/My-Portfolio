import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Remote images used in src/data/portfolioData.ts must be listed here.
    // If you use images from another site, add its hostname below.
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};

export default nextConfig;
