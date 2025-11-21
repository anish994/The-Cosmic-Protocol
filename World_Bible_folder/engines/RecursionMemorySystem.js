/**
 * ═══════════════════════════════════════════════════════════════════════════
 * RECURSION MEMORY SYSTEM
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * The "Akashic Record" of the game.
 * Tracks player actions across multiple loops (New Game+ cycles).
 * Enables meta-narrative hooks, déjà vu moments, and karmic consequences.
 * 
 * Core Concepts:
 * - Echoes: Subconscious memories that NPCs retain.
 * - Scars: Permanent world changes that persist across loops.
 * - Karmic Debt: A hidden value that influences luck and event severity.
 * 
 * @version 1.0
 * ═══════════════════════════════════════════════════════════════════════════
 */

import { NarrativeArcHandler } from './NarrativeArcRegistry.js';

export class RecursionMemorySystem {
  constructor(worldState) {
    this.worldState = worldState;
    
    // Initialize or load recursion data
    // Structure: { entityId: { loopId: [ { type, intensity, context, timestamp } ] } }
    this.memory = this.worldState.recursionMemory || {
      loopCount: 1,
      pastDeaths: [], // { location, killer, timestamp }
      entityMemories: {}, // Detailed event log per entity
      fusionUsage: {}, // { fusionId: { count: 0, notableMoments: [] } }
      globalScars: [] // List of regions that are permanently destabilized
    };
    
    this.worldState.recursionMemory = this.memory;

    this.config = {
      degradationRate: 0.1, // 10% intensity loss per loop
      traumaThreshold: 0.8, // Memories above this intensity scar permanently
      dejaVuThreshold: 0.3  // Memories above this trigger vague feelings
    };
  }

  /**
   * Record a significant interaction with an entity.
   * @param {string} entityId - The NPC or Entity ID.
   * @param {string} eventType - 'BETRAYAL', 'KINDNESS', 'DEATH', 'TRADE'.
   * @param {number} intensity - 0.0 to 1.0 (1.0 is traumatic/life-changing).
   * @param {string} context - Flavor text or specific data.
   */
  rememberEvent(entityId, eventType, intensity, context) {
    if (!this.memory.entityMemories[entityId]) {
      this.memory.entityMemories[entityId] = {};
    }

    const entityHistory = this.memory.entityMemories[entityId];
    const currentLoop = this.memory.loopCount;

    if (!entityHistory[currentLoop]) {
      entityHistory[currentLoop] = [];
    }

    const memory = {
      type: eventType,
      intensity: Math.min(1.0, Math.max(0.0, intensity)),
      context: context,
      timestamp: Date.now()
    };

    entityHistory[currentLoop].push(memory);
    
    if (intensity > 0.7) {
      console.log(`[Recursion] SCAR FORMED: ${entityId} will remember '${eventType}' in the next life.`);
    }
  }

  /**
   * Record a player death.
   */
  recordDeath(location, killer) {
    this.memory.pastDeaths.push({
      location,
      killer,
      loop: this.memory.loopCount,
      timestamp: Date.now()
    });
  }

  /**
   * Record usage of a fusion skill, especially if it does something cool.
   */
  rememberFusion(fusionId, moment = null) {
    if (!this.memory.fusionUsage) this.memory.fusionUsage = {};
    if (!this.memory.fusionUsage[fusionId]) {
        this.memory.fusionUsage[fusionId] = { count: 0, notableMoments: [] };
    }
    
    this.memory.fusionUsage[fusionId].count++;
    if (moment) {
        this.memory.fusionUsage[fusionId].notableMoments.push({
            loop: this.memory.loopCount,
            description: moment
        });
    }
  }

  getFusionHistory(fusionId) {
      return (this.memory.fusionUsage && this.memory.fusionUsage[fusionId]) || null;
  }

