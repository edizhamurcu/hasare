import type { Locale } from "@/i18n/config";
import { getService } from "./services";

/** Görsel yolları ve SEO alt metinleri — public/images (gerçek fotoğraflar) */
export type ImageVariant = {
  width: number;
  src: string;
};

export type ImageMeta = {
  src: string;
  alt: string;
  width: number;
  height: number;
  variants?: ImageVariant[];
};

/** Hizmet kartı / showcase için responsive WebP genişlikleri */
export const SERVICE_IMAGE_WIDTHS = [384, 640, 768] as const;

const heroAlts: Record<Locale, string> = {
  tr: "Kıbrıs Haşere ilaçlama — KKTC profesyonel haşere ve kemirgen ilaçlaması",
  en: "Cyprus Pest Control — professional pest and rodent control in Northern Cyprus",
  ru: "Кипрская дезинсекция — профессиональная борьба с вредителями на Северном Кипре",
};

export function getHeroImage(locale: Locale = "tr"): ImageMeta {
  return {
    src: "/images/hero/landing.jpg",
    alt: heroAlts[locale],
    width: 1920,
    height: 800,
  };
}

export const heroImage = getHeroImage("tr");

const pestAltsTr: Record<string, string> = {
  "hamambocegi-ilaclama": "Hamamböceği ilaçlama — profesyonel müdahale KKTC",
  "fare-ilaclama": "Fare ilaçlama ve kemirgen kontrolü Lefkoşa",
  "karinca-ilaclama": "Karınca istilası — konut ve iş yerlerinde profesyonel müdahale",
  "sivrisinek-ilaclama": "Sivrisinek ilaçlama — yaz sezonu uçkun ve larva kontrolü KKTC",
  "bocek-ilaclama": "Böcek ilaçlama — genel haşere kontrolü ve konut müdahalesi",
  "termit-ilaclama": "Termit hasarı ve yapısal koruma — ahşap elemanlarda müdahale",
  "akrep-ilaclama": "Akrep ilaçlama — KKTC'de acil müdahale",
  "dezenfeksiyon": "Dezenfeksiyon — ULV sisleme ve hijyen uygulaması KKTC",
  "ev-ilaclama": "Ev ve konut ilaçlama — uzman ekip yerinde uygulama",
  "is-yeri-ilaclama": "Restoran ve iş yeri ilaçlama — ticari tesislerde hijyen",
  "hastane-ilaclama": "Hastane ilaçlama — sağlık tesislerinde hijyen standartlarına uygun müdahale",
  "okul-ilaclama": "Okul ilaçlama — eğitim kurumlarında güvenli haşere kontrolü",
  "fabrika-ilaclama": "Fabrika ilaçlama — endüstriyel depo ve üretim alanlarında haşere yönetimi",
  "firin-ilaclama": "Fırın ilaçlama — ticari fırın ve gıda üretim tesislerinde haşere kontrolü",
  "gemi-ilaclama": "Gemi ve liman ilaçlama — deniz ticaretinde haşere kontrolü",
};

export function serviceImageVariants(slug: string): ImageVariant[] {
  const base = `/images/services/${slug}`;
  return SERVICE_IMAGE_WIDTHS.map((width) => ({
    width,
    src: `${base}-${width}.webp`,
  }));
}

export function getServiceImage(slug: string, locale: Locale = "tr"): ImageMeta {
  const fromService = getService(slug, locale);
  const alt =
    fromService?.title ??
    pestAltsTr[slug] ??
    (locale === "en"
      ? "Professional pest control Northern Cyprus"
      : locale === "ru"
        ? "Профессиональная дезинсекция Северный Кипр"
        : "KKTC profesyonel ilaçlama hizmeti");

  const variants = serviceImageVariants(slug);

  return {
    src: `${variants[1]?.src ?? `/images/services/${slug}.jpg`}`,
    alt,
    width: 640,
    height: 427,
    variants,
  };
}

export function getServiceImageWithFallback(slug: string): ImageMeta {
  return getServiceImage(slug);
}

/** Ana sayfada öne çıkan haşere türleri */
export const showcasePests = [
  "hamambocegi-ilaclama",
  "fare-ilaclama",
  "karinca-ilaclama",
  "sivrisinek-ilaclama",
  "bocek-ilaclama",
  "akrep-ilaclama",
] as const;
