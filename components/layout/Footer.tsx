import Link from "next/link";
import { footerNav, primaryNav, site } from "@/lib/site-config";
import Container from "./Container";
import Ornament from "@/components/ui/Ornament";

export default function Footer() {
  const pageLinks = primaryNav.flatMap((item) =>
    item.children ? item.children : item.href ? [{ label: item.label, href: item.href }] : []
  );

  return (
    <footer className="texture-navy mt-24 text-cream">
      <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      <Container className="grid gap-10 py-14 sm:grid-cols-3">
        <div>
          <p className="font-heading text-xl font-semibold">{site.name}</p>
          <p className="mt-3 text-sm text-cream/70">{site.tagline}</p>
          <Ornament tone="cream" className="mt-5" />
        </div>

        <div className="sm:border-l sm:border-cream/10 sm:pl-10">
          <p className="text-sm font-semibold tracking-[0.15em] text-gold-300 uppercase">
            Visit &amp; Contact
          </p>
          <address className="mt-3 flex flex-col gap-1 text-sm text-cream/80 not-italic">
            <span>{site.address.line1}</span>
            <span>{site.address.line2}</span>
            <a href={site.phoneHref} className="transition-colors hover:text-cream">
              {site.phone}
            </a>
            <a href={site.emailHref} className="transition-colors hover:text-cream">
              {site.email}
            </a>
          </address>
        </div>

        <div className="sm:border-l sm:border-cream/10 sm:pl-10">
          <p className="text-sm font-semibold tracking-[0.15em] text-gold-300 uppercase">
            Explore
          </p>
          <nav className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-cream/80">
            {pageLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition-colors hover:text-cream">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>

      <div className="border-t border-cream/10">
        <Container className="flex flex-col gap-2 py-6 text-xs text-cream/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {site.copyrightYear} {site.name}. All rights reserved.
          </p>
          <nav className="flex gap-4">
            {footerNav.map((link) => (
              <Link key={link.href} href={link.href} className="transition-colors hover:text-cream">
                {link.label}
              </Link>
            ))}
          </nav>
        </Container>
      </div>
    </footer>
  );
}
