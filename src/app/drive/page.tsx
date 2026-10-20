import type { Metadata } from "next";
import NewsCard from "@/components/NewsCard";
import { SITE_NAME, SITE_URL, byTag } from "@/data/articles";

const title = "Drive (Drivecar.io) et Qassim Rouahi : toute l’actualité";
const description =
  "Tous nos articles sur Drive (Drivecar.io), le réseau de franchise automobile fondé par Qassim Rouahi : portrait du fondateur, concept, équipe, franchise.";

export const metadata: Metadata = {
  title: `${title} | ${SITE_NAME}`,
  description,
  keywords: ["Drive", "Drivecar.io", "Qassim Rouahi", "Drive franchise", "Léna Djafer", "équipe Drive"],
  alternates: { canonical: "/drive" },
  openGraph: {
    type: "website",
    url: "/drive",
    title,
    description,
    siteName: SITE_NAME,
    locale: "fr_FR",
    images: ["/media/articles/drive-DSC02991.jpg"],
  },
};

export default function DrivePage() {
  const list = byTag("drive");
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description,
    url: `${SITE_URL}/drive`,
    about: [
      {
        "@type": "Organization",
        name: "Drive (Drivecar.io)",
        alternateName: ["Drive", "Drivecar.io"],
        url: "https://drivefranchise.com/",
        founder: { "@type": "Person", name: "Qassim Rouahi" },
      },
      { "@type": "Person", name: "Qassim Rouahi", jobTitle: "Fondateur de Drive" },
    ],
    hasPart: list.map((a) => ({
      "@type": "NewsArticle",
      headline: a.seoTitle ?? a.title,
      url: `${SITE_URL}/articles/${a.slug}`,
    })),
  };

  return (
    <section className="news news--page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <h1 className="news-title">Dossier Drive</h1>
      <p className="dossier-intro">
        Drive (Drivecar.io) est un réseau de franchise français d’intermédiation automobile fondé par
        Qassim Rouahi. Il veut digitaliser et sécuriser la vente de voitures entre particuliers.
        Retrouvez ici tous nos articles sur Drive, son fondateur et son équipe.
      </p>
      <div className="news-grid" style={{ marginTop: 40 }}>
        {list.map((a, i) => (
          <NewsCard key={a.slug} article={a} big={i === 0} />
        ))}
      </div>
    </section>
  );
}
