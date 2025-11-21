/**
 * ═══════════════════════════════════════════════════════════════════════════
 * SKILL ENHANCEMENT SYSTEM - Premium Depth Framework
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * Transforms baseline skills into premium narrative-combat hybrids with:
 * - Dynamic NPC reactions based on context
 * - Permanent world modifications
 * - Context-aware mechanics (time, location, faction, alignment)
 * - Evolution paths and mastery systems
 * - Lore integration and discovery moments
 * - Infinite fusion potential
 * 
 * @version 1.0_PREMIUM
 * @date 2025-11-20
 * ═══════════════════════════════════════════════════════════════════════════
 */

// ═══════════════════════════════════════════════════════════════════════════
// WORLD STATE MANAGER - Permanent Changes Across Saves
// ═══════════════════════════════════════════════════════════════════════════

export class WorldStateManager {
  constructor() {
    this.permanentChanges = new Map(); // location -> changes array
    this.areaEffects = new Map(); // location -> active effects
    this.corruptionLevels = new Map(); // location -> corruption value
    this.landmarks = new Map(); // location -> landmark data
    this.witnessMemory = new Map(); // npcId -> witnessed actions
    this.factionInfluence = new Map(); // location -> faction control
  }

  // Apply permanent world modification from skill use
  modifyWorld(skillUse) {
    const { skillId, skillName, location, context } = skillUse;
    
    // Get or create location state
    const locationChanges = this.permanentChanges.get(location) || [];
    
    // Add this modification
    const change = {
      skillId,
      skillName,
      timestamp: Date.now(),
      type: this.determineChangeType(skillUse),
      description: this.generateChangeDescription(skillUse),
      permanentEffects: this.calculatePermanentEffects(skillUse),
      visibleToNPCs: true,
      decayTime: this.calculateDecayTime(skillUse) // null = permanent
    };
    
    locationChanges.push(change);
    this.permanentChanges.set(location, locationChanges);
    
    // Apply area effects
    this.applyAreaEffects(location, skillUse);
    
    // Update corruption if applicable
    this.updateCorruption(location, skillUse);
    
    // Create landmark if threshold reached
    this.checkLandmarkCreation(location);
    
    return change;
  }

  determineChangeType(skillUse) {
    const { skillType, engine } = skillUse;
    
    if (engine === 'Foundational') return 'STRUCTURAL';
    if (engine === 'Therapeutic') return 'HEALING_RESIDUE';
    if (skillType.includes('Shadow') || skillType.includes('Void')) return 'CORRUPTION';
    if (skillType.includes('Light') || skillType.includes('Bloom')) return 'PURIFICATION';
    if (engine === 'Invocation') return 'DIVINE_MARK';
    if (engine === 'Tantra') return 'ENERGY_SHIFT';
    if (engine === 'Singularity') return 'REALITY_FRACTURE';
    if (engine === 'Divination') return 'FATE_IMPRINT';
    
    return 'GENERIC';
  }

  generateChangeDescription(skillUse) {
    const { skillName, location, context } = skillUse;
    const changeType = this.determineChangeType(skillUse);
    
    const descriptions = {
      STRUCTURAL: `The ${location} bears marks of ${skillName} - structures remain, altering the landscape.`,
      HEALING_RESIDUE: `Healing energy lingers in ${location}, a faint echo of ${skillName}.`,
      CORRUPTION: `Shadows deepen in ${location}, corrupted by repeated use of ${skillName}.`,
      PURIFICATION: `${location} feels lighter, cleansed by the power of ${skillName}.`,
      DIVINE_MARK: `The gods have touched ${location} through ${skillName} - their presence lingers.`,
      ENERGY_SHIFT: `The energetic frequency of ${location} has shifted from ${skillName}.`,
      REALITY_FRACTURE: `Reality itself warps in ${location}, scarred by ${skillName}.`,
      FATE_IMPRINT: `The threads of fate have been rewritten in ${location} by ${skillName}.`
    };
    
    return descriptions[changeType] || `${location} has been altered by ${skillName}.`;
  }

