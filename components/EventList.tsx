import { CalendarEvent } from "@/lib/calendar";
import Card from "@/components/ui/Card";

const CHICAGO_TZ = "America/Chicago";

function formatDateParts(date: Date) {
  return {
    month: date.toLocaleDateString("en-US", { month: "short", timeZone: CHICAGO_TZ }),
    day: date.toLocaleDateString("en-US", { day: "numeric", timeZone: CHICAGO_TZ }),
    weekday: date.toLocaleDateString("en-US", { weekday: "short", timeZone: CHICAGO_TZ }),
  };
}

function formatTime(date: Date, allDay: boolean) {
  if (allDay) return "All day";
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    timeZone: CHICAGO_TZ,
  });
}

export default function EventList({ events }: { events: CalendarEvent[] }) {
  if (events.length === 0) {
    return (
      <p className="text-ink-muted">
        No upcoming events are on the calendar right now.
      </p>
    );
  }

  return (
    <ul className="flex flex-col gap-5">
      {events.map((event) => {
        const { month, day, weekday } = formatDateParts(event.start);
        return (
          <li key={event.id}>
            <Card hover padded={false} className="flex items-center gap-6 p-6">
              <div className="flex w-24 shrink-0 flex-col items-center justify-center rounded-lg border border-gold/20 bg-gold-100/60 py-3 text-center">
                <span className="text-xs font-semibold tracking-wide text-gold-600 uppercase">
                  {month}
                </span>
                <span className="font-heading text-2xl font-semibold text-navy">
                  {day}
                </span>
                <span className="text-xs text-ink-muted">{weekday}</span>
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-heading text-xl font-semibold text-navy">
                  {event.title}
                </h3>
                <p className="mt-1 text-sm text-ink-muted">
                  {formatTime(event.start, event.allDay)}
                  {event.location ? ` · ${event.location}` : ""}
                </p>
              </div>
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="hidden h-5 w-5 shrink-0 text-gold-600/50 sm:block"
              >
                <path d="m9 6 6 6-6 6" />
              </svg>
            </Card>
          </li>
        );
      })}
    </ul>
  );
}
