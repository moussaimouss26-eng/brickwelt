export type CategorySlug =
  | "holzspielzeug"
  | "kuscheltiere"
  | "bauen"
  | "puzzle"
  | "forschen";

export interface Category {
  slug: CategorySlug;
  name: string;
  description: string;
  color: string;
  accent: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  category: CategorySlug;
  price: number;
  originalPrice?: number;
  pieces: number;
  age: string;
  stock: number;
  rating: number;
  reviewCount: number;
  isBestseller?: boolean;
  isNew?: boolean;
  isDeal?: boolean;
  isGiftIdea?: boolean;
  colors: [string, string, string];
  /** Optional real product photo under /public (preferred over SVG placeholder). */
  imageUrl?: string;
  specs: { label: string; value: string }[];
  tags: string[];
}

export interface CartItem {
  productId: string;
  quantity: number;
}

export type SortOption = "popularity" | "price-asc" | "price-desc" | "newest";
