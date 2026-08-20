import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import PageHero from "@/components/layout/PageHero";
import SampleDataNotice from "@/components/ui/SampleDataNotice";

export const metadata: Metadata = {
  title: "Sermons",
  description: "Sermons preached at Trinity Evangelical Lutheran Church.",
};

const sermons = [
  {
    date: "August 17, 2025",
    title: "The Narrow Door",
    text: "Luke 13:22–30",
    speaker: "Pastor David Mumme",
  },
  {
    date: "August 10, 2025",
    title: "Faith of Our Fathers",
    text: "Hebrews 11:1–16",
    speaker: "Pastor David Mumme",
  },
  {
    date: "August 3, 2025",
    title: "Rich Toward God",
    text: "Luke 12:13–21",
    speaker: "Pastor David Mumme",
  },
];

export default function SermonsPage() {
  return (
    <>
      <PageHero title="Sermons" deck="Recent sermons preached at Trinity." />
      <Container className="py-16 sm:py-20">
        <SampleDataNotice>
          These entries are placeholders showing the intended layout — real
          sermon audio and details will be added here.
        </SampleDataNotice>
        <ul className="flex flex-col gap-6">
          {sermons.map((sermon) => (
            <li
              key={sermon.date}
              className="flex flex-col gap-4 rounded-xl border border-navy-100 bg-white p-6 shadow-soft transition-shadow duration-200 hover:shadow-elevated sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="text-sm text-ink-muted">
                  {sermon.date} &middot; {sermon.speaker}
                </p>
                <h2 className="font-heading text-xl font-semibold text-navy">
                  {sermon.title}
                </h2>
                <p className="text-sm text-ink-muted">{sermon.text}</p>
              </div>
              <div
                className="flex h-12 w-full items-center rounded-md border border-dashed border-navy-100 px-4 text-xs font-medium tracking-wide text-ink-muted uppercase sm:w-64"
                title="Sample entry — audio player will go here"
              >
                Audio player — pending
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
