import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import PageHero from "@/components/layout/PageHero";
import Ornament from "@/components/ui/Ornament";
import { ButtonLink } from "@/components/ui/Button";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Sacred Art",
  description:
    "Nine paintings by Professor William Bukowski depicting the life of Jesus as reflected in the church's liturgical calendar.",
  path: "/sacred-art",
});

const artworks = [
  {
    title: "The Nativity of Our Lord",
    image: "/sacredArt/nativity.jpg",
    body: "Mary, Joseph, and the baby Jesus in the manger. The ox and the donkey are a nod to Isaiah 1:3, and the rod, staff, and lamb connect Jesus to His role as shepherd and sacrificial lamb.",
  },
  {
    title: "The Boy Jesus in the Temple",
    image: "/sacredArt/boyTemple.jpg",
    body: "The young Jesus teaches among the temple scholars — \"He increased in wisdom and in stature and in favor with God\" — as Mary and Joseph find Him in dialogue with the teachers.",
  },
  {
    title: "The Baptism of Our Lord",
    image: "/sacredArt/baptism.jpg",
    body: "John baptizes Jesus in the Jordan River as the heavens open, the Spirit descends as a dove, and the Father declares His pleasure. This painting hangs in the chancel near the baptismal font.",
  },
  {
    title: "The Calling of the First Disciples",
    image: "/sacredArt/calling.jpg",
    body: "Fishermen at the Sea of Galilee receive Jesus' call to apostolic ministry — the miraculous catch, and Peter, Andrew, James, and John's decision to follow Christ.",
  },
  {
    title: "The Transfiguration of Our Lord",
    image: "/sacredArt/transfiguration.jpeg",
    body: "Jesus radiates divine light, flanked by Moses and Elijah, observed by Peter, James, and John: \"This is My beloved Son, with whom I am well pleased.\"",
  },
  {
    title: "The Lord's Supper",
    image: "/sacredArt/lordsSupper.jpg",
    body: "The first painting commissioned for the collection, hanging near the altar. It commemorates the institution of Communion, drawn from the biblical account in 1 Corinthians 11.",
  },
  {
    title: "The Crucifixion of Our Lord",
    image: "/sacredArt/crucifixion.jpg",
    body: "Jesus's final moments, and the varied responses of those who witnessed them — His sacrificial death \"for the sins of the whole world.\"",
  },
  {
    title: "The Resurrection of Our Lord",
    image: "/sacredArt/resurrection.jpg",
    body: "The risen Christ, with lilies and flowers symbolizing new creation — connecting Christ's resurrection to the future resurrection and eternal life of believers.",
  },
  {
    title: "The Ascension of Our Lord",
    image: "/sacredArt/ascension.jpeg",
    body: "Jesus ascends with hands raised in blessing, per Luke's account — emphasizing joy and Christ's ongoing presence with believers gathered in worship.",
  },
];

export default function SacredArtPage() {
  return (
    <>
      <PageHero
        title="Sacred Art"
        deck="Professor William Bukowski of Bethany Lutheran College created nine commissioned paintings depicting the life of Jesus as reflected in our liturgical calendar."
      />
      <Container className="py-16 sm:py-20">
        <div className="texture-navy relative mb-14 overflow-hidden rounded-2xl px-8 py-10 text-cream shadow-deep sm:px-14">
          <div className="relative grid gap-6 sm:grid-cols-[1.3fr_0.7fr] sm:items-center">
            <div>
              <h2 className="font-heading text-2xl font-semibold sm:text-3xl">
                See Them in Person
              </h2>
              <p className="mt-3 text-cream/80">
                Photographs only go so far — these paintings were commissioned
                to be seen within the life of the church. Join us for a
                Divine Service and witness the collection firsthand in
                Trinity&apos;s sanctuary, where each piece hangs in its
                liturgical place.
              </p>
              <Ornament tone="cream" className="mt-5" />
            </div>
            <div className="flex flex-col gap-3 sm:items-end">
              <ButtonLink href="/worship-schedule" variant="inverse" className="w-full sm:w-auto">
                Plan a Visit
              </ButtonLink>
              <Link
                href="/contact"
                className="text-center text-sm font-semibold text-cream underline underline-offset-4 decoration-cream/30 hover:text-gold-300 hover:decoration-gold-300"
              >
                Or get in touch
              </Link>
            </div>
          </div>
        </div>

        <div className="grid gap-10 sm:grid-cols-2">
          {artworks.map((art) => (
            <div key={art.title}>
              <div className="relative aspect-4/3 overflow-hidden rounded-lg border border-navy-100 shadow-elevated">
                <Image
                  src={art.image}
                  alt={art.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 640px) 50vw, 100vw"
                />
              </div>
              <h2 className="mt-4 font-heading text-xl font-semibold text-navy">
                {art.title}
              </h2>
              <p className="mt-2 text-sm text-ink-muted">{art.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
