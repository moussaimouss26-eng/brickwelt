"use client";

import { FormEvent, useState } from "react";
import { Mail, Check } from "lucide-react";

export function NewsletterForm({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setDone(true);
  }

  if (done) {
    return (
      <p className="inline-flex items-center gap-2 text-sm font-semibold text-brick-blue">
        <Check className="h-4 w-4" /> Danke! (Demo – keine echte Anmeldung)
      </p>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className={`flex w-full ${compact ? "max-w-sm flex-col gap-2 sm:flex-row" : "max-w-lg flex-col gap-3 sm:flex-row"}`}
    >
      <label className="relative flex-1">
        <span className="sr-only">E-Mail-Adresse</span>
        <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brick-black/40" />
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="name@email.de"
          className="input-field pl-10"
        />
      </label>
      <button type="submit" className="btn-primary whitespace-nowrap">
        Anmelden
      </button>
    </form>
  );
}
