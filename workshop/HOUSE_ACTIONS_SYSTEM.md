# House Actions System – Built-in Fallback Skills

## Core Concept

Each house has an **intrinsic active ability** that:
- **Always available** even if all 12 slots contain only passives/buffs
- **Scales with house power** (modified by Lagna/Nakshatra/Planet)
- **Unique to house theme** (House 1 = identity, House 5 = expression, etc.)
- **Scales with player placement** (cooldown, power, mechanics shift)

---

## 12 House Actions (Base Template)

```javascript
const HOUSE_ACTIONS = {
  1: { // Self / Identity
    name: 'Core Strike',
    description: 'Strike with core identity power',
    icon: '⚔️',
    baseCD: 5,
    basePower: 40,
    baseCost: 3,
    effect: 'Deal damage based on your core stats. +20% damage if this is your first action.',
    scalingWith: ['power', 'attack_speed'],
    playstyleTag: 'Offensive Base',
    
    // Lagna shifts
    lagnaShifts: {
      1: { // Aries – aggressive
        name: 'Warrior Strike',
        effect: 'Fury builds – consecutive strikes deal +10% more (stacks 5x)',
        modifier: { power: 1.15, cooldown: -0.5 }
      },
      5: { // Leo – radiating
        name: 'Solar Strike',
        effect: 'Allies nearby gain +5% Power for 6s',
        modifier: { power: 1.2, cooldown: 0 }
      },
      // ... 12 total
    },
    
    // Nakshatra micro-shifts (within same Lagna)
    nakshatraTweaks: {
      light: { effect_bonus: 'Movement +10%', cooldown_delta: -0.3 },
      fierce: { effect_bonus: 'Damage +15%', cooldown_delta: +0.5 },
      sharp: { effect_bonus: 'Crit Chance +20%', cooldown_delta: 0 },
      fixed: { effect_bonus: 'Defense scales applied', cooldown_delta: 0 },
      soft: { effect_bonus: 'Ally healing nearby +5%', cooldown_delta: -0.2 },
      movable: { effect_bonus: 'Range +5m', cooldown_delta: -0.5 },
      mixed: { effect_bonus: 'All stats +5%', cooldown_delta: 0.2 }
    }
  },

  2: { // Resources / Wealth
    name: 'Harvest',
    description: 'Gather resources and wealth',
    icon: '💰',
    baseCD: 6,
    basePower: 25,
    baseCost: 2,
    effect: 'Generate gold/loot. Scales with number of passive effects.',
    scalingWith: ['passive_count', 'wealth_mods'],
    playstyleTag: 'Utility / Farming',
    
    lagnaShifts: {
      2: { // Taurus – stable wealth
        name: 'Abundant Harvest',
        effect: '+50% gold, stacking wealth bonus',
        modifier: { power: 1.2, cooldown: 0 }
      },
      7: { // Libra – balanced
        name: 'Fair Exchange',
        effect: 'Allies share +25% of gold earned this turn',
        modifier: { power: 1.1, cooldown: -0.5 }
      },
      // ...
    },
    
    nakshatraTweaks: {
      light: { effect_bonus: 'Speed of harvest doubled', cooldown_delta: -1 },
      fierce: { effect_bonus: 'Rare item chance +50%', cooldown_delta: 0.5 },
      // ...
    }
  },

  3: { // Communication / Speed
    name: 'Swift Echo',
    description: 'Quick multi-hit combo',
    icon: '⚡',
    baseCD: 3,
    basePower: 20,
    baseCost: 2,
    effect: 'Hit 3 times rapidly. Each hit has -33% cooldown.',
    scalingWith: ['speed', 'attack_speed'],
    playstyleTag: 'Combo Builder',
    
    lagnaShifts: {
      3: { // Gemini – versatile combos
        name: 'Variable Strikes',
        effect: 'Each hit can target different enemies or same enemy 3x',
        modifier: { power: 1.0, cooldown: -1 }
      },
      6: { // Virgo – precise
        name: 'Execution Combo',
        effect: '3rd hit execute bonus (50% more dmg if below 50% HP)',
        modifier: { power: 1.1, cooldown: -0.5 }
      },
      // ...
    }
  },

  4: { // Foundation / Stability
    name: 'Fortify',
    description: 'Strengthen defensive foundation',
    icon: '🛡️',
    baseCD: 7,
    basePower: 30,
    baseCost: 3,
    effect: 'Grant shield to self and allies. Scales with passive defense effects.',
    scalingWith: ['defense', 'shield_mods'],
    playstyleTag: 'Defense / Support',
    
    lagnaShifts: {
      4: { // Cancer – protective
        name: 'Lunar Shield',
        effect: 'Shield lasts 2 turns, allies in range also protected',
        modifier: { power: 1.3, cooldown: 0 }
      },
      10: { // Capricorn – enduring
        name: 'Mountain Wall',
        effect: 'Reflect 20% of blocked damage back',
        modifier: { power: 1.25, cooldown: 1 }
      },
      // ...
    }
  },

  5: { // Creativity / Expression
    name: 'Signature Move',
    description: 'Your unique expression ability',
    icon: '✨',
    baseCD: 4,
    basePower: 50,
    baseCost: 4,
    effect: 'Unleash unique power. Scales with card diversity (slots filled).',
    scalingWith: ['unique_skills', 'card_tier'],
    playstyleTag: 'Signature / Creative',
    
    lagnaShifts: {
      5: { // Leo – dominant expression
        name: 'Majestic Blast',
        effect: 'AoE 15m, allies gain +15% Power, enemies flee slightly',
        modifier: { power: 1.4, cooldown: -1 }
      },
      8: { // Scorpio – hidden expression
        name: 'Shadow Form',
        effect: 'Stealth + next attack 200% damage, reveal on hit',
        modifier: { power: 1.2, cooldown: 0 }
      },
      // ...
    }
  },

  6: { // Enemies / Conflict
    name: 'Counter Strike',
    description: 'React to enemy threats',
    icon: '🔥',
    baseCD: 4,
    basePower: 35,
    baseCost: 3,
    effect: 'Reactive strike with bonus damage vs high-threat targets.',
    scalingWith: ['enemy_threat', 'crit_chance'],
    playstyleTag: 'Reactive / PvP',
    
    lagnaShifts: {
      3: { // Gemini – fast counter
        name: 'Quick Riposte',
        effect: 'Retaliate immediately, cooldown -50%',
        modifier: { power: 0.9, cooldown: -2 }
      },
      6: { // Virgo – calculated counter
        name: 'Precision Parry',
        effect: 'Block next attack, instant counter for +150% damage',
        modifier: { power: 1.3, cooldown: 0 }
      },
      // ...
    }
  },

  7: { // Partnerships / Balance
    name: 'Allied Sync',
    description: 'Synchronize with allies',
    icon: '🤝',
    baseCD: 5,
    basePower: 30,
    baseCost: 2,
    effect: 'Coordinate with allies. Shared cooldown reduction, team buff.',
    scalingWith: ['ally_count', 'support_mods'],
    playstyleTag: 'Team Support',
    
    lagnaShifts: {
      7: { // Libra – perfect sync
        name: 'Perfect Coordination',
        effect: 'All allies cast next ability -50% cooldown, +25% damage',
        modifier: { power: 1.2, cooldown: 1 }
      },
      11: { // Aquarius – innovative sync
        name: 'Network Sync',
        effect: 'Share next ability with all allies (they can use it too)',
        modifier: { power: 1.15, cooldown: 2 }
      },
      // ...
    }
  },

  8: { // Transformation / Change
    name: 'Metamorphosis',
    description: 'Transform and adapt',
    icon: '🐉',
    baseCD: 8,
    basePower: 45,
    baseCost: 5,
    effect: 'Transform temporarily. Gain status immunity + stat boost.',
    scalingWith: ['transformation_rank', 'status_effects'],
    playstyleTag: 'Adaptation / Survival',
    
    lagnaShifts: {
      8: { // Scorpio – predatory transform
        name: 'Venomous Form',
        effect: 'Transform: Attacks apply poison, drain enemy Max HP per hit',
        modifier: { power: 1.3, cooldown: 1 }
      },
      12: { // Pisces – spiritual transform
        name: 'Spirit Form',
        effect: 'Become ethereal: Evade +50%, magic +50%, cooldown -30%',
        modifier: { power: 1.1, cooldown: -2 }
      },
      // ...
    }
  },

  9: { // Fortune / Expansion
    name: 'Fortune Strike',
    description: 'Strike with luck and momentum',
    icon: '🌟',
    baseCD: 6,
    basePower: 40,
    baseCost: 3,
    effect: 'Power strike. Chance to trigger critical hit chain.',
    scalingWith: ['luck_stat', 'crit_chance'],
    playstyleTag: 'Luck-based / Momentum',
    
    lagnaShifts: {
      9: { // Sagittarius – expansive luck
        name: 'Adventurer\'s Luck',
        effect: 'Random effect: Teleport behind enemy, 50% chance triple damage',
        modifier: { power: 1.25, cooldown: 0 }
      },
      2: { // Taurus – steady fortune
        name: 'Harvest Moon',
        effect: 'Guaranteed +25% damage, +50% loot from defeated enemies',
        modifier: { power: 1.2, cooldown: 1 }
      },
      // ...
    }
  },

  10: { // Authority / Discipline
    name: 'Command',
    description: 'Issue commanding authority',
    icon: '👑',
    baseCD: 7,
    basePower: 35,
    baseCost: 4,
    effect: 'Command enemies and allies. Stun or buff based on target.',
    scalingWith: ['leadership', 'cc_power'],
    playstyleTag: 'Control / Leadership',
    
    lagnaShifts: {
      10: { // Capricorn – iron discipline
        name: 'Absolute Authority',
        effect: 'Enemies freeze for 1s, allies gain +30% defense and damage',
        modifier: { power: 1.35, cooldown: 2 }
      },
      4: { // Cancer – protective command
        name: 'Guardian\'s Command',
        effect: 'Protect weakest ally from next attack, reflect 100% damage',
        modifier: { power: 1.1, cooldown: 0 }
      },
      // ...
    }
  },

  11: { // Gains / Achievement
    name: 'Momentum Build',
    description: 'Build momentum for greater gains',
    icon: '📈',
    baseCD: 5,
    basePower: 25,
    baseCost: 2,
    effect: 'Stack achievement bonuses. +5% per consecutive action (caps at 5x).',
    scalingWith: ['consecutive_turns', 'reward_mods'],
    playstyleTag: 'Scaling / Momentum',
    
    lagnaShifts: {
      11: { // Aquarius – infinite innovation
        name: 'Exponential Growth',
        effect: 'Bonus stacks cap at 10x, cooldown resets on 3rd hit',
        modifier: { power: 1.3, cooldown: -1 }
      },
      9: { // Sagittarius – expansive gains
        name: 'Abundance Flow',
        effect: 'Each stack grants +10% gold and XP earned',
        modifier: { power: 1.2, cooldown: 0 }
      },
      // ...
    }
  },

  12: { // Liberation / Transcendence
    name: 'Ultimate Charge',
    description: 'Channel transcendent power',
    icon: '⚡',
    baseCD: 10,
    basePower: 60,
    baseCost: 5,
    effect: 'Channel ultimate energy. Charge next Ultimate by 50%.',
    scalingWith: ['ultimate_charge', 'transcendence_level'],
    playstyleTag: 'Ultimate / Transcendence',
    
    lagnaShifts: {
      12: { // Pisces – mystical transcendence
        name: 'Transcendent Veil',
        effect: 'Immediate CC immunity for team, Ultimate charges 100% instantly',
        modifier: { power: 1.4, cooldown: 3 }
      },
      1: { // Aries – warrior transcendence
        name: 'Divine Fury',
        effect: 'Fury meter +100%, next ability breaks CC and deals +200% damage',
        modifier: { power: 1.5, cooldown: 2 }
      },
      // ...
    }
  }
};
```

