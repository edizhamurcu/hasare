import { telHref, whatsappHref } from "@/lib/links";
import Link from "next/link";

export function CtaBar({ context }: { context?: string }) {
  const wa = whatsappHref(
    context
      ? `Merhaba, ${context} hakkında bilgi ve teklif almak istiyorum.`
      : undefined
  );
  return (
    <section className="bg-accent-500 py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 md:flex-row">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold">30 saniyede karar veren müşteriler için</h2>
          <p className="mt-1 text-accent-100">Acil ara · WhatsApp · veya ücretsiz keşif formu</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={telHref()}
            className="rounded-xl bg-white px-5 py-3 font-bold text-accent-600 hover:bg-gray-100"
          >
            Acil Ara
          </a>
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border-2 border-white px-5 py-3 font-bold hover:bg-white/10"
          >
            WhatsApp
          </a>
          <Link
            href="/teklif"
            className="rounded-xl bg-brand-900 px-5 py-3 font-bold hover:bg-brand-800"
          >
            Teklif Al
          </Link>
        </div>
      </div>
    </section>
  );
}
