/**
 * ═══════════════════════════════════════════════════════════════════════════
 * CHARACTER ANALYSIS ENGINE - Complete Skill System
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * All 100 Character Analysis skills with full narrative-combat integration
 * Social combat • Manipulation vs empathy • Leadership • Psychological warfare
 * 
 * @version 2.0_COMPLETE
 * @date 2025-11-18
 * @status Production Ready
 * ═══════════════════════════════════════════════════════════════════════════
 */

import characterAnalysisSkillsData from '../CHARACTER_ANALYSIS_ENGINE_COMPLETE_v2.json';

// ═══════════════════════════════════════════════════════════════════════════
// CONSTANTS & CONFIGURATION
// ═══════════════════════════════════════════════════════════════════════════

const SOCIAL_COMBAT_TYPES = {
  PERSUASION: 'Persuasion',
  INTIMIDATION: 'Intimidation',
  DECEPTION: 'Deception',
  EMPATHY: 'Empathy'
};

const MANIPULATION_SPECTRUM = {
  PURE_EMPATHY: { value: -100, description: 'Selfless understanding' },
  BALANCED: { value: 0, description: 'Pragmatic balance' },
  PURE_MANIPULATION: { value: 100, description: 'Ruthless control' }
};

const LEADERSHIP_STYLES = {
  INSPIRATIONAL: 'Inspirational Leader',
  TACTICAL: 'Tactical Commander',
  CHARISMATIC: 'Charismatic Icon',
  FEARED: 'Feared Tyrant'
};

const PSYCHOLOGICAL_STATES = {
  CONFIDENT: 'Confident',
  BROKEN: 'Broken',
  LOYAL: 'Loyal',
  REBELLIOUS: 'Rebellious',
  MANIPULATED: 'Manipulated'
};

// ═══════════════════════════════════════════════════════════════════════════
// CORE CHARACTER ANALYSIS ENGINE
// ═══════════════════════════════════════════════════════════════════════════

export class CharacterAnalysisEngine {
  constructor() {
    this.skills = characterAnalysisSkillsData.skills;
    this.meta = characterAnalysisSkillsData.meta;
    this.playerState = this.initializePlayerState();
  }

