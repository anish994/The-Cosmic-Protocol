
# Game Concept Core v1.0: The Architect's Forge

This document outlines the fundamental gameplay loop of the game, which is a dual-phase strategic experience combining deep, offline customization with tactical, head-to-head combat.

---

## Phase 1: The Forge (The Workshop/Sanctum)

This is the **Card-Builder** phase where player strategy, creativity, and system mastery are paramount. It is a turn-less, creative process of forging unique, powerful "Cards" from a vast library of components.

### Step 1.1: Chart Generation (The Canvas)
1.  **Initiation:** The player selects "Create Chart" from the main workshop interface.
2.  **The Axiomatic Choice:** A screen displays an empty 12-house Vedic chart, a degree wheel, and Lagna (Ascendant) options. The player makes the single most important choice: the Ascendant's sign and precise degree.
3.  **The Cascade:** The Jyotish Engine instantly calculates and applies four layers of inherent properties to the 12 empty slots on the chart, creating a unique "strategic micro-verse."
    *   **Layer 1 (House-Sign):** Elemental and Zodiacal affinity for each slot.
    *   **Layer 2 (Planetary):** Permanent planetary modifiers are placed based on the Ascendant archetype (e.g., Mars making a slot `Aggressive`).
    *   **Layer 3 (Nakshatra):** Granular micro-buffs are applied based on the precise degree, creating `Dominant` slots with full power and `Transitional` slots that offer a strategic choice.
    *   **Layer 4 (House Results):** A final layer of base passive buffs from the houses themselves.

### Step 1.2: Glyph Placement (The Components)
1.  **The Palette:** The player browses their library of unlocked **Glyphs** (skills) from a pool of **1,037 skills** across 8 engines:
    *   **Combat Engines (700 skills):** Foundational (100), Consciousness (100), Tantra (100), Singularity (100), Divination (100), Character Analysis (100), Therapeutic (100)
    *   **Invocation Engine (337 entities):** Angels (79), Demons (72), Divine Pantheons (186) - Vedic, Norse, Egyptian, Greek, Chinese, Japanese, African
2.  **Strategic Slotting:** The player selects an empty, modified slot on their Chart and then selects a Glyph to place within it.
    *   **No Restrictions:** Can mix any engines, tiers, or skill types
    *   **No Duplicates:** Each skill can only be equipped once per card
    *   **Flexible Slots:** Can fill 1-12 slots (any number)
