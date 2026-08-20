"use client";

import { FormEvent, useState } from "react";
import Card from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  // TODO: wire up to a real backend (Next.js API route + email provider,
  // or a form service like Formspree) before launch — no submission
  // handling exists yet.
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitted");
  }

  if (status === "submitted") {
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
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
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
        <Button type="submit" className="mt-2 self-start">
          Send Message
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
