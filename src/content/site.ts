/**
 * SITE CONFIGURATION — edit this file to update clinic details.
 * Anything set to `null` or `verified: false` is hidden or shown as an
 * "Awaiting verification" placeholder. Never fill in unverified details.
 */

export const site = {
  /** Confirmed production domain, e.g. "https://www.drkairu.co.ke" (no trailing slash). Leave "" until confirmed — canonical tags & sitemap URLs depend on it. */
  url: "",
  name: "Dr. Stephen Mbugua Kairu",
  shortName: "Dr. Kairu",
  title: "Consultant Physician & Gastroenterologist",
  city: "Nairobi",
  country: "Kenya",

  contact: {
    /** International format, e.g. "+254 7XX XXX XXX". null = not yet verified. */
    phone: null as string | null,
    /** Digits only with country code, e.g. "2547XXXXXXXX". null disables WhatsApp buttons. */
    whatsapp: null as string | null,
    email: null as string | null,
    address: null as string | null,
    hours: null as string | null,
    /** Google Maps embed URL once the location is confirmed. */
    mapEmbedUrl: null as string | null,
  },

  /** Analytics: leave null until a privacy-conscious provider is chosen. */
  analytics: {
    plausibleDomain: null as string | null,
  },
  /** Google Search Console HTML-tag verification token. */
  googleSiteVerification: null as string | null,
};

export type Verifiable = { label: string; detail?: string; verified: boolean };

/** Qualifications — set verified: true only after documents are checked. */
export const qualifications: Verifiable[] = [
  { label: "Medical degree (MBChB)", detail: "Institution and year to be confirmed", verified: false },
  { label: "Master of Medicine (Internal Medicine)", detail: "Institution and year to be confirmed", verified: false },
  { label: "Fellowship / training in Gastroenterology", detail: "Programme to be confirmed", verified: false },
  { label: "KMPDC registration", detail: "Registration number to be confirmed", verified: false },
];

export const memberships: Verifiable[] = [
  { label: "Professional society membership", detail: "To be confirmed", verified: false },
];

export const hospitals: Verifiable[] = [
  { label: "Hospital affiliation 1", detail: "Name and privileges to be confirmed", verified: false },
  { label: "Hospital affiliation 2", detail: "Name and privileges to be confirmed", verified: false },
];

export const insurers: Verifiable[] = [
  { label: "Insurer 1", verified: false },
  { label: "Insurer 2", verified: false },
  { label: "Insurer 3", verified: false },
  { label: "Corporate schemes", verified: false },
];

export const whatsappLink = (message: string) =>
  site.contact.whatsapp
    ? `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(message)}`
    : null;

export const telLink = () =>
  site.contact.phone ? `tel:${site.contact.phone.replace(/\s/g, "")}` : null;
