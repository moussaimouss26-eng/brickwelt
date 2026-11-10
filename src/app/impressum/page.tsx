import type { Metadata } from "next";
import { DisclaimerBanner } from "@/components/ui/DisclaimerBanner";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und Anbieterkennzeichnung von BrickWelt (Demo).",
};

export default function ImpressumPage() {
  return (
    <div className="container-bw prose-bw max-w-3xl py-10">
      <h1 className="section-title">Impressum</h1>
      <div className="mt-8 space-y-6 text-sm leading-relaxed text-brick-black/80">
        <section>
          <h2 className="font-display text-lg font-bold text-brick-black">
            Angaben gemäß § 5 TMG (Demo)
          </h2>
          <p className="mt-2">
            BrickWelt Demo GmbH (Muster)
            <br />
            Musterstraße 12
            <br />
            10115 Berlin
            <br />
            Deutschland
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-bold text-brick-black">Kontakt</h2>
          <p className="mt-2">
            E-Mail: demo@brickwelt.example
            <br />
            Telefon: +49 (0)30 123456 (Demo)
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-bold text-brick-black">
            Vertreten durch
          </h2>
          <p className="mt-2">Geschäftsführung: Max Mustermann (Demo)</p>
        </section>
        <section>
          <h2 className="font-display text-lg font-bold text-brick-black">
            Umsatzsteuer-ID
          </h2>
          <p className="mt-2">DE000000000 (Platzhalter)</p>
        </section>
        <DisclaimerBanner />
        <p className="disclaimer">
          Dies ist eine Demo-Website ohne echte Geschäftstätigkeit. Alle Angaben sind
          Platzhalter.
        </p>
      </div>
    </div>
  );
}
