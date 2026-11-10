import type { Metadata } from "next";
import { CartView } from "@/components/cart/CartView";

export const metadata: Metadata = {
  title: "Warenkorb",
  description: "Dein BrickWelt Warenkorb – LEGO Sets in EUR.",
};

export default function WarenkorbPage() {
  return (
    <div className="container-bw py-10">
      <h1 className="section-title">Warenkorb</h1>
      <p className="section-sub">Kostenloser Versand ab 49 € (Demo).</p>
      <div className="mt-8">
        <CartView />
      </div>
    </div>
  );
}
