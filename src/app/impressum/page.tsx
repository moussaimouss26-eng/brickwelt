import type { Metadata } from "next";
import { DisclaimerBanner } from "@/components/ui/DisclaimerBanner";
import { ContactDetails } from "@/components/ui/ContactDetails";
import { addressMultiline, siteContact } from "@/data/contact";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und Anbieterkennzeichnung von BrickWelt (Demo).",
};

export default function ImpressumPage() {
  const address = addressMultiline();

  return (
    <div className="container-bw prose-bw max-w-3xl py-10">
      <h1 className="section-title">Impressum</h1>
      <div className="mt-8 space-y-8 text-sm leading-relaxed text-brick-black/80">
        <section>
          <h2 className="font-display text-lg font-bold text-brick-black">
            Angaben gemäß § 5 TMG
          </h2>
          <p className="mt-3">
            {siteContact.legalName}
            <br />
            {address.map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </section>

        <section className="rounded-2xl border border-black/5 bg-brick-soft/60 p-6">
          <h2 className="font-display text-lg font-bold text-brick-black">Kontakt</h2>
          <div className="mt-4">
            <ContactDetails showEmail />
          </div>
        </section>

        <section>
          <h2 className="font-display text-lg font-bold text-brick-black">
            Umsatzsteuer-ID
          </h2>
          <p className="mt-2">
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
            <br />
            DE000000000 (Platzhalter)
          </p>
        </section>

        <DisclaimerBanner />
        <p className="disclaimer">
          Dies ist eine Demo-Website. Bestellungen und Zahlungen werden nicht real
          ausgeführt.
        </p>
      </div>
    </div>
  );
}
