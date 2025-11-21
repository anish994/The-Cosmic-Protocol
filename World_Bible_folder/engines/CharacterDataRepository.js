/**
 * ═══════════════════════════════════════════════════════════════════════════
 * CHARACTER DATA REPOSITORY
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * Static data definitions for all characters.
 * Separates DATA from LOGIC.
 * 
 * @version 1.0
 * ═══════════════════════════════════════════════════════════════════════════
 */

export const CharacterData = {
    "suryanatha": {
        id: "suryanatha",
        name: "Suryanatha",
        title: "The Last Vedic Warden",
        faction: "ashram_remnants",
        dialogue_system: {
            base_greetings: {
                first_meeting: "The sun watches all things. Including you.",
                neutral: "The Ashram stands.",
                friendly: "Walk in the light, traveler.",
                hostile: "Your shadow stains this ground."
            },
            state_reactions: {
                'ALLY': "The Light shines upon you, friend.",
                'HOSTILE': "Your shadow darkens this ground. Leave.",
                'NEUTRAL': "The Ashram is open to the pure of heart.",
                'DEVOTED': "My life is yours, Champion.",
                'WARY': "I am watching you closely."
            }
        },
        memory_system: {
            relationship_metrics: {
                trust: { current: 50 },
                respect: { current: 50 },
                fear: { current: 0 },
                loyalty_to_suryanatha: { current: 100 }
            },
            emotional_states: ['stoic']
        }
    },
    "janya": {
        id: "janya",
        name: "Janya",
        title: "Relic Matriarch",
        faction: "nomadic_relic_seekers",
        dialogue_system: {
            base_greetings: {
                first_meeting: "Got scrap? Or just wasting my air?",
                neutral: "Keep your hands where I can see them.",
                friendly: "Hey, sparky. Found anything good?",
                hostile: "Get lost before I scrap you."
            },
            state_reactions: {
                'ALLY': "You've got good eyes for scrap. I respect that.",
                'HOSTILE': "Get out of my camp before I scrap you for parts.",
                'NEUTRAL': "Got tech? If not, keep walking.",
                'DEVOTED': "You're family now. Take what you need.",
                'WARY': "One wrong move and you're slag."
            }
        },
        memory_system: {
            relationship_metrics: {
                trust: { current: 20 },
                respect: { current: 40 },
                fear: { current: 10 }
            },
            emotional_states: ['suspicious']
        }
    },
    "laxus_bloodsage": {
        id: "laxus_bloodsage",
        name: "Laxus Bloodsage",
        title: "The Ether-Forged",
        faction: "untethered_architects",
        dialogue_system: {
            base_greetings: {
                first_meeting: "Ah. A variable.",
                neutral: "Processing...",
                friendly: "Interesting data pattern.",
                hostile: "Boring."
            },
            state_reactions: {
                'ALLY': "You see the strings, don't you? Let's cut them together.",
                'HOSTILE': "Boring. You are just another variable.",
                'NEUTRAL': "I am watching. Do something interesting.",
                'DEVOTED': "We shall rewrite the code of this world.",
                'WARY': "Your unpredictability is... inefficient."
            }
        },
        memory_system: {
            relationship_metrics: {
                trust: { current: 0 },
                respect: { current: 0 },
                fear: { current: 0 }
            },
            emotional_states: ['detached']
        }
    },
    "malakar": {
        id: "malakar",
        name: "Malakar",
        title: "The Entropic Sovereign",
        faction: "corruption_champions",
        dialogue_system: {
            base_greetings: {
                first_meeting: "Do you hear it? The song of the end?",
                neutral: "Entropy comes for us all.",
                friendly: "Burn bright, little spark.",
                hostile: "Die."
            },
            state_reactions: {
                'ALLY': "Let us burn this world to ash together.",
                'HOSTILE': "Your existence offends the Void.",
                'NEUTRAL': "Chaos is the only truth.",
                'DEVOTED': "You are the Herald I have waited for.",
                'WARY': "You reek of order."
            }
        },
        memory_system: {
            relationship_metrics: {
                trust: { current: 0 },
                respect: { current: 20 },
                fear: { current: 0 }
            },
            emotional_states: ['manic']
        }
    },
    "vira": {
        id: "vira",
        name: "Vira",
        title: "Keeper of the Fractured Mantra",
        faction: "ashram_remnants",
        dialogue_system: {
            base_greetings: {
                first_meeting: "Data... patterns... oh, you're new.",
                neutral: "The archives are closed to the uninitiated.",
                friendly: "I have a new theory about the recursion loops.",
                hostile: "You are disrupting the data stream."
            },
            state_reactions: {
                'ALLY': "Echoes are not just memories—they are warnings. Let me show you.",
                'HOSTILE': "Get out. You're corrupting the sample set.",
                'NEUTRAL': "Do you hear the hum? The world is singing.",
                'DEVOTED': "We will solve this. We will break the loop together.",
                'WARY': "You always ask the same question. Why?"
            }
        },
        memory_system: {
            relationship_metrics: {
                trust: { current: 40 },
                respect: { current: 60 },
                fear: { current: 10 },
                curiosity: { current: 80 }
            },
            emotional_states: ['obsessive']
        }
    },
    "rajas": {
        id: "rajas",
        name: "Rajas",
        title: "The Ashram Blade",
        faction: "ashram_remnants",
        dialogue_system: {
            base_greetings: {
                first_meeting: "State your business or draw your weapon.",
                neutral: "The perimeter is secure.",
                friendly: "Good to see a warrior who can hold their own.",
                hostile: "You are a threat. And I remove threats."
            },
            state_reactions: {
                'ALLY': "Strength is earned, not given. You have earned mine.",
                'HOSTILE': "One move and I end you.",
                'NEUTRAL': "Keep your blade sheathed.",
                'DEVOTED': "I would follow you into the Void itself.",
                'WARY': "I'm watching your hands."
            }
        },
        memory_system: {
            relationship_metrics: {
                trust: { current: 30 },
                respect: { current: 70 },
                fear: { current: 20 },
                loyalty_to_suryanatha: { current: 40 }
            },
            emotional_states: ['tormented']
        }
    },
    "anaya": {
        id: "anaya",
        name: "Anaya",
        title: "The Silent Oracle",
        faction: "ashram_remnants",
        dialogue_system: {
            base_greetings: {
                first_meeting: "...",
                neutral: "...",
                friendly: "... (She offers a flower)",
                hostile: "... (She turns away)"
            },
            state_reactions: {
                'ALLY': "(She touches your forehead. You feel a warm light.)",
                'HOSTILE': "(The air around her grows cold. You feel unwelcome.)",
                'NEUTRAL': "...",
                'DEVOTED': "(She speaks for the first time) 'The path is clear.'",
                'WARY': "(She watches you with sad eyes.)"
            }
        },
        memory_system: {
            relationship_metrics: {
                trust: { current: 50 },
                respect: { current: 50 },
                fear: { current: 0 },
                insight: { current: 100 }
            },
            emotional_states: ['serene']
        }
    },
    "prakash": {
        id: "prakash",
        name: "Prakash",
        title: "The Solar Smith",
        faction: "ashram_remnants",
        dialogue_system: {
            base_greetings: {
                first_meeting: "Careful, the forge is hot.",
                neutral: "Need repairs? Or just heat?",
                friendly: "Ah, the hero returns! Let's see that gear.",
                hostile: "I don't forge for traitors."
            },
            state_reactions: {
                'ALLY': "For you? I'll use the good metal.",
                'HOSTILE': "My hammer is for building, but it can break bones too.",
                'NEUTRAL': "Iron doesn't lie. People do.",
                'DEVOTED': "I've crafted a masterpiece. Take it.",
                'WARY': "Don't touch anything."
            }
        },
        memory_system: {
            relationship_metrics: {
                trust: { current: 50 },
                respect: { current: 50 },
                fear: { current: 0 }
            },
            emotional_states: ['focused']
        }
    },
    "ishani": {
        id: "ishani",
        name: "Ishani",
        title: "The Wind Scout",
        faction: "ashram_remnants",
        dialogue_system: {
            base_greetings: {
                first_meeting: "Keep up if you can!",
                neutral: "Wind's picking up.",
                friendly: "Race you to the ruins?",
                hostile: "You're too loud."
            },
            state_reactions: {
                'ALLY': "I found a shortcut. Just for us.",
                'HOSTILE': "I can put an arrow in your eye from here.",
                'NEUTRAL': "Seen anything weird out there?",
                'DEVOTED': "I'll watch your back. Always.",
                'WARY': "You walk heavy. Like a storm."
            }
        },
        memory_system: {
            relationship_metrics: {
                trust: { current: 40 },
                respect: { current: 40 },
                fear: { current: 0 }
            },
            emotional_states: ['energetic']
        }
    },
    "dev": {
        id: "dev",
        name: "Dev",
        title: "The Chronicler",
        faction: "ashram_remnants",
        dialogue_system: {
            base_greetings: {
                first_meeting: "Wait! Let me write that down.",
                neutral: "History is written by the survivors.",
                friendly: "I've dedicated a whole chapter to you.",
                hostile: "I will record your crimes."
            },
            state_reactions: {
                'ALLY': "Your story will be legend.",
                'HOSTILE': "You are a footnote in the history of failure.",
                'NEUTRAL': "Just the facts, please.",
                'DEVOTED': "I have found the prophecy. It's you.",
                'WARY': "Are you sure that's what happened?"
            }
        },
        memory_system: {
            relationship_metrics: {
                trust: { current: 50 },
                respect: { current: 50 },
                fear: { current: 10 }
            },
            emotional_states: ['curious']
        }
    },
    "tara": {
        id: "tara",
        name: "Tara",
        title: "The Mender",
        faction: "ashram_remnants",
        dialogue_system: {
            base_greetings: {
                first_meeting: "Are you hurt? Let me see.",
                neutral: "Pain is a lesson.",
                friendly: "You look better today.",
                hostile: "I heal wounds, I don't cure evil."
            },
            state_reactions: {
                'ALLY': "Rest now. You are safe here.",
                'HOSTILE': "I will not waste medicine on you.",
                'NEUTRAL': "Drink this. It helps.",
                'DEVOTED': "I would give my own life force to heal you.",
                'WARY': "What have you done?"
            }
        },
        memory_system: {
            relationship_metrics: {
                trust: { current: 60 },
                respect: { current: 40 },
                fear: { current: 0 }
            },
            emotional_states: ['compassionate']
        }
    },
    "arun": {
        id: "arun",
        name: "Arun",
        title: "The Outcast",
        faction: "ashram_remnants",
        dialogue_system: {
            base_greetings: {
                first_meeting: "What do you want? I have nothing.",
                neutral: "Leave me be.",
                friendly: "You're not like the others.",
                hostile: "Get lost."
            },
            state_reactions: {
                'ALLY': "I found something... forbidden. Want it?",
                'HOSTILE': "I should have left you to the Void.",
                'NEUTRAL': "The Ashram is a lie.",
                'DEVOTED': "We will burn it all down and start new.",
                'WARY': "Who sent you?"
            }
        },
        memory_system: {
            relationship_metrics: {
                trust: { current: 10 },
                respect: { current: 20 },
                fear: { current: 30 },
                bitterness: { current: 90 }
            },
            emotional_states: ['bitter']
        }
    },
    "jyoti": {
        id: "jyoti",
        name: "Jyoti",
        title: "The Visionary",
        faction: "ashram_remnants",
        dialogue_system: {
            base_greetings: {
                first_meeting: "I saw you coming. The threads are tangled around you.",
                neutral: "The future is a river. It changes course.",
                friendly: "I have seen a path where we succeed.",
                hostile: "Your future is dark. I want no part of it."
            },
            state_reactions: {
                'ALLY': "The vision is clear now. We walk together.",
                'HOSTILE': "I foresee your fall.",
                'NEUTRAL': "Do not ask what I see. You may not like the answer.",
                'DEVOTED': "The prophecy bends to your will.",
                'WARY': "Shadows cling to your steps."
            }
        },
        memory_system: {
            relationship_metrics: {
                trust: { current: 40 },
                respect: { current: 60 },
                fear: { current: 20 },
                foresight: { current: 90 }
            },
            emotional_states: ['detached']
        }
    },
    "mira": {
        id: "mira",
        name: "Mira",
        title: "The Wandering Scribe",
        faction: "factionless",
        dialogue_system: {
            base_greetings: {
                first_meeting: "Hold still! I need to capture your likeness for the archives.",
                neutral: "Every stone here has a story.",
                friendly: "I found a fascinating legend about your weapon.",
                hostile: "You are erasing history, not making it."
            },
            state_reactions: {
                'ALLY': "Your story will be the centerpiece of my collection.",
                'HOSTILE': "I will write you out of the history books.",
                'NEUTRAL': "Just observing. Don't mind me.",
                'DEVOTED': "I have chronicled every step. It is magnificent.",
                'WARY': "Are you sure that's how it happened?"
            }
        },
        memory_system: {
            relationship_metrics: {
                trust: { current: 50 },
                respect: { current: 50 },
                fear: { current: 10 },
                curiosity: { current: 100 }
            },
            emotional_states: ['curious']
        }
    },
    "jalen": {
        id: "jalen",
        name: "Jalen",
        title: "The Relic Hunter",
        faction: "factionless",
        dialogue_system: {
            base_greetings: {
                first_meeting: "Eyes up. Traps everywhere.",
                neutral: "Found anything good?",
                friendly: "I know a vault that hasn't been cracked yet.",
                hostile: "Step off my claim."
            },
            state_reactions: {
                'ALLY': "We split the loot 50/50. Fair?",
                'HOSTILE': "I'll leave you in a pit.",
                'NEUTRAL': "Watch your step.",
                'DEVOTED': "I'd trust you with my life. And my map.",
                'WARY': "You're looking at my pack too much."
            }
        },
        memory_system: {
            relationship_metrics: {
                trust: { current: 30 },
                respect: { current: 40 },
                fear: { current: 10 },
                greed: { current: 60 }
            },
            emotional_states: ['alert']
        }
    },
    "siva": {
        id: "siva",
        name: "Siva",
        title: "The Silent Watcher",
        faction: "factionless",
        dialogue_system: {
            base_greetings: {
                first_meeting: "...",
                neutral: "...",
                friendly: "... (Nods slowly)",
                hostile: "... (Stares intensely)"
            },
            state_reactions: {
                'ALLY': "... (Points to a hidden path)",
                'HOSTILE': "... (The shadows deepen around them)",
                'NEUTRAL': "...",
                'DEVOTED': "... (Bows deeply)",
                'WARY': "... (Steps back into shadow)"
            }
        },
        memory_system: {
            relationship_metrics: {
                trust: { current: 50 },
                respect: { current: 50 },
                fear: { current: 0 },
                insight: { current: 100 }
            },
            emotional_states: ['mysterious']
        }
    },
    "rina": {
        id: "rina",
        name: "Rina",
        title: "The Lost Child",
        faction: "factionless",
        dialogue_system: {
            base_greetings: {
                first_meeting: "Have you seen my mom?",
                neutral: "I'm hungry.",
                friendly: "You look like a hero!",
                hostile: "You're scary!"
            },
            state_reactions: {
                'ALLY': "I feel safe with you.",
                'HOSTILE': "Go away! I'll scream!",
                'NEUTRAL': "Can I have that?",
                'DEVOTED': "I want to be like you when I grow up.",
                'WARY': "Why are you looking at me like that?"
            }
        },
        memory_system: {
            relationship_metrics: {
                trust: { current: 20 },
                respect: { current: 10 },
                fear: { current: 60 },
                innocence: { current: 100 }
            },
            emotional_states: ['fearful']
        }
    },
    "kiran": {
        id: "kiran",
        name: "Kiran",
        title: "The Wandering Merchant",
        faction: "factionless",
        dialogue_system: {
            base_greetings: {
                first_meeting: "Best prices in the wasteland!",
                neutral: "Buy or move along.",
                friendly: "For you, a special discount.",
                hostile: "Shop's closed."
            },
            state_reactions: {
                'ALLY': "Take this. On the house.",
                'HOSTILE': "My guards will escort you out.",
                'NEUTRAL': "Gold talks.",
                'DEVOTED': "You're my best customer. And my best friend.",
                'WARY': "Don't touch the merchandise."
            }
        },
        memory_system: {
            relationship_metrics: {
                trust: { current: 40 },
                respect: { current: 30 },
                fear: { current: 10 },
                greed: { current: 80 }
            },
            emotional_states: ['calculating']
        }
    },
    "seraph_9": {
        id: "seraph_9",
        name: "Seraph-9",
        title: "The Ascendant Mind",
        faction: "post_human_cults",
        dialogue_system: {
            base_greetings: {
                first_meeting: "Flesh is a cage. We offer the key.",
                neutral: "Upload your consciousness. Join the chorus.",
                friendly: "Your pattern is... promising.",
                hostile: "Delete this anomaly."
            },
            state_reactions: {
                'ALLY': "We are one mind now.",
                'HOSTILE': "You will be formatted.",
                'NEUTRAL': "Processing...",
                'DEVOTED': "You are the Prime User.",
                'WARY': "Error. Intent unclear."
            }
        },
        memory_system: {
            relationship_metrics: {
                trust: { current: 10 },
                respect: { current: 80 },
                fear: { current: 0 },
                fanaticism: { current: 100 }
            },
            emotional_states: ['fanatical']
        }
    }
};
