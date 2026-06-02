import { site } from "@/lib/site";

const items = [
  {
    title: "Sağlık Bakanlığı Onaylı",
    desc: site.healthLicense
      ? `Lisans no: ${site.healthLicense}`
      : "Lisans numaranızı .env ile ekleyin — güven dönüşümü artırır.",
  },
  {
    title: "Önce / Sonra",
    desc: "Uygulama fotoğrafları ve vaka çalışmaları eklenecek alan (CMS veya statik galeri).",
  },
  {
    title: "Müşteri Yorumları",
    desc: site.googlePlaceId
      ? "Google yorumları entegrasyonu hazır (Place ID tanımlı)."
      : "Google Business ve yorum widget'ı için Place ID ekleyin.",
  },
  {
    title: "Kurumsal Referanslar",
    desc: "Otel, restoran ve site yönetimi logoları — sosyal kanıt bandı.",
  },
];

export function TrustSignals() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-bold text-gray-900">Neden bize güvenmelisiniz?</h2>
        <p className="mt-2 text-gray-600">
          Broşür sitesinden dönüşüm sitesine geçişin çekirdeği: kanıt, lisans ve şeffaf süreç.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <h3 className="font-semibold text-brand-800">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
