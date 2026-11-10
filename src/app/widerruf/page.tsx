import type { Metadata } from "next";
import { DisclaimerBanner } from "@/components/ui/DisclaimerBanner";

export const metadata: Metadata = {
  title: "Widerrufsbelehrung",
  description: "Widerrufsbelehrung (Demo) für BrickWelt.",
};

export default function WiderrufPage() {
  return (
    <div className="container-bw max-w-3xl py-10">
      <h1 className="section-title">Widerrufsbelehrung</h1>
      <div className="mt-8 space-y-6 text-sm leading-relaxed text-brick-black/80">
        <p>
          Muster-Widerrufsbelehrung für den BrickWelt Demo-Shop. Da keine echten
          Verträge geschlossen werden, dient dieser Text nur der Vollständigkeit einer
          deutschen Shop-Struktur.
        </p>
        <section>
          <h2 className="font-display text-lg font-bold">Widerrufsrecht</h2>
          <p className="mt-2">
            Verbraucher haben ein gesetzliches Widerrufsrecht. In dieser Demo wird kein
            Kaufvertrag geschlossen; ein Widerruf ist daher nicht erforderlich.
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-bold">Folgen des Widerrufs (Muster)</h2>
          <p className="mt-2">
            Im Produktivbetrieb wären Waren zurückzusenden und Zahlungen zu erstatten.
            BrickWelt Demo verarbeitet keine Zahlungen.
          </p>
        </section>
        <DisclaimerBanner />
      </div>
    </div>
  );
}
