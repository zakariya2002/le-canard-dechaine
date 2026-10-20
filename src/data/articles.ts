import type { Article, Category } from "./types";
import { sportArticles } from "./articles-sport";
import { politiqueArticles } from "./articles-politique";
import { businessArticles } from "./articles-business";
import { driveArticles } from "./articles-drive";

export type { Article, Category } from "./types";

export const CATEGORIES: Record<Category, { label: string; color: string }> = {
  sport: { label: "Sport", color: "#27a49d" },
  politique: { label: "Politique", color: "#002df0" },
  business: { label: "Business", color: "#7b3ff2" },
};

export const ARTICLES: Article[] = [
  ...sportArticles,
  ...politiqueArticles,
  ...businessArticles,
  ...driveArticles,
].sort((a, b) => b.date.localeCompare(a.date));

export function getArticle(slug: string) {
  return ARTICLES.find((a) => a.slug === slug);
}

export function byTag(tag: string) {
  return ARTICLES.filter((a) => a.tags?.includes(tag));
}

export const SITE_URL = "https://le-canard-dechaine.vercel.app";
export const SITE_NAME = "Le Canard Déchaîné";

export function byCategory(category: Category) {
  return ARTICLES.filter((a) => a.category === category);
}

export function formatDate(iso: string) {
  return new Date(iso + "T12:00:00").toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
