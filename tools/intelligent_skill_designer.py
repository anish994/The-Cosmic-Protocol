#!/usr/bin/env python3
"""
Intelligent Skill Designer v2
- Loads keyword database (TAG_DATA) from keywords HTML via JavaScript evaluation (js2py)
- Loads skill names/effects from skills HTML
- Composes multilayered skills using 2-4 best-fit keywords
- Ensures strengths and weaknesses are explicit
- Produces dynamic, engine-aware effects

Usage:
  python tools/intelligent_skill_designer.py \
    --keywords "E:/game1/workshop/system engine mini/02-keywords-matrix-engine.html" \
    --skills   "E:/game1/workshop/system engine mini/03-skill-matrix-engines.html" \
    --output   "E:/game1/data/skills_designed_v2.json" \
    [--limit 100]
"""
import argparse
import json
import re
import sys
from pathlib import Path
from typing import Dict, Any, List, Tuple

try:
    import js2py  # type: ignore
except Exception as e:
    print("Missing dependency js2py. Install with: python -m pip install js2py", file=sys.stderr)
    sys.exit(2)

# -------------------------------
# Utilities
# -------------------------------

def read_file(path: Path) -> str:
    return path.read_text(encoding='utf-8', errors='ignore')


def extract_tag_data_js(html: str) -> str:
    m = re.search(r"const\s+TAG_DATA\s*=\s*(\{[\s\S]*?\};)", html)
    if not m:
        raise ValueError("TAG_DATA object not found in keywords HTML")
    obj_src = m.group(1)
    # Return evaluable JS that yields the object
    return f"var TAG_DATA = {obj_src}\nTAG_DATA;"


def load_tag_data(html_path: Path) -> Dict[str, Any]:
    html = read_file(html_path)
    # Build JS that returns JSON string
    js_obj_code = extract_tag_data_js(html)  # yields: var TAG_DATA = {...}; TAG_DATA;
    js_code_json = js_obj_code.replace('TAG_DATA;', 'JSON.stringify(TAG_DATA);')
    json_str = js2py.eval_js(js_code_json)
    return json.loads(json_str)


def normalize_text(s: str) -> str:
    return re.sub(r"[^a-z0-9\s]+", " ", s.lower())


def tokenize(*parts: str) -> List[str]:
    text = " ".join(p for p in parts if p)
    text = normalize_text(text)
    return [t for t in text.split() if t]

# -------------------------------
# Skill loading
# -------------------------------

def load_skills_from_html(html_path: Path) -> List[Dict[str, str]]:
    html = read_file(html_path)
    skills = []
    # Match JS objects with id/name/effect
    patt = r"\{\s*id\s*:\s*['\"]([^'\"]+)['\"]\s*,\s*name\s*:\s*['\"]([^'\"]+)['\"]\s*,\s*effect\s*:\s*['\"]([^'\"]*)['\"]"
    for m in re.finditer(patt, html, re.DOTALL):
        skill_id, name, effect = m.group(1), m.group(2), m.group(3)
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

# -------------------------------
# Intelligent keyword matching
# -------------------------------

ENGINE_BIASES: Dict[str, List[str]] = {
    "Foundational": ["structure", "structures", "field", "anchor", "builder", "permanence", "zone", "defense"],
    "Consciousness": ["analyze", "insight", "foresight", "mind", "vision", "truth", "revelation"],
    "Divination": ["omen", "scry", "foretell", "prophecy", "oracle", "vision", "revelation"],
    "Singularity": ["charge", "threshold", "collapse", "transcend", "transform", "immortality", "nirvana"],
    "Tantra": ["energy", "resonance", "pulse", "chakra", "channel", "amplify", "harmony"],
    "Therapeutic": ["heal", "regeneration", "cleanse", "shield", "barrier", "blessing"],
    "Invocation": ["chant", "invoke", "summon", "ritual", "avatar", "bless", "prayer"],
}

CATEGORY_WEIGHTS: Dict[str, float] = {
    "damage": 1.0,
    "control": 1.0,
    "buff": 0.9,
    "debuff": 0.9,
    "utility": 0.8,
    "deployable": 1.0,
    "trait": 0.6,
    "mechanic": 0.7,
    "engine": 0.0,   # elements separate modifiers later
    "type": 0.5,
    "resource": 0.2,
    "ancient": 0.5,
    "holy": 0.6,
    "singularity": 0.9,
    "combat": 0.6,
    "role": 0.6,
}


