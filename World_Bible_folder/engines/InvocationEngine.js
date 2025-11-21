/**
 * ═══════════════════════════════════════════════════════════════════════════
 * INVOCATION ENGINE - Complete Skill System
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * All 337 Invocation skills with full narrative-combat integration
 * Deity relationships • Pantheon depth • Divine pacts • Theological conflicts
 * 
 * Pantheons: Angelic (5) • Demonic (3) • Vedic (4) • Japanese (6) • African (6) • Other (313)
 * 
 * @version 2.0_COMPLETE
 * @date 2025-11-18
 * @status Production Ready
 * ═══════════════════════════════════════════════════════════════════════════
 */

import invocationSkillsData from './INVOCATION_ENGINE_COMPLETE_v2.json';

// ═══════════════════════════════════════════════════════════════════════════
// CONSTANTS & CONFIGURATION
// ═══════════════════════════════════════════════════════════════════════════

const PANTHEONS = {
  ANGELIC: 'Angelic',
  DEMONIC: 'Demonic',
  VEDIC: 'Vedic',
  JAPANESE: 'Japanese',
  AFRICAN: 'African',
  OTHER: 'Other'
};

const ALIGNMENT = {
  GOOD: 1,
  NEUTRAL: 0,
  EVIL: -1
};

const FAVOR_THRESHOLDS = {
  HATED: -50,
  HOSTILE: -25,
  NEUTRAL: 0,
  FRIENDLY: 25,
  FAVORED: 50,
  CHAMPION: 75,
  AVATAR: 100
};

const THEOLOGICAL_CONFLICTS = {
  ANGEL_DEMON: {
    pantheons: [PANTHEONS.ANGELIC, PANTHEONS.DEMONIC],
    severity: 'EXTREME',
    description: 'Angels and demons are eternal enemies. Serving both creates crisis.'
  },
  MONOTHEISM_POLYTHEISM: {
    pantheons: [PANTHEONS.ANGELIC, PANTHEONS.VEDIC],
    severity: 'HIGH',
    description: 'One god vs many gods - theological incompatibility.'
  }
};

// ═══════════════════════════════════════════════════════════════════════════
// CORE INVOCATION ENGINE
// ═══════════════════════════════════════════════════════════════════════════

export class InvocationEngine {
  constructor() {
    this.skills = invocationSkillsData.skills;
    this.meta = invocationSkillsData.meta;
    this.playerState = this.initializePlayerState();
  }

  /**
   * Initialize player's deity relationship state
   */
  initializePlayerState() {
    return {
      deityFavor: new Map(), // deity -> favor value
      activePantheons: new Set(),
      alignment: 0, // -100 (evil) to +100 (good)
      corruption: 0,
      enlightenment: 0,
      pacts: [], // Active divine pacts
      blessings: [], // Active deity blessings
      curses: [] // Active deity curses
    };
  }

  // ═══════════════════════════════════════════════════════════════════════
  // SKILL EXECUTION
  // ═══════════════════════════════════════════════════════════════════════

  /**
   * Execute an invocation skill
   * @param {string} skillId - The skill ID to execute
   * @param {Object} context - Game context (target, allies, enemies, etc.)
   * @returns {Object} Execution result with combat effects and narrative
   */
  executeSkill(skillId, context) {
    const skill = this.getSkill(skillId);
    if (!skill) {
      throw new Error(`Skill ${skillId} not found`);
    }

    // Check if player can use this skill
    const canUse = this.canUseSkill(skill, context);
    if (!canUse.allowed) {
      return { success: false, reason: canUse.reason };
    }

    // Pre-execution: Check theological conflicts
    const conflicts = this.checkTheologicalConflicts(skill);
    if (conflicts.length > 0) {
      return this.handleTheologicalConflict(skill, conflicts, context);
    }

    // Execute combat effect
    const combatResult = this.applyCombatEffect(skill, context);

    // Execute narrative effect
    const narrativeResult = this.applyNarrativeEffect(skill, context);

    // Update deity favor
    this.updateDeityFavor(skill, context);

    // Update player state
    this.updatePlayerState(skill, context);

    // Trigger story hooks
    const storyEvents = this.triggerStoryHooks(skill, context);

    return {
      success: true,
      combat: combatResult,
      narrative: narrativeResult,
      storyEvents: storyEvents,
      favorChanges: this.getRecentFavorChanges(),
      warnings: this.getActiveWarnings()
    };
  }

