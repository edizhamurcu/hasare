import type { Metadata } from "next";
import { routing, type Locale } from "@/i18n/config";
import { OG_CONTENT_TYPE, OG_SIZE } from "./og-image";
import { getSiteLocale } from "./site-locale";
import { site } from "./site";

type PageMeta = {
  title: string;
  description: string;
  /** Path without locale prefix, e.g. /hizmetler */
  path: string;
  locale: Locale;
  noIndex?: boolean;
  ogType?: "website" | "article";
  ogImage?: string;
  publishedTime?: string;
  modifiedTime?: string;
  /** false: statik logo vb.; true (varsayılan): kanonik opengraph-image URL */
  skipOgImages?: boolean;
};

/** Kanonik public path — TR öneksiz, EN/RU /en /ru (trailing slash yok) */
export function localizedPath(locale: Locale, path: string): string {
  const clean = path.replace(/\/$/, "");
  const p = clean ? (clean.startsWith("/") ? clean : `/${clean}`) : "";
  if (locale === routing.defaultLocale) return p || "/";
  return p ? `/${locale}${p}` : `/${locale}`;
}

/** OG görsel route — yalnızca mevcut route'lar; diğerleri locale kök OG'ye düşer */
export function localeOgImageRoot(locale: Locale): string {
  if (locale === routing.defaultLocale) return `${site.url}/opengraph-image`;
  return `${site.url}/${locale}/opengraph-image`;
}

export function openGraphImageUrl(locale: Locale, path: string): string {
  const segment = localizedPath(locale, path);
  const isHome = segment === "/" || segment === "/en" || segment === "/ru";
  if (isHome) return localeOgImageRoot(locale);

  const hasDedicatedOg =
    /\/hizmetler\/[^/]+$/.test(segment) ||
    (/\/blog\/[^/]+$/.test(segment) && !segment.endsWith("/blog"));

  if (hasDedicatedOg) return `${site.url}${segment}/opengraph-image`;
  return localeOgImageRoot(locale);
}

const ogLocaleMap: Record<Locale, string> = {
  tr: "tr_CY",
  en: "en_CY",
  ru: "ru_RU",
};

function alternateOgLocales(locale: Locale): string[] {
  return routing.locales.filter((l) => l !== locale).map((l) => ogLocaleMap[l]);
}

export function hreflangLanguages(path: string): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const loc of routing.locales) {
    languages[loc] = `${site.url}${localizedPath(loc, path)}`;
  }
  languages["x-default"] = `${site.url}${localizedPath(routing.defaultLocale, path)}`;
  return languages;
}

export function getMetadataBase(): URL {
  return new URL(site.url);
}

export function buildMetadata({
  title,
  description,
  path,
  locale,
  noIndex = false,
  ogType = "website",
  ogImage,
  publishedTime,
  modifiedTime,
  skipOgImages = true,
}: PageMeta): Metadata {
  const siteLoc = getSiteLocale(locale);
  const url = `${site.url}${localizedPath(locale, path)}`;
  const fullTitle = title.includes(siteLoc.name) ? title : `${title} | ${siteLoc.name}`;

  const generatedOgUrl = openGraphImageUrl(locale, path);
  const staticOgUrl = ogImage
    ? ogImage.startsWith("http")
      ? ogImage
      : `${site.url}${ogImage}`
    : null;

  const ogImageEntry = skipOgImages
    ? {
        url: generatedOgUrl,
        width: OG_SIZE.width,
        height: OG_SIZE.height,
        type: OG_CONTENT_TYPE,
        alt: siteLoc.name,
      }
    : staticOgUrl
      ? {
          url: staticOgUrl,
          width: 512,
          height: 512,
          alt: siteLoc.name,
        }
      : null;

  const openGraph: NonNullable<Metadata["openGraph"]> = {
    type: ogType,
    locale: ogLocaleMap[locale],
    alternateLocale: alternateOgLocales(locale),
    url,
    title: fullTitle,
    description,
    siteName: siteLoc.name,
    countryName: "Cyprus",
    ...(ogImageEntry ? { images: [ogImageEntry] } : {}),
    ...(ogType === "article" && publishedTime ? { publishedTime } : {}),
    ...(ogType === "article" && modifiedTime ? { modifiedTime } : {}),
  };

  return {
    metadataBase: getMetadataBase(),
    title: fullTitle,
    description,
    applicationName: siteLoc.name,
    alternates: {
      canonical: url,
      languages: hreflangLanguages(path),
    },
    authors: [{ name: siteLoc.name, url: site.url }],
    creator: siteLoc.name,
    publisher: siteLoc.name,
    category: "Pest Control",
    formatDetection: {
      telephone: false,
      email: false,
      address: false,
    },
    ...(site.gscVerification
      ? { verification: { google: site.gscVerification } }
      : {}),
    openGraph,
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      site: site.url.replace(/^https?:\/\//, ""),
      ...(ogImageEntry ? { images: [ogImageEntry.url] } : {}),
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    other: {
      "geo.region": "CY",
      "geo.placename":
        locale === "en"
          ? "Nicosia, Northern Cyprus"
          : locale === "ru"
            ? "Никосия, KKTC"
            : "Lefkoşa, KKTC",
      "geo.position": "35.185566;33.382276",
      ICBM: "35.185566, 33.382276",
      "content-language": locale,
    },
  };
}
