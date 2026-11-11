import type { Metadata } from "next";
import { DisclaimerBanner } from "@/components/ui/DisclaimerBanner";
import { ContactDetails } from "@/components/ui/ContactDetails";
import { siteContact } from "@/data/contact";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung von BrickNova – DSGVO-orientierte Demo-Informationen.",
};

export default function DatenschutzPage() {
  return (
    <div className="container-bw max-w-3xl py-10">
      <h1 className="section-title">Datenschutzerklärung</h1>
      <div className="mt-8 space-y-6 text-sm leading-relaxed text-brick-black/80">
        <p>
          BrickNova nimmt den Schutz personenbezogener Daten ernst. Diese Demo-Seite
          erläutert, welche Daten in einer Produktivumgebung typischerweise verarbeitet
          würden und was in dieser Demo lokal geschieht.
        </p>
        <section>
          <h2 className="font-display text-lg font-bold text-brick-black">
            1. Verantwortliche Stelle
          </h2>
          <p className="mt-2">
            Verantwortlicher im Sinne der DSGVO ist {siteContact.legalName},{" "}
            {siteContact.addressLine}, {siteContact.country}.
          </p>
          <div className="mt-4 rounded-2xl border border-black/5 bg-brick-soft/60 p-5">
            <ContactDetails />
          </div>
        </section>
        <section>
          <h2 className="font-display text-lg font-bold text-brick-black">
            2. Daten in dieser Demo
          </h2>
          <p className="mt-2">
            Warenkorb und Wunschliste werden ausschließlich im lokalen Speicher deines
            Browsers (localStorage) abgelegt. Newsletter- und Checkout-Formulare senden
            keine Daten an einen Server.
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-bold text-brick-black">3. Cookies</h2>
          <p className="mt-2">
            Wir verwenden einen lokalen Eintrag für deine Cookie-Entscheidung. Essenzielle
            Funktionen (Warenkorb) benötigen lokalen Speicher. Optionale Statistik-Cookies
            werden in dieser Demo nicht geladen.
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-bold text-brick-black">4. Deine Rechte</h2>
          <p className="mt-2">
            Nach DSGVO hast du u. a. Rechte auf Auskunft, Berichtigung, Löschung,
            Einschränkung und Widerspruch. In der Demo kannst du localStorage in den
            Browser-Einstellungen leeren.
          </p>
        </section>
        <DisclaimerBanner />
      </div>
    </div>
  );
}
