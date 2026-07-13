import { GeoSummary } from "@/components/GeoSummary";
import { JsonLd } from "@/components/JsonLd";
import { legalWebPageJsonLd } from "@/lib/schema";
import type { Locale } from "@/i18n/config";

type Props = {
  path: string;
  locale: Locale;
  title: string;
  description: string;
  summary: string;
};

/** Yasal sayfalar — GEO + speakable schema */
export function LegalSeoExtras({ path, locale, title, description, summary }: Props) {
  return (
    <>
      <JsonLd
        data={legalWebPageJsonLd(path, locale, title, description, [
          "#legal-summary",
          "h1",
        ])}
      />
      <GeoSummary summary={summary} />
    </>
  );
}
