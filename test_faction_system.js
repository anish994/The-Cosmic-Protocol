import { FactionSystem } from './World_Bible_folder/engines/FactionSystem.js';
import { EventBus } from './World_Bible_folder/engines/GlobalEventBus.js';

console.log("════════════════════════════════════════════════════════════");
console.log("  FACTION SYSTEM VERIFICATION");
console.log("════════════════════════════════════════════════════════════");

// Mock World State
const worldState = {
    playerState: {
        reputation: {}
    }
};

const factionSystem = new FactionSystem(worldState);

// 1. Test Reputation Change
console.log("\n[TEST 1] Direct Reputation Change");
factionSystem.modifyReputation('ashram_remnants', 20, "Completed Quest");

if (worldState.playerState.reputation['ashram_remnants'] === 20) {
    console.log("PASS: Reputation updated correctly.");
} else {
    console.error(`FAIL: Expected 20, got ${worldState.playerState.reputation['ashram_remnants']}`);
}

// 2. Test Ripple Effect (Enemy)
console.log("\n[TEST 2] Ripple Effect (Enemy)");
// Ashram Remnants are enemies with Untethered Architects
// Helping Ashram (+20) should hurt Architects (-10)
const architectRep = worldState.playerState.reputation['untethered_architects'];
if (architectRep === -10) {
    console.log("PASS: Enemy reputation decreased correctly (-10).");
} else {
    console.error(`FAIL: Expected -10, got ${architectRep}`);
}

// 3. Test World Event Handling
console.log("\n[TEST 3] Faction Skirmish Simulation");
let rumorGenerated = false;
EventBus.on('RUMOR_GENERATED', (data) => {
    console.log(`[EventBus] Rumor Caught: "${data.text}"`);
    rumorGenerated = true;
});

factionSystem.handleWorldEvent({ type: 'FACTION_SKIRMISH' });

if (rumorGenerated) {
    console.log("PASS: Skirmish generated a rumor.");
} else {
    console.error("FAIL: No rumor generated from skirmish.");
}

console.log("\n════════════════════════════════════════════════════════════");
console.log("  VERIFICATION COMPLETE");
console.log("════════════════════════════════════════════════════════════");
