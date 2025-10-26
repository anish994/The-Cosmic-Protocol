// 🔧 Complete Invocation Parser V3 - All 237 Entities
// Parses v3 complete Invocation data (Angels, Demons, and full Pantheons)

const fs = require('fs');

function parseV3Invocation() {
    const allEntities = [];
    
    // Load main invocation file (Angels + Demons)
    const mainPath = '../03-data/old-data-v3/invocation_pantheon_v3.json';
    const main = JSON.parse(fs.readFileSync(mainPath, 'utf8'));
    
    // Parse Angels
    for (const angel of main.theurgic_host.angels) {
        allEntities.push({
            id: `SKILL_INVOCATION_ANGEL_${angel.id}`,
            number: angel.rank,
            name: angel.name,
            engine: 'Invocation',
            category: 'Theurgic Host',
            pillar: 'Theurgy',
            rank: angel.choir,
            tier: 2,
            tierValue: 2,
            cost: angel.cost,
            cooldown: 6,
            effect: angel.effect,
            keywords: angel.keywords,
            themes: ['divine', 'sanctity', 'support'],
            powerScore: 60 + (angel.rank % 10) * 3,
            isFused: false,
            fusionDepth: 0,
            fusionIngredients: [],
            source: 'Invocation v3.0 Complete',
            lore: angel.lore,
            resonance: angel.resonance_req,
            jyotish: angel.jyotish_gravity
        });
    }
    
    // Parse Demons
    for (const demon of main.goetic_legions.demons) {
        allEntities.push({
            id: `SKILL_INVOCATION_DEMON_${demon.id}`,
            number: demon.rank,
            name: demon.name,
            engine: 'Invocation',
            category: 'Goetic Legions',
            pillar: 'Goetia',
            rank: demon.legion,
            tier: 2,
            tierValue: 2,
            cost: demon.cost,
            cooldown: 6,
            effect: demon.effect,
            keywords: demon.keywords,
            themes: ['demonic', 'anarchy', 'offense'],
            powerScore: 65 + (demon.rank % 10) * 3,
            isFused: false,
            fusionDepth: 0,
            fusionIngredients: [],
            source: 'Invocation v3.0 Complete',
            lore: demon.lore,
            resonance: demon.resonance_req,
            jyotish: demon.jyotish_gravity
        });
    }
    
    // Load and parse Vedic pantheon
    const vedicPath = '../03-data/old-data-v3/divine_pantheons_vedic_v3.json';
    const vedic = JSON.parse(fs.readFileSync(vedicPath, 'utf8'));
    
    for (const deity of vedic.entities) {
        allEntities.push({
            id: `SKILL_INVOCATION_VEDIC_${deity.id}`,
            number: parseInt(deity.id.split('_')[1]),
            name: deity.name,
            engine: 'Invocation',
            category: 'Vedic Pantheon',
            pillar: 'Divine Pantheon',
            rank: 'Deva',
            tier: 3,
            tierValue: 3,
            cost: deity.cost,
            cooldown: 7,
            effect: deity.effect,
            keywords: deity.keywords,
            themes: ['vedic', 'divine', 'dharma'],
            powerScore: 70 + (parseInt(deity.id.split('_')[1]) % 10) * 2,
            isFused: false,
            fusionDepth: 0,
            fusionIngredients: [],
            source: 'Invocation v3.0 Complete',
            lore: deity.lore,
            domain: deity.domain,
            resonance: deity.resonance_req,
            jyotish: deity.jyotish_gravity
        });
    }
    
    // Load and parse Norse pantheon
    const norsePath = '../03-data/old-data-v3/divine_pantheons_norse_v3.json';
    const norse = JSON.parse(fs.readFileSync(norsePath, 'utf8'));
    
    for (const deity of norse.entities) {
        allEntities.push({
            id: `SKILL_INVOCATION_NORSE_${deity.id}`,
            number: parseInt(deity.id.split('_')[1]),
            name: deity.name,
            engine: 'Invocation',
            category: 'Norse Pantheon',
            pillar: 'Divine Pantheon',
            rank: deity.hall || 'Aesir',
            tier: 3,
            tierValue: 3,
            cost: deity.cost,
            cooldown: 7,
            effect: deity.effect,
            keywords: deity.keywords,
            themes: ['norse', 'wild', 'ancient'],
            powerScore: 72 + (parseInt(deity.id.split('_')[1]) % 10) * 2,
            isFused: false,
            fusionDepth: 0,
            fusionIngredients: [],
            source: 'Invocation v3.0 Complete',
            lore: deity.lore,
            domain: deity.domain,
            resonance: deity.resonance_req,
            jyotish: deity.jyotish_gravity
        });
    }
    
    // Load and parse Egyptian pantheon
    const egyptianPath = '../03-data/old-data-v3/divine_pantheons_egyptian_v3.json';
    const egyptian = JSON.parse(fs.readFileSync(egyptianPath, 'utf8'));
    
    for (const deity of egyptian.entities) {
        allEntities.push({
            id: `SKILL_INVOCATION_EGYPTIAN_${deity.id}`,
            number: parseInt(deity.id.split('_')[1]),
            name: deity.name,
            engine: 'Invocation',
            category: 'Egyptian Pantheon',
            pillar: 'Divine Pantheon',
            rank: 'Neteru',
            tier: 3,
            tierValue: 3,
            cost: deity.cost,
            cooldown: 7,
            effect: deity.effect,
            keywords: deity.keywords,
            themes: ['egyptian', 'ancient', 'desert'],
            powerScore: 68 + (parseInt(deity.id.split('_')[1]) % 10) * 2,
            isFused: false,
            fusionDepth: 0,
            fusionIngredients: [],
            source: 'Invocation v3.0 Complete',
            lore: deity.lore,
            domain: deity.domain,
            resonance: deity.resonance_req,
            jyotish: deity.jyotish_gravity
        });
    }
    
    return allEntities;
}

// Main execution
console.log("🔧 Starting Complete Invocation Parser V3...\\n");

const allEntities = parseV3Invocation();

// Count breakdown
const breakdown = {};
for (const entity of allEntities) {
    if (!breakdown[entity.category]) {
        breakdown[entity.category] = 0;
    }
    breakdown[entity.category]++;
}

console.log("✅ Parsed Complete Invocation Entities:\\n");
for (const [category, count] of Object.entries(breakdown)) {
    console.log(`   ${category}: ${count} entities`);
}
console.log(`\\n   TOTAL: ${allEntities.length} entities\\n`);

// Save output
const output = {
    version: '3.0 COMPLETE',
    totalEntities: allEntities.length,
    categories: breakdown,
    entities: allEntities
};

const outputPath = '../03-data/invocation_entities_v3_complete.json';
fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));

console.log(`💾 Saved ${allEntities.length} complete Invocation entities to:`);
console.log(`   ${outputPath}\\n`);
console.log("✅ Complete Invocation Parse Ready for Merge!");
