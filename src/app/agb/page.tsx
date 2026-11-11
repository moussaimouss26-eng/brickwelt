import type { Metadata } from "next";
import { DisclaimerBanner } from "@/components/ui/DisclaimerBanner";
import { siteContact } from "@/data/contact";

export const metadata: Metadata = {
  title: "AGB",
  description: "Allgemeine Geschäftsbedingungen (Demo) von BrickNova.",
};

export default function AgbPage() {
  return (
    <div className="container-bw max-w-3xl py-10">
      <h1 className="section-title">Allgemeine Geschäftsbedingungen</h1>
      <div className="mt-8 space-y-6 text-sm leading-relaxed text-brick-black/80">
        <p>
          Die folgenden AGB sind Platzhalter für den BrickNova Demo-Shop und begründen
          kein reales Vertragsverhältnis.
        </p>
        <section>
          <h2 className="font-display text-lg font-bold">§1 Geltungsbereich</h2>
          <p className="mt-2">
            Diese Demo-AGB gelten für die Nutzung der BrickNova Website zu
            Demonstrationszwecken. Anbieter: {siteContact.legalName},{" "}
            {siteContact.addressLine}.
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-bold">§2 Angebote & Preise</h2>
          <p className="mt-2">
            Alle Preise sind in Euro angegeben und dienen der Demonstration. Es finden
            keine echten Bestellungen oder Zahlungen statt.
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-bold">§3 Versand</h2>
          <p className="mt-2">
            Versand innerhalb Deutschlands. Standardversand 4,99&nbsp;€; ab einem
            Bestellwert von 49&nbsp;€ versandkostenfrei. Versandort:{" "}
            {siteContact.addressLine}. Lieferzeit typischerweise 2–5 Werktage nach
            Bearbeitung. Rückfragen:{" "}
            <a href={siteContact.phoneHref} className="font-medium text-brick-red hover:underline">
              {siteContact.phoneDisplay}
            </a>
            {" · "}
            <a href={`mailto:${siteContact.email}`} className="font-medium text-brick-red hover:underline">
              {siteContact.email}
            </a>
            .
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-bold">§4 Widerruf &amp; Retouren</h2>
          <p className="mt-2">
            Verbrauchern steht ein Widerrufsrecht von 14 Tagen zu. Details und Adresse:
            siehe{" "}
            <a href="/widerruf" className="font-medium text-brick-red hover:underline">
              Widerrufsbelehrung
            </a>
            .
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-bold">§5 Markenhinweis</h2>
          <p className="mt-2">
            BrickNova verkauft ausschließlich Spielzeug unter eigener Marke.
            Es werden keine Lizenzen oder Autorisierungen Dritter beansprucht.
          </p>
        </section>
        <DisclaimerBanner />
      </div>
    </div>
  );
}