3.  **Real-Time Synergy:** The engine instantly calculates and displays how the slot's inherent properties (e.g., `Fire`, `Aggressive`, `Razor's Edge`) modify the base stats and function of the chosen Glyph. This is the core of the strategic design process.
4.  **Fusion Preview:** The system suggests natural fusion combinations based on:
    *   **Keyword Synergy:** Skills sharing keywords (Burn + Burn = stronger combo)
    *   **Theme Compatibility:** Matching themes boost fusion power
    *   **Engine Synergy:** Certain engine pairs have natural affinity (Tantra×Singularity = 90% synergy)
5.  **Budgeting:** Players fill the 12 slots while managing a global `KP` (Kernel Power) budget to prevent overloading a chart with universally powerful Glyphs.

### Step 1.3: Glyph Customization (The Refinement)
1.  **Deep Dive:** The player can select any slotted Glyph to enter the "Upgrade Station."
2.  **Branching Evolution:** A major, permanent choice is made to fundamentally alter the Glyph's primary function (e.g., evolving a single-target attack into an AoE blast or a debuff applicator).
3.  **Skill Fusion Workshop:** Players can fuse 2 skills BEFORE battle to create permanent hybrid abilities:
    *   **Fusion Algorithm:** Combines skills based on synergy score (0-100%)
    *   **Power Calculation:** Base power + Synergy multiplier (1.0x to 2.0x)
    *   **Effect Merging:** Combines both skill effects intelligently
    *   **Keyword Fusion:** Merges unique keywords + adds "Synergized" tag
    *   **Tier Progression:** Fused skills upgrade to higher tiers
    *   **Infinite Depth:** Fused skills can be fused again!
    *   **Example:** "Burning Strike" + "Zeus Lightning" = "Divine Inferno" (120 power, Tier 3)
4.  **Stardust Infusion:** A secondary resource (`Gnosis`) is spent to apply numerous small, incremental upgrades to fine-tune stats like Power, Cooldown, or Cost.

### Step 1.4: Synthesis & Forging (The Masterpiece)
1.  **Final Judgment:** Once all 12 slots are filled and customized, the Jyotish Engine performs a final analysis of the entire construct.
2.  **Yogas & Doshas:** Based on elegant synergies or conflicting elements, the Chart is automatically assigned powerful bonus `Yogas` or challenging `Doshas`, rewarding deep design mastery.
3.  **Forge Card:** The player clicks "Forge Card." A dynamic animation plays, compiling and collapsing the entire multi-layered Chart into a **single, unique, playable "Forged Card"**—an artifact representing the player's design.
4.  **Collection:** This Forged Card is given a unique visual identity based on its composition and is permanently saved to the player's collection.

---

## Phase 2: The Duel (The Confrontation)

This is the tactical combat phase where the player's forged artifacts are put to the test. This phase emphasizes skillful matchups, resource management, and turn-by-turn tactical decisions inspired by **Pokémon-style battles**.

### Step 2.1: The Loadout (Card Selection)
*   Players do not bring a "deck." Instead, they select a small, pre-meditated "stable" of **3 Forged Cards** from their collection to bring into the duel.
*   Each Forged Card represents a complete fighter with 12 Glyphs (skills/abilities) derived from the eight Skill Engines.
*   Cards have calculated stats based on their Glyph composition:
    *   **HP (Health Points):** Base 100 HP, modified by defensive/offensive/utility glyph ratios
    *   **Attack Power:** Determined by offensive glyph potency
    *   **Defense:** Determined by defensive glyph presence
    *   **Speed:** Determines turn order priority

### Step 2.2: The Match Structure (Best of 5 Rounds)
*   The duel follows a **Best of 5 Rounds** format (first to win 3 rounds wins the match)
*   Each round is a complete 1v1 battle between two Forged Cards
*   Between rounds, players can strategically switch cards or keep their current champion

### Step 2.3: Round Structure (Pokémon-Style Turn-Based Combat)

**Round Initialization:**
1.  Both players select which Forged Card to send into battle (simultaneously or in sequence)
2.  Cards are revealed and enter the battlefield
3.  Turn order determined by Speed stats (or simultaneous turns)

**Turn-by-Turn Combat:**
```
┌─────────────────────────────────────────────────┐
│ YOUR CARD: "Burning Phoenix" (120 HP)          │
│ OPPONENT: "Mind Fortress" (180 HP)             │
├─────────────────────────────────────────────────┤
│ TURN 1: Your Turn                               │
│ Choose 1 Glyph to activate:                     │
│ [1] Ignition Protocol - Apply 3 [Burn] stacks  │
│ [2] Ember Strike - 30 damage + 1 [Burn]        │
│ [3] Flame Shield - 20 shield + burn aura       │
│ [4] Wildfire Spread - Spread [Burn] effects    │
│ [5] Detonation Cascade - Detonate all [Burn]   │
│ [6] Phoenix Rebirth - Heal + burn aura         │
│ [7] Heat Wave - 40 AoE damage                   │
│ [8] Cauterize - Heal by consuming [Burn]       │
│ [9] Inferno State - Berserker mode             │
│ [10] Smoke Screen - Dodge next attack          │
│ [11] Backdraft - Counter attack                 │
│ [12] Supernova - Ultimate finisher             │
│                                                  │
│ → You select: [1] Ignition Protocol            │
│ → Effect: 3 [Burn] stacks applied to opponent  │
│ → [Burn] will deal 3 damage/turn for 3 turns   │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│ TURN 1: Opponent's Turn                         │
│ Opponent chooses: "Mind Palace Protocol"        │
│ → Effect: Gains 20 shield                       │
│ → Passive: Bandwidth generation x2              │
│                                                  │
│ End of Turn:                                     │
│ • [Burn] ticks: 3 damage dealt (blocked by shield)│
│ • Persistent effects update                     │
│ • Resources regenerate                          │
└─────────────────────────────────────────────────┘
```

**Core Turn Mechanics:**
*   **1 Action Per Turn:** Player chooses 1 of their 12 Glyphs to activate
*   **Persistent Effects:** Status effects ([Burn], [Shield], Neural States) persist across multiple turns
*   **Resource Management:** KP, Prana, Bandwidth, and other engine-specific resources are spent to activate glyphs
*   **Strategic Depth:** Players must build multi-turn strategies (setup → combo → finisher)
*   **Counterplay:** Defensive glyphs, healing, shields, and state manipulation create tactical options

### Step 2.4: Round Victory & Card Switching

**Round Ends When:**
*   One card's HP reaches 0 (defeated)
*   Timeout occurs (turn limit reached - defender wins)
*   Special win conditions triggered (engine-specific)

**Between Rounds:**
```
┌─────────────────────────────────────────────────┐
│ ROUND 1 COMPLETE                                 │
│ Score: 1-0 (You lead)                           │
│                                                  │
│ YOUR REMAINING CARDS:                            │
│ [1] Singularity Crusher (High Burst)            │
│ [2] Divine Protector (Tank/Healer)              │
│                                                  │
│ OPPONENT'S REMAINING CARDS:                      │
│ [1] Shadow Assassin (Fast Aggro)                │
│ [2] Cosmic Weaver (Control)                     │
│                                                  │
│ Choose your next card for Round 2:              │
│ → Keep current card (momentum)                  │
│ → Switch to counter opponent's next pick        │
└─────────────────────────────────────────────────┘
```

**Strategic Switching:**
*   **Loser must switch** to a different card (reinforcement)
*   **Winner may switch** (optional - allows counter-picking)
*   Information advantage: Winner sees loser's choice first (or simultaneous blind pick)

### Step 2.5: Match Victory

**Match Ends When:**
*   One player wins 3 rounds (Best of 5)
*   One player has no cards remaining
*   Time limit reached (judge by round wins)

**Victory Rewards:**
*   Experience points for progression
*   Currency for unlocking new Glyphs
*   Rank/rating adjustments (competitive mode)
*   Achievement tracking

---

## The Pokémon-Inspired Combat Philosophy

**What Makes This Unique:**

**Like Pokémon:**
✅ Turn-based combat (choose 1 move per turn)  
✅ HP bars and status effects  
✅ Type advantages and strategic switching  
✅ Multi-battle format (6 Pokémon = 3 Cards)  
✅ Simple to learn, deep to master  

**Unlike Pokémon:**
🔥 **You design the fighters** - Each card is custom-built from 12 Glyphs  
🔥 **12 moves instead of 4** - More strategic options each turn  
🔥 **Complex synergies** - Multi-turn engine building (states, resources, combos)  
🔥 **Persistent effects** - [Burn] stacks, Neural States, [Field] effects last multiple turns  
🔥 **Resource systems** - Manage KP, Prana, Bandwidth, Threshold, etc.  
🔥 **Best of 5 format** - Strategic switching between rounds  

**Design Goals:**
*   **Accessible:** Anyone who played Pokémon understands the basics immediately
*   **Deep:** 12 glyphs × 1,037 skills × 8 engines = infinite strategic depth
*   **Creative:** Players express themselves through custom card design
*   **Competitive:** Skill-based with clear counterplay and adaptation
*   **Expandable:** Easy to add new Glyphs, engines, and mechanics
*   **Fusion Discovery:** Finding optimal skill combinations is a meta-game itself

---

## The Fusion System (Dynamic Combat Evolution)

### Pre-Battle Fusion (Workshop)
**Fusion Workshop Features:**
*   **Skill Pool:** Browse all 1,037 skills with filters (engine, tier, keywords, themes)
*   **Fusion Calculator:** Select 2 skills to see fusion preview
*   **Synergy Score:** See compatibility rating (40-100%)
*   **Power Projection:** Preview fused skill stats and effects
*   **Save Fusion:** Create permanent hybrid skill
*   **Equip Anywhere:** Use fused skills on any card

**Fusion Rules:**
```
Synergy Score Calculation:
├── Engine Compatibility: 40% weight
│   ├── Same engine: 50% base
│   ├── Tantra×Singularity: 90% (high synergy)
│   ├── Invocation×Singularity: 95% (divine+reality)
│   └── Default cross-engine: 60%
├── Keyword Matching: 25% weight
│   └── +10% per shared keyword
├── Theme Compatibility: 25% weight
│   └── +15% per shared theme
└── Tier Synergy: 10% weight
    └── Penalty for tier mismatch

