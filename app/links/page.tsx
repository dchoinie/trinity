import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import PageHero from "@/components/layout/PageHero";
import Card from "@/components/ui/Card";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Links",
  description: "Helpful links from Trinity Evangelical Lutheran Church.",
  path: "/links",
});

const groups = [
  {
    heading: "Synod & District",
    links: [
      { label: "The Lutheran Church Missouri Synod", href: "https://www.lcms.org/" },
      { label: "Minnesota South District of the LCMS", href: "https://www.mnsdistrict.org/" },
      { label: "The Lutheran Confessions", href: "https://www.lcms.org/about/beliefs/lutheran-confessions" },
      { label: "LCMS U", href: "https://www.lcms.org/how-we-serve/national/campus-ministry" },
    ],
  },
  {
    heading: "Publishing & Media",
    links: [
      { label: "Concordia Publishing House", href: "https://www.cph.org/" },
      { label: "Issues, Etc.", href: "https://issuesetc.org/" },
      { label: "The Word of the Lord Endures Forever", href: "https://thewordendures.org/" },
      { label: "Lutheran Public Radio", href: "https://lutheranpublicradio.org/" },
      { label: "Ad Crucem", href: "https://www.adcrucem.com/" },
      { label: "Concordia Collective", href: "https://concordiacollective.shop/" },
      { label: "Emmanuel Press", href: "http://emmanuelpress.us/" },
    ],
  },
  {
    heading: "Youth & Education",
    links: [
      { label: "Higher Things", href: "https://higherthings.org/" },
      { label: "Luther Classical College", href: "https://www.lutherclassical.org/" },
      { label: "Wittenberg Academy", href: "https://wittenbergacademy.org/" },
      { label: "Camp Omega", href: "https://campomega.org/" },
    ],
  },
  {
    heading: "Worship & Liturgy",
    links: [
      { label: "Gottesdienst", href: "https://www.gottesdienst.org/" },
      { label: "Evangelical-Lutheran Liturgical Congregations", href: "https://www.lutheranliturgy.org/" },
    ],
  },
];

export default function LinksPage() {
  return (
    <>
      <PageHero title="Links" />
      <Container className="py-16 sm:py-20">
        <div className="grid gap-10 sm:grid-cols-2">
          {groups.map((group) => (
            <Card key={group.heading} accent>
              <h2 className="font-heading text-xl font-semibold text-navy">
                {group.heading}
              </h2>
              <ul className="mt-4 flex flex-col gap-2.5 border-t border-navy-100 pt-4">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ink-muted underline-offset-4 transition-colors hover:text-navy hover:underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Container>
    </>
  );
}
