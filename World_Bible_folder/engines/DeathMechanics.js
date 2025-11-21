/**
 * ═══════════════════════════════════════════════════════════════════════════
 * DEATH & RESURRECTION MECHANICS
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * Handles the cycle of death, loss, and rebirth.
 * Inspired by "Souls-like" mechanics but integrated with the World Stability system.
 * 
 * Core Concepts:
 * - The Tether: The player is tethered to existence. Death strains this tether.
 * - Essence Loss: Dying drops collected Essence (XP/Currency).
 * - World Decay: Repeated deaths in a region weaken its Stability.
 * - Nemesis: Enemies that kill you may evolve or become "Empowered".
 * 
 * @version 1.0
 * ═══════════════════════════════════════════════════════════════════════════
 */

export class DeathMechanics {
  constructor() {
    this.bloodstains = new Map(); // regionId -> { essence: number, location: string }
    this.nemesisRegistry = new Map(); // regionId -> { enemyId: string, powerLevel: number }
  }

  /**
   * Process Player Death.
   * @param {Object} playerState - The player's current state.
   * @param {Object} regionData - The region where death occurred.
   * @param {string} killerId - The ID of the enemy/hazard that killed the player.
   */
  handleDeath(playerState, regionData, killerId) {
    // 1. Calculate Loss
    const currentEssence = playerState.resources ? playerState.resources.essence : 0;
    const lostEssence = currentEssence; // Lose 100% of held essence
    
    if (playerState.resources) {
      playerState.resources.essence = 0;
    }

    // 2. Create Bloodstain (Echo of Failure)
    this.bloodstains.set(regionData.id, {
      essence: lostEssence,
      timestamp: Date.now(),
      message: `Here fell the Traveler, slain by ${killerId}.`
    });

    // 3. Nemesis Evolution (If killed by an enemy)
    let nemesisUpdate = null;
    if (killerId && killerId !== 'ENVIRONMENT') {
      const currentNemesis = this.nemesisRegistry.get(regionData.id);
      if (currentNemesis && currentNemesis.enemyId === killerId) {
        currentNemesis.powerLevel += 1;
        nemesisUpdate = `The ${killerId} has grown stronger from your essence! (Lvl ${currentNemesis.powerLevel})`;
      } else {
        this.nemesisRegistry.set(regionData.id, { enemyId: killerId, powerLevel: 1 });
        nemesisUpdate = `A ${killerId} has claimed your power and is now a Nemesis.`;
      }
    }

    // 4. World Stability Consequence
    // Dying thins the veil in that region.
    const stabilityPenalty = 5;
    if (regionData.stability !== undefined) {
      regionData.stability = Math.max(0, regionData.stability - stabilityPenalty);
    }

    // 5. Update Player Stats
    if (!playerState.stats.deaths) playerState.stats.deaths = 0;
    playerState.stats.deaths++;

    return {
      message: "YOU DIED.",
      subtext: "The cycle continues, but the world remembers.",
      lostEssence: lostEssence,
      stabilityPenalty: stabilityPenalty,
      nemesisUpdate: nemesisUpdate,
      respawnPoint: 'ashram_central' // Default respawn
    };
  }

  /**
   * Attempt to recover a bloodstain in the current region.
   */
  recoverBloodstain(playerState, regionId) {
    if (this.bloodstains.has(regionId)) {
      const stain = this.bloodstains.get(regionId);
      
      if (!playerState.resources) playerState.resources = { essence: 0 };
      playerState.resources.essence += stain.essence;
      
      this.bloodstains.delete(regionId);
      
      return {
        success: true,
        recoveredAmount: stain.essence,
        message: "RETRIEVED.",
        subtext: "Your past power returns to you."
      };
    }
    return { success: false };
  }

  /**
   * Check if a Nemesis is present in the region.
   */
  getNemesis(regionId) {
    return this.nemesisRegistry.get(regionId);
  }
}
