import type { Locale } from "@/i18n/config";
import { getCities, getCity, type CityLanding } from "./content/cities";

export type { CityLanding };
export { getCities, getCity };

export const cities = getCities("tr");

export function citiesFor(locale: Locale): CityLanding[] {
  return getCities(locale);
}
