import { notFound } from "next/navigation";
import { getBlogPost, getBlogPosts } from "@/lib/blog";
import { getSiteLocale } from "@/lib/site-locale";
import { OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og-image";
import { renderOgImage } from "@/lib/og-image-template";
import { routing, type Locale } from "@/i18n/config";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getBlogPosts(locale).map((p) => ({ locale, slug: p.slug }))
  );
}

export default async function BlogOgImage({ params }: Props) {
  const { locale, slug } = await params;
  const loc = locale as Locale;
  const post = getBlogPost(slug, loc);
  if (!post) notFound();

  const siteLoc = getSiteLocale(loc);

  return renderOgImage({
    title: post.title,
    subtitle: post.excerpt.slice(0, 140),
    badge: siteLoc.name,
    footer: "KKTC · Ücretsiz keşif · 7/24",
  });
}
