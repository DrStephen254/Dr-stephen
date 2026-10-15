import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import { site, telLink, whatsappLink } from "@/content/site";
import { buttonStyles } from "./ui";

export const appointmentSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  phone: z.string().trim().regex(/^\+?[0-9\s-]{9,16}$/, "Enter a valid phone number, e.g. +254 7XX XXX XXX"),
  email: z.string().trim().email("Enter a valid email").max(255).optional().or(z.literal("")),
  reason: z.enum(["Consultation", "Endoscopy", "Colonoscopy", "Follow-up", "Other"], { errorMap: () => ({ message: "Choose a reason" }) }),
  preferredDate: z.string().optional(),
  consent: z.literal(true, { errorMap: () => ({ message: "Consent is required to process your request" }) }),
});
export type AppointmentInput = z.infer<typeof appointmentSchema>;

const field = "mt-1.5 w-full rounded-lg border border-input bg-card px-4 py-3 text-base outline-none focus:ring-2 focus:ring-ring";

export function AppointmentForm() {
  const [done, setDone] = useState<null | { wa: string | null }>(null);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<AppointmentInput>({
    resolver: zodResolver(appointmentSchema),
  });

  const onSubmit = (d: AppointmentInput) => {
    const msg = `Appointment request\nName: ${d.name}\nPhone: ${d.phone}${d.email ? `\nEmail: ${d.email}` : ""}\nReason: ${d.reason}${d.preferredDate ? `\nPreferred date: ${d.preferredDate}` : ""}`;
    const wa = whatsappLink(msg);
    if (wa) window.open(wa, "_blank", "noopener,noreferrer");
    setDone({ wa });
    reset();
  };

  if (done) {
    const tel = telLink();
    return (
      <div role="status" className="rounded-2xl border bg-card p-8 text-center shadow-soft">
        <CheckCircle2 className="mx-auto h-10 w-10 text-primary" aria-hidden />
        <h3 className="mt-4 text-2xl">Thank you — your details are ready</h3>
        {done.wa ? (
          <p className="mt-3 text-muted-foreground">We've opened WhatsApp with your request. Please press send so the clinic receives it. Your appointment is confirmed only when the clinic replies.</p>
        ) : (
          <p className="mt-3 text-muted-foreground">
            Online requests are not yet connected to the clinic, so nothing has been sent. {tel ? <>Please call <a className="underline" href={tel}>{site.contact.mobile ?? site.contact.landline}</a> to book.</> : "Clinic contact lines will be published here shortly."}
          </p>
        )}
        <button className={buttonStyles({ variant: "outline" }) + " mt-6"} onClick={() => setDone(null)}>Start a new request</button>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} className="space-y-5 rounded-2xl border bg-card p-6 shadow-soft md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium">Full name *
          <input className={field} autoComplete="name" {...register("name")} aria-invalid={!!errors.name} />
          {errors.name && <span className="mt-1 block text-sm text-destructive">{errors.name.message}</span>}
        </label>
        <label className="block text-sm font-medium">Phone *
          <input className={field} type="tel" autoComplete="tel" {...register("phone")} aria-invalid={!!errors.phone} />
          {errors.phone && <span className="mt-1 block text-sm text-destructive">{errors.phone.message}</span>}
        </label>
        <label className="block text-sm font-medium">Email (optional)
          <input className={field} type="email" autoComplete="email" {...register("email")} />
          {errors.email && <span className="mt-1 block text-sm text-destructive">{errors.email.message}</span>}
        </label>
        <label className="block text-sm font-medium">Reason for visit *
          <select className={field} defaultValue="" {...register("reason")}>
            <option value="" disabled>Select…</option>
            <option>Consultation</option><option>Endoscopy</option><option>Colonoscopy</option><option>Follow-up</option><option>Other</option>
          </select>
          {errors.reason && <span className="mt-1 block text-sm text-destructive">{errors.reason.message}</span>}
        </label>
        <label className="block text-sm font-medium sm:col-span-2">Preferred date (optional)
          <input className={field} type="date" {...register("preferredDate")} />
        </label>
      </div>
      <p className="rounded-lg bg-muted p-4 text-sm text-muted-foreground">
        Please do not include symptoms or medical history here — these will be discussed privately at your consultation. Not for emergencies.
      </p>
      <label className="flex items-start gap-3 text-sm">
        <input type="checkbox" className="mt-1 h-4 w-4 accent-primary" {...register("consent")} />
        <span>I consent to the clinic using these details only to respond to my appointment request, in line with the <a href="/privacy" className="underline">Privacy Policy</a> and Kenya's Data Protection Act, 2019.</span>
      </label>
      {errors.consent && <span className="block text-sm text-destructive">{errors.consent.message}</span>}
      <button type="submit" disabled={isSubmitting} className={buttonStyles({ variant: "primary" }) + " w-full sm:w-auto"}>Send request</button>
    </form>
  );
}
