import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { PhoneNumbers } from "@/components/PhoneNumbers";
import { QuoteForm } from "@/components/QuoteForm";
import { QuoteProposalGuide } from "@/components/QuoteProposalGuide";
import { GeoSummary } from "@/components/GeoSummary";
import { buildMetadata } from "@/lib/metadata";
import { contactPageJsonLd, pageJsonLdGraph, webPageJsonLd } from "@/lib/schema";
import { getSiteLocale } from "@/lib/site-locale";
import { routing, type Locale } from "@/i18n/config";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "QuotePage" });
  return buildMetadata({
    title: t("metaTitle"),
    description: t("metaDesc"),
    path: "/teklif",
    locale: locale as Locale,
  });
}

export default async function QuotePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const loc = locale as Locale;
  const t = await getTranslations("QuotePage");
  const tCommon = await getTranslations("Common");
  const siteLoc = getSiteLocale(loc);
  const messages = await getMessages();
  const formMessages = { Form: messages.Form as Record<string, string> };

  return (
    <>
      <JsonLd
        data={pageJsonLdGraph(
          contactPageJsonLd(loc),
          webPageJsonLd("/teklif", loc, t("metaTitle"), t("metaDesc"), [
            "#quote-summary",
            "h1",
          ])
        )}
      />
      <GeoSummary summary={`${siteLoc.name} — ${t("metaDesc")}`} />
      <Breadcrumbs items={[{ label: t("breadcrumb"), path: "/teklif" }]} />
      <Hero
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
        subtitleId="quote-summary"
        showDefaultCtas
      />
      <QuoteProposalGuide />
      <section className="mx-auto max-w-lg px-4 pb-16">
        <h2 className="text-center text-xl font-bold text-gray-900">{t("formTitle")}</h2>
        <p className="mt-2 text-center text-sm text-gray-600">{t("formIntro")}</p>
        <div className="mt-6">
          <NextIntlClientProvider messages={formMessages}>
            <QuoteForm locale={loc} />
          </NextIntlClientProvider>
        </div>
        <p className="mt-6 text-center text-sm">
          {tCommon("or")}{" "}
          <PhoneNumbers linkClassName="font-semibold text-brand-600 hover:underline" />
        </p>
      </section>
    </>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
