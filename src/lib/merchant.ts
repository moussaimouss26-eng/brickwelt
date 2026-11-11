import type { Product } from "@/lib/types";
import { productImageUrl, productUrl, siteBrand } from "@/lib/site";

/** Own-brand article / MPN = SKU (no third-party set numbers). */
export function getProductMpn(product: Product): string {
  return product.id;
}

export function productAvailability(product: Product): {
  schema: string;
  feed: "in_stock" | "out_of_stock";
  label: string;
} {
  if (product.stock > 0) {
    return {
      schema: "https://schema.org/InStock",
      feed: "in_stock",
      label: `${product.stock} auf Lager`,
    };
  }
  return {
    schema: "https://schema.org/OutOfStock",
    feed: "out_of_stock",
    label: "Ausverkauft",
  };
}

/** Google Merchant Center TSV row fields (tab-separated). */
export function toGoogleMerchantItem(product: Product): Record<string, string> {
  const mpn = getProductMpn(product);
  const image = productImageUrl(product.imageUrl) ?? "";
  const availability = productAvailability(product);
  const regular = product.originalPrice ?? product.price;
  const onSale = Boolean(product.originalPrice && product.originalPrice > product.price);

  return {
    id: product.id,
    title: product.name.slice(0, 150),
    description: product.description.replace(/\s+/g, " ").trim().slice(0, 5000),
    link: productUrl(product.slug),
    image_link: image,
    availability: availability.feed,
    price: `${regular.toFixed(2)} EUR`,
    ...(onSale ? { sale_price: `${product.price.toFixed(2)} EUR` } : {}),
    brand: siteBrand.productBrand,
    condition: "new",
    mpn,
    identifier_exists: "yes",
    google_product_category: "Toys & Games > Toys",
    product_type: product.category,
    shipping: "DE:::4.99 EUR",
  };
}

export const MERCHANT_FEED_HEADERS = [
  "id",
  "title",
  "description",
  "link",
  "image_link",
  "availability",
  "price",
  "sale_price",
  "brand",
  "condition",
  "mpn",
  "identifier_exists",
  "google_product_category",
  "product_type",
  "shipping",
] as const;
