"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";

const KEY = "canard-cookies";
const listeners = new Set<() => void>();

function readChoice() {
  try {
    return localStorage.getItem(KEY);
  } catch {
    return null;
  }
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

export default function CookieBanner() {
  // Server snapshot: treat as already answered so the banner never flashes during SSR.
  const choice = useSyncExternalStore(subscribe, readChoice, () => "ssr");

  const close = (value: string) => {
    try {
      localStorage.setItem(KEY, value);
    } catch {}
    listeners.forEach((l) => l());
  };

  if (choice) return null;

  return (
    <div className="cookie">
      <p>
        Ce site utilise des cookies et vous donne le contrôle sur ce que vous
        souhaitez activer.{" "}
        <button className="cookie-link" onClick={() => close("refused")}>
          Continuer sans accepter.
        </button>
      </p>
      <div className="cookie-actions">
        <button className="cookie-accept" onClick={() => close("accepted")}>
          Accepter
        </button>
        <Link className="cookie-more" href="/politique-de-confidentialite">
          En savoir plus
        </Link>
      </div>
    </div>
  );
}
