"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie } from "lucide-react";

const KEY = "brickwelt-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  function accept(all: boolean) {
    try {
      localStorage.setItem(KEY, all ? "all" : "essential");
    } catch {
      /* ignore */
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie-Hinweis"
      className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-xl rounded-2xl border border-black/10 bg-white p-5 shadow-brick sm:inset-x-auto sm:right-6 sm:bottom-6"
    >
      <div className="flex gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brick-yellow/80">
          <Cookie className="h-5 w-5" aria-hidden />
        </div>
        <div>
          <h2 className="font-display text-base font-bold">Cookies & Datenschutz</h2>
          <p className="mt-1 text-sm text-brick-black/70">
            Wir verwenden notwendige Cookies für den Warenkorb und optional Statistik.
            Mehr in unserer{" "}
            <Link href="/datenschutz" className="font-semibold text-brick-blue underline">
              Datenschutzerklärung
            </Link>
            .
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <button type="button" className="btn-primary !py-2 !text-xs" onClick={() => accept(true)}>
              Alle akzeptieren
            </button>
            <button
              type="button"
              className="btn-secondary !py-2 !text-xs"
              onClick={() => accept(false)}
            >
              Nur notwendige
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
