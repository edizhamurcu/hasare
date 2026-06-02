import { notFound } from "next/navigation";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { CtaBar } from "@/components/CtaBar";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { cities, getCity } from "@/lib/cities";
import { services } from "@/lib/services";
import { buildMetadata } from "@/lib/metadata";
import { cityPlaceJsonLd, faqJsonLd } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return cities.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const city = getCity(slug);
  if (!city) return {};
  return buildMetadata({
    title: city.title,
    description: city.metaDescription,
    path: `/bolgeler/${city.slug}`,
    keywords: city.keywords,
  });
}

export default async function CityPage({ params }: Props) {
  const { slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();

  return (
    <>
      <JsonLd data={[cityPlaceJsonLd(city), faqJsonLd(city.faqs)]} />
      <Hero title={city.title} subtitle={city.intro} />
      <section className="mx-auto max-w-3xl px-4 py-12">
        <h2 className="text-xl font-bold">Hizmet verdiğimiz mahalleler</h2>
        <p className="mt-3 flex flex-wrap gap-2">
          {city.neighborhoods.map((n) => (
            <span
              key={n}
              className="rounded-full bg-brand-50 px-3 py-1 text-sm text-brand-800"
            >
              {n}
            </span>
          ))}
        </p>
        <h2 className="mt-10 text-xl font-bold">Popüler hizmetler — {city.name}</h2>
        <ul className="mt-4 space-y-2">
          {services.slice(0, 5).map((s) => (
            <li key={s.slug}>
              <Link
                href={`/hizmetler/${s.slug}`}
                className="font-medium text-brand-600 hover:underline"
              >
                {s.shortTitle} ilaçlama
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <FaqSection faqs={city.faqs} />
      <CtaBar context={`${city.name} ilaçlama`} />
    </>
  );
}
