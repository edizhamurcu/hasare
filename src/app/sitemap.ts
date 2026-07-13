import type { MetadataRoute } from "next";
import { routing } from "@/i18n/config";
import { hreflangLanguages, localizedPath } from "@/lib/metadata";
import { getBlogPosts } from "@/lib/content/blog";
import { getCities } from "@/lib/content/cities";
import { getServices } from "@/lib/content/services";
import { sitemapStaticLastMod } from "@/lib/seo-constants";
import { site } from "@/lib/site";

const staticPaths = [
  "",
  "/hizmetler",
  "/bolgeler",
  "/blog",
  "/teklif",
  "/sss",
  "/gizlilik-politikasi",
  "/kullanim-kosullari",
  "/kvkk",
];

function entry(
  path: string,
  opts: {
    lastModified?: Date;
    changeFrequency?: MetadataRoute.Sitemap[0]["changeFrequency"];
    priority?: number;
  } = {}
): MetadataRoute.Sitemap[0] {
  return {
    url: `${site.url}${localizedPath(routing.defaultLocale, path)}`,
    lastModified: opts.lastModified ?? sitemapStaticLastMod,
    changeFrequency: opts.changeFrequency ?? "weekly",
    priority: opts.priority ?? 0.8,
    alternates: { languages: hreflangLanguages(path) },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const path of staticPaths) {
    entries.push(
      entry(path, {
        priority:
          path === ""
            ? 1
            : path === "/teklif"
              ? 0.95
              : path === "/sss"
                ? 0.9
                : path === "/hizmetler" || path === "/bolgeler"
                  ? 0.88
                  : 0.75,
        changeFrequency:
          path === "" || path === "/blog" ? "weekly" : "monthly",
      })
    );
  }

  const serviceSlugs = getServices("tr").map((s) => s.slug);
  for (const slug of serviceSlugs) {
    entries.push(
      entry(`/hizmetler/${slug}`, {
        lastModified: sitemapStaticLastMod,
        changeFrequency: "monthly",
        priority: 0.9,
      })
    );
  }

  const citySlugs = getCities("tr").map((c) => c.slug);
  for (const slug of citySlugs) {
    entries.push(
      entry(`/bolgeler/${slug}`, {
        lastModified: sitemapStaticLastMod,
        changeFrequency: "monthly",
        priority: 0.92,
      })
    );
  }

  for (const p of getBlogPosts("tr")) {
    entries.push(
      entry(`/blog/${p.slug}`, {
        lastModified: new Date(p.modified ?? p.date),
        changeFrequency: "monthly",
        priority: 0.7,
      })
    );
  }

  return entries;
}
