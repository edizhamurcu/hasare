import { getTranslations, setRequestLocale } from "next-intl/server";
import { LocaleLink as Link } from "@/components/LocaleLink";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqSection } from "@/components/FaqSection";
import { GeoSummary } from "@/components/GeoSummary";
import { JsonLd } from "@/components/JsonLd";
import { CtaBar } from "@/components/CtaBar";
import { getSiteFaqs } from "@/lib/content/faq-site";
import { buildMetadata } from "@/lib/metadata";
import { faqJsonLd, pageJsonLdGraph, webPageJsonLd } from "@/lib/schema";
import { localizedPath } from "@/lib/metadata";
import { site } from "@/lib/site";
import { getSiteLocale } from "@/lib/site-locale";
import { routing, type Locale } from "@/i18n/config";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "FaqPage" });
  return buildMetadata({
    title: t("metaTitle"),
    description: t("metaDesc"),
    path: "/sss",
    locale: locale as Locale,
  });
}

export default async function FaqPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const loc = locale as Locale;
  const t = await getTranslations("FaqPage");
  const tNav = await getTranslations("Nav");
  const faqs = getSiteFaqs(loc);
  const siteLoc = getSiteLocale(loc);

  return (
    <>
      <JsonLd
        data={pageJsonLdGraph(
          faqJsonLd(faqs, `${site.url}${localizedPath(loc, "/sss")}`),
          webPageJsonLd("/sss", loc, t("metaTitle"), t("metaDesc"), ["#faq-intro", "h1"])
        )}
      />
      <GeoSummary summary={`${siteLoc.name} — ${t("metaDesc")}`} />
      <Breadcrumbs items={[{ label: t("breadcrumb"), path: "/sss", href: "/sss" }]} />
      <section className="mx-auto max-w-3xl px-4 pt-10 pb-4">
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">{t("title")}</h1>
        <p id="faq-intro" className="mt-3 text-gray-600 leading-relaxed">
          {t("intro")}
        </p>
        <p className="mt-4">
          <Link locale={loc} href="/teklif" className="font-semibold text-brand-600 hover:underline">
            {tNav("quote")} →
          </Link>
        </p>
      </section>
      <FaqSection faqs={faqs} title={t("listTitle")} />
      <CtaBar context={t("breadcrumb")} />
    </>
  );
}
