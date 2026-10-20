import type { Article, Category } from "./types";
import { sportArticles } from "./articles-sport";
import { politiqueArticles } from "./articles-politique";
import { businessArticles } from "./articles-business";
import { driveArticles } from "./articles-drive";
import { portraitArticles } from "./articles-portraits";
import { sport2Articles } from "./articles-sport-2";
import { sport3Articles } from "./articles-sport-3";
import { politique2Articles } from "./articles-politique-2";
import { politique3Articles } from "./articles-politique-3";
import { business2Articles } from "./articles-business-2";
import { business3Articles } from "./articles-business-3";

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
  ...portraitArticles,
  ...sport2Articles,
  ...sport3Articles,
  ...politique2Articles,
  ...politique3Articles,
  ...business2Articles,
  ...business3Articles,
].sort((a, b) => b.date.localeCompare(a.date));

export function getArticle(slug: string) {
  return ARTICLES.find((a) => a.slug === slug);
}

export function byTag(tag: string) {
  return ARTICLES.filter((a) => a.tags?.includes(tag));
}

export const SITE_URL = "https://le-grand-debrief.vercel.app";
export const SITE_NAME = "Le Grand Débrief";

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
