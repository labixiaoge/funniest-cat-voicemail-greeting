// Funniest Cat Voicemail Greeting — program/v1 entry (Node 22).
// Writes a single one-line cat voicemail greeting to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
// The file holds exactly the greeting: one line, 117 characters, nothing else.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const greeting =
  "You've reached Mochi. It's 4 a.m., my bowl is empty. This is now a hostage negotiation. Leave a message. I'll eat it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), greeting, "utf8");
// Verify what was actually written: re-read and compare byte for byte.
const written = readFileSync(join(outDir, "entry.txt"), "utf8");
if (written !== greeting) {
  throw new Error("verification failed: entry.txt does not match the greeting");
}