def build_keyword_index(tag_data: Dict[str, Any]) -> Dict[str, Dict[str, Any]]:
    index = {}
    for key, v in tag_data.items():
        try:
            name = v.get('name', '')
            cat = v.get('category', '')
            short = v.get('short', '')
            medium = v.get('medium', '')
            detailed = v.get('detailed', {})
            desc = detailed.get('description', '') if isinstance(detailed, dict) else ''
            strengths = detailed.get('strengths', []) if isinstance(detailed, dict) else []
            weaknesses = detailed.get('weaknesses', []) if isinstance(detailed, dict) else []
            combos = detailed.get('combos', []) if isinstance(detailed, dict) else []
        except Exception:
            continue
        text = " ".join([key, name, cat, short, medium, desc, " ".join(strengths), " ".join(weaknesses), " ".join(combos)])
        index[key] = {
            "key": key,
            "category": cat,
            "text_tokens": tokenize(text),
            "raw": v,
        }
    return index


def score_keyword(skill_tokens: List[str], kw: Dict[str, Any], engine: str) -> float:
    # Base match score by token overlap
    tokens = set(kw["text_tokens"])  # keyword tokens
    overlap = sum(1 for t in skill_tokens if t in tokens)
    score = overlap
    # Category weight
    cat = kw.get("category", "")
    score *= CATEGORY_WEIGHTS.get(cat, 0.5)
    # Engine bias
    if engine in ENGINE_BIASES:
        for bias in ENGINE_BIASES[engine]:
            if bias in tokens:
                score += 1.5
    return score


def select_keywords_for_skill(skill: Dict[str, str], kw_index: Dict[str, Dict[str, Any]]) -> List[Dict[str, Any]]:
    tokens = tokenize(skill["name"], skill["effect"], skill["category"]) 
    engine = skill["category"]
    # Score all keywords
    scored: List[Tuple[float, Dict[str, Any]]] = []
    for kw in kw_index.values():
        s = score_keyword(tokens, kw, engine)
        if s > 0:
            scored.append((s, kw))
    scored.sort(key=lambda x: x[0], reverse=True)
    # Pick multilayered: 1 primary (impactful), 1-2 modifiers (mechanic/trait), 1 utility/debuff if fits
    selected: List[Dict[str, Any]] = []
    def pick_by_category(cats: List[str], limit: int):
        nonlocal selected
        taken = 0
        for _, kw in scored:
            if taken >= limit:
                break
            if kw['key'] in [k['key'] for k in selected]:
                continue
            if kw['category'] in cats:
                selected.append(kw)
                taken += 1
    # Primary
    pick_by_category(['damage', 'deployable', 'control', 'singularity', 'invocation', 'divination'], 1)
    # Modifiers
    pick_by_category(['mechanic', 'trait', 'buff'], 2)
    # Utility/debuff layer
    pick_by_category(['utility', 'debuff'], 1)
    # Fallbacks if not enough
    i = 0
    while len(selected) < 3 and i < len(scored):
        kw = scored[i][1]
        if kw['key'] not in [k['key'] for k in selected]:
            selected.append(kw)
        i += 1
    return selected[:4]

# -------------------------------
# Compose effects, tradeoffs, synergies
# -------------------------------

def effect_template_for_category(cat: str) -> Dict[str, Any]:
    if cat == 'damage':
        return {"type": "damage", "base": 40, "scaling": {"stat": "power", "mult": 1.0}, "cooldown": 4}
    if cat == 'control':
        return {"type": "control", "duration": 3, "cooldown": 8}
    if cat == 'deployable':
        return {"type": "deployable", "hp": 200, "duration": 20, "cooldown": 10}
    if cat == 'buff':
        return {"type": "buff", "stat": "power", "amount": 20, "duration": 12, "cooldown": 8}
    if cat == 'debuff':
        return {"type": "debuff", "effect": "vulnerable", "amount": 20, "duration": 8, "cooldown": 10}
    if cat == 'utility':
        return {"type": "utility", "effect": "cleanse", "cooldown": 12}
    if cat == 'mechanic':
        return {"type": "mechanic", "name": "amplify", "value": 1.25}
    if cat == 'trait':
        return {"type": "trait", "name": "aoe", "radius": 4}
    if cat == 'singularity':
        return {"type": "singularity", "phases": ["charge", "threshold", "collapse"], "cooldown": 20}
    if cat == 'invocation':
        return {"type": "invocation", "ritual": True, "duration": 15, "cooldown": 25}
    if cat == 'divination':
        return {"type": "divination", "insight": "+2 choices", "cooldown": 15}
    return {"type": cat}


