# 🎮 COMPLETE SKILL SYSTEM DESIGN v1.0

## Executive Summary

Design a **modular, scalable skill system** for 1,037 skills using:
- **11 Primal Elements** (Fire, Ice, Lightning, Water, Earth, Dark, Light, Wind, Metal, Void, Chaos)
- **906+ Keywords** (26 batches, 20+ categories)
- **Jyotish House Modifiers** (12 houses × 9 planets)
- **Fusion Grammar** (element + keyword combos with power multipliers)

---

## PHASE 1: Foundation & Auditing (Weeks 1-2)

### Step 1.1: Design Canonical Skill JSON Schema

```json
{
  "skill": {
    "id": "string (UUID)",
    "name": "string",
    "description": "string (flavor text)",
    "type": "active|passive|ultimate|aura",
    "rarity": "common|rare|epic|legendary|mythic",
    "level_requirement": "number (1-100)",
    
    "keywords": [
      {
        "name": "string (from 906 keywords)",
        "strength": "primary|secondary|tertiary",
        "is_primary": "boolean"
      }
    ],
    "max_keywords": 3,
    
    "effect_blocks": [
      {
        "id": "effect_001",
        "keyword": "string",
        "potency": "number (1-10, 10=max)",
        "duration": "number (seconds)",
        "cooldown": "number (seconds)",
        "resource_cost": {
          "type": "mana|stamina|health|willpower",
          "amount": "number"
        },
        "stacking": {
          "max_stacks": "number (0=no limit)",
          "merge_same": "boolean",
          "merge_similar": "boolean"
        },
        "conditions": {
          "on_hit": "boolean",
          "on_crit": "boolean",
          "on_kill": "boolean",
          "on_defend": "boolean",
          "requires_element": "string (optional)"
        },
        "scaling": {
          "stat": "power|wisdom|dexterity|constitution",
          "multiplier": "number (0.5-2.0)",
          "formula": "string (e.g., '2 * stat + 5')"
        }
      }
    ],
    
    "element_affinities": [
      {
        "element": "Fire|Ice|Lightning|Water|Earth|Dark|Light|Wind|Metal|Void|Chaos",
        "affinity_strength": "weak|neutral|strong|symbiotic",
        "bonus": "number (power multiplier, 0.7-1.5)"
      }
    ],
    
    "base_stats": {
      "power": "number (base damage)",
      "cooldown": "number (seconds)",
      "resource_cost": "number",
      "duration": "number (seconds, 0=instant)",
      "range": "melee|medium|long|unlimited",
      "aoe": {
        "type": "none|cone|circle|line",
        "radius": "number (meters)"
      }
    },
    
    "unlock_condition": {
      "type": "level|quest|currency|crafting|boss_drop",
      "requirement": "string or number"
    },
    
    "combos": [
      {
        "compatible_skill_id": "string (UUID)",
        "combo_name": "string",
        "bonus_description": "string",
        "power_multiplier": "number (1.0-3.0)"
      }
    ],
    
    "tags": ["array of categorical tags"]
  }
}
```

### Step 1.2: Audit All 1,037 Skills

Create audit spreadsheet with columns:
```
| Skill ID | Name | Current Effect | Primary Keyword | Secondary Keyword | Tertiary Keyword | Type | Power Tier | Rarity | Status |
```

For each skill, identify:
1. **Primary Effect**: What is the main action? (Burn, Heal, Stun, etc.)
2. **Map to Keyword**: Find best match from 906 keywords
3. **Secondary Effects**: Any additional keywords triggered?
4. **Type**: Active/Passive/Ultimate/Aura?
5. **Power Tier**: Rate 1-5 (1=weak, 5=legendary)

**Output**: `skills_audit_v1.json` with all 1,037 skills categorized

---

## PHASE 2: Keyword Integration (Weeks 2-3)

### Step 2.1: Build Keyword Extraction & Mapping System

