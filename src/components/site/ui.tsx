import { Link } from "@tanstack/react-router";
import { MessageCircle, Phone, ShieldAlert } from "lucide-react";
import type { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { landlineLink, operatingHours, telLink, whatsappLink, type Verifiable } from "@/content/site";

export const buttonStyles = cva(
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary-hover shadow-soft",
        outline: "border border-primary/30 text-primary hover:bg-primary-hover hover:text-primary-foreground hover:border-primary-hover",
        light: "bg-primary-foreground text-primary-deep hover:bg-primary-hover hover:text-primary-foreground",
        ghostLight: "border border-primary-foreground/40 text-primary-foreground hover:bg-primary-hover hover:border-primary-hover",
      },
    },
    defaultVariants: { variant: "primary" },
  },
);

export type ButtonVariant = VariantProps<typeof buttonStyles>["variant"];

export function Section({ children, className, tone }: { children: ReactNode; className?: string; tone?: "ivory" | "deep" }) {
  return (
    <section
      className={cn(
        "py-16 md:py-24",
        tone === "ivory" && "bg-ivory",
        tone === "deep" && "bg-primary-deep text-primary-foreground",
        className,
      )}
    >
      <div className="container-page">{children}</div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, intro, center }: { eyebrow?: string; title: string; intro?: string; center?: boolean }) {
  return (
    <div className={cn("mb-10 max-w-2xl", center && "mx-auto text-center")}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="text-3xl font-medium leading-tight md:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-base leading-relaxed opacity-80">{intro}</p>}
    </div>
  );
}

export function PageHero({ eyebrow, title, intro, children }: { eyebrow?: string; title: string; intro?: string; children?: ReactNode }) {
  return (
    <header className="border-b bg-ivory">
      <div className="container-page py-14 md:py-20">
        {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
        <h1 className="fade-up max-w-3xl text-4xl font-medium leading-[1.1] md:text-5xl">{title}</h1>
        {intro && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">{intro}</p>}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </header>
  );
}

/** Clearly identified placeholder for unpublished/unverified content. */
export function Pending({ children = "Awaiting verification" }: { children?: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-warning px-2.5 py-0.5 text-xs font-medium text-warning-foreground">
      <ShieldAlert className="h-3 w-3" aria-hidden /> {children}
    </span>
  );
}

export function VerifiedList({ items, emptyNote }: { items: Verifiable[]; emptyNote: string }) {
  const verified = items.filter((i) => i.verified);
  if (verified.length === 0) {
    return (
      <div className="rounded-xl border border-dashed bg-card p-6">
        <Pending />
        <p className="mt-3 text-sm text-muted-foreground">{emptyNote}</p>
      </div>
    );
  }
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {verified.map((i) => (
        <li key={i.label} className="rounded-xl border bg-card p-5">
          <p className="font-semibold">{i.label}</p>
          {i.detail && <p className="mt-1 text-sm text-muted-foreground">{i.detail}</p>}
        </li>
      ))}
    </ul>
  );
}

/** Confirmed operating hours, shown as a day/time table. */
export function HoursList({ className }: { className?: string }) {
  return (
    <dl className={cn("space-y-2", className)}>
      {operatingHours.map((h) => (
        <div key={h.day} className="flex items-baseline justify-between gap-4 border-b border-dashed border-border/70 pb-2 last:border-0 last:pb-0">
          <dt className="text-sm text-muted-foreground">{h.day}</dt>
          <dd className={cn("text-sm font-semibold", h.time === "Closed" && "font-normal text-muted-foreground")}>{h.time}</dd>
        </div>
      ))}
    </dl>
  );
}

export function ContactButtons({ variant = "primary", message = "Hello, I would like to request an appointment with Dr. Kairu." }: { variant?: "primary" | "light"; message?: string }) {
  const wa = whatsappLink(message);
  const tel = telLink();
  return (
    <div className="flex flex-wrap gap-3">
      <Link to="/contact" className={buttonStyles({ variant })}>Request an Appointment</Link>
      {wa ? (
        <a href={wa} target="_blank" rel="noopener noreferrer" className={buttonStyles({ variant: variant === "light" ? "ghostLight" : "outline" })}>
          <MessageCircle className="h-4 w-4" aria-hidden /> WhatsApp
        </a>
      ) : null}
      {tel ? (
        <a href={tel} className={buttonStyles({ variant: variant === "light" ? "ghostLight" : "outline" })}>
          <Phone className="h-4 w-4" aria-hidden /> Call the clinic
        </a>
      ) : (
        <Link to="/contact" className={buttonStyles({ variant: variant === "light" ? "ghostLight" : "outline" })}>Contact the Clinic</Link>
      )}
    </div>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return <div className="max-w-3xl space-y-8 text-[1.05rem] leading-relaxed [&_h2]:text-2xl [&_h2]:font-medium [&_p]:text-foreground/85">{children}</div>;
}
