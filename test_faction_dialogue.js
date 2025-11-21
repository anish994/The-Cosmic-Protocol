import { StoryNodeSystem } from './World_Bible_folder/engines/StoryNodeSystem.js';
import { FactionSystem } from './World_Bible_folder/engines/FactionSystem.js';

console.log("════════════════════════════════════════════════════════════");
console.log("  FACTION DIALOGUE VERIFICATION");
console.log("════════════════════════════════════════════════════════════");

// Mock State
const worldState = {
    playerState: {
        reputation: {},
        unlockedSkills: []
    }
};
const mockRecursion = { getDejaVuReaction: () => null };

const storySystem = new StoryNodeSystem(worldState, mockRecursion);
// Ensure FactionSystem is initialized (it should be in constructor now)
if (!storySystem.factionSystem) {
    console.error("FAIL: FactionSystem not initialized in StoryNodeSystem.");
    process.exit(1);
}

// 1. Test Faction Power Condition
console.log("\n[TEST 1] Faction Power Condition (Architects Winning)");

// Manipulate Faction Power
const architects = storySystem.factionSystem.getFactionState('untethered_architects');
architects.power = 80; // Set to winning

const result = storySystem.resolveNode('architect_outpost_raid', { player: worldState.playerState });

if (result.type === 'CONFIDENT') {
    console.log(`PASS: Architects Winning outcome triggered. Dialogue: "${result.finalDialogue}"`);
} else {
    console.error(`FAIL: Expected CONFIDENT, got ${result.type}`);
    console.log("Result:", result);
}

// 2. Test Faction Rep Condition
console.log("\n[TEST 2] Faction Rep Condition (Hated)");
worldState.playerState.reputation['nomadic_relic_seekers'] = -50;

const result2 = storySystem.resolveNode('relic_market_dispute', { player: worldState.playerState });

if (result2.type === 'HOSTILE') {
    console.log(`PASS: Hated outcome triggered. Dialogue: "${result2.finalDialogue}"`);
} else {
    console.error(`FAIL: Expected HOSTILE, got ${result2.type}`);
}

console.log("\n════════════════════════════════════════════════════════════");
console.log("  VERIFICATION COMPLETE");
console.log("════════════════════════════════════════════════════════════");
