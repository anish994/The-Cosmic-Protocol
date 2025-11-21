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
 * INTEGRATES: Narrative Engine V2 for deep lore and tactical generation.
 * 
 * @version 2.0
 */

class FusionCalculator {
    constructor(skillDatabase) {
        this.skillDB = skillDatabase;
        this.legendaryRecipes = this._initLegendaryRecipes();
        this.narrativeEngine = new NarrativeEngine();
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

        // 2. Procedural Generation (Smart Engine)
        return this._createProceduralCard(skillA, skillB);
    }

    _initLegendaryRecipes() {
        const recipes = new Map();
        // Example: Solar Flare + Void Strike = Solar Void Singularity
        recipes.set('skill_solar_flare+skill_void_strike', {
            name: "Solar Void Singularity",
            tier: "LEGENDARY",
            type: "ULTIMATE",
            tags: ["COSMIC", "DESTRUCTIVE", "VOID", "SOLAR"],
            stats: { damage: 50, cooldown: 10, cost: 20 },
            description: "Collapses a star into a void rift, annihilating everything in the radius.",
            lore_quote: "\"When light and dark collide, they do not mix. They scream.\"",
            tactical_brief: "The ultimate area denial tool. Use it to block choke points or wipe entire squads.",
            mastery_perk: "Mastery Lvl 10: Radius increases by 50%.",
            gameplay_info: {
                usage: ["Target: Area (10m)", "Cast: 2s Channel"],
                features: ["Instantly kills non-bosses", "Destroys terrain permanently", "Summons Void Horrors"]
            },
            deep_data: {
                environment: "Permanently alters the biome to 'Null Zone'.",
                narrative: "Triggers the 'Cosmic Attention' event.",
                evolution: null 
            }
        });
        return recipes;
    }

    _createLegendaryCard(recipe, skillA, skillB) {
        return {
            id: `fusion_${Date.now()}_legendary`,
            ...recipe,
            components: [skillA.id, skillB.id],
            effects: [
                { type: "DAMAGE", value: recipe.stats.damage, target: "AREA" },
                { type: "APPLY_STATUS", status: "COSMIC_HORROR", duration: 5 }
            ]
        };
    }

    _createProceduralCard(s1, s2) {
        // A. Naming Logic
        let newName = this.narrativeEngine.generateName(s1, s2);

        // B. Stat Logic (Synergy Bonus)
        const sameTag = s1.tags[0] === s2.tags[0];
        let newDmg = Math.floor(((s1.base_stats.damage || 0) + (s2.base_stats.damage || 0)) * 0.85);
        let newCost = Math.floor(Math.max(s1.base_stats.cost || 0, s2.base_stats.cost || 0) * 1.2);
        let newCooldown = Math.floor((s1.base_stats.cooldown + s2.base_stats.cooldown) / 1.8);

        if (sameTag) {
            newDmg = Math.floor(newDmg * 1.2); // 20% Damage Boost for specialization
            newName = `Greater ${newName}`; 
        } else {
            newCost = Math.floor(newCost * 0.9); // 10% Cost reduction for hybrid efficiency
        }

        // C. Tag Logic
        const mergedTags = [...new Set([...s1.tags, ...s2.tags])].slice(0, 4);

        // D. Context Aware Generation
        const lore = this.narrativeEngine.generateLore(s1, s2);
        const desc = this.narrativeEngine.generateDescription(s1, s2, newName);
        const tactics = this.narrativeEngine.generateTactics(newName, {damage: newDmg, cooldown: newCooldown, cost: newCost}, mergedTags);
        const env = this.narrativeEngine.generateEnv(mergedTags);
        const social = this.narrativeEngine.generateSocial(mergedTags);

        // E. Gameplay Info Synthesis
        const usage = s1.gameplay_info ? s1.gameplay_info.usage : ["Target: Standard"];
        const features = [];
        if (s1.gameplay_info) features.push(...s1.gameplay_info.features);
        if (s2.gameplay_info) features.push(...s2.gameplay_info.features);
        const uniqueFeatures = [...new Set(features)].slice(0, 3);

        return {
            id: `fusion_${Date.now()}_procedural`,
            name: newName,
            tier: sameTag ? "RARE" : "COMMON",
            type: sameTag ? "SPECIALIZED" : "HYBRID",
            tags: mergedTags,
            stats: { damage: newDmg, cost: newCost, cooldown: newCooldown },
            description: desc,
            lore_quote: lore,
            tactical_brief: tactics,
            mastery_perk: "Mastery Lvl 1: Unlocks 'Instability' modifier.",
            gameplay_info: {
                usage: usage, 
                features: uniqueFeatures
            },
            deep_data: {
                environment: env,
                narrative: social,
                evolution: null 
            },
            components: [s1.id, s2.id],
            effects: [...(s1.effects || []), ...(s2.effects || [])]
        };
    }
}

