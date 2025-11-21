/**
 * ═══════════════════════════════════════════════════════════════════════════
 * PREMIUM ENGINE INTEGRATION
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * Seamlessly integrates the 4 premium enhancement systems with existing engines:
 * - WorldStateManager (permanent changes)
 * - NPCMemorySystem (dynamic dialogue)
 * - ContextMechanics (time/location modifiers)
 * - LoreIntegration (deep narratives)
 * 
 * This layer wraps existing engines without breaking their API, adding premium
 * features transparently while maintaining backward compatibility.
 * 
 * @version 1.0
 * @integration_targets All 8 engines (Foundational, Invocation, etc.)
 * ═══════════════════════════════════════════════════════════════════════════
 */

import { WorldStateManager, NPCMemorySystem } from './SkillEnhancementSystem.js';
import { ContextAnalyzer, SkillModifierEngine } from './ContextAwareMechanics.js';
import { LoreGenerator } from './LoreIntegration.js';
import { SkillEvolutionTracker, PremiumSkillEnhancer } from './PremiumSkillEnhancer.js';

// ═══════════════════════════════════════════════════════════════════════════
// ENGINE WRAPPER - Adds premium features to any existing engine
// ═══════════════════════════════════════════════════════════════════════════

export class PremiumEngineWrapper {
  constructor(baseEngine, engineName) {
    this.baseEngine = baseEngine;
    this.engineName = engineName;
    
    // Initialize premium systems
    this.worldState = new WorldStateManager();
    this.npcMemory = new NPCMemorySystem();
    this.contextAnalyzer = new ContextAnalyzer();
    this.modifierEngine = new SkillModifierEngine();
    this.loreGenerator = new LoreGenerator();
    this.evolutionTracker = new SkillEvolutionTracker();
    this.premiumEnhancer = new PremiumSkillEnhancer();
    
    // Cache enhanced skills for performance
    this.enhancedSkillCache = new Map();
    
    // Wrap the base engine's executeSkill method
    this.wrapExecuteSkill();
  }

  /**
   * Wraps the base engine's executeSkill method to add premium features
   */
  wrapExecuteSkill() {
    const originalExecuteSkill = this.baseEngine.executeSkill.bind(this.baseEngine);
    
    this.baseEngine.executeSkill = (skillId, context) => {
      // Step 1: Get the base skill
      const baseSkill = this.baseEngine.getSkill(skillId);
      if (!baseSkill) {
        return { success: false, reason: `Skill ${skillId} not found` };
      }

      // Step 2: Enhance the skill with premium systems
      const enhancedSkill = this.getEnhancedSkill(baseSkill, context);

      // Step 3: Analyze context and calculate modifiers
      const contextData = this.contextAnalyzer.analyzeContext(context);
      const modifiers = this.modifierEngine.calculateSkillPower(enhancedSkill, contextData);

      // Step 4: Execute the base skill with modifiers
      const baseResult = originalExecuteSkill(skillId, this.enrichContext(context, modifiers));

      // Step 5: Apply premium enhancements to the result
      const premiumResult = this.applyPremiumEnhancements(
        baseResult,
        enhancedSkill,
        contextData,
        modifiers,
        context
      );

      // Step 6: Update tracking systems
      this.updateSystems(enhancedSkill, premiumResult, context);

      return premiumResult;
    };
  }

  /**
   * Gets or creates an enhanced version of a skill
   */
  getEnhancedSkill(baseSkill, context) {
    const cacheKey = `${baseSkill.id}_${context.player?.masteryLevel || 0}`;
    
    if (this.enhancedSkillCache.has(cacheKey)) {
      return this.enhancedSkillCache.get(cacheKey);
    }

    const enhancedSkill = this.premiumEnhancer.enhanceSkill(
      baseSkill,
      this.engineName,
      context.player?.masteryLevel || 0
    );

    this.enhancedSkillCache.set(cacheKey, enhancedSkill);
    return enhancedSkill;
  }

  /**
   * Enriches context with modifier data
   */
  enrichContext(baseContext, modifiers) {
    return {
      ...baseContext,
      premiumModifiers: {
        powerMultiplier: modifiers.finalMultiplier,
        critChance: modifiers.critChance,
        unstableChance: modifiers.unstableChance,
        activeModifiers: modifiers.activeModifiers,
        synergies: modifiers.synergies
      }
    };
  }

