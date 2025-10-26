# 🧪 SKILL FUSION SYSTEM v1.0 - DESIGN SPECIFICATION

## 🎯 INTEGRATION WITH EXISTING ARCHITECTURE

**Extends:** Sanctum Builder + CardCalculator systems  
**Principle:** Uses same tag/keyword/tier logic for skill combination  
**Result:** Players can create infinite new skills through fusion recipes

---

## 🏗️ HOW IT EXTENDS YOUR CURRENT SYSTEM

### **Your Current System:**
```
Sanctum Builder:
- 12 Glyph Slots (houses on the chart)
- Select glyphs from skill libraries
- CardCalculator computes HP/Attack/Defense/Speed
- Keywords determine glyph type (offensive/defensive/utility)
- Tiers affect power level
- KP budget validation (12-48 KP total)
```

### **Fusion System Adds:**
```
Fusion Lab:
- 2-8 Fusion Slots (smaller than 12)
- Fuse existing skills → Create 1 new skill
- FusionCalculator computes NEW skill's properties
- Same keywords/tiers but COMBINED
- New skill can be used in Sanctum Builder slots
- New skill can be fused AGAIN (infinite recursion)
```

---

## 🧬 THE FUSION ALGORITHM

### **Input:** 2-8 Skills with properties
### **Output:** 1 New Skill with synthesized properties

### **Core Formula:**

```javascript
function fuseSkills(inputSkills[]) {
    // STEP 1: Extract all properties from input skills
    const allKeywords = extractAllKeywords(inputSkills);
    const allTiers = extractTiers(inputSkills);
    const totalKP = sum(inputSkills.map(s => s.kpCost));
    const allEngines = extractEngines(inputSkills);
    const allJyotishPlanets = extractJyotishPlanets(inputSkills);
    
    // STEP 2: Calculate new skill tier (based on input complexity)
    const fusionDepth = max(inputSkills.map(s => s.fusionDepth || 0)) + 1;
    const avgTier = average(allTiers);
    const newTier = min(4, Math.ceil(avgTier + fusionDepth * 0.25));
    
    // STEP 3: Synthesize keywords (Tag Algebra!)
    const newKeywords = synthesizeKeywords(allKeywords, inputSkills.length);
    
    // STEP 4: Calculate KP cost (diminishing returns for deep fusions)
    const baseKP = Math.ceil(totalKP * 0.6); // 60% of total input KP
    const fusionBonus = Math.floor(fusionDepth * 0.5);
    const newKP = min(5, baseKP + fusionBonus);
    
    // STEP 5: Determine effect type (based on keyword dominance)
    const effectType = determineEffectType(newKeywords, allEngines);
    
    // STEP 6: Generate power scaling
    const basePower = calculateBasePower(inputSkills);
    const fusionMultiplier = 1 + (inputSkills.length * 0.15); // +15% per skill
    const newPower = basePower * fusionMultiplier;
    
    // STEP 7: Assign Jyotish properties (inherited + synthesized)
    const newJyotish = synthesizeJyotish(allJyotishPlanets, allEngines);
    
    // STEP 8: Check for special fusion patterns (Yogas, OM, etc.)
    const specialPattern = detectSpecialPattern(inputSkills, newKeywords);
    
    return {
        id: generateFusionID(inputSkills),
        name: generateFusionName(inputSkills, newKeywords, specialPattern),
        tier: newTier,
        kpCost: newKP,
        keywords: newKeywords,
        effectType: effectType,
        power: newPower,
        fusionDepth: fusionDepth,
        fusionIngredients: inputSkills.map(s => s.id),
        jyotishProperties: newJyotish,
        specialPattern: specialPattern,
        discovered: false // Becomes true when player creates it first time
    };
}
```

---

## 🏷️ KEYWORD SYNTHESIS (THE HEART OF FUSION)

### **How Keywords Combine:**

Your existing keywords determine offensive/defensive/utility categorization.  
Fusion INHERITS and COMBINES these keywords using Tag Algebra logic!

