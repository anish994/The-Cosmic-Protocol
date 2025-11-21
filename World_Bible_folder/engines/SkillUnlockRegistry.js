/**
 * ═══════════════════════════════════════════════════════════════════════════
 * SKILL UNLOCK REGISTRY
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * Manages the acquisition and unlock state of all skills.
 * Handles Quest, Faction, Secret, and Trial-based unlocks.
 * 
 * @version 1.0
 * ═══════════════════════════════════════════════════════════════════════════
 */

import { EventBus } from './GlobalEventBus.js';
import { Registry } from './GameRegistry.js';

export const UnlockType = {
    DEFAULT: 'DEFAULT',
    QUEST: 'QUEST',
    FACTION: 'FACTION',
    SECRET: 'SECRET',
    TRIAL: 'TRIAL',
    PURCHASE: 'PURCHASE'
};

class SkillUnlockRegistry {
    constructor() {
        this.unlockedSkills = new Set();
        this.skillConditions = new Map(); // skillId -> { type, condition }
        this.questRewards = new Map();    // questId -> [skillId]
        this.factionRewards = new Map();  // factionId -> [{ reputation, skillId }]
        
        this._initializeListeners();
    }

    _initializeListeners() {
        EventBus.on('QUEST_COMPLETED', (data) => this.checkQuestUnlock(data.questId));
        EventBus.on('FACTION_REP_CHANGED', (data) => this.checkFactionUnlock(data.factionId, data.newReputation));
        EventBus.on('TRIAL_COMPLETED', (data) => {
            if (data.success) this.unlockSkill(data.rewardSkillId, 'TRIAL');
        });
    }

    /**
     * Register a skill with its unlock condition.
     * @param {string} skillId 
     * @param {string} type - Enum UnlockType
     * @param {Object} condition - { questId, factionId, minRep, cost, etc. }
     */
    registerSkillUnlock(skillId, type, condition = {}) {
        this.skillConditions.set(skillId, { type, condition });

        // Index for fast lookup
        if (type === UnlockType.QUEST && condition.questId) {
            if (!this.questRewards.has(condition.questId)) {
                this.questRewards.set(condition.questId, []);
            }
            this.questRewards.get(condition.questId).push(skillId);
        }

        if (type === UnlockType.FACTION && condition.factionId) {
            if (!this.factionRewards.has(condition.factionId)) {
                this.factionRewards.set(condition.factionId, []);
            }
            this.factionRewards.get(condition.factionId).push({ 
                reputation: condition.minRep || 0, 
                skillId 
            });
        }
        
        // If default, unlock immediately
        if (type === UnlockType.DEFAULT) {
            this.unlockedSkills.add(skillId);
        }
    }

    /**
     * Check if a skill is unlocked.
     * @param {string} skillId 
     */
    isUnlocked(skillId) {
        return this.unlockedSkills.has(skillId);
    }

    /**
     * Force unlock a skill.
     * @param {string} skillId 
     * @param {string} source 
     */
    unlockSkill(skillId, source = 'SYSTEM') {
        if (this.unlockedSkills.has(skillId)) return;

        this.unlockedSkills.add(skillId);
        
        const skillData = Registry.data.skills.get(skillId) || { name: skillId };
        
        console.log(`[SkillUnlock] Unlocked: ${skillData.name} via ${source}`);
        
        EventBus.emit('SKILL_UNLOCKED', {
            skillId,
            skillName: skillData.name,
            source,
            timestamp: Date.now()
        });
    }

    /**
     * Process Quest Completion Rewards.
     * @param {string} questId 
     */
    checkQuestUnlock(questId) {
        const rewards = this.questRewards.get(questId);
        if (rewards) {
            rewards.forEach(skillId => this.unlockSkill(skillId, `QUEST:${questId}`));
        }
    }

    /**
     * Process Faction Reputation Updates.
     * @param {string} factionId 
     * @param {number} currentRep 
     */
    checkFactionUnlock(factionId, currentRep) {
        const rewards = this.factionRewards.get(factionId);
        if (rewards) {
            rewards.forEach(reward => {
                if (currentRep >= reward.reputation && !this.isUnlocked(reward.skillId)) {
                    this.unlockSkill(reward.skillId, `FACTION:${factionId}`);
                }
            });
        }
    }

    /**
     * Get all skills unlockable by a specific method (for UI).
     * @param {string} type 
     */
    getSkillsByUnlockType(type) {
        const results = [];
        for (const [id, data] of this.skillConditions.entries()) {
            if (data.type === type) {
                results.push({ id, ...data });
            }
        }
        return results;
    }
}

export const SkillUnlocker = new SkillUnlockRegistry();
