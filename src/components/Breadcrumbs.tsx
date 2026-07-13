import { getTranslations } from "next-intl/server";
import { LocaleLink as Link } from "@/components/LocaleLink";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/schema";
import type { Locale } from "@/i18n/config";
import { getLocale } from "next-intl/server";

export type Crumb = { label: string; path: string; href?: string };

export async function Breadcrumbs({ items }: { items: Crumb[] }) {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("Common");
  const schemaItems = [
    { name: t("breadcrumbHome"), path: "/" },
    ...items.map((i) => ({ name: i.label, path: i.path })),
  ];

  return (
    <nav aria-label="Breadcrumb" className="border-b border-gray-100 bg-gray-50/80">
      <JsonLd data={breadcrumbJsonLd(schemaItems, locale)} />
      <ol className="mx-auto flex max-w-6xl flex-wrap items-center gap-1 px-4 py-2.5 text-sm text-gray-600">
        <li>
          <Link locale={locale} href="/" className="hover:text-brand-600 min-h-[44px] inline-flex items-center">
            {t("breadcrumbHome")}
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={item.path} className="flex items-center gap-1">
            <span aria-hidden>/</span>
            {i === items.length - 1 || !item.href ? (
              <span className="font-medium text-gray-900">{item.label}</span>
            ) : (
              <Link locale={locale} href={item.href} className="hover:text-brand-600 min-h-[44px] inline-flex items-center">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
