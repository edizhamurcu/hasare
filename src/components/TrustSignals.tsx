import { getLocale, getTranslations } from "next-intl/server";
import { MailIcon, PhoneIcon } from "@/components/ContactIcons";
import { whatsappHref } from "@/lib/links";
import { externalLinkRel } from "@/lib/external-links";
import { ClientMailLink } from "@/components/ClientMailLink";
import { splitEmail } from "@/lib/parse-email";
import { getSiteLocale } from "@/lib/site-locale";
import { site } from "@/lib/site";
import type { Locale } from "@/i18n/config";

const itemKeys = ["iso", "bayer", "inspection", "emergency", "corporate"] as const;

export async function TrustSignals() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("Trust");
  const siteLoc = getSiteLocale(locale);
  const { user: emailUser, domain: emailDomain } = splitEmail(site.email);

  const items = itemKeys.map((key) => ({
    title: t(`items.${key}.title`),
    desc: t(`items.${key}.desc`),
  }));

  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-bold text-gray-900">
          {t("title", { name: siteLoc.name })}
        </h2>
        <p className="mt-3 max-w-3xl text-lg leading-relaxed text-gray-600">
          {t("intro", { year: site.foundedYear })}
        </p>

        <ul className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-3">
          {site.phones.map((phone) => (
            <li key={phone.e164}>
              <a
                href={`tel:${phone.e164.replace(/\s/g, "")}`}
                className="inline-flex min-h-[44px] items-center gap-2 text-base font-semibold text-brand-800 hover:text-brand-600"
              >
                <PhoneIcon className="h-5 w-5 shrink-0 text-brand-600" />
                {phone.display}
              </a>
            </li>
          ))}
          <li>
            <ClientMailLink
              user={emailUser}
              domain={emailDomain}
              className="inline-flex min-h-[44px] items-center gap-2 text-base font-semibold text-brand-800 hover:text-brand-600"
            >
              <MailIcon className="h-5 w-5 shrink-0 text-brand-600" />
              <span>
                {emailUser}
                <span aria-hidden="true"> · </span>
                {emailDomain}
              </span>
            </ClientMailLink>
          </li>
          <li>
            <span className="inline-flex min-h-[44px] items-center gap-2 text-base font-medium text-gray-700">
              <svg
                className="h-5 w-5 shrink-0 text-brand-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {site.address}
            </span>
          </li>
        </ul>

        <p className="mt-4">
          <a
            href={whatsappHref()}
            target="_blank"
            rel={externalLinkRel}
            className="inline-flex min-h-[44px] items-center rounded-lg bg-[#075E54] px-5 text-base font-bold text-white hover:bg-[#064942]"
          >
            {t("whatsappNow")}
          </a>
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <h3 className="font-semibold text-brand-800">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
