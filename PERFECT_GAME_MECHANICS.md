# ⚡ PERFECT GAME MECHANICS - Complete Skill Design Framework

## 🎮 Core Design Philosophy

Every skill must have:
1. **Clear purpose** - What problem does it solve?
2. **Exact numbers** - Damage, cooldown, cost all precise
3. **Strategic tradeoffs** - Cost vs power, range vs duration
4. **Synergy potential** - How does it combo with others?
5. **Counter play** - What beats this skill?

---

## 📊 SKILL ARCHETYPES & PERFECT MECHANICS

### 1️⃣ DAMAGE SKILLS (Offense)
**Purpose:** Deal burst or sustained damage

#### Perfect Mechanics Framework
```
BURST DAMAGE SKILL (Single Hit)
├─ Base Damage Formula: Power_Tier × 20
│  ├─ Tier 1 = 20 damage
│  ├─ Tier 2 = 40 damage  
│  ├─ Tier 3 = 60 damage
│  ├─ Tier 4 = 80 damage (Epic)
│  └─ Tier 5 = 100 damage (Legendary)
│
├─ Range: 8-15 meters (typical)
├─ Cooldown: 6-10 seconds
├─ Mana Cost: 25-40 (lower tier) to 60-100 (higher tier)
├─ Crit Chance: 15-25%
├─ Crit Multiplier: 1.5x damage
└─ Strategic Element: Fast, punchy, predictable

AOE DAMAGE SKILL (Area Effect)
├─ Base Damage: Power_Tier × 15 (reduced from single-target)
├─ Radius: 3-6 meters (scales with power)
├─ Duration: Instant or 2-3 second window
├─ Falloff: 80% damage at edge (or flat)
├─ Cooldown: 10-15 seconds (longer for AOE)
├─ Mana Cost: 40-80 (more expensive than burst)
└─ Strategic Element: Control space, punish clusters

CHANNELED DAMAGE (Over Time)
├─ Tick Damage: 5-10 per tick
├─ Tick Rate: Every 0.5-1 second
├─ Duration: 5-10 seconds
├─ Total Damage: (Damage × Duration) = 25-100 total
├─ Interrupt Cost: Break channel = lose DPS
├─ Cooldown: 8-12 seconds (after channel ends)
├─ Mana Cost: 30 (upfront), can add drain per tick
└─ Strategic Element: High risk, high reward, interruptible
```

#### Example: Perfect Damage Skill
```json
{
  "name": "Piercing Strike",
  "type": "offensive",
  "power_tier": 3,
  
  "mechanics": {
    "damage": 60,
    "damage_formula": "base × crit_multiplier",
    "crit_chance": 0.20,
    "crit_multiplier": 1.5,
    "range": 12,
    "impact_radius": 1.5
  },
  
  "cost": {
    "type": "mana",
    "amount": 35
  },
  
  "cooldown": 8,
  
  "tradeoffs": [
    "High single-target damage",
    "Can't affect groups",
    "Telegraphed (predictable timing)"
  ],
  
  "counter_play": [
    "Dodge sideways before impact",
    "Block with shield",
    "Bait the cooldown"
  ]
}
```

---

### 2️⃣ CONTROL SKILLS (Crowd Control)

**Purpose:** Disable enemies, control battlefield