  /**
   * Applies premium enhancements to execution result
   */
  applyPremiumEnhancements(baseResult, enhancedSkill, contextData, modifiers, context) {
    if (!baseResult.success) {
      return baseResult;
    }

    // Apply power multipliers to combat effects
    const enhancedCombat = this.enhanceCombatEffects(baseResult.combat, modifiers);

    // Generate dynamic narrative based on context
    const enhancedNarrative = this.enhanceNarrative(
      baseResult.narrative,
      enhancedSkill,
      contextData,
      modifiers
    );

    // Add world state changes
    const worldChanges = this.generateWorldChanges(enhancedSkill, context);

    // Generate NPC reactions and dialogue
    const npcInteractions = this.generateNPCInteractions(
      enhancedSkill,
      context,
      baseResult
    );

    // Check for special events (crits, unstable effects, evolutions)
    const specialEvents = this.checkSpecialEvents(enhancedSkill, modifiers, context);

    return {
      ...baseResult,
      combat: enhancedCombat,
      narrative: enhancedNarrative,
      worldChanges: worldChanges,
      npcInteractions: npcInteractions,
      specialEvents: specialEvents,
      modifiers: {
        appliedBonuses: modifiers.activeModifiers,
        finalPower: modifiers.finalMultiplier,
        contextualFactors: this.describeContextFactors(contextData)
      },
      lore: {
        description: enhancedSkill.premiumLore.description,
        currentMasteryPath: enhancedSkill.premiumLore.masteryPath,
        warnings: enhancedSkill.premiumLore.warnings
      }
    };
  }

  /**
   * Enhances combat effects with modifiers
   */
  enhanceCombatEffects(baseCombat, modifiers) {
    if (!baseCombat) return null;

    const enhanced = { ...baseCombat };
    const mult = modifiers.finalMultiplier;

    // Apply multipliers to all numeric effects
    if (enhanced.damage) enhanced.damage *= mult;
    if (enhanced.protection) enhanced.protection *= mult;
    if (enhanced.control) enhanced.control *= mult;
    if (enhanced.healing) enhanced.healing *= mult;
    if (enhanced.energy) enhanced.energy *= mult;

    // Add crit effects
    if (Math.random() < modifiers.critChance) {
      enhanced.criticalHit = true;
      enhanced.criticalMultiplier = 2.0;
      enhanced.damage = (enhanced.damage || 0) * 2.0;
      enhanced.criticalDescription = this.generateCritDescription(modifiers);
    }

    // Add unstable effects
    if (Math.random() < modifiers.unstableChance) {
      enhanced.unstableEffect = this.generateUnstableEffect(modifiers);
    }

    // Add synergy bonuses
    if (modifiers.synergies.length > 0) {
      enhanced.synergyBonuses = modifiers.synergies;
    }

    return enhanced;
  }

  /**
   * Enhances narrative with context-aware descriptions
   */
  enhanceNarrative(baseNarrative, enhancedSkill, contextData, modifiers) {
    if (!baseNarrative) return null;

    const contextualFlavor = this.generateContextualFlavor(contextData, modifiers);
    const loreSnippet = this.selectRelevantLoreSnippet(enhancedSkill, contextData);

    return {
      ...baseNarrative,
      description: this.enrichDescription(
        baseNarrative.description,
        contextualFlavor,
        modifiers
      ),
      loreSnippet: loreSnippet,
      contextualDetails: contextualFlavor,
      environmentalResponse: this.describeEnvironmentalResponse(contextData)
    };
  }

  /**
   * Generates world state changes
   */
  generateWorldChanges(skill, context) {
    const location = context.location || { name: 'Unknown Location', type: 'URBAN' };
    
    const changes = this.worldState.modifyWorld({
      location: location.name,
      modificationType: this.determineModificationType(skill),
      magnitude: skill.tier,
      description: `${skill.name} reshaped the area`,
      isPermanent: skill.tier >= 2,
      skillUsed: skill.id
    });

    return {
      permanent: changes.filter(c => c.isPermanent),
      temporary: changes.filter(c => !c.isPermanent),
      locationStatus: this.worldState.getLocationStatus(location.name)
    };
  }

