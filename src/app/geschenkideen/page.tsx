import type { Metadata } from "next";
import { getGiftIdeas } from "@/data/products";
import { ProductGrid } from "@/components/product/ProductGrid";
import { DisclaimerBanner } from "@/components/ui/DisclaimerBanner";

export const metadata: Metadata = {
  title: "Geschenkideen – LEGO Sets",
  description: "Geschenkideen mit LEGO Sets – für Kinder und Erwachsene. BrickWelt Demo-Shop.",
};

export default function GeschenkideenPage() {
  return (
    <div className="container-bw py-10">
      <h1 className="section-title">Geschenkideen</h1>
      <p className="section-sub">Sets, die Freude bereiten – Demo-Auswahl.</p>
      <DisclaimerBanner className="mt-4" />
      <div className="mt-8">
        <ProductGrid products={getGiftIdeas(24)} />
      </div>
    </div>
  );
}
