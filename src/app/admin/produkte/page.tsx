"use client";

import Link from "next/link";
import { useMemo } from "react";
import { aggregateProductSales } from "@/lib/orders";
import { formatEUR } from "@/lib/format";
import { getProductById } from "@/data/products";
import { useOrders } from "@/hooks/useOrders";

export default function AdminProductsSoldPage() {
  const { orders, hydrated } = useOrders();
  const rows = useMemo(() => aggregateProductSales(orders), [orders]);
  const totalUnits = rows.reduce((s, r) => s + r.units, 0);
  const totalRevenue = rows.reduce((s, r) => s + r.revenue, 0);

  if (!hydrated) {
    return <p className="text-sm text-brick-black/60">Laden…</p>;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl font-extrabold tracking-tight">
          Verkaufte Produkte
        </h1>
        <p className="mt-1 text-sm text-brick-black/60">
          Welche Sets verkauft wurden – Stückzahl und Umsatz.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-wide text-brick-black/45">
            Verkaufte Einheiten
          </p>
          <p className="mt-2 font-display text-2xl font-extrabold">{totalUnits}</p>
        </div>
        <div className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-wide text-brick-black/45">
            Produktumsatz
          </p>
          <p className="mt-2 font-display text-2xl font-extrabold">
            {formatEUR(totalRevenue)}
          </p>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[680px] text-left text-sm">
            <thead className="bg-brick-soft/60 text-xs uppercase tracking-wide text-brick-black/45">
              <tr>
                <th className="px-4 py-3 font-bold">#</th>
                <th className="px-4 py-3 font-bold">Produkt</th>
                <th className="px-4 py-3 font-bold">Kategorie</th>
                <th className="px-4 py-3 font-bold">Stück</th>
                <th className="px-4 py-3 font-bold text-right">Umsatz</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5">
              {rows.map((row, i) => {
                const product = getProductById(row.productId);
                return (
                  <tr key={row.productId} className="hover:bg-brick-soft/40">
                    <td className="px-4 py-3 text-brick-black/40">{i + 1}</td>
                    <td className="px-4 py-3">
                      {product ? (
                        <Link
                          href={`/produkte/${product.slug}`}
                          className="font-semibold text-brick-red hover:underline"
                        >
                          {row.name}
                        </Link>
                      ) : (
                        <span className="font-semibold">{row.name}</span>
                      )}
                      <p className="text-xs text-brick-black/45">{row.productId}</p>
                    </td>
                    <td className="px-4 py-3 capitalize text-brick-black/65">
                      {product?.category ?? "—"}
                    </td>
                    <td className="px-4 py-3 font-semibold">{row.units}</td>
                    <td className="px-4 py-3 text-right font-extrabold">
                      {formatEUR(row.revenue)}
                    </td>
                  </tr>
                );
              })}
              {rows.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-4 py-10 text-center text-brick-black/55">
                    Noch keine Verkäufe.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