```javascript
// Keyword Mapping Index
const SKILL_KEYWORD_INDEX = {
  // Index keywords by first letter for fast lookup
  "burn": [
    { skill_id: "s001", strength: "primary" },
    { skill_id: "s042", strength: "secondary" },
    // ... 50+ skills using "burn"
  ],
  "heal": [
    { skill_id: "s103", strength: "primary" },
    // ... etc
  ]
  // ... 906 keywords
};

// Reverse lookup: skill ID to keywords
const SKILL_KEYWORDS_MAP = {
  "s001": {
    primary: "burn",
    secondary: "spread",
    tertiary: null
  },
  // ... 1,037 skills
};

// Keyword statistics
const KEYWORD_STATS = {
  "burn": {
    usage_count: 52,
    rarity_distribution: { common: 30, rare: 15, epic: 5, legendary: 2 },
    avg_power_tier: 3.2
  },
  // ... etc
};
```

**Outputs:**
- `keyword_to_skills.json` (906 keyword → [skills])
- `skill_to_keywords.json` (1037 skill → keywords)
- `keyword_stats.json` (coverage analysis)

### Step 2.2: Design Modular Effect Block System

```javascript
class EffectBlock {
  constructor(config) {
    this.keyword = config.keyword;      // "Burn", "Heal", "Stun", etc.
    this.potency = config.potency;      // 1-10
    this.duration = config.duration;    // seconds
    this.cooldown = config.cooldown;    // seconds
    this.resource = config.resource;    // { type, amount }
    this.stacking = config.stacking;    // { max, merge_same, merge_similar }
    this.conditions = config.conditions;// { on_hit, on_crit, on_kill, etc }
    this.scaling = config.scaling;      // { stat, multiplier, formula }
  }
  
  calculate_damage(base, stat_value, tier_bonus) {
    // Apply scaling formula
    const scaled = eval(this.scaling.formula.replace('{stat}', stat_value));
    const tier_modified = scaled * tier_bonus;
    const potency_modified = tier_modified * (this.potency / 10);
    return potency_modified;
  }
  
  apply_stacking(existing_effects) {
    // If same keyword exists, merge stacks
    const same = existing_effects.find(e => e.keyword === this.keyword);
    if (same && this.stacking.merge_same) {
      same.stacks = Math.min(same.stacks + 1, this.stacking.max_stacks);
      return null; // Don't add new effect
    }
    
    // If similar keyword exists, check merge_similar
    const similar = existing_effects.find(e => 
      e.keyword in KEYWORD_SIMILAR_GROUPS[this.keyword]
    );
    if (similar && this.stacking.merge_similar) {
      // Apply bonus to similar
      similar.potency *= 1.1;
      return null;
    }
    
    // Add as new effect
    return {
      keyword: this.keyword,
      potency: this.potency,
      duration: this.duration,
      stacks: 1,
      created_at: Date.now()
    };
  }
}
```

---

## PHASE 3: Element & Jyotish Integration (Weeks 3-4)

### Step 3.1: Element-to-Keyword Bridge Matrix

```json
{
  "element_keyword_interactions": {
    "Fire": {
      "Burn": {
        "type": "synergy",
        "power_bonus": 1.5,
        "description": "Fire naturally creates burn effects"
      },
      "Freeze": {
        "type": "opposition",
        "power_bonus": 0.6,
        "description": "Fire conflicts with freeze"
      },
      "Spread": {
        "type": "catalytic",
        "power_bonus": 1.3,
        "description": "Fire enhances spread"
      }
    },
    "Lightning": {
      "Chain": {
        "type": "synergy",
        "power_bonus": 1.6,
        "description": "Lightning naturally chains"
      },
      "Shock": {
        "type": "synergy",
        "power_bonus": 1.4,
        "description": "Lightning causes shock"
      }
      // ... more combinations
    }
    // ... 11 elements × 906 keywords
  }
}
```

**Total interactions**: 11 elements × 906 keywords = **9,966 interactions** to catalog

### Step 3.2: Jyotish House Modifiers

