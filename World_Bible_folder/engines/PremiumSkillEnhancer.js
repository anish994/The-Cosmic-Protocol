/**
 * ═══════════════════════════════════════════════════════════════════════════
 * PREMIUM SKILL ENHANCEMENT ENGINE
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * Master orchestrator that transforms baseline skills into premium experiences.
 * Integrates:
 * - World state modifications
 * - NPC memory and reactions
 * - Context-aware mechanics
 * - Dynamic lore generation
 * - Evolution and mastery tracking
 * 
 * @version 1.0_ULTIMATE
 * @date 2025-11-20
 * ═══════════════════════════════════════════════════════════════════════════
 */

import { WorldStateManager, NPCMemorySystem } from './SkillEnhancementSystem.js';
import { ContextAnalyzer, SkillModifierEngine } from './ContextAwareMechanics.js';
import LoreGenerator from './LoreIntegration.js';

// ═══════════════════════════════════════════════════════════════════════════
// SKILL EVOLUTION TRACKER
// ═══════════════════════════════════════════════════════════════════════════

class SkillEvolutionTracker {
  constructor() {
    this.skillUsage = new Map(); // skillId -> usage stats
    this.evolutionStages = new Map(); // skillId -> stage
    this.masteryLevels = new Map(); // skillId -> mastery (0-100)
  }

  recordUsage(skillId, context, outcome) {
    const stats = this.skillUsage.get(skillId) || {
      timesUsed: 0,
      successCount: 0,
      failureCount: 0,
      criticalCount: 0,
      unstableCount: 0,
      contextsUsedIn: new Set(),
      targetsHit: new Set(),
      firstUse: Date.now(),
      lastUse: Date.now(),
      totalDamage: 0,
      totalHealing: 0,
      memorable Moments: []
    };

    stats.timesUsed++;
    stats.lastUse = Date.now();
    
    if (outcome.success) stats.successCount++;
    else stats.failureCount++;
    
    if (outcome.critical) stats.criticalCount++;
    if (outcome.unstable) stats.unstableCount++;
    
    stats.contextsUsedIn.add(context.location);
    if (context.target) stats.targetsHit.add(context.target);
    
    if (outcome.damage) stats.totalDamage += outcome.damage;
    if (outcome.healing) stats.totalHealing += outcome.healing;
    
    // Record memorable moments
    if (this.isMomentMemorable(outcome, context)) {
      stats.memorableMoments.push({
        timestamp: Date.now(),
        description: this.describeMemorableMoment(outcome, context),
        context: { ...context }
      });
    }
    
    this.skillUsage.set(skillId, stats);
    this.updateMastery(skillId, stats);
    this.checkEvolution(skillId, stats);
  }

  isMomentMemorable(outcome, context) {
    if (outcome.critical) return true;
    if (outcome.unstable) return true;
    if (context.npcs?.includes('Marcus') || context.npcs?.includes('Elena')) return true;
    if (outcome.damage > 100) return true;
    if (outcome.healing > 80) return true;
    return false;
  }

  describeMemorableMoment(outcome, context) {
    if (outcome.critical && outcome.damage > 100) {
      return `Critical strike at ${context.location}: ${outcome.damage} damage!`;
    }
    if (outcome.unstable) {
      return `Reality fractured at ${context.location}. Unstable effect triggered.`;
    }
    if (context.target === 'civilian' && outcome.healing) {
      return `Saved civilian at ${context.location}. Marcus witnessed.`;
    }
    return `Significant event at ${context.location}.`;
  }

  updateMastery(skillId, stats) {
    let mastery = 0;
    
    // Usage count contributes
    mastery += Math.min(30, stats.timesUsed / 2);
    
    // Success rate matters
    const successRate = stats.successCount / Math.max(1, stats.timesUsed);
    mastery += successRate * 30;
    
    // Critical hits show skill
    mastery += Math.min(20, stats.criticalCount * 2);
    
    // Diverse usage (different contexts)
    mastery += Math.min(20, stats.contextsUsedIn.size * 2);
    
    this.masteryLevels.set(skillId, Math.min(100, Math.round(mastery)));
  }