#### Perfect Mechanics Framework
```
STUN SKILL (Lock target completely)
├─ Duration: 1-3 seconds
│  ├─ Short stun (1s) = tactical pause
│  ├─ Medium stun (2s) = combo setup
│  └─ Long stun (3s) = game changer
│
├─ Cooldown: 12-20 seconds (longer than damage)
├─ Mana Cost: 50-80 (more expensive)
├─ Range: 6-10 meters
├─ Can stun: Players, bosses (reduced), minions ✓
├─ Resistance: Each stun in 10s = +20% stun resist (builds)
└─ Strategic Element: Save for combos, bait defenses

SLOW SKILL (Reduce movement speed)
├─ Speed Reduction: 30-50%
├─ Duration: 3-5 seconds (lasts longer than stun)
├─ Stacks: Multiple slows = multiplicative reduction
│  ├─ 1 slow = 40% reduction
│  ├─ 2 slows = 60% reduction (1 - 0.6×0.6)
│  └─ 3 slows = 74% reduction (near-lock)
│
├─ Cooldown: 6-10 seconds
├─ Mana Cost: 30-50 (cheaper than stun)
├─ Range: 8-12 meters
└─ Strategic Element: Setup for big ability or catch runner

ROOT SKILL (Prevent movement only)
├─ Duration: 2-4 seconds
├─ They can still: Attack, cast, use abilities
├─ Range: 6-10 meters
├─ Cooldown: 10-15 seconds
├─ Mana Cost: 40-70
├─ Strategic Element: Stop retreat, set up trap

KNOCKBACK SKILL (Force displacement)
├─ Distance: 3-6 meters
├─ Cooldown Recovery: 0.5s after landing
├─ Can knock off ledges: Yes (situational powerplay)
├─ Uses:
│  ├─ Break formations
│  ├─ Disrupt channels
│  ├─ Escape tool
│  └─ Situational advantage
│
├─ Cooldown: 8-12 seconds
├─ Mana Cost: 35-60
└─ Strategic Element: Utility control, positioning
```

#### Example: Perfect Control Skill
```json
{
  "name": "Paralyzing Strike",
  "type": "control",
  "power_tier": 3,
  
  "mechanics": {
    "effect": "stun",
    "duration": 2.0,
    "range": 10,
    "can_interrupt_channel": true,
    "resist_buildup": true,
    "resist_per_application": 0.20
  },
  
  "cost": { "type": "mana", "amount": 60 },
  "cooldown": 14,
  
  "strategic_use": [
    "Follow up burst damage",
    "Interrupt enemy ultimate",
    "Chain with ally abilities",
    "Save for critical moment"
  ],
  
  "counter_play": [
    "Stun resistance grows (soft counter)",
    "CC cleanse removes effect",
    "Stay out of range (10m)",
    "Dodge/block before landing"
  ]
}
```

---

### 3️⃣ DEFENSE SKILLS (Protection)

**Purpose:** Reduce damage, protect allies, survive longer

#### Perfect Mechanics Framework
```
SHIELD SKILL (Temporary barrier)
├─ Shield Amount: 30-100 HP (scales with power)
│  ├─ Tier 1 = 20 shield
│  ├─ Tier 2 = 40 shield
│  ├─ Tier 3 = 60 shield
│  ├─ Tier 4 = 80 shield
│  └─ Tier 5 = 120 shield
│
├─ Duration: 5-10 seconds (expires after time OR damage)
├─ Can stack: Yes (multiple shields = multiple values)
├─ Interactions:
│  ├─ Absorbs ALL damage (but expires first)
│  ├─ Breakable (if damage > shield = leftover goes through)
│  └─ Refreshable (casting again before expiry = new timer)
│
├─ Cooldown: 8-12 seconds
├─ Mana Cost: 40-70
├─ Range: 10m (can shield others)
└─ Strategic Element: Burst mitigation, ally protection

DAMAGE REDUCTION BUFF
├─ Reduction: 20-40% (multiplicative with shields)
├─ Duration: 3-6 seconds
├─ Stack Limit: Max 3 instances (prevents spam immunity)
├─ Interactions: Works with shield (double protection)
├─ Cooldown: 10-15 seconds
├─ Mana Cost: 50-80
└─ Strategic Element: Ongoing defense, tactical timing

REFLECT SKILL (Bounce damage back)
├─ Reflect Amount: 30-60% of blocked damage
├─ Duration: 3-5 seconds
├─ Interactions:
│  ├─ Doesn't prevent damage (you still take it)
│  ├─ Attacker also takes reflected damage
│  ├─ Stacks with shield (shield blocks, reflect bounces)
│  └─ Triggers after shield expires
│
├─ Cooldown: 12-18 seconds
├─ Mana Cost: 60-100
└─ Strategic Element: Offensive defense, punishes aggression

HEAL SKILL (Restore HP)
├─ Healing Amount: 30-100 HP (scales with power)
├─ Instant vs Over Time:
│  ├─ Instant Heal: Full amount immediate
│  ├─ HOT: 5-20 per tick over 5-10 seconds
│  └─ Burst Heal: Large amount with long cooldown
│
├─ Can overheal: Yes (up to max HP only)
├─ Cooldown: 10-15 seconds
├─ Mana Cost: 50-100
├─ Range: 15m (can heal allies)
├─ Global Cooldown: 0.5s between heals (prevent spam)
└─ Strategic Element: Sustain, reactive defense, team utility
```

