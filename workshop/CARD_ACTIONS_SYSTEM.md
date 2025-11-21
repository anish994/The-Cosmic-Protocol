# Card Actions System – 12 Base Card-Level Actions

## Core Concept

**SEPARATE from skill slots.** Every card has **12 always-available actions** that:
- **Base power/cooldown** (foundation level)
- **Amplified by Lagna/Nakshatra/House/Planet modifiers**
- **Amplified by card's elemental composition** (fire count, water count, etc.)
- **Scale with card stats** (power, defense, speed, versatility)

User always has 12 + N slotted skills = unlimited tactical depth.

---

## 12 Base Card Actions

```javascript
const CARD_ACTIONS = {
  
  // ===== 1. ATTACK (Offensive Base) =====
  ATTACK: {
    name: 'Attack',
    description: 'Strike with your card\'s combined power',
    icon: '⚔️',
    type: 'offensive',
    basePower: 'card_power_total',  // Scales with total card power
    baseCD: 3,
    baseCost: 2,
    effect: 'Deal damage based on card\'s slotted skills power.',
    
    // How modifiers affect it
    scalingFormula: {
      power: 'sum_of_slotted_skills_power × lagna_mult × element_bonus',
      cooldown: 'base_cd + nakshatra_cd_mod + planet_cd_mod',
      crit_chance: 'card_crit_stat + nakshatra_sharp_bonus'
    },
    
    // Elemental amplification
    elementAmplification: {
      fire: { power_bonus: 0.15, crit_bonus: 0.10 },      // +15% power, +10% crit
      water: { power_bonus: 0.10, healing_bonus: 0.20 },  // +10% power, +20% healing
      earth: { power_bonus: 0.05, defense_bonus: 0.15 },  // +5% power, +15% def
      air: { power_bonus: 0.10, speed_bonus: 0.20 },      // +10% power, +20% speed
      lightning: { power_bonus: 0.25, crit_bonus: 0.15 }, // +25% power, +15% crit
      ice: { power_bonus: 0.10, slow_bonus: 0.10 },       // +10% power, +10% slow
      light: { power_bonus: 0.20, heal_bonus: 0.10 },     // +20% power, heal allies
      dark: { power_bonus: 0.20, drain_bonus: 0.10 }      // +20% power, drain HP
    },
    
    // Lagna shifts
    lagnaShifts: {
      1: { name: 'Aries Attack', effect: 'First strike +30% damage', modifier: { power: 1.15, cd: -0.5 } },
      5: { name: 'Leo Attack', effect: 'AoE +25%, allies +10% power', modifier: { power: 1.2, cd: 0 } },
      // ... 12 total
    }
  },

  // ===== 2. DEFEND (Defensive Base) =====
  DEFEND: {
    name: 'Defend',
    description: 'Raise defensive barriers',
    icon: '🛡️',
    type: 'defensive',
    basePower: 'card_defense_total',  // Based on defense stat
    baseCD: 4,
    baseCost: 2,
    effect: 'Grant shield. Scales with card defense and passive effects.',
    
    scalingFormula: {
      shield: 'sum_of_card_defense × lagna_def_mult × element_bonus',
      cooldown: 'base_cd + nakshatra_cd_mod',
      reflection: 'if_earth_dominant_+_reflection%'
    },
    
    elementAmplification: {
      earth: { shield_bonus: 0.30, reflection: 0.20 },    // +30% shield, 20% reflect
      water: { shield_bonus: 0.20, regen: 0.15 },         // +20% shield, heal regen
      fire: { shield_bonus: 0.10, counter_dmg: 0.15 },    // +10% shield, counter dmg
      air: { shield_bonus: 0.10, evasion: 0.20 },         // +10% shield, +20% evasion
      light: { shield_bonus: 0.15, cleanse: true },       // +15% shield, cleanse status
      dark: { shield_bonus: 0.10, absorb: 0.10 }          // +10% shield, absorb dmg
    },
    
    lagnaShifts: {
      4: { name: 'Cancer Defend', effect: 'Shield +2 turns, allies protected', modifier: { shield: 1.3, cd: 0 } },
      10: { name: 'Capricorn Defend', effect: 'Reflect 20% damage back', modifier: { shield: 1.25, cd: 1 } },
      // ... 12 total
    }
  },

  // ===== 3. SUMMON (Support Base) =====
  SUMMON: {
    name: 'Summon',
    description: 'Call allies or minions',
    icon: '👥',
    type: 'support',
    basePower: 'card_support_total',  // Based on support/buff effects
    baseCD: 6,
    baseCost: 3,
    effect: 'Summon ally or familiar. Strength based on card power.',
    
    scalingFormula: {
      minion_power: 'card_total_power × 0.5 × support_mult',
      summon_count: 'number_of_passive_effects / 3',
      cooldown: 'base_cd + nakshatra_summoning_mod'
    },
    
    elementAmplification: {
      fire: { summon_damage: 0.25, summon_aggro: true },       // Fire minion attacks +25%
      water: { summon_healing: 0.30, summon_sustain: true },   // Water minion heals +30%
      earth: { summon_defense: 0.40, summon_tank: true },      // Earth minion defense +40%
      air: { summon_speed: 0.30, summon_multi: true },         // Air summon +2 extras
      light: { summon_healing: 0.20, purify_aura: true },      // Light cleanses nearby
      dark: { summon_drain: 0.25, steal_stats: true }          // Dark steals enemy stats
    },
    
    lagnaShifts: {
      7: { name: 'Libra Summon', effect: 'Summon 2 balanced allies', modifier: { summon: 2, cd: 1 } },
      9: { name: 'Sagittarius Summon', effect: 'Summon +1, increased damage', modifier: { summon: 1.5, damage: 1.3 } },
      // ... 12 total
    }
  },

  // ===== 4. HEAL (Restoration Base) =====
  HEAL: {
    name: 'Heal',
    description: 'Restore health',
    icon: '💚',
    type: 'support',
    basePower: 'card_healing_total',
    baseCD: 5,
    baseCost: 2,
    effect: 'Heal self or target. Scales with passive healing effects.',
    
    scalingFormula: {
      healing: 'sum_of_healing_keywords × lagna_heal_mult × element_bonus',
      aoe_range: 'if_multiple_heals_in_card → larger_range'
    },
    
    elementAmplification: {
      water: { healing: 0.40, range: 1.5 },               // +40% healing, larger range
      light: { healing: 0.30, cleanse: true },            // +30% healing, cleanse buffs
      earth: { healing: 0.15, shield_effect: true },      // +15% healing + shield
      fire: { healing: 0.10, burn_allies: true }          // +10% healing but burn allies
    },
    
    lagnaShifts: {
      4: { name: 'Cancer Heal', effect: 'Heal +team+, shield combo', modifier: { healing: 1.4, cd: 0 } },
      12: { name: 'Pisces Heal', effect: 'Heal allies +30%, team buff', modifier: { healing: 1.35, cd: 0.5 } },
      // ... 12 total
    }
  },

  // ===== 5. BUFF (Empowerment Base) =====
  BUFF: {
    name: 'Buff',
    description: 'Enhance stats and abilities',
    icon: '📈',
    type: 'support',
    basePower: 'card_buff_total',
    baseCD: 4,
    baseCost: 2,
    effect: 'Grant stat bonuses. Scales with card passives.',
    
    scalingFormula: {
      buff_power: 'num_of_passive_effects × 5%',  // More passives = stronger buff
      duration: 'lagna_duration_mod',
      range: 'if_team_synergies_exist → larger_range'
    },
    
    elementAmplification: {
      fire: { power_buff: 0.30, attack_speed: 0.20 },     // +30% power buff
      air: { speed_buff: 0.30, cooldown_buff: -0.20 },    // +30% speed, -20% CD
      light: { all_stats: 0.20, crit: 0.15 },             // +20% all, +15% crit
      earth: { defense_buff: 0.30, stability: true },      // +30% defense
      water: { healing_buff: 0.25, sustain: true }         // +25% healing
    },
    
    lagnaShifts: {
      5: { name: 'Leo Buff', effect: 'Team +15% power, AoE buff', modifier: { buff: 1.3, cd: 0 } },
      11: { name: 'Aquarius Buff', effect: 'Unique buff stacking', modifier: { buff: 1.25, cd: -1 } },
      // ... 12 total
    }
  },

  // ===== 6. DEBUFF (Weakening Base) =====
  DEBUFF: {
    name: 'Debuff',
    description: 'Weaken enemies',
    icon: '💀',
    type: 'offensive',
    basePower: 'card_crowd_control_total',
    baseCD: 5,
    baseCost: 3,
    effect: 'Apply debuffs to enemies. Scales with CC and negative effects.',
    
    scalingFormula: {
      debuff_power: 'num_of_debuff_keywords × strength',
      duration: 'lagna_duration_mod'
    },
    
    elementAmplification: {
      dark: { debuff_power: 0.40, drain: 0.20 },          // +40% debuff power, drain
      lightning: { debuff_power: 0.30, stun_chance: 0.15 },// +30% debuff, stun
      ice: { debuff_power: 0.25, slow: 0.30 },            // +25% debuff, slow stacks
      earth: { debuff_power: 0.10, rooted: true }          // Root effect
    },
    
    lagnaShifts: {
      6: { name: 'Virgo Debuff', effect: 'Precise debuffs, execute low HP', modifier: { debuff: 1.3, cd: -0.5 } },
      8: { name: 'Scorpio Debuff', effect: 'Poison + drain, stacking', modifier: { debuff: 1.4, cd: 0 } },
      // ... 12 total
    }
  },

  // ===== 7. ULTIMATE (Power Surge) =====
  ULTIMATE: {
    name: 'Ultimate',
    description: 'Unleash card\'s ultimate ability',
    icon: '⚡',
    type: 'offensive',
    basePower: 'card_power_total × 2',  // Double power
    baseCD: 10,
    baseCost: 5,
    effect: 'Channel ultimate. Devastates area. Requires ultimate meter charge.',
    
    scalingFormula: {
      power: 'card_total_power × 2 × element_multiplier × lagna_ultimate_mult',
      charge_time: 'based_on_house_12_passives'
    },
    
    elementAmplification: {
      fire: { aoe: 20, power: 2.5 },                       // 20m AoE, 2.5× power
      lightning: { chain: 5, power: 2.3 },                 // Chain to 5 enemies
      light: { team_empower: 1.5, heal_team: true },       // Team +50% power + heal
      dark: { single_target: true, power: 3.0 }            // Single target 3× power
    },
    
    lagnaShifts: {
      5: { name: 'Leo Ultimate', effect: 'Massive AoE, team +30% power', modifier: { power: 2.8, aoe: 25 } },
      12: { name: 'Pisces Ultimate', effect: 'CC immunity team, instant full charge', modifier: { power: 2.5, charge: 1.0 } },
      // ... 12 total
    }
  },

  // ===== 8. DODGE (Evasion Base) =====
  DODGE: {
    name: 'Dodge',
    description: 'Evade incoming attacks',
    icon: '💨',
    type: 'defensive',
    basePower: 'card_speed_total',
    baseCD: 3,
    baseCost: 1,
    effect: 'Increase evasion. Scales with speed and air elements.',
    
    scalingFormula: {
      evasion_chance: 'card_speed × 0.5 + air_element_bonus',
      cooldown: 'base_cd - nakshatra_light_quality_bonus'
    },
    
    elementAmplification: {
      air: { evasion: 0.50, counterattack: 0.20 },        // +50% evasion, counter
      lightning: { evasion: 0.30, chain_dodge: true },    // Dodge chains to allies
      fire: { evasion: 0.15, counter_damage: 0.30 }       // Counter with damage
    },
    
    lagnaShifts: {
      3: { name: 'Gemini Dodge', effect: 'Fast dodge, chain to allies', modifier: { evasion: 1.4, cd: -1 } },
      9: { name: 'Sagittarius Dodge', effect: 'Dodge + teleport behind enemy', modifier: { evasion: 1.3, cd: -0.5 } },
      // ... 12 total
    }
  },

  // ===== 9. STEAL (Thievery Base) =====
  STEAL: {
    name: 'Steal',
    description: 'Steal enemy resources or buffs',
    icon: '🎁',
    type: 'utility',
    basePower: 'card_speed_total',
    baseCD: 6,
    baseCost: 2,
    effect: 'Steal gold, items, or enemy buffs.',
    
    scalingFormula: {
      steal_amount: 'enemy_wealth × percentage + card_loot_bonus',
      buff_steal: 'if_dark_elements → steal_enemy_buffs'
    },
    
    elementAmplification: {
      dark: { steal_power: 0.40, buff_steal: true },      // Steal buffs too
      air: { steal_chance: 0.30, success_rate: 1.3 },     // +30% steal chance
      light: { steal_power: 0.10, share_with_team: true } // Share stolen with team
    },
    
    lagnaShifts: {
      2: { name: 'Taurus Steal', effect: 'Steal wealth, stack bonus', modifier: { steal: 1.4, cd: 0 } },
      8: { name: 'Scorpio Steal', effect: 'Steal buffs + drain HP', modifier: { steal: 1.5, cd: 1 } },
      // ... 12 total
    }
  },

  // ===== 10. COMBINE (Fusion Base) =====
  COMBINE: {
    name: 'Combine',
    description: 'Merge slotted skills temporarily',
    icon: '⚛️',
    type: 'special',
    basePower: 'average_of_all_slots',
    baseCD: 8,
    baseCost: 4,
    effect: 'Combine all slotted skills\' effects into one mega-ability.',
    
    scalingFormula: {
      combined_power: 'sum_of_all_slotted_skills_power × 0.7 + lagna_fusion_mult',
      duration: 'based_on_nakshatra_fusion_bonus'
    },
    
    elementAmplification: {
      fire: { power: 1.8, damage_type: 'fire' },           // 1.8× power, fire damage
      water: { power: 1.5, healing: 0.20 },               // 1.5× power, heal per hit
      earth: { power: 1.6, durability: 0.30 },            // 1.6× power, +30% durability
      light: { power: 1.7, team_effect: 0.20 },           // 1.7× power, team buff
      mixed: { power: 2.0, versatile: true }              // 2.0× if mixed elements
    },
    
    lagnaShifts: {
      5: { name: 'Leo Combine', effect: 'All skills + AoE + team buff', modifier: { power: 2.2, range: 1.5 } },
      10: { name: 'Capricorn Combine', effect: 'All skills + shield + reflect', modifier: { power: 1.9, defense: 1.3 } },
      // ... 12 total
    }
  },

  // ===== 11. TRANSFORM (Adaptation Base) =====
  TRANSFORM: {
    name: 'Transform',
    description: 'Shift card form or mode',
    icon: '🐉',
    type: 'special',
    basePower: 'card_power_total',
    baseCD: 7,
    baseCost: 4,
    effect: 'Transform into different form. Shift stats and abilities.',
    
    scalingFormula: {
      transformation_power: 'lagna_transformation_mult × element_bonus',
      duration: 'based_on_card_synergies'
    },
    
    elementAmplification: {
      fire: { form: 'Blazing', power: 1.4, attack_speed: 0.30 },   // Aggressive form
      water: { form: 'Flowing', healing: 0.40, sustain: true },    // Healing form
      earth: { form: 'Stone', defense: 0.50, tank: true },         // Tank form
      air: { form: 'Ethereal', speed: 0.50, evasion: 0.20 },       // Speed form
      dark: { form: 'Shadow', drain: 0.30, stealth: true },        // Stealth form
      light: { form: 'Radiant', power: 1.3, cleanse: true }        // Support form
    },
    
    lagnaShifts: {
      8: { name: 'Scorpio Transform', effect: 'Shadow form, drain + stealth', modifier: { form: 'Shadow', drain: 0.4 } },
      12: { name: 'Pisces Transform', effect: 'Spirit form, ethereal + magic', modifier: { form: 'Spirit', evasion: 0.5 } },
      // ... 12 total
    }
  },

  // ===== 12. SACRIFICE (Desperation Base) =====
  SACRIFICE: {
    name: 'Sacrifice',
    description: 'Trade health for power',
    icon: '⚠️',
    type: 'offensive',
    basePower: 'card_power_total × 1.5',
    baseCD: 6,
    baseCost: 5,
    effect: 'Spend health to unleash devastating power. Risk/reward.',
    
    scalingFormula: {
      power: 'card_power × (1 + health_spent_percent) × element_mult',
      health_cost: 'card_max_health × 0.25'
    },
    
    elementAmplification: {
      dark: { power: 2.0, drain_recovery: 0.30 },         // 2× power, drain HP back
      fire: { power: 1.8, critical: 1.5 },                // 1.8× power, guaranteed crit
      lightning: { power: 1.7, chain: 5 },                // Chain to 5 enemies
      light: { power: 1.5, team_gets_buff: true }         // Buff entire team instead
    },
    
    lagnaShifts: {
      8: { name: 'Scorpio Sacrifice', effect: 'High power drain + revive', modifier: { power: 2.3, revive: 0.5 } },
      1: { name: 'Aries Sacrifice', effect: 'Fury + guaranteed crit', modifier: { power: 2.0, crit: 1.0 } },
      // ... 12 total
    }
  }
};
```

