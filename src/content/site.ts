/**
 * SITE CONFIGURATION — edit this file to update clinic details.
 * Anything set to `null` or `verified: false` is hidden or shown as an
 * "Awaiting verification" placeholder. Never fill in unverified details.
 *
 * Items marked verified: true were supplied directly by Dr. Kairu.
 */

export const site = {
  /** Confirmed production domain, e.g. "https://www.drkairu.co.ke" (no trailing slash). Leave "" until confirmed — canonical tags & sitemap URLs depend on it. */
  url: "",
  name: "Digestive Health & Endoscopy Centre",
  doctorName: "Dr. Stephen Mbugua Kairu",
  shortName: "DH&E Centre",
  title: "Gastroenterology & Endoscopy, Nairobi",
  city: "Nairobi",
  country: "Kenya",

  contact: {
    /** Confirmed by Dr. Kairu: 0736 443383. */
    mobile: "+254 736 443 383" as string | null,
    /** Confirmed by Dr. Kairu: 020 2420950. */
    landline: "+254 20 242 0950" as string | null,
    /** Digits only with country code, e.g. "2547XXXXXXXX". null disables WhatsApp buttons. Awaiting Dr. Kairu's confirmation that this line is on WhatsApp. */
    whatsapp: null as string | null,
    email: null as string | null,
    /** Confirmed by Dr. Kairu. */
    address: "The Green House, Adams Arcade, First Floor, Suite No. 19, East Wing",
    /** Google Maps embed for the practice building (Adams Arcade, Nairobi). */
    mapEmbedUrl: "https://maps.google.com/maps?q=Adams%20Arcade%2C%20Nairobi&z=16&output=embed",
  },

  /** Analytics: leave null until a privacy-conscious provider is chosen. */
  analytics: {
    plausibleDomain: null as string | null,
  },
  /** Google Search Console HTML-tag verification token. */
  googleSiteVerification: null as string | null,
};

export type Verifiable = { label: string; detail?: string; verified: boolean };

/** Operating hours confirmed by Dr. Kairu. */
export const operatingHours: { day: string; time: string }[] = [
  { day: "Monday – Friday", time: "8.00am – 5.00pm" },
  { day: "Saturday", time: "Closed" },
  { day: "Sunday", time: "Closed" },
  { day: "Public holidays", time: "Closed" },
];

/** Professional training supplied by Dr. Kairu. */
export const qualifications: Verifiable[] = [
  { label: "MP&DB", detail: "University of Nairobi", verified: true },
  { label: "MDS", detail: "University of the Witwatersrand, South Africa", verified: true },
  /** Still awaiting documents — hidden until verified. */
  { label: "KMPDC registration", detail: "Registration number to be confirmed", verified: false },
];

export const memberships: Verifiable[] = [
  { label: "American Gastroenterological Association", detail: "United States", verified: true },
  { label: "Gastroenterology Society of Kenya", detail: "Kenya", verified: true },
];

export const hospitals: Verifiable[] = [
  { label: "Nairobi Hospital", verified: true },
  { label: "Aga Khan University Hospital", verified: true },
  { label: "Mater Hospital", verified: true },
  { label: "Menelik Medical Centre", verified: true },
  { label: "Avenue Hospital", verified: true },
  { label: "M. P. Shah Hospital", verified: true },
  { label: "Gurunanak", verified: true },
];

export const insurers: Verifiable[] = [
  { label: "Jubilee", verified: true },
  { label: "First Assurance", verified: true },
  { label: "APA", verified: true },
  { label: "Madison Insurance", verified: true },
  { label: "Vanbreda", verified: true },
  { label: "Aetna", verified: true },
  { label: "Mercantile", verified: true },
  { label: "Real Insurance", verified: true },
  { label: "CIC", verified: true },
  { label: "Pioneer Insurance", verified: true },
  { label: "Kenindia Assurance", verified: true },
  { label: "Clarkson Nottcutt", verified: true },
  { label: "Eagle Africa", verified: true },
  { label: "Resolution Insurance", verified: true },
  { label: "UAP", verified: true },
  { label: "Kenya Defence Forces Medical Insurance Scheme", verified: true },
  { label: "AoN Minet", verified: true },
];

export const whatsappLink = (message: string) =>
  site.contact.whatsapp
    ? `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(message)}`
    : null;

const dial = (n: string | null) => (n ? `tel:${n.replace(/[\s()]/g, "")}` : null);

/** Primary line to call: the mobile, falling back to the landline. */
export const telLink = () => dial(site.contact.mobile ?? site.contact.landline);

/** The landline as a separate link. */
export const landlineLink = () => dial(site.contact.landline);