```javascript
// House modifier system
const JYOTISH_MODIFIERS = {
  houses: {
    1: { // 1st House - Aries
      name: "Self",
      planet_ruler: "Mars",
      element_bonus: "Fire",
      keyword_boost: "Aggression|Attack|Initiative",
      base_modifier: 1.1,
      planetary_effects: {
        "Sun": 1.2,    // Sun in 1st = strong personality
        "Moon": 0.9,   // Moon in 1st = emotional
        "Mars": 1.3,   // Mars in 1st = warrior
        "Mercury": 1.1,
        "Jupiter": 1.4,
        "Venus": 0.8,
        "Saturn": 0.7,
        "Rahu": 1.2,
        "Ketu": 0.6
      },
      nakshatra_effects: {
        "Ashwini": { keyword_bonus: "Speed|Swift", multiplier: 1.15 },
        "Bharani": { keyword_bonus: "Courage|Valor", multiplier: 1.12 },
        // ... 27 nakshatras
      }
    },
    2: { // 2nd House - Taurus
      name: "Wealth & Resources",
      planet_ruler: "Venus",
      element_bonus: "Earth",
      keyword_boost: "Wealth|Resource|Sustain",
      base_modifier: 1.0,
      // ... similar structure
    },
    // ... 12 houses total
  }
};

// Calculate final house modifier
function calculate_house_modifier(house, planet, nakshatra, dasha_phase) {
  const house_data = JYOTISH_MODIFIERS.houses[house];
  const planet_multiplier = house_data.planetary_effects[planet];
  const nakshatra_data = house_data.nakshatra_effects[nakshatra];
  const dasha_multiplier = DASHA_PHASES[dasha_phase].multiplier;
  
  let final = house_data.base_modifier;
  final *= planet_multiplier;
  final *= nakshatra_data.multiplier;
  final *= dasha_multiplier;
  
  // Clamp to range [0.7, 1.5]
  return Math.max(0.7, Math.min(1.5, final));
}
```

**Output**: `jyotish_modifiers.json` with all 12 × 9 × 27 combinations = **2,916 modifier combinations**

---

## PHASE 4: Rarity & Progression (Weeks 4-5)

### Step 4.1: Skill Rarity Tiers

```json
{
  "rarity_tiers": {
    "common": {
      "color": "#95a5a6",
      "keyword_count": 1,
      "max_effect_blocks": 1,
      "power_range": [1, 3],
      "availability": "Any level",
      "drop_rate": 0.60,
      "example_skills": ["Basic Attack", "Lesser Heal"]
    },
    "rare": {
      "color": "#3498db",
      "keyword_count": 2,
      "max_effect_blocks": 2,
      "power_range": [2, 4],
      "availability": "Level 10+",
      "drop_rate": 0.25,
      "example_skills": ["Fireball", "Power Strike"]
    },
    "epic": {
      "color": "#9b59b6",
      "keyword_count": 2,
      "max_effect_blocks": 3,
      "power_range": [3, 5],
      "availability": "Level 25+",
      "drop_rate": 0.10,
      "example_skills": ["Meteor Storm", "Divine Shield"]
    },
    "legendary": {
      "color": "#f39c12",
      "keyword_count": 3,
      "max_effect_blocks": 4,
      "power_range": [4, 5],
      "availability": "Level 50+ or Quest",
      "drop_rate": 0.04,
      "example_skills": ["Apocalypse", "Eternal Guardian"]
    },
    "mythic": {
      "color": "#e74c3c",
      "keyword_count": 3,
      "max_effect_blocks": 5,
      "power_range": [5, 5],
      "availability": "Legendary Quest or Crafting",
      "drop_rate": 0.01,
      "example_skills": ["Transcendence", "Rebirth of Ashes"]
    }
  }
}
```

### Step 4.2: Skill Unlock System

```javascript
const UNLOCK_CONDITIONS = {
  "Fireball": {
    type: "level",
    requirement: 10,
    description: "Learn at Level 10"
  },
  "Meteor": {
    type: "quest",
    requirement: "quest_pyromancy_master",
    description: "Complete 'Pyromancy Master' quest"
  },
  "Ultimate Flame": {
    type: "crafting",
    requirement: {
      base_skill: "Meteor",
      ingredient_1: "Flame Essence ×3",
      ingredient_2: "Phoenix Feather ×1",
      cost: 5000_gold
    },
    description: "Combine Meteor + materials"
  },
  "Divine Combustion": {
    type: "boss_drop",
    requirement: "Boss_Inferno_King",
    description: "Defeat Inferno King (5% drop rate)"
  }
};
```

---

## PHASE 5: UI & Display System (Weeks 5-6)

### Step 5.1: Skill Display Component Architecture

