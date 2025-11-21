/**
 * ═══════════════════════════════════════════════════════════════════════════
 * ALL ENGINES PREMIUM INTEGRATION
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * This script wraps all 8 engines with premium enhancement systems and
 * exports them as a unified game system ready for use.
 * 
 * Use this as your main entry point for the complete premium skill system.
 * ═══════════════════════════════════════════════════════════════════════════
 */

import { FoundationalEngine } from './engines/FoundationalEngine.js';
import { InvocationEngine } from './engines/InvocationEngine.js';
import { TherapeuticEngine } from './engines/TherapeuticEngine.js';
import { TantraEngine } from './engines/TantraEngine.js';
import { SingularityEngine } from './engines/SingularityEngine.js';
import { DivinationEngine } from './engines/DivinationEngine.js';
import { ConsciousnessEngine } from './engines/ConsciousnessEngine.js';
import { CharacterAnalysisEngine } from './engines/CharacterAnalysisEngine.js';

import { PremiumIntegrationFactory } from './PremiumEngineIntegration.js';
import { PREMIUM_CONFIG, ConfigManager } from './PremiumSystemConfig.js';

// ═══════════════════════════════════════════════════════════════════════════
// INITIALIZE ALL ENGINES
// ═══════════════════════════════════════════════════════════════════════════

console.log('Initializing Premium Skill System...\n');

// Create base engines
const baseEngines = {
  Foundational: new FoundationalEngine(),
  Invocation: new InvocationEngine(),
  Therapeutic: new TherapeuticEngine(),
  Tantra: new TantraEngine(),
  Singularity: new SingularityEngine(),
  Divination: new DivinationEngine(),
  Consciousness: new ConsciousnessEngine(),
  CharacterAnalysis: new CharacterAnalysisEngine()
};

console.log('✓ Base engines loaded:');
for (const [name, engine] of Object.entries(baseEngines)) {
  console.log(`  - ${name}: ${engine.skills.length} skills`);
}

// ═══════════════════════════════════════════════════════════════════════════
// WRAP WITH PREMIUM FEATURES
// ═══════════════════════════════════════════════════════════════════════════

console.log('\nWrapping engines with premium systems...');

const premiumEngines = PremiumIntegrationFactory.wrapAllEngines(baseEngines);

console.log('✓ Premium enhancement applied:');
console.log('  - WorldStateManager initialized');
console.log('  - NPCMemorySystem initialized');
console.log('  - ContextAnalyzer initialized');
console.log('  - SkillModifierEngine initialized');
console.log('  - LoreGenerator initialized');
console.log('  - SkillEvolutionTracker initialized\n');

// ═══════════════════════════════════════════════════════════════════════════
// UNIFIED GAME SYSTEM
// ═══════════════════════════════════════════════════════════════════════════

export class UnifiedGameSystem {
  constructor(config = PREMIUM_CONFIG) {
    this.config = config;
    this.engines = premiumEngines;
    this.activePreset = 'BALANCED';
  }

  /**
   * Execute a skill from any engine
   */
  executeSkill(engineName, skillId, context) {
    const engine = this.engines[engineName];
    if (!engine) {
      throw new Error(`Engine ${engineName} not found`);
    }

    return engine.baseEngine.executeSkill(skillId, context);
  }

  /**
   * Get a skill from any engine
   */
  getSkill(engineName, skillId) {
    const engine = this.engines[engineName];
    if (!engine) return null;

    return engine.baseEngine.getSkill(skillId);
  }

  /**
   * Search for skills across all engines
   */
  searchSkills(query) {
    const results = [];
    
    for (const [engineName, engine] of Object.entries(this.engines)) {
      const engineSkills = engine.baseEngine.skills.filter(skill => 
        skill.name.toLowerCase().includes(query.toLowerCase()) ||
        skill.description.toLowerCase().includes(query.toLowerCase())
      );

      results.push(...engineSkills.map(skill => ({
        ...skill,
        engine: engineName
      })));
    }

    return results;
  }

  /**
   * Get all skills of a certain type
   */
  getSkillsByType(type) {
    const results = [];
    
    for (const [engineName, engine] of Object.entries(this.engines)) {
      const engineSkills = engine.baseEngine.skills.filter(skill =>
        skill.skill_type.includes(type)
      );

      results.push(...engineSkills.map(skill => ({
        ...skill,
        engine: engineName
      })));
    }

    return results;
  }

  /**
   * Get all skills of a certain tier
   */
  getSkillsByTier(tier) {
    const results = [];
    
    for (const [engineName, engine] of Object.entries(this.engines)) {
      const engineSkills = engine.baseEngine.skills.filter(skill =>
        skill.tier === tier
      );

      results.push(...engineSkills.map(skill => ({
        ...skill,
        engine: engineName
      })));
    }

    return results;
  }

