
const fs = require('fs');
const path = require('path');

// Mock environment for testing
const worldState = {
    player: {
        unlockedSkills: [],
        bandwidth: 100
    },
    ecosystem: {}
};

console.log("=== STARTING SCALING VERIFICATION ===");

// 1. VERIFY CHARACTERS
console.log("\n--- Verifying Character Expansion ---");
try {
    // Read the file content directly since it's a JS file exporting an object, 
    // but we might not be able to require it easily if it uses 'export const'.
    // We'll use a regex to check for the new keys.
    const charRepoPath = path.join(__dirname, 'World_Bible_folder/engines/CharacterDataRepository.js');
    const charRepoContent = fs.readFileSync(charRepoPath, 'utf8');
    
    const newChars = ['jyoti', 'mira', 'jalen', 'siva', 'rina', 'kiran', 'seraph_9'];
    let charCount = 0;
    
    newChars.forEach(charId => {
        if (charRepoContent.includes(`"${charId}": {`) || charRepoContent.includes(`'${charId}': {`) || charRepoContent.includes(`${charId}: {`)) {
            console.log(`[SUCCESS] Character '${charId}' found in repository.`);
            charCount++;
        } else {
            console.error(`[FAIL] Character '${charId}' NOT found in repository.`);
        }
    });
    
    if (charCount === newChars.length) {
        console.log(">>> All new characters verified.");
    }
} catch (e) {
    console.error("Error verifying characters:", e);
}

// 2. VERIFY LORE ARCS
console.log("\n--- Verifying Lore Arc Expansion ---");
try {
    const arcRepoPath = path.join(__dirname, 'World_Bible_folder/engines/NarrativeArcRegistry.js');
    const arcRepoContent = fs.readFileSync(arcRepoPath, 'utf8');
    
    const newArcs = ['jyoti', 'jalen', 'siva', 'rina', 'kiran', 'seraph_9'];
    let arcCount = 0;
    
    newArcs.forEach(charId => {
        if (arcRepoContent.includes(`'${charId}': {`) || arcRepoContent.includes(`"${charId}": {`)) {
            console.log(`[SUCCESS] Narrative Arcs for '${charId}' found.`);
            arcCount++;
        } else {
            console.error(`[FAIL] Narrative Arcs for '${charId}' NOT found.`);
        }
    });
    
    if (arcCount === newArcs.length) {
        console.log(">>> All new lore arcs verified.");
    }
} catch (e) {
    console.error("Error verifying lore arcs:", e);
}

// 3. VERIFY SKILL EXPANSION
console.log("\n--- Verifying Skill Expansion ---");
try {
    const skillPath = path.join(__dirname, 'World_Bible_folder/engines/SkillExpansion_Batch1.json');
    if (fs.existsSync(skillPath)) {
        const skillData = JSON.parse(fs.readFileSync(skillPath, 'utf8'));
        console.log(`[SUCCESS] Skill Expansion file loaded. Found ${skillData.skills.length} new skills.`);
        
        const ultimateSkill = skillData.skills.find(s => s.name === "Solar Void Singularity");
        if (ultimateSkill) {
            console.log(`[SUCCESS] Ultimate Skill 'Solar Void Singularity' verified.`);
            console.log(`   - Effect: ${ultimateSkill.combat_effect.primary}`);
        } else {
            console.error("[FAIL] Ultimate Skill not found.");
        }
    } else {
        console.error("[FAIL] Skill Expansion file not found.");
    }
} catch (e) {
    console.error("Error verifying skills:", e);
}

console.log("\n=== VERIFICATION COMPLETE ===");
