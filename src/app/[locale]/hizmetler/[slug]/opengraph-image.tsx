import { notFound } from "next/navigation";
import { getService, getServices } from "@/lib/services";
import { getSiteLocale } from "@/lib/site-locale";
import { OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og-image";
import { renderOgImage } from "@/lib/og-image-template";
import { routing, type Locale } from "@/i18n/config";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getServices(locale).map((s) => ({ locale, slug: s.slug }))
  );
}

export default async function ServiceOgImage({ params }: Props) {
  const { locale, slug } = await params;
  const loc = locale as Locale;
  const service = getService(slug, loc);
  if (!service) notFound();

  const siteLoc = getSiteLocale(loc);

  return renderOgImage({
    title: service.title,
    subtitle: service.heroSubtitle,
    badge: siteLoc.name,
    footer: "7/24 · Ücretsiz keşif",
  });
}
