import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, Prose } from "@/components/site/ui";
import { site } from "@/content/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  head: () => seo({ title: "Privacy Policy", description: "How Dr. Kairu's practice collects, uses and protects personal information under Kenya's Data Protection Act, 2019.", path: "/privacy" }),
  component: Privacy,
});

function Privacy() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy policy" intro="How we collect, use and protect your personal information." />
      <Section>
        <Prose>
          <section><h2>Who we are</h2><p className="mt-3">This website belongs to the practice of {site.name}, {site.title}, {site.city}.{site.contact.email ? ` Data controller contact: ${site.contact.email}` : null}</p></section>
          <section><h2>What we collect</h2><p className="mt-3">Through the appointment request form we collect only your name, phone number, optional email, reason for visit and preferred date. We ask you not to submit medical history through this website.</p></section>
          <section><h2>How we use it</h2><p className="mt-3">Solely to respond to your appointment request. We do not sell your information or use it for advertising.</p></section>
          <section><h2>WhatsApp</h2><p className="mt-3">If you choose to contact the clinic via WhatsApp, your messages are also processed by WhatsApp under its own privacy terms.</p></section>
          <section><h2>Analytics & cookies</h2><p className="mt-3">This website does not use advertising cookies. If analytics are enabled, a privacy-focused, cookie-free tool will be used to measure aggregate visits.</p></section>
          <section><h2>Your rights</h2><p className="mt-3">Under the Data Protection Act, 2019 you may request access to, correction of, or deletion of your personal data, and may lodge a complaint with the Office of the Data Protection Commissioner.</p></section>
          <section><h2>Retention & security</h2><p className="mt-3">Enquiry details are kept only as long as needed to respond and are protected with appropriate safeguards.</p></section>
        </Prose>
      </Section>
    </>
  );
}
