import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { LocaleLink as Link } from "@/components/LocaleLink";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBar } from "@/components/CtaBar";
import { QuoteCtaInline } from "@/components/QuoteCtaInline";
import { GeoSummary } from "@/components/GeoSummary";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import { formatBlogDate, getBlogPost, getBlogPosts } from "@/lib/blog";
import { buildMetadata } from "@/lib/metadata";
import {
  blogPostJsonLd,
  faqJsonLd,
  faqsFromBlogSections,
  pageJsonLdGraph,
  webPageJsonLd,
} from "@/lib/schema";
import { localizedPath } from "@/lib/metadata";
import { site } from "@/lib/site";
import { getService } from "@/lib/services";
import { routing, type Locale } from "@/i18n/config";

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getBlogPosts(locale).map((p) => ({ locale, slug: p.slug }))
  );
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  const post = getBlogPost(slug, locale as Locale);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    locale: locale as Locale,
    ogType: "article",
    publishedTime: post.date,
    modifiedTime: post.modified ?? post.date,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const loc = locale as Locale;
  const t = await getTranslations("BlogDetail");
  const tCommon = await getTranslations("Common");
  const tNav = await getTranslations("Nav");
  const post = getBlogPost(slug, loc);
  if (!post) notFound();

  const path = `/blog/${post.slug}`;
  const service = post.serviceSlug ? getService(post.serviceSlug, loc) : undefined;
  const sectionFaqs = faqsFromBlogSections(post.sections);

  return (
    <>
      <JsonLd
        data={pageJsonLdGraph(
          blogPostJsonLd(post, loc),
          webPageJsonLd(path, loc, post.title, post.excerpt, ["#post-summary", "h1"]),
          ...(sectionFaqs.length > 0
            ? [faqJsonLd(sectionFaqs, `${site.url}${localizedPath(loc, path)}`)]
            : [])
        )}
      />
      <Breadcrumbs
        items={[
          { label: tNav("blog"), path: "/blog", href: "/blog" },
          { label: post.title, path },
        ]}
      />
      <article className="mx-auto max-w-3xl px-4 py-10">
        <header className="border-b border-gray-100 pb-8">
          <time dateTime={post.date} className="text-sm text-gray-500">
            {formatBlogDate(post.date, loc)}
          </time>
          <h1 className="mt-2 text-2xl font-bold text-brand-800 sm:text-3xl">{post.title}</h1>
          <p id="post-summary" className="mt-4 text-lg text-gray-600 leading-relaxed">
            {post.excerpt}
          </p>
        </header>
        <GeoSummary summary={post.excerpt} />

        <div className="prose-content mt-8">
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
              {section.bullets && section.bullets.length > 0 && (
                <ul>
                  {section.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <QuoteCtaInline className="mt-10" />

        {service && (
          <p className="mt-10 rounded-xl bg-brand-50 px-5 py-4 text-sm text-brand-900">
            {t("relatedServiceIntro")}{" "}
            <Link locale={loc}
              href={`/hizmetler/${service.slug}`}
              className="font-semibold underline hover:text-brand-700"
            >
              {t("relatedServiceLink", { name: service.shortTitle })}
            </Link>{" "}
            {t("relatedServiceOutro")}
          </p>
        )}

        <p className="mt-8">
          <Link locale={loc} href="/blog" className="text-sm font-medium text-brand-600 hover:underline">
            {tCommon("allPosts")}
          </Link>
        </p>
      </article>

      {service && (
        <RelatedLinks
          locale={loc}
          title={t("relatedTitle")}
          links={[{ href: `/hizmetler/${service.slug}`, label: service.title }]}
        />
      )}
      <CtaBar context={service?.shortTitle ?? tNav("blog")} />
    </>
  );
}
