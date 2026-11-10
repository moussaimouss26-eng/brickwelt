import type { Metadata } from "next";
import { DisclaimerBanner } from "@/components/ui/DisclaimerBanner";
import { siteContact } from "@/data/contact";

export const metadata: Metadata = {
  title: "AGB",
  description: "Allgemeine Geschäftsbedingungen (Demo) von BrickWelt.",
};

export default function AgbPage() {
  return (
    <div className="container-bw max-w-3xl py-10">
      <h1 className="section-title">Allgemeine Geschäftsbedingungen</h1>
      <div className="mt-8 space-y-6 text-sm leading-relaxed text-brick-black/80">
        <p>
          Die folgenden AGB sind Platzhalter für den BrickWelt Demo-Shop und begründen
          kein reales Vertragsverhältnis.
        </p>
        <section>
          <h2 className="font-display text-lg font-bold">§1 Geltungsbereich</h2>
          <p className="mt-2">
            Diese Demo-AGB gelten für die Nutzung der BrickWelt Website zu
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
            Angezeigte Versandkosten (kostenlos ab 49 €) sind Beispielwerte für den
            deutschen Markt. Versandadresse / Lagerort für diese Demo:{" "}
            {siteContact.addressLine}. Rückfragen zum Versand unter{" "}
            <a href={siteContact.phoneHref} className="font-medium text-brick-red hover:underline">
              {siteContact.phoneDisplay}
            </a>
            .
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-bold">§4 Markenhinweis</h2>
          <p className="mt-2">
            BrickWelt ist ein unabhängiger Shop und nicht mit der LEGO Group verbunden.
          </p>
        </section>
        <DisclaimerBanner />
      </div>
    </div>
  );
}
