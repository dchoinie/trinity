import Container from "./Container";
import Ornament from "@/components/ui/Ornament";

export default function PageHero({
  title,
  deck,
}: {
  title: string;
  deck?: string;
}) {
  return (
    <div className="texture-grain relative overflow-hidden bg-gradient-to-b from-navy-50 to-cream">
      <svg
        aria-hidden
        viewBox="0 0 200 200"
        className="pointer-events-none absolute -top-10 left-[-40px] h-64 w-64 text-navy opacity-[0.05] sm:h-80 sm:w-80"
        fill="none"
      >
        <path d="M100 10v180M40 55h120" stroke="currentColor" strokeWidth="6" />
      </svg>
      <Container className="relative py-14 sm:py-20">
        <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-gold-600 uppercase">
          Trinity Evangelical Lutheran Church
        </p>
        <h1 className="font-heading text-4xl leading-tight font-semibold text-navy sm:text-5xl">
          {title}
        </h1>
        {deck ? (
          <p className="mt-4 max-w-2xl text-lg text-ink-muted">{deck}</p>
        ) : null}
        <Ornament className="mt-7" />
      </Container>
      <div className="rule-gold" />
    </div>
  );
}
