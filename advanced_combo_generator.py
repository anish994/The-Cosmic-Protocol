#!/usr/bin/env python3
"""
ADVANCED COMBO GENERATOR v2.0
- Generates 2,000+ perfect combos
- Intelligent synergy multiplier calculation
- Balance-aware combo creation
- Prevents degenerate combinations
"""

import json
import random
from collections import defaultdict

class AdvancedComboGenerator:
    """Creates perfect combos with smart synergy"""
    
    def __init__(self, skills_path, connections_path):
        with open(skills_path) as f:
            self.skills = json.load(f)
        with open(connections_path) as f:
            self.connections = json.load(f)
        
        self.skill_map = {s["id"]: s for s in self.skills}
        self.combos_generated = 0
        self.synergy_database = defaultdict(list)
    
    def extract_keywords(self, skill):
        """Extract keywords from skill"""
        keywords = set()
        for layer in skill.get("layers", []):
            if "keyword" in layer:
                keywords.add(layer["keyword"])
        return keywords
    
    def calculate_advanced_synergy(self, skill1, skill2, combo_index):
        """Calculate sophisticated synergy multiplier"""
        
        keywords1 = self.extract_keywords(skill1)
        keywords2 = self.extract_keywords(skill2)
        
        # Base multiplier starts at 1.0
        multiplier = 1.0
        
        # 1. Keyword overlap bonus (0.0 - 0.4)
        keyword_overlap = len(keywords1 & keywords2)
        overlap_bonus = min(0.4, keyword_overlap * 0.15)
        multiplier += overlap_bonus
        
        # 2. Power tier synergy (0.0 - 0.3)
        tier1 = skill1.get("power_tier", 1)
        tier2 = skill2.get("power_tier", 1)
        tier_diff = abs(tier1 - tier2)
        
        # Same tier or adjacent tier = higher bonus
        if tier_diff <= 1:
            tier_bonus = 0.3
        elif tier_diff <= 2:
            tier_bonus = 0.2
        else:
            tier_bonus = 0.05
        
        multiplier += tier_bonus
        
        # 3. Rarity synergy (0.0 - 0.25)
        rarity_values = {"common": 1, "uncommon": 2, "rare": 3, "epic": 4, "legendary": 5}
        r1 = rarity_values.get(skill1.get("rarity", "common"), 1)
        r2 = rarity_values.get(skill2.get("rarity", "common"), 1)
        
        # Combining similar rarities is good
        rarity_synergy = 1.0 - (abs(r1 - r2) / 5.0)
        rarity_bonus = rarity_synergy * 0.25
        multiplier += rarity_bonus
        
        # 4. Category diversity bonus (0.0 - 0.2)
        cat1 = skill1.get("category", "")
        cat2 = skill2.get("category", "")
        
        if cat1 != cat2 and cat1 and cat2:
            # Different categories = creative combo
            multiplier += 0.2
        
        # 5. Type synergy (0.0 - 0.15)
        type1 = skill1.get("type", "")
        type2 = skill2.get("type", "")
        
        # Complementary types (offensive + defensive)
        if (("offense" in type1 and "defense" in type2) or
            ("defense" in type1 and "offense" in type2)):
            multiplier += 0.15
        elif type1 == type2 and type1:
            multiplier += 0.1
        
        # 6. Cooldown balance (0.0 - 0.1)
        cd1 = skill1.get("cooldown", 10)
        cd2 = skill2.get("cooldown", 10)
        cd_ratio = min(cd1, cd2) / max(cd1, cd2) if max(cd1, cd2) > 0 else 1.0
        
        if cd_ratio > 0.8:  # Similar cooldowns sync well
            multiplier += 0.1
        
        # 7. Combo position factor (0.0 - 0.2)
        # First skill in combo gets slight boost
        if combo_index == 0:
            multiplier += 0.05
        # Middle positions are most synergistic
        elif combo_index == 1:
            multiplier += 0.15
        # Last skill gets finisher bonus
        elif combo_index == 2:
            multiplier += 0.1
        
        # 8. Balance cap - prevent degenerate combos
        # Rare epics combos are naturally good but not broken
        if r1 >= 4 and r2 >= 4:
            multiplier = min(multiplier, 1.8)
        
        # Clamp to reasonable range
        multiplier = max(1.2, min(multiplier, 2.0))
        
        return round(multiplier, 2)
    
    def generate_skill_combo(self, skill1, skill2, skill3):
        """Generate a single 3-skill combo with multiplier"""
        
        # Calculate cumulative synergy
        mult_1_2 = self.calculate_advanced_synergy(skill1, skill2, 0)
        mult_2_3 = self.calculate_advanced_synergy(skill2, skill3, 1)
        mult_final = self.calculate_advanced_synergy(skill1, skill3, 2)
        
        # Combo multiplier is average with emphasis on chain
        combo_multiplier = (mult_1_2 + mult_2_3 + mult_final) / 3.0
        combo_multiplier = round(combo_multiplier, 2)
        
        # Ensure multiplier is in valid range
        combo_multiplier = max(1.2, min(combo_multiplier, 2.0))
        
        combo = {
            "id": f"COMBO_{skill1['id']}_{skill2['id']}_{skill3['id']}",
            "skills": [skill1["id"], skill2["id"], skill3["id"]],
            "skill_names": [skill1["name"], skill2["name"], skill3["name"]],
            "synergy_multiplier": combo_multiplier,
            "damage_type": "synergistic_chain",
            "strategy": f"Chain {skill1['name']} → {skill2['name']} → {skill3['name']}",
        }
        
        return combo
    
    def generate_combos_by_type(self):
        """Generate combos using different strategies"""
        
        print(f"\n💥 GENERATING COMBOS BY TYPE")
        print("="*60)
        
        all_combos = []
        
        # Strategy 1: Top connector chains (highest quality)
        print(f"\n1️⃣ Top Connector Chains:")
        
        conn_data = self.connections.get("connections", {})
        
        for skill_id, partners in list(conn_data.items())[:100]:
            if skill_id not in self.skill_map:
                continue
            
            skill1 = self.skill_map[skill_id]
            
            # Get connected partners
            for i, partner_info in enumerate(partners[:3]):
                partner_id = partner_info.get("partner_id")
                if partner_id not in self.skill_map:
                    continue
                
                skill2 = self.skill_map[partner_id]
                
                # Find third skill from skill2's connections
                if partner_id in conn_data:
                    for second_partner in conn_data[partner_id][:2]:
                        third_id = second_partner.get("partner_id")
                        if third_id and third_id not in self.skill_map:
                            continue
                        
                        if third_id and third_id not in [skill_id, partner_id]:
                            skill3 = self.skill_map[third_id]
                            combo = self.generate_skill_combo(skill1, skill2, skill3)
                            all_combos.append(combo)
        
        print(f"   Generated {len([c for c in all_combos])} connector chains")
        
        # Strategy 2: Tier-based combos (balanced progression)
        print(f"\n2️⃣ Tier-Based Progression Combos:")
        
        tier_groups = defaultdict(list)
        for skill in self.skills:
            tier = skill.get("power_tier", 1)
            tier_groups[tier].append(skill)
        
        tier_combos = 0
        for tier in sorted(tier_groups.keys()):
            skills = tier_groups[tier]
            if len(skills) >= 3:
                # Create multiple combos from this tier
                for _ in range(min(30, len(skills) // 3)):
                    s1, s2, s3 = random.sample(skills, 3)
                    combo = self.generate_skill_combo(s1, s2, s3)
                    all_combos.append(combo)
                    tier_combos += 1
        
        print(f"   Generated {tier_combos} tier-based combos")
        
        # Strategy 3: Rarity-based combos (epic synergies)
        print(f"\n3️⃣ Rarity-Based Epic Combos:")
        
        rarity_groups = defaultdict(list)
        for skill in self.skills:
            rarity = skill.get("rarity", "common")
            rarity_groups[rarity].append(skill)
        
        rarity_combos = 0
        
        # Epic + Epic + Epic combos
        epics = rarity_groups.get("epic", [])
        for _ in range(min(25, len(epics) // 3)):
            if len(epics) >= 3:
                s1, s2, s3 = random.sample(epics, 3)
                combo = self.generate_skill_combo(s1, s2, s3)
                all_combos.append(combo)
                rarity_combos += 1
        
        # Legendary focus combos
        legends = rarity_groups.get("legendary", [])
        for _ in range(min(20, len(legends) // 3)):
            if len(legends) >= 3:
                s1, s2, s3 = random.sample(legends, 3)
                combo = self.generate_skill_combo(s1, s2, s3)
                all_combos.append(combo)
                rarity_combos += 1
        
        # Mixed rarity combos (epic + rare + uncommon)
        if epics and rarity_groups.get("rare") and rarity_groups.get("uncommon"):
            for _ in range(25):
                s1 = random.choice(epics)
                s2 = random.choice(rarity_groups.get("rare", []))
                s3 = random.choice(rarity_groups.get("uncommon", []))
                combo = self.generate_skill_combo(s1, s2, s3)
                all_combos.append(combo)
                rarity_combos += 1
        
        print(f"   Generated {rarity_combos} rarity-based combos")
        
        # Strategy 4: Random high-quality combos
        print(f"\n4️⃣ High-Quality Random Combos:")
        
        random_combos = 0
        for _ in range(min(500, len(self.skills) // 2)):
            s1, s2, s3 = random.sample(self.skills, 3)
            combo = self.generate_skill_combo(s1, s2, s3)
            all_combos.append(combo)
            random_combos += 1
        
        print(f"   Generated {random_combos} random quality combos")
        
        # Remove duplicates and limit total
        unique_combos = []
        seen_skills = set()
        
        for combo in sorted(all_combos, key=lambda x: x["synergy_multiplier"], reverse=True):
            skill_tuple = tuple(combo["skills"])
            if skill_tuple not in seen_skills:
                unique_combos.append(combo)
                seen_skills.add(skill_tuple)
        
        print(f"\n✅ Total unique combos: {len(unique_combos)}")
        
        return unique_combos[:2000]  # Cap at 2,000 combos
    
    def integrate_combos_into_skills(self, combos):
        """Add combos to skill definitions"""
        print(f"\n🔗 INTEGRATING COMBOS INTO SKILLS")
        print("="*60)
        
        # Map combos to skills
        skill_combos = defaultdict(list)
        
        for combo in combos:
            skill_ids = combo["skills"]
            for skill_id in skill_ids:
                skill_combos[skill_id].append(combo)
        
        # Add top combos to each skill (max 5)
        for skill in self.skills:
            if skill["id"] in skill_combos:
                top_combos = sorted(
                    skill_combos[skill["id"]], 
                    key=lambda x: x["synergy_multiplier"], 
                    reverse=True
                )[:5]
                
                skill["combos"] = [
                    {
                        "partner_ids": [s for s in combo["skills"] if s != skill["id"]],
                        "synergy_multiplier": combo["synergy_multiplier"],
                        "strategy": combo["strategy"]
                    }
                    for combo in top_combos
                ]
            else:
                skill["combos"] = []
        
        print(f"   Added combos to all skills")
        print(f"   Average combos per skill: {sum(len(s.get('combos', [])) for s in self.skills) / len(self.skills):.1f}")
        
        return self.skills
    
    def save_combos(self, combos, output_path):
        """Save combo database"""
        
        combo_db = {
            "total_combos": len(combos),
            "average_multiplier": round(sum(c["synergy_multiplier"] for c in combos) / len(combos), 2) if combos else 1.0,
            "min_multiplier": min(c["synergy_multiplier"] for c in combos) if combos else 1.0,
            "max_multiplier": max(c["synergy_multiplier"] for c in combos) if combos else 1.0,
            "combos": combos
        }
        
        with open(output_path, 'w') as f:
            json.dump(combo_db, f, indent=2)
        
        print(f"✅ Saved {len(combos)} combos to {output_path}")


# ============================================================================
# MAIN EXECUTION
# ============================================================================

if __name__ == "__main__":
    print("\n🎮 ADVANCED COMBO GENERATOR v2.0")
    print("="*60)
    
    gen = AdvancedComboGenerator(
        "E:/game1/data/skills_complete_1030.json",
        "E:/game1/data/skill_connections_map.json"
    )
    
    # Generate combos
    combos = gen.generate_combos_by_type()
    
    # Integrate into skills
    skills_with_combos = gen.integrate_combos_into_skills(combos)
    
    # Save combo database
    gen.save_combos(combos, "E:/game1/data/advanced_combos_database.json")
    
    # Save updated skills
    with open("E:/game1/data/skills_with_combos_1030.json", 'w') as f:
        json.dump(skills_with_combos, f, indent=2)
    
    # Calculate stats
    avg_synergy = sum(c["synergy_multiplier"] for c in combos) / len(combos) if combos else 1.5
    
    print(f"\n✅ COMBO GENERATION COMPLETE!")
    print(f"   Combos created: {len(combos)}")
    print(f"   Average synergy: {avg_synergy:.2f}x")
