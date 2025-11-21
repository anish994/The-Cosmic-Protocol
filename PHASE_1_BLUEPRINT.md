# 📐 PHASE 1: THE 5-STEP BLUEPRINT (TECHNICAL SPECIFICATION)

## 1. DATA STRUCTURE UNIFICATION (The Universal Language)
To ensure the Card Creator, Game Engine, and Narrative System talk to each other, we need strict JSON schemas.

### **A. The Skill Object**
```json
{
  "id": "skill_void_strike",
  "name": "Void Strike",
  "type": "ACTIVE", // ACTIVE, PASSIVE, ULTIMATE
  "tags": ["VOID", "MELEE", "DIMENSIONAL"],
  "base_stats": {
    "damage": 15,
    "cooldown": 3,
    "cost": 5 // Resource cost (Mana/Stamina)
  },
  "effects": [
    { "type": "DAMAGE", "value": 15, "target": "SINGLE" },
    { "type": "APPLY_STATUS", "status": "VOID_TOUCHED", "duration": 2 }
  ],
  "narrative_triggers": {
    "on_cast": "You tear a rift in reality.",
    "on_hit": "The target flickers out of existence for a moment.",
    "environment": "COLLAPSE_STRUCTURE" // If used on a bridge/building
  }
}
```

### **B. The Fusion Card Object (The Player's "Weapon")**
```json
{
  "id": "card_custom_001",
  "name": "Eclipsed Void Blade",
  "components": ["skill_void_strike", "skill_solar_flare"],
  "fusion_tier": "LEGENDARY",
  "primary_action": "skill_void_strike", // The main button press
  "secondary_effect": "skill_solar_flare_passive", // Triggered on hit
  "lore": "A blade forged in the heart of a dying star.",
  "stats_modifier": { "damage": +5, "cost": +2 }
}
```

### **C. The Enemy Object**
```json
{
  "id": "enemy_shadow_stalker",
  "name": "Shadow Stalker",
  "archetype": "ASSASSIN",
  "stats": { "hp": 50, "speed": 10 },
  "consciousness": {
    "fear_trigger": "LIGHT_DAMAGE",
    "nemesis_potential": true
  },
  "loot_table": ["fragment_shadow", "skill_shadow_step"]
}
```

---

## 2. THE GAME LOOP LOGIC (The Flow)
The game is a series of "States".

1.  **STATE: PRE_RUN**
    - User loads `Card Creator`.
    - Selects 3 `Fusion Cards`.
    - Clicks "Enter the Loop".
    - System initializes `RunState` (HP: 100, World: 0% Corruption).

2.  **STATE: NODE_NAVIGATION**
    - System presents 3 choices (Story Nodes).
    - Player picks one (e.g., "The Ruined Temple").
    - System checks `Card Tags` vs `Node Tags` (e.g., "Do you have a LIGHT skill?").

3.  **STATE: ENCOUNTER (Combat/Social)**
    - If Combat: Initialize `CombatEngine`.
    - If Social: Initialize `DialogueSynthesizer`.

4.  **STATE: RESOLUTION**
    - Apply rewards (XP, Loot).
    - Update World State (Corruption ++).
    - Check for Level Up / Evolution.

5.  **STATE: END_RUN**
    - If HP <= 0: Trigger `DeathMechanics` (Memory degradation).
    - If Win: Trigger `Ascension`.

---

## 3. THE COMBAT-NARRATIVE INTERFACE (The Translator)
Combat is not just numbers; it's text.

**The Translator Class (`CombatNarrativeTranslator.js`)**
- **Input**: `Player casts Void Strike (15 dmg) on Goblin.`
- **Process**:
    1.  Check Context: Is the Goblin low HP? Is the environment "Dark"?
    2.  Select Template: `"{PLAYER} {VERB} the {TARGET} with {ELEMENT} energy."`
    3.  Inject Flavor: `"{PLAYER} tears a rift, blasting the Goblin with Void energy."`
- **Output**: Text displayed in the main story log.

---

## 4. THE CARD CREATOR SPEC (The Workshop)
The `mini-test.html` will be upgraded to a full React/Vue or Vanilla JS App.

**Features:**
1.  **Skill Pool**: Left panel showing all unlocked skills.
2.  **Fusion Altar**: Center panel. Drag 2 skills here.
3.  **Preview**: Right panel showing the resulting `Fusion Card`.
4.  **Export**: Button to save the card to `user_cards.json`.

**Logic:**
- `Skill A` + `Skill B` = `Fusion C`
- Lookup `FusionTable` for compatibility.
- Generate Name/Stats dynamically if no unique fusion exists.

---

## 5. THE INTEGRATION ARCHITECTURE (The Wiring)
How the files connect:

```
[UI: Card Creator] --(saves to)--> [Data: PlayerProfile.json]
                                          |
                                          v
[Engine: RunManager] --(reads)--> [Data: PlayerProfile.json]
       |
       +--(initializes)--> [Engine: CombatEngine]
       |                          |
       |                          +--(uses)--> [Engine: SkillSystem]
       |                          +--(uses)--> [Engine: EnemyAI]
       |
       +--(updates)--> [Engine: StoryNodeSystem]
                              |
                              +--(uses)--> [Engine: DialogueSynthesizer]
```

**Key Connection Point**: The `StoryNodeSystem` must be able to *pause* narrative flow to hand control to the `CombatEngine`, then *resume* based on the combat result.
