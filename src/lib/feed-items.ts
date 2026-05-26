import { siteConfig } from "@/lib/site";

export type FeedItemType = "announcement" | "blog" | "deal";

export interface FeedItem {
  type: FeedItemType;
  label: string;
  href: string;
}

export const feedItems: FeedItem[] = [
  {
    type: "announcement",
    label: `Cliff's Towing - ${siteConfig.foundedCopy}.`,
    href: "/about",
  },
  {
    type: "deal",
    label: "Stuck? Call dispatch 24/7 for fast roadside assistance.",
    href: siteConfig.phone.href,
  },
  {
    type: "blog",
    label: "Need towing, recovery, or transport in Edmonton?",
    href: "/services",
  },
  {
    type: "announcement",
    label: "Serving Edmonton, Sherwood Park, Leduc, and Spruce Grove.",
    href: "/contact",
  },
  {
    type: "deal",
    label: `Free towing quotes - call ${siteConfig.phone.display}.`,
    href: siteConfig.phone.href,
  },
];
