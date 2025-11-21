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
                tier: "COMMON",
                type: "ACTIVE",
                tags: ["VOID", "MELEE", "DIMENSIONAL", "OFFENSIVE"],
                base_stats: { damage: 15, cooldown: 3, cost: 5, range: 1 },
                description: "Tears a localized rift in reality, dealing Void damage.",
                lore_quote: "\"The fabric of reality is not a wall, but a curtain. Tear it.\"",
                tactical_brief: "Best used against armored targets. The armor penetration applies before damage calculation. Positioning is key—try to line up enemies for the evolved Cleave.",
                mastery_perk: "Mastery Lvl 5: Cooldown resets on kill.",
                gameplay_info: {
                    usage: ["Target: Single Enemy", "Range: Melee (1.5m)"],
                    features: ["Ignores 10% Armor", "Applies 'Void Touched' (5s)", "Interrupts Casting"]
                },
                deep_data: {
                    environment: "Collapses weak structures. Absorbs light.",
                    narrative: "NPCs fearful of the Void will recoil.",
                    evolution: "Evolves into 'Dimensional Cleave'."
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
                tier: "RARE",
                type: "ACTIVE",
                tags: ["VOID", "DEFENSIVE", "SELF"],
                base_stats: { shield: 20, cooldown: 5, cost: 8 },
                description: "Manifests a geometric barrier of hardened void energy.",
                lore_quote: "\"Nothing can hurt you if it ceases to exist before it touches you.\"",
                tactical_brief: "Use pre-emptively against heavy burst damage. The reflection damage is significant against rapid-fire enemies.",
                mastery_perk: "Mastery Lvl 5: Shield explosion on break.",
                gameplay_info: {
                    usage: ["Target: Self", "Duration: 5s"],
                    features: ["Absorbs 20 DMG", "Reflects 20% DMG", "Immune to Knockback"]
                },
                deep_data: {
                    environment: "Dampens sound in the area.",
                    narrative: "Observers feel a sudden drop in temperature.",
                    evolution: "Evolves into 'Event Horizon'."
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
                tier: "COMMON",
                type: "ACTIVE",
                tags: ["SOLAR", "RANGED", "FIRE", "OFFENSIVE"],
                base_stats: { damage: 12, cooldown: 2, cost: 4, range: 3 },
                description: "Channels the fury of a dying star into a concentrated bolt.",
                lore_quote: "\"Let them burn with the memory of a thousand suns.\"",
                tactical_brief: "Excellent for crowd control in narrow corridors. The piercing effect allows you to hit multiple targets if you kite them into a line.",
                mastery_perk: "Mastery Lvl 10: Leaves a trail of fire.",
                gameplay_info: {
                    usage: ["Target: Directional", "Range: Long (15m)"],
                    features: ["Pierces first target", "Ignites enemies", "Illuminates dark areas"]
                },
                deep_data: {
                    environment: "Ignites flammable terrain. Melts ice.",
                    narrative: "Provides light in Dark Zones.",
                    evolution: "Evolves into 'Supernova'."
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
                tier: "UNCOMMON",
                type: "ACTIVE",
                tags: ["SOLAR", "HEALING", "SUPPORT"],
                base_stats: { heal: 15, cooldown: 4, cost: 6 },
                description: "Calls down a pillar of gentle sunlight to knit wounds.",
                lore_quote: "\"The sun does not judge. It simply gives.\"",
                tactical_brief: "Primary sustain tool. Can be cast on allies. Cleanses Void corruption, making it essential in the Dark Zones.",
                mastery_perk: "Mastery Lvl 5: Grants 'Radiance' buff (Health Regen).",
                gameplay_info: {
                    usage: ["Target: Self or Ally", "Range: Mid (10m)"],
                    features: ["Heals 15 HP", "Cleanses Debuffs", "Bonus vs Undead"]
                },
                deep_data: {
                    environment: "Accelerates plant growth.",
                    narrative: "Undead recoil from the light.",
                    evolution: "Evolves into 'Solar Grace'."
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
                tier: "COMMON",
                type: "ACTIVE",
                tags: ["NATURE", "MELEE", "PHYSICAL", "OFFENSIVE", "CONTROL"],
                base_stats: { damage: 10, cooldown: 1, cost: 3, range: 2 },
                description: "Summons a vine to strike and pull enemies.",
                lore_quote: "\"Nature does not ask for permission to reclaim its own.\"",
                tactical_brief: "Use this to pull ranged enemies into melee range, or to pull yourself towards terrain for mobility.",
                mastery_perk: "Mastery Lvl 3: Applies 'Bleed' on hit.",
                gameplay_info: {
                    usage: ["Target: Single Enemy", "Range: Mid (4m)"],
                    features: ["Pulls enemy 2m closer", "Bleed Effect", "Grapples terrain"]
                },
                deep_data: {
                    environment: "Creates grapple points.",
                    narrative: "Druids are less aggressive.",
                    evolution: "Evolves into 'Ironwood Lash'."
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
                tier: "COMMON",
                type: "PASSIVE",
                tags: ["NATURE", "HEALING", "PASSIVE"],
                base_stats: { heal_per_turn: 2 },
                description: "Your presence encourages life, slowly mending wounds over time.",
                lore_quote: "\"Life finds a way.\"",
                tactical_brief: "Passive regeneration. Combine with high-armor builds for attrition warfare.",
                mastery_perk: "Mastery Lvl 10: Spawns healing herbs nearby.",
                gameplay_info: {
                    usage: ["Passive", "Always Active"],
                    features: ["Regen 2 HP/Turn", "Stackable with Potions", "No Cost"]
                },
                deep_data: {
                    environment: "Flowers bloom in your footsteps.",
                    narrative: "Animals are friendly.",
                    evolution: "Evolves into 'Verdant Aura'."
                },
                effects: [
                    { type: "REGEN", value: 2, condition: "ALWAYS" }
                ],
                narrative_triggers: {
                    on_cast: null,
                    on_hit: null,
                    environment: "GROW_PLANTS"
                }
            },

            // --- NEW PROTOTYPE SKILLS ---
            {
                id: "skill_cryo_stasis",
                name: "Cryo Stasis",
                tier: "RARE",
                type: "ACTIVE",
                tags: ["ICE", "DEFENSIVE", "TIME"],
                base_stats: { shield: 30, cooldown: 6, cost: 8 },
                description: "Freezes time and space around the caster.",
                lore_quote: "\"Time is a river. I am the dam.\"",
                tactical_brief: "A panic button. Use it to negate massive incoming damage mechanics. Be warned: you cannot move while in stasis.",
                mastery_perk: "Mastery Lvl 5: Heals 10% HP while frozen.",
                gameplay_info: {
                    usage: ["Target: Self", "Duration: 3s"],
                    features: ["Invulnerability", "Immobilizes Self", "Freezes nearby enemies"]
                },
                deep_data: {
                    environment: "Freezes water surfaces.",
                    narrative: "Can pause conversation timers.",
                    evolution: "Evolves into 'Absolute Zero'."
                },
                effects: [
                    { type: "INVULNERABLE", duration: 3 },
                    { type: "FREEZE_AREA", radius: 3 }
                ],
                narrative_triggers: {
                    on_cast: "The world turns grey and silent.",
                    environment: "FREEZE_WATER"
                }
            },
            {
                id: "skill_blood_pact",
                name: "Blood Pact",
                tier: "FORBIDDEN",
                type: "ACTIVE",
                tags: ["BLOOD", "BUFF", "CURSED"],
                base_stats: { health_cost: 10, damage_boost: 0.5 },
                description: "Sacrifice vitality for raw power.",
                lore_quote: "\"Power demands a price. I pay in red.\"",
                tactical_brief: "High risk, high reward. Combine with lifesteal skills to mitigate the health cost. Do not use when below 20% HP.",
                mastery_perk: "Mastery Lvl 10: Cost reduced by 50%.",
                gameplay_info: {
                    usage: ["Target: Self", "Cost: 10% HP"],
                    features: ["Increases DMG by 50%", "Disables Healing", "Attracts Blood Beasts"]
                },
                deep_data: {
                    environment: "Corrupts holy ground.",
                    narrative: "Paladins will attack on sight.",
                    evolution: "Evolves into 'Hemomancy'."
                },
                effects: [
                    { type: "SELF_DAMAGE", value: 10 },
                    { type: "BUFF_DAMAGE", value: 0.5, duration: 10 }
                ],
                narrative_triggers: {
                    on_cast: "Your veins turn black as power surges.",
                    environment: "CORRUPT_GROUND"
                }
            },
            {
                id: "skill_crimson_lance",
                name: "Crimson Lance",
                tier: "UNCOMMON",
                type: "ACTIVE",
                tags: ["BLOOD", "RANGED", "OFFENSIVE"],
                base_stats: { damage: 18, cost: 6, cooldown: 4, range: 12 },
                description: "Hurls a spear of crystallized blood that drains life.",
                lore_quote: "\"It seeks the warmth it lacks.\"",
                tactical_brief: "Your primary sustain tool in a Blood build. Use it to recover health lost from Blood Pact.",
                mastery_perk: "Mastery Lvl 5: Pierces through enemies.",
                gameplay_info: {
                    usage: ["Target: Directional", "Range: Long"],
                    features: ["Lifesteal 50%", "High Velocity", "Silent Cast"]
                },
                deep_data: {
                    environment: "Stains surfaces permanently.",
                    narrative: "Vampires regard you with interest.",
                    evolution: "Evolves into 'Exsanguinate'."
                },
                effects: [
                    { type: "DAMAGE", value: 18, target: "SINGLE" },
                    { type: "HEAL", value: 9, target: "SELF" }
                ],
                narrative_triggers: {
                    on_cast: "Blood coalesces into a jagged spear.",
                    on_hit: "The spear shatters, drawing red mist back to you.",
                    environment: "BLOOD_SPLATTER"
                }
            },

            // --- STORM ENGINE ---
            {
                id: "skill_thunderclap",
                name: "Thunderclap",
                tier: "COMMON",
                type: "ACTIVE",
                tags: ["STORM", "AOE", "CONTROL", "SONIC"],
                base_stats: { damage: 8, cost: 5, cooldown: 6, radius: 5 },
                description: "A sonic boom that stuns nearby enemies.",
                lore_quote: "\"Speak loudly, and carry a thunderbolt.\"",
                tactical_brief: "Essential for disengaging. The stun duration is short, so use it to interrupt wind-up animations.",
                mastery_perk: "Mastery Lvl 3: Knocks back enemies.",
                gameplay_info: {
                    usage: ["Target: Self (AOE)", "Radius: 5m"],
                    features: ["Stun (1s)", "Interrupts", "Deafens Targets"]
                },
                deep_data: {
                    environment: "Shatters glass windows.",
                    narrative: "Alerts all enemies in the zone.",
                    evolution: "Evolves into 'Storm Lord'."
                },
                effects: [
                    { type: "DAMAGE", value: 8, target: "AREA" },
                    { type: "STUN", duration: 1 }
                ],
                narrative_triggers: {
                    on_cast: "You clap your hands, creating a shockwave.",
                    environment: "SHATTER_GLASS"
                }
            },
            {
                id: "skill_lightning_dash",
                name: "Lightning Dash",
                tier: "RARE",
                type: "ACTIVE",
                tags: ["STORM", "MOBILITY", "OFFENSIVE"],
                base_stats: { damage: 10, cost: 4, cooldown: 3, range: 8 },
                description: "Transform into electricity and surge forward.",
                lore_quote: "\"Be where they are not.\"",
                tactical_brief: "Both a dodge and an attack. You are invulnerable during the dash frames. Use it to pass through projectiles.",
                mastery_perk: "Mastery Lvl 5: Chains lightning to nearby foes on exit.",
                gameplay_info: {
                    usage: ["Target: Directional", "Range: 8m"],
                    features: ["Invulnerable (0.2s)", "Pass Through Units", "Shock Trail"]
                },
                deep_data: {
                    environment: "Charges machinery.",
                    narrative: "Technomancers are impressed.",
                    evolution: "Evolves into 'Ball Lightning'."
                },
                effects: [
                    { type: "DASH", distance: 8 },
                    { type: "DAMAGE", value: 10, target: "PATH" }
                ],
                narrative_triggers: {
                    on_cast: "You dissolve into a streak of blue light.",
                    environment: "CHARGE_ELECTRONICS"
                }
            },

            // --- ICE ENGINE EXPANSION ---
            {
                id: "skill_glacial_spike",
                name: "Glacial Spike",
                tier: "COMMON",
                type: "ACTIVE",
                tags: ["ICE", "RANGED", "PHYSICAL"],
                base_stats: { damage: 20, cost: 4, cooldown: 2, range: 20 },
                description: "Launches a heavy icicle that shatters on impact.",
                lore_quote: "\"Winter has teeth.\"",
                tactical_brief: "High single-target damage but requires precise aim. Deals bonus damage to Frozen targets (Shatter Combo).",
                mastery_perk: "Mastery Lvl 5: Fragments hit enemies behind target.",
                gameplay_info: {
                    usage: ["Target: Single", "Range: Very Long"],
                    features: ["High Velocity", "Shatter Bonus", "Physical Dmg"]
                },
                deep_data: {
                    environment: "Pins enemies to walls.",
                    narrative: "Leaves evidence (melting ice).",
                    evolution: "Evolves into 'Avalanche'."
                },
                effects: [
                    { type: "DAMAGE", value: 20, target: "SINGLE" },
                    { type: "BONUS_DAMAGE", condition: "FROZEN", multiplier: 2.0 }
                ],
                narrative_triggers: {
                    on_cast: "Moisture freezes instantly into a spear.",
                    environment: "PIN_TARGET"
                }
            }
        ];

        coreSkills.forEach(skill => this.skills.set(skill.id, skill));
        console.log(`[SkillDatabase] Loaded ${this.skills.size} core skills.`);
    }
}

module.exports = { SkillDatabase_v2 };
