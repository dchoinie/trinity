import ical, { ParameterValue } from "node-ical";

const CALENDAR_ID = "ihfb8203lkp31n7038imqlpap8@group.calendar.google.com";

const ICS_URL = `https://calendar.google.com/calendar/ical/${encodeURIComponent(
  CALENDAR_ID
)}/public/basic.ics`;

export const CALENDAR_EMBED_URL = `https://calendar.google.com/calendar/embed?src=${encodeURIComponent(
  CALENDAR_ID
)}&ctz=America%2FChicago`;

export type CalendarEvent = {
  id: string;
  title: string;
  start: Date;
  end: Date;
  allDay: boolean;
  location?: string;
};

// How far ahead to look when expanding recurring events (e.g. weekly service).
const RECURRENCE_WINDOW_DAYS = 120;

function textValue(value: ParameterValue | undefined): string | undefined {
  if (value === undefined) return undefined;
  return typeof value === "string" ? value : value.val;
}

export async function getUpcomingEvents(limit = 3): Promise<CalendarEvent[]> {
  const res = await fetch(ICS_URL, { next: { revalidate: 3600 } });
  if (!res.ok) return [];

  const text = await res.text();
  const data = ical.sync.parseICS(text);

  const now = new Date();
  const windowEnd = new Date(now.getTime() + RECURRENCE_WINDOW_DAYS * 24 * 60 * 60 * 1000);

  const events: CalendarEvent[] = [];

  for (const component of Object.values(data)) {
    if (!component || component.type !== "VEVENT") continue;

    const location = textValue(component.location);

    if (component.rrule) {
      const instances = ical.expandRecurringEvent(component, {
        from: now,
        to: windowEnd,
      });
      for (const instance of instances) {
        events.push({
          id: `${component.uid}-${instance.start.toISOString()}`,
          title: textValue(instance.summary) ?? "Untitled Event",
          start: instance.start,
          end: instance.end,
          allDay: instance.isFullDay,
          location,
        });
      }
      continue;
    }

    const end = component.end ?? component.start;
    if (end < now) continue;

    events.push({
      id: component.uid,
      title: textValue(component.summary) ?? "Untitled Event",
      start: component.start,
      end,
      allDay: component.datetype === "date",
      location,
    });
  }

  return events
    .sort((a, b) => a.start.getTime() - b.start.getTime())
    .slice(0, limit);
}
