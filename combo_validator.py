"""
Combo Validation Engine
- Validates suggested combos are actually synergistic
- Scores combos based on gameplay logic
- Flags bad recommendations for manual fix
"""

import json
from collections import defaultdict

# ============================================================================
# SYNERGY DATABASE
# ============================================================================

SYNERGY_RULES = {
    # Offensive synergies
    ("damage", "crit"): 1.6,
    ("damage", "pierce"): 1.5,
    ("damage", "execute"): 1.7,
    ("attack", "vulnerability"): 1.5,
    ("fire", "burn"): 1.8,
    ("ice", "slow"): 1.6,
    ("lightning", "stun"): 1.6,
    ("poison", "bleed"): 1.5,
    
    # Defensive synergies
    ("shield", "reflect"): 1.6,
    ("defense", "regenerate"): 1.5,
    ("heal", "regenerate"): 1.7,
    ("dodge", "mobility"): 1.5,
    
    # Control synergies
    ("stun", "damage"): 1.7,  # Free hits
    ("slow", "trap"): 1.6,
    ("freeze", "shatter"): 1.7,
    ("root", "damage"): 1.5,
    
    # Deployable synergies
    ("structure", "defense"): 1.6,
    ("structure", "amplify"): 1.5,
    ("turret", "targeting"): 1.5,
    ("trap", "control"): 1.6,
    ("totem", "aura"): 1.5,
    
    # Utility synergies
    ("buff", "amplify"): 1.6,
    ("buff", "stack"): 1.5,
    ("cleanse", "immunity"): 1.6,
    ("heal", "cleanse"): 1.4,
    
    # Elemental combinations
    ("fire", "lightning"): 1.4,  # Energy
    ("fire", "nature"): 1.3,     # Balanced
    ("ice", "nature"): 1.3,      # Life
    ("lightning", "arcane"): 1.4,  # Magical
    
    # Execution chains
    ("debuff", "execute"): 1.7,
    ("vulnerability", "pierce"): 1.6,
    ("expose", "damage"): 1.5,
}

# Gameplay keywords grouped by type
GAMEPLAY_KEYWORDS = {
    "offensive": [
        "damage", "attack", "strike", "blast", "explosion", "burn", "poison", "bleed",
        "pierce", "slash", "smash", "projectile", "beam", "crush", "impact", "execute",
        "crit", "critical", "amplify", "boost"
    ],
    "defensive": [
        "shield", "defense", "block", "dodge", "reflect", "absorb", "invulnerable",
        "parry", "fortify", "protect", "barrier", "regenerate", "heal", "immunity"
    ],
    "control": [
        "stun", "slow", "freeze", "root", "knockback", "pull", "charm", "fear",
        "silence", "blind", "confuse", "trap", "snare", "immobilize", "shatter"
    ],
    "deployable": [
        "turret", "mine", "trap", "structure", "totem", "tower", "construct",
        "summon", "spawn", "pet", "minion", "sentinel"
    ],
    "utility": [
        "heal", "regenerate", "cleanse", "buff", "enhance", "amplify", "boost",
        "increase", "empower", "resurrect", "revive", "teleport", "dash", "blink"
    ],
    "debuff": [
        "weaken", "vulnerable", "cripple", "curse", "doom", "exposure", "fragile",
        "expose", "mark"
    ],
    "element": [
        "fire", "ice", "lightning", "nature", "holy", "dark", "arcane", "physical",
        "water", "earth", "wind", "energy"
    ]
}

# ============================================================================
# COMBO VALIDATOR
# ============================================================================

