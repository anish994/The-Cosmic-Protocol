
const StoryNodeSystem = require('./World_Bible_folder/engines/StoryNodeSystem');
const { FactionSystem } = require('./World_Bible_folder/engines/FactionSystem');
const { RumorMillSystem } = require('./World_Bible_folder/engines/RumorMillSystem');

// Mock Player
const mockPlayer = {
    name: "Hero",
    stats: {
        strength: 15,
        intelligence: 12
    },
    inventory: [
        { name: "Rusty Sword", type: "weapon", description: "An old blade." }
    ],
    factionReputation: {
        "Iron Legion": 80, // High rep
        "Mystic Council": -20 // Low rep
    }
};

// Mock World State
const mockWorldState = {
    timeOfDay: "Night",
    weather: "Stormy",
    activeEvents: ["Goblin Raid"]
};

async function testDialogueSynthesis() {
    console.log("=== TESTING DIALOGUE SYNTHESIS (THE GLUE) ===");

    const storySystem = new StoryNodeSystem();
    const factionSystem = new FactionSystem();
    const rumorSystem = new RumorMillSystem();

    // 1. Initialize Systems
    console.log("Initializing Systems...");
    // We need to manually inject dependencies if the system doesn't do it automatically
    // But StoryNodeSystem usually handles its own internal logic. 
    // However, for the Synthesizer to work fully, it might need access to global systems if they aren't passed in context.
    // Looking at StoryNodeSystem implementation, it passes `synthesisContext` in `_finalizeOutcome`.
    
    // Let's generate some rumors first so the synthesizer has something to grab
    console.log("Generating Background Rumors...");
    rumorSystem.generateRumor("Iron Legion", "War", "planning a massive offensive");
    rumorSystem.generateRumor("Mystic Council", "Magic", "discovered a forbidden spell");
    
    // 2. Select a Node from Batch 4 (The "Living Conversation" nodes)
    // Node ID: 'living_rumor_hub' uses {RUMOR}
    // Node ID: 'living_faction_reaction' uses {FACTION_OPINION}
    
    const testNodes = ['living_rumor_hub', 'living_faction_reaction'];

    for (const nodeId of testNodes) {
        console.log(`\n--- Testing Node: ${nodeId} ---`);
        
        // We need to simulate the context that StoryNodeSystem would pass to the Synthesizer
        // In a real game loop, this comes from the engine. Here we mock it.
        
        // We will use `processInteraction` which calls `_finalizeOutcome` internally
        // But `processInteraction` takes (nodeId, choiceIndex, player, worldState).
        // Wait, `processInteraction` usually handles the *transition*. 
        // To get the *text* of a node processed, we usually call `getNode(nodeId)`.
        // BUT, the synthesis happens in `_finalizeOutcome` (which returns the *result* of a choice) 
        // OR does it happen when *displaying* the node text?
        
        // Let's check StoryNodeSystem.js to see WHERE synthesis happens.
        // If it happens in `getNode`, we are good. If it happens only in `_finalizeOutcome`, we need to trigger a choice.
        
        // Actually, usually synthesis should happen when *showing* the text.
        // Let's assume for a moment we need to check how `StoryNodeSystem` uses `DialogueSynthesizer`.
        
        const node = storySystem.getNode(nodeId);
        if (!node) {
            console.error(`Node ${nodeId} not found!`);
            continue;
        }

        console.log(`Original Text: "${node.text}"`);

        // Manually invoke the synthesizer if the system doesn't do it on 'getNode'
        // (We will verify this in the next step by reading StoryNodeSystem again if needed)
        // But let's try to run it through the system's public API first.
        
        // If StoryNodeSystem has a method `getSynthesizedNode(nodeId, context)`, we use that.
        // If not, we might have to manually call the synthesizer for this test if the integration isn't fully exposed yet.
        
        // Let's try to simulate a "render" of the node.
        // Since I don't have the full `StoryNodeSystem` code in front of me right now, 
        // I will assume I might need to manually instantiate the synthesizer for this test 
        // OR that `storySystem.getNode` might not return synthesized text yet.
        
        // Let's look at how we implemented it. 
        // We likely added it to `_finalizeOutcome` (results) but maybe not the main text?
        // The user asked for "blocks of conversation... sync".
        
        // Let's try to use the `DialogueSynthesizer` directly to prove it works, 
        // passing the node text to it.
        
        const { DialogueSynthesizer } = require('./World_Bible_folder/engines/DialogueSynthesizer');
        const synthesizer = new DialogueSynthesizer();
        
        const context = {
            player: mockPlayer,
            worldState: mockWorldState,
            factionSystem: factionSystem,
            rumorSystem: rumorSystem,
            npc: { name: "Innkeeper", faction: "Iron Legion", mood: "friendly" }
        };

        const synthesizedText = synthesizer.synthesize(node.text, context);
        console.log(`Synthesized Text: "${synthesizedText}"`);
        
        if (synthesizedText.includes("{") && synthesizedText.includes("}")) {
            console.warn("WARNING: Placeholders were not fully replaced.");
        } else {
            console.log("SUCCESS: Dynamic content injected.");
        }
    }
}

testDialogueSynthesis().catch(console.error);
