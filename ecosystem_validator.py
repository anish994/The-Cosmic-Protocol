#!/usr/bin/env python3
"""
SKILL ECOSYSTEM VALIDATOR v1.0
- Comprehensive validation of 1,030 skills
- Balance analysis and metrics
- Quality assurance and edge cases
- Final certification report
"""

import json
from collections import defaultdict
import statistics

class EcosystemValidator:
    """Validates entire skill ecosystem"""
    
    def __init__(self, skills_path, connections_path):
        with open(skills_path) as f:
            self.skills = json.load(f)
        with open(connections_path) as f:
            self.connections = json.load(f)
        
        self.issues = []
        self.metrics = {}
    
    def validate_skill_integrity(self):
        """Check each skill for data integrity"""
        print(f"\n✅ VALIDATING SKILL INTEGRITY")
        print("="*60)
        
        required_fields = ["id", "name", "category", "type", "cost", "cooldown", "rarity"]
        issues = 0
        
        for skill in self.skills:
            for field in required_fields:
                if field not in skill:
                    self.issues.append(f"Skill {skill.get('id')} missing field: {field}")
                    issues += 1
        
        print(f"   Checked {len(self.skills)} skills")
        print(f"   Issues found: {issues}")
        
        return issues == 0
    
    def validate_balance(self):
        """Check game balance metrics"""
        print(f"\n⚖️ VALIDATING BALANCE")
        print("="*60)
        
        # Analyze power distribution
        power_tiers = defaultdict(int)
        costs = []
        cooldowns = []
        rarities = defaultdict(int)
        
        for skill in self.skills:
            power = skill.get("power_tier", 1)
            power_tiers[power] += 1
            
            cost = skill.get("cost", {}).get("amount", 0)
            costs.append(cost)
            
            cooldown = skill.get("cooldown", 0)
            cooldowns.append(cooldown)
            
            rarity = skill.get("rarity", "common")
            rarities[rarity] += 1
        
        # Power distribution
        print(f"\n   Power Tier Distribution:")
        for tier in sorted(power_tiers.keys()):
            count = power_tiers[tier]
            pct = (count / len(self.skills)) * 100
            print(f"      Tier {tier}: {count:4} ({pct:5.1f}%)")
        
        # Rarity distribution (should match tiers)
        print(f"\n   Rarity Distribution:")
        for rarity in ["common", "uncommon", "rare", "epic", "legendary"]:
            count = rarities.get(rarity, 0)
            pct = (count / len(self.skills)) * 100
            print(f"      {rarity:10}: {count:4} ({pct:5.1f}%)")
        
        # Cost analysis
        avg_cost = statistics.mean(costs)
        median_cost = statistics.median(costs)
        print(f"\n   Cost Analysis:")
        print(f"      Average: {avg_cost:.1f}")
        print(f"      Median:  {median_cost:.1f}")
        print(f"      Range:   {min(costs)} - {max(costs)}")
        
        # Cooldown analysis
        avg_cooldown = statistics.mean(cooldowns)
        median_cooldown = statistics.median(cooldowns)
        print(f"\n   Cooldown Analysis:")
        print(f"      Average: {avg_cooldown:.1f}s")
        print(f"      Median:  {median_cooldown:.1f}s")
        print(f"      Range:   {min(cooldowns)} - {max(cooldowns)}s")
        
        self.metrics["power_tiers"] = dict(power_tiers)
        self.metrics["rarities"] = dict(rarities)
        self.metrics["avg_cost"] = avg_cost
        self.metrics["avg_cooldown"] = avg_cooldown
        
        return True
    
    def validate_connections(self):
        """Check connection quality"""
        print(f"\n🔗 VALIDATING CONNECTIONS")
        print("="*60)
        
        total_conns = self.connections.get("total_connections", 0)
        avg_conns = total_conns / len(self.skills)
        
        print(f"   Total connections: {total_conns}")
        print(f"   Average per skill: {avg_conns:.2f}")
        print(f"   Connection density: {(avg_conns / len(self.skills)) * 100:.2f}%")
        
        # Check for orphaned skills
        connected_skills = set(self.connections.get("connections", {}).keys())
        all_skill_ids = {s["id"] for s in self.skills}
        orphaned = all_skill_ids - connected_skills
        
        print(f"\n   Connected skills: {len(connected_skills)}")
        print(f"   Orphaned skills: {len(orphaned)}")
        
        if len(orphaned) > 0:
            print(f"   ⚠️  Warning: {len(orphaned)} orphaned skills detected")
            self.issues.append(f"Found {len(orphaned)} orphaned skills")
        
        return len(orphaned) <= (len(self.skills) * 0.05)  # Less than 5% orphaned
    
    def validate_teams(self):
        """Check team compositions"""
        print(f"\n👥 VALIDATING TEAMS")
        print("="*60)
        
        teams = self.connections.get("teams", [])
        
        # Analyze team types
        team_types = defaultdict(int)
        team_skills = defaultdict(int)
        
        for team in teams:
            team_type = team.get("type", "unknown")
            team_types[team_type] += 1
            
            skill_count = len(team.get("skills", []))
            team_skills[skill_count] += 1
        
        print(f"   Total teams: {len(teams)}")
        
        print(f"\n   Team types:")
        for ttype, count in sorted(team_types.items()):
            print(f"      {ttype}: {count}")
        
        print(f"\n   Skills per team:")
        for skill_count, count in sorted(team_skills.items()):
            print(f"      {skill_count} skills: {count} teams")
        
        self.metrics["teams"] = len(teams)
        self.metrics["team_types"] = dict(team_types)
        
        return len(teams) > 0
    
    def validate_keywords(self):
        """Check keyword coverage"""
        print(f"\n🏷️ VALIDATING KEYWORDS")
        print("="*60)
        
        all_keywords = defaultdict(int)
        empty_layers = 0
        
        for skill in self.skills:
            for layer in skill.get("layers", []):
                keyword = layer.get("keyword", "")
                if keyword:
                    all_keywords[keyword] += 1
                else:
                    empty_layers += 1
        
        print(f"   Unique keywords: {len(all_keywords)}")
        print(f"   Total keyword uses: {sum(all_keywords.values())}")
        print(f"   Empty layers: {empty_layers}")
        
        # Top keywords
        top_keywords = sorted(all_keywords.items(), key=lambda x: x[1], reverse=True)[:10]
        print(f"\n   Top 10 keywords:")
        for keyword, count in top_keywords:
            print(f"      {keyword:20} x{count:3}")
        
        # Check for problematic keywords
        problematic = ["grammar", "language", "syntax"]
        problematic_count = 0
        for keyword in problematic:
            if keyword in all_keywords:
                problematic_count += all_keywords[keyword]
                print(f"\n   ⚠️  Found problematic keyword '{keyword}': {all_keywords[keyword]} uses")
                self.issues.append(f"Found problematic keyword '{keyword}': {all_keywords[keyword]} uses")
        
        self.metrics["unique_keywords"] = len(all_keywords)
        self.metrics["problematic_keywords"] = problematic_count
        
        return problematic_count == 0
    
    def validate_combos(self):
        """Check combo quality"""
        print(f"\n💥 VALIDATING COMBOS")
        print("="*60)
        
        total_combos = 0
        combo_synergies = []
        
        for skill in self.skills:
            combos = skill.get("combos", [])
            total_combos += len(combos)
            
            for combo in combos:
                synergy = combo.get("synergy_multiplier", 1.0)
                combo_synergies.append(synergy)
        
        print(f"   Total combos: {total_combos}")
        
        if combo_synergies:
            avg_synergy = statistics.mean(combo_synergies)
            min_synergy = min(combo_synergies)
            max_synergy = max(combo_synergies)
            
            print(f"   Synergy multipliers:")
            print(f"      Average: {avg_synergy:.2f}x")
            print(f"      Min:     {min_synergy:.2f}x")
            print(f"      Max:     {max_synergy:.2f}x")
            
            self.metrics["avg_synergy"] = avg_synergy
            self.metrics["combo_count"] = total_combos
        
        return True
    
    def generate_report(self, output_path):
        """Generate comprehensive validation report"""
        print(f"\n📊 GENERATING REPORT")
        print("="*60)
        
        report = {
            "timestamp": "Phase 2 Validation",
            "total_skills": len(self.skills),
            "total_connections": self.connections.get("total_connections", 0),
            "total_teams": self.connections.get("teams", []),
            "metrics": self.metrics,
            "issues": self.issues,
            "status": "PASS" if len(self.issues) == 0 else "REVIEW",
        }
        
        with open(output_path, 'w') as f:
            json.dump(report, f, indent=2)
        
        print(f"\n✅ Saved report to {output_path}")
        
        return report

