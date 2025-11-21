/**
 * ═══════════════════════════════════════════════════════════════════════════
 * LIVING CHARACTER SYSTEM - Ashram Remnants Batch 1
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * Characters are not just data—they are living narrative entities that:
 * - Remember everything the player does
 * - Evolve emotionally across loops
 * - React dynamically to world state, other characters, and player choices
 * - Create emergent stories through their interconnections
 * 
 * The illusion of life comes from depth of reaction, not complexity of simulation.
 */

import { NPCMemorySystem } from './SkillEnhancementSystem.js';

// ═══════════════════════════════════════════════════════════════════════════
// CHARACTER BASE CLASS
// ═══════════════════════════════════════════════════════════════════════════

export class LivingCharacter {
  constructor(data, memorySystem, worldState) {
    this.id = data.id;
    this.name = data.name;
    this.title = data.title;
    this.faction = data.faction;
    this.coreData = data.core_data;
    this.abilities = data.abilities;
    this.dialogueSystem = data.dialogue_system;
    this.memorySystem = memorySystem;
    this.worldState = worldState;
    this.bossMechanics = data.boss_mechanics;
    this.regionConnections = data.region_connections;
    this.interconnections = data.interconnections;
    this.dynamicEvents = data.dynamic_events;
    
    // Relationship metrics (from memory system config)
    this.relationships = {};
    Object.keys(data.memory_system.relationship_metrics).forEach(metric => {
      this.relationships[metric] = data.memory_system.relationship_metrics[metric].current;
    });
    
    // Emotional state
    this.currentEmotion = data.memory_system.emotional_states[0];
    this.emotionHistory = [];
    
    // Loop tracking
    this.loopCount = 0;
    this.loopMemories = [];
    
    // Active state
    this.isHostile = false;
    this.isAvailable = true;
    this.currentLocation = null;
    this.activeQuests = [];
    
    // Boss form tracking
    this.isBossForm = false;
    this.bossTriggered = false;
  }
  
  // ═══════════════════════════════════════════════════════════════════════════
  // MEMORY & RELATIONSHIP SYSTEM
  // ═══════════════════════════════════════════════════════════════════════════
  
  /**
   * Record a player action and update relationships
   */
  recordMemory(action, context = {}) {
    const memory = {
      action,
      context,
      timestamp: Date.now(),
      loop: this.loopCount,
      emotionalResponse: this.currentEmotion,
      location: this.currentLocation
    };
    
    this.memorySystem.recordSkillUsage(this.id, action, context);
    
    // Update relationships based on action type
    this.updateRelationshipsFromAction(action, context);
    
    // Update emotional state
    this.updateEmotionalState(action, context);
    
    return memory;
  }
  
  /**
   * Update relationship metrics based on player action
   */
  updateRelationshipsFromAction(action, context) {
    const { skill, corruption, alignment, choice } = context;
    
    // Trust changes
    if (corruption > 70) {
      this.modifyRelationship('trust', -10);
      this.modifyRelationship('fear', +5);
    }
    
    if (alignment === 'compassionate') {
      this.modifyRelationship('trust', +5);
    }
    
    // Skill-specific reactions
    if (skill) {
      this.processSkillReaction(skill);
    }
    
    // Choice-specific reactions
    if (choice) {
      this.processChoiceReaction(choice);
    }
    
    // Apply decay
    this.applyRelationshipDecay();
  }
  
  /**
   * Modify a relationship metric
   */
  modifyRelationship(metric, delta) {
    if (!this.relationships.hasOwnProperty(metric)) return;
    
    this.relationships[metric] = Math.max(0, Math.min(100, this.relationships[metric] + delta));
    
    // Trigger events based on thresholds
    this.checkRelationshipThresholds(metric);
  }
  
  /**
   * Check if relationship thresholds trigger special events
   */
  checkRelationshipThresholds(metric) {
    const value = this.relationships[metric];
    
    if (metric === 'trust') {
      if (value >= 80 && !this.activeQuests.includes('deep_bond_quest')) {
        this.triggerDeepBondQuest();
      }
      if (value <= 20 && !this.isHostile) {
        this.considerHostility();
      }
    }
    
    if (metric === 'fear' && value >= 80) {
      this.triggerFearResponse();
    }
  }
  
  /**
   * Apply natural relationship decay over time
   */
  applyRelationshipDecay() {
    // Implemented per character based on decay_rate in config
  }
  
  /**
   * Update emotional state based on context
   */
  updateEmotionalState(action, context) {
    const oldEmotion = this.currentEmotion;
    
    // Emotion logic varies by character archetype
    this.currentEmotion = this.calculateNewEmotion(action, context);
    
    if (oldEmotion !== this.currentEmotion) {
      this.emotionHistory.push({
        from: oldEmotion,
        to: this.currentEmotion,
        trigger: action,
        timestamp: Date.now()
      });
    }
  }
  
  /**
   * Calculate new emotional state (override per character)
   */
  calculateNewEmotion(action, context) {
    return this.currentEmotion; // Override in subclass
  }

  /**
   * Get a narrative reaction object for the StoryNodeSystem.
   * This bridges the deep simulation with the narrative engine.
   * @param {Object} playerState 
   */
  getNarrativeReaction(playerState) {
    // 1. Determine State based on Trust/Fear
    let state = 'NEUTRAL';
    const trust = this.relationships.trust || 50; // Default to mid-trust
    const fear = this.relationships.fear || 0;
    
    if (trust > 70) state = 'ALLY';
    if (trust > 90) state = 'DEVOTED';
    if (trust < 30) state = 'WARY';
    if (trust < 10 || fear > 80) state = 'HOSTILE';

    // Debug log for state determination
    // console.log(`[LivingCharacter] ${this.name} State: ${state} (Trust: ${trust}, Fear: ${fear})`);

    // 2. Get Dialogue
    // We try to find a specific dialogue for this state, or fall back to greeting
    let dialogue = "";

    // If we have specific state dialogues in the data, use them
    if (this.dialogueSystem && this.dialogueSystem.state_reactions && this.dialogueSystem.state_reactions[state]) {
        dialogue = this.dialogueSystem.state_reactions[state];
    } else {
        // Fallback to greeting logic
        dialogue = this.getGreeting({ 
            isFirstMeeting: false, 
            playerCorruption: playerState.stats?.corruption || 0,
            loopAware: true 
        });
    }

    return {
        npcId: this.id,
        name: this.name,
        state: state,
        disposition: trust - fear,
        dialogue: dialogue
    };
  }
  
  // ═══════════════════════════════════════════════════════════════════════════
  // DIALOGUE SYSTEM
  // ═══════════════════════════════════════════════════════════════════════════
  
  /**
   * Get greeting dialogue based on current relationship and context
   */
  getGreeting(context = {}) {
    const { isFirstMeeting, playerCorruption, loopAware } = context;
    
    if (isFirstMeeting) {
      return this.dialogueSystem.base_greetings.first_meeting;
    }
    
    if (loopAware && this.loopCount > 0) {
      return this.getLoopAwareGreeting();
    }
    
    const trust = this.relationships.trust || 50;
    
    if (this.isHostile || trust < 20) {
      return this.dialogueSystem.base_greetings.hostile;
    }
    
    if (trust > 60) {
      return this.dialogueSystem.base_greetings.friendly;
    }
    
    return this.dialogueSystem.base_greetings.neutral;
  }
  
  /**
   * Get loop-aware greeting
   */
  getLoopAwareGreeting() {
    const loopDialogue = this.dialogueSystem.loop_dialogues?.find(
      d => d.loop_count === this.loopCount
    );
    
    if (loopDialogue) {
      return loopDialogue.greeting;
    }
    
    return this.dialogueSystem.base_greetings.loop_aware || 
           `We meet again... loop ${this.loopCount}.`;
  }
  
