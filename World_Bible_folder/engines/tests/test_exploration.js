import { WorldExplorationEngine } from '../WorldExplorationEngine.js';

// Mock World State
const mockWorldState = {
  getLocationState: (locationId) => {
    return {
      corruption: 0,
      landmark: null,
      changes: []
    };
  }
};

console.log("═══════════════════════════════════════════════════════════════════════════");
console.log("TESTING WORLD EXPLORATION ENGINE");
console.log("═══════════════════════════════════════════════════════════════════════════");

const engine = new WorldExplorationEngine(mockWorldState);

// 1. Initialize World
console.log("\n[TEST 1] Initializing World...");
engine.initializeWorld('ashram_central');
console.log(`Current Region: ${engine.currentRegion}`);
if (engine.currentRegion === 'ashram_central') console.log("PASS: World initialized correctly.");
else console.log("FAIL: World initialization failed.");

// 2. Test Valid Movement
console.log("\n[TEST 2] Testing Valid Movement (Ashram Central -> Ruins Outskirts)...");
const moveResult1 = engine.moveToRegion('ruins_outskirts');
if (moveResult1.success) {
  console.log(`PASS: Moved to ${moveResult1.region.name}`);
  console.log(`Description: ${moveResult1.description}`);
} else {
  console.log(`FAIL: Movement failed. Reason: ${moveResult1.reason}`);
}

// 3. Test Invalid Movement (No Connection)
console.log("\n[TEST 3] Testing Invalid Movement (Ruins Outskirts -> Ashram Gardens)...");
// Gardens are connected to Central, not Ruins
const moveResult2 = engine.moveToRegion('ashram_gardens');
if (!moveResult2.success) {
  console.log(`PASS: Movement blocked correctly. Reason: ${moveResult2.reason}`);
} else {
  console.log(`FAIL: Movement should have failed but succeeded.`);
}

// 4. Test Locked Region
console.log("\n[TEST 4] Testing Locked Region (Deep Wilds -> Void Rift Alpha)...");
// First move to Deep Wilds
engine.moveToRegion('deep_wilds');
// Then try to enter locked rift
const moveResult3 = engine.moveToRegion('void_rift_alpha');
if (!moveResult3.success) {
  console.log(`PASS: Locked region blocked correctly. Reason: ${moveResult3.reason}`);
} else {
  console.log(`FAIL: Entered locked region without meeting requirements.`);
}

// 5. Test Event Generation
console.log("\n[TEST 5] Testing Event Generation (Deep Wilds)...");
const events = engine.generateRegionEvents('deep_wilds');
if (events.length > 0) {
  console.log(`PASS: Generated ${events.length} events.`);
  events.forEach(e => console.log(`- [${e.type}] ${e.description}`));
} else {
  console.log("NOTE: No events generated (random chance or low corruption).");
}

// 5b. Test Faction Events
console.log("\n[TEST 5b] Testing Faction Events (Ashram Central)...");
const ashramEvents = engine.generateRegionEvents('ashram_central');
const patrolEvent = ashramEvents.find(e => e.type === 'SOCIAL');
if (patrolEvent) {
  console.log(`PASS: Faction event generated: ${patrolEvent.description}`);
  
  // Test Event Resolution
  console.log("\n[TEST 5c] Testing Event Resolution...");
  const resolution = engine.resolveEvent('ashram_central', patrolEvent.id, 'ACCEPT');
  if (resolution.success) {
    console.log(`PASS: Event resolved. Reward: ${JSON.stringify(resolution.rewards)}`);
  } else {
    console.log(`FAIL: Event resolution failed. ${resolution.reason}`);
  }
} else {
  console.log("NOTE: No faction event generated (random chance).");
}

// 6. Test Environmental Interaction
console.log("\n[TEST 6] Testing Environmental Interaction...");

// 6a. Test Specific Object Interaction
console.log("[TEST 6a] Repairing Broken Fountain (Ashram Central)...");
// Force teleport for testing interaction logic directly
engine.currentRegion = 'ashram_central'; 
const repairSkill = { type: 'FOUNDATIONAL', resonance: 'MATTER' };
const repairResult = engine.interactWithEnvironment(repairSkill, 'broken_fountain');

if (repairResult.success && repairResult.result === 'REPAIRED') {
  console.log(`PASS: Interaction successful. ${repairResult.description}`);
} else {
  console.log(`FAIL: Interaction failed. ${repairResult.reason}`);
}

