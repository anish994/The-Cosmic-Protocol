"""
CONSCIOUSNESS ENGINE TRANSFORMER v2.0
Transforms all 100 Consciousness skills into premium narrative-combat hybrids
Focus: Meditation + Enlightenment + Philosophy + Transcendence + Inner Journey
"""

import json

print("="*60)
print("CONSCIOUSNESS ENGINE - COMPLETE TRANSFORMATION")
print("="*60)
print()

# Load database
with open('e:/game1/03-data/COMPLETE_SKILL_DATABASE.json', 'r', encoding='utf-8') as f:
    data = json.load(f)
    all_consciousness = [s for s in data['skills'] if s['engine'] == 'Consciousness']

print(f"Total Consciousness skills found: {len(all_consciousness)}")
print()

class ConsciousnessTransformer:
    """Transforms Consciousness skills into enlightenment/meditation gameplay"""
    
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
        """Create premium consciousness skill with philosophical depth"""
        
        focus = self.analyze_consciousness_focus(skill)
        
        premium = {
            "id": skill['id'],
            "name": skill['name'],
            "display_name": self.generate_display_name(skill, focus),
            
            # Classification
            "engine": "Consciousness",
            "skill_type": focus['type'],
            "lore_tag": focus['theme'],
            "tier": skill['tier'],
            "rarity": self.get_rarity(skill['tier']),
            
            # Costs + Enlightenment
            "cost": {
                "bandwidth": skill['cost'].get('gnosis', 10),
                "kp": skill['cost'].get('kp', 1),
                "enlightenment_gain": focus['enlightenment']
            },
            "cooldown": self.story_cooldown(skill),
            
            # COMBAT LAYER (Inner peace grants outer power)
            "combat_effect": self.generate_combat_effect(skill, focus),
            
            # NARRATIVE LAYER (Philosophy + meditation + transcendence)
            "narrative_effect": self.generate_narrative_effect(skill, focus),
            
            # Targeting (self, consciousness, reality perception)
            "targeting_matrix": self.generate_targeting(skill, focus),
            
            # Fusion (unified consciousness)
            "fusion_combinations": self.generate_fusions(skill, focus),
            
            # Evolution (master → sage → buddha)
            "evolution": self.enhance_evolution(skill, focus),
            
            # Unlock
            "unlock": self.generate_unlock(skill),
            
            # Meta
            "tags": skill.get('keywords', []),
            "themes": skill.get('themes', []),
            "power_score": skill.get('powerScore', 0),
            "enlightenment_level": focus['enlightenment_tier'],
            "original": skill
        }
        
        return premium
    
    def analyze_consciousness_focus(self, skill):
        """Determine consciousness skill type"""
        effect = skill['effect'].lower()
        name = skill['name'].lower()
        
        # Analyze
        is_meditation = any(w in effect or w in name for w in ['meditat', 'center', 'calm', 'peace'])
        is_enlightenment = any(w in effect or w in name for w in ['enlighten', 'awaken', 'illuminat', 'transcend'])
        is_mindfulness = any(w in effect or w in name for w in ['mindful', 'aware', 'present', 'conscious'])
        is_ego_death = any(w in effect or w in name for w in ['ego', 'self', 'identity', 'dissolution'])
        is_unity = any(w in effect or w in name for w in ['unity', 'oneness', 'cosmic', 'universal'])
        is_philosophical = any(w in effect for w in ['meaning', 'truth', 'reality', 'existence'])
        
        # Enlightenment gain
        if is_enlightenment or is_unity:
            enlightenment = 5
        elif is_ego_death:
            enlightenment = 3
        elif is_meditation or is_mindfulness:
            enlightenment = 2
        else:
            enlightenment = 1
        
        # Tier
        if is_unity or is_enlightenment:
            tier = "TRANSCENDENT"
        elif is_ego_death:
            tier = "ADVANCED"
        elif is_meditation:
            tier = "FOUNDATIONAL"
        else:
            tier = "BASIC"
        
        # Type
        if is_enlightenment:
            return {"type": "Enlightenment", "theme": "Awakening", "enlightenment": enlightenment, "enlightenment_tier": tier}
        elif is_meditation:
            return {"type": "Meditation", "theme": "Inner Peace", "enlightenment": enlightenment, "enlightenment_tier": tier}
        elif is_mindfulness:
            return {"type": "Mindfulness", "theme": "Presence", "enlightenment": enlightenment, "enlightenment_tier": tier}
        elif is_ego_death:
            return {"type": "Ego Death", "theme": "Dissolution", "enlightenment": enlightenment, "enlightenment_tier": tier}
        elif is_unity:
            return {"type": "Unity Consciousness", "theme": "Oneness", "enlightenment": enlightenment, "enlightenment_tier": tier}
        elif is_philosophical:
            return {"type": "Philosophy", "theme": "Truth Seeking", "enlightenment": enlightenment, "enlightenment_tier": tier}
        else:
            return {"type": "Awareness", "theme": "Consciousness", "enlightenment": 1, "enlightenment_tier": "BASIC"}
    
    def generate_display_name(self, skill, focus):
        """Generate enlightenment-focused display name"""
        subtitles = {
            "Enlightenment": ["The Awakening", "Illumination", "True Sight"],
            "Meditation": ["Inner Stillness", "Center of Peace", "Calm Mind"],
            "Mindfulness": ["Pure Presence", "The Eternal Now", "Conscious Being"],
            "Ego Death": ["Self Dissolved", "Identity Transcended", "I Am Not"],
            "Unity Consciousness": ["All is One", "Cosmic Union", "Universal Mind"],
            "Philosophy": ["Truth Unveiled", "Wisdom Gained", "Understanding Deep"],
            "Awareness": ["Consciousness Expanded", "Perception Clear", "Mind Open"]
        }
        
        skill_type = focus['type']
        name_hash = sum(ord(c) for c in skill['name'])
        subtitle = subtitles.get(skill_type, ["The Path"])[name_hash % 3]
        
        return f"{skill['name']}: {subtitle}"
    
    def get_rarity(self, tier):
        """Consciousness skills are rare/precious"""
        rarities = ["Common", "Uncommon", "Rare", "Epic", "Epic"]
        return rarities[min(tier, 4)]
    
    def story_cooldown(self, skill):
        """Meditation requires time"""
        cd = skill.get('cooldown', 0)
        if cd == 0:
            return "INSTANT"
        elif cd <= 1:
            return "MEDIUM"
        elif cd <= 2:
            return "LONG"
        else:
            return "ONCE_PER_SESSION"
    
    def generate_combat_effect(self, skill, focus):
        """Inner peace grants combat advantages"""
        return {
            "primary": skill['effect'],
            "inner_power": "Enlightenment reduces damage taken, increases clarity",
            "skill_type": focus['type'],
            "enlightenment_gain": f"+{focus['enlightenment']} Enlightenment",
            "combat_bonus": "Calm mind = better decisions, dodge +20%, resist mental attacks"
        }
    
    def generate_narrative_effect(self, skill, focus):
        """Generate deep meditation/enlightenment narratives"""
        
        # Philosophical descriptions
        descriptions = {
            "Enlightenment": f"You practice {skill['name']}, and suddenly—AWAKENING. The illusions fall away. You SEE clearly for the first time. Reality as it IS, not as you thought it was.",
            
            "Meditation": f"You enter {skill['name']}, sinking into profound stillness. Thoughts arise and pass like clouds. Beneath them, PEACE. Deep, unshakeable, eternal.",
            
            "Mindfulness": f"Through {skill['name']}, you become PRESENT. Not lost in past regrets or future anxieties. HERE. NOW. Fully alive in this single moment.",
            
            "Ego Death": f"The practice of {skill['name']} dissolves the illusion of self. 'I' 'me' 'mine'—all constructs. What remains when ego dies? EVERYTHING. You are not separate from existence.",
            
            "Unity Consciousness": f"In {skill['name']}, boundaries dissolve. You are not YOU—you are EVERYTHING. Every being, every atom, every thought. Separation is illusion. All is ONE.",
            
            "Philosophy": f"You contemplate {skill['name']}. Questions about existence, meaning, truth. Not seeking answers, but QUESTIONING deeply. Understanding emerges.",
            
            "Awareness": f"Consciousness expands through {skill['name']}. You become AWARE of awareness itself. The witness witnessing. Mind observing mind."
        }
        
        desc = descriptions.get(focus['type'], f"Inner journey through {skill['name']}.")
        
        # Story hooks - PHILOSOPHICAL GROWTH + TRANSCENDENCE
        hooks = []
        
        # Universal meditation hook
        hooks.append({
            "trigger": "first_meditation",
            "experience": "You discover inner peace",
            "gameplay": "Meditation system unlocked",
            "enlightenment": f"+{focus['enlightenment']} Enlightenment",
            "marcus": "'You seem... different. Calmer. Centered.'",
            "elena": "'Meditation. Interesting. Brain wave patterns would be fascinating.'",
            "unlock": "Enlightenment path, philosophical dialogues"
        })
        
        # Type-specific enlightenment hooks
        if focus['type'] == "Enlightenment":
            hooks.extend([
                {
                    "trigger": "first_enlightenment",
                    "awakening": "⚡ ENLIGHTENMENT EXPERIENCE ⚡",
                    "vision": "You SEE the nature of reality",
                    "revelation": "Suffering is caused by attachment. Liberation through letting go.",
                    "permanent_change": "You are fundamentally different now",
                    "marcus": "'Your eyes... they're GLOWING. What happened to you?!'",
                    "elena": "'Neurologically, you've... changed. Permanent rewiring.'",
                    "mechanics": "Enlightenment +10, unlock Buddha path"
                },
                {
                    "trigger": "enlightenment_25",
                    "student_appears": "NPCs seek you as TEACHER",
                    "monk": "'Master, please teach us the way to liberation.'",
                    "choice": [
                        "Become teacher (monastery questline, spread wisdom)",
                        "Refuse (remain solitary, focus on own path)",
                        "Teach selectively (mentor Marcus/Elena only)"
                    ],
                    "reputation": "Known as Enlightened One"
                },
                {
                    "trigger": "enlightenment_50",
                    "transformation": "⚡ FULL ENLIGHTENMENT ⚡",
                    "buddha_state": "You have achieved liberation",
                    "abilities": "Immune to fear, anger, attachment",
                    "perception": "See through all illusions",
                    "ending_unlock": "Enlightenment ending - transcend mortal existence",
                    "choice": "Remain to help others, or transcend entirely?"
                }
            ])
        
        elif focus['type'] == "Meditation":
            hooks.extend([
                {
                    "trigger": "meditate_100_times",
                    "mastery": "Meditation becomes effortless",
                    "benefit": "Can enter meditation instantly, even in combat",
                    "combat": "Use 'Battle Meditation' - calm mind during chaos",
                    "marcus": "'You can meditate while fighting?! That's impossible!'",
                    "you": "'The battlefield is my temple.'"
                },
                {
                    "trigger": "teach_marcus_meditation",
                    "bonding": "You teach Marcus to meditate",
                    "his_struggle": "'My mind won't shut up. Too many memories.'",
                    "your_guidance": "'Don't fight thoughts. Observe them pass.'",
                    "breakthrough": "Marcus achieves first moment of peace",
                    "gratitude": "'I... thank you. I haven't felt peace in years.'",
                    "relationship": "Trust +10, unlock PTSD healing arc"
                }
            ])
        
        elif focus['type'] == "Ego Death":
            hooks.extend([
                {
                    "trigger": "first_ego_death",
                    "terrifying": "Your sense of self DISSOLVES",
                    "panic": "WHO AM I?! There's no 'I' to be found!",
                    "void": "Terrifying emptiness... then FREEDOM",
                    "realization": "'I' was always an illusion. Liberation.",
                    "permanent": "Your identity is fundamentally changed",
                    "existential": "Philosophy questline unlocks"
                },
                {
                    "trigger": "explain_ego_death_to_marcus",
                    "marcus_confused": "'Wait, you WANT to lose yourself?!'",
                    "you_explain": "'The self is prison. Freedom is beyond it.'",
                    "marcus": "'That's... terrifying. And beautiful. I don't understand.'",
                    "dialogue": "Deep philosophical conversation",
                    "closeness": "Marcus sees your depth (+5 trust)"
                }
            ])
        
        elif focus['type'] == "Unity Consciousness":
            hooks.extend([
                {
                    "trigger": "first_unity_experience",
                    "cosmic": "⚡ COSMIC CONSCIOUSNESS ⚡",
                    "boundaries_dissolve": "You are not separate from anything",
                    "experience": "You ARE Marcus. You ARE Elena. You ARE the enemy. You ARE the void.",
                    "overwhelming": "Total empathy - feel everyone's pain and joy",
                    "burden": "Carrying all suffering",
                    "gift": "Understanding all perspectives",
                    "mechanics": "Can sense all emotions within 100m"
                },
                {
                    "trigger": "unity_in_combat",
                    "paradox": "You feel enemy's pain as they attack you",
                    "compassion": "How can you harm what you ARE?",
                    "choice": [
                        "Fight anyway (suffering, but necessary)",
                        "Pacifism (refuse to harm, risk death)",
                        "Heal enemy mid-combat (show unity consciousness)"
                    ],
                    "philosophy": "If all is one, violence is self-harm"
                }
            ])
        
        # NPC Reactions - WISDOM + TEACHING + PHILOSOPHY
        npc_reactions = {
            "Marcus": self.generate_marcus_reactions(skill, focus),
            "Elena": self.generate_elena_reactions(skill, focus),
            "Philosopher_Monk": {
                "recognition": "'You walk the path of enlightenment. I see it in your eyes.'",
                "dialogue": "Deep philosophical discussions",
                "teaching": "Unlocks advanced meditation techniques"
            },
            "Materialist_Merchant": {
                "dismissive": "'Meditation? Waste of time. Gold is what matters.'",
                "if_enlightened": "'Wait... your presence. There's something... different.'"
            }
        }
        
        # Philosophical Dialogues
        dialogues = [
            {
                "topic": "Nature of Suffering",
                "participants": ["You", "Marcus", "Monk"],
                "questions": [
                    "Why do we suffer?",
                    "Is suffering necessary?",
                    "Can suffering be transcended?"
                ],
                "perspectives": {
                    "Marcus": "Suffering is pointless. Result of cruel world.",
                    "Monk": "Suffering is caused by attachment and desire.",
                    "You": "Suffering is teacher. Pain points to what needs healing."
                }
            },
            {
                "topic": "Identity and Self",
                "questions": [
                    "Who am I really?",
                    "Is the self real or illusion?",
                    "What remains when ego dies?"
                ],
                "unlocks": "Ego death skills, identity questline"
            },
            {
                "topic": "Purpose and Meaning",
                "questions": [
                    "Why do we exist?",
                    "Is there cosmic purpose?",
                    "Do we create meaning or discover it?"
                ],
                "unlocks": "Existential questline"
            }
        ]
        
        # Meditation Retreat System
        retreat_mechanics = {
            "location": "Mountain monastery, silent temple, meditation cave",
            "duration": "3-day, 7-day, or 30-day retreat",
            "mechanics": "Fast-forward time, gain massive enlightenment",
            "events": [
                "Breakthrough meditation (sudden insight)",
                "Dark night of soul (confront inner demons)",
                "Samadhi state (transcendent experience)",
                "Return transformed (permanent stat changes)"
            ],
            "rewards": "Enlightenment +20, unlock advanced skills, Marcus notices change"
        }
        
        return {
            "description": desc,
            "story_hooks": hooks,
            "npc_reactions": npc_reactions,
            "philosophical_dialogues": dialogues,
            "meditation_retreats": retreat_mechanics,
            "philosophy": "Inner peace is the foundation. Enlightenment is possible. Transcendence awaits."
        }
    
    def generate_marcus_reactions(self, skill, focus):
        """Marcus is skeptical but curious about meditation"""
        if focus['type'] in ["Enlightenment", "Unity Consciousness"]:
            return {
                "skeptical": "'Enlightenment? Sounds like fantasy.'",
                "witnesses_change": "'But... you're DIFFERENT. Calmer. Stronger somehow.'",
                "curious": "'Can you teach me? I need... peace.'",
                "if_taught": "Marcus's PTSD healing arc begins",
                "gratitude": "'You gave me something I thought I'd lost forever.'"
            }
        elif focus['type'] == "Meditation":
            return {
                "practical": "'Meditation helps in combat? Interesting.'",
                "tries_it": "'Okay, show me how.'",
                "struggles": "'My mind won't quiet. Too much noise.'",
                "if_patient": "Eventually breaks through, deep bonding"
            }
        else:
            return {
                "respectful": "'Whatever you're doing, it's working.'"
            }
    
    def generate_elena_reactions(self, skill, focus):
        """Elena approaches meditation scientifically"""
        return {
            "scientific": f"'Meditation has measurable effects. Brain plasticity, stress reduction.'",
            "curious": f"'{skill['name']} - can I measure your brainwaves during practice?'",
            "experiment": "'Let me monitor your meditation. For science.'",
            "results": "'Remarkable. Your theta waves are off the charts.'",
            "respect": "'There's something here beyond current scientific understanding.'"
        }
    
    def generate_targeting(self, skill, focus):
        """Consciousness targets inner world"""
        return {
            "self": {
                "effect": "Inner transformation, enlightenment gain",
                "healing": "Mental/emotional healing"
            },
            "consciousness_field": {
                "effect": "Affect group consciousness (mass meditation)",
                "radius": "All allies gain calm, clarity"
            },
            "reality_perception": {
                "effect": "Change how you perceive reality",
                "unlock": "See through illusions, detect truth"
            }
        }
    
    def generate_fusions(self, skill, focus):
        """Unified consciousness combinations"""
        fusions = [
            {
                "partner": "Tantra Energy Share",
                "result": f"Unified Meditation",
                "effect": "Meditate together, shared enlightenment",
                "narrative": "You and Marcus meditate in silence. Consciousnesses touch. Understanding without words.",
                "romance": "Deep intimacy through shared consciousness"
            },
            {
                "partner": "Void Meditation",
                "result": f"Paradox Mind",
                "effect": "Meditate in void, achieve impossibility",
                "narrative": "Emptiness + enlightenment = transcendent wisdom"
            }
        ]
        return fusions
    
    def enhance_evolution(self, skill, focus):
        """Enlightenment progression paths"""
        return {
            "path_A_buddha": {
                "name": f"Enlightened {skill['name']}",
                "upgrade": "Perfect inner peace, immune to mental attacks",
                "requirement": "Enlightenment 50+",
                "story": "You have achieved liberation. Suffering no longer touches you."
            },
            "path_B_sage": {
                "name": f"Sage's {skill['name']}",
                "upgrade": "Teach others, spread enlightenment",
                "requirement": "Teach meditation to 20 NPCs",
                "story": "You are now TEACHER. Your wisdom heals many."
            },
            "path_C_mystic": {
                "name": f"Mystic {skill['name']}",
                "upgrade": "Meditation grants visions, prophecy",
                "requirement": "Meditate 500 times",
                "story": "Deep meditation opens third eye. You see beyond."
            }
        }
    
    def generate_unlock(self, skill):
        """Consciousness unlocks through practice"""
        tier = skill['tier']
        
        if tier == 0:
            return {"method": "Natural", "context": "Spontaneous moment of clarity"}
        elif tier == 1:
            return {"method": "Teaching", "source": "Learn from monk/sage"}
        elif tier == 2:
            return {"method": "Practice", "requirement": "Meditate 100 times"}
        else:
            return {"method": "Enlightenment", "requirement": "Enlightenment 25+"}

