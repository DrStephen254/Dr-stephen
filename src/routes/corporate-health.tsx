import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, Prose, ContactButtons } from "@/components/site/ui";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/corporate-health")({
  head: () => seo({ title: "Corporate Digestive Health", description: "Digestive health talks and screening guidance for organisations in Nairobi, delivered by a consultant gastroenterologist.", path: "/corporate-health" }),
  component: Corporate,
});

function Corporate() {
  return (
    <>
      <PageHero eyebrow="Organisations" title="Corporate health" intro="Supporting workplaces with practical digestive and liver health education." />
      <Section>
        <Prose>
          <section><h2>Health talks</h2><p className="mt-3">Educational sessions on topics such as reflux, gut health, bowel cancer awareness and fatty liver, tailored to your team.</p></section>
          <section><h2>Screening guidance</h2><p className="mt-3">Advice for organisations on encouraging appropriate colorectal cancer screening and liver health awareness among staff.</p></section>
          <section><h2>Confidentiality</h2><p className="mt-3">Individual medical information is never shared with employers without the employee's explicit consent.</p></section>
          <ContactButtons message="Hello, I'd like to enquire about corporate health services with Dr. Kairu." />
        </Prose>
      </Section>
    </>
  );
}