class ComboValidator:
    """Validates and scores skill combos for synergy"""
    
    def __init__(self):
        self.report = {
            "total_combos": 0,
            "valid_combos": 0,
            "questionable_combos": 0,
            "bad_combos": 0,
            "synergy_scores": [],
        }
    
    def extract_keywords(self, combo_text):
        """Extract keywords from combo text"""
        # Format: "Keyword1 + Keyword2 = Result"
        if "+" not in combo_text:
            return None, None
        
        parts = combo_text.split("=")[0].split("+")
        if len(parts) < 2:
            return None, None
        
        kw1 = parts[0].strip().lower()
        kw2 = parts[1].strip().lower()
        return kw1, kw2
    
    def find_keyword_type(self, keyword):
        """Find category of a keyword"""
        for category, keywords in GAMEPLAY_KEYWORDS.items():
            if keyword in keywords:
                return category
        return None
    
    def score_combo(self, kw1, kw2):
        """Score a combo for synergy"""
        # Direct synergy match
        combo_key = (kw1, kw2)
        if combo_key in SYNERGY_RULES:
            return SYNERGY_RULES[combo_key], "direct_match"
        
        # Reverse order
        combo_key_rev = (kw2, kw1)
        if combo_key_rev in SYNERGY_RULES:
            return SYNERGY_RULES[combo_key_rev], "direct_match_reversed"
        
        # Category matching
        cat1 = self.find_keyword_type(kw1)
        cat2 = self.find_keyword_type(kw2)
        
        if not cat1 or not cat2:
            return 0.5, "unknown_keyword"
        
        if cat1 == cat2:
            # Same category combos (usually strong)
            if cat1 in ["offensive", "defensive", "control"]:
                return 1.4, "same_category_synergy"
            else:
                return 1.2, "same_category"
        
        # Cross-category logic
        cross_category_synergies = {
            ("offensive", "defensive"): 1.1,  # Weak
            ("offensive", "control"): 1.5,     # Strong (stun->damage)
            ("defensive", "control"): 1.4,     # Good (shield->dodge)
            ("offensive", "debuff"): 1.6,      # Strong (weaken->damage)
            ("control", "debuff"): 1.5,        # Good (stun->weak)
        }
        
        key = tuple(sorted([cat1, cat2]))
        if key in cross_category_synergies:
            return cross_category_synergies[key], "cross_category"
        
        return 1.0, "generic_combination"
    
    def validate_combo(self, combo_text, skill_name=""):
        """Validate a single combo"""
        self.report["total_combos"] += 1
        
        kw1, kw2 = self.extract_keywords(combo_text)
        if not kw1 or not kw2:
            return {
                "text": combo_text,
                "valid": False,
                "reason": "Invalid format - expected 'Keyword1 + Keyword2 = Result'",
                "score": 0,
            }
        
        score, reason = self.score_combo(kw1, kw2)
        
        result = {
            "text": combo_text,
            "keyword_1": kw1,
            "keyword_2": kw2,
            "synergy_score": score,
            "synergy_reason": reason,
        }
        
        if score >= 1.5:
            result["valid"] = True
            result["quality"] = "🟢 EXCELLENT"
            self.report["valid_combos"] += 1
        elif score >= 1.2:
            result["valid"] = True
            result["quality"] = "🟡 GOOD"
            self.report["valid_combos"] += 1
        elif score >= 1.0:
            result["valid"] = True
            result["quality"] = "🟠 FAIR"
            self.report["questionable_combos"] += 1
        else:
            result["valid"] = False
            result["quality"] = "🔴 WEAK"
            result["reason"] = f"Low synergy between '{kw1}' and '{kw2}' - consider different combo"
            self.report["bad_combos"] += 1
        
        self.report["synergy_scores"].append(score)
        return result
    
    def get_summary(self):
        """Get validation summary"""
        import statistics
        scores = self.report["synergy_scores"]
        return {
            "total_combos": self.report["total_combos"],
            "valid_percentage": (self.report["valid_combos"] / self.report["total_combos"] * 100) if self.report["total_combos"] else 0,
            "avg_synergy_score": statistics.mean(scores) if scores else 0,
            "median_synergy_score": statistics.median(scores) if scores else 0,
            "questionable_count": self.report["questionable_combos"],
            "bad_count": self.report["bad_combos"],
        }

# ============================================================================
# VALIDATE ALL SKILLS
# ============================================================================

