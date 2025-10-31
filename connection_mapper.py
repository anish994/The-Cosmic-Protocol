#!/usr/bin/env python3
"""
SKILL CONNECTION MAPPER v1.0
- Maps synergy between all 1,030 skills
- Creates strategic team compositions
- Identifies key connector skills
- Builds synergy graph
"""

import json
from collections import defaultdict
import math

class ConnectionMapper:
    """Maps skill synergies and teams"""
    
    def __init__(self, skills_path):
        with open(skills_path) as f:
            self.skills = json.load(f)
        
        self.synergy_scores = {}
        self.skill_map = {skill["id"]: skill for skill in self.skills}
        self.connections = defaultdict(list)
        self.teams = []
    
    def extract_keywords(self, skill):
        """Extract keywords from skill layers"""
        keywords = set()
        for layer in skill.get("layers", []):
            if "keyword" in layer:
                keywords.add(layer["keyword"])
        return keywords
    
    def calculate_synergy(self, skill1, skill2):
        """Calculate synergy between two skills"""
        if skill1["id"] == skill2["id"]:
            return 0
        
        keywords1 = self.extract_keywords(skill1)
        keywords2 = self.extract_keywords(skill2)
        
        # Base overlap synergy
        overlap = len(keywords1 & keywords2)
        
        # Tier synergy (similar tier = higher synergy)
        tier_diff = abs(skill1.get("power_tier", 1) - skill2.get("power_tier", 1))
        tier_synergy = max(0, 3 - tier_diff)
        
        # Category synergy (different categories can combo well)
        cat1 = skill1.get("category", "")
        cat2 = skill2.get("category", "")
        category_bonus = 1 if cat1 != cat2 else 0.5
        
        # Rarity bonus (legends + epics combo well)
        rarity_bonus = 0
        rarities = {skill1.get("rarity"), skill2.get("rarity")}
        if "legendary" in rarities or "epic" in rarities:
            rarity_bonus = 1
        
        total_synergy = (overlap * 2) + tier_synergy + (category_bonus) + rarity_bonus
        return total_synergy
    
    def build_connections(self):
        """Build connection graph"""
        print(f"\n🔗 BUILDING CONNECTION GRAPH")
        print("="*60)
        
        total_connections = 0
        
        for i, skill1 in enumerate(self.skills):
            if i % 100 == 0:
                print(f"   Processing skill {i+1}/{len(self.skills)}...")
            
            # Find top 5 synergistic partners
            synergies = []
            for skill2 in self.skills:
                score = self.calculate_synergy(skill1, skill2)
                if score > 0:
                    synergies.append((skill2["id"], skill2["name"], score))
            
            # Sort by synergy and keep top partners
            synergies.sort(key=lambda x: x[2], reverse=True)
            top_partners = synergies[:5]
            
            if top_partners:
                self.connections[skill1["id"]] = top_partners
                total_connections += len(top_partners)
        
        print(f"\n✅ Built {total_connections} total connections")
        print(f"   Average connections per skill: {total_connections / len(self.skills):.1f}")
        
        return self.connections
    
    def build_teams(self):
        """Build optimal team compositions"""
        print(f"\n👥 BUILDING OPTIMAL TEAMS")
        print("="*60)
        
        # Strategy 1: Damage teams (high power tier + burst keywords)
        print(f"\n1️⃣ Burst Damage Teams:")
        burst_skills = [s for s in self.skills if "damage" in self.extract_keywords(s) and s.get("power_tier", 1) >= 2]
        
        damage_teams = []
        for i in range(0, min(50, len(burst_skills)), 3):
            if i + 2 < len(burst_skills):
                team = {
                    "type": "burst",
                    "skills": [burst_skills[j]["id"] for j in range(i, i+3)],
                    "strategy": "High burst damage output",
                }
                damage_teams.append(team)
        
        print(f"   Created {len(damage_teams)} burst teams")
        
        # Strategy 2: Control teams (crowd control + utility)
        print(f"\n2️⃣ Control Teams:")
        control_skills = [s for s in self.skills if "crowd" in self.extract_keywords(s) or "control" in self.extract_keywords(s)]
        
        control_teams = []
        for i in range(0, min(50, len(control_skills)), 3):
            if i + 2 < len(control_skills):
                team = {
                    "type": "control",
                    "skills": [control_skills[j]["id"] for j in range(i, i+3)],
                    "strategy": "Crowd control and utility",
                }
                control_teams.append(team)
        
        print(f"   Created {len(control_teams)} control teams")
        
        # Strategy 3: Sustain teams (defense + healing)
        print(f"\n3️⃣ Sustain Teams:")
        sustain_skills = [s for s in self.skills if "heal" in self.extract_keywords(s) or "defense" in self.extract_keywords(s)]
        
        sustain_teams = []
        for i in range(0, min(50, len(sustain_skills)), 3):
            if i + 2 < len(sustain_skills):
                team = {
                    "type": "sustain",
                    "skills": [sustain_skills[j]["id"] for j in range(i, i+3)],
                    "strategy": "Sustain and survival",
                }
                sustain_teams.append(team)
        
        print(f"   Created {len(sustain_teams)} sustain teams")
        
        # Strategy 4: Combo teams (synergistic chains)
        print(f"\n4️⃣ Synergy Combo Teams:")
        combo_teams = []
        
        for i in range(50):
            # Pick a random skill and follow its connections
            seed_skill = self.skills[i * (len(self.skills) // 50)]
            chain = [seed_skill["id"]]
            
            # Build chain following connections
            current_id = seed_skill["id"]
            for _ in range(2):
                if current_id in self.connections:
                    next_skill_id = self.connections[current_id][0][0]
                    chain.append(next_skill_id)
                    current_id = next_skill_id
            
            if len(chain) == 3:
                team = {
                    "type": "combo",
                    "skills": chain,
                    "strategy": "Synergistic chain damage",
                }
                combo_teams.append(team)
        
        print(f"   Created {len(combo_teams)} combo teams")
        
        self.teams = damage_teams + control_teams + sustain_teams + combo_teams
        return self.teams
    
    def identify_connectors(self):
        """Identify key connector skills"""
        print(f"\n⭐ IDENTIFYING KEY CONNECTORS")
        print("="*60)
        
        connector_scores = defaultdict(float)
        
        for skill_id, partners in self.connections.items():
            for partner_id, partner_name, synergy in partners:
                connector_scores[skill_id] += synergy
        
        # Sort by connector score
        sorted_connectors = sorted(connector_scores.items(), key=lambda x: x[1], reverse=True)
        
        top_connectors = sorted_connectors[:20]
        
        print(f"\n🔥 Top 20 Connector Skills:")
        for i, (skill_id, score) in enumerate(top_connectors, 1):
            skill = self.skill_map[skill_id]
            print(f"   {i:2}. {skill['name']:30} (Score: {score:.1f})")
        
        return top_connectors
    
    def save_mapping(self, output_path):
        """Save connection mapping"""
        mapping_data = {
            "total_skills": len(self.skills),
            "total_connections": sum(len(v) for v in self.connections.values()),
            "connections": {
                k: [
                    {"partner_id": p[0], "partner_name": p[1], "synergy": p[2]}
                    for p in v
                ]
                for k, v in self.connections.items()
            },
            "teams": self.teams,
        }
        
        with open(output_path, 'w') as f:
            json.dump(mapping_data, f, indent=2)
        
        print(f"\n✅ Saved connection mapping to {output_path}")

# ============================================================================
# MAIN EXECUTION
# ============================================================================

if __name__ == "__main__":
    print("\n🎮 SKILL CONNECTION MAPPER v1.0")
    print("="*60)
    
    mapper = ConnectionMapper("E:/game1/data/skills_complete_1030.json")
    
    # Build connections
    mapper.build_connections()
    
    # Build teams
    mapper.build_teams()
    
    # Identify connectors
    mapper.identify_connectors()
    
    # Save
    mapper.save_mapping("E:/game1/data/skill_connections_map.json")
    
    print(f"\n✅ CONNECTION MAPPING COMPLETE!")
    print(f"   Created {len(mapper.teams)} strategic teams")
