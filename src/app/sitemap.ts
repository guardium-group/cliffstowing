import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://cliffstowing.ca", changeFrequency: "weekly", priority: 1 },
    { url: "https://cliffstowing.ca/services", changeFrequency: "monthly", priority: 0.9 },
    { url: "https://cliffstowing.ca/about", changeFrequency: "monthly", priority: 0.8 },
    { url: "https://cliffstowing.ca/contact", changeFrequency: "monthly", priority: 0.8 },
  ];
}
