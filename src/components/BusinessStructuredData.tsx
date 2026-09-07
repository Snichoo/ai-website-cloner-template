import { JsonLd } from "@/components/JsonLd";
import { EMAIL, MAP_LINK, PHONE_TEL, POSTAL_ADDRESS, STRUCTURED_OPENING_HOURS } from "@/lib/site";
import { absoluteUrl, SEO_PAGES, SITE_NAME } from "@/lib/seo";

export function BusinessStructuredData() {
  return (
    <JsonLd data={{
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "LocalBusiness",
          "@id": absoluteUrl("/#business"),
          name: SITE_NAME,
          url: absoluteUrl("/"),
          description: SEO_PAGES.home.description,
          logo: absoluteUrl("/images/kingpin-engineering-logo.png"),
          image: absoluteUrl("/images/og-image.png"),
          telephone: `+61${PHONE_TEL.slice(1)}`,
          email: EMAIL,
          address: { "@type": "PostalAddress", ...POSTAL_ADDRESS },
          hasMap: MAP_LINK,
          openingHoursSpecification: STRUCTURED_OPENING_HOURS,
          areaServed: { "@type": "AdministrativeArea", name: "South Australia" },
        },
        {
          "@type": "WebSite",
          "@id": absoluteUrl("/#website"),
          name: SITE_NAME,
          url: absoluteUrl("/"),
          publisher: { "@id": absoluteUrl("/#business") },
          inLanguage: "en-AU",
        },
      ],
    }} />
  );
}
