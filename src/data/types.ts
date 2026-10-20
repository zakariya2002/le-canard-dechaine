export type Category = "sport" | "politique" | "business";

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string; source?: string }
  | { type: "list"; items: string[] }
  | { type: "img"; src: string; alt: string; caption?: string };

export type Article = {
  slug: string;
  category: Category;
  title: string;
  excerpt: string;
  image: string; // https://images.unsplash.com/photo-...?w=1600&q=80
  imageAlt: string;
  imagePosition?: string; // CSS object-position, e.g. "center 20%"
  author: string;
  date: string; // ISO yyyy-mm-dd
  readTime: number; // minutes
  featured?: boolean;
  tags?: string[]; // e.g. "drive" groups articles into a dossier page
  seoTitle?: string;
  seoDescription?: string;
  keywords?: string[];
  people?: { name: string; jobTitle?: string; sameAs?: string[] }[];
  body: Block[];
};
