import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const src = process.env.ICON_SRC ??
  resolve(
    process.env.USERPROFILE ?? process.env.HOME ?? "",
    "Downloads",
    "OpenAI Playground 2026-05-21 at 23.15.00 (0).png",
  );

if (!existsSync(src)) {
  console.error(`source not found: ${src}`);
  process.exit(1);
}

// Source image is 1426 x 1103 with four icons in a 2x2 grid.
// Icons aren't perfectly centered in their quadrants — they cluster toward
// the middle of the image — so each crop window is tuned by hand around the
// visible icon center.
const SIZE = 500;
const tiles = [
  // top-left: flame + money
  { out: "public/images/icons/problem/wasted-spend-v2.png", cx: 460, cy: 320 },
  // top-right: magnet + person
  { out: "public/images/icons/problem/unqualified-leads-v2.png", cx: 970, cy: 320 },
  // bottom-left: funnel
  { out: "public/images/icons/problem/not-converting-v2.png", cx: 440, cy: 790 },
  // bottom-right: magnifying glass + bar chart
  { out: "public/images/icons/problem/not-ranking-v2.png", cx: 1040, cy: 780 },
];

for (const { out, cx, cy } of tiles) {
  const outAbs = resolve(root, out);
  const x = cx - SIZE / 2;
  const y = cy - SIZE / 2;
  console.log(`crop ${SIZE}x${SIZE} @ (${x},${y}) -> ${out}`);
  execFileSync(
    "ffmpeg",
    [
      "-i", src,
      "-vf", `crop=${SIZE}:${SIZE}:${x}:${y}`,
      "-frames:v", "1",
      "-update", "1",
      outAbs,
      "-y",
    ],
    { stdio: ["ignore", "ignore", "inherit"] },
  );
}
