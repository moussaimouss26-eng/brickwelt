"use client";

import Link from "next/link";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/cart-context";
import { getProductById } from "@/data/products";
import { formatEUR } from "@/lib/format";
import { ProductArt } from "@/components/product/ProductArt";

export function CartView() {
  const { items, setQuantity, removeItem, subtotal, hydrated } = useCart();

  if (!hydrated) {
    return <p className="text-sm text-brick-black/60">Warenkorb wird geladen…</p>;
  }

  if (items.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-black/15 px-6 py-16 text-center">
        <ShoppingBag className="mx-auto h-10 w-10 text-brick-black/30" />
        <p className="mt-4 font-display text-xl font-bold">Dein Warenkorb ist leer</p>
        <Link href="/produkte" className="btn-primary mt-6 inline-flex">
          Jetzt entdecken
        </Link>
      </div>
    );
  }

  const shipping = subtotal >= 49 ? 0 : 4.99;
  const total = subtotal + shipping;

  return (
    <div className="grid gap-8 lg:grid-cols-12">
      <ul className="space-y-4 lg:col-span-8">
        {items.map((item) => {
          const product = getProductById(item.productId);
          if (!product) return null;
          return (
            <li
              key={item.productId}
              className="flex flex-col gap-4 rounded-2xl border border-black/5 bg-white p-4 sm:flex-row sm:items-center"
            >
              <Link
                href={`/produkte/${product.slug}`}
                className="h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-brick-soft"
              >
                <ProductArt product={product} className="h-full w-full" />
              </Link>
              <div className="min-w-0 flex-1">
                <Link
                  href={`/produkte/${product.slug}`}
                  className="font-display font-bold hover:text-brick-red"
                >
                  {product.name}
                </Link>
                <p className="text-sm text-brick-black/55">{formatEUR(product.price)}</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="inline-flex items-center rounded-xl border border-black/10">
                  <button
                    type="button"
                    className="p-2"
                    aria-label="Menge verringern"
                    onClick={() => setQuantity(item.productId, item.quantity - 1)}
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="min-w-8 text-center text-sm font-bold">
                    {item.quantity}
                  </span>
                  <button
                    type="button"
                    className="p-2"
                    aria-label="Menge erhöhen"
                    onClick={() => setQuantity(item.productId, item.quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <p className="min-w-20 text-right font-bold">
                  {formatEUR(product.price * item.quantity)}
                </p>
                <button
                  type="button"
                  className="rounded-lg p-2 text-brick-black/50 hover:bg-brick-soft hover:text-brick-red"
                  aria-label="Entfernen"
                  onClick={() => removeItem(item.productId)}
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </li>
          );
        })}
      </ul>

      <aside className="h-fit rounded-2xl border border-black/5 bg-brick-soft/50 p-6 lg:col-span-4">
        <h2 className="font-display text-lg font-bold">Zusammenfassung</h2>
        <dl className="mt-4 space-y-2 text-sm">
          <div className="flex justify-between">
            <dt>Zwischensumme</dt>
            <dd className="font-semibold">{formatEUR(subtotal)}</dd>
          </div>
          <div className="flex justify-between">
            <dt>Versand</dt>
            <dd className="font-semibold">
              {shipping === 0 ? "Kostenlos" : formatEUR(shipping)}
            </dd>
          </div>
          <div className="flex justify-between border-t border-black/10 pt-3 text-base">
            <dt className="font-bold">Gesamt</dt>
            <dd className="font-extrabold">{formatEUR(total)}</dd>
          </div>
        </dl>
        <Link href="/kasse" className="btn-primary mt-6 w-full">
          Zur Kasse
        </Link>
        <p className="mt-3 text-xs leading-relaxed text-brick-black/55">
          Versand aus Berlin-Neukölln · kostenlos ab 49&nbsp;€
        </p>
        <p className="disclaimer mt-2">Demo-Checkout – keine echte Zahlung.</p>
      </aside>
    </div>
  );
}
