"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ORDER_STATUS_LABEL, type OrderStatus } from "@/lib/orders";
import { formatEUR } from "@/lib/format";
import { useOrders } from "@/hooks/useOrders";

const filters: Array<{ value: "alle" | OrderStatus; label: string }> = [
  { value: "alle", label: "Alle" },
  { value: "neu", label: "Neu" },
  { value: "in_bearbeitung", label: "In Bearbeitung" },
  { value: "versandt", label: "Versandt" },
  { value: "abgeschlossen", label: "Abgeschlossen" },
];

export default function AdminOrdersPage() {
  const { orders, hydrated } = useOrders();
  const [filter, setFilter] = useState<"alle" | OrderStatus>("alle");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return orders.filter((o) => {
      if (filter !== "alle" && o.status !== filter) return false;
      if (!query) return true;
      const hay = `${o.id} ${o.customer.vorname} ${o.customer.nachname} ${o.customer.email} ${o.customer.ort}`.toLowerCase();
      return hay.includes(query);
    });
  }, [orders, filter, q]);

  if (!hydrated) {
    return <p className="text-sm text-brick-black/60">Laden…</p>;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl font-extrabold tracking-tight">
          Bestellungen
        </h1>
        <p className="mt-1 text-sm text-brick-black/60">
          Alle Demo- und Checkout-Bestellungen – wer hat was gekauft.
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.value}
              type="button"
              onClick={() => setFilter(f.value)}
              className={`rounded-xl px-3 py-2 text-xs font-bold uppercase tracking-wide transition ${
                filter === f.value
                  ? "bg-brick-black text-white"
                  : "bg-white text-brick-black/65 ring-1 ring-black/10 hover:bg-brick-soft"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
        <input
          className="input-field max-w-sm"
          placeholder="Suche Name, E-Mail, Ort, Nr.…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      </div>

      <div className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead className="bg-brick-soft/60 text-xs uppercase tracking-wide text-brick-black/45">
              <tr>
                <th className="px-4 py-3 font-bold">Bestellung</th>
                <th className="px-4 py-3 font-bold">Kunde</th>
                <th className="px-4 py-3 font-bold">Ort</th>
                <th className="px-4 py-3 font-bold">Produkte</th>
                <th className="px-4 py-3 font-bold">Status</th>
                <th className="px-4 py-3 font-bold text-right">Summe</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5">
              {filtered.map((o) => (
                <tr key={o.id} className="hover:bg-brick-soft/40">
                  <td className="px-4 py-3">
                    <Link
                      href={`/admin/bestellungen/${o.id}`}
                      className="font-bold text-brick-red hover:underline"
                    >
                      {o.id}
                    </Link>
                    <p className="text-xs text-brick-black/45">
                      {new Date(o.createdAt).toLocaleString("de-DE")}
                    </p>
                  </td>
                  <td className="px-4 py-3">
                    <p className="font-semibold">
                      {o.customer.vorname} {o.customer.nachname}
                    </p>
                    <p className="text-xs text-brick-black/55">{o.customer.email}</p>
                  </td>
                  <td className="px-4 py-3">
                    {o.customer.plz} {o.customer.ort}
                  </td>
                  <td className="px-4 py-3 text-brick-black/70">
                    {o.items.map((i) => `${i.name} ×${i.quantity}`).join(", ")}
                  </td>
                  <td className="px-4 py-3">
                    <span className="badge bg-brick-soft text-brick-black">
                      {ORDER_STATUS_LABEL[o.status]}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right font-extrabold">
                    {formatEUR(o.total)}
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-4 py-10 text-center text-brick-black/55">
                    Keine Bestellungen gefunden.
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
