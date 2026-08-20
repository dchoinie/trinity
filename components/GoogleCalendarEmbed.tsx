import { CALENDAR_EMBED_URL } from "@/lib/calendar";

export default function GoogleCalendarEmbed({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-navy-100 bg-white shadow-soft ${className}`}
    >
      <iframe
        src={CALENDAR_EMBED_URL}
        style={{ border: 0 }}
        width="100%"
        height="600"
        title="Trinity Evangelical Lutheran Church calendar"
      />
    </div>
  );
}
