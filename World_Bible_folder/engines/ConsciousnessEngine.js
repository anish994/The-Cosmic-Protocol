/**
 * ═══════════════════════════════════════════════════════════════════════════
 * CONSCIOUSNESS ENGINE - Complete Skill System
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * All 100 Consciousness skills with full narrative-combat integration
 * Enlightenment progression • Meditation system • Philosophical dialogues • Teaching
 * 
 * @version 2.0_COMPLETE
 * @date 2025-11-18
 * @status Production Ready
 * ═══════════════════════════════════════════════════════════════════════════
 */

import consciousnessSkillsData from '../CONSCIOUSNESS_ENGINE_COMPLETE_v2.json';

// ═══════════════════════════════════════════════════════════════════════════
// CONSTANTS & CONFIGURATION
// ═══════════════════════════════════════════════════════════════════════════

const ENLIGHTENMENT_STAGES = {
  SEEKER: { level: 0, description: 'Beginning the path' },
  AWARE: { level: 25, description: 'Understanding dawns' },
  AWAKENED: { level: 50, description: 'Mind opens' },
  ILLUMINATED: { level: 75, description: 'Truth revealed' },
  ENLIGHTENED: { level: 100, description: 'Perfect understanding' }
};

const MEDITATION_DEPTHS = {
  SURFACE: 'Surface Focus',
  DEEP: 'Deep Meditation',
  TRANCE: 'Trance State',
  TRANSCENDENT: 'Transcendent State'
};

const WISDOM_PATHS = {
  BUDDHA: 'Path of Buddha',
  SAGE: 'Path of Sage',
  MYSTIC: 'Path of Mystic'
};

const PHILOSOPHICAL_TOPICS = {
  EXISTENCE: 'Nature of Existence',
  CONSCIOUSNESS: 'Nature of Mind',
  REALITY: 'Nature of Reality',
  SUFFERING: 'End of Suffering',
  ENLIGHTENMENT: 'Path to Enlightenment'
};

// ═══════════════════════════════════════════════════════════════════════════
// CORE CONSCIOUSNESS ENGINE
// ═══════════════════════════════════════════════════════════════════════════

export class ConsciousnessEngine {
  constructor() {
    this.skills = consciousnessSkillsData.skills;
    this.meta = consciousnessSkillsData.meta;
    this.playerState = this.initializePlayerState();
  }

