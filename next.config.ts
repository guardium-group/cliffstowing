import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

// Hosts the Google tag (GA4 + Google Ads, incl. Consent Mode pings) sends to or loads from.
// Per Google's CSP guide for the Google tag; bare analytics.google.com isn't covered by *.analytics.google.com.
const GOOGLE_TAG_SCRIPT = "https://www.googletagmanager.com https://googleads.g.doubleclick.net https://www.googleadservices.com https://www.google.com https://pagead2.googlesyndication.com";
const GOOGLE_TAG_DATA = "https://*.google-analytics.com https://analytics.google.com https://*.analytics.google.com https://*.googletagmanager.com https://*.doubleclick.net https://pagead2.googlesyndication.com https://www.googleadservices.com https://www.google.com https://google.com https://www.google.ca";

const securityHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(self)" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} https://challenges.cloudflare.com https://static.cloudflareinsights.com ${GOOGLE_TAG_SCRIPT} https://connect.facebook.net`,
      "style-src 'self' 'unsafe-inline'",
      `img-src 'self' data: blob: https://images.unsplash.com https://picsum.photos https://*.basemaps.cartocdn.com https://*.tile.openstreetmap.org ${GOOGLE_TAG_DATA} https://www.facebook.com`,
      "font-src 'self' data:",
      "frame-src https://challenges.cloudflare.com https://www.google.com https://maps.google.com https://embed.jasperplayer.com https://td.doubleclick.net https://www.googletagmanager.com",
      `connect-src 'self' https://challenges.cloudflare.com https://cloudflareinsights.com https://api.web3forms.com ${GOOGLE_TAG_DATA} https://www.facebook.com https://connect.facebook.net`,
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "picsum.photos" },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
