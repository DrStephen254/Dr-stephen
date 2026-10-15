import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { PageHero, Section, Pending, buttonStyles } from "@/components/site/ui";
import { AppointmentForm } from "@/components/site/AppointmentForm";
import { site, telLink, whatsappLink } from "@/content/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => seo({ title: "Contact & Appointments", description: "Request an appointment with Dr. Stephen Mbugua Kairu, Consultant Gastroenterologist in Nairobi.", path: "/contact" }),
  component: Contact,
});

function Contact() {
  const wa = whatsappLink("Hello, I would like to request an appointment with Dr. Kairu.");
  const tel = telLink();
  return (
    <>
      <PageHero eyebrow="Appointments" title="Contact & appointments" intro="Share a few essential details and the clinic will contact you to confirm a time." />
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <AppointmentForm />
          <aside className="space-y-4">
            <div className="rounded-2xl border bg-card p-6">
              <h2 className="text-xl font-medium">Reach the clinic</h2>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0 text-primary" />{tel ? <a href={tel} className="underline">{site.contact.phone}</a> : <Pending>Phone pending</Pending>}</li>
                <li className="flex gap-2"><MessageCircle className="h-4 w-4 shrink-0 text-primary" />{wa ? <a href={wa} target="_blank" rel="noopener noreferrer" className="underline">Chat on WhatsApp</a> : <Pending>WhatsApp pending</Pending>}</li>
                <li className="flex gap-2"><Mail className="h-4 w-4 shrink-0 text-primary" />{site.contact.email ? <a href={`mailto:${site.contact.email}`} className="underline">{site.contact.email}</a> : <Pending>Email pending</Pending>}</li>
                <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 text-primary" />{site.contact.address ?? <Pending>Address pending</Pending>}</li>
              </ul>
              {wa && <a href={wa} target="_blank" rel="noopener noreferrer" className={buttonStyles({ variant: "primary" }) + " mt-6 w-full"}><MessageCircle className="h-4 w-4" /> WhatsApp the clinic</a>}
            </div>
            <div className="rounded-2xl border border-destructive/30 bg-card p-6 text-sm">
              <p className="font-semibold text-destructive">Medical emergency?</p>
              <p className="mt-2 text-muted-foreground">Do not use this form. Go to the nearest emergency department if you are vomiting blood, passing black or bloody stools, or have severe abdominal pain.</p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
