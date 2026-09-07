import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    // /thank-you stays crawlable so its noindex directive can be read.
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