  /**
   * Generates NPC interactions based on skill usage
   */
  generateNPCInteractions(skill, context, baseResult) {
    const interactions = [];
    const nearbyNPCs = context.nearbyNPCs || this.getDefaultNPCs();

    for (const npc of nearbyNPCs) {
      // Record the skill usage in NPC memory
      this.npcMemory.recordSkillUse(npc.id, {
        skillId: skill.id,
        skillName: skill.name,
        context: context.situation || 'exploration',
        outcome: baseResult.success ? 'success' : 'failure',
        witnessedPower: skill.tier,
        emotionalImpact: this.calculateEmotionalImpact(skill, npc)
      });

      // Generate dynamic dialogue
      const dialogue = this.npcMemory.generateDialogue(npc.id, {
        recentSkill: skill.id,
        situation: context.situation || 'encounter'
      });

      // Get relationship status
      const relationship = this.npcMemory.getRelationshipStatus(npc.id);

      interactions.push({
        npcId: npc.id,
        npcName: npc.name,
        dialogue: dialogue,
        relationship: relationship,
        emotionalState: this.describeEmotionalState(relationship, skill)
      });
    }

    return interactions;
  }

  /**
   * Checks for special events (crits, evolutions, etc.)
   */
  checkSpecialEvents(skill, modifiers, context) {
    const events = [];

    // Check for skill evolution
    const evolution = this.evolutionTracker.recordUsage(skill.id, {
      success: true,
      contextQuality: this.rateContextQuality(context),
      powerLevel: modifiers.finalMultiplier
    });

    if (evolution.leveledUp) {
      events.push({
        type: 'MASTERY_INCREASE',
        description: `Your mastery of ${skill.name} has grown to level ${evolution.level}!`,
        newAbilities: this.describeNewAbilities(skill, evolution.level)
      });
    }

    if (evolution.evolved) {
      events.push({
        type: 'SKILL_EVOLUTION',
        description: `${skill.name} has evolved to ${evolution.stage}!`,
        narrative: this.generateEvolutionNarrative(skill, evolution)
      });
    }

    // Check for memorable moment
    if (evolution.memorableMoment) {
      events.push({
        type: 'MEMORABLE_MOMENT',
        description: evolution.memorableMoment.description,
        significance: evolution.memorableMoment.significance
      });
    }

    // Check for landmark creation
    const stats = this.evolutionTracker.getSkillStats(skill.id);
    if (stats.timesUsed % 10 === 0 && stats.timesUsed > 0) {
      const landmark = this.worldState.createLandmark({
        name: `${skill.name} Monument`,
        location: context.location?.name || 'Unknown',
        description: `A testament to ${stats.timesUsed} uses of ${skill.name}`,
        effect: `Grants +5% power to ${skill.name} in this area`
      });

      events.push({
        type: 'LANDMARK_CREATED',
        landmark: landmark,
        description: `Your repeated use of ${skill.name} has permanently altered this place!`
      });
    }

    return events;
  }

  // ═══════════════════════════════════════════════════════════════════════
  // HELPER METHODS - Contextual flavor generation
  // ═══════════════════════════════════════════════════════════════════════

  generateContextualFlavor(contextData, modifiers) {
    const flavors = [];

    // Time-based flavor
    if (contextData.temporal.timeOfDay === 'MIDNIGHT') {
      flavors.push('The void between seconds amplifies your power');
    } else if (contextData.temporal.timeOfDay === 'DAWN') {
      flavors.push('First light crystallizes your intention');
    } else if (contextData.temporal.timeOfDay === 'DUSK') {
      flavors.push('The liminal hour bends reality more easily');
    }

    // Location-based flavor
    if (contextData.spatial.locationType === 'SACRED') {
      flavors.push('Ancient resonances guide your technique');
    } else if (contextData.spatial.locationType === 'RUINS') {
      flavors.push('Echoes of the Fall strengthen your will');
    } else if (contextData.spatial.locationType === 'VOID_ZONE') {
      flavors.push('The wound in reality hungers for your skill');
    }

    // Weather-based flavor
    if (contextData.environmental.weather === 'STORM') {
      flavors.push('Lightning synchronizes with your neural fire');
    } else if (contextData.environmental.weather === 'FOG') {
      flavors.push('Mist obscures the boundary between thought and action');
    }

    return flavors;
  }