  initializePlayerState() {
    return {
      enlightenmentLevel: 0,
      meditationHours: 0,
      wisdomPath: 'NEUTRAL',
      studentsEnlightened: new Map(), // studentId -> enlightenment level
      philosophicalDebatesWon: 0,
      innerPeaceLevel: 50,
      koansUnderstood: 0,
      teachingReputation: 0
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

    const meditationResult = this.performMeditation(skill, context);
    const teachingResult = this.teachWisdom(skill, context);
    const narrativeResult = this.applyNarrativeEffect(skill, context);
    const enlightenmentGain = this.gainEnlightenment(skill, context);
    const storyEvents = this.triggerStoryHooks(skill, context);

    this.updatePlayerState(skill, context);

    return {
      success: true,
      meditation: meditationResult,
      teaching: teachingResult,
      narrative: narrativeResult,
      enlightenment: enlightenmentGain,
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

    // Teaching skills require enlightenment level
    if (skill.skill_type.includes('Teaching')) {
      if (this.playerState.enlightenmentLevel < ENLIGHTENMENT_STAGES.AWAKENED.level) {
        return { allowed: false, reason: 'Insufficient enlightenment to teach' };
      }
    }

    // Deep meditation requires inner peace
    if (skill.skill_type.includes('Meditation') && skill.tier >= 7) {
      if (this.playerState.innerPeaceLevel < 70) {
        return { allowed: false, reason: 'Inner turmoil prevents deep meditation' };
      }
    }

    return { allowed: true };
  }

  performMeditation(skill, context) {
    if (!skill.skill_type.includes('Meditation') && !skill.skill_type.includes('Mindfulness')) {
      return null;
    }

    const depth = this.determineMeditationDepth(skill);
    const duration = skill.tier * 10; // minutes
    const innerPeaceGain = skill.tier * 2;

    this.playerState.meditationHours += duration / 60;
    this.playerState.innerPeaceLevel = Math.min(100, this.playerState.innerPeaceLevel + innerPeaceGain);

    return {
      depth: depth,
      duration: duration,
      innerPeaceGained: innerPeaceGain,
      totalInnerPeace: this.playerState.innerPeaceLevel,
      insights: this.generateMeditationInsights(skill, depth)
    };
  }

  teachWisdom(skill, context) {
    if (!skill.skill_type.includes('Teaching') && !skill.skill_type.includes('Wisdom')) {
      return null;
    }

    if (!context.student) return null;

    const studentId = context.student.id;
    const currentLevel = this.playerState.studentsEnlightened.get(studentId) || 0;
    const enlightenmentGain = skill.tier * 3;
    const newLevel = Math.min(100, currentLevel + enlightenmentGain);

    this.playerState.studentsEnlightened.set(studentId, newLevel);

    return {
      studentId: studentId,
      studentName: context.student.name,
      enlightenmentGain: enlightenmentGain,
      newEnlightenmentLevel: newLevel,
      studentAwakened: newLevel >= ENLIGHTENMENT_STAGES.AWAKENED.level
    };
  }

  gainEnlightenment(skill, context) {
    const previousLevel = this.playerState.enlightenmentLevel;
    const previousStage = this.getEnlightenmentStage(previousLevel);

    let enlightenmentGain = skill.tier * 1.5;

    // Meditation bonus
    if (skill.skill_type.includes('Meditation')) {
      enlightenmentGain *= 1.2;
    }

    // Wisdom path bonus
    if (this.playerState.wisdomPath === 'BUDDHA' && skill.skill_type.includes('Meditation')) {
      enlightenmentGain *= 1.3;
    } else if (this.playerState.wisdomPath === 'SAGE' && skill.skill_type.includes('Teaching')) {
      enlightenmentGain *= 1.3;
    } else if (this.playerState.wisdomPath === 'MYSTIC' && skill.skill_type.includes('Transcendent')) {
      enlightenmentGain *= 1.3;
    }

    this.playerState.enlightenmentLevel = Math.min(100, previousLevel + enlightenmentGain);
    const newStage = this.getEnlightenmentStage(this.playerState.enlightenmentLevel);

    return {
      enlightenmentGained: enlightenmentGain,
      previousStage: previousStage,
      newStage: newStage,
      totalEnlightenment: this.playerState.enlightenmentLevel,
      stageAdvanced: previousStage !== newStage
    };
  }

  applyNarrativeEffect(skill, context) {
    return {
      description: skill.narrative_effect.description,
      npcReactions: this.generateNPCReactions(skill, context),
      philosophicalDiscourse: this.generatePhilosophicalContent(skill, context),
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
        dialogue: skill.skill_type.includes('Teaching')
          ? "'Your wisdom is... calming. I wish I had your peace.'"
          : "'You seem so centered. How do you do it?'",
        relationshipChange: +4,
        emotionalState: 'Respectful'
      });
    }

    if (context.student) {
      reactions.push({
        npc: context.student.name,
        dialogue: this.getStudentReaction(skill, context),
        relationshipChange: +8,
        emotionalState: 'Enlightened'
      });
    }

    return reactions;
  }

  getStudentReaction(skill, context) {
    const studentLevel = this.playerState.studentsEnlightened.get(context.student.id) || 0;

    if (studentLevel >= ENLIGHTENMENT_STAGES.AWAKENED.level) {
      return "'Master... I understand now. The veil has lifted.'";
    }
    if (studentLevel >= ENLIGHTENMENT_STAGES.AWARE.level) {
      return "'I'm beginning to see what you mean. The truth is so simple.'";
    }
    return "'Your words resonate deeply. Please, teach me more.'";
  }

  generatePhilosophicalContent(skill, context) {
    if (!skill.skill_type.includes('Philosophy') && !skill.skill_type.includes('Wisdom')) {
      return null;
    }

    return {
      topic: this.selectPhilosophicalTopic(skill),
      insights: this.generatePhilosophicalInsights(skill),
      koans: skill.tier >= 7 ? this.generateKoan() : null
    };
  }

  generateMeditationInsights(skill, depth) {
    const insights = [];

    if (depth === MEDITATION_DEPTHS.TRANSCENDENT) {
      insights.push('The self is an illusion, awareness is all that remains');
    }
    if (depth === MEDITATION_DEPTHS.TRANCE) {
      insights.push('Thoughts arise and pass like clouds in the sky');
    }
    insights.push('In stillness, truth reveals itself');

    return insights;
  }

  generatePhilosophicalInsights(skill) {
    return [
      'Suffering stems from attachment to impermanent things',
      'The observer and the observed are one',
      'Consciousness is the ground of all being'
    ];
  }

  generateKoan() {
    const koans = [
      'What is the sound of one hand clapping?',
      'If you meet the Buddha on the road, kill him',
      'What was your original face before you were born?',
      'Does a dog have Buddha nature?'
    ];
    return koans[Math.floor(Math.random() * koans.length)];
  }

