import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import PageHero from "@/components/layout/PageHero";
import Card from "@/components/ui/Card";
import { site } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for the Trinity Evangelical Lutheran Church website.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms & Conditions" />
      <Container className="py-16 sm:py-20">
        <Card
          accent
          padded={false}
          className="mx-auto flex max-w-3xl flex-col gap-6 p-8 text-ink-muted sm:p-10 [&_h2]:border-t [&_h2]:border-navy-100 [&_h2]:pt-6 [&_section:first-of-type_h2]:border-0 [&_section:first-of-type_h2]:pt-0"
        >
          <p>
            Welcome to {site.name}. By accessing this website at
            trinitywaterville.org, you accept and agree to be bound by the
            terms and provisions of this agreement.
          </p>

          <section>
            <h2 className="font-heading text-xl font-semibold text-navy">
              Terminology
            </h2>
            <p className="mt-2">
              The following terminology applies to these Terms and Conditions,
              Privacy Statement and Disclaimer Notice and any or all
              Agreements: &quot;Client&quot;, &quot;Company&quot;,
              &quot;Party&quot;, and related terms.{" "}
              {/* TODO: confirm with the church whether "Netherlands law" below
                  is intentional or leftover template boilerplate — unusual
                  for a Minnesota congregation and worth verifying before
                  carrying it forward as-is. */}
              This agreement is governed by the laws of the Netherlands.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-navy">
              Cookies
            </h2>
            <p className="mt-2">
              The site uses cookies to enhance functionality and retain user
              information. By accessing this site, you consented to the use
              of cookies.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-navy">
              Intellectual Property
            </h2>
            <p className="mt-2">
              {site.name} retains all intellectual property rights to
              material on this site. Users may not republish, sell,
              reproduce, or redistribute material without permission.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-navy">
              User Comments
            </h2>
            <p className="mt-2">
              We reserve the right to monitor and remove inappropriate
              comments. Users warrant that their comments do not violate any
              intellectual property right and do not contain defamatory
              material.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-navy">
              Hyperlinking Policy
            </h2>
            <p className="mt-2">
              Government agencies, search engines, and news organizations may
              link to this site without prior approval. Other organizations
              must request permission and should allow two to three weeks for
              a response.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-navy">
              Content Liability & Privacy
            </h2>
            <p className="mt-2">
              We are not responsible for the content found on websites that
              link to our site. Users must protect us against claims arising
              from their own sites.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-navy">
              Disclaimer
            </h2>
            <p className="mt-2">
              This site is provided &quot;as-is&quot; without warranties of
              any kind regarding accuracy or availability.
            </p>
          </section>

          <p className="border-t border-navy-100 pt-6 text-sm">
            {site.address.line1}, {site.address.line2} · {site.phone} ·{" "}
            {site.email}
          </p>
        </Card>
      </Container>
    </>
  );
}