  checkEvolution(skillId, stats) {
    const currentStage = this.evolutionStages.get(skillId) || 0;
    
    // Evolution thresholds
    const thresholds = [
      { uses: 10, stage: 1, name: 'Apprentice' },
      { uses: 50, stage: 2, name: 'Adept' },
      { uses: 150, stage: 3, name: 'Master' },
      { uses: 500, stage: 4, name: 'Transcendent' }
    ];
    
    for (const threshold of thresholds) {
      if (stats.timesUsed >= threshold.uses && currentStage < threshold.stage) {
        this.evolutionStages.set(skillId, threshold.stage);
        return {
          evolved: true,
          newStage: threshold.stage,
          stageName: threshold.name,
          bonuses: this.getEvolutionBonuses(threshold.stage)
        };
      }
    }
    
    return { evolved: false };
  }

  getEvolutionBonuses(stage) {
    return {
      powerBonus: stage * 10,
      critBonus: stage * 5,
      costReduction: stage * 5,
      newEffects: this.getStageEffects(stage)
    };
  }

  getStageEffects(stage) {
    const effects = {
      1: ['Reduced cooldown by 10%'],
      2: ['Can target +1 additional enemy', 'Effects last 25% longer'],
      3: ['Gains area effect (small radius)', 'Critical hits heal user for 20%'],
      4: ['Becomes signature skill (costs 50% less)', 'Can be used while moving']
    };
    
    return effects[stage] || [];
  }

  getStats(skillId) {
    return this.skillUsage.get(skillId);
  }

  getMastery(skillId) {
    return this.masteryLevels.get(skillId) || 0;
  }