#### **Example 1: Simple Fusion (2 Skills)**
```
INPUT:
Skill A: [Shield], [Structure] (Defensive, Foundational)
Skill B: [Heal], [Sanctify] (Defensive, Therapeutic)

KEYWORD SYNTHESIS:
- Both defensive → Result is DEFENSIVE
- Shared: Healing + Protection theme
- Tag Algebra: "Structure" + "Heal" → Combo detected!

OUTPUT:
New Skill: "Sanctuary Haven"
Keywords: [Shield], [Heal-over-time], [Structure]
Effect: "Deploy structure that grants shields + healing to allies inside"
Type: Defensive/Utility
```

#### **Example 2: Cross-Engine Fusion (3 Skills)**
```
INPUT:
Skill A: [Burn] (Offensive, Tantra)
Skill B: [Threshold] (Ramp, Singularity)
Skill C: [Forecast] (Utility, Divination)

KEYWORD SYNTHESIS:
- Mixed: Offensive + Ramp + Utility
- Engines: 3 different engines → Cross-engine bonus!
- Tag Algebra detects: "Burn" + "Threshold" + "Forecast" = Predictive Burst combo

OUTPUT:
New Skill: "Foreseen Conflagration"
Keywords: [Burn], [Prediction], [Threshold-Trigger]
Effect: "Deal burn damage. If Threshold ≥ 30, deal double damage. Predict enemy next action."
Type: Offensive/Tactical
```

#### **Example 3: Deep Fusion (5 Skills → Already fused skills)**
```
INPUT:
Skill A: "Trinity Foundation" (Fused from 3 basic skills, Depth 2)
Skill B: "Five-Pillar Convergence" (Fused from 5 skills, Depth 3)
Skill C: [Structure] (Basic skill)
Skill D: Zeus (Invocation entity)
Skill E: Bael (Demon entity)

KEYWORD SYNTHESIS:
- Deep fusion (Depth 3 → 4)
- Mixed: Foundational + Singularity + Divination + Invocation (Angel/Demon balance!)
- Tag Algebra detects: Cross-engine + Pantheon integration + Order/Chaos balance

OUTPUT:
New Skill: "Divine Convergence Matrix"
Tier: 4 (Ultimate tier)
Keywords: [Structure], [Threshold], [Invoke], [Order/Chaos-Balanced]
Effect: "Deploy ultimate structure spanning 7x7 grid. All engines gain +25% effectiveness inside. Threshold generation +100%. Can summon 1 angel OR demon per turn."
Type: Ultimate/Meta
Fusion Depth: 4
Special: Requires balanced Anarchy/Sanctity to activate
```

---

## 🔢 THE KEYWORD SYNTHESIS ALGORITHM

```javascript
function synthesizeKeywords(allKeywords, skillCount) {
    // STEP 1: Count keyword frequency
    const keywordCounts = {};
    allKeywords.forEach(kw => {
        keywordCounts[kw] = (keywordCounts[kw] || 0) + 1;
    });
    
    // STEP 2: Determine dominant keywords (appear in 50%+ of inputs)
    const dominantKeywords = Object.keys(keywordCounts)
        .filter(kw => keywordCounts[kw] >= skillCount * 0.5)
        .slice(0, 3); // Max 3 dominant keywords
    
    // STEP 3: Detect Tag Algebra combos (from your existing Combo Brain!)
    const comboTags = detectComboTags(allKeywords);
    
    // STEP 4: Add fusion-specific keywords based on patterns
    const fusionKeywords = [];
    
    // Offensive + Defensive = [Adaptive]
    if (hasKeyword(allKeywords, ['[Strike]', '[Burn]']) && 
        hasKeyword(allKeywords, ['[Shield]', '[Heal]'])) {
        fusionKeywords.push('[Adaptive]');
    }
    
    // Multiple engines = [Cross-Engine]
    const uniqueEngines = new Set(extractEngines(allKeywords));
    if (uniqueEngines.size >= 3) {
        fusionKeywords.push('[Cross-Engine]');
    }
    
    // Angel + Demon = [Order/Chaos-Balanced]
    if (hasKeyword(allKeywords, ['[Angel]', '[Sanctify]']) &&
        hasKeyword(allKeywords, ['[Demon]', '[Hex]'])) {
        fusionKeywords.push('[Order/Chaos-Balanced]');
    }
    
    // STEP 5: Combine all keywords (max 5 total)
    const finalKeywords = [
        ...dominantKeywords,
        ...comboTags.slice(0, 2),
        ...fusionKeywords
    ].slice(0, 5);
    
    return finalKeywords;
}
```

