// news-image-20261117 — entry program (Node 22, standard library only).
//
// The entry is the PNG beside this file: a hand-drawn infographic summing up
// Tuesday 17 November 2026 in six verified stories (US strikes on Iran /
// Hormuz shipping, the Crimean Bridge, the US losing measles elimination
// status, Wall Street falling while Nvidia beat, Trump's Asia tour, and
// Gaza's winter shelter crisis). The image is drawn at build time, so this
// program only has to place the exact bytes at the output path.
//
// Deterministic by construction: the same input file is copied, byte for
// byte, on every run, so two runs always write identical output. Nothing
// here reads the network, the clock, or any environment besides the output
// directory above.
//
// Run locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(
  new URL('./entry.png', import.meta.url),
  join(outDir, 'entry.png'),
);
