# 🎯 SKILL SYSTEM LIFECYCLE - COMPLETE DESIGN

## 📋 OVERVIEW

**Core Philosophy:** 
- Skills are earned through play, NOT purchased
- Fusion is experimental and preview-based
- Resource cost (Fusion Orbs) only applied when you commit to fusion
- All base skills (965) can be unlocked through multiple paths
- Infinite fused skills created through player experimentation

---

## 🔓 SKILL UNLOCKING SYSTEM

### **Starting State:**

```javascript
NEW_PLAYER_UNLOCKS = {
    // STARTER PACK: 20-30 skills across all engines
    foundational: 3,      // Basic structures, shields
    consciousness: 3,     // Simple buffs, awareness
    tantra: 3,           // Basic damage, burn
    singularity: 3,      // Threshold basics
    divination: 2,       // Simple prediction
    characterAnalysis: 2, // Basic reads
    therapeutic: 2,      // Simple heals
    invocation: 2,       // 1-2 Tier 0 angels/deities
    
    total: ~20-30 skills unlocked
    
    // PLAYER CHOICE:
    // At character creation, choose 1 engine to START with 5 extra skills
    // (Specialization path from the beginning)
}
```

### **Unlock Methods (ALL OF THE ABOVE!):**

#### **1. LEVEL PROGRESSION (Core Path)**
```javascript
LEVEL_UNLOCKS = {
    // Every level = 1-2 new skills from random engines
    
    level_1: "Tutorial starter pack (20 skills)",
    level_2: "1 random Tier 0 skill",
    level_3: "1 random Tier 0 skill",
    level_5: "2 random Tier 0-1 skills",
    level_10: "First Tier 1 skill + 1 Invocation entity",
    level_15: "2 Tier 1 skills",
    level_20: "First Tier 2 skill unlocked",
    // ... continues
    level_50: "Tier 3 skills start appearing",
    level_100: "First Tier 4 skill possible",
    
    // RATE: ~2-3 skills per 5 levels = 100 levels to unlock ~40-60 skills
    // Leaves ~900 skills for other unlock methods!
}
```

#### **2. ACHIEVEMENT UNLOCKS (Primary Path)**
```javascript
ACHIEVEMENT_CATEGORIES = {
    combat: {
        "First Blood": "Deal 100 damage in one match → Unlock 1 Tantra skill",
        "Untouchable": "Win without taking damage → Unlock 1 Foundational skill",
        "Combo Master": "Execute 50-chain combo → Unlock 1 Cross-engine skill",
        "Perfect Game": "Win with full HP → Unlock 1 Therapeutic skill"
    },
    
    engines: {
        "Foundational Adept": "Use 100 Foundational skills → Unlock 3 more Foundational",
        "Tantra Initiate": "Deal 10,000 burn damage → Unlock 2 Tantra skills",
        "Singularity Scholar": "Reach Threshold 100 → Unlock 2 Singularity skills",
        "Divine Caller": "Summon 50 entities → Unlock 3 Invocation entities"
    },
    
    exploration: {
        "Cosmic Explorer": "Play 100 matches → Unlock 5 random skills",
        "Jack of All Trades": "Use all 9 engines → Unlock 1 skill per engine",
        "Specialist": "Win 50 matches with 1 engine focus → Unlock 10 skills from that engine"
    },
    
    fusion: {
        "First Fusion": "Create your first fused skill → Unlock 2 Fusion Orbs",
        "Fusion Adept": "Create 10 fused skills → Unlock 5 base skills + 3 Orbs",
        "Deep Synthesis": "Create Fusion Depth 3+ skill → Unlock 10 skills from fusion ingredients' engines",
        "Cross-Engine Alchemist": "Fuse 3+ different engines → Unlock 1 skill from each"
    },
    
    discovery: {
        "Hidden Recipe": "Discover a Yoga-catalyst fusion → Unlock 5 related skills",
        "Pantheon Bridge": "Fuse 3+ pantheons → Unlock 2 entities from each pantheon",
        "Symbolic Unity": "Balance all elements in fusion → Unlock 9 skills (1 per engine)"
    },
    
    mastery: {
        "Engine Master": "Unlock all skills from 1 engine → Unlock 1 Tier 4 skill from that engine",
        "Pantheon Scholar": "Unlock entire pantheon → Unlock legendary entity from that pantheon",
        "Complete Collection": "Unlock all 965 base skills → ??? (Secret achievement)"
    }
}

// ACHIEVEMENTS UNLOCK ~400-500 SKILLS over player lifetime
```

