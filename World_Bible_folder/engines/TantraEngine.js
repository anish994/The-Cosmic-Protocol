/**
 * ═══════════════════════════════════════════════════════════════════════════
 * TANTRA ENGINE - Complete Skill System
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * All 100 Tantra skills with full narrative-combat integration
 * Energy transfer • Soul bonds • Kundalini awakening • Sacred intimacy
 * 
 * @version 2.0_COMPLETE
 * @date 2025-11-18
 * @status Production Ready
 * ═══════════════════════════════════════════════════════════════════════════
 */

import tantraSkillsData from '../TANTRA_ENGINE_COMPLETE_v2.json';

// ═══════════════════════════════════════════════════════════════════════════
// CONSTANTS & CONFIGURATION
// ═══════════════════════════════════════════════════════════════════════════

const BOND_TYPES = {
  SURFACE: 'Surface',
  INTIMATE: 'Intimate',
  SOUL: 'Soul',
  TRANSCENDENT: 'Transcendent'
};

const KUNDALINI_CHAKRAS = {
  ROOT: { level: 1, name: 'Muladhara', color: 'Red' },
  SACRAL: { level: 2, name: 'Svadhisthana', color: 'Orange' },
  SOLAR: { level: 3, name: 'Manipura', color: 'Yellow' },
  HEART: { level: 4, name: 'Anahata', color: 'Green' },
  THROAT: { level: 5, name: 'Vishuddha', color: 'Blue' },
  THIRD_EYE: { level: 6, name: 'Ajna', color: 'Indigo' },
  CROWN: { level: 7, name: 'Sahasrara', color: 'Violet' }
};

const INTIMACY_REQUIREMENTS = {
  TRUST: 50,
  CONSENT: 100,
  MUTUAL_UNDERSTANDING: 30
};

// ═══════════════════════════════════════════════════════════════════════════
// CORE TANTRA ENGINE
// ═══════════════════════════════════════════════════════════════════════════

export class TantraEngine {
  constructor() {
    this.skills = tantraSkillsData.skills;
    this.meta = tantraSkillsData.meta;
    this.playerState = this.initializePlayerState();
  }

