const fs = require('fs');
const path = require('path');

// Load all skill databases
const completeSkills = JSON.parse(fs.readFileSync(path.join(__dirname, '../03-data/COMPLETE_SKILL_DATABASE.json'), 'utf8'));
const fusedSkills = JSON.parse(fs.readFileSync(path.join(__dirname, '../03-data/FUSED_SKILLS_DATABASE.json'), 'utf8'));

// Extract all unique keywords
const allKeywords = new Set();

// From complete skills
completeSkills.skills.forEach(skill => {
    if (skill.keywords && Array.isArray(skill.keywords)) {
        skill.keywords.forEach(kw => allKeywords.add(kw));
    }
});

// From fused skills
fusedSkills.fusions.forEach(skill => {
    if (skill.keywords && Array.isArray(skill.keywords)) {
        skill.keywords.forEach(kw => allKeywords.add(kw));
    }
});

// Convert to sorted array
const sortedKeywords = Array.from(allKeywords).sort();

console.log('═══════════════════════════════════════════════════════');
console.log(`TOTAL UNIQUE KEYWORDS FOUND: ${sortedKeywords.length}`);
console.log('═══════════════════════════════════════════════════════\n');

// Group by first letter
const grouped = {};
sortedKeywords.forEach(kw => {
    const firstLetter = kw[0].toUpperCase();
    if (!grouped[firstLetter]) grouped[firstLetter] = [];
    grouped[firstLetter].push(kw);
});

Object.keys(grouped).sort().forEach(letter => {
    console.log(`\n${letter} (${grouped[letter].length} keywords):`);
    console.log(grouped[letter].join(', '));
});

// Save to file
const output = {
    totalCount: sortedKeywords.length,
    keywords: sortedKeywords,
    grouped: grouped
};

fs.writeFileSync(
    path.join(__dirname, '../workshop-visualization-demo/all-keywords-extracted.json'),
    JSON.stringify(output, null, 2)
);

console.log('\n═══════════════════════════════════════════════════════');
console.log('✅ Saved to: workshop-visualization-demo/all-keywords-extracted.json');
console.log('═══════════════════════════════════════════════════════');
