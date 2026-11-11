import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getPopulatedCategories } from "@/lib/catalog";

export function CategoryGrid() {
  const rows = getPopulatedCategories();

  return (
    <section className="container-bw py-16">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="section-title">Kategorien</h2>
          <p className="section-sub">
            Nur Themen mit Sets im BrickNova-Katalog – {rows.length} Kategorien, klar
            sortiert.
          </p>
        </div>
        <Link href="/produkte" className="btn-ghost text-brick-blue">
          Alle Produkte <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {rows.map(({ category: c, count, cover }, i) => (
          <Link
            key={c.slug}
            href={`/kategorien/${c.slug}`}
            className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-brick"
            style={{ animationDelay: `${i * 35}ms` }}
          >
            <div className="relative aspect-[16/11] overflow-hidden bg-brick-soft">
              {cover.imageUrl ? (
                <Image
                  src={cover.imageUrl}
                  alt={`${c.name} – ${cover.name}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="object-contain p-4 transition duration-500 group-hover:scale-105"
                />
              ) : (
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(135deg, ${c.color}, ${c.accent})`,
                  }}
                />
              )}
              <span
                className="absolute left-3 top-3 rounded-lg px-2 py-1 text-[10px] font-extrabold uppercase tracking-wide text-white shadow-sm"
                style={{ backgroundColor: c.color }}
              >
                {count} {count === 1 ? "Set" : "Sets"}
              </span>
            </div>

            <div className="border-t border-black/5 px-4 py-3.5">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-display text-base font-extrabold tracking-tight text-brick-black">
                    {c.name}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-brick-black/55">
                    {c.description}
                  </p>
                </div>
                <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-brick-black/30 transition group-hover:text-brick-red" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
