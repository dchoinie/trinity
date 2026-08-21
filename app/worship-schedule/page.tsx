import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/layout/Container";
import PageHero from "@/components/layout/PageHero";
import ServiceTimesCard from "@/components/ServiceTimesCard";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Worship Schedule",
  description: "Join us for worship on Sunday mornings at Trinity Evangelical Lutheran Church.",
  path: "/worship-schedule",
});

export default function WorshipSchedulePage() {
  return (
    <>
      <PageHero
        title="Worship Schedule"
        deck="Join us for worship on Sunday mornings."
      />
      <Container className="py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <ServiceTimesCard />
          <div className="flex flex-col gap-4 text-ink-muted">
            <p>
              Special services are offered during the Advent and Lent
              seasons — see the church calendar for specific dates.
            </p>
            <p>
              New to Trinity? Learn more about{" "}
              <Link
                href="/what-to-expect"
                className="font-semibold text-navy underline underline-offset-4 decoration-navy/30 hover:text-gold-600 hover:decoration-gold-600"
              >
                what to expect
              </Link>{" "}
              at a Divine Service, or read{" "}
              <Link
                href="/what-we-believe"
                className="font-semibold text-navy underline underline-offset-4 decoration-navy/30 hover:text-gold-600 hover:decoration-gold-600"
              >
                what we believe
              </Link>
              .
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}
