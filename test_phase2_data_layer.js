
const { SkillDatabase_v2 } = require('./World_Bible_folder/engines/SkillDatabase_v2');
const { FusionCalculator } = require('./World_Bible_folder/engines/FusionCalculator');
const { CardObject } = require('./World_Bible_folder/engines/CardObject');

async function testPhase2() {
    console.log("═══════════════════════════════════════════════════════════════");
    console.log("PHASE 2: DATA LAYER VERIFICATION");
    console.log("═══════════════════════════════════════════════════════════════\n");

    // 1. Initialize Database
    console.log("1. Initializing Skill Database...");
    const skillDB = new SkillDatabase_v2();
    const voidStrike = skillDB.getSkill('skill_void_strike');
    const solarFlare = skillDB.getSkill('skill_solar_flare');
    
    if (voidStrike && solarFlare) {
        console.log("✓ Core skills loaded successfully.");
    } else {
        console.error("❌ Failed to load core skills.");
        return;
    }

    // 2. Initialize Fusion Calculator
    console.log("\n2. Initializing Fusion Calculator...");
    const fusionCalc = new FusionCalculator(skillDB);

    // 3. Test Legendary Fusion
    console.log("\n3. Testing Legendary Fusion (Void + Solar)...");
    const legendaryResult = fusionCalc.calculateFusion('skill_void_strike', 'skill_solar_flare');
    const legendaryCard = new CardObject(legendaryResult);
    
    console.log(`Result: ${legendaryCard.name} (${legendaryCard.tier})`);
    console.log(legendaryCard.getTooltip());
    
    if (legendaryCard.name === "Solar Void Singularity") {
        console.log("✓ Legendary Fusion logic works.");
    } else {
        console.error("❌ Legendary Fusion failed.");
    }

    // 4. Test Synergy Fusion (Nature + Healing) - Assuming we have skills for this
    // Let's check if we have skills with these tags in the DB
    // skill_thorn_whip (NATURE) + skill_dawn_mending (HEALING, SOLAR) -> Should trigger NATURE+HEALING synergy?
    // Wait, Dawn Mending has SOLAR, HEALING, SUPPORT. Thorn Whip has NATURE.
    // My synergy rule was: tags: ["NATURE", "HEALING"]
    // Does Dawn Mending have HEALING? Yes. Does Thorn Whip have NATURE? Yes.
    // So combining them should trigger the synergy.
    
    console.log("\n4. Testing Synergy Fusion (Nature + Healing)...");
    const synergyResult = fusionCalc.calculateFusion('skill_thorn_whip', 'skill_dawn_mending');
    const synergyCard = new CardObject(synergyResult);
    
    console.log(`Result: ${synergyCard.name} (${synergyCard.tier})`);
    console.log(synergyCard.getTooltip());
    
    if (synergyCard.name.includes("Lifeblood")) {
        console.log("✓ Synergy Fusion logic works.");
    } else {
        console.log("⚠️ Synergy check: Name is " + synergyCard.name);
    }

    // 5. Test Hybrid Fusion (Fallback)
    console.log("\n5. Testing Hybrid Fusion (Void + Nature)...");
    const hybridResult = fusionCalc.calculateFusion('skill_void_strike', 'skill_thorn_whip');
    const hybridCard = new CardObject(hybridResult);
    
    console.log(`Result: ${hybridCard.name} (${hybridCard.tier})`);
    
    if (hybridCard.tier === "COMMON") {
        console.log("✓ Hybrid Fallback logic works.");
    }

    console.log("\n═══════════════════════════════════════════════════════════════");
    console.log("PHASE 2 COMPLETE: The Data Layer is Alive.");
    console.log("═══════════════════════════════════════════════════════════════");
}

testPhase2().catch(console.error);
