"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { categories } from "@/data/categories";
import type { SortOption } from "@/lib/types";

export function ProductFilters({ basePath = "/produkte" }: { basePath?: string }) {
  const router = useRouter();
  const params = useSearchParams();

  const category = params.get("kategorie") ?? "";
  const sort = (params.get("sort") as SortOption) || "popularity";
  const min = params.get("min") ?? "";
  const max = params.get("max") ?? "";
  const q = params.get("q") ?? "";

  function update(next: Record<string, string | null>) {
    const sp = new URLSearchParams(params.toString());
    Object.entries(next).forEach(([k, v]) => {
      if (!v) sp.delete(k);
      else sp.set(k, v);
    });
    const qs = sp.toString();
    router.push(qs ? `${basePath}?${qs}` : basePath);
  }

  return (
    <div className="space-y-6 rounded-2xl border border-black/5 bg-white p-5">
      <div>
        <label className="text-xs font-bold uppercase tracking-wide text-brick-black/50">
          Suche
        </label>
        <input
          className="input-field mt-2"
          defaultValue={q}
          placeholder="Set, Thema…"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              update({ q: (e.target as HTMLInputElement).value || null });
            }
          }}
        />
      </div>

      <div>
        <p className="text-xs font-bold uppercase tracking-wide text-brick-black/50">
          Kategorie
        </p>
        <div className="mt-2 flex flex-col gap-1">
          <button
            type="button"
            className={`rounded-lg px-3 py-2 text-left text-sm font-medium ${
              !category ? "bg-brick-soft" : "hover:bg-brick-soft/60"
            }`}
            onClick={() => update({ kategorie: null })}
          >
            Alle
          </button>
          {categories.map((c) => (
            <button
              key={c.slug}
              type="button"
              className={`rounded-lg px-3 py-2 text-left text-sm font-medium ${
                category === c.slug ? "bg-brick-soft" : "hover:bg-brick-soft/60"
              }`}
              onClick={() => update({ kategorie: c.slug })}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs font-bold uppercase tracking-wide text-brick-black/50">
          Preis (€)
        </p>
        <div className="mt-2 flex gap-2">
          <input
            type="number"
            min={0}
            placeholder="Min"
            className="input-field"
            defaultValue={min}
            onBlur={(e) => update({ min: e.target.value || null })}
          />
          <input
            type="number"
            min={0}
            placeholder="Max"
            className="input-field"
            defaultValue={max}
            onBlur={(e) => update({ max: e.target.value || null })}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="sort"
          className="text-xs font-bold uppercase tracking-wide text-brick-black/50"
        >
          Sortierung
        </label>
        <select
          id="sort"
          className="input-field mt-2"
          value={sort}
          onChange={(e) => update({ sort: e.target.value })}
        >
          <option value="popularity">Beliebtheit</option>
          <option value="price-asc">Preis aufsteigend</option>
          <option value="price-desc">Preis absteigend</option>
          <option value="newest">Neuheiten</option>
        </select>
      </div>
    </div>
  );
}
