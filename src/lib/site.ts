/** Canonical public storefront (Google Merchant / SEO). */
export const SITE_URL = "https://bricknova.store" as const;

export const siteBrand = {
  /** Shop / seller name shown to customers & GMC */
  name: "BrickWelt",
  /** Domain brand */
  domainBrand: "BrickNova",
  /** Product brand in schema/feed — seller brand, not LEGO Group */
  productBrand: "BrickWelt",
  tagline:
    "Unabhängiger Online-Shop für Bau-Sets und Spielwaren in Deutschland. Nicht verbunden mit der LEGO Group.",
} as const;

export function absoluteUrl(path = "/"): string {
  if (!path || path === "/") return SITE_URL;
  return path.startsWith("http")
    ? path
    : `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function productUrl(slug: string): string {
  return absoluteUrl(`/produkte/${slug}`);
}

export function productImageUrl(imagePath?: string): string | undefined {
  if (!imagePath) return undefined;
  return absoluteUrl(imagePath);
}