---

## How House Actions Work

### **Scenario 1: Pure Passive Card (All 12 slots = buffs/healing)**

User slots:
- House 1-12: All support/passive skills (no direct damage)

**Fallback system kicks in:**
```
Player turn → No offensive skills available
System generates: House Action menu
├─ House 1 Core Strike: 40 power (baseline)
├─ House 3 Swift Echo: 20 power × 3 hits
├─ House 5 Signature Move: 50 power (unique expression)
├─ House 12 Ultimate Charge: 60 power + ultimate +50%
└─ ... (other houses)

Player picks House 5 Signature Move
Result: "Majestic Blast" fires (Leo Lagna shift applied)
```

---

### **Scenario 2: Mixed Card (Some skills, some passives)**

User slots:
- House 1: Fireball (active skill)
- House 5: Heal (active skill)
- House 12: Pure passive buff

**Available actions:**
```
Turn 1: Cast Fireball (House 1 skill)
Turn 2: Cast Heal (House 5 skill)
Turn 3: Cooldowns not ready, House Actions available
  → House 4 Fortify (shield support)
  → House 10 Command (control option)
  → House 12 Ultimate Charge (ultimate push)
```

---

### **Scenario 3: Card with Lagna Rotation**

Same card, but player rotates Lagna (Aries → Leo):

