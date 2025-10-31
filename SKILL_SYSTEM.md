# SKILL SYSTEM DESIGN v1.0

## Overview

The skill system organizes **1,037 skills** across **8 engines** into reusable **effect blocks** that can be fused infinitely to create new skills dynamically.

---

## 1. THE 8 ENGINES

### Foundational (🏛️)
**Purpose**: Structure, zones, resources, cooldowns
**Keywords**: Zone, Structure, Resource, Cooldown
**Core Effect Types**: 
- Create Structure (builds zones/areas)
- Generate Resource (mana/prana regeneration)
- Area Buff (affects nearby tiles)
- Reduce Cooldown (speeds up abilities)

### Therapeutic (🌿)
**Purpose**: Healing, shielding, cleansing, conversion
**Keywords**: Heal, Shield, Cleanse, Convert
**Core Effect Types**:
- Heal (restore HP to target or area)
- Shield (absorb incoming damage)
- Cleanse (remove negative effects)
- Convert (transmute damage type or channel)

### Tantra (🕉️)
**Purpose**: Damage over time, debuffs, control, detonation
**Keywords**: DoT, Debuff, Stun, Silence, Detonate
**Core Effect Types**:
- Damage over Time (tick-based damage)
- Debuff (apply negative effects)
- Crowd Control (stun, slow, root)
- Detonation (trigger stored effects)

### Singularity (⚡)
**Purpose**: Reality warp, upgrades, rule changes, scaling
**Keywords**: RuleChange, Upgrade, Ramp, Threshold
**Core Effect Types**:
- Change Rules (alter game mechanics locally)
- Permanent Buff (permanent stat increase)
- Resource Surge (sudden resource gain)
- Threshold Effect (trigger when condition met)

### Divination (🔮)
**Purpose**: Prediction, fate, scrying, sealing
**Keywords**: Predict, Seal, Reveal, FateLock
**Core Effect Types**:
- Prediction (see opponent's next move)
- Fate Lock (lock an opponent into a choice)
- Reveal (expose hidden information)
- Seal (disable or restrict abilities)

### Invocation (✨)
**Purpose**: Summon, blessing, miracle, adaptation
**Keywords**: Summon, Bless, Miracle, Adapt
**Core Effect Types**:
- Summon (create creatures or allies)
- Blessing (grant temporary power)
- Miracle (trigger rare beneficial event)
- Adaptation (shift role or strategy)

### Consciousness (👁️)
**Purpose**: State shift, optimization, scaling, conversion
**Keywords**: StateShift, Optimize, Scale, Convert
**Core Effect Types**:
- State Shift (change character state/mode)
- Optimization (enhance efficiency)
- Scaling (increase effect with conditions)
- Conversion (transform one resource into another)

### Character Analysis (🎭)
**Purpose**: Reveal, counter, forecast, manipulation
**Keywords**: RevealInfo, Counter, Forecast, Manipulate
**Core Effect Types**:
- Reveal Info (learn enemy stats/composition)
- Counter (respond to opponent's action)
- Forecast (predict opponent's strategy)
- Manipulate (influence opponent's choices)

---

## 2. FUSION GRAMMAR

### Fusion Operators

#### 1. **Additive** ➕
Combine two different effect blocks into one skill.
**Example**: `Heal Burst + Shield Barrier = Heal and Protect`

#### 2. **Multiplicative** (×)
Use an amplifier effect to scale another.
**Example**: `Damage 100 + Damage Multiplier x1.5 = Damage 150`

#### 3. **Replacement** (↔️)
Swap properties of an effect block.
**Example**: `DoT (3 turns) → DoT (5 turns)`

#### 4. **Transmutation** (🔄)
Change element or fundamental type.
**Example**: `Fire DoT + Air = Plasma DoT (gains jump between targets)`

---

## 3. ELEMENT SYSTEM

### Base Elements (Pancha Mahabhuta)
1. **Fire** 🔥 - Damage, DoT, Detonation
2. **Earth** 🌍 - Structure, Shield, Defense  
3. **Water** 💧 - Healing, Flow, Conversion
4. **Air** 🌪️ - Speed, Displacement, Ranged
5. **Ether** ✨ - Rule Changes, Scaling, Transmutation

### Element Fusion Examples
- **Fire + Air = Plasma**: DoT gains jump and higher tick rate
- **Water + Earth = Growth**: Heals leave regenerative zones
- **Air + Ether = Blink**: Action gains pre-resolution insertion

---

## 4. IMPLEMENTATION PLAN

1. **Define Effect Blocks** - Create 96-128 canonical blocks
2. **Categorize 1,037 Skills** - Map each skill to blocks
3. **Build Fusion Engine** - Implement the 4 operators
4. **Create Display System** - Show skills in card creator
5. **Storage & Persistence** - Save fused skills locally
6. **Testing & Balance** - Prevent degenerate combinations

This creates an **infinite fusion system** where users can combine any skill with any other skill dynamically, creating endless creative possibilities while maintaining balance through soft caps and keyword conflicts.