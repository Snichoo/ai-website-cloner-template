import type { Metadata } from "next";
import { PHONE_DISPLAY } from "@/lib/site";
import { suburbPath, type Suburb } from "@/lib/suburbs";

/** The owner's confirmed public domain; previews canonicalize to production. */
export const SITE_URL = "https://www.kingpinengineering.com.au";
export const SITE_NAME = "Kingpin Engineering";

export type SeoPage = {
  path: string;
  title: string;
  description: string;
  label: string;
  type?: "AboutPage" | "ContactPage" | "CollectionPage";
  serviceName?: string;
  areaName?: string;
};

export const SEO_PAGES = {
  home: {
    path: "/",
    title: "Concrete Mixers & Heavy Fabrication Adelaide | Kingpin Engineering",
    description: "Concrete mixer manufacturing, skip bins, CNC plasma cutting and custom heavy fabrication in Adelaide. Visit Kingpin Engineering's Wingfield workshop.",
    label: "Home",
  },
  about: {
    path: "/about",
    title: "About Kingpin Engineering | Adelaide Fabrication Workshop",
    description: "Meet Kingpin Engineering, a hands-on engineering and fabrication workshop in Wingfield, Adelaide. Concrete mixers, skip bins, welding and custom builds.",
    label: "About us",
    type: "AboutPage",
  },
  contact: {
    path: "/contact",
    title: "Contact Kingpin Engineering | Wingfield Workshop & Quotes",
    description: `Call ${PHONE_DISPLAY} or request a fabrication quote. Find Kingpin Engineering at 440 Hanson Rd, Wingfield, with workshop hours and emergency callout details.`,
    label: "Contact us",
    type: "ContactPage",
  },
  serviceAreas: {
    path: "/service-areas",
    title: "Adelaide & South Australia Service Areas | Kingpin Engineering",
    description: "Explore Kingpin Engineering's service areas across Adelaide and regional South Australia. Fabrication, concrete mixers and repairs from our Wingfield workshop.",
    label: "Service areas",
    type: "CollectionPage",
  },
  concreteMixers: {
    path: "/service/concrete-mixers",
    title: "Concrete Mixers & Agitators Adelaide | Kingpin Engineering",
    description: "Concrete agitator drums, replacement barrels, refurbishment and hydraulic repairs in Adelaide. Engineered and built at Kingpin Engineering's Wingfield workshop.",
    label: "Concrete mixers & agitators",
    serviceName: "Concrete mixer manufacturing and agitator repairs",
  },
  skipBins: {
    path: "/service/skip-bins",
    title: "Skip Bin Manufacturing & Repairs Adelaide | Kingpin Engineering",
    description: "Custom Marrel, hook-lift and craneable skip bins manufactured in Adelaide. Waste body repairs and reinforcement from Kingpin Engineering in Wingfield.",
    label: "Skip bins & waste bodies",
    serviceName: "Skip bin manufacturing and waste body repairs",
  },
  cncPlasmaCutting: {
    path: "/service/cnc-plasma-cutting",
    title: "CNC Plasma Cutting & Bending Adelaide | Kingpin Engineering",
    description: "Heavy CNC plasma cutting and press-brake bending in Adelaide. Send your CAD file, drawing or sketch to Kingpin Engineering for steel cut and folded to spec.",
    label: "CNC plasma cutting & bending",
    serviceName: "CNC plasma cutting and press-brake bending",
  },
  customFabrication: {
    path: "/service/custom-fabrication",
    title: "Custom Fabrication & Welding Adelaide | Kingpin Engineering",
    description: "Steel and aluminium welding, custom fabrication, truck body modifications and walk-in repairs. Visit Kingpin Engineering's Wingfield workshop in Adelaide.",
    label: "Custom fabrication & welding",
    serviceName: "Custom fabrication, welding and truck body modifications",
  },
} satisfies Record<string, SeoPage>;

export function absoluteUrl(path: string) {
  // Next's metadata resolver omits the slash on a bare origin.
  return path === "/" ? SITE_URL : new URL(path, SITE_URL).toString();
}

export function suburbSeoPage(suburb: Suburb): SeoPage {
  return {
    path: suburbPath(suburb.slug),
    title: suburb.metaTitle,
    description: suburb.metaDescription,
    label: suburb.name,
    serviceName: `Engineering and fabrication services for ${suburb.name}`,
    areaName: suburb.name,
  };
}

export function createPageMetadata(page: SeoPage): Metadata {
  const image = {
    url: absoluteUrl("/images/og-image.png"),
    width: 1200,
    height: 630,
    alt: "Kingpin Engineering — concrete mixers and heavy fabrication in Adelaide, South Australia",
  };

  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: absoluteUrl(page.path) },
    openGraph: {
      title: page.title,
      description: page.description,
      url: absoluteUrl(page.path),
      siteName: SITE_NAME,
      locale: "en_AU",
      type: "website",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [{ url: image.url, alt: image.alt }],
    },
  };
}

export function pageBreadcrumbs(page: SeoPage) {
  if (page.path === "/") return [];
  return [
    { label: "Home", path: "/" },
    ...(page.path.startsWith("/service-areas/")
      ? [{ label: "Service areas", path: "/service-areas" }]
      : []),
    { label: page.label, path: page.path },
  ];
}
