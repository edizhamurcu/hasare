import type { Locale } from "@/i18n/config";
import { showcasePests } from "./images";
import { getService, type Service } from "./services";

/** Ana sayfa pest grid — öne çıkan türler (images.ts showcasePests) */
export const HOME_SHOWCASE_SLUGS = showcasePests;

/**
 * Ana sayfa hizmet kartları — showcase ile çakışmayan 6 ticari/özel hizmet.
 * (PestShowcase zaten konut haşerelerini gösterir.)
 */
export const HOME_SERVICE_CARD_SLUGS = [
  "dezenfeksiyon",
  "ev-ilaclama",
  "is-yeri-ilaclama",
  "termit-ilaclama",
  "hastane-ilaclama",
  "fabrika-ilaclama",
] as const;

export function getHomeFeaturedServices(locale: Locale): Service[] {
  return HOME_SERVICE_CARD_SLUGS.map((slug) => getService(slug, locale)).filter(
    (s): s is Service => s !== undefined
  );
}
