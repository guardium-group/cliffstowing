export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";
/** The Google tag from Google Ads (GT-…). Its destinations (GA4 + Google Ads) are managed in the Google tag UI. */
export const GOOGLE_TAG_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_ID ?? "";
/** Every Google tag ID to configure; gtag.js is loaded once, with the first. */
export const GOOGLE_TAG_IDS = [...new Set([GOOGLE_TAG_ID, GA_MEASUREMENT_ID].filter(Boolean))];
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "";

type GtagParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

/**
 * Sends a Google event (GA4 and any other destinations of the Google tag). Without consent,
 * Consent Mode turns it into a cookieless ping. No-op until gtag has loaded.
 */
export function trackEvent(name: string, params?: GtagParams) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", name, params);
}

/** Sends a Meta Pixel standard event. No-op until the pixel has loaded (i.e. without consent). */
export function trackMetaEvent(name: string, params?: GtagParams) {
  if (typeof window === "undefined") return;
  window.fbq?.("track", name, params);
}

/** Expires every first-party cookie whose name matches, on the host and the root domain. */
function clearCookies(matches: (name: string) => boolean) {
  const hostParts = window.location.hostname.split(".");
  const rootDomain = hostParts.slice(-2).join(".");
  for (const cookie of document.cookie.split(";")) {
    const name = cookie.split("=")[0]?.trim();
    if (!name || !matches(name)) continue;
    for (const domain of ["", `; domain=.${rootDomain}`, `; domain=${window.location.hostname}`]) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domain}`;
    }
  }
}

/** Consent Mode v2: tells every Google tag whether it may use cookies and ad data. */
export function updateGoogleConsent(granted: boolean) {
  const state = granted ? "granted" : "denied";
  window.gtag?.("consent", "update", {
    ad_storage: state,
    ad_user_data: state,
    ad_personalization: state,
    analytics_storage: state,
  });
  // Denying stops new cookies; remove the ones set while consent was granted.
  if (!granted) {
    clearCookies((name) => name === "_ga" || name.startsWith("_ga_") || name.startsWith("_gcl_"));
  }
}

/** Stops the Meta Pixel sending events and removes its first-party cookies. */
export function disableMetaPixel() {
  if (!META_PIXEL_ID) return;
  window.fbq?.("consent", "revoke");
  clearCookies((name) => name === "_fbp" || name === "_fbc");
}
