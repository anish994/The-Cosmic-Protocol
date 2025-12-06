import json
import os
import glob

data_dir = r'e:\game1\workshop\data'
files = glob.glob(os.path.join(data_dir, 'skills_*.js'))

for file_path in files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    start_index = content.find('[')
    end_index = content.rfind(']') + 1
    if start_index == -1 or end_index == 0:
        print(f"Skipping {os.path.basename(file_path)}: No JSON array found.")
        continue

    try:
        skills = json.loads(content[start_index:end_index])
    except json.JSONDecodeError:
        print(f"Skipping {os.path.basename(file_path)}: Invalid JSON.")
        continue

    missing_cost = 0
    generic_lore = 0
    generic_tactics = 0
    
    for skill in skills:
        if 'stats' in skill and 'cost' not in skill['stats']:
            missing_cost += 1
        
        if "A technique from the" in skill.get('lore_quote', ''):
            generic_lore += 1
            
        if "Utilizes" in skill.get('tactical_brief', '') and "mechanics" in skill.get('tactical_brief', ''):
            generic_tactics += 1

    print(f"File: {os.path.basename(file_path)}")
    print(f"  Total Skills: {len(skills)}")
    print(f"  Missing Cost: {missing_cost}")
    print(f"  Generic Lore: {generic_lore}")
    print(f"  Generic Tactics: {generic_tactics}")
    print("-" * 20)
