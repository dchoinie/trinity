import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import {
  TrinityIcon,
  MegaphoneIcon,
  HeartCrossIcon,
  ChurchIcon,
} from "@/components/ui/NamePartIcons";

export const metadata: Metadata = {
  title: "Who We Are",
  description:
    "Trinity Evangelical Lutheran Church has served Waterville and the surrounding area since 1909.",
};

const nameParts = [
  {
    word: "Trinity",
    detail: "References our belief in God the Father, Son, and Holy Spirit.",
    icon: TrinityIcon,
  },
  {
    word: "Evangelical",
    detail: "Jesus and His Gospel remain central to our faith.",
    icon: MegaphoneIcon,
  },
  {
    word: "Lutheran",
    detail: "We follow the Lutheran Confessions.",
    icon: HeartCrossIcon,
  },
  {
    word: "Church",
    detail: "We are members of the Lutheran Church—Missouri Synod.",
    icon: ChurchIcon,
  },
];

const pastors = [
  {
    slug: "albrecht",
    name: "The Rev. John Carl Albrecht",
    life: "1866–1956",
    served: "1909–1919",
    note: "Also served St. Peter (Bell) Lutheran Church in rural Waterville.",
  },
  {
    slug: "winter",
    name: "The Rev. Herman Carl William Winter",
    life: "1897–1961",
    served: "1919–1925",
  },
  {
    slug: "eggers",
    name: "The Rev. Henry Frederick Eggers",
    life: "1889–1984",
    served: "1926–1957",
  },
  {
    slug: "roth",
    name: "The Rev. Victor Martin Roth",
    life: "b. 1922",
    served: "1957–1975",
  },
  {
    slug: "miller",
    name: "The Rev. Jeffrey J. Miller",
    life: "b. 1944",
    served: "1976–1981",
  },
  {
    slug: "jirovec",
    name: "The Rev. Dymann Leo Jirovec",
    life: "1952–2008",
    served: "1983–1986",
  },
  {
    slug: "meitz",
    name: "The Rev. Erwin W. Meitz, Jr.",
    life: "1937–2011",
    served: "1987–2002",
  },
  {
    slug: "mumme",
    name: "The Rev. David Carl Mumme",
    life: "b. 1971",
    served: "2003–present",
  },
];

const synodStats = [
  { stat: "1847", label: "The Missouri Synod is founded in Chicago" },
  { stat: "~2 million", label: "Baptized members across the LCMS today" },
  { stat: "6,000+", label: "LCMS congregations nationwide" },
  { stat: "35", label: "Districts the Synod is organized into" },
];

export default function WhoWeArePage() {
  return (
    <>
      <PageHero
        title="Who We Are"
        deck="Our name says a lot about us."
      />

      <Container className="py-16 sm:py-20">
        <div className="relative">
          <div className="absolute -inset-2 rounded-xl border border-gold/30" />
          <div className="relative aspect-[3339/1255] overflow-hidden rounded-lg shadow-deep">
            <Image
              src="/congregation.jpg"
              alt="Members of Trinity Evangelical Lutheran Church gathered outside the front of the church"
              fill
              className="object-contain"
              sizes="(min-width: 1024px) 1024px, 100vw"
            />
          </div>
        </div>
        <p className="mt-3 text-sm text-ink-muted">
          The members of Trinity, gathered outside the church.
        </p>
      </Container>

      <Container className="grid gap-12 pb-16 sm:pb-20 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="grid grid-cols-2 gap-6">
          {nameParts.map((part) => (
            <Card key={part.word} hover>
              <part.icon className="h-7 w-7 text-gold-600" />
              <p className="mt-3 font-heading text-2xl font-semibold text-navy">
                {part.word}
              </p>
              <p className="mt-2 text-sm text-ink-muted">{part.detail}</p>
            </Card>
          ))}
        </div>

        <div className="flex flex-col gap-5 text-ink-muted">
          <p>
            Trinity Evangelical Lutheran Church has served Waterville and the
            surrounding area since <strong className="text-ink">1909</strong>.
            We are an imperfect group of sinners gathered around our shared
            confession of Jesus and His Gospel.
          </p>
          <p>
            We are shaped by Holy Scripture and worship through historic
            liturgical practices passed down through the Church for
            generations. Our intention is to bear faithful witness to Jesus,
            to show His mercy to all, and to live our life together in His
            Church.
          </p>
        </div>
      </Container>

      <div className="border-t border-navy-100">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Our History"
            title="Pastors Who Have Served Trinity"
          />
          <p className="mt-4 max-w-2xl text-ink-muted">
            Since 1909, the following pastors have shepherded Trinity&apos;s
            congregation.
          </p>
          <ol className="relative mt-10 flex flex-col gap-10 border-l border-navy-100 pl-8">
            {pastors.map((pastor, i) => (
              <li key={pastor.slug} className="relative">
                <span className="absolute top-0 -left-[calc(2rem+1px)] flex h-8 w-8 items-center justify-center rounded-full bg-navy font-heading text-sm font-semibold text-cream shadow-elevated ring-4 ring-cream">
                  {i + 1}
                </span>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                  <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border-2 border-gold/30 shadow-soft">
                    <Image
                      src={`/pastors/${pastor.slug}.jpg`}
                      alt={pastor.name}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </div>
                  <div>
                    <p className="font-heading text-lg font-semibold text-navy">
                      {pastor.name}
                    </p>
                    <p className="text-sm font-semibold text-gold-600">
                      Pastor at Trinity, {pastor.served}
                    </p>
                    <p className="text-sm text-ink-muted">{pastor.life}</p>
                    {pastor.note ? (
                      <p className="mt-1 text-sm text-ink-muted italic">
                        {pastor.note}
                      </p>
                    ) : null}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </div>

      <div className="texture-grain border-t border-navy-100 bg-navy-50">
        <Container className="py-16 sm:py-20">
          <SectionHeading eyebrow="Our Synod" title="Part of a Larger Family" />
          <p className="mt-5 max-w-2xl text-ink-muted">
            Trinity is a member congregation of the Lutheran Church—Missouri
            Synod. The Synod traces its roots to Saxon and other German
            immigrants who crossed the ocean for the freedom to practice and
            teach confessional Lutheranism in America. On April 26, 1847,
            twelve pastors representing fourteen congregations signed its
            founding constitution in Chicago, electing Rev. Dr. C.F.W.
            Walther — later remembered as the &ldquo;Father of the Missouri
            Synod&rdquo; — as their first president. The word
            &ldquo;Synod&rdquo; comes from the Greek for &ldquo;walking
            together&rdquo;: congregations like ours voluntarily join together
            around a shared confession while each remaining self-governing.
          </p>
          <dl className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {synodStats.map((item) => (
              <div key={item.label} className="border-l-2 border-gold/40 pl-4">
                <dt className="font-heading text-3xl font-semibold text-navy">
                  {item.stat}
                </dt>
                <dd className="mt-1 text-sm text-ink-muted">{item.label}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 text-sm text-ink-muted">
            Learn more about the Synod at{" "}
            <a
              href="https://www.lcms.org/about"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-navy underline underline-offset-4 decoration-navy/30 hover:text-gold-600 hover:decoration-gold-600"
            >
              lcms.org
            </a>
            , or see what{" "}
            <Link
              href="/what-we-believe"
              className="font-semibold text-navy underline underline-offset-4 decoration-navy/30 hover:text-gold-600 hover:decoration-gold-600"
            >
              we believe, teach, and confess
            </Link>
            .
          </p>
        </Container>
      </div>
    </>
  );
}
