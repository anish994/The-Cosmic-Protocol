# 🎯 SKILL SYSTEM MASTER ARCHITECTURE
## Complete System Design & Structure

**Version:** 1.0 - Foundation Complete  
**Status:** Ready for review & refinement before implementation  
**Purpose:** Single source of truth for entire skill ecosystem

---

## 📊 TABLE OF CONTENTS

1. [System Overview](#system-overview)
2. [Skill Data Structure](#skill-data-structure)
3. [The 9 Engine System](#the-9-engine-system)
4. [Skill Properties & Mechanics](#skill-properties--mechanics)
5. [Tiering & Balance System](#tiering--balance-system)
6. [Resource Economy](#resource-economy)
7. [Keyword System](#keyword-system)
8. [Jyotish Integration](#jyotish-integration)
9. [Combo Brain Connection](#combo-brain-connection)
10. [Fusion System Integration](#fusion-system-integration)
11. [Unlocking & Progression](#unlocking--progression)
12. [Card Building Integration](#card-building-integration)
13. [Implementation Roadmap](#implementation-roadmap)

---

## 🌟 SYSTEM OVERVIEW

### **What is a Skill?**

A **skill** (also called **glyph** or **power**) is the fundamental unit of gameplay. Skills are:
- **Actions** players can take in battle
- **Modular building blocks** for card creation
- **Combinable elements** for fusion system
- **Strategic choices** that define playstyle

### **The Complete Ecosystem:**

```
965 BASE SKILLS (Blueprinted)
    ↓
UNLOCKED through gameplay, achievements, discovery
    ↓
EQUIPPED to 12-slot cards (Sanctum Builder)
    ↓
USED in combat to execute strategies
    ↓
FUSED together (2-8 skills → 1 new skill)
    ↓
INFINITE FUSED SKILLS created by players
    ↓
OM: ETERNAL BRAHMAN (ultimate fusion)
```

### **Current State:**

```javascript
{
    baseSkillsBlueprinted: 965,
    fullyImplemented: 77, // In workshop/data/engines
    
    breakdown: {
        coreEngines: 700,     // 7 engines × 100 skills each
        invocationPartial: 265, // 79 angels + 86 deities + 100 core
        jyotishMetaSystem: 1   // Not skills, but amplifies all skills
    },
    
    targetAfterExpansion: 1337, // +372 from Invocation expansion
    fusedSkills: "INFINITE"     // Player-created content
}
```

---

## 📦 SKILL DATA STRUCTURE

### **Core Skill Object:**

```javascript
{
    // IDENTITY
    id: "SKILL_FOUNDATIONAL_001",
    name: "Shield Projection",
    description: "Project a defensive barrier around target ally",
    
    // CLASSIFICATION
    engine: "Foundational",           // Which of 9 engines
    tier: 1,                          // 0-4 power level
    category: "defensive",            // offensive/defensive/utility/hybrid
    
    // MECHANICS
    keywords: ["[Shield]", "[Structure]", "[Protection]"],
    effect: {
        type: "buff",
        target: "ally",
        value: 20,                     // 20 shield points
        duration: 3,                   // 3 turns
        conditions: null               // Optional unlock conditions
    },
    
    // COSTS
    kpCost: 2,                        // Knowledge Points to activate
    secondaryResource: {
        type: "Bandwidth",            // Engine-specific resource
        cost: 10                      // Amount consumed
    },
    cooldown: 2,                      // Turns before reusable
    
    // JYOTISH PROPERTIES
    jyotish: {
        planets: ["Moon", "Saturn"],  // Aligned celestial bodies
        houses: [4, 6],               // Favorable astrological houses
        nakshatra: "Pushya",          // Birth star alignment
        elements: ["Water"],          // Elemental affinity
        gunas: ["Sattvic"]            // Quality classification
    },
    
    // COMBO BRAIN INTEGRATION
    tags: {
        comboTier: "B",               // E/D/C/B/A/S/S+/SSS
        chainPosition: ["opener", "finisher"], // Where in combo chains
        synergiesWith: ["[Heal]", "[Sanctify]"], // Auto-detected combos
        crossEngine: ["Therapeutic", "Consciousness"] // Multi-engine potential
    },
    
    // UNLOCK & PROGRESSION
    unlockRequirements: {
        level: 5,                     // Minimum player level
        OR: [
            { achievement: "Win 10 matches" },
            { fusionDiscovery: true }
        ]
    },
    unlocked: false,                  // Player-specific state
    timesUsed: 0,                     // Usage tracking
    
    // FUSION PROPERTIES (if fused skill)
    isFused: false,
    fusionDepth: 0,                   // 0 = base skill
    fusionIngredients: [],            // IDs of skills used to create this
    fusionRecipeID: null,
    discoveredBy: null,               // First player to discover
    
    // METADATA
    version: "4.0",
    implementationStatus: "blueprinted", // blueprinted/implemented/tested
    balanceNotes: "Adjusted shield value from 25→20 in v4.0"
}
```

### **Simplified Skill Object (Minimum Required):**

```javascript
{
    id: "SKILL_FOUNDATIONAL_001",
    name: "Shield Projection",
    engine: "Foundational",
    tier: 1,
    kpCost: 2,
    keywords: ["[Shield]", "[Structure]"],
    effect: "Grant 20 shields to ally for 3 turns"
}
```

---

## 🎮 THE 9 ENGINE SYSTEM

### **Architecture:**

```
8 PLAYABLE ENGINES (Create skills for combat)
    ↓
FOUNDATIONAL      - Infrastructure & support
CONSCIOUSNESS     - States & mental buffs
TANTRA            - Damage & offense
SINGULARITY       - Reality-breaking ramp
DIVINATION        - Prediction & intel
CHARACTER ANALYSIS - Enemy reading
THERAPEUTIC       - Healing & restoration
INVOCATION        - Summon entities

    +
    
JYOTISH ENGINE (Meta-layer, amplifies all others via cosmic timing)
```

### **1. FOUNDATIONAL ENGINE**

**Philosophy:** "Before moves, there is design"

```javascript
{
    name: "Foundational",
    role: "Support/Ramp/Infrastructure",
    playerFantasy: "The Architect - Build persistent structures",
    
    resources: {
        primary: "Bandwidth",      // 0-100, enables multi-target
        secondary: "Stability %"    // Structure uptime
    },
    
    coreKeywords: [
        "[Structure]",  // Deploy persistent zones
        "[Support]",    // Buff allies
        "[Anchor]",     // Permanent markers
        "[Refresh]",    // Reduce cooldowns
        "[Reduce]"      // Lower costs
    ],
    
    playstyle: "Build resource engines, enable combo chains through [Refresh]",
    winCondition: "Outlast and enable Trinity engines to execute",
    
    skillCount: {
        blueprinted: 100,
        implemented: ~15
    },
    
    jyotishAffinity: {
        bestPlanets: ["Jupiter", "Saturn", "Mercury"],
        bestHouses: [2, 4, 10],
        worstPlanets: ["Mars", "Rahu"]
    }
}
```

### **2. CONSCIOUSNESS ENGINE**

**Philosophy:** "Master your mental state, master reality"

```javascript
{
    name: "Consciousness",
    role: "Control/Buff/State Management",
    playerFantasy: "The Mystic - Navigate neural states fluidly",
    
    resources: {
        primary: "Coherence",      // 0-100, mental clarity
        states: "[Neural_State]"   // Exclusive state system
    },
    
    coreKeywords: [
        "[Neural_State]", // Exclusive mental states
        "[Field]",        // AoE buff zones
        "[Amplify]",      // Boost effects
        "[Convert]",      // Transform resources
        "[Clarity]"       // Remove debuffs
    ],
    
    playstyle: "Transition between neural states, amplify ally effects",
    winCondition: "Maintain perfect mental state to unlock peak performance",
    
    skillCount: {
        blueprinted: 100,
        implemented: ~12
    }
}
```

### **3. TANTRA ENGINE**

**Philosophy:** "Desire as fuel, destruction as art"

```javascript
{
    name: "Tantra",
    role: "Aggro/Burst/DoT",
    playerFantasy: "The Destroyer - Unleash overwhelming offense",
    
    resources: {
        primary: "Shakti",         // 0-100, raw power
        secondary: "[Burn] stacks" // Damage over time
    },
    
    coreKeywords: [
        "[Burn]",       // DoT stacks
        "[Detonate]",   // Burst damage
        "[Strike]",     // Direct damage
        "[Hex]",        // Debuffs
        "[Sacrifice]"   // Cost for power
    ],
    
    playstyle: "Stack [Burn], [Detonate] for burst, fast TTK",
    winCondition: "Kill before opponent stabilizes",
    
    skillCount: {
        blueprinted: 100,
        implemented: ~10
    }
}
```

### **4. SINGULARITY ENGINE**

**Philosophy:** "Rewrite reality's rules"

```javascript
{
    name: "Singularity",
    role: "Ramp/Reality-Breaking/Late-game",
    playerFantasy: "The Ascendant - Break game limits",
    
    resources: {
        primary: "Threshold",           // 0-150, pressure gauge
        permanent: "Mastery Levels",    // 0-10, never decreases
        buff: "[Transcendent] stacks"   // Immunity + amplification
    },
    
    coreKeywords: [
        "[Charge]",      // Build Threshold
        "[Threshold X]", // Unlock at breakpoint
        "[Collapse]",    // Consume for massive effect
        "[Banish]",      // Temp removal
        "[Transcendent]" // God-state
    ],
    
    playstyle: "Accrue Threshold → Cross event horizon → Dominate",
    winCondition: "Reach critical mass, flip to unstoppable",
    
    skillCount: {
        blueprinted: 100,
        implemented: ~8
    },
    
    keyBreakpoints: [25, 50, 75, 100, 150]
}
```

### **5. DIVINATION ENGINE**

**Philosophy:** "Know the future, shape the present"

```javascript
{
    name: "Divination",
    role: "Utility/Intel/Prediction",
    playerFantasy: "The Oracle - See enemy actions before they happen",
    
    resources: {
        primary: "Sight",          // 0-100, prediction capacity
        mechanic: "[Forecast]"     // Future sight system
    },
    
    coreKeywords: [
        "[Forecast]",   // Predict future
        "[Reveal]",     // Expose hidden
        "[Avert]",      // Prevent effects
        "[Rewind]",     // Undo actions
        "[Protocol]"    // Pre-set responses
    ],
    
    playstyle: "Predict, counter, prevent enemy strategies",
    winCondition: "Perfect information → perfect plays",
    
    skillCount: {
        blueprinted: 100,
        implemented: ~6
    }
}
```

### **6. CHARACTER ANALYSIS ENGINE**

**Philosophy:** "Read the opponent, exploit weakness"

```javascript
{
    name: "Character Analysis",
    role: "Utility/Intel/Counter",
    playerFantasy: "The Detective - Decode enemy patterns",
    
    resources: {
        primary: "Insight",        // 0-100, enemy knowledge
        mechanic: "[Pattern]"      // Behavior detection
    },
    
    coreKeywords: [
        "[Scan]",       // Analyze enemy
        "[Pattern]",    // Detect habits
        "[Exploit]",    // Punish weaknesses
        "[Counter]",    // Direct responses
        "[Profile]"     // Build enemy model
    ],
    
    playstyle: "Study opponent → Exploit patterns → Counter perfectly",
    winCondition: "Predict and counter every enemy move",
    
    skillCount: {
        blueprinted: 100,
        implemented: ~5
    }
}
```

### **7. THERAPEUTIC ENGINE**

**Philosophy:** "Healing is not passive - it's strategic"

```javascript
{
    name: "Therapeutic",
    role: "Defense/Heal/Sustain",
    playerFantasy: "The Healer - Outlast through perfect restoration",
    
    resources: {
        primary: "Ojas",           // 0-100, vitality
        mechanic: "[Heal-over-time]" // Regen system
    },
    
    coreKeywords: [
        "[Heal]",       // Direct restoration
        "[Regen]",      // Heal over time
        "[Sanctify]",   // Buff + heal
        "[Cleanse]",    // Remove debuffs
        "[Revive]"      // Prevent death
    ],
    
    playstyle: "Sustain through attrition, outlast opponent",
    winCondition: "Never die, grind enemy resources",
    
    skillCount: {
        blueprinted: 100,
        implemented: ~8
    }
}
```

### **8. INVOCATION ENGINE**

**Philosophy:** "Call upon powers beyond mortal reach"

```javascript
{
    name: "Invocation",
    role: "Hybrid/Summon/Entity Control",
    playerFantasy: "The Summoner - Wield divine/demonic forces",
    
    resources: {
        primary: "Mana",           // 0-100, summoning power
        secondary: "Anarchy",      // 0-20, chaos accumulation
        mechanic: "[Invoke]"       // Summon entity
    },
    
    coreKeywords: [
        "[Invoke]",     // Summon entity
        "[Bless]",      // Divine buff (angels)
        "[Hex]",        // Demonic debuff (demons)
        "[Command]",    // Control entity
        "[Sacrifice]"   // Empower entity
    ],
    
    entities: {
        angels: 79,          // Theurgic Host (order)
        demons: 72,          // Ars Goetia (chaos) - PLANNED
        deities: 386         // 11 pantheons - PARTIAL (86), REST PLANNED
    },
    
    playstyle: "Summon entities with unique abilities, balance order/chaos",
    winCondition: "Overwhelming entity advantage OR perfect balance",
    
    skillCount: {
        baseSkills: 100,
        entities: 265 (current) → 537 (after expansion),
        total: 637 (planned)
    },
    
    dualResource: {
        angels: "Cost Mana, reduce Anarchy (atonement)",
        demons: "Cost Mana, add Anarchy (risk/reward)",
        balance: "Equal angels+demons = special bonuses"
    }
}
```

### **9. JYOTISH ENGINE (Meta-System)**

**Philosophy:** "The cosmic clock that governs all"

```javascript
{
    name: "Jyotish",
    type: "META_SYSTEM",
    role: "Timing/Amplification/Personal Identity",
    playerFantasy: "Your birth chart IS your playstyle",
    
    notSkills: true, // Does NOT create combat skills
    
    function: {
        birthChart: "Player's real birth time/place → Permanent chart",
        cosmicWeather: "Current planetary positions affect match",
        skillAmplification: "Same skill = different power per player",
        timingBonus: "Right skill at right cosmic moment = huge bonus"
    },
    
    components: {
        planets: 9,      // Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, Ketu
        houses: 12,      // Life aspects (self, wealth, siblings, home, etc.)
        nakshatras: 27,  // Lunar mansions
        dashas: "Planetary periods (Jupiter = expansion, Saturn = limits)"
    },
    
    integration: "Every skill has Jyotish properties → Amplified by player chart + cosmic weather",
    
    example: {
        skill: "Shield Projection",
        properties: {
            planets: ["Moon", "Saturn"],
            houses: [4, 6]
        },
        
        player1BirthChart: {
            moonStrong: true,
            saturn4thHouse: true,
            result: "Shield Projection 50% more effective for this player"
        },
        
        player2BirthChart: {
            moonWeak: true,
            marsAspects: true,
            result: "Shield Projection 20% less effective for this player"
        },
        
        cosmicWeather: {
            currentDasha: "Jupiter",
            result: "All Jupiterian skills +15% this match"
        }
    }
}
```

---

## 🎯 SKILL PROPERTIES & MECHANICS

### **Tier System (0-4):**

```javascript
TIERS = {
    tier0: {
        name: "Basic",
        kpCost: 1,
        power: "Foundational effects",
        availability: "Tutorial + early levels",
        examples: ["Basic Shield", "Light Strike", "Simple Heal"]
    },
    
    tier1: {
        name: "Common",
        kpCost: 2,
        power: "Standard effects with conditions",
        availability: "Levels 1-30",
        examples: ["Shield Projection", "Burn Cascade", "Forecast"]
    },
    
    tier2: {
        name: "Rare",
        kpCost: 3,
        power: "Strong effects with combos",
        availability: "Levels 30-60",
        examples: ["Trinity Foundation", "Threshold Surge", "Neural Cascade"]
    },
    
    tier3: {
        name: "Epic",
        kpCost: 4,
        power: "Game-changing effects",
        availability: "Levels 60-90",
        examples: ["Collapse Trigger", "Perfect Prediction", "Divine Intervention"]
    },
    
    tier4: {
        name: "Ultimate",
        kpCost: 5,
        power: "Reality-bending power",
        availability: "Level 90+, rare achievements",
        examples: ["Godhood", "Singularity", "Omniscience"]
    },
    
    tier5: {
        name: "Transcendent",
        kpCost: 6,
        power: "Beyond normal rules",
        availability: "OM fusion only",
        examples: ["ॐ OM: Eternal Brahman", "Unity Recognition"]
    }
}
```

### **Category System:**

```javascript
CATEGORIES = {
    offensive: {
        purpose: "Deal damage, remove threats",
        hpImpact: "-10 per offensive glyph in card",
        keywords: ["[Strike]", "[Burn]", "[Detonate]", "[Damage]"],
        engines: ["Tantra", "Singularity"]
    },
    
    defensive: {
        purpose: "Survive, protect, sustain",
        hpImpact: "+10 per defensive glyph in card",
        keywords: ["[Shield]", "[Heal]", "[Regen]", "[Protection]"],
        engines: ["Foundational", "Therapeutic", "Consciousness"]
    },
    
    utility: {
        purpose: "Control, intel, support",
        hpImpact: "+5 per utility glyph in card",
        keywords: ["[Reveal]", "[Forecast]", "[Support]", "[Convert]"],
        engines: ["Divination", "Character Analysis", "Foundational"]
    },
    
    hybrid: {
        purpose: "Multi-role flexibility",
        hpImpact: "Varies based on keyword mix",
        keywords: "Mix of 2+ categories",
        engines: ["Invocation", "Consciousness", "Singularity"]
    }
}
```

---

## 💰 RESOURCE ECONOMY

### **Universal Resources (All Players):**

```javascript
UNIVERSAL_RESOURCES = {
    kp: {
        name: "Knowledge Points",
        range: "0-10",
        generation: "+1 per turn (baseline)",
        purpose: "Gate skill activation (Tier 0 = 1 KP, Tier 4 = 5 KP)",
        budgetPerCard: "12-48 KP total (12 glyphs × 1-4 KP each)"
    },
    
    hp: {
        name: "Hit Points / Ojas",
        range: "50-250 (card dependent)",
        calculation: "100 base + (defensive×10) + (utility×5) - (offensive×10)",
        purpose: "Survive until victory",
        modifiers: "Jyotish (1st/6th House bonuses)"
    },
    
    fusionOrbs: {
        name: "Fusion Orbs",
        range: "0-∞ (earned over time)",
        starting: 3,
        generation: "Levels, achievements, dailies",
        purpose: "Commit to skill fusions (preview is free!)"
    }
}
```

### **Engine-Specific Resources:**

```javascript
ENGINE_RESOURCES = {
    foundational: {
        bandwidth: "0-100, multi-target capacity",
        stability: "0-100%, structure uptime"
    },
    consciousness: {
        coherence: "0-100, mental clarity",
        neuralStates: "Exclusive state system"
    },
    tantra: {
        shakti: "0-100, raw power",
        burnStacks: "0-20, damage over time"
    },
    singularity: {
        threshold: "0-150, reality pressure",
        masteryLevels: "0-10, permanent growth",
        transcendentStacks: "0-10, god-state buff"
    },
    divination: {
        sight: "0-100, prediction capacity"
    },
    characterAnalysis: {
        insight: "0-100, enemy knowledge"
    },
    therapeutic: {
        ojas: "0-100, vitality"
    },
    invocation: {
        mana: "0-100, summoning power",
        anarchy: "0-20, chaos risk"
    }
}
```

---

## 🏷️ KEYWORD SYSTEM

### **Purpose:**

Keywords are the **DNA of skills** that enable:
- **Tag Algebra** (Combo Brain auto-detection)
- **Fusion synthesis** (combining skills intelligently)
- **Categorization** (offensive/defensive/utility)
- **Synergy detection** (cross-engine combos)

### **Keyword Categories:**

#### **1. Action Keywords (What the skill DOES):**

```javascript
ACTION_KEYWORDS = {
    damage: ["[Strike]", "[Burn]", "[Detonate]", "[Damage]", "[Burst]"],
    defense: ["[Shield]", "[Heal]", "[Regen]", "[Protection]", "[Sanctify]"],
    support: ["[Bless]", "[Support]", "[Amplify]", "[Refresh]", "[Reduce]"],
    control: ["[Banish]", "[Hex]", "[Stun]", "[Delay]", "[Lock]"],
    intel: ["[Reveal]", "[Forecast]", "[Scan]", "[Pattern]", "[Predict]"],
    manipulation: ["[Convert]", "[Duplicate]", "[Rewind]", "[Transform]"],
    structure: ["[Structure]", "[Anchor]", "[Field]", "[Zone]"]
}
```

#### **2. State Keywords (Conditions/Statuses):**

```javascript
STATE_KEYWORDS = {
    buffs: ["[Transcendent]", "[Clarity]", "[Amplified]", "[Blessed]", "[Protected]"],
    debuffs: ["[Burned]", "[Hexed]", "[Weakened]", "[Cursed]", "[Banished]"],
    special: ["[Neural_State]", "[Godhood]", "[Singularity]", "[Reality Warped]"]
}
```

#### **3. Threshold Keywords (Conditional triggers):**

```javascript
THRESHOLD_KEYWORDS = {
    singularity: ["[Threshold 25]", "[Threshold 50]", "[Threshold 75]", "[Threshold 100]"],
    combo: ["[Chain]", "[Sequence]", "[Trigger]", "[Prerequisite]"]
}
```

#### **4. Target Keywords:**

```javascript
TARGET_KEYWORDS = ["[Self]", "[Ally]", "[Enemy]", "[All_Allies]", "[All_Enemies]", "[AoE]"]
```

### **Keyword Rules:**

1. **Multiple keywords per skill** (2-5 typical)
2. **Keywords determine category** (offensive/defensive/utility)
3. **Keywords trigger combos** via Tag Algebra
4. **Keywords synthesize in fusion** (inherited + combined)
5. **Keywords formatted** as `[Keyword]` for parsing

---

## 🌌 JYOTISH INTEGRATION

### **Every Skill Has Cosmic DNA:**

```javascript
SKILL_JYOTISH_TEMPLATE = {
    planets: ["Moon", "Saturn"],      // 1-3 planets per skill
    houses: [4, 6],                   // 1-2 houses
    nakshatra: "Pushya",              // 1 primary nakshatra
    elements: ["Water"],              // 1-2 elements (Fire/Water/Earth/Air/Ether)
    gunas: ["Sattvic"]                // 1 primary guna (Sattvic/Rajasic/Tamasic)
}
```

### **Player Birth Chart = Permanent Modifiers:**

```javascript
BIRTH_CHART_IMPACT = {
    strongPlanets: "+20-50% effectiveness for aligned skills",
    weakPlanets: "-10-30% effectiveness for misaligned skills",
    houses: "Boost skills in favorable houses",
    ascendant: "Determines starting specialization bonus",
    
    example: {
        playerBorn: "Moon in 4th House, Strong Jupiter",
        result: {
            moonSkills: "+30% effectiveness (Foundational, Therapeutic)",
            jupiterSkills: "+20% effectiveness (Invocation, Consciousness)",
            fourthHouseSkills: "+15% (home/protection related)"
        }
    }
}
```

### **Cosmic Weather = Match Modifiers:**

```javascript
COSMIC_WEATHER = {
    currentDasha: "Jupiter",          // Changes periodically
    exaltedPlanets: ["Venus", "Moon"], // Real-time astronomy
    nakshatra: "Revati",              // Current lunar mansion
    eclipses: false,                  // Special events
    
    effect: {
        jupiterDasha: "+15% all Jupiterian skills this match",
        venusExalted: "+10% healing/support skills",
        revatiNakshatra: "Completion skills favored"
    }
}
```

### **Why This Matters:**

- **Unique playstyles:** Same skills play differently for each player
- **Anti-meta:** No single "best build" (depends on birth chart)
- **Depth:** Rewards understanding of cosmic timing
- **OM requirement:** Part of meta-restrictions (cosmic alignment needed)

---

## 🧠 COMBO BRAIN CONNECTION

### **How Skills Connect to Combo Detection:**

```javascript
SKILL_TO_COMBO_FLOW = {
    step1: {
        skill: "Shield Projection",
        keywords: ["[Shield]", "[Structure]"],
        tier: 1,
        engine: "Foundational"
    },
    
    step2: {
        comboBrain: "Tag Algebra scans for [Shield] + [Heal] combo",
        detection: "Found! Shield + Heal-over-time nearby",
        comboTier: "B-tier (Sanctuary Haven pattern)"
    },
    
    step3: {
        bonus: "+30% healing inside [Structure]",
        ui: "Combo indicator lights up in battle",
        playerExperience: "Discovers combo organically through play"
    }
}
```

### **Combo Types Auto-Detected:**

```javascript
COMBO_TYPES = {
    twoSkillCombos: "Simple synergies (Burn + Detonate)",
    chainCombos: "A→B→C conditional sequences",
    crossEngine: "Multi-engine synergies (Foundational + Therapeutic)",
    yogaCombos: "Legendary 5-skill cosmic patterns",
    fusionCombos: "Detected during skill fusion preview"
}
```

### **Skills Feed Combo Brain:**

- Every skill's keywords = potential combo ingredients
- Combo Brain scans 1 BILLION+ possible chains
- Players discover combos naturally through experimentation
- Fusion system uses combo detection to suggest powerful combinations

---

## 🧪 FUSION SYSTEM INTEGRATION

### **Skills Are Fusion Ingredients:**

```javascript
FUSION_RELATIONSHIP = {
    baseSkills: {
        fusable: true,
        nonDestructive: true, // Keep original after fusion
        anyCombo: true        // Any 2-8 skills can fuse
    },
    
    fusedSkills: {
        canBeFusedAgain: true, // Infinite recursion!
        fusionDepth: "Tracks how deep fusion tree goes",
        terminalNode: "OM skills CANNOT be fused further"
    },
    
    fusionAlgorithm: {
        input: "2-8 skills (base OR fused)",
        process: {
            extractKeywords: "All keywords from inputs",
            synthesizeNew: "Dominant keywords + Tag Algebra combos",
            calculateTier: "Based on input tiers + depth",
            calculateKP: "60% of total input KP",
            assignJyotish: "Inherited + synthesized",
            detectPatterns: "Yogas, Pantheon Bridges, OM convergence"
        },
        output: "1 new fused skill with synthesized properties"
    }
}
```

### **Fusion Enhances Skills:**

- Fused skills = more powerful than components
- Deep fusions (depth 3+) = epic tier effects
- Fusion unlocks new skills through discovery bonuses
- OM = ultimate fusion (depth 6+, all meta-restrictions met)

---

## 🔓 UNLOCKING & PROGRESSION

### **Multi-Path Unlock System:**

```javascript
UNLOCK_METHODS = {
    starting: {
        amount: 20-30,
        selection: "All 9 engines represented + choose 1 specialization"
    },
    
    levelProgression: {
        rate: "2-3 skills per 5 levels",
        total: "~100-150 skills from leveling alone"
    },
    
    achievements: {
        categories: ["combat", "engines", "exploration", "fusion", "discovery", "mastery"],
        total: "~400-500 skills from achievements"
    },
    
    discovery: {
        matchRewards: "20% chance per win",
        cosmicEvents: "Jyotish-triggered unlocks",
        comboDiscovery: "Execute combo → 30% unlock related skill",
        fusionBonus: "Deep fusions unlock skills from ingredient engines",
        total: "~300-400 skills"
    },
    
    story: {
        campaigns: "Optional ~100-200 skills",
        bosses: "Unlock boss signature skills"
    }
}
```

### **Progression Curve:**

```
Level 1-10:   50 skills (5%)
Level 10-30:  150 skills (15%)
Level 30-60:  400 skills (40%)
Level 60-100: 900+ skills (90%+)
Level 100+:   Remaining skills + infinite fusions → OM
```

### **Fusion Orb Economy:**

```javascript
FUSION_ORBS = {
    purpose: "Commit to fusion (preview is FREE)",
    starting: 3,
    earning: {
        levelUp: "1 Orb per 5 levels",
        achievements: "1-5 Orbs per fusion achievement",
        dailyLogin: "1 Orb per day",
        weeklyQuest: "3 Orbs per week",
        deepFusions: "Depth 3+ refunds 1 Orb"
    },
    costs: {
        depth1: 1,
        depth2: 1,
        depth3: 2,
        depth4: 3,
        depth5Plus: 5,
        omFusion: 0  // FREE (you earned it!)
    }
}
```

---

## 🏗️ CARD BUILDING INTEGRATION

### **Sanctum Builder (12-Slot System):**

```javascript
CARD_STRUCTURE = {
    slots: 12,                        // Based on 12 astrological houses
    skillSelection: "Choose from unlocked skills",
    kpBudget: "12-48 total (1-4 KP per skill average)",
    
    calculation: {
        hp: "100 base + (defensive×10) + (utility×5) - (offensive×10)",
        attack: "Based on offensive glyphs + tiers",
        defense: "Based on defensive glyphs + shields",
        speed: "Based on Jyotish + glyph weight"
    },
    
    validation: {
        mustHave12Glyphs: true,
        kpWithinBudget: true,
        noDuplicates: false  // Can use same skill multiple times? TBD
    }
}
```

### **CardCalculator Integration:**

The existing `CardCalculator.js` already:
- ✅ Categorizes glyphs (offensive/defensive/utility)
- ✅ Calculates HP based on formula
- ✅ Computes Attack/Defense/Speed stats
- ✅ Validates KP budget (12-48 range)
- ✅ Detects synergies (combos between glyphs)
- ✅ Identifies yogas (beneficial patterns)
- ✅ Flags doshas (negative patterns)
- ✅ Applies Jyotish modifiers

**Fusion Integration Needed:**
- [ ] Recognize fused skills (isFused flag)
- [ ] Display fusion depth indicator
- [ ] Show fusion tree on hover
- [ ] Calculate fusion skill properties

---

## 🚀 IMPLEMENTATION ROADMAP

### **Phase 1: Foundation (Current)**
- [x] Define complete skill data structure
- [x] Map all 9 engines with philosophies
- [x] Document tier/category/keyword systems
- [x] Design resource economy
- [x] Plan Jyotish integration
- [ ] **Review & refine this document**

### **Phase 2: Data Creation**
- [ ] Finalize 100-skill sets for each engine
- [ ] Create skill JSON schema
- [ ] Generate Invocation expansion (72 demons + 300 deities)
- [ ] Assign Jyotish properties to all skills
- [ ] Tag all skills for Combo Brain

### **Phase 3: System Implementation**
- [ ] Build skill database (JSON/SQLite)
- [ ] Implement CardCalculator fusion extensions
- [ ] Create FusionCalculator.js (keyword synthesis algorithm)
- [ ] Build skill library UI with filters/search
- [ ] Implement unlock system (achievements → skills)

### **Phase 4: Fusion System**
- [ ] Build Fusion Lab UI (2-8 slot interface)
- [ ] Implement live preview system (partial reveals)
- [ ] Create fusion recipe library
- [ ] Build fusion tree visualizer
- [ ] Implement Fusion Orb economy

### **Phase 5: Integration & Polish**
- [ ] Connect Combo Brain to skill keywords
- [ ] Implement Jyotish modifiers in battle
- [ ] Build unlock progression tracking
- [ ] Create achievement → skill unlock mappings
- [ ] Add OM detection (meta-restrictions)

### **Phase 6: Testing & Balance**
- [ ] Playtest 100+ card combinations
- [ ] Balance tier distributions
- [ ] Tune Fusion Orb economy
- [ ] Test OM requirements (ensure ~0.1% achieve)
- [ ] Community alpha testing

---

## 📝 KEY DECISIONS NEEDED

### **Before Implementation:**

1. **Skill ID Format:**
   - Current: `SKILL_ENGINE_001`
   - Fused: `FUSION_ABC123`?
   - OR: `SKILL_FUSED_001`?

2. **Duplicate Skills on Cards:**
   - Can player equip same skill 2+ times?
   - Pros: Flexibility
   - Cons: May reduce strategic diversity

3. **Fusion Naming:**
   - Auto-generate names?
   - Player chooses names?
   - Hybrid (suggest + allow custom)?

4. **Resource Naming:**
   - "Fusion Orbs" final?
   - Alternatives: Seeds, Cores, Crystals, Essence?

5. **Skill Implementation Priority:**
   - Which engine to fully implement first?
   - Recommendation: Foundational (most universal)

6. **Jyotish Complexity:**
   - How deep to go with astrological calculations?
   - Simple (planet/house) or complex (aspects/dashas)?

---

## ✨ STRENGTHS OF THIS SYSTEM

1. **Modular:** Skills are atomic units that combine infinitely
2. **Scalable:** Can add engines/skills without breaking existing
3. **Unique:** Jyotish ensures no two players play identically
4. **Deep:** Fusion + Combo Brain = emergent complexity
5. **Accessible:** Simple skills + preview system = easy to learn
6. **Infinite:** Player-created fused skills = unlimited content
7. **Philosophical:** OM isn't just power, it's enlightenment metaphor

---

## 🎯 NEXT STEPS

1. **Review this document** - Identify gaps, errors, improvements
2. **Make decisions** on open questions above
3. **Refine skill data structure** based on feedback
4. **Choose first engine** to fully implement (100 skills)
5. **Create skill JSON schema** for database
6. **Generate preview pack** (12 skills per engine for testing)
7. **Build prototype** Fusion Lab UI
8. **Test fusion algorithm** with sample skills

---

**Status:** ✅ COMPLETE SKILL SYSTEM ARCHITECTURE DOCUMENTED  
**Ready for:** Review, refinement, and implementation planning

---

*"Before there were 965 skills, there was this design. Before OM, there was this foundation. The infinite begins with the one."* ✨
