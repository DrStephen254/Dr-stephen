import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { site } from "@/content/site";
import { buttonStyles } from "./ui";

const nav = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/procedures", label: "Procedures" },
  { to: "/insurance", label: "Insurance" },
  { to: "/hospitals", label: "Location" },
  { to: "/blog", label: "Health Library" },
  { to: "/faqs", label: "FAQs" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
      <div className="container-page flex h-18 items-center justify-between gap-4 py-3">
        <Link to="/" className="min-w-0" onClick={() => setOpen(false)}>
          <span className="block truncate font-display text-lg font-medium leading-tight text-primary-deep">{site.name}</span>
          <span className="block truncate text-xs text-muted-foreground">{site.title}</span>
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-6 lg:flex">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="text-sm text-foreground/75 hover:text-primary-hover" activeProps={{ className: "text-primary font-semibold" }}>
              {n.label}
            </Link>
          ))}
          <Link to="/contact" className={buttonStyles({ variant: "primary" }) + " px-5 py-2.5"}>Book</Link>
        </nav>
        <button className="shrink-0 rounded-full p-2 lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav aria-label="Mobile" className="border-t bg-background lg:hidden">
          <div className="container-page flex flex-col py-4">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="border-b py-3 text-base">{n.label}</Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className={buttonStyles({ variant: "primary" }) + " mt-4"}>Request an Appointment</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
