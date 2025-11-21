/**
 * ═══════════════════════════════════════════════════════════════════════════
 * DIVINATION ENGINE - Complete Skill System
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * All 100 Divination skills with full narrative-combat integration
 * Investigation mechanics • Prophecy system • Mystery solving • Evidence collection
 * 
 * @version 2.0_COMPLETE
 * @date 2025-11-18
 * @status Production Ready
 * ═══════════════════════════════════════════════════════════════════════════
 */

import divinationSkillsData from '../DIVINATION_ENGINE_COMPLETE_v2.json';

// ═══════════════════════════════════════════════════════════════════════════
// CONSTANTS & CONFIGURATION
// ═══════════════════════════════════════════════════════════════════════════

const ORACLE_PATHS = {
  DETECTIVE: 'Detective',
  PROPHET: 'Prophet',
  FATE_WEAVER: 'Fate Weaver'
};

const PROPHECY_TYPES = {
  IMMEDIATE: { timeframe: 'Minutes', accuracy: 95 },
  SHORT: { timeframe: 'Hours', accuracy: 80 },
  MEDIUM: { timeframe: 'Days', accuracy: 60 },
  LONG: { timeframe: 'Weeks', accuracy: 40 },
  EPIC: { timeframe: 'Months', accuracy: 20 }
};

const EVIDENCE_TYPES = {
  PHYSICAL: 'Physical Evidence',
  PSYCHIC: 'Psychic Imprint',
  PROPHETIC: 'Prophetic Vision',
  TEMPORAL: 'Time Echo'
};

const MYSTERY_COMPLEXITY = {
  SIMPLE: 3,
  MODERATE: 5,
  COMPLEX: 8,
  BYZANTINE: 12
};

// ═══════════════════════════════════════════════════════════════════════════
// CORE DIVINATION ENGINE
// ═══════════════════════════════════════════════════════════════════════════

export class DivinationEngine {
  constructor() {
    this.skills = divinationSkillsData.skills;
    this.meta = divinationSkillsData.meta;
    this.playerState = this.initializePlayerState();
  }

