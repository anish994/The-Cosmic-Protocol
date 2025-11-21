/**
 * ═══════════════════════════════════════════════════════════════════════════
 * LORE INTEGRATION SYSTEM (THE KNOWLEDGE GRAPH)
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * Manages "Active Knowledge" - lore that isn't just flavor text, but a 
 * gameplay mechanic.
 * 
 * KEY FEATURES:
 * 1. Knowledge Graph: Facts connect to form Deductions.
 * 2. NPC Awareness: Tracks what NPCs know and how they react to new info.
 * 3. Item Binding: Physical items carry metaphysical weight.
 * 
 * @version 2.0
 * ═══════════════════════════════════════════════════════════════════════════
 */

export class LoreIntegrationSystem {
    constructor() {
        // The Player's "Mind" - what they have discovered
        this.knownFacts = new Set();
        this.unlockedDeductions = new Set();

        // NPC Knowledge State - what THEY know
        // { npcId: { knownFacts: Set(), trust: 0 } }
        this.npcState = new Map();

        this.factDatabase = this._initializeFacts();
        this.deductionDatabase = this._initializeDeductions();
    }

    /**
     * Player discovers a new fact (from item, dialogue, or exploration).
     */
    discoverFact(factId) {
        if (this.knownFacts.has(factId)) return null;

        const fact = this.factDatabase[factId];
        if (!fact) return null;

        this.knownFacts.add(factId);
        console.log(`[Lore] Discovered Fact: ${fact.title}`);

        // Check for automatic deductions
        return this._checkDeductions();
    }

    /**
     * Player shares a fact with an NPC.
     * This is a "Social Move" that can backfire or succeed.
     */
    shareFactWithNPC(npcId, factId) {
        if (!this.knownFacts.has(factId)) return { success: false, reason: "You don't know this." };
        
        const npcData = this._getNPCState(npcId);
        if (npcData.knownFacts.has(factId)) {
            return { success: false, reaction: "BORED", dialogue: "I already know that, traveler." };
        }

        const fact = this.factDatabase[factId];
        const reaction = this._calculateNPCReaction(npcId, fact);

        // Update NPC state
        npcData.knownFacts.add(factId);
        
        return {
            success: true,
            reaction: reaction.type,
            dialogue: reaction.dialogue,
            consequence: reaction.consequence
        };
    }

    _checkDeductions() {
        const newDeductions = [];
        
        for (const [deductionId, data] of Object.entries(this.deductionDatabase)) {
            if (this.unlockedDeductions.has(deductionId)) continue;

            // Check if all required facts are known
            const hasAllReqs = data.requiredFacts.every(req => this.knownFacts.has(req));
            
            if (hasAllReqs) {
                this.unlockedDeductions.add(deductionId);
                newDeductions.push({
                    id: deductionId,
                    title: data.title,
                    description: data.description,
                    reward: data.reward
                });
                console.log(`[Lore] DEDUCTION UNLOCKED: ${data.title}`);
            }
        }
        return newDeductions;
    }

    _calculateNPCReaction(npcId, fact) {
        // This would ideally pull from the Character.md data
        // For now, we simulate the logic based on tags
        
        // Example: Sharing "Void" secrets with "Ashram" members is bad
        if (fact.tags.includes('VOID_SECRET') && npcId === 'suryanatha') {
            return {
                type: 'HOSTILE',
                dialogue: "You speak heresy in this holy place? Guards!",
                consequence: 'COMBAT_TRIGGER'
            };
        }

        // Example: Sharing "Protocol" secrets with "Architects" is good
        if (fact.tags.includes('PROTOCOL_LOG') && npcId === 'laxus_bloodsage') {
            return {
                type: 'INTRIGUED',
                dialogue: "Ah... the missing variable. You are more useful than you look.",
                consequence: 'SHOP_DISCOUNT'
            };
        }

        return {
            type: 'NEUTRAL',
            dialogue: "Interesting. I will consider this.",
            consequence: 'NONE'
        };
    }

    _getNPCState(npcId) {
        if (!this.npcState.has(npcId)) {
            this.npcState.set(npcId, { knownFacts: new Set(), trust: 0 });
        }
        return this.npcState.get(npcId);
    }

    _initializeFacts() {
        return {
            'collapse_log_1': {
                title: "The Pause Protocol",
                description: "The CPS did not fail. It was paused by the First Architect.",
                tags: ['PROTOCOL_LOG', 'ANCIENT_HISTORY']
            },
            'fractured_mantra': {
                title: "Vira's Betrayal",
                description: "Suryanatha's ritual requires a sacrifice of memory, not just light.",
                tags: ['ASHRAM_SECRET', 'VOID_SECRET']
            },
            'flesh_prototype_9': {
                title: "Subject 9's Rejection",
                description: "The flesh remembers its original shape. The graft failed.",
                tags: ['CULT_SECRET', 'BIO_LORE']
            }
        };
    }

    _initializeDeductions() {
        return {
            'architect_conspiracy': {
                title: "The Architect's Conspiracy",
                description: "The Fall was not an accident. It was a controlled demolition of reality.",
                requiredFacts: ['collapse_log_1', 'fractured_mantra'],
                reward: { type: 'insight', amount: 50 }
            }
        };
    }
}