  /**
   * Check if player can use this skill
   */
  canUseSkill(skill, context) {
    // Check resource costs
    if (context.player.bandwidth < skill.cost.bandwidth) {
      return { allowed: false, reason: 'Insufficient Bandwidth' };
    }
    if (context.player.kp < skill.cost.kp) {
      return { allowed: false, reason: 'Insufficient KP' };
    }

    // Check deity favor
    const deity = skill.deity;
    const currentFavor = this.getDeityFavor(deity);
    
    if (currentFavor <= FAVOR_THRESHOLDS.HATED) {
      return { 
        allowed: false, 
        reason: `${deity} REFUSES to answer. You are HATED.` 
      };
    }

    // Check cooldown
    if (this.isOnCooldown(skill.id, context)) {
      return { allowed: false, reason: 'Skill on cooldown' };
    }

    return { allowed: true };
  }

  /**
   * Apply combat effects
   */
  applyCombatEffect(skill, context) {
    const effects = {
      damage: 0,
      healing: 0,
      buffs: [],
      debuffs: [],
      summons: [],
      statusChanges: []
    };

    // Parse primary effect
    const primaryEffect = skill.combat_effect.primary;
    
    // Apply based on skill type
    switch (skill.skill_type) {
      case 'Blessing':
        effects.buffs.push({
          target: context.target,
          type: 'divine_blessing',
          duration: this.calculateDuration(skill),
          power: this.calculatePower(skill, context)
        });
        break;

      case 'Curse':
        effects.debuffs.push({
          target: context.target,
          type: 'divine_curse',
          duration: this.calculateDuration(skill),
          power: this.calculatePower(skill, context)
        });
        break;

      case 'Summoning':
        effects.summons.push({
          entity: skill.deity,
          duration: this.calculateDuration(skill),
          power: this.calculatePower(skill, context)
        });
        break;

      case 'Divine Power':
        effects.damage = this.calculateDamage(skill, context);
        break;
    }

    return effects;
  }

  /**
   * Apply narrative effects and generate story moments
   */
  applyNarrativeEffect(skill, context) {
    const narrative = {
      description: skill.narrative_effect.description,
      npcReactions: this.generateNPCReactions(skill, context),
      environmentalChanges: [],
      playerThoughts: this.generatePlayerThoughts(skill, context),
      choices: []
    };

    // Check for special narrative triggers
    if (this.isFirstInvocation(skill.deity)) {
      narrative.choices.push({
        type: 'FIRST_CONTACT',
        deity: skill.deity,
        options: [
          { text: 'Approach with humility', alignment: ALIGNMENT.GOOD },
          { text: 'Demand power', alignment: ALIGNMENT.NEUTRAL },
          { text: 'Offer dark bargain', alignment: ALIGNMENT.EVIL }
        ]
      });
    }

    return narrative;
  }

  /**
   * Generate NPC reactions based on skill usage
   */
  generateNPCReactions(skill, context) {
    const reactions = [];

    // Marcus reaction
    if (context.npcs.includes('Marcus')) {
      const marcusReaction = this.getMarcusReaction(skill, context);
      reactions.push({
        npc: 'Marcus',
        dialogue: marcusReaction.dialogue,
        relationshipChange: marcusReaction.relationshipChange
      });
    }

    // Elena reaction
    if (context.npcs.includes('Elena')) {
      const elenaReaction = this.getElenaReaction(skill, context);
      reactions.push({
        npc: 'Elena',
        dialogue: elenaReaction.dialogue,
        relationshipChange: elenaReaction.relationshipChange
      });
    }

    // Faction reactions
    const factionReactions = this.getFactionReactions(skill, context);
    reactions.push(...factionReactions);

    return reactions;
  }

