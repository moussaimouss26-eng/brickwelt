import Link from "next/link";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { ArrowUpRight } from "lucide-react";

export function CategoryGrid() {
  const counts = products.reduce<Record<string, number>>((acc, p) => {
    acc[p.category] = (acc[p.category] ?? 0) + 1;
    return acc;
  }, {});
  const visible = categories.filter((c) => (counts[c.slug] ?? 0) > 0);

  return (
    <section className="container-bw py-16">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="section-title">Beliebte Kategorien</h2>
          <p className="section-sub">
            Große Sets, Schlösser und Klassiker – direkt aus dem BrickWelt-Katalog.
          </p>
        </div>
        <Link href="/produkte" className="btn-ghost text-brick-blue">
          Alle ansehen <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {visible.map((c, i) => (
          <Link
            key={c.slug}
            href={`/kategorien/${c.slug}`}
            className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white p-4 transition duration-300 hover:-translate-y-1 hover:shadow-brick"
            style={{ animationDelay: `${i * 40}ms` }}
          >
            <span
              className="mb-3 block h-10 w-10 rounded-xl transition group-hover:scale-110"
              style={{ background: c.color, boxShadow: `0 8px 20px -8px ${c.color}` }}
            />
            <h3 className="font-display text-sm font-bold">{c.name}</h3>
            <p className="mt-1 line-clamp-2 text-xs text-brick-black/55">{c.description}</p>
            <p className="mt-2 text-[11px] font-bold uppercase tracking-wide text-brick-black/40">
              {counts[c.slug]} Sets
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
