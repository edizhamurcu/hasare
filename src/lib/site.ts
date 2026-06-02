export const site = {
  name: process.env.NEXT_PUBLIC_SITE_NAME ?? "Hasere KKTC İlaçlama",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "tr_CY",
  language: "tr",
  country: "KKTC",
  phoneE164: process.env.NEXT_PUBLIC_PHONE_E164 ?? "+905338888888",
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY ?? "0533 888 88 88",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "905338888888",
  email: "info@ornek-hasere.com",
  healthLicense: process.env.NEXT_PUBLIC_HEALTH_LICENSE_NO ?? "",
  ga4: process.env.NEXT_PUBLIC_GA4_ID ?? "",
  gtm: process.env.NEXT_PUBLIC_GTM_ID ?? "",
  googlePlaceId: process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID ?? "",
  defaultOgImage: "/og-default.jpg",
} as const;

export const valueProps = [
  "7/24 Acil Servis",
  "Aynı Gün Müdahale",
  "Sağlık Bakanlığı Onaylı Ürünler",
  "Ücretsiz Keşif",
] as const;

export const strategyMix = {
  googleAds: 40,
  localSeo: 40,
  aiSeo: 20,
} as const;
