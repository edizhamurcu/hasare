import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContactSlot } from "@/components/FloatingContactSlot";
import { AnalyticsBody, AnalyticsHead } from "@/components/Analytics";
import { ConversionTracker } from "@/components/ConversionTracker";
import { JsonLd } from "@/components/JsonLd";
import { jsonLdGraph, localBusinessJsonLd, websiteJsonLd } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";
import { sanitizeGa4Id, sanitizeGoogleAdsId, sanitizeGtmId } from "@/lib/security";
import { getSiteLocale } from "@/lib/site-locale";
import { site } from "@/lib/site";
import { routing, type Locale } from "@/i18n/config";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const loc = locale as Locale;
  const t = await getTranslations({ locale, namespace: "Meta" });
  const siteLoc = getSiteLocale(loc);

  return buildMetadata({
    title: `${siteLoc.name} — ${siteLoc.activityArea}`,
    description: t("defaultDescription", {
      name: siteLoc.name,
      activity: siteLoc.activityArea,
      phones: siteLoc.phonesDisplay,
    }),
    path: "",
    locale: loc,
  });
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const t = await getTranslations("Common");
  const usesAnalytics = Boolean(
    sanitizeGtmId(site.gtm) || sanitizeGa4Id(site.ga4) || sanitizeGoogleAdsId(site.googleAds)
  );

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        {usesAnalytics ? (
          <>
            <link rel="preconnect" href="https://www.googletagmanager.com" />
            <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
          </>
        ) : null}
        <AnalyticsHead />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          {t("skipLink")}
        </a>
        <JsonLd data={jsonLdGraph(websiteJsonLd(locale as Locale), localBusinessJsonLd(locale as Locale))} />
        <AnalyticsBody />
        {usesAnalytics ? <ConversionTracker /> : null}
        <Header />
        <main id="main-content" className="pb-28 md:pb-0 safe-area-pad">
          {children}
        </main>
        <Footer />
        <FloatingContactSlot />
      </body>
    </html>
  );
}
