"use client";

import { useActionState } from "react";
import Card from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { submitContactForm, ContactFormState } from "@/app/contact/actions";

const initialState: ContactFormState = { status: "idle" };

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContactForm, initialState);

  if (state.status === "success") {
    return (
      <Card accent>
        <p className="font-heading text-xl font-semibold text-navy">
          Thank you.
        </p>
        <p className="mt-2 text-ink-muted">
          Your message has been noted. We&apos;ll be in touch soon.
        </p>
      </Card>
    );
  }

  return (
    <Card accent padded={false} className="p-8">
      <form action={formAction} className="flex flex-col gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="First Name" name="firstName" required />
          <Field label="Last Name" name="lastName" required />
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Email" name="email" type="email" required />
          <Field label="Phone" name="phone" type="tel" />
        </div>
        <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
          Message
          <textarea
            name="message"
            required
            rows={5}
            className="rounded-md border border-navy-100 bg-cream px-3 py-2 text-base text-ink shadow-soft outline-none transition-colors focus:border-gold"
          />
        </label>
        {state.status === "error" && (
          <p className="text-sm font-medium text-red-600">{state.message}</p>
        )}
        <Button type="submit" className="mt-2 self-start" disabled={pending}>
          {pending ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </Card>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
      {label}
      <input
        type={type}
        name={name}
        required={required}
        className="rounded-md border border-navy-100 bg-cream px-3 py-2 text-base text-ink shadow-soft outline-none transition-colors focus:border-gold"
      />
    </label>
  );
}
