import type { Locale } from "@/i18n/config";
import { CANONICAL_SITE_URL } from "./site-domain";
import { company } from "./company";
import { site } from "./site";

/** Yerel + generatif arama için tutarlı varlık bilgisi */
export const seoEntity = {
  brand: site.name,
  alternateBrand: company.alternateName,
  region: "KKTC",
  primaryCity: "Lefkoşa",
  serviceType: site.activityArea,
  phone: site.phonesDisplay,
  email: site.email,
  url: site.url,
  founded: site.foundedYear,
} as const;

/** Nicosia / KKTC coordinates for local SEO */
export const geoCoordinates = {
  latitude: 35.185566,
  longitude: 33.382276,
} as const;

export function getHasMapUrl(): string | undefined {
  if (site.googlePlaceId) {
    return `https://www.google.com/maps/place/?q=place_id:${site.googlePlaceId}`;
  }
  const q = encodeURIComponent(`${site.name} ${company.address.locality} KKTC`);
  return `https://www.google.com/maps/search/?api=1&query=${q}`;
}

export const sameAsProfiles = [
  company.social.facebook.url,
  company.social.instagram.url,
  CANONICAL_SITE_URL,
  ...(site.googlePlaceId
    ? [`https://www.google.com/maps/place/?q=place_id:${site.googlePlaceId}`]
    : []),
] as const;

const knowsAboutByLocale: Record<Locale, string[]> = {
  tr: [
    "haşere ilaçlama",
    "kemirgen kontrolü",
    "hamamböceği ilaçlama",
    "fare ilaçlama",
    "sivrisinek ilaçlama",
    "termit ilaçlama",
    "dezenfeksiyon",
    "KKTC ilaçlama",
  ],
  en: [
    "pest control",
    "rodent control",
    "cockroach treatment",
    "mosquito control",
    "termite treatment",
    "disinfection",
    "Northern Cyprus exterminator",
  ],
  ru: [
    "дезинсекция",
    "дератизация",
    "обработка от тараканов",
    "обработка от комаров",
    "дезинфекция",
    "Северный Кипр",
  ],
};

export function getKnowsAbout(locale: Locale): string[] {
  return knowsAboutByLocale[locale];
}

/** Statik sayfalar için sitemap lastModified */
export const sitemapStaticLastMod = new Date("2026-06-05");

/** llms.txt güncelleme tarihi */
export const llmsLastUpdated = "2026-06-05";
