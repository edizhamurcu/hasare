import { headers } from "next/headers";
import { getLocale } from "next-intl/server";
import { localeLabels, locales, type Locale } from "@/i18n/config";
import { localeSwitchHref } from "@/lib/internal-path";

export async function LanguageSwitcher({ className = "" }: { className?: string }) {
  const locale = (await getLocale()) as Locale;
  const internalPath = (await headers()).get("x-internal-path") ?? "/";

  return (
    <div
      className={`flex items-center justify-center gap-1 ${className}`}
      role="navigation"
      aria-label="Language"
    >
      {locales.map((loc) => (
        <a
          key={loc}
          href={localeSwitchHref(loc, internalPath)}
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
  );
}
