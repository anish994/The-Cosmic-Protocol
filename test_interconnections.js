import { WorldExplorationEngine } from './World_Bible_folder/engines/WorldExplorationEngine.js';
import { StoryNodeSystem } from './World_Bible_folder/engines/StoryNodeSystem.js';
import { FusionLoreGenerator } from './World_Bible_folder/engines/FusionLoreGenerator.js';
import { RecursionMemorySystem } from './World_Bible_folder/engines/RecursionMemorySystem.js';

// Mock World State
const worldState = {
    playerState: {
        unlockedSkills: [],
        activeFusions: [],
        stats: {}
    },
    regionStates: new Map([
        ['ashram_central', { corruption: 0 }]
    ]),
    activeEvents: []
};

// Initialize Systems
console.log("Initializing Engines...");
const engine = new WorldExplorationEngine(worldState);
const fusionGen = new FusionLoreGenerator(new RecursionMemorySystem(worldState));

console.log("=== TEST: SYSTEM INTERCONNECTIONS ===");

// 1. Test World Event Triggering
console.log("\n[1] Testing World Event Generation...");
// Force corruption to trigger event
worldState.regionStates.set('ashram_central', { corruption: 90 });
const events = engine.worldEventSystem.checkForEvents();
console.log("Generated Events:", events.map(e => e.type));

if (events.some(e => e.type === 'CORRUPTION_STORM')) {
    console.log("SUCCESS: High corruption triggered CORRUPTION_STORM.");
} else {
    console.error("FAILURE: High corruption did not trigger event.");
}

// 2. Test Story Node Reaction to World Event
console.log("\n[2] Testing Story Node Reaction...");
// Inject a test node
engine.storyNodeSystem.nodeDatabase['test_node_storm'] = {
    id: 'test_node_storm',
    title: 'The Gathering Storm',
    text: 'The sky darkens.',
    outcomes: {
        'DEFAULT': { dialogue: "You hide." },
        'STORM_INTERVENTION': { dialogue: "You channel the storm's energy." }
    },
    worldEventTriggers: {
        'CORRUPTION_STORM': 'STORM_INTERVENTION'
    }
};

const outcome = engine.storyNodeSystem.resolveNode('test_node_storm', { player: worldState.playerState });
console.log("Story Outcome:", outcome.dialogue);

if (outcome.dialogue && outcome.dialogue.includes("channel the storm")) {
    console.log("SUCCESS: Story Node reacted to World Event.");
} else {
    console.error("FAILURE: Story Node ignored World Event.");
}

// 3. Test Legendary Fusion Consequence
console.log("\n[3] Testing Legendary Fusion Consequence...");
const consequence = fusionGen.getLegendaryConsequence('void_light_nova');
if (consequence) {
    console.log(`Legendary Fusion Detected: ${consequence.type}`);
    // Manually trigger it in the world
    engine.worldEventSystem.triggerGlobalEvent(consequence.type, consequence.description);
    console.log("Active World Events:", worldState.activeEvents.map(e => e.type));
    
    if (worldState.activeEvents.some(e => e.type === 'LEGENDARY_FUSION_EVENT_VOID_LIGHT')) {
        console.log("SUCCESS: Legendary Fusion created a Global World Event.");
    } else {
        console.error("FAILURE: Global Event not registered.");
    }
} else {
    console.error("FAILURE: Legendary Fusion not recognized.");
}
