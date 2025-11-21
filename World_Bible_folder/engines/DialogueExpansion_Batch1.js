/**
 * ═══════════════════════════════════════════════════════════════════════════
 * DIALOGUE EXPANSION BATCH 1: "THE AWAKENING"
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * Contains 20+ complex story nodes focusing on:
 * - Reactions to Legendary Fusions
 * - Deep Faction Interactions
 * - Psychological Profile Subversions
 * 
 * @version 1.0
 * ═══════════════════════════════════════════════════════════════════════════
 */

export const DIALOGUE_BATCH_1 = {
    
    // 1. THE VOID SCHOLAR'S TEST
    // -------------------------------------------------------------------------
    "void_scholar_meet": {
        id: "void_scholar_meet",
        title: "The Gaze of the Abyss",
        region: "ashram_archives",
        associatedNPC: "veyra_archivist",
        description: "Veyra is studying a crumbling tablet. She doesn't look up as you approach.",
        outcomes: {
            'DEFAULT': {
                type: 'NEUTRAL',
                dialogue: "Veyra: 'Unless you have a First Era cipher, you're blocking my light. Move.'",
            },
            'HAS_VOID_SKILL': {
                type: 'INTEREST',
                condition: { skill: 'skill_void_blast' },
                dialogue: "Veyra pauses. She smells the ozone on you. 'You... you've touched the Void. And you're still sane? Fascinating. Let me see your eyes.'",
                narrativeShift: { curiosity: 10 }
            },
            'HAS_LEGENDARY_FUSION': {
                type: 'AWE',
                condition: { fusion: 'Solar Void Singularity' },
                dialogue: "Veyra drops the tablet. It shatters. She doesn't care. 'The Singularity... I felt it. That was YOU? You are either a god or a catastrophe waiting to happen.'",
                rewards: [{ type: 'item', id: 'key_forbidden_section' }],
                narrativeShift: { insight: 20, fear: 10 }
            }
        }
    },

    // 2. THE RELIC HUNTER'S BARGAIN
    // -------------------------------------------------------------------------
    "relic_hunter_trade": {
        id: "relic_hunter_trade",
        title: "Scrap for Souls",
        region: "rust_canyons",
        associatedNPC: "janya",
        description: "Janya is dismantling a combat droid. Sparks fly.",
        outcomes: {
            'DEFAULT': {
                type: 'NEUTRAL',
                dialogue: "Janya: 'Credits or scrap. I don't trade in stories.'",
            },
            'ARCHETYPE_BUTCHER': {
                type: 'INTIMIDATION',
                condition: { archetype: 'THE_BUTCHER' },
                dialogue: "Janya looks at the blood on your armor. She grips her wrench tighter. 'I know a killer when I see one. Take what you want, just don't hurt my crew.'",
                narrativeShift: { fear: 15, heroism: -10 }
            },
            'ARCHETYPE_SCHOLAR': {
                type: 'RESPECT',
                condition: { archetype: 'THE_SCHOLAR' },
                dialogue: "Janya: 'You're looking at the servo-motor, not the gun. You're an engineer, aren't you? Finally, someone who speaks my language.'",
                rewards: [{ type: 'discount', value: 0.2 }]
            }
        }
    },

    // 3. THE CULTIST'S PROPHECY
    // -------------------------------------------------------------------------
    "cultist_prophecy": {
        id: "cultist_prophecy",
        title: "Whispers of the Machine God",
        region: "neon_slums",
        associatedNPC: "prophet_null",
        description: "A robed figure stands on a crate, preaching to a crowd of glitches.",
        outcomes: {
            'DEFAULT': {
                type: 'IGNORE',
                dialogue: "Prophet Null: 'The code is broken! The compile fails! We are all memory leaks!'",
            },
            'HAS_TIME_SKILL': {
                type: 'REVELATION',
                condition: { skill: 'skill_time_stop' },
                dialogue: "Prophet Null points a trembling finger at you. 'YOU! You stand outside the tick! You are the Lag! The Glitch that Saves!'",
                narrativeShift: { madness: 5, heroism: 5 }
            },
            'HAS_CHRONOS_SEVERANCE': {
                type: 'WORSHIP',
                condition: { fusion: 'Chronos Severance' },
                dialogue: "The crowd falls silent. Null falls to his knees. 'The Severed One... you have cut the thread. We are free. We are finally free.'",
                rewards: [{ type: 'follower', id: 'cultist_acolyte' }],
                narrativeShift: { madness: 20, heroism: 20 }
            }
        }
    },

    // 4. THE ASHRAM COMMANDER
    // -------------------------------------------------------------------------
    "ashram_commander_briefing": {
        id: "ashram_commander_briefing",
        title: "Order from Chaos",
        region: "ashram_citadel",
        associatedNPC: "commander_suryanatha",
        description: "Suryanatha reviews a holographic map of the sector.",
        outcomes: {
            'DEFAULT': {
                type: 'FORMAL',
                dialogue: "Suryanatha: 'Report, operative. The sector is unstable.'",
            },
            'HIGH_REP': {
                type: 'TRUST',
                condition: { factionRep: 'ashram_remnants', min: 50 },
                dialogue: "Suryanatha: 'Good to see you. I have a mission that requires... discretion. I can't trust the regulars with this.'",
                rewards: [{ type: 'quest', id: 'quest_black_ops' }]
            },
            'ENEMY_OF_STATE': {
                type: 'HOSTILE',
                condition: { factionRep: 'ashram_remnants', max: -50 },
                dialogue: "Suryanatha draws his blade. 'You have some nerve coming here, traitor. Give me one reason not to execute you where you stand.'",
                narrativeShift: { tension: 50 }
            }
        }
    }
};
