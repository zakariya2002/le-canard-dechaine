import type { MetadataRoute } from "next";
import { ARTICLES, SITE_URL } from "@/data/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/actualites", "/drive", "/sport", "/politique", "/business"].map((p) => ({
    url: `${SITE_URL}${p}`,
    changeFrequency: "daily" as const,
    priority: p === "" || p === "/drive" ? 1 : 0.8,
  }));
  const articles = ARTICLES.map((a) => ({
    url: `${SITE_URL}/articles/${a.slug}`,
    lastModified: a.date,
    changeFrequency: "weekly" as const,
    priority: a.tags?.includes("drive") ? 1 : 0.6,
    images: [a.image.startsWith("http") ? a.image : `${SITE_URL}${a.image}`],
  }));
  return [...pages, ...articles];
}
