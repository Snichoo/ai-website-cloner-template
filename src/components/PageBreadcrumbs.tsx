import Link from "next/link";
import { pageBreadcrumbs, type SeoPage } from "@/lib/seo";

export function PageBreadcrumbs({ page }: { page: SeoPage }) {
  const items = pageBreadcrumbs(page);
  if (!items.length) return null;

  return (
    <nav aria-label="Breadcrumb" className="mb-5 text-sm text-[#555]">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((item, index) => (
          <li key={item.path} className="flex items-center gap-2">
            {index > 0 && <span aria-hidden="true">/</span>}
            {index === items.length - 1 ? (
              <span aria-current="page">{item.label}</span>
            ) : (
              <Link href={item.path} className="underline underline-offset-4 hover:text-[#347FCC]">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
