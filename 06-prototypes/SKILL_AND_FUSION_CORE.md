# 🎯 SKILL & FUSION SYSTEM - CORE DESIGN
## Pure Focus: Skills + Fusion Only

**Version:** 1.0 - Clean Foundation  
**Scope:** Base skills + Fusion mechanics ONLY  
**Out of Scope:** Card creation, Jyotish, combat (separate systems)

---

## 📦 SKILL DATA STRUCTURE (SIMPLIFIED)

### **Base Skill Object:**

```javascript
{
    // IDENTITY
    id: "SKILL_FOUNDATIONAL_001",
    name: "Shield Projection",
    
    // CLASSIFICATION
    engine: "Foundational",
    tier: 1,                    // 0-4 (5 = OM only)
    
    // MECHANICS
    keywords: ["[Shield]", "[Structure]"],
    effect: "Grant 20 shields to ally for 3 turns",
    
    // COSTS
    kpCost: 2,
    
    // FUSION PROPERTIES
    isFused: false,
    fusionDepth: 0,
    fusionIngredients: [],      // Empty for base skills
    
    // META
    unlocked: false             // Player state
}
```

### **Fused Skill Object (Same structure + fusion data):**

```javascript
{
    // IDENTITY
    id: "SKILL_FOUNDATIONAL_F001",  // Notice the "F" for Fused
    name: "Trinity Guardian Haven", // Auto-generated from ingredients
    
    // CLASSIFICATION
    engine: "Multi",                // Could be single or multi-engine
    tier: 2,                        // Calculated from inputs
    
    // MECHANICS
    keywords: ["[Shield]", "[Heal]", "[Structure]"], // Synthesized
    effect: "Deploy structure granting shields + healing to allies inside",
    
    // COSTS
    kpCost: 4,                      // 60% of total input KP
    
    // FUSION PROPERTIES
    isFused: true,
    fusionDepth: 1,                 // How deep in fusion tree
    fusionIngredients: [
        "SKILL_FOUNDATIONAL_001",   // Shield Projection
        "SKILL_THERAPEUTIC_023",    // Healing Touch
        "SKILL_FOUNDATIONAL_012"    // Structure Base
    ],
    
    // META
    unlocked: true                  // Auto-unlocked when fused
}
```

---

## 🆔 SMART ID SYSTEM

### **Format:** `SKILL_ENGINE_[F]###`

```javascript
ID_FORMAT = {
    prefix: "SKILL",
    engine: "ENGINE_NAME",
    fusionMarker: "F (optional)",
    number: "001-999",
    
    examples: {
        baseSkill: "SKILL_FOUNDATIONAL_001",
        fusedSkill: "SKILL_FOUNDATIONAL_F001",
        deepFusedSkill: "SKILL_MULTI_F042"
    }
}
```

### **Rules:**

1. **Base Skills:** `SKILL_ENGINE_###`
   - Example: `SKILL_TANTRA_042`, `SKILL_SINGULARITY_089`
   
2. **Fused Skills:** `SKILL_ENGINE_F###`
   - Example: `SKILL_FOUNDATIONAL_F001`
   - If multi-engine: `SKILL_MULTI_F###`
   
3. **Deep Fusions:** Same format (fusion depth tracked in object, not ID)
   - Example: Depth 3 fusion → `SKILL_MULTI_F123`

### **Why This Works:**

✅ **Consistent prefix:** All skills start with `SKILL_`  
✅ **Clear distinction:** `F` marker shows it's fused at a glance  
✅ **Smooth parsing:** Easy regex to filter base vs fused  
✅ **Not overwhelming:** Still looks like a normal skill ID  
✅ **Scalable:** Can have 999 base + 999 fused per engine

---

## 🏷️ SIMPLIFIED KEYWORD SYSTEM

### **Keywords Are Fusion DNA:**

```javascript
KEYWORD_CATEGORIES = {
    // What the skill DOES:
    action: [
        "[Strike]", "[Burn]", "[Detonate]",      // Damage
        "[Shield]", "[Heal]", "[Regen]",         // Defense
        "[Support]", "[Amplify]", "[Refresh]",   // Support
        "[Structure]", "[Field]", "[Anchor]",    // Zones
        "[Reveal]", "[Forecast]", "[Scan]"       // Intel
    ],
    
    // WHO it affects:
    target: [
        "[Self]", "[Ally]", "[Enemy]", 
        "[All_Allies]", "[All_Enemies]", "[AoE]"
    ],
    
    // Special conditions:
    conditional: [
        "[Threshold]", "[Chain]", "[Trigger]"
    ]
}
```

