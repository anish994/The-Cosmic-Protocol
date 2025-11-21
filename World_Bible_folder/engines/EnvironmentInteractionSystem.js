/**
 * ═══════════════════════════════════════════════════════════════════════════
 * ENVIRONMENT INTERACTION SYSTEM
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * Manages the dynamic interactions between Skills and the Environment.
 * Enables "World-Skill Fusion" where skills alter the terrain or trigger
 * chain reactions based on environmental properties.
 * 
 * @version 1.0
 * ═══════════════════════════════════════════════════════════════════════════
 */

import { EventBus } from './GlobalEventBus.js';

const INTERACTIONS = {
    'FIRE+FLAMMABLE': {
        effect: 'EXPLOSION',
        damageMult: 2.0,
        worldChange: 'ASHEN_GROUND',
        description: 'The flammable material ignites violently!'
    },
    'ICE+WATER': {
        effect: 'FREEZE',
        status: 'FROZEN_TERRAIN',
        worldChange: 'ICE_SHEET',
        description: 'The water freezes solid, creating a slippery surface.'
    },
    'LIGHT+CORRUPTED': {
        effect: 'PURIFY',
        damageMult: 1.5,
        worldChange: 'CONSECRATED_GROUND',
        description: 'The corruption hisses and burns away under the light.'
    },
    'VOID+REALITY_ANCHOR': {
        effect: 'DESTABILIZE',
        spawn: 'VOID_RIFT',
        description: 'The reality anchor cracks, leaking void energy.'
    }
};

class EnvironmentInteractionSystem {
    constructor() {
        this._initializeListeners();
    }

    _initializeListeners() {
        EventBus.on('SKILL_USED', (data) => this.handleSkillUsage(data));
    }

    handleSkillUsage(data) {
        const { skill, targetEnv } = data;
        
        if (!targetEnv || !targetEnv.tags) return;

        const skillTags = skill.tags || []; // e.g., ['FIRE', 'PROJECTILE']
        const envTags = targetEnv.tags;     // e.g., ['FLAMMABLE', 'WOOD']

        for (const sTag of skillTags) {
            for (const eTag of envTags) {
                const key = `${sTag}+${eTag}`;
                if (INTERACTIONS[key]) {
                    this.triggerInteraction(key, INTERACTIONS[key], data);
                }
            }
        }
    }

    triggerInteraction(key, interaction, context) {
        console.log(`[EnvInteraction] Triggered: ${key} -> ${interaction.effect}`);
        
        EventBus.emit('ENVIRONMENT_INTERACTION', {
            type: interaction.effect,
            location: context.targetLocation,
            damageMultiplier: interaction.damageMult || 1.0,
            worldChange: interaction.worldChange,
            description: interaction.description
        });
    }
}

export const EnvironmentSystem = new EnvironmentInteractionSystem();
