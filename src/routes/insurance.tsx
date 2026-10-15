import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, VerifiedList, ContactButtons, Prose } from "@/components/site/ui";
import { insurers } from "@/content/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/insurance")({
  head: () => seo({ title: "Insurance & Payment", description: "Medical insurance and payment information for consultations and procedures with Dr. Kairu in Nairobi.", path: "/insurance" }),
  component: Insurance,
});

function Insurance() {
  return (
    <>
      <PageHero eyebrow="Insurance" title="Insurance & payment" intro="Guidance on using medical cover for consultations and procedures." />
      <Section>
        <h2 className="mb-6 text-2xl font-medium">Recognised insurers</h2>
        <VerifiedList items={insurers} emptyNote="The list of insurers will be published once each arrangement is confirmed." />
        <Prose>
          <div className="mt-12 space-y-4">
            <h2>Before your visit</h2>
            <p>Check with your insurer whether specialist consultations and procedures are covered, and whether a referral or pre-authorisation is required. Bring your insurance card and ID to every visit.</p>
            <h2>Self-pay</h2>
            <p>Patients without insurance are welcome. Fees and accepted payment methods can be confirmed with the clinic when booking.</p>
          </div>
          <ContactButtons />
        </Prose>
      </Section>
    </>
  );
}
