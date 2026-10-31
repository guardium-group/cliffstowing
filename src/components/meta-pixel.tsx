"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { useConsent } from "@/lib/consent";
import { META_PIXEL_ID, disableMetaPixel } from "@/lib/analytics";

/**
 * Loads the Meta Pixel only after the visitor accepts cookies (same choice as GA4).
 * The loader sends the first PageView; client-side navigations send their own.
 */
export function MetaPixel() {
  const consent = useConsent();
  const pathname = usePathname();
  const wasAccepted = useRef(false);
  const lastPath = useRef<string | null>(null);

  useEffect(() => {
    if (!META_PIXEL_ID) return;
    if (consent === "accepted") {
      if (wasAccepted.current) window.fbq?.("consent", "grant");
      wasAccepted.current = true;
    } else if (consent === "declined" && wasAccepted.current) {
      // A loaded script can't be unloaded, so withdraw by revoking consent and clearing its cookies.
      disableMetaPixel();
    }
  }, [consent]);

  useEffect(() => {
    if (!META_PIXEL_ID || consent !== "accepted") return;
    if (lastPath.current !== null && lastPath.current !== pathname) {
      window.fbq?.("track", "PageView");
    }
    lastPath.current = pathname;
  }, [consent, pathname]);

  if (!META_PIXEL_ID || consent !== "accepted") return null;

  return (
    <Script id="meta-pixel-init" strategy="afterInteractive">
      {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');`}
    </Script>
  );
}
