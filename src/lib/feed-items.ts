export type FeedItemType = "announcement" | "blog" | "deal";

export interface FeedItem {
  type: FeedItemType;
  label: string;
  href: string;
}

export const feedItems: FeedItem[] = [
  {
    type: "announcement",
    label: "Cliff's Towing — Edmonton's trusted towing service since 1985.",
    href: "/about",
  },
  {
    type: "deal",
    label: "Stuck? Call us 24/7 for fast roadside assistance.",
    href: "tel:+17805550100",
  },
  {
    type: "blog",
    label: "What to do after a car accident in Edmonton.",
    href: "/services",
  },
  {
    type: "announcement",
    label: "Now serving Sherwood Park, Leduc, and Spruce Grove.",
    href: "/contact",
  },
  {
    type: "deal",
    label: "Free towing quotes — call +1 (780) 555-0100.",
    href: "tel:+17805550100",
  },
];
