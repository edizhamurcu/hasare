import type { Locale } from "@/i18n/config";
import { company } from "./company";
import { getCompany } from "./content/company";
import { getBlogOgImageUrl } from "./content/blog";
import { localizedPath } from "./metadata";
import { geoCoordinates, getHasMapUrl, getKnowsAbout, sameAsProfiles } from "./seo-constants";
import { getSiteLocale } from "./site-locale";
import { logoImage } from "./logo";
import { site } from "./site";
import type { BlogPost } from "./content/blog";
import type { CityLanding } from "./cities";
import type { Service } from "./services";

const schemaLanguage: Record<Locale, string> = {
  tr: "tr-CY",
  en: "en-CY",
  ru: "ru-CY",
};

export function websiteJsonLd(locale: Locale) {
  const siteLoc = getSiteLocale(locale);
  const quoteUrl = `${site.url}${localizedPath(locale, "/teklif")}`;
  const faqUrl = `${site.url}${localizedPath(locale, "/sss")}`;
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: siteLoc.name,
    alternateName: siteLoc.alternateName,
    description: siteLoc.activityArea,
    url: site.url,
    inLanguage: schemaLanguage[locale],
    publisher: { "@id": `${site.url}/#organization` },
    potentialAction: [
      {
        "@type": "CommunicateAction",
        name:
          locale === "tr"
            ? "Ücretsiz keşif ve teklif talebi"
            : locale === "ru"
              ? "Заявка на осмотр и предложение"
              : "Free inspection and quote request",
        target: {
          "@type": "EntryPoint",
          urlTemplate: quoteUrl,
          actionPlatform: [
            "http://schema.org/DesktopWebPlatform",
            "http://schema.org/MobileWebPlatform",
          ],
        },
      },
      {
        "@type": "ReadAction",
        name: locale === "tr" ? "Sık sorulan sorular" : locale === "ru" ? "Частые вопросы" : "FAQ",
        target: faqUrl,
      },
    ],
  };
}

/** @graph için @context sökücü */
function stripContext<T extends Record<string, unknown>>(node: T): Omit<T, "@context"> {
  const { "@context": _, ...rest } = node;
  return rest;
}

/** Birden fazla schema düğümünü tek @graph içinde birleştirir */
export function jsonLdGraph(...nodes: Record<string, unknown>[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes.map(stripContext),
  };
}

/** Sayfa düzeyi şemaları tek @graph altında */
export function pageJsonLdGraph(...nodes: Record<string, unknown>[]) {
  return jsonLdGraph(...nodes);
}

/** Tam WebPage düğümü — isteğe bağlı speakable */
export function webPageJsonLd(
  path: string,
  locale: Locale,
  title: string,
  description: string,
  speakableSelectors?: string[]
) {
  const url = `${site.url}${localizedPath(locale, path)}`;
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    inLanguage: schemaLanguage[locale],
    isPartOf: { "@id": `${site.url}/#website` },
    about: { "@id": `${site.url}/#organization` },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${site.url}${logoImage.src}`,
    },
    ...(speakableSelectors?.length
      ? {
          speakable: {
            "@type": "SpeakableSpecification",
            cssSelector: speakableSelectors,
          },
        }
      : {}),
  };
}

/** Voice / generative snippet hedefi — title/description ile */
export function speakableWebPageJsonLd(
  path: string,
  locale: Locale,
  cssSelectors: string[],
  opts?: { title?: string; description?: string }
) {
  const url = `${site.url}${localizedPath(locale, path)}`;
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    ...(opts?.title ? { name: opts.title } : {}),
    ...(opts?.description ? { description: opts.description } : {}),
    inLanguage: schemaLanguage[locale],
    isPartOf: { "@id": `${site.url}/#website` },
    about: { "@id": `${site.url}/#organization` },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: cssSelectors,
    },
  };
}

function postalAddressForLocale(locale: Locale) {
  if (locale === "en") {
    return {
      streetAddress: company.address.display,
      addressLocality: "Nicosia",
      addressRegion: "Northern Cyprus",
      addressCountry: "CY",
    };
  }
  if (locale === "ru") {
    return {
      streetAddress: company.address.display,
      addressLocality: "Никосия",
      addressRegion: "Северный Кипр",
      addressCountry: "CY",
    };
  }
  return {
    streetAddress: company.address.display,
    addressLocality: "Lefkoşa",
    addressRegion: "KKTC",
    addressCountry: "CY",
  };
}