  initializePlayerState() {
    return {
      manipulationScore: 0, // -100 to +100
      leadershipStyle: 'NEUTRAL',
      followersLed: new Map(), // followerId -> loyalty level
      socialCombatWins: 0,
      peopleManipulated: new Map(), // targetId -> manipulation data
      empathyBonds: new Map(), // targetId -> bond strength
      reputationAsLeader: 0,
      psychologicalVictories: 0
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

    const socialCombatResult = this.performSocialCombat(skill, context);
    const manipulationResult = this.applyManipulation(skill, context);
    const leadershipResult = this.applyLeadership(skill, context);
    const narrativeResult = this.applyNarrativeEffect(skill, context);
    const storyEvents = this.triggerStoryHooks(skill, context);

    this.updatePlayerState(skill, context);

    return {
      success: true,
      socialCombat: socialCombatResult,
      manipulation: manipulationResult,
      leadership: leadershipResult,
      narrative: narrativeResult,
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

    // Leadership skills require followers
    if (skill.skill_type.includes('Leadership') && this.playerState.followersLed.size === 0) {
      return { allowed: false, reason: 'No followers to lead' };
    }

    // Some empathy skills forbidden for pure manipulators
    if (skill.skill_type.includes('Empathy') 
        && this.playerState.manipulationScore >= MANIPULATION_SPECTRUM.PURE_MANIPULATION.value / 2) {
      return { allowed: false, reason: 'Too manipulative for genuine empathy' };
    }

    return { allowed: true };
  }

  performSocialCombat(skill, context) {
    if (!context.target) return null;

    const combatType = this.determineSocialCombatType(skill);
    const power = this.calculateSocialPower(skill, context);
    const success = this.resolveSocialCombat(power, context.target);

    if (success) {
      this.playerState.socialCombatWins++;
    }

    return {
      type: combatType,
      power: power,
      success: success,
      targetPsychologicalState: this.determineTargetState(skill, success),
      consequence: this.generateSocialConsequence(skill, success)
    };
  }

  applyManipulation(skill, context) {
    if (!skill.skill_type.includes('Manipulation') && !skill.skill_type.includes('Empathy')) {
      return null;
    }

    const targetId = context.target?.id;
    if (!targetId) return null;

    // Manipulation skills move score toward +100
    // Empathy skills move score toward -100
    let scoreChange = 0;
    if (skill.skill_type.includes('Manipulation')) {
      scoreChange = skill.tier * 2;
    } else if (skill.skill_type.includes('Empathy')) {
      scoreChange = -(skill.tier * 2);
    }

    const previousScore = this.playerState.manipulationScore;
    this.playerState.manipulationScore = Math.max(-100, Math.min(100, previousScore + scoreChange));

    // Track manipulation/empathy bond
    if (skill.skill_type.includes('Manipulation')) {
      const currentManipulation = this.playerState.peopleManipulated.get(targetId) || {
        level: 0,
        techniques: []
      };
      currentManipulation.level += skill.tier;
      currentManipulation.techniques.push(skill.name);
      this.playerState.peopleManipulated.set(targetId, currentManipulation);
    } else {
      const currentBond = this.playerState.empathyBonds.get(targetId) || 0;
      this.playerState.empathyBonds.set(targetId, currentBond + skill.tier);
    }

    return {
      scoreChange: scoreChange,
      newManipulationScore: this.playerState.manipulationScore,
      targetManipulated: skill.skill_type.includes('Manipulation'),
      bondStrength: this.playerState.empathyBonds.get(targetId) || 0,
      manipulationLevel: this.playerState.peopleManipulated.get(targetId)?.level || 0
    };
  }

  applyLeadership(skill, context) {
    if (!skill.skill_type.includes('Leadership') && !skill.skill_type.includes('Command')) {
      return null;
    }

    const leadershipPower = this.calculateLeadershipPower(skill);
    
    // Apply to all followers
    const followers = Array.from(this.playerState.followersLed.entries());
    followers.forEach(([followerId, loyalty]) => {
      const newLoyalty = Math.min(100, loyalty + skill.tier);
      this.playerState.followersLed.set(followerId, newLoyalty);
    });

    this.playerState.reputationAsLeader += skill.tier;

    return {
      power: leadershipPower,
      followersAffected: followers.length,
      reputationGain: skill.tier,
      totalReputation: this.playerState.reputationAsLeader,
      style: this.playerState.leadershipStyle
    };
  }

  applyNarrativeEffect(skill, context) {
    return {
      description: skill.narrative_effect.description,
      npcReactions: this.generateNPCReactions(skill, context),
      socialDynamicsShift: this.generateSocialShift(skill, context),
      choices: this.generateChoices(skill, context)
    };
  }

  // ═══════════════════════════════════════════════════════════════════════
  // NARRATIVE GENERATION
  // ═══════════════════════════════════════════════════════════════════════

  generateNPCReactions(skill, context) {
    const reactions = [];

    // Target reaction
    if (context.target) {
      reactions.push({
        npc: context.target.name,
        dialogue: this.getTargetReaction(skill, context),
        relationshipChange: this.calculateRelationshipChange(skill),
        emotionalState: this.determineTargetState(skill, true)
      });
    }

    // Observer reactions
    if (context.npcs.includes('Marcus')) {
      const marcusReaction = this.playerState.manipulationScore > 50
        ? "'You're playing with people's minds. That's dangerous.'"
        : "'You have a way with people. Natural leader.'";
      
      reactions.push({
        npc: 'Marcus',
        dialogue: marcusReaction,
        relationshipChange: this.playerState.manipulationScore > 50 ? -3 : +2
      });
    }

    return reactions;
  }

  getTargetReaction(skill, context) {
    if (skill.skill_type.includes('Manipulation')) {
      return "'You're right. I'll do as you say.'";
    }
    if (skill.skill_type.includes('Empathy')) {
      return "'You understand me. Finally, someone who listens.'";
    }
    if (skill.skill_type.includes('Intimidation')) {
      return "'I... I'll comply. Just don't hurt me.'";
    }
    if (skill.skill_type.includes('Leadership')) {
      return "'I'll follow you. You give me hope.'";
    }
    return "'Your words move me.'";
  }

  generateSocialShift(skill, context) {
    return {
      powerDynamicChanged: skill.tier >= 7,
      groupLoyaltyShift: skill.skill_type.includes('Leadership') ? +10 : 0,
      reputationImpact: this.getReputationImpact(skill)
    };
  }

  getReputationImpact(skill) {
    if (skill.skill_type.includes('Manipulation')) {
      return 'Seen as cunning manipulator (fear +5, trust -3)';
    }
    if (skill.skill_type.includes('Empathy')) {
      return 'Seen as compassionate leader (trust +8)';
    }
    if (skill.skill_type.includes('Leadership')) {
      return 'Seen as inspiring commander (respect +6)';
    }
    return 'Reputation unchanged';
  }

  generateChoices(skill, context) {
    const choices = [];

    // Leadership style choice
    if (this.playerState.leadershipStyle === 'NEUTRAL' 
        && this.playerState.followersLed.size >= 3) {
      choices.push({
        type: 'LEADERSHIP_STYLE',
        text: 'Your followers look to you. What kind of leader will you be?',
        options: [
          { text: 'Inspire them', consequence: 'Inspirational style, loyalty through hope', style: 'INSPIRATIONAL' },
          { text: 'Command them', consequence: 'Tactical style, efficiency focus', style: 'TACTICAL' },
          { text: 'Charm them', consequence: 'Charismatic style, personal devotion', style: 'CHARISMATIC' },
          { text: 'Dominate them', consequence: 'Feared style, obedience through terror', style: 'FEARED' }
        ]
      });
    }

    // Manipulation vs Empathy choice
    if (skill.skill_type.includes('Manipulation') || skill.skill_type.includes('Empathy')) {
      choices.push({
        type: 'MORAL_CHOICE',
        text: 'You could control this person or help them',
        options: [
          { text: 'Manipulate for advantage', consequence: 'Gain control, lose humanity' },
          { text: 'Show genuine empathy', consequence: 'Build real bond, slower progress' }
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

  determineSocialCombatType(skill) {
    const type = skill.skill_type[0];
    if (type.includes('Persuasion')) return SOCIAL_COMBAT_TYPES.PERSUASION;
    if (type.includes('Intimidation')) return SOCIAL_COMBAT_TYPES.INTIMIDATION;
    if (type.includes('Deception')) return SOCIAL_COMBAT_TYPES.DECEPTION;
    if (type.includes('Empathy')) return SOCIAL_COMBAT_TYPES.EMPATHY;
    return SOCIAL_COMBAT_TYPES.PERSUASION;
  }

  calculateSocialPower(skill, context) {
    const basePower = skill.tier * 12;
    const manipulationBonus = Math.abs(this.playerState.manipulationScore) / 100;
    const reputationBonus = this.playerState.reputationAsLeader / 100;
    return Math.floor(basePower * (1 + manipulationBonus + reputationBonus));
  }

  calculateLeadershipPower(skill) {
    const basePower = skill.tier * 10;
    const followerBonus = this.playerState.followersLed.size * 5;
    return basePower + followerBonus;
  }

  resolveSocialCombat(power, target) {
    const targetResistance = target.willpower || 50;
    return power >= targetResistance;
  }

  determineTargetState(skill, success) {
    if (!success) return PSYCHOLOGICAL_STATES.REBELLIOUS;
    
    if (skill.skill_type.includes('Intimidation')) return PSYCHOLOGICAL_STATES.BROKEN;
    if (skill.skill_type.includes('Manipulation')) return PSYCHOLOGICAL_STATES.MANIPULATED;
    if (skill.skill_type.includes('Empathy')) return PSYCHOLOGICAL_STATES.CONFIDENT;
    if (skill.skill_type.includes('Leadership')) return PSYCHOLOGICAL_STATES.LOYAL;
    
    return PSYCHOLOGICAL_STATES.CONFIDENT;
  }

  generateSocialConsequence(skill, success) {
    if (!success) return 'Target resists, relationship damaged';
    
    if (skill.skill_type.includes('Manipulation')) {
      return 'Target complies, unaware of manipulation';
    }
    if (skill.skill_type.includes('Empathy')) {
      return 'Target opens up, genuine bond formed';
    }
    return 'Target convinced, relationship improved';
  }

  calculateRelationshipChange(skill) {
    if (skill.skill_type.includes('Empathy')) return skill.tier;
    if (skill.skill_type.includes('Manipulation')) return Math.floor(skill.tier / 2);
    if (skill.skill_type.includes('Intimidation')) return -skill.tier;
    return skill.tier;
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
    if (hook.trigger === 'pure_manipulator' 
        && this.playerState.manipulationScore >= MANIPULATION_SPECTRUM.PURE_MANIPULATION.value / 2) {
      return true;
    }
    if (hook.trigger === 'pure_empath' 
        && this.playerState.manipulationScore <= MANIPULATION_SPECTRUM.PURE_EMPATHY.value / 2) {
      return true;
    }
    if (hook.trigger === 'leader_emerges' && this.playerState.followersLed.size >= 5) {
      return true;
    }
    return false;
  }

  updatePlayerState(skill, context) {
    if (skill.tier >= 8) {
      this.playerState.psychologicalVictories++;
    }
  }

  setLeadershipStyle(style) {
    if (Object.values(LEADERSHIP_STYLES).includes(style)) {
      this.playerState.leadershipStyle = style;
    }
  }

  addFollower(followerId, initialLoyalty = 50) {
    this.playerState.followersLed.set(followerId, initialLoyalty);
  }

  // ═══════════════════════════════════════════════════════════════════════
  // SAVE/LOAD
  // ═══════════════════════════════════════════════════════════════════════

  exportSaveData() {
    return {
      manipulationScore: this.playerState.manipulationScore,
      leadershipStyle: this.playerState.leadershipStyle,
      followersLed: Array.from(this.playerState.followersLed.entries()),
      socialCombatWins: this.playerState.socialCombatWins,
      peopleManipulated: Array.from(this.playerState.peopleManipulated.entries()),
      empathyBonds: Array.from(this.playerState.empathyBonds.entries()),
      reputationAsLeader: this.playerState.reputationAsLeader,
      psychologicalVictories: this.playerState.psychologicalVictories
    };
  }

  importSaveData(saveData) {
    this.playerState.manipulationScore = saveData.manipulationScore;
    this.playerState.leadershipStyle = saveData.leadershipStyle;
    this.playerState.followersLed = new Map(saveData.followersLed);
    this.playerState.socialCombatWins = saveData.socialCombatWins;
    this.playerState.peopleManipulated = new Map(saveData.peopleManipulated);
    this.playerState.empathyBonds = new Map(saveData.empathyBonds);
    this.playerState.reputationAsLeader = saveData.reputationAsLeader;
    this.playerState.psychologicalVictories = saveData.psychologicalVictories;
  }

  getMeta() {
    return this.meta;
  }

  getPlayerState() {
    return {
      ...this.playerState,
      followersLedArray: Array.from(this.playerState.followersLed.entries()),
      peopleManipulatedArray: Array.from(this.playerState.peopleManipulated.entries()),
      empathyBondsArray: Array.from(this.playerState.empathyBonds.entries()),
      moralAlignment: this.getMoralAlignment()
    };
  }

  getMoralAlignment() {
    if (this.playerState.manipulationScore >= 50) return 'Dark Manipulator';
    if (this.playerState.manipulationScore <= -50) return 'Pure Empath';
    return 'Balanced Pragmatist';
  }
}

export default CharacterAnalysisEngine;

export {
  SOCIAL_COMBAT_TYPES,
  MANIPULATION_SPECTRUM,
  LEADERSHIP_STYLES,
  PSYCHOLOGICAL_STATES
};
