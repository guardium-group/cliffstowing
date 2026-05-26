import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";
import { services } from "@/lib/services";
import { serviceAreas } from "@/lib/service-areas";
import { serviceLocations } from "@/lib/service-locations";
import { siteConfig } from "@/lib/site";

const STATIC_DATES: Record<string, string> = {
  "":               "2026-05-26",
  "/services":      "2026-05-20",
  "/service-areas": "2026-05-20",
  "/blog":          "2026-05-26",
  "/about":         "2026-05-20",
  "/contact":       "2026-05-20",
  "/privacy-policy":"2026-05-01",
  "/terms":         "2026-05-01",
  "/cookies":       "2026-05-01",
};

const CONTENT_DATE = new Date("2026-05-20");

const routes = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/services", changeFrequency: "monthly", priority: 0.9 },
  { path: "/service-areas", changeFrequency: "monthly", priority: 0.85 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.8 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.9 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
  { path: "/cookies", changeFrequency: "yearly", priority: 0.3 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = routes.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified: new Date(STATIC_DATES[route.path]),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${siteConfig.url}/services/${s.slug}`,
    lastModified: CONTENT_DATE,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const areaRoutes = serviceAreas.map((a) => ({
    url: `${siteConfig.url}/service-areas/${a.slug}`,
    lastModified: CONTENT_DATE,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const comboRoutes = serviceLocations.map((loc) => ({
    url: `${siteConfig.url}/service-areas/${loc.citySlug}/${loc.serviceSlug}`,
    lastModified: CONTENT_DATE,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
    images: [`${siteConfig.url}${post.image}`],
  }));

  return [...staticRoutes, ...serviceRoutes, ...areaRoutes, ...comboRoutes, ...blogRoutes];
}
