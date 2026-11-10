import { Hero } from "@/components/home/Hero";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { ProductRail } from "@/components/home/ProductRail";
import { Testimonials } from "@/components/home/Testimonials";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import {
  getBestsellers,
  getDeals,
  getGiftIdeas,
  getNewArrivals,
} from "@/data/products";
import { DisclaimerBanner } from "@/components/ui/DisclaimerBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <ProductRail
        title="Bestseller"
        subtitle="Die beliebtesten Sets bei BrickWelt."
        products={getBestsellers(8)}
        href="/produkte?sort=popularity"
      />
      <ProductRail
        title="Neuheiten"
        subtitle="Frisch im Demo-Katalog."
        products={getNewArrivals(8)}
        href="/neuheiten"
      />
      <section className="bg-[linear-gradient(180deg,#fff_0%,#FFF8E7_40%,#fff_100%)]">
        <ProductRail
          title="Angebote"
          subtitle="LEGO Angebote Deutschland – Demo-Rabatte."
          products={getDeals(8)}
          href="/angebote"
          linkLabel="Alle Angebote"
        />
      </section>
      <ProductRail
        title="Geschenkideen"
        subtitle="Für Geburtstag, Feiertage und spontane Freude."
        products={getGiftIdeas(8)}
        href="/geschenkideen"
      />
      <Testimonials />
      <NewsletterSection />
      <div className="container-bw pb-10">
        <DisclaimerBanner className="rounded-xl bg-brick-soft px-4 py-3" />
      </div>
    </>
  );
}
