/**
 * ═══════════════════════════════════════════════════════════════════════════
 * SKILL DATABASE V2 (THE SOURCE OF TRUTH)
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * The central repository for all skills in the game.
 * Implements the Phase 1 Schema for seamless integration with Combat & Narrative.
 * 
 * @version 2.0
 */

class SkillDatabase_v2 {
    constructor() {
        this.skills = new Map();
        this._initializeCoreSkills();
    }

    /**
     * Returns a skill object by ID.
     * @param {string} skillId 
     * @returns {Object|null}
     */
    getSkill(skillId) {
        return this.skills.get(skillId) || null;
    }

    /**
     * Returns all skills matching a specific tag.
     * @param {string} tag 
     * @returns {Array}
     */
    getSkillsByTag(tag) {
        const results = [];
        for (const skill of this.skills.values()) {
            if (skill.tags.includes(tag)) {
                results.push(skill);
            }
        }
        return results;
    }

    /**
     * Populates the database with the initial batch of skills.
     * In a full build, this would load from multiple JSON files.
     */
    _initializeCoreSkills() {
        const coreSkills = [
            // --- VOID ENGINE ---
            {
                id: "skill_void_strike",
                name: "Void Strike",
                type: "ACTIVE",
                tags: ["VOID", "MELEE", "DIMENSIONAL", "OFFENSIVE"],
                base_stats: {
                    damage: 15,
                    cooldown: 3,
                    cost: 5,
                    range: 1
                },
                effects: [
                    { type: "DAMAGE", value: 15, target: "SINGLE" },
                    { type: "APPLY_STATUS", status: "VOID_TOUCHED", duration: 2, chance: 0.5 }
                ],
                narrative_triggers: {
                    on_cast: "You tear a rift in reality.",
                    on_hit: "The target flickers out of existence for a moment.",
                    environment: "COLLAPSE_STRUCTURE"
                }
            },
            {
                id: "skill_entropy_shield",
                name: "Entropy Shield",
                type: "ACTIVE",
                tags: ["VOID", "DEFENSIVE", "SELF"],
                base_stats: {
                    shield: 20,
                    cooldown: 5,
                    cost: 8
                },
                effects: [
                    { type: "SHIELD", value: 20, target: "SELF" },
                    { type: "REFLECT_DAMAGE", value: 0.2, duration: 3 }
                ],
                narrative_triggers: {
                    on_cast: "The air around you hardens into a geometric barrier.",
                    on_hit: "Attacks dissolve into static against your shield.",
                    environment: "ABSORB_LIGHT"
                }
            },

            // --- SOLAR ENGINE ---
            {
                id: "skill_solar_flare",
                name: "Solar Flare",
                type: "ACTIVE",
                tags: ["SOLAR", "RANGED", "FIRE", "OFFENSIVE"],
                base_stats: {
                    damage: 12,
                    cooldown: 2,
                    cost: 4,
                    range: 3
                },
                effects: [
                    { type: "DAMAGE", value: 12, target: "SINGLE" },
                    { type: "APPLY_STATUS", status: "BURNING", duration: 3, value: 3 }
                ],
                narrative_triggers: {
                    on_cast: "You channel the fury of a dying star.",
                    on_hit: "The target is engulfed in blinding white fire.",
                    environment: "IGNITE_FLAMMABLE"
                }
            },
            {
                id: "skill_dawn_mending",
                name: "Dawn Mending",
                type: "ACTIVE",
                tags: ["SOLAR", "HEALING", "SUPPORT"],
                base_stats: {
                    heal: 15,
                    cooldown: 4,
                    cost: 6
                },
                effects: [
                    { type: "HEAL", value: 15, target: "SELF_OR_ALLY" },
                    { type: "CLEANSE", status: "VOID_TOUCHED" }
                ],
                narrative_triggers: {
                    on_cast: "A warm, golden light washes over you.",
                    on_hit: "Wounds knit together as if time is reversing.",
                    environment: "PURIFY_CORRUPTION"
                }
            },

            // --- NATURE/BIOMANCER ENGINE ---
            {
                id: "skill_thorn_whip",
                name: "Thorn Whip",
                type: "ACTIVE",
                tags: ["NATURE", "MELEE", "PHYSICAL", "OFFENSIVE"],
                base_stats: {
                    damage: 10,
                    cooldown: 1,
                    cost: 3,
                    range: 2
                },
                effects: [
                    { type: "DAMAGE", value: 10, target: "SINGLE" },
                    { type: "PULL", distance: 1 }
                ],
                narrative_triggers: {
                    on_cast: "Vines erupt from your arm, snapping like a whip.",
                    on_hit: "Thorns dig deep, dragging the target closer.",
                    environment: "GRAPPLE_POINT"
                }
            },
            {
                id: "skill_bloom_heal",
                name: "Bloom Heal",
                type: "PASSIVE",
                tags: ["NATURE", "HEALING", "PASSIVE"],
                base_stats: {
                    heal_per_turn: 2
                },
                effects: [
                    { type: "REGEN", value: 2, condition: "ALWAYS" }
                ],
                narrative_triggers: {
                    on_cast: null, // Passive
                    on_hit: null,
                    environment: "GROW_PLANTS"
                }
            }
        ];

        coreSkills.forEach(skill => this.skills.set(skill.id, skill));
        console.log(`[SkillDatabase] Loaded ${this.skills.size} core skills.`);
    }
}

module.exports = { SkillDatabase_v2 };
