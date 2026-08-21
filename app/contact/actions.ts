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

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
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