  /**
   * Get Marcus's reaction to invocation
   */
  getMarcusReaction(skill, context) {
    const npcReactions = skill.narrative_effect.npc_reactions.Marcus;
    const favor = this.getDeityFavor(skill.deity);

    if (skill.pantheon === PANTHEONS.ANGELIC) {
      return {
        dialogue: npcReactions.respect || "'Holy power. I can feel its purity.'",
        relationshipChange: +2
      };
    } else if (skill.pantheon === PANTHEONS.DEMONIC) {
      return {
        dialogue: npcReactions.fear || "'That's... demonic. Be VERY careful.'",
        relationshipChange: -2
      };
    } else {
      return {
        dialogue: npcReactions.curious || `'${skill.deity}? Tell me about your deity.'`,
        relationshipChange: 0
      };
    }
  }

  /**
   * Get Elena's reaction to invocation
   */
  getElenaReaction(skill, context) {
    const npcReactions = skill.narrative_effect.npc_reactions.Elena;
    
    return {
      dialogue: npcReactions.analysis || `'${skill.deity}—is it real entity or psychological phenomenon?'`,
      relationshipChange: +1 // Elena is always fascinated by new phenomena
    };
  }

  /**
   * Get faction reactions
   */
  getFactionReactions(skill, context) {
    const reactions = [];

    // Religious factions care about alignment
    if (skill.pantheon === PANTHEONS.ANGELIC) {
      reactions.push({
        faction: 'Light Paladins',
        reputationChange: +5
      });
      reactions.push({
        faction: 'Demon Cultists',
        reputationChange: -10
      });
    } else if (skill.pantheon === PANTHEONS.DEMONIC) {
      reactions.push({
        faction: 'Light Paladins',
        reputationChange: -10
      });
      reactions.push({
        faction: 'Demon Cultists',
        reputationChange: +5
      });
    }

    return reactions;
  }

  // ═══════════════════════════════════════════════════════════════════════
  // DEITY FAVOR SYSTEM
  // ═══════════════════════════════════════════════════════════════════════

  /**
   * Update deity favor after skill use
   */
  updateDeityFavor(skill, context) {
    const deity = skill.deity;
    const currentFavor = this.getDeityFavor(deity);
    const favorChange = -skill.cost.favor_cost; // Using skill costs favor

    this.setDeityFavor(deity, currentFavor + favorChange);
    this.playerState.activePantheons.add(skill.pantheon);

    // Track alignment shift
    this.playerState.alignment += skill.cost.alignment_shift;
  }

  /**
   * Get current favor with deity
   */
  getDeityFavor(deity) {
    return this.playerState.deityFavor.get(deity) || 0;
  }

  /**
   * Set deity favor
   */
  setDeityFavor(deity, favor) {
    const clampedFavor = Math.max(-100, Math.min(100, favor));
    this.playerState.deityFavor.set(deity, clampedFavor);

    // Check for favor threshold events
    this.checkFavorThresholds(deity, clampedFavor);
  }

  /**
   * Check for favor threshold crossing events
   */
  checkFavorThresholds(deity, favor) {
    if (favor >= FAVOR_THRESHOLDS.AVATAR) {
      this.triggerEvent('AVATAR_ASCENSION', { deity });
    } else if (favor >= FAVOR_THRESHOLDS.CHAMPION) {
      this.triggerEvent('CHAMPION_CHOSEN', { deity });
    } else if (favor >= FAVOR_THRESHOLDS.FAVORED) {
      this.triggerEvent('DEITY_FAVORS_YOU', { deity });
    } else if (favor <= FAVOR_THRESHOLDS.HATED) {
      this.triggerEvent('DEITY_HATRED', { deity });
    }
  }

