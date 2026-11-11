"use client";

import { useMemo } from "react";
import { aggregateCities, aggregateCustomers } from "@/lib/orders";
import { formatEUR } from "@/lib/format";
import { useOrders } from "@/hooks/useOrders";

export default function AdminCustomersPage() {
  const { orders, hydrated } = useOrders();

  const customers = useMemo(() => aggregateCustomers(orders), [orders]);
  const cities = useMemo(() => aggregateCities(orders), [orders]);

  if (!hydrated) {
    return <p className="text-sm text-brick-black/60">Laden…</p>;
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-3xl font-extrabold tracking-tight">Kunden</h1>
        <p className="mt-1 text-sm text-brick-black/60">
          Wer bestellt hat und aus welcher Stadt die Kunden kommen.
        </p>
      </div>

      <section className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
        <h2 className="font-display text-lg font-bold">Herkunft nach Stadt</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {cities.map((c) => {
            const share = Math.round((c.orders / Math.max(orders.length, 1)) * 100);
            return (
              <div
                key={c.ort}
                className="rounded-xl border border-black/5 bg-brick-soft/40 p-4"
              >
                <p className="font-display text-lg font-extrabold">{c.ort}</p>
                <p className="mt-1 text-sm text-brick-black/65">
                  {c.orders} Bestellung(en) · {formatEUR(c.revenue)}
                </p>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-white">
                  <div
                    className="h-full rounded-full bg-brick-red"
                    style={{ width: `${share}%` }}
                  />
                </div>
                <p className="mt-1 text-xs font-semibold text-brick-black/45">{share}% der Bestellungen</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-left text-sm">
            <thead className="bg-brick-soft/60 text-xs uppercase tracking-wide text-brick-black/45">
              <tr>
                <th className="px-4 py-3 font-bold">Kunde</th>
                <th className="px-4 py-3 font-bold">Stadt</th>
                <th className="px-4 py-3 font-bold">Bestellungen</th>
                <th className="px-4 py-3 font-bold">Letzte Bestellung</th>
                <th className="px-4 py-3 font-bold text-right">Umsatz</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5">
              {customers.map((c) => (
                <tr key={c.key} className="hover:bg-brick-soft/40">
                  <td className="px-4 py-3">
                    <p className="font-semibold">{c.name}</p>
                    <p className="text-xs text-brick-black/55">{c.email}</p>
                  </td>
                  <td className="px-4 py-3">
                    {c.ort}
                    <span className="block text-xs text-brick-black/45">{c.land}</span>
                  </td>
                  <td className="px-4 py-3 font-semibold">{c.orderCount}</td>
                  <td className="px-4 py-3 text-brick-black/65">
                    {new Date(c.lastOrderAt).toLocaleDateString("de-DE")}
                  </td>
                  <td className="px-4 py-3 text-right font-extrabold">
                    {formatEUR(c.totalSpent)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
