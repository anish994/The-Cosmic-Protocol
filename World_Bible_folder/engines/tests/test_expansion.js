import { WorldExplorationEngine } from '../WorldExplorationEngine.js';

console.log("═══════════════════════════════════════════════════════════════════════════");
console.log("               TESTING SYSTEM EXPANSION (QUESTS, FACTIONS, SYNERGIES)");
console.log("═══════════════════════════════════════════════════════════════════════════");

const worldState = {
  regions: {},
  playerState: {
    unlockedSkills: [],
    questLog: [],
    resources: { essence: 1000 },
    reputation: {
      'ashram_remnants': 10,
      'corruption_champions': 0
    },
    stats: {}
  }
};

const engine = new WorldExplorationEngine(worldState);

// 1. Test Quest Completion & Unlock
console.log("\n[TEST 1] Testing Quest Completion...");
const questResult = engine.completeQuest('purify_ashram_gardens');
console.log(`Result: ${questResult.message}`);
if (questResult.unlockedSkills.includes('healing_bloom')) {
  console.log("PASS: 'Healing Bloom' unlocked via Quest.");
} else {
  console.log("FAIL: Skill not unlocked.");
}

// 2. Test Skill-World Synergy (Healing Bloom in Gardens)
console.log("\n[TEST 2] Testing Skill-World Synergy...");
engine.currentRegion = 'ashram_gardens';
const gardenData = engine.getRegionData('ashram_gardens');
gardenData.corruption = 50; // Corrupt it first
gardenData.type = 'VOID_ZONE'; // Simulate bad state

const healingSkill = { id: 'healing_bloom', type: 'NATURE', resonance: 'NATURE' };
const synergyResult = engine.interactWithEnvironment(healingSkill, 'non_existent_target');

if (synergyResult.result === 'PURIFIED_GARDEN') {
  console.log("PASS: Garden Purified.");
  console.log(`Description: ${synergyResult.description}`);
  if (gardenData.corruption === 0 && gardenData.type === 'SACRED') {
    console.log("PASS: Region State Updated (Corruption: 0, Type: SACRED).");
  } else {
    console.log(`FAIL: Region State: Corruption ${gardenData.corruption}, Type ${gardenData.type}`);
  }
} else {
  console.log(`FAIL: Synergy not triggered. Result: ${JSON.stringify(synergyResult)}`);
}

// 3. Test Faction Reaction
console.log("\n[TEST 3] Testing Faction Reaction...");
engine.currentRegion = 'ashram_central'; // Controlled by Ashram Remnants
const ashramData = engine.getRegionData('ashram_central');
const initialRep = engine.playerState.reputation['ashram_remnants'];

// Use a Chaos skill (Ashram hates this)
const chaosSkill = { id: 'void_blast', type: 'COMBAT', resonance: 'VOID' }; // High Chaos
const factionResult = engine.interactWithEnvironment(chaosSkill, 'non_existent_target');

const newRep = engine.playerState.reputation['ashram_remnants'];
console.log(`Initial Rep: ${initialRep}, New Rep: ${newRep}`);
if (newRep < initialRep) {
  console.log("PASS: Reputation decreased for using Chaos in Ashram.");
  console.log(`Log: ${factionResult.description}`);
} else {
  console.log("FAIL: Reputation did not decrease.");
}

// 4. Test Fusion Trial Branching
console.log("\n[TEST 4] Testing Fusion Trial Branching...");
const eventId = 'evt_fusion_test';
engine.activeEvents.set('ashram_central', [{
  id: eventId,
  type: 'FUSION_TRIAL',
  description: 'A swirling vortex of light and shadow.',
  trialType: 'FUSION_TRIAL_STORM',
  rewards: { experience: 1000 }
}]);

const resolveResult = engine.resolveEvent('ashram_central', eventId, 'ABSORB');
console.log(`Message: ${resolveResult.message}`);
if (resolveResult.rewards.corruption === 10) {
  console.log("PASS: 'ABSORB' choice granted Corruption penalty.");
} else {
  console.log("FAIL: Rewards incorrect.");
}

console.log("\n═══════════════════════════════════════════════════════════════════════════");
console.log("TESTING COMPLETE");
console.log("═══════════════════════════════════════════════════════════════════════════");