  initializePlayerState() {
    return {
      activeProphecies: new Map(), // prophecyId -> prophecy data
      mysteriesSolved: 0,
      evidenceCollected: new Map(), // mysteryId -> evidence array
      oraclePath: 'NEUTRAL',
      prophecyAccuracy: 50,
      investigationRep: 0,
      fateThreadsAltered: 0,
      visionHistory: []
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

    const prophecyResult = this.createProphecy(skill, context);
    const investigationResult = this.investigateClue(skill, context);
    const narrativeResult = this.applyNarrativeEffect(skill, context);
    const fateResult = this.alterFate(skill, context);
    const storyEvents = this.triggerStoryHooks(skill, context);

    this.updatePlayerState(skill, context);

    return {
      success: true,
      prophecy: prophecyResult,
      investigation: investigationResult,
      narrative: narrativeResult,
      fate: fateResult,
      storyEvents: storyEvents
    };
  }

  canUseSkill(skill, context) {
    if (context.player.bandwidth < skill.cost.bandwidth) {
      return { allowed: false, reason: 'Insufficient Bandwidth' };
    }
    if (context.player.kp < skill.cost.kp) {
      return { allowed: false, reason: 'Insufficient KP' };
    }

    // Investigation skills require active mystery
    if (skill.skill_type.includes('Investigation') && !context.mystery) {
      return { allowed: false, reason: 'No active mystery to investigate' };
    }

    return { allowed: true };
  }

  createProphecy(skill, context) {
    if (!skill.skill_type.includes('Prophecy') && !skill.skill_type.includes('Vision')) {
      return null;
    }

    const prophecyType = this.determineProphecyType(skill);
    const prophecy = {
      id: `prophecy_${Date.now()}`,
      type: prophecyType,
      prediction: this.generatePrediction(skill, context),
      accuracy: this.calculateAccuracy(skill, prophecyType),
      timeframe: PROPHECY_TYPES[prophecyType].timeframe,
      fulfilled: false,
      timestamp: Date.now()
    };

    this.playerState.activeProphecies.set(prophecy.id, prophecy);

    return prophecy;
  }

  investigateClue(skill, context) {
    if (!skill.skill_type.includes('Investigation') && !skill.skill_type.includes('Detective')) {
      return null;
    }

    if (!context.mystery) return null;

    const evidence = this.findEvidence(skill, context);
    const mysteryId = context.mystery.id;

    const existingEvidence = this.playerState.evidenceCollected.get(mysteryId) || [];
    existingEvidence.push(evidence);
    this.playerState.evidenceCollected.set(mysteryId, existingEvidence);

    const solved = this.checkMysterySolved(mysteryId, context.mystery);

    return {
      evidence: evidence,
      totalEvidence: existingEvidence.length,
      requiredEvidence: context.mystery.requiredEvidence || MYSTERY_COMPLEXITY.MODERATE,
      mysterySolved: solved
    };
  }

  alterFate(skill, context) {
    if (!skill.skill_type.includes('Fate') && !skill.skill_type.includes('Destiny')) {
      return null;
    }

    this.playerState.fateThreadsAltered++;

    return {
      target: context.target?.name || 'Unknown',
      alteration: this.generateFateAlteration(skill),
      magnitude: skill.tier,
      irreversible: skill.tier >= 8
    };
  }

  applyNarrativeEffect(skill, context) {
    return {
      description: skill.narrative_effect.description,
      npcReactions: this.generateNPCReactions(skill, context),
      revelations: this.generateRevelations(skill, context),
      choices: this.generateChoices(skill, context)
    };
  }

  // ═══════════════════════════════════════════════════════════════════════
  // NARRATIVE GENERATION
  // ═══════════════════════════════════════════════════════════════════════

  generateNPCReactions(skill, context) {
    const reactions = [];

    if (context.npcs.includes('Marcus')) {
      reactions.push({
        npc: 'Marcus',
        dialogue: skill.skill_type.includes('Prophecy')
          ? "'You can see the future? That's... unsettling.'"
          : "'Good detective work. How did you piece that together?'",
        relationshipChange: +3
      });
    }

    if (context.npcs.includes('Elena')) {
      reactions.push({
        npc: 'Elena',
        dialogue: "'Fascinating. The probability calculations are beyond my models.'",
        relationshipChange: +5,
        emotionalState: 'Intrigued'
      });
    }

    return reactions;
  }

  generateRevelations(skill, context) {
    const revelations = [];

    if (skill.tier >= 7) {
      revelations.push({
        type: 'MAJOR_REVELATION',
        content: 'Hidden truth about the main quest revealed',
        impact: 'Quest progression unlocked'
      });
    }

    if (skill.skill_type.includes('Past')) {
      revelations.push({
        type: 'HISTORICAL',
        content: 'Ancient event that shaped current situation',
        impact: 'New dialogue options with scholars'
      });
    }

    return revelations;
  }

  generateChoices(skill, context) {
    const choices = [];

    // Oracle path choice
    if (this.playerState.oraclePath === 'NEUTRAL' && this.playerState.mysteriesSolved >= 3) {
      choices.push({
        type: 'ORACLE_PATH',
        text: 'Your divination abilities are growing. Choose your path:',
        options: [
          { text: 'Detective path', consequence: 'Enhanced investigation, evidence bonuses', path: 'DETECTIVE' },
          { text: 'Prophet path', consequence: 'Stronger prophecies, see distant future', path: 'PROPHET' },
          { text: 'Fate Weaver path', consequence: 'Alter destiny, change outcomes', path: 'FATE_WEAVER' }
        ]
      });
    }

    // Prophecy intervention
    if (skill.skill_type.includes('Prophecy') && context.target) {
      choices.push({
        type: 'PROPHECY_INTERVENTION',
        text: 'You see a dark future for this person. Intervene?',
        options: [
          { text: 'Warn them', consequence: 'Save them, reveal your abilities' },
          { text: 'Let fate unfold', consequence: 'Tragedy occurs, maintain secrecy' },
          { text: 'Alter their fate subtly', consequence: 'Difficult, may backfire' }
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

  determineProphecyType(skill) {
    if (skill.tier <= 3) return 'IMMEDIATE';
    if (skill.tier <= 5) return 'SHORT';
    if (skill.tier <= 7) return 'MEDIUM';
    if (skill.tier <= 9) return 'LONG';
    return 'EPIC';
  }

  generatePrediction(skill, context) {
    const predictions = [
      'Betrayal from an unexpected ally',
      'A hidden enemy will reveal themselves',
      'A great sacrifice will be required',
      'Two paths diverge, only one leads to victory',
      'The past will return to haunt you',
      'A moment of choice that changes everything'
    ];
    return predictions[Math.floor(Math.random() * predictions.length)];
  }

  calculateAccuracy(skill, prophecyType) {
    const baseAccuracy = PROPHECY_TYPES[prophecyType].accuracy;
    const skillBonus = skill.tier * 2;
    const pathBonus = this.playerState.oraclePath === 'PROPHET' ? 10 : 0;
    return Math.min(100, baseAccuracy + skillBonus + pathBonus);
  }

  findEvidence(skill, context) {
    const evidenceType = skill.skill_type.includes('Psychic') 
      ? EVIDENCE_TYPES.PSYCHIC 
      : skill.skill_type.includes('Time')
      ? EVIDENCE_TYPES.TEMPORAL
      : EVIDENCE_TYPES.PHYSICAL;

    return {
      type: evidenceType,
      description: `Evidence found using ${skill.name}`,
      reliability: skill.tier * 10,
      timestamp: Date.now()
    };
  }

  checkMysterySolved(mysteryId, mystery) {
    const evidence = this.playerState.evidenceCollected.get(mysteryId) || [];
    const required = mystery.requiredEvidence || MYSTERY_COMPLEXITY.MODERATE;

    if (evidence.length >= required) {
      this.playerState.mysteriesSolved++;
      return true;
    }
    return false;
  }

  generateFateAlteration(skill) {
    const alterations = [
      'Doom averted, new path opens',
      'Death delayed, but consequences remain',
      'Success guaranteed, at unknown cost',
      'Fate twisted, outcome uncertain'
    ];
    return alterations[Math.floor(Math.random() * alterations.length)];
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
    if (hook.trigger === 'first_prophecy' && this.playerState.activeProphecies.size === 1) {
      return true;
    }
    if (hook.trigger === 'mystery_solved' && this.playerState.mysteriesSolved > 0) {
      return true;
    }
    if (hook.trigger === 'fate_altered' && this.playerState.fateThreadsAltered > 0) {
      return true;
    }
    return false;
  }

  updatePlayerState(skill, context) {
    if (skill.skill_type.includes('Investigation')) {
      this.playerState.investigationRep += 1;
    }

    if (skill.skill_type.includes('Vision') || skill.skill_type.includes('Prophecy')) {
      this.playerState.visionHistory.push({
        skillId: skill.id,
        timestamp: Date.now()
      });
    }

    if (skill.tier >= 7) {
      this.playerState.prophecyAccuracy = Math.min(100, this.playerState.prophecyAccuracy + 1);
    }
  }

  setOraclePath(path) {
    if (Object.values(ORACLE_PATHS).includes(path)) {
      this.playerState.oraclePath = path;
    }
  }

  // ═══════════════════════════════════════════════════════════════════════
  // SAVE/LOAD
  // ═══════════════════════════════════════════════════════════════════════

  exportSaveData() {
    return {
      activeProphecies: Array.from(this.playerState.activeProphecies.entries()),
      mysteriesSolved: this.playerState.mysteriesSolved,
      evidenceCollected: Array.from(this.playerState.evidenceCollected.entries()),
      oraclePath: this.playerState.oraclePath,
      prophecyAccuracy: this.playerState.prophecyAccuracy,
      investigationRep: this.playerState.investigationRep,
      fateThreadsAltered: this.playerState.fateThreadsAltered,
      visionHistory: this.playerState.visionHistory
    };
  }

  importSaveData(saveData) {
    this.playerState.activeProphecies = new Map(saveData.activeProphecies);
    this.playerState.mysteriesSolved = saveData.mysteriesSolved;
    this.playerState.evidenceCollected = new Map(saveData.evidenceCollected);
    this.playerState.oraclePath = saveData.oraclePath;
    this.playerState.prophecyAccuracy = saveData.prophecyAccuracy;
    this.playerState.investigationRep = saveData.investigationRep;
    this.playerState.fateThreadsAltered = saveData.fateThreadsAltered;
    this.playerState.visionHistory = saveData.visionHistory;
  }

  getMeta() {
    return this.meta;
  }

  getPlayerState() {
    return {
      ...this.playerState,
      activePropheciesArray: Array.from(this.playerState.activeProphecies.entries()),
      evidenceCollectedArray: Array.from(this.playerState.evidenceCollected.entries())
    };
  }
}

export default DivinationEngine;

export {
  ORACLE_PATHS,
  PROPHECY_TYPES,
  EVIDENCE_TYPES,
  MYSTERY_COMPLEXITY
};
