import type { Metadata } from "next";
import { Inter, Poppins, Saira_Extra_Condensed } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});
const display = Saira_Extra_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://le-canard-dechaine.vercel.app"),
  title: "Le Canard Déchaîné : le média qui fait réussir les talents",
  description:
    "Le Canard Déchaîné accompagne les talents des quartiers et des territoires ruraux vers l'entrepreneuriat et l'emploi.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${poppins.variable} ${display.variable}`}
    >
      <body>
        <CookieBanner />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