/**
 * NARRATIVE ENGINE V2 (PORTED FROM WORKSHOP)
 */
class NarrativeEngine {
    constructor() {
        this.lexicon = {
            VOID: {
                adj: ["Abyssal", "Null", "Empty", "Hollow", "Eldritch", "Forbidden", "Dark", "Silent"],
                noun: ["Singularity", "Rift", "Collapse", "Whisper", "Entropy", "Vortex", "Omen", "Horror"],
                verb: ["erases", "consumes", "unmakes", "silences", "devours", "warps", "shatters"]
            },
            SOLAR: {
                adj: ["Blazing", "Infernal", "Scorching", "Radiant", "Luminous", "Divine", "Searing"],
                noun: ["Nova", "Inferno", "Cataclysm", "Pyre", "Dawn", "Flare", "Judgment", "Star"],
                verb: ["incinerates", "cauterizes", "engulfs", "illuminates", "purifies", "melts"]
            },
            NATURE: {
                adj: ["Primal", "Overgrown", "Feral", "Blooming", "Toxic", "Wild", "Ancient"],
                noun: ["Root", "Bloom", "Thorn", "Grove", "Venom", "Swarm", "Canopy", "Wrath"],
                verb: ["entangles", "overgrows", "poisons", "crushes", "reclaims", "sprouts"]
            },
            ICE: {
                adj: ["Glacial", "Frozen", "Crystalline", "Absolute", "Shattered", "Numbing"],
                noun: ["Blizzard", "Glacier", "Shard", "Stasis", "Frost", "Winter", "Zero"],
                verb: ["freezes", "shatters", "preserves", "halts", "crystallizes", "numbs"]
            },
            STORM: {
                adj: ["Volatile", "Thunderous", "Electric", "Static", "Charged", "Sonic", "Rapid"],
                noun: ["Tempest", "Bolt", "Surge", "Thunder", "Current", "Flash", "Boom"],
                verb: ["shocks", "overloads", "stuns", "conducts", "flashes", "deafens"]
            },
            BLOOD: {
                adj: ["Crimson", "Sanguine", "Vital", "Cursed", "Weeping", "Visceral"],
                noun: ["Pact", "Sacrifice", "Hemorrhage", "Vessel", "Rite", "Carnage"],
                verb: ["drains", "corrupts", "spills", "transmutes", "boils"]
            },
            GENERIC: {
                noun: ["Strike", "Blast", "Wave", "Form", "Technique", "Art", "Method"],
                connector: ["of", "from", "beneath", "within"]
            }
        };

        this.lore_templates = [
            "\"[A] is merely the precursor to [B].\"",
            "\"They thought [A] was the end. [B] is the truth.\"",
            "\"Born from the union of [A] and [B].\"",
            "\"The [TAG1] energies twist the [TAG2] into something new.\"",
            "\"A technique forbidden in three realms.\"",
            "\"It hums with the song of [A].\"",
            "\"Perfection is not singular. It is [A] fused with [B].\""
        ];

        this.env_templates = [
            "The ground [VERB1] and [VERB2].",
            "Leaves a lingering aura of [TAG1] energy.",
            "Nearby [TAG2] sources are instantly [VERB1].",
            "The air becomes heavy with [TAG1] particles.",
            "Shadows lengthen and [VERB2]."
        ];

        this.tactics = {
            nuke: [
                "High burst potential. Best used on stunned targets to guarantee the hit.", 
                "A heavy hitter. Save this for the boss's vulnerability phase."
            ],
            poke: [
                "Low commitment, consistent damage. Use this to keep shields from regenerating.", 
                "Weave this between heavy attacks to maintain DPS uptime."
            ],
            cc: [
                "Controls the battlefield. Use this to peel for yourself or set up AOE combos.", 
                "Disrupts enemy formations. Ideal for initiating combat."
            ],
            utility: [
                "Situational but powerful. Don't waste this on trash mobs.", 
                "Can turn the tide if timed correctly against enemy ultimates."
            ],
            VOID: "Void damage ignores a portion of enemy resistance.",
            SOLAR: "The lingering burn prevents enemies from entering stealth or regenerating.",
            NATURE: "Rooted enemies take bonus damage from Fire sources.",
            ICE: "Shatter frozen targets with heavy physical attacks for critical damage.",
            STORM: "Chains to nearby wet or metal-armored enemies.",
            BLOOD: "The health cost is risky; ensure you have a healing source active."
        };
    }

