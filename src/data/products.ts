import type { Product } from "@/lib/types";
import { categories } from "./categories";

/** BrickNova / BrickWelt Eigenmarke – 5 Original-Kinderspielzeuge. */
export const products: Product[] = [
  {
    id: "bn-1001",
    slug: "regenbogen-stapelturm",
    name: "Regenbogen-Stapelturm",
    shortDescription:
      "Bunter Holz-Stapelturm in sanften Regenbogenfarben – fein motorisch, ruhig und zeitlos ab 18 Monaten.",
    description:
      "Der BrickNova Regenbogen-Stapelturm lädt zum Sortieren, Stapeln und kreativen Bauen ein. Sieben Bögen aus glatt geschliffenem Holz in warmen Farben fördern Gleichgewichtssinn und Farbenlernen. Ideal für den Kinderzimmer-Tisch oder als ruhiges Begleitspiel. Marke BrickNova – Eigenentwicklung von BrickWelt.",
    category: "holzspielzeug",
    price: 29.99,
    originalPrice: 34.99,
    pieces: 7,
    age: "18M+",
    stock: 42,
    rating: 4.9,
    reviewCount: 128,
    isNew: true,
    isBestseller: true,
    isDeal: true,
    isGiftIdea: true,
    colors: ["#E85D4C", "#F0C94A", "#5BA3D9"],
    imageUrl: "/products/bn-regenbogen-stapelturm.jpg",
    specs: [
      { label: "Teile", value: "7 Bögen" },
      { label: "Alter", value: "18 Monate+" },
      { label: "Material", value: "Holz, wasserbasierte Lackierung" },
      { label: "Marke", value: "BrickNova" },
      { label: "Thema", value: "Holzspielzeug · Stapeln" },
    ],
    tags: ["Holz", "Stapelturm", "Regenbogen", "Kleinkind", "BrickNova"],
  },
  {
    id: "bn-1002",
    slug: "wolkenweich-plueschhase",
    name: "Wolkenweich Plüschhase",
    shortDescription:
      "Kuscheliger Begleiter in Creme und Rosé – weiches Plüsch für Gute-Nacht-Rituale ab 0 Jahren.",
    description:
      "Der BrickNova Wolkenweich Plüschhase ist der ruhige Freund für Kinderwagen, Bett und Sofa. Extra weiches Plüsch, freundliche Stick-Augen und eine kuschelige Größe zum Umarmen. Waschbares Design für den Alltag. Eigenmarke BrickNova by BrickWelt – ohne Fremdmarken.",
    category: "kuscheltiere",
    price: 19.99,
    pieces: 1,
    age: "0+",
    stock: 65,
    rating: 4.8,
    reviewCount: 96,
    isNew: true,
    isBestseller: true,
    isGiftIdea: true,
    colors: ["#F5E6D8", "#E8A0BF", "#C4A574"],
    imageUrl: "/products/bn-plueschhase.jpg",
    specs: [
      { label: "Größe", value: "ca. 28 cm" },
      { label: "Alter", value: "0+" },
      { label: "Material", value: "Plüsch / Polyesterfüllung" },
      { label: "Marke", value: "BrickNova" },
      { label: "Thema", value: "Kuscheltiere" },
    ],
    tags: ["Plüsch", "Hase", "Kuscheltier", "Baby", "BrickNova"],
  },
  {
    id: "bn-1003",
    slug: "bunte-holzbausteine",
    name: "Bunte Holzbausteine",
    shortDescription:
      "80 farbenfrohe Holzbausteine in Würfel- und Rechteckformen – freies Bauen ab 3 Jahren.",
    description:
      "Mit dem BrickNova Holzbaustein-Set entstehen Türme, Straßen und Fantasiestädte. 80 glatte Holzsteine in kräftigen Farben und Naturholz-Tönen liegen griffbereit in der Holzschale. Fördert Kreativität, räumliches Denken und gemeinsames Spielen. BrickNova Eigenmarke – generische Bausteine, keine Fremdsysteme.",
    category: "bauen",
    price: 39.99,
    originalPrice: 44.99,
    pieces: 80,
    age: "3+",
    stock: 38,
    rating: 4.9,
    reviewCount: 154,
    isNew: true,
    isBestseller: true,
    isDeal: true,
    isGiftIdea: true,
    colors: ["#E30613", "#FFD100", "#006CB7"],
    imageUrl: "/products/bn-holzbausteine.jpg",
    specs: [
      { label: "Teile", value: "80 Bausteine" },
      { label: "Alter", value: "3+" },
      { label: "Material", value: "Massivholz" },
      { label: "Marke", value: "BrickNova" },
      { label: "Thema", value: "Bauen & Stecken" },
    ],
    tags: ["Holz", "Bausteine", "Bauen", "Kreativ", "BrickNova"],
  },
  {
    id: "bn-1004",
    slug: "waldtiere-puzzle",
    name: "Waldtiere Puzzle",
    shortDescription:
      "48-teiliges Holzpuzzle mit sanfter Waldszene – Reh, Fuchs und Eule für ruhige Spielmomente ab 4 Jahren.",
    description:
      "Das BrickNova Waldtiere Puzzle bringt Ruhe und Konzentration zusammen. 48 stabile Puzzleteile zeigen eine freundliche Waldlandschaft mit Tieren – ideal für gemeinsame Puzzle-Nachmittage. Robuste Karton- bzw. Holzoptik für Kinderhände. Eigenmarke BrickNova by BrickWelt.",
    category: "puzzle",
    price: 16.99,
    pieces: 48,
    age: "4+",
    stock: 54,
    rating: 4.7,
    reviewCount: 73,
    isNew: true,
    isGiftIdea: true,
    colors: ["#2F6B4F", "#C8D9C0", "#C4A574"],
    imageUrl: "/products/bn-waldtiere-puzzle.jpg",
    specs: [
      { label: "Teile", value: "48" },
      { label: "Alter", value: "4+" },
      { label: "Motiv", value: "Waldtiere" },
      { label: "Marke", value: "BrickNova" },
      { label: "Thema", value: "Puzzle" },
    ],
    tags: ["Puzzle", "Wald", "Tiere", "Konzentration", "BrickNova"],
  },
  {
    id: "bn-1005",
    slug: "entdecker-magnet-baukasten",
    name: "Entdecker Magnet-Baukasten",
    shortDescription:
      "Magnetische Formen und Stäbe für erste STEM-Ideen – Häuser, Räder und freies Konstruieren ab 5 Jahren.",
    description:
      "Der BrickNova Entdecker Magnet-Baukasten macht Magnetismus greifbar: bunte geometrische Platten und Stäbe lassen sich zu Häuschen, Fahrzeugen und Figuren verbinden. Fördert Experimentierfreude und räumliches Denken – ohne Bildschirm. BrickNova / BrickWelt Eigenmarke.",
    category: "forschen",
    price: 34.99,
    originalPrice: 39.99,
    pieces: 36,
    age: "5+",
    stock: 31,
    rating: 4.8,
    reviewCount: 89,
    isNew: true,
    isBestseller: true,
    isDeal: true,
    isGiftIdea: true,
    colors: ["#E85D4C", "#5BA3D9", "#F0C94A"],
    imageUrl: "/products/bn-magnet-baukasten.jpg",
    specs: [
      { label: "Teile", value: "36" },
      { label: "Alter", value: "5+" },
      { label: "Prinzip", value: "Magnetisches Stecken" },
      { label: "Marke", value: "BrickNova" },
      { label: "Thema", value: "Forschen & STEM" },
    ],
    tags: ["Magnet", "STEM", "Forschen", "Baukasten", "BrickNova"],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  const same = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  );
  if (same.length >= limit) return same.slice(0, limit);
  const others = products.filter((p) => p.id !== product.id && !same.includes(p));
  return [...same, ...others].slice(0, limit);
}

