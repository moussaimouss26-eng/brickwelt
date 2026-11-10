import type { Metadata } from "next";
import { getNewArrivals } from "@/data/products";
import { ProductGrid } from "@/components/product/ProductGrid";
import { DisclaimerBanner } from "@/components/ui/DisclaimerBanner";

export const metadata: Metadata = {
  title: "Neuheiten – Neue LEGO Sets",
  description: "Neue LEGO Sets im BrickWelt Katalog entdecken. LEGO Sets kaufen in Deutschland.",
};

export default function NeuheitenPage() {
  return (
    <div className="container-bw py-10">
      <h1 className="section-title">Neuheiten</h1>
      <p className="section-sub">Frisch eingetroffen im Demo-Sortiment.</p>
      <DisclaimerBanner className="mt-4" />
      <div className="mt-8">
        <ProductGrid products={getNewArrivals(24)} />
      </div>
    </div>
  );
}
