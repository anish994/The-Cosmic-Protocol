#!/usr/bin/env python3
"""
Smart Skill Designer - Auto-generates game mechanics for skills.
Loads skill names, intelligently designs mechanics, lets you review/modify.
Usage:
  python tools/skill_designer.py --html <html-file> --output skills_designed.json
"""
import argparse
import json
import re
import sys
from pathlib import Path
from typing import List, Dict, Any


class SkillDesigner:
    def __init__(self):
        self.skill_archetypes = {
            "damage": {
                "base_power": 30,
                "cooldown": 3,
                "cost": {"type": "mana", "amount": 15},
                "range": "medium",
                "effect": "Deal damage to target",
                "mechanics": ["direct_damage"],
            },
            "heal": {
                "base_power": 25,
                "cooldown": 4,
                "cost": {"type": "mana", "amount": 20},
                "range": "long",
                "effect": "Restore health to target",
                "mechanics": ["healing"],
            },
            "summon": {
                "base_power": 1,
                "cooldown": 10,
                "cost": {"type": "mana", "amount": 40},
                "range": "medium",
                "effect": "Summon an ally unit",
                "mechanics": ["summon", "unit_spawn"],
                "unit_count": 1,
                "unit_duration": 30,
            },
            "shield": {
                "base_power": 20,
                "cooldown": 5,
                "cost": {"type": "mana", "amount": 25},
                "range": "medium",
                "effect": "Create protective barrier",
                "mechanics": ["damage_reduction", "barrier"],
                "absorption": 50,
            },
            "control": {
                "base_power": 1,
                "cooldown": 6,
                "cost": {"type": "mana", "amount": 30},
                "range": "medium",
                "effect": "Control enemy movement or actions",
                "mechanics": ["crowd_control"],
                "duration": 5,
            },
            "buff": {
                "base_power": 1,
                "cooldown": 4,
                "cost": {"type": "mana", "amount": 20},
                "range": "long",
                "effect": "Enhance ally stats",
                "mechanics": ["stat_boost"],
                "duration": 10,
            },
            "utility": {
                "base_power": 1,
                "cooldown": 5,
                "cost": {"type": "mana", "amount": 15},
                "range": "unlimited",
                "effect": "Provide utility or support",
                "mechanics": ["utility"],
            },
        }
        
        self.keyword_patterns = {
            r"(burn|fire|flame|inferno|heat)": ("damage", {"element": "Fire", "damage_type": "fire"}),
            r"(freeze|ice|chill|cold|frost)": ("control", {"element": "Ice", "damage_type": "frost"}),
            r"(heal|restore|recovery|vitality|health)": ("heal", {"mechanic": "restoration"}),
            r"(shield|barrier|protection|guard|defend)": ("shield", {"mechanic": "protection"}),
            r"(summon|spawn|create|manifest|invoke)": ("summon", {"mechanic": "summoning"}),
            r"(stun|freeze|paralyze|immobilize|disable)": ("control", {"mechanic": "stun"}),
            r"(buff|enhance|boost|strength|power)": ("buff", {"mechanic": "enhancement"}),
            r"(chain|link|connect|network|web)": ("utility", {"mechanic": "linking"}),
            r"(structure|scaffold|foundation|anchor|grid)": ("summon", {"mechanic": "structure"}),
            r"(crown|supreme|absolute|ultimate|zenith)": ("damage", {"power_multiplier": 1.5}),
            r"(divine|holy|sacred|celestial|angel)": ("buff", {"element": "Light"}),
            r"(void|darkness|shadow|dark|abyss)": ("damage", {"element": "Dark"}),
            r"(matrix|network|web|lattice|grid)": ("utility", {"aoe": True}),
            r"(wave|pulse|resonance|echo|vibration)": ("damage", {"aoe": True}),
            r"(eternal|infinite|endless|everlasting)": ("utility", {"duration_multiplier": 2.0}),
            r"(resurrection|resurrect|revive|restore|reborn)": ("heal", {"mechanic": "resurrection", "cooldown": 30}),
            r"(wave|cascade|storm|tempest|maelstrom)": ("damage", {"aoe": True, "power_multiplier": 1.3}),
            r"(nexus|hub|center|point|core)": ("utility", {"mechanic": "core"}),
            r"(vortex|spiral|whirl|spin)": ("control", {"mechanic": "vortex"}),
            r"(beacon|signal|emit|project|broadcast)": ("utility", {"mechanic": "beacon"}),
        }
    
    def classify_skill(self, skill_name: str, effect: str) -> str:
        """Classify skill into archetype based on name and effect."""
        combined = (skill_name + " " + effect).lower()
        
        for pattern, (archetype, _) in self.keyword_patterns.items():
            if re.search(pattern, combined):
                return archetype
        
        # Default based on keywords in name
        if any(word in skill_name.lower() for word in ["heal", "restore", "recovery"]):
            return "heal"
        elif any(word in skill_name.lower() for word in ["shield", "barrier", "protect"]):
            return "shield"
        elif any(word in skill_name.lower() for word in ["summon", "spawn", "create"]):
            return "summon"
        elif any(word in skill_name.lower() for word in ["buff", "enhance", "boost"]):
            return "buff"
        elif any(word in skill_name.lower() for word in ["stun", "freeze", "control"]):
            return "control"
        elif any(word in skill_name.lower() for word in ["structure", "scaffold", "foundation"]):
            return "summon"
        else:
            return "damage"
    
    def extract_modifiers(self, skill_name: str, effect: str) -> Dict[str, Any]:
        """Extract special modifiers from skill name/effect."""
        combined = (skill_name + " " + effect).lower()
        modifiers = {}
        
        for pattern, (_, mods) in self.keyword_patterns.items():
            if re.search(pattern, combined):
                modifiers.update(mods)
        
        # Power tier based on keywords
        if any(word in combined for word in ["supreme", "ultimate", "absolute", "divine", "eternal", "cosmic"]):
            modifiers["power_tier"] = 5
        elif any(word in combined for word in ["master", "crown", "sovereign", "elite"]):
            modifiers["power_tier"] = 4
        elif any(word in combined for word in ["advanced", "greater", "superior"]):
            modifiers["power_tier"] = 3
        elif any(word in combined for word in ["minor", "lesser", "basic"]):
            modifiers["power_tier"] = 1
        else:
            modifiers["power_tier"] = 2
        
        # AOE detection
        if any(word in combined for word in ["wave", "burst", "field", "zone", "area", "all", "radius"]):
            modifiers["aoe"] = True
            modifiers["aoe_radius"] = 5
        
        return modifiers
    
    def design_skill(self, skill_id: str, skill_name: str, effect: str, category: str) -> Dict[str, Any]:
        """Design a complete skill with mechanics."""
        archetype = self.classify_skill(skill_name, effect)
        base_mechanics = self.skill_archetypes[archetype].copy()
        modifiers = self.extract_modifiers(skill_name, effect)
        
        skill = {
            "id": skill_id,
            "name": skill_name,
            "category": category,
            "description": effect,
            "type": "active",
            "archetype": archetype,
            "rarity": "common",  # Will be set by user if needed
            **base_mechanics,
            **modifiers,
        }
        
        # Adjust rarity based on power tier
        if modifiers.get("power_tier", 2) >= 5:
            skill["rarity"] = "mythic"
        elif modifiers.get("power_tier", 2) >= 4:
            skill["rarity"] = "legendary"
        elif modifiers.get("power_tier", 2) >= 3:
            skill["rarity"] = "epic"
        elif modifiers.get("power_tier", 2) >= 2:
            skill["rarity"] = "rare"
        
        return skill
    
    def interactive_review(self, skill: Dict[str, Any]) -> Dict[str, Any]:
        """Let user review and modify skill (batch mode with approval)."""
        print(f"\n{'='*70}")
        print(f"SKILL: {skill['name']}")
        print(f"{'='*70}")
        print(f"Archetype:  {skill['archetype']}")
        print(f"Type:       {skill['type']}")
        print(f"Rarity:     {skill['rarity']}")
        print(f"Power:      {skill.get('power_tier', 'N/A')}")
        print(f"Effect:     {skill.get('effect', 'N/A')}")
        print(f"Cooldown:   {skill.get('cooldown', 'N/A')}s")
        print(f"Cost:       {skill.get('cost', {}).get('amount', 0)} {skill.get('cost', {}).get('type', 'mana')}")
        print(f"Range:      {skill.get('range', 'N/A')}")
        print(f"Mechanics:  {', '.join(skill.get('mechanics', []))}")
        
        if skill.get('aoe'):
            print(f"AOE:        YES (radius: {skill.get('aoe_radius', 5)}m)")
        
        print(f"\nDescription: {skill['description']}")
        
        # Ask for modifications
        response = input("\n[A]ccept, [M]odify, [S]kip, [Q]uit? ").strip().lower()
        
        if response == 'a':
            return skill
        elif response == 'm':
            return modify_skill_interactive(skill)
        elif response == 's':
            return None
        elif response == 'q':
            sys.exit(0)
        else:
            return skill


