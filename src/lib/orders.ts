import type { CartItem } from "@/lib/types";
import { getProductById } from "@/data/products";

export type OrderStatus = "neu" | "in_bearbeitung" | "versandt" | "abgeschlossen";

export interface OrderCustomer {
  vorname: string;
  nachname: string;
  email: string;
  strasse: string;
  plz: string;
  ort: string;
  land: string;
}

export interface OrderLine {
  productId: string;
  name: string;
  quantity: number;
  unitPrice: number;
}

export interface Order {
  id: string;
  createdAt: string;
  status: OrderStatus;
  customer: OrderCustomer;
  items: OrderLine[];
  subtotal: number;
  shipping: number;
  total: number;
  source: "checkout" | "demo";
}

export const ORDERS_STORAGE_KEY = "brickwelt-orders-v1";
export const ADMIN_SESSION_KEY = "brickwelt-admin-session";
/** Demo admin password — change before real use. */
export const ADMIN_DEMO_PASSWORD = "brickwelt";

export const ORDER_STATUS_LABEL: Record<OrderStatus, string> = {
  neu: "Neu",
  in_bearbeitung: "In Bearbeitung",
  versandt: "Versandt",
  abgeschlossen: "Abgeschlossen",
};

function daysAgo(n: number, hour = 12): string {
  const d = new Date();
  d.setDate(d.getDate() - n);
  d.setHours(hour, 20 + (n % 30), 0, 0);
  return d.toISOString();
}

function line(productId: string, quantity: number): OrderLine | null {
  const p = getProductById(productId);
  if (!p) return null;
  return {
    productId,
    name: p.name,
    quantity,
    unitPrice: p.price,
  };
}

function buildOrder(
  id: string,
  createdAt: string,
  status: OrderStatus,
  customer: OrderCustomer,
  rawItems: { productId: string; quantity: number }[],
  source: Order["source"] = "demo"
): Order | null {
  const items = rawItems
    .map((i) => line(i.productId, i.quantity))
    .filter((x): x is OrderLine => Boolean(x));
  if (!items.length) return null;
  const subtotal = items.reduce((s, i) => s + i.unitPrice * i.quantity, 0);
  const shipping = subtotal >= 49 ? 0 : 4.99;
  return {
    id,
    createdAt,
    status,
    customer,
    items,
    subtotal,
    shipping,
    total: subtotal + shipping,
    source,
  };
}

/** Seed demo orders so the admin panel is useful immediately. */
export function getSeedOrders(): Order[] {
  const seeds = [
    buildOrder(
      "BW-10041",
      daysAgo(1, 14),
      "neu",
      {
        vorname: "Amine",
        nachname: "Benali",
        email: "amine.benali@email.de",
        strasse: "Friedrichstraße 12",
        plz: "10117",
        ort: "Berlin",
        land: "Deutschland",
      },
      [
        { productId: "bn-1003", quantity: 1 },
        { productId: "bn-1001", quantity: 2 },
      ]
    ),
    buildOrder(
      "BW-10040",
      daysAgo(2, 10),
      "in_bearbeitung",
      {
        vorname: "Sara",
        nachname: "Keller",
        email: "sara.keller@web.de",
        strasse: "Maximilianstraße 8",
        plz: "80539",
        ort: "München",
        land: "Deutschland",
      },
      [{ productId: "bn-1002", quantity: 1 }]
    ),
    buildOrder(
      "BW-10039",
      daysAgo(3, 16),
      "versandt",
      {
        vorname: "Youssef",
        nachname: "Haddad",
        email: "y.haddad@gmail.com",
        strasse: "Mönckebergstraße 5",
        plz: "20095",
        ort: "Hamburg",
        land: "Deutschland",
      },
      [
        { productId: "bn-1004", quantity: 1 },
        { productId: "bn-1002", quantity: 1 },
      ]
    ),
    buildOrder(
      "BW-10038",
      daysAgo(4, 11),
      "abgeschlossen",
      {
        vorname: "Laura",
        nachname: "Schmidt",
        email: "laura.schmidt@outlook.de",
        strasse: "Königsallee 22",
        plz: "40212",
        ort: "Düsseldorf",
        land: "Deutschland",
      },
      [
        { productId: "bn-1005", quantity: 1 },
        { productId: "bn-1003", quantity: 1 },
      ]
    ),
    buildOrder(
      "BW-10037",
      daysAgo(5, 9),
      "abgeschlossen",
      {
        vorname: "Karim",
        nachname: "El Amrani",
        email: "karim.ea@mail.de",
        strasse: "Zeil 40",
        plz: "60313",
        ort: "Frankfurt am Main",
        land: "Deutschland",
      },
      [{ productId: "bn-1001", quantity: 1 }]
    ),
    buildOrder(
      "BW-10036",
      daysAgo(6, 18),
      "versandt",
      {
        vorname: "Nora",
        nachname: "Weber",
        email: "nora.weber@icloud.com",
        strasse: "Schlossstraße 3",
        plz: "70173",
        ort: "Stuttgart",
        land: "Deutschland",
      },
      [
        { productId: "bn-1004", quantity: 2 },
        { productId: "bn-1003", quantity: 1 },
      ]
    ),
    buildOrder(
      "BW-10035",
      daysAgo(8, 13),
      "abgeschlossen",
      {
        vorname: "Hassan",
        nachname: "Idrissi",
        email: "h.idrissi@email.de",
        strasse: "Hohe Straße 15",
        plz: "50667",
        ort: "Köln",
        land: "Deutschland",
      },
      [
        { productId: "bn-1005", quantity: 1 },
        { productId: "bn-1005", quantity: 1 },
      ]
    ),
    buildOrder(
      "BW-10034",
      daysAgo(10, 15),
      "abgeschlossen",
      {
        vorname: "Emma",
        nachname: "Fischer",
        email: "emma.fischer@gmx.de",
        strasse: "Prinzregentenstraße 9",
        plz: "81675",
        ort: "München",
        land: "Deutschland",
      },
      [{ productId: "bn-1002", quantity: 1 }]
    ),
    buildOrder(
      "BW-10033",
      daysAgo(12, 12),
      "abgeschlossen",
      {
        vorname: "Omar",
        nachname: "Tazi",
        email: "omar.tazi@proton.me",
        strasse: "Unter den Linden 1",
        plz: "10117",
        ort: "Berlin",
        land: "Deutschland",
      },
      [
        { productId: "bn-1001", quantity: 1 },
        { productId: "bn-1001", quantity: 1 },
      ]
    ),
    buildOrder(
      "BW-10032",
      daysAgo(14, 17),
      "abgeschlossen",
      {
        vorname: "Mia",
        nachname: "Braun",
        email: "mia.braun@web.de",
        strasse: "Reeperbahn 48",
        plz: "20359",
        ort: "Hamburg",
        land: "Deutschland",
      },
      [{ productId: "bn-1004", quantity: 1 }]
    ),
  ].filter((o): o is Order => Boolean(o));

  return seeds.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function loadOrders(): Order[] {
  if (typeof window === "undefined") return getSeedOrders();
  try {
    const raw = localStorage.getItem(ORDERS_STORAGE_KEY);
    if (!raw) {
      const seed = getSeedOrders();
      localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(seed));
      return seed;
    }
    const parsed = JSON.parse(raw) as Order[];
    return Array.isArray(parsed)
      ? parsed.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
      : getSeedOrders();
  } catch {
    return getSeedOrders();
  }
}

