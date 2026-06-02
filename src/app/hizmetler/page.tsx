import { ServiceCard } from "@/components/ServiceCard";
import { Hero } from "@/components/Hero";
import { CtaBar } from "@/components/CtaBar";
import { services } from "@/lib/services";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Haşere İlaçlama Hizmetleri KKTC",
  description:
    "Hamamböceği, fare, sivrisinek, termit ve daha fazlası için profesyonel ilaçlama sayfaları.",
  path: "/hizmetler",
  keywords: ["haşere ilaçlama", "böcek ilaçlama hizmetleri"],
});

export default function ServicesIndexPage() {
  return (
    <>
      <Hero
        title="Tüm İlaçlama Hizmetleri"
        subtitle="Her sayfa ayrı anahtar kelime kümesi, süreç adımları ve SSS ile optimize edildi."
        showDefaultCtas
      />
      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>
      <CtaBar context="hizmetler" />
    </>
  );
}
