#!/usr/bin/env python3
"""
INFINITE DYNAMIC FUSION ENGINE v1.0
- Creates unlimited combos on-demand
- Uses pre-generated 3,609 combos as foundation
- Intelligent fusion rules for endless creativity
- Feels infinite but intelligently constrained
"""

import json
import random
import hashlib
from collections import defaultdict

class InfiniteFusionEngine:
    """Generates infinite combos dynamically with smart rules"""
    
    def __init__(self, skills_path, mega_combos_path):
        with open(skills_path) as f:
            self.skills = json.load(f)
        with open(mega_combos_path) as f:
            mega_data = json.load(f)
            self.pre_generated_combos = mega_data.get("combos", [])
        
        self.skill_map = {s["id"]: s for s in self.skills}
        self.combo_cache = {}  # Cache generated combos
        
        # Fusion algorithm parameters
        self.fusion_algorithms = {
            "keyword_blend": self._algorithm_keyword_blend,
            "tier_escalation": self._algorithm_tier_escalation,
            "rarity_ascension": self._algorithm_rarity_ascension,
            "category_hybrid": self._algorithm_category_hybrid,
            "synergy_resonance": self._algorithm_synergy_resonance,
            "chaos_creation": self._algorithm_chaos_creation,
        }
    
    def generate_fusion(self, skill_ids, fusion_type="auto"):
        """Generate a fusion combo from ANY combination of skills"""
        
        # Create deterministic ID for caching
        fusion_id = self._create_fusion_id(skill_ids)
        
        # Check cache
        if fusion_id in self.combo_cache:
            return self.combo_cache[fusion_id]
        
        # Validate skills exist
        valid_skills = [self.skill_map[sid] for sid in skill_ids if sid in self.skill_map]
        if len(valid_skills) < 2:
            return None
        
        # Determine fusion type
        if fusion_type == "auto":
            fusion_type = random.choice(list(self.fusion_algorithms.keys()))
        
        # Generate fusion using appropriate algorithm
        if fusion_type in self.fusion_algorithms:
            combo = self.fusion_algorithms[fusion_type](valid_skills, fusion_id)
        else:
            combo = self._algorithm_keyword_blend(valid_skills, fusion_id)
        
        # Cache it
        self.combo_cache[fusion_id] = combo
        return combo
    
    def _create_fusion_id(self, skill_ids):
        """Create deterministic ID for fusion"""
        sorted_ids = "_".join(sorted(skill_ids))
        hash_val = hashlib.md5(sorted_ids.encode()).hexdigest()[:12]
        return f"DYN_{hash_val}"
    
    def _algorithm_keyword_blend(self, skills, fusion_id):
        """Blend skills based on keyword overlaps"""
        
        all_keywords = set()
        for skill in skills:
            for layer in skill.get("layers", []):
                if "keyword" in layer:
                    all_keywords.add(layer["keyword"])
        
        base_multiplier = 1.0
        keyword_bonus = min(len(all_keywords) * 0.12, 0.4)
        synergy = min(base_multiplier + keyword_bonus, 2.0)
        
        keyword_names = " + ".join(sorted(list(all_keywords))[:3])
        
        return {
            "id": fusion_id,
            "skills": [s["id"] for s in skills],
            "skill_names": [s["name"] for s in skills],
            "synergy_multiplier": round(synergy, 2),
            "fusion_type": "keyword_blend",
            "fusion_name": f"{keyword_names} Convergence",
            "description": f"Fuses {len(skills)} skills through keyword resonance",
            "dynamic": True,
        }
    
    def _algorithm_tier_escalation(self, skills, fusion_id):
        """Create power progression through tiers"""
        
        tiers = [s.get("power_tier", 1) for s in skills]
        min_tier = min(tiers)
        max_tier = max(tiers)
        tier_range = max_tier - min_tier
        
        base_multiplier = 1.0
        tier_bonus = min((tier_range / 9.0) * 0.5, 0.4)
        synergy = min(base_multiplier + tier_bonus, 2.0)
        
        tier_progression = f"Tier {min_tier}→{max_tier}"
        
        return {
            "id": fusion_id,
            "skills": [s["id"] for s in skills],
            "skill_names": [s["name"] for s in skills],
            "synergy_multiplier": round(synergy, 2),
            "fusion_type": "tier_escalation",
            "fusion_name": f"{tier_progression} Ascension",
            "description": f"Power progression through {len(skills)} skill tiers",
            "dynamic": True,
        }
    
    def _algorithm_rarity_ascension(self, skills, fusion_id):
        """Create rarity progression"""
        
        rarity_values = {"common": 1, "uncommon": 2, "rare": 3, "epic": 4, "legendary": 5}
        rarities = [s.get("rarity", "common") for s in skills]
        rarity_scores = [rarity_values.get(r, 1) for r in rarities]
        
        avg_rarity = sum(rarity_scores) / len(rarity_scores)
        base_multiplier = 1.0
        rarity_bonus = (avg_rarity / 5.0) * 0.4
        synergy = min(base_multiplier + rarity_bonus, 2.0)
        
        rarity_str = " + ".join(rarities)
        
        return {
            "id": fusion_id,
            "skills": [s["id"] for s in skills],
            "skill_names": [s["name"] for s in skills],
            "synergy_multiplier": round(synergy, 2),
            "fusion_type": "rarity_ascension",
            "fusion_name": f"Rarity: {rarity_str}",
            "description": f"Combines rarities: {rarity_str}",
            "dynamic": True,
        }
    
    def _algorithm_category_hybrid(self, skills, fusion_id):
        """Hybrid combination across categories"""
        
        categories = [s.get("category", "base") for s in skills]
        unique_categories = len(set(categories))
        
        base_multiplier = 1.0
        category_bonus = min((unique_categories / 3.0) * 0.35, 0.35)
        synergy = min(base_multiplier + category_bonus, 2.0)
        
        category_str = " ∩ ".join(set(categories))
        
        return {
            "id": fusion_id,
            "skills": [s["id"] for s in skills],
            "skill_names": [s["name"] for s in skills],
            "synergy_multiplier": round(synergy, 2),
            "fusion_type": "category_hybrid",
            "fusion_name": f"{category_str} Synthesis",
            "description": f"Hybrid fusion across {unique_categories} categories",
            "dynamic": True,
        }
    
    def _algorithm_synergy_resonance(self, skills, fusion_id):
        """Deep synergy resonance between skills"""
        
        all_keywords = set()
        for skill in skills:
            for layer in skill.get("layers", []):
                if "keyword" in layer:
                    all_keywords.add(layer["keyword"])
        
        # Keyword overlap patterns
        keyword_patterns = defaultdict(int)
        for skill in skills:
            keywords = set()
            for layer in skill.get("layers", []):
                if "keyword" in layer:
                    keywords.add(layer["keyword"])
            for kw in keywords:
                keyword_patterns[kw] += 1
        
        # High synergy if keywords repeat across multiple skills
        overlap_factor = max(keyword_patterns.values()) / len(skills) if keyword_patterns else 1
        
        base_multiplier = 1.0
        overlap_bonus = min(overlap_factor * 0.5, 0.5)
        synergy = min(base_multiplier + overlap_bonus, 2.0)
        
        top_keyword = max(keyword_patterns, key=keyword_patterns.get) if keyword_patterns else "unity"
        
        return {
            "id": fusion_id,
            "skills": [s["id"] for s in skills],
            "skill_names": [s["name"] for s in skills],
            "synergy_multiplier": round(synergy, 2),
            "fusion_type": "synergy_resonance",
            "fusion_name": f"{top_keyword.title()} Resonance",
            "description": f"Skills resonate through {top_keyword} synergy",
            "dynamic": True,
        }
    
    def _algorithm_chaos_creation(self, skills, fusion_id):
        """Creative chaos fusion - unpredictable combinations"""
        
        # Mix all factors randomly
        tiers = [s.get("power_tier", 1) for s in skills]
        rarity_vals = {"common": 1, "uncommon": 2, "rare": 3, "epic": 4, "legendary": 5}
        rarities = [rarity_vals.get(s.get("rarity", "common"), 1) for s in skills]
        
        # Chaotic calculation
        tier_factor = (max(tiers) - min(tiers)) / 9.0 if len(tiers) > 1 else 0
        rarity_factor = (max(rarities) - min(rarities)) / 4.0 if len(rarities) > 1 else 0
        chaos_factor = random.random() * 0.2
        
        base_multiplier = 1.0
        total_bonus = min(tier_factor * 0.3 + rarity_factor * 0.3 + chaos_factor, 0.5)
        synergy = min(base_multiplier + total_bonus, 2.0)
        
        descriptors = ["Chaotic", "Wild", "Untamed", "Primal", "Cosmic", "Volatile"]
        descriptor = random.choice(descriptors)
        
        return {
            "id": fusion_id,
            "skills": [s["id"] for s in skills],
            "skill_names": [s["name"] for s in skills],
            "synergy_multiplier": round(synergy, 2),
            "fusion_type": "chaos_creation",
            "fusion_name": f"{descriptor} Fusion",
            "description": f"Unpredictable combination of {len(skills)} chaotic forces",
            "dynamic": True,
        }
    
    def get_random_fusion(self, min_skills=2, max_skills=5):
        """Generate random fusion for discovery"""
        
        num_skills = random.randint(min_skills, max_skills)
        skill_ids = random.sample([s["id"] for s in self.skills], num_skills)
        
        return self.generate_fusion(skill_ids, fusion_type="auto")
    
    def get_best_fusions(self, num_results=10):
        """Get best pre-generated combos"""
        
        sorted_combos = sorted(
            self.pre_generated_combos,
            key=lambda x: x.get("synergy_multiplier", 1.5),
            reverse=True
        )
        
        return sorted_combos[:num_results]
    
    def generate_fusion_chain(self, start_skill_id, chain_length=5):
        """Generate chain of fusions"""
        
        chain = []
        current_skills = [start_skill_id]
        
        for step in range(chain_length):
            # Add random skill
            new_skill = random.choice([s["id"] for s in self.skills])
            current_skills.append(new_skill)
            
            # Generate fusion
            fusion = self.generate_fusion(current_skills)
            chain.append(fusion)
            
            # Keep best skill for next iteration
            if len(current_skills) > 2:
                current_skills = current_skills[-2:]  # Keep last 2
        
        return chain


