import { getTranslations, setRequestLocale } from "next-intl/server";
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
  const doc = getLegalDocument("privacy", locale as Locale);
  return buildMetadata({
    title: doc.title,
    description: doc.description,
    path: legalPaths.privacy,
    locale: locale as Locale,
  });
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const loc = locale as Locale;
  const doc = getLegalDocument("privacy", loc);

  return (
    <>
      <LegalSeoExtras
        path={legalPaths.privacy}
        locale={loc}
        title={doc.title}
        description={doc.description}
        summary={doc.description}
      />
      <Breadcrumbs
        items={[{ label: doc.title, path: legalPaths.privacy, href: legalPaths.privacy }]}
      />
      <LegalProse doc={doc} />
    </>
  );
}
