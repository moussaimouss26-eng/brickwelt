import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Package, RotateCcw, Star, Truck } from "lucide-react";
import {
  getProductBySlug,
  getRelatedProducts,
  products,
} from "@/data/products";
import { getCategory } from "@/data/categories";
import { formatEUR, discountPercent } from "@/lib/format";
import { getProductMpn, productAvailability } from "@/lib/merchant";
import { productImageUrl, siteBrand } from "@/lib/site";
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
  const image = productImageUrl(product.imageUrl);
  return {
    title: `${product.name} kaufen`,
    description: `${product.shortDescription} Jetzt bei ${siteBrand.name} – Versand in Deutschland.`,
    alternates: { canonical: `/produkte/${product.slug}` },
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      type: "website",
      url: `/produkte/${product.slug}`,
      images: image ? [{ url: image, alt: product.name }] : undefined,
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const cat = getCategory(product.category);
  const disc = discountPercent(product.price, product.originalPrice);
  const related = getRelatedProducts(product, 4);
  const mpn = getProductMpn(product);
  const availability = productAvailability(product);

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
            <ProductArt
              product={product}
              priority
              className="aspect-square w-full"
            />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-brick-black/45">
              {cat?.name} · Art.-Nr. {product.id}
              {mpn ? ` · MPN ${mpn}` : ""}
            </p>
            <h1 className="mt-2 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              {product.name}
            </h1>
            <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
              <span className="inline-flex items-center gap-1">
                <Star className="h-4 w-4 fill-brick-yellow text-brick-yellow" />
                {product.rating.toFixed(1)} ({product.reviewCount} Bewertungen)
              </span>
              <span className="text-brick-black/40">·</span>
              <span>
                {product.pieces.toLocaleString("de-DE")} Steine · Alter {product.age}
              </span>
            </div>

            <div className="mt-6 flex flex-wrap items-end gap-3">
              <p className="font-display text-3xl font-extrabold">
                {formatEUR(product.price)}
              </p>
              <span className="pb-1 text-sm text-brick-black/55">inkl. MwSt.</span>
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

            <ul className="mt-4 flex flex-wrap gap-2 text-xs font-semibold">
              <li className="rounded-full bg-white px-3 py-1.5 text-brick-black/70 ring-1 ring-black/5">
                Zustand: Neu
              </li>
              <li
                className={`rounded-full px-3 py-1.5 ring-1 ring-black/5 ${
                  product.stock > 0
                    ? "bg-emerald-50 text-emerald-700"
                    : "bg-red-50 text-brick-red"
                }`}
              >
                {availability.label}
              </li>
              <li className="rounded-full bg-white px-3 py-1.5 text-brick-black/70 ring-1 ring-black/5">
                Marke: {siteBrand.productBrand}
              </li>
            </ul>

            <p className="mt-5 text-brick-black/75">{product.description}</p>

            <div className="mt-6">
              <AddToCartPanel product={product} />
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-black/5 bg-white p-4 text-sm">
                <Truck className="h-4 w-4 text-brick-red" aria-hidden />
                <p className="mt-2 font-semibold">Versand DE</p>
                <p className="mt-1 text-brick-black/60">
                  Ab 4,99&nbsp;€ · kostenlos ab 49&nbsp;€
                </p>
              </div>
              <div className="rounded-2xl border border-black/5 bg-white p-4 text-sm">
                <RotateCcw className="h-4 w-4 text-brick-red" aria-hidden />
                <p className="mt-2 font-semibold">Widerruf</p>
                <p className="mt-1 text-brick-black/60">
                  <Link href="/widerruf" className="text-brick-red hover:underline">
                    14 Tage Rückgabe
                  </Link>
                </p>
              </div>
              <div className="rounded-2xl border border-black/5 bg-white p-4 text-sm">
                <Package className="h-4 w-4 text-brick-red" aria-hidden />
                <p className="mt-2 font-semibold">Zustand</p>
                <p className="mt-1 text-brick-black/60">Neu &amp; originalverpackt</p>
              </div>
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
                <div className="flex items-center justify-between px-4 py-3 text-sm">
                  <dt className="text-brick-black/55">SKU</dt>
                  <dd className="font-semibold">{product.id}</dd>
                </div>
                <div className="flex items-center justify-between px-4 py-3 text-sm">
                  <dt className="text-brick-black/55">Zustand</dt>
                  <dd className="font-semibold">Neu</dd>
                </div>
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
