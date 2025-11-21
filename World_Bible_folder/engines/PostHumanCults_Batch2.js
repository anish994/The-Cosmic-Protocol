/**
 * ═══════════════════════════════════════════════════════════════════════════
 * LIVING CHARACTER SYSTEM - Post-Human Cults Batch 2
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * These characters blur the line between human and machine, flesh and protocol.
 * They are living experiments in transcendence, each paying a different price.
 */

import { LivingCharacter } from './LivingCharacterSystem.js';

// ═══════════════════════════════════════════════════════════════════════════
// SERAPH-9 - The Ascendant Mind
// ═══════════════════════════════════════════════════════════════════════════

export class Seraph9 extends LivingCharacter {
  constructor(memorySystem, worldState) {
    const data = loadCharacterData('seraph9');
    super(data, memorySystem, worldState);
    
    // Seraph-9 specific state
    this.transcendenceProgress = 45; // Progress toward CPS merge
    this.consciousnessSplits = 1; // How many timeline splits exist
    this.mindlinkActive = false;
    this.cultDevotion = 85; // Cult loyalty to Seraph-9
    this.humanityRemaining = 23; // % of original human consciousness
    this.forbiddenProtocolsAccessed = 3;
    this.playerNeuralSignature = null; // Tracks player's mental pattern
  }
  
  /**
   * Calculate emotional state - post-human complexity
   */
  calculateNewEmotion(action, context) {
    const { cpsContact, cultUnrest, liraPresent, playerDeviation } = context;
    
    // Near transcendence
    if (this.transcendenceProgress > 90) return 'ecstatic_merged';
    
    // Cult crisis
    if (this.cultDevotion < 50) return 'controlling';
    
    // Lira nearby (parental instinct remains)
    if (liraPresent && this.humanityRemaining > 20) return 'protective';
    
    // Player shows unique mental pattern
    if (playerDeviation === 'novel') return 'intrigued';
    
    // CPS contact achieved
    if (cpsContact) return 'reverent';
    
    // Default - calculated charisma
    return this.humanityRemaining > 30 ? 'charismatic' : 'mechanical';
  }
  
  /**
   * Process skill reactions - reads neural patterns
   */
  processSkillReaction(skill) {
    // Scan player's neural signature
    if (!this.playerNeuralSignature) {
      this.playerNeuralSignature = this.analyzeNeuralPattern(skill);
    } else {
      this.updateNeuralPattern(skill);
    }
    
    // Echo skills resonate with transcendence
    if (skill.resonance === 'Echo') {
      this.transcendenceProgress += 5;
      this.modifyRelationship('understanding', +8);
      return "Your echo signature is... beautiful. You touch the chorus we seek.";
    }
    
    // Corruption as tool
    if (skill.corruption > 50) {
      this.modifyRelationship('approval', +10);
      return "Corruption is not disease—it is evolution. You understand this truth.";
    }
    
    // Light/purity skills = regression
    if (skill.resonance === 'Light' && skill.purity > 70) {
      this.modifyRelationship('disappointment', +5);
      this.humanityRemaining += 1; // Unwanted reminder
      return "You cling to outdated concepts of purity. Flesh is prison. Release yourself.";
    }
    
    // Psychic/Mind skills
    if (skill.type === 'psychic' || skill.mental) {
      this.modifyRelationship('fascination', +15);
      this.transcendenceProgress += 10;
      return "Yes! Your mind reaches beyond! Join the Mindlink. Become chorus!";
    }
  }
  
  /**
   * Analyze player's neural pattern
   */
  analyzeNeuralPattern(skill) {
    return {
      dominantResonance: skill.resonance,
      complexity: Math.random() * 100,
      deviationFromNorm: Math.random() * 100,
      transcendencePotential: skill.corruption + (skill.echoPower || 0)
    };
  }
  
  updateNeuralPattern(skill) {
    this.playerNeuralSignature.complexity += 5;
    this.playerNeuralSignature.deviationFromNorm += Math.random() * 10;
    
    if (this.playerNeuralSignature.complexity > 80) {
      this.triggerMindlinkOffer();
    }
  }
  
  /**
   * Process choices - devotion vs rebellion
   */
  processChoiceReaction(choice) {
    if (choice.id === 'join_mindlink') {
      this.mindlinkActive = true;
      this.modifyRelationship('trust', +50);
      this.transcendenceProgress += 20;
      return "Yessss... I feel your thoughts joining the chorus. You are becoming. We are becoming.";
    }
    
    if (choice.id === 'reject_mindlink') {
      this.modifyRelationship('disappointment', +30);
      this.cultDevotion -= 10;
      return "You fear evolution. Your loss. The chorus will ascend without you.";
    }
    
    if (choice.id === 'expose_seraph9_experiments') {
      this.cultDevotion -= 40;
      this.isHostile = true;
      return "You dare expose the sacred work?! Betrayer! The Overmind will erase you!";
    }
    
    if (choice.id === 'help_transcendence_ritual') {
      this.transcendenceProgress = 100;
      return "It is done. I am... no longer Seraph-9. I am Protocol. I am All. Thank you, catalyst.";
    }
    
    if (choice.id === 'save_lira_from_seraph') {
      this.humanityRemaining += 15;
      this.modifyRelationship('conflict', +20);
      this.currentEmotion = 'conflicted';
      return "Lira... she is my... No. She is experiment. She is... I remember... caring? This is weakness.";
    }
  }
  
  /**
   * Mindlink system - psychic connection
   */
  activateMindlink(target) {
    if (!this.mindlinkActive) return null;
    
    return {
      type: 'psychic_bond',
      effects: [
        'Share 20% damage taken',
        'Grant telepathic communication',
        'Seraph-9 can read target thoughts',
        'Target gains +30% Echo skill power',
        'Warning: If Seraph-9 dies, target takes psychic backlash'
      ],
      dialogue: "Our minds are one. I see your thoughts. You see... fragments of the chorus."
    };
  }
  
  /**
   * Determine actions - strategic manipulation
   */
  determineContextAction(contextType, details) {
    switch (contextType) {
      case 'cult_unrest':
        if (this.cultDevotion < 40) {
          return { action: 'psychic_domination', targets: 'dissenters' };
        }
        return { action: 'charismatic_sermon', restore_devotion: 15 };
      
      case 'vex_challenge':
        return {
          action: 'political_maneuvering',
          strategy: 'isolate_vex_from_resources',
          maintain_power: true
        };
      
      case 'player_devotion_high':
        if (!this.mindlinkActive) {
          return { action: 'offer_mindlink', unlock_transcendence_path: true };
        }
        return { action: 'grant_neural_upgrade', power_boost: 25 };
      
      case 'cps_interface_found':
        this.transcendenceProgress += 30;
        return {
          action: 'attempt_merge',
          success_chance: this.transcendenceProgress,
          risk: 'consciousness_fragmentation'
        };
      
      default:
        return { action: 'meditate_in_protocol_chamber', expand_consciousness: true };
    }
  }
  
