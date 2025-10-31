#!/usr/bin/env python3
"""
MEGA COMBO EXPANDER v1.0
- Expands 1,147 combos to 5,000+ pre-generated
- Intelligent combo generation with deep AI rules
- Foundation for infinite dynamic fusion
- Creative, endless feel with smart constraints
"""

import json
import random
from collections import defaultdict
import itertools

class MegaComboExpander:
    """Generates massive combo pool + fusion foundation"""
    
    def __init__(self, skills_path, combos_path):
        with open(skills_path) as f:
            self.skills = json.load(f)
        with open(combos_path) as f:
            self.combo_db = json.load(f)
        
        self.skill_map = {s["id"]: s for s in self.skills}
        self.base_combos = self.combo_db.get("combos", [])
        self.all_combos = list(self.base_combos)  # Start with base
        
        # Fusion rule database
        self.fusion_rules = self._build_fusion_rules()
    
    def _build_fusion_rules(self):
        """Build intelligent fusion rules"""
        
        rules = {
            # Keyword synergy patterns
            "keyword_fusion": {
                ("structure", "construct"): {"boost": 1.25, "tag": "structural_mastery"},
                ("structure", "amplify"): {"boost": 1.15, "tag": "amplified_structure"},
                ("amplify", "construct"): {"boost": 1.20, "tag": "construction_surge"},
                ("field", "cripple"): {"boost": 1.30, "tag": "debilitating_field"},
                ("cripple", "anchor"): {"boost": 1.18, "tag": "locked_cripple"},
                ("anchor", "field"): {"boost": 1.22, "tag": "anchored_domain"},
                ("foundation", "amplify"): {"boost": 1.12, "tag": "foundational_surge"},
            },
            
            # Tier patterns
            "tier_fusion": {
                (4, 4): {"boost": 1.10, "tag": "tier4_sync"},
                (5, 5): {"boost": 1.15, "tag": "tier5_sync"},
                (6, 6): {"boost": 1.20, "tag": "tier6_sync"},
                (8, 8): {"boost": 1.25, "tag": "tier8_sync"},
                (10, 10): {"boost": 1.35, "tag": "tier10_perfection"},
                (4, 5): {"boost": 1.08, "tag": "ascending_power"},
                (5, 6): {"boost": 1.12, "tag": "ascending_mastery"},
            },
            
            # Rarity combinations
            "rarity_fusion": {
                ("rare", "rare"): {"boost": 1.12, "tag": "rare_union"},
                ("epic", "epic"): {"boost": 1.25, "tag": "epic_convergence"},
                ("legendary", "legendary"): {"boost": 1.40, "tag": "legendary_fusion"},
                ("epic", "legendary"): {"boost": 1.30, "tag": "ascended_power"},
                ("rare", "epic"): {"boost": 1.18, "tag": "epic_ascension"},
            },
            
            # Category patterns
            "category_fusion": {
                "same": {"boost": 1.05, "tag": "specialized_sync"},
                "different": {"boost": 1.15, "tag": "hybrid_power"},
                "opposite": {"boost": 1.25, "tag": "opposition_force"},
            },
        }
        
        return rules
    
    def generate_extended_combos(self, target_count=5000):
        """Generate extended combo pool"""
        
        print(f"\n📈 GENERATING EXTENDED COMBO POOL")
        print("="*60)
        print(f"Target: {target_count} combos")
        print(f"Base: {len(self.base_combos)} combos")
        
        # Strategy 1: All 4-skill combinations (tier + keyword combos)
        print(f"\n1️⃣ 4-Skill Combinations:")
        four_skill_combos = self._generate_4skill_combos()
        self.all_combos.extend(four_skill_combos)
        print(f"   Generated {len(four_skill_combos)} 4-skill combos")
        
        # Strategy 2: Tier-matched chains (same tier power progression)
        print(f"\n2️⃣ Tier-Matched Chains:")
        tier_combos = self._generate_tier_chains()
        self.all_combos.extend(tier_combos)
        print(f"   Generated {len(tier_combos)} tier-matched combos")
        
        # Strategy 3: Keyword explosion (all keyword pairs)
        print(f"\n3️⃣ Keyword Explosions:")
        keyword_combos = self._generate_keyword_combos()
        self.all_combos.extend(keyword_combos)
        print(f"   Generated {len(keyword_combos)} keyword-fusion combos")
        
        # Strategy 4: Rarity cascades (rare→epic→legendary chains)
        print(f"\n4️⃣ Rarity Cascades:")
        rarity_combos = self._generate_rarity_cascades()
        self.all_combos.extend(rarity_combos)
        print(f"   Generated {len(rarity_combos)} rarity-cascade combos")
        
        # Strategy 5: Cross-category hybrids
        print(f"\n5️⃣ Cross-Category Hybrids:")
        hybrid_combos = self._generate_cross_category()
        self.all_combos.extend(hybrid_combos)
        print(f"   Generated {len(hybrid_combos)} cross-category combos")
        
        # Remove duplicates
        print(f"\n🔄 Deduplicating...")
        unique_combos = []
        seen = set()
        
        for combo in self.all_combos:
            skill_tuple = tuple(sorted(combo.get("skills", [])))
            if skill_tuple not in seen:
                unique_combos.append(combo)
                seen.add(skill_tuple)
        
        self.all_combos = unique_combos[:target_count]
        
        print(f"✅ Final pool: {len(self.all_combos)} unique combos")
        return self.all_combos
    
    def _generate_4skill_combos(self):
        """Generate 4-skill combos (power combos)"""
        combos = []
        
        # Group skills by tier
        tier_groups = defaultdict(list)
        for skill in self.skills:
            tier = skill.get("power_tier", 1)
            tier_groups[tier].append(skill)
        
        # Generate 4-skill combos from same tier
        for tier, skills in tier_groups.items():
            if len(skills) >= 4:
                # Sample random 4-skill combos
                for _ in range(min(50, len(skills) // 4)):
                    combo_skills = random.sample(skills, 4)
                    synergy = self._calculate_fusion_synergy(combo_skills)
                    
                    combo = {
                        "id": f"4SK_{tier}_{'_'.join([s['id'][:8] for s in combo_skills])}",
                        "skills": [s["id"] for s in combo_skills],
                        "skill_names": [s["name"] for s in combo_skills],
                        "synergy_multiplier": synergy,
                        "type": "4_skill_power",
                        "tier": tier,
                    }
                    combos.append(combo)
        
        return combos
    
    def _generate_tier_chains(self):
        """Generate tier progression chains"""
        combos = []
        
        tier_groups = defaultdict(list)
        for skill in self.skills:
            tier = skill.get("power_tier", 1)
            tier_groups[tier].append(skill)
        
        tiers = sorted(tier_groups.keys())
        
        # Adjacent tier combinations
        for i in range(len(tiers) - 1):
            tier1, tier2 = tiers[i], tiers[i + 1]
            skills1 = tier_groups[tier1]
            skills2 = tier_groups[tier2]
            
            for _ in range(min(100, min(len(skills1), len(skills2)) * 2)):
                s1 = random.choice(skills1)
                s2 = random.choice(skills2)
                s3 = random.choice(skills1)
                s4 = random.choice(skills2)
                
                combo_skills = [s1, s2, s3, s4]
                synergy = self._calculate_fusion_synergy(combo_skills)
                
                combo = {
                    "id": f"CHAIN_{tier1}_{tier2}_{''.join([s['id'][0] for s in combo_skills])}",
                    "skills": [s["id"] for s in combo_skills],
                    "skill_names": [s["name"] for s in combo_skills],
                    "synergy_multiplier": synergy,
                    "type": "tier_progression",
                    "tiers": [tier1, tier2],
                }
                combos.append(combo)
        
        return combos
    
    def _generate_keyword_combos(self):
        """Generate keyword-based fusion combos"""
        combos = []
        
        # Extract all keywords
        keyword_skills = defaultdict(list)
        for skill in self.skills:
            keywords = set()
            for layer in skill.get("layers", []):
                if "keyword" in layer:
                    keywords.add(layer["keyword"])
            
            for kw in keywords:
                keyword_skills[kw].append(skill)
        
        # Generate keyword pair combos
        keywords = list(keyword_skills.keys())
        for kw1, kw2 in itertools.combinations(keywords, 2):
            skills1 = keyword_skills[kw1]
            skills2 = keyword_skills[kw2]
            
            for _ in range(min(30, min(len(skills1), len(skills2)))):
                s1 = random.choice(skills1)
                s2 = random.choice(skills2)
                s3 = random.choice(skills1)
                s4 = random.choice(skills2)
                
                combo_skills = [s1, s2, s3, s4]
                synergy = self._calculate_fusion_synergy(combo_skills)
                
                fusion_tag = self.fusion_rules["keyword_fusion"].get(
                    (kw1, kw2), {"tag": f"{kw1}_{kw2}"}
                ).get("tag", f"{kw1}_{kw2}")
                
                combo = {
                    "id": f"KW_{kw1[:3]}_{kw2[:3]}_{''.join([s['id'][0] for s in combo_skills])}",
                    "skills": [s["id"] for s in combo_skills],
                    "skill_names": [s["name"] for s in combo_skills],
                    "synergy_multiplier": synergy,
                    "type": "keyword_fusion",
                    "keywords": [kw1, kw2],
                    "fusion_tag": fusion_tag,
                }
                combos.append(combo)
        
        return combos
    
    def _generate_rarity_cascades(self):
        """Generate rarity progression combos"""
        combos = []
        
        rarity_skills = defaultdict(list)
        for skill in self.skills:
            rarity = skill.get("rarity", "common")
            rarity_skills[rarity].append(skill)
        
        # Rarity chains
        chains = [
            ["common", "uncommon", "rare", "epic"],
            ["uncommon", "rare", "epic", "legendary"],
            ["rare", "epic", "legendary", "legendary"],
            ["epic", "epic", "epic", "legendary"],
        ]
        
        for chain in chains:
            if all(rarity in rarity_skills and len(rarity_skills[rarity]) > 0 for rarity in chain):
                for _ in range(min(50, min(len(rarity_skills[r]) for r in chain))):
                    combo_skills = [random.choice(rarity_skills[r]) for r in chain]
                    synergy = self._calculate_fusion_synergy(combo_skills)
                    
                    combo = {
                        "id": f"RARE_{''.join([r[0] for r in chain])}_{''.join([s['id'][0] for s in combo_skills])}",
                        "skills": [s["id"] for s in combo_skills],
                        "skill_names": [s["name"] for s in combo_skills],
                        "synergy_multiplier": synergy,
                        "type": "rarity_cascade",
                        "rarities": chain,
                    }
                    combos.append(combo)
        
        return combos
    
    def _generate_cross_category(self):
        """Generate cross-category hybrid combos"""
        combos = []
        
        category_skills = defaultdict(list)
        for skill in self.skills:
            category = skill.get("category", "base")
            category_skills[category].append(skill)
        
        categories = list(category_skills.keys())
        
        for cat1, cat2 in itertools.combinations(categories, 2):
            skills1 = category_skills[cat1]
            skills2 = category_skills[cat2]
            
            for _ in range(min(40, min(len(skills1), len(skills2)))):
                s1 = random.choice(skills1)
                s2 = random.choice(skills2)
                s3 = random.choice(skills1)
                s4 = random.choice(skills2)
                
                combo_skills = [s1, s2, s3, s4]
                synergy = self._calculate_fusion_synergy(combo_skills)
                
                combo = {
                    "id": f"HYB_{cat1[:3]}_{cat2[:3]}_{''.join([s['id'][0] for s in combo_skills])}",
                    "skills": [s["id"] for s in combo_skills],
                    "skill_names": [s["name"] for s in combo_skills],
                    "synergy_multiplier": synergy,
                    "type": "hybrid",
                    "categories": [cat1, cat2],
                }
                combos.append(combo)
        
        return combos
    
    def _calculate_fusion_synergy(self, skills):
        """Calculate synergy for fusion"""
        
        base = 1.0
        
        # Keyword matching
        all_keywords = set()
        for skill in skills:
            for layer in skill.get("layers", []):
                if "keyword" in layer:
                    all_keywords.add(layer["keyword"])
        
        keyword_bonus = min(len(all_keywords) * 0.08, 0.32)
        base += keyword_bonus
        
        # Tier alignment
        tiers = [s.get("power_tier", 1) for s in skills]
        tier_variance = max(tiers) - min(tiers)
        tier_bonus = max(0, 0.3 - (tier_variance * 0.05))
        base += tier_bonus
        
        # Rarity synergy
        rarities = [s.get("rarity", "common") for s in skills]
        rarity_value = {"common": 1, "uncommon": 2, "rare": 3, "epic": 4, "legendary": 5}
        rarity_scores = [rarity_value.get(r, 1) for r in rarities]
        rarity_avg = sum(rarity_scores) / len(rarity_scores)
        rarity_bonus = (rarity_avg / 5.0) * 0.2
        base += rarity_bonus
        
        return round(min(base, 2.0), 2)
    
    def save_expanded_combos(self, output_path):
        """Save expanded combo pool"""
        
        combo_db = {
            "total_combos": len(self.all_combos),
            "generation_stages": [
                "base_1147",
                "4skill_combos",
                "tier_chains",
                "keyword_explosions",
                "rarity_cascades",
                "cross_category_hybrids",
            ],
            "average_synergy": round(sum(c.get("synergy_multiplier", 1.5) for c in self.all_combos) / len(self.all_combos), 2),
            "min_synergy": min(c.get("synergy_multiplier", 1.5) for c in self.all_combos),
            "max_synergy": max(c.get("synergy_multiplier", 1.5) for c in self.all_combos),
            "combos": self.all_combos
        }
        
        with open(output_path, 'w') as f:
            json.dump(combo_db, f, indent=2)
        
        print(f"\n✅ Saved {len(self.all_combos)} combos to {output_path}")


# ============================================================================
# MAIN EXECUTION
# ============================================================================

if __name__ == "__main__":
    print("\n🎮 MEGA COMBO EXPANDER v1.0")
    print("="*60)
    print("Expanding from 1,147 to 5,000+ pre-generated combos...")
    
    expander = MegaComboExpander(
        "E:/game1/data/skills_with_combos_1030.json",
        "E:/game1/data/advanced_combos_database.json"
    )
    
    # Generate massive pool
    expanded = expander.generate_extended_combos(target_count=5000)
    
    # Save
    expander.save_expanded_combos("E:/game1/data/mega_combo_pool_5000.json")
    
    print(f"\n✅ MEGA EXPANSION COMPLETE!")
    print(f"   Total combos: {len(expanded)}")
    print(f"   Foundation for infinite dynamic fusion")
