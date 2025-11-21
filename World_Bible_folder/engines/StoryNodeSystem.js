/**
 * ═══════════════════════════════════════════════════════════════════════════
 * STORY NODE SYSTEM (THE NARRATIVE DIRECTOR)
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * A sophisticated engine that manages dynamic, branching narratives.
 * Unlike simple quest scripts, this system weighs dozens of factors to determine
 * how a story beat plays out, creating an "Alive" narrative feel.
 * 
 * KEY FEATURES:
 * 1. Weighted Resolution: Outcomes are not binary (Pass/Fail) but spectral.
 * 2. Context Awareness: Checks Resonance, Faction Standing, Inventory, and World State.
 * 3. Recursion Integration: Past lives fundamentally alter current story beats.
 * 4. Active Knowledge: What the player *knows* changes what they can *do*.
 * 
 * @version 2.0 (Deep & Vast)
 * ═══════════════════════════════════════════════════════════════════════════
 */

const { NarrativeArcRegistry } = require('./NarrativeArcRegistry.js');
const { PsychologicalProfileSystem } = require('./PsychologicalProfileSystem.js');
const { MetaNarrativeController } = require('./MetaNarrativeController.js');
const { NPCDepthEngine } = require('./NPCDepthEngine.js');
const { DIALOGUE_BATCH_1 } = require('./DialogueExpansion_Batch1.js');
const { DIALOGUE_BATCH_2 } = require('./DialogueExpansion_Batch2.js');
const { DIALOGUE_BATCH_3 } = require('./DialogueExpansion_Batch3.js');
const { DIALOGUE_BATCH_4 } = require('./DialogueExpansion_Batch4.js');
const { DialogueSynthesizer } = require('./DialogueSynthesizer.js');
const { RumorMill } = require('./RumorMillSystem.js');
const { FusionDiscovery } = require('./FusionDiscoverySystem.js');
const { FactionSystem } = require('./FactionSystem.js');

class StoryNodeSystem {
    constructor(worldState, recursionSystem) {
        this.worldState = worldState;
        this.recursionSystem = recursionSystem;
        
        // NEW: Deep Narrative Engines
        this.psychSystem = new PsychologicalProfileSystem();
        this.factionSystem = new FactionSystem(worldState); // Initialize Faction System
        this.dialogueSynthesizer = new DialogueSynthesizer(this.factionSystem); // Initialize Synthesizer
        this.metaController = new MetaNarrativeController(this.psychSystem, null); 
        this.npcEngine = new NPCDepthEngine(worldState, recursionSystem); // Initialize NPC Soul System

        this.activeNodes = new Map(); // Nodes currently available to trigger
        this.completedNodes = new Set(); // History of this loop
        
        // The "Mind" of the story - tracks abstract narrative variables
        this.narrativeState = {
            suspicion: 0,   // How much the world distrusts the player generally
            insight: 0,     // The player's understanding of the "Truth"
            madness: 0,     // Sanity degradation from Void/Recursion
            heroism: 0      // Public perception of nobility
        };

        this.nodeDatabase = this._initializeDatabase();
    }

