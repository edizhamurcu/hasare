import { getTranslations, setRequestLocale } from "next-intl/server";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceCard } from "@/components/ServiceCard";
import { Hero } from "@/components/Hero";
import { CtaBar } from "@/components/CtaBar";
import { GeoSummary } from "@/components/GeoSummary";
import { JsonLd } from "@/components/JsonLd";
import { getServices } from "@/lib/services";
import { FaqSection } from "@/components/FaqSection";
import { buildMetadata, localizedPath } from "@/lib/metadata";
import { itemListJsonLd, pageJsonLdGraph, webPageJsonLd, faqJsonLd } from "@/lib/schema";
import { getSiteLocale } from "@/lib/site-locale";
import { site } from "@/lib/site";
import { routing, type Locale } from "@/i18n/config";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ServicesPage" });
  return buildMetadata({
    title: t("metaTitle"),
    description: t("metaDesc"),
    path: "/hizmetler",
    locale: locale as Locale,
  });
}

export default async function ServicesIndexPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const loc = locale as Locale;
  const t = await getTranslations("ServicesPage");
  const siteLoc = getSiteLocale(loc);
  const services = getServices(loc);

  const indexFaqs = [
    { q: t("faq1q"), a: t("faq1a") },
    { q: t("faq2q"), a: t("faq2a") },
  ];
  const pageUrl = `${site.url}${localizedPath(loc, "/hizmetler")}`;

  return (
    <>
      <JsonLd
        data={pageJsonLdGraph(
          itemListJsonLd(
            t("heroTitle"),
            services.map((s) => ({
              name: s.title,
              url: `${site.url}${localizedPath(loc, `/hizmetler/${s.slug}`)}`,
            }))
          ),
          faqJsonLd(indexFaqs, pageUrl),
          webPageJsonLd("/hizmetler", loc, t("metaTitle"), t("metaDesc"), [
            "#services-summary",
            "h1",
          ])
        )}
      />
      <GeoSummary summary={`${siteLoc.name} — ${t("metaDesc")}`} />
      <Breadcrumbs items={[{ label: t("breadcrumb"), path: "/hizmetler" }]} />
      <Hero
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
        subtitleId="services-summary"
      />
      <section className="py-12 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>
      <FaqSection faqs={indexFaqs} />
      <CtaBar context={t("breadcrumb")} />
    </>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