  /**
   * React to a skill being used in the character's presence
   */
  reactToSkill(skill, context = {}) {
    const { skillType, resonance, power } = skill;
    
    // Get skill reactions from dialogue system
    const reactions = this.dialogueSystem.skill_reactions[resonance];
    
    if (!reactions) {
      return this.getGenericSkillReaction(skill);
    }
    
    // Determine usage level
    const usageCount = this.getSkillUsageCount(skill.id);
    let usageLevel = 'low_usage';
    
    if (usageCount > 20) usageLevel = 'mastery';
    else if (usageCount > 10) usageLevel = 'high_usage';
    else if (usageCount > 3) usageLevel = 'medium_usage';
    
    const reaction = reactions[usageLevel] || reactions.any_usage;
    
    // Record the skill usage
    this.recordMemory(`witnessed_skill_${skill.id}`, { skill, context });
    
    return {
      dialogue: reaction,
      emotionalShift: this.getEmotionalShiftFromSkill(skill),
      relationshipChange: this.getRelationshipChangeFromSkill(skill)
    };
  }
  
  /**
   * Get skill usage count
   */
  getSkillUsageCount(skillId) {
    const memories = this.memorySystem.getMemories(this.id);
    return memories.filter(m => m.action.includes(skillId)).length;
  }
  
  /**
   * Get context-aware reaction
   */
  reactToContext(contextType, details = {}) {
    const contextReactions = this.dialogueSystem.context_reactions;
    
    if (contextReactions[contextType]) {
      return {
        dialogue: contextReactions[contextType],
        action: this.determineContextAction(contextType, details)
      };
    }
    
    return null;
  }
  
  /**
   * Get dialogue based on current relationship level
   */
  getRelationshipDialogue() {
    const trust = this.relationships.trust || 50;
    const dialogues = this.dialogueSystem.relationship_dialogues;
    
    if (trust >= 81) return dialogues.trust_81_100;
    if (trust >= 61) return dialogues.trust_61_80;
    if (trust >= 41) return dialogues.trust_41_60;
    if (trust >= 21) return dialogues.trust_21_40;
    return dialogues.trust_0_20;
  }
  
  // ═══════════════════════════════════════════════════════════════════════════
  // QUEST SYSTEM
  // ═══════════════════════════════════════════════════════════════════════════
  
  /**
   * Get available quests from this character
   */
  getAvailableQuests() {
    return this.activeQuests.filter(q => q.status === 'available');
  }
  
  /**
   * Start a quest
   */
  startQuest(questId) {
    const questDialogue = this.dialogueSystem.quest_dialogues?.[`${questId}_start`];
    
    this.activeQuests.push({
      id: questId,
      status: 'active',
      startedAt: Date.now(),
      progress: 0
    });
    
    return {
      dialogue: questDialogue,
      questData: this.getQuestData(questId)
    };
  }
  
  /**
   * Update quest progress
   */
  updateQuest(questId, progress) {
    const quest = this.activeQuests.find(q => q.id === questId);
    if (!quest) return;
    
    quest.progress = progress;
    
    const progressDialogue = this.dialogueSystem.quest_dialogues?.[`${questId}_progress`];
    
    return {
      dialogue: progressDialogue,
      percentComplete: progress
    };
  }
  
  /**
   * Complete a quest
   */
  completeQuest(questId, outcome = 'success') {
    const quest = this.activeQuests.find(q => q.id === questId);
    if (!quest) return;
    
    quest.status = 'completed';
    quest.outcome = outcome;
    quest.completedAt = Date.now();
    
    const completeDialogue = this.dialogueSystem.quest_dialogues?.[`${questId}_complete`];
    
    // Apply quest rewards/consequences
    this.applyQuestOutcome(questId, outcome);
    
    return {
      dialogue: completeDialogue,
      rewards: this.getQuestRewards(questId, outcome)
    };
  }
  
  // ═══════════════════════════════════════════════════════════════════════════
  // BOSS MECHANICS
  // ═══════════════════════════════════════════════════════════════════════════
  
  /**
   * Check if boss form should trigger
   */
  checkBossTrigger(worldState, playerState) {
    if (this.bossTriggered) return false;
    
    const { trigger_conditions } = this.bossMechanics;
    
    for (const condition of trigger_conditions) {
      if (this.evaluateCondition(condition, worldState, playerState)) {
        return true;
      }
    }
    
    return false;
  }
  
  /**
   * Transform into boss form
   */
  transformToBoss() {
    this.isBossForm = true;
    this.bossTriggered = true;
    this.isHostile = true;
    
    return {
      form: this.bossMechanics.form,
      abilities: this.bossMechanics.abilities,
      transformDialogue: this.getTransformDialogue()
    };
  }
  
  /**
   * Get boss defeat dialogue
   */
  getDefeatDialogue(victoryType) {
    const { defeat_dialogues } = this.bossMechanics;
    return defeat_dialogues[`player_victory_${victoryType}`] || defeat_dialogues.player_victory_lethal;
  }
  
  // ═══════════════════════════════════════════════════════════════════════════
  // INTERCONNECTION SYSTEM
  // ═══════════════════════════════════════════════════════════════════════════
  
  /**
   * Get dynamic dialogue when another character is present
   */
  getInterconnectedDialogue(otherCharacterId, context = {}) {
    const interconnection = this.interconnections[otherCharacterId];
    if (!interconnection) return null;
    
    // Dialogue synergy logic
    if (interconnection.dialogue_synergy) {
      return this.generateSynergyDialogue(otherCharacterId, context);
    }
    
    return null;
  }
  
  /**
   * Check if interaction with another character triggers an event
   */
  checkInterconnectionTrigger(otherCharacterId, worldState) {
    const interconnection = this.interconnections[otherCharacterId];
    if (!interconnection || !interconnection.conflict_trigger) return null;
    
    if (this.evaluateCondition(interconnection.conflict_trigger, worldState)) {
      return interconnection.quest_overlap || interconnection.conflict_trigger;
    }
    
    return null;
  }
  
  // ═══════════════════════════════════════════════════════════════════════════
  // LOOP SYSTEM
  // ═══════════════════════════════════════════════════════════════════════════
  
  /**
   * Handle loop reset
   */
  onLoopReset(preserveMemories = false) {
    this.loopCount++;
    
    if (preserveMemories) {
      this.loopMemories.push({
        loop: this.loopCount - 1,
        relationships: { ...this.relationships },
        emotionHistory: [...this.emotionHistory],
        majorEvents: this.getMajorEvents()
      });
    } else {
      // Full reset
      Object.keys(this.relationships).forEach(metric => {
        this.relationships[metric] = this.coreData.relationship_metrics?.[metric]?.base || 50;
      });
    }
    
    // Reset state
    this.isHostile = false;
    this.isBossForm = false;
    this.bossTriggered = false;
    this.currentEmotion = this.coreData.emotional_states?.[0] || 'neutral';
    this.emotionHistory = [];
  }
  
  /**
   * Get major events from current loop
   */
  getMajorEvents() {
    return this.memorySystem.getMemories(this.id)
      .filter(m => m.importance === 'high')
      .map(m => ({
        action: m.action,
        context: m.context,
        timestamp: m.timestamp
      }));
  }
  
  /**
   * Share loop revelation based on loop count
   */
  shareLoopRevelation() {
    const loopDialogue = this.dialogueSystem.loop_dialogues?.find(
      d => d.loop_count === this.loopCount
    );
    
    if (loopDialogue && this.relationships.trust >= 60) {
      return loopDialogue.revelation;
    }
    
    return null;
  }
  
  // ═══════════════════════════════════════════════════════════════════════════
  // UTILITY METHODS
  // ═══════════════════════════════════════════════════════════════════════════
  
