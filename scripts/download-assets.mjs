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
