/**
 * ═══════════════════════════════════════════════════════════════════════════
 * SKILL TRIAL SYSTEM
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * Manages "Skill Trials" - specific challenges required to unlock rare abilities.
 * Trials can be Combat, Puzzle, or Survival based.
 * 
 * @version 1.0
 * ═══════════════════════════════════════════════════════════════════════════
 */

import { EventBus } from './GlobalEventBus.js';

export const TrialType = {
    COMBAT_SURVIVAL: 'COMBAT_SURVIVAL',
    COMBAT_DAMAGE: 'COMBAT_DAMAGE',
    PUZZLE_LOGIC: 'PUZZLE_LOGIC',
    RITUAL_CHANNELING: 'RITUAL_CHANNELING'
};

class SkillTrialSystem {
    constructor() {
        this.trialDefinitions = new Map();
        this.activeTrial = null;
    }

    /**
     * Define a new trial.
     * @param {string} trialId 
     * @param {Object} config 
     */
    registerTrial(trialId, config) {
        // config: { type, targetSkillId, difficulty, parameters, description }
        this.trialDefinitions.set(trialId, config);
    }

    /**
     * Start a trial for the player.
     * @param {string} trialId 
     * @param {Object} playerContext 
     */
    startTrial(trialId, playerContext) {
        const trial = this.trialDefinitions.get(trialId);
        if (!trial) {
            console.error(`[TrialSystem] Trial ${trialId} not found.`);
            return false;
        }

        if (this.activeTrial) {
            console.warn(`[TrialSystem] Cannot start ${trialId}, trial ${this.activeTrial.id} is already active.`);
            return false;
        }

        this.activeTrial = {
            id: trialId,
            config: trial,
            startTime: Date.now(),
            progress: 0,
            status: 'IN_PROGRESS'
        };

        console.log(`[TrialSystem] Trial Started: ${trial.description}`);
        
        EventBus.emit('TRIAL_STARTED', {
            trialId,
            description: trial.description,
            type: trial.type
        });

        return true;
    }

    /**
     * Update trial progress (called by combat/game loop).
     * @param {string} metric 
     * @param {number} value 
     */
    updateProgress(metric, value) {
        if (!this.activeTrial) return;

        const { config } = this.activeTrial;

        // Example logic for different trial types
        if (config.type === TrialType.COMBAT_DAMAGE && metric === 'damage_dealt') {
            this.activeTrial.progress += value;
            if (this.activeTrial.progress >= config.parameters.targetDamage) {
                this.completeTrial(true);
            }
        }
        
        // Add more logic for other types...
    }

    /**
     * Force complete or fail a trial.
     * @param {boolean} success 
     */
    completeTrial(success) {
        if (!this.activeTrial) return;

        const { id, config } = this.activeTrial;
        
        console.log(`[TrialSystem] Trial ${id} Completed. Success: ${success}`);

        EventBus.emit('TRIAL_COMPLETED', {
            trialId: id,
            success,
            rewardSkillId: config.targetSkillId
        });

        this.activeTrial = null;
    }

    /**
     * Abort current trial.
     */
    abortTrial() {
        if (this.activeTrial) {
            console.log(`[TrialSystem] Trial ${this.activeTrial.id} Aborted.`);
            this.activeTrial = null;
            EventBus.emit('TRIAL_ABORTED', {});
        }
    }
}

export const TrialSystem = new SkillTrialSystem();
