/**
 * ═══════════════════════════════════════════════════════════════════════════
 * CARD OBJECT (THE PLAYER'S WEAPON)
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * Represents a playable card in the user's hand/deck.
 * Can be a single skill or a fusion result.
 * 
 * @version 2.0
 */

class CardObject {
    /**
     * @param {Object} data - The JSON data for the card (from FusionCalculator or SkillDB)
     */
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.tier = data.tier || "COMMON";
        this.type = data.type || "ACTIVE";
        this.components = data.components || [];
        this.stats = data.stats || {};
        this.effects = data.effects || [];
        this.description = data.description || "";
        this.tags = data.tags || [];
        
        // Deep Data (Phase 3 Integration)
        this.lore_quote = data.lore_quote || "";
        this.tactical_brief = data.tactical_brief || "";
        this.gameplay_info = data.gameplay_info || { usage: [], features: [] };
        this.deep_data = data.deep_data || { environment: "", narrative: "" };
        
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
        
        tooltip += `\n-- TACTICAL --\n${this.tactical_brief}\n`;
        
        if (this.lore_quote) {
            tooltip += `\n"${this.lore_quote}"`;
        }
        
        return tooltip;
    }

    /**
     * Returns the full schematic data for the Inspection Overlay.
     */
    getFullSchematic() {
        return {
            header: {
                title: this.name,
                subtitle: `ID: ${this.id} // PROTOCOL: ${this.tier}`,
                power_rating: (this.stats.damage || 0) * 2 + (this.stats.cooldown || 0)
            },
            core: {
                stats: this.stats,
                tags: this.tags,
                type: this.type
            },
            tabs: {
                overview: {
                    brief: this.tactical_brief,
                    features: this.gameplay_info.features,
                    usage: this.gameplay_info.usage
                },
                mechanics: {
                    efficiency: `${(this.stats.damage / (this.stats.cost || 1)).toFixed(1)} Dmg/Energy`,
                    burst: `${(this.stats.damage / (this.stats.cooldown || 1)).toFixed(1)} DPS`
                },
                lore: {
                    quote: this.lore_quote,
                    narrative: this.deep_data.narrative,
                    environment: this.deep_data.environment
                }
            }
        };
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
