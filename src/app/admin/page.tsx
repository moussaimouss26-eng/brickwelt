"use client";

import Link from "next/link";
import { useMemo } from "react";
import {
  aggregateCities,
  aggregateCustomers,
  aggregateProductSales,
  ORDER_STATUS_LABEL,
} from "@/lib/orders";
import { formatEUR } from "@/lib/format";
import { useOrders } from "@/hooks/useOrders";

export default function AdminDashboardPage() {
  const { orders, hydrated } = useOrders();

  const stats = useMemo(() => {
    const revenue = orders.reduce((s, o) => s + o.total, 0);
    const units = orders.reduce(
      (s, o) => s + o.items.reduce((n, i) => n + i.quantity, 0),
      0
    );
    const customers = aggregateCustomers(orders).length;
    const cities = aggregateCities(orders);
    const topProducts = aggregateProductSales(orders).slice(0, 5);
    const recent = orders.slice(0, 6);
    const neu = orders.filter((o) => o.status === "neu").length;
    return { revenue, units, customers, cities, topProducts, recent, neu };
  }, [orders]);

  if (!hydrated) {
    return <p className="text-sm text-brick-black/60">Laden…</p>;
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-3xl font-extrabold tracking-tight">
          Dashboard
        </h1>
        <p className="mt-1 text-sm text-brick-black/60">
          Überblick über Bestellungen, Kunden und Verkaufszahlen (Demo-Daten +
          echte Checkout-Bestellungen aus diesem Browser).
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[
          { label: "Umsatz", value: formatEUR(stats.revenue) },
          { label: "Bestellungen", value: String(orders.length) },
          { label: "Verkaufte Steine-Sets", value: String(stats.units) },
          { label: "Kunden", value: String(stats.customers) },
        ].map((card) => (
          <div
            key={card.label}
            className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm"
          >
            <p className="text-xs font-bold uppercase tracking-wide text-brick-black/45">
              {card.label}
            </p>
            <p className="mt-2 font-display text-2xl font-extrabold">{card.value}</p>
          </div>
        ))}
      </div>

      {stats.neu > 0 && (
        <div className="rounded-2xl border border-brick-yellow/50 bg-[#FFF8E7] px-5 py-4 text-sm">
          <strong>{stats.neu}</strong> neue Bestellung(en) warten auf Bearbeitung.{" "}
          <Link href="/admin/bestellungen" className="font-bold text-brick-red underline">
            Ansehen
          </Link>
        </div>
      )}

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between gap-3">
            <h2 className="font-display text-lg font-bold">Kunden nach Stadt</h2>
            <Link href="/admin/kunden" className="text-sm font-semibold text-brick-red">
              Alle Kunden
            </Link>
          </div>
          <ul className="mt-4 divide-y divide-black/5">
            {stats.cities.slice(0, 6).map((c) => (
              <li key={c.ort} className="flex items-center justify-between py-3 text-sm">
                <span className="font-semibold">{c.ort}</span>
                <span className="text-brick-black/60">
                  {c.orders} Best. · {formatEUR(c.revenue)}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between gap-3">
            <h2 className="font-display text-lg font-bold">Top verkaufte Produkte</h2>
            <Link href="/admin/produkte" className="text-sm font-semibold text-brick-red">
              Alle
            </Link>
          </div>
          <ul className="mt-4 divide-y divide-black/5">
            {stats.topProducts.map((p, i) => (
              <li key={p.productId} className="flex items-center justify-between gap-3 py-3 text-sm">
                <span>
                  <span className="mr-2 text-brick-black/40">{i + 1}.</span>
                  <span className="font-semibold">{p.name}</span>
                </span>
                <span className="shrink-0 text-brick-black/60">
                  {p.units}× · {formatEUR(p.revenue)}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between gap-3">
          <h2 className="font-display text-lg font-bold">Letzte Bestellungen</h2>
          <Link href="/admin/bestellungen" className="text-sm font-semibold text-brick-red">
            Alle Bestellungen
          </Link>
        </div>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="text-xs uppercase tracking-wide text-brick-black/45">
              <tr>
                <th className="pb-2 font-bold">Nr.</th>
                <th className="pb-2 font-bold">Kunde</th>
                <th className="pb-2 font-bold">Ort</th>
                <th className="pb-2 font-bold">Status</th>
                <th className="pb-2 font-bold text-right">Summe</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5">
              {stats.recent.map((o) => (
                <tr key={o.id}>
                  <td className="py-3">
                    <Link
                      href={`/admin/bestellungen/${o.id}`}
                      className="font-semibold text-brick-red hover:underline"
                    >
                      {o.id}
                    </Link>
                  </td>
                  <td className="py-3">
                    {o.customer.vorname} {o.customer.nachname}
                  </td>
                  <td className="py-3 text-brick-black/65">{o.customer.ort}</td>
                  <td className="py-3">{ORDER_STATUS_LABEL[o.status]}</td>
                  <td className="py-3 text-right font-semibold">{formatEUR(o.total)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
