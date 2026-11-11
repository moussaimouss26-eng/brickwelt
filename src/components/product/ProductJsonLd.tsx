import type { Product } from "@/lib/types";
import { siteContact } from "@/data/contact";
import {
  getProductMpn,
  productAvailability,
} from "@/lib/merchant";
import {
  absoluteUrl,
  productImageUrl,
  productUrl,
  siteBrand,
} from "@/lib/site";

export function ProductJsonLd({ product }: { product: Product }) {
  const availability = productAvailability(product);
  const mpn = getProductMpn(product);
  const image = productImageUrl(product.imageUrl);
  const url = productUrl(product.slug);

  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    sku: product.id,
    ...(mpn ? { mpn } : {}),
    ...(image ? { image: [image] } : {}),
    brand: {
      "@type": "Brand",
      name: siteBrand.productBrand,
    },
    category: "Toys & Games > Toys > Building Toys",
    offers: {
      "@type": "Offer",
      url,
      priceCurrency: "EUR",
      price: product.price.toFixed(2),
      priceValidUntil: new Date(
        Date.now() + 1000 * 60 * 60 * 24 * 60
      )
        .toISOString()
        .slice(0, 10),
      availability: availability.schema,
      itemCondition: "https://schema.org/NewCondition",
      seller: {
        "@type": "Organization",
        name: siteBrand.name,
        url: absoluteUrl("/"),
      },
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: {
          "@type": "MonetaryAmount",
          value: "4.99",
          currency: "EUR",
        },
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: "DE",
        },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: {
            "@type": "QuantitativeValue",
            minValue: 1,
            maxValue: 2,
            unitCode: "DAY",
          },
          transitTime: {
            "@type": "QuantitativeValue",
            minValue: 2,
            maxValue: 5,
            unitCode: "DAY",
          },
        },
      },
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        applicableCountry: "DE",
        returnPolicyCategory:
          "https://schema.org/MerchantReturnFiniteReturnWindow",
        merchantReturnDays: 14,
        returnMethod: "https://schema.org/ReturnByMail",
        returnFees: "https://schema.org/FreeReturn",
        merchantReturnLink: absoluteUrl("/widerruf"),
      },
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Verkäuferhinweis",
        value:
          "Unabhängiger Händler. Nicht autorisiert oder lizenziert von der LEGO Group.",
      },
      {
        "@type": "PropertyValue",
        name: "Kontakt",
        value: `${siteContact.addressLine} · ${siteContact.phoneDisplay}`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
