#!/usr/bin/env python3
"""
AI SKILL ORCHESTRATOR v1.0
- Intelligent team suggestions based on playstyle
- Strategy optimization and analysis
- Meta-game insights and balance feedback
- Player goal-based recommendations
"""

import json
from collections import defaultdict
import statistics

class AISkillOrchestrator:
    """Intelligent skill suggestion engine"""
    
    def __init__(self, skills_path, combos_path, connections_path):
        with open(skills_path) as f:
            self.skills = json.load(f)
        with open(combos_path) as f:
            self.combos_db = json.load(f)
        with open(connections_path) as f:
            self.connections = json.load(f)
        
        self.skill_map = {s["id"]: s for s in self.skills}
        self.combos = self.combos_db.get("combos", [])
    
    def analyze_skill_properties(self, skill):
        """Extract and analyze skill properties"""
        
        keywords = set()
        for layer in skill.get("layers", []):
            if "keyword" in layer:
                keywords.add(layer["keyword"])
        
        return {
            "id": skill["id"],
            "name": skill["name"],
            "rarity": skill.get("rarity", "common"),
            "power_tier": skill.get("power_tier", 1),
            "cooldown": skill.get("cooldown", 10),
            "cost": skill.get("cost", {}).get("amount", 30),
            "keywords": keywords,
            "combos_available": len(skill.get("combos", [])),
        }
    
    def suggest_burst_damage_team(self):
        """Suggest optimal burst damage team"""
        
        print(f"\n⚡ BURST DAMAGE STRATEGY")
        print("="*60)
        
        # Find high damage skills with low cooldown
        damage_candidates = []
        
        for skill in self.skills:
            props = self.analyze_skill_properties(skill)
            
            # High tier + structure/construct keywords + low cooldown
            if (props["power_tier"] >= 4 and 
                props["cooldown"] <= 8 and
                ("structure" in props["keywords"] or "construct" in props["keywords"])):
                
                score = (props["power_tier"] * 10) - props["cooldown"] + len(props["keywords"]) * 2
                damage_candidates.append((skill, score))
        
        # Sort by score and pick top 3
        top_3 = sorted(damage_candidates, key=lambda x: x[1], reverse=True)[:3]
        
        team = {
            "type": "burst_damage",
            "playstyle": "Aggressive offensive play with high initial damage",
            "skills": [s[0]["id"] for s in top_3],
            "skill_names": [s[0]["name"] for s in top_3],
            "synergy": "High scaling on structure/construct keywords",
            "avg_tier": statistics.mean([s[0].get("power_tier", 1) for s in top_3]),
            "total_cooldown": sum([s[0].get("cooldown", 10) for s in top_3]),
        }
        
        print(f"   Playstyle: {team['playstyle']}")
        print(f"   Skills: {' → '.join(team['skill_names'])}")
        print(f"   Average tier: {team['avg_tier']:.1f}")
        print(f"   Combined cooldown: {team['total_cooldown']}s")
        
        return team
    
    def suggest_control_team(self):
        """Suggest crowd control focused team"""
        
        print(f"\n🛡️ CONTROL STRATEGY")
        print("="*60)
        
        # Find utility skills with control keywords
        control_candidates = []
        
        for skill in self.skills:
            props = self.analyze_skill_properties(skill)
            
            # Keywords suggesting control/utility
            control_keywords = {"cripple", "field", "anchor", "structure"}
            keyword_match = len(props["keywords"] & control_keywords)
            
            if keyword_match > 0:
                score = keyword_match * 5 + (props["rarity"] == "epic") * 10
                control_candidates.append((skill, score))
        
        # Pick top 3
        top_3 = sorted(control_candidates, key=lambda x: x[1], reverse=True)[:3]
        
        team = {
            "type": "control",
            "playstyle": "Crowd control and battlefield manipulation",
            "skills": [s[0]["id"] for s in top_3],
            "skill_names": [s[0]["name"] for s in top_3],
            "synergy": "Control/field keywords stack for lock-down",
            "control_score": sum([len(self.analyze_skill_properties(s[0])["keywords"]) for s in top_3]),
        }
        
        print(f"   Playstyle: {team['playstyle']}")
        print(f"   Skills: {' → '.join(team['skill_names'])}")
        print(f"   Control score: {team['control_score']}")
        
        return team
    
    def suggest_sustain_team(self):
        """Suggest defensive/sustain team"""
        
        print(f"\n💪 SUSTAIN STRATEGY")
        print("="*60)
        
        # Find defensive skills with high rarity
        sustain_candidates = []
        
        for skill in self.skills:
            props = self.analyze_skill_properties(skill)
            
            # High rarity epic/legendary skills
            is_defensive = props["rarity"] in ["epic", "legendary"]
            
            if is_defensive:
                score = (props["power_tier"] * 2) + (rarity_value := {"epic": 10, "legendary": 15}.get(props["rarity"], 0))
                sustain_candidates.append((skill, score))
        
        # Pick top 3
        top_3 = sorted(sustain_candidates, key=lambda x: x[1], reverse=True)[:3]
        
        team = {
            "type": "sustain",
            "playstyle": "Defensive play with emphasis on survival",
            "skills": [s[0]["id"] for s in top_3],
            "skill_names": [s[0]["name"] for s in top_3],
            "synergy": "High rarity synergy for defensive multipliers",
            "survivability": sum([{"epic": 8, "legendary": 10}.get(s[0].get("rarity", "common"), 3) for s in top_3]),
        }
        
        print(f"   Playstyle: {team['playstyle']}")
        print(f"   Skills: {' → '.join(team['skill_names'])}")
        print(f"   Survivability score: {team['survivability']}")
        
        return team
    
    def suggest_balanced_team(self):
        """Suggest balanced multi-role team"""
        
        print(f"\n⚖️ BALANCED STRATEGY")
        print("="*60)
        
        # Pick one from each rarity tier
        rarity_groups = defaultdict(list)
        
        for skill in self.skills:
            rarity = skill.get("rarity", "common")
            rarity_groups[rarity].append(skill)
        
        # One epic, one rare, one uncommon
        team_skills = []
        
        if rarity_groups["epic"]:
            team_skills.append(rarity_groups["epic"][0])
        if rarity_groups["rare"]:
            team_skills.append(rarity_groups["rare"][len(rarity_groups["rare"])//2])
        if rarity_groups["uncommon"]:
            team_skills.append(rarity_groups["uncommon"][-1])
        
        team = {
            "type": "balanced",
            "playstyle": "Flexible adaptation with varied roles",
            "skills": [s["id"] for s in team_skills],
            "skill_names": [s["name"] for s in team_skills],
            "synergy": "Rarity-based progression for skill growth",
            "flexibility": "Can adapt to multiple threats",
        }
        
        print(f"   Playstyle: {team['playstyle']}")
        print(f"   Skills: {' → '.join(team['skill_names'])}")
        print(f"   Flexibility: {team['flexibility']}")
        
        return team
    
    def generate_meta_report(self):
        """Generate meta-game analysis report"""
        
        print(f"\n📊 META-GAME ANALYSIS")
        print("="*60)
        
        # Analyze combo health
        multipliers = [c["synergy_multiplier"] for c in self.combos]
        
        print(f"\nCombo Health:")
        print(f"   Total combos: {len(self.combos)}")
        print(f"   Average synergy: {statistics.mean(multipliers):.2f}x")
        print(f"   Min synergy: {min(multipliers):.2f}x")
        print(f"   Max synergy: {max(multipliers):.2f}x")
        print(f"   Std deviation: {statistics.stdev(multipliers):.2f}x")
        
        # Power tier distribution
        tier_dist = defaultdict(int)
        for skill in self.skills:
            tier = skill.get("power_tier", 1)
            tier_dist[tier] += 1
        
        print(f"\nPower Distribution:")
        for tier in sorted(tier_dist.keys()):
            count = tier_dist[tier]
            pct = (count / len(self.skills)) * 100
            print(f"   Tier {tier}: {count} skills ({pct:.1f}%)")
        
        # Top synergies
        top_combos = sorted(self.combos, key=lambda x: x["synergy_multiplier"], reverse=True)[:5]
        
        print(f"\nTop Synergies:")
        for i, combo in enumerate(top_combos, 1):
            print(f"   {i}. {' + '.join(combo['skill_names'])} ({combo['synergy_multiplier']}x)")
        
        return {
            "combo_count": len(self.combos),
            "avg_synergy": statistics.mean(multipliers),
            "tier_distribution": dict(tier_dist),
            "top_combos": top_combos,
        }
    
    def save_orchestration_data(self, output_path):
        """Save all orchestration suggestions"""
        
        suggestions = {
            "burst_damage": self.suggest_burst_damage_team(),
            "control": self.suggest_control_team(),
            "sustain": self.suggest_sustain_team(),
            "balanced": self.suggest_balanced_team(),
            "meta": self.generate_meta_report(),
        }
        
        with open(output_path, 'w') as f:
            json.dump(suggestions, f, indent=2)
        
        print(f"\n✅ Saved orchestration data to {output_path}")
        
        return suggestions


# ============================================================================
# MAIN EXECUTION
# ============================================================================

if __name__ == "__main__":
    print("\n🎮 AI SKILL ORCHESTRATOR v1.0")
    print("="*60)
    
    orchestrator = AISkillOrchestrator(
        "E:/game1/data/skills_with_combos_1030.json",
        "E:/game1/data/advanced_combos_database.json",
        "E:/game1/data/skill_connections_map.json"
    )
    
    # Generate all strategies
    print(f"\n🎯 GENERATING STRATEGIC RECOMMENDATIONS")
    print("="*60)
    
    orchestrator.save_orchestration_data("E:/game1/data/ai_orchestration_suggestions.json")
    
    print(f"\n✅ AI ORCHESTRATION COMPLETE!")
    print(f"   Generated 4 strategic team types")
    print(f"   Meta-analysis complete")
    print(f"   Ready for gameplay!")