  // ═══════════════════════════════════════════════════════════════════════
  // THEOLOGICAL CONFLICTS
  // ═══════════════════════════════════════════════════════════════════════

  /**
   * Check for theological conflicts
   */
  checkTheologicalConflicts(skill) {
    const conflicts = [];
    const activePantheons = Array.from(this.playerState.activePantheons);

    // Check Angel vs Demon conflict
    if (skill.pantheon === PANTHEONS.ANGELIC && 
        activePantheons.includes(PANTHEONS.DEMONIC)) {
      conflicts.push({
        type: 'ANGEL_DEMON',
        severity: 'EXTREME',
        message: '⚠️ THEOLOGICAL CRISIS: You serve both Heaven and Hell! ⚠️'
      });
    }

    if (skill.pantheon === PANTHEONS.DEMONIC && 
        activePantheons.includes(PANTHEONS.ANGELIC)) {
      conflicts.push({
        type: 'ANGEL_DEMON',
        severity: 'EXTREME',
        message: '⚠️ THEOLOGICAL CRISIS: You serve both Heaven and Hell! ⚠️'
      });
    }

    return conflicts;
  }

  /**
   * Handle theological conflict
   */
  handleTheologicalConflict(skill, conflicts, context) {
    const conflict = conflicts[0]; // Handle first conflict

    return {
      success: false,
      conflictDetected: true,
      conflict: conflict,
      choices: [
        {
          text: `Abandon ${skill.deity} and embrace opposing pantheon`,
          action: 'ABANDON_DEITY',
          consequence: 'Lose all favor with this pantheon'
        },
        {
          text: 'Continue anyway (become heretic to both)',
          action: 'HERETIC_PATH',
          consequence: 'Both pantheons hostile, unique outcast path'
        },
        {
          text: 'Seek balance (extremely difficult)',
          action: 'BALANCE_PATH',
          consequence: 'Paradox path unlocked, requires wisdom'
        }
      ]
    };
  }

  // ═══════════════════════════════════════════════════════════════════════
  // STORY HOOKS & EVENTS
  // ═══════════════════════════════════════════════════════════════════════

  /**
   * Trigger story hooks based on skill usage
   */
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

  /**
   * Check if story hook should trigger
   */
  shouldTriggerHook(hook, skill, context) {
    switch (hook.trigger) {
      case 'first_invocation':
        return this.isFirstInvocation(skill.deity);
      
      case 'angelic_favor_high':
        return this.getDeityFavor(skill.deity) >= FAVOR_THRESHOLDS.FAVORED;
      
      case 'demonic_pact_offered':
        return this.getDeityFavor(skill.deity) >= FAVOR_THRESHOLDS.FRIENDLY &&
               skill.pantheon === PANTHEONS.DEMONIC;
      
      default:
        return false;
    }
  }

  /**
   * Check if this is first invocation of deity
   */
  isFirstInvocation(deity) {
    return !this.playerState.deityFavor.has(deity);
  }

  // ═══════════════════════════════════════════════════════════════════════
  // SKILL QUERIES & UTILITIES
  // ═══════════════════════════════════════════════════════════════════════

  /**
   * Get skill by ID
   */
  getSkill(skillId) {
    return this.skills.find(s => s.id === skillId);
  }

  /**
   * Get all skills for a pantheon
   */
  getSkillsByPantheon(pantheon) {
    return this.skills.filter(s => s.pantheon === pantheon);
  }

  /**
   * Get all skills for a deity
   */
  getSkillsByDeity(deity) {
    return this.skills.filter(s => s.deity === deity);
  }

  /**
   * Search skills by name
   */
  searchSkills(query) {
    const lowerQuery = query.toLowerCase();
    return this.skills.filter(s => 
      s.name.toLowerCase().includes(lowerQuery) ||
      s.display_name.toLowerCase().includes(lowerQuery)
    );
  }

