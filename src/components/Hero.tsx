import { valueProps } from "@/lib/site";
import { telHref, whatsappHref } from "@/lib/links";
import Link from "next/link";

type HeroProps = {
  title: string;
  subtitle: string;
  showDefaultCtas?: boolean;
};

export function Hero({ title, subtitle, showDefaultCtas = true }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-900 via-brand-700 to-brand-600 text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <p className="mb-3 inline-block rounded-full bg-white/15 px-3 py-1 text-sm font-medium">
          KKTC · 7/24 Acil Servis
        </p>
        <h1 className="max-w-3xl text-3xl font-bold leading-tight md:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-brand-50">{subtitle}</p>
        {showDefaultCtas && (
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={telHref()}
              className="inline-flex items-center gap-2 rounded-xl bg-accent-500 px-6 py-3 text-base font-bold text-white shadow-lg hover:bg-accent-600"
            >
              Hemen Ara
            </a>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-base font-bold text-brand-800 hover:bg-brand-50"
            >
              WhatsApp Teklif Al
            </a>
            <Link
              href="/teklif"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-white/80 px-6 py-3 text-base font-bold hover:bg-white/10"
            >
              Ücretsiz Keşif Talebi
            </Link>
          </div>
        )}
        <ul className="mt-10 flex flex-wrap gap-3">
          {valueProps.map((v) => (
            <li
              key={v}
              className="rounded-lg bg-white/10 px-3 py-1.5 text-sm font-medium backdrop-blur"
            >
              {v}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
