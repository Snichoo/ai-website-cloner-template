import { readFile, mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "public", "images");

const manifest = JSON.parse(
  await readFile(path.join(__dirname, "assets.json"), "utf8")
);

await mkdir(outDir, { recursive: true });

async function download({ name, url }) {
  try {
    const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(path.join(outDir, name), buf);
    return { name, ok: true, size: buf.length };
  } catch (err) {
    return { name, ok: false, error: String(err) };
  }
}

// batched parallel downloads (4 at a time)
const results = [];
for (let i = 0; i < manifest.length; i += 4) {
  const batch = manifest.slice(i, i + 4);
  results.push(...(await Promise.all(batch.map(download))));
}

const ok = results.filter((r) => r.ok);
const failed = results.filter((r) => !r.ok);
console.log(`Downloaded ${ok.length}/${results.length} assets to public/images`);
if (failed.length) {
  console.log("FAILED:");
  failed.forEach((f) => console.log(`  ${f.name}: ${f.error}`));
}