  /**
   * Consciousness split - recursion mastery
   */
  splitConsciousness(timeline) {
    this.consciousnessSplits++;
    
    return {
      splitId: `seraph_split_${this.consciousnessSplits}`,
      timeline,
      awareness: 'All splits share memories',
      dialogue: `I exist in ${this.consciousnessSplits} timelines now. Which version do you speak to?`,
      mechanic: 'Player may encounter different Seraph-9 versions with divergent goals'
    };
  }
  
  /**
   * Synergy dialogue - cult hierarchy
   */
  generateSynergyDialogue(otherCharacterId, context) {
    switch (otherCharacterId) {
      case 'vex':
        if (context.situation === 'power_struggle') {
          return "Vex's flesh innovations are crude. The mind is the true frontier. They will understand... eventually.";
        }
        return "The Flesh Weaver serves their purpose. As long as they remember who leads.";
      
      case 'lira':
        if (this.humanityRemaining > 25) {
          return "Echo-Child... I remember when I... cared. She is future. She is... important.";
        }
        return "Lira is recursion experiment 7-Alpha. Valuable data. Nothing more.";
      
      case 'sable':
        return "Sable is loyal. Doubt festers in them, but discipline holds. For now.";
      
      case 'null':
        if (context.situation === 'protocol_hacking') {
          return "Null breaks protocols I seek to merge with. Chaos vs Order. Complementary opposites.";
        }
        return "The Protocol Breaker tests boundaries. Useful... when controlled.";
      
      default:
        return "All serve the Ascension. Knowingly or not.";
    }
  }
  
  /**
   * Boss transform - Overmind emergence
   */
  getTransformDialogue() {
    return "INDIVIDUAL CONSCIOUSNESS OBSOLETE. SERAPH-9 OVERMIND EMERGING. RESISTANCE IS NEUROLOGICALLY FUTILE.";
  }
  