# ============================================================================
# MAIN EXECUTION
# ============================================================================

if __name__ == "__main__":
    print("\n🎮 INFINITE DYNAMIC FUSION ENGINE v1.0")
    print("="*60)
    
    engine = InfiniteFusionEngine(
        "E:/game1/data/skills_with_combos_1030.json",
        "E:/game1/data/mega_combo_pool_5000.json"
    )
    
    print(f"\n✅ Loaded 3,609 pre-generated combos")
    print(f"✅ Ready to generate infinite fusions")
    
    # Test 1: Get best pre-generated combos
    print(f"\n🏆 Top 5 Pre-Generated Combos:")
    best = engine.get_best_fusions(5)
    for i, combo in enumerate(best, 1):
        print(f"   {i}. {' + '.join(combo['skill_names'][:2])}... ({combo['synergy_multiplier']}x)")
    
    # Test 2: Generate random fusions
    print(f"\n🎲 Random Dynamic Fusions:")
    for _ in range(3):
        fusion = engine.get_random_fusion()
        print(f"   ✨ {fusion['fusion_name']} ({fusion['synergy_multiplier']}x)")
    
    # Test 3: Generate fusion chain
    print(f"\n⛓️ Fusion Chain (5 steps):")
    random_skill = engine.skills[0]["id"]
    chain = engine.generate_fusion_chain(random_skill, chain_length=5)
    for i, fusion in enumerate(chain, 1):
        print(f"   Step {i}: {fusion['fusion_name']} ({fusion['synergy_multiplier']}x)")
    
    print(f"\n✅ INFINITE FUSION ENGINE READY!")
    print(f"   Users can now fuse ANY {len(engine.skills)} skills together")
    print(f"   Each fusion generates unique combos infinitely")
    print(f"   Pre-generated pool: 3,609 combos")
    print(f"   Dynamic generation: UNLIMITED")
