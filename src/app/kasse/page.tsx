import type { Metadata } from "next";
import { CheckoutForm } from "@/components/cart/CheckoutForm";

export const metadata: Metadata = {
  title: "Kasse",
  description: "Demo-Checkout mit deutschen Adressfeldern bei BrickWelt.",
};

export default function KassePage() {
  return (
    <div className="container-bw py-10">
      <h1 className="section-title">Kasse</h1>
      <p className="section-sub">Demo-Bestellung – keine echte Zahlung.</p>
      <div className="mt-8">
        <CheckoutForm />
      </div>
    </div>
  );
}
