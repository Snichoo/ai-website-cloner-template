import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const videos = [
  {
    src: "public/videos/testimonial-0520.mp4",
    out: "public/videos/testimonial-0520.jpg",
    seek: "00:00:04",
  },
];

for (const { src, out, seek } of videos) {
  const srcAbs = resolve(root, src);
  const outAbs = resolve(root, out);

  if (!existsSync(srcAbs)) {
    console.warn(`skip: ${src} not found`);
    continue;
  }

  console.log(`extracting frame @ ${seek}: ${src} -> ${out}`);
  execFileSync(
    "ffmpeg",
    ["-ss", seek, "-i", srcAbs, "-frames:v", "1", "-q:v", "2", "-update", "1", outAbs, "-y"],
    { stdio: "inherit" },
  );
}
