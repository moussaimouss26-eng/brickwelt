import type { Product } from "@/lib/types";
import { ProductCard } from "./ProductCard";

export function ProductGrid({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-black/15 bg-brick-soft/50 px-6 py-16 text-center">
        <p className="font-display text-xl font-bold">Keine Produkte gefunden</p>
        <p className="mt-2 text-sm text-brick-black/60">
          Passe Filter oder Suchbegriff an.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
