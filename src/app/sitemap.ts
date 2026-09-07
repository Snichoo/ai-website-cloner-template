import type { MetadataRoute } from "next";
import { absoluteUrl, SEO_PAGES } from "@/lib/seo";
import { SUBURBS, suburbPath } from "@/lib/suburbs";

export default function sitemap(): MetadataRoute.Sitemap {
  // Only canonical, indexable pages. Add lastModified only when a reliable
  // content modification date exists; a build time is not a content update.
  return [
    ...Object.values(SEO_PAGES).map((page) => ({ url: absoluteUrl(page.path) })),
    ...SUBURBS.map((suburb) => ({ url: absoluteUrl(suburbPath(suburb.slug)) })),
  ];
}
