import { getSiteLocale } from "@/lib/site-locale";
import { OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og-image";
import { renderOgImage } from "@/lib/og-image-template";
import { CONTACT_EMAIL_DISPLAY } from "@/lib/contact";
import { routing, type Locale } from "@/i18n/config";

export const alt = "Kıbrıs Haşere ilaçlama";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleOgImage({ params }: Props) {
  const { locale } = await params;
  const siteLoc = getSiteLocale(locale as Locale);
  const badge =
    locale === "en"
      ? "Northern Cyprus · 24/7"
      : locale === "ru"
        ? "KKTC · 24/7"
        : "KKTC · 7/24 Acil Servis";

  return renderOgImage({
    title: siteLoc.name,
    subtitle: siteLoc.activityArea,
    badge,
    footer: `${CONTACT_EMAIL_DISPLAY} · Ücretsiz keşif`,
  });
}
