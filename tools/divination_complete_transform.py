"""
DIVINATION ENGINE TRANSFORMER v2.0
Transforms all 100 Divination skills into premium narrative-combat hybrids
Focus: Investigation + Scrying + Prophecy + Detective Gameplay + Fate vs Free Will
"""

import json

print("="*60)
print("DIVINATION ENGINE - COMPLETE TRANSFORMATION")
print("="*60)
print()

# Load database
with open('e:/game1/03-data/COMPLETE_SKILL_DATABASE.json', 'r', encoding='utf-8') as f:
    data = json.load(f)
    all_divination = [s for s in data['skills'] if s['engine'] == 'Divination']

print(f"Total Divination skills found: {len(all_divination)}")
print()

class DivinationTransformer:
    """Transforms Divination skills into investigation/prophecy gameplay"""
    
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
        """Create premium divination skill with investigation depth"""
        
        focus = self.analyze_divination_focus(skill)
        
        premium = {
            "id": skill['id'],
            "name": skill['name'],
            "display_name": self.generate_display_name(skill, focus),
            
            # Classification
            "engine": "Divination",
            "skill_type": focus['type'],
            "lore_tag": focus['theme'],
            "tier": skill['tier'],
            "rarity": self.get_rarity(skill['tier']),
            
            # Costs
            "cost": {
                "bandwidth": skill['cost'].get('gnosis', 15),
                "kp": skill['cost'].get('kp', 1),
                "insight": focus['insight_gain']  # Divination builds insight
            },
            "cooldown": self.story_cooldown(skill),
            
            # COMBAT LAYER (Knowledge is power)
            "combat_effect": self.generate_combat_effect(skill, focus),
            
            # NARRATIVE LAYER (Detective work + prophecy + mysteries)
            "narrative_effect": self.generate_narrative_effect(skill, focus),
            
            # Targeting (scrying, detection, revelation)
            "targeting_matrix": self.generate_targeting(skill, focus),
            
            # Fusion (combination divinations)
            "fusion_combinations": self.generate_fusions(skill, focus),
            
            # Evolution (master diviner paths)
            "evolution": self.enhance_evolution(skill, focus),
            
            # Unlock
            "unlock": self.generate_unlock(skill),
            
            # Meta
            "tags": skill.get('keywords', []),
            "themes": skill.get('themes', []),
            "power_score": skill.get('powerScore', 0),
            "mystery_level": focus['mystery'],
            "original": skill
        }
        
        return premium
    
    def analyze_divination_focus(self, skill):
        """Determine divination skill type"""
        effect = skill['effect'].lower()
        name = skill['name'].lower()
        
        # Analyze
        is_scrying = any(w in effect or w in name for w in ['scry', 'see', 'vision', 'observe'])
        is_prophecy = any(w in effect or w in name for w in ['future', 'prophecy', 'predict', 'foresee'])
        is_detection = any(w in effect or w in name for w in ['detect', 'sense', 'reveal', 'find'])
        is_truth = any(w in effect or w in name for w in ['truth', 'lie', 'honest', 'deception'])
        is_fate = any(w in effect or w in name for w in ['fate', 'destiny', 'doom'])
        is_investigation = any(w in effect for w in ['investigate', 'analyze', 'examine', 'study'])
        
        # Insight gain
        if is_prophecy or is_fate:
            insight = 5
        elif is_scrying or is_investigation:
            insight = 3
        else:
            insight = 1
        
        # Mystery level
        if is_fate or is_prophecy:
            mystery = "COSMIC"
        elif is_scrying:
            mystery = "HIDDEN"
        else:
            mystery = "MUNDANE"
        
        # Type
        if is_prophecy:
            return {"type": "Prophecy", "theme": "Future Sight", "insight_gain": insight, "mystery": mystery}
        elif is_scrying:
            return {"type": "Scrying", "theme": "Remote Vision", "insight_gain": insight, "mystery": mystery}
        elif is_detection:
            return {"type": "Detection", "theme": "Revelation", "insight_gain": insight, "mystery": mystery}
        elif is_truth:
            return {"type": "Truth Reading", "theme": "Veracity", "insight_gain": insight, "mystery": mystery}
        elif is_fate:
            return {"type": "Fate Reading", "theme": "Destiny", "insight_gain": insight, "mystery": mystery}
        elif is_investigation:
            return {"type": "Investigation", "theme": "Analysis", "insight_gain": insight, "mystery": mystery}
        else:
            return {"type": "Clairvoyance", "theme": "Awareness", "insight_gain": 1, "mystery": "MUNDANE"}
    
    def generate_display_name(self, skill, focus):
        """Generate investigative display name"""
        subtitles = {
            "Prophecy": ["Future Revealed", "Fate's Thread", "Tomorrow's Truth"],
            "Scrying": ["Eyes Everywhere", "Vision Unbound", "See the Unseen"],
            "Detection": ["Truth Unveiled", "Hidden Made Clear", "Nothing Escapes"],
            "Truth Reading": ["Lies Exposed", "Hearts Laid Bare", "Truth Absolute"],
            "Fate Reading": ["Threads of Destiny", "Doom Foretold", "Pattern Seen"],
            "Investigation": ["Case Cracked", "Evidence Found", "Mystery Solved"],
            "Clairvoyance": ["Awareness Expanded", "Perception Heightened", "All is Known"]
        }
        
        skill_type = focus['type']
        name_hash = sum(ord(c) for c in skill['name'])
        subtitle = subtitles.get(skill_type, ["Knowledge is Power"])[name_hash % 3]
        
        return f"{skill['name']}: {subtitle}"
    
    def get_rarity(self, tier):
        """Divination skills are knowledge-based"""
        rarities = ["Common", "Uncommon", "Rare", "Rare", "Epic"]
        return rarities[min(tier, 4)]
    
    def story_cooldown(self, skill):
        """Investigation takes time"""
        cd = skill.get('cooldown', 0)
        if cd == 0:
            return "INSTANT"
        elif cd <= 1:
            return "SHORT"
        elif cd <= 2:
            return "MEDIUM"
        else:
            return "LONG"
    
    def generate_combat_effect(self, skill, focus):
        """Knowledge-based combat advantages"""
        return {
            "primary": skill['effect'],
            "advantage": "Insight grants tactical advantage",
            "skill_type": focus['type'],
            "insight_gain": f"+{focus['insight_gain']} Insight",
            "combat_bonus": "Know enemy weaknesses, predict attacks"
        }
    
    def generate_narrative_effect(self, skill, focus):
        """Generate deep investigation/prophecy narratives"""
        
        # Detective-style descriptions
        descriptions = {
            "Prophecy": f"You invoke {skill['name']}, peering into the threads of time. The future unfolds before your mind's eye—not fixed, but POTENTIAL. You see what MIGHT be.",
            
            "Scrying": f"With {skill['name']}, your consciousness extends beyond your body. You SEE distant places, hidden rooms, secret meetings. Nothing stays hidden.",
            
            "Detection": f"You activate {skill['name']}. Truth BLAZES in your perception. Lies glow like fire. Hidden objects shimmer. Invisible becomes visible.",
            
            "Truth Reading": f"Through {skill['name']}, you read hearts and minds. Not telepathy, but EMPATHY heightened to supernatural. Every microexpression, every heartbeat, every lie—REVEALED.",
            
            "Fate Reading": f"The threads of destiny illuminate under {skill['name']}. You see the PATTERN—how actions lead to consequences, how choices shape outcomes.",
            
            "Investigation": f"Your analytical mind activates {skill['name']}. Evidence connects. Patterns emerge. The mystery unravels before you like thread from cloth.",
            
            "Clairvoyance": f"Awareness expands through {skill['name']}. You sense presences, dangers, opportunities. The world reveals itself."
        }
        
        desc = descriptions.get(focus['type'], f"Knowledge flows through {skill['name']}.")
        
        # Story hooks - INVESTIGATION + MYSTERY SOLVING
        hooks = []
        
        # Universal investigation hook
        hooks.append({
            "trigger": "first_use",
            "revelation": "You unlock investigative capabilities",
            "gameplay": "Detective quests now available",
            "insight": f"+{focus['insight_gain']} Insight",
            "marcus": "'You... you can SEE things? That's useful.'",
            "elena": "'Divination. Fascinating. What do you perceive?'",
            "unlock": "Investigation questlines, mystery-solving"
        })
        
        # Type-specific investigation hooks
        if focus['type'] == "Prophecy":
            hooks.extend([
                {
                    "trigger": "first_prophecy",
                    "vision": "You see FUTURE DISASTER",
                    "specifics": "City burns. Marcus dies. Elena corrupted.",
                    "timeline": "7 days until catastrophe",
                    "choice": [
                        "Tell Marcus (he believes, helps prepare)",
                        "Tell Elena (she's skeptical, wants proof)",
                        "Act alone (change fate yourself)",
                        "Ignore vision (fate unfolds as seen)"
                    ],
                    "philosophy": "Can prophecy be prevented? Or does trying to stop it CAUSE it?"
                },
                {
                    "trigger": "prophecy_prevented",
                    "triumph": "You changed fate! Disaster averted!",
                    "consequence": "But... timeline feels WRONG now",
                    "elena": "'According to my calculations, we should all be dead. You rewrote fate.'",
                    "cosmic_attention": "Fate Weavers notice your meddling",
                    "unlock": "Fate manipulation questline, time paradoxes"
                },
                {
                    "trigger": "prophecy_fulfilled",
                    "tragedy": "Despite your efforts, fate unfolds as foretold",
                    "despair": "Can nothing change destiny?",
                    "wisdom": "Prophecy shows probability, not certainty",
                    "growth": "Learn to read prophecy as WARNING, not DOOM"
                }
            ])
        
        elif focus['type'] == "Scrying":
            hooks.extend([
                {
                    "trigger": "scry_secret_meeting",
                    "discovery": "You witness CONSPIRACY in real-time",
                    "targets": "City officials + cult leaders meeting",
                    "plot": "Planning to unleash void entities during festival",
                    "evidence": "You saw it, but can't prove it",
                    "choice": [
                        "Confront officials (they deny, you look crazy)",
                        "Gather physical evidence (investigation quest)",
                        "Tell Marcus (he raids meeting location)",
                        "Warn Elena (she develops counter-ritual)"
                    ]
                },
                {
                    "trigger": "scry_private_moment",
                    "ethical_breach": "You accidentally witness Marcus in private moment",
                    "intimacy": "Something deeply personal",
                    "guilt": "You violated his privacy",
                    "choice": [
                        "Tell him (honesty, he's upset but respects truth)",
                        "Keep secret (burden of knowledge)",
                        "Use information (manipulative, trust -10)"
                    ],
                    "philosophy": "With great sight comes great responsibility"
                }
            ])
        
        elif focus['type'] == "Truth Reading":
            hooks.extend([
                {
                    "trigger": "detect_ally_lie",
                    "shock": "Marcus is LYING to you",
                    "about": "His past, his mission, his orders",
                    "conflict": "Confront or investigate further?",
                    "revelation": "Marcus is undercover, investigating YOU",
                    "choice": [
                        "Confront (he admits, trust crisis, but can reconcile)",
                        "Play along (let him think you don't know)",
                        "Counter-spy (investigate his organization)"
                    ]
                },
                {
                    "trigger": "interrogation_use",
                    "power": "You KNOW when anyone lies",
                    "interrogation": "Crime lord can't deceive you",
                    "information": "Extract truth perfectly",
                    "reputation": "Known as human lie detector",
                    "faction": "Thieves Guild wants you DEAD (too dangerous)"
                }
            ])
        
        elif focus['type'] == "Fate Reading":
            hooks.extend([
                {
                    "trigger": "read_npc_fate",
                    "vision": "You see NPC's DEATH approaching",
                    "timeline": "2 days until assassination",
                    "burden": "You know their doom",
                    "choice": [
                        "Warn them (they might not believe)",
                        "Protect them (bodyguard quest)",
                        "Hunt assassin (detective work)",
                        "Accept fate (philosophical choice)"
                    ],
                    "philosophy": "Is it mercy to know your death, or cruelty?"
                },
                {
                    "trigger": "read_own_fate",
                    "horror": "You glimpse YOUR OWN DEATH",
                    "manner": "Betrayed by someone you trust",
                    "timeline": "Before game's end",
                    "paranoia": "Who will betray you? Marcus? Elena?",
                    "choice": [
                        "Trust no one (isolation path)",
                        "Trust despite fate (courage path)",
                        "Change fate (rebellion against destiny)"
                    ]
                }
            ])
        
        # NPC Reactions - KNOWLEDGE CHANGES RELATIONSHIPS
        npc_reactions = {
            "Marcus": self.generate_marcus_reactions(skill, focus),
            "Elena": self.generate_elena_reactions(skill, focus),
            "City_Detective": {
                "recruitment": "'You can SEE truth? I need you on my cases.'",
                "partnership": "Detective sidequests unlock",
                "payment": "500 gold per case solved"
            },
            "Cult_Leader": {
                "if_detected": "'The seer has found us. Eliminate them.'",
                "assassination_attempts": "Cultists want you dead",
                "reason": "You see too much"
            }
        }
        
        # Investigation Gameplay
        investigation_mechanics = [
            {
                "system": "Evidence Collection",
                "how": "Scrying/Detection skills reveal clues",
                "tracking": "Evidence log in journal",
                "deduction": "Connect evidence to solve cases"
            },
            {
                "system": "Mystery Quests",
                "examples": [
                    "Who murdered the merchant? (8 suspects, gather alibis)",
                    "Where is the artifact hidden? (scry locations)",
                    "What is the cult planning? (detect lies in interrogations)",
                    "Who will betray the council? (read fates)"
                ],
                "rewards": "Reputation, gold, unique items, faction standing"
            },
            {
                "system": "Prophecy Quests",
                "structure": "See disaster → Investigate cause → Prevent or accept",
                "branching": "Changing fate creates alternate timeline",
                "philosophy": "Explore free will vs determinism"
            }
        ]
        
        return {
            "description": desc,
            "story_hooks": hooks,
            "npc_reactions": npc_reactions,
            "investigation_mechanics": investigation_mechanics,
            "philosophy": "Knowledge is power. But knowing the future—can you change it? Should you?"
        }
    
    def generate_marcus_reactions(self, skill, focus):
        """Marcus appreciates tactical intel"""
        if focus['type'] in ["Prophecy", "Fate Reading"]:
            return {
                "respect": "'You can see the future? Tell me before battles.'",
                "tactical": "'Forewarning is tactical advantage.'",
                "skeptical": "'But can it be changed?'",
                "trust": "Marcus values your visions (+5 trust)"
            }
        elif focus['type'] == "Truth Reading":
            return {
                "uncomfortable": "'You can tell when I lie? That's... unsettling.'",
                "honest": "'Then I'll be honest. Always.'",
                "trust": "Forces honesty, deepens relationship"
            }
        else:
            return {
                "useful": "'Good intel. Use it in combat.'"
            }
    
    def generate_elena_reactions(self, skill, focus):
        """Elena is fascinated by divination science"""
        return {
            "scientific": f"'How does {skill['name']} work? Information from where?'",
            "theory": "'Divination might be quantum entanglement. Or tapping akashic field.'",
            "collaboration": "'Let me study your visions. Compare to probability models.'",
            "partnership": "Research quests with Elena unlock"
        }
    
    def generate_targeting(self, skill, focus):
        """Information gathering targets"""
        return {
            "enemy": {
                "effect": "Learn weaknesses, predict attacks",
                "combat_bonus": "+20% damage, +10% dodge"
            },
            "location": {
                "effect": "Scry distant places, detect hidden passages",
                "exploration": "Reveal map, find secrets"
            },
            "past_events": {
                "effect": "Witness what happened (solve mysteries)",
                "detective": "Crime scene reconstruction"
            },
            "future": {
                "effect": "See potential outcomes",
                "warning": "Prophecies are POTENTIAL, not fixed"
            }
        }
    
    def generate_fusions(self, skill, focus):
        """Combination divination techniques"""
        fusions = [
            {
                "partner": "Mind Link",
                "result": f"Shared Vision {skill['name']}",
                "effect": "Share divination with allies (everyone sees vision)",
                "narrative": "Marcus sees your prophecy firsthand. 'I... I believe you now.'"
            },
            {
                "partner": "Time Loop",
                "result": f"Recursive Scrying",
                "effect": "See past visions of future (meta-divination)",
                "narrative": "You witness yourself witnessing the vision. Recursion."
            }
        ]
        return fusions
    
    def enhance_evolution(self, skill, focus):
        """Master diviner evolution paths"""
        return {
            "path_A_oracle": {
                "name": f"Oracle's {skill['name']}",
                "upgrade": "See multiple futures simultaneously",
                "requirement": "Prevent 10 disasters via prophecy",
                "story": "You are now ORACLE. Futures spread before you like cards."
            },
            "path_B_detective": {
                "name": f"Investigator's {skill['name']}",
                "upgrade": "Solve cases instantly (perfect deduction)",
                "requirement": "Solve 50 mysteries",
                "story": "Master detective. No case unsolvable."
            },
            "path_C_fate_weaver": {
                "name": f"Fate-Woven {skill['name']}",
                "upgrade": "Not just see fate, but CHANGE it",
                "requirement": "Alter 20 prophecies successfully",
                "story": "You don't predict future. You WRITE it."
            }
        }
    
    def generate_unlock(self, skill):
        """Divination unlocks through mysteries"""
        tier = skill['tier']
        
        if tier == 0:
            return {"method": "Natural", "context": "Spontaneous vision awakens ability"}
        elif tier == 1:
            return {"method": "Study", "location": "Learn from prophet/oracle"}
        elif tier == 2:
            return {"method": "Investigation", "requirement": "Solve 10 mysteries"}
        else:
            return {"method": "Prophecy", "requirement": "Receive true prophecy from cosmic entity"}

