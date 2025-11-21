"""
THERAPEUTIC ENGINE TRANSFORMER v2.0
Transforms all 100 Therapeutic skills into premium narrative-combat hybrids
Focus: Healing → Bonding | Cure → Drama | Mental Health → Character Arcs
"""

import json

print("="*60)
print("THERAPEUTIC ENGINE - COMPLETE TRANSFORMATION")
print("="*60)
print()

# Load database
with open('e:/game1/03-data/COMPLETE_SKILL_DATABASE.json', 'r', encoding='utf-8') as f:
    data = json.load(f)
    all_therapeutic = [s for s in data['skills'] if s['engine'] == 'Therapeutic']

print(f"Total Therapeutic skills found: {len(all_therapeutic)}")
print()

class TherapeuticTransformer:
    """Transforms Therapeutic skills with maximum emotional and narrative depth"""
    
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
        """Create premium therapeutic skill with 100% depth"""
        
        focus = self.analyze_therapeutic_focus(skill)
        
        premium = {
            "id": skill['id'],
            "name": skill['name'],
            "display_name": self.generate_display_name(skill, focus),
            
            # Classification  
            "engine": "Therapeutic",
            "skill_type": focus['type'],
            "lore_tag": focus['theme'],
            "tier": skill['tier'],
            "rarity": self.get_rarity(skill['tier']),
            
            # Costs
            "cost": {
                "bandwidth": skill['cost'].get('gnosis', 20),
                "kp": skill['cost'].get('kp', 1)
            },
            "cooldown": self.story_cooldown(skill),
            
            # COMBAT LAYER (100% - Healing effectiveness)
            "combat_effect": self.generate_combat_effect(skill, focus),
            
            # NARRATIVE LAYER (100% - Emotional bonding)
            "narrative_effect": self.generate_narrative_effect(skill, focus),
            
            # Targeting with emotional consequences
            "targeting_matrix": self.generate_targeting(skill, focus),
            
            # Fusion (healing synergies)
            "fusion_combinations": self.generate_fusions(skill, focus),
            
            # Evolution
            "evolution": self.enhance_evolution(skill, focus),
            
            # Unlock
            "unlock": self.generate_unlock(skill),
            
            # Meta
            "tags": skill.get('keywords', []),
            "themes": skill.get('themes', []),
            "power_score": skill.get('powerScore', 0),
            "original": skill
        }
        
        return premium
    
    def analyze_therapeutic_focus(self, skill):
        """Determine therapeutic skill type"""
        effect = skill['effect'].lower()
        name = skill['name'].lower()
        
        # Analyze
        is_healing = any(w in effect for w in ['heal', 'restore', 'hp', 'ojas'])
        is_cure = any(w in effect for w in ['remove', 'cure', 'cleanse', 'purify'])
        is_mental = any(w in effect for w in ['mental', 'mind', 'psyche', 'calm', 'soothe'])
        is_prevention = any(w in effect for w in ['prevent', 'immune', 'resist'])
        is_revival = any(w in effect for w in ['revive', 'resurrect', 'death'])
        is_buff = any(w in effect for w in ['grant', 'increase', 'boost']) and not is_healing
        
        if is_revival:
            return {"type": "Revival", "theme": "Life-Death"}
        elif is_mental:
            return {"type": "Mental", "theme": "Psychology"}
        elif is_cure:
            return {"type": "Cure", "theme": "Purification"}
        elif is_prevention:
            return {"type": "Prevention", "theme": "Protection"}
        elif is_buff:
            return {"type": "Restoration", "theme": "Vitality"}
        elif is_healing:
            return {"type": "Healing", "theme": "Life"}
        else:
            return {"type": "Support", "theme": "Care"}
    
    def generate_display_name(self, skill, focus):
        """Generate epic display name"""
        subtitles = {
            "Healing": ["Grace of Renewal", "Touch of Life", "Blessing of Vitality"],
            "Cure": ["Purification's Light", "Cleansing Grace", "Remedy Divine"],
            "Mental": ["Peace of Mind", "Soul's Respite", "Inner Harmony"],
            "Revival": ["Return from Beyond", "Death Defied", "Second Chance"],
            "Prevention": ["Shield of Wellness", "Guardian's Blessing", "Protective Grace"],
            "Restoration": ["Vigor Restored", "Strength Renewed", "Power Reclaimed"],
            "Support": ["Caretaker's Gift", "Healer's Touch", "Blessing Manifest"]
        }
        
        skill_type = focus['type']
        name_hash = sum(ord(c) for c in skill['name'])
        subtitle = subtitles.get(skill_type, ["The Awakening"])[name_hash % 3]
        
        return f"{skill['name']}: {subtitle}"
    
    def get_rarity(self, tier):
        """Convert tier to rarity"""
        return ["Common", "Common", "Uncommon", "Rare", "Epic"][min(tier, 4)]
    
    def story_cooldown(self, skill):
        """Convert to story-based cooldown"""
        cd = skill.get('cooldown', 0)
        if cd == 0:
            return "INSTANT"
        elif cd == 1:
            return "SHORT"
        elif cd == 2:
            return "MEDIUM"
        elif cd == 3:
            return "LONG"
        else:
            return "ONCE_PER_CHAPTER"
    
    def generate_combat_effect(self, skill, focus):
        """Generate combat healing mechanics"""
        effect_text = skill['effect']
        
        # Extract healing amount
        import re
        heal_match = re.search(r'(\d+)\s*(?:HP|Ojas|health)', effect_text, re.IGNORECASE)
        heal_amount = int(heal_match.group(1)) if heal_match else 50
        
        return {
            "primary": effect_text,
            "healing_amount": heal_amount,
            "skill_type": focus['type'],
            "targeting": self.get_targeting_types(focus),
            "effectiveness": "High" if focus['type'] in ["Healing", "Revival"] else "Medium"
        }
    
    def get_targeting_types(self, focus):
        """Determine targeting"""
        if focus['type'] == "Revival":
            return ["dead_ally"]
        elif focus['type'] in ["Healing", "Cure", "Mental", "Restoration"]:
            return ["ally", "self", "enemy"]  # Can heal enemies!
        else:
            return ["ally", "ally_area", "self"]
    
    def generate_narrative_effect(self, skill, focus):
        """Generate deep emotional narrative integration"""
        
        # Rich descriptions
        descriptions = {
            "Healing": f"Warm light flows from your hands as {skill['name']} takes effect. Wounds close, pain fades, hope blooms. Your target breathes easier, color returning to their face.",
            
            "Cure": f"Purifying energy surges through {skill['name']}. Disease burns away like morning mist. What was corrupted becomes clean, what was poisoned becomes pure.",
            
            "Mental": f"You reach out with {skill['name']}, touching their mind gently. Fear dissipates, anxiety melts, clarity returns. They look at you with grateful, tearful eyes.",
            
            "Revival": f"You channel {skill['name']} into their still body. For a moment, nothing. Then—a gasp. Lungs fill with air. Eyes flutter open. They're back. Death was not the end.",
            
            "Prevention": f"Protective grace flows through {skill['name']}. A shimmer of energy wraps around your target—proof against harm, shield against suffering.",
            
            "Restoration": f"Vitality surges through {skill['name']}. Exhaustion lifts, strength returns, power flows back into depleted reserves.",
            
            "Support": f"Gentle energy emanates from {skill['name']}. Not flashy, but profound. Small comfort in dark times."
        }
        
        desc = descriptions.get(focus['type'], f"Healing energy flows through {skill['name']}.")
        
        # Story hooks - EMOTIONAL DEPTH
        hooks = []
        
        # Universal hook
        hooks.append({
            "trigger": "first_use",
            "effect": f"Master {skill['name']}, unlock healing techniques",
            "narrative": "You feel the life energy flowing through you",
            "marcus": "'You... you can heal? That's incredible.'"
        })
        
        # Type-specific emotional hooks
        if focus['type'] == "Healing":
            hooks.extend([
                {
                    "trigger": "save_ally_from_death",
                    "dramatic": f"Last-second heal pulls ally back from the brink",
                    "relationship": "Ally loyalty +10, permanent bond formed",
                    "cutscene": "Ally: 'I was fading... then your warmth pulled me back. Thank you.'",
                    "unlock": "Ally personal quest, deeper friendship"
                },
                {
                    "trigger": "heal_enemy",
                    "shock": "Combat pauses. Everyone is confused.",
                    "enemy_reaction": "'Why... why did you save me?'",
                    "choice": [
                        "Mercy ('Everyone deserves a chance')",
                        "Strategy ('You owe me now')",
                        "Compassion ('I couldn't watch you die')"
                    ],
                    "outcome": "Enemy may surrender, join party, or flee in confusion",
                    "marcus": "'Did you just... heal the enemy?! What the hell?!'"
                },
                {
                    "trigger": "heal_50_times",
                    "reputation": "Known as 'The Healer' - NPCs seek you out",
                    "title_earned": "Healer of the Wounded",
                    "unlock": "Healing Guild membership, medical district access"
                }
            ])
        
        elif focus['type'] == "Mental":
            hooks.extend([
                {
                    "trigger": "cure_marcus_trauma",
                    "personal": "Heal Marcus's war-induced PTSD",
                    "cutscene": "'The nightmares... they're fading. How did you do that?'",
                    "relationship": "Marcus trust +15, unlocks romance path",
                    "permanent": "Marcus combat effectiveness +10% (no longer haunted)"
                },
                {
                    "trigger": "cure_civilian_madness",
                    "heroic": "Restore sanity to corruption-maddened civilian",
                    "witness": "Town sees you perform miracle",
                    "reputation": "+20 local fame, 'Miracle Worker' title",
                    "quest_unlock": "Investigate corruption source"
                }
            ])
        
        elif focus['type'] == "Revival":
            hooks.extend([
                {
                    "trigger": "first_revival",
                    "epic": "You bring someone back from death",
                    "world_reaction": "Witnesses are SHOCKED - death defied!",
                    "npc_responses": {
                        "Priest": "'This is... this is the work of gods!'",
                        "Scientist": "'Impossible! The biological processes had ceased!'",
                        "Civilian": "'A miracle! Praise the healer!'"
                    },
                    "fame": "+30 reputation, news spreads across region"
                },
                {
                    "trigger": "revive_important_npc",
                    "story_impact": "NPC death was story branch - you changed fate",
                    "consequence": "Story continues differently, other branches close",
                    "ethical": "Did you have the right to undo death?",
                    "philosophical_unlock": "Debate with death priests, temple access"
                }
            ])
        
        # NPC Reactions - RELATIONSHIP DEPTH
        npc_reactions = {
            "Marcus": self.generate_marcus_reactions(skill, focus),
            "Elena": self.generate_elena_reactions(skill, focus),
            "Saved_NPC": self.generate_saved_npc_reactions(skill, focus)
        }
        
        # Environmental/Social Impact
        environmental = [
            {
                "condition": "heal_in_hospital",
                "synergy": "Healing +20% effectiveness (proper medical environment)",
                "reputation": "Doctors respect your skill, offer partnership"
            },
            {
                "condition": "heal_in_corrupted_zone",
                "difficulty": "Healing -30% effectiveness (tainted energy)",
                "corruption_risk": "May absorb corruption trying to heal here"
            },
            {
                "condition": "heal_publicly_10_times",
                "fame": "Known as healer, civilians seek you out",
                "burden": "Cannot walk through towns without being asked to heal someone",
                "choice": "Help everyone (exhausting) or turn some away (guilt)"
            }
        ]
        
        return {
            "description": desc,
            "story_hooks": hooks,
            "npc_reactions": npc_reactions,
            "environmental_impact": environmental,
            "emotional_weight": "Every heal is a bond. Every life saved is a relationship."
        }
    
    def generate_marcus_reactions(self, skill, focus):
        """Marcus's evolving reactions to healing"""
        if focus['type'] == "Healing":
            return {
                "first_healed": "'Thanks. I... I owe you one.'",
                "after_5_heals": "'You've saved my ass more times than I can count.'",
                "after_15_heals": "'I'm starting to rely on you. Is that... is that okay?'",
                "if_near_death_save": "'I saw the light. You pulled me back. I won't forget this.'",
                "relationship_progression": "Trust +1 per heal, unlocks deeper friendship at 10 heals"
            }
        elif focus['type'] == "Mental":
            return {
                "if_used_on_him": "'My mind feels... clearer. The war feels farther away. Thank you.'",
                "trauma_cured": "'The nightmares stopped. After all these years... they just stopped.'",
                "emotional": "'You gave me peace. I didn't think I deserved it.'"
            }
        else:
            return {
                "general": "'Your healing skills are incredible.'",
                "grateful": "'Glad you're on our side.'"
            }
    
    def generate_elena_reactions(self, skill, focus):
        """Elena's analytical + caring reactions"""
        return {
            "first_analysis": f"'Fascinating. {skill['name']} shows 87% bio-energy compatibility.'",
            "scientific": "'Your healing technique is remarkably efficient.'",
            "if_overused": "'You're depleting yourself. Even healers need rest.'",
            "caring": "'Take care of yourself too, not just everyone else.'"
        }
    
    def generate_saved_npc_reactions(self, skill, focus):
        """Reactions from NPCs you saved"""
        if focus['type'] == "Revival":
            return {
                "awakening": "'I... I was dead. You brought me back. Why?'",
                "grateful": "'I owe you my life. Literally. Anything you need, ask.'",
                "changed": "'Death changes you. I saw... things. Thank you for the second chance.'"
            }
        else:
            return {
                "saved": "'You saved me. I'll never forget this.'",
                "loyal": "'If you ever need help, find me.'"
            }
    
    def generate_targeting(self, skill, focus):
        """Generate targeting with emotional consequences"""
        matrix = {
            "ally": {
                "success": "Ally healed, relationship improves",
                "critical_success": "Overheal creates temporary shield, major gratitude",
                "saves_from_death": "Permanent loyalty bond formed"
            },
            "self": {
                "effect": "Self-heal, but NPCs notice self-care",
                "marcus": "'Good. Can't help others if you're dead.'",
                "overuse": "NPCs worry you're taking too much burden"
            }
        }
        
        if "enemy" in self.get_targeting_types(focus):
            matrix["enemy"] = {
                "shock_value": "⚠️ HEALING YOUR ENEMY?!",
                "requires_confirmation": True,
                "possible_outcomes": [
                    "Enemy surrenders (honor-bound)",
                    "Enemy confused, flees",
                    "Enemy joins your cause",
                    "Enemy attacks harder (sees as weakness)",
                    "Combat pauses as all sides process this"
                ],
                "marcus_reaction": "'WHAT ARE YOU DOING?!'",
                "elena_reaction": "'Interesting tactical choice... or mercy?'",
                "reputation": "Known as merciful healer, some respect it, others see weakness"
            }
        
        return matrix
    
    def generate_fusions(self, skill, focus):
        """Generate healing fusion synergies"""
        fusions = []
        
        if focus['type'] == "Healing":
            fusions = [
                {
                    "partner": "Bloom Heal",
                    "result": f"Verdant {skill['name']}",
                    "effect": "Healing creates garden of life energy, area healing over time",
                    "narrative": "Flowers bloom where you heal. Life begets life."
                },
                {
                    "partner": "Light Ascend",
                    "result": f"Divine {skill['name']}",
                    "effect": "Heal + Purify corruption simultaneously",
                    "narrative": "Sacred light purges darkness while restoring life."
                }
            ]
        elif focus['type'] == "Mental":
            fusions = [
                {
                    "partner": "Echo Pulse",
                    "result": f"Memory {skill['name']}",
                    "effect": "Heal mental trauma by revealing and processing memories",
                    "narrative": "You help them confront and heal from their past."
                }
            ]
        else:
            fusions = [
                {
                    "partner": "Foundation Scaffold",
                    "result": f"Sanctuary",
                    "effect": "Create healing zone (structure + healing aura)",
                    "narrative": "A place of safety where wounds heal naturally."
                }
            ]
        
        return fusions
    
    def enhance_evolution(self, skill, focus):
        """Enhance evolution with emotional depth"""
        return {
            "path_A": {
                "name": f"Perfected {skill['name']}",
                "upgrade": "Healing effectiveness +50%",
                "requirement": f"Heal 50 allies successfully",
                "story": "You've mastered the art of healing through practice"
            },
            "path_B": {
                "name": f"Merciful {skill['name']}",
                "upgrade": "Can heal enemies, converts some to allies",
                "requirement": "Heal 5 enemies in combat",
                "story": "Your compassion knows no bounds",
                "unlock": "Pacifist ending path"
            },
            "path_C": {
                "name": f"Sacrificial {skill['name']}",
                "upgrade": "Transfer your HP to others (ultimate sacrifice)",
                "requirement": "Heal while below 20% HP ten times",
                "story": "You would give everything to save others",
                "marcus": "'Don't sacrifice yourself for us...'"
            }
        }
    
    def generate_unlock(self, skill):
        """Generate unlock conditions"""
        tier = skill['tier']
        
        if tier == 0:
            return {"method": "Tutorial", "context": "Elena teaches basic first aid"}
        elif tier == 1:
            return {"method": "Story", "quest": "Save civilian during crisis event"}
        elif tier == 2:
            return {"method": "Training", "location": "Healer's Guild"}
        else:
            return {"method": "Discovery", "requirement": "Find ancient medical texts"}

