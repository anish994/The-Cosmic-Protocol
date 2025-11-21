import { WorldExplorationEngine } from '../WorldExplorationEngine.js';

console.log("═══════════════════════════════════════════════════════════════════════════");
console.log("               TESTING DEATH & RESURRECTION MECHANICS");
console.log("═══════════════════════════════════════════════════════════════════════════");

const worldState = {
  regions: {},
  playerState: {
    unlockedSkills: [],
    resources: { essence: 1000 }, // Start with 1000 Essence
    reputation: {},
    stats: {}
  }
};

const engine = new WorldExplorationEngine(worldState);
engine.currentRegion = 'ruins_outskirts'; // Start in a dangerous place

console.log(`[SETUP] Player Essence: ${engine.playerState.resources.essence}`);
console.log(`[SETUP] Current Region: ${engine.currentRegion}`);

// 1. Trigger Death
console.log("\n[TEST 1] Triggering Death by 'Void Stalker'...");
const deathResult = engine.triggerDeath('Void Stalker');

console.log(`Message: ${deathResult.message}`);
console.log(`Subtext: ${deathResult.subtext}`);
console.log(`Lost Essence: ${deathResult.lostEssence}`);
console.log(`Respawn Point: ${deathResult.respawnPoint}`);

if (engine.playerState.resources.essence === 0) {
  console.log("PASS: Player Essence reduced to 0.");
} else {
  console.log(`FAIL: Player Essence is ${engine.playerState.resources.essence}`);
}

if (engine.currentRegion === 'ashram_central') {
  console.log("PASS: Player respawned at Ashram Central.");
} else {
  console.log(`FAIL: Player is at ${engine.currentRegion}`);
}

// 2. Check Bloodstain
console.log("\n[TEST 2] Checking Bloodstain...");
// We need to move back to the death spot to recover it
engine.currentRegion = 'ruins_outskirts';
const recoveryResult = engine.recoverEssence();

if (recoveryResult.success) {
  console.log(`PASS: Bloodstain recovered. Amount: ${recoveryResult.recoveredAmount}`);
  console.log(`Message: ${recoveryResult.message}`);
} else {
  console.log(`FAIL: Could not recover bloodstain. Result: ${JSON.stringify(recoveryResult)}`);
}

if (engine.playerState.resources.essence === 1000) {
  console.log("PASS: Essence fully restored.");
} else {
  console.log(`FAIL: Essence is ${engine.playerState.resources.essence}`);
}

// 3. Check Nemesis System
console.log("\n[TEST 3] Checking Nemesis Evolution...");
const nemesis = engine.deathMechanics.getNemesis('ruins_outskirts');
if (nemesis && nemesis.enemyId === 'Void Stalker') {
  console.log(`PASS: Nemesis created: ${nemesis.enemyId} (Power: ${nemesis.powerLevel})`);
} else {
  console.log("FAIL: Nemesis not found.");
}

// 4. Trigger Death Again (Nemesis Level Up)
console.log("\n[TEST 4] Dying to Nemesis again...");
engine.playerState.resources.essence = 500;
const deathResult2 = engine.triggerDeath('Void Stalker');

const nemesis2 = engine.deathMechanics.getNemesis('ruins_outskirts');
if (nemesis2.powerLevel === 2) {
  console.log(`PASS: Nemesis leveled up to ${nemesis2.powerLevel}.`);
  console.log(`Update Log: ${deathResult2.nemesisUpdate}`);
} else {
  console.log(`FAIL: Nemesis level is ${nemesis2.powerLevel}`);
}

console.log("\n═══════════════════════════════════════════════════════════════════════════");
console.log("TESTING COMPLETE");
console.log("═══════════════════════════════════════════════════════════════════════════");