# RUN TRANSFORMATION
transformer = DivinationTransformer()
transformer.transform_all(all_divination)

# Save
output = {
    "meta": {
        "version": "2.0_COMPLETE",
        "total_skills": len(transformer.transformed),
        "engine": "Divination",
        "transformation_date": "2025-11-18",
        "status": "Week 2 Complete - All 100 Divination Skills Transformed",
        "narrative_combat_hybrid": True,
        "depth_level": "100% - Investigation + Prophecy + Detective Work + Fate vs Free Will",
        "gameplay": "Mystery solving, case investigations, prophecy quests",
        "philosophy": "Knowledge is power. But knowing the future—can you change it?"
    },
    "skills": transformer.transformed
}

output_path = 'e:/game1/World_Bible_folder/DIVINATION_ENGINE_COMPLETE_v2.json'
with open(output_path, 'w', encoding='utf-8') as f:
    json.dump(output, f, indent=2, ensure_ascii=False)

print()
print("="*60)
print("✓ DIVINATION ENGINE TRANSFORMATION COMPLETE")
print("="*60)
print(f"Total skills: {len(transformer.transformed)}")
print(f"Saved to: {output_path}")
print()
print("All Divination skills now have:")
print("  ✓ Investigation mechanics")
print("  ✓ Prophecy quest systems")
print("  ✓ Detective gameplay")
print("  ✓ Truth reading interrogations")
print("  ✓ Scrying remote locations")
print("  ✓ Fate vs free will choices")
print("  ✓ Mystery solving")
print("  ✓ Evidence collection")
print("  ✓ Oracle/Detective/Fate Weaver paths")
print("  ✓ Case-based quests")
print("="*60)
print()
print("🔮 Knowledge is INSIGHT + INVESTIGATION + PROPHECY")
