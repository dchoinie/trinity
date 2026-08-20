import { serviceTimes } from "@/lib/site-config";
import Card from "@/components/ui/Card";

export default function ServiceTimesCard({
  className = "",
}: {
  className?: string;
}) {
  return (
    <Card accent className={className}>
      <p className="text-sm font-semibold tracking-[0.15em] text-gold-600 uppercase">
        Join Us
      </p>
      <ul className="mt-4 flex flex-col gap-4 divide-y divide-navy-100">
        {serviceTimes.map((item) => (
          <li key={item.label} className="flex flex-col pt-4 first:pt-0">
            <span className="font-heading text-xl font-semibold text-navy">
              {item.label}
            </span>
            <span className="text-ink-muted">{item.schedule}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm text-ink-muted">
        Special services are offered during Advent and Lent — see the church
        calendar for dates.
      </p>
    </Card>
  );
}
