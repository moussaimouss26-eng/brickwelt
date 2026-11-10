import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { DisclaimerBanner } from "@/components/ui/DisclaimerBanner";
import { categories } from "@/data/categories";
import { NewsletterForm } from "@/components/home/NewsletterForm";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-black/5 bg-brick-soft">
      <div className="container-bw py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-4 max-w-sm text-sm text-brick-black/70">
              BrickWelt – dein Demo-Shop für LEGO Sets kaufen und LEGO Angebote
              Deutschland entdecken. Premium Auswahl, faire Preise, Versand in DE.
            </p>
            <div className="mt-6">
              <p className="mb-2 text-sm font-bold">Newsletter</p>
              <NewsletterForm compact />
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-8">
            <div>
              <h3 className="font-display text-sm font-bold uppercase tracking-wide">Shop</h3>
              <ul className="mt-3 space-y-2 text-sm text-brick-black/70">
                <li>
                  <Link href="/produkte" className="hover:text-brick-red">
                    Alle Produkte
                  </Link>
                </li>
                <li>
                  <Link href="/angebote" className="hover:text-brick-red">
                    Angebote
                  </Link>
                </li>
                <li>
                  <Link href="/neuheiten" className="hover:text-brick-red">
                    Neuheiten
                  </Link>
                </li>
                <li>
                  <Link href="/geschenkideen" className="hover:text-brick-red">
                    Geschenkideen
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-display text-sm font-bold uppercase tracking-wide">
                Kategorien
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-brick-black/70">
                {categories.slice(0, 6).map((c) => (
                  <li key={c.slug}>
                    <Link href={`/kategorien/${c.slug}`} className="hover:text-brick-red">
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-sm font-bold uppercase tracking-wide">Rechtliches</h3>
              <ul className="mt-3 space-y-2 text-sm text-brick-black/70">
                <li>
                  <Link href="/impressum" className="hover:text-brick-red">
                    Impressum
                  </Link>
                </li>
                <li>
                  <Link href="/datenschutz" className="hover:text-brick-red">
                    Datenschutz
                  </Link>
                </li>
                <li>
                  <Link href="/agb" className="hover:text-brick-red">
                    AGB
                  </Link>
                </li>
                <li>
                  <Link href="/widerruf" className="hover:text-brick-red">
                    Widerrufsbelehrung
                  </Link>
                </li>
                <li>
                  <Link href="/konto" className="hover:text-brick-red">
                    Konto
                  </Link>
                </li>
                <li>
                  <Link href="/admin" className="hover:text-brick-red">
                    Admin
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 space-y-3 border-t border-black/10 pt-6">
          <DisclaimerBanner />
          <p className="text-xs text-brick-black/50">
            © {new Date().getFullYear()} BrickWelt Demo. Alle Preise in EUR inkl. MwSt.
            (Demo). Keine echte Bestellabwicklung.
          </p>
        </div>
      </div>
    </footer>
  );
}
