export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "";

type GtagParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

/** Sends a GA4 event. No-op until GA4 has loaded (i.e. without analytics consent). */
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

/** Stops GA4 sending hits and removes its first-party cookies. */
export function disableAnalytics() {
  if (!GA_MEASUREMENT_ID) return;
  (window as unknown as Record<string, boolean>)[`ga-disable-${GA_MEASUREMENT_ID}`] = true;
  clearCookies((name) => name === "_ga" || name.startsWith("_ga_"));
}

/** Stops the Meta Pixel sending events and removes its first-party cookies. */
export function disableMetaPixel() {
  if (!META_PIXEL_ID) return;
  window.fbq?.("consent", "revoke");
  clearCookies((name) => name === "_fbp" || name === "_fbc");
}

export function enableAnalytics() {
  if (!GA_MEASUREMENT_ID) return;
  (window as unknown as Record<string, boolean>)[`ga-disable-${GA_MEASUREMENT_ID}`] = false;
}
