import { siteContact } from "@/data/contact";
import { SITE_URL, absoluteUrl, siteBrand } from "@/lib/site";

export function SiteJsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteBrand.name,
    alternateName: siteBrand.domainBrand,
    url: SITE_URL,
    logo: absoluteUrl("/favicon.ico"),
    description: siteBrand.tagline,
    email: siteContact.email,
    telephone: siteContact.phoneDisplay,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteContact.street,
      postalCode: siteContact.postalCode,
      addressLocality: siteContact.city,
      addressCountry: "DE",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteContact.phoneDisplay,
      contactType: "customer service",
      areaServed: "DE",
      availableLanguage: ["German", "de"],
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteBrand.name,
    alternateName: siteBrand.domainBrand,
    url: SITE_URL,
    inLanguage: "de-DE",
    publisher: {
      "@type": "Organization",
      name: siteBrand.name,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/suche?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
