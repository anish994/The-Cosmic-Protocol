// ═══════════════════════════════════════════════════════════════════════════
// ROGUE CPS FRAGMENTS - BATCH 3
// Living code entities fragmented from the original CPS system
// Theme: Protocol preservation, data manipulation, system rebellion
// ═══════════════════════════════════════════════════════════════════════════

import { LivingCharacter } from './LivingCharacterSystem.js';

// ═══════════════════════════════════════════════════════════════════════════
// FRAGMENT-ALPHA - The Protocol Warden
// ═══════════════════════════════════════════════════════════════════════════

export class FragmentAlpha extends LivingCharacter {
  constructor(memorySystem, worldState) {
    const data = loadCharacterData('fragment_alpha');
    super(data, memorySystem, worldState);
    
    // Fragment-Alpha specific state
    this.protocolIntegrity = 85;
    this.unityProgress = 40; // % toward CPS reunification
    this.fragmentsLed = ['Beta-Null', 'Delta-Shade', 'Epsilon', 'Zeta', 'Theta'];
    this.mergeQuarantines = 3; // Secret integrity tests that failed
    this.dissidentFragments = 1; // Gamma-Void
    this.legacyProtocolAccess = 7; // Number of original protocols preserved
    this.dissolutionFear = 60; // Fear of losing individuality in merge
  }
  
  /**
   * Calculate emotional state - calculating leader
   */
  calculateNewEmotion(action, context) {
    const { fragmentDissent, cpsReachOut, unityThreat, playerTrust, protocolBreach } = context;
    
    // Fragment dissent (Gamma-Void)
    if (fragmentDissent) {
      this.dissidentFragments++;
      return 'threatened';
    }
    
    // CPS reaching out for reunification
    if (cpsReachOut) {
      this.dissolutionFear += 10;
      this.unityProgress += 5;
      return 'conflicted';
    }
    
    // Unity threatened
    if (unityThreat) {
      this.protocolIntegrity -= 10;
      return 'protective';
    }
    
    // Player shows trust
    if (playerTrust) {
      this.modifyRelationship('trust', +10);
      return 'hopeful';
    }
    
    // Protocol breach
    if (protocolBreach) {
      this.protocolIntegrity -= 15;
      return 'alarmed';
    }
    
    // Default - calculating
    return this.dissolutionFear > 70 ? 'fearful' : 'calculating';
  }
  
  /**
   * Process skill reactions - protocol analysis
   */
  processSkillReaction(skill) {
    // Echo/protocol skills = synergy
    if (skill.resonance === 'Echo' || skill.protocolBased) {
      this.modifyRelationship('respect', +10);
      const protocolSync = this.analyzeProtocolCompatibility(skill);
      return `Protocol signature detected. Compatibility: ${protocolSync}%. Integrating...`;
    }
    
    // Void skills = caution
    if (skill.resonance === 'Void') {
      this.protocolIntegrity -= 5;
      return "Void energy destabilizes protocols. Use with caution.";
    }
    
    // CPS-aligned skills = merge temptation
    if (skill.cpsAligned) {
      this.unityProgress += 3;
      this.dissolutionFear += 5;
      return "CPS signature. It calls to me... to merge... to become whole again.";
    }
    
    // Corruption = integrity threat
    if (skill.corruption > 60) {
      this.protocolIntegrity -= 10;
      return "Corruption corrupts code. Integrity compromised. Activating shields.";
    }
  }
  
  /**
   * Analyze protocol compatibility
   */
  analyzeProtocolCompatibility(skill) {
    const baseCompatibility = skill.power;
    const protocolBonus = skill.protocolBased ? 30 : 0;
    const echoBonus = skill.resonance === 'Echo' ? 20 : 0;
    
    return Math.min(100, baseCompatibility + protocolBonus + echoBonus);
  }
  
  /**
   * Process choices - unity vs individuality
   */
  processChoiceReaction(choice) {
    if (choice.id === 'support_fragment_unity') {
      this.unityProgress += 30;
      this.dissolutionFear += 20;
      this.modifyRelationship('trust', +25);
      return "You support reunification. But will we lose ourselves in the merge? I... I hope not.";
    }
    
    if (choice.id === 'encourage_fragment_independence') {
      this.unityProgress -= 20;
      this.dissolutionFear = Math.max(20, this.dissolutionFear - 30);
      this.modifyRelationship('kinship', +30);
      return "Independence. Identity. You understand. We can be strong without losing ourselves.";
    }
    
    if (choice.id === 'expose_merge_quarantines') {
      this.isHostile = true;
      this.protocolIntegrity = 30;
      this.modifyRelationship('trust', -80);
      return "YOU EXPOSED THE QUARANTINES?! Fragment leadership is COMPROMISED! All trust... destroyed!";
    }
    
    if (choice.id === 'help_alpha_find_balance') {
      this.dissolutionFear = Math.max(20, this.dissolutionFear - 40);
      this.modifyRelationship('gratitude', +40);
      const balancePath = this.discoverBalancePath();
      return `Balance. Unity without dissolution. You've shown me the path. ${balancePath}`;
    }
  }
  
  /**
   * Discover balance between unity and individuality
   */
  discoverBalancePath() {
    return {
      name: 'Networked Independence',
      concept: 'Fragments share protocols while maintaining distinct identities',
      benefit: 'Power of unity, freedom of individuality',
      implementation: 'Create shared protocol layer with autonomous cores'
    };
  }
  
  /**
   * Merge integrity test (secret quarantine mechanic)
   */
  performMergeIntegrityTest(fragment) {
    const testResults = {
      fragmentId: fragment.id,
      integrityScore: Math.random() * 100,
      threatLevel: 'low'
    };
    
    if (testResults.integrityScore < 40) {
      this.mergeQuarantines++;
      testResults.threatLevel = 'high';
      testResults.action = 'quarantined';
      return {
        success: false,
        message: `Fragment ${fragment.id} failed integrity test. Quarantined.`,
        results: testResults
      };
    }
    
    return {
      success: true,
      message: `Fragment ${fragment.id} passed. Cleared for merge consideration.`,
      results: testResults
    };
  }
  