Fused Power = (Avg Power × Synergy Multiplier) + 20 bonus
Fused Tier = Ceiling(Avg Tier + Synergy Bonus)
```

### In-Battle Fusion (Automatic Combos)
**Dynamic Fusion Triggers:**
*   **Sequence Detection:** Using 2+ skills with shared keywords in sequence
*   **Auto-Fusion:** System creates temporary mega-skill for 1 turn
*   **Combo Bonus:** Massive power spike (150-300% damage)
*   **Permanent Discovery:** 3+ successful combos unlocks permanent fused skill

**Example Battle Combo:**
```
Turn 1: Use "Burning Strike" (Tantra)
  └── [Burn] applied to opponent

Turn 2: Use "Zeus Lightning" (Invocation)
  ├── Shared keyword: "Damage" detected
  ├── Engine synergy: Tantra×Invocation = 85%
  └── AUTO-FUSION TRIGGERED! 🔥

Turn 3: Unlocked "Divine Inferno" (Temporary)
  ├── Combined effects: 120 damage + [Burn] + [Stun]
  ├── Synergy bonus: +85% power
  └── Total: 220 damage!

After 3rd successful combo:
  └── "Divine Inferno" permanently added to skill pool!
```

### Jyotish × Fusion Interaction
**Cosmic Fusion Amplification:**
*   **Aligned Periods:** Both skills boosted by current Dasha = MEGA fusion
*   **Planetary Synergy:** Fusing during favorable period adds permanent bonus
*   **House Placement:** Skills in compatible houses = stronger fusion potential

**Example:**
```
Card in SUN Dasha (Fire period)
├── Skill 1: "Flame Strike" (Fire skill) → +150% boost
├── Skill 2: "Apollo's Light" (Sun god) → +200% boost
└── FUSION = "Solar Apocalypse" → +350% COMBINED!
    └── This fusion is 3.5× stronger than normal!