export function legalWebPageJsonLd(
  path: string,
  locale: Locale,
  title: string,
  description: string,
  speakableSelectors?: string[]
) {
  return webPageJsonLd(path, locale, title, description, speakableSelectors);
}

export function organizationCredentialsJsonLd(locale: Locale) {
  const { credentials } = getCompany(locale);
  return credentials.map((name) => ({
    "@type": "EducationalOccupationalCredential" as const,
    credentialCategory: "quality certification",
    name,
  }));
}

export function localBusinessJsonLd(locale: Locale) {
  const siteLoc = getSiteLocale(locale);
  const hasMap = getHasMapUrl();
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "PestControlService"],
    "@id": `${site.url}/#organization`,
    name: siteLoc.name,
    alternateName: siteLoc.alternateName,
    description: siteLoc.activityArea,
    url: site.url,
    telephone: site.phones.map((p) => p.e164),
    foundingDate: String(site.foundedYear),
    image: `${site.url}${logoImage.src}`,
    logo: {
      "@type": "ImageObject",
      url: `${site.url}${logoImage.src}`,
      width: logoImage.width,
      height: logoImage.height,
    },
    sameAs: [...sameAsProfiles],
    knowsAbout: getKnowsAbout(locale),
    hasCredential: organizationCredentialsJsonLd(locale),
    ...(hasMap ? { hasMap } : {}),
    address: {
      "@type": "PostalAddress",
      ...postalAddressForLocale(locale),
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: geoCoordinates.latitude,
      longitude: geoCoordinates.longitude,
    },
    contactPoint: site.phones.map((phone) => ({
      "@type": "ContactPoint",
      telephone: phone.e164,
      contactType: "customer service",
      areaServed: "CY",
      availableLanguage: ["Turkish", "English", "Russian"],
    })),
    areaServed: [
      { "@type": "City", name: "Lefkoşa" },
      { "@type": "City", name: "Girne" },
      { "@type": "City", name: "Gazimağusa" },
      { "@type": "City", name: "İskele" },
      { "@type": "City", name: "Güzelyurt" },
      { "@type": "City", name: "Lefke" },
      { "@type": "AdministrativeArea", name: "Northern Cyprus" },
      { "@type": "Country", name: "Cyprus" },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
      description:
        locale === "tr"
          ? "7/24 acil haşere ve kemirgen ilaçlama"
          : locale === "ru"
            ? "Круглосуточная экстренная дезинсекция"
            : "24/7 emergency pest and rodent control",
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[], locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${site.url}${localizedPath(locale, items[items.length - 1]?.path ?? "")}#breadcrumb`,
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${localizedPath(locale, item.path)}`,
    })),
  };
}

export function homeBreadcrumbJsonLd(locale: Locale) {
  const siteLoc = getSiteLocale(locale);
  return breadcrumbJsonLd([{ name: siteLoc.name, path: "" }], locale);
}

export function serviceJsonLd(service: Service, locale: Locale) {
  const url = `${site.url}${localizedPath(locale, `/hizmetler/${service.slug}`)}`;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: service.title,
    description: service.metaDescription,
    serviceType: service.shortTitle,
    provider: { "@id": `${site.url}/#organization` },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Northern Cyprus",
    },
    url,
  };
}

export function howToJsonLd(service: Service, locale: Locale) {
  const siteLoc = getSiteLocale(locale);
  const url = `${site.url}${localizedPath(locale, `/hizmetler/${service.slug}`)}`;
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${url}#howto`,
    name: `${service.shortTitle} — ${siteLoc.name}`,
    description: service.metaDescription,
    step: service.processSteps.map((text, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: text.split(/[.!?]/)[0]?.slice(0, 80) || text.slice(0, 80),
      text,
    })),
  };
}

export function cityPlaceJsonLd(city: CityLanding, locale: Locale) {
  const url = `${site.url}${localizedPath(locale, `/bolgeler/${city.slug}`)}`;
  return {
    "@context": "https://schema.org",
    "@type": "Place",
    "@id": `${url}#place`,
    name: city.name,
    description: city.metaDescription,
    url,
    containedInPlace: { "@type": "AdministrativeArea", name: "Northern Cyprus" },
    geo: {
      "@type": "GeoCoordinates",
      latitude: geoCoordinates.latitude,
      longitude: geoCoordinates.longitude,
    },
  };
}

