import { DynamicEventGenerator } from './World_Bible_folder/engines/DynamicEventGenerator.js';
import { FactionSystem } from './World_Bible_folder/engines/FactionSystem.js';
import { WorldEcosystem } from './World_Bible_folder/engines/WorldEcosystem.js';
import { EventBus } from './World_Bible_folder/engines/GlobalEventBus.js';

console.log("════════════════════════════════════════════════════════════");
console.log("  DYNAMIC WORLD & QUEST VERIFICATION");
console.log("════════════════════════════════════════════════════════════");

// Mock State
const worldState = {
    globalState: { chaos: 60 },
    playerState: { reputation: {} }
};
const mockScarSystem = { getRegionEffects: () => [{ name: 'Void Residue' }] };

// Initialize Systems
const factionSystem = new FactionSystem(worldState);
const eventGenerator = new DynamicEventGenerator(worldState, mockScarSystem, factionSystem);
const ecosystem = new WorldEcosystem(factionSystem);

// 1. Test Dynamic Event Generation (Scar + Faction)
console.log("\n[TEST 1] Dynamic Event Generation");
const events = eventGenerator.generateEvents('ashram_central');

if (events.length > 0) {
    console.log(`PASS: Generated ${events.length} events.`);
    events.forEach(e => console.log(` - [${e.type}] ${e.title}: ${e.description}`));
} else {
    console.log("NOTE: No events generated (random chance). Retrying...");
    // Retry loop for randomness
    for(let i=0; i<10; i++) {
        const retryEvents = eventGenerator.generateEvents('ashram_central');
        if (retryEvents.length > 0) {
            console.log(`PASS: Generated events on attempt ${i+1}.`);
            break;
        }
    }
}

// 2. Test Dynamic Quest Generation
console.log("\n[TEST 2] Dynamic Quest Generation");
// Set Faction State
const architects = factionSystem.getFactionState('untethered_architects');
architects.state = 'EXPANSIONIST';

const quest = eventGenerator.generateFactionQuest('untethered_architects');
if (quest && quest.title.includes('CONQUEST')) {
    console.log(`PASS: Generated Conquest Quest: "${quest.title}"`);
    console.log(` - Description: "${quest.description}"`);
} else {
    console.error("FAIL: Quest generation failed or incorrect type.");
}

// 3. Test Ecosystem Faction Logic
console.log("\n[TEST 3] Ecosystem Faction Logic");
// Mock Region Database
const regionDB = {
    'nexus_gate': { id: 'nexus_gate', controllingFaction: 'untethered_architects', connections: ['ashram_central'] },
    'ashram_central': { id: 'ashram_central', controllingFaction: 'ashram_remnants', connections: ['nexus_gate'] }
};

// Give Architects enough power to expand
architects.power = 70;

let moveTriggered = false;
EventBus.on('FACTION_MOVE_TRIGGERED', (data) => {
    console.log(`[EventBus] Faction Move: ${data.factionId} -> ${data.targetRegion}`);
    moveTriggered = true;
});

ecosystem.processTurn(regionDB, 1);

if (moveTriggered) {
    console.log("PASS: Ecosystem triggered Faction Expansion.");
} else {
    console.error("FAIL: No expansion triggered.");
    console.log("Architect Power:", architects.power);
}

console.log("\n════════════════════════════════════════════════════════════");
console.log("  VERIFICATION COMPLETE");
console.log("════════════════════════════════════════════════════════════");
