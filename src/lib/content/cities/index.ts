import type { Locale } from "@/i18n/config";
import type { CityLanding } from "./tr";
import { cities as citiesTr } from "./tr";
import { cities as citiesEn } from "./en";
import { cities as citiesRu } from "./ru";

export type { CityLanding };

const map = { tr: citiesTr, en: citiesEn, ru: citiesRu } as const;

export function getCities(locale: Locale): CityLanding[] {
  return map[locale] ?? map.tr;
}

export function getCity(slug: string, locale: Locale): CityLanding | undefined {
  return getCities(locale).find((c) => c.slug === slug);
}