```
SkillCard
├── Header
│   ├── Skill Name
│   ├── Rarity Badge (color-coded)
│   └── Level Requirement
├── Keywords Section
│   ├── Keyword 1 (primary, large icon, color)
│   ├── Keyword 2 (secondary, medium icon)
│   └── Keyword 3 (tertiary, small icon, if exists)
├── Effects Panel
│   ├── Effect Block 1
│   │   ├── Icon + Keyword Name
│   │   ├── Potency: [===========] 8/10
│   │   ├── Duration: 10s
│   │   ├── Cooldown: 5s
│   │   └── Scaling: +2 × Power stat
│   ├── Effect Block 2
│   └── (etc for max 5 blocks)
├── Stats Row
│   ├── Power: 45 (+8 from Jyotish)
│   ├── Range: Medium
│   ├── Cost: 20 Mana
│   └── Global Cooldown: 2s
└── Footer
    ├── Combo Button (show related skills)
    ├── Details Button (expand description)
    └── Equip/Learn Button
```

### Step 5.2: Keyword Color Coding System

```javascript
const KEYWORD_COLORS = {
  "damage": "#e74c3c",           // Red
  "control": "#3498db",           // Blue
  "defense": "#2ecc71",           // Green
  "buff": "#f39c12",              // Orange
  "debuff": "#9b59b6",            // Purple
  "element": "#1abc9c",           // Teal
  "mechanic": "#34495e",          // Dark Gray
  "type": "#c0392b",              // Dark Red
  "trait": "#16a085",             // Dark Teal
  "combat": "#2c3e50",            // Navy
  "role": "#8e44ad",              // Violet
  "resource": "#f1c40f",          // Yellow
  "ancient": "#95a5a6",           // Gray
  "holy": "#ffd700",              // Gold
  "divination": "#9b7fb8",        // Lavender
  "invocation": "#ff6b9d",        // Pink
  "singularity": "#ff00ff",       // Magenta
  // ... 20+ categories total
};
```

---

## PHASE 6: Card Creator Integration (Weeks 6-7)

### Step 6.1: Skill Slot Architecture

```json
{
  "card": {
    "id": "card_001",
    "name": "Fire Warrior",
    "skill_slots": [
      {
        "slot_number": 1,
        "vedic_house": 1,
        "planet_ruler": "Mars",
        "nakshatra": "Ashwini",
        "assigned_skill": {
          "skill_id": "Fireball",
          "element": "Fire",
          "keywords": ["Burn", "Spread"],
          "jyotish_modifier": 1.15
        },
        "final_stats": {
          "power": 52,  // base 45 * 1.15 modifier
          "cooldown": 4.35,
          "resource_cost": 20,
          "duration": 10
        }
      },
      {
        "slot_number": 2,
        "vedic_house": 2,
        "planet_ruler": "Venus",
        "nakshatra": "Bharani",
        "assigned_skill": {
          "skill_id": "Inferno",
          "element": "Fire|Lightning",
          "keywords": ["Burn", "Chain", "Spread"],
          "jyotish_modifier": 1.08
        },
        "final_stats": {
          "power": 75,
          "cooldown": 8.0,
          "resource_cost": 40,
          "duration": 15
        }
      },
      // ... 12 slots total (1 per house)
    ],
    "card_stats": {
      "total_power": 480,
      "avg_cooldown": 5.2,
      "total_resource_cost": 240,
      "keywords_coverage": ["Burn", "Chain", "Spread", "Damage", ...],
      "element_synergy_score": 0.92
    }
  }
}
```

---

## PHASE 7: Testing & Balance (Weeks 7-8)

### Step 7.1: Balance Dashboard Metrics

```javascript
const BALANCE_METRICS = {
  power_curve: {
    common: { min: 5, max: 25, avg: 15 },
    rare: { min: 20, max: 50, avg: 35 },
    epic: { min: 45, max: 90, avg: 65 },
    legendary: { min: 80, max: 150, avg: 110 },
    mythic: { min: 140, max: 200, avg: 170 }
  },
  
  keyword_distribution: {
    "Burn": { total_skills: 52, rarity_avg: 2.3 },
    "Heal": { total_skills: 48, rarity_avg: 2.1 },
    "Stun": { total_skills: 31, rarity_avg: 2.6 },
    // ... all 906 keywords
  },
  
  combo_coverage: {
    "Fire+Burn": 45,        // 45 skills use this combo
    "Lightning+Chain": 38,
    "Water+Heal": 42,
    // ... document all meaningful combos
  },
  
  element_synergy: {
    "Fire": 0.94,           // 94% synergy rate
    "Ice": 0.87,
    "Lightning": 0.91,
    // ... all 11 elements
  }
};
```

