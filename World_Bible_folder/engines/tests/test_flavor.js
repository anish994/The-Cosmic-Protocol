import { WorldExplorationEngine } from '../WorldExplorationEngine.js';

console.log("═══════════════════════════════════════════════════════════════════════════");
console.log("               TESTING DEEPENED FLAVOR & SYNERGIES");
console.log("═══════════════════════════════════════════════════════════════════════════");

const worldState = {
  regions: {},
  playerState: {
    unlockedSkills: [],
    questLog: [],
    resources: { essence: 1000 },
    reputation: {
      'ashram_remnants': 0,
      'corruption_champions': 0
    },
    stats: {}
  }
};

const engine = new WorldExplorationEngine(worldState);

// 1. Test Enhanced Flavor Text (Void Resonance)
console.log("\n[TEST 1] Testing Enhanced Flavor Text (Void)...");
engine.currentRegion = 'ashram_central';
const voidSkill = { id: 'void_blast', type: 'COMBAT', resonance: 'VOID' };
const flavorResult = engine.interactWithEnvironment(voidSkill, 'non_existent_target');

if (flavorResult.description.includes('The world shivers, as if a cold wind blew through a closed room.')) {
  console.log("PASS: Enhanced Void flavor text detected.");
} else {
  console.log(`FAIL: Description: ${flavorResult.description}`);
}

// 2. Test New Registry Synergy (Infernal Burn)
console.log("\n[TEST 2] Testing Infernal Synergy (Burn Obstacles)...");
// Setup a dummy region with vines
engine.currentRegion = 'deep_wilds';
const wildData = engine.getRegionData('deep_wilds');
wildData.interactables = [{ id: 'thorny_vines', type: 'OBSTACLE', status: 'BLOCKING', reqSkill: 'INFERNAL' }];

const infernalSkill = { id: 'infernal_blast', type: 'COMBAT', resonance: 'INFERNAL' };
const burnResult = engine.interactWithEnvironment(infernalSkill, 'thorny_vines');

if (burnResult.result === 'OBSTACLE_CLEARED') {
  console.log("PASS: Obstacle cleared with Infernal skill.");
  console.log(`Description: ${burnResult.description}`);
} else {
  console.log(`FAIL: Result: ${JSON.stringify(burnResult)}`);
}

// 3. Test Faction Personality (Corruption Champions)
console.log("\n[TEST 3] Testing Faction Personality (Corruption Champions)...");
engine.currentRegion = 'mutation_pits'; // Controlled by Corruption Champions
const champData = engine.getRegionData('mutation_pits');
champData.controllingFaction = 'corruption_champions';

// Use a Destruction skill
const destroySkill = { id: 'infernal_blast', type: 'COMBAT', resonance: 'INFERNAL' }; // High Destruction
const factionResult = engine.interactWithEnvironment(destroySkill, 'non_existent_target');

if (factionResult.description.includes("The Champions roar. 'Let it burn! Let it all return to dust!'")) {
  console.log("PASS: Corruption Champions reacted with unique dialogue.");
} else {
  console.log(`FAIL: Description: ${factionResult.description}`);
}

console.log("\n═══════════════════════════════════════════════════════════════════════════");
console.log("TESTING COMPLETE");
console.log("═══════════════════════════════════════════════════════════════════════════");