# ============================================================================
# MAIN EXECUTION
# ============================================================================

if __name__ == "__main__":
    print("\n🎮 SKILL ECOSYSTEM VALIDATOR v1.0")
    print("="*60)
    
    validator = EcosystemValidator(
        "E:/game1/data/skills_complete_1030.json",
        "E:/game1/data/skill_connections_map.json"
    )
    
    # Run all validations
    print("\n📋 Running comprehensive validation suite...")
    
    validator.validate_skill_integrity()
    validator.validate_balance()
    validator.validate_connections()
    validator.validate_teams()
    validator.validate_keywords()
    validator.validate_combos()
    
    # Generate report
    report = validator.generate_report("E:/game1/data/ecosystem_validation_report.json")
    
    # Summary
    print(f"\n{'='*60}")
    print(f"VALIDATION SUMMARY")
    print(f"{'='*60}")
    print(f"Status: {report['status']}")
    print(f"Total skills: {report['total_skills']}")
    print(f"Issues found: {len(report['issues'])}")
    
    if report['issues']:
        print(f"\nIssues to address:")
        for issue in report['issues']:
            print(f"   - {issue}")
    else:
        print(f"\n✅ ALL VALIDATIONS PASSED!")
    
    print(f"\n🎉 ECOSYSTEM VALIDATION COMPLETE!")
