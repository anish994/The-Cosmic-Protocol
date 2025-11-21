/**
 * ═══════════════════════════════════════════════════════════════════════════
 * WORLD SCAR SYSTEM (LOCATION MEMORY)
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * Allows the world to "Remember" significant events.
 * - Battles leave "Scars" (craters, corruption pools).
 * - Miracles leave "Boons" (blooming flowers, holy ground).
 * - These persist until the next Loop Reset (or sometimes beyond).
 * 
 * @version 1.0
 * ═══════════════════════════════════════════════════════════════════════════
 */

export class WorldScarSystem {
    constructor(worldState) {
        this.worldState = worldState;
        this.activeScars = new Map(); // regionId -> [ScarObjects]
    }

    /**
     * Registers a major event and applies a Scar to the region.
     * @param {string} regionId 
     * @param {string} eventType - 'BATTLE_VOID', 'MIRACLE_LIGHT', 'SLAUGHTER', 'CONSTRUCTION'
     * @param {number} intensity - 1-10 scale
     */
    applyScar(regionId, eventType, intensity) {
        const scar = {
            id: `SCAR_${Date.now()}`,
            type: eventType,
            intensity: intensity,
            age: 0,
            description: this._generateDescription(eventType, intensity),
            mechanic: this._generateMechanic(eventType, intensity)
        };

        if (!this.activeScars.has(regionId)) {
            this.activeScars.set(regionId, []);
        }
        this.activeScars.get(regionId).push(scar);

        return {
            message: `The world remembers what happened here. [${scar.description}]`,
            mechanicAdded: scar.mechanic
        };
    }

    /**
     * Retrieves all active effects for a region.
     */
    getRegionEffects(regionId) {
        const scars = this.activeScars.get(regionId) || [];
        return scars.map(s => s.mechanic);
    }

    _generateDescription(type, intensity) {
        if (type === 'BATTLE_VOID') {
            return intensity > 8 ? "A tearing wound in reality where the Void leaked through." : "Scorch marks that whisper when you touch them.";
        }
        if (type === 'MIRACLE_LIGHT') {
            return intensity > 8 ? "A permanent pillar of light that blinds the unworthy." : "Flowers that glow in the dark.";
        }
        if (type === 'SLAUGHTER') {
            return "The ground is stained a deep, unremovable red.";
        }
        return "A lingering echo of past events.";
    }

    _generateMechanic(type, intensity) {
        if (type === 'BATTLE_VOID') {
            return {
                name: "Void Residue",
                effect: "Drain 5 HP per turn",
                trigger: "ON_ENTER"
            };
        }
        if (type === 'MIRACLE_LIGHT') {
            return {
                name: "Lingering Grace",
                effect: "Heal 10 HP per turn",
                trigger: "ON_ENTER"
            };
        }
        if (type === 'SLAUGHTER') {
            return {
                name: "Haunted Ground",
                effect: "Spawn 'Vengeful Spirit' (Level 5) every 3 turns",
                trigger: "ON_COMBAT_START"
            };
        }
        return null;
    }
}
