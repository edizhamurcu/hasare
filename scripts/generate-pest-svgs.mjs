import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";

const dir = join(process.cwd(), "public/images/services");
mkdirSync(dir, { recursive: true });

const pests = {
  "hamambocegi-ilaclama": `<ellipse cx="400" cy="420" rx="220" ry="140" fill="#5D4037"/><ellipse cx="400" cy="380" rx="180" ry="100" fill="#6D4C41"/><path d="M200 400 Q150 350 180 300" stroke="#5D4037" stroke-width="12" fill="none"/><path d="M600 400 Q650 350 620 300" stroke="#5D4037" stroke-width="12" fill="none"/>`,
  "fare-ilaclama": `<ellipse cx="400" cy="450" rx="200" ry="120" fill="#9E9E9E"/><circle cx="520" cy="380" r="70" fill="#BDBDBD"/><circle cx="540" cy="370" r="12" fill="#212121"/><path d="M200 450 Q120 430 100 400" stroke="#757575" stroke-width="16" fill="none"/>`,
  "karinca-ilaclama": `<ellipse cx="400" cy="500" rx="80" ry="50" fill="#E65100"/><ellipse cx="320" cy="420" rx="50" ry="35" fill="#EF6C00"/><ellipse cx="480" cy="420" rx="50" ry="35" fill="#EF6C00"/><ellipse cx="400" cy="340" rx="45" ry="40" fill="#F57C00"/><line x1="400" y1="300" x2="400" y2="200" stroke="#E65100" stroke-width="8"/>`,
  "sivrisinek-ilaclama": `<ellipse cx="400" cy="400" rx="30" ry="80" fill="#37474F"/><path d="M250 350 Q400 250 550 350" fill="#90A4AE" opacity="0.7"/><path d="M250 450 Q400 550 550 450" fill="#90A4AE" opacity="0.7"/><line x1="400" y1="320" x2="400" y2="180" stroke="#37474F" stroke-width="6"/>`,
  "bocek-ilaclama": `<ellipse cx="400" cy="450" rx="160" ry="100" fill="#1565C0"/><ellipse cx="400" cy="400" rx="120" ry="80" fill="#1976D2"/><line x1="280" y1="380" x2="180" y2="320" stroke="#1565C0" stroke-width="10"/><line x1="520" y1="380" x2="620" y2="320" stroke="#1565C0" stroke-width="10"/>`,
  "termit-ilaclama": `<rect x="200" y="350" width="400" height="200" fill="#8D6E63" rx="12"/><path d="M300 350 L350 250 L400 350" fill="#6D4C41"/><path d="M450 350 L500 250 L550 350" fill="#6D4C41"/>`,
  "akrep-ilaclama": `<ellipse cx="350" cy="450" rx="100" ry="60" fill="#5D4037"/><path d="M450 450 Q600 400 650 300 Q700 200 720 150" stroke="#4E342E" stroke-width="14" fill="none" stroke-linecap="round"/><path d="M250 450 Q100 400 50 300" stroke="#4E342E" stroke-width="10" fill="none"/>`,
  "dezenfeksiyon": `<rect x="340" y="280" width="120" height="280" rx="20" fill="#0277BD"/><rect x="360" y="200" width="80" height="100" rx="10" fill="#0288D1"/><path d="M400 180 Q500 120 550 200 Q600 280 400 240" fill="#B3E5FC" opacity="0.8"/>`,
  "ev-ilaclama": `<path d="M250 550 L400 350 L550 550 Z" fill="#66BB6A"/><rect x="290" y="550" width="220" height="180" fill="#81C784" rx="4"/><rect x="370" y="620" width="60" height="110" fill="#A5D6A7"/>`,
  "is-yeri-ilaclama": `<rect x="220" y="300" width="360" height="430" fill="#78909C" rx="8"/><rect x="260" y="340" width="80" height="60" fill="#B0BEC5"/><rect x="360" y="340" width="80" height="60" fill="#B0BEC5"/><rect x="460" y="340" width="80" height="60" fill="#B0BEC5"/>`,
  "hastane-ilaclama": `<rect x="250" y="350" width="300" height="380" fill="#ECEFF1" rx="8"/><rect x="360" y="280" width="80" height="80" fill="#EF5350" rx="8"/><path d="M385 310 L415 310 M400 295 L400 325" stroke="white" stroke-width="12"/>`,
  "okul-ilaclama": `<rect x="200" y="400" width="400" height="330" fill="#FFB74D" rx="6"/><polygon points="400,220 180,400 620,400" fill="#FF9800"/><rect x="350" y="480" width="100" height="120" fill="#FFE0B2"/>`,
  "fabrika-ilaclama": `<rect x="180" y="400" width="440" height="330" fill="#607D8B"/><rect x="320" y="250" width="60" height="150" fill="#90A4AE"/><rect x="420" y="200" width="60" height="200" fill="#90A4AE"/><ellipse cx="350" cy="230" rx="25" ry="15" fill="#CFD8DC" opacity="0.6"/>`,
  "firin-ilaclama": `<ellipse cx="400" cy="480" rx="180" ry="100" fill="#D7CCC8"/><ellipse cx="400" cy="450" rx="150" ry="70" fill="#A1887F"/><rect x="280" y="300" width="240" height="80" fill="#8D6E63" rx="8"/>`,
  "gemi-ilaclama": `<path d="M150 550 L650 550 L600 420 L200 420 Z" fill="#455A64"/><rect x="350" y="280" width="100" height="140" fill="#546E7A"/><line x1="400" y1="200" x2="400" y2="280" stroke="#78909C" stroke-width="8"/>`,
};

const wrap = (body) => `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" role="img">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#f0fdf4"/>
      <stop offset="100%" stop-color="#dcfce7"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#g)"/>
  ${body}
</svg>`;

for (const [slug, body] of Object.entries(pests)) {
  writeFileSync(join(dir, `${slug}.svg`), wrap(body));
  console.log("wrote", slug);
}
