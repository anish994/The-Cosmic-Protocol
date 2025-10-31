"""
Skill Validator v2 - Simple approach
- Works with existing skills JSON
- Validates balance (cost/cooldown/power ratios)
- Validates combos (checks synergy)
- Fixes non-gameplay keywords
"""

import json
from collections import defaultdict
import statistics

# ============================================================================
# BALANCE & QUALITY METRICS
# ============================================================================

class SkillValidator:
    """Validates and scores skills for gameplay balance"""
    
    def __init__(self):
        self.reports = []
        self.balance_stats = {
            "costs": [],
            "cooldowns": [],
            "power_tiers": [],
            "rarities": defaultdict(int),
        }
    
    def validate_skill(self, skill):
        """Validate a single skill and return quality report"""
        report = {
            "id": skill.get("id"),
            "name": skill.get("name"),
            "issues": [],
            "warnings": [],
            "quality_score": 100,
            "recommended_fixes": []
        }
        
        cost = skill.get("cost", {}).get("amount", 0)
        cooldown = skill.get("cooldown", 1)
        power_tier = skill.get("power_tier", 1)
        rarity = skill.get("rarity", "common")
        category = skill.get("category", "").lower()
        
        # Track stats
        if cost > 0:
            self.balance_stats["costs"].append(cost)
        self.balance_stats["cooldowns"].append(cooldown)
        self.balance_stats["power_tiers"].append(power_tier)
        self.balance_stats["rarities"][rarity] += 1
        
        # ===== BALANCE CHECKS =====
        
        # Check 1: Free high-power spells
        if cost == 0 and power_tier >= 4:
            report["issues"].append("❌ Free spell with epic/legendary power - balance risk")
            report["quality_score"] -= 30
            report["recommended_fixes"].append("Add cost (30-60 mana) or reduce power tier")
        
        # Check 2: High cost + short cooldown (spam risk)
        if cost > 80 and cooldown < 5:
            report["issues"].append("⚠️ High cost with very short cooldown - potential spam")
            report["quality_score"] -= 15
            report["recommended_fixes"].append("Increase cooldown to 8-12s or reduce cost")
        
        # Check 3: Very weak with high barriers
        if cost > 50 and cooldown > 30 and power_tier < 2:
            report["issues"].append("❌ Weak spell with severe cost/cooldown penalties")
            report["quality_score"] -= 25
            report["recommended_fixes"].append("Reduce cost/cooldown OR increase power")
        
        # Check 4: Rarity vs Power consistency
        rarity_map = {"common": 1, "uncommon": 2, "rare": 3, "epic": 4, "legendary": 5}
        expected_tier = rarity_map.get(rarity, 3)
        if power_tier > expected_tier + 1:
            report["warnings"].append(f"⚠️ Power tier {power_tier} high for {rarity} rarity (expect {expected_tier})")
            report["quality_score"] -= 10
            report["recommended_fixes"].append(f"Consider rarity: {rarity.upper()} ↔ Power Tier {power_tier}")
        
        # Check 5: Non-gameplay keywords in layers
        bad_keywords = {"grammar", "language", "linguistic", "writing", "time", "space", "character", "person"}
        for layer in skill.get("layers", []):
            keyword = layer.get("keyword", "").lower()
            if keyword in bad_keywords:
                report["issues"].append(f"❌ Non-gameplay keyword in layer: '{keyword}'")
                report["quality_score"] -= 15
                report["recommended_fixes"].append(f"Replace '{keyword}' with gameplay-relevant keyword")
        
        # Check 6: Combo validation
        bad_combos = 0
        for combo in skill.get("combo_suggestions", []):
            combo_text = combo if isinstance(combo, str) else combo.get("text", "")
            # Simple heuristic: valid combos have gameplay keywords
            if not any(keyword in combo_text.lower() for keyword in 
                      ["damage", "attack", "defense", "heal", "stun", "slow", "fire", "ice", "shield", "structure"]):
                bad_combos += 1
        
        if bad_combos > len(skill.get("combo_suggestions", [])) * 0.5:
            report["warnings"].append(f"⚠️ {bad_combos} out of {len(skill.get('combo_suggestions', []))} combos seem disconnected")
            report["quality_score"] -= 12
        
        # ===== GAMEPLAY FEEDBACK =====
        
        if report["quality_score"] == 100:
            report["quality_level"] = "🟢 EXCELLENT - Ready for gameplay"
        elif report["quality_score"] >= 80:
            report["quality_level"] = "🟡 GOOD - Minor improvements suggested"
        elif report["quality_score"] >= 60:
            report["quality_level"] = "🟠 FAIR - Should fix issues"
        else:
            report["quality_level"] = "🔴 POOR - Needs major revision"
        
        return report
    
    def get_summary(self):
        """Return validation summary statistics"""
        return {
            "avg_cost": statistics.mean(self.balance_stats["costs"]) if self.balance_stats["costs"] else 0,
            "median_cooldown": statistics.median(self.balance_stats["cooldowns"]) if self.balance_stats["cooldowns"] else 0,
            "avg_power_tier": statistics.mean(self.balance_stats["power_tiers"]),
            "rarity_distribution": dict(self.balance_stats["rarities"]),
        }

