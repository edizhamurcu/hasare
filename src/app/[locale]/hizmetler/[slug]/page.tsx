import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Hero } from "@/components/Hero";
import { OptimizedImage } from "@/components/OptimizedImage";
import { getServiceImage } from "@/lib/images";
import { CtaBar } from "@/components/CtaBar";
import { QuoteCtaInline } from "@/components/QuoteCtaInline";
import { GeoSummary } from "@/components/GeoSummary";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import { ServiceVideo } from "@/components/ServiceVideo";
import { getService, getServices } from "@/lib/services";
import { buildMetadata, localizedPath } from "@/lib/metadata";
import {
  howToJsonLd,
  pageJsonLdGraph,
  serviceJsonLd,
  webPageJsonLd,
  faqJsonLd,
  videoObjectJsonLd,
} from "@/lib/schema";
import { getServiceScopeNote } from "@/lib/content/proposal-terms";
import { relatedCitiesForServiceLinks, relatedServicesForService } from "@/lib/related";
import { routing, type Locale } from "@/i18n/config";
import { site } from "@/lib/site";

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getServices(locale).map((s) => ({ locale, slug: s.slug }))
  );
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  const service = getService(slug, locale as Locale);
  if (!service) return {};
  return buildMetadata({
    title: service.title,
    description: service.metaDescription,
    path: `/hizmetler/${service.slug}`,
    locale: locale as Locale,
  });
}

export default async function ServicePage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const loc = locale as Locale;
  const t = await getTranslations("ServiceDetail");
  const service = getService(slug, loc);
  if (!service) notFound();

  const path = `/hizmetler/${service.slug}`;
  const image = getServiceImage(service.slug, loc);
  const scopeNote = getServiceScopeNote(service.slug, loc);
  const pageUrl = `${site.url}${localizedPath(loc, path)}`;

  return (
    <>
      <JsonLd
        data={pageJsonLdGraph(
          serviceJsonLd(service, loc),
          howToJsonLd(service, loc),
          webPageJsonLd(path, loc, service.title, service.metaDescription, [
            "#service-summary",
            "h1",
          ]),
          ...(service.faqs.length > 0 ? [faqJsonLd(service.faqs, pageUrl)] : []),
          ...(service.video ? [videoObjectJsonLd(service.video, pageUrl, loc)] : [])
        )}
      />
      <Breadcrumbs
        items={[
          {
            label: (await getTranslations("ServicesPage"))("breadcrumb"),
            path: "/hizmetler",
            href: "/hizmetler",
          },
          { label: service.shortTitle, path },
        ]}
      />
      <Hero
        title={service.title}
        subtitle={service.heroSubtitle}
        subtitleId="service-summary"
        showBackgroundImage
        imageSrc={image.src}
        imageAlt={image.alt}
      />
      <div className="mx-auto max-w-3xl px-4 -mt-8 relative z-20">
        <div className="overflow-hidden rounded-2xl border-4 border-white shadow-xl aspect-[16/10] relative bg-gray-100">
          <OptimizedImage
            image={image}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover p-0"
          />
        </div>
      </div>
      <GeoSummary summary={`${service.title}. ${service.heroSubtitle}`} />
      <article className="prose-content mx-auto max-w-3xl px-4 py-10">
        {service.intro?.length ? (
          <section aria-labelledby="service-about-title" className="space-y-4">
            <h2 id="service-about-title">{t("aboutTitle")}</h2>
            {service.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </section>
        ) : null}
        {service.video ? (
          <ServiceVideo
            video={service.video}
            heading={t("videoTitle")}
            fallbackText={t("videoFallback")}
          />
        ) : null}
        <h2>{t("processTitle")}</h2>
        <ol>
          {service.processSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <QuoteCtaInline context={service.shortTitle} className="mt-8" />
        {scopeNote ? (
          <p
            role="note"
            className="mt-4 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950"
          >
            {scopeNote}
          </p>
        ) : null}
      </article>
      <FaqSection faqs={service.faqs} />
      <RelatedLinks
        locale={loc}
        title={t("relatedRegions")}
        links={relatedCitiesForServiceLinks(loc, (name) => t("regionLabel", { name }))}
      />
      <RelatedLinks
        locale={loc}
        title={t("relatedServices")}
        links={relatedServicesForService(loc, service.slug)}
      />
      <CtaBar context={service.shortTitle} />
    </>
  );
}
