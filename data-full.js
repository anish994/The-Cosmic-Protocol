// === 8 MAIN ENGINES ===
const ENGINES = [
    { id: "foundational", name: "Foundational", icon: "🏛️", color: "#8B7355" },
    { id: "character_analysis", name: "Character Analysis", icon: "🎭", color: "#9370DB" },
    { id: "consciousness", name: "Consciousness", icon: "👁️", color: "#00CED1" },
    { id: "divination", name: "Divination", icon: "🔮", color: "#9400D3" },
    { id: "singularity", name: "Singularity", icon: "⚡", color: "#FF6B6B" },
    { id: "tantra", name: "Tantra", icon: "🕉️", color: "#FF8C00" },
    { id: "therapeutic", name: "Therapeutic", icon: "🌿", color: "#32CD32" },
    { id: "invocation", name: "Invocation", icon: "✨", color: "#FFD700" }
];

// All 1037 skills from complete database
const SAMPLE_SKILLS = [
  {
    "id": "SKILL_FOUNDATIONAL_001",
    "name": "Basic Scaffold",
    "engine": "foundational",
    "category": "Foundation",
    "tier": 0,
    "cost": {
      "kp": 1
    },
    "cooldown": 0,
    "unlocked": true,
    "description": "** Deploy a [Structure] that lasts 3 turns. Allies within 3x3 area gain +10% effect on their next glyph.\r\n    * **Evo A (Reinforced Scaffold):** Duration 4 turns.\r\n    * **Evo B (Expanded Scaffold):**",
    "effects": [
      "Deploy a [Structure] that lasts 3 turns. Allies within 3x3 area gain +10% effect on their next glyph."
    ],
    "keywords": [
      "Structure"
    ],
    "powerScore": 4
  },
  {
    "id": "SKILL_FOUNDATIONAL_002",
    "name": "Load-Bearing Pillar",
    "engine": "foundational",
    "category": "Core Structure",
    "tier": 1,
    "cost": {
      "kp": 2
    },
    "cooldown": 1,
    "unlocked": true,
    "description": "** Deploy a [Structure] (4 turns). Amplifies incoming [Field] effects by +50% in its area.\r\n    * **Evo A (Perfect Pillar):** +75% amplification instead.\r\n    * **Evo B (Fortified Pillar):** Has 30 Oj",
    "effects": [
      "Deploy a [Structure] (4 turns). Amplifies incoming [Field] effects by +50% in its area."
    ],
    "keywords": [
      "Structure",
      "Field"
    ],
    "powerScore": 29
  },
  {
    "id": "SKILL_FOUNDATIONAL_003",
    "name": "Foundation Network",
    "engine": "foundational",
    "category": "Multi-Structure",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Deploy 3 small [Structures] simultaneously. Each lasts 2 turns and grants +5% to one stat (damage/healing/shield).\r\n    * **Evo A (Expanded Network):** Deploy 5 structures.\r\n    * **Evo B (Sustaine",
    "effects": [
      "Deploy 3 small [Structures] simultaneously. Each lasts 2 turns and grants +5% to one stat (damage/healing/shield)."
    ],
    "keywords": [
      "Structures"
    ],
    "powerScore": 49
  },
  {
    "id": "SKILL_FOUNDATIONAL_004",
    "name": "Anchor Point",
    "engine": "foundational",
    "category": "Persistent Structure",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Deploy a [Structure] that lasts until destroyed. When allies pass through it, refresh 1 random cooldown.\r\n    * **Evo A (Perfect Anchor):** Refresh 2 cooldowns instead.\r\n    * **Evo B (Fortified An",
    "effects": [
      "Deploy a [Structure] that lasts until destroyed. When allies pass through it, refresh 1 random cooldown."
    ],
    "keywords": [
      "Structure"
    ],
    "powerScore": 50
  },
  {
    "id": "SKILL_FOUNDATIONAL_005",
    "name": "Structural Resonance",
    "engine": "foundational",
    "category": "Synergy",
    "tier": 1,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** For each active [Structure] you control, gain +2 Bandwidth per turn.\r\n    * **Evo A (Perfect Resonance):** +3 Bandwidth per structure.\r\n    * **Evo B (Deep Resonance):** Also gain +1 KP per turn.",
    "effects": [
      "For each active [Structure] you control, gain +2 Bandwidth per turn."
    ],
    "keywords": [
      "Structure"
    ],
    "powerScore": 28
  },
  {
    "id": "SKILL_FOUNDATIONAL_006",
    "name": "Reinforced Architecture",
    "engine": "foundational",
    "category": "Defensive",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** All your [Structures] gain +20 Ojas. When a structure is destroyed, grant all allies 15 Shield.\r\n    * **Evo A (Perfect Architecture):** Structures gain +35 Ojas.\r\n    * **Evo B (Reactive Architect",
    "effects": [
      "All your [Structures] gain +20 Ojas. When a structure is destroyed, grant all allies 15 Shield."
    ],
    "keywords": [
      "Structures"
    ],
    "powerScore": 49
  },
  {
    "id": "SKILL_FOUNDATIONAL_007",
    "name": "Lattice Matrix",
    "engine": "foundational",
    "category": "Network Bonus",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** If you control 3+ [Structures], all allies gain +15% all effects.\r\n    * **Evo A (Perfect Lattice):** +25% all effects.\r\n    * **Evo B (Extended Lattice):** Only requires 2 structures.",
    "effects": [
      "If you control 3+ [Structures], all allies gain +15% all effects."
    ],
    "keywords": [
      "Structures"
    ],
    "powerScore": 51
  },
  {
    "id": "SKILL_FOUNDATIONAL_008",
    "name": "Structural Collapse",
    "engine": "foundational",
    "category": "Sacrifice",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Destroy all your [Structures]. For each destroyed, deal 20 damage to all enemies and grant allies 10 Shield.\r\n    * **Evo A (Perfect Collapse):** Damage increased to 30.\r\n    * **Evo B (Controlled ",
    "effects": [
      "Destroy all your [Structures]. For each destroyed, deal 20 damage to all enemies and grant allies 10 Shield."
    ],
    "keywords": [
      "Structures"
    ],
    "powerScore": 50
  },
  {
    "id": "SKILL_FOUNDATIONAL_009",
    "name": "Mobile Foundation",
    "engine": "foundational",
    "category": "Tactical",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Move a [Structure] to a new location. Allies at old and new locations gain 15 Shield.\r\n    * **Evo A (Perfect Mobility):** Shield increased to 25.\r\n    * **Evo B (Chain Movement):** Can move 2 stru",
    "effects": [
      "Move a [Structure] to a new location. Allies at old and new locations gain 15 Shield."
    ],
    "keywords": [
      "Structure"
    ],
    "powerScore": 52
  },
  {
    "id": "SKILL_FOUNDATIONAL_010",
    "name": "Eternal Foundation",
    "engine": "foundational",
    "category": "Ultimate",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Deploy a [Structure] that is immune to destruction for 3 turns. Grants all allies +20% max Ojas while active.\r\n    * **Evo A (Extended Eternity):** Duration 4 turns.\r\n    * **Evo B (Perfect Foundat",
    "effects": [
      "Deploy a [Structure] that is immune to destruction for 3 turns. Grants all allies +20% max Ojas while active."
    ],
    "keywords": [
      "Structure"
    ],
    "powerScore": 74
  },
  {
    "id": "SKILL_FOUNDATIONAL_011",
    "name": "Blueprint Cache",
    "engine": "foundational",
    "category": "Economy",
    "tier": 1,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Store 1 [Structure] in reserve. Can deploy it instantly for -50% cost. Max 2 stored.\r\n    * **Evo A (Deep Cache):** Max 3 stored.\r\n    * **Evo B (Perfect Storage):** Deployment cost -75%.",
    "effects": [
      "Store 1 [Structure] in reserve. Can deploy it instantly for -50% cost. Max 2 stored."
    ],
    "keywords": [
      "Structure"
    ],
    "powerScore": 28
  },
  {
    "id": "SKILL_FOUNDATIONAL_012",
    "name": "Structural Echo",
    "engine": "foundational",
    "category": "Duplication",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** When you deploy a [Structure], 50% chance to create a weaker copy (50% potency) adjacent to it.\r\n    * **Evo A (Perfect Echo):** Copy has 75% potency.\r\n    * **Evo B (Guaranteed Echo):** 100% chanc",
    "effects": [
      "When you deploy a [Structure], 50% chance to create a weaker copy (50% potency) adjacent to it."
    ],
    "keywords": [
      "Structure"
    ],
    "powerScore": 73
  },
  {
    "id": "SKILL_FOUNDATIONAL_013",
    "name": "Foundation Weaver",
    "engine": "foundational",
    "category": "Passive",
    "tier": 1,
    "cost": {
      "kp": 2
    },
    "cooldown": 1,
    "unlocked": true,
    "description": "** Passive: Gain +1 Bandwidth per turn for each active [Structure].\r\n    * **Evo A (Perfect Weaver):** +2 Bandwidth per structure.\r\n    * **Evo B (Deep Weaver):** Also gain +1 KP per structure.",
    "effects": [
      "Passive: Gain +1 Bandwidth per turn for each active [Structure]."
    ],
    "keywords": [
      "Structure"
    ],
    "powerScore": 27
  },
  {
    "id": "SKILL_FOUNDATIONAL_014",
    "name": "Structural Metamorphosis",
    "engine": "foundational",
    "category": "Evolution",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Transform a [Structure] into a different type with upgraded effects. Costs 10 Bandwidth.\r\n    * **Evo A (Efficient Transform):** Cost reduced to 7 Bandwidth.\r\n    * **Evo B (Perfect Evolution):** N",
    "effects": [
      "Transform a [Structure] into a different type with upgraded effects. Costs 10 Bandwidth."
    ],
    "keywords": [
      "Structure"
    ],
    "powerScore": 52
  },
  {
    "id": "SKILL_FOUNDATIONAL_015",
    "name": "Cascade Architecture",
    "engine": "foundational",
    "category": "Chain",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** When a [Structure] expires naturally (not destroyed), deploy a weaker version (60% potency, 2 turns) at the same location.\r\n    * **Evo A (Perfect Cascade):** 80% potency instead.\r\n    * **Evo B (E",
    "effects": [
      "When a [Structure] expires naturally (not destroyed), deploy a weaker version (60% potency, 2 turns) at the same location."
    ],
    "keywords": [
      "Structure"
    ],
    "powerScore": 51
  },
  {
    "id": "SKILL_FOUNDATIONAL_016",
    "name": "Fortress Protocol",
    "engine": "foundational",
    "category": "Defense",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** For 2 turns, all your [Structures] become indestructible and grant allies inside immunity to [Stun] and [Silence].\r\n    * **Evo A (Extended Fortress):** Duration 3 turns.\r\n    * **Evo B (Perfect Im",
    "effects": [
      "For 2 turns, all your [Structures] become indestructible and grant allies inside immunity to [Stun] and [Silence]."
    ],
    "keywords": [
      "Structures",
      "Stun",
      "Silence",
      "Vulnerable"
    ],
    "powerScore": 80
  },
  {
    "id": "SKILL_FOUNDATIONAL_017",
    "name": "Structural Harvest",
    "engine": "foundational",
    "category": "Resource",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Destroy a [Structure] to gain: +15 Bandwidth, +3 KP, [Heal] 20 Ojas.\r\n    * **Evo A (Perfect Harvest):** +25 Bandwidth, +5 KP, [Heal] 35.\r\n    * **Evo B (Multi-Harvest):** Can harvest 2 structures.",
    "effects": [
      "Destroy a [Structure] to gain: +15 Bandwidth, +3 KP, [Heal] 20 Ojas."
    ],
    "keywords": [
      "Structure",
      "Heal",
      "Heal"
    ],
    "powerScore": 54
  },
  {
    "id": "SKILL_FOUNDATIONAL_018",
    "name": "Adaptive Blueprint",
    "engine": "foundational",
    "category": "Flexibility",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Your [Structures] automatically change bonus types based on situation (damage when allies attack, healing when damaged, etc.).\r\n    * **Evo A (Perfect Adaptation):** Bonuses +50% stronger.\r\n    * *",
    "effects": [
      "Your [Structures] automatically change bonus types based on situation (damage when allies attack, healing when damaged, etc.)."
    ],
    "keywords": [
      "Structures"
    ],
    "powerScore": 52
  },
  {
    "id": "SKILL_FOUNDATIONAL_019",
    "name": "Foundation Overload",
    "engine": "foundational",
    "category": "Burst",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** For 2 turns, [Structures] provide double bonuses but have -1 turn duration.\r\n    * **Evo A (Perfect Overload):** Triple bonuses instead of double.\r\n    * **Evo B (Sustained Overload):** No duration",
    "effects": [
      "For 2 turns, [Structures] provide double bonuses but have -1 turn duration."
    ],
    "keywords": [
      "Structures"
    ],
    "powerScore": 73
  },
  {
    "id": "SKILL_FOUNDATIONAL_020",
    "name": "Master Architect",
    "engine": "foundational",
    "category": "Ultimate Passive",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Passive: [Structures] cost -2 KP and last +1 turn. Can control 2 additional structures beyond normal limit.\r\n    * **Evo A (Perfect Mastery):** Cost -3 KP and last +2 turns.\r\n    * **Evo B (Deep Ma",
    "effects": [
      "Passive: [Structures] cost -2 KP and last +1 turn. Can control 2 additional structures beyond normal limit."
    ],
    "keywords": [
      "Structures"
    ],
    "powerScore": 76
  },
  {
    "id": "SKILL_FOUNDATIONAL_021",
    "name": "Basic Support",
    "engine": "foundational",
    "category": "Foundation",
    "tier": 0,
    "cost": {
      "kp": 1
    },
    "cooldown": 0,
    "unlocked": true,
    "description": "** [Support] target ally with +15% damage on their next action.\r\n    * **Evo A (Enhanced Support):** +25% damage instead.\r\n    * **Evo B (Multi-Support):** Affects 2 allies.",
    "effects": [
      "[Support] target ally with +15% damage on their next action."
    ],
    "keywords": [
      "Support"
    ],
    "powerScore": 4
  },
  {
    "id": "SKILL_FOUNDATIONAL_022",
    "name": "Resource Infusion",
    "engine": "foundational",
    "category": "Economy Support",
    "tier": 1,
    "cost": {
      "kp": 1
    },
    "cooldown": 1,
    "unlocked": true,
    "description": "** [Support] ally by granting them +3 KP and +10 Bandwidth immediately.\r\n    * **Evo A (Perfect Infusion):** +5 KP and +15 Bandwidth.\r\n    * **Evo B (Mass Infusion):** Affects all allies.",
    "effects": [
      "[Support] ally by granting them +3 KP and +10 Bandwidth immediately."
    ],
    "keywords": [
      "Support"
    ],
    "powerScore": 26
  },
  {
    "id": "SKILL_FOUNDATIONAL_023",
    "name": "Cooldown Gift",
    "engine": "foundational",
    "category": "Tempo Support",
    "tier": 1,
    "cost": {
      "kp": 2
    },
    "cooldown": 1,
    "unlocked": true,
    "description": "** [Support] ally by refreshing 1 of their cooldowns.\r\n    * **Evo A (Perfect Gift):** Refresh 2 cooldowns.\r\n    * **Evo B (Multi-Gift):** Can target 2 allies.",
    "effects": [
      "[Support] ally by refreshing 1 of their cooldowns."
    ],
    "keywords": [
      "Support"
    ],
    "powerScore": 27
  },
  {
    "id": "SKILL_FOUNDATIONAL_024",
    "name": "Shield Projection",
    "engine": "foundational",
    "category": "Defensive Support",
    "tier": 0,
    "cost": {
      "kp": 1
    },
    "cooldown": 1,
    "unlocked": true,
    "description": "** [Support] ally with 20 Shield.\r\n    * **Evo A (Perfect Shield):** 35 Shield instead.\r\n    * **Evo B (Mass Shield):** Affects 3 allies.",
    "effects": [
      "[Support] ally with 20 Shield."
    ],
    "keywords": [
      "Support"
    ],
    "powerScore": 5
  },
  {
    "id": "SKILL_FOUNDATIONAL_025",
    "name": "Amplification Aura",
    "engine": "foundational",
    "category": "Power Support",
    "tier": 1,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** [Support] ally with +30% effect on their next glyph for 2 turns.\r\n    * **Evo A (Perfect Amplification):** +50% effect.\r\n    * **Evo B (Extended Aura):** Duration 3 turns.",
    "effects": [
      "[Support] ally with +30% effect on their next glyph for 2 turns."
    ],
    "keywords": [
      "Support"
    ],
    "powerScore": 28
  },
  {
    "id": "SKILL_FOUNDATIONAL_026",
    "name": "Bandwidth Sharing",
    "engine": "foundational",
    "category": "Resource Support",
    "tier": 1,
    "cost": {
      "kp": 2
    },
    "cooldown": 1,
    "unlocked": true,
    "description": "** [Support] ally by transferring up to 20 of your Bandwidth to them.\r\n    * **Evo A (Efficient Sharing):** They gain +25% extra (if you give 20, they get 25).\r\n    * **Evo B (Mass Sharing):** Can dis",
    "effects": [
      "[Support] ally by transferring up to 20 of your Bandwidth to them."
    ],
    "keywords": [
      "Support"
    ],
    "powerScore": 27
  },
  {
    "id": "SKILL_FOUNDATIONAL_027",
    "name": "Support Network",
    "engine": "foundational",
    "category": "Multi-Target",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** [Support] 3 random allies with small bonuses (+10% damage, 10 Shield, refresh 1 cooldown).\r\n    * **Evo A (Perfect Network):** Affects 5 allies.\r\n    * **Evo B (Enhanced Network):** Bonuses doubled",
    "effects": [
      "[Support] 3 random allies with small bonuses (+10% damage, 10 Shield, refresh 1 cooldown)."
    ],
    "keywords": [
      "Support"
    ],
    "powerScore": 49
  },
  {
    "id": "SKILL_FOUNDATIONAL_028",
    "name": "Synchronized Strike",
    "engine": "foundational",
    "category": "Coordination",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** [Support] ally: Their next offensive glyph triggers simultaneously with yours (both at full potency).\r\n    * **Evo A (Perfect Sync):** Can sync with 2 allies.\r\n    * **Evo B (Enhanced Sync):** Both",
    "effects": [
      "[Support] ally: Their next offensive glyph triggers simultaneously with yours (both at full potency)."
    ],
    "keywords": [
      "Support"
    ],
    "powerScore": 50
  },
  {
    "id": "SKILL_FOUNDATIONAL_029",
    "name": "Restoration Support",
    "engine": "foundational",
    "category": "Healing Support",
    "tier": 1,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** [Support] ally with [Heal] 30 Ojas and [Cleanse] 1 debuff.\r\n    * **Evo A (Perfect Restoration):** [Heal] 50 Ojas.\r\n    * **Evo B (Deep Cleanse):** [Cleanse] 2 debuffs instead.",
    "effects": [
      "[Support] ally with [Heal] 30 Ojas and [Cleanse] 1 debuff."
    ],
    "keywords": [
      "Support",
      "Heal",
      "Cleanse",
      "Heal",
      "Cleanse"
    ],
    "powerScore": 36
  },
  {
    "id": "SKILL_FOUNDATIONAL_030",
    "name": "Support Cascade",
    "engine": "foundational",
    "category": "Chain Support",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** [Support] ally. When they act, they automatically [Support] a random adjacent ally with 50% of the bonus.\r\n    * **Evo A (Perfect Cascade):** 75% of the bonus.\r\n    * **Evo B (Extended Cascade):** ",
    "effects": [
      "[Support] ally. When they act, they automatically [Support] a random adjacent ally with 50% of the bonus."
    ],
    "keywords": [
      "Support",
      "Support"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_FOUNDATIONAL_031",
    "name": "Bandwidth Conduit",
    "engine": "foundational",
    "category": "Channeling",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** For 3 turns, each time you spend Bandwidth, target ally gains 25% of it.\r\n    * **Evo A (Perfect Conduit):** They gain 50% instead.\r\n    * **Evo B (Multi-Conduit):** Affects 2 allies.",
    "effects": [
      "For 3 turns, each time you spend Bandwidth, target ally gains 25% of it."
    ],
    "keywords": [],
    "powerScore": 47
  },
  {
    "id": "SKILL_FOUNDATIONAL_032",
    "name": "Support Amplifier",
    "engine": "foundational",
    "category": "Multiplier",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** For 2 turns, all your [Support] effects have +50% potency.\r\n    * **Evo A (Perfect Amplifier):** +100% potency.\r\n    * **Evo B (Extended Amplifier):** Duration 3 turns.",
    "effects": [
      "For 2 turns, all your [Support] effects have +50% potency."
    ],
    "keywords": [
      "Support"
    ],
    "powerScore": 52
  },
  {
    "id": "SKILL_FOUNDATIONAL_033",
    "name": "Emergency Support",
    "engine": "foundational",
    "category": "Reactive",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** When ally drops below 30% Ojas, automatically [Support] them with [Heal] 25 and 20 Shield. Once per 3 turns.\r\n    * **Evo A (Perfect Emergency):** [Heal] 40 and 35 Shield.\r\n    * **Evo B (Frequent ",
    "effects": [
      "When ally drops below 30% Ojas, automatically [Support] them with [Heal] 25 and 20 Shield. Once per 3 turns."
    ],
    "keywords": [
      "Support",
      "Heal",
      "Heal"
    ],
    "powerScore": 54
  },
  {
    "id": "SKILL_FOUNDATIONAL_034",
    "name": "Linked Support",
    "engine": "foundational",
    "category": "Persistent",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** [Support] ally with a persistent link for 3 turns: 25% of healing/shielding you receive is copied to them.\r\n    * **Evo A (Perfect Link):** 50% copied instead.\r\n    * **Evo B (Multi-Link):** Can li",
    "effects": [
      "[Support] ally with a persistent link for 3 turns: 25% of healing/shielding you receive is copied to them."
    ],
    "keywords": [
      "Support"
    ],
    "powerScore": 51
  },
  {
    "id": "SKILL_FOUNDATIONAL_035",
    "name": "Support Echo",
    "engine": "foundational",
    "category": "Duplication",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Your next [Support] glyph is automatically repeated at 50% potency. Cooldown: 3 turns.\r\n    * **Evo A (Perfect Echo):** 75% potency instead.\r\n    * **Evo B (Frequent Echo):** Cooldown reduced to 2 ",
    "effects": [
      "Your next [Support] glyph is automatically repeated at 50% potency. Cooldown: 3 turns."
    ],
    "keywords": [
      "Support"
    ],
    "powerScore": 73
  },
  {
    "id": "SKILL_FOUNDATIONAL_036",
    "name": "Conductor's Blessing",
    "engine": "foundational",
    "category": "Ultimate Support",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** [Support] all allies with: +25% all effects, 25 Shield, refresh 1 cooldown. Costs 40 Bandwidth.\r\n    * **Evo A (Perfect Blessing):** +40% all effects.\r\n    * **Evo B (Economic Blessing):** Cost red",
    "effects": [
      "[Support] all allies with: +25% all effects, 25 Shield, refresh 1 cooldown. Costs 40 Bandwidth."
    ],
    "keywords": [
      "Support"
    ],
    "powerScore": 74
  },
  {
    "id": "SKILL_FOUNDATIONAL_037",
    "name": "Support Sacrifice",
    "engine": "foundational",
    "category": "Tactical",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Sacrifice 30 of your Ojas to [Support] ally with: [Heal] 60 Ojas, 40 Shield, +50% damage for 2 turns.\r\n    * **Evo A (Perfect Sacrifice):** [Heal] 90 Ojas instead.\r\n    * **Evo B (Efficient Sacrifi",
    "effects": [
      "Sacrifice 30 of your Ojas to [Support] ally with: [Heal] 60 Ojas, 40 Shield, +50% damage for 2 turns."
    ],
    "keywords": [
      "Support",
      "Heal",
      "Heal"
    ],
    "powerScore": 56
  },
  {
    "id": "SKILL_FOUNDATIONAL_038",
    "name": "Support Matrix",
    "engine": "foundational",
    "category": "Network",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Create support matrix linking 4 allies: When one receives [Support], 25% of effect copies to others in matrix.\r\n    * **Evo A (Perfect Matrix):** 50% copy instead.\r\n    * **Evo B (Extended Matrix):",
    "effects": [
      "Create support matrix linking 4 allies: When one receives [Support], 25% of effect copies to others in matrix."
    ],
    "keywords": [
      "Support"
    ],
    "powerScore": 73
  },
  {
    "id": "SKILL_FOUNDATIONAL_039",
    "name": "Overcharge Support",
    "engine": "foundational",
    "category": "Power",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** [Support] ally with massive boost: +100% next glyph effect, but they take 15 damage after using it.\r\n    * **Evo A (Perfect Overcharge):** +150% effect.\r\n    * **Evo B (Safe Overcharge):** Only tak",
    "effects": [
      "[Support] ally with massive boost: +100% next glyph effect, but they take 15 damage after using it."
    ],
    "keywords": [
      "Support"
    ],
    "powerScore": 75
  },
  {
    "id": "SKILL_FOUNDATIONAL_040",
    "name": "Master Conductor",
    "engine": "foundational",
    "category": "Ultimate Passive",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Passive: All [Support] glyphs cost -2 KP and affect +1 additional target. Gain +1 Bandwidth per [Support] cast.\r\n    * **Evo A (Perfect Mastery):** Cost -3 KP and +2 additional targets.\r\n    * **Ev",
    "effects": [
      "Passive: All [Support] glyphs cost -2 KP and affect +1 additional target. Gain +1 Bandwidth per [Support] cast."
    ],
    "keywords": [
      "Support",
      "Support"
    ],
    "powerScore": 78
  },
  {
    "id": "SKILL_FOUNDATIONAL_041",
    "name": "Basic Ward",
    "engine": "foundational",
    "category": "Defense",
    "tier": 0,
    "cost": {
      "kp": 1
    },
    "cooldown": 0,
    "unlocked": true,
    "description": "** Grant ally 15 Shield.\r\n    * **Evo A (Enhanced Ward):** 25 Shield instead.\r\n    * **Evo B (Multi-Ward):** Affects 2 allies.",
    "effects": [
      "Grant ally 15 Shield."
    ],
    "keywords": [],
    "powerScore": 2
  },
  {
    "id": "SKILL_FOUNDATIONAL_042",
    "name": "Protective Barrier",
    "engine": "foundational",
    "category": "Zone Defense",
    "tier": 1,
    "cost": {
      "kp": 2
    },
    "cooldown": 1,
    "unlocked": true,
    "description": "** Create 3x3 barrier for 2 turns: Allies inside take -20% damage.\r\n    * **Evo A (Perfect Barrier):** -35% damage reduction.\r\n    * **Evo B (Extended Barrier):** Duration 3 turns.",
    "effects": [
      "Create 3x3 barrier for 2 turns: Allies inside take -20% damage."
    ],
    "keywords": [],
    "powerScore": 25
  },
  {
    "id": "SKILL_FOUNDATIONAL_043",
    "name": "Auto-Shield Protocol",
    "engine": "foundational",
    "category": "Reactive",
    "tier": 1,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** For 3 turns, first time each ally takes damage per turn, automatically grant them 10 Shield.\r\n    * **Evo A (Perfect Protocol):** 20 Shield instead.\r\n    * **Evo B (Extended Protocol):** Duration 4",
    "effects": [
      "For 3 turns, first time each ally takes damage per turn, automatically grant them 10 Shield."
    ],
    "keywords": [],
    "powerScore": 26
  },
  {
    "id": "SKILL_FOUNDATIONAL_044",
    "name": "Damage Absorber",
    "engine": "foundational",
    "category": "Redirection",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** For 2 turns, you absorb 30% of all damage dealt to allies. Gain +2 Bandwidth per 10 damage absorbed.\r\n    * **Evo A (Perfect Absorber):** Absorb 50% of damage.\r\n    * **Evo B (Efficient Absorber):*",
    "effects": [
      "For 2 turns, you absorb 30% of all damage dealt to allies. Gain +2 Bandwidth per 10 damage absorbed."
    ],
    "keywords": [],
    "powerScore": 47
  },
  {
    "id": "SKILL_FOUNDATIONAL_045",
    "name": "Fortification",
    "engine": "foundational",
    "category": "Shield Boost",
    "tier": 1,
    "cost": {
      "kp": 2
    },
    "cooldown": 1,
    "unlocked": true,
    "description": "** All active shields on allies gain +15 points.\r\n    * **Evo A (Perfect Fortification):** +25 points instead.\r\n    * **Evo B (Sustained Fortification):** Also prevent shields from decaying for 1 turn",
    "effects": [
      "All active shields on allies gain +15 points."
    ],
    "keywords": [],
    "powerScore": 25
  },
  {
    "id": "SKILL_FOUNDATIONAL_046",
    "name": "Shield Synthesis",
    "engine": "foundational",
    "category": "Merge",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Merge all shields on target ally into one larger shield (+25% total value).\r\n    * **Evo A (Perfect Synthesis):** +50% total value.\r\n    * **Evo B (Multi-Synthesis):** Can target 2 allies.",
    "effects": [
      "Merge all shields on target ally into one larger shield (+25% total value)."
    ],
    "keywords": [],
    "powerScore": 48
  },
  {
    "id": "SKILL_FOUNDATIONAL_047",
    "name": "Reactive Defense",
    "engine": "foundational",
    "category": "Counter",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** When ally is attacked, attacker takes 10 damage. Lasts 3 turns.\r\n    * **Evo A (Perfect Defense):** 20 damage instead.\r\n    * **Evo B (Extended Defense):** Duration 4 turns.",
    "effects": [
      "When ally is attacked, attacker takes 10 damage. Lasts 3 turns."
    ],
    "keywords": [],
    "powerScore": 47
  },
  {
    "id": "SKILL_FOUNDATIONAL_048",
    "name": "Emergency Shelter",
    "engine": "foundational",
    "category": "Panic Button",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** All allies gain 30 Shield and immunity to next attack. Once per duel.\r\n    * **Evo A (Perfect Shelter):** 50 Shield instead.\r\n    * **Evo B (Frequent Shelter):** Usable twice per duel.",
    "effects": [
      "All allies gain 30 Shield and immunity to next attack. Once per duel."
    ],
    "keywords": [],
    "powerScore": 49
  },
  {
    "id": "SKILL_FOUNDATIONAL_049",
    "name": "Shield Regeneration",
    "engine": "foundational",
    "category": "Healing Shields",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** All shields on allies regenerate 5 points per turn for 3 turns.\r\n    * **Evo A (Perfect Regeneration):** 10 points per turn.\r\n    * **Evo B (Extended Regeneration):** Duration 4 turns.",
    "effects": [
      "All shields on allies regenerate 5 points per turn for 3 turns."
    ],
    "keywords": [],
    "powerScore": 48
  },
  {
    "id": "SKILL_FOUNDATIONAL_050",
    "name": "Layered Defense",
    "engine": "foundational",
    "category": "Multi-Shield",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Grant ally 3 separate 15-point shields (each must be broken individually).\r\n    * **Evo A (Perfect Layers):** Each shield is 25 points.\r\n    * **Evo B (Multi-Layers):** Can target 2 allies.",
    "effects": [
      "Grant ally 3 separate 15-point shields (each must be broken individually)."
    ],
    "keywords": [],
    "powerScore": 50
  },
  {
    "id": "SKILL_FOUNDATIONAL_051",
    "name": "Shield Link",
    "engine": "foundational",
    "category": "Network",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Link 3 allies' shields: When one takes damage, all shields absorb equally.\r\n    * **Evo A (Perfect Link):** Links all allies.\r\n    * **Evo B (Reinforced Link):** Linked shields gain +20% total valu",
    "effects": [
      "Link 3 allies' shields: When one takes damage, all shields absorb equally."
    ],
    "keywords": [],
    "powerScore": 49
  },
  {
    "id": "SKILL_FOUNDATIONAL_052",
    "name": "Damage Nullification",
    "engine": "foundational",
    "category": "Counter",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Next damage instance to ally is completely negated. Cooldown: 3 turns.\r\n    * **Evo A (Perfect Nullification):** Negates next 2 instances.\r\n    * **Evo B (Frequent Nullification):** Cooldown reduce",
    "effects": [
      "Next damage instance to ally is completely negated. Cooldown: 3 turns."
    ],
    "keywords": [],
    "powerScore": 71
  },
  {
    "id": "SKILL_FOUNDATIONAL_053",
    "name": "Shield Burst",
    "engine": "foundational",
    "category": "Conversion",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Convert all shields on allies to [Heal] at 75% value.\r\n    * **Evo A (Perfect Burst):** Conversion rate 100%.\r\n    * **Evo B (Offensive Burst):** Convert to damage dealt to enemies instead.",
    "effects": [
      "Convert all shields on allies to [Heal] at 75% value."
    ],
    "keywords": [
      "Heal"
    ],
    "powerScore": 50
  },
  {
    "id": "SKILL_FOUNDATIONAL_054",
    "name": "Fortress Mode",
    "engine": "foundational",
    "category": "Ultimate Defense",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** For 2 turns, all allies take -50% damage and gain 20 Shield per turn. Cannot move.\r\n    * **Evo A (Perfect Fortress):** -70% damage reduction.\r\n    * **Evo B (Mobile Fortress):** Can still move.",
    "effects": [
      "For 2 turns, all allies take -50% damage and gain 20 Shield per turn. Cannot move."
    ],
    "keywords": [],
    "powerScore": 72
  },
  {
    "id": "SKILL_FOUNDATIONAL_055",
    "name": "Shield Overflow",
    "engine": "foundational",
    "category": "Scaling",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** If ally shield exceeds 50 points, convert excess to [Heal] at start of next turn.\r\n    * **Evo A (Perfect Overflow):** Conversion threshold lowered to 40 points.\r\n    * **Evo B (Efficient Overflow)",
    "effects": [
      "If ally shield exceeds 50 points, convert excess to [Heal] at start of next turn."
    ],
    "keywords": [
      "Heal"
    ],
    "powerScore": 52
  },
  {
    "id": "SKILL_FOUNDATIONAL_056",
    "name": "Guardian Protocol",
    "engine": "foundational",
    "category": "Automation",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Passive: Automatically grant 15 Shield to ally when they drop below 50% Ojas. Cooldown: 3 turns per ally.\r\n    * **Evo A (Perfect Guardian):** 25 Shield instead.\r\n    * **Evo B (Frequent Guardian):",
    "effects": [
      "Passive: Automatically grant 15 Shield to ally when they drop below 50% Ojas. Cooldown: 3 turns per ally."
    ],
    "keywords": [],
    "powerScore": 71
  },
  {
    "id": "SKILL_FOUNDATIONAL_057",
    "name": "Protective Sacrifice",
    "engine": "foundational",
    "category": "Redirect",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** For 2 turns, all damage to target ally is redirected to you. You gain 10 Bandwidth per 20 damage absorbed.\r\n    * **Evo A (Perfect Sacrifice):** Gain 15 Bandwidth per 20 damage.\r\n    * **Evo B (Ext",
    "effects": [
      "For 2 turns, all damage to target ally is redirected to you. You gain 10 Bandwidth per 20 damage absorbed."
    ],
    "keywords": [],
    "powerScore": 49
  },
  {
    "id": "SKILL_FOUNDATIONAL_058",
    "name": "Shield Mastery",
    "engine": "foundational",
    "category": "Passive",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Passive: All shields you grant have +20% value and last +1 turn longer.\r\n    * **Evo A (Perfect Mastery):** +35% value.\r\n    * **Evo B (Deep Mastery):** Last +2 turns longer.",
    "effects": [
      "Passive: All shields you grant have +20% value and last +1 turn longer."
    ],
    "keywords": [],
    "powerScore": 50
  },
  {
    "id": "SKILL_FOUNDATIONAL_059",
    "name": "Aegis Protocol",
    "engine": "foundational",
    "category": "Ultimate",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** All allies gain 50 Shield and immunity to debuffs for 2 turns. Costs 50 Bandwidth.\r\n    * **Evo A (Perfect Aegis):** 80 Shield instead.\r\n    * **Evo B (Extended Aegis):** Duration 3 turns.",
    "effects": [
      "All allies gain 50 Shield and immunity to debuffs for 2 turns. Costs 50 Bandwidth."
    ],
    "keywords": [],
    "powerScore": 74
  },
  {
    "id": "SKILL_FOUNDATIONAL_060",
    "name": "Master Custodian",
    "engine": "foundational",
    "category": "Ultimate Passive",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Passive: Shield glyphs cost -2 KP. When ally shield breaks, automatically grant them 15 Shield. Gain +1 Bandwidth per shield broken.\r\n    * **Evo A (Perfect Mastery):** Cost -3 KP, auto-grant 25 Sh",
    "effects": [
      "Passive: Shield glyphs cost -2 KP. When ally shield breaks, automatically grant them 15 Shield. Gain +1 Bandwidth per shield broken."
    ],
    "keywords": [],
    "powerScore": 74
  },
  {
    "id": "SKILL_FOUNDATIONAL_061",
    "name": "Bandwidth Generator",
    "engine": "foundational",
    "category": "Economy",
    "tier": 1,
    "cost": {
      "kp": 1
    },
    "cooldown": 1,
    "unlocked": true,
    "description": "** Gain 15 Bandwidth immediately. Cooldown: 2 turns.\r\n    * **Evo A (Perfect Generator):** Gain 25 Bandwidth.\r\n    * **Evo B (Rapid Generator):** Cooldown reduced to 1 turn.",
    "effects": [
      "Gain 15 Bandwidth immediately. Cooldown: 2 turns."
    ],
    "keywords": [],
    "powerScore": 24
  },
  {
    "id": "SKILL_FOUNDATIONAL_062",
    "name": "KP Surge",
    "engine": "foundational",
    "category": "Resource Spike",
    "tier": 0,
    "cost": {
      "kp": 1
    },
    "cooldown": 1,
    "unlocked": true,
    "description": "** Gain 5 KP immediately.\r\n    * **Evo A (Perfect Surge):** Gain 8 KP.\r\n    * **Evo B (Mass Surge):** All allies gain 3 KP.",
    "effects": [
      "Gain 5 KP immediately."
    ],
    "keywords": [],
    "powerScore": 3
  },
  {
    "id": "SKILL_FOUNDATIONAL_063",
    "name": "Resource Converter",
    "engine": "foundational",
    "category": "Exchange",
    "tier": 1,
    "cost": {
      "kp": 2
    },
    "cooldown": 1,
    "unlocked": true,
    "description": "** Convert between resources: 10 Bandwidth ↔ 5 KP ↔ 3 Coherence (choose direction).\r\n    * **Evo A (Efficient Converter):** Conversion rates improved by 50%.\r\n    * **Evo B (Multi-Converter):** Can co",
    "effects": [
      "Convert between resources: 10 Bandwidth ↔ 5 KP ↔ 3 Coherence (choose direction)."
    ],
    "keywords": [],
    "powerScore": 25
  },
  {
    "id": "SKILL_FOUNDATIONAL_064",
    "name": "Bandwidth Battery",
    "engine": "foundational",
    "category": "Storage",
    "tier": 1,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Store up to 30 Bandwidth. Release all to grant allies: +2 KP per 10 stored.\r\n    * **Evo A (Deep Battery):** Store up to 50 Bandwidth.\r\n    * **Evo B (Efficient Battery):** Grants +3 KP per 10 inst",
    "effects": [
      "Store up to 30 Bandwidth. Release all to grant allies: +2 KP per 10 stored."
    ],
    "keywords": [],
    "powerScore": 26
  },
  {
    "id": "SKILL_FOUNDATIONAL_065",
    "name": "Resource Multiplication",
    "engine": "foundational",
    "category": "Scaling",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** For 2 turns, all resource generation is doubled.\r\n    * **Evo A (Perfect Multiplication):** Tripled instead of doubled.\r\n    * **Evo B (Extended Multiplication):** Duration 3 turns.",
    "effects": [
      "For 2 turns, all resource generation is doubled."
    ],
    "keywords": [],
    "powerScore": 48
  },
  {
    "id": "SKILL_FOUNDATIONAL_066",
    "name": "Economic Efficiency",
    "engine": "foundational",
    "category": "Passive",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Passive: All glyphs cost -1 KP (minimum 0).\r\n    * **Evo A (Perfect Efficiency):** Cost -2 KP.\r\n    * **Evo B (Universal Efficiency):** Also affects Bandwidth costs (-10%).",
    "effects": [
      "Passive: All glyphs cost -1 KP (minimum 0)."
    ],
    "keywords": [],
    "powerScore": 47
  },
  {
    "id": "SKILL_FOUNDATIONAL_067",
    "name": "Resource Siphon",
    "engine": "foundational",
    "category": "Theft",
    "tier": 1,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Steal 3 KP from target enemy. Also gain 10 Bandwidth.\r\n    * **Evo A (Perfect Siphon):** Steal 5 KP and gain 15 Bandwidth.\r\n    * **Evo B (Mass Siphon):** Affects 2 enemies.",
    "effects": [
      "Steal 3 KP from target enemy. Also gain 10 Bandwidth."
    ],
    "keywords": [],
    "powerScore": 26
  },
  {
    "id": "SKILL_FOUNDATIONAL_068",
    "name": "Compound Interest",
    "engine": "foundational",
    "category": "Scaling",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** For each 50 Bandwidth you have, gain +1 KP per turn. For each 10 KP, gain +5 Bandwidth per turn.\r\n    * **Evo A (Perfect Interest):** Thresholds reduced to 40/8.\r\n    * **Evo B (Deep Interest):** G",
    "effects": [
      "For each 50 Bandwidth you have, gain +1 KP per turn. For each 10 KP, gain +5 Bandwidth per turn."
    ],
    "keywords": [],
    "powerScore": 49
  },
  {
    "id": "SKILL_FOUNDATIONAL_069",
    "name": "Resource Pool",
    "engine": "foundational",
    "category": "Sharing",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Create shared resource pool with allies for 3 turns: All can draw from combined Bandwidth (max 10 per ally per turn).\r\n    * **Evo A (Deep Pool):** Max 15 per ally.\r\n    * **Evo B (Extended Pool):*",
    "effects": [
      "Create shared resource pool with allies for 3 turns: All can draw from combined Bandwidth (max 10 per ally per turn)."
    ],
    "keywords": [],
    "powerScore": 47
  },
  {
    "id": "SKILL_FOUNDATIONAL_070",
    "name": "Emergency Reserves",
    "engine": "foundational",
    "category": "Safety",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** When you drop below 20 Bandwidth, instantly gain 30 Bandwidth. Once per duel.\r\n    * **Evo A (Perfect Reserves):** Gain 50 Bandwidth.\r\n    * **Evo B (Frequent Reserves):** Usable twice per duel.",
    "effects": [
      "When you drop below 20 Bandwidth, instantly gain 30 Bandwidth. Once per duel."
    ],
    "keywords": [],
    "powerScore": 48
  },
  {
    "id": "SKILL_FOUNDATIONAL_071",
    "name": "Resource Cascade",
    "engine": "foundational",
    "category": "Chain",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** When you gain resources, 25% of gain is shared with random ally. When ally gains resources, you gain 15%.\r\n    * **Evo A (Perfect Cascade):** You share 40%, receive 25%.\r\n    * **Evo B (Mass Cascad",
    "effects": [
      "When you gain resources, 25% of gain is shared with random ally. When ally gains resources, you gain 15%."
    ],
    "keywords": [],
    "powerScore": 50
  },
  {
    "id": "SKILL_FOUNDATIONAL_072",
    "name": "Bandwidth Overflow",
    "engine": "foundational",
    "category": "Conversion",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** If you end turn with 80+ Bandwidth, convert 30 to: +15 Ojas, +3 KP, +2 Coherence.\r\n    * **Evo A (Efficient Overflow):** Only requires 60 Bandwidth.\r\n    * **Evo B (Perfect Overflow):** Conversion ",
    "effects": [
      "If you end turn with 80+ Bandwidth, convert 30 to: +15 Ojas, +3 KP, +2 Coherence."
    ],
    "keywords": [],
    "powerScore": 47
  },
  {
    "id": "SKILL_FOUNDATIONAL_073",
    "name": "Resource Momentum",
    "engine": "foundational",
    "category": "Scaling",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Each turn, gain +5% more resources than last turn (stacks, resets when spending >50% of pool).\r\n    * **Evo A (Perfect Momentum):** +8% per turn.\r\n    * **Evo B (Sustained Momentum):** Doesn't rese",
    "effects": [
      "Each turn, gain +5% more resources than last turn (stacks, resets when spending >50% of pool)."
    ],
    "keywords": [],
    "powerScore": 49
  },
  {
    "id": "SKILL_FOUNDATIONAL_074",
    "name": "Economic Collapse",
    "engine": "foundational",
    "category": "Reset",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** All players lose 50% of current resources. You gain 25% of total lost. Once per duel.\r\n    * **Evo A (Perfect Collapse):** You gain 40% instead.\r\n    * **Evo B (Selective Collapse):** Only affects ",
    "effects": [
      "All players lose 50% of current resources. You gain 25% of total lost. Once per duel."
    ],
    "keywords": [],
    "powerScore": 71
  },
  {
    "id": "SKILL_FOUNDATIONAL_075",
    "name": "Resource Abundance",
    "engine": "foundational",
    "category": "Ultimate",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** For 3 turns, all players gain double resources. You gain triple.\r\n    * **Evo A (Perfect Abundance):** You gain 4x instead.\r\n    * **Evo B (Extended Abundance):** Duration 4 turns.",
    "effects": [
      "For 3 turns, all players gain double resources. You gain triple."
    ],
    "keywords": [],
    "powerScore": 72
  },
  {
    "id": "SKILL_FOUNDATIONAL_076",
    "name": "Bandwidth Mastery",
    "engine": "foundational",
    "category": "Passive",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Passive: Start each duel with +30 Bandwidth. Max Bandwidth increased by 20.\r\n    * **Evo A (Perfect Mastery):** Start with +50, max increased by 35.\r\n    * **Evo B (Deep Mastery):** Also gain +3 Ba",
    "effects": [
      "Passive: Start each duel with +30 Bandwidth. Max Bandwidth increased by 20."
    ],
    "keywords": [],
    "powerScore": 50
  },
  {
    "id": "SKILL_FOUNDATIONAL_077",
    "name": "KP Mastery",
    "engine": "foundational",
    "category": "Passive",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Passive: Start each duel with +10 KP. Gain +2 KP per turn.\r\n    * **Evo A (Perfect Mastery):** Start with +15, gain +3 per turn.\r\n    * **Evo B (Deep Mastery):** All KP costs reduced by 1 (minimum ",
    "effects": [
      "Passive: Start each duel with +10 KP. Gain +2 KP per turn."
    ],
    "keywords": [],
    "powerScore": 50
  },
  {
    "id": "SKILL_FOUNDATIONAL_078",
    "name": "Resource Synthesis",
    "engine": "foundational",
    "category": "Ultimate Conversion",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Convert all your current resources into unified pool. Can spend as any resource type for 2 turns.\r\n    * **Evo A (Perfect Synthesis):** Duration 3 turns.\r\n    * **Evo B (Efficient Synthesis):** Con",
    "effects": [
      "Convert all your current resources into unified pool. Can spend as any resource type for 2 turns."
    ],
    "keywords": [],
    "powerScore": 73
  },
  {
    "id": "SKILL_FOUNDATIONAL_079",
    "name": "Infinite Economy",
    "engine": "foundational",
    "category": "Ultimate",
    "tier": 4,
    "cost": {
      "kp": 4
    },
    "cooldown": 5,
    "unlocked": true,
    "description": "** For 2 turns, resources don't decrease when spent (infinite resources). Once per duel.\r\n    * **Evo A (Extended Economy):** Duration 3 turns.\r\n    * **Evo B (Enhanced Economy):** Also generate +50 B",
    "effects": [
      "For 2 turns, resources don't decrease when spent (infinite resources). Once per duel."
    ],
    "keywords": [],
    "powerScore": 96
  },
  {
    "id": "SKILL_FOUNDATIONAL_080",
    "name": "Master Economist",
    "engine": "foundational",
    "category": "Ultimate Passive",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Passive: All resource gains +25%. All costs -15%. Can hold 50% more resources than normal cap.\r\n    * **Evo A (Perfect Mastery):** Gains +40%, costs -25%.\r\n    * **Evo B (Deep Mastery):** Can hold ",
    "effects": [
      "Passive: All resource gains +25%. All costs -15%. Can hold 50% more resources than normal cap."
    ],
    "keywords": [],
    "powerScore": 74
  },
  {
    "id": "SKILL_FOUNDATIONAL_081",
    "name": "Basic Refresh",
    "engine": "foundational",
    "category": "Cooldown",
    "tier": 0,
    "cost": {
      "kp": 1
    },
    "cooldown": 1,
    "unlocked": true,
    "description": "** [Refresh] 1 random cooldown by 1 turn.\r\n    * **Evo A (Perfect Refresh):** Refresh by 2 turns.\r\n    * **Evo B (Multi-Refresh):** Refresh 2 cooldowns.",
    "effects": [
      "[Refresh] 1 random cooldown by 1 turn."
    ],
    "keywords": [
      "Refresh"
    ],
    "powerScore": 5
  },
  {
    "id": "SKILL_FOUNDATIONAL_082",
    "name": "Targeted Refresh",
    "engine": "foundational",
    "category": "Selective",
    "tier": 1,
    "cost": {
      "kp": 1
    },
    "cooldown": 1,
    "unlocked": true,
    "description": "** Choose which cooldown to [Refresh] (reduce by 1 turn).\r\n    * **Evo A (Perfect Refresh):** Reduce by 2 turns.\r\n    * **Evo B (Multi-Refresh):** Can refresh 2 chosen cooldowns.",
    "effects": [
      "Choose which cooldown to [Refresh] (reduce by 1 turn)."
    ],
    "keywords": [
      "Refresh"
    ],
    "powerScore": 26
  },
  {
    "id": "SKILL_FOUNDATIONAL_083",
    "name": "Mass Refresh",
    "engine": "foundational",
    "category": "AoE",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** [Refresh] all cooldowns by 1 turn.\r\n    * **Evo A (Perfect Mass):** Refresh by 2 turns.\r\n    * **Evo B (Efficient Mass):** Cost -2 KP.",
    "effects": [
      "[Refresh] all cooldowns by 1 turn."
    ],
    "keywords": [
      "Refresh"
    ],
    "powerScore": 49
  },
  {
    "id": "SKILL_FOUNDATIONAL_084",
    "name": "Priority Refresh",
    "engine": "foundational",
    "category": "Smart",
    "tier": 1,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** [Refresh] highest-cost glyph's cooldown by 2 turns.\r\n    * **Evo A (Perfect Priority):** Refresh by 3 turns.\r\n    * **Evo B (Multi-Priority):** Also refresh 2nd highest-cost.",
    "effects": [
      "[Refresh] highest-cost glyph's cooldown by 2 turns."
    ],
    "keywords": [
      "Refresh"
    ],
    "powerScore": 28
  },
  {
    "id": "SKILL_FOUNDATIONAL_085",
    "name": "Cooldown Burst",
    "engine": "foundational",
    "category": "Reset",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Reduce all current cooldowns by 3 turns. Once per duel.\r\n    * **Evo A (Perfect Burst):** Reduce by 5 turns.\r\n    * **Evo B (Frequent Burst):** Usable twice per duel.",
    "effects": [
      "Reduce all current cooldowns by 3 turns. Once per duel."
    ],
    "keywords": [],
    "powerScore": 49
  },
  {
    "id": "SKILL_FOUNDATIONAL_086",
    "name": "Refresh Loop",
    "engine": "foundational",
    "category": "Chain",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** When you [Refresh] a cooldown, 25% chance to refresh another random cooldown.\r\n    * **Evo A (Perfect Loop):** 50% chance.\r\n    * **Evo B (Guaranteed Loop):** Always triggers but second refresh is ",
    "effects": [
      "When you [Refresh] a cooldown, 25% chance to refresh another random cooldown."
    ],
    "keywords": [
      "Refresh"
    ],
    "powerScore": 50
  },
  {
    "id": "SKILL_FOUNDATIONAL_087",
    "name": "Cooldown Reduction",
    "engine": "foundational",
    "category": "Passive",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Passive: All cooldowns tick down 25% faster.\r\n    * **Evo A (Perfect Reduction):** 50% faster.\r\n    * **Evo B (Selective Reduction):** Choose which glyphs get boosted.",
    "effects": [
      "Passive: All cooldowns tick down 25% faster."
    ],
    "keywords": [],
    "powerScore": 47
  },
  {
    "id": "SKILL_FOUNDATIONAL_088",
    "name": "Refresh Cascade",
    "engine": "foundational",
    "category": "Chain",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** [Refresh] a cooldown. If fully reset, also refresh another cooldown by 2 turns.\r\n    * **Evo A (Perfect Cascade):** Refresh by 3 turns.\r\n    * **Evo B (Multi-Cascade):** Chains to 3 total cooldowns",
    "effects": [
      "[Refresh] a cooldown. If fully reset, also refresh another cooldown by 2 turns."
    ],
    "keywords": [
      "Refresh"
    ],
    "powerScore": 52
  },
  {
    "id": "SKILL_FOUNDATIONAL_089",
    "name": "Zero Cooldown",
    "engine": "foundational",
    "category": "Ultimate",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Target glyph has 0 cooldown for 2 turns.\r\n    * **Evo A (Perfect Zero):** Duration 3 turns.\r\n    * **Evo B (Multi-Zero):** Affects 2 glyphs.",
    "effects": [
      "Target glyph has 0 cooldown for 2 turns."
    ],
    "keywords": [],
    "powerScore": 72
  },
  {
    "id": "SKILL_FOUNDATIONAL_090",
    "name": "Cooldown Transfer",
    "engine": "foundational",
    "category": "Tactical",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Transfer cooldowns from ally to enemy (choose which cooldowns).\r\n    * **Evo A (Perfect Transfer):** Transferred cooldowns +1 turn for enemy.\r\n    * **Evo B (Mass Transfer):** Can transfer from 2 a",
    "effects": [
      "Transfer cooldowns from ally to enemy (choose which cooldowns)."
    ],
    "keywords": [],
    "powerScore": 49
  },
  {
    "id": "SKILL_FOUNDATIONAL_091",
    "name": "Cooldown Theft",
    "engine": "foundational",
    "category": "Aggro",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Steal enemy's lowest cooldown and add it to one of their highest. You gain 10 Bandwidth.\r\n    * **Evo A (Perfect Theft):** Gain 20 Bandwidth.\r\n    * **Evo B (Multi-Theft):** Affects 2 enemies.",
    "effects": [
      "Steal enemy's lowest cooldown and add it to one of their highest. You gain 10 Bandwidth."
    ],
    "keywords": [],
    "powerScore": 48
  },
  {
    "id": "SKILL_FOUNDATIONAL_092",
    "name": "Rapid Cooldown",
    "engine": "foundational",
    "category": "Speed",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** For 3 turns, your cooldowns tick down twice per turn.\r\n    * **Evo A (Perfect Rapid):** Tick down 3 times per turn.\r\n    * **Evo B (Extended Rapid):** Duration 4 turns.",
    "effects": [
      "For 3 turns, your cooldowns tick down twice per turn."
    ],
    "keywords": [],
    "powerScore": 50
  },
  {
    "id": "SKILL_FOUNDATIONAL_093",
    "name": "Cooldown Freeze",
    "engine": "foundational",
    "category": "Control",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Enemy cooldowns don't tick down for 2 turns.\r\n    * **Evo A (Perfect Freeze):** Duration 3 turns.\r\n    * **Evo B (Mass Freeze):** Affects all enemies.",
    "effects": [
      "Enemy cooldowns don't tick down for 2 turns."
    ],
    "keywords": [],
    "powerScore": 49
  },
  {
    "id": "SKILL_FOUNDATIONAL_094",
    "name": "Refresh Aura",
    "engine": "foundational",
    "category": "Zone",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Create 3x3 aura for 3 turns: Allies inside get 1 cooldown refreshed per turn.\r\n    * **Evo A (Perfect Aura):** Refresh 2 cooldowns per turn.\r\n    * **Evo B (Extended Aura):** 5x5 area.",
    "effects": [
      "Create 3x3 aura for 3 turns: Allies inside get 1 cooldown refreshed per turn."
    ],
    "keywords": [],
    "powerScore": 71
  },
  {
    "id": "SKILL_FOUNDATIONAL_095",
    "name": "Emergency Refresh",
    "engine": "foundational",
    "category": "Reactive",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** When ally uses glyph with 5+ turn cooldown, automatically [Refresh] it by 2 turns. Cooldown: 3 turns.\r\n    * **Evo A (Perfect Emergency):** Refresh by 3 turns.\r\n    * **Evo B (Frequent Emergency):*",
    "effects": [
      "When ally uses glyph with 5+ turn cooldown, automatically [Refresh] it by 2 turns. Cooldown: 3 turns."
    ],
    "keywords": [
      "Refresh"
    ],
    "powerScore": 52
  },
  {
    "id": "SKILL_FOUNDATIONAL_096",
    "name": "Cooldown Conversion",
    "engine": "foundational",
    "category": "Economy",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Reduce a cooldown by 3 turns, gain 15 Bandwidth.\r\n    * **Evo A (Perfect Conversion):** Gain 25 Bandwidth.\r\n    * **Evo B (Multi-Conversion):** Can convert 2 cooldowns.",
    "effects": [
      "Reduce a cooldown by 3 turns, gain 15 Bandwidth."
    ],
    "keywords": [],
    "powerScore": 49
  },
  {
    "id": "SKILL_FOUNDATIONAL_097",
    "name": "Perpetual Motion",
    "engine": "foundational",
    "category": "Ultimate",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** For 3 turns, every time you cast a glyph, reduce all cooldowns by 1.\r\n    * **Evo A (Perfect Motion):** Reduce by 2 instead.\r\n    * **Evo B (Extended Motion):** Duration 4 turns.",
    "effects": [
      "For 3 turns, every time you cast a glyph, reduce all cooldowns by 1."
    ],
    "keywords": [],
    "powerScore": 74
  },
  {
    "id": "SKILL_FOUNDATIONAL_098",
    "name": "Cooldown Mastery",
    "engine": "foundational",
    "category": "Passive",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Passive: All [Refresh] effects +1 turn stronger. [Refresh] glyphs cost -2 KP.\r\n    * **Evo A (Perfect Mastery):** +2 turns stronger.\r\n    * **Evo B (Deep Mastery):** Cost -3 KP.",
    "effects": [
      "Passive: All [Refresh] effects +1 turn stronger. [Refresh] glyphs cost -2 KP."
    ],
    "keywords": [
      "Refresh",
      "Refresh"
    ],
    "powerScore": 76
  },
  {
    "id": "SKILL_FOUNDATIONAL_099",
    "name": "Infinite Refresh",
    "engine": "foundational",
    "category": "Ultimate",
    "tier": 4,
    "cost": {
      "kp": 4
    },
    "cooldown": 5,
    "unlocked": true,
    "description": "** For 2 turns, all cooldowns are instantly refreshed as soon as they're used. Once per duel.\r\n    * **Evo A (Extended Infinity):** Duration 3 turns.\r\n    * **Evo B (Enhanced Infinity):** Also gain +3",
    "effects": [
      "For 2 turns, all cooldowns are instantly refreshed as soon as they're used. Once per duel."
    ],
    "keywords": [],
    "powerScore": 96
  },
  {
    "id": "SKILL_FOUNDATIONAL_100",
    "name": "Master Refresher",
    "engine": "foundational",
    "category": "Ultimate Passive",
    "tier": 4,
    "cost": {
      "kp": 4
    },
    "cooldown": 5,
    "unlocked": true,
    "description": "** Passive: [Refresh] highest-cost cooldown by 1 at start of each turn. Gain +2 Bandwidth per [Refresh] triggered.\r\n    * **Evo A (Perfect Mastery):** Refresh by 2 instead.\r\n    * **Evo B (Deep Master",
    "effects": [
      "Passive: [Refresh] highest-cost cooldown by 1 at start of each turn. Gain +2 Bandwidth per [Refresh] triggered."
    ],
    "keywords": [
      "Refresh",
      "Refresh"
    ],
    "powerScore": 99
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_001",
    "name": "Tactical Scan",
    "engine": "character_analysis",
    "category": "Basic Analyze",
    "tier": 0,
    "cost": {
      "kp": 1
    },
    "cooldown": 0,
    "unlocked": true,
    "description": "** [Analyze] target, gain 2 Insight. Reveal 1 random keyword in their hand.\r\n    * **Evo A (Deep Scan):** Reveal 2 keywords instead.\r\n    * **Evo B (Efficient Scan):** Cost reduced by 1 KP.",
    "effects": [
      "[Analyze] target, gain 2 Insight. Reveal 1 random keyword in their hand."
    ],
    "keywords": [
      "Analyze"
    ],
    "powerScore": 4
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_002",
    "name": "Precision Mark",
    "engine": "character_analysis",
    "category": "Basic Mark",
    "tier": 0,
    "cost": {
      "kp": 1
    },
    "cooldown": 1,
    "unlocked": true,
    "description": "** [Mark] target. Your next [Strike] against them deals +25% damage and applies [Vulnerable] (1 turn).\r\n    * **Evo A (Lasting Mark):** [Vulnerable] duration 2 turns.\r\n    * **Evo B (Multi-Mark):** Ca",
    "effects": [
      "[Mark] target. Your next [Strike] against them deals +25% damage and applies [Vulnerable] (1 turn)."
    ],
    "keywords": [
      "Mark",
      "Strike",
      "Vulnerable",
      "Vulnerable"
    ],
    "powerScore": 11
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_003",
    "name": "Silence Breach",
    "engine": "character_analysis",
    "category": "Disable",
    "tier": 1,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Apply [Silence] (1 turn). If target has [Shield], convert 1 [Shield] to [Vulnerable].\r\n    * **Evo A (Extended Silence):** Duration 2 turns.\r\n    * **Evo B (Cascading Breach):** Also applies to adj",
    "effects": [
      "Apply [Silence] (1 turn). If target has [Shield], convert 1 [Shield] to [Vulnerable]."
    ],
    "keywords": [
      "Silence",
      "Shield",
      "Shield",
      "Vulnerable"
    ],
    "powerScore": 34
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_004",
    "name": "Stun Protocol",
    "engine": "character_analysis",
    "category": "Hard CC",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Apply [Stun] (1 turn). Target cannot act.\r\n    * **Evo A (Extended Stun):** Duration 2 turns but costs +2 KP.\r\n    * **Evo B (Insight Stun):** Costs 15 Insight instead of KP.",
    "effects": [
      "Apply [Stun] (1 turn). Target cannot act."
    ],
    "keywords": [
      "Stun"
    ],
    "powerScore": 50
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_005",
    "name": "Interrogation",
    "engine": "character_analysis",
    "category": "Information Extraction",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** [Analyze] target engine. Reveal their next 2 planned actions and gain 3 Insight.\r\n    * **Evo A (Deep Interrogation):** Reveal 3 actions instead.\r\n    * **Evo B (Tactical Interrogation):** Also red",
    "effects": [
      "[Analyze] target engine. Reveal their next 2 planned actions and gain 3 Insight."
    ],
    "keywords": [
      "Analyze"
    ],
    "powerScore": 49
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_006",
    "name": "Exploit Weakness",
    "engine": "character_analysis",
    "category": "Execute",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** If target has [Expose] or [Vulnerable], deal 30 damage and refresh 1 cooldown.\r\n    * **Evo A (Critical Exploit):** Damage increased to 50.\r\n    * **Evo B (Chain Exploit):** Can target 2 enemies if",
    "effects": [
      "If target has [Expose] or [Vulnerable], deal 30 damage and refresh 1 cooldown."
    ],
    "keywords": [
      "Expose",
      "Vulnerable"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_007",
    "name": "Control Lock",
    "engine": "character_analysis",
    "category": "Lockdown",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Apply [Silence] + [Vulnerable] for 2 turns. Costs 20 Insight.\r\n    * **Evo A (Perfect Lock):** Duration 3 turns.\r\n    * **Evo B (Economic Lock):** Cost reduced to 15 Insight.",
    "effects": [
      "Apply [Silence] + [Vulnerable] for 2 turns. Costs 20 Insight."
    ],
    "keywords": [
      "Silence",
      "Vulnerable"
    ],
    "powerScore": 54
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_008",
    "name": "Mind Shackle",
    "engine": "character_analysis",
    "category": "Mental Control",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Target's next glyph costs +3 KP. If they can't pay, apply [Stun] (1 turn).\r\n    * **Evo A (Heavy Shackle):** Cost increase +5 KP.\r\n    * **Evo B (Cascading Shackle):** Affects their next 2 glyphs.",
    "effects": [
      "Target's next glyph costs +3 KP. If they can't pay, apply [Stun] (1 turn)."
    ],
    "keywords": [
      "Stun"
    ],
    "powerScore": 73
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_009",
    "name": "Vulnerability Cascade",
    "engine": "character_analysis",
    "category": "Debuff Chain",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Apply [Vulnerable] (2 turns). Each debuff on target extends duration by 1 turn.\r\n    * **Evo A (Amplified Cascade):** Extends by 2 turns per debuff.\r\n    * **Evo B (Spreading Cascade):** Also appli",
    "effects": [
      "Apply [Vulnerable] (2 turns). Each debuff on target extends duration by 1 turn."
    ],
    "keywords": [
      "Vulnerable"
    ],
    "powerScore": 50
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_010",
    "name": "Truth Extraction",
    "engine": "character_analysis",
    "category": "Forced Reveal",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Target must reveal their entire hand. Gain 5 Insight. Once per duel.\r\n    * **Evo A (Deep Truth):** Also reveal their next draw.\r\n    * **Evo B (Painful Truth):** Deal 10 damage per card revealed.",
    "effects": [
      "Target must reveal their entire hand. Gain 5 Insight. Once per duel."
    ],
    "keywords": [],
    "powerScore": 47
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_011",
    "name": "Countermeasure",
    "engine": "character_analysis",
    "category": "Reactive Control",
    "tier": 1,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** When target uses a glyph, apply [Silence] (1 turn). Cooldown: 3 turns.\r\n    * **Evo A (Perfect Counter):** Cooldown reduced to 2 turns.\r\n    * **Evo B (Aggressive Counter):** Also deal 15 damage.",
    "effects": [
      "When target uses a glyph, apply [Silence] (1 turn). Cooldown: 3 turns."
    ],
    "keywords": [
      "Silence"
    ],
    "powerScore": 28
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_012",
    "name": "Inhibitor Field",
    "engine": "character_analysis",
    "category": "Zone Control",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Create 3x3 zone for 2 turns: Enemies inside have all glyphs cost +2 KP.\r\n    * **Evo A (Extended Field):** Duration 3 turns.\r\n    * **Evo B (Punishing Field):** Enemies entering zone take 10 damage",
    "effects": [
      "Create 3x3 zone for 2 turns: Enemies inside have all glyphs cost +2 KP."
    ],
    "keywords": [],
    "powerScore": 50
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_013",
    "name": "Cognitive Overload",
    "engine": "character_analysis",
    "category": "Mental Damage",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Deal 20 damage. If target has 3+ debuffs, also apply [Stun] (1 turn).\r\n    * **Evo A (Severe Overload):** Damage increased to 35.\r\n    * **Evo B (Cascading Overload):** Stun threshold reduced to 2 ",
    "effects": [
      "Deal 20 damage. If target has 3+ debuffs, also apply [Stun] (1 turn)."
    ],
    "keywords": [
      "Stun"
    ],
    "powerScore": 51
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_014",
    "name": "Expose Core",
    "engine": "character_analysis",
    "category": "Deep Analyze",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** [Expose] target's primary resource. Consuming it refreshes 2 cooldowns instead of 1.\r\n    * **Evo A (Perfect Exposure):** Refreshes 3 cooldowns.\r\n    * **Evo B (Multi-Exposure):** Can expose 2 diff",
    "effects": [
      "[Expose] target's primary resource. Consuming it refreshes 2 cooldowns instead of 1."
    ],
    "keywords": [
      "Expose"
    ],
    "powerScore": 50
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_015",
    "name": "Lockdown Protocol",
    "engine": "character_analysis",
    "category": "Ultimate Control",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Apply [Silence] + [Stun] for 1 turn, then [Vulnerable] for 2 turns. Costs 25 Insight.\r\n    * **Evo A (Extended Protocol):** All durations +1 turn.\r\n    * **Evo B (Economic Protocol):** Cost reduced",
    "effects": [
      "Apply [Silence] + [Stun] for 1 turn, then [Vulnerable] for 2 turns. Costs 25 Insight."
    ],
    "keywords": [
      "Silence",
      "Stun",
      "Vulnerable"
    ],
    "powerScore": 78
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_016",
    "name": "Pattern Recognition",
    "engine": "character_analysis",
    "category": "Insight Generation",
    "tier": 1,
    "cost": {
      "kp": 2
    },
    "cooldown": 1,
    "unlocked": true,
    "description": "** For 3 turns, each enemy action grants you 1 Insight.\r\n    * **Evo A (Deep Recognition):** Gain 2 Insight per action.\r\n    * **Evo B (Extended Recognition):** Duration 4 turns.",
    "effects": [
      "For 3 turns, each enemy action grants you 1 Insight."
    ],
    "keywords": [],
    "powerScore": 25
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_017",
    "name": "Disruptor Spike",
    "engine": "character_analysis",
    "category": "Interrupt",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Interrupt target's current action and apply [Silence] (1 turn). Once per 3 turns.\r\n    * **Evo A (Multi-Disrupt):** Can interrupt 2 targets.\r\n    * **Evo B (Punishing Disrupt):** Also deal 20 damag",
    "effects": [
      "Interrupt target's current action and apply [Silence] (1 turn). Once per 3 turns."
    ],
    "keywords": [
      "Silence"
    ],
    "powerScore": 49
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_018",
    "name": "Judicial Verdict",
    "engine": "character_analysis",
    "category": "Execution",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** If target has 4+ debuffs, deal 60 damage and [Stun] (1 turn). Once per duel.\r\n    * **Evo A (Harsh Verdict):** Damage increased to 90.\r\n    * **Evo B (Merciful Verdict):** Usable at 3 debuffs inste",
    "effects": [
      "If target has 4+ debuffs, deal 60 damage and [Stun] (1 turn). Once per duel."
    ],
    "keywords": [
      "Stun"
    ],
    "powerScore": 73
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_019",
    "name": "Control Amplifier",
    "engine": "character_analysis",
    "category": "Debuff Enhancement",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** For 2 turns, all [Silence] and [Stun] you apply have +1 turn duration.\r\n    * **Evo A (Perfect Amplification):** +2 turns duration instead.\r\n    * **Evo B (Extended Amplifier):** Duration 3 turns.",
    "effects": [
      "For 2 turns, all [Silence] and [Stun] you apply have +1 turn duration."
    ],
    "keywords": [
      "Silence",
      "Stun"
    ],
    "powerScore": 52
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_020",
    "name": "Absolute Authority",
    "engine": "character_analysis",
    "category": "Master Control",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Apply [Silence] + [Vulnerable] + [Stun] to target for 1 turn each. Costs 30 Insight. Once per duel.\r\n    * **Evo A (Extended Authority):** All effects 2 turns.\r\n    * **Evo B (Aura Authority):** Af",
    "effects": [
      "Apply [Silence] + [Vulnerable] + [Stun] to target for 1 turn each. Costs 30 Insight. Once per duel."
    ],
    "keywords": [
      "Silence",
      "Vulnerable",
      "Stun"
    ],
    "powerScore": 80
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_021",
    "name": "Quick Study",
    "engine": "character_analysis",
    "category": "Fast Analyze",
    "tier": 0,
    "cost": {
      "kp": 1
    },
    "cooldown": 1,
    "unlocked": true,
    "description": "** [Analyze] target, gain 1 Insight. 0 cooldown.\r\n    * **Evo A (Efficient Study):** Gain 2 Insight instead.\r\n    * **Evo B (Multi-Study):** Can analyze 2 targets.",
    "effects": [
      "[Analyze] target, gain 1 Insight. 0 cooldown."
    ],
    "keywords": [
      "Analyze"
    ],
    "powerScore": 5
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_022",
    "name": "Tempo Mark",
    "engine": "character_analysis",
    "category": "Speed Mark",
    "tier": 1,
    "cost": {
      "kp": 1
    },
    "cooldown": 1,
    "unlocked": true,
    "description": "** [Mark] target. Your next action against them has 0 cooldown.\r\n    * **Evo A (Double Tempo):** Next 2 actions have 0 cooldown.\r\n    * **Evo B (Insight Tempo):** Also gain 2 Insight.",
    "effects": [
      "[Mark] target. Your next action against them has 0 cooldown."
    ],
    "keywords": [
      "Mark"
    ],
    "powerScore": 26
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_023",
    "name": "Rapid Assessment",
    "engine": "character_analysis",
    "category": "Quick Insight",
    "tier": 1,
    "cost": {
      "kp": 2
    },
    "cooldown": 1,
    "unlocked": true,
    "description": "** Gain 3 Insight instantly. Cooldown: 2 turns.\r\n    * **Evo A (Deep Assessment):** Gain 5 Insight instead.\r\n    * **Evo B (Frequent Assessment):** Cooldown reduced to 1 turn.",
    "effects": [
      "Gain 3 Insight instantly. Cooldown: 2 turns."
    ],
    "keywords": [],
    "powerScore": 25
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_024",
    "name": "Momentum Shift",
    "engine": "character_analysis",
    "category": "Cooldown Refresh",
    "tier": 1,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Refresh 1 cooldown immediately. Costs 10 Insight.\r\n    * **Evo A (Mass Refresh):** Refresh 2 cooldowns.\r\n    * **Evo B (Economic Refresh):** Cost reduced to 8 Insight.",
    "effects": [
      "Refresh 1 cooldown immediately. Costs 10 Insight."
    ],
    "keywords": [],
    "powerScore": 26
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_025",
    "name": "Prediction Engine",
    "engine": "character_analysis",
    "category": "Forecast",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Predict enemy's next action. If correct, gain 5 Insight and reduce your next glyph cost by 2 KP.\r\n    * **Evo A (Perfect Prediction):** Gain 8 Insight instead.\r\n    * **Evo B (Extended Prediction):",
    "effects": [
      "Predict enemy's next action. If correct, gain 5 Insight and reduce your next glyph cost by 2 KP."
    ],
    "keywords": [],
    "powerScore": 47
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_026",
    "name": "Tempo Steal",
    "engine": "character_analysis",
    "category": "Resource Drain",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Target loses 2 KP, you gain 2 Insight.\r\n    * **Evo A (Heavy Steal):** Target loses 4 KP.\r\n    * **Evo B (Efficient Steal):** You gain 4 Insight.",
    "effects": [
      "Target loses 2 KP, you gain 2 Insight."
    ],
    "keywords": [],
    "powerScore": 48
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_027",
    "name": "Clockwork Precision",
    "engine": "character_analysis",
    "category": "Timing Optimization",
    "tier": 1,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** For 2 turns, your first glyph each turn has -1 cooldown.\r\n    * **Evo A (Perfect Timing):** -2 cooldown instead.\r\n    * **Evo B (Extended Timing):** Duration 3 turns.",
    "effects": [
      "For 2 turns, your first glyph each turn has -1 cooldown."
    ],
    "keywords": [],
    "powerScore": 26
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_028",
    "name": "Insight Burst",
    "engine": "character_analysis",
    "category": "Resource Spike",
    "tier": 1,
    "cost": {
      "kp": 2
    },
    "cooldown": 1,
    "unlocked": true,
    "description": "** Convert 3 KP to 6 Insight.\r\n    * **Evo A (Efficient Burst):** 3 KP → 9 Insight.\r\n    * **Evo B (Mass Burst):** 5 KP → 12 Insight.",
    "effects": [
      "Convert 3 KP to 6 Insight."
    ],
    "keywords": [],
    "powerScore": 25
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_029",
    "name": "Window Detection",
    "engine": "character_analysis",
    "category": "Opportunity Sense",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** When target is [Vulnerable], your next [Strike] has 0 cooldown and deals +30% damage.\r\n    * **Evo A (Extended Window):** +50% damage instead.\r\n    * **Evo B (Multi-Window):** Can trigger twice per",
    "effects": [
      "When target is [Vulnerable], your next [Strike] has 0 cooldown and deals +30% damage."
    ],
    "keywords": [
      "Vulnerable",
      "Strike"
    ],
    "powerScore": 51
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_030",
    "name": "Adaptive Rhythm",
    "engine": "character_analysis",
    "category": "Flow State",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** For 3 turns, each [Analyze] you cast reduces all other cooldowns by 1.\r\n    * **Evo A (Perfect Rhythm):** Reduces by 2 instead.\r\n    * **Evo B (Extended Rhythm):** Duration 4 turns.",
    "effects": [
      "For 3 turns, each [Analyze] you cast reduces all other cooldowns by 1."
    ],
    "keywords": [
      "Analyze"
    ],
    "powerScore": 51
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_031",
    "name": "Blitz Analysis",
    "engine": "character_analysis",
    "category": "Speed Scan",
    "tier": 1,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** [Analyze] all enemies simultaneously. Gain 1 Insight per target.\r\n    * **Evo A (Deep Blitz):** Gain 2 Insight per target.\r\n    * **Evo B (Economic Blitz):** Cost -2 KP.",
    "effects": [
      "[Analyze] all enemies simultaneously. Gain 1 Insight per target."
    ],
    "keywords": [
      "Analyze"
    ],
    "powerScore": 28
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_032",
    "name": "Cascade Refresh",
    "engine": "character_analysis",
    "category": "Chain Reset",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** When you consume [Expose], also refresh an additional random cooldown.\r\n    * **Evo A (Perfect Cascade):** Refresh 2 additional cooldowns.\r\n    * **Evo B (Selective Cascade):** Choose which cooldow",
    "effects": [
      "When you consume [Expose], also refresh an additional random cooldown."
    ],
    "keywords": [
      "Expose"
    ],
    "powerScore": 50
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_033",
    "name": "Velocity Protocol",
    "engine": "character_analysis",
    "category": "Speed Boost",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** For 2 turns, all your glyphs have -1 cooldown (minimum 0).\r\n    * **Evo A (Perfect Velocity):** -2 cooldown instead.\r\n    * **Evo B (Extended Velocity):** Duration 3 turns.",
    "effects": [
      "For 2 turns, all your glyphs have -1 cooldown (minimum 0)."
    ],
    "keywords": [],
    "powerScore": 47
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_034",
    "name": "Opportunist Strike",
    "engine": "character_analysis",
    "category": "Combo Damage",
    "tier": 1,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Deal 25 damage. If target is [Marked], deal 40 instead and gain 3 Insight.\r\n    * **Evo A (Perfect Strike):** Damage 35/60 instead.\r\n    * **Evo B (Efficient Strike):** Cost -1 KP.",
    "effects": [
      "Deal 25 damage. If target is [Marked], deal 40 instead and gain 3 Insight."
    ],
    "keywords": [
      "Marked"
    ],
    "powerScore": 28
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_035",
    "name": "Temporal Advantage",
    "engine": "character_analysis",
    "category": "Turn Manipulation",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Take an additional mini-turn immediately (can only use 1 glyph). Costs 15 Insight.\r\n    * **Evo A (Extended Turn):** Can use 2 glyphs.\r\n    * **Evo B (Economic Turn):** Cost 12 Insight.",
    "effects": [
      "Take an additional mini-turn immediately (can only use 1 glyph). Costs 15 Insight."
    ],
    "keywords": [],
    "powerScore": 50
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_036",
    "name": "Insight Overflow",
    "engine": "character_analysis",
    "category": "Resource Conversion",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** If you have 20+ Insight, convert 10 Insight to refresh all cooldowns. Once per 4 turns.\r\n    * **Evo A (Efficient Overflow):** Cost only 8 Insight.\r\n    * **Evo B (Frequent Overflow):** Cooldown re",
    "effects": [
      "If you have 20+ Insight, convert 10 Insight to refresh all cooldowns. Once per 4 turns."
    ],
    "keywords": [],
    "powerScore": 48
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_037",
    "name": "Perfect Timing",
    "engine": "character_analysis",
    "category": "Precision Strike",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Deal 30 damage. If used immediately after [Analyze], deal 50 instead.\r\n    * **Evo A (Massive Timing):** Damage 40/70 instead.\r\n    * **Evo B (Insight Timing):** Also gain 3 Insight on combo.",
    "effects": [
      "Deal 30 damage. If used immediately after [Analyze], deal 50 instead."
    ],
    "keywords": [
      "Analyze"
    ],
    "powerScore": 49
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_038",
    "name": "Momentum Chain",
    "engine": "character_analysis",
    "category": "Combo System",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** For 3 turns, each glyph you cast reduces the next glyph's cost by 1 KP (stacks up to 3).\r\n    * **Evo A (Perfect Chain):** Reduces by 2 KP per cast.\r\n    * **Evo B (Extended Chain):** Duration 4 tu",
    "effects": [
      "For 3 turns, each glyph you cast reduces the next glyph's cost by 1 KP (stacks up to 3)."
    ],
    "keywords": [],
    "powerScore": 49
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_039",
    "name": "Cooldown Mastery",
    "engine": "character_analysis",
    "category": "Ultimate Tempo",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** For 2 turns, all your glyphs have 0 cooldown. Costs 25 Insight. Once per duel.\r\n    * **Evo A (Extended Mastery):** Duration 3 turns.\r\n    * **Evo B (Economic Mastery):** Cost 20 Insight.",
    "effects": [
      "For 2 turns, all your glyphs have 0 cooldown. Costs 25 Insight. Once per duel."
    ],
    "keywords": [],
    "powerScore": 71
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_040",
    "name": "Perpetual Motion",
    "engine": "character_analysis",
    "category": "Sustained Flow",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Passive: Each time you cast 3 glyphs in a turn, gain 5 Insight and refresh 1 random cooldown.\r\n    * **Evo A (Perfect Motion):** Gain 8 Insight instead.\r\n    * **Evo B (Selective Motion):** Choose ",
    "effects": [
      "Passive: Each time you cast 3 glyphs in a turn, gain 5 Insight and refresh 1 random cooldown."
    ],
    "keywords": [],
    "powerScore": 72
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_041",
    "name": "Cost Spike",
    "engine": "character_analysis",
    "category": "Economic Warfare",
    "tier": 1,
    "cost": {
      "kp": 2
    },
    "cooldown": 1,
    "unlocked": true,
    "description": "** Target's next glyph costs +2 KP.\r\n    * **Evo A (Heavy Spike):** +4 KP instead.\r\n    * **Evo B (Multi-Spike):** Affects their next 2 glyphs.",
    "effects": [
      "Target's next glyph costs +2 KP."
    ],
    "keywords": [],
    "powerScore": 25
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_042",
    "name": "Resource Drain",
    "engine": "character_analysis",
    "category": "KP Theft",
    "tier": 1,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Target loses 3 KP. You gain 2 Insight.\r\n    * **Evo A (Deep Drain):** Target loses 5 KP.\r\n    * **Evo B (Efficient Drain):** You gain 4 Insight.",
    "effects": [
      "Target loses 3 KP. You gain 2 Insight."
    ],
    "keywords": [],
    "powerScore": 26
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_043",
    "name": "Hand Disruption",
    "engine": "character_analysis",
    "category": "Deck Interference",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Target discards 1 random card. Gain 3 Insight.\r\n    * **Evo A (Mass Disruption):** Discard 2 cards.\r\n    * **Evo B (Tactical Disruption):** You choose which card to discard.",
    "effects": [
      "Target discards 1 random card. Gain 3 Insight."
    ],
    "keywords": [],
    "powerScore": 47
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_044",
    "name": "Cooldown Inflation",
    "engine": "character_analysis",
    "category": "Delay",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Increase target's current cooldowns by 1 turn each.\r\n    * **Evo A (Heavy Inflation):** Increase by 2 turns.\r\n    * **Evo B (Selective Inflation):** Choose which cooldown to inflate.",
    "effects": [
      "Increase target's current cooldowns by 1 turn each."
    ],
    "keywords": [],
    "powerScore": 48
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_045",
    "name": "Engine Sabotage",
    "engine": "character_analysis",
    "category": "Subsystem Damage",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Target's primary engine has all glyphs cost +1 KP for 2 turns.\r\n    * **Evo A (Deep Sabotage):** +2 KP instead.\r\n    * **Evo B (Extended Sabotage):** Duration 3 turns.",
    "effects": [
      "Target's primary engine has all glyphs cost +1 KP for 2 turns."
    ],
    "keywords": [],
    "powerScore": 49
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_046",
    "name": "Memory Scramble",
    "engine": "character_analysis",
    "category": "Insight Theft",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Target loses 5 Insight. If they don't have enough, take 10 damage per missing Insight.\r\n    * **Evo A (Deep Scramble):** Target loses 8 Insight.\r\n    * **Evo B (Punishing Scramble):** Damage increa",
    "effects": [
      "Target loses 5 Insight. If they don't have enough, take 10 damage per missing Insight."
    ],
    "keywords": [],
    "powerScore": 47
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_047",
    "name": "Draw Denial",
    "engine": "character_analysis",
    "category": "Deck Lock",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Target skips their next draw. You draw 1 additional card.\r\n    * **Evo A (Extended Denial):** They skip 2 draws.\r\n    * **Evo B (Insight Denial):** Also gain 4 Insight.",
    "effects": [
      "Target skips their next draw. You draw 1 additional card."
    ],
    "keywords": [],
    "powerScore": 48
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_048",
    "name": "Trap Card",
    "engine": "character_analysis",
    "category": "Reactive Sabotage",
    "tier": 1,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Set a trap. When target uses their next glyph, it costs +3 KP and deals 15 damage to them.\r\n    * **Evo A (Heavy Trap):** Damage increased to 30.\r\n    * **Evo B (Multi-Trap):** Affects their next 2",
    "effects": [
      "Set a trap. When target uses their next glyph, it costs +3 KP and deals 15 damage to them."
    ],
    "keywords": [],
    "powerScore": 26
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_049",
    "name": "Economic Collapse",
    "engine": "character_analysis",
    "category": "Mass Drain",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** All enemies lose 2 KP. You gain 3 Insight per enemy affected.\r\n    * **Evo A (Total Collapse):** Enemies lose 4 KP.\r\n    * **Evo B (Efficient Collapse):** You gain 5 Insight per enemy.",
    "effects": [
      "All enemies lose 2 KP. You gain 3 Insight per enemy affected."
    ],
    "keywords": [],
    "powerScore": 50
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_050",
    "name": "Bandwidth Leak",
    "engine": "character_analysis",
    "category": "Resource Corruption",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Target loses 3 Bandwidth. If they don't have enough, apply [Vulnerable] (2 turns).\r\n    * **Evo A (Deep Leak):** Target loses 5 Bandwidth.\r\n    * **Evo B (Punishing Leak):** [Vulnerable] duration 3",
    "effects": [
      "Target loses 3 Bandwidth. If they don't have enough, apply [Vulnerable] (2 turns)."
    ],
    "keywords": [
      "Vulnerable",
      "Vulnerable"
    ],
    "powerScore": 51
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_051",
    "name": "Plan Disruption",
    "engine": "character_analysis",
    "category": "Strategy Interference",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Target must reveal their next planned action and it costs +2 KP. Gain 3 Insight.\r\n    * **Evo A (Deep Disruption):** Reveal their next 2 actions.\r\n    * **Evo B (Heavy Disruption):** Cost increase ",
    "effects": [
      "Target must reveal their next planned action and it costs +2 KP. Gain 3 Insight."
    ],
    "keywords": [],
    "powerScore": 48
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_052",
    "name": "Cascade Corruption",
    "engine": "character_analysis",
    "category": "Chain Disruption",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Apply [Expose]. While active, each glyph target uses costs +1 KP.\r\n    * **Evo A (Deep Corruption):** +2 KP instead.\r\n    * **Evo B (Extended Corruption):** [Expose] lasts 3 turns.",
    "effects": [
      "Apply [Expose]. While active, each glyph target uses costs +1 KP."
    ],
    "keywords": [
      "Expose",
      "Expose"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_053",
    "name": "Resource Lock",
    "engine": "character_analysis",
    "category": "Anti-Economy",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** For 2 turns, target cannot gain KP from any source.\r\n    * **Evo A (Perfect Lock):** Duration 3 turns.\r\n    * **Evo B (Multi-Lock):** Affects 2 enemies.",
    "effects": [
      "For 2 turns, target cannot gain KP from any source."
    ],
    "keywords": [],
    "powerScore": 50
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_054",
    "name": "Deck Poison",
    "engine": "character_analysis",
    "category": "Long-term Sabotage",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** For 3 turns, target's first glyph each turn costs +2 KP.\r\n    * **Evo A (Deep Poison):** +3 KP instead.\r\n    * **Evo B (Extended Poison):** Duration 4 turns.",
    "effects": [
      "For 3 turns, target's first glyph each turn costs +2 KP."
    ],
    "keywords": [],
    "powerScore": 48
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_055",
    "name": "Priority Steal",
    "engine": "character_analysis",
    "category": "Turn Order",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** You act before target next turn, regardless of initiative.\r\n    * **Evo A (Mass Steal):** Affects 2 enemies.\r\n    * **Evo B (Insight Steal):** Also gain 4 Insight.",
    "effects": [
      "You act before target next turn, regardless of initiative."
    ],
    "keywords": [],
    "powerScore": 47
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_056",
    "name": "System Overload",
    "engine": "character_analysis",
    "category": "Critical Disruption",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Target's next 3 glyphs each cost +2 KP and have +1 cooldown. Costs 15 Insight.\r\n    * **Evo A (Perfect Overload):** +3 KP and +2 cooldown.\r\n    * **Evo B (Extended Overload):** Affects next 4 glyph",
    "effects": [
      "Target's next 3 glyphs each cost +2 KP and have +1 cooldown. Costs 15 Insight."
    ],
    "keywords": [],
    "powerScore": 71
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_057",
    "name": "Mana Burn",
    "engine": "character_analysis",
    "category": "Anti-Resource",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Target loses 5 KP and takes 10 damage per KP lost.\r\n    * **Evo A (Deep Burn):** Damage increased to 15 per KP.\r\n    * **Evo B (Mass Burn):** Affects all enemies.",
    "effects": [
      "Target loses 5 KP and takes 10 damage per KP lost."
    ],
    "keywords": [],
    "powerScore": 49
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_058",
    "name": "Denial Field",
    "engine": "character_analysis",
    "category": "Zone Sabotage",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Create 3x3 zone for 2 turns: Enemies inside lose 1 KP at start of their turn.\r\n    * **Evo A (Heavy Denial):** Lose 2 KP instead.\r\n    * **Evo B (Extended Denial):** Duration 3 turns.",
    "effects": [
      "Create 3x3 zone for 2 turns: Enemies inside lose 1 KP at start of their turn."
    ],
    "keywords": [],
    "powerScore": 50
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_059",
    "name": "Total Disruption",
    "engine": "character_analysis",
    "category": "Ultimate Sabotage",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Target loses 5 KP, discards 1 card, and all cooldowns increase by 1. Costs 20 Insight. Once per duel.\r\n    * **Evo A (Perfect Disruption):** Discard 2 cards and cooldowns +2.\r\n    * **Evo B (Econom",
    "effects": [
      "Target loses 5 KP, discards 1 card, and all cooldowns increase by 1. Costs 20 Insight. Once per duel."
    ],
    "keywords": [],
    "powerScore": 72
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_060",
    "name": "Chaos Protocol",
    "engine": "character_analysis",
    "category": "Mass Interference",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** All enemies' next glyph costs +3 KP. You gain 2 Insight per enemy affected. Once per duel.\r\n    * **Evo A (Perfect Chaos):** +5 KP instead.\r\n    * **Evo B (Extended Chaos):** Affects their next 2 g",
    "effects": [
      "All enemies' next glyph costs +3 KP. You gain 2 Insight per enemy affected. Once per duel."
    ],
    "keywords": [],
    "powerScore": 73
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_061",
    "name": "Defensive Analysis",
    "engine": "character_analysis",
    "category": "Analyze + Shield",
    "tier": 1,
    "cost": {
      "kp": 1
    },
    "cooldown": 1,
    "unlocked": true,
    "description": "** [Analyze] target and gain 2 Insight. Also grant yourself 10 Shield.\r\n    * **Evo A (Deep Defense):** Shield increased to 15.\r\n    * **Evo B (Multi-Defense):** Also grant ally 10 Shield.",
    "effects": [
      "[Analyze] target and gain 2 Insight. Also grant yourself 10 Shield."
    ],
    "keywords": [
      "Analyze"
    ],
    "powerScore": 26
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_062",
    "name": "Counter Mark",
    "engine": "character_analysis",
    "category": "Reactive Mark",
    "tier": 1,
    "cost": {
      "kp": 2
    },
    "cooldown": 1,
    "unlocked": true,
    "description": "** When you take damage, automatically [Mark] the attacker. Cooldown: 2 turns.\r\n    * **Evo A (Perfect Counter):** Cooldown reduced to 1 turn.\r\n    * **Evo B (Aggressive Counter):** Also deal 10 damag",
    "effects": [
      "When you take damage, automatically [Mark] the attacker. Cooldown: 2 turns."
    ],
    "keywords": [
      "Mark"
    ],
    "powerScore": 27
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_063",
    "name": "Purifying Insight",
    "engine": "character_analysis",
    "category": "Cleanse + Insight",
    "tier": 1,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** [Cleanse] 1 debuff from yourself and gain 3 Insight.\r\n    * **Evo A (Deep Purge):** [Cleanse] 2 debuffs.\r\n    * **Evo B (Mass Purge):** Also cleanse 1 debuff from ally.",
    "effects": [
      "[Cleanse] 1 debuff from yourself and gain 3 Insight."
    ],
    "keywords": [
      "Cleanse",
      "Cleanse"
    ],
    "powerScore": 30
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_064",
    "name": "Retributive Analysis",
    "engine": "character_analysis",
    "category": "Counter-Attack",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** [Analyze] attacker when you take damage. Deal 20 damage back and gain 2 Insight.\r\n    * **Evo A (Heavy Retaliation):** Damage increased to 35.\r\n    * **Evo B (Efficient Retaliation):** Gain 4 Insig",
    "effects": [
      "[Analyze] attacker when you take damage. Deal 20 damage back and gain 2 Insight."
    ],
    "keywords": [
      "Analyze"
    ],
    "powerScore": 49
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_065",
    "name": "Balanced Approach",
    "engine": "character_analysis",
    "category": "Hybrid Action",
    "tier": 1,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Deal 20 damage and grant yourself 15 Shield.\r\n    * **Evo A (Offensive Balance):** Damage increased to 35.\r\n    * **Evo B (Defensive Balance):** Shield increased to 25.",
    "effects": [
      "Deal 20 damage and grant yourself 15 Shield."
    ],
    "keywords": [],
    "powerScore": 26
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_066",
    "name": "Protective Exposure",
    "engine": "character_analysis",
    "category": "Expose + Shield",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** [Expose] target's weakness. While active, you have +20 Shield.\r\n    * **Evo A (Perfect Protection):** Shield increased to 35.\r\n    * **Evo B (Extended Protection):** [Expose] lasts 3 turns.",
    "effects": [
      "[Expose] target's weakness. While active, you have +20 Shield."
    ],
    "keywords": [
      "Expose",
      "Expose"
    ],
    "powerScore": 52
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_067",
    "name": "Judgment Strike",
    "engine": "character_analysis",
    "category": "Damage + Control",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Deal 25 damage and apply [Vulnerable] (1 turn).\r\n    * **Evo A (Harsh Judgment):** Damage increased to 40.\r\n    * **Evo B (Extended Judgment):** [Vulnerable] duration 2 turns.",
    "effects": [
      "Deal 25 damage and apply [Vulnerable] (1 turn)."
    ],
    "keywords": [
      "Vulnerable",
      "Vulnerable"
    ],
    "powerScore": 51
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_068",
    "name": "Tactical Cleanse",
    "engine": "character_analysis",
    "category": "Targeted Purge",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** [Cleanse] 1 debuff from target ally. If successful, gain 3 Insight.\r\n    * **Evo A (Mass Cleanse):** Can cleanse from 2 allies.\r\n    * **Evo B (Deep Cleanse):** [Cleanse] 2 debuffs instead.",
    "effects": [
      "[Cleanse] 1 debuff from target ally. If successful, gain 3 Insight."
    ],
    "keywords": [
      "Cleanse",
      "Cleanse"
    ],
    "powerScore": 51
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_069",
    "name": "Shield Analysis",
    "engine": "character_analysis",
    "category": "Defensive Insight",
    "tier": 1,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Grant 20 Shield to yourself or ally. If they're attacked while shielded, gain 3 Insight.\r\n    * **Evo A (Heavy Shield):** Shield increased to 30.\r\n    * **Evo B (Efficient Insight):** Gain 5 Insigh",
    "effects": [
      "Grant 20 Shield to yourself or ally. If they're attacked while shielded, gain 3 Insight."
    ],
    "keywords": [],
    "powerScore": 26
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_070",
    "name": "Reactive Expertise",
    "engine": "character_analysis",
    "category": "Adaptive Defense",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** For 2 turns, when you [Analyze], also gain 10 Shield.\r\n    * **Evo A (Perfect Expertise):** Shield increased to 20.\r\n    * **Evo B (Extended Expertise):** Duration 3 turns.",
    "effects": [
      "For 2 turns, when you [Analyze], also gain 10 Shield."
    ],
    "keywords": [
      "Analyze"
    ],
    "powerScore": 50
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_071",
    "name": "Equilibrium",
    "engine": "character_analysis",
    "category": "Balance State",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** For 2 turns, all your offensive glyphs also grant 10 Shield, all defensive glyphs deal 15 damage.\r\n    * **Evo A (Perfect Balance):** Shield/damage increased to 15/25.\r\n    * **Evo B (Extended Bala",
    "effects": [
      "For 2 turns, all your offensive glyphs also grant 10 Shield, all defensive glyphs deal 15 damage."
    ],
    "keywords": [],
    "powerScore": 49
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_072",
    "name": "Justice Bolt",
    "engine": "character_analysis",
    "category": "Punishment",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Deal 30 damage. If target has 2+ debuffs, deal 50 instead.\r\n    * **Evo A (Divine Justice):** Damage 45/75 instead.\r\n    * **Evo B (Efficient Justice):** Cost -1 KP.",
    "effects": [
      "Deal 30 damage. If target has 2+ debuffs, deal 50 instead."
    ],
    "keywords": [],
    "powerScore": 48
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_073",
    "name": "Protective Mark",
    "engine": "character_analysis",
    "category": "Defensive Tag",
    "tier": 1,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** [Mark] ally. Next attack against them is reduced by 50% and grants you 3 Insight.\r\n    * **Evo A (Perfect Protection):** Reduced by 75%.\r\n    * **Evo B (Multi-Protection):** Can mark 2 allies.",
    "effects": [
      "[Mark] ally. Next attack against them is reduced by 50% and grants you 3 Insight."
    ],
    "keywords": [
      "Mark"
    ],
    "powerScore": 28
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_074",
    "name": "Insight Barrier",
    "engine": "character_analysis",
    "category": "Resource Shield",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Spend 10 Insight to grant 30 Shield to yourself or ally.\r\n    * **Evo A (Efficient Barrier):** Cost only 8 Insight.\r\n    * **Evo B (Perfect Barrier):** Shield increased to 45.",
    "effects": [
      "Spend 10 Insight to grant 30 Shield to yourself or ally."
    ],
    "keywords": [],
    "powerScore": 47
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_075",
    "name": "Righteous Wrath",
    "engine": "character_analysis",
    "category": "Cleanse + Damage",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** [Cleanse] all debuffs from yourself. Deal 10 damage per debuff removed.\r\n    * **Evo A (Explosive Wrath):** Damage increased to 20 per debuff.\r\n    * **Evo B (Spreading Wrath):** Damage affects all",
    "effects": [
      "[Cleanse] all debuffs from yourself. Deal 10 damage per debuff removed."
    ],
    "keywords": [
      "Cleanse"
    ],
    "powerScore": 50
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_076",
    "name": "Tactical Intervention",
    "engine": "character_analysis",
    "category": "Emergency Response",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** When ally drops below 30% Ojas, automatically grant them 20 Shield and [Analyze] attacker. Once per 3 turns.\r\n    * **Evo A (Perfect Intervention):** Shield increased to 35.\r\n    * **Evo B (Frequen",
    "effects": [
      "When ally drops below 30% Ojas, automatically grant them 20 Shield and [Analyze] attacker. Once per 3 turns."
    ],
    "keywords": [
      "Analyze"
    ],
    "powerScore": 51
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_077",
    "name": "Measured Response",
    "engine": "character_analysis",
    "category": "Scaling Defense",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Deal damage equal to your current Shield (consumes Shield). Gain 2 Insight per 10 Shield consumed.\r\n    * **Evo A (Efficient Response):** Keep 50% of Shield.\r\n    * **Evo B (Perfect Response):** Ga",
    "effects": [
      "Deal damage equal to your current Shield (consumes Shield). Gain 2 Insight per 10 Shield consumed."
    ],
    "keywords": [],
    "powerScore": 48
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_078",
    "name": "Arbiter's Decree",
    "engine": "character_analysis",
    "category": "Ultimate Balance",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Grant 40 Shield to all allies and apply [Vulnerable] to all enemies (2 turns). Costs 25 Insight. Once per duel.\r\n    * **Evo A (Divine Decree):** Shield 60, [Vulnerable] 3 turns.\r\n    * **Evo B (Ec",
    "effects": [
      "Grant 40 Shield to all allies and apply [Vulnerable] to all enemies (2 turns). Costs 25 Insight. Once per duel."
    ],
    "keywords": [
      "Vulnerable",
      "Vulnerable"
    ],
    "powerScore": 76
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_079",
    "name": "Sword and Shield",
    "engine": "character_analysis",
    "category": "Perfect Hybrid",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** For 3 turns, all your glyphs deal +10 damage and grant +10 Shield simultaneously.\r\n    * **Evo A (Perfect Harmony):** +20 damage and +20 Shield.\r\n    * **Evo B (Extended Harmony):** Duration 4 turn",
    "effects": [
      "For 3 turns, all your glyphs deal +10 damage and grant +10 Shield simultaneously."
    ],
    "keywords": [],
    "powerScore": 50
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_080",
    "name": "Final Judgment",
    "engine": "character_analysis",
    "category": "Ultimate Execute",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** If target has 5+ debuffs, deal 100 damage and [Stun] (2 turns). Otherwise deal 30 damage. Once per duel.\r\n    * **Evo A (Absolute Judgment):** Threshold reduced to 4 debuffs.\r\n    * **Evo B (Mercif",
    "effects": [
      "If target has 5+ debuffs, deal 100 damage and [Stun] (2 turns). Otherwise deal 30 damage. Once per duel."
    ],
    "keywords": [
      "Stun"
    ],
    "powerScore": 75
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_081",
    "name": "Memory Archive",
    "engine": "character_analysis",
    "category": "Pattern Storage",
    "tier": 1,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Store current enemy pattern. Next duel against same opponent, start with 10 Insight.\r\n    * **Evo A (Deep Archive):** Start with 15 Insight.\r\n    * **Evo B (Multi-Archive):** Can store 3 different ",
    "effects": [
      "Store current enemy pattern. Next duel against same opponent, start with 10 Insight."
    ],
    "keywords": [],
    "powerScore": 26
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_082",
    "name": "Tactical Retreat",
    "engine": "character_analysis",
    "category": "Defensive Reposition",
    "tier": 1,
    "cost": {
      "kp": 2
    },
    "cooldown": 1,
    "unlocked": true,
    "description": "** Gain 20 Shield and move to a safe position. [Cleanse] 1 debuff.\r\n    * **Evo A (Perfect Retreat):** Shield increased to 35.\r\n    * **Evo B (Cleansing Retreat):** [Cleanse] 2 debuffs.",
    "effects": [
      "Gain 20 Shield and move to a safe position. [Cleanse] 1 debuff."
    ],
    "keywords": [
      "Cleanse",
      "Cleanse"
    ],
    "powerScore": 29
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_083",
    "name": "Information Broker",
    "engine": "character_analysis",
    "category": "Insight Trading",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Spend 15 Insight to draw 2 cards and gain 2 KP.\r\n    * **Evo A (Efficient Broker):** Cost only 12 Insight.\r\n    * **Evo B (Generous Broker):** Draw 3 cards instead.",
    "effects": [
      "Spend 15 Insight to draw 2 cards and gain 2 KP."
    ],
    "keywords": [],
    "powerScore": 47
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_084",
    "name": "Adaptive Learning",
    "engine": "character_analysis",
    "category": "Evolution",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Passive: Each time enemy uses the same glyph twice, gain 2 Insight and reduce your next glyph cost by 1 KP.\r\n    * **Evo A (Deep Learning):** Gain 4 Insight.\r\n    * **Evo B (Perfect Learning):** Co",
    "effects": [
      "Passive: Each time enemy uses the same glyph twice, gain 2 Insight and reduce your next glyph cost by 1 KP."
    ],
    "keywords": [],
    "powerScore": 48
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_085",
    "name": "Field Notes",
    "engine": "character_analysis",
    "category": "Documentation",
    "tier": 1,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** At end of duel, gain bonus rewards based on Insight generated (1 reward per 10 Insight).\r\n    * **Evo A (Detailed Notes):** 1 reward per 8 Insight.\r\n    * **Evo B (Perfect Notes):** Also gain bonus",
    "effects": [
      "At end of duel, gain bonus rewards based on Insight generated (1 reward per 10 Insight)."
    ],
    "keywords": [],
    "powerScore": 26
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_086",
    "name": "Quick Thinking",
    "engine": "character_analysis",
    "category": "Emergency Insight",
    "tier": 1,
    "cost": {
      "kp": 1
    },
    "cooldown": 1,
    "unlocked": true,
    "description": "** When you drop below 30% Ojas, instantly gain 8 Insight. Once per duel.\r\n    * **Evo A (Perfect Thinking):** Gain 12 Insight.\r\n    * **Evo B (Frequent Thinking):** Usable twice per duel.",
    "effects": [
      "When you drop below 30% Ojas, instantly gain 8 Insight. Once per duel."
    ],
    "keywords": [],
    "powerScore": 24
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_087",
    "name": "Tactical Flexibility",
    "engine": "character_analysis",
    "category": "Path Switching",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** For 2 turns, you can use glyphs from any Character Analysis path as if you mastered them.\r\n    * **Evo A (Perfect Flexibility):** Duration 3 turns.\r\n    * **Evo B (Economic Flexibility):** Cost -2 ",
    "effects": [
      "For 2 turns, you can use glyphs from any Character Analysis path as if you mastered them."
    ],
    "keywords": [],
    "powerScore": 49
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_088",
    "name": "Mirror Analysis",
    "engine": "character_analysis",
    "category": "Self-Reflection",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** [Analyze] yourself. Discover 1 weakness you can fix. Gain 5 Insight.\r\n    * **Evo A (Deep Reflection):** Gain 8 Insight.\r\n    * **Evo B (Healing Reflection):** Also [Heal] 15 Ojas.",
    "effects": [
      "[Analyze] yourself. Discover 1 weakness you can fix. Gain 5 Insight."
    ],
    "keywords": [
      "Analyze",
      "Heal"
    ],
    "powerScore": 51
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_089",
    "name": "Wisdom Archive",
    "engine": "character_analysis",
    "category": "Knowledge Store",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Convert 20 Insight to permanently increase your Insight cap by 5. Can be used multiple times.\r\n    * **Evo A (Efficient Archive):** Cost only 15 Insight.\r\n    * **Evo B (Perfect Archive):** Cap inc",
    "effects": [
      "Convert 20 Insight to permanently increase your Insight cap by 5. Can be used multiple times."
    ],
    "keywords": [],
    "powerScore": 50
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_090",
    "name": "Master Analyst",
    "engine": "character_analysis",
    "category": "Ultimate Passive",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Passive: Gain 1 Insight whenever any unit (ally or enemy) uses a glyph.\r\n    * **Evo A (Deep Analysis):** Gain 2 Insight instead.\r\n    * **Evo B (Selective Analysis):** Only tracks enemy actions bu",
    "effects": [
      "Passive: Gain 1 Insight whenever any unit (ally or enemy) uses a glyph."
    ],
    "keywords": [],
    "powerScore": 72
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_091",
    "name": "Predictive Matrix",
    "engine": "character_analysis",
    "category": "Multiverse Analysis",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Predict enemy's next 3 actions. For each correct prediction, gain 10 Insight and reduce their action costs by revealing the pattern. For each wrong prediction, lose 5 Insight.\r\n    * **Evo A (Perfe",
    "effects": [
      "** Predict enemy's next 3 actions. For each correct prediction, gain 10 Insight and reduce their act..."
    ],
    "keywords": [],
    "powerScore": 73
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_092",
    "name": "Conditional Trap Network",
    "engine": "character_analysis",
    "category": "Branching Logic",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Set 3 conditional traps with different triggers (e.g., \"if enemy uses healing\", \"if enemy plays offensive glyph\", \"if enemy gains resources\"). When triggered, apply custom effects you pre-selected.",
    "effects": [
      "** Set 3 conditional traps with different triggers (e.g., \"if enemy uses healing\", \"if enemy plays o..."
    ],
    "keywords": [],
    "powerScore": 74
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_093",
    "name": "Recursive Analysis Loop",
    "engine": "character_analysis",
    "category": "Self-Improving Scan",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** [Analyze] target. Each subsequent [Analyze] on the same target reveals deeper information layers (costs, cooldowns, hand, deck order, future draws) and grants +2 Insight per stack (max 5 stacks). R",
    "effects": [
      "** [Analyze] target. Each subsequent [Analyze] on the same target reveals deeper information layers ..."
    ],
    "keywords": [
      "Analyze",
      "Analyze"
    ],
    "powerScore": 76
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_094",
    "name": "Quantum Prediction",
    "engine": "character_analysis",
    "category": "Probability Manipulation",
    "tier": 4,
    "cost": {
      "kp": 4
    },
    "cooldown": 5,
    "unlocked": true,
    "description": "** Predict 2 possible enemy actions. Assign probability weights (e.g., 70%/30%). Gain Insight proportional to accuracy. If 90%+ accurate over 3 turns, refresh all cooldowns and gain 20 Insight.\r\n    *",
    "effects": [
      "** Predict 2 possible enemy actions. Assign probability weights (e.g., 70%/30%). Gain Insight propor..."
    ],
    "keywords": [],
    "powerScore": 95
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_095",
    "name": "Butterfly Effect",
    "engine": "character_analysis",
    "category": "Chaos Theory Warfare",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Make a small change now (spend 5 KP on nothing). After 3 turns, if you correctly predicted what cascading effects it would cause to enemy strategy, deal 50 damage and gain 15 Insight. If wrong, los",
    "effects": [
      "** Make a small change now (spend 5 KP on nothing). After 3 turns, if you correctly predicted what c..."
    ],
    "keywords": [],
    "powerScore": 73
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_096",
    "name": "Memory Palace",
    "engine": "character_analysis",
    "category": "Pattern Database",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Passive: Every 5 enemy actions, automatically catalog their pattern. After 3 patterns cataloged, predict their likely next move with 80% accuracy. Gain 5 Insight per correct auto-prediction.\r\n    *",
    "effects": [
      "** Passive: Every 5 enemy actions, automatically catalog their pattern. After 3 patterns cataloged, ..."
    ],
    "keywords": [],
    "powerScore": 71
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_097",
    "name": "Meta-Analysis",
    "engine": "character_analysis",
    "category": "Engine Counter-Intelligence",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** [Analyze] enemy's entire engine loadout. Discover which engines they prioritize and reveal optimal counter-strategies. Costs 25 Insight. Next 5 glyphs you cast have perfect information (know exact ",
    "effects": [
      "** [Analyze] enemy's entire engine loadout. Discover which engines they prioritize and reveal optima..."
    ],
    "keywords": [
      "Analyze"
    ],
    "powerScore": 76
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_098",
    "name": "Gambit Protocol",
    "engine": "character_analysis",
    "category": "Risk-Reward Mastery",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Sacrifice 20 Insight and 3 KP to set a complex gambit. Declare a specific outcome you want to achieve in 4 turns (e.g., \"enemy will have 2+ debuffs and <50% Ojas\"). If successful, gain 40 Insight, ",
    "effects": [
      "** Sacrifice 20 Insight and 3 KP to set a complex gambit. Declare a specific outcome you want to ach..."
    ],
    "keywords": [
      "Stun"
    ],
    "powerScore": 74
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_099",
    "name": "Parallel Processing",
    "engine": "character_analysis",
    "category": "Multi-Target Mastery",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** [Analyze] all enemies simultaneously and construct a threat priority matrix. For next 3 turns, your glyphs automatically target optimal enemy based on current game state (you can override). Costs 2",
    "effects": [
      "** [Analyze] all enemies simultaneously and construct a threat priority matrix. For next 3 turns, yo..."
    ],
    "keywords": [
      "Analyze"
    ],
    "powerScore": 75
  },
  {
    "id": "SKILL_CHARACTER_ANALYSIS_100",
    "name": "The Grand Design",
    "engine": "character_analysis",
    "category": "Ultimate Strategic Vision",
    "tier": 4,
    "cost": {
      "kp": 4
    },
    "cooldown": 5,
    "unlocked": true,
    "description": "** Once per duel: Map out your next 5 turns in detail before taking them. Lock in this sequence. For each turn that executes exactly as planned (accounting for enemy interference), gain 10 Insight and",
    "effects": [
      "** Once per duel: Map out your next 5 turns in detail before taking them. Lock in this sequence. For..."
    ],
    "keywords": [],
    "powerScore": 96
  },
  {
    "id": "SKILL_CONSCIOUSNESS_001",
    "name": "Cognitive Fortress",
    "engine": "consciousness",
    "category": "Passive",
    "tier": 1,
    "cost": {
      "kp": 2
    },
    "cooldown": 1,
    "unlocked": true,
    "description": "** +5% max Bandwidth. Whenever you enter a new Neural State, gain 5 Coherence.\r\n    * **Evo A (Reinforced Citadel):** +8% max Bandwidth instead.\r\n    * **Evo B (Coherence Fountain):** Gain 8 Coherence",
    "effects": [
      "+5% max Bandwidth. Whenever you enter a new Neural State, gain 5 Coherence."
    ],
    "keywords": [],
    "powerScore": 25
  },
  {
    "id": "SKILL_CONSCIOUSNESS_002",
    "name": "Synaptic Cache",
    "engine": "consciousness",
    "category": "Resource",
    "tier": 1,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Store up to 10 Bandwidth. Once per duel, instantly restore all stored Bandwidth.\r\n    * **Evo A (Deep Cache):** Store up to 15 Bandwidth.\r\n    * **Evo B (Dual Cache):** Can be used twice per duel i",
    "effects": [
      "Store up to 10 Bandwidth. Once per duel, instantly restore all stored Bandwidth."
    ],
    "keywords": [],
    "powerScore": 26
  },
  {
    "id": "SKILL_CONSCIOUSNESS_003",
    "name": "Bandwidth Surge",
    "engine": "consciousness",
    "category": "Active",
    "tier": 1,
    "cost": {
      "kp": 1
    },
    "cooldown": 1,
    "unlocked": true,
    "description": "** Gain 15 Bandwidth immediately. Cooldown: 3 turns.\r\n    * **Evo A (Tidal Surge):** Gain 25 Bandwidth but also take 10 damage.\r\n    * **Evo B (Efficient Surge):** Gain 15 Bandwidth and reduce the coo",
    "effects": [
      "Gain 15 Bandwidth immediately. Cooldown: 3 turns."
    ],
    "keywords": [],
    "powerScore": 24
  },
  {
    "id": "SKILL_CONSCIOUSNESS_004",
    "name": "Prana Router",
    "engine": "consciousness",
    "category": "Passive",
    "tier": 0,
    "cost": {
      "kp": 1
    },
    "cooldown": 1,
    "unlocked": true,
    "description": "** At the start of your turn, convert up to 2 Prana into 5 Bandwidth (or vice versa).\r\n    * **Evo A (Optimal Exchange):** Conversion rate improves to 2 Prana ↔ 8 Bandwidth.\r\n    * **Evo B (Dual Flow)",
    "effects": [
      "At the start of your turn, convert up to 2 Prana into 5 Bandwidth (or vice versa)."
    ],
    "keywords": [],
    "powerScore": 3
  },
  {
    "id": "SKILL_CONSCIOUSNESS_005",
    "name": "Coherence Conduit",
    "engine": "consciousness",
    "category": "Passive",
    "tier": 1,
    "cost": {
      "kp": 1
    },
    "cooldown": 1,
    "unlocked": true,
    "description": "** Whenever you spend 10+ Coherence in a single turn, gain 5 Bandwidth.\r\n    * **Evo A (Efficient Conduit):** Spending threshold reduced to 7 Coherence.\r\n    * **Evo B (Cascading Conduit):** Also redu",
    "effects": [
      "Whenever you spend 10+ Coherence in a single turn, gain 5 Bandwidth."
    ],
    "keywords": [],
    "powerScore": 24
  },
  {
    "id": "SKILL_CONSCIOUSNESS_006",
    "name": "Mind Palace Protocol",
    "engine": "consciousness",
    "category": "Defensive",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Gain a 20-point shield. While the shield persists, Bandwidth generation is doubled.\r\n    * **Evo A (Fortified Palace):** Shield becomes 30 points.\r\n    * **Evo B (Recursive Palace):** When shield b",
    "effects": [
      "Gain a 20-point shield. While the shield persists, Bandwidth generation is doubled."
    ],
    "keywords": [],
    "powerScore": 47
  },
  {
    "id": "SKILL_CONSCIOUSNESS_007",
    "name": "Beta State Meditation",
    "engine": "consciousness",
    "category": "State Entry",
    "tier": 0,
    "cost": {
      "kp": 1
    },
    "cooldown": 1,
    "unlocked": true,
    "description": "** Enter Beta State for 2 turns. Effect: \"+15% Insight generation; first [Debuff] costs -1 Prana.\"\r\n    * **Evo A (Analytical Edge):** Beta State lasts 3 turns.\r\n    * **Evo B (Synaptic Firewall):** B",
    "effects": [
      "Enter Beta State for 2 turns. Effect: \"+15% Insight generation; first [Debuff] costs -1 Prana.\""
    ],
    "keywords": [
      "Debuff",
      "Silence"
    ],
    "powerScore": 7
  },
  {
    "id": "SKILL_CONSCIOUSNESS_008",
    "name": "Gamma State Meditation",
    "engine": "consciousness",
    "category": "State Entry",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Enter Gamma State for 2 turns. Effect: \"Critical hit chance +25% on [Strike] glyphs.\"\r\n    * **Evo A (Precognitive Strike):** Gamma also reveals enemy cooldowns.\r\n    * **Evo B (Bullet Time):** Gam",
    "effects": [
      "Enter Gamma State for 2 turns. Effect: \"Critical hit chance +25% on [Strike] glyphs.\""
    ],
    "keywords": [
      "Strike"
    ],
    "powerScore": 50
  },
  {
    "id": "SKILL_CONSCIOUSNESS_009",
    "name": "Epsilon State Meditation",
    "engine": "consciousness",
    "category": "State Entry",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Enter Epsilon State for 2 turns. Effect: \"Passively generate 5 Bandwidth per turn; prepare for rule inversions.\"\r\n    * **Evo A (Reality Flickering):** Epsilon generates 8 Bandwidth per turn.\r\n    ",
    "effects": [
      "Enter Epsilon State for 2 turns. Effect: \"Passively generate 5 Bandwidth per turn; prepare for rule inversions.\""
    ],
    "keywords": [
      "Banish"
    ],
    "powerScore": 52
  },
  {
    "id": "SKILL_CONSCIOUSNESS_010",
    "name": "State Fusion",
    "engine": "consciousness",
    "category": "Advanced State",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Merge two currently active Neural States for 1 turn (combine their effects).\r\n    * **Evo A (Harmonic Lock):** Fusion lasts 2 turns.\r\n    * **Evo B (Cascade Fusion):** Can merge 3 states at -50% po",
    "effects": [
      "Merge two currently active Neural States for 1 turn (combine their effects)."
    ],
    "keywords": [],
    "powerScore": 72
  },
  {
    "id": "SKILL_CONSCIOUSNESS_011",
    "name": "Neural Shift",
    "engine": "consciousness",
    "category": "State Manipulation",
    "tier": 1,
    "cost": {
      "kp": 2
    },
    "cooldown": 1,
    "unlocked": true,
    "description": "** Immediately exit your current Neural State and enter any other state (ignores prerequisites). Cooldown: 3 turns.\r\n    * **Evo A (Rapid Shift):** Cooldown reduced to 2 turns.\r\n    * **Evo B (Resonan",
    "effects": [
      "Immediately exit your current Neural State and enter any other state (ignores prerequisites). Cooldown: 3 turns."
    ],
    "keywords": [],
    "powerScore": 25
  },
  {
    "id": "SKILL_CONSCIOUSNESS_012",
    "name": "State Anchor",
    "engine": "consciousness",
    "category": "State Preservation",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Your current Neural State persists for 1 extra turn after its normal duration.\r\n    * **Evo A (Deep Anchor):** Persists for 2 extra turns.\r\n    * **Evo B (Stabilizing Anchor):** While anchored, you",
    "effects": [
      "Your current Neural State persists for 1 extra turn after its normal duration."
    ],
    "keywords": [
      "Stun"
    ],
    "powerScore": 49
  },
  {
    "id": "SKILL_CONSCIOUSNESS_013",
    "name": "Meditative Recovery",
    "engine": "consciousness",
    "category": "Healing",
    "tier": 1,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** While in any Neural State, gain 5 Ojas at the start of your turn.\r\n    * **Evo A (Deep Recovery):** Gain 10 Ojas instead.\r\n    * **Evo B (Purifying Meditation):** Also [Cleanse] 1 debuff per turn.",
    "effects": [
      "While in any Neural State, gain 5 Ojas at the start of your turn."
    ],
    "keywords": [
      "Cleanse"
    ],
    "powerScore": 28
  },
  {
    "id": "SKILL_CONSCIOUSNESS_014",
    "name": "Consciousness Cascade",
    "engine": "consciousness",
    "category": "State Chaining",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** For the next 3 turns, transitioning to a new Neural State costs -10 Bandwidth.\r\n    * **Evo A (Infinite Cascade):** Duration becomes 4 turns.\r\n    * **Evo B (Free Flow):** Transitions cost -20 Band",
    "effects": [
      "For the next 3 turns, transitioning to a new Neural State costs -10 Bandwidth."
    ],
    "keywords": [],
    "powerScore": 49
  },
  {
    "id": "SKILL_CONSCIOUSNESS_015",
    "name": "Protocol: Keyword Fusion",
    "engine": "consciousness",
    "category": "Imprint",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Target one of your glyphs. For 2 activations, it gains two keywords simultaneously: [AoE] + [Lifesteal].\r\n    * **Evo A (Triple Fusion):** Gains three keywords: [AoE] + [Lifesteal] + [Execute].\r\n  ",
    "effects": [
      "Target one of your glyphs. For 2 activations, it gains two keywords simultaneously: [AoE] + [Lifesteal]."
    ],
    "keywords": [
      "AoE",
      "Lifesteal",
      "AoE",
      "Lifesteal",
      "Execute"
    ],
    "powerScore": 81
  },
  {
    "id": "SKILL_CONSCIOUSNESS_016",
    "name": "Protocol: Glyph Cloning",
    "engine": "consciousness",
    "category": "Duplication",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Target a glyph in your chart. For 1 turn, you can activate it twice without it going on cooldown.\r\n    * **Evo A (Perfect Clone):** The second activation costs -50% Prana.\r\n    * **Evo B (Echo Clon",
    "effects": [
      "Target a glyph in your chart. For 1 turn, you can activate it twice without it going on cooldown."
    ],
    "keywords": [],
    "powerScore": 72
  },
  {
    "id": "SKILL_CONSCIOUSNESS_017",
    "name": "Protocol: Cooldown Burst",
    "engine": "consciousness",
    "category": "Tempo",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Reduce all current cooldowns by 2 turns. Once per duel.\r\n    * **Evo A (Full Burst):** Reduce by 3 turns instead.\r\n    * **Evo B (Sustained Burst):** Can be used twice per duel.",
    "effects": [
      "Reduce all current cooldowns by 2 turns. Once per duel."
    ],
    "keywords": [],
    "powerScore": 48
  },
  {
    "id": "SKILL_CONSCIOUSNESS_018",
    "name": "Neural Imprinting",
    "engine": "consciousness",
    "category": "Permanent Buff",
    "tier": 1,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Choose a glyph. Permanently increase its damage/healing by 5%.\r\n    * **Evo A (Deep Imprint):** +10% instead.\r\n    * **Evo B (Multi-Imprint):** Affects two glyphs simultaneously.",
    "effects": [
      "Choose a glyph. Permanently increase its damage/healing by 5%."
    ],
    "keywords": [],
    "powerScore": 26
  },
  {
    "id": "SKILL_CONSCIOUSNESS_019",
    "name": "Protocol: Synaptic Overload",
    "engine": "consciousness",
    "category": "Burst",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** For your next turn only, all glyphs cost 0 Prana but have doubled cooldowns afterward.\r\n    * **Evo A (Controlled Overload):** Cooldown penalty is only +50% instead of doubled.\r\n    * **Evo B (Exte",
    "effects": [
      "For your next turn only, all glyphs cost 0 Prana but have doubled cooldowns afterward."
    ],
    "keywords": [],
    "powerScore": 50
  },
  {
    "id": "SKILL_CONSCIOUSNESS_020",
    "name": "Adaptive Resonance",
    "engine": "consciousness",
    "category": "Reactive",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Whenever an enemy uses a glyph from a specific school, one of your glyphs from that school gets -1 Prana cost for 1 turn.\r\n    * **Evo A (School Mastery):** The discount lasts 2 turns.\r\n    * **Evo",
    "effects": [
      "Whenever an enemy uses a glyph from a specific school, one of your glyphs from that school gets -1 Prana cost for 1 turn."
    ],
    "keywords": [],
    "powerScore": 47
  },
  {
    "id": "SKILL_CONSCIOUSNESS_021",
    "name": "Memory Override",
    "engine": "consciousness",
    "category": "Reset",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Choose a glyph. Reset its evolution path, allowing you to re-select a different evolution branch.\r\n    * **Evo A (Flexible Override):** Can be used twice per duel.\r\n    * **Evo B (Instant Override)",
    "effects": [
      "Choose a glyph. Reset its evolution path, allowing you to re-select a different evolution branch."
    ],
    "keywords": [],
    "powerScore": 49
  },
  {
    "id": "SKILL_CONSCIOUSNESS_022",
    "name": "Protocol: Cost Redistribution",
    "engine": "consciousness",
    "category": "Economic",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** For 2 turns, your most expensive glyph costs -3 Prana, but your cheapest glyph costs +2 Prana.\r\n    * **Evo A (Weighted Redistribution):** Most expensive glyph costs -5 Prana.\r\n    * **Evo B (Susta",
    "effects": [
      "For 2 turns, your most expensive glyph costs -3 Prana, but your cheapest glyph costs +2 Prana."
    ],
    "keywords": [],
    "powerScore": 48
  },
  {
    "id": "SKILL_CONSCIOUSNESS_023",
    "name": "Delta State: Overdrive",
    "engine": "consciousness",
    "category": "Ultimate",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** 80 Bandwidth. For 2 turns, all glyphs activate twice when cast (second activation is free).\r\n    * **Evo A (Extended Overdrive):** Duration 3 turns.\r\n    * **Evo B (Perfect Overdrive):** Second act",
    "effects": [
      "80 Bandwidth. For 2 turns, all glyphs activate twice when cast (second activation is free)."
    ],
    "keywords": [],
    "powerScore": 74
  },
  {
    "id": "SKILL_CONSCIOUSNESS_024",
    "name": "Gamma State: Perfect Timing",
    "engine": "consciousness",
    "category": "Tactical",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** 60 Bandwidth. For 2 turns, you gain a \"pause\" button: freeze the turn timer once per turn to analyze options.\r\n    * **Evo A (Extended Timing):** Duration 3 turns.\r\n    * **Evo B (Multiple Pauses):",
    "effects": [
      "60 Bandwidth. For 2 turns, you gain a \"pause\" button: freeze the turn timer once per turn to analyze options."
    ],
    "keywords": [],
    "powerScore": 73
  },
  {
    "id": "SKILL_CONSCIOUSNESS_025",
    "name": "Epsilon State: Lucid Dream",
    "engine": "consciousness",
    "category": "Reality Bend",
    "tier": 4,
    "cost": {
      "kp": 4
    },
    "cooldown": 5,
    "unlocked": true,
    "description": "** 90 Bandwidth. For 2 turns, one fundamental rule is inverted (choose: \"Highest Ojas loses\" OR \"Spending Prana heals\").\r\n    * **Evo A (Double Inversion):** Invert two rules instead of one.\r\n    * **",
    "effects": [
      "90 Bandwidth. For 2 turns, one fundamental rule is inverted (choose: \"Highest Ojas loses\" OR \"Spending Prana heals\")."
    ],
    "keywords": [],
    "powerScore": 95
  },
  {
    "id": "SKILL_CONSCIOUSNESS_026",
    "name": "Omega State",
    "engine": "consciousness",
    "category": "Transcendence",
    "tier": 4,
    "cost": {
      "kp": 5
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "** 150 Bandwidth. Enter all 6 Neural States simultaneously for 2 turns.\r\n    * **Evo A (God-Mode):** Duration 3 turns.\r\n    * **Evo B (Singularity Convergence):** Omega also resets all cooldowns to 0.",
    "effects": [
      "150 Bandwidth. Enter all 6 Neural States simultaneously for 2 turns."
    ],
    "keywords": [],
    "powerScore": 98
  },
  {
    "id": "SKILL_CONSCIOUSNESS_027",
    "name": "Harmonic Catalyst: Alpha→Theta→Delta",
    "engine": "consciousness",
    "category": "Resonance",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** If you successfully transition through this sequence, your next Neural State has +50% duration.\r\n    * **Evo A (Perfect Resonance):** Also refund 25 Bandwidth.\r\n    * **Evo B (Cascading Harmony):**",
    "effects": [
      "If you successfully transition through this sequence, your next Neural State has +50% duration."
    ],
    "keywords": [],
    "powerScore": 74
  },
  {
    "id": "SKILL_CONSCIOUSNESS_028",
    "name": "Harmonic Catalyst: Alpha→Beta→Gamma",
    "engine": "consciousness",
    "category": "Foresight",
    "tier": 4,
    "cost": {
      "kp": 4
    },
    "cooldown": 5,
    "unlocked": true,
    "description": "** If sequence met, Gamma State grants [Foretell] effect (see enemy's next 2 actions).\r\n    * **Evo A (Temporal Vision):** [Foretell] shows 3 actions.\r\n    * **Evo B (Cognitive Burst):** Gamma also +5",
    "effects": [
      "If sequence met, Gamma State grants [Foretell] effect (see enemy's next 2 actions)."
    ],
    "keywords": [
      "Foretell",
      "Foretell"
    ],
    "powerScore": 99
  },
  {
    "id": "SKILL_CONSCIOUSNESS_029",
    "name": "Harmonic Catalyst: Beta→Delta→Epsilon",
    "engine": "consciousness",
    "category": "Reality Weave",
    "tier": 4,
    "cost": {
      "kp": 4
    },
    "cooldown": 5,
    "unlocked": true,
    "description": "** If sequence met, Epsilon State costs -50 Bandwidth.\r\n    * **Evo A (Reality Weaver):** Epsilon duration +1 turn.\r\n    * **Evo B (Ontological Shortcut):** Can skip Beta requirement.",
    "effects": [
      "If sequence met, Epsilon State costs -50 Bandwidth."
    ],
    "keywords": [],
    "powerScore": 96
  },
  {
    "id": "SKILL_CONSCIOUSNESS_030",
    "name": "Consciousness Overwrite",
    "engine": "consciousness",
    "category": "Hostile",
    "tier": 4,
    "cost": {
      "kp": 5
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "** 80 Bandwidth. Force enemy to enter a Neural State of your choice for 1 turn.\r\n    * **Evo A (Hostile Takeover):** Enemy state lasts 2 turns.\r\n    * **Evo B (Cognitive Virus):** Enemy cannot exit th",
    "effects": [
      "80 Bandwidth. Force enemy to enter a Neural State of your choice for 1 turn."
    ],
    "keywords": [],
    "powerScore": 99
  },
  {
    "id": "SKILL_CONSCIOUSNESS_031",
    "name": "Apotheosis",
    "engine": "consciousness",
    "category": "Ultimate Transcendence",
    "tier": 4,
    "cost": {
      "kp": 6
    },
    "cooldown": 8,
    "unlocked": true,
    "description": "** 150 Bandwidth. For 3 turns, exist in all Neural States + ignore all Bandwidth costs.\r\n    * **Evo A (Eternal Consciousness):** Duration 4 turns.\r\n    * **Evo B (Universal Mind):** All allies also e",
    "effects": [
      "150 Bandwidth. For 3 turns, exist in all Neural States + ignore all Bandwidth costs."
    ],
    "keywords": [],
    "powerScore": 104
  },
  {
    "id": "SKILL_CONSCIOUSNESS_032",
    "name": "Infinity State",
    "engine": "consciousness",
    "category": "Endgame",
    "tier": 4,
    "cost": {
      "kp": 5
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "** 100 Bandwidth. For 2 turns, Bandwidth does not decrease when spent (infinite Bandwidth).\r\n    * **Evo A (Extended Infinity):** Duration 3 turns.\r\n    * **Evo B (Cascading Infinity):** Also generate",
    "effects": [
      "100 Bandwidth. For 2 turns, Bandwidth does not decrease when spent (infinite Bandwidth)."
    ],
    "keywords": [],
    "powerScore": 100
  },
  {
    "id": "SKILL_CONSCIOUSNESS_037",
    "name": "Sanctified Ramp",
    "engine": "consciousness",
    "category": "Invocation Link",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Convert 20 Bandwidth → 15 Sanctity (or vice versa). Cooldown: 2 turns.\r\n    * **Evo A (Holy Bandwidth):** Conversion rate improves to 20 ↔ 20.\r\n    * **Evo B (Bidirectional Flow):** Can convert bac",
    "effects": [
      "Convert 20 Bandwidth → 15 Sanctity (or vice versa). Cooldown: 2 turns."
    ],
    "keywords": [],
    "powerScore": 50
  },
  {
    "id": "SKILL_CONSCIOUSNESS_038",
    "name": "Temporal Ramp",
    "engine": "consciousness",
    "category": "Singularity Link",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** At 80+ Bandwidth, next [Protocol] costs -25 Threshold.\r\n    * **Evo A (Event Horizon):** Discount increases to -40 Threshold.\r\n    * **Evo B (Recursive Collapse):** [Protocol] also generates 30 Ban",
    "effects": [
      "At 80+ Bandwidth, next [Protocol] costs -25 Threshold."
    ],
    "keywords": [
      "Protocol",
      "Protocol"
    ],
    "powerScore": 78
  },
  {
    "id": "SKILL_CONSCIOUSNESS_039",
    "name": "Saturn's Patience",
    "engine": "consciousness",
    "category": "Jyotish Link",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Saturn.Disciplined negates cooldown penalties while in Theta State.\r\n    * **Evo A (Immovable Mind):** Saturn also increases Coherence cap by 5.\r\n    * **Evo B (Karmic Boost):** Saturn turns apply ",
    "effects": [
      "Saturn.Disciplined negates cooldown penalties while in Theta State."
    ],
    "keywords": [],
    "powerScore": 72
  },
  {
    "id": "SKILL_CONSCIOUSNESS_040",
    "name": "Field Resonance",
    "engine": "consciousness",
    "category": "Foundational Link",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Foundational [Structure] glyphs grant +1 Bandwidth generation per turn while active.\r\n    * **Evo A (Amplified Resonance):** Grant +2 Bandwidth per turn instead.\r\n    * **Evo B (Coherence Resonance",
    "effects": [
      "Foundational [Structure] glyphs grant +1 Bandwidth generation per turn while active."
    ],
    "keywords": [
      "Structure"
    ],
    "powerScore": 73
  },
  {
    "id": "SKILL_CONSCIOUSNESS_041",
    "name": "Alpha Purist",
    "engine": "consciousness",
    "category": "Build-Defining",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** While in Alpha State only, gain +50% Bandwidth generation but cannot enter any other state this duel.\r\n    * **Evo A (Alpha Supremacy):** +75% generation instead.\r\n    * **Evo B (Alpha Stability):*",
    "effects": [
      "While in Alpha State only, gain +50% Bandwidth generation but cannot enter any other state this duel."
    ],
    "keywords": [],
    "powerScore": 49
  },
  {
    "id": "SKILL_CONSCIOUSNESS_042",
    "name": "State Anarchist",
    "engine": "consciousness",
    "category": "Chaos Build",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Each time you change states, deal 15 damage to all enemies and gain 10 Bandwidth. Your states last -1 turn.\r\n    * **Evo A (Perfect Chaos):** Damage increased to 25.\r\n    * **Evo B (Sustained Anarc",
    "effects": [
      "Each time you change states, deal 15 damage to all enemies and gain 10 Bandwidth. Your states last -1 turn."
    ],
    "keywords": [],
    "powerScore": 50
  },
  {
    "id": "SKILL_CONSCIOUSNESS_043",
    "name": "Theta Ascetic",
    "engine": "consciousness",
    "category": "Endurance Build",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** In Theta State, become immune to all damage but cannot deal damage. Generate 15 Bandwidth per turn.\r\n    * **Evo A (Perfect Zen):** Generate 25 Bandwidth instead.\r\n    * **Evo B (Meditation Master)",
    "effects": [
      "In Theta State, become immune to all damage but cannot deal damage. Generate 15 Bandwidth per turn."
    ],
    "keywords": [
      "Heal"
    ],
    "powerScore": 73
  },
  {
    "id": "SKILL_CONSCIOUSNESS_044",
    "name": "Dual-State Harmony",
    "engine": "consciousness",
    "category": "Hybrid Build",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Choose 2 states at start of duel. You can only use these 2 states, but transitions between them are free and instant.\r\n    * **Evo A (Perfect Duality):** Both states have +1 turn duration.\r\n    * *",
    "effects": [
      "Choose 2 states at start of duel. You can only use these 2 states, but transitions between them are free and instant."
    ],
    "keywords": [
      "Heals"
    ],
    "powerScore": 74
  },
  {
    "id": "SKILL_CONSCIOUSNESS_045",
    "name": "State Parasite",
    "engine": "consciousness",
    "category": "Theft Build",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** You cannot enter states naturally. Instead, steal enemy's current state for 2 turns. Cooldown: 3 turns.\r\n    * **Evo A (Perfect Theft):** Duration 3 turns.\r\n    * **Evo B (Adaptive Theft):** Also c",
    "effects": [
      "You cannot enter states naturally. Instead, steal enemy's current state for 2 turns. Cooldown: 3 turns."
    ],
    "keywords": [],
    "powerScore": 73
  },
  {
    "id": "SKILL_CONSCIOUSNESS_046",
    "name": "Rapid Cycle Protocol",
    "engine": "consciousness",
    "category": "Speed Build",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** All states last exactly 1 turn but cost -50% Bandwidth. Transitioning grants +5 Coherence.\r\n    * **Evo A (Instant Cycle):** Cost reduction -75%.\r\n    * **Evo B (Coherence Fountain):** Gain +8 Cohe",
    "effects": [
      "All states last exactly 1 turn but cost -50% Bandwidth. Transitioning grants +5 Coherence."
    ],
    "keywords": [],
    "powerScore": 50
  },
  {
    "id": "SKILL_CONSCIOUSNESS_047",
    "name": "Epsilon Anarchist",
    "engine": "consciousness",
    "category": "Reality Warper",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** In Epsilon State, your glyphs target random enemies/allies but have +100% effect. Cannot control targeting.\r\n    * **Evo A (Controlled Chaos):** +150% effect instead.\r\n    * **Evo B (Chaos Surge):*",
    "effects": [
      "In Epsilon State, your glyphs target random enemies/allies but have +100% effect. Cannot control targeting."
    ],
    "keywords": [],
    "powerScore": 74
  },
  {
    "id": "SKILL_CONSCIOUSNESS_048",
    "name": "State Memory Bank",
    "engine": "consciousness",
    "category": "Long-term Build",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Each state you enter is cataloged. After entering 5 different states, permanently gain +10 max Bandwidth.\r\n    * **Evo A (Deep Memory):** Only requires 4 states.\r\n    * **Evo B (Perfect Memory):** ",
    "effects": [
      "Each state you enter is cataloged. After entering 5 different states, permanently gain +10 max Bandwidth."
    ],
    "keywords": [],
    "powerScore": 71
  },
  {
    "id": "SKILL_CONSCIOUSNESS_049",
    "name": "Forbidden State: Void",
    "engine": "consciousness",
    "category": "Risk Build",
    "tier": 4,
    "cost": {
      "kp": 4
    },
    "cooldown": 5,
    "unlocked": true,
    "description": "** 100 Bandwidth. Enter Void State (2 turns): All costs become 0 but you take 20 damage per glyph cast.\r\n    * **Evo A (Tolerable Void):** Damage reduced to 15 per cast.\r\n    * **Evo B (Extended Void)",
    "effects": [
      "100 Bandwidth. Enter Void State (2 turns): All costs become 0 but you take 20 damage per glyph cast."
    ],
    "keywords": [],
    "powerScore": 96
  },
  {
    "id": "SKILL_CONSCIOUSNESS_050",
    "name": "Metamorphosis",
    "engine": "consciousness",
    "category": "Evolution Build",
    "tier": 4,
    "cost": {
      "kp": 4
    },
    "cooldown": 5,
    "unlocked": true,
    "description": "** Each time you spend 50+ Bandwidth in one turn, permanently evolve your current state (+20% potency, +1 duration).\r\n    * **Evo A (Rapid Evolution):** Only requires 40 Bandwidth.\r\n    * **Evo B (Per",
    "effects": [
      "Each time you spend 50+ Bandwidth in one turn, permanently evolve your current state (+20% potency, +1 duration)."
    ],
    "keywords": [],
    "powerScore": 95
  },
  {
    "id": "SKILL_CONSCIOUSNESS_051",
    "name": "Bandwidth Vampire",
    "engine": "consciousness",
    "category": "Theft Build",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Steal 10 Bandwidth from target enemy. If they don't have enough, deal 15 damage per missing point.\r\n    * **Evo A (Deep Drain):** Steal 15 Bandwidth.\r\n    * **Evo B (Punishing Drain):** Damage incr",
    "effects": [
      "Steal 10 Bandwidth from target enemy. If they don't have enough, deal 15 damage per missing point."
    ],
    "keywords": [],
    "powerScore": 48
  },
  {
    "id": "SKILL_CONSCIOUSNESS_052",
    "name": "Prana Fasting",
    "engine": "consciousness",
    "category": "Ascetic Build",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** For 3 turns, cannot spend Prana but generate +20 Bandwidth per turn and +3 Coherence per turn.\r\n    * **Evo A (Extended Fast):** Duration 4 turns.\r\n    * **Evo B (Perfect Abstinence):** Generate +3",
    "effects": [
      "For 3 turns, cannot spend Prana but generate +20 Bandwidth per turn and +3 Coherence per turn."
    ],
    "keywords": [],
    "powerScore": 49
  },
  {
    "id": "SKILL_CONSCIOUSNESS_053",
    "name": "Coherence Bomb",
    "engine": "consciousness",
    "category": "Burst Build",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Detonate all your Coherence. Deal 10 damage per Coherence spent to all enemies.\r\n    * **Evo A (Perfect Detonation):** 15 damage per Coherence.\r\n    * **Evo B (Surgical Bomb):** Target single enemy",
    "effects": [
      "Detonate all your Coherence. Deal 10 damage per Coherence spent to all enemies."
    ],
    "keywords": [],
    "powerScore": 50
  },
  {
    "id": "SKILL_CONSCIOUSNESS_054",
    "name": "Bandwidth Overflow",
    "engine": "consciousness",
    "category": "Economy Build",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** If you end turn with 80+ Bandwidth, convert 30 Bandwidth to: +15 Ojas, +3 Coherence, +2 KP.\r\n    * **Evo A (Efficient Overflow):** Conversion costs only 25 Bandwidth.\r\n    * **Evo B (Perfect Overfl",
    "effects": [
      "If you end turn with 80+ Bandwidth, convert 30 Bandwidth to: +15 Ojas, +3 Coherence, +2 KP."
    ],
    "keywords": [],
    "powerScore": 47
  },
  {
    "id": "SKILL_CONSCIOUSNESS_055",
    "name": "Coherence Weaver",
    "engine": "consciousness",
    "category": "Stacking Build",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Passive: Gain +1 Coherence per turn. Cannot spend Coherence below 10 (acts as floor).\r\n    * **Evo A (Rapid Weaving):** Gain +2 per turn.\r\n    * **Evo B (Deep Reserves):** Floor increased to 15.\r\n ",
    "effects": [
      "Passive: Gain +1 Coherence per turn. Cannot spend Coherence below 10 (acts as floor)."
    ],
    "keywords": [],
    "powerScore": 48
  },
  {
    "id": "SKILL_CONSCIOUSNESS_056",
    "name": "Resource Juggler",
    "engine": "consciousness",
    "category": "Skill Build",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** At end of turn, convert: 10 Bandwidth ↔ 5 Coherence ↔ 3 KP (choose direction). Max once per resource per turn.\r\n    * **Evo A (Perfect Juggling):** Can convert twice per resource.\r\n    * **Evo B (E",
    "effects": [
      "At end of turn, convert: 10 Bandwidth ↔ 5 Coherence ↔ 3 KP (choose direction). Max once per resource per turn."
    ],
    "keywords": [],
    "powerScore": 71
  },
  {
    "id": "SKILL_CONSCIOUSNESS_057",
    "name": "Prana Battery",
    "engine": "consciousness",
    "category": "Hybrid Build",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Store up to 20 Prana. While stored, generate +5 Bandwidth per turn. Release all to deal 15 damage per stored Prana.\r\n    * **Evo A (Deep Battery):** Store up to 30 Prana.\r\n    * **Evo B (Efficient ",
    "effects": [
      "Store up to 20 Prana. While stored, generate +5 Bandwidth per turn. Release all to deal 15 damage per stored Prana."
    ],
    "keywords": [],
    "powerScore": 49
  },
  {
    "id": "SKILL_CONSCIOUSNESS_058",
    "name": "Bandwidth Furnace",
    "engine": "consciousness",
    "category": "Conversion Build",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** For 3 turns, all Bandwidth spent is converted to damage dealt to random enemy (2 damage per Bandwidth).\r\n    * **Evo A (Perfect Furnace):** 3 damage per Bandwidth.\r\n    * **Evo B (Controlled Furnac",
    "effects": [
      "For 3 turns, all Bandwidth spent is converted to damage dealt to random enemy (2 damage per Bandwidth)."
    ],
    "keywords": [],
    "powerScore": 50
  },
  {
    "id": "SKILL_CONSCIOUSNESS_059",
    "name": "Infinity Loop",
    "engine": "consciousness",
    "category": "Combo Build",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** If you spend exactly 50 Bandwidth + 10 Coherence + 5 KP in one turn, refund all costs and gain +20 to each resource.\r\n    * **Evo A (Perfect Loop):** Requirements reduced to 40/8/4.\r\n    * **Evo B ",
    "effects": [
      "If you spend exactly 50 Bandwidth + 10 Coherence + 5 KP in one turn, refund all costs and gain +20 to each resource."
    ],
    "keywords": [],
    "powerScore": 74
  },
  {
    "id": "SKILL_CONSCIOUSNESS_060",
    "name": "Resource Singularity",
    "engine": "consciousness",
    "category": "Ultimate Economy",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Once per duel: Convert all current resources to a unified pool (1 point each). Spend unified points as any resource.\r\n    * **Evo A (Extended Singularity):** Effect lasts 3 turns.\r\n    * **Evo B (P",
    "effects": [
      "Once per duel: Convert all current resources to a unified pool (1 point each). Spend unified points as any resource."
    ],
    "keywords": [],
    "powerScore": 73
  },
  {
    "id": "SKILL_CONSCIOUSNESS_061",
    "name": "Scarcity Mastery",
    "engine": "consciousness",
    "category": "Restriction Build",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Your max Bandwidth is halved, but all Bandwidth spent has double effect.\r\n    * **Evo A (Perfect Scarcity):** Triple effect instead of double.\r\n    * **Evo B (Tolerable Scarcity):** Max Bandwidth r",
    "effects": [
      "Your max Bandwidth is halved, but all Bandwidth spent has double effect."
    ],
    "keywords": [],
    "powerScore": 72
  },
  {
    "id": "SKILL_CONSCIOUSNESS_062",
    "name": "Abundance Protocol",
    "engine": "consciousness",
    "category": "Scaling Build",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Passive: Every 3 turns, permanently increase max Bandwidth by 5 (no cap).\r\n    * **Evo A (Rapid Abundance):** Triggers every 2 turns.\r\n    * **Evo B (Perfect Abundance):** Increase by 8 instead of ",
    "effects": [
      "Passive: Every 3 turns, permanently increase max Bandwidth by 5 (no cap)."
    ],
    "keywords": [],
    "powerScore": 71
  },
  {
    "id": "SKILL_CONSCIOUSNESS_063",
    "name": "Coherence Shield",
    "engine": "consciousness",
    "category": "Defensive Build",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Gain Shield equal to (Coherence × 5). Shield lasts until broken.\r\n    * **Evo A (Perfect Shield):** Coherence × 8 instead.\r\n    * **Evo B (Regenerating Shield):** Shield regains 10 points per turn.",
    "effects": [
      "Gain Shield equal to (Coherence × 5). Shield lasts until broken."
    ],
    "keywords": [],
    "powerScore": 48
  },
  {
    "id": "SKILL_CONSCIOUSNESS_064",
    "name": "Coherence Strike",
    "engine": "consciousness",
    "category": "Offensive Build",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Deal damage equal to (Coherence × 8). Consumes all Coherence.\r\n    * **Evo A (Perfect Strike):** Coherence × 12 instead.\r\n    * **Evo B (Retained Strike):** Only consumes 50% of Coherence.\r\n    * *",
    "effects": [
      "Deal damage equal to (Coherence × 8). Consumes all Coherence."
    ],
    "keywords": [],
    "powerScore": 49
  },
  {
    "id": "SKILL_CONSCIOUSNESS_065",
    "name": "Coherence Aura",
    "engine": "consciousness",
    "category": "Support Build",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Allies in 3x3 area gain buffs equal to your Coherence: +1% damage per point, +1% healing per point.\r\n    * **Evo A (Perfect Aura):** +2% per point instead.\r\n    * **Evo B (Extended Aura):** 5x5 are",
    "effects": [
      "Allies in 3x3 area gain buffs equal to your Coherence: +1% damage per point, +1% healing per point."
    ],
    "keywords": [],
    "powerScore": 50
  },
  {
    "id": "SKILL_CONSCIOUSNESS_066",
    "name": "Unstable Coherence",
    "engine": "consciousness",
    "category": "Risk Build",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Gain +10 Coherence per turn but at 30+ Coherence, take 15 damage per turn.\r\n    * **Evo A (Controlled Instability):** Damage threshold increased to 40 Coherence.\r\n    * **Evo B (Reduced Damage):** ",
    "effects": [
      "Gain +10 Coherence per turn but at 30+ Coherence, take 15 damage per turn."
    ],
    "keywords": [],
    "powerScore": 71
  },
  {
    "id": "SKILL_CONSCIOUSNESS_067",
    "name": "Coherence Theft",
    "engine": "consciousness",
    "category": "Aggro Build",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Steal 5 Coherence from target. If they have less than 5, they take 20 damage.\r\n    * **Evo A (Perfect Theft):** Steal 8 Coherence.\r\n    * **Evo B (Punishing Theft):** Damage increased to 35.\r\n    *",
    "effects": [
      "Steal 5 Coherence from target. If they have less than 5, they take 20 damage."
    ],
    "keywords": [],
    "powerScore": 49
  },
  {
    "id": "SKILL_CONSCIOUSNESS_068",
    "name": "Coherence Catalyst",
    "engine": "consciousness",
    "category": "Amplifier Build",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** For 2 turns, all effects that scale with Coherence have +50% scaling.\r\n    * **Evo A (Perfect Catalyst):** +100% scaling instead.\r\n    * **Evo B (Extended Catalyst):** Duration 3 turns.\r\n    * **No",
    "effects": [
      "For 2 turns, all effects that scale with Coherence have +50% scaling."
    ],
    "keywords": [],
    "powerScore": 50
  },
  {
    "id": "SKILL_CONSCIOUSNESS_069",
    "name": "Coherence Lock",
    "engine": "consciousness",
    "category": "Control Build",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Target enemy cannot gain Coherence for 3 turns.\r\n    * **Evo A (Perfect Lock):** Duration 4 turns.\r\n    * **Evo B (Mass Lock):** Affects all enemies.\r\n    * **Note:** *Mirror match control tool. An",
    "effects": [
      "Target enemy cannot gain Coherence for 3 turns."
    ],
    "keywords": [],
    "powerScore": 72
  },
  {
    "id": "SKILL_CONSCIOUSNESS_070",
    "name": "Coherence Echo",
    "engine": "consciousness",
    "category": "Sustain Build",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Whenever you spend Coherence, gain back 30% of it next turn.\r\n    * **Evo A (Perfect Echo):** Regain 50% instead.\r\n    * **Evo B (Instant Echo):** Regain immediately instead of next turn.\r\n    * **",
    "effects": [
      "Whenever you spend Coherence, gain back 30% of it next turn."
    ],
    "keywords": [],
    "powerScore": 71
  },
  {
    "id": "SKILL_CONSCIOUSNESS_071",
    "name": "Coherence Mirror",
    "engine": "consciousness",
    "category": "Reactive Build",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Your Coherence is always equal to highest enemy Coherence (min 0).\r\n    * **Evo A (Superior Mirror):** Your Coherence = highest enemy + 5.\r\n    * **Evo B (Multi Mirror):** Average of all enemy Cohe",
    "effects": [
      "Your Coherence is always equal to highest enemy Coherence (min 0)."
    ],
    "keywords": [],
    "powerScore": 50
  },
  {
    "id": "SKILL_CONSCIOUSNESS_072",
    "name": "Coherence Sacrifice",
    "engine": "consciousness",
    "category": "Burst Build",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Sacrifice 15 Coherence to: Refresh all cooldowns, gain 50 Bandwidth, deal 30 damage to all enemies.\r\n    * **Evo A (Perfect Sacrifice):** Only costs 12 Coherence.\r\n    * **Evo B (Enhanced Sacrifice",
    "effects": [
      "Sacrifice 15 Coherence to: Refresh all cooldowns, gain 50 Bandwidth, deal 30 damage to all enemies."
    ],
    "keywords": [],
    "powerScore": 73
  },
  {
    "id": "SKILL_CONSCIOUSNESS_073",
    "name": "State Residue",
    "engine": "consciousness",
    "category": "Hybrid Build",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** When exiting a state, retain 30% of its effects for 1 turn.\r\n    * **Evo A (Deep Residue):** Retain 50% instead.\r\n    * **Evo B (Extended Residue):** Lasts 2 turns.\r\n    * **Note:** *Smooths transi",
    "effects": [
      "When exiting a state, retain 30% of its effects for 1 turn."
    ],
    "keywords": [],
    "powerScore": 50
  },
  {
    "id": "SKILL_CONSCIOUSNESS_074",
    "name": "State Corruption",
    "engine": "consciousness",
    "category": "Aggro Build",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Force enemy into random harmful state for 1 turn (they take 10 damage per action while corrupted).\r\n    * **Evo A (Perfect Corruption):** Duration 2 turns.\r\n    * **Evo B (Controlled Corruption):**",
    "effects": [
      "Force enemy into random harmful state for 1 turn (they take 10 damage per action while corrupted)."
    ],
    "keywords": [],
    "powerScore": 71
  },
  {
    "id": "SKILL_CONSCIOUSNESS_075",
    "name": "State Immunity",
    "engine": "consciousness",
    "category": "Tank Build",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Choose one state at start of duel. You are permanently immune to being forced into that state.\r\n    * **Evo A (Multi-Immunity):** Immune to 2 states.\r\n    * **Evo B (Adaptive Immunity):** Can chang",
    "effects": [
      "Choose one state at start of duel. You are permanently immune to being forced into that state."
    ],
    "keywords": [],
    "powerScore": 72
  },
  {
    "id": "SKILL_CONSCIOUSNESS_076",
    "name": "State Overcharge",
    "engine": "consciousness",
    "category": "Power Build",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Your current state has +100% potency but drains 10 Bandwidth per turn.\r\n    * **Evo A (Efficient Overcharge):** Drain only 7 per turn.\r\n    * **Evo B (Perfect Overcharge):** +150% potency instead.\r",
    "effects": [
      "Your current state has +100% potency but drains 10 Bandwidth per turn."
    ],
    "keywords": [],
    "powerScore": 73
  },
  {
    "id": "SKILL_CONSCIOUSNESS_077",
    "name": "State Fragmentation",
    "engine": "consciousness",
    "category": "Multi-target Build",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Split your current state across 3 allies (each gets 50% potency).\r\n    * **Evo A (Perfect Fragment):** Each gets 75% potency.\r\n    * **Evo B (Mass Fragment):** Affects all allies.\r\n    * **Note:** ",
    "effects": [
      "Split your current state across 3 allies (each gets 50% potency)."
    ],
    "keywords": [],
    "powerScore": 74
  },
  {
    "id": "SKILL_CONSCIOUSNESS_078",
    "name": "State Compression",
    "engine": "consciousness",
    "category": "Efficiency Build",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** All states last -1 turn but have +50% potency.\r\n    * **Evo A (Perfect Compression):** +75% potency instead.\r\n    * **Evo B (Tolerable Compression):** No duration penalty.\r\n    * **Note:** *Quality",
    "effects": [
      "All states last -1 turn but have +50% potency."
    ],
    "keywords": [],
    "powerScore": 71
  },
  {
    "id": "SKILL_CONSCIOUSNESS_079",
    "name": "State Expansion",
    "engine": "consciousness",
    "category": "Duration Build",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** All states last +2 turns but have -30% potency.\r\n    * **Evo A (Perfect Expansion):** +3 turns instead.\r\n    * **Evo B (Tolerable Expansion):** Only -15% potency penalty.\r\n    * **Note:** *Opposite",
    "effects": [
      "All states last +2 turns but have -30% potency."
    ],
    "keywords": [],
    "powerScore": 72
  },
  {
    "id": "SKILL_CONSCIOUSNESS_080",
    "name": "State Reverberation",
    "engine": "consciousness",
    "category": "Chain Build",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** When you exit a state, it automatically reactivates on a random ally for 1 turn at 50% potency.\r\n    * **Evo A (Perfect Reverb):** 75% potency instead.\r\n    * **Evo B (Controlled Reverb):** Choose ",
    "effects": [
      "When you exit a state, it automatically reactivates on a random ally for 1 turn at 50% potency."
    ],
    "keywords": [],
    "powerScore": 73
  },
  {
    "id": "SKILL_CONSCIOUSNESS_081",
    "name": "Forbidden Combination",
    "engine": "consciousness",
    "category": "Risk Build",
    "tier": 4,
    "cost": {
      "kp": 4
    },
    "cooldown": 5,
    "unlocked": true,
    "description": "** You can be in 2 states simultaneously, but take 15 damage per turn.\r\n    * **Evo A (Tolerable Risk):** Take only 10 damage per turn.\r\n    * **Evo B (Triple Combination):** Can be in 3 states but da",
    "effects": [
      "You can be in 2 states simultaneously, but take 15 damage per turn."
    ],
    "keywords": [],
    "powerScore": 96
  },
  {
    "id": "SKILL_CONSCIOUSNESS_082",
    "name": "State Nullification",
    "engine": "consciousness",
    "category": "Anti-Build",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Prevent all enemies from entering states for 2 turns. You also cannot enter states.\r\n    * **Evo A (Asymmetric Null):** You can still enter states.\r\n    * **Evo B (Extended Null):** Duration 3 turn",
    "effects": [
      "Prevent all enemies from entering states for 2 turns. You also cannot enter states."
    ],
    "keywords": [],
    "powerScore": 74
  },
  {
    "id": "SKILL_CONSCIOUSNESS_083",
    "name": "Consciousness Fragments",
    "engine": "consciousness",
    "category": "Summon Build",
    "tier": 4,
    "cost": {
      "kp": 4
    },
    "cooldown": 5,
    "unlocked": true,
    "description": "** 60 Bandwidth. Summon 3 consciousness fragments (10 Ojas each) that copy your current state.\r\n    * **Evo A (Perfect Fragments):** Fragments have 20 Ojas each.\r\n    * **Evo B (Persistent Fragments):",
    "effects": [
      "60 Bandwidth. Summon 3 consciousness fragments (10 Ojas each) that copy your current state."
    ],
    "keywords": [],
    "powerScore": 95
  },
  {
    "id": "SKILL_CONSCIOUSNESS_084",
    "name": "Mental Fortress",
    "engine": "consciousness",
    "category": "Defense Build",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** 50 Bandwidth. Become immune to all damage for 2 turns but cannot act.\r\n    * **Evo A (Active Fortress):** Can still use non-offensive glyphs.\r\n    * **Evo B (Extended Fortress):** Duration 3 turns.",
    "effects": [
      "50 Bandwidth. Become immune to all damage for 2 turns but cannot act."
    ],
    "keywords": [],
    "powerScore": 73
  },
  {
    "id": "SKILL_CONSCIOUSNESS_085",
    "name": "Cognitive Overload",
    "engine": "consciousness",
    "category": "Burst Build",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** 80 Bandwidth. Cast all glyphs in your chart simultaneously at 50% potency. Once per duel.\r\n    * **Evo A (Perfect Overload):** 75% potency instead.\r\n    * **Evo B (Sustained Overload):** Can be use",
    "effects": [
      "80 Bandwidth. Cast all glyphs in your chart simultaneously at 50% potency. Once per duel."
    ],
    "keywords": [],
    "powerScore": 74
  },
  {
    "id": "SKILL_CONSCIOUSNESS_086",
    "name": "Reality Anchor",
    "engine": "consciousness",
    "category": "Control Build",
    "tier": 4,
    "cost": {
      "kp": 4
    },
    "cooldown": 5,
    "unlocked": true,
    "description": "** 100 Bandwidth. Lock the current game state for 2 turns (no resources, Ojas, or states can change).\r\n    * **Evo A (Perfect Anchor):** Duration 3 turns.\r\n    * **Evo B (Selective Anchor):** Enemies ",
    "effects": [
      "100 Bandwidth. Lock the current game state for 2 turns (no resources, Ojas, or states can change)."
    ],
    "keywords": [],
    "powerScore": 96
  },
  {
    "id": "SKILL_CONSCIOUSNESS_087",
    "name": "Bandwidth Singularity",
    "engine": "consciousness",
    "category": "Ultimate Ramp",
    "tier": 4,
    "cost": {
      "kp": 5
    },
    "cooldown": 5,
    "unlocked": true,
    "description": "** 150 Bandwidth. For 3 turns, Bandwidth generation +200%.\r\n    * **Evo A (Perfect Singularity):** +300% generation.\r\n    * **Evo B (Extended Singularity):** Duration 4 turns.\r\n    * **Note:** *Expone",
    "effects": [
      "150 Bandwidth. For 3 turns, Bandwidth generation +200%."
    ],
    "keywords": [],
    "powerScore": 97
  },
  {
    "id": "SKILL_CONSCIOUSNESS_088",
    "name": "Consciousness Merge",
    "engine": "consciousness",
    "category": "Team Build",
    "tier": 4,
    "cost": {
      "kp": 4
    },
    "cooldown": 5,
    "unlocked": true,
    "description": "** 70 Bandwidth. Merge with ally—share Ojas pool, resources, and states for 3 turns.\r\n    * **Evo A (Perfect Merge):** Duration 4 turns.\r\n    * **Evo B (Multi-Merge):** Can merge with 2 allies.\r\n    *",
    "effects": [
      "70 Bandwidth. Merge with ally—share Ojas pool, resources, and states for 3 turns."
    ],
    "keywords": [],
    "powerScore": 95
  },
  {
    "id": "SKILL_CONSCIOUSNESS_089",
    "name": "Temporal Dilation",
    "engine": "consciousness",
    "category": "Tempo Build",
    "tier": 4,
    "cost": {
      "kp": 5
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "** 120 Bandwidth. Take 2 consecutive turns immediately. Once per duel.\r\n    * **Evo A (Extended Dilation):** Take 3 turns instead.\r\n    * **Evo B (Efficient Dilation):** Cost reduced to 100 Bandwidth.",
    "effects": [
      "120 Bandwidth. Take 2 consecutive turns immediately. Once per duel."
    ],
    "keywords": [],
    "powerScore": 98
  },
  {
    "id": "SKILL_CONSCIOUSNESS_090",
    "name": "Ego Death",
    "engine": "consciousness",
    "category": "Sacrifice Build",
    "tier": 4,
    "cost": {
      "kp": 5
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "** 200 Bandwidth. Sacrifice all current Ojas and resources. Next 3 glyphs have +500% effect and cost 0.\r\n    * **Evo A (Perfect Death):** +800% effect instead.\r\n    * **Evo B (Controlled Death):** Aff",
    "effects": [
      "200 Bandwidth. Sacrifice all current Ojas and resources. Next 3 glyphs have +500% effect and cost 0."
    ],
    "keywords": [],
    "powerScore": 100
  },
  {
    "id": "SKILL_CONSCIOUSNESS_091",
    "name": "Infinite Consciousness",
    "engine": "consciousness",
    "category": "Endgame Build",
    "tier": 4,
    "cost": {
      "kp": 6
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "** 250 Bandwidth. Enter permanent transcendent state: +50% all effects, +10 Bandwidth per turn, immune to state manipulation.\r\n    * **Evo A (Perfect Transcendence):** +75% all effects.\r\n    * **Evo B",
    "effects": [
      "250 Bandwidth. Enter permanent transcendent state: +50% all effects, +10 Bandwidth per turn, immune to state manipulation."
    ],
    "keywords": [],
    "powerScore": 102
  },
  {
    "id": "SKILL_CONSCIOUSNESS_092",
    "name": "Consciousness Collapse",
    "engine": "consciousness",
    "category": "Reset Build",
    "tier": 4,
    "cost": {
      "kp": 5
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "** 180 Bandwidth. Reset entire duel state to turn 1 (both players). Keep your current Bandwidth.\r\n    * **Evo A (Perfect Collapse):** Also keep Coherence.\r\n    * **Evo B (Controlled Collapse):** Choos",
    "effects": [
      "180 Bandwidth. Reset entire duel state to turn 1 (both players). Keep your current Bandwidth."
    ],
    "keywords": [],
    "powerScore": 99
  },
  {
    "id": "SKILL_CONSCIOUSNESS_093",
    "name": "Hermit Mode",
    "engine": "consciousness",
    "category": "Solo Build",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** If you have no allies, +50% all effects but -30% max Ojas.\r\n    * **Evo A (Perfect Hermit):** +75% all effects.\r\n    * **Evo B (Tolerable Hermit):** Only -15% max Ojas penalty.\r\n    * **Note:** *An",
    "effects": [
      "If you have no allies, +50% all effects but -30% max Ojas."
    ],
    "keywords": [],
    "powerScore": 72
  },
  {
    "id": "SKILL_CONSCIOUSNESS_094",
    "name": "Hive Mind",
    "engine": "consciousness",
    "category": "Team Build",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** For each ally, gain +10% Bandwidth generation and +2 Coherence per turn.\r\n    * **Evo A (Perfect Hive):** +15% and +3 instead.\r\n    * **Evo B (Deep Hive):** Also share 25% of your Bandwidth with al",
    "effects": [
      "For each ally, gain +10% Bandwidth generation and +2 Coherence per turn."
    ],
    "keywords": [],
    "powerScore": 73
  },
  {
    "id": "SKILL_CONSCIOUSNESS_095",
    "name": "Minimalist Protocol",
    "engine": "consciousness",
    "category": "Restriction Build",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Can only have 5 glyphs in your chart, but they all have -50% costs and +50% effects.\r\n    * **Evo A (Perfect Minimalism):** +75% effects instead.\r\n    * **Evo B (Efficient Minimalism):** -75% costs",
    "effects": [
      "Can only have 5 glyphs in your chart, but they all have -50% costs and +50% effects."
    ],
    "keywords": [],
    "powerScore": 71
  },
  {
    "id": "SKILL_CONSCIOUSNESS_096",
    "name": "Maximalist Protocol",
    "engine": "consciousness",
    "category": "Complexity Build",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Can have 20 glyphs in your chart. For each glyph over 10, gain +5% Bandwidth generation.\r\n    * **Evo A (Perfect Maximalism):** +8% per glyph instead.\r\n    * **Evo B (Deep Maximalism):** Can have 2",
    "effects": [
      "Can have 20 glyphs in your chart. For each glyph over 10, gain +5% Bandwidth generation."
    ],
    "keywords": [],
    "powerScore": 74
  },
  {
    "id": "SKILL_CONSCIOUSNESS_097",
    "name": "Glass Cannon Mind",
    "engine": "consciousness",
    "category": "Aggro Build",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** -50% max Ojas, but +100% damage dealt and +50% Bandwidth generation.\r\n    * **Evo A (Perfect Cannon):** +150% damage instead.\r\n    * **Evo B (Tolerable Glass):** Only -30% max Ojas penalty.\r\n    * ",
    "effects": [
      "-50% max Ojas, but +100% damage dealt and +50% Bandwidth generation."
    ],
    "keywords": [],
    "powerScore": 73
  },
  {
    "id": "SKILL_CONSCIOUSNESS_098",
    "name": "Immovable Mind",
    "engine": "consciousness",
    "category": "Tank Build",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** +50% max Ojas and +30% healing received, but -50% damage dealt.\r\n    * **Evo A (Perfect Fortress):** +75% max Ojas.\r\n    * **Evo B (Tolerable Immobility):** Only -30% damage penalty.\r\n    * **Note:",
    "effects": [
      "+50% max Ojas and +30% healing received, but -50% damage dealt."
    ],
    "keywords": [],
    "powerScore": 72
  },
  {
    "id": "SKILL_CONSCIOUSNESS_099",
    "name": "Volatile Mind",
    "engine": "consciousness",
    "category": "High-Roll Build",
    "tier": 4,
    "cost": {
      "kp": 4
    },
    "cooldown": 5,
    "unlocked": true,
    "description": "** All effects you generate have random potency between 0% and 200% (rolled each time).\r\n    * **Evo A (Controlled Volatility):** Range improved to 50%-200%.\r\n    * **Evo B (Perfect Variance):** Range",
    "effects": [
      "All effects you generate have random potency between 0% and 200% (rolled each time)."
    ],
    "keywords": [],
    "powerScore": 95
  },
  {
    "id": "SKILL_CONSCIOUSNESS_100",
    "name": "Perfect Mind",
    "engine": "consciousness",
    "category": "Consistency Build",
    "tier": 4,
    "cost": {
      "kp": 4
    },
    "cooldown": 5,
    "unlocked": true,
    "description": "** All your effects have exactly their listed potency—no scaling, crits, or variance possible.\r\n    * **Evo A (Predictable Power):** All effects +20% base potency.\r\n    * **Evo B (Enhanced Stability):",
    "effects": [
      "All your effects have exactly their listed potency—no scaling, crits, or variance possible."
    ],
    "keywords": [],
    "powerScore": 96
  },
  {
    "id": "SKILL_DIVINATION_001",
    "name": "Thread Reader",
    "engine": "divination",
    "category": "Foundation",
    "tier": 1,
    "cost": {
      "kp": 1
    },
    "cooldown": 1,
    "unlocked": true,
    "description": "** Reveal enemy's next 2 actions. Gain +3 Drishti per action revealed.\r\n   * **Evo A (Deep Reading):** Reveal 3 actions.\r\n   * **Evo B (Reactive Reading):** Also gain +15% evasion against revealed act",
    "effects": [
      "Reveal enemy's next 2 actions. Gain +3 Drishti per action revealed."
    ],
    "keywords": [],
    "powerScore": 24
  },
  {
    "id": "SKILL_DIVINATION_002",
    "name": "Fate Weaver",
    "engine": "divination",
    "category": "Manipulation",
    "tier": 1,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Place [Sutra] on enemy. Their next harmful action targets themselves instead.\r\n   * **Evo A (Master Weaver):** Affects next 2 actions.\r\n   * **Evo B (Amplified Weaver):** Redirected actions deal +5",
    "effects": [
      "Place [Sutra] on enemy. Their next harmful action targets themselves instead."
    ],
    "keywords": [
      "Sutra"
    ],
    "powerScore": 28
  },
  {
    "id": "SKILL_DIVINATION_003",
    "name": "Karmic Reversal",
    "engine": "divination",
    "category": "Counter",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** When enemy uses ability, 30% chance to reverse its target/effect.\r\n   * **Evo A (Perfect Reversal):** 50% chance.\r\n   * **Evo B (Guaranteed Reversal):** 100% chance but costs 10 Drishti.\r\n   * **No",
    "effects": [
      "When enemy uses ability, 30% chance to reverse its target/effect."
    ],
    "keywords": [],
    "powerScore": 47
  },
  {
    "id": "SKILL_DIVINATION_004",
    "name": "Destiny Lock",
    "engine": "divination",
    "category": "Control",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Apply [Destiny Bound] for 3 turns: Enemy must use only basic attacks.\r\n   * **Evo A (Extended Lock):** Duration 4 turns.\r\n   * **Evo B (Complete Lock):** Cannot use any abilities.\r\n   * **Note:** *",
    "effects": [
      "Apply [Destiny Bound] for 3 turns: Enemy must use only basic attacks."
    ],
    "keywords": [
      "Destiny Bound"
    ],
    "powerScore": 50
  },
  {
    "id": "SKILL_DIVINATION_005",
    "name": "Future Sight",
    "engine": "divination",
    "category": "Vision",
    "tier": 1,
    "cost": {
      "kp": 2
    },
    "cooldown": 1,
    "unlocked": true,
    "description": "** See entire enemy hand/deck. Lasts until you take damage.\r\n   * **Evo A (Perfect Sight):** Also see enemy resources and cooldowns.\r\n   * **Evo B (Persistent Sight):** Doesn't end when damaged.\r\n   *",
    "effects": [
      "See entire enemy hand/deck. Lasts until you take damage."
    ],
    "keywords": [],
    "powerScore": 25
  },
  {
    "id": "SKILL_DIVINATION_006",
    "name": "Probability Shift",
    "engine": "divination",
    "category": "RNG Manipulation",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** All random effects in your favor become best outcome, enemy random effects become worst outcome.\r\n   * **Evo A (Perfect Probability):** Duration 3 turns instead of 2.\r\n   * **Evo B (Controlled Prob",
    "effects": [
      "All random effects in your favor become best outcome, enemy random effects become worst outcome."
    ],
    "keywords": [],
    "powerScore": 49
  },
  {
    "id": "SKILL_DIVINATION_007",
    "name": "Causal Break",
    "engine": "divination",
    "category": "Anti-Combo",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Cancel enemy combo/sequence. They lose 1 action and 10 resources.\r\n   * **Evo A (Perfect Break):** Lose 2 actions.\r\n   * **Evo B (Punishing Break):** Also deal 25 damage per action cancelled.\r\n   *",
    "effects": [
      "Cancel enemy combo/sequence. They lose 1 action and 10 resources."
    ],
    "keywords": [],
    "powerScore": 50
  },
  {
    "id": "SKILL_DIVINATION_008",
    "name": "Predetermined Victory",
    "engine": "divination",
    "category": "Ultimate",
    "tier": 4,
    "cost": {
      "kp": 4
    },
    "cooldown": 5,
    "unlocked": true,
    "description": "** Once per duel: Next 3 of your actions automatically succeed (cannot miss/be countered).\r\n   * **Evo A (Extended Victory):** 4 actions guaranteed.\r\n   * **Evo B (Perfect Victory):** Actions also dea",
    "effects": [
      "Once per duel: Next 3 of your actions automatically succeed (cannot miss/be countered)."
    ],
    "keywords": [],
    "powerScore": 95
  },
  {
    "id": "SKILL_DIVINATION_009",
    "name": "Fate Steal",
    "engine": "divination",
    "category": "Theft",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Copy enemy's next action. You perform it first at +50% potency.\r\n   * **Evo A (Perfect Theft):** +100% potency.\r\n   * **Evo B (Double Theft):** Copy 2 actions.\r\n   * **Note:** *Predict and preempt.",
    "effects": [
      "Copy enemy's next action. You perform it first at +50% potency."
    ],
    "keywords": [],
    "powerScore": 48
  },
  {
    "id": "SKILL_DIVINATION_010",
    "name": "Oracle's Gambit",
    "engine": "divination",
    "category": "Risk/Reward",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Guess enemy's next action type (offense/defense/support). If correct, gain 20 Drishti and [Foreseen] buff. If wrong, lose 15 Drishti.\r\n    * **Evo A (Safe Gambit):** No penalty for wrong guess.\r\n  ",
    "effects": [
      "Guess enemy's next action type (offense/defense/support). If correct, gain 20 Drishti and [Foreseen] buff. If wrong, lose 15 Drishti."
    ],
    "keywords": [
      "Foreseen"
    ],
    "powerScore": 73
  },
  {
    "id": "SKILL_DIVINATION_011",
    "name": "Karmic Echo",
    "engine": "divination",
    "category": "Multiplication",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Enemy's last action repeats automatically next turn at 75% potency (uncontrollable).\r\n    * **Evo A (Perfect Echo):** 100% potency.\r\n    * **Evo B (Double Echo):** Repeats for 2 turns.\r\n    * **Not",
    "effects": [
      "Enemy's last action repeats automatically next turn at 75% potency (uncontrollable)."
    ],
    "keywords": [],
    "powerScore": 50
  },
  {
    "id": "SKILL_DIVINATION_012",
    "name": "Destiny Swap",
    "engine": "divination",
    "category": "Manipulation",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Swap buffs and debuffs between two targets (friend or foe).\r\n    * **Evo A (Perfect Swap):** Swapped effects have +1 turn duration.\r\n    * **Evo B (Mass Swap):** Affects all allies and all enemies.",
    "effects": [
      "Swap buffs and debuffs between two targets (friend or foe)."
    ],
    "keywords": [],
    "powerScore": 72
  },
  {
    "id": "SKILL_DIVINATION_013",
    "name": "Prophetic Strike",
    "engine": "divination",
    "category": "Combo",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Mark enemy with [Prophecy]: \"Will take 50 damage in 3 turns.\" Cannot be prevented except by [Cleanse].\r\n    * **Evo A (Greater Prophecy):** 75 damage.\r\n    * **Evo B (Immediate Prophecy):** Trigger",
    "effects": [
      "Mark enemy with [Prophecy]: \"Will take 50 damage in 3 turns.\" Cannot be prevented except by [Cleanse]."
    ],
    "keywords": [
      "Prophecy",
      "Cleanse"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_DIVINATION_014",
    "name": "Fate Acceleration",
    "engine": "divination",
    "category": "Tempo",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** All active buffs/debuffs tick twice this turn (consume duration 2x faster).\r\n    * **Evo A (Selective Acceleration):** Only affects chosen effects.\r\n    * **Evo B (Triple Acceleration):** Tick thre",
    "effects": [
      "All active buffs/debuffs tick twice this turn (consume duration 2x faster)."
    ],
    "keywords": [],
    "powerScore": 48
  },
  {
    "id": "SKILL_DIVINATION_015",
    "name": "Causality Loop",
    "engine": "divination",
    "category": "Infinite",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Next ability you use will repeat automatically every 3 turns for rest of duel (costs 0 resources to repeat).\r\n    * **Evo A (Rapid Loop):** Repeats every 2 turns.\r\n    * **Evo B (Perfect Loop):** R",
    "effects": [
      "Next ability you use will repeat automatically every 3 turns for rest of duel (costs 0 resources to repeat)."
    ],
    "keywords": [],
    "powerScore": 74
  },
  {
    "id": "SKILL_DIVINATION_016",
    "name": "Preemptive Counter",
    "engine": "divination",
    "category": "Reaction",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** When enemy declares action, you can spend 15 Drishti to act first with perfect counter ability.\r\n    * **Evo A (Cheap Counter):** Only costs 10 Drishti.\r\n    * **Evo B (Perfect Counter):** Counter ",
    "effects": [
      "When enemy declares action, you can spend 15 Drishti to act first with perfect counter ability."
    ],
    "keywords": [],
    "powerScore": 71
  },
  {
    "id": "SKILL_DIVINATION_017",
    "name": "Destiny Fracture",
    "engine": "divination",
    "category": "Multi-Path",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Choose one: Create 3 timeline branches. One is real, others are illusions. Enemy must guess correctly or waste actions. Lasts 2 turns.\r\n    * **Evo A (Extended Fracture):** 3 turns duration.\r\n    *",
    "effects": [
      "Choose one: Create 3 timeline branches. One is real, others are illusions. Enemy must guess correctly or waste actions. Lasts 2 turns."
    ],
    "keywords": [],
    "powerScore": 73
  },
  {
    "id": "SKILL_DIVINATION_018",
    "name": "Karmic Debt",
    "engine": "divination",
    "category": "Delayed Punishment",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Every action enemy takes adds 1 [Debt] stack. At 10 stacks, deal (stacks × 5) damage and [Stun] for 1 turn.\r\n    * **Evo A (Rapid Debt):** Triggers at 7 stacks.\r\n    * **Evo B (Perfect Debt):** Dea",
    "effects": [
      "Every action enemy takes adds 1 [Debt] stack. At 10 stacks, deal (stacks × 5) damage and [Stun] for 1 turn."
    ],
    "keywords": [
      "Debt",
      "Stun"
    ],
    "powerScore": 54
  },
  {
    "id": "SKILL_DIVINATION_019",
    "name": "Quantum State",
    "engine": "divination",
    "category": "Uncertainty",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Enter superposition: Simultaneously in 2 positions. Enemy must target one (50% to hit wrong position and waste action).\r\n    * **Evo A (Triple State):** 3 positions (33% hit chance).\r\n    * **Evo B",
    "effects": [
      "Enter superposition: Simultaneously in 2 positions. Enemy must target one (50% to hit wrong position and waste action)."
    ],
    "keywords": [],
    "powerScore": 72
  },
  {
    "id": "SKILL_DIVINATION_020",
    "name": "Inevitable End",
    "engine": "divination",
    "category": "Finisher",
    "tier": 4,
    "cost": {
      "kp": 4
    },
    "cooldown": 5,
    "unlocked": true,
    "description": "** Mark enemy with [Prophecy]: \"Will be reduced to 1 Ojas in 5 turns.\" Costs 50 Drishti. Can only be prevented by winning duel before then.\r\n    * **Evo A (Rapid End):** 4 turns.\r\n    * **Evo B (Merci",
    "effects": [
      "Mark enemy with [Prophecy]: \"Will be reduced to 1 Ojas in 5 turns.\" Costs 50 Drishti. Can only be prevented by winning duel before then."
    ],
    "keywords": [
      "Prophecy"
    ],
    "powerScore": 98
  },
  {
    "id": "SKILL_DIVINATION_021",
    "name": "Time Rewind",
    "engine": "divination",
    "category": "Undo",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Spend 5 [Kshana]: Undo last enemy action completely.\r\n    * **Evo A (Efficient Rewind):** Only costs 3 [Kshana].\r\n    * **Evo B (Extended Rewind):** Can undo last 2 actions.\r\n    * **Note:** *Ultim",
    "effects": [
      "Spend 5 [Kshana]: Undo last enemy action completely."
    ],
    "keywords": [
      "Kshana",
      "Kshana"
    ],
    "powerScore": 52
  },
  {
    "id": "SKILL_DIVINATION_022",
    "name": "Temporal Stasis",
    "engine": "divination",
    "category": "Freeze",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Target cannot act for 2 turns but is also invulnerable during this time.\r\n    * **Evo A (Extended Stasis):** 3 turns.\r\n    * **Evo B (Vulnerable Stasis):** Target can be damaged but still cannot ac",
    "effects": [
      "Target cannot act for 2 turns but is also invulnerable during this time."
    ],
    "keywords": [],
    "powerScore": 47
  },
  {
    "id": "SKILL_DIVINATION_023",
    "name": "Haste Field",
    "engine": "divination",
    "category": "Acceleration",
    "tier": 1,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Gain +1 action this turn. Costs 2 [Kshana].\r\n    * **Evo A (Extended Haste):** +2 actions.\r\n    * **Evo B (Efficient Haste):** Only costs 1 [Kshana].\r\n    * **Note:** *Action advantage. Tempo boost",
    "effects": [
      "Gain +1 action this turn. Costs 2 [Kshana]."
    ],
    "keywords": [
      "Kshana",
      "Kshana"
    ],
    "powerScore": 30
  },
  {
    "id": "SKILL_DIVINATION_024",
    "name": "Slow Aura",
    "engine": "divination",
    "category": "Deceleration",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Enemy actions cost +2 resources and have +1 turn cooldown for 3 turns.\r\n    * **Evo A (Perfect Slow):** Cost +3 resources.\r\n    * **Evo B (Extended Slow):** Duration 4 turns.\r\n    * **Note:** *Econ",
    "effects": [
      "Enemy actions cost +2 resources and have +1 turn cooldown for 3 turns."
    ],
    "keywords": [],
    "powerScore": 47
  },
  {
    "id": "SKILL_DIVINATION_025",
    "name": "Time Skip",
    "engine": "divination",
    "category": "Evasion",
    "tier": 1,
    "cost": {
      "kp": 2
    },
    "cooldown": 1,
    "unlocked": true,
    "description": "** Become untargetable for 1 turn. When you reappear, gain +10 Drishti.\r\n    * **Evo A (Extended Skip):** 2 turns untargetable.\r\n    * **Evo B (Profitable Skip):** Gain +20 Drishti.\r\n    * **Note:** *",
    "effects": [
      "Become untargetable for 1 turn. When you reappear, gain +10 Drishti."
    ],
    "keywords": [],
    "powerScore": 25
  },
  {
    "id": "SKILL_DIVINATION_026",
    "name": "Temporal Loop",
    "engine": "divination",
    "category": "Repetition",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Your last action repeats automatically next turn at no cost.\r\n    * **Evo A (Perfect Loop):** Repeats at +50% potency.\r\n    * **Evo B (Extended Loop):** Repeats for 2 additional turns.\r\n    * **Not",
    "effects": [
      "Your last action repeats automatically next turn at no cost."
    ],
    "keywords": [],
    "powerScore": 50
  },
  {
    "id": "SKILL_DIVINATION_027",
    "name": "Age Acceleration",
    "engine": "divination",
    "category": "DoT",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Apply [Decay of Time]: Enemy takes 5 damage per turn, increasing by +5 each turn (5, 10, 15, 20...). Lasts 5 turns.\r\n    * **Evo A (Perfect Acceleration):** Increases by +8 per turn.\r\n    * **Evo B",
    "effects": [
      "Apply [Decay of Time]: Enemy takes 5 damage per turn, increasing by +5 each turn (5, 10, 15, 20...). Lasts 5 turns."
    ],
    "keywords": [
      "Decay of Time"
    ],
    "powerScore": 51
  },
  {
    "id": "SKILL_DIVINATION_028",
    "name": "Chronology Break",
    "engine": "divination",
    "category": "Anti-Effect",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Remove all buffs/debuffs from target and prevent any new effects for 2 turns.\r\n    * **Evo A (Extended Break):** 3 turns.\r\n    * **Evo B (Mass Break):** Affects all enemies.\r\n    * **Note:** *Reset",
    "effects": [
      "Remove all buffs/debuffs from target and prevent any new effects for 2 turns."
    ],
    "keywords": [],
    "powerScore": 71
  },
  {
    "id": "SKILL_DIVINATION_029",
    "name": "Borrowed Time",
    "engine": "divination",
    "category": "Risk",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Gain 3 extra actions this turn. At end of turn, take 30 damage and lose next turn.\r\n    * **Evo A (Safe Borrow):** Only take 15 damage.\r\n    * **Evo B (Perfect Borrow):** Only lose half of next tur",
    "effects": [
      "Gain 3 extra actions this turn. At end of turn, take 30 damage and lose next turn."
    ],
    "keywords": [],
    "powerScore": 72
  },
  {
    "id": "SKILL_DIVINATION_030",
    "name": "Temporal Anchor",
    "engine": "divination",
    "category": "Restoration",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Set checkpoint. Once per duel, restore yourself to that checkpoint state (Ojas, resources, position).\r\n    * **Evo A (Perfect Anchor):** Can use twice per duel.\r\n    * **Evo B (Enhanced Anchor):** ",
    "effects": [
      "Set checkpoint. Once per duel, restore yourself to that checkpoint state (Ojas, resources, position)."
    ],
    "keywords": [],
    "powerScore": 50
  },
  {
    "id": "SKILL_DIVINATION_031",
    "name": "Time Dilation",
    "engine": "divination",
    "category": "Duration",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** All your active effects last +2 turns. Costs 15 Drishti.\r\n    * **Evo A (Perfect Dilation):** +3 turns.\r\n    * **Evo B (Efficient Dilation):** Costs only 10 Drishti.\r\n    * **Note:** *Extend advant",
    "effects": [
      "All your active effects last +2 turns. Costs 15 Drishti."
    ],
    "keywords": [],
    "powerScore": 48
  },
  {
    "id": "SKILL_DIVINATION_032",
    "name": "Rapid Aging",
    "engine": "divination",
    "category": "Debuff",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Enemy's next 3 abilities have their cooldowns doubled.\r\n    * **Evo A (Extended Aging):** Affects next 5 abilities.\r\n    * **Evo B (Perfect Aging):** Cooldowns tripled.\r\n    * **Note:** *Tempo dest",
    "effects": [
      "Enemy's next 3 abilities have their cooldowns doubled."
    ],
    "keywords": [],
    "powerScore": 49
  },
  {
    "id": "SKILL_DIVINATION_033",
    "name": "Paradox Creation",
    "engine": "divination",
    "category": "Chaos",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Both you and enemy gain [Temporal Echo]: All actions repeat next turn uncontrollably.\r\n    * **Evo A (Controlled Paradox):** Only enemy affected.\r\n    * **Evo B (Perfect Paradox):** Your echoes dea",
    "effects": [
      "Both you and enemy gain [Temporal Echo]: All actions repeat next turn uncontrollably."
    ],
    "keywords": [
      "Temporal Echo"
    ],
    "powerScore": 75
  },
  {
    "id": "SKILL_DIVINATION_034",
    "name": "Time Theft",
    "engine": "divination",
    "category": "Resource",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Reduce all enemy cooldowns by 2 turns. Gain +5 Drishti per cooldown reduced.\r\n    * **Evo A (Perfect Theft):** Gain +8 Drishti per cooldown.\r\n    * **Evo B (Enhanced Theft):** Also [Heal] 10 Ojas p",
    "effects": [
      "Reduce all enemy cooldowns by 2 turns. Gain +5 Drishti per cooldown reduced."
    ],
    "keywords": [
      "Heal"
    ],
    "powerScore": 52
  },
  {
    "id": "SKILL_DIVINATION_035",
    "name": "Future Echo",
    "engine": "divination",
    "category": "Prediction",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Perform action from 3 turns in the future now. That future turn skipped automatically.\r\n    * **Evo A (Perfect Echo):** Can use 2 future actions.\r\n    * **Evo B (Efficient Echo):** Future turn only",
    "effects": [
      "Perform action from 3 turns in the future now. That future turn skipped automatically."
    ],
    "keywords": [],
    "powerScore": 71
  },
  {
    "id": "SKILL_DIVINATION_036",
    "name": "Eternal Moment",
    "engine": "divination",
    "category": "Freeze",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** For 1 turn, game state freezes completely except you can act freely (enemy can't respond). Costs 40 Drishti.\r\n    * **Evo A (Extended Moment):** Can act twice during frozen turn.\r\n    * **Evo B (Ef",
    "effects": [
      "For 1 turn, game state freezes completely except you can act freely (enemy can't respond). Costs 40 Drishti."
    ],
    "keywords": [],
    "powerScore": 74
  },
  {
    "id": "SKILL_DIVINATION_037",
    "name": "Timeline Collapse",
    "engine": "divination",
    "category": "Finisher",
    "tier": 4,
    "cost": {
      "kp": 4
    },
    "cooldown": 5,
    "unlocked": true,
    "description": "** Deal damage equal to (total cooldown time on all enemy abilities × 5).\r\n    * **Evo A (Perfect Collapse):** × 8 instead.\r\n    * **Evo B (Stunning Collapse):** Also [Stun] for 1 turn.\r\n    * **Note:",
    "effects": [
      "Deal damage equal to (total cooldown time on all enemy abilities × 5)."
    ],
    "keywords": [
      "Stun"
    ],
    "powerScore": 97
  },
  {
    "id": "SKILL_DIVINATION_038",
    "name": "Kshana Generator",
    "engine": "divination",
    "category": "Resource",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Passive: Gain 1 [Kshana] every 3 turns (max 5 stored).\r\n    * **Evo A (Rapid Generation):** Every 2 turns.\r\n    * **Evo B (Perfect Generation):** Also gain +5 Drishti when generated.\r\n    * **Note:",
    "effects": [
      "Passive: Gain 1 [Kshana] every 3 turns (max 5 stored)."
    ],
    "keywords": [
      "Kshana"
    ],
    "powerScore": 51
  },
  {
    "id": "SKILL_DIVINATION_039",
    "name": "Temporal Mastery",
    "engine": "divination",
    "category": "Build-Defining",
    "tier": 4,
    "cost": {
      "kp": 4
    },
    "cooldown": 5,
    "unlocked": true,
    "description": "** All time-based abilities cost -50%. Start duel with 5 [Kshana].\r\n    * **Evo A (Perfect Mastery):** Cost -75%.\r\n    * **Evo B (Enhanced Mastery):** Start with 7 [Kshana] and max capacity +2.\r\n    *",
    "effects": [
      "All time-based abilities cost -50%. Start duel with 5 [Kshana]."
    ],
    "keywords": [
      "Kshana",
      "Kshana"
    ],
    "powerScore": 100
  },
  {
    "id": "SKILL_DIVINATION_040",
    "name": "End of Time",
    "engine": "divination",
    "category": "Ultimate",
    "tier": 4,
    "cost": {
      "kp": 5
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "** Once per duel: Stop time for 3 turns. Only you can act. Costs all [Kshana] and 50 Drishti.\r\n    * **Evo A (Extended End):** 4 turns duration.\r\n    * **Evo B (Perfect End):** Actions during stopped ",
    "effects": [
      "Once per duel: Stop time for 3 turns. Only you can act. Costs all [Kshana] and 50 Drishti."
    ],
    "keywords": [
      "Kshana"
    ],
    "powerScore": 100
  },
  {
    "id": "SKILL_DIVINATION_041",
    "name": "Mind Read",
    "engine": "divination",
    "category": "Information",
    "tier": 1,
    "cost": {
      "kp": 2
    },
    "cooldown": 1,
    "unlocked": true,
    "description": "** Reveal enemy's entire hand/deck and current resources.\r\n    * **Evo A (Perfect Reading):** Also reveal their next 2 draw/actions.\r\n    * **Evo B (Persistent Reading):** Information doesn't expire u",
    "effects": [
      "Reveal enemy's entire hand/deck and current resources."
    ],
    "keywords": [],
    "powerScore": 25
  },
  {
    "id": "SKILL_DIVINATION_042",
    "name": "Skill Drain",
    "engine": "divination",
    "category": "Debuff",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Apply [Knowledge Drain]: Enemy's next ability deals -50% damage/healing.\r\n    * **Evo A (Perfect Drain):** -75% potency.\r\n    * **Evo B (Extended Drain):** Affects next 3 abilities.\r\n    * **Note:*",
    "effects": [
      "Apply [Knowledge Drain]: Enemy's next ability deals -50% damage/healing."
    ],
    "keywords": [
      "Knowledge Drain"
    ],
    "powerScore": 49
  },
  {
    "id": "SKILL_DIVINATION_043",
    "name": "Akashic Access",
    "engine": "divination",
    "category": "Universal Knowledge",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Gain +20 [Darshan]. For each [Darshan], +1% all effects (caps at +20%).\r\n    * **Evo A (Perfect Access):** +2% per [Darshan].\r\n    * **Evo B (Deep Access):** Max [Darshan] increased to 30.\r\n    * *",
    "effects": [
      "Gain +20 [Darshan]. For each [Darshan], +1% all effects (caps at +20%)."
    ],
    "keywords": [
      "Darshan",
      "Darshan",
      "Darshan",
      "Darshan"
    ],
    "powerScore": 58
  },
  {
    "id": "SKILL_DIVINATION_044",
    "name": "Ability Copy",
    "engine": "divination",
    "category": "Theft",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Copy enemy's last used ability. You can use it once this duel.\r\n    * **Evo A (Perfect Copy):** Can use it 3 times.\r\n    * **Evo B (Enhanced Copy):** Copied ability has +50% potency.\r\n    * **Note:",
    "effects": [
      "Copy enemy's last used ability. You can use it once this duel."
    ],
    "keywords": [],
    "powerScore": 49
  },
  {
    "id": "SKILL_DIVINATION_045",
    "name": "Weakness Reveal",
    "engine": "divination",
    "category": "Debuff",
    "tier": 1,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Mark enemy: They take +25% damage from all sources for 3 turns.\r\n    * **Evo A (Perfect Reveal):** +40% damage taken.\r\n    * **Evo B (Extended Reveal):** Duration 4 turns.\r\n    * **Note:** *Amplify",
    "effects": [
      "Mark enemy: They take +25% damage from all sources for 3 turns."
    ],
    "keywords": [],
    "powerScore": 26
  },
  {
    "id": "SKILL_DIVINATION_046",
    "name": "Memory Extraction",
    "engine": "divination",
    "category": "Resource",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Steal 15 resources from enemy and gain +10 [Darshan].\r\n    * **Evo A (Perfect Extraction):** Steal 25 resources.\r\n    * **Evo B (Deep Extraction):** Gain +20 [Darshan].\r\n    * **Note:** *Economic w",
    "effects": [
      "Steal 15 resources from enemy and gain +10 [Darshan]."
    ],
    "keywords": [
      "Darshan",
      "Darshan"
    ],
    "powerScore": 52
  },
  {
    "id": "SKILL_DIVINATION_047",
    "name": "Omniscience",
    "engine": "divination",
    "category": "Vision",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** For 3 turns, see all hidden information (enemy hand, cooldowns, deck order, random outcomes).\r\n    * **Evo A (Extended Omniscience):** Duration 4 turns.\r\n    * **Evo B (Perfect Omniscience):** Also",
    "effects": [
      "For 3 turns, see all hidden information (enemy hand, cooldowns, deck order, random outcomes)."
    ],
    "keywords": [],
    "powerScore": 72
  },
  {
    "id": "SKILL_DIVINATION_048",
    "name": "Knowledge Bomb",
    "engine": "divination",
    "category": "AoE",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Deal 10 damage to all enemies per [Darshan] you have (max 200 damage).\r\n    * **Evo A (Perfect Bomb):** 15 damage per [Darshan].\r\n    * **Evo B (Stunning Bomb):** Also [Silence] all hit enemies for",
    "effects": [
      "Deal 10 damage to all enemies per [Darshan] you have (max 200 damage)."
    ],
    "keywords": [
      "Darshan",
      "Darshan",
      "Silence"
    ],
    "powerScore": 77
  },
  {
    "id": "SKILL_DIVINATION_049",
    "name": "Insight Theft",
    "engine": "divination",
    "category": "Stack Steal",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Steal half of enemy's positive stacks/buffs and convert to [Darshan].\r\n    * **Evo A (Perfect Theft):** Steal all stacks.\r\n    * **Evo B (Double Theft):** Gain 2 [Darshan] per stack stolen.\r\n    * ",
    "effects": [
      "Steal half of enemy's positive stacks/buffs and convert to [Darshan]."
    ],
    "keywords": [
      "Darshan",
      "Darshan"
    ],
    "powerScore": 54
  },
  {
    "id": "SKILL_DIVINATION_050",
    "name": "Scholar's Patience",
    "engine": "divination",
    "category": "Scaling",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Passive: Gain +1 [Darshan] every turn you don't attack.\r\n    * **Evo A (Rapid Scholarship):** +2 [Darshan] per turn.\r\n    * **Evo B (Perfect Patience):** Also gain +5 Drishti per turn.\r\n    * **Not",
    "effects": [
      "Passive: Gain +1 [Darshan] every turn you don't attack."
    ],
    "keywords": [
      "Darshan",
      "Darshan"
    ],
    "powerScore": 51
  },
  {
    "id": "SKILL_DIVINATION_051",
    "name": "Forbidden Knowledge",
    "engine": "divination",
    "category": "Risk",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Sacrifice 20 Ojas to gain +10 [Darshan] and reveal all enemy hidden abilities.\r\n    * **Evo A (Safe Knowledge):** Only sacrifice 10 Ojas.\r\n    * **Evo B (Perfect Knowledge):** Gain +15 [Darshan] in",
    "effects": [
      "Sacrifice 20 Ojas to gain +10 [Darshan] and reveal all enemy hidden abilities."
    ],
    "keywords": [
      "Darshan",
      "Darshan"
    ],
    "powerScore": 77
  },
  {
    "id": "SKILL_DIVINATION_052",
    "name": "Cognitive Overload",
    "engine": "divination",
    "category": "Control",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Enemy must discard 2 random cards/abilities for 2 turns.\r\n    * **Evo A (Perfect Overload):** Discard 3 cards.\r\n    * **Evo B (Extended Overload):** Duration 3 turns.\r\n    * **Note:** *Hand disrupt",
    "effects": [
      "Enemy must discard 2 random cards/abilities for 2 turns."
    ],
    "keywords": [],
    "powerScore": 49
  },
  {
    "id": "SKILL_DIVINATION_053",
    "name": "Wisdom Shield",
    "engine": "divination",
    "category": "Defense",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Gain (Darshan × 5) shield. Lasts 3 turns or until broken.\r\n    * **Evo A (Perfect Shield):** (Darshan × 8) shield.\r\n    * **Evo B (Persistent Shield):** Lasts 5 turns.\r\n    * **Note:** *Knowledge a",
    "effects": [
      "Gain (Darshan × 5) shield. Lasts 3 turns or until broken."
    ],
    "keywords": [],
    "powerScore": 48
  },
  {
    "id": "SKILL_DIVINATION_054",
    "name": "Secret Unveiling",
    "engine": "divination",
    "category": "Reveal",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Force enemy to reveal their entire strategy (abilities they plan to use, order, targets). Lasts 2 turns.\r\n    * **Evo A (Extended Unveiling):** 3 turns.\r\n    * **Evo B (Perfect Unveiling):** Also p",
    "effects": [
      "Force enemy to reveal their entire strategy (abilities they plan to use, order, targets). Lasts 2 turns."
    ],
    "keywords": [],
    "powerScore": 71
  },
  {
    "id": "SKILL_DIVINATION_055",
    "name": "Knowledge Network",
    "engine": "divination",
    "category": "Synergy",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** All allies gain [Darshan] equal to yours. Shared knowledge grants +10% effects to team.\r\n    * **Evo A (Perfect Network):** +20% effects.\r\n    * **Evo B (Deep Network):** Also share Drishti resourc",
    "effects": [
      "All allies gain [Darshan] equal to yours. Shared knowledge grants +10% effects to team."
    ],
    "keywords": [
      "Darshan"
    ],
    "powerScore": 52
  },
  {
    "id": "SKILL_DIVINATION_056",
    "name": "Memory Wipe",
    "engine": "divination",
    "category": "Control",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Enemy loses access to all abilities used this duel for 3 turns (can only use unused abilities).\r\n    * **Evo A (Extended Wipe):** Duration 4 turns.\r\n    * **Evo B (Perfect Wipe):** Also reset all t",
    "effects": [
      "Enemy loses access to all abilities used this duel for 3 turns (can only use unused abilities)."
    ],
    "keywords": [],
    "powerScore": 72
  },
  {
    "id": "SKILL_DIVINATION_057",
    "name": "Philosopher's Stone",
    "engine": "divination",
    "category": "Transmutation",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Convert 10 [Darshan] into any resource type (Ojas/Drishti/Kshana/etc.) at 2:1 ratio.\r\n    * **Evo A (Perfect Stone):** 1:1 ratio conversion.\r\n    * **Evo B (Efficient Stone):** Only costs 5 [Darsha",
    "effects": [
      "Convert 10 [Darshan] into any resource type (Ojas/Drishti/Kshana/etc.) at 2:1 ratio."
    ],
    "keywords": [
      "Darshan",
      "Darshan"
    ],
    "powerScore": 78
  },
  {
    "id": "SKILL_DIVINATION_058",
    "name": "Universal Truth",
    "engine": "divination",
    "category": "Permanent",
    "tier": 4,
    "cost": {
      "kp": 4
    },
    "cooldown": 5,
    "unlocked": true,
    "description": "** Passive: Cannot be affected by illusions, lies, or misdirection. Always see true game state.\r\n    * **Evo A (Perfect Truth):** Also immune to mind control effects.\r\n    * **Evo B (Shared Truth):** ",
    "effects": [
      "Passive: Cannot be affected by illusions, lies, or misdirection. Always see true game state."
    ],
    "keywords": [],
    "powerScore": 95
  },
  {
    "id": "SKILL_DIVINATION_059",
    "name": "Darshan Overload",
    "engine": "divination",
    "category": "Burst",
    "tier": 4,
    "cost": {
      "kp": 4
    },
    "cooldown": 5,
    "unlocked": true,
    "description": "** Spend all [Darshan]: For each spent, gain +10% all effects for 3 turns. Max +200%.\r\n    * **Evo A (Perfect Overload):** +15% per [Darshan].\r\n    * **Evo B (Extended Overload):** Duration 4 turns.\r\n",
    "effects": [
      "Spend all [Darshan]: For each spent, gain +10% all effects for 3 turns. Max +200%."
    ],
    "keywords": [
      "Darshan",
      "Darshan"
    ],
    "powerScore": 100
  },
  {
    "id": "SKILL_DIVINATION_060",
    "name": "Infinite Library",
    "engine": "divination",
    "category": "Ultimate Passive",
    "tier": 4,
    "cost": {
      "kp": 5
    },
    "cooldown": 5,
    "unlocked": true,
    "description": "** Passive: [Darshan] has no cap. Gain +1 [Darshan] every turn. Start duel with 10 [Darshan].\r\n    * **Evo A (Perfect Library):** Gain +2 [Darshan] per turn.\r\n    * **Evo B (Deep Library):** Start wit",
    "effects": [
      "Passive: [Darshan] has no cap. Gain +1 [Darshan] every turn. Start duel with 10 [Darshan]."
    ],
    "keywords": [
      "Darshan",
      "Darshan",
      "Darshan",
      "Darshan",
      "Darshan"
    ],
    "powerScore": 107
  },
  {
    "id": "SKILL_DIVINATION_061",
    "name": "Planetary Alignment",
    "engine": "divination",
    "category": "Buff Cycle",
    "tier": 1,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Every 3 turns, gain rotating buff: Turn 1: +20% damage | Turn 2: +20% healing | Turn 3: +20% defense.\r\n    * **Evo A (Perfect Alignment):** +35% bonuses.\r\n    * **Evo B (Rapid Alignment):** Cycles ",
    "effects": [
      "Every 3 turns, gain rotating buff: Turn 1: +20% damage | Turn 2: +20% healing | Turn 3: +20% defense."
    ],
    "keywords": [],
    "powerScore": 26
  },
  {
    "id": "SKILL_DIVINATION_062",
    "name": "Solar Flare",
    "engine": "divination",
    "category": "Burst",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Deal 40 damage to all enemies. Apply [Burn] (3 damage/turn for 3 turns).\r\n    * **Evo A (Perfect Flare):** 60 base damage.\r\n    * **Evo B (Lingering Flare):** [Burn] lasts 5 turns.\r\n    * **Note:**",
    "effects": [
      "Deal 40 damage to all enemies. Apply [Burn] (3 damage/turn for 3 turns)."
    ],
    "keywords": [
      "Burn",
      "Burn"
    ],
    "powerScore": 51
  },
  {
    "id": "SKILL_DIVINATION_063",
    "name": "Lunar Blessing",
    "engine": "divination",
    "category": "Healing",
    "tier": 1,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** [Heal] all allies for 30 Ojas. Gain [Darshan] equal to allies healed.\r\n    * **Evo A (Perfect Blessing):** 50 Ojas healed.\r\n    * **Evo B (Knowledge Blessing):** Gain 2 [Darshan] per ally.\r\n    * *",
    "effects": [
      "[Heal] all allies for 30 Ojas. Gain [Darshan] equal to allies healed."
    ],
    "keywords": [
      "Heal",
      "Darshan",
      "Darshan"
    ],
    "powerScore": 32
  },
  {
    "id": "SKILL_DIVINATION_064",
    "name": "Eclipse",
    "engine": "divination",
    "category": "Debuff Field",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Create darkness field for 3 turns: All enemies have -30% accuracy and cannot gain buffs.\r\n    * **Evo A (Perfect Eclipse):** -50% accuracy.\r\n    * **Evo B (Extended Eclipse):** Duration 4 turns.\r\n ",
    "effects": [
      "Create darkness field for 3 turns: All enemies have -30% accuracy and cannot gain buffs."
    ],
    "keywords": [],
    "powerScore": 49
  },
  {
    "id": "SKILL_DIVINATION_065",
    "name": "Mercury Trick",
    "engine": "divination",
    "category": "Confusion",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Swap positions of two enemies. Their next action targets wrong enemy.\r\n    * **Evo A (Perfect Trick):** Affects next 2 actions.\r\n    * **Evo B (Mass Trick):** Can swap 4 enemies total (2 pairs).\r\n ",
    "effects": [
      "Swap positions of two enemies. Their next action targets wrong enemy."
    ],
    "keywords": [],
    "powerScore": 48
  },
  {
    "id": "SKILL_DIVINATION_066",
    "name": "Venus Charm",
    "engine": "divination",
    "category": "Mind Control",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Apply [Subservience]: Enemy's next action targets their ally instead of yours.\r\n    * **Evo A (Perfect Charm):** Affects next 2 actions.\r\n    * **Evo B (Mass Charm):** Affects all enemies.\r\n    * *",
    "effects": [
      "Apply [Subservience]: Enemy's next action targets their ally instead of yours."
    ],
    "keywords": [
      "Subservience"
    ],
    "powerScore": 52
  },
  {
    "id": "SKILL_DIVINATION_067",
    "name": "Mars Wrath",
    "engine": "divination",
    "category": "Damage Boost",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** For 3 turns, all damage dealt by anyone increased by 50%.\r\n    * **Evo A (Perfect Wrath):** +75% damage.\r\n    * **Evo B (Selective Wrath):** Only your damage increased by +100%.\r\n    * **Note:** *D",
    "effects": [
      "For 3 turns, all damage dealt by anyone increased by 50%."
    ],
    "keywords": [],
    "powerScore": 47
  },
  {
    "id": "SKILL_DIVINATION_068",
    "name": "Jupiter's Luck",
    "engine": "divination",
    "category": "RNG Blessing",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** For 3 turns, all your random effects become best possible outcome.\r\n    * **Evo A (Extended Luck):** Duration 4 turns.\r\n    * **Evo B (Perfect Luck):** Also gain +20% all effects.\r\n    * **Note:** ",
    "effects": [
      "For 3 turns, all your random effects become best possible outcome."
    ],
    "keywords": [],
    "powerScore": 49
  },
  {
    "id": "SKILL_DIVINATION_069",
    "name": "Saturn's Judgment",
    "engine": "divination",
    "category": "Delayed Doom",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Mark enemy: In 5 turns, they take 100 damage. Cannot be prevented.\r\n    * **Evo A (Rapid Judgment):** 4 turns.\r\n    * **Evo B (Perfect Judgment):** 150 damage.\r\n    * **Note:** *Inevitable threat. ",
    "effects": [
      "Mark enemy: In 5 turns, they take 100 damage. Cannot be prevented."
    ],
    "keywords": [],
    "powerScore": 71
  },
  {
    "id": "SKILL_DIVINATION_070",
    "name": "Rahu's Shadow",
    "engine": "divination",
    "category": "Silence",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Apply [Silence] to all enemies for 2 turns. They cannot use abilities.\r\n    * **Evo A (Extended Shadow):** 3 turns.\r\n    * **Evo B (Perfect Shadow):** Also drain 15 resources from each.\r\n    * **No",
    "effects": [
      "Apply [Silence] to all enemies for 2 turns. They cannot use abilities."
    ],
    "keywords": [
      "Silence"
    ],
    "powerScore": 50
  },
  {
    "id": "SKILL_DIVINATION_071",
    "name": "Ketu's Insight",
    "engine": "divination",
    "category": "Vision",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Reveal all future events for next 3 turns (draws, random effects, enemy actions).\r\n    * **Evo A (Extended Insight):** 5 turns.\r\n    * **Evo B (Perfect Insight):** Can change 1 revealed outcome per",
    "effects": [
      "Reveal all future events for next 3 turns (draws, random effects, enemy actions)."
    ],
    "keywords": [],
    "powerScore": 50
  },
  {
    "id": "SKILL_DIVINATION_072",
    "name": "Retrograde Curse",
    "engine": "divination",
    "category": "Reversal",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** All enemy buffs become debuffs for 3 turns. All their debuffs become buffs.\r\n    * **Evo A (Extended Curse):** Duration 4 turns.\r\n    * **Evo B (Perfect Curse):** Reversed effects have +50% potency",
    "effects": [
      "All enemy buffs become debuffs for 3 turns. All their debuffs become buffs."
    ],
    "keywords": [],
    "powerScore": 72
  },
  {
    "id": "SKILL_DIVINATION_073",
    "name": "Cosmic Storm",
    "engine": "divination",
    "category": "Chaos",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Random planetary effect triggers each turn for 5 turns (ally and enemy effects).\r\n    * **Evo A (Controlled Storm):** Only beneficial effects for you, harmful for enemy.\r\n    * **Evo B (Perfect Sto",
    "effects": [
      "Random planetary effect triggers each turn for 5 turns (ally and enemy effects)."
    ],
    "keywords": [],
    "powerScore": 73
  },
  {
    "id": "SKILL_DIVINATION_074",
    "name": "Zodiac Wheel",
    "engine": "divination",
    "category": "Cycling Power",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Each turn, rotate through 12 zodiac effects (damage, healing, control, etc.). Effects stack if wheel completes.\r\n    * **Evo A (Rapid Wheel):** Rotates 2 signs per turn.\r\n    * **Evo B (Perfect Whe",
    "effects": [
      "Each turn, rotate through 12 zodiac effects (damage, healing, control, etc.). Effects stack if wheel completes."
    ],
    "keywords": [],
    "powerScore": 71
  },
  {
    "id": "SKILL_DIVINATION_075",
    "name": "Grand Conjunction",
    "engine": "divination",
    "category": "Ultimate",
    "tier": 4,
    "cost": {
      "kp": 4
    },
    "cooldown": 5,
    "unlocked": true,
    "description": "** Once per duel: All planetary effects trigger simultaneously for 1 turn (massive mixed effects). Costs 50 Drishti.\r\n    * **Evo A (Extended Conjunction):** Lasts 2 turns.\r\n    * **Evo B (Perfect Con",
    "effects": [
      "Once per duel: All planetary effects trigger simultaneously for 1 turn (massive mixed effects). Costs 50 Drishti."
    ],
    "keywords": [],
    "powerScore": 96
  },
  {
    "id": "SKILL_DIVINATION_076",
    "name": "Fate Specialist",
    "engine": "divination",
    "category": "Build-Defining",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Cannot use Temporal or Celestial paths. All fate manipulation effects +100%. Can have 5 active [Sutra].\r\n    * **Evo A (Perfect Fate):** +150% effects.\r\n    * **Evo B (Master Fate):** Can have 7 [S",
    "effects": [
      "Cannot use Temporal or Celestial paths. All fate manipulation effects +100%. Can have 5 active [Sutra]."
    ],
    "keywords": [
      "Sutra",
      "Sutra"
    ],
    "powerScore": 54
  },
  {
    "id": "SKILL_DIVINATION_077",
    "name": "Time Specialist",
    "engine": "divination",
    "category": "Build-Defining",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Cannot use Fate or Celestial paths. All temporal effects +100%. Start with 7 [Kshana].\r\n    * **Evo A (Perfect Time):** +150% effects.\r\n    * **Evo B (Master Time):** Max [Kshana] capacity +5.\r\n   ",
    "effects": [
      "Cannot use Fate or Celestial paths. All temporal effects +100%. Start with 7 [Kshana]."
    ],
    "keywords": [
      "Kshana",
      "Kshana"
    ],
    "powerScore": 54
  },
  {
    "id": "SKILL_DIVINATION_078",
    "name": "Knowledge Specialist",
    "engine": "divination",
    "category": "Build-Defining",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Cannot use other paths. All [Darshan] effects +100%. Start with 15 [Darshan], no cap.\r\n    * **Evo A (Perfect Knowledge):** +150% effects.\r\n    * **Evo B (Infinite Knowledge):** Gain +3 [Darshan] p",
    "effects": [
      "Cannot use other paths. All [Darshan] effects +100%. Start with 15 [Darshan], no cap."
    ],
    "keywords": [
      "Darshan",
      "Darshan",
      "Darshan"
    ],
    "powerScore": 56
  },
  {
    "id": "SKILL_DIVINATION_079",
    "name": "Celestial Specialist",
    "engine": "divination",
    "category": "Build-Defining",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Cannot use other paths. All planetary effects +100%. Can trigger 2 planetary effects per turn.\r\n    * **Evo A (Perfect Celestial):** +150% effects.\r\n    * **Evo B (Master Celestial):** Trigger 3 ef",
    "effects": [
      "Cannot use other paths. All planetary effects +100%. Can trigger 2 planetary effects per turn."
    ],
    "keywords": [],
    "powerScore": 50
  },
  {
    "id": "SKILL_DIVINATION_080",
    "name": "Hybrid Prophet",
    "engine": "divination",
    "category": "Dual Path",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Choose 2 Divination paths. Can only use those 2, but all costs -30%.\r\n    * **Evo A (Perfect Hybrid):** Cost -50%.\r\n    * **Evo B (Enhanced Hybrid):** Chosen paths have +30% effects.\r\n    * **Note:",
    "effects": [
      "Choose 2 Divination paths. Can only use those 2, but all costs -30%."
    ],
    "keywords": [],
    "powerScore": 71
  },
  {
    "id": "SKILL_DIVINATION_081",
    "name": "Chaos Seer",
    "engine": "divination",
    "category": "Anti-Specialization",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Must use different Divination path each turn. Doing so grants +10 Drishti and +2 [Darshan].\r\n    * **Evo A (Perfect Chaos):** +15 Drishti and +3 [Darshan].\r\n    * **Evo B (Rewarding Chaos):** Also ",
    "effects": [
      "Must use different Divination path each turn. Doing so grants +10 Drishti and +2 [Darshan]."
    ],
    "keywords": [
      "Darshan",
      "Darshan"
    ],
    "powerScore": 76
  },
  {
    "id": "SKILL_DIVINATION_082",
    "name": "Resource Converter",
    "engine": "divination",
    "category": "Economy",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Can freely convert between Drishti, [Darshan], and [Kshana] at 2:1 ratio.\r\n    * **Evo A (Efficient Converter):** 1:1 ratio.\r\n    * **Evo B (Perfect Converter):** Also gain +10% bonus on conversion",
    "effects": [
      "Can freely convert between Drishti, [Darshan], and [Kshana] at 2:1 ratio."
    ],
    "keywords": [
      "Darshan",
      "Kshana"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_DIVINATION_083",
    "name": "Vision Amplifier",
    "engine": "divination",
    "category": "Scaling",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Passive: For each revealed enemy secret, gain +5% all Divination effects (stacks infinitely).\r\n    * **Evo A (Perfect Amplifier):** +8% per secret.\r\n    * **Evo B (Enhanced Amplifier):** Also gain ",
    "effects": [
      "Passive: For each revealed enemy secret, gain +5% all Divination effects (stacks infinitely)."
    ],
    "keywords": [],
    "powerScore": 50
  },
  {
    "id": "SKILL_DIVINATION_084",
    "name": "Predictive Defense",
    "engine": "divination",
    "category": "Counter",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** When you successfully predict enemy action, gain 30 Shield and counter for half their damage.\r\n    * **Evo A (Perfect Defense):** 50 Shield and full counter.\r\n    * **Evo B (Lasting Defense):** Shi",
    "effects": [
      "When you successfully predict enemy action, gain 30 Shield and counter for half their damage."
    ],
    "keywords": [],
    "powerScore": 71
  },
  {
    "id": "SKILL_DIVINATION_085",
    "name": "Inevitable Fate",
    "engine": "divination",
    "category": "Guarantee",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Choose one outcome this turn. It will happen regardless of probability (within game rules).\r\n    * **Evo A (Extended Fate):** Can guarantee 2 outcomes.\r\n    * **Evo B (Perfect Fate):** Chosen outco",
    "effects": [
      "Choose one outcome this turn. It will happen regardless of probability (within game rules)."
    ],
    "keywords": [],
    "powerScore": 73
  },
  {
    "id": "SKILL_DIVINATION_086",
    "name": "Oracle's Burden",
    "engine": "divination",
    "category": "Risk/Reward",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Reveal your next 3 actions to enemy. If you execute them perfectly, gain +100% effects. If you deviate, lose 30 Ojas.\r\n    * **Evo A (Safe Burden):** No penalty for deviation.\r\n    * **Evo B (Perfe",
    "effects": [
      "Reveal your next 3 actions to enemy. If you execute them perfectly, gain +100% effects. If you deviate, lose 30 Ojas."
    ],
    "keywords": [],
    "powerScore": 72
  },
  {
    "id": "SKILL_DIVINATION_087",
    "name": "Temporal Recursion",
    "engine": "divination",
    "category": "Loop",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Every 5 turns, repeat all actions from 5 turns ago automatically (free).\r\n    * **Evo A (Rapid Recursion):** Every 4 turns.\r\n    * **Evo B (Perfect Recursion):** Repeated actions have +50% potency.",
    "effects": [
      "Every 5 turns, repeat all actions from 5 turns ago automatically (free)."
    ],
    "keywords": [],
    "powerScore": 74
  },
  {
    "id": "SKILL_DIVINATION_088",
    "name": "Fate Cascade",
    "engine": "divination",
    "category": "Chain",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** When you successfully manipulate fate, 50% chance to manipulate another fate automatically (chain triggers).\r\n    * **Evo A (Perfect Cascade):** 75% chance.\r\n    * **Evo B (Guaranteed Cascade):** A",
    "effects": [
      "When you successfully manipulate fate, 50% chance to manipulate another fate automatically (chain triggers)."
    ],
    "keywords": [],
    "powerScore": 73
  },
  {
    "id": "SKILL_DIVINATION_089",
    "name": "Omnipotent Vision",
    "engine": "divination",
    "category": "Ultimate Passive",
    "tier": 4,
    "cost": {
      "kp": 4
    },
    "cooldown": 5,
    "unlocked": true,
    "description": "** Passive: See entire duel timeline. All hidden information revealed permanently. Immune to surprises.\r\n    * **Evo A (Perfect Vision):** Also gain +25% all effects.\r\n    * **Evo B (Shared Vision):**",
    "effects": [
      "Passive: See entire duel timeline. All hidden information revealed permanently. Immune to surprises."
    ],
    "keywords": [],
    "powerScore": 96
  },
  {
    "id": "SKILL_DIVINATION_090",
    "name": "Master of Fate",
    "engine": "divination",
    "category": "Ultimate Build-Defining",
    "tier": 4,
    "cost": {
      "kp": 5
    },
    "cooldown": 5,
    "unlocked": true,
    "description": "** Passive: All Divination paths cost -50%. Gain +1 [Sutra], +3 [Kshana], +10 [Darshan] per turn.\r\n    * **Evo A (Perfect Mastery):** Cost -75%.\r\n    * **Evo B (Enhanced Mastery):** Triple resource ge",
    "effects": [
      "Passive: All Divination paths cost -50%. Gain +1 [Sutra], +3 [Kshana], +10 [Darshan] per turn."
    ],
    "keywords": [
      "Sutra",
      "Kshana",
      "Darshan"
    ],
    "powerScore": 103
  },
  {
    "id": "SKILL_DIVINATION_091",
    "name": "Glass Oracle",
    "engine": "divination",
    "category": "Risk",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** -50% max Ojas, but all Divination effects +150%.\r\n    * **Evo A (Perfect Glass):** +200% effects.\r\n    * **Evo B (Tolerable Glass):** Only -30% max Ojas.\r\n    * **Note:** *Extreme offense. Glass ca",
    "effects": [
      "-50% max Ojas, but all Divination effects +150%."
    ],
    "keywords": [],
    "powerScore": 72
  },
  {
    "id": "SKILL_DIVINATION_092",
    "name": "Fortified Seer",
    "engine": "divination",
    "category": "Tank",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** +50% max Ojas, but all Divination effects -30%.\r\n    * **Evo A (Perfect Tank):** +75% max Ojas.\r\n    * **Evo B (Tolerable Tank):** Only -15% effect penalty.\r\n    * **Note:** *Defensive divination. ",
    "effects": [
      "+50% max Ojas, but all Divination effects -30%."
    ],
    "keywords": [],
    "powerScore": 71
  },
  {
    "id": "SKILL_DIVINATION_093",
    "name": "Minimalist Seer",
    "engine": "divination",
    "category": "Restriction",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Can only use 5 Divination glyphs total, but they all cost -50% and have +50% effects.\r\n    * **Evo A (Perfect Minimalism):** +75% effects.\r\n    * **Evo B (Efficient Minimalism):** Cost -75%.\r\n    *",
    "effects": [
      "Can only use 5 Divination glyphs total, but they all cost -50% and have +50% effects."
    ],
    "keywords": [],
    "powerScore": 71
  },
  {
    "id": "SKILL_DIVINATION_094",
    "name": "Maximalist Prophet",
    "engine": "divination",
    "category": "Complexity",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Can use 20 Divination glyphs. For each over 10, gain +5% all effects.\r\n    * **Evo A (Perfect Maximalism):** +8% per glyph.\r\n    * **Evo B (Deep Maximalism):** Can use 25 glyphs.\r\n    * **Note:** *",
    "effects": [
      "Can use 20 Divination glyphs. For each over 10, gain +5% all effects."
    ],
    "keywords": [],
    "powerScore": 74
  },
  {
    "id": "SKILL_DIVINATION_095",
    "name": "Solo Oracle",
    "engine": "divination",
    "category": "Lone Wolf",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** If no allies, all Divination effects +150%, immune to fate manipulation.\r\n    * **Evo A (Perfect Solo):** +200% effects.\r\n    * **Evo B (Enhanced Solo):** Also +50% max Drishti.\r\n    * **Note:** *S",
    "effects": [
      "If no allies, all Divination effects +150%, immune to fate manipulation."
    ],
    "keywords": [],
    "powerScore": 71
  },
  {
    "id": "SKILL_DIVINATION_096",
    "name": "Team Seer",
    "engine": "divination",
    "category": "Network",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** For each ally, gain +25% Divination effects and +10 [Darshan].\r\n    * **Evo A (Perfect Team):** +40% per ally.\r\n    * **Evo B (Deep Team):** +20 [Darshan] per ally.\r\n    * **Note:** *Team specialis",
    "effects": [
      "For each ally, gain +25% Divination effects and +10 [Darshan]."
    ],
    "keywords": [
      "Darshan",
      "Darshan"
    ],
    "powerScore": 76
  },
  {
    "id": "SKILL_DIVINATION_097",
    "name": "Gambler's Fate",
    "engine": "divination",
    "category": "RNG",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** All Divination effects have random potency (50%-200%).\r\n    * **Evo A (Controlled Gamble):** Range 75%-200%.\r\n    * **Evo B (Perfect Gamble):** Range 100%-300%.\r\n    * **Note:** *High variance. Big",
    "effects": [
      "All Divination effects have random potency (50%-200%)."
    ],
    "keywords": [],
    "powerScore": 73
  },
  {
    "id": "SKILL_DIVINATION_098",
    "name": "Perfect Prediction",
    "engine": "divination",
    "category": "Consistency",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** All Divination effects have exactly listed potency—no variance.\r\n    * **Evo A (Enhanced Prediction):** All effects +20% base.\r\n    * **Evo B (Stable Prediction):** Immune to anti-Divination.\r\n    ",
    "effects": [
      "All Divination effects have exactly listed potency—no variance."
    ],
    "keywords": [],
    "powerScore": 72
  },
  {
    "id": "SKILL_DIVINATION_099",
    "name": "Reactive Seer",
    "engine": "divination",
    "category": "Counter",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** After enemy action, can immediately use Divination ability as reaction (costs +50% resources).\r\n    * **Evo A (Efficient Reactive):** Only +25% cost.\r\n    * **Evo B (Perfect Reactive):** Reactive a",
    "effects": [
      "After enemy action, can immediately use Divination ability as reaction (costs +50% resources)."
    ],
    "keywords": [],
    "powerScore": 73
  },
  {
    "id": "SKILL_DIVINATION_100",
    "name": "Prophecy Eternal",
    "engine": "divination",
    "category": "Ultimate",
    "tier": 4,
    "cost": {
      "kp": 5
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "** Passive: All your predictions/prophecies cannot be prevented. Fate you declare becomes absolute.\r\n     * **Evo A (Perfect Prophecy):** Declared fates trigger 1 turn earlier.\r\n     * **Evo B (Enhanc",
    "effects": [
      "Passive: All your predictions/prophecies cannot be prevented. Fate you declare becomes absolute."
    ],
    "keywords": [],
    "powerScore": 98
  },
  {
    "id": "SKILL_SINGULARITY_001",
    "name": "Shatter Ceiling",
    "engine": "singularity",
    "category": "Foundation",
    "tier": 1,
    "cost": {
      "kp": 2
    },
    "cooldown": 1,
    "unlocked": true,
    "description": "** Remove all caps on your resources (Ojas, Prana, etc.) for 3 turns.\r\n   * **Evo A (Extended Shatter):** Duration 5 turns.\r\n   * **Evo B (Permanent Shatter):** One chosen resource has no cap for rest",
    "effects": [
      "Remove all caps on your resources (Ojas, Prana, etc.) for 3 turns."
    ],
    "keywords": [],
    "powerScore": 25
  },
  {
    "id": "SKILL_SINGULARITY_002",
    "name": "Overflow",
    "engine": "singularity",
    "category": "Exponential",
    "tier": 1,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** When your resource exceeds maximum, gain bonus effects equal to overflow amount.\r\n   * **Evo A (Perfect Overflow):** Bonus doubled.\r\n   * **Evo B (Cascading Overflow):** Overflow applies to all res",
    "effects": [
      "When your resource exceeds maximum, gain bonus effects equal to overflow amount."
    ],
    "keywords": [],
    "powerScore": 26
  },
  {
    "id": "SKILL_SINGULARITY_003",
    "name": "Limit Removal",
    "engine": "singularity",
    "category": "Permanent",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Choose one restriction on your build. It no longer applies this duel.\r\n   * **Evo A (Multiple Removal):** Remove 2 restrictions.\r\n   * **Evo B (Perfect Removal):** Removed restriction also grants +",
    "effects": [
      "Choose one restriction on your build. It no longer applies this duel."
    ],
    "keywords": [],
    "powerScore": 48
  },
  {
    "id": "SKILL_SINGULARITY_004",
    "name": "Infinite Stack",
    "engine": "singularity",
    "category": "Scaling",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** All your stacking effects have no cap and decay 50% slower.\r\n   * **Evo A (Perfect Stack):** Never decay.\r\n   * **Evo B (Accelerated Stack):** Gain stacks 2x faster.\r\n   * **Note:** *Unbounded grow",
    "effects": [
      "All your stacking effects have no cap and decay 50% slower."
    ],
    "keywords": [],
    "powerScore": 47
  },
  {
    "id": "SKILL_SINGULARITY_005",
    "name": "Cooldown Annihilation",
    "engine": "singularity",
    "category": "Freedom",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** For 3 turns, all your abilities have 0 cooldown.\r\n   * **Evo A (Extended Annihilation):** Duration 5 turns.\r\n   * **Evo B (Perfect Annihilation):** Abilities also cost -50% resources during this ti",
    "effects": [
      "For 3 turns, all your abilities have 0 cooldown."
    ],
    "keywords": [],
    "powerScore": 49
  },
  {
    "id": "SKILL_SINGULARITY_006",
    "name": "Cost Negation",
    "engine": "singularity",
    "category": "Economy",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Next 5 abilities cost 0 resources.\r\n   * **Evo A (Extended Negation):** 8 abilities.\r\n   * **Evo B (Perfect Negation):** Also gain +20 Ananda per free cast.\r\n   * **Note:** *Free power. Resource tr",
    "effects": [
      "Next 5 abilities cost 0 resources."
    ],
    "keywords": [],
    "powerScore": 48
  },
  {
    "id": "SKILL_SINGULARITY_007",
    "name": "Action Multiplication",
    "engine": "singularity",
    "category": "Tempo",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** This turn, perform each action twice automatically (costs counted once).\r\n   * **Evo A (Perfect Multiplication):** Actions performed three times.\r\n   * **Evo B (Sustained Multiplication):** Lasts 2",
    "effects": [
      "This turn, perform each action twice automatically (costs counted once)."
    ],
    "keywords": [],
    "powerScore": 50
  },
  {
    "id": "SKILL_SINGULARITY_008",
    "name": "Damage Ceiling Removal",
    "engine": "singularity",
    "category": "Offense",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Remove all damage caps. Your attacks can deal unlimited damage.\r\n   * **Evo A (Perfect Damage):** Also +50% base damage.\r\n   * **Evo B (Overkill):** Excess damage converts to healing for you.\r\n   *",
    "effects": [
      "Remove all damage caps. Your attacks can deal unlimited damage."
    ],
    "keywords": [],
    "powerScore": 71
  },
  {
    "id": "SKILL_SINGULARITY_009",
    "name": "Duration Extension",
    "engine": "singularity",
    "category": "Time",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** All your active effects gain +10 turns duration.\r\n   * **Evo A (Perfect Extension):** +20 turns.\r\n   * **Evo B (Permanent Extension):** Chosen effect becomes permanent this duel.\r\n   * **Note:** *E",
    "effects": [
      "All your active effects gain +10 turns duration."
    ],
    "keywords": [],
    "powerScore": 49
  },
  {
    "id": "SKILL_SINGULARITY_010",
    "name": "Turn Theft",
    "engine": "singularity",
    "category": "Tempo",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Steal enemy's next turn. You act twice in a row.\r\n    * **Evo A (Perfect Theft):** Steal 2 turns.\r\n    * **Evo B (Brutal Theft):** Enemy loses turn AND takes 50 damage.\r\n    * **Note:** *Time manip",
    "effects": [
      "Steal enemy's next turn. You act twice in a row."
    ],
    "keywords": [],
    "powerScore": 72
  },
  {
    "id": "SKILL_SINGULARITY_011",
    "name": "Stat Multiplication",
    "engine": "singularity",
    "category": "Power",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** All your stats (damage, healing, defense) multiplied by 2 for 3 turns.\r\n    * **Evo A (Perfect Multiplication):** Multiplied by 3.\r\n    * **Evo B (Extended Multiplication):** Duration 5 turns.\r\n   ",
    "effects": [
      "All your stats (damage, healing, defense) multiplied by 2 for 3 turns."
    ],
    "keywords": [],
    "powerScore": 71
  },
  {
    "id": "SKILL_SINGULARITY_012",
    "name": "Resource Loop",
    "engine": "singularity",
    "category": "Infinite",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Resources spent return to you at end of turn. Effectively infinite resources for 3 turns.\r\n    * **Evo A (Extended Loop):** Duration 4 turns.\r\n    * **Evo B (Perfect Loop):** Resources return with ",
    "effects": [
      "Resources spent return to you at end of turn. Effectively infinite resources for 3 turns."
    ],
    "keywords": [],
    "powerScore": 73
  },
  {
    "id": "SKILL_SINGULARITY_013",
    "name": "Boundary Erasure",
    "engine": "singularity",
    "category": "Freedom",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** You can use abilities from ANY engine (Tantra/Divination/etc.) for 3 turns.\r\n    * **Evo A (Extended Erasure):** Duration 5 turns.\r\n    * **Evo B (Perfect Erasure):** Cross-engine abilities have +5",
    "effects": [
      "You can use abilities from ANY engine (Tantra/Divination/etc.) for 3 turns."
    ],
    "keywords": [],
    "powerScore": 74
  },
  {
    "id": "SKILL_SINGULARITY_014",
    "name": "Ascending Scale",
    "engine": "singularity",
    "category": "Exponential",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Each action this turn is 20% stronger than the previous one (stacks infinitely this turn).\r\n    * **Evo A (Perfect Ascending):** 30% stronger per action.\r\n    * **Evo B (Sustained Ascending):** Car",
    "effects": [
      "Each action this turn is 20% stronger than the previous one (stacks infinitely this turn)."
    ],
    "keywords": [],
    "powerScore": 72
  },
  {
    "id": "SKILL_SINGULARITY_015",
    "name": "Limit Transcendence",
    "engine": "singularity",
    "category": "Ultimate",
    "tier": 4,
    "cost": {
      "kp": 4
    },
    "cooldown": 5,
    "unlocked": true,
    "description": "** Once per duel: For 5 turns, all your abilities operate at 500% potency with no costs, cooldowns, or restrictions.\r\n    * **Evo A (Extended Transcendence):** Duration 7 turns.\r\n    * **Evo B (Perfec",
    "effects": [
      "Once per duel: For 5 turns, all your abilities operate at 500% potency with no costs, cooldowns, or restrictions."
    ],
    "keywords": [],
    "powerScore": 95
  },
  {
    "id": "SKILL_SINGULARITY_016",
    "name": "Stack Fusion",
    "engine": "singularity",
    "category": "Combination",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Combine all your different stack types into one super-stack. Each combined stack = +15% all effects.\r\n    * **Evo A (Perfect Fusion):** +25% per stack.\r\n    * **Evo B (Persistent Fusion):** Fused s",
    "effects": [
      "Combine all your different stack types into one super-stack. Each combined stack = +15% all effects."
    ],
    "keywords": [],
    "powerScore": 50
  },
  {
    "id": "SKILL_SINGULARITY_017",
    "name": "Immunity Cascade",
    "engine": "singularity",
    "category": "Defense",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Become immune to 3 chosen damage/effect types permanently this duel.\r\n    * **Evo A (Extended Immunity):** 5 types.\r\n    * **Evo B (Perfect Immunity):** Immune to everything except direct damage fo",
    "effects": [
      "Become immune to 3 chosen damage/effect types permanently this duel."
    ],
    "keywords": [],
    "powerScore": 73
  },
  {
    "id": "SKILL_SINGULARITY_018",
    "name": "Perpetual Motion",
    "engine": "singularity",
    "category": "Economy",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Passive: Gain +10 of all resources every turn automatically.\r\n    * **Evo A (Perfect Motion):** +20 per turn.\r\n    * **Evo B (Accelerating Motion):** Amount increases by +5 each turn (10, 15, 20...",
    "effects": [
      "Passive: Gain +10 of all resources every turn automatically."
    ],
    "keywords": [],
    "powerScore": 72
  },
  {
    "id": "SKILL_SINGULARITY_019",
    "name": "Reality Break",
    "engine": "singularity",
    "category": "Meta",
    "tier": 4,
    "cost": {
      "kp": 4
    },
    "cooldown": 5,
    "unlocked": true,
    "description": "** Once per duel: Break one game rule for 1 turn (example: attack during enemy turn, use 10 actions, etc.).\r\n    * **Evo A (Extended Break):** 2 turns.\r\n    * **Evo B (Perfect Break):** Break 2 rules ",
    "effects": [
      "Once per duel: Break one game rule for 1 turn (example: attack during enemy turn, use 10 actions, etc.)."
    ],
    "keywords": [],
    "powerScore": 96
  },
  {
    "id": "SKILL_SINGULARITY_020",
    "name": "Ascension",
    "engine": "singularity",
    "category": "Transformation",
    "tier": 4,
    "cost": {
      "kp": 5
    },
    "cooldown": 5,
    "unlocked": true,
    "description": "** Permanently gain +1 [Siddhi]. Each [Siddhi] grants +10% ALL effects permanently.\r\n    * **Evo A (Rapid Ascension):** Gain +2 [Siddhi].\r\n    * **Evo B (Perfect Ascension):** +15% per [Siddhi] instea",
    "effects": [
      "Permanently gain +1 [Siddhi]. Each [Siddhi] grants +10% ALL effects permanently."
    ],
    "keywords": [
      "Siddhi",
      "Siddhi",
      "Siddhi",
      "Siddhi"
    ],
    "powerScore": 105
  },
  {
    "id": "SKILL_SINGULARITY_021",
    "name": "Rewrite Reality",
    "engine": "singularity",
    "category": "Fundamental",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Change one active effect's parameters (damage amount, duration, target, etc.).\r\n    * **Evo A (Perfect Rewrite):** Change 3 effects.\r\n    * **Evo B (Enhanced Rewrite):** Rewritten effects have +50%",
    "effects": [
      "Change one active effect's parameters (damage amount, duration, target, etc.)."
    ],
    "keywords": [],
    "powerScore": 50
  },
  {
    "id": "SKILL_SINGULARITY_022",
    "name": "Causality Reversal",
    "engine": "singularity",
    "category": "Time",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Effect happens before cause. Gain benefits of action before executing it.\r\n    * **Evo A (Perfect Reversal):** Applies to next 3 actions.\r\n    * **Evo B (Cascading Reversal):** If action fails, ben",
    "effects": [
      "Effect happens before cause. Gain benefits of action before executing it."
    ],
    "keywords": [],
    "powerScore": 71
  },
  {
    "id": "SKILL_SINGULARITY_023",
    "name": "Probability Rewrite",
    "engine": "singularity",
    "category": "RNG Control",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Set any random outcome to desired result. Works once per turn.\r\n    * **Evo A (Extended Rewrite):** 3 times per turn.\r\n    * **Evo B (Perfect Rewrite):** Rewritten outcomes also grant +50% benefits",
    "effects": [
      "Set any random outcome to desired result. Works once per turn."
    ],
    "keywords": [],
    "powerScore": 72
  },
  {
    "id": "SKILL_SINGULARITY_024",
    "name": "Clone Reality",
    "engine": "singularity",
    "category": "Duplication",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Copy entire game state. If you would lose, revert to copied state instead.\r\n    * **Evo A (Multiple Clones):** Can store 2 states.\r\n    * **Evo B (Perfect Clone):** Cloned state has +25% resources.",
    "effects": [
      "Copy entire game state. If you would lose, revert to copied state instead."
    ],
    "keywords": [],
    "powerScore": 73
  },
  {
    "id": "SKILL_SINGULARITY_025",
    "name": "Pocket Dimension",
    "engine": "singularity",
    "category": "Isolation",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Remove yourself from battlefield for 2 turns. Can still act but cannot be affected.\r\n    * **Evo A (Extended Dimension):** 3 turns.\r\n    * **Evo B (Perfect Dimension):** Actions from dimension have",
    "effects": [
      "Remove yourself from battlefield for 2 turns. Can still act but cannot be affected."
    ],
    "keywords": [],
    "powerScore": 71
  },
  {
    "id": "SKILL_SINGULARITY_026",
    "name": "Target Swap",
    "engine": "singularity",
    "category": "Manipulation",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Any effect targeting you targets enemy instead. Lasts 2 turns.\r\n    * **Evo A (Extended Swap):** 3 turns.\r\n    * **Evo B (Perfect Swap):** Swapped effects have +50% potency.\r\n    * **Note:** *Redir",
    "effects": [
      "Any effect targeting you targets enemy instead. Lasts 2 turns."
    ],
    "keywords": [],
    "powerScore": 50
  },
  {
    "id": "SKILL_SINGULARITY_027",
    "name": "Mirror Universe",
    "engine": "singularity",
    "category": "Inversion",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** For 3 turns, all effects have opposite results (damage heals, healing damages, buffs become debuffs).\r\n    * **Evo A (Controlled Mirror):** Only affects enemies.\r\n    * **Evo B (Perfect Mirror):** ",
    "effects": [
      "For 3 turns, all effects have opposite results (damage heals, healing damages, buffs become debuffs)."
    ],
    "keywords": [],
    "powerScore": 74
  },
  {
    "id": "SKILL_SINGULARITY_028",
    "name": "Existence Denial",
    "engine": "singularity",
    "category": "Nullification",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Declare one effect \"never happened.\" It's erased from game history.\r\n    * **Evo A (Multiple Denial):** 3 effects erased.\r\n    * **Evo B (Perfect Denial):** Gain resources equal to erased effect's ",
    "effects": [
      "Declare one effect \"never happened.\" It's erased from game history."
    ],
    "keywords": [],
    "powerScore": 73
  },
  {
    "id": "SKILL_SINGULARITY_029",
    "name": "Law Rewrite",
    "engine": "singularity",
    "category": "Meta",
    "tier": 4,
    "cost": {
      "kp": 4
    },
    "cooldown": 5,
    "unlocked": true,
    "description": "** Change one game rule for 3 turns (examples: \"abilities cost Ojas instead of Prana,\" \"effects last double duration\").\r\n    * **Evo A (Extended Law):** Duration 5 turns.\r\n    * **Evo B (Perfect Law):",
    "effects": [
      "Change one game rule for 3 turns (examples: \"abilities cost Ojas instead of Prana,\" \"effects last double duration\")."
    ],
    "keywords": [],
    "powerScore": 95
  },
  {
    "id": "SKILL_SINGULARITY_030",
    "name": "Superposition",
    "engine": "singularity",
    "category": "Quantum",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Exist in 2 states simultaneously. Take 2 different actions, both happen.\r\n    * **Evo A (Perfect Position):** 3 states/actions.\r\n    * **Evo B (Sustained Position):** Lasts 2 turns.\r\n    * **Note:*",
    "effects": [
      "Exist in 2 states simultaneously. Take 2 different actions, both happen."
    ],
    "keywords": [],
    "powerScore": 72
  },
  {
    "id": "SKILL_SINGULARITY_031",
    "name": "Timeline Split",
    "engine": "singularity",
    "category": "Multi-Reality",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Create alternate timeline where different action was taken. Choose best outcome from both.\r\n    * **Evo A (Multiple Splits):** 3 timelines.\r\n    * **Evo B (Perfect Split):** Combine benefits from a",
    "effects": [
      "Create alternate timeline where different action was taken. Choose best outcome from both."
    ],
    "keywords": [],
    "powerScore": 74
  },
  {
    "id": "SKILL_SINGULARITY_032",
    "name": "Reality Anchor",
    "engine": "singularity",
    "category": "Stability",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Your game state cannot be altered by external effects for 3 turns.\r\n    * **Evo A (Extended Anchor):** Duration 5 turns.\r\n    * **Evo B (Perfect Anchor):** Also immune to all debuffs.\r\n    * **Note",
    "effects": [
      "Your game state cannot be altered by external effects for 3 turns."
    ],
    "keywords": [],
    "powerScore": 71
  },
  {
    "id": "SKILL_SINGULARITY_033",
    "name": "Concept Erasure",
    "engine": "singularity",
    "category": "Deletion",
    "tier": 4,
    "cost": {
      "kp": 4
    },
    "cooldown": 5,
    "unlocked": true,
    "description": "** Remove one concept from duel (example: \"damage,\" \"healing,\" \"resources\"). Lasts 3 turns.\r\n    * **Evo A (Extended Erasure):** Duration 5 turns.\r\n    * **Evo B (Perfect Erasure):** Remove 2 concepts",
    "effects": [
      "Remove one concept from duel (example: \"damage,\" \"healing,\" \"resources\"). Lasts 3 turns."
    ],
    "keywords": [],
    "powerScore": 96
  },
  {
    "id": "SKILL_SINGULARITY_034",
    "name": "Reality Storm",
    "engine": "singularity",
    "category": "Chaos",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** For 5 turns, random reality warps occur each turn affecting everyone.\r\n    * **Evo A (Controlled Storm):** You choose which warps occur.\r\n    * **Evo B (Perfect Storm):** Warps are always beneficia",
    "effects": [
      "For 5 turns, random reality warps occur each turn affecting everyone."
    ],
    "keywords": [],
    "powerScore": 73
  },
  {
    "id": "SKILL_SINGULARITY_035",
    "name": "Dimensional Shift",
    "engine": "singularity",
    "category": "Movement",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Swap positions with enemy. Their buffs/debuffs transfer, yours stay.\r\n    * **Evo A (Perfect Shift):** Also steal one buff from them.\r\n    * **Evo B (Mass Shift):** Affects all enemies simultaneous",
    "effects": [
      "Swap positions with enemy. Their buffs/debuffs transfer, yours stay."
    ],
    "keywords": [],
    "powerScore": 71
  },
  {
    "id": "SKILL_SINGULARITY_036",
    "name": "Physics Break",
    "engine": "singularity",
    "category": "Meta",
    "tier": 4,
    "cost": {
      "kp": 4
    },
    "cooldown": 5,
    "unlocked": true,
    "description": "** Actions no longer require targets, costs, or logical prerequisites for 3 turns.\r\n    * **Evo A (Extended Break):** Duration 5 turns.\r\n    * **Evo B (Perfect Break):** Actions also have +100% potenc",
    "effects": [
      "Actions no longer require targets, costs, or logical prerequisites for 3 turns."
    ],
    "keywords": [],
    "powerScore": 95
  },
  {
    "id": "SKILL_SINGULARITY_037",
    "name": "Paradox Creation",
    "engine": "singularity",
    "category": "Impossibility",
    "tier": 4,
    "cost": {
      "kp": 4
    },
    "cooldown": 5,
    "unlocked": true,
    "description": "** Create impossible state (example: \"Have 0 Ojas but still alive\"). Game resolves in your favor.\r\n    * **Evo A (Multiple Paradox):** Create 2 paradoxes.\r\n    * **Evo B (Perfect Paradox):** Paradoxes",
    "effects": [
      "Create impossible state (example: \"Have 0 Ojas but still alive\"). Game resolves in your favor."
    ],
    "keywords": [],
    "powerScore": 96
  },
  {
    "id": "SKILL_SINGULARITY_038",
    "name": "Reality Backup",
    "engine": "singularity",
    "category": "Insurance",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Any negative effect that would affect you affects enemy instead (automatic redirect).\r\n    * **Evo A (Perfect Backup):** Redirected effects have +50% potency.\r\n    * **Evo B (Sustained Backup):** L",
    "effects": [
      "Any negative effect that would affect you affects enemy instead (automatic redirect)."
    ],
    "keywords": [],
    "powerScore": 72
  },
  {
    "id": "SKILL_SINGULARITY_039",
    "name": "Universal Reset",
    "engine": "singularity",
    "category": "Restoration",
    "tier": 4,
    "cost": {
      "kp": 5
    },
    "cooldown": 5,
    "unlocked": true,
    "description": "** Once per duel: Reset entire game state to turn 1, but you keep all current resources/buffs.\r\n    * **Evo A (Partial Reset):** Only reset enemy state, keep all game progress.\r\n    * **Evo B (Perfect",
    "effects": [
      "Once per duel: Reset entire game state to turn 1, but you keep all current resources/buffs."
    ],
    "keywords": [],
    "powerScore": 97
  },
  {
    "id": "SKILL_SINGULARITY_040",
    "name": "Singularity Point",
    "engine": "singularity",
    "category": "Ultimate",
    "tier": 4,
    "cost": {
      "kp": 5
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "** All reality warps center on you. For 3 turns, you dictate all game rules. Costs 80 Ananda.\r\n    * **Evo A (Extended Singularity):** Duration 5 turns.\r\n    * **Evo B (Perfect Singularity):** Only co",
    "effects": [
      "All reality warps center on you. For 3 turns, you dictate all game rules. Costs 80 Ananda."
    ],
    "keywords": [],
    "powerScore": 98
  },
  {
    "id": "SKILL_SINGULARITY_041",
    "name": "Divine Spark",
    "engine": "singularity",
    "category": "Foundation",
    "tier": 1,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Gain [Transcendent] status for 3 turns: Immune to negative effects, +50% all positive effects.\r\n    * **Evo A (Extended Spark):** Duration 5 turns.\r\n    * **Evo B (Perfect Spark):** +100% positive ",
    "effects": [
      "Gain [Transcendent] status for 3 turns: Immune to negative effects, +50% all positive effects."
    ],
    "keywords": [
      "Transcendent"
    ],
    "powerScore": 28
  },
  {
    "id": "SKILL_SINGULARITY_042",
    "name": "Avatara Form",
    "engine": "singularity",
    "category": "Transformation",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Transform into god form: +100% all stats, new unique ability unlocked.\r\n    * **Evo A (Perfect Form):** +150% stats.\r\n    * **Evo B (Sustained Form):** Transformation lasts entire duel.\r\n    * **No",
    "effects": [
      "Transform into god form: +100% all stats, new unique ability unlocked."
    ],
    "keywords": [],
    "powerScore": 50
  },
  {
    "id": "SKILL_SINGULARITY_043",
    "name": "Omnipotence",
    "engine": "singularity",
    "category": "Power",
    "tier": 4,
    "cost": {
      "kp": 4
    },
    "cooldown": 5,
    "unlocked": true,
    "description": "** For 3 turns, all your actions automatically succeed at maximum potency.\r\n    * **Evo A (Extended Omnipotence):** Duration 5 turns.\r\n    * **Evo B (Perfect Omnipotence):** Actions also have +100% bo",
    "effects": [
      "For 3 turns, all your actions automatically succeed at maximum potency."
    ],
    "keywords": [],
    "powerScore": 95
  },
  {
    "id": "SKILL_SINGULARITY_044",
    "name": "Omniscience",
    "engine": "singularity",
    "category": "Knowledge",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** See all possible futures for next 5 turns. Choose which one occurs.\r\n    * **Evo A (Extended Omniscience):** See 8 turns ahead.\r\n    * **Evo B (Perfect Omniscience):** Can combine elements from mul",
    "effects": [
      "See all possible futures for next 5 turns. Choose which one occurs."
    ],
    "keywords": [],
    "powerScore": 74
  },
  {
    "id": "SKILL_SINGULARITY_045",
    "name": "Omnipresence",
    "engine": "singularity",
    "category": "Existence",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Exist everywhere simultaneously. Can target any entity anywhere, cannot be targeted.\r\n    * **Evo A (Perfect Presence):** Also act 3 times per turn.\r\n    * **Evo B (Sustained Presence):** Lasts 5 t",
    "effects": [
      "Exist everywhere simultaneously. Can target any entity anywhere, cannot be targeted."
    ],
    "keywords": [],
    "powerScore": 73
  },
  {
    "id": "SKILL_SINGULARITY_046",
    "name": "Divine Judgment",
    "engine": "singularity",
    "category": "Execution",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Declare target \"judged.\" They take 100 damage, ignoring all defenses.\r\n    * **Evo A (Perfect Judgment):** 200 damage.\r\n    * **Evo B (Mass Judgment):** Affects all enemies.\r\n    * **Note:** *Unavo",
    "effects": [
      "Declare target \"judged.\" They take 100 damage, ignoring all defenses."
    ],
    "keywords": [],
    "powerScore": 72
  },
  {
    "id": "SKILL_SINGULARITY_047",
    "name": "Creation",
    "engine": "singularity",
    "category": "Generation",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Create anything that doesn't exist yet (buff, resource, ally). Lasts 5 turns.\r\n    * **Evo A (Perfect Creation):** Created entity has +50% potency.\r\n    * **Evo B (Permanent Creation):** Lasts enti",
    "effects": [
      "Create anything that doesn't exist yet (buff, resource, ally). Lasts 5 turns."
    ],
    "keywords": [],
    "powerScore": 71
  },
  {
    "id": "SKILL_SINGULARITY_048",
    "name": "Destruction",
    "engine": "singularity",
    "category": "Annihilation",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Destroy any one thing completely (buff, debuff, resource, entity). Cannot be recovered.\r\n    * **Evo A (Perfect Destruction):** Destroy 3 things.\r\n    * **Evo B (Mass Destruction):** Affects all en",
    "effects": [
      "Destroy any one thing completely (buff, debuff, resource, entity). Cannot be recovered."
    ],
    "keywords": [],
    "powerScore": 71
  },
  {
    "id": "SKILL_SINGULARITY_049",
    "name": "Divine Grace",
    "engine": "singularity",
    "category": "Blessing",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Grant yourself or ally complete invulnerability for 2 turns.\r\n    * **Evo A (Extended Grace):** 3 turns.\r\n    * **Evo B (Perfect Grace):** Also heal to full Ojas and remove all debuffs.\r\n    * **No",
    "effects": [
      "Grant yourself or ally complete invulnerability for 2 turns."
    ],
    "keywords": [],
    "powerScore": 50
  },
  {
    "id": "SKILL_SINGULARITY_050",
    "name": "Divine Wrath",
    "engine": "singularity",
    "category": "Punishment",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Enemy takes damage equal to all their current buffs × 10. Then remove all buffs.\r\n    * **Evo A (Perfect Wrath):** ×20 instead.\r\n    * **Evo B (Spreading Wrath):** Affects all enemies.\r\n    * **Not",
    "effects": [
      "Enemy takes damage equal to all their current buffs × 10. Then remove all buffs."
    ],
    "keywords": [],
    "powerScore": 72
  },
  {
    "id": "SKILL_SINGULARITY_051",
    "name": "Ascended State",
    "engine": "singularity",
    "category": "Permanent",
    "tier": 4,
    "cost": {
      "kp": 4
    },
    "cooldown": 5,
    "unlocked": true,
    "description": "** Permanently gain +1 [Siddhi] and +10 [Nirvana]. Can be used multiple times per duel.\r\n    * **Evo A (Rapid Ascension):** Gain +2 [Siddhi], +20 [Nirvana].\r\n    * **Evo B (Perfect Ascension):** Also ",
    "effects": [
      "Permanently gain +1 [Siddhi] and +10 [Nirvana]. Can be used multiple times per duel."
    ],
    "keywords": [
      "Siddhi",
      "Nirvana",
      "Siddhi",
      "Nirvana"
    ],
    "powerScore": 104
  },
  {
    "id": "SKILL_SINGULARITY_052",
    "name": "Cosmic Authority",
    "engine": "singularity",
    "category": "Command",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Command any entity to perform any action (friend or foe). They must obey.\r\n    * **Evo A (Perfect Authority):** Command 3 entities simultaneously.\r\n    * **Evo B (Sustained Authority):** Can comman",
    "effects": [
      "Command any entity to perform any action (friend or foe). They must obey."
    ],
    "keywords": [],
    "powerScore": 74
  },
  {
    "id": "SKILL_SINGULARITY_053",
    "name": "Reality Sovereignty",
    "engine": "singularity",
    "category": "Domain",
    "tier": 4,
    "cost": {
      "kp": 4
    },
    "cooldown": 5,
    "unlocked": true,
    "description": "** Create 5×5 zone: You write all rules inside it for 4 turns.\r\n    * **Evo A (Perfect Sovereignty):** 7×7 zone.\r\n    * **Evo B (Extended Sovereignty):** Duration 6 turns.\r\n    * **Note:** *Personal r",
    "effects": [
      "Create 5×5 zone: You write all rules inside it for 4 turns."
    ],
    "keywords": [],
    "powerScore": 95
  },
  {
    "id": "SKILL_SINGULARITY_054",
    "name": "Miracle",
    "engine": "singularity",
    "category": "Impossible",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Perform one impossible action (examples: \"Have infinite resources for 1 turn,\" \"Act 10 times in one turn\").\r\n    * **Evo A (Perfect Miracle):** Perform 2 miracles.\r\n    * **Evo B (Sustained Miracle",
    "effects": [
      "Perform one impossible action (examples: \"Have infinite resources for 1 turn,\" \"Act 10 times in one turn\")."
    ],
    "keywords": [],
    "powerScore": 73
  },
  {
    "id": "SKILL_SINGULARITY_055",
    "name": "Divine Intervention",
    "engine": "singularity",
    "category": "Save",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** When ally would die, prevent it and fully restore them instead.\r\n    * **Evo A (Perfect Intervention):** Restore at 150% max Ojas.\r\n    * **Evo B (Mass Intervention):** Affects all allies.\r\n    * *",
    "effects": [
      "When ally would die, prevent it and fully restore them instead."
    ],
    "keywords": [],
    "powerScore": 72
  },
  {
    "id": "SKILL_SINGULARITY_056",
    "name": "Apotheosis",
    "engine": "singularity",
    "category": "Ultimate Transformation",
    "tier": 4,
    "cost": {
      "kp": 5
    },
    "cooldown": 5,
    "unlocked": true,
    "description": "** Become true god for 5 turns: All abilities cost 0, have 0 cooldown, deal triple effects.\r\n    * **Evo A (Extended Apotheosis):** Duration 7 turns.\r\n    * **Evo B (Perfect Apotheosis):** Quintuple e",
    "effects": [
      "Become true god for 5 turns: All abilities cost 0, have 0 cooldown, deal triple effects."
    ],
    "keywords": [],
    "powerScore": 97
  },
  {
    "id": "SKILL_SINGULARITY_057",
    "name": "Eternal Throne",
    "engine": "singularity",
    "category": "Supremacy",
    "tier": 4,
    "cost": {
      "kp": 4
    },
    "cooldown": 5,
    "unlocked": true,
    "description": "** Passive: Cannot lose [Siddhi] or [Nirvana]. Gain +1 [Siddhi] every 10 turns.\r\n    * **Evo A (Rapid Throne):** Gain every 7 turns.\r\n    * **Evo B (Perfect Throne):** Also gain +5 [Nirvana] per turn ",
    "effects": [
      "Passive: Cannot lose [Siddhi] or [Nirvana]. Gain +1 [Siddhi] every 10 turns."
    ],
    "keywords": [
      "Siddhi",
      "Nirvana",
      "Siddhi",
      "Nirvana"
    ],
    "powerScore": 104
  },
  {
    "id": "SKILL_SINGULARITY_058",
    "name": "God's Mandate",
    "engine": "singularity",
    "category": "Decree",
    "tier": 4,
    "cost": {
      "kp": 4
    },
    "cooldown": 5,
    "unlocked": true,
    "description": "** Declare one absolute rule for rest of duel (example: \"I cannot take damage,\" \"Enemy cannot use abilities\").\r\n    * **Evo A (Perfect Mandate):** Declare 2 rules.\r\n    * **Evo B (Enhanced Mandate):**",
    "effects": [
      "Declare one absolute rule for rest of duel (example: \"I cannot take damage,\" \"Enemy cannot use abilities\")."
    ],
    "keywords": [],
    "powerScore": 95
  },
  {
    "id": "SKILL_SINGULARITY_059",
    "name": "Transcendent Will",
    "engine": "singularity",
    "category": "Authority",
    "tier": 4,
    "cost": {
      "kp": 5
    },
    "cooldown": 5,
    "unlocked": true,
    "description": "** Your will overwrites all other effects. Any conflict resolves in your favor automatically.\r\n    * **Evo A (Perfect Will):** Also gain +100% all effects when will activates.\r\n    * **Evo B (Sustaine",
    "effects": [
      "Your will overwrites all other effects. Any conflict resolves in your favor automatically."
    ],
    "keywords": [],
    "powerScore": 97
  },
  {
    "id": "SKILL_SINGULARITY_060",
    "name": "Brahman Merge",
    "engine": "singularity",
    "category": "Unity",
    "tier": 4,
    "cost": {
      "kp": 5
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "** Merge with universal consciousness: All entities share your buffs, you're immune to all debuffs. Lasts 5 turns.\r\n    * **Evo A (Extended Merge):** Duration 8 turns.\r\n    * **Evo B (Perfect Merge):*",
    "effects": [
      "Merge with universal consciousness: All entities share your buffs, you're immune to all debuffs. Lasts 5 turns."
    ],
    "keywords": [],
    "powerScore": 98
  },
  {
    "id": "SKILL_SINGULARITY_061",
    "name": "Void Touch",
    "engine": "singularity",
    "category": "Erasure",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Apply [Erasure]: Target loses 25% of all current resources.\r\n    * **Evo A (Perfect Touch):** 50% loss.\r\n    * **Evo B (Spreading Touch):** Affects all enemies.\r\n    * **Note:** *Drain everything. ",
    "effects": [
      "Apply [Erasure]: Target loses 25% of all current resources."
    ],
    "keywords": [
      "Erasure"
    ],
    "powerScore": 49
  },
  {
    "id": "SKILL_SINGULARITY_062",
    "name": "Null Field",
    "engine": "singularity",
    "category": "Zone",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Create 3×3 field for 3 turns: No abilities can be used inside.\r\n    * **Evo A (Perfect Field):** 5×5 field.\r\n    * **Evo B (Extended Field):** Duration 5 turns.\r\n    * **Note:** *Dead zone. Silence",
    "effects": [
      "Create 3×3 field for 3 turns: No abilities can be used inside."
    ],
    "keywords": [],
    "powerScore": 48
  },
  {
    "id": "SKILL_SINGULARITY_063",
    "name": "Concept Deletion",
    "engine": "singularity",
    "category": "Fundamental",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Delete one concept for 3 turns (example: \"damage,\" \"healing,\" \"buffs\").\r\n    * **Evo A (Extended Deletion):** Duration 5 turns.\r\n    * **Evo B (Perfect Deletion):** Delete 2 concepts.\r\n    * **Note",
    "effects": [
      "Delete one concept for 3 turns (example: \"damage,\" \"healing,\" \"buffs\")."
    ],
    "keywords": [],
    "powerScore": 50
  },
  {
    "id": "SKILL_SINGULARITY_064",
    "name": "Existence Drain",
    "engine": "singularity",
    "category": "Life Steal",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Drain 50 Ojas from target. You gain half as [Heal].\r\n    * **Evo A (Perfect Drain):** Drain 100, gain full amount.\r\n    * **Evo B (Mass Drain):** Affects all enemies.\r\n    * **Note:** *Vampire void",
    "effects": [
      "Drain 50 Ojas from target. You gain half as [Heal]."
    ],
    "keywords": [
      "Heal"
    ],
    "powerScore": 51
  },
  {
    "id": "SKILL_SINGULARITY_065",
    "name": "Unmaking",
    "engine": "singularity",
    "category": "Reversal",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Undo target's last 3 actions completely.\r\n    * **Evo A (Perfect Unmaking):** Last 5 actions.\r\n    * **Evo B (Mass Unmaking):** Affects all enemies.\r\n    * **Note:** *Reverse time. Erase progress.*",
    "effects": [
      "Undo target's last 3 actions completely."
    ],
    "keywords": [],
    "powerScore": 71
  },
  {
    "id": "SKILL_SINGULARITY_066",
    "name": "Entropy Wave",
    "engine": "singularity",
    "category": "AoE",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** All entities lose 20% max Ojas permanently this duel. Deal 40 damage to all.\r\n    * **Evo A (Perfect Entropy):** 30% max Ojas loss.\r\n    * **Evo B (Selective Entropy):** Only affects enemies.\r\n    ",
    "effects": [
      "All entities lose 20% max Ojas permanently this duel. Deal 40 damage to all."
    ],
    "keywords": [],
    "powerScore": 72
  },
  {
    "id": "SKILL_SINGULARITY_067",
    "name": "Oblivion",
    "engine": "singularity",
    "category": "Ultimate Erase",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Target entity ceases to exist. Removed from game entirely, cannot be revived.\r\n    * **Evo A (Perfect Oblivion):** Remove 2 entities.\r\n    * **Evo B (Mass Oblivion):** Affects all enemies below 25%",
    "effects": [
      "Target entity ceases to exist. Removed from game entirely, cannot be revived."
    ],
    "keywords": [],
    "powerScore": 74
  },
  {
    "id": "SKILL_SINGULARITY_068",
    "name": "Void Cascade",
    "engine": "singularity",
    "category": "Chain Deletion",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Remove one buff. For each buff removed, remove another (chain effect).\r\n    * **Evo A (Perfect Cascade):** Also damages for 20 per buff removed.\r\n    * **Evo B (Mass Cascade):** Affects all enemies",
    "effects": [
      "Remove one buff. For each buff removed, remove another (chain effect)."
    ],
    "keywords": [],
    "powerScore": 73
  },
  {
    "id": "SKILL_SINGULARITY_069",
    "name": "Nihility",
    "engine": "singularity",
    "category": "Anti-Existence",
    "tier": 4,
    "cost": {
      "kp": 4
    },
    "cooldown": 5,
    "unlocked": true,
    "description": "** For 3 turns, nothing can be created (no buffs, healing, resources, entities).\r\n    * **Evo A (Extended Nihility):** Duration 5 turns.\r\n    * **Evo B (Selective Nihility):** Only prevents enemy crea",
    "effects": [
      "For 3 turns, nothing can be created (no buffs, healing, resources, entities)."
    ],
    "keywords": [],
    "powerScore": 95
  },
  {
    "id": "SKILL_SINGULARITY_070",
    "name": "Memory Void",
    "engine": "singularity",
    "category": "Amnesia",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Enemy forgets all abilities used this duel. Can only use base abilities.\r\n    * **Evo A (Perfect Void):** Also reset all progress/stacks to 0.\r\n    * **Evo B (Mass Void):** Affects all enemies.\r\n  ",
    "effects": [
      "Enemy forgets all abilities used this duel. Can only use base abilities."
    ],
    "keywords": [],
    "powerScore": 71
  },
  {
    "id": "SKILL_SINGULARITY_071",
    "name": "Vacuum",
    "engine": "singularity",
    "category": "Removal",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Remove all active effects from battlefield (buffs, debuffs, zones, everything).\r\n    * **Evo A (Selective Vacuum):** Only remove enemy effects.\r\n    * **Evo B (Perfect Vacuum):** Removed effects de",
    "effects": [
      "Remove all active effects from battlefield (buffs, debuffs, zones, everything)."
    ],
    "keywords": [],
    "powerScore": 50
  },
  {
    "id": "SKILL_SINGULARITY_072",
    "name": "Absorption",
    "engine": "singularity",
    "category": "Consumption",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Absorb defeated enemy's power. Gain +25% their max stats permanently.\r\n    * **Evo A (Perfect Absorption):** +50% stats.\r\n    * **Evo B (Complete Absorption):** Also gain their abilities for rest o",
    "effects": [
      "Absorb defeated enemy's power. Gain +25% their max stats permanently."
    ],
    "keywords": [],
    "powerScore": 72
  },
  {
    "id": "SKILL_SINGULARITY_073",
    "name": "Anti-Magic",
    "engine": "singularity",
    "category": "Cancellation",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Create anti-magic zone: No magical/energy abilities work for anyone for 3 turns.\r\n    * **Evo A (Extended Anti-Magic):** Duration 5 turns.\r\n    * **Evo B (Selective Anti-Magic):** Only affects enem",
    "effects": [
      "Create anti-magic zone: No magical/energy abilities work for anyone for 3 turns."
    ],
    "keywords": [],
    "powerScore": 73
  },
  {
    "id": "SKILL_SINGULARITY_074",
    "name": "Silence of Void",
    "engine": "singularity",
    "category": "Control",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Apply [Silence] that cannot be cleansed. Lasts 3 turns.\r\n    * **Evo A (Extended Silence):** 5 turns.\r\n    * **Evo B (Perfect Silence):** Also drain 10 resources per turn.\r\n    * **Note:** *Unclean",
    "effects": [
      "Apply [Silence] that cannot be cleansed. Lasts 3 turns."
    ],
    "keywords": [
      "Silence"
    ],
    "powerScore": 73
  },
  {
    "id": "SKILL_SINGULARITY_075",
    "name": "Dimensional Collapse",
    "engine": "singularity",
    "category": "Annihilation",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Collapse pocket dimension. All entities inside take 150 damage.\r\n    * **Evo A (Perfect Collapse):** 250 damage.\r\n    * **Evo B (Selective Collapse):** Only damages enemies.\r\n    * **Note:** *Implo",
    "effects": [
      "Collapse pocket dimension. All entities inside take 150 damage."
    ],
    "keywords": [],
    "powerScore": 74
  },
  {
    "id": "SKILL_SINGULARITY_076",
    "name": "Unmake Reality",
    "engine": "singularity",
    "category": "Meta Deletion",
    "tier": 4,
    "cost": {
      "kp": 4
    },
    "cooldown": 5,
    "unlocked": true,
    "description": "** Choose one aspect of game (example: \"All healing,\" \"All damage\"). It no longer exists for 5 turns.\r\n    * **Evo A (Extended Unmake):** Duration 8 turns.\r\n    * **Evo B (Perfect Unmake):** Remove 2 ",
    "effects": [
      "Choose one aspect of game (example: \"All healing,\" \"All damage\"). It no longer exists for 5 turns."
    ],
    "keywords": [],
    "powerScore": 96
  },
  {
    "id": "SKILL_SINGULARITY_077",
    "name": "Black Hole",
    "engine": "singularity",
    "category": "Gravity",
    "tier": 4,
    "cost": {
      "kp": 4
    },
    "cooldown": 5,
    "unlocked": true,
    "description": "** Create singularity: All entities pulled to center, take 50 damage per turn, cannot escape for 3 turns.\r\n    * **Evo A (Perfect Hole):** 80 damage per turn.\r\n    * **Evo B (Selective Hole):** Only a",
    "effects": [
      "Create singularity: All entities pulled to center, take 50 damage per turn, cannot escape for 3 turns."
    ],
    "keywords": [],
    "powerScore": 95
  },
  {
    "id": "SKILL_SINGULARITY_078",
    "name": "Final Void",
    "engine": "singularity",
    "category": "Ultimate Annihilation",
    "tier": 4,
    "cost": {
      "kp": 5
    },
    "cooldown": 5,
    "unlocked": true,
    "description": "** Once per duel: Reduce all enemies to 1 Ojas. They cannot heal for 3 turns.\r\n    * **Evo A (Perfect Void):** Also [Silence] them for duration.\r\n    * **Evo B (Extended Void):** Duration 5 turns.\r\n  ",
    "effects": [
      "Once per duel: Reduce all enemies to 1 Ojas. They cannot heal for 3 turns."
    ],
    "keywords": [
      "Silence"
    ],
    "powerScore": 99
  },
  {
    "id": "SKILL_SINGULARITY_079",
    "name": "Entropy God",
    "engine": "singularity",
    "category": "Passive",
    "tier": 4,
    "cost": {
      "kp": 4
    },
    "cooldown": 5,
    "unlocked": true,
    "description": "** Passive: All enemy effects decay 50% faster. Yours decay 50% slower.\r\n    * **Evo A (Perfect Entropy):** Enemy 75% faster, yours 75% slower.\r\n    * **Evo B (Complete Entropy):** Enemy effects decay",
    "effects": [
      "Passive: All enemy effects decay 50% faster. Yours decay 50% slower."
    ],
    "keywords": [],
    "powerScore": 96
  },
  {
    "id": "SKILL_SINGULARITY_080",
    "name": "Omega Point",
    "engine": "singularity",
    "category": "Endgame",
    "tier": 4,
    "cost": {
      "kp": 5
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "** After 20 turns, automatically win duel if you're still alive.\r\n    * **Evo A (Rapid Omega):** Trigger at 15 turns.\r\n    * **Evo B (Perfect Omega):** Trigger at 10 turns.\r\n    * **Note:** *Inevitabl",
    "effects": [
      "After 20 turns, automatically win duel if you're still alive."
    ],
    "keywords": [],
    "powerScore": 98
  },
  {
    "id": "SKILL_SINGULARITY_081",
    "name": "Unity Specialist",
    "engine": "singularity",
    "category": "Brahman Path",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Cannot use Void abilities. All Unity/merge abilities +150%. Share all benefits with allies automatically.\r\n    * **Evo A (Perfect Unity):** +200% effects.\r\n    * **Evo B (Deep Unity):** Allies gain",
    "effects": [
      "Cannot use Void abilities. All Unity/merge abilities +150%. Share all benefits with allies automatically."
    ],
    "keywords": [],
    "powerScore": 72
  },
  {
    "id": "SKILL_SINGULARITY_082",
    "name": "Void Specialist",
    "engine": "singularity",
    "category": "Shunya Path",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Cannot use Creation abilities. All deletion/erasure effects +150%. Immune to healing.\r\n    * **Evo A (Perfect Void):** +200% effects.\r\n    * **Evo B (Master Void):** Gain Ojas from destroying thing",
    "effects": [
      "Cannot use Creation abilities. All deletion/erasure effects +150%. Immune to healing."
    ],
    "keywords": [],
    "powerScore": 72
  },
  {
    "id": "SKILL_SINGULARITY_083",
    "name": "Power Specialist",
    "engine": "singularity",
    "category": "Shakti Path",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Cannot use control abilities. All damage/power effects +150%. Gain [Siddhi] 2x faster.\r\n    * **Evo A (Perfect Power):** +200% effects.\r\n    * **Evo B (Master Power):** Each attack grants +5% perma",
    "effects": [
      "Cannot use control abilities. All damage/power effects +150%. Gain [Siddhi] 2x faster."
    ],
    "keywords": [
      "Siddhi"
    ],
    "powerScore": 74
  },
  {
    "id": "SKILL_SINGULARITY_084",
    "name": "Illusion Specialist",
    "engine": "singularity",
    "category": "Maya Path",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Cannot use direct damage. All reality warps +150%. Can create 3 illusions of yourself.\r\n    * **Evo A (Perfect Illusion):** +200% effects.\r\n    * **Evo B (Master Illusion):** Illusions have 75% you",
    "effects": [
      "Cannot use direct damage. All reality warps +150%. Can create 3 illusions of yourself."
    ],
    "keywords": [],
    "powerScore": 72
  },
  {
    "id": "SKILL_SINGULARITY_085",
    "name": "Liberation Specialist",
    "engine": "singularity",
    "category": "Moksha Path",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Cannot use limiting abilities. All transcendence effects +150%. Start with 5 [Siddhi].\r\n    * **Evo A (Perfect Liberation):** +200% effects.\r\n    * **Evo B (Complete Liberation):** No ability costs",
    "effects": [
      "Cannot use limiting abilities. All transcendence effects +150%. Start with 5 [Siddhi]."
    ],
    "keywords": [
      "Siddhi"
    ],
    "powerScore": 74
  },
  {
    "id": "SKILL_SINGULARITY_086",
    "name": "Ascended Master",
    "engine": "singularity",
    "category": "Meta",
    "tier": 4,
    "cost": {
      "kp": 4
    },
    "cooldown": 5,
    "unlocked": true,
    "description": "** Can use ALL Singularity paths simultaneously but at -30% potency each.\r\n    * **Evo A (Balanced Master):** No penalty.\r\n    * **Evo B (Perfect Master):** All paths +25% potency instead.\r\n    * **No",
    "effects": [
      "Can use ALL Singularity paths simultaneously but at -30% potency each."
    ],
    "keywords": [],
    "powerScore": 95
  },
  {
    "id": "SKILL_SINGULARITY_087",
    "name": "Ananda Generator",
    "engine": "singularity",
    "category": "Resource Engine",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Passive: Gain +5 Ananda per turn. Max Ananda increased to 150.\r\n    * **Evo A (Perfect Generator):** +10 Ananda per turn.\r\n    * **Evo B (Infinite Generator):** No Ananda cap.\r\n    * **Note:** *Res",
    "effects": [
      "Passive: Gain +5 Ananda per turn. Max Ananda increased to 150."
    ],
    "keywords": [],
    "powerScore": 71
  },
  {
    "id": "SKILL_SINGULARITY_088",
    "name": "Siddhi Accumulator",
    "engine": "singularity",
    "category": "Permanent Growth",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Passive: Gain +1 [Siddhi] every 8 turns automatically.\r\n    * **Evo A (Rapid Accumulator):** Every 5 turns.\r\n    * **Evo B (Perfect Accumulator):** Every 3 turns.\r\n    * **Note:** *Inevitable god. ",
    "effects": [
      "Passive: Gain +1 [Siddhi] every 8 turns automatically."
    ],
    "keywords": [
      "Siddhi"
    ],
    "powerScore": 76
  },
  {
    "id": "SKILL_SINGULARITY_089",
    "name": "Nirvana Overflow",
    "engine": "singularity",
    "category": "Buff Engine",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** When [Nirvana] reaches 10 stacks, trigger explosion: +500% all effects for 1 turn, reset to 5 stacks.\r\n    * **Evo A (Perfect Overflow):** +1000% effects.\r\n    * **Evo B (Sustained Overflow):** Las",
    "effects": [
      "When [Nirvana] reaches 10 stacks, trigger explosion: +500% all effects for 1 turn, reset to 5 stacks."
    ],
    "keywords": [
      "Nirvana"
    ],
    "powerScore": 75
  },
  {
    "id": "SKILL_SINGULARITY_090",
    "name": "Transcendent Existence",
    "engine": "singularity",
    "category": "Ultimate Passive",
    "tier": 4,
    "cost": {
      "kp": 5
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "** Passive: All singularity abilities cost -50%. Gain +1 [Siddhi], +5 [Nirvana], +20 Ananda every turn.\r\n    * **Evo A (Perfect Existence):** Cost -75%.\r\n    * **Evo B (Divine Existence):** Triple res",
    "effects": [
      "Passive: All singularity abilities cost -50%. Gain +1 [Siddhi], +5 [Nirvana], +20 Ananda every turn."
    ],
    "keywords": [
      "Siddhi",
      "Nirvana"
    ],
    "powerScore": 102
  },
  {
    "id": "SKILL_SINGULARITY_091",
    "name": "Glass Singularity",
    "engine": "singularity",
    "category": "Risk",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Max Ojas reduced to 50. All Singularity effects +300%.\r\n    * **Evo A (Perfect Glass):** +500% effects.\r\n    * **Evo B (Tolerable Glass):** Max Ojas only reduced to 100.\r\n    * **Note:** *Nuclear g",
    "effects": [
      "Max Ojas reduced to 50. All Singularity effects +300%."
    ],
    "keywords": [],
    "powerScore": 74
  },
  {
    "id": "SKILL_SINGULARITY_092",
    "name": "Tank Singularity",
    "engine": "singularity",
    "category": "Defense",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** +200% max Ojas, but Singularity effects -40%.\r\n    * **Evo A (Perfect Tank):** +300% Ojas.\r\n    * **Evo B (Tolerable Tank):** Only -20% effect penalty.\r\n    * **Note:** *Immortal god. Sustained pow",
    "effects": [
      "+200% max Ojas, but Singularity effects -40%."
    ],
    "keywords": [],
    "powerScore": 73
  },
  {
    "id": "SKILL_SINGULARITY_093",
    "name": "Solo Singularity",
    "engine": "singularity",
    "category": "Lone Wolf",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** If no allies, all Singularity effects +200%, start with 8 [Siddhi].\r\n    * **Evo A (Perfect Solo):** +300% effects.\r\n    * **Evo B (Master Solo):** Start with 10 [Siddhi] (god tier immediately).\r\n ",
    "effects": [
      "If no allies, all Singularity effects +200%, start with 8 [Siddhi]."
    ],
    "keywords": [
      "Siddhi",
      "Siddhi"
    ],
    "powerScore": 78
  },
  {
    "id": "SKILL_SINGULARITY_094",
    "name": "Team Singularity",
    "engine": "singularity",
    "category": "Network",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** For each ally, gain +50% Singularity effects and +2 [Siddhi].\r\n    * **Evo A (Perfect Team):** +100% per ally.\r\n    * **Evo B (Master Team):** +4 [Siddhi] per ally.\r\n    * **Note:** *Collective god",
    "effects": [
      "For each ally, gain +50% Singularity effects and +2 [Siddhi]."
    ],
    "keywords": [
      "Siddhi",
      "Siddhi"
    ],
    "powerScore": 78
  },
  {
    "id": "SKILL_SINGULARITY_095",
    "name": "Random Singularity",
    "engine": "singularity",
    "category": "Chaos",
    "tier": 4,
    "cost": {
      "kp": 4
    },
    "cooldown": 5,
    "unlocked": true,
    "description": "** All Singularity effects have random potency (0%-500%).\r\n    * **Evo A (Controlled Random):** Range 100%-500%.\r\n    * **Evo B (Perfect Random):** Range 200%-1000%.\r\n    * **Note:** *Chaotic god. Ext",
    "effects": [
      "All Singularity effects have random potency (0%-500%)."
    ],
    "keywords": [],
    "powerScore": 95
  },
  {
    "id": "SKILL_SINGULARITY_096",
    "name": "Perfect Singularity",
    "engine": "singularity",
    "category": "Consistency",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** All Singularity effects have exact listed potency—no variance, always reliable.\r\n    * **Evo A (Enhanced Perfect):** All effects +30% base potency.\r\n    * **Evo B (Stable Perfect):** Immune to all ",
    "effects": [
      "All Singularity effects have exact listed potency—no variance, always reliable."
    ],
    "keywords": [],
    "powerScore": 74
  },
  {
    "id": "SKILL_SINGULARITY_097",
    "name": "Minimalist Singularity",
    "engine": "singularity",
    "category": "Restriction",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Can only use 5 Singularity glyphs total, but they cost -75% and have +200% effects.\r\n    * **Evo A (Perfect Minimalism):** +300% effects.\r\n    * **Evo B (Master Minimalism):** Cost -90%.\r\n    * **N",
    "effects": [
      "Can only use 5 Singularity glyphs total, but they cost -75% and have +200% effects."
    ],
    "keywords": [],
    "powerScore": 74
  },
  {
    "id": "SKILL_SINGULARITY_098",
    "name": "Maximalist Singularity",
    "engine": "singularity",
    "category": "Complexity",
    "tier": 4,
    "cost": {
      "kp": 4
    },
    "cooldown": 5,
    "unlocked": true,
    "description": "** Can use 25 Singularity glyphs. For each over 15, gain +10% all effects.\r\n    * **Evo A (Perfect Maximalism):** +15% per glyph.\r\n    * **Evo B (Master Maximalism):** Can use 30 glyphs.\r\n    * **Note",
    "effects": [
      "Can use 25 Singularity glyphs. For each over 15, gain +10% all effects."
    ],
    "keywords": [],
    "powerScore": 96
  },
  {
    "id": "SKILL_SINGULARITY_099",
    "name": "Adaptive Singularity",
    "engine": "singularity",
    "category": "Flexibility",
    "tier": 4,
    "cost": {
      "kp": 4
    },
    "cooldown": 5,
    "unlocked": true,
    "description": "** Can copy one Singularity ability from any source every turn and use it at +50% potency.\r\n    * **Evo A (Perfect Adaptive):** Copy 2 abilities.\r\n    * **Evo B (Master Adaptive):** Copies permanent t",
    "effects": [
      "Can copy one Singularity ability from any source every turn and use it at +50% potency."
    ],
    "keywords": [],
    "powerScore": 95
  },
  {
    "id": "SKILL_SINGULARITY_100",
    "name": "Absolute Singularity",
    "engine": "singularity",
    "category": "Ultimate",
    "tier": 4,
    "cost": {
      "kp": 5
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "** Passive: All restrictions removed. All caps removed. All costs removed. Gain +10 [Siddhi], +10 [Nirvana] per turn. Cannot lose.\r\n     * **Evo A (Perfect Absolute):** Start duel at 10 [Siddhi], 10 [",
    "effects": [
      "Passive: All restrictions removed. All caps removed. All costs removed. Gain +10 [Siddhi], +10 [Nirvana] per turn. Cannot lose."
    ],
    "keywords": [
      "Siddhi",
      "Nirvana",
      "Siddhi",
      "Nirvana"
    ],
    "powerScore": 108
  },
  {
    "id": "SKILL_TANTRA_001",
    "name": "Resonant Detonation",
    "engine": "tantra",
    "category": "Catalyst",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Consume all *types* of Resonance on a target. For each unique Resonance type consumed (e.g., [Decay], [Stasis], [Discord]), deal 15 AoE damage around the target.\r\n    *   **Evo A (Chain Reaction):*",
    "effects": [
      "** Consume all *types* of Resonance on a target. For each unique Resonance type consumed (e.g., [Dec..."
    ],
    "keywords": [
      "Decay",
      "Stasis",
      "Discord"
    ],
    "powerScore": 54
  },
  {
    "id": "SKILL_TANTRA_002",
    "name": "Cull the Weak",
    "engine": "tantra",
    "category": "Execute",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Deal 20 damage to a target. If the target is below 30% Ojas, the damage is doubled and applies 2 stacks of [Decay].\r\n    *   **Evo A (Ruthless Precision):** The execute threshold is increased to 40",
    "effects": [
      "Deal 20 damage to a target. If the target is below 30% Ojas, the damage is doubled and applies 2 stacks of [Decay]."
    ],
    "keywords": [
      "Decay",
      "Decay"
    ],
    "powerScore": 51
  },
  {
    "id": "SKILL_TANTRA_003",
    "name": "Withering Curse",
    "engine": "tantra",
    "category": "DoT",
    "tier": 1,
    "cost": {
      "kp": 2
    },
    "cooldown": 1,
    "unlocked": true,
    "description": "** Apply a debuff for 3 turns: \"Target cannot be healed.\" At the end of the duration, the target takes damage equal to the healing they would have received. Applies 2 [Decay].\r\n    *   **Evo A (Causti",
    "effects": [
      "** Apply a debuff for 3 turns: \"Target cannot be healed.\" At the end of the duration, the target tak..."
    ],
    "keywords": [
      "Decay"
    ],
    "powerScore": 27
  },
  {
    "id": "SKILL_TANTRA_005",
    "name": "Glimpse of Betrayal",
    "engine": "tantra",
    "category": "Control",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** For 1 turn, a target enemy Yantra's passive aura affects its owner and their allies instead. Applies 3 [Subservience].\r\n    *   **Evo A (Sustained Treachery):** The effect lasts for 2 turns.\r\n    *",
    "effects": [
      "For 1 turn, a target enemy Yantra's passive aura affects its owner and their allies instead. Applies 3 [Subservience]."
    ],
    "keywords": [
      "Subservience"
    ],
    "powerScore": 51
  },
  {
    "id": "SKILL_TANTRA_006",
    "name": "Forced Allegiance",
    "engine": "tantra",
    "category": "Catalyst",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Consume 5 [Subservience] stacks from an enemy Architect. The next buff they cast on themselves is also applied to you.\r\n    *   **Evo A (Perfect Mirror):** You also gain 10 Ojas when the buff is co",
    "effects": [
      "Consume 5 [Subservience] stacks from an enemy Architect. The next buff they cast on themselves is also applied to you."
    ],
    "keywords": [
      "Subservience"
    ],
    "powerScore": 52
  },
  {
    "id": "SKILL_TANTRA_008",
    "name": "Pranic Stagnation",
    "engine": "tantra",
    "category": "Lockdown",
    "tier": 1,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Apply a debuff for 2 turns: \"Target cannot gain Prana from passive sources (e.g., turn-based generation).\" Applies 3 [Stasis].\r\n    *   **Evo A (Total Blockade):** The effect now blocks all Prana g",
    "effects": [
      "Apply a debuff for 2 turns: \"Target cannot gain Prana from passive sources (e.g., turn-based generation).\" Applies 3 [Stasis]."
    ],
    "keywords": [
      "Stasis"
    ],
    "powerScore": 28
  },
  {
    "id": "SKILL_TANTRA_009",
    "name": "Field of Inertia",
    "engine": "tantra",
    "category": "Catalyst/AoE",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Consume 5 [Stasis] stacks from a target to create a 3x3 field around them for 2 turns. Units (friend and foe) inside the field cannot use movement abilities.\r\n    *   **Evo A (Expanding Field):** T",
    "effects": [
      "** Consume 5 [Stasis] stacks from a target to create a 3x3 field around them for 2 turns. Units (fri..."
    ],
    "keywords": [
      "Stasis",
      "Stunned",
      "Shield",
      "Stun"
    ],
    "powerScore": 79
  },
  {
    "id": "SKILL_TANTRA_011",
    "name": "Shared Suffering",
    "engine": "tantra",
    "category": "Debuff",
    "tier": 1,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Link two enemy Yantras for 3 turns. Whenever one takes damage, the other takes 50% of that damage. Applies 2 [Discord] to both.\r\n    *   **Evo A (Amplified Pain):** The shared damage is increased t",
    "effects": [
      "Link two enemy Yantras for 3 turns. Whenever one takes damage, the other takes 50% of that damage. Applies 2 [Discord] to both."
    ],
    "keywords": [
      "Discord"
    ],
    "powerScore": 28
  },
  {
    "id": "SKILL_TANTRA_012",
    "name": "Corrupted Boon",
    "engine": "tantra",
    "category": "Catalyst",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Consume 4 [Discord] stacks from an Architect. The next healing or shielding buff they receive is converted into a [Decay] DoT instead.\r\n    *   **Evo A (Inverted Grace):** The DoT's damage is equal",
    "effects": [
      "Consume 4 [Discord] stacks from an Architect. The next healing or shielding buff they receive is converted into a [Decay] DoT instead."
    ],
    "keywords": [
      "Discord",
      "Decay",
      "Discord"
    ],
    "powerScore": 55
  },
  {
    "id": "SKILL_TANTRA_014",
    "name": "Resonance Siphon",
    "engine": "tantra",
    "category": "Resource Denial",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Remove up to 5 Resonance stacks of a single type from a target and gain 1 Prana for each stack removed. Applies 1 [Void].\r\n    *   **Evo A (Manaforge):** Also gain 1 Prana for activating the glyph.",
    "effects": [
      "Remove up to 5 Resonance stacks of a single type from a target and gain 1 Prana for each stack removed. Applies 1 [Void]."
    ],
    "keywords": [
      "Void"
    ],
    "powerScore": 50
  },
  {
    "id": "SKILL_TANTRA_015",
    "name": "Un-naming Rite",
    "engine": "tantra",
    "category": "Banish",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Target an enemy Invocation glyph. If it has been cast this duel, [Banish] it for 2 turns. If it has not been cast, increase its Sanctity/Anarchy cost by 10. Applies 4 [Void].\r\n    *   **Evo A (Memo",
    "effects": [
      "** Target an enemy Invocation glyph. If it has been cast this duel, [Banish] it for 2 turns. If it h..."
    ],
    "keywords": [
      "Banish",
      "Void"
    ],
    "powerScore": 76
  },
  {
    "id": "SKILL_TANTRA_016",
    "name": "Void Trap",
    "engine": "tantra",
    "category": "Trap",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Place a latent trap on an enemy. The next time they gain a resource (Prana, Insight, etc.), you steal 50% of it. Applies 2 [Void].\r\n    *   **Evo A (Hungering Void):** You steal 75% of the resource",
    "effects": [
      "Place a latent trap on an enemy. The next time they gain a resource (Prana, Insight, etc.), you steal 50% of it. Applies 2 [Void]."
    ],
    "keywords": [
      "Void",
      "Banish"
    ],
    "powerScore": 51
  },
  {
    "id": "SKILL_TANTRA_019",
    "name": "Dissonant Barrier",
    "engine": "tantra",
    "category": "Defensive",
    "tier": 1,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Gain a shield that absorbs 15 damage. If the shield is broken by an attack, the attacker is [Silenced] for 1 turn. Applies 1 [Discord].\r\n    * **Evo A (Feedback Pulse):** When broken, also deals 10",
    "effects": [
      "Gain a shield that absorbs 15 damage. If the shield is broken by an attack, the attacker is [Silenced] for 1 turn. Applies 1 [Discord]."
    ],
    "keywords": [
      "Silenced",
      "Discord",
      "Silence"
    ],
    "powerScore": 32
  },
  {
    "id": "SKILL_TANTRA_020",
    "name": "Stasis Web",
    "engine": "tantra",
    "category": "AoE Control",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Apply 2 stacks of [Stasis] to all enemies in a target column.\r\n    * **Evo A (Widened Web):** Affects two adjacent columns.\r\n    * **Evo B (Sticky Web):** Also applies a debuff that reduces movemen",
    "effects": [
      "Apply 2 stacks of [Stasis] to all enemies in a target column."
    ],
    "keywords": [
      "Stasis"
    ],
    "powerScore": 50
  },
  {
    "id": "SKILL_TANTRA_021",
    "name": "Ashen Vortex",
    "engine": "tantra",
    "category": "Zone DoT",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Create a 3x3 vortex for 2 turns: Enemies inside take 6 [Burn] damage at the start of their turn; if they move, apply 1 [Decay].\r\n    * **Evo A (Expanding Vortex):** Radius increases to 5x5.\r\n    * ",
    "effects": [
      "Create a 3x3 vortex for 2 turns: Enemies inside take 6 [Burn] damage at the start of their turn; if they move, apply 1 [Decay]."
    ],
    "keywords": [
      "Burn",
      "Decay"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_TANTRA_022",
    "name": "Thermal Overrun",
    "engine": "tantra",
    "category": "DoT Manipulation",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Consume up to 3 [Burn] stacks from each enemy; extend remaining [Burn]/[Decay] durations by 1 turn and deal 5 damage per stack consumed.\r\n    * **Evo A (Accelerant):** +2 turns instead of +1.\r\n    ",
    "effects": [
      "Consume up to 3 [Burn] stacks from each enemy; extend remaining [Burn]/[Decay] durations by 1 turn and deal 5 damage per stack consumed."
    ],
    "keywords": [
      "Burn",
      "Burn",
      "Decay"
    ],
    "powerScore": 54
  },
  {
    "id": "SKILL_TANTRA_023",
    "name": "Ember Reprise",
    "engine": "tantra",
    "category": "Echo",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** For the next 2 turns, the first time you detonate [Decay], repeat 50% of that detonation damage at end of turn.\r\n    * **Evo A (Full Refrain):** Echo repeats 100% instead of 50%.\r\n    * **Evo B (Li",
    "effects": [
      "For the next 2 turns, the first time you detonate [Decay], repeat 50% of that detonation damage at end of turn."
    ],
    "keywords": [
      "Decay",
      "Burn",
      "Decay",
      "Decay",
      "Decay",
      "Decay"
    ],
    "powerScore": 59
  },
  {
    "id": "SKILL_TANTRA_025",
    "name": "Command Override",
    "engine": "tantra",
    "category": "Prediction/Control",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Force an enemy Architect to repeat their last non-Invocation glyph this turn; you choose a valid allied target for it. Consumes 3 [Subservience].\r\n    * **Evo A (Double Override):** Repeat twice on",
    "effects": [
      "Force an enemy Architect to repeat their last non-Invocation glyph this turn; you choose a valid allied target for it. Consumes 3 [Subservience]."
    ],
    "keywords": [
      "Subservience"
    ],
    "powerScore": 51
  },
  {
    "id": "SKILL_TANTRA_026",
    "name": "Covenant Chain",
    "engine": "tantra",
    "category": "Buff Intercept",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** For 2 turns, whenever the enemy casts a self-buff, you choose whether it applies to them or to you instead. Applies 2 [Subservience].\r\n    * **Evo A (Binding Oath):** Duration +1 turn.\r\n    * **Evo",
    "effects": [
      "For 2 turns, whenever the enemy casts a self-buff, you choose whether it applies to them or to you instead. Applies 2 [Subservience]."
    ],
    "keywords": [
      "Subservience",
      "Subservience"
    ],
    "powerScore": 52
  },
  {
    "id": "SKILL_TANTRA_028",
    "name": "Dominion Lattice",
    "engine": "tantra",
    "category": "Link",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Link a target Architect for 2 turns: their first glyph each turn can be redirected by you (once). Applies 3 [Subservience].\r\n    * **Evo A (Tighten Lattice):** Redirect twice per turn.\r\n    * **Evo",
    "effects": [
      "Link a target Architect for 2 turns: their first glyph each turn can be redirected by you (once). Applies 3 [Subservience]."
    ],
    "keywords": [
      "Subservience"
    ],
    "powerScore": 52
  },
  {
    "id": "SKILL_TANTRA_029",
    "name": "Glacial Hour",
    "engine": "tantra",
    "category": "Global Tempo",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** For 2 turns, global cooldown ticks are 50% slower (rounding up). Applies 1 [Stasis] to all enemy glyphs on cast.\r\n    * **Evo A (Permafrost):** 3 turns instead of 2.\r\n    * **Evo B (Selective Freez",
    "effects": [
      "For 2 turns, global cooldown ticks are 50% slower (rounding up). Applies 1 [Stasis] to all enemy glyphs on cast."
    ],
    "keywords": [
      "Stasis"
    ],
    "powerScore": 73
  },
  {
    "id": "SKILL_TANTRA_030",
    "name": "Time Snare",
    "engine": "tantra",
    "category": "Trap",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Place a snare on an enemy Glyph: the next time its cooldown decreases, [Stun] its owner for 1 turn and apply 2 [Stasis].\r\n    * **Evo A (Chrono Clamp):** Also increase that glyph's cooldown by 1.\r\n",
    "effects": [
      "Place a snare on an enemy Glyph: the next time its cooldown decreases, [Stun] its owner for 1 turn and apply 2 [Stasis]."
    ],
    "keywords": [
      "Stun",
      "Stasis",
      "Stun",
      "Stasis"
    ],
    "powerScore": 55
  },
  {
    "id": "SKILL_TANTRA_032",
    "name": "Deferred Silence",
    "engine": "tantra",
    "category": "Delayed Control",
    "tier": 1,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Apply a floating [Silence] to an enemy Glyph; it triggers the next time they attempt to cast it within 2 turns. Applies 2 [Stasis].\r\n    * **Evo A (Quietus):** Duration window 3 turns.\r\n    * **Evo",
    "effects": [
      "Apply a floating [Silence] to an enemy Glyph; it triggers the next time they attempt to cast it within 2 turns. Applies 2 [Stasis]."
    ],
    "keywords": [
      "Silence",
      "Stasis"
    ],
    "powerScore": 30
  },
  {
    "id": "SKILL_TANTRA_033",
    "name": "Mirror Fracture",
    "engine": "tantra",
    "category": "Inversion",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** The next positive effect on the target becomes negative (heal → damage, buff → debuff of equal potency). Applies 2 [Discord].\r\n    * **Evo A (Shattered Boon):** Inversion potency +25%.\r\n    * **Evo",
    "effects": [
      "The next positive effect on the target becomes negative (heal → damage, buff → debuff of equal potency). Applies 2 [Discord]."
    ],
    "keywords": [
      "Discord"
    ],
    "powerScore": 51
  },
  {
    "id": "SKILL_TANTRA_034",
    "name": "Counter-Harmony Field",
    "engine": "tantra",
    "category": "Zone",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Create a field for 2 turns: enemy buffs inside have -50% potency and cost +1 Prana.\r\n    * **Evo A (Dissonant Dome):** Field lasts 3 turns.\r\n    * **Evo B (Cacophony):** On cast inside the field, a",
    "effects": [
      "Create a field for 2 turns: enemy buffs inside have -50% potency and cost +1 Prana."
    ],
    "keywords": [
      "Discord"
    ],
    "powerScore": 50
  },
  {
    "id": "SKILL_TANTRA_035",
    "name": "Discordant Reverb",
    "engine": "tantra",
    "category": "Expiry Punish",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** For 2 turns, whenever an enemy buff expires, deal 10 damage and apply 1 [Discord].\r\n    * **Evo A (Splinter Shock):** Damage 15 instead.\r\n    * **Evo B (Resounding Dissonance):** Also increase the ",
    "effects": [
      "For 2 turns, whenever an enemy buff expires, deal 10 damage and apply 1 [Discord]."
    ],
    "keywords": [
      "Discord",
      "Discord"
    ],
    "powerScore": 51
  },
  {
    "id": "SKILL_TANTRA_037",
    "name": "Void Ledger",
    "engine": "tantra",
    "category": "Economic Denial",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** For 3 turns, at the start of the enemy turn, they lose 1 resource they would have generated (Prana/Insight/Threads prioritized), and you gain 1 Prana. Applies 1 [Void].\r\n    * **Evo A (Audited Scar",
    "effects": [
      "** For 3 turns, at the start of the enemy turn, they lose 1 resource they would have generated (Pran..."
    ],
    "keywords": [
      "Void"
    ],
    "powerScore": 50
  },
  {
    "id": "SKILL_TANTRA_038",
    "name": "Banishment Well",
    "engine": "tantra",
    "category": "Tile Trap",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Choose an enemy House. The next buff or Yantra applied to that House this duel is immediately [Banished] for 2 turns. Applies 2 [Void].\r\n    * **Evo A (Deep Well):** Banish duration 3 turns.\r\n    *",
    "effects": [
      "Choose an enemy House. The next buff or Yantra applied to that House this duel is immediately [Banished] for 2 turns. Applies 2 [Void]."
    ],
    "keywords": [
      "Banished",
      "Void"
    ],
    "powerScore": 54
  },
  {
    "id": "SKILL_TANTRA_039",
    "name": "Null Recall",
    "engine": "tantra",
    "category": "Lockout",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** If a glyph was [Banished] this duel, it cannot be cast for 1 additional turn after returning. Applies 2 [Void].\r\n    * **Evo A (Total Forgetting):** Lockout becomes 2 turns.\r\n    * **Evo B (Fraying",
    "effects": [
      "If a glyph was [Banished] this duel, it cannot be cast for 1 additional turn after returning. Applies 2 [Void]."
    ],
    "keywords": [
      "Banished",
      "Void",
      "Void",
      "Heal Block",
      "Banish"
    ],
    "powerScore": 59
  },
  {
    "id": "SKILL_TANTRA_041",
    "name": "Maran Purist",
    "engine": "tantra",
    "category": "Build-Defining",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Cannot use other Karma paths. All [Burn] and [Decay] effects +100%. [Decay] stacks infinitely.\r\n    * **Evo A (Perfect Annihilation):** +150% effects instead.\r\n    * **Evo B (Rapid Burn):** [Burn] ",
    "effects": [
      "Cannot use other Karma paths. All [Burn] and [Decay] effects +100%. [Decay] stacks infinitely."
    ],
    "keywords": [
      "Burn",
      "Decay",
      "Decay",
      "Burn",
      "Decay"
    ],
    "powerScore": 60
  },
  {
    "id": "SKILL_TANTRA_042",
    "name": "Vashikaran Purist",
    "engine": "tantra",
    "category": "Build-Defining",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Cannot use other Karma paths. All [Subservience] effects +75%. Can redirect 2 enemy actions per turn.\r\n    * **Evo A (Perfect Control):** Can redirect 3 actions.\r\n    * **Evo B (Puppet Master):** [",
    "effects": [
      "Cannot use other Karma paths. All [Subservience] effects +75%. Can redirect 2 enemy actions per turn."
    ],
    "keywords": [
      "Subservience",
      "Subservience"
    ],
    "powerScore": 54
  },
  {
    "id": "SKILL_TANTRA_043",
    "name": "Stambhan Purist",
    "engine": "tantra",
    "category": "Build-Defining",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Cannot use other Karma paths. All [Stasis] and [Stun] effects +100%. Enemy cooldowns tick 50% slower.\r\n    * **Evo A (Perfect Paralysis):** [Stun] duration doubled.\r\n    * **Evo B (Time Freeze):** ",
    "effects": [
      "Cannot use other Karma paths. All [Stasis] and [Stun] effects +100%. Enemy cooldowns tick 50% slower."
    ],
    "keywords": [
      "Stasis",
      "Stun",
      "Stun"
    ],
    "powerScore": 56
  },
  {
    "id": "SKILL_TANTRA_044",
    "name": "Vidveshan Purist",
    "engine": "tantra",
    "category": "Build-Defining",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Cannot use other Karma paths. All [Discord] effects +75%. Enemy beneficial effects have 50% chance to fail.\r\n    * **Evo A (Perfect Discord):** 75% failure chance.\r\n    * **Evo B (Chaos Amplifier):",
    "effects": [
      "Cannot use other Karma paths. All [Discord] effects +75%. Enemy beneficial effects have 50% chance to fail."
    ],
    "keywords": [
      "Discord",
      "Discord"
    ],
    "powerScore": 54
  },
  {
    "id": "SKILL_TANTRA_045",
    "name": "Uchatan Purist",
    "engine": "tantra",
    "category": "Build-Defining",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Cannot use other Karma paths. All [Void] and [Banish] effects +100%. Can [Banish] 3 effects simultaneously.\r\n    * **Evo A (Perfect Nullification):** [Banish] duration doubled.\r\n    * **Evo B (Void",
    "effects": [
      "Cannot use other Karma paths. All [Void] and [Banish] effects +100%. Can [Banish] 3 effects simultaneously."
    ],
    "keywords": [
      "Void",
      "Banish",
      "Banish",
      "Banish",
      "Void"
    ],
    "powerScore": 60
  },
  {
    "id": "SKILL_TANTRA_046",
    "name": "Dual Karma Harmony",
    "engine": "tantra",
    "category": "Hybrid",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Choose 2 Karma paths at start. Can only use those 2, but transitions between them are free and grant +5 Prana.\r\n    * **Evo A (Perfect Harmony):** Gain +8 Prana per transition.\r\n    * **Evo B (Deep",
    "effects": [
      "Choose 2 Karma paths at start. Can only use those 2, but transitions between them are free and grant +5 Prana."
    ],
    "keywords": [],
    "powerScore": 71
  },
  {
    "id": "SKILL_TANTRA_047",
    "name": "Karma Anarchist",
    "engine": "tantra",
    "category": "Chaos",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Cannot specialize. Each time you use a different Karma path, deal 15 damage to all enemies and apply 1 random Resonance.\r\n    * **Evo A (Perfect Anarchy):** Damage increased to 25.\r\n    * **Evo B (",
    "effects": [
      "Cannot specialize. Each time you use a different Karma path, deal 15 damage to all enemies and apply 1 random Resonance."
    ],
    "keywords": [],
    "powerScore": 72
  },
  {
    "id": "SKILL_TANTRA_048",
    "name": "Resonance Collector",
    "engine": "tantra",
    "category": "Stacking",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Passive: Gain +1 Prana per unique Resonance type active on enemies (up to +5).\r\n    * **Evo A (Perfect Collection):** +2 Prana per type.\r\n    * **Evo B (Resonance Bonus):** Also increase all Resona",
    "effects": [
      "Passive: Gain +1 Prana per unique Resonance type active on enemies (up to +5)."
    ],
    "keywords": [],
    "powerScore": 50
  },
  {
    "id": "SKILL_TANTRA_049",
    "name": "Resonance Purge",
    "engine": "tantra",
    "category": "Anti-Tantra",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Remove all Resonances from target. Deal 20 damage per Resonance removed.\r\n    * **Evo A (Perfect Purge):** 35 damage per Resonance.\r\n    * **Evo B (Mass Purge):** Affects all enemies.\r\n    * **Note",
    "effects": [
      "Remove all Resonances from target. Deal 20 damage per Resonance removed."
    ],
    "keywords": [],
    "powerScore": 49
  },
  {
    "id": "SKILL_TANTRA_050",
    "name": "Resonance Transfer",
    "engine": "tantra",
    "category": "Tactical",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Move all Resonances from one target to another. Transferred Resonances +1 turn duration.\r\n    * **Evo A (Perfect Transfer):** +2 turns duration.\r\n    * **Evo B (Mass Transfer):** Can transfer from ",
    "effects": [
      "Move all Resonances from one target to another. Transferred Resonances +1 turn duration."
    ],
    "keywords": [],
    "powerScore": 49
  },
  {
    "id": "SKILL_TANTRA_051",
    "name": "Karma Sacrifice",
    "engine": "tantra",
    "category": "All-in",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Choose one Karma path. For rest of duel, that path +200% potency but you lose all other Karma access.\r\n    * **Evo A (Perfect Sacrifice):** +300% potency.\r\n    * **Evo B (Tolerable Sacrifice):** Ca",
    "effects": [
      "Choose one Karma path. For rest of duel, that path +200% potency but you lose all other Karma access."
    ],
    "keywords": [],
    "powerScore": 72
  },
  {
    "id": "SKILL_TANTRA_052",
    "name": "Resonance Echo",
    "engine": "tantra",
    "category": "Multiplication",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** When you apply Resonance, 50% chance to apply it twice.\r\n    * **Evo A (Perfect Echo):** 75% chance.\r\n    * **Evo B (Guaranteed Echo):** Always applies twice but at 75% duration.\r\n    * **Note:** *",
    "effects": [
      "When you apply Resonance, 50% chance to apply it twice."
    ],
    "keywords": [],
    "powerScore": 71
  },
  {
    "id": "SKILL_TANTRA_053",
    "name": "Karma Overload",
    "engine": "tantra",
    "category": "Burst",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** For 2 turns, all Karma effects trigger twice. Costs 30 Prana.\r\n    * **Evo A (Perfect Overload):** Duration 3 turns.\r\n    * **Evo B (Economic Overload):** Cost reduced to 25 Prana.\r\n    * **Note:**",
    "effects": [
      "For 2 turns, all Karma effects trigger twice. Costs 30 Prana."
    ],
    "keywords": [],
    "powerScore": 73
  },
  {
    "id": "SKILL_TANTRA_054",
    "name": "Resonance Conversion",
    "engine": "tantra",
    "category": "Flexibility",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Convert any Resonance type to any other type on target. Cooldown: 3 turns.\r\n    * **Evo A (Perfect Conversion):** Can convert 3 Resonances.\r\n    * **Evo B (Frequent Conversion):** Cooldown reduced ",
    "effects": [
      "Convert any Resonance type to any other type on target. Cooldown: 3 turns."
    ],
    "keywords": [],
    "powerScore": 50
  },
  {
    "id": "SKILL_TANTRA_055",
    "name": "Karma Memory",
    "engine": "tantra",
    "category": "Scaling",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Each unique Karma path used this duel permanently increases all Karma effects by 10% (stacks 5x).\r\n    * **Evo A (Perfect Memory):** +15% per path.\r\n    * **Evo B (Deep Memory):** No stack limit.\r\n",
    "effects": [
      "Each unique Karma path used this duel permanently increases all Karma effects by 10% (stacks 5x)."
    ],
    "keywords": [],
    "powerScore": 71
  },
  {
    "id": "SKILL_TANTRA_056",
    "name": "Burn Master",
    "engine": "tantra",
    "category": "DoT Specialist",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** [Burn] effects +75% damage. [Burn] spreads to adjacent enemies when applied.\r\n    * **Evo A (Perfect Burn):** +100% damage.\r\n    * **Evo B (Inferno Spread):** Spreads to all enemies in 3x3 area.\r\n ",
    "effects": [
      "[Burn] effects +75% damage. [Burn] spreads to adjacent enemies when applied."
    ],
    "keywords": [
      "Burn",
      "Burn"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_TANTRA_057",
    "name": "Decay Master",
    "engine": "tantra",
    "category": "Stack Specialist",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** [Decay] stacks have no cap. For each 5 stacks on target, all [Decay] damage +25%.\r\n    * **Evo A (Perfect Decay):** Bonus every 4 stacks.\r\n    * **Evo B (Enhanced Decay):** +40% damage per threshol",
    "effects": [
      "[Decay] stacks have no cap. For each 5 stacks on target, all [Decay] damage +25%."
    ],
    "keywords": [
      "Decay",
      "Decay"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_TANTRA_058",
    "name": "Rapid Burn",
    "engine": "tantra",
    "category": "Speed",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** [Burn] ticks twice per turn but has -30% damage per tick.\r\n    * **Evo A (Perfect Rapid):** Only -15% damage penalty.\r\n    * **Evo B (Intense Rapid):** No damage penalty but costs +2 Prana.\r\n    * ",
    "effects": [
      "[Burn] ticks twice per turn but has -30% damage per tick."
    ],
    "keywords": [
      "Burn"
    ],
    "powerScore": 50
  },
  {
    "id": "SKILL_TANTRA_059",
    "name": "Slow Decay",
    "engine": "tantra",
    "category": "Patience",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** [Decay] lasts +4 turns but deals -40% damage per tick.\r\n    * **Evo A (Extended Decay):** Lasts +6 turns.\r\n    * **Evo B (Tolerable Decay):** Only -25% damage penalty.\r\n    * **Note:** *Opposite of",
    "effects": [
      "[Decay] lasts +4 turns but deals -40% damage per tick."
    ],
    "keywords": [
      "Decay"
    ],
    "powerScore": 50
  },
  {
    "id": "SKILL_TANTRA_060",
    "name": "Burn-Decay Fusion",
    "engine": "tantra",
    "category": "Hybrid",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** When you apply [Burn], also apply [Decay]. Both at 75% potency.\r\n    * **Evo A (Perfect Fusion):** Both at 100% potency.\r\n    * **Evo B (Enhanced Fusion):** Also deals 10 immediate damage.\r\n    * *",
    "effects": [
      "When you apply [Burn], also apply [Decay]. Both at 75% potency."
    ],
    "keywords": [
      "Burn",
      "Decay"
    ],
    "powerScore": 75
  },
  {
    "id": "SKILL_TANTRA_061",
    "name": "Explosive Decay",
    "engine": "tantra",
    "category": "Detonation",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Detonate all [Decay] on target, dealing damage equal to (stacks × remaining duration × 3).\r\n    * **Evo A (Perfect Explosion):** ×5 instead of ×3.\r\n    * **Evo B (Chain Explosion):** Explosion spre",
    "effects": [
      "Detonate all [Decay] on target, dealing damage equal to (stacks × remaining duration × 3)."
    ],
    "keywords": [
      "Decay"
    ],
    "powerScore": 52
  },
  {
    "id": "SKILL_TANTRA_062",
    "name": "Burn Reflexion",
    "engine": "tantra",
    "category": "Counter",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** When enemy deals damage to you, apply 2 [Burn] to them.\r\n    * **Evo A (Perfect Reflexion):** Apply 4 [Burn].\r\n    * **Evo B (Widespread Reflexion):** Also affects adjacent enemies.\r\n    * **Note:*",
    "effects": [
      "When enemy deals damage to you, apply 2 [Burn] to them."
    ],
    "keywords": [
      "Burn",
      "Burn"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_TANTRA_063",
    "name": "Decay Multiplication",
    "engine": "tantra",
    "category": "Scaling",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Each [Decay] tick increases next tick's damage by 10% (resets on target death).\r\n    * **Evo A (Perfect Multiplication):** +20% per tick.\r\n    * **Evo B (Persistent Multiplication):** Doesn't reset",
    "effects": [
      "Each [Decay] tick increases next tick's damage by 10% (resets on target death)."
    ],
    "keywords": [
      "Decay"
    ],
    "powerScore": 74
  },
  {
    "id": "SKILL_TANTRA_064",
    "name": "Burn Conversion",
    "engine": "tantra",
    "category": "Resource",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Consume all [Burn] from target. Gain +2 Prana per stack consumed.\r\n    * **Evo A (Perfect Conversion):** +3 Prana per stack.\r\n    * **Evo B (Healing Conversion):** Also [Heal] 5 Ojas per stack.\r\n  ",
    "effects": [
      "Consume all [Burn] from target. Gain +2 Prana per stack consumed."
    ],
    "keywords": [
      "Burn",
      "Heal"
    ],
    "powerScore": 52
  },
  {
    "id": "SKILL_TANTRA_065",
    "name": "Decay Theft",
    "engine": "tantra",
    "category": "Anti-Tank",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Transfer all [Decay] from ally to enemy at +50% potency.\r\n    * **Evo A (Perfect Theft):** +100% potency.\r\n    * **Evo B (Mass Theft):** Can transfer from 2 allies to 2 enemies.\r\n    * **Note:** *S",
    "effects": [
      "Transfer all [Decay] from ally to enemy at +50% potency."
    ],
    "keywords": [
      "Decay"
    ],
    "powerScore": 52
  },
  {
    "id": "SKILL_TANTRA_066",
    "name": "Eternal Burn",
    "engine": "tantra",
    "category": "Permanence",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** [Burn] on target never expires but deals -50% damage per tick.\r\n    * **Evo A (Perfect Eternal):** Only -30% damage.\r\n    * **Evo B (Spreading Eternal):** Can affect 2 targets.\r\n    * **Note:** *Pe",
    "effects": [
      "[Burn] on target never expires but deals -50% damage per tick."
    ],
    "keywords": [
      "Burn"
    ],
    "powerScore": 75
  },
  {
    "id": "SKILL_TANTRA_067",
    "name": "Decay Amplifier",
    "engine": "tantra",
    "category": "Multiplier",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** For 3 turns, all [Decay] damage dealt by anyone doubled.\r\n    * **Evo A (Perfect Amplifier):** Tripled instead of doubled.\r\n    * **Evo B (Extended Amplifier):** Duration 4 turns.\r\n    * **Note:** ",
    "effects": [
      "For 3 turns, all [Decay] damage dealt by anyone doubled."
    ],
    "keywords": [
      "Decay"
    ],
    "powerScore": 73
  },
  {
    "id": "SKILL_TANTRA_068",
    "name": "Stun Master",
    "engine": "tantra",
    "category": "Control Specialist",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** All [Stun] effects +2 turns duration. Cannot be reduced by enemy effects.\r\n    * **Evo A (Perfect Stun):** +3 turns duration.\r\n    * **Evo B (Mass Stun):** [Stun] spreads to adjacent enemies.\r\n    ",
    "effects": [
      "All [Stun] effects +2 turns duration. Cannot be reduced by enemy effects."
    ],
    "keywords": [
      "Stun",
      "Stun"
    ],
    "powerScore": 54
  },
  {
    "id": "SKILL_TANTRA_069",
    "name": "Silence Master",
    "engine": "tantra",
    "category": "Lockout",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** All [Silence] effects +2 turns. [Silenced] enemies take +25% damage.\r\n    * **Evo A (Perfect Silence):** +3 turns duration.\r\n    * **Evo B (Punishing Silence):** +40% damage taken.\r\n    * **Note:**",
    "effects": [
      "All [Silence] effects +2 turns. [Silenced] enemies take +25% damage."
    ],
    "keywords": [
      "Silence",
      "Silenced"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_TANTRA_070",
    "name": "Chain Stun",
    "engine": "tantra",
    "category": "Combo",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** When [Stun] expires on target, 50% chance to apply another 1-turn [Stun].\r\n    * **Evo A (Perfect Chain):** 75% chance.\r\n    * **Evo B (Guaranteed Chain):** Always chains but at 1 turn only.\r\n    *",
    "effects": [
      "When [Stun] expires on target, 50% chance to apply another 1-turn [Stun]."
    ],
    "keywords": [
      "Stun",
      "Stun"
    ],
    "powerScore": 75
  },
  {
    "id": "SKILL_TANTRA_071",
    "name": "Cooldown Destroyer",
    "engine": "tantra",
    "category": "Tempo",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Increase all enemy cooldowns by 3 turns. Once per duel.\r\n    * **Evo A (Perfect Destruction):** Increase by 5 turns.\r\n    * **Evo B (Frequent Destruction):** Usable twice per duel.\r\n    * **Note:**",
    "effects": [
      "Increase all enemy cooldowns by 3 turns. Once per duel."
    ],
    "keywords": [],
    "powerScore": 72
  },
  {
    "id": "SKILL_TANTRA_072",
    "name": "Stasis Field",
    "engine": "tantra",
    "category": "Zone Control",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Create 3x3 field for 3 turns: Enemies inside have all actions cost +2 Prana.\r\n    * **Evo A (Perfect Field):** +4 Prana cost.\r\n    * **Evo B (Extended Field):** Duration 4 turns.\r\n    * **Note:** *",
    "effects": [
      "Create 3x3 field for 3 turns: Enemies inside have all actions cost +2 Prana."
    ],
    "keywords": [],
    "powerScore": 50
  },
  {
    "id": "SKILL_TANTRA_073",
    "name": "Subservience Master",
    "engine": "tantra",
    "category": "Puppet",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** At 10 [Subservience] stacks, fully control target for 1 turn.\r\n    * **Evo A (Perfect Control):** Only requires 8 stacks.\r\n    * **Evo B (Extended Control):** Control lasts 2 turns.\r\n    * **Note:*",
    "effects": [
      "At 10 [Subservience] stacks, fully control target for 1 turn."
    ],
    "keywords": [
      "Subservience"
    ],
    "powerScore": 73
  },
  {
    "id": "SKILL_TANTRA_074",
    "name": "Discord Amplifier",
    "engine": "tantra",
    "category": "Chaos",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** For each [Discord] on enemy, they have +10% chance for actions to fail entirely.\r\n    * **Evo A (Perfect Amplifier):** +15% per stack.\r\n    * **Evo B (Cascading Discord):** Failed actions apply +1 ",
    "effects": [
      "For each [Discord] on enemy, they have +10% chance for actions to fail entirely."
    ],
    "keywords": [
      "Discord",
      "Discord"
    ],
    "powerScore": 54
  },
  {
    "id": "SKILL_TANTRA_075",
    "name": "Void Zone",
    "engine": "tantra",
    "category": "Denial",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Create 3x3 zone for 2 turns: No effects can be applied inside (friend or foe).\r\n    * **Evo A (Perfect Void):** Duration 3 turns.\r\n    * **Evo B (Selective Void):** Only affects enemies.\r\n    * **N",
    "effects": [
      "Create 3x3 zone for 2 turns: No effects can be applied inside (friend or foe)."
    ],
    "keywords": [],
    "powerScore": 72
  },
  {
    "id": "SKILL_TANTRA_076",
    "name": "Resource Lock",
    "engine": "tantra",
    "category": "Economy",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Enemy cannot gain any resources for 3 turns.\r\n    * **Evo A (Perfect Lock):** Duration 4 turns.\r\n    * **Evo B (Mass Lock):** Affects all enemies.\r\n    * **Note:** *Economic shutdown. Starvation st",
    "effects": [
      "Enemy cannot gain any resources for 3 turns."
    ],
    "keywords": [],
    "powerScore": 71
  },
  {
    "id": "SKILL_TANTRA_077",
    "name": "Banish Master",
    "engine": "tantra",
    "category": "Denial",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** All [Banish] effects +2 turns. Can [Banish] 5 effects simultaneously.\r\n    * **Evo A (Perfect Banish):** +3 turns duration.\r\n    * **Evo B (Permanent Banish):** [Banished] effects cost +5 Prana whe",
    "effects": [
      "All [Banish] effects +2 turns. Can [Banish] 5 effects simultaneously."
    ],
    "keywords": [
      "Banish",
      "Banish",
      "Banished"
    ],
    "powerScore": 78
  },
  {
    "id": "SKILL_TANTRA_078",
    "name": "Paralysis Loop",
    "engine": "tantra",
    "category": "Chain",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** When you apply [Stasis], 25% chance to also apply [Stun] (1 turn).\r\n    * **Evo A (Perfect Loop):** 50% chance.\r\n    * **Evo B (Guaranteed Loop):** Always applies but [Stun] can be [Cleansed] norma",
    "effects": [
      "When you apply [Stasis], 25% chance to also apply [Stun] (1 turn)."
    ],
    "keywords": [
      "Stasis",
      "Stun",
      "Stun",
      "Cleansed"
    ],
    "powerScore": 81
  },
  {
    "id": "SKILL_TANTRA_079",
    "name": "Control Overload",
    "engine": "tantra",
    "category": "Burst",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** For 2 turns, all control effects ([Stun]/[Silence]/[Stasis]) have +100% duration. Costs 30 Prana.\r\n    * **Evo A (Perfect Overload):** +150% duration.\r\n    * **Evo B (Extended Overload):** Duration",
    "effects": [
      "For 2 turns, all control effects ([Stun]/[Silence]/[Stasis]) have +100% duration. Costs 30 Prana."
    ],
    "keywords": [
      "Stun",
      "Silence",
      "Stasis"
    ],
    "powerScore": 80
  },
  {
    "id": "SKILL_TANTRA_080",
    "name": "Yantra Master",
    "engine": "tantra",
    "category": "Build-Defining",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Can deploy 2 additional Yantras beyond normal limit. All Yantras have +50% Ojas.\r\n    * **Evo A (Perfect Master):** 3 additional Yantras.\r\n    * **Evo B (Fortified Master):** +100% Ojas instead.\r\n ",
    "effects": [
      "Can deploy 2 additional Yantras beyond normal limit. All Yantras have +50% Ojas."
    ],
    "keywords": [],
    "powerScore": 71
  },
  {
    "id": "SKILL_TANTRA_081",
    "name": "Resonance Link Master",
    "engine": "tantra",
    "category": "Network",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** All Yantras automatically link with each other. Linked bonus effects doubled.\r\n    * **Evo A (Perfect Link):** Linked effects tripled.\r\n    * **Evo B (Extended Link):** Links work across entire boa",
    "effects": [
      "All Yantras automatically link with each other. Linked bonus effects doubled."
    ],
    "keywords": [],
    "powerScore": 72
  },
  {
    "id": "SKILL_TANTRA_082",
    "name": "Yantra Sacrifice",
    "engine": "tantra",
    "category": "Power",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Destroy your Yantra to deal damage equal to (Yantra Ojas × 2) to all enemies.\r\n    * **Evo A (Perfect Sacrifice):** ×3 damage instead.\r\n    * **Evo B (Selective Sacrifice):** Choose targets.\r\n    *",
    "effects": [
      "Destroy your Yantra to deal damage equal to (Yantra Ojas × 2) to all enemies."
    ],
    "keywords": [],
    "powerScore": 50
  },
  {
    "id": "SKILL_TANTRA_083",
    "name": "Yantra Healing",
    "engine": "tantra",
    "category": "Support",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** All Yantras [Heal] adjacent allies for 10 Ojas per turn.\r\n    * **Evo A (Perfect Healing):** 20 Ojas per turn.\r\n    * **Evo B (Extended Healing):** Affects 5x5 area.\r\n    * **Note:** *Support Yantr",
    "effects": [
      "All Yantras [Heal] adjacent allies for 10 Ojas per turn."
    ],
    "keywords": [
      "Heal"
    ],
    "powerScore": 51
  },
  {
    "id": "SKILL_TANTRA_084",
    "name": "Mobile Yantra",
    "engine": "tantra",
    "category": "Tactical",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Can move Yantras freely. Moving grants adjacent allies 15 Shield.\r\n    * **Evo A (Perfect Mobility):** 25 Shield instead.\r\n    * **Evo B (Free Mobility):** Moving costs 0 actions.\r\n    * **Note:** ",
    "effects": [
      "Can move Yantras freely. Moving grants adjacent allies 15 Shield."
    ],
    "keywords": [],
    "powerScore": 50
  },
  {
    "id": "SKILL_TANTRA_085",
    "name": "Yantra Evolution",
    "engine": "tantra",
    "category": "Scaling",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Yantras gain +10% potency per turn they survive (no cap).\r\n    * **Evo A (Rapid Evolution):** +15% per turn.\r\n    * **Evo B (Perfect Evolution):** Also gain +5 Ojas per turn.\r\n    * **Note:** *Grow",
    "effects": [
      "Yantras gain +10% potency per turn they survive (no cap)."
    ],
    "keywords": [],
    "powerScore": 72
  },
  {
    "id": "SKILL_TANTRA_086",
    "name": "Resonance Amplifier",
    "engine": "tantra",
    "category": "Power",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** All Resonance effects have +50% potency and last +1 turn.\r\n    * **Evo A (Perfect Amplifier):** +75% potency.\r\n    * **Evo B (Extended Amplifier):** Last +2 turns.\r\n    * **Note:** *Universal Reson",
    "effects": [
      "All Resonance effects have +50% potency and last +1 turn."
    ],
    "keywords": [],
    "powerScore": 71
  },
  {
    "id": "SKILL_TANTRA_087",
    "name": "Yantra Cloning",
    "engine": "tantra",
    "category": "Multiplication",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** When you deploy Yantra, 50% chance to create weaker copy (50% potency).\r\n    * **Evo A (Perfect Cloning):** Copy at 75% potency.\r\n    * **Evo B (Guaranteed Cloning):** 100% chance.\r\n    * **Note:**",
    "effects": [
      "When you deploy Yantra, 50% chance to create weaker copy (50% potency)."
    ],
    "keywords": [],
    "powerScore": 73
  },
  {
    "id": "SKILL_TANTRA_088",
    "name": "Resonance Theft",
    "engine": "tantra",
    "category": "Anti-Build",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Steal all Resonances from enemy and apply to another enemy at +50% potency.\r\n    * **Evo A (Perfect Theft):** +100% potency.\r\n    * **Evo B (Mass Theft):** Can steal from 2 enemies.\r\n    * **Note:*",
    "effects": [
      "Steal all Resonances from enemy and apply to another enemy at +50% potency."
    ],
    "keywords": [],
    "powerScore": 50
  },
  {
    "id": "SKILL_TANTRA_089",
    "name": "Yantra Network",
    "engine": "tantra",
    "category": "Synergy",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** For each Yantra you control, all other Yantras gain +10% potency.\r\n    * **Evo A (Perfect Network):** +15% per Yantra.\r\n    * **Evo B (Deep Network):** Also gain +5 Ojas per Yantra.\r\n    * **Note:*",
    "effects": [
      "For each Yantra you control, all other Yantras gain +10% potency."
    ],
    "keywords": [],
    "powerScore": 72
  },
  {
    "id": "SKILL_TANTRA_090",
    "name": "Resonance Overload",
    "engine": "tantra",
    "category": "Ultimate",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** For 2 turns, applying Resonance triggers all other Resonance types on target simultaneously. Costs 35 Prana.\r\n    * **Evo A (Perfect Overload):** Duration 3 turns.\r\n    * **Evo B (Economic Overload",
    "effects": [
      "For 2 turns, applying Resonance triggers all other Resonance types on target simultaneously. Costs 35 Prana."
    ],
    "keywords": [],
    "powerScore": 74
  },
  {
    "id": "SKILL_TANTRA_091",
    "name": "Glass Tantra",
    "engine": "tantra",
    "category": "Risk",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** -50% max Ojas, but all Tantra effects +150%.\r\n    * **Evo A (Perfect Glass):** +200% effects.\r\n    * **Evo B (Tolerable Glass):** Only -30% max Ojas.\r\n    * **Note:** *Extreme offense. Glass cannon",
    "effects": [
      "-50% max Ojas, but all Tantra effects +150%."
    ],
    "keywords": [],
    "powerScore": 72
  },
  {
    "id": "SKILL_TANTRA_092",
    "name": "Tank Tantra",
    "engine": "tantra",
    "category": "Endurance",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** +50% max Ojas, but all Tantra effects -30%.\r\n    * **Evo A (Perfect Tank):** +75% max Ojas.\r\n    * **Evo B (Tolerable Tank):** Only -15% effect penalty.\r\n    * **Note:** *Opposite of glass. Sustain",
    "effects": [
      "+50% max Ojas, but all Tantra effects -30%."
    ],
    "keywords": [],
    "powerScore": 71
  },
  {
    "id": "SKILL_TANTRA_093",
    "name": "Prana Vampire",
    "engine": "tantra",
    "category": "Resource",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Gain +1 Prana each time enemy is affected by your Resonance.\r\n    * **Evo A (Perfect Vampire):** +2 Prana per effect.\r\n    * **Evo B (Enhanced Vampire):** Also [Heal] 5 Ojas per effect.\r\n    * **No",
    "effects": [
      "Gain +1 Prana each time enemy is affected by your Resonance."
    ],
    "keywords": [
      "Heal"
    ],
    "powerScore": 75
  },
  {
    "id": "SKILL_TANTRA_094",
    "name": "Minimalist Tantra",
    "engine": "tantra",
    "category": "Restriction",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Can only use 5 Tantra glyphs total, but they all have -50% costs and +50% effects.\r\n    * **Evo A (Perfect Minimalism):** +75% effects.\r\n    * **Evo B (Efficient Minimalism):** -75% costs.\r\n    * *",
    "effects": [
      "Can only use 5 Tantra glyphs total, but they all have -50% costs and +50% effects."
    ],
    "keywords": [],
    "powerScore": 71
  },
  {
    "id": "SKILL_TANTRA_095",
    "name": "Maximalist Tantra",
    "engine": "tantra",
    "category": "Complexity",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Can use 20 Tantra glyphs. For each glyph over 10, gain +5% all Tantra effects.\r\n    * **Evo A (Perfect Maximalism):** +8% per glyph.\r\n    * **Evo B (Deep Maximalism):** Can use 25 glyphs.\r\n    * **",
    "effects": [
      "Can use 20 Tantra glyphs. For each glyph over 10, gain +5% all Tantra effects."
    ],
    "keywords": [],
    "powerScore": 74
  },
  {
    "id": "SKILL_TANTRA_096",
    "name": "Karma Gambit",
    "engine": "tantra",
    "category": "High-Roll",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** All Tantra effects have random potency between 50% and 200%.\r\n    * **Evo A (Controlled Gambit):** Range improved to 75%-200%.\r\n    * **Evo B (Perfect Gambit):** Range improved to 100%-300%.\r\n    *",
    "effects": [
      "All Tantra effects have random potency between 50% and 200%."
    ],
    "keywords": [],
    "powerScore": 73
  },
  {
    "id": "SKILL_TANTRA_097",
    "name": "Perfect Tantra",
    "engine": "tantra",
    "category": "Consistency",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** All Tantra effects have exactly listed potency—no scaling, crits, or variance.\r\n    * **Evo A (Predictable Power):** All effects +20% base potency.\r\n    * **Evo B (Enhanced Stability):** Immune to ",
    "effects": [
      "All Tantra effects have exactly listed potency—no scaling, crits, or variance."
    ],
    "keywords": [],
    "powerScore": 72
  },
  {
    "id": "SKILL_TANTRA_098",
    "name": "Solo Tantra",
    "engine": "tantra",
    "category": "Lone Wolf",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** If you have no allies, all Tantra effects +150%, immune to [Subservience].\r\n    * **Evo A (Perfect Solo):** +200% effects.\r\n    * **Evo B (Survivor):** Also +50% max Ojas.\r\n    * **Note:** *Anti-te",
    "effects": [
      "If you have no allies, all Tantra effects +150%, immune to [Subservience]."
    ],
    "keywords": [
      "Subservience"
    ],
    "powerScore": 73
  },
  {
    "id": "SKILL_TANTRA_099",
    "name": "Team Tantra",
    "engine": "tantra",
    "category": "Network",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** For each ally, gain +25% Tantra effects and +10 max Ojas.\r\n    * **Evo A (Perfect Team):** +40% effects per ally.\r\n    * **Evo B (Deep Team):** +20 max Ojas per ally.\r\n    * **Note:** *Opposite of ",
    "effects": [
      "For each ally, gain +25% Tantra effects and +10 max Ojas."
    ],
    "keywords": [],
    "powerScore": 72
  },
  {
    "id": "SKILL_TANTRA_100",
    "name": "Master of Karma",
    "engine": "tantra",
    "category": "Ultimate Passive",
    "tier": 4,
    "cost": {
      "kp": 4
    },
    "cooldown": 5,
    "unlocked": true,
    "description": "** Passive: All Karma paths cost -2 Prana. Applying Resonance grants +1 Prana. Can use all Karma paths without restriction.\r\n    * **Evo A (Perfect Mastery):** Cost -3 Prana, grant +2 Prana.\r\n    * **",
    "effects": [
      "Passive: All Karma paths cost -2 Prana. Applying Resonance grants +1 Prana. Can use all Karma paths without restriction."
    ],
    "keywords": [],
    "powerScore": 96
  },
  {
    "id": "SKILL_THERAPEUTIC_001",
    "name": "Minor Restoration",
    "engine": "therapeutic",
    "category": "Budget Heal",
    "tier": 0,
    "cost": {
      "kp": 1
    },
    "cooldown": 0,
    "unlocked": true,
    "description": "** [Heal] 8 Ojas, +1% Integrity.\r\n    * **Evo A (Quick Mend):** 0 cooldown but heals only 6 Ojas.\r\n    * **Evo B (Integrity Focus):** +3% Integrity instead of +1%.",
    "effects": [
      "[Heal] 8 Ojas, +1% Integrity."
    ],
    "keywords": [
      "Heal"
    ],
    "powerScore": 4
  },
  {
    "id": "SKILL_THERAPEUTIC_002",
    "name": "Vital Surge",
    "engine": "therapeutic",
    "category": "Burst Heal",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** [Heal] 30 Ojas instantly. If target is below 30% Ojas, heal 45 instead.\r\n    * **Evo A (Emergency Surge):** Threshold becomes 40% Ojas.\r\n    * **Evo B (Cascading Surge):** Also [Heal] adjacent ally",
    "effects": [
      "[Heal] 30 Ojas instantly. If target is below 30% Ojas, heal 45 instead."
    ],
    "keywords": [
      "Heal",
      "Heal"
    ],
    "powerScore": 51
  },
  {
    "id": "SKILL_THERAPEUTIC_003",
    "name": "Regenerative Pulse",
    "engine": "therapeutic",
    "category": "AoE HoT",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Apply HoT to all allies: Restore 4 Ojas per turn for 3 turns.\r\n    * **Evo A (Extended Pulse):** Duration 4 turns.\r\n    * **Evo B (Potent Pulse):** 6 Ojas per turn instead of 4.",
    "effects": [
      "Apply HoT to all allies: Restore 4 Ojas per turn for 3 turns."
    ],
    "keywords": [],
    "powerScore": 48
  },
  {
    "id": "SKILL_THERAPEUTIC_004",
    "name": "Lifewell Protocol",
    "engine": "therapeutic",
    "category": "HoT Amplification",
    "tier": 1,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** For the next 2 turns, all HoT effects you cast have +50% potency.\r\n    * **Evo A (Deep Lifewell):** Duration 3 turns.\r\n    * **Evo B (Perfect Lifewell):** HoT effects +100% potency.",
    "effects": [
      "For the next 2 turns, all HoT effects you cast have +50% potency."
    ],
    "keywords": [],
    "powerScore": 26
  },
  {
    "id": "SKILL_THERAPEUTIC_005",
    "name": "Overhealing Reservoir",
    "engine": "therapeutic",
    "category": "Overheal Conversion",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** For 3 turns, 75% of overhealing converts to temporary Ojas Shield.\r\n    * **Evo A (Perfect Reservoir):** 100% conversion rate.\r\n    * **Evo B (Extended Reservoir):** Duration 4 turns.",
    "effects": [
      "For 3 turns, 75% of overhealing converts to temporary Ojas Shield."
    ],
    "keywords": [],
    "powerScore": 49
  },
  {
    "id": "SKILL_THERAPEUTIC_006",
    "name": "Revitalization Wave",
    "engine": "therapeutic",
    "category": "Mass Heal",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** [Heal] all allies for 15 Ojas and grant +2% Integrity.\r\n    * **Evo A (Tidal Wave):** Heal 25 Ojas instead.\r\n    * **Evo B (Purifying Wave):** Also [Cleanse] 1 debuff from each ally.",
    "effects": [
      "[Heal] all allies for 15 Ojas and grant +2% Integrity."
    ],
    "keywords": [
      "Heal",
      "Cleanse"
    ],
    "powerScore": 54
  },
  {
    "id": "SKILL_THERAPEUTIC_007",
    "name": "Life Transfusion",
    "engine": "therapeutic",
    "category": "Sacrifice",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Sacrifice 15 of your Ojas to [Heal] target ally for 30 Ojas.\r\n    * **Evo A (Efficient Transfusion):** Sacrifice only 10 Ojas to heal 30.\r\n    * **Evo B (Double Transfusion):** Heal two allies for ",
    "effects": [
      "Sacrifice 15 of your Ojas to [Heal] target ally for 30 Ojas."
    ],
    "keywords": [
      "Heal"
    ],
    "powerScore": 49
  },
  {
    "id": "SKILL_THERAPEUTIC_008",
    "name": "Cellular Rewind",
    "engine": "therapeutic",
    "category": "Reset",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Reset target's Ojas to what it was 2 turns ago. Once per duel.\r\n    * **Evo A (Deep Rewind):** 3 turns ago instead of 2.\r\n    * **Evo B (Selective Rewind):** Can target ally or enemy.",
    "effects": [
      "Reset target's Ojas to what it was 2 turns ago. Once per duel."
    ],
    "keywords": [],
    "powerScore": 72
  },
  {
    "id": "SKILL_THERAPEUTIC_009",
    "name": "Vitality Echo",
    "engine": "therapeutic",
    "category": "Echo Heal",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** For 2 turns, your first [Heal] each turn is automatically repeated at 50% potency.\r\n    * **Evo A (Perfect Echo):** Repeated heal is at 75% potency.\r\n    * **Evo B (Sustained Echo):** Duration 3 tu",
    "effects": [
      "For 2 turns, your first [Heal] each turn is automatically repeated at 50% potency."
    ],
    "keywords": [
      "Heal"
    ],
    "powerScore": 50
  },
  {
    "id": "SKILL_THERAPEUTIC_010",
    "name": "Phoenix Renewal",
    "engine": "therapeutic",
    "category": "Resurrection",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** If an ally Yantra would be destroyed this turn, prevent it and [Heal] it to 30% Ojas instead. Cooldown: 4 turns.\r\n    * **Evo A (Full Phoenix):** Yantra restored to 50% Ojas.\r\n    * **Evo B (Cascad",
    "effects": [
      "If an ally Yantra would be destroyed this turn, prevent it and [Heal] it to 30% Ojas instead. Cooldown: 4 turns."
    ],
    "keywords": [
      "Heal"
    ],
    "powerScore": 76
  },
  {
    "id": "SKILL_THERAPEUTIC_011",
    "name": "Barrier Protocol",
    "engine": "therapeutic",
    "category": "Budget Shield",
    "tier": 0,
    "cost": {
      "kp": 1
    },
    "cooldown": 1,
    "unlocked": true,
    "description": "** Grant 10 Shield.\r\n    * **Evo A (Stacking Ward):** Shield stacks if recast.\r\n    * **Evo B (Reflective Surface):** 15% damage reflect.",
    "effects": [
      "Grant 10 Shield."
    ],
    "keywords": [],
    "powerScore": 3
  },
  {
    "id": "SKILL_THERAPEUTIC_012",
    "name": "Layered Defense",
    "engine": "therapeutic",
    "category": "Multi-Shield",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Grant 3 separate 10-point shields (each must be broken individually).\r\n    * **Evo A (Fortified Layers):** Each shield is 15 points.\r\n    * **Evo B (Reactive Layers):** When a layer breaks, [Heal] ",
    "effects": [
      "Grant 3 separate 10-point shields (each must be broken individually)."
    ],
    "keywords": [
      "Heal"
    ],
    "powerScore": 50
  },
  {
    "id": "SKILL_THERAPEUTIC_013",
    "name": "Adaptive Shielding",
    "engine": "therapeutic",
    "category": "Smart Shield",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Grant 20 Shield. Shield gains +5 for each debuff on the target.\r\n    * **Evo A (Deep Adaptation):** +8 per debuff instead.\r\n    * **Evo B (Cleansing Adaptation):** When shield breaks, [Cleanse] 1 d",
    "effects": [
      "Grant 20 Shield. Shield gains +5 for each debuff on the target."
    ],
    "keywords": [
      "Cleanse"
    ],
    "powerScore": 49
  },
  {
    "id": "SKILL_THERAPEUTIC_014",
    "name": "Damage Dampener",
    "engine": "therapeutic",
    "category": "Reduction",
    "tier": 1,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** For 2 turns, reduce all incoming damage by 25%.\r\n    * **Evo A (Stone Form):** 40% reduction but only 1 turn.\r\n    * **Evo B (Extended Dampener):** Duration 3 turns.",
    "effects": [
      "For 2 turns, reduce all incoming damage by 25%."
    ],
    "keywords": [],
    "powerScore": 26
  },
  {
    "id": "SKILL_THERAPEUTIC_015",
    "name": "Ablative Coating",
    "engine": "therapeutic",
    "category": "Decaying Shield",
    "tier": 1,
    "cost": {
      "kp": 2
    },
    "cooldown": 1,
    "unlocked": true,
    "description": "** Grant 30 Shield, but it loses 5 points at the start of each turn.\r\n    * **Evo A (Hardened Coating):** Loses only 3 points per turn.\r\n    * **Evo B (Reactive Coating):** When shield fully decays na",
    "effects": [
      "Grant 30 Shield, but it loses 5 points at the start of each turn."
    ],
    "keywords": [
      "Heal"
    ],
    "powerScore": 27
  },
  {
    "id": "SKILL_THERAPEUTIC_016",
    "name": "Reflective Ward",
    "engine": "therapeutic",
    "category": "Counter Shield",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Grant 15 Shield. Reflect 30% of all absorbed damage back to attacker.\r\n    * **Evo A (Perfect Reflection):** Reflect 50% instead.\r\n    * **Evo B (Amplified Ward):** Shield becomes 25 points.",
    "effects": [
      "Grant 15 Shield. Reflect 30% of all absorbed damage back to attacker."
    ],
    "keywords": [],
    "powerScore": 49
  },
  {
    "id": "SKILL_THERAPEUTIC_017",
    "name": "Sanctuary Dome",
    "engine": "therapeutic",
    "category": "Zone Shield",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Create a 3x3 zone for 2 turns: All allies inside gain 10 Shield at the start of their turn.\r\n    * **Evo A (Extended Dome):** Duration 3 turns.\r\n    * **Evo B (Fortified Dome):** Grant 15 Shield in",
    "effects": [
      "Create a 3x3 zone for 2 turns: All allies inside gain 10 Shield at the start of their turn."
    ],
    "keywords": [],
    "powerScore": 50
  },
  {
    "id": "SKILL_THERAPEUTIC_018",
    "name": "Shield Synthesis",
    "engine": "therapeutic",
    "category": "Shield Fusion",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Merge all active shields on a target into one larger shield (+20% total value).\r\n    * **Evo A (Perfect Synthesis):** +40% total value.\r\n    * **Evo B (Cascading Synthesis):** Also grant +3% Integr",
    "effects": [
      "Merge all active shields on a target into one larger shield (+20% total value)."
    ],
    "keywords": [],
    "powerScore": 48
  },
  {
    "id": "SKILL_THERAPEUTIC_019",
    "name": "Preemptive Barrier",
    "engine": "therapeutic",
    "category": "Predictive",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** At the start of enemy turn, if they would deal damage, automatically grant 15 Shield to the target.\r\n    * **Evo A (Perfect Timing):** Shield becomes 25 points.\r\n    * **Evo B (Multi-Barrier):** Ca",
    "effects": [
      "At the start of enemy turn, if they would deal damage, automatically grant 15 Shield to the target."
    ],
    "keywords": [],
    "powerScore": 47
  },
  {
    "id": "SKILL_THERAPEUTIC_020",
    "name": "Fortress Protocol",
    "engine": "therapeutic",
    "category": "Ultimate Defense",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Grant 50 Shield and immunity to [Sunder] for 2 turns.\r\n    * **Evo A (Impenetrable):** Shield becomes 70 points.\r\n    * **Evo B (Extended Fortress):** Duration 3 turns.\r\n\r\n---\r\n\r\n### **Healing Prot",
    "effects": [
      "Grant 50 Shield and immunity to [Sunder] for 2 turns."
    ],
    "keywords": [
      "Sunder"
    ],
    "powerScore": 74
  },
  {
    "id": "SKILL_THERAPEUTIC_021",
    "name": "Purity Pulse",
    "engine": "therapeutic",
    "category": "Budget Cleanse",
    "tier": 1,
    "cost": {
      "kp": 1
    },
    "cooldown": 1,
    "unlocked": true,
    "description": "** [Cleanse] 1 debuff from self.\r\n    * **Evo A (Area Cleanse):** Also cleanses adjacent ally.\r\n    * **Evo B (Preventative Dose):** Grants 1-turn immunity to next debuff.",
    "effects": [
      "[Cleanse] 1 debuff from self."
    ],
    "keywords": [
      "Cleanse"
    ],
    "powerScore": 26
  },
  {
    "id": "SKILL_THERAPEUTIC_022",
    "name": "Mass Purification",
    "engine": "therapeutic",
    "category": "AoE Cleanse",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** [Cleanse] 1 debuff from all allies.\r\n    * **Evo A (Deep Purification):** [Cleanse] 2 debuffs instead.\r\n    * **Evo B (Healing Purification):** Also [Heal] 10 Ojas per debuff removed.",
    "effects": [
      "[Cleanse] 1 debuff from all allies."
    ],
    "keywords": [
      "Cleanse",
      "Cleanse",
      "Heal"
    ],
    "powerScore": 55
  },
  {
    "id": "SKILL_THERAPEUTIC_023",
    "name": "Debuff Immunity",
    "engine": "therapeutic",
    "category": "Prevention",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Grant immunity to all [Debuff] effects for 2 turns. Any blocked debuff grants +1% Integrity.\r\n    * **Evo A (Extended Immunity):** Duration 3 turns.\r\n    * **Evo B (Offensive Immunity):** Blocked d",
    "effects": [
      "Grant immunity to all [Debuff] effects for 2 turns. Any blocked debuff grants +1% Integrity."
    ],
    "keywords": [
      "Debuff"
    ],
    "powerScore": 52
  },
  {
    "id": "SKILL_THERAPEUTIC_024",
    "name": "Purging Light",
    "engine": "therapeutic",
    "category": "Execute Cleanse",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** [Cleanse] all debuffs with 1 turn or less remaining duration.\r\n    * **Evo A (Extended Purge):** [Cleanse] debuffs with 2 turns or less.\r\n    * **Evo B (Healing Purge):** [Heal] 5 Ojas per debuff r",
    "effects": [
      "[Cleanse] all debuffs with 1 turn or less remaining duration."
    ],
    "keywords": [
      "Cleanse",
      "Cleanse",
      "Heal"
    ],
    "powerScore": 54
  },
  {
    "id": "SKILL_THERAPEUTIC_025",
    "name": "Status Lock",
    "engine": "therapeutic",
    "category": "Anti-Debuff",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** For 2 turns, the first debuff applied to you is immediately [Cleansed].\r\n    * **Evo A (Multi-Lock):** Cleanses first 2 debuffs instead.\r\n    * **Evo B (Perfect Lock):** Duration 3 turns.",
    "effects": [
      "For 2 turns, the first debuff applied to you is immediately [Cleansed]."
    ],
    "keywords": [
      "Cleansed"
    ],
    "powerScore": 49
  },
  {
    "id": "SKILL_THERAPEUTIC_026",
    "name": "Dosha Reversal",
    "engine": "therapeutic",
    "category": "Inversion",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Target a negative Dosha. Its effect is inverted into a positive buff for 2 turns.\r\n    * **Evo A (Sustained Reversal):** Duration 3 turns.\r\n    * **Evo B (Amplified Reversal):** Positive buff is +5",
    "effects": [
      "Target a negative Dosha. Its effect is inverted into a positive buff for 2 turns."
    ],
    "keywords": [],
    "powerScore": 71
  },
  {
    "id": "SKILL_THERAPEUTIC_027",
    "name": "Cleansing Cascade",
    "engine": "therapeutic",
    "category": "Chain Cleanse",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** [Cleanse] 1 debuff from target. If successful, [Cleanse] 1 from an adjacent ally.\r\n    * **Evo A (Perfect Cascade):** Chains to up to 3 allies total.\r\n    * **Evo B (Healing Cascade):** Each cleans",
    "effects": [
      "[Cleanse] 1 debuff from target. If successful, [Cleanse] 1 from an adjacent ally."
    ],
    "keywords": [
      "Cleanse",
      "Cleanse",
      "Heals"
    ],
    "powerScore": 55
  },
  {
    "id": "SKILL_THERAPEUTIC_028",
    "name": "Purity Aura",
    "engine": "therapeutic",
    "category": "Zone Cleanse",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Create a 3x3 aura for 2 turns: Debuffs cannot be applied to allies inside.\r\n    * **Evo A (Extended Aura):** Duration 3 turns.\r\n    * **Evo B (Purging Aura):** On creation, [Cleanse] all debuffs fr",
    "effects": [
      "Create a 3x3 aura for 2 turns: Debuffs cannot be applied to allies inside."
    ],
    "keywords": [
      "Cleanse"
    ],
    "powerScore": 52
  },
  {
    "id": "SKILL_THERAPEUTIC_029",
    "name": "Stabilize",
    "engine": "therapeutic",
    "category": "Emergency",
    "tier": 1,
    "cost": {
      "kp": 2
    },
    "cooldown": 1,
    "unlocked": true,
    "description": "** If target is below 30% Ojas, [Heal] 20 and grant 15 Shield. Once per duel.\r\n    * **Evo A (Emergency Protocol):** Usable at <40% Ojas.\r\n    * **Evo B (Defensive Surge):** Also grants +20% damage re",
    "effects": [
      "If target is below 30% Ojas, [Heal] 20 and grant 15 Shield. Once per duel."
    ],
    "keywords": [
      "Heal"
    ],
    "powerScore": 27
  },
  {
    "id": "SKILL_THERAPEUTIC_030",
    "name": "Resurrection Rite",
    "engine": "therapeutic",
    "category": "Ultimate Cleanse",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** [Cleanse] all debuffs from all allies and grant them immunity to debuffs for 1 turn.\r\n    * **Evo A (Extended Rite):** Immunity lasts 2 turns.\r\n    * **Evo B (Healing Rite):** Also [Heal] all allie",
    "effects": [
      "[Cleanse] all debuffs from all allies and grant them immunity to debuffs for 1 turn."
    ],
    "keywords": [
      "Cleanse",
      "Heal",
      "Sunder",
      "Stuns",
      "Cleanse",
      "Vulnerable",
      "Burn",
      "Decay",
      "Stun"
    ],
    "powerScore": 92
  },
  {
    "id": "SKILL_THERAPEUTIC_037",
    "name": "Integrity Milestone: 100%",
    "engine": "therapeutic",
    "category": "Passive",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** At 100% Integrity, all glyphs cost -1 Prana.\r\n    * **Evo A (Perfect State):** Cost reduction -2.\r\n    * **Evo B (Integrity Shield):** Gain permanent 10 Shield while at 100%.",
    "effects": [
      "At 100% Integrity, all glyphs cost -1 Prana."
    ],
    "keywords": [],
    "powerScore": 48
  },
  {
    "id": "SKILL_THERAPEUTIC_038",
    "name": "Integrity Milestone: 75%+",
    "engine": "therapeutic",
    "category": "Passive",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** At 75%+, first [Shield] each turn is doubled.\r\n    * **Evo A (Sustained Defense):** Threshold lowered to 70%.\r\n    * **Evo B (Shield Resonance):** Also grants +10% Shield to allies.",
    "effects": [
      "At 75%+, first [Shield] each turn is doubled."
    ],
    "keywords": [
      "Shield"
    ],
    "powerScore": 52
  },
  {
    "id": "SKILL_THERAPEUTIC_039",
    "name": "Integrity Milestone: 50%+",
    "engine": "therapeutic",
    "category": "Passive",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** At 50%+, [Cleanse] also [Heals] 5 Ojas.\r\n    * **Evo A (Restorative Cleanse):** Heal increased to 10.\r\n    * **Evo B (Cascading Purity):** [Cleanse] 2 debuffs instead of 1.",
    "effects": [
      "At 50%+, [Cleanse] also [Heals] 5 Ojas."
    ],
    "keywords": [
      "Cleanse",
      "Heals",
      "Cleanse"
    ],
    "powerScore": 77
  },
  {
    "id": "SKILL_THERAPEUTIC_040",
    "name": "Integrity Overflow",
    "engine": "therapeutic",
    "category": "Conversion",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** If Integrity would exceed 100%, convert excess to [Shield] (1% = 5 Shield).\r\n    * **Evo A (Efficient Overflow):** 1% = 10 Shield.\r\n    * **Evo B (Cascading Overflow):** Overflow also grants +5 Ban",
    "effects": [
      "If Integrity would exceed 100%, convert excess to [Shield] (1% = 5 Shield)."
    ],
    "keywords": [
      "Shield"
    ],
    "powerScore": 76
  },
  {
    "id": "SKILL_THERAPEUTIC_041",
    "name": "Healing Purist",
    "engine": "therapeutic",
    "category": "Build-Defining",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Cannot use [Shield] glyphs. All [Heal] effects +75%. Start duel with +20% max Ojas.\r\n    * **Evo A (Perfect Purist):** +100% healing instead.\r\n    * **Evo B (Ascetic Healer):** Also gain +25% Ojas ",
    "effects": [
      "Cannot use [Shield] glyphs. All [Heal] effects +75%. Start duel with +20% max Ojas."
    ],
    "keywords": [
      "Shield",
      "Heal"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_THERAPEUTIC_042",
    "name": "Overheal Master",
    "engine": "therapeutic",
    "category": "Scaling",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Overhealing no longer wastes value—converts to permanent max Ojas increase (10 overheal = +1 max Ojas, cap +50).\r\n    * **Evo A (Perfect Master):** Conversion rate 8:1 instead of 10:1.\r\n    * **Evo",
    "effects": [
      "Overhealing no longer wastes value—converts to permanent max Ojas increase (10 overheal = +1 max Ojas, cap +50)."
    ],
    "keywords": [],
    "powerScore": 50
  },
  {
    "id": "SKILL_THERAPEUTIC_043",
    "name": "Draining Touch",
    "engine": "therapeutic",
    "category": "Lifesteal Heal",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Deal 20 damage to enemy, [Heal] ally for 30. Can target same unit.\r\n    * **Evo A (Perfect Drain):** Damage 30, Heal 50.\r\n    * **Evo B (Mass Drain):** Affects 2 enemies and 2 allies.\r\n    * **Note",
    "effects": [
      "Deal 20 damage to enemy, [Heal] ally for 30. Can target same unit."
    ],
    "keywords": [
      "Heal"
    ],
    "powerScore": 50
  },
  {
    "id": "SKILL_THERAPEUTIC_044",
    "name": "Healing Chain",
    "engine": "therapeutic",
    "category": "Chain Reaction",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** [Heal] target for 25. Chains to adjacent allies at 50% potency (up to 3 chains).\r\n    * **Evo A (Perfect Chain):** Chains at 75% potency.\r\n    * **Evo B (Extended Chain):** Up to 5 chains total.\r\n ",
    "effects": [
      "[Heal] target for 25. Chains to adjacent allies at 50% potency (up to 3 chains)."
    ],
    "keywords": [
      "Heal"
    ],
    "powerScore": 51
  },
  {
    "id": "SKILL_THERAPEUTIC_045",
    "name": "Sacrificial Healer",
    "engine": "therapeutic",
    "category": "Martyr Build",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** For 3 turns, lose 10 Ojas per turn but all allies [Heal] 15 per turn.\r\n    * **Evo A (Perfect Sacrifice):** Allies heal 25 per turn.\r\n    * **Evo B (Tolerable Sacrifice):** You only lose 7 Ojas per",
    "effects": [
      "For 3 turns, lose 10 Ojas per turn but all allies [Heal] 15 per turn."
    ],
    "keywords": [
      "Heal"
    ],
    "powerScore": 73
  },
  {
    "id": "SKILL_THERAPEUTIC_046",
    "name": "Burst Heal Protocol",
    "engine": "therapeutic",
    "category": "Spike",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** [Heal] target for (current Ojas Integrity × 2). Resets Integrity to 0.\r\n    * **Evo A (Perfect Burst):** ×3 instead of ×2.\r\n    * **Evo B (Partial Burst):** Only lose 50% of Integrity.\r\n    * **Not",
    "effects": [
      "[Heal] target for (current Ojas Integrity × 2). Resets Integrity to 0."
    ],
    "keywords": [
      "Heal"
    ],
    "powerScore": 52
  },
  {
    "id": "SKILL_THERAPEUTIC_047",
    "name": "Healing Echo Chamber",
    "engine": "therapeutic",
    "category": "Duplication",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** For 3 turns, all [Heal] glyphs trigger twice at 60% potency each.\r\n    * **Evo A (Perfect Echo):** 80% potency each.\r\n    * **Evo B (Extended Echo):** Duration 4 turns.\r\n    * **Note:** *Double-cas",
    "effects": [
      "For 3 turns, all [Heal] glyphs trigger twice at 60% potency each."
    ],
    "keywords": [
      "Heal"
    ],
    "powerScore": 74
  },
  {
    "id": "SKILL_THERAPEUTIC_048",
    "name": "Proximity Healer",
    "engine": "therapeutic",
    "category": "Zone",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Cannot heal targets more than 2 spaces away. All healing +50% potency.\r\n    * **Evo A (Perfect Proximity):** +75% potency.\r\n    * **Evo B (Extended Proximity):** Range 3 spaces.\r\n    * **Note:** *P",
    "effects": [
      "Cannot heal targets more than 2 spaces away. All healing +50% potency."
    ],
    "keywords": [],
    "powerScore": 49
  },
  {
    "id": "SKILL_THERAPEUTIC_049",
    "name": "Remote Healer",
    "engine": "therapeutic",
    "category": "Distance",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Cannot heal adjacent targets. Healing +40% potency, range unlimited.\r\n    * **Evo A (Perfect Remote):** +60% potency.\r\n    * **Evo B (Efficient Remote):** Cost -2 KP for distant heals.\r\n    * **Not",
    "effects": [
      "Cannot heal adjacent targets. Healing +40% potency, range unlimited."
    ],
    "keywords": [],
    "powerScore": 49
  },
  {
    "id": "SKILL_THERAPEUTIC_050",
    "name": "Healing Amplifier",
    "engine": "therapeutic",
    "category": "Multiplier",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Each consecutive [Heal] on same target gets +15% potency (stacks 5x, resets if target switches).\r\n    * **Evo A (Perfect Amplifier):** +25% per stack.\r\n    * **Evo B (Sustained Amplifier):** Stacks",
    "effects": [
      "Each consecutive [Heal] on same target gets +15% potency (stacks 5x, resets if target switches)."
    ],
    "keywords": [
      "Heal"
    ],
    "powerScore": 73
  },
  {
    "id": "SKILL_THERAPEUTIC_051",
    "name": "Heal-over-Time Master",
    "engine": "therapeutic",
    "category": "DoT Specialist",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Cannot cast instant heals. All HoT effects +100% potency and last +1 turn.\r\n    * **Evo A (Perfect Master):** +150% potency.\r\n    * **Evo B (Extended Master):** Last +2 turns instead.\r\n    * **Note",
    "effects": [
      "Cannot cast instant heals. All HoT effects +100% potency and last +1 turn."
    ],
    "keywords": [],
    "powerScore": 50
  },
  {
    "id": "SKILL_THERAPEUTIC_052",
    "name": "Desperation Heal",
    "engine": "therapeutic",
    "category": "Clutch",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Healing potency increases based on target's missing Ojas (+1% per 1% missing, up to +100%).\r\n    * **Evo A (Perfect Desperation):** Up to +150% potency.\r\n    * **Evo B (Safe Desperation):** Bonus s",
    "effects": [
      "Healing potency increases based on target's missing Ojas (+1% per 1% missing, up to +100%)."
    ],
    "keywords": [],
    "powerScore": 48
  },
  {
    "id": "SKILL_THERAPEUTIC_053",
    "name": "Preventive Healer",
    "engine": "therapeutic",
    "category": "Proactive",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Healing potency decreases based on target's missing Ojas (full health = +50%, low health = +0%).\r\n    * **Evo A (Perfect Prevention):** Full health bonus +100%.\r\n    * **Evo B (Extended Prevention)",
    "effects": [
      "Healing potency decreases based on target's missing Ojas (full health = +50%, low health = +0%)."
    ],
    "keywords": [],
    "powerScore": 49
  },
  {
    "id": "SKILL_THERAPEUTIC_054",
    "name": "Group Therapy",
    "engine": "therapeutic",
    "category": "Mass Heal",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** [Heal] all allies for (10 × number of allies). More allies = stronger heals.\r\n    * **Evo A (Perfect Therapy):** 15 × number instead.\r\n    * **Evo B (Enhanced Therapy):** Also grant 10 Shield per a",
    "effects": [
      "[Heal] all allies for (10 × number of allies). More allies = stronger heals."
    ],
    "keywords": [
      "Heal"
    ],
    "powerScore": 74
  },
  {
    "id": "SKILL_THERAPEUTIC_055",
    "name": "Solo Medic",
    "engine": "therapeutic",
    "category": "Lone Wolf",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** If you have no allies, healing yourself +150%, immunity to [Stun] and [Silence].\r\n    * **Evo A (Perfect Solo):** +200% healing.\r\n    * **Evo B (Survivor):** Also gain +50% max Ojas.\r\n    * **Note:",
    "effects": [
      "If you have no allies, healing yourself +150%, immunity to [Stun] and [Silence]."
    ],
    "keywords": [
      "Stun",
      "Silence"
    ],
    "powerScore": 54
  },
  {
    "id": "SKILL_THERAPEUTIC_056",
    "name": "Shield Purist",
    "engine": "therapeutic",
    "category": "Build-Defining",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Cannot use [Heal] glyphs. All [Shield] effects +75%. Shields last +2 turns.\r\n    * **Evo A (Perfect Purist):** +100% shields instead.\r\n    * **Evo B (Eternal Shields):** Shields never decay natural",
    "effects": [
      "Cannot use [Heal] glyphs. All [Shield] effects +75%. Shields last +2 turns."
    ],
    "keywords": [
      "Heal",
      "Shield"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_THERAPEUTIC_057",
    "name": "Shield Stacker",
    "engine": "therapeutic",
    "category": "Accumulation",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Shields stack infinitely. For each 50 shield points on target, they gain +10% damage.\r\n    * **Evo A (Perfect Stacker):** Bonus every 40 points.\r\n    * **Evo B (Enhanced Stacker):** +15% damage per",
    "effects": [
      "Shields stack infinitely. For each 50 shield points on target, they gain +10% damage."
    ],
    "keywords": [],
    "powerScore": 50
  },
  {
    "id": "SKILL_THERAPEUTIC_058",
    "name": "Reactive Shielder",
    "engine": "therapeutic",
    "category": "Counter",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Cannot proactively shield. When ally takes damage, automatically grant them 25 Shield. Cooldown: 2 turns per ally.\r\n    * **Evo A (Perfect Reaction):** 40 Shield instead.\r\n    * **Evo B (Frequent R",
    "effects": [
      "Cannot proactively shield. When ally takes damage, automatically grant them 25 Shield. Cooldown: 2 turns per ally."
    ],
    "keywords": [],
    "powerScore": 49
  },
  {
    "id": "SKILL_THERAPEUTIC_059",
    "name": "Proactive Shielder",
    "engine": "therapeutic",
    "category": "Prediction",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Shields applied to full-health allies have +50% value. Shields on damaged allies -25% value.\r\n    * **Evo A (Perfect Proactive):** Full health bonus +75%.\r\n    * **Evo B (Tolerable Proactive):** No",
    "effects": [
      "Shields applied to full-health allies have +50% value. Shields on damaged allies -25% value."
    ],
    "keywords": [],
    "powerScore": 49
  },
  {
    "id": "SKILL_THERAPEUTIC_060",
    "name": "Exploding Shields",
    "engine": "therapeutic",
    "category": "Offensive Shield",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** When shields break, deal damage to attacker equal to 75% of absorbed damage.\r\n    * **Evo A (Perfect Explosion):** 125% of absorbed damage.\r\n    * **Evo B (AoE Explosion):** Damage affects all enem",
    "effects": [
      "When shields break, deal damage to attacker equal to 75% of absorbed damage."
    ],
    "keywords": [],
    "powerScore": 50
  },
  {
    "id": "SKILL_THERAPEUTIC_061",
    "name": "Shield Transfer",
    "engine": "therapeutic",
    "category": "Redistribution",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Move shields between allies. Transfer amount +25% (if moving 20, target gets 25).\r\n    * **Evo A (Perfect Transfer):** +50% bonus.\r\n    * **Evo B (Mass Transfer):** Can transfer from/to 3 allies si",
    "effects": [
      "Move shields between allies. Transfer amount +25% (if moving 20, target gets 25)."
    ],
    "keywords": [],
    "powerScore": 48
  },
  {
    "id": "SKILL_THERAPEUTIC_062",
    "name": "Shield Sacrifice",
    "engine": "therapeutic",
    "category": "Conversion",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Destroy ally's shield to [Heal] them for 150% of shield value.\r\n    * **Evo A (Perfect Sacrifice):** 200% conversion.\r\n    * **Evo B (Mass Sacrifice):** Affects all allies.\r\n    * **Note:** *Shield",
    "effects": [
      "Destroy ally's shield to [Heal] them for 150% of shield value."
    ],
    "keywords": [
      "Heal"
    ],
    "powerScore": 51
  },
  {
    "id": "SKILL_THERAPEUTIC_063",
    "name": "Living Shield",
    "engine": "therapeutic",
    "category": "Scaling",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Shields regenerate 10% of their original value per turn.\r\n    * **Evo A (Perfect Living):** 20% regeneration.\r\n    * **Evo B (Efficient Living):** Shields cost -30% KP.\r\n    * **Note:** *Sustainabl",
    "effects": [
      "Shields regenerate 10% of their original value per turn."
    ],
    "keywords": [],
    "powerScore": 71
  },
  {
    "id": "SKILL_THERAPEUTIC_064",
    "name": "Shield Resonance",
    "engine": "therapeutic",
    "category": "Network",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** When you shield an ally, adjacent allies gain 25% of that shield.\r\n    * **Evo A (Perfect Resonance):** 50% instead.\r\n    * **Evo B (Extended Resonance):** Affects 5x5 area.\r\n    * **Note:** *AoE s",
    "effects": [
      "When you shield an ally, adjacent allies gain 25% of that shield."
    ],
    "keywords": [],
    "powerScore": 50
  },
  {
    "id": "SKILL_THERAPEUTIC_065",
    "name": "Temporary Shields",
    "engine": "therapeutic",
    "category": "Speed",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Shields last only 1 turn but have +100% value and cost -50% KP.\r\n    * **Evo A (Perfect Temporary):** +150% value.\r\n    * **Evo B (Extended Temporary):** Last 2 turns.\r\n    * **Note:** *Fast cyclin",
    "effects": [
      "Shields last only 1 turn but have +100% value and cost -50% KP."
    ],
    "keywords": [],
    "powerScore": 48
  },
  {
    "id": "SKILL_THERAPEUTIC_066",
    "name": "Eternal Shields",
    "engine": "therapeutic",
    "category": "Permanence",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Shields never decay or expire but cost +50% KP and have -30% value.\r\n    * **Evo A (Perfect Eternal):** No value penalty.\r\n    * **Evo B (Efficient Eternal):** Only +25% KP cost.\r\n    * **Note:** *",
    "effects": [
      "Shields never decay or expire but cost +50% KP and have -30% value."
    ],
    "keywords": [],
    "powerScore": 72
  },
  {
    "id": "SKILL_THERAPEUTIC_067",
    "name": "Shield Theft",
    "engine": "therapeutic",
    "category": "Anti-Tank",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Steal 50% of enemy shield and grant it to ally.\r\n    * **Evo A (Perfect Theft):** Steal 75%.\r\n    * **Evo B (Mass Theft):** Affects 2 enemies and 2 allies.\r\n    * **Note:** *Offensive shielding. An",
    "effects": [
      "Steal 50% of enemy shield and grant it to ally."
    ],
    "keywords": [],
    "powerScore": 49
  },
  {
    "id": "SKILL_THERAPEUTIC_068",
    "name": "Shield Multiplication",
    "engine": "therapeutic",
    "category": "Scaling",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Each shield you cast this turn increases next shield's value by 25% (stacks).\r\n    * **Evo A (Perfect Multiplication):** +40% per shield.\r\n    * **Evo B (Sustained Multiplication):** Bonus persists",
    "effects": [
      "Each shield you cast this turn increases next shield's value by 25% (stacks)."
    ],
    "keywords": [],
    "powerScore": 71
  },
  {
    "id": "SKILL_THERAPEUTIC_069",
    "name": "Shield Converter",
    "engine": "therapeutic",
    "category": "Flexibility",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Convert shields to any resource: 20 Shield = 10 Bandwidth OR 3 KP OR 2 Coherence.\r\n    * **Evo A (Efficient Converter):** Conversion rates improved 50%.\r\n    * **Evo B (Multi-Converter):** Can conv",
    "effects": [
      "Convert shields to any resource: 20 Shield = 10 Bandwidth OR 3 KP OR 2 Coherence."
    ],
    "keywords": [],
    "powerScore": 50
  },
  {
    "id": "SKILL_THERAPEUTIC_070",
    "name": "Shield Overload",
    "engine": "therapeutic",
    "category": "Burst",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** For 2 turns, all shields +150% value but cost +100% KP.\r\n    * **Evo A (Perfect Overload):** +200% value.\r\n    * **Evo B (Efficient Overload):** Only +50% KP cost.\r\n    * **Note:** *Power spike vs ",
    "effects": [
      "For 2 turns, all shields +150% value but cost +100% KP."
    ],
    "keywords": [],
    "powerScore": 72
  },
  {
    "id": "SKILL_THERAPEUTIC_071",
    "name": "Cleansing Purist",
    "engine": "therapeutic",
    "category": "Build-Defining",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Cannot use [Heal] or [Shield] glyphs. [Cleanse] also deals 20 damage to enemies and grants 15 Ojas to cleansed ally.\r\n    * **Evo A (Perfect Purist):** Damage 35, heal 25.\r\n    * **Evo B (Aggressiv",
    "effects": [
      "Cannot use [Heal] or [Shield] glyphs. [Cleanse] also deals 20 damage to enemies and grants 15 Ojas to cleansed ally."
    ],
    "keywords": [
      "Heal",
      "Shield",
      "Cleanse",
      "Vulnerable"
    ],
    "powerScore": 57
  },
  {
    "id": "SKILL_THERAPEUTIC_072",
    "name": "Debuff Eater",
    "engine": "therapeutic",
    "category": "Conversion",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** [Cleanse] debuff and gain resources: +10 Bandwidth and +2 KP per debuff cleansed.\r\n    * **Evo A (Perfect Eater):** +15 Bandwidth, +3 KP.\r\n    * **Evo B (Healing Eater):** Also [Heal] 15 Ojas per d",
    "effects": [
      "[Cleanse] debuff and gain resources: +10 Bandwidth and +2 KP per debuff cleansed."
    ],
    "keywords": [
      "Cleanse",
      "Heal"
    ],
    "powerScore": 54
  },
  {
    "id": "SKILL_THERAPEUTIC_073",
    "name": "Preemptive Cleanser",
    "engine": "therapeutic",
    "category": "Prediction",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Grant ally immunity to next debuff for 3 turns. When triggered, [Heal] them 20.\r\n    * **Evo A (Perfect Preemptive):** Immunity to next 2 debuffs.\r\n    * **Evo B (Extended Preemptive):** Duration 4",
    "effects": [
      "Grant ally immunity to next debuff for 3 turns. When triggered, [Heal] them 20."
    ],
    "keywords": [
      "Heal"
    ],
    "powerScore": 73
  },
  {
    "id": "SKILL_THERAPEUTIC_074",
    "name": "Reactive Cleanser",
    "engine": "therapeutic",
    "category": "Counter",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** When ally receives debuff, automatically [Cleanse] it and grant 15 Shield. Cooldown: 3 turns per ally.\r\n    * **Evo A (Perfect Reactive):** 25 Shield instead.\r\n    * **Evo B (Frequent Reactive):** ",
    "effects": [
      "When ally receives debuff, automatically [Cleanse] it and grant 15 Shield. Cooldown: 3 turns per ally."
    ],
    "keywords": [
      "Cleanse"
    ],
    "powerScore": 51
  },
  {
    "id": "SKILL_THERAPEUTIC_075",
    "name": "Debuff Transfer",
    "engine": "therapeutic",
    "category": "Redirection",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** [Cleanse] debuff from ally and apply it to enemy.\r\n    * **Evo A (Perfect Transfer):** Apply to 2 enemies.\r\n    * **Evo B (Enhanced Transfer):** Applied debuff +1 turn duration.\r\n    * **Note:** *O",
    "effects": [
      "[Cleanse] debuff from ally and apply it to enemy."
    ],
    "keywords": [
      "Cleanse"
    ],
    "powerScore": 52
  },
  {
    "id": "SKILL_THERAPEUTIC_076",
    "name": "Cleansing Chain",
    "engine": "therapeutic",
    "category": "AoE",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** [Cleanse] 1 debuff from target. Chains to adjacent allies (up to 3 chains).\r\n    * **Evo A (Perfect Chain):** Up to 5 chains.\r\n    * **Evo B (Deep Chain):** [Cleanse] 2 debuffs from primary target.",
    "effects": [
      "[Cleanse] 1 debuff from target. Chains to adjacent allies (up to 3 chains)."
    ],
    "keywords": [
      "Cleanse",
      "Cleanse"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_THERAPEUTIC_077",
    "name": "Selective Cleanser",
    "engine": "therapeutic",
    "category": "Control",
    "tier": 2,
    "cost": {
      "kp": 2
    },
    "cooldown": 2,
    "unlocked": true,
    "description": "** Choose specific debuff type to cleanse (e.g., only [Burn], only [Stun]). Chosen type cleansed from all allies simultaneously.\r\n    * **Evo A (Perfect Selection):** Can choose 2 types.\r\n    * **Evo ",
    "effects": [
      "Choose specific debuff type to cleanse (e.g., only [Burn], only [Stun]). Chosen type cleansed from all allies simultaneously."
    ],
    "keywords": [
      "Burn",
      "Stun"
    ],
    "powerScore": 52
  },
  {
    "id": "SKILL_THERAPEUTIC_078",
    "name": "Cleanse Amplifier",
    "engine": "therapeutic",
    "category": "Power",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** For 3 turns, [Cleanse] also grants target +25% all effects for 2 turns.\r\n    * **Evo A (Perfect Amplifier):** +40% all effects.\r\n    * **Evo B (Extended Amplifier):** Duration 4 turns.\r\n    * **Not",
    "effects": [
      "For 3 turns, [Cleanse] also grants target +25% all effects for 2 turns."
    ],
    "keywords": [
      "Cleanse"
    ],
    "powerScore": 52
  },
  {
    "id": "SKILL_THERAPEUTIC_079",
    "name": "Overcharge Cleanse",
    "engine": "therapeutic",
    "category": "Burst",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** [Cleanse] all debuffs from target but they take 10 damage per debuff removed.\r\n    * **Evo A (Safe Overcharge):** Only 5 damage per debuff.\r\n    * **Evo B (Healing Overcharge):** After damage, [Hea",
    "effects": [
      "[Cleanse] all debuffs from target but they take 10 damage per debuff removed."
    ],
    "keywords": [
      "Cleanse",
      "Heal"
    ],
    "powerScore": 75
  },
  {
    "id": "SKILL_THERAPEUTIC_080",
    "name": "Debuff Reflection",
    "engine": "therapeutic",
    "category": "Counter",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** When you [Cleanse], apply that debuff to random enemy at 75% duration.\r\n    * **Evo A (Perfect Reflection):** Full duration.\r\n    * **Evo B (Controlled Reflection):** Choose target.\r\n    * **Note:*",
    "effects": [
      "When you [Cleanse], apply that debuff to random enemy at 75% duration."
    ],
    "keywords": [
      "Cleanse"
    ],
    "powerScore": 74
  },
  {
    "id": "SKILL_THERAPEUTIC_081",
    "name": "Cleansing Aura",
    "engine": "therapeutic",
    "category": "Passive",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Allies within 3x3 area automatically [Cleanse] 1 debuff per turn.\r\n    * **Evo A (Perfect Aura):** [Cleanse] 2 debuffs per turn.\r\n    * **Evo B (Extended Aura):** 5x5 area.\r\n    * **Note:** *Automa",
    "effects": [
      "Allies within 3x3 area automatically [Cleanse] 1 debuff per turn."
    ],
    "keywords": [
      "Cleanse",
      "Cleanse"
    ],
    "powerScore": 75
  },
  {
    "id": "SKILL_THERAPEUTIC_082",
    "name": "Debuff Immunity Lock",
    "engine": "therapeutic",
    "category": "Prevention",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** For 3 turns, ally is immune to debuffs but also cannot receive [Heal] or [Shield].\r\n    * **Evo A (Perfect Lock):** Duration 4 turns.\r\n    * **Evo B (Partial Lock):** Can still receive [Shield].\r\n ",
    "effects": [
      "For 3 turns, ally is immune to debuffs but also cannot receive [Heal] or [Shield]."
    ],
    "keywords": [
      "Heal",
      "Shield",
      "Shield"
    ],
    "powerScore": 78
  },
  {
    "id": "SKILL_THERAPEUTIC_083",
    "name": "Cleansing Sacrifice",
    "engine": "therapeutic",
    "category": "Martyr",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** [Cleanse] all debuffs from ally. You receive 50% of those debuffs.\r\n    * **Evo A (Tolerable Sacrifice):** Only receive 25%.\r\n    * **Evo B (Protected Sacrifice):** Debuffs you receive have -1 turn",
    "effects": [
      "[Cleanse] all debuffs from ally. You receive 50% of those debuffs."
    ],
    "keywords": [
      "Cleanse"
    ],
    "powerScore": 52
  },
  {
    "id": "SKILL_THERAPEUTIC_084",
    "name": "Mass Purge",
    "engine": "therapeutic",
    "category": "Ultimate",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** [Cleanse] all debuffs from all allies. Grant 20 Shield per debuff removed. Once per duel.\r\n    * **Evo A (Perfect Purge):** 35 Shield per debuff.\r\n    * **Evo B (Healing Purge):** Also [Heal] 20 pe",
    "effects": [
      "[Cleanse] all debuffs from all allies. Grant 20 Shield per debuff removed. Once per duel."
    ],
    "keywords": [
      "Cleanse",
      "Heal"
    ],
    "powerScore": 78
  },
  {
    "id": "SKILL_THERAPEUTIC_085",
    "name": "Perpetual Cleansing",
    "engine": "therapeutic",
    "category": "Sustain",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Passive: Allies automatically [Cleanse] 1 debuff at end of each turn.\r\n    * **Evo A (Perfect Perpetual):** [Cleanse] 2 debuffs.\r\n    * **Evo B (Enhanced Perpetual):** Also [Heal] 5 Ojas per cleans",
    "effects": [
      "Passive: Allies automatically [Cleanse] 1 debuff at end of each turn."
    ],
    "keywords": [
      "Cleanse",
      "Cleanse",
      "Heal"
    ],
    "powerScore": 79
  },
  {
    "id": "SKILL_THERAPEUTIC_086",
    "name": "Balanced Healer",
    "engine": "therapeutic",
    "category": "Hybrid",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** All [Heal] glyphs also grant 50% value as [Shield].\r\n    * **Evo A (Perfect Balance):** 75% value as shield.\r\n    * **Evo B (Enhanced Balance):** Also [Cleanse] 1 debuff.\r\n    * **Note:** *Three-wa",
    "effects": [
      "All [Heal] glyphs also grant 50% value as [Shield]."
    ],
    "keywords": [
      "Heal",
      "Shield",
      "Cleanse"
    ],
    "powerScore": 56
  },
  {
    "id": "SKILL_THERAPEUTIC_087",
    "name": "Aggressive Support",
    "engine": "therapeutic",
    "category": "Offensive",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** All [Heal]/[Shield]/[Cleanse] also deal 15 damage to nearest enemy.\r\n    * **Evo A (Perfect Aggression):** 25 damage instead.\r\n    * **Evo B (Multi-Aggression):** Affects 2 enemies.\r\n    * **Note:*",
    "effects": [
      "All [Heal]/[Shield]/[Cleanse] also deal 15 damage to nearest enemy."
    ],
    "keywords": [
      "Heal",
      "Shield",
      "Cleanse"
    ],
    "powerScore": 77
  },
  {
    "id": "SKILL_THERAPEUTIC_088",
    "name": "Transmutation Master",
    "engine": "therapeutic",
    "category": "Conversion",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Convert between effects freely: [Heal] ↔ [Shield] ↔ [Cleanse] at 75% value. Cooldown: 2 turns.\r\n    * **Evo A (Perfect Transmutation):** 100% value.\r\n    * **Evo B (Frequent Transmutation):** Coold",
    "effects": [
      "Convert between effects freely: [Heal] ↔ [Shield] ↔ [Cleanse] at 75% value. Cooldown: 2 turns."
    ],
    "keywords": [
      "Heal",
      "Shield",
      "Cleanse"
    ],
    "powerScore": 78
  },
  {
    "id": "SKILL_THERAPEUTIC_089",
    "name": "Support Overload",
    "engine": "therapeutic",
    "category": "Burst",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** For 2 turns, all support glyphs trigger twice at 75% potency each.\r\n    * **Evo A (Perfect Overload):** 100% potency each.\r\n    * **Evo B (Extended Overload):** Duration 3 turns.\r\n    * **Note:** *",
    "effects": [
      "For 2 turns, all support glyphs trigger twice at 75% potency each."
    ],
    "keywords": [],
    "powerScore": 73
  },
  {
    "id": "SKILL_THERAPEUTIC_090",
    "name": "Martyr Complex",
    "engine": "therapeutic",
    "category": "Sacrifice",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Lose 20% of max Ojas permanently. All support effects +100% for rest of duel.\r\n    * **Evo A (Tolerable Martyr):** Only lose 15%.\r\n    * **Evo B (Perfect Martyr):** +150% effects instead.\r\n    * **",
    "effects": [
      "Lose 20% of max Ojas permanently. All support effects +100% for rest of duel."
    ],
    "keywords": [],
    "powerScore": 72
  },
  {
    "id": "SKILL_THERAPEUTIC_091",
    "name": "Support Network",
    "engine": "therapeutic",
    "category": "Team",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Each ally you support grants you +1 Ojas Integrity and +5 Bandwidth.\r\n    * **Evo A (Perfect Network):** +2 Integrity, +10 Bandwidth.\r\n    * **Evo B (Deep Network):** Also reduce cooldown by 1.\r\n  ",
    "effects": [
      "Each ally you support grants you +1 Ojas Integrity and +5 Bandwidth."
    ],
    "keywords": [],
    "powerScore": 71
  },
  {
    "id": "SKILL_THERAPEUTIC_092",
    "name": "Solo Healer",
    "engine": "therapeutic",
    "category": "Independence",
    "tier": 2,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Cannot support allies. All self-support +200%. Immune to all debuffs.\r\n    * **Evo A (Perfect Solo):** +300% self-support.\r\n    * **Evo B (Survivor Solo):** +100% max Ojas.\r\n    * **Note:** *Anti-t",
    "effects": [
      "Cannot support allies. All self-support +200%. Immune to all debuffs."
    ],
    "keywords": [],
    "powerScore": 50
  },
  {
    "id": "SKILL_THERAPEUTIC_093",
    "name": "Shared Fate",
    "engine": "therapeutic",
    "category": "Link",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Link with ally for 3 turns: Share all [Heal]/[Shield]/[Cleanse] effects equally.\r\n    * **Evo A (Perfect Link):** Duration 4 turns.\r\n    * **Evo B (Multi-Link):** Can link with 2 allies.\r\n    * **N",
    "effects": [
      "Link with ally for 3 turns: Share all [Heal]/[Shield]/[Cleanse] effects equally."
    ],
    "keywords": [
      "Heal",
      "Shield",
      "Cleanse"
    ],
    "powerScore": 78
  },
  {
    "id": "SKILL_THERAPEUTIC_094",
    "name": "Emergency Protocol",
    "engine": "therapeutic",
    "category": "Clutch",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** When any ally drops below 20% Ojas, automatically [Heal] 40, grant 30 Shield, [Cleanse] all debuffs. Cooldown: 5 turns.\r\n    * **Evo A (Perfect Emergency):** [Heal] 60, grant 50 Shield.\r\n    * **Ev",
    "effects": [
      "When any ally drops below 20% Ojas, automatically [Heal] 40, grant 30 Shield, [Cleanse] all debuffs. Cooldown: 5 turns."
    ],
    "keywords": [
      "Heal",
      "Cleanse",
      "Heal"
    ],
    "powerScore": 79
  },
  {
    "id": "SKILL_THERAPEUTIC_095",
    "name": "Sustained Support",
    "engine": "therapeutic",
    "category": "Long-game",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** Passive: Every 3 turns, permanently increase all support effects by 5% (stacks infinitely).\r\n    * **Evo A (Rapid Sustained):** Triggers every 2 turns.\r\n    * **Evo B (Perfect Sustained):** +8% per",
    "effects": [
      "Passive: Every 3 turns, permanently increase all support effects by 5% (stacks infinitely)."
    ],
    "keywords": [],
    "powerScore": 71
  },
  {
    "id": "SKILL_THERAPEUTIC_096",
    "name": "Glass Support",
    "engine": "therapeutic",
    "category": "Risk",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** -50% max Ojas, but all support effects +150%.\r\n    * **Evo A (Perfect Glass):** +200% effects.\r\n    * **Evo B (Tolerable Glass):** Only -30% max Ojas.\r\n    * **Note:** *Extreme risk/reward. Fragile",
    "effects": [
      "-50% max Ojas, but all support effects +150%."
    ],
    "keywords": [],
    "powerScore": 72
  },
  {
    "id": "SKILL_THERAPEUTIC_097",
    "name": "Tank Support",
    "engine": "therapeutic",
    "category": "Endurance",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 3,
    "unlocked": true,
    "description": "** +50% max Ojas, but all support effects -30%.\r\n    * **Evo A (Perfect Tank):** +75% max Ojas.\r\n    * **Evo B (Tolerable Tank):** Only -15% effect penalty.\r\n    * **Note:** *Opposite of glass. Surviv",
    "effects": [
      "+50% max Ojas, but all support effects -30%."
    ],
    "keywords": [],
    "powerScore": 71
  },
  {
    "id": "SKILL_THERAPEUTIC_098",
    "name": "Support Vampire",
    "engine": "therapeutic",
    "category": "Lifesteal",
    "tier": 3,
    "cost": {
      "kp": 4
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** You [Heal] for 30% of all support value you provide to others.\r\n    * **Evo A (Perfect Vampire):** 50% instead.\r\n    * **Evo B (Enhanced Vampire):** Also gain 25% of shields you grant.\r\n    * **Not",
    "effects": [
      "You [Heal] for 30% of all support value you provide to others."
    ],
    "keywords": [
      "Heal"
    ],
    "powerScore": 75
  },
  {
    "id": "SKILL_THERAPEUTIC_099",
    "name": "Selfless Healer",
    "engine": "therapeutic",
    "category": "Altruist",
    "tier": 3,
    "cost": {
      "kp": 3
    },
    "cooldown": 4,
    "unlocked": true,
    "description": "** Cannot support yourself. All ally support +100%. When ally is at full health, you [Heal] 15.\r\n    * **Evo A (Perfect Selfless):** +150% ally support.\r\n    * **Evo B (Rewarded Selfless):** [Heal] 25",
    "effects": [
      "Cannot support yourself. All ally support +100%. When ally is at full health, you [Heal] 15."
    ],
    "keywords": [
      "Heal",
      "Heal"
    ],
    "powerScore": 76
  },
  {
    "id": "SKILL_THERAPEUTIC_100",
    "name": "Master Therapist",
    "engine": "therapeutic",
    "category": "Ultimate Passive",
    "tier": 4,
    "cost": {
      "kp": 4
    },
    "cooldown": 5,
    "unlocked": true,
    "description": "** Passive: All support glyphs cost -2 KP. When ally reaches full Ojas, gain +5 Ojas Integrity. [Heal]/[Shield]/[Cleanse] grant +1 Bandwidth each.\r\n    * **Evo A (Perfect Mastery):** Cost -3 KP, +8 In",
    "effects": [
      "Passive: All support glyphs cost -2 KP. When ally reaches full Ojas, gain +5 Ojas Integrity. [Heal]/[Shield]/[Cleanse] grant +1 Bandwidth each."
    ],
    "keywords": [
      "Heal",
      "Shield",
      "Cleanse"
    ],
    "powerScore": 102
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_001",
    "name": "Vehuiah",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Target ally gains +2/+2 and First Strike until end of turn. Restore 2 Sanctity.",
    "effects": [
      "Target ally gains +2/+2 and First Strike until end of turn. Restore 2 Sanctity."
    ],
    "keywords": [
      "Flash",
      "Ward",
      "Initiative"
    ],
    "powerScore": 63
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_002",
    "name": "Jeliel",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "End all combats. All creatures lose aggressive abilities until your next turn.",
    "effects": [
      "End all combats. All creatures lose aggressive abilities until your next turn."
    ],
    "keywords": [
      "Pacify",
      "Calm"
    ],
    "powerScore": 66
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_003",
    "name": "Sitael",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Create two 2/2 Construct tokens. Your structures cost 1 less this turn.",
    "effects": [
      "Create two 2/2 Construct tokens. Your structures cost 1 less this turn."
    ],
    "keywords": [
      "Builder",
      "Permanence"
    ],
    "powerScore": 69
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_004",
    "name": "Elemiah",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Look at opponent's hand. Exile a card from it. Draw a card.",
    "effects": [
      "Look at opponent's hand. Exile a card from it. Draw a card."
    ],
    "keywords": [
      "Revelation",
      "Truth"
    ],
    "powerScore": 72
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_005",
    "name": "Mahasiah",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Restore all resources to their maximum values. Gain 5 life.",
    "effects": [
      "Restore all resources to their maximum values. Gain 5 life."
    ],
    "keywords": [
      "Harmony",
      "Balance"
    ],
    "powerScore": 75
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_006",
    "name": "Lelahel",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Target creature gains +3/+3 and Lifelink. Heal 4 damage to any target.",
    "effects": [
      "Target creature gains +3/+3 and Lifelink. Heal 4 damage to any target."
    ],
    "keywords": [
      "Healing",
      "Light"
    ],
    "powerScore": 78
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_007",
    "name": "Achaiah",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Your permanents gain Indestructible until end of turn.",
    "effects": [
      "Your permanents gain Indestructible until end of turn."
    ],
    "keywords": [
      "Patience",
      "Endurance"
    ],
    "powerScore": 81
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_008",
    "name": "Cahetel",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Double your mana production this turn. Draw 2 cards.",
    "effects": [
      "Double your mana production this turn. Draw 2 cards."
    ],
    "keywords": [
      "Blessing",
      "Abundance"
    ],
    "powerScore": 84
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_009",
    "name": "Haziel",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Return target creature from any graveyard to its owner's hand. Gain 3 life.",
    "effects": [
      "Return target creature from any graveyard to its owner's hand. Gain 3 life."
    ],
    "keywords": [
      "Mercy",
      "Forgiveness"
    ],
    "powerScore": 87
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_010",
    "name": "Aladiah",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "All your creatures gain +1/+1 and Flying until end of turn.",
    "effects": [
      "All your creatures gain +1/+1 and Flying until end of turn."
    ],
    "keywords": [
      "Grace",
      "Favor"
    ],
    "powerScore": 60
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_011",
    "name": "Lauviah",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Destroy target attacking or blocking creature. Create a 3/3 Angel token.",
    "effects": [
      "Destroy target attacking or blocking creature. Create a 3/3 Angel token."
    ],
    "keywords": [
      "Victory",
      "Triumph"
    ],
    "powerScore": 63
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_012",
    "name": "Hahaiah",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Target permanent gains Hexproof and Indestructible until end of turn.",
    "effects": [
      "Target permanent gains Hexproof and Indestructible until end of turn."
    ],
    "keywords": [
      "Protection",
      "Refuge"
    ],
    "powerScore": 66
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_013",
    "name": "Iezalel",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Return all cards exiled this game to their owners' hands. Draw a card.",
    "effects": [
      "Return all cards exiled this game to their owners' hands. Draw a card."
    ],
    "keywords": [
      "Fidelity",
      "Trust"
    ],
    "powerScore": 69
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_014",
    "name": "Mebahel",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Destroy target enchantment or artifact. Its controller loses 2 life.",
    "effects": [
      "Destroy target enchantment or artifact. Its controller loses 2 life."
    ],
    "keywords": [
      "Justice",
      "Truth"
    ],
    "powerScore": 72
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_015",
    "name": "Hariel",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Exile all enchantments. Gain 2 life for each exiled.",
    "effects": [
      "Exile all enchantments. Gain 2 life for each exiled."
    ],
    "keywords": [
      "Purification",
      "Cleansing"
    ],
    "powerScore": 75
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_016",
    "name": "Hekamiah",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Target creature you control fights target creature you don't control. If your creature wins, draw 2 cards.",
    "effects": [
      "Target creature you control fights target creature you don't control. If your creature wins, draw 2 cards."
    ],
    "keywords": [
      "Loyalty",
      "Devotion"
    ],
    "powerScore": 78
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_017",
    "name": "Lauviah II",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Scry 3, then draw 2 cards. Reduce Invocation costs by 1 this turn.",
    "effects": [
      "Scry 3, then draw 2 cards. Reduce Invocation costs by 1 this turn."
    ],
    "keywords": [
      "Revelation",
      "Inspiration"
    ],
    "powerScore": 81
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_018",
    "name": "Caliel",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Target opponent reveals their hand. Choose a nonland card. They discard it.",
    "effects": [
      "Target opponent reveals their hand. Choose a nonland card. They discard it."
    ],
    "keywords": [
      "Truth",
      "Justice"
    ],
    "powerScore": 84
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_019",
    "name": "Leuviah",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Return up to 3 cards from your graveyard to your hand. Gain 3 Consciousness tokens.",
    "effects": [
      "Return up to 3 cards from your graveyard to your hand. Gain 3 Consciousness tokens."
    ],
    "keywords": [
      "Memory",
      "Intelligence"
    ],
    "powerScore": 87
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_020",
    "name": "Pahaliah",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Exile target creature, then return it to the battlefield under your control.",
    "effects": [
      "Exile target creature, then return it to the battlefield under your control."
    ],
    "keywords": [
      "Redemption",
      "Liberation"
    ],
    "powerScore": 60
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_021",
    "name": "Nelchael",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Look at the top 5 cards of your library. Put 2 into your hand and the rest on bottom.",
    "effects": [
      "Look at the top 5 cards of your library. Put 2 into your hand and the rest on bottom."
    ],
    "keywords": [
      "Knowledge",
      "Wisdom"
    ],
    "powerScore": 63
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_022",
    "name": "Yeiayel",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "All your legendary creatures gain +2/+2 and can't be blocked this turn.",
    "effects": [
      "All your legendary creatures gain +2/+2 and can't be blocked this turn."
    ],
    "keywords": [
      "Fame",
      "Renown"
    ],
    "powerScore": 66
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_023",
    "name": "Melahel",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Restore all damage on all creatures. Gain life equal to damage restored.",
    "effects": [
      "Restore all damage on all creatures. Gain life equal to damage restored."
    ],
    "keywords": [
      "Healing",
      "Restoration"
    ],
    "powerScore": 69
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_024",
    "name": "Haheuiah",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Creatures you control gain Hexproof and Vigilance until end of turn.",
    "effects": [
      "Creatures you control gain Hexproof and Vigilance until end of turn."
    ],
    "keywords": [
      "Protection",
      "Shelter"
    ],
    "powerScore": 72
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_025",
    "name": "Nith-Haiah",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Search your library for an Invocation card and put it into your hand. Shuffle.",
    "effects": [
      "Search your library for an Invocation card and put it into your hand. Shuffle."
    ],
    "keywords": [
      "Wisdom",
      "Magic"
    ],
    "powerScore": 75
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_026",
    "name": "Haaiah",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Prevent all combat damage this turn. Each player draws a card.",
    "effects": [
      "Prevent all combat damage this turn. Each player draws a card."
    ],
    "keywords": [
      "Politics",
      "Diplomacy"
    ],
    "powerScore": 78
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_027",
    "name": "Yerathel",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Create three 1/1 Human tokens. Put a +1/+1 counter on each creature you control.",
    "effects": [
      "Create three 1/1 Human tokens. Put a +1/+1 counter on each creature you control."
    ],
    "keywords": [
      "Civilization",
      "Order"
    ],
    "powerScore": 81
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_028",
    "name": "Seheiah",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Target creature gains +0/+5 and \"Prevent all damage that would be dealt to this creature\" until end of turn.",
    "effects": [
      "Target creature gains +0/+5 and \"Prevent all damage that would be dealt to this creature\" until end of turn."
    ],
    "keywords": [
      "Longevity",
      "Health"
    ],
    "powerScore": 84
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_029",
    "name": "Reiyel",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "All creatures you control can't be blocked this turn. They gain Haste.",
    "effects": [
      "All creatures you control can't be blocked this turn. They gain Haste."
    ],
    "keywords": [
      "Liberation",
      "Freedom"
    ],
    "powerScore": 87
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_030",
    "name": "Omael",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Put two +1/+1 counters on target creature. Create a Food token.",
    "effects": [
      "Put two +1/+1 counters on target creature. Create a Food token."
    ],
    "keywords": [
      "Fertility",
      "Growth"
    ],
    "powerScore": 60
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_031",
    "name": "Lecabel",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Target creature gains +4/+4 and Flying. It becomes legendary until end of turn.",
    "effects": [
      "Target creature gains +4/+4 and Flying. It becomes legendary until end of turn."
    ],
    "keywords": [
      "Talent",
      "Brilliance"
    ],
    "powerScore": 63
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_032",
    "name": "Vasariah",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Destroy target creature with power 4 or greater. Its controller gains 3 life.",
    "effects": [
      "Destroy target creature with power 4 or greater. Its controller gains 3 life."
    ],
    "keywords": [
      "Justice",
      "Mercy"
    ],
    "powerScore": 66
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_033",
    "name": "Yehuiah",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Gain control of target creature until end of turn. Untap it. It gains Haste.",
    "effects": [
      "Gain control of target creature until end of turn. Untap it. It gains Haste."
    ],
    "keywords": [
      "Obedience",
      "Order"
    ],
    "powerScore": 69
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_034",
    "name": "Lehahiah",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Tap all creatures. They don't untap during their controller's next untap step.",
    "effects": [
      "Tap all creatures. They don't untap during their controller's next untap step."
    ],
    "keywords": [
      "Calm",
      "Peace"
    ],
    "powerScore": 72
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_035",
    "name": "Chavakiah",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Each player returns a card from their graveyard to their hand. Draw a card.",
    "effects": [
      "Each player returns a card from their graveyard to their hand. Draw a card."
    ],
    "keywords": [
      "Reconciliation",
      "Harmony"
    ],
    "powerScore": 75
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_036",
    "name": "Menadel",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Create two Treasure tokens. Your artifacts enter the battlefield untapped this turn.",
    "effects": [
      "Create two Treasure tokens. Your artifacts enter the battlefield untapped this turn."
    ],
    "keywords": [
      "Work",
      "Employment"
    ],
    "powerScore": 78
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_037",
    "name": "Aniel",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Destroy target artifact or enchantment. Create a 2/2 Angel token with Flying.",
    "effects": [
      "Destroy target artifact or enchantment. Create a 2/2 Angel token with Flying."
    ],
    "keywords": [
      "Victory",
      "Breakthrough"
    ],
    "powerScore": 81
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_038",
    "name": "Haamiah",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Reduce the cost of your next Invocation by 3. Gain 2 Sanctity.",
    "effects": [
      "Reduce the cost of your next Invocation by 3. Gain 2 Sanctity."
    ],
    "keywords": [
      "Ritual",
      "Ceremony"
    ],
    "powerScore": 84
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_039",
    "name": "Rehael",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Return all creature cards with mana cost 3 or less from your graveyard to the battlefield.",
    "effects": [
      "Return all creature cards with mana cost 3 or less from your graveyard to the battlefield."
    ],
    "keywords": [
      "Healing",
      "Family"
    ],
    "powerScore": 87
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_040",
    "name": "Ieiazel",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Target player gains 7 life. Draw a card for each opponent with more life than you.",
    "effects": [
      "Target player gains 7 life. Draw a card for each opponent with more life than you."
    ],
    "keywords": [
      "Comfort",
      "Consolation"
    ],
    "powerScore": 60
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_041",
    "name": "Hahahel",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Search your library for a legendary creature and put it onto the battlefield. Shuffle.",
    "effects": [
      "Search your library for a legendary creature and put it onto the battlefield. Shuffle."
    ],
    "keywords": [
      "Mission",
      "Calling"
    ],
    "powerScore": 63
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_042",
    "name": "Mikael",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Return target nonland permanent to its owner's hand. Scry 2.",
    "effects": [
      "Return target nonland permanent to its owner's hand. Scry 2."
    ],
    "keywords": [
      "Politics",
      "Travel"
    ],
    "powerScore": 66
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_043",
    "name": "Veualiah",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Each player creates two Treasure tokens. You gain 5 life.",
    "effects": [
      "Each player creates two Treasure tokens. You gain 5 life."
    ],
    "keywords": [
      "Prosperity",
      "Peace"
    ],
    "powerScore": 69
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_044",
    "name": "Yelahiah",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Target creature gains +3/+0, Double Strike, and Trample until end of turn.",
    "effects": [
      "Target creature gains +3/+0, Double Strike, and Trample until end of turn."
    ],
    "keywords": [
      "Warrior",
      "Battle"
    ],
    "powerScore": 72
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_045",
    "name": "Sealiah",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Untap all creatures you control. They gain Vigilance until end of turn.",
    "effects": [
      "Untap all creatures you control. They gain Vigilance until end of turn."
    ],
    "keywords": [
      "Motivation",
      "Will"
    ],
    "powerScore": 75
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_046",
    "name": "Ariel",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Look at the top 4 cards of your library. Put 2 into your hand and the rest into your graveyard.",
    "effects": [
      "Look at the top 4 cards of your library. Put 2 into your hand and the rest into your graveyard."
    ],
    "keywords": [
      "Revelation",
      "Perception"
    ],
    "powerScore": 78
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_047",
    "name": "Asaliah",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Draw 3 cards, then put 2 cards from your hand on top of your library in any order.",
    "effects": [
      "Draw 3 cards, then put 2 cards from your hand on top of your library in any order."
    ],
    "keywords": [
      "Contemplation",
      "Truth"
    ],
    "powerScore": 81
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_048",
    "name": "Mihael",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Create two 1/1 creature tokens. They gain +2/+2 if you control another creature with the same name.",
    "effects": [
      "Create two 1/1 creature tokens. They gain +2/+2 if you control another creature with the same name."
    ],
    "keywords": [
      "Fertility",
      "Union"
    ],
    "powerScore": 84
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_049",
    "name": "Vehuel",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Target creature gains Flying and +2/+2. You gain life equal to its power.",
    "effects": [
      "Target creature gains Flying and +2/+2. You gain life equal to its power."
    ],
    "keywords": [
      "Elevation",
      "Wisdom"
    ],
    "powerScore": 87
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_050",
    "name": "Daniel",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Draw 2 cards. You may cast an instant or sorcery from your hand without paying its mana cost.",
    "effects": [
      "Draw 2 cards. You may cast an instant or sorcery from your hand without paying its mana cost."
    ],
    "keywords": [
      "Eloquence",
      "Communication"
    ],
    "powerScore": 60
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_051",
    "name": "Hahasiah",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Search your library for up to 2 artifact cards and put them into your hand. Shuffle.",
    "effects": [
      "Search your library for up to 2 artifact cards and put them into your hand. Shuffle."
    ],
    "keywords": [
      "Medicine",
      "Science"
    ],
    "powerScore": 63
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_052",
    "name": "Imamiah",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Exile target nonland permanent. Its controller may search their library for a basic land and put it onto the battlefield.",
    "effects": [
      "Exile target nonland permanent. Its controller may search their library for a basic land and put it onto the battlefield."
    ],
    "keywords": [
      "Atonement",
      "Liberation"
    ],
    "powerScore": 66
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_053",
    "name": "Nanael",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Look at the top 7 cards of your library. Put up to 3 into your hand and the rest on bottom.",
    "effects": [
      "Look at the top 7 cards of your library. Put up to 3 into your hand and the rest on bottom."
    ],
    "keywords": [
      "Knowledge",
      "Teaching"
    ],
    "powerScore": 69
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_054",
    "name": "Nithael",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Target creature gets -3/-0 until end of turn. Another target creature gets +3/+3 until end of turn.",
    "effects": [
      "Target creature gets -3/-0 until end of turn. Another target creature gets +3/+3 until end of turn."
    ],
    "keywords": [
      "Youth",
      "Beauty"
    ],
    "powerScore": 72
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_055",
    "name": "Mebahiah",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Exile all creatures with power 4 or greater. They return to the battlefield at end of turn.",
    "effects": [
      "Exile all creatures with power 4 or greater. They return to the battlefield at end of turn."
    ],
    "keywords": [
      "Morality",
      "Ethics"
    ],
    "powerScore": 75
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_056",
    "name": "Poyel",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Create three Treasure tokens. Target player draws 2 cards.",
    "effects": [
      "Create three Treasure tokens. Target player draws 2 cards."
    ],
    "keywords": [
      "Fortune",
      "Support"
    ],
    "powerScore": 78
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_057",
    "name": "Nemamiah",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Your creatures gain +2/+0 and First Strike until end of turn. Draw a card.",
    "effects": [
      "Your creatures gain +2/+0 and First Strike until end of turn. Draw a card."
    ],
    "keywords": [
      "Courage",
      "Strategy"
    ],
    "powerScore": 81
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_058",
    "name": "Yeialel",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Creatures you control gain Hexproof until end of turn. Prevent all damage that would be dealt to you.",
    "effects": [
      "Creatures you control gain Hexproof until end of turn. Prevent all damage that would be dealt to you."
    ],
    "keywords": [
      "Protection",
      "Shield"
    ],
    "powerScore": 84
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_059",
    "name": "Harachel",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Create four Treasure tokens. You may cast an artifact or enchantment from your hand without paying its mana cost.",
    "effects": [
      "Create four Treasure tokens. You may cast an artifact or enchantment from your hand without paying its mana cost."
    ],
    "keywords": [
      "Prosperity",
      "Wealth"
    ],
    "powerScore": 87
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_060",
    "name": "Mitzrael",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Return up to 2 artifact or enchantment cards from your graveyard to your hand. Gain 3 life.",
    "effects": [
      "Return up to 2 artifact or enchantment cards from your graveyard to your hand. Gain 3 life."
    ],
    "keywords": [
      "Repair",
      "Restoration"
    ],
    "powerScore": 60
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_061",
    "name": "Umabel",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Target player becomes your ally until end of turn. You both draw a card.",
    "effects": [
      "Target player becomes your ally until end of turn. You both draw a card."
    ],
    "keywords": [
      "Friendship",
      "Affinity"
    ],
    "powerScore": 63
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_062",
    "name": "Iah-Hel",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Scry 3, then draw 2 cards. Reduce Consciousness costs by 1 this turn.",
    "effects": [
      "Scry 3, then draw 2 cards. Reduce Consciousness costs by 1 this turn."
    ],
    "keywords": [
      "Knowledge",
      "Philosophy"
    ],
    "powerScore": 66
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_063",
    "name": "Anauel",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Each player creates two Treasure tokens. You create an additional two.",
    "effects": [
      "Each player creates two Treasure tokens. You create an additional two."
    ],
    "keywords": [
      "Commerce",
      "Unity"
    ],
    "powerScore": 69
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_064",
    "name": "Mehiel",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Copy target instant or sorcery spell. You may choose new targets for the copy.",
    "effects": [
      "Copy target instant or sorcery spell. You may choose new targets for the copy."
    ],
    "keywords": [
      "Inspiration",
      "Creativity"
    ],
    "powerScore": 72
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_065",
    "name": "Damabiah",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Gain 5 life. Draw a card for each 5 life you have above your starting life total.",
    "effects": [
      "Gain 5 life. Draw a card for each 5 life you have above your starting life total."
    ],
    "keywords": [
      "Fountain",
      "Wisdom"
    ],
    "powerScore": 75
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_066",
    "name": "Manakel",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Search your library for a Forest card and put it onto the battlefield. Draw a card.",
    "effects": [
      "Search your library for a Forest card and put it onto the battlefield. Draw a card."
    ],
    "keywords": [
      "Knowledge",
      "Nature"
    ],
    "powerScore": 78
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_067",
    "name": "Eyael",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Transform target creature you control into a copy of another target creature. It gains Indestructible until end of turn.",
    "effects": [
      "Transform target creature you control into a copy of another target creature. It gains Indestructible until end of turn."
    ],
    "keywords": [
      "Transformation",
      "Longevity"
    ],
    "powerScore": 81
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_068",
    "name": "Habuhiah",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Create two Food tokens and two Treasure tokens. Gain 3 life.",
    "effects": [
      "Create two Food tokens and two Treasure tokens. Gain 3 life."
    ],
    "keywords": [
      "Healing",
      "Agriculture"
    ],
    "powerScore": 84
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_069",
    "name": "Rochel",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Return target permanent from a graveyard to its owner's hand. Its owner gains 3 life.",
    "effects": [
      "Return target permanent from a graveyard to its owner's hand. Its owner gains 3 life."
    ],
    "keywords": [
      "Justice",
      "Restitution"
    ],
    "powerScore": 87
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_070",
    "name": "Jabamiah",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Target creature gains \"Whenever this creature deals damage, you gain that much life\" until end of turn.",
    "effects": [
      "Target creature gains \"Whenever this creature deals damage, you gain that much life\" until end of turn."
    ],
    "keywords": [
      "Alchemy",
      "Regeneration"
    ],
    "powerScore": 60
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_071",
    "name": "Haiaiel",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Your creatures gain +3/+0 and Haste until end of turn. They can't be blocked by more than one creature.",
    "effects": [
      "Your creatures gain +3/+0 and Haste until end of turn. They can't be blocked by more than one creature."
    ],
    "keywords": [
      "Courage",
      "Victory"
    ],
    "powerScore": 63
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_072",
    "name": "Mumiah",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Destroy target creature. Search your library for a creature with lesser mana cost and put it onto the battlefield.",
    "effects": [
      "Destroy target creature. Search your library for a creature with lesser mana cost and put it onto the battlefield."
    ],
    "keywords": [
      "Endings",
      "Rebirth"
    ],
    "powerScore": 66
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_073",
    "name": "Michael",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Exile all demons. Your creatures gain +3/+3, Flying, and Vigilance. Draw 3 cards. Restore 5 Sanctity.",
    "effects": [
      "Exile all demons. Your creatures gain +3/+3, Flying, and Vigilance. Draw 3 cards. Restore 5 Sanctity."
    ],
    "keywords": [
      "Commander",
      "Justice",
      "Protection"
    ],
    "powerScore": 60
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_074",
    "name": "Gabriel",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Look at the top 10 cards of your library. Put any number into your hand and the rest on bottom. Gain 5 Consciousness tokens.",
    "effects": [
      "Look at the top 10 cards of your library. Put any number into your hand and the rest on bottom. Gain 5 Consciousness tokens."
    ],
    "keywords": [
      "Messenger",
      "Revelation",
      "Prophecy"
    ],
    "powerScore": 60
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_075",
    "name": "Raphael",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Return all creatures from all graveyards to the battlefield under their owners' control. They gain Lifelink. You gain 10 life.",
    "effects": [
      "Return all creatures from all graveyards to the battlefield under their owners' control. They gain Lifelink. You gain 10 life."
    ],
    "keywords": [
      "Healing",
      "Protection",
      "Travel"
    ],
    "powerScore": 60
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_076",
    "name": "Uriel",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Deal 5 damage to each creature and planeswalker. Your creatures are unaffected. Exile all graveyards.",
    "effects": [
      "Deal 5 damage to each creature and planeswalker. Your creatures are unaffected. Exile all graveyards."
    ],
    "keywords": [
      "Flame",
      "Judgment",
      "Transformation"
    ],
    "powerScore": 60
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_077",
    "name": "Metatron",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Draw 5 cards. You have no maximum hand size. All your Invocations cost 3 less. Gain 3 in all resources.",
    "effects": [
      "Draw 5 cards. You have no maximum hand size. All your Invocations cost 3 less. Gain 3 in all resources."
    ],
    "keywords": [
      "Scribe",
      "Ascension",
      "Unity"
    ],
    "powerScore": 60
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_078",
    "name": "Sandalphon",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Search your library for up to 3 angel cards and put them onto the battlefield. They gain Haste. Shuffle.",
    "effects": [
      "Search your library for up to 3 angel cards and put them onto the battlefield. They gain Haste. Shuffle."
    ],
    "keywords": [
      "Prayer",
      "Connection",
      "Ascension"
    ],
    "powerScore": 60
  },
  {
    "id": "SKILL_INVOCATION_ANGEL_ANG_079",
    "name": "Azrael",
    "engine": "invocation",
    "category": "Theurgic Host",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Destroy all creatures. For each creature destroyed this way, create a 1/1 Spirit token with Flying. Draw a card.",
    "effects": [
      "Destroy all creatures. For each creature destroyed this way, create a 1/1 Spirit token with Flying. Draw a card."
    ],
    "keywords": [
      "Death",
      "Transition",
      "Mercy"
    ],
    "powerScore": 60
  },
  {
    "id": "SKILL_INVOCATION_DEMON_DEM_001",
    "name": "Bael",
    "engine": "invocation",
    "category": "Goetic Legions",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Target creature you control gains Hexproof and can't be blocked. Draw a card.",
    "effects": [
      "Target creature you control gains Hexproof and can't be blocked. Draw a card."
    ],
    "keywords": [
      "Invisibility",
      "Command",
      "Cunning"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_INVOCATION_DEMON_DEM_002",
    "name": "Agares",
    "engine": "invocation",
    "category": "Goetic Legions",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Destroy target land. Draw 2 cards. Gain 2 Consciousness tokens.",
    "effects": [
      "Destroy target land. Draw 2 cards. Gain 2 Consciousness tokens."
    ],
    "keywords": [
      "Language",
      "Earthquake"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_INVOCATION_DEMON_DEM_003",
    "name": "Vassago",
    "engine": "invocation",
    "category": "Goetic Legions",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Look at target opponent's hand and exile a card from it. Scry 3.",
    "effects": [
      "Look at target opponent's hand and exile a card from it. Scry 3."
    ],
    "keywords": [
      "Discovery",
      "Prophecy"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_INVOCATION_DEMON_DEM_004",
    "name": "Samigina",
    "engine": "invocation",
    "category": "Goetic Legions",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Return target creature from any graveyard to the battlefield under your control. It's a Zombie in addition to its other types.",
    "effects": [
      "Return target creature from any graveyard to the battlefield under your control. It's a Zombie in addition to its other types."
    ],
    "keywords": [
      "Necromancy",
      "Knowledge"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_INVOCATION_DEMON_DEM_005",
    "name": "Marbas",
    "engine": "invocation",
    "category": "Goetic Legions",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Transform target creature into a 0/1 creature with no abilities. It gains \"This creature can't attack or block.\"",
    "effects": [
      "Transform target creature into a 0/1 creature with no abilities. It gains \"This creature can't attack or block.\""
    ],
    "keywords": [
      "Transformation",
      "Disease"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_INVOCATION_DEMON_DEM_006",
    "name": "Valefor",
    "engine": "invocation",
    "category": "Goetic Legions",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Gain control of target artifact or creature with mana cost 3 or less.",
    "effects": [
      "Gain control of target artifact or creature with mana cost 3 or less."
    ],
    "keywords": [
      "Theft",
      "Temptation"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_INVOCATION_DEMON_DEM_007",
    "name": "Amon",
    "engine": "invocation",
    "category": "Goetic Legions",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Draw 2 cards. Target opponent discards 2 cards. Deal 2 damage to any target.",
    "effects": [
      "Draw 2 cards. Target opponent discards 2 cards. Deal 2 damage to any target."
    ],
    "keywords": [
      "Prophecy",
      "Discord"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_INVOCATION_DEMON_DEM_008",
    "name": "Barbatos",
    "engine": "invocation",
    "category": "Goetic Legions",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Search your library for up to 2 basic land cards and put them onto the battlefield tapped. Draw a card.",
    "effects": [
      "Search your library for up to 2 basic land cards and put them onto the battlefield tapped. Draw a card."
    ],
    "keywords": [
      "Communication",
      "Nature"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_INVOCATION_DEMON_DEM_009",
    "name": "Paimon",
    "engine": "invocation",
    "category": "Goetic Legions",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Draw 4 cards. You may cast a spell from your hand without paying its mana cost. Gain 3 Consciousness tokens.",
    "effects": [
      "Draw 4 cards. You may cast a spell from your hand without paying its mana cost. Gain 3 Consciousness tokens."
    ],
    "keywords": [
      "Knowledge",
      "Arts",
      "Command"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_INVOCATION_DEMON_DEM_010",
    "name": "Buer",
    "engine": "invocation",
    "category": "Goetic Legions",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Restore all damage on target creature. Put a +1/+1 counter on it. Scry 2, then draw a card.",
    "effects": [
      "Restore all damage on target creature. Put a +1/+1 counter on it. Scry 2, then draw a card."
    ],
    "keywords": [
      "Healing",
      "Philosophy"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_INVOCATION_DEMON_DEM_011",
    "name": "Gusion",
    "engine": "invocation",
    "category": "Goetic Legions",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Look at the top 5 cards of any library. Put 2 into your hand and the rest on bottom.",
    "effects": [
      "Look at the top 5 cards of any library. Put 2 into your hand and the rest on bottom."
    ],
    "keywords": [
      "Divination",
      "Honor"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_INVOCATION_DEMON_DEM_012",
    "name": "Sitri",
    "engine": "invocation",
    "category": "Goetic Legions",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Gain control of target creature until end of turn. Untap it. It gains Haste and must attack if able.",
    "effects": [
      "Gain control of target creature until end of turn. Untap it. It gains Haste and must attack if able."
    ],
    "keywords": [
      "Lust",
      "Desire"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_INVOCATION_DEMON_DEM_013",
    "name": "Beleth",
    "engine": "invocation",
    "category": "Goetic Legions",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Gain control of all creatures with total power 5 or less. They gain Haste.",
    "effects": [
      "Gain control of all creatures with total power 5 or less. They gain Haste."
    ],
    "keywords": [
      "Love",
      "Command"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_INVOCATION_DEMON_DEM_014",
    "name": "Leraje",
    "engine": "invocation",
    "category": "Goetic Legions",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Deal 3 damage to target creature or planeswalker. If it dies, deal 3 damage to another target.",
    "effects": [
      "Deal 3 damage to target creature or planeswalker. If it dies, deal 3 damage to another target."
    ],
    "keywords": [
      "Archery",
      "Battle"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_INVOCATION_DEMON_DEM_015",
    "name": "Eligos",
    "engine": "invocation",
    "category": "Goetic Legions",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Create two 2/2 Knight tokens with Vigilance. They gain First Strike until end of turn.",
    "effects": [
      "Create two 2/2 Knight tokens with Vigilance. They gain First Strike until end of turn."
    ],
    "keywords": [
      "War",
      "Knights"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_INVOCATION_DEMON_DEM_016",
    "name": "Zepar",
    "engine": "invocation",
    "category": "Goetic Legions",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Tap target creature. It doesn't untap during its controller's next untap step. Draw a card.",
    "effects": [
      "Tap target creature. It doesn't untap during its controller's next untap step. Draw a card."
    ],
    "keywords": [
      "Barrenness",
      "Love"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_INVOCATION_DEMON_DEM_017",
    "name": "Botis",
    "engine": "invocation",
    "category": "Goetic Legions",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Scry 4, then draw 2 cards. Target opponent draws a card. Each player gains 3 life.",
    "effects": [
      "Scry 4, then draw 2 cards. Target opponent draws a card. Each player gains 3 life."
    ],
    "keywords": [
      "Prophecy",
      "Reconciliation"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_INVOCATION_DEMON_DEM_018",
    "name": "Bathin",
    "engine": "invocation",
    "category": "Goetic Legions",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Return target permanent you control to your hand. You may put a permanent card from your hand onto the battlefield.",
    "effects": [
      "Return target permanent you control to your hand. You may put a permanent card from your hand onto the battlefield."
    ],
    "keywords": [
      "Herbs",
      "Teleportation"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_INVOCATION_DEMON_DEM_019",
    "name": "Sallos",
    "engine": "invocation",
    "category": "Goetic Legions",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "End all combat. Each player creates a Treasure token. You create an additional Treasure token.",
    "effects": [
      "End all combat. Each player creates a Treasure token. You create an additional Treasure token."
    ],
    "keywords": [
      "Love",
      "Peace"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_INVOCATION_DEMON_DEM_020",
    "name": "Purson",
    "engine": "invocation",
    "category": "Goetic Legions",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Draw 3 cards. Create 3 Treasure tokens. Gain 3 Consciousness tokens.",
    "effects": [
      "Draw 3 cards. Create 3 Treasure tokens. Gain 3 Consciousness tokens."
    ],
    "keywords": [
      "Knowledge",
      "Treasure"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_INVOCATION_DEMON_DEM_021",
    "name": "Marax",
    "engine": "invocation",
    "category": "Goetic Legions",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Transform target creature into a 3/3 creature with Flying. Scry 3, then draw a card.",
    "effects": [
      "Transform target creature into a 3/3 creature with Flying. Scry 3, then draw a card."
    ],
    "keywords": [
      "Astronomy",
      "Transformation"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_INVOCATION_DEMON_DEM_022",
    "name": "Ipos",
    "engine": "invocation",
    "category": "Goetic Legions",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Target creature gains +3/+0, Haste, and \"This creature must be blocked if able\" until end of turn.",
    "effects": [
      "Target creature gains +3/+0, Haste, and \"This creature must be blocked if able\" until end of turn."
    ],
    "keywords": [
      "Wit",
      "Boldness"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_INVOCATION_DEMON_DEM_023",
    "name": "Aim",
    "engine": "invocation",
    "category": "Goetic Legions",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Destroy up to 3 target lands. Deal 3 damage to each creature that was on those lands.",
    "effects": [
      "Destroy up to 3 target lands. Deal 3 damage to each creature that was on those lands."
    ],
    "keywords": [
      "Fire",
      "Destruction"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_INVOCATION_DEMON_DEM_024",
    "name": "Naberius",
    "engine": "invocation",
    "category": "Goetic Legions",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Draw 3 cards. You may cast a spell with mana cost 3 or less from your hand without paying its cost.",
    "effects": [
      "Draw 3 cards. You may cast a spell with mana cost 3 or less from your hand without paying its cost."
    ],
    "keywords": [
      "Arts",
      "Eloquence"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_INVOCATION_DEMON_DEM_025",
    "name": "Glasya-Labolas",
    "engine": "invocation",
    "category": "Goetic Legions",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Destroy target creature. Look at target opponent's hand and exile a card from it. Draw a card.",
    "effects": [
      "Destroy target creature. Look at target opponent's hand and exile a card from it. Draw a card."
    ],
    "keywords": [
      "Murder",
      "Knowledge"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_INVOCATION_DEMON_DEM_026",
    "name": "Bune",
    "engine": "invocation",
    "category": "Goetic Legions",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Create 3 Treasure tokens. Draw a card. Gain 3 life.",
    "effects": [
      "Create 3 Treasure tokens. Draw a card. Gain 3 life."
    ],
    "keywords": [
      "Wealth",
      "Eloquence"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_INVOCATION_DEMON_DEM_027",
    "name": "Ronove",
    "engine": "invocation",
    "category": "Goetic Legions",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Create two 2/1 Servant tokens. They gain Haste. Draw 2 cards.",
    "effects": [
      "Create two 2/1 Servant tokens. They gain Haste. Draw 2 cards."
    ],
    "keywords": [
      "Languages",
      "Servants"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_INVOCATION_DEMON_DEM_028",
    "name": "Berith",
    "engine": "invocation",
    "category": "Goetic Legions",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Target opponent reveals their hand. For each card revealed, create a Treasure token.",
    "effects": [
      "Target opponent reveals their hand. For each card revealed, create a Treasure token."
    ],
    "keywords": [
      "Alchemy",
      "Lies"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_INVOCATION_DEMON_DEM_029",
    "name": "Astaroth",
    "engine": "invocation",
    "category": "Goetic Legions",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Draw 4 cards. Put up to 2 creature cards from your hand onto the battlefield.",
    "effects": [
      "Draw 4 cards. Put up to 2 creature cards from your hand onto the battlefield."
    ],
    "keywords": [
      "Knowledge",
      "Creation"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_INVOCATION_DEMON_DEM_030",
    "name": "Forneus",
    "engine": "invocation",
    "category": "Goetic Legions",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Draw 3 cards. Target opponent discards 2 cards. Gain 2 Consciousness tokens.",
    "effects": [
      "Draw 3 cards. Target opponent discards 2 cards. Gain 2 Consciousness tokens."
    ],
    "keywords": [
      "Rhetoric",
      "Languages"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_INVOCATION_DEMON_DEM_031",
    "name": "Foras",
    "engine": "invocation",
    "category": "Goetic Legions",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Target creature gains Hexproof and can't be blocked. Scry 3, then draw a card.",
    "effects": [
      "Target creature gains Hexproof and can't be blocked. Scry 3, then draw a card."
    ],
    "keywords": [
      "Logic",
      "Invisibility"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_INVOCATION_DEMON_DEM_032",
    "name": "Asmoday",
    "engine": "invocation",
    "category": "Goetic Legions",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Create 5 Treasure tokens. Draw 3 cards. All your creatures gain +2/+2 until end of turn.",
    "effects": [
      "Create 5 Treasure tokens. Draw 3 cards. All your creatures gain +2/+2 until end of turn."
    ],
    "keywords": [
      "Treasure",
      "Geometry",
      "Command"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_INVOCATION_DEMON_DEM_033",
    "name": "Gaap",
    "engine": "invocation",
    "category": "Goetic Legions",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Return up to 2 target creatures to their owners' hands. Draw 2 cards.",
    "effects": [
      "Return up to 2 target creatures to their owners' hands. Draw 2 cards."
    ],
    "keywords": [
      "Teleportation",
      "Philosophy"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_INVOCATION_DEMON_DEM_034",
    "name": "Furfur",
    "engine": "invocation",
    "category": "Goetic Legions",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Deal 3 damage to each creature. Target opponent reveals their hand. Choose a card from it and exile it.",
    "effects": [
      "Deal 3 damage to each creature. Target opponent reveals their hand. Choose a card from it and exile it."
    ],
    "keywords": [
      "Thunder",
      "Love"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_INVOCATION_DEMON_DEM_035",
    "name": "Marchosias",
    "engine": "invocation",
    "category": "Goetic Legions",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Create a 5/3 Wolf creature token with Haste and \"When this creature dies, deal 3 damage to any target.\"",
    "effects": [
      "Create a 5/3 Wolf creature token with Haste and \"When this creature dies, deal 3 damage to any target.\""
    ],
    "keywords": [
      "Battle",
      "Fire"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_INVOCATION_DEMON_DEM_036",
    "name": "Stolas",
    "engine": "invocation",
    "category": "Goetic Legions",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Scry 4. Search your library for a basic land and put it onto the battlefield. Draw a card.",
    "effects": [
      "Scry 4. Search your library for a basic land and put it onto the battlefield. Draw a card."
    ],
    "keywords": [
      "Astronomy",
      "Herbs"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_INVOCATION_DEMON_DEM_037",
    "name": "Phenex",
    "engine": "invocation",
    "category": "Goetic Legions",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Draw 4 cards. You have no maximum hand size until end of turn. Gain 2 Consciousness tokens.",
    "effects": [
      "Draw 4 cards. You have no maximum hand size until end of turn. Gain 2 Consciousness tokens."
    ],
    "keywords": [
      "Poetry",
      "Knowledge"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_INVOCATION_DEMON_DEM_038",
    "name": "Halphas",
    "engine": "invocation",
    "category": "Goetic Legions",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Create two 2/2 Soldier tokens. Create a 0/5 Wall token with Defender.",
    "effects": [
      "Create two 2/2 Soldier tokens. Create a 0/5 Wall token with Defender."
    ],
    "keywords": [
      "War",
      "Fortification"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_INVOCATION_DEMON_DEM_039",
    "name": "Malphas",
    "engine": "invocation",
    "category": "Goetic Legions",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Create three 1/1 Construct tokens. Target opponent reveals their hand. You may cast a spell from it without paying its cost.",
    "effects": [
      "Create three 1/1 Construct tokens. Target opponent reveals their hand. You may cast a spell from it without paying its cost."
    ],
    "keywords": [
      "Construction",
      "Deception"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_INVOCATION_DEMON_DEM_040",
    "name": "Raum",
    "engine": "invocation",
    "category": "Goetic Legions",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Exile target artifact or enchantment. Create a Treasure token. Deal 2 damage to target creature or planeswalker.",
    "effects": [
      "Exile target artifact or enchantment. Create a Treasure token. Deal 2 damage to target creature or planeswalker."
    ],
    "keywords": [
      "Theft",
      "Destruction"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_INVOCATION_DEMON_DEM_041",
    "name": "Focalor",
    "engine": "invocation",
    "category": "Goetic Legions",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Destroy up to 2 target creatures. Their controllers may search their library for a basic land and put it onto the battlefield.",
    "effects": [
      "Destroy up to 2 target creatures. Their controllers may search their library for a basic land and put it onto the battlefield."
    ],
    "keywords": [
      "Drowning",
      "Wind"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_INVOCATION_DEMON_DEM_042",
    "name": "Vepar",
    "engine": "invocation",
    "category": "Goetic Legions",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Destroy all creatures with Flying. Deal 2 damage to each opponent. Draw a card.",
    "effects": [
      "Destroy all creatures with Flying. Deal 2 damage to each opponent. Draw a card."
    ],
    "keywords": [
      "Seas",
      "Death"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_INVOCATION_DEMON_DEM_043",
    "name": "Sabnock",
    "engine": "invocation",
    "category": "Goetic Legions",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Create a 0/6 Wall with Defender. Deal 3 damage to target creature. If it survives, tap it and it doesn't untap.",
    "effects": [
      "Create a 0/6 Wall with Defender. Deal 3 damage to target creature. If it survives, tap it and it doesn't untap."
    ],
    "keywords": [
      "Fortification",
      "Wounds"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_INVOCATION_DEMON_DEM_044",
    "name": "Shax",
    "engine": "invocation",
    "category": "Goetic Legions",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Exile target artifact or enchantment. Target opponent can't cast spells until end of turn.",
    "effects": [
      "Exile target artifact or enchantment. Target opponent can't cast spells until end of turn."
    ],
    "keywords": [
      "Theft",
      "Deafness"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_INVOCATION_DEMON_DEM_045",
    "name": "Vine",
    "engine": "invocation",
    "category": "Goetic Legions",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Destroy all lands. Each player searches their library for up to 3 basic lands and puts them onto the battlefield. Draw 2 cards.",
    "effects": [
      "Destroy all lands. Each player searches their library for up to 3 basic lands and puts them onto the battlefield. Draw 2 cards."
    ],
    "keywords": [
      "Storm",
      "Discovery"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_INVOCATION_DEMON_DEM_046",
    "name": "Bifrons",
    "engine": "invocation",
    "category": "Goetic Legions",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Return up to 2 creature cards from your graveyard to your hand. Scry 3, then draw a card.",
    "effects": [
      "Return up to 2 creature cards from your graveyard to your hand. Scry 3, then draw a card."
    ],
    "keywords": [
      "Necromancy",
      "Astronomy"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_INVOCATION_DEMON_DEM_047",
    "name": "Uvall",
    "engine": "invocation",
    "category": "Goetic Legions",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Target player becomes your ally until end of turn. You both draw 2 cards and gain 3 life.",
    "effects": [
      "Target player becomes your ally until end of turn. You both draw 2 cards and gain 3 life."
    ],
    "keywords": [
      "Love",
      "Friendship"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_INVOCATION_DEMON_DEM_048",
    "name": "Haagenti",
    "engine": "invocation",
    "category": "Goetic Legions",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Exile target artifact. Create 3 Treasure tokens. Draw 2 cards.",
    "effects": [
      "Exile target artifact. Create 3 Treasure tokens. Draw 2 cards."
    ],
    "keywords": [
      "Transmutation",
      "Wisdom"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_INVOCATION_DEMON_DEM_049",
    "name": "Crocell",
    "engine": "invocation",
    "category": "Goetic Legions",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Search your library for up to 2 Island cards and put them onto the battlefield. Draw a card.",
    "effects": [
      "Search your library for up to 2 Island cards and put them onto the battlefield. Draw a card."
    ],
    "keywords": [
      "Geometry",
      "Water"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_INVOCATION_DEMON_DEM_050",
    "name": "Furcas",
    "engine": "invocation",
    "category": "Goetic Legions",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Scry 3, then draw 2 cards. Gain 2 Consciousness tokens.",
    "effects": [
      "Scry 3, then draw 2 cards. Gain 2 Consciousness tokens."
    ],
    "keywords": [
      "Philosophy",
      "Divination"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_INVOCATION_DEMON_DEM_051",
    "name": "Balam",
    "engine": "invocation",
    "category": "Goetic Legions",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Look at target opponent's hand and library. Exile 2 cards from each. Target creature gains Hexproof and can't be blocked.",
    "effects": [
      "Look at target opponent's hand and library. Exile 2 cards from each. Target creature gains Hexproof and can't be blocked."
    ],
    "keywords": [
      "Prophecy",
      "Invisibility"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_INVOCATION_DEMON_DEM_052",
    "name": "Alloces",
    "engine": "invocation",
    "category": "Goetic Legions",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Create three 2/1 Soldier tokens with Haste. Scry 3.",
    "effects": [
      "Create three 2/1 Soldier tokens with Haste. Scry 3."
    ],
    "keywords": [
      "War",
      "Astronomy"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_INVOCATION_DEMON_DEM_053",
    "name": "Caim",
    "engine": "invocation",
    "category": "Goetic Legions",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Draw 3 cards. Target opponent reveals their hand. You may cast a spell from it without paying its cost.",
    "effects": [
      "Draw 3 cards. Target opponent reveals their hand. You may cast a spell from it without paying its cost."
    ],
    "keywords": [
      "Communication",
      "Future"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_INVOCATION_DEMON_DEM_054",
    "name": "Murmur",
    "engine": "invocation",
    "category": "Goetic Legions",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Return all creature cards from all graveyards to the battlefield under your control.",
    "effects": [
      "Return all creature cards from all graveyards to the battlefield under your control."
    ],
    "keywords": [
      "Necromancy",
      "Philosophy"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_INVOCATION_DEMON_DEM_055",
    "name": "Orobas",
    "engine": "invocation",
    "category": "Goetic Legions",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Target opponent reveals their hand and top 5 cards of library. Exile 2 cards from among them. Draw 2 cards.",
    "effects": [
      "Target opponent reveals their hand and top 5 cards of library. Exile 2 cards from among them. Draw 2 cards."
    ],
    "keywords": [
      "Truth",
      "Divinity"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_INVOCATION_DEMON_DEM_056",
    "name": "Gremory",
    "engine": "invocation",
    "category": "Goetic Legions",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Create 3 Treasure tokens. Target opponent reveals their hand. You may take control of a creature they control.",
    "effects": [
      "Create 3 Treasure tokens. Target opponent reveals their hand. You may take control of a creature they control."
    ],
    "keywords": [
      "Love",
      "Treasure"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_INVOCATION_DEMON_DEM_057",
    "name": "Ose",
    "engine": "invocation",
    "category": "Goetic Legions",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Create a token copy of target creature. It gains Haste. Transform target creature into a 0/1 creature until end of turn.",
    "effects": [
      "Create a token copy of target creature. It gains Haste. Transform target creature into a 0/1 creature until end of turn."
    ],
    "keywords": [
      "Illusion",
      "Transformation"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_INVOCATION_DEMON_DEM_058",
    "name": "Amy",
    "engine": "invocation",
    "category": "Goetic Legions",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Scry 4, then draw 3 cards. Gain 3 Consciousness tokens.",
    "effects": [
      "Scry 4, then draw 3 cards. Gain 3 Consciousness tokens."
    ],
    "keywords": [
      "Astrology",
      "Science"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_INVOCATION_DEMON_DEM_059",
    "name": "Orias",
    "engine": "invocation",
    "category": "Goetic Legions",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Transform target creature you control into a copy of target creature you don't control. Scry 3, then draw a card.",
    "effects": [
      "Transform target creature you control into a copy of target creature you don't control. Scry 3, then draw a card."
    ],
    "keywords": [
      "Transformation",
      "Astronomy"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_INVOCATION_DEMON_DEM_060",
    "name": "Vapula",
    "engine": "invocation",
    "category": "Goetic Legions",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Search your library for up to 2 artifact cards and put them into your hand. Draw a card.",
    "effects": [
      "Search your library for up to 2 artifact cards and put them into your hand. Draw a card."
    ],
    "keywords": [
      "Science",
      "Crafts"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_INVOCATION_DEMON_DEM_061",
    "name": "Zagan",
    "engine": "invocation",
    "category": "Goetic Legions",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Exile all artifacts. For each artifact exiled, create 2 Treasure tokens. Draw 3 cards.",
    "effects": [
      "Exile all artifacts. For each artifact exiled, create 2 Treasure tokens. Draw 3 cards."
    ],
    "keywords": [
      "Transmutation",
      "Wisdom"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_INVOCATION_DEMON_DEM_062",
    "name": "Volac",
    "engine": "invocation",
    "category": "Goetic Legions",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Create 4 Treasure tokens. Create a 2/2 Snake token with Deathtouch for each opponent.",
    "effects": [
      "Create 4 Treasure tokens. Create a 2/2 Snake token with Deathtouch for each opponent."
    ],
    "keywords": [
      "Treasure",
      "Serpents"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_INVOCATION_DEMON_DEM_063",
    "name": "Andras",
    "engine": "invocation",
    "category": "Goetic Legions",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Destroy target creature. It can't be regenerated. Deal 3 damage to target opponent. They discard a card.",
    "effects": [
      "Destroy target creature. It can't be regenerated. Deal 3 damage to target opponent. They discard a card."
    ],
    "keywords": [
      "Murder",
      "Discord"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_INVOCATION_DEMON_DEM_064",
    "name": "Haures",
    "engine": "invocation",
    "category": "Goetic Legions",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Deal 4 damage to target creature or planeswalker. You gain life equal to damage dealt. Target creature you control gains Indestructible until end of turn.",
    "effects": [
      "Deal 4 damage to target creature or planeswalker. You gain life equal to damage dealt. Target creatu..."
    ],
    "keywords": [
      "Fire",
      "Protection"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_INVOCATION_DEMON_DEM_065",
    "name": "Andrealphus",
    "engine": "invocation",
    "category": "Goetic Legions",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Draw 3 cards. Transform target creature into a 1/1 Bird with Flying.",
    "effects": [
      "Draw 3 cards. Transform target creature into a 1/1 Bird with Flying."
    ],
    "keywords": [
      "Geometry",
      "Transformation"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_INVOCATION_DEMON_DEM_066",
    "name": "Cimejes",
    "engine": "invocation",
    "category": "Goetic Legions",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Draw 3 cards. Target opponent discards 2 cards. Gain 2 Consciousness tokens.",
    "effects": [
      "Draw 3 cards. Target opponent discards 2 cards. Gain 2 Consciousness tokens."
    ],
    "keywords": [
      "Grammar",
      "Logic"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_INVOCATION_DEMON_DEM_067",
    "name": "Amdusias",
    "engine": "invocation",
    "category": "Goetic Legions",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "All creatures get -2/-0 until end of turn. Create three 1/1 Elemental tokens. Draw a card.",
    "effects": [
      "All creatures get -2/-0 until end of turn. Create three 1/1 Elemental tokens. Draw a card."
    ],
    "keywords": [
      "Music",
      "Nature"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_INVOCATION_DEMON_DEM_068",
    "name": "Belial",
    "engine": "invocation",
    "category": "Goetic Legions",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Gain control of all creatures. They gain Haste. Lose 5 Sanctity. Gain 5 Corruption.",
    "effects": [
      "Gain control of all creatures. They gain Haste. Lose 5 Sanctity. Gain 5 Corruption."
    ],
    "keywords": [
      "Rebellion",
      "Corruption"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_INVOCATION_DEMON_DEM_069",
    "name": "Decarabia",
    "engine": "invocation",
    "category": "Goetic Legions",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Create three 1/1 Bird tokens with Flying. Search your library for a Forest and put it onto the battlefield. Draw a card.",
    "effects": [
      "Create three 1/1 Bird tokens with Flying. Search your library for a Forest and put it onto the battlefield. Draw a card."
    ],
    "keywords": [
      "Birds",
      "Herbs"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_INVOCATION_DEMON_DEM_070",
    "name": "Seere",
    "engine": "invocation",
    "category": "Goetic Legions",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Search your library for any card and put it into your hand. Shuffle. Draw a card.",
    "effects": [
      "Search your library for any card and put it into your hand. Shuffle. Draw a card."
    ],
    "keywords": [
      "Speed",
      "Discovery"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_INVOCATION_DEMON_DEM_071",
    "name": "Dantalion",
    "engine": "invocation",
    "category": "Goetic Legions",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Look at each opponent's hand. For each opponent, exile a card from their hand. Draw 2 cards.",
    "effects": [
      "Look at each opponent's hand. For each opponent, exile a card from their hand. Draw 2 cards."
    ],
    "keywords": [
      "Thoughts",
      "Manipulation"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_INVOCATION_DEMON_DEM_072",
    "name": "Andromalius",
    "engine": "invocation",
    "category": "Goetic Legions",
    "tier": 2,
    "cost": {
      "kp": 1
    },
    "cooldown": 6,
    "unlocked": true,
    "description": "Return target artifact or enchantment from any graveyard to your hand. Exile target card from an opponent's graveyard. Draw a card.",
    "effects": [
      "Return target artifact or enchantment from any graveyard to your hand. Exile target card from an opponent's graveyard. Draw a card."
    ],
    "keywords": [
      "Theft",
      "Discovery"
    ],
    "powerScore": 53
  },
  {
    "id": "SKILL_INVOCATION_VEDIC_VED_006",
    "name": "Indra",
    "engine": "invocation",
    "category": "Vedic Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Deal 3 damage to up to three targets; your creatures gain +1/+1 and Vigilance this turn.",
    "effects": [
      "Deal 3 damage to up to three targets; your creatures gain +1/+1 and Vigilance this turn."
    ],
    "keywords": [
      "Thunder",
      "Leadership",
      "Aegis"
    ],
    "powerScore": 82
  },
  {
    "id": "SKILL_INVOCATION_VEDIC_VED_007",
    "name": "Agni",
    "engine": "invocation",
    "category": "Vedic Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Sacrifice a permanent: Create two Treasure tokens and deal 2 damage to any target.",
    "effects": [
      "Sacrifice a permanent: Create two Treasure tokens and deal 2 damage to any target."
    ],
    "keywords": [
      "Flame",
      "Offering",
      "Transmute"
    ],
    "powerScore": 84
  },
  {
    "id": "SKILL_INVOCATION_VEDIC_VED_008",
    "name": "Varuna",
    "engine": "invocation",
    "category": "Vedic Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Tap up to three permanents. They don't untap during their next untap step. Draw 2 cards.",
    "effects": [
      "Tap up to three permanents. They don't untap during their next untap step. Draw 2 cards."
    ],
    "keywords": [
      "Binding",
      "Law",
      "Flood"
    ],
    "powerScore": 86
  },
  {
    "id": "SKILL_INVOCATION_VEDIC_VED_009",
    "name": "Vayu",
    "engine": "invocation",
    "category": "Vedic Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Target creature gains +2/+0, Flying, and Haste until end of turn. Scry 2.",
    "effects": [
      "Target creature gains +2/+0, Flying, and Haste until end of turn. Scry 2."
    ],
    "keywords": [
      "Haste",
      "Evasion"
    ],
    "powerScore": 88
  },
  {
    "id": "SKILL_INVOCATION_VEDIC_VED_010",
    "name": "Surya",
    "engine": "invocation",
    "category": "Vedic Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Deal 4 damage to each enemy creature. You gain life equal to damage dealt.",
    "effects": [
      "Deal 4 damage to each enemy creature. You gain life equal to damage dealt."
    ],
    "keywords": [
      "Illuminate",
      "Radiance",
      "Lifelink"
    ],
    "powerScore": 70
  },
  {
    "id": "SKILL_INVOCATION_VEDIC_VED_011",
    "name": "Chandra",
    "engine": "invocation",
    "category": "Vedic Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Restore 4 life. Create a 1/1 Spirit with Flying for each 4 life you have above 20.",
    "effects": [
      "Restore 4 life. Create a 1/1 Spirit with Flying for each 4 life you have above 20."
    ],
    "keywords": [
      "Soothing",
      "Cycles"
    ],
    "powerScore": 72
  },
  {
    "id": "SKILL_INVOCATION_VEDIC_VED_012",
    "name": "Yama",
    "engine": "invocation",
    "category": "Vedic Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Exile up to two target creatures. Return a creature from your graveyard to the battlefield tapped.",
    "effects": [
      "Exile up to two target creatures. Return a creature from your graveyard to the battlefield tapped."
    ],
    "keywords": [
      "Judgment",
      "Grave"
    ],
    "powerScore": 74
  },
  {
    "id": "SKILL_INVOCATION_VEDIC_VED_013",
    "name": "Kubera",
    "engine": "invocation",
    "category": "Vedic Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Create four Treasure tokens. Draw a card.",
    "effects": [
      "Create four Treasure tokens. Draw a card."
    ],
    "keywords": [
      "Treasure",
      "Boon"
    ],
    "powerScore": 76
  },
  {
    "id": "SKILL_INVOCATION_VEDIC_VED_014",
    "name": "Ganesha",
    "engine": "invocation",
    "category": "Vedic Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Exile target artifact or enchantment. Scry 3, then draw a card. Your next spell costs 2 less.",
    "effects": [
      "Exile target artifact or enchantment. Scry 3, then draw a card. Your next spell costs 2 less."
    ],
    "keywords": [
      "Remove",
      "Wisdom",
      "Shield"
    ],
    "powerScore": 78
  },
  {
    "id": "SKILL_INVOCATION_VEDIC_VED_015",
    "name": "Skanda (Kartikeya)",
    "engine": "invocation",
    "category": "Vedic Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Create two 2/1 Warrior tokens with Haste. If you control Ganesha or Shiva, create two more.",
    "effects": [
      "Create two 2/1 Warrior tokens with Haste. If you control Ganesha or Shiva, create two more."
    ],
    "keywords": [
      "Charge",
      "Formation"
    ],
    "powerScore": 80
  },
  {
    "id": "SKILL_INVOCATION_VEDIC_VED_016",
    "name": "Hanuman",
    "engine": "invocation",
    "category": "Vedic Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Target creature gains +3/+3 and Indestructible this turn. Untap it.",
    "effects": [
      "Target creature gains +3/+3 and Indestructible this turn. Untap it."
    ],
    "keywords": [
      "Indestructible",
      "Leap"
    ],
    "powerScore": 82
  },
  {
    "id": "SKILL_INVOCATION_VEDIC_VED_017",
    "name": "Parvati",
    "engine": "invocation",
    "category": "Vedic Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Return up to two target creatures from your graveyard to your hand. Gain 4 life.",
    "effects": [
      "Return up to two target creatures from your graveyard to your hand. Gain 4 life."
    ],
    "keywords": [
      "Nurture",
      "Bond"
    ],
    "powerScore": 84
  },
  {
    "id": "SKILL_INVOCATION_VEDIC_VED_018",
    "name": "Durga",
    "engine": "invocation",
    "category": "Vedic Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Destroy target creature with power 4+. Your creatures gain +1/+1 and Trample this turn.",
    "effects": [
      "Destroy target creature with power 4+. Your creatures gain +1/+1 and Trample this turn."
    ],
    "keywords": [
      "Overwhelm",
      "Smite"
    ],
    "powerScore": 86
  },
  {
    "id": "SKILL_INVOCATION_VEDIC_VED_019",
    "name": "Kali",
    "engine": "invocation",
    "category": "Vedic Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Destroy all nonlegendary creatures. For each destroyed, create a 1/1 Spirit under your control.",
    "effects": [
      "Destroy all nonlegendary creatures. For each destroyed, create a 1/1 Spirit under your control."
    ],
    "keywords": [
      "Wipe",
      "Rebirth"
    ],
    "powerScore": 88
  },
  {
    "id": "SKILL_INVOCATION_VEDIC_VED_020",
    "name": "Krishna",
    "engine": "invocation",
    "category": "Vedic Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Gain control of up to two target creatures until end of turn. Untap them; they gain Haste. Draw 2 cards.",
    "effects": [
      "Gain control of up to two target creatures until end of turn. Untap them; they gain Haste. Draw 2 cards."
    ],
    "keywords": [
      "Charm",
      "Song",
      "Avatar"
    ],
    "powerScore": 70
  },
  {
    "id": "SKILL_INVOCATION_VEDIC_VED_021",
    "name": "Rama",
    "engine": "invocation",
    "category": "Vedic Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Exile target tapped creature. Create a 2/2 Ally token (Hanuman synergy: that token gets +1/+1 and Haste).",
    "effects": [
      "Exile target tapped creature. Create a 2/2 Ally token (Hanuman synergy: that token gets +1/+1 and Haste)."
    ],
    "keywords": [
      "Precision",
      "Exile",
      "Avatar"
    ],
    "powerScore": 72
  },
  {
    "id": "SKILL_INVOCATION_VEDIC_VED_022",
    "name": "Narasimha",
    "engine": "invocation",
    "category": "Vedic Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Destroy target creature. Prevent all damage that would be dealt to you this turn.",
    "effects": [
      "Destroy target creature. Prevent all damage that would be dealt to you this turn."
    ],
    "keywords": [
      "Uncounterable",
      "Rend",
      "Avatar"
    ],
    "powerScore": 74
  },
  {
    "id": "SKILL_INVOCATION_VEDIC_VED_023",
    "name": "Vamana",
    "engine": "invocation",
    "category": "Vedic Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Search your library for up to two lands and put them onto the battlefield tapped. Scry 1, draw 1.",
    "effects": [
      "Search your library for up to two lands and put them onto the battlefield tapped. Scry 1, draw 1."
    ],
    "keywords": [
      "Scale",
      "Step",
      "Avatar"
    ],
    "powerScore": 76
  },
  {
    "id": "SKILL_INVOCATION_VEDIC_VED_024",
    "name": "Parashurama",
    "engine": "invocation",
    "category": "Vedic Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Destroy all artifacts and creatures with mana cost 3 or less.",
    "effects": [
      "Destroy all artifacts and creatures with mana cost 3 or less."
    ],
    "keywords": [
      "Cull",
      "Purify",
      "Avatar"
    ],
    "powerScore": 78
  },
  {
    "id": "SKILL_INVOCATION_VEDIC_VED_025",
    "name": "Matsya",
    "engine": "invocation",
    "category": "Vedic Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Return up to three target cards from your graveyard to your hand.",
    "effects": [
      "Return up to three target cards from your graveyard to your hand."
    ],
    "keywords": [
      "Flood",
      "Salvage",
      "Avatar"
    ],
    "powerScore": 80
  },
  {
    "id": "SKILL_INVOCATION_VEDIC_VED_026",
    "name": "Kurma",
    "engine": "invocation",
    "category": "Vedic Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Prevent all damage that would be dealt to your permanents this turn. Create a Treasure token for each prevented this way.",
    "effects": [
      "Prevent all damage that would be dealt to your permanents this turn. Create a Treasure token for each prevented this way."
    ],
    "keywords": [
      "Shell",
      "Stabilize",
      "Avatar"
    ],
    "powerScore": 82
  },
  {
    "id": "SKILL_INVOCATION_VEDIC_VED_027",
    "name": "Varaha",
    "engine": "invocation",
    "category": "Vedic Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Exile target graveyard. Return a permanent from your graveyard to the battlefield.",
    "effects": [
      "Exile target graveyard. Return a permanent from your graveyard to the battlefield."
    ],
    "keywords": [
      "Lift",
      "Cleanse",
      "Avatar"
    ],
    "powerScore": 84
  },
  {
    "id": "SKILL_INVOCATION_VEDIC_VED_028",
    "name": "Buddha",
    "engine": "invocation",
    "category": "Vedic Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Counter target spell or ability. Its controller draws a card. You gain 3 life.",
    "effects": [
      "Counter target spell or ability. Its controller draws a card. You gain 3 life."
    ],
    "keywords": [
      "Silence",
      "Pacify",
      "Avatar"
    ],
    "powerScore": 86
  },
  {
    "id": "SKILL_INVOCATION_VEDIC_VED_029",
    "name": "Kalki",
    "engine": "invocation",
    "category": "Vedic Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Exile all nonland permanents with mana cost 4 or less. Create two 3/3 Avatar tokens with Haste.",
    "effects": [
      "Exile all nonland permanents with mana cost 4 or less. Create two 3/3 Avatar tokens with Haste."
    ],
    "keywords": [
      "Purge",
      "Haste",
      "Avatar"
    ],
    "powerScore": 88
  },
  {
    "id": "SKILL_INVOCATION_VEDIC_VED_030",
    "name": "Dhanvantari",
    "engine": "invocation",
    "category": "Vedic Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Restore all damage on your creatures. You gain 8 life. Create a Food token.",
    "effects": [
      "Restore all damage on your creatures. You gain 8 life. Create a Food token."
    ],
    "keywords": [
      "Heal",
      "Elixir"
    ],
    "powerScore": 70
  },
  {
    "id": "SKILL_INVOCATION_VEDIC_VED_031",
    "name": "Gayatri",
    "engine": "invocation",
    "category": "Vedic Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Your next Invocation costs 3 less. Scry 3, then draw a card.",
    "effects": [
      "Your next Invocation costs 3 less. Scry 3, then draw a card."
    ],
    "keywords": [
      "Chant",
      "Focus"
    ],
    "powerScore": 72
  },
  {
    "id": "SKILL_INVOCATION_VEDIC_VED_032",
    "name": "Ushas",
    "engine": "invocation",
    "category": "Vedic Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Untap up to three permanents. Draw a card.",
    "effects": [
      "Untap up to three permanents. Draw a card."
    ],
    "keywords": [
      "Awaken",
      "Tempo"
    ],
    "powerScore": 74
  },
  {
    "id": "SKILL_INVOCATION_VEDIC_VED_033",
    "name": "Ratri",
    "engine": "invocation",
    "category": "Vedic Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Your permanents gain Hexproof until your next turn. Scry 1.",
    "effects": [
      "Your permanents gain Hexproof until your next turn. Scry 1."
    ],
    "keywords": [
      "Veil",
      "Ward"
    ],
    "powerScore": 76
  },
  {
    "id": "SKILL_INVOCATION_VEDIC_VED_034",
    "name": "Mitra",
    "engine": "invocation",
    "category": "Vedic Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Target opponent becomes your ally until end of turn; both draw 2. Prevent all combat damage this turn.",
    "effects": [
      "Target opponent becomes your ally until end of turn; both draw 2. Prevent all combat damage this turn."
    ],
    "keywords": [
      "Accord",
      "Pact"
    ],
    "powerScore": 78
  },
  {
    "id": "SKILL_INVOCATION_VEDIC_VED_035",
    "name": "Rudra",
    "engine": "invocation",
    "category": "Vedic Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Deal 4 damage to target creature or planeswalker. If it dies, draw a card.",
    "effects": [
      "Deal 4 damage to target creature or planeswalker. If it dies, draw a card."
    ],
    "keywords": [
      "Howl",
      "Pierce"
    ],
    "powerScore": 80
  },
  {
    "id": "SKILL_INVOCATION_VEDIC_VED_036",
    "name": "Ashvins",
    "engine": "invocation",
    "category": "Vedic Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Copy target spell you control. You may choose new targets. Restore 3 life.",
    "effects": [
      "Copy target spell you control. You may choose new targets. Restore 3 life."
    ],
    "keywords": [
      "Twincast",
      "Recover"
    ],
    "powerScore": 82
  },
  {
    "id": "SKILL_INVOCATION_VEDIC_VED_037",
    "name": "Soma",
    "engine": "invocation",
    "category": "Vedic Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Draw 2 cards. Your maximum hand size is increased by 3 until end of turn.",
    "effects": [
      "Draw 2 cards. Your maximum hand size is increased by 3 until end of turn."
    ],
    "keywords": [
      "Draw",
      "Trance"
    ],
    "powerScore": 84
  },
  {
    "id": "SKILL_INVOCATION_VEDIC_VED_038",
    "name": "Aditi",
    "engine": "invocation",
    "category": "Vedic Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Create two 1/1 Deva tokens with Ward 2. Gain 4 life.",
    "effects": [
      "Create two 1/1 Deva tokens with Ward 2. Gain 4 life."
    ],
    "keywords": [
      "Birth",
      "Shield"
    ],
    "powerScore": 86
  },
  {
    "id": "SKILL_INVOCATION_NORSE_NOR_004",
    "name": "Frigg",
    "engine": "invocation",
    "category": "Norse Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Scry 4, then draw 2. Prevent all damage to a target this turn.",
    "effects": [
      "Scry 4, then draw 2. Prevent all damage to a target this turn."
    ],
    "keywords": [
      "Shield",
      "Prophecy"
    ],
    "powerScore": 80
  },
  {
    "id": "SKILL_INVOCATION_NORSE_NOR_005",
    "name": "Baldr",
    "engine": "invocation",
    "category": "Norse Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Exile target attacking creature. At end of turn, its controller creates a 2/2 Token. Draw a card.",
    "effects": [
      "Exile target attacking creature. At end of turn, its controller creates a 2/2 Token. Draw a card."
    ],
    "keywords": [
      "Aegis",
      "Return"
    ],
    "powerScore": 82
  },
  {
    "id": "SKILL_INVOCATION_NORSE_NOR_006",
    "name": "Tyr",
    "engine": "invocation",
    "category": "Norse Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Target creature you control fights target creature you don't control. Your creature gains Vigilance.",
    "effects": [
      "Target creature you control fights target creature you don't control. Your creature gains Vigilance."
    ],
    "keywords": [
      "Fight",
      "Vigilance"
    ],
    "powerScore": 84
  },
  {
    "id": "SKILL_INVOCATION_NORSE_NOR_007",
    "name": "Heimdall",
    "engine": "invocation",
    "category": "Norse Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Look at each opponent's hand. Creatures you control gain Ward 2 until your next turn.",
    "effects": [
      "Look at each opponent's hand. Creatures you control gain Ward 2 until your next turn."
    ],
    "keywords": [
      "Reveal",
      "Guard"
    ],
    "powerScore": 86
  },
  {
    "id": "SKILL_INVOCATION_NORSE_NOR_008",
    "name": "Frigg",
    "engine": "invocation",
    "category": "Norse Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Scry 4, then draw 2. Prevent all damage to a target this turn.",
    "effects": [
      "Scry 4, then draw 2. Prevent all damage to a target this turn."
    ],
    "keywords": [
      "Shield",
      "Prophecy"
    ],
    "powerScore": 88
  },
  {
    "id": "SKILL_INVOCATION_NORSE_NOR_008",
    "name": "Freyr",
    "engine": "invocation",
    "category": "Norse Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Put two +1/+1 counters on each of up to two creatures. Create two Food tokens.",
    "effects": [
      "Put two +1/+1 counters on each of up to two creatures. Create two Food tokens."
    ],
    "keywords": [
      "Growth",
      "Prosper"
    ],
    "powerScore": 88
  },
  {
    "id": "SKILL_INVOCATION_NORSE_NOR_009",
    "name": "Freyja",
    "engine": "invocation",
    "category": "Norse Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Gain control of target creature until end of turn. Untap it; it gains Flying and Haste. Scry 2, draw 1.",
    "effects": [
      "Gain control of target creature until end of turn. Untap it; it gains Flying and Haste. Scry 2, draw 1."
    ],
    "keywords": [
      "Charm",
      "Seidr",
      "Fly"
    ],
    "powerScore": 90
  },
  {
    "id": "SKILL_INVOCATION_NORSE_NOR_010",
    "name": "Njord",
    "engine": "invocation",
    "category": "Norse Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Return target permanent to its owner's hand. Create two Treasure tokens.",
    "effects": [
      "Return target permanent to its owner's hand. Create two Treasure tokens."
    ],
    "keywords": [
      "Tide",
      "Treasure"
    ],
    "powerScore": 72
  },
  {
    "id": "SKILL_INVOCATION_NORSE_NOR_011",
    "name": "Idunn",
    "engine": "invocation",
    "category": "Norse Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Restore all damage to a creature; put two +1/+1 counters on it. Draw a card.",
    "effects": [
      "Restore all damage to a creature; put two +1/+1 counters on it. Draw a card."
    ],
    "keywords": [
      "Restore",
      "Renew"
    ],
    "powerScore": 74
  },
  {
    "id": "SKILL_INVOCATION_NORSE_NOR_012",
    "name": "Sif",
    "engine": "invocation",
    "category": "Norse Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Create a Food token for each creature you control with power 2 or less. Gain 3 life.",
    "effects": [
      "Create a Food token for each creature you control with power 2 or less. Gain 3 life."
    ],
    "keywords": [
      "Shield",
      "Nourish"
    ],
    "powerScore": 76
  },
  {
    "id": "SKILL_INVOCATION_NORSE_NOR_013",
    "name": "Skadi",
    "engine": "invocation",
    "category": "Norse Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Tap up to two target creatures. They don't untap during their controller's next untap step. Draw a card.",
    "effects": [
      "Tap up to two target creatures. They don't untap during their controller's next untap step. Draw a card."
    ],
    "keywords": [
      "Snare",
      "Frost"
    ],
    "powerScore": 78
  },
  {
    "id": "SKILL_INVOCATION_NORSE_NOR_014",
    "name": "Bragi",
    "engine": "invocation",
    "category": "Norse Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Copy target instant or sorcery you control. You may choose new targets. Draw a card.",
    "effects": [
      "Copy target instant or sorcery you control. You may choose new targets. Draw a card."
    ],
    "keywords": [
      "Inspire",
      "Copy"
    ],
    "powerScore": 80
  },
  {
    "id": "SKILL_INVOCATION_NORSE_NOR_015",
    "name": "Ullr",
    "engine": "invocation",
    "category": "Norse Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Target creature gains +2/+0 and can't be blocked this turn. Scry 2.",
    "effects": [
      "Target creature gains +2/+0 and can't be blocked this turn. Scry 2."
    ],
    "keywords": [
      "Precision",
      "Evasion"
    ],
    "powerScore": 82
  },
  {
    "id": "SKILL_INVOCATION_NORSE_NOR_016",
    "name": "Forseti",
    "engine": "invocation",
    "category": "Norse Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Each player may draw a card; then choose and discard a card. Exile target tapped permanent.",
    "effects": [
      "Each player may draw a card; then choose and discard a card. Exile target tapped permanent."
    ],
    "keywords": [
      "Arbitrate",
      "Balance"
    ],
    "powerScore": 84
  },
  {
    "id": "SKILL_INVOCATION_NORSE_NOR_017",
    "name": "Hodr",
    "engine": "invocation",
    "category": "Norse Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Deal 2 damage to any target; if Baldr is on the field, exile that target instead.",
    "effects": [
      "Deal 2 damage to any target; if Baldr is on the field, exile that target instead."
    ],
    "keywords": [
      "Blindshot",
      "Fate"
    ],
    "powerScore": 86
  },
  {
    "id": "SKILL_INVOCATION_NORSE_NOR_018",
    "name": "Vidar",
    "engine": "invocation",
    "category": "Norse Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Target creature gains +4/+4 and Indestructible until end of turn. It must be blocked if able.",
    "effects": [
      "Target creature gains +4/+4 and Indestructible until end of turn. It must be blocked if able."
    ],
    "keywords": [
      "Indestructible",
      "Crush"
    ],
    "powerScore": 88
  },
  {
    "id": "SKILL_INVOCATION_NORSE_NOR_019",
    "name": "Vali",
    "engine": "invocation",
    "category": "Norse Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Create a 3/3 Aesir token with Haste and \"When this dies, draw a card\".",
    "effects": [
      "Create a 3/3 Aesir token with Haste and \"When this dies, draw a card\"."
    ],
    "keywords": [
      "Haste",
      "Reprisal"
    ],
    "powerScore": 90
  },
  {
    "id": "SKILL_INVOCATION_NORSE_NOR_020",
    "name": "Hel",
    "engine": "invocation",
    "category": "Norse Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Each opponent exiles a card from their graveyard. Return a creature from your graveyard to the battlefield tapped.",
    "effects": [
      "Each opponent exiles a card from their graveyard. Return a creature from your graveyard to the battlefield tapped."
    ],
    "keywords": [
      "Grave",
      "Tax"
    ],
    "powerScore": 72
  },
  {
    "id": "SKILL_INVOCATION_NORSE_NOR_021",
    "name": "Fenrir",
    "engine": "invocation",
    "category": "Norse Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Destroy target creature. Create a 4/4 Wolf token with Trample.",
    "effects": [
      "Destroy target creature. Create a 4/4 Wolf token with Trample."
    ],
    "keywords": [
      "Berserk",
      "Devour"
    ],
    "powerScore": 74
  },
  {
    "id": "SKILL_INVOCATION_NORSE_NOR_022",
    "name": "Jormungandr",
    "engine": "invocation",
    "category": "Norse Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "All creatures get -2/-2 until end of turn. Create a 5/5 Serpent token.",
    "effects": [
      "All creatures get -2/-2 until end of turn. Create a 5/5 Serpent token."
    ],
    "keywords": [
      "Coil",
      "Poison"
    ],
    "powerScore": 76
  },
  {
    "id": "SKILL_INVOCATION_NORSE_NOR_023",
    "name": "Surtr",
    "engine": "invocation",
    "category": "Norse Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Destroy all nonland permanents. Create a 6/6 Fire Giant token with Haste.",
    "effects": [
      "Destroy all nonland permanents. Create a 6/6 Fire Giant token with Haste."
    ],
    "keywords": [
      "Conflagrate",
      "Ragnarok"
    ],
    "powerScore": 78
  },
  {
    "id": "SKILL_INVOCATION_NORSE_NOR_024",
    "name": "Mimir",
    "engine": "invocation",
    "category": "Norse Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Draw 3 cards. Return up to two cards from your graveyard to your hand.",
    "effects": [
      "Draw 3 cards. Return up to two cards from your graveyard to your hand."
    ],
    "keywords": [
      "Drink",
      "Recall"
    ],
    "powerScore": 80
  },
  {
    "id": "SKILL_INVOCATION_NORSE_NOR_025",
    "name": "Aegir",
    "engine": "invocation",
    "category": "Norse Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Each player creates a Food token. Return up to two nonland permanents to their owners' hands.",
    "effects": [
      "Each player creates a Food token. Return up to two nonland permanents to their owners' hands."
    ],
    "keywords": [
      "Flood",
      "Banquet"
    ],
    "powerScore": 82
  },
  {
    "id": "SKILL_INVOCATION_NORSE_NOR_026",
    "name": "Ran",
    "engine": "invocation",
    "category": "Norse Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Tap target creature and another target permanent. They don't untap during their controller's next untap step.",
    "effects": [
      "Tap target creature and another target permanent. They don't untap during their controller's next untap step."
    ],
    "keywords": [
      "Snare",
      "Drown"
    ],
    "powerScore": 84
  },
  {
    "id": "SKILL_INVOCATION_NORSE_NOR_027",
    "name": "Norns (Urd, Verdandi, Skuld)",
    "engine": "invocation",
    "category": "Norse Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Reorder the top 7 cards of your library; you may exile any number of them. Draw 2 cards.",
    "effects": [
      "Reorder the top 7 cards of your library; you may exile any number of them. Draw 2 cards."
    ],
    "keywords": [
      "Spin",
      "Cut",
      "Weave"
    ],
    "powerScore": 86
  },
  {
    "id": "SKILL_INVOCATION_NORSE_NOR_028",
    "name": "Valkyries",
    "engine": "invocation",
    "category": "Norse Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Return up to two target creatures from your graveyard to the battlefield with +1/+1 counters. They gain Flying until end of turn.",
    "effects": [
      "Return up to two target creatures from your graveyard to the battlefield with +1/+1 counters. They gain Flying until end of turn."
    ],
    "keywords": [
      "Lift",
      "Honor"
    ],
    "powerScore": 88
  },
  {
    "id": "SKILL_INVOCATION_EGYPTIAN_EGY_004",
    "name": "Osiris",
    "engine": "invocation",
    "category": "Egyptian Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Return up to two target creatures from your graveyard to the battlefield. Gain 4 life.",
    "effects": [
      "Return up to two target creatures from your graveyard to the battlefield. Gain 4 life."
    ],
    "keywords": [
      "Revive",
      "Judge"
    ],
    "powerScore": 76
  },
  {
    "id": "SKILL_INVOCATION_EGYPTIAN_EGY_005",
    "name": "Horus",
    "engine": "invocation",
    "category": "Egyptian Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Target creature gains +3/+3 and Flying until end of turn. Draw a card.",
    "effects": [
      "Target creature gains +3/+3 and Flying until end of turn. Draw a card."
    ],
    "keywords": [
      "Fly",
      "Aegis"
    ],
    "powerScore": 78
  },
  {
    "id": "SKILL_INVOCATION_EGYPTIAN_EGY_006",
    "name": "Set",
    "engine": "invocation",
    "category": "Egyptian Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Destroy target creature or artifact. Each opponent discards a card.",
    "effects": [
      "Destroy target creature or artifact. Each opponent discards a card."
    ],
    "keywords": [
      "Storm",
      "Chaos"
    ],
    "powerScore": 80
  },
  {
    "id": "SKILL_INVOCATION_EGYPTIAN_EGY_007",
    "name": "Nephthys",
    "engine": "invocation",
    "category": "Egyptian Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Creatures you control gain Hexproof until your next turn. Create a 1/1 Spirit with Flying.",
    "effects": [
      "Creatures you control gain Hexproof until your next turn. Create a 1/1 Spirit with Flying."
    ],
    "keywords": [
      "Ward",
      "Veil"
    ],
    "powerScore": 82
  },
  {
    "id": "SKILL_INVOCATION_EGYPTIAN_EGY_008",
    "name": "Thoth",
    "engine": "invocation",
    "category": "Egyptian Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Draw 3 cards. You may return a card from your graveyard to your hand.",
    "effects": [
      "Draw 3 cards. You may return a card from your graveyard to your hand."
    ],
    "keywords": [
      "Record",
      "Recall"
    ],
    "powerScore": 84
  },
  {
    "id": "SKILL_INVOCATION_EGYPTIAN_EGY_009",
    "name": "Bastet",
    "engine": "invocation",
    "category": "Egyptian Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Create a 2/2 Cat token with Ward 2. Gain 3 life.",
    "effects": [
      "Create a 2/2 Cat token with Ward 2. Gain 3 life."
    ],
    "keywords": [
      "Prowl",
      "Guard"
    ],
    "powerScore": 86
  },
  {
    "id": "SKILL_INVOCATION_EGYPTIAN_EGY_010",
    "name": "Sekhmet",
    "engine": "invocation",
    "category": "Egyptian Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Deal 4 damage to each other creature. You gain life equal to the number destroyed.",
    "effects": [
      "Deal 4 damage to each other creature. You gain life equal to the number destroyed."
    ],
    "keywords": [
      "Scorch",
      "Rage"
    ],
    "powerScore": 68
  },
  {
    "id": "SKILL_INVOCATION_EGYPTIAN_EGY_011",
    "name": "Ptah",
    "engine": "invocation",
    "category": "Egyptian Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Create two 1/1 Construct tokens. Return target artifact from your graveyard to the battlefield.",
    "effects": [
      "Create two 1/1 Construct tokens. Return target artifact from your graveyard to the battlefield."
    ],
    "keywords": [
      "Forge",
      "Animate"
    ],
    "powerScore": 70
  },
  {
    "id": "SKILL_INVOCATION_EGYPTIAN_EGY_012",
    "name": "Hathor",
    "engine": "invocation",
    "category": "Egyptian Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Gain 5 life. Draw a card. Your next Invocation costs 2 less.",
    "effects": [
      "Gain 5 life. Draw a card. Your next Invocation costs 2 less."
    ],
    "keywords": [
      "Charm",
      "Nourish"
    ],
    "powerScore": 72
  },
  {
    "id": "SKILL_INVOCATION_EGYPTIAN_EGY_013",
    "name": "Ma'at",
    "engine": "invocation",
    "category": "Egyptian Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Each player draws 2 cards, then discards 1. Exile target permanent with mana cost 4+.",
    "effects": [
      "Each player draws 2 cards, then discards 1. Exile target permanent with mana cost 4+."
    ],
    "keywords": [
      "Weigh",
      "Order"
    ],
    "powerScore": 74
  },
  {
    "id": "SKILL_INVOCATION_EGYPTIAN_EGY_014",
    "name": "Sobek",
    "engine": "invocation",
    "category": "Egyptian Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Target creature you control gets +3/+0 and Trample this turn. Create a Food token.",
    "effects": [
      "Target creature you control gets +3/+0 and Trample this turn. Create a Food token."
    ],
    "keywords": [
      "Ambush",
      "Reap"
    ],
    "powerScore": 76
  },
  {
    "id": "SKILL_INVOCATION_EGYPTIAN_EGY_015",
    "name": "Khnum",
    "engine": "invocation",
    "category": "Egyptian Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Create a 1/1 Clay Golem token; put a +1/+1 counter on up to two target creatures.",
    "effects": [
      "Create a 1/1 Clay Golem token; put a +1/+1 counter on up to two target creatures."
    ],
    "keywords": [
      "Mold",
      "Breathe"
    ],
    "powerScore": 78
  },
  {
    "id": "SKILL_INVOCATION_EGYPTIAN_EGY_016",
    "name": "Khepri",
    "engine": "invocation",
    "category": "Egyptian Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Transform target creature you control into a copy of another target creature until end of turn. Draw a card.",
    "effects": [
      "Transform target creature you control into a copy of another target creature until end of turn. Draw a card."
    ],
    "keywords": [
      "Rise",
      "Transform"
    ],
    "powerScore": 80
  },
  {
    "id": "SKILL_INVOCATION_EGYPTIAN_EGY_017",
    "name": "Wadjet",
    "engine": "invocation",
    "category": "Egyptian Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Target creature gains Hexproof and Deathtouch until end of turn.",
    "effects": [
      "Target creature gains Hexproof and Deathtouch until end of turn."
    ],
    "keywords": [
      "Ward",
      "Strike"
    ],
    "powerScore": 82
  },
  {
    "id": "SKILL_INVOCATION_EGYPTIAN_EGY_018",
    "name": "Nekhbet",
    "engine": "invocation",
    "category": "Egyptian Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Target creature gains Flying and Ward 2 until end of turn. Scry 1.",
    "effects": [
      "Target creature gains Flying and Ward 2 until end of turn. Scry 1."
    ],
    "keywords": [
      "Aegis",
      "Lift"
    ],
    "powerScore": 84
  },
  {
    "id": "SKILL_INVOCATION_EGYPTIAN_EGY_019",
    "name": "Tefnut",
    "engine": "invocation",
    "category": "Egyptian Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Tap up to two permanents. Deal 2 damage to any target.",
    "effects": [
      "Tap up to two permanents. Deal 2 damage to any target."
    ],
    "keywords": [
      "Mist",
      "Shock"
    ],
    "powerScore": 86
  },
  {
    "id": "SKILL_INVOCATION_EGYPTIAN_EGY_020",
    "name": "Shu",
    "engine": "invocation",
    "category": "Egyptian Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Return target nonland permanent to its owner's hand. Scry 2.",
    "effects": [
      "Return target nonland permanent to its owner's hand. Scry 2."
    ],
    "keywords": [
      "Lift",
      "Divide"
    ],
    "powerScore": 68
  },
  {
    "id": "SKILL_INVOCATION_EGYPTIAN_EGY_021",
    "name": "Geb",
    "engine": "invocation",
    "category": "Egyptian Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Search your library for a basic land and put it onto the battlefield tapped; put a +1/+1 counter on up to two creatures.",
    "effects": [
      "Search your library for a basic land and put it onto the battlefield tapped; put a +1/+1 counter on up to two creatures."
    ],
    "keywords": [
      "Stabilize",
      "Grow"
    ],
    "powerScore": 70
  },
  {
    "id": "SKILL_INVOCATION_EGYPTIAN_EGY_022",
    "name": "Nut",
    "engine": "invocation",
    "category": "Egyptian Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Creatures you control gain Ward 1. Draw a card for each legendary you control (max 2).",
    "effects": [
      "Creatures you control gain Ward 1. Draw a card for each legendary you control (max 2)."
    ],
    "keywords": [
      "Veil",
      "Constellate"
    ],
    "powerScore": 72
  },
  {
    "id": "SKILL_INVOCATION_EGYPTIAN_EGY_023",
    "name": "Hapi",
    "engine": "invocation",
    "category": "Egyptian Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Create a Food token and a Treasure token. Gain 2 life.",
    "effects": [
      "Create a Food token and a Treasure token. Gain 2 life."
    ],
    "keywords": [
      "Flood",
      "Bless"
    ],
    "powerScore": 74
  },
  {
    "id": "SKILL_INVOCATION_EGYPTIAN_EGY_024",
    "name": "Serqet",
    "engine": "invocation",
    "category": "Egyptian Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Destroy target creature with power 2 or less. You gain 3 life.",
    "effects": [
      "Destroy target creature with power 2 or less. You gain 3 life."
    ],
    "keywords": [
      "Antidote",
      "Sting"
    ],
    "powerScore": 76
  },
  {
    "id": "SKILL_INVOCATION_EGYPTIAN_EGY_025",
    "name": "Seshat",
    "engine": "invocation",
    "category": "Egyptian Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Look at the top five cards of your library; put two into your hand and the rest on bottom.",
    "effects": [
      "Look at the top five cards of your library; put two into your hand and the rest on bottom."
    ],
    "keywords": [
      "Record",
      "Plan"
    ],
    "powerScore": 78
  },
  {
    "id": "SKILL_INVOCATION_EGYPTIAN_EGY_026",
    "name": "Wepwawet",
    "engine": "invocation",
    "category": "Egyptian Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Create a 2/1 Jackal token with Haste and \"can't be blocked by more than one creature\".",
    "effects": [
      "Create a 2/1 Jackal token with Haste and \"can't be blocked by more than one creature\"."
    ],
    "keywords": [
      "Scout",
      "Haste"
    ],
    "powerScore": 80
  },
  {
    "id": "SKILL_INVOCATION_EGYPTIAN_EGY_027",
    "name": "Montu",
    "engine": "invocation",
    "category": "Egyptian Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Creatures you control gain +2/+0 and Trample until end of turn. Create a 3/3 Bull token.",
    "effects": [
      "Creatures you control gain +2/+0 and Trample until end of turn. Create a 3/3 Bull token."
    ],
    "keywords": [
      "Charge",
      "Fury"
    ],
    "powerScore": 82
  },
  {
    "id": "SKILL_INVOCATION_EGYPTIAN_EGY_028",
    "name": "Bes",
    "engine": "invocation",
    "category": "Egyptian Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Target creature gains Ward 2; create a Food token. Draw a card.",
    "effects": [
      "Target creature gains Ward 2; create a Food token. Draw a card."
    ],
    "keywords": [
      "Ward",
      "Cheer"
    ],
    "powerScore": 84
  },
  {
    "id": "SKILL_INVOCATION_EGYPTIAN_EGY_029",
    "name": "Amun",
    "engine": "invocation",
    "category": "Egyptian Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Exile target nonland permanent. Create two Treasure tokens. Draw a card.",
    "effects": [
      "Exile target nonland permanent. Create two Treasure tokens. Draw a card."
    ],
    "keywords": [
      "Veil",
      "Glory"
    ],
    "powerScore": 86
  },
  {
    "id": "SKILL_INVOCATION_EGYPTIAN_EGY_030",
    "name": "Aten",
    "engine": "invocation",
    "category": "Egyptian Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Deal 6 damage divided as you choose among any number of targets. You gain 6 life. Your next Invocation costs 3 less.",
    "effects": [
      "Deal 6 damage divided as you choose among any number of targets. You gain 6 life. Your next Invocation costs 3 less."
    ],
    "keywords": [
      "Radiance",
      "Monotheon"
    ],
    "powerScore": 68
  },
  {
    "id": "SKILL_CONSCIOUSNESS_97",
    "name": "Perfect Awareness",
    "engine": "consciousness",
    "category": "General",
    "tier": 4,
    "cost": {
      "kp": 12
    },
    "cooldown": 10,
    "unlocked": true,
    "description": "Achieve complete battlefield awareness. See all hidden information for 3 turns. All your abilities cost 50% less Consciousness.",
    "effects": [
      "Achieve complete battlefield awareness. See all hidden information for 3 turns. All your abilities cost 50% less Consciousness."
    ],
    "keywords": [
      "Insight",
      "Efficiency",
      "Vision"
    ],
    "powerScore": 124
  },
  {
    "id": "SKILL_CONSCIOUSNESS_98",
    "name": "Eternal Mind",
    "engine": "consciousness",
    "category": "General",
    "tier": 4,
    "cost": {
      "kp": 14
    },
    "cooldown": 12,
    "unlocked": true,
    "description": "Consciousness no longer depletes. All abilities using Consciousness cost 0 for 2 turns. Draw 3 cards.",
    "effects": [
      "Consciousness no longer depletes. All abilities using Consciousness cost 0 for 2 turns. Draw 3 cards."
    ],
    "keywords": [
      "Infinite",
      "Economy",
      "Scaling"
    ],
    "powerScore": 126
  },
  {
    "id": "SKILL_CONSCIOUSNESS_99",
    "name": "Cosmic Synthesis",
    "engine": "consciousness",
    "category": "General",
    "tier": 4,
    "cost": {
      "kp": 15
    },
    "cooldown": 15,
    "unlocked": true,
    "description": "Combine all active buffs into one mega-buff with combined effects and duration. Buff cannot be dispelled.",
    "effects": [
      "Combine all active buffs into one mega-buff with combined effects and duration. Buff cannot be dispelled."
    ],
    "keywords": [
      "Synthesis",
      "Permanent",
      "Power"
    ],
    "powerScore": 128
  },
  {
    "id": "SKILL_CONSCIOUSNESS_100",
    "name": "Transcendent Form",
    "engine": "consciousness",
    "category": "General",
    "tier": 4,
    "cost": {
      "kp": 20
    },
    "cooldown": 20,
    "unlocked": true,
    "description": "ULTIMATE: Transform into pure consciousness. Immune to all damage and debuffs for 3 turns. All abilities are instant and free. At end, restore all resources to maximum.",
    "effects": [
      "ULTIMATE: Transform into pure consciousness. Immune to all damage and debuffs for 3 turns. All abili..."
    ],
    "keywords": [
      "Ultimate",
      "Transcendence",
      "Godmode"
    ],
    "powerScore": 110
  },
  {
    "id": "SKILL_TANTRA_90",
    "name": "Ravaging Storm",
    "engine": "tantra",
    "category": "General",
    "tier": 3,
    "cost": {
      "kp": 9
    },
    "cooldown": 8,
    "unlocked": true,
    "description": "Deal 35 damage to all enemies. Apply [Burn] and [Bleed] for 3 turns each.",
    "effects": [
      "Deal 35 damage to all enemies. Apply [Burn] and [Bleed] for 3 turns each."
    ],
    "keywords": [
      "AoE",
      "Burn",
      "Bleed",
      "Pressure"
    ],
    "powerScore": 95
  },
  {
    "id": "SKILL_TANTRA_91",
    "name": "Death Mark",
    "engine": "tantra",
    "category": "General",
    "tier": 3,
    "cost": {
      "kp": 8
    },
    "cooldown": 9,
    "unlocked": true,
    "description": "Mark target enemy. If they drop below 30% Ojas within 3 turns, instantly Execute them.",
    "effects": [
      "Mark target enemy. If they drop below 30% Ojas within 3 turns, instantly Execute them."
    ],
    "keywords": [
      "Execute",
      "Pressure",
      "Finish"
    ],
    "powerScore": 97
  },
  {
    "id": "SKILL_TANTRA_92",
    "name": "Relentless Pursuit",
    "engine": "tantra",
    "category": "General",
    "tier": 3,
    "cost": {
      "kp": 7
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Gain +30% attack speed for 4 turns. Attacks ignore 50% of enemy defense.",
    "effects": [
      "Gain +30% attack speed for 4 turns. Attacks ignore 50% of enemy defense."
    ],
    "keywords": [
      "Haste",
      "Penetration",
      "Relentless"
    ],
    "powerScore": 99
  },
  {
    "id": "SKILL_TANTRA_93",
    "name": "Overwhelming Force",
    "engine": "tantra",
    "category": "General",
    "tier": 3,
    "cost": {
      "kp": 10
    },
    "cooldown": 10,
    "unlocked": true,
    "description": "Deal 50 damage. If target survives, Stun them for 2 turns and apply [Vulnerable] x3.",
    "effects": [
      "Deal 50 damage. If target survives, Stun them for 2 turns and apply [Vulnerable] x3."
    ],
    "keywords": [
      "Damage",
      "Stun",
      "Vulnerable",
      "Control"
    ],
    "powerScore": 101
  },
  {
    "id": "SKILL_TANTRA_94",
    "name": "Savage Frenzy",
    "engine": "tantra",
    "category": "General",
    "tier": 4,
    "cost": {
      "kp": 11
    },
    "cooldown": 11,
    "unlocked": true,
    "description": "Enter Frenzy: +50% damage, +30% attack speed, but take +20% damage. Lasts 5 turns.",
    "effects": [
      "Enter Frenzy: +50% damage, +30% attack speed, but take +20% damage. Lasts 5 turns."
    ],
    "keywords": [
      "Frenzy",
      "Risk",
      "Power"
    ],
    "powerScore": 118
  },
  {
    "id": "SKILL_TANTRA_95",
    "name": "Annihilation Wave",
    "engine": "tantra",
    "category": "General",
    "tier": 4,
    "cost": {
      "kp": 12
    },
    "cooldown": 12,
    "unlocked": true,
    "description": "Deal 60 damage to all enemies. Destroys all enemy shields and buffs first.",
    "effects": [
      "Deal 60 damage to all enemies. Destroys all enemy shields and buffs first."
    ],
    "keywords": [
      "AoE",
      "Dispel",
      "Destruction"
    ],
    "powerScore": 120
  },
  {
    "id": "SKILL_TANTRA_96",
    "name": "Ultimate Destruction",
    "engine": "tantra",
    "category": "General",
    "tier": 4,
    "cost": {
      "kp": 13
    },
    "cooldown": 13,
    "unlocked": true,
    "description": "Deal 80 pure damage (ignores shields, immunity, protection). Cannot be prevented or reduced.",
    "effects": [
      "Deal 80 pure damage (ignores shields, immunity, protection). Cannot be prevented or reduced."
    ],
    "keywords": [
      "True Damage",
      "Unstoppable",
      "Execute"
    ],
    "powerScore": 122
  },
  {
    "id": "SKILL_TANTRA_97",
    "name": "Apocalypse Flame",
    "engine": "tantra",
    "category": "General",
    "tier": 4,
    "cost": {
      "kp": 14
    },
    "cooldown": 14,
    "unlocked": true,
    "description": "Apply permanent [Burn] that deals increasing damage each turn (5, 10, 15, 20...). Cannot be cleansed.",
    "effects": [
      "Apply permanent [Burn] that deals increasing damage each turn (5, 10, 15, 20...). Cannot be cleansed."
    ],
    "keywords": [
      "Burn",
      "DoT",
      "Permanent",
      "Unstoppable"
    ],
    "powerScore": 124
  },
  {
    "id": "SKILL_TANTRA_98",
    "name": "Wrathful Ascension",
    "engine": "tantra",
    "category": "General",
    "tier": 4,
    "cost": {
      "kp": 15
    },
    "cooldown": 15,
    "unlocked": true,
    "description": "Transform into Avatar of Wrath for 3 turns. All attacks deal triple damage and apply [Burn], [Bleed], and [Decay].",
    "effects": [
      "Transform into Avatar of Wrath for 3 turns. All attacks deal triple damage and apply [Burn], [Bleed], and [Decay]."
    ],
    "keywords": [
      "Ultimate",
      "Transformation",
      "Devastation"
    ],
    "powerScore": 126
  },
  {
    "id": "SKILL_TANTRA_99",
    "name": "Eternal Rage",
    "engine": "tantra",
    "category": "General",
    "tier": 4,
    "cost": {
      "kp": 18
    },
    "cooldown": 18,
    "unlocked": true,
    "description": "Permanent buff: All your damage increased by 100%. All DoT effects doubled. Shakti regenerates twice as fast.",
    "effects": [
      "Permanent buff: All your damage increased by 100%. All DoT effects doubled. Shakti regenerates twice as fast."
    ],
    "keywords": [
      "Permanent",
      "Scaling",
      "Power"
    ],
    "powerScore": 128
  },
  {
    "id": "SKILL_TANTRA_100",
    "name": "Cataclysm",
    "engine": "tantra",
    "category": "General",
    "tier": 4,
    "cost": {
      "kp": 25
    },
    "cooldown": 25,
    "unlocked": true,
    "description": "ULTIMATE: Deal 200 damage to all enemies. Destroy all structures, shields, and protections. Apply every DoT in the game for 10 turns each. Reduce max Ojas by 50%.",
    "effects": [
      "ULTIMATE: Deal 200 damage to all enemies. Destroy all structures, shields, and protections. Apply ev..."
    ],
    "keywords": [
      "Ultimate",
      "Apocalypse",
      "Devastation",
      "Unstoppable"
    ],
    "powerScore": 110
  },
  {
    "id": "SKILL_THERAPEUTIC_95",
    "name": "Mass Resurrection",
    "engine": "therapeutic",
    "category": "General",
    "tier": 4,
    "cost": {
      "kp": 12
    },
    "cooldown": 15,
    "unlocked": true,
    "description": "Revive all fallen allies with 50% Ojas. They gain immunity for 2 turns.",
    "effects": [
      "Revive all fallen allies with 50% Ojas. They gain immunity for 2 turns."
    ],
    "keywords": [
      "Resurrect",
      "Heal",
      "Immunity"
    ],
    "powerScore": 120
  },
  {
    "id": "SKILL_THERAPEUTIC_96",
    "name": "Divine Sanctuary",
    "engine": "therapeutic",
    "category": "General",
    "tier": 4,
    "cost": {
      "kp": 13
    },
    "cooldown": 12,
    "unlocked": true,
    "description": "Create sanctuary zone. All allies inside heal 20 per turn and are immune to debuffs. Lasts 5 turns.",
    "effects": [
      "Create sanctuary zone. All allies inside heal 20 per turn and are immune to debuffs. Lasts 5 turns."
    ],
    "keywords": [
      "Sanctuary",
      "Heal",
      "Immunity",
      "Zone"
    ],
    "powerScore": 122
  },
  {
    "id": "SKILL_THERAPEUTIC_97",
    "name": "Eternal Life",
    "engine": "therapeutic",
    "category": "General",
    "tier": 4,
    "cost": {
      "kp": 14
    },
    "cooldown": 18,
    "unlocked": true,
    "description": "Target ally cannot drop below 1 Ojas for 3 turns. They heal 30 per turn and are immune to Execute effects.",
    "effects": [
      "Target ally cannot drop below 1 Ojas for 3 turns. They heal 30 per turn and are immune to Execute effects."
    ],
    "keywords": [
      "Immortality",
      "Heal",
      "Protection"
    ],
    "powerScore": 124
  },
  {
    "id": "SKILL_THERAPEUTIC_98",
    "name": "Radiant Ascension",
    "engine": "therapeutic",
    "category": "General",
    "tier": 4,
    "cost": {
      "kp": 15
    },
    "cooldown": 16,
    "unlocked": true,
    "description": "Heal all allies to full Ojas. Remove all debuffs. Grant +50% damage and immunity for 2 turns.",
    "effects": [
      "Heal all allies to full Ojas. Remove all debuffs. Grant +50% damage and immunity for 2 turns."
    ],
    "keywords": [
      "Heal",
      "Cleanse",
      "Power",
      "Immunity"
    ],
    "powerScore": 126
  },
  {
    "id": "SKILL_THERAPEUTIC_99",
    "name": "Phoenix Rebirth",
    "engine": "therapeutic",
    "category": "General",
    "tier": 4,
    "cost": {
      "kp": 18
    },
    "cooldown": 20,
    "unlocked": true,
    "description": "Permanent passive: When you would die, instead fully heal and gain 5 turns of immunity. Can only trigger once per duel.",
    "effects": [
      "Permanent passive: When you would die, instead fully heal and gain 5 turns of immunity. Can only trigger once per duel."
    ],
    "keywords": [
      "Resurrect",
      "Immortality",
      "Ultimate"
    ],
    "powerScore": 128
  },
  {
    "id": "SKILL_THERAPEUTIC_100",
    "name": "Cosmic Renewal",
    "engine": "therapeutic",
    "category": "General",
    "tier": 4,
    "cost": {
      "kp": 25
    },
    "cooldown": 30,
    "unlocked": true,
    "description": "ULTIMATE: Reset the entire duel state. All Ojas restored to maximum, all cooldowns reset, all debuffs removed, all resources refilled. Both players draw 5 cards.",
    "effects": [
      "ULTIMATE: Reset the entire duel state. All Ojas restored to maximum, all cooldowns reset, all debuff..."
    ],
    "keywords": [
      "Ultimate",
      "Reset",
      "Renewal",
      "Miracle"
    ],
    "powerScore": 110
  },
  {
    "id": "SKILL_INVOCATION_GREEK_GRK_001",
    "name": "Zeus",
    "engine": "invocation",
    "category": "Greek Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Deal 6 damage to any target. Create three 2/2 Lightning tokens. You gain control of target creature until end of turn.",
    "effects": [
      "Deal 6 damage to any target. Create three 2/2 Lightning tokens. You gain control of target creature until end of turn."
    ],
    "keywords": [
      "Lightning",
      "Authority",
      "Storm"
    ],
    "powerScore": 77
  },
  {
    "id": "SKILL_INVOCATION_GREEK_GRK_002",
    "name": "Poseidon",
    "engine": "invocation",
    "category": "Greek Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Return all nonland permanents to owners' hands. Create a 5/5 Kraken token.",
    "effects": [
      "Return all nonland permanents to owners' hands. Create a 5/5 Kraken token."
    ],
    "keywords": [
      "Tsunami",
      "Shake",
      "Flood"
    ],
    "powerScore": 79
  },
  {
    "id": "SKILL_INVOCATION_GREEK_GRK_003",
    "name": "Hades",
    "engine": "invocation",
    "category": "Greek Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Destroy all creatures. Exile them instead of putting them in graveyards. Create X 2/2 Shade tokens where X is creatures destroyed.",
    "effects": [
      "Destroy all creatures. Exile them instead of putting them in graveyards. Create X 2/2 Shade tokens where X is creatures destroyed."
    ],
    "keywords": [
      "Death",
      "Exile",
      "Souls"
    ],
    "powerScore": 81
  },
  {
    "id": "SKILL_INVOCATION_GREEK_GRK_004",
    "name": "Hera",
    "engine": "invocation",
    "category": "Greek Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "All your creatures get +2/+2 and gain Lifelink. Destroy target enchantment.",
    "effects": [
      "All your creatures get +2/+2 and gain Lifelink. Destroy target enchantment."
    ],
    "keywords": [
      "Bond",
      "Unity",
      "Jealousy"
    ],
    "powerScore": 83
  },
  {
    "id": "SKILL_INVOCATION_GREEK_GRK_005",
    "name": "Athena",
    "engine": "invocation",
    "category": "Greek Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Counter target spell. Create two 3/3 Soldier tokens with Vigilance. Draw 2 cards.",
    "effects": [
      "Counter target spell. Create two 3/3 Soldier tokens with Vigilance. Draw 2 cards."
    ],
    "keywords": [
      "Strategy",
      "Aegis",
      "Wisdom"
    ],
    "powerScore": 85
  },
  {
    "id": "SKILL_INVOCATION_GREEK_GRK_006",
    "name": "Apollo",
    "engine": "invocation",
    "category": "Greek Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Deal 4 damage divided among any targets. Scry 4, then draw 2 cards. Heal 4 damage to any target.",
    "effects": [
      "Deal 4 damage divided among any targets. Scry 4, then draw 2 cards. Heal 4 damage to any target."
    ],
    "keywords": [
      "Light",
      "Oracle",
      "Music"
    ],
    "powerScore": 87
  },
  {
    "id": "SKILL_INVOCATION_GREEK_GRK_007",
    "name": "Artemis",
    "engine": "invocation",
    "category": "Greek Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Destroy target creature with flying. Create three 2/2 Wolf tokens. Gain 3 life.",
    "effects": [
      "Destroy target creature with flying. Create three 2/2 Wolf tokens. Gain 3 life."
    ],
    "keywords": [
      "Hunt",
      "Precision",
      "Wild"
    ],
    "powerScore": 89
  },
  {
    "id": "SKILL_INVOCATION_GREEK_GRK_008",
    "name": "Ares",
    "engine": "invocation",
    "category": "Greek Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "All creatures get +3/+0 and gain First Strike and Menace until end of turn. Deal 3 damage to each player.",
    "effects": [
      "All creatures get +3/+0 and gain First Strike and Menace until end of turn. Deal 3 damage to each player."
    ],
    "keywords": [
      "Rage",
      "Battle",
      "Slaughter"
    ],
    "powerScore": 91
  },
  {
    "id": "SKILL_INVOCATION_GREEK_GRK_009",
    "name": "Aphrodite",
    "engine": "invocation",
    "category": "Greek Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Gain control of up to three target creatures until end of turn. They gain Haste. Draw a card for each.",
    "effects": [
      "Gain control of up to three target creatures until end of turn. They gain Haste. Draw a card for each."
    ],
    "keywords": [
      "Charm",
      "Allure",
      "Passion"
    ],
    "powerScore": 93
  },
  {
    "id": "SKILL_INVOCATION_GREEK_GRK_010",
    "name": "Hephaestus",
    "engine": "invocation",
    "category": "Greek Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Create three 3/3 Artifact Creature tokens with Haste. Search library for an artifact and put it onto battlefield.",
    "effects": [
      "Create three 3/3 Artifact Creature tokens with Haste. Search library for an artifact and put it onto battlefield."
    ],
    "keywords": [
      "Forge",
      "Craft",
      "Automation"
    ],
    "powerScore": 75
  },
  {
    "id": "SKILL_INVOCATION_GREEK_GRK_011",
    "name": "Hermes",
    "engine": "invocation",
    "category": "Greek Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Target creature gains +2/+0, Flying, Haste, and 'When this attacks, draw a card.' Take an extra turn after this one.",
    "effects": [
      "Target creature gains +2/+0, Flying, Haste, and 'When this attacks, draw a card.' Take an extra turn after this one."
    ],
    "keywords": [
      "Haste",
      "Steal",
      "Swift"
    ],
    "powerScore": 77
  },
  {
    "id": "SKILL_INVOCATION_GREEK_GRK_012",
    "name": "Dionysus",
    "engine": "invocation",
    "category": "Greek Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Each player discards their hand, then draws 7 cards. All creatures attack this turn if able, chosen randomly.",
    "effects": [
      "Each player discards their hand, then draws 7 cards. All creatures attack this turn if able, chosen randomly."
    ],
    "keywords": [
      "Frenzy",
      "Chaos",
      "Revel"
    ],
    "powerScore": 79
  },
  {
    "id": "SKILL_INVOCATION_GREEK_GRK_013",
    "name": "Kronos",
    "engine": "invocation",
    "category": "Greek Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Take two extra turns after this one. Exile all graveyards. Deal 10 damage divided among any targets.",
    "effects": [
      "Take two extra turns after this one. Exile all graveyards. Deal 10 damage divided among any targets."
    ],
    "keywords": [
      "Time",
      "Devour",
      "Ages"
    ],
    "powerScore": 81
  },
  {
    "id": "SKILL_INVOCATION_GREEK_GRK_014",
    "name": "Rhea",
    "engine": "invocation",
    "category": "Greek Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Return all creature cards from your graveyard to battlefield. They gain Haste. You gain 10 life.",
    "effects": [
      "Return all creature cards from your graveyard to battlefield. They gain Haste. You gain 10 life."
    ],
    "keywords": [
      "Birth",
      "Protect",
      "Nurture"
    ],
    "powerScore": 83
  },
  {
    "id": "SKILL_INVOCATION_GREEK_GRK_015",
    "name": "Prometheus",
    "engine": "invocation",
    "category": "Greek Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Sacrifice a permanent: Draw 3 cards and create three Treasure tokens. Repeat this twice.",
    "effects": [
      "Sacrifice a permanent: Draw 3 cards and create three Treasure tokens. Repeat this twice."
    ],
    "keywords": [
      "Fire",
      "Gift",
      "Sacrifice"
    ],
    "powerScore": 85
  },
  {
    "id": "SKILL_INVOCATION_GREEK_GRK_016",
    "name": "Atlas",
    "engine": "invocation",
    "category": "Greek Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "All your permanents gain Indestructible until your next turn. You can't lose the game and opponents can't win this turn.",
    "effects": [
      "All your permanents gain Indestructible until your next turn. You can't lose the game and opponents can't win this turn."
    ],
    "keywords": [
      "Burden",
      "Strength",
      "Endure"
    ],
    "powerScore": 87
  },
  {
    "id": "SKILL_INVOCATION_GREEK_GRK_017",
    "name": "Hecate",
    "engine": "invocation",
    "category": "Greek Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Copy target instant or sorcery three times. You may choose new targets for the copies.",
    "effects": [
      "Copy target instant or sorcery three times. You may choose new targets for the copies."
    ],
    "keywords": [
      "Witchcraft",
      "Choice",
      "Night"
    ],
    "powerScore": 89
  },
  {
    "id": "SKILL_INVOCATION_GREEK_GRK_018",
    "name": "Nike",
    "engine": "invocation",
    "category": "Greek Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "All your creatures gain +2/+2, Flying, and Double Strike until end of turn. You can't lose this turn.",
    "effects": [
      "All your creatures gain +2/+2, Flying, and Double Strike until end of turn. You can't lose this turn."
    ],
    "keywords": [
      "Victory",
      "Triumph",
      "Glory"
    ],
    "powerScore": 91
  },
  {
    "id": "SKILL_INVOCATION_GREEK_GRK_019",
    "name": "Nemesis",
    "engine": "invocation",
    "category": "Greek Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Destroy target permanent that dealt damage to you this turn. Deal damage equal to your life lost this turn to any target.",
    "effects": [
      "Destroy target permanent that dealt damage to you this turn. Deal damage equal to your life lost this turn to any target."
    ],
    "keywords": [
      "Vengeance",
      "Justice",
      "Balance"
    ],
    "powerScore": 93
  },
  {
    "id": "SKILL_INVOCATION_GREEK_GRK_020",
    "name": "Pan",
    "engine": "invocation",
    "category": "Greek Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Create five 1/1 Satyr tokens with Haste. All creatures you control gain Trample. Opponents discard a card.",
    "effects": [
      "Create five 1/1 Satyr tokens with Haste. All creatures you control gain Trample. Opponents discard a card."
    ],
    "keywords": [
      "Wild",
      "Panic",
      "Nature"
    ],
    "powerScore": 75
  },
  {
    "id": "SKILL_INVOCATION_GREEK_GRK_021",
    "name": "Persephone",
    "engine": "invocation",
    "category": "Greek Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Return target creature from any graveyard to battlefield under your control. Create three Food tokens. Heal 5 damage.",
    "effects": [
      "Return target creature from any graveyard to battlefield under your control. Create three Food tokens. Heal 5 damage."
    ],
    "keywords": [
      "Rebirth",
      "Seasons",
      "Death"
    ],
    "powerScore": 77
  },
  {
    "id": "SKILL_INVOCATION_GREEK_GRK_022",
    "name": "Demeter",
    "engine": "invocation",
    "category": "Greek Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Search library for up to three lands and put them onto battlefield. Create five Food tokens. Draw 2 cards.",
    "effects": [
      "Search library for up to three lands and put them onto battlefield. Create five Food tokens. Draw 2 cards."
    ],
    "keywords": [
      "Growth",
      "Abundance",
      "Harvest"
    ],
    "powerScore": 79
  },
  {
    "id": "SKILL_INVOCATION_GREEK_GRK_023",
    "name": "Helios",
    "engine": "invocation",
    "category": "Greek Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Deal 5 damage to each creature and each opponent. Reveal all face-down cards. Draw a card for each revealed.",
    "effects": [
      "Deal 5 damage to each creature and each opponent. Reveal all face-down cards. Draw a card for each revealed."
    ],
    "keywords": [
      "Light",
      "Burn",
      "Reveal"
    ],
    "powerScore": 81
  },
  {
    "id": "SKILL_INVOCATION_GREEK_GRK_024",
    "name": "Nyx",
    "engine": "invocation",
    "category": "Greek Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "All your permanents gain Hexproof and Shroud until your next turn. Opponents skip their next combat phase.",
    "effects": [
      "All your permanents gain Hexproof and Shroud until your next turn. Opponents skip their next combat phase."
    ],
    "keywords": [
      "Darkness",
      "Dreams",
      "Hide"
    ],
    "powerScore": 83
  },
  {
    "id": "SKILL_INVOCATION_GREEK_GRK_025",
    "name": "Gaia",
    "engine": "invocation",
    "category": "Greek Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Create three 5/5 Elemental tokens. All your lands become 3/3 creatures until end of turn. They're still lands. Gain 15 life.",
    "effects": [
      "Create three 5/5 Elemental tokens. All your lands become 3/3 creatures until end of turn. They're still lands. Gain 15 life."
    ],
    "keywords": [
      "Earth",
      "Creation",
      "Life"
    ],
    "powerScore": 85
  },
  {
    "id": "SKILL_INVOCATION_GREEK_GRK_026",
    "name": "Eros",
    "engine": "invocation",
    "category": "Greek Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Gain control of target creature until end of turn. Untap it and it gains Haste. Create a copy of it.",
    "effects": [
      "Gain control of target creature until end of turn. Untap it and it gains Haste. Create a copy of it."
    ],
    "keywords": [
      "Love",
      "Control",
      "Charm"
    ],
    "powerScore": 87
  },
  {
    "id": "SKILL_INVOCATION_GREEK_GRK_027",
    "name": "Thanatos",
    "engine": "invocation",
    "category": "Greek Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Exile all creatures with power 3 or less. Opponents can't cast creature spells this turn. Gain life equal to creatures exiled.",
    "effects": [
      "Exile all creatures with power 3 or less. Opponents can't cast creature spells this turn. Gain life equal to creatures exiled."
    ],
    "keywords": [
      "Death",
      "Peaceful",
      "End"
    ],
    "powerScore": 89
  },
  {
    "id": "SKILL_INVOCATION_GREEK_GRK_028",
    "name": "Hypnos",
    "engine": "invocation",
    "category": "Greek Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Tap all creatures opponents control. They don't untap during their next untap step. Draw 2 cards.",
    "effects": [
      "Tap all creatures opponents control. They don't untap during their next untap step. Draw 2 cards."
    ],
    "keywords": [
      "Sleep",
      "Dreams",
      "Rest"
    ],
    "powerScore": 91
  },
  {
    "id": "SKILL_INVOCATION_GREEK_GRK_029",
    "name": "Eris",
    "engine": "invocation",
    "category": "Greek Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Each player sacrifices half their permanents rounded up. Each player discards their hand. Chaos reigns.",
    "effects": [
      "Each player sacrifices half their permanents rounded up. Each player discards their hand. Chaos reigns."
    ],
    "keywords": [
      "Chaos",
      "Strife",
      "Discord"
    ],
    "powerScore": 93
  },
  {
    "id": "SKILL_INVOCATION_GREEK_GRK_030",
    "name": "Tyche",
    "engine": "invocation",
    "category": "Greek Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Flip five coins. For each heads, draw 2 cards and create a Treasure. For each tails, deal 3 damage to any target.",
    "effects": [
      "Flip five coins. For each heads, draw 2 cards and create a Treasure. For each tails, deal 3 damage to any target."
    ],
    "keywords": [
      "Luck",
      "Chance",
      "Fate"
    ],
    "powerScore": 75
  },
  {
    "id": "SKILL_INVOCATION_CHINESE_CHN_001",
    "name": "Jade Emperor",
    "engine": "invocation",
    "category": "Chinese Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "You become the Monarch. Draw 3 cards. Create three 4/4 Celestial tokens. Your life total becomes 50.",
    "effects": [
      "You become the Monarch. Draw 3 cards. Create three 4/4 Celestial tokens. Your life total becomes 50."
    ],
    "keywords": [
      "Authority",
      "Heaven",
      "Decree"
    ],
    "powerScore": 75
  },
  {
    "id": "SKILL_INVOCATION_CHINESE_CHN_002",
    "name": "Sun Wukong",
    "engine": "invocation",
    "category": "Chinese Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Create five copies of target creature you control. They gain Haste and 'When this dies, deal 3 damage to any target.'",
    "effects": [
      "Create five copies of target creature you control. They gain Haste and 'When this dies, deal 3 damage to any target.'"
    ],
    "keywords": [
      "Immortal",
      "Clone",
      "Chaos"
    ],
    "powerScore": 77
  },
  {
    "id": "SKILL_INVOCATION_CHINESE_CHN_003",
    "name": "Guan Yu",
    "engine": "invocation",
    "category": "Chinese Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Deal 5 damage to target creature. If it dies, create two 3/3 Warrior tokens. All Warriors you control gain +2/+2.",
    "effects": [
      "Deal 5 damage to target creature. If it dies, create two 3/3 Warrior tokens. All Warriors you control gain +2/+2."
    ],
    "keywords": [
      "Honor",
      "Valor",
      "Strike"
    ],
    "powerScore": 79
  },
  {
    "id": "SKILL_INVOCATION_CHINESE_CHN_004",
    "name": "Nezha",
    "engine": "invocation",
    "category": "Chinese Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Deal 4 damage to each opponent. Create two 2/2 Fire Spirit tokens with Haste and Flying.",
    "effects": [
      "Deal 4 damage to each opponent. Create two 2/2 Fire Spirit tokens with Haste and Flying."
    ],
    "keywords": [
      "Fire",
      "Youth",
      "Wheels"
    ],
    "powerScore": 81
  },
  {
    "id": "SKILL_INVOCATION_CHINESE_CHN_005",
    "name": "Erlang Shen",
    "engine": "invocation",
    "category": "Chinese Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Destroy target creature or enchantment. Look at target opponent's hand and exile a card from it. Draw 2 cards.",
    "effects": [
      "Destroy target creature or enchantment. Look at target opponent's hand and exile a card from it. Draw 2 cards."
    ],
    "keywords": [
      "Third Eye",
      "Truth",
      "Hunt"
    ],
    "powerScore": 83
  },
  {
    "id": "SKILL_INVOCATION_CHINESE_CHN_006",
    "name": "Chang'e",
    "engine": "invocation",
    "category": "Chinese Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "All your creatures gain Flying and Lifelink until end of turn. Gain 5 life. Draw a card.",
    "effects": [
      "All your creatures gain Flying and Lifelink until end of turn. Gain 5 life. Draw a card."
    ],
    "keywords": [
      "Moon",
      "Immortality",
      "Beauty"
    ],
    "powerScore": 85
  },
  {
    "id": "SKILL_INVOCATION_CHINESE_CHN_007",
    "name": "Dragon King",
    "engine": "invocation",
    "category": "Chinese Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Return all nonland permanents to owners' hands. Create a 7/7 Dragon token with Flying. Draw 3 cards.",
    "effects": [
      "Return all nonland permanents to owners' hands. Create a 7/7 Dragon token with Flying. Draw 3 cards."
    ],
    "keywords": [
      "Storm",
      "Flood",
      "Dragon"
    ],
    "powerScore": 87
  },
  {
    "id": "SKILL_INVOCATION_CHINESE_CHN_008",
    "name": "Nüwa",
    "engine": "invocation",
    "category": "Chinese Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Return all creature cards from your graveyard to hand. Create three 2/2 Human tokens. Gain 10 life.",
    "effects": [
      "Return all creature cards from your graveyard to hand. Create three 2/2 Human tokens. Gain 10 life."
    ],
    "keywords": [
      "Create",
      "Repair",
      "Mother"
    ],
    "powerScore": 89
  },
  {
    "id": "SKILL_INVOCATION_CHINESE_CHN_009",
    "name": "Fuxi",
    "engine": "invocation",
    "category": "Chinese Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Destroy target creature with power 4 or greater. Scry 4, then draw 2 cards. Create a Food token.",
    "effects": [
      "Destroy target creature with power 4 or greater. Scry 4, then draw 2 cards. Create a Food token."
    ],
    "keywords": [
      "Hunt",
      "Knowledge",
      "Trap"
    ],
    "powerScore": 91
  },
  {
    "id": "SKILL_INVOCATION_CHINESE_CHN_010",
    "name": "Shennong",
    "engine": "invocation",
    "category": "Chinese Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Search library for three lands and put them onto battlefield. Heal all damage from all creatures. Gain 8 life.",
    "effects": [
      "Search library for three lands and put them onto battlefield. Heal all damage from all creatures. Gain 8 life."
    ],
    "keywords": [
      "Heal",
      "Growth",
      "Herbs"
    ],
    "powerScore": 73
  },
  {
    "id": "SKILL_INVOCATION_CHINESE_CHN_011",
    "name": "Xuanwu",
    "engine": "invocation",
    "category": "Chinese Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "All your permanents gain Indestructible and Hexproof until your next turn. Create a 5/5 Tortoise token.",
    "effects": [
      "All your permanents gain Indestructible and Hexproof until your next turn. Create a 5/5 Tortoise token."
    ],
    "keywords": [
      "Shield",
      "Turtle",
      "Snake"
    ],
    "powerScore": 75
  },
  {
    "id": "SKILL_INVOCATION_CHINESE_CHN_012",
    "name": "Zhurong",
    "engine": "invocation",
    "category": "Chinese Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Deal 7 damage divided among any targets. All your creatures gain +3/+0 and First Strike until end of turn.",
    "effects": [
      "Deal 7 damage divided among any targets. All your creatures gain +3/+0 and First Strike until end of turn."
    ],
    "keywords": [
      "Fire",
      "Burn",
      "Rage"
    ],
    "powerScore": 77
  },
  {
    "id": "SKILL_INVOCATION_CHINESE_CHN_013",
    "name": "Gonggong",
    "engine": "invocation",
    "category": "Chinese Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Return three target nonland permanents to owners' hands. Draw 2 cards. Opponents discard a card.",
    "effects": [
      "Return three target nonland permanents to owners' hands. Draw 2 cards. Opponents discard a card."
    ],
    "keywords": [
      "Flood",
      "Chaos",
      "Destruction"
    ],
    "powerScore": 79
  },
  {
    "id": "SKILL_INVOCATION_CHINESE_CHN_014",
    "name": "Caishen",
    "engine": "invocation",
    "category": "Chinese Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Create five Treasure tokens. Draw cards equal to treasures you control. Gain 5 life.",
    "effects": [
      "Create five Treasure tokens. Draw cards equal to treasures you control. Gain 5 life."
    ],
    "keywords": [
      "Wealth",
      "Fortune",
      "Gold"
    ],
    "powerScore": 81
  },
  {
    "id": "SKILL_INVOCATION_CHINESE_CHN_015",
    "name": "Mazu",
    "engine": "invocation",
    "category": "Chinese Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "All your creatures gain Indestructible until end of turn. Counter target spell. Draw 2 cards.",
    "effects": [
      "All your creatures gain Indestructible until end of turn. Counter target spell. Draw 2 cards."
    ],
    "keywords": [
      "Protection",
      "Safe",
      "Guide"
    ],
    "powerScore": 83
  },
  {
    "id": "SKILL_INVOCATION_CHINESE_CHN_016",
    "name": "Guanyin",
    "engine": "invocation",
    "category": "Chinese Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Heal all damage from all permanents. Remove all poison counters. All players gain 10 life. Draw a card.",
    "effects": [
      "Heal all damage from all permanents. Remove all poison counters. All players gain 10 life. Draw a card."
    ],
    "keywords": [
      "Mercy",
      "Heal",
      "Peace"
    ],
    "powerScore": 85
  },
  {
    "id": "SKILL_INVOCATION_CHINESE_CHN_017",
    "name": "Pangu",
    "engine": "invocation",
    "category": "Chinese Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Exile all permanents, then return all lands to battlefield. Each player draws 7 cards. Reset all life totals to 40.",
    "effects": [
      "Exile all permanents, then return all lands to battlefield. Each player draws 7 cards. Reset all life totals to 40."
    ],
    "keywords": [
      "Creation",
      "Separation",
      "Giant"
    ],
    "powerScore": 87
  },
  {
    "id": "SKILL_INVOCATION_CHINESE_CHN_018",
    "name": "Lei Gong",
    "engine": "invocation",
    "category": "Chinese Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Deal 4 damage to each creature. If a creature dealt damage this way would die, exile it instead.",
    "effects": [
      "Deal 4 damage to each creature. If a creature dealt damage this way would die, exile it instead."
    ],
    "keywords": [
      "Thunder",
      "Justice",
      "Drum"
    ],
    "powerScore": 89
  },
  {
    "id": "SKILL_INVOCATION_CHINESE_CHN_019",
    "name": "Dian Mu",
    "engine": "invocation",
    "category": "Chinese Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Deal 5 damage to target creature or planeswalker. If it dies, you may cast this again without paying mana cost.",
    "effects": [
      "Deal 5 damage to target creature or planeswalker. If it dies, you may cast this again without paying mana cost."
    ],
    "keywords": [
      "Lightning",
      "Flash",
      "Strike"
    ],
    "powerScore": 91
  },
  {
    "id": "SKILL_INVOCATION_CHINESE_CHN_020",
    "name": "Zao Jun",
    "engine": "invocation",
    "category": "Chinese Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Create three Food tokens. Draw a card for each Food you control. Gain 3 life.",
    "effects": [
      "Create three Food tokens. Draw a card for each Food you control. Gain 3 life."
    ],
    "keywords": [
      "Food",
      "Home",
      "Report"
    ],
    "powerScore": 73
  },
  {
    "id": "SKILL_INVOCATION_CHINESE_CHN_021",
    "name": "Wen Chang",
    "engine": "invocation",
    "category": "Chinese Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Draw 4 cards. You have no maximum hand size this turn. Scry 3.",
    "effects": [
      "Draw 4 cards. You have no maximum hand size this turn. Scry 3."
    ],
    "keywords": [
      "Knowledge",
      "Study",
      "Wisdom"
    ],
    "powerScore": 75
  },
  {
    "id": "SKILL_INVOCATION_CHINESE_CHN_022",
    "name": "Bixia Yuanjun",
    "engine": "invocation",
    "category": "Chinese Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Return target creature from graveyard to battlefield. Create two 2/2 Spirit tokens. Gain 7 life.",
    "effects": [
      "Return target creature from graveyard to battlefield. Create two 2/2 Spirit tokens. Gain 7 life."
    ],
    "keywords": [
      "Dawn",
      "Life",
      "Protection"
    ],
    "powerScore": 77
  },
  {
    "id": "SKILL_INVOCATION_CHINESE_CHN_023",
    "name": "Tu Di Gong",
    "engine": "invocation",
    "category": "Chinese Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Search library for up to two basic lands and put them onto battlefield tapped. Create two Treasure tokens.",
    "effects": [
      "Search library for up to two basic lands and put them onto battlefield tapped. Create two Treasure tokens."
    ],
    "keywords": [
      "Earth",
      "Growth",
      "Local"
    ],
    "powerScore": 79
  },
  {
    "id": "SKILL_INVOCATION_CHINESE_CHN_024",
    "name": "Yan Wang",
    "engine": "invocation",
    "category": "Chinese Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Destroy all creatures with power 4 or greater. Exile all graveyards. Each opponent loses 5 life.",
    "effects": [
      "Destroy all creatures with power 4 or greater. Exile all graveyards. Each opponent loses 5 life."
    ],
    "keywords": [
      "Judge",
      "Death",
      "Karma"
    ],
    "powerScore": 81
  },
  {
    "id": "SKILL_INVOCATION_CHINESE_CHN_025",
    "name": "Bai Hu",
    "engine": "invocation",
    "category": "Chinese Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Create a 5/5 White Tiger token with First Strike and Vigilance. All creatures you control gain +1/+1 and Vigilance.",
    "effects": [
      "Create a 5/5 White Tiger token with First Strike and Vigilance. All creatures you control gain +1/+1 and Vigilance."
    ],
    "keywords": [
      "Tiger",
      "West",
      "Metal"
    ],
    "powerScore": 83
  },
  {
    "id": "SKILL_INVOCATION_JAPANESE_JPN_001",
    "name": "Amaterasu",
    "engine": "invocation",
    "category": "Japanese Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Deal 6 damage to each opponent. All your creatures gain +3/+3 and Lifelink. You gain 15 life.",
    "effects": [
      "Deal 6 damage to each opponent. All your creatures gain +3/+3 and Lifelink. You gain 15 life."
    ],
    "keywords": [
      "Sun",
      "Light",
      "Divine"
    ],
    "powerScore": 73
  },
  {
    "id": "SKILL_INVOCATION_JAPANESE_JPN_002",
    "name": "Susanoo",
    "engine": "invocation",
    "category": "Japanese Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Destroy all artifacts and enchantments. Deal 5 damage divided among any targets. Create a 6/6 Dragon token with Flying.",
    "effects": [
      "Destroy all artifacts and enchantments. Deal 5 damage divided among any targets. Create a 6/6 Dragon token with Flying."
    ],
    "keywords": [
      "Storm",
      "Sword",
      "Chaos"
    ],
    "powerScore": 75
  },
  {
    "id": "SKILL_INVOCATION_JAPANESE_JPN_003",
    "name": "Tsukuyomi",
    "engine": "invocation",
    "category": "Japanese Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Tap all creatures. They don't untap during their next untap step. Take an extra turn after this one.",
    "effects": [
      "Tap all creatures. They don't untap during their next untap step. Take an extra turn after this one."
    ],
    "keywords": [
      "Moon",
      "Night",
      "Time"
    ],
    "powerScore": 77
  },
  {
    "id": "SKILL_INVOCATION_JAPANESE_JPN_004",
    "name": "Inari",
    "engine": "invocation",
    "category": "Japanese Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Create five 2/2 Fox Spirit tokens. Create three Food tokens. Draw 2 cards.",
    "effects": [
      "Create five 2/2 Fox Spirit tokens. Create three Food tokens. Draw 2 cards."
    ],
    "keywords": [
      "Fox",
      "Prosperity",
      "Shape"
    ],
    "powerScore": 79
  },
  {
    "id": "SKILL_INVOCATION_JAPANESE_JPN_005",
    "name": "Raijin",
    "engine": "invocation",
    "category": "Japanese Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Deal 4 damage to each creature. Create three 2/2 Lightning Spirit tokens with Haste.",
    "effects": [
      "Deal 4 damage to each creature. Create three 2/2 Lightning Spirit tokens with Haste."
    ],
    "keywords": [
      "Thunder",
      "Drums",
      "Storm"
    ],
    "powerScore": 81
  },
  {
    "id": "SKILL_INVOCATION_JAPANESE_JPN_006",
    "name": "Fujin",
    "engine": "invocation",
    "category": "Japanese Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Return three target nonland permanents to owners' hands. All your creatures gain Flying until end of turn.",
    "effects": [
      "Return three target nonland permanents to owners' hands. All your creatures gain Flying until end of turn."
    ],
    "keywords": [
      "Wind",
      "Bag",
      "Storm"
    ],
    "powerScore": 83
  },
  {
    "id": "SKILL_INVOCATION_JAPANESE_JPN_007",
    "name": "Hachiman",
    "engine": "invocation",
    "category": "Japanese Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Deal 5 damage to any target. Create three 3/3 Samurai tokens with First Strike. Draw a card.",
    "effects": [
      "Deal 5 damage to any target. Create three 3/3 Samurai tokens with First Strike. Draw a card."
    ],
    "keywords": [
      "War",
      "Victory",
      "Archery"
    ],
    "powerScore": 85
  },
  {
    "id": "SKILL_INVOCATION_JAPANESE_JPN_008",
    "name": "Benzaiten",
    "engine": "invocation",
    "category": "Japanese Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Draw 3 cards. You may play an additional land this turn. All your spells cost 1 less this turn.",
    "effects": [
      "Draw 3 cards. You may play an additional land this turn. All your spells cost 1 less this turn."
    ],
    "keywords": [
      "Music",
      "Flow",
      "Beauty"
    ],
    "powerScore": 87
  },
  {
    "id": "SKILL_INVOCATION_JAPANESE_JPN_009",
    "name": "Izanagi",
    "engine": "invocation",
    "category": "Japanese Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Create five 3/3 Spirit tokens. Return all creatures from your graveyard to hand. Gain 10 life.",
    "effects": [
      "Create five 3/3 Spirit tokens. Return all creatures from your graveyard to hand. Gain 10 life."
    ],
    "keywords": [
      "Creation",
      "Life",
      "Father"
    ],
    "powerScore": 89
  },
  {
    "id": "SKILL_INVOCATION_JAPANESE_JPN_010",
    "name": "Izanami",
    "engine": "invocation",
    "category": "Japanese Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Destroy all creatures. Exile them. Create X 2/2 Spirit tokens where X is creatures destroyed.",
    "effects": [
      "Destroy all creatures. Exile them. Create X 2/2 Spirit tokens where X is creatures destroyed."
    ],
    "keywords": [
      "Death",
      "Underworld",
      "Mother"
    ],
    "powerScore": 71
  },
  {
    "id": "SKILL_INVOCATION_JAPANESE_JPN_011",
    "name": "Ryujin",
    "engine": "invocation",
    "category": "Japanese Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Return all nonland permanents to owners' hands. Create a 8/8 Dragon token with Flying. Draw 4 cards.",
    "effects": [
      "Return all nonland permanents to owners' hands. Create a 8/8 Dragon token with Flying. Draw 4 cards."
    ],
    "keywords": [
      "Dragon",
      "Sea",
      "Storm"
    ],
    "powerScore": 73
  },
  {
    "id": "SKILL_INVOCATION_JAPANESE_JPN_012",
    "name": "Tengu",
    "engine": "invocation",
    "category": "Japanese Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Create three 3/3 Tengu tokens with Flying and First Strike. Draw a card for each.",
    "effects": [
      "Create three 3/3 Tengu tokens with Flying and First Strike. Draw a card for each."
    ],
    "keywords": [
      "Flight",
      "Martial",
      "Trick"
    ],
    "powerScore": 75
  },
  {
    "id": "SKILL_INVOCATION_JAPANESE_JPN_013",
    "name": "Kitsune",
    "engine": "invocation",
    "category": "Japanese Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Create a copy of target creature you control. It gains Haste. At end of turn, create another copy.",
    "effects": [
      "Create a copy of target creature you control. It gains Haste. At end of turn, create another copy."
    ],
    "keywords": [
      "Fox",
      "Illusion",
      "Nine Tails"
    ],
    "powerScore": 77
  },
  {
    "id": "SKILL_INVOCATION_JAPANESE_JPN_014",
    "name": "Oni",
    "engine": "invocation",
    "category": "Japanese Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Create two 5/5 Demon tokens with Menace. Deal 5 damage divided among any targets.",
    "effects": [
      "Create two 5/5 Demon tokens with Menace. Deal 5 damage divided among any targets."
    ],
    "keywords": [
      "Demon",
      "Rage",
      "Club"
    ],
    "powerScore": 79
  },
  {
    "id": "SKILL_INVOCATION_JAPANESE_JPN_015",
    "name": "Yuki-Onna",
    "engine": "invocation",
    "category": "Japanese Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Tap all creatures opponents control. They don't untap during their next two untap steps. Gain 5 life.",
    "effects": [
      "Tap all creatures opponents control. They don't untap during their next two untap steps. Gain 5 life."
    ],
    "keywords": [
      "Ice",
      "Cold",
      "Freeze"
    ],
    "powerScore": 81
  },
  {
    "id": "SKILL_INVOCATION_JAPANESE_JPN_016",
    "name": "Tanuki",
    "engine": "invocation",
    "category": "Japanese Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Create a copy of target artifact or enchantment you control. Draw a card.",
    "effects": [
      "Create a copy of target artifact or enchantment you control. Draw a card."
    ],
    "keywords": [
      "Shape",
      "Trick",
      "Leaf"
    ],
    "powerScore": 83
  },
  {
    "id": "SKILL_INVOCATION_JAPANESE_JPN_017",
    "name": "Gashadokuro",
    "engine": "invocation",
    "category": "Japanese Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Create a 10/10 Skeleton token. Each opponent sacrifices three permanents.",
    "effects": [
      "Create a 10/10 Skeleton token. Each opponent sacrifices three permanents."
    ],
    "keywords": [
      "Undead",
      "Giant",
      "Hunger"
    ],
    "powerScore": 85
  },
  {
    "id": "SKILL_INVOCATION_JAPANESE_JPN_018",
    "name": "Kappa",
    "engine": "invocation",
    "category": "Japanese Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Return target permanent to owner's hand. Draw 2 cards. Create a Food token.",
    "effects": [
      "Return target permanent to owner's hand. Draw 2 cards. Create a Food token."
    ],
    "keywords": [
      "Water",
      "Trick",
      "Cucumber"
    ],
    "powerScore": 87
  },
  {
    "id": "SKILL_INVOCATION_JAPANESE_JPN_019",
    "name": "Jorōgumo",
    "engine": "invocation",
    "category": "Japanese Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Destroy target creature with Flying. Create three 2/2 Spider tokens with Reach. Draw a card.",
    "effects": [
      "Destroy target creature with Flying. Create three 2/2 Spider tokens with Reach. Draw a card."
    ],
    "keywords": [
      "Spider",
      "Web",
      "Deceit"
    ],
    "powerScore": 89
  },
  {
    "id": "SKILL_INVOCATION_JAPANESE_JPN_020",
    "name": "Yamata no Orochi",
    "engine": "invocation",
    "category": "Japanese Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Create an 8/8 Dragon Hydra token with 'When this enters, deal 8 damage divided among any targets.' Draw 4 cards.",
    "effects": [
      "Create an 8/8 Dragon Hydra token with 'When this enters, deal 8 damage divided among any targets.' Draw 4 cards."
    ],
    "keywords": [
      "Dragon",
      "Hydra",
      "Heads"
    ],
    "powerScore": 71
  },
  {
    "id": "SKILL_INVOCATION_JAPANESE_JPN_021",
    "name": "Ame-no-Uzume",
    "engine": "invocation",
    "category": "Japanese Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "All your creatures gain +2/+2 and Haste until end of turn. Draw 2 cards. Gain 5 life.",
    "effects": [
      "All your creatures gain +2/+2 and Haste until end of turn. Draw 2 cards. Gain 5 life."
    ],
    "keywords": [
      "Dance",
      "Joy",
      "Light"
    ],
    "powerScore": 73
  },
  {
    "id": "SKILL_INVOCATION_JAPANESE_JPN_022",
    "name": "Takemikazuchi",
    "engine": "invocation",
    "category": "Japanese Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Deal 5 damage to target creature. If it dies, create a 4/4 Samurai token. Draw a card.",
    "effects": [
      "Deal 5 damage to target creature. If it dies, create a 4/4 Samurai token. Draw a card."
    ],
    "keywords": [
      "Thunder",
      "Blade",
      "Victory"
    ],
    "powerScore": 75
  },
  {
    "id": "SKILL_INVOCATION_JAPANESE_JPN_023",
    "name": "Okuninushi",
    "engine": "invocation",
    "category": "Japanese Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Search library for up to three lands and put them onto battlefield. Heal 10 damage divided. Draw 2 cards.",
    "effects": [
      "Search library for up to three lands and put them onto battlefield. Heal 10 damage divided. Draw 2 cards."
    ],
    "keywords": [
      "Medicine",
      "Magic",
      "Build"
    ],
    "powerScore": 77
  },
  {
    "id": "SKILL_INVOCATION_JAPANESE_JPN_024",
    "name": "Bishamon",
    "engine": "invocation",
    "category": "Japanese Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Create four Treasure tokens. Create two 3/3 Warrior tokens. Draw a card for each treasure.",
    "effects": [
      "Create four Treasure tokens. Create two 3/3 Warrior tokens. Draw a card for each treasure."
    ],
    "keywords": [
      "Fortune",
      "Warrior",
      "Treasure"
    ],
    "powerScore": 79
  },
  {
    "id": "SKILL_INVOCATION_JAPANESE_JPN_025",
    "name": "Fudo Myoo",
    "engine": "invocation",
    "category": "Japanese Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "All your permanents gain Indestructible until your next turn. Deal 6 damage divided. You can't lose this turn.",
    "effects": [
      "All your permanents gain Indestructible until your next turn. Deal 6 damage divided. You can't lose this turn."
    ],
    "keywords": [
      "Immovable",
      "Fire",
      "Sword"
    ],
    "powerScore": 81
  },
  {
    "id": "SKILL_INVOCATION_AFRICAN_AFR_001",
    "name": "Olodumare",
    "engine": "invocation",
    "category": "African Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "You become the Monarch. Create five 4/4 Spirit tokens. Your life total becomes 60. Draw 5 cards.",
    "effects": [
      "You become the Monarch. Create five 4/4 Spirit tokens. Your life total becomes 60. Draw 5 cards."
    ],
    "keywords": [
      "Creation",
      "Supreme",
      "Wisdom"
    ],
    "powerScore": 76
  },
  {
    "id": "SKILL_INVOCATION_AFRICAN_AFR_002",
    "name": "Ogun",
    "engine": "invocation",
    "category": "African Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Deal 6 damage divided among any targets. Create three 3/3 Warrior tokens with First Strike. All artifacts cost 2 less.",
    "effects": [
      "Deal 6 damage divided among any targets. Create three 3/3 Warrior tokens with First Strike. All artifacts cost 2 less."
    ],
    "keywords": [
      "Iron",
      "War",
      "Forge"
    ],
    "powerScore": 78
  },
  {
    "id": "SKILL_INVOCATION_AFRICAN_AFR_003",
    "name": "Shango",
    "engine": "invocation",
    "category": "African Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Deal 7 damage divided among any targets. Create three 2/2 Lightning tokens with Haste.",
    "effects": [
      "Deal 7 damage divided among any targets. Create three 2/2 Lightning tokens with Haste."
    ],
    "keywords": [
      "Thunder",
      "Fire",
      "Dance"
    ],
    "powerScore": 80
  },
  {
    "id": "SKILL_INVOCATION_AFRICAN_AFR_004",
    "name": "Oshun",
    "engine": "invocation",
    "category": "African Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Gain control of target creature. Create three 2/2 River Spirit tokens. Heal 8 damage. Draw 2 cards.",
    "effects": [
      "Gain control of target creature. Create three 2/2 River Spirit tokens. Heal 8 damage. Draw 2 cards."
    ],
    "keywords": [
      "Love",
      "River",
      "Beauty"
    ],
    "powerScore": 82
  },
  {
    "id": "SKILL_INVOCATION_AFRICAN_AFR_005",
    "name": "Yemoja",
    "engine": "invocation",
    "category": "African Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Return all creatures from your graveyard to hand. Create five 2/2 Fish tokens. Gain 15 life.",
    "effects": [
      "Return all creatures from your graveyard to hand. Create five 2/2 Fish tokens. Gain 15 life."
    ],
    "keywords": [
      "Mother",
      "Ocean",
      "Life"
    ],
    "powerScore": 84
  },
  {
    "id": "SKILL_INVOCATION_AFRICAN_AFR_006",
    "name": "Eshu",
    "engine": "invocation",
    "category": "African Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Each player draws 3 cards, then discards 2 cards. Each player creates two Treasure tokens. Chaos ensues.",
    "effects": [
      "Each player draws 3 cards, then discards 2 cards. Each player creates two Treasure tokens. Chaos ensues."
    ],
    "keywords": [
      "Trick",
      "Chaos",
      "Choice"
    ],
    "powerScore": 86
  },
  {
    "id": "SKILL_INVOCATION_AFRICAN_AFR_007",
    "name": "Oya",
    "engine": "invocation",
    "category": "African Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Return three target permanents to owners' hands. Deal 4 damage to any target. Draw 2 cards.",
    "effects": [
      "Return three target permanents to owners' hands. Deal 4 damage to any target. Draw 2 cards."
    ],
    "keywords": [
      "Wind",
      "Storm",
      "Transformation"
    ],
    "powerScore": 88
  },
  {
    "id": "SKILL_INVOCATION_AFRICAN_AFR_008",
    "name": "Obatala",
    "engine": "invocation",
    "category": "African Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Exile all enchantments. Create five 2/2 Human tokens. All your creatures gain Lifelink. Gain 10 life.",
    "effects": [
      "Exile all enchantments. Create five 2/2 Human tokens. All your creatures gain Lifelink. Gain 10 life."
    ],
    "keywords": [
      "Pure",
      "Create",
      "White"
    ],
    "powerScore": 90
  },
  {
    "id": "SKILL_INVOCATION_AFRICAN_AFR_009",
    "name": "Orunmila",
    "engine": "invocation",
    "category": "African Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Scry 5, then draw 4 cards. Look at top 5 cards of opponent's library. You may rearrange them.",
    "effects": [
      "Scry 5, then draw 4 cards. Look at top 5 cards of opponent's library. You may rearrange them."
    ],
    "keywords": [
      "Wisdom",
      "Oracle",
      "Fate"
    ],
    "powerScore": 92
  },
  {
    "id": "SKILL_INVOCATION_AFRICAN_AFR_010",
    "name": "Elegua",
    "engine": "invocation",
    "category": "African Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Search library for a land and put it onto battlefield. Draw a card. Create a Treasure token.",
    "effects": [
      "Search library for a land and put it onto battlefield. Draw a card. Create a Treasure token."
    ],
    "keywords": [
      "Path",
      "Open",
      "Key"
    ],
    "powerScore": 74
  },
  {
    "id": "SKILL_INVOCATION_AFRICAN_AFR_011",
    "name": "Babaluaye",
    "engine": "invocation",
    "category": "African Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Destroy all creatures with power 2 or less. Heal all damage from remaining creatures. Gain 10 life.",
    "effects": [
      "Destroy all creatures with power 2 or less. Heal all damage from remaining creatures. Gain 10 life."
    ],
    "keywords": [
      "Heal",
      "Disease",
      "Transform"
    ],
    "powerScore": 76
  },
  {
    "id": "SKILL_INVOCATION_AFRICAN_AFR_012",
    "name": "Anansi",
    "engine": "invocation",
    "category": "African Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Create three 2/2 Spider tokens with Reach. Draw 3 cards. You may play an additional land this turn.",
    "effects": [
      "Create three 2/2 Spider tokens with Reach. Draw 3 cards. You may play an additional land this turn."
    ],
    "keywords": [
      "Spider",
      "Story",
      "Trick"
    ],
    "powerScore": 78
  },
  {
    "id": "SKILL_INVOCATION_AFRICAN_AFR_013",
    "name": "Mami Wata",
    "engine": "invocation",
    "category": "African Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Create five Treasure tokens. Draw cards equal to treasures you control. Gain 5 life.",
    "effects": [
      "Create five Treasure tokens. Draw cards equal to treasures you control. Gain 5 life."
    ],
    "keywords": [
      "Water",
      "Beauty",
      "Wealth"
    ],
    "powerScore": 80
  },
  {
    "id": "SKILL_INVOCATION_AFRICAN_AFR_014",
    "name": "Chukwu",
    "engine": "invocation",
    "category": "African Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Exile all nonland permanents, then return all your permanents from exile. Draw 5 cards. Gain 20 life.",
    "effects": [
      "Exile all nonland permanents, then return all your permanents from exile. Draw 5 cards. Gain 20 life."
    ],
    "keywords": [
      "Supreme",
      "Chi",
      "Creator"
    ],
    "powerScore": 82
  },
  {
    "id": "SKILL_INVOCATION_AFRICAN_AFR_015",
    "name": "Ogun",
    "engine": "invocation",
    "category": "African Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Destroy target creature with flying or power 4+. Create two 3/3 Hunter tokens. Draw a card.",
    "effects": [
      "Destroy target creature with flying or power 4+. Create two 3/3 Hunter tokens. Draw a card."
    ],
    "keywords": [
      "Hunt",
      "War",
      "Iron"
    ],
    "powerScore": 84
  },
  {
    "id": "SKILL_INVOCATION_AFRICAN_AFR_016",
    "name": "Nyame",
    "engine": "invocation",
    "category": "African Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "You become the Monarch. All your creatures gain Flying. Deal 5 damage to each opponent. Draw 3 cards.",
    "effects": [
      "You become the Monarch. All your creatures gain Flying. Deal 5 damage to each opponent. Draw 3 cards."
    ],
    "keywords": [
      "Sky",
      "Father",
      "Supreme"
    ],
    "powerScore": 86
  },
  {
    "id": "SKILL_INVOCATION_AFRICAN_AFR_017",
    "name": "Asase Ya",
    "engine": "invocation",
    "category": "African Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Search library for up to four lands and put them onto battlefield. Create four Food tokens. Gain 10 life.",
    "effects": [
      "Search library for up to four lands and put them onto battlefield. Create four Food tokens. Gain 10 life."
    ],
    "keywords": [
      "Earth",
      "Fertility",
      "Mother"
    ],
    "powerScore": 88
  },
  {
    "id": "SKILL_INVOCATION_AFRICAN_AFR_018",
    "name": "Legba",
    "engine": "invocation",
    "category": "African Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Draw 3 cards. You may cast spells from your hand without paying their mana costs until end of turn (max 3).",
    "effects": [
      "Draw 3 cards. You may cast spells from your hand without paying their mana costs until end of turn (max 3)."
    ],
    "keywords": [
      "Speak",
      "Messenger",
      "Gate"
    ],
    "powerScore": 90
  },
  {
    "id": "SKILL_INVOCATION_AFRICAN_AFR_019",
    "name": "Nana Buluku",
    "engine": "invocation",
    "category": "African Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Create the universe anew: Reset all graveyards, exile zones, and hands. Each player draws 7 cards. Gain 30 life.",
    "effects": [
      "Create the universe anew: Reset all graveyards, exile zones, and hands. Each player draws 7 cards. Gain 30 life."
    ],
    "keywords": [
      "Ancient",
      "Creator",
      "Primordial"
    ],
    "powerScore": 92
  },
  {
    "id": "SKILL_INVOCATION_AFRICAN_AFR_020",
    "name": "Mawu-Lisa",
    "engine": "invocation",
    "category": "African Pantheon",
    "tier": 3,
    "cost": {
      "kp": 1
    },
    "cooldown": 7,
    "unlocked": true,
    "description": "Deal 5 damage to each creature. Heal 5 damage to each player. Draw 3 cards. Create three 3/3 tokens.",
    "effects": [
      "Deal 5 damage to each creature. Heal 5 damage to each player. Draw 3 cards. Create three 3/3 tokens."
    ],
    "keywords": [
      "Dual",
      "Balance",
      "Eclipse"
    ],
    "powerScore": 74
  }
];

// Tier display names
const TIER_NAMES = {
    0: "0",
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V"
};
