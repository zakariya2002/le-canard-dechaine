import Link from "next/link";
import NewsCard from "./NewsCard";
import { ARTICLES, CATEGORIES, byCategory, type Category } from "@/data/articles";

const FILTERS: { href: string; label: string; key?: Category }[] = [
  { href: "/actualites", label: "Tout" },
  { href: "/sport", label: "Sport", key: "sport" },
  { href: "/politique", label: "Politique", key: "politique" },
  { href: "/business", label: "Business", key: "business" },
];

export default function ArticleList({ category }: { category?: Category }) {
  const list = category ? byCategory(category) : ARTICLES;
  const featured = list.find((a) => a.featured) ?? list[0];
  const rest = list.filter((a) => a !== featured);

  return (
    <section className="news news--page">
      <h1 className="news-title">{category ? CATEGORIES[category].label : "Toutes les actualités"}</h1>
      <nav className="filters">
        {FILTERS.map((f) => (
          <Link key={f.href} href={f.href} className={`filter ${f.key === category ? "is-active" : ""}`}>
            {f.label}
          </Link>
        ))}
      </nav>
      <div className="news-grid">
        <NewsCard article={featured} big />
        {rest.map((a) => (
          <NewsCard key={a.slug} article={a} />
        ))}
      </div>
    </section>
  );
}
