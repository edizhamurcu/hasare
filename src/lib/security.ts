/** JSON-LD script breakout önleme (</script>, HTML entity) */
export function safeJsonLdStringify(data: object | object[]): string {
  try {
    const payload = Array.isArray(data) ? data : [data];
    const json = JSON.stringify(payload.length === 1 ? payload[0] : payload);
    return json
      .replace(/</g, "\\u003c")
      .replace(/>/g, "\\u003e")
      .replace(/&/g, "\\u0026")
      .replace(/\u2028/g, "\\u2028")
      .replace(/\u2029/g, "\\u2029");
  } catch {
    return "[]";
  }
}

const GA4_ID = /^G-[A-Z0-9]{6,12}$/;
const GTM_ID = /^GTM-[A-Z0-9]{4,12}$/;
const GOOGLE_ADS_ID = /^AW-\d{8,12}$/;
const GOOGLE_ADS_CONVERSION = /^AW-\d{8,12}\/[A-Za-z0-9_-]{6,40}$/;
const GSC_VERIFY = /^[a-zA-Z0-9_-]{10,128}$/;

export function sanitizeGa4Id(value: string | undefined): string {
  const id = value?.trim() ?? "";
  return GA4_ID.test(id) ? id : "";
}

export function sanitizeGtmId(value: string | undefined): string {
  const id = value?.trim() ?? "";
  return GTM_ID.test(id) ? id : "";
}

export function sanitizeGoogleAdsId(value: string | undefined): string {
  const id = value?.trim() ?? "";
  return GOOGLE_ADS_ID.test(id) ? id : "";
}

/** Google Ads dönüşüm etiketi — "AW-XXXXXXXX/label" biçimi (send_to) */
export function sanitizeGoogleAdsConversion(value: string | undefined): string {
  const id = value?.trim() ?? "";
  return GOOGLE_ADS_CONVERSION.test(id) ? id : "";
}

export function sanitizeGscVerification(value: string | undefined): string {
  const id = value?.trim() ?? "";
  return GSC_VERIFY.test(id) ? id : "";
}

/** Form / WhatsApp metni — kontrol karakterleri ve uzunluk sınırı */
export function sanitizeUserText(input: string, maxLen: number): string {
  return input
    .replace(/[\0-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLen);
}

/** WhatsApp wa.me numarası — yalnızca rakam */
export function sanitizeWhatsAppNumber(value: string): string {
  return value.replace(/\D/g, "").slice(0, 15);
}

/** Harici http(s) URL — yalnızca güvenilir şemalar */
export function isSafeExternalUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return parsed.protocol === "https:" || parsed.protocol === "http:";
  } catch {
    return false;
  }
}
