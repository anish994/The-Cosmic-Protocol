import { EventBus } from './GlobalEventBus.js';

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * ENEMY CONSCIOUSNESS ENGINE
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * Transforms generic enemies from stat blocks into "Conscious" entities.
 * - Gives enemies "Memory" of player tactics.
 * - Enables "Pack Intelligence" (enemies communicate).
 * - Tracks "Nemesis Evolution" (surviving enemies become stronger).
 * - Adds "Fear/Morale" systems.
 * 
 * @version 1.0
 * ═══════════════════════════════════════════════════════════════════════════
 */

export class EnemyConsciousnessEngine {
    constructor(worldState) {
        this.worldState = worldState;
        this.nemesisRegistry = new Map(); // Tracks enemies who survived/killed player
        this.tacticalMemory = {
            'AOE_SPAM': 0, // How much the player uses AOE
            'STEALTH': 0,  // How much the player uses Stealth
            'RUSH': 0      // How much the player rushes
        };
        
        // NEW: Listen for Global Tactic Events (Hive Mind)
        EventBus.on('TACTIC_LEARNED', (data) => {
            this._assimilateTactic(data.tactic, data.sourceRegion);
        });
    }

    _assimilateTactic(tactic, sourceRegion) {
        console.log(`[Hive Mind] Learning ${tactic} from ${sourceRegion}...`);
        this.tacticalMemory[tactic] = (this.tacticalMemory[tactic] || 0) + 5; // Instant boost
    }

    /**
     * Generates a "Conscious" Enemy Instance.
     * @param {Object} baseTemplate - The JSON template of the enemy.
     * @param {Object} context - { region, factionState, playerReputation }
     */
    generateConsciousEnemy(baseTemplate, context) {
        const enemy = JSON.parse(JSON.stringify(baseTemplate)); // Deep copy
        
        // 1. Assign Personality Archetype
        enemy.personality = this._generatePersonality(baseTemplate.faction);
        
        // 2. Check for Nemesis Status
        if (this.nemesisRegistry.has(baseTemplate.id)) {
            this._applyNemesisBuffs(enemy);
        }

        // 3. Apply Faction Intelligence
        enemy.aiState = {
            morale: 100,
            alertness: context.factionState.alertLevel || 'NORMAL',
            memory: [] // Short term combat memory
        };

        // 4. Apply Tactical Adaptations (The "Learning" AI)
        if (this.tacticalMemory['AOE_SPAM'] > 5) {
            enemy.traits.push('SCATTER_FORMATION'); // Counter to AOE
        }
        if (this.tacticalMemory['STEALTH'] > 5) {
            enemy.traits.push('TRUE_SIGHT'); // Counter to Stealth
        }

        return enemy;
    }

    /**
     * Process Enemy Reaction to Player Action.
     * @param {Object} enemy - The enemy instance.
     * @param {string} actionType - 'ATTACK', 'HEAL', 'FLEE', 'INTIMIDATE'
     * @param {number} damage - Amount of damage dealt (if any).
     */
    processReaction(enemy, actionType, damage) {
        // 1. Morale Check
        if (actionType === 'ATTACK' && damage > enemy.maxHp * 0.5) {
            enemy.aiState.morale -= 40;
            if (enemy.personality === 'COWARDLY' && enemy.aiState.morale < 20) {
                return { type: 'FLEE', dialogue: "I'm not paid enough for this!" };
            }
        }

        // 2. Tactical Learning
        if (actionType === 'AOE_ATTACK') {
            this.tacticalMemory['AOE_SPAM']++;
            // NEW: Broadcast learning to Hive Mind if threshold reached
            if (this.tacticalMemory['AOE_SPAM'] % 10 === 0) {
                EventBus.emit('TACTIC_LEARNED', { tactic: 'AOE_SPAM', sourceRegion: enemy.region || 'UNKNOWN' });
            }
        }

        // 3. Personality Bark
        return this._generateBark(enemy, actionType);
    }

    _generatePersonality(faction) {
        const archetypes = ['AGGRESSIVE', 'CAUTIOUS', 'FANATICAL', 'COWARDLY', 'HONORABLE'];
        // Weight based on faction
        if (faction === 'ashram_remnants') return Math.random() > 0.7 ? 'HONORABLE' : 'CAUTIOUS';
        if (faction === 'post_human_cults') return 'FANATICAL';
        if (faction === 'corruption_champions') return 'AGGRESSIVE';
        return archetypes[Math.floor(Math.random() * archetypes.length)];
    }

    _applyNemesisBuffs(enemy) {
        const nemesisData = this.nemesisRegistry.get(enemy.id);
        enemy.name = `Nemesis: ${enemy.name}`;
        enemy.stats.hp *= 1.5;
        enemy.stats.damage *= 1.2;
        enemy.dialogue = {
            encounter: nemesisData.killCount > 0 ? "You again? I'll bury you like the last time." : "I survived you once. Never again."
        };
    }

    _generateBark(enemy, actionType) {
        const barks = {
            'AGGRESSIVE': {
                'ATTACK': "Is that all you've got?",
                'HIT': "Blood! Finally!",
                'ALLY_DEATH': "Weakling! I'll do it myself!"
            },
            'COWARDLY': {
                'ATTACK': "Stay back!",
                'HIT': "Don't hurt me!",
                'ALLY_DEATH': "They're dead! Run!"
            },
            'FANATICAL': {
                'ATTACK': "For the Cause!",
                'HIT': "Pain is data!",
                'ALLY_DEATH': "Their code returns to the Source."
            }
        };

        const archetypeBarks = barks[enemy.personality] || barks['AGGRESSIVE'];
        const reaction = archetypeBarks[actionType === 'ATTACK' ? 'HIT' : 'ATTACK']; // Simplified mapping
        
        return { type: 'BARK', text: reaction };
    }
}
