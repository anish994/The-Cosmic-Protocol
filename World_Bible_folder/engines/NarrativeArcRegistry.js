/**
 * ═══════════════════════════════════════════════════════════════════════════
 * NARRATIVE ARC REGISTRY
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * Defines specific, named narrative arcs that persist across loops.
 * Used by RecursionMemorySystem to generate specific dialogue instead of generic
 * "Trauma" or "Affection" responses.
 * 
 * @version 1.0
 * ═══════════════════════════════════════════════════════════════════════════
 */

export const NarrativeArcRegistry = {
    // --- ASHRAM REMNANTS ---
    'vira': {
        'BETRAYAL_DEATH': {
            priority: 100,
            condition: (memories) => memories.some(m => m.type === 'BETRAYAL' && m.intensity > 0.9),
            dialogue: "I had a dream you put a knife in my back. It felt... so real. I can still feel the cold steel.",
            effect: "TRUST_BROKEN_PERMANENTLY"
        },
        'SAVED_FROM_VOID': {
            priority: 80,
            condition: (memories) => memories.some(m => m.type === 'SAVED' && m.context.includes('Void')),
            dialogue: "The darkness... it didn't take me this time. I feel like I owe you a life I haven't lived yet.",
            effect: "DISCOUNT_MAX"
        }
    },
    'suryanatha': {
        'COUNCIL_SLAUGHTER': {
            priority: 100,
            condition: (memories) => memories.some(m => m.type === 'SLAUGHTER' && m.context.includes('Council')),
            dialogue: "You walk with the swagger of a butcher. Why does my neck itch when you look at me?",
            effect: "HOSTILE_ON_SIGHT"
        }
    },

    // --- CORRUPTION CHAMPIONS ---
    'malakar': {
        'RIVALRY_RESPECT': {
            priority: 90,
            condition: (memories) => memories.filter(m => m.type === 'DUEL_LOST').length > 2,
            dialogue: "Again? You have the eyes of a man who has died to me a thousand times. Come, let us dance again!",
            effect: "CHALLENGE_BONUS"
        },
        'TRUE_DEATH': {
            priority: 100,
            condition: (memories) => memories.some(m => m.type === 'DEATH' && m.intensity > 0.95),
            dialogue: "I remember... nothingness. You ended me. Truly ended me. How am I here?",
            effect: "FEAR_AURA"
        }
    },

    // --- FACTIONLESS ---
    'mira_scribe': {
        'LOOP_AWARENESS': {
            priority: 200, // Very high priority
            condition: (memories) => memories.length > 10, // If interacted with many times across loops
            dialogue: "Stop. I've written this entry before. Why do I keep writing your name in the margins of history?",
            effect: "LORE_UNLOCK_META"
        }
    },

    // --- UNTETHERED ARCHITECTS ---
    'laxus_bloodsage': {
        'META_COMMENTARY': {
            priority: 500,
            condition: (memories, loopCount) => loopCount > 3,
            dialogue: "Loop 4? Or is it 5? You're getting sloppy with the timeline, traveler. The seams are showing.",
            effect: "SECRET_SHOP_OPEN"
        }
    },

    // --- NEW NARRATIVE ARCS ---
    'jyoti': {
        'FALSE_PROPHECY': {
            priority: 90,
            condition: (memories) => memories.some(m => m.type === 'PROPHECY_FAILED'),
            dialogue: "I saw you die. Yet here you stand. My vision... was it a lie? Or did you break fate?",
            effect: "DOUBT_DEBUFF"
        },
        'SHARED_VISION': {
            priority: 80,
            condition: (memories) => memories.some(m => m.type === 'VISION_SHARED'),
            dialogue: "The images we saw together... they haunt me. But they also give me hope. We can change it.",
            effect: "INSIGHT_BONUS"
        }
    },
    'jalen': {
        'GREED_BETRAYAL': {
            priority: 100,
            condition: (memories) => memories.some(m => m.type === 'BETRAYAL' && m.context.includes('Loot')),
            dialogue: "You left me in that vault! For a handful of credits? I hope it was worth it.",
            effect: "PRICES_TRIPLE"
        },
        'PARTNER_IN_CRIME': {
            priority: 70,
            condition: (memories) => memories.filter(m => m.type === 'HEIST_SUCCESS').length > 2,
            dialogue: "Best partner I ever had. I've got a lead on a big score. Interested?",
            effect: "SECRET_MAP_UNLOCK"
        }
    },
    'siva': {
        'VOID_STARE': {
            priority: 90,
            condition: (memories) => memories.some(m => m.type === 'VOID_TOUCHED'),
            dialogue: "... (They look at you, and you feel the void staring back. They know what you are.)",
            effect: "VOID_RESISTANCE_UP"
        },
        'SILENT_NOD': {
            priority: 50,
            condition: (memories) => memories.some(m => m.type === 'HELPED'),
            dialogue: "... (A slight nod. A path opens in the shadows nearby.)",
            effect: "SHORTCUT_REVEAL"
        }
    },
    'rina': {
        'ABANDONED': {
            priority: 100,
            condition: (memories) => memories.some(m => m.type === 'ABANDONED'),
            dialogue: "You promised! You said you'd help! (She runs away, tears streaming)",
            effect: "GUILT_DEBUFF"
        },
        'PROTECTOR': {
            priority: 80,
            condition: (memories) => memories.some(m => m.type === 'SAVED'),
            dialogue: "I made this for you. It's not much, but... thank you for saving me.",
            effect: "MORALE_BOOST"
        }
    },
    'kiran': {
        'SCAMMED': {
            priority: 90,
            condition: (memories) => memories.some(m => m.type === 'SCAMMED'),
            dialogue: "Fool me once, shame on you. Fool me twice... well, prices just went up.",
            effect: "PRICES_DOUBLE"
        },
        'VIP_CUSTOMER': {
            priority: 70,
            condition: (memories) => memories.filter(m => m.type === 'TRADE').length > 10,
            dialogue: "Ah, my favorite customer! I kept this special stock just for you.",
            effect: "RARE_STOCK_UNLOCK"
        }
    },
    'seraph_9': {
        'REJECTED_UPLOAD': {
            priority: 100,
            condition: (memories) => memories.some(m => m.type === 'REJECTED_OFFER'),
            dialogue: "You cling to your flesh like a child to a blanket. It will not save you.",
            effect: "PSYCHIC_ATTACK"
        },
        'CULT_LEADER': {
            priority: 90,
            condition: (memories) => memories.some(m => m.type === 'JOINED_CULT'),
            dialogue: "Welcome home, unit. The chorus sings your name.",
            effect: "CULT_AUTHORITY"
        }
    }
};

export class NarrativeArcHandler {
    static checkSpecificArcs(entityId, memories, loopCount) {
        const arcs = NarrativeArcRegistry[entityId];
        if (!arcs) return null;

        let bestMatch = null;

        for (const key in arcs) {
            const arc = arcs[key];
            // Pass memories and loopCount to condition
            if (arc.condition(memories, loopCount)) {
                if (!bestMatch || arc.priority > bestMatch.priority) {
                    bestMatch = { id: key, ...arc };
                }
            }
        }

        return bestMatch;
    }
}