    /**
     * The Core Processor.
     * Determines how a specific story node resolves based on EVERYTHING.
     * @param {string} nodeId 
     * @param {Object} context - { player, region, ecosystem }
     */
    resolveNode(nodeId, context) {
        const node = this.nodeDatabase[nodeId];
        if (!node) return { error: "Node not found" };

        console.log(`[Story] Resolving Node: ${node.title} (${nodeId})`);

        // 0. META-NARRATIVE CHECK (The "Match")
        // Before the story happens, the Director checks if it should intervene.
        const intervention = this.metaController.checkIntervention(nodeId, context);
        if (intervention) {
            console.log(`[META] Intervention Triggered: ${intervention.title}`);
            return this._finalizeOutcome(node, intervention, context);
        }

        // 1. Calculate "Narrative Weight"
        // This determines the "Flavor" of the outcome (e.g., Aggressive, Diplomatic, Mystic)
        const weights = this._calculateWeights(node, context);
        
        // 2. Check Recursion (The Past)
        // Does the NPC remember something specific?
        const recursionOverride = this._checkRecursionOverrides(node, context);
        if (recursionOverride) {
            return this._finalizeOutcome(node, recursionOverride, context);
        }

        // 3. Determine Outcome based on Weights
        // We don't just pick the highest; we look for thresholds and combinations
        let outcomeKey = 'DEFAULT';
        
        const p = context.player; // Define p for scope access

        // 3a. Check Specific Skill Triggers (The "1000% Depth" Check)
        // Does the player have a specific skill equipped/unlocked that changes the scene?
        if (node.skillTriggers) {
            for (const [skillId, outcome] of Object.entries(node.skillTriggers)) {
                if (p.unlockedSkills.includes(skillId)) {
                    console.log(`[Story] Skill Trigger: ${skillId} unlocked outcome ${outcome}`);
                    outcomeKey = outcome;
                    break; // Priority to specific skills
                }
            }
        }

        // 3b. Check Fusion Triggers
        if (node.fusionTriggers && outcomeKey === 'DEFAULT') {
             for (const [fusionTag, outcome] of Object.entries(node.fusionTriggers)) {
                 if (FusionDiscovery.discoveredFusions.has(fusionTag)) {
                     outcomeKey = outcome;
                     break;
                 }
             }
        }

        // 3c. Check Advanced Conditions (New System)
        if (node.outcomes) {
            for (const [key, data] of Object.entries(node.outcomes)) {
                if (key === 'DEFAULT') continue;
                if (this._evaluateCondition(data.condition, context)) {
                    outcomeKey = key;
                    break; // First match wins (priority order in object matters)
                }
            }
        }

        // 4. Determine Final Outcome Object
        let outcome = node.outcomes[outcomeKey] || node.outcomes['DEFAULT'];
        console.log(`[Story] Outcome Key: ${outcomeKey}, Outcome:`, outcome);

        // 5. NPC SOUL OVERRIDE (The "Alive" Check)
        if (node.associatedNPC) {
            console.log(`[Story] Checking NPC: ${node.associatedNPC}`);
            const npcReaction = this.npcEngine.getNPCReaction(node.associatedNPC, {
                ...context.player,
                psychProfile: this.psychSystem.getProfile()
            });
            console.log(`[Story] NPC Reaction:`, npcReaction);

            if ((npcReaction.state === 'HOSTILE' || npcReaction.state === 'WARY') && outcome.type !== 'FAILURE') {
                console.log(`[Story] NPC Override: ${node.associatedNPC} is HOSTILE/WARY.`);
                return {
                    nodeId: node.id,
                    title: "Rejection",
                    outcomeType: 'FAILURE',
                    dialogue: npcReaction.dialogue,
                    forced: true
                };
            }
            
            if (npcReaction.state === 'ALLY' || npcReaction.state === 'DEVOTED') {
                 if (!outcome.dialogue.includes(npcReaction.dialogue)) {
                     outcome.dialogue = `${npcReaction.dialogue} ${outcome.dialogue}`;
                 }
            }
        }

        return this._finalizeOutcome(node, outcome, context);
    }

    /**
     * Evaluate complex conditions for dialogue outcomes.
     */
    _evaluateCondition(condition, context) {
        if (!condition) return true;
        const p = context.player;

        // Skill Check
        if (condition.skill && !p.unlockedSkills.includes(condition.skill)) return false;

        // Fusion Check
        if (condition.fusion && !FusionDiscovery.discoveredFusions.has(condition.fusion)) return false; // Note: FusionDiscovery stores IDs, ensure consistency

        // Archetype Check
        if (condition.archetype) {
            const profile = this.psychSystem.getProfile();
            if (profile.archetype !== condition.archetype) return false;
        }

        // Faction Rep Check
        if (condition.factionRep) {
            const rep = p.reputation[condition.factionRep] || 0;
            if (condition.min !== undefined && rep < condition.min) return false;
            if (condition.max !== undefined && rep > condition.max) return false;
        }

        // Faction Power Check (New)
        if (condition.factionPower) {
            const faction = this.factionSystem.getFactionState(condition.factionPower.factionId);
            if (faction) {
                if (condition.factionPower.min !== undefined && faction.power < condition.factionPower.min) return false;
                if (condition.factionPower.max !== undefined && faction.power > condition.factionPower.max) return false;
            }
        }

        return true;
    }

