import { getLocale } from "next-intl/server";
import { LocaleLink as Link } from "@/components/LocaleLink";
import { QuoteCtaInline } from "@/components/QuoteCtaInline";
import { getProposalTerms } from "@/lib/content/proposal-terms";
import type { Locale } from "@/i18n/config";

export async function QuoteProposalGuide() {
  const locale = (await getLocale()) as Locale;
  const t = getProposalTerms(locale);

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 space-y-10">
      <div
        role="note"
        className="rounded-2xl border-2 border-brand-500 bg-brand-50 px-5 py-6 sm:px-8"
      >
        <h2 className="text-xl font-bold text-brand-900 sm:text-2xl">{t.customerNoticeTitle}</h2>
        <p className="mt-3 text-gray-800 leading-relaxed">{t.customerNoticeBody}</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <section className="rounded-2xl border border-emerald-200 bg-emerald-50/80 p-6">
          <h3 className="text-lg font-bold text-emerald-900">{t.includedTitle}</h3>
          <p className="mt-2 text-sm text-emerald-900/90 leading-relaxed">{t.includedMethod}</p>
          <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm text-gray-800">
            {t.includedPests.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50/80 p-6">
          <h3 className="text-lg font-bold text-amber-900">{t.excludedTitle}</h3>
          <p className="mt-2 text-sm text-amber-900/90 leading-relaxed">{t.excludedIntro}</p>
          <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm text-gray-800">
            {t.excludedItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>

      <section>
        <h3 className="text-xl font-bold text-gray-900">{t.contractTitle}</h3>
        <dl className="mt-6 space-y-5">
          {t.contractItems.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <dt className="font-semibold text-brand-800">{item.title}</dt>
              <dd className="mt-2 text-sm text-gray-700 leading-relaxed">{item.body}</dd>
            </div>
          ))}
        </dl>
      </section>

      <QuoteCtaInline className="my-2" />

      <section className="grid gap-6 sm:grid-cols-2">
        <article className="rounded-xl border border-gray-200 bg-gray-50 p-5">
          <h3 className="font-semibold text-gray-900">{t.productsTitle}</h3>
          <p className="mt-2 text-sm text-gray-700 leading-relaxed">{t.productsBody}</p>
        </article>
        <article className="rounded-xl border border-gray-200 bg-gray-50 p-5">
          <h3 className="font-semibold text-gray-900">{t.efkTitle}</h3>
          <p className="mt-2 text-sm text-gray-700 leading-relaxed">{t.efkBody}</p>
        </article>
      </section>

      <section>
        <h3 className="font-semibold text-gray-900">{t.equipmentTitle}</h3>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-gray-700">
          {t.equipmentItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <p className="text-center text-sm text-gray-600">
        <Link locale={locale} href="/sss" className="font-semibold text-brand-600 hover:underline">
          {locale === "en" ? "FAQ" : locale === "ru" ? "Частые вопросы" : "Sık sorulan sorular"}
        </Link>
        {" · "}
        <Link locale={locale} href="/hizmetler" className="font-semibold text-brand-600 hover:underline">
          {locale === "en" ? "All services" : locale === "ru" ? "Все услуги" : "Tüm hizmetler"}
        </Link>
      </p>
    </div>
  );
}
