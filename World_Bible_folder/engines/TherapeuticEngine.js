/**
 * ═══════════════════════════════════════════════════════════════════════════
 * THERAPEUTIC ENGINE - Complete Skill System
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * All 100 Therapeutic skills with full narrative-combat integration
 * Life-saving drama • Miraculous healing • PTSD recovery • Medical emergencies
 * 
 * @version 2.0_COMPLETE
 * @date 2025-11-18
 * @status Production Ready
 * ═══════════════════════════════════════════════════════════════════════════
 */

import therapeuticSkillsData from '../THERAPEUTIC_ENGINE_COMPLETE_v2.json';

// ═══════════════════════════════════════════════════════════════════════════
// CONSTANTS & CONFIGURATION
// ═══════════════════════════════════════════════════════════════════════════

const HEALING_TYPES = {
  PHYSICAL: 'Physical',
  PSYCHOLOGICAL: 'Psychological',
  SPIRITUAL: 'Spiritual',
  MIRACULOUS: 'Miraculous'
};

const WOUND_SEVERITIES = {
  MINOR: { threshold: 20, description: 'Scratches, bruises' },
  MODERATE: { threshold: 50, description: 'Deep cuts, fractures' },
  CRITICAL: { threshold: 80, description: 'Life-threatening injuries' },
  TERMINAL: { threshold: 100, description: 'Death imminent without intervention' }
};

const PTSD_STAGES = {
  TRAUMATIZED: 0,
  PROCESSING: 25,
  HEALING: 50,
  RECOVERING: 75,
  HEALED: 100
};

// ═══════════════════════════════════════════════════════════════════════════
// CORE THERAPEUTIC ENGINE
// ═══════════════════════════════════════════════════════════════════════════

export class TherapeuticEngine {
  constructor() {
    this.skills = therapeuticSkillsData.skills;
    this.meta = therapeuticSkillsData.meta;
    this.playerState = this.initializePlayerState();
  }