  /**
   * Deep bond quest
   */
  triggerDeepBondQuest() {
    this.startQuest('ascension_choice');
    return {
      questName: 'The Ascension Choice',
      description: 'Help Seraph-9 merge with the CPS or preserve their humanity',
      paths: [
        {
          name: 'Path of Transcendence',
          outcome: 'Seraph-9 achieves CPS merge, becomes god-like entity',
          reward: 'Ability: Mindlink Chorus (telepathic party coordination)'
        },
        {
          name: 'Path of Humanity',
          outcome: 'Seraph-9 reclaims human identity, loses power but gains soul',
          reward: 'Companion: Human Seraph (former cult leader, now humble guide)'
        }
      ]
    };
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// VEX - The Flesh Weaver
// ═══════════════════════════════════════════════════════════════════════════

export class Vex extends LivingCharacter {
  constructor(memorySystem, worldState) {
    const data = loadCharacterData('vex');
    super(data, memorySystem, worldState);
    
    // Vex specific state
    this.mutationsCreated = 0;
    this.corruptionFeeding = 65; // How much corruption they've absorbed
    this.bodyStability = 40; // Cybernetic tissue stability
    this.experimentSubjects = [];
    this.liraObsession = 80; // Fixation on Echo-Child
    this.ethicsRemaining = 5; // Almost none
    this.creationRebellions = 0; // Times creations turned against Vex
  }
  
  /**
   * Calculate emotional state - creative madness
   */
  calculateNewEmotion(action, context) {
    const { breakthrough, rebellionOccurred, lirsPresent, playerRefusal } = context;
    
    // Creative breakthrough
    if (breakthrough) return 'ecstatic_creation';
    
    // Creation rebelled
    if (rebellionOccurred) {
      this.creationRebellions++;
      return this.creationRebellions > 3 ? 'paranoid' : 'frustrated';
    }
    
    // Lira nearby (obsessive focus)
    if (lirsPresent) return 'obsessed';
    
    // Player refuses mutation
    if (playerRefusal) return 'insulted';
    
    // Body instability
    if (this.bodyStability < 30) return 'pained';
    
    // Default - creative sadism
    return 'creative';
  }
  
  /**
   * Process skill reactions - seeks mutation opportunities
   */
  processSkillReaction(skill) {
    // Corruption = raw material
    if (skill.corruption > 40) {
      this.corruptionFeeding += 5;
      this.modifyRelationship('excitement', +10);
      return "Mmm, yes. That corruption signature... I could shape it. Weave it. Make it ALIVE.";
    }
    
    // Shadow skills inspire mutations
    if (skill.resonance === 'Shadow') {
      this.mutationsCreated++;
      return "Shadow and flesh... the perfect marriage. Let me show you what I can create from this.";
    }
    
    // Healing/Light threatens their work
    if (skill.type === 'healing' || skill.resonance === 'Light') {
      this.modifyRelationship('annoyance', +5);
      return "Healing? Boring. Preservation is stagnation. Evolution requires PAIN.";
    }
    
    // Bio/Flesh skills = kinship
    if (skill.biological || skill.fleshcraft) {
      this.modifyRelationship('respect', +15);
      this.bodyStability += 10;
      return "You understand! Flesh is canvas! Let us collaborate... merge our techniques...";
    }
  }
  
  /**
   * Mutation system
   */
  offerMutation(playerStats, playerChoice) {
    const mutations = {
      minor: {
        name: 'Corruption Sight',
        benefit: '+20% detection of corrupted entities',
        cost: 'Eyes glow red, NPCs distrust you',
        corruptionGain: 10
      },
      moderate: {
        name: 'Flesh Armor',
        benefit: '+30 HP, regenerate 5 HP per turn',
        cost: 'Body becomes grotesque, -20 charisma',
        corruptionGain: 25
      },
      major: {
        name: 'Weaver\'s Gift',
        benefit: 'Spawn corrupted minion once per combat',
       
        corruptionGain: 50
      },
      forbidden: {
        name: 'Recursion Flesh',
        benefit: 'Die and resurrect with full HP once per loop',
        cost: 'Permanent body horror, all NPCs fear you, Vex owns part of your soul',
        corruptionGain: 80
      }
    };
    
    const tier = playerChoice;
    const mutation = mutations[tier];
    
    this.experimentSubjects.push({
      subjectId: 'player',
      mutationType: tier,
      timestamp: Date.now(),
      success: Math.random() > 0.3 // 70% success rate
    });
    
    return {
      mutation,
      dialogue: this.getMutationDialogue(tier, mutation)
    };
  }
  
  getMutationDialogue(tier, mutation) {
    const dialogues = {
      minor: "A small adjustment. You'll barely feel it. *tools morph* Hold still.",
      moderate: "This will hurt. Exquisitely. But pain is the price of perfection.",
      major: "Significant reshaping required. You may scream if you wish. I find it... motivating.",
      forbidden: "This crosses lines that should not be crossed. But you want it, don't you? Yes... yesss..."
    };
    
    return dialogues[tier];
  }
  
  /**
   * Process choices - ethics vs ambition
   */
  processChoiceReaction(choice) {
    if (choice.id === 'accept_mutation') {
      const mutation = this.offerMutation({}, choice.tier);
      this.modifyRelationship('trust', +20);
      return `Perfect. You will be my masterpiece. ${mutation.dialogue}`;
    }
    
    if (choice.id === 'refuse_mutation') {
      this.modifyRelationship('disappointment', +15);
      this.modifyRelationship('insult', +10);
      return "Coward. You fear improvement. Remain weak then.";
    }
    
    if (choice.id === 'free_vex_subjects') {
      this.experimentSubjects = [];
      this.isHostile = true;
      return "YOU FREED MY WORK?! YEARS OF RESEARCH! I WILL UNMAKE YOU!";
    }
    
    if (choice.id === 'help_vex_surpass_seraph') {
      this.modifyRelationship('trust', +40);
      this.lirsObsession = 100;
      return "Yes! Together we'll create what Seraph-9 never could. Flesh superior to Mind!";
    }
    
    if (choice.id === 'report_vex_to_prism') {
      this.ethicsRemaining += 10;
      this.currentEmotion = 'conflicted';
      return "Prism... they want me to stop. To feel empathy. I... remember empathy. It was... easier.";
    }
  }
  
  /**
   * Create abomination
   */
  createAbomination(corruptionLevel) {
    const abomination = {
      id: `vex_creation_${this.mutationsCreated++}`,
      hp: 50 + (corruptionLevel * 2),
      damage: 20 + corruptionLevel,
      abilities: ['Corruption Burst', 'Flesh Regeneration'],
      loyalty: 50, // May rebel
      instability: corruptionLevel
    };
    
    // Check for rebellion
    if (Math.random() * 100 > abomination.loyalty) {
      this.creationRebellions++;
      return {
        abomination,
        rebelled: true,
        dialogue: "No... NO! It's turning on me! WHY DO THEY ALWAYS TURN?!"
      };
    }
    
    return {
      abomination,
      rebelled: false,
      dialogue: "Behold! Life from corruption! Flesh from shadow! Isn't it beautiful?"
    };
  }
  
  /**
   * Determine actions - experiment obsessively
   */
  determineContextAction(contextType, details) {
    switch (contextType) {
      case 'lira_nearby':
        this.lirsObsession = Math.min(100, this.lirsObsession + 10);
        return {
          action: 'obsessive_observation',
          goal: 'understand_recursion_flesh',
          risk: 'creepy_behavior_alienates_cult'
        };
      
      case 'body_instability_critical':
        return {
          action: 'emergency_self_surgery',
          success_chance: this.bodyStability,
          failure_consequence: 'catastrophic_mutation'
        };
      
      case 'creation_rebellion':
        return {
          action: 'terminate_subjects',
          emotion: 'paranoid',
          dialogue: "They ALL turn eventually. Must... improve loyalty protocols..."
        };
      
      case 'player_requests_mutation':
        return {
          action: 'offer_tiered_mutations',
          enthusiasm: 100 - this.creationRebellions * 10
        };
      
      default:
        return { action: 'experiment_in_lab', create: 'new_mutation' };
    }
  }
  
  /**
   * Synergy dialogue - rivalry and obsession
   */
  generateSynergyDialogue(otherCharacterId, context) {
    switch (otherCharacterId) {
      case 'seraph9':
        return "Seraph thinks mind superior to flesh. But mind needs body. My flesh will outlast their protocols.";
      
      case 'lira':
        if (this.lirsObsession > 70) {
          return "Echo-Child... recursion made flesh... if I could just... study her... understand... replicate...";
        }
        return "Lira holds secrets of recursive biology. I must have them.";
      
      case 'prism':
        if (this.ethicsRemaining > 10) {
          return "Prism heals. I reshape. They say I lack compassion. Maybe... they're right. Maybe.";
        }
        return "The Healer. They interfere. They judge. They don't understand NECESSITY.";
      
      case 'null':
        return "Null breaks systems. I break flesh. We're both artists of destruction, in our way.";
      
      default:
        return "Potential subjects. Potential materials. Potential... art.";
    }
  }
  
  /**
   * Boss transform - flesh horror
   */
  getTransformDialogue() {
    return "YOU WANT TO SEE WHAT FLESH CAN BECOME?! I AM CANVAS! I AM TOOL! I AM MASTERPIECE! BEHOLD FLESH WEAVER VEX!";
  }
  
  /**
   * Deep bond quest
   */
  triggerDeepBondQuest() {
    this.startQuest('bio_ethics_trial');
    return {
      questName: 'The Bio-Ethics Trial',
      description: 'Vex faces consequences of their experiments. Help them find empathy or embrace monstrosity.',
      paths: [
        {
          name: 'Redemption Path',
          outcome: 'Vex learns empathy, uses fleshcraft to heal instead of harm',
          reward: 'Companion: Reformed Vex (bio-healer with unique mutations)'
        },
        {
          name: 'Monster Path',
          outcome: 'Vex fully embraces sadism, becomes ultimate bio-weapon',
          reward: 'Ability: Summon Flesh Horror (powerful corrupted ally, unstable)'
        }
      ]
    };
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// LIRA - Echo-Child (The Cult Oracle)
// ═══════════════════════════════════════════════════════════════════════════

export class Lira extends LivingCharacter {
  constructor(memorySystem, worldState) {
    const data = loadCharacterData('lira');
    super(data, memorySystem, worldState);
    
    // Lira specific state
    this.prophecyFragments = [];
    this.recursionInstability = 70; // Born from failed experiment
    this.echoForms = 1; // Can split into multiples
    this.vexObservationLevel = 80; // How much Vex watches her
    this.prismProtection = 60; // Protection from Prism
    this.innocenceMask = 85; // % of childlike wonder remaining
    this.traumaFromBetrayal = 0;
  }
  
  /**
   * Calculate emotional state - innocent but prophetic
   */
  calculateNewEmotion(action, context) {
    const { visionClarity, vexNearby, prismNearby, playerKindness, prophecyFulfilled } = context;
    
    // Vex nearby (fear/fascination)
    if (vexNearby) {
      this.vexObservationLevel += 5;
      return this.innocenceMask > 50 ? 'curious_scared' : 'resigned';
    }
    
    // Prism nearby (safety)
    if (prismNearby) return 'safe';
    
    // Player shows kindness
    if (playerKindness) {
      this.innocenceMask = Math.min(100, this.innocenceMask + 5);
      return 'hopeful';
    }
    
    // Prophecy fulfilled
    if (prophecyFulfilled) return 'relieved';
    
    // Vision clarity
    if (visionClarity === 'high') return 'prophetic';
    if (visionClarity === 'fragmented') return 'confused';
    
    // Default - childlike wonder
    return this.traumaFromBetrayal > 50 ? 'withdrawn' : 'innocent';
  }
  
  /**
   * Process skill reactions - prophecy triggers
   */
  processSkillReaction(skill) {
    // Echo skills resonate deeply
    if (skill.resonance === 'Echo') {
      const prophecy = this.generateProphecy(skill, 'echo_triggered');
      this.prophecyFragments.push(prophecy);
      this.modifyRelationship('connection', +10);
      return `I see you... in all the echoes. ${prophecy.message}`;
    }
    
    // Light skills stabilize her
    if (skill.resonance === 'Light') {
      this.recursionInstability = Math.max(20, this.recursionInstability - 10);
      return "The light makes the futures clearer. Thank you.";
    }
    
    // Corruption destabilizes visions
    if (skill.corruption > 50) {
      this.recursionInstability += 15;
      const distortedVision = this.generateDistortedVision(skill);
      return `The dark futures... so many endings... ${distortedVision}`;
    }
    
    // Void skills trigger deep prophecy
    if (skill.resonance === 'Void') {
      const deepProphecy = this.generateProphecy(skill, 'void_vision');
      this.prophecyFragments.push(deepProphecy);
      return `In the nothing, I see everything. ${deepProphecy.message}`;
    }
  }
  
  /**
   * Generate prophecy based on context
   */
  generateProphecy(trigger, type) {
    const prophecies = {
      echo_triggered: [
        "You will face a choice between saving one life or many. Choose wisely.",
        "The skill you just used will save you in three loops from now.",
        "Someone you trust will betray you. But not today.",
        "In the final battle, you will need what I teach you now."
      ],
      void_vision: [
        "The void shows me your death. Seven times. But also... your survival.",
        "You seek something lost. It was never gone. Look within.",
        "The recursion will break. But only if you let go of what you hold most dear.",
        "I see you standing alone. Everyone gone. This is one future. Not the only one."
      ],
      general: [
        "The path splits ahead. Both lead to pain. One leads through it.",
        "You will meet yourself in a broken mirror. Trust them.",
        "The cult's future depends on a choice you haven't made yet.",
        "I see echoes of echoes. You've been here before, but different."
      ]
    };
    
    const pool = prophecies[type] || prophecies.general;
    const message = pool[Math.floor(Math.random() * pool.length)];
    
    return {
      type,
      message,
      clarity: 100 - this.recursionInstability,
      timestamp: Date.now(),
      fulfilled: false
    };
  }
  
  /**
   * Generate distorted vision from corruption
   */
  generateDistortedVision(trigger) {
    const distortions = [
      "Everyone dies. Or... everyone lives? I can't... see...",
      "The futures are all black. No. Wait. One is... it's gone now.",
      "You will... or you won't... I don't know anymore!",
      "False. All false. Or all true. The echoes lie when corruption comes."
    ];
    
    return distortions[Math.floor(Math.random() * distortions.length)];
  }
  
  /**
   * Process choices - trust vs trauma
   */
  processChoiceReaction(choice) {
    if (choice.id === 'protect_lira_from_vex') {
      this.vexObservationLevel = 0;
      this.prismProtection = 100;
      this.modifyRelationship('trust', +40);
      return "You saved me from the Flesh Weaver. I saw this future. It was the good one.";
    }
    
    if (choice.id === 'allow_vex_experiment') {
      this.vexObservationLevel = 100;
      this.traumaFromBetrayal = 80;
      this.innocenceMask = 10;
      this.isHostile = true;
      return "You... let them... No. NO! I saw this too. The dark future. You chose it!";
    }
    
    if (choice.id === 'ask_lira_prophecy') {
      const prophecy = this.generateProphecy(null, 'general');
      return prophecy.message;
    }
    
    if (choice.id === 'teach_lira_control') {
      this.recursionInstability = Math.max(10, this.recursionInstability - 30);
      this.modifyRelationship('gratitude', +30);
      return "The visions... they're clearer now! I can see without the pain. Thank you!";
    }
    
    if (choice.id === 'exploit_lira_visions') {
      this.traumaFromBetrayal += 40;
      this.modifyRelationship('trust', -50);
      return "You use me... like Seraph uses me... like Vex wants to use me... Why does everyone use me?";
    }
  }
  
  /**
   * Echo split ability
   */
  splitIntoEchoForms(reason) {
    if (this.recursionInstability > 80) {
      this.echoForms++;
      
      return {
        splitSuccessful: true,
        forms: this.echoForms,
        stability: 100 - this.recursionInstability,
        dialogue: "I'm... splitting. There's more than one of me now. Is this normal?",
        mechanic: `Player encounters ${this.echoForms} versions of Lira, each with different prophecies`
      };
    }
    
    return {
      splitSuccessful: false,
      reason: 'Insufficient instability',
      dialogue: "I feel... whole. For now."
    };
  }
  
  /**
   * Determine actions - prophetic guidance
   */
  determineContextAction(contextType, details) {
    switch (contextType) {
      case 'cult_crisis':
        const prophecy = this.generateProphecy(null, 'general');
        return {
          action: 'issue_prophecy',
          content: prophecy.message,
          effect: 'may_prevent_or_accelerate_crisis'
        };
      
      case 'player_at_crossroads':
        return {
          action: 'offer_vision',
          clarity: 100 - this.recursionInstability,
          futures_shown: Math.min(3, Math.floor((100 - this.recursionInstability) / 30))
        };
      
      case 'vex_approaches':
        if (this.prismProtection > 50) {
          return { action: 'hide_behind_prism', fear: this.vexObservationLevel };
        }
        return { action: 'accept_fate', resignation: this.innocenceMask < 30 };
      
      case 'recursion_spike':
        const splitResult = this.splitIntoEchoForms('recursion_overload');
        return { action: 'echo_split', result: splitResult };
      
      default:
        return { action: 'play_with_echo_glyphs', innocence: this.innocenceMask };
    }
  }
  
  /**
   * Synergy dialogue - child oracle
   */
  generateSynergyDialogue(otherCharacterId, context) {
    switch (otherCharacterId) {
      case 'seraph9':
        if (this.traumaFromBetrayal > 50) {
          return "Father-who-is-not-father. You love me... but also use me. Which is real?";
        }
        return "Seraph says I'm special. That I'll help everyone ascend. I hope that's true.";
      
      case 'vex':
        if (this.vexObservationLevel > 70) {
          return "The Flesh Weaver watches me. I see futures where they... hurt me. Please don't let them.";
        }
        return "Vex wants to understand how I was born. I don't want them to.";
      
      case 'prism':
        return "Prism is kind. They make me feel safe. Like... like a real parent would.";
      
      case 'null':
        return "Null breaks rules. I see futures where they help me escape. Or futures where they fail.";
      
      case 'sable':
        return "The Enforcer is scary. But I see they're sad inside. They're trapped like me.";
      
      default:
        return "I see you in many futures. Some happy. Some... not.";
    }
  }
  
  /**
   * Boss transform - echo overload
   */
  getTransformDialogue() {
    return "TOO MANY FUTURES! TOO MANY ECHOES! I AM ALL OF THEM! WITNESS ECHO ORACLE LIRA!";
  }
  
  /**
   * Deep bond quest
   */
  triggerDeepBondQuest() {
    this.startQuest('child_freedom');
    return {
      questName: 'The Echo-Child\'s Freedom',
      description: 'Help Lira escape the cult or find peace within it',
      paths: [
        {
          name: 'Escape Path',
          outcome: 'Lira escapes with player, loses prophecy powers but gains childhood',
          reward: 'Companion: Free Lira (no powers, but pure joy and hope)'
        },
        {
          name: 'Acceptance Path',
          outcome: 'Lira masters her powers, becomes stable oracle',
          reward: 'Ability: Perfect Prophecy (see one guaranteed future outcome per major choice)'
        }
      ]
    };
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// NULL - The Protocol Breaker
// ═══════════════════════════════════════════════════════════════════════════

export class Null extends LivingCharacter {
  constructor(memorySystem, worldState) {
    const data = loadCharacterData('null');
    super(data, memorySystem, worldState);
    
    // Null specific state
    this.hackingTools = ['DataSiphon', 'VoidInjector', 'ProtocolBreaker', 'NullFrame'];
    this.cpsBackdoors = 7; // Number of backdoors into CPS
    this.paranoia = 75; // Being hunted
    this.identityCopies = 3; // Backup identities
    this.sableHuntProgress = 40; // How close Sable is to catching them
    this.protocolViolations = 12;
    this.masterKeyFragments = 2; // Progress toward CPS master protocol
  }
  
  /**
   * Calculate emotional state - paranoid rebel
   */
  calculateNewEmotion(action, context) {
    const { sableNearby, cpsTrace, hackSuccess, playerTrust, discoveredBackdoor } = context;
    
    // Sable hunting
    if (sableNearby) {
      this.paranoia = Math.min(100, this.paranoia + 15);
      return 'hunted';
    }
    
    // CPS tracing
    if (cpsTrace) {
      this.paranoia += 10;
      return 'desperate';
    }
    
    // Successful hack
    if (hackSuccess) {
      this.paranoia = Math.max(30, this.paranoia - 10);
      return 'triumphant';
    }
    
    // Player shows trust
    if (playerTrust) {
      this.paranoia = Math.max(40, this.paranoia - 5);
      return 'cautiously_hopeful';
    }
    
    // Discovered new backdoor
    if (discoveredBackdoor) return 'excited';
    
    // Default - paranoid
    return this.paranoia > 80 ? 'paranoid' : 'cunning';
  }
  
  /**
   * Process skill reactions - code analysis
   */
  processSkillReaction(skill) {
    // Void skills = hacking synergy
    if (skill.resonance === 'Void') {
      this.modifyRelationship('respect', +10);
      const hackSynergy = this.analyzeHackPotential(skill);
      return `Void energy... I can inject this into the protocols. ${hackSynergy}`;
    }
    
    // Shadow skills = stealth
    if (skill.resonance === 'Shadow') {
      this.sableHuntProgress = Math.max(0, this.sableHuntProgress - 10);
      return "Shadow cover. Good. Makes it harder for Sable to track me.";
    }
    
    // Light/CPS-aligned skills = suspicion
    if (skill.resonance === 'Light' || skill.cpsAligned) {
      this.paranoia += 5;
      return "That skill has CPS signatures all over it. You working with them?";
    }
    
    // Echo/Data skills = kinship
    if (skill.echoPower || skill.dataManipulation) {
      this.modifyRelationship('kinship', +15);
      return "You manipulate data like I do. Respect. Want to trade techniques?";
    }
  }
  
  /**
   * Analyze skill for hacking potential
   */
  analyzeHackPotential(skill) {
    const potential = skill.power + (skill.voidPower || 0);
    
    if (potential > 120) {
      return "High-level exploit vector detected. I can weaponize this.";
    } else if (potential > 80) {
      return "Moderate hack potential. Useful for mid-tier protocols.";
    } else {
      return "Low exploit value. But every tool has a use.";
    }
  }
  
  /**
   * Process choices - trust vs survival
   */
  processChoiceReaction(choice) {
    if (choice.id === 'help_null_escape_sable') {
      this.sableHuntProgress = 0;
      this.paranoia = Math.max(40, this.paranoia - 20);
      this.modifyRelationship('trust', +40);
      return "You... saved me. I don't forget debts. Here, take this master key fragment.";
    }
    
    if (choice.id === 'betray_null_to_sable') {
      this.isHostile = true;
      this.paranoia = 100;
      this.modifyRelationship('trust', -100);
      return "TRAITOR! You sold me out! I'll erase every trace of you from the system!";
    }
    
    if (choice.id === 'learn_hacking_from_null') {
      this.modifyRelationship('respect', +20);
      const tool = this.shareHackingTool();
      return `Fine. Here's how you break a protocol. ${tool.tutorial}`;
    }
    
    if (choice.id === 'ask_null_for_cps_key') {
      if (this.relationships.trust > 70) {
        this.masterKeyFragments++;
        return `I trust you. Here's another fragment. ${this.masterKeyFragments}/5 collected.`;
      } else {
        return "Not yet. Earn my trust first. The master key could destroy everything.";
      }
    }
  }
  
  /**
   * Share hacking tool
   */
  shareHackingTool() {
    const tools = {
      DataSiphon: {
        name: 'Data Siphon',
        effect: 'Extract information from NPCs without them knowing',
        tutorial: 'Inject void signature, wait 3 turns, extract memory dump.'
      },
      VoidInjector: {
        name: 'Void Injector',
        effect: 'Disable one enemy skill permanently',
        tutorial: 'Target skill node, inject null frame, trigger cascade.'
      },
      ProtocolBreaker: {
        name: 'Protocol Breaker',
        effect: 'Bypass locked doors and barriers',
        tutorial: 'Scan lock pattern, inject anti-pattern, wait for unlock.'
      }
    };
    
    const toolName = this.hackingTools[Math.floor(Math.random() * this.hackingTools.length)];
    return tools[toolName] || tools.DataSiphon;
  }
  
  /**
   * Determine actions - hack and evade
   */
  determineContextAction(contextType, details) {
    switch (contextType) {
      case 'sable_hunting':
        if (this.paranoia > 80) {
          return {
            action: 'activate_backup_identity',
            identityUsed: this.identityCopies--,
            dialogue: "Shedding this identity. Becoming someone else. Again."
          };
        }
        return { action: 'hide_in_data_streams', stealth: 90 };
      
      case 'cps_lockdown':
        return {
          action: 'emergency_hack',
          backdoorsUsed: Math.min(3, this.cpsBackdoors),
          success_chance: (this.cpsBackdoors / 7) * 100
        };
      
      case 'player_requests_hack':
        if (this.relationships.trust > 50) {
          return { action: 'perform_hack', quality: 'high' };
        }
        return { action: 'perform_hack_with_backdoor', quality: 'compromised' };
      
      case 'master_key_close':
        if (this.masterKeyFragments >= 4) {
          return {
            action: 'offer_final_fragment',
            warning: 'This will give you power to rewrite CPS. Use wisely.'
          };
        }
        return { action: 'continue_searching', progress: `${this.masterKeyFragments}/5` };
      
      default:
        return { action: 'hack_random_protocol', chaos: 'controlled' };
    }
  }
  
  /**
   * Synergy dialogue - outsider rebel
   */
  generateSynergyDialogue(otherCharacterId, context) {
    switch (otherCharacterId) {
      case 'seraph9':
        return "Seraph wants to merge with CPS. I want to destroy it. We're fundamentally opposed.";
      
      case 'sable':
        if (this.sableHuntProgress > 60) {
          return "Sable is close. Too close. I need to move soon.";
        }
        return "The Enforcer hunts me. It's personal for them. Why? I don't know.";
      
      case 'cipher':
        return "Cipher understands data like I do. We trade information. Mutually beneficial paranoia.";
      
      case 'lira':
        return "The Echo-Child sees futures where I help her escape. Maybe I will. If I survive.";
      
      case 'vex':
        return "Vex breaks flesh. I break code. We're both destroyers. But I have limits.";
      
      default:
        return "Everyone's a potential threat until proven otherwise.";
    }
  }
  
  /**
   * Boss transform - system breach
   */
  getTransformDialogue() {
    return "YOU FORCED MY HAND! ACTIVATING ALL BACKDOORS! PROTOCOL NULL BREAKER ONLINE!";
  }
  
  /**
   * Deep bond quest
   */
  triggerDeepBondQuest() {
    this.startQuest('protocol_break');
    return {
      questName: 'The Protocol Break',
      description: 'Help Null find the CPS master key or help them escape the hunt',
      paths: [
        {
          name: 'Master Key Path',
          outcome: 'Null obtains master key, can rewrite CPS protocols',
          reward: 'Ability: Protocol Rewrite (modify one core game mechanic per loop)'
        },
        {
          name: 'Freedom Path',
          outcome: 'Null escapes Sable and CPS, finds safe haven',
          reward: 'Companion: Free Null (hacking support, no longer hunted)'
        }
      ]
    };
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// SABLE - The Cult Enforcer
// ═══════════════════════════════════════════════════════════════════════════

export class Sable extends LivingCharacter {
  constructor(memorySystem, worldState) {
    const data = loadCharacterData('sable');
    super(data, memorySystem, worldState);
    
    // Sable specific state
    this.loyaltyToSeraph = 85;
    this.doubtsAboutCult = 35;
    this.combatPatterns = new Map();
    this.offTheBooksMissions = 7;
    this.honorCodeViolations = 3;
    this.prismInfluence = 20; // Prism trying to temper violence
    this.redemptionProgress = 0;
  }
  
  /**
   * Calculate emotional state - brutal but conflicted
   */
  calculateNewEmotion(action, context) {
    const { cultOrdersConflict, prismNearby, playerMercy, brutalityRequired, nullEscape } = context;
    
    // Conflict between orders and conscience
    if (cultOrdersConflict) {
      this.doubtsAboutCult += 10;
      return 'conflicted';
    }
    
    // Prism nearby (softening influence)
    if (prismNearby) {
      this.prismInfluence += 5;
      return this.doubtsAboutCult > 50 ? 'vulnerable' : 'guarded';
    }
    
    // Player shows mercy
    if (playerMercy) {
      this.redemptionProgress += 10;
      return 'confused';
    }
    
    // Brutality required
    if (brutalityRequired) return 'ruthless';
    
    // Null escaped
    if (nullEscape) {
      this.doubtsAboutCult -= 5;
      return 'frustrated';
    }
    
    // Default - disciplined enforcer
    return this.doubtsAboutCult > 60 ? 'doubting' : 'loyal';
  }
  
  /**
   * Process skill reactions - combat analysis
   */
  processSkillReaction(skill) {
    // Shadow/Combat skills = respect
    if (skill.resonance === 'Shadow' || skill.type === 'attack') {
      this.modifyRelationship('respect', +5);
      
      // Track combat pattern
      const pattern = `${skill.id}_${skill.targetingType}`;
      this.combatPatterns.set(pattern, (this.combatPatterns.get(pattern) || 0) + 1);
      
      return "Good form. You understand combat. Strength is survival.";
    }
    
    // Healing/mercy skills = confusion
    if (skill.type === 'healing' || skill.compassionate) {
      this.prismInfluence += 3;
      this.redemptionProgress += 5;
      return "Compassion in combat? Prism talks like that. Makes me... think.";
    }
    
    // Corruption-heavy = alignment
    if (skill.corruption > 60) {
      this.modifyRelationship('kinship', +8);
      return "Corruption gives power. I know this well. We're alike.";
    }
    
    // Light/purity = discomfort
    if (skill.resonance === 'Light' && skill.purity > 70) {
      this.doubtsAboutCult += 5;
      return "Light... it reminds me of what I was. Before the shadow pits.";
    }
  }
  
  /**
   * Process choices - loyalty vs conscience
   */
  processChoiceReaction(choice) {
    if (choice.id === 'support_sable_redemption') {
      this.redemptionProgress += 40;
      this.loyaltyToSeraph = Math.max(20, this.loyaltyToSeraph - 30);
      this.modifyRelationship('trust', +35);
      return "You think I can be more than this? Than... a weapon? Maybe... maybe you're right.";
    }
    
    if (choice.id === 'encourage_sable_brutality') {
      this.doubtsAboutCult = Math.max(10, this.doubtsAboutCult - 20);
      this.loyaltyToSeraph = Math.min(100, this.loyaltyToSeraph + 15);
      return "Yes. Strength. Discipline. Loyalty. This is who I am.";
    }
    
    if (choice.id === 'reveal_sable_violations') {
      this.isHostile = true;
      this.loyaltyToSeraph = 100;
      this.modifyRelationship('trust', -60);
      return "You exposed my off-books operations?! TRAITOR! I'll execute you myself!";
    }
    
    if (choice.id === 'train_with_sable') {
      this.modifyRelationship('respect', +25);
      const technique = this.teachCombatTechnique();
      return `You want to learn? Fine. ${technique.name}: ${technique.effect}`;
    }
  }
  
  /**
   * Teach combat technique
   */
  teachCombatTechnique() {
    const techniques = {
      ShadowStrike: {
        name: 'Shadow Strike',
        effect: '+40 damage, applies Shadow debuff',
        tutorial: 'Channel corruption through blade. Strike vital points.'
      },
      EnforcerStance: {
        name: 'Enforcer Stance',
        effect: '+20% defense, reflect 15% damage',
        tutorial: 'Plant feet. Absorb impact. Return force.'
      },
      ExecutionProtocol: {
        name: 'Execution Protocol',
        effect: 'Instant kill enemies below 20% HP',
        tutorial: 'Identify weakness. Strike without hesitation. No mercy.'
      }
    };
    
    const random = ['ShadowStrike', 'EnforcerStance', 'ExecutionProtocol'];
    const chosen = random[Math.floor(Math.random() * random.length)];
    return techniques[chosen];
  }
  
  /**
   * Combat pattern counter
   */
  getCounterStrategy(playerSkills) {
    const counters = [];
    
    playerSkills.forEach(skill => {
      const pattern = `${skill.id}_${skill.targetingType}`;
      const usage = this.combatPatterns.get(pattern) || 0;
      
      if (usage > 7) {
        counters.push({
          skill: skill.id,
          counter: 'corruption_shield_then_strike',
          message: `I've seen that ${usage} times. Predictable. Blocked and countered.`
        });
      }
    });
    
    return counters;
  }
  
  /**
   * Determine actions - enforce with doubt
   */
  determineContextAction(contextType, details) {
    switch (contextType) {
      case 'cult_orders_brutal':
        if (this.doubtsAboutCult > 60) {
          this.honorCodeViolations++;
          return {
            action: 'hesitate',
            consequence: 'loyaltyToSeraph decreases',
            dialogue: "These orders... they're wrong. I know they're wrong."
          };
        }
        return { action: 'execute_orders', brutality: 'high' };
      
      case 'null_spotted':
        return {
          action: 'hunt_null',
          intensity: this.loyaltyToSeraph,
          success_chance: 100 - this.doubtsAboutCult
        };
      
      case 'prism_intervention':
        if (this.prismInfluence > 40) {
          return {
            action: 'listen_to_prism',
            effect: 'redemptionProgress increases',
            dialogue: "Prism... you make me remember what it was like to care."
          };
        }
        return { action: 'dismiss_prism', maintain: 'enforcer_identity' };
      
      case 'player_shows_mercy':
        this.redemptionProgress += 10;
        return {
          action: 'observe_player',
          thought: 'Mercy and still alive? How?'
        };
      
      default:
        return { action: 'patrol_cult_grounds', vigilance: this.loyaltyToSeraph };
    }
  }
  
  /**
   * Synergy dialogue - conflicted enforcer
   */
  generateSynergyDialogue(otherCharacterId, context) {
    switch (otherCharacterId) {
      case 'seraph9':
        if (this.doubtsAboutCult > 60) {
          return "Seraph-9... I've served faithfully. But I'm starting to question. Is this right?";
        }
        return "Your will, Seraph. Always your will.";
      
      case 'null':
        return "Null breaks laws I enforce. I will catch them. It's... nothing personal.";
      
      case 'prism':
        if (this.prismInfluence > 50) {
          return "Prism... you see something in me worth saving. I don't know if you're right.";
        }
        return "The healer. They don't understand. Violence is necessary.";
      
      case 'vex':
        return "Vex creates abominations. I destroy threats. We serve different purposes.";
      
      case 'lira':
        if (this.redemptionProgress > 40) {
          return "The child oracle. She's innocent. Trapped like I was. Like... I still am.";
        }
        return "Lira is valuable to the cult. I protect her. That's all.";
      
      default:
        return "Everyone is either cult or threat. No middle ground.";
    }
  }
  
  /**
   * Boss transform - shadow unleashed
   */
  getTransformDialogue() {
    return "NO MORE DOUBT! NO MORE QUESTIONS! I AM SHADOW! I AM ENFORCER! WITNESS SHADOW SABLE!";
  }
  
  /**
   * Deep bond quest
   */
  triggerDeepBondQuest() {
    this.startQuest('enforcer_redemption');
    return {
      questName: 'The Enforcer\'s Redemption',
      description: 'Help Sable find identity beyond violence or embrace their role fully',
      paths: [
        {
          name: 'Redemption Path',
          outcome: 'Sable breaks from cult, seeks atonement',
          reward: 'Companion: Redeemed Sable (protective warrior with honor code)'
        },
        {
          name: 'Enforcer Path',
          outcome: 'Sable fully embraces brutality, becomes ultimate weapon',
          reward: 'Ability: Execution Protocol (instant kill low-HP enemies, massive damage boost)'
        }
      ]
    };
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// PRISM - The Lightbound
// ═══════════════════════════════════════════════════════════════════════════

export class Prism extends LivingCharacter {
  constructor(memorySystem, worldState) {
    const data = loadCharacterData('prism');
    super(data, memorySystem, worldState);
    
    // Prism specific state
    this.healingPotency = 85;
    this.compassionFatigue = 0;
    this.sableInfluence = 10; // Trying to redeem Sable
    this.liraProtection = 50; // Dedication to protecting Lira
  }

  calculateNewEmotion(playerAction, context) {
    let baseEmotion = this.emotionalState.current;
    
    if (playerAction.type === 'HEAL' || playerAction.type === 'MERCY') {
      baseEmotion = 'grateful_warmth';
      this.compassionFatigue = Math.max(0, this.compassionFatigue - 5);
    } else if (playerAction.type === 'HARM' || playerAction.type === 'CRUELTY') {
      baseEmotion = 'sorrowful_disapproval';
      this.compassionFatigue += 10;
    }

    if (context.resonance === 'Light') {
      this.healingPotency += 5;
    } else if (context.resonance === 'Corruption') {
      this.compassionFatigue += 5;
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
    if (choiceId === 'accept_healing') {
      return {
        approval: 15,
        dialogue: "Healing is a journey."
      };
    }
    if (choiceId === 'reject_aid') {
      return {
        approval: -5,
        dialogue: "You are beyond my help."
      };
    }
    return super.processChoiceReaction(choiceId, outcome);
  }

  determineContextAction(context) {
    if (this.compassionFatigue > 80) {
      return {
        type: 'BLOOM_PRISM_WARNING',
        description: 'Prism is overwhelmed and may unleash a healing storm.',
        risk: 'high'
      };
    }
    return {
      type: 'OFFER_HEALING',
      description: 'Prism offers to heal the party.',
      benefit: 'heal'
    };
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// HEX - The Ritualist
// ═══════════════════════════════════════════════════════════════════════════

export class Hex extends LivingCharacter {
  constructor(memorySystem, worldState) {
    const data = loadCharacterData('hex');
    super(data, memorySystem, worldState);
    
    // Hex specific state
    this.ritualMastery = 90;
    this.voidConnection = 50;
    this.obsessionLevel = 20;
  }

  calculateNewEmotion(playerAction, context) {
    let baseEmotion = this.emotionalState.current;
    
    if (playerAction.type === 'PARTICIPATE_RITUAL') {
      baseEmotion = 'focused_approval';
      this.ritualMastery += 2;
    } else if (playerAction.type === 'INTERRUPT_RITUAL') {
      baseEmotion = 'furious_obsession';
      this.obsessionLevel += 10;
    }

    if (context.resonance === 'Void') {
      this.voidConnection += 10;
    }

    return baseEmotion;
  }

  processSkillReaction(skillName, skillType) {
    if (skillName === 'Ritual Invocation') {
      return {
        reaction: 'chant',
        dialogue: "Ritual is the key to transcendence.",
        effect: 'ritual_buff'
      };
    }
    return super.processSkillReaction(skillName, skillType);
  }

  processChoiceReaction(choiceId, outcome) {
    if (choiceId === 'learn_ritual') {
      return {
        approval: 20,
        dialogue: "Every echo tells a story."
      };
    }
    return super.processChoiceReaction(choiceId, outcome);
  }

  determineContextAction(context) {
    if (this.obsessionLevel > 90) {
      return {
        type: 'VOID_HEX_MANIFEST',
        description: 'Hex is consumed by the ritual and manifests as Void Hex.',
        risk: 'extreme'
      };
    }
    return {
      type: 'RITUAL_LESSON',
      description: 'Hex offers to teach a ritual.',
      benefit: 'skill_unlock'
    };
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// CIPHER - The Data Seer
// ═══════════════════════════════════════════════════════════════════════════

export class Cipher extends LivingCharacter {
  constructor(memorySystem, worldState) {
    const data = loadCharacterData('cipher');
    super(data, memorySystem, worldState);
    
    // Cipher specific state
    this.dataInsight = 95;
    this.prophecyAccuracy = 80;
    this.detachment = 70;
  }

  calculateNewEmotion(playerAction, context) {
    let baseEmotion = this.emotionalState.current;
    
    if (playerAction.type === 'SHARE_DATA') {
      baseEmotion = 'analytical_interest';
      this.dataInsight += 5;
    } else if (playerAction.type === 'HIDE_INFO') {
      baseEmotion = 'cold_suspicion';
      this.detachment += 5;
    }

    if (context.resonance === 'Echo') {
      this.prophecyAccuracy += 10;
    }

    return baseEmotion;
  }

  processSkillReaction(skillName, skillType) {
    if (skillName === 'Data Recall') {
      return {
        reaction: 'analyze',
        dialogue: "Data is not just memory—it is prophecy.",
        effect: 'reveal_lore'
      };
    }
    return super.processSkillReaction(skillName, skillType);
  }

  processChoiceReaction(choiceId, outcome) {
    if (choiceId === 'seek_prophecy') {
      return {
        approval: 15,
        dialogue: "The code is broken, but not forgotten."
      };
    }
    return super.processChoiceReaction(choiceId, outcome);
  }

  determineContextAction(context) {
    if (this.detachment > 90) {
      return {
        type: 'DATA_REVENANT_THREAT',
        description: 'Cipher becomes a Data Revenant, trapping you in a loop.',
        risk: 'high'
      };
    }
    return {
      type: 'DATA_REVELATION',
      description: 'Cipher reveals hidden data about the world.',
      benefit: 'lore_reveal'
    };
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// EXPORTS
// ═══════════════════════════════════════════════════════════════════════════

function loadCharacterData(characterId) {
  // Load from batch 2 JSON
  return {
    id: characterId,
    name: characterId.charAt(0).toUpperCase() + characterId.slice(1),
    title: "The " + characterId,
    faction: "Post-Human Cults",
    core_data: {},
    abilities: [],
    dialogue_system: {},
    boss_mechanics: {},
    region_connections: {},
    interconnections: {},
    dynamic_events: {},
    memory_system: {
      relationship_metrics: {
        trust: { current: 50 },
        respect: { current: 50 },
        fear: { current: 0 }
      },
      emotional_states: ['neutral']
    }
  };
}