---

## How It Works

### **Example: Fire Card (3 Fire skills slotted)**

**Base Attack action:**
- Power: 50 (base card power)
- CD: 3s
- Effect: "Strike with combined power"

**With Fire elemental amplification:**
```
Power: 50 × 1.15 (fire bonus) = 57.5
Crit: base_crit + 10% = increased
Effect: "Strike amplified by flames, +15% damage on crits"
```

**With Leo Lagna active:**
```
Power: 57.5 × 1.2 (Leo modifier) = 69
Effect: "Strike amplified by flames, nearby allies +10% power"
CD: 3s + 0 (Leo doesn't change it) = 3s
```

**With Krittika Nakshatra (Sun ruled):**
```
Power: 69 × 1.05 (Nakshatra tweak) = 72.45
Crit: +20% (Sharp quality)
Effect: "Strike amplified by cosmic flames, +20% crit"
```

---

## UI Presentation

### **Card Actions Bar (Always Available)**

```
┌─ CARD ACTIONS (Available Every Turn) ─────────────┐
│                                                    │
│ ⚔️ Attack (72⚡) | 🛡️ Defend (45) | 👥 Summon    │
│ 💚 Heal (55) | 📈 Buff | 💀 Debuff | ⚡ Ultimate  │
│ 💨 Dodge | 🎁 Steal | ⚛️ Combine | 🐉 Transform  │
│ ⚠️ Sacrifice                                      │
│                                                    │
│ [Select Action: Attack v]                        │
│                                                    │
└────────────────────────────────────────────────────┘
```

