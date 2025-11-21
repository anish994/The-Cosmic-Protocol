
const { SkillDatabase_v2 } = require('./World_Bible_folder/engines/SkillDatabase_v2');
const { CombatEngine } = require('./World_Bible_folder/engines/CombatEngine');

async function runCombatDemo() {
    console.log("═══════════════════════════════════════════════════════════════");
    console.log("COMBAT ENGINE DEMO: SKILL INTERACTION & REACTIONS");
    console.log("═══════════════════════════════════════════════════════════════\n");

    // 1. Setup
    const skillDB = new SkillDatabase_v2();
    const combat = new CombatEngine();

    // 2. Create Entities
    const player = {
        name: "Player (Mage)",
        stats: { intelligence: 20 }
    };

    const dummy = {
        name: "Training Dummy",
        hp: 100,
        maxHp: 100,
        tags: ["WOOD", "CONSTRUCT"],
        statusEffects: {}
    };

    const iceGolem = {
        name: "Ice Golem",
        hp: 150,
        maxHp: 150,
        tags: ["ICE", "ELEMENTAL"],
        statusEffects: {}
    };

    // 3. Scenario A: Basic Combo (Void -> Void)
    console.log("\n--- SCENARIO A: VOID RESONANCE ---");
    const voidStrike = skillDB.getSkill('skill_void_strike');
    
    // Cast 1: Apply Void Touched
    combat.executeSkill(player, dummy, voidStrike);
    
    // Cast 2: Trigger Reality Tear
    console.log("...Player casts again...");
    combat.executeSkill(player, dummy, voidStrike);


    // 4. Scenario B: Elemental Reaction (Melt)
    console.log("\n--- SCENARIO B: MELT REACTION (Fire vs Ice) ---");
    const solarFlare = skillDB.getSkill('skill_solar_flare');
    
    combat.executeSkill(player, iceGolem, solarFlare);


    // 5. Scenario C: Shatter Combo (Freeze -> Physical)
    console.log("\n--- SCENARIO C: SHATTER COMBO (Ice -> Physical) ---");
    const cryoStasis = skillDB.getSkill('skill_cryo_stasis'); // Note: In DB this is Self-cast, let's mock a freeze skill or use Glacial Spike
    const glacialSpike = skillDB.getSkill('skill_glacial_spike'); // Applies damage, maybe we need a pure freeze first?
    
    // Let's manually apply FROZEN for the test since we don't have a pure freeze skill in the basic set yet
    // Or we can use Glacial Spike if we update it to freeze.
    // Actually, let's use the CombatEngine's _applyStatus directly to simulate a setup.
    console.log("(Setup: Applying FROZEN status manually)");
    combat._applyStatus(dummy, 'FROZEN', 3);
    
    const thornWhip = skillDB.getSkill('skill_thorn_whip'); // Physical
    combat.executeSkill(player, dummy, thornWhip);

    console.log("\n═══════════════════════════════════════════════════════════════");
    console.log("DEMO COMPLETE");
    console.log("═══════════════════════════════════════════════════════════════");
}

runCombatDemo().catch(console.error);