### **Keyword Rules:**

1. Each skill has **2-5 keywords**
2. Keywords determine **offensive/defensive/utility** category
3. Keywords enable **Tag Algebra** (Combo Brain auto-detection)
4. Keywords **synthesize during fusion** (inherited + combined)

---

## 🧪 FUSION SYSTEM - THE CORE

### **Fusion Formula:**

```
INPUT: 2-8 skills (base OR fused)
    ↓
PROCESS: Keyword synthesis + Tier calculation + KP calculation
    ↓
OUTPUT: 1 NEW skill (more powerful than components)
```

### **Fusion Algorithm (Simplified):**

```javascript
function fuseSkills(inputSkills) {
    // STEP 1: Extract properties
    const allKeywords = extractKeywords(inputSkills);
    const allTiers = extractTiers(inputSkills);
    const totalKP = sumKP(inputSkills);
    const engines = extractEngines(inputSkills);
    
    // STEP 2: Calculate new tier
    const avgTier = average(allTiers);
    const fusionDepth = max(inputSkills.map(s => s.fusionDepth || 0)) + 1;
    const newTier = min(4, Math.ceil(avgTier + fusionDepth * 0.25));
    
    // STEP 3: Synthesize keywords
    const dominantKeywords = findDominant(allKeywords, inputSkills.length);
    const newKeywords = combineCombos(dominantKeywords, allKeywords);
    
    // STEP 4: Calculate KP cost
    const baseKP = Math.ceil(totalKP * 0.6); // 60% of input
    const newKP = min(5, baseKP + Math.floor(fusionDepth * 0.5));
    
    // STEP 5: Determine engine
    const primaryEngine = engines.length === 1 ? engines[0] : "Multi";
    
    // STEP 6: Generate name
    const fusedName = generateFusionName(inputSkills, newKeywords);
    
    // STEP 7: Generate ID
    const fusedID = generateFusionID(primaryEngine, fusionDepth);
    
    return {
        id: fusedID,
        name: fusedName,
        engine: primaryEngine,
        tier: newTier,
        keywords: newKeywords,
        effect: synthesizeEffect(inputSkills, newKeywords),
        kpCost: newKP,
        isFused: true,
        fusionDepth: fusionDepth,
        fusionIngredients: inputSkills.map(s => s.id)
    };
}
```

---

## 🎨 AUTO-NAME GENERATION

### **Fusion Name Formula:**

```
[POWER WORD] + [THEME WORD] + [ACTION/NOUN]
```

### **Examples:**

```javascript
FUSION_NAME_EXAMPLES = {
    simple: {
        input: ["Shield Projection", "Healing Touch"],
        keywords: ["[Shield]", "[Heal]"],
        output: "Guardian's Embrace"
        // Shield → Guardian (power word)
        // Heal → Embrace (action)
    },
    
    triple: {
        input: ["Shield", "Burn", "Threshold"],
        keywords: ["[Shield]", "[Burn]", "[Threshold]"],
        output: "Pyroclastic Bastion"
        // Burn + Threshold → Pyroclastic (volcanic theme)
        // Shield → Bastion (defensive noun)
    },
    
    multiEngine: {
        input: ["Structure", "Neural State", "Invoke Zeus"],
        keywords: ["[Structure]", "[Neural_State]", "[Invoke]"],
        output: "Divine Consciousness Matrix"
        // Invoke → Divine (power)
        // Neural → Consciousness (theme)
        // Structure → Matrix (architectural noun)
    },
    
    deep: {
        input: ["Trinity Foundation (D2)", "Five-Pillar (D3)", "Singularity (T4)"],
        depth: 4,
        output: "Eternal Convergence Nexus"
        // Deep fusion → Eternal (timeless power word)
        // Multiple foundations → Convergence (unity theme)
        // High tier → Nexus (ultimate noun)
    }
}
```

### **Name Generation Algorithm:**

