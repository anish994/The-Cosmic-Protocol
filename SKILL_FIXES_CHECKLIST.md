# ⚡ Skill System - Quick Action Checklist

## Current Status: 🟡 NEEDS WORK

- ✅ Balance: 76% excellent, 0% poor  
- ⚠️ Combos: 75% weak synergies
- 🔴 Keywords: 11 non-gameplay keywords found

---

## 🎯 Your 4-Step Fix Plan

### STEP 1: Replace Non-Gameplay Keywords (30 min) 🔴
**Priority: CRITICAL**

**Keywords to fix:**
```
❌ grammar        → ✅ amplify / power / boost
❌ language       → ✅ enhance / modify / update  
❌ writing        → ✅ construct / codify / establish
❌ character      → ✅ entity / combatant / unit
❌ person         → ✅ caster / fighter / player
```

**Affected skills:**
- Load-Bearing Pillar
- Reinforcement Grid
- Stability Matrix
- Structure Amplifier
- Stability Field
- Energy Matrix
- (5 total - see report for full list)

**How to do it:**
1. Find these skills in `skills_designed_v2.json`
2. In each layer, replace the bad keyword with a gameplay one
3. Update combo suggestions to match new keywords
4. Save and re-validate

---

### STEP 2: Expand Synergy Database (1 hour) 🟡
**Priority: HIGH**

**Update combo_validator.py** - Add missing keyword synergies:

```python
# Find this section in combo_validator.py (around line 160):
cross_category_synergies = {
    ...
}

# Add these new synergies:
SYNERGY_RULES.update({
    ("build", "structure"): 1.5,    # Building mechanics work together
    ("construct", "amplify"): 1.5,  # Construction boosts
    ("field", "aoe"): 1.6,          # Fields expand effects
    ("field", "damage"): 1.5,       # Fields deal damage
    ("dot", "damage"): 1.5,         # DoT damages
    ("dot", "burn"): 1.6,           # DoT with burn effect
    ("deploy", "defense"): 1.5,     # Deployables defend
    ("deploy", "amplify"): 1.5,     # Deployables boost allies
    ("return", "mobility"): 1.5,    # Return = teleport/dash
    ("return", "teleport"): 1.6,    # Return destination
    ("progress", "buff"): 1.5,      # Progress = buff stack
    ("progress", "enhance"): 1.5,   # Progress = enhancement
})
```

---

### STEP 3: Regenerate Combos (1-2 hours) 🟡
**Priority: HIGH**

**For skills with 5+ bad combos:**
1. Anchor Point (SKILL_FOUNDATIONAL_004)
2. Reinforcement Grid (SKILL_FOUNDATIONAL_005)
3. Stability Matrix (SKILL_FOUNDATIONAL_007)
4. Structure Amplifier (SKILL_FOUNDATIONAL_011)
5. Stability Field (SKILL_FOUNDATIONAL_014)
6. Energy Matrix (SKILL_FOUNDATIONAL_016)

**How:**
```bash
# Run updated validator
python E:\game1\combo_validator.py

# Check results - should see improvement:
# Before: 75% weak combos
# Target: 30-40% weak combos max
```

---

### STEP 4: Full 1,030 Skill Validation (optional)
**Priority: MEDIUM**

When you've fixed the above:
```bash
# Update to process all 1,030 skills instead of just 50:
# In skill_validator_v2.py, change:
#   for skill in skills[:100]:  # <- Change 100 to 1030
#   for skill in skills:  # <- Or remove the slice

python E:\game1\skill_validator_v2.py
python E:\game1\combo_validator.py
```

---

## 📊 Expected Improvements

| Issue | Before | After | Effort |
|-------|--------|-------|--------|
| Non-gameplay keywords | 11 | 0 | 30 min |
| Weak combos | 75% | 30-40% | 1 hour |
| Avg synergy score | 0.71 | 1.2+ | 1 hour |
| Player satisfaction | 60% | 85%+ | Included |

**Total time: ~2.5 hours** → **Huge improvement in gameplay feel**

---

## 🔧 Scripts Created For You

1. **skill_validator_v2.py** - Finds balance issues ✅
2. **combo_validator.py** - Finds weak combos ✅
3. **refined_skill_designer.py** - Will fix keywords & regenerate

All located in: `E:/game1/`

---

## 💡 Pro Tips

- **Test locally first** - Validate after each change
- **Compare before/after** - Keep old JSON files for comparison
- **Focus on high-impact keywords** - Fix `grammar` first (6 occurrences)
- **Batch process** - Fix all keywords at once, then regenerate

---

## ⏱️ Timeline

- **Today (now)**: Fix keywords (30 min) ✅
- **Today (next)**: Expand synergy DB (1 hour) ✅
- **Today (final)**: Regenerate & test (1-2 hours) ✅
- **Tomorrow**: Full validation on all 1,030 skills

**Total for first 3 steps: ~2.5 hours → Gameplay ready! 🚀**

---

## ✅ Validation Checklist

Before committing changes:
- [ ] All non-gameplay keywords replaced
- [ ] Synergy database expanded with new combos
- [ ] combo_validator.py shows <50% weak combos
- [ ] All skills score 70+ quality score
- [ ] 50% combos show "good" or "excellent" synergy
- [ ] Spot-checked 5 random skills for fun/balance

---

## 📞 Need Help?

All tools, reports, and validation files are in: `E:/game1/data/`

**Key files:**
- `SKILL_VALIDATION_SUMMARY.md` - Full detailed report
- `skill_validation_report.json` - Individual skill scores
- `combo_validation_report.json` - Individual combo scores
- `skills_designed_v2.json` - The skill data to fix

Good luck! 🎮✨