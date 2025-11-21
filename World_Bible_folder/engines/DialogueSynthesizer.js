/**
 * ═══════════════════════════════════════════════════════════════════════════
 * DIALOGUE SYNTHESIZER (THE CONVERSATION ENGINE)
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * A system that assembles dynamic conversations from multiple sources:
 * 1. Scripted Nodes (The Core Story)
 * 2. NPC Soul State (Mood/Disposition)
 * 3. World Events (Rumors/War)
 * 4. Player Context (Appearance/Actions)
 * 
 * It replaces static strings with living, context-aware text blocks.
 * 
 * @version 1.0
 * ═══════════════════════════════════════════════════════════════════════════
 */

import { RumorMill } from './RumorMillSystem.js';

class DialogueSynthesizer {
    constructor(factionSystem) {
        this.factionSystem = factionSystem;
    }

    /**
     * Synthesizes the final dialogue string.
     * @param {string} baseText - The scripted text from the Story Node.
     * @param {Object} context - { player, npc, worldState }
     */
    synthesize(baseText, context) {
        let finalText = baseText;

        // 1. INJECT DYNAMIC PLACEHOLDERS
        finalText = this._processPlaceholders(finalText, context);

        // 2. APPEND CONTEXTUAL BARKS (If not already present)
        // If the NPC is in a specific mood, they might add a prefix/suffix
        if (context.npc && context.npc.state) {
            finalText = this._applyMoodTone(finalText, context.npc);
        }

        return finalText;
    }

    _processPlaceholders(text, context) {
        // {RUMOR} - Handled by StoryNodeSystem, but we can refine it here
        if (text.includes('{RUMOR}')) {
            const rumor = RumorMill.getRumor({ 
                faction: context.npc?.faction || 'factionless', 
                region: context.npc?.region || 'global' 
            });
            text = text.replace('{RUMOR}', rumor ? rumor.text : "Things are quiet.");
        }

        // {PLAYER_NAME}
        if (text.includes('{PLAYER_NAME}')) {
            text = text.replace('{PLAYER_NAME}', context.player?.name || "Traveler");
        }

        // {FACTION_OPINION} - NPC comments on the war
        if (text.includes('{FACTION_OPINION}')) {
            text = text.replace('{FACTION_OPINION}', this._getFactionOpinion(context));
        }

        // {WEAPON_COMMENT} - NPC comments on player's gear
        if (text.includes('{WEAPON_COMMENT}')) {
            text = text.replace('{WEAPON_COMMENT}', this._getWeaponComment(context));
        }

        return text;
    }

    _applyMoodTone(text, npc) {
        // Don't modify if it's a system message or very short
        if (text.length < 5) return text;

        if (npc.state === 'HOSTILE') {
            return `(Spits) ${text}`;
        }
        if (npc.state === 'FEAR') {
            return `(Trembling) ${text}`;
        }
        if (npc.state === 'AWE') {
            return `(Whispering) ${text}`;
        }
        return text;
    }

    _getFactionOpinion(context) {
        const npcFactionId = context.npc?.faction;
        if (!npcFactionId || !this.factionSystem) return "War is hell.";

        const factionState = this.factionSystem.getFactionState(npcFactionId);
        if (!factionState) return "Times are tough.";

        if (factionState.state === 'EXPANSIONIST') {
            return "We are marching forward. Nothing can stop us.";
        }
        if (factionState.state === 'DEFENSIVE') {
            return "We hold the line. That is all that matters.";
        }
        if (factionState.state === 'CRITICAL') {
            return "They say the end is coming. I believe them.";
        }
        return "The balance shifts.";
    }

    _getWeaponComment(context) {
        const skills = context.player?.unlockedSkills || [];
        if (skills.includes('skill_void_blast')) return "That void energy... keep it away from me.";
        if (skills.includes('skill_light_beam')) return "A bright light you carry.";
        return "That's a sturdy look about you.";
    }
}

module.exports = { DialogueSynthesizer };
