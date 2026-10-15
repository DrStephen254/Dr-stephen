import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Clock } from "lucide-react";
import { PageHero, Section, VerifiedList, ContactButtons, Pending } from "@/components/site/ui";
import { hospitals, site } from "@/content/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/hospitals")({
  head: () => seo({ title: "Hospitals & Location", description: "Where to find Dr. Kairu in Nairobi: practice location, clinic hours and hospital affiliations.", path: "/hospitals" }),
  component: Hospitals,
});

function Hospitals() {
  return (
    <>
      <PageHero eyebrow="Location" title="Hospitals & location" />
      <Section>
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-4 rounded-2xl border bg-card p-7">
            <h2 className="text-2xl font-medium">Practice</h2>
            <p className="flex gap-2"><MapPin className="h-5 w-5 shrink-0 text-primary" /> {site.contact.address ?? <Pending>Address pending</Pending>}</p>
            <p className="flex gap-2"><Clock className="h-5 w-5 shrink-0 text-primary" /> {site.contact.hours ?? <Pending>Hours pending</Pending>}</p>
          </div>
          {site.contact.mapEmbedUrl ? (
            <iframe title="Map to the clinic" src={site.contact.mapEmbedUrl} loading="lazy" className="aspect-video w-full rounded-2xl border" />
          ) : (
            <div className="flex aspect-video items-center justify-center rounded-2xl border border-dashed bg-ivory"><Pending>Map pending confirmed address</Pending></div>
          )}
        </div>
        <h2 className="mb-6 mt-14 text-2xl font-medium">Hospital affiliations</h2>
        <VerifiedList items={hospitals} emptyNote="Hospitals where Dr. Kairu holds privileges will be listed once confirmed." />
        <div className="mt-12"><ContactButtons /></div>
      </Section>
    </>
  );
}