def modify_skill_interactive(skill: Dict[str, Any]) -> Dict[str, Any]:
    """Interactively modify a skill."""
    print("\nModify skill:")
    print("1. Archetype")
    print("2. Power/Cooldown")
    print("3. Cost")
    print("4. Range")
    print("5. Add custom field")
    print("6. Done")
    
    choice = input("Choose (1-6): ").strip()
    
    if choice == "1":
        skill["archetype"] = input("New archetype: ").strip()
    elif choice == "2":
        skill["base_power"] = int(input("Power (damage/heal): ") or skill.get("base_power", 30))
        skill["cooldown"] = float(input("Cooldown (seconds): ") or skill.get("cooldown", 3))
    elif choice == "3":
        skill["cost"]["amount"] = int(input("Cost amount: ") or skill["cost"]["amount"])
    elif choice == "4":
        skill["range"] = input("Range (melee/short/medium/long/unlimited): ").strip()
    elif choice == "5":
        key = input("Field name: ").strip()
        val = input("Value: ").strip()
        skill[key] = val
    
    if choice != "6":
        return modify_skill_interactive(skill)
    
    return skill


def load_skills_from_html(html_path: Path) -> List[Dict[str, str]]:
    """Load skills from HTML file."""
    with html_path.open('r', encoding='utf-8') as f:
        html = f.read()
    
    skills = []
    skill_pattern = r'\{\s*id\s*:\s*["\']([^\'"]+)["\']\s*,\s*name\s*:\s*["\']([^\'"]+)["\']\s*,\s*effect\s*:\s*["\']([^"\']*)["\']'
    
    for match in re.finditer(skill_pattern, html, re.DOTALL):
        skill_id = match.group(1)
        name = match.group(2)
        effect = match.group(3)
        
        # Determine category from ID
        if "FOUNDATIONAL" in skill_id:
            category = "Foundational"
        elif "CHAR" in skill_id:
            category = "Character Analysis"
        elif "CONS" in skill_id:
            category = "Consciousness"
        elif "DIV" in skill_id:
            category = "Divination"
        elif "SING" in skill_id:
            category = "Singularity"
        elif "TANT" in skill_id:
            category = "Tantra"
        elif "THERAPEUTIC" in skill_id:
            category = "Therapeutic"
        elif "INVOCATION" in skill_id:
            category = "Invocation"
        else:
            category = "Unknown"
        
        skills.append({"id": skill_id, "name": name, "effect": effect, "category": category})
    
    return skills


