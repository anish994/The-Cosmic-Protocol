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
        // Mock logic - in real system, check region control
        if (regionId.includes('ashram')) return 'ashram_remnants';
        if (regionId.includes('void')) return 'corruption_champions';
        return 'factionless';
    }

    _generateFlavorText(type, regionId) {
        const templates = [
            "The air here tastes like ash and old regrets.",
            "Shadows stretch longer than they should, whispering your name.",
            "The ground bleeds a dark ichor where the battle was fought."
        ];
        return templates[Math.floor(Math.random() * templates.length)];
    }
}
