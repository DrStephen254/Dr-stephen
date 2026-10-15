import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero, Section, Prose, Pending, ContactButtons } from "@/components/site/ui";
import { getArticle } from "@/content/articles";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData, params }) =>
    loaderData
      ? seo({ title: loaderData.article.title, description: loaderData.article.excerpt, path: `/blog/${params.slug}`, noindex: !loaderData.article.clinicallyReviewed })
      : { meta: [{ title: "Article not found" }, { name: "robots", content: "noindex" }] },
  component: ArticlePage,
});

function ArticlePage() {
  const { article } = Route.useLoaderData();
  return (
    <>
      <PageHero eyebrow={`${article.category} · ${article.readMinutes} min read`} title={article.title} intro={article.excerpt}>
        {article.clinicallyReviewed ? (
          <p className="text-sm text-muted-foreground">Clinically reviewed{article.reviewedOn ? ` on ${article.reviewedOn}` : ""}</p>
        ) : (
          <Pending>Draft — pending clinical review before publication</Pending>
        )}
      </PageHero>
      <Section>
        <Prose>
          {article.body.map((b, i) => (
            <section key={i}>
              {b.heading && <h2>{b.heading}</h2>}
              {b.paragraphs.map((p) => <p key={p} className="mt-3">{p}</p>)}
            </section>
          ))}
          <p className="rounded-xl bg-muted p-5 text-sm text-muted-foreground">General information only — not a substitute for personal medical advice.</p>
          <ContactButtons />
          <Link to="/blog" className="text-sm font-semibold text-primary">← Back to the blog</Link>
        </Prose>
      </Section>
    </>
  );
}
