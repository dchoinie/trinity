"use client";

import { useActionState, useRef, useState } from "react";
import Script from "next/script";
import Card from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { submitContactForm, ContactFormState } from "@/app/contact/actions";

const initialState: ContactFormState = { status: "idle" };

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

declare global {
  interface Window {
    grecaptcha?: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContactForm, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const [renderedAt] = useState(() => Date.now());

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.set("renderedAt", String(renderedAt));

    if (RECAPTCHA_SITE_KEY && window.grecaptcha) {
      try {
        const token = await new Promise<string>((resolve, reject) => {
          window.grecaptcha!.ready(() => {
            window
              .grecaptcha!.execute(RECAPTCHA_SITE_KEY, { action: "contact" })
              .then(resolve, reject);
          });
        });
        formData.set("recaptchaToken", token);
      } catch {
        // No token available; the server will reject the submission if
        // reCAPTCHA is configured as required.
      }
    }

    formAction(formData);
  }

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
      {RECAPTCHA_SITE_KEY && (
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`}
          strategy="afterInteractive"
        />
      )}
      <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
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
        {/* Honeypot: hidden from sighted users and screen readers, but visible
            to most bots that blindly fill every field. Any value here marks
            the submission as spam. */}
        <div
          className="absolute h-px w-px overflow-hidden whitespace-nowrap p-0"
          style={{ clip: "rect(0,0,0,0)" }}
          aria-hidden="true"
        >
          <label htmlFor="website">Website</label>
          <input
            type="text"
            id="website"
            name="website"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>
        {state.status === "error" && (
          <p className="text-sm font-medium text-red-600">{state.message}</p>
        )}
        <Button type="submit" className="mt-2 self-start" disabled={pending}>
          {pending ? "Sending..." : "Send Message"}
        </Button>
        {RECAPTCHA_SITE_KEY && (
          <p className="text-xs text-ink-muted">
            This site is protected by reCAPTCHA and the Google{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              Privacy Policy
            </a>{" "}
            and{" "}
            <a
              href="https://policies.google.com/terms"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              Terms of Service
            </a>{" "}
            apply.
          </p>
        )}
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
