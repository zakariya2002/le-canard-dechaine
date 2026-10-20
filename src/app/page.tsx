import Link from "next/link";
import Arrow from "@/components/Arrow";
import NewsCard from "@/components/NewsCard";
import { ARTICLES } from "@/data/articles";

const PROGRAMS = [
  { href: "/politique", title: ["La rubrique", "Politique"], color: "#002df0" },
  { href: "/sport", title: ["La rubrique", "Sport"], color: "#27a49d" },
  { href: "/business", title: ["La rubrique", "Business"], color: "#7b3ff2" },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-cloud" aria-hidden />
        <div className="hero-video">
          <video
            src="/media/hero.mp4"
            poster="/media/hero-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            controls
          />
        </div>
        <div className="hero-text">
          <p className="hero-intro">
            Les talents sont partout.
            <br />
            Peu importe d&apos;où tu viens : d&apos;un quartier, d&apos;un petit village
            <br />
            ou d&apos;une grande métropole, nous sommes
          </p>
          <h1 className="hero-title">
            <span>Acharnés</span>
            <span>
              À te faire <mark>réussir</mark>
            </span>
          </h1>
        </div>
      </section>

      <section className="intro">
        <p className="intro-text">
          Présent dans près de <strong>20 villes en France,</strong> Le Grand Débrief
          décrypte l&apos;actualité sportive, politique et business depuis les quartiers et
          les territoires, avec des enquêtes, des analyses et des portraits en accès
          libre.
        </p>
        <div className="programs">
          {PROGRAMS.map((p) => (
            <Link key={p.href} href={p.href} className="program" style={{ background: p.color }}>
              <Arrow />
              <p>
                {p.title[0]}
                <br />
                {p.title[1]}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="news">
        <h2 className="news-title">Dernières actualités</h2>
        <div className="news-grid">
          {ARTICLES.slice(0, 3).map((a) => (
            <NewsCard key={a.slug} article={a} />
          ))}
        </div>
        <div className="news-more">
          <Link href="/actualites" className="nav-cta">
            Toutes les actualités
          </Link>
        </div>
      </section>

      <section className="join">
        <div className="join-head">
          <h2>
            Prêts à
            <br />
            débriefer
          </h2>
          <p>
            Vous souhaitez proposer un sujet, devenir partenaire, rejoindre notre
            communauté de journalistes.
            <br />
            Contactez-nous ! Nous ne manquerons pas de vous répondre rapidement.
          </p>
        </div>
        <div className="join-row join-row--big">
          <Link href="/actualites" className="tile tile--blue">
            <p>Lire nos articles</p>
            <Arrow color="#000" />
          </Link>
          <Link href="/devenir-partenaire" className="tile tile--grey">
            <p>Devenir partenaire</p>
            <Arrow color="#000" />
          </Link>
        </div>
        <div className="join-row join-row--small">
          <Link href="/proposer-un-sujet" className="tile tile--sky">
            <p>Proposer un sujet</p>
            <Arrow color="#000" size={24} />
          </Link>
          <Link href="/contact" className="tile tile--ice">
            <p>Nous contacter</p>
            <Arrow color="#000" size={24} />
          </Link>
          <Link href="/nous-rejoindre" className="tile tile--white">
            <p>Rejoindre la rédaction</p>
            <Arrow color="#000" size={24} />
          </Link>
        </div>
      </section>
    </>
  );
}
