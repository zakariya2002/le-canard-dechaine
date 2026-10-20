"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";

export const NAV = [
  { href: "/a-propos", label: "À propos" },
  { href: "/programmes", label: "Programmes" },
  { href: "/evenements", label: "Événements" },
  { href: "/medias", label: "Médias" },
  { href: "/partenaires", label: "Partenaires" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <Link href="/" className="nav-logo" onClick={() => setOpen(false)}>
        <Logo />
      </Link>
      <div className={`nav-links ${open ? "is-open" : ""}`}>
        {NAV.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </Link>
        ))}
        <Link href="/postuler" className="nav-cta" onClick={() => setOpen(false)}>
          Je postule
        </Link>
      </div>
      <button
        className={`burger ${open ? "is-open" : ""}`}
        aria-label="Menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}
