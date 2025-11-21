import { EventBus } from './GlobalEventBus.js';

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
  constructor(factionSystem) { // Inject FactionSystem
    this.factionSystem = factionSystem;
    this.globalState = {
      chaos: 10,       // 0-100: Affects enemy spawn rates and event severity
      stability: 80,   // 0-100: Affects trade prices and safe zone integrity
      economy: 1.0,    // 0.5-2.0: Global price multiplier
      dominantResonance: 'NEUTRAL', // The current "weather" of the world
      turnCount: 0
    };

    // this.factions = new Map();
    // this.initializeFactions(); // REMOVED: Use FactionSystem instead
  }

  // initializeFactions() { ... } // REMOVED

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

    // Sync with FactionSystem
    if (this.factionSystem) {
        // Update local cache or just use FactionSystem directly
        // For now, we'll iterate the FactionSystem's data
        Object.values(this.factionSystem.factions).forEach(f => {
            // Logic that was previously in this.factions.forEach
            // We need to adapt it to the new FactionSystem structure
            this._processFactionLogic(f, regions, updates, regionDatabase);
        });
    }

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

    // 2. Faction Simulation (REPLACED by _processFactionLogic above)
    /*
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
    */

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

  _processFactionLogic(faction, regions, updates, regionDatabase) {
      // Resource Generation based on controlled regions
      const controlledRegions = regions.filter(r => r.controllingFaction === faction.id);
      const income = controlledRegions.length * 10;
      faction.power += (income / 100); // Convert resources to power for now

      // Faction Actions based on State
      if (faction.state === 'EXPANSIONIST' && faction.power > 60) {
        // Try to expand to a neighbor
        const target = this.findExpansionTarget(faction.id, controlledRegions, regionDatabase);
        if (target) {
          updates.push(`Faction Move: ${faction.name} is attempting to seize control of ${target.name}.`);
          EventBus.emit('FACTION_MOVE_TRIGGERED', { factionId: faction.id, targetRegion: target.id });
          faction.power -= 5; // Cost of war
        }
      }
  }
}