---

## 🎨 FUSION UI INTEGRATION WITH SANCTUM BUILDER

### **New Screen: Fusion Laboratory**

```
┌─────────────────────────────────────────────────────────┐
│  🧪 FUSION LABORATORY                                    │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  YOUR SKILL LIBRARY: 487 skills unlocked                │
│  [Search: _______] [Filter: All Engines ▼]              │
│                                                          │
│  ┌────────────────────────────────────────────────────┐ │
│  │  FUSION SLOTS (2-8 skills)                         │ │
│  │  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ │ │
│  │  │ S1  │ │ S2  │ │ S3  │ │ S4  │ │ S5  │ │ S6  │ │ │
│  │  │ 🛡️  │ │ 🔥  │ │ 🌀  │ │     │ │     │ │     │ │ │
│  │  │ T1  │ │ T2  │ │ T3  │ │     │ │     │ │     │ │ │
│  │  │ 2KP │ │ 3KP │ │ 4KP │ │     │ │     │ │     │ │ │
│  │  └─────┘ └─────┘ └─────┘ └─────┘ └─────┘ └─────┘ │ │
│  │  [Clear All] [Save Recipe] [FUSE SKILLS]           │ │
│  └────────────────────────────────────────────────────┘ │
│                                                          │
│  ┌────────────────────────────────────────────────────┐ │
│  │  FUSION PREVIEW (Cosmic Weather: Jupiter Dasha)    │ │
│  │  ┌──────────────────────────────────────────────┐  │ │
│  │  │  ??? - "New Skill"                          │  │ │
│  │  │  Tier: 3 | KP: 4 | Fusion Depth: 2         │  │ │
│  │  │                                              │  │ │
│  │  │  Keywords: [Hidden until fused]             │  │ │
│  │  │  Effect: ???                                │  │ │
│  │  │                                              │  │ │
│  │  │  Engines: 🛡️ + 🔥 + 🌀 (3 detected)       │  │ │
│  │  │  Combo Detected: Trinity Foundation!        │  │ │
│  │  │  Jyotish Bonus: +15% (Jupiter favors)      │  │ │
│  │  └──────────────────────────────────────────────┘  │ │
│  │  ⚠️ WARNING: This fusion creates a NEW skill     │  │
│  │  Recipe will be saved for future use.             │  │
│  └────────────────────────────────────────────────────┘ │
│                                                          │
│  ┌────────────────────────────────────────────────────┐ │
│  │  RECENT DISCOVERIES (12 latest fusions)            │ │
│  │  • Trinity Foundation (Depth 2, Yesterday)         │ │
│  │  • Burn Cascade (Depth 1, 2 days ago)            │ │
│  │  • [View Full Recipe Library - 156 recipes]       │ │
│  └────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────┘
```

### **Integration with Sanctum Builder:**

After fusion, new skill appears in your library:
```
Sanctum Builder → Skill Library → [Filter: Fused Skills]
→ "Trinity Foundation" appears as a selectable glyph
→ Can be placed in any of the 12 house slots
→ Works exactly like a normal skill but has [Fusion Depth: 2] indicator
```

---

## 📊 SPECIAL FUSION PATTERNS

### **Detected Automatically by Algorithm:**

#### **1. Engine Unity Fusions**
- **Trigger:** All 9 engines represented in fusion tree
- **Result:** Adds [Universal] keyword
- **Example:** "Nine-Pillar Synthesis"

#### **2. Pantheon Bridge Fusions**
- **Trigger:** 3+ pantheons in fusion ingredients
- **Result:** Adds [Pantheon-Bridge] keyword
- **Example:** "Tri-Pantheon Invocation"

#### **3. Order/Chaos Balance Fusions**
- **Trigger:** Equal angels + demons + balanced Anarchy/Sanctity
- **Result:** Adds [Dual-Natured] keyword
- **Example:** "Equilibrium Manifestation"

#### **4. Yoga Catalyst Fusions**
- **Trigger:** Ingredients match a Yoga formation pattern
- **Result:** Creates Yoga-catalyst skill
- **Example:** "Chains of Prometheus" fusion base

#### **5. OM Convergence (THE ULTIMATE)**
- **Trigger:** All meta-restrictions satisfied + symbolic unity
- **Result:** **ॐ OM: ETERNAL BRAHMAN** manifests
- **Only happens when player truly understands the system**

