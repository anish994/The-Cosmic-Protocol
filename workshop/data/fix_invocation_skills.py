import json
import re
import random

file_path = r'e:\game1\workshop\data\skills_invocation.js'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Extract JSON part
# The file starts with comments and then "window.SKILL_DB_INVOCATION = ["
# We need to find the start of the list and the end.
start_index = content.find('[')
end_index = content.rfind(']') + 1
json_str = content[start_index:end_index]

try:
    skills = json.loads(json_str)
except json.JSONDecodeError as e:
    print(f"Error decoding JSON: {e}")
    exit(1)

angel_quotes = [
    "\"The light reveals all truth.\"",
    "\"Wings of judgment span the horizon.\"",
    "\"Sanctity is not given, it is forged.\"",
    "\"A whisper from the heavens shatters the earth.\"",
    "\"Divine intervention is a precise art.\"",
    "\"Fear not the dark, for you are the flame.\"",
    "\"The celestial choir sings of victory.\"",
    "\"Order must be maintained at all costs.\"",
    "\"Grace descends upon the worthy.\"",
    "\"The seal is broken, the power unleashed.\""
]

tier_costs = {
    "COMMON": 25,
    "UNCOMMON": 40,
    "RARE": 60,
    "LEGENDARY": 85,
    "FORBIDDEN": 100
}

for skill in skills:
    # Fix Cost
    if 'stats' in skill:
        if 'cost' not in skill['stats']:
            tier = skill.get('tier', 'COMMON')
            skill['stats']['cost'] = tier_costs.get(tier, 30)
            
            # Adjust based on damage/heal if present
            val = skill['stats'].get('damage') or skill['stats'].get('heal') or 0
            if val > 0:
                skill['stats']['cost'] = int(val * 0.6) # Rough balance
                
            # Ensure min cost
            if skill['stats']['cost'] < 10: skill['stats']['cost'] = 10

    # Fix Lore
    if skill.get('lore_quote') == "\"A technique from the Invocation engine.\"":
        skill['lore_quote'] = random.choice(angel_quotes)

    # Fix Tactics
    if skill.get('tactical_brief', '').startswith("Utilizes Invocation mechanics."):
        desc = skill.get('description', '')
        tags = ", ".join(skill.get('tags', []))
        skill['tactical_brief'] = f"Invoke {skill['name']} to unleash {tags} effects. {desc[:50]}..."

    # Fix Usage Text
    if 'gameplay_info' in skill and 'usage' in skill['gameplay_info']:
        usage_list = skill['gameplay_info']['usage']
        new_usage = []
        for u in usage_list:
            if "undefined Gnosis" in u:
                cost = skill['stats']['cost']
                new_usage.append(f"Cost: {cost} Gnosis")
            else:
                new_usage.append(u)
        skill['gameplay_info']['usage'] = new_usage

# Reconstruct file
new_json_str = json.dumps(skills, indent=4)
new_content = content[:start_index] + new_json_str + content[end_index:]

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Successfully updated skills_invocation.js")
