import { createNavigation } from "next-intl/navigation";
import { routing } from "./config";

/** Yalnızca istemci / nadir kullanım — sunucu bileşenleri LocaleLink kullanır */
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);

export {
  locales,
  localeLabels,
  routing,
  isLocale,
  type Locale,
} from "./config";
