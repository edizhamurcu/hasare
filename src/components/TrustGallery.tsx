import { getLocale, getTranslations } from "next-intl/server";
import { OptimizedImage } from "@/components/OptimizedImage";
import { getServiceImage } from "@/lib/images";
import type { Locale } from "@/i18n/config";

const trustSlides = [
  { slug: "dezenfeksiyon", key: "disinfection" },
  { slug: "ev-ilaclama", key: "residential" },
  { slug: "hastane-ilaclama", key: "hospital" },
  { slug: "fabrika-ilaclama", key: "industrial" },
] as const;

export async function TrustGallery() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("TrustGallery");

  return (
    <section className="py-12 bg-gray-50" aria-label={t("title")}>
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">{t("title")}</h2>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {trustSlides.map(({ slug, key }) => (
            <figure
              key={slug}
              className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
            >
              <div className="relative aspect-[4/3]">
                <OptimizedImage
                  image={getServiceImage(slug, locale)}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="px-2 py-2 text-center text-xs font-semibold text-brand-800 sm:text-sm">
                {t(key)}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
