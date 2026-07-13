import { localizedPath } from "@/lib/metadata";
import { routing, type Locale } from "@/i18n/config";

export function localeSwitchHref(locale: Locale, internalPath: string): string {
  return localizedPath(locale, internalPath);
}

export function stripLocalePrefix(pathname: string): string {
  if (pathname === "/tr" || pathname === "/tr/") return "/";
  if (pathname.startsWith("/tr/")) return pathname.slice(3) || "/";
  const m = pathname.match(/^\/(en|ru)(\/.*)?$/);
  if (m) return m[2] || "/";
  return pathname || "/";
}

export const defaultLocale = routing.defaultLocale;
