import { LocaleLink as Link } from "@/components/LocaleLink";
import type { Locale } from "@/i18n/config";

type LinkItem = { href: string; label: string };

export function RelatedLinks({
  title,
  links,
  locale,
}: {
  title: string;
  links: LinkItem[];
  locale: Locale;
}) {
  if (links.length === 0) return null;

  return (
    <section className="mx-auto max-w-3xl px-4 py-10" aria-label={title}>
      <h2 className="text-lg font-bold text-gray-900">{title}</h2>
      <ul className="mt-4 flex flex-wrap gap-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              locale={locale}
              href={link.href}
              className="inline-flex min-h-[44px] items-center rounded-full border border-brand-200 bg-white px-4 py-2 text-sm font-medium text-brand-800 hover:border-brand-400 hover:bg-brand-50"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
