// Script to convert COMPLETE_SKILL_DATABASE.json to demo format
// Run this in Node.js to generate the full skills data

const fs = require('fs');
const path = require('path');

// Read the complete database
const dbPath = path.join(__dirname, '..', '..', '03-data', 'COMPLETE_SKILL_DATABASE.json');
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

console.log(`📚 Loading ${db.totalSkills} skills...`);

// Engine mapping (database uses title case, we use lowercase with underscores)
const engineMap = {
    'Foundational': 'foundational',
    'Character Analysis': 'character_analysis',
    'Consciousness': 'consciousness',
    'Divination': 'divination',
    'Singularity': 'singularity',
    'Tantra': 'tantra',
    'Therapeutic': 'therapeutic',
    'Invocation': 'invocation'
};

// Convert skills to demo format
const convertedSkills = db.skills.map(skill => ({
    id: skill.id,
    name: skill.name,
    engine: engineMap[skill.engine] || skill.engine.toLowerCase().replace(/\s+/g, '_'),
    category: skill.category || 'General',
    tier: skill.tier || skill.tierValue || 0,
    cost: { kp: skill.cost?.kp || skill.cost?.gnosis / 10 || 1 },
    cooldown: skill.cooldown || 0,
    unlocked: true, // All skills unlocked for now
    description: skill.effect?.substring(0, 200) || skill.description || 'A powerful skill.',
    effects: extractEffects(skill.effect) || ['Effect description'],
    keywords: skill.keywords || [],
    powerScore: skill.powerScore || calculatePower(skill)
}));

// Extract effects from the long effect string
function extractEffects(effectStr) {
    if (!effectStr) return ['Unknown effect'];
    
    // Try to extract first sentence or bullet point
    const lines = effectStr.split(/\n|\\r\\n/).filter(l => l.trim());
    const firstLine = lines[0]?.replace(/\*\*/g, '').trim();
    
    if (firstLine && firstLine.length < 150) {
        return [firstLine];
    }
    
    return [effectStr.substring(0, 100) + '...'];
}

// Calculate power score if not present
function calculatePower(skill) {
    const tier = skill.tier || skill.tierValue || 0;
    const kp = skill.cost?.kp || 1;
    return Math.round((tier * 15) + (kp * 5) + (skill.cooldown || 0) * 3);
}

// Write to data.js format
const output = `// === 8 MAIN ENGINES ===
const ENGINES = [
    { id: "foundational", name: "Foundational", icon: "🏛️", color: "#8B7355" },
    { id: "character_analysis", name: "Character Analysis", icon: "🎭", color: "#9370DB" },
    { id: "consciousness", name: "Consciousness", icon: "👁️", color: "#00CED1" },
    { id: "divination", name: "Divination", icon: "🔮", color: "#9400D3" },
    { id: "singularity", name: "Singularity", icon: "⚡", color: "#FF6B6B" },
    { id: "tantra", name: "Tantra", icon: "🕉️", color: "#FF8C00" },
    { id: "therapeutic", name: "Therapeutic", icon: "🌿", color: "#32CD32" },
    { id: "invocation", name: "Invocation", icon: "✨", color: "#FFD700" }
];

// All ${convertedSkills.length} skills from complete database
const SAMPLE_SKILLS = ${JSON.stringify(convertedSkills, null, 2)};

// Tier display names
const TIER_NAMES = {
    0: "0",
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V"
};
`;

// Write output
const outputPath = path.join(__dirname, 'data-full.js');
fs.writeFileSync(outputPath, output, 'utf8');

console.log(`✅ Generated ${convertedSkills.length} skills`);
console.log(`📁 Saved to: ${outputPath}`);
console.log(`\n📊 Breakdown by engine:`);
Object.entries(db.engines).forEach(([engine, count]) => {
    console.log(`   ${engine}: ${count} skills`);
});
