"use client";

import { useEffect, useState } from "react";

const KEY = "acharnes-cookies";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const close = (value: string) => {
    try {
      localStorage.setItem(KEY, value);
    } catch {}
    setVisible(false);
  };

  if (!visible) return null;

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
        <a className="cookie-more" href="/politique-de-confidentialite">
          En savoir plus
        </a>
      </div>
    </div>
  );
}
