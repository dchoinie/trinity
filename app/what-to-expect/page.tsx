import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/layout/Container";
import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "What To Expect",
  description:
    "What to expect at a Divine Service at Trinity Evangelical Lutheran Church, from confession to the Lord's Supper.",
};

const steps = [
  {
    title: "Liturgy",
    body: "Our liturgy draws on Old Testament roots and New Testament foundations, developed over two millennia. It takes the focus off ourselves and the things of this world and places it on Jesus and His gifts.",
  },
  {
    title: "Singing",
    body: "We sing canticles and hymns expressing joy in Christ's redemptive work and praising God for His actions in salvation.",
  },
  {
    title: "Confession of Sins",
    body: "We begin the Divine Service by confessing our sinfulness and unworthiness, while trusting in God's mercy.",
  },
  {
    title: "Absolution",
    body: "God responds with forgiveness through Christ's blood, delivered by ordained clergy as a declarative word that accomplishes what it promises.",
  },
  {
    title: "God's Word",
    body: "Three Scripture readings structure each service — Old Testament, Epistle, and Gospel — with the Gospel as the focal point.",
  },
  {
    title: "Confession of Faith",
    body: "The ancient creeds unite us with Christians throughout history in proclaiming God's identity and gracious work.",
  },
  {
    title: "Preaching",
    body: "Sermons apply Scripture to call people toward repentance and trust in Jesus.",
  },
  {
    title: "Law & Gospel",
    body: "Law reveals sin and drives us toward Christ; Gospel announces forgiveness through Christ's life, death, and resurrection.",
  },
  {
    title: "Offering",
    body: "Congregational giving represents the dedication of self and resources to God's work.",
  },
  {
    title: "Prayer",
    body: "We petition God for our needs and intercede for the church, the nation, and the suffering.",
  },
  {
    title: "The Lord's Supper",
    body: "Jesus has given to His people the special gift of His very body to eat and His very blood to drink for the forgiveness of our sins. Communion unites believers with Christ and each other.",
  },
  {
    title: "Blessing",
    body: "The benediction concludes the service with divine protection and peace.",
  },
];

const seasons = [
  { name: "Advent & Christmas", color: "Blue / White", body: "The Church waits for and celebrates the coming of her Lord, both in Bethlehem and at the end of time." },
  { name: "Epiphany", color: "Green", body: "Christ is made manifest to the nations, beginning with the visit of the Magi." },
  { name: "Lent & Holy Week", color: "Purple / Scarlet", body: "A season of repentance leading to the cross, culminating in Christ's suffering and death." },
  { name: "Easter", color: "White", body: "Fifty days of unbroken celebration of Christ's bodily resurrection from the dead." },
  { name: "Pentecost / Time of the Church", color: "Green", body: "The long season tracing the life of the Church under the ongoing work of the Holy Spirit." },
];

const liturgicalColorSwatches: Record<string, string> = {
  Blue: "#2f4d8f",
  White: "#ffffff",
  Green: "#2f6b45",
  Purple: "#5b3a7a",
  Scarlet: "#9c2b2b",
};

export default function WhatToExpectPage() {
  return (
    <>
      <PageHero
        title="What To Expect"
        deck="A traditional, liturgical congregation of the Lutheran Church Missouri Synod. We celebrate the Divine Service with Holy Communion each Sunday morning, using hymns and liturgies from the Lutheran Service Book."
      />
      <Container className="py-16 sm:py-20">
        <div className="mb-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <blockquote className="relative border-l-4 border-gold pl-6">
            <span aria-hidden className="absolute -top-4 -left-1 font-heading text-6xl text-gold/25">
              &ldquo;
            </span>
            <p className="font-heading text-2xl text-navy italic">
              &ldquo;One foot in heaven, the other here on earth.&rdquo;
            </p>
            <p className="mt-3 text-sm text-ink-muted">
              Christian emissaries who once visited an Orthodox liturgy in
              Constantinople reported they had a hard time knowing whether they
              were in heaven or on earth. That is what the liturgy aims to be —
              not a performance measured by our sincerity or polish, but the
              place where Christ Himself shows up to deliver His gifts of
              forgiveness, life, and salvation, giving us here a foretaste of
              the feast to come.
            </p>
          </blockquote>
          <div className="relative mx-auto aspect-3/4 w-full max-w-xs overflow-hidden rounded-lg border border-navy-100 shadow-elevated lg:mx-0 lg:max-w-none">
            <Image
              src="/baptism.jpg"
              alt="Pastor Mumme baptizing an infant at the altar"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 320px"
            />
          </div>
        </div>

        <ol className="relative flex flex-col gap-10 border-l border-navy-100 pl-8">
          {steps.map((step, i) => (
            <li key={step.title} className="relative">
              <span className="absolute top-0 -left-11 flex h-8 w-8 items-center justify-center rounded-full bg-navy font-heading text-sm font-semibold text-cream shadow-elevated ring-4 ring-cream">
                {i + 1}
              </span>
              <h2 className="font-heading text-xl font-semibold text-navy">
                {step.title}
              </h2>
              <p className="mt-2 max-w-2xl text-ink-muted">{step.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-16 border-t border-navy-100 pt-16">
          <SectionHeading eyebrow="Beyond Sunday" title="The Church Year" />
          <p className="mt-4 max-w-2xl text-ink-muted">
            Our worship doesn&apos;t stand still from week to week — it moves
            through a yearly cycle of seasons, each with its own Scripture
            readings, hymns, and liturgical color, retelling the whole story
            of Christ from His birth to His return.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {seasons.map((season) => (
              <div
                key={season.name}
                className="rounded-xl border border-navy-100 bg-white p-5 shadow-soft transition-shadow duration-200 hover:shadow-elevated"
              >
                <div className="flex items-center gap-1.5">
                  {season.color.split(" / ").map((c) => (
                    <span
                      key={c}
                      aria-hidden
                      className="h-2.5 w-2.5 shrink-0 rounded-full ring-1 ring-navy-100"
                      style={{ backgroundColor: liturgicalColorSwatches[c] }}
                    />
                  ))}
                  <p className="text-xs font-semibold tracking-widest text-gold-600 uppercase">
                    {season.color}
                  </p>
                </div>
                <p className="mt-1 font-heading text-lg font-semibold text-navy">
                  {season.name}
                </p>
                <p className="mt-2 text-sm text-ink-muted">{season.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
