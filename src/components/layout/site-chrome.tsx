"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";

/** Paid-ads landing pages: no site header or footer, so visitors stay on the page. */
export const LANDING_PATHS = ["/edmonton-towing"];

/** Renders the site header/footer everywhere except the landing pages. */
export function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  if (LANDING_PATHS.includes(pathname)) return null;
  return children;
}
