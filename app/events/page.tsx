import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import PageHero from "@/components/layout/PageHero";
import EventList from "@/components/EventList";
import GoogleCalendarEmbed from "@/components/GoogleCalendarEmbed";
import Ornament from "@/components/ui/Ornament";
import { getUpcomingEvents } from "@/lib/calendar";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Events",
  description: "Upcoming events at Trinity Evangelical Lutheran Church.",
  path: "/events",
});

export default async function EventsPage() {
  const events = await getUpcomingEvents(10);

  return (
    <>
      <PageHero title="Events" deck="Upcoming happenings at Trinity." />
      <Container className="py-16 sm:py-20">
        <EventList events={events} />
        <div className="mt-16 border-t border-navy-100 pt-16">
          <h2 className="font-heading text-2xl font-semibold text-navy">
            Full Calendar
          </h2>
          <Ornament className="mt-3" />
          <p className="mt-4 text-sm text-ink-muted">
            Browse the complete church calendar below.
          </p>
          <GoogleCalendarEmbed className="mt-6" />
        </div>
      </Container>
    </>
  );
}
