import Script from "next/script";
import { sanitizeGa4Id, sanitizeGoogleAdsId, sanitizeGtmId } from "@/lib/security";
import { site } from "@/lib/site";

/** Google tag (gtag.js) — <head> içinde, tüm sayfalarda tek yükleme */
export function AnalyticsHead() {
  const gtm = sanitizeGtmId(site.gtm);
  const ga4 = sanitizeGa4Id(site.ga4);
  const googleAds = sanitizeGoogleAdsId(site.googleAds);

  if (gtm) {
    return (
      <Script id="gtm" strategy="afterInteractive">{`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${gtm}');
      `}</Script>
    );
  }

  const gtagIds = [googleAds, ga4].filter(Boolean);
  if (!gtagIds.length) return null;

  const primaryId = gtagIds[0];
  const configLines = gtagIds.map((id) => `gtag('config', '${id}');`).join("\n");

  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${primaryId}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        ${configLines}
      `}</Script>
    </>
  );
}

/** GTM noscript fallback — yalnızca <body> içinde */
export function AnalyticsBody() {
  const gtm = sanitizeGtmId(site.gtm);
  if (!gtm) return null;

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${gtm}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="GTM"
      />
    </noscript>
  );
}
