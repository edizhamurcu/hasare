import { company } from "./company";
import { CANONICAL_SITE_URL } from "./site-domain";
import { CONTACT_EMAIL } from "./contact";
import {
  sanitizeGa4Id,
  sanitizeGoogleAdsId,
  sanitizeGscVerification,
  sanitizeGtmId,
  sanitizeWhatsAppNumber,
} from "./security";

const defaultUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.NODE_ENV === "development"
    ? "http://localhost:3020"
    : company.siteUrl ?? CANONICAL_SITE_URL);

const phones = [
  {
    e164: process.env.NEXT_PUBLIC_PHONE_1_E164 ?? company.phones[0].e164,
    display: process.env.NEXT_PUBLIC_PHONE_1_DISPLAY ?? company.phones[0].display,
  },
  {
    e164: process.env.NEXT_PUBLIC_PHONE_2_E164 ?? company.phones[1].e164,
    display: process.env.NEXT_PUBLIC_PHONE_2_DISPLAY ?? company.phones[1].display,
  },
];

export const site = {
  name: process.env.NEXT_PUBLIC_SITE_NAME ?? company.legalName,
  activityArea: company.activityArea,
  alternateName: company.alternateName,
  url: defaultUrl,
  locale: "tr_CY",
  language: "tr",
  country: "KKTC",
  phones,
  phonesDisplay: phones.map((p) => p.display).join(" · "),
  phoneE164: phones[0].e164,
  phoneDisplay: phones[0].display,
  whatsapp: sanitizeWhatsAppNumber(
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? phones[0].e164.replace(/\D/g, "")
  ),
  email: process.env.NEXT_PUBLIC_EMAIL ?? CONTACT_EMAIL,
  ga4: sanitizeGa4Id(process.env.NEXT_PUBLIC_GA4_ID),
  gtm: sanitizeGtmId(process.env.NEXT_PUBLIC_GTM_ID),
  googleAds: sanitizeGoogleAdsId(process.env.NEXT_PUBLIC_GOOGLE_ADS_ID),
  googlePlaceId: process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID ?? "",
  /** Search Console HTML etiket doğrulama kodu (meta content değeri) */
  gscVerification: sanitizeGscVerification(process.env.NEXT_PUBLIC_GSC_VERIFICATION),
  defaultOgImage: "/images/logo-og.jpg",
  address: company.address.display,
  foundedYear: company.foundedYear,
} as const;

export const valueProps = [
  "7/24 Garantili İlaçlama",
  "Aynı Gün / Acil Müdahale",
  "Ücretsiz Keşif",
  "ISO & TSE Belgeli",
] as const;

export const strategyMix = {
  googleAds: 40,
  localSeo: 40,
  aiSeo: 20,
} as const;