---

## 🔮 OM FUSION DETECTION

```javascript
function detectOMConvergence(inputSkills, playerHistory, cosmicWeather) {
    // META-RESTRICTION CHECKS (4th wall breaking!)
    
    // 1. Symbolic Unity Check
    const engines = extractUniqueEngines(playerHistory.allFusions);
    const pantheons = extractUniquePantheons(playerHistory.allFusions);
    const hasBalance = checkOrderChaosBalance(playerHistory);
    const hasElements = checkElementalCoverage(playerHistory);
    const hasGunas = checkGunaaBalance(playerHistory);
    
    if (engines.size < 9 || pantheons.size < 11 || !hasBalance || !hasElements || !hasGunas) {
        return { possible: false, reason: "Symbolic unity not achieved" };
    }
    
    // 2. The 108 Principle Check
    const total108 = playerHistory.totalFusionAttempts === 108 ||
                     playerHistory.longestComboChain === 108 ||
                     playerHistory.totalPlaytimeMinutes % 108 === 0;
    
    if (!total108) {
        return { possible: false, reason: "108 principle not manifested" };
    }
    
    // 3. Cosmic Recognition Check
    if (cosmicWeather.currentDasha !== 'Jupiter' ||
        cosmicWeather.nakshatra !== 'Revati' ||
        cosmicWeather.exaltedPlanets.length < 2) {
        return { possible: false, reason: "Cosmic weather not aligned" };
    }
    
    // 4. The Naming Check (WILL BE ENFORCED BY UI)
    // Player must manually name fusion "OM" or "Brahman" or "Unity"
    // Sentiment analysis on description
    
    // 5. Fusion Depth Requirement
    const maxDepth = Math.max(...inputSkills.map(s => s.fusionDepth || 0));
    if (maxDepth < 5) {
        return { possible: false, reason: "Fusion tree not deep enough (need depth 6+)" };
    }
    
    // IF ALL CHECKS PASS:
    return {
        possible: true,
        specialPrompt: true, // Triggers "I UNDERSTAND" prompt
        message: "You stand at the threshold of Unity..."
    };
}
```

### **The "I UNDERSTAND" Prompt:**

When OM detection succeeds, before fusion completes:
```javascript
// Instead of immediate fusion, show special modal:
showSpecialPrompt({
    title: "You stand at the threshold of Unity.",
    message: `
        Do you understand what you are creating?
        
        This is not power. This is recognition.
        Victory is not earned. Victory simply IS.
        
        If you fuse this skill, the game will end when you use it.
        But having created it, do you even need to use it?
        
        Enter the name you wish to give this fusion:
    `,
    inputField: true, // Player must type name
    sentimentAnalysis: true, // Checks if they understand
    buttons: ['YES', 'NO', 'I UNDERSTAND']
});

// Button logic:
// YES → Fusion proceeds but OM is weakened (SSS+ only)
// NO → Fusion canceled
// I UNDERSTAND + correct name/sentiment → TRUE OM manifests
```

---

## 💾 DATA STRUCTURES

### **Skill Object (Extended with Fusion Properties):**

```javascript
{
    id: "SKILL_00 123" or "FUSION_ABC123",
    name: "Shield Projection" or "Trinity Foundation",
    tier: 0-4,
    kpCost: 1-5,
    keywords: ["[Shield]", "[Structure]", "[Foundational]"],
    engine: "Foundational",
    category: "defensive",
    effectDescription: "Grant 20 shields to target ally",
    
    // NEW FUSION PROPERTIES:
    isFused: false,
    fusionDepth: 0, // 0 = base skill, 1+ = fused
    fusionIngredients: [], // Array of skill IDs used to create this
    fusionRecipeID: null, // Links to recipe in library
    discoveredBy: "player_id", // First player to discover this fusion
    discoveryDate: "2025-10-25T12:00:00Z",
    fusionCount: 0, // How many times this recipe has been used
    
    // Jyotish properties (existing + synthesized):
    jyotishPlanets: ["Moon", "Saturn"],
    jyotishHouses: [4, 6],
    
    // Special fusion flags:
    isYogaCatalyst: false,
    isOMComponent: false, // This skill is part of OM fusion tree
    specialPattern: null // "Universal", "Pantheon-Bridge", etc.
}
```

