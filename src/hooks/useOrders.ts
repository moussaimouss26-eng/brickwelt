"use client";

import { useCallback, useEffect, useState } from "react";
import {
  loadOrders,
  saveOrders,
  type Order,
  type OrderStatus,
} from "@/lib/orders";

export function useOrders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setOrders(loadOrders());
    setHydrated(true);
  }, []);

  const refresh = useCallback(() => {
    setOrders(loadOrders());
  }, []);

  const setStatus = useCallback((orderId: string, status: OrderStatus) => {
    setOrders((prev) => {
      const next = prev.map((o) => (o.id === orderId ? { ...o, status } : o));
      saveOrders(next);
      return next;
    });
  }, []);

  return { orders, hydrated, refresh, setStatus };
}
