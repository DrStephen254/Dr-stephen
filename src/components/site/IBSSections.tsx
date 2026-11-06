import { Link } from "@tanstack/react-router";
import { Activity, ArrowLeftRight, ArrowRight, CircleCheck, ClipboardList, HeartHandshake, MessageCircle, Stethoscope, Wind } from "lucide-react";
import { ibsHomepage } from "@/content/homepage";
import { Section, SectionHeading, buttonStyles } from "@/components/site/ui";

const symptomIcons = { pain: Activity, gas: Wind, changes: ArrowLeftRight, emptying: CircleCheck };
const journeyIcons = [MessageCircle, Stethoscope, ClipboardList, HeartHandshake];

export function IBSStorySections() {
  return (
    <>
      <Section>
        <SectionHeading eyebrow="IBS care in Nairobi" title={ibsHomepage.story.title} />
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-5 leading-relaxed text-muted-foreground">
            {ibsHomepage.story.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <Link to="/services/$slug" params={{ slug: "ibs" }} className={buttonStyles({ variant: "outline" })}>
              Explore IBS care <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <img src="/images/hero-clinic.jpg" alt="A welcoming consultation room for digestive health assessment in Nairobi" width={1600} height={1104} loading="lazy" className="aspect-[4/3] w-full rounded-lg object-cover" />
        </div>
      </Section>
      <Section tone="ivory">
        <SectionHeading eyebrow="Recognising IBS symptoms" title={ibsHomepage.symptoms.title} center />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ibsHomepage.symptoms.items.map((symptom) => {
            const Icon = symptomIcons[symptom.icon as keyof typeof symptomIcons];
            return (
              <article key={symptom.title} className="rounded-lg border bg-card p-6 transition-transform motion-safe:hover:-translate-y-1">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-primary"><Icon className="h-6 w-6" aria-hidden /></span>
                <h3 className="mt-5 text-xl font-medium leading-snug">{symptom.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{symptom.text}</p>
              </article>
            );
          })}
        </div>
        <p className="mx-auto mt-10 max-w-4xl text-center text-xl leading-relaxed font-medium text-balance text-foreground md:text-2xl md:leading-relaxed">{ibsHomepage.symptoms.note}</p>
      </Section>
      <Section>
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow="Understanding the whole picture" title={ibsHomepage.answers.title} />
            <Link to="/contact" className={buttonStyles({ variant: "primary" })}>Book a consultation <ArrowRight className="h-4 w-4" aria-hidden /></Link>
          </div>
          <div className="space-y-5 border-l-2 border-primary/30 pl-6 leading-relaxed text-muted-foreground">
            {ibsHomepage.answers.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </Section>
    </>
  );
}

export function DigestiveCareJourney() {
  return (
    <Section tone="ivory">
      <SectionHeading eyebrow="A considered approach to care" title={ibsHomepage.journey.title} />
      <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {ibsHomepage.journey.steps.map((step, index) => {
          const Icon = journeyIcons[index];
          return (
            <li key={step.title} className="border-t-2 border-primary/30 pt-5">
              <div className="flex items-center justify-between text-primary">
                <span className="text-sm font-semibold">0{index + 1}</span>
                {Icon && <Icon className="h-6 w-6" aria-hidden />}
              </div>
              <h3 className="mt-4 text-xl font-medium">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
            </li>
          );
        })}
      </ol>
      <div className="mt-10 border-t pt-6">
        <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">{ibsHomepage.journey.note}</p>
        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
          <Link to="/contact" className="text-sm font-semibold text-secondary-foreground underline underline-offset-4">Consultations</Link>
          <Link to="/procedures" className="text-sm font-semibold text-secondary-foreground underline underline-offset-4">Endoscopy & colonoscopy</Link>
          <Link to="/services/$slug" params={{ slug: "ibs" }} className="text-sm font-semibold text-secondary-foreground underline underline-offset-4">IBS assessment & management</Link>
        </div>
      </div>
    </Section>
  );
}