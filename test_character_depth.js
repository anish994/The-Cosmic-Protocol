import { StoryNodeSystem } from './World_Bible_folder/engines/StoryNodeSystem.js';
import { NPCDepthEngine } from './World_Bible_folder/engines/NPCDepthEngine.js';
import { PsychologicalProfileSystem } from './World_Bible_folder/engines/PsychologicalProfileSystem.js';

console.log("════════════════════════════════════════════════════════════");
console.log("  CHARACTER DEPTH & META-NARRATIVE VERIFICATION");
console.log("════════════════════════════════════════════════════════════");

// Mock State
const worldState = {
    playerState: {
        reputation: {},
        unlockedSkills: []
    }
};
const mockRecursion = { getDejaVuReaction: () => null };

// Initialize Systems
const storySystem = new StoryNodeSystem(worldState, mockRecursion);
const npcEngine = new NPCDepthEngine(worldState);
const psychSystem = new PsychologicalProfileSystem();

// 1. Test Laxus Meta-Awareness
console.log("\n[TEST 1] Laxus Bloodsage: Meta-Awareness");

// Force Archetype to CHAOS_AGENT
psychSystem.currentArchetype = 'THE_CHAOS_AGENT';
// Mock the psych system in the story engine
storySystem.psychSystem = psychSystem;

const result = storySystem.resolveNode('laxus_first_contact', { player: worldState.playerState });

if (result.type === 'META_BREAK') {
    console.log(`PASS: Meta-Break triggered. Dialogue: "${result.finalDialogue}"`);
    if (result.finalDialogue.includes("<player_name>")) {
        console.log("PASS: Player Name placeholder detected.");
    } else {
        console.error("FAIL: Player Name placeholder missing.");
    }
} else {
    console.error(`FAIL: Expected META_BREAK, got ${result.type}`);
}

// 2. Test Suryanatha Traditionalism
console.log("\n[TEST 2] Suryanatha: Traditionalism (Void Taint)");

// Give player Void Skill
worldState.playerState.unlockedSkills.push('skill_void_blast');

const result2 = storySystem.resolveNode('suryanatha_audience', { player: worldState.playerState });

if (result2.type === 'DISGUST') {
    console.log(`PASS: Disgust outcome triggered. Dialogue: "${result2.finalDialogue}"`);
} else {
    console.error(`FAIL: Expected DISGUST, got ${result2.type}`);
}

// 3. Test NPC Soul Logic (Direct Engine Call)
console.log("\n[TEST 3] NPC Soul Logic (Laxus)");
const laxusReaction = npcEngine.getNPCReaction('laxus_bloodsage', { 
    ...worldState.playerState,
    action: { type: 'FUSION_EXPERIMENT' } // Simulate an action
});

// Note: The mock might return default if not fully wired, but let's check
console.log("Laxus Reaction:", laxusReaction);
if (laxusReaction) {
    console.log("PASS: Laxus returned a reaction object.");
} else {
    console.error("FAIL: Laxus reaction is null.");
}

console.log("\n════════════════════════════════════════════════════════════");
console.log("  VERIFICATION COMPLETE");
console.log("════════════════════════════════════════════════════════════");
