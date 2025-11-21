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

import { NarrativeArcRegistry } from './NarrativeArcRegistry.js';
import { PsychologicalProfileSystem } from './PsychologicalProfileSystem.js';
import { MetaNarrativeController } from './MetaNarrativeController.js';
import { NPCDepthEngine } from './NPCDepthEngine.js';

export class StoryNodeSystem {
    constructor(worldState, recursionSystem) {
        this.worldState = worldState;
        this.recursionSystem = recursionSystem;
        
        // NEW: Deep Narrative Engines
        this.psychSystem = new PsychologicalProfileSystem();
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
                if (p.activeFusions && p.activeFusions.includes(fusionTag)) {
                    console.log(`[Story] Fusion Trigger: ${fusionTag} unlocked outcome ${outcome}`);
                    outcomeKey = outcome;
                    break;
                }
            }
        }

        // 3b-2. Check World Event Triggers (The "Living World" Check)
        if (node.worldEventTriggers && outcomeKey === 'DEFAULT') {
            // Check if any active world events match the node's triggers
            const activeEvents = this.worldState.activeEvents || [];
            // activeEvents is an array of objects { type, ... }
            // We check if any active event's TYPE matches the trigger key
            for (const [eventTag, outcome] of Object.entries(node.worldEventTriggers)) {
                if (activeEvents.some(e => e.type === eventTag)) {
                    console.log(`[Story] World Event Trigger: ${eventTag} unlocked outcome ${outcome}`);
                    outcomeKey = outcome;
                    break;
                }
            }
        }

        // 3c. Standard Weight Checks (Fallback)
        if (outcomeKey === 'DEFAULT') {
            if (weights.void > 50 && weights.madness > 20) {
                outcomeKey = 'VOID_INSANITY';
            } else if (weights.light > 50 && weights.heroism > 30) {
                outcomeKey = 'LIGHT_CHAMPION';
            } else if (weights.suspicion > 60) {
                outcomeKey = 'HOSTILE_REJECTION';
            } else if (weights.knowledge.includes('SECRET_TRUTH')) {
                outcomeKey = 'SECRET_REVEAL';
            }
        }

        // 4. Execute the specific logic for that outcome
        const outcome = node.outcomes[outcomeKey] || node.outcomes['DEFAULT'];

        // 5. NPC SOUL OVERRIDE (The "Alive" Check)
        // If the node involves an NPC, their personal mood might override the script.
        if (node.associatedNPC) {
            const npcReaction = this.npcEngine.getNPCReaction(node.associatedNPC, {
                ...context.player,
                psychProfile: this.psychSystem.getProfile()
            });

            // If the NPC hates you, they might refuse to give the "Success" outcome
            // CHANGED: Now overrides any non-failure outcome. Hostility is pervasive.
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
            
            // If they love you, they might give extra dialogue
            if (npcReaction.state === 'ALLY' || npcReaction.state === 'DEVOTED') {
                 // Ensure we don't duplicate if the dialogue is already there
                 if (!outcome.dialogue.includes(npcReaction.dialogue)) {
                     outcome.dialogue = `${npcReaction.dialogue} ${outcome.dialogue}`;
                 }
            }
        }

        return this._finalizeOutcome(node, outcome, context);
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

    _finalizeOutcome(node, outcome, context) {
        // Apply side effects to the narrative state
        if (outcome.narrativeShift) {
            this.narrativeState.suspicion += (outcome.narrativeShift.suspicion || 0);
            this.narrativeState.insight += (outcome.narrativeShift.insight || 0);
        }

        // Construct the final response object
        return {
            nodeId: node.id,
            title: outcome.title || node.title, // Allow outcome to override title (e.g. Meta Events)
            outcomeType: outcome.type || 'STANDARD',
            dialogue: outcome.dialogue, 
            rewards: outcome.rewards || [],
            worldUpdates: outcome.worldUpdates || [], 
            nextNodes: outcome.nextNodes || [],
            metaData: outcome.metaData || {} // Pass meta-data for system checks
        };
    }

    _initializeDatabase() {
        return {
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
    }
}
