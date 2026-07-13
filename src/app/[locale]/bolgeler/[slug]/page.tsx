import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { LocaleLink as Link } from "@/components/LocaleLink";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Hero } from "@/components/Hero";
import { CtaBar } from "@/components/CtaBar";
import { GeoSummary } from "@/components/GeoSummary";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import { getCities, getCity } from "@/lib/cities";
import { buildMetadata } from "@/lib/metadata";
import {
  cityHowToJsonLd,
  cityPlaceJsonLd,
  cityServiceJsonLd,
  faqJsonLd,
  pageJsonLdGraph,
  webPageJsonLd,
} from "@/lib/schema";
import { relatedServicesForCity } from "@/lib/related";
import { routing, type Locale } from "@/i18n/config";
import { localizedPath } from "@/lib/metadata";
import { site } from "@/lib/site";

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getCities(locale).map((c) => ({ locale, slug: c.slug }))
  );
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  const city = getCity(slug, locale as Locale);
  if (!city) return {};
  return buildMetadata({
    title: city.title,
    description: city.metaDescription,
    path: `/bolgeler/${city.slug}`,
    locale: locale as Locale,
  });
}

export default async function CityPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const loc = locale as Locale;
  const t = await getTranslations("RegionDetail");
  const tRegions = await getTranslations("RegionsPage");
  const city = getCity(slug, loc);
  if (!city) notFound();

  const path = `/bolgeler/${city.slug}`;
  const allCities = getCities(loc);
  const cityFaqs = [
    ...city.faqs,
    { q: t("genericFaqQ"), a: t("genericFaqA", { name: city.name }) },
  ];
  const howToSteps = [t("howTo1"), t("howTo2"), t("howTo3")];
  const pageUrl = `${site.url}${localizedPath(loc, path)}`;

  return (
    <>
      <JsonLd
        data={pageJsonLdGraph(
          cityPlaceJsonLd(city, loc),
          cityServiceJsonLd(city, loc),
          cityHowToJsonLd(city, loc, howToSteps),
          webPageJsonLd(path, loc, city.title, city.metaDescription, ["#city-summary", "h1"]),
          faqJsonLd(cityFaqs, pageUrl)
        )}
      />
      <Breadcrumbs
        items={[
          { label: tRegions("breadcrumb"), path: "/bolgeler", href: "/bolgeler" },
          { label: city.name, path },
        ]}
      />
      <Hero title={city.title} subtitle={city.intro} subtitleId="city-summary" />
      <GeoSummary summary={`${city.title}. ${city.intro}`} />
      <section className="mx-auto max-w-3xl px-4 py-10">
        <h2 className="text-xl font-bold text-gray-900">{t("neighborhoodsTitle")}</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {city.neighborhoods.map((n) => (
            <li key={n}>
              <span className="inline-flex min-h-[40px] items-center rounded-full bg-brand-50 px-3 py-1 text-sm text-brand-800">
                {n}
              </span>
            </li>
          ))}
        </ul>
        <h2 className="mt-10 text-xl font-bold text-gray-900">
          {t("popularServices")} — {city.name}
        </h2>
        <ul className="mt-4 space-y-2">
          {relatedServicesForCity(loc, undefined, 6).map((link) => (
            <li key={link.href}>
              <Link locale={loc}
                href={link.href}
                className="inline-flex min-h-[44px] items-center font-medium text-brand-600 hover:underline"
              >
                {t("serviceLink", { name: link.label })}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <FaqSection faqs={cityFaqs} />
      <RelatedLinks
        locale={loc}
        title={t("relatedRegions")}
        links={allCities
          .filter((c) => c.slug !== city.slug)
          .slice(0, 5)
          .map((c) => ({ href: `/bolgeler/${c.slug}`, label: c.name }))}
      />
      <CtaBar context={`${city.name}`} />
    </>
  );
}
