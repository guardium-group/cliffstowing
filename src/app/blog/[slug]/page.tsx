import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Phone } from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { blogPosts, getBlogPost } from "@/lib/blog";
import { siteConfig } from "@/lib/site";
import { blogPostingJsonLd, breadcrumbJsonLd } from "@/lib/structured-data";
import { ServiceFAQ } from "@/components/service-faq";
import { CTACarousel } from "@/components/cta-carousel";
import { Testimonials } from "@/components/testimonials";
import { ServiceAreas } from "@/components/service-areas";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Article not found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const canonical = `/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${siteConfig.url}${canonical}`,
      type: "article",
      publishedTime: `${post.publishedAt}T08:00:00-06:00`,
      modifiedTime: `${post.updatedAt}T08:00:00-06:00`,
      authors: [siteConfig.name],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: siteConfig.url },
          { name: "Articles", url: `${siteConfig.url}/blog` },
          { name: post.title, url: `${siteConfig.url}/blog/${post.slug}` },
        ])}
      />
      <JsonLd data={blogPostingJsonLd(post)} />

      <article className="bg-white">
        <header className="relative overflow-hidden bg-[#3e000c] pt-36 sm:pt-40 pb-16 sm:pb-20 text-white">
          <div className="absolute inset-0 opacity-40" aria-hidden="true">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-br from-[#3e000c] via-[#3e000c]/70 to-[#3e000c]/30" />
          </div>

          <div className="relative z-10 container mx-auto px-4 max-w-7xl">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to articles
            </Link>

            <div className="flex flex-wrap items-center gap-3 border-l border-lime-300 pl-3 text-xs font-mono uppercase tracking-[0.16em] text-lime-300 mb-5">
              <span className="text-white">{post.category}</span>
             
              <time dateTime={post.publishedAt}>
                {new Intl.DateTimeFormat("en-CA", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                }).format(new Date(`${post.publishedAt}T08:00:00-06:00`))}
              </time>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-wrap-balance max-w-7xl mb-6">
              {post.title}
            </h1>
            <p className="text-white/70 text-lg sm:text-xl leading-relaxed max-w-3xl">
              {post.description}
            </p>
          </div>
        </header>

        <div className="container mx-auto px-4 max-w-7xl py-14 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-8">
              <div className="space-y-12">
                {post.sections.map((section) => (
                  <section key={section.heading}>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mb-4 text-wrap-balance">
                      {section.heading}
                    </h2>
                    <div className="space-y-4 text-gray-600 leading-relaxed text-base sm:text-lg max-w-[68ch]">
                      {section.body.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                    {section.list && (
                      <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl">
                        {section.list.map((item) => (
                          <li
                            key={item}
                            className="rounded-xl bg-gray-50 border border-gray-100 px-4 py-3 text-sm text-gray-700"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
              </div>
            </div>

            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-32 rounded-2xl bg-[#3e000c] text-white p-6 sm:p-7">
                <p className="text-xs font-mono uppercase tracking-[0.18em] text-primary mb-4">
                  Key takeaway
                </p>
                <p className="text-white/70 leading-relaxed mb-6">
                  {post.takeaway}
                </p>
                <div className="border-t border-white/10 pt-6">
                  <p className="text-sm text-white/45 mb-4">
                    Need help now? Dispatch is available 24/7.
                  </p>
                  <a
                    href={siteConfig.phone.href}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-primary/90 transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    {siteConfig.phone.display}
                  </a>
                </div>
                {post.relatedService && (
                  <div className="border-t border-white/10 pt-5 mt-5">
                    <p className="text-xs font-mono uppercase tracking-[0.16em] text-white/40 mb-3">
                      Related service
                    </p>
                    <Link
                      href={post.relatedService.href}
                      className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors underline-offset-4 hover:underline"
                    >
                      {post.relatedService.label}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </article>

      <ServiceAreas />
      <ServiceFAQ />
      <Testimonials />
      <CTACarousel />
    </>
  );
}