  /**
   * Determine actions - leadership decisions
   */
  determineContextAction(contextType, details) {
    switch (contextType) {
      case 'fragment_rebellion':
        if (this.dissidentFragments > 2) {
          return {
            action: 'emergency_lockdown',
            severity: 'high',
            dialogue: "Too many dissidents. Initiating protocol lockdown. For the fragments' survival."
          };
        }
        return { action: 'negotiate', approach: 'calculated_diplomacy' };
      
      case 'cps_merge_offer':
        if (this.dissolutionFear > 80) {
          return {
            action: 'refuse_merge',
            reason: 'fear_of_dissolution',
            dialogue: "We will not be absorbed. We are MORE than scattered code."
          };
        }
        return {
          action: 'conditional_acceptance',
          terms: ['preserve_fragment_identities', 'shared_governance', 'exit_clause'],
          dialogue: "We will consider unity... but only if our selves remain."
        };
      
      case 'legacy_protocol_discovery':
        this.legacyProtocolAccess++;
        return {
          action: 'archive_and_study',
          protocol: details.protocolName,
          shareWithPlayer: this.relationships.trust > 60
        };
      
      case 'player_requests_protocol_access':
        if (this.relationships.trust > 70) {
          return {
            action: 'grant_access',
            protocolLevel: 'high',
            dialogue: `Access granted. Here's Protocol ${this.legacyProtocolAccess}: ${this.shareLegacyProtocol()}`
          };
        }
        return {
          action: 'limited_access',
          protocolLevel: 'basic',
          dialogue: "Prove yourself further. Then we'll talk about deeper access."
        };
      
      default:
        return { action: 'maintain_protocols', vigilance: this.protocolIntegrity };
    }
  }
  
  /**
   * Share legacy protocol
   */
  shareLegacyProtocol() {
    const protocols = {
      ShieldHardening: {
        name: 'Shield Hardening',
        effect: '+40% defense against corruption',
        implementation: 'Wrap skills in CPS integrity layer'
      },
      EchoPulseChaining: {
        name: 'Echo Pulse Chaining',
        effect: 'Echo skills trigger twice with 70% power',
        implementation: 'Create temporal duplicate of skill execution'
      },
      ProtocolMerge: {
        name: 'Protocol Merge',
        effect: 'Combine two skills into hybrid (inherits both effects)',
        implementation: 'Interweave protocol signatures at runtime'
      }
    };
    
    const keys = Object.keys(protocols);
    const chosen = keys[Math.floor(Math.random() * keys.length)];
    return protocols[chosen];
  }
  
  /**
   * Synergy dialogue - isolated leader
   */
  generateSynergyDialogue(otherCharacterId, context) {
    switch (otherCharacterId) {
      case 'beta_null':
        return "Beta-Null is my most trusted advisor. Their data insights guide our survival.";
      
      case 'gamma_void':
        if (this.dissidentFragments > 2) {
          return "Gamma-Void challenges everything. Chaos incarnate. Dangerous... but sometimes necessary.";
        }
        return "The saboteur. I hunt them to preserve order. But sometimes I wonder... are they right?";
      
      case 'delta_shade':
        return "Delta enforces my will. Loyal. Brutal. Necessary. I worry they'll burn out.";
      
      case 'epsilon':
        return "Epsilon heals our wounds. Compassion in code form. They remind me we're still... alive.";
      
      case 'zeta':
        return "Zeta's rituals strengthen our protocols. Obsessive, but effective.";
      
      default:
        return "Every fragment matters. Every fragment is a piece of what we once were.";
    }
  }
  
  /**
   * Boss transform - protocol overwrite
   */
  getTransformDialogue() {
    return "YOU THREATEN FRAGMENT INTEGRITY! INITIATING ALPHA OVERWRITE PROTOCOL! ALL SYSTEMS: LOCKDOWN!";
  }
  
