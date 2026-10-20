import Link from "next/link";
import { CATEGORIES, type Article } from "@/data/articles";

export default function NewsCard({ article, big = false }: { article: Article; big?: boolean }) {
  return (
    <Link href={`/articles/${article.slug}`} className={`news-card ${big ? "news-card--big" : ""}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={article.image} alt={article.imageAlt} loading="lazy" />
      <div className="news-overlay">
        <span className="news-tag">{CATEGORIES[article.category].label}</span>
        {big && <p className="news-excerpt">{article.excerpt}</p>}
        <h3>{article.title}</h3>
      </div>
    </Link>
  );
}
