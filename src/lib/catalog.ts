import { categories, getCategory } from "@/data/categories";
import { products } from "@/data/products";
import type { Category, Product } from "@/lib/types";

export interface PopulatedCategory {
  category: Category;
  count: number;
  cover: Product;
}

/** Categories that actually have catalog products, richest first. */
export function getPopulatedCategories(): PopulatedCategory[] {
  const byCat = new Map<string, Product[]>();
  for (const p of products) {
    const list = byCat.get(p.category) ?? [];
    list.push(p);
    byCat.set(p.category, list);
  }

  const rows: PopulatedCategory[] = [];
  for (const cat of categories) {
    const list = byCat.get(cat.slug);
    if (!list?.length) continue;
    const cover =
      [...list]
        .filter((p) => p.imageUrl)
        .sort((a, b) => {
          const score = (p: Product) =>
            (p.isBestseller ? 100000 : 0) + p.pieces + (p.isNew ? 500 : 0);
          return score(b) - score(a);
        })[0] ?? list[0];
    rows.push({ category: cat, count: list.length, cover });
  }

  return rows.sort((a, b) => b.count - a.count || b.cover.pieces - a.cover.pieces);
}

export function getCategoryProductCount(slug: string): number {
  return products.filter((p) => p.category === slug).length;
}

export { getCategory };
