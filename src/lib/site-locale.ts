import type { Locale } from "@/i18n/config";
import { getCompany } from "@/lib/content/company";
import { company } from "@/lib/company";
import { site } from "@/lib/site";

/** Locale-aware site display fields (phones/urls stay shared) */
export function getSiteLocale(locale: Locale) {
  const co = getCompany(locale);
  return {
    ...site,
    name: co.legalName,
    activityArea: co.activityArea,
    alternateName: co.alternateName,
    language: locale,
    locale: locale === "tr" ? "tr_CY" : locale === "ru" ? "ru_CY" : "en_CY",
  };
}

export function getCompanyStatic() {
  return company;
}
