import { defineRouting } from "next-intl/routing";

export const locales = ["tr", "en", "ru"] as const;
export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  locales: [...locales],
  defaultLocale: "tr",
  localePrefix: "as-needed",
});

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export const localeLabels: Record<Locale, string> = {
  tr: "Türkçe",
  en: "English",
  ru: "Русский",
};
