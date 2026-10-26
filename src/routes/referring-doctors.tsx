import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, Prose, ContactButtons } from "@/components/site/ui";
import { site } from "@/content/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/referring-doctors")({
  head: () => seo({ title: "For Referring Doctors", description: "How to refer patients to Dr. Kairu, Consultant Gastroenterologist in Nairobi, for consultation, endoscopy or colonoscopy.", path: "/referring-doctors" }),
  component: Referring,
});

function Referring() {
  return (
    <>
      <PageHero eyebrow="Professionals" title="For referring doctors" intro="Working together to provide timely specialist care for your patients." />
      <Section>
        <Prose>
          <section><h2>Making a referral</h2><p className="mt-3">Please include the reason for referral, relevant history, current medicines, allergies and recent results. Mark urgent referrals clearly, particularly suspected GI bleeding, dysphagia or suspected malignancy.</p></section>
          <section><h2>Sending referrals securely</h2><p className="mt-3">Referral letters contain confidential patient information. Please use a secure channel agreed with the clinic.{site.contact.email ? ` Secure referral contact: ${site.contact.email}` : null}</p></section>
          <section><h2>Communication</h2><p className="mt-3">A summary of consultation and procedure findings is sent to the referring clinician with the patient's consent.</p></section>
          <ContactButtons />
        </Prose>
      </Section>
    </>
  );
}
