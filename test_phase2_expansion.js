
const { SkillDatabase_v2 } = require('./World_Bible_folder/engines/SkillDatabase_v2');
const { FusionCalculator } = require('./World_Bible_folder/engines/FusionCalculator');
const { CardObject } = require('./World_Bible_folder/engines/CardObject');

async function testExpansion() {
    console.log("═══════════════════════════════════════════════════════════════");
    console.log("PHASE 2 EXPANSION: STORM & BLOOD VERIFICATION");
    console.log("═══════════════════════════════════════════════════════════════\n");

    // 1. Initialize
    const skillDB = new SkillDatabase_v2();
    const fusionCalc = new FusionCalculator(skillDB);

    // 2. Verify New Skills
    console.log("1. Verifying New Skills...");
    const thunder = skillDB.getSkill('skill_thunderclap');
    const lance = skillDB.getSkill('skill_crimson_lance');
    
    if (thunder && lance) {
        console.log(`✓ Loaded: ${thunder.name} (${thunder.tags.join(', ')})`);
        console.log(`✓ Loaded: ${lance.name} (${lance.tags.join(', ')})`);
    } else {
        console.error("❌ Failed to load new skills.");
        return;
    }

    // 3. Test Storm + Ice Fusion (Superconductor?)
    console.log("\n2. Testing Fusion: Storm + Ice (Thunderclap + Glacial Spike)...");
    const stormIce = fusionCalc.calculateFusion('skill_thunderclap', 'skill_glacial_spike');
    const card1 = new CardObject(stormIce);
    
    console.log(`Result: ${card1.name}`);
    console.log(`Tags: ${card1.tags.join(', ')}`);
    console.log(`Lore: "${card1.lore_quote}"`);
    console.log(`Tactics: ${card1.tactical_brief}`);

    // 4. Test Blood + Storm Fusion (Red Lightning?)
    console.log("\n3. Testing Fusion: Blood + Storm (Crimson Lance + Lightning Dash)...");
    const bloodStorm = fusionCalc.calculateFusion('skill_crimson_lance', 'skill_lightning_dash');
    const card2 = new CardObject(bloodStorm);
    
    console.log(`Result: ${card2.name}`);
    console.log(`Tags: ${card2.tags.join(', ')}`);
    console.log(`Lore: "${card2.lore_quote}"`);

    console.log("\n═══════════════════════════════════════════════════════════════");
    console.log("EXPANSION VERIFIED");
    console.log("═══════════════════════════════════════════════════════════════");
}

testExpansion().catch(console.error);
