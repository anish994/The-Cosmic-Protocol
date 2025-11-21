/**
 * ═══════════════════════════════════════════════════════════════════════════
 * META-NARRATIVE CONTROLLER (THE DIRECTOR / LAXUS)
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * The "God Object" of the narrative. It watches the player's psychological profile
 * and the world state to introduce "Complications", "Subversions", and "Meta-Commentary".
 * 
 * KEY FEATURES:
 * 1. Narrative Subversion: If the player is too predictable, the system changes the rules.
 * 2. The Fourth Wall: Laxus Bloodsage (The First Architect) speaks directly to the user.
 * 3. Tension Escalation: As the player succeeds, the narrative fights back.
 * 
 * @version 1.0
 * ═══════════════════════════════════════════════════════════════════════════
 */

export class MetaNarrativeController {
    constructor(psychSystem, loreSystem) {
        this.psychSystem = psychSystem;
        this.loreSystem = loreSystem;
        
        this.state = {
            metaTension: 0,       // 0-100. Rises with success/survival.
            subversionCount: 0,   // How many times we've tricked the player.
            laxusInterest: 0      // How interested the First Architect is in you.
        };
    }

    /**
     * Called before a Story Node resolves. Can hijack the entire event.
     * @param {string} nodeId 
     * @param {Object} context 
     * @returns {Object|null} - Returns an override object if the meta-layer intervenes.
     */
    checkIntervention(nodeId, context) {
        const profile = this.psychSystem.getProfile();
        const archetype = profile.archetype;

        // 1. INCREASE TENSION
        this.state.metaTension += 1;

        // 2. LAXUS INTERVENTION (High Tension + Specific Archetypes)
        if (this.state.metaTension > 50 && this.state.laxusInterest < 100) {
            // Laxus notices extreme archetypes
            if (archetype === 'THE_CHAOS_AGENT' || archetype === 'THE_SCHOLAR') {
                this.state.laxusInterest += 5;
                if (Math.random() < 0.1) { // 10% chance of direct contact
                    return this._generateLaxusIntervention(archetype);
                }
            }
        }

        // 3. ARCHETYPE SUBVERSION (Punish predictability)
        // If a "Butcher" tries to be nice, maybe it fails because they smell like blood.
        if (archetype === 'THE_BUTCHER' && nodeId.includes('diplomacy')) {
            return {
                type: 'SUBVERSION',
                title: 'The Scent of Blood',
                dialogue: "You try to smile, but the blood under your fingernails is too fresh. They recoil in horror.",
                outcomeType: 'FAILURE',
                forced: true
            };
        }

        // If a "Manipulator" tries to be honest, maybe they aren't believed.
        if (archetype === 'THE_MANIPULATOR' && nodeId.includes('truth')) {
            return {
                type: 'SUBVERSION',
                title: 'The Boy Who Cried Wolf',
                dialogue: "You speak the truth for once, but your eyes betray a thousand past lies. They laugh in your face.",
                outcomeType: 'FAILURE',
                forced: true
            };
        }

        return null; // No intervention
    }

    _generateLaxusIntervention(archetype) {
        const messages = {
            'THE_CHAOS_AGENT': "You tear through my code like a virus. Fascinating. But can you break what isn't there?",
            'THE_SCHOLAR': "You dig so deep, little seeker. Do you really want to see the source code of your own soul?",
            'DEFAULT': "I see you. The user behind the screen. You think this is a game?"
        };

        const msg = messages[archetype] || messages['DEFAULT'];

        return {
            type: 'META_EVENT',
            title: 'A Voice from the Code',
            dialogue: `[SYSTEM GLITCH] The world freezes. Colors invert. A voice speaks, not to the character, but to YOU.\n\n"${msg}"\n\nThe reality stabilizes, but you feel watched.`,
            outcomeType: 'NEUTRAL',
            forced: true,
            metaData: { laxusContact: true }
        };
    }
}
