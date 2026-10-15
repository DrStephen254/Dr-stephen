import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, ContactButtons } from "@/components/site/ui";
import { faqs } from "@/content/faqs";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/faqs")({
  head: () => {
    const base = seo({ title: "Frequently Asked Questions", description: "Answers about appointments, referrals, insurance, procedure preparation and sedation with Dr. Kairu in Nairobi.", path: "/faqs" });
    return {
      ...base,
      scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }],
    };
  },
  component: Faqs,
});

function Faqs() {
  return (
    <>
      <PageHero eyebrow="FAQs" title="Frequently asked questions" />
      <Section>
        <div className="max-w-3xl divide-y rounded-2xl border bg-card">
          {faqs.map((f) => (
            <details key={f.q} className="p-6">
              <summary className="cursor-pointer list-none text-lg font-semibold">{f.q}</summary>
              <p className="mt-3 leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
        <div className="mt-12"><ContactButtons /></div>
      </Section>
    </>
  );
}
