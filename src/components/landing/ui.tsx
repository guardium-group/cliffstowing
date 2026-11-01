import type { ReactNode } from "react";
import { ArrowRight, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

/*
 * Landing page design system. Every section is built from these pieces so type sizes,
 * spacing and buttons stay identical down the page. Don't add one-off sizes in sections.
 *
 * Type scale:  hero h1 · h2 (every section) · h3 · stat · quote · lede · body · eyebrow
 *              On phones h1/h2 scale with the screen so each authored line stays on one line.
 * Spacing:     section py-24/lg:py-32 · intro → content mt-14/lg:mt-20 · cards p-8, gap-6
 */

export const DISPLAY = "font-[family-name:var(--font-display)]";
export const H1 = `${DISPLAY} text-[clamp(2rem,calc(12.2vw_-_6px),3.5rem)] sm:text-[clamp(3.5rem,7vw,5.75rem)] leading-[0.95] tracking-[-0.045em] font-extrabold text-balance`;
export const H2 = `${DISPLAY} text-[clamp(1.75rem,calc(11vw_-_5.5px),2.25rem)] sm:text-[clamp(2.25rem,4.4vw,3.5rem)] leading-[1.02] tracking-[-0.04em] font-extrabold text-balance`;
export const H3 = `${DISPLAY} text-2xl leading-tight tracking-[-0.02em] font-bold`;
export const STAT = `${DISPLAY} text-[clamp(4rem,8vw,6.5rem)] leading-[0.9] tracking-[-0.05em] font-extrabold`;
/** Outlined display numeral (01, 02...) used by the tow index and the steps. */
export const NUMERAL = `${DISPLAY} text-[clamp(4rem,8vw,6.5rem)] font-extrabold leading-[0.9] tracking-[-0.05em] text-transparent [-webkit-text-stroke-width:1.5px]`;
export const QUOTE = `${DISPLAY} text-[clamp(1.375rem,2.4vw,2rem)] leading-snug tracking-[-0.02em] font-semibold`;
export const BODY = "text-base leading-relaxed";
export const CONTENT_GAP = "mt-14 lg:mt-20";
/** Muted text that adapts to light and dark sections. */
export const MUTED = "text-gray-600 group-data-[dark=true]/s:text-white/70";
export const TEXT_LINK =
  "group/link relative inline-flex items-center gap-2 text-left font-semibold after:absolute after:inset-x-0 after:-inset-y-2.5 after:content-[''] decoration-2 underline-offset-[6px] hover:underline focus-visible:underline";

type Tone = "light" | "muted" | "dark" | "maroon";
const TONES: Record<Tone, string> = {
  light: "bg-white text-gray-950",
  muted: "bg-[#f4f5f7] text-gray-950",
  dark: "bg-[#140a0b] text-white",
  maroon: "bg-[#3e000c] text-white",
};

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-7xl px-6 lg:px-8", className)}>{children}</div>;
}

export function Section({
  tone = "light",
  id,
  labelledBy,
  className,
  children,
}: {
  tone?: Tone;
  id?: string;
  labelledBy?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      data-dark={tone === "dark" || tone === "maroon"}
      className={cn("group/s relative py-24 lg:py-32", TONES[tone], className)}
    >
      <Container>{children}</Container>
    </section>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary group-data-[dark=true]/s:text-[#ff6b70]", className)}>
      <span className="h-0.5 w-6 bg-current" aria-hidden="true" />
      {children}
    </p>
  );
}

/** Red underline bar under the key word of a headline. */
export function Mark({ children }: { children: ReactNode }) {
  return (
    <span className="relative inline-block">
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-x-0 bottom-[0.04em] h-[0.12em] rounded-full bg-primary" aria-hidden="true" />
    </span>
  );
}

export function Lede({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("text-lg leading-relaxed max-w-[46ch]", MUTED, className)}>{children}</p>;
}

/** Eyebrow + h2 on the left, lede on the right (stacked on phones). */
export function SectionIntro({ id, eyebrow, title, lede }: { id: string; eyebrow: string; title: ReactNode; lede?: ReactNode }) {
  return (
    <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 id={id} className={cn("mt-5", H2)}>{title}</h2>
      </div>
      {lede && <Lede className="lg:justify-self-end">{lede}</Lede>}
    </div>
  );
}

/** The one filled button: red pill with a round white badge. */
export function PrimaryCta({
  href,
  children,
  icon = "phone",
  size = "lg",
  compactOnXs = false,
  className,
}: {
  href: string;
  children: ReactNode;
  icon?: "phone" | "arrow";
  size?: "sm" | "lg";
  /** Drop the round badge below 360px, where the top bar can't fit logo + full pill. */
  compactOnXs?: boolean;
  className?: string;
}) {
  const Icon = icon === "phone" ? Phone : ArrowRight;
  return (
    <a
      href={href}
      className={cn(
        "group/cta inline-flex shrink-0 items-center whitespace-nowrap rounded-full bg-primary font-semibold text-white shadow-lg shadow-primary/25 transition-colors hover:bg-[#c8161c] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/40",
        size === "lg" ? "gap-4 py-2 pl-7 pr-2 text-base" : "gap-3 py-1.5 pl-5 pr-1.5 text-sm",
        compactOnXs && "max-[359px]:min-h-11 max-[359px]:px-4",
        className
      )}
    >
      {children}
      <span className={cn("flex items-center justify-center rounded-full bg-white text-primary transition-transform group-hover/cta:translate-x-0.5", size === "lg" ? "h-11 w-11" : "h-8 w-8", compactOnXs && "max-[359px]:hidden")}>
        <Icon className={size === "lg" ? "h-5 w-5" : "h-4 w-4"} aria-hidden="true" />
      </span>
    </a>
  );
}

/** The one secondary action: text with an arrow. */
export function TextLink({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  return (
    <a href={href} className={cn(TEXT_LINK, className)}>
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" aria-hidden="true" />
    </a>
  );
}

export function LiveDot() {
  return (
    <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
      <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 motion-safe:animate-ping" />
      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
    </span>
  );
}
