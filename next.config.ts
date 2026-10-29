import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 90 for the app screenshots, whose small text blurs at the default 75.
  images: { qualities: [75, 90] },
};

export default nextConfig;
