const fs = require('fs');

// Read a small sample
const content = fs.readFileSync('../02-engines/updated engines blueprints/Foundational Engine v4.0 COMPLETE.txt', 'utf8');

console.log('Testing regex patterns...\n');

// Test pattern 1: Find all **SKILL headers
const skillHeaders = content.matchAll(/\*\*SKILL (\d+): ([^\*\n]+)\*\*/g);
let headerCount = 0;
for (const match of skillHeaders) {
    headerCount++;
    if (headerCount <= 5) {
        console.log(`Found skill ${match[1]}: ${match[2]}`);
    }
}
console.log(`\nTotal skill headers found: ${headerCount}\n`);

// Test pattern 2: Find code blocks
const codeBlocks = content.matchAll(/```([\s\S]*?)```/g);
let blockCount = 0;
for (const match of codeBlocks) {
    blockCount++;
}
console.log(`Total code blocks found: ${blockCount}\n`);

// Test pattern 3: Complete pattern (no \n after first```)
const fullPattern = /\*\*SKILL (\d+): ([^*\n]+)\*\*[\s\S]*?```([\s\S]*?)```/g;
const fullMatches = content.matchAll(fullPattern);
let fullCount = 0;
for (const match of fullMatches) {
    fullCount++;
    if (fullCount <= 3) {
        console.log(`\n=== Skill ${match[1]}: ${match[2]} ===`);
        console.log('Code block preview:');
        console.log(match[3].substring(0, 200) + '...');
    }
}
console.log(`\nTotal full matches found: ${fullCount}`);