#### Example: Perfect Defense Skill
```json
{
  "name": "Temporal Shield",
  "type": "defensive",
  "power_tier": 3,
  
  "mechanics": {
    "effect": "shield",
    "shield_amount": 60,
    "duration": 7,
    "can_refresh": true,
    "stack_limit": 2,
    "breakable": true
  },
  
  "cost": { "type": "mana", "amount": 50 },
  "cooldown": 10,
  
  "strategic_depth": [
    "Refresh before expiry for extended protection",
    "Stack with damage reduction buff",
    "Timing critical in burst trades",
    "Position matters (predictable to interrupt)"
  ],
  
  "interactions": {
    "with_other_shields": "Additive (60 + 60 = 120 total)",
    "with_damage_reduction": "Multiplicative (shield absorbs first, then reduction)",
    "with_healing": "Separate pools (shield doesn't block healing)"
  }
}
```

---

### 4️⃣ UTILITY SKILLS (Support/Enhancement)

**Purpose:** Buff allies, debuff enemies, provide utility

#### Perfect Mechanics Framework
```
BUFF SKILL (Enhance ally stats)
├─ Buff Types:
│  ├─ Damage Buff: +20-40% damage for 5-10s
│  ├─ Speed Buff: +30-50% move speed for 5-10s
│  ├─ Attack Speed: +20-30% attack/cast speed
│  ├─ Crit Chance: +15-25% crit rate
│  └─ Resource Buff: Reduce cooldowns by 20-30%
│
├─ Duration: 5-10 seconds
├─ Stack Limit: Usually 1 type (no spam stacking)
├─ Can refresh: Yes (newer buff replaces older)
├─ Cooldown: 12-15 seconds
├─ Mana Cost: 40-70
├─ Range: 12-15m (team enhancement)
└─ Strategic Element: Force multiplier, team coordination

DEBUFF SKILL (Weaken enemy)
├─ Debuff Types:
│  ├─ Vulnerability: +25-50% damage taken
│  ├─ Weakness: -30-40% damage output
│  ├─ Brittle: Crit damage taken +30-50%
│  ├─ Exposed: Armor removed (take +40% damage)
│  └─ Cursed: Healing reduced by 30-50%
│
├─ Duration: 5-8 seconds
├─ Stack Limit: 1-2 max (prevent perma-debuff)
├─ Cooldown: 10-14 seconds
├─ Mana Cost: 35-60
├─ Range: 10-12m
└─ Strategic Element: Execution setup, amplify burst

MOBILITY SKILL (Movement utility)
├─ Dash/Blink:
│  ├─ Distance: 8-15 meters
│  ├─ Duration: 0.5 second (instant)
│  ├─ Can go through obstacles: Yes/No (design choice)
│  ├─ Leaves trail: Optional visual indicator
│  └─ Can attack mid-dash: Risky reward
│
├─ Teleport:
│  ├─ Distance: 10-20m (longer range)
│  ├─ Delay: 0.2-0.5s (telegraph position)
│  ├─ Can be interrupted: Yes (before landing)
│  └─ Cooldown: 12-18s (longer for teleport)
│
├─ Cooldown: 8-12 seconds (dash), 12-18s (teleport)
├─ Mana Cost: 30-60
└─ Strategic Element: Escape/engage, positioning plays

CLEANSE SKILL (Remove negative effects)
├─ Cleanse Types:
│  ├─ Self Cleanse: Remove all debuffs on self
│  ├─ Ally Cleanse: Remove debuffs from teammate
│  ├─ Group Cleanse: Remove from nearby allies
│  └─ Specific Cleanse: Remove only stuns/slows/etc
│
├─ Cooldown: 15-20 seconds (prevent spam)
├─ Mana Cost: 50-80
├─ Can cleanse: Stun, slow, root, debuffs (usually NOT disarm)
├─ Range: 15m (team support)
└─ Strategic Element: Counter hard CC, save teammates
```

---

### 5️⃣ DEPLOYABLE SKILLS (Structures/Summons)

