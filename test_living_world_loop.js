import { LoreQuestSystem } from './World_Bible_folder/engines/LoreQuestSystem.js';
import { RumorMill } from './World_Bible_folder/engines/RumorMillSystem.js';
import { FactionSystem } from './World_Bible_folder/engines/FactionSystem.js';
import { StoryNodeSystem } from './World_Bible_folder/engines/StoryNodeSystem.js';
import { EventBus } from './World_Bible_folder/engines/GlobalEventBus.js';

console.log("════════════════════════════════════════════════════════════");
console.log("  LIVING WORLD LOOP VERIFICATION");
console.log("════════════════════════════════════════════════════════════");

// Mock State
const worldState = {
    playerState: {
        resources: { essence: 0 },
        reputation: {},
        unlockedSkills: []
    }
};
const mockLoreSystem = { knownFacts: new Set(['fractured_mantra']) };
const mockRecursion = { getDejaVuReaction: () => null };

// Initialize Systems
const loreQuestSystem = new LoreQuestSystem(mockLoreSystem, worldState.playerState);
const factionSystem = new FactionSystem(worldState);
const storySystem = new StoryNodeSystem(worldState, mockRecursion);

// 1. Start and Complete a Quest
console.log("\n[TEST 1] Quest Completion -> Rumor Generation");
loreQuestSystem.startQuest('project_genesis');

// Force complete (hack for testing)
loreQuestSystem._completeQuest('project_genesis');

// Check Rumor Mill
const rumor = RumorMill.getRumor({ faction: 'ashram_remnants' });
if (rumor && rumor.text.includes('Project Genesis')) {
    console.log(`PASS: Quest rumor generated: "${rumor.text}"`);
} else {
    console.error("FAIL: No quest rumor found.");
    console.log("Current Rumors:", RumorMill.globalRumors);
}

// 2. Faction Event -> Rumor -> Story Node
console.log("\n[TEST 2] Faction Event -> Story Node Injection");

// Trigger Faction Event
factionSystem.handleWorldEvent({ type: 'FACTION_SKIRMISH' });

// Create a dummy node that uses {RUMOR}
storySystem.nodeDatabase['test_rumor_node'] = {
    id: 'test_rumor_node',
    title: 'Tavern Gossip',
    region: 'ashram_central',
    associatedFaction: 'ashram_remnants',
    outcomes: {
        'DEFAULT': {
            type: 'NEUTRAL',
            dialogue: "Bartender: 'Here's your drink. {RUMOR}'"
        }
    }
};

// Resolve Node
const result = storySystem.resolveNode('test_rumor_node', { player: worldState.playerState });

if (result.finalDialogue.includes("Bartender: 'Here's your drink.")) {
    if (!result.finalDialogue.includes("{RUMOR}")) {
        console.log(`PASS: Rumor injected into dialogue: "${result.finalDialogue}"`);
    } else {
        console.error("FAIL: {RUMOR} placeholder not replaced.");
    }
} else {
    console.error("FAIL: Dialogue resolution failed.");
}

console.log("\n════════════════════════════════════════════════════════════");
console.log("  VERIFICATION COMPLETE");
console.log("════════════════════════════════════════════════════════════");
