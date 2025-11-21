/**
 * ═══════════════════════════════════════════════════════════════════════════
 * RUMOR MILL SYSTEM (THE SOCIAL WEB)
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * A dynamic system that propagates player actions through the world via NPCs.
 * "The walls have ears, and the ears have mouths."
 * 
 * KEY FEATURES:
 * 1. Event Propagation: Global events become local rumors.
 * 2. Faction Bias: Different factions interpret the same event differently.
 * 3. Rumor Decay: Old news fades away.
 * 
 * @version 1.0
 * ═══════════════════════════════════════════════════════════════════════════
 */

const { EventBus } = require('./GlobalEventBus.js');

const RUMOR_TEMPLATES = {
    'LEGENDARY_FUSION_TRIGGERED': {
        'ashram_remnants': "Did you see the sky darken? They say a walker cracked a star open. Dangerous power.",
        'post_human_cults': "The Void sings! Someone has unlocked the Solar Singularity. We must find them.",
        'nomadic_relic_seekers': "Energy readings went off the charts. Whoever did that is sitting on a goldmine... or a bomb.",
        'DEFAULT': "The sky turned black for a second. Bad omen."
    },
    'QUEST_COMPLETED': {
        'ashram_remnants': "I heard the {questName} job is done. Good work, if true.",
        'DEFAULT': "Someone finished {questName}. Things are moving."
    },
    'FACTION_REP_CHANGED': {
        'POSITIVE': "They say {faction} has a new favorite. Watch your back.",
        'NEGATIVE': "{faction} has put a price on a walker's head. Stay clear."
    }
};

class RumorMillSystem {
    constructor() {
        this.activeRumors = new Map(); // regionId -> Set(rumors)
        this.globalRumors = [];
        this._initializeListeners();
    }

    _initializeListeners() {
        EventBus.on('LEGENDARY_FUSION_TRIGGERED', (data) => this.generateRumor('LEGENDARY_FUSION_TRIGGERED', data));
        EventBus.on('QUEST_COMPLETED', (data) => this.generateRumor('QUEST_COMPLETED', data));
        EventBus.on('FACTION_REP_CHANGED', (data) => this.generateRumor('FACTION_REP_CHANGED', data));
        // Listen for pre-generated rumors (e.g. from Faction System)
        EventBus.on('RUMOR_GENERATED', (data) => this.addExternalRumor(data));
    }

    addExternalRumor(data) {
        console.log(`[RumorMill] Adding external rumor: "${data.text}"`);
        const rumor = {
            id: `rumor_ext_${Date.now()}`,
            type: 'EXTERNAL',
            text: data.text, // Store text directly
            faction: data.faction,
            timestamp: Date.now(),
            decayTime: Date.now() + (1000 * 60 * 60 * 24)
        };
        this.globalRumors.unshift(rumor);
        if (this.globalRumors.length > 20) this.globalRumors.pop();
    }

    /**
     * Generate a rumor from an event.
     * @param {string} type 
     * @param {Object} data 
     */
    generateRumor(type, data) {
        console.log(`[RumorMill] Generating rumor for ${type}`);
        
        const rumor = {
            id: `rumor_${Date.now()}`,
            type,
            data,
            timestamp: Date.now(),
            decayTime: Date.now() + (1000 * 60 * 60 * 24) // 24 hours real-time (simulated)
        };

        this.globalRumors.unshift(rumor); // Add to front
        if (this.globalRumors.length > 20) this.globalRumors.pop(); // Keep last 20

        EventBus.emit('RUMOR_SPREAD', { rumor });
    }

    /**
     * Get a rumor for a specific NPC based on their faction/region.
     * @param {Object} npcContext - { faction, region }
     */
    getRumor(npcContext) {
        if (this.globalRumors.length === 0) return null;

        // Pick a recent rumor
        const rumor = this.globalRumors[Math.floor(Math.random() * Math.min(5, this.globalRumors.length))];
        
        // Handle External Rumors (Pre-formatted)
        if (rumor.type === 'EXTERNAL') {
            return {
                text: rumor.text,
                topic: 'WORLD_EVENT',
                age: Date.now() - rumor.timestamp
            };
        }

        const template = RUMOR_TEMPLATES[rumor.type];
        if (!template) return null;

        let text = template[npcContext.faction] || template['DEFAULT'];

        // Replace placeholders
        if (rumor.data.name) text = text.replace('{name}', rumor.data.name);
        if (rumor.data.questName) text = text.replace('{questName}', rumor.data.questName);
        if (rumor.data.faction) text = text.replace('{faction}', rumor.data.faction);

        return {
            text,
            topic: rumor.type,
            age: Date.now() - rumor.timestamp
        };
    }
}

const RumorMill = new RumorMillSystem();
module.exports = { RumorMill, RumorMillSystem };
