"""
Refined Skill Designer v2
- Filters keywords to gameplay-relevant ones
- Validates skill balance and tradeoffs
- Verifies combos are actually synergistic
"""

import json
import re
from collections import defaultdict
import statistics

# ============================================================================
# KEYWORD FILTERING & CATEGORIZATION
# ============================================================================

GAMEPLAY_CATEGORIES = {
    "offensive": ["damage", "attack", "strike", "blast", "explosion", "burn", "poison", "bleed", 
                   "pierce", "slash", "smash", "projectile", "beam", "crush", "impact"],
    "defensive": ["shield", "defense", "block", "dodge", "reflect", "absorb", "invulnerable", 
                  "parry", "fortify", "protect", "barrier"],
    "control": ["stun", "slow", "freeze", "root", "knockback", "pull", "charm", "fear", 
                "silence", "blind", "confuse", "trap", "snare", "immobilize"],
    "utility": ["heal", "regenerate", "cleanse", "buff", "enhance", "amplify", "boost", 
                "increase", "empower", "resurrect", "revive", "teleport", "dash"],
    "debuff": ["weaken", "vulnerable", "cripple", "curse", "doom", "exposure", "fragile"],
    "deployable": ["turret", "mine", "trap", "structure", "totem", "tower", "construct", 
                   "summon", "spawn", "pet", "minion"],
    "mechanic": ["cooldown", "cost", "execute", "chain", "cascade", "bounce", "ricochet", 
                 "pierce", "penetrate", "cleave", "aoe", "radius"],
    "element": ["fire", "ice", "lightning", "nature", "holy", "dark", "arcane", "physical"],
    "utility_tool": ["detect", "reveal", "vision", "sense", "mark", "track", "tag", "identify"],
}

# Keywords that are encyclopedic/non-gameplay
EXCLUDE_KEYWORDS = {
    "grammar", "language", "linguistics", "writing", "speech", "communication",
    "definition", "meaning", "philosophy", "science", "history", "culture",
    "art", "music", "literature", "mathematics", "geometry", "logic",
    "person", "character", "noun", "verb", "adjective", "proper", "name",
    "time", "space", "duration", "length", "width", "height", "mass",
    "color", "shape", "form", "pattern", "texture", "appearance",
    "education", "knowledge", "learning", "study", "research", "theory",
}

def is_gameplay_keyword(keyword, description=""):
    """Check if keyword is gameplay-relevant"""
    keyword_lower = keyword.lower()
    desc_lower = description.lower()
    
    # Exclude encyclopedic keywords
    if keyword_lower in EXCLUDE_KEYWORDS:
        return False
    
    # Check if keyword is in gameplay categories
    for category, keywords in GAMEPLAY_CATEGORIES.items():
        if keyword_lower in keywords:
            return True
    
    # Check description for gameplay indicators
    gameplay_indicators = ["damage", "attack", "defense", "ability", "effect", "cooldown", 
                          "cost", "duration", "radius", "heal", "buff", "debuff"]
    if any(indicator in desc_lower for indicator in gameplay_indicators):
        return True
    
    return False

# ============================================================================
# BALANCE VALIDATION
# ============================================================================

