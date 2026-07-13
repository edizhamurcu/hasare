/** GTM / GA4 dataLayer events — no-op when analytics is disabled or in SSR */
export type ConversionEvent =
  | "phone_click"
  | "whatsapp_click"
  | "quote_form_submit";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function trackConversion(
  event: ConversionEvent,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, ...params });
}
