
import { WorldExplorationEngine } from './World_Bible_folder/engines/WorldExplorationEngine.js';

console.log("████████████████████████████████████████████████████████████████");
console.log("█  TESTING NPC SOUL DEPTH                                      █");
console.log("████████████████████████████████████████████████████████████████\n");

const mockWorldState = { recursionMemory: null };
const engine = new WorldExplorationEngine({ ...mockWorldState });

// ═══════════════════════════════════════════════════════════════════════════
// SCENARIO 9: THE HATED ARCHETYPE (Janya vs The Saint)
// ═══════════════════════════════════════════════════════════════════════════
console.log("\n--- SCENARIO 9: THE HATED ARCHETYPE ---");

// 1. Become "The Saint" (Low Aggression, High Loyalty)
// We need to fake the profile since we can't run 50 actions instantly in test
engine.storyNodeSystem.psychSystem.metrics = { aggression: 0, loyalty: 50, deception: 0, greed: 0, curiosity: 0 };
engine.storyNodeSystem.psychSystem._updateArchetype();
console.log(`[PROFILE] Current Archetype: ${engine.storyNodeSystem.psychSystem.currentArchetype}`);

// 2. Approach Janya (Relic Seeker)
// She hates Saints. Even if we have the tech (Fusion Trigger), she might be rude or reject us?
// Let's see if the Soul Engine overrides the outcome.
// We'll use the 'relic_camp_approach' node.

// First, give the fusion so we *should* succeed
engine.playerState.activeFusions = ['fusion_ancient_battery'];

const result = engine.storyNodeSystem.resolveNode('relic_camp_approach', { player: engine.playerState });
console.log(`[RESULT] ${result.title}: ${result.dialogue}`);

// Janya hates Saints (-30 disposition). Base is -10. Total -40 (Wary).
// If she is Wary, she might not be Hostile enough to block, but let's check dialogue.
// Wait, let's make her HATE us.
engine.playerState.reputation['nomadic_relic_seekers'] = -20; // Now total is -60 (Hostile)

console.log("[ACTION] Lowering reputation to trigger HOSTILE state...");
const hostileResult = engine.storyNodeSystem.resolveNode('relic_camp_approach', { player: engine.playerState });
console.log(`[RESULT] ${hostileResult.title}: ${hostileResult.dialogue}`);

if (hostileResult.outcomeType === 'FAILURE' && hostileResult.dialogue.includes("Get out")) {
    console.log("✅ PASS: NPC Soul (Hostility) overrode the Fusion Success.");
} else {
    console.error("❌ FAIL: NPC should have rejected the player despite the item.");
}

// ═══════════════════════════════════════════════════════════════════════════
// SCENARIO 10: THE LOVED ARCHETYPE (Laxus vs The Chaos Agent)
// ═══════════════════════════════════════════════════════════════════════════
console.log("\n--- SCENARIO 10: THE LOVED ARCHETYPE ---");

// 1. Become "The Chaos Agent"
engine.storyNodeSystem.psychSystem.metrics = { aggression: 20, deception: 20, loyalty: -30 };
engine.storyNodeSystem.psychSystem._updateArchetype();
console.log(`[PROFILE] Current Archetype: ${engine.storyNodeSystem.psychSystem.currentArchetype}`);

// 2. Check Laxus Reaction
// We need a node for Laxus. Let's inject one.
engine.storyNodeSystem.nodeDatabase['laxus_meet'] = {
    id: 'laxus_meet',
    title: 'The Nexus Gate',
    associatedNPC: 'laxus_bloodsage',
    outcomes: {
        'DEFAULT': { type: 'NEUTRAL', dialogue: "The gate hums." }
    }
};

const laxusResult = engine.storyNodeSystem.resolveNode('laxus_meet', { player: engine.playerState });
console.log(`[RESULT] ${laxusResult.title}: ${laxusResult.dialogue}`);

if (laxusResult.dialogue.includes("You see the strings")) {
    console.log("✅ PASS: NPC Soul (Ally) modified the dialogue.");
} else {
    console.error("❌ FAIL: Laxus should have given unique dialogue.");
}

console.log("\n████████████████████████████████████████████████████████████████");
console.log("█  TEST COMPLETE                                               █");
console.log("████████████████████████████████████████████████████████████████");