**Before (Aries Lagna):**
```
House 1 Core Strike = "Warrior Strike"
- Effect: Fury stacks +10% per hit
- CD: 5s - 0.5s = 4.5s
- Power: 40 × 1.15 = 46
```

**After (Leo Lagna):**
```
House 1 Core Strike = "Solar Strike"
- Effect: Allies gain +5% Power buff nearby
- CD: 5s + 0s = 5s
- Power: 40 × 1.2 = 48
```

**Same card, completely different playstyle!**

---

## Implementation Details

### **Stat Scaling**
Each House Action scales with card state:
```javascript
function getHouseActionStats(houseIndex, card) {
  const action = HOUSE_ACTIONS[houseIndex];
  const lagna = LAGNA_GAME_DATA[currentLagna];
  const nakshatra = getNakshatraForDegree(currentLagna, currentLagnaDegree);
  
  // Lagna shifts the action
  const lagnaShift = action.lagnaShifts[currentLagna] || {};
  
  // Nakshatra tweaks the values
  const nakshatraTweak = action.nakshatraTweaks[nakshatra.nakshatra.quality] || {};
  
  // Calculate final stats
  let power = action.basePower * (lagnaShift.modifier?.power || 1);
  let cooldown = action.baseCD + (lagnaShift.modifier?.cooldown || 0) + (nakshatraTweak.cooldown_delta || 0);
  
  return {
    name: lagnaShift.name || action.name,
    power: Math.round(power),
    cooldown: Math.max(1, cooldown),
    cost: action.baseCost,
    effect: lagnaShift.effect || action.effect,
    effectBonus: nakshatraTweak.effect_bonus || '',
    icon: action.icon
  };
}
```