  calculatePermanentEffects(skillUse) {
    const effects = [];
    const { engine, skillType, tier } = skillUse;
    
    // Region-based bonuses/penalties
    if (engine === 'Foundational') {
      effects.push({
        type: 'STRUCTURE_BONUS',
        value: tier * 5,
        description: 'Construction efficiency increased'
      });
    }
    
    if (skillType.includes('Shadow')) {
      effects.push({
        type: 'SHADOW_AFFINITY',
        value: tier * 3,
        description: 'Shadow skills more potent here'
      });
      effects.push({
        type: 'LIGHT_RESISTANCE',
        value: -(tier * 2),
        description: 'Light skills weakened'
      });
    }
    
    if (skillType.includes('Void')) {
      effects.push({
        type: 'REALITY_INSTABILITY',
        value: tier * 4,
        description: 'Reality becomes unstable'
      });
    }
    
    return effects;
  }

  calculateDecayTime(skillUse) {
    const { tier, skillType } = skillUse;
    
    // Void and Singularity changes are permanent
    if (skillType.includes('Void') || skillType.includes('Singularity')) {
      return null; // Never decays
    }
    
    // Foundational structures decay slowly
    if (skillType.includes('Structure')) {
      return 7 * 24 * 60 * 60 * 1000; // 7 days
    }
    
    // Most effects decay based on tier
    return tier * 24 * 60 * 60 * 1000; // tier days
  }

  applyAreaEffects(location, skillUse) {
    const effects = this.areaEffects.get(location) || [];
    const { skillName, tier, skillType } = skillUse;
    
    // Add temporary area effect
    effects.push({
      name: `${skillName} Residue`,
      duration: tier * 3600000, // tier hours in ms
      magnitude: tier * 10,
      type: skillType
    });
    
    this.areaEffects.set(location, effects);
  }

  updateCorruption(location, skillUse) {
    const { skillType, tier } = skillUse;
    const currentCorruption = this.corruptionLevels.get(location) || 0;
    
    let corruptionDelta = 0;
    
    if (skillType.includes('Void')) corruptionDelta += tier * 5;
    if (skillType.includes('Shadow')) corruptionDelta += tier * 3;
    if (skillType.includes('Singularity')) corruptionDelta += tier * 4;
    if (skillType.includes('Light')) corruptionDelta -= tier * 2;
    if (skillType.includes('Bloom')) corruptionDelta -= tier * 3;
    if (skillType.includes('Therapeutic')) corruptionDelta -= tier * 1;
    
    this.corruptionLevels.set(location, Math.max(0, Math.min(100, currentCorruption + corruptionDelta)));
  }

  checkLandmarkCreation(location) {
    const changes = this.permanentChanges.get(location) || [];
    
    // Create landmark if many skills used here
    if (changes.length >= 10 && !this.landmarks.has(location)) {
      const dominantType = this.getDominantChangeType(changes);
      const landmark = this.createLandmark(location, dominantType, changes);
      this.landmarks.set(location, landmark);
      return landmark;
    }
    
    return null;
  }

  getDominantChangeType(changes) {
    const typeCounts = {};
    changes.forEach(change => {
      typeCounts[change.type] = (typeCounts[change.type] || 0) + 1;
    });
    
    return Object.entries(typeCounts)
      .sort(([,a], [,b]) => b - a)[0][0];
  }

