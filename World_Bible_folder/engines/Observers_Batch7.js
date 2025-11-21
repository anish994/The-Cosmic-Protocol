// ═══════════════════════════════════════════════════════════════════════════
// NEUTRAL ENTITY OBSERVERS - BATCH 7
// Completing the Neutral Entity Observers Faction
// ═══════════════════════════════════════════════════════════════════════════

import { LivingCharacter } from './LivingCharacterSystem.js';

// ═══════════════════════════════════════════════════════════════════════════
// THE NULL WITNESS - The Silent Observer
// ═══════════════════════════════════════════════════════════════════════════
export class NullWitness extends LivingCharacter {
  constructor(memorySystem, worldState) {
    const data = {
      id: 'null_witness',
      name: 'The Null Witness',
      title: 'Silent Observer',
      faction: 'Neutral Entity Observers',
      resonanceAlignment: 'Void / Neutral',
      stats: {
        observation: 95,
        stealth: 90,
        presence: 10, // Intentionally low, "never noticed"
        willpower: 85
      },
      memory_system: {
        relationship_metrics: {
          trust: { current: 50 },
          respect: { current: 50 },
          fear: { current: 0 }
        },
        emotional_states: ['neutral']
      }
    };
    super(data, memorySystem, worldState);
    
    // Null Witness specific state
    this.observationRadius = 100;
    this.silenceDepth = 80;
    this.realityShear = 0;
    this.witnessedEvents = [];
  }

  calculateNewEmotion(playerAction, context) {
    let baseEmotion = this.emotionalState.current;
    
    // Null Witness reacts to visibility and balance disturbance
    if (playerAction.type === 'OBSERVE' || playerAction.type === 'WAIT') {
      baseEmotion = 'stoic_approval'; // Approves of passive observation
      this.silenceDepth += 5;
    } else if (playerAction.type === 'DISRUPT' || playerAction.type === 'ATTACK') {
      baseEmotion = 'silent_disapproval';
      this.realityShear += 10;
    } else if (playerAction.type === 'REVEAL_SECRET') {
      baseEmotion = 'intrigued_silence';
      this.observationRadius += 5;
    }

    // Resonance effects
    if (context.resonance === 'Void') {
      this.observationRadius += 10; // Void widens observation
    } else if (context.resonance === 'Dissonance') {
      this.realityShear += 5; // Dissonance causes shear
    }

    return baseEmotion;
  }

  processSkillReaction(skillName, skillType) {
    if (skillName === 'Phase Out') {
      return {
        reaction: 'fade',
        dialogue: "...", // Silent
        effect: 'observation_boost'
      };
    }
    if (skillName === 'Reality Veil') {
      return {
        reaction: 'obscure',
        dialogue: "...",
        effect: 'stealth_aura'
      };
    }
    return super.processSkillReaction(skillName, skillType);
  }

  processChoiceReaction(choiceId, outcome) {
    if (choiceId === 'witness_event') {
      this.witnessedEvents.push(outcome);
      return {
        approval: 10,
        dialogue: "You see what others cannot."
      };
    }
    if (choiceId === 'break_silence') {
      this.silenceDepth -= 20;
      return {
        approval: -15,
        dialogue: "Your presence disturbs the balance."
      };
    }
    return super.processChoiceReaction(choiceId, outcome);
  }

  determineContextAction(context) {
    if (this.realityShear > 80) {
      return {
        type: 'VOID_PHANTOM_MANIFEST',
        description: 'The Null Witness manifests as a Void Phantom to restore observation sanctity.',
        risk: 'high'
      };
    }
    
    if (context.resonance === 'Void' && this.silenceDepth > 50) {
      return {
        type: 'SILENT_SCENE_REPLAY',
        description: 'The Null Witness replays a silent scene from the past.',
        benefit: 'lore_insight'
      };
    }

    return {
      type: 'PASSIVE_OBSERVATION',
      description: 'The Null Witness watches from the shadows.',
      benefit: 'map_reveal'
    };
  }

  generateSynergyDialogue(otherCharacter) {
    if (otherCharacter.id === 'archivist_veyra') {
      return "... (Nods towards the archives)";
    }
    if (otherCharacter.id === 'scribe_of_parity') {
      return "... (Watches the scales intently)";
    }
    return "...";
  }

