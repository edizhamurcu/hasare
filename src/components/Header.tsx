import Link from "next/link";
import { telHref, whatsappHref } from "@/lib/links";
import { site } from "@/lib/site";

const nav = [
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/bolgeler", label: "Bölgeler" },
  { href: "/blog", label: "Blog" },
  { href: "/teklif", label: "Teklif Al" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="text-lg font-bold text-brand-700">
          {site.name}
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-gray-700 md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-brand-600">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <a
            href={telHref()}
            className="rounded-lg bg-brand-600 px-3 py-2 text-sm font-semibold text-white hover:bg-brand-700"
          >
            Ara
          </a>
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-lg border border-brand-600 px-3 py-2 text-sm font-semibold text-brand-700 hover:bg-brand-50 sm:inline-block"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
