import Link from "next/link";
import { Hero } from "@/components/Hero";
import { CtaBar } from "@/components/CtaBar";
import { TrustSignals } from "@/components/TrustSignals";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/services";
import { cities } from "@/lib/cities";
import { strategyMix } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero
        title="KKTC'nin En Hızlı ve Garantili Haşere İlaçlama Hizmeti"
        subtitle="Google'da şehir ve hizmet bazlı aramalarda görünür olun. Dönüşüm odaklı ana sayfa, Local SEO landing sayfaları ve AI arama için SSS + yapısal veri."
      />
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold text-gray-900">Hizmetlerimiz</h2>
          <p className="mt-2 text-gray-600">
            Her hizmet ayrı SEO sayfası — Schema, SSS ve fiyat aralığı ile AI Overviews uyumlu.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
          <Link
            href="/hizmetler"
            className="mt-8 inline-block font-semibold text-brand-600 hover:underline"
          >
            Tüm hizmetler →
          </Link>
        </div>
      </section>
      <section className="bg-brand-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold text-gray-900">Şehir bazlı ilaçlama</h2>
          <p className="mt-2 max-w-2xl text-gray-600">
            Lefkoşa böcek ilaçlama, Girne böcek ilaçlama gibi aramalarda tek başına SEO gücünü
            3–5 kat artırır.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cities.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/bolgeler/${c.slug}`}
                  className="block rounded-xl border border-brand-200 bg-white p-4 font-semibold text-brand-800 hover:border-brand-400"
                >
                  {c.name} böcek ilaçlama →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <TrustSignals />
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold text-gray-900">Önerilen pazarlama karması (2026)</h2>
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="rounded-xl bg-gray-100 px-6 py-4">
              <p className="text-3xl font-bold text-brand-700">{strategyMix.googleAds}%</p>
              <p className="text-sm text-gray-600">Google Ads</p>
            </div>
            <div className="rounded-xl bg-gray-100 px-6 py-4">
              <p className="text-3xl font-bold text-brand-700">{strategyMix.localSeo}%</p>
              <p className="text-sm text-gray-600">Local SEO</p>
            </div>
            <div className="rounded-xl bg-gray-100 px-6 py-4">
              <p className="text-3xl font-bold text-brand-700">{strategyMix.aiSeo}%</p>
              <p className="text-sm text-gray-600">AI SEO (SSS + Schema)</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            İlk haftadan Ads ile müşteri; 3–6 ayda organik liderlik hedefi. Günlük 10–20 EUR
            başlangıç bütçesi planı dokümante edildi.
          </p>
        </div>
      </section>
      <CtaBar />
    </>
  );
}
