
import { RecursionMemorySystem } from './World_Bible_folder/engines/RecursionMemorySystem.js';
import { FusionLoreGenerator } from './World_Bible_folder/engines/FusionLoreGenerator.js';

// Mock World State
const mockWorldState = {
    recursionMemory: null
};

const recursionSys = new RecursionMemorySystem(mockWorldState);
const loreGen = new FusionLoreGenerator(recursionSys);

console.log("=== STARTING FUSION LORE TEST ===");

const fusionId = 'void_light_nova';
const components = ['VOID', 'LIGHT'];

// --- LOOP 1 ---
console.log("\n[LOOP 1] First Discovery:");
console.log(loreGen.generateLore(fusionId, components));

// Use it a bunch of times
console.log("\n[EVENT] Using Fusion 15 times...");
for (let i = 0; i < 15; i++) {
    recursionSys.rememberFusion(fusionId);
}

// Record a notable moment
recursionSys.rememberFusion(fusionId, "Shattered the Crystal Gate.");
console.log("- Recorded notable moment: 'Shattered the Crystal Gate.'");

// Reset
console.log("\n[EVENT] Triggering Loop Reset...");
recursionSys.triggerLoopReset();

// --- LOOP 2 ---
console.log("\n[LOOP 2] Rediscovery:");
const loreLoop2 = loreGen.generateLore(fusionId, components);
console.log(loreLoop2);

if (loreLoop2.includes("[HISTORY]") && loreLoop2.includes("[ECHO]")) {
    console.log("\nSUCCESS: Lore includes history and echo!");
} else {
    console.log("\nFAILURE: Lore missing history/echo.");
}

console.log("\n=== TEST COMPLETE ===");
