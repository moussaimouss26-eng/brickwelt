"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { ReactNode } from "react";
import {
  LayoutDashboard,
  Package,
  ShoppingBag,
  Users,
  LogOut,
  Store,
} from "lucide-react";
import { ADMIN_SESSION_KEY } from "@/lib/orders";
import { Logo } from "@/components/ui/Logo";

const nav = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { href: "/admin/bestellungen", label: "Bestellungen", icon: ShoppingBag },
  { href: "/admin/kunden", label: "Kunden", icon: Users },
  { href: "/admin/produkte", label: "Verkaufte Produkte", icon: Package },
];

export function AdminShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  function logout() {
    sessionStorage.removeItem(ADMIN_SESSION_KEY);
    router.replace("/admin");
    router.refresh();
    window.location.href = "/admin";
  }

  return (
    <div className="min-h-screen lg:grid lg:grid-cols-[260px_1fr]">
      <aside className="border-b border-black/5 bg-white lg:border-b-0 lg:border-r">
        <div className="flex items-center justify-between gap-3 px-5 py-5">
          <Logo />
          <span className="rounded-lg bg-brick-yellow/80 px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wide">
            Admin
          </span>
        </div>
        <nav className="space-y-1 px-3 pb-4">
          {nav.map((item) => {
            const active = item.exact
              ? pathname === item.href
              : pathname === item.href || pathname?.startsWith(`${item.href}/`);
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition ${
                  active
                    ? "bg-brick-red text-white"
                    : "text-brick-black/70 hover:bg-brick-soft hover:text-brick-black"
                }`}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="space-y-1 border-t border-black/5 px-3 py-4">
          <Link
            href="/"
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-brick-black/70 hover:bg-brick-soft"
          >
            <Store className="h-4 w-4" />
            Zum Shop
          </Link>
          <button
            type="button"
            onClick={logout}
            className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-brick-black/70 hover:bg-brick-soft"
          >
            <LogOut className="h-4 w-4" />
            Abmelden
          </button>
        </div>
      </aside>
      <div className="px-4 py-6 sm:px-6 lg:px-8">{children}</div>
    </div>
  );
}
