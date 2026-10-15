import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero, Section, ContactButtons, Prose } from "@/components/site/ui";
import { getService, services } from "@/content/services";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData, params }) =>
    loaderData
      ? seo({ title: `${loaderData.service.name} in Nairobi`, description: loaderData.service.metaDescription, path: `/services/${params.slug}` })
      : { meta: [{ title: "Service not found" }, { name: "robots", content: "noindex" }] },
  component: ServicePage,
});

function ServicePage() {
  const { service } = Route.useLoaderData();
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 4);
  return (
    <>
      <PageHero eyebrow={service.kind} title={service.name} intro={service.summary} />
      <Section>
        <div className="grid gap-14 lg:grid-cols-[1fr_18rem]">
          <Prose>
            {service.sections.map((sec) => (
              <section key={sec.heading}>
                <h2>{sec.heading}</h2>
                {sec.body.map((p) => <p key={p} className="mt-3">{p}</p>)}
              </section>
            ))}
            <p className="rounded-xl bg-muted p-5 text-sm text-muted-foreground">This page provides general information and is not a substitute for a medical consultation.</p>
            <ContactButtons />
          </Prose>
          <aside className="space-y-3">
            <p className="eyebrow">Related</p>
            {others.map((o) => (
              <Link key={o.slug} to="/services/$slug" params={{ slug: o.slug }} className="block rounded-xl border bg-card p-4 text-sm font-medium hover:bg-secondary">{o.name}</Link>
            ))}
            <Link to="/procedures" className="block rounded-xl border bg-card p-4 text-sm font-medium hover:bg-secondary">Procedures & Preparation</Link>
          </aside>
        </div>
      </Section>
    </>
  );
}
