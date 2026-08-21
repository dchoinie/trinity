import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import PageHero from "@/components/layout/PageHero";
import ContactForm from "@/components/ContactForm";
import GoogleMapEmbed from "@/components/GoogleMapEmbed";
import Ornament from "@/components/ui/Ornament";
import { site } from "@/lib/site-config";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: "Get in touch with Trinity Evangelical Lutheran Church, Waterville, MN.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact" deck="Send us a message." />
      <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1fr_1fr]">
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="font-heading text-xl font-semibold text-navy">
              {site.name}
            </h2>
            <Ornament className="mt-3" />
            <address className="mt-4 flex flex-col gap-1 not-italic text-ink-muted">
              <span>{site.address.line1}</span>
              <span>{site.address.line2}</span>
              <a href={site.phoneHref} className="transition-colors hover:text-navy">
                {site.phone}
              </a>
              <a href={site.emailHref} className="transition-colors hover:text-navy">
                {site.email}
              </a>
            </address>
          </div>
          <GoogleMapEmbed />
        </div>
        <ContactForm />
      </Container>
    </>
  );
}
