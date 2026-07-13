import { headers } from "next/headers";
import { getLocale, getTranslations } from "next-intl/server";
import { Logo } from "@/components/Logo";
import { MobileNav, type MobileNavLabels } from "@/components/MobileNav";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { telHref, whatsappHref } from "@/lib/links";
import { externalLinkRel } from "@/lib/external-links";
import { localizedPath } from "@/lib/metadata";
import { type Locale } from "@/i18n/config";

const ctaClass =
  "inline-flex min-h-[44px] items-center rounded-lg bg-accent-600 px-3 py-2 text-sm font-semibold text-white hover:bg-accent-600/90";

export async function Header() {
  const locale = (await getLocale()) as Locale;
  const internalPath = (await headers()).get("x-internal-path") ?? "/";
  const t = await getTranslations("Nav");
  const nav = [
    { href: "/hizmetler" as const, label: t("services") },
    { href: "/bolgeler" as const, label: t("regions") },
    { href: "/blog" as const, label: t("blog") },
    { href: "/sss" as const, label: t("faq") },
    { href: "/teklif" as const, label: t("quote") },
  ];

  const mobileLabels: MobileNavLabels = {
    openMenu: t("openMenu"),
    closeMenu: t("closeMenu"),
    mainMenu: t("mainMenu"),
    language: t("language"),
    home: t("home"),
    call: t("call"),
    whatsapp: t("whatsapp"),
  };

  const mobileNav = nav.map((item) => ({
    href: localizedPath(locale, item.href),
    label: item.label,
  }));

  return (
    <header className="sticky top-0 z-50 border-b border-brand-800 bg-brand-700 text-white shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-3 sm:gap-4 sm:py-3.5">
        <Logo size="md" surface="dark" />
        <nav
          className="hidden items-center gap-5 text-sm font-medium text-brand-50 md:flex"
          aria-label={t("mainMenu")}
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={localizedPath(locale, item.href)}
              className="py-2 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <LanguageSwitcher className="hidden sm:flex sm:justify-center" />
          <a href={telHref()} className={`hidden sm:inline-flex ${ctaClass}`}>
            {t("call")}
          </a>
          <a
            href={whatsappHref()}
            target="_blank"
            rel={externalLinkRel}
            className={`hidden lg:inline-flex ${ctaClass}`}
          >
            {t("whatsapp")}
          </a>
          <MobileNav
            nav={mobileNav}
            labels={mobileLabels}
            homeHref={localizedPath(locale, "/")}
            locale={locale}
            internalPath={internalPath}
          />
        </div>
      </div>
    </header>
  );
}