#### **3. DISCOVERY THROUGH EXPLORATION**
```javascript
DISCOVERY_SYSTEMS = {
    // A. POST-MATCH REWARDS (RNG-based)
    matchRewards: {
        win: "20% chance: Unlock 1 skill (tier based on match difficulty)",
        perfectVictory: "50% chance: Unlock 1 Tier 1+ skill",
        comboAchievement: "Unlock skill from combo engines used",
        firstTimeCombo: "100% chance: Unlock 1 skill involved in combo"
    },
    
    // B. COSMIC WEATHER EVENTS (Jyotish-based)
    cosmicEvents: {
        jupiterDasha: "Jupiter periods: 2x skill unlock rate from achievements",
        exaltedPlanets: "Skills aligned with exalted planets have higher drop rates",
        specialNakshatras: "Certain nakshatras unlock rare skills automatically",
        eclipses: "Major events unlock themed skill packs"
    },
    
    // C. COMBO DISCOVERIES
    comboDiscovery: {
        logic: "Execute a natural combo → 30% chance to unlock related skill",
        example: "Use Burn + Threshold combo → Might unlock 'Pyroclasm Trigger'",
        deepCombos: "SSS-tier combos guarantee unlock from participating engines"
    },
    
    // D. FUSION BYPRODUCTS
    fusionDiscovery: {
        logic: "Failed fusion attempts (shouldn't happen) unlock consolation skills",
        experimental: "Fusing unusual combinations unlocks 'discovery bonus' skills",
        depthReward: "Deep fusions (4+) unlock skills from ALL ingredient engines"
    }
}

// DISCOVERY UNLOCKS ~300-400 SKILLS through natural play
```

#### **4. QUEST/CAMPAIGN UNLOCKS**
```javascript
STORY_UNLOCKS = {
    // If you have a campaign/story mode:
    
    tutorial: "Complete tutorial → 5 basic skills",
    chapter1: "Complete Chapter 1 → 10 themed skills",
    bossDefeat: "Defeat major boss → Boss's signature skill unlocked",
    sidequests: "Complete side objectives → Rare skills",
    hiddenAreas: "Find secret locations → Legendary skills"
}

// STORY CAN UNLOCK ~100-200 SKILLS with guaranteed progression
```

---

## 🧪 FUSION SYSTEM MECHANICS

### **The Fusion Orb Resource:**

```javascript
FUSION_ORBS = {
    // CURRENCY FOR COMMITTING TO FUSIONS
    
    name: "Fusion Orbs" (or "Synthesis Cores", "Essence Crystals", "Alchemy Seeds"),
    
    startingAmount: 3, // Players begin with 3 free fusion attempts
    
    // HOW TO EARN MORE:
    sources: {
        levelUp: "1 Orb every 5 levels",
        achievements: "Fusion-related achievements grant 1-5 Orbs",
        matchRewards: "Rare post-match reward (5% chance)",
        dailyLogin: "1 Orb per day for logging in",
        weeklyQuest: "Complete weekly fusion quest → 3 Orbs",
        deepFusions: "Creating Depth 3+ fusions grants 1 Orb back (encourages experimentation)"
    },
    
    cost: {
        depth1Fusion: 1, // Fusing 2-3 basic skills
        depth2Fusion: 1, // Fusing with depth-1 fused skills
        depth3Fusion: 2, // Deep fusions cost more
        depth4Fusion: 3,
        depth5Plus: 5,   // Ultimate fusions are expensive
        omFusion: 0      // OM fusion is FREE (you've already proven mastery)
    },
    
    // RESPECTS EXPERIMENTATION:
    previewFree: true, // Preview costs NOTHING
    saveDraft: true,   // Save fusion attempts without committing
    deleteOrbRefund: false // Cannot unfuse to get Orbs back (commitment matters)
}
```

### **Fusion Flow (With Preview System):**

