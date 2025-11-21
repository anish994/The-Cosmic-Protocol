/**
 * ═══════════════════════════════════════════════════════════════════════════
 * WORLD EVENT SYSTEM (THE LIVING WORLD)
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * Manages dynamic world events triggered by player actions, world state changes,
 * and simulation ticks.
 * 
 * FEATURES:
 * 1. Dynamic Event Generation: Events are not scripted; they emerge from state.
 * 2. Faction Conflicts: Factions fight for control of regions.
 * 3. Environmental Crises: Corruption storms, mana leaks, reality tears.
 * 
 * @version 1.0
 * ═══════════════════════════════════════════════════════════════════════════
 */

export class WorldEventSystem {
    constructor(worldState, storyNodeSystem) {
        this.worldState = worldState;
        this.storyNodeSystem = storyNodeSystem;
        // Sync with World State for persistence and access by other systems
        this.activeEvents = this.worldState.activeEvents || [];
        this.worldState.activeEvents = this.activeEvents;
    }

    /**
     * Manually triggers an event (e.g., from a Legendary Fusion).
     */
    triggerGlobalEvent(type, description) {
        const event = {
            id: `evt_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
            type: type,
            regionId: 'GLOBAL',
            startTime: Date.now(),
            description: description
        };
        this.activeEvents.push(event);
        console.log(`[WORLD EVENT] Global Event Triggered: ${type}`);
        return event;
    }

    /**
     * Checks for new events based on the current world state.
     */
    checkForEvents() {
        const newEvents = [];

        // 1. Check Corruption Thresholds
        for (const [regionId, state] of this.worldState.regionStates || []) {
            if (state.corruption > 80 && !this._hasEvent(regionId, 'CORRUPTION_STORM')) {
                newEvents.push(this._createEvent('CORRUPTION_STORM', regionId));
            }
        }

        // 2. Check Faction Tensions
        // (Simplified logic: If two opposing factions are in the same region)
        // ...

        // 3. Check Player Impact (The "Hero" Effect)
        // If player has high reputation, maybe a festival starts?
        
        return newEvents;
    }

    /**
     * Triggers a specific event type in a region.
     * @param {string} type 
     * @param {string} regionId 
     */
    _createEvent(type, regionId) {
        const event = {
            id: `evt_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
            type: type,
            regionId: regionId,
            startTime: Date.now(),
            description: this._getEventDescription(type, regionId)
        };

        this.activeEvents.push(event);
        console.log(`[WORLD EVENT] Started: ${event.type} in ${event.regionId}`);
        
        // Trigger Story Node if applicable
        if (type === 'CORRUPTION_STORM') {
            // This allows the Story System to present a narrative choice to the player
            // e.g., "Help evacuate" or "Contain the storm"
            // We don't trigger it immediately here, but the WorldExplorationEngine will see it.
        }

        return event;
    }

    _getEventDescription(type, regionId) {
        const descriptions = {
            'CORRUPTION_STORM': "A swirling vortex of void energy tears at the reality of the region.",
            'FACTION_SKIRMISH': "Skirmishes break out between rival factions.",
            'MANA_BLOOM': "Excess life energy causes rapid, uncontrolled growth."
        };
        return descriptions[type] || "An unknown event is occurring.";
    }

    _hasEvent(regionId, type) {
        return this.activeEvents.some(e => e.regionId === regionId && e.type === type);
    }
}