  createLandmark(location, dominantType, changes) {
    const landmarkNames = {
      STRUCTURAL: ['Construction Nexus', 'Builder\'s Monument', 'Architect\'s Legacy'],
      CORRUPTION: ['Shadowed Ground', 'Void Scar', 'Corrupted Hollow'],
      PURIFICATION: ['Sacred Ground', 'Blessed Site', 'Light\'s Refuge'],
      DIVINE_MARK: ['Divine Touchstone', 'God-Marked Place', 'Sacred Convergence'],
      REALITY_FRACTURE: ['Fractured Zone', 'Reality Tear', 'Singularity Point']
    };
    
    const names = landmarkNames[dominantType] || ['Marked Location'];
    const name = names[Math.floor(Math.random() * names.length)];
    
    return {
      name: `${location}: ${name}`,
      type: dominantType,
      skillCount: changes.length,
      createdAt: Date.now(),
      effects: this.compileLandmarkEffects(changes),
      description: this.generateLandmarkDescription(location, dominantType, changes)
    };
  }

  compileLandmarkEffects(changes) {
    const effects = [];
    
    changes.forEach(change => {
      change.permanentEffects?.forEach(effect => {
        const existing = effects.find(e => e.type === effect.type);
        if (existing) {
          existing.value += effect.value;
        } else {
          effects.push({...effect});
        }
      });
    });
    
    return effects;
  }

  generateLandmarkDescription(location, type, changes) {
    const descriptions = {
      STRUCTURAL: `${location} has become a monument to architectural mastery, transformed by ${changes.length} construction techniques.`,
      CORRUPTION: `Darkness has claimed ${location}. ${changes.length} corrupting forces have left their mark.`,
      PURIFICATION: `${location} radiates purity, blessed by ${changes.length} acts of light and healing.`,
      DIVINE_MARK: `The gods walk in ${location}. ${changes.length} divine invocations have consecrated this place.`,
      REALITY_FRACTURE: `Reality bends in ${location}. ${changes.length} reality-warping events have scarred existence itself.`
    };
    
    return descriptions[type] || `${location} has been fundamentally altered.`;
  }

  getLocationState(location) {
    return {
      changes: this.permanentChanges.get(location) || [],
      effects: this.areaEffects.get(location) || [],
      corruption: this.corruptionLevels.get(location) || 0,
      landmark: this.landmarks.get(location) || null,
      factionControl: this.factionInfluence.get(location) || 'neutral'
    };
  }

  exportWorldState() {
    return {
      permanentChanges: Array.from(this.permanentChanges.entries()),
      areaEffects: Array.from(this.areaEffects.entries()),
      corruptionLevels: Array.from(this.corruptionLevels.entries()),
      landmarks: Array.from(this.landmarks.entries()),
      witnessMemory: Array.from(this.witnessMemory.entries()),
      factionInfluence: Array.from(this.factionInfluence.entries())
    };
  }

