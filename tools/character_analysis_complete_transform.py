"""
CHARACTER ANALYSIS ENGINE TRANSFORMER v2.0
Transforms all 100 Character Analysis skills into premium narrative-combat hybrids
Focus: Profiling + Social Engineering + Empathy + Manipulation + Reading People
"""

import json

print("="*60)
print("CHARACTER ANALYSIS ENGINE - COMPLETE TRANSFORMATION")
print("="*60)
print()

# Load database
with open('e:/game1/03-data/COMPLETE_SKILL_DATABASE.json', 'r', encoding='utf-8') as f:
    data = json.load(f)
    all_analysis = [s for s in data['skills'] if s['engine'] == 'Character Analysis']

print(f"Total Character Analysis skills found: {len(all_analysis)}")
print()

class CharacterAnalysisTransformer:
    """Transforms Character Analysis into social gameplay"""
    
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
        """Create premium character analysis skill"""
        
        focus = self.analyze_skill_focus(skill)
        
        premium = {
            "id": skill['id'],
            "name": skill['name'],
            "display_name": self.generate_display_name(skill, focus),
            
            # Classification
            "engine": "Character Analysis",
            "skill_type": focus['type'],
            "lore_tag": focus['theme'],
            "tier": skill['tier'],
            "rarity": self.get_rarity(skill['tier']),
            
            # Costs
            "cost": {
                "bandwidth": skill['cost'].get('gnosis', 10),
                "kp": skill['cost'].get('kp', 1),
                "social_energy": focus['social_cost']
            },
            "cooldown": self.story_cooldown(skill),
            
            # COMBAT LAYER (Social combat)
            "combat_effect": self.generate_combat_effect(skill, focus),
            
            # NARRATIVE LAYER (Relationships + manipulation + empathy)
            "narrative_effect": self.generate_narrative_effect(skill, focus),
            
            # Targeting (people, groups, relationships)
            "targeting_matrix": self.generate_targeting(skill, focus),
            
            # Fusion (combined social techniques)
            "fusion_combinations": self.generate_fusions(skill, focus),
            
            # Evolution (master manipulator paths)
            "evolution": self.enhance_evolution(skill, focus),
            
            # Unlock
            "unlock": self.generate_unlock(skill),
            
            # Meta
            "tags": skill.get('keywords', []),
            "themes": skill.get('themes', []),
            "power_score": skill.get('powerScore', 0),
            "manipulation_risk": focus['ethics'],
            "original": skill
        }
        
        return premium
    
    def analyze_skill_focus(self, skill):
        """Determine character analysis type"""
        effect = skill['effect'].lower()
        name = skill['name'].lower()
        
        # Analyze
        is_profiling = any(w in effect or w in name for w in ['profile', 'analyze', 'read', 'assess'])
        is_empathy = any(w in effect or w in name for w in ['empathy', 'feel', 'understand', 'connect'])
        is_manipulation = any(w in effect or w in name for w in ['manipulate', 'influence', 'persuade', 'control'])
        is_deception = any(w in effect or w in name for w in ['deceive', 'lie', 'trick', 'bluff'])
        is_charisma = any(w in effect or w in name for w in ['charisma', 'charm', 'seduce', 'inspire'])
        is_intimidation = any(w in effect or w in name for w in ['intimidate', 'threaten', 'fear', 'coerce'])
        
        # Social cost
        if is_manipulation or is_deception:
            cost = 3
        elif is_intimidation:
            cost = 2
        else:
            cost = 1
        
        # Ethics
        if is_manipulation or is_deception:
            ethics = "QUESTIONABLE"
        elif is_intimidation:
            ethics = "AGGRESSIVE"
        elif is_empathy:
            ethics = "ETHICAL"
        else:
            ethics = "NEUTRAL"
        
        # Type
        if is_profiling:
            return {"type": "Profiling", "theme": "Analysis", "social_cost": cost, "ethics": ethics}
        elif is_empathy:
            return {"type": "Empathy", "theme": "Connection", "social_cost": cost, "ethics": ethics}
        elif is_manipulation:
            return {"type": "Manipulation", "theme": "Influence", "social_cost": cost, "ethics": ethics}
        elif is_deception:
            return {"type": "Deception", "theme": "Trickery", "social_cost": cost, "ethics": ethics}
        elif is_charisma:
            return {"type": "Charisma", "theme": "Charm", "social_cost": cost, "ethics": ethics}
        elif is_intimidation:
            return {"type": "Intimidation", "theme": "Fear", "social_cost": cost, "ethics": ethics}
        else:
            return {"type": "Social", "theme": "Interaction", "social_cost": 1, "ethics": "NEUTRAL"}
    
    def generate_display_name(self, skill, focus):
        """Generate social-focused display name"""
        subtitles = {
            "Profiling": ["Reading People", "The Observer", "Know Your Enemy"],
            "Empathy": ["Heart to Heart", "Emotional Connection", "I Feel You"],
            "Manipulation": ["Pulling Strings", "The Puppeteer", "Influence Mastered"],
            "Deception": ["Master of Lies", "The Trickster", "Truth Optional"],
            "Charisma": ["Magnetic Presence", "Irresistible", "Natural Leader"],
            "Intimidation": ["Fear Itself", "The Enforcer", "Dominate"],
            "Social": ["People Skills", "Social Mastery", "Human Nature"]
        }
        
        skill_type = focus['type']
        name_hash = sum(ord(c) for c in skill['name'])
        subtitle = subtitles.get(skill_type, ["Social Power"])[name_hash % 3]
        
        return f"{skill['name']}: {subtitle}"
    
    def get_rarity(self, tier):
        """Social skills are valuable"""
        rarities = ["Common", "Uncommon", "Rare", "Rare", "Epic"]
        return rarities[min(tier, 4)]
    
    def story_cooldown(self, skill):
        """Social interactions take time"""
        cd = skill.get('cooldown', 0)
        if cd == 0:
            return "PER_CONVERSATION"
        elif cd <= 1:
            return "SHORT"
        else:
            return "MEDIUM"
    
    def generate_combat_effect(self, skill, focus):
        """Social combat mechanics"""
        return {
            "primary": skill['effect'],
            "social_combat": "Persuade/intimidate/charm enemies",
            "skill_type": focus['type'],
            "examples": [
                "Talk enemy down (avoid combat)",
                "Intimidate into surrender",
                "Charm into ally",
                "Deceive about your abilities"
            ]
        }
    
    def generate_narrative_effect(self, skill, focus):
        """Generate deep social/relationship narratives"""
        
        # Social descriptions
        descriptions = {
            "Profiling": f"You invoke {skill['name']}, analyzing every micro-expression, every word choice, every hesitation. Within moments, you KNOW them—fears, desires, weaknesses, strengths.",
            
            "Empathy": f"Through {skill['name']}, you FEEL what they feel. Not telepathy, but deep emotional resonance. Their joy is your joy. Their pain is your pain. Understanding without words.",
            
            "Manipulation": f"With {skill['name']}, you pull their strings. A word here, a gesture there. They think they're making free choices. But you guide them, invisible hand on the wheel.",
            
            "Deception": f"You employ {skill['name']}, crafting perfect lies. Your face shows sincerity. Your voice rings with truth. They BELIEVE you completely. Reality bends to your words.",
            
            "Charisma": f"You radiate {skill['name']}. Magnetic presence. People WANT to follow you, help you, please you. Natural leader. Irresistible charm.",
            
            "Intimidation": f"Through {skill['name']}, you project FEAR. Not through violence, but presence. They see their doom in your eyes. Will crumbles. Submission follows.",
            
            "Social": f"You use {skill['name']} with practiced ease. Social dynamics bend to your will. Relationships are chess pieces. People are puzzles to solve."
        }
        
        desc = descriptions.get(focus['type'], f"Social mastery through {skill['name']}.")
        
        # Story hooks - RELATIONSHIPS + MANIPULATION + ETHICS
        hooks = []
        
        # Universal social hook
        hooks.append({
            "trigger": "first_use",
            "awakening": "You unlock social mastery",
            "gameplay": "Social combat, persuasion quests available",
            "marcus": "'How did you DO that? They just... believed you.'",
            "elena": "'Psychological manipulation. Effective, but ethically questionable.'",
            "unlock": "Social gameplay, persuasion trees"
        })
        
        # Type-specific hooks
        if focus['type'] == "Profiling":
            hooks.extend([
                {
                    "trigger": "profile_marcus",
                    "analysis": "You read Marcus completely",
                    "insights": [
                        "PTSD from war trauma (trigger: loud noises)",
                        "Trust issues from betrayal",
                        "Protective instinct (wants to save everyone)",
                        "Hidden guilt (failed to save comrades)",
                        "Attracted to you (tries to hide it)"
                    ],
                    "choice": [
                        "Use insights to help (empathy path, trust +10)",
                        "Use insights to manipulate (dark path, effective but unethical)",
                        "Keep to yourself (neutral)"
                    ],
                    "marcus_notices": "'You... you see right through me, don't you?'"
                },
                {
                    "trigger": "profile_villain",
                    "discovery": "You analyze enemy's psychology",
                    "weakness": "Villain has hidden fear/motivation",
                    "exploit": "Can talk them down without fighting",
                    "choice": [
                        "Negotiate (peaceful resolution)",
                        "Exploit weakness (ruthless victory)",
                        "Fight anyway (ignore social option)"
                    ]
                }
            ])
        
        elif focus['type'] == "Empathy":
            hooks.extend([
                {
                    "trigger": "empathy_marcus_pain",
                    "connection": "You FEEL Marcus's PTSD",
                    "overwhelming": "His pain becomes YOUR pain",
                    "flashback": "Experience his trauma as if it's yours",
                    "understanding": "Now you TRULY understand him",
                    "healing": "Deep empathy creates healing bond",
                    "marcus": "'You... felt it? What I went through?'",
                    "intimacy": "Trust +15, romance path accelerates"
                },
                {
                    "trigger": "empathy_enemy",
                    "conflict": "You feel enemy's pain/motivation",
                    "humanization": "They're not evil, just desperate/hurt",
                    "moral_dilemma": "Can you kill someone whose pain you feel?",
                    "choice": [
                        "Mercy (spare them, risk betrayal)",
                        "Necessary evil (kill despite empathy, burden)",
                        "Redemption (help them, convert enemy to ally)"
                    ]
                }
            ])
        
        elif focus['type'] == "Manipulation":
            hooks.extend([
                {
                    "trigger": "manipulate_guard",
                    "success": "Guard does exactly what you want",
                    "easy": "Too easy. They never suspected.",
                    "power": "You could control ANYONE",
                    "temptation": "Why ask when you can manipulate?",
                    "elena_warning": "'Be careful. That path leads to isolation.'",
                    "ethics": "Manipulation is effective but corrupts relationships"
                },
                {
                    "trigger": "manipulate_marcus",
                    "option_available": "You COULD manipulate Marcus...",
                    "choice": [
                        "Manipulate (get what you want, trust -20, guilt)",
                        "Ask honestly (harder, but ethical, trust +5)",
                        "Subtle influence (middle ground, minor trust impact)"
                    ],
                    "if_manipulate": "Marcus eventually discovers. Relationship DESTROYED.",
                    "confrontation": "'You USED me?! I trusted you!'",
                    "consequence": "Marcus leaves permanently or becomes enemy"
                }
            ])
        
        elif focus['type'] == "Deception":
            hooks.extend([
                {
                    "trigger": "perfect_lie",
                    "achievement": "You craft the perfect deception",
                    "believed": "Everyone believes you completely",
                    "web_of_lies": "One lie requires more lies",
                    "burden": "Must remember all your deceptions",
                    "risk": "If truth discovered, all trust lost"
                },
                {
                    "trigger": "lie_to_marcus",
                    "immediate": "He believes you",
                    "guilt": "You lied to someone who trusts you",
                    "if_discovered": "Trust shattered, relationship destroyed",
                    "marcus": "'You LIED?! How can I trust anything you say?!'",
                    "redemption": "Difficult to rebuild trust after deception"
                }
            ])
        
        elif focus['type'] == "Charisma":
            hooks.extend([
                {
                    "trigger": "charisma_high",
                    "fame": "You're magnetic. People drawn to you.",
                    "followers": "NPCs want to join your cause",
                    "cult_of_personality": "Dangerous level of influence",
                    "marcus": "'You could lead an army with that presence.'",
                    "questline": "Leadership path - build faction, command troops"
                },
                {
                    "trigger": "seduce_npc",
                    "option": "Your charisma could seduce anyone",
                    "ethics": "Using charm to get what you want",
                    "consequences": "Hearts broken, expectations created",
                    "reputation": "Known as heartbreaker or romantic"
                }
            ])
        
        # NPC Reactions
        npc_reactions = {
            "Marcus": self.generate_marcus_reactions(skill, focus),
            "Elena": self.generate_elena_reactions(skill, focus),
            "City_Politician": {
                "if_profiled": "'You read people well. I could use someone like you.'",
                "recruitment": "Political intrigue quests",
                "danger": "Politics is manipulation + deception"
            },
            "Honest_Merchant": {
                "if_manipulated": "'Wait... did you just trick me?!'",
                "trust_lost": "Reputation drops if caught manipulating"
            }
        }
        
        # Social Combat System
        social_combat = {
            "mechanics": [
                "Persuade: Logic + evidence (high INT)",
                "Intimidate: Threats + presence (high STR/reputation)",
                "Charm: Attraction + charisma (high CHA)",
                "Deceive: Lies + acting (high DEX/deception)",
                "Empathize: Understanding + connection (high WIS)"
            ],
            "targets": [
                "Guards (intimidate or bribe)",
                "Merchants (negotiate prices)",
                "Enemies (talk down, avoid combat)",
                "Allies (inspire, motivate)",
                "Crowds (rally, lead)"
            ],
            "consequences": "Social choices affect reputation, relationships, faction standing"
        }
        
        # Ethical Considerations
        ethics = {
            "manipulation_path": "Effective but isolating. Power through control.",
            "empathy_path": "Connecting genuinely. Power through understanding.",
            "balance_path": "Strategic influence with ethical boundaries.",
            "warning": "Manipulation discovered = trust destroyed permanently"
        }
        
        return {
            "description": desc,
            "story_hooks": hooks,
            "npc_reactions": npc_reactions,
            "social_combat": social_combat,
            "ethics": ethics,
            "philosophy": "Reading people is power. But HOW you use that power defines you."
        }
    
    def generate_marcus_reactions(self, skill, focus):
        """Marcus's reactions to social skills"""
        if focus['ethics'] == "QUESTIONABLE":
            return {
                "uncomfortable": "'That was... manipulative. Effective, but wrong.'",
                "warning": "'Be careful. That power corrupts.'",
                "if_used_on_him": "⚠️ RELATIONSHIP DESTROYED ⚠️"
            }
        elif focus['type'] == "Empathy":
            return {
                "appreciates": "'You actually UNDERSTAND people. That's rare.'",
                "opens_up": "Empathy makes Marcus trust you more",
                "healing": "Your empathy helps heal his PTSD"
            }
        else:
            return {
                "tactical": "'Good social skills. Useful.'"
            }
    
    def generate_elena_reactions(self, skill, focus):
        """Elena's scientific view of social skills"""
        return {
            "analysis": f"'{skill['name']} - psychological manipulation through {focus['type']}'",
            "ethical": "'Effective, but raises ethical questions.'",
            "fascinated": "'The psychology of influence. Fascinating field.'",
            "warning": "'Be cautious. Social manipulation has consequences.'"
        }
    
    def generate_targeting(self, skill, focus):
        """Social targeting"""
        return {
            "individual": {
                "effect": "Deep analysis, personal connection",
                "use": "One-on-one persuasion, profiling"
            },
            "group": {
                "effect": "Mass influence, rally crowd",
                "use": "Leadership, public speaking"
            },
            "relationship": {
                "effect": "Analyze/influence relationship dynamics",
                "use": "Matchmaking, conflict resolution, manipulation"
            }
        }
    
    def generate_fusions(self, skill, focus):
        """Combined social techniques"""
        fusions = [
            {
                "partner": "Truth Reading",
                "result": f"Perfect Analysis",
                "effect": "Read lies + profile psychology = total understanding",
                "narrative": "You see through ALL deception. Know them completely."
            },
            {
                "partner": "Mind Link",
                "result": f"Telepathic Empathy",
                "effect": "Empathy + telepathy = feel AND know thoughts",
                "narrative": "Ultimate understanding. Perfect connection. Or invasion?"
            }
        ]
        return fusions
    
    def enhance_evolution(self, skill, focus):
        """Social mastery paths"""
        return {
            "path_A_manipulator": {
                "name": f"Master {skill['name']}",
                "upgrade": "Manipulate anyone, anytime, perfectly",
                "requirement": "Manipulate 100 NPCs successfully",
                "story": "Master manipulator. But very alone.",
                "warning": "Power through control. Isolation is cost."
            },
            "path_B_empath": {
                "name": f"Compassionate {skill['name']}",
                "upgrade": "Perfect empathy, heal relationships",
                "requirement": "Help 50 NPCs through empathy",
                "story": "Master of connection. Hearts open to you."
            },
            "path_C_leader": {
                "name": f"Leader's {skill['name']}",
                "upgrade": "Inspire armies, command respect",
                "requirement": "Lead faction to victory",
                "story": "Natural leader. People follow willingly."
            }
        }
    
    def generate_unlock(self, skill):
        """Social skills unlock through interaction"""
        tier = skill['tier']
        
        if tier == 0:
            return {"method": "Natural", "context": "Social interaction awakens ability"}
        elif tier == 1:
            return {"method": "Practice", "requirement": "100 conversations"}
        elif tier == 2:
            return {"method": "Study", "source": "Learn from politician/psychologist"}
        else:
            return {"method": "Mastery", "requirement": "Master 10 social skills"}

