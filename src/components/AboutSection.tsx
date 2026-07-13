import { getLocale, getTranslations } from "next-intl/server";
import { getCompany } from "@/lib/content/company";
import { company } from "@/lib/company";
import { getSiteLocale } from "@/lib/site-locale";
import type { Locale } from "@/i18n/config";

export async function AboutSection() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("About");
  const co = getCompany(locale);
  const siteLoc = getSiteLocale(locale);

  return (
    <section className="py-16 bg-brand-100/60">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-bold text-gray-900">{t("title")}</h2>
        <p className="mt-2 text-sm font-medium text-brand-800">{siteLoc.name}</p>
        <p className="mt-1 text-sm text-gray-600">
          {company.foundedYear} — {co.credentials.join(" · ")}
        </p>
        <div className="mt-6 space-y-4 text-gray-700 leading-relaxed">
          {co.aboutParagraphs.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </div>
        <p className="mt-6 text-sm text-brand-800 font-medium">{co.productNote}</p>
        <p className="mt-4 text-sm font-semibold text-gray-800">{t("serviceAreasTitle")}</p>
        <ul className="mt-2 flex flex-wrap gap-2">
          {co.serviceAreas.map((area) => (
            <li
              key={area}
              className="rounded-full bg-white border border-gray-200 px-3 py-1 text-sm text-gray-700"
            >
              {area}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
