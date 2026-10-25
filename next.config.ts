import type { NextConfig } from "next";

// Next.js and next-themes inject inline scripts and styles, so script/style keep 'unsafe-inline'
// until a nonce-based policy is worth the cost of making every page dynamic.
const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://andres-artunduaga.github.io",
  "font-src 'self' data:",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
];

const nextConfig: NextConfig = {
  output: "standalone",
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  // pdfkit (via @react-pdf/renderer) loads its font data dynamically, so the tracer misses it.
  outputFileTracingIncludes: {
    "/resume/[locale]/pdf": ["./node_modules/pdfkit/js/**/*", "./src/assets/fonts/**/*"],
  },
  async rewrites() {
    return [
      { source: "/json-:locale", destination: "/json/:locale" },
      { source: "/resume-:locale.pdf", destination: "/resume/:locale/pdf" },
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