export function saveOrders(orders: Order[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(orders));
}

export function createOrderId(): string {
  const n = Math.floor(10000 + Math.random() * 90000);
  return `BW-${n}`;
}

export function buildCheckoutOrder(
  customer: OrderCustomer,
  cartItems: CartItem[]
): Order | null {
  const items = cartItems
    .map((i) => line(i.productId, i.quantity))
    .filter((x): x is OrderLine => Boolean(x));
  if (!items.length) return null;
  const subtotal = items.reduce((s, i) => s + i.unitPrice * i.quantity, 0);
  const shipping = subtotal >= 49 ? 0 : 4.99;
  return {
    id: createOrderId(),
    createdAt: new Date().toISOString(),
    status: "neu",
    customer,
    items,
    subtotal,
    shipping,
    total: subtotal + shipping,
    source: "checkout",
  };
}

export function persistNewOrder(order: Order) {
  const current = loadOrders();
  saveOrders([order, ...current]);
}

export function updateOrderStatus(orderId: string, status: OrderStatus) {
  const current = loadOrders();
  saveOrders(
    current.map((o) => (o.id === orderId ? { ...o, status } : o))
  );
}

export interface CustomerRow {
  key: string;
  name: string;
  email: string;
  ort: string;
  land: string;
  orderCount: number;
  totalSpent: number;
  lastOrderAt: string;
}

export function aggregateCustomers(orders: Order[]): CustomerRow[] {
  const map = new Map<string, CustomerRow>();
  for (const o of orders) {
    const key = o.customer.email.toLowerCase();
    const existing = map.get(key);
    if (!existing) {
      map.set(key, {
        key,
        name: `${o.customer.vorname} ${o.customer.nachname}`,
        email: o.customer.email,
        ort: o.customer.ort,
        land: o.customer.land,
        orderCount: 1,
        totalSpent: o.total,
        lastOrderAt: o.createdAt,
      });
    } else {
      existing.orderCount += 1;
      existing.totalSpent += o.total;
      if (new Date(o.createdAt) > new Date(existing.lastOrderAt)) {
        existing.lastOrderAt = o.createdAt;
        existing.ort = o.customer.ort;
        existing.name = `${o.customer.vorname} ${o.customer.nachname}`;
      }
    }
  }
  return [...map.values()].sort((a, b) => b.totalSpent - a.totalSpent);
}

export interface CityStat {
  ort: string;
  orders: number;
  revenue: number;
}

export function aggregateCities(orders: Order[]): CityStat[] {
  const map = new Map<string, CityStat>();
  for (const o of orders) {
    const ort = o.customer.ort;
    const existing = map.get(ort);
    if (!existing) map.set(ort, { ort, orders: 1, revenue: o.total });
    else {
      existing.orders += 1;
      existing.revenue += o.total;
    }
  }
  return [...map.values()].sort((a, b) => b.orders - a.orders);
}

export interface ProductSalesRow {
  productId: string;
  name: string;
  units: number;
  revenue: number;
}

export function aggregateProductSales(orders: Order[]): ProductSalesRow[] {
  const map = new Map<string, ProductSalesRow>();
  for (const o of orders) {
    for (const item of o.items) {
      const existing = map.get(item.productId);
      if (!existing) {
        map.set(item.productId, {
          productId: item.productId,
          name: item.name,
          units: item.quantity,
          revenue: item.unitPrice * item.quantity,
        });
      } else {
        existing.units += item.quantity;
        existing.revenue += item.unitPrice * item.quantity;
      }
    }
  }
  return [...map.values()].sort((a, b) => b.units - a.units);
}
