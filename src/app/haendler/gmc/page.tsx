import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, absoluteUrl } from "@/lib/site";
import { siteContact } from "@/data/contact";

export const metadata: Metadata = {
  title: "Google Merchant Center Checkliste",
  robots: { index: false, follow: false },
  alternates: { canonical: "/haendler/gmc" },
};

export default function GmcChecklistPage() {
  return (
    <div className="container-bw max-w-3xl py-10">
      <h1 className="section-title">GMC-Checkliste</h1>
      <p className="section-sub">
        Interne Übersicht für die Einrichtung von Google Merchant Center für{" "}
        {SITE_URL}.
      </p>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-brick-black/80">
        <section className="rounded-2xl border border-black/5 bg-white p-5">
          <h2 className="font-display text-lg font-bold text-brick-black">
            Feed &amp; Technik (auf der Website)
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              Produktfeed (TSV):{" "}
              <a
                className="font-medium text-brick-red hover:underline"
                href="/feeds/google-merchant"
              >
                {absoluteUrl("/feeds/google-merchant")}
              </a>
            </li>
            <li>
              Sitemap:{" "}
              <a className="text-brick-red hover:underline" href="/sitemap.xml">
                {absoluteUrl("/sitemap.xml")}
              </a>
            </li>
            <li>
              robots.txt:{" "}
              <a className="text-brick-red hover:underline" href="/robots.txt">
                {absoluteUrl("/robots.txt")}
              </a>
            </li>
            <li>Product JSON-LD auf jeder Produktseite (Preis EUR, Neu, Lager, Bild, SKU/MPN)</li>
            <li>Organization + WebSite Schema auf allen Seiten</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-black/5 bg-white p-5">
          <h2 className="font-display text-lg font-bold text-brick-black">
            Manuell in der GMC-Konsole
          </h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5">
            <li>Business / Website-Claim für {SITE_URL} abschließen (HTML-Tag oder DNS).</li>
            <li>
              Primary feed anlegen → Scheduled fetch → URL{" "}
              <code className="rounded bg-brick-soft px-1">
                {absoluteUrl("/feeds/google-merchant")}
              </code>
            </li>
            <li>Versand für DE konfigurieren (4,99 € / kostenlos ab 49 €) und Retouren (14 Tage).</li>
            <li>Steuern / MwSt. für DE hinterlegen.</li>
            <li>
              Marken-/Markenrechtsfragen prüfen: Produkte als unabhängiger Händler,{" "}
              <strong>keine</strong> offizielle LEGO-Autorisierung behaupten.
            </li>
            <li>GTINs fehlen oft → `identifier_exists=no` bzw. MPN aus Set-Nr.; echte GTINs nachpflegen wenn verfügbar.</li>
            <li>Zahlungsanbieter / Checkout für Merchant-Review testen (aktuell Demo-Checkout ohne echte Zahlung).</li>
            <li>
              Kontakt prüfen: {siteContact.addressLine}, {siteContact.phoneDisplay},{" "}
              {siteContact.email}
            </li>
          </ol>
        </section>

        <section className="rounded-2xl border border-black/5 bg-white p-5">
          <h2 className="font-display text-lg font-bold text-brick-black">
            Rechtliche Seiten
          </h2>
          <ul className="mt-3 space-y-2">
            <li>
              <Link href="/impressum" className="text-brick-red hover:underline">
                Impressum
              </Link>
            </li>
            <li>
              <Link href="/datenschutz" className="text-brick-red hover:underline">
                Datenschutz
              </Link>
            </li>
            <li>
              <Link href="/agb" className="text-brick-red hover:underline">
                AGB / Versand
              </Link>
            </li>
            <li>
              <Link href="/widerruf" className="text-brick-red hover:underline">
                Widerruf / Retouren
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
