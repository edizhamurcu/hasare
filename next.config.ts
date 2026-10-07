import type { NextConfig } from "next";
import path from "path";
import createNextIntlPlugin from "next-intl/plugin";

const emptyPolyfill = path.join(process.cwd(), "src/lib/empty-polyfill.js");

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

/** Nginx olmadan (localhost) Türkçe path'leri dahili /tr'ye yönlendir */
const localeRewrites = [
  { source: "/", destination: "/tr" },
  { source: "/hizmetler", destination: "/tr/hizmetler" },
  { source: "/hizmetler/:path*", destination: "/tr/hizmetler/:path*" },
  { source: "/bolgeler", destination: "/tr/bolgeler" },
  { source: "/bolgeler/:path*", destination: "/tr/bolgeler/:path*" },
  { source: "/blog", destination: "/tr/blog" },
  { source: "/blog/:path*", destination: "/tr/blog/:path*" },
  { source: "/teklif", destination: "/tr/teklif" },
  { source: "/sss", destination: "/tr/sss" },
  { source: "/gizlilik-politikasi", destination: "/tr/gizlilik-politikasi" },
  { source: "/kullanim-kosullari", destination: "/tr/kullanim-kosullari" },
  { source: "/kvkk", destination: "/tr/kvkk" },
];

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin-allow-popups" },
  { key: "Cross-Origin-Resource-Policy", value: "same-site" },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "base-uri 'self'",
      "form-action 'self' https://wa.me",
      "frame-ancestors 'self'",
      "object-src 'none'",
      "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://static.cloudflareinsights.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https:",
      "font-src 'self'",
      "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://region1.google-analytics.com https://www.google.com https://www.googleadservices.com https://googleads.g.doubleclick.net https://cloudflareinsights.com https://static.cloudflareinsights.com",
      "frame-src https://www.googletagmanager.com",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  distDir: process.env.NEXT_BUILD_DIR || ".next",
  experimental: {
    inlineCss: true,
    optimizePackageImports: ["next-intl"],
  },
  webpack: (config, { isServer, webpack }) => {
    if (!isServer) {
      config.plugins.push(
        new webpack.NormalModuleReplacementPlugin(
          /next[\\/]dist[\\/]build[\\/]polyfills[\\/]polyfill-module/,
          emptyPolyfill
        )
      );
    }
    return config;
  },
  images: {
    formats: ["image/avif", "image/webp"],
    /** 3840 gibi dev varyantları engelle — LCP/bant genişliği */
    deviceSizes: [640, 750, 828, 1080, 1200, 1280],
    imageSizes: [32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    /** Yerel SVG img ile sunuluyor; optimizer SVG vektör riskini açmıyoruz */
    dangerouslyAllowSVG: false,
    contentDispositionType: "inline",
  },
  async rewrites() {
    return { beforeFiles: localeRewrites };
  },
  async redirects() {
    return [
      {
        source: "/hizmetler/yilan-kontrolu",
        destination: "/hizmetler",
        permanent: true,
      },
      {
        source: "/tr/hizmetler/yilan-kontrolu",
        destination: "/hizmetler",
        permanent: true,
      },
      {
        source: "/blog/yilan-gorunce-kktc-rehberi",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/hamambocegi-ilaclama-fiyatlari-kktc-2026",
        destination: "/teklif",
        permanent: true,
      },
      {
        source: "/en/blog/hamambocegi-ilaclama-fiyatlari-kktc-2026",
        destination: "/en/teklif",
        permanent: true,
      },
      {
        source: "/ru/blog/hamambocegi-ilaclama-fiyatlari-kktc-2026",
        destination: "/ru/teklif",
        permanent: true,
      },
      {
        source: "/tr/blog/yilan-gorunce-kktc-rehberi",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/en/hizmetler/yilan-kontrolu",
        destination: "/en/hizmetler",
        permanent: true,
      },
      {
        source: "/en/blog/yilan-gorunce-kktc-rehberi",
        destination: "/en/blog",
        permanent: true,
      },
      {
        source: "/ru/hizmetler/yilan-kontrolu",
        destination: "/ru/hizmetler",
        permanent: true,
      },
      {
        source: "/ru/blog/yilan-gorunce-kktc-rehberi",
        destination: "/ru/blog",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        /** Saha videoları — dosya adı değişmeden içerik değişmez (yeni video = yeni ad) */
        source: "/videos/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
