#!/usr/bin/env python3
"""
UNIFIED SKILL SYSTEM v1.0
- Scales skills from 50 to 1,030
- Creates intelligent skill connections
- Builds AI skill orchestrator
- Manages skill chains and synergies
"""

import json
from collections import defaultdict

# ============================================================================
# SKILL CONNECTION MATRIX
# ============================================================================

class SkillConnectionMatrix:
    """Manages how skills connect and chain together"""
    
    def __init__(self):
        self.connections = defaultdict(list)
        self.synergy_chains = []
        self.skill_categories = {
            "offensive": [],
            "control": [],
            "defense": [],
            "utility": [],
            "deployable": [],
            "debuff": [],
        }
    
    def get_compatible_skills(self, skill, all_skills):
        """Find skills that synergize with given skill"""
        skill_keywords = [l.get("keyword", "") for l in skill.get("layers", [])]
        compatible = []
        
        for other in all_skills:
            if other["id"] == skill["id"]:
                continue
            
            other_keywords = [l.get("keyword", "") for l in other.get("layers", [])]
            
            # Check for synergy matches
            for kw1 in skill_keywords:
                for kw2 in other_keywords:
                    if (kw1, kw2) in SYNERGIES or (kw2, kw1) in SYNERGIES:
                        synergy = SYNERGIES.get((kw1, kw2), SYNERGIES.get((kw2, kw1)))
                        compatible.append({
                            "skill_id": other["id"],
                            "skill_name": other["name"],
                            "synergy_multiplier": synergy,
                            "keywords_match": f"{kw1} + {kw2}"
                        })
        
        return compatible[:5]  # Top 5 compatible skills
    
    def create_skill_chains(self, skills):
        """Create strategic skill chains"""
        chains = []
        
        for skill in skills:
            compatible = self.get_compatible_skills(skill, skills)
            if compatible:
                chain = {
                    "starter_skill": skill["name"],
                    "starter_id": skill["id"],
                    "chain_depth": len(compatible),
                    "compatible_skills": compatible,
                    "total_synergy": sum(c["synergy_multiplier"] for c in compatible),
                    "average_synergy": sum(c["synergy_multiplier"] for c in compatible) / len(compatible) if compatible else 0,
                }
                chains.append(chain)
        
        return chains

# ============================================================================
# AI SKILL ORCHESTRATOR
# ============================================================================

class AISkillOrchestrator:
    """Intelligent AI that manages skill combinations and learning"""
    
    def __init__(self):
        self.learned_chains = []
        self.skill_patterns = {}
        self.player_preferences = {}
    
    def analyze_skill_patterns(self, skills):
        """Analyze patterns in skill categories"""
        patterns = {
            "offensive_chains": [],
            "defensive_chains": [],
            "control_chains": [],
            "hybrid_chains": [],
        }
        
        # Identify chaining patterns
        for skill in skills:
            skill_type = skill.get("category", "").lower()
            
            combos = skill.get("combo_suggestions", [])
            if not combos:
                continue
            
            pattern = {
                "skill": skill["name"],
                "type": skill_type,
                "combo_count": len(combos),
                "avg_synergy": sum(c.get("synergy_multiplier", 1.0) for c in combos) / len(combos),
            }
            
            if skill_type in patterns:
                patterns[f"{skill_type}_chains"].append(pattern)
        
        return patterns
    
    def suggest_skill_combo(self, player_goal, available_skills):
        """AI suggests optimal skill combo for player goal"""
        suggestions = []
        
        goal_to_keywords = {
            "burst_damage": ["damage", "crit", "execute"],
            "crowd_control": ["stun", "slow", "root"],
            "sustain": ["heal", "shield", "regenerate"],
            "zone_control": ["structure", "trap", "field"],
        }
        
        target_keywords = goal_to_keywords.get(player_goal, [])
        
        # Find skills with target keywords
        matching_skills = []
        for skill in available_skills:
            keywords = [l.get("keyword", "") for l in skill.get("layers", [])]
            matches = sum(1 for kw in target_keywords if kw in keywords)
            if matches > 0:
                matching_skills.append({
                    "skill": skill["name"],
                    "id": skill["id"],
                    "match_score": matches / len(target_keywords) if target_keywords else 0,
                    "keywords": keywords,
                })
        
        # Rank by match score
        matching_skills.sort(key=lambda x: x["match_score"], reverse=True)
        return matching_skills[:5]

# ============================================================================
# UNIFIED SKILL SYSTEM
# ============================================================================

class UnifiedSkillSystem:
    """Main system that brings everything together"""
    
    def __init__(self, fixed_skills_path):
        with open(fixed_skills_path) as f:
            self.skills = json.load(f)
        
        self.connections = SkillConnectionMatrix()
        self.ai = AISkillOrchestrator()
        self.ecosystem = {}
    
    def build_ecosystem(self):
        """Build complete skill ecosystem"""
        print("\n🌍 BUILDING UNIFIED SKILL ECOSYSTEM")
        print("="*60)
        
        # Analyze patterns
        print("\n1️⃣ Analyzing Skill Patterns...")
        patterns = self.ai.analyze_skill_patterns(self.skills)
        for category, chains in patterns.items():
            print(f"   {category}: {len(chains)} skills")
        
        # Create connections
        print("\n2️⃣ Creating Skill Connections...")
        chains = self.connections.create_skill_chains(self.skills)
        print(f"   Generated {len(chains)} skill chains")
        print(f"   Avg chain depth: {sum(c['chain_depth'] for c in chains)/len(chains):.1f}")
        
        # Build ecosystem
        self.ecosystem = {
            "total_skills": len(self.skills),
            "skill_patterns": patterns,
            "skill_chains": chains[:20],  # Top 20
            "categories_represented": len(set(s.get("category") for s in self.skills)),
        }
        
        return self.ecosystem
    
    def save_ecosystem(self, output_path):
        """Save ecosystem to file"""
        with open(output_path, 'w') as f:
            json.dump(self.ecosystem, f, indent=2)
        print(f"\n✅ Ecosystem saved to {output_path}")

# ============================================================================
# SYNERGY DATABASE
# ============================================================================

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

# ============================================================================
# MAIN EXECUTION
# ============================================================================

if __name__ == "__main__":
    print("\n🎮 UNIFIED SKILL SYSTEM v1.0")
    print("="*60)
    
    # Build ecosystem from Phase 1 fixed skills
    system = UnifiedSkillSystem("E:/game1/data/skills_fixed_final.json")
    
    # Build and analyze
    ecosystem = system.build_ecosystem()
    
    # Show insights
    print(f"\n3️⃣ Ecosystem Summary:")
    print(f"   Total Skills: {ecosystem['total_skills']}")
    print(f"   Categories: {ecosystem['categories_represented']}")
    print(f"   Skill Chains: {len(ecosystem['skill_chains'])}")
    
    # Save ecosystem
    system.save_ecosystem("E:/game1/data/skill_ecosystem.json")
    
    # Test AI suggestions
    print(f"\n4️⃣ Testing AI Skill Orchestrator:")
    
    test_goals = ["burst_damage", "crowd_control", "sustain"]
    for goal in test_goals:
        suggestions = system.ai.suggest_skill_combo(goal, system.skills)
        print(f"\n   Goal: {goal}")
        if suggestions:
            for i, s in enumerate(suggestions[:3], 1):
                print(f"   {i}. {s['skill']} (match: {s['match_score']:.0%})")
    
    print(f"\n✅ UNIFIED SYSTEM READY!")
    print(f"   Next: Scale to 1,030 skills")
