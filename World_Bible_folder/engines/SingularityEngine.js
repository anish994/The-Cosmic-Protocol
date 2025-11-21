/**
 * ═══════════════════════════════════════════════════════════════════════════
 * SINGULARITY ENGINE - Complete Skill System
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * All 100 Singularity skills with full narrative-combat integration
 * Corruption tracking • Void entities • Paradox mechanics • Reality manipulation
 * 
 * @version 2.0_COMPLETE
 * @date 2025-11-18
 * @status Production Ready
 * ═══════════════════════════════════════════════════════════════════════════
 */

import singularitySkillsData from '../SINGULARITY_ENGINE_COMPLETE_v2.json';

// ═══════════════════════════════════════════════════════════════════════════
// CONSTANTS & CONFIGURATION
// ═══════════════════════════════════════════════════════════════════════════

const CORRUPTION_LEVELS = {
  PURE: { threshold: 0, description: 'Untouched by the Void' },
  TOUCHED: { threshold: 25, description: 'Minor void exposure' },
  TAINTED: { threshold: 50, description: 'Visible corruption' },
  CORRUPTED: { threshold: 75, description: 'Heavily corrupted' },
  CONSUMED: { threshold: 100, description: 'Void entity' }
};

const VOID_ENTITIES = {
  SHADOW: 'Void Shadow',
  WRAITH: 'Void Wraith',
  ABOMINATION: 'Void Abomination',
  HARBINGER: 'Void Harbinger',
  SINGULARITY: 'Living Singularity'
};

const PARADOX_TYPES = {
  TEMPORAL: 'Temporal Paradox',
  SPATIAL: 'Spatial Paradox',
  CAUSAL: 'Causal Paradox',
  EXISTENTIAL: 'Existential Paradox'
};

// ═══════════════════════════════════════════════════════════════════════════
// CORE SINGULARITY ENGINE
// ═══════════════════════════════════════════════════════════════════════════

export class SingularityEngine {
  constructor() {
    this.skills = singularitySkillsData.skills;
    this.meta = singularitySkillsData.meta;
    this.playerState = this.initializePlayerState();
  }

  initializePlayerState() {
    return {
      corruptionLevel: 0,
      voidEntitiesSummoned: 0,
      paradoxesCreated: 0,
      realityBreaks: 0,
      voidPath: 'NEUTRAL', // EMBRACE, RESIST, BALANCE
      singularityPower: 0,
      corruptionHistory: [], // track corruption events
      voidBonds: new Map() // entityId -> relationship
    };
  }

  // ═══════════════════════════════════════════════════════════════════════
  // SKILL EXECUTION
  // ═══════════════════════════════════════════════════════════════════════

  executeSkill(skillId, context) {
    const skill = this.getSkill(skillId);
    if (!skill) {
      throw new Error(`Skill ${skillId} not found`);
    }

    const canUse = this.canUseSkill(skill, context);
    if (!canUse.allowed) {
      return { success: false, reason: canUse.reason };
    }

    const corruptionEffect = this.applyCorruption(skill, context);
    const combatResult = this.applyCombatEffect(skill, context);
    const narrativeResult = this.applyNarrativeEffect(skill, context);
    const paradoxEffect = this.applyParadoxEffect(skill, context);
    const storyEvents = this.triggerStoryHooks(skill, context);

    this.updatePlayerState(skill, context);

    return {
      success: true,
      corruption: corruptionEffect,
      combat: combatResult,
      narrative: narrativeResult,
      paradox: paradoxEffect,
      storyEvents: storyEvents,
      voidTransformed: this.isVoidEntity()
    };
  }

  canUseSkill(skill, context) {
    if (context.player.bandwidth < skill.cost.bandwidth) {
      return { allowed: false, reason: 'Insufficient Bandwidth' };
    }
    if (context.player.kp < skill.cost.kp) {
      return { allowed: false, reason: 'Insufficient KP' };
    }

    // High-tier void skills require corruption
    if (skill.tier >= 8 && this.playerState.corruptionLevel < CORRUPTION_LEVELS.TAINTED.threshold) {
      return { allowed: false, reason: 'Insufficient void corruption' };
    }

    // Some skills forbidden if too corrupted (on RESIST path)
    if (this.playerState.voidPath === 'RESIST' && skill.skill_type.includes('Void')) {
      if (this.playerState.corruptionLevel > CORRUPTION_LEVELS.TOUCHED.threshold) {
        return { allowed: false, reason: 'Corruption conflicts with Resist path' };
      }
    }

    return { allowed: true };
  }

