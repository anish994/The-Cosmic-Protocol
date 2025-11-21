/**
 * ═══════════════════════════════════════════════════════════════════════════
 * WORLD ECOSYSTEM ENGINE
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * Handles the "Living World" simulation:
 * - Global World State (Chaos, Economy, Resonance)
 * - Faction AI & Resource Management
 * - Ecological Balance (Corruption vs Nature)
 * - Dynamic World Events based on aggregate state
 * 
 * This engine runs in parallel with the Exploration Engine to create
 * a closed loop of cause-and-effect.
 * 
 * @version 1.0
 * ═══════════════════════════════════════════════════════════════════════════
 */

export class WorldEcosystem {
  constructor() {
    this.globalState = {
      chaos: 10,       // 0-100: Affects enemy spawn rates and event severity
      stability: 80,   // 0-100: Affects trade prices and safe zone integrity
      economy: 1.0,    // 0.5-2.0: Global price multiplier
      dominantResonance: 'NEUTRAL', // The current "weather" of the world
      turnCount: 0
    };

    this.factions = new Map();
    this.initializeFactions();
  }

  initializeFactions() {
    this.factions.set('ashram_remnants', { 
      name: 'Ashram Remnants', 
      power: 80, 
      aggression: 20, 
      resources: 500,
      goals: ['STABILIZE', 'DEFEND']
    });
    this.factions.set('post_human_cults', { 
      name: 'Post-Human Cults', 
      power: 60, 
      aggression: 80, 
      resources: 300,
      goals: ['EXPAND', 'CORRUPT']
    });
    this.factions.set('nomadic_relic_seekers', { 
      name: 'Relic Seekers', 
      power: 50, 
      aggression: 30, 
      resources: 200,
      goals: ['SCAVENGE', 'SURVIVE']
    });
    this.factions.set('corruption_champions', { 
      name: 'Corruption Champions', 
      power: 90, 
      aggression: 90, 
      resources: 1000, // Corruption is their resource
      goals: ['DESTROY', 'CONSUME']
    });
    this.factions.set('factionless', {
      name: 'Factionless',
      power: 10,
      aggression: 10,
      resources: 100,
      goals: ['SURVIVE']
    });
  }

  /**
   * Process a single turn of the ecosystem simulation.
   * @param {Object} regionDatabase - The full map data from WorldExplorationEngine
   * @param {number} loopCount - The current recursion loop number.
   * @returns {string[]} - A list of significant world events that occurred.
   */
  processTurn(regionDatabase, loopCount = 1) {
    this.globalState.turnCount++;
    const updates = [];
    const regions = Object.values(regionDatabase);

    // Recursion Effects: The world degrades with each reset
    if (loopCount > 1) {
        // Higher loops increase chaos naturally
        this.globalState.chaos = Math.min(100, this.globalState.chaos + (loopCount * 0.1));
        
        if (Math.random() < (loopCount * 0.05)) {
            updates.push(`[GLITCH] The fabric of reality thins. Loop ${loopCount} instability detected.`);
        }
    }

    // 1. Calculate Global Resonance & Chaos
    this.updateGlobalMetrics(regions);
    if (this.globalState.turnCount % 5 === 0) {
      updates.push(`Global Resonance Shift: The world aligns with ${this.globalState.dominantResonance}.`);
    }

    // 2. Faction Simulation
    this.factions.forEach((faction, id) => {
      // Resource Generation based on controlled regions
      const controlledRegions = regions.filter(r => r.controllingFaction === id);
      const income = controlledRegions.length * 10;
      faction.resources += income;

      // Faction Actions
      if (faction.goals.includes('EXPAND') && faction.resources > 100) {
        // Try to expand to a neighbor
        const target = this.findExpansionTarget(id, controlledRegions, regionDatabase);
        if (target) {
          updates.push(`Faction Move: ${faction.name} is attempting to seize control of ${target.name}.`);
          // In a full game, this would trigger a conflict state or quest
          faction.resources -= 50;
        }
      }
    });

    // 3. Economic Shift
    // If safe zones (Ashram) are corrupted, economy crashes (prices go up)
    const ashram = regionDatabase['ashram_central'];
    if (ashram && ashram.corruption > 30) {
      this.globalState.economy = 1.5;
      updates.push("Economic Alert: Corruption in Ashram is driving up prices!");
    } else {
      this.globalState.economy = 1.0;
    }

    // 4. Ecological Balance (Creature Populations)
    // Abstracted: High Chaos = More Void Entities
    if (this.globalState.chaos > 70) {
      updates.push("Ecological Warning: Void Entity populations are surging.");
    }

    return updates;
  }

  updateGlobalMetrics(regions) {
    let totalCorruption = 0;
    let totalRegions = regions.length;
    
    regions.forEach(r => totalCorruption += r.corruption);
    const avgCorruption = totalCorruption / totalRegions;

    // Update Chaos
    this.globalState.chaos = Math.floor(avgCorruption);

    // Update Dominant Resonance
    if (avgCorruption > 60) this.globalState.dominantResonance = 'VOID';
    else if (avgCorruption < 20) this.globalState.dominantResonance = 'LIGHT';
    else this.globalState.dominantResonance = 'NEUTRAL';
  }

  findExpansionTarget(factionId, controlledRegions, regionDatabase) {
    // Find a region connected to a controlled region that isn't owned by us
    for (const region of controlledRegions) {
      for (const connId of region.connections) {
        const target = regionDatabase[connId];
        if (target && target.controllingFaction !== factionId) {
          return target;
        }
      }
    }
    return null;
  }
}