```javascript
FUSION_WORKFLOW = {
    
    step1_selectSkills: {
        action: "Player drags 2-8 skills into Fusion Lab slots",
        ui: "Visual slots with skill icons, tiers, KP costs shown",
        validation: "Real-time feedback: 'Engines detected', 'Combo possible?', etc."
    },
    
    step2_livePreview: {
        action: "Preview panel updates in REAL-TIME as skills are added/removed",
        showsNOW: {
            tier: "Calculated new tier (0-4)",
            kpCost: "New KP cost",
            engines: "Engines represented",
            keywords: "PARTIAL keywords shown (not full spoilers!)",
            comboHints: "Tag Algebra hints: 'Trinity Foundation pattern detected!'",
            jyotishBonus: "Current cosmic weather effects",
            fusionDepth: "How deep this fusion will be",
            specialPattern: "Yoga, Pantheon Bridge, etc. detection"
        },
        showsHIDDEN: {
            exactName: "??? until fused",
            fullEffect: "??? until fused",
            fullKeywords: "Partially hidden to maintain discovery"
        }
    },
    
    step3_decisionPoint: {
        buttons: [
            {
                name: "PREVIEW ONLY",
                cost: 0,
                effect: "See preview, no commitment, experiment freely"
            },
            {
                name: "SAVE RECIPE",
                cost: 0,
                effect: "Save this combo for later (bookmarked, not executed)"
            },
            {
                name: "FUSE NOW",
                cost: "X Fusion Orbs (based on depth)",
                effect: "Commit to fusion, consume Orbs, create permanent new skill",
                confirmation: "Spend X Orbs to create this fusion?"
            }
        ]
    },
    
    step4_fusionResult: {
        onSuccess: {
            newSkillCreated: true,
            addedToLibrary: true,
            recipeRecorded: true,
            showFullDetails: true, // NOW you see the complete skill!
            checkFirstDiscovery: "Are you the first player to create this exact fusion?",
            rewardBonus: "First discovery grants bonus rewards/achievement"
        },
        
        orbsSpent: true,
        cannotUndo: true, // Fusion is permanent (skill exists now)
        originalSkillsRemain: true // Non-destructive!
    }
}
```

### **Preview System Details:**

```
┌────────────────────────────────────────────────────┐
│  🧪 FUSION PREVIEW                                 │
├────────────────────────────────────────────────────┤
│                                                     │
│  FUSION SLOTS:                                     │
│  [Shield] [Burn] [Threshold] [___] [___] [___]    │
│   T1/2KP   T2/3KP  T3/4KP                          │
│                                                     │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                                     │
│  📊 PREVIEW RESULT:                                │
│                                                     │
│  Name: ??? (Hidden until fused)                   │
│  Tier: 3 (Calculated from inputs)                 │
│  KP Cost: 4 (60% of total input)                  │
│  Fusion Depth: 2                                   │
│                                                     │
│  Engines: 🛡️ + 🔥 + 🌀 (3 detected)              │
│  Keywords: [Shield], [Burn], [???], [???]         │
│           ↑ Dominant shown, others hidden          │
│                                                     │
│  Effect Preview: "Defensive + Offensive hybrid"   │
│  Full effect: ??? (Fuse to discover)              │
│                                                     │
│  💫 COSMIC BONUS: +15% (Jupiter favors!)          │
│  🎯 COMBO DETECTED: Trinity Foundation!           │
│                                                     │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                                     │
│  💎 FUSION COST: 1 Fusion Orb                     │
│  Your Orbs: 7 remaining after fusion              │
│                                                     │
│  [PREVIEW MORE] [SAVE RECIPE] [🔥 FUSE NOW]      │
│                                                     │
└────────────────────────────────────────────────────┘
```

**Key Feature:** Shows enough to make informed decision, but preserves discovery joy!

---

## 📚 SKILL LIBRARY MANAGEMENT

### **Master Library Screen:**