  triggerDeepBondQuest() {
    if (this.relationshipDepth >= 90) {
      return {
        questId: 'null_presence_node',
        title: 'The Hidden Crossroads',
        description: 'The Null Witness reveals the true nature of cosmic silence.',
        reward: 'Card: Null Presence'
      };
    }
    return null;
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// SCRIBE OF PARITY - The Balancer of Records
// ═══════════════════════════════════════════════════════════════════════════
export class ScribeOfParity extends LivingCharacter {
  constructor(memorySystem, worldState) {
    const data = {
      id: 'scribe_of_parity',
      name: 'Scribe of Parity',
      title: 'Balancer of Records',
      faction: 'Neutral Entity Observers',
      resonanceAlignment: 'Light / Shadow',
      stats: {
        logic: 92,
        fairness: 95,
        equilibrium: 88,
        judgment: 90
      },
      memory_system: {
        relationship_metrics: {
          trust: { current: 50 },
          respect: { current: 50 },
          fear: { current: 0 }
        },
        emotional_states: ['neutral']
      }
    };
    super(data, memorySystem, worldState);
    
    // Scribe specific state
    this.currentBalance = 50; // 0 = Chaos, 100 = Order, 50 = Perfect Balance
    this.correctionEnergy = 100;
    this.driftArtifacts = 0;
  }

  calculateNewEmotion(playerAction, context) {
    let baseEmotion = this.emotionalState.current;
    
    // Scribe reacts to balance and fairness
    if (playerAction.type === 'BALANCE' || playerAction.type === 'MEDIATE') {
      baseEmotion = 'satisfied_equilibrium';
      this.adjustBalance(0); // Move towards 50
    } else if (playerAction.type === 'EXTREME_ACTION' || playerAction.type === 'BIAS') {
      baseEmotion = 'concerned_imbalance';
      this.adjustBalance(playerAction.direction === 'CHAOS' ? -10 : 10);
    }

    // Resonance effects
    if (context.resonance === 'Light') {
      // Light might tip towards Order
      this.adjustBalance(5);
    } else if (context.resonance === 'Shadow') {
      // Shadow might tip towards Chaos
      this.adjustBalance(-5);
    }

    return baseEmotion;
  }

  adjustBalance(amount) {
    if (amount === 0) {
      // Move towards 50
      if (this.currentBalance > 50) this.currentBalance--;
      else if (this.currentBalance < 50) this.currentBalance++;
    } else {
      this.currentBalance += amount;
    }
    // Clamp
    this.currentBalance = Math.max(0, Math.min(100, this.currentBalance));
  }

  processSkillReaction(skillName, skillType) {
    if (skillName === 'Memory Balance') {
      return {
        reaction: 'stabilize',
        dialogue: "Equilibrium is the only truth.",
        effect: 'restore_balance'
      };
    }
    if (skillName === 'Equilibrium Shift') {
      return {
        reaction: 'adjust',
        dialogue: "Balance is never static.",
        effect: 'shift_alignment'
      };
    }
    return super.processSkillReaction(skillName, skillType);
  }

  processChoiceReaction(choiceId, outcome) {
    if (choiceId === 'restore_balance') {
      return {
        approval: 15,
        dialogue: "You have righted the scales."
      };
    }
    if (choiceId === 'tip_scales') {
      this.driftArtifacts++;
      return {
        approval: -10,
        dialogue: "You always tip the scales."
      };
    }
    return super.processChoiceReaction(choiceId, outcome);
  }

  determineContextAction(context) {
    const deviation = Math.abs(this.currentBalance - 50);
    
    if (deviation > 40) {
      return {
        type: 'EQUILIBRIUM_WRAITH_WARNING',
        description: 'The Scribe threatens to reset progress to restore balance.',
        risk: 'critical'
      };
    }
    
    if (context.resonance === 'Light' || context.resonance === 'Shadow') {
      return {
        type: 'PRECISION_CORRECTION',
        description: 'The Scribe offers a window to correct resonance imbalance.',
        benefit: 'stability_buff'
      };
    }

    return {
      type: 'BALANCE_TEST',
      description: 'The Scribe proposes a test of equilibrium.',
      benefit: 'karma_adjustment'
    };
  }

  generateSynergyDialogue(otherCharacter) {
    if (otherCharacter.id === 'observer_prime') {
      return "Even the Prime must answer to the scales.";
    }
    if (otherCharacter.id === 'quantum_auditor') {
      return "Probability is just another variable in the equation of balance.";
    }
    return "All things must be equal.";
  }

  triggerDeepBondQuest() {
    if (this.relationshipDepth >= 85 && Math.abs(this.currentBalance - 50) < 10) {
      return {
        questId: 'parity_ledger_node',
        title: 'The Balance Chamber',
        description: 'The Scribe reveals the Parity Ledger, allowing you to reshape karma.',
        reward: 'Card: Parity Ledger'
      };
    }
    return null;
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// ECHO OF THE UNSEEN - Messenger Between Realms
// ═══════════════════════════════════════════════════════════════════════════
export class EchoOfTheUnseen extends LivingCharacter {
  constructor(memorySystem, worldState) {
    const data = {
      id: 'echo_of_the_unseen',
      name: 'Echo of the Unseen',
      title: 'Messenger Between Realms',
      faction: 'Neutral Entity Observers',
      resonanceAlignment: 'Echo / Void',
      stats: {
        empathy: 88,
        crypticness: 90,
        speed: 85,
        connection: 80
      },
      memory_system: {
        relationship_metrics: {
          trust: { current: 50 },
          respect: { current: 50 },
          fear: { current: 0 }
        },
        emotional_states: ['neutral']
      }
    };
    super(data, memorySystem, worldState);
    
    // Echo specific state
    this.messageFidelity = 70; // Clarity of messages
    this.hiddenPathsKnown = 5;
    this.dimensionalNoise = 10;
  }

  calculateNewEmotion(playerAction, context) {
    let baseEmotion = this.emotionalState.current;
    
    if (playerAction.type === 'LISTEN' || playerAction.type === 'DECIPHER') {
      baseEmotion = 'poetic_connection';
      this.messageFidelity += 5;
    } else if (playerAction.type === 'IGNORE' || playerAction.type === 'RUSH') {
      baseEmotion = 'fading_echo';
      this.dimensionalNoise += 10;
    }

    if (context.resonance === 'Echo') {
      this.messageFidelity += 10;
    } else if (context.resonance === 'Void') {
      this.hiddenPathsKnown++; // Void reveals paths
    }

    return baseEmotion;
  }

  processSkillReaction(skillName, skillType) {
    if (skillName === 'Dimensional Message') {
      return {
        reaction: 'transmit',
        dialogue: "The unseen path is yours to walk.",
        effect: 'reveal_path'
      };
    }
    if (skillName === 'Path Reveal') {
      return {
        reaction: 'guide',
        dialogue: "Echoes are warnings, not answers.",
        effect: 'shortcut_open'
      };
    }
    return super.processSkillReaction(skillName, skillType);
  }

  processChoiceReaction(choiceId, outcome) {
    if (choiceId === 'follow_echo') {
      return {
        approval: 12,
        dialogue: "You hear the whisper between worlds."
      };
    }
    if (choiceId === 'misinterpret_message') {
      this.dimensionalNoise += 15;
      return {
        approval: -8,
        dialogue: "You are lost in the noise."
      };
    }
    return super.processChoiceReaction(choiceId, outcome);
  }

  determineContextAction(context) {
    if (this.dimensionalNoise > 70) {
      return {
        type: 'DIMENSIONAL_WRAITH_RISK',
        description: 'The Echo threatens to collapse the message lattice.',
        risk: 'high'
      };
    }
    
    if (context.resonance === 'Echo' && this.messageFidelity > 60) {
      return {
        type: 'PATH_REVEAL',
        description: 'Echo of the Unseen reveals a hidden shortcut or secret area.',
        benefit: 'traversal_buff'
      };
    }

    return {
      type: 'CRYPTIC_HINT',
      description: 'The Echo offers a poetic hint about the current objective.',
      benefit: 'guidance'
    };
  }

  generateSynergyDialogue(otherCharacter) {
    if (otherCharacter.id === 'observer_prime') {
      return "I carry the Prime's voice to the edges of silence.";
    }
    if (otherCharacter.id === 'parity_scribe') {
      return "Even balance has an echo.";
    }
    return "The message is the medium.";
  }

  triggerDeepBondQuest() {
    if (this.relationshipDepth >= 80) {
      return {
        questId: 'unseen_echo_node',
        title: 'The Hidden Path',
        description: 'Echo of the Unseen opens the way to the Dimensional Message lattice.',
        reward: 'Card: Unseen Echo'
      };
    }
    return null;
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// QUANTUM AUDITOR - Inspector of Possibilities
// ═══════════════════════════════════════════════════════════════════════════
export class QuantumAuditor extends LivingCharacter {
  constructor(memorySystem, worldState) {
    const data = {
      id: 'quantum_auditor',
      name: 'Quantum Auditor',
      title: 'Inspector of Possibilities',
      faction: 'Neutral Entity Observers',
      resonanceAlignment: 'Echo / Bloom',
      stats: {
        precision: 95,
        patience: 40, // Slightly impatient
        calculation: 98,
        impartiality: 85
      },
      memory_system: {
        relationship_metrics: {
          trust: { current: 50 },
          respect: { current: 50 },
          fear: { current: 0 }
        },
        emotional_states: ['neutral']
      }
    };
    super(data, memorySystem, worldState);
    
    // Auditor specific state
    this.auditTokens = 3;
    this.entropyLevel = 10;
    this.probabilityField = 'Stable'; // Stable, Chaotic, Collapsing
  }

  calculateNewEmotion(playerAction, context) {
    let baseEmotion = this.emotionalState.current;
    
    if (playerAction.type === 'CALCULATE' || playerAction.type === 'PLAN') {
      baseEmotion = 'precise_approval';
      this.entropyLevel = Math.max(0, this.entropyLevel - 5);
    } else if (playerAction.type === 'GAMBLE' || playerAction.type === 'RANDOM') {
      baseEmotion = 'impatient_curiosity';
      this.entropyLevel += 10;
      this.probabilityField = 'Chaotic';
    }

    if (context.resonance === 'Bloom') {
      this.auditTokens++; // Bloom enhances possibilities
    } else if (context.resonance === 'Dissonance') {
      this.entropyLevel += 15;
    }

    return baseEmotion;
  }

  processSkillReaction(skillName, skillType) {
    if (skillName === 'Probability Collapse') {
      return {
        reaction: 'audit',
        dialogue: "Chance favors the prepared.",
        effect: 'force_outcome'
      };
    }
    if (skillName === 'Quantum Audit') {
      return {
        reaction: 'inspect',
        dialogue: "Probability is the only certainty.",
        effect: 'reveal_odds'
      };
    }
    return super.processSkillReaction(skillName, skillType);
  }

  processChoiceReaction(choiceId, outcome) {
    if (choiceId === 'pass_audit') {
      return {
        approval: 15,
        dialogue: "Your calculations are correct."
      };
    }
    if (choiceId === 'fail_audit') {
      this.entropyLevel += 20;
      return {
        approval: -10,
        dialogue: "Your odds are unfavorable."
      };
    }
    return super.processChoiceReaction(choiceId, outcome);
  }

  determineContextAction(context) {
    if (this.entropyLevel > 80) {
      return {
        type: 'PROBABILITY_WRAITH_SPAWN',
        description: 'The Auditor manifests as a Probability Wraith due to high entropy.',
        risk: 'critical'
      };
    }
    
    if (context.resonance === 'Echo' || context.resonance === 'Bloom') {
      return {
        type: 'PROBABILITY_OVERLAY',
        description: 'The Auditor provides a predictive overlay for upcoming events.',
        benefit: 'foresight'
      };
    }

    return {
      type: 'AUDIT_CHALLENGE',
      description: 'The Auditor challenges the player to a probability mini-game.',
      benefit: 'audit_tokens'
    };
  }

  generateSynergyDialogue(otherCharacter) {
    if (otherCharacter.id === 'parallax_envoy') {
      return "Diplomacy is just probability management.";
    }
    if (otherCharacter.id === 'scribe_of_parity') {
      return "Balance is a statistical inevitability.";
    }
    return "The odds are always shifting.";
  }

  triggerDeepBondQuest() {
    if (this.relationshipDepth >= 85 && this.auditTokens >= 5) {
      return {
        questId: 'quantum_audit_node',
        title: 'The Probability Chamber',
        description: 'The Auditor invites you to the Probability Chamber to master chance.',
        reward: 'Card: Quantum Audit'
      };
    }
    return null;
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// PARALLAX ENVOY - Interfaction Liaison
// ═══════════════════════════════════════════════════════════════════════════
export class ParallaxEnvoy extends LivingCharacter {
  constructor(memorySystem, worldState) {
    const data = {
      id: 'parallax_envoy',
      name: 'Parallax Envoy',
      title: 'Interfaction Liaison',
      faction: 'Neutral Entity Observers',
      resonanceAlignment: 'Neutral / Echo',
      stats: {
        diplomacy: 96,
        adaptability: 92,
        persuasion: 88,
        empathy: 85
      },
      memory_system: {
        relationship_metrics: {
          trust: { current: 50 },
          respect: { current: 50 },
          fear: { current: 0 }
        },
        emotional_states: ['neutral']
      }
    };
    super(data, memorySystem, worldState);
    
    // Envoy specific state
    this.activeTreaties = [];
    this.trustCoefficient = 50;
    this.negotiationState = 'Open'; // Open, Strained, Deadlocked
  }

  calculateNewEmotion(playerAction, context) {
    let baseEmotion = this.emotionalState.current;
    
    if (playerAction.type === 'NEGOTIATE' || playerAction.type === 'ALLY') {
      baseEmotion = 'diplomatic_warmth';
      this.trustCoefficient += 5;
    } else if (playerAction.type === 'BETRAY' || playerAction.type === 'AGGRESS') {
      baseEmotion = 'cold_reservation';
      this.trustCoefficient -= 15;
      this.negotiationState = 'Strained';
    }

    if (context.resonance === 'Neutral') {
      this.trustCoefficient += 2; // Neutrality fosters trust
    } else if (context.resonance === 'Dissonance') {
      this.negotiationState = 'Deadlocked'; // Chaos breaks diplomacy
    }

    return baseEmotion;
  }

  processSkillReaction(skillName, skillType) {
    if (skillName === 'Faction Mediation') {
      return {
        reaction: 'mediate',
        dialogue: "Every voice deserves to be heard.",
        effect: 'improve_relations'
      };
    }
    if (skillName === 'Parallax Accord') {
      return {
        reaction: 'sign',
        dialogue: "Diplomacy is a dance.",
        effect: 'alliance_buff'
      };
    }
    return super.processSkillReaction(skillName, skillType);
  }

  processChoiceReaction(choiceId, outcome) {
    if (choiceId === 'broker_peace') {
      this.activeTreaties.push(outcome.treatyId);
      return {
        approval: 20,
        dialogue: "A wise accord."
      };
    }
    if (choiceId === 'reject_talks') {
      return {
        approval: -10,
        dialogue: "You are not welcome at this table."
      };
    }
    return super.processChoiceReaction(choiceId, outcome);
  }

  determineContextAction(context) {
    if (this.trustCoefficient < 20) {
      return {
        type: 'ACCORD_WRAITH_THREAT',
        description: 'The Envoy threatens to sever all alliances.',
        risk: 'high'
      };
    }
    
    if (context.resonance === 'Neutral' || context.resonance === 'Echo') {
      return {
        type: 'CROSS_FACTION_ALLIANCE',
        description: 'The Envoy offers to broker a powerful cross-faction alliance.',
        benefit: 'faction_synergy'
      };
    }

    return {
      type: 'NEGOTIATION_BONUS',
      description: 'The Envoy provides bonuses to social checks.',
      benefit: 'persuasion_buff'
    };
  }

  generateSynergyDialogue(otherCharacter) {
    if (otherCharacter.id === 'observer_prime') {
      return "I speak for the Prime, but I listen to all.";
    }
    if (otherCharacter.id === 'quantum_auditor') {
      return "We must calculate the cost of peace.";
    }
    return "Unity is strength.";
  }

  triggerDeepBondQuest() {
    if (this.relationshipDepth >= 90 && this.activeTreaties.length >= 2) {
      return {
        questId: 'parallax_accord_node',
        title: 'The Diplomacy Chamber',
        description: 'The Envoy invites you to the Diplomacy Chamber to forge the Parallax Accord.',
        reward: 'Card: Parallax Accord'
      };
    }
    return null;
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// THE SILENT LEDGER - Keeper of Unspoken Truths
// ═══════════════════════════════════════════════════════════════════════════
export class SilentLedger extends LivingCharacter {
  constructor(memorySystem, worldState) {
    const data = {
      id: 'silent_ledger',
      name: 'The Silent Ledger',
      title: 'Keeper of Unspoken Truths',
      faction: 'Neutral Entity Observers',
      resonanceAlignment: 'Void / Neutral',
      stats: {
        wisdom: 98,
        secrecy: 100,
        willpower: 95,
        perception: 90
      },
      memory_system: {
        relationship_metrics: {
          trust: { current: 50 },
          respect: { current: 50 },
          fear: { current: 0 }
        },
        emotional_states: ['neutral']
      }
    };
    super(data, memorySystem, worldState);
    
    // Ledger specific state
    this.secretsGuarded = 10;
    this.veilIntegrity = 100;
    this.vaultState = 'Sealed'; // Sealed, Pressurized, Breached
  }

  calculateNewEmotion(playerAction, context) {
    let baseEmotion = this.emotionalState.current;
    
    if (playerAction.type === 'PROTECT_SECRET' || playerAction.type === 'RESIST_INTRUSION') {
      baseEmotion = 'silent_respect';
      this.veilIntegrity = Math.min(100, this.veilIntegrity + 5);
    } else if (playerAction.type === 'PRY' || playerAction.type === 'LEAK_INFO') {
      baseEmotion = 'guarded_disapproval';
      this.veilIntegrity -= 10;
      this.vaultState = 'Pressurized';
    }

    if (context.resonance === 'Void') {
      this.veilIntegrity += 10; // Void strengthens the veil
    } else if (context.resonance === 'Corruption') {
      this.veilIntegrity -= 5; // Corruption erodes it
    }

    return baseEmotion;
  }

  processSkillReaction(skillName, skillType) {
    if (skillName === 'Truth Shield') {
      return {
        reaction: 'shield',
        dialogue: "Some truths are best left unspoken.",
        effect: 'mental_defense'
      };
    }
    if (skillName === 'Mind Veil') {
      return {
        reaction: 'hide',
        dialogue: "The ledger is silent for a reason.",
        effect: 'stealth_buff'
      };
    }
    return super.processSkillReaction(skillName, skillType);
  }

  processChoiceReaction(choiceId, outcome) {
    if (choiceId === 'keep_secret') {
      return {
        approval: 20,
        dialogue: "Wisdom lies in silence."
      };
    }
    if (choiceId === 'force_open') {
      this.vaultState = 'Breached';
      return {
        approval: -25,
        dialogue: "You are not ready for the truth."
      };
    }
    return super.processChoiceReaction(choiceId, outcome);
  }

  determineContextAction(context) {
    if (this.vaultState === 'Breached') {
      return {
        type: 'TRUTH_WRAITH_ATTACK',
        description: 'The Silent Ledger manifests a Truth Wraith to protect the secrets.',
        risk: 'critical'
      };
    }
    
    if (context.resonance === 'Void' && this.veilIntegrity > 80) {
      return {
        type: 'MIND_SHIELD_AURA',
        description: 'The Ledger projects a powerful aura protecting against psychic attacks.',
        benefit: 'defense_buff'
      };
    }

    return {
      type: 'CRYPTIC_ADVICE',
      description: 'The Ledger offers a piece of wisdom without revealing the full truth.',
      benefit: 'hint'
    };
  }

  generateSynergyDialogue(otherCharacter) {
    if (otherCharacter.id === 'observer_prime') {
      return "The Prime knows what must be kept hidden.";
    }
    if (otherCharacter.id === 'null_witness') {
      return "... (A shared silence of understanding)";
    }
    return "Silence is the strongest lock.";
  }

  triggerDeepBondQuest() {
    if (this.relationshipDepth >= 95 && this.veilIntegrity >= 90) {
      return {
        questId: 'silent_ledger_node',
        title: 'The Secret Chamber',
        description: 'The Silent Ledger allows you to glimpse the Forbidden Truths.',
        reward: 'Card: Silent Ledger'
      };
    }
    return null;
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// OBSERVER PRIME - Faction Leader
// ═══════════════════════════════════════════════════════════════════════════
export class ObserverPrime extends LivingCharacter {
  constructor(memorySystem, worldState) {
    const data = {
      id: 'observer_prime',
      name: 'Observer Prime',
      title: 'Faction Leader',
      faction: 'Neutral Entity Observers',
      resonanceAlignment: 'Light / Echo',
      stats: {
        authority: 100,
        vision: 98,
        impartiality: 95,
        power: 99
      },
      memory_system: {
        relationship_metrics: {
          trust: { current: 50 },
          respect: { current: 50 },
          fear: { current: 0 }
        },
        emotional_states: ['neutral']
      }
    };
    super(data, memorySystem, worldState);
    
    // Prime specific state
    this.cosmicBalance = 50;
    this.directiveScope = 100;
    this.chamberState = 'Harmonized'; // Harmonized, Fluxing, Destabilized
  }

  calculateNewEmotion(playerAction, context) {
    let baseEmotion = this.emotionalState.current;
    
    if (playerAction.type === 'RESTORE_ORDER' || playerAction.type === 'OBEY_DIRECTIVE') {
      baseEmotion = 'authoritative_approval';
      this.cosmicBalance = Math.min(100, this.cosmicBalance + 5);
    } else if (playerAction.type === 'SOW_CHAOS' || playerAction.type === 'DEFIANCE') {
      baseEmotion = 'stern_judgment';
      this.cosmicBalance -= 10;
      this.chamberState = 'Fluxing';
    }

    if (context.resonance === 'Light') {
      this.directiveScope += 10;
    } else if (context.resonance === 'Dissonance') {
      this.chamberState = 'Destabilized';
    }

    return baseEmotion;
  }

  processSkillReaction(skillName, skillType) {
    if (skillName === 'Time Freeze') {
      return {
        reaction: 'halt',
        dialogue: "Balance is maintained.",
        effect: 'time_stop'
      };
    }
    if (skillName === 'Glyph Command') {
      return {
        reaction: 'command',
        dialogue: "You are now one with the Observers.",
        effect: 'buff_allies'
      };
    }
    return super.processSkillReaction(skillName, skillType);
  }

  processChoiceReaction(choiceId, outcome) {
    if (choiceId === 'accept_role') {
      return {
        approval: 25,
        dialogue: "You have accepted your place in the cosmos."
      };
    }
    if (choiceId === 'reject_balance') {
      return {
        approval: -30,
        dialogue: "You are no longer welcome."
      };
    }
    return super.processChoiceReaction(choiceId, outcome);
  }

  determineContextAction(context) {
    if (this.chamberState === 'Destabilized') {
      return {
        type: 'GLYPH_WRAITH_PRIME',
        description: 'Observer Prime manifests as a Glyph Wraith to enforce order.',
        risk: 'extreme'
      };
    }
    
    if (context.resonance === 'Light' || context.resonance === 'Echo') {
      return {
        type: 'COSMIC_GUIDANCE',
        description: 'Observer Prime offers high-level guidance on the cosmic narrative.',
        benefit: 'story_reveal'
      };
    }

    return {
      type: 'DIRECTIVE_ISSUANCE',
      description: 'Observer Prime issues a directive that alters faction relations.',
      benefit: 'world_state_change'
    };
  }

  generateSynergyDialogue(otherCharacter) {
    if (otherCharacter.id === 'scribe_of_parity') {
      return "We are the architects of balance.";
    }
    if (otherCharacter.id === 'null_witness') {
      return "See all, say nothing, until the time is right.";
    }
    return "The cosmos watches.";
  }

  triggerDeepBondQuest() {
    if (this.relationshipDepth >= 95 && this.cosmicBalance >= 80) {
      return {
        questId: 'prime_directive_node',
        title: 'The Cosmic Chamber',
        description: 'Observer Prime grants you access to the Cosmic Chamber to reshape the narrative.',
        reward: 'Card: Prime Directive'
      };
    }
    return null;
  }
}
