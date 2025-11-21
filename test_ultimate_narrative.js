
import { WorldExplorationEngine } from './World_Bible_folder/engines/WorldExplorationEngine.js';
import { LoreQuestSystem } from './World_Bible_folder/engines/LoreQuestSystem.js';

console.log("████████████████████████████████████████████████████████████████");
console.log("█  TESTING ULTIMATE NARRATIVE DEPTH                            █");
console.log("████████████████████████████████████████████████████████████████\n");

const mockWorldState = { recursionMemory: null };
const engine = new WorldExplorationEngine({ ...mockWorldState });

// Initialize Lore Quest System manually for test (usually in Engine)
const loreQuestSystem = new LoreQuestSystem(engine.loreSystem, engine.playerState);

// ═══════════════════════════════════════════════════════════════════════════
// SCENARIO 6: SKILL-SPECIFIC NARRATIVE (The Void Cloak)
// ═══════════════════════════════════════════════════════════════════════════
console.log("\n--- SCENARIO 6: SKILL-SPECIFIC NARRATIVE ---");

// 1. Equip the Skill
console.log("[ACTION] Equipping 'skill_void_cloak'...");
engine.playerState.unlockedSkills = ['skill_void_cloak'];

// 2. Trigger the Node
const sneakResult = engine.storyNodeSystem.resolveNode('ashram_entry', { player: engine.playerState });
console.log(`[RESULT] ${sneakResult.title}: ${sneakResult.dialogue}`);

if (sneakResult.outcomeType === 'SUCCESS' && sneakResult.dialogue.includes('shadow')) {
    console.log("✅ PASS: Specific skill triggered unique narrative path.");
} else {
    console.error("❌ FAIL: Skill trigger failed.");
}

// ═══════════════════════════════════════════════════════════════════════════
// SCENARIO 7: FUSION-SPECIFIC NARRATIVE (The Ancient Battery)
// ═══════════════════════════════════════════════════════════════════════════
console.log("\n--- SCENARIO 7: FUSION-SPECIFIC NARRATIVE ---");

// 1. Craft the Fusion
console.log("[ACTION] Crafting 'fusion_ancient_battery'...");
engine.playerState.activeFusions = ['fusion_ancient_battery'];

// 2. Trigger the Node
const fusionResult = engine.storyNodeSystem.resolveNode('relic_camp_approach', { player: engine.playerState });
console.log(`[RESULT] ${fusionResult.title}: ${fusionResult.dialogue}`);

if (fusionResult.outcomeType === 'SUCCESS' && fusionResult.dialogue.includes('Pre-Fall tech')) {
    console.log("✅ PASS: Fusion triggered unique NPC reaction.");
} else {
    console.error("❌ FAIL: Fusion trigger failed.");
}

// ═══════════════════════════════════════════════════════════════════════════
// SCENARIO 8: LORE QUEST PROGRESSION (The Archaeologist)
// ═══════════════════════════════════════════════════════════════════════════
console.log("\n--- SCENARIO 8: LORE QUEST PROGRESSION ---");

// 1. Start the Quest (Discover Trigger Fact)
console.log("[ACTION] Discovering 'fractured_mantra'...");
engine.loreSystem.discoverFact('fractured_mantra');
const startUpdates = loreQuestSystem.checkQuestProgression('FACT', 'fractured_mantra'); // Check for start
// Note: In real engine, this check happens automatically on discovery.
// We need to simulate the check.
// Let's manually start it for the test if the check fails to auto-start in this mock env.
if (loreQuestSystem.questDatabase['project_genesis'].startCondition(engine.loreSystem, engine.playerState)) {
    loreQuestSystem.startQuest('project_genesis');
    console.log("[QUEST] Started 'Project Genesis'");
}

// 2. Advance Step 1 (Find Log)
console.log("[ACTION] Finding 'collapse_log_1'...");
const step1Updates = loreQuestSystem.checkQuestProgression('FACT', 'collapse_log_1');
console.log(step1Updates.join('\n'));

if (step1Updates.some(u => u.includes('Step 1 Complete'))) {
    console.log("✅ PASS: Quest advanced via Fact Discovery.");
} else {
    console.error("❌ FAIL: Quest did not advance.");
}

// 3. Advance Step 2 (Deduction)
console.log("[ACTION] Making Deduction 'architect_conspiracy'...");
const step2Updates = loreQuestSystem.checkQuestProgression('DEDUCTION', 'architect_conspiracy');
console.log(step2Updates.join('\n'));

if (step2Updates.some(u => u.includes('Step 2 Complete'))) {
    console.log("✅ PASS: Quest advanced via Deduction.");
} else {
    console.error("❌ FAIL: Quest did not advance via Deduction.");
}

console.log("\n████████████████████████████████████████████████████████████████");
console.log("█  TEST COMPLETE                                               █");
console.log("████████████████████████████████████████████████████████████████");