  getStage(skillId) {
    return this.evolutionStages.get(skillId) || 0;
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// PREMIUM SKILL ENHANCER - Main Engine
// ═══════════════════════════════════════════════════════════════════════════

export class PremiumSkillEnhancer {
  constructor() {
    this.worldState = new WorldStateManager();
    this.npcMemory = new NPCMemorySystem();
    this.contextAnalyzer = new ContextAnalyzer(this.worldState, this.npcMemory);
    this.skillModifier = new SkillModifierEngine(this.contextAnalyzer);
    this.loreGenerator = new LoreGenerator();
    this.evolutionTracker = new SkillEvolutionTracker();
  }

  // ═════════════════════════════════════════════════════════════════════════
  // MAIN ENHANCEMENT METHOD
  // ═════════════════════════════════════════════════════════════════════════

  enhanceSkill(baseSkill, context = {}) {
    // Generate complete lore
    const lore = this.loreGenerator.generateCompleteNarrative(baseSkill, context);
    
    // Apply context-aware mechanics
    const contextualData = this.skillModifier.applyContextToSkill(baseSkill, context);
    
    // Get evolution data
    const mastery = this.evolutionTracker.getMastery(baseSkill.id);
    const stage = this.evolutionTracker.getStage(baseSkill.id);
    const stats = this.evolutionTracker.getStats(baseSkill.id);
    
    // Build premium skill object
    const premiumSkill = {
      ...baseSkill,
      
      // LORE & NARRATIVE
      lore: {
        full: lore.fullText,
        origin: lore.origin,
        description: lore.description,
        discovery: lore.discovery,
        mastery: lore.mastery,
        warnings: lore.warnings,
        connections: lore.connections,
        shortDesc: lore.shortDesc,
        flavorText: lore.flavorText
      },
      
      // CONTEXTUAL POWER
      contextual: {
        basePower: contextualData.contextualPower.basePower,
        currentPower: contextualData.contextualPower.finalPower,
        powerMultiplier: contextualData.contextualPower.multiplier,
        activeModifiers: contextualData.contextualPower.activeModifiers,
        bonusPercent: contextualData.contextualPower.bonusPercent
      },
      
      // CRIT & UNSTABLE
      mechanics: {
        critChance: contextualData.critChance,
        unstableChance: contextualData.unstableChance,
        synergies: contextualData.synergies,
        comboChain: this.getComboChain(baseSkill, context)
      },
      
      // EVOLUTION & MASTERY
      progression: {
        mastery,
        masteryPercent: mastery,
        stage,
        stageName: this.getStageName(stage),
        timesUsed: stats?.timesUsed || 0,
        successRate: this.calculateSuccessRate(stats),
        evolutionBonuses: stage > 0 ? this.evolutionTracker.getEvolutionBonuses(stage) : null,
        memorableMoments: stats?.memorableMoments || []
      },
      
      // NPC REACTIONS
      npcReactions: this.generateNPCReactions(baseSkill, context),
      
      // WORLD IMPACT
      worldImpact: this.predictWorldImpact(baseSkill, context),
      
      // QUEST CONNECTIONS
      questHooks: this.generateQuestHooks(baseSkill, stats, context)
    };
    
    return premiumSkill;
  }

  // ═════════════════════════════════════════════════════════════════════════
  // SKILL EXECUTION WITH FULL INTEGRATION
  // ═════════════════════════════════════════════════════════════════════════

  executeSkill(skill, context) {
    // Enhance skill with current context
    const enhanced = this.enhanceSkill(skill, context);
    
    // Calculate outcome
    const outcome = this.calculateOutcome(enhanced, context);
    
    // Apply world changes
    if (outcome.success) {
      const worldChange = this.worldState.modifyWorld({
        skillId: skill.id,
        skillName: skill.name,
        location: context.location,
        context,
        engine: skill.engine,
        skillType: skill.skill_type,
        tier: skill.tier
      });
      
      outcome.worldChange = worldChange;
    }
    
    // Record with NPCs
    if (context.npcs) {
      context.npcs.forEach(npcId => {
        this.npcMemory.recordSkillUse(npcId, {
          skillId: skill.id,
          skillName: skill.name,
          skillType: skill.skill_type,
          engine: skill.engine,
          target: context.target,
          outcome: outcome.success ? 'success' : 'failure'
        }, context);
      });
    }
    
    // Track evolution
    this.evolutionTracker.recordUsage(skill.id, context, outcome);
    const evolution = this.evolutionTracker.checkEvolution(skill.id, this.evolutionTracker.getStats(skill.id));
    
    if (evolution.evolved) {
      outcome.evolution = evolution;
    }
    
    // Generate dynamic dialogue
    const dialogue = this.generateDialogue(skill, context, outcome);
    
    return {
      success: outcome.success,
      enhanced,
      outcome,
      dialogue,
      worldState: this.worldState.getLocationState(context.location),
      evolution: evolution.evolved ? evolution : null
    };
  }

  calculateOutcome(enhanced, context) {
    const { contextual, mechanics } = enhanced;
    
    // Roll for success
    const roll = Math.random() * 100;
    const success = roll < 90; // Base 90% success, can be modified
    
    // Roll for crit
    const critRoll = Math.random() * 100;
    const critical = critRoll < mechanics.critChance;
    
    // Roll for unstable
    const unstableRoll = Math.random() * 100;
    const unstable = !critical && unstableRoll < mechanics.unstableChance;
    
    let power = contextual.currentPower;
    
    if (critical) {
      power = Math.round(power * 1.5);
    } else if (unstable) {
      power = Math.round(power * 1.2);
      // Add unstable consequence
    }
    
    return {
      success,
      critical,
      unstable,
      damage: enhanced.combat_effect?.damage ? power : 0,
      healing: enhanced.combat_effect?.healing ? power : 0,
      power,
      modifiersApplied: contextual.activeModifiers,
      synergiesTriggered: mechanics.synergies
    };
  }

  // ═════════════════════════════════════════════════════════════════════════
  // HELPER METHODS
  // ═════════════════════════════════════════════════════════════════════════

  getStageName(stage) {
    const names = ['Novice', 'Apprentice', 'Adept', 'Master', 'Transcendent'];
    return names[stage] || 'Novice';
  }

  calculateSuccessRate(stats) {
    if (!stats || stats.timesUsed === 0) return 0;
    return Math.round((stats.successCount / stats.timesUsed) * 100);
  }

  getComboChain(skill, context) {
    const recent = context.recentSkills || [];
    const chain = recent.filter(s => 
      s.keywords?.some(k => skill.keywords?.includes(k))
    );
    
    return {
      length: chain.length,
      bonusPower: chain.length * 10,
      skillsInChain: chain.map(s => s.name)
    };
  }

  generateNPCReactions(skill, context) {
    if (!context.npcs) return [];
    
    return context.npcs.map(npcId => {
      const dialogue = this.npcMemory.generateDialogue(npcId, {
        skillId: skill.id,
        skillName: skill.name,
        skillType: skill.skill_type,
        engine: skill.engine
      }, context);
      
      const relationship = this.npcMemory.relationships.get(npcId);
      
      return {
        npcId,
        dialogue,
        relationship,
        emotionalState: this.npcMemory.emotionalState.get(npcId) || 'neutral'
      };
    });
  }

  predictWorldImpact(skill, context) {
    const { engine, skill_type, tier } = skill;
    
    const impact = {
      permanent: false,
      corruptionChange: 0,
      landmarkPotential: false,
      factionReaction: []
    };
    
    if (skill_type?.includes('Structure') || engine === 'Foundational') {
      impact.permanent = true;
      impact.landmarkPotential = true;
    }
    
    if (skill_type?.includes('Void')) {
      impact.corruptionChange = tier * 5;
    }
    
    if (skill_type?.includes('Shadow')) {
      impact.factionReaction.push({ faction: 'Undermight', change: +5 });
      impact.factionReaction.push({ faction: 'Wardens', change: -10 });
    }
    
    return impact;
  }

  generateQuestHooks(skill, stats, context) {
    const hooks = [];
    
    if (stats && stats.timesUsed >= 50) {
      hooks.push({
        questId: `MASTERY_${skill.engine}_${skill.id}`,
        name: `Master of ${skill.name}`,
        trigger: 'Achieve 100% mastery',
        reward: 'Unlock legendary variant'
      });
    }
    
    if (skill.engine === 'Invocation' && stats?.timesUsed >= 20) {
      hooks.push({
        questId: `DIVINE_FAVOR_${skill.id}`,
        name: 'Divine Recognition',
        trigger: 'Deity takes notice of your devotion',
        reward: 'Direct communion with the invoked deity'
      });
    }
    
    return hooks;
  }

  generateDialogue(skill, context, outcome) {
    if (!context.npcs || context.npcs.length === 0) return [];
    
    return context.npcs.map(npcId => {
      let dialogue = this.npcMemory.generateDialogue(npcId, {
        skillId: skill.id,
        skillName: skill.name,
        skillType: skill.skill_type,
        engine: skill.engine
      }, context);
      
      // Add outcome-specific reactions
      if (outcome.critical) {
        dialogue += ` [Impressed by critical execution]`;
      }
      if (outcome.unstable) {
        dialogue += ` [Concerned by instability]`;
      }
      
      return {
        npcId,
        text: dialogue,
        trigger: 'SKILL_USE',
        emotion: this.npcMemory.emotionalState.get(npcId) || 'neutral'
      };
    });
  }

  // ═════════════════════════════════════════════════════════════════════════
  // SAVE/LOAD
  // ═════════════════════════════════════════════════════════════════════════

  exportGameState() {
    return {
      worldState: this.worldState.exportWorldState(),
      npcMemory: this.npcMemory.exportMemories(),
      evolution: {
        usage: Array.from(this.evolutionTracker.skillUsage.entries()),
        stages: Array.from(this.evolutionTracker.evolutionStages.entries()),
        mastery: Array.from(this.evolutionTracker.masteryLevels.entries())
      }
    };
  }

  importGameState(state) {
    this.worldState.importWorldState(state.worldState);
    this.npcMemory.importMemories(state.npcMemory);
    
    this.evolutionTracker.skillUsage = new Map(state.evolution.usage);
    this.evolutionTracker.evolutionStages = new Map(state.evolution.stages);
    this.evolutionTracker.masteryLevels = new Map(state.evolution.mastery);
  }
}

export default PremiumSkillEnhancer;
