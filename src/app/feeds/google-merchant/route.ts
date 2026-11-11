import { products } from "@/data/products";
import {
  MERCHANT_FEED_HEADERS,
  toGoogleMerchantItem,
} from "@/lib/merchant";

export const dynamic = "force-static";

/** Google Merchant Center product feed (TSV). */
export function GET() {
  const rows = products
    .filter((p) => Boolean(p.imageUrl))
    .map((p) => toGoogleMerchantItem(p));

  const lines = [
    MERCHANT_FEED_HEADERS.join("\t"),
    ...rows.map((row) =>
      MERCHANT_FEED_HEADERS.map((key) => escapeCell(row[key] ?? "")).join("\t")
    ),
  ];

  return new Response(lines.join("\n") + "\n", {
    headers: {
      "Content-Type": "text/tab-separated-values; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}

function escapeCell(value: string): string {
  return value.replace(/\t|\n|\r/g, " ").trim();
}
