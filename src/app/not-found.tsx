import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Sayfa bulunamadı",
  description: "Aradığınız sayfa kaldırılmış veya taşınmış olabilir.",
  path: "/404",
  locale: "tr",
  noIndex: true,
  skipOgImages: false,
});

/** Kök 404 — next-intl provider dışında; düz <a> kullan */
export default function NotFound() {
  return (
    <html lang="tr">
      <body className="bg-brand-50 text-gray-900 antialiased">
        <section className="mx-auto max-w-lg px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-gray-900">404</h1>
          <p className="mt-4 text-gray-600">Sayfa bulunamadı / Page not found</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            {/* eslint-disable @next/next/no-html-link-for-pages */}
            <a href="/" className="btn-accent">
              Ana sayfa (TR)
            </a>
            <a href="/en" className="btn-accent">
              English
            </a>
            <a href="/ru" className="btn-accent">
              Русский
            </a>
            {/* eslint-enable @next/next/no-html-link-for-pages */}
          </div>
        </section>
      </body>
    </html>
  );
}
