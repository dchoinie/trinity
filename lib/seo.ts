import type { Metadata } from "next";
import { site } from "@/lib/site-config";

type PageSeoInput = {
  /** Page-specific title. Omit for the site root, which uses `site.name`. */
  title?: string;
  description: string;
  /** Root-relative path, e.g. "/contact". Use "/" for the home page. */
  path: string;
};

/**
 * Builds per-page Metadata (title, description, canonical URL, Open Graph,
 * Twitter card) from a single description so every route gets consistent,
 * complete SEO tags instead of each page hand-rolling its own.
 */
export function pageMetadata({ title, description, path }: PageSeoInput): Metadata {
  const url = path === "/" ? site.url : `${site.url}${path}`;
  const resolvedTitle = title ? `${title} | ${site.name}` : site.name;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: resolvedTitle,
      description,
      url,
      siteName: site.name,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description,
    },
  };
}
