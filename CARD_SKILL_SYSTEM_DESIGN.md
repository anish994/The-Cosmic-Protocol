# 🎴 CARD-SKILL SYSTEM DESIGN

**Date:** 2025-10-25  
**Status:** Core Design Finalized  
**System:** Card-based battle system with 1,037 skill pool

---

## 🎯 CORE CONCEPT

Players create **CARDS** (fighters/characters) and equip them with **SKILLS** (abilities/moves) from a pool of 1,037 skills. Cards battle each other using their equipped skills, with Jyotish cosmic timing creating dynamic strategy.

---

## 🎴 CARD SYSTEM

### Card Structure

Each card is a **fighter/character** with:

```json
{
  "cardId": "CARD_001",
  "cardName": "Shadow Warrior",
  "cardType": "Fighter",
  "baseStats": {
    "ojas": 100,        // Health/HP
    "attack": 15,       // Base attack power
    "defense": 10,      // Damage reduction
    "speed": 8          // Turn order
  },
  "jyotishChart": {
    "sun": { "house": 1, "sign": "Aries" },
    "moon": { "house": 4, "sign": "Cancer" },
    "mars": { "house": 10, "sign": "Capricorn" },
    // ... 9 planets total
    "currentDasha": "Sun",      // Current planetary period
    "dashaRotation": 5          // Changes every 5 turns
  },
  "skillSlots": [
    // 12 TOTAL SLOTS (Jyotish houses)
    { "slotNumber": 1, "skillId": "SKILL_TANTRA_001" },
    { "slotNumber": 2, "skillId": "SKILL_DIVINATION_045" },
    { "slotNumber": 3, "skillId": "FUSED_ZEUS_BURNING" },
    { "slotNumber": 4, "skillId": "SKILL_THERAPEUTIC_012" },
    { "slotNumber": 5, "skillId": null },  // Empty slot
    { "slotNumber": 6, "skillId": null },
    { "slotNumber": 7, "skillId": null },
    { "slotNumber": 8, "skillId": null },
    { "slotNumber": 9, "skillId": null },
    { "slotNumber": 10, "skillId": null },
    { "slotNumber": 11, "skillId": null },
    { "slotNumber": 12, "skillId": null }
  ],
  "level": 1,
  "experience": 0
}
```

---

## 📋 SKILL SLOT RULES

### **12 Slot System** (Based on Jyotish 12 Houses)

