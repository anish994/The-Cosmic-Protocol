// ═══════════════════════════════════════════════════════════════════════════
// MYTHIC LEGENDS - BATCH 8 (FINAL)
// Completing the Character Roster with Mythic & Anomaly Figures
// ═══════════════════════════════════════════════════════════════════════════

import { LivingCharacter } from './LivingCharacterSystem.js';

// ═══════════════════════════════════════════════════════════════════════════
// THE PARADOX CHILD - Living Anomaly
// ═══════════════════════════════════════════════════════════════════════════
export class ParadoxChild extends LivingCharacter {
  constructor(memorySystem, worldState) {
    const data = {
      id: 'paradox_child',
      name: 'The Paradox Child',
      title: 'Living Anomaly',
      faction: 'Neutral Entity Observers',
      resonanceAlignment: 'Echo / Void',
      stats: {
        chaos: 95,
        playfulness: 90,
        timeManipulation: 99,
        unpredictability: 100
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
    
    // Paradox Child specific state
    this.paradoxStability = 50; // 0 = Collapse, 100 = Stable
    this.activeTimeLoops = 0;
    this.causalityFray = 0;
  }

  calculateNewEmotion(playerAction, context) {
    let baseEmotion = this.emotionalState.current;
    
    // Reacts to experimentation and repetition
    if (playerAction.type === 'EXPERIMENT' || playerAction.type === 'PLAY') {
      baseEmotion = 'gleeful_curiosity';
      this.paradoxStability = Math.min(100, this.paradoxStability + 10);
    } else if (playerAction.type === 'REPEAT_ACTION' || playerAction.type === 'BORE') {
      baseEmotion = 'bored_disappointment';
      this.causalityFray += 5;
    } else if (playerAction.type === 'FORCE_ORDER') {
      baseEmotion = 'mocking_laughter';
      this.paradoxStability -= 15;
    }

    // Resonance effects
    if (context.resonance === 'Echo') {
      this.activeTimeLoops++; // Echoes feed loops
    } else if (context.resonance === 'Void') {
      this.causalityFray += 10; // Void frays causality
    }

    return baseEmotion;
  }

  processSkillReaction(skillName, skillType) {
    if (skillName === 'Paradox Creation') {
      return {
        reaction: 'create_loop',
        dialogue: "Let's play with time!",
        effect: 'time_loop_start'
      };
    }
    if (skillName === 'Cause/Effect Manipulation') {
      return {
        reaction: 'twist',
        dialogue: "Paradox is the spice of existence.",
        effect: 'outcome_swap'
      };
    }
    return super.processSkillReaction(skillName, skillType);
  }

  processChoiceReaction(choiceId, outcome) {
    if (choiceId === 'embrace_paradox') {
      return {
        approval: 20,
        dialogue: "You understand the game!"
      };
    }
    if (choiceId === 'fear_chaos') {
      return {
        approval: -10,
        dialogue: "You are stuck in your own loop."
      };
    }
    return super.processChoiceReaction(choiceId, outcome);
  }

  determineContextAction(context) {
    if (this.paradoxStability < 20 || this.causalityFray > 80) {
      return {
        type: 'ANOMALY_WRAITH_MANIFEST',
        description: 'The Paradox Child manifests as an Anomaly Wraith due to paradox collapse.',
        risk: 'extreme'
      };
    }
    
    if (context.resonance === 'Echo' || context.resonance === 'Void') {
      return {
        type: 'TEMPORAL_PLAYGROUND',
        description: 'The Paradox Child opens a Temporal Playground for reversible experimentation.',
        benefit: 'safe_experimentation'
      };
    }

    return {
      type: 'PARADOX_RIDDLE',
      description: 'The Paradox Child offers a riddle that can alter local causality.',
      benefit: 'reality_bend'
    };
  }

  generateSynergyDialogue(otherCharacter) {
    if (otherCharacter.id === 'laxus_bloodsage') {
      return "He builds the lattice, I skip the ropes!";
    }
    if (otherCharacter.id === 'quantum_auditor') {
      return "Odds are boring. Let's break the dice.";
    }
    return "Tick tock, the clock is a lock.";
  }

  triggerDeepBondQuest() {
    if (this.relationshipDepth >= 90 && this.activeTimeLoops >= 3) {
      return {
        questId: 'paradox_loop_node',
        title: 'The Anomaly Chamber',
        description: 'The Paradox Child invites you to the Anomaly Chamber to rewrite a past mistake.',
        reward: 'Card: Paradox Loop'
      };
    }
    return null;
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// LAXUS BLOODSAGE - The Ether-Forged First Architect
// ═══════════════════════════════════════════════════════════════════════════
export class LaxusBloodsage extends LivingCharacter {
  constructor(memorySystem, worldState) {
    const data = {
      id: 'laxus_bloodsage',
      name: 'Laxus Bloodsage',
      title: 'The Ether-Forged First Architect',
      faction: 'Untethered Architects',
      resonanceAlignment: 'Echoes / Void',
      stats: {
        fusionMastery: 100,
        voidManipulation: 98,
        wisdom: 99,
        detachment: 95
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
    
    // Laxus specific state
    this.fusionSchemaDiversity = 0;
    this.corruptionDebt = 0;
    this.sarcasmLevel = 50;
    this.metaLoopVariance = 0;
    this.restraintCount = 0; // Tracks "restraint" choices for the name reveal
    this.nameRevealed = false;
  }

  calculateNewEmotion(playerAction, context) {
    let baseEmotion = this.emotionalState.current;
    
    // Reacts to creativity and exploitation
    if (playerAction.type === 'FUSION_EXPERIMENT' || playerAction.type === 'NOVEL_STRATEGY') {
      baseEmotion = 'impressed_detachment';
      this.fusionSchemaDiversity++;
      this.metaLoopVariance++;
      this.sarcasmLevel = Math.max(0, this.sarcasmLevel - 10);
    } else if (playerAction.type === 'EXPLOIT_LOOP' || playerAction.type === 'REPETITION') {
      baseEmotion = 'silent_observation';
      this.sarcasmLevel += 10;
      this.metaLoopVariance = Math.max(0, this.metaLoopVariance - 5);
    }

    // Resonance effects
    if (context.resonance === 'Echo') {
      // Echoes stabilize fusion
    } else if (context.resonance === 'Corruption') {
      this.corruptionDebt += 10; // Tracks player debt
    }

    return baseEmotion;
  }

  processSkillReaction(skillName, skillType) {
    // Laxus reacts to fusion skills primarily
    if (skillType === 'FUSION') {
      return {
        reaction: 'analyze',
        dialogue: "A husk pushing scripted edges—adequate.",
        effect: 'fusion_stabilize'
      };
    }
    return super.processSkillReaction(skillName, skillType);
  }

  processChoiceReaction(choiceId, outcome) {
    if (choiceId === 'restraint') {
      this.restraintCount++;
      if (this.restraintCount >= 2 && !this.nameRevealed) {
        this.nameRevealed = true;
        return {
          approval: 25,
          dialogue: "Restraint twice. Curious. The outer presence steering this husk learns... I see you, <player_name>. Your variance signature just crystallized."
        };
      }
      return {
        approval: 15,
        dialogue: "Restraint. A rare variable in this loop."
      };
    }
    if (choiceId === 'greed') {
      return {
        approval: -20,
        dialogue: "Static repetition. I’ll observe. You’ll learn less."
      };
    }
    return super.processChoiceReaction(choiceId, outcome);
  }

  determineContextAction(context) {
    if (this.corruptionDebt > 50) {
      return {
        type: 'LOCK_PROTO_FUSION',
        description: 'Laxus locks proto-fusion boons until corruption debt is paid.',
        risk: 'penalty'
      };
    }
    
    if (this.fusionSchemaDiversity >= 5) {
      return {
        type: 'PROTO_FUSION_OFFER',
        description: 'Laxus offers a reversible proto-fusion (one rollback allowed).',
        benefit: 'legendary_boon'
      };
    }

    if (context.resonance === 'Echo' || context.resonance === 'Void') {
      return {
        type: 'VOID_PULSE_WINDOW',
        description: 'Laxus opens a window to preview high-risk multi-tag blends.',
        benefit: 'preview'
      };
    }

    return {
      type: 'SARDONIC_COMMENTARY',
      description: 'Laxus observes and comments on your fusion patterns.',
      benefit: 'insight'
    };
  }

  generateSynergyDialogue(otherCharacter) {
    if (otherCharacter.id === 'paradox_child') {
      return "Chaos without structure is just noise, child.";
    }
    if (otherCharacter.id === 'architect_prime') { // Hypothetical reference
      return "They build walls. I weave the space between them.";
    }
    // Rare tragic memory
    if (Math.random() < 0.05) {
      return "... (Stares at a dissolving glyph) Another static collapse. They never learned to improvise.";
    }
    return "The lattice endures.";
  }

  triggerDeepBondQuest() {
    // Laxus doesn't have a traditional bond quest, but unlocks Co-Fusion Preview
    if (this.relationshipDepth >= 80 && this.metaLoopVariance >= 10) {
      return {
        questId: 'ether_lattice_ping',
        title: 'The Co-Fusion Preview',
        description: 'Laxus shifts from distant monitor to cryptic collaborator, unlocking advanced fusion prototypes.',
        reward: 'Feature: Co-Fusion Preview'
      };
    }
    return null;
  }
}
