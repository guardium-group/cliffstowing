import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

/** The page's main action. Every tel: link is tracked by AnalyticsEvents. */
export function CallButton({
  label = `Call ${siteConfig.phone.compact}`,
  size = "lg",
  className,
}: {
  label?: string;
  size?: "default" | "lg" | "xl";
  className?: string;
}) {
  return (
    <Button asChild size={size} className={cn("rounded-full font-semibold shadow-lg shadow-primary/25", className)}>
      <a href={siteConfig.phone.href}>
        <Phone className="h-5 w-5" aria-hidden="true" />
        {label}
      </a>
    </Button>
  );
}
