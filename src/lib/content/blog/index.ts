import type { Locale } from "@/i18n/config";
import { openGraphImageUrl } from "@/lib/metadata";
import { site } from "@/lib/site";
import type { BlogPost } from "./tr";
import { blogPosts as blogPostsTr } from "./tr";
import { blogPosts as blogPostsEn } from "./en";
import { blogPosts as blogPostsRu } from "./ru";

export type { BlogPost, BlogSection } from "./tr";

const map = { tr: blogPostsTr, en: blogPostsEn, ru: blogPostsRu } as const;

const dateLocales: Record<Locale, string> = {
  tr: "tr-TR",
  en: "en-GB",
  ru: "ru-RU",
};

/** Tarihe göre yeniden eskiye sıralı */
export function getBlogPosts(locale: Locale): BlogPost[] {
  const posts = map[locale] ?? map.tr;
  return [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getBlogPost(slug: string, locale: Locale): BlogPost | undefined {
  return (map[locale] ?? map.tr).find((p) => p.slug === slug);
}

export function formatBlogDate(iso: string, locale: Locale): string {
  return new Date(iso).toLocaleDateString(dateLocales[locale] ?? dateLocales.tr, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/** Blog JSON-LD / paylaşım görseli — kanonik opengraph-image URL */
export function getBlogOgImageUrl(post: BlogPost, locale: Locale): string {
  if (post.ogImage) {
    return post.ogImage.startsWith("http") ? post.ogImage : `${site.url}${post.ogImage}`;
  }
  return openGraphImageUrl(locale, `/blog/${post.slug}`);
}