✅ **ALLOWED:**
- **Any number of skills** (1 to 12 slots can be filled)
- **Any skill type** (Action, Passive, Reaction - doesn't matter)
- **Any engine mix** (All Tantra, all different engines, any combination)
- **Any tier mix** (Tier 0 + Tier 4 on same card)
- **Fused skills** (Can equip pre-fused skills)
- **Empty slots** (Don't have to fill all 12 slots)

❌ **NOT ALLOWED:**
- **No duplicates** - Can't equip same skill twice on one card
- **One skill per slot** - Each slot holds exactly 1 skill (or empty)

### Examples of Valid Card Builds:

#### Aggressive Build (8 skills):
```
Slot 1: Burning Strike (Tantra)
Slot 2: Death Mark (Tantra)
Slot 3: Savage Frenzy (Tantra)
Slot 4: Zeus Lightning (Invocation - Greek)
Slot 5: Ares Bloodlust (Invocation - Greek)
Slot 6: Kali Destruction (Invocation - Vedic)
Slot 7: Reality Tear (Singularity)
Slot 8: Apocalypse Flame (Tantra)
Slots 9-12: Empty
```

#### Balanced Build (12 skills):
```
Slot 1: Shield Projection (Foundational)
Slot 2: Resonance Field (Consciousness)
Slot 3: Thread Reader (Divination)
Slot 4: Burn Aura (Tantra)
Slot 5: Radiant Cure (Therapeutic)
Slot 6: Deep Analysis (Character Analysis)
Slot 7: Zeus Invocation (Invocation)
Slot 8: Thor Lightning (Invocation)
Slot 9: Time Rewind (Divination)
Slot 10: Reality Shift (Singularity)
Slot 11: Death Touch (Tantra)
Slot 12: Eternal Mind (Consciousness)
```

#### Support Build (4 skills):
```
Slot 1: Mass Heal (Therapeutic)
Slot 2: Divine Blessing (Invocation)
Slot 3: Shield Wall (Foundational)
Slot 4: Cleanse All (Therapeutic)
Slots 5-12: Empty
```

#### Mono-Engine Build (6 skills - All Invocation):
```
Slot 1: Zeus (Greek)
Slot 2: Athena (Greek)
Slot 3: Shiva (Vedic)
Slot 4: Amaterasu (Japanese)
Slot 5: Olodumare (African)
Slot 6: Jade Emperor (Chinese)
Slots 7-12: Empty
```

---

## ⚔️ BATTLE MECHANICS

### Turn Structure

```
=== BATTLE START ===
1. Both players draw starting hand (5 cards from deck)
2. Each player plays 1 card to battlefield
3. Jyotish periods initialized for both cards
4. Turn order determined by Speed stat

=== EACH TURN ===
1. Active player chooses 1 skill from their card's equipped skills
2. Skill executes (damage, effects, etc.)
3. Jyotish modifiers applied based on current planetary period
4. Check for skill fusion triggers (keyword/theme matches)
5. Apply ongoing effects (DoT, buffs, debuffs)
6. Check win condition (opponent Ojas = 0)
7. Rotate planetary period (every X turns)
8. Next player's turn

=== SKILL EXECUTION ===
Skill Base Effect
  × Jyotish Multiplier (planet/house alignment)
  × Card Stats Bonus (Attack/Defense)
  + Synergy Bonus (if multiple skills chained)
  = Final Effect
```

### Jyotish Combat Interaction

Each skill has **Cosmic DNA** (from Jyotish system):
- **Ruling Planet** (Sun, Moon, Mars, etc.)
- **Best House** (1-12)
- **Best Nakshatra** (27 lunar mansions)

**During Battle:**
```
Card's Current Dasha: SUN
Skill: "Burning Strike" (Mars skill, Fire element)

Power Calculation:
├── Base Damage: 30
├── Jyotish Check:
│   ├── Card in Sun Dasha (Fire period) ✅
│   ├── Burning Strike is Fire skill ✅
│   ├── Synergy Bonus: +150% (4.5x multiplier for Sun-Fire alignment)
├── Final Damage: 30 × 2.5 = 75 damage!

Next Turn:
Card's Dasha rotates to: MOON (Water period)

Same Skill Now:
├── Base Damage: 30
├── Jyotish Check:
│   ├── Card in Moon Dasha (Water period) ❌
│   ├── Burning Strike is Fire skill ❌
│   ├── Penalty: -30% (Fire weak during Moon/Water)
├── Final Damage: 30 × 0.7 = 21 damage
```

**Strategic Impact:**
- Same card plays COMPLETELY DIFFERENTLY each game
- Dasha rotation every 5 turns creates shifting meta
- Players must adapt strategy to current cosmic period
- High-skill players predict period shifts and save powerful skills

---

## 🔥 SKILL FUSION IN BATTLE

### Automatic Fusion Triggers

Skills can **auto-fuse during battle** if conditions are met:

#### Trigger Conditions:
1. **Shared Keywords** (2+ skills with same keyword used in sequence)
2. **Shared Themes** (2+ skills with compatible themes)
3. **Engine Synergy** (High synergy engine pair: Tantra×Singularity = 90%)
4. **Cosmic Alignment** (Both skills boosted by current Dasha)

#### Example Fusion Combo:

```
Turn 1: Use "Burning Strike" (Tantra)
  ├── Keywords: [Burn, Damage, Fire]
  ├── Themes: [aggro, offense, dot]
  └── Store in fusion buffer

Turn 2: Use "Zeus Lightning" (Invocation)
  ├── Keywords: [Lightning, Damage, Storm]
  ├── Themes: [divine, offense, control]
  ├── Check fusion conditions:
  │   ├── Shared Keyword: "Damage" ✅
  │   ├── Shared Theme: "offense" ✅
  │   ├── Engine Synergy: Tantra×Invocation = 85% ✅
  │   └── FUSION TRIGGERED! 🔥

Turn 3: FUSION UNLOCKED
  └── New Temporary Skill: "Divine Inferno"
      ├── Power: Combined (Burn + Lightning)
      ├── Effect: 100 damage + [Burn] + [Stun] + [Divine Blessing]
      ├── Duration: 1 turn (then skills return to normal)
      └── Can be made permanent if fusion successful 3+ times
```

---

## 🎲 DECK BUILDING SYSTEM

### Deck Structure

```
Player Deck:
├── 20-30 Cards total
├── Draw 5 cards at start
├── Play 1 card per turn
├── Each card has 1-12 skills equipped
└── Strategy: Mix of aggressive, defensive, support cards
```

### Card Creation Process

```
1. CREATE CARD
   ├── Choose base stats (HP, Attack, Defense, Speed)
   ├── Generate Jyotish birth chart (or randomize)
   └── Name your card

2. EQUIP SKILLS (12 slots available)
   ├── Browse 1,037 skill pool
   ├── Filter by engine, tier, keywords, themes
   ├── Drag skills into slots 1-12
   ├── Can leave slots empty (minimum 1 skill required)
   └── No duplicates allowed

3. TEST CARD
   ├── Battle AI or practice dummy
   ├── See how skills interact
   ├── Check Jyotish period effects
   └── Refine skill loadout

4. SAVE TO DECK
   └── Add card to your 20-30 card collection
```

---

## 💡 STRATEGIC DEPTH

### Why This System is Deep:

#### 1. **Deck Building Strategy**
- 1,037 skills × 12 slots = Billions of combinations
- Engine synergies (some combos naturally stronger)
- Jyotish alignment (matching skills to card's chart)
- Fusion potential (equipping skills that combo well)

#### 2. **In-Battle Strategy**
- Timing skills with Jyotish periods (wait for power spike)
- Setting up fusion combos (use skills in right sequence)
- Resource management (cooldowns, costs)
- Reading opponent (predict their Dasha shifts)

#### 3. **Meta Strategy**
- Counter-building (create decks to beat popular strategies)
- Jyotish mastery (understanding planetary periods deeply)
- Fusion discovery (finding new powerful combinations)
- Card evolution (leveling cards unlocks more slot capacity)

---

## 🎯 KEY DESIGN PRINCIPLES

### 1. **Freedom**
- Players decide everything: stats, skills, chart
- No forced archetypes or class restrictions
- Experiment with any combination

### 2. **Simplicity**
- Core rules are simple: equip skills, use them in battle
- Complexity emerges from interactions
- Easy to learn, impossible to master

### 3. **Dynamic**
- Jyotish ensures no two games play the same
- Fusion system creates emergent combos
- Meta constantly shifts with new fusions discovered

### 4. **Scalable**
- Start with 1-2 skills on beginner cards
- Advanced players use all 12 slots optimally
- Infinite skill pool growth (can add more skills)

---

## 📊 EXAMPLE FULL BATTLE

```
=== PLAYER 1: "Solar Champion" Card ===
Ojas: 100/100 | Current Dasha: SUN

Equipped Skills (7 slots):
1. Flame Strike (Tantra) - Fire skill [Burn, Damage]
2. Radiant Heal (Therapeutic) - Light skill [Heal, Cleanse]
3. Apollo's Light (Invocation) - Sun god [Divine, Offense]
4. Reality Burn (Singularity) - Chaos fire [Burn, Execute]
5. Burning Rage (Tantra) - Aggro fire [Burn, Frenzy]
6. Shield of Light (Foundational) - Defense [Shield, Light]
7. Time Skip (Divination) - Evasion [Evade, Haste]

=== PLAYER 2: "Shadow Assassin" Card ===
Ojas: 100/100 | Current Dasha: MOON

Equipped Skills (5 slots):
1. Dark Blade (Tantra) - Shadow damage [Stealth, Execute]
2. Void Walk (Singularity) - Teleport [Evade, Chaos]
3. Poison Touch (Therapeutic) - DoT [Poison, Decay]
4. Moon Veil (Divination) - Concealment [Hide, Defense]
5. Death Strike (Tantra) - Execute [Execute, Damage]

=== TURN-BY-TURN BATTLE ===

TURN 1 (Player 1 - Sun Dasha):
├── Uses: "Flame Strike"
├── Sun Dasha Boost: +150% (Fire skill in Sun period!)
├── Damage: 30 × 2.5 = 75 damage
├── Apply [Burn]: 10 damage/turn
└── Opponent: 25/100 Ojas

TURN 2 (Player 2 - Moon Dasha):
├── Uses: "Moon Veil"
├── Moon Dasha Boost: +150% (Moon skill in Moon period!)
├── Effect: [Hidden] status + 50% evasion
└── Prepared for counter-attack

TURN 3 (Player 1 - Sun Dasha):
├── Uses: "Apollo's Light"
├── Sun + Divine synergy: +200% boost!
├── Damage: 50 × 3.0 = 150 damage
├── But opponent has [Hidden]: 50% miss chance
├── MISSED! (bad luck)
└── Opponent: 15/100 Ojas (Burn DoT applied)

TURN 4 (Player 2 - Moon Dasha):
├── Uses: "Death Strike" (Execute below 30% HP)
├── Player 1 at 100% HP - Execute fails
├── Normal damage: 40 damage
└── Player 1: 60/100 Ojas

TURN 5 (Player 1 - Sun Dasha):
├── Dasha about to shift! Last turn of Sun power
├── Uses: "Reality Burn" (Ultimate fire skill)
├── Sun Boost: +150%
├── Damage: 80 × 2.5 = 200 damage
├── OVERKILL!
└── Opponent: -185/100 Ojas → DEFEATED!

PLAYER 1 WINS!
```

---

## 🚀 FUTURE EXPANSIONS

### Planned Features:

1. **Card Evolution**
   - Level up cards to unlock more skill slots
   - Enhanced stats at higher levels
   - Prestige system for mastered cards

2. **Legendary Fusions**
   - Permanent fusion skills discovered in battle
   - Added to skill pool for future use
   - Community shares fusion discoveries

3. **Multiplayer Modes**
   - 1v1 Ranked Battles
   - 2v2 Tag Team
   - Tournament System

4. **Card Rarity System**
   - Common/Rare/Epic/Legendary cards
   - Higher rarity = more skill slots or stat bonuses
   - Collection and trading

---

## 📝 IMPLEMENTATION NOTES

### Technical Requirements:

1. **Skill Database** ✅ COMPLETE (1,037 skills)
2. **Fusion Algorithm** ✅ COMPLETE (fusionCore.js)
3. **Card System** ⏳ TO BUILD
4. **Jyotish Calculator** ⏳ TO BUILD
5. **Battle Engine** ⏳ TO BUILD
6. **UI/UX** ⏳ TO BUILD

### Next Steps:

1. Create Card class/structure
2. Build Jyotish calculator for battle modifiers
3. Implement battle engine with turn system
4. Create card builder UI
5. Test with sample battles

---

**System Status:** ✅ Design Complete, Ready for Implementation  
**Skill Pool:** 1,037 skills ready  
**Fusion System:** Operational  
**Next Phase:** Build Card & Battle Systems 🚀
