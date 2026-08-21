import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceTimesCard from "@/components/ServiceTimesCard";
import EventList from "@/components/EventList";
import Card from "@/components/ui/Card";
import Ornament from "@/components/ui/Ornament";
import { ButtonLink } from "@/components/ui/Button";
import { site } from "@/lib/site-config";
import { getUpcomingEvents } from "@/lib/calendar";
import { pageMetadata } from "@/lib/seo";
import {
  BookIcon,
  ChaliceIcon,
  MortarboardIcon,
  CrossIcon,
} from "@/components/ui/CommitmentIcons";

export const metadata: Metadata = pageMetadata({
  description:
    "Trinity Evangelical Lutheran Church is a traditional, liturgical LCMS congregation in Waterville, Minnesota, serving the community since 1909.",
  path: "/",
});

const commitments = [
  {
    title: "Preaching God's Word",
    detail: "Scripture proclaimed faithfully, Sunday after Sunday.",
    icon: BookIcon,
  },
  {
    title: "Administering the Sacraments",
    detail: "Baptism, Absolution, and Holy Communion as the Spirit's means of grace.",
    icon: ChaliceIcon,
  },
  {
    title: "Teaching the Christian Faith",
    detail: "Catechesis and instruction rooted in the Book of Concord.",
    icon: MortarboardIcon,
  },
  {
    title: "Liturgical Worship",
    detail: "Historic liturgy that fixes our eyes on Jesus and His gifts.",
    icon: CrossIcon,
  },
];

const lifeAtTrinity = [
  { title: "Preaching Christ Crucified", image: "/preaching.jpg" },
  { title: "Gathered in Fellowship", image: "/people1.jpg" },
  { title: "Serving Our Community", image: "/kids1.jpg" },
];

const sacredArtTeaser = [
  { title: "The Nativity of Our Lord", image: "/sacredArt/nativity.jpg" },
  { title: "The Baptism of Our Lord", image: "/sacredArt/baptism.jpg" },
  { title: "The Crucifixion of Our Lord", image: "/sacredArt/crucifixion.jpg" },
  { title: "The Resurrection of Our Lord", image: "/sacredArt/resurrection.jpg" },
];

