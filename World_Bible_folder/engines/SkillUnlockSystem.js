/**
 * ═══════════════════════════════════════════════════════════════════════════
 * SKILL UNLOCK SYSTEM
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * Bridges the gap between Gameplay (World/Story) and the Meta-Game (Card Creator).
 * Handles the discovery and unlocking of new skills based on:
 * - Faction Reputation
 * - Hidden Secrets
 * - Quest/Event Resolutions
 * - Environmental Feats
 * 
 * @version 1.0
 * ═══════════════════════════════════════════════════════════════════════════
 */

export class SkillUnlockSystem {
  constructor(playerState) {
    this.playerState = playerState; // Expected to have { unlockedSkills: [], reputation: {}, questLog: [] }
    
    // Database of Unlockable Skills and their Requirements
    this.unlockDatabase = [
      {
        skillId: 'void_anchor',
        name: 'Void Anchor',
        type: 'SECRET',
        description: 'A technique to ground oneself against entropy.',
        requirement: { type: 'INTERACTION', targetId: 'temporal_glitch', regionId: 'void_rift_alpha' },
        flavorText: 'Found etched into the bedrock of the first tear.'
      },
      {
        skillId: 'seekers_sight',
        name: 'Seeker\'s Sight',
        type: 'FACTION',
        description: 'Passive ability to spot hidden relics.',
        requirement: { type: 'REPUTATION', factionId: 'nomadic_relic_seekers', threshold: 50 },
        flavorText: 'Trusted only to those who respect the old ways.'
      },
      {
        skillId: 'storm_weathering',
        name: 'Storm Weathering',
        type: 'FEAT',
        description: 'Resistance to environmental hazards.',
        requirement: { type: 'EVENT_SURVIVAL', eventType: 'ENVIRONMENTAL', count: 1 },
        flavorText: 'Learned by surviving the Void Storms of the deep wilds.'
      },
      {
        skillId: 'echo_displacement',
        name: 'Echo Displacement',
        type: 'QUEST',
        description: 'Phase shift to avoid damage.',
        requirement: { type: 'QUEST_COMPLETE', questId: 'secrets_of_the_library' },
        flavorText: 'Recovered from the forbidden archives.'
      },
      // FUSION SKILLS
      {
        skillId: 'void_storm_conduit',
        name: 'Void Storm Conduit',
        type: 'FUSION',
        description: 'Channel the entropy of a storm into raw power.',
        requirement: { type: 'EVENT_SURVIVAL', eventType: 'FUSION_TRIAL_STORM' },
        flavorText: 'You stood in the eye of the void storm and did not blink.'
      },
      {
        skillId: 'chronal_vision',
        name: 'Chronal Vision',
        type: 'FUSION',
        description: 'See the past and future simultaneously.',
        requirement: { type: 'INTERACTION', targetId: 'fusion_console', regionId: 'nexus_gate' },
        flavorText: 'Time is not a river, but an ocean. You learned to swim.'
      },
      // NEW: QUEST UNLOCKS
      {
        skillId: 'healing_bloom',
        name: 'Healing Bloom',
        type: 'QUEST',
        description: 'A powerful restoration spell that can purify corruption.',
        requirement: { type: 'QUEST_COMPLETE', questId: 'purify_ashram_gardens' },
        flavorText: 'Gifted by the spirits of the garden for restoring their sanctuary.'
      },
      {
        skillId: 'void_step',
        name: 'Void Step',
        type: 'QUEST',
        description: 'Teleport short distances through the void.',
        requirement: { type: 'QUEST_COMPLETE', questId: 'survive_the_rift' },
        flavorText: 'You walked into the abyss and it blinked first.'
      },
      // NEW: FACTION UNLOCKS
      {
        skillId: 'relic_overcharge',
        name: 'Relic Overcharge',
        type: 'FACTION',
        description: 'Boost the power of artifact-based skills.',
        requirement: { type: 'REPUTATION', factionId: 'nomadic_relic_seekers', threshold: 80 },
        flavorText: 'A secret technique of the master scavengers.'
      },
      {
        skillId: 'entropy_shield',
        name: 'Entropy Shield',
        type: 'FACTION',
        description: 'Absorb corruption to power a defensive barrier.',
        requirement: { type: 'REPUTATION', factionId: 'corruption_champions', threshold: 50 },
        flavorText: 'To fight the void, one must wear it.'
      },
      // NEW: SECRET UNLOCKS
      {
        skillId: 'ancient_wisdom',
        name: 'Ancient Wisdom',
        type: 'SECRET',
        description: 'Passive boost to lore acquisition.',
        requirement: { type: 'INTERACTION', targetId: 'hidden_archive_key', regionId: 'ashram_archives' },
        flavorText: 'Knowledge hidden in the dust of ages.'
      },
      // --- EXPANDED UNLOCKS ---
      {
        skillId: 'crystal_skin',
        name: 'Crystal Skin',
        type: 'EVENT_SURVIVAL',
        description: 'Reflect beam attacks.',
        requirement: { type: 'EVENT_SURVIVAL', eventType: 'CRYSTAL_STORM', count: 1 },
        flavorText: 'Your skin hardened under the geometric hail.'
      },
      {
        skillId: 'root_strangle',
        name: 'Root Strangle',
        type: 'INTERACTION',
        description: 'Immobilize enemies with vines.',
        requirement: { type: 'INTERACTION', targetId: 'ancient_tree_heart', regionId: 'deep_wilds' },
        flavorText: 'The forest taught you how to hold on.'
      },
      {
        skillId: 'market_negotiator',
        name: 'Market Negotiator',
        type: 'REPUTATION',
        description: 'Better prices at vendors.',
        requirement: { type: 'REPUTATION', factionId: 'ashram_remnants', threshold: 30 },
        flavorText: 'Silver tongue, golden pockets.'
      },
      {
        skillId: 'void_walker',
        name: 'Void Walker',
        type: 'QUEST',
        description: 'Move undetected in Void Zones.',
        requirement: { type: 'QUEST_COMPLETE', questId: 'path_of_shadows' },
        flavorText: 'You are the shadow that moves.'
      }
    ];
  }

