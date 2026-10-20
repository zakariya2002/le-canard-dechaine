import Link from "next/link";
import Arrow from "@/components/Arrow";

const PROGRAMS = [
  { href: "/programmes/entrepreneuriat", title: ["Le programme", "Entrepreneuriat"], color: "#002df0" },
  { href: "/programmes/employabilite", title: ["Le programme", "Employabilité"], color: "#27a49d" },
  { href: "/lever-des-fonds", title: ["Je veux lever", "des fonds"], color: "#7b3ff2" },
];

const ARTICLES = [
  {
    href: "/articles/salon-entrepreneurs",
    title: "Les Acharnés au Salon des Entrepreneurs !",
    tag: "Les Acharnés",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1000&q=80",
  },
  {
    href: "/articles/promotion-nationale",
    title: "Promotion nationale : 2ème phase de sélection",
    tag: "Les Acharnés",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1000&q=80",
  },
  {
    href: "/articles/together-4",
    title: "TOGETHER ACHARNÉS 4",
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1000&q=80",
  },
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
          Présents dans près de <strong>20 villes en France,</strong> Les Acharnés
          accompagnent les habitants des Quartiers Prioritaires de la Ville et des
          milieux ruraux vers l&apos;entrepreneuriat et le retour à l&apos;emploi grâce à
          des programmes de formations gratuits.
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
          {ARTICLES.map((a) => (
            <Link key={a.href} href={a.href} className="news-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={a.img} alt={a.title} loading="lazy" />
              <div className="news-overlay">
                {a.tag && <span className="news-tag">{a.tag}</span>}
                <h3>{a.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="join">
        <div className="join-head">
          <h2>
            Vous êtes
            <br />
            acharnés
          </h2>
          <p>
            Vous souhaitez devenir candidat, partenaire, rejoindre notre communauté
            d&apos;experts.
            <br />
            Contactez-nous ! Nous ne manquerons pas de vous répondre rapidement.
          </p>
        </div>
        <div className="join-row join-row--big">
          <Link href="/programmes" className="tile tile--blue">
            <p>Rejoindre un programme</p>
            <Arrow color="#000" />
          </Link>
          <Link href="/devenir-partenaire" className="tile tile--grey">
            <p>Devenir partenaire</p>
            <Arrow color="#000" />
          </Link>
        </div>
        <div className="join-row join-row--small">
          <Link href="/devenir-formateur" className="tile tile--sky">
            <p>Devenir formateur</p>
            <Arrow color="#000" size={24} />
          </Link>
          <Link href="/contact" className="tile tile--ice">
            <p>Nous contacter</p>
            <Arrow color="#000" size={24} />
          </Link>
          <Link href="/nous-rejoindre" className="tile tile--white">
            <p>Rejoindre l&apos;équipe acharnée</p>
            <Arrow color="#000" size={24} />
          </Link>
        </div>
      </section>
    </>
  );
}