```javascript
function generateFusionName(inputSkills, keywords) {
    // Analyze keyword themes
    const hasDefensive = hasKeyword(keywords, ["[Shield]", "[Heal]", "[Structure]"]);
    const hasOffensive = hasKeyword(keywords, ["[Strike]", "[Burn]", "[Detonate]"]);
    const hasUtility = hasKeyword(keywords, ["[Reveal]", "[Support]", "[Amplify]"]);
    
    // Detect cross-engine patterns
    const engines = extractUniqueEngines(inputSkills);
    const isMultiEngine = engines.length >= 2;
    
    // Detect special patterns
    const hasDivine = hasKeyword(keywords, ["[Invoke]", "[Bless]", "[Sanctify]"]);
    const hasChaos = hasKeyword(keywords, ["[Hex]", "[Burn]", "[Chaos]"]);
    const hasReality = hasKeyword(keywords, ["[Threshold]", "[Collapse]", "[Transcendent]"]);
    
    // Choose power word
    let powerWord = "";
    if (hasDivine) powerWord = choose(["Divine", "Celestial", "Sacred", "Holy"]);
    else if (hasChaos) powerWord = choose(["Chaotic", "Infernal", "Abyssal", "Dark"]);
    else if (hasReality) powerWord = choose(["Transcendent", "Eternal", "Infinite", "Ultimate"]);
    else if (hasDefensive && hasOffensive) powerWord = choose(["Balanced", "Harmonious", "Unified"]);
    else if (hasDefensive) powerWord = choose(["Guardian", "Bastion", "Fortress", "Sanctuary"]);
    else if (hasOffensive) powerWord = choose(["Devastating", "Annihilating", "Overwhelming"]);
    else powerWord = choose(["Mystic", "Arcane", "Cosmic", "Ethereal"]);
    
    // Choose theme word
    let themeWord = "";
    if (isMultiEngine) themeWord = choose(["Convergence", "Synthesis", "Unity", "Fusion"]);
    else if (hasKeyword(keywords, ["[Structure]", "[Field]"])) themeWord = choose(["Foundation", "Matrix", "Lattice"]);
    else if (hasKeyword(keywords, ["[Heal]"])) themeWord = choose(["Restoration", "Renewal", "Vitality"]);
    else if (hasKeyword(keywords, ["[Burn]"])) themeWord = choose(["Flame", "Inferno", "Pyre"]);
    else if (hasKeyword(keywords, ["[Threshold]"])) themeWord = choose(["Horizon", "Singularity", "Apex"]);
    else themeWord = choose(["Essence", "Force", "Power", "Energy"]);
    
    // Choose action/noun
    let actionNoun = "";
    if (hasKeyword(keywords, ["[Strike]", "[Detonate]"])) actionNoun = choose(["Strike", "Blast", "Impact"]);
    else if (hasKeyword(keywords, ["[Shield]"])) actionNoun = choose(["Shield", "Ward", "Barrier"]);
    else if (hasKeyword(keywords, ["[Support]"])) actionNoun = choose(["Aura", "Blessing", "Boon"]);
    else if (hasKeyword(keywords, ["[Reveal]"])) actionNoun = choose(["Vision", "Sight", "Insight"]);
    else actionNoun = choose(["Nexus", "Core", "Pulse", "Wave"]);
    
    // Combine with randomization to avoid repetition
    return `${powerWord} ${themeWord} ${actionNoun}`;
}
```

---

## 🔢 FUSION DEPTH TRACKING

### **Depth System:**

```javascript
FUSION_DEPTH = {
    depth0: {
        type: "Base skill",
        example: "Shield Projection",
        ingredients: "None (original skill)"
    },
    
    depth1: {
        type: "Simple fusion",
        example: "Guardian's Embrace",
        ingredients: "2-3 base skills"
    },
    
    depth2: {
        type: "Advanced fusion",
        example: "Trinity Foundation",
        ingredients: "Base skills + depth-1 fused skills"
    },
    
    depth3: {
        type: "Complex fusion",
        example: "Five-Pillar Convergence",
        ingredients: "Mix of base + depth-1 + depth-2"
    },
    
    depth4: {
        type: "Master fusion",
        example: "Seven-Engine Harmony",
        ingredients: "Deep tree with multiple fused skills"
    },
    
    depth5: {
        type: "Legendary fusion",
        example: "Divine Trifecta",
        ingredients: "Requires depth-4 components"
    },
    
    depth6Plus: {
        type: "Ultimate fusion",
        example: "Cosmic Synthesis → OM",
        ingredients: "Path to OM (transcendent tier)"
    }
}
```

### **Depth Calculation:**

```javascript
function calculateFusionDepth(inputSkills) {
    // Find the deepest skill in the input
    const maxInputDepth = Math.max(...inputSkills.map(s => s.fusionDepth || 0));
    
    // New fusion is 1 level deeper than the deepest input
    return maxInputDepth + 1;
}
```

