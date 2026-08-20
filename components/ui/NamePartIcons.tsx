type IconProps = {
  className?: string;
};

const shared = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function TrinityIcon({ className = "" }: IconProps) {
  return (
    <svg {...shared} className={className}>
      <circle cx="12" cy="7" r="6" />
      <circle cx="8.2" cy="15.5" r="6" />
      <circle cx="15.8" cy="15.5" r="6" />
    </svg>
  );
}

export function MegaphoneIcon({ className = "" }: IconProps) {
  return (
    <svg {...shared} className={className}>
      <path d="M4 9v6h3l7 4V5l-7 4H4Z" />
      <path d="M17 10a3 3 0 0 1 0 4" />
      <path d="M19.5 8a6 6 0 0 1 0 8" />
    </svg>
  );
}

export function HeartCrossIcon({ className = "" }: IconProps) {
  return (
    <svg {...shared} className={className}>
      <path d="M12 20s-6.5-4.35-6.5-9.5a4 4 0 0 1 6.5-3.1A4 4 0 0 1 18.5 10.5C18.5 15.65 12 20 12 20Z" />
      <path d="M12 8.5v6M9 11.5h6" />
    </svg>
  );
}

export function ChurchIcon({ className = "" }: IconProps) {
  return (
    <svg {...shared} className={className}>
      <path d="M12 2v3" />
      <path d="M10.7 3.3h2.6" />
      <path d="M6 11 12 5.5 18 11" />
      <path d="M7.5 10.5V21h9V10.5" />
      <path d="M10 21v-5h4v5" />
    </svg>
  );
}