# RUN TRANSFORMATION
transformer = CharacterAnalysisTransformer()
transformer.transform_all(all_analysis)

# Save
output = {
    "meta": {
        "version": "2.0_COMPLETE",
        "total_skills": len(transformer.transformed),
        "engine": "Character Analysis",
        "transformation_date": "2025-11-18",
        "status": "Week 3 - All 100 Character Analysis Skills Transformed",
        "narrative_combat_hybrid": True,
        "depth_level": "100% - Profiling + Social Engineering + Empathy + Manipulation",
        "gameplay": "Social combat, persuasion trees, relationship dynamics, ethical choices",
        "warning": "Manipulation is powerful but corrupts relationships. Choose wisely."
    },
    "skills": transformer.transformed
}

output_path = 'e:/game1/World_Bible_folder/CHARACTER_ANALYSIS_ENGINE_COMPLETE_v2.json'
with open(output_path, 'w', encoding='utf-8') as f:
    json.dump(output, f, indent=2, ensure_ascii=False)

print()
print("="*60)
print("✓ CHARACTER ANALYSIS ENGINE TRANSFORMATION COMPLETE")
print("="*60)
print(f"Total skills: {len(transformer.transformed)}")
print(f"Saved to: {output_path}")
print()
print("All Character Analysis skills now have:")
print("  ✓ Profiling mechanics (read anyone)")
print("  ✓ Empathy system (feel their pain)")
print("  ✓ Manipulation options (ethical dilemmas)")
print("  ✓ Deception consequences (trust destroyed if caught)")
print("  ✓ Charisma/leadership paths")
print("  ✓ Social combat (persuade/intimidate/charm)")
print("  ✓ Relationship dynamics")
print("  ✓ Marcus manipulation = DESTROYED relationship")
print("  ✓ Empathy path vs manipulation path")
print("  ✓ Political intrigue quests")
print("="*60)
print()
print("🎭 Social power is INFLUENCE + UNDERSTANDING + CHOICE")
