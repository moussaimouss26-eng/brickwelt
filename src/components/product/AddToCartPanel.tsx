"use client";

import { useState } from "react";
import { Heart, Minus, Plus, ShoppingCart, Check } from "lucide-react";
import type { Product } from "@/lib/types";
import { useCart } from "@/context/cart-context";
import { useWishlist } from "@/context/wishlist-context";

export function AddToCartPanel({ product }: { product: Product }) {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();
  const { toggle, has } = useWishlist();
  const wished = has(product.id);
  const inStock = product.stock > 0;

  function handleAdd() {
    if (!inStock) return;
    addItem(product.id, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  }

  return (
    <div className="space-y-4 rounded-2xl border border-black/5 bg-brick-soft/60 p-5">
      <div className="flex items-center justify-between text-sm">
        <span className="font-semibold">Verfügbarkeit</span>
        <span className={inStock ? "font-bold text-emerald-600" : "font-bold text-brick-red"}>
          {inStock ? `${product.stock} auf Lager` : "Ausverkauft"}
        </span>
      </div>

      <div className="flex items-center gap-3">
        <div className="inline-flex items-center rounded-xl border border-black/10 bg-white">
          <button
            type="button"
            className="p-3"
            aria-label="Menge verringern"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="min-w-8 text-center text-sm font-bold">{qty}</span>
          <button
            type="button"
            className="p-3"
            aria-label="Menge erhöhen"
            onClick={() => setQty((q) => Math.min(product.stock, q + 1))}
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
        <button
          type="button"
          disabled={!inStock}
          onClick={handleAdd}
          className="btn-primary flex-1 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {added ? (
            <>
              <Check className="h-4 w-4" /> Hinzugefügt
            </>
          ) : (
            <>
              <ShoppingCart className="h-4 w-4" /> In den Warenkorb
            </>
          )}
        </button>
      </div>

      <button
        type="button"
        onClick={() => toggle(product.id)}
        className="btn-secondary w-full"
      >
        <Heart className={`h-4 w-4 ${wished ? "fill-brick-red text-brick-red" : ""}`} />
        {wished ? "Auf der Wunschliste" : "Auf Wunschliste"}
      </button>
    </div>
  );
}
