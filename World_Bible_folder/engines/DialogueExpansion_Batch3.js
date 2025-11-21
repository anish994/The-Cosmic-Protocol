/**
 * ═══════════════════════════════════════════════════════════════════════════
 * DIALOGUE EXPANSION BATCH 3: "THE SOULS OF THE ARCHITECTS"
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * Focuses on the deep character interactions with the faction leaders and
 * mythic figures.
 * 
 * CHARACTERS:
 * 1. Laxus Bloodsage (The First Architect) - Meta-Aware, Sardonic.
 * 2. Suryanatha (The Ashram Leader) - Stoic, Traditional.
 * 
 * @version 1.0
 * ═══════════════════════════════════════════════════════════════════════════
 */

export const DIALOGUE_BATCH_3 = {
    
    // ═════════════════════════════════════════════════════════════════════════
    // LAXUS BLOODSAGE: THE META-ARCHITECT
    // ═════════════════════════════════════════════════════════════════════════
    "laxus_first_contact": {
        id: "laxus_first_contact",
        title: "The Glitch in the Lattice",
        region: "nexus_gate",
        associatedNPC: "laxus_bloodsage",
        associatedFaction: "untethered_architects",
        description: "The air shimmers with digital artifacts. A figure forms from the static.",
        outcomes: {
            'DEFAULT': {
                type: 'NEUTRAL',
                dialogue: "Laxus: 'Another iteration. You look... stable enough. Don't touch the walls; I just calibrated them.'",
            },
            'META_AWARE': {
                type: 'META_BREAK',
                condition: { 
                    archetype: 'THE_CHAOS_AGENT' 
                },
                dialogue: "Laxus: 'You tear through my code like a virus. Fascinating. I see you, <player_name>. Not the avatar. YOU.'",
                narrativeShift: { insight: 50, madness: 10 },
                metaData: { fourthWallBroken: true }
            },
            'HIGH_FUSION': {
                type: 'IMPRESSED',
                condition: { fusion: 'Solar Void Singularity' },
                dialogue: "Laxus: 'A Singularity? In a husk this primitive? I remember when I wrote the kernel for that. Try not to delete the sector.'",
                rewards: [{ type: 'item', id: 'architect_blueprint_alpha' }]
            }
        }
    },

    "laxus_loop_awareness": {
        id: "laxus_loop_awareness",
        title: "The Recursion Check",
        region: "nexus_gate",
        associatedNPC: "laxus_bloodsage",
        outcomes: {
            'DEFAULT': {
                type: 'NEUTRAL',
                dialogue: "Laxus: 'Déjà vu is just a cache error. Ignore it.'",
            },
            'MANY_LOOPS': {
                type: 'SARDONIC',
                // Condition would be checked by engine logic for loop count
                dialogue: "Laxus: 'Loop 47? Or is it 48? You're getting sloppy with your variables. I can see the memory leaks leaking from your ears.'",
                narrativeShift: { insight: 10 }
            }
        }
    },

    // ═════════════════════════════════════════════════════════════════════════
    // SURYANATHA: THE ASHRAM GUARDIAN
    // ═════════════════════════════════════════════════════════════════════════
    "suryanatha_audience": {
        id: "suryanatha_audience",
        title: "Audience with the Elder",
        region: "ashram_central",
        associatedNPC: "suryanatha",
        associatedFaction: "ashram_remnants",
        outcomes: {
            'DEFAULT': {
                type: 'STERN',
                dialogue: "Suryanatha: 'The Ashram stands because we follow the Path. Do not deviate.'",
            },
            'HIGH_REP': {
                type: 'RESPECT',
                condition: { factionRep: 'ashram_remnants', min: 80 },
                dialogue: "Suryanatha: 'You have proven yourself a pillar of our people. The archives are open to you.'",
                rewards: [{ type: 'access', id: 'ashram_archives_key' }]
            },
            'VOID_TAINTED': {
                type: 'DISGUST',
                condition: { skill: 'skill_void_blast' },
                dialogue: "Suryanatha: 'I smell the Void on you. It reeks of the Collapse. Leave my sight before I purify you myself.'",
                narrativeShift: { suspicion: 20 }
            }
        }
    }
};
