/**
 * ═══════════════════════════════════════════════════════════════════════════
 * FOUNDATIONAL ENGINE - Complete Skill System
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * All 100 Foundational skills with full narrative-combat integration
 * Environmental tactics • Structure manipulation • Construction • Physics mastery
 * 
 * @version 2.0_COMPLETE
 * @date 2025-11-18
 * @status Production Ready
 * ═══════════════════════════════════════════════════════════════════════════
 */

import foundationalSkillsData from '../FOUNDATIONAL_ENGINE_COMPLETE_v2.json';

// ═══════════════════════════════════════════════════════════════════════════
// CONSTANTS & CONFIGURATION
// ═══════════════════════════════════════════════════════════════════════════

const STRUCTURE_TYPES = {
  SCAFFOLD: 'Scaffold',
  BARRIER: 'Barrier',
  BRIDGE: 'Bridge',
  TOWER: 'Tower',
  PLATFORM: 'Platform',
  FORTIFICATION: 'Fortification'
};

const MATERIAL_TYPES = {
  STONE: 'Stone',
  METAL: 'Metal',
  CRYSTAL: 'Crystal',
  ENERGY: 'Energy',
  LIVING: 'Living'
};

const ENVIRONMENTAL_SYNERGIES = {
  URBAN: { bonus: 1.3, description: 'Urban environments enhance structure creation' },
  RUINS: { bonus: 1.2, description: 'Ancient ruins provide material resonance' },
  BATTLEFIELD: { bonus: 1.1, description: 'Combat zones strengthen defensive structures' },
  NATURAL: { bonus: 0.9, description: 'Natural areas resist artificial structures' }
};

// ═══════════════════════════════════════════════════════════════════════════
// CORE FOUNDATIONAL ENGINE
// ═══════════════════════════════════════════════════════════════════════════

export class FoundationalEngine {
  constructor() {
    this.skills = foundationalSkillsData.skills;
    this.meta = foundationalSkillsData.meta;
    this.playerState = this.initializePlayerState();
  }