  selectRelevantLoreSnippet(enhancedSkill, contextData) {
    const lore = enhancedSkill.premiumLore;
    
    // Select based on corruption level
    if (contextData.metaphysical.corruptionLevel > 70) {
      return lore.warnings[0] || 'Corruption twists this power';
    }

    // Select based on mastery
    const stats = this.evolutionTracker.getSkillStats(enhancedSkill.id);
    if (stats.masteryLevel > 50) {
      return lore.masteryPath;
    }

    return lore.discoveryMoment;
  }

  enrichDescription(baseDescription, contextualFlavor, modifiers) {
    let enriched = baseDescription;

    if (modifiers.finalMultiplier > 1.5) {
      enriched += ` [Amplified by ${Math.round((modifiers.finalMultiplier - 1) * 100)}% due to favorable conditions]`;
    }

    if (contextualFlavor.length > 0) {
      enriched += `\n\n${contextualFlavor[0]}`;
    }

    return enriched;
  }

  describeEnvironmentalResponse(contextData) {
    const responses = [];

    if (contextData.environmental.visibility === 'PITCH_BLACK') {
      responses.push('Darkness swallows all evidence of your action');
    }

    if (contextData.spatial.locationType === 'SACRED') {
      responses.push('The space itself seems to acknowledge your technique');
    }

    if (contextData.metaphysical.corruptionLevel > 50) {
      responses.push('Reality strains under the weight of corruption');
    }

    return responses.join('. ');
  }

  generateCritDescription(modifiers) {
    const reasons = modifiers.activeModifiers
      .filter(m => m.critBonus)
      .map(m => m.description);

    if (reasons.length > 0) {
      return `Critical strike! ${reasons[0]}`;
    }

    return 'Perfect execution!';
  }

  generateUnstableEffect(modifiers) {
    const unstableTypes = [
      { type: 'REALITY_TEAR', desc: 'A tear in reality crackles at the impact point' },
      { type: 'TEMPORAL_ECHO', desc: 'The skill echoes through time, striking twice' },
      { type: 'VOID_SURGE', desc: 'Void energy erupts, damaging friend and foe alike' },
      { type: 'CORRUPTION_SPREAD', desc: 'Corruption spreads from the point of impact' }
    ];

    return unstableTypes[Math.floor(Math.random() * unstableTypes.length)];
  }

  determineModificationType(skill) {
    if (skill.skill_type.includes('Structure')) return 'STRUCTURAL';
    if (skill.skill_type.includes('Energy')) return 'ENERGETIC';
    if (skill.skill_type.includes('Divine')) return 'METAPHYSICAL';
    if (skill.skill_type.includes('Combat')) return 'SCARRING';
    return 'SUBTLE';
  }

  calculateEmotionalImpact(skill, npc) {
    if (skill.tier >= 3) return 'profound';
    if (skill.tier >= 2) return 'significant';
    return 'noticeable';
  }

  describeEmotionalState(relationship, skill) {
    if (relationship.trust > 70) {
      return `Inspired by your mastery of ${skill.name}`;
    }
    if (relationship.fear > 70) {
      return `Terrified by the power of ${skill.name}`;
    }
    if (relationship.respect > 70) {
      return `Respectful of your command of ${skill.name}`;
    }
    return 'Wary';
  }

  rateContextQuality(context) {
    let quality = 50;
    
    if (context.premiumModifiers?.powerMultiplier > 1.5) quality += 30;
    if (context.premiumModifiers?.critChance > 0.2) quality += 20;
    if (context.situation === 'boss_fight') quality += 25;
    if (context.situation === 'practice') quality -= 20;

    return Math.max(0, Math.min(100, quality));
  }

  describeNewAbilities(skill, masteryLevel) {
    const abilities = [];
    
    if (masteryLevel >= 25) abilities.push('Reduced KP cost');
    if (masteryLevel >= 50) abilities.push('Enhanced range and duration');
    if (masteryLevel >= 75) abilities.push('Chance to refund bandwidth on use');
    if (masteryLevel >= 90) abilities.push('Passive environmental bonuses');

    return abilities;
  }

