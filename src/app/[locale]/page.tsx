import { getTranslations, setRequestLocale } from "next-intl/server";
import { LocaleLink as Link } from "@/components/LocaleLink";
import { JsonLd } from "@/components/JsonLd";
import { Hero } from "@/components/Hero";
import { FaqSection } from "@/components/FaqSection";
import { GeoSummary } from "@/components/GeoSummary";
import { homeBreadcrumbJsonLd, itemListJsonLd, pageJsonLdGraph, webPageJsonLd, faqJsonLd } from "@/lib/schema";
import { CtaBar } from "@/components/CtaBar";
import { TrustSignals } from "@/components/TrustSignals";
import { AboutSection } from "@/components/AboutSection";
import { PestShowcase } from "@/components/PestShowcase";
import { ServiceCard } from "@/components/ServiceCard";
import { getHomeFeaturedServices } from "@/lib/homepage-featured";
import { getCities } from "@/lib/cities";
import { buildMetadata, localizedPath } from "@/lib/metadata";
import { getSiteLocale } from "@/lib/site-locale";
import { site } from "@/lib/site";
import { routing, type Locale } from "@/i18n/config";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const loc = locale as Locale;
  const t = await getTranslations({ locale, namespace: "Home" });
  const siteLoc = getSiteLocale(loc);
  return buildMetadata({
    title: t("metaTitle"),
    description: t("metaDesc", {
      name: siteLoc.name,
      activity: siteLoc.activityArea,
      phones: siteLoc.phonesDisplay,
    }),
    path: "",
    locale: loc,
  });
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const loc = locale as Locale;
  const t = await getTranslations("Home");
  const siteLoc = getSiteLocale(loc);
  const featuredServices = getHomeFeaturedServices(loc);
  const cities = getCities(loc);

  const homeFaqs = [
    { q: t("faq1q"), a: t("faq1a") },
    { q: t("faq2q", { name: siteLoc.name }), a: t("faq2a") },
    { q: t("faq3q"), a: t("faq3a") },
    { q: t("faq4q"), a: t("faq4a") },
  ];

  const geoSummary = t("geoSummary", { name: siteLoc.name });
  const homeUrl = `${site.url}${localizedPath(loc, "")}`;

  return (
    <>
      <JsonLd
        data={pageJsonLdGraph(
          homeBreadcrumbJsonLd(loc),
          itemListJsonLd(
            t("servicesTitle"),
            featuredServices.map((s) => ({
              name: s.title,
              url: `${site.url}${localizedPath(loc, `/hizmetler/${s.slug}`)}`,
            }))
          ),
          itemListJsonLd(
            t("regionsTitle"),
            cities.map((c) => ({
              name: c.name,
              url: `${site.url}${localizedPath(loc, `/bolgeler/${c.slug}`)}`,
            }))
          ),
          faqJsonLd(homeFaqs, homeUrl),
          webPageJsonLd(
            "",
            loc,
            t("metaTitle"),
            t("metaDesc", {
              name: siteLoc.name,
              activity: siteLoc.activityArea,
              phones: siteLoc.phonesDisplay,
            }),
            ["#hero-summary", "h1"]
          )
        )}
      />
      <GeoSummary summary={geoSummary} />
      <Hero
        title={t("heroTitle")}
        subtitle={t("heroSubtitle", {
          name: siteLoc.name,
          activity: siteLoc.activityArea,
        })}
        subtitleId="hero-summary"
      />
      <PestShowcase />
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold text-gray-900">{t("servicesTitle")}</h2>
          <p className="mt-2 text-gray-600">{t("servicesIntro")}</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
          <Link locale={loc}
            href="/hizmetler"
            className="mt-8 inline-block font-semibold text-brand-600 hover:underline"
          >
            {t("allServices")}
          </Link>
        </div>
      </section>
      <section className="bg-brand-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold text-gray-900">{t("regionsTitle")}</h2>
          <p className="mt-2 max-w-2xl text-gray-600">{t("regionsIntro")}</p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cities.map((c) => (
              <li key={c.slug}>
                <Link locale={loc}
                  href={`/bolgeler/${c.slug}`}
                  className="block rounded-xl border border-brand-200 bg-white p-4 font-semibold text-brand-800 hover:border-brand-400"
                >
                  {t("regionLink", { name: c.name })}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <AboutSection />
      <TrustSignals />
      <FaqSection faqs={homeFaqs} />
      <CtaBar />
    </>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
