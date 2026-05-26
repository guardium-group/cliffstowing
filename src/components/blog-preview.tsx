import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { getFeaturedBlogPosts } from "@/lib/blog";

export function BlogPreview() {
  const posts = getFeaturedBlogPosts(3);
  const featured = posts[0];
  const secondary = posts.slice(1);

  return (
    <section className="py-20 sm:py-28 bg-white border-t border-black/[0.04]">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.18em] text-primary mb-3">
              Guides &amp; articles
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight tracking-tight text-wrap-balance">
              Practical towing advice for Edmonton drivers.
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-gray-900 transition-colors group whitespace-nowrap"
          >
            View all articles
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Featured card */}
          <Link
            href={`/blog/${featured.slug}`}
            className="group lg:col-span-7 bg-gray-50 rounded-2xl overflow-hidden ring-1 ring-black/[0.06] hover:ring-black/[0.10] hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          >
            <div className="relative aspect-[16/10] bg-gray-100 overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              {/* Category badge */}
              <span className="absolute top-4 left-4 text-[10px] font-mono uppercase tracking-[0.15em] text-primary bg-white/90 border border-primary/20 rounded-full px-3 py-1 backdrop-blur-sm">
                {featured.category}
              </span>
            </div>
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-2 text-xs font-mono text-gray-400 mb-3">
                <Clock className="h-3 w-3" aria-hidden="true" />
                <span>{featured.readingTime}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight tracking-tight mb-3 text-wrap-balance group-hover:text-primary transition-colors">
                {featured.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed max-w-[60ch]">
                {featured.excerpt}
              </p>
            </div>
          </Link>

          {/* Secondary cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {secondary.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex gap-4 bg-gray-50 rounded-2xl p-4 ring-1 ring-black/[0.06] hover:ring-black/[0.10] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
              >
                <div className="relative w-28 sm:w-36 aspect-[4/3] shrink-0 rounded-xl overflow-hidden bg-gray-100">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    sizes="144px"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                  />
                </div>
                <div className="flex flex-col justify-center min-w-0">
                  <div className="flex items-center gap-2 text-[10px] font-mono text-gray-400 mb-2">
                    <span className="text-primary">{post.category}</span>
                    <span>·</span>
                    <Clock className="h-2.5 w-2.5" aria-hidden="true" />
                    <span>{post.readingTime}</span>
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 leading-snug mb-1.5 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
