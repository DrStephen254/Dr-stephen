import { createFileRoute } from "@tanstack/react-router";
import suiteImg from "@/assets/procedure-suite.jpg";
import portraitImg from "@/assets/dr-kairu-consultation.jpg";
import { PageHero, Section, SectionHeading, VerifiedList, ContactButtons, Pending } from "@/components/site/ui";
import { hospitals, memberships, qualifications, site } from "@/content/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => seo({ title: "About Dr. Kairu", description: "About Dr. Stephen Mbugua Kairu, Consultant Physician & Gastroenterologist in Nairobi — approach to care, qualifications and affiliations.", path: "/about" }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero eyebrow="Meet Dr. Stephen" title={site.doctorName} intro={`Consultant Physician & Gastroenterologist, ${site.name}`} />
      <Section>
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
          <img src={portraitImg} alt="Dr. Stephen Mbugua Kairu in consultation at his desk" width={1448} height={1086} loading="lazy" className="aspect-[4/3] w-full rounded-2xl border object-cover" />
          <div className="space-y-5 text-[1.05rem] leading-relaxed text-foreground/85">
            <h2 className="text-3xl font-medium text-foreground">An approach built on clarity</h2>
            <p>Dr. Kairu cares for adults with conditions affecting the oesophagus, stomach, intestines and liver. He combines internal medicine training with specialist gastroenterology to look at the whole person, not just one symptom.</p>
            <p>Consultations aim to explain what is happening, why a test is or isn't needed, and what the options are — so that patients can make informed decisions about their care.</p>
            <p className="text-sm text-muted-foreground"><Pending>Biography pending review</Pending> Training history and career details will be added after confirmation by Dr. Kairu.</p>
          </div>
        </div>
      </Section>
      <Section tone="ivory">
        <div className="grid gap-12 md:grid-cols-3">
          <div><SectionHeading title="Qualifications" /><VerifiedList items={qualifications} emptyNote="Listed once verified." /></div>
          <div><SectionHeading title="Memberships" /><VerifiedList items={memberships} emptyNote="Listed once verified." /></div>
          <div><SectionHeading title="Hospital privileges" /><VerifiedList items={hospitals} emptyNote="Listed once verified." /></div>
        </div>
      </Section>
      <Section>
        <img src={suiteImg} alt="Endoscopy suite" width={1408} height={1008} loading="lazy" className="mb-10 aspect-[21/9] w-full rounded-2xl object-cover" />
        <ContactButtons />
      </Section>
    </>
  );
}
