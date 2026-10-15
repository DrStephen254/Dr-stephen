import { Link } from "@tanstack/react-router";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { Pending } from "./ui";

export function Footer() {
  return (
    <footer className="bg-primary-deep text-primary-foreground">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <p className="font-display text-xl">{site.name}</p>
          <p className="mt-1 text-sm opacity-70">{site.title}, {site.city}</p>
          <span className="gold-rule mt-5" />
        </div>
        <div>
          <p className="eyebrow mb-4">Services</p>
          <ul className="space-y-2 text-sm opacity-85">
            {services.map((s) => (
              <li key={s.slug}><Link to="/services/$slug" params={{ slug: s.slug }} className="hover:underline">{s.name}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-4">Practice</p>
          <ul className="space-y-2 text-sm opacity-85">
            <li><Link to="/about" className="hover:underline">About Dr. Kairu</Link></li>
            <li><Link to="/procedures" className="hover:underline">Procedures & Preparation</Link></li>
            <li><Link to="/insurance" className="hover:underline">Insurance</Link></li>
            <li><Link to="/hospitals" className="hover:underline">Hospitals & Location</Link></li>
            <li><Link to="/referring-doctors" className="hover:underline">Referring Doctors</Link></li>
            <li><Link to="/corporate-health" className="hover:underline">Corporate Health</Link></li>
            <li><Link to="/blog" className="hover:underline">Digestive Health Blog</Link></li>
            <li><Link to="/faqs" className="hover:underline">FAQs</Link></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-4">Contact</p>
          <ul className="space-y-2 text-sm opacity-85">
            <li>{site.contact.phone ?? <Pending>Phone pending</Pending>}</li>
            <li>{site.contact.email ?? <Pending>Email pending</Pending>}</li>
            <li>{site.contact.address ?? <Pending>Address pending</Pending>}</li>
            <li className="pt-2"><Link to="/contact" className="hover:underline">Contact & Appointments</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <div className="container-page flex flex-col gap-2 py-6 text-xs opacity-70 md:flex-row md:justify-between">
          <p>For medical emergencies, go to the nearest emergency department. This website provides general information, not personal medical advice.</p>
          <p className="shrink-0">© {new Date().getFullYear()} {site.name} · <Link to="/privacy" className="underline">Privacy Policy</Link></p>
        </div>
      </div>
    </footer>
  );
}
