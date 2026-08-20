import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import PageHero from "@/components/layout/PageHero";
import SampleDataNotice from "@/components/ui/SampleDataNotice";

export const metadata: Metadata = {
  title: "Bulletins",
  description: "Weekly worship bulletins from Trinity Evangelical Lutheran Church.",
};

const bulletins = [
  { date: "August 17, 2025", label: "Eleventh Sunday after Pentecost" },
  { date: "August 10, 2025", label: "Tenth Sunday after Pentecost" },
  { date: "August 3, 2025", label: "Ninth Sunday after Pentecost" },
];

export default function BulletinsPage() {
  return (
    <>
      <PageHero title="Bulletins" deck="Weekly worship bulletins for Trinity Evangelical Lutheran Church." />
      <Container className="py-16 sm:py-20">
        <SampleDataNotice>
          These entries are placeholders showing the intended layout — real
          bulletins will be uploaded here.
        </SampleDataNotice>
        <ul className="flex flex-col divide-y divide-navy-100 rounded-xl border border-navy-100 bg-white shadow-soft">
          {bulletins.map((bulletin) => (
            <li
              key={bulletin.date}
              className="flex flex-wrap items-center justify-between gap-4 px-6 py-5"
            >
              <div>
                <p className="font-heading text-lg font-semibold text-navy">
                  {bulletin.date}
                </p>
                <p className="text-sm text-ink-muted">{bulletin.label}</p>
              </div>
              <span
                aria-disabled="true"
                className="rounded-md border border-navy-100 px-4 py-2 text-sm font-medium text-ink-muted"
                title="Sample entry — not a real download"
              >
                Download PDF
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
