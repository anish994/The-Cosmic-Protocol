import { WorldExplorationEngine } from '../WorldExplorationEngine.js';

console.log("═══════════════════════════════════════════════════════════════════════════");
console.log("               TESTING DEEPENED SYSTEMS");
console.log("═══════════════════════════════════════════════════════════════════════════");

const worldState = {
  regions: {},
  playerState: {
    unlockedSkills: [],
    questLog: [],
    resources: { essence: 1000 },
    reputation: {
      'ashram_remnants': 100, // High rep for testing
      'corruption_champions': 0
    },
    stats: {}
  }
};

const engine = new WorldExplorationEngine(worldState);

// 1. Test Registry-Based Synergy (Purify Archives)
console.log("\n[TEST 1] Testing Registry Synergy (Purify Archives)...");
engine.currentRegion = 'ashram_archives';
const archiveData = engine.getRegionData('ashram_archives');
archiveData.corruption = 50;

const lightSkill = { id: 'light_beam', type: 'LIGHT', resonance: 'LIGHT' };
const synergyResult = engine.interactWithEnvironment(lightSkill, 'non_existent_target');

if (synergyResult.result === 'CLEANSED_ARCHIVES') {
  console.log("PASS: Archives Cleansed via Registry.");
  console.log(`Description: ${synergyResult.description}`);
  if (archiveData.corruption === 20) { // 50 - 30
    console.log("PASS: Corruption reduced correctly.");
  } else {
    console.log(`FAIL: Corruption is ${archiveData.corruption}`);
  }
} else {
  console.log(`FAIL: Synergy not triggered. Result: ${JSON.stringify(synergyResult)}`);
}

// 2. Test New Stability Transformation (Crystallized)
console.log("\n[TEST 2] Testing Crystallized Transformation...");
engine.currentRegion = 'ashram_central';
const centralData = engine.getRegionData('ashram_central');
centralData.corruption = 10; // Low corruption
centralData.stability = 10; // Low stability
centralData.controllingFaction = 'ashram_remnants';

// Use a skill that agitates (High Chaos in Low Corruption)
const chaosSkill = { id: 'void_blast', type: 'COMBAT', resonance: 'VOID' }; // High Chaos
const fractureResult = engine.interactWithEnvironment(chaosSkill, 'non_existent_target');

if (fractureResult.result === 'REGION_FRACTURED') {
  console.log("PASS: Region Fractured.");
  if (centralData.type === 'CRYSTALLIZED') {
    console.log("PASS: Transformed to CRYSTALLIZED (Order Overload).");
    console.log(`Description: ${centralData.description}`);
  } else {
    console.log(`FAIL: Transformed to ${centralData.type}`);
  }
} else {
  console.log(`FAIL: Did not fracture. Result: ${JSON.stringify(fractureResult)}`);
}

// 3. Test Expanded Skill Unlocks (Market Negotiator)
console.log("\n[TEST 3] Testing Reputation Unlock (Market Negotiator)...");
// Trigger a reputation check manually or via event
const unlocks = engine.skillUnlockSystem.checkUnlocks('REPUTATION', {
  factionId: 'ashram_remnants',
  value: 100,
  playerState: engine.playerState
});

if (unlocks.includes('market_negotiator')) {
  console.log("PASS: 'Market Negotiator' unlocked via High Reputation.");
} else {
  console.log(`FAIL: Unlocks: ${unlocks.join(', ')}`);
}

console.log("\n═══════════════════════════════════════════════════════════════════════════");
console.log("TESTING COMPLETE");
console.log("═══════════════════════════════════════════════════════════════════════════");
