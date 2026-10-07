import { getLocale, getTranslations } from "next-intl/server";
import { AnnouncementRotator, type AnnouncementItem } from "@/components/AnnouncementRotator";
import { telHref, whatsappHref } from "@/lib/links";
import { localizedPath } from "@/lib/metadata";
import type { Locale } from "@/i18n/config";

type RawItem = { text: string; action: "call" | "whatsapp" | "quote" | "services" | "regions" };

/** Header üstü ince duyuru şeridi — mesajlar messages/*.json → Announcement.items */
export async function AnnouncementBar() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("Announcement");
  const raw = t.raw("items") as RawItem[];

  const hrefFor = (action: RawItem["action"]): string => {
    switch (action) {
      case "call":
        return telHref();
      case "whatsapp":
        return whatsappHref();
      case "quote":
        return localizedPath(locale, "/teklif");
      case "regions":
        return localizedPath(locale, "/bolgeler");
      case "services":
      default:
        return localizedPath(locale, "/hizmetler");
    }
  };

  const items: AnnouncementItem[] = raw
    .filter((i) => typeof i?.text === "string" && i.text.trim().length > 0)
    .map((i) => ({ text: i.text, href: hrefFor(i.action), external: i.action === "whatsapp" }));

  if (items.length === 0) return null;

  return (
    <AnnouncementRotator
      items={items}
      label={t("label")}
      pauseLabel={t("pause")}
      playLabel={t("play")}
    />
  );
}
