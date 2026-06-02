import Link from "next/link";
import { Hero } from "@/components/Hero";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "İlaçlama Blog ve Rehberler",
  description:
    "KKTC haşere kontrolü, mevsimlik ipuçları ve güncel içerik. Google ve AI aramalar için düzenli yayın hedefi.",
  path: "/blog",
});

const plannedPosts = [
  {
    slug: "hamambocegi-ilaclama-fiyatlari-kktc-2026",
    title: "Hamamböceği İlaçlama Fiyatları KKTC 2026",
    date: "2026-06-01",
    excerpt: "Konut ve işyeri için güncel fiyat aralıkları ve garanti koşulları.",
  },
  {
    slug: "sivrisinek-ilaclama-ne-zaman-yapilir",
    title: "Sivrisinek İlaçlama Ne Zaman Yapılır?",
    date: "2026-05-15",
    excerpt: "Yaz sezonu öncesi ve sonrası ideal uygulama takvimi.",
  },
  {
    slug: "fare-gormek-lefkosa-acil-mudahale",
    title: "Lefkoşa'da Fare Gördüm — Acil Müdahale Rehberi",
    date: "2026-05-01",
    excerpt: "İlk 24 saatte yapılması gerekenler ve profesyonel destek.",
  },
];

export default function BlogPage() {
  return (
    <>
      <Hero
        title="Blog — Canlı SEO Motoru"
        subtitle="Eski broşür sitesindeki ölü içerik yerine aylık güncellenen rehberler. MDX/CMS entegrasyonu sonraki adım."
      />
      <section className="mx-auto max-w-3xl px-4 py-12">
        <ul className="space-y-6">
          {plannedPosts.map((post) => (
            <li key={post.slug} className="rounded-xl border border-gray-200 p-6">
              <time className="text-xs text-gray-500">{post.date}</time>
              <h2 className="mt-1 text-lg font-bold text-brand-800">{post.title}</h2>
              <p className="mt-2 text-gray-600">{post.excerpt}</p>
              <span className="mt-3 inline-block text-sm text-gray-400">
                Tam makale — yakında (MDX route)
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm text-gray-500">
          <Link href="/" className="text-brand-600 hover:underline">
            Ana sayfaya dön
          </Link>
        </p>
      </section>
    </>
  );
}