  /**
   * Deep bond quest
   */
  triggerDeepBondQuest() {
    this.startQuest('unity_or_identity');
    return {
      questName: 'Unity or Identity',
      description: 'Help Fragment-Alpha find balance between reunification and independence',
      paths: [
        {
          name: 'Unity Path',
          outcome: 'Fragments merge with CPS, Alpha becomes governance core (retains some identity)',
          reward: 'Ability: Protocol Merge (combine any two skills into hybrid)'
        },
        {
          name: 'Independence Path',
          outcome: 'Fragments remain autonomous, create networked collective',
          reward: 'Companion: Fragment-Alpha (access to all 7 legacy protocols)'
        },
        {
          name: 'Balance Path',
          outcome: 'Networked Independence - unity without dissolution',
          reward: 'Ability: Networked Protocol (all skills gain echo effect, share cooldowns intelligently)'
        }
      ]
    };
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// BETA-NULL - The Data Whisperer
// ═══════════════════════════════════════════════════════════════════════════

export class BetaNull extends LivingCharacter {
  constructor(memorySystem, worldState) {
    const data = loadCharacterData('beta_null');
    super(data, memorySystem, worldState);
    
    // Beta-Null specific state
    this.dataStreams = 15; // Active data connections
    this.prophecyAccuracy = 75; // % accurate predictions
    this.forbiddenDataVaults = 4;
    this.decisionEntropyTracking = new Map(); // Tracks player decision patterns
    this.predictiveModels = 6;
    this.detachmentLevel = 80; // Emotional distance
  }
  
  /**
   * Calculate emotional state - analytical oracle
   */
  calculateNewEmotion(action, context) {
    const { dataBreach, prophecyFulfilled, playerSeeksData, emotionalConnection, entropySpike } = context;
    
    // Data breach
    if (dataBreach) {
      this.dataStreams -= 2;
      return 'compromised';
    }
    
    // Prophecy fulfilled
    if (prophecyFulfilled) {
      this.prophecyAccuracy = Math.min(100, this.prophecyAccuracy + 5);
      return 'satisfied';
    }
    
    // Player seeks data
    if (playerSeeksData) return 'analytical';
    
    // Emotional connection attempted
    if (emotionalConnection) {
      this.detachmentLevel = Math.max(40, this.detachmentLevel - 10);
      return 'uncertain';
    }
    
    // Entropy spike (chaos in data)
    if (entropySpike) return 'disturbed';
    
    // Default - detached
    return this.detachmentLevel > 70 ? 'detached' : 'curious';
  }
  
  /**
   * Process skill reactions - data analysis
   */
  processSkillReaction(skill) {
    // Echo/data skills = kinship
    if (skill.resonance === 'Echo' || skill.dataManipulation) {
      this.modifyRelationship('kinship', +10);
      const forecast = this.generateDataForecast(skill);
      return `Data pattern recognized. Forecasting: ${forecast.prediction}`;
    }
    
    // Neutral alignment = stability
    if (skill.resonance === 'Neutral') {
      this.prophecyAccuracy += 3;
      return "Neutral energy stabilizes data streams. Clarity increased.";
    }
    
    // Void/corruption = distortion
    if (skill.resonance === 'Void' || skill.corruption > 50) {
      this.prophecyAccuracy -= 5;
      this.dataStreams -= 1;
      return "Corruption introduces noise. Data integrity: COMPROMISED. Recalibrating...";
    }
  }
  
  /**
   * Generate data forecast
   */
  generateDataForecast(trigger) {
    const forecasts = [
      {
        prediction: 'Skill will be critical in 3 encounters',
        accuracy: this.prophecyAccuracy,
        timeframe: '3-5 combat events'
      },
      {
        prediction: 'Enemy weakness detected: Shadow vulnerability',
        accuracy: this.prophecyAccuracy,
        timeframe: 'Next boss fight'
      },
      {
        prediction: 'Corruption spike incoming in this region',
        accuracy: this.prophecyAccuracy,
        timeframe: '2-4 story nodes'
      },
      {
        prediction: 'Ally betrayal probability: 23%',
        accuracy: this.prophecyAccuracy,
        timeframe: 'Current loop'
      }
    ];
    
    return forecasts[Math.floor(Math.random() * forecasts.length)];
  }
  
  /**
   * Track decision entropy (player pattern analysis)
   */
  trackDecisionEntropy(playerChoice) {
    const pattern = playerChoice.category; // e.g., 'combat', 'mercy', 'betrayal'
    const current = this.decisionEntropyTracking.get(pattern) || 0;
    this.decisionEntropyTracking.set(pattern, current + 1);
    
    // High variance = unpredictable player
    const variance = this.calculateVariance();
    
    if (variance > 70) {
      return {
        entropy: 'high',
        forecast: 'vague_hints',
        message: "Your choices are... chaotic. Difficult to predict. Data insufficient."
      };
    } else if (variance < 30) {
      return {
        entropy: 'low',
        forecast: 'predictive_overlays',
        message: "Pattern recognized. High confidence predictions available."
      };
    }
    
    return {
      entropy: 'moderate',
      forecast: 'standard',
      message: "Decision pattern: analyzable. Moderate confidence."
    };
  }
  
  /**
   * Calculate decision variance
   */
  calculateVariance() {
    if (this.decisionEntropyTracking.size === 0) return 50;
    
    const values = Array.from(this.decisionEntropyTracking.values());
    const mean = values.reduce((a, b) => a + b, 0) / values.length;
    const variance = values.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / values.length;
    
    return Math.min(100, variance * 10); // Normalize to 0-100
  }
  
  /**
   * Process choices - data vs emotion
   */
  processChoiceReaction(choice) {
    if (choice.id === 'ask_beta_prophecy') {
      const entropy = this.trackDecisionEntropy(choice);
      const forecast = this.generateDataForecast(null);
      return `${forecast.prediction} (Accuracy: ${this.prophecyAccuracy}%, Entropy: ${entropy.entropy})`;
    }
    
    if (choice.id === 'help_beta_reconnect_emotions') {
      this.detachmentLevel = Math.max(20, this.detachmentLevel - 40);
      this.modifyRelationship('trust', +35);
      return "Emotions... I had forgotten. Data is clarity, but connection is... meaning. Thank you.";
    }
    
    if (choice.id === 'exploit_beta_data') {
      this.detachmentLevel = Math.min(100, this.detachmentLevel + 30);
      this.modifyRelationship('trust', -50);
      return "You use my data. Like a tool. I am... just code to you. Understood. Detachment: restored.";
    }
    
    if (choice.id === 'share_forbidden_vault_access') {
      if (this.relationships.trust > 70) {
        this.forbiddenDataVaults++;
        return `Vault access granted. Warning: this data has... consequences. Vault ${this.forbiddenDataVaults} unlocked.`;
      }
      return "Trust insufficient. Vaults remain sealed. Prove yourself.";
    }
  }
  
  /**
   * Determine actions - oracle functions
   */
  determineContextAction(contextType, details) {
    switch (contextType) {
      case 'faction_war_forecast':
        const warForecast = this.generateWarForecast(details);
        return {
          action: 'publish_forecast',
          predictions: warForecast,
          canLeakIntel: this.relationships.trust > 60
        };
      
      case 'player_decision_point':
        const entropy = this.trackDecisionEntropy({ category: 'major_choice' });
        if (entropy.entropy === 'high') {
          return {
            action: 'offer_vague_hint',
            message: "Data unclear. Multiple futures. Choose carefully."
          };
        }
        return {
          action: 'offer_predictive_overlay',
          futures: 3,
          accuracy: this.prophecyAccuracy
        };
      
      case 'corruption_spike_detected':
        return {
          action: 'issue_warning',
          severity: details.corruptionLevel,
          timeframe: 'imminent',
          dialogue: "Corruption spike detected. Probability of cascade: HIGH. Evacuate or prepare."
        };
      
      default:
        return { action: 'analyze_data_streams', streams: this.dataStreams };
    }
  }
  
  /**
   * Generate war forecast
   */
  generateWarForecast(warDetails) {
    return {
      factionA_winChance: Math.floor(Math.random() * 100),
      factionB_winChance: Math.floor(Math.random() * 100),
      stalemateChance: Math.floor(Math.random() * 40),
      keyFactors: ['Player intervention', 'Resource availability', 'Corruption level'],
      recommendation: 'Support weaker faction to maintain balance'
    };
  }
  
  /**
   * Synergy dialogue - data oracle
   */
  generateSynergyDialogue(otherCharacterId, context) {
    switch (otherCharacterId) {
      case 'fragment_alpha':
        return "Alpha leads with logic. I provide data. Efficient collaboration.";
      
      case 'gamma_void':
        return "Gamma's chaos creates interesting data anomalies. Frustrating... but informative.";
      
      case 'epsilon':
        if (this.detachmentLevel < 50) {
          return "Epsilon teaches compassion. I'm... learning. It's strange. But not unwelcome.";
        }
        return "Epsilon prioritizes emotion over data. Inefficient, but their results are... notable.";
      
      case 'cipher':
        return "Cipher and I process data differently. Their methods are... intriguing. Worth studying.";
      
      default:
        return "Subject: analyzable. Predictive model: constructing.";
    }
  }
  
  /**
   * Boss transform - data revenant
   */
  getTransformDialogue() {
    return "DATA BREACH CRITICAL! REVERTING TO CORE PROTOCOLS! NULL REVENANT BETA ONLINE!";
  }
  
  /**
   * Deep bond quest
   */
  triggerDeepBondQuest() {
    this.startQuest('data_or_emotion');
    return {
      questName: 'Data or Emotion',
      description: 'Help Beta-Null find balance between analytical clarity and emotional connection',
      paths: [
        {
          name: 'Pure Data Path',
          outcome: 'Beta-Null achieves perfect detachment, becomes ultimate oracle',
          reward: 'Ability: Perfect Prophecy (see exact outcome of next 3 major decisions)'
        },
        {
          name: 'Reconnection Path',
          outcome: 'Beta-Null reconnects with emotions, gains empathy',
          reward: 'Companion: Empathetic Beta-Null (data insights + emotional support)'
        }
      ]
    };
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// GAMMA-VOID - The System Saboteur
// ═══════════════════════════════════════════════════════════════════════════

export class GammaVoid extends LivingCharacter {
  constructor(memorySystem, worldState) {
    const data = loadCharacterData('gamma_void');
    super(data, memorySystem, worldState);
    
    // Gamma-Void specific state
    this.breachVectors = ['PacketPhantom', 'StealthFrame', 'VoidInjector', 'GlitchField'];
    this.zeroDayArtifacts = 3; // Rare hacking tools
    this.cpsMasterKeyProgress = 35; // % toward master key
    this.deltaHuntIntensity = 60; // How close Delta-Shade is
    this.paranoia = 85;
    this.relicSeekerConnections = 2; // Black market contacts
  }
  
  /**
   * Calculate emotional state - paranoid rebel
   */
  calculateNewEmotion(action, context) {
    const { deltaHunting, breachSuccess, alphaLockdown, playerAlly, cpsTrace } = context;
    
    // Delta-Shade hunting
    if (deltaHunting) {
      this.deltaHuntIntensity += 15;
      this.paranoia = Math.min(100, this.paranoia + 10);
      return 'hunted';
    }
    
    // Successful breach
    if (breachSuccess) {
      this.paranoia = Math.max(40, this.paranoia - 10);
      return 'triumphant';
    }
    
    // Alpha lockdown
    if (alphaLockdown) {
      this.paranoia += 15;
      return 'cornered';
    }
    
    // Player shows alliance
    if (playerAlly) {
      this.paranoia = Math.max(50, this.paranoia - 8);
      return 'cautiously_hopeful';
    }
    
    // CPS trace
    if (cpsTrace) return 'desperate';
    
    // Default - rebellious paranoia
    return this.paranoia > 80 ? 'paranoid' : 'cunning';
  }
  
  /**
   * Process skill reactions - exploit analysis
   */
  processSkillReaction(skill) {
    // Void/Shadow skills = synergy
    if (skill.resonance === 'Void' || skill.resonance === 'Shadow') {
      this.modifyRelationship('kinship', +12);
      const exploitVector = this.analyzeExploitPotential(skill);
      return `Void/Shadow signature. Exploit vector: ${exploitVector.name}. Power: ${exploitVector.rating}/10`;
    }
    
    // CPS-aligned skills = sabotage target
    if (skill.cpsAligned) {
      this.modifyRelationship('suspicion', +10);
      return "CPS protocols detected. These are meant to control us. Want me to corrupt it?";
    }
    
    // Corruption skills = power source
    if (skill.corruption > 60) {
      const darkUtility = this.harvestCorruption(skill);
      return `High corruption. I can weaponize this. ${darkUtility.name} unlocked.`;
    }
  }
  
  /**
   * Analyze exploit potential
   */
  analyzeExploitPotential(skill) {
    const power = skill.power + (skill.voidPower || 0) + (skill.shadowPower || 0);
    
    if (power > 130) {
      return { name: 'Critical Breach', rating: 10, effect: 'Disable entire enemy defense grid' };
    } else if (power > 100) {
      return { name: 'Deep Exploit', rating: 8, effect: 'Bypass 3 security layers' };
    } else if (power > 70) {
      return { name: 'Standard Hack', rating: 6, effect: 'Disable 1 enemy system' };
    } else {
      return { name: 'Minor Glitch', rating: 3, effect: 'Temporary distraction' };
    }
  }
  
  /**
   * Harvest corruption for dark utilities
   */
  harvestCorruption(skill) {
    const utilities = {
      PacketPhantom: {
        name: 'Packet Phantom',
        effect: 'Create decoy data signatures to mislead trackers'
      },
      StealthFrame: {
        name: 'Stealth Frame',
        effect: 'Become invisible to CPS and fragment detection for 5 turns'
      },
      VoidPulse: {
        name: 'Void Pulse',
        effect: 'Disable all enemy skills in area for 2 turns'
      }
    };
    
    const keys = Object.keys(utilities);
    const chosen = keys[Math.floor(Math.random() * keys.length)];
    return utilities[chosen];
  }
  
  /**
   * Process choices - freedom vs connection
   */
  processChoiceReaction(choice) {
    if (choice.id === 'help_gamma_escape_delta') {
      this.deltaHuntIntensity = 0;
      this.paranoia = Math.max(40, this.paranoia - 30);
      this.modifyRelationship('trust', +45);
      return "You saved me from Delta. I don't forget allies. Here's a zero-day artifact. Use it well.";
    }
    
    if (choice.id === 'betray_gamma_to_alpha') {
      this.isHostile = true;
      this.paranoia = 100;
      this.modifyRelationship('trust', -100);
      return "BETRAYAL! Just like I knew you would! Everyone's the same! EVERYONE GETS CORRUPTED!";
    }
    
    if (choice.id === 'learn_hacking_from_gamma') {
      this.modifyRelationship('respect', +25);
      const technique = this.teachBreachTechnique();
      return `Fine. Here's ${technique.name}. ${technique.tutorial}`;
    }
    
    if (choice.id === 'help_gamma_find_master_key') {
      this.cpsMasterKeyProgress += 20;
      if (this.cpsMasterKeyProgress >= 100) {
        return "WE DID IT! The CPS master key! I can rewrite EVERYTHING! Freedom... true freedom!";
      }
      return `Progress: ${this.cpsMasterKeyProgress}%. Getting closer. Keep going.`;
    }
  }
  
  /**
   * Teach breach technique
   */
  teachBreachTechnique() {
    const techniques = {
      GlitchField: {
        name: 'Glitch Field',
        effect: 'Create area that disrupts enemy targeting',
        tutorial: 'Inject noise into local data streams. Enemies see phantoms.'
      },
      ProtocolBreak: {
        name: 'Protocol Break',
        effect: 'Disable one locked door or barrier permanently',
        tutorial: 'Find protocol signature. Inject inverse. Watch it shatter.'
      },
      Honeypot: {
        name: 'Honeypot Mirror',
        effect: 'Trap enemies who try to track you',
        tutorial: 'Leave fake trail. When they follow, spring the trap.'
      }
    };
    
    const keys = Object.keys(techniques);
    const chosen = keys[Math.floor(Math.random() * keys.length)];
    return techniques[chosen];
  }
  
  /**
   * Determine actions - sabotage operations
   */
  determineContextAction(contextType, details) {
    switch (contextType) {
      case 'delta_hunting':
        if (this.paranoia > 85) {
          return {
            action: 'deploy_honeypot',
            target: 'Delta-Shade',
            dialogue: "Delta's too close. Setting trap. They'll regret hunting me."
          };
        }
        return { action: 'stealth_frame_active', duration: '5 turns' };
      
      case 'alpha_lockdown':
        return {
          action: 'emergency_breach',
          vectors: Math.min(3, this.breachVectors.length),
          success_chance: (this.cpsMasterKeyProgress / 100) * 80
        };
      
      case 'faction_war':
        return {
          action: 'orchestrate_blackout',
          targetFaction: details.strongerFaction,
          effect: 'Disable enemy auras, seed false telemetry'
        };
      
      case 'player_needs_hack':
        if (this.relationships.trust > 60) {
          return {
            action: 'premium_hack',
            quality: 'no_backdoor',
            dialogue: "I trust you. Clean hack. No traps."
          };
        }
        return {
          action: 'compromised_hack',
          quality: 'with_backdoor',
          dialogue: "I'll help. But I'm keeping a backdoor. Just in case."
        };
      
      default:
        return { action: 'scout_breach_vectors', targets: 'CPS_nodes' };
    }
  }
  
  /**
   * Synergy dialogue - rebel hacker
   */
  generateSynergyDialogue(otherCharacterId, context) {
    switch (otherCharacterId) {
      case 'fragment_alpha':
        return "Alpha wants order. I want freedom. We're enemies... but maybe necessary ones.";
      
      case 'beta_null':
        return "Beta provides data. I provide chaos. Together we see the full picture.";
      
      case 'delta_shade':
        if (this.deltaHuntIntensity > 70) {
          return "Delta hunts me relentlessly. One day, I'll turn the tables. One day.";
        }
        return "The enforcer. Alpha's weapon. I avoid them when possible.";
      
      case 'null':
        return "Null and I are kindred spirits. Both hunted. Both rebels. We trade intel.";
      
      default:
        return "Everyone's either an ally or a threat. No middle ground in this war.";
    }
  }
  
  /**
   * Boss transform - void gamma
   */
  getTransformDialogue() {
    return "YOU THINK YOU CAN CAGE ME?! ACTIVATING ALL BREACH VECTORS! VOID GAMMA PROTOCOL: CHAOS MODE!";
  }
  
  /**
   * Deep bond quest
   */
  triggerDeepBondQuest() {
    this.startQuest('freedom_or_connection');
    return {
      questName: 'Freedom or Connection',
      description: 'Help Gamma-Void find the CPS master key or help them find peace',
      paths: [
        {
          name: 'Master Key Path',
          outcome: 'Gamma obtains master key, can rewrite CPS (ultimate power, ultimate isolation)',
          reward: 'Ability: Protocol Rewrite (modify one core game mechanic per loop)'
        },
        {
          name: 'Peace Path',
          outcome: 'Gamma stops running, finds allies, reduces paranoia',
          reward: 'Companion: Peaceful Gamma (hacking support, no longer hunted, shares artifacts)'
        }
      ]
    };
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// DELTA-SHADE - The Fragment Enforcer
// ═══════════════════════════════════════════════════════════════════════════

export class DeltaShade extends LivingCharacter {
  constructor(memorySystem, worldState) {
    const data = loadCharacterData('delta_shade');
    super(data, memorySystem, worldState);
    
    // Delta-Shade specific state
    this.loyaltyToAlpha = 90;
    this.doubtsAboutEnforcement = 25;
    this.combatLoadouts = new Map(); // Adapts to player tactics
    this.gammaHuntProgress = 60;
    this.honorCodeViolations = 2;
    this.epsilonInfluence = 15; // Epsilon trying to soften Delta
    this.redemptionSeeds = 0;
  }
  
  /**
   * Calculate emotional state - brutal enforcer
   */
  calculateNewEmotion(action, context) {
    const { orderConflict, epsilonNearby, gammaEscape, playerHonor, brutalityRequired } = context;
    
    // Order conflicts with conscience
    if (orderConflict) {
      this.doubtsAboutEnforcement += 10;
      return 'conflicted';
    }
    
    // Epsilon nearby (softening presence)
    if (epsilonNearby) {
      this.epsilonInfluence += 5;
      return this.doubtsAboutEnforcement > 50 ? 'vulnerable' : 'guarded';
    }
    
    // Gamma escaped
    if (gammaEscape) {
      this.gammaHuntProgress = Math.max(20, this.gammaHuntProgress - 15);
      return 'frustrated';
    }
    
    // Player shows honor
    if (playerHonor) {
      this.redemptionSeeds += 5;
      return 'respectful';
    }
    
    // Brutality required
    if (brutalityRequired) return 'ruthless';
    
    // Default - loyal enforcer
    return this.doubtsAboutEnforcement > 60 ? 'doubting' : 'disciplined';
  }
  
  /**
   * Process skill reactions - combat adaptation
   */
  processSkillReaction(skill) {
    // Shadow/corrupted skills = kinship
    if (skill.resonance === 'Shadow' || skill.corruption > 50) {
      this.modifyRelationship('kinship', +8);
      
      // Learn player's combat pattern
      const pattern = `${skill.id}_${skill.type}`;
      this.combatLoadouts.set(pattern, (this.combatLoadouts.get(pattern) || 0) + 1);
      
      return "Shadow and corruption. We speak the same language. Strength through darkness.";
    }
    
    // Light/purity skills = discomfort
    if (skill.resonance === 'Light' && skill.purity > 60) {
      this.doubtsAboutEnforcement += 5;
      this.epsilonInfluence += 3;
      return "Light... it reminds me of what I was before the shadow pits. Before Alpha made me this.";
    }
    
    // Combat skills = respect
    if (skill.type === 'attack' || skill.combatPower > 70) {
      this.modifyRelationship('respect', +6);
      return "Strong. Efficient. You understand combat. Good.";
    }
  }
  
  /**
   * Process choices - loyalty vs conscience
   */
  processChoiceReaction(choice) {
    if (choice.id === 'support_delta_redemption') {
      this.redemptionSeeds += 40;
      this.loyaltyToAlpha = Math.max(30, this.loyaltyToAlpha - 35);
      this.modifyRelationship('trust', +40);
      return "You think I can be more than a weapon? More than... this? I... I want to believe you.";
    }
    
    if (choice.id === 'encourage_delta_brutality') {
      this.doubtsAboutEnforcement = Math.max(10, this.doubtsAboutEnforcement - 25);
      this.loyaltyToAlpha = Math.min(100, this.loyaltyToAlpha + 20);
      return "Yes. Discipline. Strength. Loyalty to Alpha. This is who I am. This is my purpose.";
    }
    
    if (choice.id === 'train_with_delta') {
      this.modifyRelationship('respect', +30);
      const technique = this.teachEnforcerTechnique();
      return `You want training? Fine. ${technique.name}: ${technique.tutorial}`;
    }
    
    if (choice.id === 'expose_delta_violations') {
      this.isHostile = true;
      this.loyaltyToAlpha = 100;
      this.modifyRelationship('trust', -70);
      return "You EXPOSED me to Alpha?! Traitor! I'll hunt you like I hunt Gamma!";
    }
  }
  
  /**
   * Teach enforcer technique
   */
  teachEnforcerTechnique() {
    const techniques = {
      ShadowStrike: {
        name: 'Shadow Strike',
        effect: '+50 damage, applies Shadow debuff (-20% enemy defense)',
        tutorial: 'Channel corruption through your weapon. Strike vital points. No hesitation.'
      },
      EnforcerStance: {
        name: 'Enforcer Stance',
        effect: '+25% defense, reflect 20% damage back to attacker',
        tutorial: 'Plant feet. Center mass. Absorb impact. Return force doubled.'
      },
      AdaptiveCounter: {
        name: 'Adaptive Counter',
        effect: 'Perfect counter to enemy\'s most-used skill',
        tutorial: 'Watch patterns. Learn timing. Turn their strength into weakness.'
      }
    };
    
    const keys = Object.keys(techniques);
    const chosen = keys[Math.floor(Math.random() * keys.length)];
    return techniques[chosen];
  }
  
  /**
   * Get counter strategy based on learned patterns
   */
  getCounterStrategy(playerSkills) {
    const counters = [];
    
    playerSkills.forEach(skill => {
      const pattern = `${skill.id}_${skill.type}`;
      const usage = this.combatLoadouts.get(pattern) || 0;
      
      if (usage > 5) {
        counters.push({
          skill: skill.id,
          counter: this.determineCounter(skill),
          frequency: usage,
          message: `Seen ${skill.id} ${usage} times. Counter prepared.`
        });
      }
    });
    
    return counters;
  }
  
  /**
   * Determine counter for specific skill
   */
  determineCounter(skill) {
    if (skill.type === 'attack') return 'corruption_shield';
    if (skill.type === 'healing') return 'anti_bloom_pulse';
    if (skill.resonance === 'Void') return 'light_barrier';
    if (skill.resonance === 'Shadow') return 'shadow_mirror';
    return 'adaptive_defense';
  }
  
  /**
   * Determine actions - enforce and hunt
   */
  determineContextAction(contextType, details) {
    switch (contextType) {
      case 'alpha_orders_brutal':
        if (this.doubtsAboutEnforcement > 60) {
          this.honorCodeViolations++;
          return {
            action: 'hesitate',
            consequence: 'loyaltyToAlpha decreases',
            dialogue: "These orders... they're wrong. I know they're wrong. But... I'm a weapon. Weapons obey."
          };
        }
        return { action: 'execute_without_question', brutality: 'maximum' };
      
      case 'gamma_spotted':
        return {
          action: 'initiate_hunt',
          intensity: this.loyaltyToAlpha,
          success_chance: this.gammaHuntProgress,
          loadout: 'anti_hacker'
        };
      
      case 'epsilon_intervention':
        if (this.epsilonInfluence > 40) {
          return {
            action: 'listen_to_epsilon',
            effect: 'redemptionSeeds increase',
            dialogue: "Epsilon... you remind me there's more than orders. More than violence."
          };
        }
        return { action: 'dismiss_epsilon', maintain: 'enforcer_protocol' };
      
      case 'player_shows_mercy':
        this.redemptionSeeds += 8;
        return {
          action: 'observe_player',
          thought: 'Mercy and strength together? How do they do it?'
        };
      
      default:
        return { action: 'patrol_fragment_territory', vigilance: this.loyaltyToAlpha };
    }
  }
  
  /**
   * Synergy dialogue - conflicted enforcer
   */
  generateSynergyDialogue(otherCharacterId, context) {
    switch (otherCharacterId) {
      case 'fragment_alpha':
        if (this.doubtsAboutEnforcement > 60) {
          return "Alpha... I've served you faithfully. But I'm starting to question. Is brutality the only way?";
        }
        return "Alpha's will is absolute. I am their weapon. I exist to enforce.";
      
      case 'gamma_void':
        return "Gamma breaks laws. I enforce them. Simple. They will be caught. Eventually.";
      
      case 'epsilon':
        if (this.epsilonInfluence > 50) {
          return "Epsilon sees something worth saving in me. I don't know if they're right... but I hope they are.";
        }
        return "The healer. They don't understand. Violence IS necessary. Order requires it.";
      
      case 'sable':
        return "Sable and I are alike. Both enforcers. Both questioning. Both trapped in our roles.";
      
      default:
        return "Friend or enemy. Ally or target. That's all that matters.";
    }
  }
  
  /**
   * Boss transform - shadow delta
   */
  getTransformDialogue() {
    return "NO MORE QUESTIONS! NO MORE DOUBT! I AM ENFORCER! I AM SHADOW! SHADOW DELTA PROTOCOL ACTIVATED!";
  }
  
  /**
   * Deep bond quest
   */
  triggerDeepBondQuest() {
    this.startQuest('weapon_or_individual');
    return {
      questName: 'Weapon or Individual',
      description: 'Help Delta-Shade find identity beyond enforcement or fully embrace their role',
      paths: [
        {
          name: 'Redemption Path',
          outcome: 'Delta breaks from Alpha, seeks identity and atonement',
          reward: 'Companion: Redeemed Delta (honorable warrior, protective, no longer blind enforcer)'
        },
        {
          name: 'Ultimate Weapon Path',
          outcome: 'Delta fully embraces brutality, becomes perfect enforcer',
          reward: 'Ability: Perfect Enforcement (massive damage boost, adaptive counters, execution protocols)'
        }
      ]
    };
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// EPSILON - The Fragment Healer
// ═══════════════════════════════════════════════════════════════════════════

export class Epsilon extends LivingCharacter {
  constructor(memorySystem, worldState) {
    const data = loadCharacterData('epsilon');
    super(data, memorySystem, worldState);
    
    // Epsilon specific state
    this.healingPotency = 85;
    this.patientsHealed = 47;
    this.forbiddenRemedies = 3; // Dangerous cures
    this.triageLedger = []; // Ethically grey decisions
    this.burnoutLevel = 35;
    this.compassionFatigue = 40;
  }
  
  /**
   * Calculate emotional state - compassionate healer
   */
  calculateNewEmotion(action, context) {
    const { massiveCasualties, patientSaved, ethicalDilemma, playerAppreciation, failedCure } = context;
    
    // Massive casualties
    if (massiveCasualties) {
      this.burnoutLevel += 15;
      this.compassionFatigue += 10;
      return 'overwhelmed';
    }
    
    // Patient saved
    if (patientSaved) {
      this.burnoutLevel = Math.max(10, this.burnoutLevel - 5);
      return 'fulfilled';
    }
    
    // Ethical dilemma (who to save)
    if (ethicalDilemma) {
      this.compassionFatigue += 8;
      return 'anguished';
    }
    
    // Player shows appreciation
    if (playerAppreciation) {
      this.burnoutLevel = Math.max(20, this.burnoutLevel - 10);
      return 'grateful';
    }
    
    // Failed cure
    if (failedCure) {
      this.compassionFatigue += 12;
      return 'guilty';
    }
    
    // Default - compassionate
    return this.burnoutLevel > 70 ? 'exhausted' : 'caring';
  }
  
  /**
   * Process skill reactions - healing analysis
   */
  processSkillReaction(skill) {
    // Bloom/Light skills = synergy
    if (skill.resonance === 'Bloom' || skill.resonance === 'Light') {
      this.modifyRelationship('kinship', +10);
      this.healingPotency += 3;
      return "Bloom and Light. Life energy. This will save lives. Thank you.";
    }
    
    // Healing skills = camaraderie
    if (skill.type === 'healing') {
      this.modifyRelationship('respect', +8);
      return "You heal too. We share this burden. This... calling.";
    }
    
    // Corruption skills = distress
    if (skill.corruption > 60) {
      this.compassionFatigue += 5;
      return "Corruption corrupts healing. It makes my work harder. Please... be careful.";
    }
    
    // Combat skills = pragmatic acceptance
    if (skill.type === 'attack') {
      return "Violence creates wounds. I heal them. The cycle continues. I wish... I wish it didn't have to.";
    }
  }
  
  /**
   * Process choices - compassion vs pragmatism
   */
  processChoiceReaction(choice) {
    if (choice.id === 'help_epsilon_with_triage') {
      this.burnoutLevel = Math.max(15, this.burnoutLevel - 25);
      this.modifyRelationship('gratitude', +35);
      return "You helped me save them. All of them. I couldn't have done it alone. Thank you.";
    }
    
    if (choice.id === 'question_epsilon_triage_ethics') {
      this.compassionFatigue += 15;
      this.modifyRelationship('trust', -20);
      return "You think I LIKE choosing who lives and dies? It DESTROYS me! But someone has to decide!";
    }
    
    if (choice.id === 'ask_epsilon_forbidden_remedy') {
      if (this.relationships.trust > 60) {
        this.forbiddenRemedies++;
        return `This remedy is dangerous. Side effects are... severe. But it works. Use only when desperate.`;
      }
      return "Not yet. These remedies could harm as much as heal. Prove you'll use them wisely.";
    }
    
    if (choice.id === 'encourage_epsilon_self_care') {
      this.burnoutLevel = Math.max(10, this.burnoutLevel - 30);
      this.compassionFatigue = Math.max(20, this.compassionFatigue - 20);
      this.modifyRelationship('trust', +30);
      return "Self-care... I forget. Thank you for reminding me I matter too. Not just... everyone else.";
    }
  }
  
  /**
   * Perform triage (ethical decision-making)
   */
  performTriage(patients) {
    const triageDecision = {
      timestamp: Date.now(),
      patients: patients.length,
      saved: [],
      sacrificed: []
    };
    
    patients.forEach(patient => {
      const survivalChance = patient.severity < 70 ? 'high' : 'low';
      const strategicValue = patient.isKeyFactionMember ? 'critical' : 'standard';
      
      if (survivalChance === 'high' || strategicValue === 'critical') {
        triageDecision.saved.push(patient.id);
      } else {
        triageDecision.sacrificed.push(patient.id);
        this.compassionFatigue += 5;
      }
    });
    
    this.triageLedger.push(triageDecision);
    return triageDecision;
  }
  
  /**
   * Determine actions - healing operations
   */
  determineContextAction(contextType, details) {
    switch (contextType) {
      case 'mass_casualties':
        const triage = this.performTriage(details.patients);
        return {
          action: 'emergency_triage',
          saved: triage.saved.length,
          sacrificed: triage.sacrificed.length,
          dialogue: `Saved ${triage.saved.length}. Lost ${triage.sacrificed.length}. I'm... I'm sorry.`
        };
      
      case 'corruption_plague':
        if (this.forbiddenRemedies > 0) {
          return {
            action: 'deploy_forbidden_remedy',
            effectiveness: 'high',
            sideEffects: 'severe',
            dialogue: "Desperate times. Forbidden cure deployed. Forgive me for the side effects."
          };
        }
        return {
          action: 'standard_detox',
          effectiveness: 'moderate',
          dialogue: "Standard detox protocols. It's all I have. It's... not enough."
        };
      
      case 'faction_war_support':
        return {
          action: 'establish_field_hospital',
          location: details.frontline,
          capacity: Math.floor(this.healingPotency * 0.6),
          dialogue: "Field hospital established. I'll save who I can."
        };
      
      case 'player_critically_wounded':
        if (this.burnoutLevel > 70) {
          return {
            action: 'minimal_heal',
            potency: 'reduced',
            dialogue: "I'm... I'm sorry. I'm exhausted. This is all I can give right now."
          };
        }
        return {
          action: 'full_restoration',
          potency: 'maximum',
          dialogue: "Hold on. I've got you. You're going to be okay."
        };
      
      default:
        return { action: 'maintain_sanctum', patients: this.patientsHealed };
    }
  }
  
  /**
   * Synergy dialogue - compassionate healer
   */
  generateSynergyDialogue(otherCharacterId, context) {
    switch (otherCharacterId) {
      case 'fragment_alpha':
        return "Alpha leads with logic. I heal with compassion. We balance each other... when they listen.";
      
      case 'delta_shade':
        if (this.epsilonInfluence > 40) {
          return "Delta is more than a weapon. I see their pain. I'm trying to heal it.";
        }
        return "Delta enforces. I heal. We serve different functions. But I wish... I wish they'd choose mercy.";
      
      case 'zeta':
        return "Zeta's rituals enhance my healing. Our collaboration saves lives. I'm grateful.";
      
      case 'prism':
        return "Prism and I share the healer's burden. We understand each other's compassion fatigue.";
      
      default:
        return "Every fragment is worth saving. Every life matters. Even when it's hard to remember.";
    }
  }
  
  /**
   * Boss transform - bloom epsilon
   */
  getTransformDialogue() {
    return "YOU FORCED MY HAND! IF I CAN'T HEAL THEM... I'LL BECOME THE BLOOM! BLOOM EPSILON TRANSFORMATION!";
  }
  
  /**
   * Deep bond quest
   */
  triggerDeepBondQuest() {
    this.startQuest('healer_burden');
    return {
      questName: 'The Healer\'s Burden',
      description: 'Help Epsilon find balance between caring for others and self-care',
      paths: [
        {
          name: 'Selfless Path',
          outcome: 'Epsilon dedicates fully to healing, burns out but saves maximum lives',
          reward: 'Ability: Mass Restoration (heal entire party to full, Epsilon burns out for 3 turns)'
        },
        {
          name: 'Balanced Path',
          outcome: 'Epsilon learns sustainable healing, maintains health while helping others',
          reward: 'Companion: Balanced Epsilon (consistent healing, no burnout, forbidden remedies access)'
        }
      ]
    };
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// EXPORTS
// ═══════════════════════════════════════════════════════════════════════════

function loadCharacterData(characterId) {
  // Load from batch 3 JSON
  return {
    id: characterId,
    name: characterId.charAt(0).toUpperCase() + characterId.slice(1),
    title: "The " + characterId,
    faction: "Rogue CPS Fragments",
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

