import { getLocale, getTranslations } from "next-intl/server";
import { LocaleLink as Link } from "@/components/LocaleLink";
import { buildMetadata } from "@/lib/metadata";
import type { Locale } from "@/i18n/config";

export async function generateMetadata() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("NotFound");
  return buildMetadata({
    title: t("title"),
    description: t("message"),
    path: "",
    locale,
    noIndex: true,
  });
}

/** Locale içi 404 — layout html/body sağlar */
export default async function LocaleNotFound() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("NotFound");

  return (
    <section className="mx-auto max-w-lg px-4 py-20 text-center">
      <h1 className="text-3xl font-bold text-gray-900">{t("title")}</h1>
      <p className="mt-4 text-gray-600">{t("message")}</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
        <Link locale={locale} href="/" className="btn-accent">
          {t("home")}
        </Link>
        <Link locale={locale} href="/hizmetler" className="btn-accent">
          {t("services")}
        </Link>
      </div>
    </section>
  );
}
