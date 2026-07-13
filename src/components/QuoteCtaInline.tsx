import { getLocale, getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/config";
import { LocaleLink as Link } from "@/components/LocaleLink";

type Props = {
  /** Bağlam: hizmet adı vb. */
  context?: string;
  className?: string;
};

/** Fiyat yerine teklif CTA — hizmet / blog içi bloklar */
export async function QuoteCtaInline({ context, className = "" }: Props) {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("QuoteCta");
  const tNav = await getTranslations("Nav");

  return (
    <div
      className={`rounded-2xl border-2 border-brand-200 bg-brand-50 px-5 py-6 text-center sm:px-8 ${className}`}
    >
      <h2 className="text-lg font-bold text-brand-900">{t("title")}</h2>
      <p className="mt-2 text-sm text-gray-700 leading-relaxed">
        {context ? t("bodyWithContext", { context }) : t("body")}
      </p>
      <Link
        locale={locale}
        href="/teklif"
        className="btn-accent mt-5 inline-flex min-h-[48px] items-center justify-center px-8"
      >
        {tNav("quote")}
      </Link>
    </div>
  );
}
