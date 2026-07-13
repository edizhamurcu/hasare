import { getTranslations, setRequestLocale } from "next-intl/server";
import { LocaleLink as Link } from "@/components/LocaleLink";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { GeoSummary } from "@/components/GeoSummary";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { formatBlogDate, getBlogPosts } from "@/lib/blog";
import { buildMetadata } from "@/lib/metadata";
import { blogIndexJsonLd, pageJsonLdGraph, webPageJsonLd } from "@/lib/schema";
import { getSiteLocale } from "@/lib/site-locale";
import { routing, type Locale } from "@/i18n/config";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "BlogPage" });
  return buildMetadata({
    title: t("metaTitle"),
    description: t("metaDesc"),
    path: "/blog",
    locale: locale as Locale,
  });
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const loc = locale as Locale;
  const t = await getTranslations("BlogPage");
  const tCommon = await getTranslations("Common");
  const siteLoc = getSiteLocale(loc);
  const posts = getBlogPosts(loc);
  return (
    <>
      <JsonLd
        data={pageJsonLdGraph(
          blogIndexJsonLd(
            loc,
            posts.map((p) => ({ title: p.title, slug: p.slug }))
          ),
          webPageJsonLd("/blog", loc, t("metaTitle"), t("metaDesc"), ["#blog-summary", "h1"])
        )}
      />
      <GeoSummary
        summary={`${siteLoc.name} — ${t("metaDesc")}`}
      />
      <Breadcrumbs items={[{ label: t("breadcrumb"), path: "/blog" }]} />
      <Hero title={t("heroTitle")} subtitle={t("heroSubtitle")} subtitleId="blog-summary" />
      <section className="mx-auto max-w-3xl px-4 py-12">
        <ul className="space-y-6">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link locale={loc}
                href={`/blog/${post.slug}`}
                className="group block rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:border-brand-200 hover:shadow-md"
              >
                <time dateTime={post.date} className="text-xs text-gray-500">
                  {formatBlogDate(post.date, loc)}
                </time>
                <h2 className="mt-1 text-lg font-bold text-brand-800 group-hover:text-brand-600">
                  {post.title}
                </h2>
                <p className="mt-2 text-gray-600">{post.excerpt}</p>
                <span className="mt-3 inline-block text-sm font-medium text-brand-600 group-hover:underline">
                  {tCommon("readMore")}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm text-gray-500">
          <Link locale={loc} href="/" className="text-brand-600 hover:underline">
            {tCommon("backHome")}
          </Link>
        </p>
      </section>
    </>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