    _finalizeOutcome(node, outcome, context) {
        if (!outcome) {
            console.error("[Story] Critical Error: Outcome is undefined!");
            return { type: 'ERROR', finalDialogue: "Error: Narrative Collapse." };
        }

        // Use Dialogue Synthesizer for advanced text generation
        // We pass the NPC state if we have it (it might have been fetched in resolveNode)
        // But resolveNode doesn't pass it down explicitly. Let's fetch it again or assume context has it.
        // Ideally, resolveNode should attach the npcState to the context or pass it.
        // For now, let's fetch it if associatedNPC exists.
        let npcState = null;
        if (node.associatedNPC) {
             npcState = this.npcEngine.getNPCReaction(node.associatedNPC, context.player);
        }

        const synthesisContext = {
            player: context.player,
            npc: { 
                ...npcState, 
                faction: node.associatedFaction, 
                region: node.region 
            },
            worldState: this.worldState
        };

        let dialogue = this.dialogueSynthesizer.synthesize(outcome.dialogue, synthesisContext);

        const finalResult = {
            ...outcome,
            nodeId: node.id,
            title: node.title,
            finalDialogue: dialogue
        };
        console.log("[Story] Final Result:", finalResult);
        return finalResult;
    }



    _calculateWeights(node, context) {
        const p = context.player;
        const profile = this.psychSystem.getProfile();
        
        // Base weights from player stats
        let weights = {
            void: p.resonanceUsage?.void || 0,
            light: p.resonanceUsage?.light || 0,
            suspicion: this.narrativeState.suspicion,
            madness: this.narrativeState.madness,
            heroism: this.narrativeState.heroism,
            knowledge: p.knowledge || [],
            // Psych Metrics
            aggression: profile.metrics.aggression,
            deception: profile.metrics.deception
        };

        // DYNAMIC DERIVATION: Stats influence Narrative State
        // If you use Void heavily, you radiate Madness.
        if (weights.void > 30) {
            weights.madness += Math.floor((weights.void - 30) / 2);
        }
        // If you use Light heavily, you radiate Heroism (or self-righteousness).
        if (weights.light > 30) {
            weights.heroism += Math.floor((weights.light - 30) / 2);
        }

        // Modify based on Faction Reputation
        if (node.associatedFaction) {
            const rep = p.reputation[node.associatedFaction] || 0;
            if (rep < 0) weights.suspicion += Math.abs(rep);
            if (rep > 50) weights.heroism += (rep / 2);
        }

        // Modify based on World State (Ecosystem)
        if (context.ecosystem) {
            if (context.ecosystem.globalState.chaos > 60) weights.madness += 10;
        }

        return weights;
    }

    _checkRecursionOverrides(node, context) {
        // Check if a specific Narrative Arc forces a different path
        if (node.associatedNPC) {
            const dejaVu = this.recursionSystem.getDejaVuReaction(node.associatedNPC);
            if (dejaVu && dejaVu.type === 'NARRATIVE_ARC') {
                console.log(`[Story] Recursion Override: ${dejaVu.arcId}`);
                return {
                    type: 'RECURSION_OVERRIDE',
                    dialogue: dejaVu.dialogue,
                    effect: dejaVu.effect,
                    isMeta: true
                };
            }
        }
        return null;
    }