def main():
    parser = argparse.ArgumentParser(description="Smart Skill Designer")
    parser.add_argument("--html", type=str, required=True, help="HTML file with skills")
    parser.add_argument("--output", type=str, default="E:/game1/data/skills_designed.json", help="Output JSON file")
    parser.add_argument("--batch", action="store_true", help="Auto-approve all skills (no interaction)")
    parser.add_argument("--limit", type=int, default=0, help="Limit number of skills (0=all)")
    args = parser.parse_args()
    
    html_path = Path(args.html)
    output_path = Path(args.output)
    
    print(f"[1/3] Loading skills from {html_path}...")
    skills_raw = load_skills_from_html(html_path)
    print(f"  ✓ Loaded {len(skills_raw)} skills")
    
    designer = SkillDesigner()
    designed_skills = []
    
    limit = args.limit if args.limit > 0 else len(skills_raw)
    
    print(f"\n[2/3] Designing skills (showing first 10, then batch mode)...")
    for idx, raw_skill in enumerate(skills_raw[:limit]):
        if idx >= 1030:
            break
        
        skill = designer.design_skill(
            raw_skill["id"],
            raw_skill["name"],
            raw_skill["effect"],
            raw_skill["category"]
        )
        
        # Interactive mode for first 10 skills
        if idx < 10 and not args.batch:
            reviewed = designer.interactive_review(skill)
            if reviewed:
                designed_skills.append(reviewed)
        else:
            designed_skills.append(skill)
        
        if (idx + 1) % 100 == 0:
            print(f"  ✓ Designed {idx + 1}/{len(skills_raw)} skills")
    
    print(f"\n[3/3] Saving {len(designed_skills)} skills to {output_path}...")
    output_path.parent.mkdir(parents=True, exist_ok=True)
    
    with output_path.open('w', encoding='utf-8') as f:
        json.dump(designed_skills, f, indent=2)
    
    print(f"  ✓ Success!")
    print(f"\nDesigned skills:")
    archetypes = {}
    for skill in designed_skills:
        arch = skill.get("archetype", "unknown")
        archetypes[arch] = archetypes.get(arch, 0) + 1
    
    for arch, count in sorted(archetypes.items()):
        print(f"  {arch}: {count}")
    
    return 0


if __name__ == "__main__":
    exit(main())
