const fs = require('fs');
const path = require('path');

const SOURCE_PATH = 'e:\\game1\\03-data\\COMPLETE_SKILL_DATABASE.json';
const OUTPUT_DIR = 'e:\\game1\\workshop\\data';

// Tier Mapping
const TIER_MAP = {
    1: "COMMON",
    2: "UNCOMMON",
    3: "RARE",
    4: "LEGENDARY",
    5: "MYTHIC"
};

function loadSourceData() {
    try {
        const rawData = fs.readFileSync(SOURCE_PATH, 'utf8');
        const json = JSON.parse(rawData);
        return json.skills;
    } catch (err) {
        console.error("Error reading source file:", err);
        process.exit(1);
    }
}

function transformSkill(sourceSkill) {
    // 1. ID Normalization
    const id = sourceSkill.id.toLowerCase();

    // 2. Type Determination
    const isPassive = sourceSkill.keywords.some(k => k.toLowerCase() === 'passive');
    const type = isPassive ? "PASSIVE" : "ACTIVE";

    // 3. Tier Mapping
    const tier = TIER_MAP[sourceSkill.tier] || "COMMON";

    // 4. Stats Construction
    // Heuristic: If keywords contain 'Heal', powerScore is heal, else damage.
    const isHealing = sourceSkill.keywords.some(k => k.toLowerCase() === 'heal' || k.toLowerCase() === 'healing');
    const stats = {
        cooldown: sourceSkill.cooldown || 0,
        cost: sourceSkill.cost ? sourceSkill.cost.gnosis : 0
    };
    
    if (isHealing) {
        stats.heal = sourceSkill.powerScore || 0;
    } else {
        stats.damage = sourceSkill.powerScore || 0;
    }

    // 5. Mastery Perk
    let masteryPerk = "Mastery Lvl 5: Enhanced potency.";
    if (sourceSkill.evolutions && sourceSkill.evolutions.A) {
        // Clean up the evolution text which sometimes has markdown artifacts
        masteryPerk = "Mastery Lvl 5: " + sourceSkill.evolutions.A.replace(/\*\*/g, '').trim();
    }

    // 6. Description Cleaning
    let description = sourceSkill.effect || "No description available.";
    // Remove markdown bolding for cleaner UI text if needed, or keep it. 
    // The workshop CSS handles some text, but let's keep it raw for now.

    return {
        id: id,
        name: sourceSkill.name,
        type: type,
        tier: tier,
        tags: sourceSkill.keywords.map(k => k.toUpperCase()),
        stats: stats,
        description: description,
        lore_quote: sourceSkill.note || `"A technique from the ${sourceSkill.engine} engine."`,
        tactical_brief: `Utilizes ${sourceSkill.engine} mechanics. ${sourceSkill.keywords.join(', ')}.`,
        mastery_perk: masteryPerk,
        gameplay_info: {
            usage: [`Cost: ${stats.cost} Gnosis`, `Cooldown: ${stats.cooldown} Turns`],
            features: sourceSkill.keywords
        },
        deep_data: {
            environment: `Resonates with ${sourceSkill.themes ? sourceSkill.themes.join(', ') : "latent energy"}.`,
            narrative: `Practitioners of ${sourceSkill.engine} use this to manipulate ${sourceSkill.themes ? sourceSkill.themes[0] : "reality"}.`,
            evolution: sourceSkill.evolutions && sourceSkill.evolutions.B ? 
                       `Potential evolution: ${sourceSkill.evolutions.B.split(':')[0].replace(/[\(\)\*]/g, '').trim()}` : 
                       "Evolution path hidden."
        },
        effects: [
            // Placeholder for effect parsing logic
            { 
                type: isHealing ? "HEAL" : "DAMAGE", 
                value: sourceSkill.powerScore || 0, 
                target: "SINGLE" 
            }
        ],
        narrative_triggers: {
            on_cast: `You channel the power of ${sourceSkill.engine}.`,
            on_hit: "The energy connects with the target.",
            environment: "RESONANCE"
        },
        // Keep original engine for filtering
        _engine: sourceSkill.engine
    };
}

function main() {
    console.log("Loading source data...");
    const skills = loadSourceData();
    console.log(`Loaded ${skills.length} skills.`);

    // Group by Engine
    const skillsByEngine = {};
    skills.forEach(skill => {
        const engine = skill.engine || "Unknown";
        if (!skillsByEngine[engine]) {
            skillsByEngine[engine] = [];
        }
        skillsByEngine[engine].push(transformSkill(skill));
    });

    // Write files
    if (!fs.existsSync(OUTPUT_DIR)){
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    for (const [engine, engineSkills] of Object.entries(skillsByEngine)) {
        const safeEngineName = engine.toLowerCase().replace(/[^a-z0-9]/g, '_');
        const fileName = `skills_${safeEngineName}.js`;
        const filePath = path.join(OUTPUT_DIR, fileName);

        const fileContent = `
// Auto-generated from COMPLETE_SKILL_DATABASE.json
// Engine: ${engine}
// Count: ${engineSkills.length}

window.SKILL_DB_${safeEngineName.toUpperCase()} = ${JSON.stringify(engineSkills, null, 4)};
`;

        fs.writeFileSync(filePath, fileContent);
        console.log(`Wrote ${engineSkills.length} skills to ${fileName}`);
    }

    console.log("Export complete.");
}

main();
