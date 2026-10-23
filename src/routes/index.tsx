import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-clinic.jpg";
import portraitImg from "@/assets/dr-kairu-consultation.jpg";
import { ContactButtons, Section, SectionHeading, VerifiedList, Pending, buttonStyles, HoursList } from "@/components/site/ui";
import { services } from "@/content/services";
import { articles } from "@/content/articles";
import { faqs } from "@/content/faqs";
import { hospitals, insurers, qualifications, site } from "@/content/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    seo({
      title: "Gastroenterologist in Nairobi",
      description: "Dr. Stephen Mbugua Kairu, Consultant Physician & Gastroenterologist in Nairobi — endoscopy, colonoscopy, reflux, IBS, H. pylori and liver care.",
      path: "/",
    }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-primary-deep text-primary-foreground">
        <img src={heroImg} alt="A calm, light-filled consultation room" width={1600} height={1104} className="absolute inset-0 h-full w-full object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-deep via-primary-deep/85 to-primary-deep/30" />
        <div className="container-page relative py-24 md:py-36">
          <p className="eyebrow fade-up mb-5">{site.title} · {site.city}</p>
          <h1 className="fade-up max-w-3xl text-4xl font-medium leading-[1.08] md:text-6xl">Understanding Your Digestive Health Starts Here</h1>
          <p className="fade-up mt-6 max-w-xl text-lg leading-relaxed opacity-85">
            Thoughtful, unhurried specialist care for conditions of the stomach, bowel and liver — from first consultation to procedure and follow-up.
          </p>
          <div className="fade-up mt-9"><ContactButtons variant="light" /></div>
        </div>
      </section>

      <Section>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <img src={portraitImg} alt="Dr. Stephen Mbugua Kairu at his desk in consultation" width={1448} height={1086} loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover shadow-soft" />
          <div>
            <p className="eyebrow mb-3">Meet your doctor</p>
            <h2 className="text-3xl font-medium md:text-4xl">{site.doctorName}</h2>
            <p className="mt-2 text-muted-foreground">{site.title}</p>
            <span className="gold-rule my-6" />
            <p className="leading-relaxed text-foreground/85">
              Dr. Kairu is a consultant physician and gastroenterologist in Nairobi, caring for adults with digestive and liver conditions. Consultations focus on listening carefully, explaining findings clearly and agreeing a plan together.
            </p>
            <Link to="/about" className={buttonStyles({ variant: "outline" }) + " mt-7"}>About Dr. Kairu <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </Section>

      <Section tone="ivory">
        <SectionHeading eyebrow="Services" title="Digestive health services" intro="Assessment, diagnosis and ongoing care for common and complex gastrointestinal conditions." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} className="group rounded-2xl border bg-card p-7 transition hover:-translate-y-0.5 hover:shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-wider text-gold">{s.kind}</p>
              <h3 className="mt-2 text-xl font-medium">{s.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Credentials" title="Qualifications & registration" />
            <VerifiedList items={qualifications} emptyNote="Qualifications and KMPDC registration will be listed here once verified." />
          </div>
          <div>
            <SectionHeading eyebrow="Affiliations" title="Hospital affiliations" />
            <VerifiedList items={hospitals} emptyNote="Hospital privileges will be listed here once confirmed." />
          </div>
        </div>
      </Section>

      <Section tone="ivory">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Insurance" title="Medical insurance" intro="Please confirm cover and pre-authorisation with your insurer before procedures." />
            <VerifiedList items={insurers} emptyNote="Recognised insurers will be listed once confirmed." />
            <Link to="/insurance" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">Insurance details <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div>
            <SectionHeading eyebrow="Location" title="Practice location" />
            <div className="rounded-2xl border bg-card p-6">
              <p className="flex items-start gap-2"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" /> {site.contact.address ?? <Pending>Address pending</Pending>}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Operating hours</p>
              <HoursList className="mt-2" />
            </div>
            <Link to="/hospitals" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">Hospitals & location <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Health library" title="Learn about your digestive health" />
        <div className="grid gap-5 md:grid-cols-3">
          {articles.map((a) => (
            <Link key={a.slug} to="/blog/$slug" params={{ slug: a.slug }} className="rounded-2xl border bg-card p-7 hover:shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-wider text-gold">{a.category} · {a.readMinutes} min</p>
              <h3 className="mt-2 text-xl font-medium">{a.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{a.excerpt}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="ivory">
        <SectionHeading eyebrow="FAQs" title="Common questions" />
        <div className="max-w-3xl divide-y rounded-2xl border bg-card">
          {faqs.slice(0, 4).map((f) => (
            <details key={f.q} className="group p-6">
              <summary className="cursor-pointer list-none font-semibold">{f.q}</summary>
              <p className="mt-3 text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
        <Link to="/faqs" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary">All FAQs <ArrowRight className="h-4 w-4" /></Link>
      </Section>

      <Section tone="deep">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-medium md:text-4xl">Ready to talk about your symptoms?</h2>
            <p className="mt-3 opacity-80">Request an appointment and the clinic will get back to you to confirm.</p>
          </div>
          <ContactButtons variant="light" />
        </div>
      </Section>
    </>
  );
}