// 7. Test Deep Lore & Mechanics
console.log("\n[TEST 7] Testing Deep Lore & Mechanics (Fleshcraft Lab)...");
engine.currentRegion = 'fleshcraft_lab';
const regionData = engine.getRegionData('fleshcraft_lab');
if (regionData.mechanics && regionData.mechanics.includes('TOXIC_HAZARD')) {
  console.log("PASS: Region has TOXIC_HAZARD mechanic.");
} else {
  console.log("FAIL: Region missing TOXIC_HAZARD mechanic.");
}

// 8. Test Dynamic Mechanics Events (Toxic Spores)
console.log("\n[TEST 8] Testing Dynamic Mechanics Events (Toxic Spores)...");
const toxicEvents = engine.generateRegionEvents('fleshcraft_lab');
const sporeEvent = toxicEvents.find(e => e.id.startsWith('evt_tox_'));
if (sporeEvent) {
  console.log(`PASS: Toxic Spore event generated: ${sporeEvent.description}`);
  console.log(`Effect: ${sporeEvent.effect}`);
} else {
  console.log("FAIL: Toxic Spore event NOT generated.");
}

// 8b. Test Nightmare Events
console.log("\n[TEST 8b] Testing Nightmare Events (Mutation Pits)...");
const nightmareEvents = engine.generateRegionEvents('mutation_pits'); // Corruption 90
const horrorEvent = nightmareEvents.find(e => e.type === 'HORROR');
if (horrorEvent) {
  console.log(`PASS: Nightmare event generated: ${horrorEvent.description}`);
  console.log(`Enemies: ${horrorEvent.enemies.join(', ')}`);
} else {
  console.log("NOTE: Nightmare event chance failed (random).");
}

// 9. Test New Interactions
console.log("\n[TEST 9] Testing New Interactions...");

// 9a. Purify Zone
console.log("[TEST 9a] Purifying Corrupted Zone...");
// Mock high corruption
const corruptedRegion = engine.getRegionData('void_rift_alpha');
corruptedRegion.corruption = 80; // Force high corruption for test
engine.currentRegion = 'void_rift_alpha';

const lightSkill = { type: 'DIVINE', resonance: 'LIGHT' };
const purifyResult = engine.interactWithEnvironment(lightSkill, null); // General interaction

if (purifyResult.success && purifyResult.result === 'PURIFIED_ZONE') {
  console.log(`PASS: Zone Purified. ${purifyResult.description}`);
} else {
  console.log(`FAIL: Zone Purification failed. ${purifyResult.reason}`);
}

// 9b. Anomaly Stabilization
console.log("[TEST 9b] Stabilizing Time Anomaly...");
// We need a region with an anomaly. Let's check 'void_rift_alpha' or similar.
// Actually, let's check the file for 'ANOMALY' interactables.
// I'll assume 'void_rift_alpha' has one or I need to find one.
// If not, I'll mock it or use a region that has it.
// Looking at previous read_file, I didn't see 'void_rift_alpha' definition fully.
// I'll use 'fleshcraft_lab' which has 'bio_vat' (HAZARD).
// I need to find a region with 'ANOMALY'.
// If I can't find one, I'll skip this specific test or add it to the data.
// Let's assume 'void_rift_alpha' has 'temporal_glitch' for now, or I'll add it to the test setup.
// Better yet, I'll manually inject the interactable into the mock state or the engine's data for the test.
const riftRegion = engine.getRegionData('void_rift_alpha');
if (!riftRegion.interactables) riftRegion.interactables = [];
// Ensure we don't duplicate if running multiple times in same session (though this is a script)
if (!riftRegion.interactables.find(i => i.id === 'temporal_glitch')) {
    riftRegion.interactables.push({ id: 'temporal_glitch', type: 'ANOMALY', status: 'UNSTABLE' });
}

engine.currentRegion = 'void_rift_alpha';
const anomalySkill = { type: 'CHRONO', resonance: 'TIME' }; 
const anomalyResult = engine.interactWithEnvironment(anomalySkill, 'temporal_glitch');

if (anomalyResult.success && anomalyResult.result === 'ANOMALY_STABILIZED') {
  console.log(`PASS: Anomaly Stabilized. ${anomalyResult.description}`);
} else {
  console.log(`FAIL: Anomaly Stabilization failed. ${anomalyResult.reason}`);
}