**Purpose:** Place persistent effects on battlefield

#### Perfect Mechanics Framework
```
TURRET/TOWER (Automated attacker)
├─ Structure Stats:
│  ├─ HP: 60-150 (based on power tier)
│  ├─ Damage per shot: 15-30
│  ├─ Attack speed: 1 shot per 1-2 seconds
│  ├─ Range: 10-15 meters
│  ├─ Build time: 1-2 seconds (can interrupt)
│  └─ Duration: Until destroyed or 30-60 second limit
│
├─ Limit: 1-3 deployables active (prevent spam)
├─ Cooldown: 12-15 seconds (after destroyed)
├─ Mana Cost: 50-80
├─ Target Priority: Enemies in range (closest or lowest health)
├─ Interactions:
│  ├─ Can be destroyed by enemies
│  ├─ Can proc on-hit effects
│  └─ Can stack focus fire with player
│
└─ Strategic Element: Zoning, siege, persistent threat

TRAP/MINE (One-time explosive)
├─ Activation: Enemy walks into range (8m)
├─ Effect On Trigger:
│  ├─ Damage: 40-80 burst
│  ├─ Extra Effect: Stun 1s, or slow 40%, or knockback
│  ├─ Can damage deployer: No (safe placement)
│  └─ Visibility: Hidden until trigger (skill reveals)
│
├─ Duration: 30-60 seconds (despawn if not triggered)
├─ Limit: 3-5 active traps
├─ Cooldown: 6-10 seconds per trap
├─ Mana Cost: 30-50
├─ Counter: Reveal skill, destroy manually before trigger
└─ Strategic Element: Ambush, zoning, prediction plays

TOTEM/AURA (Persistent buff area)
├─ Aura Effect: +20-40% damage or defense in radius
├─ Radius: 6-10 meters around totem
├─ HP: 40-80 (can be destroyed)
├─ Duration: 20-30 seconds OR until destroyed
├─ Limit: 1-2 active
├─ Cooldown: 15-20 seconds
├─ Mana Cost: 60-100
├─ Can be moved: No (place once)
└─ Strategic Element: Area control, team empowerment

SUMMON/MINION (Temporary ally)
├─ Minion Stats:
│  ├─ HP: 30-60
│  ├─ Damage: 10-20 per attack
│  ├─ Attack speed: 1 attack per 1.5s
│  ├─ Duration: 15-25 seconds
│  └─ AI: Attack enemies in range
│
├─ Limit: 1-3 minions
├─ Cooldown: 20-30 seconds
├─ Mana Cost: 70-120
├─ Scaling: Minion power scales with player power tier
├─ Can command: Limited (attack/hold only)
└─ Strategic Element: Teamfight multiplier, damage amplification
```

---

### 6️⃣ DEBUFF SKILLS (Status Effects)

**Purpose:** Inflict lasting negative effects

#### Perfect Mechanics Framework
```
BURN/DOT (Damage over time)
├─ Damage: 5-15 per tick
├─ Tick Rate: Every 0.5-1 second
├─ Duration: 5-10 seconds (5-15 total ticks)
├─ Total Damage: 25-150 spread over time
├─ Stacks: Yes (multiple burns = multiple damage)
├─ Refresh: New application extends duration
├─ Cleansable: Yes
├─ Cooldown: 6-10 seconds
├─ Mana Cost: 30-50
└─ Strategic Element: Constant pressure, area denial

POISON (Percentage damage)
├─ Damage: 10-20% of target's max HP per tick
├─ Tick Rate: Every 2 seconds
├─ Duration: 8-12 seconds (4-6 ticks)
├─ Effect: Weak enemies faster, scales with target
├─ Stacks: Limited (max 2-3 applications)
├─ Cooldown: 12-15 seconds
├─ Mana Cost: 50-80
├─ Cleansable: Yes
└─ Strategic Element: Anti-tank, scaling threat

BLEED (Damage + Movement reduction)
├─ Damage: 8-15 per tick
├─ Movement Speed: -20-30%
├─ Duration: 6-10 seconds
├─ Stacks: Yes (multiple bleeds = more damage + more slow)
├─ Triggered by: Can trigger on next attack (bleeding edge)
├─ Cooldown: 8-12 seconds
├─ Mana Cost: 40-70
└─ Strategic Element: Chase prevention, execute setup

CHILL/SLOW (Speed reduction)
├─ Speed Reduction: 30-50%
├─ Duration: 3-5 seconds
├─ Multiple Applications: Multiplicative slowdown
├─ Transitions to Freeze: 3 chills = frozen (can't move)
├─ Cooldown: 6-10 seconds
├─ Mana Cost: 30-50
└─ Strategic Element: Kiting, setup for melee
```

