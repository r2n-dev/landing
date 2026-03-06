import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
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
