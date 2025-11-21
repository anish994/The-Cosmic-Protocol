/**
 * ═══════════════════════════════════════════════════════════════════════════
 * PSYCHOLOGICAL PROFILE SYSTEM (THE OBSERVER)
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * This system analyzes the player's behavior patterns to build a psychological
 * profile. It doesn't just track "Good vs Evil" but "Methodology".
 * 
 * TRACKED METRICS:
 * - Aggression: Tendency to choose violence first.
 * - Deception: Tendency to lie or manipulate.
 * - Greed: Tendency to demand rewards or hoard resources.
 * - Curiosity: Tendency to explore lore/secrets over material gain.
 * - Loyalty: Tendency to stick to one faction vs. playing all sides.
 * 
 * ARCHETYPES:
 * - THE BUTCHER: High Aggression.
 * - THE MANIPULATOR: High Deception.
 * - THE SCHOLAR: High Curiosity.
 * - THE MERCENARY: High Greed.
 * - THE SAINT: Low Aggression, High Loyalty.
 * - THE CHAOS AGENT: High Aggression, High Deception, Low Loyalty.
 * 
 * @version 1.0
 * ═══════════════════════════════════════════════════════════════════════════
 */

export class PsychologicalProfileSystem {
    constructor() {
        this.metrics = {
            aggression: 0,
            deception: 0,
            greed: 0,
            curiosity: 0,
            loyalty: 0
        };
        
        this.actionHistory = []; // Log of last 50 significant actions
        this.currentArchetype = 'TABULA_RASA'; // Blank slate
    }

    /**
     * Records a significant player action.
     * @param {string} actionType - 'COMBAT', 'DIALOGUE', 'TRADE', 'EXPLORATION'
     * @param {Object} impact - { aggression: 1, deception: 0, etc. }
     * @param {string} description - "Killed the beggar"
     */
    recordAction(actionType, impact, description) {
        // 1. Update Metrics
        for (const [key, value] of Object.entries(impact)) {
            if (this.metrics[key] !== undefined) {
                this.metrics[key] += value;
            }
        }

        // 2. Log History
        this.actionHistory.push({
            timestamp: Date.now(),
            type: actionType,
            description,
            impact
        });
        if (this.actionHistory.length > 50) this.actionHistory.shift();

        // 3. Recalculate Archetype
        this._updateArchetype();

        console.log(`[PSYCHE] Action Recorded: ${description}. Current Archetype: ${this.currentArchetype}`);
    }

    _updateArchetype() {
        const m = this.metrics;
        let newArchetype = 'WANDERER'; // Default

        // Complex Archetypes (Check these first)
        if (m.aggression > 15 && m.deception > 15 && m.loyalty < -20) {
            newArchetype = 'THE_CHAOS_AGENT';
        } 
        // Simple Archetypes
        else if (m.aggression > 20 && m.aggression > m.deception * 2) {
            newArchetype = 'THE_BUTCHER';
        } else if (m.deception > 20 && m.loyalty < -10) {
            newArchetype = 'THE_MANIPULATOR';
        } else if (m.curiosity > 30 && m.aggression < 10) {
            newArchetype = 'THE_SCHOLAR';
        } else if (m.greed > 20 && m.loyalty < 5) {
            newArchetype = 'THE_MERCENARY';
        } else if (m.aggression < 5 && m.loyalty > 20) {
            newArchetype = 'THE_SAINT';
        }

        this.currentArchetype = newArchetype;
    }

    getProfile() {
        return {
            metrics: { ...this.metrics },
            archetype: this.currentArchetype,
            historySummary: this.actionHistory.map(a => a.description).slice(-5)
        };
    }
}
