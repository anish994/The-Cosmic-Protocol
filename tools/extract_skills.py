#!/usr/bin/env python3
"""
Extract skills from HTML and generate audit CSV.
Usage:
  python tools/extract_skills.py <html-file> --output audit_results.csv
"""
import argparse
import csv
import re
from pathlib import Path
from typing import List, Dict, Any

try:
    from html.parser import HTMLParser
except:
    from HTMLParser import HTMLParser


def parse_html_skill_data(html_content: str) -> List[Dict[str, Any]]:
    """Extract skills from HTML skill cards."""
    # Parse skill cards from the HTML
    skills = []
    
    # Find all skill-card divs
    skill_cards = re.finditer(r'<div[^>]*class="skill-card"[^>]*>.*?</div>', html_content, re.DOTALL)
    
    current_category = None
    
    # First, extract category sections
    for section_match in re.finditer(r'<div[^>]*class="engine-section"[^>]*>.*?<div[^>]*class="engine-title"[^>]*>([^<]+)</div>', html_content, re.DOTALL):
        current_category = section_match.group(1).strip()
        break
    
    # Better approach: extract from script data directly by parsing more carefully
    # Look for the skill patterns in the data
    skill_pattern = r'\{\s*id\s*:\s*["\']([^"\']+)["\']\s*,\s*name\s*:\s*["\']([^"\']+)["\']\s*,\s*effect\s*:\s*["\']([^"\']*)["\']'
    
    for match in re.finditer(skill_pattern, html_content, re.DOTALL):
        skill_id = match.group(1)
        skill_name = match.group(2)
        effect = match.group(3)
        
        # Extract category from ID
        if '_' in skill_id:
            parts = skill_id.split('_')
            if len(parts) >= 2:
                category = 'Foundational' if parts[1].startswith('FOUNDATIONAL') else \
                          'Character Analysis' if parts[1].startswith('CHAR') else \
                          'Consciousness' if parts[1].startswith('CONS') else \
                          'Divination' if parts[1].startswith('DIV') else \
                          'Singularity' if parts[1].startswith('SING') else \
                          'Tantra' if parts[1].startswith('TANT') else \
                          'Therapeutic' if parts[1].startswith('THERAPEUTIC') else \
                          'Invocation' if parts[1].startswith('INVOCATION') else \
                          'Unknown'
            else:
                category = 'Unknown'
        else:
            category = 'Unknown'
        
        skills.append({
            'id': skill_id,
            'name': skill_name,
            'effect': effect,
            'category': category
        })
    
    return skills


def guess_primary_keyword(skill_name: str, effect: str) -> str:
    """Guess primary keyword from skill name and effect."""
    combined = (skill_name + " " + effect).lower()
    
    keyword_patterns = {
        "Scaffold|Structure|Foundation|Grid|Network|Anchor|Core|Pillar|Support": "Foundation",
        "Burn|Fire|Flame|Inferno": "Burn",
        "Heal|Restore|Recovery|Vitality|Health": "Heal",
        "Cleanse|Purify|Purification|Cleansing": "Cleanse",
        "Shield|Barrier|Protection|Guard|Defense": "Defense",
        "Damage|Attack|Strike|Power": "Damage",
        "Stun|Freeze|Frozen|Chill|Cold|Ice": "Stun",
        "Chain|Link|Connect|Network|Web": "Chain",
        "Crown|Supreme|Absolute|Ultimate|Zenith|Sovereign": "Control",
        "Divine|Holy|Sacred|Celestial|Angel": "Holy",
        "Mind|Thought|Consciousness|Psyche|Mental": "Mental",
        "Soul|Spirit|Ego|Persona|Archetype": "Soul",
        "Time|Temporal|Chrono|Clock": "Time",
        "Space|Spatial|Dimensional|Void": "Space",
        "Fate|Destiny|Prophecy|Oracle|Future": "Fate",
        "Quantum|Probability|Chance": "Quantum",
        "Energy|Power|Force|Flow|Current": "Energy",
        "Wave|Pulse|Resonance|Echo|Vibration": "Wave",
        "Vortex|Spiral|Whirl|Spin": "Vortex",
        "Matrix|Grid|Web|Network|Lattice": "Matrix",
        "Nexus|Hub|Center|Point|Core": "Nexus",
    }
    
    for pattern, keyword in keyword_patterns.items():
        if re.search(pattern, combined):
            return keyword
    
    return "Unknown"


def generate_audit_csv(skills: List[Dict[str, Any]], output_path: Path):
    """Generate CSV audit file."""
    with output_path.open('w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        writer.writerow([
            'Skill ID',
            'Skill Name',
            'Category',
            'Effect (vague/connected)',
            'Primary Keyword (guessed)',
            'Secondary Keyword',
            'Tertiary Keyword',
            'Type (active/passive/ultimate)',
            'Power Tier (1-5)',
            'Rarity (common/rare/epic/legendary/mythic)',
            'Status (needs_mapping)',
            'Notes'
        ])
        
        for skill in skills:
            skill_id = skill.get('id', 'UNKNOWN')
            name = skill.get('name', 'Unknown')
            category = skill.get('category', 'Unknown')
            effect = skill.get('effect', '')
            
            primary_kw = guess_primary_keyword(name, effect)
            
            writer.writerow([
                skill_id,
                name,
                category,
                effect,
                primary_kw,
                '',  # secondary keyword (to be filled)
                '',  # tertiary keyword (to be filled)
                '',  # type (to be filled)
                '',  # power tier (to be filled)
                '',  # rarity (to be filled)
                'needs_mapping',
                f"From {category} engine"
            ])


def main():
    parser = argparse.ArgumentParser(description="Extract skills from HTML and generate audit CSV")
    parser.add_argument("html_file", type=str, help="Path to HTML file containing skill data")
    parser.add_argument("--output", type=str, default="skills_audit.csv", help="Output CSV file path")
    args = parser.parse_args()
    
    html_path = Path(args.html_file)
    output_path = Path(args.output)
    
    if not html_path.exists():
        print(f"Error: {html_path} not found")
        return 1
    
    print(f"[1/3] Reading HTML from {html_path}...")
    with html_path.open('r', encoding='utf-8') as f:
        html_content = f.read()
    
    print(f"[2/3] Parsing skill data...")
    skills = parse_html_skill_data(html_content)
    print(f"  ✓ Found {len(skills)} skills")
    
    print(f"[3/3] Generating audit CSV to {output_path}...")
    generate_audit_csv(skills, output_path)
    print(f"  ✓ Success")
    
    # Print summary
    categories = {}
    for skill in skills:
        cat = skill['category']
        categories[cat] = categories.get(cat, 0) + 1
    
    print("\nSkill Distribution:")
    for cat, count in sorted(categories.items()):
        print(f"  {cat}: {count} skills")
    
    print(f"\nTotal: {len(skills)} skills")
    return 0


if __name__ == "__main__":
    exit(main())
