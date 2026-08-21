import type { MetadataRoute } from "next";
import { site } from "@/lib/site-config";

const routes: { path: string; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/who-we-are", changeFrequency: "monthly", priority: 0.8 },
  { path: "/what-we-believe", changeFrequency: "monthly", priority: 0.8 },
  { path: "/staff", changeFrequency: "monthly", priority: 0.6 },
  { path: "/worship-schedule", changeFrequency: "monthly", priority: 0.9 },
  { path: "/what-to-expect", changeFrequency: "monthly", priority: 0.8 },
  { path: "/catechesis", changeFrequency: "monthly", priority: 0.6 },
  { path: "/events", changeFrequency: "weekly", priority: 0.8 },
  { path: "/sacred-art", changeFrequency: "monthly", priority: 0.6 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.7 },
  { path: "/links", changeFrequency: "yearly", priority: 0.4 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.2 },
  { path: "/terms-and-conditions", changeFrequency: "yearly", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: route.path === "/" ? site.url : `${site.url}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
