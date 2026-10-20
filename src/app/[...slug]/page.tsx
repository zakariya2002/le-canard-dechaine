import Link from "next/link";

const ROUTES = [
  "a-propos", "devenir-partenaire", "proposer-un-sujet", "contact", "nous-rejoindre",
  "mentions-legales", "politique-de-confidentialite",
];

export function generateStaticParams() {
  return ROUTES.map((r) => ({ slug: r.split("/") }));
}

export default async function GenericPage({ params }: PageProps<"/[...slug]">) {
  const { slug } = await params;
  const title = decodeURIComponent(slug[slug.length - 1]).replace(/-/g, " ");

  return (
    <section className="generic">
      <h1>{title}</h1>
      <p>Cette page arrive bientôt. Restez à l’écoute !</p>
      <Link href="/" className="nav-cta">
        Retour à l&apos;accueil
      </Link>
    </section>
  );
}