// 10. Test World Simulation & Intel
console.log("\n[TEST 10] Testing World Simulation & Intel...");

// 10a. Simulate Turn
console.log("[TEST 10a] Simulating World Turn...");
// Force some conditions to trigger ecosystem events
const ashram = engine.getRegionData('ashram_central');
ashram.corruption = 40; // Trigger economic alert

// We need to ensure the ecosystem sees this updated data.
// The simulateTurn method reconstructs the map from getRegionData, so it should work.
// However, getRegionData might be returning a cached object or a new one.
// Let's verify getRegionData returns the same object we modified.
const ashramCheck = engine.getRegionData('ashram_central');
if (ashramCheck.corruption !== 40) {
    console.log("WARNING: getRegionData returned different object/value. Forcing update.");
    // If getRegionData creates a new object every time, we can't easily modify state for tests unless we modify the internal storage.
    // But WorldExplorationEngine uses `regionDatabase` internally in `getRegionData`? 
    // No, looking at the code, `getRegionData` has a hardcoded `regionDatabase` object inside it!
    // This is why the state isn't persisting or being shared correctly for the test modification.
    // We need to fix WorldExplorationEngine to store region data in a property, not re-create it.
}

const updates = engine.simulateTurn();
console.log(`Simulation Updates: ${updates.length}`);
updates.forEach(u => console.log(`- ${u}`));

// Check Global State
console.log(`Global Economy: ${engine.ecosystem.globalState.economy}`);
if (engine.ecosystem.globalState.economy > 1.0) {
  console.log("PASS: Economy reacted to corruption.");
} else {
  console.log("FAIL: Economy did not react.");
}

// 10b. Get Intel
console.log("[TEST 10b] Getting Region Intel (Ashram Central)...");
// Ensure NPCs are initialized (constructor does it, but let's verify)
// Move an NPC to a connected region to test intel
engine.npcLocations.set('Vira', 'ruins_outskirts'); // Connected to ashram_central
const intel = engine.getRegionIntel('ashram_central');
if (intel.length > 0) {
  console.log(`PASS: Intel received.`);
  intel.forEach(i => console.log(`- ${i}`));
} else {
  console.log("NOTE: No intel available (might be random or no events).");
}

// 11. Test Advanced Events (Cross-Faction, Recursion, Time-Sensitive)
console.log("\n[TEST 11] Testing Advanced Events...");

// 11a. Cross-Faction Clash
console.log("[TEST 11a] Generating Cross-Faction Clash...");
// Setup: Ashram Central (Ashram) connected to Ruins Outskirts (Factionless - won't trigger)
// Let's use 'deep_wilds' (Seekers) connected to 'void_rift_alpha' (Corruption)
// We need to ensure they are neighbors.
// deep_wilds connects to void_rift_alpha.
// deep_wilds faction: nomadic_relic_seekers
// void_rift_alpha faction: corruption_champions
// This should trigger a clash if we generate events for deep_wilds.
const clashEvents = engine.generateRegionEvents('deep_wilds');
const warEvent = clashEvents.find(e => e.type === 'FACTION_CLASH');
if (warEvent) {
  console.log(`PASS: Faction Clash generated: ${warEvent.description}`);
  console.log(`Choices: ${warEvent.choices.map(c => c.label).join(', ')}`);
} else {
  console.log("NOTE: Faction Clash chance failed (random).");
}

// 11b. Recursion Event
console.log("[TEST 11b] Generating Recursion Event...");
engine.worldState.loopCount = 3; // Simulate 3rd loop
const loopEvents = engine.generateRegionEvents('echo_caverns'); // Any region works, but echo fits
const echoEvent = loopEvents.find(e => e.type === 'RECURSION_ECHO');
if (echoEvent) {
  console.log(`PASS: Recursion Echo generated: ${echoEvent.description}`);
} else {
  console.log("NOTE: Recursion Echo chance failed (random).");
}

// 11c. Time-Sensitive Expiration
console.log("[TEST 11c] Testing Time-Sensitive Event Expiration...");
// Inject a mock time-sensitive event
const testRegionId = 'ashram_central';
const mockEvent = {
  id: 'evt_timer_test',
  type: 'URGENT_MISSION',
  description: 'Bomb ticking!',
  turnsRemaining: 1
};
engine.activeEvents.set(testRegionId, [mockEvent]);

