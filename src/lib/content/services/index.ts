import type { Locale } from "@/i18n/config";
import type { Service } from "./tr";
import { services as servicesTr } from "./tr";
import { services as servicesEn } from "./en";
import { services as servicesRu } from "./ru";

export type { Service };

const map = { tr: servicesTr, en: servicesEn, ru: servicesRu } as const;

export function getServices(locale: Locale): Service[] {
  return map[locale] ?? map.tr;
}

export function getService(slug: string, locale: Locale): Service | undefined {
  return getServices(locale).find((s) => s.slug === slug);
}
