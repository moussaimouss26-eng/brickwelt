import type { Metadata } from "next";
import { getDeals } from "@/data/products";
import { ProductGrid } from "@/components/product/ProductGrid";
import { DisclaimerBanner } from "@/components/ui/DisclaimerBanner";

export const metadata: Metadata = {
  title: "LEGO Angebote Deutschland",
  description:
    "Aktuelle LEGO Angebote Deutschland im BrickWelt Demo-Shop. Sets mit Rabatt in EUR.",
};

export default function AngebotePage() {
  const products = getDeals(24);
  return (
    <div className="container-bw py-10">
      <h1 className="section-title">LEGO Angebote Deutschland</h1>
      <p className="section-sub">Demo-Rabatte – solange der Vorrat reicht.</p>
      <DisclaimerBanner className="mt-4" />
      <div className="mt-8">
        <ProductGrid products={products} />
      </div>
    </div>
  );
}
