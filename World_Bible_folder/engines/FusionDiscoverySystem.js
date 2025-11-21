/**
 * ═══════════════════════════════════════════════════════════════════════════
 * FUSION DISCOVERY SYSTEM
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * Manages the discovery of new fusions, legendary combinations, and 
 * world-altering effects triggered by powerful skills.
 * 
 * @version 1.0
 * ═══════════════════════════════════════════════════════════════════════════
 */

const { EventBus } = require('./GlobalEventBus.js');

const LEGENDARY_COMBOS = {
    'skill_solar_flare+skill_void_blast': {
        name: 'Solar Void Singularity',
        description: 'Tears the fabric of the cosmos, collapsing a localized star into a screaming void rift that devours light itself.',
        worldEffect: 'DARKEN_SKYBOX',
        questTrigger: 'quest_void_stabilization'
    },
    'skill_reality_slash+skill_time_stop': {
        name: 'Chronos Severance',
        description: 'Violently severs the timeline, birthing a paradox clone from the bleeding edges of causality.',
        worldEffect: 'TIME_DISTORTION',
        questTrigger: 'quest_paradox_hunt'
    },
    'skill_decay_aura+skill_life_bloom': {
        name: 'Cycle of Samsara',
        description: 'Forces the target through a thousand lifetimes of rot and rebirth in a single, agonizing heartbeat.',
        worldEffect: 'RAPID_GROWTH',
        questTrigger: 'quest_druid_balance'
    }
};

class FusionDiscoverySystem {
    constructor() {
        this.discoveredFusions = new Set();
        this._initializeListeners();
    }

    _initializeListeners() {
        EventBus.on('FUSION_DISCOVERED', (data) => this.handleFusionDiscovery(data));
    }

    handleFusionDiscovery(data) {
        const { fusion, synergy } = data;
        const comboKey = this._getComboKey(fusion.baseSkills);
        
        // 1. Check for Legendary Status
        if (LEGENDARY_COMBOS[comboKey]) {
            this.triggerLegendaryFusion(fusion, LEGENDARY_COMBOS[comboKey]);
        }

        // 2. Check for High Synergy
        if (synergy >= 90) {
            EventBus.emit('HIGH_SYNERGY_DISCOVERY', {
                fusionId: fusion.id,
                synergy
            });
        }

        // 3. Record Discovery
        if (!this.discoveredFusions.has(fusion.id)) {
            this.discoveredFusions.add(fusion.id);
            // Grant XP or other rewards here
        }
    }

    triggerLegendaryFusion(fusion, legendaryData) {
        console.log(`[FusionDiscovery] LEGENDARY FUSION: ${legendaryData.name}`);
        
        // Emit specific event for UI/World
        EventBus.emit('LEGENDARY_FUSION_TRIGGERED', {
            fusionId: fusion.id,
            name: legendaryData.name,
            description: legendaryData.description,
            worldEffect: legendaryData.worldEffect
        });

        // Trigger associated quest if not already active
        if (legendaryData.questTrigger) {
            EventBus.emit('QUEST_AVAILABLE', {
                questId: legendaryData.questTrigger,
                source: 'FUSION_DISCOVERY'
            });
        }
    }

    _getComboKey(baseSkills) {
        // Sort to ensure order doesn't matter
        return baseSkills.sort().join('+');
    }
}

const FusionDiscovery = new FusionDiscoverySystem();
module.exports = { FusionDiscovery, FusionDiscoverySystem };
