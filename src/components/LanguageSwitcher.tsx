import { headers } from "next/headers";
import { getLocale, getTranslations } from "next-intl/server";
import { localeLabels, locales, type Locale } from "@/i18n/config";
import { localeSwitchHref } from "@/lib/internal-path";
import { LanguageMenu } from "@/components/LanguageMenu";

/** Header dil seçici — dünya simgesi + açılır menü (varsayılan dil: tr) */
export async function LanguageSwitcher({ className = "" }: { className?: string }) {
  const locale = (await getLocale()) as Locale;
  const internalPath = (await headers()).get("x-internal-path") ?? "/";
  const t = await getTranslations("Nav");

  const options = locales.map((loc) => ({
    code: loc,
    label: localeLabels[loc],
    href: localeSwitchHref(loc, internalPath),
    current: loc === locale,
  }));

  return <LanguageMenu options={options} menuLabel={t("language")} className={className} />;
}
