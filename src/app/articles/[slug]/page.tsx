import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import NewsCard from "@/components/NewsCard";
import { ARTICLES, CATEGORIES, byCategory, formatDate, getArticle } from "@/data/articles";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps<"/articles/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: `${article.title} — Le Canard Déchaîné`,
    description: article.excerpt,
    openGraph: { images: [article.image] },
  };
}

export default async function ArticlePage({ params }: PageProps<"/articles/[slug]">) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const cat = CATEGORIES[article.category];
  const related = byCategory(article.category)
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  return (
    <>
      <article className="article">
        <header className="article-head">
          <Link href={`/${article.category}`} className="article-cat" style={{ background: cat.color }}>
            {cat.label}
          </Link>
          <h1>{article.title}</h1>
          <p className="article-excerpt">{article.excerpt}</p>
          <p className="article-meta">
            Par <strong>{article.author}</strong> · {formatDate(article.date)} · {article.readTime} min de lecture
          </p>
        </header>
        <figure className="article-cover">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={article.image} alt={article.imageAlt} style={{ objectPosition: article.imagePosition }} />
        </figure>
        <div className="article-body">
          {article.body.map((b, i) => {
            switch (b.type) {
              case "h2":
                return <h2 key={i}>{b.text}</h2>;
              case "quote":
                return (
                  <blockquote key={i} style={{ borderColor: cat.color }}>
                    <p>« {b.text} »</p>
                    {b.source && <cite>— {b.source}</cite>}
                  </blockquote>
                );
              case "list":
                return (
                  <ul key={i}>
                    {b.items.map((it, j) => (
                      <li key={j}>{it}</li>
                    ))}
                  </ul>
                );
              case "img":
                return (
                  <figure key={i} className="article-figure">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={b.src} alt={b.alt} loading="lazy" />
                    {b.caption && <figcaption>{b.caption}</figcaption>}
                  </figure>
                );
              default:
                return <p key={i}>{b.text}</p>;
            }
          })}
        </div>
      </article>

      {related.length > 0 && (
        <section className="news">
          <h2 className="news-title">À lire aussi</h2>
          <div className="news-grid">
            {related.map((a) => (
              <NewsCard key={a.slug} article={a} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