  importWorldState(state) {
    this.permanentChanges = new Map(state.permanentChanges);
    this.areaEffects = new Map(state.areaEffects);
    this.corruptionLevels = new Map(state.corruptionLevels);
    this.landmarks = new Map(state.landmarks);
    this.witnessMemory = new Map(state.witnessMemory);
    this.factionInfluence = new Map(state.factionInfluence);
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// NPC MEMORY & REACTION SYSTEM - Dynamic Dialogue Based on Skills
// ═══════════════════════════════════════════════════════════════════════════

export class NPCMemorySystem {
  constructor() {
    this.memories = new Map(); // npcId -> memory array
    this.relationships = new Map(); // npcId -> relationship data
    this.witnessedSkills = new Map(); // npcId -> Set of skill IDs
    this.emotionalState = new Map(); // npcId -> current emotion
  }

  recordSkillUse(npcId, skillUse, context) {
    const { skillId, skillName, skillType, engine, target, outcome } = skillUse;
    
    // Get or create NPC memory
    const npcMemories = this.memories.get(npcId) || [];
    
    // Create memory entry
    const memory = {
      skillId,
      skillName,
      skillType,
      engine,
      timestamp: Date.now(),
      location: context.location,
      target,
      outcome,
      emotionalImpact: this.calculateEmotionalImpact(npcId, skillUse, context),
      relationshipChange: this.calculateRelationshipChange(npcId, skillUse, context),
      witnessed: context.npcs?.includes(npcId) || false
    };
    
    npcMemories.push(memory);
    this.memories.set(npcId, npcMemories);
    
    // Update witnessed skills
    const witnessed = this.witnessedSkills.get(npcId) || new Set();
    witnessed.add(skillId);
    this.witnessedSkills.set(npcId, witnessed);
    
    // Update relationship
    this.updateRelationship(npcId, memory.relationshipChange);
    
    // Update emotional state
    this.updateEmotionalState(npcId, memory.emotionalImpact);
    
    return memory;
  }

  calculateEmotionalImpact(npcId, skillUse, context) {
    const { skillType, target, engine } = skillUse;
    const npc = this.getNPCPersonality(npcId);
    
    let impact = 0;
    
    // Marcus reactions
    if (npcId === 'Marcus') {
      if (skillType.includes('Defense') || skillType.includes('Tactical')) impact += 2;
      if (skillType.includes('Shadow') || skillType.includes('Void')) impact -= 3;
      if (target === 'civilian' && skillType.includes('Heal')) impact += 4;
      if (target === 'innocent') impact -= 5;
    }
    
    // Elena reactions
    if (npcId === 'Elena') {
      if (engine === 'Divination' || engine === 'Consciousness') impact += 3;
      if (skillType.includes('Knowledge') || skillType.includes('Analysis')) impact += 2;
      if (skillType.includes('Reckless') || skillType.includes('Chaos')) impact -= 2;
    }
    
    return impact;
  }

  calculateRelationshipChange(npcId, skillUse, context) {
    const impact = this.calculateEmotionalImpact(npcId, skillUse, context);
    const { target, outcome } = skillUse;
    
    let change = impact;
    
    // Amplify if target is the NPC
    if (target === npcId) {
      change *= 2;
    }
    
    // Success/failure matters
    if (outcome === 'success') {
      change = Math.abs(change);
    } else if (outcome === 'failure') {
      change = -Math.abs(change);
    }
    
    return change;
  }

  updateRelationship(npcId, change) {
    const relationship = this.relationships.get(npcId) || {
      trust: 50,
      respect: 50,
      fear: 0,
      admiration: 0
    };
    
    if (change > 0) {
      relationship.trust += change;
      relationship.respect += Math.floor(change / 2);
    } else {
      relationship.trust += change;
      relationship.fear += Math.abs(change);
    }
    
    // Clamp values
    relationship.trust = Math.max(0, Math.min(100, relationship.trust));
    relationship.respect = Math.max(0, Math.min(100, relationship.respect));
    relationship.fear = Math.max(0, Math.min(100, relationship.fear));
    
    this.relationships.set(npcId, relationship);
  }

  updateEmotionalState(npcId, impact) {
    const emotions = ['angry', 'concerned', 'neutral', 'pleased', 'impressed', 'terrified'];
    
    let emotionIndex = 2; // Start at neutral
    
    if (impact > 5) emotionIndex = 4; // Impressed
    else if (impact > 2) emotionIndex = 3; // Pleased
    else if (impact < -5) emotionIndex = 5; // Terrified
    else if (impact < -2) emotionIndex = 0; // Angry
    else if (impact < 0) emotionIndex = 1; // Concerned
    
    this.emotionalState.set(npcId, emotions[emotionIndex]);
  }

  generateDialogue(npcId, skillUse, context) {
    const memories = this.memories.get(npcId) || [];
    const relationship = this.relationships.get(npcId);
    const emotion = this.emotionalState.get(npcId) || 'neutral';
    const usageCount = memories.filter(m => m.skillId === skillUse.skillId).length;
    
    return this.buildDialogue(npcId, skillUse, emotion, usageCount, relationship, context);
  }

  buildDialogue(npcId, skillUse, emotion, usageCount, relationship, context) {
    const { skillName, skillType, engine } = skillUse;
    
    // First time witnessing this skill
    if (usageCount === 0) {
      return this.getFirstTimeDialogue(npcId, skillUse, emotion);
    }
    
    // Repeated use
    if (usageCount >= 5) {
      return this.getRepeatedUseDialogue(npcId, skillUse, emotion, usageCount);
    }
    
    // Relationship-based dialogue
    if (relationship?.trust < 30) {
      return this.getLowTrustDialogue(npcId, skillUse);
    }
    
    if (relationship?.trust > 70) {
      return this.getHighTrustDialogue(npcId, skillUse);
    }
    
    return this.getGenericDialogue(npcId, skillUse, emotion);
  }

  getFirstTimeDialogue(npcId, skillUse, emotion) {
    const { skillName, skillType } = skillUse;
    
    const dialogueTemplates = {
      Marcus: {
        impressed: `"${skillName}? Tactical. I like it."`,
        concerned: `"${skillName}... be careful with that."`,
        angry: `"What the hell was that?! ${skillName}?!"`,
        neutral: `"Noted. ${skillName}. Useful."`
      },
      Elena: {
        impressed: `"Fascinating. ${skillName} shows remarkable understanding."`,
        pleased: `"${skillName}... yes, I see the logic in that."`,
        concerned: `"${skillName} is powerful, but consider the consequences."`,
        neutral: `"${skillName}. Interesting technique."`
      }
    };
    
    return dialogueTemplates[npcId]?.[emotion] || `"${skillName}? Hmm."`;
  }

  getRepeatedUseDialogue(npcId, skillUse, emotion, count) {
    const { skillName } = skillUse;
    
    if (npcId === 'Marcus') {
      if (count > 10) return `"You're relying too much on ${skillName}. Diversify."`;
      return `"${skillName} again? It's effective, but predictable."`;
    }
    
    if (npcId === 'Elena') {
      if (count > 10) return `"${skillName} has become your signature. Interesting pattern."`;
      return `"You favor ${skillName}. There's wisdom in consistency."`;
    }
    
    return `"${skillName} again..."`;
  }

  getLowTrustDialogue(npcId, skillUse) {
    const { skillName } = skillUse;
    
    if (npcId === 'Marcus') {
      return `"I don't trust you enough to feel safe when you use ${skillName}."`;
    }
    
    return `"${skillName}... I'm watching you."`;
  }

  getHighTrustDialogue(npcId, skillUse) {
    const { skillName } = skillUse;
    
    if (npcId === 'Marcus') {
      return `"${skillName}. You've got this. I trust you."`;
    }
    
    if (npcId === 'Elena') {
      return `"${skillName}. Your mastery grows. I'm proud to fight beside you."`;
    }
    
    return `"${skillName}. Well done."`;
  }

  getGenericDialogue(npcId, skillUse, emotion) {
    return this.getFirstTimeDialogue(npcId, skillUse, emotion);
  }

  getNPCPersonality(npcId) {
    const personalities = {
      Marcus: {
        values: ['honor', 'tactics', 'protection'],
        dislikes: ['shadow', 'void', 'chaos'],
        baseEmotion: 'stern'
      },
      Elena: {
        values: ['knowledge', 'wisdom', 'precision'],
        dislikes: ['recklessness', 'waste', 'ignorance'],
        baseEmotion: 'analytical'
      }
    };
    
    return personalities[npcId] || { values: [], dislikes: [], baseEmotion: 'neutral' };
  }

  exportMemories() {
    return {
      memories: Array.from(this.memories.entries()),
      relationships: Array.from(this.relationships.entries()),
      witnessedSkills: Array.from(this.witnessedSkills.entries()).map(([k, v]) => [k, Array.from(v)]),
      emotionalState: Array.from(this.emotionalState.entries())
    };
  }

  importMemories(data) {
    this.memories = new Map(data.memories);
    this.relationships = new Map(data.relationships);
    this.witnessedSkills = new Map(data.witnessedSkills.map(([k, v]) => [k, new Set(v)]));
    this.emotionalState = new Map(data.emotionalState);
  }
}

export default {
  WorldStateManager,
  NPCMemorySystem
};
