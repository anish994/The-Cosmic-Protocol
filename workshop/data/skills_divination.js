
// Auto-generated from COMPLETE_SKILL_DATABASE.json
// Engine: Divination
// Count: 100

window.SKILL_DB_DIVINATION = [
    {
        "id": "skill_divination_001",
        "name": "Thread Reader",
        "type": "ACTIVE",
        "tier": "COMMON",
        "tags": [],
        "stats": {
            "cooldown": 1,
            "cost": 20,
            "damage": 24
        },
        "description": "** Reveal enemy's next 2 actions. Gain +3 Drishti per action revealed.\r\n   * **Evo A (Deep Reading):** Reveal 3 actions.\r\n   * **Evo B (Reactive Reading):** Also gain +15% evasion against revealed actions.\r\n   * **Note:** *Foundation foresight. Information advantage.*",
        "lore_quote": "** *Foundation foresight. Information advantage.*",
        "tactical_brief": "Utilizes Divination mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Deep Reading): Reveal 3 actions.\r\n   * Evo B (Reactive Reading): Also gain +15% evasion against revealed actions.\r\n   * Note: *Foundation foresight. Information advantage.*",
        "gameplay_info": {
            "usage": [
                "Cost: 20 Gnosis",
                "Cooldown: 1 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Divination use this to manipulate offense.",
            "evolution": "Potential evolution: Reactive Reading"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 24,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_002",
        "name": "Fate Weaver",
        "type": "ACTIVE",
        "tier": "COMMON",
        "tags": [
            "SUTRA"
        ],
        "stats": {
            "cooldown": 2,
            "cost": 30,
            "damage": 28
        },
        "description": "** Place [Sutra] on enemy. Their next harmful action targets themselves instead.\r\n   * **Evo A (Master Weaver):** Affects next 2 actions.\r\n   * **Evo B (Amplified Weaver):** Redirected actions deal +50% damage.\r\n   * **Note:** *Turn enemy power against them.*",
        "lore_quote": "** *Turn enemy power against them.*",
        "tactical_brief": "Utilizes Divination mechanics. Sutra.",
        "mastery_perk": "Mastery Lvl 5: (Master Weaver): Affects next 2 actions.\r\n   * Evo B (Amplified Weaver): Redirected actions deal +50% damage.\r\n   * Note: *Turn enemy power against them.*",
        "gameplay_info": {
            "usage": [
                "Cost: 30 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": [
                "Sutra"
            ]
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Divination use this to manipulate offense.",
            "evolution": "Potential evolution: Amplified Weaver"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 28,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_003",
        "name": "Karmic Reversal",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 2,
            "cost": 35,
            "damage": 47
        },
        "description": "** When enemy uses ability, 30% chance to reverse its target/effect.\r\n   * **Evo A (Perfect Reversal):** 50% chance.\r\n   * **Evo B (Guaranteed Reversal):** 100% chance but costs 10 Drishti.\r\n   * **Note:** *Passive counter system. Chaos creation.*",
        "lore_quote": "** *Passive counter system. Chaos creation.*",
        "tactical_brief": "Utilizes Divination mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Reversal): 50% chance.\r\n   * Evo B (Guaranteed Reversal): 100% chance but costs 10 Drishti.\r\n   * Note: *Passive counter system. Chaos creation.*",
        "gameplay_info": {
            "usage": [
                "Cost: 35 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Divination use this to manipulate offense.",
            "evolution": "Potential evolution: Guaranteed Reversal"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 47,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_004",
        "name": "Destiny Lock",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "DESTINY BOUND"
        ],
        "stats": {
            "cooldown": 2,
            "cost": 40,
            "damage": 50
        },
        "description": "** Apply [Destiny Bound] for 3 turns: Enemy must use only basic attacks.\r\n   * **Evo A (Extended Lock):** Duration 4 turns.\r\n   * **Evo B (Complete Lock):** Cannot use any abilities.\r\n   * **Note:** *Hard lockdown. Ability denial.*",
        "lore_quote": "** *Hard lockdown. Ability denial.*",
        "tactical_brief": "Utilizes Divination mechanics. Destiny Bound.",
        "mastery_perk": "Mastery Lvl 5: (Extended Lock): Duration 4 turns.\r\n   * Evo B (Complete Lock): Cannot use any abilities.\r\n   * Note: *Hard lockdown. Ability denial.*",
        "gameplay_info": {
            "usage": [
                "Cost: 40 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": [
                "Destiny Bound"
            ]
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Divination use this to manipulate offense.",
            "evolution": "Potential evolution: Complete Lock"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 50,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_005",
        "name": "Future Sight",
        "type": "ACTIVE",
        "tier": "COMMON",
        "tags": [],
        "stats": {
            "cooldown": 1,
            "cost": 25,
            "damage": 25
        },
        "description": "** See entire enemy hand/deck. Lasts until you take damage.\r\n   * **Evo A (Perfect Sight):** Also see enemy resources and cooldowns.\r\n   * **Evo B (Persistent Sight):** Doesn't end when damaged.\r\n   * **Note:** *Perfect information. Strategic dominance.*",
        "lore_quote": "** *Perfect information. Strategic dominance.*",
        "tactical_brief": "Utilizes Divination mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Sight): Also see enemy resources and cooldowns.\r\n   * Evo B (Persistent Sight): Doesn't end when damaged.\r\n   * Note: *Perfect information. Strategic dominance.*",
        "gameplay_info": {
            "usage": [
                "Cost: 25 Gnosis",
                "Cooldown: 1 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Divination use this to manipulate offense.",
            "evolution": "Potential evolution: Persistent Sight"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 25,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_006",
        "name": "Probability Shift",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 45,
            "damage": 49
        },
        "description": "** All random effects in your favor become best outcome, enemy random effects become worst outcome.\r\n   * **Evo A (Perfect Probability):** Duration 3 turns instead of 2.\r\n   * **Evo B (Controlled Probability):** Can choose specific outcomes instead of automatic best/worst.\r\n   * **Note:** *RNG control. Eliminate variance.*",
        "lore_quote": "** *RNG control. Eliminate variance.*",
        "tactical_brief": "Utilizes Divination mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Probability): Duration 3 turns instead of 2.\r\n   * Evo B (Controlled Probability): Can choose specific outcomes instead of automatic best/worst.\r\n   * Note: *RNG control. Eliminate variance.*",
        "gameplay_info": {
            "usage": [
                "Cost: 45 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Divination use this to manipulate offense.",
            "evolution": "Potential evolution: Controlled Probability"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 49,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_007",
        "name": "Causal Break",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 50,
            "damage": 50
        },
        "description": "** Cancel enemy combo/sequence. They lose 1 action and 10 resources.\r\n   * **Evo A (Perfect Break):** Lose 2 actions.\r\n   * **Evo B (Punishing Break):** Also deal 25 damage per action cancelled.\r\n   * **Note:** *Interrupt specialist. Tempo swing.*",
        "lore_quote": "** *Interrupt specialist. Tempo swing.*",
        "tactical_brief": "Utilizes Divination mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Break): Lose 2 actions.\r\n   * Evo B (Punishing Break): Also deal 25 damage per action cancelled.\r\n   * Note: *Interrupt specialist. Tempo swing.*",
        "gameplay_info": {
            "usage": [
                "Cost: 50 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Divination use this to manipulate offense.",
            "evolution": "Potential evolution: Punishing Break"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 50,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_008",
        "name": "Predetermined Victory",
        "type": "ACTIVE",
        "tier": "LEGENDARY",
        "tags": [],
        "stats": {
            "cooldown": 5,
            "cost": 75,
            "damage": 95
        },
        "description": "** Once per duel: Next 3 of your actions automatically succeed (cannot miss/be countered).\r\n   * **Evo A (Extended Victory):** 4 actions guaranteed.\r\n   * **Evo B (Perfect Victory):** Actions also deal +100% damage/healing.\r\n   * **Note:** *Guaranteed power spike. Ultimate momentum.*",
        "lore_quote": "** *Guaranteed power spike. Ultimate momentum.*",
        "tactical_brief": "Utilizes Divination mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Extended Victory): 4 actions guaranteed.\r\n   * Evo B (Perfect Victory): Actions also deal +100% damage/healing.\r\n   * Note: *Guaranteed power spike. Ultimate momentum.*",
        "gameplay_info": {
            "usage": [
                "Cost: 75 Gnosis",
                "Cooldown: 5 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with support, offense, healing.",
            "narrative": "Practitioners of Divination use this to manipulate support.",
            "evolution": "Potential evolution: Perfect Victory"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 95,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_009",
        "name": "Fate Steal",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 2,
            "cost": 40,
            "damage": 48
        },
        "description": "** Copy enemy's next action. You perform it first at +50% potency.\r\n   * **Evo A (Perfect Theft):** +100% potency.\r\n   * **Evo B (Double Theft):** Copy 2 actions.\r\n   * **Note:** *Predict and preempt. Action advantage.*",
        "lore_quote": "** *Predict and preempt. Action advantage.*",
        "tactical_brief": "Utilizes Divination mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Theft): +100% potency.\r\n   * Evo B (Double Theft): Copy 2 actions.\r\n   * Note: *Predict and preempt. Action advantage.*",
        "gameplay_info": {
            "usage": [
                "Cost: 40 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Divination use this to manipulate offense.",
            "evolution": "Potential evolution: Double Theft"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 48,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_010",
        "name": "Oracle's Gambit",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [
            "FORESEEN"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 55,
            "damage": 73
        },
        "description": "** Guess enemy's next action type (offense/defense/support). If correct, gain 20 Drishti and [Foreseen] buff. If wrong, lose 15 Drishti.\r\n    * **Evo A (Safe Gambit):** No penalty for wrong guess.\r\n    * **Evo B (High Stakes):** Correct guess grants +30 Drishti and full action copy.\r\n    * **Note:** *High-skill prediction game.*",
        "lore_quote": "** *High-skill prediction game.*",
        "tactical_brief": "Utilizes Divination mechanics. Foreseen.",
        "mastery_perk": "Mastery Lvl 5: (Safe Gambit): No penalty for wrong guess.\r\n    * Evo B (High Stakes): Correct guess grants +30 Drishti and full action copy.\r\n    * Note: *High-skill prediction game.*",
        "gameplay_info": {
            "usage": [
                "Cost: 55 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Foreseen"
            ]
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Divination use this to manipulate offense.",
            "evolution": "Potential evolution: High Stakes"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 73,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_011",
        "name": "Karmic Echo",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 50,
            "damage": 50
        },
        "description": "** Enemy's last action repeats automatically next turn at 75% potency (uncontrollable).\r\n    * **Evo A (Perfect Echo):** 100% potency.\r\n    * **Evo B (Double Echo):** Repeats for 2 turns.\r\n    * **Note:** *Force repetition. Predictable exploitation.*",
        "lore_quote": "** *Force repetition. Predictable exploitation.*",
        "tactical_brief": "Utilizes Divination mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Echo): 100% potency.\r\n    * Evo B (Double Echo): Repeats for 2 turns.\r\n    * Note: *Force repetition. Predictable exploitation.*",
        "gameplay_info": {
            "usage": [
                "Cost: 50 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with support, offense.",
            "narrative": "Practitioners of Divination use this to manipulate support.",
            "evolution": "Potential evolution: Double Echo"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 50,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_012",
        "name": "Destiny Swap",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [],
        "stats": {
            "cooldown": 4,
            "cost": 60,
            "damage": 72
        },
        "description": "** Swap buffs and debuffs between two targets (friend or foe).\r\n    * **Evo A (Perfect Swap):** Swapped effects have +1 turn duration.\r\n    * **Evo B (Mass Swap):** Affects all allies and all enemies.\r\n    * **Note:** *Ultimate redistribution. Chaos control.*",
        "lore_quote": "** *Ultimate redistribution. Chaos control.*",
        "tactical_brief": "Utilizes Divination mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Swap): Swapped effects have +1 turn duration.\r\n    * Evo B (Mass Swap): Affects all allies and all enemies.\r\n    * Note: *Ultimate redistribution. Chaos control.*",
        "gameplay_info": {
            "usage": [
                "Cost: 60 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with support, offense.",
            "narrative": "Practitioners of Divination use this to manipulate support.",
            "evolution": "Potential evolution: Mass Swap"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 72,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_013",
        "name": "Prophetic Strike",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "PROPHECY",
            "CLEANSE"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 45,
            "damage": 53
        },
        "description": "** Mark enemy with [Prophecy]: \"Will take 50 damage in 3 turns.\" Cannot be prevented except by [Cleanse].\r\n    * **Evo A (Greater Prophecy):** 75 damage.\r\n    * **Evo B (Immediate Prophecy):** Triggers in 2 turns.\r\n    * **Note:** *Unavoidable damage. Countdown threat.*",
        "lore_quote": "** *Unavoidable damage. Countdown threat.*",
        "tactical_brief": "Utilizes Divination mechanics. Prophecy, Cleanse.",
        "mastery_perk": "Mastery Lvl 5: (Greater Prophecy): 75 damage.\r\n    * Evo B (Immediate Prophecy): Triggers in 2 turns.\r\n    * Note: *Unavoidable damage. Countdown threat.*",
        "gameplay_info": {
            "usage": [
                "Cost: 45 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Prophecy",
                "Cleanse"
            ]
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Divination use this to manipulate offense.",
            "evolution": "Potential evolution: Immediate Prophecy"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 53,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_014",
        "name": "Fate Acceleration",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 2,
            "cost": 40,
            "damage": 48
        },
        "description": "** All active buffs/debuffs tick twice this turn (consume duration 2x faster).\r\n    * **Evo A (Selective Acceleration):** Only affects chosen effects.\r\n    * **Evo B (Triple Acceleration):** Tick three times.\r\n    * **Note:** *Fast-forward time. Expire enemy buffs.*",
        "lore_quote": "** *Fast-forward time. Expire enemy buffs.*",
        "tactical_brief": "Utilizes Divination mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Selective Acceleration): Only affects chosen effects.\r\n    * Evo B (Triple Acceleration): Tick three times.\r\n    * Note: *Fast-forward time. Expire enemy buffs.*",
        "gameplay_info": {
            "usage": [
                "Cost: 40 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Divination use this to manipulate offense.",
            "evolution": "Potential evolution: Triple Acceleration"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 48,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_015",
        "name": "Causality Loop",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [],
        "stats": {
            "cooldown": 4,
            "cost": 70,
            "damage": 74
        },
        "description": "** Next ability you use will repeat automatically every 3 turns for rest of duel (costs 0 resources to repeat).\r\n    * **Evo A (Rapid Loop):** Repeats every 2 turns.\r\n    * **Evo B (Perfect Loop):** Repeated casts have +50% potency.\r\n    * **Note:** *Infinite value engine. Long game dominance.*",
        "lore_quote": "** *Infinite value engine. Long game dominance.*",
        "tactical_brief": "Utilizes Divination mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Rapid Loop): Repeats every 2 turns.\r\n    * Evo B (Perfect Loop): Repeated casts have +50% potency.\r\n    * Note: *Infinite value engine. Long game dominance.*",
        "gameplay_info": {
            "usage": [
                "Cost: 70 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with support.",
            "narrative": "Practitioners of Divination use this to manipulate support.",
            "evolution": "Potential evolution: Perfect Loop"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 74,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_016",
        "name": "Preemptive Counter",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 55,
            "damage": 71
        },
        "description": "** When enemy declares action, you can spend 15 Drishti to act first with perfect counter ability.\r\n    * **Evo A (Cheap Counter):** Only costs 10 Drishti.\r\n    * **Evo B (Perfect Counter):** Counter deals +100% damage/effect.\r\n    * **Note:** *Instant speed interaction. Interrupt power.*",
        "lore_quote": "** *Instant speed interaction. Interrupt power.*",
        "tactical_brief": "Utilizes Divination mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Cheap Counter): Only costs 10 Drishti.\r\n    * Evo B (Perfect Counter): Counter deals +100% damage/effect.\r\n    * Note: *Instant speed interaction. Interrupt power.*",
        "gameplay_info": {
            "usage": [
                "Cost: 55 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Divination use this to manipulate offense.",
            "evolution": "Potential evolution: Perfect Counter"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 71,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_017",
        "name": "Destiny Fracture",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [],
        "stats": {
            "cooldown": 4,
            "cost": 65,
            "damage": 73
        },
        "description": "** Choose one: Create 3 timeline branches. One is real, others are illusions. Enemy must guess correctly or waste actions. Lasts 2 turns.\r\n    * **Evo A (Extended Fracture):** 3 turns duration.\r\n    * **Evo B (Perfect Fracture):** Create 4 branches instead.\r\n    * **Note:** *Mind games. Action economy advantage.*",
        "lore_quote": "** *Mind games. Action economy advantage.*",
        "tactical_brief": "Utilizes Divination mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Extended Fracture): 3 turns duration.\r\n    * Evo B (Perfect Fracture): Create 4 branches instead.\r\n    * Note: *Mind games. Action economy advantage.*",
        "gameplay_info": {
            "usage": [
                "Cost: 65 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Divination use this to manipulate offense.",
            "evolution": "Potential evolution: Perfect Fracture"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 73,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_018",
        "name": "Karmic Debt",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "DEBT",
            "STUN"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 50,
            "damage": 54
        },
        "description": "** Every action enemy takes adds 1 [Debt] stack. At 10 stacks, deal (stacks × 5) damage and [Stun] for 1 turn.\r\n    * **Evo A (Rapid Debt):** Triggers at 7 stacks.\r\n    * **Evo B (Perfect Debt):** Deal (stacks × 8) damage.\r\n    * **Note:** *Punishment timer. Pressure buildup.*",
        "lore_quote": "** *Punishment timer. Pressure buildup.*",
        "tactical_brief": "Utilizes Divination mechanics. Debt, Stun.",
        "mastery_perk": "Mastery Lvl 5: (Rapid Debt): Triggers at 7 stacks.\r\n    * Evo B (Perfect Debt): Deal (stacks × 8) damage.\r\n    * Note: *Punishment timer. Pressure buildup.*",
        "gameplay_info": {
            "usage": [
                "Cost: 50 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Debt",
                "Stun"
            ]
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Divination use this to manipulate offense.",
            "evolution": "Potential evolution: Perfect Debt"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 54,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_019",
        "name": "Quantum State",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [],
        "stats": {
            "cooldown": 4,
            "cost": 60,
            "damage": 72
        },
        "description": "** Enter superposition: Simultaneously in 2 positions. Enemy must target one (50% to hit wrong position and waste action).\r\n    * **Evo A (Triple State):** 3 positions (33% hit chance).\r\n    * **Evo B (Perfect State):** Also gain +50% evasion.\r\n    * **Note:** *Probability defense. Confusion tactic.*",
        "lore_quote": "** *Probability defense. Confusion tactic.*",
        "tactical_brief": "Utilizes Divination mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Triple State): 3 positions (33% hit chance).\r\n    * Evo B (Perfect State): Also gain +50% evasion.\r\n    * Note: *Probability defense. Confusion tactic.*",
        "gameplay_info": {
            "usage": [
                "Cost: 60 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Divination use this to manipulate offense.",
            "evolution": "Potential evolution: Perfect State"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 72,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_020",
        "name": "Inevitable End",
        "type": "ACTIVE",
        "tier": "LEGENDARY",
        "tags": [
            "PROPHECY"
        ],
        "stats": {
            "cooldown": 5,
            "cost": 80,
            "damage": 98
        },
        "description": "** Mark enemy with [Prophecy]: \"Will be reduced to 1 Ojas in 5 turns.\" Costs 50 Drishti. Can only be prevented by winning duel before then.\r\n    * **Evo A (Rapid End):** 4 turns.\r\n    * **Evo B (Merciful End):** Costs only 40 Drishti.\r\n    * **Note:** *Win condition. Ultimate clock.*\r\n\r\n---\r\n\r\n### **TEMPORAL MANIPULATION — 20 Skills**",
        "lore_quote": "** *Win condition. Ultimate clock.*\r\n\r\n---\r\n\r\n### **TEMPORAL MANIPULATION — 20 Skills**",
        "tactical_brief": "Utilizes Divination mechanics. Prophecy.",
        "mastery_perk": "Mastery Lvl 5: (Rapid End): 4 turns.\r\n    * Evo B (Merciful End): Costs only 40 Drishti.\r\n    * Note: *Win condition. Ultimate clock.*\r\n\r\n---\r\n\r\n### TEMPORAL MANIPULATION — 20 Skills",
        "gameplay_info": {
            "usage": [
                "Cost: 80 Gnosis",
                "Cooldown: 5 Turns"
            ],
            "features": [
                "Prophecy"
            ]
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Divination use this to manipulate offense.",
            "evolution": "Potential evolution: Merciful End"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 98,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_021",
        "name": "Time Rewind",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "KSHANA",
            "KSHANA"
        ],
        "stats": {
            "cooldown": 2,
            "cost": 40,
            "damage": 52
        },
        "description": "** Spend 5 [Kshana]: Undo last enemy action completely.\r\n    * **Evo A (Efficient Rewind):** Only costs 3 [Kshana].\r\n    * **Evo B (Extended Rewind):** Can undo last 2 actions.\r\n    * **Note:** *Ultimate counter. Time control.*",
        "lore_quote": "** *Ultimate counter. Time control.*",
        "tactical_brief": "Utilizes Divination mechanics. Kshana, Kshana.",
        "mastery_perk": "Mastery Lvl 5: (Efficient Rewind): Only costs 3 [Kshana].\r\n    * Evo B (Extended Rewind): Can undo last 2 actions.\r\n    * Note: *Ultimate counter. Time control.*",
        "gameplay_info": {
            "usage": [
                "Cost: 40 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": [
                "Kshana",
                "Kshana"
            ]
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Divination use this to manipulate offense.",
            "evolution": "Potential evolution: Extended Rewind"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 52,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_022",
        "name": "Temporal Stasis",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 2,
            "cost": 35,
            "damage": 47
        },
        "description": "** Target cannot act for 2 turns but is also invulnerable during this time.\r\n    * **Evo A (Extended Stasis):** 3 turns.\r\n    * **Evo B (Vulnerable Stasis):** Target can be damaged but still cannot act.\r\n    * **Note:** *Remove threat temporarily. Setup time.*",
        "lore_quote": "** *Remove threat temporarily. Setup time.*",
        "tactical_brief": "Utilizes Divination mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Extended Stasis): 3 turns.\r\n    * Evo B (Vulnerable Stasis): Target can be damaged but still cannot act.\r\n    * Note: *Remove threat temporarily. Setup time.*",
        "gameplay_info": {
            "usage": [
                "Cost: 35 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Divination use this to manipulate offense.",
            "evolution": "Potential evolution: Vulnerable Stasis"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 47,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_023",
        "name": "Haste Field",
        "type": "ACTIVE",
        "tier": "COMMON",
        "tags": [
            "KSHANA",
            "KSHANA"
        ],
        "stats": {
            "cooldown": 2,
            "cost": 30,
            "damage": 30
        },
        "description": "** Gain +1 action this turn. Costs 2 [Kshana].\r\n    * **Evo A (Extended Haste):** +2 actions.\r\n    * **Evo B (Efficient Haste):** Only costs 1 [Kshana].\r\n    * **Note:** *Action advantage. Tempo boost.*",
        "lore_quote": "** *Action advantage. Tempo boost.*",
        "tactical_brief": "Utilizes Divination mechanics. Kshana, Kshana.",
        "mastery_perk": "Mastery Lvl 5: (Extended Haste): +2 actions.\r\n    * Evo B (Efficient Haste): Only costs 1 [Kshana].\r\n    * Note: *Action advantage. Tempo boost.*",
        "gameplay_info": {
            "usage": [
                "Cost: 30 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": [
                "Kshana",
                "Kshana"
            ]
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Divination use this to manipulate undefined.",
            "evolution": "Potential evolution: Efficient Haste"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 30,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_024",
        "name": "Slow Aura",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 2,
            "cost": 35,
            "damage": 47
        },
        "description": "** Enemy actions cost +2 resources and have +1 turn cooldown for 3 turns.\r\n    * **Evo A (Perfect Slow):** Cost +3 resources.\r\n    * **Evo B (Extended Slow):** Duration 4 turns.\r\n    * **Note:** *Economic warfare. Resource drain.*",
        "lore_quote": "** *Economic warfare. Resource drain.*",
        "tactical_brief": "Utilizes Divination mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Slow): Cost +3 resources.\r\n    * Evo B (Extended Slow): Duration 4 turns.\r\n    * Note: *Economic warfare. Resource drain.*",
        "gameplay_info": {
            "usage": [
                "Cost: 35 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Divination use this to manipulate offense.",
            "evolution": "Potential evolution: Extended Slow"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 47,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_025",
        "name": "Time Skip",
        "type": "ACTIVE",
        "tier": "COMMON",
        "tags": [],
        "stats": {
            "cooldown": 1,
            "cost": 25,
            "damage": 25
        },
        "description": "** Become untargetable for 1 turn. When you reappear, gain +10 Drishti.\r\n    * **Evo A (Extended Skip):** 2 turns untargetable.\r\n    * **Evo B (Profitable Skip):** Gain +20 Drishti.\r\n    * **Note:** *Safety + value. Defensive economy.*",
        "lore_quote": "** *Safety + value. Defensive economy.*",
        "tactical_brief": "Utilizes Divination mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Extended Skip): 2 turns untargetable.\r\n    * Evo B (Profitable Skip): Gain +20 Drishti.\r\n    * Note: *Safety + value. Defensive economy.*",
        "gameplay_info": {
            "usage": [
                "Cost: 25 Gnosis",
                "Cooldown: 1 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Divination use this to manipulate undefined.",
            "evolution": "Potential evolution: Profitable Skip"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 25,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_026",
        "name": "Temporal Loop",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 50,
            "damage": 50
        },
        "description": "** Your last action repeats automatically next turn at no cost.\r\n    * **Evo A (Perfect Loop):** Repeats at +50% potency.\r\n    * **Evo B (Extended Loop):** Repeats for 2 additional turns.\r\n    * **Note:** *Value multiplication. Efficient power.*",
        "lore_quote": "** *Value multiplication. Efficient power.*",
        "tactical_brief": "Utilizes Divination mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Loop): Repeats at +50% potency.\r\n    * Evo B (Extended Loop): Repeats for 2 additional turns.\r\n    * Note: *Value multiplication. Efficient power.*",
        "gameplay_info": {
            "usage": [
                "Cost: 50 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with support.",
            "narrative": "Practitioners of Divination use this to manipulate support.",
            "evolution": "Potential evolution: Extended Loop"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 50,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_027",
        "name": "Age Acceleration",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "DECAY OF TIME"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 45,
            "damage": 51
        },
        "description": "** Apply [Decay of Time]: Enemy takes 5 damage per turn, increasing by +5 each turn (5, 10, 15, 20...). Lasts 5 turns.\r\n    * **Evo A (Perfect Acceleration):** Increases by +8 per turn.\r\n    * **Evo B (Extended Acceleration):** Lasts 6 turns.\r\n    * **Note:** *Exponential DoT. Late-game threat.*",
        "lore_quote": "** *Exponential DoT. Late-game threat.*",
        "tactical_brief": "Utilizes Divination mechanics. Decay of Time.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Acceleration): Increases by +8 per turn.\r\n    * Evo B (Extended Acceleration): Lasts 6 turns.\r\n    * Note: *Exponential DoT. Late-game threat.*",
        "gameplay_info": {
            "usage": [
                "Cost: 45 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Decay of Time"
            ]
        },
        "deep_data": {
            "environment": "Resonates with dot, offense.",
            "narrative": "Practitioners of Divination use this to manipulate dot.",
            "evolution": "Potential evolution: Extended Acceleration"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 51,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_028",
        "name": "Chronology Break",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 55,
            "damage": 71
        },
        "description": "** Remove all buffs/debuffs from target and prevent any new effects for 2 turns.\r\n    * **Evo A (Extended Break):** 3 turns.\r\n    * **Evo B (Mass Break):** Affects all enemies.\r\n    * **Note:** *Reset button. Status immunity.*",
        "lore_quote": "** *Reset button. Status immunity.*",
        "tactical_brief": "Utilizes Divination mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Extended Break): 3 turns.\r\n    * Evo B (Mass Break): Affects all enemies.\r\n    * Note: *Reset button. Status immunity.*",
        "gameplay_info": {
            "usage": [
                "Cost: 55 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Divination use this to manipulate offense.",
            "evolution": "Potential evolution: Mass Break"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 71,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_029",
        "name": "Borrowed Time",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [],
        "stats": {
            "cooldown": 4,
            "cost": 60,
            "damage": 72
        },
        "description": "** Gain 3 extra actions this turn. At end of turn, take 30 damage and lose next turn.\r\n    * **Evo A (Safe Borrow):** Only take 15 damage.\r\n    * **Evo B (Perfect Borrow):** Only lose half of next turn.\r\n    * **Note:** *All-in burst. Decisive moment.*",
        "lore_quote": "** *All-in burst. Decisive moment.*",
        "tactical_brief": "Utilizes Divination mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Safe Borrow): Only take 15 damage.\r\n    * Evo B (Perfect Borrow): Only lose half of next turn.\r\n    * Note: *All-in burst. Decisive moment.*",
        "gameplay_info": {
            "usage": [
                "Cost: 60 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Divination use this to manipulate offense.",
            "evolution": "Potential evolution: Perfect Borrow"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 72,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_030",
        "name": "Temporal Anchor",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 50,
            "damage": 50
        },
        "description": "** Set checkpoint. Once per duel, restore yourself to that checkpoint state (Ojas, resources, position).\r\n    * **Evo A (Perfect Anchor):** Can use twice per duel.\r\n    * **Evo B (Enhanced Anchor):** Restore at +20% Ojas.\r\n    * **Note:** *Safety net. Second chance.*",
        "lore_quote": "** *Safety net. Second chance.*",
        "tactical_brief": "Utilizes Divination mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Anchor): Can use twice per duel.\r\n    * Evo B (Enhanced Anchor): Restore at +20% Ojas.\r\n    * Note: *Safety net. Second chance.*",
        "gameplay_info": {
            "usage": [
                "Cost: 50 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Divination use this to manipulate undefined.",
            "evolution": "Potential evolution: Enhanced Anchor"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 50,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_031",
        "name": "Time Dilation",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 2,
            "cost": 40,
            "damage": 48
        },
        "description": "** All your active effects last +2 turns. Costs 15 Drishti.\r\n    * **Evo A (Perfect Dilation):** +3 turns.\r\n    * **Evo B (Efficient Dilation):** Costs only 10 Drishti.\r\n    * **Note:** *Extend advantage. Value maximization.*",
        "lore_quote": "** *Extend advantage. Value maximization.*",
        "tactical_brief": "Utilizes Divination mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Dilation): +3 turns.\r\n    * Evo B (Efficient Dilation): Costs only 10 Drishti.\r\n    * Note: *Extend advantage. Value maximization.*",
        "gameplay_info": {
            "usage": [
                "Cost: 40 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Divination use this to manipulate undefined.",
            "evolution": "Potential evolution: Efficient Dilation"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 48,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_032",
        "name": "Rapid Aging",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 45,
            "damage": 49
        },
        "description": "** Enemy's next 3 abilities have their cooldowns doubled.\r\n    * **Evo A (Extended Aging):** Affects next 5 abilities.\r\n    * **Evo B (Perfect Aging):** Cooldowns tripled.\r\n    * **Note:** *Tempo destruction. Freeze strategy.*",
        "lore_quote": "** *Tempo destruction. Freeze strategy.*",
        "tactical_brief": "Utilizes Divination mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Extended Aging): Affects next 5 abilities.\r\n    * Evo B (Perfect Aging): Cooldowns tripled.\r\n    * Note: *Tempo destruction. Freeze strategy.*",
        "gameplay_info": {
            "usage": [
                "Cost: 45 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Divination use this to manipulate offense.",
            "evolution": "Potential evolution: Perfect Aging"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 49,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_033",
        "name": "Paradox Creation",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [
            "TEMPORAL ECHO"
        ],
        "stats": {
            "cooldown": 4,
            "cost": 65,
            "damage": 75
        },
        "description": "** Both you and enemy gain [Temporal Echo]: All actions repeat next turn uncontrollably.\r\n    * **Evo A (Controlled Paradox):** Only enemy affected.\r\n    * **Evo B (Perfect Paradox):** Your echoes deal +50% damage/healing.\r\n    * **Note:** *Mutual chaos. Skill expression.*",
        "lore_quote": "** *Mutual chaos. Skill expression.*",
        "tactical_brief": "Utilizes Divination mechanics. Temporal Echo.",
        "mastery_perk": "Mastery Lvl 5: (Controlled Paradox): Only enemy affected.\r\n    * Evo B (Perfect Paradox): Your echoes deal +50% damage/healing.\r\n    * Note: *Mutual chaos. Skill expression.*",
        "gameplay_info": {
            "usage": [
                "Cost: 65 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": [
                "Temporal Echo"
            ]
        },
        "deep_data": {
            "environment": "Resonates with offense, healing.",
            "narrative": "Practitioners of Divination use this to manipulate offense.",
            "evolution": "Potential evolution: Perfect Paradox"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 75,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_034",
        "name": "Time Theft",
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
        "description": "** Reduce all enemy cooldowns by 2 turns. Gain +5 Drishti per cooldown reduced.\r\n    * **Evo A (Perfect Theft):** Gain +8 Drishti per cooldown.\r\n    * **Evo B (Enhanced Theft):** Also [Heal] 10 Ojas per cooldown.\r\n    * **Note:** *Turn disadvantage into advantage.*",
        "lore_quote": "** *Turn disadvantage into advantage.*",
        "tactical_brief": "Utilizes Divination mechanics. Heal.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Theft): Gain +8 Drishti per cooldown.\r\n    * Evo B (Enhanced Theft): Also [Heal] 10 Ojas per cooldown.\r\n    * Note: *Turn disadvantage into advantage.*",
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
            "environment": "Resonates with healing, offense.",
            "narrative": "Practitioners of Divination use this to manipulate healing.",
            "evolution": "Potential evolution: Enhanced Theft"
        },
        "effects": [
            {
                "type": "HEAL",
                "value": 52,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_035",
        "name": "Future Echo",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 55,
            "damage": 71
        },
        "description": "** Perform action from 3 turns in the future now. That future turn skipped automatically.\r\n    * **Evo A (Perfect Echo):** Can use 2 future actions.\r\n    * **Evo B (Efficient Echo):** Future turn only half-skipped.\r\n    * **Note:** *Borrow future power. Complex timing.*",
        "lore_quote": "** *Borrow future power. Complex timing.*",
        "tactical_brief": "Utilizes Divination mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Echo): Can use 2 future actions.\r\n    * Evo B (Efficient Echo): Future turn only half-skipped.\r\n    * Note: *Borrow future power. Complex timing.*",
        "gameplay_info": {
            "usage": [
                "Cost: 55 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with support.",
            "narrative": "Practitioners of Divination use this to manipulate support.",
            "evolution": "Potential evolution: Efficient Echo"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 71,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_036",
        "name": "Eternal Moment",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [],
        "stats": {
            "cooldown": 4,
            "cost": 70,
            "damage": 74
        },
        "description": "** For 1 turn, game state freezes completely except you can act freely (enemy can't respond). Costs 40 Drishti.\r\n    * **Evo A (Extended Moment):** Can act twice during frozen turn.\r\n    * **Evo B (Efficient Moment):** Costs only 30 Drishti.\r\n    * **Note:** *Ultimate control. Free turn.*",
        "lore_quote": "** *Ultimate control. Free turn.*",
        "tactical_brief": "Utilizes Divination mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Extended Moment): Can act twice during frozen turn.\r\n    * Evo B (Efficient Moment): Costs only 30 Drishti.\r\n    * Note: *Ultimate control. Free turn.*",
        "gameplay_info": {
            "usage": [
                "Cost: 70 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Divination use this to manipulate offense.",
            "evolution": "Potential evolution: Efficient Moment"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 74,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_037",
        "name": "Timeline Collapse",
        "type": "ACTIVE",
        "tier": "LEGENDARY",
        "tags": [
            "STUN"
        ],
        "stats": {
            "cooldown": 5,
            "cost": 75,
            "damage": 97
        },
        "description": "** Deal damage equal to (total cooldown time on all enemy abilities × 5).\r\n    * **Evo A (Perfect Collapse):** × 8 instead.\r\n    * **Evo B (Stunning Collapse):** Also [Stun] for 1 turn.\r\n    * **Note:** *Punish passive play. Cooldown counter.*",
        "lore_quote": "** *Punish passive play. Cooldown counter.*",
        "tactical_brief": "Utilizes Divination mechanics. Stun.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Collapse): × 8 instead.\r\n    * Evo B (Stunning Collapse): Also [Stun] for 1 turn.\r\n    * Note: *Punish passive play. Cooldown counter.*",
        "gameplay_info": {
            "usage": [
                "Cost: 75 Gnosis",
                "Cooldown: 5 Turns"
            ],
            "features": [
                "Stun"
            ]
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Divination use this to manipulate offense.",
            "evolution": "Potential evolution: Stunning Collapse"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 97,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_038",
        "name": "Kshana Generator",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "KSHANA"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 45,
            "damage": 51
        },
        "description": "** Passive: Gain 1 [Kshana] every 3 turns (max 5 stored).\r\n    * **Evo A (Rapid Generation):** Every 2 turns.\r\n    * **Evo B (Perfect Generation):** Also gain +5 Drishti when generated.\r\n    * **Note:** *Resource engine. Long-game scaling.*",
        "lore_quote": "** *Resource engine. Long-game scaling.*",
        "tactical_brief": "Utilizes Divination mechanics. Kshana.",
        "mastery_perk": "Mastery Lvl 5: (Rapid Generation): Every 2 turns.\r\n    * Evo B (Perfect Generation): Also gain +5 Drishti when generated.\r\n    * Note: *Resource engine. Long-game scaling.*",
        "gameplay_info": {
            "usage": [
                "Cost: 45 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Kshana"
            ]
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Divination use this to manipulate undefined.",
            "evolution": "Potential evolution: Perfect Generation"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 51,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_039",
        "name": "Temporal Mastery",
        "type": "ACTIVE",
        "tier": "LEGENDARY",
        "tags": [
            "KSHANA",
            "KSHANA"
        ],
        "stats": {
            "cooldown": 5,
            "cost": 80,
            "damage": 100
        },
        "description": "** All time-based abilities cost -50%. Start duel with 5 [Kshana].\r\n    * **Evo A (Perfect Mastery):** Cost -75%.\r\n    * **Evo B (Enhanced Mastery):** Start with 7 [Kshana] and max capacity +2.\r\n    * **Note:** *Temporal specialist. Ultimate efficiency.*",
        "lore_quote": "** *Temporal specialist. Ultimate efficiency.*",
        "tactical_brief": "Utilizes Divination mechanics. Kshana, Kshana.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Mastery): Cost -75%.\r\n    * Evo B (Enhanced Mastery): Start with 7 [Kshana] and max capacity +2.\r\n    * Note: *Temporal specialist. Ultimate efficiency.*",
        "gameplay_info": {
            "usage": [
                "Cost: 80 Gnosis",
                "Cooldown: 5 Turns"
            ],
            "features": [
                "Kshana",
                "Kshana"
            ]
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Divination use this to manipulate undefined.",
            "evolution": "Potential evolution: Enhanced Mastery"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 100,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_040",
        "name": "End of Time",
        "type": "ACTIVE",
        "tier": "LEGENDARY",
        "tags": [
            "KSHANA"
        ],
        "stats": {
            "cooldown": 6,
            "cost": 90,
            "damage": 100
        },
        "description": "** Once per duel: Stop time for 3 turns. Only you can act. Costs all [Kshana] and 50 Drishti.\r\n    * **Evo A (Extended End):** 4 turns duration.\r\n    * **Evo B (Perfect End):** Actions during stopped time deal +100% damage.\r\n    * **Note:** *God-mode. Win condition.*\r\n\r\n---\r\n\r\n### **KNOWLEDGE EXTRACTION — 20 Skills**",
        "lore_quote": "** *God-mode. Win condition.*\r\n\r\n---\r\n\r\n### **KNOWLEDGE EXTRACTION — 20 Skills**",
        "tactical_brief": "Utilizes Divination mechanics. Kshana.",
        "mastery_perk": "Mastery Lvl 5: (Extended End): 4 turns duration.\r\n    * Evo B (Perfect End): Actions during stopped time deal +100% damage.\r\n    * Note: *God-mode. Win condition.*\r\n\r\n---\r\n\r\n### KNOWLEDGE EXTRACTION — 20 Skills",
        "gameplay_info": {
            "usage": [
                "Cost: 90 Gnosis",
                "Cooldown: 6 Turns"
            ],
            "features": [
                "Kshana"
            ]
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Divination use this to manipulate offense.",
            "evolution": "Potential evolution: Perfect End"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 100,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_041",
        "name": "Mind Read",
        "type": "ACTIVE",
        "tier": "COMMON",
        "tags": [],
        "stats": {
            "cooldown": 1,
            "cost": 25,
            "damage": 25
        },
        "description": "** Reveal enemy's entire hand/deck and current resources.\r\n    * **Evo A (Perfect Reading):** Also reveal their next 2 draw/actions.\r\n    * **Evo B (Persistent Reading):** Information doesn't expire until end of duel.\r\n    * **Note:** *Perfect information. Strategic advantage.*",
        "lore_quote": "** *Perfect information. Strategic advantage.*",
        "tactical_brief": "Utilizes Divination mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Reading): Also reveal their next 2 draw/actions.\r\n    * Evo B (Persistent Reading): Information doesn't expire until end of duel.\r\n    * Note: *Perfect information. Strategic advantage.*",
        "gameplay_info": {
            "usage": [
                "Cost: 25 Gnosis",
                "Cooldown: 1 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Divination use this to manipulate offense.",
            "evolution": "Potential evolution: Persistent Reading"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 25,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_042",
        "name": "Skill Drain",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "KNOWLEDGE DRAIN"
        ],
        "stats": {
            "cooldown": 2,
            "cost": 35,
            "damage": 49
        },
        "description": "** Apply [Knowledge Drain]: Enemy's next ability deals -50% damage/healing.\r\n    * **Evo A (Perfect Drain):** -75% potency.\r\n    * **Evo B (Extended Drain):** Affects next 3 abilities.\r\n    * **Note:** *Weaken threats. Defensive tool.*",
        "lore_quote": "** *Weaken threats. Defensive tool.*",
        "tactical_brief": "Utilizes Divination mechanics. Knowledge Drain.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Drain): -75% potency.\r\n    * Evo B (Extended Drain): Affects next 3 abilities.\r\n    * Note: *Weaken threats. Defensive tool.*",
        "gameplay_info": {
            "usage": [
                "Cost: 35 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": [
                "Knowledge Drain"
            ]
        },
        "deep_data": {
            "environment": "Resonates with offense, healing.",
            "narrative": "Practitioners of Divination use this to manipulate offense.",
            "evolution": "Potential evolution: Extended Drain"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 49,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_043",
        "name": "Akashic Access",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "DARSHAN",
            "DARSHAN",
            "DARSHAN",
            "DARSHAN"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 50,
            "damage": 58
        },
        "description": "** Gain +20 [Darshan]. For each [Darshan], +1% all effects (caps at +20%).\r\n    * **Evo A (Perfect Access):** +2% per [Darshan].\r\n    * **Evo B (Deep Access):** Max [Darshan] increased to 30.\r\n    * **Note:** *Scaling engine. Knowledge as power.*",
        "lore_quote": "** *Scaling engine. Knowledge as power.*",
        "tactical_brief": "Utilizes Divination mechanics. Darshan, Darshan, Darshan, Darshan.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Access): +2% per [Darshan].\r\n    * Evo B (Deep Access): Max [Darshan] increased to 30.\r\n    * Note: *Scaling engine. Knowledge as power.*",
        "gameplay_info": {
            "usage": [
                "Cost: 50 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Darshan",
                "Darshan",
                "Darshan",
                "Darshan"
            ]
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Divination use this to manipulate undefined.",
            "evolution": "Potential evolution: Deep Access"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 58,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_044",
        "name": "Ability Copy",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 45,
            "damage": 49
        },
        "description": "** Copy enemy's last used ability. You can use it once this duel.\r\n    * **Evo A (Perfect Copy):** Can use it 3 times.\r\n    * **Evo B (Enhanced Copy):** Copied ability has +50% potency.\r\n    * **Note:** *Flexible toolkit. Adaptation.*",
        "lore_quote": "** *Flexible toolkit. Adaptation.*",
        "tactical_brief": "Utilizes Divination mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Copy): Can use it 3 times.\r\n    * Evo B (Enhanced Copy): Copied ability has +50% potency.\r\n    * Note: *Flexible toolkit. Adaptation.*",
        "gameplay_info": {
            "usage": [
                "Cost: 45 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Divination use this to manipulate offense.",
            "evolution": "Potential evolution: Enhanced Copy"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 49,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_045",
        "name": "Weakness Reveal",
        "type": "ACTIVE",
        "tier": "COMMON",
        "tags": [],
        "stats": {
            "cooldown": 2,
            "cost": 30,
            "damage": 26
        },
        "description": "** Mark enemy: They take +25% damage from all sources for 3 turns.\r\n    * **Evo A (Perfect Reveal):** +40% damage taken.\r\n    * **Evo B (Extended Reveal):** Duration 4 turns.\r\n    * **Note:** *Amplify damage. Team synergy.*",
        "lore_quote": "** *Amplify damage. Team synergy.*",
        "tactical_brief": "Utilizes Divination mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Reveal): +40% damage taken.\r\n    * Evo B (Extended Reveal): Duration 4 turns.\r\n    * Note: *Amplify damage. Team synergy.*",
        "gameplay_info": {
            "usage": [
                "Cost: 30 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Divination use this to manipulate offense.",
            "evolution": "Potential evolution: Extended Reveal"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 26,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_046",
        "name": "Memory Extraction",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "DARSHAN",
            "DARSHAN"
        ],
        "stats": {
            "cooldown": 2,
            "cost": 40,
            "damage": 52
        },
        "description": "** Steal 15 resources from enemy and gain +10 [Darshan].\r\n    * **Evo A (Perfect Extraction):** Steal 25 resources.\r\n    * **Evo B (Deep Extraction):** Gain +20 [Darshan].\r\n    * **Note:** *Economic warfare + knowledge gain.*",
        "lore_quote": "** *Economic warfare + knowledge gain.*",
        "tactical_brief": "Utilizes Divination mechanics. Darshan, Darshan.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Extraction): Steal 25 resources.\r\n    * Evo B (Deep Extraction): Gain +20 [Darshan].\r\n    * Note: *Economic warfare + knowledge gain.*",
        "gameplay_info": {
            "usage": [
                "Cost: 40 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": [
                "Darshan",
                "Darshan"
            ]
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Divination use this to manipulate offense.",
            "evolution": "Potential evolution: Deep Extraction"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 52,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_047",
        "name": "Omniscience",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [],
        "stats": {
            "cooldown": 4,
            "cost": 60,
            "damage": 72
        },
        "description": "** For 3 turns, see all hidden information (enemy hand, cooldowns, deck order, random outcomes).\r\n    * **Evo A (Extended Omniscience):** Duration 4 turns.\r\n    * **Evo B (Perfect Omniscience):** Also gain immunity to mind-affecting effects.\r\n    * **Note:** *Ultimate information. Perfect play.*",
        "lore_quote": "** *Ultimate information. Perfect play.*",
        "tactical_brief": "Utilizes Divination mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Extended Omniscience): Duration 4 turns.\r\n    * Evo B (Perfect Omniscience): Also gain immunity to mind-affecting effects.\r\n    * Note: *Ultimate information. Perfect play.*",
        "gameplay_info": {
            "usage": [
                "Cost: 60 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Divination use this to manipulate offense.",
            "evolution": "Potential evolution: Perfect Omniscience"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 72,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_048",
        "name": "Knowledge Bomb",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [
            "DARSHAN",
            "DARSHAN",
            "SILENCE"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 55,
            "damage": 77
        },
        "description": "** Deal 10 damage to all enemies per [Darshan] you have (max 200 damage).\r\n    * **Evo A (Perfect Bomb):** 15 damage per [Darshan].\r\n    * **Evo B (Stunning Bomb):** Also [Silence] all hit enemies for 1 turn.\r\n    * **Note:** *Knowledge as weapon. Scaling burst.*",
        "lore_quote": "** *Knowledge as weapon. Scaling burst.*",
        "tactical_brief": "Utilizes Divination mechanics. Darshan, Darshan, Silence.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Bomb): 15 damage per [Darshan].\r\n    * Evo B (Stunning Bomb): Also [Silence] all hit enemies for 1 turn.\r\n    * Note: *Knowledge as weapon. Scaling burst.*",
        "gameplay_info": {
            "usage": [
                "Cost: 55 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Darshan",
                "Darshan",
                "Silence"
            ]
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Divination use this to manipulate offense.",
            "evolution": "Potential evolution: Stunning Bomb"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 77,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_049",
        "name": "Insight Theft",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "DARSHAN",
            "DARSHAN"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 50,
            "damage": 54
        },
        "description": "** Steal half of enemy's positive stacks/buffs and convert to [Darshan].\r\n    * **Evo A (Perfect Theft):** Steal all stacks.\r\n    * **Evo B (Double Theft):** Gain 2 [Darshan] per stack stolen.\r\n    * **Note:** *Punish buffs. Turn power against them.*",
        "lore_quote": "** *Punish buffs. Turn power against them.*",
        "tactical_brief": "Utilizes Divination mechanics. Darshan, Darshan.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Theft): Steal all stacks.\r\n    * Evo B (Double Theft): Gain 2 [Darshan] per stack stolen.\r\n    * Note: *Punish buffs. Turn power against them.*",
        "gameplay_info": {
            "usage": [
                "Cost: 50 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Darshan",
                "Darshan"
            ]
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Divination use this to manipulate offense.",
            "evolution": "Potential evolution: Double Theft"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 54,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_050",
        "name": "Scholar's Patience",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "DARSHAN",
            "DARSHAN"
        ],
        "stats": {
            "cooldown": 2,
            "cost": 35,
            "damage": 51
        },
        "description": "** Passive: Gain +1 [Darshan] every turn you don't attack.\r\n    * **Evo A (Rapid Scholarship):** +2 [Darshan] per turn.\r\n    * **Evo B (Perfect Patience):** Also gain +5 Drishti per turn.\r\n    * **Note:** *Defensive scaling. Long-game.*",
        "lore_quote": "** *Defensive scaling. Long-game.*",
        "tactical_brief": "Utilizes Divination mechanics. Darshan, Darshan.",
        "mastery_perk": "Mastery Lvl 5: (Rapid Scholarship): +2 [Darshan] per turn.\r\n    * Evo B (Perfect Patience): Also gain +5 Drishti per turn.\r\n    * Note: *Defensive scaling. Long-game.*",
        "gameplay_info": {
            "usage": [
                "Cost: 35 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": [
                "Darshan",
                "Darshan"
            ]
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Divination use this to manipulate undefined.",
            "evolution": "Potential evolution: Perfect Patience"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 51,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_051",
        "name": "Forbidden Knowledge",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [
            "DARSHAN",
            "DARSHAN"
        ],
        "stats": {
            "cooldown": 4,
            "cost": 65,
            "damage": 77
        },
        "description": "** Sacrifice 20 Ojas to gain +10 [Darshan] and reveal all enemy hidden abilities.\r\n    * **Evo A (Safe Knowledge):** Only sacrifice 10 Ojas.\r\n    * **Evo B (Perfect Knowledge):** Gain +15 [Darshan] instead.\r\n    * **Note:** *Pay life for power. Information advantage.*",
        "lore_quote": "** *Pay life for power. Information advantage.*",
        "tactical_brief": "Utilizes Divination mechanics. Darshan, Darshan.",
        "mastery_perk": "Mastery Lvl 5: (Safe Knowledge): Only sacrifice 10 Ojas.\r\n    * Evo B (Perfect Knowledge): Gain +15 [Darshan] instead.\r\n    * Note: *Pay life for power. Information advantage.*",
        "gameplay_info": {
            "usage": [
                "Cost: 65 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": [
                "Darshan",
                "Darshan"
            ]
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Divination use this to manipulate offense.",
            "evolution": "Potential evolution: Perfect Knowledge"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 77,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_052",
        "name": "Cognitive Overload",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 45,
            "damage": 49
        },
        "description": "** Enemy must discard 2 random cards/abilities for 2 turns.\r\n    * **Evo A (Perfect Overload):** Discard 3 cards.\r\n    * **Evo B (Extended Overload):** Duration 3 turns.\r\n    * **Note:** *Hand disruption. Resource denial.*",
        "lore_quote": "** *Hand disruption. Resource denial.*",
        "tactical_brief": "Utilizes Divination mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Overload): Discard 3 cards.\r\n    * Evo B (Extended Overload): Duration 3 turns.\r\n    * Note: *Hand disruption. Resource denial.*",
        "gameplay_info": {
            "usage": [
                "Cost: 45 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Divination use this to manipulate offense.",
            "evolution": "Potential evolution: Extended Overload"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 49,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_053",
        "name": "Wisdom Shield",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 2,
            "cost": 40,
            "damage": 48
        },
        "description": "** Gain (Darshan × 5) shield. Lasts 3 turns or until broken.\r\n    * **Evo A (Perfect Shield):** (Darshan × 8) shield.\r\n    * **Evo B (Persistent Shield):** Lasts 5 turns.\r\n    * **Note:** *Knowledge as defense. Scaling protection.*",
        "lore_quote": "** *Knowledge as defense. Scaling protection.*",
        "tactical_brief": "Utilizes Divination mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Shield): (Darshan × 8) shield.\r\n    * Evo B (Persistent Shield): Lasts 5 turns.\r\n    * Note: *Knowledge as defense. Scaling protection.*",
        "gameplay_info": {
            "usage": [
                "Cost: 40 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Divination use this to manipulate undefined.",
            "evolution": "Potential evolution: Persistent Shield"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 48,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_054",
        "name": "Secret Unveiling",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 55,
            "damage": 71
        },
        "description": "** Force enemy to reveal their entire strategy (abilities they plan to use, order, targets). Lasts 2 turns.\r\n    * **Evo A (Extended Unveiling):** 3 turns.\r\n    * **Evo B (Perfect Unveiling):** Also prevents them from changing revealed strategy.\r\n    * **Note:** *Ultimate mind read. Forced transparency.*",
        "lore_quote": "** *Ultimate mind read. Forced transparency.*",
        "tactical_brief": "Utilizes Divination mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Extended Unveiling): 3 turns.\r\n    * Evo B (Perfect Unveiling): Also prevents them from changing revealed strategy.\r\n    * Note: *Ultimate mind read. Forced transparency.*",
        "gameplay_info": {
            "usage": [
                "Cost: 55 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Divination use this to manipulate offense.",
            "evolution": "Potential evolution: Perfect Unveiling"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 71,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_055",
        "name": "Knowledge Network",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "DARSHAN"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 50,
            "damage": 52
        },
        "description": "** All allies gain [Darshan] equal to yours. Shared knowledge grants +10% effects to team.\r\n    * **Evo A (Perfect Network):** +20% effects.\r\n    * **Evo B (Deep Network):** Also share Drishti resources.\r\n    * **Note:** *Team buff. Multiplayer synergy.*",
        "lore_quote": "** *Team buff. Multiplayer synergy.*",
        "tactical_brief": "Utilizes Divination mechanics. Darshan.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Network): +20% effects.\r\n    * Evo B (Deep Network): Also share Drishti resources.\r\n    * Note: *Team buff. Multiplayer synergy.*",
        "gameplay_info": {
            "usage": [
                "Cost: 50 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Darshan"
            ]
        },
        "deep_data": {
            "environment": "Resonates with support.",
            "narrative": "Practitioners of Divination use this to manipulate support.",
            "evolution": "Potential evolution: Deep Network"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 52,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_056",
        "name": "Memory Wipe",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [],
        "stats": {
            "cooldown": 4,
            "cost": 60,
            "damage": 72
        },
        "description": "** Enemy loses access to all abilities used this duel for 3 turns (can only use unused abilities).\r\n    * **Evo A (Extended Wipe):** Duration 4 turns.\r\n    * **Evo B (Perfect Wipe):** Also reset all their cooldowns to maximum.\r\n    * **Note:** *Ultimate disruption. Strategy reset.*",
        "lore_quote": "** *Ultimate disruption. Strategy reset.*",
        "tactical_brief": "Utilizes Divination mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Extended Wipe): Duration 4 turns.\r\n    * Evo B (Perfect Wipe): Also reset all their cooldowns to maximum.\r\n    * Note: *Ultimate disruption. Strategy reset.*",
        "gameplay_info": {
            "usage": [
                "Cost: 60 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Divination use this to manipulate offense.",
            "evolution": "Potential evolution: Perfect Wipe"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 72,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_057",
        "name": "Philosopher's Stone",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [
            "DARSHAN",
            "DARSHAN"
        ],
        "stats": {
            "cooldown": 4,
            "cost": 70,
            "damage": 78
        },
        "description": "** Convert 10 [Darshan] into any resource type (Ojas/Drishti/Kshana/etc.) at 2:1 ratio.\r\n    * **Evo A (Perfect Stone):** 1:1 ratio conversion.\r\n    * **Evo B (Efficient Stone):** Only costs 5 [Darshan] to activate.\r\n    * **Note:** *Ultimate flexibility. Resource converter.*",
        "lore_quote": "** *Ultimate flexibility. Resource converter.*",
        "tactical_brief": "Utilizes Divination mechanics. Darshan, Darshan.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Stone): 1:1 ratio conversion.\r\n    * Evo B (Efficient Stone): Only costs 5 [Darshan] to activate.\r\n    * Note: *Ultimate flexibility. Resource converter.*",
        "gameplay_info": {
            "usage": [
                "Cost: 70 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": [
                "Darshan",
                "Darshan"
            ]
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Divination use this to manipulate undefined.",
            "evolution": "Potential evolution: Efficient Stone"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 78,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_058",
        "name": "Universal Truth",
        "type": "ACTIVE",
        "tier": "LEGENDARY",
        "tags": [],
        "stats": {
            "cooldown": 5,
            "cost": 75,
            "damage": 95
        },
        "description": "** Passive: Cannot be affected by illusions, lies, or misdirection. Always see true game state.\r\n    * **Evo A (Perfect Truth):** Also immune to mind control effects.\r\n    * **Evo B (Shared Truth):** All allies gain this immunity.\r\n    * **Note:** *Anti-illusion. Clarity eternal.*",
        "lore_quote": "** *Anti-illusion. Clarity eternal.*",
        "tactical_brief": "Utilizes Divination mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Truth): Also immune to mind control effects.\r\n    * Evo B (Shared Truth): All allies gain this immunity.\r\n    * Note: *Anti-illusion. Clarity eternal.*",
        "gameplay_info": {
            "usage": [
                "Cost: 75 Gnosis",
                "Cooldown: 5 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with support.",
            "narrative": "Practitioners of Divination use this to manipulate support.",
            "evolution": "Potential evolution: Shared Truth"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 95,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_059",
        "name": "Darshan Overload",
        "type": "ACTIVE",
        "tier": "LEGENDARY",
        "tags": [
            "DARSHAN",
            "DARSHAN"
        ],
        "stats": {
            "cooldown": 5,
            "cost": 80,
            "damage": 100
        },
        "description": "** Spend all [Darshan]: For each spent, gain +10% all effects for 3 turns. Max +200%.\r\n    * **Evo A (Perfect Overload):** +15% per [Darshan].\r\n    * **Evo B (Extended Overload):** Duration 4 turns.\r\n    * **Note:** *Cash in knowledge. Massive power spike.*",
        "lore_quote": "** *Cash in knowledge. Massive power spike.*",
        "tactical_brief": "Utilizes Divination mechanics. Darshan, Darshan.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Overload): +15% per [Darshan].\r\n    * Evo B (Extended Overload): Duration 4 turns.\r\n    * Note: *Cash in knowledge. Massive power spike.*",
        "gameplay_info": {
            "usage": [
                "Cost: 80 Gnosis",
                "Cooldown: 5 Turns"
            ],
            "features": [
                "Darshan",
                "Darshan"
            ]
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Divination use this to manipulate undefined.",
            "evolution": "Potential evolution: Extended Overload"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 100,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_060",
        "name": "Infinite Library",
        "type": "ACTIVE",
        "tier": "LEGENDARY",
        "tags": [
            "DARSHAN",
            "DARSHAN",
            "DARSHAN",
            "DARSHAN",
            "DARSHAN"
        ],
        "stats": {
            "cooldown": 5,
            "cost": 85,
            "damage": 107
        },
        "description": "** Passive: [Darshan] has no cap. Gain +1 [Darshan] every turn. Start duel with 10 [Darshan].\r\n    * **Evo A (Perfect Library):** Gain +2 [Darshan] per turn.\r\n    * **Evo B (Deep Library):** Start with 20 [Darshan].\r\n    * **Note:** *Infinite scaling. Late-game god.*\r\n\r\n---\r\n\r\n### **CELESTIAL INFLUENCE (JYOTISH) — 15 Skills**",
        "lore_quote": "** *Infinite scaling. Late-game god.*\r\n\r\n---\r\n\r\n### **CELESTIAL INFLUENCE (JYOTISH) — 15 Skills**",
        "tactical_brief": "Utilizes Divination mechanics. Darshan, Darshan, Darshan, Darshan, Darshan.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Library): Gain +2 [Darshan] per turn.\r\n    * Evo B (Deep Library): Start with 20 [Darshan].\r\n    * Note: *Infinite scaling. Late-game god.*\r\n\r\n---\r\n\r\n### CELESTIAL INFLUENCE (JYOTISH) — 15 Skills",
        "gameplay_info": {
            "usage": [
                "Cost: 85 Gnosis",
                "Cooldown: 5 Turns"
            ],
            "features": [
                "Darshan",
                "Darshan",
                "Darshan",
                "Darshan",
                "Darshan"
            ]
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Divination use this to manipulate undefined.",
            "evolution": "Potential evolution: Deep Library"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 107,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_061",
        "name": "Planetary Alignment",
        "type": "ACTIVE",
        "tier": "COMMON",
        "tags": [],
        "stats": {
            "cooldown": 2,
            "cost": 30,
            "damage": 26
        },
        "description": "** Every 3 turns, gain rotating buff: Turn 1: +20% damage | Turn 2: +20% healing | Turn 3: +20% defense.\r\n    * **Evo A (Perfect Alignment):** +35% bonuses.\r\n    * **Evo B (Rapid Alignment):** Cycles every 2 turns.\r\n    * **Note:** *Predictable power cycles. Planning reward.*",
        "lore_quote": "** *Predictable power cycles. Planning reward.*",
        "tactical_brief": "Utilizes Divination mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Alignment): +35% bonuses.\r\n    * Evo B (Rapid Alignment): Cycles every 2 turns.\r\n    * Note: *Predictable power cycles. Planning reward.*",
        "gameplay_info": {
            "usage": [
                "Cost: 30 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with offense, healing.",
            "narrative": "Practitioners of Divination use this to manipulate offense.",
            "evolution": "Potential evolution: Rapid Alignment"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 26,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_062",
        "name": "Solar Flare",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "BURN",
            "BURN"
        ],
        "stats": {
            "cooldown": 2,
            "cost": 35,
            "damage": 51
        },
        "description": "** Deal 40 damage to all enemies. Apply [Burn] (3 damage/turn for 3 turns).\r\n    * **Evo A (Perfect Flare):** 60 base damage.\r\n    * **Evo B (Lingering Flare):** [Burn] lasts 5 turns.\r\n    * **Note:** *AoE damage. Board clear.*",
        "lore_quote": "** *AoE damage. Board clear.*",
        "tactical_brief": "Utilizes Divination mechanics. Burn, Burn.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Flare): 60 base damage.\r\n    * Evo B (Lingering Flare): [Burn] lasts 5 turns.\r\n    * Note: *AoE damage. Board clear.*",
        "gameplay_info": {
            "usage": [
                "Cost: 35 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": [
                "Burn",
                "Burn"
            ]
        },
        "deep_data": {
            "environment": "Resonates with dot, offense.",
            "narrative": "Practitioners of Divination use this to manipulate dot.",
            "evolution": "Potential evolution: Lingering Flare"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 51,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_063",
        "name": "Lunar Blessing",
        "type": "ACTIVE",
        "tier": "COMMON",
        "tags": [
            "HEAL",
            "DARSHAN",
            "DARSHAN"
        ],
        "stats": {
            "cooldown": 2,
            "cost": 30,
            "heal": 32
        },
        "description": "** [Heal] all allies for 30 Ojas. Gain [Darshan] equal to allies healed.\r\n    * **Evo A (Perfect Blessing):** 50 Ojas healed.\r\n    * **Evo B (Knowledge Blessing):** Gain 2 [Darshan] per ally.\r\n    * **Note:** *Team support + knowledge generation.*",
        "lore_quote": "** *Team support + knowledge generation.*",
        "tactical_brief": "Utilizes Divination mechanics. Heal, Darshan, Darshan.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Blessing): 50 Ojas healed.\r\n    * Evo B (Knowledge Blessing): Gain 2 [Darshan] per ally.\r\n    * Note: *Team support + knowledge generation.*",
        "gameplay_info": {
            "usage": [
                "Cost: 30 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": [
                "Heal",
                "Darshan",
                "Darshan"
            ]
        },
        "deep_data": {
            "environment": "Resonates with healing, support.",
            "narrative": "Practitioners of Divination use this to manipulate healing.",
            "evolution": "Potential evolution: Knowledge Blessing"
        },
        "effects": [
            {
                "type": "HEAL",
                "value": 32,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_064",
        "name": "Eclipse",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 45,
            "damage": 49
        },
        "description": "** Create darkness field for 3 turns: All enemies have -30% accuracy and cannot gain buffs.\r\n    * **Evo A (Perfect Eclipse):** -50% accuracy.\r\n    * **Evo B (Extended Eclipse):** Duration 4 turns.\r\n    * **Note:** *Zone control. Debuff field.*",
        "lore_quote": "** *Zone control. Debuff field.*",
        "tactical_brief": "Utilizes Divination mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Eclipse): -50% accuracy.\r\n    * Evo B (Extended Eclipse): Duration 4 turns.\r\n    * Note: *Zone control. Debuff field.*",
        "gameplay_info": {
            "usage": [
                "Cost: 45 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Divination use this to manipulate offense.",
            "evolution": "Potential evolution: Extended Eclipse"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 49,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_065",
        "name": "Mercury Trick",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 2,
            "cost": 40,
            "damage": 48
        },
        "description": "** Swap positions of two enemies. Their next action targets wrong enemy.\r\n    * **Evo A (Perfect Trick):** Affects next 2 actions.\r\n    * **Evo B (Mass Trick):** Can swap 4 enemies total (2 pairs).\r\n    * **Note:** *Tactical manipulation. Positioning chaos.*",
        "lore_quote": "** *Tactical manipulation. Positioning chaos.*",
        "tactical_brief": "Utilizes Divination mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Trick): Affects next 2 actions.\r\n    * Evo B (Mass Trick): Can swap 4 enemies total (2 pairs).\r\n    * Note: *Tactical manipulation. Positioning chaos.*",
        "gameplay_info": {
            "usage": [
                "Cost: 40 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Divination use this to manipulate offense.",
            "evolution": "Potential evolution: Mass Trick"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 48,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_066",
        "name": "Venus Charm",
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
        "description": "** Apply [Subservience]: Enemy's next action targets their ally instead of yours.\r\n    * **Evo A (Perfect Charm):** Affects next 2 actions.\r\n    * **Evo B (Mass Charm):** Affects all enemies.\r\n    * **Note:** *Turn allies against each other.*",
        "lore_quote": "** *Turn allies against each other.*",
        "tactical_brief": "Utilizes Divination mechanics. Subservience.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Charm): Affects next 2 actions.\r\n    * Evo B (Mass Charm): Affects all enemies.\r\n    * Note: *Turn allies against each other.*",
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
            "environment": "Resonates with support, offense.",
            "narrative": "Practitioners of Divination use this to manipulate support.",
            "evolution": "Potential evolution: Mass Charm"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 52,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_067",
        "name": "Mars Wrath",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 2,
            "cost": 35,
            "damage": 47
        },
        "description": "** For 3 turns, all damage dealt by anyone increased by 50%.\r\n    * **Evo A (Perfect Wrath):** +75% damage.\r\n    * **Evo B (Selective Wrath):** Only your damage increased by +100%.\r\n    * **Note:** *Double-edged power. Aggression focus.*",
        "lore_quote": "** *Double-edged power. Aggression focus.*",
        "tactical_brief": "Utilizes Divination mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Wrath): +75% damage.\r\n    * Evo B (Selective Wrath): Only your damage increased by +100%.\r\n    * Note: *Double-edged power. Aggression focus.*",
        "gameplay_info": {
            "usage": [
                "Cost: 35 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Divination use this to manipulate offense.",
            "evolution": "Potential evolution: Selective Wrath"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 47,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_068",
        "name": "Jupiter's Luck",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 45,
            "damage": 49
        },
        "description": "** For 3 turns, all your random effects become best possible outcome.\r\n    * **Evo A (Extended Luck):** Duration 4 turns.\r\n    * **Evo B (Perfect Luck):** Also gain +20% all effects.\r\n    * **Note:** *RNG control. Variance elimination.*",
        "lore_quote": "** *RNG control. Variance elimination.*",
        "tactical_brief": "Utilizes Divination mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Extended Luck): Duration 4 turns.\r\n    * Evo B (Perfect Luck): Also gain +20% all effects.\r\n    * Note: *RNG control. Variance elimination.*",
        "gameplay_info": {
            "usage": [
                "Cost: 45 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Divination use this to manipulate undefined.",
            "evolution": "Potential evolution: Perfect Luck"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 49,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_069",
        "name": "Saturn's Judgment",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 55,
            "damage": 71
        },
        "description": "** Mark enemy: In 5 turns, they take 100 damage. Cannot be prevented.\r\n    * **Evo A (Rapid Judgment):** 4 turns.\r\n    * **Evo B (Perfect Judgment):** 150 damage.\r\n    * **Note:** *Inevitable threat. Countdown pressure.*",
        "lore_quote": "** *Inevitable threat. Countdown pressure.*",
        "tactical_brief": "Utilizes Divination mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Rapid Judgment): 4 turns.\r\n    * Evo B (Perfect Judgment): 150 damage.\r\n    * Note: *Inevitable threat. Countdown pressure.*",
        "gameplay_info": {
            "usage": [
                "Cost: 55 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Divination use this to manipulate offense.",
            "evolution": "Potential evolution: Perfect Judgment"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 71,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_070",
        "name": "Rahu's Shadow",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "SILENCE"
        ],
        "stats": {
            "cooldown": 2,
            "cost": 40,
            "damage": 50
        },
        "description": "** Apply [Silence] to all enemies for 2 turns. They cannot use abilities.\r\n    * **Evo A (Extended Shadow):** 3 turns.\r\n    * **Evo B (Perfect Shadow):** Also drain 15 resources from each.\r\n    * **Note:** *Mass lockdown. Ultimate control.*",
        "lore_quote": "** *Mass lockdown. Ultimate control.*",
        "tactical_brief": "Utilizes Divination mechanics. Silence.",
        "mastery_perk": "Mastery Lvl 5: (Extended Shadow): 3 turns.\r\n    * Evo B (Perfect Shadow): Also drain 15 resources from each.\r\n    * Note: *Mass lockdown. Ultimate control.*",
        "gameplay_info": {
            "usage": [
                "Cost: 40 Gnosis",
                "Cooldown: 2 Turns"
            ],
            "features": [
                "Silence"
            ]
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Divination use this to manipulate offense.",
            "evolution": "Potential evolution: Perfect Shadow"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 50,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_071",
        "name": "Ketu's Insight",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 50,
            "damage": 50
        },
        "description": "** Reveal all future events for next 3 turns (draws, random effects, enemy actions).\r\n    * **Evo A (Extended Insight):** 5 turns.\r\n    * **Evo B (Perfect Insight):** Can change 1 revealed outcome per turn.\r\n    * **Note:** *Perfect foresight. Strategic planning.*",
        "lore_quote": "** *Perfect foresight. Strategic planning.*",
        "tactical_brief": "Utilizes Divination mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Extended Insight): 5 turns.\r\n    * Evo B (Perfect Insight): Can change 1 revealed outcome per turn.\r\n    * Note: *Perfect foresight. Strategic planning.*",
        "gameplay_info": {
            "usage": [
                "Cost: 50 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Divination use this to manipulate offense.",
            "evolution": "Potential evolution: Perfect Insight"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 50,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_072",
        "name": "Retrograde Curse",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [],
        "stats": {
            "cooldown": 4,
            "cost": 60,
            "damage": 72
        },
        "description": "** All enemy buffs become debuffs for 3 turns. All their debuffs become buffs.\r\n    * **Evo A (Extended Curse):** Duration 4 turns.\r\n    * **Evo B (Perfect Curse):** Reversed effects have +50% potency.\r\n    * **Note:** *Inversion field. Turn power against them.*",
        "lore_quote": "** *Inversion field. Turn power against them.*",
        "tactical_brief": "Utilizes Divination mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Extended Curse): Duration 4 turns.\r\n    * Evo B (Perfect Curse): Reversed effects have +50% potency.\r\n    * Note: *Inversion field. Turn power against them.*",
        "gameplay_info": {
            "usage": [
                "Cost: 60 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Divination use this to manipulate offense.",
            "evolution": "Potential evolution: Perfect Curse"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 72,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_073",
        "name": "Cosmic Storm",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [],
        "stats": {
            "cooldown": 4,
            "cost": 65,
            "damage": 73
        },
        "description": "** Random planetary effect triggers each turn for 5 turns (ally and enemy effects).\r\n    * **Evo A (Controlled Storm):** Only beneficial effects for you, harmful for enemy.\r\n    * **Evo B (Perfect Storm):** Effects doubled in potency.\r\n    * **Note:** *Chaos field. High variance.*",
        "lore_quote": "** *Chaos field. High variance.*",
        "tactical_brief": "Utilizes Divination mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Controlled Storm): Only beneficial effects for you, harmful for enemy.\r\n    * Evo B (Perfect Storm): Effects doubled in potency.\r\n    * Note: *Chaos field. High variance.*",
        "gameplay_info": {
            "usage": [
                "Cost: 65 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with support, offense.",
            "narrative": "Practitioners of Divination use this to manipulate support.",
            "evolution": "Potential evolution: Perfect Storm"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 73,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_074",
        "name": "Zodiac Wheel",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 55,
            "damage": 71
        },
        "description": "** Each turn, rotate through 12 zodiac effects (damage, healing, control, etc.). Effects stack if wheel completes.\r\n    * **Evo A (Rapid Wheel):** Rotates 2 signs per turn.\r\n    * **Evo B (Perfect Wheel):** Completed wheel grants permanent +20% all effects.\r\n    * **Note:** *Long-term scaling. Patience reward.*",
        "lore_quote": "** *Long-term scaling. Patience reward.*",
        "tactical_brief": "Utilizes Divination mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Rapid Wheel): Rotates 2 signs per turn.\r\n    * Evo B (Perfect Wheel): Completed wheel grants permanent +20% all effects.\r\n    * Note: *Long-term scaling. Patience reward.*",
        "gameplay_info": {
            "usage": [
                "Cost: 55 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with offense, healing.",
            "narrative": "Practitioners of Divination use this to manipulate offense.",
            "evolution": "Potential evolution: Perfect Wheel"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 71,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_075",
        "name": "Grand Conjunction",
        "type": "ACTIVE",
        "tier": "LEGENDARY",
        "tags": [],
        "stats": {
            "cooldown": 5,
            "cost": 80,
            "damage": 96
        },
        "description": "** Once per duel: All planetary effects trigger simultaneously for 1 turn (massive mixed effects). Costs 50 Drishti.\r\n    * **Evo A (Extended Conjunction):** Lasts 2 turns.\r\n    * **Evo B (Perfect Conjunction):** Effects tripled in potency.\r\n    * **Note:** *Ultimate chaos power. Decisive moment.*\r\n\r\n---\r\n\r\n### **DIVINATION SPECIALIZATIONS — 15 Skills**",
        "lore_quote": "** *Ultimate chaos power. Decisive moment.*\r\n\r\n---\r\n\r\n### **DIVINATION SPECIALIZATIONS — 15 Skills**",
        "tactical_brief": "Utilizes Divination mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Extended Conjunction): Lasts 2 turns.\r\n    * Evo B (Perfect Conjunction): Effects tripled in potency.\r\n    * Note: *Ultimate chaos power. Decisive moment.*\r\n\r\n---\r\n\r\n### DIVINATION SPECIALIZATIONS — 15 Skills",
        "gameplay_info": {
            "usage": [
                "Cost: 80 Gnosis",
                "Cooldown: 5 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Divination use this to manipulate undefined.",
            "evolution": "Potential evolution: Perfect Conjunction"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 96,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_076",
        "name": "Fate Specialist",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "SUTRA",
            "SUTRA"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 50,
            "damage": 54
        },
        "description": "** Cannot use Temporal or Celestial paths. All fate manipulation effects +100%. Can have 5 active [Sutra].\r\n    * **Evo A (Perfect Fate):** +150% effects.\r\n    * **Evo B (Master Fate):** Can have 7 [Sutra].\r\n    * **Note:** *Pure fate manipulation. Destiny master.*",
        "lore_quote": "** *Pure fate manipulation. Destiny master.*",
        "tactical_brief": "Utilizes Divination mechanics. Sutra, Sutra.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Fate): +150% effects.\r\n    * Evo B (Master Fate): Can have 7 [Sutra].\r\n    * Note: *Pure fate manipulation. Destiny master.*",
        "gameplay_info": {
            "usage": [
                "Cost: 50 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Sutra",
                "Sutra"
            ]
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Divination use this to manipulate undefined.",
            "evolution": "Potential evolution: Master Fate"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 54,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_077",
        "name": "Time Specialist",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "KSHANA",
            "KSHANA"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 50,
            "damage": 54
        },
        "description": "** Cannot use Fate or Celestial paths. All temporal effects +100%. Start with 7 [Kshana].\r\n    * **Evo A (Perfect Time):** +150% effects.\r\n    * **Evo B (Master Time):** Max [Kshana] capacity +5.\r\n    * **Note:** *Pure temporal control. Time lord.*",
        "lore_quote": "** *Pure temporal control. Time lord.*",
        "tactical_brief": "Utilizes Divination mechanics. Kshana, Kshana.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Time): +150% effects.\r\n    * Evo B (Master Time): Max [Kshana] capacity +5.\r\n    * Note: *Pure temporal control. Time lord.*",
        "gameplay_info": {
            "usage": [
                "Cost: 50 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Kshana",
                "Kshana"
            ]
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Divination use this to manipulate undefined.",
            "evolution": "Potential evolution: Master Time"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 54,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_078",
        "name": "Knowledge Specialist",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "DARSHAN",
            "DARSHAN",
            "DARSHAN"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 50,
            "damage": 56
        },
        "description": "** Cannot use other paths. All [Darshan] effects +100%. Start with 15 [Darshan], no cap.\r\n    * **Evo A (Perfect Knowledge):** +150% effects.\r\n    * **Evo B (Infinite Knowledge):** Gain +3 [Darshan] per turn automatically.\r\n    * **Note:** *Pure information warfare. Omniscient.*",
        "lore_quote": "** *Pure information warfare. Omniscient.*",
        "tactical_brief": "Utilizes Divination mechanics. Darshan, Darshan, Darshan.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Knowledge): +150% effects.\r\n    * Evo B (Infinite Knowledge): Gain +3 [Darshan] per turn automatically.\r\n    * Note: *Pure information warfare. Omniscient.*",
        "gameplay_info": {
            "usage": [
                "Cost: 50 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Darshan",
                "Darshan",
                "Darshan"
            ]
        },
        "deep_data": {
            "environment": "Resonates with support.",
            "narrative": "Practitioners of Divination use this to manipulate support.",
            "evolution": "Potential evolution: Infinite Knowledge"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 56,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_079",
        "name": "Celestial Specialist",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 50,
            "damage": 50
        },
        "description": "** Cannot use other paths. All planetary effects +100%. Can trigger 2 planetary effects per turn.\r\n    * **Evo A (Perfect Celestial):** +150% effects.\r\n    * **Evo B (Master Celestial):** Trigger 3 effects per turn.\r\n    * **Note:** *Pure cosmic power. Astrology master.*",
        "lore_quote": "** *Pure cosmic power. Astrology master.*",
        "tactical_brief": "Utilizes Divination mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Celestial): +150% effects.\r\n    * Evo B (Master Celestial): Trigger 3 effects per turn.\r\n    * Note: *Pure cosmic power. Astrology master.*",
        "gameplay_info": {
            "usage": [
                "Cost: 50 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Divination use this to manipulate undefined.",
            "evolution": "Potential evolution: Master Celestial"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 50,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_080",
        "name": "Hybrid Prophet",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 55,
            "damage": 71
        },
        "description": "** Choose 2 Divination paths. Can only use those 2, but all costs -30%.\r\n    * **Evo A (Perfect Hybrid):** Cost -50%.\r\n    * **Evo B (Enhanced Hybrid):** Chosen paths have +30% effects.\r\n    * **Note:** *Two-path master. Focused power.*",
        "lore_quote": "** *Two-path master. Focused power.*",
        "tactical_brief": "Utilizes Divination mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Hybrid): Cost -50%.\r\n    * Evo B (Enhanced Hybrid): Chosen paths have +30% effects.\r\n    * Note: *Two-path master. Focused power.*",
        "gameplay_info": {
            "usage": [
                "Cost: 55 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Divination use this to manipulate undefined.",
            "evolution": "Potential evolution: Enhanced Hybrid"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 71,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_081",
        "name": "Chaos Seer",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [
            "DARSHAN",
            "DARSHAN"
        ],
        "stats": {
            "cooldown": 4,
            "cost": 60,
            "damage": 76
        },
        "description": "** Must use different Divination path each turn. Doing so grants +10 Drishti and +2 [Darshan].\r\n    * **Evo A (Perfect Chaos):** +15 Drishti and +3 [Darshan].\r\n    * **Evo B (Rewarding Chaos):** Also deal 15 damage to random enemy.\r\n    * **Note:** *Versatility reward. Anti-specialist.*",
        "lore_quote": "** *Versatility reward. Anti-specialist.*",
        "tactical_brief": "Utilizes Divination mechanics. Darshan, Darshan.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Chaos): +15 Drishti and +3 [Darshan].\r\n    * Evo B (Rewarding Chaos): Also deal 15 damage to random enemy.\r\n    * Note: *Versatility reward. Anti-specialist.*",
        "gameplay_info": {
            "usage": [
                "Cost: 60 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": [
                "Darshan",
                "Darshan"
            ]
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Divination use this to manipulate offense.",
            "evolution": "Potential evolution: Rewarding Chaos"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 76,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_082",
        "name": "Resource Converter",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [
            "DARSHAN",
            "KSHANA"
        ],
        "stats": {
            "cooldown": 3,
            "cost": 45,
            "damage": 53
        },
        "description": "** Can freely convert between Drishti, [Darshan], and [Kshana] at 2:1 ratio.\r\n    * **Evo A (Efficient Converter):** 1:1 ratio.\r\n    * **Evo B (Perfect Converter):** Also gain +10% bonus on conversion.\r\n    * **Note:** *Ultimate flexibility. Resource mastery.*",
        "lore_quote": "** *Ultimate flexibility. Resource mastery.*",
        "tactical_brief": "Utilizes Divination mechanics. Darshan, Kshana.",
        "mastery_perk": "Mastery Lvl 5: (Efficient Converter): 1:1 ratio.\r\n    * Evo B (Perfect Converter): Also gain +10% bonus on conversion.\r\n    * Note: *Ultimate flexibility. Resource mastery.*",
        "gameplay_info": {
            "usage": [
                "Cost: 45 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": [
                "Darshan",
                "Kshana"
            ]
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Divination use this to manipulate undefined.",
            "evolution": "Potential evolution: Perfect Converter"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 53,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_083",
        "name": "Vision Amplifier",
        "type": "ACTIVE",
        "tier": "UNCOMMON",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 50,
            "damage": 50
        },
        "description": "** Passive: For each revealed enemy secret, gain +5% all Divination effects (stacks infinitely).\r\n    * **Evo A (Perfect Amplifier):** +8% per secret.\r\n    * **Evo B (Enhanced Amplifier):** Also gain +5 Drishti per secret.\r\n    * **Note:** *Information as power. Scaling engine.*",
        "lore_quote": "** *Information as power. Scaling engine.*",
        "tactical_brief": "Utilizes Divination mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Amplifier): +8% per secret.\r\n    * Evo B (Enhanced Amplifier): Also gain +5 Drishti per secret.\r\n    * Note: *Information as power. Scaling engine.*",
        "gameplay_info": {
            "usage": [
                "Cost: 50 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Divination use this to manipulate offense.",
            "evolution": "Potential evolution: Enhanced Amplifier"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 50,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_084",
        "name": "Predictive Defense",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 55,
            "damage": 71
        },
        "description": "** When you successfully predict enemy action, gain 30 Shield and counter for half their damage.\r\n    * **Evo A (Perfect Defense):** 50 Shield and full counter.\r\n    * **Evo B (Lasting Defense):** Shield lasts 2 turns.\r\n    * **Note:** *Reward prediction skill. Defensive offense.*",
        "lore_quote": "** *Reward prediction skill. Defensive offense.*",
        "tactical_brief": "Utilizes Divination mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Defense): 50 Shield and full counter.\r\n    * Evo B (Lasting Defense): Shield lasts 2 turns.\r\n    * Note: *Reward prediction skill. Defensive offense.*",
        "gameplay_info": {
            "usage": [
                "Cost: 55 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Divination use this to manipulate offense.",
            "evolution": "Potential evolution: Lasting Defense"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 71,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_085",
        "name": "Inevitable Fate",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [],
        "stats": {
            "cooldown": 4,
            "cost": 65,
            "damage": 73
        },
        "description": "** Choose one outcome this turn. It will happen regardless of probability (within game rules).\r\n    * **Evo A (Extended Fate):** Can guarantee 2 outcomes.\r\n    * **Evo B (Perfect Fate):** Chosen outcome also has +100% potency.\r\n    * **Note:** *Cheat probability. Perfect control.*",
        "lore_quote": "** *Cheat probability. Perfect control.*",
        "tactical_brief": "Utilizes Divination mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Extended Fate): Can guarantee 2 outcomes.\r\n    * Evo B (Perfect Fate): Chosen outcome also has +100% potency.\r\n    * Note: *Cheat probability. Perfect control.*",
        "gameplay_info": {
            "usage": [
                "Cost: 65 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Divination use this to manipulate undefined.",
            "evolution": "Potential evolution: Perfect Fate"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 73,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_086",
        "name": "Oracle's Burden",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [],
        "stats": {
            "cooldown": 4,
            "cost": 60,
            "damage": 72
        },
        "description": "** Reveal your next 3 actions to enemy. If you execute them perfectly, gain +100% effects. If you deviate, lose 30 Ojas.\r\n    * **Evo A (Safe Burden):** No penalty for deviation.\r\n    * **Evo B (Perfect Burden):** +150% effects if successful.\r\n    * **Note:** *High skill ceiling. Commitment reward.*",
        "lore_quote": "** *High skill ceiling. Commitment reward.*",
        "tactical_brief": "Utilizes Divination mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Safe Burden): No penalty for deviation.\r\n    * Evo B (Perfect Burden): +150% effects if successful.\r\n    * Note: *High skill ceiling. Commitment reward.*",
        "gameplay_info": {
            "usage": [
                "Cost: 60 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Divination use this to manipulate offense.",
            "evolution": "Potential evolution: Perfect Burden"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 72,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_087",
        "name": "Temporal Recursion",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [],
        "stats": {
            "cooldown": 4,
            "cost": 70,
            "damage": 74
        },
        "description": "** Every 5 turns, repeat all actions from 5 turns ago automatically (free).\r\n    * **Evo A (Rapid Recursion):** Every 4 turns.\r\n    * **Evo B (Perfect Recursion):** Repeated actions have +50% potency.\r\n    * **Note:** *Self-combo machine. Planning reward.*",
        "lore_quote": "** *Self-combo machine. Planning reward.*",
        "tactical_brief": "Utilizes Divination mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Rapid Recursion): Every 4 turns.\r\n    * Evo B (Perfect Recursion): Repeated actions have +50% potency.\r\n    * Note: *Self-combo machine. Planning reward.*",
        "gameplay_info": {
            "usage": [
                "Cost: 70 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with support.",
            "narrative": "Practitioners of Divination use this to manipulate support.",
            "evolution": "Potential evolution: Perfect Recursion"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 74,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_088",
        "name": "Fate Cascade",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [],
        "stats": {
            "cooldown": 4,
            "cost": 65,
            "damage": 73
        },
        "description": "** When you successfully manipulate fate, 50% chance to manipulate another fate automatically (chain triggers).\r\n    * **Evo A (Perfect Cascade):** 75% chance.\r\n    * **Evo B (Guaranteed Cascade):** Always chains but second effect at 75% potency.\r\n    * **Note:** *Chain reaction fate manipulation.*",
        "lore_quote": "** *Chain reaction fate manipulation.*",
        "tactical_brief": "Utilizes Divination mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Cascade): 75% chance.\r\n    * Evo B (Guaranteed Cascade): Always chains but second effect at 75% potency.\r\n    * Note: *Chain reaction fate manipulation.*",
        "gameplay_info": {
            "usage": [
                "Cost: 65 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with support.",
            "narrative": "Practitioners of Divination use this to manipulate support.",
            "evolution": "Potential evolution: Guaranteed Cascade"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 73,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_089",
        "name": "Omnipotent Vision",
        "type": "ACTIVE",
        "tier": "LEGENDARY",
        "tags": [],
        "stats": {
            "cooldown": 5,
            "cost": 80,
            "damage": 96
        },
        "description": "** Passive: See entire duel timeline. All hidden information revealed permanently. Immune to surprises.\r\n    * **Evo A (Perfect Vision):** Also gain +25% all effects.\r\n    * **Evo B (Shared Vision):** All allies gain vision benefits.\r\n    * **Note:** *God-tier information. Ultimate awareness.*",
        "lore_quote": "** *God-tier information. Ultimate awareness.*",
        "tactical_brief": "Utilizes Divination mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Vision): Also gain +25% all effects.\r\n    * Evo B (Shared Vision): All allies gain vision benefits.\r\n    * Note: *God-tier information. Ultimate awareness.*",
        "gameplay_info": {
            "usage": [
                "Cost: 80 Gnosis",
                "Cooldown: 5 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with support.",
            "narrative": "Practitioners of Divination use this to manipulate support.",
            "evolution": "Potential evolution: Shared Vision"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 96,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_090",
        "name": "Master of Fate",
        "type": "ACTIVE",
        "tier": "LEGENDARY",
        "tags": [
            "SUTRA",
            "KSHANA",
            "DARSHAN"
        ],
        "stats": {
            "cooldown": 5,
            "cost": 85,
            "damage": 103
        },
        "description": "** Passive: All Divination paths cost -50%. Gain +1 [Sutra], +3 [Kshana], +10 [Darshan] per turn.\r\n    * **Evo A (Perfect Mastery):** Cost -75%.\r\n    * **Evo B (Enhanced Mastery):** Triple resource generation.\r\n    * **Note:** *Ultimate Divination specialist. God of fate.*\r\n\r\n---\r\n\r\n### **UNIQUE BUILD ENABLERS — 10 Skills**",
        "lore_quote": "** *Ultimate Divination specialist. God of fate.*\r\n\r\n---\r\n\r\n### **UNIQUE BUILD ENABLERS — 10 Skills**",
        "tactical_brief": "Utilizes Divination mechanics. Sutra, Kshana, Darshan.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Mastery): Cost -75%.\r\n    * Evo B (Enhanced Mastery): Triple resource generation.\r\n    * Note: *Ultimate Divination specialist. God of fate.*\r\n\r\n---\r\n\r\n### UNIQUE BUILD ENABLERS — 10 Skills",
        "gameplay_info": {
            "usage": [
                "Cost: 85 Gnosis",
                "Cooldown: 5 Turns"
            ],
            "features": [
                "Sutra",
                "Kshana",
                "Darshan"
            ]
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Divination use this to manipulate undefined.",
            "evolution": "Potential evolution: Enhanced Mastery"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 103,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_091",
        "name": "Glass Oracle",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [],
        "stats": {
            "cooldown": 4,
            "cost": 60,
            "damage": 72
        },
        "description": "** -50% max Ojas, but all Divination effects +150%.\r\n    * **Evo A (Perfect Glass):** +200% effects.\r\n    * **Evo B (Tolerable Glass):** Only -30% max Ojas.\r\n    * **Note:** *Extreme offense. Glass cannon seer.*",
        "lore_quote": "** *Extreme offense. Glass cannon seer.*",
        "tactical_brief": "Utilizes Divination mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Glass): +200% effects.\r\n    * Evo B (Tolerable Glass): Only -30% max Ojas.\r\n    * Note: *Extreme offense. Glass cannon seer.*",
        "gameplay_info": {
            "usage": [
                "Cost: 60 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Divination use this to manipulate undefined.",
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
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_092",
        "name": "Fortified Seer",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 55,
            "damage": 71
        },
        "description": "** +50% max Ojas, but all Divination effects -30%.\r\n    * **Evo A (Perfect Tank):** +75% max Ojas.\r\n    * **Evo B (Tolerable Tank):** Only -15% effect penalty.\r\n    * **Note:** *Defensive divination. Sustained foresight.*",
        "lore_quote": "** *Defensive divination. Sustained foresight.*",
        "tactical_brief": "Utilizes Divination mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Tank): +75% max Ojas.\r\n    * Evo B (Tolerable Tank): Only -15% effect penalty.\r\n    * Note: *Defensive divination. Sustained foresight.*",
        "gameplay_info": {
            "usage": [
                "Cost: 55 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Divination use this to manipulate undefined.",
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
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_093",
        "name": "Minimalist Seer",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 55,
            "damage": 71
        },
        "description": "** Can only use 5 Divination glyphs total, but they all cost -50% and have +50% effects.\r\n    * **Evo A (Perfect Minimalism):** +75% effects.\r\n    * **Evo B (Efficient Minimalism):** Cost -75%.\r\n    * **Note:** *Focused mastery. Simple power.*",
        "lore_quote": "** *Focused mastery. Simple power.*",
        "tactical_brief": "Utilizes Divination mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Minimalism): +75% effects.\r\n    * Evo B (Efficient Minimalism): Cost -75%.\r\n    * Note: *Focused mastery. Simple power.*",
        "gameplay_info": {
            "usage": [
                "Cost: 55 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Divination use this to manipulate undefined.",
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
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_094",
        "name": "Maximalist Prophet",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [],
        "stats": {
            "cooldown": 4,
            "cost": 70,
            "damage": 74
        },
        "description": "** Can use 20 Divination glyphs. For each over 10, gain +5% all effects.\r\n    * **Evo A (Perfect Maximalism):** +8% per glyph.\r\n    * **Evo B (Deep Maximalism):** Can use 25 glyphs.\r\n    * **Note:** *Infinite toolbox. Versatility master.*",
        "lore_quote": "** *Infinite toolbox. Versatility master.*",
        "tactical_brief": "Utilizes Divination mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Maximalism): +8% per glyph.\r\n    * Evo B (Deep Maximalism): Can use 25 glyphs.\r\n    * Note: *Infinite toolbox. Versatility master.*",
        "gameplay_info": {
            "usage": [
                "Cost: 70 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Divination use this to manipulate undefined.",
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
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_095",
        "name": "Solo Oracle",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [],
        "stats": {
            "cooldown": 3,
            "cost": 55,
            "damage": 71
        },
        "description": "** If no allies, all Divination effects +150%, immune to fate manipulation.\r\n    * **Evo A (Perfect Solo):** +200% effects.\r\n    * **Evo B (Enhanced Solo):** Also +50% max Drishti.\r\n    * **Note:** *Solo specialist. Independent power.*",
        "lore_quote": "** *Solo specialist. Independent power.*",
        "tactical_brief": "Utilizes Divination mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Solo): +200% effects.\r\n    * Evo B (Enhanced Solo): Also +50% max Drishti.\r\n    * Note: *Solo specialist. Independent power.*",
        "gameplay_info": {
            "usage": [
                "Cost: 55 Gnosis",
                "Cooldown: 3 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with support.",
            "narrative": "Practitioners of Divination use this to manipulate support.",
            "evolution": "Potential evolution: Enhanced Solo"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 71,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_096",
        "name": "Team Seer",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [
            "DARSHAN",
            "DARSHAN"
        ],
        "stats": {
            "cooldown": 4,
            "cost": 60,
            "damage": 76
        },
        "description": "** For each ally, gain +25% Divination effects and +10 [Darshan].\r\n    * **Evo A (Perfect Team):** +40% per ally.\r\n    * **Evo B (Deep Team):** +20 [Darshan] per ally.\r\n    * **Note:** *Team specialist. Collective power.*",
        "lore_quote": "** *Team specialist. Collective power.*",
        "tactical_brief": "Utilizes Divination mechanics. Darshan, Darshan.",
        "mastery_perk": "Mastery Lvl 5: (Perfect Team): +40% per ally.\r\n    * Evo B (Deep Team): +20 [Darshan] per ally.\r\n    * Note: *Team specialist. Collective power.*",
        "gameplay_info": {
            "usage": [
                "Cost: 60 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": [
                "Darshan",
                "Darshan"
            ]
        },
        "deep_data": {
            "environment": "Resonates with support.",
            "narrative": "Practitioners of Divination use this to manipulate support.",
            "evolution": "Potential evolution: Deep Team"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 76,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_097",
        "name": "Gambler's Fate",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [],
        "stats": {
            "cooldown": 4,
            "cost": 65,
            "damage": 73
        },
        "description": "** All Divination effects have random potency (50%-200%).\r\n    * **Evo A (Controlled Gamble):** Range 75%-200%.\r\n    * **Evo B (Perfect Gamble):** Range 100%-300%.\r\n    * **Note:** *High variance. Big swings.*",
        "lore_quote": "** *High variance. Big swings.*",
        "tactical_brief": "Utilizes Divination mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Controlled Gamble): Range 75%-200%.\r\n    * Evo B (Perfect Gamble): Range 100%-300%.\r\n    * Note: *High variance. Big swings.*",
        "gameplay_info": {
            "usage": [
                "Cost: 65 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Divination use this to manipulate undefined.",
            "evolution": "Potential evolution: Perfect Gamble"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 73,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_098",
        "name": "Perfect Prediction",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [],
        "stats": {
            "cooldown": 4,
            "cost": 60,
            "damage": 72
        },
        "description": "** All Divination effects have exactly listed potency—no variance.\r\n    * **Evo A (Enhanced Prediction):** All effects +20% base.\r\n    * **Evo B (Stable Prediction):** Immune to anti-Divination.\r\n    * **Note:** *Reliable power. No surprises.*",
        "lore_quote": "** *Reliable power. No surprises.*",
        "tactical_brief": "Utilizes Divination mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Enhanced Prediction): All effects +20% base.\r\n    * Evo B (Stable Prediction): Immune to anti-Divination.\r\n    * Note: *Reliable power. No surprises.*",
        "gameplay_info": {
            "usage": [
                "Cost: 60 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Divination use this to manipulate undefined.",
            "evolution": "Potential evolution: Stable Prediction"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 72,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_099",
        "name": "Reactive Seer",
        "type": "ACTIVE",
        "tier": "RARE",
        "tags": [],
        "stats": {
            "cooldown": 4,
            "cost": 65,
            "damage": 73
        },
        "description": "** After enemy action, can immediately use Divination ability as reaction (costs +50% resources).\r\n    * **Evo A (Efficient Reactive):** Only +25% cost.\r\n    * **Evo B (Perfect Reactive):** Reactive abilities have +50% potency.\r\n    * **Note:** *Instant speed. Interrupt mastery.*",
        "lore_quote": "** *Instant speed. Interrupt mastery.*",
        "tactical_brief": "Utilizes Divination mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Efficient Reactive): Only +25% cost.\r\n    * Evo B (Perfect Reactive): Reactive abilities have +50% potency.\r\n    * Note: *Instant speed. Interrupt mastery.*",
        "gameplay_info": {
            "usage": [
                "Cost: 65 Gnosis",
                "Cooldown: 4 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with offense.",
            "narrative": "Practitioners of Divination use this to manipulate offense.",
            "evolution": "Potential evolution: Perfect Reactive"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 73,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    },
    {
        "id": "skill_divination_100",
        "name": "Prophecy Eternal",
        "type": "ACTIVE",
        "tier": "LEGENDARY",
        "tags": [],
        "stats": {
            "cooldown": 6,
            "cost": 90,
            "damage": 98
        },
        "description": "** Passive: All your predictions/prophecies cannot be prevented. Fate you declare becomes absolute.\r\n     * **Evo A (Perfect Prophecy):** Declared fates trigger 1 turn earlier.\r\n     * **Evo B (Enhanced Prophecy):** Declared effects also +50% potency.\r\n     * **Note:** *Ultimate fate power. Reality control.*\r\n\r\n---",
        "lore_quote": "** *Ultimate fate power. Reality control.*\r\n\r\n---",
        "tactical_brief": "Utilizes Divination mechanics. .",
        "mastery_perk": "Mastery Lvl 5: (Perfect Prophecy): Declared fates trigger 1 turn earlier.\r\n     * Evo B (Enhanced Prophecy): Declared effects also +50% potency.\r\n     * Note: *Ultimate fate power. Reality control.*\r\n\r\n---",
        "gameplay_info": {
            "usage": [
                "Cost: 90 Gnosis",
                "Cooldown: 6 Turns"
            ],
            "features": []
        },
        "deep_data": {
            "environment": "Resonates with .",
            "narrative": "Practitioners of Divination use this to manipulate undefined.",
            "evolution": "Potential evolution: Enhanced Prophecy"
        },
        "effects": [
            {
                "type": "DAMAGE",
                "value": 98,
                "target": "SINGLE"
            }
        ],
        "narrative_triggers": {
            "on_cast": "You channel the power of Divination.",
            "on_hit": "The energy connects with the target.",
            "environment": "RESONANCE"
        },
        "_engine": "Divination"
    }
];