  applyCorruption(skill, context) {
    let corruptionGain = 0;

    // Void skills corrupt the user
    if (skill.skill_type.includes('Void') || skill.skill_type.includes('Singularity')) {
      corruptionGain = skill.tier * 2;
    }

    // Path modifies corruption
    if (this.playerState.voidPath === 'EMBRACE') {
      corruptionGain *= 1.5; // Embrace accelerates
    } else if (this.playerState.voidPath === 'RESIST') {
      corruptionGain *= 0.5; // Resist slows
    }

    const previousLevel = this.playerState.corruptionLevel;
    const previousStage = this.getCorruptionStage(previousLevel);
    
    this.playerState.corruptionLevel = Math.min(100, previousLevel + corruptionGain);
    
    const newStage = this.getCorruptionStage(this.playerState.corruptionLevel);

    // Track corruption event
    if (corruptionGain > 0) {
      this.playerState.corruptionHistory.push({
        skillId: skill.id,
        amount: corruptionGain,
        timestamp: Date.now()
      });
    }

    return {
      corruptionGained: corruptionGain,
      previousStage: previousStage,
      newStage: newStage,
      totalCorruption: this.playerState.corruptionLevel,
      stageChanged: previousStage !== newStage
    };
  }

  applyCombatEffect(skill, context) {
    const effects = {
      damage: 0,
      voidDamage: 0,
      paradoxDamage: 0,
      realityBreak: false
    };

    const corruptionBonus = this.getCorruptionBonus();
    const basePower = skill.tier * 15;

    if (skill.skill_type.includes('Void')) {
      effects.voidDamage = Math.floor(basePower * corruptionBonus);
    }

    if (skill.skill_type.includes('Reality')) {
      effects.damage = Math.floor(basePower * 1.3);
      effects.realityBreak = skill.tier >= 7;
    }

    return effects;
  }

  applyParadoxEffect(skill, context) {
    if (!skill.skill_type.includes('Paradox') && !skill.skill_type.includes('Reality')) {
      return null;
    }

    this.playerState.paradoxesCreated++;

    const paradoxType = this.determineParadoxType(skill);

    return {
      type: paradoxType,
      severity: skill.tier,
      consequenceLevel: this.calculateParadoxConsequence(skill),
      resolved: false
    };
  }

  applyNarrativeEffect(skill, context) {
    return {
      description: skill.narrative_effect.description,
      npcReactions: this.generateNPCReactions(skill, context),
      corruptionVisible: this.isCorruptionVisible(),
      choices: this.generateChoices(skill, context)
    };
  }

  // ═══════════════════════════════════════════════════════════════════════
  // NARRATIVE GENERATION
  // ═══════════════════════════════════════════════════════════════════════

  generateNPCReactions(skill, context) {
    const reactions = [];

    if (context.npcs.includes('Marcus')) {
      const dialogue = this.isCorruptionVisible()
        ? "'Your eyes... they're turning black. What's happening to you?!'"
        : "'Be careful with that power. It feels... wrong.'";
      
      reactions.push({
        npc: 'Marcus',
        dialogue: dialogue,
        relationshipChange: skill.tier >= 7 ? -10 : -3,
        emotionalState: 'Fearful'
      });
    }

    if (context.npcs.includes('Elena')) {
      reactions.push({
        npc: 'Elena',
        dialogue: "'The energy readings are off the charts. This defies physics.'",
        relationshipChange: +2,
        emotionalState: 'Fascinated'
      });
    }

    // Void entities react positively
    if (context.npcs.some(npc => npc.includes('Void'))) {
      reactions.push({
        npc: 'Void Entity',
        dialogue: "'Yesss... embrace the darkness within...'",
        relationshipChange: +15,
        emotionalState: 'Enticing'
      });
    }

    return reactions;
  }

  generateChoices(skill, context) {
    const choices = [];

    // Path choice at first major corruption
    if (this.playerState.corruptionLevel >= CORRUPTION_LEVELS.TOUCHED.threshold 
        && this.playerState.voidPath === 'NEUTRAL') {
      choices.push({
        type: 'VOID_PATH_CHOICE',
        text: 'The void calls to you. What is your answer?',
        options: [
          { 
            text: 'Embrace the void', 
            consequence: 'Gain power faster, accelerate corruption',
            path: 'EMBRACE'
          },
          { 
            text: 'Resist the corruption', 
            consequence: 'Slower corruption, maintain humanity',
            path: 'RESIST'
          },
          { 
            text: 'Walk the balance', 
            consequence: 'Moderate power, controlled corruption',
            path: 'BALANCE'
          }
        ]
      });
    }

    // Void entity transformation
    if (this.playerState.corruptionLevel >= CORRUPTION_LEVELS.CONSUMED.threshold) {
      choices.push({
        type: 'TRANSFORMATION',
        text: 'You stand at the threshold of becoming a Void entity',
        options: [
          { text: 'Accept transformation', consequence: 'Become Void entity, lose humanity, gain immense power' },
          { text: 'Fight it', consequence: 'Remain human, purge corruption, lose void abilities' }
        ]
      });
    }

    return choices;
  }

