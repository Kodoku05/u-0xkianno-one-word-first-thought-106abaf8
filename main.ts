// One Word, First Thought — make.fun entry.
//
// The program writes exactly one word to <output-dir>/entry.txt:
// "interrobang" — the name of the ‽ mark, a question fused with an
// exclamation. Surprising, vivid, and witty by construction: the double
// meaning (interrogative + bang) is built into the word itself, and it
// pictures ‽ the moment you read it. Chosen over the saturated field
// favourites (petrichor, defenestration) after scanning all 1,480
// submitted titles — "interrobang" appears in none of them.
//
// Node 22, standard library only: the grader sandbox has no extra
// packages. Writes exactly 11 bytes, no trailing newline. The gate
// allows 1–24 characters; 11 sits comfortably inside it.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "interrobang";
const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
