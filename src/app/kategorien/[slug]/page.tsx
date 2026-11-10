import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { getCategory } from "@/data/categories";
import { filterProducts } from "@/data/products";
import { getPopulatedCategories } from "@/lib/catalog";
import { ProductGrid } from "@/components/product/ProductGrid";
import { ProductFilters } from "@/components/product/ProductFilters";
import { DisclaimerBanner } from "@/components/ui/DisclaimerBanner";
import type { SortOption } from "@/lib/types";

interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export function generateStaticParams() {
  return getPopulatedCategories().map(({ category: c }) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const cat = getCategory(slug);
  if (!cat) return { title: "Kategorie" };
  return {
    title: `${cat.name} LEGO Sets kaufen`,
    description: `${cat.description} LEGO Sets kaufen bei BrickWelt – Angebote Deutschland.`,
  };
}

export default async function CategoryPage({ params, searchParams }: PageProps) {
  const { slug } = await params;
  const cat = getCategory(slug);
  if (!cat) notFound();

  const sp = await searchParams;
  const sort = (typeof sp.sort === "string" ? sp.sort : "popularity") as SortOption;
  const q = typeof sp.q === "string" ? sp.q : undefined;
  const min = typeof sp.min === "string" ? Number(sp.min) : undefined;
  const max = typeof sp.max === "string" ? Number(sp.max) : undefined;

  const products = filterProducts({
    category: slug,
    sort,
    query: q,
    minPrice: Number.isFinite(min) ? min : undefined,
    maxPrice: Number.isFinite(max) ? max : undefined,
  });

  return (
    <div className="container-bw py-10">
      <div
        className="mb-8 overflow-hidden rounded-3xl px-6 py-10 text-white"
        style={{
          background: `linear-gradient(135deg, ${cat.color}, ${cat.accent})`,
        }}
      >
        <h1 className="font-display text-3xl font-extrabold sm:text-4xl">
          {cat.name}
        </h1>
        <p className="mt-2 max-w-2xl text-white/85">{cat.description}</p>
      </div>
      <DisclaimerBanner />
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <aside className="lg:col-span-3">
          <Suspense fallback={null}>
            <ProductFilters basePath={`/kategorien/${slug}`} />
          </Suspense>
        </aside>
        <div className="lg:col-span-9">
          <p className="mb-4 text-sm text-brick-black/60">
            {products.length} Produkte
          </p>
          <ProductGrid products={products} />
        </div>
      </div>
    </div>
  );
}
