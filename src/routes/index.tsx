import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Stethoscope, BookOpen, MonitorSmartphone, Microscope } from "lucide-react";
const heroImg = "/images/hero-clinic.jpg";
const portraitImg = "/images/dr-kairu-consultation.jpg";
import { ContactButtons, Section, SectionHeading, VerifiedList, buttonStyles, HoursList } from "@/components/site/ui";
import { services } from "@/content/services";
import { articles } from "@/content/articles";
import { faqs } from "@/content/faqs";
import { hospitals, insurers, qualifications, memberships, site } from "@/content/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    seo({
      title: "Gastroenterology & Endoscopy Clinic in Nairobi",
      description:
        "Digestive Health & Endoscopy Centre, Adams Arcade, Nairobi — specialist care for IBS, acid reflux, ulcers, haemorrhoids, liver and pancreatic disease, with endoscopy and colonoscopy.",
      path: "/",
    }),
  component: Home,
});

const approach = [
  { icon: Stethoscope, title: "Specialist diagnosis", text: "Expert assessment of common and complex digestive conditions, from acid reflux and ulcers to liver and pancreatic disease." },
  { icon: Microscope, title: "Modern endoscopy", text: "Diagnostic and therapeutic procedures using equipment from leading suppliers such as Olympus and Pentax." },
  { icon: BookOpen, title: "Patient education", text: "We take time to explain findings and treatment options so you understand your health and can take part in decisions." },
  { icon: MonitorSmartphone, title: "Telemedicine", text: "Virtual consultations, online appointment scheduling and endoscopy reporting for seamless, convenient care." },
];

function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-primary-deep text-primary-foreground">
        <img src={heroImg} alt="A calm, light-filled consultation room at the centre" width={1600} height={1104} className="absolute inset-0 h-full w-full object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-deep via-primary-deep/85 to-primary-deep/30" />
        <div className="container-page relative py-24 md:py-36">
          <p className="eyebrow fade-up mb-5">Gastroenterology & Endoscopy · {site.city}, {site.country}</p>
          <h1 className="fade-up max-w-3xl text-4xl font-medium leading-[1.08] md:text-6xl">{site.name}</h1>
          <p className="fade-up mt-6 max-w-xl text-lg leading-relaxed opacity-85">
            Expert, patient-first care for the stomach, bowel, liver and pancreas — with advanced diagnostics, endoscopy and clear guidance at every step.
          </p>
          <div className="fade-up mt-9 flex flex-wrap gap-3">
            <Link to="/contact" className={buttonStyles({ variant: "light" })}>Book an Appointment</Link>
            <Link to="/services" className={buttonStyles({ variant: "ghostLight" })}>Explore Our Services <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <SectionHeading eyebrow="About the Centre" title="Expert care for digestive health" />
            <p className="leading-relaxed text-foreground/85">
              At {site.name}, we are committed to delivering expert care for a wide range of digestive health issues — including acid reflux, ulcers, irritable bowel syndrome (IBS), haemorrhoids, and liver and pancreatic diseases.
            </p>
            <p className="mt-4 leading-relaxed text-foreground/85">
              Beyond treatment, we emphasise patient education and engagement, and offer personalised nutrition guidance to support long-term digestive health. Our care is led by Consultant Gastroenterologist {site.doctorName}.
            </p>
            <Link to="/hospitals" className={buttonStyles({ variant: "outline" }) + " mt-7"}>Location & facilities <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {approach.map((a) => (
              <div key={a.title} className="rounded-2xl border bg-card p-6">
                <a.icon className="h-6 w-6 text-primary" aria-hidden />
                <h3 className="mt-3 text-lg font-medium">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="ivory">
        <SectionHeading eyebrow="Our Services" title="Conditions we treat & procedures we offer" intro="Assessment, diagnosis and ongoing care for common and complex gastrointestinal conditions in Nairobi." />
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
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/services" className={buttonStyles({ variant: "primary" })}>All services</Link>
          <Link to="/procedures" className={buttonStyles({ variant: "outline" })}>Diagnostic procedures</Link>
        </div>
      </Section>

      <Section>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <img src={portraitImg} alt="Dr. Stephen Mbugua Kairu in consultation at Digestive Health & Endoscopy Centre" width={1448} height={1086} loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover shadow-soft" />
          <div>
            <p className="eyebrow mb-3">Meet Dr. Stephen</p>
            <h2 className="text-3xl font-medium md:text-4xl">{site.doctorName}</h2>
            <p className="mt-2 text-muted-foreground">Consultant Physician & Gastroenterologist</p>
            <span className="gold-rule my-6" />
            <p className="leading-relaxed text-foreground/85">
              Dr. Stephen leads clinical care at the centre, caring for adults with digestive and liver conditions. Consultations focus on listening carefully, explaining findings clearly and agreeing a plan together.
            </p>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <VerifiedList items={qualifications} emptyNote="Qualifications pending verification." />
              <VerifiedList items={memberships} emptyNote="Memberships pending verification." />
            </div>
            <Link to="/about" className={buttonStyles({ variant: "outline" }) + " mt-7"}>Full profile <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </Section>

      <Section tone="ivory">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Affiliations" title="Hospital affiliations" />
            <VerifiedList items={hospitals} emptyNote="Hospital privileges will be listed here once confirmed." />
          </div>
          <div>
            <SectionHeading eyebrow="Insurance" title="Medical insurance" intro="Please confirm cover and pre-authorisation with your insurer before procedures." />
            <VerifiedList items={insurers} emptyNote="Recognised insurers will be listed once confirmed." />
            <Link to="/insurance" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">Insurance details <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </Section>


      <Section tone="ivory">
        <SectionHeading eyebrow="Health Resources" title="Learn about your digestive health" />
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

      <Section>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <SectionHeading eyebrow="FAQs" title="Common questions" />
            <div className="divide-y rounded-2xl border bg-card">
              {faqs.slice(0, 4).map((f) => (
                <details key={f.q} className="group p-6">
                  <summary className="cursor-pointer list-none font-semibold">{f.q}</summary>
                  <p className="mt-3 text-muted-foreground">{f.a}</p>
                </details>
              ))}
            </div>
            <Link to="/faqs" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary">All FAQs <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div>
            <SectionHeading eyebrow="Contact Us" title="Visit the centre" />
            <div className="rounded-2xl border bg-card p-6">
              <p className="flex items-start gap-2"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" /> {site.contact.address}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Operating hours</p>
              <HoursList className="mt-2" />
              <div className="mt-6"><ContactButtons /></div>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="deep">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-medium md:text-4xl">Take the first step to better digestive health</h2>
            <p className="mt-3 opacity-80">Book an appointment and the centre will get back to you to confirm.</p>
          </div>
          <Link to="/contact" className={buttonStyles({ variant: "light" })}>Book an Appointment</Link>
        </div>
      </Section>
    </>
  );
}
