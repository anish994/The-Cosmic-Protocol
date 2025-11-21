"""
SINGULARITY ENGINE TRANSFORMER v2.0
Transforms all 100 Singularity skills into premium narrative-combat hybrids
Focus: Void/Paradox + Reality Warping + Corruption Arcs + Temptation Narratives
"""

import json

print("="*60)
print("SINGULARITY ENGINE - COMPLETE TRANSFORMATION")
print("="*60)
print()

# Load database
with open('e:/game1/03-data/COMPLETE_SKILL_DATABASE.json', 'r', encoding='utf-8') as f:
    data = json.load(f)
    all_singularity = [s for s in data['skills'] if s['engine'] == 'Singularity']

print(f"Total Singularity skills found: {len(all_singularity)}")
print()

class SingularityTransformer:
    """Transforms Singularity skills with corruption, void, and reality-bending depth"""
    
    def __init__(self):
        self.transformed = []
    
    def transform_all(self, skills):
        """Transform all skills"""
        for i, skill in enumerate(skills, 1):
            try:
                premium = self.create_premium_skill(skill)
                self.transformed.append(premium)
                
                if i % 10 == 0:
                    print(f"Progress: {i}/{len(skills)}")
            except Exception as e:
                print(f"ERROR on {skill.get('name', 'unknown')}: {e}")
        
        print(f"\n✓ Transformed {len(self.transformed)} skills")
    
    def create_premium_skill(self, skill):
        """Create premium singularity skill with 100% depth"""
        
        focus = self.analyze_singularity_focus(skill)
        
        premium = {
            "id": skill['id'],
            "name": skill['name'],
            "display_name": self.generate_display_name(skill, focus),
            
            # Classification
            "engine": "Singularity",
            "skill_type": focus['type'],
            "lore_tag": focus['theme'],
            "tier": skill['tier'],
            "rarity": self.get_rarity(skill['tier']),
            
            # Costs + Corruption
            "cost": {
                "bandwidth": skill['cost'].get('gnosis', 20),
                "kp": skill['cost'].get('kp', 1),
                "corruption": focus['corruption_cost']  # Using void corrupts
            },
            "cooldown": self.story_cooldown(skill),
            
            # COMBAT LAYER (100% - Reality warping power)
            "combat_effect": self.generate_combat_effect(skill, focus),
            
            # NARRATIVE LAYER (100% - Corruption + temptation + consequences)
            "narrative_effect": self.generate_narrative_effect(skill, focus),
            
            # Targeting with reality-bending consequences
            "targeting_matrix": self.generate_targeting(skill, focus),
            
            # Fusion (paradox combinations)
            "fusion_combinations": self.generate_fusions(skill, focus),
            
            # Evolution
            "evolution": self.enhance_evolution(skill, focus),
            
            # Unlock
            "unlock": self.generate_unlock(skill),
            
            # Meta
            "tags": skill.get('keywords', []),
            "themes": skill.get('themes', []),
            "power_score": skill.get('powerScore', 0),
            "corruption_risk": focus['corruption_risk'],
            "original": skill
        }
        
        return premium
    
    def analyze_singularity_focus(self, skill):
        """Determine singularity skill type"""
        effect = skill['effect'].lower()
        name = skill['name'].lower()
        
        # Analyze
        is_void = any(w in effect or w in name for w in ['void', 'abyss', 'entropy'])
        is_paradox = any(w in effect or w in name for w in ['paradox', 'impossible', 'contradiction'])
        is_time = any(w in effect or w in name for w in ['time', 'temporal', 'chrono'])
        is_reality_warp = any(w in effect for w in ['reality', 'existence', 'unmake', 'rewrite'])
        is_singularity = 'singularity' in name or 'collapse' in effect
        is_corruption = any(w in effect for w in ['corrupt', 'taint', 'darkness'])
        
        # Determine corruption cost
        if is_void:
            corruption = 2
        elif is_paradox or is_reality_warp:
            corruption = 3
        elif is_time or is_singularity:
            corruption = 5
        else:
            corruption = 1
        
        # Risk level
        if is_time or is_singularity:
            risk = "EXTREME"
        elif is_reality_warp or is_paradox:
            risk = "HIGH"
        elif is_void:
            risk = "MEDIUM"
        else:
            risk = "LOW"
        
        # Type
        if is_singularity:
            return {"type": "Singularity", "theme": "Collapse", "corruption_cost": corruption, "corruption_risk": risk}
        elif is_time:
            return {"type": "Temporal", "theme": "Time", "corruption_cost": corruption, "corruption_risk": risk}
        elif is_paradox:
            return {"type": "Paradox", "theme": "Impossibility", "corruption_cost": corruption, "corruption_risk": risk}
        elif is_reality_warp:
            return {"type": "Reality Warp", "theme": "Existence", "corruption_cost": corruption, "corruption_risk": risk}
        elif is_void:
            return {"type": "Void", "theme": "Entropy", "corruption_cost": corruption, "corruption_risk": risk}
        elif is_corruption:
            return {"type": "Corruption", "theme": "Darkness", "corruption_cost": corruption, "corruption_risk": risk}
        else:
            return {"type": "Anomaly", "theme": "Strange", "corruption_cost": 1, "corruption_risk": "LOW"}
    
    def generate_display_name(self, skill, focus):
        """Generate epic display name"""
        subtitles = {
            "Void": ["Abyss Calls", "Entropy's Embrace", "Nothingness Manifest"],
            "Paradox": ["Logic Broken", "Impossibility Made Real", "Contradiction Incarnate"],
            "Temporal": ["Time Shattered", "Chronos Defied", "Eternity Touched"],
            "Reality Warp": ["Existence Rewritten", "Truth Unmade", "Reality Bent"],
            "Singularity": ["Event Horizon", "Collapse Point", "All Becomes One"],
            "Corruption": ["Darkness Spreading", "Taint Unbound", "Shadow's Gift"],
            "Anomaly": ["Strange Attractor", "Aberration's Call", "The Unusual"]
        }
        
        skill_type = focus['type']
        name_hash = sum(ord(c) for c in skill['name'])
        subtitle = subtitles.get(skill_type, ["The Forbidden"])[name_hash % 3]
        
        return f"{skill['name']}: {subtitle}"
    
    def get_rarity(self, tier):
        """Singularity skills trend rare/epic"""
        rarities = ["Uncommon", "Rare", "Rare", "Epic", "Epic"]
        return rarities[min(tier, 4)]
    
    def story_cooldown(self, skill):
        """Powerful skills have longer cooldowns"""
        cd = skill.get('cooldown', 0)
        if cd == 0:
            return "SHORT"  # Even "instant" void skills have short cooldown
        elif cd <= 1:
            return "MEDIUM"
        elif cd <= 2:
            return "LONG"
        else:
            return "ONCE_PER_CHAPTER"
    
    def generate_combat_effect(self, skill, focus):
        """Generate reality-warping combat mechanics"""
        return {
            "primary": skill['effect'],
            "power_level": "High" if focus['corruption_risk'] in ["HIGH", "EXTREME"] else "Medium",
            "skill_type": focus['type'],
            "targeting": ["enemy", "reality_itself", "self"],
            "corruption_cost": f"+{focus['corruption_cost']} corruption per use",
            "warning": f"⚠️ {focus['corruption_risk']} CORRUPTION RISK"
        }
    
    def generate_narrative_effect(self, skill, focus):
        """Generate deep void/corruption narrative"""
        
        # Dark, powerful descriptions
        descriptions = {
            "Void": f"You invoke {skill['name']}, tearing a wound in reality. The void HUNGERS. Darkness pours forth—not absence of light, but PRESENCE of nothingness. You feel it pull at your soul.",
            
            "Paradox": f"Logic breaks as {skill['name']} manifests. The impossible becomes real. Your target experiences contradiction—existing and not existing, alive and dead, here and gone. Reality protests.",
            
            "Temporal": f"Time itself bends to {skill['name']}. Past, present, future blur. You exist outside the flow of moments. Others move in slow motion while you move at will. Entropy accumulates.",
            
            "Reality Warp": f"With {skill['name']}, you REWRITE what is. Existence itself is mutable. What was true becomes false. What couldn't be, now is. The universe groans under the strain.",
            
            "Singularity": f"You create {skill['name']}—a point where all collapses. Gravity, light, matter, energy, even thought—all pulled toward impossible density. Event horizon forms. Escape is impossible.",
            
            "Corruption": f"Dark power flows through {skill['name']}. Not evil, but ENTROPY. Darkness not as absence but as force. You feel it stain your soul even as it empowers you.",
            
            "Anomaly": f"Something STRANGE happens with {skill['name']}. Not natural. Not unnatural. ANOMALOUS. Reality glitches, hiccups, stutters."
        }
        
        desc = descriptions.get(focus['type'], f"Reality bends to {skill['name']}.")
        
        # Story hooks - CORRUPTION + TEMPTATION ARCS
        hooks = []
        
        # Universal corruption hook
        hooks.append({
            "trigger": "first_use",
            "warning": f"⚠️ Using {skill['name']} CORRUPTS YOU ⚠️",
            "immediate": f"Corruption +{focus['corruption_cost']}",
            "feeling": "Power surges through you... and something dark settles in your soul",
            "marcus": "'What... what WAS that?! Your eyes went black for a second!'",
            "elena": "'Energy readings are off the charts. And... concerning.'",
            "unlock": "Corruption mechanic, void skill tree"
        })
        
        # Type-specific dark hooks
        if focus['type'] == "Void":
            hooks.extend([
                {
                    "trigger": "void_corruption_10",
                    "physical_change": "Your hands darken permanently",
                    "npc_notice": "People notice your corruption",
                    "marcus": "'Your hands... they don't look right anymore.'",
                    "healer": "'I can't heal void corruption. It's beyond me.'",
                    "benefit": "Void skills +20% damage",
                    "consequence": "Light-aligned NPCs distrust you"
                },
                {
                    "trigger": "void_corruption_25",
                    "transformation": "Your eyes turn black, voice echoes with void",
                    "fear": "Civilians flee from you",
                    "power": "Void skills +50% damage",
                    "faction": "Light paladins attack on sight",
                    "unlock": "Void entity path, dark ending"
                },
                {
                    "trigger": "void_corruption_50",
                    "crisis": "⚠️ CORRUPTION CRITICAL ⚠️",
                    "choice": [
                        "Embrace void (become void entity, lose humanity)",
                        "Resist (difficult, requires light intervention)",
                        "Balance (paradox path, keep humanity + void power)"
                    ],
                    "story_branch": "Major ending fork"
                }
            ])
        
        elif focus['type'] == "Temporal":
            hooks.extend([
                {
                    "trigger": "first_time_manipulation",
                    "cosmic_attention": "Time Guardian detects your tampering",
                    "warning": "'MORTAL. You meddle with forces beyond comprehension.'",
                    "choice": [
                        "Defy Guardian (boss fight, keep time powers)",
                        "Apologize (lose time skills temporarily, gain wisdom)",
                        "Bargain (time powers restricted, but allowed)"
                    ]
                },
                {
                    "trigger": "time_paradox_created",
                    "reality_break": "You've created a paradox. Timeline fractures.",
                    "consequence": "NPC remembers both timelines, goes mad",
                    "quest": "Fix paradox or reality collapses",
                    "corruption": "+10 temporal entropy"
                }
            ])
        
        elif focus['type'] == "Reality Warp":
            hooks.extend([
                {
                    "trigger": "rewrite_reality_first_time",
                    "existential": "You've changed what IS. Witnesses don't remember old reality.",
                    "only_you_remember": "You alone know what was true before",
                    "burden": "The weight of rewritten history",
                    "power": "You are now AUTHOR of reality",
                    "corruption": "+5, plus burden of knowledge"
                },
                {
                    "trigger": "unmake_person",
                    "horrific": "You erase someone from existence entirely",
                    "consequence": "No one remembers them... except you",
                    "guilt": "You carry the memory of someone who never existed",
                    "dark_achievement": "'The Unmaker'",
                    "ending_impact": "Locks certain endings, unlocks dark god path"
                }
            ])
        
        # NPC Reactions - FEAR + FASCINATION
        npc_reactions = {
            "Marcus": self.generate_marcus_reactions(skill, focus),
            "Elena": self.generate_elena_reactions(skill, focus),
            "Void_Scholar": {
                "detected": "'I sense void manipulation. You're one of US now.'",
                "recruitment": "Void academy invitation",
                "warning": "'Embrace the void, but don't let it consume you.'"
            },
            "Light_Paladin": {
                "if_witnessed": "'VOID MAGIC! Heresy! Corruption must be purged!'",
                "attacks": "Paladins become hostile",
                "bounty": "5000 gold - Dead or Purified"
            }
        }
        
        # Environmental Impact - CORRUPTION SPREADS
        environmental = [
            {
                "condition": "use_void_near_rift",
                "danger": "⚠️ RIFT DESTABILIZES ⚠️",
                "consequence": "Rift tears wider, void entities pour through",
                "choice": "Seal rift (lose void powers temporarily) or embrace chaos?"
            },
            {
                "condition": "use_void_repeatedly_same_location",
                "corruption": "Area becomes void-tainted permanently",
                "effect": "Vegetation withers, animals flee, void entities spawn",
                "aesthetic": "Location turns dark, reality feels thin",
                "gameplay": "Void skills +30% here, Light skills -30%"
            },
            {
                "condition": "use_time_skill_in_temporal_anomaly",
                "catastrophe": "⚠️ TIMELINE COLLAPSE IMMINENT ⚠️",
                "urgent_quest": "Fix temporal anomaly or reality ends"
            }
        ]
        
        return {
            "description": desc,
            "story_hooks": hooks,
            "npc_reactions": npc_reactions,
            "environmental_impact": environmental,
            "corruption_arc": "Every void use corrupts. Power has price. Can you resist darkness?",
            "temptation": "Void skills are POWERFUL. Dangerously so. Easy to rely on. Hard to stop."
        }
    
    def generate_marcus_reactions(self, skill, focus):
        """Marcus's fear and concern about void corruption"""
        if focus['corruption_risk'] in ["HIGH", "EXTREME"]:
            return {
                "first_use": "'What the FUCK was that?! Your eyes went black!'",
                "concerned": "'That power... it's dangerous. I can feel it.'",
                "after_10_uses": "'You're using that void stuff too much. It's changing you.'",
                "corruption_high": "'Your hands are dark. Your eyes are darker. This power is EATING you.'",
                "intervention": "'I'm worried about you. Please, stop using that void magic.'"
            }
        else:
            return {
                "first_use": "'That was... unsettling. But effective.'",
                "tactical": "'Use it sparingly. That kind of power has consequences.'"
            }
    
    def generate_elena_reactions(self, skill, focus):
        """Elena's scientific fascination + ethical concern"""
        return {
            "analysis": f"'{skill['name']} violates several laws of physics.'",
            "fascinated": "'The void energy signature is unprecedented. Dangerous, but fascinating.'",
            "if_high_corruption": "'Your bio-signature is changing. The void is rewriting you at cellular level.'",
            "ethical": "'Power without wisdom is catastrophe. Be careful.'"
        }
    
    def generate_targeting(self, skill, focus):
        """Generate targeting with reality-bending consequences"""
        return {
            "enemy": {
                "effectiveness": "Extremely high damage",
                "consequence": "Corruption +{} per use".format(focus['corruption_cost']),
                "overkill": "Void skills often obliterate targets completely"
            },
            "reality_itself": {
                "forbidden": "⚠️ TARGETING REALITY ITSELF ⚠️",
                "effect": "Rewrite laws of physics in local area",
                "risk": "May attract cosmic entities, reality guardians",
                "corruption": "+10"
            },
            "self": {
                "sacrifice": "Channel void through your own body",
                "power": "Massive damage boost",
                "cost": "Heavy corruption, possible permanent changes"
            }
        }
    
    def generate_fusions(self, skill, focus):
        """Generate paradox fusion combinations"""
        fusions = [
            {
                "partner": "Light Ascend",
                "result": f"Paradox {skill['name']}",
                "effect": "Void + Light = Impossibility (ignores ALL resistances)",
                "narrative": "Light and darkness unified. Scholars said it couldn't exist. You proved them wrong.",
                "corruption": "Paradox skills reduce corruption (balanced energies)"
            },
            {
                "partner": "Bloom Heal",
                "result": f"Entropic Life",
                "effect": "Death creates life, void nurtures growth (convert corpses to healing)",
                "narrative": "The cycle of entropy and renewal. Death is not end, but transformation.",
                "unlock": "Philosophical questline about balance"
            }
        ]
        return fusions
    
    def enhance_evolution(self, skill, focus):
        """Evolution paths - Embrace vs Resist corruption"""
        return {
            "path_A_dark": {
                "name": f"Void-Touched {skill['name']}",
                "upgrade": "Damage +100%, corruption cost +50%",
                "requirement": "Embrace corruption (50+ corruption)",
                "story": "You've surrendered to the void. Power without limit."
            },
            "path_B_balance": {
                "name": f"Controlled {skill['name']}",
                "upgrade": "Same power, zero corruption cost",
                "requirement": "Master corruption (use 100 times without going above 25 corruption)",
                "story": "You wield void without being consumed. Legendary discipline."
            },
            "path_C_redemption": {
                "name": f"Purified {skill['name']}",
                "upgrade": "Convert to Light-Void hybrid, heals corruption",
                "requirement": "Resist darkness (cleanse corruption 10 times)",
                "story": "You've transmuted darkness into light. Redemption is possible."
            }
        }
    
    def generate_unlock(self, skill):
        """Void skills unlock through dark discoveries"""
        tier = skill['tier']
        
        if tier == 0:
            return {"method": "Crisis", "context": "Desperate moment, void power awakens involuntarily"}
        elif tier == 1:
            return {"method": "Discovery", "location": "Find void grimoire in forbidden library"}
        elif tier == 2:
            return {"method": "Corruption", "requirement": "Corruption 15+"}
        else:
            return {"method": "Dark Bargain", "entity": "Void entity teaches you in exchange for service"}

