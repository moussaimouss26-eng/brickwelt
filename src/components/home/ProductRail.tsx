import Link from "next/link";
import type { Product } from "@/lib/types";
import { ProductCard } from "@/components/product/ProductCard";
import { ArrowUpRight } from "lucide-react";

interface ProductRailProps {
  title: string;
  subtitle?: string;
  products: Product[];
  href: string;
  linkLabel?: string;
}

export function ProductRail({
  title,
  subtitle,
  products,
  href,
  linkLabel = "Mehr ansehen",
}: ProductRailProps) {
  return (
    <section className="container-bw py-12">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="section-title">{title}</h2>
          {subtitle && <p className="section-sub">{subtitle}</p>}
        </div>
        <Link href={href} className="btn-ghost text-brick-blue">
          {linkLabel} <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
