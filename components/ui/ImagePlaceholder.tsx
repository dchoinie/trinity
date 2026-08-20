export default function ImagePlaceholder({
  label,
  className = "",
  ratio = "aspect-[4/3]",
}: {
  label: string;
  className?: string;
  ratio?: string;
}) {
  return (
    <div
      className={`${ratio} flex items-center justify-center rounded-lg border border-dashed border-navy-200 bg-[repeating-linear-gradient(135deg,transparent,transparent_10px,var(--color-navy-50)_10px,var(--color-navy-50)_20px)] ${className}`}
    >
      <span className="rounded border border-navy-100 bg-cream px-3 py-1 text-center text-xs font-medium tracking-wide text-ink-muted uppercase shadow-soft">
        {label}
      </span>
    </div>
  );
}