export function cityServiceJsonLd(city: CityLanding, locale: Locale) {
  const siteLoc = getSiteLocale(locale);
  const url = `${site.url}${localizedPath(locale, `/bolgeler/${city.slug}`)}`;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: city.title,
    description: city.metaDescription,
    serviceType: siteLoc.activityArea,
    areaServed: {
      "@type": "City",
      name: city.name,
      containedInPlace: { "@type": "AdministrativeArea", name: "Northern Cyprus" },
    },
    provider: { "@id": `${site.url}/#organization` },
    url,
  };
}

export function cityHowToJsonLd(
  city: CityLanding,
  locale: Locale,
  steps: string[]
) {
  const siteLoc = getSiteLocale(locale);
  const url = `${site.url}${localizedPath(locale, `/bolgeler/${city.slug}`)}`;
  const label =
    locale === "en" ? "Pest control in" : locale === "ru" ? "Дезинсекция в" : "İlaçlama süreci —";
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${url}#howto`,
    name: `${label} ${city.name} — ${siteLoc.name}`,
    description: city.intro,
    step: steps.map((text, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: text.split(/[.!?]/)[0]?.slice(0, 80) || text.slice(0, 80),
      text,
    })),
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[], pageUrl?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    ...(pageUrl ? { "@id": `${pageUrl}#faq`, url: pageUrl } : {}),
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

function estimateWordCount(text: string): number {
  return text.split(/\s+/).filter(Boolean).length;
}

export function blogPostJsonLd(post: BlogPost, locale: Locale) {
  const url = `${site.url}${localizedPath(locale, `/blog/${post.slug}`)}`;
  const bodyText = post.sections
    .flatMap((s) => [...s.paragraphs, ...(s.bullets ?? [])])
    .join(" ");
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: post.title,
    description: post.excerpt,
    abstract: post.excerpt,
    datePublished: post.date,
    dateModified: post.modified ?? post.date,
    inLanguage: schemaLanguage[locale],
    url,
    image: getBlogOgImageUrl(post, locale),
    author: { "@id": `${site.url}/#organization` },
    publisher: { "@id": `${site.url}/#organization` },
    mainEntityOfPage: { "@id": `${url}#webpage` },
    wordCount: estimateWordCount(bodyText),
    articleBody: bodyText.slice(0, 5000),
    keywords: post.serviceSlug,
  };
}

export function itemListJsonLd(
  name: string,
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    numberOfItems: items.length,
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      url: item.url,
    })),
  };
}

export function contactPageJsonLd(locale: Locale) {
  const siteLoc = getSiteLocale(locale);
  const url = `${site.url}${localizedPath(locale, "/teklif")}`;
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${url}#contact`,
    name: `${siteLoc.name} — ${locale === "en" ? "Free inspection" : locale === "ru" ? "Бесплатный осмотр" : "Ücretsiz keşif"}`,
    url,
    description: siteLoc.activityArea,
    mainEntity: { "@id": `${site.url}/#organization` },
    isPartOf: { "@id": `${site.url}/#website` },
  };
}

export function blogIndexJsonLd(locale: Locale, posts: { title: string; slug: string }[]) {
  const siteLoc = getSiteLocale(locale);
  const url = `${site.url}${localizedPath(locale, "/blog")}`;
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${url}#blog`,
    name: `${siteLoc.name} — Blog`,
    url,
    publisher: { "@id": `${site.url}/#organization` },
    blogPost: posts.slice(0, 10).map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: `${site.url}${localizedPath(locale, `/blog/${p.slug}`)}`,
    })),
  };
}

/** Blog bölüm başlıklarından FAQ (soru işaretli başlıklar) */
export function faqsFromBlogSections(
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[]
): { q: string; a: string }[] {
  return sections
    .filter((s) => s.heading.includes("?"))
    .map((s) => {
      const parts = [...s.paragraphs, ...(s.bullets ?? [])];
      return {
        q: s.heading,
        a: parts.join(" ").slice(0, 600),
      };
    })
    .filter((f) => f.a.length > 20)
    .slice(0, 6);
}
