import { getLocale, getTranslations } from "next-intl/server";
import { LocaleLink as Link } from "@/components/LocaleLink";
import { telHref, whatsappHref } from "@/lib/links";
import { externalLinkRel } from "@/lib/external-links";
import { getHeroImage } from "@/lib/images";
import type { Locale } from "@/i18n/config";

type HeroProps = {
  title: string;
  subtitle: string;
  /** Speakable / GEO hedefi için id */
  subtitleId?: string;
  showDefaultCtas?: boolean;
  showBackgroundImage?: boolean;
  imageSrc?: string;
  imageAlt?: string;
};

export async function Hero({
  title,
  subtitle,
  subtitleId,
  showDefaultCtas = true,
  showBackgroundImage = false,
  imageSrc,
  imageAlt,
}: HeroProps) {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("Hero");
  const tvp = await getTranslations("valueProps");
  const valueProps = ["0", "1", "2", "3"].map((k) => tvp(k));
  const defaultHero = getHeroImage(locale);

  const bg = showBackgroundImage
    ? { src: imageSrc ?? defaultHero.src, alt: imageAlt ?? defaultHero.alt }
    : null;

  return (
    <section className="relative min-h-[320px] overflow-hidden bg-gradient-to-br from-brand-900 via-brand-700 to-brand-600 text-white sm:min-h-[380px] md:min-h-[440px]">
      {bg && (
        <div className="absolute inset-0 z-0" aria-hidden>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={bg.src}
            alt=""
            loading="lazy"
            decoding="async"
            fetchPriority="low"
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-900/92 via-brand-800/80 to-brand-700/70" />
        </div>
      )}
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-12 sm:py-16 md:py-24">
        <p className="mb-3 inline-block rounded-full bg-white/25 px-3 py-1 text-xs font-medium text-white sm:text-sm">
          {t("badge")}
        </p>
        <h1 className="max-w-3xl text-2xl font-bold leading-tight sm:text-3xl md:text-5xl">
          {title}
        </h1>
        <p
          id={subtitleId}
          className="mt-4 max-w-2xl text-base leading-relaxed text-brand-50 sm:text-lg"
        >
          {subtitle}
        </p>
        {showDefaultCtas && (
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={telHref()} className="btn-accent w-full shadow-lg sm:w-auto">
              {t("callNow")}
            </a>
            <a
              href={whatsappHref()}
              target="_blank"
              rel={externalLinkRel}
              className="btn-accent w-full shadow-lg sm:w-auto"
            >
              {t("whatsappQuote")}
            </a>
            <Link locale={locale} href="/teklif" className="btn-accent w-full sm:w-auto">
              {t("freeInspection")}
            </Link>
          </div>
        )}
        <ul className="mt-8 flex flex-wrap gap-2 sm:mt-10 sm:gap-3">
          {valueProps.map((v) => (
            <li
              key={v}
              className="rounded-lg bg-white/10 px-2.5 py-1 text-xs font-medium backdrop-blur sm:px-3 sm:py-1.5 sm:text-sm"
            >
              {v}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
