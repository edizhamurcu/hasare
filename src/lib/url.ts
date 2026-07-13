import { CANONICAL_SITE_URL } from "./site-domain";

/** metadataBase ve canonical için güvenli URL */
export function getSiteUrl(
  fallback = process.env.NODE_ENV === "development"
    ? "http://localhost:3020"
    : CANONICAL_SITE_URL
): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL ?? fallback;
  try {
    return new URL(raw).origin;
  } catch {
    return fallback;
  }
}