---

## 🧬 KEYWORD SYNTHESIS (THE MAGIC)

### **How Keywords Combine:**

```javascript
function synthesizeKeywords(allKeywords, skillCount) {
    // STEP 1: Count keyword frequency
    const keywordCounts = {};
    allKeywords.forEach(kw => {
        keywordCounts[kw] = (keywordCounts[kw] || 0) + 1;
    });
    
    // STEP 2: Find dominant keywords (appear in 50%+ of inputs)
    const dominantKeywords = Object.keys(keywordCounts)
        .filter(kw => keywordCounts[kw] >= skillCount * 0.5)
        .slice(0, 3); // Max 3 dominant
    
    // STEP 3: Detect Tag Algebra combos
    const comboKeywords = detectCombos(allKeywords);
    
    // STEP 4: Add fusion-specific keywords
    const fusionKeywords = [];
    
    // Offensive + Defensive = [Adaptive]
    if (hasKeyword(allKeywords, ["[Strike]", "[Burn]"]) && 
        hasKeyword(allKeywords, ["[Shield]", "[Heal]"])) {
        fusionKeywords.push("[Adaptive]");
    }
    
    // 3+ engines = [Cross-Engine]
    const engines = extractUniqueEngines(allKeywords);
    if (engines.size >= 3) {
        fusionKeywords.push("[Cross-Engine]");
    }
    
    // Angel + Demon = [Order/Chaos-Balanced]
    if (hasKeyword(allKeywords, ["[Bless]", "[Sanctify]"]) &&
        hasKeyword(allKeywords, ["[Hex]", "[Chaos]"])) {
        fusionKeywords.push("[Order/Chaos-Balanced]");
    }
    
    // STEP 5: Combine (max 5 keywords total)
    return [
        ...dominantKeywords,
        ...comboKeywords.slice(0, 2),
        ...fusionKeywords
    ].slice(0, 5);
}
```

---

## 📊 EXAMPLE FUSION CHAINS

### **Example 1: Simple Fusion (Depth 1)**

```
INPUT:
- Shield Projection (T1, 2 KP, [Shield], [Structure])
- Healing Touch (T1, 2 KP, [Heal], [Ally])

FUSION ALGORITHM:
- Avg Tier: (1+1)/2 = 1 → New Tier: 1
- Total KP: 2+2=4 → 60% = 2.4 → 3 KP (with depth bonus)
- Keywords: [Shield], [Heal] → Dominant
- Combo: Shield + Heal detected! → Adds [Sanctuary] keyword
- Name: "Guardian's Embrace"

OUTPUT:
{
    id: "SKILL_MULTI_F001",
    name: "Guardian's Embrace",
    tier: 1,
    keywords: ["[Shield]", "[Heal]", "[Sanctuary]"],
    effect: "Grant shields + heal over time to ally",
    kpCost: 3,
    fusionDepth: 1,
    fusionIngredients: ["SKILL_FOUNDATIONAL_001", "SKILL_THERAPEUTIC_023"]
}
```

### **Example 2: Triple Fusion (Depth 1)**

```
INPUT:
- Shield Projection (T1)
- Burn Cascade (T2)
- Threshold Surge (T3)

FUSION ALGORITHM:
- Avg Tier: (1+2+3)/3 = 2 → New Tier: 2
- Total KP: 2+3+4=9 → 60% = 5.4 → 5 KP
- Keywords: [Shield], [Burn], [Threshold] → All dominant
- Combo: Burn + Threshold detected! + Defensive element
- Cross-engine: 3 engines → [Cross-Engine] added
- Name: "Pyroclastic Bastion"

OUTPUT:
{
    id: "SKILL_MULTI_F002",
    name: "Pyroclastic Bastion",
    tier: 2,
    keywords: ["[Shield]", "[Burn]", "[Threshold]", "[Cross-Engine]"],
    effect: "Deploy burning structure. At Threshold 50, explode dealing AoE damage while protecting allies.",
    kpCost: 5,
    fusionDepth: 1,
    fusionIngredients: ["SKILL_FOUNDATIONAL_001", "SKILL_TANTRA_042", "SKILL_SINGULARITY_089"]
}
```

### **Example 3: Deep Fusion (Depth 2)**