  /**
   * Commit a fusion (Player learns/creates it).
   * Triggers discovery events and world effects.
   */
  commitFusion(engine1Name, skill1Id, engine2Name, skill2Id, context) {
    const result = this.calculateFusion(engine1Name, skill1Id, engine2Name, skill2Id, context);
    
    if (result.success) {
      EventBus.emit('FUSION_DISCOVERED', {
        fusion: result.fusedSkill,
        synergy: result.synergy,
        context: context
      });
      console.log(`[Fusion] Discovered: ${result.fusedSkill.name}`);
    }
    
    return result;
  }

  /**
   * Calculate fusion between two skills
   */
  calculateFusion(engine1Name, skill1Id, engine2Name, skill2Id, context) {
    const skill1 = this.getSkill(engine1Name, skill1Id);
    const skill2 = this.getSkill(engine2Name, skill2Id);

    if (!skill1 || !skill2) {
      return { success: false, reason: 'One or both skills not found' };
    }

    // Calculate synergy
    const synergy = this.calculateSynergy(skill1, skill2, engine1Name, engine2Name, context);

    // Generate fusion skill
    const fusedSkill = {
      id: `FUSION_${skill1.id}_${skill2.id}`,
      name: `${skill1.name} + ${skill2.name}`,
      description: `A fusion of ${skill1.name} and ${skill2.name}`,
      tier: Math.max(skill1.tier, skill2.tier),
      cost: {
        bandwidth: skill1.cost.bandwidth + skill2.cost.bandwidth,
        kp: skill1.cost.kp + skill2.cost.kp
      },
      synergy: synergy,
      baseSkills: [skill1.id, skill2.id],
      engines: [engine1Name, engine2Name]
    };

    return {
      success: true,
      fusedSkill: fusedSkill,
      synergy: synergy
    };
  }

  /**
   * Calculate synergy between two skills
   */
  calculateSynergy(skill1, skill2, engine1Name, engine2Name, context) {
    let synergy = 50; // Base synergy

    // Same engine bonus
    if (engine1Name === engine2Name) {
      synergy += 30;
    }

    // Tier similarity bonus
    const tierDiff = Math.abs(skill1.tier - skill2.tier);
    if (tierDiff === 0) synergy += 10;
    else if (tierDiff === 1) synergy += 5;

    // Context bonuses
    if (context) {
      // Time alignment
      if (context.time?.timeOfDay === 'MIDNIGHT' && 
          (skill1.skill_type.includes('Shadow') || skill2.skill_type.includes('Shadow'))) {
        synergy += 10;
      }

      // Location alignment
      if (context.location?.type === 'SACRED' &&
          (skill1.skill_type.includes('Divine') || skill2.skill_type.includes('Divine'))) {
        synergy += 10;
      }
    }

    return Math.min(100, Math.max(0, synergy));
  }

  /**
   * Apply a configuration preset
   */
  applyPreset(presetName) {
    const newConfig = ConfigManager.applyPreset(presetName);
    const validation = ConfigManager.validateConfig(newConfig);

    if (!validation.valid) {
      console.error('Invalid preset configuration:', validation.errors);
      return false;
    }

    this.config = newConfig;
    this.activePreset = presetName;
    console.log(`✓ Applied preset: ${presetName}`);
    return true;
  }

  /**
   * Export complete game state
   */
  exportGameState() {
    return PremiumIntegrationFactory.createUnifiedGameState(this.engines);
  }

  /**
   * Import complete game state
   */
  importGameState(savedState) {
    for (const [engineName, engineState] of Object.entries(savedState.engines)) {
      if (this.engines[engineName]) {
        this.engines[engineName].importGameState(engineState);
      }
    }
    console.log('✓ Game state imported');
  }

  /**
   * Get system statistics
   */
  getStats() {
    let totalSkills = 0;
    let totalUsages = 0;
    let totalLandmarks = 0;
    let totalWorldChanges = 0;

    for (const [engineName, engine] of Object.entries(this.engines)) {
      totalSkills += engine.baseEngine.skills.length;
      
      const evolutionData = engine.evolutionTracker.exportData();
      totalUsages += Object.values(evolutionData.skills).reduce(
        (sum, skill) => sum + skill.timesUsed, 0
      );

      const worldData = engine.worldState.exportWorldState();
      totalLandmarks += worldData.landmarks.length;
      totalWorldChanges += worldData.permanentChanges.length;
    }

    return {
      totalSkills,
      totalEngines: Object.keys(this.engines).length,
      totalUsages,
      totalLandmarks,
      totalWorldChanges,
      activePreset: this.activePreset,
      configVersion: '1.0'
    };
  }

