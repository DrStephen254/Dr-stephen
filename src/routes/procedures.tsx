import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section, Prose, ContactButtons } from "@/components/site/ui";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/procedures")({
  head: () => seo({ title: "Procedures & Preparation", description: "How to prepare for endoscopy and colonoscopy in Nairobi: fasting, bowel preparation, medicines, sedation and recovery.", path: "/procedures" }),
  component: Procedures,
});

const steps = [
  { t: "Before booking", d: "A consultation confirms whether a procedure is needed. Bring a list of all medicines, allergies and previous results." },
  { t: "Medicines", d: "Tell the clinic if you take blood thinners, diabetes medicines or iron. Do not stop any medicine without advice." },
  { t: "Fasting & bowel preparation", d: "Gastroscopy usually requires about six hours without food. Colonoscopy requires a special diet and bowel preparation. Written instructions are given at booking." },
  { t: "Sedation", d: "Sedation is commonly offered. Arrange for an adult to take you home; avoid driving, signing documents or operating machinery for the rest of the day." },
  { t: "After the procedure", d: "Initial findings are usually discussed the same day. Biopsy results take longer and are reviewed at follow-up." },
];

function Procedures() {
  return (
    <>
      <PageHero eyebrow="Procedures" title="Procedures & preparation" intro="General guidance to help you feel prepared. Your personal instructions from the clinic always take priority." />
      <Section>
        <ol className="grid gap-5 md:grid-cols-2">
          {steps.map((s, i) => (
            <li key={s.t} className="rounded-2xl border bg-card p-7">
              <span className="font-display text-3xl text-gold">{String(i + 1).padStart(2, "0")}</span>
              <h2 className="mt-2 text-xl font-medium">{s.t}</h2>
              <p className="mt-2 text-muted-foreground">{s.d}</p>
            </li>
          ))}
        </ol>
        <Prose>
          <p className="mt-12">Read more about <Link to="/services/$slug" params={{ slug: "endoscopy" }} className="text-primary underline">upper GI endoscopy</Link> and <Link to="/services/$slug" params={{ slug: "colonoscopy" }} className="text-primary underline">colonoscopy</Link>.</p>
          <ContactButtons />
        </Prose>
      </Section>
    </>
  );
}
