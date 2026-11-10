"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import {
  Heart,
  Menu,
  Search,
  ShoppingCart,
  User,
  X,
  ChevronDown,
} from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { categories } from "@/data/categories";
import { useCart } from "@/context/cart-context";
import { useWishlist } from "@/context/wishlist-context";

const navLinks = [
  { href: "/produkte", label: "Alle Produkte" },
  { href: "/angebote", label: "Angebote" },
  { href: "/neuheiten", label: "Neuheiten" },
  { href: "/geschenkideen", label: "Geschenkideen" },
];

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { itemCount } = useCart();
  const { count: wishCount } = useWishlist();
  const [open, setOpen] = useState(false);
  const [catsOpen, setCatsOpen] = useState(false);
  const [query, setQuery] = useState("");

  function onSearch(e: FormEvent) {
    e.preventDefault();
    const q = query.trim();
    router.push(q ? `/suche?q=${encodeURIComponent(q)}` : "/produkte");
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/90 backdrop-blur-md">
      <div className="container-bw">
        <div className="flex h-16 items-center gap-3 sm:h-[4.5rem]">
          <button
            type="button"
            className="btn-ghost -ml-2 lg:hidden"
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <Logo className="mr-auto lg:mr-0" />

          <form
            onSubmit={onSearch}
            className="mx-6 hidden max-w-md flex-1 lg:flex"
            role="search"
          >
            <div className="relative w-full">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brick-black/40" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="LEGO Sets suchen…"
                className="input-field !rounded-full !py-2.5 pl-10 pr-4"
                aria-label="Produkte suchen"
              />
            </div>
          </form>

          <nav className="ml-auto flex items-center gap-1">
            <Link href="/konto" className="btn-ghost" aria-label="Konto">
              <User className="h-5 w-5" />
              <span className="hidden xl:inline">Konto</span>
            </Link>
            <Link href="/wunschliste" className="btn-ghost relative" aria-label="Wunschliste">
              <Heart className="h-5 w-5" />
              {wishCount > 0 && (
                <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-brick-red px-1 text-[10px] font-bold text-white">
                  {wishCount}
                </span>
              )}
            </Link>
            <Link href="/warenkorb" className="btn-ghost relative" aria-label="Warenkorb">
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-brick-blue px-1 text-[10px] font-bold text-white">
                  {itemCount}
                </span>
              )}
              <span className="hidden xl:inline">Warenkorb</span>
            </Link>
          </nav>
        </div>

        <div className="hidden items-center gap-1 border-t border-black/5 py-2 lg:flex">
          <div className="relative">
            <button
              type="button"
              className="btn-ghost gap-1"
              onClick={() => setCatsOpen((v) => !v)}
              aria-expanded={catsOpen}
            >
              Kategorien <ChevronDown className={`h-4 w-4 transition ${catsOpen ? "rotate-180" : ""}`} />
            </button>
            {catsOpen && (
              <div className="absolute left-0 top-full z-50 mt-1 grid w-[34rem] grid-cols-2 gap-1 rounded-2xl border border-black/10 bg-white p-3 shadow-brick">
                {categories.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/kategorien/${c.slug}`}
                    className="rounded-xl px-3 py-2 text-sm font-semibold hover:bg-brick-soft"
                    onClick={() => setCatsOpen(false)}
                  >
                    <span
                      className="mr-2 inline-block h-2.5 w-2.5 rounded-sm"
                      style={{ background: c.color }}
                    />
                    {c.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`btn-ghost ${pathname === l.href ? "bg-brick-soft text-brick-black" : ""}`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>

      {open && (
        <div className="border-t border-black/5 bg-white lg:hidden">
          <div className="container-bw space-y-4 py-4">
            <form onSubmit={onSearch} className="relative" role="search">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brick-black/40" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="LEGO Sets suchen…"
                className="input-field pl-10"
              />
            </form>
            <div className="flex flex-col gap-1">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="rounded-xl px-3 py-2.5 text-sm font-semibold hover:bg-brick-soft"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
            </div>
            <div>
              <p className="mb-2 px-3 text-xs font-bold uppercase tracking-wide text-brick-black/50">
                Kategorien
              </p>
              <div className="grid grid-cols-2 gap-1">
                {categories.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/kategorien/${c.slug}`}
                    className="rounded-xl px-3 py-2 text-sm font-medium hover:bg-brick-soft"
                    onClick={() => setOpen(false)}
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