    _initializeDatabase() {
        const baseNodes = {
            // ═════════════════════════════════════════════════════════════════════
            // ASHRAM GATES: The First Test
            // ═════════════════════════════════════════════════════════════════════
            "ashram_entry": {
                id: "ashram_entry",
                title: "The Golden Gates",
                region: "ashram_central",
                associatedFaction: "ashram_remnants",
                associatedNPC: "suryanatha",
                skillTriggers: {
                    'skill_radiant_aura': 'LIGHT_CHAMPION', // If you have the aura, you skip the check
                    'skill_void_cloak': 'SNEAK_ENTRY'
                },
                outcomes: {
                    'DEFAULT': {
                        type: 'NEUTRAL',
                        dialogue: "The gates stand tall. Guards watch you warily, hands on their weapons. 'State your business, traveler.'",
                        nextNodes: ['ashram_market_access']
                    },
                    'LIGHT_CHAMPION': {
                        type: 'SUCCESS',
                        dialogue: "Suryanatha himself steps forward, sensing the purity of your resonance. 'The Light recognizes its own. Welcome, brother.'",
                        rewards: [{ type: 'reputation', faction: 'ashram_remnants', amount: 20 }],
                        narrativeShift: { heroism: 10 },
                        nextNodes: ['ashram_inner_sanctum']
                    },
                    'VOID_INSANITY': {
                        type: 'FAILURE',
                        dialogue: "The wards flare violently as you approach. Suryanatha draws his blade. 'Abomination! You reek of the Void!'",
                        worldUpdates: [{ type: 'COMBAT_START', enemies: ['Ashram Guardian', 'Light Construct'] }],
                        narrativeShift: { suspicion: 20 }
                    },
                    'SNEAK_ENTRY': {
                        type: 'SUCCESS',
                        dialogue: "You wrap the Void Cloak around yourself. To the guards, you are nothing but a shadow. You slip past unnoticed.",
                        narrativeShift: { deception: 10 },
                        nextNodes: ['ashram_shadow_alleys']
                    },
                    'RECURSION_OVERRIDE': {
                        // This is dynamically populated by the override handler, but defined here for structure
                        type: 'META',
                        dialogue: (ctx) => `Suryanatha freezes. He looks at you with a mix of horror and recognition. "${ctx.dialogue}"`
                    }
                }
            },
            // ═════════════════════════════════════════════════════════════════════
            // THE RELIC SEEKER CAMP: Secondary Faction Depth
            // ═════════════════════════════════════════════════════════════════════
            "relic_camp_approach": {
                id: "relic_camp_approach",
                title: "The Scavenger's Respite",
                region: "relic_matriarchs_vault",
                associatedFaction: "nomadic_relic_seekers",
                associatedNPC: "janya",
                fusionTriggers: {
                    'fusion_ancient_battery': 'TECH_WIZARD'
                },
                outcomes: {
                    'DEFAULT': {
                        type: 'NEUTRAL',
                        dialogue: "Janya eyes your gear. 'Got scrap? Or are you just here to waste my oxygen?'",
                    },
                    'TECH_WIZARD': {
                        type: 'SUCCESS',
                        dialogue: "Janya's eyes widen as she sees the Ancient Battery humming on your belt. 'By the Architect... that's Pre-Fall tech. Real Pre-Fall tech. Come in, quickly.'",
                        rewards: [{ type: 'item', id: 'blueprint_scrap_cannon' }],
                        narrativeShift: { curiosity: 10 }
                    }
                }
            },
            // ═════════════════════════════════════════════════════════════════════
            // THE NEXUS GATE: Laxus Bloodsage
            // ═════════════════════════════════════════════════════════════════════
            "laxus_meet": {
                id: "laxus_meet",
                title: "The Nexus Gate",
                region: "nexus_gate",
                associatedFaction: "untethered_architects",
                associatedNPC: "laxus_bloodsage",
                outcomes: {
                    'DEFAULT': {
                        type: 'NEUTRAL',
                        dialogue: "The gate hums with an impossible frequency. A figure watches from the shadows."
                    }
                }
            },
            // ═════════════════════════════════════════════════════════════════════
            // THE FORGOTTEN ARCHIVE: Lore Discovery
            // ═════════════════════════════════════════════════════════════════════
            "archive_truth": {
                id: "archive_truth",
                title: "The First Collapse",
                region: "ashram_archives",
                associatedNPC: "veyra_archivist",
                outcomes: {
                    'DEFAULT': {
                        type: 'INFO',
                        dialogue: "Veyra glances at the book you found. 'Interesting, but common knowledge. Move along.'",
                    },
                    'SECRET_REVEAL': {
                        type: 'MAJOR_DISCOVERY',
                        dialogue: "Veyra drops her quill. Her eyes widen. 'You found the Protocol Logs? But... those were erased by the Architects.' She leans in close. 'Tell no one.'",
                        rewards: [{ type: 'item', id: 'architect_key_fragment' }],
                        narrativeShift: { insight: 50, suspicion: 10 },
                        nextNodes: ['architect_conspiracy']
                    }
                }
            }
        };
        return { ...baseNodes, ...DIALOGUE_BATCH_1, ...DIALOGUE_BATCH_2, ...DIALOGUE_BATCH_3, ...DIALOGUE_BATCH_4 };
    }
}

module.exports = StoryNodeSystem;
