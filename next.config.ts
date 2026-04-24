import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "vikrantkulkarni07.github.io" },
    ],
  },
};

export default nextConfig;
