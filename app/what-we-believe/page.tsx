import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "What We Believe",
  description:
    "What Trinity Evangelical Lutheran Church believes, teaches, and confesses according to Holy Scripture.",
};

const pillars = [
  {
    latin: "Sola Gratia",
    title: "Grace Alone",
    body: "God loves and saves sinful people not because we have earned it, but purely out of His own undeserved kindness.",
  },
  {
    latin: "Sola Fide",
    title: "Faith Alone",
    body: "Christ's death has already purchased forgiveness and eternal life for all people; that gift is received through faith, not by our own effort or merit.",
  },
  {
    latin: "Sola Scriptura",
    title: "Scripture Alone",
    body: "The Bible is God's inerrant and infallible Word, and the only rule and norm for what we teach and confess.",
  },
];

const confessions = [
  "The Three Ecumenical Creeds (Apostles', Nicene, and Athanasian)",
  "The Augsburg Confession",
  "The Apology of the Augsburg Confession",
  "The Smalcald Articles",
  "The Treatise on the Power and Primacy of the Pope",
  "The Small Catechism",
  "The Large Catechism",
  "The Epitome of the Formula of Concord",
  "The Solid Declaration of the Formula of Concord",
];

const beliefs = [
  {
    title: "The Trinity",
    body: "We believe in one true God — Father, Son, and Holy Spirit — revealed to us through Jesus Christ.",
  },
  {
    title: "Human Nature",
    body: "Humanity is spiritually dead at birth, entirely predisposed toward sin, and without inherent fear, love, or trust in God.",
  },
  {
    title: "Christology",
    body: "Jesus Christ is true God, eternally begotten of the Father, and true man, born of the Virgin Mary — the only Savior from sin. This is not myth or metaphor: it happened in history, in real time and a real place, through a flesh-and-blood person. He was crucified, died, and on the third day rose bodily from the grave, later ascending into heaven. There is no other way of salvation than through faith in Him.",
  },
  {
    title: "Salvation",
    body: "Justification comes solely by God's undeserved kindness, through faith in Jesus Christ, not by works.",
  },
  {
    title: "The Sacraments",
    body: "We teach three sacraments — Baptism, Absolution, and Holy Communion — as means through which the Holy Spirit works.",
  },
  {
    title: "The Church",
    body: "The Church exists wherever the Gospel of Jesus Christ is purely preached and taught.",
  },
  {
    title: "Scripture",
    body: "The Bible is without factual error and is the only source and final authority for faith and life.",
  },
  {
    title: "Eschatology",
    body: "Christ will return to judge the living and the dead.",
  },
];

export default function WhatWeBelievePage() {
  return (
    <>
      <PageHero
        title="What We Believe"
        deck="According to Holy Scripture, and in the unity of the one holy Christian and apostolic Church."
      />
      <Container className="py-16 sm:py-20">
        <SectionHeading eyebrow="Reformation Roots" title="Three Solas" />
        <p className="mt-4 max-w-2xl text-ink-muted">
          Everything we confess flows from three convictions recovered at the
          Reformation and held by Lutherans ever since.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.latin}
              className="rounded-xl border border-navy-100 bg-white p-6 shadow-soft transition-shadow duration-200 hover:shadow-elevated"
            >
              <p className="text-sm font-semibold tracking-widest text-gold-600 uppercase">
                {pillar.latin}
              </p>
              <p className="mt-1 font-heading text-xl font-semibold text-navy">
                {pillar.title}
              </p>
              <p className="mt-2 text-sm text-ink-muted">{pillar.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-navy-100 pt-16">
          <ol className="flex flex-col gap-10">
            {beliefs.map((belief, i) => (
              <li key={belief.title} className="flex gap-6">
                <span className="font-heading text-3xl font-semibold text-gold-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="font-heading text-2xl font-semibold text-navy">
                    {belief.title}
                  </h2>
                  <p className="mt-2 max-w-2xl text-ink-muted">{belief.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-16 border-t border-navy-100 pt-16">
          <SectionHeading eyebrow="Our Confession" title="The Book of Concord" />
          <p className="mt-4 max-w-2xl text-ink-muted">
            When we say we are &ldquo;Lutheran,&rdquo; we mean we accept the
            Lutheran Confessions, gathered in 1580 as the Book of Concord, as
            a true and unadulterated statement and exposition of the Word of
            God — not a rival to Scripture, but a faithful summary of it.
          </p>
          <ul className="mt-6 grid gap-x-8 gap-y-2 text-ink-muted sm:grid-cols-2">
            {confessions.map((doc) => (
              <li key={doc} className="flex gap-2">
                <span aria-hidden className="text-gold-600">
                  &middot;
                </span>
                {doc}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </>
  );
}