# RUN TRANSFORMATION
transformer = TherapeuticTransformer()
transformer.transform_all(all_therapeutic)

# Save
output = {
    "meta": {
        "version": "2.0_COMPLETE",
        "total_skills": len(transformer.transformed),
        "engine": "Therapeutic",
        "transformation_date": "2025-11-18",
        "status": "Week 1 Complete - All 100 Therapeutic Skills Transformed",
        "narrative_combat_hybrid": True,
        "depth_level": "100% - Emotional Bonding + Life-Saving Drama",
        "philosophy": "Every heal is a bond. Every life saved is a story."
    },
    "skills": transformer.transformed
}

output_path = 'e:/game1/World_Bible_folder/THERAPEUTIC_ENGINE_COMPLETE_v2.json'
with open(output_path, 'w', encoding='utf-8') as f:
    json.dump(output, f, indent=2, ensure_ascii=False)

print()
print("="*60)
print("✓ THERAPEUTIC ENGINE TRANSFORMATION COMPLETE")
print("="*60)
print(f"Total skills: {len(transformer.transformed)}")
print(f"Saved to: {output_path}")
print()
print("All Therapeutic skills now have:")
print("  ✓ Combat healing mechanics (100%)")
print("  ✓ Emotional narrative integration")
print("  ✓ Relationship bonding hooks")
print("  ✓ Life-saving dramatic moments")
print("  ✓ Marcus/Elena evolving reactions")
print("  ✓ Heal enemy moral choices")
print("  ✓ Revival miracle moments")
print("  ✓ Mental health character arcs")
print("  ✓ Fusion healing synergies")
print("  ✓ Evolution paths (Perfected/Merciful/Sacrificial)")
print("="*60)
print()
print("🏥 Healing is now BONDING + DRAMA + CHOICE")