  generateEvolutionNarrative(skill, evolution) {
    const stage = evolution.stage;
    
    const narratives = {
      'Novice': `You're beginning to understand ${skill.name}`,
      'Apprentice': `${skill.name} feels natural now, like an extension of yourself`,
      'Adept': `You've internalized the principles behind ${skill.name}`,
      'Expert': `${skill.name} responds to your intent before conscious thought`,
      'Master': `You've transcended the technique - ${skill.name} is now part of your being`,
      'Transcendent': `Reality itself recognizes your authority over ${skill.name}`
    };

    return narratives[stage] || 'Your mastery grows';
  }

  describeContextFactors(contextData) {
    return {
      time: contextData.temporal.timeOfDay,
      location: contextData.spatial.locationType,
      weather: contextData.environmental.weather,
      corruption: contextData.metaphysical.corruptionLevel,
      alignment: contextData.metaphysical.alignment
    };
  }

  getDefaultNPCs() {
    return [
      { id: 'marcus_veil', name: 'Marcus Veil' },
      { id: 'elena_construct', name: 'Elena Construct' }
    ];
  }

  // ═══════════════════════════════════════════════════════════════════════
  // SAVE/LOAD SYSTEM
  // ═══════════════════════════════════════════════════════════════════════

  exportGameState() {
    return {
      worldState: this.worldState.exportWorldState(),
      npcMemories: this.npcMemory.exportMemories(),
      skillEvolution: this.evolutionTracker.exportData(),
      engineName: this.engineName
    };
  }

  importGameState(savedState) {
    if (savedState.worldState) {
      this.worldState.importWorldState(savedState.worldState);
    }
    if (savedState.npcMemories) {
      this.npcMemory.importMemories(savedState.npcMemories);
    }
    if (savedState.skillEvolution) {
      this.evolutionTracker.importData(savedState.skillEvolution);
    }
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// INTEGRATION FACTORY - Wraps all engines automatically
// ═══════════════════════════════════════════════════════════════════════════

export class PremiumIntegrationFactory {
  static wrapEngine(engine, engineName) {
    return new PremiumEngineWrapper(engine, engineName);
  }

  static wrapAllEngines(engines) {
    const wrapped = {};
    
    for (const [name, engine] of Object.entries(engines)) {
      wrapped[name] = this.wrapEngine(engine, name);
    }

    return wrapped;
  }

  static createUnifiedGameState(wrappedEngines) {
    const gameState = {
      engines: {},
      globalState: {
        worldChanges: [],
        npcRelationships: {},
        playerMasteryLevels: {}
      }
    };

    for (const [name, wrappedEngine] of Object.entries(wrappedEngines)) {
      gameState.engines[name] = wrappedEngine.exportGameState();
    }

    return gameState;
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// USAGE EXAMPLE
// ═══════════════════════════════════════════════════════════════════════════
/*

import { FoundationalEngine } from './engines/FoundationalEngine.js';
import { InvocationEngine } from './engines/InvocationEngine.js';
import { PremiumIntegrationFactory } from './PremiumEngineIntegration.js';

// Wrap your existing engines
const foundational = new FoundationalEngine();
const invocation = new InvocationEngine();

const premiumFoundational = PremiumIntegrationFactory.wrapEngine(
  foundational, 
  'Foundational'
);

const premiumInvocation = PremiumIntegrationFactory.wrapEngine(
  invocation,
  'Invocation'
);

// Now execute skills with full premium features!
const context = {
  player: { bandwidth: 100, kp: 50, masteryLevel: 25 },
  location: { name: 'Undermight Ruins', type: 'RUINS' },
  time: { hour: 0, isNight: true },
  weather: 'STORM',
  situation: 'combat',
  nearbyNPCs: [
    { id: 'marcus_veil', name: 'Marcus Veil' }
  ]
};

const result = premiumFoundational.baseEngine.executeSkill(
  'FOUND_001',
  context
);

console.log(result.narrative.loreSnippet);
console.log(result.npcInteractions[0].dialogue);
console.log(result.worldChanges.permanent);
console.log(result.specialEvents);

*/
