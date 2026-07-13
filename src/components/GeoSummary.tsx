import { getLocale, getTranslations } from "next-intl/server";
import { splitEmail } from "@/lib/parse-email";
import { site } from "@/lib/site";
import { getSiteLocale } from "@/lib/site-locale";
import type { Locale } from "@/i18n/config";

type Fact = { label: string; value: string };

type Props = {
  /** Sayfa özeti — AI arama motorları için (görsel arayüzde gösterilmez) */
  summary: string;
  facts?: Fact[];
};

/** GEO: Yapılandırılmış özet — yalnızca tarayıcı/LLM için (sr-only) */
export async function GeoSummary({ summary, facts = [] }: Props) {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("GeoSummary");
  const siteLoc = getSiteLocale(locale);

  const { user: emailUser, domain: emailDomain } = splitEmail(site.email);
  const defaultFacts: Fact[] = [
    { label: t("brand"), value: siteLoc.name },
    { label: t("website"), value: site.url },
    { label: t("region"), value: site.address },
    { label: t("phone"), value: site.phonesDisplay },
    { label: t("email"), value: `${emailUser} · ${emailDomain}` },
    { label: t("service"), value: siteLoc.activityArea },
  ];

  const allFacts = [...facts, ...defaultFacts];

  return (
    <aside
      className="sr-only"
      aria-label={t("ariaLabel")}
      data-geo-summary="true"
      itemScope
      itemType="https://schema.org/WebPageElement"
    >
      <p itemProp="description">{summary}</p>
      <dl>
        {allFacts.map((f) => (
          <div key={f.label}>
            <dt>{f.label}</dt>
            <dd>{f.value}</dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}