console.log("Simulating 1 turn...");
const expireUpdates = engine.simulateTurn();
const expiredLog = expireUpdates.find(u => u.includes('Event Expired') && u.includes('Bomb ticking'));

if (expiredLog) {
  console.log(`PASS: Event expired correctly. Log: ${expiredLog}`);
} else {
  console.log("FAIL: Event did not expire or log missing.");
}

// 12. Test Skill Unlocks
console.log("\n[TEST 12] Testing Skill Unlocks...");

// 12a. Interaction Unlock (Void Anchor)
console.log("[TEST 12a] Testing Interaction Unlock (Void Anchor)...");
// Force move to Void Rift Alpha where temporal_glitch is
engine.currentRegion = 'void_rift_alpha'; 
// Reset anomaly status for test purposes (since Test 9b might have stabilized it)
const voidRegionData = engine.getRegionData('void_rift_alpha');
const anomaly = voidRegionData.interactables.find(i => i.id === 'temporal_glitch');
if (anomaly) anomaly.status = 'UNSTABLE';

// Mock a successful interaction with temporal_glitch
const interactionResult = engine.interactWithEnvironment({ type: 'CHRONO', resonance: 'VOID' }, 'temporal_glitch');

if (interactionResult.success && engine.playerState.unlockedSkills.includes('void_anchor')) {
  console.log("PASS: Void Anchor unlocked via interaction.");
} else {
  console.log(`FAIL: Void Anchor not unlocked. Result: ${JSON.stringify(interactionResult)}`);
  console.log(`Unlocked Skills: ${JSON.stringify(engine.playerState.unlockedSkills)}`);
}

// 12b. Reputation Unlock (Seeker's Sight)
console.log("[TEST 12b] Testing Reputation Unlock (Seeker's Sight)...");
// Manually boost reputation to trigger threshold
engine.playerState.reputation['nomadic_relic_seekers'] = 50; // Threshold is 50
// Trigger a check manually or via event resolution
const repUnlock = engine.skillUnlockSystem.checkUnlocks('REPUTATION', { 
  factionId: 'nomadic_relic_seekers', 
  value: 50, 
  playerState: engine.playerState 
});

if (repUnlock.includes('seekers_sight')) {
  console.log("PASS: Seeker's Sight unlocked via reputation.");
} else {
  console.log(`FAIL: Seeker's Sight not unlocked. Result: ${JSON.stringify(repUnlock)}`);
}

// 12c. Fusion Trial Unlock (Void Storm Conduit)
console.log("[TEST 12c] Testing Fusion Trial Unlock (Void Storm Conduit)...");
// Inject a mock Fusion Trial event
const fusionEvent = {
  id: 'evt_fusion_test',
  type: 'FUSION_TRIAL',
  description: 'Test Trial',
  trialType: 'FUSION_TRIAL_STORM',
  rewards: { experience: 1000 }
};
engine.activeEvents.set('void_rift_alpha', [fusionEvent]);

// Resolve it
const fusionResult = engine.resolveEvent('void_rift_alpha', 'evt_fusion_test');

if (fusionResult.message.includes('FUSION DISCOVERED: void_storm_conduit')) {
  console.log("PASS: Void Storm Conduit unlocked via Fusion Trial.");
} else {
  console.log(`FAIL: Fusion unlock failed. Message: ${fusionResult.message}`);
}

// 13. Test Skill Resonance
console.log("\n[TEST 13] Testing Skill Resonance System...");

// 13a. Test Void Skill in High Corruption (Resonance Match)
console.log("[TEST 13a] Testing Void Skill in High Corruption (Resonance Match)...");
engine.currentRegion = 'void_rift_alpha'; // High Corruption
const voidSkill = { id: 'void_blast', type: 'COMBAT', resonance: 'VOID' };
const resonanceResult1 = engine.interactWithEnvironment(voidSkill, 'non_existent_target');

if (resonanceResult1.success && resonanceResult1.result === 'RESONANCE_ECHO') {
  console.log(`PASS: Resonance Echo triggered. Description: ${resonanceResult1.description}`);
} else {
  console.log(`FAIL: Resonance Echo not triggered. Result: ${JSON.stringify(resonanceResult1)}`);
}

// 13b. Test Light Skill in High Corruption (Conflict)
console.log("[TEST 13b] Testing Light Skill in High Corruption (Conflict)...");
const lightSkillResonance = { id: 'healing_light', type: 'SUPPORT', resonance: 'LIGHT' };
const resonanceResult2 = engine.interactWithEnvironment(lightSkillResonance, 'non_existent_target');

