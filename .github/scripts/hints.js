const fs = require('fs');
const path = require('path');

const hwId = 'hw01';
const hintLevel = process.env.HINT_LEVEL;

const hints = {
  '1': '💡 Nézd meg újra a 2. óra diasorát – különösen a commit üzenetek konvencióit (feat:, docs:, chore:)!',
  '2': '💡 Ellenőrizd: a README.md tartalmaz-e 3 külön szakaszt? A .gitignore-ban szerepel-e a node_modules/ sor?',
  '3': "💡 Legalább 2 különböző commitot várunk el, mindkettőnek értelmes üzenettel. Pl.: 'docs: add bio to README' és 'chore: add .gitignore'.",
};

const hintText = hints[hintLevel];
if (!hintText) {
  console.error(`Ismeretlen hint szint: ${hintLevel}`);
  process.exit(1);
}

// Read hints-usage.json
let hintsData;
try {
  const raw = fs.readFileSync(path.join(process.cwd(), 'hints-usage.json'), 'utf8');
  hintsData = JSON.parse(raw);
} catch {
  hintsData = {};
}

// Increment usage counter
if (!hintsData[hwId]) {
  hintsData[hwId] = { usedHints: 0 };
}
hintsData[hwId].usedHints += 1;

// Append hint to GitHub Step Summary
const summary = `## 💡 Hint ${hintLevel} – 1. házi\n\n${hintText}\n\n> Felhasznált hintek száma: ${hintsData[hwId].usedHints}\n`;
fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, summary);

// Write updated hints-usage.json
fs.writeFileSync(
  path.join(process.cwd(), 'hints-usage.json'),
  JSON.stringify(hintsData, null, 2)
);

console.log(`Hint ${hintLevel} megjelenítve. Összes felhasznált hint (${hwId}): ${hintsData[hwId].usedHints}`);
