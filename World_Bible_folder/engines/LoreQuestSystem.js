/**
 * ═══════════════════════════════════════════════════════════════════════════
 * LORE QUEST SYSTEM (THE ARCHAEOLOGIST)
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * Manages "Intellectual Quests" where progress is made by discovering facts,
 * making deductions, and understanding the world, rather than just killing.
 * 
 * FEATURES:
 * 1. Deduction-Based Progression: You don't "turn in" quests; you "realize" truths.
 * 2. Artifact Analysis: Physical items give Lore Facts when analyzed.
 * 3. Pre-Fall Archives: Unlocking corrupted data fragments.
 * 
 * @version 1.0
 * ═══════════════════════════════════════════════════════════════════════════
 */

import { EventBus } from './GlobalEventBus.js';

export class LoreQuestSystem {
    constructor(loreIntegrationSystem, playerState) {
        this.loreSystem = loreIntegrationSystem;
        this.playerState = playerState;
        this.activeQuests = new Map();
        this.completedQuests = new Set();
        
        this.questDatabase = this._initializeQuestDatabase();
    }

    /**
     * Checks if any quests advance based on a new Fact or Deduction.
     * @param {string} triggerType - 'FACT' or 'DEDUCTION'
     * @param {string} id - The ID of the fact/deduction
     */
    checkQuestProgression(triggerType, id) {
        const updates = [];

        // Check all active quests
        for (const [questId, progress] of this.activeQuests) {
            const quest = this.questDatabase[questId];
            if (!quest) continue;

            // Check specific steps
            const currentStepIndex = progress.step;
            const currentStep = quest.steps[currentStepIndex];

            if (currentStep.trigger === triggerType && currentStep.targetId === id) {
                // Advance Step
                progress.step++;
                updates.push(`[QUEST UPDATE] ${quest.title}: Step ${progress.step} Complete.`);
                
                // Check Completion
                if (progress.step >= quest.steps.length) {
                    this._completeQuest(questId);
                    updates.push(`[QUEST COMPLETE] ${quest.title}`);
                }
            }
        }

        // Check for New Quest Triggers (Hidden Quests)
        for (const [questId, quest] of Object.entries(this.questDatabase)) {
            if (!this.activeQuests.has(questId) && !this.completedQuests.has(questId)) {
                if (quest.startCondition && quest.startCondition(this.loreSystem, this.playerState)) {
                    this.startQuest(questId);
                    updates.push(`[QUEST STARTED] ${quest.title}`);
                }
            }
        }

        return updates;
    }

    startQuest(questId) {
        if (this.questDatabase[questId]) {
            this.activeQuests.set(questId, { step: 0, startedAt: Date.now() });
        }
    }

    _completeQuest(questId) {
        this.activeQuests.delete(questId);
        this.completedQuests.add(questId);
        const quest = this.questDatabase[questId];
        
        console.log(`[LoreQuest] Completed: ${quest.title}`);
        EventBus.emit('QUEST_COMPLETED', { questId, questName: quest.title });

        // Grant Rewards
        if (quest.rewards) {
            if (quest.rewards.essence) this.playerState.resources.essence += quest.rewards.essence;
            if (quest.rewards.reputation) {
                for (const [faction, amount] of Object.entries(quest.rewards.reputation)) {
                    this.playerState.reputation[faction] = (this.playerState.reputation[faction] || 0) + amount;
                }
            }
        }
    }

    _initializeQuestDatabase() {
        return {
            "project_genesis": {
                id: "project_genesis",
                title: "Project Genesis: The First Code",
                description: "Uncover the origins of the CPS and the Architect's first mistake.",
                startCondition: (lore, player) => lore.knownFacts.has('fractured_mantra'),
                steps: [
                    { trigger: 'FACT', targetId: 'collapse_log_1', description: "Find the Collapse Log." },
                    { trigger: 'DEDUCTION', targetId: 'architect_conspiracy', description: "Deduce the Architect's betrayal." },
                    { trigger: 'FACT', targetId: 'pre_fall_schematic', description: "Locate the Pre-Fall Schematic." }
                ],
                rewards: {
                    essence: 500,
                    reputation: { 'untethered_architects': 20 }
                }
            },
            "voice_of_void": {
                id: "voice_of_void",
                title: "The Voice in the Static",
                description: "Investigate the strange whispers coming from the Deep Web.",
                startCondition: (lore, player) => player.resonanceUsage && player.resonanceUsage.void > 20,
                steps: [
                    { trigger: 'FACT', targetId: 'void_signal_alpha', description: "Isolate the signal." },
                    { trigger: 'DEDUCTION', targetId: 'void_sentience', description: "Realize the Void is alive." }
                ],
                rewards: {
                    essence: 1000,
                    reputation: { 'post_human_cults': 30, 'ashram_remnants': -20 }
                }
            }
        };
    }
}
