#!/usr/bin/env python3
"""
Smart Skill Fixer - Batch processing skills incrementally
Fixes keywords and generates perfect combos
"""

import json

# Synergy database
SYNERGIES = {
    ("damage", "crit"): 1.6,
    ("damage", "pierce"): 1.5,
    ("damage", "execute"): 1.7,
    ("stun", "damage"): 1.7,
    ("stun", "execute"): 1.8,
    ("fire", "burn"): 1.8,
    ("shield", "reflect"): 1.6,
    ("shield", "defense"): 1.5,
    ("heal", "regenerate"): 1.7,
    ("slow", "trap"): 1.6,
    ("amplify", "damage"): 1.5,
    ("amplify", "buff"): 1.6,
    ("construct", "amplify"): 1.5,
    ("construct", "deploy"): 1.6,
    ("field", "damage"): 1.5,
    ("field", "control"): 1.5,
    ("enhance", "buff"): 1.6,
}

# Keyword fixes
FIXES = {
    "grammar": "amplify",
    "language": None,
    "writing": "mark",
    "build": "construct",
    "dot": "burn",
}

class SkillFixer:
    def __init__(self, path):
        with open(path) as f:
            self.skills = json.load(f)
        self.fixed = 0
        self.combos_added = 0
    
    def fix_skill(self, skill):
        """Fix keywords and generate combos for one skill"""
        fixed_this = False
        
        # Fix keywords in layers
        for layer in skill.get("layers", []):
            kw = layer.get("keyword", "").lower()
            if kw in FIXES:
                if FIXES[kw] is not None:
                    layer["keyword"] = FIXES[kw]
                    fixed_this = True
        
        # Generate combos from keywords
        keywords = [layer.get("keyword", "").lower() for layer in skill.get("layers", [])]
        
        combos = []
        for (kw1, kw2), syn in SYNERGIES.items():
            if (kw1 in keywords or kw2 in keywords) and len(combos) < 5:
                text = f"{kw1.capitalize()} + {kw2.capitalize()} = Synergy"
                combos.append({
                    "text": text,
                    "synergy_multiplier": syn,
                    "reasoning": f"Perfect combo: {syn}x multiplier"
                })
        
        old_count = len(skill.get("combo_suggestions", []))
        skill["combo_suggestions"] = combos
        
        if fixed_this:
            self.fixed += 1
        if len(combos) > old_count:
            self.combos_added += len(combos) - old_count
    
    def fix_batch(self, name, skill_ids):
        """Fix a batch of skills"""
        print(f"\n🔧 {name}")
        print("="*60)
        
        for skill in self.skills:
            if skill["id"] in skill_ids:
                self.fix_skill(skill)
                print(f"✓ {skill['name']}")
        
        print(f"\nBatch complete: {len([s for s in self.skills if s['id'] in skill_ids])} skills")
    
    def save(self, output_path):
        """Save fixed skills"""
        with open(output_path, 'w') as f:
            json.dump(self.skills, f, indent=2)
        print(f"\n✅ Saved to {output_path}")

# Run fixer
if __name__ == "__main__":
    print("\n🎮 SMART SKILL FIXER")
    print("="*60)
    
    fixer = SkillFixer("E:/game1/data/skills_designed_v2.json")
    print(f"Loaded {len(fixer.skills)} skills")
    
    # Batch 1: Fix problematic keywords
    batch1 = [
        "SKILL_FOUNDATIONAL_002",
        "SKILL_FOUNDATIONAL_005",
        "SKILL_FOUNDATIONAL_007",
        "SKILL_FOUNDATIONAL_011",
        "SKILL_FOUNDATIONAL_014",
        "SKILL_FOUNDATIONAL_016",
    ]
    
    fixer.fix_batch("BATCH 1: Fix Keywords", batch1)
    fixer.save("E:/game1/data/skills_batch1.json")
    
    # Batch 2: Fix all remaining skills
    batch2 = [s["id"] for s in fixer.skills if s["id"] not in batch1]
    
    fixer.fix_batch("BATCH 2: Perfect Combos", batch2)
    fixer.save("E:/game1/data/skills_fixed_final.json")
    
    # Report
    print(f"\n🎉 FINAL REPORT")
    print("="*60)
    print(f"Skills fixed: {fixer.fixed}")
    print(f"Combos generated: {fixer.combos_added}")
    print(f"\n✅ Ready for validation!")
