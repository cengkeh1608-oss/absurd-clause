import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Section 14: You waive your right to a trial by jury, and accept instead a trial by three (3) raccoons in a small claims court.";

// Gate from RULES.txt: entry must be 1 to 200 characters, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry length ${ENTRY.length} is outside the 1-200 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
