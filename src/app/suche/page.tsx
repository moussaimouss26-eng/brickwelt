import type { Metadata } from "next";
import { Suspense } from "react";
import { searchProducts, filterProducts } from "@/data/products";
import { ProductGrid } from "@/components/product/ProductGrid";
import { ProductFilters } from "@/components/product/ProductFilters";
import type { SortOption } from "@/lib/types";

export const metadata: Metadata = {
  title: "Suche",
  description: "BrickNova Spielzeug suchen bei BrickWelt.",
};

interface PageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function SuchePage({ searchParams }: PageProps) {
  const sp = await searchParams;
  const q = typeof sp.q === "string" ? sp.q : "";
  const sort = (typeof sp.sort === "string" ? sp.sort : "popularity") as SortOption;
  const kategorie = typeof sp.kategorie === "string" ? sp.kategorie : undefined;
  const min = typeof sp.min === "string" ? Number(sp.min) : undefined;
  const max = typeof sp.max === "string" ? Number(sp.max) : undefined;

  const products = q
    ? filterProducts({
        query: q,
        sort,
        category: kategorie,
        minPrice: Number.isFinite(min) ? min : undefined,
        maxPrice: Number.isFinite(max) ? max : undefined,
      })
    : searchProducts("");

  return (
    <div className="container-bw py-10">
      <h1 className="section-title">Suche</h1>
      <p className="section-sub">
        {q ? (
          <>
            Ergebnisse für „{q}“ · {products.length} Treffer
          </>
        ) : (
          "Gib einen Suchbegriff ein."
        )}
      </p>
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <aside className="lg:col-span-3">
          <Suspense fallback={null}>
            <ProductFilters basePath="/suche" />
          </Suspense>
        </aside>
        <div className="lg:col-span-9">
          <ProductGrid products={products} />
        </div>
      </div>
    </div>
  );
}
