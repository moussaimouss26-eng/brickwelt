"use client";

import { FormEvent, useEffect, useState, type ReactNode } from "react";
import {
  ADMIN_DEMO_PASSWORD,
  ADMIN_SESSION_KEY,
} from "@/lib/orders";

export function AdminGate({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setAuthed(sessionStorage.getItem(ADMIN_SESSION_KEY) === "1");
    setReady(true);
  }, []);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (password.trim() === ADMIN_DEMO_PASSWORD) {
      sessionStorage.setItem(ADMIN_SESSION_KEY, "1");
      setAuthed(true);
      setError("");
      return;
    }
    setError("Falsches Passwort.");
  }

  if (!ready) {
    return (
      <div className="flex min-h-screen items-center justify-center text-sm text-brick-black/60">
        Laden…
      </div>
    );
  }

  if (!authed) {
    return (
      <div className="flex min-h-screen items-center justify-center px-4">
        <form
          onSubmit={onSubmit}
          className="w-full max-w-md rounded-3xl border border-black/5 bg-white p-8 shadow-sm"
        >
          <p className="text-xs font-bold uppercase tracking-wide text-brick-black/45">
            BrickNova Admin
          </p>
          <h1 className="mt-2 font-display text-2xl font-extrabold">Anmelden</h1>
          <p className="mt-2 text-sm text-brick-black/60">
            Demo-Zugang: Passwort <code className="rounded bg-brick-soft px-1.5 py-0.5 text-xs">bricknova</code>
          </p>
          <label className="mt-6 block text-sm font-medium">
            Passwort
            <input
              type="password"
              className="input-field mt-1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoFocus
              required
            />
          </label>
          {error && <p className="mt-2 text-sm text-brick-red">{error}</p>}
          <button type="submit" className="btn-primary mt-6 w-full">
            Einloggen
          </button>
        </form>
      </div>
    );
  }

  return <>{children}</>;
}