# ============================================================================
# LOAD AND VALIDATE
# ============================================================================

def load_skills(path):
    """Load skills from JSON"""
    try:
        with open(path, "r", encoding="utf-8") as f:
            return json.load(f)
    except Exception as e:
        print(f"❌ Error loading skills: {e}")
        return []

def validate_all_skills(skills):
    """Validate entire skill set"""
    validator = SkillValidator()
    reports = []
    
    print(f"🔍 Validating {len(skills)} skills...\n")
    
    for skill in skills:
        report = validator.validate_skill(skill)
        reports.append(report)
    
    # Summary
    summary = validator.get_summary()
    
    print("=" * 70)
    print("📊 SKILL VALIDATION SUMMARY")
    print("=" * 70)
    print(f"\nBalance Statistics:")
    print(f"  • Average mana cost: {summary['avg_cost']:.1f}")
    print(f"  • Median cooldown: {summary['median_cooldown']:.1f}s")
    print(f"  • Average power tier: {summary['avg_power_tier']:.2f}")
    print(f"  • Rarity distribution: {summary['rarity_distribution']}")
    
    # Quality breakdown
    excellent = sum(1 for r in reports if r["quality_score"] == 100)
    good = sum(1 for r in reports if 80 <= r["quality_score"] < 100)
    fair = sum(1 for r in reports if 60 <= r["quality_score"] < 80)
    poor = sum(1 for r in reports if r["quality_score"] < 60)
    
    print(f"\nQuality Distribution:")
    print(f"  🟢 Excellent (100):    {excellent:4d} skills ({excellent/len(reports)*100:.1f}%)")
    print(f"  🟡 Good (80-99):       {good:4d} skills ({good/len(reports)*100:.1f}%)")
    print(f"  🟠 Fair (60-79):       {fair:4d} skills ({fair/len(reports)*100:.1f}%)")
    print(f"  🔴 Poor (<60):         {poor:4d} skills ({poor/len(reports)*100:.1f}%)")
    
    # Top issues
    all_issues = defaultdict(int)
    for report in reports:
        for issue in report["issues"]:
            all_issues[issue] += 1
    
    print(f"\nTop Issues Found:")
    for issue, count in sorted(all_issues.items(), key=lambda x: x[1], reverse=True)[:10]:
        print(f"  • {issue.replace('❌ ', '').replace('⚠️ ', '')}: {count} skills")
    
    # Show some poor-quality skills for review
    poor_skills = [r for r in reports if r["quality_score"] < 60]
    if poor_skills:
        print(f"\n🔴 Top {min(5, len(poor_skills))} Skills Needing Revision:")
        for report in poor_skills[:5]:
            print(f"\n  [{report['quality_score']}/100] {report['name']} ({report['id']})")
            for issue in report["issues"][:2]:
                print(f"    {issue}")
            if report["recommended_fixes"]:
                print(f"    → Fix: {report['recommended_fixes'][0]}")
    
    return reports, summary

# ============================================================================
# MAIN
# ============================================================================

if __name__ == "__main__":
    print("🔄 Loading skills from JSON...\n")
    skills = load_skills("E:/game1/data/skills_designed_v2.json")
    
    if not skills:
        print("❌ No skills loaded!")
        exit(1)
    
    print(f"✅ Loaded {len(skills)} skills\n")
    
    # Validate
    reports, summary = validate_all_skills(skills)
    
    # Save validation report
    output_file = "E:/game1/data/skill_validation_report.json"
    with open(output_file, "w", encoding="utf-8") as f:
        json.dump({
            "validation_reports": reports[:100],  # Save first 100 for review
            "summary": summary,
            "total_skills_validated": len(reports),
        }, f, indent=2)
    
    print(f"\n✅ Validation report saved to {output_file}")
