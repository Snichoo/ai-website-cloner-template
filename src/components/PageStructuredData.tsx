import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl, pageBreadcrumbs, type SeoPage } from "@/lib/seo";

export function PageStructuredData({ page }: { page: SeoPage }) {
  const url = absoluteUrl(page.path);
  const breadcrumbs = pageBreadcrumbs(page);
  const serviceId = `${url}#service`;
  const graph: Record<string, unknown>[] = [
    {
      "@type": page.type ?? "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: page.title,
      description: page.description,
      inLanguage: "en-AU",
      isPartOf: { "@id": absoluteUrl("/#website") },
      about: { "@id": absoluteUrl("/#business") },
      ...(breadcrumbs.length ? { breadcrumb: { "@id": `${url}#breadcrumb` } } : {}),
      ...(page.serviceName ? { mainEntity: { "@id": serviceId } } : {}),
    },
  ];

  if (breadcrumbs.length) {
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.label,
        item: absoluteUrl(item.path),
      })),
    });
  }

  if (page.serviceName) {
    graph.push({
      "@type": "Service",
      "@id": serviceId,
      name: page.serviceName,
      description: page.description,
      url,
      provider: { "@id": absoluteUrl("/#business") },
      areaServed: page.areaName
        ? { "@type": "Place", name: `${page.areaName}, South Australia` }
        : { "@type": "AdministrativeArea", name: "South Australia" },
    });
  }

  return <JsonLd data={{ "@context": "https://schema.org", "@graph": graph }} />;
}
