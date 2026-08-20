import { site } from "@/lib/site-config";

const MAP_QUERY = `${site.address.line1}, ${site.address.line2}`;
const MAP_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&output=embed`;

export default function GoogleMapEmbed({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`aspect-[4/3] overflow-hidden rounded-lg border border-navy-100 shadow-soft ${className}`}
    >
      <iframe
        src={MAP_EMBED_URL}
        style={{ border: 0 }}
        width="100%"
        height="100%"
        loading="lazy"
        title={`Map to ${site.name}`}
      />
    </div>
  );
}
