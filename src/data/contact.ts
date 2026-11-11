/** Business contact used across footer, legal pages, and checkout. */
export const siteContact = {
  company: "BrickNova",
  legalName: "BrickNova",
  street: "Sonnenallee 25",
  postalCode: "12047",
  city: "Berlin-Neukölln",
  country: "Deutschland",
  /** Single-line DE address */
  addressLine: "Sonnenallee 25, 12047 Berlin-Neukölln",
  phoneDisplay: "+49 1575 8375588",
  phoneHref: "tel:+4915758375588",
  email: "kontakt@bricknova.store",
} as const;

export function addressMultiline(): string[] {
  return [
    siteContact.street,
    `${siteContact.postalCode} ${siteContact.city}`,
    siteContact.country,
  ];
}
