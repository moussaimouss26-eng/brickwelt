import { Suspense } from "react";
import type { Metadata } from "next";
import { ProductFilters } from "@/components/product/ProductFilters";
import { ProductGrid } from "@/components/product/ProductGrid";
import { filterProducts } from "@/data/products";
import type { SortOption } from "@/lib/types";
import { DisclaimerBanner } from "@/components/ui/DisclaimerBanner";

export const metadata: Metadata = {
  title: "Alle Produkte – BrickNova",
  description:
    "Durchsuche den BrickNova Katalog: Kinderspielzeug nach Kategorie, Preis und Beliebtheit.",
};

interface PageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function ProduktePage({ searchParams }: PageProps) {
  const sp = await searchParams;
  const kategorie = typeof sp.kategorie === "string" ? sp.kategorie : undefined;
  const sort = (typeof sp.sort === "string" ? sp.sort : "popularity") as SortOption;
  const q = typeof sp.q === "string" ? sp.q : undefined;
  const min = typeof sp.min === "string" ? Number(sp.min) : undefined;
  const max = typeof sp.max === "string" ? Number(sp.max) : undefined;

  const products = filterProducts({
    category: kategorie,
    sort,
    query: q,
    minPrice: Number.isFinite(min) ? min : undefined,
    maxPrice: Number.isFinite(max) ? max : undefined,
  });

  return (
    <div className="container-bw py-10">
      <h1 className="section-title">Alle Produkte</h1>
      <p className="section-sub">
        {products.length} BrickNova-Artikel · Preise in EUR
      </p>
      <DisclaimerBanner className="mt-4" />

      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <aside className="lg:col-span-3">
          <Suspense fallback={<div className="h-64 animate-pulse rounded-2xl bg-brick-soft" />}>
            <ProductFilters />
          </Suspense>
        </aside>
        <div className="lg:col-span-9">
          <ProductGrid products={products} />
        </div>
      </div>
    </div>
  );
}
