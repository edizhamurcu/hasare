import { getLocale, getTranslations } from "next-intl/server";
import { LocaleLink as Link } from "@/components/LocaleLink";
import { showcasePests, getServiceImage } from "@/lib/images";
import { getService } from "@/lib/services";
import { OptimizedImage } from "@/components/OptimizedImage";
import type { Locale } from "@/i18n/config";

export async function PestShowcase() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("PestShowcase");

  return (
    <section className="py-12 sm:py-20 bg-white" aria-labelledby="pest-showcase-title">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <h2 id="pest-showcase-title" className="text-2xl font-bold text-gray-900 sm:text-3xl">
            {t("title")}
          </h2>
          <p className="mt-3 text-gray-600">{t("intro")}</p>
        </div>
        <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:gap-6">
          {showcasePests.map((slug) => {
            const service = getService(slug, locale);
            if (!service) return null;
            const image = getServiceImage(slug, locale);
            return (
              <li key={slug}>
                <Link locale={locale}
                  href={`/hizmetler/${slug}`}
                  className="group block overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 shadow-sm transition hover:border-brand-200 hover:shadow-md"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <OptimizedImage
                      image={image}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 384px"
                      quality={60}
                      className="group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <p className="px-3 py-3 text-center text-sm font-bold text-brand-800 sm:text-base">
                    {service.shortTitle}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
