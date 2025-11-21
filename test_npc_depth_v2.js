import { StoryNodeSystem } from './World_Bible_folder/engines/StoryNodeSystem.js';
import { RecursionMemorySystem } from './World_Bible_folder/engines/RecursionMemorySystem.js';

// Mock World State
const worldState = {
    playerState: {
        unlockedSkills: [],
        reputation: { 'ashram_remnants': 0 },
        stats: { corruption: 0 }
    },
    regionStates: new Map(),
    activeEvents: []
};

// Initialize Systems
console.log("Initializing Story System with Deep NPC Engine...");
const recursionSystem = new RecursionMemorySystem(worldState);
const storySystem = new StoryNodeSystem(worldState, recursionSystem);

// Test Suryanatha (Ashram Leader)
console.log("\n=== TEST: SURYANATHA (DEEP) ===");
// We need to simulate a node that involves him
const node = {
    id: 'test_suryanatha_meet',
    title: 'Meeting the Warden',
    associatedNPC: 'suryanatha',
    outcomes: {
        'DEFAULT': { dialogue: "He nods." }
    }
};

// Inject node
storySystem.nodeDatabase['test_suryanatha_meet'] = node;

// 1. Neutral State
console.log("[1] Neutral State Check");
let result = storySystem.resolveNode('test_suryanatha_meet', { player: worldState.playerState });
console.log("Dialogue:", result.dialogue);

// 2. Hostile State (Simulate bad reputation/trust)
console.log("\n[2] Hostile State Check");
// We need to access the underlying NPC instance to modify trust directly for testing
const suryanatha = storySystem.npcEngine.npcInstances['suryanatha'];
if (suryanatha) {
    suryanatha.relationships.trust = 0;
    suryanatha.relationships.fear = 90;
    console.log("Modified Suryanatha Trust: 0, Fear: 90");
    
    const reaction = storySystem.npcEngine.getNPCReaction('suryanatha', { player: worldState.playerState });
    console.log("Direct Reaction Check:", reaction);

    result = storySystem.resolveNode('test_suryanatha_meet', { player: worldState.playerState });
    console.log("Dialogue:", result.dialogue);
    
    if (result.dialogue && (result.dialogue.includes("shadow") || result.dialogue.includes("Leave"))) {
        console.log("SUCCESS: Hostile dialogue triggered.");
    } else {
        console.log("FAILURE: Hostile dialogue not triggered.");
    }
} else {
    console.error("FAILURE: Suryanatha instance not found.");
}

// 3. Ally State
console.log("\n[3] Ally State Check");
if (suryanatha) {
    suryanatha.relationships.trust = 100;
    suryanatha.relationships.fear = 0;
    console.log("Modified Suryanatha Trust: 100");
    
    result = storySystem.resolveNode('test_suryanatha_meet', { player: worldState.playerState });
    console.log("Dialogue:", result.dialogue);
    
    if (result.dialogue && (result.dialogue.includes("Light") || result.dialogue.includes("friend") || result.dialogue.includes("Champion"))) {
        console.log("SUCCESS: Ally dialogue triggered.");
    } else {
        console.log("FAILURE: Ally dialogue not triggered.");
    }
}
