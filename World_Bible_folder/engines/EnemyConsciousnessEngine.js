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

const WEAKNESS_MATRIX = {
    'UNDEAD': ['LIGHT', 'FIRE'],
    'CONSTRUCT': ['VOID', 'ACID'],
    'BEAST': ['MENTAL', 'POISON'],
    'DEMON': ['LIGHT', 'WATER']
};

export class EnemyConsciousnessEngine {
    constructor(worldState) {
        this.worldState = worldState;
        this.nemesisRegistry = new Map(); // Tracks enemies who survived/killed player
        this.tacticalMemory = {
            'AOE_SPAM': 0, // How much the player uses AOE
            'STEALTH': 0,  // How much the player uses Stealth
            'RUSH': 0,     // How much the player rushes
            'FUSION_FEAR': 0 // New: Fear of fusions
        };
        
        // NEW: Listen for Global Tactic Events (Hive Mind)
        EventBus.on('TACTIC_LEARNED', (data) => {
            this._assimilateTactic(data.tactic, data.sourceRegion);
        });

        // NEW: Listen for Legendary Fusions
        EventBus.on('LEGENDARY_FUSION_TRIGGERED', (data) => {
            console.log(`[EnemyAI] The world trembles. Enemies are now wary of ${data.name}.`);
            this.tacticalMemory['FUSION_FEAR'] += 20;
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
     * @param {string} actionType - 'ATTACK', 'HEAL', 'FLEE', 'INTIMIDATE', 'FUSION_USED'
     * @param {number} damage - Amount of damage dealt (if any).
     * @param {Object} context - Extra data (skill tags, fusion info)
     */
    processReaction(enemy, actionType, damage, context = {}) {
        // 1. Morale Check
        if (actionType === 'ATTACK' && damage > enemy.maxHp * 0.5) {
            enemy.aiState.morale -= 40;
            if (enemy.personality === 'COWARDLY' && enemy.aiState.morale < 20) {
                return { type: 'FLEE', dialogue: "I'm not paid enough for this!" };
            }
        }

        // NEW: Fusion Reaction
        if (actionType === 'FUSION_USED') {
            return this._reactToFusion(enemy, context.fusionName);
        }

        // NEW: Weakness Check
        if (actionType === 'ATTACK' && context.skillTags) {
            const weaknessReaction = this._checkWeakness(enemy, context.skillTags);
            if (weaknessReaction) return weaknessReaction;
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

    _reactToFusion(enemy, fusionName) {
        this.tacticalMemory['FUSION_FEAR'] += 5;
        enemy.aiState.morale -= 20;
        
        if (enemy.traits.includes('COMMANDER')) {
            return { type: 'ORDER', dialogue: "Focus fire! Don't let them cast that again!" };
        }
        
        return { type: 'SHOCK', dialogue: `What is that power?! ${fusionName}?!` };
    }

    _checkWeakness(enemy, skillTags) {
        const type = enemy.type || 'GENERIC';
        const weaknesses = WEAKNESS_MATRIX[type] || [];
        
        for (const tag of skillTags) {
            if (weaknesses.includes(tag)) {
                enemy.aiState.morale -= 15;
                return { type: 'STAGGER', dialogue: "Aaargh! It burns!" };
            }
        }
        return null;
    }
}
