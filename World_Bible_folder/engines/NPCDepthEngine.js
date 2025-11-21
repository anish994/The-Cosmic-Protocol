/**
 * ═══════════════════════════════════════════════════════════════════════════
 * NPC DEPTH ENGINE (THE SOUL SYSTEM)
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * Manages the psychological state, hidden motivations, and dynamic evolution
 * of every NPC in the game.
 * 
 * FEATURES:
 * 1. Emotional State Machine: NPCs have moods (Fear, Awe, Anger) that shift.
 * 2. Hidden Agendas: Every NPC has a secret goal that drives their AI.
 * 3. Relationship Matrix: Tracks detailed opinions of the player and other NPCs.
 * 
 * @version 1.0
 * ═══════════════════════════════════════════════════════════════════════════
 */

import { Suryanatha } from './LivingCharacterSystem.js';
import { Janya } from './RelicSeekers_Architects_Batch5.js';
import { LaxusBloodsage } from './Mythic_Legends_Batch8.js';
import { Malakar } from './Mixed_Batch4.js';
import { NPCMemorySystem } from './SkillEnhancementSystem.js';

export class NPCDepthEngine {
    constructor(worldState, memorySystem) {
        this.worldState = worldState;
        this.memorySystem = memorySystem || new NPCMemorySystem();
        this.npcInstances = {};
        this._initializeNPCs();
    }

    _initializeNPCs() {
        // We instantiate the "Living" versions of the characters.
        // These classes contain the 100% depth logic (memories, relationships, etc.)
        
        const memSys = this.memorySystem;

        try {
            this.npcInstances['suryanatha'] = new Suryanatha(memSys, this.worldState);
            this.npcInstances['janya'] = new Janya(memSys, this.worldState);
            this.npcInstances['laxus_bloodsage'] = new LaxusBloodsage(memSys, this.worldState);
            this.npcInstances['malakar'] = new Malakar(memSys, this.worldState);
        } catch (e) {
            console.error("Failed to initialize NPC instances:", e);
        }
    }

    /**
     * Gets the current reaction of an NPC based on player state and history.
     * @param {string} npcId 
     * @param {Object} playerState 
     */
    getNPCReaction(npcId, playerState) {
        const npc = this.npcInstances[npcId];
        
        if (npc) {
            // Use the deep logic from LivingCharacterSystem
            return npc.getNarrativeReaction(playerState);
        }

        // Fallback for characters not yet fully instantiated or missing
        return {
            npcId,
            name: npcId,
            state: 'NEUTRAL',
            disposition: 0,
            dialogue: "..."
        };
    }
}
