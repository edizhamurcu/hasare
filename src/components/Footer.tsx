import { getLocale, getTranslations } from "next-intl/server";
import { LocaleLink as Link } from "@/components/LocaleLink";
import { Logo } from "@/components/Logo";
import { MailIcon, PhoneIcon, WhatsAppIcon, FacebookIcon, InstagramIcon } from "@/components/ContactIcons";
import { getServices } from "@/lib/services";
import { getCities } from "@/lib/cities";
import { getFooterFaqPreview } from "@/lib/content/faq-site";
import { legalPaths } from "@/lib/content/legal";
import { ClientMailLink } from "@/components/ClientMailLink";
import { CONTACT_EMAIL } from "@/lib/contact";
import { splitEmail } from "@/lib/parse-email";
import { whatsappHref } from "@/lib/links";
import { externalLinkRel, sponsoredLinkRel } from "@/lib/external-links";
import { company } from "@/lib/company";
import { getSiteLocale } from "@/lib/site-locale";
import { site } from "@/lib/site";
import type { Locale } from "@/i18n/config";

const DEVELOPER_URL = "https://arekansoftware.com";

const iconBtn =
  "inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors";

export async function Footer() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("Footer");
  const siteLoc = getSiteLocale(locale);
  const email = site.email || CONTACT_EMAIL;
  const { user: emailUser, domain: emailDomain } = splitEmail(email);
  const services = getServices(locale).slice(0, 5);
  const cities = getCities(locale).slice(0, 4);
  const faqPreview = getFooterFaqPreview(locale);

  return (
    <footer className="border-t-2 border-brand-600 bg-brand-50 text-sm">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm shrink-0">
            <Logo size="sm" surface="light" linkToHome />
            <p className="mt-2 font-semibold text-brand-900">{siteLoc.activityArea}</p>
            <p className="mt-1 text-gray-600">
              {site.address} · {t("since", { year: site.foundedYear })}
            </p>
            <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-brand-800">
              {site.phones.map((phone) => (
                <a
                  key={phone.e164}
                  href={`tel:${phone.e164.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-1 font-medium hover:text-brand-600"
                >
                  <PhoneIcon className="h-3.5 w-3.5" />
                  {phone.display}
                </a>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-2" aria-label={t("contactAndSocial")}>
              <a
                href={whatsappHref()}
                target="_blank"
                rel={externalLinkRel}
                className={`${iconBtn} bg-[#25D366]/15 text-[#128C7E] hover:bg-[#25D366]/25`}
                aria-label={t("whatsappWrite")}
              >
                <WhatsAppIcon className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">{t("whatsappWrite")}</span>
              </a>
              <ClientMailLink
                user={emailUser}
                domain={emailDomain}
                className={`${iconBtn} bg-brand-100 text-brand-700 hover:bg-brand-200`}
                aria-label={t("emailAria")}
              >
                <MailIcon className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">{t("emailAria")}</span>
              </ClientMailLink>
              <a
                href={company.social.facebook.url}
                target="_blank"
                rel={externalLinkRel}
                className={`${iconBtn} bg-[#1877F2]/10 text-[#1877F2] hover:bg-[#1877F2]/20`}
                aria-label={t("facebookAria", { handle: company.social.facebook.handle })}
              >
                <FacebookIcon className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">{company.social.facebook.url}</span>
              </a>
              <a
                href={company.social.instagram.url}
                target="_blank"
                rel={externalLinkRel}
                className={`${iconBtn} bg-gradient-to-br from-[#F58529]/15 to-[#8134AF]/15 text-[#C13584] hover:opacity-90`}
                aria-label={t("instagramAria", { handle: company.social.instagram.handle })}
              >
                <InstagramIcon className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">{company.social.instagram.url}</span>
              </a>
            </div>
          </div>

          <div className="grid flex-1 grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-8">
            <div>
              <p className="font-bold text-gray-900">{t("services")}</p>
              <ul className="mt-2 space-y-1">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link locale={locale}
                      href={`/hizmetler/${s.slug}`}
                      className="text-gray-700 hover:text-brand-700"
                    >
                      {s.shortTitle}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link locale={locale} href="/hizmetler" className="font-semibold text-brand-700 hover:underline">
                    {t("allServices")}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-bold text-gray-900">{t("regions")}</p>
              <ul className="mt-2 space-y-1">
                {cities.map((c) => (
                  <li key={c.slug}>
                    <Link locale={locale}
                      href={`/bolgeler/${c.slug}`}
                      className="text-gray-700 hover:text-brand-700"
                    >
                      {c.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link locale={locale} href="/bolgeler" className="font-semibold text-brand-700 hover:underline">
                    {t("allRegions")}
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-bold text-gray-900">{t("faqLegal")}</p>
              <ul className="mt-2 space-y-2">
                {faqPreview.map((faq) => (
                  <li key={faq.q}>
                    <Link locale={locale} href="/sss" className="text-gray-700 hover:text-brand-700 line-clamp-2">
                      {faq.q}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link locale={locale} href="/sss" className="font-semibold text-brand-700 hover:underline">
                    {t("allFaq")}
                  </Link>
                </li>
              </ul>
              <ul className="mt-4 space-y-1 border-t border-brand-200 pt-3">
                <li>
                  <Link locale={locale} href={legalPaths.privacy} className="text-gray-700 hover:text-brand-700">
                    {t("privacy")}
                  </Link>
                </li>
                <li>
                  <Link locale={locale} href={legalPaths.kvkk} className="text-gray-700 hover:text-brand-700">
                    {t("kvkk")}
                  </Link>
                </li>
                <li>
                  <Link locale={locale} href={legalPaths.terms} className="text-gray-700 hover:text-brand-700">
                    {t("terms")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-brand-200 bg-brand-100/80 px-4 py-4 text-center text-sm text-gray-600">
        <p className="font-medium text-gray-800">
          {t("copyright", { name: company.legalName })}
        </p>
        <p className="mt-1">
          {t("developedByPrefix")}{" "}
          <a
            href={DEVELOPER_URL}
            target="_blank"
            rel={sponsoredLinkRel}
            className="text-brand-700 underline hover:text-brand-900"
          >
            {t("developerName")}
          </a>
          {t("developedBySuffix")}
        </p>
      </div>
    </footer>
  );
}