def compose_skill(skill: Dict[str, str], kws: List[Dict[str, Any]]) -> Dict[str, Any]:
    # Layers
    layers = []
    strengths: List[str] = []
    weaknesses: List[str] = []
    combos: List[str] = []
    cooldown = 4
    cost = {"type": "mana", "amount": 20}
    range_ = "medium"

    # Compose from keywords
    for i, kw in enumerate(kws):
        cat = kw['category']
        tpl = effect_template_for_category(cat)
        layer = {
            "keyword": kw['key'],
            "category": cat,
            "effect": tpl,
        }
        layers.append(layer)
        raw = kw.get('raw', {})
        det = raw.get('detailed', {}) if isinstance(raw, dict) else {}
        strengths += det.get('strengths', []) if isinstance(det, dict) else []
        weaknesses += det.get('weaknesses', []) if isinstance(det, dict) else []
        combos += det.get('combos', []) if isinstance(det, dict) else []
        # Aggregate knobs
        if tpl.get('cooldown'):
            cooldown = max(cooldown, tpl['cooldown'])
        # Cost adjustments per impactful categories
        if cat in ('invocation', 'singularity'):
            cost['amount'] += 20
        if cat == 'deployable':
            cost['amount'] += 10
        if cat == 'control':
            range_ = 'long'

    # Tradeoffs: if multiple strong layers, add drawbacks
    drawbacks: List[str] = []
    if any(l['category'] in ('invocation', 'singularity') for l in layers):
        drawbacks.append('Long wind-up time')
        cooldown += 5
    if any(l['category'] == 'deployable' for l in layers):
        drawbacks.append('Structures can be destroyed')
    if any(l['category'] == 'damage' for l in layers) and any(l['category'] == 'control' for l in layers):
        drawbacks.append('Lower single-target damage in exchange for CC')
    if any(l['category'] == 'buff' for l in layers):
        drawbacks.append('Dispellable by enemy cleanse')

    # Rarity & power tier heuristic
    layer_cats = [l['category'] for l in layers]
    uniqueness = len(set(layer_cats))
    if uniqueness >= 4:
        rarity = 'legendary'; power_tier = 5
    elif uniqueness == 3:
        rarity = 'epic'; power_tier = 4
    else:
        rarity = 'rare'; power_tier = 3

    # Dedup lists and clamp sizes
    def dedup(lst: List[str]) -> List[str]:
        seen = set(); out = []
        for x in lst:
            if x not in seen:
                out.append(x); seen.add(x)
        return out[:8]

    designed = {
        "id": skill['id'],
        "name": skill['name'],
        "category": skill['category'],
        "description": skill['effect'],
        "type": "active",
        "rarity": rarity,
        "power_tier": power_tier,
        "cost": cost,
        "cooldown": cooldown,
        "range": range_,
        "layers": layers,
        "strengths": dedup(strengths),
        "weaknesses": dedup(weaknesses + drawbacks),
        "combo_suggestions": dedup(combos),
        "element_modifier": None,  # elements applied later at card-level
    }
    return designed

# -------------------------------
# Main
# -------------------------------

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--keywords', required=True, help='Path to keywords HTML (02-keywords-matrix-engine.html)')
    ap.add_argument('--skills', required=True, help='Path to skills HTML (03-skill-matrix-engines.html)')
    ap.add_argument('--output', required=True, help='Output JSON file')
    ap.add_argument('--limit', type=int, default=0, help='Limit number of skills for faster runs')
    args = ap.parse_args()

    kw_path = Path(args.keywords)
    sk_path = Path(args.skills)
    out_path = Path(args.output)

    print(f'[1/4] Loading keyword database from {kw_path} ...')
    tag_data = load_tag_data(kw_path)
    kw_index = build_keyword_index(tag_data)
    print(f'  ✓ Loaded {len(kw_index)} keywords')

    print(f'[2/4] Loading skills from {sk_path} ...')
    skills = load_skills_from_html(sk_path)
    print(f'  ✓ Loaded {len(skills)} skills')

    limit = args.limit if args.limit > 0 else len(skills)

    print('[3/4] Designing multilayered skills ...')
    designed: List[Dict[str, Any]] = []
    for i, sk in enumerate(skills[:limit]):
        kws = select_keywords_for_skill(sk, kw_index)
        built = compose_skill(sk, kws)
        designed.append(built)
        if (i+1) % 100 == 0:
            print(f'  ✓ Designed {i+1}/{limit}')

    print(f'[4/4] Saving {len(designed)} skills to {out_path} ...')
    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_text(json.dumps(designed, indent=2, ensure_ascii=False), encoding='utf-8')
    print('  ✓ Done')

if __name__ == '__main__':
    sys.exit(main())