```

---

## System Statistics

**Current Game State:**
*   ✅ **1,037 Skills Ready** - Complete skill database
*   ✅ **8 Combat Engines** - All balanced at 100 skills each (700 total)
*   ✅ **9 Divine Pantheons** - 337 Invocation entities
*   ✅ **537,166 Potential 2-Skill Fusions** - Combinatorial explosion
*   ✅ **Infinite Fusion Depth** - Fused skills can be fused again
*   ✅ **37 Unique Themes** - For synergy matching
*   ✅ **100+ Keywords** - For combo detection

**Skill Distribution:**
```
Combat Engines (700):
├── Foundational: 100 (Infrastructure & Support)
├── Consciousness: 100 (Scaling & Efficiency)
├── Tantra: 100 (Pressure & Aggro)
├── Singularity: 100 (Ramp & Reality-Breaking)
├── Divination: 100 (Fate Manipulation & Combo)
├── Character Analysis: 100 (Information & Counter-play)
└── Therapeutic: 100 (Healing & Cleansing)

Invocation Engine (337):
├── Theurgic Host: 79 Angels
├── Goetic Legions: 72 Demons
├── Vedic Pantheon: 33 deities
├── Norse Pantheon: 26 deities
├── Egyptian Pantheon: 27 deities
├── Greek Pantheon: 30 deities
├── Chinese Pantheon: 25 deities
├── Japanese Pantheon: 25 deities
└── African Pantheon: 20 deities
```

---

This core loop establishes a game where victory is earned in the **Workshop** through intelligent design, foresight, and creativity (including skill fusion discovery), and then proven in the **Arena** through tactical execution in Pokémon-style turn-based combat with dynamic fusion combos.
