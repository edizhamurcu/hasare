import { Hero } from "@/components/Hero";
import { whatsappHref, telHref } from "@/lib/links";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Ücretsiz Keşif ve Teklif",
  description: "KKTC ilaçlama için ücretsiz keşif talebi. Aynı gün geri dönüş.",
  path: "/teklif",
});

export default function QuotePage() {
  return (
    <>
      <Hero
        title="Ücretsiz Keşif Talebi"
        subtitle="Form altyapısı bir sonraki sprintte (API route + e-posta / CRM). Şimdilik WhatsApp ve telefon ile dönüşüm."
        showDefaultCtas
      />
      <section className="mx-auto max-w-lg px-4 py-12">
        <form
          className="space-y-4 rounded-2xl border border-gray-200 bg-gray-50 p-6"
          action={whatsappHref("Merhaba, ücretsiz keşif talep ediyorum.")}
          method="get"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="text-sm text-gray-600">
            Alanları doldurup gönderdiğinizde WhatsApp açılır — hızlı MVP dönüşüm yolu.
          </p>
          <label className="block text-sm font-medium">
            Ad Soyad
            <input
              name="name"
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
              placeholder="Adınız"
            />
          </label>
          <label className="block text-sm font-medium">
            Şehir
            <select name="city" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2">
              <option>Lefkoşa</option>
              <option>Girne</option>
              <option>Gazimağusa</option>
              <option>İskele</option>
              <option>Güzelyurt</option>
              <option>Lefke</option>
            </select>
          </label>
          <label className="block text-sm font-medium">
            Sorun
            <textarea
              name="issue"
              rows={3}
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
              placeholder="Örn. hamamböceği, fare..."
            />
          </label>
          <button
            type="submit"
            className="w-full rounded-xl bg-brand-600 py-3 font-bold text-white hover:bg-brand-700"
          >
            WhatsApp ile Gönder
          </button>
        </form>
        <p className="mt-6 text-center text-sm">
          veya{" "}
          <a href={telHref()} className="font-semibold text-brand-600">
            hemen arayın
          </a>
        </p>
      </section>
    </>
  );
}
