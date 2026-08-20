import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/layout/Container";
import PageHero from "@/components/layout/PageHero";
import SampleDataNotice from "@/components/ui/SampleDataNotice";

export const metadata: Metadata = {
  title: "Catechesis",
  description: "Catechism instruction at Trinity Evangelical Lutheran Church.",
};

const schedule = [
  { group: "Confirmation Class (Grades 6–8)", when: "Wednesdays, 4:00 – 5:00 PM" },
  { group: "Adult Instruction Class", when: "By arrangement with Pastor Mumme" },
];

export default function CatechesisPage() {
  return (
    <>
      <PageHero
        title="Catechesis"
        deck="Instruction in the Christian faith according to Luther's Small Catechism."
      />
      <Container className="py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="max-w-2xl text-ink-muted">
            <p>
              Catechesis is the church&apos;s ongoing work of teaching the
              Christian faith — for children preparing for their first
              reception of the Lord&apos;s Supper and confirmation of their
              baptismal faith, and for adults exploring what Trinity believes,
              teaches, and confesses. Instruction is grounded in Luther&apos;s
              Small Catechism and Holy Scripture.
            </p>
            <p className="mt-4">
              Contact Pastor Mumme to enroll a student or to begin adult
              instruction.
            </p>
          </div>
          <div>
            <div className="relative aspect-6/5 overflow-hidden rounded-lg border border-navy-100 shadow-elevated">
              <Image
                src="/grads.jpg"
                alt="Confirmands with Pastor Mumme at the altar"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
            <p className="mt-3 text-sm text-ink-muted">
              Confirmands at Trinity, gathered at the altar with Pastor Mumme.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <SampleDataNotice>
            The schedule below is a placeholder — confirm actual class times
            with the church office.
          </SampleDataNotice>
          <table className="w-full overflow-hidden rounded-xl border border-navy-100 bg-white text-left shadow-soft">
            <thead>
              <tr className="border-b border-navy-100 bg-navy-50">
                <th className="px-6 py-3 text-sm font-semibold tracking-wide text-gold-600 uppercase">Class</th>
                <th className="px-6 py-3 text-sm font-semibold tracking-wide text-gold-600 uppercase">When</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((row) => (
                <tr key={row.group} className="border-b border-navy-100 last:border-0">
                  <td className="px-6 py-4 text-sm text-ink">{row.group}</td>
                  <td className="px-6 py-4 text-sm text-ink-muted">{row.when}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </>
  );
}
