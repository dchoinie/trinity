import Ornament from "./Ornament";

export default function SectionHeading({
  eyebrow,
  title,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  className?: string;
}) {
  return (
    <div className={className}>
      {eyebrow ? (
        <p className="mb-2 text-sm font-semibold tracking-[0.2em] text-gold-600 uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-heading text-3xl font-semibold text-navy">{title}</h2>
      <Ornament className="mt-3" />
    </div>
  );
}
