/**
 * ═══════════════════════════════════════════════════════════════════════════
 * DYNAMIC EVENT GENERATOR
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * Generates complex, multi-stage events based on:
 * - World Scars (Past Events)
 * - Faction States (War/Peace)
 * - Player Reputation (Hero/Villain)
 * - Ecosystem Balance (Chaos/Order)
 * 
 * @version 1.0
 * ═══════════════════════════════════════════════════════════════════════════
 */

import { EventBus } from './GlobalEventBus.js';

export class DynamicEventGenerator {
    constructor(worldState, scarSystem, factionSystem) {
        this.worldState = worldState;
        this.scarSystem = scarSystem;
        this.factionSystem = factionSystem;
    }

    /**
     * Generates a list of potential events for the current turn.
     * @param {string} regionId 
     * @returns {Object[]} List of event objects
     */
    generateEvents(regionId) {
        const events = [];
        const regionScars = this.scarSystem.getRegionEffects(regionId);
        const chaosLevel = this.worldState.globalState?.chaos || 0;

        // 1. SCAR-BASED EVENTS (The Past Haunts the Present)
        regionScars.forEach(scar => {
            if (scar.name === 'Void Residue' && Math.random() < 0.3) {
                const event = {
                    id: `EVT_VOID_ECHO_${Date.now()}`,
                    type: 'COMBAT',
                    title: 'Echo of the Void',
                    description: this._generateFlavorText('VOID', regionId), // NEW: Dynamic Flavor
                    enemies: ['VOID_LEECH', 'VOID_CONSTRUCT'],
                    difficulty: 'HARD',
                    reward: 'VOID_ESSENCE'
                };
                events.push(event);
                EventBus.emit('SCAR_EVENT_TRIGGERED', { regionId, type: 'VOID' }); // NEW: Event Emission
            }
            if (scar.name === 'Haunted Ground' && Math.random() < 0.4) {
                const event = {
                    id: `EVT_GHOST_RAID_${Date.now()}`,
                    type: 'COMBAT',
                    title: 'Vengeful Spirits',
                    description: this._generateFlavorText('GHOST', regionId), // NEW: Dynamic Flavor
                    enemies: ['VENGEFUL_SPIRIT', 'MEMORY_GHOUL'],
                    difficulty: 'MEDIUM',
                    reward: 'KARMA_CLEANSE'
                };
                events.push(event);
                EventBus.emit('SCAR_EVENT_TRIGGERED', { regionId, type: 'GHOST' }); // NEW: Event Emission
            }
        });

        // 2. FACTION-BASED EVENTS (The War Continues)
        // If chaos is high, factions become aggressive
        if (chaosLevel > 50) {
            const dominantFaction = this._getDominantFaction(regionId);
            if (dominantFaction === 'ashram_remnants') {
                events.push({
                    id: `EVT_ASHRAM_PATROL_${Date.now()}`,
                    type: 'ENCOUNTER',
                    title: 'Ashram Inquisition',
                    description: 'A patrol demands to inspect your gear for corruption.',
                    choices: ['SUBMIT', 'FIGHT', 'BRIBE'],
                    faction: 'ashram_remnants'
                });
            }
        }

        // 3. NEMESIS EVENTS (Personal Vendettas)
        // Logic handled by EnemyConsciousnessEngine, but we can trigger the *opportunity* here
        if (Math.random() < 0.1) { // 10% chance per turn
             events.push({
                id: `EVT_NEMESIS_HUNT_${Date.now()}`,
                type: 'HUNT',
                title: 'A Shadow Approaches',
                description: 'You feel a familiar malice. Someone is hunting you.',
                special: 'NEMESIS_SPAWN'
            });
        }

        return events;
    }

    _getDominantFaction(regionId) {
        // Use FactionSystem if available to check real control
        // For now, we'll stick to the mock logic or enhance it
        if (regionId.includes('ashram')) return 'ashram_remnants';
        if (regionId.includes('void')) return 'corruption_champions';
        if (regionId.includes('nexus')) return 'untethered_architects';
        return 'factionless';
    }

    _generateFlavorText(type, regionId) {
        if (type === 'VOID') return "The air tastes like static. Shadows detach from the walls.";
        if (type === 'GHOST') return "Whispers of the dead crowd your mind. They remember you.";
        return "Something is wrong here.";
    }

    /**
     * Generates a Dynamic Quest based on Faction Needs.
     * @param {string} factionId 
     */
    generateFactionQuest(factionId) {
        const faction = this.factionSystem.getFactionState(factionId);
        if (!faction) return null;

        let questType = 'GENERIC';
        if (faction.state === 'EXPANSIONIST') questType = 'CONQUEST';
        if (faction.state === 'DEFENSIVE') questType = 'DEFENSE';
        if (faction.state === 'CRITICAL') questType = 'SURVIVAL';

        const quest = {
            id: `quest_dyn_${factionId}_${Date.now()}`,
            title: `${faction.name}: ${questType} Protocol`,
            description: this._getQuestDescription(questType, faction.name),
            objectives: this._getQuestObjectives(questType),
            rewards: { reputation: { [factionId]: 15 }, essence: 100 },
            generatedAt: Date.now()
        };

        console.log(`[DynamicEvent] Generated Quest: ${quest.title}`);
        return quest;
    }

    _getQuestDescription(type, factionName) {
        if (type === 'CONQUEST') return `${factionName} is pushing into new territory. Clear the way.`;
        if (type === 'DEFENSE') return `${factionName} is under siege. Hold the line.`;
        if (type === 'SURVIVAL') return `${factionName} is on the brink. Gather supplies immediately.`;
        return `Help ${factionName} with their operations.`;
    }

    _getQuestObjectives(type) {
        if (type === 'CONQUEST') return [{ type: 'KILL_ENEMIES', count: 10, region: 'borderlands' }];
        if (type === 'DEFENSE') return [{ type: 'DEFEND_LOCATION', duration: 60 }];
        if (type === 'SURVIVAL') return [{ type: 'GATHER_ITEMS', itemId: 'ration_pack', count: 5 }];
        return [];
    }
}
