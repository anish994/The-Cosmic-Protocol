/**
 * ═══════════════════════════════════════════════════════════════════════════
 * PREMIUM SYSTEM CONFIGURATION
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * Central configuration for all premium enhancement systems.
 * Adjust these values to tune the game experience without editing core code.
 * 
 * @version 1.0
 * ═══════════════════════════════════════════════════════════════════════════
 */

export const PREMIUM_CONFIG = {
  
  // ═══════════════════════════════════════════════════════════════════════
  // CONTEXT MODIFIERS - How much context affects skill power
  // ═══════════════════════════════════════════════════════════════════════
  
  contextModifiers: {
    // Time-based multipliers
    temporal: {
      MIDNIGHT: { shadow: 1.5, void: 1.5, light: 0.7 },
      NIGHT: { shadow: 1.25, void: 1.2, light: 0.8 },
      DAWN: { light: 1.3, divine: 1.2, shadow: 0.9 },
      NOON: { light: 1.25, fire: 1.2, shadow: 0.7 },
      DUSK: { shadow: 1.15, void: 1.1, neutral: 1.05 }
    },
    
    // Location-based multipliers
    spatial: {
      SACRED: { divine: 1.4, light: 1.4, corruption: 0.6 },
      RUINS: { foundational: 1.2, arcane: 1.2 },
      VOID_ZONE: { void: 1.5, corruption: 1.3, stability: 0.5 },
      URBAN: { foundational: 1.3, technology: 1.2 },
      WILDERNESS: { nature: 1.3, primal: 1.2 },
      UNDERMIGHT: { shadow: 1.2, void: 1.15, corruption: 1.1 }
    },
    
    // Weather-based multipliers
    environmental: {
      STORM: { lightning: 1.4, water: 1.3, fire: 0.7 },
      RAIN: { water: 1.3, lightning: 1.2, fire: 0.6 },
      FOG: { shadow: 1.2, illusion: 1.3, visibility: 0.7 },
      CLEAR: { light: 1.1, all: 1.0 },
      UNSTABLE_REALITY: { void: 1.5, unstableChance: 0.5 }
    },
    
    // Corruption-based effects
    corruption: {
      thresholds: {
        LOW: { max: 20, powerBonus: 1.0, unstableChance: 0.01 },
        MODERATE: { max: 40, powerBonus: 1.1, unstableChance: 0.05 },
        HIGH: { max: 60, powerBonus: 1.2, unstableChance: 0.15 },
        SEVERE: { max: 80, powerBonus: 1.3, unstableChance: 0.30 },
        EXTREME: { max: 100, powerBonus: 1.5, unstableChance: 0.50 }
      }
    }
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CRITICAL HIT SYSTEM
  // ═══════════════════════════════════════════════════════════════════════
  
  criticalHits: {
    baseCritChance: 0.05, // 5% base crit chance
    critMultiplier: 2.0, // Crits do 2x damage
    
    // Bonus crit chances from conditions
    bonuses: {
      MIDNIGHT_VOID: 0.15,
      SACRED_DIVINE: 0.10,
      DAWN_LIGHT: 0.10,
      PERFECT_ALIGNMENT: 0.20, // Skill alignment matches all context
      HIGH_MASTERY: 0.10 // Mastery level > 75
    }
  },

  // ═══════════════════════════════════════════════════════════════════════
  // UNSTABLE EFFECTS - Chaos from high corruption
  // ═══════════════════════════════════════════════════════════════════════
  
  unstableEffects: {
    enabled: true,
    baseUnstableChance: 0.02, // 2% base unstable chance
    
    // Different types of unstable effects
    types: [
      {
        id: 'REALITY_TEAR',
        name: 'Reality Tear',
        description: 'A tear in reality crackles at the impact point',
        effect: 'area_damage',
        severity: 'moderate'
      },
      {
        id: 'TEMPORAL_ECHO',
        name: 'Temporal Echo',
        description: 'The skill echoes through time, striking twice',
        effect: 'double_cast',
        severity: 'beneficial'
      },
      {
        id: 'VOID_SURGE',
        name: 'Void Surge',
        description: 'Void energy erupts, damaging friend and foe alike',
        effect: 'aoe_chaos',
        severity: 'severe'
      },
      {
        id: 'CORRUPTION_SPREAD',
        name: 'Corruption Spread',
        description: 'Corruption spreads from the point of impact',
        effect: 'corruption_aura',
        severity: 'severe'
      },
      {
        id: 'SKILL_MUTATION',
        name: 'Skill Mutation',
        description: 'The skill mutates mid-cast, producing unexpected results',
        effect: 'random_effect',
        severity: 'chaotic'
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════
  // SKILL EVOLUTION SYSTEM
  // ═══════════════════════════════════════════════════════════════════════
  
  evolution: {
    masteryLevels: {
      0: { stage: 'Novice', bonuses: {} },
      10: { stage: 'Novice', bonuses: { critChance: 0.02 } },
      25: { stage: 'Apprentice', bonuses: { critChance: 0.03, costReduction: 0.10 } },
      50: { stage: 'Adept', bonuses: { critChance: 0.05, costReduction: 0.15, power: 1.05 } },
      75: { stage: 'Expert', bonuses: { critChance: 0.08, costReduction: 0.20, power: 1.10 } },
      90: { stage: 'Master', bonuses: { critChance: 0.10, costReduction: 0.25, power: 1.15, refundChance: 0.20 } },
      100: { stage: 'Transcendent', bonuses: { critChance: 0.15, costReduction: 0.30, power: 1.25, refundChance: 0.30 } }
    },
    
    // How quickly mastery increases
    masteryGainRates: {
      COMBAT: 2.0, // Combat gives 2x mastery
      BOSS_FIGHT: 3.0,
      TRAINING: 1.0,
      EXPLORATION: 0.5,
      CRAFTING: 1.5
    },
    
    // Memorable moment thresholds
    memorableMoments: {
      FIRST_USE: { description: 'First time using this skill', significance: 'milestone' },
      FIRST_CRIT: { description: 'First critical hit', significance: 'achievement' },
      UNSTABLE_SURVIVED: { description: 'Survived an unstable effect', significance: 'danger' },
      PERFECT_EXECUTION: { description: 'Executed with 100% contextual synergy', significance: 'mastery' },
      BOSS_KILL: { description: 'Defeated a boss with this skill', significance: 'legendary' }
    }
  },

  // ═══════════════════════════════════════════════════════════════════════
  // WORLD STATE SYSTEM
  // ═══════════════════════════════════════════════════════════════════════
  
  worldState: {
    // When do changes become permanent?
    permanenceThresholds: {
      LOW_TIER: { minTier: 0, usesRequired: 1, isPermanent: false },
      MID_TIER: { minTier: 2, usesRequired: 1, isPermanent: true },
      HIGH_TIER: { minTier: 3, usesRequired: 1, isPermanent: true },
      LEGENDARY: { minTier: 4, usesRequired: 1, isPermanent: true, createLandmark: true }
    },
    
    // Landmark creation
    landmarks: {
      usesRequiredForCreation: 10, // Every 10 uses creates a landmark
      permanentBonus: 0.05, // Landmarks give +5% to that skill in the area
      maxLandmarksPerLocation: 5,
      decayTime: null // null = never decay
    },
    
    // Corruption spreading
    corruptionSpread: {
      enabled: true,
      baseSpreadRate: 0.1, // Skills increase location corruption by 0.1% base
      voidSkillMultiplier: 5.0, // Void skills spread 5x faster
      divinePurificationRate: -0.5 // Divine skills reduce corruption
    }
  },

  // ═══════════════════════════════════════════════════════════════════════
  // NPC MEMORY SYSTEM
  // ═══════════════════════════════════════════════════════════════════════
  
  npcMemory: {
    memoryCapacity: 100, // NPCs remember last 100 skill uses
    relationshipImpactRates: {
      TRUST: {
        HEALING_SKILL: 5,
        SUPPORT_SKILL: 3,
        COMBAT_SKILL: -1,
        VOID_SKILL: -5
      },
      FEAR: {
        HIGH_TIER_SKILL: 5,
        VOID_SKILL: 10,
        UNSTABLE_EFFECT: 15,
        COMBAT_SKILL: 2
      },
      RESPECT: {
        SUCCESSFUL_SKILL: 2,
        CRITICAL_HIT: 5,
        HIGH_MASTERY: 3,
        COMPLEX_FUSION: 8
      }
    },
    
    // Dialogue generation
    dialogue: {
      updateFrequency: 'EVERY_INTERACTION', // or 'SIGNIFICANT_EVENTS'
      referencePastSkills: true,
      emotionalRange: 'DYNAMIC', // or 'STATIC'
      personalityInfluence: 'HIGH' // or 'MODERATE', 'LOW'
    }
  },

  // ═══════════════════════════════════════════════════════════════════════
  // LORE GENERATION
  // ═══════════════════════════════════════════════════════════════════════
  
  lore: {
    // When to show different lore types
    loreSelectionRules: {
      FIRST_USE: 'discoveryMoment',
      LOW_MASTERY: 'origin', // < 25 mastery
      MID_MASTERY: 'masteryPath', // 25-75 mastery
      HIGH_MASTERY: 'transcendence', // > 75 mastery
      HIGH_CORRUPTION: 'warnings' // > 60 corruption
    },
    
    // Lore depth by tier
    loreDepthByTier: {
      0: { words: 50, includePreFall: false },
      1: { words: 75, includePreFall: false },
      2: { words: 100, includePreFall: true },
      3: { words: 150, includePreFall: true },
      4: { words: 200, includePreFall: true, includeQuests: true },
      5: { words: 300, includePreFall: true, includeQuests: true, includeLegends: true }
    },
    
    // Fusion lore generation
    fusionLore: {
      enabled: true,
      generateDiscoveryNarrative: true,
      synergyCutoffForEpicLore: 70, // Synergy > 70% gets epic lore
      includeBothEngineThemes: true
    }
  },

  // ═══════════════════════════════════════════════════════════════════════
  // PERFORMANCE OPTIMIZATION
  // ═══════════════════════════════════════════════════════════════════════
  
  performance: {
    caching: {
      enableSkillCache: true,
      cacheSize: 500, // Cache up to 500 enhanced skills
      cacheTTL: 3600000 // Cache expires after 1 hour (in ms)
    },
    
    lazyLoading: {
      loadLoreOnDemand: false, // false = pregenerate all lore
      loadContextOnDemand: true // true = analyze context per execution
    },
    
    throttling: {
      maxNPCReactionsPerSecond: 10,
      maxWorldChangesPerSecond: 5,
      batchSaveInterval: 5000 // Save game state every 5 seconds
    }
  },

  // ═══════════════════════════════════════════════════════════════════════
  // DEBUG AND TESTING
  // ═══════════════════════════════════════════════════════════════════════
  
  debug: {
    enabled: false,
    logAllSkillExecutions: false,
    logContextAnalysis: false,
    logNPCReactions: false,
    logWorldChanges: false,
    logEvolution: false,
    verboseModifiers: true // Show detailed modifier calculations
  },

  // ═══════════════════════════════════════════════════════════════════════
  // FUSION SYSTEM INTEGRATION
  // ═══════════════════════════════════════════════════════════════════════
  
  fusion: {
    inheritPremiumFeatures: true, // Fused skills get premium enhancements
    combineMasteryLevels: 'AVERAGE', // or 'MAX', 'MIN'
    combineWorldChanges: true, // Fusions can modify world
    
    // Synergy calculation
    synergyCalculation: {
      sameEngine: 0.8, // 80% base synergy for same engine
      compatibleEngines: 0.6, // 60% for compatible (e.g., Foundational + Invocation)
      opposingEngines: 0.3, // 30% for opposing (e.g., Divine + Void)
      contextBonus: 0.2 // Up to +20% for perfect context
    },
    
    // Premium fusion bonuses
    fusionBonuses: {
      HIGH_SYNERGY: { threshold: 80, powerBonus: 1.5, uniqueEffect: true },
      MEDIUM_SYNERGY: { threshold: 60, powerBonus: 1.3, uniqueEffect: false },
      LOW_SYNERGY: { threshold: 40, powerBonus: 1.1, uniqueEffect: false }
    }
  }
};

// ═══════════════════════════════════════════════════════════════════════════
// PRESETS - Quick configurations for different playstyles
// ═══════════════════════════════════════════════════════════════════════════

export const PREMIUM_PRESETS = {
  
  HARDCORE: {
    name: 'Hardcore Mode',
    description: 'High risk, high reward. Unstable effects are common, but power is amplified.',
    overrides: {
      'criticalHits.baseCritChance': 0.10,
      'unstableEffects.baseUnstableChance': 0.10,
      'contextModifiers.corruption.thresholds.EXTREME.powerBonus': 2.0,
      'evolution.masteryGainRates.COMBAT': 3.0
    }
  },
  
  STORY_FOCUSED: {
    name: 'Story Mode',
    description: 'Reduced danger, enhanced narrative. Focus on lore and NPC relationships.',
    overrides: {
      'unstableEffects.enabled': false,
      'npcMemory.relationshipImpactRates.TRUST.HEALING_SKILL': 10,
      'lore.loreDepthByTier.0.words': 100,
      'debug.logNPCReactions': true
    }
  },
  
  BALANCED: {
    name: 'Balanced Experience',
    description: 'Default settings. Balanced challenge and narrative depth.',
    overrides: {} // Use defaults
  },
  
  SPEEDRUN: {
    name: 'Speedrun Mode',
    description: 'Fast evolution, high power, minimal narrative delays.',
    overrides: {
      'evolution.masteryGainRates.COMBAT': 5.0,
      'criticalHits.baseCritChance': 0.15,
      'performance.lazyLoading.loadLoreOnDemand': true,
      'npcMemory.dialogue.updateFrequency': 'SIGNIFICANT_EVENTS'
    }
  },
  
  CHAOS: {
    name: 'Chaos Mode',
    description: 'Maximum unpredictability. Everything is unstable.',
    overrides: {
      'unstableEffects.baseUnstableChance': 0.30,
      'contextModifiers.environmental.UNSTABLE_REALITY.unstableChance': 0.80,
      'worldState.corruptionSpread.baseSpreadRate': 1.0,
      'criticalHits.critMultiplier': 3.0
    }
  }
};

// ═══════════════════════════════════════════════════════════════════════════
// CONFIGURATION HELPER FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════

export class ConfigManager {
  static applyPreset(presetName) {
    const preset = PREMIUM_PRESETS[presetName];
    if (!preset) {
      console.warn(`Preset ${presetName} not found`);
      return PREMIUM_CONFIG;
    }

    const config = JSON.parse(JSON.stringify(PREMIUM_CONFIG));
    
    for (const [path, value] of Object.entries(preset.overrides)) {
      this.setNestedValue(config, path, value);
    }

    return config;
  }

  static setNestedValue(obj, path, value) {
    const keys = path.split('.');
    let current = obj;
    
    for (let i = 0; i < keys.length - 1; i++) {
      current = current[keys[i]];
    }
    
    current[keys[keys.length - 1]] = value;
  }

  static getNestedValue(obj, path) {
    return path.split('.').reduce((current, key) => current?.[key], obj);
  }

  static validateConfig(config) {
    const errors = [];

    // Validate crit chances are between 0 and 1
    if (config.criticalHits.baseCritChance < 0 || config.criticalHits.baseCritChance > 1) {
      errors.push('baseCritChance must be between 0 and 1');
    }

    // Validate mastery levels are sequential
    const masteryLevels = Object.keys(config.evolution.masteryLevels).map(Number).sort((a, b) => a - b);
    for (let i = 1; i < masteryLevels.length; i++) {
      if (masteryLevels[i] <= masteryLevels[i - 1]) {
        errors.push('Mastery levels must be strictly increasing');
      }
    }

    return { valid: errors.length === 0, errors };
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// USAGE EXAMPLES
// ═══════════════════════════════════════════════════════════════════════════

/*

// Use default config
import { PREMIUM_CONFIG } from './PremiumSystemConfig.js';

// Use a preset
import { ConfigManager, PREMIUM_PRESETS } from './PremiumSystemConfig.js';
const hardcoreConfig = ConfigManager.applyPreset('HARDCORE');

// Custom config
const customConfig = ConfigManager.applyPreset('BALANCED');
customConfig.criticalHits.baseCritChance = 0.20;
customConfig.unstableEffects.enabled = false;

// Validate before using
const validation = ConfigManager.validateConfig(customConfig);
if (!validation.valid) {
  console.error('Config errors:', validation.errors);
}

*/
