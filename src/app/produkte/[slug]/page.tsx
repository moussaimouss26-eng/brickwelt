import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Star } from "lucide-react";
import {
  getProductBySlug,
  getRelatedProducts,
  products,
} from "@/data/products";
import { getCategory } from "@/data/categories";
import { formatEUR, discountPercent } from "@/lib/format";
import { ProductArt } from "@/components/product/ProductArt";
import { AddToCartPanel } from "@/components/product/AddToCartPanel";
import { ProductJsonLd } from "@/components/product/ProductJsonLd";
import { ProductRail } from "@/components/home/ProductRail";
import { DisclaimerBanner } from "@/components/ui/DisclaimerBanner";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Produkt nicht gefunden" };
  return {
    title: `${product.name} kaufen`,
    description: `${product.shortDescription} Jetzt bei BrickWelt – LEGO Sets kaufen in Deutschland. Demo-Shop.`,
    alternates: { canonical: `/produkte/${product.slug}` },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const cat = getCategory(product.category);
  const disc = discountPercent(product.price, product.originalPrice);
  const related = getRelatedProducts(product, 4);

  return (
    <>
      <ProductJsonLd product={product} />
      <div className="container-bw py-10">
        <nav className="text-sm text-brick-black/55" aria-label="Brotkrumen">
          <Link href="/" className="hover:text-brick-red">
            Start
          </Link>
          <span className="mx-2">/</span>
          <Link href="/produkte" className="hover:text-brick-red">
            Produkte
          </Link>
          {cat && (
            <>
              <span className="mx-2">/</span>
              <Link
                href={`/kategorien/${cat.slug}`}
                className="hover:text-brick-red"
              >
                {cat.name}
              </Link>
            </>
          )}
          <span className="mx-2">/</span>
          <span className="text-brick-black">{product.name}</span>
        </nav>

        <div className="mt-8 grid gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-black/5 bg-brick-soft">
            <ProductArt product={product} className="aspect-square w-full" />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-brick-black/45">
              {cat?.name} · Art.-Nr. {product.id}
            </p>
            <h1 className="mt-2 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              {product.name}
            </h1>
            <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
              <span className="inline-flex items-center gap-1">
                <Star className="h-4 w-4 fill-brick-yellow text-brick-yellow" />
                {product.rating.toFixed(1)} ({product.reviewCount} Demo-Bewertungen)
              </span>
              <span className="text-brick-black/40">·</span>
              <span>
                {product.pieces.toLocaleString("de-DE")} Steine · Alter {product.age}
              </span>
            </div>

            <div className="mt-6 flex items-end gap-3">
              <p className="font-display text-3xl font-extrabold">
                {formatEUR(product.price)}
              </p>
              {product.originalPrice && (
                <>
                  <p className="pb-1 text-brick-black/45 line-through">
                    {formatEUR(product.originalPrice)}
                  </p>
                  {disc && (
                    <span className="badge mb-1 bg-brick-red text-white">-{disc}%</span>
                  )}
                </>
              )}
            </div>

            <p className="mt-5 text-brick-black/75">{product.description}</p>

            <div className="mt-6">
              <AddToCartPanel product={product} />
            </div>

            <div className="mt-8">
              <h2 className="font-display text-lg font-bold">Technische Daten</h2>
              <dl className="mt-3 divide-y divide-black/5 rounded-2xl border border-black/5">
                {product.specs.map((s) => (
                  <div
                    key={s.label}
                    className="flex items-center justify-between px-4 py-3 text-sm"
                  >
                    <dt className="text-brick-black/55">{s.label}</dt>
                    <dd className="font-semibold">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <DisclaimerBanner className="mt-6" />
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <ProductRail
          title="Ähnliche Produkte"
          products={related}
          href={`/kategorien/${product.category}`}
          linkLabel="Kategorie ansehen"
        />
      )}
    </>
  );
}
