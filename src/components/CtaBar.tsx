import { getLocale, getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/config";
import { LocaleLink as Link } from "@/components/LocaleLink";
import { telHref, whatsappHref } from "@/lib/links";
import { externalLinkRel } from "@/lib/external-links";

export async function CtaBar({ context }: { context?: string }) {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("Cta");
  const wa = whatsappHref(
    context ? t("whatsappContext", { context }) : undefined
  );

  return (
    <section className="bg-brand-700 py-8 text-white sm:py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 md:flex-row">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold sm:text-2xl">{t("title")}</h2>
          <p className="mt-1 text-sm text-brand-100 sm:text-base">{t("subtitle")}</p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center">
          <a href={telHref()} className="btn-accent w-full sm:w-auto">
            {t("call")}
          </a>
          <a
            href={wa}
            target="_blank"
            rel={externalLinkRel}
            className="btn-accent w-full sm:w-auto"
          >
            {t("whatsapp")}
          </a>
          <Link locale={locale} href="/teklif" className="btn-accent w-full sm:w-auto">
            {t("quote")}
          </Link>
        </div>
      </div>
    </section>
  );
}
