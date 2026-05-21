import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const videos = [
  { src: "public/videos/testimonial-0520.mp4", out: "public/videos/testimonial-0520.jpg" },
];

for (const { src, out } of videos) {
  const srcAbs = resolve(root, src);
  const outAbs = resolve(root, out);

  if (!existsSync(srcAbs)) {
    console.warn(`skip: ${src} not found`);
    continue;
  }
  if (existsSync(outAbs)) {
    console.log(`skip: ${out} already exists`);
    continue;
  }

  console.log(`extracting first frame: ${src} -> ${out}`);
  execFileSync(
    "ffmpeg",
    ["-i", srcAbs, "-frames:v", "1", "-q:v", "2", "-update", "1", outAbs, "-y"],
    { stdio: "inherit" },
  );
}
