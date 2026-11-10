"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { User } from "lucide-react";

export default function KontoPage() {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setDone(true);
  }

  return (
    <div className="container-bw py-10">
      <div className="mx-auto max-w-md">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brick-yellow">
          <User className="h-7 w-7" />
        </div>
        <h1 className="section-title">Konto</h1>
        <p className="section-sub">
          Einfache Demo-Oberfläche – keine echte Authentifizierung.
        </p>

        {done ? (
          <div className="mt-8 rounded-2xl border border-black/5 bg-white p-6">
            <p className="font-display text-lg font-bold">Willkommen (Demo)</p>
            <p className="mt-2 text-sm text-brick-black/65">
              Es wurde kein Konto erstellt und keine Daten gespeichert.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/warenkorb" className="btn-primary">
                Zum Warenkorb
              </Link>
              <Link href="/wunschliste" className="btn-secondary">
                Wunschliste
              </Link>
            </div>
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            className="mt-8 space-y-4 rounded-2xl border border-black/5 bg-white p-6"
          >
            <div className="flex gap-2 rounded-xl bg-brick-soft p-1">
              <button
                type="button"
                className={`flex-1 rounded-lg py-2 text-sm font-bold ${
                  mode === "login" ? "bg-white shadow-sm" : ""
                }`}
                onClick={() => setMode("login")}
              >
                Anmelden
              </button>
              <button
                type="button"
                className={`flex-1 rounded-lg py-2 text-sm font-bold ${
                  mode === "register" ? "bg-white shadow-sm" : ""
                }`}
                onClick={() => setMode("register")}
              >
                Registrieren
              </button>
            </div>

            {mode === "register" && (
              <label className="block text-sm font-medium">
                Name
                <input required name="name" className="input-field mt-1" />
              </label>
            )}
            <label className="block text-sm font-medium">
              E-Mail
              <input required type="email" name="email" className="input-field mt-1" />
            </label>
            <label className="block text-sm font-medium">
              Passwort
              <input
                required
                type="password"
                name="password"
                minLength={6}
                className="input-field mt-1"
              />
            </label>
            <button type="submit" className="btn-primary w-full">
              {mode === "login" ? "Anmelden (Demo)" : "Konto erstellen (Demo)"}
            </button>
            <p className="disclaimer">
              DSGVO-Hinweis: In dieser Demo werden keine personenbezogenen Daten
              übermittelt oder dauerhaft gespeichert.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