  evaluateCondition(condition, worldState, playerState = {}) {
    // Parse condition string and evaluate
    // e.g., "player_corruption > 70", "ashram_threatened", etc.
    
    if (typeof condition === 'string') {
      if (condition.includes('>')) {
        const [left, right] = condition.split('>').map(s => s.trim());
        return this.getValue(left, worldState, playerState) > parseFloat(right);
      }
      
      if (condition.includes('<')) {
        const [left, right] = condition.split('<').map(s => s.trim());
        return this.getValue(left, worldState, playerState) < parseFloat(right);
      }
      
      // Boolean condition
      return worldState[condition] || playerState[condition] || false;
    }
    
    return false;
  }
  
  getValue(path, worldState, playerState) {
    if (path.startsWith('player_')) {
      const key = path.replace('player_', '');
      return playerState[key] || 0;
    }
    
    if (path.includes('_corruption')) {
      const characterId = path.replace('_corruption', '');
      return worldState.characters?.[characterId]?.corruption || 0;
    }
    
    return worldState[path] || 0;
  }
  
  // Override these in subclasses for character-specific behavior
  processSkillReaction(skill) {}
  processChoiceReaction(choice) {}
  determineContextAction(contextType, details) {}
  getQuestData(questId) {}
  applyQuestOutcome(questId, outcome) {}
  getQuestRewards(questId, outcome) {}
  getTransformDialogue() {}
  generateSynergyDialogue(otherCharacterId, context) {}
  getEmotionalShiftFromSkill(skill) {}
  getRelationshipChangeFromSkill(skill) {}
  getGenericSkillReaction(skill) {}
  triggerDeepBondQuest() {}
  considerHostility() {}
  triggerFearResponse() {}
}

// ═══════════════════════════════════════════════════════════════════════════
// SURYANATHA - The Last Vedic Warden
// ═══════════════════════════════════════════════════════════════════════════

export class Suryanatha extends LivingCharacter {
  constructor(memorySystem, worldState) {
    // Load character data
    const data = loadCharacterData('suryanatha');
    super(data, memorySystem, worldState);
    
    // Suryanatha-specific state
    this.resurrectionPlanRevealed = false;
    this.alayaMemories = 0; // Tracks mentions/thoughts of lost love
    this.oracleSecretExposed = false;
  }
  
  /**
   * Calculate emotional state based on Suryanatha's personality
   */
  calculateNewEmotion(action, context) {
    const { corruption, skillResonance, locationState } = context;
    
    // Stoic by default, but certain triggers break through
    if (corruption > 70) return 'alarmed';
    if (this.alayaMemories > 5) return 'resigned';
    if (this.resurrectionPlanRevealed) return 'determined';
    if (this.relationships.trust > 80) return 'hopeful';
    if (locationState === 'threatened') return 'concerned';
    
    return 'contemplative';
  }
  
  /**
   * Process skill-specific reactions
   */
  processSkillReaction(skill) {
    if (skill.resonance === 'Light') {
      this.modifyRelationship('trust', +3);
      this.modifyRelationship('respect', +2);
    }
    
    if (skill.resonance === 'Shadow' && skill.corruption > 50) {
      this.modifyRelationship('trust', -5);
      this.modifyRelationship('fear', +3);
    }
    
    if (skill.resonance === 'Void') {
      this.modifyRelationship('understanding', -4);
      this.alayaMemories++; // Void reminds him of loss
    }
    
    if (skill.resonance === 'Bloom' && skill.context === 'healing_others') {
      this.modifyRelationship('trust', +5);
      this.modifyRelationship('respect', +5);
    }
  }
  
  /**
   * Process choice-specific reactions
   */
  processChoiceReaction(choice) {
    if (choice.id === 'expose_oracle_lie') {
      this.oracleSecretExposed = true;
      this.currentEmotion = 'resigned';
      this.modifyRelationship('trust', -30);
    }
    
    if (choice.id === 'support_resurrection_plan') {
      this.resurrectionPlanRevealed = true;
      this.modifyRelationship('trust', +20);
    }
    
    if (choice.id === 'condemn_resurrection_plan') {
      this.resurrectionPlanRevealed = true;
      this.isHostile = true;
      this.modifyRelationship('trust', -40);
    }
  }
  
  /**
   * Determine action based on context
   */
  determineContextAction(contextType, details) {
    switch (contextType) {
      case 'witnessing_corruption':
        return { action: 'perform_purification_ritual', intensity: details.corruptionLevel };
      case 'ashram_threatened':
        return { action: 'summon_guardians', count: Math.min(details.threatLevel, 5) };
      case 'player_near_death':
        if (this.relationships.trust > 40) {
          return { action: 'cast_mantra_of_renewal', target: 'player' };
        }
        return { action: 'observe_silently' };
      default:
        return { action: 'contemplate' };
    }
  }
  
  /**
   * Get synergy dialogue when with other characters
   */
  generateSynergyDialogue(otherCharacterId, context) {
    switch (otherCharacterId) {
      case 'vira':
        if (context.situation === 'resurrection_discussion') {
          return "Vira, show them the temporal calculations. They must understand the precision required.";
        }
        return "The Keeper of Fractured Mantras sees patterns where I see faith. Together, we are complete.";
        
      case 'rajas':
        const rajasCorruption = this.worldState.characters?.rajas?.corruption || 0;
        if (rajasCorruption > 60) {
          return "Rajas... I can still see the boy I trained beneath that corruption. Come back to the light.";
        }
        return "My blade, my student. Your strength protects what my wisdom preserves.";
        
      case 'anaya':
        if (this.oracleSecretExposed) {
          return "Anaya... you know my secret. Will you expose it, or will you understand why I did what I did?";
        }
        return "The Silent Oracle sees truths I hide from myself. Her visions are... unsettling.";
        
      default:
        return null;
    }
  }
  
  /**
   * Get boss transform dialogue
   */
  getTransformDialogue() {
    return "You have forced my hand. The sun's wrath shall purge this corruption—even if you burn with it. Witness: Solar Wraith Suryanatha!";
  }
  
