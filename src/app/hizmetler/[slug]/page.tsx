import { notFound } from "next/navigation";
import { Hero } from "@/components/Hero";
import { CtaBar } from "@/components/CtaBar";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { getService, services } from "@/lib/services";
import { buildMetadata } from "@/lib/metadata";
import { serviceJsonLd, faqJsonLd } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.title,
    description: service.metaDescription,
    path: `/hizmetler/${service.slug}`,
    keywords: service.keywords,
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <JsonLd data={[serviceJsonLd(service), faqJsonLd(service.faqs)]} />
      <Hero title={service.title} subtitle={service.heroSubtitle} />
      <article className="mx-auto max-w-3xl px-4 py-12 prose prose-gray">
        <h2 className="text-xl font-bold">Uygulama süreci</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5">
          {service.processSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <h2 className="mt-10 text-xl font-bold">Fiyat aralığı</h2>
        <p className="mt-2 text-gray-700">{service.priceRange}</p>
        <p className="mt-4 text-sm text-gray-500">
          Kesin fiyat ücretsiz keşif sonrası verilir. Google Ads kalite puanı için landing
          sayfası–anahtar kelime uyumu sağlanır.
        </p>
      </article>
      <FaqSection faqs={service.faqs} />
      <CtaBar context={service.shortTitle} />
    </>
  );
}