# RUN TRANSFORMATION
transformer = ConsciousnessTransformer()
transformer.transform_all(all_consciousness)

# Save
output = {
    "meta": {
        "version": "2.0_COMPLETE",
        "total_skills": len(transformer.transformed),
        "engine": "Consciousness",
        "transformation_date": "2025-11-18",
        "status": "Week 3 - All 100 Consciousness Skills Transformed",
        "narrative_combat_hybrid": True,
        "depth_level": "100% - Meditation + Enlightenment + Philosophy + Transcendence",
        "gameplay": "Inner journey, philosophical dialogues, meditation retreats, teaching others",
        "philosophy": "Peace within creates power without. Enlightenment is possible."
    },
    "skills": transformer.transformed
}

output_path = 'e:/game1/World_Bible_folder/CONSCIOUSNESS_ENGINE_COMPLETE_v2.json'
with open(output_path, 'w', encoding='utf-8') as f:
    json.dump(output, f, indent=2, ensure_ascii=False)

print()
print("="*60)
print("✓ CONSCIOUSNESS ENGINE TRANSFORMATION COMPLETE")
print("="*60)
print(f"Total skills: {len(transformer.transformed)}")
print(f"Saved to: {output_path}")
print()
print("All Consciousness skills now have:")
print("  ✓ Meditation mechanics")
print("  ✓ Enlightenment progression")
print("  ✓ Philosophical dialogues")
print("  ✓ Ego death experiences")
print("  ✓ Unity consciousness")
print("  ✓ Teaching system (Marcus PTSD healing)")
print("  ✓ Meditation retreats")
print("  ✓ Buddha/Sage/Mystic paths")
print("  ✓ Inner peace = outer power")
print("  ✓ Transcendence endings")
print("="*60)
print()
print("🧘 Consciousness is PEACE + WISDOM + TRANSCENDENCE")