```javascript
SKILL_LIBRARY_UI = {
    totalSkills: {
        base: 965,
        unlocked: 147, // Player's current progress
        fused: 23,     // Player's created fusions
        total: 170     // Available in library
    },
    
    filters: {
        byEngine: ["All", "Foundational", "Consciousness", ...],
        byTier: ["All", "Tier 0", "Tier 1", "Tier 2", "Tier 3", "Tier 4"],
        byCategory: ["All", "Offensive", "Defensive", "Utility", "Hybrid"],
        bySource: ["All", "Base Skills", "Fused Skills", "Invocations"],
        byUnlockStatus: ["Unlocked", "Locked", "All"],
        byFavorite: ["Favorites", "Recent", "Most Used"]
    },
    
    search: {
        byName: "Type skill name",
        byKeyword: "Search by tag ([Shield], [Burn], etc.)",
        byEffect: "Search effect descriptions"
    },
    
    sorting: {
        options: ["Name A-Z", "Tier (Low→High)", "KP Cost", "Recently Unlocked", "Most Used", "Fusion Depth"]
    },
    
    display: {
        gridView: "Icon grid with tooltips",
        listView: "Detailed list with full stats",
        treeView: "Fusion trees showing skill ancestry"
    }
}
```

### **Skill Card Details:**

```
┌──────────────────────────────────────┐
│  🛡️ SHIELD PROJECTION               │
├──────────────────────────────────────┤
│  Tier: 1 | KP: 2 | Foundational     │
│                                      │
│  Keywords: [Shield], [Structure]    │
│  Effect: "Grant 20 shields to ally" │
│                                      │
│  Jyotish: Moon, House 4             │
│  Combos: 12 detected                │
│                                      │
│  Status: ✅ Unlocked                │
│  Unlocked: Level 5 reward           │
│  Used: 47 times                     │
│                                      │
│  [🔖 Favorite] [📋 View Combos]    │
│  [🧪 Use in Fusion]                │
└──────────────────────────────────────┘
```

### **Locked Skill Teaser:**

```
┌──────────────────────────────────────┐
│  🔒 UNKNOWN SKILL                    │
├──────────────────────────────────────┤
│  Tier: 2 | Foundational             │
│                                      │
│  "A powerful defensive structure..." │
│                                      │
│  Unlock Hint:                        │
│  "Win 10 matches using shields"     │
│                                      │
│  OR: Level 15 reward                │
│  OR: Foundational achievement       │
│                                      │
│  Progress: ▓▓▓▓░░░░░░ 4/10 wins    │
└──────────────────────────────────────┘
```

---

## 🔄 FUSED SKILL PERSISTENCE

### **Where Fused Skills Live:**

```javascript
FUSED_SKILL_MANAGEMENT = {
    location: "Skill Library (same as base skills)",
    
    category: {
        hasFlag: "isFused: true",
        filterOption: "Show only Fused Skills",
        visualIndicator: "✨ Sparkle icon on fused skills"
    },
    
    properties: {
        permanence: "Once fused, exists forever in your library",
        deletion: "Can be deleted (no Orb refund)",
        recipeRetention: "Recipe saved even if skill deleted",
        reusability: "Can equip same fused skill on multiple cards",
        uniqueID: "Each fusion attempt creates unique skill instance"
    },
    
    fusionTree: {
        traceable: true,
        ui: "Click skill → 'View Fusion Tree' → See all ingredients recursively",
        example: "'Trinity Foundation' → Shield + Burn + Threshold",
        deepTree: "Fused skills show their own ingredient trees (nested)"
    }
}
```

### **Fusion Recipe Library:**

```javascript
RECIPE_SYSTEM = {
    // SEPARATE from fused skills (metadata system)
    
    storage: {
        savedRecipes: "Bookmarked fusion combinations (not yet executed)",
        discoveredRecipes: "Completed fusions (executed at least once)",
        communityRecipes: "Shared recipes from other players (optional)"
    },
    
    features: {
        saveDraft: "Save 2-8 skill combo without fusing",
        nameRecipe: "Give custom names to your recipes",
        notes: "Add notes: 'Best for late game', 'Requires Jupiter Dasha', etc.",
        shareRecipe: "Share with community (with spoiler tags)",
        importRecipe: "Try someone else's fusion (if you have ingredients)"
    },
    
    ui: {
        recipeCard: {
            name: "Trinity Foundation Recipe",
            ingredients: ["Shield Projection", "Burn Cascade", "Threshold Surge"],
            result: "Trinity Foundation (if already fused) OR ??? (if not)",
            timesUsed: 1,
            createdBy: "You",
            createdDate: "2025-10-25",
            canExecute: "Check if you have ingredients + Orbs"
        }
    }
}
```