export function getBestsellers(limit = 8): Product[] {
  return products.filter((p) => p.isBestseller).slice(0, limit);
}

export function getNewArrivals(limit = 8): Product[] {
  return products.filter((p) => p.isNew).slice(0, limit);
}

export function getDeals(limit = 8): Product[] {
  return products.filter((p) => p.isDeal).slice(0, limit);
}

export function getGiftIdeas(limit = 8): Product[] {
  return products.filter((p) => p.isGiftIdea).slice(0, limit);
}

export function searchProducts(query: string): Product[] {
  const q = query.trim().toLowerCase();
  if (!q) return products;
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q)) ||
      categories.find((c) => c.slug === p.category)?.name.toLowerCase().includes(q)
  );
}

export function filterProducts(options: {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  query?: string;
  sort?: "popularity" | "price-asc" | "price-desc" | "newest";
}): Product[] {
  let result = [...products];

  if (options.category) {
    result = result.filter((p) => p.category === options.category);
  }
  if (options.minPrice != null) {
    result = result.filter((p) => p.price >= options.minPrice!);
  }
  if (options.maxPrice != null) {
    result = result.filter((p) => p.price <= options.maxPrice!);
  }
  if (options.query) {
    const q = options.query.trim().toLowerCase();
    result = result.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
    );
  }

  switch (options.sort) {
    case "price-asc":
      result.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      result.sort((a, b) => b.price - a.price);
      break;
    case "newest":
      result.sort((a, b) => Number(b.isNew) - Number(a.isNew));
      break;
    case "popularity":
    default:
      result.sort((a, b) => b.reviewCount * b.rating - a.reviewCount * a.rating);
      break;
  }

  return result;
}