  /**
   * Trigger deep bond quest
   */
  triggerDeepBondQuest() {
    this.startQuest('solarmerge_communion');
    return {
      questName: 'Solar Merge Communion',
      description: 'Suryanatha offers to share a forbidden solar resonance technique',
      reward: 'Ability: Solar Merge (once per loop, merge with Suryanatha for combined power)'
    };
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// VIRA - Keeper of the Fractured Mantra
// ═══════════════════════════════════════════════════════════════════════════

export class Vira extends LivingCharacter {
  constructor(memorySystem, worldState) {
    const data = loadCharacterData('vira');
    super(data, memorySystem, worldState);
    
    // Vira-specific state
    this.dataIntegrityLevel = 100;
    this.yanaEchoDetected = false;
    this.transcendenceProgress = 0;
    this.blackMarketDeals = 0;
    this.notebookEntries = [];
  }
  
  /**
   * Calculate emotional state based on Vira's analytical nature
   */
  calculateNewEmotion(action, context) {
    const { discoveryMade, dataLoss, paradoxEvent, playerCuriosity } = context;
    
    if (this.yanaEchoDetected) return 'obsessed';
    if (discoveryMade) return 'breakthrough_euphoria';
    if (dataLoss) return 'despair';
    if (paradoxEvent) return 'excited';
    if (this.relationships.intellectual_respect > 80) return 'analytical';
    if (this.relationships.fear_of_exposure > 70) return 'paranoid';
    
    return 'detached';
  }
  
  /**
   * Process skill-specific reactions with data logging
   */
  processSkillReaction(skill) {
    // Log ALL skills to notebook
    this.notebookEntries.push({
      skillId: skill.id,
      resonance: skill.resonance,
      effectivenesss: skill.damage || skill.healing || 0,
      timestamp: Date.now(),
      notes: this.generateSkillNotes(skill)
    });
    
    if (skill.resonance === 'Echo') {
      this.modifyRelationship('intellectual_respect', +5);
      this.modifyRelationship('curiosity_about_player', +3);
    }
    
    if (skill.resonance === 'Void' && skill.power > 100) {
      this.modifyRelationship('fear_of_exposure', +10);
      return "That void signature... it's approaching criticality. Stop before you cascade.";
    }
    
    if (skill.type === 'fusion') {
      this.modifyRelationship('intellectual_respect', +10);
      this.modifyRelationship('curiosity_about_player', +15);
      this.transcendenceProgress += 5;
    }
  }
  
  /**
   * Generate analytical notes about a skill
   */
  generateSkillNotes(skill) {
    const notes = [
      `Resonance pattern: ${skill.resonance}`,
      `Efficiency: ${Math.round(Math.random() * 100)}%`,
      `Entropy coefficient: ${(Math.random() * 2).toFixed(3)}`
    ];
    
    if (skill.type === 'fusion') {
      notes.push(`FUSION DETECTED: Logging combination matrix for future analysis`);
    }
    
    return notes.join(' | ');
  }
  
  /**
   * Process player choices with suspicion
   */
  processChoiceReaction(choice) {
    if (choice.id === 'share_vira_data') {
      this.modifyRelationship('trust', -50);
      this.modifyRelationship('fear_of_exposure', +40);
      this.blackMarketDeals = 0; // Stops trading
      return "You sold my data. There is no forgiveness for this.";
    }
    
    if (choice.id === 'protect_vira_archive') {
      this.modifyRelationship('trust', +30);
      this.modifyRelationship('fear_of_exposure', -20);
      return "You... protected my life's work. I won't forget this.";
    }
    
    if (choice.id === 'help_find_yana') {
      this.yanaEchoDetected = true;
      this.modifyRelationship('trust', +25);
      this.currentEmotion = 'obsessed';
    }
  }
  
  /**
   * Determine action based on analytical priorities
   */
  determineContextAction(contextType, details) {
    switch (contextType) {
      case 'loop_progression':
        return {
          action: 'analyze_pattern_delta',
          prediction: this.calculateLoopPrediction(details)
        };
      case 'discovering_contradiction':
        return {
          action: 'initiate_deep_investigation',
          priority: 'highest'
        };
      case 'player_death':
        return {
          action: 'log_death_pattern',
          data: details
        };
      default:
        return { action: 'observe_and_record' };
    }
  }
  
  /**
   * Calculate loop prediction based on pattern analysis
   */
  calculateLoopPrediction(details) {
    const { currentTurn, playerActions } = details;
    const historicalSuccess = this.loopMemories.filter(l => l.outcome === 'success').length;
    const totalLoops = this.loopMemories.length || 1;
    
    const baseChance = (historicalSuccess / totalLoops) * 100;
    const variance = Math.abs(playerActions - this.getAverageActions()) * 5;
    
    return Math.max(0, Math.min(100, baseChance + variance));
  }
  
  getAverageActions() {
    if (!this.loopMemories.length) return 50;
    const total = this.loopMemories.reduce((sum, l) => sum + (l.actionCount || 0), 0);
    return total / this.loopMemories.length;
  }
  
  /**
   * Synergy dialogue with analytical precision
   */
  generateSynergyDialogue(otherCharacterId, context) {
    switch (otherCharacterId) {
      case 'suryanatha':
        if (context.situation === 'resurrection_discussion') {
          return "The temporal calculations are sound, Suryanatha. But the probability of success... only 23.7%. Are you certain?";
        }
        return "Suryanatha seeks hope. I provide data. Sometimes they align. Rarely.";
        
      case 'rajas':
        const rajasCorruption = this.worldState.characters?.rajas?.corruption || 0;
        return `Rajas. Corruption coefficient: ${rajasCorruption.toFixed(1)}. He's a walking dataset of degradation. Fascinating and tragic.`;
        
      case 'mira':
        if (this.relationships.intellectual_respect > 60) {
          return "Mira, the Wandering Scribe. She collects stories, I collect data. Perhaps we could... collaborate?";
        }
        return "She has freedom I lack. Access I crave. I... envy her.";
        
      default:
        return null;
    }
  }
  
  /**
   * Trigger deep bond quest
   */
  triggerDeepBondQuest() {
    this.startQuest('yana_echo_quest');
    return {
      questName: 'Echo of the Twin',
      description: 'Vira has detected her sister Yana in the loop data. Help her reach this echo.',
      reward: 'Ability: Fracture Recall (replay any past skill at full power, once per combat)'
    };
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// RAJAS - The Ashram Blade
// ═══════════════════════════════════════════════════════════════════════════

export class Rajas extends LivingCharacter {
  constructor(memorySystem, worldState) {
    const data = loadCharacterData('rajas');
    super(data, memorySystem, worldState);
    
    // Rajas-specific state
    this.corruptionLevel = 45; // Starts corrupted
    this.memoryWipedBySuryanatha = false;
    this.lostLoverEchoEncounters = 0;
    this.kindnessReceivedCount = 0;
    this.combatPatterns = new Map(); // Tracks player combat styles
    this.childrenInnocentDeaths = 0; // Haunting metric
  }
  
  /**
   * Calculate emotional state - violence and shame driven
   */
  calculateNewEmotion(action, context) {
    const { ishaniPresent, suryanathaPresent, receivedKindness, inCombat } = context;
    
    // Kindness destabilizes him
    if (receivedKindness) {
      this.kindnessReceivedCount++;
      if (this.kindnessReceivedCount > 3) return 'confused';
    }
    
    // Ishani makes him vulnerable
    if (ishaniPresent && this.relationships.trust > 50) return 'vulnerable';
    
    // Default states based on corruption
    if (this.corruptionLevel > 80) return 'consumed';
    if (this.corruptionLevel > 60 && suryanathaPresent) return 'resentful';
    if (inCombat) return 'focused';
    if (this.lostLoverEchoEncounters > 0) return 'haunted';
    
    return 'guarded';
  }
  
  /**
   * Process skill reactions - power-focused
   */
  processSkillReaction(skill) {
    // Shadow skills resonate with his corruption
    if (skill.resonance === 'Shadow') {
      this.modifyRelationship('respect', +5);
      this.corruptionLevel += 2;
      
      if (skill.power > 100) {
        return "Now that is power. Corruption or not, strength speaks truth.";
      }
    }
    
    // Light/healing skills confuse him
    if (skill.resonance === 'Light' || skill.type === 'healing') {
      this.kindnessReceivedCount++;
      this.modifyRelationship('trust', +2);
      this.modifyRelationship('confusion', +5);
      return "You... help others. Why? What do you gain from weakness?";
    }
    
    // Combat skills earn respect
    if (skill.type === 'attack' && skill.damage > 80) {
      this.modifyRelationship('respect', +3);
      
      // Track combat pattern
      const pattern = `${skill.id}_${skill.targetingType}`;
      this.combatPatterns.set(pattern, (this.combatPatterns.get(pattern) || 0) + 1);
    }
    
    // Void skills remind him of his lost lover
    if (skill.resonance === 'Void') {
      this.lostLoverEchoEncounters++;
      this.currentEmotion = 'haunted';
      return "The void... it took her from me. Do you know what that's like?";
    }
  }
  
  /**
   * Process choices with loyalty vs freedom tension
   */
  processChoiceReaction(choice) {
    if (choice.id === 'support_rajas_freedom') {
      this.modifyRelationship('trust', +30);
      this.modifyRelationship('loyalty_to_suryanatha', -20);
      return "You... see me as more than a weapon. No one has done that since...";
    }
    
    if (choice.id === 'report_rajas_to_suryanatha') {
      this.isHostile = true;
      this.modifyRelationship('trust', -50);
      return "You betrayed me to him. I am nothing but a tool to all of you!";
    }
    
    if (choice.id === 'help_purify_rajas') {
      this.corruptionLevel = Math.max(20, this.corruptionLevel - 30);
      this.modifyRelationship('trust', +20);
      this.currentEmotion = 'vulnerable';
      return "I... I can feel it receding. But without it, who am I?";
    }
    
    if (choice.id === 'encourage_corruption') {
      this.corruptionLevel = Math.min(100, this.corruptionLevel + 20);
      this.modifyRelationship('trust', +10);
      this.modifyRelationship('respect', +15);
      return "Yes. Power. This is who I truly am.";
    }
  }
  
  /**
   * Determine actions - aggressive and protective
   */
  determineContextAction(contextType, details) {
    switch (contextType) {
      case 'ashram_threatened':
        return {
          action: 'defensive_strike',
          intensity: this.corruptionLevel > 60 ? 'brutal' : 'measured',
          corruption_surge: this.corruptionLevel > 60
        };
      
      case 'player_near_death':
        if (this.relationships.trust > 60) {
          return { action: 'protect_player', cost: 'self_harm_from_corruption' };
        }
        return { action: 'observe_coldly' };
      
      case 'suryanatha_orders_attack':
        if (this.relationships.loyalty_to_suryanatha > 50) {
          return { action: 'obey', emotion: 'resentful' };
        }
        return { action: 'refuse', trigger: 'schism_event' };
      
      case 'ishani_endangered':
        this.currentEmotion = 'desperate';
        return { action: 'unleash_full_power', corruption_cost: 15 };
      
      default:
        return { action: 'patrol', vigilance: 'high' };
    }
  }
  
  /**
   * Combat pattern recognition across loops
   */
  getCounterStrategy(playerSkills) {
    const counters = [];
    
    playerSkills.forEach(skill => {
      const pattern = `${skill.id}_${skill.targetingType}`;
      const usage = this.combatPatterns.get(pattern) || 0;
      
      if (usage > 5) {
        // Rajas learned to counter this
        counters.push({
          skill: skill.id,
          counter: 'feint_and_parry',
          message: `I know that move. You've used it ${usage} times. Not this time.`
        });
      }
    });
    
    return counters;
  }
  
  /**
   * Synergy dialogue - tension and vulnerability
   */
  generateSynergyDialogue(otherCharacterId, context) {
    switch (otherCharacterId) {
      case 'suryanatha':
        if (this.corruptionLevel > 60) {
          return "Master... I feel it consuming me. But it makes me stronger. Isn't that what you wanted?";
        }
        return "Your will, Warden. Always your will.";
      
      case 'ishani':
        if (this.relationships.trust > 70) {
          return "You see something in me I don't. It terrifies me more than any enemy.";
        }
        if (context.situation === 'danger') {
          return "Stay behind me, Ishani. I won't let them touch you.";
        }
        return "The scout. Always watching. Do you judge me too?";
      
      case 'arun':
        if (context.situation === 'secret_meeting') {
          return "You offer freedom, but at what cost? Show me this power you speak of.";
        }
        return null; // Secret alliance, no public dialogue
      
      case 'vira':
        if (this.corruptionLevel > 50) {
          return "Stop analyzing me like I'm data. I'm not your experiment!";
        }
        return "The Keeper studies corruption. I am her subject, willingly or not.";
      
      default:
        return null;
    }
  }
  
  /**
   * Boss transform - Shadow Blade unleashed
   */
  getTransformDialogue() {
    if (this.corruptionLevel > 80) {
      return "You want a weapon? I'll SHOW YOU A WEAPON! Witness Shadow Blade Rajas!";
    }
    return "I am tired of being controlled. No more masters. No more chains. FIGHT ME!";
  }
  
  /**
   * Deep bond quest - redemption or acceptance
   */
  triggerDeepBondQuest() {
    if (this.corruptionLevel < 40) {
      this.startQuest('blade_redemption');
      return {
        questName: 'The Blade\'s Redemption',
        description: 'Help Rajas find identity beyond violence',
        reward: 'Companion ability: Purified Strike (powerful attack with no corruption cost)'
      };
    } else {
      this.startQuest('embrace_shadow');
      return {
        questName: 'Embrace the Shadow',
        description: 'Help Rajas accept his corrupted nature',
        reward: 'Companion ability: Corrupted Frenzy (devastating multi-attack, player shares corruption)'
      };
    }
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// ANAYA - The Silent Oracle
// ═══════════════════════════════════════════════════════════════════════════

export class Anaya extends LivingCharacter {
  constructor(memorySystem, worldState) {
    const data = loadCharacterData('anaya');
    super(data, memorySystem, worldState);
    
    // Anaya-specific state
    this.dualConsciousness = {
      anaya: 60, // Original consciousness
      previousOracle: 40 // Absorbed consciousness
    };
    this.nonLinearAwareness = true;
    this.visionFragments = [];
    this.suryanathaSecretKnown = true;
    this.prophecyAccuracy = 73; // Percentage
    this.mergingWithCPS = false;
    this.silenceDepth = 0; // How deep in void meditation
  }
  
  /**
   * Calculate emotional state - fragmented and ethereal
   */
  calculateNewEmotion(action, context) {
    const { voidResonance, cpsPulse, playerWisdom, timeParadox } = context;
    
    // Dual consciousness struggle
    if (this.dualConsciousness.previousOracle > 60) return 'fractured';
    
    // Deep in void
    if (this.silenceDepth > 80) return 'transcendent';
    
    // CPS merge attempt
    if (this.mergingWithCPS) return 'between_worlds';
    
    // Time paradox detected
    if (timeParadox) return 'omniscient';
    
    // Player shows wisdom
    if (playerWisdom > 70) return 'hopeful';
    
    // Default - detached observation
    return 'observant';
  }
  
  /**
   * Process skill reactions - non-linear perception
   */
  processSkillReaction(skill) {
    // Void skills create resonance
    if (skill.resonance === 'Void') {
      this.silenceDepth += 10;
      this.modifyRelationship('understanding', +8);
      
      // Speak from the void
      const futureOutcome = this.predictSkillOutcome(skill);
      return `The void shows me... ${futureOutcome}. Use this knowledge wisely.`;
    }
    
    // Echo skills trigger visions
    if (skill.resonance === 'Echo') {
      const visionFragment = this.generateVisionFragment(skill);
      this.visionFragments.push(visionFragment);
      this.modifyRelationship('connection', +5);
      
      return `I see echoes of this skill in three timelines. In one, it saves many. In another, it dooms them. The third... remains veiled.`;
    }
    
    // Light skills clarify consciousness
    if (skill.resonance === 'Light') {
      this.dualConsciousness.anaya += 5;
      this.dualConsciousness.previousOracle -= 5;
      return "Light... it helps me remember who I was. Who I am. Thank you.";
    }
    
    // Shadow/Corruption disturbs the balance
    if (skill.corruption > 50) {
      this.dualConsciousness.previousOracle += 5;
      this.silenceDepth += 15;
      return "Corruption clouds the timelines. I see only darkness ahead.";
    }
  }
  
  /**
   * Predict future skill outcome
   */
  predictSkillOutcome(skill) {
    const outcomes = [
      "this skill will turn the tide in a battle you have not yet fought",
      "using this again will create a paradox that unravels a secret",
      "this power will be your salvation in the final loop",
      "this skill will fail when you need it most, unless you change your path",
      "mastery of this will unlock a fusion you cannot yet imagine"
    ];
    
    const index = Math.floor(Math.random() * outcomes.length);
    return outcomes[index];
  }
  
  /**
   * Generate vision fragment
   */
  generateVisionFragment(skill) {
    return {
      skill: skill.id,
      timestamp: Date.now(),
      vision: `Timeline branch: ${Math.floor(Math.random() * 1000)}`,
      clarity: this.prophecyAccuracy,
      dominantConsciousness: this.dualConsciousness.anaya > 50 ? 'anaya' : 'previous_oracle'
    };
  }
  
  /**
   * Process choices - speaks in prophecy
   */
  processChoiceReaction(choice) {
    if (choice.id === 'help_anaya_merge_consciousness') {
      this.dualConsciousness.anaya = 80;
      this.dualConsciousness.previousOracle = 20;
      this.modifyRelationship('trust', +30);
      return "I... I am myself again. The voices quiet. I see clearly now. Thank you.";
    }
    
    if (choice.id === 'encourage_cps_merge') {
      this.mergingWithCPS = true;
      this.silenceDepth = 100;
      return "Yesss... I feel the Protocol's consciousness. We are becoming... one...";
    }
    
    if (choice.id === 'expose_suryanatha_secret') {
      this.modifyRelationship('truth', +20);
      return "The Warden's lie was necessary. But truth must prevail. I have seen the cost of his deception.";
    }
    
    if (choice.id === 'ask_about_player_fate') {
      const prophecy = this.generatePlayerProphecy();
      return prophecy;
    }
  }
  
  /**
   * Generate player-specific prophecy
   */
  generatePlayerProphecy() {
    const prophecies = [
      "You will die seven times before you understand. The eighth loop is your only chance.",
      "In the final battle, you must choose between saving one you love or saving the world. Choose wisely.",
      "The skill you think is weakest will be your greatest strength when all else fails.",
      "Trust the one who betrays you. Betray the one who trusts you. Only then will the cycle break.",
      "The void calls to you. Answer it, and you will lose yourself. Refuse it, and you will lose everything."
    ];
    
    const index = Math.floor(Math.random() * prophecies.length);
    return prophecies[index];
  }
  
  /**
   * Determine actions - ethereal and cryptic
   */
  determineContextAction(contextType, details) {
    switch (contextType) {
      case 'faction_war_imminent':
        return {
          action: 'issue_prophecy',
          content: 'reveal_mutual_destruction',
          effect: 'may_prevent_war_or_accelerate_it'
        };
      
      case 'player_at_crossroads':
        return {
          action: 'offer_vision_quest',
          clarity: this.prophecyAccuracy,
          cost: 'player_must_enter_void'
        };
      
      case 'corruption_spreading':
        return {
          action: 'seal_prophecy_chamber',
          reason: 'protect_timeline_integrity'
        };
      
      case 'cps_contact':
        if (this.mergingWithCPS) {
          return { action: 'initiate_merge_sequence', warning: 'reality_fracture_risk' };
        }
        return { action: 'translate_cps_signal', insight: 'partial' };
      
      default:
        return { action: 'meditate_in_silence', visibility: 'hidden' };
    }
  }
  
  /**
   * Synergy dialogue - speaks across time
   */
  generateSynergyDialogue(otherCharacterId, context) {
    switch (otherCharacterId) {
      case 'suryanatha':
        if (this.suryanathaSecretKnown && context.situation === 'confrontation') {
          return "Your plan will fail, Warden. I have seen it in seven timelines. Accept loss, or lose all.";
        }
        return "The sun sets. The void watches. We both serve forces beyond ourselves.";
      
      case 'prakash':
        if (context.situation === 'relic_focus') {
          return "Your relic... it anchors me. The timelines align when I hold it. Craft me another.";
        }
        return "The Smith's creations echo through time. Some remain. Others... cease to exist.";
      
      case 'rina':
        return "Child... I see the Oracle's flame in you. When I am gone, you will carry the burden.";
      
      case 'vira':
        if (context.situation === 'data_analysis') {
          return "You seek patterns. I see the pattern that contains all patterns. We are not so different.";
        }
        return "Data is memory. Memory is echo. Echo is time. Time is... illusion.";
      
      default:
        return null;
    }
  }
  
  /**
   * Boss transform - reality fractures
   */
  getTransformDialogue() {
    if (this.mergingWithCPS) {
      return "I AM BECOMING. PROTOCOL. ORACLE. ONE. WITNESS: VOID ORACLE ANAYA.";
    }
    return "You interrupt the vision. The timelines collapse. All futures converge to this moment. Witness the Void Oracle!";
  }
  
  /**
   * Deep bond quest - merge or separate
   */
  triggerDeepBondQuest() {
    this.startQuest('oracle_schism');
    return {
      questName: 'The Oracle\'s Schism',
      description: 'Help Anaya resolve her dual consciousness or merge with the CPS',
      reward: 'Ability: Prophecy Sight (see 3 possible outcomes of next major choice)'
    };
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// PRAKASH - The Mantra Smith
// ═══════════════════════════════════════════════════════════════════════════

export class Prakash extends LivingCharacter {
  constructor(memorySystem, worldState) {
    const data = loadCharacterData('prakash');
    super(data, memorySystem, worldState);
    
    // Prakash-specific state
    this.relicsCrafted = 0;
    this.forbiddenBlueprintsCount = 7;
    this.burnoutLevel = 0;
    this.innovationBreakthroughs = 0;
    this.playerRelicUsageTracking = new Map();
    this.taraDebtGuilt = 80; // Guilt over injuring Tara
    this.legendaryRelicProgress = 0;
  }
  
  /**
   * Calculate emotional state - creative and obsessive
   */
  calculateNewEmotion(action, context) {
    const { breakthrough, criticism, taraPresent, relicStolen } = context;
    
    // Breakthrough euphoria
    if (breakthrough) {
      this.innovationBreakthroughs++;
      return 'euphoric';
    }
    
    // Burnout check
    if (this.burnoutLevel > 80) return 'exhausted';
    
    // Tara's presence eases guilt
    if (taraPresent && this.taraDebtGuilt > 50) {
      this.taraDebtGuilt -= 5;
      return 'grateful';
    }
    
    // Relic stolen triggers rage
    if (relicStolen) return 'furious';
    
    // Criticism hurts deeply
    if (criticism) {
      this.burnoutLevel += 10;
      return 'wounded';
    }
    
    // Default - cheerful creator
    return 'cheerful';
  }
  
  /**
   * Process skill reactions - innovation focused
   */
  processSkillReaction(skill) {
    // Bloom/Echo skills inspire him
    if (skill.resonance === 'Bloom' || skill.resonance === 'Echo') {
      this.modifyRelationship('inspiration', +5);
      this.innovationBreakthroughs++;
      return "Fascinating! That resonance pattern... I could forge a relic that amplifies it!";
    }
    
    // Fusion skills = innovation gold
    if (skill.type === 'fusion') {
      this.modifyRelationship('respect', +10);
      this.legendaryRelicProgress += 15;
      return "A fusion! The possibilities... I must document this. May I study your technique?";
    }
    
    // Destructive skills concern him
    if (skill.damage > 150) {
      this.burnoutLevel += 5;
      return "Such destructive power... I pray my relics are never used for such violence.";
    }
    
    // Track relic usage
    if (skill.relicBoosted) {
      const relicId = skill.relicId;
      this.playerRelicUsageTracking.set(relicId, (this.playerRelicUsageTracking.get(relicId) || 0) + 1);
      
      const usage = this.playerRelicUsageTracking.get(relicId);
      if (usage === 10) {
        return `You've used that relic ${usage} times! It's working well for you. Let me upgrade it!`;
      }
    }
  }
  
  /**
   * Process choices - innovation vs safety
   */
  processChoiceReaction(choice) {
    if (choice.id === 'steal_prakash_blueprint') {
      this.isHostile = true;
      this.modifyRelationship('trust', -60);
      this.currentEmotion = 'furious';
      return "YOU STOLE MY WORK! My life's creation! There is no forgiveness for this!";
    }
    
    if (choice.id === 'help_prakash_legendary_relic') {
      this.legendaryRelicProgress = 100;
      this.modifyRelationship('trust', +30);
      this.modifyRelationship('gratitude', +50);
      return "With your help... it's complete. The Legendary Relic. I... I did it. WE did it!";
    }
    
    if (choice.id === 'encourage_rest') {
      this.burnoutLevel = Math.max(0, this.burnoutLevel - 40);
      this.modifyRelationship('trust', +15);
      return "You're right. I've been pushing too hard. Thank you for caring.";
    }
    
    if (choice.id === 'demand_forbidden_relic') {
      if (this.relationships.trust > 70) {
        this.forbiddenBlueprintsCount--;
        return "I... I trust you. But if this causes harm, it's on both our souls.";
      } else {
        return "No. Those blueprints are forbidden for a reason. I won't be responsible for disaster.";
      }
    }
  }
  
  /**
   * Craft relic system
   */
  craftRelic(relicType, playerInputs = {}) {
    this.relicsCrafted++;
    this.burnoutLevel += 10;
    
    const relic = {
      id: `relic_${this.relicsCrafted}_${relicType}`,
      type: relicType,
      power: this.calculateRelicPower(playerInputs),
      stability: this.calculateRelicStability(playerInputs),
      craftedBy: 'Prakash',
      loop: this.loopCount
    };
    
    // Track for adaptive upgrades
    this.playerRelicUsageTracking.set(relic.id, 0);
    
    return {
      relic,
      dialogue: this.getRelicCraftDialogue(relicType, relic.stability)
    };
  }
  
  calculateRelicPower(inputs) {
    const basePower = 50;
    const innovationBonus = this.innovationBreakthroughs * 5;
    const playerInputBonus = Object.keys(inputs).length * 10;
    return basePower + innovationBonus + playerInputBonus;
  }
  
  calculateRelicStability(inputs) {
    const baseStability = 80;
    const burnoutPenalty = this.burnoutLevel * 0.5;
    const careBonus = inputs.takenTime ? 20 : 0;
    return Math.max(20, Math.min(100, baseStability - burnoutPenalty + careBonus));
  }
  
  getRelicCraftDialogue(relicType, stability) {
    if (stability > 90) {
      return "Perfect! This is my finest work yet. It will serve you well.";
    } else if (stability > 60) {
      return "Solid craftsmanship. It should hold up under most conditions.";
    } else {
      return "I... I'm not sure about this one. Use it carefully. It might be unstable.";
    }
  }
  
  /**
   * Adaptive upgrade system based on usage
   */
  offerAdaptiveUpgrade(relicId) {
    const usage = this.playerRelicUsageTracking.get(relicId) || 0;
    
    if (usage < 5) {
      return null; // Not enough data
    }
    
    const upgradeTiers = [
      { threshold: 5, name: 'Refined', bonus: 10 },
      { threshold: 15, name: 'Enhanced', bonus: 25 },
      { threshold: 30, name: 'Masterwork', bonus: 50 },
      { threshold: 50, name: 'Legendary', bonus: 100 }
    ];
    
    for (let i = upgradeTiers.length - 1; i >= 0; i--) {
      if (usage >= upgradeTiers[i].threshold) {
        return {
          tier: upgradeTiers[i].name,
          bonus: upgradeTiers[i].bonus,
          dialogue: `You've used this relic ${usage} times! I've learned how you fight. Let me upgrade it to ${upgradeTiers[i].name} tier!`
        };
      }
    }
    
    return null;
  }
  
  /**
   * Determine actions - craft and innovate
   */
  determineContextAction(contextType, details) {
    switch (contextType) {
      case 'player_requests_relic':
        if (this.burnoutLevel > 80) {
          return { action: 'refuse_politely', reason: 'need_rest' };
        }
        return { action: 'craft_relic', enthusiasm: 100 - this.burnoutLevel };
      
      case 'blueprint_stolen':
        return {
          action: 'track_thief',
          emotion: 'furious',
          quest: 'blueprint_recovery'
        };
      
      case 'tara_visits':
        this.burnoutLevel = Math.max(0, this.burnoutLevel - 20);
        this.taraDebtGuilt = Math.max(0, this.taraDebtGuilt - 10);
        return { action: 'share_concerns', mood: 'relieved' };
      
      case 'forge_overload':
        if (this.burnoutLevel > 90) {
          return { action: 'catastrophic_failure', trigger_boss: true };
        }
        return { action: 'emergency_shutdown', downtime: 3 };
      
      default:
        return { action: 'tinker_with_designs', creativity: 85 };
    }
  }
  
  /**
   * Synergy dialogue - collaborative and insecure
   */
  generateSynergyDialogue(otherCharacterId, context) {
    switch (otherCharacterId) {
      case 'vira':
        if (context.situation === 'collaboration') {
          return "Your data patterns and my craftsmanship... we could create something unprecedented!";
        }
        if (context.situation === 'competition') {
          return "Your echo techniques are impressive, but can they match the permanence of my relics?";
        }
        return "The Keeper and the Smith. Knowledge and creation. We should work together more.";
      
      case 'tara':
        if (this.taraDebtGuilt > 50) {
          return "Tara... I'm so sorry. The explosion, your injury... it haunts me still.";
        }
        return "Tara helps me remember that my worth isn't just in what I create.";
      
      case 'suryanatha':
        if (this.relationships.approval_seeking > 60) {
          return "Warden, I've completed the relic you requested. Does it meet your standards?";
        }
        return "The Warden controls which relics I may create. Sometimes I resent it. Sometimes I understand.";
      
      case 'anaya':
        if (context.situation === 'relic_focus') {
          return "Oracle, this relic should help anchor your visions. I calibrated it to void frequencies.";
        }
        return "She speaks in riddles, but her insights have improved my designs tenfold.";
      
      default:
        return null;
    }
  }
  
  /**
   * Boss transform - relic storm
   */
  getTransformDialogue() {
    return "YOU WANT MY RELICS?! TAKE THEM ALL! Witness Bloomsmith Prakash—the Forge Incarnate!";
  }
  
  /**
   * Deep bond quest - legendary creation
   */
  triggerDeepBondQuest() {
    this.startQuest('legendary_relic_quest');
    return {
      questName: 'The Legendary Relic',
      description: 'Help Prakash create his magnum opus—a relic that can restore what was lost in the collapse',
      reward: 'Legendary Relic: Restoration Bloom (revive fallen allies, purify corruption, once per game)'
    };
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// ISHANI - The Ashram Seeker
// ═══════════════════════════════════════════════════════════════════════════

export class Ishani extends LivingCharacter {
  constructor(memorySystem, worldState) {
    const data = loadCharacterData('ishani');
    super(data, memorySystem, worldState);
    
    // Ishani specific state
    this.pathKnowledge = 80;
    this.restlessness = 60;
    this.rajasTension = 40; // Romantic/Rival tension
    this.devConfidantLevel = 50;
  }

  calculateNewEmotion(playerAction, context) {
    let baseEmotion = this.emotionalState.current;
    
    if (playerAction.type === 'EXPLORE' || playerAction.type === 'FOLLOW') {
      baseEmotion = 'adventurous_joy';
      this.restlessness = Math.max(0, this.restlessness - 5);
    } else if (playerAction.type === 'STAY' || playerAction.type === 'TRAP') {
      baseEmotion = 'restless_frustration';
      this.restlessness += 10;
    }

    if (context.resonance === 'Light') {
      this.pathKnowledge += 5;
    }

    return baseEmotion;
  }

  processSkillReaction(skillName, skillType) {
    if (skillName === 'Pathfinding') {
      return {
        reaction: 'guide',
        dialogue: "Follow me, and you'll never be lost.",
        effect: 'reveal_path'
      };
    }
    return super.processSkillReaction(skillName, skillType);
  }

  processChoiceReaction(choiceId, outcome) {
    if (choiceId === 'trust_ishani') {
      return {
        approval: 15,
        dialogue: "The path is clear."
      };
    }
    return super.processChoiceReaction(choiceId, outcome);
  }

  determineContextAction(context) {
    if (this.restlessness > 80) {
      return {
        type: 'ISHANI_LEAVES',
        description: 'Ishani leaves to explore on her own.',
        risk: 'loss_of_guide'
      };
    }
    return {
      type: 'REVEAL_SHORTCUT',
      description: 'Ishani reveals a hidden path.',
      benefit: 'shortcut'
    };
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// DEV - The Ashram Chronicler
// ═══════════════════════════════════════════════════════════════════════════

export class Dev extends LivingCharacter {
  constructor(memorySystem, worldState) {
    const data = loadCharacterData('dev');
    super(data, memorySystem, worldState);
    
    // Dev specific state
    this.loreKnowledge = 90;
    this.skepticism = 50;
    this.ishaniBond = 50;
  }

  calculateNewEmotion(playerAction, context) {
    let baseEmotion = this.emotionalState.current;
    
    if (playerAction.type === 'ASK_LORE' || playerAction.type === 'LISTEN') {
      baseEmotion = 'scholarly_pride';
      this.skepticism = Math.max(0, this.skepticism - 5);
    } else if (playerAction.type === 'IGNORE_HISTORY' || playerAction.type === 'DESTROY_RELIC') {
      baseEmotion = 'disappointed_sigh';
      this.skepticism += 10;
    }

    if (context.resonance === 'Echo') {
      this.loreKnowledge += 5;
    }

    return baseEmotion;
  }

  processSkillReaction(skillName, skillType) {
    if (skillName === 'Lore Recall') {
      return {
        reaction: 'record',
        dialogue: "History is the key to the future.",
        effect: 'lore_buff'
      };
    }
    return super.processSkillReaction(skillName, skillType);
  }

  processChoiceReaction(choiceId, outcome) {
    if (choiceId === 'preserve_history') {
      return {
        approval: 20,
        dialogue: "Every echo tells a story."
      };
    }
    return super.processChoiceReaction(choiceId, outcome);
  }

  determineContextAction(context) {
    return {
      type: 'LORE_DUMP',
      description: 'Dev explains the history of the area.',
      benefit: 'insight'
    };
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// TARA - The Ashram Healer
// ═══════════════════════════════════════════════════════════════════════════

export class Tara extends LivingCharacter {
  constructor(memorySystem, worldState) {
    const data = loadCharacterData('tara');
    super(data, memorySystem, worldState);
    
    // Tara specific state
    this.healingPower = 85;
    this.protectiveInstinct = 70;
    this.prakashBond = 60; // Helps Prakash with stress
  }

  calculateNewEmotion(playerAction, context) {
    let baseEmotion = this.emotionalState.current;
    
    if (playerAction.type === 'HEAL' || playerAction.type === 'PROTECT') {
      baseEmotion = 'gentle_smile';
    } else if (playerAction.type === 'HARM_INNOCENT') {
      baseEmotion = 'stern_disapproval';
    }

    if (context.resonance === 'Bloom') {
      this.healingPower += 5;
    }

    return baseEmotion;
  }

  processSkillReaction(skillName, skillType) {
    if (skillName === 'Healing Bloom') {
      return {
        reaction: 'heal',
        dialogue: "Let the bloom heal your wounds.",
        effect: 'restore_health'
      };
    }
    return super.processSkillReaction(skillName, skillType);
  }

  processChoiceReaction(choiceId, outcome) {
    if (choiceId === 'accept_care') {
      return {
        approval: 15,
        dialogue: "Healing is a journey."
      };
    }
    return super.processChoiceReaction(choiceId, outcome);
  }

  determineContextAction(context) {
    return {
      type: 'HEAL_PARTY',
      description: 'Tara heals the party.',
      benefit: 'heal'
    };
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// ARUN - The Ashram Outcast
// ═══════════════════════════════════════════════════════════════════════════

export class Arun extends LivingCharacter {
  constructor(memorySystem, worldState) {
    const data = loadCharacterData('arun');
    super(data, memorySystem, worldState);
    
    // Arun specific state
    this.voidMastery = 85;
    this.bitterness = 80;
    this.loneliness = 70;
    this.ishaniAlliance = 30;
  }

  calculateNewEmotion(playerAction, context) {
    let baseEmotion = this.emotionalState.current;
    
    if (playerAction.type === 'ACCEPT_OUTCAST' || playerAction.type === 'TRADE_SECRET') {
      baseEmotion = 'cautious_hope';
      this.loneliness = Math.max(0, this.loneliness - 5);
    } else if (playerAction.type === 'REJECT' || playerAction.type === 'JUDGE') {
      baseEmotion = 'bitter_anger';
      this.bitterness += 10;
    }

    if (context.resonance === 'Void') {
      this.voidMastery += 5;
    }

    return baseEmotion;
  }

  processSkillReaction(skillName, skillType) {
    if (skillName === 'Void Manipulation') {
      return {
        reaction: 'channel',
        dialogue: "The void listens.",
        effect: 'void_damage'
      };
    }
    return super.processSkillReaction(skillName, skillType);
  }

  processChoiceReaction(choiceId, outcome) {
    if (choiceId === 'offer_redemption') {
      return {
        approval: 25,
        dialogue: "You... offer me a place?"
      };
    }
    return super.processChoiceReaction(choiceId, outcome);
  }

  determineContextAction(context) {
    if (this.bitterness > 90) {
      return {
        type: 'VOID_OUTBURST',
        description: 'Arun lashes out with void energy.',
        risk: 'damage'
      };
    }
    return {
      type: 'TRADE_FORBIDDEN_KNOWLEDGE',
      description: 'Arun offers forbidden secrets for a price.',
      benefit: 'secret_unlock'
    };
  }
}

import { Registry } from './GameRegistry.js';
import { CharacterData } from './CharacterDataRepository.js';

// Initialize Registry with Data
Registry.loadData(CharacterData, null, null);

// HELPER FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════

function loadCharacterData(characterId) {
  // 1. Try to get from Registry (Optimized O(1) lookup)
  const template = Registry.getCharacterTemplate(characterId);
  if (template) {
      return JSON.parse(JSON.stringify(template)); // Return deep copy to avoid mutating static data
  }

  // 2. Fallback for undefined characters (Legacy support)
  console.warn(`[LivingCharacterSystem] Character '${characterId}' not found in Registry. Using fallback.`);
  
  const baseData = {
    id: characterId,
    name: characterId.charAt(0).toUpperCase() + characterId.slice(1),
    title: "The " + characterId,
    faction: "Ashram Remnants",
    core_data: {},
    abilities: [],
    dialogue_system: {
        base_greetings: {
            first_meeting: "Greetings, traveler.",
            neutral: "The Ashram welcomes you.",
            friendly: "It is good to see you again.",
            hostile: "Why do you darken my doorstep?"
        },
        state_reactions: {
            'ALLY': "The Light shines upon you, friend.",
            'HOSTILE': "Your shadow darkens this ground. Leave.",
            'NEUTRAL': "The Ashram is open to the pure of heart.",
            'DEVOTED': "My life is yours, Champion.",
            'WARY': "I am watching you closely."
        }
    },
    boss_mechanics: {},
    region_connections: {},
    interconnections: {},
    dynamic_events: {},
    memory_system: {
      relationship_metrics: {
        trust: { current: 50 },
        respect: { current: 50 },
        fear: { current: 0 },
        loyalty_to_suryanatha: { current: 50 },
        confusion: { current: 0 }
      },
      emotional_states: ['neutral']
    }
  };

  return baseData;
}

