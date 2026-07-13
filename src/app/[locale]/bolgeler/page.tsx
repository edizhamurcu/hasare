import { getTranslations, setRequestLocale } from "next-intl/server";
import { LocaleLink as Link } from "@/components/LocaleLink";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { CtaBar } from "@/components/CtaBar";
import { GeoSummary } from "@/components/GeoSummary";
import { getCities } from "@/lib/cities";
import { buildMetadata, localizedPath } from "@/lib/metadata";
import { itemListJsonLd, pageJsonLdGraph, webPageJsonLd } from "@/lib/schema";
import { getSiteLocale } from "@/lib/site-locale";
import { site } from "@/lib/site";
import { routing, type Locale } from "@/i18n/config";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "RegionsPage" });
  return buildMetadata({
    title: t("metaTitle"),
    description: t("metaDesc"),
    path: "/bolgeler",
    locale: locale as Locale,
  });
}

export default async function RegionsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const loc = locale as Locale;
  const t = await getTranslations("RegionsPage");
  const siteLoc = getSiteLocale(loc);
  const cities = getCities(loc);
  return (
    <>
      <JsonLd
        data={pageJsonLdGraph(
          itemListJsonLd(
            t("heroTitle"),
            cities.map((c) => ({
              name: c.title,
              url: `${site.url}${localizedPath(loc, `/bolgeler/${c.slug}`)}`,
            }))
          ),
          webPageJsonLd("/bolgeler", loc, t("metaTitle"), t("metaDesc"), [
            "#regions-summary",
            "h1",
          ])
        )}
      />
      <GeoSummary summary={`${siteLoc.name} — ${t("metaDesc")}`} />
      <Breadcrumbs items={[{ label: t("breadcrumb"), path: "/bolgeler" }]} />
      <Hero title={t("heroTitle")} subtitle={t("heroSubtitle")} subtitleId="regions-summary" />
      <section className="py-12 sm:py-16">
        <ul className="mx-auto grid max-w-6xl gap-4 px-4 sm:grid-cols-2">
          {cities.map((c) => (
            <li key={c.slug}>
              <Link locale={loc}
                href={`/bolgeler/${c.slug}`}
                className="block min-h-[44px] rounded-2xl border border-gray-200 p-5 transition hover:border-brand-400 hover:shadow-sm sm:p-6"
              >
                <h2 className="text-lg font-bold text-brand-800 sm:text-xl">{c.title}</h2>
                <p className="mt-2 text-sm text-gray-600">{c.metaDescription}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <CtaBar context={t("breadcrumb")} />
    </>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
