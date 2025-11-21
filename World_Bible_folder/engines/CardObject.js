/**
 * ═══════════════════════════════════════════════════════════════════════════
 * CARD OBJECT (THE PLAYER'S WEAPON)
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * Represents a playable card in the user's hand/deck.
 * Can be a single skill or a fusion result.
 * 
 * @version 1.0
 */

class CardObject {
    /**
     * @param {Object} data - The JSON data for the card (from FusionCalculator or SkillDB)
     */
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.tier = data.tier || "COMMON";
        this.components = data.components || [];
        this.stats = data.stats || {};
        this.effects = data.effects || [];
        this.narrative = data.narrative || "";
        this.tags = data.tags || [];
        
        // UI State
        this.isSelected = false;
        this.isOnCooldown = false;
    }

    /**
     * Returns a formatted tooltip string for the UI.
     */
    getTooltip() {
        let tooltip = `**${this.name}** (${this.tier})\n`;
        tooltip += `Cost: ${this.stats.cost || 0} | CD: ${this.stats.cooldown || 0}\n`;
        
        if (this.stats.damage) tooltip += `Damage: ${this.stats.damage}\n`;
        if (this.stats.heal) tooltip += `Heal: ${this.stats.heal}\n`;
        
        tooltip += `\nEffects:\n`;
        this.effects.forEach(e => {
            tooltip += `- ${e.type} (${e.value || ''})\n`;
        });
        
        if (this.narrative) {
            tooltip += `\n"${this.narrative}"`;
        }
        
        return tooltip;
    }

    /**
     * Checks if the card can be played given the current player resources.
     * @param {Object} playerResources 
     */
    canPlay(playerResources) {
        if (this.isOnCooldown) return false;
        if (playerResources.mana < (this.stats.cost || 0)) return false;
        return true;
    }
}

module.exports = { CardObject };