  generateChoices(skill, context) {
    const choices = [];

    // Wisdom path choice
    if (this.playerState.wisdomPath === 'NEUTRAL' 
        && this.playerState.enlightenmentLevel >= ENLIGHTENMENT_STAGES.AWARE.level) {
      choices.push({
        type: 'WISDOM_PATH',
        text: 'Your understanding deepens. Choose your path:',
        options: [
          { text: 'Path of Buddha', consequence: 'Meditation focus, inner peace mastery', path: 'BUDDHA' },
          { text: 'Path of Sage', consequence: 'Teaching focus, enlighten others', path: 'SAGE' },
          { text: 'Path of Mystic', consequence: 'Transcendence focus, reality insight', path: 'MYSTIC' }
        ]
      });
    }

    // Teaching decision
    if (skill.skill_type.includes('Teaching') && context.student) {
      choices.push({
        type: 'TEACHING_APPROACH',
        text: 'How to guide this student?',
        options: [
          { text: 'Gentle guidance', consequence: 'Slow but safe progress' },
          { text: 'Harsh truth', consequence: 'Rapid growth or broken spirit' },
          { text: 'Koan challenge', consequence: 'Potential breakthrough or confusion' }
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

  getEnlightenmentStage(level) {
    if (level >= ENLIGHTENMENT_STAGES.ENLIGHTENED.level) return 'ENLIGHTENED';
    if (level >= ENLIGHTENMENT_STAGES.ILLUMINATED.level) return 'ILLUMINATED';
    if (level >= ENLIGHTENMENT_STAGES.AWAKENED.level) return 'AWAKENED';
    if (level >= ENLIGHTENMENT_STAGES.AWARE.level) return 'AWARE';
    return 'SEEKER';
  }

  determineMeditationDepth(skill) {
    if (skill.tier >= 9) return MEDITATION_DEPTHS.TRANSCENDENT;
    if (skill.tier >= 7) return MEDITATION_DEPTHS.TRANCE;
    if (skill.tier >= 4) return MEDITATION_DEPTHS.DEEP;
    return MEDITATION_DEPTHS.SURFACE;
  }

  selectPhilosophicalTopic(skill) {
    const topics = Object.values(PHILOSOPHICAL_TOPICS);
    return topics[Math.floor(Math.random() * topics.length)];
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
    if (hook.trigger === 'enlightenment_achieved' 
        && this.playerState.enlightenmentLevel >= ENLIGHTENMENT_STAGES.ENLIGHTENED.level) {
      return true;
    }
    if (hook.trigger === 'student_awakened') {
      const studentLevel = this.playerState.studentsEnlightened.get(context.student?.id);
      return studentLevel >= ENLIGHTENMENT_STAGES.AWAKENED.level;
    }
    if (hook.trigger === 'koan_understood' && skill.tier >= 8) {
      this.playerState.koansUnderstood++;
      return true;
    }
    return false;
  }

  updatePlayerState(skill, context) {
    if (skill.skill_type.includes('Teaching')) {
      this.playerState.teachingReputation += 1;
    }
  }

  setWisdomPath(path) {
    if (Object.values(WISDOM_PATHS).includes(path)) {
      this.playerState.wisdomPath = path;
    }
  }

  // ═══════════════════════════════════════════════════════════════════════
  // SAVE/LOAD
  // ═══════════════════════════════════════════════════════════════════════

  exportSaveData() {
    return {
      enlightenmentLevel: this.playerState.enlightenmentLevel,
      meditationHours: this.playerState.meditationHours,
      wisdomPath: this.playerState.wisdomPath,
      studentsEnlightened: Array.from(this.playerState.studentsEnlightened.entries()),
      philosophicalDebatesWon: this.playerState.philosophicalDebatesWon,
      innerPeaceLevel: this.playerState.innerPeaceLevel,
      koansUnderstood: this.playerState.koansUnderstood,
      teachingReputation: this.playerState.teachingReputation
    };
  }

  importSaveData(saveData) {
    this.playerState.enlightenmentLevel = saveData.enlightenmentLevel;
    this.playerState.meditationHours = saveData.meditationHours;
    this.playerState.wisdomPath = saveData.wisdomPath;
    this.playerState.studentsEnlightened = new Map(saveData.studentsEnlightened);
    this.playerState.philosophicalDebatesWon = saveData.philosophicalDebatesWon;
    this.playerState.innerPeaceLevel = saveData.innerPeaceLevel;
    this.playerState.koansUnderstood = saveData.koansUnderstood;
    this.playerState.teachingReputation = saveData.teachingReputation;
  }

  getMeta() {
    return this.meta;
  }

  getPlayerState() {
    return {
      ...this.playerState,
      enlightenmentStage: this.getEnlightenmentStage(this.playerState.enlightenmentLevel),
      studentsEnlightenedArray: Array.from(this.playerState.studentsEnlightened.entries())
    };
  }
}

export default ConsciousnessEngine;

export {
  ENLIGHTENMENT_STAGES,
  MEDITATION_DEPTHS,
  WISDOM_PATHS,
  PHILOSOPHICAL_TOPICS
};
