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

export function BookIcon({ className = "" }: IconProps) {
  return (
    <svg {...shared} className={className}>
      <path d="M12 6.5c-1.6-1.3-3.7-2-6-2v12.5c2.3 0 4.4.7 6 2V6.5z" />
      <path d="M12 6.5c1.6-1.3 3.7-2 6-2v12.5c-2.3 0-4.4.7-6 2V6.5z" />
    </svg>
  );
}

export function ChaliceIcon({ className = "" }: IconProps) {
  return (
    <svg {...shared} className={className}>
      <path d="M6.5 4h11" />
      <path d="M7 4c0 4.5 1.8 7.5 5 7.5S17 8.5 17 4" />
      <path d="M12 11.5V17" />
      <path d="M8.5 20h7" />
      <path d="M9.5 20c0-1.8 1.1-3 2.5-3s2.5 1.2 2.5 3" />
    </svg>
  );
}

export function MortarboardIcon({ className = "" }: IconProps) {
  return (
    <svg {...shared} className={className}>
      <path d="M12 4 2 9l10 5 10-5-10-5Z" />
      <path d="M6 11.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5" />
      <path d="M22 9v6" />
    </svg>
  );
}

export function CrossIcon({ className = "" }: IconProps) {
  return (
    <svg {...shared} className={className}>
      <path d="M12 3v18" />
      <path d="M7 9h10" />
    </svg>
  );
}
