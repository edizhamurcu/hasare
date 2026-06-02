import Link from "next/link";
import { cities } from "@/lib/cities";
import { services } from "@/lib/services";
import { site } from "@/lib/site";
import { telHref } from "@/lib/links";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
        <div>
          <p className="text-lg font-bold text-brand-800">{site.name}</p>
          <p className="mt-2 text-sm text-gray-600">
            KKTC genelinde böcek, fare ve haşere ilaçlama. Local SEO + dönüşüm odaklı
            dijital vitrin.
          </p>
          <a href={telHref()} className="mt-4 inline-block font-semibold text-brand-700">
            {site.phoneDisplay}
          </a>
        </div>
        <div>
          <p className="font-semibold text-gray-900">Hizmetler</p>
          <ul className="mt-3 space-y-2 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link href={`/hizmetler/${s.slug}`} className="text-gray-600 hover:text-brand-600">
                  {s.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold text-gray-900">Bölgeler</p>
          <ul className="mt-3 space-y-2 text-sm">
            {cities.map((c) => (
              <li key={c.slug}>
                <Link href={`/bolgeler/${c.slug}`} className="text-gray-600 hover:text-brand-600">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-200 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} {site.name}. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
