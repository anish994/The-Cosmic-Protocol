
// Auto-generated from COMPLETE_SKILL_DATABASE.json
// Engine: Therapeutic
// Count: 100

window.SKILL_DB_THERAPEUTIC = [
    {
        "id": "skill_therapeutic_001",
        "name": "Minor Restoration",
        "type": "ACTIVE",
        "tier": "COMMON",
        "tags": [
            "HEAL"
        ],
        "stats": {
            "cooldown": 0,
            "cost": 10,
            "heal": 4
        },
        "description": "** [Heal] 8 Ojas, +1% Integrity.\r\n    * **Evo A (Quick Mend):** 0 cooldown but heals only 6 Ojas.\r\n    * **Evo B (Integrity Focus):** +3% Integrity instead of +1%.",
        "lore_quote": "\"A technique from the Therapeutic engine.\"",
        "tactical_brief": "Utilizes Therapeutic mechanics. Heal.",
        "mastery_perk": "Mastery Lvl 5: (Quick Mend): 0 cooldown but heals only 6 Ojas.\r\n    * Evo B (Integrity Focus): +3% Integrity instead of +1%.",
        "gameplay_info": {
            "usage": [
                "Cost: 10 Gnosis",
                "Cooldown: 0 Turns"
            ],
            "features": [
                "Heal"
            ]
        },
        "deep_data": {
            "environment": "Resonates with healing.",
            "narrative": "Practitioners of Therapeutic use this to manipulate healing.",
            "evolution": "Potential evolution: Integrity Focus"
        },
        "effects": [
            {
                "type": "HEAL",
                "value": 4,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_002",
        "name": "Vital Surge",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "HEAL",
            "HEAL"
        ],
        "stats": {
            "cooldown": 2,
            "cost": 35,
            "heal": 51
        },
        "description": "** [Heal] 30 Ojas instantly. If target is below 30% Ojas, heal 45 instead.\r\n    * **Evo A (Emergency Surge):** Threshold becomes 40% Ojas.\r\n    * **Evo B (Cascading Surge):** Also [Heal] adjacent ally for 15 Ojas.",
        "lore_quote": "\"A technique from the Therapeutic engine.\"",
        "tactical_brief": "Utilizes Therapeutic mechanics. Heal, Heal.",
        "mastery_perk": "Mastery Lvl 5: (Emergency Surge): Threshold becomes 40% Ojas.\r\n    * Evo B (Cascading Surge): Also [Heal] adjacent ally for 15 Ojas.",
        "gameplay_info": {
            "usage": [
                "Cost: 35 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": [
                "Heal",
                "Heal"
            ]
        },
        "deep_data": {
            "environment": "Resonates with healing, support.",
            "narrative": "Practitioners of Therapeutic use this to manipulate healing.",
            "evolution": "Potential evolution: Cascading Surge"
        },
        "effects": [
            {
                "type": "HEAL",
                "value": 51,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_003",
        "name": "Regenerative Pulse",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 2,
            "cost": 40,
            "damage": 48
        },
        "description": "** Apply HoT to all allies: Restore 4 Ojas per turn for 3 turns.\r\n    * **Evo A (Extended Pulse):** Duration 4 turns.\r\n    * **Evo B (Potent Pulse):** 6 Ojas per turn instead of 4.",
        "lore_quote": "\"A technique from the Therapeutic engine.\"",
        "tactical_brief": "Utilizes Therapeutic mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Extended Pulse): Duration 4 turns.\r\n    * Evo B (Potent Pulse): 6 Ojas per turn instead of 4.",
        "gameplay_info": {
            "usage": [
                "Cost: 40 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with support.",
            "narrative": "Practitioners of Therapeutic use this to manipulate support.",
            "evolution": "Potential evolution: Potent Pulse"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 48,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_004",
        "name": "Lifewell Protocol",
        "type": "ACTIVE",
        "tier": "COMMON",
        "tags": [],
        "stats": {
            "cooldown": 2,
            "cost": 30,
            "damage": 26
        },
        "description": "** For the next 2 turns, all HoT effects you cast have +50% potency.\r\n    * **Evo A (Deep Lifewell):** Duration 3 turns.\r\n    * **Evo B (Perfect Lifewell):** HoT effects +100% potency.",
        "lore_quote": "\"A technique from the Therapeutic engine.\"",
        "tactical_brief": "Utilizes Therapeutic mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Deep Lifewell): Duration 3 turns.\r\n    * Evo B (Perfect Lifewell): HoT effects +100% potency.",
        "gameplay_info": {
            "usage": [
                "Cost: 30 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Therapeutic use this to manipulate undefined.",
            "evolution": "Potential evolution: Perfect Lifewell"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 26,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_005",
        "name": "Overhealing Reservoir",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 45,
            "damage": 49
        },
        "description": "** For 3 turns, 75% of overhealing converts to temporary Ojas Shield.\r\n    * **Evo A (Perfect Reservoir):** 100% conversion rate.\r\n    * **Evo B (Extended Reservoir):** Duration 4 turns.",
        "lore_quote": "\"A technique from the Therapeutic engine.\"",
        "tactical_brief": "Utilizes Therapeutic mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Reservoir): 100% conversion rate.\r\n    * Evo B (Extended Reservoir): Duration 4 turns.",
        "gameplay_info": {
            "usage": [
                "Cost: 45 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with healing.",
            "narrative": "Practitioners of Therapeutic use this to manipulate healing.",
            "evolution": "Potential evolution: Extended Reservoir"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 49,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_006",
        "name": "Revitalization Wave",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "HEAL",
            "CLEANSE"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 50,
            "heal": 54
        },
        "description": "** [Heal] all allies for 15 Ojas and grant +2% Integrity.\r\n    * **Evo A (Tidal Wave):** Heal 25 Ojas instead.\r\n    * **Evo B (Purifying Wave):** Also [Cleanse] 1 debuff from each ally.",
        "lore_quote": "\"A technique from the Therapeutic engine.\"",
        "tactical_brief": "Utilizes Therapeutic mechanics. Heal, Cleanse.",
        "mastery_perk": "Mastery Lvl 5: (Tidal Wave): Heal 25 Ojas instead.\r\n    * Evo B (Purifying Wave): Also [Cleanse] 1 debuff from each ally.",
        "gameplay_info": {
            "usage": [
                "Cost: 50 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Heal",
                "Cleanse"
            ]
        },
        "deep_data": {
            "environment": "Resonates with healing, support.",
            "narrative": "Practitioners of Therapeutic use this to manipulate healing.",
            "evolution": "Potential evolution: Purifying Wave"
        },
        "effects": [
            {
                "type": "HEAL",
                "value": 54,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_007",
        "name": "Life Transfusion",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "HEAL"
        ],
        "stats": {
            "cooldown": 2,
            "cost": 35,
            "heal": 49
        },
        "description": "** Sacrifice 15 of your Ojas to [Heal] target ally for 30 Ojas.\r\n    * **Evo A (Efficient Transfusion):** Sacrifice only 10 Ojas to heal 30.\r\n    * **Evo B (Double Transfusion):** Heal two allies for 30 each (sacrifice 15 total).",
        "lore_quote": "\"A technique from the Therapeutic engine.\"",
        "tactical_brief": "Utilizes Therapeutic mechanics. Heal.",
        "mastery_perk": "Mastery Lvl 5: (Efficient Transfusion): Sacrifice only 10 Ojas to heal 30.\r\n    * Evo B (Double Transfusion): Heal two allies for 30 each (sacrifice 15 total).",
        "gameplay_info": {
            "usage": [
                "Cost: 35 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": [
                "Heal"
            ]
        },
        "deep_data": {
            "environment": "Resonates with healing, support.",
            "narrative": "Practitioners of Therapeutic use this to manipulate healing.",
            "evolution": "Potential evolution: Double Transfusion"
        },
        "effects": [
            {
                "type": "HEAL",
                "value": 49,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_008",
        "name": "Cellular Rewind",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [],
        "stats": {
            "cooldown": 4,
            "cost": 60,
            "damage": 72
        },
        "description": "** Reset target's Ojas to what it was 2 turns ago. Once per duel.\r\n    * **Evo A (Deep Rewind):** 3 turns ago instead of 2.\r\n    * **Evo B (Selective Rewind):** Can target ally or enemy.",
        "lore_quote": "\"A technique from the Therapeutic engine.\"",
        "tactical_brief": "Utilizes Therapeutic mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Deep Rewind): 3 turns ago instead of 2.\r\n    * Evo B (Selective Rewind): Can target ally or enemy.",
        "gameplay_info": {
            "usage": [
                "Cost: 60 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with support, offense.",
            "narrative": "Practitioners of Therapeutic use this to manipulate support.",
            "evolution": "Potential evolution: Selective Rewind"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 72,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_009",
        "name": "Vitality Echo",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "HEAL"
        ],
        "stats": {
            "cooldown": 2,
            "cost": 40,
            "heal": 50
        },
        "description": "** For 2 turns, your first [Heal] each turn is automatically repeated at 50% potency.\r\n    * **Evo A (Perfect Echo):** Repeated heal is at 75% potency.\r\n    * **Evo B (Sustained Echo):** Duration 3 turns.",
        "lore_quote": "\"A technique from the Therapeutic engine.\"",
        "tactical_brief": "Utilizes Therapeutic mechanics. Heal.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Echo): Repeated heal is at 75% potency.\r\n    * Evo B (Sustained Echo): Duration 3 turns.",
        "gameplay_info": {
            "usage": [
                "Cost: 40 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": [
                "Heal"
            ]
        },
        "deep_data": {
            "environment": "Resonates with healing, support.",
            "narrative": "Practitioners of Therapeutic use this to manipulate healing.",
            "evolution": "Potential evolution: Sustained Echo"
        },
        "effects": [
            {
                "type": "HEAL",
                "value": 50,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_010",
        "name": "Phoenix Renewal",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [
            "HEAL"
        ],
        "stats": {
            "cooldown": 4,
            "cost": 70,
            "heal": 76
        },
        "description": "** If an ally Yantra would be destroyed this turn, prevent it and [Heal] it to 30% Ojas instead. Cooldown: 4 turns.\r\n    * **Evo A (Full Phoenix):** Yantra restored to 50% Ojas.\r\n    * **Evo B (Cascading Phoenix):** Can save up to 2 Yantras in the same turn.\r\n\r\n---\r\n\r\n### **Energetic Field Modulation (Prevention Path) — 10 Skills**",
        "lore_quote": "\"A technique from the Therapeutic engine.\"",
        "tactical_brief": "Utilizes Therapeutic mechanics. Heal.",
        "mastery_perk": "Mastery Lvl 5: (Full Phoenix): Yantra restored to 50% Ojas.\r\n    * Evo B (Cascading Phoenix): Can save up to 2 Yantras in the same turn.\r\n\r\n---\r\n\r\n### Energetic Field Modulation (Prevention Path) — 10 Skills",
        "gameplay_info": {
            "usage": [
                "Cost: 70 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": [
                "Heal"
            ]
        },
        "deep_data": {
            "environment": "Resonates with healing, support.",
            "narrative": "Practitioners of Therapeutic use this to manipulate healing.",
            "evolution": "Potential evolution: Cascading Phoenix"
        },
        "effects": [
            {
                "type": "HEAL",
                "value": 76,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_011",
        "name": "Barrier Protocol",
        "type": "ACTIVE",
        "tier": "COMMON",
        "tags": [],
        "stats": {
            "cooldown": 1,
            "cost": 15,
            "damage": 3
        },
        "description": "** Grant 10 Shield.\r\n    * **Evo A (Stacking Ward):** Shield stacks if recast.\r\n    * **Evo B (Reflective Surface):** 15% damage reflect.",
        "lore_quote": "\"A technique from the Therapeutic engine.\"",
        "tactical_brief": "Utilizes Therapeutic mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Stacking Ward): Shield stacks if recast.\r\n    * Evo B (Reflective Surface): 15% damage reflect.",
        "gameplay_info": {
            "usage": [
                "Cost: 15 Gnosis",
                "Cooldown: 1 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Therapeutic use this to manipulate offense.",
            "evolution": "Potential evolution: Reflective Surface"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 3,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_012",
        "name": "Layered Defense",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "HEAL"
        ],
        "stats": {
            "cooldown": 2,
            "cost": 40,
            "heal": 50
        },
        "description": "** Grant 3 separate 10-point shields (each must be broken individually).\r\n    * **Evo A (Fortified Layers):** Each shield is 15 points.\r\n    * **Evo B (Reactive Layers):** When a layer breaks, [Heal] 5 Ojas.",
        "lore_quote": "\"A technique from the Therapeutic engine.\"",
        "tactical_brief": "Utilizes Therapeutic mechanics. Heal.",
        "mastery_perk": "Mastery Lvl 5: (Fortified Layers): Each shield is 15 points.\r\n    * Evo B (Reactive Layers): When a layer breaks, [Heal] 5 Ojas.",
        "gameplay_info": {
            "usage": [
                "Cost: 40 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": [
                "Heal"
            ]
        },
        "deep_data": {
            "environment": "Resonates with healing, support.",
            "narrative": "Practitioners of Therapeutic use this to manipulate healing.",
            "evolution": "Potential evolution: Reactive Layers"
        },
        "effects": [
            {
                "type": "HEAL",
                "value": 50,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_013",
        "name": "Adaptive Shielding",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "CLEANSE"
        ],
        "stats": {
            "cooldown": 2,
            "cost": 35,
            "damage": 49
        },
        "description": "** Grant 20 Shield. Shield gains +5 for each debuff on the target.\r\n    * **Evo A (Deep Adaptation):** +8 per debuff instead.\r\n    * **Evo B (Cleansing Adaptation):** When shield breaks, [Cleanse] 1 debuff.",
        "lore_quote": "\"A technique from the Therapeutic engine.\"",
        "tactical_brief": "Utilizes Therapeutic mechanics. Cleanse.",
        "mastery_perk": "Mastery Lvl 5: (Deep Adaptation): +8 per debuff instead.\r\n    * Evo B (Cleansing Adaptation): When shield breaks, [Cleanse] 1 debuff.",
        "gameplay_info": {
            "usage": [
                "Cost: 35 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": [
                "Cleanse"
            ]
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Therapeutic use this to manipulate undefined.",
            "evolution": "Potential evolution: Cleansing Adaptation"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 49,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_014",
        "name": "Damage Dampener",
        "type": "ACTIVE",
        "tier": "COMMON",
        "tags": [],
        "stats": {
            "cooldown": 2,
            "cost": 30,
            "damage": 26
        },
        "description": "** For 2 turns, reduce all incoming damage by 25%.\r\n    * **Evo A (Stone Form):** 40% reduction but only 1 turn.\r\n    * **Evo B (Extended Dampener):** Duration 3 turns.",
        "lore_quote": "\"A technique from the Therapeutic engine.\"",
        "tactical_brief": "Utilizes Therapeutic mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Stone Form): 40% reduction but only 1 turn.\r\n    * Evo B (Extended Dampener): Duration 3 turns.",
        "gameplay_info": {
            "usage": [
                "Cost: 30 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Therapeutic use this to manipulate offense.",
            "evolution": "Potential evolution: Extended Dampener"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 26,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_015",
        "name": "Ablative Coating",
        "type": "ACTIVE",
        "tier": "COMMON",
        "tags": [
            "HEAL"
        ],
        "stats": {
            "cooldown": 1,
            "cost": 25,
            "heal": 27
        },
        "description": "** Grant 30 Shield, but it loses 5 points at the start of each turn.\r\n    * **Evo A (Hardened Coating):** Loses only 3 points per turn.\r\n    * **Evo B (Reactive Coating):** When shield fully decays naturally, [Heal] 15 Ojas.",
        "lore_quote": "\"A technique from the Therapeutic engine.\"",
        "tactical_brief": "Utilizes Therapeutic mechanics. Heal.",
        "mastery_perk": "Mastery Lvl 5: (Hardened Coating): Loses only 3 points per turn.\r\n    * Evo B (Reactive Coating): When shield fully decays naturally, [Heal] 15 Ojas.",
        "gameplay_info": {
            "usage": [
                "Cost: 25 Gnosis",
                "Cooldown: 1 Turns"
            ],
            "features": [
                "Heal"
            ]
        },
        "deep_data": {
            "environment": "Resonates with healing, support.",
            "narrative": "Practitioners of Therapeutic use this to manipulate healing.",
            "evolution": "Potential evolution: Reactive Coating"
        },
        "effects": [
            {
                "type": "HEAL",
                "value": 27,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_016",
        "name": "Reflective Ward",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 45,
            "damage": 49
        },
        "description": "** Grant 15 Shield. Reflect 30% of all absorbed damage back to attacker.\r\n    * **Evo A (Perfect Reflection):** Reflect 50% instead.\r\n    * **Evo B (Amplified Ward):** Shield becomes 25 points.",
        "lore_quote": "\"A technique from the Therapeutic engine.\"",
        "tactical_brief": "Utilizes Therapeutic mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Reflection): Reflect 50% instead.\r\n    * Evo B (Amplified Ward): Shield becomes 25 points.",
        "gameplay_info": {
            "usage": [
                "Cost: 45 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Therapeutic use this to manipulate offense.",
            "evolution": "Potential evolution: Amplified Ward"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 49,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_017",
        "name": "Sanctuary Dome",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 50,
            "damage": 50
        },
        "description": "** Create a 3x3 zone for 2 turns: All allies inside gain 10 Shield at the start of their turn.\r\n    * **Evo A (Extended Dome):** Duration 3 turns.\r\n    * **Evo B (Fortified Dome):** Grant 15 Shield instead of 10.",
        "lore_quote": "\"A technique from the Therapeutic engine.\"",
        "tactical_brief": "Utilizes Therapeutic mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Extended Dome): Duration 3 turns.\r\n    * Evo B (Fortified Dome): Grant 15 Shield instead of 10.",
        "gameplay_info": {
            "usage": [
                "Cost: 50 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with support.",
            "narrative": "Practitioners of Therapeutic use this to manipulate support.",
            "evolution": "Potential evolution: Fortified Dome"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 50,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_018",
        "name": "Shield Synthesis",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 2,
            "cost": 40,
            "damage": 48
        },
        "description": "** Merge all active shields on a target into one larger shield (+20% total value).\r\n    * **Evo A (Perfect Synthesis):** +40% total value.\r\n    * **Evo B (Cascading Synthesis):** Also grant +3% Integrity.",
        "lore_quote": "\"A technique from the Therapeutic engine.\"",
        "tactical_brief": "Utilizes Therapeutic mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Synthesis): +40% total value.\r\n    * Evo B (Cascading Synthesis): Also grant +3% Integrity.",
        "gameplay_info": {
            "usage": [
                "Cost: 40 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Therapeutic use this to manipulate undefined.",
            "evolution": "Potential evolution: Cascading Synthesis"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 48,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_019",
        "name": "Preemptive Barrier",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 2,
            "cost": 35,
            "damage": 47
        },
        "description": "** At the start of enemy turn, if they would deal damage, automatically grant 15 Shield to the target.\r\n    * **Evo A (Perfect Timing):** Shield becomes 25 points.\r\n    * **Evo B (Multi-Barrier):** Can trigger twice per turn.",
        "lore_quote": "\"A technique from the Therapeutic engine.\"",
        "tactical_brief": "Utilizes Therapeutic mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Timing): Shield becomes 25 points.\r\n    * Evo B (Multi-Barrier): Can trigger twice per turn.",
        "gameplay_info": {
            "usage": [
                "Cost: 35 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with support, offense.",
            "narrative": "Practitioners of Therapeutic use this to manipulate support.",
            "evolution": "Potential evolution: Multi-Barrier"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 47,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_020",
        "name": "Fortress Protocol",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [
            "SUNDER"
        ],
        "stats": {
            "cooldown": 4,
            "cost": 60,
            "damage": 74
        },
        "description": "** Grant 50 Shield and immunity to [Sunder] for 2 turns.\r\n    * **Evo A (Impenetrable):** Shield becomes 70 points.\r\n    * **Evo B (Extended Fortress):** Duration 3 turns.\r\n\r\n---\r\n\r\n### **Healing Protocols (Purification Path) — 10 Skills**",
        "lore_quote": "\"A technique from the Therapeutic engine.\"",
        "tactical_brief": "Utilizes Therapeutic mechanics. Sunder.",
        "mastery_perk": "Mastery Lvl 5: (Impenetrable): Shield becomes 70 points.\r\n    * Evo B (Extended Fortress): Duration 3 turns.\r\n\r\n---\r\n\r\n### Healing Protocols (Purification Path) — 10 Skills",
        "gameplay_info": {
            "usage": [
                "Cost: 60 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": [
                "Sunder"
            ]
        },
        "deep_data": {
            "environment": "Resonates with healing.",
            "narrative": "Practitioners of Therapeutic use this to manipulate healing.",
            "evolution": "Potential evolution: Extended Fortress"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 74,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_021",
        "name": "Purity Pulse",
        "type": "ACTIVE",
        "tier": "COMMON",
        "tags": [
            "CLEANSE"
        ],
        "stats": {
            "cooldown": 1,
            "cost": 20,
            "damage": 26
        },
        "description": "** [Cleanse] 1 debuff from self.\r\n    * **Evo A (Area Cleanse):** Also cleanses adjacent ally.\r\n    * **Evo B (Preventative Dose):** Grants 1-turn immunity to next debuff.",
        "lore_quote": "\"A technique from the Therapeutic engine.\"",
        "tactical_brief": "Utilizes Therapeutic mechanics. Cleanse.",
        "mastery_perk": "Mastery Lvl 5: (Area Cleanse): Also cleanses adjacent ally.\r\n    * Evo B (Preventative Dose): Grants 1-turn immunity to next debuff.",
        "gameplay_info": {
            "usage": [
                "Cost: 20 Gnosis",
                "Cooldown: 1 Turns"
            ],
            "features": [
                "Cleanse"
            ]
        },
        "deep_data": {
            "environment": "Resonates with support.",
            "narrative": "Practitioners of Therapeutic use this to manipulate support.",
            "evolution": "Potential evolution: Preventative Dose"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 26,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_022",
        "name": "Mass Purification",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "CLEANSE",
            "CLEANSE",
            "HEAL"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 45,
            "heal": 55
        },
        "description": "** [Cleanse] 1 debuff from all allies.\r\n    * **Evo A (Deep Purification):** [Cleanse] 2 debuffs instead.\r\n    * **Evo B (Healing Purification):** Also [Heal] 10 Ojas per debuff removed.",
        "lore_quote": "\"A technique from the Therapeutic engine.\"",
        "tactical_brief": "Utilizes Therapeutic mechanics. Cleanse, Cleanse, Heal.",
        "mastery_perk": "Mastery Lvl 5: (Deep Purification): [Cleanse] 2 debuffs instead.\r\n    * Evo B (Healing Purification): Also [Heal] 10 Ojas per debuff removed.",
        "gameplay_info": {
            "usage": [
                "Cost: 45 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Cleanse",
                "Cleanse",
                "Heal"
            ]
        },
        "deep_data": {
            "environment": "Resonates with healing, support.",
            "narrative": "Practitioners of Therapeutic use this to manipulate healing.",
            "evolution": "Potential evolution: Healing Purification"
        },
        "effects": [
            {
                "type": "HEAL",
                "value": 55,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_023",
        "name": "Debuff Immunity",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "DEBUFF"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 50,
            "damage": 52
        },
        "description": "** Grant immunity to all [Debuff] effects for 2 turns. Any blocked debuff grants +1% Integrity.\r\n    * **Evo A (Extended Immunity):** Duration 3 turns.\r\n    * **Evo B (Offensive Immunity):** Blocked debuffs reflect 10 damage to caster.",
        "lore_quote": "\"A technique from the Therapeutic engine.\"",
        "tactical_brief": "Utilizes Therapeutic mechanics. Debuff.",
        "mastery_perk": "Mastery Lvl 5: (Extended Immunity): Duration 3 turns.\r\n    * Evo B (Offensive Immunity): Blocked debuffs reflect 10 damage to caster.",
        "gameplay_info": {
            "usage": [
                "Cost: 50 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Debuff"
            ]
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Therapeutic use this to manipulate offense.",
            "evolution": "Potential evolution: Offensive Immunity"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 52,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_024",
        "name": "Purging Light",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "CLEANSE",
            "CLEANSE",
            "HEAL"
        ],
        "stats": {
            "cooldown": 2,
            "cost": 40,
            "heal": 54
        },
        "description": "** [Cleanse] all debuffs with 1 turn or less remaining duration.\r\n    * **Evo A (Extended Purge):** [Cleanse] debuffs with 2 turns or less.\r\n    * **Evo B (Healing Purge):** [Heal] 5 Ojas per debuff removed.",
        "lore_quote": "\"A technique from the Therapeutic engine.\"",
        "tactical_brief": "Utilizes Therapeutic mechanics. Cleanse, Cleanse, Heal.",
        "mastery_perk": "Mastery Lvl 5: (Extended Purge): [Cleanse] debuffs with 2 turns or less.\r\n    * Evo B (Healing Purge): [Heal] 5 Ojas per debuff removed.",
        "gameplay_info": {
            "usage": [
                "Cost: 40 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": [
                "Cleanse",
                "Cleanse",
                "Heal"
            ]
        },
        "deep_data": {
            "environment": "Resonates with healing.",
            "narrative": "Practitioners of Therapeutic use this to manipulate healing.",
            "evolution": "Potential evolution: Healing Purge"
        },
        "effects": [
            {
                "type": "HEAL",
                "value": 54,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_025",
        "name": "Status Lock",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "CLEANSED"
        ],
        "stats": {
            "cooldown": 2,
            "cost": 35,
            "damage": 49
        },
        "description": "** For 2 turns, the first debuff applied to you is immediately [Cleansed].\r\n    * **Evo A (Multi-Lock):** Cleanses first 2 debuffs instead.\r\n    * **Evo B (Perfect Lock):** Duration 3 turns.",
        "lore_quote": "\"A technique from the Therapeutic engine.\"",
        "tactical_brief": "Utilizes Therapeutic mechanics. Cleansed.",
        "mastery_perk": "Mastery Lvl 5: (Multi-Lock): Cleanses first 2 debuffs instead.\r\n    * Evo B (Perfect Lock): Duration 3 turns.",
        "gameplay_info": {
            "usage": [
                "Cost: 35 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": [
                "Cleansed"
            ]
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Therapeutic use this to manipulate undefined.",
            "evolution": "Potential evolution: Perfect Lock"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 49,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_026",
        "name": "Dosha Reversal",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 55,
            "damage": 71
        },
        "description": "** Target a negative Dosha. Its effect is inverted into a positive buff for 2 turns.\r\n    * **Evo A (Sustained Reversal):** Duration 3 turns.\r\n    * **Evo B (Amplified Reversal):** Positive buff is +50% stronger than original debuff.",
        "lore_quote": "\"A technique from the Therapeutic engine.\"",
        "tactical_brief": "Utilizes Therapeutic mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Sustained Reversal): Duration 3 turns.\r\n    * Evo B (Amplified Reversal): Positive buff is +50% stronger than original debuff.",
        "gameplay_info": {
            "usage": [
                "Cost: 55 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Therapeutic use this to manipulate undefined.",
            "evolution": "Potential evolution: Amplified Reversal"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 71,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_027",
        "name": "Cleansing Cascade",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "CLEANSE",
            "CLEANSE",
            "HEALS"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 45,
            "damage": 55
        },
        "description": "** [Cleanse] 1 debuff from target. If successful, [Cleanse] 1 from an adjacent ally.\r\n    * **Evo A (Perfect Cascade):** Chains to up to 3 allies total.\r\n    * **Evo B (Healing Cascade):** Each cleanse also [Heals] 8 Ojas.",
        "lore_quote": "\"A technique from the Therapeutic engine.\"",
        "tactical_brief": "Utilizes Therapeutic mechanics. Cleanse, Cleanse, Heals.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Cascade): Chains to up to 3 allies total.\r\n    * Evo B (Healing Cascade): Each cleanse also [Heals] 8 Ojas.",
        "gameplay_info": {
            "usage": [
                "Cost: 45 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Cleanse",
                "Cleanse",
                "Heals"
            ]
        },
        "deep_data": {
            "environment": "Resonates with healing, support.",
            "narrative": "Practitioners of Therapeutic use this to manipulate healing.",
            "evolution": "Potential evolution: Healing Cascade"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 55,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_028",
        "name": "Purity Aura",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "CLEANSE"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 50,
            "damage": 52
        },
        "description": "** Create a 3x3 aura for 2 turns: Debuffs cannot be applied to allies inside.\r\n    * **Evo A (Extended Aura):** Duration 3 turns.\r\n    * **Evo B (Purging Aura):** On creation, [Cleanse] all debuffs from allies inside.",
        "lore_quote": "\"A technique from the Therapeutic engine.\"",
        "tactical_brief": "Utilizes Therapeutic mechanics. Cleanse.",
        "mastery_perk": "Mastery Lvl 5: (Extended Aura): Duration 3 turns.\r\n    * Evo B (Purging Aura): On creation, [Cleanse] all debuffs from allies inside.",
        "gameplay_info": {
            "usage": [
                "Cost: 50 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Cleanse"
            ]
        },
        "deep_data": {
            "environment": "Resonates with support.",
            "narrative": "Practitioners of Therapeutic use this to manipulate support.",
            "evolution": "Potential evolution: Purging Aura"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 52,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_029",
        "name": "Stabilize",
        "type": "ACTIVE",
        "tier": "COMMON",
        "tags": [
            "HEAL"
        ],
        "stats": {
            "cooldown": 1,
            "cost": 25,
            "heal": 27
        },
        "description": "** If target is below 30% Ojas, [Heal] 20 and grant 15 Shield. Once per duel.\r\n    * **Evo A (Emergency Protocol):** Usable at <40% Ojas.\r\n    * **Evo B (Defensive Surge):** Also grants +20% damage reduction for 1 turn.",
        "lore_quote": "\"A technique from the Therapeutic engine.\"",
        "tactical_brief": "Utilizes Therapeutic mechanics. Heal.",
        "mastery_perk": "Mastery Lvl 5: (Emergency Protocol): Usable at <40% Ojas.\r\n    * Evo B (Defensive Surge): Also grants +20% damage reduction for 1 turn.",
        "gameplay_info": {
            "usage": [
                "Cost: 25 Gnosis",
                "Cooldown: 1 Turns"
            ],
            "features": [
                "Heal"
            ]
        },
        "deep_data": {
            "environment": "Resonates with healing, offense.",
            "narrative": "Practitioners of Therapeutic use this to manipulate healing.",
            "evolution": "Potential evolution: Defensive Surge"
        },
        "effects": [
            {
                "type": "HEAL",
                "value": 27,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_030",
        "name": "Resurrection Rite",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [
            "CLEANSE",
            "HEAL",
            "SUNDER",
            "STUNS",
            "CLEANSE",
            "VULNERABLE",
            "BURN",
            "DECAY",
            "STUN"
        ],
        "stats": {
            "cooldown": 4,
            "cost": 70,
            "heal": 92
        },
        "description": "** [Cleanse] all debuffs from all allies and grant them immunity to debuffs for 1 turn.\r\n    * **Evo A (Extended Rite):** Immunity lasts 2 turns.\r\n    * **Evo B (Healing Rite):** Also [Heal] all allies for 15 Ojas.\r\n\r\n---\r\n\r\n### **Vitality Weaving (Woven States) — 6 New Sequences**\r\n\r\n31. **Woven State: Aegis** (Shield→Shield→Heal)\r\n    * **Core Function:** +40% Shields, immune to [Sunder] for 3 turns.\r\n    * **Evo A (Impenetrable):** Duration 4 turns.\r\n    * **Evo B (Reactive Aegis):** Breaking a shield [Stuns] attacker 1 turn.\r\n\r\n32. **Woven State: Renewal** (Heal→Heal→Cleanse)\r\n    * **Core Function:** Double HoT potency for 3 turns.\r\n    * **Evo A (Persistent Renewal):** Duration 4 turns.\r\n    * **Evo B (Cleansing Bloom):** Also [Cleanse] 1 debuff per turn.\r\n\r\n33. **Woven State: Symbiosis** (Cleanse→Heal→Shield)\r\n    * **Core Function:** Healing also applies 50% as Shield for 2 turns.\r\n    * **Evo A (Full Conversion):** 100% heal→shield conversion.\r\n    * **Evo B (Aura Symbiosis):** Affects all allies in range.\r\n\r\n34. **Woven State: Retribution** (Shield→Cleanse→Shield)\r\n    * **Core Function:** Shields reflect 25% damage for 3 turns.\r\n    * **Evo A (Aggressive Defense):** Reflect 40%.\r\n    * **Evo B (Cleansing Vengeance):** Reflected damage also applies [Vulnerable] to attacker.\r\n\r\n35. **Woven State: Tranquility** (Heal→Shield→Cleanse)\r\n    * **Core Function:** Immune to [Burn]/[Decay] for 3 turns.\r\n    * **Evo A (Perfect Calm):** Also immune to [Stun].\r\n    * **Evo B (Serenity Aura):** Affects adjacent allies.\r\n\r\n36. **Woven State: Bastion** (Shield→Shield→Shield)\r\n    * **Core Function:** Triple stacking shields for 2 turns.\r\n    * **Evo A (Fortress Core):** Stacks up to 5×.\r\n    * **Evo B (Overloaded Barrier):** Each stack grants +2% Integrity.\r\n\r\n---\r\n\r\n### **Ojas Integrity Threshold Skills — 4 Skills**",
        "lore_quote": "\"A technique from the Therapeutic engine.\"",
        "tactical_brief": "Utilizes Therapeutic mechanics. Cleanse, Heal, Sunder, Stuns, Cleanse, Vulnerable, Burn, Decay, Stun.",
        "mastery_perk": "Mastery Lvl 5: (Extended Rite): Immunity lasts 2 turns.\r\n    * Evo B (Healing Rite): Also [Heal] all allies for 15 Ojas.\r\n\r\n---\r\n\r\n### Vitality Weaving (Woven States) — 6 New Sequences\r\n\r\n31. Woven State: Aegis (Shield→Shield→Heal)\r\n    * Core Function: +40% Shields, immune to [Sunder] for 3 turns.\r\n    * Evo A (Impenetrable): Duration 4 turns.\r\n    * Evo B (Reactive Aegis): Breaking a shield [Stuns] attacker 1 turn.\r\n\r\n32. Woven State: Renewal (Heal→Heal→Cleanse)\r\n    * Core Function: Double HoT potency for 3 turns.\r\n    * Evo A (Persistent Renewal): Duration 4 turns.\r\n    * Evo B (Cleansing Bloom): Also [Cleanse] 1 debuff per turn.\r\n\r\n33. Woven State: Symbiosis (Cleanse→Heal→Shield)\r\n    * Core Function: Healing also applies 50% as Shield for 2 turns.\r\n    * Evo A (Full Conversion): 100% heal→shield conversion.\r\n    * Evo B (Aura Symbiosis): Affects all allies in range.\r\n\r\n34. Woven State: Retribution (Shield→Cleanse→Shield)\r\n    * Core Function: Shields reflect 25% damage for 3 turns.\r\n    * Evo A (Aggressive Defense): Reflect 40%.\r\n    * Evo B (Cleansing Vengeance): Reflected damage also applies [Vulnerable] to attacker.\r\n\r\n35. Woven State: Tranquility (Heal→Shield→Cleanse)\r\n    * Core Function: Immune to [Burn]/[Decay] for 3 turns.\r\n    * Evo A (Perfect Calm): Also immune to [Stun].\r\n    * Evo B (Serenity Aura): Affects adjacent allies.\r\n\r\n36. Woven State: Bastion (Shield→Shield→Shield)\r\n    * Core Function: Triple stacking shields for 2 turns.\r\n    * Evo A (Fortress Core): Stacks up to 5×.\r\n    * Evo B (Overloaded Barrier): Each stack grants +2% Integrity.\r\n\r\n---\r\n\r\n### Ojas Integrity Threshold Skills — 4 Skills",
        "gameplay_info": {
            "usage": [
                "Cost: 70 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": [
                "Cleanse",
                "Heal",
                "Sunder",
                "Stuns",
                "Cleanse",
                "Vulnerable",
                "Burn",
                "Decay",
                "Stun"
            ]
        },
        "deep_data": {
            "environment": "Resonates with healing, dot, support, offense.",
            "narrative": "Practitioners of Therapeutic use this to manipulate healing.",
            "evolution": "Potential evolution: Healing Rite"
        },
        "effects": [
            {
                "type": "HEAL",
                "value": 92,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_037",
        "name": "Integrity Milestone: 100%",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 2,
            "cost": 40,
            "damage": 48
        },
        "description": "** At 100% Integrity, all glyphs cost -1 Prana.\r\n    * **Evo A (Perfect State):** Cost reduction -2.\r\n    * **Evo B (Integrity Shield):** Gain permanent 10 Shield while at 100%.",
        "lore_quote": "\"A technique from the Therapeutic engine.\"",
        "tactical_brief": "Utilizes Therapeutic mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect State): Cost reduction -2.\r\n    * Evo B (Integrity Shield): Gain permanent 10 Shield while at 100%.",
        "gameplay_info": {
            "usage": [
                "Cost: 40 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Therapeutic use this to manipulate undefined.",
            "evolution": "Potential evolution: Integrity Shield"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 48,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_038",
        "name": "Integrity Milestone: 75%+",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "SHIELD"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 50,
            "damage": 52
        },
        "description": "** At 75%+, first [Shield] each turn is doubled.\r\n    * **Evo A (Sustained Defense):** Threshold lowered to 70%.\r\n    * **Evo B (Shield Resonance):** Also grants +10% Shield to allies.",
        "lore_quote": "\"A technique from the Therapeutic engine.\"",
        "tactical_brief": "Utilizes Therapeutic mechanics. Shield.",
        "mastery_perk": "Mastery Lvl 5: (Sustained Defense): Threshold lowered to 70%.\r\n    * Evo B (Shield Resonance): Also grants +10% Shield to allies.",
        "gameplay_info": {
            "usage": [
                "Cost: 50 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Shield"
            ]
        },
        "deep_data": {
            "environment": "Resonates with defense, support.",
            "narrative": "Practitioners of Therapeutic use this to manipulate defense.",
            "evolution": "Potential evolution: Shield Resonance"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 52,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_039",
        "name": "Integrity Milestone: 50%+",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [
            "CLEANSE",
            "HEALS",
            "CLEANSE"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 55,
            "damage": 77
        },
        "description": "** At 50%+, [Cleanse] also [Heals] 5 Ojas.\r\n    * **Evo A (Restorative Cleanse):** Heal increased to 10.\r\n    * **Evo B (Cascading Purity):** [Cleanse] 2 debuffs instead of 1.",
        "lore_quote": "\"A technique from the Therapeutic engine.\"",
        "tactical_brief": "Utilizes Therapeutic mechanics. Cleanse, Heals, Cleanse.",
        "mastery_perk": "Mastery Lvl 5: (Restorative Cleanse): Heal increased to 10.\r\n    * Evo B (Cascading Purity): [Cleanse] 2 debuffs instead of 1.",
        "gameplay_info": {
            "usage": [
                "Cost: 55 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Cleanse",
                "Heals",
                "Cleanse"
            ]
        },
        "deep_data": {
            "environment": "Resonates with healing.",
            "narrative": "Practitioners of Therapeutic use this to manipulate healing.",
            "evolution": "Potential evolution: Cascading Purity"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 77,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_040",
        "name": "Integrity Overflow",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [
            "SHIELD"
        ],
        "stats": {
            "cooldown": 4,
            "cost": 70,
            "damage": 76
        },
        "description": "** If Integrity would exceed 100%, convert excess to [Shield] (1% = 5 Shield).\r\n    * **Evo A (Efficient Overflow):** 1% = 10 Shield.\r\n    * **Evo B (Cascading Overflow):** Overflow also grants +5 Bandwidth.\r\n\r\n---\r\n\r\n### **HEALING SPECIALIZATIONS — 15 Skills**",
        "lore_quote": "\"A technique from the Therapeutic engine.\"",
        "tactical_brief": "Utilizes Therapeutic mechanics. Shield.",
        "mastery_perk": "Mastery Lvl 5: (Efficient Overflow): 1% = 10 Shield.\r\n    * Evo B (Cascading Overflow): Overflow also grants +5 Bandwidth.\r\n\r\n---\r\n\r\n### HEALING SPECIALIZATIONS — 15 Skills",
        "gameplay_info": {
            "usage": [
                "Cost: 70 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": [
                "Shield"
            ]
        },
        "deep_data": {
            "environment": "Resonates with defense, healing.",
            "narrative": "Practitioners of Therapeutic use this to manipulate defense.",
            "evolution": "Potential evolution: Cascading Overflow"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 76,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_041",
        "name": "Healing Purist",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "SHIELD",
            "HEAL"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 45,
            "heal": 53
        },
        "description": "** Cannot use [Shield] glyphs. All [Heal] effects +75%. Start duel with +20% max Ojas.\r\n    * **Evo A (Perfect Purist):** +100% healing instead.\r\n    * **Evo B (Ascetic Healer):** Also gain +25% Ojas Integrity generation.\r\n    * **Note:** *Pure healing specialist vs hybrid builds. Vastly different optimization.*",
        "lore_quote": "** *Pure healing specialist vs hybrid builds. Vastly different optimization.*",
        "tactical_brief": "Utilizes Therapeutic mechanics. Shield, Heal.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Purist): +100% healing instead.\r\n    * Evo B (Ascetic Healer): Also gain +25% Ojas Integrity generation.\r\n    * Note: *Pure healing specialist vs hybrid builds. Vastly different optimization.*",
        "gameplay_info": {
            "usage": [
                "Cost: 45 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Shield",
                "Heal"
            ]
        },
        "deep_data": {
            "environment": "Resonates with defense, healing.",
            "narrative": "Practitioners of Therapeutic use this to manipulate defense.",
            "evolution": "Potential evolution: Ascetic Healer"
        },
        "effects": [
            {
                "type": "HEAL",
                "value": 53,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_042",
        "name": "Overheal Master",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 50,
            "damage": 50
        },
        "description": "** Overhealing no longer wastes value—converts to permanent max Ojas increase (10 overheal = +1 max Ojas, cap +50).\r\n    * **Evo A (Perfect Master):** Conversion rate 8:1 instead of 10:1.\r\n    * **Evo B (Unlimited Master):** No cap on max Ojas increase.\r\n    * **Note:** *Long-game scaling vs immediate value. Greedy healer build.*",
        "lore_quote": "** *Long-game scaling vs immediate value. Greedy healer build.*",
        "tactical_brief": "Utilizes Therapeutic mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Master): Conversion rate 8:1 instead of 10:1.\r\n    * Evo B (Unlimited Master): No cap on max Ojas increase.\r\n    * Note: *Long-game scaling vs immediate value. Greedy healer build.*",
        "gameplay_info": {
            "usage": [
                "Cost: 50 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with healing.",
            "narrative": "Practitioners of Therapeutic use this to manipulate healing.",
            "evolution": "Potential evolution: Unlimited Master"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 50,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_043",
        "name": "Draining Touch",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "HEAL"
        ],
        "stats": {
            "cooldown": 2,
            "cost": 40,
            "heal": 50
        },
        "description": "** Deal 20 damage to enemy, [Heal] ally for 30. Can target same unit.\r\n    * **Evo A (Perfect Drain):** Damage 30, Heal 50.\r\n    * **Evo B (Mass Drain):** Affects 2 enemies and 2 allies.\r\n    * **Note:** *Offensive healer vs passive support. Completely different playstyle.*",
        "lore_quote": "** *Offensive healer vs passive support. Completely different playstyle.*",
        "tactical_brief": "Utilizes Therapeutic mechanics. Heal.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Drain): Damage 30, Heal 50.\r\n    * Evo B (Mass Drain): Affects 2 enemies and 2 allies.\r\n    * Note: *Offensive healer vs passive support. Completely different playstyle.*",
        "gameplay_info": {
            "usage": [
                "Cost: 40 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": [
                "Heal"
            ]
        },
        "deep_data": {
            "environment": "Resonates with healing, support, offense.",
            "narrative": "Practitioners of Therapeutic use this to manipulate healing.",
            "evolution": "Potential evolution: Mass Drain"
        },
        "effects": [
            {
                "type": "HEAL",
                "value": 50,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_044",
        "name": "Healing Chain",
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
        "description": "** [Heal] target for 25. Chains to adjacent allies at 50% potency (up to 3 chains).\r\n    * **Evo A (Perfect Chain):** Chains at 75% potency.\r\n    * **Evo B (Extended Chain):** Up to 5 chains total.\r\n    * **Note:** *Position-dependent healing. Rewards tactical placement.*",
        "lore_quote": "** *Position-dependent healing. Rewards tactical placement.*",
        "tactical_brief": "Utilizes Therapeutic mechanics. Heal.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Chain): Chains at 75% potency.\r\n    * Evo B (Extended Chain): Up to 5 chains total.\r\n    * Note: *Position-dependent healing. Rewards tactical placement.*",
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
            "environment": "Resonates with healing, support.",
            "narrative": "Practitioners of Therapeutic use this to manipulate healing.",
            "evolution": "Potential evolution: Extended Chain"
        },
        "effects": [
            {
                "type": "HEAL",
                "value": 51,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_045",
        "name": "Sacrificial Healer",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [
            "HEAL"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 55,
            "heal": 73
        },
        "description": "** For 3 turns, lose 10 Ojas per turn but all allies [Heal] 15 per turn.\r\n    * **Evo A (Perfect Sacrifice):** Allies heal 25 per turn.\r\n    * **Evo B (Tolerable Sacrifice):** You only lose 7 Ojas per turn.\r\n    * **Note:** *Self-damage for team gain. Risk/reward specialist.*",
        "lore_quote": "** *Self-damage for team gain. Risk/reward specialist.*",
        "tactical_brief": "Utilizes Therapeutic mechanics. Heal.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Sacrifice): Allies heal 25 per turn.\r\n    * Evo B (Tolerable Sacrifice): You only lose 7 Ojas per turn.\r\n    * Note: *Self-damage for team gain. Risk/reward specialist.*",
        "gameplay_info": {
            "usage": [
                "Cost: 55 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Heal"
            ]
        },
        "deep_data": {
            "environment": "Resonates with healing, support, offense.",
            "narrative": "Practitioners of Therapeutic use this to manipulate healing.",
            "evolution": "Potential evolution: Tolerable Sacrifice"
        },
        "effects": [
            {
                "type": "HEAL",
                "value": 73,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_046",
        "name": "Burst Heal Protocol",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "HEAL"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 50,
            "heal": 52
        },
        "description": "** [Heal] target for (current Ojas Integrity × 2). Resets Integrity to 0.\r\n    * **Evo A (Perfect Burst):** ×3 instead of ×2.\r\n    * **Evo B (Partial Burst):** Only lose 50% of Integrity.\r\n    * **Note:** *All-in healing moment vs sustained Integrity management.*",
        "lore_quote": "** *All-in healing moment vs sustained Integrity management.*",
        "tactical_brief": "Utilizes Therapeutic mechanics. Heal.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Burst): ×3 instead of ×2.\r\n    * Evo B (Partial Burst): Only lose 50% of Integrity.\r\n    * Note: *All-in healing moment vs sustained Integrity management.*",
        "gameplay_info": {
            "usage": [
                "Cost: 50 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Heal"
            ]
        },
        "deep_data": {
            "environment": "Resonates with healing.",
            "narrative": "Practitioners of Therapeutic use this to manipulate healing.",
            "evolution": "Potential evolution: Partial Burst"
        },
        "effects": [
            {
                "type": "HEAL",
                "value": 52,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_047",
        "name": "Healing Echo Chamber",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [
            "HEAL"
        ],
        "stats": {
            "cooldown": 4,
            "cost": 60,
            "heal": 74
        },
        "description": "** For 3 turns, all [Heal] glyphs trigger twice at 60% potency each.\r\n    * **Evo A (Perfect Echo):** 80% potency each.\r\n    * **Evo B (Extended Echo):** Duration 4 turns.\r\n    * **Note:** *Double-casting healer specialist. Combo-focused build.*",
        "lore_quote": "** *Double-casting healer specialist. Combo-focused build.*",
        "tactical_brief": "Utilizes Therapeutic mechanics. Heal.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Echo): 80% potency each.\r\n    * Evo B (Extended Echo): Duration 4 turns.\r\n    * Note: *Double-casting healer specialist. Combo-focused build.*",
        "gameplay_info": {
            "usage": [
                "Cost: 60 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": [
                "Heal"
            ]
        },
        "deep_data": {
            "environment": "Resonates with healing.",
            "narrative": "Practitioners of Therapeutic use this to manipulate healing.",
            "evolution": "Potential evolution: Extended Echo"
        },
        "effects": [
            {
                "type": "HEAL",
                "value": 74,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_048",
        "name": "Proximity Healer",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 45,
            "damage": 49
        },
        "description": "** Cannot heal targets more than 2 spaces away. All healing +50% potency.\r\n    * **Evo A (Perfect Proximity):** +75% potency.\r\n    * **Evo B (Extended Proximity):** Range 3 spaces.\r\n    * **Note:** *Positioning restriction for power. Melee healer archetype.*",
        "lore_quote": "** *Positioning restriction for power. Melee healer archetype.*",
        "tactical_brief": "Utilizes Therapeutic mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Proximity): +75% potency.\r\n    * Evo B (Extended Proximity): Range 3 spaces.\r\n    * Note: *Positioning restriction for power. Melee healer archetype.*",
        "gameplay_info": {
            "usage": [
                "Cost: 45 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with healing.",
            "narrative": "Practitioners of Therapeutic use this to manipulate healing.",
            "evolution": "Potential evolution: Extended Proximity"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 49,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_049",
        "name": "Remote Healer",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 45,
            "damage": 49
        },
        "description": "** Cannot heal adjacent targets. Healing +40% potency, range unlimited.\r\n    * **Evo A (Perfect Remote):** +60% potency.\r\n    * **Evo B (Efficient Remote):** Cost -2 KP for distant heals.\r\n    * **Note:** *Opposite of proximity. Backline support specialist.*",
        "lore_quote": "** *Opposite of proximity. Backline support specialist.*",
        "tactical_brief": "Utilizes Therapeutic mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Remote): +60% potency.\r\n    * Evo B (Efficient Remote): Cost -2 KP for distant heals.\r\n    * Note: *Opposite of proximity. Backline support specialist.*",
        "gameplay_info": {
            "usage": [
                "Cost: 45 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with healing.",
            "narrative": "Practitioners of Therapeutic use this to manipulate healing.",
            "evolution": "Potential evolution: Efficient Remote"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 49,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_050",
        "name": "Healing Amplifier",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [
            "HEAL"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 55,
            "heal": 73
        },
        "description": "** Each consecutive [Heal] on same target gets +15% potency (stacks 5x, resets if target switches).\r\n    * **Evo A (Perfect Amplifier):** +25% per stack.\r\n    * **Evo B (Sustained Amplifier):** Stacks up to 8x.\r\n    * **Note:** *Rewards focus-fire healing vs spreading heals.*",
        "lore_quote": "** *Rewards focus-fire healing vs spreading heals.*",
        "tactical_brief": "Utilizes Therapeutic mechanics. Heal.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Amplifier): +25% per stack.\r\n    * Evo B (Sustained Amplifier): Stacks up to 8x.\r\n    * Note: *Rewards focus-fire healing vs spreading heals.*",
        "gameplay_info": {
            "usage": [
                "Cost: 55 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Heal"
            ]
        },
        "deep_data": {
            "environment": "Resonates with healing.",
            "narrative": "Practitioners of Therapeutic use this to manipulate healing.",
            "evolution": "Potential evolution: Sustained Amplifier"
        },
        "effects": [
            {
                "type": "HEAL",
                "value": 73,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_051",
        "name": "Heal-over-Time Master",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 50,
            "damage": 50
        },
        "description": "** Cannot cast instant heals. All HoT effects +100% potency and last +1 turn.\r\n    * **Evo A (Perfect Master):** +150% potency.\r\n    * **Evo B (Extended Master):** Last +2 turns instead.\r\n    * **Note:** *Pure HoT build vs burst healing. Different tempo entirely.*",
        "lore_quote": "** *Pure HoT build vs burst healing. Different tempo entirely.*",
        "tactical_brief": "Utilizes Therapeutic mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Master): +150% potency.\r\n    * Evo B (Extended Master): Last +2 turns instead.\r\n    * Note: *Pure HoT build vs burst healing. Different tempo entirely.*",
        "gameplay_info": {
            "usage": [
                "Cost: 50 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with healing.",
            "narrative": "Practitioners of Therapeutic use this to manipulate healing.",
            "evolution": "Potential evolution: Extended Master"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 50,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_052",
        "name": "Desperation Heal",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 2,
            "cost": 40,
            "damage": 48
        },
        "description": "** Healing potency increases based on target's missing Ojas (+1% per 1% missing, up to +100%).\r\n    * **Evo A (Perfect Desperation):** Up to +150% potency.\r\n    * **Evo B (Safe Desperation):** Bonus starts at 80% missing instead of scaling.\r\n    * **Note:** *Rewards letting allies get low. High-risk gameplay.*",
        "lore_quote": "** *Rewards letting allies get low. High-risk gameplay.*",
        "tactical_brief": "Utilizes Therapeutic mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Desperation): Up to +150% potency.\r\n    * Evo B (Safe Desperation): Bonus starts at 80% missing instead of scaling.\r\n    * Note: *Rewards letting allies get low. High-risk gameplay.*",
        "gameplay_info": {
            "usage": [
                "Cost: 40 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with support, healing.",
            "narrative": "Practitioners of Therapeutic use this to manipulate support.",
            "evolution": "Potential evolution: Safe Desperation"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 48,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_053",
        "name": "Preventive Healer",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 45,
            "damage": 49
        },
        "description": "** Healing potency decreases based on target's missing Ojas (full health = +50%, low health = +0%).\r\n    * **Evo A (Perfect Prevention):** Full health bonus +100%.\r\n    * **Evo B (Extended Prevention):** Bonus applies up to 80% health.\r\n    * **Note:** *Opposite of desperation. Keep everyone topped off.*",
        "lore_quote": "** *Opposite of desperation. Keep everyone topped off.*",
        "tactical_brief": "Utilizes Therapeutic mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Prevention): Full health bonus +100%.\r\n    * Evo B (Extended Prevention): Bonus applies up to 80% health.\r\n    * Note: *Opposite of desperation. Keep everyone topped off.*",
        "gameplay_info": {
            "usage": [
                "Cost: 45 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with healing.",
            "narrative": "Practitioners of Therapeutic use this to manipulate healing.",
            "evolution": "Potential evolution: Extended Prevention"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 49,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_054",
        "name": "Group Therapy",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [
            "HEAL"
        ],
        "stats": {
            "cooldown": 4,
            "cost": 60,
            "heal": 74
        },
        "description": "** [Heal] all allies for (10 × number of allies). More allies = stronger heals.\r\n    * **Evo A (Perfect Therapy):** 15 × number instead.\r\n    * **Evo B (Enhanced Therapy):** Also grant 10 Shield per ally.\r\n    * **Note:** *Scales with team size. Multiplayer specialist.*",
        "lore_quote": "** *Scales with team size. Multiplayer specialist.*",
        "tactical_brief": "Utilizes Therapeutic mechanics. Heal.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Therapy): 15 × number instead.\r\n    * Evo B (Enhanced Therapy): Also grant 10 Shield per ally.\r\n    * Note: *Scales with team size. Multiplayer specialist.*",
        "gameplay_info": {
            "usage": [
                "Cost: 60 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": [
                "Heal"
            ]
        },
        "deep_data": {
            "environment": "Resonates with healing, support.",
            "narrative": "Practitioners of Therapeutic use this to manipulate healing.",
            "evolution": "Potential evolution: Enhanced Therapy"
        },
        "effects": [
            {
                "type": "HEAL",
                "value": 74,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_055",
        "name": "Solo Medic",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "STUN",
            "SILENCE"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 50,
            "damage": 54
        },
        "description": "** If you have no allies, healing yourself +150%, immunity to [Stun] and [Silence].\r\n    * **Evo A (Perfect Solo):** +200% healing.\r\n    * **Evo B (Survivor):** Also gain +50% max Ojas.\r\n    * **Note:** *Anti-team build. Solo survival specialist.*\r\n\r\n---\r\n\r\n### **SHIELDING SPECIALIZATIONS — 15 Skills**",
        "lore_quote": "** *Anti-team build. Solo survival specialist.*\r\n\r\n---\r\n\r\n### **SHIELDING SPECIALIZATIONS — 15 Skills**",
        "tactical_brief": "Utilizes Therapeutic mechanics. Stun, Silence.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Solo): +200% healing.\r\n    * Evo B (Survivor): Also gain +50% max Ojas.\r\n    * Note: *Anti-team build. Solo survival specialist.*\r\n\r\n---\r\n\r\n### SHIELDING SPECIALIZATIONS — 15 Skills",
        "gameplay_info": {
            "usage": [
                "Cost: 50 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Stun",
                "Silence"
            ]
        },
        "deep_data": {
            "environment": "Resonates with support, healing.",
            "narrative": "Practitioners of Therapeutic use this to manipulate support.",
            "evolution": "Potential evolution: Survivor"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 54,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_056",
        "name": "Shield Purist",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "HEAL",
            "SHIELD"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 45,
            "heal": 53
        },
        "description": "** Cannot use [Heal] glyphs. All [Shield] effects +75%. Shields last +2 turns.\r\n    * **Evo A (Perfect Purist):** +100% shields instead.\r\n    * **Evo B (Eternal Shields):** Shields never decay naturally.\r\n    * **Note:** *Pure shielding vs hybrid. Completely different resource management.*",
        "lore_quote": "** *Pure shielding vs hybrid. Completely different resource management.*",
        "tactical_brief": "Utilizes Therapeutic mechanics. Heal, Shield.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Purist): +100% shields instead.\r\n    * Evo B (Eternal Shields): Shields never decay naturally.\r\n    * Note: *Pure shielding vs hybrid. Completely different resource management.*",
        "gameplay_info": {
            "usage": [
                "Cost: 45 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Heal",
                "Shield"
            ]
        },
        "deep_data": {
            "environment": "Resonates with healing, defense, support.",
            "narrative": "Practitioners of Therapeutic use this to manipulate healing.",
            "evolution": "Potential evolution: Eternal Shields"
        },
        "effects": [
            {
                "type": "HEAL",
                "value": 53,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_057",
        "name": "Shield Stacker",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 50,
            "damage": 50
        },
        "description": "** Shields stack infinitely. For each 50 shield points on target, they gain +10% damage.\r\n    * **Evo A (Perfect Stacker):** Bonus every 40 points.\r\n    * **Evo B (Enhanced Stacker):** +15% damage per threshold.\r\n    * **Note:** *Offense through defense. Tank-DPS hybrid.*",
        "lore_quote": "** *Offense through defense. Tank-DPS hybrid.*",
        "tactical_brief": "Utilizes Therapeutic mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Stacker): Bonus every 40 points.\r\n    * Evo B (Enhanced Stacker): +15% damage per threshold.\r\n    * Note: *Offense through defense. Tank-DPS hybrid.*",
        "gameplay_info": {
            "usage": [
                "Cost: 50 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Therapeutic use this to manipulate offense.",
            "evolution": "Potential evolution: Enhanced Stacker"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 50,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_058",
        "name": "Reactive Shielder",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 45,
            "damage": 49
        },
        "description": "** Cannot proactively shield. When ally takes damage, automatically grant them 25 Shield. Cooldown: 2 turns per ally.\r\n    * **Evo A (Perfect Reaction):** 40 Shield instead.\r\n    * **Evo B (Frequent Reaction):** Cooldown 1 turn.\r\n    * **Note:** *Reactive vs proactive shielding. Different timing skill.*",
        "lore_quote": "** *Reactive vs proactive shielding. Different timing skill.*",
        "tactical_brief": "Utilizes Therapeutic mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Reaction): 40 Shield instead.\r\n    * Evo B (Frequent Reaction): Cooldown 1 turn.\r\n    * Note: *Reactive vs proactive shielding. Different timing skill.*",
        "gameplay_info": {
            "usage": [
                "Cost: 45 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with support, offense.",
            "narrative": "Practitioners of Therapeutic use this to manipulate support.",
            "evolution": "Potential evolution: Frequent Reaction"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 49,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_059",
        "name": "Proactive Shielder",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 45,
            "damage": 49
        },
        "description": "** Shields applied to full-health allies have +50% value. Shields on damaged allies -25% value.\r\n    * **Evo A (Perfect Proactive):** Full health bonus +75%.\r\n    * **Evo B (Tolerable Proactive):** No penalty on damaged allies.\r\n    * **Note:** *Opposite of reactive. Prediction-based gameplay.*",
        "lore_quote": "** *Opposite of reactive. Prediction-based gameplay.*",
        "tactical_brief": "Utilizes Therapeutic mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Proactive): Full health bonus +75%.\r\n    * Evo B (Tolerable Proactive): No penalty on damaged allies.\r\n    * Note: *Opposite of reactive. Prediction-based gameplay.*",
        "gameplay_info": {
            "usage": [
                "Cost: 45 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with support, offense, healing.",
            "narrative": "Practitioners of Therapeutic use this to manipulate support.",
            "evolution": "Potential evolution: Tolerable Proactive"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 49,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_060",
        "name": "Exploding Shields",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 50,
            "damage": 50
        },
        "description": "** When shields break, deal damage to attacker equal to 75% of absorbed damage.\r\n    * **Evo A (Perfect Explosion):** 125% of absorbed damage.\r\n    * **Evo B (AoE Explosion):** Damage affects all enemies in 3x3 area.\r\n    * **Note:** *Offensive shielding. Counter-attack specialist.*",
        "lore_quote": "** *Offensive shielding. Counter-attack specialist.*",
        "tactical_brief": "Utilizes Therapeutic mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Explosion): 125% of absorbed damage.\r\n    * Evo B (AoE Explosion): Damage affects all enemies in 3x3 area.\r\n    * Note: *Offensive shielding. Counter-attack specialist.*",
        "gameplay_info": {
            "usage": [
                "Cost: 50 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Therapeutic use this to manipulate offense.",
            "evolution": "Potential evolution: AoE Explosion"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 50,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_061",
        "name": "Shield Transfer",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 2,
            "cost": 40,
            "damage": 48
        },
        "description": "** Move shields between allies. Transfer amount +25% (if moving 20, target gets 25).\r\n    * **Evo A (Perfect Transfer):** +50% bonus.\r\n    * **Evo B (Mass Transfer):** Can transfer from/to 3 allies simultaneously.\r\n    * **Note:** *Dynamic shield management. Tactical resource movement.*",
        "lore_quote": "** *Dynamic shield management. Tactical resource movement.*",
        "tactical_brief": "Utilizes Therapeutic mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Transfer): +50% bonus.\r\n    * Evo B (Mass Transfer): Can transfer from/to 3 allies simultaneously.\r\n    * Note: *Dynamic shield management. Tactical resource movement.*",
        "gameplay_info": {
            "usage": [
                "Cost: 40 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with support.",
            "narrative": "Practitioners of Therapeutic use this to manipulate support.",
            "evolution": "Potential evolution: Mass Transfer"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 48,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_062",
        "name": "Shield Sacrifice",
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
        "description": "** Destroy ally's shield to [Heal] them for 150% of shield value.\r\n    * **Evo A (Perfect Sacrifice):** 200% conversion.\r\n    * **Evo B (Mass Sacrifice):** Affects all allies.\r\n    * **Note:** *Shield-to-heal conversion. Flexible resource adaptation.*",
        "lore_quote": "** *Shield-to-heal conversion. Flexible resource adaptation.*",
        "tactical_brief": "Utilizes Therapeutic mechanics. Heal.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Sacrifice): 200% conversion.\r\n    * Evo B (Mass Sacrifice): Affects all allies.\r\n    * Note: *Shield-to-heal conversion. Flexible resource adaptation.*",
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
            "environment": "Resonates with healing, support.",
            "narrative": "Practitioners of Therapeutic use this to manipulate healing.",
            "evolution": "Potential evolution: Mass Sacrifice"
        },
        "effects": [
            {
                "type": "HEAL",
                "value": 51,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_063",
        "name": "Living Shield",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 55,
            "damage": 71
        },
        "description": "** Shields regenerate 10% of their original value per turn.\r\n    * **Evo A (Perfect Living):** 20% regeneration.\r\n    * **Evo B (Efficient Living):** Shields cost -30% KP.\r\n    * **Note:** *Sustainable shielding vs burst shields. Different economy.*",
        "lore_quote": "** *Sustainable shielding vs burst shields. Different economy.*",
        "tactical_brief": "Utilizes Therapeutic mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Living): 20% regeneration.\r\n    * Evo B (Efficient Living): Shields cost -30% KP.\r\n    * Note: *Sustainable shielding vs burst shields. Different economy.*",
        "gameplay_info": {
            "usage": [
                "Cost: 55 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Therapeutic use this to manipulate undefined.",
            "evolution": "Potential evolution: Efficient Living"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 71,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_064",
        "name": "Shield Resonance",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 50,
            "damage": 50
        },
        "description": "** When you shield an ally, adjacent allies gain 25% of that shield.\r\n    * **Evo A (Perfect Resonance):** 50% instead.\r\n    * **Evo B (Extended Resonance):** Affects 5x5 area.\r\n    * **Note:** *AoE shielding through single-target casts. Positioning matters.*",
        "lore_quote": "** *AoE shielding through single-target casts. Positioning matters.*",
        "tactical_brief": "Utilizes Therapeutic mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Resonance): 50% instead.\r\n    * Evo B (Extended Resonance): Affects 5x5 area.\r\n    * Note: *AoE shielding through single-target casts. Positioning matters.*",
        "gameplay_info": {
            "usage": [
                "Cost: 50 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with support.",
            "narrative": "Practitioners of Therapeutic use this to manipulate support.",
            "evolution": "Potential evolution: Extended Resonance"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 50,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_065",
        "name": "Temporary Shields",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 2,
            "cost": 40,
            "damage": 48
        },
        "description": "** Shields last only 1 turn but have +100% value and cost -50% KP.\r\n    * **Evo A (Perfect Temporary):** +150% value.\r\n    * **Evo B (Extended Temporary):** Last 2 turns.\r\n    * **Note:** *Fast cycling vs sustained shields. Different tempo.*",
        "lore_quote": "** *Fast cycling vs sustained shields. Different tempo.*",
        "tactical_brief": "Utilizes Therapeutic mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Temporary): +150% value.\r\n    * Evo B (Extended Temporary): Last 2 turns.\r\n    * Note: *Fast cycling vs sustained shields. Different tempo.*",
        "gameplay_info": {
            "usage": [
                "Cost: 40 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Therapeutic use this to manipulate undefined.",
            "evolution": "Potential evolution: Extended Temporary"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 48,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_066",
        "name": "Eternal Shields",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [],
        "stats": {
            "cooldown": 4,
            "cost": 60,
            "damage": 72
        },
        "description": "** Shields never decay or expire but cost +50% KP and have -30% value.\r\n    * **Evo A (Perfect Eternal):** No value penalty.\r\n    * **Evo B (Efficient Eternal):** Only +25% KP cost.\r\n    * **Note:** *Permanent resources vs temporary. Long-game investment.*",
        "lore_quote": "** *Permanent resources vs temporary. Long-game investment.*",
        "tactical_brief": "Utilizes Therapeutic mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Eternal): No value penalty.\r\n    * Evo B (Efficient Eternal): Only +25% KP cost.\r\n    * Note: *Permanent resources vs temporary. Long-game investment.*",
        "gameplay_info": {
            "usage": [
                "Cost: 60 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Therapeutic use this to manipulate undefined.",
            "evolution": "Potential evolution: Efficient Eternal"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 72,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_067",
        "name": "Shield Theft",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 45,
            "damage": 49
        },
        "description": "** Steal 50% of enemy shield and grant it to ally.\r\n    * **Evo A (Perfect Theft):** Steal 75%.\r\n    * **Evo B (Mass Theft):** Affects 2 enemies and 2 allies.\r\n    * **Note:** *Offensive shielding. Anti-tank specialist.*",
        "lore_quote": "** *Offensive shielding. Anti-tank specialist.*",
        "tactical_brief": "Utilizes Therapeutic mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Theft): Steal 75%.\r\n    * Evo B (Mass Theft): Affects 2 enemies and 2 allies.\r\n    * Note: *Offensive shielding. Anti-tank specialist.*",
        "gameplay_info": {
            "usage": [
                "Cost: 45 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with support, offense.",
            "narrative": "Practitioners of Therapeutic use this to manipulate support.",
            "evolution": "Potential evolution: Mass Theft"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 49,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_068",
        "name": "Shield Multiplication",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 55,
            "damage": 71
        },
        "description": "** Each shield you cast this turn increases next shield's value by 25% (stacks).\r\n    * **Evo A (Perfect Multiplication):** +40% per shield.\r\n    * **Evo B (Sustained Multiplication):** Bonus persists across turns.\r\n    * **Note:** *Combo shielding. Rewards chaining casts.*",
        "lore_quote": "** *Combo shielding. Rewards chaining casts.*",
        "tactical_brief": "Utilizes Therapeutic mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Multiplication): +40% per shield.\r\n    * Evo B (Sustained Multiplication): Bonus persists across turns.\r\n    * Note: *Combo shielding. Rewards chaining casts.*",
        "gameplay_info": {
            "usage": [
                "Cost: 55 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Therapeutic use this to manipulate undefined.",
            "evolution": "Potential evolution: Sustained Multiplication"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 71,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_069",
        "name": "Shield Converter",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 50,
            "damage": 50
        },
        "description": "** Convert shields to any resource: 20 Shield = 10 Bandwidth OR 3 KP OR 2 Coherence.\r\n    * **Evo A (Efficient Converter):** Conversion rates improved 50%.\r\n    * **Evo B (Multi-Converter):** Can convert to multiple resources.\r\n    * **Note:** *Shields as universal currency. Economic adaptation.*",
        "lore_quote": "** *Shields as universal currency. Economic adaptation.*",
        "tactical_brief": "Utilizes Therapeutic mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Efficient Converter): Conversion rates improved 50%.\r\n    * Evo B (Multi-Converter): Can convert to multiple resources.\r\n    * Note: *Shields as universal currency. Economic adaptation.*",
        "gameplay_info": {
            "usage": [
                "Cost: 50 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Therapeutic use this to manipulate undefined.",
            "evolution": "Potential evolution: Multi-Converter"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 50,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_070",
        "name": "Shield Overload",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [],
        "stats": {
            "cooldown": 4,
            "cost": 60,
            "damage": 72
        },
        "description": "** For 2 turns, all shields +150% value but cost +100% KP.\r\n    * **Evo A (Perfect Overload):** +200% value.\r\n    * **Evo B (Efficient Overload):** Only +50% KP cost.\r\n    * **Note:** *Power spike vs sustained economy. Clutch moment tool.*\r\n\r\n---\r\n\r\n### **CLEANSING SPECIALIZATIONS — 15 Skills**",
        "lore_quote": "** *Power spike vs sustained economy. Clutch moment tool.*\r\n\r\n---\r\n\r\n### **CLEANSING SPECIALIZATIONS — 15 Skills**",
        "tactical_brief": "Utilizes Therapeutic mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Overload): +200% value.\r\n    * Evo B (Efficient Overload): Only +50% KP cost.\r\n    * Note: *Power spike vs sustained economy. Clutch moment tool.*\r\n\r\n---\r\n\r\n### CLEANSING SPECIALIZATIONS — 15 Skills",
        "gameplay_info": {
            "usage": [
                "Cost: 60 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Therapeutic use this to manipulate undefined.",
            "evolution": "Potential evolution: Efficient Overload"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 72,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_071",
        "name": "Cleansing Purist",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "HEAL",
            "SHIELD",
            "CLEANSE",
            "VULNERABLE"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 45,
            "heal": 57
        },
        "description": "** Cannot use [Heal] or [Shield] glyphs. [Cleanse] also deals 20 damage to enemies and grants 15 Ojas to cleansed ally.\r\n    * **Evo A (Perfect Purist):** Damage 35, heal 25.\r\n    * **Evo B (Aggressive Purist):** Also applies [Vulnerable] to enemies.\r\n    * **Note:** *Pure cleansing specialist. Offensive support.*",
        "lore_quote": "** *Pure cleansing specialist. Offensive support.*",
        "tactical_brief": "Utilizes Therapeutic mechanics. Heal, Shield, Cleanse, Vulnerable.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Purist): Damage 35, heal 25.\r\n    * Evo B (Aggressive Purist): Also applies [Vulnerable] to enemies.\r\n    * Note: *Pure cleansing specialist. Offensive support.*",
        "gameplay_info": {
            "usage": [
                "Cost: 45 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Heal",
                "Shield",
                "Cleanse",
                "Vulnerable"
            ]
        },
        "deep_data": {
            "environment": "Resonates with healing, defense, support, offense.",
            "narrative": "Practitioners of Therapeutic use this to manipulate healing.",
            "evolution": "Potential evolution: Aggressive Purist"
        },
        "effects": [
            {
                "type": "HEAL",
                "value": 57,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_072",
        "name": "Debuff Eater",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "CLEANSE",
            "HEAL"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 50,
            "heal": 54
        },
        "description": "** [Cleanse] debuff and gain resources: +10 Bandwidth and +2 KP per debuff cleansed.\r\n    * **Evo A (Perfect Eater):** +15 Bandwidth, +3 KP.\r\n    * **Evo B (Healing Eater):** Also [Heal] 15 Ojas per debuff.\r\n    * **Note:** *Debuffs as resources. Economic cleansing build.*",
        "lore_quote": "** *Debuffs as resources. Economic cleansing build.*",
        "tactical_brief": "Utilizes Therapeutic mechanics. Cleanse, Heal.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Eater): +15 Bandwidth, +3 KP.\r\n    * Evo B (Healing Eater): Also [Heal] 15 Ojas per debuff.\r\n    * Note: *Debuffs as resources. Economic cleansing build.*",
        "gameplay_info": {
            "usage": [
                "Cost: 50 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Cleanse",
                "Heal"
            ]
        },
        "deep_data": {
            "environment": "Resonates with healing.",
            "narrative": "Practitioners of Therapeutic use this to manipulate healing.",
            "evolution": "Potential evolution: Healing Eater"
        },
        "effects": [
            {
                "type": "HEAL",
                "value": 54,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_073",
        "name": "Preemptive Cleanser",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [
            "HEAL"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 55,
            "heal": 73
        },
        "description": "** Grant ally immunity to next debuff for 3 turns. When triggered, [Heal] them 20.\r\n    * **Evo A (Perfect Preemptive):** Immunity to next 2 debuffs.\r\n    * **Evo B (Extended Preemptive):** Duration 4 turns.\r\n    * **Note:** *Preventive vs reactive cleansing. Prediction gameplay.*",
        "lore_quote": "** *Preventive vs reactive cleansing. Prediction gameplay.*",
        "tactical_brief": "Utilizes Therapeutic mechanics. Heal.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Preemptive): Immunity to next 2 debuffs.\r\n    * Evo B (Extended Preemptive): Duration 4 turns.\r\n    * Note: *Preventive vs reactive cleansing. Prediction gameplay.*",
        "gameplay_info": {
            "usage": [
                "Cost: 55 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Heal"
            ]
        },
        "deep_data": {
            "environment": "Resonates with healing, support.",
            "narrative": "Practitioners of Therapeutic use this to manipulate healing.",
            "evolution": "Potential evolution: Extended Preemptive"
        },
        "effects": [
            {
                "type": "HEAL",
                "value": 73,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_074",
        "name": "Reactive Cleanser",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "CLEANSE"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 45,
            "damage": 51
        },
        "description": "** When ally receives debuff, automatically [Cleanse] it and grant 15 Shield. Cooldown: 3 turns per ally.\r\n    * **Evo A (Perfect Reactive):** 25 Shield instead.\r\n    * **Evo B (Frequent Reactive):** Cooldown 2 turns.\r\n    * **Note:** *Opposite of preemptive. Automatic counter-play.*",
        "lore_quote": "** *Opposite of preemptive. Automatic counter-play.*",
        "tactical_brief": "Utilizes Therapeutic mechanics. Cleanse.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Reactive): 25 Shield instead.\r\n    * Evo B (Frequent Reactive): Cooldown 2 turns.\r\n    * Note: *Opposite of preemptive. Automatic counter-play.*",
        "gameplay_info": {
            "usage": [
                "Cost: 45 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Cleanse"
            ]
        },
        "deep_data": {
            "environment": "Resonates with support.",
            "narrative": "Practitioners of Therapeutic use this to manipulate support.",
            "evolution": "Potential evolution: Frequent Reactive"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 51,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_075",
        "name": "Debuff Transfer",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "CLEANSE"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 50,
            "damage": 52
        },
        "description": "** [Cleanse] debuff from ally and apply it to enemy.\r\n    * **Evo A (Perfect Transfer):** Apply to 2 enemies.\r\n    * **Evo B (Enhanced Transfer):** Applied debuff +1 turn duration.\r\n    * **Note:** *Offensive cleansing. Turn weakness into strength.*",
        "lore_quote": "** *Offensive cleansing. Turn weakness into strength.*",
        "tactical_brief": "Utilizes Therapeutic mechanics. Cleanse.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Transfer): Apply to 2 enemies.\r\n    * Evo B (Enhanced Transfer): Applied debuff +1 turn duration.\r\n    * Note: *Offensive cleansing. Turn weakness into strength.*",
        "gameplay_info": {
            "usage": [
                "Cost: 50 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Cleanse"
            ]
        },
        "deep_data": {
            "environment": "Resonates with support, offense.",
            "narrative": "Practitioners of Therapeutic use this to manipulate support.",
            "evolution": "Potential evolution: Enhanced Transfer"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 52,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_076",
        "name": "Cleansing Chain",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "CLEANSE",
            "CLEANSE"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 45,
            "damage": 53
        },
        "description": "** [Cleanse] 1 debuff from target. Chains to adjacent allies (up to 3 chains).\r\n    * **Evo A (Perfect Chain):** Up to 5 chains.\r\n    * **Evo B (Deep Chain):** [Cleanse] 2 debuffs from primary target.\r\n    * **Note:** *Position-dependent cleansing. Tactical formation play.*",
        "lore_quote": "** *Position-dependent cleansing. Tactical formation play.*",
        "tactical_brief": "Utilizes Therapeutic mechanics. Cleanse, Cleanse.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Chain): Up to 5 chains.\r\n    * Evo B (Deep Chain): [Cleanse] 2 debuffs from primary target.\r\n    * Note: *Position-dependent cleansing. Tactical formation play.*",
        "gameplay_info": {
            "usage": [
                "Cost: 45 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Cleanse",
                "Cleanse"
            ]
        },
        "deep_data": {
            "environment": "Resonates with support.",
            "narrative": "Practitioners of Therapeutic use this to manipulate support.",
            "evolution": "Potential evolution: Deep Chain"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 53,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_077",
        "name": "Selective Cleanser",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "BURN",
            "STUN"
        ],
        "stats": {
            "cooldown": 2,
            "cost": 40,
            "damage": 52
        },
        "description": "** Choose specific debuff type to cleanse (e.g., only [Burn], only [Stun]). Chosen type cleansed from all allies simultaneously.\r\n    * **Evo A (Perfect Selection):** Can choose 2 types.\r\n    * **Evo B (Enhanced Selection):** Also gain +5 Bandwidth per debuff removed.\r\n    * **Note:** *Surgical cleansing vs blanket removal. Strategic priority.*",
        "lore_quote": "** *Surgical cleansing vs blanket removal. Strategic priority.*",
        "tactical_brief": "Utilizes Therapeutic mechanics. Burn, Stun.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Selection): Can choose 2 types.\r\n    * Evo B (Enhanced Selection): Also gain +5 Bandwidth per debuff removed.\r\n    * Note: *Surgical cleansing vs blanket removal. Strategic priority.*",
        "gameplay_info": {
            "usage": [
                "Cost: 40 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": [
                "Burn",
                "Stun"
            ]
        },
        "deep_data": {
            "environment": "Resonates with dot, support.",
            "narrative": "Practitioners of Therapeutic use this to manipulate dot.",
            "evolution": "Potential evolution: Enhanced Selection"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 52,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_078",
        "name": "Cleanse Amplifier",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "CLEANSE"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 50,
            "damage": 52
        },
        "description": "** For 3 turns, [Cleanse] also grants target +25% all effects for 2 turns.\r\n    * **Evo A (Perfect Amplifier):** +40% all effects.\r\n    * **Evo B (Extended Amplifier):** Duration 4 turns.\r\n    * **Note:** *Cleansing as offensive tool. Buff through purification.*",
        "lore_quote": "** *Cleansing as offensive tool. Buff through purification.*",
        "tactical_brief": "Utilizes Therapeutic mechanics. Cleanse.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Amplifier): +40% all effects.\r\n    * Evo B (Extended Amplifier): Duration 4 turns.\r\n    * Note: *Cleansing as offensive tool. Buff through purification.*",
        "gameplay_info": {
            "usage": [
                "Cost: 50 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Cleanse"
            ]
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Therapeutic use this to manipulate undefined.",
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
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_079",
        "name": "Overcharge Cleanse",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [
            "CLEANSE",
            "HEAL"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 55,
            "heal": 75
        },
        "description": "** [Cleanse] all debuffs from target but they take 10 damage per debuff removed.\r\n    * **Evo A (Safe Overcharge):** Only 5 damage per debuff.\r\n    * **Evo B (Healing Overcharge):** After damage, [Heal] for 15 per debuff.\r\n    * **Note:** *Risk/reward cleansing. High-stakes purification.*",
        "lore_quote": "** *Risk/reward cleansing. High-stakes purification.*",
        "tactical_brief": "Utilizes Therapeutic mechanics. Cleanse, Heal.",
        "mastery_perk": "Mastery Lvl 5: (Safe Overcharge): Only 5 damage per debuff.\r\n    * Evo B (Healing Overcharge): After damage, [Heal] for 15 per debuff.\r\n    * Note: *Risk/reward cleansing. High-stakes purification.*",
        "gameplay_info": {
            "usage": [
                "Cost: 55 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Cleanse",
                "Heal"
            ]
        },
        "deep_data": {
            "environment": "Resonates with healing, offense.",
            "narrative": "Practitioners of Therapeutic use this to manipulate healing.",
            "evolution": "Potential evolution: Healing Overcharge"
        },
        "effects": [
            {
                "type": "HEAL",
                "value": 75,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_080",
        "name": "Debuff Reflection",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [
            "CLEANSE"
        ],
        "stats": {
            "cooldown": 4,
            "cost": 60,
            "damage": 74
        },
        "description": "** When you [Cleanse], apply that debuff to random enemy at 75% duration.\r\n    * **Evo A (Perfect Reflection):** Full duration.\r\n    * **Evo B (Controlled Reflection):** Choose target.\r\n    * **Note:** *Turn defense into offense. Cleansing counter-attacks.*",
        "lore_quote": "** *Turn defense into offense. Cleansing counter-attacks.*",
        "tactical_brief": "Utilizes Therapeutic mechanics. Cleanse.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Reflection): Full duration.\r\n    * Evo B (Controlled Reflection): Choose target.\r\n    * Note: *Turn defense into offense. Cleansing counter-attacks.*",
        "gameplay_info": {
            "usage": [
                "Cost: 60 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": [
                "Cleanse"
            ]
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Therapeutic use this to manipulate offense.",
            "evolution": "Potential evolution: Controlled Reflection"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 74,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_081",
        "name": "Cleansing Aura",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [
            "CLEANSE",
            "CLEANSE"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 55,
            "damage": 75
        },
        "description": "** Allies within 3x3 area automatically [Cleanse] 1 debuff per turn.\r\n    * **Evo A (Perfect Aura):** [Cleanse] 2 debuffs per turn.\r\n    * **Evo B (Extended Aura):** 5x5 area.\r\n    * **Note:** *Automatic cleansing zone. Positioning-based support.*",
        "lore_quote": "** *Automatic cleansing zone. Positioning-based support.*",
        "tactical_brief": "Utilizes Therapeutic mechanics. Cleanse, Cleanse.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Aura): [Cleanse] 2 debuffs per turn.\r\n    * Evo B (Extended Aura): 5x5 area.\r\n    * Note: *Automatic cleansing zone. Positioning-based support.*",
        "gameplay_info": {
            "usage": [
                "Cost: 55 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Cleanse",
                "Cleanse"
            ]
        },
        "deep_data": {
            "environment": "Resonates with support.",
            "narrative": "Practitioners of Therapeutic use this to manipulate support.",
            "evolution": "Potential evolution: Extended Aura"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 75,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_082",
        "name": "Debuff Immunity Lock",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [
            "HEAL",
            "SHIELD",
            "SHIELD"
        ],
        "stats": {
            "cooldown": 4,
            "cost": 60,
            "heal": 78
        },
        "description": "** For 3 turns, ally is immune to debuffs but also cannot receive [Heal] or [Shield].\r\n    * **Evo A (Perfect Lock):** Duration 4 turns.\r\n    * **Evo B (Partial Lock):** Can still receive [Shield].\r\n    * **Note:** *Trade-off immunity. Strategic sacrifice.*",
        "lore_quote": "** *Trade-off immunity. Strategic sacrifice.*",
        "tactical_brief": "Utilizes Therapeutic mechanics. Heal, Shield, Shield.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Lock): Duration 4 turns.\r\n    * Evo B (Partial Lock): Can still receive [Shield].\r\n    * Note: *Trade-off immunity. Strategic sacrifice.*",
        "gameplay_info": {
            "usage": [
                "Cost: 60 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": [
                "Heal",
                "Shield",
                "Shield"
            ]
        },
        "deep_data": {
            "environment": "Resonates with healing, defense, support.",
            "narrative": "Practitioners of Therapeutic use this to manipulate healing.",
            "evolution": "Potential evolution: Partial Lock"
        },
        "effects": [
            {
                "type": "HEAL",
                "value": 78,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_083",
        "name": "Cleansing Sacrifice",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "CLEANSE"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 50,
            "damage": 52
        },
        "description": "** [Cleanse] all debuffs from ally. You receive 50% of those debuffs.\r\n    * **Evo A (Tolerable Sacrifice):** Only receive 25%.\r\n    * **Evo B (Protected Sacrifice):** Debuffs you receive have -1 turn duration.\r\n    * **Note:** *Self-sacrifice cleansing. Team player specialist.*",
        "lore_quote": "** *Self-sacrifice cleansing. Team player specialist.*",
        "tactical_brief": "Utilizes Therapeutic mechanics. Cleanse.",
        "mastery_perk": "Mastery Lvl 5: (Tolerable Sacrifice): Only receive 25%.\r\n    * Evo B (Protected Sacrifice): Debuffs you receive have -1 turn duration.\r\n    * Note: *Self-sacrifice cleansing. Team player specialist.*",
        "gameplay_info": {
            "usage": [
                "Cost: 50 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Cleanse"
            ]
        },
        "deep_data": {
            "environment": "Resonates with support.",
            "narrative": "Practitioners of Therapeutic use this to manipulate support.",
            "evolution": "Potential evolution: Protected Sacrifice"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 52,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_084",
        "name": "Mass Purge",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [
            "CLEANSE",
            "HEAL"
        ],
        "stats": {
            "cooldown": 4,
            "cost": 70,
            "heal": 78
        },
        "description": "** [Cleanse] all debuffs from all allies. Grant 20 Shield per debuff removed. Once per duel.\r\n    * **Evo A (Perfect Purge):** 35 Shield per debuff.\r\n    * **Evo B (Healing Purge):** Also [Heal] 20 per debuff.\r\n    * **Note:** *Ultimate cleansing moment. Big reset button.*",
        "lore_quote": "** *Ultimate cleansing moment. Big reset button.*",
        "tactical_brief": "Utilizes Therapeutic mechanics. Cleanse, Heal.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Purge): 35 Shield per debuff.\r\n    * Evo B (Healing Purge): Also [Heal] 20 per debuff.\r\n    * Note: *Ultimate cleansing moment. Big reset button.*",
        "gameplay_info": {
            "usage": [
                "Cost: 70 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": [
                "Cleanse",
                "Heal"
            ]
        },
        "deep_data": {
            "environment": "Resonates with healing, support.",
            "narrative": "Practitioners of Therapeutic use this to manipulate healing.",
            "evolution": "Potential evolution: Healing Purge"
        },
        "effects": [
            {
                "type": "HEAL",
                "value": 78,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_085",
        "name": "Perpetual Cleansing",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [
            "CLEANSE",
            "CLEANSE",
            "HEAL"
        ],
        "stats": {
            "cooldown": 4,
            "cost": 65,
            "heal": 79
        },
        "description": "** Passive: Allies automatically [Cleanse] 1 debuff at end of each turn.\r\n    * **Evo A (Perfect Perpetual):** [Cleanse] 2 debuffs.\r\n    * **Evo B (Enhanced Perpetual):** Also [Heal] 5 Ojas per cleanse.\r\n    * **Note:** *Automatic maintenance. Set-and-forget support.*\r\n\r\n---\r\n\r\n### **HYBRID SPECIALIZATIONS — 10 Skills**",
        "lore_quote": "** *Automatic maintenance. Set-and-forget support.*\r\n\r\n---\r\n\r\n### **HYBRID SPECIALIZATIONS — 10 Skills**",
        "tactical_brief": "Utilizes Therapeutic mechanics. Cleanse, Cleanse, Heal.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Perpetual): [Cleanse] 2 debuffs.\r\n    * Evo B (Enhanced Perpetual): Also [Heal] 5 Ojas per cleanse.\r\n    * Note: *Automatic maintenance. Set-and-forget support.*\r\n\r\n---\r\n\r\n### HYBRID SPECIALIZATIONS — 10 Skills",
        "gameplay_info": {
            "usage": [
                "Cost: 65 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": [
                "Cleanse",
                "Cleanse",
                "Heal"
            ]
        },
        "deep_data": {
            "environment": "Resonates with healing, support.",
            "narrative": "Practitioners of Therapeutic use this to manipulate healing.",
            "evolution": "Potential evolution: Enhanced Perpetual"
        },
        "effects": [
            {
                "type": "HEAL",
                "value": 79,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_086",
        "name": "Balanced Healer",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "HEAL",
            "SHIELD",
            "CLEANSE"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 50,
            "heal": 56
        },
        "description": "** All [Heal] glyphs also grant 50% value as [Shield].\r\n    * **Evo A (Perfect Balance):** 75% value as shield.\r\n    * **Evo B (Enhanced Balance):** Also [Cleanse] 1 debuff.\r\n    * **Note:** *Three-way hybrid. Jack-of-all-trades build.*",
        "lore_quote": "** *Three-way hybrid. Jack-of-all-trades build.*",
        "tactical_brief": "Utilizes Therapeutic mechanics. Heal, Shield, Cleanse.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Balance): 75% value as shield.\r\n    * Evo B (Enhanced Balance): Also [Cleanse] 1 debuff.\r\n    * Note: *Three-way hybrid. Jack-of-all-trades build.*",
        "gameplay_info": {
            "usage": [
                "Cost: 50 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Heal",
                "Shield",
                "Cleanse"
            ]
        },
        "deep_data": {
            "environment": "Resonates with healing, defense.",
            "narrative": "Practitioners of Therapeutic use this to manipulate healing.",
            "evolution": "Potential evolution: Enhanced Balance"
        },
        "effects": [
            {
                "type": "HEAL",
                "value": 56,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_087",
        "name": "Aggressive Support",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [
            "HEAL",
            "SHIELD",
            "CLEANSE"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 55,
            "heal": 77
        },
        "description": "** All [Heal]/[Shield]/[Cleanse] also deal 15 damage to nearest enemy.\r\n    * **Evo A (Perfect Aggression):** 25 damage instead.\r\n    * **Evo B (Multi-Aggression):** Affects 2 enemies.\r\n    * **Note:** *Combat medic. Offensive support specialist.*",
        "lore_quote": "** *Combat medic. Offensive support specialist.*",
        "tactical_brief": "Utilizes Therapeutic mechanics. Heal, Shield, Cleanse.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Aggression): 25 damage instead.\r\n    * Evo B (Multi-Aggression): Affects 2 enemies.\r\n    * Note: *Combat medic. Offensive support specialist.*",
        "gameplay_info": {
            "usage": [
                "Cost: 55 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Heal",
                "Shield",
                "Cleanse"
            ]
        },
        "deep_data": {
            "environment": "Resonates with healing, defense, offense.",
            "narrative": "Practitioners of Therapeutic use this to manipulate healing.",
            "evolution": "Potential evolution: Multi-Aggression"
        },
        "effects": [
            {
                "type": "HEAL",
                "value": 77,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_088",
        "name": "Transmutation Master",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [
            "HEAL",
            "SHIELD",
            "CLEANSE"
        ],
        "stats": {
            "cooldown": 4,
            "cost": 60,
            "heal": 78
        },
        "description": "** Convert between effects freely: [Heal] ↔ [Shield] ↔ [Cleanse] at 75% value. Cooldown: 2 turns.\r\n    * **Evo A (Perfect Transmutation):** 100% value.\r\n    * **Evo B (Frequent Transmutation):** Cooldown 1 turn.\r\n    * **Note:** *Ultimate flexibility. Adapt to any situation.*",
        "lore_quote": "** *Ultimate flexibility. Adapt to any situation.*",
        "tactical_brief": "Utilizes Therapeutic mechanics. Heal, Shield, Cleanse.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Transmutation): 100% value.\r\n    * Evo B (Frequent Transmutation): Cooldown 1 turn.\r\n    * Note: *Ultimate flexibility. Adapt to any situation.*",
        "gameplay_info": {
            "usage": [
                "Cost: 60 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": [
                "Heal",
                "Shield",
                "Cleanse"
            ]
        },
        "deep_data": {
            "environment": "Resonates with healing, defense.",
            "narrative": "Practitioners of Therapeutic use this to manipulate healing.",
            "evolution": "Potential evolution: Frequent Transmutation"
        },
        "effects": [
            {
                "type": "HEAL",
                "value": 78,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_089",
        "name": "Support Overload",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [],
        "stats": {
            "cooldown": 4,
            "cost": 65,
            "damage": 73
        },
        "description": "** For 2 turns, all support glyphs trigger twice at 75% potency each.\r\n    * **Evo A (Perfect Overload):** 100% potency each.\r\n    * **Evo B (Extended Overload):** Duration 3 turns.\r\n    * **Note:** *Double-casting everything. Explosive support moments.*",
        "lore_quote": "** *Double-casting everything. Explosive support moments.*",
        "tactical_brief": "Utilizes Therapeutic mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Overload): 100% potency each.\r\n    * Evo B (Extended Overload): Duration 3 turns.\r\n    * Note: *Double-casting everything. Explosive support moments.*",
        "gameplay_info": {
            "usage": [
                "Cost: 65 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Therapeutic use this to manipulate undefined.",
            "evolution": "Potential evolution: Extended Overload"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 73,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_090",
        "name": "Martyr Complex",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [],
        "stats": {
            "cooldown": 4,
            "cost": 60,
            "damage": 72
        },
        "description": "** Lose 20% of max Ojas permanently. All support effects +100% for rest of duel.\r\n    * **Evo A (Tolerable Martyr):** Only lose 15%.\r\n    * **Evo B (Perfect Martyr):** +150% effects instead.\r\n    * **Note:** *Permanent sacrifice for power. All-in support build.*",
        "lore_quote": "** *Permanent sacrifice for power. All-in support build.*",
        "tactical_brief": "Utilizes Therapeutic mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Tolerable Martyr): Only lose 15%.\r\n    * Evo B (Perfect Martyr): +150% effects instead.\r\n    * Note: *Permanent sacrifice for power. All-in support build.*",
        "gameplay_info": {
            "usage": [
                "Cost: 60 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Therapeutic use this to manipulate undefined.",
            "evolution": "Potential evolution: Perfect Martyr"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 72,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_091",
        "name": "Support Network",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 55,
            "damage": 71
        },
        "description": "** Each ally you support grants you +1 Ojas Integrity and +5 Bandwidth.\r\n    * **Evo A (Perfect Network):** +2 Integrity, +10 Bandwidth.\r\n    * **Evo B (Deep Network):** Also reduce cooldown by 1.\r\n    * **Note:** *Rewarded for spreading support. Team-focused economy.*",
        "lore_quote": "** *Rewarded for spreading support. Team-focused economy.*",
        "tactical_brief": "Utilizes Therapeutic mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Network): +2 Integrity, +10 Bandwidth.\r\n    * Evo B (Deep Network): Also reduce cooldown by 1.\r\n    * Note: *Rewarded for spreading support. Team-focused economy.*",
        "gameplay_info": {
            "usage": [
                "Cost: 55 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with support.",
            "narrative": "Practitioners of Therapeutic use this to manipulate support.",
            "evolution": "Potential evolution: Deep Network"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 71,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_092",
        "name": "Solo Healer",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 50,
            "damage": 50
        },
        "description": "** Cannot support allies. All self-support +200%. Immune to all debuffs.\r\n    * **Evo A (Perfect Solo):** +300% self-support.\r\n    * **Evo B (Survivor Solo):** +100% max Ojas.\r\n    * **Note:** *Anti-team build. Pure survival specialist.*",
        "lore_quote": "** *Anti-team build. Pure survival specialist.*",
        "tactical_brief": "Utilizes Therapeutic mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Solo): +300% self-support.\r\n    * Evo B (Survivor Solo): +100% max Ojas.\r\n    * Note: *Anti-team build. Pure survival specialist.*",
        "gameplay_info": {
            "usage": [
                "Cost: 50 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with support.",
            "narrative": "Practitioners of Therapeutic use this to manipulate support.",
            "evolution": "Potential evolution: Survivor Solo"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 50,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_093",
        "name": "Shared Fate",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [
            "HEAL",
            "SHIELD",
            "CLEANSE"
        ],
        "stats": {
            "cooldown": 4,
            "cost": 60,
            "heal": 78
        },
        "description": "** Link with ally for 3 turns: Share all [Heal]/[Shield]/[Cleanse] effects equally.\r\n    * **Evo A (Perfect Link):** Duration 4 turns.\r\n    * **Evo B (Multi-Link):** Can link with 2 allies.\r\n    * **Note:** *Partnership build. Duo specialist.*",
        "lore_quote": "** *Partnership build. Duo specialist.*",
        "tactical_brief": "Utilizes Therapeutic mechanics. Heal, Shield, Cleanse.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Link): Duration 4 turns.\r\n    * Evo B (Multi-Link): Can link with 2 allies.\r\n    * Note: *Partnership build. Duo specialist.*",
        "gameplay_info": {
            "usage": [
                "Cost: 60 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": [
                "Heal",
                "Shield",
                "Cleanse"
            ]
        },
        "deep_data": {
            "environment": "Resonates with healing, defense, support.",
            "narrative": "Practitioners of Therapeutic use this to manipulate healing.",
            "evolution": "Potential evolution: Multi-Link"
        },
        "effects": [
            {
                "type": "HEAL",
                "value": 78,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_094",
        "name": "Emergency Protocol",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [
            "HEAL",
            "CLEANSE",
            "HEAL"
        ],
        "stats": {
            "cooldown": 4,
            "cost": 65,
            "heal": 79
        },
        "description": "** When any ally drops below 20% Ojas, automatically [Heal] 40, grant 30 Shield, [Cleanse] all debuffs. Cooldown: 5 turns.\r\n    * **Evo A (Perfect Emergency):** [Heal] 60, grant 50 Shield.\r\n    * **Evo B (Frequent Emergency):** Cooldown 3 turns.\r\n    * **Note:** *Ultimate save button. Clutch support specialist.*",
        "lore_quote": "** *Ultimate save button. Clutch support specialist.*",
        "tactical_brief": "Utilizes Therapeutic mechanics. Heal, Cleanse, Heal.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Emergency): [Heal] 60, grant 50 Shield.\r\n    * Evo B (Frequent Emergency): Cooldown 3 turns.\r\n    * Note: *Ultimate save button. Clutch support specialist.*",
        "gameplay_info": {
            "usage": [
                "Cost: 65 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": [
                "Heal",
                "Cleanse",
                "Heal"
            ]
        },
        "deep_data": {
            "environment": "Resonates with healing, support.",
            "narrative": "Practitioners of Therapeutic use this to manipulate healing.",
            "evolution": "Potential evolution: Frequent Emergency"
        },
        "effects": [
            {
                "type": "HEAL",
                "value": 79,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_095",
        "name": "Sustained Support",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 55,
            "damage": 71
        },
        "description": "** Passive: Every 3 turns, permanently increase all support effects by 5% (stacks infinitely).\r\n    * **Evo A (Rapid Sustained):** Triggers every 2 turns.\r\n    * **Evo B (Perfect Sustained):** +8% per trigger.\r\n    * **Note:** *Infinite scaling. Late-game support specialist.*\r\n\r\n---\r\n\r\n### **UNIQUE BUILD ENABLERS — 5 Skills**",
        "lore_quote": "** *Infinite scaling. Late-game support specialist.*\r\n\r\n---\r\n\r\n### **UNIQUE BUILD ENABLERS — 5 Skills**",
        "tactical_brief": "Utilizes Therapeutic mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Rapid Sustained): Triggers every 2 turns.\r\n    * Evo B (Perfect Sustained): +8% per trigger.\r\n    * Note: *Infinite scaling. Late-game support specialist.*\r\n\r\n---\r\n\r\n### UNIQUE BUILD ENABLERS — 5 Skills",
        "gameplay_info": {
            "usage": [
                "Cost: 55 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Therapeutic use this to manipulate undefined.",
            "evolution": "Potential evolution: Perfect Sustained"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 71,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_096",
        "name": "Glass Support",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [],
        "stats": {
            "cooldown": 4,
            "cost": 60,
            "damage": 72
        },
        "description": "** -50% max Ojas, but all support effects +150%.\r\n    * **Evo A (Perfect Glass):** +200% effects.\r\n    * **Evo B (Tolerable Glass):** Only -30% max Ojas.\r\n    * **Note:** *Extreme risk/reward. Fragile but powerful.*",
        "lore_quote": "** *Extreme risk/reward. Fragile but powerful.*",
        "tactical_brief": "Utilizes Therapeutic mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Glass): +200% effects.\r\n    * Evo B (Tolerable Glass): Only -30% max Ojas.\r\n    * Note: *Extreme risk/reward. Fragile but powerful.*",
        "gameplay_info": {
            "usage": [
                "Cost: 60 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Therapeutic use this to manipulate undefined.",
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
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_097",
        "name": "Tank Support",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 55,
            "damage": 71
        },
        "description": "** +50% max Ojas, but all support effects -30%.\r\n    * **Evo A (Perfect Tank):** +75% max Ojas.\r\n    * **Evo B (Tolerable Tank):** Only -15% effect penalty.\r\n    * **Note:** *Opposite of glass. Survive vs power.*",
        "lore_quote": "** *Opposite of glass. Survive vs power.*",
        "tactical_brief": "Utilizes Therapeutic mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Tank): +75% max Ojas.\r\n    * Evo B (Tolerable Tank): Only -15% effect penalty.\r\n    * Note: *Opposite of glass. Survive vs power.*",
        "gameplay_info": {
            "usage": [
                "Cost: 55 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Therapeutic use this to manipulate undefined.",
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
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_098",
        "name": "Support Vampire",
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
        "description": "** You [Heal] for 30% of all support value you provide to others.\r\n    * **Evo A (Perfect Vampire):** 50% instead.\r\n    * **Evo B (Enhanced Vampire):** Also gain 25% of shields you grant.\r\n    * **Note:** *Selfish support. Sustain through helping.*",
        "lore_quote": "** *Selfish support. Sustain through helping.*",
        "tactical_brief": "Utilizes Therapeutic mechanics. Heal.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Vampire): 50% instead.\r\n    * Evo B (Enhanced Vampire): Also gain 25% of shields you grant.\r\n    * Note: *Selfish support. Sustain through helping.*",
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
            "environment": "Resonates with healing.",
            "narrative": "Practitioners of Therapeutic use this to manipulate healing.",
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
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_099",
        "name": "Selfless Healer",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [
            "HEAL",
            "HEAL"
        ],
        "stats": {
            "cooldown": 4,
            "cost": 60,
            "heal": 76
        },
        "description": "** Cannot support yourself. All ally support +100%. When ally is at full health, you [Heal] 15.\r\n    * **Evo A (Perfect Selfless):** +150% ally support.\r\n    * **Evo B (Rewarded Selfless):** [Heal] 25 when ally full.\r\n    * **Note:** *Pure altruism. Team-only specialist.*",
        "lore_quote": "** *Pure altruism. Team-only specialist.*",
        "tactical_brief": "Utilizes Therapeutic mechanics. Heal, Heal.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Selfless): +150% ally support.\r\n    * Evo B (Rewarded Selfless): [Heal] 25 when ally full.\r\n    * Note: *Pure altruism. Team-only specialist.*",
        "gameplay_info": {
            "usage": [
                "Cost: 60 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": [
                "Heal",
                "Heal"
            ]
        },
        "deep_data": {
            "environment": "Resonates with healing, support.",
            "narrative": "Practitioners of Therapeutic use this to manipulate healing.",
            "evolution": "Potential evolution: Rewarded Selfless"
        },
        "effects": [
            {
                "type": "HEAL",
                "value": 76,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_100",
        "name": "Master Therapist",
        "type": "ACTIVE",
        "tier": "LEGENDARY",
        "tags": [
            "HEAL",
            "SHIELD",
            "CLEANSE"
        ],
        "stats": {
            "cooldown": 5,
            "cost": 80,
            "heal": 102
        },
        "description": "** Passive: All support glyphs cost -2 KP. When ally reaches full Ojas, gain +5 Ojas Integrity. [Heal]/[Shield]/[Cleanse] grant +1 Bandwidth each.\r\n    * **Evo A (Perfect Mastery):** Cost -3 KP, +8 Integrity.\r\n    * **Evo B (Deep Mastery):** Grant +2 Bandwidth per support action.\r\n    * **Note:** *Ultimate support synergy. Rewarded for perfection.*\r\n\r\n---",
        "lore_quote": "** *Ultimate support synergy. Rewarded for perfection.*\r\n\r\n---",
        "tactical_brief": "Utilizes Therapeutic mechanics. Heal, Shield, Cleanse.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Mastery): Cost -3 KP, +8 Integrity.\r\n    * Evo B (Deep Mastery): Grant +2 Bandwidth per support action.\r\n    * Note: *Ultimate support synergy. Rewarded for perfection.*\r\n\r\n---",
        "gameplay_info": {
            "usage": [
                "Cost: 80 Gnosis",
                "Cooldown: 5 Turns"
            ],
            "features": [
                "Heal",
                "Shield",
                "Cleanse"
            ]
        },
        "deep_data": {
            "environment": "Resonates with healing, defense, support.",
            "narrative": "Practitioners of Therapeutic use this to manipulate healing.",
            "evolution": "Potential evolution: Deep Mastery"
        },
        "effects": [
            {
                "type": "HEAL",
                "value": 102,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_95",
        "name": "Mass Resurrection",
        "type": "ACTIVE",
        "tier": "LEGENDARY",
        "tags": [
            "RESURRECT",
            "HEAL",
            "IMMUNITY"
        ],
        "stats": {
            "cooldown": 15,
            "heal": 120
        },
        "description": "Revive all fallen allies with 50% Ojas. They gain immunity for 2 turns.",
        "lore_quote": "\"A technique from the Therapeutic engine.\"",
        "tactical_brief": "Utilizes Therapeutic mechanics. Resurrect, Heal, Immunity.",
        "mastery_perk": "Mastery Lvl 5: Enhanced potency.",
        "gameplay_info": {
            "usage": [
                "Cost: undefined Gnosis",
                "Cooldown: 15 Turns"
            ],
            "features": [
                "Resurrect",
                "Heal",
                "Immunity"
            ]
        },
        "deep_data": {
            "environment": "Resonates with healing, support, ultimate.",
            "narrative": "Practitioners of Therapeutic use this to manipulate healing.",
            "evolution": "Evolution path hidden."
        },
        "effects": [
            {
                "type": "HEAL",
                "value": 120,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_96",
        "name": "Divine Sanctuary",
        "type": "ACTIVE",
        "tier": "LEGENDARY",
        "tags": [
            "SANCTUARY",
            "HEAL",
            "IMMUNITY",
            "ZONE"
        ],
        "stats": {
            "cooldown": 12,
            "heal": 122
        },
        "description": "Create sanctuary zone. All allies inside heal 20 per turn and are immune to debuffs. Lasts 5 turns.",
        "lore_quote": "\"A technique from the Therapeutic engine.\"",
        "tactical_brief": "Utilizes Therapeutic mechanics. Sanctuary, Heal, Immunity, Zone.",
        "mastery_perk": "Mastery Lvl 5: Enhanced potency.",
        "gameplay_info": {
            "usage": [
                "Cost: undefined Gnosis",
                "Cooldown: 12 Turns"
            ],
            "features": [
                "Sanctuary",
                "Heal",
                "Immunity",
                "Zone"
            ]
        },
        "deep_data": {
            "environment": "Resonates with healing, defense, support.",
            "narrative": "Practitioners of Therapeutic use this to manipulate healing.",
            "evolution": "Evolution path hidden."
        },
        "effects": [
            {
                "type": "HEAL",
                "value": 122,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_97",
        "name": "Eternal Life",
        "type": "ACTIVE",
        "tier": "LEGENDARY",
        "tags": [
            "IMMORTALITY",
            "HEAL",
            "PROTECTION"
        ],
        "stats": {
            "cooldown": 18,
            "heal": 124
        },
        "description": "Target ally cannot drop below 1 Ojas for 3 turns. They heal 30 per turn and are immune to Execute effects.",
        "lore_quote": "\"A technique from the Therapeutic engine.\"",
        "tactical_brief": "Utilizes Therapeutic mechanics. Immortality, Heal, Protection.",
        "mastery_perk": "Mastery Lvl 5: Enhanced potency.",
        "gameplay_info": {
            "usage": [
                "Cost: undefined Gnosis",
                "Cooldown: 18 Turns"
            ],
            "features": [
                "Immortality",
                "Heal",
                "Protection"
            ]
        },
        "deep_data": {
            "environment": "Resonates with healing, defense, ultimate.",
            "narrative": "Practitioners of Therapeutic use this to manipulate healing.",
            "evolution": "Evolution path hidden."
        },
        "effects": [
            {
                "type": "HEAL",
                "value": 124,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_98",
        "name": "Radiant Ascension",
        "type": "ACTIVE",
        "tier": "LEGENDARY",
        "tags": [
            "HEAL",
            "CLEANSE",
            "POWER",
            "IMMUNITY"
        ],
        "stats": {
            "cooldown": 16,
            "heal": 126
        },
        "description": "Heal all allies to full Ojas. Remove all debuffs. Grant +50% damage and immunity for 2 turns.",
        "lore_quote": "\"A technique from the Therapeutic engine.\"",
        "tactical_brief": "Utilizes Therapeutic mechanics. Heal, Cleanse, Power, Immunity.",
        "mastery_perk": "Mastery Lvl 5: Enhanced potency.",
        "gameplay_info": {
            "usage": [
                "Cost: undefined Gnosis",
                "Cooldown: 16 Turns"
            ],
            "features": [
                "Heal",
                "Cleanse",
                "Power",
                "Immunity"
            ]
        },
        "deep_data": {
            "environment": "Resonates with healing, support, ultimate.",
            "narrative": "Practitioners of Therapeutic use this to manipulate healing.",
            "evolution": "Evolution path hidden."
        },
        "effects": [
            {
                "type": "HEAL",
                "value": 126,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_99",
        "name": "Phoenix Rebirth",
        "type": "ACTIVE",
        "tier": "LEGENDARY",
        "tags": [
            "RESURRECT",
            "IMMORTALITY",
            "ULTIMATE"
        ],
        "stats": {
            "cooldown": 20,
            "damage": 128
        },
        "description": "Permanent passive: When you would die, instead fully heal and gain 5 turns of immunity. Can only trigger once per duel.",
        "lore_quote": "\"A technique from the Therapeutic engine.\"",
        "tactical_brief": "Utilizes Therapeutic mechanics. Resurrect, Immortality, Ultimate.",
        "mastery_perk": "Mastery Lvl 5: Enhanced potency.",
        "gameplay_info": {
            "usage": [
                "Cost: undefined Gnosis",
                "Cooldown: 20 Turns"
            ],
            "features": [
                "Resurrect",
                "Immortality",
                "Ultimate"
            ]
        },
        "deep_data": {
            "environment": "Resonates with healing, survival, ultimate.",
            "narrative": "Practitioners of Therapeutic use this to manipulate healing.",
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
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    },
    {
        "id": "skill_therapeutic_100",
        "name": "Cosmic Renewal",
        "type": "ACTIVE",
        "tier": "LEGENDARY",
        "tags": [
            "ULTIMATE",
            "RESET",
            "RENEWAL",
            "MIRACLE"
        ],
        "stats": {
            "cooldown": 30,
            "damage": 110
        },
        "description": "ULTIMATE: Reset the entire duel state. All Ojas restored to maximum, all cooldowns reset, all debuffs removed, all resources refilled. Both players draw 5 cards.",
        "lore_quote": "\"A technique from the Therapeutic engine.\"",
        "tactical_brief": "Utilizes Therapeutic mechanics. Ultimate, Reset, Renewal, Miracle.",
        "mastery_perk": "Mastery Lvl 5: Enhanced potency.",
        "gameplay_info": {
            "usage": [
                "Cost: undefined Gnosis",
                "Cooldown: 30 Turns"
            ],
            "features": [
                "Ultimate",
                "Reset",
                "Renewal",
                "Miracle"
            ]
        },
        "deep_data": {
            "environment": "Resonates with healing, ultimate, broken.",
            "narrative": "Practitioners of Therapeutic use this to manipulate healing.",
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
            "on_cast": "You channel the power of Therapeutic.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Therapeutic"
    }
];
