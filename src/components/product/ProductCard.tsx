"use client";

import Link from "next/link";
import { Heart, ShoppingCart, Star } from "lucide-react";
import type { Product } from "@/lib/types";
import { formatEUR, discountPercent } from "@/lib/format";
import { ProductArt } from "./ProductArt";
import { useCart } from "@/context/cart-context";
import { useWishlist } from "@/context/wishlist-context";
import { getCategory } from "@/data/categories";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const { toggle, has } = useWishlist();
  const cat = getCategory(product.category);
  const disc = discountPercent(product.price, product.originalPrice);
  const wished = has(product.id);

  return (
    <article className="card-interactive group flex flex-col overflow-hidden">
      <div className="relative aspect-square overflow-hidden bg-brick-soft">
        <Link href={`/produkte/${product.slug}`} className="block h-full">
          <ProductArt
            product={product}
            className="h-full w-full transition duration-500 group-hover:scale-105"
          />
        </Link>
        <div className="absolute left-3 top-3 flex flex-col gap-1">
          {product.isDeal && disc && (
            <span className="badge bg-brick-red text-white">-{disc}%</span>
          )}
          {product.isNew && (
            <span className="badge bg-brick-blue text-white">Neu</span>
          )}
          {product.isBestseller && (
            <span className="badge bg-brick-yellow text-brick-black">Bestseller</span>
          )}
        </div>
        <button
          type="button"
          aria-label={wished ? "Von Wunschliste entfernen" : "Zur Wunschliste"}
          onClick={() => toggle(product.id)}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 shadow transition hover:scale-110"
        >
          <Heart
            className={`h-4 w-4 ${wished ? "fill-brick-red text-brick-red" : "text-brick-black"}`}
          />
        </button>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-brick-black/45">
          {cat?.name}
        </p>
        <Link href={`/produkte/${product.slug}`} className="mt-1">
          <h3 className="font-display text-base font-bold leading-snug transition group-hover:text-brick-red">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 line-clamp-2 text-sm text-brick-black/60">
          {product.shortDescription}
        </p>

        <div className="mt-2 flex items-center gap-1 text-xs text-brick-black/55">
          <Star className="h-3.5 w-3.5 fill-brick-yellow text-brick-yellow" />
          <span>
            {product.rating.toFixed(1)} · {product.pieces.toLocaleString("de-DE")} Teile ·{" "}
            {product.age}
          </span>
        </div>

        <div className="mt-auto flex items-end justify-between gap-3 pt-4">
          <div>
            <p className="font-display text-lg font-extrabold">{formatEUR(product.price)}</p>
            {product.originalPrice && (
              <p className="text-xs text-brick-black/45 line-through">
                {formatEUR(product.originalPrice)}
              </p>
            )}
          </div>
          <button
            type="button"
            className="btn-primary !px-3 !py-2"
            onClick={() => addItem(product.id)}
            aria-label={`${product.name} in den Warenkorb`}
          >
            <ShoppingCart className="h-4 w-4" />
          </button>
        </div>
      </div>
    </article>
  );
}
