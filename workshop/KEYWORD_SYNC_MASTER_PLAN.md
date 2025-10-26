# 🔄 MASTER KEYWORD SYNC SYSTEM

## Current State Analysis

### ✅ Keywords IN TAG_DATA (Can be clicked)
- fire, ice, lightning, water, earth, dark, light
- damage, heal, buff, debuff, control
- aoe, dot, instant, channeled, ultimate
- speed, cleanse, support
- subservience, sutras, decay, builder, permanence

### ❌ Keywords MISSING from TAG_DATA (Show as purple, can't be clicked)
- defense, multi-hit, phoenix, physical, sustain
- loot, quick-cast, wisdom, combo, signature
- discipline, counter, stealth, power, slow
- balanced, spiritual, unorthodox, xp, crit
- shield, strike, regen, charm, cc
- attack, leadership, transcend, transform, versatile
- gold, material, mystic, air, chaos
- expansion, bleed, aggressive

**TOTAL MISSING: ~35 keywords**

---

## 🎯 SYNC STRATEGY

### Phase 1: Categorize Missing Keywords

#### **Combat Role Keywords**
- defense, counter, stealth, attack, strike
- crit, multi-hit, combo, quick-cast
- **Suggested Color Scheme**: Shades of red/orange for offensive, blue for defensive

#### **Resource/Progression Keywords**
- loot, xp, gold, material, wisdom
- **Suggested Color Scheme**: Gold/yellow tones

#### **Trait/Modifier Keywords**
- physical, spiritual, mystic, phoenix
- signature, balanced, unorthodox, versatile
- aggressive, disciplined, transcend, transform
- **Suggested Color Scheme**: Purple/teal/unique colors

#### **Special Mechanics Keywords**
- sustain, regen, shield, slow, charm, cc
- expansion, bleed, air, chaos, leadership
- **Suggested Color Scheme**: Context-based (green for sustain, red for bleed, etc.)

---

## 📋 ACTION PLAN

### Step 1: Add ALL missing keywords to TAG_DATA
- Create definitions for each
- Assign intelligent colors based on category
- Write short/medium/detailed descriptions
- Define synergies and conflicts

### Step 2: Verify Fusion System Integration
- Ensure fusion rules can detect ANY keyword combination
- Test that `hasTag()` works with all keywords
- Verify `countTags()` includes all keywords

### Step 3: Color Scheme Standardization

**Elemental Colors** (Already good):
- Fire: #ff6464
- Ice: #64b4ff
- Lightning: #ffeb64
- Water: #64c8ff
- Earth: #96c864
- Dark: #9664c8
- Light: #ffe664

**Combat Role Colors** (To add):
- Defense: #4682b4 (Steel blue)
- Attack/Strike: #dc143c (Crimson)
- Counter: #ff6347 (Tomato)
- Stealth: #2f4f4f (Dark slate)
- Crit: #ffd700 (Gold flash)

**Resource Colors** (To add):
- Loot: #ffd700 (Gold)
- XP: #00ff7f (Spring green)
- Gold: #daa520 (Goldenrod)
- Wisdom: #8a2be2 (Blue violet)
- Material: #cd853f (Peru)

**Trait Colors** (To add):
- Physical: #b8860b (Dark goldenrod)
- Spiritual: #9370db (Medium purple)
- Mystic: #4b0082 (Indigo)
- Phoenix: #ff4500 (Orange red)
- Balanced: #778899 (Light slate)

### Step 4: Fusion Rule Expansion
- Add fusion rules for new keyword combos
- Example: "3+ crit keywords = Critical Mass (×2.0 crit damage)"
- Example: "defense + shield + sustain = Immortal Fortress"
- Example: "loot + gold + xp = Fortune's Favor (+50% rewards)"

---

## 🔥 IMMEDIATE ACTION

Create batch insert for TAG_DATA with ALL 35 missing keywords, organized by category with intelligent color assignments.

---

## 🎨 COLOR PHILOSOPHY

**Warm Colors** (Red/Orange/Yellow):
- Aggressive, offensive, damage keywords

**Cool Colors** (Blue/Cyan/Green):
- Defensive, healing, support keywords

**Purple/Violet**:
- Mystical, spiritual, transcendent keywords

**Gold/Yellow**:
- Valuable, rare, reward-based keywords

**Gray/Silver**:
- Balanced, neutral, utility keywords

---

## ✅ SUCCESS METRICS

After sync completion:
- ✅ ALL keywords in skills have TAG_DATA entries
- ✅ Every keyword badge is clickable with definition
- ✅ Color scheme is logical and visually distinct
- ✅ Fusion system detects all keyword combinations
- ✅ No purple "undefined" keyword badges

---

**Next Step**: Execute batch TAG_DATA insertion with all 35 missing keywords!
