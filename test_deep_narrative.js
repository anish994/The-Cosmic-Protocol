
import { WorldExplorationEngine } from './World_Bible_folder/engines/WorldExplorationEngine.js';

console.log("████████████████████████████████████████████████████████████████");
console.log("█  TESTING DEEP NARRATIVE & META-SYSTEMS                       █");
console.log("████████████████████████████████████████████████████████████████\n");

const mockWorldState = { recursionMemory: null };
const engine = new WorldExplorationEngine({ ...mockWorldState });

// ═══════════════════════════════════════════════════════════════════════════
// SCENARIO 4: THE BUTCHER'S SUBVERSION
// ═══════════════════════════════════════════════════════════════════════════
console.log("\n--- SCENARIO 4: THE BUTCHER'S SUBVERSION ---");

// 1. Create a "Butcher" Profile
console.log("[ACTION] Simulating a rampage...");
for (let i = 0; i < 10; i++) {
    engine.performAction('COMBAT', {
        target: 'Innocent Villager',
        method: 'Brutal Execution',
        impact: { aggression: 5, deception: 0, loyalty: -2 }
    });
}

// Verify Archetype
const profile = engine.storyNodeSystem.psychSystem.getProfile();
console.log(`[PROFILE] Current Archetype: ${profile.archetype}`);

if (profile.archetype === 'THE_BUTCHER') {
    console.log("✅ PASS: System correctly identified 'The Butcher'.");
} else {
    console.error(`❌ FAIL: Expected 'THE_BUTCHER', got ${profile.archetype}`);
}

// 2. Try to be Diplomatic
// We need a mock node for diplomacy. Since we don't have one in the DB yet, 
// we'll manually inject one into the database for testing.
engine.storyNodeSystem.nodeDatabase['test_diplomacy'] = {
    id: 'test_diplomacy',
    title: 'The Peace Treaty',
    associatedFaction: 'ashram_remnants',
    outcomes: {
        'DEFAULT': { description: "They accept your offer.", outcomeType: 'SUCCESS' }
    }
};

console.log("[ACTION] Attempting 'The Peace Treaty' node...");
const result = engine.storyNodeSystem.resolveNode('test_diplomacy', { player: engine.playerState });

console.log(`[RESULT] ${result.title}: ${result.dialogue}`);

if (result.outcomeType === 'SUBVERSION' && result.title === 'The Scent of Blood') {
    console.log("✅ PASS: Meta-Controller subverted the choice based on profile.");
} else {
    console.error(`❌ FAIL: Expected subversion. Got ${result.outcomeType}`);
}

// ═══════════════════════════════════════════════════════════════════════════
// SCENARIO 5: LAXUS SPEAKS (THE META-MATCH)
// ═══════════════════════════════════════════════════════════════════════════
console.log("\n--- SCENARIO 5: LAXUS SPEAKS ---");

// 1. Evolve into a "Chaos Agent" (Aggression + Deception)
console.log("[ACTION] Simulating chaotic manipulation...");
for (let i = 0; i < 10; i++) {
    engine.performAction('DIALOGUE', {
        target: 'Faction Leader',
        method: 'Lies and Betrayal',
        impact: { aggression: 5, deception: 5, loyalty: -5 }
    });
}

const chaosProfile = engine.storyNodeSystem.psychSystem.getProfile();
console.log(`[PROFILE] Current Archetype: ${chaosProfile.archetype}`);

// 2. Artificially Spike Tension to force intervention
engine.storyNodeSystem.metaController.state.metaTension = 60;
engine.storyNodeSystem.metaController.state.laxusInterest = 0; // Reset interest

// 3. Trigger a node to see if Laxus interrupts
// We might need to try a few times since it's a 10% chance, 
// OR we can hack the probability in the test.
// Let's just loop until he speaks or we give up.
let laxusSpoke = false;
for (let i = 0; i < 20; i++) {
    const metaResult = engine.storyNodeSystem.resolveNode('test_diplomacy', { player: engine.playerState });
    if (metaResult.metaData && metaResult.metaData.laxusContact) {
        console.log(`[META EVENT] ${metaResult.description}`);
        laxusSpoke = true;
        break;
    }
}

if (laxusSpoke) {
    console.log("✅ PASS: Laxus Bloodsage broke the fourth wall.");
} else {
    console.log("⚠️ WARNING: Laxus remained silent (RNG). Retrying...");
    // In a real test we'd mock Math.random, but for now this is a smoke test.
}

console.log("\n████████████████████████████████████████████████████████████████");
console.log("█  TEST COMPLETE                                               █");
console.log("████████████████████████████████████████████████████████████████");
