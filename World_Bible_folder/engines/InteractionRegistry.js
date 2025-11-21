/**
 * ═══════════════════════════════════════════════════════════════════════════
 * INTERACTION REGISTRY
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * Centralized database for specific Skill-World interactions.
 * Decouples the logic from the main engine to allow for easy expansion.
 * 
 * @version 1.0
 * ═══════════════════════════════════════════════════════════════════════════
 */

export const InteractionRegistry = [
  // --- PURIFICATION SYNERGIES ---
  {
    id: 'purify_gardens',
    skillId: 'healing_bloom',
    targetRegionId: 'ashram_gardens',
    condition: (region) => region.corruption > 0,
    effect: (region) => {
      region.corruption = 0;
      region.type = 'SACRED';
      return {
        result: 'PURIFIED_GARDEN',
        description: 'The Healing Bloom takes root! The corruption is purged instantly, restoring the gardens to their ancient glory.'
      };
    }
  },
  {
    id: 'purify_archives',
    skillId: 'light_beam',
    targetRegionId: 'ashram_archives',
    condition: (region) => region.corruption > 30,
    effect: (region) => {
      region.corruption -= 30;
      return {
        result: 'CLEANSED_ARCHIVES',
        description: 'The holy light burns away the dust shadows, revealing clearer text on the ancient spines.'
      };
    }
  },

  // --- VOID SYNERGIES ---
  {
    id: 'void_bypass_lock',
    skillId: 'void_step',
    targetRegionId: null, // Applies to any region
    condition: (region) => region.isLocked === true,
    effect: (region) => {
      // Note: Doesn't permanently unlock, just bypasses for this interaction context usually, 
      // but for this engine simplicity we might just say it allows entry or unlocks it.
      // Let's say it temporarily bypasses.
      return {
        result: 'BYPASS_LOCK',
        description: `You step through the void, bypassing the physical locks of ${region.name}.`
      };
    }
  },
  {
    id: 'void_rift_stabilize',
    skillId: 'void_anchor',
    targetRegionId: 'void_rift_alpha',
    condition: (region) => region.stability < 50,
    effect: (region) => {
      region.stability += 20;
      return {
        result: 'STABILIZED_RIFT',
        description: 'The anchor catches on the fabric of reality, pulling the rift shut slightly.'
      };
    }
  },

  // --- NATURE SYNERGIES ---
  {
    id: 'overgrow_ruins',
    skillId: 'wild_growth',
    targetRegionId: null,
    condition: (region) => region.type === 'RUINS',
    effect: (region) => {
      region.type = 'OVERGROWN_RUINS';
      region.description = `[OVERGROWN] ${region.description}`;
      return {
        result: 'OVERGROWTH',
        description: 'Vines explode from the cracks, turning the dead stone into a living garden.'
      };
    }
  },

  // --- CHRONO SYNERGIES ---
  {
    id: 'restore_statue',
    skillId: 'chronal_rewind',
    targetObjectId: 'broken_statue', // Specific object
    condition: (region, object) => object.status === 'BROKEN',
    effect: (region, object) => {
      object.status = 'RESTORED';
      return {
        result: 'RESTORED_OBJECT',
        description: 'You rewind time for the statue, restoring it to its pristine form.'
      };
    }
  },
  {
    id: 'echo_view',
    skillId: 'chronal_vision',
    targetRegionId: 'wanderers_echo',
    condition: (region) => true,
    effect: (region) => {
      return {
        result: 'ECHO_REVEALED',
        description: 'The ghosts of the past become visible. You see the moment the bomb fell.'
      };
    }
  },

  // --- INFERNAL SYNERGIES ---
  {
    id: 'burn_obstacles',
    skillId: 'infernal_blast',
    targetObjectId: 'thorny_vines',
    condition: (region, object) => object.status === 'BLOCKING',
    effect: (region, object) => {
      object.status = 'BURNT';
      return {
        result: 'OBSTACLE_CLEARED',
        description: 'The vines scream as they turn to ash. The path is clear.'
      };
    }
  },

  // --- ASTRAL SYNERGIES ---
  {
    id: 'commune_with_monolith',
    skillId: 'star_call',
    targetObjectId: 'alien_monolith',
    condition: (region, object) => object.status === 'DORMANT',
    effect: (region, object) => {
      object.status = 'ACTIVE';
      return {
        result: 'MONOLITH_AWAKENED',
        description: 'The monolith hums a deep note that vibrates in your teeth. It is listening.'
      };
    }
  }
];

export class InteractionHandler {
  static checkSynergy(skill, region, targetObjectId) {
    // Find matching synergy
    const synergy = InteractionRegistry.find(entry => {
      // Check Skill Match
      if (entry.skillId !== skill.id) return false;

      // Check Region Match (if specified)
      if (entry.targetRegionId && entry.targetRegionId !== region.id) return false;

      // Check Object Match (if specified)
      if (entry.targetObjectId && entry.targetObjectId !== targetObjectId) return false;

      // Check Custom Condition
      const targetObject = region.interactables ? region.interactables.find(i => i.id === targetObjectId) : null;
      return entry.condition(region, targetObject);
    });

    if (synergy) {
      const targetObject = region.interactables ? region.interactables.find(i => i.id === targetObjectId) : null;
      return { success: true, ...synergy.effect(region, targetObject) };
    }

    return null;
  }
}
