import Link from "next/link";
import { Hero } from "@/components/Hero";
import { CtaBar } from "@/components/CtaBar";
import { cities } from "@/lib/cities";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "KKTC İlaçlama Bölgeleri",
  description: "Lefkoşa, Girne, Gazimağusa, İskele ve tüm KKTC için şehir bazlı landing sayfaları.",
  path: "/bolgeler",
  keywords: ["lefkosa böcek ilaçlama", "girne ilaclama"],
});

export default function RegionsPage() {
  return (
    <>
      <Hero
        title="Şehir Bazlı İlaçlama"
        subtitle="Local SEO'nun en kritik parçası: her şehir için ayrı URL ve benzersiz içerik."
      />
      <section className="py-16">
        <ul className="mx-auto grid max-w-6xl gap-4 px-4 sm:grid-cols-2">
          {cities.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/bolgeler/${c.slug}`}
                className="block rounded-2xl border border-gray-200 p-6 hover:border-brand-400"
              >
                <h2 className="text-xl font-bold text-brand-800">{c.title}</h2>
                <p className="mt-2 text-sm text-gray-600">{c.metaDescription}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <CtaBar context="bölge seçimi" />
    </>
  );
}
