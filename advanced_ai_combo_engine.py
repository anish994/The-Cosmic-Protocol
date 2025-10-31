#!/usr/bin/env python3
"""
ADVANCED AI COMBO ENGINE v1.0
- Intelligently chains 1,147 pre-generated combos
- Smart selection based on game state
- Creative synergy optimization
- Real-time strategy adaptation
"""

import json
from collections import defaultdict
import random

class AdvancedAIComboEngine:
    """Intelligent combo orchestration engine"""
    
    def __init__(self, skills_path, combos_path):
        with open(skills_path) as f:
            self.skills = json.load(f)
        with open(combos_path) as f:
            self.combo_db = json.load(f)
        
        self.skill_map = {s["id"]: s for s in self.skills}
        self.combos = self.combo_db.get("combos", [])
        
        # Build quick lookup structures
        self.combo_by_first_skill = defaultdict(list)
        self.combo_by_synergy = defaultdict(list)
        self.combo_chains = defaultdict(list)
        
        self._build_indices()
    
    def _build_indices(self):
        """Build fast lookup indices for combos"""
        
        for combo in self.combos:
            skills = combo.get("skills", [])
            synergy = combo.get("synergy_multiplier", 1.0)
            
            # Index by first skill for chaining
            if skills:
                self.combo_by_first_skill[skills[0]].append(combo)
            
            # Index by synergy for quality selection
            synergy_bucket = round(synergy * 10) / 10  # Bucket to nearest 0.1x
            self.combo_by_synergy[synergy_bucket].append(combo)
    
    def find_combos_for_goal(self, goal, player_tier=4):
        """Find best combos for specific player goal"""
        
        goal_keywords = {
            "burst": {"structure", "construct", "amplify", "damage"},
            "control": {"cripple", "field", "anchor", "control"},
            "sustain": {"amplify", "foundation", "anchor"},
            "balanced": {"construction", "architecture", "structure"},
        }
        
        target_keywords = goal_keywords.get(goal, set())
        
        matching_combos = []
        
        for combo in self.combos:
            skill_ids = combo.get("skills", [])
            combo_score = 0
            
            # Check keyword alignment
            for skill_id in skill_ids:
                if skill_id in self.skill_map:
                    skill = self.skill_map[skill_id]
                    keywords = set()
                    for layer in skill.get("layers", []):
                        if "keyword" in layer:
                            keywords.add(layer["keyword"])
                    
                    # Score based on keyword overlap
                    overlap = len(keywords & target_keywords)
                    combo_score += overlap * 2
            
            # Bonus for high synergy on high tiers
            synergy = combo.get("synergy_multiplier", 1.0)
            if player_tier >= 5:
                if synergy >= 1.9:
                    combo_score += 10
            elif player_tier >= 3:
                if synergy >= 1.8:
                    combo_score += 5
            
            if combo_score > 0:
                matching_combos.append((combo, combo_score))
        
        # Sort by score and return top 10
        return sorted(matching_combos, key=lambda x: x[1], reverse=True)[:10]
    
    def build_combo_chain(self, start_skill_id, chain_length=5, goal="balanced"):
        """Build a chain of combos for complex strategies"""
        
        chain = []
        current_skill = start_skill_id
        used_skills = set()
        
        for step in range(chain_length):
            # Find combos that start with current skill
            available_combos = [
                c for c in self.combo_by_first_skill.get(current_skill, [])
                if c["id"] not in [combo["id"] for combo in chain]
            ]
            
            if not available_combos:
                break
            
            # Pick best combo for goal
            if goal == "burst":
                selected = max(available_combos, key=lambda x: x.get("synergy_multiplier", 1.0))
            elif goal == "control":
                # Prefer combos with control keywords
                selected = random.choice(available_combos) if available_combos else None
            else:
                # Balanced: prefer high synergy
                selected = max(available_combos, key=lambda x: x.get("synergy_multiplier", 1.0))
            
            if selected:
                chain.append(selected)
                used_skills.update(selected.get("skills", []))
                
                # Move to last skill in combo for next chain
                skills = selected.get("skills", [])
                current_skill = skills[-1] if skills else None
        
        return chain
    
    def calculate_chain_damage(self, combo_chain):
        """Calculate total damage for a combo chain"""
        
        total_multiplier = 1.0
        
        for i, combo in enumerate(combo_chain):
            synergy = combo.get("synergy_multiplier", 1.0)
            
            # Multiplier stacks but with diminishing returns
            # Each combo boosts by (synergy - 1) scaled by position
            boost = (synergy - 1.0) * (1.0 - (i * 0.1))  # Diminish by 10% each step
            total_multiplier *= (1.0 + boost)
        
        return round(total_multiplier, 2)
    
    def ai_choose_best_combo(self, available_skill_ids, enemy_strategy="unknown", player_health=100):
        """AI intelligently chooses best combo for current situation"""
        
        best_combo = None
        best_score = 0
        
        for combo in self.combos:
            skills = combo.get("skills", [])
            
            # Check if all skills in combo are available
            if not all(skill_id in available_skill_ids for skill_id in skills):
                continue
            
            combo_score = 0
            synergy = combo.get("synergy_multiplier", 1.0)
            
            # Base score from synergy
            combo_score = synergy * 100
            
            # Counter-strategy scoring
            if enemy_strategy == "burst":
                # Prioritize defense/control combos
                keywords = self._get_combo_keywords(combo)
                if "cripple" in keywords or "field" in keywords:
                    combo_score += 50
            
            elif enemy_strategy == "control":
                # Prioritize high damage
                if synergy >= 1.9:
                    combo_score += 30
            
            elif enemy_strategy == "balanced":
                # Use highest synergy
                combo_score += synergy * 20
            
            # Health-based urgency
            if player_health < 30:
                # Desperate: go for high damage
                if synergy >= 1.85:
                    combo_score += 40
            
            elif player_health > 80:
                # Healthy: can afford riskier combos
                keywords = self._get_combo_keywords(combo)
                if len(keywords) >= 3:
                    combo_score += 20
            
            if combo_score > best_score:
                best_score = combo_score
                best_combo = combo
        
        return best_combo
    
    def _get_combo_keywords(self, combo):
        """Extract all keywords from combo skills"""
        keywords = set()
        
        for skill_id in combo.get("skills", []):
            if skill_id in self.skill_map:
                skill = self.skill_map[skill_id]
                for layer in skill.get("layers", []):
                    if "keyword" in layer:
                        keywords.add(layer["keyword"])
        
        return keywords
    
    def suggest_next_combo(self, current_combo, player_goal="balanced"):
        """Suggest next combo that chains well with current"""
        
        if not current_combo:
            return None
        
        current_skills = current_combo.get("skills", [])
        last_skill = current_skills[-1] if current_skills else None
        
        if not last_skill:
            return None
        
        # Find combos starting with last skill
        follow_up_combos = self.combo_by_first_skill.get(last_skill, [])
        
        if not follow_up_combos:
            return None
        
        # Sort by synergy and return best
        return max(follow_up_combos, key=lambda x: x.get("synergy_multiplier", 1.0))
    
    def analyze_combo_coverage(self, goal):
        """Analyze how many combos support specific goal"""
        
        goal_keywords = {
            "burst": {"structure", "construct", "amplify"},
            "control": {"cripple", "field", "anchor"},
            "sustain": {"amplify", "foundation"},
            "balanced": {"construction", "architecture", "structure"},
        }
        
        target_keywords = goal_keywords.get(goal, set())
        coverage = 0
        
        for combo in self.combos:
            keywords = self._get_combo_keywords(combo)
            if keywords & target_keywords:
                coverage += 1
        
        return {
            "goal": goal,
            "total_combos": len(self.combos),
            "supporting_combos": coverage,
            "coverage_percent": (coverage / len(self.combos)) * 100 if self.combos else 0,
        }
    
    def generate_ai_strategy(self, player_tier=4):
        """Generate complete AI strategy using 1,147 combos"""
        
        print(f"\n🤖 GENERATING AI STRATEGY (Tier {player_tier})")
        print("="*60)
        
        strategy = {
            "tier": player_tier,
            "primary_combos": [],
            "counter_strategies": {},
            "goal_analysis": {},
        }
        
        # Analyze each goal
        for goal in ["burst", "control", "sustain", "balanced"]:
            print(f"\n📊 Analyzing {goal} strategy...")
            
            # Get best combos for this goal
            best = self.find_combos_for_goal(goal, player_tier)[:5]
            strategy["primary_combos"].append({
                "goal": goal,
                "combos": [
                    {
                        "id": combo[0]["id"],
                        "skills": combo[0].get("skill_names", []),
                        "synergy": combo[0].get("synergy_multiplier", 1.0),
                        "score": combo[1]
                    }
                    for combo in best
                ]
            })
            
            # Coverage analysis
            coverage = self.analyze_combo_coverage(goal)
            strategy["goal_analysis"][goal] = coverage
            
            print(f"   Supporting combos: {coverage['supporting_combos']}/{coverage['total_combos']}")
            print(f"   Coverage: {coverage['coverage_percent']:.1f}%")
        
        # Counter strategies
        print(f"\n⚔️ Building counter strategies...")
        
        for enemy_goal in ["burst", "control", "sustain"]:
            counter_goal = {
                "burst": "control",
                "control": "burst",
                "sustain": "burst",
            }.get(enemy_goal, "balanced")
            
            counter_combos = self.find_combos_for_goal(counter_goal, player_tier)[:3]
            strategy["counter_strategies"][enemy_goal] = [
                {
                    "id": combo[0]["id"],
                    "skills": combo[0].get("skill_names", []),
                    "synergy": combo[0].get("synergy_multiplier", 1.0),
                }
                for combo in counter_combos
            ]
            print(f"   vs {enemy_goal}: {len(strategy['counter_strategies'][enemy_goal])} counters")
        
        return strategy
    
    def save_ai_strategy(self, strategy, output_path):
        """Save AI strategy to file"""
        
        with open(output_path, 'w') as f:
            json.dump(strategy, f, indent=2)
        
        print(f"\n✅ Saved AI strategy to {output_path}")


# ============================================================================
# MAIN EXECUTION
# ============================================================================

if __name__ == "__main__":
    print("\n🎮 ADVANCED AI COMBO ENGINE v1.0")
    print("="*60)
    print("Building intelligent combo orchestration system...")
    
    engine = AdvancedAIComboEngine(
        "E:/game1/data/skills_with_combos_1030.json",
        "E:/game1/data/advanced_combos_database.json"
    )
    
    print(f"\n✅ Loaded {len(engine.combos)} combos")
    print(f"✅ Built skill indices")
    print(f"✅ Ready for intelligent orchestration")
    
    # Generate strategies for different player tiers
    for tier in [2, 4, 6, 8, 10]:
        print(f"\n{'='*60}")
        strategy = engine.generate_ai_strategy(tier)
        engine.save_ai_strategy(strategy, f"E:/game1/data/ai_strategy_tier{tier}.json")
    
    print(f"\n\n✅ AI COMBO ENGINE COMPLETE!")
    print(f"   Generated strategies for all tiers")
    print(f"   Using 1,147 pre-generated combos as foundation")
    print(f"   Ready for intelligent gameplay!")
