import type { Locale } from "@/i18n/config";
import {
  getBlogPosts,
  getBlogPost,
  getBlogOgImageUrl,
  formatBlogDate,
  type BlogPost,
  type BlogSection,
} from "./content/blog";

export type { BlogPost, BlogSection };
export { getBlogPosts, getBlogPost, getBlogOgImageUrl, formatBlogDate };

export const blogPosts = getBlogPosts("tr");

export function blogPostsFor(locale: Locale): BlogPost[] {
  return getBlogPosts(locale);
}
