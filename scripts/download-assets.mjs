<<<<<<< HEAD
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
=======
// Download all mezcorp.co assets to public/
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const ASSETS = {
  images: [
    'https://framerusercontent.com/images/B3ilvSTOyP1RrbXyVnmPGEf79E0.jpg',
    'https://framerusercontent.com/images/LFoe0HLRJZfzdxJYFT9PtagdZg.jpg',
    'https://framerusercontent.com/images/UW5LY0Fq8eQyRpf8mjTa91Jc7W8.jpg',
    'https://framerusercontent.com/images/2mqKmETkLyaYQPb17LC8uSWjE.jpg',
    'https://framerusercontent.com/images/lbzyKiYqW7h1lE84ArAzu9SEPbc.png',
    'https://framerusercontent.com/images/ZVVBX7ScDPWwIB1NJ4musHwycqY.png',
    'https://framerusercontent.com/images/a8ps6lRTP1SSDEX2VlkMt7BiGVY.png',
    'https://framerusercontent.com/images/VcqwU56xIxPYExu0xegTTYVZ5Zk.png',
    'https://framerusercontent.com/images/I07B640gXvlMMY6xxdqlgLgoVZ0.png',
    'https://framerusercontent.com/images/hHB3hIhuDlZvhtfgaIYJVPmr0.png',
    'https://framerusercontent.com/images/OqYCZs3YTeMYsv09chb5KS0oCI.png',
    'https://framerusercontent.com/images/89xpOVyqbkonzexweAtFxDhz25Y.png',
    'https://framerusercontent.com/images/C1A7dnIP2tHmK4yb59cin4RnWg.png',
    'https://framerusercontent.com/images/LZ1XRCMwrWSSJnJlIVMETL4.png',
    'https://framerusercontent.com/images/vwrwO7Bl3ynJ0jWQJlSwuwU9Hio.png',
    'https://framerusercontent.com/images/hYgfHGMswUujELEDDCRCIf9vZk.png',
    'https://framerusercontent.com/images/x3sqVWGNUxQGfnASY78wBZbUP4.png',
    'https://framerusercontent.com/images/EWS9lht4oaYeaTXhLGyCIYw6SrU.png',
    'https://framerusercontent.com/images/f6GMfCZ8a6tfdRDgzsmW0jPi0s.jpg',
  ],
  videos: [
    'https://framerusercontent.com/assets/duDJJ4Z5LhUAgyi7Uj93YaTu5Nk.mp4',
    'https://framerusercontent.com/assets/tDauuGW9fU1t2R1F8mBnqaB4EWM.mp4',
    'https://framerusercontent.com/assets/MIdFxQzavPyFInquveYeshzc.mp4',
  ],
  seo: [
    'https://framerusercontent.com/images/uFHlyMT8XmNA9VsJAB4cHMYPSA.svg',
    'https://framerusercontent.com/images/hiUQKWzv2jJoum87Q6wgKyhruk.svg',
  ],
};

const ROOT = new URL('../public/', import.meta.url);

async function dl(url, outDir) {
  const filename = url.split('/').pop();
  const outPath = join(new URL(outDir, ROOT).pathname.slice(1), filename);
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    await mkdir(dirname(outPath), { recursive: true });
    await writeFile(outPath, buf);
    console.log(`OK ${filename} (${buf.length} bytes)`);
    return true;
  } catch (e) {
    console.error(`FAIL ${filename}: ${e.message}`);
    return false;
  }
}

async function batch(urls, outDir, size = 4) {
  for (let i = 0; i < urls.length; i += size) {
    await Promise.all(urls.slice(i, i + size).map(u => dl(u, outDir)));
  }
}

await batch(ASSETS.images, 'images/');
await batch(ASSETS.videos, 'videos/');
await batch(ASSETS.seo, 'seo/');
console.log('Done.');
>>>>>>> 8544f7810dd0a5551dc4ecd0c64f124e004e51b1