class BalanceValidator:
    """Validates skill balance using cost/cooldown/power ratios"""
    
    def __init__(self):
        self.mana_costs = []
        self.cooldowns = []
        self.power_tiers = []
        self.damages = []
        
    def analyze_skill(self, skill):
        """Extract balance metrics from a skill"""
        metrics = {
            "id": skill.get("id"),
            "name": skill.get("name"),
            "issues": [],
            "warnings": [],
            "balance_score": 100,
        }
        
        cost = skill.get("cost", {}).get("amount", 0)
        cooldown = skill.get("cooldown", 1)
        power_tier = skill.get("power_tier", 1)
        rarity = skill.get("rarity", "common")
        
        # Track metrics
        if cost > 0:
            self.mana_costs.append(cost)
        self.cooldowns.append(cooldown)
        self.power_tiers.append(power_tier)
        
        # Extract damage from layers
        damage = 0
        has_utility = False
        has_debuff = False
        for layer in skill.get("layers", []):
            effect = layer.get("effect", {})
            if "damage" in str(effect).lower():
                damage += effect.get("damage", 0)
            if layer.get("category") in ["buff", "utility"]:
                has_utility = True
            if layer.get("category") == "debuff":
                has_debuff = True
        
        if damage > 0:
            self.damages.append(damage)
        
        # Check cost/power ratio
        if cost == 0 and power_tier >= 4:
            metrics["issues"].append("Free spell with high power tier - balance risk")
            metrics["balance_score"] -= 20
        
        if cost > 100 and cooldown < 5:
            metrics["issues"].append("High cost with short cooldown - spam risk")
            metrics["balance_score"] -= 15
        
        if cooldown > 60 and cost > 50 and power_tier < 3:
            metrics["warnings"].append("Weak spell with high cost/cooldown")
            metrics["balance_score"] -= 10
        
        # Check consistency of rarity vs power
        rarity_map = {"common": 1, "uncommon": 2, "rare": 3, "epic": 4, "legendary": 5}
        expected_tier = rarity_map.get(rarity, 3)
        if power_tier > expected_tier + 1:
            metrics["warnings"].append(f"Power tier ({power_tier}) too high for rarity ({rarity})")
            metrics["balance_score"] -= 8
        
        # Check for meaningful tradeoffs
        if has_debuff and has_utility and cost > 30:
            metrics["warnings"].append("Complex tradeoff (debuff+utility) - verify strategic depth")
        
        return metrics
    
    def get_statistics(self):
        """Return balance statistics"""
        return {
            "avg_mana_cost": statistics.mean(self.mana_costs) if self.mana_costs else 0,
            "median_cooldown": statistics.median(self.cooldowns) if self.cooldowns else 0,
            "avg_power_tier": statistics.mean(self.power_tiers) if self.power_tiers else 0,
            "avg_damage": statistics.mean(self.damages) if self.damages else 0,
        }

# ============================================================================
# COMBO VALIDATION
# ============================================================================

class ComboValidator:
    """Validates combo suggestions are actually synergistic"""
    
    SYNERGY_PAIRS = {
        "damage + crit": 1.5,
        "damage + pierce": 1.4,
        "fire + burn": 1.6,
        "ice + slow": 1.5,
        "stun + damage": 1.4,
        "shield + reflect": 1.5,
        "heal + regenerate": 1.3,
        "trap + control": 1.4,
        "structure + defense": 1.5,
        "summon + buff": 1.3,
        "control + damage": 1.2,
        "debuff + execute": 1.5,
    }
    
    def validate_combo(self, combo_text, skills_dict):
        """Validate if a combo suggestion is sensible"""
        # Parse "Keyword1 + Keyword2 = Result" format
        if "=" not in combo_text or "+" not in combo_text:
            return {"valid": False, "reason": "Invalid format"}
        
        parts = combo_text.split("=")
        inputs = parts[0].strip().split("+")
        result = parts[1].strip()
        
        keyword1 = inputs[0].strip().lower()
        keyword2 = inputs[1].strip().lower() if len(inputs) > 1 else ""
        
        # Check if combo pair is in known synergies
        combo_key = f"{keyword1} + {keyword2}"
        if combo_key in self.SYNERGY_PAIRS:
            return {
                "valid": True,
                "synergy": self.SYNERGY_PAIRS[combo_key],
                "reason": f"Known synergy: {combo_key}"
            }
        
        # Check reverse order
        combo_key_rev = f"{keyword2} + {keyword1}"
        if combo_key_rev in self.SYNERGY_PAIRS:
            return {
                "valid": True,
                "synergy": self.SYNERGY_PAIRS[combo_key_rev],
                "reason": f"Known synergy: {combo_key_rev}"
            }
        
        # Simple heuristics
        gameplay_words = set()
        for category, keywords in GAMEPLAY_CATEGORIES.items():
            gameplay_words.update(keywords)
        
        if keyword1 in gameplay_words and keyword2 in gameplay_words:
            return {"valid": True, "synergy": 1.2, "reason": "Both are gameplay keywords"}
        
        return {"valid": False, "reason": f"Unknown combo: {combo_text}"}

