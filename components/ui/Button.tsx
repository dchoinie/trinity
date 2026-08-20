import Link from "next/link";
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

const variants = {
  primary:
    "rounded-md px-6 py-3 bg-navy text-cream shadow-elevated hover:bg-navy-800 hover:shadow-gold hover:-translate-y-0.5",
  secondary:
    "rounded-md px-6 py-3 border border-navy/30 text-navy hover:border-navy hover:bg-navy-50",
  inverse:
    "rounded-md px-6 py-3 bg-cream text-navy shadow-elevated hover:bg-white hover:-translate-y-0.5",
  ghost:
    "text-navy underline underline-offset-4 decoration-navy/30 hover:text-gold-600 hover:decoration-gold-600",
} as const;

type Variant = keyof typeof variants;

const base =
  "inline-flex items-center justify-center gap-2 text-sm font-semibold transition-all duration-200";

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: {
  variant?: Variant;
  className?: string;
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  className = "",
  children,
  href,
  ...props
}: {
  variant?: Variant;
  className?: string;
  children: ReactNode;
  href: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");

  if (isExternal) {
    return (
      <a
        href={href}
        className={`${base} ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Link>
  );
}
