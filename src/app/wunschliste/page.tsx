"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { useWishlist } from "@/context/wishlist-context";
import { getProductById } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";

export default function WunschlistePage() {
  const { ids, hydrated } = useWishlist();
  const products = ids.map((id) => getProductById(id)).filter(Boolean);

  return (
    <div className="container-bw py-10">
      <h1 className="section-title">Wunschliste</h1>
      <p className="section-sub">Gespeicherte Favoriten (lokal im Browser).</p>

      {!hydrated ? (
        <p className="mt-8 text-sm text-brick-black/60">Laden…</p>
      ) : products.length === 0 ? (
        <div className="mt-8 rounded-2xl border border-dashed border-black/15 px-6 py-16 text-center">
          <Heart className="mx-auto h-10 w-10 text-brick-black/30" />
          <p className="mt-4 font-display text-xl font-bold">Noch keine Favoriten</p>
          <Link href="/produkte" className="btn-primary mt-6 inline-flex">
            Produkte entdecken
          </Link>
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map(
            (p) => p && <ProductCard key={p.id} product={p} />
          )}
        </div>
      )}
    </div>
  );
}
