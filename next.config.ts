import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // pdfkit (via @react-pdf/renderer) loads its font data dynamically, so the tracer misses it.
  outputFileTracingIncludes: {
    "/resume/[locale]/pdf": ["./node_modules/pdfkit/js/**/*", "./src/assets/fonts/**/*"],
  },
  async rewrites() {
    return [
      { source: "/json-:locale", destination: "/json/:locale" },
      { source: "/resume-:locale.pdf", destination: "/resume/:locale/pdf" },
      { source: "/resume-:locale", destination: "/resume/:locale" },
    ];
  },
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
