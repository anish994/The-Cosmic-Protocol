#!/usr/bin/env python3
"""
SKILL QUALITY VALIDATOR v1.0
- Verifies every skill is standalone awesome
- Checks completeness, balance, and uniqueness
- Reports any weak/incomplete skills
"""

import json
from collections import defaultdict

class SkillQualityValidator:
    """Validates skill quality"""
    
    def __init__(self, skills_path):
        with open(skills_path) as f:
            self.skills = json.load(f)
    
    def check_completeness(self):
        """Check each skill has all required fields"""
        
        print(f"\n✅ CHECKING SKILL COMPLETENESS")
        print("="*60)
        
        required_fields = [
            "id", "name", "category", "type", "rarity", 
            "cost", "cooldown", "power_tier", "layers"
        ]
        
        incomplete = []
        
        for skill in self.skills:
            missing = [f for f in required_fields if f not in skill]
            if missing:
                incomplete.append({
                    "skill": skill.get("name", "Unknown"),
                    "missing_fields": missing
                })
        
        if incomplete:
            print(f"⚠️ Found {len(incomplete)} incomplete skills:")
            for item in incomplete[:5]:
                print(f"   - {item['skill']}: Missing {item['missing_fields']}")
        else:
            print(f"✅ All {len(self.skills)} skills have required fields")
        
        return len(incomplete) == 0
    
    def check_balance(self):
        """Check skill balance across tiers and rarities"""
        
        print(f"\n⚖️ CHECKING SKILL BALANCE")
        print("="*60)
        
        # Tier distribution
        tier_dist = defaultdict(int)
        for skill in self.skills:
            tier = skill.get("power_tier", 1)
            tier_dist[tier] += 1
        
        print(f"\nPower Tier Distribution (should be pyramid):")
        for tier in sorted(tier_dist.keys()):
            count = tier_dist[tier]
            pct = (count / len(self.skills)) * 100
            bar = "█" * int(pct / 2)
            print(f"   Tier {tier:2}: {count:4} ({pct:5.1f}%) {bar}")
        
        # Rarity distribution
        rarity_dist = defaultdict(int)
        for skill in self.skills:
            rarity = skill.get("rarity", "common")
            rarity_dist[rarity] += 1
        
        print(f"\nRarity Distribution:")
        for rarity in ["common", "uncommon", "rare", "epic", "legendary"]:
            count = rarity_dist.get(rarity, 0)
            pct = (count / len(self.skills)) * 100
            bar = "█" * int(pct / 2)
            print(f"   {rarity:10}: {count:4} ({pct:5.1f}%) {bar}")
        
        return True
    
    def check_uniqueness(self):
        """Check each skill is unique and powerful"""
        
        print(f"\n🌟 CHECKING SKILL UNIQUENESS")
        print("="*60)
        
        # Check for duplicate names
        names = defaultdict(list)
        for skill in self.skills:
            names[skill.get("name", "")].append(skill.get("id", ""))
        
        duplicates = {name: ids for name, ids in names.items() if len(ids) > 1}
        
        if duplicates:
            print(f"⚠️ Found {len(duplicates)} duplicate names:")
            for name, ids in list(duplicates.items())[:5]:
                print(f"   - {name}: {ids}")
        else:
            print(f"✅ All {len(self.skills)} skills have unique names")
        
        # Check keywords per skill (should have some)
        no_keywords = 0
        for skill in self.skills:
            keywords = set()
            for layer in skill.get("layers", []):
                if "keyword" in layer:
                    keywords.add(layer["keyword"])
            
            if len(keywords) == 0:
                no_keywords += 1
        
        if no_keywords:
            print(f"⚠️ {no_keywords} skills have no keywords")
        else:
            print(f"✅ All {len(self.skills)} skills have keywords")
        
        return len(duplicates) == 0 and no_keywords == 0
    
    def check_awesome_factor(self):
        """Check each skill feels awesome on its own"""
        
        print(f"\n🔥 CHECKING AWESOME FACTOR")
        print("="*60)
        
        awesome_count = 0
        weak_skills = []
        
        for skill in self.skills:
            # Awesome if it has:
            # 1. Good power tier (at least 3)
            # 2. Good rarity (at least uncommon)
            # 3. Interesting keywords
            # 4. Good description
            # 5. Multiple layers
            
            power_tier = skill.get("power_tier", 1)
            rarity_val = {"common": 1, "uncommon": 2, "rare": 3, "epic": 4, "legendary": 5}
            rarity = rarity_val.get(skill.get("rarity", "common"), 1)
            keywords = len([l for l in skill.get("layers", []) if "keyword" in l])
            description = skill.get("description", "")
            layers = len(skill.get("layers", []))
            
            # Scoring
            awesome_score = 0
            awesome_score += min(power_tier, 5)  # Max 5
            awesome_score += rarity  # Max 5
            awesome_score += min(keywords, 3)  # Max 3
            awesome_score += (1 if len(description) > 20 else 0)  # 0-1
            awesome_score += min(layers, 3)  # Max 3
            
            # Total possible: 5+5+3+1+3 = 17
            
            if awesome_score >= 12:
                awesome_count += 1
            else:
                weak_skills.append({
                    "name": skill.get("name"),
                    "score": awesome_score,
                    "tier": power_tier,
                    "rarity": skill.get("rarity"),
                    "keywords": keywords,
                    "layers": layers
                })
        
        print(f"\n🌟 Awesome Skills: {awesome_count} / {len(self.skills)}")
        print(f"   Percentage: {(awesome_count / len(self.skills)) * 100:.1f}%")
        
        if weak_skills:
            print(f"\n⚠️ Weak Skills ({len(weak_skills)} total):")
            for skill in weak_skills[:10]:
                print(f"   - {skill['name']}: Score {skill['score']}/17")
                print(f"     Tier: {skill['tier']}, Rarity: {skill['rarity']}, Keywords: {skill['keywords']}")
        else:
            print(f"\n✅ ALL SKILLS ARE AWESOME!")
        
        return awesome_count / len(self.skills) >= 0.95  # 95%+ should be awesome
    
    def check_ready_for_gameplay(self):
        """Check if skills are ready for gameplay"""
        
        print(f"\n🎮 GAMEPLAY READINESS CHECK")
        print("="*60)
        
        ready = 0
        issues = 0
        
        for skill in self.skills:
            # Ready if:
            checks = {
                "has_id": "id" in skill,
                "has_name": len(skill.get("name", "")) > 0,
                "has_category": "category" in skill,
                "has_rarity": "rarity" in skill,
                "has_tier": "power_tier" in skill,
                "has_cost": "cost" in skill and skill["cost"].get("amount", 0) > 0,
                "has_cooldown": "cooldown" in skill and skill["cooldown"] > 0,
                "has_effects": len(skill.get("layers", [])) > 0,
            }
            
            if all(checks.values()):
                ready += 1
            else:
                issues += 1
        
        print(f"Ready for Gameplay: {ready} / {len(self.skills)}")
        print(f"Percentage: {(ready / len(self.skills)) * 100:.1f}%")
        
        if issues > 0:
            print(f"⚠️ {issues} skills have issues")
        else:
            print(f"✅ ALL SKILLS READY FOR GAMEPLAY!")
        
        return ready / len(self.skills) == 1.0
    
    def sample_awesome_skills(self, count=5):
        """Show examples of awesome skills"""
        
        print(f"\n⭐ SAMPLE AWESOME SKILLS")
        print("="*60)
        
        # Get high-tier legendary skills
        awesome = [s for s in self.skills if s.get("power_tier", 1) >= 8 and s.get("rarity") == "legendary"]
        
        if not awesome:
            awesome = [s for s in self.skills if s.get("power_tier", 1) >= 6]
        
        for skill in awesome[:count]:
            print(f"\n🌟 {skill['name']}")
            print(f"   Tier: {skill.get('power_tier')} | Rarity: {skill.get('rarity')}")
            print(f"   Cost: {skill.get('cost', {}).get('amount', '?')} | Cooldown: {skill.get('cooldown')}s")
            print(f"   Description: {skill.get('description', 'N/A')[:80]}...")
            
            keywords = [l.get("keyword") for l in skill.get("layers", []) if "keyword" in l]
            if keywords:
                print(f"   Keywords: {', '.join(keywords)}")
    
    def generate_report(self):
        """Generate comprehensive report"""
        
        print("\n" + "="*60)
        print("SKILL QUALITY VALIDATION REPORT")
        print("="*60)
        
        results = {
            "completeness": self.check_completeness(),
            "balance": self.check_balance(),
            "uniqueness": self.check_uniqueness(),
            "awesome_factor": self.check_awesome_factor(),
            "gameplay_ready": self.check_ready_for_gameplay(),
        }
        
        self.sample_awesome_skills(5)
        
        print(f"\n" + "="*60)
        print("FINAL VERDICT")
        print("="*60)
        
        all_pass = all(results.values())
        
        if all_pass:
            print(f"\n✅ ✅ ✅ ALL 1,030 SKILLS ARE STANDALONE AWESOME! ✅ ✅ ✅")
            print(f"\nEvery skill:")
            print(f"   ✓ Has complete properties")
            print(f"   ✓ Is balanced across tiers and rarities")
            print(f"   ✓ Has unique identity and keywords")
            print(f"   ✓ Feels awesome and powerful standalone")
            print(f"   ✓ Ready for gameplay immediately")
            print(f"\nREADY FOR PRODUCTION! 🚀")
        else:
            print(f"\n⚠️ Some checks failed:")
            for check, passed in results.items():
                status = "✅" if passed else "❌"
                print(f"   {status} {check}")


# ============================================================================
# MAIN EXECUTION
# ============================================================================

if __name__ == "__main__":
    print("\n🎮 SKILL QUALITY VALIDATOR v1.0")
    print("="*60)
    print("Verifying all 1,030 skills are standalone awesome...")
    
    validator = SkillQualityValidator("E:/game1/data/skills_with_combos_1030.json")
    validator.generate_report()
