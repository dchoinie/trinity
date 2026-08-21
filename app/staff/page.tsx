import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/layout/Container";
import PageHero from "@/components/layout/PageHero";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Staff",
  description: "Meet the staff of Trinity Evangelical Lutheran Church, Waterville, MN.",
  path: "/staff",
});

export default function StaffPage() {
  return (
    <>
      <PageHero title="Staff" />
      <Container className="py-16 sm:py-20">
        <div className="relative flex flex-col gap-8 overflow-hidden rounded-xl border border-navy-100 bg-white shadow-elevated sm:flex-row">
          <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold-300 via-gold to-gold-600" />
          <div className="relative mx-auto mt-6 aspect-[153/220] w-40 shrink-0 sm:mx-0 sm:mt-0 sm:w-44">
            <Image
              src="/pastorMumme.jpg"
              alt="Pastor David Mumme"
              fill
              quality={100}
              className="object-cover"
              sizes="176px"
            />
          </div>
          <div className="p-6 sm:py-8 sm:pr-8 sm:pl-0">
            <h2 className="font-heading text-xl font-semibold text-navy">
              Pastor David Mumme
            </h2>
            <p className="text-sm font-medium text-gold-600">Pastor</p>
            <p className="mt-4 text-sm text-ink-muted">
              Originally from rural St. James, Minnesota, Pastor Mumme
              earned a Bachelor of Arts from Concordia University, River
              Forest, Illinois (1993), and graduated from Concordia
              Theological Seminary in Fort Wayne, Indiana (1997). He
              received his first call to serve Trinity Lutheran Church in
              Marseilles, Illinois, and in February 2003 accepted the call
              to serve as the eighth pastor of Trinity Evangelical Lutheran
              Church in Waterville. He is married to Glenda and they have
              five children.
            </p>
            <dl className="mt-5 flex flex-col gap-1 text-sm text-ink-muted">
              <div>
                <dt className="inline font-semibold text-ink">Email: </dt>
                <dd className="inline">
                  <a href="mailto:pastormumme@gmail.com" className="hover:text-navy">
                    pastormumme@gmail.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="inline font-semibold text-ink">Phone: </dt>
                <dd className="inline">(507) 362-4454</dd>
              </div>
              <div>
                <dt className="inline font-semibold text-ink">Office Hours: </dt>
                <dd className="inline">
                  Tuesday–Saturday, 8:30 AM – 4:30 PM, and by appointment
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </Container>
    </>
  );
}