  // ═══════════════════════════════════════════════════════════════════════
  // UTILITIES
  // ═══════════════════════════════════════════════════════════════════════

  getSkill(skillId) {
    return this.skills.find(s => s.id === skillId);
  }

  getCorruptionStage(level) {
    if (level >= CORRUPTION_LEVELS.CONSUMED.threshold) return 'CONSUMED';
    if (level >= CORRUPTION_LEVELS.CORRUPTED.threshold) return 'CORRUPTED';
    if (level >= CORRUPTION_LEVELS.TAINTED.threshold) return 'TAINTED';
    if (level >= CORRUPTION_LEVELS.TOUCHED.threshold) return 'TOUCHED';
    return 'PURE';
  }

  getCorruptionBonus() {
    return 1 + (this.playerState.corruptionLevel / 100);
  }

  isCorruptionVisible() {
    return this.playerState.corruptionLevel >= CORRUPTION_LEVELS.TAINTED.threshold;
  }

  isVoidEntity() {
    return this.playerState.corruptionLevel >= CORRUPTION_LEVELS.CONSUMED.threshold;
  }

  determineParadoxType(skill) {
    const name = skill.name.toLowerCase();
    if (name.includes('time') || name.includes('temporal')) return PARADOX_TYPES.TEMPORAL;
    if (name.includes('space') || name.includes('dimension')) return PARADOX_TYPES.SPATIAL;
    if (name.includes('cause') || name.includes('effect')) return PARADOX_TYPES.CAUSAL;
    return PARADOX_TYPES.EXISTENTIAL;
  }

  calculateParadoxConsequence(skill) {
    return skill.tier >= 8 ? 'CATASTROPHIC' : skill.tier >= 5 ? 'SEVERE' : 'MODERATE';
  }

  triggerStoryHooks(skill, context) {
    const events = [];
    const hooks = skill.narrative_effect.story_hooks;

    hooks.forEach(hook => {
      if (this.shouldTriggerHook(hook, skill, context)) {
        events.push({
          type: hook.trigger,
          data: hook,
          timestamp: Date.now()
        });
      }
    });

    return events;
  }

  shouldTriggerHook(hook, skill, context) {
    if (hook.trigger === 'first_void' && this.playerState.voidEntitiesSummoned === 1) {
      return true;
    }
    if (hook.trigger === 'corruption_visible' && this.isCorruptionVisible()) {
      return true;
    }
    if (hook.trigger === 'void_transformation' && this.isVoidEntity()) {
      return true;
    }
    return false;
  }

  updatePlayerState(skill, context) {
    if (skill.skill_type.includes('Void') && skill.skill_type.includes('Summon')) {
      this.playerState.voidEntitiesSummoned++;
    }

    if (skill.skill_type.includes('Reality')) {
      this.playerState.realityBreaks++;
    }

    if (skill.tier >= 8) {
      this.playerState.singularityPower += skill.tier;
    }
  }

  setVoidPath(path) {
    if (['EMBRACE', 'RESIST', 'BALANCE'].includes(path)) {
      this.playerState.voidPath = path;
    }
  }

  // ═══════════════════════════════════════════════════════════════════════
  // SAVE/LOAD
  // ═══════════════════════════════════════════════════════════════════════

  exportSaveData() {
    return {
      corruptionLevel: this.playerState.corruptionLevel,
      voidEntitiesSummoned: this.playerState.voidEntitiesSummoned,
      paradoxesCreated: this.playerState.paradoxesCreated,
      realityBreaks: this.playerState.realityBreaks,
      voidPath: this.playerState.voidPath,
      singularityPower: this.playerState.singularityPower,
      corruptionHistory: this.playerState.corruptionHistory,
      voidBonds: Array.from(this.playerState.voidBonds.entries())
    };
  }

  importSaveData(saveData) {
    this.playerState.corruptionLevel = saveData.corruptionLevel;
    this.playerState.voidEntitiesSummoned = saveData.voidEntitiesSummoned;
    this.playerState.paradoxesCreated = saveData.paradoxesCreated;
    this.playerState.realityBreaks = saveData.realityBreaks;
    this.playerState.voidPath = saveData.voidPath;
    this.playerState.singularityPower = saveData.singularityPower;
    this.playerState.corruptionHistory = saveData.corruptionHistory;
    this.playerState.voidBonds = new Map(saveData.voidBonds);
  }

  getMeta() {
    return this.meta;
  }

  getPlayerState() {
    return {
      ...this.playerState,
      corruptionStage: this.getCorruptionStage(this.playerState.corruptionLevel),
      isVoidEntity: this.isVoidEntity(),
      corruptionVisible: this.isCorruptionVisible(),
      voidBondsArray: Array.from(this.playerState.voidBonds.entries())
    };
  }
}

export default SingularityEngine;

export {
  CORRUPTION_LEVELS,
  VOID_ENTITIES,
  PARADOX_TYPES
};