  /**
   * Get NPC relationship across all engines
   */
  getGlobalNPCRelationship(npcId) {
    const relationships = {};

    for (const [engineName, engine] of Object.entries(this.engines)) {
      const relationship = engine.npcMemory.getRelationshipStatus(npcId);
      relationships[engineName] = relationship;
    }

    // Calculate average relationship
    const avgTrust = Object.values(relationships).reduce((sum, r) => sum + r.trust, 0) / 
                     Object.keys(relationships).length;
    const avgFear = Object.values(relationships).reduce((sum, r) => sum + r.fear, 0) / 
                    Object.keys(relationships).length;
    const avgRespect = Object.values(relationships).reduce((sum, r) => sum + r.respect, 0) / 
                       Object.keys(relationships).length;

    return {
      byEngine: relationships,
      global: {
        trust: Math.round(avgTrust),
        fear: Math.round(avgFear),
        respect: Math.round(avgRespect)
      }
    };
  }

  /**
   * Get all world landmarks
   */
  getAllLandmarks() {
    const landmarks = [];

    for (const [engineName, engine] of Object.entries(this.engines)) {
      const worldData = engine.worldState.exportWorldState();
      landmarks.push(...worldData.landmarks.map(landmark => ({
        ...landmark,
        engine: engineName
      })));
    }

    return landmarks;
  }

  /**
   * Get mastery summary across all engines
   */
  getMasterySummary(playerId = 'player') {
    const mastery = {};

    for (const [engineName, engine] of Object.entries(this.engines)) {
      const evolutionData = engine.evolutionTracker.exportData();
      
      mastery[engineName] = {
        totalSkills: Object.keys(evolutionData.skills).length,
        averageMastery: 0,
        masteredSkills: 0,
        transcendentSkills: 0
      };

      if (Object.keys(evolutionData.skills).length > 0) {
        const totalMastery = Object.values(evolutionData.skills).reduce(
          (sum, skill) => sum + skill.masteryLevel, 0
        );
        mastery[engineName].averageMastery = Math.round(
          totalMastery / Object.keys(evolutionData.skills).length
        );

        mastery[engineName].masteredSkills = Object.values(evolutionData.skills).filter(
          skill => skill.masteryLevel >= 90
        ).length;

        mastery[engineName].transcendentSkills = Object.values(evolutionData.skills).filter(
          skill => skill.masteryLevel === 100
        ).length;
      }
    }

    return mastery;
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// EXPORT DEFAULT INSTANCE
// ═══════════════════════════════════════════════════════════════════════════

export const gameSystem = new UnifiedGameSystem();

console.log('✓ Unified Game System initialized\n');
console.log('═══════════════════════════════════════════════════════════════');
console.log('PREMIUM SKILL SYSTEM READY');
console.log('═══════════════════════════════════════════════════════════════');
console.log(`Total Skills: ${gameSystem.getStats().totalSkills}`);
console.log(`Total Engines: ${gameSystem.getStats().totalEngines}`);
console.log(`Active Preset: ${gameSystem.getStats().activePreset}`);
console.log('═══════════════════════════════════════════════════════════════\n');

// ═══════════════════════════════════════════════════════════════════════════
// USAGE EXAMPLES
// ═══════════════════════════════════════════════════════════════════════════

/*

import { gameSystem } from './all_engines_premium.js';

// Execute a skill
const result = gameSystem.executeSkill('Foundational', 'FOUND_042', {
  player: { bandwidth: 100, kp: 50, masteryLevel: 25 },
  location: { name: 'Undermight Ruins', type: 'RUINS' },
  time: { hour: 0, timeOfDay: 'MIDNIGHT' },
  weather: 'STORM',
  corruptionLevel: 35,
  alignment: 'SHADOW',
  situation: 'combat',
  nearbyNPCs: [{ id: 'marcus_veil', name: 'Marcus Veil' }]
});

// Search for skills
const shadowSkills = gameSystem.searchSkills('shadow');

// Get skills by type
const combatSkills = gameSystem.getSkillsByType('Combat');

// Calculate fusion
const fusion = gameSystem.calculateFusion(
  'Foundational', 'FOUND_001',
  'Invocation', 'INV_001',
  context
);

// Apply preset
gameSystem.applyPreset('HARDCORE');

// Save game
const savedState = gameSystem.exportGameState();
localStorage.setItem('gameState', JSON.stringify(savedState));

// Load game
const loadedState = JSON.parse(localStorage.getItem('gameState'));
gameSystem.importGameState(loadedState);

// Get stats
const stats = gameSystem.getStats();
console.log(`Total skill uses: ${stats.totalUsages}`);
console.log(`Landmarks created: ${stats.totalLandmarks}`);

// Check NPC relationships
const marcusRelationship = gameSystem.getGlobalNPCRelationship('marcus_veil');
console.log(`Marcus Trust: ${marcusRelationship.global.trust}`);

// Get all landmarks
const landmarks = gameSystem.getAllLandmarks();
console.log(`Active landmarks: ${landmarks.length}`);

// Get mastery summary
const mastery = gameSystem.getMasterySummary();
console.log(`Foundational mastery: ${mastery.Foundational.averageMastery}`);

*/
