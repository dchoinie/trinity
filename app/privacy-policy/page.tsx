import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import PageHero from "@/components/layout/PageHero";
import Card from "@/components/ui/Card";
import { site } from "@/lib/site-config";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: "Privacy policy for the Trinity Evangelical Lutheran Church website.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" deck="Last updated: August 21, 2026" />
      <Container className="py-16 sm:py-20">
        <Card
          accent
          padded={false}
          className="mx-auto flex max-w-3xl flex-col gap-6 p-8 text-ink-muted sm:p-10 [&_h2]:border-t [&_h2]:border-navy-100 [&_h2]:pt-6 [&_section:first-of-type_h2]:border-0 [&_section:first-of-type_h2]:pt-0 [&_ul]:marker:text-gold-600"
        >
          <p>
            This policy describes how {site.name} handles information on
            this website, trinitywaterville.org. This is a small,
            informational church website — we collect very little
            information, and this policy explains exactly what we collect
            and why.
          </p>

          <section>
            <h2 className="font-heading text-xl font-semibold text-navy">
              Information We Collect
            </h2>
            <p className="mt-2">
              The only personal information this site collects is what you
              choose to submit through our{" "}
              <a
                href="/contact"
                className="font-semibold text-navy underline underline-offset-4 decoration-navy/30 hover:text-gold-600 hover:decoration-gold-600"
              >
                Contact form
              </a>
              : your first and last name, email address, phone number (if
              provided), and your message. We don&apos;t require an account
              to use this site, and we don&apos;t collect payment
              information.
            </p>
            <p className="mt-2">
              We do not use cookies, analytics tools, or advertising
              trackers on this site.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-navy">
              How We Use Your Information
            </h2>
            <p className="mt-2">
              When you submit the contact form, we use your information for
              two purposes only: to send your message to the church office
              by email so we can respond to you, and to send you an
              automatic confirmation email acknowledging that we received
              it. We do not use your information for marketing, and we do
              not sell or share it with third parties, except as described
              below.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-navy">
              Third-Party Services We Use
            </h2>
            <p className="mt-2">
              Contact form messages are delivered using{" "}
              <a
                href="https://resend.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-navy underline underline-offset-4 decoration-navy/30 hover:text-gold-600 hover:decoration-gold-600"
              >
                Resend
              </a>
              , a transactional email service that processes the message on
              our behalf and is bound by its own privacy and security
              obligations.
            </p>
            <p className="mt-2">
              Our{" "}
              <a
                href="/events"
                className="font-semibold text-navy underline underline-offset-4 decoration-navy/30 hover:text-gold-600 hover:decoration-gold-600"
              >
                Events
              </a>{" "}
              and{" "}
              <a
                href="/contact"
                className="font-semibold text-navy underline underline-offset-4 decoration-navy/30 hover:text-gold-600 hover:decoration-gold-600"
              >
                Contact
              </a>{" "}
              pages embed a Google Calendar and a Google Map directly from
              Google. When those elements load, your browser communicates
              directly with Google, which may collect data (such as your IP
              address) according to Google&apos;s own privacy policy. We
              don&apos;t receive or control that data.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-navy">
              Data Retention
            </h2>
            <p className="mt-2">
              Contact form submissions are received as ordinary emails and
              kept as long as the recipient&apos;s mailbox retains them, the
              same as any other email sent to the church.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-navy">
              Your Choices
            </h2>
            <p className="mt-2">
              You can always reach us by phone or in person instead of using
              the contact form. If you&apos;d like us to delete a message you
              previously submitted, contact us using the information below and
              we&apos;ll remove it from our records.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-navy">
              Children&apos;s Privacy
            </h2>
            <p className="mt-2">
              This site is not directed at children, and we do not knowingly
              collect information from anyone under 13 through the contact
              form. If you believe a child has submitted information to us,
              please contact us and we will delete it.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-navy">
              Changes to This Policy
            </h2>
            <p className="mt-2">
              If this policy changes, we&apos;ll update the &quot;Last
              updated&quot; date at the top of this page.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-navy">
              Contact Us
            </h2>
            <p className="mt-2">
              For questions about this Privacy Policy or your information,
              contact us at{" "}
              <a
                href={site.emailHref}
                className="font-semibold text-navy underline underline-offset-4 decoration-navy/30 hover:text-gold-600 hover:decoration-gold-600"
              >
                {site.email}
              </a>{" "}
              or {site.phone}.
            </p>
          </section>
        </Card>
      </Container>
    </>
  );
}
