"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { ORDER_STATUS_LABEL, type OrderStatus } from "@/lib/orders";
import { formatEUR } from "@/lib/format";
import { useOrders } from "@/hooks/useOrders";

const statuses: OrderStatus[] = [
  "neu",
  "in_bearbeitung",
  "versandt",
  "abgeschlossen",
];

export default function AdminOrderDetailPage() {
  const params = useParams<{ id: string }>();
  const { orders, hydrated, setStatus } = useOrders();
  const order = orders.find((o) => o.id === params.id);

  if (!hydrated) {
    return <p className="text-sm text-brick-black/60">Laden…</p>;
  }

  if (!order) {
    return (
      <div className="rounded-2xl border border-dashed border-black/15 bg-white px-6 py-16 text-center">
        <p className="font-display text-xl font-bold">Bestellung nicht gefunden</p>
        <Link href="/admin/bestellungen" className="btn-primary mt-6 inline-flex">
          Zurück
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <Link
            href="/admin/bestellungen"
            className="text-sm font-semibold text-brick-red hover:underline"
          >
            ← Alle Bestellungen
          </Link>
          <h1 className="mt-2 font-display text-3xl font-extrabold tracking-tight">
            {order.id}
          </h1>
          <p className="mt-1 text-sm text-brick-black/60">
            {new Date(order.createdAt).toLocaleString("de-DE")} · Quelle:{" "}
            {order.source === "checkout" ? "Checkout" : "Demo-Seed"}
          </p>
        </div>
        <label className="text-sm font-medium">
          Status
          <select
            className="input-field mt-1 min-w-[200px]"
            value={order.status}
            onChange={(e) => setStatus(order.id, e.target.value as OrderStatus)}
          >
            {statuses.map((s) => (
              <option key={s} value={s}>
                {ORDER_STATUS_LABEL[s]}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
          <h2 className="font-display text-lg font-bold">Kunde</h2>
          <dl className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-brick-black/55">Name</dt>
              <dd className="font-semibold">
                {order.customer.vorname} {order.customer.nachname}
              </dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-brick-black/55">E-Mail</dt>
              <dd className="font-semibold">{order.customer.email}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-brick-black/55">Adresse</dt>
              <dd className="text-right font-semibold">
                {order.customer.strasse}
                <br />
                {order.customer.plz} {order.customer.ort}
                <br />
                {order.customer.land}
              </dd>
            </div>
          </dl>
        </section>

        <section className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
          <h2 className="font-display text-lg font-bold">Positionen</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {order.items.map((item) => (
              <li
                key={`${item.productId}-${item.name}`}
                className="flex justify-between gap-3 border-b border-black/5 pb-3"
              >
                <span>
                  <span className="font-semibold">{item.name}</span>
                  <span className="block text-xs text-brick-black/50">
                    {item.productId} · {item.quantity}× {formatEUR(item.unitPrice)}
                  </span>
                </span>
                <span className="font-extrabold">
                  {formatEUR(item.unitPrice * item.quantity)}
                </span>
              </li>
            ))}
          </ul>
          <dl className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <dt>Zwischensumme</dt>
              <dd>{formatEUR(order.subtotal)}</dd>
            </div>
            <div className="flex justify-between">
              <dt>Versand</dt>
              <dd>{order.shipping === 0 ? "Kostenlos" : formatEUR(order.shipping)}</dd>
            </div>
            <div className="flex justify-between text-base font-extrabold">
              <dt>Gesamt</dt>
              <dd>{formatEUR(order.total)}</dd>
            </div>
          </dl>
        </section>
      </div>
    </div>
  );
}