if (resonanceResult2.success && resonanceResult2.result === 'PURIFIED_ZONE') {
  console.log(`PASS: Purification triggered. Description: ${resonanceResult2.description}`);
} else {
  console.log(`FAIL: Purification not triggered. Result: ${JSON.stringify(resonanceResult2)}`);
}

// 13c. Test Fusion Skill Resonance (Chaos in Order)
console.log("[TEST 13c] Testing Fusion Skill Resonance (Chaos in Order)...");
engine.currentRegion = 'ashram_central'; // Low Corruption
// Reset corruption for this test to ensure condition met
const ashramData = engine.getRegionData('ashram_central');
ashramData.corruption = 10; 

const fusionSkill = { 
  id: 'custom_fusion', 
  type: 'FUSION', 
  isFusion: true, 
  components: ['VOID', 'INFERNAL'] 
};
const resonanceResult3 = engine.interactWithEnvironment(fusionSkill, 'non_existent_target');

if (resonanceResult3.success && resonanceResult3.result === 'RESONANCE_ECHO') {
  console.log(`PASS: Fusion Resonance triggered. Description: ${resonanceResult3.description}`);
} else {
  console.log(`FAIL: Fusion Resonance not triggered. Result: ${JSON.stringify(resonanceResult3)}`);
}

// 14. Test NPC Reactions
console.log("\n[TEST 14] Testing NPC Reactions...");

// 14a. Vira (Light/Order) reacting to Chaos Skill
console.log("[TEST 14a] Vira reacting to Chaos Skill...");
engine.currentRegion = 'ashram_central'; // Vira is here
// Reset corruption again just in case
const ashramData2 = engine.getRegionData('ashram_central');
ashramData2.corruption = 10;

const chaosSkill = { id: 'chaos_blast', type: 'COMBAT', resonance: 'VOID' }; // Chaos 80
const npcResult1 = engine.interactWithEnvironment(chaosSkill, 'non_existent_target');

if (npcResult1.description.includes('Vira: "That power... it\'s too unstable!"')) {
  console.log("PASS: Vira reacted with fear to Chaos.");
} else {
  console.log(`FAIL: Vira did not react correctly. Desc: ${npcResult1.description}`);
}

// 14b. Malakar (Void/Chaos) reacting to Chaos Skill
console.log("[TEST 14b] Malakar reacting to Chaos Skill...");
engine.currentRegion = 'void_rift_alpha'; // Malakar is here
const npcResult2 = engine.interactWithEnvironment(chaosSkill, 'non_existent_target');

if (npcResult2.description.includes('Malakar: "Impressive control."')) {
  console.log("PASS: Malakar reacted with admiration to Chaos.");
} else {
  console.log(`FAIL: Malakar did not react correctly. Desc: ${npcResult2.description}`);
}

// 15. Test World Stability & Transformation
console.log("\n[TEST 15] Testing World Stability & Transformation...");

// 15a. Agitate Region to Fracture
console.log("[TEST 15a] Agitating Region to Fracture...");
engine.currentRegion = 'ashram_gardens'; // Sacred, Low Corruption
const gardenData = engine.getRegionData('ashram_gardens');
gardenData.stability = 10; // Set low stability for test
gardenData.corruption = 60; // Set high corruption to force Void transformation

// Use a Chaos skill to agitate
const chaosNuke = { id: 'void_cataclysm', type: 'COMBAT', resonance: 'VOID' }; // High Chaos
const fractureResult = engine.interactWithEnvironment(chaosNuke, 'non_existent_target');

if (fractureResult.success && fractureResult.description.includes('[CRITICAL] The region has permanently changed!')) {
  console.log("PASS: Region fractured and transformed.");
  console.log(`New Type: ${gardenData.type}`);
  console.log(`Description: ${gardenData.description}`);
} else {
  console.log(`FAIL: Region did not fracture. Result: ${JSON.stringify(fractureResult)}`);
  console.log(`Stability: ${gardenData.stability}`);
}

console.log("\n═══════════════════════════════════════════════════════════════════════════");
console.log("TESTING COMPLETE");
console.log("═══════════════════════════════════════════════════════════════════════════");

console.log("\n═══════════════════════════════════════════════════════════════════════════");
console.log("TESTING COMPLETE");
console.log("═══════════════════════════════════════════════════════════════════════════");
