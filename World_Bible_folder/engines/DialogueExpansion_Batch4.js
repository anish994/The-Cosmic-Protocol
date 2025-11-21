/**
 * ═══════════════════════════════════════════════════════════════════════════
 * DIALOGUE EXPANSION BATCH 4: "THE LIVING CONVERSATION"
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * These nodes rely heavily on the Dialogue Synthesizer to create
 * unique conversations every time they are triggered.
 * 
 * @version 1.0
 * ═══════════════════════════════════════════════════════════════════════════
 */

const DIALOGUE_BATCH_4 = {
    
    // 1. THE WAR CORRESPONDENT
    // -------------------------------------------------------------------------
    "war_correspondent_meet": {
        id: "war_correspondent_meet",
        title: "News from the Front",
        region: "ashram_central",
        associatedFaction: "factionless",
        associatedNPC: "mira_scribe", // Assuming Mira exists or generic
        outcomes: {
            'DEFAULT': {
                type: 'INFO',
                dialogue: "Mira: 'Traveler! {GREETING} {FACTION_OPINION} Have you heard? {RUMOR}'"
            }
        }
    },

    // 2. THE WEAPONSMITH'S APPRAISAL
    // -------------------------------------------------------------------------
    "weaponsmith_appraisal": {
        id: "weaponsmith_appraisal",
        title: "Steel and Soul",
        region: "ashram_forge",
        associatedFaction: "ashram_remnants",
        outcomes: {
            'DEFAULT': {
                type: 'TRADE',
                dialogue: "Smith: '{WEAPON_COMMENT} If you want it sharpened, it'll cost you.'"
            }
        }
    },

    // 3. THE REFUGEE'S PLEA
    // -------------------------------------------------------------------------
    "refugee_plea": {
        id: "refugee_plea",
        title: "Displaced Souls",
        region: "nexus_gate",
        associatedFaction: "factionless",
        outcomes: {
            'DEFAULT': {
                type: 'QUEST',
                dialogue: "Refugee: 'Please, {PLAYER_NAME}. {FACTION_OPINION} We have nowhere to go.'"
            }
        }
    }
};

module.exports = { DIALOGUE_BATCH_4 };
