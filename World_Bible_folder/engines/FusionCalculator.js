/**
 * ═══════════════════════════════════════════════════════════════════════════
 * FUSION CALCULATOR (THE ALCHEMY ENGINE)
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * Determines the result of combining two skills.
 * Supports:
 * 1. Legendary Fusions (Specific ID + ID matches)
 * 2. Tag-based Synergies (Element + Element)
 * 3. Procedural Hybrids (Fallback)
 * 
 * @version 1.0
 */

class FusionCalculator {
    constructor(skillDatabase) {
        this.skillDB = skillDatabase;
        this.legendaryRecipes = this._initLegendaryRecipes();
        this.synergyRules = this._initSynergyRules();
    }

    /**
     * Calculates the fusion result of two skills.
     * @param {string} skillIdA 
     * @param {string} skillIdB 
     * @returns {Object} The resulting Fusion Card data
     */
    calculateFusion(skillIdA, skillIdB) {
        const skillA = this.skillDB.getSkill(skillIdA);
        const skillB = this.skillDB.getSkill(skillIdB);

        if (!skillA || !skillB) {
            throw new Error(`Invalid skill IDs for fusion: ${skillIdA}, ${skillIdB}`);
        }

        // 1. Check Legendary Recipes (Order independent)
        const recipeKey = [skillIdA, skillIdB].sort().join('+');
        if (this.legendaryRecipes.has(recipeKey)) {
            return this._createLegendaryCard(this.legendaryRecipes.get(recipeKey), skillA, skillB);
        }

        // 2. Check Tag Synergies
        const synergy = this._checkSynergies(skillA, skillB);
        if (synergy) {
            return this._createSynergyCard(synergy, skillA, skillB);
        }

        // 3. Fallback: Procedural Hybrid
        return this._createHybridCard(skillA, skillB);
    }

    _initLegendaryRecipes() {
        const recipes = new Map();
        // Example: Solar Flare + Void Strike = Solar Void Singularity
        recipes.set('skill_solar_flare+skill_void_strike', {
            name: "Solar Void Singularity",
            tier: "LEGENDARY",
            description: "Collapses a star into a void rift.",
            base_stats_mod: { damage: 25, cost: 10, cooldown: 5 },
            added_tags: ["COSMIC", "DESTRUCTIVE"],
            narrative_trigger: "The world darkens as a screaming star is born."
        });
        return recipes;
    }

    _initSynergyRules() {
        return [
            {
                tags: ["FIRE", "VOID"],
                name_suffix: "of Entropic Flame",
                effect: { type: "APPLY_STATUS", status: "VOID_BURN", value: 5 }
            },
            {
                tags: ["NATURE", "HEALING"],
                name_suffix: "of Lifeblood",
                effect: { type: "HEAL_OVER_TIME", value: 3 }
            },
            {
                tags: ["MELEE", "RANGED"],
                name_suffix: "Strike",
                effect: { type: "DASH_ATTACK", range: 3 }
            }
        ];
    }

    _checkSynergies(skillA, skillB) {
        const combinedTags = new Set([...skillA.tags, ...skillB.tags]);
        
        for (const rule of this.synergyRules) {
            // Check if combined tags contain ALL tags required by the rule
            // (Simplified logic: if rule requires [A, B], do we have A and B?)
            // Actually, usually synergy is A + B.
            const match = rule.tags.every(tag => combinedTags.has(tag));
            if (match) return rule;
        }
        return null;
    }

    _createLegendaryCard(recipe, skillA, skillB) {
        return {
            id: `fusion_${Date.now()}_legendary`,
            name: recipe.name,
            tier: recipe.tier,
            components: [skillA.id, skillB.id],
            primary_action: skillA.type === 'ACTIVE' ? skillA.id : skillB.id, // Default to first active
            stats: recipe.base_stats_mod,
            effects: [...skillA.effects, ...skillB.effects], // Inherit effects? Or replace? Legendary usually replaces.
            // For now, let's say Legendary has its own custom effects defined in a real DB, 
            // but here we just merge + boost.
            narrative: recipe.narrative_trigger
        };
    }

    _createSynergyCard(synergy, skillA, skillB) {
        return {
            id: `fusion_${Date.now()}_synergy`,
            name: `${skillA.name} ${synergy.name_suffix}`,
            tier: "RARE",
            components: [skillA.id, skillB.id],
            primary_action: skillA.id,
            stats: {
                damage: (skillA.base_stats.damage || 0) + (skillB.base_stats.damage || 0),
                cost: Math.floor((skillA.base_stats.cost + skillB.base_stats.cost) * 0.8) // Efficiency bonus
            },
            effects: [...skillA.effects, synergy.effect],
            narrative: `A combination of ${skillA.name} and ${skillB.name}.`
        };
    }

    _createHybridCard(skillA, skillB) {
        return {
            id: `fusion_${Date.now()}_hybrid`,
            name: `Hybrid: ${skillA.name} & ${skillB.name}`,
            tier: "COMMON",
            components: [skillA.id, skillB.id],
            primary_action: skillA.id,
            stats: {
                damage: (skillA.base_stats.damage || 0) + (skillB.base_stats.damage || 0),
                cost: (skillA.base_stats.cost || 0) + (skillB.base_stats.cost || 0)
            },
            effects: [...skillA.effects, ...skillB.effects],
            narrative: "A crude mixture of two techniques."
        };
    }
}

module.exports = { FusionCalculator };
