/**
 * ═══════════════════════════════════════════════════════════════════════════
 * FACTION SYSTEM (THE POLITICAL ENGINE)
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * Manages the complex web of alliances, wars, and reputation in the world.
 * Factions are not static; they grow, fight, and die based on player actions
 * and world events.
 * 
 * FEATURES:
 * 1. Dynamic Reputation: Actions have ripple effects (Help A -> Anger B).
 * 2. Faction States: Factions can be at WAR, PEACE, or ALLIANCE.
 * 3. Territory Control: Factions control regions, affecting spawn rates and shops.
 * 
 * @version 1.0
 * ═══════════════════════════════════════════════════════════════════════════
 */

const { EventBus } = require('./GlobalEventBus.js');

class FactionSystem {
    constructor(worldState) {
        this.worldState = worldState;
        this.factions = this._initializeFactions();
        
        // Initialize Player Reputation if not present
        if (!this.worldState.playerState.reputation) {
            this.worldState.playerState.reputation = {};
        }

        this._setupListeners();
    }

    _initializeFactions() {
        return {
            'ashram_remnants': {
                id: 'ashram_remnants',
                name: "The Ashram Remnants",
                description: "Survivors of the First Collapse. Traditionalists who fear the Void.",
                enemies: ['untethered_architects'],
                allies: [],
                power: 50, // 0-100
                state: 'DEFENSIVE' // AGGRESSIVE, DEFENSIVE, EXPANSIONIST, CRITICAL
            },
            'untethered_architects': {
                id: 'untethered_architects',
                name: "The Untethered Architects",
                description: "Techno-mystics who believe the Void is the next step of evolution.",
                enemies: ['ashram_remnants'],
                allies: [],
                power: 60,
                state: 'EXPANSIONIST'
            },
            'nomadic_relic_seekers': {
                id: 'nomadic_relic_seekers',
                name: "Nomadic Relic Seekers",
                description: "Opportunistic scavengers. Loyal only to profit.",
                enemies: [],
                allies: [],
                power: 30,
                state: 'NEUTRAL'
            }
        };
    }

    _setupListeners() {
        // Listen for Global Events
        EventBus.on('PLAYER_ACTION_COMPLETE', (data) => this.handlePlayerAction(data));
        EventBus.on('WORLD_EVENT_TRIGGERED', (data) => this.handleWorldEvent(data));
    }

    /**
     * Adjusts player reputation with a faction.
     * Automatically handles enemy/ally ripple effects.
     */
    modifyReputation(factionId, amount, reason) {
        const faction = this.factions[factionId];
        if (!faction) return;

        const playerRep = this.worldState.playerState.reputation;
        const oldRep = playerRep[factionId] || 0;
        const newRep = Math.max(-100, Math.min(100, oldRep + amount));
        
        playerRep[factionId] = newRep;

        console.log(`[Faction] ${faction.name} reputation changed by ${amount} (${reason}). New: ${newRep}`);
        EventBus.emit('REPUTATION_CHANGED', { factionId, oldRep, newRep, reason });

        // Ripple Effects
        // 1. Enemies hate you for helping their enemy (50% conversion)
        if (amount > 0) {
            faction.enemies.forEach(enemyId => {
                this._silentReputationChange(enemyId, -Math.floor(amount * 0.5), `Aided enemy ${faction.name}`);
            });
        }
        // 2. Allies like you for helping their ally (25% conversion)
        if (amount > 0) {
            faction.allies.forEach(allyId => {
                this._silentReputationChange(allyId, Math.floor(amount * 0.25), `Aided ally ${faction.name}`);
            });
        }

        this._checkReputationTiers(factionId, newRep);
    }

    _silentReputationChange(factionId, amount, reason) {
        const playerRep = this.worldState.playerState.reputation;
        const current = playerRep[factionId] || 0;
        playerRep[factionId] = Math.max(-100, Math.min(100, current + amount));
        console.log(`[Faction] Ripple: ${factionId} changed by ${amount} (${reason})`);
    }

    _checkReputationTiers(factionId, rep) {
        // Emit events when crossing thresholds
        if (rep >= 80) EventBus.emit('FACTION_TIER_REACHED', { factionId, tier: 'EXALTED' });
        else if (rep >= 50) EventBus.emit('FACTION_TIER_REACHED', { factionId, tier: 'ALLY' });
        else if (rep <= -50) EventBus.emit('FACTION_TIER_REACHED', { factionId, tier: 'NEMESIS' });
    }

    /**
     * Updates faction power dynamics based on world events.
     */
    handleWorldEvent(event) {
        if (event.type === 'FACTION_SKIRMISH') {
            // Randomly decide winner based on power
            const f1 = this.factions['ashram_remnants'];
            const f2 = this.factions['untethered_architects'];
            
            // Simple simulation
            const roll1 = Math.random() * f1.power;
            const roll2 = Math.random() * f2.power;

            if (roll1 > roll2) {
                f1.power += 2;
                f2.power -= 2;
                console.log(`[Faction] Ashram Remnants won a skirmish.`);
                EventBus.emit('RUMOR_GENERATED', { 
                    text: "Did you hear? The Remnants pushed back the Architects near the gate.",
                    faction: 'ashram_remnants'
                });
            } else {
                f2.power += 2;
                f1.power -= 2;
                console.log(`[Faction] Untethered Architects won a skirmish.`);
                EventBus.emit('RUMOR_GENERATED', { 
                    text: "The Architects are gaining ground. Their tech is too strong.",
                    faction: 'untethered_architects'
                });
            }
        }
    }

    getFactionState(factionId) {
        return this.factions[factionId];
    }
}

module.exports = { FactionSystem };