export default async function Home() {
  const events = await getUpcomingEvents(3);

  return (
    <>
      <section className="texture-grain relative overflow-hidden bg-gradient-to-b from-navy-50 to-cream">
        <svg
          aria-hidden
          viewBox="0 0 200 200"
          className="pointer-events-none absolute -top-16 -left-16 h-72 w-72 text-navy opacity-[0.04]"
          fill="none"
        >
          <path d="M100 10v180M40 55h120" stroke="currentColor" strokeWidth="6" />
        </svg>
        <Container className="relative grid gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:items-center lg:py-24">
          <div>
            <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-gold-600 uppercase">
              Waterville, Minnesota
            </p>
            <h1 className="font-heading text-4xl leading-tight font-semibold text-navy sm:text-5xl">
              {site.name}
            </h1>
            <p className="mt-5 max-w-xl text-lg text-ink-muted">
              {site.tagline}
            </p>
            <Ornament className="mt-6" />
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href="/worship-schedule" variant="primary">
                Plan Your Visit
              </ButtonLink>
              <ButtonLink href="/what-to-expect" variant="secondary">
                What To Expect
              </ButtonLink>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-2 rounded-xl border border-gold/30" />
            <div className="relative aspect-3/2 overflow-hidden rounded-lg shadow-deep lg:aspect-auto lg:h-105">
              <Image
                src="/exterior2.jpg"
                alt="Trinity Evangelical Lutheran Church exterior, Waterville, MN"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>
        </Container>
        <div className="rule-gold" />
      </section>

      <section className="py-16 sm:py-24">
        <Container className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading eyebrow="Who We Are" title="Centered on Christ Crucified" />
            <p className="mt-5 text-ink-muted">
              Trinity is a congregation centered on Jesus Christ, the Lamb of
              God who takes away the sin of the world. We hold to the historic
              teachings of the Christian Church as summarized in the Book of
              Concord, and our mission is to serve the surrounding community
              with the saving Gospel of our Lord Jesus Christ. We are a member
              congregation of the Lutheran Church—Missouri Synod, a
              confessional Lutheran church body of nearly 2 million members
              across the country tracing its roots to 1847.
            </p>
            <dl className="mt-8 grid gap-4 sm:grid-cols-2">
              {commitments.map((item) => (
                <Card key={item.title} accent hover>
                  <item.icon className="h-7 w-7 text-gold-600" />
                  <dt className="mt-3 font-heading text-lg font-semibold text-navy">
                    {item.title}
                  </dt>
                  <dd className="mt-1 text-sm text-ink-muted">{item.detail}</dd>
                </Card>
              ))}
            </dl>
            <Link
              href="/who-we-are"
              className="mt-8 inline-block text-sm font-semibold text-navy underline underline-offset-4 decoration-navy/30 hover:text-gold-600 hover:decoration-gold-600"
            >
              Read more about who we are &rarr;
            </Link>
          </div>
          <ServiceTimesCard />
        </Container>
      </section>

      <section className="border-t border-navy-100 py-16 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Life at Trinity" title="A Congregation Gathered Around Christ" />
          <p className="mt-5 max-w-2xl text-ink-muted">
            A few glimpses of worship, fellowship, and community life together.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {lifeAtTrinity.map((item) => (
              <div key={item.title} className="group">
                <div className="relative aspect-4/3 overflow-hidden rounded-lg border border-navy-100 shadow-deep">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(min-width: 640px) 33vw, 100vw"
                  />
                </div>
                <p className="mt-3 text-sm font-medium text-navy">{item.title}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="texture-navy relative py-16 text-cream sm:py-24">
        <Container className="relative">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-sm font-semibold tracking-[0.2em] text-gold-300 uppercase">
                Sacred Art
              </p>
              <h2 className="font-heading text-3xl font-semibold text-cream">
                Nine Paintings of Christ&apos;s Life
              </h2>
              <Ornament tone="cream" className="mt-3" />
            </div>
            <Link
              href="/sacred-art"
              className="text-sm font-semibold text-cream underline underline-offset-4 decoration-cream/30 hover:text-gold-300 hover:decoration-gold-300"
            >
              View the full collection &rarr;
            </Link>
          </div>
          <p className="mt-5 max-w-2xl text-cream/75">
            Professor William Bukowski of Bethany Lutheran College created nine
            commissioned paintings depicting the life of Jesus as reflected in
            the church&apos;s liturgical calendar.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {sacredArtTeaser.map((art) => (
              <div key={art.title} className="group">
                <div className="relative aspect-square overflow-hidden rounded-lg border border-cream/15 shadow-deep">
                  <Image
                    src={art.image}
                    alt={art.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <p className="mt-3 text-sm font-medium text-cream/90">{art.title}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="Upcoming Events" title="What's Happening at Trinity" />
            <Link
              href="/events"
              className="text-sm font-semibold text-navy underline underline-offset-4 decoration-navy/30 hover:text-gold-600 hover:decoration-gold-600"
            >
              View all events &rarr;
            </Link>
          </div>
          <div className="mt-8">
            <EventList events={events} />
          </div>
        </Container>
      </section>

      <section className="pb-16 sm:pb-24">
        <Container>
          <div className="texture-navy relative overflow-hidden rounded-2xl px-8 py-14 text-cream shadow-deep sm:px-14">
            <div className="relative grid gap-8 sm:grid-cols-2 sm:items-center">
              <div>
                <h2 className="font-heading text-3xl font-semibold">
                  Visit Trinity
                </h2>
                <p className="mt-3 text-cream/80">
                  We&apos;d love to have you join us for worship.
                </p>
                <Ornament tone="cream" className="mt-5" />
              </div>
              <address className="flex flex-col gap-1 not-italic text-cream/90">
                <span>{site.address.line1}</span>
                <span>{site.address.line2}</span>
                <a href={site.phoneHref} className="transition-colors hover:text-gold-300">
                  {site.phone}
                </a>
                <a href={site.emailHref} className="transition-colors hover:text-gold-300">
                  {site.email}
                </a>
              </address>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
