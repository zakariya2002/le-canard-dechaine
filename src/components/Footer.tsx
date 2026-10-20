import Link from "next/link";

const COLUMNS = [
  [
    { href: "/", label: "Accueil" },
    { href: "/a-propos", label: "À propos" },
    { href: "/actualites", label: "Actualités" },
  ],
  [
    { href: "/sport", label: "Sport" },
    { href: "/politique", label: "Politique" },
    { href: "/business", label: "Business" },
  ],
  [
    { href: "/contact", label: "Nous contacter" },
    { href: "/mentions-legales", label: "Mentions légales" },
    { href: "/politique-de-confidentialite", label: "Politique de confidentialité" },
  ],
];

const SOCIALS: { label: string; href: string; path: string }[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    path: "M12 7.3A4.7 4.7 0 1 0 12 16.7 4.7 4.7 0 0 0 12 7.3Zm0 7.7a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm4.9-7.9a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0ZM20 8.2c-.1-1.5-.4-2.8-1.5-3.9S16.1 2.9 14.6 2.8c-1.5-.1-6.1-.1-7.6 0-1.5.1-2.8.4-3.9 1.5S1.6 6.7 1.6 8.2c-.1 1.5-.1 6.1 0 7.6.1 1.5.4 2.8 1.5 3.9s2.4 1.4 3.9 1.5c1.5.1 6.1.1 7.6 0 1.5-.1 2.8-.4 3.9-1.5s1.4-2.4 1.5-3.9c.1-1.5.1-6.1 0-7.6Zm-2 9.3a3 3 0 0 1-1.7 1.7c-1.2.5-4 .4-5.3.4s-4.1.1-5.3-.4a3 3 0 0 1-1.7-1.7c-.5-1.2-.4-4-.4-5.3s-.1-4.1.4-5.3a3 3 0 0 1 1.7-1.7c1.2-.5 4-.4 5.3-.4s4.1-.1 5.3.4a3 3 0 0 1 1.7 1.7c.5 1.2.4 4 .4 5.3s.1 4.1-.4 5.3Z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    path: "M6.9 21H3.2V9h3.7v12ZM5 7.4a2.1 2.1 0 1 1 0-4.3 2.1 2.1 0 0 1 0 4.3ZM21 21h-3.7v-5.8c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1V21H9.3V9h3.5v1.6h.1c.5-.9 1.7-2 3.5-2 3.8 0 4.5 2.5 4.5 5.7V21Z",
  },
  {
    label: "X",
    href: "https://x.com/",
    path: "M17.8 3h3.1l-6.8 7.7L22 21h-6.2l-4.9-6.4L5.3 21H2.2l7.2-8.3L1.8 3h6.4l4.4 5.8L17.8 3Zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5Z",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/",
    path: "M16.6 5.8A4.3 4.3 0 0 1 15.5 3h-3.1v12.4a2.6 2.6 0 1 1-2.6-2.6c.3 0 .5 0 .8.1V9.7a5.8 5.8 0 1 0 4.9 5.7V9.1a7.4 7.4 0 0 0 4.3 1.4V7.4a4.3 4.3 0 0 1-3.2-1.6Z",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    path: "M14 13.5h2.5l1-4H14v-2c0-1 0-2 2-2h1.5V2.1c-.3 0-1.6-.1-2.9-.1-2.9 0-4.6 1.7-4.6 4.9v2.6H7v4h3V22h4v-8.5Z",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/",
    path: "M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.3 5 12 5 12 5s-6.3 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.7 19 12 19 12 19s6.3 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8ZM10 15V9l5.2 3L10 15Z",
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-links">
          {COLUMNS.map((col, i) => (
            <ul key={i}>
              {col.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          ))}
        </div>

        <div className="footer-bottom">
          <p className="footer-news-title">Suivez notre actu sur la newsletter</p>
          <form className="newsletter" id="newsletter" action="#">
            <input type="email" required placeholder="VOTRE ADRESSE EMAIL" />
            <button type="submit">S&apos;inscrire</button>
            <p className="newsletter-note">
              En vous inscrivant, vous acceptez de recevoir notre newsletter.
              Désinscription possible à tout moment.
            </p>
          </form>
          <div className="socials">
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden>
                  <path d={s.path} fill="#000" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
