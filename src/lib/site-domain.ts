/** Kanonik production domain — tüm canonical / sitemap / schema buradan türetilir */
export const SITE_DOMAIN = "alobocekservisi.com" as const;

export const CANONICAL_SITE_URL = `https://${SITE_DOMAIN}` as const;

/** Eski alan adları (nginx 301 → CANONICAL_SITE_URL) */
export const LEGACY_SITE_URLS = [
  "https://bocek.arekansoftware.com",
  "https://kibrishasereilaclama.com.tr",
  "https://www.kibrishasereilaclama.com.tr",
] as const;