def validate_all_skill_combos(skills):
    """Validate combos across all skills"""
    validator = ComboValidator()
    results = {
        "skills_processed": 0,
        "skills_with_combos": 0,
        "all_combo_results": [],
        "skills_with_bad_combos": [],
    }
    
    for skill in skills:
        results["skills_processed"] += 1
        
        combos = skill.get("combo_suggestions", [])
        if not combos:
            continue
        
        results["skills_with_combos"] += 1
        skill_combo_results = []
        bad_combos = []
        
        for combo in combos:
            # Handle both string and dict formats
            combo_text = combo if isinstance(combo, str) else combo.get("text", "")
            
            validated = validator.validate_combo(combo_text, skill.get("name", ""))
            skill_combo_results.append(validated)
            
            if not validated.get("valid"):
                bad_combos.append(validated)
        
        if bad_combos:
            results["skills_with_bad_combos"].append({
                "skill_id": skill.get("id"),
                "skill_name": skill.get("name"),
                "bad_combos": bad_combos,
            })
        
        results["all_combo_results"].extend(skill_combo_results)
    
    summary = validator.get_summary()
    
    print("=" * 70)
    print("🎯 COMBO VALIDATION REPORT")
    print("=" * 70)
    print(f"\nProcessed: {results['skills_processed']} skills")
    print(f"Skills with combos: {results['skills_with_combos']}")
    print(f"\nCombo Analysis:")
    print(f"  • Total combos: {summary['total_combos']}")
    print(f"  • Valid combos: {summary['valid_percentage']:.1f}%")
    print(f"  • Avg synergy score: {summary['avg_synergy_score']:.2f}")
    print(f"  • Median synergy score: {summary['median_synergy_score']:.2f}")
    print(f"  • Questionable: {summary['questionable_count']} combos")
    print(f"  • Weak/Invalid: {summary['bad_count']} combos")
    
    if results["skills_with_bad_combos"]:
        print(f"\n🔴 Skills with Bad Combos ({len(results['skills_with_bad_combos'])} total):")
        for skill_info in results["skills_with_bad_combos"][:10]:
            print(f"\n  • {skill_info['skill_name']} ({skill_info['skill_id']})")
            for combo in skill_info["bad_combos"][:2]:
                print(f"    - {combo['text']}")
                print(f"      → {combo.get('reason', 'Low synergy')}")
    
    # Synergy breakdown
    print(f"\n📊 Synergy Distribution:")
    excellent = sum(1 for c in results["all_combo_results"] if c.get("synergy_score", 0) >= 1.5)
    good = sum(1 for c in results["all_combo_results"] if 1.2 <= c.get("synergy_score", 0) < 1.5)
    fair = sum(1 for c in results["all_combo_results"] if 1.0 <= c.get("synergy_score", 0) < 1.2)
    weak = sum(1 for c in results["all_combo_results"] if c.get("synergy_score", 0) < 1.0)
    
    print(f"  🟢 Excellent (≥1.5): {excellent} combos")
    print(f"  🟡 Good (1.2-1.5):   {good} combos")
    print(f"  🟠 Fair (1.0-1.2):   {fair} combos")
    print(f"  🔴 Weak (<1.0):      {weak} combos")
    
    return results, summary

# ============================================================================
# MAIN
# ============================================================================

if __name__ == "__main__":
    print("🔄 Loading skills...\n")
    
    try:
        with open("E:/game1/data/skills_designed_v2.json", "r", encoding="utf-8") as f:
            skills = json.load(f)
    except Exception as e:
        print(f"❌ Error loading skills: {e}")
        exit(1)
    
    print(f"✅ Loaded {len(skills)} skills\n")
    
    # Validate combos
    results, summary = validate_all_skill_combos(skills)
    
    # Save detailed report
    output_file = "E:/game1/data/combo_validation_report.json"
    with open(output_file, "w", encoding="utf-8") as f:
        json.dump({
            "summary": summary,
            "skills_with_bad_combos": results["skills_with_bad_combos"][:50],  # First 50
            "total_skills_processed": results["skills_processed"],
        }, f, indent=2)
    
    print(f"\n✅ Combo validation report saved to {output_file}")
