import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { getPopulatedCategories } from "@/lib/catalog";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/produkte",
    "/angebote",
    "/neuheiten",
    "/geschenkideen",
    "/impressum",
    "/datenschutz",
    "/agb",
    "/widerruf",
    "/suche",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const productRoutes = products.map((p) => ({
    url: `${SITE_URL}/produkte/${p.slug}`,
    changeFrequency: "daily" as const,
    priority: 0.9,
  }));

  const categoryRoutes = getPopulatedCategories().map(({ category: c }) => ({
    url: `${SITE_URL}/kategorien/${c.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.75,
  }));

  return [...staticRoutes, ...productRoutes, ...categoryRoutes];
}
