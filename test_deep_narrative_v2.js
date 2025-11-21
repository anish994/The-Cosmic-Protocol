import { StoryNodeSystem } from './World_Bible_folder/engines/StoryNodeSystem.js';
import { RumorMill } from './World_Bible_folder/engines/RumorMillSystem.js';
import { FusionDiscovery } from './World_Bible_folder/engines/FusionDiscoverySystem.js';
import { EventBus } from './World_Bible_folder/engines/GlobalEventBus.js';

console.log("════════════════════════════════════════════════════════════");
console.log("  DEEP NARRATIVE & RUMOR SYSTEM VERIFICATION");
console.log("════════════════════════════════════════════════════════════");

// Mock World State
const mockWorldState = {};
const mockRecursion = {
    getDejaVuReaction: () => null
};
const storySystem = new StoryNodeSystem(mockWorldState, mockRecursion);

// Mock Player
const player = {
    unlockedSkills: [],
    reputation: { 'ashram_remnants': 0 }
};

// 1. Test Rumor Generation
console.log("\n[TEST 1] Rumor Generation");
EventBus.emit('LEGENDARY_FUSION_TRIGGERED', {
    name: 'Solar Void Singularity',
    worldEffect: 'DARKEN_SKYBOX'
});

const rumor = RumorMill.getRumor({ faction: 'ashram_remnants' });
if (rumor && rumor.text.includes('cracked a star open')) {
    console.log(`PASS: Rumor generated: "${rumor.text}"`);
} else {
    console.error("FAIL: Rumor not generated or incorrect.");
}

// 2. Test Dialogue Resolution (Default)
console.log("\n[TEST 2] Dialogue Resolution (Default)");
const result1 = storySystem.resolveNode('void_scholar_meet', { player });
if (result1.type === 'NEUTRAL') {
    console.log(`PASS: Default outcome triggered. Dialogue: "${result1.finalDialogue}"`);
} else {
    console.error(`FAIL: Expected NEUTRAL, got ${result1.type}`);
}

// 3. Test Dialogue Resolution (Skill Condition)
console.log("\n[TEST 3] Dialogue Resolution (Skill Condition)");
player.unlockedSkills.push('skill_void_blast');
const result2 = storySystem.resolveNode('void_scholar_meet', { player });

if (result2.type === 'INTEREST') {
    console.log(`PASS: Skill outcome triggered. Dialogue: "${result2.finalDialogue}"`);
} else {
    console.error(`FAIL: Expected INTEREST, got ${result2.type}`);
}

// 4. Test Dialogue Resolution (Fusion Condition)
console.log("\n[TEST 4] Dialogue Resolution (Fusion Condition)");
// Clear skills to ensure Fusion takes priority (or just to test Fusion specifically)
player.unlockedSkills = [];
// Simulate discovery
FusionDiscovery.discoveredFusions.add('Solar Void Singularity');

const result3 = storySystem.resolveNode('void_scholar_meet', { player });

if (result3.type === 'AWE') {
    console.log(`PASS: Fusion outcome triggered. Dialogue: "${result3.finalDialogue}"`);
} else {
    console.error(`FAIL: Expected AWE, got ${result3.type}`);
}

console.log("\n════════════════════════════════════════════════════════════");
console.log("  VERIFICATION COMPLETE");
console.log("════════════════════════════════════════════════════════════");
