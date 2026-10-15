import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero, Section, ContactButtons } from "@/components/site/ui";
import { services } from "@/content/services";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/services/")({
  head: () => seo({ title: "Gastroenterology Services in Nairobi", description: "Colonoscopy, endoscopy, reflux, IBS, H. pylori, liver health and colorectal cancer screening with a Nairobi gastroenterologist.", path: "/services" }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services" title="Specialist care for the digestive system" intro="From diagnostic procedures to long-term management of digestive and liver conditions." />
      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((s) => (
            <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} className="group flex flex-col rounded-2xl border bg-card p-8 hover:shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-wider text-gold">{s.kind}</p>
              <h2 className="mt-2 text-2xl font-medium">{s.name}</h2>
              <p className="mt-3 flex-1 text-muted-foreground">{s.summary}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">Read more <ArrowRight className="h-4 w-4" /></span>
            </Link>
          ))}
        </div>
        <div className="mt-14"><ContactButtons /></div>
      </Section>
    </>
  );
}
