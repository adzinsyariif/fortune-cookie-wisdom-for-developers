import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One original fortune-cookie line for a software developer.
// Revised: name the thing ("legacy code"), sharpen the mirror
// ("exactly like you"), and tighten the ending so the whole line
// lands in a single breath.
const ENTRY =
  "The legacy code you curse was written by someone exactly like you, in a hurry to ship by Friday.";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
