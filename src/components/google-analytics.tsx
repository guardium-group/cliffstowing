"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";
import { CONSENT_KEY, useConsent } from "@/lib/consent";
import { GOOGLE_TAG_IDS, updateGoogleConsent } from "@/lib/analytics";

/**
 * Google tag with Consent Mode v2 (advanced). gtag.js loads on every page. Until the visitor
 * clicks "Accept All" it runs with all consent denied: no cookies, only cookieless pings that
 * Google uses to model conversions. Accepting or declining updates the consent state in place.
 * Page views (including client-side navigations) come from GA4 Enhanced Measurement.
 */
export function GoogleAnalytics() {
  const consent = useConsent();
  const lastConsent = useRef(consent);

  useEffect(() => {
    // The init script reads the stored choice itself, so only react to changes made on this page.
    if (consent === lastConsent.current) return;
    lastConsent.current = consent;
    if (consent) updateGoogleConsent(consent === "accepted");
  }, [consent]);

  if (GOOGLE_TAG_IDS.length === 0) return null;

  // The consent default must be queued before 'js' and 'config', so all three live in one script.
  const init = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
var consent = 'denied';
try { if (localStorage.getItem(${JSON.stringify(CONSENT_KEY)}) === 'accepted') consent = 'granted'; } catch (e) {}
gtag('consent', 'default', { ad_storage: consent, ad_user_data: consent, ad_personalization: consent, analytics_storage: consent });
gtag('set', 'ads_data_redaction', true);
gtag('js', new Date());
${GOOGLE_TAG_IDS.map((id) => `gtag('config', ${JSON.stringify(id)});`).join("\n")}`;

  return (
    <>
      <Script id="google-tag-init" strategy="afterInteractive">
        {init}
      </Script>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_IDS[0]}`}
        strategy="afterInteractive"
      />
    </>
  );
}
