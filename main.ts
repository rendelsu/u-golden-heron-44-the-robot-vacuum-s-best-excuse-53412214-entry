// The Robot Vacuum's Best Excuse — make.fun entry (r1, revised)
// Writes one line: a robot vacuum's excuse for missing a spot.
// Gate: /output/entry.txt, UTF-8, 1-140 chars, single line.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "I missed that spot because my lidar saw a dust bunny, classified it as furniture, and I do not move furniture.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
