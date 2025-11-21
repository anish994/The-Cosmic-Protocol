
// Auto-generated from COMPLETE_SKILL_DATABASE.json
// Engine: Tantra
// Count: 100

window.SKILL_DB_TANTRA = [
    {
        "id": "skill_tantra_001",
        "name": "Resonant Detonation",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "DECAY",
            "STASIS",
            "DISCORD"
        ],
        "stats": {
            "cooldown": 2,
            "cost": 40,
            "damage": 54
        },
        "description": "** Consume all *types* of Resonance on a target. For each unique Resonance type consumed (e.g., [Decay], [Stasis], [Discord]), deal 15 AoE damage around the target.\r\n    *   **Evo A (Chain Reaction):** The AoE radius increases by 1 for each unique Resonance type.\r\n    *   **Evo B (Focused Blast):** Damage is dealt to the primary target only but is increased by 50%.\r\n    *   *Design Note: Encourages cross-karma skill weaving for a massive damage payoff.*",
        "lore_quote": "\"A technique from the Tantra engine.\"",
        "tactical_brief": "Utilizes Tantra mechanics. Decay, Stasis, Discord.",
        "mastery_perk": "Mastery Lvl 5: (Chain Reaction): The AoE radius increases by 1 for each unique Resonance type.\r\n    *   Evo B (Focused Blast): Damage is dealt to the primary target only but is increased by 50%.\r\n    *   *Design Note: Encourages cross-karma skill weaving for a massive damage payoff.*",
        "gameplay_info": {
            "usage": [
                "Cost: 40 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": [
                "Decay",
                "Stasis",
                "Discord"
            ]
        },
        "deep_data": {
            "environment": "Resonates with dot, offense.",
            "narrative": "Practitioners of Tantra use this to manipulate dot.",
            "evolution": "Potential evolution: Focused Blast"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 54,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_002",
        "name": "Cull the Weak",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "DECAY",
            "DECAY"
        ],
        "stats": {
            "cooldown": 2,
            "cost": 35,
            "damage": 51
        },
        "description": "** Deal 20 damage to a target. If the target is below 30% Ojas, the damage is doubled and applies 2 stacks of [Decay].\r\n    *   **Evo A (Ruthless Precision):** The execute threshold is increased to 40% Ojas.\r\n    *   **Evo B (Spreading Plague):** On a successful execute (kills the target), applies 2 [Decay] to adjacent enemies.",
        "lore_quote": "\"A technique from the Tantra engine.\"",
        "tactical_brief": "Utilizes Tantra mechanics. Decay, Decay.",
        "mastery_perk": "Mastery Lvl 5: (Ruthless Precision): The execute threshold is increased to 40% Ojas.\r\n    *   Evo B (Spreading Plague): On a successful execute (kills the target), applies 2 [Decay] to adjacent enemies.",
        "gameplay_info": {
            "usage": [
                "Cost: 35 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": [
                "Decay",
                "Decay"
            ]
        },
        "deep_data": {
            "environment": "Resonates with dot, offense.",
            "narrative": "Practitioners of Tantra use this to manipulate dot.",
            "evolution": "Potential evolution: Spreading Plague"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 51,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_003",
        "name": "Withering Curse",
        "type": "ACTIVE",
        "tier": "COMMON",
        "tags": [
            "DECAY"
        ],
        "stats": {
            "cooldown": 1,
            "cost": 25,
            "damage": 27
        },
        "description": "** Apply a debuff for 3 turns: \"Target cannot be healed.\" At the end of the duration, the target takes damage equal to the healing they would have received. Applies 2 [Decay].\r\n    *   **Evo A (Caustic Wound):** Healing prevented is increased to 125% of the damage dealt.\r\n    *   **Evo B (Lingering Malediction):** The debuff duration is increased to 4 turns.\r\n\r\n4.  **Mantra: Jvala (The Flame)** (Chant, Gnosis 15)\r\n    *   **Core Function:** Chant to load the \"Jvala\" Bija into the Mantra Matrix.\r\n    *   **Bija Passive:** Your skills have a +5% critical hit chance.\r\n    *   **Stuti (Jvala + Aakrosh):** Your next damage glyph has +25% critical hit damage.\r\n    *   *Design Note: Adds a critical strike subsystem to the Maran path.*\r\n\r\n---\r\n\r\n### **Vashikaran (Subjugation) — 3 New Skills**",
        "lore_quote": "\"A technique from the Tantra engine.\"",
        "tactical_brief": "Utilizes Tantra mechanics. Decay.",
        "mastery_perk": "Mastery Lvl 5: (Caustic Wound): Healing prevented is increased to 125% of the damage dealt.\r\n    *   Evo B (Lingering Malediction): The debuff duration is increased to 4 turns.\r\n\r\n4.  Mantra: Jvala (The Flame) (Chant, Gnosis 15)\r\n    *   Core Function: Chant to load the \"Jvala\" Bija into the Mantra Matrix.\r\n    *   Bija Passive: Your skills have a +5% critical hit chance.\r\n    *   Stuti (Jvala + Aakrosh): Your next damage glyph has +25% critical hit damage.\r\n    *   *Design Note: Adds a critical strike subsystem to the Maran path.*\r\n\r\n---\r\n\r\n### Vashikaran (Subjugation) — 3 New Skills",
        "gameplay_info": {
            "usage": [
                "Cost: 25 Gnosis",
                "Cooldown: 1 Turns"
            ],
            "features": [
                "Decay"
            ]
        },
        "deep_data": {
            "environment": "Resonates with dot, offense, healing.",
            "narrative": "Practitioners of Tantra use this to manipulate dot.",
            "evolution": "Potential evolution: Lingering Malediction"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 27,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_005",
        "name": "Glimpse of Betrayal",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "SUBSERVIENCE"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 45,
            "damage": 51
        },
        "description": "** For 1 turn, a target enemy Yantra's passive aura affects its owner and their allies instead. Applies 3 [Subservience].\r\n    *   **Evo A (Sustained Treachery):** The effect lasts for 2 turns.\r\n    *   **Evo B (Infectious Betrayal):** The effect also applies to another random enemy Yantra.",
        "lore_quote": "\"A technique from the Tantra engine.\"",
        "tactical_brief": "Utilizes Tantra mechanics. Subservience.",
        "mastery_perk": "Mastery Lvl 5: (Sustained Treachery): The effect lasts for 2 turns.\r\n    *   Evo B (Infectious Betrayal): The effect also applies to another random enemy Yantra.",
        "gameplay_info": {
            "usage": [
                "Cost: 45 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Subservience"
            ]
        },
        "deep_data": {
            "environment": "Resonates with support, offense.",
            "narrative": "Practitioners of Tantra use this to manipulate support.",
            "evolution": "Potential evolution: Infectious Betrayal"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 51,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_006",
        "name": "Forced Allegiance",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "SUBSERVIENCE"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 50,
            "damage": 52
        },
        "description": "** Consume 5 [Subservience] stacks from an enemy Architect. The next buff they cast on themselves is also applied to you.\r\n    *   **Evo A (Perfect Mirror):** You also gain 10 Ojas when the buff is copied.\r\n    *   **Evo B (Stolen Power):** The enemy does not receive the buff; only you do.\r\n\r\n7.  **Yantra: The Overseer** (Yantra, Gnosis 40)\r\n    *   **Core Function:** Deploys a Yantra with a passive aura: \"Enemy Yantras in the same row cost +1 Prana to activate their abilities.\"\r\n    *   **Resonance Link:** If linked with another Vashikaran Yantra, the aura affects the entire board.\r\n    *   **Evo A (Oppressive Gaze):** The Prana cost increase is now +2.\r\n    *   **Evo B (Resource Drain):** The Yantra also drains 1 Prana from the enemy Architect at the start of your turn.\r\n\r\n---\r\n\r\n### **Stambhan (Paralysis) — 3 New Skills**",
        "lore_quote": "\"A technique from the Tantra engine.\"",
        "tactical_brief": "Utilizes Tantra mechanics. Subservience.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Mirror): You also gain 10 Ojas when the buff is copied.\r\n    *   Evo B (Stolen Power): The enemy does not receive the buff; only you do.\r\n\r\n7.  Yantra: The Overseer (Yantra, Gnosis 40)\r\n    *   Core Function: Deploys a Yantra with a passive aura: \"Enemy Yantras in the same row cost +1 Prana to activate their abilities.\"\r\n    *   Resonance Link: If linked with another Vashikaran Yantra, the aura affects the entire board.\r\n    *   Evo A (Oppressive Gaze): The Prana cost increase is now +2.\r\n    *   Evo B (Resource Drain): The Yantra also drains 1 Prana from the enemy Architect at the start of your turn.\r\n\r\n---\r\n\r\n### Stambhan (Paralysis) — 3 New Skills",
        "gameplay_info": {
            "usage": [
                "Cost: 50 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Subservience"
            ]
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Tantra use this to manipulate offense.",
            "evolution": "Potential evolution: Stolen Power"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 52,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_008",
        "name": "Pranic Stagnation",
        "type": "ACTIVE",
        "tier": "COMMON",
        "tags": [
            "STASIS"
        ],
        "stats": {
            "cooldown": 2,
            "cost": 30,
            "damage": 28
        },
        "description": "** Apply a debuff for 2 turns: \"Target cannot gain Prana from passive sources (e.g., turn-based generation).\" Applies 3 [Stasis].\r\n    *   **Evo A (Total Blockade):** The effect now blocks all Prana gain, including from active glyphs.\r\n    *   **Evo B (Lingering Stagnation):** The duration is increased to 3 turns.",
        "lore_quote": "\"A technique from the Tantra engine.\"",
        "tactical_brief": "Utilizes Tantra mechanics. Stasis.",
        "mastery_perk": "Mastery Lvl 5: (Total Blockade): The effect now blocks all Prana gain, including from active glyphs.\r\n    *   Evo B (Lingering Stagnation): The duration is increased to 3 turns.",
        "gameplay_info": {
            "usage": [
                "Cost: 30 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": [
                "Stasis"
            ]
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Tantra use this to manipulate undefined.",
            "evolution": "Potential evolution: Lingering Stagnation"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 28,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_009",
        "name": "Field of Inertia",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [
            "STASIS",
            "STUNNED",
            "SHIELD",
            "STUN"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 55,
            "damage": 79
        },
        "description": "** Consume 5 [Stasis] stacks from a target to create a 3x3 field around them for 2 turns. Units (friend and foe) inside the field cannot use movement abilities.\r\n    *   **Evo A (Expanding Field):** The field's radius is increased to 5x5.\r\n    *   **Evo B (Paralyzing Field):** Enemies entering the field are also [Stunned] for 1 turn.\r\n\r\n10. **Mantra: Sthira (Stillness)** (Chant, Gnosis 15)\r\n    *   **Core Function:** Chant to load the \"Sthira\" Bija into the Mantra Matrix.\r\n    *   **Bija Passive:** Enemy debuffs on you tick down 10% faster.\r\n    *   **Stuti (Sthira + Shanta):** Your next [Shield] glyph also applies a 1-turn [Stun] to any enemy that breaks it.\r\n\r\n---\r\n\r\n### **Vidveshan (Discord) — 3 New Skills**",
        "lore_quote": "\"A technique from the Tantra engine.\"",
        "tactical_brief": "Utilizes Tantra mechanics. Stasis, Stunned, Shield, Stun.",
        "mastery_perk": "Mastery Lvl 5: (Expanding Field): The field's radius is increased to 5x5.\r\n    *   Evo B (Paralyzing Field): Enemies entering the field are also [Stunned] for 1 turn.\r\n\r\n10. Mantra: Sthira (Stillness) (Chant, Gnosis 15)\r\n    *   Core Function: Chant to load the \"Sthira\" Bija into the Mantra Matrix.\r\n    *   Bija Passive: Enemy debuffs on you tick down 10% faster.\r\n    *   Stuti (Sthira + Shanta): Your next [Shield] glyph also applies a 1-turn [Stun] to any enemy that breaks it.\r\n\r\n---\r\n\r\n### Vidveshan (Discord) — 3 New Skills",
        "gameplay_info": {
            "usage": [
                "Cost: 55 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Stasis",
                "Stunned",
                "Shield",
                "Stun"
            ]
        },
        "deep_data": {
            "environment": "Resonates with defense, offense.",
            "narrative": "Practitioners of Tantra use this to manipulate defense.",
            "evolution": "Potential evolution: Paralyzing Field"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 79,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_011",
        "name": "Shared Suffering",
        "type": "ACTIVE",
        "tier": "COMMON",
        "tags": [
            "DISCORD"
        ],
        "stats": {
            "cooldown": 2,
            "cost": 30,
            "damage": 28
        },
        "description": "** Link two enemy Yantras for 3 turns. Whenever one takes damage, the other takes 50% of that damage. Applies 2 [Discord] to both.\r\n    *   **Evo A (Amplified Pain):** The shared damage is increased to 75%.\r\n    *   **Evo B (Chain of Agony):** You can now link up to three Yantras.",
        "lore_quote": "\"A technique from the Tantra engine.\"",
        "tactical_brief": "Utilizes Tantra mechanics. Discord.",
        "mastery_perk": "Mastery Lvl 5: (Amplified Pain): The shared damage is increased to 75%.\r\n    *   Evo B (Chain of Agony): You can now link up to three Yantras.",
        "gameplay_info": {
            "usage": [
                "Cost: 30 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": [
                "Discord"
            ]
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Tantra use this to manipulate offense.",
            "evolution": "Potential evolution: Chain of Agony"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 28,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_012",
        "name": "Corrupted Boon",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "DISCORD",
            "DECAY",
            "DISCORD"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 45,
            "damage": 55
        },
        "description": "** Consume 4 [Discord] stacks from an Architect. The next healing or shielding buff they receive is converted into a [Decay] DoT instead.\r\n    *   **Evo A (Inverted Grace):** The DoT's damage is equal to 150% of the healing/shielding that was prevented.\r\n    *   **Evo B (Prolonged Corruption):** The effect now corrupts the next two boons instead of one.\r\n\r\n13. **Yantra: The Chaos Spire** (Yantra, Gnosis 35)\r\n    *   **Core Function:** At the start of your turn, swaps the current Ojas values of two random enemy Yantras.\r\n    *   **Resonance Link:** If linked with another Vidveshan Yantra, you can choose which two Yantras to swap.\r\n    *   **Evo A (Unstable Matrix):** The swap also applies 1 stack of [Discord] to both Yantras.\r\n    *   **Evo B (Health Siphon):** The Yantra with the higher health loses 10% of its Ojas before the swap.\r\n\r\n---\r\n\r\n### **Uchatan (Banishment) — 5 New Skills**",
        "lore_quote": "\"A technique from the Tantra engine.\"",
        "tactical_brief": "Utilizes Tantra mechanics. Discord, Decay, Discord.",
        "mastery_perk": "Mastery Lvl 5: (Inverted Grace): The DoT's damage is equal to 150% of the healing/shielding that was prevented.\r\n    *   Evo B (Prolonged Corruption): The effect now corrupts the next two boons instead of one.\r\n\r\n13. Yantra: The Chaos Spire (Yantra, Gnosis 35)\r\n    *   Core Function: At the start of your turn, swaps the current Ojas values of two random enemy Yantras.\r\n    *   Resonance Link: If linked with another Vidveshan Yantra, you can choose which two Yantras to swap.\r\n    *   Evo A (Unstable Matrix): The swap also applies 1 stack of [Discord] to both Yantras.\r\n    *   Evo B (Health Siphon): The Yantra with the higher health loses 10% of its Ojas before the swap.\r\n\r\n---\r\n\r\n### Uchatan (Banishment) — 5 New Skills",
        "gameplay_info": {
            "usage": [
                "Cost: 45 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Discord",
                "Decay",
                "Discord"
            ]
        },
        "deep_data": {
            "environment": "Resonates with dot, offense, healing.",
            "narrative": "Practitioners of Tantra use this to manipulate dot.",
            "evolution": "Potential evolution: Prolonged Corruption"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 55,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_014",
        "name": "Resonance Siphon",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "VOID"
        ],
        "stats": {
            "cooldown": 2,
            "cost": 40,
            "damage": 50
        },
        "description": "** Remove up to 5 Resonance stacks of a single type from a target and gain 1 Prana for each stack removed. Applies 1 [Void].\r\n    *   **Evo A (Manaforge):** Also gain 1 Prana for activating the glyph.\r\n    *   **Evo B (Resonance Shatter):** Instead of gaining Prana, deal 5 damage to the target for each stack removed.\r\n    *   *Design Note: A powerful tool for countering other Tantra players.*",
        "lore_quote": "\"A technique from the Tantra engine.\"",
        "tactical_brief": "Utilizes Tantra mechanics. Void.",
        "mastery_perk": "Mastery Lvl 5: (Manaforge): Also gain 1 Prana for activating the glyph.\r\n    *   Evo B (Resonance Shatter): Instead of gaining Prana, deal 5 damage to the target for each stack removed.\r\n    *   *Design Note: A powerful tool for countering other Tantra players.*",
        "gameplay_info": {
            "usage": [
                "Cost: 40 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": [
                "Void"
            ]
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Tantra use this to manipulate offense.",
            "evolution": "Potential evolution: Resonance Shatter"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 50,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_015",
        "name": "Un-naming Rite",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [
            "BANISH",
            "VOID"
        ],
        "stats": {
            "cooldown": 4,
            "cost": 60,
            "damage": 76
        },
        "description": "** Target an enemy Invocation glyph. If it has been cast this duel, [Banish] it for 2 turns. If it has not been cast, increase its Sanctity/Anarchy cost by 10. Applies 4 [Void].\r\n    *   **Evo A (Memory Wipe):** Increases the Banished duration to 3 turns.\r\n    *   **Evo B (Cost Inflation):** The cost increase is now a permanent +15.",
        "lore_quote": "\"A technique from the Tantra engine.\"",
        "tactical_brief": "Utilizes Tantra mechanics. Banish, Void.",
        "mastery_perk": "Mastery Lvl 5: (Memory Wipe): Increases the Banished duration to 3 turns.\r\n    *   Evo B (Cost Inflation): The cost increase is now a permanent +15.",
        "gameplay_info": {
            "usage": [
                "Cost: 60 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": [
                "Banish",
                "Void"
            ]
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Tantra use this to manipulate offense.",
            "evolution": "Potential evolution: Cost Inflation"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 76,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_016",
        "name": "Void Trap",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "VOID",
            "BANISH"
        ],
        "stats": {
            "cooldown": 2,
            "cost": 35,
            "damage": 51
        },
        "description": "** Place a latent trap on an enemy. The next time they gain a resource (Prana, Insight, etc.), you steal 50% of it. Applies 2 [Void].\r\n    *   **Evo A (Hungering Void):** You steal 75% of the resources instead.\r\n    *   **Evo B (Resource Burn):** The enemy gains no resources, and you gain nothing. The resources are simply destroyed.\r\n\r\n17. **Yantra: The Null Field Generator** (Yantra, Gnosis 50)\r\n    *   **Core Function:** Deploys a Yantra with a passive aura: \"Buffs cannot be applied to any unit (friend or foe) in this Yantra's row.\"\r\n    *   **Resonance Link:** If linked with another Uchatan Yantra, the aura also prevents debuffs.\r\n    *   **Evo A (Expanded Null Field):** The aura affects the two adjacent rows as well.\r\n    *   **Evo B (Targeted Erasure):** The aura is disabled. Gains an activatable ability: \"Pay 3 Prana to [Banish] all buffs on a target unit.\"\r\n\r\n18. **Samputa: Shunya → Shunya → Shunya** (Ultimate)\r\n    *   **Core Function:** A Samputa triggered by loading three \"Shunya\" Bija into the Mantra Matrix.\r\n    *   **Effect (Absolute Nothingness):** For 2 turns, no player can gain new buffs, debuffs, or resources. All existing timed effects are paused.\r\n    *   *Design Note: The ultimate stall and reset button.*",
        "lore_quote": "\"A technique from the Tantra engine.\"",
        "tactical_brief": "Utilizes Tantra mechanics. Void, Banish.",
        "mastery_perk": "Mastery Lvl 5: (Hungering Void): You steal 75% of the resources instead.\r\n    *   Evo B (Resource Burn): The enemy gains no resources, and you gain nothing. The resources are simply destroyed.\r\n\r\n17. Yantra: The Null Field Generator (Yantra, Gnosis 50)\r\n    *   Core Function: Deploys a Yantra with a passive aura: \"Buffs cannot be applied to any unit (friend or foe) in this Yantra's row.\"\r\n    *   Resonance Link: If linked with another Uchatan Yantra, the aura also prevents debuffs.\r\n    *   Evo A (Expanded Null Field): The aura affects the two adjacent rows as well.\r\n    *   Evo B (Targeted Erasure): The aura is disabled. Gains an activatable ability: \"Pay 3 Prana to [Banish] all buffs on a target unit.\"\r\n\r\n18. Samputa: Shunya → Shunya → Shunya (Ultimate)\r\n    *   Core Function: A Samputa triggered by loading three \"Shunya\" Bija into the Mantra Matrix.\r\n    *   Effect (Absolute Nothingness): For 2 turns, no player can gain new buffs, debuffs, or resources. All existing timed effects are paused.\r\n    *   *Design Note: The ultimate stall and reset button.*",
        "gameplay_info": {
            "usage": [
                "Cost: 35 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": [
                "Void",
                "Banish"
            ]
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Tantra use this to manipulate offense.",
            "evolution": "Potential evolution: Resource Burn"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 51,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_019",
        "name": "Dissonant Barrier",
        "type": "ACTIVE",
        "tier": "COMMON",
        "tags": [
            "SILENCED",
            "DISCORD",
            "SILENCE"
        ],
        "stats": {
            "cooldown": 2,
            "cost": 30,
            "damage": 32
        },
        "description": "** Gain a shield that absorbs 15 damage. If the shield is broken by an attack, the attacker is [Silenced] for 1 turn. Applies 1 [Discord].\r\n    * **Evo A (Feedback Pulse):** When broken, also deals 10 damage to the attacker.\r\n    * **Evo B (Resonant Shield):** The shield absorbs 25 damage but the [Silence] does not apply.",
        "lore_quote": "\"A technique from the Tantra engine.\"",
        "tactical_brief": "Utilizes Tantra mechanics. Silenced, Discord, Silence.",
        "mastery_perk": "Mastery Lvl 5: (Feedback Pulse): When broken, also deals 10 damage to the attacker.\r\n    * Evo B (Resonant Shield): The shield absorbs 25 damage but the [Silence] does not apply.",
        "gameplay_info": {
            "usage": [
                "Cost: 30 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": [
                "Silenced",
                "Discord",
                "Silence"
            ]
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Tantra use this to manipulate offense.",
            "evolution": "Potential evolution: Resonant Shield"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 32,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_020",
        "name": "Stasis Web",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "STASIS"
        ],
        "stats": {
            "cooldown": 2,
            "cost": 40,
            "damage": 50
        },
        "description": "** Apply 2 stacks of [Stasis] to all enemies in a target column.\r\n    * **Evo A (Widened Web):** Affects two adjacent columns.\r\n    * **Evo B (Sticky Web):** Also applies a debuff that reduces movement speed by 50% for 2 turns.\r\n\r\n---\r\n\r\n### Additional Skills (21–40)\r\n\r\n#### **Maran (Annihilation) — 4 More**",
        "lore_quote": "\"A technique from the Tantra engine.\"",
        "tactical_brief": "Utilizes Tantra mechanics. Stasis.",
        "mastery_perk": "Mastery Lvl 5: (Widened Web): Affects two adjacent columns.\r\n    * Evo B (Sticky Web): Also applies a debuff that reduces movement speed by 50% for 2 turns.\r\n\r\n---\r\n\r\n### Additional Skills (21–40)\r\n\r\n#### Maran (Annihilation) — 4 More",
        "gameplay_info": {
            "usage": [
                "Cost: 40 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": [
                "Stasis"
            ]
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Tantra use this to manipulate offense.",
            "evolution": "Potential evolution: Sticky Web"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 50,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_021",
        "name": "Ashen Vortex",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "BURN",
            "DECAY"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 45,
            "damage": 53
        },
        "description": "** Create a 3x3 vortex for 2 turns: Enemies inside take 6 [Burn] damage at the start of their turn; if they move, apply 1 [Decay].\r\n    * **Evo A (Expanding Vortex):** Radius increases to 5x5.\r\n    * **Evo B (Smoldering Wake):** The zone persists 1 extra turn at half potency.",
        "lore_quote": "\"A technique from the Tantra engine.\"",
        "tactical_brief": "Utilizes Tantra mechanics. Burn, Decay.",
        "mastery_perk": "Mastery Lvl 5: (Expanding Vortex): Radius increases to 5x5.\r\n    * Evo B (Smoldering Wake): The zone persists 1 extra turn at half potency.",
        "gameplay_info": {
            "usage": [
                "Cost: 45 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Burn",
                "Decay"
            ]
        },
        "deep_data": {
            "environment": "Resonates with dot, offense.",
            "narrative": "Practitioners of Tantra use this to manipulate dot.",
            "evolution": "Potential evolution: Smoldering Wake"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 53,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_022",
        "name": "Thermal Overrun",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "BURN",
            "BURN",
            "DECAY"
        ],
        "stats": {
            "cooldown": 2,
            "cost": 40,
            "damage": 54
        },
        "description": "** Consume up to 3 [Burn] stacks from each enemy; extend remaining [Burn]/[Decay] durations by 1 turn and deal 5 damage per stack consumed.\r\n    * **Evo A (Accelerant):** +2 turns instead of +1.\r\n    * **Evo B (Scorch Surge):** Immediate damage becomes 8 per stack consumed.",
        "lore_quote": "\"A technique from the Tantra engine.\"",
        "tactical_brief": "Utilizes Tantra mechanics. Burn, Burn, Decay.",
        "mastery_perk": "Mastery Lvl 5: (Accelerant): +2 turns instead of +1.\r\n    * Evo B (Scorch Surge): Immediate damage becomes 8 per stack consumed.",
        "gameplay_info": {
            "usage": [
                "Cost: 40 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": [
                "Burn",
                "Burn",
                "Decay"
            ]
        },
        "deep_data": {
            "environment": "Resonates with dot, offense.",
            "narrative": "Practitioners of Tantra use this to manipulate dot.",
            "evolution": "Potential evolution: Scorch Surge"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 54,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_023",
        "name": "Ember Reprise",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "DECAY",
            "BURN",
            "DECAY",
            "DECAY",
            "DECAY",
            "DECAY"
        ],
        "stats": {
            "cooldown": 2,
            "cost": 35,
            "damage": 59
        },
        "description": "** For the next 2 turns, the first time you detonate [Decay], repeat 50% of that detonation damage at end of turn.\r\n    * **Evo A (Full Refrain):** Echo repeats 100% instead of 50%.\r\n    * **Evo B (Lingering Cinders):** Each echo applies 1 [Burn].\r\n\r\n24. **Yantra: Pyre Nexus** (Yantra, Gnosis 45)\r\n    * **Core Function:** At end of your turn, deal 4 damage per [Decay] stack on the nearest enemy.\r\n    * **Resonance Link:** Linked Maran Yantras cause Pyre Nexus to also apply 1 [Decay].\r\n    * **Evo A (Inferno Conduit):** Damage +50% if enemy has ≥3 [Decay].\r\n    * **Evo B (Volcanic Vent):** Can be activated to detonate all [Decay] on the board for half value (2-turn cooldown).\r\n\r\n#### **Vashikaran (Subjugation) — 4 More**",
        "lore_quote": "\"A technique from the Tantra engine.\"",
        "tactical_brief": "Utilizes Tantra mechanics. Decay, Burn, Decay, Decay, Decay, Decay.",
        "mastery_perk": "Mastery Lvl 5: (Full Refrain): Echo repeats 100% instead of 50%.\r\n    * Evo B (Lingering Cinders): Each echo applies 1 [Burn].\r\n\r\n24. Yantra: Pyre Nexus (Yantra, Gnosis 45)\r\n    * Core Function: At end of your turn, deal 4 damage per [Decay] stack on the nearest enemy.\r\n    * Resonance Link: Linked Maran Yantras cause Pyre Nexus to also apply 1 [Decay].\r\n    * Evo A (Inferno Conduit): Damage +50% if enemy has ≥3 [Decay].\r\n    * Evo B (Volcanic Vent): Can be activated to detonate all [Decay] on the board for half value (2-turn cooldown).\r\n\r\n#### Vashikaran (Subjugation) — 4 More",
        "gameplay_info": {
            "usage": [
                "Cost: 35 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": [
                "Decay",
                "Burn",
                "Decay",
                "Decay",
                "Decay",
                "Decay"
            ]
        },
        "deep_data": {
            "environment": "Resonates with dot, offense.",
            "narrative": "Practitioners of Tantra use this to manipulate dot.",
            "evolution": "Potential evolution: Lingering Cinders"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 59,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_025",
        "name": "Command Override",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "SUBSERVIENCE"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 45,
            "damage": 51
        },
        "description": "** Force an enemy Architect to repeat their last non-Invocation glyph this turn; you choose a valid allied target for it. Consumes 3 [Subservience].\r\n    * **Evo A (Double Override):** Repeat twice on the same turn (new targets).\r\n    * **Evo B (Hijacked Focus):** The repeated glyph costs the enemy +2 Prana.",
        "lore_quote": "\"A technique from the Tantra engine.\"",
        "tactical_brief": "Utilizes Tantra mechanics. Subservience.",
        "mastery_perk": "Mastery Lvl 5: (Double Override): Repeat twice on the same turn (new targets).\r\n    * Evo B (Hijacked Focus): The repeated glyph costs the enemy +2 Prana.",
        "gameplay_info": {
            "usage": [
                "Cost: 45 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Subservience"
            ]
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Tantra use this to manipulate offense.",
            "evolution": "Potential evolution: Hijacked Focus"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 51,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_026",
        "name": "Covenant Chain",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "SUBSERVIENCE",
            "SUBSERVIENCE"
        ],
        "stats": {
            "cooldown": 2,
            "cost": 40,
            "damage": 52
        },
        "description": "** For 2 turns, whenever the enemy casts a self-buff, you choose whether it applies to them or to you instead. Applies 2 [Subservience].\r\n    * **Evo A (Binding Oath):** Duration +1 turn.\r\n    * **Evo B (Forfeit):** If redirected to you, enemy loses 5 Ojas.\r\n\r\n27. **Mantra: Vashi (The Enchanter)** (Chant, Gnosis 20)\r\n    * **Bija Passive:** Your debuffs that apply [Subservience] have +1 stack.\r\n    * **Stuti (Vashi + Mohanam):** \"Seize Blessing\" — Next time enemy casts a buff, you gain a copied version with +50% duration.",
        "lore_quote": "\"A technique from the Tantra engine.\"",
        "tactical_brief": "Utilizes Tantra mechanics. Subservience, Subservience.",
        "mastery_perk": "Mastery Lvl 5: (Binding Oath): Duration +1 turn.\r\n    * Evo B (Forfeit): If redirected to you, enemy loses 5 Ojas.\r\n\r\n27. Mantra: Vashi (The Enchanter) (Chant, Gnosis 20)\r\n    * Bija Passive: Your debuffs that apply [Subservience] have +1 stack.\r\n    * Stuti (Vashi + Mohanam): \"Seize Blessing\" — Next time enemy casts a buff, you gain a copied version with +50% duration.",
        "gameplay_info": {
            "usage": [
                "Cost: 40 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": [
                "Subservience",
                "Subservience"
            ]
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Tantra use this to manipulate offense.",
            "evolution": "Potential evolution: Forfeit"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 52,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_028",
        "name": "Dominion Lattice",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "SUBSERVIENCE"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 50,
            "damage": 52
        },
        "description": "** Link a target Architect for 2 turns: their first glyph each turn can be redirected by you (once). Applies 3 [Subservience].\r\n    * **Evo A (Tighten Lattice):** Redirect twice per turn.\r\n    * **Evo B (Price of Service):** Each redirected glyph costs them +2 Prana and +1 cooldown.\r\n\r\n#### **Stambhan (Paralysis) — 4 More**",
        "lore_quote": "\"A technique from the Tantra engine.\"",
        "tactical_brief": "Utilizes Tantra mechanics. Subservience.",
        "mastery_perk": "Mastery Lvl 5: (Tighten Lattice): Redirect twice per turn.\r\n    * Evo B (Price of Service): Each redirected glyph costs them +2 Prana and +1 cooldown.\r\n\r\n#### Stambhan (Paralysis) — 4 More",
        "gameplay_info": {
            "usage": [
                "Cost: 50 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Subservience"
            ]
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Tantra use this to manipulate undefined.",
            "evolution": "Potential evolution: Price of Service"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 52,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_029",
        "name": "Glacial Hour",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [
            "STASIS"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 55,
            "damage": 73
        },
        "description": "** For 2 turns, global cooldown ticks are 50% slower (rounding up). Applies 1 [Stasis] to all enemy glyphs on cast.\r\n    * **Evo A (Permafrost):** 3 turns instead of 2.\r\n    * **Evo B (Selective Freeze):** Your glyphs are unaffected.",
        "lore_quote": "\"A technique from the Tantra engine.\"",
        "tactical_brief": "Utilizes Tantra mechanics. Stasis.",
        "mastery_perk": "Mastery Lvl 5: (Permafrost): 3 turns instead of 2.\r\n    * Evo B (Selective Freeze): Your glyphs are unaffected.",
        "gameplay_info": {
            "usage": [
                "Cost: 55 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Stasis"
            ]
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Tantra use this to manipulate offense.",
            "evolution": "Potential evolution: Selective Freeze"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 73,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_030",
        "name": "Time Snare",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "STUN",
            "STASIS",
            "STUN",
            "STASIS"
        ],
        "stats": {
            "cooldown": 2,
            "cost": 35,
            "damage": 55
        },
        "description": "** Place a snare on an enemy Glyph: the next time its cooldown decreases, [Stun] its owner for 1 turn and apply 2 [Stasis].\r\n    * **Evo A (Chrono Clamp):** Also increase that glyph's cooldown by 1.\r\n    * **Evo B (Numbing Shock):** The [Stun] lasts 2 turns if cooldown was ≥3.\r\n\r\n31. **Yantra: Iron Lattice** (Yantra, Gnosis 40)\r\n    * **Core Function:** First enemy glyph cast each turn gets +1 cooldown after resolving.\r\n    * **Resonance Link:** With another Stambhan Yantra, this applies to the first two glyphs.\r\n    * **Evo A (Hardened Bars):** +2 cooldown instead of +1.\r\n    * **Evo B (Gelling Field):** Also applies 1 [Stasis] to that glyph.",
        "lore_quote": "\"A technique from the Tantra engine.\"",
        "tactical_brief": "Utilizes Tantra mechanics. Stun, Stasis, Stun, Stasis.",
        "mastery_perk": "Mastery Lvl 5: (Chrono Clamp): Also increase that glyph's cooldown by 1.\r\n    * Evo B (Numbing Shock): The [Stun] lasts 2 turns if cooldown was ≥3.\r\n\r\n31. Yantra: Iron Lattice (Yantra, Gnosis 40)\r\n    * Core Function: First enemy glyph cast each turn gets +1 cooldown after resolving.\r\n    * Resonance Link: With another Stambhan Yantra, this applies to the first two glyphs.\r\n    * Evo A (Hardened Bars): +2 cooldown instead of +1.\r\n    * Evo B (Gelling Field): Also applies 1 [Stasis] to that glyph.",
        "gameplay_info": {
            "usage": [
                "Cost: 35 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": [
                "Stun",
                "Stasis",
                "Stun",
                "Stasis"
            ]
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Tantra use this to manipulate offense.",
            "evolution": "Potential evolution: Numbing Shock"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 55,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_032",
        "name": "Deferred Silence",
        "type": "ACTIVE",
        "tier": "COMMON",
        "tags": [
            "SILENCE",
            "STASIS"
        ],
        "stats": {
            "cooldown": 2,
            "cost": 30,
            "damage": 30
        },
        "description": "** Apply a floating [Silence] to an enemy Glyph; it triggers the next time they attempt to cast it within 2 turns. Applies 2 [Stasis].\r\n    * **Evo A (Quietus):** Duration window 3 turns.\r\n    * **Evo B (Muzzled Echo):** When it triggers, also increases cooldown by 2.\r\n\r\n#### **Vidveshan (Discord) — 4 More**",
        "lore_quote": "\"A technique from the Tantra engine.\"",
        "tactical_brief": "Utilizes Tantra mechanics. Silence, Stasis.",
        "mastery_perk": "Mastery Lvl 5: (Quietus): Duration window 3 turns.\r\n    * Evo B (Muzzled Echo): When it triggers, also increases cooldown by 2.\r\n\r\n#### Vidveshan (Discord) — 4 More",
        "gameplay_info": {
            "usage": [
                "Cost: 30 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": [
                "Silence",
                "Stasis"
            ]
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Tantra use this to manipulate offense.",
            "evolution": "Potential evolution: Muzzled Echo"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 30,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_033",
        "name": "Mirror Fracture",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "DISCORD"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 45,
            "damage": 51
        },
        "description": "** The next positive effect on the target becomes negative (heal → damage, buff → debuff of equal potency). Applies 2 [Discord].\r\n    * **Evo A (Shattered Boon):** Inversion potency +25%.\r\n    * **Evo B (Reverberation):** Applies to the next two positive effects instead of one.",
        "lore_quote": "\"A technique from the Tantra engine.\"",
        "tactical_brief": "Utilizes Tantra mechanics. Discord.",
        "mastery_perk": "Mastery Lvl 5: (Shattered Boon): Inversion potency +25%.\r\n    * Evo B (Reverberation): Applies to the next two positive effects instead of one.",
        "gameplay_info": {
            "usage": [
                "Cost: 45 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Discord"
            ]
        },
        "deep_data": {
            "environment": "Resonates with offense, healing.",
            "narrative": "Practitioners of Tantra use this to manipulate offense.",
            "evolution": "Potential evolution: Reverberation"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 51,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_034",
        "name": "Counter-Harmony Field",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "DISCORD"
        ],
        "stats": {
            "cooldown": 2,
            "cost": 40,
            "damage": 50
        },
        "description": "** Create a field for 2 turns: enemy buffs inside have -50% potency and cost +1 Prana.\r\n    * **Evo A (Dissonant Dome):** Field lasts 3 turns.\r\n    * **Evo B (Cacophony):** On cast inside the field, apply 1 [Discord] to the caster.",
        "lore_quote": "\"A technique from the Tantra engine.\"",
        "tactical_brief": "Utilizes Tantra mechanics. Discord.",
        "mastery_perk": "Mastery Lvl 5: (Dissonant Dome): Field lasts 3 turns.\r\n    * Evo B (Cacophony): On cast inside the field, apply 1 [Discord] to the caster.",
        "gameplay_info": {
            "usage": [
                "Cost: 40 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": [
                "Discord"
            ]
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Tantra use this to manipulate offense.",
            "evolution": "Potential evolution: Cacophony"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 50,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_035",
        "name": "Discordant Reverb",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "DISCORD",
            "DISCORD"
        ],
        "stats": {
            "cooldown": 2,
            "cost": 35,
            "damage": 51
        },
        "description": "** For 2 turns, whenever an enemy buff expires, deal 10 damage and apply 1 [Discord].\r\n    * **Evo A (Splinter Shock):** Damage 15 instead.\r\n    * **Evo B (Resounding Dissonance):** Also increase the expired glyph's cooldown by 1.\r\n\r\n36. **Yantra: Splinter Node** (Yantra, Gnosis 45)\r\n    * **Core Function:** Once per turn, an enemy aura randomly affects their allies for 1 instance.\r\n    * **Resonance Link:** With another Vidveshan Yantra, you choose the target ally.\r\n    * **Evo A (Chaotic Feedback):** Also applies 1 [Discord] to both source and target.\r\n    * **Evo B (Shiver Web):** Trigger twice per turn.\r\n\r\n#### **Uchatan (Banishment) — 4 More**",
        "lore_quote": "\"A technique from the Tantra engine.\"",
        "tactical_brief": "Utilizes Tantra mechanics. Discord, Discord.",
        "mastery_perk": "Mastery Lvl 5: (Splinter Shock): Damage 15 instead.\r\n    * Evo B (Resounding Dissonance): Also increase the expired glyph's cooldown by 1.\r\n\r\n36. Yantra: Splinter Node (Yantra, Gnosis 45)\r\n    * Core Function: Once per turn, an enemy aura randomly affects their allies for 1 instance.\r\n    * Resonance Link: With another Vidveshan Yantra, you choose the target ally.\r\n    * Evo A (Chaotic Feedback): Also applies 1 [Discord] to both source and target.\r\n    * Evo B (Shiver Web): Trigger twice per turn.\r\n\r\n#### Uchatan (Banishment) — 4 More",
        "gameplay_info": {
            "usage": [
                "Cost: 35 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": [
                "Discord",
                "Discord"
            ]
        },
        "deep_data": {
            "environment": "Resonates with support, offense.",
            "narrative": "Practitioners of Tantra use this to manipulate support.",
            "evolution": "Potential evolution: Resounding Dissonance"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 51,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_037",
        "name": "Void Ledger",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "VOID"
        ],
        "stats": {
            "cooldown": 2,
            "cost": 40,
            "damage": 50
        },
        "description": "** For 3 turns, at the start of the enemy turn, they lose 1 resource they would have generated (Prana/Insight/Threads prioritized), and you gain 1 Prana. Applies 1 [Void].\r\n    * **Evo A (Audited Scarcity):** Lose 2 resources instead of 1 (still gain 1 Prana).\r\n    * **Evo B (Silent Books):** Prevents resource-gain triggers from showing in UI (cosmetic stealth).",
        "lore_quote": "\"A technique from the Tantra engine.\"",
        "tactical_brief": "Utilizes Tantra mechanics. Void.",
        "mastery_perk": "Mastery Lvl 5: (Audited Scarcity): Lose 2 resources instead of 1 (still gain 1 Prana).\r\n    * Evo B (Silent Books): Prevents resource-gain triggers from showing in UI (cosmetic stealth).",
        "gameplay_info": {
            "usage": [
                "Cost: 40 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": [
                "Void"
            ]
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Tantra use this to manipulate offense.",
            "evolution": "Potential evolution: Silent Books"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 50,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_038",
        "name": "Banishment Well",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "BANISHED",
            "VOID"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 50,
            "damage": 54
        },
        "description": "** Choose an enemy House. The next buff or Yantra applied to that House this duel is immediately [Banished] for 2 turns. Applies 2 [Void].\r\n    * **Evo A (Deep Well):** Banish duration 3 turns.\r\n    * **Evo B (Bottomless):** Triggers twice this duel.",
        "lore_quote": "\"A technique from the Tantra engine.\"",
        "tactical_brief": "Utilizes Tantra mechanics. Banished, Void.",
        "mastery_perk": "Mastery Lvl 5: (Deep Well): Banish duration 3 turns.\r\n    * Evo B (Bottomless): Triggers twice this duel.",
        "gameplay_info": {
            "usage": [
                "Cost: 50 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Banished",
                "Void"
            ]
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Tantra use this to manipulate offense.",
            "evolution": "Potential evolution: Bottomless"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 54,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_039",
        "name": "Null Recall",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "BANISHED",
            "VOID",
            "VOID",
            "HEAL BLOCK",
            "BANISH"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 45,
            "damage": 59
        },
        "description": "** If a glyph was [Banished] this duel, it cannot be cast for 1 additional turn after returning. Applies 2 [Void].\r\n    * **Evo A (Total Forgetting):** Lockout becomes 2 turns.\r\n    * **Evo B (Fraying Memory):** The glyph's effectiveness is -25% for the rest of the duel.\r\n\r\n40. **Mantra: Nist'ya (The Nil)** (Chant, Gnosis 20)\r\n    * **Bija Passive:** Your [Void] applications have a 15% chance to also apply a 1-turn [Heal Block].\r\n    * **Stuti (Nist'ya + Shunya):** \"Eventide Exile\" — Instantly [Banish] all temporary buffs on a target and refund 1 Prana per effect removed.\r\n\r\n---\r\n\r\n### **KARMA SPECIALIZATIONS — 15 Skills**",
        "lore_quote": "\"A technique from the Tantra engine.\"",
        "tactical_brief": "Utilizes Tantra mechanics. Banished, Void, Void, Heal Block, Banish.",
        "mastery_perk": "Mastery Lvl 5: (Total Forgetting): Lockout becomes 2 turns.\r\n    * Evo B (Fraying Memory): The glyph's effectiveness is -25% for the rest of the duel.\r\n\r\n40. Mantra: Nist'ya (The Nil) (Chant, Gnosis 20)\r\n    * Bija Passive: Your [Void] applications have a 15% chance to also apply a 1-turn [Heal Block].\r\n    * Stuti (Nist'ya + Shunya): \"Eventide Exile\" — Instantly [Banish] all temporary buffs on a target and refund 1 Prana per effect removed.\r\n\r\n---\r\n\r\n### KARMA SPECIALIZATIONS — 15 Skills",
        "gameplay_info": {
            "usage": [
                "Cost: 45 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Banished",
                "Void",
                "Void",
                "Heal Block",
                "Banish"
            ]
        },
        "deep_data": {
            "environment": "Resonates with healing.",
            "narrative": "Practitioners of Tantra use this to manipulate healing.",
            "evolution": "Potential evolution: Fraying Memory"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 59,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_041",
        "name": "Maran Purist",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "BURN",
            "DECAY",
            "DECAY",
            "BURN",
            "DECAY"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 50,
            "damage": 60
        },
        "description": "** Cannot use other Karma paths. All [Burn] and [Decay] effects +100%. [Decay] stacks infinitely.\r\n    * **Evo A (Perfect Annihilation):** +150% effects instead.\r\n    * **Evo B (Rapid Burn):** [Burn] and [Decay] tick twice per turn.\r\n    * **Note:** *Pure damage-over-time specialist. Mono-karma build.*",
        "lore_quote": "** *Pure damage-over-time specialist. Mono-karma build.*",
        "tactical_brief": "Utilizes Tantra mechanics. Burn, Decay, Decay, Burn, Decay.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Annihilation): +150% effects instead.\r\n    * Evo B (Rapid Burn): [Burn] and [Decay] tick twice per turn.\r\n    * Note: *Pure damage-over-time specialist. Mono-karma build.*",
        "gameplay_info": {
            "usage": [
                "Cost: 50 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Burn",
                "Decay",
                "Decay",
                "Burn",
                "Decay"
            ]
        },
        "deep_data": {
            "environment": "Resonates with dot, offense.",
            "narrative": "Practitioners of Tantra use this to manipulate dot.",
            "evolution": "Potential evolution: Rapid Burn"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 60,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_042",
        "name": "Vashikaran Purist",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "SUBSERVIENCE",
            "SUBSERVIENCE"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 50,
            "damage": 54
        },
        "description": "** Cannot use other Karma paths. All [Subservience] effects +75%. Can redirect 2 enemy actions per turn.\r\n    * **Evo A (Perfect Control):** Can redirect 3 actions.\r\n    * **Evo B (Puppet Master):** [Subservience] stacks last +2 turns.\r\n    * **Note:** *Pure control/theft specialist. Master manipulator.*",
        "lore_quote": "** *Pure control/theft specialist. Master manipulator.*",
        "tactical_brief": "Utilizes Tantra mechanics. Subservience, Subservience.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Control): Can redirect 3 actions.\r\n    * Evo B (Puppet Master): [Subservience] stacks last +2 turns.\r\n    * Note: *Pure control/theft specialist. Master manipulator.*",
        "gameplay_info": {
            "usage": [
                "Cost: 50 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Subservience",
                "Subservience"
            ]
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Tantra use this to manipulate offense.",
            "evolution": "Potential evolution: Puppet Master"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 54,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_043",
        "name": "Stambhan Purist",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "STASIS",
            "STUN",
            "STUN"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 50,
            "damage": 56
        },
        "description": "** Cannot use other Karma paths. All [Stasis] and [Stun] effects +100%. Enemy cooldowns tick 50% slower.\r\n    * **Evo A (Perfect Paralysis):** [Stun] duration doubled.\r\n    * **Evo B (Time Freeze):** Cooldowns tick 75% slower.\r\n    * **Note:** *Pure tempo control. Freeze time itself.*",
        "lore_quote": "** *Pure tempo control. Freeze time itself.*",
        "tactical_brief": "Utilizes Tantra mechanics. Stasis, Stun, Stun.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Paralysis): [Stun] duration doubled.\r\n    * Evo B (Time Freeze): Cooldowns tick 75% slower.\r\n    * Note: *Pure tempo control. Freeze time itself.*",
        "gameplay_info": {
            "usage": [
                "Cost: 50 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Stasis",
                "Stun",
                "Stun"
            ]
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Tantra use this to manipulate offense.",
            "evolution": "Potential evolution: Time Freeze"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 56,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_044",
        "name": "Vidveshan Purist",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "DISCORD",
            "DISCORD"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 50,
            "damage": 54
        },
        "description": "** Cannot use other Karma paths. All [Discord] effects +75%. Enemy beneficial effects have 50% chance to fail.\r\n    * **Evo A (Perfect Discord):** 75% failure chance.\r\n    * **Evo B (Chaos Amplifier):** [Discord] also reduces enemy accuracy by 25%.\r\n    * **Note:** *Pure disruption specialist. Chaos incarnate.*",
        "lore_quote": "** *Pure disruption specialist. Chaos incarnate.*",
        "tactical_brief": "Utilizes Tantra mechanics. Discord, Discord.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Discord): 75% failure chance.\r\n    * Evo B (Chaos Amplifier): [Discord] also reduces enemy accuracy by 25%.\r\n    * Note: *Pure disruption specialist. Chaos incarnate.*",
        "gameplay_info": {
            "usage": [
                "Cost: 50 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Discord",
                "Discord"
            ]
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Tantra use this to manipulate offense.",
            "evolution": "Potential evolution: Chaos Amplifier"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 54,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_045",
        "name": "Uchatan Purist",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "VOID",
            "BANISH",
            "BANISH",
            "BANISH",
            "VOID"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 50,
            "damage": 60
        },
        "description": "** Cannot use other Karma paths. All [Void] and [Banish] effects +100%. Can [Banish] 3 effects simultaneously.\r\n    * **Evo A (Perfect Nullification):** [Banish] duration doubled.\r\n    * **Evo B (Void Master):** [Void] prevents resource generation entirely.\r\n    * **Note:** *Pure denial specialist. Erase everything.*",
        "lore_quote": "** *Pure denial specialist. Erase everything.*",
        "tactical_brief": "Utilizes Tantra mechanics. Void, Banish, Banish, Banish, Void.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Nullification): [Banish] duration doubled.\r\n    * Evo B (Void Master): [Void] prevents resource generation entirely.\r\n    * Note: *Pure denial specialist. Erase everything.*",
        "gameplay_info": {
            "usage": [
                "Cost: 50 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Void",
                "Banish",
                "Banish",
                "Banish",
                "Void"
            ]
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Tantra use this to manipulate undefined.",
            "evolution": "Potential evolution: Void Master"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 60,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_046",
        "name": "Dual Karma Harmony",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 55,
            "damage": 71
        },
        "description": "** Choose 2 Karma paths at start. Can only use those 2, but transitions between them are free and grant +5 Prana.\r\n    * **Evo A (Perfect Harmony):** Gain +8 Prana per transition.\r\n    * **Evo B (Deep Synergy):** Effects from both paths have +25% potency.\r\n    * **Note:** *Restricts options but perfects two-path synergy.*",
        "lore_quote": "** *Restricts options but perfects two-path synergy.*",
        "tactical_brief": "Utilizes Tantra mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Harmony): Gain +8 Prana per transition.\r\n    * Evo B (Deep Synergy): Effects from both paths have +25% potency.\r\n    * Note: *Restricts options but perfects two-path synergy.*",
        "gameplay_info": {
            "usage": [
                "Cost: 55 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Tantra use this to manipulate undefined.",
            "evolution": "Potential evolution: Deep Synergy"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 71,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_047",
        "name": "Karma Anarchist",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [],
        "stats": {
            "cooldown": 4,
            "cost": 60,
            "damage": 72
        },
        "description": "** Cannot specialize. Each time you use a different Karma path, deal 15 damage to all enemies and apply 1 random Resonance.\r\n    * **Evo A (Perfect Anarchy):** Damage increased to 25.\r\n    * **Evo B (Controlled Chaos):** Choose which Resonance to apply.\r\n    * **Note:** *Hyper-aggressive Karma switching vs specialization.*",
        "lore_quote": "** *Hyper-aggressive Karma switching vs specialization.*",
        "tactical_brief": "Utilizes Tantra mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Anarchy): Damage increased to 25.\r\n    * Evo B (Controlled Chaos): Choose which Resonance to apply.\r\n    * Note: *Hyper-aggressive Karma switching vs specialization.*",
        "gameplay_info": {
            "usage": [
                "Cost: 60 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Tantra use this to manipulate offense.",
            "evolution": "Potential evolution: Controlled Chaos"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 72,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_048",
        "name": "Resonance Collector",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 50,
            "damage": 50
        },
        "description": "** Passive: Gain +1 Prana per unique Resonance type active on enemies (up to +5).\r\n    * **Evo A (Perfect Collection):** +2 Prana per type.\r\n    * **Evo B (Resonance Bonus):** Also increase all Resonance damage by 10%.\r\n    * **Note:** *Rewards spreading different Resonances. Tactical diversity.*",
        "lore_quote": "** *Rewards spreading different Resonances. Tactical diversity.*",
        "tactical_brief": "Utilizes Tantra mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Collection): +2 Prana per type.\r\n    * Evo B (Resonance Bonus): Also increase all Resonance damage by 10%.\r\n    * Note: *Rewards spreading different Resonances. Tactical diversity.*",
        "gameplay_info": {
            "usage": [
                "Cost: 50 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Tantra use this to manipulate offense.",
            "evolution": "Potential evolution: Resonance Bonus"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 50,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_049",
        "name": "Resonance Purge",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 45,
            "damage": 49
        },
        "description": "** Remove all Resonances from target. Deal 20 damage per Resonance removed.\r\n    * **Evo A (Perfect Purge):** 35 damage per Resonance.\r\n    * **Evo B (Mass Purge):** Affects all enemies.\r\n    * **Note:** *Counter to Resonance stacking. Anti-Tantra specialist.*",
        "lore_quote": "** *Counter to Resonance stacking. Anti-Tantra specialist.*",
        "tactical_brief": "Utilizes Tantra mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Purge): 35 damage per Resonance.\r\n    * Evo B (Mass Purge): Affects all enemies.\r\n    * Note: *Counter to Resonance stacking. Anti-Tantra specialist.*",
        "gameplay_info": {
            "usage": [
                "Cost: 45 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Tantra use this to manipulate offense.",
            "evolution": "Potential evolution: Mass Purge"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 49,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_050",
        "name": "Resonance Transfer",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 45,
            "damage": 49
        },
        "description": "** Move all Resonances from one target to another. Transferred Resonances +1 turn duration.\r\n    * **Evo A (Perfect Transfer):** +2 turns duration.\r\n    * **Evo B (Mass Transfer):** Can transfer from 2 targets to 2 targets.\r\n    * **Note:** *Dynamic Resonance management. Save allies, doom enemies.*",
        "lore_quote": "** *Dynamic Resonance management. Save allies, doom enemies.*",
        "tactical_brief": "Utilizes Tantra mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Transfer): +2 turns duration.\r\n    * Evo B (Mass Transfer): Can transfer from 2 targets to 2 targets.\r\n    * Note: *Dynamic Resonance management. Save allies, doom enemies.*",
        "gameplay_info": {
            "usage": [
                "Cost: 45 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with support, offense.",
            "narrative": "Practitioners of Tantra use this to manipulate support.",
            "evolution": "Potential evolution: Mass Transfer"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 49,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_051",
        "name": "Karma Sacrifice",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [],
        "stats": {
            "cooldown": 4,
            "cost": 60,
            "damage": 72
        },
        "description": "** Choose one Karma path. For rest of duel, that path +200% potency but you lose all other Karma access.\r\n    * **Evo A (Perfect Sacrifice):** +300% potency.\r\n    * **Evo B (Tolerable Sacrifice):** Can still use one other Karma path at 50% potency.\r\n    * **Note:** *Mid-duel specialization. Adaptation vs commitment.*",
        "lore_quote": "** *Mid-duel specialization. Adaptation vs commitment.*",
        "tactical_brief": "Utilizes Tantra mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Sacrifice): +300% potency.\r\n    * Evo B (Tolerable Sacrifice): Can still use one other Karma path at 50% potency.\r\n    * Note: *Mid-duel specialization. Adaptation vs commitment.*",
        "gameplay_info": {
            "usage": [
                "Cost: 60 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Tantra use this to manipulate undefined.",
            "evolution": "Potential evolution: Tolerable Sacrifice"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 72,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_052",
        "name": "Resonance Echo",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 55,
            "damage": 71
        },
        "description": "** When you apply Resonance, 50% chance to apply it twice.\r\n    * **Evo A (Perfect Echo):** 75% chance.\r\n    * **Evo B (Guaranteed Echo):** Always applies twice but at 75% duration.\r\n    * **Note:** *Resonance spam build. Volume vs precision.*",
        "lore_quote": "** *Resonance spam build. Volume vs precision.*",
        "tactical_brief": "Utilizes Tantra mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Echo): 75% chance.\r\n    * Evo B (Guaranteed Echo): Always applies twice but at 75% duration.\r\n    * Note: *Resonance spam build. Volume vs precision.*",
        "gameplay_info": {
            "usage": [
                "Cost: 55 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Tantra use this to manipulate undefined.",
            "evolution": "Potential evolution: Guaranteed Echo"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 71,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_053",
        "name": "Karma Overload",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [],
        "stats": {
            "cooldown": 4,
            "cost": 65,
            "damage": 73
        },
        "description": "** For 2 turns, all Karma effects trigger twice. Costs 30 Prana.\r\n    * **Evo A (Perfect Overload):** Duration 3 turns.\r\n    * **Evo B (Economic Overload):** Cost reduced to 25 Prana.\r\n    * **Note:** *Ultimate power spike. All-in moment.*",
        "lore_quote": "** *Ultimate power spike. All-in moment.*",
        "tactical_brief": "Utilizes Tantra mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Overload): Duration 3 turns.\r\n    * Evo B (Economic Overload): Cost reduced to 25 Prana.\r\n    * Note: *Ultimate power spike. All-in moment.*",
        "gameplay_info": {
            "usage": [
                "Cost: 65 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Tantra use this to manipulate undefined.",
            "evolution": "Potential evolution: Economic Overload"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 73,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_054",
        "name": "Resonance Conversion",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 50,
            "damage": 50
        },
        "description": "** Convert any Resonance type to any other type on target. Cooldown: 3 turns.\r\n    * **Evo A (Perfect Conversion):** Can convert 3 Resonances.\r\n    * **Evo B (Frequent Conversion):** Cooldown reduced to 2 turns.\r\n    * **Note:** *Ultimate flexibility. Adapt to any situation.*",
        "lore_quote": "** *Ultimate flexibility. Adapt to any situation.*",
        "tactical_brief": "Utilizes Tantra mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Conversion): Can convert 3 Resonances.\r\n    * Evo B (Frequent Conversion): Cooldown reduced to 2 turns.\r\n    * Note: *Ultimate flexibility. Adapt to any situation.*",
        "gameplay_info": {
            "usage": [
                "Cost: 50 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Tantra use this to manipulate undefined.",
            "evolution": "Potential evolution: Frequent Conversion"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 50,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_055",
        "name": "Karma Memory",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 55,
            "damage": 71
        },
        "description": "** Each unique Karma path used this duel permanently increases all Karma effects by 10% (stacks 5x).\r\n    * **Evo A (Perfect Memory):** +15% per path.\r\n    * **Evo B (Deep Memory):** No stack limit.\r\n    * **Note:** *Rewards exploration. Long-game scaling.*\r\n\r\n---\r\n\r\n### **BURN & DECAY SPECIALIZATIONS — 12 Skills**",
        "lore_quote": "** *Rewards exploration. Long-game scaling.*\r\n\r\n---\r\n\r\n### **BURN & DECAY SPECIALIZATIONS — 12 Skills**",
        "tactical_brief": "Utilizes Tantra mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Memory): +15% per path.\r\n    * Evo B (Deep Memory): No stack limit.\r\n    * Note: *Rewards exploration. Long-game scaling.*\r\n\r\n---\r\n\r\n### BURN & DECAY SPECIALIZATIONS — 12 Skills",
        "gameplay_info": {
            "usage": [
                "Cost: 55 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Tantra use this to manipulate undefined.",
            "evolution": "Potential evolution: Deep Memory"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 71,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_056",
        "name": "Burn Master",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "BURN",
            "BURN"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 45,
            "damage": 53
        },
        "description": "** [Burn] effects +75% damage. [Burn] spreads to adjacent enemies when applied.\r\n    * **Evo A (Perfect Burn):** +100% damage.\r\n    * **Evo B (Inferno Spread):** Spreads to all enemies in 3x3 area.\r\n    * **Note:** *Pure fire damage. AoE burn specialist.*",
        "lore_quote": "** *Pure fire damage. AoE burn specialist.*",
        "tactical_brief": "Utilizes Tantra mechanics. Burn, Burn.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Burn): +100% damage.\r\n    * Evo B (Inferno Spread): Spreads to all enemies in 3x3 area.\r\n    * Note: *Pure fire damage. AoE burn specialist.*",
        "gameplay_info": {
            "usage": [
                "Cost: 45 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Burn",
                "Burn"
            ]
        },
        "deep_data": {
            "environment": "Resonates with dot, offense.",
            "narrative": "Practitioners of Tantra use this to manipulate dot.",
            "evolution": "Potential evolution: Inferno Spread"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 53,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_057",
        "name": "Decay Master",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "DECAY",
            "DECAY"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 45,
            "damage": 53
        },
        "description": "** [Decay] stacks have no cap. For each 5 stacks on target, all [Decay] damage +25%.\r\n    * **Evo A (Perfect Decay):** Bonus every 4 stacks.\r\n    * **Evo B (Enhanced Decay):** +40% damage per threshold.\r\n    * **Note:** *Infinite stacking. Late-game monster.*",
        "lore_quote": "** *Infinite stacking. Late-game monster.*",
        "tactical_brief": "Utilizes Tantra mechanics. Decay, Decay.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Decay): Bonus every 4 stacks.\r\n    * Evo B (Enhanced Decay): +40% damage per threshold.\r\n    * Note: *Infinite stacking. Late-game monster.*",
        "gameplay_info": {
            "usage": [
                "Cost: 45 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Decay",
                "Decay"
            ]
        },
        "deep_data": {
            "environment": "Resonates with dot, offense.",
            "narrative": "Practitioners of Tantra use this to manipulate dot.",
            "evolution": "Potential evolution: Enhanced Decay"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 53,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_058",
        "name": "Rapid Burn",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "BURN"
        ],
        "stats": {
            "cooldown": 2,
            "cost": 40,
            "damage": 50
        },
        "description": "** [Burn] ticks twice per turn but has -30% damage per tick.\r\n    * **Evo A (Perfect Rapid):** Only -15% damage penalty.\r\n    * **Evo B (Intense Rapid):** No damage penalty but costs +2 Prana.\r\n    * **Note:** *Fast ticking vs slow burn. Different tempo.*",
        "lore_quote": "** *Fast ticking vs slow burn. Different tempo.*",
        "tactical_brief": "Utilizes Tantra mechanics. Burn.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Rapid): Only -15% damage penalty.\r\n    * Evo B (Intense Rapid): No damage penalty but costs +2 Prana.\r\n    * Note: *Fast ticking vs slow burn. Different tempo.*",
        "gameplay_info": {
            "usage": [
                "Cost: 40 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": [
                "Burn"
            ]
        },
        "deep_data": {
            "environment": "Resonates with dot, offense.",
            "narrative": "Practitioners of Tantra use this to manipulate dot.",
            "evolution": "Potential evolution: Intense Rapid"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 50,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_059",
        "name": "Slow Decay",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "DECAY"
        ],
        "stats": {
            "cooldown": 2,
            "cost": 40,
            "damage": 50
        },
        "description": "** [Decay] lasts +4 turns but deals -40% damage per tick.\r\n    * **Evo A (Extended Decay):** Lasts +6 turns.\r\n    * **Evo B (Tolerable Decay):** Only -25% damage penalty.\r\n    * **Note:** *Opposite of rapid. Long-game pressure.*",
        "lore_quote": "** *Opposite of rapid. Long-game pressure.*",
        "tactical_brief": "Utilizes Tantra mechanics. Decay.",
        "mastery_perk": "Mastery Lvl 5: (Extended Decay): Lasts +6 turns.\r\n    * Evo B (Tolerable Decay): Only -25% damage penalty.\r\n    * Note: *Opposite of rapid. Long-game pressure.*",
        "gameplay_info": {
            "usage": [
                "Cost: 40 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": [
                "Decay"
            ]
        },
        "deep_data": {
            "environment": "Resonates with dot, offense.",
            "narrative": "Practitioners of Tantra use this to manipulate dot.",
            "evolution": "Potential evolution: Tolerable Decay"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 50,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_060",
        "name": "Burn-Decay Fusion",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [
            "BURN",
            "DECAY"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 55,
            "damage": 75
        },
        "description": "** When you apply [Burn], also apply [Decay]. Both at 75% potency.\r\n    * **Evo A (Perfect Fusion):** Both at 100% potency.\r\n    * **Evo B (Enhanced Fusion):** Also deals 10 immediate damage.\r\n    * **Note:** *Double DoT specialist. Maximum pressure.*",
        "lore_quote": "** *Double DoT specialist. Maximum pressure.*",
        "tactical_brief": "Utilizes Tantra mechanics. Burn, Decay.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Fusion): Both at 100% potency.\r\n    * Evo B (Enhanced Fusion): Also deals 10 immediate damage.\r\n    * Note: *Double DoT specialist. Maximum pressure.*",
        "gameplay_info": {
            "usage": [
                "Cost: 55 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Burn",
                "Decay"
            ]
        },
        "deep_data": {
            "environment": "Resonates with dot, offense.",
            "narrative": "Practitioners of Tantra use this to manipulate dot.",
            "evolution": "Potential evolution: Enhanced Fusion"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 75,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_061",
        "name": "Explosive Decay",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "DECAY"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 50,
            "damage": 52
        },
        "description": "** Detonate all [Decay] on target, dealing damage equal to (stacks × remaining duration × 3).\r\n    * **Evo A (Perfect Explosion):** ×5 instead of ×3.\r\n    * **Evo B (Chain Explosion):** Explosion spreads to adjacent enemies.\r\n    * **Note:** *Burst finisher. Setup vs execution.*",
        "lore_quote": "** *Burst finisher. Setup vs execution.*",
        "tactical_brief": "Utilizes Tantra mechanics. Decay.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Explosion): ×5 instead of ×3.\r\n    * Evo B (Chain Explosion): Explosion spreads to adjacent enemies.\r\n    * Note: *Burst finisher. Setup vs execution.*",
        "gameplay_info": {
            "usage": [
                "Cost: 50 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Decay"
            ]
        },
        "deep_data": {
            "environment": "Resonates with dot, offense.",
            "narrative": "Practitioners of Tantra use this to manipulate dot.",
            "evolution": "Potential evolution: Chain Explosion"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 52,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_062",
        "name": "Burn Reflexion",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "BURN",
            "BURN"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 45,
            "damage": 53
        },
        "description": "** When enemy deals damage to you, apply 2 [Burn] to them.\r\n    * **Evo A (Perfect Reflexion):** Apply 4 [Burn].\r\n    * **Evo B (Widespread Reflexion):** Also affects adjacent enemies.\r\n    * **Note:** *Counter-attack DoT. Defensive offense.*",
        "lore_quote": "** *Counter-attack DoT. Defensive offense.*",
        "tactical_brief": "Utilizes Tantra mechanics. Burn, Burn.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Reflexion): Apply 4 [Burn].\r\n    * Evo B (Widespread Reflexion): Also affects adjacent enemies.\r\n    * Note: *Counter-attack DoT. Defensive offense.*",
        "gameplay_info": {
            "usage": [
                "Cost: 45 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Burn",
                "Burn"
            ]
        },
        "deep_data": {
            "environment": "Resonates with dot, offense.",
            "narrative": "Practitioners of Tantra use this to manipulate dot.",
            "evolution": "Potential evolution: Widespread Reflexion"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 53,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_063",
        "name": "Decay Multiplication",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [
            "DECAY"
        ],
        "stats": {
            "cooldown": 4,
            "cost": 60,
            "damage": 74
        },
        "description": "** Each [Decay] tick increases next tick's damage by 10% (resets on target death).\r\n    * **Evo A (Perfect Multiplication):** +20% per tick.\r\n    * **Evo B (Persistent Multiplication):** Doesn't reset on death, transfers to next target.\r\n    * **Note:** *Exponential scaling. Snowball build.*",
        "lore_quote": "** *Exponential scaling. Snowball build.*",
        "tactical_brief": "Utilizes Tantra mechanics. Decay.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Multiplication): +20% per tick.\r\n    * Evo B (Persistent Multiplication): Doesn't reset on death, transfers to next target.\r\n    * Note: *Exponential scaling. Snowball build.*",
        "gameplay_info": {
            "usage": [
                "Cost: 60 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": [
                "Decay"
            ]
        },
        "deep_data": {
            "environment": "Resonates with dot, offense.",
            "narrative": "Practitioners of Tantra use this to manipulate dot.",
            "evolution": "Potential evolution: Persistent Multiplication"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 74,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_064",
        "name": "Burn Conversion",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "BURN",
            "HEAL"
        ],
        "stats": {
            "cooldown": 2,
            "cost": 40,
            "heal": 52
        },
        "description": "** Consume all [Burn] from target. Gain +2 Prana per stack consumed.\r\n    * **Evo A (Perfect Conversion):** +3 Prana per stack.\r\n    * **Evo B (Healing Conversion):** Also [Heal] 5 Ojas per stack.\r\n    * **Note:** *DoT as resource. Flexible adaptation.*",
        "lore_quote": "** *DoT as resource. Flexible adaptation.*",
        "tactical_brief": "Utilizes Tantra mechanics. Burn, Heal.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Conversion): +3 Prana per stack.\r\n    * Evo B (Healing Conversion): Also [Heal] 5 Ojas per stack.\r\n    * Note: *DoT as resource. Flexible adaptation.*",
        "gameplay_info": {
            "usage": [
                "Cost: 40 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": [
                "Burn",
                "Heal"
            ]
        },
        "deep_data": {
            "environment": "Resonates with dot, healing.",
            "narrative": "Practitioners of Tantra use this to manipulate dot.",
            "evolution": "Potential evolution: Healing Conversion"
        },
        "effects": [
            {
                "type": "HEAL",
                "value": 52,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_065",
        "name": "Decay Theft",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "DECAY"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 50,
            "damage": 52
        },
        "description": "** Transfer all [Decay] from ally to enemy at +50% potency.\r\n    * **Evo A (Perfect Theft):** +100% potency.\r\n    * **Evo B (Mass Theft):** Can transfer from 2 allies to 2 enemies.\r\n    * **Note:** *Save allies, doom enemies. Tactical cleansing.*",
        "lore_quote": "** *Save allies, doom enemies. Tactical cleansing.*",
        "tactical_brief": "Utilizes Tantra mechanics. Decay.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Theft): +100% potency.\r\n    * Evo B (Mass Theft): Can transfer from 2 allies to 2 enemies.\r\n    * Note: *Save allies, doom enemies. Tactical cleansing.*",
        "gameplay_info": {
            "usage": [
                "Cost: 50 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Decay"
            ]
        },
        "deep_data": {
            "environment": "Resonates with dot, support, offense.",
            "narrative": "Practitioners of Tantra use this to manipulate dot.",
            "evolution": "Potential evolution: Mass Theft"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 52,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_066",
        "name": "Eternal Burn",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [
            "BURN"
        ],
        "stats": {
            "cooldown": 4,
            "cost": 65,
            "damage": 75
        },
        "description": "** [Burn] on target never expires but deals -50% damage per tick.\r\n    * **Evo A (Perfect Eternal):** Only -30% damage.\r\n    * **Evo B (Spreading Eternal):** Can affect 2 targets.\r\n    * **Note:** *Permanent pressure vs burst damage.*",
        "lore_quote": "** *Permanent pressure vs burst damage.*",
        "tactical_brief": "Utilizes Tantra mechanics. Burn.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Eternal): Only -30% damage.\r\n    * Evo B (Spreading Eternal): Can affect 2 targets.\r\n    * Note: *Permanent pressure vs burst damage.*",
        "gameplay_info": {
            "usage": [
                "Cost: 65 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": [
                "Burn"
            ]
        },
        "deep_data": {
            "environment": "Resonates with dot, offense.",
            "narrative": "Practitioners of Tantra use this to manipulate dot.",
            "evolution": "Potential evolution: Spreading Eternal"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 75,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_067",
        "name": "Decay Amplifier",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [
            "DECAY"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 55,
            "damage": 73
        },
        "description": "** For 3 turns, all [Decay] damage dealt by anyone doubled.\r\n    * **Evo A (Perfect Amplifier):** Tripled instead of doubled.\r\n    * **Evo B (Extended Amplifier):** Duration 4 turns.\r\n    * **Note:** *Team buff. Multiplayer synergy.*\r\n\r\n---\r\n\r\n### **CONTROL & STUN SPECIALIZATIONS — 12 Skills**",
        "lore_quote": "** *Team buff. Multiplayer synergy.*\r\n\r\n---\r\n\r\n### **CONTROL & STUN SPECIALIZATIONS — 12 Skills**",
        "tactical_brief": "Utilizes Tantra mechanics. Decay.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Amplifier): Tripled instead of doubled.\r\n    * Evo B (Extended Amplifier): Duration 4 turns.\r\n    * Note: *Team buff. Multiplayer synergy.*\r\n\r\n---\r\n\r\n### CONTROL & STUN SPECIALIZATIONS — 12 Skills",
        "gameplay_info": {
            "usage": [
                "Cost: 55 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Decay"
            ]
        },
        "deep_data": {
            "environment": "Resonates with dot, offense.",
            "narrative": "Practitioners of Tantra use this to manipulate dot.",
            "evolution": "Potential evolution: Extended Amplifier"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 73,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_068",
        "name": "Stun Master",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "STUN",
            "STUN"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 50,
            "damage": 54
        },
        "description": "** All [Stun] effects +2 turns duration. Cannot be reduced by enemy effects.\r\n    * **Evo A (Perfect Stun):** +3 turns duration.\r\n    * **Evo B (Mass Stun):** [Stun] spreads to adjacent enemies.\r\n    * **Note:** *Ultimate crowd control. Lockdown specialist.*",
        "lore_quote": "** *Ultimate crowd control. Lockdown specialist.*",
        "tactical_brief": "Utilizes Tantra mechanics. Stun, Stun.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Stun): +3 turns duration.\r\n    * Evo B (Mass Stun): [Stun] spreads to adjacent enemies.\r\n    * Note: *Ultimate crowd control. Lockdown specialist.*",
        "gameplay_info": {
            "usage": [
                "Cost: 50 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Stun",
                "Stun"
            ]
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Tantra use this to manipulate offense.",
            "evolution": "Potential evolution: Mass Stun"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 54,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_069",
        "name": "Silence Master",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "SILENCE",
            "SILENCED"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 45,
            "damage": 53
        },
        "description": "** All [Silence] effects +2 turns. [Silenced] enemies take +25% damage.\r\n    * **Evo A (Perfect Silence):** +3 turns duration.\r\n    * **Evo B (Punishing Silence):** +40% damage taken.\r\n    * **Note:** *Silence into execution. Setup-punish combo.*",
        "lore_quote": "** *Silence into execution. Setup-punish combo.*",
        "tactical_brief": "Utilizes Tantra mechanics. Silence, Silenced.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Silence): +3 turns duration.\r\n    * Evo B (Punishing Silence): +40% damage taken.\r\n    * Note: *Silence into execution. Setup-punish combo.*",
        "gameplay_info": {
            "usage": [
                "Cost: 45 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Silence",
                "Silenced"
            ]
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Tantra use this to manipulate offense.",
            "evolution": "Potential evolution: Punishing Silence"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 53,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_070",
        "name": "Chain Stun",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [
            "STUN",
            "STUN"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 55,
            "damage": 75
        },
        "description": "** When [Stun] expires on target, 50% chance to apply another 1-turn [Stun].\r\n    * **Evo A (Perfect Chain):** 75% chance.\r\n    * **Evo B (Guaranteed Chain):** Always chains but at 1 turn only.\r\n    * **Note:** *Stun-lock build. Infinite control potential.*",
        "lore_quote": "** *Stun-lock build. Infinite control potential.*",
        "tactical_brief": "Utilizes Tantra mechanics. Stun, Stun.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Chain): 75% chance.\r\n    * Evo B (Guaranteed Chain): Always chains but at 1 turn only.\r\n    * Note: *Stun-lock build. Infinite control potential.*",
        "gameplay_info": {
            "usage": [
                "Cost: 55 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Stun",
                "Stun"
            ]
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Tantra use this to manipulate undefined.",
            "evolution": "Potential evolution: Guaranteed Chain"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 75,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_071",
        "name": "Cooldown Destroyer",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [],
        "stats": {
            "cooldown": 4,
            "cost": 60,
            "damage": 72
        },
        "description": "** Increase all enemy cooldowns by 3 turns. Once per duel.\r\n    * **Evo A (Perfect Destruction):** Increase by 5 turns.\r\n    * **Evo B (Frequent Destruction):** Usable twice per duel.\r\n    * **Note:** *Ultimate tempo swing. Freeze enemy strategy.*",
        "lore_quote": "** *Ultimate tempo swing. Freeze enemy strategy.*",
        "tactical_brief": "Utilizes Tantra mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Destruction): Increase by 5 turns.\r\n    * Evo B (Frequent Destruction): Usable twice per duel.\r\n    * Note: *Ultimate tempo swing. Freeze enemy strategy.*",
        "gameplay_info": {
            "usage": [
                "Cost: 60 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Tantra use this to manipulate offense.",
            "evolution": "Potential evolution: Frequent Destruction"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 72,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_072",
        "name": "Stasis Field",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 50,
            "damage": 50
        },
        "description": "** Create 3x3 field for 3 turns: Enemies inside have all actions cost +2 Prana.\r\n    * **Evo A (Perfect Field):** +4 Prana cost.\r\n    * **Evo B (Extended Field):** Duration 4 turns.\r\n    * **Note:** *Economic control. Drain enemy resources.*",
        "lore_quote": "** *Economic control. Drain enemy resources.*",
        "tactical_brief": "Utilizes Tantra mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Field): +4 Prana cost.\r\n    * Evo B (Extended Field): Duration 4 turns.\r\n    * Note: *Economic control. Drain enemy resources.*",
        "gameplay_info": {
            "usage": [
                "Cost: 50 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Tantra use this to manipulate offense.",
            "evolution": "Potential evolution: Extended Field"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 50,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_073",
        "name": "Subservience Master",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [
            "SUBSERVIENCE"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 55,
            "damage": 73
        },
        "description": "** At 10 [Subservience] stacks, fully control target for 1 turn.\r\n    * **Evo A (Perfect Control):** Only requires 8 stacks.\r\n    * **Evo B (Extended Control):** Control lasts 2 turns.\r\n    * **Note:** *Ultimate mind control. Puppet master.*",
        "lore_quote": "** *Ultimate mind control. Puppet master.*",
        "tactical_brief": "Utilizes Tantra mechanics. Subservience.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Control): Only requires 8 stacks.\r\n    * Evo B (Extended Control): Control lasts 2 turns.\r\n    * Note: *Ultimate mind control. Puppet master.*",
        "gameplay_info": {
            "usage": [
                "Cost: 55 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Subservience"
            ]
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Tantra use this to manipulate undefined.",
            "evolution": "Potential evolution: Extended Control"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 73,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_074",
        "name": "Discord Amplifier",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "DISCORD",
            "DISCORD"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 50,
            "damage": 54
        },
        "description": "** For each [Discord] on enemy, they have +10% chance for actions to fail entirely.\r\n    * **Evo A (Perfect Amplifier):** +15% per stack.\r\n    * **Evo B (Cascading Discord):** Failed actions apply +1 [Discord].\r\n    * **Note:** *Chaos scaling. Failure feedback loop.*",
        "lore_quote": "** *Chaos scaling. Failure feedback loop.*",
        "tactical_brief": "Utilizes Tantra mechanics. Discord, Discord.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Amplifier): +15% per stack.\r\n    * Evo B (Cascading Discord): Failed actions apply +1 [Discord].\r\n    * Note: *Chaos scaling. Failure feedback loop.*",
        "gameplay_info": {
            "usage": [
                "Cost: 50 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Discord",
                "Discord"
            ]
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Tantra use this to manipulate offense.",
            "evolution": "Potential evolution: Cascading Discord"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 54,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_075",
        "name": "Void Zone",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [],
        "stats": {
            "cooldown": 4,
            "cost": 60,
            "damage": 72
        },
        "description": "** Create 3x3 zone for 2 turns: No effects can be applied inside (friend or foe).\r\n    * **Evo A (Perfect Void):** Duration 3 turns.\r\n    * **Evo B (Selective Void):** Only affects enemies.\r\n    * **Note:** *Ultimate denial. Freeze game state.*",
        "lore_quote": "** *Ultimate denial. Freeze game state.*",
        "tactical_brief": "Utilizes Tantra mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Void): Duration 3 turns.\r\n    * Evo B (Selective Void): Only affects enemies.\r\n    * Note: *Ultimate denial. Freeze game state.*",
        "gameplay_info": {
            "usage": [
                "Cost: 60 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Tantra use this to manipulate offense.",
            "evolution": "Potential evolution: Selective Void"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 72,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_076",
        "name": "Resource Lock",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 55,
            "damage": 71
        },
        "description": "** Enemy cannot gain any resources for 3 turns.\r\n    * **Evo A (Perfect Lock):** Duration 4 turns.\r\n    * **Evo B (Mass Lock):** Affects all enemies.\r\n    * **Note:** *Economic shutdown. Starvation strategy.*",
        "lore_quote": "** *Economic shutdown. Starvation strategy.*",
        "tactical_brief": "Utilizes Tantra mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Lock): Duration 4 turns.\r\n    * Evo B (Mass Lock): Affects all enemies.\r\n    * Note: *Economic shutdown. Starvation strategy.*",
        "gameplay_info": {
            "usage": [
                "Cost: 55 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Tantra use this to manipulate offense.",
            "evolution": "Potential evolution: Mass Lock"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 71,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_077",
        "name": "Banish Master",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [
            "BANISH",
            "BANISH",
            "BANISHED"
        ],
        "stats": {
            "cooldown": 4,
            "cost": 60,
            "damage": 78
        },
        "description": "** All [Banish] effects +2 turns. Can [Banish] 5 effects simultaneously.\r\n    * **Evo A (Perfect Banish):** +3 turns duration.\r\n    * **Evo B (Permanent Banish):** [Banished] effects cost +5 Prana when they return.\r\n    * **Note:** *Ultimate removal. Erase threats.*",
        "lore_quote": "** *Ultimate removal. Erase threats.*",
        "tactical_brief": "Utilizes Tantra mechanics. Banish, Banish, Banished.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Banish): +3 turns duration.\r\n    * Evo B (Permanent Banish): [Banished] effects cost +5 Prana when they return.\r\n    * Note: *Ultimate removal. Erase threats.*",
        "gameplay_info": {
            "usage": [
                "Cost: 60 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": [
                "Banish",
                "Banish",
                "Banished"
            ]
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Tantra use this to manipulate undefined.",
            "evolution": "Potential evolution: Permanent Banish"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 78,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_078",
        "name": "Paralysis Loop",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [
            "STASIS",
            "STUN",
            "STUN",
            "CLEANSED"
        ],
        "stats": {
            "cooldown": 4,
            "cost": 65,
            "damage": 81
        },
        "description": "** When you apply [Stasis], 25% chance to also apply [Stun] (1 turn).\r\n    * **Evo A (Perfect Loop):** 50% chance.\r\n    * **Evo B (Guaranteed Loop):** Always applies but [Stun] can be [Cleansed] normally.\r\n    * **Note:** *Double control. Layered lockdown.*",
        "lore_quote": "** *Double control. Layered lockdown.*",
        "tactical_brief": "Utilizes Tantra mechanics. Stasis, Stun, Stun, Cleansed.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Loop): 50% chance.\r\n    * Evo B (Guaranteed Loop): Always applies but [Stun] can be [Cleansed] normally.\r\n    * Note: *Double control. Layered lockdown.*",
        "gameplay_info": {
            "usage": [
                "Cost: 65 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": [
                "Stasis",
                "Stun",
                "Stun",
                "Cleansed"
            ]
        },
        "deep_data": {
            "environment": "Resonates with support.",
            "narrative": "Practitioners of Tantra use this to manipulate support.",
            "evolution": "Potential evolution: Guaranteed Loop"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 81,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_079",
        "name": "Control Overload",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [
            "STUN",
            "SILENCE",
            "STASIS"
        ],
        "stats": {
            "cooldown": 4,
            "cost": 70,
            "damage": 80
        },
        "description": "** For 2 turns, all control effects ([Stun]/[Silence]/[Stasis]) have +100% duration. Costs 30 Prana.\r\n    * **Evo A (Perfect Overload):** +150% duration.\r\n    * **Evo B (Extended Overload):** Duration 3 turns.\r\n    * **Note:** *Ultimate control spike. Lock everything.*\r\n\r\n---\r\n\r\n### **YANTRA & RESONANCE SPECIALIZATIONS — 11 Skills**",
        "lore_quote": "** *Ultimate control spike. Lock everything.*\r\n\r\n---\r\n\r\n### **YANTRA & RESONANCE SPECIALIZATIONS — 11 Skills**",
        "tactical_brief": "Utilizes Tantra mechanics. Stun, Silence, Stasis.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Overload): +150% duration.\r\n    * Evo B (Extended Overload): Duration 3 turns.\r\n    * Note: *Ultimate control spike. Lock everything.*\r\n\r\n---\r\n\r\n### YANTRA & RESONANCE SPECIALIZATIONS — 11 Skills",
        "gameplay_info": {
            "usage": [
                "Cost: 70 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": [
                "Stun",
                "Silence",
                "Stasis"
            ]
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Tantra use this to manipulate undefined.",
            "evolution": "Potential evolution: Extended Overload"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 80,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_080",
        "name": "Yantra Master",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 55,
            "damage": 71
        },
        "description": "** Can deploy 2 additional Yantras beyond normal limit. All Yantras have +50% Ojas.\r\n    * **Evo A (Perfect Master):** 3 additional Yantras.\r\n    * **Evo B (Fortified Master):** +100% Ojas instead.\r\n    * **Note:** *Yantra specialist. Board control through structures.*",
        "lore_quote": "** *Yantra specialist. Board control through structures.*",
        "tactical_brief": "Utilizes Tantra mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Master): 3 additional Yantras.\r\n    * Evo B (Fortified Master): +100% Ojas instead.\r\n    * Note: *Yantra specialist. Board control through structures.*",
        "gameplay_info": {
            "usage": [
                "Cost: 55 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with infrastructure.",
            "narrative": "Practitioners of Tantra use this to manipulate infrastructure.",
            "evolution": "Potential evolution: Fortified Master"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 71,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_081",
        "name": "Resonance Link Master",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [],
        "stats": {
            "cooldown": 4,
            "cost": 60,
            "damage": 72
        },
        "description": "** All Yantras automatically link with each other. Linked bonus effects doubled.\r\n    * **Evo A (Perfect Link):** Linked effects tripled.\r\n    * **Evo B (Extended Link):** Links work across entire board, not just adjacent.\r\n    * **Note:** *Network specialist. Exponential synergy.*",
        "lore_quote": "** *Network specialist. Exponential synergy.*",
        "tactical_brief": "Utilizes Tantra mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Link): Linked effects tripled.\r\n    * Evo B (Extended Link): Links work across entire board, not just adjacent.\r\n    * Note: *Network specialist. Exponential synergy.*",
        "gameplay_info": {
            "usage": [
                "Cost: 60 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with support.",
            "narrative": "Practitioners of Tantra use this to manipulate support.",
            "evolution": "Potential evolution: Extended Link"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 72,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_082",
        "name": "Yantra Sacrifice",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 50,
            "damage": 50
        },
        "description": "** Destroy your Yantra to deal damage equal to (Yantra Ojas × 2) to all enemies.\r\n    * **Evo A (Perfect Sacrifice):** ×3 damage instead.\r\n    * **Evo B (Selective Sacrifice):** Choose targets.\r\n    * **Note:** *Explosive Yantras. Kamikaze structures.*",
        "lore_quote": "** *Explosive Yantras. Kamikaze structures.*",
        "tactical_brief": "Utilizes Tantra mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Sacrifice): ×3 damage instead.\r\n    * Evo B (Selective Sacrifice): Choose targets.\r\n    * Note: *Explosive Yantras. Kamikaze structures.*",
        "gameplay_info": {
            "usage": [
                "Cost: 50 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with offense, infrastructure.",
            "narrative": "Practitioners of Tantra use this to manipulate offense.",
            "evolution": "Potential evolution: Selective Sacrifice"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 50,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_083",
        "name": "Yantra Healing",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "HEAL"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 45,
            "heal": 51
        },
        "description": "** All Yantras [Heal] adjacent allies for 10 Ojas per turn.\r\n    * **Evo A (Perfect Healing):** 20 Ojas per turn.\r\n    * **Evo B (Extended Healing):** Affects 5x5 area.\r\n    * **Note:** *Support Yantras. Structure-based healing.*",
        "lore_quote": "** *Support Yantras. Structure-based healing.*",
        "tactical_brief": "Utilizes Tantra mechanics. Heal.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Healing): 20 Ojas per turn.\r\n    * Evo B (Extended Healing): Affects 5x5 area.\r\n    * Note: *Support Yantras. Structure-based healing.*",
        "gameplay_info": {
            "usage": [
                "Cost: 45 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Heal"
            ]
        },
        "deep_data": {
            "environment": "Resonates with healing, support, infrastructure.",
            "narrative": "Practitioners of Tantra use this to manipulate healing.",
            "evolution": "Potential evolution: Extended Healing"
        },
        "effects": [
            {
                "type": "HEAL",
                "value": 51,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_084",
        "name": "Mobile Yantra",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 50,
            "damage": 50
        },
        "description": "** Can move Yantras freely. Moving grants adjacent allies 15 Shield.\r\n    * **Evo A (Perfect Mobility):** 25 Shield instead.\r\n    * **Evo B (Free Mobility):** Moving costs 0 actions.\r\n    * **Note:** *Dynamic positioning. Chess-like gameplay.*",
        "lore_quote": "** *Dynamic positioning. Chess-like gameplay.*",
        "tactical_brief": "Utilizes Tantra mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Mobility): 25 Shield instead.\r\n    * Evo B (Free Mobility): Moving costs 0 actions.\r\n    * Note: *Dynamic positioning. Chess-like gameplay.*",
        "gameplay_info": {
            "usage": [
                "Cost: 50 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with support.",
            "narrative": "Practitioners of Tantra use this to manipulate support.",
            "evolution": "Potential evolution: Free Mobility"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 50,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_085",
        "name": "Yantra Evolution",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [],
        "stats": {
            "cooldown": 4,
            "cost": 60,
            "damage": 72
        },
        "description": "** Yantras gain +10% potency per turn they survive (no cap).\r\n    * **Evo A (Rapid Evolution):** +15% per turn.\r\n    * **Evo B (Perfect Evolution):** Also gain +5 Ojas per turn.\r\n    * **Note:** *Growing threats. Must-answer targets.*",
        "lore_quote": "** *Growing threats. Must-answer targets.*",
        "tactical_brief": "Utilizes Tantra mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Rapid Evolution): +15% per turn.\r\n    * Evo B (Perfect Evolution): Also gain +5 Ojas per turn.\r\n    * Note: *Growing threats. Must-answer targets.*",
        "gameplay_info": {
            "usage": [
                "Cost: 60 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Tantra use this to manipulate undefined.",
            "evolution": "Potential evolution: Perfect Evolution"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 72,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_086",
        "name": "Resonance Amplifier",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 55,
            "damage": 71
        },
        "description": "** All Resonance effects have +50% potency and last +1 turn.\r\n    * **Evo A (Perfect Amplifier):** +75% potency.\r\n    * **Evo B (Extended Amplifier):** Last +2 turns.\r\n    * **Note:** *Universal Resonance boost. Scales everything.*",
        "lore_quote": "** *Universal Resonance boost. Scales everything.*",
        "tactical_brief": "Utilizes Tantra mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Amplifier): +75% potency.\r\n    * Evo B (Extended Amplifier): Last +2 turns.\r\n    * Note: *Universal Resonance boost. Scales everything.*",
        "gameplay_info": {
            "usage": [
                "Cost: 55 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Tantra use this to manipulate undefined.",
            "evolution": "Potential evolution: Extended Amplifier"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 71,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_087",
        "name": "Yantra Cloning",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [],
        "stats": {
            "cooldown": 4,
            "cost": 65,
            "damage": 73
        },
        "description": "** When you deploy Yantra, 50% chance to create weaker copy (50% potency).\r\n    * **Evo A (Perfect Cloning):** Copy at 75% potency.\r\n    * **Evo B (Guaranteed Cloning):** 100% chance.\r\n    * **Note:** *Board flooding. Overwhelming structures.*",
        "lore_quote": "** *Board flooding. Overwhelming structures.*",
        "tactical_brief": "Utilizes Tantra mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Cloning): Copy at 75% potency.\r\n    * Evo B (Guaranteed Cloning): 100% chance.\r\n    * Note: *Board flooding. Overwhelming structures.*",
        "gameplay_info": {
            "usage": [
                "Cost: 65 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with infrastructure.",
            "narrative": "Practitioners of Tantra use this to manipulate infrastructure.",
            "evolution": "Potential evolution: Guaranteed Cloning"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 73,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_088",
        "name": "Resonance Theft",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 50,
            "damage": 50
        },
        "description": "** Steal all Resonances from enemy and apply to another enemy at +50% potency.\r\n    * **Evo A (Perfect Theft):** +100% potency.\r\n    * **Evo B (Mass Theft):** Can steal from 2 enemies.\r\n    * **Note:** *Turn enemy power against them.*",
        "lore_quote": "** *Turn enemy power against them.*",
        "tactical_brief": "Utilizes Tantra mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Theft): +100% potency.\r\n    * Evo B (Mass Theft): Can steal from 2 enemies.\r\n    * Note: *Turn enemy power against them.*",
        "gameplay_info": {
            "usage": [
                "Cost: 50 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Tantra use this to manipulate offense.",
            "evolution": "Potential evolution: Mass Theft"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 50,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_089",
        "name": "Yantra Network",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [],
        "stats": {
            "cooldown": 4,
            "cost": 60,
            "damage": 72
        },
        "description": "** For each Yantra you control, all other Yantras gain +10% potency.\r\n    * **Evo A (Perfect Network):** +15% per Yantra.\r\n    * **Evo B (Deep Network):** Also gain +5 Ojas per Yantra.\r\n    * **Note:** *Exponential Yantra scaling. Critical mass.*",
        "lore_quote": "** *Exponential Yantra scaling. Critical mass.*",
        "tactical_brief": "Utilizes Tantra mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Network): +15% per Yantra.\r\n    * Evo B (Deep Network): Also gain +5 Ojas per Yantra.\r\n    * Note: *Exponential Yantra scaling. Critical mass.*",
        "gameplay_info": {
            "usage": [
                "Cost: 60 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Tantra use this to manipulate undefined.",
            "evolution": "Potential evolution: Deep Network"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 72,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_090",
        "name": "Resonance Overload",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [],
        "stats": {
            "cooldown": 4,
            "cost": 70,
            "damage": 74
        },
        "description": "** For 2 turns, applying Resonance triggers all other Resonance types on target simultaneously. Costs 35 Prana.\r\n    * **Evo A (Perfect Overload):** Duration 3 turns.\r\n    * **Evo B (Economic Overload):** Cost reduced to 30 Prana.\r\n    * **Note:** *Ultimate combo. All Resonances at once.*\r\n\r\n---\r\n\r\n### **UNIQUE BUILD ENABLERS — 10 Skills**",
        "lore_quote": "** *Ultimate combo. All Resonances at once.*\r\n\r\n---\r\n\r\n### **UNIQUE BUILD ENABLERS — 10 Skills**",
        "tactical_brief": "Utilizes Tantra mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Overload): Duration 3 turns.\r\n    * Evo B (Economic Overload): Cost reduced to 30 Prana.\r\n    * Note: *Ultimate combo. All Resonances at once.*\r\n\r\n---\r\n\r\n### UNIQUE BUILD ENABLERS — 10 Skills",
        "gameplay_info": {
            "usage": [
                "Cost: 70 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Tantra use this to manipulate undefined.",
            "evolution": "Potential evolution: Economic Overload"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 74,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_091",
        "name": "Glass Tantra",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [],
        "stats": {
            "cooldown": 4,
            "cost": 60,
            "damage": 72
        },
        "description": "** -50% max Ojas, but all Tantra effects +150%.\r\n    * **Evo A (Perfect Glass):** +200% effects.\r\n    * **Evo B (Tolerable Glass):** Only -30% max Ojas.\r\n    * **Note:** *Extreme offense. Glass cannon Tantra.*",
        "lore_quote": "** *Extreme offense. Glass cannon Tantra.*",
        "tactical_brief": "Utilizes Tantra mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Glass): +200% effects.\r\n    * Evo B (Tolerable Glass): Only -30% max Ojas.\r\n    * Note: *Extreme offense. Glass cannon Tantra.*",
        "gameplay_info": {
            "usage": [
                "Cost: 60 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Tantra use this to manipulate undefined.",
            "evolution": "Potential evolution: Tolerable Glass"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 72,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_092",
        "name": "Tank Tantra",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 55,
            "damage": 71
        },
        "description": "** +50% max Ojas, but all Tantra effects -30%.\r\n    * **Evo A (Perfect Tank):** +75% max Ojas.\r\n    * **Evo B (Tolerable Tank):** Only -15% effect penalty.\r\n    * **Note:** *Opposite of glass. Sustained control.*",
        "lore_quote": "** *Opposite of glass. Sustained control.*",
        "tactical_brief": "Utilizes Tantra mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Tank): +75% max Ojas.\r\n    * Evo B (Tolerable Tank): Only -15% effect penalty.\r\n    * Note: *Opposite of glass. Sustained control.*",
        "gameplay_info": {
            "usage": [
                "Cost: 55 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Tantra use this to manipulate undefined.",
            "evolution": "Potential evolution: Tolerable Tank"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 71,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_093",
        "name": "Prana Vampire",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [
            "HEAL"
        ],
        "stats": {
            "cooldown": 4,
            "cost": 65,
            "heal": 75
        },
        "description": "** Gain +1 Prana each time enemy is affected by your Resonance.\r\n    * **Evo A (Perfect Vampire):** +2 Prana per effect.\r\n    * **Evo B (Enhanced Vampire):** Also [Heal] 5 Ojas per effect.\r\n    * **Note:** *Self-sustaining Tantra. Resource loop.*",
        "lore_quote": "** *Self-sustaining Tantra. Resource loop.*",
        "tactical_brief": "Utilizes Tantra mechanics. Heal.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Vampire): +2 Prana per effect.\r\n    * Evo B (Enhanced Vampire): Also [Heal] 5 Ojas per effect.\r\n    * Note: *Self-sustaining Tantra. Resource loop.*",
        "gameplay_info": {
            "usage": [
                "Cost: 65 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": [
                "Heal"
            ]
        },
        "deep_data": {
            "environment": "Resonates with healing, offense.",
            "narrative": "Practitioners of Tantra use this to manipulate healing.",
            "evolution": "Potential evolution: Enhanced Vampire"
        },
        "effects": [
            {
                "type": "HEAL",
                "value": 75,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_094",
        "name": "Minimalist Tantra",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 55,
            "damage": 71
        },
        "description": "** Can only use 5 Tantra glyphs total, but they all have -50% costs and +50% effects.\r\n    * **Evo A (Perfect Minimalism):** +75% effects.\r\n    * **Evo B (Efficient Minimalism):** -75% costs.\r\n    * **Note:** *Extreme simplicity vs complexity.*",
        "lore_quote": "** *Extreme simplicity vs complexity.*",
        "tactical_brief": "Utilizes Tantra mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Minimalism): +75% effects.\r\n    * Evo B (Efficient Minimalism): -75% costs.\r\n    * Note: *Extreme simplicity vs complexity.*",
        "gameplay_info": {
            "usage": [
                "Cost: 55 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Tantra use this to manipulate undefined.",
            "evolution": "Potential evolution: Efficient Minimalism"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 71,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_095",
        "name": "Maximalist Tantra",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [],
        "stats": {
            "cooldown": 4,
            "cost": 70,
            "damage": 74
        },
        "description": "** Can use 20 Tantra glyphs. For each glyph over 10, gain +5% all Tantra effects.\r\n    * **Evo A (Perfect Maximalism):** +8% per glyph.\r\n    * **Evo B (Deep Maximalism):** Can use 25 glyphs.\r\n    * **Note:** *Toolbox specialist. Infinite options.*",
        "lore_quote": "** *Toolbox specialist. Infinite options.*",
        "tactical_brief": "Utilizes Tantra mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Maximalism): +8% per glyph.\r\n    * Evo B (Deep Maximalism): Can use 25 glyphs.\r\n    * Note: *Toolbox specialist. Infinite options.*",
        "gameplay_info": {
            "usage": [
                "Cost: 70 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Tantra use this to manipulate undefined.",
            "evolution": "Potential evolution: Deep Maximalism"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 74,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_096",
        "name": "Karma Gambit",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [],
        "stats": {
            "cooldown": 4,
            "cost": 65,
            "damage": 73
        },
        "description": "** All Tantra effects have random potency between 50% and 200%.\r\n    * **Evo A (Controlled Gambit):** Range improved to 75%-200%.\r\n    * **Evo B (Perfect Gambit):** Range improved to 100%-300%.\r\n    * **Note:** *RNG build. High variance vs consistency.*",
        "lore_quote": "** *RNG build. High variance vs consistency.*",
        "tactical_brief": "Utilizes Tantra mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Controlled Gambit): Range improved to 75%-200%.\r\n    * Evo B (Perfect Gambit): Range improved to 100%-300%.\r\n    * Note: *RNG build. High variance vs consistency.*",
        "gameplay_info": {
            "usage": [
                "Cost: 65 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Tantra use this to manipulate undefined.",
            "evolution": "Potential evolution: Perfect Gambit"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 73,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_097",
        "name": "Perfect Tantra",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [],
        "stats": {
            "cooldown": 4,
            "cost": 60,
            "damage": 72
        },
        "description": "** All Tantra effects have exactly listed potency—no scaling, crits, or variance.\r\n    * **Evo A (Predictable Power):** All effects +20% base potency.\r\n    * **Evo B (Enhanced Stability):** Immune to anti-Tantra effects.\r\n    * **Note:** *Anti-variance. Reliable power.*",
        "lore_quote": "** *Anti-variance. Reliable power.*",
        "tactical_brief": "Utilizes Tantra mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Predictable Power): All effects +20% base potency.\r\n    * Evo B (Enhanced Stability): Immune to anti-Tantra effects.\r\n    * Note: *Anti-variance. Reliable power.*",
        "gameplay_info": {
            "usage": [
                "Cost: 60 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Tantra use this to manipulate undefined.",
            "evolution": "Potential evolution: Enhanced Stability"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 72,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_098",
        "name": "Solo Tantra",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [
            "SUBSERVIENCE"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 55,
            "damage": 73
        },
        "description": "** If you have no allies, all Tantra effects +150%, immune to [Subservience].\r\n    * **Evo A (Perfect Solo):** +200% effects.\r\n    * **Evo B (Survivor):** Also +50% max Ojas.\r\n    * **Note:** *Anti-team build. Solo domination.*",
        "lore_quote": "** *Anti-team build. Solo domination.*",
        "tactical_brief": "Utilizes Tantra mechanics. Subservience.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Solo): +200% effects.\r\n    * Evo B (Survivor): Also +50% max Ojas.\r\n    * Note: *Anti-team build. Solo domination.*",
        "gameplay_info": {
            "usage": [
                "Cost: 55 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Subservience"
            ]
        },
        "deep_data": {
            "environment": "Resonates with support.",
            "narrative": "Practitioners of Tantra use this to manipulate support.",
            "evolution": "Potential evolution: Survivor"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 73,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_099",
        "name": "Team Tantra",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [],
        "stats": {
            "cooldown": 4,
            "cost": 60,
            "damage": 72
        },
        "description": "** For each ally, gain +25% Tantra effects and +10 max Ojas.\r\n    * **Evo A (Perfect Team):** +40% effects per ally.\r\n    * **Evo B (Deep Team):** +20 max Ojas per ally.\r\n    * **Note:** *Opposite of solo. Multiplayer specialist.*",
        "lore_quote": "** *Opposite of solo. Multiplayer specialist.*",
        "tactical_brief": "Utilizes Tantra mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Team): +40% effects per ally.\r\n    * Evo B (Deep Team): +20 max Ojas per ally.\r\n    * Note: *Opposite of solo. Multiplayer specialist.*",
        "gameplay_info": {
            "usage": [
                "Cost: 60 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with support.",
            "narrative": "Practitioners of Tantra use this to manipulate support.",
            "evolution": "Potential evolution: Deep Team"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 72,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_100",
        "name": "Master of Karma",
        "type": "ACTIVE",
        "tier": "LEGENDARY",
        "tags": [],
        "stats": {
            "cooldown": 5,
            "cost": 80,
            "damage": 96
        },
        "description": "** Passive: All Karma paths cost -2 Prana. Applying Resonance grants +1 Prana. Can use all Karma paths without restriction.\r\n    * **Evo A (Perfect Mastery):** Cost -3 Prana, grant +2 Prana.\r\n    * **Evo B (Deep Mastery):** All Resonances have +25% potency.\r\n    * **Note:** *Ultimate Tantra synergy. Master of all Karma.*\r\n\r\n---",
        "lore_quote": "** *Ultimate Tantra synergy. Master of all Karma.*\r\n\r\n---",
        "tactical_brief": "Utilizes Tantra mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Mastery): Cost -3 Prana, grant +2 Prana.\r\n    * Evo B (Deep Mastery): All Resonances have +25% potency.\r\n    * Note: *Ultimate Tantra synergy. Master of all Karma.*\r\n\r\n---",
        "gameplay_info": {
            "usage": [
                "Cost: 80 Gnosis",
                "Cooldown: 5 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Tantra use this to manipulate undefined.",
            "evolution": "Potential evolution: Deep Mastery"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 96,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_90",
        "name": "Ravaging Storm",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [
            "AOE",
            "BURN",
            "BLEED",
            "PRESSURE"
        ],
        "stats": {
            "cooldown": 8,
            "damage": 95
        },
        "description": "Deal 35 damage to all enemies. Apply [Burn] and [Bleed] for 3 turns each.",
        "lore_quote": "\"A technique from the Tantra engine.\"",
        "tactical_brief": "Utilizes Tantra mechanics. AoE, Burn, Bleed, Pressure.",
        "mastery_perk": "Mastery Lvl 5: Enhanced potency.",
        "gameplay_info": {
            "usage": [
                "Cost: undefined Gnosis",
                "Cooldown: 8 Turns"
            ],
            "features": [
                "AoE",
                "Burn",
                "Bleed",
                "Pressure"
            ]
        },
        "deep_data": {
            "environment": "Resonates with aggro, dot, tempo.",
            "narrative": "Practitioners of Tantra use this to manipulate aggro.",
            "evolution": "Evolution path hidden."
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 95,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_91",
        "name": "Death Mark",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [
            "EXECUTE",
            "PRESSURE",
            "FINISH"
        ],
        "stats": {
            "cooldown": 9,
            "damage": 97
        },
        "description": "Mark target enemy. If they drop below 30% Ojas within 3 turns, instantly Execute them.",
        "lore_quote": "\"A technique from the Tantra engine.\"",
        "tactical_brief": "Utilizes Tantra mechanics. Execute, Pressure, Finish.",
        "mastery_perk": "Mastery Lvl 5: Enhanced potency.",
        "gameplay_info": {
            "usage": [
                "Cost: undefined Gnosis",
                "Cooldown: 9 Turns"
            ],
            "features": [
                "Execute",
                "Pressure",
                "Finish"
            ]
        },
        "deep_data": {
            "environment": "Resonates with aggro, execute, tempo.",
            "narrative": "Practitioners of Tantra use this to manipulate aggro.",
            "evolution": "Evolution path hidden."
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 97,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_92",
        "name": "Relentless Pursuit",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [
            "HASTE",
            "PENETRATION",
            "RELENTLESS"
        ],
        "stats": {
            "cooldown": 7,
            "damage": 99
        },
        "description": "Gain +30% attack speed for 4 turns. Attacks ignore 50% of enemy defense.",
        "lore_quote": "\"A technique from the Tantra engine.\"",
        "tactical_brief": "Utilizes Tantra mechanics. Haste, Penetration, Relentless.",
        "mastery_perk": "Mastery Lvl 5: Enhanced potency.",
        "gameplay_info": {
            "usage": [
                "Cost: undefined Gnosis",
                "Cooldown: 7 Turns"
            ],
            "features": [
                "Haste",
                "Penetration",
                "Relentless"
            ]
        },
        "deep_data": {
            "environment": "Resonates with aggro, tempo, offense.",
            "narrative": "Practitioners of Tantra use this to manipulate aggro.",
            "evolution": "Evolution path hidden."
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 99,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_93",
        "name": "Overwhelming Force",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [
            "DAMAGE",
            "STUN",
            "VULNERABLE",
            "CONTROL"
        ],
        "stats": {
            "cooldown": 10,
            "damage": 101
        },
        "description": "Deal 50 damage. If target survives, Stun them for 2 turns and apply [Vulnerable] x3.",
        "lore_quote": "\"A technique from the Tantra engine.\"",
        "tactical_brief": "Utilizes Tantra mechanics. Damage, Stun, Vulnerable, Control.",
        "mastery_perk": "Mastery Lvl 5: Enhanced potency.",
        "gameplay_info": {
            "usage": [
                "Cost: undefined Gnosis",
                "Cooldown: 10 Turns"
            ],
            "features": [
                "Damage",
                "Stun",
                "Vulnerable",
                "Control"
            ]
        },
        "deep_data": {
            "environment": "Resonates with aggro, control, pressure.",
            "narrative": "Practitioners of Tantra use this to manipulate aggro.",
            "evolution": "Evolution path hidden."
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 101,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_94",
        "name": "Savage Frenzy",
        "type": "ACTIVE",
        "tier": "LEGENDARY",
        "tags": [
            "FRENZY",
            "RISK",
            "POWER"
        ],
        "stats": {
            "cooldown": 11,
            "damage": 118
        },
        "description": "Enter Frenzy: +50% damage, +30% attack speed, but take +20% damage. Lasts 5 turns.",
        "lore_quote": "\"A technique from the Tantra engine.\"",
        "tactical_brief": "Utilizes Tantra mechanics. Frenzy, Risk, Power.",
        "mastery_perk": "Mastery Lvl 5: Enhanced potency.",
        "gameplay_info": {
            "usage": [
                "Cost: undefined Gnosis",
                "Cooldown: 11 Turns"
            ],
            "features": [
                "Frenzy",
                "Risk",
                "Power"
            ]
        },
        "deep_data": {
            "environment": "Resonates with aggro, risk, tempo.",
            "narrative": "Practitioners of Tantra use this to manipulate aggro.",
            "evolution": "Evolution path hidden."
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 118,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_95",
        "name": "Annihilation Wave",
        "type": "ACTIVE",
        "tier": "LEGENDARY",
        "tags": [
            "AOE",
            "DISPEL",
            "DESTRUCTION"
        ],
        "stats": {
            "cooldown": 12,
            "damage": 120
        },
        "description": "Deal 60 damage to all enemies. Destroys all enemy shields and buffs first.",
        "lore_quote": "\"A technique from the Tantra engine.\"",
        "tactical_brief": "Utilizes Tantra mechanics. AoE, Dispel, Destruction.",
        "mastery_perk": "Mastery Lvl 5: Enhanced potency.",
        "gameplay_info": {
            "usage": [
                "Cost: undefined Gnosis",
                "Cooldown: 12 Turns"
            ],
            "features": [
                "AoE",
                "Dispel",
                "Destruction"
            ]
        },
        "deep_data": {
            "environment": "Resonates with aggro, control, tempo.",
            "narrative": "Practitioners of Tantra use this to manipulate aggro.",
            "evolution": "Evolution path hidden."
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 120,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_96",
        "name": "Ultimate Destruction",
        "type": "ACTIVE",
        "tier": "LEGENDARY",
        "tags": [
            "TRUE DAMAGE",
            "UNSTOPPABLE",
            "EXECUTE"
        ],
        "stats": {
            "cooldown": 13,
            "damage": 122
        },
        "description": "Deal 80 pure damage (ignores shields, immunity, protection). Cannot be prevented or reduced.",
        "lore_quote": "\"A technique from the Tantra engine.\"",
        "tactical_brief": "Utilizes Tantra mechanics. True Damage, Unstoppable, Execute.",
        "mastery_perk": "Mastery Lvl 5: Enhanced potency.",
        "gameplay_info": {
            "usage": [
                "Cost: undefined Gnosis",
                "Cooldown: 13 Turns"
            ],
            "features": [
                "True Damage",
                "Unstoppable",
                "Execute"
            ]
        },
        "deep_data": {
            "environment": "Resonates with aggro, ultimate, unstoppable.",
            "narrative": "Practitioners of Tantra use this to manipulate aggro.",
            "evolution": "Evolution path hidden."
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 122,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_97",
        "name": "Apocalypse Flame",
        "type": "ACTIVE",
        "tier": "LEGENDARY",
        "tags": [
            "BURN",
            "DOT",
            "PERMANENT",
            "UNSTOPPABLE"
        ],
        "stats": {
            "cooldown": 14,
            "damage": 124
        },
        "description": "Apply permanent [Burn] that deals increasing damage each turn (5, 10, 15, 20...). Cannot be cleansed.",
        "lore_quote": "\"A technique from the Tantra engine.\"",
        "tactical_brief": "Utilizes Tantra mechanics. Burn, DoT, Permanent, Unstoppable.",
        "mastery_perk": "Mastery Lvl 5: Enhanced potency.",
        "gameplay_info": {
            "usage": [
                "Cost: undefined Gnosis",
                "Cooldown: 14 Turns"
            ],
            "features": [
                "Burn",
                "DoT",
                "Permanent",
                "Unstoppable"
            ]
        },
        "deep_data": {
            "environment": "Resonates with aggro, dot, ultimate.",
            "narrative": "Practitioners of Tantra use this to manipulate aggro.",
            "evolution": "Evolution path hidden."
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 124,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_98",
        "name": "Wrathful Ascension",
        "type": "ACTIVE",
        "tier": "LEGENDARY",
        "tags": [
            "ULTIMATE",
            "TRANSFORMATION",
            "DEVASTATION"
        ],
        "stats": {
            "cooldown": 15,
            "damage": 126
        },
        "description": "Transform into Avatar of Wrath for 3 turns. All attacks deal triple damage and apply [Burn], [Bleed], and [Decay].",
        "lore_quote": "\"A technique from the Tantra engine.\"",
        "tactical_brief": "Utilizes Tantra mechanics. Ultimate, Transformation, Devastation.",
        "mastery_perk": "Mastery Lvl 5: Enhanced potency.",
        "gameplay_info": {
            "usage": [
                "Cost: undefined Gnosis",
                "Cooldown: 15 Turns"
            ],
            "features": [
                "Ultimate",
                "Transformation",
                "Devastation"
            ]
        },
        "deep_data": {
            "environment": "Resonates with aggro, ultimate, broken.",
            "narrative": "Practitioners of Tantra use this to manipulate aggro.",
            "evolution": "Evolution path hidden."
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 126,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_99",
        "name": "Eternal Rage",
        "type": "ACTIVE",
        "tier": "LEGENDARY",
        "tags": [
            "PERMANENT",
            "SCALING",
            "POWER"
        ],
        "stats": {
            "cooldown": 18,
            "damage": 128
        },
        "description": "Permanent buff: All your damage increased by 100%. All DoT effects doubled. Shakti regenerates twice as fast.",
        "lore_quote": "\"A technique from the Tantra engine.\"",
        "tactical_brief": "Utilizes Tantra mechanics. Permanent, Scaling, Power.",
        "mastery_perk": "Mastery Lvl 5: Enhanced potency.",
        "gameplay_info": {
            "usage": [
                "Cost: undefined Gnosis",
                "Cooldown: 18 Turns"
            ],
            "features": [
                "Permanent",
                "Scaling",
                "Power"
            ]
        },
        "deep_data": {
            "environment": "Resonates with aggro, scaling, ultimate.",
            "narrative": "Practitioners of Tantra use this to manipulate aggro.",
            "evolution": "Evolution path hidden."
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 128,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    },
    {
        "id": "skill_tantra_100",
        "name": "Cataclysm",
        "type": "ACTIVE",
        "tier": "LEGENDARY",
        "tags": [
            "ULTIMATE",
            "APOCALYPSE",
            "DEVASTATION",
            "UNSTOPPABLE"
        ],
        "stats": {
            "cooldown": 25,
            "damage": 110
        },
        "description": "ULTIMATE: Deal 200 damage to all enemies. Destroy all structures, shields, and protections. Apply every DoT in the game for 10 turns each. Reduce max Ojas by 50%.",
        "lore_quote": "\"A technique from the Tantra engine.\"",
        "tactical_brief": "Utilizes Tantra mechanics. Ultimate, Apocalypse, Devastation, Unstoppable.",
        "mastery_perk": "Mastery Lvl 5: Enhanced potency.",
        "gameplay_info": {
            "usage": [
                "Cost: undefined Gnosis",
                "Cooldown: 25 Turns"
            ],
            "features": [
                "Ultimate",
                "Apocalypse",
                "Devastation",
                "Unstoppable"
            ]
        },
        "deep_data": {
            "environment": "Resonates with aggro, ultimate, godmode.",
            "narrative": "Practitioners of Tantra use this to manipulate aggro.",
            "evolution": "Evolution path hidden."
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 110,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Tantra.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Tantra"
    }
];
