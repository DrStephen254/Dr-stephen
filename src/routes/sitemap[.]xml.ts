import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { articles } from "@/content/articles";

const staticPaths = ["/", "/about", "/services", "/procedures", "/insurance", "/hospitals", "/blog", "/faqs", "/referring-doctors", "/corporate-health", "/contact", "/privacy"];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: ({ request }) => {
        const base = site.url || new URL(request.url).origin;
        const paths = [
          ...staticPaths,
          ...services.map((s) => `/services/${s.slug}`),
          ...articles.filter((a) => a.clinicallyReviewed).map((a) => `/blog/${a.slug}`),
        ];
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths.map((p) => `  <url><loc>${base}${p}</loc></url>`).join("\n")}\n</urlset>`;
        return new Response(xml, { headers: { "Content-Type": "application/xml" } });
      },
    },
  },
});
