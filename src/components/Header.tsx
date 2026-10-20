"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";

export const NAV = [
  { href: "/actualites", label: "Actualités" },
  { href: "/sport", label: "Sport" },
  { href: "/politique", label: "Politique" },
  { href: "/business", label: "Business" },
  { href: "/a-propos", label: "À propos" },
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
        <Link href="#newsletter" className="nav-cta" onClick={() => setOpen(false)}>
          Newsletter
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
