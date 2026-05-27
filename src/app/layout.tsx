import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CookieConsent } from "@/components/cookie-consent";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/site";
import { localBusinessJsonLd } from "@/lib/structured-data";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Cliff's Towing | 24/7 Towing in Edmonton",
    template: "%s | Cliff's Towing",
  },
  description: siteConfig.description,
  keywords: [
    "towing Edmonton",
    "roadside assistance Edmonton",
    "heavy duty towing Edmonton",
    "flatbed towing",
    "24/7 towing",
    "Cliff's Towing",
    "Cliffs Towing",
    "Edmonton tow truck",
    "accident towing",
    "equipment transport Edmonton",
  ],
  authors: [{ name: siteConfig.name }],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Cliff's Towing | 24/7 Edmonton Towing, Recovery & Transport",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    locale: "en_CA",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Cliff's Towing heavy recovery truck in Edmonton",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cliff's Towing | 24/7 Towing in Edmonton",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-CA"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="antialiased">
        <JsonLd data={localBusinessJsonLd()} />
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  );
}
