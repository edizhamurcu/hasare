import type { Locale } from "@/i18n/config";
import type { LegalDocument } from "./types";

export type { LegalSection, LegalDocument } from "./types";

import { privacyTr, termsTr, kvkkTr } from "./tr";
import { privacyEn, termsEn, kvkkEn } from "./en";
import { privacyRu, termsRu, kvkkRu } from "./ru";

type LegalSlug = "privacy" | "terms" | "kvkk";

const map: Record<Locale, Record<LegalSlug, LegalDocument>> = {
  tr: { privacy: privacyTr, terms: termsTr, kvkk: kvkkTr },
  en: { privacy: privacyEn, terms: termsEn, kvkk: kvkkEn },
  ru: { privacy: privacyRu, terms: termsRu, kvkk: kvkkRu },
};

export const legalPaths = {
  privacy: "/gizlilik-politikasi",
  terms: "/kullanim-kosullari",
  kvkk: "/kvkk",
} as const;

export type LegalPathKey = keyof typeof legalPaths;

export function getLegalDocument(slug: LegalSlug, locale: Locale): LegalDocument {
  return map[locale]?.[slug] ?? map.tr[slug];
}

export function getLegalSlugFromPath(path: string): LegalSlug | undefined {
  const entry = Object.entries(legalPaths).find(([, p]) => p === path);
  return entry?.[0] as LegalSlug | undefined;
}