# ============================================================================
# LOAD AND FILTER DATA
# ============================================================================

def load_keyword_data():
    """Load keywords from HTML file"""
    try:
        with open("E:/game1/workshop/system engine mini/02-keywords-matrix-engine.html", "r", encoding="utf-8") as f:
            html_content = f.read()
        
        # Extract TAG_DATA
        match = re.search(r'const TAG_DATA = (\{.*?^        \});', html_content, re.DOTALL | re.MULTILINE)
        if not match:
            print("❌ Could not find TAG_DATA in HTML")
            return {}
        
        import js2py
        tag_data_str = match.group(1)
        tag_data_str_json = json.dumps(eval(tag_data_str))
        keywords = json.loads(tag_data_str_json)
        
        return keywords
    except Exception as e:
        print(f"❌ Error loading keywords: {e}")
        return {}

def filter_keywords(keywords):
    """Filter to gameplay-relevant keywords only"""
    filtered = {}
    excluded_count = 0
    
    for name, data in keywords.items():
        if is_gameplay_keyword(name, data.get("description", "")):
            filtered[name] = data
        else:
            excluded_count += 1
    
    print(f"📊 Keyword Filtering:")
    print(f"   Total keywords: {len(keywords)}")
    print(f"   Gameplay-relevant: {len(filtered)}")
    print(f"   Excluded (encyclopedic): {excluded_count}")
    
    return filtered

# ============================================================================
# REFINE AND VALIDATE SKILLS
# ============================================================================

def refine_skills(skills_json_path, keywords):
    """Load, validate, and refine skills"""
    try:
        with open(skills_json_path, "r", encoding="utf-8") as f:
            skills = json.load(f)
    except:
        print("❌ Could not load skills JSON")
        return []
    
    validator = BalanceValidator()
    combo_checker = ComboValidator()
    refined_skills = []
    issues_summary = defaultdict(int)
    
    for skill in skills[:100]:  # Process first 100 for now
        # Validate balance
        balance = validator.analyze_skill(skill)
        
        # Validate combos
        skill_copy = skill.copy()
        validated_combos = []
        for combo in skill.get("combo_suggestions", []):
            combo_result = combo_checker.validate_combo(combo, {})
            if combo_result["valid"]:
                validated_combos.append({
                    "text": combo,
                    "synergy_multiplier": combo_result.get("synergy", 1.0),
                })
            else:
                issues_summary["bad_combo"] += 1
        
        skill_copy["combo_suggestions"] = validated_combos
        skill_copy["balance_validation"] = balance
        
        # Track issues
        for issue in balance["issues"]:
            issues_summary[issue] += 1
        for warning in balance["warnings"]:
            issues_summary[warning] += 1
        
        refined_skills.append(skill_copy)
    
    stats = validator.get_statistics()
    
    print(f"\n⚖️ Balance Analysis:")
    print(f"   Avg mana cost: {stats['avg_mana_cost']:.1f}")
    print(f"   Median cooldown: {stats['median_cooldown']:.1f}s")
    print(f"   Avg power tier: {stats['avg_power_tier']:.1f}")
    print(f"   Avg damage: {stats['avg_damage']:.1f}")
    
    print(f"\n⚠️ Issues Found:")
    for issue, count in sorted(issues_summary.items(), key=lambda x: x[1], reverse=True):
        print(f"   {issue}: {count}")
    
    return refined_skills

# ============================================================================
# MAIN
# ============================================================================

if __name__ == "__main__":
    print("🔄 Loading and filtering keywords...")
    keywords = load_keyword_data()
    gameplay_keywords = filter_keywords(keywords)
    
    print("\n🔍 Refining and validating skills...")
    refined = refine_skills("E:/game1/data/skills_designed_v2.json", gameplay_keywords)
    
    print("\n💾 Saving refined skills...")
    output_path = "E:/game1/data/skills_refined_v1.json"
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(refined, f, indent=2)
    
    print(f"✅ Saved {len(refined)} refined skills to {output_path}")