---

## Implementation

```javascript
function getCardActions(card) {
  const actions = {};
  const elementalBonus = getElementalComposition(card);
  
  Object.entries(CARD_ACTIONS).forEach(([key, action]) => {
    const lagnaShift = action.lagnaShifts[currentLagna] || {};
    const nakshatraTweak = action.nakshatraModifiers?.[nakshatra.quality] || {};
    
    // Calculate power
    let power = action.basePower;
    if (typeof power === 'string') {
      // Dynamic: card_power_total, etc.
      power = evaluateFormulaForCard(card, power);
    }
    
    power *= (lagnaShift.modifier?.power || 1);
    power *= getElementalBonusForAction(action, elementalBonus);
    
    // Apply to card
    actions[key] = {
      name: lagnaShift.name || action.name,
      power: Math.round(power),
      cooldown: action.baseCD + (lagnaShift.modifier?.cooldown || 0),
      cost: action.baseCost,
      effect: lagnaShift.effect || action.effect,
      icon: action.icon
    };
  });
  
  return actions;
}
```

---

## Benefits

✅ **Always have 12 fallback actions** — never feel limited  
✅ **Elemental system matters** — fire cards get fire bonuses  
✅ **Lagna rotation changes playstyle** — same card plays differently  
✅ **No wasted card state** — even all-passive cards have powerful actions  
✅ **Strategic variety** — choose different actions for different situations  
✅ **Deep synergy potential** — combine 12 skills + 12 actions = massive depth