  initializePlayerState() {
    return {
      activeStructures: new Map(), // location -> structure array
      materialMastery: new Map(), // material type -> mastery level
      constructionReputation: 0,
      engineerRelationships: new Map(),
      environmentalModifications: [], // permanent changes to world
      structureCount: 0
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

    const combatResult = this.applyCombatEffect(skill, context);
    const narrativeResult = this.applyNarrativeEffect(skill, context);
    const structureCreated = this.createStructure(skill, context);
    const storyEvents = this.triggerStoryHooks(skill, context);

    this.updatePlayerState(skill, context);

    return {
      success: true,
      combat: combatResult,
      narrative: narrativeResult,
      structure: structureCreated,
      storyEvents: storyEvents,
      environmentalImpact: this.getEnvironmentalImpact(skill, context)
    };
  }

  canUseSkill(skill, context) {
    if (context.player.bandwidth < skill.cost.bandwidth) {
      return { allowed: false, reason: 'Insufficient Bandwidth' };
    }
    if (context.player.kp < skill.cost.kp) {
      return { allowed: false, reason: 'Insufficient KP' };
    }
    return { allowed: true };
  }

  applyCombatEffect(skill, context) {
    const effects = {
      damage: 0,
      control: 0,
      protection: 0,
      structureBonus: 0
    };

    const skillType = skill.skill_type;
    const envBonus = this.getEnvironmentalBonus(context.location);

    if (skillType.includes('Defense') || skillType.includes('Barrier')) {
      effects.protection = this.calculatePower(skill, context) * envBonus;
    }

    if (skillType.includes('Trap') || skillType.includes('Control')) {
      effects.control = this.calculatePower(skill, context) * envBonus;
    }

    return effects;
  }

  applyNarrativeEffect(skill, context) {
    return {
      description: skill.narrative_effect.description,
      npcReactions: this.generateNPCReactions(skill, context),
      environmentalChanges: this.generateEnvironmentalChanges(skill, context),
      choices: this.generateChoices(skill, context)
    };
  }

  createStructure(skill, context) {
    if (!skill.skill_type.includes('Structure') && !skill.skill_type.includes('Construction')) {
      return null;
    }

    const structure = {
      id: `struct_${Date.now()}_${this.playerState.structureCount++}`,
      type: this.determineStructureType(skill),
      location: context.location,
      durability: this.calculatePower(skill, context),
      creator: 'player',
      timestamp: Date.now()
    };

    const locationStructures = this.playerState.activeStructures.get(context.location) || [];
    locationStructures.push(structure);
    this.playerState.activeStructures.set(context.location, locationStructures);

    return structure;
  }

  // ═══════════════════════════════════════════════════════════════════════
  // NARRATIVE GENERATION
  // ═══════════════════════════════════════════════════════════════════════

  generateNPCReactions(skill, context) {
    const reactions = [];

    if (context.npcs.includes('Marcus')) {
      reactions.push({
        npc: 'Marcus',
        dialogue: this.getMarcusReaction(skill),
        relationshipChange: skill.skill_type.includes('Defense') ? +2 : +1
      });
    }

    if (context.npcs.includes('Elena')) {
      reactions.push({
        npc: 'Elena',
        dialogue: `'Fascinating structural engineering. The physics are sound.'`,
        relationshipChange: +1
      });
    }

    return reactions;
  }

  getMarcusReaction(skill) {
    if (skill.skill_type.includes('Defense')) {
      return "'Good tactical thinking with those structures.'";
    }
    return "'Useful ability. Could help in tight situations.'";
  }

  generateEnvironmentalChanges(skill, context) {
    if (!skill.skill_type.includes('Structure')) {
      return [];
    }

    return [
      {
        type: 'PERMANENT_STRUCTURE',
        location: context.location,
        description: `${skill.name} remains at ${context.location}`,
        gameplay: 'Can be used by player or NPCs later'
      }
    ];
  }

  generateChoices(skill, context) {
    const choices = [];

    if (skill.skill_type.includes('Structure') && context.npcs.includes('Civilian')) {
      choices.push({
        type: 'RESCUE_CHOICE',
        text: 'Use structure to save civilians',
        consequence: 'Reputation +10, unlock reconstruction quests',
        relationshipImpact: { faction: 'Citizens', change: +15 }
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

  getEnvironmentalBonus(location) {
    const locationType = this.determineLocationType(location);
    return ENVIRONMENTAL_SYNERGIES[locationType]?.bonus || 1.0;
  }

  determineLocationType(location) {
    if (location.includes('city') || location.includes('urban')) return 'URBAN';
    if (location.includes('ruin')) return 'RUINS';
    if (location.includes('battle')) return 'BATTLEFIELD';
    return 'NATURAL';
  }

  determineStructureType(skill) {
    const name = skill.name.toLowerCase();
    if (name.includes('scaffold')) return STRUCTURE_TYPES.SCAFFOLD;
    if (name.includes('barrier') || name.includes('wall')) return STRUCTURE_TYPES.BARRIER;
    if (name.includes('bridge')) return STRUCTURE_TYPES.BRIDGE;
    if (name.includes('tower')) return STRUCTURE_TYPES.TOWER;
    if (name.includes('platform')) return STRUCTURE_TYPES.PLATFORM;
    return STRUCTURE_TYPES.FORTIFICATION;
  }

  calculatePower(skill, context) {
    const basePower = skill.tier * 10;
    const envBonus = this.getEnvironmentalBonus(context.location);
    return Math.floor(basePower * envBonus);
  }

  getEnvironmentalImpact(skill, context) {
    const structures = this.playerState.activeStructures.get(context.location) || [];
    return {
      structuresAtLocation: structures.length,
      totalStructures: this.playerState.structureCount,
      locationModified: structures.length > 0
    };
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
    if (hook.trigger === 'first_structure' && this.playerState.structureCount === 1) {
      return true;
    }
    if (hook.trigger === 'save_civilian' && context.npcs.includes('Civilian')) {
      return true;
    }
    return false;
  }

  updatePlayerState(skill, context) {
    if (skill.skill_type.includes('Construction')) {
      this.playerState.constructionReputation += 1;
    }
  }

  // ═══════════════════════════════════════════════════════════════════════
  // SAVE/LOAD
  // ═══════════════════════════════════════════════════════════════════════

  exportSaveData() {
    return {
      activeStructures: Array.from(this.playerState.activeStructures.entries()),
      materialMastery: Array.from(this.playerState.materialMastery.entries()),
      constructionReputation: this.playerState.constructionReputation,
      structureCount: this.playerState.structureCount
    };
  }

  importSaveData(saveData) {
    this.playerState.activeStructures = new Map(saveData.activeStructures);
    this.playerState.materialMastery = new Map(saveData.materialMastery);
    this.playerState.constructionReputation = saveData.constructionReputation;
    this.playerState.structureCount = saveData.structureCount;
  }

  getMeta() {
    return this.meta;
  }

  getPlayerState() {
    return {
      ...this.playerState,
      activeStructuresArray: Array.from(this.playerState.activeStructures.entries())
    };
  }
}

export default FoundationalEngine;

export {
  STRUCTURE_TYPES,
  MATERIAL_TYPES,
  ENVIRONMENTAL_SYNERGIES
};