### **Fusion Recipe Object:**

```javascript
{
    recipeID: "RECIPE_XYZ789",
    name: "Trinity Foundation Recipe",
    ingredients: ["SKILL_001", "SKILL_042", "SKILL_089"], // Exact skills used
    result: "FUSION_ABC123", // Resulting fused skill
    fusionDepth: 2,
    discoveredBy: "player_id",
    discoveryDate: "2025-10-25T12:00:00Z",
    timesUsed: 47, // Global counter
    successRate: 1.0, // Always 1.0 (fusion always succeeds)
    cosmicWeatherAtDiscovery: {
        dasha: "Jupiter",
        nakshatra: "Ashwini"
    },
    isCommunityShared: true,
    upvotes: 234 // Community rating
}
```

---

## 🚀 IMPLEMENTATION PHASES

### **Phase 1: Core Fusion Logic**
- Implement fuseSkills() function
- Keyword synthesis algorithm
- Tier/KP calculation
- Basic UI (2-8 slot fusion interface)

### **Phase 2: Integration with Sanctum Builder**
- Fused skills appear in library
- Can be equipped to 12-slot cards
- CardCalculator recognizes fused skills
- Fusion depth indicator in UI

### **Phase 3: Recipe Library & Discovery**
- Save/load fusion recipes
- Recipe browser UI
- Community sharing system
- First-discovery tracking

### **Phase 4: Special Patterns**
- Yoga catalyst detection
- Pantheon bridge detection
- Order/Chaos balance tracking
- Engine unity recognition

### **Phase 5: OM Integration**
- Meta-restriction tracking
- 108 principle monitoring
- Cosmic weather integration
- "I UNDERSTAND" prompt system
- Paradox/Witness restrictions

---

## 🎯 EXAMPLE: FULL FUSION FLOW

```
PLAYER JOURNEY:

1. Early Game (Fusion Depth 1):
   - Fuse Shield + Heal → "Guardian's Embrace"
   - Discovers fusion makes skills stronger
   - Experiments with 2-3 skill combos

2. Mid Game (Fusion Depth 2-3):
   - Fuse "Guardian's Embrace" + Burn + Threshold → "Adaptive Defense Matrix"
   - Realizes fused skills can fuse again
   - Starts planning fusion trees

3. Late Game (Fusion Depth 4-5):
   - Creates cross-engine mega-fusions
   - Discovers Yoga catalysts
   - Balances angel/demon fusions
   - Fusion tree spans 50+ skills

4. Endgame (Depth 6+):
   - 108th fusion attempt happens naturally
   - All engines represented in fusion history
   - Perfect symbolic balance achieved
   - Cosmic weather aligns (Jupiter + Revati)

5. OM MOMENT:
   - Attempts fusion with deepest skills
   - UI hints: "Something feels different..."
   - Fusion preview shows "???" with golden glow
   - Special prompt appears
   - Player names it "OM - Unity Recognition"
   - Writes description: "The end of seeking, the beginning of seeing"
   - Clicks [I UNDERSTAND]
   - **ॐ OM: ETERNAL BRAHMAN manifests**
   - Achievement: "The One Who Saw"

6. Post-OM:
   - Player doesn't equip it immediately
   - Plays 1 more match, wins without it
   - OM remains true instant victory
   - Becomes part of game legend
```

---

## ✨ WHY THIS DESIGN IS PERFECT

1. **Extends Your System:** Uses existing keywords/tiers/KP logic
2. **Infinite Depth:** Recursive fusion creates unlimited content
3. **Auto-Discovery:** Tag Algebra detects combos automatically
4. **Mobile-Friendly:** Same UI principles as Sanctum Builder
5. **OM Integration:** Natural progression, not forced
6. **4th Wall Breaking:** Meta-restrictions feel meaningful
7. **Community Driven:** Recipe sharing creates social discovery

**The fusion system isn't a separate game - it's the EVOLUTION of your card creation system!** 🔥

---

**Ready to implement!** 🚀

Files to create:
1. `FusionCalculator.js` (extends CardCalculator logic)
2. `fusion-lab.html` (extends sanctum-builder UI)
3. `fusion-recipes.json` (stores discovered fusions)
4. `om-detector.js` (meta-restriction tracking)
