#!/usr/bin/env node
/** Read-only production audit. Usage: node scripts/check-seo.mjs [http://localhost:4100] */
import { readdir, readFile } from "node:fs/promises";
import { dirname, join, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { get as getHttp } from "node:http";
import { get as getHttps } from "node:https";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const canonicalOrigin = "https://www.kingpinengineering.com.au";
const base = new URL(process.argv[2] ?? "http://localhost:4100");
if (!/^https?:$/.test(base.protocol)) throw new Error("Base URL must use HTTP or HTTPS.");
const failures = new Set();
const fail = (message) => failures.add(message);
const expectedUrl = (path) => path === "/" ? canonicalOrigin : new URL(path, canonicalOrigin).href;
const excluded = (path) => path === "/thank-you" || /^\/api(?:\/|$)/.test(path);
const normalizePath = (path) => path.replace(/\/+$/, "") || "/";
const decode = (value) => value.replace(/&(#x[\da-f]+|#\d+|amp|quot|apos|lt|gt|nbsp);/gi, (all, entity) => {
  if (entity[0] === "#") {
    const code = entity[1].toLowerCase() === "x" ? parseInt(entity.slice(2), 16) : Number(entity.slice(1));
    return code > 0 && code <= 0x10ffff ? String.fromCodePoint(code) : all;
  }
  return { amp: "&", quot: '"', apos: "'", lt: "<", gt: ">", nbsp: " " }[entity.toLowerCase()] ?? all;
});
const text = (value) => decode(value.replace(/<[^>]*>/g, "")).replace(/\s+/g, " ").trim();
function attributes(tag) {
  const result = {};
  for (const match of tag.matchAll(/([^\s=<>"'`]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s<>"'`]+)))?/g)) {
    result[match[1].toLowerCase()] = decode(match[2] ?? match[3] ?? match[4] ?? "");
  }
  return result;
}
async function files(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map((entry) => entry.isDirectory() ? files(join(directory, entry.name)) : [join(directory, entry.name)]));
  return nested.flat();
}
async function pool(items, work, concurrency = 4) {
  let next = 0;
  await Promise.all(Array.from({ length: Math.min(concurrency, items.length) }, async () => {
    while (next < items.length) await work(items[next++]);
  }));
}
const responses = new Map();
async function get(path) {
  if (!responses.has(path)) {
    responses.set(path, (async () => {
      try {
        const response = await fetch(new URL(path, base), {
          redirect: "manual",
          signal: AbortSignal.timeout(20000),
          headers: { "user-agent": "Kingpin-SEO-Audit/1.0" },
        });
        return { status: response.status, body: await response.text(), headers: response.headers };
      } catch (error) {
        fail(`${path}: request failed (${error.message})`);
        return null;
      }
    })());
  }
  return responses.get(path);
}
function absolute(value, label) {
  try {
    const url = new URL(value);
    if (url.protocol !== "https:") fail(`${label}: expected an absolute HTTPS URL, got ${value}`);
    return url;
  } catch {
    fail(`${label}: invalid absolute URL ${JSON.stringify(value)}`);
    return null;
  }
}

const app = join(root, "src", "app");
const expected = new Set();
for (const file of await files(app)) {
  if (!/^page\.(?:tsx?|jsx?)$/.test(file.split(sep).at(-1))) continue;
  const parts = relative(app, dirname(file)).split(sep).filter(Boolean);
  if (parts.some((part) => part.includes("[") || part.startsWith("@"))) continue;
  const path = normalizePath(`/${parts.filter((part) => !part.startsWith("(")).join("/")}`);
  if (!excluded(path)) expected.add(path);
}
const suburbSource = await readFile(join(root, "src", "lib", "suburbs.ts"), "utf8");
const slugs = [...suburbSource.matchAll(/^\s*slug:\s*["']([^"']+)["']/gm)].map((match) => match[1]);
if (!slugs.length) fail("Source inventory: no suburb slugs found.");
if (new Set(slugs).size !== slugs.length) fail("Source inventory: duplicate suburb slugs.");
for (const slug of slugs) expected.add(`/service-areas/${slug}`);
console.log(`Auditing ${expected.size} public pages (${slugs.length} suburbs) at ${base.origin}`);

const sitemap = await get("/sitemap.xml");
const sitemapPaths = new Set();
if (sitemap) {
  if (sitemap.status !== 200) fail(`/sitemap.xml: expected 200, got ${sitemap.status}`);
  if (!/<urlset\b[^>]*xmlns=["']http:\/\/www\.sitemaps\.org\/schemas\/sitemap\/0\.9["']/.test(sitemap.body)) fail("Sitemap: missing standard urlset namespace.");
  if (!/xml/i.test(sitemap.headers.get("content-type") ?? "")) fail("Sitemap: content type is not XML.");
  const locations = [...sitemap.body.matchAll(/<loc>\s*([^<]+)\s*<\/loc>/g)].map((match) => decode(match[1].trim()));
  if (new Set(locations).size !== locations.length) fail("Sitemap: duplicate URLs.");
  for (const location of locations) {
    const url = absolute(location, "Sitemap URL");
    if (!url) continue;
    const path = normalizePath(url.pathname);
    if (url.origin !== canonicalOrigin || location !== expectedUrl(path)) fail(`Sitemap: noncanonical URL ${location}`);
    if (url.search || url.hash) fail(`Sitemap: query or fragment in ${location}`);
    if (excluded(path)) fail(`Sitemap: excluded route present ${path}`);
    sitemapPaths.add(path);
  }
  for (const path of expected) if (!sitemapPaths.has(path)) fail(`Sitemap: missing ${path}`);
  for (const path of sitemapPaths) if (!expected.has(path)) fail(`Sitemap: unexpected route ${path}`);
}

function robotGroups(body) {
  const groups = [];
  let group = null;
  for (const raw of body.split(/\r?\n/)) {
    const line = raw.replace(/#.*/, "").trim();
    const colon = line.indexOf(":");
    if (colon < 0) continue;
    const key = line.slice(0, colon).trim().toLowerCase();
    const value = line.slice(colon + 1).trim();
    if (key === "user-agent") {
      if (!group || group.rules.length) { group = { agents: [], rules: [] }; groups.push(group); }
      group.agents.push(value.toLowerCase());
    } else if (group && (key === "allow" || key === "disallow") && value) group.rules.push({ key, value });
  }
  return groups;
}
function robotsBlock(groups, path, agent) {
  const specific = groups.filter((group) => group.agents.some((value) => value !== "*" && agent.includes(value)));
  const selected = specific.length ? specific : groups.filter((group) => group.agents.includes("*"));
  const matches = selected.flatMap((group) => group.rules).filter(({ value }) => {
    const end = value.endsWith("$");
    const pattern = (end ? value.slice(0, -1) : value).split("*").map((part) => part.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join(".*");
    return new RegExp(`^${pattern}${end ? "$" : ""}`).test(path);
  }).sort((a, b) => b.value.replace(/\*/g, "").length - a.value.replace(/\*/g, "").length || (a.key === "allow" ? -1 : 1));
  return matches[0]?.key === "disallow";
}
const robots = await get("/robots.txt");
if (robots) {
  if (robots.status !== 200) fail(`/robots.txt: expected 200, got ${robots.status}`);
  const discoveries = [...robots.body.matchAll(/^sitemap:\s*(\S+)/gim)].map((match) => match[1]);
  if (!discoveries.includes(expectedUrl("/sitemap.xml"))) fail("robots.txt: missing canonical sitemap discovery URL.");
  const groups = robotGroups(robots.body);
  if (!groups.some((group) => group.agents.includes("*"))) fail("robots.txt: missing default crawler group.");
  for (const path of [...expected, "/thank-you"]) {
    for (const agent of ["googlebot", "bingbot", "*"]) {
      if (robotsBlock(groups, path, agent)) fail(`robots.txt: ${agent} cannot crawl ${path}${path === "/thank-you" ? " to read noindex" : ""}`);
    }
  }
}

const titles = new Map();
const descriptions = new Map();
const internalLinks = new Map();
const previewImages = new Set();
const businessIds = new Set();
const providerIds = new Set();
function unique(map, value, path, field) {
  if (!value) return;
  const key = value.toLowerCase();
  if (map.has(key)) fail(`${path}: duplicate ${field} with ${map.get(key)}`);
  else map.set(key, path);
}
function linkTarget(href, page) {
  if (!href || href.startsWith("#")) return;
  try {
    const url = new URL(href, expectedUrl(page));
    if (![canonicalOrigin, base.origin].includes(url.origin)) return;
    const path = normalizePath(url.pathname);
    if (/^\/(?:api|_next|images|videos|fonts)(?:\/|$)/.test(path) || /\.[a-z0-9]{2,8}$/i.test(path)) return;
    if (!internalLinks.has(path)) internalLinks.set(path, page);
  } catch { fail(`${page}: malformed internal link ${JSON.stringify(href)}`); }
}
function objects(value) {
  if (Array.isArray(value)) return value.flatMap(objects);
  if (!value || typeof value !== "object") return [];
  return [value, ...Object.values(value).flatMap(objects)];
}
function hasType(value, type) { return [value["@type"]].flat().includes(type); }
function auditSchema(html, path) {
  const nodes = [];
  for (const match of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
    if (attributes(match[1]).type?.toLowerCase() !== "application/ld+json") continue;
    try {
      const value = JSON.parse(match[2]);
      nodes.push(...objects(value));
      const roots = Array.isArray(value) ? value : [value];
      if (!roots.every((node) => node && typeof node === "object" && node["@context"])) fail(`${path}: JSON-LD root lacks @context.`);
    } catch (error) { fail(`${path}: invalid JSON-LD (${error.message})`); }
  }
  const businesses = nodes.filter((node) => hasType(node, "LocalBusiness"));
  if (path === "/" && !businesses.length) fail("/: missing LocalBusiness JSON-LD.");
  for (const business of businesses) {
    if (!business.name || !business.address) fail(`${path}: LocalBusiness requires name and address.`);
    if (business.address?.addressLocality !== "Wingfield") fail(`${path}: business address must remain the Wingfield workshop.`);
    if (!business["@id"]) fail(`${path}: LocalBusiness lacks stable @id.`);
    else { absolute(business["@id"], `${path} business @id`); businessIds.add(business["@id"]); }
  }
  const detail = /^\/service\//.test(path) || /^\/service-areas\//.test(path);
  const services = nodes.filter((node) => hasType(node, "Service"));
  if (detail && !services.length) fail(`${path}: missing Service JSON-LD.`);
  for (const service of services) {
    if (!service.name) fail(`${path}: Service lacks name.`);
    if (service.url !== expectedUrl(path)) fail(`${path}: Service URL does not match canonical.`);
    if (!service.provider?.["@id"]) fail(`${path}: Service provider lacks business @id.`);
    else providerIds.add(service.provider["@id"]);
  }
  const breadcrumbs = nodes.filter((node) => hasType(node, "BreadcrumbList"));
  if (detail && !breadcrumbs.length) fail(`${path}: missing BreadcrumbList JSON-LD.`);
  for (const breadcrumb of breadcrumbs) {
    const items = breadcrumb.itemListElement;
    if (!Array.isArray(items) || items.length < 2) { fail(`${path}: breadcrumb requires at least two items.`); continue; }
    items.forEach((item, index) => {
      if (!hasType(item, "ListItem") || item.position !== index + 1 || !item.name) fail(`${path}: malformed breadcrumb item ${index + 1}.`);
      const url = typeof item.item === "string" ? item.item : item.item?.["@id"];
      if (!url && index !== items.length - 1) fail(`${path}: breadcrumb item ${index + 1} lacks URL.`);
      if (url) { absolute(url, `${path} breadcrumb`); linkTarget(url, path); }
      if (index === items.length - 1 && url && url !== expectedUrl(path)) fail(`${path}: final breadcrumb URL differs from canonical.`);
    });
  }
}
async function auditPage(path) {
  const response = await get(path);
  if (!response) return;
  if (response.status !== 200) { fail(`${path}: expected 200, got ${response.status}`); return; }
  const html = response.body.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "").replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, "");
  const metas = [...html.matchAll(/<meta\b([^>]*)>/gi)].map((match) => attributes(match[1]));
  const meta = (name, required = true) => {
    const entries = metas.filter((entry) => (entry.name ?? entry.property)?.toLowerCase() === name);
    if (required && entries.length !== 1) fail(`${path}: expected one ${name}, found ${entries.length}`);
    const value = entries[0]?.content?.trim();
    if (required && !value) fail(`${path}: empty ${name}.`);
    return value;
  };
  const pageTitles = [...html.matchAll(/<title\b[^>]*>([\s\S]*?)<\/title>/gi)];
  if (pageTitles.length !== 1) fail(`${path}: expected one title, found ${pageTitles.length}`);
  const title = text(pageTitles[0]?.[1] ?? "");
  if (!title) fail(`${path}: empty title.`);
  const description = meta("description");
  unique(titles, title, path, "title");
  unique(descriptions, description, path, "description");
  const canonical = [...html.matchAll(/<link\b([^>]*)>/gi)].map((match) => attributes(match[1])).filter((entry) => entry.rel?.toLowerCase().split(/\s+/).includes("canonical"));
  if (canonical.length !== 1 || canonical[0]?.href !== expectedUrl(path)) fail(`${path}: expected canonical ${expectedUrl(path)}, got ${canonical.map((entry) => entry.href).join(", ") || "none"}`);
  if (meta("og:url") !== expectedUrl(path)) fail(`${path}: og:url differs from canonical.`);
  if (meta("og:title") !== title) fail(`${path}: og:title differs from page title.`);
  if (meta("og:description") !== description) fail(`${path}: og:description differs from description.`);
  if (meta("twitter:title") !== title) fail(`${path}: twitter:title differs from page title.`);
  if (meta("twitter:description") !== description) fail(`${path}: twitter:description differs from description.`);
  if (meta("twitter:card") !== "summary_large_image") fail(`${path}: twitter:card must be summary_large_image.`);
  for (const field of ["og:image", "twitter:image"]) {
    const url = absolute(meta(field), `${path} ${field}`);
    if (url?.origin === canonicalOrigin) previewImages.add(url.pathname);
  }
  const indexRules = metas.filter((entry) => ["robots", "googlebot"].includes(entry.name?.toLowerCase())).map((entry) => entry.content ?? "").join(",");
  if (/\bnoindex\b/i.test(indexRules) || /\bnoindex\b/i.test(response.headers.get("x-robots-tag") ?? "")) fail(`${path}: public route is noindex.`);
  const h1s = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)];
  if (h1s.length !== 1 || !text(h1s[0]?.[1] ?? "")) fail(`${path}: expected one nonempty h1, found ${h1s.length}`);
  for (const match of html.matchAll(/<img\b([^>]*)>/gi)) {
    const image = attributes(match[1]);
    if (!Object.hasOwn(image, "alt")) fail(`${path}: image lacks alt attribute (${image.src ?? "unknown source"}).`);
  }
  for (const match of html.matchAll(/<a\b([^>]*)>/gi)) linkTarget(attributes(match[1]).href, path);
  auditSchema(response.body, path);
}
await pool([...new Set([...expected, ...sitemapPaths])], auditPage);
if (businessIds.size !== 1) fail(`Schema: expected one stable business @id, found ${businessIds.size}.`);
for (const id of providerIds) if (!businessIds.has(id)) fail(`Schema: Service provider ${id} does not resolve to the business @id.`);

const thanks = await get("/thank-you");
if (thanks) {
  if (thanks.status !== 200) fail(`/thank-you: expected 200, got ${thanks.status}`);
  const tags = [...thanks.body.matchAll(/<meta\b([^>]*)>/gi)].map((match) => attributes(match[1]));
  if (!tags.some((tag) => tag.name?.toLowerCase() === "robots" && /\bnoindex\b/i.test(tag.content ?? "")) && !/\bnoindex\b/i.test(thanks.headers.get("x-robots-tag") ?? "")) fail("/thank-you: missing noindex directive.");
}
await pool(["/__seo-audit-missing-page__", "/service-areas/__seo-audit-missing-suburb__"], async (path) => {
  const response = await get(path);
  if (response && response.status !== 404) fail(`${path}: expected 404, got ${response.status}`);
});
await pool([...internalLinks], async ([path, source]) => {
  const response = await get(path);
  if (response && response.status !== 200) fail(`Internal link ${path} from ${source}: expected 200, got ${response.status}`);
});
await pool([...previewImages], async (path) => {
  const response = await get(path);
  if (response && (response.status !== 200 || !/^image\//i.test(response.headers.get("content-type") ?? ""))) fail(`Social preview ${path}: expected an accessible image, got ${response.status} ${response.headers.get("content-type")}`);
});
if (["localhost", "127.0.0.1"].includes(base.hostname)) {
  // Fetch may normalize the Host header; use Node HTTP to test virtual hosting.
  const response = await new Promise((resolve, reject) => {
    const request = (base.protocol === "https:" ? getHttps : getHttp)(
      new URL("/contact?source=seo-audit", base),
      { headers: { host: "kingpinengineering.com.au" } },
      (result) => {
        result.resume();
        resolve({ status: result.statusCode, location: result.headers.location });
      },
    );
    request.setTimeout(20000, () => request.destroy(new Error("Redirect check timed out")));
    request.on("error", reject);
  });
  if (response.status !== 308 || response.location !== `${canonicalOrigin}/contact?source=seo-audit`) {
    fail("Apex host must permanently redirect to www and preserve the path and query.");
  }
}
if (failures.size) {
  console.error(`\nSEO audit failed with ${failures.size} issue(s):`);
  for (const message of [...failures].sort()) console.error(`- ${message}`);
  process.exitCode = 1;
} else console.log(`SEO audit passed: ${expected.size} public pages, ${slugs.length} suburbs, ${internalLinks.size} internal link targets, sitemap, robots, previews, noindex and 404 checks.`);
