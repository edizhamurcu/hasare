import type { Locale } from "@/i18n/config";
import { getServices } from "./content/services";
import { getCities } from "./content/cities";

export function relatedCitiesForService(locale: Locale, limit = 4) {
  return getCities(locale)
    .slice(0, limit)
    .map((c) => ({
      href: `/bolgeler/${c.slug}`,
      label: c.name,
    }));
}

export function relatedServicesForCity(locale: Locale, excludeSlug?: string, limit = 5) {
  return getServices(locale)
    .filter((s) => s.slug !== excludeSlug)
    .slice(0, limit)
    .map((s) => ({
      href: `/hizmetler/${s.slug}`,
      label: s.shortTitle,
    }));
}

export function relatedServicesForService(locale: Locale, currentSlug: string, limit = 4) {
  return getServices(locale)
    .filter((s) => s.slug !== currentSlug)
    .slice(0, limit)
    .map((s) => ({
      href: `/hizmetler/${s.slug}`,
      label: s.shortTitle,
    }));
}

export function relatedCitiesForServiceLinks(
  locale: Locale,
  regionLabel: (name: string) => string,
  limit = 4
) {
  return getCities(locale)
    .slice(0, limit)
    .map((c) => ({
      href: `/bolgeler/${c.slug}`,
      label: regionLabel(c.name),
    }));
}
