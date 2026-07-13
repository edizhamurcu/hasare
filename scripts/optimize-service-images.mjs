#!/usr/bin/env node
/**
 * Hizmet görselleri → responsive WebP (384 / 640 / 768 px genişlik)
 * Çalıştır: npm run optimize:images
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const SERVICES_DIR = path.join(ROOT, "public/images/services");
const WIDTHS = [384, 640, 768];
const QUALITY = 62;

const SKIP = /^(pexels-test|t\d+|firin-source)\.jpg$/;

function isServiceJpg(name) {
  if (!name.endsWith(".jpg") || SKIP.test(name)) return false;
  return name.endsWith("-ilaclama.jpg") || name === "dezenfeksiyon.jpg";
}

async function optimizeOne(file) {
  const slug = file.replace(/\.jpg$/, "");
  const input = path.join(SERVICES_DIR, file);
  const meta = await sharp(input).metadata();

  for (const width of WIDTHS) {
    const outName = `${slug}-${width}.webp`;
    const output = path.join(SERVICES_DIR, outName);
    const targetW = Math.min(width, meta.width ?? width);

    await sharp(input)
      .resize({ width: targetW, withoutEnlargement: true })
      .webp({ quality: QUALITY, effort: 4 })
      .toFile(output);

    const stat = fs.statSync(output);
    console.log(`  ${outName} (${(stat.size / 1024).toFixed(1)} KiB)`);
  }
}

async function main() {
  const files = fs.readdirSync(SERVICES_DIR).filter(isServiceJpg).sort();
  if (files.length === 0) {
    console.log("No service JPG files found.");
    return;
  }

  console.log(`Optimizing ${files.length} service images → WebP @ ${WIDTHS.join(", ")}px`);
  for (const file of files) {
    console.log(file);
    await optimizeOne(file);
  }
  console.log("Done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