    getWord(tag, type) {
        const pool = this.lexicon[tag] || this.lexicon.VOID;
        const words = pool[type] || this.lexicon.GENERIC.noun;
        return words[Math.floor(Math.random() * words.length)];
    }

    generateName(s1, s2) {
        const t1 = s1.tags[0];
        const t2 = s2.tags[0];
        
        if (t1 === t2) {
            const adj = this.getWord(t1, 'adj');
            const noun = this.getWord(t1, 'noun');
            return `True ${adj} ${noun}`;
        }

        const roll = Math.random();
        if (roll < 0.4) {
            return `${this.getWord(t1, 'adj')} ${this.getWord(t2, 'noun')}`;
        } else if (roll < 0.7) {
            return `${this.getWord(t2, 'noun')} of ${this.getWord(t1, 'noun')}`;
        } else {
            return `${this.getWord(t2, 'adj')} ${this.getWord(t1, 'noun')}`;
        }
    }

    generateDescription(s1, s2, newName) {
        const t1 = s1.tags[0];
        const t2 = s2.tags[0];
        const v1 = this.getWord(t1, 'verb');
        const v2 = this.getWord(t2, 'verb');
        
        const templates = [
            `A volatile art that ${v1} matter while it ${v2} the spirit.`,
            `Channels ${t1} energy to ${v2} targets in a ${t2} radius.`,
            `Manifests a ${newName} that ${v1} everything it touches.`,
            `The ${s1.name} acts as a catalyst, allowing the ${s2.name} to ${v1} reality.`
        ];
        
        return templates[Math.floor(Math.random() * templates.length)];
    }

    generateLore(s1, s2) {
        const template = this.lore_templates[Math.floor(Math.random() * this.lore_templates.length)];
        return template
            .replace('[A]', s1.name)
            .replace('[B]', s2.name)
            .replace('[TAG1]', s1.tags[0])
            .replace('[TAG2]', s2.tags[0]);
    }

    generateEnv(tags) {
        const t1 = tags[0];
        const t2 = tags[1] || t1;
        const v1 = this.getWord(t1, 'verb');
        const v2 = this.getWord(t2, 'verb');
        
        const template = this.env_templates[Math.floor(Math.random() * this.env_templates.length)];
        return template
            .replace('[VERB1]', v1)
            .replace('[VERB2]', v2)
            .replace('[TAG1]', t1)
            .replace('[TAG2]', t2);
    }

    generateSocial(tags) {
        if (tags.includes('VOID') || tags.includes('BLOOD')) return "Civilians flee in terror. Guards draw weapons.";
        if (tags.includes('SOLAR')) return "Religious NPCs may bow. Undead flee.";
        return "Observers are confused and wary.";
    }

    generateTactics(name, stats, tags) {
        let advice = [];
        
        if (stats.damage > 35) {
            advice.push(this.tactics.nuke[Math.floor(Math.random() * this.tactics.nuke.length)]);
        } else if (stats.cooldown < 3) {
            advice.push(this.tactics.poke[Math.floor(Math.random() * this.tactics.poke.length)]);
        } else if (tags.includes('CONTROL') || tags.includes('ICE')) {
            advice.push(this.tactics.cc[Math.floor(Math.random() * this.tactics.cc.length)]);
        } else {
            advice.push(this.tactics.utility[Math.floor(Math.random() * this.tactics.utility.length)]);
        }

        const primaryTag = tags[0];
        if (this.tactics[primaryTag]) {
            advice.push(this.tactics[primaryTag]);
        }

        return advice.join(" ");
    }
}

module.exports = { FusionCalculator };

