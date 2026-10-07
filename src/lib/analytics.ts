import { site } from "./site";

/** GTM / GA4 dataLayer events — no-op when analytics is disabled or in SSR */
export type ConversionEvent =
  | "phone_click"
  | "whatsapp_click"
  | "quote_form_submit";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Olay tipine göre Google Ads dönüşüm etiketi (send_to).
 * Olaya özel etiket tanımlı değilse genel "Contact" etiketine düşer (mevcut davranış korunur).
 */
const contactSendTo = site.googleAdsConversion.contact;
const CONVERSION_SEND_TO: Record<ConversionEvent, string> = {
  phone_click: site.googleAdsConversion.phone || contactSendTo,
  whatsapp_click: site.googleAdsConversion.whatsapp || contactSendTo,
  quote_form_submit: site.googleAdsConversion.form || contactSendTo,
};

export function trackConversion(
  event: ConversionEvent,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, ...params });

  // Google Ads dönüşümü (gtag.js) — olay tipine özel etiket, yoksa Contact fallback
  const sendTo = CONVERSION_SEND_TO[event];
  if (sendTo && typeof window.gtag === "function") {
    window.gtag("event", "conversion", { send_to: sendTo });
  }
}
