"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/cart-context";
import { getProductById } from "@/data/products";
import { formatEUR } from "@/lib/format";
import { buildCheckoutOrder, persistNewOrder } from "@/lib/orders";
import { siteContact } from "@/data/contact";
import { CheckCircle2 } from "lucide-react";

export function CheckoutForm() {
  const { items, subtotal, clear, hydrated } = useCart();
  const [done, setDone] = useState(false);
  const [orderId, setOrderId] = useState<string | null>(null);

  if (!hydrated) {
    return <p className="text-sm text-brick-black/60">Laden…</p>;
  }

  if (done) {
    return (
      <div className="mx-auto max-w-lg rounded-2xl border border-black/5 bg-white px-6 py-16 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600" />
        <h1 className="mt-4 font-display text-2xl font-extrabold">
          Bestellung erfasst (Demo)
        </h1>
        <p className="mt-2 text-sm text-brick-black/65">
          Es wurde keine echte Zahlung ausgeführt. Die Bestellung liegt im Admin-Panel.
        </p>
        {orderId && (
          <p className="mt-3 font-display text-lg font-bold text-brick-red">{orderId}</p>
        )}
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/produkte" className="btn-primary inline-flex">
            Weiter stöbern
          </Link>
          <Link href="/admin/bestellungen" className="btn-secondary inline-flex">
            Im Admin ansehen
          </Link>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-black/15 px-6 py-16 text-center">
        <p className="font-display text-xl font-bold">Kein Warenkorb</p>
        <Link href="/produkte" className="btn-primary mt-6 inline-flex">
          Produkte ansehen
        </Link>
      </div>
    );
  }

  const shipping = subtotal >= 49 ? 0 : 4.99;
  const total = subtotal + shipping;

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const order = buildCheckoutOrder(
      {
        vorname: String(fd.get("vorname") || "").trim(),
        nachname: String(fd.get("nachname") || "").trim(),
        email: String(fd.get("email") || "").trim(),
        strasse: String(fd.get("strasse") || "").trim(),
        plz: String(fd.get("plz") || "").trim(),
        ort: String(fd.get("ort") || "").trim(),
        land: String(fd.get("land") || "").trim(),
      },
      items
    );
    if (order) {
      persistNewOrder(order);
      setOrderId(order.id);
    }
    clear();
    setDone(true);
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-8 lg:grid-cols-12">
      <div className="space-y-6 lg:col-span-7">
        <fieldset className="rounded-2xl border border-black/5 bg-white p-6">
          <legend className="font-display text-lg font-bold">Lieferadresse (DE)</legend>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium">
              Vorname
              <input required name="vorname" className="input-field mt-1" autoComplete="given-name" />
            </label>
            <label className="block text-sm font-medium">
              Nachname
              <input required name="nachname" className="input-field mt-1" autoComplete="family-name" />
            </label>
            <label className="block text-sm font-medium sm:col-span-2">
              Straße und Hausnummer
              <input required name="strasse" className="input-field mt-1" autoComplete="street-address" />
            </label>
            <label className="block text-sm font-medium">
              PLZ
              <input
                required
                name="plz"
                pattern="[0-9]{5}"
                className="input-field mt-1"
                autoComplete="postal-code"
                placeholder="12345"
              />
            </label>
            <label className="block text-sm font-medium">
              Ort
              <input required name="ort" className="input-field mt-1" autoComplete="address-level2" />
            </label>
            <label className="block text-sm font-medium sm:col-span-2">
              Land
              <input
                required
                name="land"
                className="input-field mt-1"
                defaultValue="Deutschland"
                autoComplete="country-name"
              />
            </label>
            <label className="block text-sm font-medium sm:col-span-2">
              E-Mail
              <input
                required
                type="email"
                name="email"
                className="input-field mt-1"
                autoComplete="email"
              />
            </label>
          </div>
        </fieldset>
        <p className="disclaimer">
          Demo-Checkout: Bestellungen werden lokal im Browser gespeichert und erscheinen im
          Admin-Panel. Keine echte Zahlung. BrickWelt ist nicht mit der LEGO Group verbunden.
        </p>
      </div>

      <aside className="h-fit space-y-4 lg:col-span-5">
        <div className="rounded-2xl border border-black/5 bg-brick-soft/50 p-6">
          <h2 className="font-display text-lg font-bold">Bestellübersicht</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {items.map((item) => {
              const p = getProductById(item.productId);
              if (!p) return null;
              return (
                <li key={item.productId} className="flex justify-between gap-3">
                  <span>
                    {p.name} × {item.quantity}
                  </span>
                  <span className="font-semibold">{formatEUR(p.price * item.quantity)}</span>
                </li>
              );
            })}
          </ul>
          <dl className="mt-4 space-y-2 border-t border-black/10 pt-4 text-sm">
            <div className="flex justify-between">
              <dt>Zwischensumme</dt>
              <dd>{formatEUR(subtotal)}</dd>
            </div>
            <div className="flex justify-between">
              <dt>Versand</dt>
              <dd>{shipping === 0 ? "Kostenlos" : formatEUR(shipping)}</dd>
            </div>
            <div className="flex justify-between text-base font-extrabold">
              <dt>Gesamt</dt>
              <dd>{formatEUR(total)}</dd>
            </div>
          </dl>
          <button type="submit" className="btn-primary mt-6 w-full">
            Demo-Bestellung absenden
          </button>
        </div>
        <div className="rounded-2xl border border-black/5 bg-white p-5 text-sm text-brick-black/70">
          <h3 className="font-display text-sm font-bold uppercase tracking-wide text-brick-black">
            Versand &amp; Kontakt
          </h3>
          <p className="mt-2">
            Versand aus Berlin · {siteContact.addressLine}
          </p>
          <p className="mt-2">
            Fragen zur Lieferung?{" "}
            <a
              href={siteContact.phoneHref}
              className="font-semibold text-brick-black hover:text-brick-red"
            >
              {siteContact.phoneDisplay}
            </a>
          </p>
        </div>
      </aside>
    </form>
  );
}