---

## 🔗 PERFECT SYNERGY SYSTEM

### Synergy Tiers
```
WEAK SYNERGY (1.0 - 1.2x)
├─ Same category skills (damage + damage = generic combo)
├─ Vague connections (structure + field)
├─ Minimal strategic depth
└─ Example: "Attack + Slam = Melee"

GOOD SYNERGY (1.2 - 1.5x)
├─ Cross-category combos with clear purpose
├─ Enable new tactics (stun + burst damage)
├─ Require some setup/timing
└─ Example: "Stun + Execute = 50% more damage when stunned"

EXCELLENT SYNERGY (1.5 - 1.8x)
├─ Deep strategic interactions
├─ Multiple layers of synergy
├─ Enable entirely new playstyles
└─ Example: "Vulnerability + Fire = Burn damage increased 50%, and affected enemy spreads fire to nearby"

PERFECT SYNERGY (1.8 - 2.0x+)
├─ Unlock hidden mechanics
├─ Create unintended power combos (intentionally)
├─ Reward player knowledge/execution
└─ Example: "Apply 3 debuffs + Cleave = Cleave hits all debuffed enemies in large radius"
```

### Example: Perfect Synergy Chain
```json
{
  "name": "Execute Sequence",
  "skills": ["Paralyzing Strike", "Piercing Strike", "Execution"],
  "synergy_chain": {
    
    "step_1_stun": {
      "skill": "Paralyzing Strike",
      "effect": "Stun target for 2 seconds",
      "cost": 60
    },
    
    "step_2_burst": {
      "skill": "Piercing Strike",
      "effect": "Deal 60 damage (guaranteed hit on stunned target)",
      "multiplier": 1.5,
      "actual_damage": 90,
      "reason": "Stunned targets take 50% more damage",
      "cost": 35
    },
    
    "step_3_execute": {
      "skill": "Execution",
      "effect": "Deal damage equal to 30% of target's missing HP",
      "target_health_after_burst": "90 damage taken = 90 missing",
      "execution_damage": 27,
      "total_combo_damage": 90 + 27 = 117,
      "cooldown_bonus": "Execution cooldown reduced by 5s (ready in 5s instead of 10s)",
      "cost": 50
    },
    
    "total_combo": {
      "time_window": "5 seconds (within stun+vulnerable window)",
      "total_damage": 117,
      "total_cost": 145,
      "efficiency": "117 damage per 145 mana = 0.81 damage/mana",
      "vs_single_skill": "Much higher damage, requires execution",
      "strategic_value": "High risk (telegraphed), high reward (eliminate target)"
    }
  }
}
```

---

## ✅ PERFECT SKILL CHECKLIST

Every skill must have:
- [ ] Clear type (Damage, Control, Defense, Utility, Deployable, Debuff)
- [ ] Exact numbers (not "increased")
- [ ] Strategic tradeoff (powerful but limited)
- [ ] Counter play (enemy can respond)
- [ ] 3-5 combo suggestions with synergy multipliers
- [ ] Cooldown that prevents spam but allows skill expression
- [ ] Mana cost that matters (prevents free spamming)
- [ ] Range and radius clearly defined
- [ ] Interaction rules explicit (stacks? refreshes? overrides?)
- [ ] Power tier appropriate rarity

---

## 🎯 BALANCE PILLARS

1. **Action Economy**: Fast skills (low cooldown) do less damage
2. **Resource Economy**: Cheap skills do less, expensive skills do more
3. **Risk/Reward**: High damage = telegraphed/slow to cast
4. **Team Synergy**: Debuff ≠ Teamfight, but unlocks burst
5. **Counter Play**: Every skill can be defended against
6. **Scaling**: Power tier increases effectiveness 20-30% per tier