---

## 🎯 PROGRESSION CURVE

### **Skill Unlock Timeline:**

```
Level 1-10 (Tutorial Phase):
- Start: 20-30 skills
- Level unlocks: +10-15 skills
- Early achievements: +5-10 skills
- TOTAL: ~50 skills (5% of base library)

Level 10-30 (Learning Phase):
- Level unlocks: +30-40 skills
- Achievement hunting: +30-50 skills
- Discovery: +10-20 skills
- First fusions: +5-10 fused skills
- TOTAL: ~150 skills (15% library)

Level 30-60 (Mastery Phase):
- Level unlocks: +50-60 skills
- Deep achievements: +100-150 skills
- Discovery: +50-80 skills
- Active fusion: +30-50 fused skills
- TOTAL: ~400 skills (40% library)

Level 60-100 (Endgame):
- Level unlocks: +80-100 skills
- Completion achievements: +200-300 skills
- Discovery: +100-150 skills
- Deep fusion trees: +100+ fused skills
- TOTAL: ~900+ skills (90%+ library)

Level 100+ (Post-Game):
- Unlock remaining base skills
- Create ultimate fusions
- Collect all Invocations
- Approach OM requirements
- INFINITE: Fusion combinations
```

### **Fusion Orb Economy:**

```
Starting: 3 Orbs

Early Game (Lv 1-30):
- Earn: 1-2 per week (levels, login, quests)
- Spend: 1 per fusion (Depth 1-2)
- Net: Slight surplus, encourages experimentation

Mid Game (Lv 30-60):
- Earn: 3-5 per week (achievements, matches)
- Spend: 1-2 per fusion (Depth 2-3)
- Net: Balanced, fusion becomes regular activity

Late Game (Lv 60-100):
- Earn: 5-10 per week (deep achievements, refunds)
- Spend: 2-5 per fusion (Depth 3-5)
- Net: Abundance, deep fusion experimentation

Endgame (Lv 100+):
- Earn: Continuous flow
- Spend: Used for ultimate fusions only
- OM Fusion: FREE (ultimate achievement reward)
```

---

## ✨ WHY THIS SYSTEM WORKS

1. **Multiple Paths:** No single bottleneck - level, achieve, discover, fuse!
2. **Player Choice:** Specialization vs generalist strategies
3. **Respects Time:** Fusion preview prevents wasted resources
4. **Encourages Experimentation:** Preview is free, Orbs are generous
5. **Progression Feel:** Constant skill unlocks keep game fresh
6. **No Pay-to-Win:** Cannot purchase skills, only earn through play
7. **Infinite Content:** Fusion creates unlimited new skills
8. **Community Discovery:** Shared recipes create social learning

**The Persona Parallel (But Better!):**
- Persona: Fuse demons, locked combinations, can't preview
- **Your Game:** Fuse skills, free preview, ANY combination works, Tag Algebra auto-detects synergies!

---

## 🚀 IMPLEMENTATION CHECKLIST

### **Phase 1: Base Unlock System**
- [ ] Define starting skill pack (20-30 skills)
- [ ] Create level-up unlock tables
- [ ] Design achievement → skill unlock mappings
- [ ] Build discovery RNG systems

### **Phase 2: Skill Library UI**
- [ ] Master library screen with filters
- [ ] Skill card detail views
- [ ] Locked skill teaser system
- [ ] Search/sort functionality

### **Phase 3: Fusion Orb Economy**
- [ ] Define Orb source values
- [ ] Create Orb cost tables
- [ ] Build Orb earning systems
- [ ] Design UI for Orb display

### **Phase 4: Fusion Preview System**
- [ ] Real-time preview calculator
- [ ] Partial reveal logic (dominant keywords shown)
- [ ] Save recipe functionality
- [ ] Fusion commit workflow

### **Phase 5: Fused Skill Management**
- [ ] Fused skill persistence
- [ ] Fusion tree visualizer
- [ ] Recipe library system
- [ ] Community sharing (optional)

---

**READY TO BUILD THIS!** 🔥

Next step: Want me to create the actual unlock tables (which achievements unlock which skills)? Or move to UI mockups?

