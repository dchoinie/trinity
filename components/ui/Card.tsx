import { ReactNode } from "react";

export default function Card({
  children,
  className = "",
  hover = false,
  accent = false,
  padded = true,
}: {
  children: ReactNode;
  className?: string;
  /** Lift + deepen shadow on hover — use for clickable/linked cards. */
  hover?: boolean;
  /** Thin gold rule across the top edge. */
  accent?: boolean;
  padded?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-navy-100 bg-white shadow-soft transition-all duration-200 ${
        hover ? "hover:-translate-y-0.5 hover:shadow-elevated hover:border-navy-200" : ""
      } ${padded ? "p-6" : ""} ${className}`}
    >
      {accent ? (
        <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold-300 via-gold to-gold-600" />
      ) : null}
      {children}
    </div>
  );
}