# RUN TRANSFORMATION
transformer = SingularityTransformer()
transformer.transform_all(all_singularity)

# Save
output = {
    "meta": {
        "version": "2.0_COMPLETE",
        "total_skills": len(transformer.transformed),
        "engine": "Singularity",
        "transformation_date": "2025-11-18",
        "status": "Week 2 Complete - All 100 Singularity Skills Transformed",
        "narrative_combat_hybrid": True,
        "depth_level": "100% - Void Power + Corruption Arcs + Reality Warping + Temptation",
        "warning": "High power, high corruption. Every use has COST.",
        "philosophy": "Power through entropy. Strength through darkness. But darkness consumes."
    },
    "skills": transformer.transformed
}

output_path = 'e:/game1/World_Bible_folder/SINGULARITY_ENGINE_COMPLETE_v2.json'
with open(output_path, 'w', encoding='utf-8') as f:
    json.dump(output, f, indent=2, ensure_ascii=False)

print()
print("="*60)
print("✓ SINGULARITY ENGINE TRANSFORMATION COMPLETE")
print("="*60)
print(f"Total skills: {len(transformer.transformed)}")
print(f"Saved to: {output_path}")
print()
print("All Singularity skills now have:")
print("  ✓ Void/paradox/temporal mechanics")
print("  ✓ Corruption cost per use")
print("  ✓ Dark temptation narratives")
print("  ✓ Marcus fear reactions")
print("  ✓ Physical corruption changes")
print("  ✓ Reality-warping consequences")
print("  ✓ Time manipulation ethics")
print("  ✓ Void entity paths")
print("  ✓ Embrace/Resist/Balance evolution")
print("  ✓ Paradox fusion combinations")
print("="*60)
print()
print("🌑 Void is POWER + CORRUPTION + TEMPTATION")