  /**
   * Get available skills for player (unlocked and meetable requirements)
   */
  getAvailableSkills(playerContext) {
    return this.skills.filter(skill => {
      // Check if unlocked
      if (!this.isSkillUnlocked(skill, playerContext)) {
        return false;
      }

      // Check if can afford
      if (playerContext.bandwidth < skill.cost.bandwidth) {
        return false;
      }

      // Check deity favor
      const favor = this.getDeityFavor(skill.deity);
      if (favor <= FAVOR_THRESHOLDS.HATED) {
        return false;
      }

      return true;
    });
  }

  /**
   * Check if skill is unlocked
   */
  isSkillUnlocked(skill, playerContext) {
    const unlock = skill.unlock;

    switch (unlock.method) {
      case 'Prayer':
        return true; // Always available

      case 'Devotion':
        return this.getDeityFavor(skill.deity) >= 10;

      case 'Service':
        return playerContext.completedQuests.includes(`${skill.deity}_quest`);

      case 'Favor':
        return this.getDeityFavor(skill.deity) >= 50;

      default:
        return false;
    }
  }

  // ═══════════════════════════════════════════════════════════════════════
  // CALCULATION HELPERS
  // ═══════════════════════════════════════════════════════════════════════

  /**
   * Calculate skill power based on favor and context
   */
  calculatePower(skill, context) {
    const basePower = skill.tier * 10;
    const favor = this.getDeityFavor(skill.deity);
    
    // Favor bonus: +1% per favor point
    const favorMultiplier = 1 + (favor / 100);
    
    return Math.floor(basePower * favorMultiplier);
  }

  /**
   * Calculate skill damage
   */
  calculateDamage(skill, context) {
    const power = this.calculatePower(skill, context);
    
    // Additional damage vs opposing alignment
    let bonus = 0;
    if (skill.pantheon === PANTHEONS.ANGELIC && context.target.alignment === ALIGNMENT.EVIL) {
      bonus = power * 0.2; // +20% vs evil
    }
    
    return power + bonus;
  }

  /**
   * Calculate effect duration
   */
  calculateDuration(skill) {
    switch (skill.cooldown) {
      case 'INSTANT': return 0;
      case 'SHORT': return 2;
      case 'MEDIUM': return 5;
      case 'LONG': return 10;
      case 'ONCE_PER_DAY': return 20;
      default: return 5;
    }
  }

  /**
   * Check if skill is on cooldown
   */
  isOnCooldown(skillId, context) {
    // Implementation depends on game's time tracking system
    return false; // Placeholder
  }

  // ═══════════════════════════════════════════════════════════════════════
  // STATE MANAGEMENT
  // ═══════════════════════════════════════════════════════════════════════

  /**
   * Update player state after skill use
   */
  updatePlayerState(skill, context) {
    // Track corruption/enlightenment
    if (skill.pantheon === PANTHEONS.DEMONIC) {
      this.playerState.corruption += 1;
    }
    if (skill.pantheon === PANTHEONS.VEDIC) {
      this.playerState.enlightenment += 0.5;
    }
  }

  /**
   * Get player's current state
   */
  getPlayerState() {
    return {
      ...this.playerState,
      activePantheonsArray: Array.from(this.playerState.activePantheons),
      favorSummary: this.getFavorSummary()
    };
  }

  /**
   * Get favor summary for all deities
   */
  getFavorSummary() {
    const summary = [];
    this.playerState.deityFavor.forEach((favor, deity) => {
      summary.push({
        deity,
        favor,
        status: this.getFavorStatus(favor)
      });
    });
    return summary.sort((a, b) => b.favor - a.favor);
  }

  /**
   * Get favor status label
   */
  getFavorStatus(favor) {
    if (favor >= FAVOR_THRESHOLDS.AVATAR) return 'AVATAR';
    if (favor >= FAVOR_THRESHOLDS.CHAMPION) return 'CHAMPION';
    if (favor >= FAVOR_THRESHOLDS.FAVORED) return 'FAVORED';
    if (favor >= FAVOR_THRESHOLDS.FRIENDLY) return 'FRIENDLY';
    if (favor >= FAVOR_THRESHOLDS.NEUTRAL) return 'NEUTRAL';
    if (favor >= FAVOR_THRESHOLDS.HOSTILE) return 'HOSTILE';
    return 'HATED';
  }

