import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cliff's Towing | Edmonton's Trusted Towing Service",
  description:
    "24/7 towing and roadside assistance in Edmonton and surrounding areas. Light, medium, and heavy duty towing, flatbed, and accident recovery.",
  keywords: [
    "towing Edmonton",
    "roadside assistance Edmonton",
    "flatbed towing",
    "24/7 towing",
    "Cliff's Towing",
    "Edmonton tow truck",
    "accident towing",
  ],
  authors: [{ name: "Cliff's Towing" }],
  openGraph: {
    title: "Cliff's Towing | 24/7 Edmonton Towing",
    description: "Fast, reliable towing in Edmonton. Available 24/7.",
    url: "https://cliffstowing.ca",
    siteName: "Cliff's Towing",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
