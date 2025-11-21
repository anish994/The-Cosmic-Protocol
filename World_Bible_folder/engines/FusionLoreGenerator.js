/**
 * ═══════════════════════════════════════════════════════════════════════════
 * FUSION LORE GENERATOR
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * Generates dynamic lore for skill fusions.
 * Integrates with RecursionMemorySystem to reference past loops.
 * 
 * @version 1.0
 * ═══════════════════════════════════════════════════════════════════════════
 */

export class FusionLoreGenerator {
    constructor(recursionMemorySystem) {
        this.recursionMemory = recursionMemorySystem;
        
        this.templates = {
            'VOID_LIGHT': [
                "A paradox of blinding darkness.",
                "Light that casts no shadow, only silence.",
                "The stars scream as they are born."
            ],
            'INFERNAL_NATURE': [
                "Roots that burn with an unquenchable thirst.",
                "A forest of ash that remembers the fire.",
                "Life that feeds on the heat of death."
            ],
            'CHRONO_FOUNDATIONAL': [
                "Architecture that remembers tomorrow.",
                "Stones laid by hands that have not yet been born.",
                "A fortress against the erosion of time."
            ],
            'DEFAULT': [
                "A volatile mixture of disparate energies.",
                "Power forced into a shape it resents.",
                "An echo of a forgotten art."
            ]
        };
    }

    /**
     * Generate lore for a specific fusion.
     * @param {string} fusionId - The ID of the fusion (e.g., 'void_light_blast').
     * @param {string[]} components - The resonance types (e.g., ['VOID', 'LIGHT']).
     */
    generateLore(fusionId, components) {
        let lore = this._getBaseLore(components);
        
        // Check Recursion Memory for history
        const history = this.recursionMemory.getFusionHistory(fusionId);
        if (history) {
            if (history.count > 10) {
                lore += " \n[HISTORY] The world groans, recognizing this signature from a thousand past uses.";
            }
            
            if (history.notableMoments.length > 0) {
                const lastMoment = history.notableMoments[history.notableMoments.length - 1];
                lore += ` \n[ECHO] In Loop ${lastMoment.loop}, this power was used to: ${lastMoment.description}`;
            }
        }

        return lore;
    }

    /**
     * Checks if a fusion triggers a legendary world event.
     * @param {string} fusionId 
     */
    getLegendaryConsequence(fusionId) {
        const legendaryFusions = {
            'void_light_nova': {
                type: 'LEGENDARY_FUSION_EVENT_VOID_LIGHT',
                description: "The union of Void and Light has created a permanent scar in the sky."
            },
            'chronos_inferno': {
                type: 'LEGENDARY_FUSION_EVENT_TIME_FIRE',
                description: "Time burns, leaving behind ash that falls upwards."
            }
        };
        return legendaryFusions[fusionId] || null;
    }

    _getBaseLore(components) {
        const key = components.sort().join('_');
        const templates = this.templates[key] || this.templates['DEFAULT'];
        return templates[Math.floor(Math.random() * templates.length)];
    }
}
