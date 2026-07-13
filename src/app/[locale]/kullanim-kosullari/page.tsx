import { setRequestLocale } from "next-intl/server";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LegalProse } from "@/components/LegalProse";
import { LegalSeoExtras } from "@/components/LegalSeoExtras";
import { getLegalDocument, legalPaths } from "@/lib/content/legal";
import { buildMetadata } from "@/lib/metadata";
import { routing, type Locale } from "@/i18n/config";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const doc = getLegalDocument("terms", locale as Locale);
  return buildMetadata({
    title: doc.title,
    description: doc.description,
    path: legalPaths.terms,
    locale: locale as Locale,
  });
}

export default async function TermsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const loc = locale as Locale;
  const doc = getLegalDocument("terms", loc);

  return (
    <>
      <LegalSeoExtras
        path={legalPaths.terms}
        locale={loc}
        title={doc.title}
        description={doc.description}
        summary={doc.description}
      />
      <Breadcrumbs
        items={[{ label: doc.title, path: legalPaths.terms, href: legalPaths.terms }]}
      />
      <LegalProse doc={doc} />
    </>
  );
}
