import type { Locale } from "@/i18n/config";
import { getServices, getService, type Service } from "./content/services";

export type { Service };
export { getServices, getService };

/** Backward-compatible default (Turkish) */
export const services = getServices("tr");

export function servicesFor(locale: Locale): Service[] {
  return getServices(locale);
}