  initializePlayerState() {
    return {
      savedLives: 0,
      miraclesPerformed: 0,
      ptsdPatientsHealed: new Map(), // npcId -> healing progress
      medicalReputation: 0,
      healerBond: new Map(), // npcId -> trust level
      revivalCount: 0,
      traumaHistory: [] // record of major healing events
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

    const healingResult = this.applyHealing(skill, context);
    const narrativeResult = this.applyNarrativeEffect(skill, context);
    const psychologicalEffect = this.applyPsychologicalHealing(skill, context);
    const storyEvents = this.triggerStoryHooks(skill, context);

    this.updatePlayerState(skill, context);

    return {
      success: true,
      healing: healingResult,
      narrative: narrativeResult,
      psychological: psychologicalEffect,
      storyEvents: storyEvents,
      lifeSaved: healingResult.lifeSaved || false
    };
  }

  canUseSkill(skill, context) {
    if (context.player.bandwidth < skill.cost.bandwidth) {
      return { allowed: false, reason: 'Insufficient Bandwidth' };
    }
    if (context.player.kp < skill.cost.kp) {
      return { allowed: false, reason: 'Insufficient KP' };
    }

    // Revival skills require target to be recently deceased
    if (skill.skill_type.includes('Revival') && !context.target?.recentlyDeceased) {
      return { allowed: false, reason: 'Target not recently deceased' };
    }

    return { allowed: true };
  }

  applyHealing(skill, context) {
    const result = {
      hpRestored: 0,
      conditionsRemoved: [],
      lifeSaved: false,
      miraculous: false
    };

    const healingPower = this.calculateHealingPower(skill, context);
    
    if (skill.skill_type.includes('Revival')) {
      result.lifeSaved = true;
      result.miraculous = true;
      result.hpRestored = healingPower;
      this.playerState.miraclesPerformed++;
      this.playerState.revivalCount++;
    } else if (skill.skill_type.includes('Healing')) {
      result.hpRestored = healingPower;
      
      // Check if this saved a life
      if (context.target?.hp <= WOUND_SEVERITIES.CRITICAL.threshold) {
        result.lifeSaved = true;
        this.playerState.savedLives++;
      }
    }

    // Remove conditions
    if (skill.effect?.includes('cure') || skill.effect?.includes('cleanse')) {
      result.conditionsRemoved = ['Poison', 'Disease', 'Bleeding'];
    }

    return result;
  }

  applyPsychologicalHealing(skill, context) {
    if (!skill.skill_type.includes('Psychological') && !skill.skill_type.includes('Trauma')) {
      return null;
    }

    const targetId = context.target?.id;
    if (!targetId) return null;

    const currentProgress = this.playerState.ptsdPatientsHealed.get(targetId) || 0;
    const healingAmount = this.calculatePsychologicalHealing(skill, context);
    const newProgress = Math.min(100, currentProgress + healingAmount);

    this.playerState.ptsdPatientsHealed.set(targetId, newProgress);

    return {
      targetId: targetId,
      previousStage: this.getPTSDStage(currentProgress),
      newStage: this.getPTSDStage(newProgress),
      progress: newProgress,
      fullyHealed: newProgress >= PTSD_STAGES.HEALED
    };
  }

  applyNarrativeEffect(skill, context) {
    return {
      description: skill.narrative_effect.description,
      npcReactions: this.generateNPCReactions(skill, context),
      emotionalImpact: this.generateEmotionalImpact(skill, context),
      choices: this.generateChoices(skill, context)
    };
  }

  // ═══════════════════════════════════════════════════════════════════════
  // NARRATIVE GENERATION
  // ═══════════════════════════════════════════════════════════════════════

  generateNPCReactions(skill, context) {
    const reactions = [];

    // Healed target reaction
    if (context.target) {
      reactions.push({
        npc: context.target.name,
        dialogue: this.getHealedTargetDialogue(skill, context),
        relationshipChange: skill.tier * 3,
        emotionalState: 'Grateful'
      });
    }

    // Witness reactions
    if (context.npcs.includes('Marcus')) {
      reactions.push({
        npc: 'Marcus',
        dialogue: skill.skill_type.includes('Revival') 
          ? "'By the Light... you brought them back!'"
          : "'Thank the Light you were here.'",
        relationshipChange: +5
      });
    }

    if (context.npcs.includes('Elena')) {
      reactions.push({
        npc: 'Elena',
        dialogue: "'The medical precision is remarkable. How did you know?'",
        relationshipChange: +3
      });
    }

    return reactions;
  }

  getHealedTargetDialogue(skill, context) {
    if (skill.skill_type.includes('Revival')) {
      return "'I... I was gone. You brought me back. I owe you my life.'";
    }
    if (skill.skill_type.includes('Psychological')) {
      return "'For the first time in months... I feel like I can breathe.'";
    }
    return "'The pain... it's gone. Thank you.'";
  }

  generateEmotionalImpact(skill, context) {
    const impact = {
      hope: 0,
      trust: 0,
      bond: 0
    };

    if (skill.skill_type.includes('Revival')) {
      impact.hope = 50;
      impact.trust = 30;
      impact.bond = 20;
    } else if (skill.skill_type.includes('Psychological')) {
      impact.hope = 20;
      impact.trust = 40;
      impact.bond = 30;
    } else {
      impact.hope = 10;
      impact.trust = 15;
      impact.bond = 10;
    }

    return impact;
  }

  generateChoices(skill, context) {
    const choices = [];

    if (skill.skill_type.includes('Revival')) {
      choices.push({
        type: 'MIRACLE_CONSEQUENCE',
        text: 'Explain what happened to witnesses',
        options: [
          { text: 'Claim divine intervention', consequence: 'Reputation as prophet' },
          { text: 'Downplay the miracle', consequence: 'Keep abilities secret' },
          { text: 'Share the truth', consequence: 'Build trust, attract danger' }
        ]
      });
    }

    if (skill.skill_type.includes('Psychological') && context.target) {
      choices.push({
        type: 'THERAPY_PATH',
        text: 'Choose healing approach',
        options: [
          { text: 'Gentle, slow recovery', consequence: 'Build deep trust' },
          { text: 'Confrontational therapy', consequence: 'Faster but risky' }
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

  calculateHealingPower(skill, context) {
    const basePower = skill.tier * 20;
    const bondBonus = this.getHealerBondBonus(context.target?.id);
    return Math.floor(basePower * (1 + bondBonus));
  }

  calculatePsychologicalHealing(skill, context) {
    const baseHealing = skill.tier * 5;
    const trustLevel = this.playerState.healerBond.get(context.target?.id) || 0;
    return baseHealing + trustLevel;
  }

  getHealerBondBonus(targetId) {
    if (!targetId) return 0;
    const bond = this.playerState.healerBond.get(targetId) || 0;
    return bond / 100;
  }

  getPTSDStage(progress) {
    if (progress >= PTSD_STAGES.HEALED) return 'HEALED';
    if (progress >= PTSD_STAGES.RECOVERING) return 'RECOVERING';
    if (progress >= PTSD_STAGES.HEALING) return 'HEALING';
    if (progress >= PTSD_STAGES.PROCESSING) return 'PROCESSING';
    return 'TRAUMATIZED';
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
    if (hook.trigger === 'first_revival' && this.playerState.revivalCount === 1) {
      return true;
    }
    if (hook.trigger === 'save_child' && context.target?.type === 'child') {
      return true;
    }
    if (hook.trigger === 'ptsd_healed') {
      const targetProgress = this.playerState.ptsdPatientsHealed.get(context.target?.id);
      return targetProgress >= PTSD_STAGES.HEALED;
    }
    return false;
  }

  updatePlayerState(skill, context) {
    if (skill.skill_type.includes('Healing')) {
      this.playerState.medicalReputation += 1;
    }

    if (context.target?.id) {
      const currentBond = this.playerState.healerBond.get(context.target.id) || 0;
      this.playerState.healerBond.set(context.target.id, currentBond + 5);
    }

    if (skill.skill_type.includes('Revival') || skill.tier >= 8) {
      this.playerState.traumaHistory.push({
        skillId: skill.id,
        timestamp: Date.now(),
        target: context.target?.name || 'Unknown'
      });
    }
  }

  // ═══════════════════════════════════════════════════════════════════════
  // SAVE/LOAD
  // ═══════════════════════════════════════════════════════════════════════

  exportSaveData() {
    return {
      savedLives: this.playerState.savedLives,
      miraclesPerformed: this.playerState.miraclesPerformed,
      ptsdPatientsHealed: Array.from(this.playerState.ptsdPatientsHealed.entries()),
      medicalReputation: this.playerState.medicalReputation,
      healerBond: Array.from(this.playerState.healerBond.entries()),
      revivalCount: this.playerState.revivalCount,
      traumaHistory: this.playerState.traumaHistory
    };
  }

  importSaveData(saveData) {
    this.playerState.savedLives = saveData.savedLives;
    this.playerState.miraclesPerformed = saveData.miraclesPerformed;
    this.playerState.ptsdPatientsHealed = new Map(saveData.ptsdPatientsHealed);
    this.playerState.medicalReputation = saveData.medicalReputation;
    this.playerState.healerBond = new Map(saveData.healerBond);
    this.playerState.revivalCount = saveData.revivalCount;
    this.playerState.traumaHistory = saveData.traumaHistory;
  }

  getMeta() {
    return this.meta;
  }

  getPlayerState() {
    return {
      ...this.playerState,
      ptsdPatientsArray: Array.from(this.playerState.ptsdPatientsHealed.entries()),
      healerBondArray: Array.from(this.playerState.healerBond.entries())
    };
  }
}

export default TherapeuticEngine;

export {
  HEALING_TYPES,
  WOUND_SEVERITIES,
  PTSD_STAGES
};
