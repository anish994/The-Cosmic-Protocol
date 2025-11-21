import { SkillUnlocker, UnlockType } from './World_Bible_folder/engines/SkillUnlockRegistry.js';
import { TrialSystem, TrialType } from './World_Bible_folder/engines/SkillTrialSystem.js';
import { EventBus } from './World_Bible_folder/engines/GlobalEventBus.js';

console.log("════════════════════════════════════════════════════════════");
console.log("  SKILL UNLOCK & TRIAL SYSTEM VERIFICATION");
console.log("════════════════════════════════════════════════════════════");

// 1. Test Quest Unlock
console.log("\n[TEST 1] Quest Unlock Mechanism");
const TEST_SKILL_ID = "skill_void_blast";
const TEST_QUEST_ID = "quest_void_awakening";

SkillUnlocker.registerSkillUnlock(TEST_SKILL_ID, UnlockType.QUEST, { questId: TEST_QUEST_ID });

if (SkillUnlocker.isUnlocked(TEST_SKILL_ID)) {
    console.error("FAIL: Skill should be locked initially.");
} else {
    console.log("PASS: Skill is initially locked.");
}

console.log(`Simulating Quest Completion: ${TEST_QUEST_ID}`);
EventBus.emit('QUEST_COMPLETED', { questId: TEST_QUEST_ID });

if (SkillUnlocker.isUnlocked(TEST_SKILL_ID)) {
    console.log("PASS: Skill unlocked after quest completion.");
} else {
    console.error("FAIL: Skill did not unlock.");
}

// 2. Test Trial System
console.log("\n[TEST 2] Trial System Mechanism");
const TRIAL_ID = "trial_fire_mastery";
const REWARD_SKILL_ID = "skill_inferno_wave";

SkillUnlocker.registerSkillUnlock(REWARD_SKILL_ID, UnlockType.TRIAL, { trialId: TRIAL_ID });

TrialSystem.registerTrial(TRIAL_ID, {
    type: TrialType.COMBAT_DAMAGE,
    targetSkillId: REWARD_SKILL_ID,
    description: "Deal 1000 Fire Damage",
    parameters: { targetDamage: 1000 }
});

console.log(`Starting Trial: ${TRIAL_ID}`);
const started = TrialSystem.startTrial(TRIAL_ID, {});

if (started) {
    console.log("PASS: Trial started successfully.");
} else {
    console.error("FAIL: Trial failed to start.");
}

console.log("Simulating Damage Progress (500 damage)...");
TrialSystem.updateProgress('damage_dealt', 500);

if (SkillUnlocker.isUnlocked(REWARD_SKILL_ID)) {
    console.error("FAIL: Skill unlocked prematurely.");
} else {
    console.log("PASS: Skill remains locked (progress 50%).");
}

console.log("Simulating Damage Progress (500 damage)...");
TrialSystem.updateProgress('damage_dealt', 500);

if (SkillUnlocker.isUnlocked(REWARD_SKILL_ID)) {
    console.log("PASS: Skill unlocked after trial completion.");
} else {
    console.error("FAIL: Skill did not unlock after trial.");
}

console.log("\n════════════════════════════════════════════════════════════");
console.log("  VERIFICATION COMPLETE");
console.log("════════════════════════════════════════════════════════════");
