"use server";

import { Resend } from "resend";
import { site } from "@/lib/site-config";
import {
  emailFieldRow,
  emailHeading,
  emailQuoteBlock,
  escapeHtml,
  renderEmailLayout,
} from "@/lib/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_ADDRESS = "Trinity Evangelical Lutheran Church <contact@trinitywaterville.org>";
const NOTIFY_TO = "pastormumme@gmail.com";

const HONEYPOT_FIELD = "website";
const MIN_SUBMIT_SECONDS = 3;
const RECAPTCHA_SCORE_THRESHOLD = 0.5;

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

async function verifyRecaptcha(token: string): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) return true; // reCAPTCHA not configured; skip this layer.
  if (!token) return false;

  try {
    const params = new URLSearchParams({ secret, response: token });
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    });
    const data = (await res.json()) as { success: boolean; score?: number };
    if (!data.success) return false;
    if (typeof data.score === "number" && data.score < RECAPTCHA_SCORE_THRESHOLD) return false;
    return true;
  } catch (error) {
    console.error("reCAPTCHA verification request failed:", error);
    return false;
  }
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Honeypot: real visitors never see or fill this field, so any value
  // here is a strong bot signal. Report success so bots don't adapt.
  const honeypot = String(formData.get(HONEYPOT_FIELD) ?? "").trim();
  if (honeypot) {
    console.warn("Contact form: honeypot field filled, discarding as spam.");
    return { status: "success" };
  }

  // Timing trap: forms filled out faster than a human reasonably can are
  // almost always scripted submissions.
  const renderedAt = Number(formData.get("renderedAt"));
  if (Number.isFinite(renderedAt)) {
    const elapsedSeconds = (Date.now() - renderedAt) / 1000;
    if (elapsedSeconds < MIN_SUBMIT_SECONDS) {
      console.warn(`Contact form: submitted in ${elapsedSeconds.toFixed(1)}s, discarding as spam.`);
      return { status: "success" };
    }
  }

  const firstName = String(formData.get("firstName") ?? "").trim();
  const lastName = String(formData.get("lastName") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!firstName || !lastName || !email || !message) {
    return { status: "error", message: "Please fill in all required fields." };
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return { status: "error", message: "Please provide a valid email address." };
  }

  const recaptchaToken = String(formData.get("recaptchaToken") ?? "");
  const recaptchaOk = await verifyRecaptcha(recaptchaToken);
  if (!recaptchaOk) {
    return {
      status: "error",
      message: "We couldn't verify you're human. Please try again.",
    };
  }

  const fullName = `${firstName} ${lastName}`;

  try {
    const notificationHtml = renderEmailLayout({
      preheader: `New contact form message from ${fullName}`,
      bodyHtml: `
        ${emailHeading("New Contact Form Message")}
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
          ${emailFieldRow("Name", fullName)}
          ${emailFieldRow("Email", email)}
          ${phone ? emailFieldRow("Phone", phone) : ""}
        </table>
        ${emailQuoteBlock(message)}
        <p style="margin: 20px 0 0; font-size:13px; color:#524d45;">Reply directly to this email to respond to ${escapeHtml(
          firstName
        )}.</p>
      `,
    });

    await resend.emails.send({
      from: FROM_ADDRESS,
      to: NOTIFY_TO,
      replyTo: email,
      subject: `New contact form message from ${fullName}`,
      html: notificationHtml,
    });

    const autoReplyHtml = renderEmailLayout({
      preheader: `Thank you for contacting ${site.name}`,
      bodyHtml: `
        ${emailHeading("Thank You For Reaching Out")}
        <p style="margin: 0 0 14px;">Dear ${escapeHtml(firstName)},</p>
        <p style="margin: 0 0 14px;">Thank you for contacting ${escapeHtml(
          site.name
        )}. We have received your message and will be in touch soon.</p>
        <p style="margin: 0 0 6px; font-size:13px; color:#524d45;">For reference, here is a copy of what you sent us:</p>
        ${emailQuoteBlock(message)}
      `,
    });

    await resend.emails.send({
      from: FROM_ADDRESS,
      to: email,
      subject: `We received your message — ${site.name}`,
      html: autoReplyHtml,
    });

    return { status: "success" };
  } catch (error) {
    console.error("Failed to send contact form email:", error);
    return {
      status: "error",
      message: "Something went wrong sending your message. Please try again or call us directly.",
    };
  }
}
