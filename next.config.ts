import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "andres-artunduaga.github.io",
      },
    ],
  },
};

export default nextConfig;
