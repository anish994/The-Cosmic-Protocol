/**
 * ═══════════════════════════════════════════════════════════════════════════
 * WORLD STABILITY & TRANSFORMATION SYSTEM
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * Handles the long-term consequences of player actions and resonance clashes.
 * - Tracks "Stability" per region.
 * - Triggers permanent biome transformations (e.g., Sacred -> Void).
 * - Manages the "Nemesis" evolution of NPCs.
 * 
 * @version 1.0
 * ═══════════════════════════════════════════════════════════════════════════
 */

export class WorldStabilitySystem {
  constructor() {
    // Thresholds for transformation
    this.FRACTURE_THRESHOLD = 0; // If stability hits 0, region fractures
    this.CORRUPTION_THRESHOLD = 100; // If corruption hits 100, region transforms
  }

  /**
   * Apply stress to a region's stability based on resonance interaction.
   * @param {Object} regionData - The region object.
   * @param {string} effectType - 'AGITATE', 'SOOTHE', 'STABILIZE'
   * @param {string} intensity - 'LOW', 'MEDIUM', 'HIGH', 'CRITICAL'
   * @returns {Object} - Result of the stability change { transformed: boolean, newType: string, message: string }
   */
  applyStabilityChange(regionData, effectType, intensity) {
    // Ensure region has stability metric (default 100 if not present)
    if (regionData.stability === undefined) regionData.stability = 100;

    let change = 0;
    let message = '';

    // Calculate Change
    switch (effectType) {
      case 'AGITATE':
        change = intensity === 'CRITICAL' ? -20 : (intensity === 'HIGH' ? -10 : -5);
        message = `The reality of ${regionData.name} fractures slightly.`;
        break;
      case 'SOOTHE':
        change = intensity === 'CRITICAL' ? 10 : 5;
        message = `The atmosphere in ${regionData.name} settles.`;
        break;
      case 'STABILIZE':
        change = 15;
        message = `You reinforce the laws of physics in ${regionData.name}.`;
        break;
    }

    // Apply Change
    regionData.stability = Math.max(0, Math.min(100, regionData.stability + change));

    // Check for Fracture/Transformation
    if (regionData.stability <= this.FRACTURE_THRESHOLD) {
      return this.triggerFracture(regionData);
    }

    return { transformed: false, stability: regionData.stability, message: message };
  }

  /**
   * Handle the permanent transformation of a region.
   */
  triggerFracture(regionData) {
    const oldType = regionData.type;
    let newType = oldType;
    let description = '';

    // Transformation Logic
    if (regionData.corruption > 80) {
      newType = 'VOID_ZONE';
      description = `The reality of ${regionData.name} has collapsed under the weight of corruption and agitation. It is now a Void Zone.`;
      regionData.corruption = 100; // Max corruption
    } else if (regionData.corruption < 20 && regionData.controllingFaction === 'ashram_remnants') {
      newType = 'CRYSTALLIZED';
      description = `The order in ${regionData.name} has become absolute. The air freezes into geometric patterns.`;
      regionData.mechanics = [...(regionData.mechanics || []), 'STASIS_FIELD'];
    } else if (regionData.type === 'SACRED' || regionData.type === 'NATURE') {
      newType = 'OVERGROWN';
      description = `Life in ${regionData.name} has grown unchecked, consuming all structures.`;
      regionData.mechanics = [...(regionData.mechanics || []), 'TANGLED_ROOTS'];
    } else {
      newType = 'RUINS'; // Default degradation
      description = `The structural integrity of ${regionData.name} has failed. It is now a desolate Ruin.`;
    }

    // Apply Transformation
    regionData.type = newType;
    regionData.stability = 50; // Reset stability to mid-point of new form
    regionData.description = `[FRACTURED] ${regionData.description}`;
    
    // Add permanent hazard
    if (!regionData.mechanics) regionData.mechanics = [];
    regionData.mechanics.push('REALITY_TEAR');

    return { 
      transformed: true, 
      newType: newType, 
      message: `CRITICAL EVENT: ${description}` 
    };
  }
}