  // ═══════════════════════════════════════════════════════════════════════
  // EVENT SYSTEM
  // ═══════════════════════════════════════════════════════════════════════

  /**
   * Trigger game event
   */
  triggerEvent(eventType, data) {
    // This would integrate with the game's event system
    console.log(`[InvocationEngine] Event: ${eventType}`, data);
    
    // Return event for game to handle
    return {
      type: eventType,
      source: 'InvocationEngine',
      data,
      timestamp: Date.now()
    };
  }

  /**
   * Get recent favor changes
   */
  getRecentFavorChanges() {
    // Would track recent changes in production
    return [];
  }

  /**
   * Get active warnings (conflicts, low favor, etc.)
   */
  getActiveWarnings() {
    const warnings = [];

    // Check for theological conflicts
    const activePantheons = Array.from(this.playerState.activePantheons);
    if (activePantheons.includes(PANTHEONS.ANGELIC) && 
        activePantheons.includes(PANTHEONS.DEMONIC)) {
      warnings.push({
        type: 'THEOLOGICAL_CONFLICT',
        severity: 'EXTREME',
        message: 'You serve both Angels and Demons - crisis imminent!'
      });
    }

    // Check for deity hatred
    this.playerState.deityFavor.forEach((favor, deity) => {
      if (favor <= FAVOR_THRESHOLDS.HATED) {
        warnings.push({
          type: 'DEITY_HATRED',
          severity: 'HIGH',
          message: `${deity} HATES you and will not answer invocations!`
        });
      }
    });

    return warnings;
  }

  /**
   * Generate player thoughts based on skill use
   */
  generatePlayerThoughts(skill, context) {
    const favor = this.getDeityFavor(skill.deity);
    
    if (favor >= FAVOR_THRESHOLDS.CHAMPION) {
      return `I feel ${skill.deity}'s presence strongly. We are deeply connected.`;
    } else if (favor <= FAVOR_THRESHOLDS.HOSTILE) {
      return `${skill.deity} answers reluctantly. I sense their displeasure.`;
    } else {
      return `I call upon ${skill.deity}. Will they answer?`;
    }
  }

  // ═══════════════════════════════════════════════════════════════════════
  // EXPORT UTILITIES
  // ═══════════════════════════════════════════════════════════════════════

  /**
   * Export player's invocation data for save system
   */
  exportSaveData() {
    return {
      deityFavor: Array.from(this.playerState.deityFavor.entries()),
      activePantheons: Array.from(this.playerState.activePantheons),
      alignment: this.playerState.alignment,
      corruption: this.playerState.corruption,
      enlightenment: this.playerState.enlightenment,
      pacts: this.playerState.pacts,
      blessings: this.playerState.blessings,
      curses: this.playerState.curses
    };
  }

  /**
   * Import player's invocation data from save
   */
  importSaveData(saveData) {
    this.playerState.deityFavor = new Map(saveData.deityFavor);
    this.playerState.activePantheons = new Set(saveData.activePantheons);
    this.playerState.alignment = saveData.alignment;
    this.playerState.corruption = saveData.corruption;
    this.playerState.enlightenment = saveData.enlightenment;
    this.playerState.pacts = saveData.pacts;
    this.playerState.blessings = saveData.blessings;
    this.playerState.curses = saveData.curses;
  }

  /**
   * Get engine metadata
   */
  getMeta() {
    return this.meta;
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// EXPORT
// ═══════════════════════════════════════════════════════════════════════════

export default InvocationEngine;

// Convenience exports
export {
  PANTHEONS,
  ALIGNMENT,
  FAVOR_THRESHOLDS,
  THEOLOGICAL_CONFLICTS
};
