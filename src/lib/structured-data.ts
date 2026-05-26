import { siteConfig } from "@/lib/site";
import type { BlogPost } from "@/lib/blog";
import type { ServiceData } from "@/lib/services";

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "AutomotiveBusiness"],
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    telephone: "+17804511555",
    email: siteConfig.email,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 53.5461,
      longitude: -113.4938,
    },
    priceRange: "$$",
    // hasMap: "https://maps.google.com/?cid=REPLACE_WITH_GBP_CID", // add once GBP is verified
    sameAs: [
      "https://www.facebook.com/cliffstowing",
      "https://www.instagram.com/cliffstowing",
      "https://x.com/cliffstowing",
      "https://www.linkedin.com/company/cliffstowing",
    ],
    areaServed: siteConfig.serviceArea.map((area) => ({
      "@type": "City",
      name: area,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    makesOffer: siteConfig.services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service,
      },
    })),
    parentOrganization: {
      "@type": "Organization",
      name: siteConfig.owner,
    },
  };
}

export function breadcrumbJsonLd(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqJsonLd(items: Array<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function serviceJsonLd(service: ServiceData) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}/services/${service.slug}#service`,
    serviceType: service.name,
    name: service.title,
    description: service.metaDescription,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${siteConfig.url}/#business`,
    },
    areaServed: siteConfig.serviceArea.map((city) => ({
      "@type": "City",
      name: city,
    })),
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      areaServed: siteConfig.serviceArea.map((city) => ({
        "@type": "City",
        name: city,
      })),
    },
  };
}

export function cityLocalBusinessJsonLd(cityName: string) {
  const slug = cityName.toLowerCase().replace(/\./g, "").replace(/\s+/g, "-");
  const base = localBusinessJsonLd();
  return {
    ...base,
    "@id": `${siteConfig.url}/service-areas/${slug}#business`,
    areaServed: {
      "@type": "City",
      name: cityName,
    },
  };
}

export function blogPostingJsonLd(post: BlogPost) {
  const articleUrl = `${siteConfig.url}/blog/${post.slug}`;
  const imageUrl = `${siteConfig.url}${post.image}`;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${articleUrl}#article`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    headline: post.title,
    description: post.description,
    image: [imageUrl],
    datePublished: `${post.publishedAt}T08:00:00-06:00`,
    dateModified: `${post.updatedAt}T08:00:00-06:00`,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/cliffs_logo.png`,
      },
    },
    articleSection: post.category,
    keywords: post.keywords.join(", "),
  };
}
