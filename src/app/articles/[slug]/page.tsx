import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import NewsCard from "@/components/NewsCard";
import {
  ARTICLES,
  CATEGORIES,
  SITE_NAME,
  SITE_URL,
  byCategory,
  byTag,
  formatDate,
  getArticle,
} from "@/data/articles";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps<"/articles/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  const title = article.seoTitle ?? article.title;
  const description = article.seoDescription ?? article.excerpt;
  const url = `/articles/${article.slug}`;
  return {
    title: `${title} | ${SITE_NAME}`,
    description,
    keywords: article.keywords,
    authors: [{ name: article.author }],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title,
      description,
      siteName: SITE_NAME,
      locale: "fr_FR",
      publishedTime: article.date,
      authors: [article.author],
      tags: article.keywords,
      images: [{ url: article.image, alt: article.imageAlt }],
    },
    twitter: { card: "summary_large_image", title, description, images: [article.image] },
  };
}

export default async function ArticlePage({ params }: PageProps<"/articles/[slug]">) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const cat = CATEGORIES[article.category];
  const dossier = article.tags?.includes("drive")
    ? byTag("drive").filter((a) => a.slug !== article.slug)
    : [];
  const related = (dossier.length ? dossier : byCategory(article.category))
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  const abs = (path: string) => (path.startsWith("http") ? path : `${SITE_URL}${path}`);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.seoTitle ?? article.title,
    description: article.seoDescription ?? article.excerpt,
    image: [abs(article.image)],
    datePublished: article.date,
    dateModified: article.date,
    inLanguage: "fr-FR",
    mainEntityOfPage: abs(`/articles/${article.slug}`),
    articleSection: cat.label,
    keywords: article.keywords?.join(", "),
    author: { "@type": "Person", name: article.author },
    publisher: {
      "@type": "NewsMediaOrganization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    ...(article.people && {
      about: article.people.map((p) => ({ "@type": "Person", ...p })),
      mentions: article.tags?.includes("drive")
        ? [
            {
              "@type": "Organization",
              name: "Drive (Drivecar.io)",
              alternateName: ["Drive", "Drivecar.io", "Drive franchise"],
              url: "https://drivefranchise.com/",
              sameAs: ["https://www.linkedin.com/company/drivecar-io/"],
              founder: { "@type": "Person", name: "Qassim Rouahi" },
            },
          ]
        : undefined,
    }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
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
                    {b.source && <cite>{b.source}</cite>}
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
                  <figure key={i} className={`article-figure ${b.size === "narrow" ? "article-figure--narrow" : ""}`}>
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
        {dossier.length > 0 && (
          <aside className="dossier">
            <p className="dossier-label">Dossier Drive</p>
            <ul>
              {dossier.map((a) => (
                <li key={a.slug}>
                  <Link href={`/articles/${a.slug}`}>{a.title}</Link>
                </li>
              ))}
            </ul>
            <Link href="/drive" className="dossier-all">
              Tout le dossier Drive et Qassim Rouahi →
            </Link>
          </aside>
        )}
      </article>

      {related.length > 0 && (
        <section className="news">
          <h2 className="news-title">{dossier.length ? "Sur Drive" : "À lire aussi"}</h2>
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
