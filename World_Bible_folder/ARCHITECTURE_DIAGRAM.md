# 🏛️ Premium Skill System - Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         UNIFIED GAME SYSTEM                                 │
│                      (all_engines_premium.js)                               │
│  • Single entry point for all 8 engines                                     │
│  • Cross-engine skill search & fusion                                       │
│  • Global save/load                                                         │
└────────────────┬────────────────────────────────────────────────────────────┘
                 │
                 ├─────────────────────────────────────────┐
                 │                                         │
                 ▼                                         ▼
┌────────────────────────────┐              ┌────────────────────────────┐
│  PREMIUM ENGINE WRAPPER    │              │  CONFIGURATION SYSTEM      │
│  (PremiumEngineWrapper)    │              │  (PremiumSystemConfig)     │
│                            │              │                            │
│  Wraps any base engine     │              │  • 500+ parameters         │
│  with premium features     │              │  • 5 gameplay presets      │
│  without breaking API      │              │  • Runtime switching       │
└──────────┬─────────────────┘              └────────────────────────────┘
           │
           │  Orchestrates ↓
           │
     ┌─────┴─────┬──────────┬──────────┬──────────┬──────────┐
     │           │          │          │          │          │
     ▼           ▼          ▼          ▼          ▼          ▼
┌─────────┐ ┌─────────┐ ┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐
│ World   │ │   NPC   │ │Context│ │Modifier│ │ Lore  │ │Evolution│
│ State   │ │ Memory  │ │Analyzer│ │ Engine│ │Generator│ │Tracker│
│ Manager │ │ System  │ │       │ │       │ │       │ │       │
└─────────┘ └─────────┘ └───────┘ └───────┘ └───────┘ └───────┘
     │           │          │          │          │          │
     │           │          │          │          │          │
     └───────────┴──────────┴──────────┴──────────┴──────────┘
                            │
                            │  All feed into ↓
                            │
                 ┌──────────▼──────────┐
                 │ PREMIUM SKILL       │
                 │ ENHANCER            │
                 │ (Master Orchestrator│
                 └──────────┬──────────┘
                            │
                            │  Enhances ↓
                            │
     ┌──────────────────────┴───────────────────────┐
     │                                              │
     ▼                                              ▼
┌────────────────┐                         ┌────────────────┐
│  BASE ENGINES  │                         │  ENHANCED      │
│                │                         │  SKILLS        │
│  • Foundational│  ─────────────→         │                │
│  • Invocation  │   Premium Layer         │  + Context     │
│  • Therapeutic │   Adds Depth            │  + Lore        │
│  • Tantra      │                         │  + NPC Memory  │
│  • Singularity │                         │  + World State │
│  • Divination  │                         │  + Evolution   │
│  • Consciousness│                        │  + Modifiers   │
│  • CharacterAnalysis│                    │                │
└────────────────┘                         └────────────────┘
```

---

## Data Flow: Skill Execution

```
┌────────────────────────────────────────────────────────────────┐
│ 1. PLAYER EXECUTES SKILL                                       │
│    gameSystem.executeSkill('Foundational', 'FOUND_042', ctx)   │
└────────────┬───────────────────────────────────────────────────┘
             │
             ▼
┌────────────────────────────────────────────────────────────────┐
│ 2. PREMIUM WRAPPER INTERCEPTS                                  │
│    • Gets base skill from engine                               │
│    • Enhances with premium systems                             │
└────────────┬───────────────────────────────────────────────────┘
             │
             ├─────────────────────────────────────────┐
             │                                         │
             ▼                                         ▼
┌────────────────────────┐              ┌─────────────────────────┐
│ 3a. CONTEXT ANALYSIS   │              │ 3b. SKILL ENHANCEMENT   │
│                        │              │                         │
│  Context Analyzer:     │              │  Premium Enhancer:      │
│  • Temporal (time)     │              │  • Add lore             │
│  • Spatial (location)  │              │  • Check mastery        │
│  • Environmental       │              │  • Evolution stage      │
│  • Social (witnesses)  │              │  • Memorable moments    │
│  • Metaphysical        │              │                         │
└────────────┬───────────┘              └────────────┬────────────┘
             │                                       │
             └───────────────┬───────────────────────┘
                             ▼
             ┌───────────────────────────────────────┐
             │ 4. MODIFIER CALCULATION               │
             │                                       │
             │  Skill Modifier Engine:               │
             │  • Calculate power multiplier         │
             │  • Calculate crit chance              │
             │  • Calculate unstable chance          │
             │  • Generate synergy bonuses           │
             │                                       │
             │  Base × Time × Location × Weather     │
             │  × Corruption × Mastery = Final Power │
             └───────────┬───────────────────────────┘
                         │
                         ▼
             ┌───────────────────────────────────────┐
             │ 5. BASE ENGINE EXECUTION              │
             │                                       │
             │  Execute skill with enriched context  │
             │  (includes premium modifiers)         │
             └───────────┬───────────────────────────┘
                         │
                         ▼
             ┌───────────────────────────────────────┐
             │ 6. PREMIUM ENHANCEMENT APPLICATION    │
             │                                       │
             │  • Enhance combat effects (crit/etc)  │
             │  • Generate contextual narrative      │
             │  • Create world changes               │
             │  • Generate NPC interactions          │
             │  • Check for special events           │
             └───────────┬───────────────────────────┘
                         │
                         ▼
     ┌───────────────────┴────────────────────┐
     │                                        │
     ▼                                        ▼
┌─────────────────┐                  ┌────────────────────┐
│ 7a. UPDATE      │                  │ 7b. RETURN RESULT  │
│     SYSTEMS     │                  │                    │
│                 │                  │  • Combat effects  │
│ • World State   │                  │  • Narrative       │
│ • NPC Memory    │                  │  • World changes   │
│ • Evolution     │                  │  • NPC interactions│
│ • Landmarks     │                  │  • Special events  │
└─────────────────┘                  │  • Modifiers       │
                                     │  • Lore snippets   │
                                     └────────────────────┘
```

---

## System Interaction Map

```
                    ┌──────────────────┐
                    │   GAME EVENT     │
                    │  (skill executed)│
                    └────────┬─────────┘
                             │
                   ┌─────────▼─────────┐
                   │ CONTEXT ANALYZER  │
                   └─────────┬─────────┘
                             │
                   ┌─────────▼─────────┐
                   │ What time is it?  │
                   │ ├─ MIDNIGHT ─────►│ +50% void power
                   │ ├─ DAWN ─────────►│ +30% light power
                   │ └─ NOON ─────────►│ +25% fire power
                   └─────────┬─────────┘
                             │
                   ┌─────────▼─────────┐
                   │ Where are we?     │
                   │ ├─ SACRED ───────►│ +40% divine power
                   │ ├─ RUINS ────────►│ +20% foundational
                   │ └─ VOID_ZONE ────►│ +50% void power
                   └─────────┬─────────┘
                             │
                   ┌─────────▼─────────┐
                   │ What's the        │
                   │ corruption?       │
                   │ ├─ < 20 ─────────►│ Stable
                   │ ├─ 20-60 ────────►│ Moderate risk
                   │ └─ > 60 ─────────►│ High unstable %
                   └─────────┬─────────┘
                             │
              ┌──────────────┴──────────────┐
              │                             │
              ▼                             ▼
     ┌────────────────┐           ┌─────────────────┐
     │ MODIFIER       │           │ SPECIAL CHECKS  │
     │ ENGINE         │           │                 │
     │                │           │ Crit chance?    │
     │ Multiply all   │           │ Unstable?       │
     │ bonuses        │           │ Synergies?      │
     │                │           │                 │
     │ Final Power    │           └────────┬────────┘
     └────────┬───────┘                    │
              │                            │
              └──────────┬─────────────────┘
                         │
                         ▼
              ┌──────────────────────┐
              │ SKILL EXECUTES WITH  │
              │ ENHANCED POWER       │
              └──────────┬───────────┘
                         │
         ┌───────────────┼───────────────┐
         │               │               │
         ▼               ▼               ▼
  ┌───────────┐   ┌───────────┐   ┌──────────┐
  │   WORLD   │   │    NPC    │   │ EVOLUTION│
  │   STATE   │   │  MEMORY   │   │ TRACKER  │
  │           │   │           │   │          │
  │ Record    │   │ Record    │   │ Record   │
  │ permanent │   │ in memory │   │ usage    │
  │ changes   │   │           │   │          │
  │           │   │ Generate  │   │ Check    │
  │ Check for │   │ dialogue  │   │ level up │
  │ landmarks │   │           │   │          │
  │           │   │ Update    │   │ Check    │
  │           │   │ relation  │   │ evolution│
  └───────────┘   └───────────┘   └──────────┘
```

---

## Save/Load Architecture

```
┌────────────────────────────────────────────────────┐
│           UNIFIED GAME STATE                       │
├────────────────────────────────────────────────────┤
│                                                    │
│  ┌──────────────────────────────────────────┐     │
│  │  Engine: Foundational                    │     │
│  │  ├─ worldState                           │     │
│  │  │  ├─ permanentChanges: [...]           │     │
│  │  │  ├─ landmarks: [...]                  │     │
│  │  │  └─ locationStates: {...}             │     │
│  │  ├─ npcMemories                          │     │
│  │  │  ├─ marcus_veil: [100 memories]       │     │
│  │  │  └─ elena_construct: [100 memories]   │     │
│  │  └─ skillEvolution                       │     │
│  │     ├─ FOUND_001: {mastery: 45, ...}     │     │
│  │     ├─ FOUND_042: {mastery: 78, ...}     │     │
│  │     └─ ...                               │     │
│  └──────────────────────────────────────────┘     │
│                                                    │
│  ┌──────────────────────────────────────────┐     │
│  │  Engine: Invocation                      │     │
│  │  ├─ worldState: {...}                    │     │
│  │  ├─ npcMemories: {...}                   │     │
│  │  └─ skillEvolution: {...}                │     │
│  └──────────────────────────────────────────┘     │
│                                                    │
│  ... (6 more engines)                             │
│                                                    │
└────────────┬───────────────────────────────────────┘
             │
             │  JSON.stringify() ↓
             │
             ▼
┌────────────────────────────────────────────────────┐
│         localStorage / Database                    │
│                                                    │
│  Key: 'gameState'                                  │
│  Value: "{\"engines\":{\"Foundational\":{...}}}"   │
└────────────────────────────────────────────────────┘
             │
             │  On Load ↓
             │
             ▼
┌────────────────────────────────────────────────────┐
│  gameSystem.importGameState(savedState)            │
│                                                    │
│  • Restores all world changes                      │
│  • Restores all NPC memories                       │
│  • Restores all skill mastery levels               │
│  • Restores all landmarks                          │
│                                                    │
│  Player sees exact same world state!               │
└────────────────────────────────────────────────────┘
```

---

## Fusion System Flow

```
┌──────────────────────────────────────────────────────┐
│  Player wants to fuse:                               │
│  • Foundational Skill: "Stone Shaping"               │
│  • Invocation Skill: "Invoke Ganesh"                 │
└──────────────┬───────────────────────────────────────┘
               │
               ▼
┌──────────────────────────────────────────────────────┐
│  gameSystem.calculateFusion(...)                     │
│                                                      │
│  1. Get both skills                                  │
│  2. Calculate synergy                                │
└──────────────┬───────────────────────────────────────┘
               │
               ▼
┌──────────────────────────────────────────────────────┐
│  SYNERGY CALCULATION                                 │
│                                                      │
│  Base: 50%                                           │
│  + Same tier: +10%                                   │
│  + Compatible engines: +20%                          │
│  + Context (sacred location): +10%                   │
│  + Player mastery: +5%                               │
│  ────────────────────                                │
│  Total Synergy: 95% (LEGENDARY)                      │
└──────────────┬───────────────────────────────────────┘
               │
               ▼
┌──────────────────────────────────────────────────────┐
│  LORE GENERATION                                     │
│                                                      │
│  loreGenerator.generateFusionDiscovery(...)          │
│                                                      │
│  "When the Architect's art meets Ganesh's blessing,  │
│   you don't build temples - you pray them into       │
│   existence. The first Undermight builders knew      │
│   this secret: foundation is just frozen prayer."    │
└──────────────┬───────────────────────────────────────┘
               │
               ▼
┌──────────────────────────────────────────────────────┐
│  FUSED SKILL CREATED                                 │
│                                                      │
│  ID: FUSION_FOUND_015_INV_001                        │
│  Name: "Prayed Foundation"                           │
│  Tier: 3 (max of both)                               │
│  Cost: 40 BW, 30 KP (sum of both)                    │
│  Synergy: 95%                                        │
│  Power Bonus: 1.5x (high synergy bonus)              │
│  Unique Effect: "Structures gain divine blessing"    │
│  Lore: [Fusion discovery narrative]                  │
└──────────────┬───────────────────────────────────────┘
               │
               ▼
┌──────────────────────────────────────────────────────┐
│  Player executes fused skill...                      │
│  • Gets ALL premium features                         │
│  • Context modifiers apply                           │
│  • NPCs react to fusion                              │
│  • World changes are unique                          │
│  • Evolution tracked separately                      │
└──────────────────────────────────────────────────────┘
```

---

## Configuration Preset System

```
┌─────────────────────────────────────────────────────┐
│  PREMIUM_CONFIG (Default)                           │
│  • baseCritChance: 0.05                             │
│  • baseUnstableChance: 0.02                         │
│  • masteryGainRate: 2.0                             │
└──────────────┬──────────────────────────────────────┘
               │
               │  Player selects preset ↓
               │
     ┌─────────┴──────────┬──────────┬──────────┐
     │                    │          │          │
     ▼                    ▼          ▼          ▼
┌─────────┐         ┌─────────┐ ┌────────┐ ┌───────┐
│HARDCORE │         │  STORY  │ │SPEEDRUN│ │ CHAOS │
│         │         │         │ │        │ │       │
│Crit: 0.1│         │Unstable:│ │Mastery:│ │Unstable│
│Unstable:│         │disabled │ │gain 5x │ │: 0.30 │
│  0.10   │         │         │ │        │ │       │
└─────────┘         └─────────┘ └────────┘ └───────┘
     │                    │          │          │
     └────────────────────┴──────────┴──────────┘
                          │
                          ▼
          ┌───────────────────────────────┐
          │ ConfigManager.applyPreset()   │
          │                               │
          │ Merges preset overrides into  │
          │ base config                   │
          └───────────┬───────────────────┘
                      │
                      ▼
          ┌───────────────────────────────┐
          │ All systems use new config    │
          │ • Modifiers recalculated      │
          │ • Chances updated             │
          │ • Game feel changes instantly │
          └───────────────────────────────┘
```

---

## The "Illusion of Depth" Architecture

```
┌─────────────────────────────────────────────────────┐
│            WHAT PLAYER EXPERIENCES                  │
│                                                     │
│  "This game has infinite possibilities! Every      │
│   skill use is unique! The world remembers         │
│   everything! NPCs are so smart!"                  │
└──────────────┬──────────────────────────────────────┘
               │
               │  Actually powered by ↓
               │
┌──────────────▼──────────────────────────────────────┐
│            WHAT'S REALLY HAPPENING                  │
│                                                     │
│  ┌───────────────────────────────────────────┐     │
│  │ "Infinite possibilities"                  │     │
│  │ = 50 modifiers × context combinations     │     │
│  │   Feels infinite due to variety           │     │
│  └───────────────────────────────────────────┘     │
│                                                     │
│  ┌───────────────────────────────────────────┐     │
│  │ "Every skill use is unique"               │     │
│  │ = Time + Location + Weather + RNG         │     │
│  │   Same skill, different context each time │     │
│  └───────────────────────────────────────────┘     │
│                                                     │
│  ┌───────────────────────────────────────────┐     │
│  │ "World remembers everything"              │     │
│  │ = Simple JSON array of changes            │     │
│  │   No simulation, just state tracking      │     │
│  └───────────────────────────────────────────┘     │
│                                                     │
│  ┌───────────────────────────────────────────┐     │
│  │ "NPCs are so smart"                       │     │
│  │ = Template-based dialogue selection       │     │
│  │   "I saw you use {skillName} {timesUsed}  │     │
│  │    times. You're {relationship} now."     │     │
│  └───────────────────────────────────────────┘     │
└─────────────────────────────────────────────────────┘

     ┌──────────────────────────────────────┐
     │ LIGHTWEIGHT (< 1ms, ~14MB memory)    │
     │           BUT FEELS LIKE             │
     │ UNREAL ENGINE 6 (infinite depth)     │
     └──────────────────────────────────────┘
```

---

This architecture delivers **premium experiences through clever illusions**, not brute-force complexity! 🎭✨