```
INPUT:
- Guardian's Embrace (Depth 1, fused skill)
- Burn Cascade (T2, base skill)
- Threshold Surge (T3, base skill)

FUSION ALGORITHM:
- Max depth: 1 → New depth: 2
- Avg Tier: (1+2+3)/3 = 2 + depth*0.25 = 2.5 → Tier 3
- Total KP: 3+3+4=10 → 60% = 6 + depth*0.5 = 7 → capped at 5
- Keywords: [Shield], [Heal], [Burn], [Threshold] → 4-element fusion
- Combo: Adaptive (offensive+defensive) + Cross-Engine
- Name: "Eternal Convergence Nexus"

OUTPUT:
{
    id: "SKILL_MULTI_F042",
    name: "Eternal Convergence Nexus",
    tier: 3,
    keywords: ["[Shield]", "[Heal]", "[Burn]", "[Threshold]", "[Adaptive]"],
    effect: "Deploy ultimate structure. Heals allies, burns enemies. At Threshold 75, all effects doubled.",
    kpCost: 5,
    fusionDepth: 2,
    fusionIngredients: [
        "SKILL_MULTI_F001",  // Guardian's Embrace (itself a fusion!)
        "SKILL_TANTRA_042",
        "SKILL_SINGULARITY_089"
    ]
}
```

---

## 🔄 FUSION WORKFLOW (Player Experience)

```
STEP 1: Player opens Fusion Lab
    ↓
STEP 2: Drag 2-8 skills into fusion slots
    ↓
STEP 3: LIVE PREVIEW updates in real-time
    Shows: Tier, KP, Keywords (partial), Depth, Combos detected
    Hides: Exact name, Full effect (preserve discovery!)
    ↓
STEP 4: Player decides:
    - [Preview Only] - Free, experiment forever
    - [Save Recipe] - Bookmark for later (0 cost)
    - [Fuse Now] - Spend Fusion Orbs, create skill permanently
    ↓
STEP 5: If [Fuse Now]:
    - Consume Fusion Orbs (1-5 based on depth)
    - Generate new skill (run fusion algorithm)
    - Auto-unlock skill in library
    - Show full skill details (NOW revealed!)
    - Save recipe automatically
```

---

## ✨ FUSION SYSTEM FEATURES

### **What Makes This System Special:**

1. **Preview is FREE** - Experiment without cost
2. **Non-destructive** - Original skills stay after fusion
3. **Infinite recursion** - Fuse fused skills infinitely
4. **Auto-naming** - Cool badass names generated
5. **Smart IDs** - Clear but not overwhelming
6. **No duplicates** - Skills are unique (can't have 2x same skill on card)
7. **Depth tracking** - Shows fusion complexity
8. **Combo detection** - Tag Algebra finds synergies automatically

### **Constraints That Make It Balanced:**

- **KP scaling:** 60% of input (diminishing returns)
- **Fusion Orbs:** Limited resource, earned through play
- **Depth cost:** Deeper fusions cost more Orbs
- **Tier caps:** Can't exceed Tier 4 (except OM at Tier 5)
- **Keyword limit:** Max 5 keywords per skill

---

## 🎯 SIMPLE IMPLEMENTATION PLAN

### **Phase 1: Base Skill System**
1. Define 100 skills per engine (simple JSON)
2. Create skill database (JSON file or SQLite)
3. Build skill library UI (browse/filter/search)

### **Phase 2: Fusion Algorithm**
1. Implement `fuseSkills()` function
2. Create keyword synthesis logic
3. Build name generation system
4. Test with sample skills

### **Phase 3: Fusion UI**
1. Build 2-8 slot fusion interface
2. Implement live preview system
3. Add Fusion Orb economy
4. Create recipe library

### **Phase 4: Integration**
1. Connect to Combo Brain (tag algebra)
2. Add unlock tracking
3. Build fusion tree visualizer
4. Test fusion chains

---

## 📝 OPEN DECISIONS (Simplified List)

1. **Fusion Orb Name:** "Fusion Orbs" or "Synthesis Cores" or "Alchemy Seeds"?
2. **First Engine Priority:** Which 100 skills to implement first? (Recommend: Foundational)
3. **Fusion Orb Costs:** Current (1/1/2/3/5 for depths 1-5) good? Or adjust?
4. **Name Generation:** Need more variety in word pools? (power words, themes, nouns)

---

**Status:** ✅ PURE SKILL & FUSION SYSTEM DEFINED  
**Focus:** Skills → Fusion → Infinite combinations  
**Next:** Review & start creating actual skills!

---

*"Simple systems create complex emergence. 965 skills + infinite fusions = unlimited possibilities."* ✨
