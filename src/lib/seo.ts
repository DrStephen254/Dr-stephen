import { site } from "@/content/site";

type SeoInput = { title: string; description: string; path: string; noindex?: boolean };

/** Builds head() meta/links for a page. Canonical only emitted once site.url is confirmed. */
export function seo({ title, description, path, noindex }: SeoInput) {
  const fullTitle = `${title} | ${site.name}`;
  const meta: Record<string, string>[] = [
    { title: fullTitle },
    { name: "description", content: description },
    { property: "og:title", content: fullTitle },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: fullTitle },
    { name: "twitter:description", content: description },
  ];
  if (noindex) meta.push({ name: "robots", content: "noindex" });
  const links = site.url ? [{ rel: "canonical", href: `${site.url}${path}` }] : [];
  if (site.url) meta.push({ property: "og:url", content: `${site.url}${path}` });
  return { meta, links };
}

/** Physician structured data — only includes verified/confirmed fields. */
export function physicianJsonLd() {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: site.name,
    medicalSpecialty: "Gastroenterologic",
    description: `${site.title} in ${site.city}, ${site.country}.`,
    areaServed: { "@type": "City", name: site.city },
  };
  if (site.url) data.url = site.url;
  if (site.contact.phone) data.telephone = site.contact.phone;
  if (site.contact.address)
    data.address = { "@type": "PostalAddress", streetAddress: site.contact.address, addressLocality: site.city, addressCountry: "KE" };
  return JSON.stringify(data);
}