  initializePlayerState() {
    return {
      soulBonds: new Map(), // partnerId -> bond data
      kundaliniLevel: 1, // 1-7 (chakra levels)
      energyTransfers: 0,
      sacredIntimacyCount: 0,
      tantraicMastery: 0,
      transcendentExperiences: [],
      partnersAwakened: new Map() // partnerId -> awakening level
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

    const energyResult = this.applyEnergyTransfer(skill, context);
    const bondResult = this.applyBondEffect(skill, context);
    const narrativeResult = this.applyNarrativeEffect(skill, context);
    const kundaliniEffect = this.applyKundaliniEffect(skill, context);
    const storyEvents = this.triggerStoryHooks(skill, context);

    this.updatePlayerState(skill, context);

    return {
      success: true,
      energy: energyResult,
      bond: bondResult,
      narrative: narrativeResult,
      kundalini: kundaliniEffect,
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

    // Intimacy-based skills require consent and trust
    if (skill.skill_type.includes('Intimacy') || skill.skill_type.includes('Sacred')) {
      const partner = context.partner;
      if (!partner) {
        return { allowed: false, reason: 'No partner present' };
      }

      const trust = this.getTrustLevel(partner.id);
      if (trust < INTIMACY_REQUIREMENTS.TRUST) {
        return { allowed: false, reason: 'Insufficient trust level' };
      }

      if (!partner.consent) {
        return { allowed: false, reason: 'Consent not given' };
      }
    }

    // Kundalini skills require chakra level
    if (skill.skill_type.includes('Kundalini')) {
      const requiredLevel = Math.ceil(skill.tier / 1.5);
      if (this.playerState.kundaliniLevel < requiredLevel) {
        return { allowed: false, reason: `Kundalini level ${requiredLevel} required` };
      }
    }

    return { allowed: true };
  }

  applyEnergyTransfer(skill, context) {
    if (!skill.skill_type.includes('Energy')) {
      return null;
    }

    const transferAmount = this.calculateEnergyTransfer(skill, context);
    const direction = skill.effect?.includes('absorb') ? 'RECEIVE' : 'GIVE';

    this.playerState.energyTransfers++;

    return {
      amount: transferAmount,
      direction: direction,
      partnerId: context.partner?.id,
      synchronized: this.isSynchronized(context.partner?.id)
    };
  }

  applyBondEffect(skill, context) {
    if (!skill.skill_type.includes('Bond') && !skill.skill_type.includes('Soul')) {
      return null;
    }

    const partnerId = context.partner?.id;
    if (!partnerId) return null;

    const currentBond = this.playerState.soulBonds.get(partnerId) || {
      level: 0,
      type: BOND_TYPES.SURFACE,
      experiences: []
    };

    const bondIncrease = skill.tier * 5;
    const newLevel = currentBond.level + bondIncrease;
    const newType = this.determineBondType(newLevel);

    const updatedBond = {
      level: newLevel,
      type: newType,
      experiences: [...currentBond.experiences, {
        skillId: skill.id,
        timestamp: Date.now()
      }]
    };

    this.playerState.soulBonds.set(partnerId, updatedBond);

    return {
      partnerId: partnerId,
      previousType: currentBond.type,
      newType: newType,
      bondLevel: newLevel,
      strengthened: newLevel > currentBond.level
    };
  }

  applyKundaliniEffect(skill, context) {
    if (!skill.skill_type.includes('Kundalini') && !skill.skill_type.includes('Chakra')) {
      return null;
    }

    const previousLevel = this.playerState.kundaliniLevel;
    const awakening = skill.tier >= 8;

    if (awakening && previousLevel < 7) {
      this.playerState.kundaliniLevel = Math.min(7, previousLevel + 1);
    }

    const currentChakra = Object.values(KUNDALINI_CHAKRAS).find(
      c => c.level === this.playerState.kundaliniLevel
    );

    return {
      previousLevel: previousLevel,
      newLevel: this.playerState.kundaliniLevel,
      currentChakra: currentChakra,
      awakened: this.playerState.kundaliniLevel > previousLevel,
      fullyAwakened: this.playerState.kundaliniLevel === 7
    };
  }

  applyNarrativeEffect(skill, context) {
    return {
      description: skill.narrative_effect.description,
      npcReactions: this.generateNPCReactions(skill, context),
      emotionalShift: this.generateEmotionalShift(skill, context),
      choices: this.generateChoices(skill, context)
    };
  }

  // ═══════════════════════════════════════════════════════════════════════
  // NARRATIVE GENERATION
  // ═══════════════════════════════════════════════════════════════════════

  generateNPCReactions(skill, context) {
    const reactions = [];

    // Partner reaction
    if (context.partner) {
      reactions.push({
        npc: context.partner.name,
        dialogue: this.getPartnerDialogue(skill, context),
        relationshipChange: skill.tier * 2,
        emotionalState: this.getEmotionalState(skill)
      });
    }

    // Witness reactions (if public)
    if (context.witnesses && skill.skill_type.includes('Public')) {
      reactions.push({
        npc: 'Witnesses',
        dialogue: "'Such... intense energy between them.'",
        relationshipChange: -5, // Some disapproval
        emotionalState: 'Uncomfortable'
      });
    }

    return reactions;
  }

  getPartnerDialogue(skill, context) {
    if (skill.skill_type.includes('Transcendent')) {
      return "'We're... one. I can feel your soul merged with mine.'";
    }
    if (skill.skill_type.includes('Kundalini')) {
      return "'The energy... it's awakening something within me.'";
    }
    if (skill.skill_type.includes('Soul')) {
      return "'I've never felt this connected to anyone before.'";
    }
    return "'This connection... it's profound.'";
  }

  getEmotionalState(skill) {
    if (skill.skill_type.includes('Transcendent')) return 'Ecstatic';
    if (skill.skill_type.includes('Sacred')) return 'Reverent';
    if (skill.skill_type.includes('Intimate')) return 'Vulnerable';
    return 'Connected';
  }

  generateEmotionalShift(skill, context) {
    return {
      vulnerability: skill.tier * 3,
      trust: skill.tier * 5,
      intimacy: skill.tier * 4,
      spiritualConnection: skill.tier * 2
    };
  }

  generateChoices(skill, context) {
    const choices = [];

    if (skill.skill_type.includes('Soul') && context.partner) {
      choices.push({
        type: 'BOND_DEPTH',
        text: 'How deep to go with this connection?',
        options: [
          { text: 'Maintain boundaries', consequence: 'Safe but limited growth' },
          { text: 'Open fully', consequence: 'Deep bond, vulnerability exposed' },
          { text: 'Merge souls', consequence: 'Permanent connection, shared fate' }
        ]
      });
    }

    if (skill.skill_type.includes('Kundalini') && this.playerState.kundaliniLevel >= 6) {
      choices.push({
        type: 'AWAKENING_PATH',
        text: 'The Crown Chakra beckons',
        options: [
          { text: 'Ascend alone', consequence: 'Individual enlightenment' },
          { text: 'Ascend together', consequence: 'Shared transcendence, eternal bond' }
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

  getTrustLevel(partnerId) {
    const bond = this.playerState.soulBonds.get(partnerId);
    return bond?.level || 0;
  }

  isSynchronized(partnerId) {
    const bond = this.playerState.soulBonds.get(partnerId);
    return bond?.type === BOND_TYPES.SOUL || bond?.type === BOND_TYPES.TRANSCENDENT;
  }

  determineBondType(level) {
    if (level >= 100) return BOND_TYPES.TRANSCENDENT;
    if (level >= 60) return BOND_TYPES.SOUL;
    if (level >= 30) return BOND_TYPES.INTIMATE;
    return BOND_TYPES.SURFACE;
  }

  calculateEnergyTransfer(skill, context) {
    const basePower = skill.tier * 15;
    const bondMultiplier = this.isSynchronized(context.partner?.id) ? 1.5 : 1.0;
    return Math.floor(basePower * bondMultiplier);
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
    if (hook.trigger === 'soul_bond_formed') {
      const bond = this.playerState.soulBonds.get(context.partner?.id);
      return bond?.type === BOND_TYPES.SOUL || bond?.type === BOND_TYPES.TRANSCENDENT;
    }
    if (hook.trigger === 'kundalini_awakening' && this.playerState.kundaliniLevel === 7) {
      return true;
    }
    if (hook.trigger === 'first_sacred_act' && this.playerState.sacredIntimacyCount === 1) {
      return true;
    }
    return false;
  }

  updatePlayerState(skill, context) {
    if (skill.skill_type.includes('Sacred') || skill.skill_type.includes('Intimacy')) {
      this.playerState.sacredIntimacyCount++;
    }

    if (skill.tier >= 7) {
      this.playerState.tantraicMastery += 1;
    }

    if (skill.skill_type.includes('Transcendent')) {
      this.playerState.transcendentExperiences.push({
        skillId: skill.id,
        partnerId: context.partner?.id,
        timestamp: Date.now()
      });
    }
  }

  // ═══════════════════════════════════════════════════════════════════════
  // SAVE/LOAD
  // ═══════════════════════════════════════════════════════════════════════

  exportSaveData() {
    return {
      soulBonds: Array.from(this.playerState.soulBonds.entries()),
      kundaliniLevel: this.playerState.kundaliniLevel,
      energyTransfers: this.playerState.energyTransfers,
      sacredIntimacyCount: this.playerState.sacredIntimacyCount,
      tantraicMastery: this.playerState.tantraicMastery,
      transcendentExperiences: this.playerState.transcendentExperiences,
      partnersAwakened: Array.from(this.playerState.partnersAwakened.entries())
    };
  }

  importSaveData(saveData) {
    this.playerState.soulBonds = new Map(saveData.soulBonds);
    this.playerState.kundaliniLevel = saveData.kundaliniLevel;
    this.playerState.energyTransfers = saveData.energyTransfers;
    this.playerState.sacredIntimacyCount = saveData.sacredIntimacyCount;
    this.playerState.tantraicMastery = saveData.tantraicMastery;
    this.playerState.transcendentExperiences = saveData.transcendentExperiences;
    this.playerState.partnersAwakened = new Map(saveData.partnersAwakened);
  }

  getMeta() {
    return this.meta;
  }

  getPlayerState() {
    return {
      ...this.playerState,
      soulBondsArray: Array.from(this.playerState.soulBonds.entries()),
      partnersAwakenedArray: Array.from(this.playerState.partnersAwakened.entries()),
      currentChakra: Object.values(KUNDALINI_CHAKRAS).find(
        c => c.level === this.playerState.kundaliniLevel
      )
    };
  }
}

export default TantraEngine;

export {
  BOND_TYPES,
  KUNDALINI_CHAKRAS,
  INTIMACY_REQUIREMENTS
};
