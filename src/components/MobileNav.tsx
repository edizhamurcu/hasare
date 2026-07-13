import { localeLabels, locales, type Locale } from "@/i18n/config";
import { localeSwitchHref } from "@/lib/internal-path";
import { telHref, whatsappHref } from "@/lib/links";
import { externalLinkRel } from "@/lib/external-links";

type NavItem = {
  href: string;
  label: string;
};

export type MobileNavLabels = {
  openMenu: string;
  closeMenu: string;
  mainMenu: string;
  language: string;
  home: string;
  call: string;
  whatsapp: string;
};

type Props = {
  nav: NavItem[];
  labels: MobileNavLabels;
  homeHref: string;
  locale: Locale;
  internalPath: string;
};

const ctaClass =
  "inline-flex min-h-[48px] w-full items-center justify-center rounded-lg bg-accent-600 px-4 py-3 text-base font-semibold text-white hover:bg-accent-600/90";

/** CSS-only mobil menü — client JS / next/navigation gerektirmez */
export function MobileNav({ nav, labels, homeHref, locale, internalPath }: Props) {
  const localeLinks = locales.map((loc) => ({
    locale: loc,
    href: localeSwitchHref(loc, internalPath),
  }));

  return (
    <div className="relative md:hidden">
      <input
        type="checkbox"
        id="mobile-nav-toggle"
        className="peer sr-only"
        aria-hidden
        tabIndex={-1}
      />
      <label
        htmlFor="mobile-nav-toggle"
        className="mobile-nav-btn inline-flex min-h-[44px] min-w-[44px] cursor-pointer items-center justify-center rounded-lg border border-white/30 px-3 text-sm font-medium text-white"
        aria-label={labels.openMenu}
      />
      <label
        htmlFor="mobile-nav-toggle"
        className="fixed inset-0 z-40 hidden cursor-pointer bg-black/40 peer-checked:block"
        aria-hidden
      />
      <nav
        id="mobile-nav-panel"
        className="fixed inset-y-0 right-0 z-50 flex w-[min(100%,320px)] translate-x-full flex-col gap-1 overflow-y-auto bg-brand-800 p-4 shadow-xl transition-transform duration-200 peer-checked:translate-x-0"
        aria-label={labels.mainMenu}
      >
        <div className="mb-4 flex flex-col items-center gap-2 border-b border-brand-700 pb-4">
          <span className="text-sm font-semibold text-brand-100">{labels.language}</span>
          <div className="flex w-full items-center justify-center gap-1" role="navigation" aria-label="Language">
            {localeLinks.map(({ locale: loc, href }) => (
              <a
                key={loc}
                href={href}
                aria-label={localeLabels[loc]}
                aria-current={loc === locale ? "page" : undefined}
                className={`inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md px-2.5 py-1.5 text-center text-sm font-semibold uppercase leading-none transition-colors ${
                  loc === locale
                    ? "bg-white/20 text-white"
                    : "text-brand-100 hover:bg-white/10 hover:text-white"
                }`}
              >
                {loc}
              </a>
            ))}
          </div>
        </div>
        <a
          href={homeHref}
          className="min-h-[48px] rounded-lg px-3 py-3 text-base font-medium text-white hover:bg-brand-700"
        >
          {labels.home}
        </a>
        {nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="min-h-[48px] rounded-lg px-3 py-3 text-base font-medium text-white hover:bg-brand-700"
          >
            {item.label}
          </a>
        ))}
        <div className="mt-4 flex flex-col gap-2 border-t border-brand-700 pt-4">
          <a href={telHref()} className={ctaClass}>
            {labels.call}
          </a>
          <a href={whatsappHref()} target="_blank" rel={externalLinkRel} className={ctaClass}>
            {labels.whatsapp}
          </a>
        </div>
      </nav>
    </div>
  );
}
