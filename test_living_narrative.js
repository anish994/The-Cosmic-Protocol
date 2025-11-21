
import { WorldExplorationEngine } from './World_Bible_folder/engines/WorldExplorationEngine.js';

console.log("████████████████████████████████████████████████████████████████");
console.log("█  TESTING LIVING NARRATIVE SYSTEM                             █");
console.log("████████████████████████████████████████████████████████████████\n");

// 1. SETUP MOCK STATES
const voidPlayerState = {
    unlockedSkills: [],
    questLog: [],
    resources: { essence: 100 },
    reputation: { 'ashram_remnants': -10 },
    resonanceUsage: { void: 80, light: 5 }, // HEAVY VOID USER
    knowledge: [],
    stats: { deaths: 0 }
};

const lightPlayerState = {
    unlockedSkills: [],
    questLog: [],
    resources: { essence: 100 },
    reputation: { 'ashram_remnants': 50 },
    resonanceUsage: { void: 0, light: 100 }, // LIGHT CHAMPION (MAX)
    knowledge: [],
    stats: { deaths: 0 }
};

const mockWorldState = { recursionMemory: null };

// ═══════════════════════════════════════════════════════════════════════════
// SCENARIO 1: THE VOID FANATIC AT THE GATES
// ═══════════════════════════════════════════════════════════════════════════
console.log("\n--- SCENARIO 1: THE VOID FANATIC ---");
const voidEngine = new WorldExplorationEngine({ ...mockWorldState, playerState: voidPlayerState });
voidEngine.initializeWorld();

// Move to Ashram Central (Trigger Story Node)
// We need to be adjacent first. Initialize puts us at ashram_central.
// Let's move away and back to trigger logic, or just call resolveNode directly for testing.
// The engine calls resolveNode in moveToRegion.
// Let's simulate moving from 'ruins_outskirts' to 'ashram_central'.
voidEngine.currentRegion = 'ruins_outskirts'; 
voidEngine.discoverRegion('ruins_outskirts');

const voidResult = voidEngine.moveToRegion('ashram_central');
console.log(`[RESULT] ${voidResult.description}`);

if (voidResult.storyEvent && voidResult.storyEvent.outcomeType === 'FAILURE') {
    console.log("✅ PASS: Void user was rejected/attacked.");
} else {
    console.error("❌ FAIL: Void user should have been rejected.");
}

// ═══════════════════════════════════════════════════════════════════════════
// SCENARIO 2: THE LIGHT CHAMPION
// ═══════════════════════════════════════════════════════════════════════════
console.log("\n--- SCENARIO 2: THE LIGHT CHAMPION ---");
const lightEngine = new WorldExplorationEngine({ ...mockWorldState, playerState: lightPlayerState });
lightEngine.currentRegion = 'ruins_outskirts';
lightEngine.discoverRegion('ruins_outskirts');

const lightResult = lightEngine.moveToRegion('ashram_central');
console.log(`[RESULT] ${lightResult.description}`);

if (lightResult.storyEvent && lightResult.storyEvent.outcomeType === 'SUCCESS') {
    console.log("✅ PASS: Light user was welcomed as a hero.");
} else {
    console.error("❌ FAIL: Light user should have been welcomed.");
}

// ═══════════════════════════════════════════════════════════════════════════
// SCENARIO 3: ACTIVE KNOWLEDGE & LORE
// ═══════════════════════════════════════════════════════════════════════════
console.log("\n--- SCENARIO 3: THE DANGEROUS SECRET ---");
const loreEngine = new WorldExplorationEngine({ ...mockWorldState, playerState: { ...lightPlayerState } });

// 1. Discover a Fact
const factId = 'fractured_mantra';
const discovery = loreEngine.loreSystem.discoverFact(factId);
console.log(`[ACTION] Discovered Fact: ${loreEngine.loreSystem.factDatabase[factId].title}`);

// 2. Share it with the WRONG person (Suryanatha)
console.log("[ACTION] Sharing secret with Suryanatha...");
const shareResult = loreEngine.loreSystem.shareFactWithNPC('suryanatha', factId);

console.log(`[NPC REACTION] ${shareResult.dialogue}`);
if (shareResult.reaction === 'HOSTILE') {
    console.log("✅ PASS: Suryanatha reacted hostilely to the secret.");
} else {
    console.error("❌ FAIL: Suryanatha should have been hostile.");
}

// 3. Check Deductions
console.log("\n[ACTION] Discovering second clue...");
loreEngine.loreSystem.discoverFact('collapse_log_1');
// This should trigger the deduction
if (loreEngine.loreSystem.unlockedDeductions.has('architect_conspiracy')) {
    console.log("✅ PASS: Deduction 'Architect's Conspiracy' unlocked automatically.");
} else {
    console.error("❌ FAIL: Deduction did not unlock.");
}

console.log("\n████████████████████████████████████████████████████████████████");
console.log("█  TEST COMPLETE                                               █");
console.log("████████████████████████████████████████████████████████████████");
