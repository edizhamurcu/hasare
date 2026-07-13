import { getLocale, getTranslations } from "next-intl/server";
import { LocaleLink as Link } from "@/components/LocaleLink";
import { OptimizedImage } from "@/components/OptimizedImage";
import { getServiceImage } from "@/lib/images";
import type { Service } from "@/lib/services";
import type { Locale } from "@/i18n/config";

export async function ServiceCard({ service }: { service: Service }) {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("Common");
  const image = getServiceImage(service.slug, locale);

  return (
    <Link locale={locale}
      href={`/hizmetler/${service.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:border-brand-300 hover:shadow-md"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
        <OptimizedImage
          image={image}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
          quality={60}
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-brand-800 group-hover:text-brand-600">
          {service.shortTitle}
        </h3>
        <p className="mt-2 flex-1 text-sm text-gray-600">{service.heroSubtitle}</p>
        <span className="mt-4 text-sm font-semibold text-brand-600 group-hover:underline">
          {t("detailLink")}
        </span>
      </div>
    </Link>
  );
}
