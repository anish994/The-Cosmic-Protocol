/**
 * ═══════════════════════════════════════════════════════════════════════════
 * DIALOGUE EXPANSION BATCH 2: "THE FACTION WARS"
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * Focuses on the shifting power dynamics between the Ashram Remnants and
 * the Untethered Architects.
 * 
 * @version 1.0
 * ═══════════════════════════════════════════════════════════════════════════
 */

export const DIALOGUE_BATCH_2 = {
    
    // 1. THE ARCHITECT OUTPOST
    // -------------------------------------------------------------------------
    "architect_outpost_raid": {
        id: "architect_outpost_raid",
        title: "The Forward Camp",
        region: "nexus_gate",
        associatedFaction: "untethered_architects",
        outcomes: {
            'DEFAULT': {
                type: 'NEUTRAL',
                dialogue: "Soldier: 'State your business. The war doesn't stop for tourists.'",
            },
            'ARCHITECTS_WINNING': {
                type: 'CONFIDENT',
                condition: { 
                    factionPower: { factionId: 'untethered_architects', min: 70 } 
                },
                dialogue: "Soldier: 'Look at them run! The Remnants are breaking. Join us, and you'll share the spoils.'",
                narrativeShift: { heroism: -5, suspicion: 5 }
            },
            'REMNANTS_PUSHING': {
                type: 'DESPERATE',
                condition: { 
                    factionPower: { factionId: 'ashram_remnants', min: 60 } 
                },
                dialogue: "Soldier: 'They're everywhere! We need ammo, not talk. Grab a rifle or get out of the way!'",
                narrativeShift: { heroism: 5 }
            }
        }
    },

    // 2. THE RELIC MARKET DISPUTE
    // -------------------------------------------------------------------------
    "relic_market_dispute": {
        id: "relic_market_dispute",
        title: "Black Market Dealings",
        region: "ashram_central",
        associatedFaction: "nomadic_relic_seekers",
        outcomes: {
            'DEFAULT': {
                type: 'NEUTRAL',
                dialogue: "Merchant: 'Prices are fixed. No haggling.'",
            },
            'HIGH_REP': {
                type: 'FRIENDLY',
                condition: { factionRep: 'nomadic_relic_seekers', min: 50 },
                dialogue: "Merchant: 'Ah, the Walker! For you? The family discount. 50% off everything.'",
                rewards: [{ type: 'discount', value: 0.5 }]
            },
            'HATED': {
                type: 'HOSTILE',
                condition: { factionRep: 'nomadic_relic_seekers', max: -20 },
                dialogue: "Merchant: 'You... you're the one who burned our caravan. GUARDS!'",
                outcomeType: 'COMBAT_TRIGGER'
            }
        }
    },

    // 3. THE VOID CULTIST RITUAL
    // -------------------------------------------------------------------------
    "void_cult_ritual": {
        id: "void_cult_ritual",
        title: "Whispers in the Dark",
        region: "void_wastes",
        associatedFaction: "void_cultists",
        outcomes: {
            'DEFAULT': {
                type: 'MYSTERIOUS',
                dialogue: "Cultist: 'The stars are silent. Leave us.'",
            },
            'HAS_VOID_FUSION': {
                type: 'WORSHIP',
                condition: { fusion: 'Solar Void Singularity' },
                dialogue: "Cultist: 'The Singularity... it walks among us! Master, teach us the song of the end!'",
                narrativeShift: { madness: 20, suspicion: 20 }
            }
        }
    }
};