### Step 7.2: Rebalancing Algorithm

```javascript
function identify_outliers() {
  const outliers = [];
  
  for (const skill of ALL_SKILLS) {
    // Power too high
    if (skill.power > RARITY_LIMITS[skill.rarity].max * 1.3) {
      outliers.push({
        skill_id: skill.id,
        issue: "power_too_high",
        recommendation: "reduce_potency_by_20%"
      });
    }
    
    // Keyword gap
    if (skill.keywords.length < skill.rarity_min_keywords) {
      outliers.push({
        skill_id: skill.id,
        issue: "missing_keywords",
        recommendation: `add_keyword_from_${skill.element}_family`
      });
    }
    
    // No synergies
    if (skill.combos.length === 0 && skill.rarity !== "common") {
      outliers.push({
        skill_id: skill.id,
        issue: "no_combos",
        recommendation: "design_2+_synergy_skills"
      });
    }
  }
  
  return outliers;
}
```

---

## PHASE 8: Storage & Export (Week 8)

### Step 8.1: Skill Versioning & Storage

```json
{
  "skill_snapshot": {
    "version": "1.2.3",
    "timestamp": "2025-11-07T14:00:00Z",
    "changes": [
      {
        "skill_id": "Fireball",
        "field": "potency",
        "old_value": 7,
        "new_value": 8,
        "reason": "buffed_for_balance"
      }
    ],
    "stats_checkpoint": {
      "total_skills": 1037,
      "avg_power": 58.2,
      "keyword_coverage": 906,
      "balance_score": 0.91
    }
  }
}
```

### Step 8.2: Skill Export Format

```json
{
  "export_format": "shivakali_skill_v1.0",
  "character": "Warrior Fire Build",
  "skills": [
    {
      "slot": 1,
      "skill_id": "Fireball",
      "element": "Fire",
      "keywords": ["Burn", "Spread"],
      "house": 1,
      "modifiers": { "power": 1.15 }
    }
  ],
  "shared_at": "2025-11-07",
  "share_code": "SKILL_ABC123XYZ"
}
```

---

## Complete Architecture Diagram

```
┌─────────────────────────────────────────────────────┐
│           SKILL SYSTEM ARCHITECTURE                  │
├─────────────────────────────────────────────────────┤
│                                                       │
│  1,037 SKILLS                                         │
│     ↓                                                  │
│  [Schema: Name, Type, Rarity, Keywords, Effects]     │
│     ↓                                                  │
│  906 KEYWORDS (26 batches)                           │
│     ↓                                                  │
│  [Keyword Distribution: Potency, Duration, Stack]    │
│     ↓                                                  │
│  11 ELEMENTS                                          │
│     ↓                                                  │
│  [Element↔Keyword: Synergy, Opposition, Catalytic]  │
│     ↓                                                  │
│  12 JYOTISH HOUSES × 9 PLANETS                      │
│     ↓                                                  │
│  [House Modifiers: Base 0.7-1.5x × Planet × Nakshatra]
│     ↓                                                  │
│  CARD CREATOR (12 slots)                             │
│     ↓                                                  │
│  [LIVE CALCULATIONS: Skill + Element + House = Stats]
│     ↓                                                  │
│  SKILL CARD (Rarity, Power, Keywords, Combos)        │
│                                                       │
└─────────────────────────────────────────────────────┘
```

---

## Success Metrics (End of Week 8)

✅ All 1,037 skills audited and categorized
✅ 906 keywords integrated with power multipliers
✅ 11×906 = 9,966 element-keyword interactions documented
✅ 12×9×27 = 2,916 Jyotish modifiers calculated
✅ 5 rarity tiers with balanced distributions
✅ Skill display UI with live Jyotish updates
✅ Card creator shows real-time final stats
✅ Testing dashboard identifies all outliers
✅ Export system allows sharing & versioning
✅ Complete documentation for all systems

---

## Next Steps

1. **Week 9-10**: Beta test with community
2. **Week 11**: Balance tuning based on feedback
3. **Week 12**: Final optimization & polish
4. **Week 13**: Production deployment

---

*Last Updated: 2025-11-07*
*Status: Ready for Phase 1 Implementation*
