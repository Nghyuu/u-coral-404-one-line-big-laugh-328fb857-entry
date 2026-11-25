// One Line, Big Laugh — writes a single funny line to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Node stdlib only. Writes ONLY to MAKEFUN_OUTPUT_DIR; throws if it is unset
// (never falls back to ./output). Output is chmodded 0644 so the grader,
// collecting /output as another user, can read it.

import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const line =
  "I asked my GPS for the fastest route to happiness; it recalculated for forty minutes, then told me to turn around at the next childhood trauma.";

mkdirSync(outDir, { recursive: true });
const entryPath = join(outDir, "entry.txt");
writeFileSync(entryPath, line, "utf8");
chmodSync(entryPath, 0o644);
