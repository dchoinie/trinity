"use client";

import Link from "next/link";
import { useState } from "react";
import { primaryNav } from "@/lib/site-config";
import Container from "./Container";

function Crest() {
  return (
    <svg
      aria-hidden
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      className="shrink-0"
    >
      <circle cx="15" cy="15" r="14" stroke="var(--color-gold)" strokeWidth="1" />
      <path
        d="M15 6v18M9 11h12"
        stroke="var(--color-navy)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-40 border-b border-navy-100 bg-cream/95 shadow-soft backdrop-blur">
      <div className="h-[3px] bg-gradient-to-r from-gold-300 via-gold to-gold-600" />
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 leading-tight">
          <Crest />
          <span className="flex flex-col">
            <span className="font-heading text-2xl font-semibold text-navy">
              Trinity Lutheran
            </span>
            <span className="text-xs tracking-[0.15em] text-ink-muted uppercase">
              Waterville, MN
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {primaryNav.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className="rounded-md px-4 py-2 text-sm font-medium text-ink transition-colors hover:text-navy"
                  aria-expanded={openDropdown === item.label}
                >
                  {item.label}
                </button>
                {openDropdown === item.label ? (
                  <div className="absolute top-full left-0 min-w-56 overflow-hidden rounded-lg border border-navy-100 bg-white py-2 shadow-elevated ring-1 ring-navy-900/5">
                    <span className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-gold-300 via-gold to-gold-600" />
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-ink transition-colors hover:bg-navy-50 hover:text-navy"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href!}
                className="rounded-md px-4 py-2 text-sm font-medium text-ink transition-colors hover:text-navy"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-md border border-navy-100 transition-colors hover:border-navy/40 lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span className="sr-only">Toggle menu</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            {mobileOpen ? (
              <path
                d="M4 4l12 12M16 4L4 16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M3 5h14M3 10h14M3 15h14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </Container>

      {mobileOpen ? (
        <div className="border-t border-navy-100 bg-cream shadow-elevated lg:hidden">
          <Container className="flex flex-col py-4">
            {primaryNav.map((item) =>
              item.children ? (
                <div key={item.label} className="py-2">
                  <p className="px-2 py-1 text-sm font-semibold tracking-wide text-gold-600 uppercase">
                    {item.label}
                  </p>
                  <div className="flex flex-col">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="rounded px-2 py-2 text-sm text-ink hover:bg-navy-50"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href!}
                  className="rounded px-2 py-3 text-sm font-medium text-ink hover:bg-navy-50"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
          </Container>
        </div>
      ) : null}
    </header>
  );
}
