# Kingpin Engineering SEO audit

Reviewed 7 September 2026. Canonical website confirmed by the owner:
https://www.kingpinengineering.com.au/.

## Research and priorities

Good SEO starts with useful, accurate content that answers a customer's questions,
clear page titles, descriptive links and accessible pages. These changes follow
[Google's SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide).
There is no guaranteed ranking or meaningful universal "100% SEO" score.

The priority for this site is to help customers find the relevant manufacturing,
repair or fabrication service, understand that the workshop is in Wingfield, and
contact the business. Existing detailed service pages and 17 distinct local pages
already support that purpose; this audit does not add keyword-stuffed location pages.

## Findings and implementation

| Finding | Change |
| --- | --- |
| Live `/sitemap.xml` and `/robots.txt` both returned 404. | Added native Next.js metadata routes. The sitemap covers all 25 indexable pages and automatically includes entries from the suburb catalog. Robots advertises the sitemap and allows public pages and rendering assets. |
| Metadata defaulted to the apex domain. Most main pages had no canonical. | All public pages now use the confirmed HTTPS www domain, with matching self-referencing canonicals, sitemap URLs and social URLs. Requests reaching the app on the apex host permanently redirect to www while retaining the path and query. |
| Static service pages inherited the homepage's social text. | Central page metadata supplies distinct titles, descriptions, Open Graph and Twitter cards, a 1200×630 branded preview and Australian locale. |
| No business, service or breadcrumb structured data. | Added safely serialized JSON-LD for one Wingfield LocalBusiness, the WebSite, page entities, services and breadcrumbs. Service areas are places served by the workshop, not invented branch addresses. Visible breadcrumb links match the markup. |
| An 8,016,528-byte image was fetched directly as a CSS background. | Replaced that background with a 151,442-byte, 1920px WebP derivative of the same image (98.1% smaller). Existing responsive Next/Image optimization remains in use elsewhere. |
| Duplicate Inter font declarations and unnecessary initial hero work. | Consolidated Inter and fixed its CSS variable reference. The first hero image is preloaded; other slides mount after it loads. Removed entrance delays on the main/suburb hero heading and image. |
| Identical alt text on different slideshow subjects. | Added descriptive per-image alternatives. |
| Service dropdown required hover; FAQ heading/button nesting was invalid. | Added keyboard focus access, mobile menu expanded state and correctly structured FAQ buttons with associated answer panels. |
| Invalid ABN and unsupported template claims. | Removed the invalid ABN, inherited establishment year and "Nominee Supervisor" role. Removed the rendered testimonials and static 5.0 Google/Facebook badges pending genuine sources. |
| Three visible enquiry forms reported success without submitting. | Connected them to the existing email API, retaining the message and address and showing loading, success or error based on the real response. Hardened the endpoint's input handling and provider-error responses. |

The utility `/thank-you` page remains `noindex` and is excluded from the sitemap.
It is deliberately not blocked in robots.txt so crawlers can read that directive.
API routes are excluded. Unknown pages and unknown suburbs must return HTTP 404.

## Why these choices

- [Google's sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
  calls for canonical, absolute URLs. No `priority` or `changefreq` fields are added:
  Google ignores them. `lastmod` is omitted because the project has no reliable
  per-page content modification date; a fresh build is not a content update.
- [Canonical guidance](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
  supports consistent canonical links, sitemap URLs and permanent redirects.
- [LocalBusiness guidance](https://developers.google.com/search/docs/appearance/structured-data/local-business)
  supports the actual name, address, telephone and regular workshop hours.
  Emergency callout availability is not represented as an always-open workshop.
- [Structured-data policies](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)
  require markup to represent the page accurately. No fabricated ratings, prices,
  business identifiers, social accounts, branch offices or review schema are added.
  Service markup describes services; it does not promise a Google rich result.
- [Google's LCP optimization guidance](https://web.dev/articles/optimize-lcp)
  supports discovering the main image early and reducing competing downloads and
  render delay. Transfer savings above are measured asset sizes, not a claim of
  measured real-user Core Web Vitals.

## Content credibility evidence and owner follow-up

The former footer ABN `72 418 906 537` fails the
[Australian Business Register's checksum procedure](https://abr.business.gov.au/Help/AbnFormat).
Supply the verified business identifier before displaying it again.

Commit `12812be` rewrote roofing testimonials as fabrication testimonials while
retaining names including Clare Dale, Jackson Seymour and Tracie Starkey.
`docs/research/PAGE_TOPOLOGY.md` also records those names in the original roofing
template. The same commit retained that template's `Est. 2023` badge. These are
not reliable evidence for Kingpin's reviews or establishment date.

The current director/employee portraits and founder biography still need the
owner's confirmation; different asset hashes do not establish identities.
Specific operating claims in existing copy, such as regional visits, freight
arrangements, same-day assessments and certifications, should be confirmed by
the business. Genuine project case studies, workshop photos and customer reviews
with attributable sources would strengthen the content more than extra meta tags.

## Validation and maintaining SEO

Completed locally: lint, TypeScript and production build passed. The HTTP audit
passed for all 25 public pages, 17 suburbs and 25 internal link targets, including
sitemap, robots, previews, noindex, 404s and the apex-to-www redirect. Enquiry
validation, retained message/address content, HTML escaping and provider failures
passed with a mocked mail provider. No test emails were sent. The required email
environment variables are present locally; live delivery was not exercised.

Run lint, type checks and a production build:

```sh
npm run check
npm run test:enquiry-api
```

With the production server running on port 4100, audit the actual HTTP responses:

```sh
npm run start -- --port 4100
npm run test:seo
```

The SEO audit derives expected routes from source, compares them with the sitemap,
and checks every public page's status, title, description, canonical, social tags,
JSON-LD, heading, image alt attributes and internal links. It also checks the
preview image, crawl rules, thank-you exclusion and genuine 404 responses.
It accepts another base URL, for example `npm run test:seo -- https://www.kingpinengineering.com.au`.

After deployment, submit `https://www.kingpinengineering.com.au/sitemap.xml` in
the verified Google Search Console property and use URL Inspection on the home,
service and contact pages. Submission and indexing cannot be claimed from a
successful build or Git push. Check Search Console indexing and real-user Core
Web Vitals after Google has recrawled the site. Keep the Google Business Profile's
name, address, phone and hours consistent with the website; account changes were
not part of this repository update.