  /**
   * Get the "Déjà Vu" reaction for an NPC based on ALL past loops.
   * Returns a flavor text and a mechanical modifier.
   */
  getDejaVuReaction(entityId) {
    const history = this.memory.entityMemories[entityId] || {};
    
    // 1. Check for Specific Narrative Arcs first (High Priority)
    // Flatten all past memories for the check
    let allPastMemories = [];
    for (let loop = 1; loop < this.memory.loopCount; loop++) {
        if (history[loop]) {
            allPastMemories = allPastMemories.concat(history[loop]);
        }
    }
    
    const specificArc = NarrativeArcHandler.checkSpecificArcs(entityId, allPastMemories, this.memory.loopCount);
    if (specificArc) {
        return {
            type: 'NARRATIVE_ARC',
            dialogue: specificArc.dialogue,
            modifier: 0, // Arcs handle effects differently usually, but we can map them
            effect: specificArc.effect,
            arcId: specificArc.id
        };
    }

    // If no history and no specific arc, return null
    if (Object.keys(history).length === 0) return null;

    // 2. Fallback to Generic System
    let totalTrauma = 0;
    let totalAffection = 0;
    let strongestMemory = null;

    // Iterate through all PAST loops (exclude current)
    for (let loop = 1; loop < this.memory.loopCount; loop++) {
      if (history[loop]) {
        history[loop].forEach(mem => {
          if (mem.intensity < this.config.dejaVuThreshold) return;

          if (['BETRAYAL', 'DEATH', 'ATTACK', 'THEFT'].includes(mem.type)) {
            totalTrauma += mem.intensity;
          } else if (['KINDNESS', 'AID', 'GIFT', 'ALLIANCE'].includes(mem.type)) {
            totalAffection += mem.intensity;
          }

          if (!strongestMemory || mem.intensity > strongestMemory.intensity) {
            strongestMemory = mem;
          }
        });
      }
    }

    if (totalTrauma === 0 && totalAffection === 0) return null;

    if (totalTrauma > totalAffection) {
      return this._generateTraumaResponse(totalTrauma, strongestMemory);
    } else {
      return this._generateAffectionResponse(totalAffection, strongestMemory);
    }
  }

  _generateTraumaResponse(intensity, memory) {
    let response = { type: 'TRAUMA', intensity: intensity, dialogue: "...", modifier: 0 };
    
    if (intensity > 2.0) {
      response.dialogue = "I... I can't breathe when you're near. Why does my chest hurt?";
      response.modifier = -50; // Major penalty
      response.effect = "REFUSAL_TO_TRADE";
    } else if (intensity > 1.0) {
      response.dialogue = "You seem familiar. Like a nightmare I had once.";
      response.modifier = -20;
      response.effect = "HIGHER_PRICES";
    } else {
      response.dialogue = "Have we met? I feel a chill.";
      response.modifier = -10;
      response.effect = "UNEASY";
    }

    if (memory && memory.intensity > 0.9) {
      response.specificRecall = `Subconscious Echo: ${memory.context}`;
    }

    return response;
  }

  _generateAffectionResponse(intensity, memory) {
    let response = { type: 'SOUL_BOND', intensity: intensity, dialogue: "...", modifier: 0 };

    if (intensity > 2.0) {
      response.dialogue = "My soul sings when you approach. Old friend... is that you?";
      response.modifier = 50; // Major bonus
      response.effect = "DISCOUNT_MAX";
    } else if (intensity > 1.0) {
      response.dialogue = "I feel strangely safe with you. Like we've shared a campfire a thousand times.";
      response.modifier = 20;
      response.effect = "DISCOUNT_SMALL";
    } else {
      response.dialogue = "You have a kind face. I feel I can trust you.";
      response.modifier = 10;
      response.effect = "FRIENDLY";
    }

    return response;
  }

  /**
   * Trigger a Loop Reset (New Game+).
   * Archives current state and increments loop count.
   */
  triggerLoopReset() {
    this.memory.loopCount++;
    
    // Degrade memories
    this._degradeMemories();

    return {
      message: `LOOP ${this.memory.loopCount} INITIATED.`,
      subtext: "The world resets, but the scars remain."
    };
  }

  _degradeMemories() {
    const allEntities = this.memory.entityMemories;
    for (const entityId in allEntities) {
      const loops = allEntities[entityId];
      for (const loopId in loops) {
        loops[loopId].forEach(mem => {
          // Traumatic memories fade slower
          if (mem.intensity > this.config.traumaThreshold) {
            mem.intensity -= (this.config.degradationRate * 0.2);
          } else {
            mem.intensity -= this.config.degradationRate;
          }
          // Clamp to 0
          if (mem.intensity < 0) mem.intensity = 0;
        });
      }
    }
  }

  /**
   * Inject a "Glitch" event based on past loops.
   */
  checkForGlitch(regionId) {
    // If the player died here often in the past
    const deathsHere = this.memory.pastDeaths.filter(d => d.location === regionId).length;
    
    if (deathsHere > 2) {
      return {
        active: true,
        type: 'MEMORY_LEAK',
        description: 'The air shimmers. You see ghostly outlines of your own corpse littering the ground.',
        effect: 'FEAR_AURA' // Debuff
      };
    }
    return { active: false };
  }

  /**
   * Checks if a specific "World Scar" exists (e.g., did the player burn the Great Tree in a past life?)
   */
  hasWorldScar(scarId) {
      return this.memory.globalScars.includes(scarId);
  }

  addWorldScar(scarId) {
      if (!this.memory.globalScars.includes(scarId)) {
          this.memory.globalScars.push(scarId);
          console.log(`[Recursion] The world is permanently scarred: ${scarId}`);
      }
  }
}
