export default function Ornament({
  align = "left",
  tone = "gold",
  className = "",
}: {
  align?: "left" | "center";
  tone?: "gold" | "cream";
  className?: string;
}) {
  const lineColor = tone === "gold" ? "bg-gold/50" : "bg-cream/30";
  const diamondColor = tone === "gold" ? "bg-gold" : "bg-cream/70";

  return (
    <div
      aria-hidden
      className={`flex items-center gap-3 ${
        align === "center" ? "justify-center" : "justify-start"
      } ${className}`}
    >
      <span className={`h-px ${align === "center" ? "w-8" : "w-10"} ${lineColor}`} />
      <span className={`h-1.5 w-1.5 rotate-45 ${diamondColor}`} />
      {align === "center" ? (
        <span className={`h-px w-8 ${lineColor}`} />
      ) : null}
    </div>
  );
}
