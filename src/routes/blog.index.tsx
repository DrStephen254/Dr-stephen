import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/ui";
import { articles } from "@/content/articles";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/blog/")({
  head: () => seo({ title: "Digestive Health Blog", description: "Educational articles on digestive and liver health — reflux, colonoscopy preparation, fatty liver and more.", path: "/blog" }),
  component: Blog,
});

function Blog() {
  return (
    <>
      <PageHero eyebrow="Health library" title="Digestive health blog" intro="Clear, practical information about digestive and liver health." />
      <Section>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <Link key={a.slug} to="/blog/$slug" params={{ slug: a.slug }} className="flex flex-col rounded-2xl border bg-card p-7 hover:shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-wider text-gold">{a.category} · {a.readMinutes} min read</p>
              <h2 className="mt-2 text-xl font-medium">{a.title}</h2>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">{a.excerpt}</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
