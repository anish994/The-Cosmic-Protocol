
// Auto-generated from COMPLETE_SKILL_DATABASE.json
// Engine: Character Analysis
// Count: 100

window.SKILL_DB_CHARACTER_ANALYSIS = [
    {
        "id": "skill_character_analysis_001",
        "name": "Tactical Scan",
        "type": "ACTIVE",
        "tier": "COMMON",
        "tags": [
            "ANALYZE"
        ],
        "stats": {
            "cooldown": 0,
            "cost": 10,
            "damage": 4
        },
        "description": "** [Analyze] target, gain 2 Insight. Reveal 1 random keyword in their hand.\r\n    * **Evo A (Deep Scan):** Reveal 2 keywords instead.\r\n    * **Evo B (Efficient Scan):** Cost reduced by 1 KP.",
        "lore_quote": "\"Every Remnant carries the scars of the Fall.\"",
        "tactical_brief": "Deploy Tactical Scan to leverage ANALYZE.  [Analyze] target, gain 2 Insight. Reveal 1 random keyword i...",
        "mastery_perk": "Mastery Lvl 5: (Deep Scan): Reveal 2 keywords instead.\r\n    * Evo B (Efficient Scan): Cost reduced by 1 KP.",
        "gameplay_info": {
            "usage": [
                "Cost: 10 Gnosis",
                "Cooldown: 0 Turns"
            ],
            "features": [
                "Analyze"
            ]
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Character Analysis use this to manipulate undefined.",
            "evolution": "Potential evolution: Efficient Scan"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 4,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_002",
        "name": "Precision Mark",
        "type": "ACTIVE",
        "tier": "COMMON",
        "tags": [
            "MARK",
            "STRIKE",
            "VULNERABLE",
            "VULNERABLE"
        ],
        "stats": {
            "cooldown": 1,
            "cost": 15,
            "damage": 11
        },
        "description": "** [Mark] target. Your next [Strike] against them deals +25% damage and applies [Vulnerable] (1 turn).\r\n    * **Evo A (Lasting Mark):** [Vulnerable] duration 2 turns.\r\n    * **Evo B (Multi-Mark):** Can mark 2 targets simultaneously.",
        "lore_quote": "\"To dismantle the system, one must understand its code.\"",
        "tactical_brief": "Deploy Precision Mark to leverage MARK, STRIKE, VULNERABLE, VULNERABLE.  [Mark] target. Your next [Strike] against them deals +25% d...",
        "mastery_perk": "Mastery Lvl 5: (Lasting Mark): [Vulnerable] duration 2 turns.\r\n    * Evo B (Multi-Mark): Can mark 2 targets simultaneously.",
        "gameplay_info": {
            "usage": [
                "Cost: 15 Gnosis",
                "Cooldown: 1 Turns"
            ],
            "features": [
                "Mark",
                "Strike",
                "Vulnerable",
                "Vulnerable"
            ]
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Character Analysis use this to manipulate offense.",
            "evolution": "Potential evolution: Multi-Mark"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 11,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_003",
        "name": "Silence Breach",
        "type": "ACTIVE",
        "tier": "COMMON",
        "tags": [
            "SILENCE",
            "SHIELD",
            "SHIELD",
            "VULNERABLE"
        ],
        "stats": {
            "cooldown": 2,
            "cost": 30,
            "damage": 34
        },
        "description": "** Apply [Silence] (1 turn). If target has [Shield], convert 1 [Shield] to [Vulnerable].\r\n    * **Evo A (Extended Silence):** Duration 2 turns.\r\n    * **Evo B (Cascading Breach):** Also applies to adjacent enemy.",
        "lore_quote": "\"Identity is a construct we can deconstruct.\"",
        "tactical_brief": "Deploy Silence Breach to leverage SILENCE, SHIELD, SHIELD, VULNERABLE.  Apply [Silence] (1 turn). If target has [Shield], convert 1...",
        "mastery_perk": "Mastery Lvl 5: (Extended Silence): Duration 2 turns.\r\n    * Evo B (Cascading Breach): Also applies to adjacent enemy.",
        "gameplay_info": {
            "usage": [
                "Cost: 30 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": [
                "Silence",
                "Shield",
                "Shield",
                "Vulnerable"
            ]
        },
        "deep_data": {
            "environment": "Resonates with defense, offense.",
            "narrative": "Practitioners of Character Analysis use this to manipulate defense.",
            "evolution": "Potential evolution: Cascading Breach"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 34,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_004",
        "name": "Stun Protocol",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "STUN"
        ],
        "stats": {
            "cooldown": 2,
            "cost": 40,
            "damage": 50
        },
        "description": "** Apply [Stun] (1 turn). Target cannot act.\r\n    * **Evo A (Extended Stun):** Duration 2 turns but costs +2 KP.\r\n    * **Evo B (Insight Stun):** Costs 15 Insight instead of KP.",
        "lore_quote": "\"Identity is just another variable to be optimized.\"",
        "tactical_brief": "Deploy Stun Protocol to leverage STUN.  Apply [Stun] (1 turn). Target cannot act.     * Evo A (Exte...",
        "mastery_perk": "Mastery Lvl 5: (Extended Stun): Duration 2 turns but costs +2 KP.\r\n    * Evo B (Insight Stun): Costs 15 Insight instead of KP.",
        "gameplay_info": {
            "usage": [
                "Cost: 40 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": [
                "Stun"
            ]
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Character Analysis use this to manipulate undefined.",
            "evolution": "Potential evolution: Insight Stun"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 50,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_005",
        "name": "Interrogation",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "ANALYZE"
        ],
        "stats": {
            "cooldown": 2,
            "cost": 35,
            "damage": 49
        },
        "description": "** [Analyze] target engine. Reveal their next 2 planned actions and gain 3 Insight.\r\n    * **Evo A (Deep Interrogation):** Reveal 3 actions instead.\r\n    * **Evo B (Tactical Interrogation):** Also reduce their next action cost by revealing it.",
        "lore_quote": "\"Patterns emerge if you look close enough.\"",
        "tactical_brief": "Deploy Interrogation to leverage ANALYZE.  [Analyze] target engine. Reveal their next 2 planned action...",
        "mastery_perk": "Mastery Lvl 5: (Deep Interrogation): Reveal 3 actions instead.\r\n    * Evo B (Tactical Interrogation): Also reduce their next action cost by revealing it.",
        "gameplay_info": {
            "usage": [
                "Cost: 35 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": [
                "Analyze"
            ]
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Character Analysis use this to manipulate undefined.",
            "evolution": "Potential evolution: Tactical Interrogation"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 49,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_006",
        "name": "Exploit Weakness",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "EXPOSE",
            "VULNERABLE"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 45,
            "damage": 53
        },
        "description": "** If target has [Expose] or [Vulnerable], deal 30 damage and refresh 1 cooldown.\r\n    * **Evo A (Critical Exploit):** Damage increased to 50.\r\n    * **Evo B (Chain Exploit):** Can target 2 enemies if both have debuffs.",
        "lore_quote": "\"The Architects hide their flaws, but we see them.\"",
        "tactical_brief": "Deploy Exploit Weakness to leverage EXPOSE, VULNERABLE.  If target has [Expose] or [Vulnerable], deal 30 damage and ...",
        "mastery_perk": "Mastery Lvl 5: (Critical Exploit): Damage increased to 50.\r\n    * Evo B (Chain Exploit): Can target 2 enemies if both have debuffs.",
        "gameplay_info": {
            "usage": [
                "Cost: 45 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Expose",
                "Vulnerable"
            ]
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Character Analysis use this to manipulate offense.",
            "evolution": "Potential evolution: Chain Exploit"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 53,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_007",
        "name": "Control Lock",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "SILENCE",
            "VULNERABLE"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 50,
            "damage": 54
        },
        "description": "** Apply [Silence] + [Vulnerable] for 2 turns. Costs 20 Insight.\r\n    * **Evo A (Perfect Lock):** Duration 3 turns.\r\n    * **Evo B (Economic Lock):** Cost reduced to 15 Insight.",
        "lore_quote": "\"To dismantle the system, one must understand its code.\"",
        "tactical_brief": "Deploy Control Lock to leverage SILENCE, VULNERABLE.  Apply [Silence] + [Vulnerable] for 2 turns. Costs 20 Insigh...",
        "mastery_perk": "Mastery Lvl 5: (Perfect Lock): Duration 3 turns.\r\n    * Evo B (Economic Lock): Cost reduced to 15 Insight.",
        "gameplay_info": {
            "usage": [
                "Cost: 50 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Silence",
                "Vulnerable"
            ]
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Character Analysis use this to manipulate undefined.",
            "evolution": "Potential evolution: Economic Lock"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 54,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_008",
        "name": "Mind Shackle",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [
            "STUN"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 55,
            "damage": 73
        },
        "description": "** Target's next glyph costs +3 KP. If they can't pay, apply [Stun] (1 turn).\r\n    * **Evo A (Heavy Shackle):** Cost increase +5 KP.\r\n    * **Evo B (Cascading Shackle):** Affects their next 2 glyphs.",
        "lore_quote": "\"Patterns emerge if you look close enough.\"",
        "tactical_brief": "Deploy Mind Shackle to leverage STUN.  Target's next glyph costs +3 KP. If they can't pay, apply [...",
        "mastery_perk": "Mastery Lvl 5: (Heavy Shackle): Cost increase +5 KP.\r\n    * Evo B (Cascading Shackle): Affects their next 2 glyphs.",
        "gameplay_info": {
            "usage": [
                "Cost: 55 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Stun"
            ]
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Character Analysis use this to manipulate undefined.",
            "evolution": "Potential evolution: Cascading Shackle"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 73,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_009",
        "name": "Vulnerability Cascade",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "VULNERABLE"
        ],
        "stats": {
            "cooldown": 2,
            "cost": 40,
            "damage": 50
        },
        "description": "** Apply [Vulnerable] (2 turns). Each debuff on target extends duration by 1 turn.\r\n    * **Evo A (Amplified Cascade):** Extends by 2 turns per debuff.\r\n    * **Evo B (Spreading Cascade):** Also applies to adjacent enemies.",
        "lore_quote": "\"Patterns emerge if you look close enough.\"",
        "tactical_brief": "Deploy Vulnerability Cascade to leverage VULNERABLE.  Apply [Vulnerable] (2 turns). Each debuff on target extends...",
        "mastery_perk": "Mastery Lvl 5: (Amplified Cascade): Extends by 2 turns per debuff.\r\n    * Evo B (Spreading Cascade): Also applies to adjacent enemies.",
        "gameplay_info": {
            "usage": [
                "Cost: 40 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": [
                "Vulnerable"
            ]
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Character Analysis use this to manipulate offense.",
            "evolution": "Potential evolution: Spreading Cascade"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 50,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_010",
        "name": "Truth Extraction",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 2,
            "cost": 35,
            "damage": 47
        },
        "description": "** Target must reveal their entire hand. Gain 5 Insight. Once per duel.\r\n    * **Evo A (Deep Truth):** Also reveal their next draw.\r\n    * **Evo B (Painful Truth):** Deal 10 damage per card revealed.",
        "lore_quote": "\"Identity is a construct we can deconstruct.\"",
        "tactical_brief": "Deploy Truth Extraction to leverage .  Target must reveal their entire hand. Gain 5 Insight. Once ...",
        "mastery_perk": "Mastery Lvl 5: (Deep Truth): Also reveal their next draw.\r\n    * Evo B (Painful Truth): Deal 10 damage per card revealed.",
        "gameplay_info": {
            "usage": [
                "Cost: 35 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Character Analysis use this to manipulate offense.",
            "evolution": "Potential evolution: Painful Truth"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 47,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_011",
        "name": "Countermeasure",
        "type": "ACTIVE",
        "tier": "COMMON",
        "tags": [
            "SILENCE"
        ],
        "stats": {
            "cooldown": 2,
            "cost": 30,
            "damage": 28
        },
        "description": "** When target uses a glyph, apply [Silence] (1 turn). Cooldown: 3 turns.\r\n    * **Evo A (Perfect Counter):** Cooldown reduced to 2 turns.\r\n    * **Evo B (Aggressive Counter):** Also deal 15 damage.",
        "lore_quote": "\"Patterns emerge if you look close enough.\"",
        "tactical_brief": "Deploy Countermeasure to leverage SILENCE.  When target uses a glyph, apply [Silence] (1 turn). Cooldow...",
        "mastery_perk": "Mastery Lvl 5: (Perfect Counter): Cooldown reduced to 2 turns.\r\n    * Evo B (Aggressive Counter): Also deal 15 damage.",
        "gameplay_info": {
            "usage": [
                "Cost: 30 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": [
                "Silence"
            ]
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Character Analysis use this to manipulate offense.",
            "evolution": "Potential evolution: Aggressive Counter"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 28,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_012",
        "name": "Inhibitor Field",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 50,
            "damage": 50
        },
        "description": "** Create 3x3 zone for 2 turns: Enemies inside have all glyphs cost +2 KP.\r\n    * **Evo A (Extended Field):** Duration 3 turns.\r\n    * **Evo B (Punishing Field):** Enemies entering zone take 10 damage.",
        "lore_quote": "\"Every Remnant carries the scars of the Fall.\"",
        "tactical_brief": "Deploy Inhibitor Field to leverage .  Create 3x3 zone for 2 turns: Enemies inside have all glyphs...",
        "mastery_perk": "Mastery Lvl 5: (Extended Field): Duration 3 turns.\r\n    * Evo B (Punishing Field): Enemies entering zone take 10 damage.",
        "gameplay_info": {
            "usage": [
                "Cost: 50 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Character Analysis use this to manipulate offense.",
            "evolution": "Potential evolution: Punishing Field"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 50,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_013",
        "name": "Cognitive Overload",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "STUN"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 45,
            "damage": 51
        },
        "description": "** Deal 20 damage. If target has 3+ debuffs, also apply [Stun] (1 turn).\r\n    * **Evo A (Severe Overload):** Damage increased to 35.\r\n    * **Evo B (Cascading Overload):** Stun threshold reduced to 2 debuffs.",
        "lore_quote": "\"Identity is a construct we can deconstruct.\"",
        "tactical_brief": "Deploy Cognitive Overload to leverage STUN.  Deal 20 damage. If target has 3+ debuffs, also apply [Stun]...",
        "mastery_perk": "Mastery Lvl 5: (Severe Overload): Damage increased to 35.\r\n    * Evo B (Cascading Overload): Stun threshold reduced to 2 debuffs.",
        "gameplay_info": {
            "usage": [
                "Cost: 45 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Stun"
            ]
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Character Analysis use this to manipulate offense.",
            "evolution": "Potential evolution: Cascading Overload"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 51,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_014",
        "name": "Expose Core",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "EXPOSE"
        ],
        "stats": {
            "cooldown": 2,
            "cost": 40,
            "damage": 50
        },
        "description": "** [Expose] target's primary resource. Consuming it refreshes 2 cooldowns instead of 1.\r\n    * **Evo A (Perfect Exposure):** Refreshes 3 cooldowns.\r\n    * **Evo B (Multi-Exposure):** Can expose 2 different resources.",
        "lore_quote": "\"To dismantle the system, one must understand its code.\"",
        "tactical_brief": "Deploy Expose Core to leverage EXPOSE.  [Expose] target's primary resource. Consuming it refreshes ...",
        "mastery_perk": "Mastery Lvl 5: (Perfect Exposure): Refreshes 3 cooldowns.\r\n    * Evo B (Multi-Exposure): Can expose 2 different resources.",
        "gameplay_info": {
            "usage": [
                "Cost: 40 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": [
                "Expose"
            ]
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Character Analysis use this to manipulate undefined.",
            "evolution": "Potential evolution: Multi-Exposure"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 50,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_015",
        "name": "Lockdown Protocol",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [
            "SILENCE",
            "STUN",
            "VULNERABLE"
        ],
        "stats": {
            "cooldown": 4,
            "cost": 60,
            "damage": 78
        },
        "description": "** Apply [Silence] + [Stun] for 1 turn, then [Vulnerable] for 2 turns. Costs 25 Insight.\r\n    * **Evo A (Extended Protocol):** All durations +1 turn.\r\n    * **Evo B (Economic Protocol):** Cost reduced to 20 Insight.",
        "lore_quote": "\"The Ashram teaches us to look within; we look through.\"",
        "tactical_brief": "Deploy Lockdown Protocol to leverage SILENCE, STUN, VULNERABLE.  Apply [Silence] + [Stun] for 1 turn, then [Vulnerable] for ...",
        "mastery_perk": "Mastery Lvl 5: (Extended Protocol): All durations +1 turn.\r\n    * Evo B (Economic Protocol): Cost reduced to 20 Insight.",
        "gameplay_info": {
            "usage": [
                "Cost: 60 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": [
                "Silence",
                "Stun",
                "Vulnerable"
            ]
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Character Analysis use this to manipulate undefined.",
            "evolution": "Potential evolution: Economic Protocol"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 78,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_016",
        "name": "Pattern Recognition",
        "type": "ACTIVE",
        "tier": "COMMON",
        "tags": [],
        "stats": {
            "cooldown": 1,
            "cost": 25,
            "damage": 25
        },
        "description": "** For 3 turns, each enemy action grants you 1 Insight.\r\n    * **Evo A (Deep Recognition):** Gain 2 Insight per action.\r\n    * **Evo B (Extended Recognition):** Duration 4 turns.",
        "lore_quote": "\"Patterns emerge if you look close enough.\"",
        "tactical_brief": "Deploy Pattern Recognition to leverage .  For 3 turns, each enemy action grants you 1 Insight.     * ...",
        "mastery_perk": "Mastery Lvl 5: (Deep Recognition): Gain 2 Insight per action.\r\n    * Evo B (Extended Recognition): Duration 4 turns.",
        "gameplay_info": {
            "usage": [
                "Cost: 25 Gnosis",
                "Cooldown: 1 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Character Analysis use this to manipulate offense.",
            "evolution": "Potential evolution: Extended Recognition"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 25,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_017",
        "name": "Disruptor Spike",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "SILENCE"
        ],
        "stats": {
            "cooldown": 2,
            "cost": 35,
            "damage": 49
        },
        "description": "** Interrupt target's current action and apply [Silence] (1 turn). Once per 3 turns.\r\n    * **Evo A (Multi-Disrupt):** Can interrupt 2 targets.\r\n    * **Evo B (Punishing Disrupt):** Also deal 20 damage.",
        "lore_quote": "\"Patterns emerge if you look close enough.\"",
        "tactical_brief": "Deploy Disruptor Spike to leverage SILENCE.  Interrupt target's current action and apply [Silence] (1 tu...",
        "mastery_perk": "Mastery Lvl 5: (Multi-Disrupt): Can interrupt 2 targets.\r\n    * Evo B (Punishing Disrupt): Also deal 20 damage.",
        "gameplay_info": {
            "usage": [
                "Cost: 35 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": [
                "Silence"
            ]
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Character Analysis use this to manipulate offense.",
            "evolution": "Potential evolution: Punishing Disrupt"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 49,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_018",
        "name": "Judicial Verdict",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [
            "STUN"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 55,
            "damage": 73
        },
        "description": "** If target has 4+ debuffs, deal 60 damage and [Stun] (1 turn). Once per duel.\r\n    * **Evo A (Harsh Verdict):** Damage increased to 90.\r\n    * **Evo B (Merciful Verdict):** Usable at 3 debuffs instead.",
        "lore_quote": "\"Patterns emerge if you look close enough.\"",
        "tactical_brief": "Deploy Judicial Verdict to leverage STUN.  If target has 4+ debuffs, deal 60 damage and [Stun] (1 turn...",
        "mastery_perk": "Mastery Lvl 5: (Harsh Verdict): Damage increased to 90.\r\n    * Evo B (Merciful Verdict): Usable at 3 debuffs instead.",
        "gameplay_info": {
            "usage": [
                "Cost: 55 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Stun"
            ]
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Character Analysis use this to manipulate offense.",
            "evolution": "Potential evolution: Merciful Verdict"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 73,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_019",
        "name": "Control Amplifier",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "SILENCE",
            "STUN"
        ],
        "stats": {
            "cooldown": 2,
            "cost": 40,
            "damage": 52
        },
        "description": "** For 2 turns, all [Silence] and [Stun] you apply have +1 turn duration.\r\n    * **Evo A (Perfect Amplification):** +2 turns duration instead.\r\n    * **Evo B (Extended Amplifier):** Duration 3 turns.",
        "lore_quote": "\"The Ashram teaches us to look within; we look through.\"",
        "tactical_brief": "Deploy Control Amplifier to leverage SILENCE, STUN.  For 2 turns, all [Silence] and [Stun] you apply have +1 tur...",
        "mastery_perk": "Mastery Lvl 5: (Perfect Amplification): +2 turns duration instead.\r\n    * Evo B (Extended Amplifier): Duration 3 turns.",
        "gameplay_info": {
            "usage": [
                "Cost: 40 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": [
                "Silence",
                "Stun"
            ]
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Character Analysis use this to manipulate undefined.",
            "evolution": "Potential evolution: Extended Amplifier"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 52,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_020",
        "name": "Absolute Authority",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [
            "SILENCE",
            "VULNERABLE",
            "STUN"
        ],
        "stats": {
            "cooldown": 4,
            "cost": 70,
            "damage": 80
        },
        "description": "** Apply [Silence] + [Vulnerable] + [Stun] to target for 1 turn each. Costs 30 Insight. Once per duel.\r\n    * **Evo A (Extended Authority):** All effects 2 turns.\r\n    * **Evo B (Aura Authority):** Affects 3x3 area.\r\n\r\n---\r\n\r\n### **WATCHER PATH (Tempo Focus) \u2014 20 Skills**",
        "lore_quote": "\"Identity is a construct we can deconstruct.\"",
        "tactical_brief": "Deploy Absolute Authority to leverage SILENCE, VULNERABLE, STUN.  Apply [Silence] + [Vulnerable] + [Stun] to target for 1 tur...",
        "mastery_perk": "Mastery Lvl 5: (Extended Authority): All effects 2 turns.\r\n    * Evo B (Aura Authority): Affects 3x3 area.\r\n\r\n---\r\n\r\n### WATCHER PATH (Tempo Focus) \u2014 20 Skills",
        "gameplay_info": {
            "usage": [
                "Cost: 70 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": [
                "Silence",
                "Vulnerable",
                "Stun"
            ]
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Character Analysis use this to manipulate undefined.",
            "evolution": "Potential evolution: Aura Authority"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 80,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_021",
        "name": "Quick Study",
        "type": "ACTIVE",
        "tier": "COMMON",
        "tags": [
            "ANALYZE"
        ],
        "stats": {
            "cooldown": 1,
            "cost": 15,
            "damage": 5
        },
        "description": "** [Analyze] target, gain 1 Insight. 0 cooldown.\r\n    * **Evo A (Efficient Study):** Gain 2 Insight instead.\r\n    * **Evo B (Multi-Study):** Can analyze 2 targets.",
        "lore_quote": "\"To dismantle the system, one must understand its code.\"",
        "tactical_brief": "Deploy Quick Study to leverage ANALYZE.  [Analyze] target, gain 1 Insight. 0 cooldown.     * Evo A (...",
        "mastery_perk": "Mastery Lvl 5: (Efficient Study): Gain 2 Insight instead.\r\n    * Evo B (Multi-Study): Can analyze 2 targets.",
        "gameplay_info": {
            "usage": [
                "Cost: 15 Gnosis",
                "Cooldown: 1 Turns"
            ],
            "features": [
                "Analyze"
            ]
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Character Analysis use this to manipulate undefined.",
            "evolution": "Potential evolution: Multi-Study"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 5,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_022",
        "name": "Tempo Mark",
        "type": "ACTIVE",
        "tier": "COMMON",
        "tags": [
            "MARK"
        ],
        "stats": {
            "cooldown": 1,
            "cost": 20,
            "damage": 26
        },
        "description": "** [Mark] target. Your next action against them has 0 cooldown.\r\n    * **Evo A (Double Tempo):** Next 2 actions have 0 cooldown.\r\n    * **Evo B (Insight Tempo):** Also gain 2 Insight.",
        "lore_quote": "\"The Architects hide their flaws, but we see them.\"",
        "tactical_brief": "Deploy Tempo Mark to leverage MARK.  [Mark] target. Your next action against them has 0 cooldown...",
        "mastery_perk": "Mastery Lvl 5: (Double Tempo): Next 2 actions have 0 cooldown.\r\n    * Evo B (Insight Tempo): Also gain 2 Insight.",
        "gameplay_info": {
            "usage": [
                "Cost: 20 Gnosis",
                "Cooldown: 1 Turns"
            ],
            "features": [
                "Mark"
            ]
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Character Analysis use this to manipulate undefined.",
            "evolution": "Potential evolution: Insight Tempo"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 26,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_023",
        "name": "Rapid Assessment",
        "type": "ACTIVE",
        "tier": "COMMON",
        "tags": [],
        "stats": {
            "cooldown": 1,
            "cost": 25,
            "damage": 25
        },
        "description": "** Gain 3 Insight instantly. Cooldown: 2 turns.\r\n    * **Evo A (Deep Assessment):** Gain 5 Insight instead.\r\n    * **Evo B (Frequent Assessment):** Cooldown reduced to 1 turn.",
        "lore_quote": "\"Every Remnant carries the scars of the Fall.\"",
        "tactical_brief": "Deploy Rapid Assessment to leverage .  Gain 3 Insight instantly. Cooldown: 2 turns.     * Evo A (D...",
        "mastery_perk": "Mastery Lvl 5: (Deep Assessment): Gain 5 Insight instead.\r\n    * Evo B (Frequent Assessment): Cooldown reduced to 1 turn.",
        "gameplay_info": {
            "usage": [
                "Cost: 25 Gnosis",
                "Cooldown: 1 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Character Analysis use this to manipulate undefined.",
            "evolution": "Potential evolution: Frequent Assessment"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 25,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_024",
        "name": "Momentum Shift",
        "type": "ACTIVE",
        "tier": "COMMON",
        "tags": [],
        "stats": {
            "cooldown": 2,
            "cost": 30,
            "damage": 26
        },
        "description": "** Refresh 1 cooldown immediately. Costs 10 Insight.\r\n    * **Evo A (Mass Refresh):** Refresh 2 cooldowns.\r\n    * **Evo B (Economic Refresh):** Cost reduced to 8 Insight.",
        "lore_quote": "\"The Architects hide their flaws, but we see them.\"",
        "tactical_brief": "Deploy Momentum Shift to leverage .  Refresh 1 cooldown immediately. Costs 10 Insight.     * Evo...",
        "mastery_perk": "Mastery Lvl 5: (Mass Refresh): Refresh 2 cooldowns.\r\n    * Evo B (Economic Refresh): Cost reduced to 8 Insight.",
        "gameplay_info": {
            "usage": [
                "Cost: 30 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Character Analysis use this to manipulate undefined.",
            "evolution": "Potential evolution: Economic Refresh"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 26,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_025",
        "name": "Prediction Engine",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 2,
            "cost": 35,
            "damage": 47
        },
        "description": "** Predict enemy's next action. If correct, gain 5 Insight and reduce your next glyph cost by 2 KP.\r\n    * **Evo A (Perfect Prediction):** Gain 8 Insight instead.\r\n    * **Evo B (Extended Prediction):** Predict their next 2 actions.",
        "lore_quote": "\"Patterns emerge if you look close enough.\"",
        "tactical_brief": "Deploy Prediction Engine to leverage .  Predict enemy's next action. If correct, gain 5 Insight and...",
        "mastery_perk": "Mastery Lvl 5: (Perfect Prediction): Gain 8 Insight instead.\r\n    * Evo B (Extended Prediction): Predict their next 2 actions.",
        "gameplay_info": {
            "usage": [
                "Cost: 35 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Character Analysis use this to manipulate offense.",
            "evolution": "Potential evolution: Extended Prediction"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 47,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_026",
        "name": "Tempo Steal",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 2,
            "cost": 40,
            "damage": 48
        },
        "description": "** Target loses 2 KP, you gain 2 Insight.\r\n    * **Evo A (Heavy Steal):** Target loses 4 KP.\r\n    * **Evo B (Efficient Steal):** You gain 4 Insight.",
        "lore_quote": "\"Patterns emerge if you look close enough.\"",
        "tactical_brief": "Deploy Tempo Steal to leverage .  Target loses 2 KP, you gain 2 Insight.     * Evo A (Heavy S...",
        "mastery_perk": "Mastery Lvl 5: (Heavy Steal): Target loses 4 KP.\r\n    * Evo B (Efficient Steal): You gain 4 Insight.",
        "gameplay_info": {
            "usage": [
                "Cost: 40 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Character Analysis use this to manipulate undefined.",
            "evolution": "Potential evolution: Efficient Steal"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 48,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_027",
        "name": "Clockwork Precision",
        "type": "ACTIVE",
        "tier": "COMMON",
        "tags": [],
        "stats": {
            "cooldown": 2,
            "cost": 30,
            "damage": 26
        },
        "description": "** For 2 turns, your first glyph each turn has -1 cooldown.\r\n    * **Evo A (Perfect Timing):** -2 cooldown instead.\r\n    * **Evo B (Extended Timing):** Duration 3 turns.",
        "lore_quote": "\"Identity is just another variable to be optimized.\"",
        "tactical_brief": "Deploy Clockwork Precision to leverage .  For 2 turns, your first glyph each turn has -1 cooldown.   ...",
        "mastery_perk": "Mastery Lvl 5: (Perfect Timing): -2 cooldown instead.\r\n    * Evo B (Extended Timing): Duration 3 turns.",
        "gameplay_info": {
            "usage": [
                "Cost: 30 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Character Analysis use this to manipulate undefined.",
            "evolution": "Potential evolution: Extended Timing"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 26,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_028",
        "name": "Insight Burst",
        "type": "ACTIVE",
        "tier": "COMMON",
        "tags": [],
        "stats": {
            "cooldown": 1,
            "cost": 25,
            "damage": 25
        },
        "description": "** Convert 3 KP to 6 Insight.\r\n    * **Evo A (Efficient Burst):** 3 KP \u2192 9 Insight.\r\n    * **Evo B (Mass Burst):** 5 KP \u2192 12 Insight.",
        "lore_quote": "\"Every Remnant carries the scars of the Fall.\"",
        "tactical_brief": "Deploy Insight Burst to leverage .  Convert 3 KP to 6 Insight.     * Evo A (Efficient Burst): 3...",
        "mastery_perk": "Mastery Lvl 5: (Efficient Burst): 3 KP \u2192 9 Insight.\r\n    * Evo B (Mass Burst): 5 KP \u2192 12 Insight.",
        "gameplay_info": {
            "usage": [
                "Cost: 25 Gnosis",
                "Cooldown: 1 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Character Analysis use this to manipulate undefined.",
            "evolution": "Potential evolution: Mass Burst"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 25,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_029",
        "name": "Window Detection",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "VULNERABLE",
            "STRIKE"
        ],
        "stats": {
            "cooldown": 2,
            "cost": 35,
            "damage": 51
        },
        "description": "** When target is [Vulnerable], your next [Strike] has 0 cooldown and deals +30% damage.\r\n    * **Evo A (Extended Window):** +50% damage instead.\r\n    * **Evo B (Multi-Window):** Can trigger twice per turn.",
        "lore_quote": "\"Patterns emerge if you look close enough.\"",
        "tactical_brief": "Deploy Window Detection to leverage VULNERABLE, STRIKE.  When target is [Vulnerable], your next [Strike] has 0 coold...",
        "mastery_perk": "Mastery Lvl 5: (Extended Window): +50% damage instead.\r\n    * Evo B (Multi-Window): Can trigger twice per turn.",
        "gameplay_info": {
            "usage": [
                "Cost: 35 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": [
                "Vulnerable",
                "Strike"
            ]
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Character Analysis use this to manipulate offense.",
            "evolution": "Potential evolution: Multi-Window"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 51,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_030",
        "name": "Adaptive Rhythm",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "ANALYZE"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 45,
            "damage": 51
        },
        "description": "** For 3 turns, each [Analyze] you cast reduces all other cooldowns by 1.\r\n    * **Evo A (Perfect Rhythm):** Reduces by 2 instead.\r\n    * **Evo B (Extended Rhythm):** Duration 4 turns.",
        "lore_quote": "\"The Ashram teaches us to look within; we look through.\"",
        "tactical_brief": "Deploy Adaptive Rhythm to leverage ANALYZE.  For 3 turns, each [Analyze] you cast reduces all other cool...",
        "mastery_perk": "Mastery Lvl 5: (Perfect Rhythm): Reduces by 2 instead.\r\n    * Evo B (Extended Rhythm): Duration 4 turns.",
        "gameplay_info": {
            "usage": [
                "Cost: 45 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Analyze"
            ]
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Character Analysis use this to manipulate undefined.",
            "evolution": "Potential evolution: Extended Rhythm"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 51,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_031",
        "name": "Blitz Analysis",
        "type": "ACTIVE",
        "tier": "COMMON",
        "tags": [
            "ANALYZE"
        ],
        "stats": {
            "cooldown": 2,
            "cost": 30,
            "damage": 28
        },
        "description": "** [Analyze] all enemies simultaneously. Gain 1 Insight per target.\r\n    * **Evo A (Deep Blitz):** Gain 2 Insight per target.\r\n    * **Evo B (Economic Blitz):** Cost -2 KP.",
        "lore_quote": "\"Identity is just another variable to be optimized.\"",
        "tactical_brief": "Deploy Blitz Analysis to leverage ANALYZE.  [Analyze] all enemies simultaneously. Gain 1 Insight per ta...",
        "mastery_perk": "Mastery Lvl 5: (Deep Blitz): Gain 2 Insight per target.\r\n    * Evo B (Economic Blitz): Cost -2 KP.",
        "gameplay_info": {
            "usage": [
                "Cost: 30 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": [
                "Analyze"
            ]
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Character Analysis use this to manipulate offense.",
            "evolution": "Potential evolution: Economic Blitz"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 28,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_032",
        "name": "Cascade Refresh",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "EXPOSE"
        ],
        "stats": {
            "cooldown": 2,
            "cost": 40,
            "damage": 50
        },
        "description": "** When you consume [Expose], also refresh an additional random cooldown.\r\n    * **Evo A (Perfect Cascade):** Refresh 2 additional cooldowns.\r\n    * **Evo B (Selective Cascade):** Choose which cooldown to refresh.",
        "lore_quote": "\"Identity is a construct we can deconstruct.\"",
        "tactical_brief": "Deploy Cascade Refresh to leverage EXPOSE.  When you consume [Expose], also refresh an additional rando...",
        "mastery_perk": "Mastery Lvl 5: (Perfect Cascade): Refresh 2 additional cooldowns.\r\n    * Evo B (Selective Cascade): Choose which cooldown to refresh.",
        "gameplay_info": {
            "usage": [
                "Cost: 40 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": [
                "Expose"
            ]
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Character Analysis use this to manipulate undefined.",
            "evolution": "Potential evolution: Selective Cascade"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 50,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_033",
        "name": "Velocity Protocol",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 2,
            "cost": 35,
            "damage": 47
        },
        "description": "** For 2 turns, all your glyphs have -1 cooldown (minimum 0).\r\n    * **Evo A (Perfect Velocity):** -2 cooldown instead.\r\n    * **Evo B (Extended Velocity):** Duration 3 turns.",
        "lore_quote": "\"To dismantle the system, one must understand its code.\"",
        "tactical_brief": "Deploy Velocity Protocol to leverage .  For 2 turns, all your glyphs have -1 cooldown (minimum 0). ...",
        "mastery_perk": "Mastery Lvl 5: (Perfect Velocity): -2 cooldown instead.\r\n    * Evo B (Extended Velocity): Duration 3 turns.",
        "gameplay_info": {
            "usage": [
                "Cost: 35 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Character Analysis use this to manipulate undefined.",
            "evolution": "Potential evolution: Extended Velocity"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 47,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_034",
        "name": "Opportunist Strike",
        "type": "ACTIVE",
        "tier": "COMMON",
        "tags": [
            "MARKED"
        ],
        "stats": {
            "cooldown": 2,
            "cost": 30,
            "damage": 28
        },
        "description": "** Deal 25 damage. If target is [Marked], deal 40 instead and gain 3 Insight.\r\n    * **Evo A (Perfect Strike):** Damage 35/60 instead.\r\n    * **Evo B (Efficient Strike):** Cost -1 KP.",
        "lore_quote": "\"Identity is a construct we can deconstruct.\"",
        "tactical_brief": "Deploy Opportunist Strike to leverage MARKED.  Deal 25 damage. If target is [Marked], deal 40 instead and ...",
        "mastery_perk": "Mastery Lvl 5: (Perfect Strike): Damage 35/60 instead.\r\n    * Evo B (Efficient Strike): Cost -1 KP.",
        "gameplay_info": {
            "usage": [
                "Cost: 30 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": [
                "Marked"
            ]
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Character Analysis use this to manipulate offense.",
            "evolution": "Potential evolution: Efficient Strike"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 28,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_035",
        "name": "Temporal Advantage",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 50,
            "damage": 50
        },
        "description": "** Take an additional mini-turn immediately (can only use 1 glyph). Costs 15 Insight.\r\n    * **Evo A (Extended Turn):** Can use 2 glyphs.\r\n    * **Evo B (Economic Turn):** Cost 12 Insight.",
        "lore_quote": "\"Identity is a construct we can deconstruct.\"",
        "tactical_brief": "Deploy Temporal Advantage to leverage .  Take an additional mini-turn immediately (can only use 1 gl...",
        "mastery_perk": "Mastery Lvl 5: (Extended Turn): Can use 2 glyphs.\r\n    * Evo B (Economic Turn): Cost 12 Insight.",
        "gameplay_info": {
            "usage": [
                "Cost: 50 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Character Analysis use this to manipulate undefined.",
            "evolution": "Potential evolution: Economic Turn"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 50,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_036",
        "name": "Insight Overflow",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 2,
            "cost": 40,
            "damage": 48
        },
        "description": "** If you have 20+ Insight, convert 10 Insight to refresh all cooldowns. Once per 4 turns.\r\n    * **Evo A (Efficient Overflow):** Cost only 8 Insight.\r\n    * **Evo B (Frequent Overflow):** Cooldown reduced to 3 turns.",
        "lore_quote": "\"Identity is just another variable to be optimized.\"",
        "tactical_brief": "Deploy Insight Overflow to leverage .  If you have 20+ Insight, convert 10 Insight to refresh all ...",
        "mastery_perk": "Mastery Lvl 5: (Efficient Overflow): Cost only 8 Insight.\r\n    * Evo B (Frequent Overflow): Cooldown reduced to 3 turns.",
        "gameplay_info": {
            "usage": [
                "Cost: 40 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Character Analysis use this to manipulate undefined.",
            "evolution": "Potential evolution: Frequent Overflow"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 48,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_037",
        "name": "Perfect Timing",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "ANALYZE"
        ],
        "stats": {
            "cooldown": 2,
            "cost": 35,
            "damage": 49
        },
        "description": "** Deal 30 damage. If used immediately after [Analyze], deal 50 instead.\r\n    * **Evo A (Massive Timing):** Damage 40/70 instead.\r\n    * **Evo B (Insight Timing):** Also gain 3 Insight on combo.",
        "lore_quote": "\"To dismantle the system, one must understand its code.\"",
        "tactical_brief": "Deploy Perfect Timing to leverage ANALYZE.  Deal 30 damage. If used immediately after [Analyze], deal 5...",
        "mastery_perk": "Mastery Lvl 5: (Massive Timing): Damage 40/70 instead.\r\n    * Evo B (Insight Timing): Also gain 3 Insight on combo.",
        "gameplay_info": {
            "usage": [
                "Cost: 35 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": [
                "Analyze"
            ]
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Character Analysis use this to manipulate offense.",
            "evolution": "Potential evolution: Insight Timing"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 49,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_038",
        "name": "Momentum Chain",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 45,
            "damage": 49
        },
        "description": "** For 3 turns, each glyph you cast reduces the next glyph's cost by 1 KP (stacks up to 3).\r\n    * **Evo A (Perfect Chain):** Reduces by 2 KP per cast.\r\n    * **Evo B (Extended Chain):** Duration 4 turns.",
        "lore_quote": "\"Patterns emerge if you look close enough.\"",
        "tactical_brief": "Deploy Momentum Chain to leverage .  For 3 turns, each glyph you cast reduces the next glyph's c...",
        "mastery_perk": "Mastery Lvl 5: (Perfect Chain): Reduces by 2 KP per cast.\r\n    * Evo B (Extended Chain): Duration 4 turns.",
        "gameplay_info": {
            "usage": [
                "Cost: 45 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Character Analysis use this to manipulate undefined.",
            "evolution": "Potential evolution: Extended Chain"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 49,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_039",
        "name": "Cooldown Mastery",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 55,
            "damage": 71
        },
        "description": "** For 2 turns, all your glyphs have 0 cooldown. Costs 25 Insight. Once per duel.\r\n    * **Evo A (Extended Mastery):** Duration 3 turns.\r\n    * **Evo B (Economic Mastery):** Cost 20 Insight.",
        "lore_quote": "\"Every Remnant carries the scars of the Fall.\"",
        "tactical_brief": "Deploy Cooldown Mastery to leverage .  For 2 turns, all your glyphs have 0 cooldown. Costs 25 Insi...",
        "mastery_perk": "Mastery Lvl 5: (Extended Mastery): Duration 3 turns.\r\n    * Evo B (Economic Mastery): Cost 20 Insight.",
        "gameplay_info": {
            "usage": [
                "Cost: 55 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Character Analysis use this to manipulate undefined.",
            "evolution": "Potential evolution: Economic Mastery"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 71,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_040",
        "name": "Perpetual Motion",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [],
        "stats": {
            "cooldown": 4,
            "cost": 60,
            "damage": 72
        },
        "description": "** Passive: Each time you cast 3 glyphs in a turn, gain 5 Insight and refresh 1 random cooldown.\r\n    * **Evo A (Perfect Motion):** Gain 8 Insight instead.\r\n    * **Evo B (Selective Motion):** Choose which cooldown to refresh.\r\n\r\n---\r\n\r\n### **SABOTEUR PATH (Disruption Focus) \u2014 20 Skills**",
        "lore_quote": "\"Identity is just another variable to be optimized.\"",
        "tactical_brief": "Deploy Perpetual Motion to leverage .  Passive: Each time you cast 3 glyphs in a turn, gain 5 Insi...",
        "mastery_perk": "Mastery Lvl 5: (Perfect Motion): Gain 8 Insight instead.\r\n    * Evo B (Selective Motion): Choose which cooldown to refresh.\r\n\r\n---\r\n\r\n### SABOTEUR PATH (Disruption Focus) \u2014 20 Skills",
        "gameplay_info": {
            "usage": [
                "Cost: 60 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Character Analysis use this to manipulate undefined.",
            "evolution": "Potential evolution: Selective Motion"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 72,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_041",
        "name": "Cost Spike",
        "type": "ACTIVE",
        "tier": "COMMON",
        "tags": [],
        "stats": {
            "cooldown": 1,
            "cost": 25,
            "damage": 25
        },
        "description": "** Target's next glyph costs +2 KP.\r\n    * **Evo A (Heavy Spike):** +4 KP instead.\r\n    * **Evo B (Multi-Spike):** Affects their next 2 glyphs.",
        "lore_quote": "\"Every Remnant carries the scars of the Fall.\"",
        "tactical_brief": "Deploy Cost Spike to leverage .  Target's next glyph costs +2 KP.     * Evo A (Heavy Spike):...",
        "mastery_perk": "Mastery Lvl 5: (Heavy Spike): +4 KP instead.\r\n    * Evo B (Multi-Spike): Affects their next 2 glyphs.",
        "gameplay_info": {
            "usage": [
                "Cost: 25 Gnosis",
                "Cooldown: 1 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Character Analysis use this to manipulate undefined.",
            "evolution": "Potential evolution: Multi-Spike"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 25,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_042",
        "name": "Resource Drain",
        "type": "ACTIVE",
        "tier": "COMMON",
        "tags": [],
        "stats": {
            "cooldown": 2,
            "cost": 30,
            "damage": 26
        },
        "description": "** Target loses 3 KP. You gain 2 Insight.\r\n    * **Evo A (Deep Drain):** Target loses 5 KP.\r\n    * **Evo B (Efficient Drain):** You gain 4 Insight.",
        "lore_quote": "\"Every Remnant carries the scars of the Fall.\"",
        "tactical_brief": "Deploy Resource Drain to leverage .  Target loses 3 KP. You gain 2 Insight.     * Evo A (Deep Dr...",
        "mastery_perk": "Mastery Lvl 5: (Deep Drain): Target loses 5 KP.\r\n    * Evo B (Efficient Drain): You gain 4 Insight.",
        "gameplay_info": {
            "usage": [
                "Cost: 30 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Character Analysis use this to manipulate undefined.",
            "evolution": "Potential evolution: Efficient Drain"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 26,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_043",
        "name": "Hand Disruption",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 2,
            "cost": 35,
            "damage": 47
        },
        "description": "** Target discards 1 random card. Gain 3 Insight.\r\n    * **Evo A (Mass Disruption):** Discard 2 cards.\r\n    * **Evo B (Tactical Disruption):** You choose which card to discard.",
        "lore_quote": "\"The Architects hide their flaws, but we see them.\"",
        "tactical_brief": "Deploy Hand Disruption to leverage .  Target discards 1 random card. Gain 3 Insight.     * Evo A ...",
        "mastery_perk": "Mastery Lvl 5: (Mass Disruption): Discard 2 cards.\r\n    * Evo B (Tactical Disruption): You choose which card to discard.",
        "gameplay_info": {
            "usage": [
                "Cost: 35 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Character Analysis use this to manipulate undefined.",
            "evolution": "Potential evolution: Tactical Disruption"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 47,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_044",
        "name": "Cooldown Inflation",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 2,
            "cost": 40,
            "damage": 48
        },
        "description": "** Increase target's current cooldowns by 1 turn each.\r\n    * **Evo A (Heavy Inflation):** Increase by 2 turns.\r\n    * **Evo B (Selective Inflation):** Choose which cooldown to inflate.",
        "lore_quote": "\"Patterns emerge if you look close enough.\"",
        "tactical_brief": "Deploy Cooldown Inflation to leverage .  Increase target's current cooldowns by 1 turn each.     * E...",
        "mastery_perk": "Mastery Lvl 5: (Heavy Inflation): Increase by 2 turns.\r\n    * Evo B (Selective Inflation): Choose which cooldown to inflate.",
        "gameplay_info": {
            "usage": [
                "Cost: 40 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Character Analysis use this to manipulate undefined.",
            "evolution": "Potential evolution: Selective Inflation"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 48,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_045",
        "name": "Engine Sabotage",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 45,
            "damage": 49
        },
        "description": "** Target's primary engine has all glyphs cost +1 KP for 2 turns.\r\n    * **Evo A (Deep Sabotage):** +2 KP instead.\r\n    * **Evo B (Extended Sabotage):** Duration 3 turns.",
        "lore_quote": "\"Identity is a construct we can deconstruct.\"",
        "tactical_brief": "Deploy Engine Sabotage to leverage .  Target's primary engine has all glyphs cost +1 KP for 2 tur...",
        "mastery_perk": "Mastery Lvl 5: (Deep Sabotage): +2 KP instead.\r\n    * Evo B (Extended Sabotage): Duration 3 turns.",
        "gameplay_info": {
            "usage": [
                "Cost: 45 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Character Analysis use this to manipulate undefined.",
            "evolution": "Potential evolution: Extended Sabotage"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 49,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_046",
        "name": "Memory Scramble",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 2,
            "cost": 35,
            "damage": 47
        },
        "description": "** Target loses 5 Insight. If they don't have enough, take 10 damage per missing Insight.\r\n    * **Evo A (Deep Scramble):** Target loses 8 Insight.\r\n    * **Evo B (Punishing Scramble):** Damage increased to 15 per missing.",
        "lore_quote": "\"Identity is a construct we can deconstruct.\"",
        "tactical_brief": "Deploy Memory Scramble to leverage .  Target loses 5 Insight. If they don't have enough, take 10 ...",
        "mastery_perk": "Mastery Lvl 5: (Deep Scramble): Target loses 8 Insight.\r\n    * Evo B (Punishing Scramble): Damage increased to 15 per missing.",
        "gameplay_info": {
            "usage": [
                "Cost: 35 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Character Analysis use this to manipulate offense.",
            "evolution": "Potential evolution: Punishing Scramble"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 47,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_047",
        "name": "Draw Denial",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 2,
            "cost": 40,
            "damage": 48
        },
        "description": "** Target skips their next draw. You draw 1 additional card.\r\n    * **Evo A (Extended Denial):** They skip 2 draws.\r\n    * **Evo B (Insight Denial):** Also gain 4 Insight.",
        "lore_quote": "\"Every Remnant carries the scars of the Fall.\"",
        "tactical_brief": "Deploy Draw Denial to leverage .  Target skips their next draw. You draw 1 additional card.  ...",
        "mastery_perk": "Mastery Lvl 5: (Extended Denial): They skip 2 draws.\r\n    * Evo B (Insight Denial): Also gain 4 Insight.",
        "gameplay_info": {
            "usage": [
                "Cost: 40 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Character Analysis use this to manipulate undefined.",
            "evolution": "Potential evolution: Insight Denial"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 48,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_048",
        "name": "Trap Card",
        "type": "ACTIVE",
        "tier": "COMMON",
        "tags": [],
        "stats": {
            "cooldown": 2,
            "cost": 30,
            "damage": 26
        },
        "description": "** Set a trap. When target uses their next glyph, it costs +3 KP and deals 15 damage to them.\r\n    * **Evo A (Heavy Trap):** Damage increased to 30.\r\n    * **Evo B (Multi-Trap):** Affects their next 2 glyphs.",
        "lore_quote": "\"Patterns emerge if you look close enough.\"",
        "tactical_brief": "Deploy Trap Card to leverage .  Set a trap. When target uses their next glyph, it costs +3 ...",
        "mastery_perk": "Mastery Lvl 5: (Heavy Trap): Damage increased to 30.\r\n    * Evo B (Multi-Trap): Affects their next 2 glyphs.",
        "gameplay_info": {
            "usage": [
                "Cost: 30 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Character Analysis use this to manipulate offense.",
            "evolution": "Potential evolution: Multi-Trap"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 26,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_049",
        "name": "Economic Collapse",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 50,
            "damage": 50
        },
        "description": "** All enemies lose 2 KP. You gain 3 Insight per enemy affected.\r\n    * **Evo A (Total Collapse):** Enemies lose 4 KP.\r\n    * **Evo B (Efficient Collapse):** You gain 5 Insight per enemy.",
        "lore_quote": "\"Identity is just another variable to be optimized.\"",
        "tactical_brief": "Deploy Economic Collapse to leverage .  All enemies lose 2 KP. You gain 3 Insight per enemy affecte...",
        "mastery_perk": "Mastery Lvl 5: (Total Collapse): Enemies lose 4 KP.\r\n    * Evo B (Efficient Collapse): You gain 5 Insight per enemy.",
        "gameplay_info": {
            "usage": [
                "Cost: 50 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Character Analysis use this to manipulate offense.",
            "evolution": "Potential evolution: Efficient Collapse"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 50,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_050",
        "name": "Bandwidth Leak",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "VULNERABLE",
            "VULNERABLE"
        ],
        "stats": {
            "cooldown": 2,
            "cost": 35,
            "damage": 51
        },
        "description": "** Target loses 3 Bandwidth. If they don't have enough, apply [Vulnerable] (2 turns).\r\n    * **Evo A (Deep Leak):** Target loses 5 Bandwidth.\r\n    * **Evo B (Punishing Leak):** [Vulnerable] duration 3 turns.",
        "lore_quote": "\"Identity is a construct we can deconstruct.\"",
        "tactical_brief": "Deploy Bandwidth Leak to leverage VULNERABLE, VULNERABLE.  Target loses 3 Bandwidth. If they don't have enough, apply ...",
        "mastery_perk": "Mastery Lvl 5: (Deep Leak): Target loses 5 Bandwidth.\r\n    * Evo B (Punishing Leak): [Vulnerable] duration 3 turns.",
        "gameplay_info": {
            "usage": [
                "Cost: 35 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": [
                "Vulnerable",
                "Vulnerable"
            ]
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Character Analysis use this to manipulate undefined.",
            "evolution": "Potential evolution: Punishing Leak"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 51,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_051",
        "name": "Plan Disruption",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 2,
            "cost": 40,
            "damage": 48
        },
        "description": "** Target must reveal their next planned action and it costs +2 KP. Gain 3 Insight.\r\n    * **Evo A (Deep Disruption):** Reveal their next 2 actions.\r\n    * **Evo B (Heavy Disruption):** Cost increase +4 KP.",
        "lore_quote": "\"Identity is a construct we can deconstruct.\"",
        "tactical_brief": "Deploy Plan Disruption to leverage .  Target must reveal their next planned action and it costs +...",
        "mastery_perk": "Mastery Lvl 5: (Deep Disruption): Reveal their next 2 actions.\r\n    * Evo B (Heavy Disruption): Cost increase +4 KP.",
        "gameplay_info": {
            "usage": [
                "Cost: 40 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Character Analysis use this to manipulate undefined.",
            "evolution": "Potential evolution: Heavy Disruption"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 48,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_052",
        "name": "Cascade Corruption",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "EXPOSE",
            "EXPOSE"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 45,
            "damage": 53
        },
        "description": "** Apply [Expose]. While active, each glyph target uses costs +1 KP.\r\n    * **Evo A (Deep Corruption):** +2 KP instead.\r\n    * **Evo B (Extended Corruption):** [Expose] lasts 3 turns.",
        "lore_quote": "\"The Architects hide their flaws, but we see them.\"",
        "tactical_brief": "Deploy Cascade Corruption to leverage EXPOSE, EXPOSE.  Apply [Expose]. While active, each glyph target uses costs ...",
        "mastery_perk": "Mastery Lvl 5: (Deep Corruption): +2 KP instead.\r\n    * Evo B (Extended Corruption): [Expose] lasts 3 turns.",
        "gameplay_info": {
            "usage": [
                "Cost: 45 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Expose",
                "Expose"
            ]
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Character Analysis use this to manipulate undefined.",
            "evolution": "Potential evolution: Extended Corruption"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 53,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_053",
        "name": "Resource Lock",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 50,
            "damage": 50
        },
        "description": "** For 2 turns, target cannot gain KP from any source.\r\n    * **Evo A (Perfect Lock):** Duration 3 turns.\r\n    * **Evo B (Multi-Lock):** Affects 2 enemies.",
        "lore_quote": "\"Patterns emerge if you look close enough.\"",
        "tactical_brief": "Deploy Resource Lock to leverage .  For 2 turns, target cannot gain KP from any source.     * E...",
        "mastery_perk": "Mastery Lvl 5: (Perfect Lock): Duration 3 turns.\r\n    * Evo B (Multi-Lock): Affects 2 enemies.",
        "gameplay_info": {
            "usage": [
                "Cost: 50 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Character Analysis use this to manipulate offense.",
            "evolution": "Potential evolution: Multi-Lock"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 50,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_054",
        "name": "Deck Poison",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 2,
            "cost": 40,
            "damage": 48
        },
        "description": "** For 3 turns, target's first glyph each turn costs +2 KP.\r\n    * **Evo A (Deep Poison):** +3 KP instead.\r\n    * **Evo B (Extended Poison):** Duration 4 turns.",
        "lore_quote": "\"Identity is a construct we can deconstruct.\"",
        "tactical_brief": "Deploy Deck Poison to leverage .  For 3 turns, target's first glyph each turn costs +2 KP.   ...",
        "mastery_perk": "Mastery Lvl 5: (Deep Poison): +3 KP instead.\r\n    * Evo B (Extended Poison): Duration 4 turns.",
        "gameplay_info": {
            "usage": [
                "Cost: 40 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Character Analysis use this to manipulate undefined.",
            "evolution": "Potential evolution: Extended Poison"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 48,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_055",
        "name": "Priority Steal",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 2,
            "cost": 35,
            "damage": 47
        },
        "description": "** You act before target next turn, regardless of initiative.\r\n    * **Evo A (Mass Steal):** Affects 2 enemies.\r\n    * **Evo B (Insight Steal):** Also gain 4 Insight.",
        "lore_quote": "\"Patterns emerge if you look close enough.\"",
        "tactical_brief": "Deploy Priority Steal to leverage .  You act before target next turn, regardless of initiative. ...",
        "mastery_perk": "Mastery Lvl 5: (Mass Steal): Affects 2 enemies.\r\n    * Evo B (Insight Steal): Also gain 4 Insight.",
        "gameplay_info": {
            "usage": [
                "Cost: 35 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Character Analysis use this to manipulate offense.",
            "evolution": "Potential evolution: Insight Steal"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 47,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_056",
        "name": "System Overload",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 55,
            "damage": 71
        },
        "description": "** Target's next 3 glyphs each cost +2 KP and have +1 cooldown. Costs 15 Insight.\r\n    * **Evo A (Perfect Overload):** +3 KP and +2 cooldown.\r\n    * **Evo B (Extended Overload):** Affects next 4 glyphs.",
        "lore_quote": "\"To dismantle the system, one must understand its code.\"",
        "tactical_brief": "Deploy System Overload to leverage .  Target's next 3 glyphs each cost +2 KP and have +1 cooldown...",
        "mastery_perk": "Mastery Lvl 5: (Perfect Overload): +3 KP and +2 cooldown.\r\n    * Evo B (Extended Overload): Affects next 4 glyphs.",
        "gameplay_info": {
            "usage": [
                "Cost: 55 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Character Analysis use this to manipulate undefined.",
            "evolution": "Potential evolution: Extended Overload"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 71,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_057",
        "name": "Mana Burn",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 45,
            "damage": 49
        },
        "description": "** Target loses 5 KP and takes 10 damage per KP lost.\r\n    * **Evo A (Deep Burn):** Damage increased to 15 per KP.\r\n    * **Evo B (Mass Burn):** Affects all enemies.",
        "lore_quote": "\"Identity is just another variable to be optimized.\"",
        "tactical_brief": "Deploy Mana Burn to leverage .  Target loses 5 KP and takes 10 damage per KP lost.     * Ev...",
        "mastery_perk": "Mastery Lvl 5: (Deep Burn): Damage increased to 15 per KP.\r\n    * Evo B (Mass Burn): Affects all enemies.",
        "gameplay_info": {
            "usage": [
                "Cost: 45 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Character Analysis use this to manipulate offense.",
            "evolution": "Potential evolution: Mass Burn"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 49,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_058",
        "name": "Denial Field",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 50,
            "damage": 50
        },
        "description": "** Create 3x3 zone for 2 turns: Enemies inside lose 1 KP at start of their turn.\r\n    * **Evo A (Heavy Denial):** Lose 2 KP instead.\r\n    * **Evo B (Extended Denial):** Duration 3 turns.",
        "lore_quote": "\"The Architects hide their flaws, but we see them.\"",
        "tactical_brief": "Deploy Denial Field to leverage .  Create 3x3 zone for 2 turns: Enemies inside lose 1 KP at st...",
        "mastery_perk": "Mastery Lvl 5: (Heavy Denial): Lose 2 KP instead.\r\n    * Evo B (Extended Denial): Duration 3 turns.",
        "gameplay_info": {
            "usage": [
                "Cost: 50 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Character Analysis use this to manipulate offense.",
            "evolution": "Potential evolution: Extended Denial"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 50,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_059",
        "name": "Total Disruption",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [],
        "stats": {
            "cooldown": 4,
            "cost": 60,
            "damage": 72
        },
        "description": "** Target loses 5 KP, discards 1 card, and all cooldowns increase by 1. Costs 20 Insight. Once per duel.\r\n    * **Evo A (Perfect Disruption):** Discard 2 cards and cooldowns +2.\r\n    * **Evo B (Economic Disruption):** Cost 15 Insight.",
        "lore_quote": "\"Patterns emerge if you look close enough.\"",
        "tactical_brief": "Deploy Total Disruption to leverage .  Target loses 5 KP, discards 1 card, and all cooldowns incre...",
        "mastery_perk": "Mastery Lvl 5: (Perfect Disruption): Discard 2 cards and cooldowns +2.\r\n    * Evo B (Economic Disruption): Cost 15 Insight.",
        "gameplay_info": {
            "usage": [
                "Cost: 60 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Character Analysis use this to manipulate undefined.",
            "evolution": "Potential evolution: Economic Disruption"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 72,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_060",
        "name": "Chaos Protocol",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [],
        "stats": {
            "cooldown": 4,
            "cost": 65,
            "damage": 73
        },
        "description": "** All enemies' next glyph costs +3 KP. You gain 2 Insight per enemy affected. Once per duel.\r\n    * **Evo A (Perfect Chaos):** +5 KP instead.\r\n    * **Evo B (Extended Chaos):** Affects their next 2 glyphs.\r\n\r\n---\r\n\r\n### **ARBITER PATH (Hybrid Focus) \u2014 20 Skills**",
        "lore_quote": "\"To dismantle the system, one must understand its code.\"",
        "tactical_brief": "Deploy Chaos Protocol to leverage .  All enemies' next glyph costs +3 KP. You gain 2 Insight per...",
        "mastery_perk": "Mastery Lvl 5: (Perfect Chaos): +5 KP instead.\r\n    * Evo B (Extended Chaos): Affects their next 2 glyphs.\r\n\r\n---\r\n\r\n### ARBITER PATH (Hybrid Focus) \u2014 20 Skills",
        "gameplay_info": {
            "usage": [
                "Cost: 65 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Character Analysis use this to manipulate offense.",
            "evolution": "Potential evolution: Extended Chaos"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 73,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_061",
        "name": "Defensive Analysis",
        "type": "ACTIVE",
        "tier": "COMMON",
        "tags": [
            "ANALYZE"
        ],
        "stats": {
            "cooldown": 1,
            "cost": 20,
            "damage": 26
        },
        "description": "** [Analyze] target and gain 2 Insight. Also grant yourself 10 Shield.\r\n    * **Evo A (Deep Defense):** Shield increased to 15.\r\n    * **Evo B (Multi-Defense):** Also grant ally 10 Shield.",
        "lore_quote": "\"The Ashram teaches us to look within; we look through.\"",
        "tactical_brief": "Deploy Defensive Analysis to leverage ANALYZE.  [Analyze] target and gain 2 Insight. Also grant yourself 10...",
        "mastery_perk": "Mastery Lvl 5: (Deep Defense): Shield increased to 15.\r\n    * Evo B (Multi-Defense): Also grant ally 10 Shield.",
        "gameplay_info": {
            "usage": [
                "Cost: 20 Gnosis",
                "Cooldown: 1 Turns"
            ],
            "features": [
                "Analyze"
            ]
        },
        "deep_data": {
            "environment": "Resonates with support.",
            "narrative": "Practitioners of Character Analysis use this to manipulate support.",
            "evolution": "Potential evolution: Multi-Defense"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 26,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_062",
        "name": "Counter Mark",
        "type": "ACTIVE",
        "tier": "COMMON",
        "tags": [
            "MARK"
        ],
        "stats": {
            "cooldown": 1,
            "cost": 25,
            "damage": 27
        },
        "description": "** When you take damage, automatically [Mark] the attacker. Cooldown: 2 turns.\r\n    * **Evo A (Perfect Counter):** Cooldown reduced to 1 turn.\r\n    * **Evo B (Aggressive Counter):** Also deal 10 damage to attacker.",
        "lore_quote": "\"To dismantle the system, one must understand its code.\"",
        "tactical_brief": "Deploy Counter Mark to leverage MARK.  When you take damage, automatically [Mark] the attacker. Co...",
        "mastery_perk": "Mastery Lvl 5: (Perfect Counter): Cooldown reduced to 1 turn.\r\n    * Evo B (Aggressive Counter): Also deal 10 damage to attacker.",
        "gameplay_info": {
            "usage": [
                "Cost: 25 Gnosis",
                "Cooldown: 1 Turns"
            ],
            "features": [
                "Mark"
            ]
        },
        "deep_data": {
            "environment": "Resonates with support, offense.",
            "narrative": "Practitioners of Character Analysis use this to manipulate support.",
            "evolution": "Potential evolution: Aggressive Counter"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 27,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_063",
        "name": "Purifying Insight",
        "type": "ACTIVE",
        "tier": "COMMON",
        "tags": [
            "CLEANSE",
            "CLEANSE"
        ],
        "stats": {
            "cooldown": 2,
            "cost": 30,
            "damage": 30
        },
        "description": "** [Cleanse] 1 debuff from yourself and gain 3 Insight.\r\n    * **Evo A (Deep Purge):** [Cleanse] 2 debuffs.\r\n    * **Evo B (Mass Purge):** Also cleanse 1 debuff from ally.",
        "lore_quote": "\"Every Remnant carries the scars of the Fall.\"",
        "tactical_brief": "Deploy Purifying Insight to leverage CLEANSE, CLEANSE.  [Cleanse] 1 debuff from yourself and gain 3 Insight.     * ...",
        "mastery_perk": "Mastery Lvl 5: (Deep Purge): [Cleanse] 2 debuffs.\r\n    * Evo B (Mass Purge): Also cleanse 1 debuff from ally.",
        "gameplay_info": {
            "usage": [
                "Cost: 30 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": [
                "Cleanse",
                "Cleanse"
            ]
        },
        "deep_data": {
            "environment": "Resonates with support.",
            "narrative": "Practitioners of Character Analysis use this to manipulate support.",
            "evolution": "Potential evolution: Mass Purge"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 30,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_064",
        "name": "Retributive Analysis",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "ANALYZE"
        ],
        "stats": {
            "cooldown": 2,
            "cost": 35,
            "damage": 49
        },
        "description": "** [Analyze] attacker when you take damage. Deal 20 damage back and gain 2 Insight.\r\n    * **Evo A (Heavy Retaliation):** Damage increased to 35.\r\n    * **Evo B (Efficient Retaliation):** Gain 4 Insight.",
        "lore_quote": "\"Identity is a construct we can deconstruct.\"",
        "tactical_brief": "Deploy Retributive Analysis to leverage ANALYZE.  [Analyze] attacker when you take damage. Deal 20 damage bac...",
        "mastery_perk": "Mastery Lvl 5: (Heavy Retaliation): Damage increased to 35.\r\n    * Evo B (Efficient Retaliation): Gain 4 Insight.",
        "gameplay_info": {
            "usage": [
                "Cost: 35 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": [
                "Analyze"
            ]
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Character Analysis use this to manipulate offense.",
            "evolution": "Potential evolution: Efficient Retaliation"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 49,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_065",
        "name": "Balanced Approach",
        "type": "ACTIVE",
        "tier": "COMMON",
        "tags": [],
        "stats": {
            "cooldown": 2,
            "cost": 30,
            "damage": 26
        },
        "description": "** Deal 20 damage and grant yourself 15 Shield.\r\n    * **Evo A (Offensive Balance):** Damage increased to 35.\r\n    * **Evo B (Defensive Balance):** Shield increased to 25.",
        "lore_quote": "\"Identity is just another variable to be optimized.\"",
        "tactical_brief": "Deploy Balanced Approach to leverage .  Deal 20 damage and grant yourself 15 Shield.     * Evo A (O...",
        "mastery_perk": "Mastery Lvl 5: (Offensive Balance): Damage increased to 35.\r\n    * Evo B (Defensive Balance): Shield increased to 25.",
        "gameplay_info": {
            "usage": [
                "Cost: 30 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Character Analysis use this to manipulate offense.",
            "evolution": "Potential evolution: Defensive Balance"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 26,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_066",
        "name": "Protective Exposure",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "EXPOSE",
            "EXPOSE"
        ],
        "stats": {
            "cooldown": 2,
            "cost": 40,
            "damage": 52
        },
        "description": "** [Expose] target's weakness. While active, you have +20 Shield.\r\n    * **Evo A (Perfect Protection):** Shield increased to 35.\r\n    * **Evo B (Extended Protection):** [Expose] lasts 3 turns.",
        "lore_quote": "\"Identity is a construct we can deconstruct.\"",
        "tactical_brief": "Deploy Protective Exposure to leverage EXPOSE, EXPOSE.  [Expose] target's weakness. While active, you have +20 Shie...",
        "mastery_perk": "Mastery Lvl 5: (Perfect Protection): Shield increased to 35.\r\n    * Evo B (Extended Protection): [Expose] lasts 3 turns.",
        "gameplay_info": {
            "usage": [
                "Cost: 40 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": [
                "Expose",
                "Expose"
            ]
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Character Analysis use this to manipulate undefined.",
            "evolution": "Potential evolution: Extended Protection"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 52,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_067",
        "name": "Judgment Strike",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "VULNERABLE",
            "VULNERABLE"
        ],
        "stats": {
            "cooldown": 2,
            "cost": 35,
            "damage": 51
        },
        "description": "** Deal 25 damage and apply [Vulnerable] (1 turn).\r\n    * **Evo A (Harsh Judgment):** Damage increased to 40.\r\n    * **Evo B (Extended Judgment):** [Vulnerable] duration 2 turns.",
        "lore_quote": "\"Patterns emerge if you look close enough.\"",
        "tactical_brief": "Deploy Judgment Strike to leverage VULNERABLE, VULNERABLE.  Deal 25 damage and apply [Vulnerable] (1 turn).     * Evo A...",
        "mastery_perk": "Mastery Lvl 5: (Harsh Judgment): Damage increased to 40.\r\n    * Evo B (Extended Judgment): [Vulnerable] duration 2 turns.",
        "gameplay_info": {
            "usage": [
                "Cost: 35 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": [
                "Vulnerable",
                "Vulnerable"
            ]
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Character Analysis use this to manipulate offense.",
            "evolution": "Potential evolution: Extended Judgment"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 51,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_068",
        "name": "Tactical Cleanse",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "CLEANSE",
            "CLEANSE"
        ],
        "stats": {
            "cooldown": 2,
            "cost": 35,
            "damage": 51
        },
        "description": "** [Cleanse] 1 debuff from target ally. If successful, gain 3 Insight.\r\n    * **Evo A (Mass Cleanse):** Can cleanse from 2 allies.\r\n    * **Evo B (Deep Cleanse):** [Cleanse] 2 debuffs instead.",
        "lore_quote": "\"The Architects hide their flaws, but we see them.\"",
        "tactical_brief": "Deploy Tactical Cleanse to leverage CLEANSE, CLEANSE.  [Cleanse] 1 debuff from target ally. If successful, gain 3 ...",
        "mastery_perk": "Mastery Lvl 5: (Mass Cleanse): Can cleanse from 2 allies.\r\n    * Evo B (Deep Cleanse): [Cleanse] 2 debuffs instead.",
        "gameplay_info": {
            "usage": [
                "Cost: 35 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": [
                "Cleanse",
                "Cleanse"
            ]
        },
        "deep_data": {
            "environment": "Resonates with support.",
            "narrative": "Practitioners of Character Analysis use this to manipulate support.",
            "evolution": "Potential evolution: Deep Cleanse"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 51,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_069",
        "name": "Shield Analysis",
        "type": "ACTIVE",
        "tier": "COMMON",
        "tags": [],
        "stats": {
            "cooldown": 2,
            "cost": 30,
            "damage": 26
        },
        "description": "** Grant 20 Shield to yourself or ally. If they're attacked while shielded, gain 3 Insight.\r\n    * **Evo A (Heavy Shield):** Shield increased to 30.\r\n    * **Evo B (Efficient Insight):** Gain 5 Insight per attack.",
        "lore_quote": "\"Patterns emerge if you look close enough.\"",
        "tactical_brief": "Deploy Shield Analysis to leverage .  Grant 20 Shield to yourself or ally. If they're attacked wh...",
        "mastery_perk": "Mastery Lvl 5: (Heavy Shield): Shield increased to 30.\r\n    * Evo B (Efficient Insight): Gain 5 Insight per attack.",
        "gameplay_info": {
            "usage": [
                "Cost: 30 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with support.",
            "narrative": "Practitioners of Character Analysis use this to manipulate support.",
            "evolution": "Potential evolution: Efficient Insight"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 26,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_070",
        "name": "Reactive Expertise",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "ANALYZE"
        ],
        "stats": {
            "cooldown": 2,
            "cost": 40,
            "damage": 50
        },
        "description": "** For 2 turns, when you [Analyze], also gain 10 Shield.\r\n    * **Evo A (Perfect Expertise):** Shield increased to 20.\r\n    * **Evo B (Extended Expertise):** Duration 3 turns.",
        "lore_quote": "\"Patterns emerge if you look close enough.\"",
        "tactical_brief": "Deploy Reactive Expertise to leverage ANALYZE.  For 2 turns, when you [Analyze], also gain 10 Shield.     *...",
        "mastery_perk": "Mastery Lvl 5: (Perfect Expertise): Shield increased to 20.\r\n    * Evo B (Extended Expertise): Duration 3 turns.",
        "gameplay_info": {
            "usage": [
                "Cost: 40 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": [
                "Analyze"
            ]
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Character Analysis use this to manipulate undefined.",
            "evolution": "Potential evolution: Extended Expertise"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 50,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_071",
        "name": "Equilibrium",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 45,
            "damage": 49
        },
        "description": "** For 2 turns, all your offensive glyphs also grant 10 Shield, all defensive glyphs deal 15 damage.\r\n    * **Evo A (Perfect Balance):** Shield/damage increased to 15/25.\r\n    * **Evo B (Extended Balance):** Duration 3 turns.",
        "lore_quote": "\"Patterns emerge if you look close enough.\"",
        "tactical_brief": "Deploy Equilibrium to leverage .  For 2 turns, all your offensive glyphs also grant 10 Shield...",
        "mastery_perk": "Mastery Lvl 5: (Perfect Balance): Shield/damage increased to 15/25.\r\n    * Evo B (Extended Balance): Duration 3 turns.",
        "gameplay_info": {
            "usage": [
                "Cost: 45 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Character Analysis use this to manipulate offense.",
            "evolution": "Potential evolution: Extended Balance"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 49,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_072",
        "name": "Justice Bolt",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 2,
            "cost": 40,
            "damage": 48
        },
        "description": "** Deal 30 damage. If target has 2+ debuffs, deal 50 instead.\r\n    * **Evo A (Divine Justice):** Damage 45/75 instead.\r\n    * **Evo B (Efficient Justice):** Cost -1 KP.",
        "lore_quote": "\"To dismantle the system, one must understand its code.\"",
        "tactical_brief": "Deploy Justice Bolt to leverage .  Deal 30 damage. If target has 2+ debuffs, deal 50 instead. ...",
        "mastery_perk": "Mastery Lvl 5: (Divine Justice): Damage 45/75 instead.\r\n    * Evo B (Efficient Justice): Cost -1 KP.",
        "gameplay_info": {
            "usage": [
                "Cost: 40 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Character Analysis use this to manipulate offense.",
            "evolution": "Potential evolution: Efficient Justice"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 48,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_073",
        "name": "Protective Mark",
        "type": "ACTIVE",
        "tier": "COMMON",
        "tags": [
            "MARK"
        ],
        "stats": {
            "cooldown": 2,
            "cost": 30,
            "damage": 28
        },
        "description": "** [Mark] ally. Next attack against them is reduced by 50% and grants you 3 Insight.\r\n    * **Evo A (Perfect Protection):** Reduced by 75%.\r\n    * **Evo B (Multi-Protection):** Can mark 2 allies.",
        "lore_quote": "\"The Ashram teaches us to look within; we look through.\"",
        "tactical_brief": "Deploy Protective Mark to leverage MARK.  [Mark] ally. Next attack against them is reduced by 50% and...",
        "mastery_perk": "Mastery Lvl 5: (Perfect Protection): Reduced by 75%.\r\n    * Evo B (Multi-Protection): Can mark 2 allies.",
        "gameplay_info": {
            "usage": [
                "Cost: 30 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": [
                "Mark"
            ]
        },
        "deep_data": {
            "environment": "Resonates with support.",
            "narrative": "Practitioners of Character Analysis use this to manipulate support.",
            "evolution": "Potential evolution: Multi-Protection"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 28,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_074",
        "name": "Insight Barrier",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 2,
            "cost": 35,
            "damage": 47
        },
        "description": "** Spend 10 Insight to grant 30 Shield to yourself or ally.\r\n    * **Evo A (Efficient Barrier):** Cost only 8 Insight.\r\n    * **Evo B (Perfect Barrier):** Shield increased to 45.",
        "lore_quote": "\"The Architects hide their flaws, but we see them.\"",
        "tactical_brief": "Deploy Insight Barrier to leverage .  Spend 10 Insight to grant 30 Shield to yourself or ally.   ...",
        "mastery_perk": "Mastery Lvl 5: (Efficient Barrier): Cost only 8 Insight.\r\n    * Evo B (Perfect Barrier): Shield increased to 45.",
        "gameplay_info": {
            "usage": [
                "Cost: 35 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with support.",
            "narrative": "Practitioners of Character Analysis use this to manipulate support.",
            "evolution": "Potential evolution: Perfect Barrier"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 47,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_075",
        "name": "Righteous Wrath",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "CLEANSE"
        ],
        "stats": {
            "cooldown": 2,
            "cost": 40,
            "damage": 50
        },
        "description": "** [Cleanse] all debuffs from yourself. Deal 10 damage per debuff removed.\r\n    * **Evo A (Explosive Wrath):** Damage increased to 20 per debuff.\r\n    * **Evo B (Spreading Wrath):** Damage affects all enemies.",
        "lore_quote": "\"Identity is just another variable to be optimized.\"",
        "tactical_brief": "Deploy Righteous Wrath to leverage CLEANSE.  [Cleanse] all debuffs from yourself. Deal 10 damage per deb...",
        "mastery_perk": "Mastery Lvl 5: (Explosive Wrath): Damage increased to 20 per debuff.\r\n    * Evo B (Spreading Wrath): Damage affects all enemies.",
        "gameplay_info": {
            "usage": [
                "Cost: 40 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": [
                "Cleanse"
            ]
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Character Analysis use this to manipulate offense.",
            "evolution": "Potential evolution: Spreading Wrath"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 50,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_076",
        "name": "Tactical Intervention",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "ANALYZE"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 45,
            "damage": 51
        },
        "description": "** When ally drops below 30% Ojas, automatically grant them 20 Shield and [Analyze] attacker. Once per 3 turns.\r\n    * **Evo A (Perfect Intervention):** Shield increased to 35.\r\n    * **Evo B (Frequent Intervention):** Cooldown reduced to 2 turns.",
        "lore_quote": "\"Patterns emerge if you look close enough.\"",
        "tactical_brief": "Deploy Tactical Intervention to leverage ANALYZE.  When ally drops below 30% Ojas, automatically grant them 20...",
        "mastery_perk": "Mastery Lvl 5: (Perfect Intervention): Shield increased to 35.\r\n    * Evo B (Frequent Intervention): Cooldown reduced to 2 turns.",
        "gameplay_info": {
            "usage": [
                "Cost: 45 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Analyze"
            ]
        },
        "deep_data": {
            "environment": "Resonates with support.",
            "narrative": "Practitioners of Character Analysis use this to manipulate support.",
            "evolution": "Potential evolution: Frequent Intervention"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 51,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_077",
        "name": "Measured Response",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 2,
            "cost": 40,
            "damage": 48
        },
        "description": "** Deal damage equal to your current Shield (consumes Shield). Gain 2 Insight per 10 Shield consumed.\r\n    * **Evo A (Efficient Response):** Keep 50% of Shield.\r\n    * **Evo B (Perfect Response):** Gain 3 Insight per 10 Shield.",
        "lore_quote": "\"Every Remnant carries the scars of the Fall.\"",
        "tactical_brief": "Deploy Measured Response to leverage .  Deal damage equal to your current Shield (consumes Shield)....",
        "mastery_perk": "Mastery Lvl 5: (Efficient Response): Keep 50% of Shield.\r\n    * Evo B (Perfect Response): Gain 3 Insight per 10 Shield.",
        "gameplay_info": {
            "usage": [
                "Cost: 40 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Character Analysis use this to manipulate offense.",
            "evolution": "Potential evolution: Perfect Response"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 48,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_078",
        "name": "Arbiter's Decree",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [
            "VULNERABLE",
            "VULNERABLE"
        ],
        "stats": {
            "cooldown": 4,
            "cost": 60,
            "damage": 76
        },
        "description": "** Grant 40 Shield to all allies and apply [Vulnerable] to all enemies (2 turns). Costs 25 Insight. Once per duel.\r\n    * **Evo A (Divine Decree):** Shield 60, [Vulnerable] 3 turns.\r\n    * **Evo B (Economic Decree):** Cost 20 Insight.",
        "lore_quote": "\"Identity is just another variable to be optimized.\"",
        "tactical_brief": "Deploy Arbiter's Decree to leverage VULNERABLE, VULNERABLE.  Grant 40 Shield to all allies and apply [Vulnerable] to all...",
        "mastery_perk": "Mastery Lvl 5: (Divine Decree): Shield 60, [Vulnerable] 3 turns.\r\n    * Evo B (Economic Decree): Cost 20 Insight.",
        "gameplay_info": {
            "usage": [
                "Cost: 60 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": [
                "Vulnerable",
                "Vulnerable"
            ]
        },
        "deep_data": {
            "environment": "Resonates with support, offense.",
            "narrative": "Practitioners of Character Analysis use this to manipulate support.",
            "evolution": "Potential evolution: Economic Decree"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 76,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_079",
        "name": "Sword and Shield",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 50,
            "damage": 50
        },
        "description": "** For 3 turns, all your glyphs deal +10 damage and grant +10 Shield simultaneously.\r\n    * **Evo A (Perfect Harmony):** +20 damage and +20 Shield.\r\n    * **Evo B (Extended Harmony):** Duration 4 turns.",
        "lore_quote": "\"The Architects hide their flaws, but we see them.\"",
        "tactical_brief": "Deploy Sword and Shield to leverage .  For 3 turns, all your glyphs deal +10 damage and grant +10 ...",
        "mastery_perk": "Mastery Lvl 5: (Perfect Harmony): +20 damage and +20 Shield.\r\n    * Evo B (Extended Harmony): Duration 4 turns.",
        "gameplay_info": {
            "usage": [
                "Cost: 50 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Character Analysis use this to manipulate offense.",
            "evolution": "Potential evolution: Extended Harmony"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 50,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_080",
        "name": "Final Judgment",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [
            "STUN"
        ],
        "stats": {
            "cooldown": 4,
            "cost": 65,
            "damage": 75
        },
        "description": "** If target has 5+ debuffs, deal 100 damage and [Stun] (2 turns). Otherwise deal 30 damage. Once per duel.\r\n    * **Evo A (Absolute Judgment):** Threshold reduced to 4 debuffs.\r\n    * **Evo B (Merciful Judgment):** Base damage increased to 50.\r\n\r\n---\r\n\r\n### **SPECIAL UTILITY SKILLS \u2014 10 Skills**",
        "lore_quote": "\"To dismantle the system, one must understand its code.\"",
        "tactical_brief": "Deploy Final Judgment to leverage STUN.  If target has 5+ debuffs, deal 100 damage and [Stun] (2 tur...",
        "mastery_perk": "Mastery Lvl 5: (Absolute Judgment): Threshold reduced to 4 debuffs.\r\n    * Evo B (Merciful Judgment): Base damage increased to 50.\r\n\r\n---\r\n\r\n### SPECIAL UTILITY SKILLS \u2014 10 Skills",
        "gameplay_info": {
            "usage": [
                "Cost: 65 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": [
                "Stun"
            ]
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Character Analysis use this to manipulate offense.",
            "evolution": "Potential evolution: Merciful Judgment"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 75,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_081",
        "name": "Memory Archive",
        "type": "ACTIVE",
        "tier": "COMMON",
        "tags": [],
        "stats": {
            "cooldown": 2,
            "cost": 30,
            "damage": 26
        },
        "description": "** Store current enemy pattern. Next duel against same opponent, start with 10 Insight.\r\n    * **Evo A (Deep Archive):** Start with 15 Insight.\r\n    * **Evo B (Multi-Archive):** Can store 3 different patterns.",
        "lore_quote": "\"The Architects hide their flaws, but we see them.\"",
        "tactical_brief": "Deploy Memory Archive to leverage .  Store current enemy pattern. Next duel against same opponen...",
        "mastery_perk": "Mastery Lvl 5: (Deep Archive): Start with 15 Insight.\r\n    * Evo B (Multi-Archive): Can store 3 different patterns.",
        "gameplay_info": {
            "usage": [
                "Cost: 30 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Character Analysis use this to manipulate offense.",
            "evolution": "Potential evolution: Multi-Archive"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 26,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_082",
        "name": "Tactical Retreat",
        "type": "ACTIVE",
        "tier": "COMMON",
        "tags": [
            "CLEANSE",
            "CLEANSE"
        ],
        "stats": {
            "cooldown": 1,
            "cost": 25,
            "damage": 29
        },
        "description": "** Gain 20 Shield and move to a safe position. [Cleanse] 1 debuff.\r\n    * **Evo A (Perfect Retreat):** Shield increased to 35.\r\n    * **Evo B (Cleansing Retreat):** [Cleanse] 2 debuffs.",
        "lore_quote": "\"The Architects hide their flaws, but we see them.\"",
        "tactical_brief": "Deploy Tactical Retreat to leverage CLEANSE, CLEANSE.  Gain 20 Shield and move to a safe position. [Cleanse] 1 deb...",
        "mastery_perk": "Mastery Lvl 5: (Perfect Retreat): Shield increased to 35.\r\n    * Evo B (Cleansing Retreat): [Cleanse] 2 debuffs.",
        "gameplay_info": {
            "usage": [
                "Cost: 25 Gnosis",
                "Cooldown: 1 Turns"
            ],
            "features": [
                "Cleanse",
                "Cleanse"
            ]
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Character Analysis use this to manipulate undefined.",
            "evolution": "Potential evolution: Cleansing Retreat"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 29,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_083",
        "name": "Information Broker",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 2,
            "cost": 35,
            "damage": 47
        },
        "description": "** Spend 15 Insight to draw 2 cards and gain 2 KP.\r\n    * **Evo A (Efficient Broker):** Cost only 12 Insight.\r\n    * **Evo B (Generous Broker):** Draw 3 cards instead.",
        "lore_quote": "\"Every Remnant carries the scars of the Fall.\"",
        "tactical_brief": "Deploy Information Broker to leverage .  Spend 15 Insight to draw 2 cards and gain 2 KP.     * Evo A...",
        "mastery_perk": "Mastery Lvl 5: (Efficient Broker): Cost only 12 Insight.\r\n    * Evo B (Generous Broker): Draw 3 cards instead.",
        "gameplay_info": {
            "usage": [
                "Cost: 35 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Character Analysis use this to manipulate undefined.",
            "evolution": "Potential evolution: Generous Broker"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 47,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_084",
        "name": "Adaptive Learning",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 2,
            "cost": 40,
            "damage": 48
        },
        "description": "** Passive: Each time enemy uses the same glyph twice, gain 2 Insight and reduce your next glyph cost by 1 KP.\r\n    * **Evo A (Deep Learning):** Gain 4 Insight.\r\n    * **Evo B (Perfect Learning):** Cost reduction -2 KP.",
        "lore_quote": "\"Patterns emerge if you look close enough.\"",
        "tactical_brief": "Deploy Adaptive Learning to leverage .  Passive: Each time enemy uses the same glyph twice, gain 2 ...",
        "mastery_perk": "Mastery Lvl 5: (Deep Learning): Gain 4 Insight.\r\n    * Evo B (Perfect Learning): Cost reduction -2 KP.",
        "gameplay_info": {
            "usage": [
                "Cost: 40 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Character Analysis use this to manipulate offense.",
            "evolution": "Potential evolution: Perfect Learning"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 48,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_085",
        "name": "Field Notes",
        "type": "ACTIVE",
        "tier": "COMMON",
        "tags": [],
        "stats": {
            "cooldown": 2,
            "cost": 30,
            "damage": 26
        },
        "description": "** At end of duel, gain bonus rewards based on Insight generated (1 reward per 10 Insight).\r\n    * **Evo A (Detailed Notes):** 1 reward per 8 Insight.\r\n    * **Evo B (Perfect Notes):** Also gain bonus Gnosis.",
        "lore_quote": "\"The Architects hide their flaws, but we see them.\"",
        "tactical_brief": "Deploy Field Notes to leverage .  At end of duel, gain bonus rewards based on Insight generat...",
        "mastery_perk": "Mastery Lvl 5: (Detailed Notes): 1 reward per 8 Insight.\r\n    * Evo B (Perfect Notes): Also gain bonus Gnosis.",
        "gameplay_info": {
            "usage": [
                "Cost: 30 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Character Analysis use this to manipulate undefined.",
            "evolution": "Potential evolution: Perfect Notes"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 26,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_086",
        "name": "Quick Thinking",
        "type": "ACTIVE",
        "tier": "COMMON",
        "tags": [],
        "stats": {
            "cooldown": 1,
            "cost": 20,
            "damage": 24
        },
        "description": "** When you drop below 30% Ojas, instantly gain 8 Insight. Once per duel.\r\n    * **Evo A (Perfect Thinking):** Gain 12 Insight.\r\n    * **Evo B (Frequent Thinking):** Usable twice per duel.",
        "lore_quote": "\"Every Remnant carries the scars of the Fall.\"",
        "tactical_brief": "Deploy Quick Thinking to leverage .  When you drop below 30% Ojas, instantly gain 8 Insight. Onc...",
        "mastery_perk": "Mastery Lvl 5: (Perfect Thinking): Gain 12 Insight.\r\n    * Evo B (Frequent Thinking): Usable twice per duel.",
        "gameplay_info": {
            "usage": [
                "Cost: 20 Gnosis",
                "Cooldown: 1 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Character Analysis use this to manipulate undefined.",
            "evolution": "Potential evolution: Frequent Thinking"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 24,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_087",
        "name": "Tactical Flexibility",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 45,
            "damage": 49
        },
        "description": "** For 2 turns, you can use glyphs from any Character Analysis path as if you mastered them.\r\n    * **Evo A (Perfect Flexibility):** Duration 3 turns.\r\n    * **Evo B (Economic Flexibility):** Cost -2 KP.",
        "lore_quote": "\"To dismantle the system, one must understand its code.\"",
        "tactical_brief": "Deploy Tactical Flexibility to leverage .  For 2 turns, you can use glyphs from any Character Analysis...",
        "mastery_perk": "Mastery Lvl 5: (Perfect Flexibility): Duration 3 turns.\r\n    * Evo B (Economic Flexibility): Cost -2 KP.",
        "gameplay_info": {
            "usage": [
                "Cost: 45 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Character Analysis use this to manipulate undefined.",
            "evolution": "Potential evolution: Economic Flexibility"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 49,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_088",
        "name": "Mirror Analysis",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "ANALYZE",
            "HEAL"
        ],
        "stats": {
            "cooldown": 2,
            "cost": 35,
            "heal": 51
        },
        "description": "** [Analyze] yourself. Discover 1 weakness you can fix. Gain 5 Insight.\r\n    * **Evo A (Deep Reflection):** Gain 8 Insight.\r\n    * **Evo B (Healing Reflection):** Also [Heal] 15 Ojas.",
        "lore_quote": "\"The Ashram teaches us to look within; we look through.\"",
        "tactical_brief": "Deploy Mirror Analysis to leverage ANALYZE, HEAL.  [Analyze] yourself. Discover 1 weakness you can fix. Gain 5...",
        "mastery_perk": "Mastery Lvl 5: (Deep Reflection): Gain 8 Insight.\r\n    * Evo B (Healing Reflection): Also [Heal] 15 Ojas.",
        "gameplay_info": {
            "usage": [
                "Cost: 35 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": [
                "Analyze",
                "Heal"
            ]
        },
        "deep_data": {
            "environment": "Resonates with healing.",
            "narrative": "Practitioners of Character Analysis use this to manipulate healing.",
            "evolution": "Potential evolution: Healing Reflection"
        },
        "effects": [
            {
                "type": "HEAL",
                "value": 51,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_089",
        "name": "Wisdom Archive",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 50,
            "damage": 50
        },
        "description": "** Convert 20 Insight to permanently increase your Insight cap by 5. Can be used multiple times.\r\n    * **Evo A (Efficient Archive):** Cost only 15 Insight.\r\n    * **Evo B (Perfect Archive):** Cap increase +8 instead.",
        "lore_quote": "\"Patterns emerge if you look close enough.\"",
        "tactical_brief": "Deploy Wisdom Archive to leverage .  Convert 20 Insight to permanently increase your Insight cap...",
        "mastery_perk": "Mastery Lvl 5: (Efficient Archive): Cost only 15 Insight.\r\n    * Evo B (Perfect Archive): Cap increase +8 instead.",
        "gameplay_info": {
            "usage": [
                "Cost: 50 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Character Analysis use this to manipulate undefined.",
            "evolution": "Potential evolution: Perfect Archive"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 50,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_090",
        "name": "Master Analyst",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [],
        "stats": {
            "cooldown": 4,
            "cost": 60,
            "damage": 72
        },
        "description": "** Passive: Gain 1 Insight whenever any unit (ally or enemy) uses a glyph.\r\n    * **Evo A (Deep Analysis):** Gain 2 Insight instead.\r\n    * **Evo B (Selective Analysis):** Only tracks enemy actions but grants 3 Insight per action.\r\n\r\n---\r\n\r\n### **BIG BRAIN SKILLS (High Skill Ceiling) \u2014 10 Skills**",
        "lore_quote": "\"Identity is just another variable to be optimized.\"",
        "tactical_brief": "Deploy Master Analyst to leverage .  Passive: Gain 1 Insight whenever any unit (ally or enemy) u...",
        "mastery_perk": "Mastery Lvl 5: (Deep Analysis): Gain 2 Insight instead.\r\n    * Evo B (Selective Analysis): Only tracks enemy actions but grants 3 Insight per action.\r\n\r\n---\r\n\r\n### BIG BRAIN SKILLS (High Skill Ceiling) \u2014 10 Skills",
        "gameplay_info": {
            "usage": [
                "Cost: 60 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with support, offense.",
            "narrative": "Practitioners of Character Analysis use this to manipulate support.",
            "evolution": "Potential evolution: Selective Analysis"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 72,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_091",
        "name": "Predictive Matrix",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [],
        "stats": {
            "cooldown": 4,
            "cost": 65,
            "damage": 73
        },
        "description": "** Predict enemy's next 3 actions. For each correct prediction, gain 10 Insight and reduce their action costs by revealing the pattern. For each wrong prediction, lose 5 Insight.\r\n    * **Evo A (Perfect Matrix):** Gain 15 Insight per correct prediction.\r\n    * **Evo B (Safe Matrix):** Wrong predictions only lose 2 Insight.\r\n    * **Note:** *Rewards pattern recognition and psychological profiling of opponent playstyle.*",
        "lore_quote": "** *Rewards pattern recognition and psychological profiling of opponent playstyle.*",
        "tactical_brief": "Deploy Predictive Matrix to leverage .  Predict enemy's next 3 actions. For each correct prediction...",
        "mastery_perk": "Mastery Lvl 5: (Perfect Matrix): Gain 15 Insight per correct prediction.\r\n    * Evo B (Safe Matrix): Wrong predictions only lose 2 Insight.\r\n    * Note: *Rewards pattern recognition and psychological profiling of opponent playstyle.*",
        "gameplay_info": {
            "usage": [
                "Cost: 65 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Character Analysis use this to manipulate offense.",
            "evolution": "Potential evolution: Safe Matrix"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 73,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_092",
        "name": "Conditional Trap Network",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [],
        "stats": {
            "cooldown": 4,
            "cost": 70,
            "damage": 74
        },
        "description": "** Set 3 conditional traps with different triggers (e.g., \"if enemy uses healing\", \"if enemy plays offensive glyph\", \"if enemy gains resources\"). When triggered, apply custom effects you pre-selected. Costs 30 Insight.\r\n    * **Evo A (Deep Network):** Can set 5 traps.\r\n    * **Evo B (Reactive Network):** Traps can chain into each other.\r\n    * **Note:** *Requires planning multiple scenarios ahead. Complexity scales with creativity.*",
        "lore_quote": "** *Requires planning multiple scenarios ahead. Complexity scales with creativity.*",
        "tactical_brief": "Deploy Conditional Trap Network to leverage .  Set 3 conditional traps with different triggers (e.g., \"if ...",
        "mastery_perk": "Mastery Lvl 5: (Deep Network): Can set 5 traps.\r\n    * Evo B (Reactive Network): Traps can chain into each other.\r\n    * Note: *Requires planning multiple scenarios ahead. Complexity scales with creativity.*",
        "gameplay_info": {
            "usage": [
                "Cost: 70 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with offense, healing.",
            "narrative": "Practitioners of Character Analysis use this to manipulate offense.",
            "evolution": "Potential evolution: Reactive Network"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 74,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_093",
        "name": "Recursive Analysis Loop",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [
            "ANALYZE",
            "ANALYZE"
        ],
        "stats": {
            "cooldown": 4,
            "cost": 60,
            "damage": 76
        },
        "description": "** [Analyze] target. Each subsequent [Analyze] on the same target reveals deeper information layers (costs, cooldowns, hand, deck order, future draws) and grants +2 Insight per stack (max 5 stacks). Resets if you target someone else.\r\n    * **Evo A (Perfect Recursion):** Max stacks increased to 8.\r\n    * **Evo B (Efficient Recursion):** Each stack costs -1 KP.\r\n    * **Note:** *Rewards committing to a single target and extracting maximum intelligence.*",
        "lore_quote": "** *Rewards committing to a single target and extracting maximum intelligence.*",
        "tactical_brief": "Deploy Recursive Analysis Loop to leverage ANALYZE, ANALYZE.  [Analyze] target. Each subsequent [Analyze] on the same tar...",
        "mastery_perk": "Mastery Lvl 5: (Perfect Recursion): Max stacks increased to 8.\r\n    * Evo B (Efficient Recursion): Each stack costs -1 KP.\r\n    * Note: *Rewards committing to a single target and extracting maximum intelligence.*",
        "gameplay_info": {
            "usage": [
                "Cost: 60 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": [
                "Analyze",
                "Analyze"
            ]
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Character Analysis use this to manipulate undefined.",
            "evolution": "Potential evolution: Efficient Recursion"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 76,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_094",
        "name": "Quantum Prediction",
        "type": "ACTIVE",
        "tier": "LEGENDARY",
        "tags": [],
        "stats": {
            "cooldown": 5,
            "cost": 75,
            "damage": 95
        },
        "description": "** Predict 2 possible enemy actions. Assign probability weights (e.g., 70%/30%). Gain Insight proportional to accuracy. If 90%+ accurate over 3 turns, refresh all cooldowns and gain 20 Insight.\r\n    * **Evo A (Perfect Quantum):** Accuracy threshold lowered to 80%.\r\n    * **Evo B (Multi-Quantum):** Can predict for 2 different enemies.\r\n    * **Note:** *Rewards understanding meta-strategy and opponent tendencies.*",
        "lore_quote": "** *Rewards understanding meta-strategy and opponent tendencies.*",
        "tactical_brief": "Deploy Quantum Prediction to leverage .  Predict 2 possible enemy actions. Assign probability weight...",
        "mastery_perk": "Mastery Lvl 5: (Perfect Quantum): Accuracy threshold lowered to 80%.\r\n    * Evo B (Multi-Quantum): Can predict for 2 different enemies.\r\n    * Note: *Rewards understanding meta-strategy and opponent tendencies.*",
        "gameplay_info": {
            "usage": [
                "Cost: 75 Gnosis",
                "Cooldown: 5 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Character Analysis use this to manipulate offense.",
            "evolution": "Potential evolution: Multi-Quantum"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 95,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_095",
        "name": "Butterfly Effect",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [],
        "stats": {
            "cooldown": 4,
            "cost": 65,
            "damage": 73
        },
        "description": "** Make a small change now (spend 5 KP on nothing). After 3 turns, if you correctly predicted what cascading effects it would cause to enemy strategy, deal 50 damage and gain 15 Insight. If wrong, lose 10 Insight.\r\n    * **Evo A (Perfect Butterfly):** Reward increased to 80 damage + 25 Insight.\r\n    * **Evo B (Safe Butterfly):** Wrong prediction has no penalty.\r\n    * **Note:** *Abstract strategic thinking. Requires understanding how small changes ripple through game state.*",
        "lore_quote": "** *Abstract strategic thinking. Requires understanding how small changes ripple through game state.*",
        "tactical_brief": "Deploy Butterfly Effect to leverage .  Make a small change now (spend 5 KP on nothing). After 3 tu...",
        "mastery_perk": "Mastery Lvl 5: (Perfect Butterfly): Reward increased to 80 damage + 25 Insight.\r\n    * Evo B (Safe Butterfly): Wrong prediction has no penalty.\r\n    * Note: *Abstract strategic thinking. Requires understanding how small changes ripple through game state.*",
        "gameplay_info": {
            "usage": [
                "Cost: 65 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Character Analysis use this to manipulate offense.",
            "evolution": "Potential evolution: Safe Butterfly"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 73,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_096",
        "name": "Memory Palace",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 55,
            "damage": 71
        },
        "description": "** Passive: Every 5 enemy actions, automatically catalog their pattern. After 3 patterns cataloged, predict their likely next move with 80% accuracy. Gain 5 Insight per correct auto-prediction.\r\n    * **Evo A (Perfect Palace):** Accuracy increased to 90%.\r\n    * **Evo B (Fast Palace):** Catalog every 3 actions instead of 5.\r\n    * **Note:** *Rewards patient observation and pattern recognition over time.*",
        "lore_quote": "** *Rewards patient observation and pattern recognition over time.*",
        "tactical_brief": "Deploy Memory Palace to leverage .  Passive: Every 5 enemy actions, automatically catalog their...",
        "mastery_perk": "Mastery Lvl 5: (Perfect Palace): Accuracy increased to 90%.\r\n    * Evo B (Fast Palace): Catalog every 3 actions instead of 5.\r\n    * Note: *Rewards patient observation and pattern recognition over time.*",
        "gameplay_info": {
            "usage": [
                "Cost: 55 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with support, offense.",
            "narrative": "Practitioners of Character Analysis use this to manipulate support.",
            "evolution": "Potential evolution: Fast Palace"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 71,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_097",
        "name": "Meta-Analysis",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [
            "ANALYZE"
        ],
        "stats": {
            "cooldown": 4,
            "cost": 70,
            "damage": 76
        },
        "description": "** [Analyze] enemy's entire engine loadout. Discover which engines they prioritize and reveal optimal counter-strategies. Costs 25 Insight. Next 5 glyphs you cast have perfect information (know exact outcome before casting).\r\n    * **Evo A (Deep Meta):** Next 8 glyphs have perfect information.\r\n    * **Evo B (Economic Meta):** Cost reduced to 20 Insight.\r\n    * **Note:** *Rewards understanding game systems and engine interactions at macro level.*",
        "lore_quote": "** *Rewards understanding game systems and engine interactions at macro level.*",
        "tactical_brief": "Deploy Meta-Analysis to leverage ANALYZE.  [Analyze] enemy's entire engine loadout. Discover which eng...",
        "mastery_perk": "Mastery Lvl 5: (Deep Meta): Next 8 glyphs have perfect information.\r\n    * Evo B (Economic Meta): Cost reduced to 20 Insight.\r\n    * Note: *Rewards understanding game systems and engine interactions at macro level.*",
        "gameplay_info": {
            "usage": [
                "Cost: 70 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": [
                "Analyze"
            ]
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Character Analysis use this to manipulate offense.",
            "evolution": "Potential evolution: Economic Meta"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 76,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_098",
        "name": "Gambit Protocol",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [
            "STUN"
        ],
        "stats": {
            "cooldown": 4,
            "cost": 60,
            "damage": 74
        },
        "description": "** Sacrifice 20 Insight and 3 KP to set a complex gambit. Declare a specific outcome you want to achieve in 4 turns (e.g., \"enemy will have 2+ debuffs and <50% Ojas\"). If successful, gain 40 Insight, refresh all cooldowns, and apply [Stun] (2 turns). If failed, lose 15 Insight and take 30 damage.\r\n    * **Evo A (Perfect Gambit):** Success rewards doubled.\r\n    * **Evo B (Safe Gambit):** Failure penalty reduced by half.\r\n    * **Note:** *High-stakes strategic planning. Rewards precise execution of complex plans.*",
        "lore_quote": "** *High-stakes strategic planning. Rewards precise execution of complex plans.*",
        "tactical_brief": "Deploy Gambit Protocol to leverage STUN.  Sacrifice 20 Insight and 3 KP to set a complex gambit. Decl...",
        "mastery_perk": "Mastery Lvl 5: (Perfect Gambit): Success rewards doubled.\r\n    * Evo B (Safe Gambit): Failure penalty reduced by half.\r\n    * Note: *High-stakes strategic planning. Rewards precise execution of complex plans.*",
        "gameplay_info": {
            "usage": [
                "Cost: 60 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": [
                "Stun"
            ]
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Character Analysis use this to manipulate offense.",
            "evolution": "Potential evolution: Safe Gambit"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 74,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_099",
        "name": "Parallel Processing",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [
            "ANALYZE"
        ],
        "stats": {
            "cooldown": 4,
            "cost": 65,
            "damage": 75
        },
        "description": "** [Analyze] all enemies simultaneously and construct a threat priority matrix. For next 3 turns, your glyphs automatically target optimal enemy based on current game state (you can override). Costs 20 Insight.\r\n    * **Evo A (Perfect Processing):** Duration 4 turns.\r\n    * **Evo B (Efficient Processing):** Cost reduced to 15 Insight.\r\n    * **Note:** *Rewards understanding of threat assessment and resource allocation.*",
        "lore_quote": "** *Rewards understanding of threat assessment and resource allocation.*",
        "tactical_brief": "Deploy Parallel Processing to leverage ANALYZE.  [Analyze] all enemies simultaneously and construct a threat...",
        "mastery_perk": "Mastery Lvl 5: (Perfect Processing): Duration 4 turns.\r\n    * Evo B (Efficient Processing): Cost reduced to 15 Insight.\r\n    * Note: *Rewards understanding of threat assessment and resource allocation.*",
        "gameplay_info": {
            "usage": [
                "Cost: 65 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": [
                "Analyze"
            ]
        },
        "deep_data": {
            "environment": "Resonates with support, offense.",
            "narrative": "Practitioners of Character Analysis use this to manipulate support.",
            "evolution": "Potential evolution: Efficient Processing"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 75,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    },
    {
        "id": "skill_character_analysis_100",
        "name": "The Grand Design",
        "type": "ACTIVE",
        "tier": "LEGENDARY",
        "tags": [],
        "stats": {
            "cooldown": 5,
            "cost": 80,
            "damage": 96
        },
        "description": "** Once per duel: Map out your next 5 turns in detail before taking them. Lock in this sequence. For each turn that executes exactly as planned (accounting for enemy interference), gain 10 Insight and +50% effect on all glyphs that turn. If plan fails on any turn, lose 20 Insight and skip your next turn.\r\n    * **Evo A (Flexible Design):** Can adjust 1 action per turn without penalty.\r\n    * **Evo B (Perfect Design):** Gain 15 Insight per successful turn.\r\n    * **Note:** *Ultimate test of strategic mastery. Requires planning multiple turns ahead while predicting enemy responses. Highest skill ceiling in the engine.*\r\n\r\n---",
        "lore_quote": "** *Ultimate test of strategic mastery. Requires planning multiple turns ahead while predicting enemy responses. Highest skill ceiling in the engine.*\r\n\r\n---",
        "tactical_brief": "Deploy The Grand Design to leverage .  Once per duel: Map out your next 5 turns in detail before t...",
        "mastery_perk": "Mastery Lvl 5: (Flexible Design): Can adjust 1 action per turn without penalty.\r\n    * Evo B (Perfect Design): Gain 15 Insight per successful turn.\r\n    * Note: *Ultimate test of strategic mastery. Requires planning multiple turns ahead while predicting enemy responses. Highest skill ceiling in the engine.*\r\n\r\n---",
        "gameplay_info": {
            "usage": [
                "Cost: 80 Gnosis",
                "Cooldown: 5 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Character Analysis use this to manipulate offense.",
            "evolution": "Potential evolution: Perfect Design"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 96,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Character Analysis.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Character Analysis"
    }
];
