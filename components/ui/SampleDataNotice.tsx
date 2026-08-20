import { ReactNode } from "react";

export default function SampleDataNotice({ children }: { children: ReactNode }) {
  return (
    <div className="mb-8 flex items-start gap-3 rounded-lg border border-gold/30 bg-gold-100/70 px-5 py-4 text-sm text-ink shadow-soft">
      <svg
        aria-hidden
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        className="mt-0.5 shrink-0 text-gold-600"
      >
        <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.3" />
        <path d="M8 7.2v4M8 5v.01" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
      <p>
        <strong className="font-semibold">Sample content.</strong> {children}
      </p>
    </div>
  );
}