  /**
   * Check for unlocks based on a specific trigger context
   * @param {string} triggerType - 'INTERACTION', 'REPUTATION', 'EVENT_SURVIVAL', 'QUEST_COMPLETE'
   * @param {Object} context - Data relevant to the trigger (e.g., { targetId: '...', factionId: '...' })
   * @returns {Object[]} - List of newly unlocked skills
   */
  checkUnlocks(triggerType, context) {
    const newUnlocks = [];
    const playerState = context.playerState;

    if (!playerState || !playerState.unlockedSkills) {
      console.warn("SkillUnlockSystem: playerState or unlockedSkills missing in context.");
      return [];
    }

    this.unlockDatabase.forEach(skill => {
      // Skip if already unlocked
      if (playerState.unlockedSkills.includes(skill.skillId)) return;

      let unlocked = false;

      if (skill.requirement.type === triggerType) {
        switch (triggerType) {
          case 'INTERACTION':
            if (skill.requirement.targetId === context.targetId && 
                (!skill.requirement.regionId || skill.requirement.regionId === context.regionId)) {
              unlocked = true;
            }
            break;
          
          case 'REPUTATION':
            // context expected: { factionId: '...', value: 55 }
            if (skill.requirement.factionId === context.factionId && 
                context.value >= skill.requirement.threshold) {
              unlocked = true;
            }
            break;

          case 'EVENT_SURVIVAL':
            // context expected: { eventType: 'ENVIRONMENTAL' }
            if (skill.requirement.eventType === context.eventType) {
              unlocked = true;
            }
            break;

          case 'QUEST_COMPLETE':
            if (skill.requirement.questId === context.questId) {
              unlocked = true;
            }
            break;
        }
      }

      if (unlocked) {
        playerState.unlockedSkills.push(skill.skillId);
        newUnlocks.push(skill.skillId); // Return ID or object? Let's return ID for simplicity in logs
      }
    });

    return newUnlocks;
  }
}
