import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { categories } from "@/data/categories";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://brickwelt.example";
  const staticRoutes = [
    "",
    "/produkte",
    "/angebote",
    "/neuheiten",
    "/geschenkideen",
    "/warenkorb",
    "/wunschliste",
    "/kasse",
    "/konto",
    "/impressum",
    "/datenschutz",
    "/agb",
    "/widerruf",
    "/suche",
  ].map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const productRoutes = products.map((p) => ({
    url: `${base}/produkte/${p.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const categoryRoutes = categories.map((c) => ({
    url: `${base}/kategorien/${c.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.75,
  }));

  return [...staticRoutes, ...productRoutes, ...categoryRoutes];
}
