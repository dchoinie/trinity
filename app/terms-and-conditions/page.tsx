import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import PageHero from "@/components/layout/PageHero";
import Card from "@/components/ui/Card";
import { site } from "@/lib/site-config";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms & Conditions",
  description: "Terms and conditions for the Trinity Evangelical Lutheran Church website.",
  path: "/terms-and-conditions",
});

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms & Conditions" deck="Last updated: August 21, 2026" />
      <Container className="py-16 sm:py-20">
        <Card
          accent
          padded={false}
          className="mx-auto flex max-w-3xl flex-col gap-6 p-8 text-ink-muted sm:p-10 [&_h2]:border-t [&_h2]:border-navy-100 [&_h2]:pt-6 [&_section:first-of-type_h2]:border-0 [&_section:first-of-type_h2]:pt-0"
        >
          <p>
            These terms govern your use of this website, operated by{" "}
            {site.name}, a congregation of the Lutheran Church—Missouri Synod
            located at {site.address.line1}, {site.address.line2}. By
            accessing this site at trinitywaterville.org, you agree to these
            terms. This site is offered as a ministry resource for our
            congregation and the public, not as a commercial service.
          </p>

          <section>
            <h2 className="font-heading text-xl font-semibold text-navy">
              Use of This Site
            </h2>
            <p className="mt-2">
              This website provides information about {site.name} — our
              beliefs, worship schedule, staff, events, and ways to get in
              touch. You may browse and share this information freely for
              personal, non-commercial purposes.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-navy">
              Intellectual Property
            </h2>
            <p className="mt-2">
              {site.name} retains all rights to the original text,
              photographs, and descriptions on this site, including the
              reproductions of the sacred art commissioned for our sanctuary.
              You may not republish, sell, or redistribute this material for
              commercial purposes without our prior written permission.
              Brief, attributed excerpts for non-commercial or devotional use
              are welcome.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-navy">
              Third-Party Links &amp; Embedded Content
            </h2>
            <p className="mt-2">
              This site links to outside organizations (such as the LCMS and
              our district) and embeds content from Google Maps and Google
              Calendar to help you find us and see our events. We don&apos;t
              control those third-party sites or services, and your use of
              them is subject to their own terms and privacy policies. We are
              not responsible for their content or availability.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-navy">
              Hyperlinking to This Site
            </h2>
            <p className="mt-2">
              Other churches, ministries, and organizations are welcome to
              link to this site without prior approval, provided the link is
              presented fairly and doesn&apos;t suggest an endorsement that
              doesn&apos;t exist. For other uses, contact us using the
              information below.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-navy">
              Disclaimer
            </h2>
            <p className="mt-2">
              This site is provided &quot;as-is.&quot; While we do our best
              to keep information such as service times and events accurate
              and current, we make no warranty that the site will be
              error-free or uninterrupted. For the most current information
              about a specific service or event, please contact us directly.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-navy">
              Governing Law
            </h2>
            <p className="mt-2">
              These terms are governed by the laws of the State of Minnesota,
              without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-navy">
              Changes to These Terms
            </h2>
            <p className="mt-2">
              We may update these terms from time to time. Changes take
              effect when posted on this page.
            </p>
          </section>

          <p className="border-t border-navy-100 pt-6 text-sm">
            Questions about these terms? Contact us at{" "}
            {site.address.line1}, {site.address.line2} · {site.phone} ·{" "}
            {site.email}
          </p>
        </Card>
      </Container>
    </>
  );
}