### **When House Actions Are Available**
```javascript
function getAvailableHouseActions(card) {
  const actions = [];
  
  // All 12 houses always provide fallback actions
  for (let i = 0; i < 12; i++) {
    // Check if house slot is filled with a skill
    if (!card.slottedGlyphs[i]) {
      // Empty slot → House Action available
      actions.push(getHouseActionStats(i, card));
    }
  }
  
  return actions;
}
```

---

## UI Presentation

### **Card View: Action Bar**
```
┌─ YOUR CARD: Passive Build ─────────────────────┐
│ Slotted Skills:                                  │
│ ├─ House 1: [Empty] → House Action: Core Strike │
│ ├─ House 2: Heal                                │
│ ├─ House 3: [Empty] → House Action: Swift Echo  │
│ ├─ House 5: [Empty] → House Action: Solar Blast │
│ └─ ... (others)                                 │
│                                                 │
│ Available Actions This Turn:                    │
│ ├─ Core Strike (40 ⚡) - Attack              │
│ ├─ Swift Echo (20×3 ⚡) - Combo              │
│ ├─ Solar Blast (50 ⚡) - AoE                 │
│ └─ Ultimate Charge (60 ⚡) - Utility         │
│                                                 │
│ Select Action: [Core Strike v]                 │
└──────────────────────────────────────────────┘
```

---

## Benefits

✅ **No Dead Cards** — All-passive cards have fallback damage  
✅ **Playstyle Flexibility** — User can build pure support, pure damage, or hybrid  
✅ **Lagna Synergy** — House Actions shift with Lagna rotation  
✅ **No Wasted Slot** — Empty houses contribute meaningful options  
✅ **Discovery** — Players learn house purposes through actions  
✅ **Strategic Depth** — Choosing which house to leave empty becomes tactical  

---

## Example: Pure Support Card Gains Teeth

**Card Setup:**
```
House 1: Heal
House 2: Buff
House 3: Heal
House 4: Shield
House 5: Damage Buff
House 6: Debuff Enemy
House 7: Ally Sync
House 8: Transform (ally)
House 9: Fortune (buff)
House 10: Command
House 11: Momentum
House 12: Ultimate Charge (pure passive)
```

**Without House Actions:** Card is 100% support, zero damage (feels weak)

**With House Actions:**
```
Turn 1-3: Cast support skills, build team buffs
Turn 4: No more active skills ready
→ Cast House 12 Ultimate Charge (60 ⚡ + 50% ult charge)
→ Team Ultimate meter fills massively
→ Team casts devastasting Ultimate using energy you charged

Result: Support card enables team dominance!
```

**The card isn't weak, it's a TEAM MULTIPLIER.**
