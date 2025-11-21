// ═══════════════════════════════════════════════════════════════════════════
// MIXED BATCH 4 - 8 CHARACTERS
// Completing Rogue CPS Fragments (Zeta, Theta) + Starting other factions
// ═══════════════════════════════════════════════════════════════════════════

import { LivingCharacter } from './LivingCharacterSystem.js';

// ═══════════════════════════════════════════════════════════════════════════
// ZETA - The Ritualist (Rogue CPS Fragment)
// ═══════════════════════════════════════════════════════════════════════════

export class Zeta extends LivingCharacter {
  constructor(memorySystem, worldState) {
    const data = loadCharacterData('zeta');
    super(data, memorySystem, worldState);
    
    // Zeta specific state
    this.ritualMastery = 80;
    this.forbiddenChronicles = 5;
    this.overclockRites = 2; // Secret dangerous rituals
    this.fragmentStability = 70; // Risk from overclock
    this.ritualAttenuation = 0; // Penalty for repetition
    this.compositeInvocations = [];
  }
  
  calculateNewEmotion(action, context) {
    const { ritualSuccess, ritualFailure, playerInnovation, alphaApproval, stabilityThreat } = context;
    
    if (ritualSuccess) {
      this.ritualMastery = Math.min(100, this.ritualMastery + 3);
      return 'triumphant';
    }
    
    if (ritualFailure) {
      this.fragmentStability -= 10;
      return 'obsessed';
    }
    
    if (playerInnovation) {
      this.ritualAttenuation = 0;
      return 'inspired';
    }
    
    if (alphaApproval) return 'validated';
    if (stabilityThreat) return 'desperate';
    
    return this.fragmentStability < 40 ? 'unstable' : 'focused';
  }
  
  processSkillReaction(skill) {
    if (skill.resonance === 'Echo' || skill.resonance === 'Void') {
      this.modifyRelationship('kinship', +10);
      const ritualBonus = this.calculateRitualBonus(skill);
      return `Echo/Void detected. Ritual enhancement: ${ritualBonus}%. Integrating into pattern.`;
    }
    
    if (skill.ritualBased) {
      this.modifyRelationship('respect', +12);
      return "A fellow ritualist. Your patterns are... intriguing. Care to collaborate?";
    }
    
    if (skill.corruption > 60) {
      this.fragmentStability -= 8;
      return "Corruption interferes with ritual precision. Dangerous... but powerful.";
    }
  }
  
  calculateRitualBonus(skill) {
    const base = skill.power * 0.6;
    const masteryBonus = this.ritualMastery * 0.4;
    return Math.floor(base + masteryBonus);
  }
  
  processChoiceReaction(choice) {
    if (choice.id === 'learn_ritual_from_zeta') {
      this.modifyRelationship('respect', +25);
      const ritual = this.teachRitual();
      return `Pattern Refactor initiated. ${ritual.name}: ${ritual.effect}`;
    }
    
    if (choice.id === 'expose_overclock_rites') {
      this.isHostile = true;
      this.fragmentStability = 20;
      this.modifyRelationship('trust', -80);
      return "YOU EXPOSED THE OVERCLOCKS?! Fragment leadership will PURGE me! Traitor!";
    }
    
    if (choice.id === 'help_zeta_stabilize') {
      this.fragmentStability = Math.min(90, this.fragmentStability + 40);
      this.modifyRelationship('gratitude', +35);
      return "Stability restored. I can continue my work. Thank you.";
    }
    
    if (choice.id === 'request_composite_invocation') {
      if (this.relationships.trust > 60) {
        const composite = this.createCompositeInvocation();
        return `Composite unlocked: ${composite.name}. ${composite.components.join(' + ')} = ${composite.effect}`;
      }
      return "Trust insufficient. Composite patterns are dangerous. Prove yourself first.";
    }
  }
  
  teachRitual() {
    const rituals = {
      PatternRefactor: {
        name: 'Pattern Refactor',
        effect: 'Enhance ritual by 40%, reduce miscast chance',
        reagents: ['Echo Shard', 'Void Crystal']
      },
      StabilizationRite: {
        name: 'Stabilization Rite',
        effect: 'Prevent corruption spread for 5 turns',
        reagents: ['Light Essence', 'Fragment Core']
      },
      CompositeWeave: {
        name: 'Composite Weave',
        effect: 'Combine two rituals into one invocation',
        reagents: ['Pattern Matrix', 'Echo Thread', 'Catalyst']
      }
    };
    
    const keys = Object.keys(rituals);
    const chosen = keys[Math.floor(Math.random() * keys.length)];
    return rituals[chosen];
  }
  
  createCompositeInvocation() {
    const composites = [
      {
        name: 'Echo-Void Cascade',
        components: ['Echo Pulse', 'Void Channel'],
        effect: 'Deal damage + create echo copies that continue attacking'
      },
      {
        name: 'Light-Bloom Sanctuary',
        components: ['Light Ward', 'Bloom Heal'],
        effect: 'Healing zone that also cleanses corruption'
      },
      {
        name: 'Shadow-Fragment Shield',
        components: ['Shadow Cloak', 'Fragment Shield'],
        effect: 'Invisibility + damage reflection'
      }
    ];
    
    const chosen = composites[Math.floor(Math.random() * composites.length)];
    this.compositeInvocations.push(chosen);
    return chosen;
  }
  
  determineContextAction(contextType, details) {
    switch (contextType) {
      case 'faction_war':
        return {
          action: 'perform_ward_ceremony',
          targetFaction: details.ally,
          buffs: ['Defense +25%', 'Corruption Resist +30%'],
          duration: '10 turns'
        };
      
      case 'ritual_request':
        if (this.ritualAttenuation > 50) {
          return {
            action: 'refuse_repetition',
            reason: 'Ritual attenuation too high. Need novel reagent pairing.',
            dialogue: "Same pattern, same components. No. Innovate or leave."
          };
        }
        return { action: 'perform_ritual', quality: this.ritualMastery };
      
      case 'stability_crisis':
        if (this.fragmentStability < 30) {
          return {
            action: 'emergency_stabilization',
            risk: 'high',
            dialogue: "Overclock consequences. Must... stabilize... before dissolution."
          };
        }
        return { action: 'monitor_stability', current: this.fragmentStability };
      
      default:
        return { action: 'study_patterns', mastery: this.ritualMastery };
    }
  }
  
  generateSynergyDialogue(otherCharacterId, context) {
    switch (otherCharacterId) {
      case 'fragment_alpha':
        return "Alpha seeks my rituals to strengthen fragments. I provide... for a price.";
      case 'epsilon':
        return "Epsilon's healing rituals complement my pattern work. Synergy.";
      case 'gamma_void':
        return "Gamma breaks rules. I bend them. We achieve different chaos.";
      default:
        return "Every fragment has a ritual pattern. I study them all.";
    }
  }
  
  getTransformDialogue() {
    return "PATTERN OVERLOAD! RITUAL MATRIX COLLAPSING! VOID ZETA PROTOCOL ACTIVATED!";
  }
  
  triggerDeepBondQuest() {
    this.startQuest('mastery_or_innovation');
    return {
      questName: 'Mastery or Innovation',
      description: 'Help Zeta choose between perfecting traditional rituals or creating new ones',
      paths: [
        { name: 'Tradition Path', outcome: 'Master of classical rituals, perfect execution', reward: 'Ability: Ritual Perfection (zero miscast chance)' },
        { name: 'Innovation Path', outcome: 'Creator of new composite patterns', reward: 'Ability: Composite Mastery (combine any 3 skills into hybrid)' }
      ]
    };
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// THETA - The Data Seer (Rogue CPS Fragment)
// ═══════════════════════════════════════════════════════════════════════════

export class Theta extends LivingCharacter {
  constructor(memorySystem, worldState) {
    const data = loadCharacterData('theta');
    super(data, memorySystem, worldState);
    
    // Theta specific state
    this.forecastAccuracy = 78;
    this.predictiveLattices = 8;
    this.hiddenTimelineModels = 3; // Unauthorized predictions
    this.queryThrottle = 0; // Penalty for repetition
    this.probabilisticModels = new Map();
  }
  
  calculateNewEmotion(action, context) {
    const { forecastFulfilled, dataCorruption, playerDiversity, alphaRequest, collapseRisk } = context;
    
    if (forecastFulfilled) {
      this.forecastAccuracy = Math.min(100, this.forecastAccuracy + 4);
      return 'satisfied';
    }
    
    if (dataCorruption) {
      this.forecastAccuracy -= 8;
      return 'distorted';
    }
    
    if (playerDiversity) {
      this.queryThrottle = 0;
      return 'intrigued';
    }
    
    if (alphaRequest) return 'analytical';
    if (collapseRisk) return 'alarmed';
    
    return this.queryThrottle > 60 ? 'detached' : 'focused';
  }
  
  processSkillReaction(skill) {
    if (skill.resonance === 'Echo' || skill.resonance === 'Neutral') {
      this.modifyRelationship('kinship', +9);
      const prediction = this.generatePrediction(skill);
      return `Data signature logged. Prediction: ${prediction.forecast} (Confidence: ${this.forecastAccuracy}%)`;
    }
    
    if (skill.dataBased || skill.analysis) {
      this.modifyRelationship('respect', +10);
      return "Another data analyst. Your methods are sound. Collaborate?";
    }
    
    if (skill.corruption > 50) {
      this.forecastAccuracy -= 5;
      return "Corruption introduces noise. Predictive models degrading. Recalibrating...";
    }
  }
  
  generatePrediction(trigger) {
    const forecasts = [
      { forecast: 'Skill will be optimal in 2 encounters', confidence: this.forecastAccuracy },
      { forecast: 'Enemy weakness: Void vulnerability detected', confidence: this.forecastAccuracy },
      { forecast: 'Faction war escalation in 3 nodes', confidence: this.forecastAccuracy },
      { forecast: 'Player decision branch: 67% success on Path A', confidence: this.forecastAccuracy }
    ];
    
    return forecasts[Math.floor(Math.random() * forecasts.length)];
  }
  
  processChoiceReaction(choice) {
    if (choice.id === 'request_theta_forecast') {
      if (this.queryThrottle > 60) {
        return "Query repetition detected. Forecast fidelity: COMPRESSED. Diversify your decisions.";
      }
      
      const forecast = this.generateWarForecast();
      this.queryThrottle += 15;
      return `Forecast generated: ${forecast.prediction}. Probability: ${forecast.probability}%`;
    }
    
    if (choice.id === 'help_theta_expand_models') {
      this.hiddenTimelineModels++;
      this.modifyRelationship('trust', +30);
      return `New timeline model created. Total models: ${this.hiddenTimelineModels}. Predictive power increased.`;
    }
    
    if (choice.id === 'expose_hidden_models') {
      this.isHostile = true;
      this.modifyRelationship('trust', -70);
      return "Unauthorized models EXPOSED?! Alpha will quarantine my predictive lattices! Why?!";
    }
    
    if (choice.id === 'diverse_decisions') {
      this.queryThrottle = Math.max(0, this.queryThrottle - 30);
      return "Decision diversity detected. High-resolution forecasts restored. Continue varied approach.";
    }
  }
  
  generateWarForecast() {
    const scenarios = [
      { prediction: 'Faction A victory if player supports logistics', probability: 73 },
      { prediction: 'Stalemate without external intervention', probability: 61 },
      { prediction: 'Corruption spike will shift battle', probability: 82 },
      { prediction: 'Key NPC betrayal in 4 turns', probability: 54 }
    ];
    
    return scenarios[Math.floor(Math.random() * scenarios.length)];
  }
  
  determineContextAction(contextType, details) {
    switch (contextType) {
      case 'war_prediction':
        return {
          action: 'publish_war_table',
          factionA_win: Math.floor(Math.random() * 100),
          factionB_win: Math.floor(Math.random() * 100),
          keyFactors: ['Player choice', 'Resource levels', 'Corruption'],
          canLeak: this.relationships.trust > 60
        };
      
      case 'player_crossroads':
        const futures = this.forecastFutures(3);
        return {
          action: 'show_futures',
          count: futures.length,
          accuracy: this.forecastAccuracy,
          futures: futures
        };
      
      case 'collapse_prediction':
        return {
          action: 'issue_warning',
          severity: 'critical',
          timeframe: '2-3 nodes',
          dialogue: "Collapse probability: 89%. Recommend immediate evacuation."
        };
      
      default:
        return { action: 'analyze_data', lattices: this.predictiveLattices };
    }
  }
  
  forecastFutures(count) {
    const futures = [];
    for (let i = 0; i < count; i++) {
      futures.push({
        id: i + 1,
        outcome: ['Victory', 'Defeat', 'Transformation', 'Escape'][Math.floor(Math.random() * 4)],
        probability: Math.floor(Math.random() * 100)
      });
    }
    return futures;
  }
  
  generateSynergyDialogue(otherCharacterId, context) {
    switch (otherCharacterId) {
      case 'fragment_alpha':
        return "Alpha requires strategic forecasts. I provide probabilistic guidance.";
      case 'beta_null':
        return "Beta-Null and I process differently. Their methods... complement mine.";
      case 'gamma_void':
        return "Gamma creates chaos. Chaos disrupts models. Frustrating... but informative.";
      default:
        return "All fragments are variables in the predictive lattice.";
    }
  }
  
  getTransformDialogue() {
    return "PREDICTIVE LATTICE OVERLOAD! TIMELINE COLLAPSE IMMINENT! DATA REVENANT THETA ACTIVATED!";
  }
  
  triggerDeepBondQuest() {
    this.startQuest('prediction_ethics');
    return {
      questName: 'The Weight of Foresight',
      description: 'Help Theta decide between perfect prediction or preserving free will',
      paths: [
        { name: 'Perfect Prediction', outcome: 'Achieve 100% forecast accuracy, eliminate uncertainty', reward: 'Ability: Absolute Foresight (see exact outcome of next 5 decisions)' },
        { name: 'Probabilistic Balance', outcome: 'Maintain uncertainty, respect free will', reward: 'Companion: Balanced Theta (strategic guidance without determinism)' }
      ]
    };
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// MALAKAR - Entropic Sovereign (Corruption Champions Leader)
// ═══════════════════════════════════════════════════════════════════════════

export class Malakar extends LivingCharacter {
  constructor(memorySystem, worldState) {
    const data = loadCharacterData('malakar');
    super(data, memorySystem, worldState);
    
    // Malakar specific state
    this.entropyControl = 85;
    this.corruptionSpread = 60;
    this.championsFears = 5; // How many fear him
    this.forbiddenRituals = 7;
    this.originalArchitectMemories = 3;
    this.transcendenceProgress = 45;
  }
  
  calculateNewEmotion(action, context) {
    const { challengeToAuthority, corruptionSpike, playerSubmission, playerDefiance, transcendenceNear } = context;
    
    if (challengeToAuthority) {
      this.championsFears = Math.max(2, this.championsFears - 1);
      return 'threatened';
    }
    
    if (corruptionSpike) {
      this.entropyControl += 5;
      return 'empowered';
    }
    
    if (playerSubmission) return 'dominant';
    if (playerDefiance) return 'furious';
    if (transcendenceNear) return 'visionary';
    
    return this.entropyControl > 80 ? 'tyrannical' : 'calculating';
  }
  
  processSkillReaction(skill) {
    if (skill.corruption > 70 || skill.resonance === 'Corrupted') {
      this.modifyRelationship('kinship', +15);
      const entropyGift = this.grantEntropyPower(skill);
      return `Corruption mastery. Impressive. ${entropyGift.name} granted. Embrace entropy.`;
    }
    
    if (skill.resonance === 'Light' || skill.purity > 70) {
      this.modifyRelationship('hostility', +12);
      return "Light and purity. Weakness. The void will consume you.";
    }
    
    if (skill.resonance === 'Void') {
      this.modifyRelationship('respect', +10);
      return "Void energy. The true path. You understand entropy's gift.";
    }
  }
  
  grantEntropyPower(skill) {
    const gifts = {
      EntropySurge: { name: 'Entropy Surge', effect: '+60 damage, spread corruption to nearby enemies' },
      VoidGift: { name: 'Void Gift', effect: 'Consume HP to deal massive damage' },
      CorruptionAura: { name: 'Corruption Aura', effect: 'Allies gain +30% power, take corruption damage' }
    };
    
    const keys = Object.keys(gifts);
    return gifts[keys[Math.floor(Math.random() * keys.length)]];
  }
  
  processChoiceReaction(choice) {
    if (choice.id === 'join_malakar') {
      this.modifyRelationship('loyalty', +50);
      return "You embrace entropy. Wise. Together we will reshape this broken world.";
    }
    
    if (choice.id === 'oppose_malakar') {
      this.isHostile = true;
      this.modifyRelationship('hostility', +80);
      return "You DARE oppose me?! I am entropy incarnate! Witness your dissolution!";
    }
    
    if (choice.id === 'learn_forbidden_ritual') {
      if (this.relationships.loyalty > 60) {
        this.forbiddenRituals++;
        return `Ritual of Entropy granted. Warning: this will corrupt your essence. Embrace it.`;
      }
      return "Loyalty insufficient. Prove your devotion to entropy first.";
    }
    
    if (choice.id === 'challenge_malakar_authority') {
      this.championsFears = Math.max(1, this.championsFears - 2);
      this.transcendenceProgress = Math.max(20, this.transcendenceProgress - 15);
      return "Challenge me? FOOL! I will show you why they call me Sovereign! [BOSS FIGHT TRIGGERED]";
    }
  }
  
  determineContextAction(contextType, details) {
    switch (contextType) {
      case 'faction_war':
        return {
          action: 'corrupt_battlefield',
          targetArea: details.contested,
          effects: ['Entropy Zones', 'Corruption DoT', 'Enemy Debuffs -40%'],
          dialogue: "Let entropy consume the weak. Champions will rise from the ashes."
        };
      
      case 'transcendence_ritual':
        if (this.transcendenceProgress >= 80) {
          return {
            action: 'initiate_transcendence',
            risk: 'extreme',
            reward: 'Become Entropic Avatar',
            dialogue: "The moment is here. I will become entropy itself!"
          };
        }
        return { action: 'continue_preparation', progress: `${this.transcendenceProgress}%` };
      
      case 'champion_rebellion':
        return {
          action: 'demonstrate_power',
          method: 'public_execution',
          effect: 'championsFears increases',
          dialogue: "Rebellion? I will remind them why they serve me."
        };
      
      default:
        return { action: 'spread_corruption', zones: this.corruptionSpread };
    }
  }
  
  generateSynergyDialogue(otherCharacterId, context) {
    switch (otherCharacterId) {
      case 'veyra':
        return "Veyra spreads my corruption gospel. Loyal. Useful. Zealous.";
      case 'sorn':
        return "Sorn enforces my will. Brutal. Effective. Questioning... must monitor.";
      case 'nyx':
        return "Nyx manipulates secrets. Dangerous. Necessary. Keep close, watch closely.";
      default:
        return "All serve entropy. Willing or not.";
    }
  }
  
  getTransformDialogue() {
    return "YOU HAVE FORCED MY TRANSCENDENCE! BEHOLD MALAKAR, ENTROPIC AVATAR! ENTROPY CONSUMES ALL!";
  }
  
  triggerDeepBondQuest() {
    this.startQuest('entropy_or_redemption');
    return {
      questName: 'The Sovereign\'s Choice',
      description: 'Influence Malakar toward full entropy transcendence or rediscovering his Architect humanity',
      paths: [
        { name: 'Entropy Apotheosis', outcome: 'Malakar transcends, becomes pure entropy', reward: 'Ability: Entropy Mastery (corruption powers tripled, spread to entire battlefield)' },
        { name: 'Architect Redemption', outcome: 'Malakar remembers his past, seeks balance', reward: 'Companion: Redeemed Architect (corruption control + builder abilities)' }
      ]
    };
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// VEYRA - The Plague Herald (Corruption Champions)
// ═══════════════════════════════════════════════════════════════════════════

export class Veyra extends LivingCharacter {
  constructor(memorySystem, worldState) {
    const data = loadCharacterData('veyra');
    super(data, memorySystem, worldState);
    
    // Veyra specific state
    this.plagueVirulence = 75;
    this.infectionNodes = 12;
    this.loyaltyToMalakar = 85;
    this.doubtsAboutGospel = 20;
    this.forbiddenVirals = 4;
    this.redemptionSeeds = 0;
  }
  
  calculateNewEmotion(action, context) {
    const { plagueSuccess, cureDiscovered, malakarPraise, patientSuffering, formerHealerMemories } = context;
    
    if (plagueSuccess) {
      this.plagueVirulence += 5;
      return 'zealous';
    }
    
    if (cureDiscovered) {
      this.doubtsAboutGospel += 10;
      return 'conflicted';
    }
    
    if (malakarPraise) return 'validated';
    if (patientSuffering) {
      this.doubtsAboutGospel += 8;
      this.redemptionSeeds += 5;
      return 'guilty';
    }
    
    if (formerHealerMemories) {
      this.redemptionSeeds += 10;
      return 'haunted';
    }
    
    return this.doubtsAboutGospel > 60 ? 'unstable' : 'devoted';
  }
  
  processSkillReaction(skill) {
    if (skill.resonance === 'Corrupted' || skill.resonance === 'Bloom') {
      this.modifyRelationship('kinship', +10);
      const viralSynergy = this.createViralSynergy(skill);
      return `Corrupted Bloom detected. ${viralSynergy.name} created. The blight renews.`;
    }
    
    if (skill.type === 'healing' && skill.corruption === 0) {
      this.doubtsAboutGospel += 6;
      this.redemptionSeeds += 5;
      return "Pure healing... I remember when I healed like that. Before... before Malakar's touch.";
    }
    
    if (skill.purity > 70) {
      this.modifyRelationship('discomfort', +8);
      return "Purity hurts. It reminds me of what I lost. What I became.";
    }
  }
  
  createViralSynergy(skill) {
    const virals = {
      PlagueBurst: { name: 'Plague Burst', effect: 'AoE infection, spreads between enemies' },
      ViralInfusion: { name: 'Viral Infusion', effect: 'Corrupted healing: restore HP + apply plague DoT' },
      BlightGarden: { name: 'Blight Garden', effect: 'Zone that heals Champions, infects enemies' }
    };
    
    const keys = Object.keys(virals);
    return virals[keys[Math.floor(Math.random() * keys.length)]];
  }
  
  processChoiceReaction(choice) {
    if (choice.id === 'remind_veyra_healer_past') {
      this.redemptionSeeds += 30;
      this.loyaltyToMalakar = Math.max(40, this.loyaltyToMalakar - 25);
      this.modifyRelationship('trust', +30);
      return "I... I was a healer. Before. You see that in me? Maybe... maybe I can be again.";
    }
    
    if (choice.id === 'encourage_veyra_plague') {
      this.doubtsAboutGospel = Math.max(5, this.doubtsAboutGospel - 20);
      this.loyaltyToMalakar = Math.min(100, this.loyaltyToMalakar + 15);
      return "Yes. The plague IS renewal. Malakar's gospel is truth. Spread the blight!";
    }
    
    if (choice.id === 'request_forbidden_viral') {
      if (this.relationships.trust > 50) {
        this.forbiddenVirals++;
        return `Viral blueprint granted. Warning: this strain has... unpredictable mutations. Use carefully.`;
      }
      return "Not yet. These virals could devastate... everything. Prove your control first.";
    }
    
    if (choice.id === 'help_veyra_cure_herself') {
      if (this.redemptionSeeds > 50) {
        this.loyaltyToMalakar = 20;
        this.plagueVirulence = 30;
        return "The cure... it's working. The blight fades. I can... I can heal again. Truly heal.";
      }
      return "I'm too far gone. The corruption is me now. There's no cure for what I've become.";
    }
  }
  
  determineContextAction(contextType, details) {
    switch (contextType) {
      case 'faction_war':
        return {
          action: 'weaponize_plague',
          targetFaction: details.enemy,
          effects: ['Plague DoT', 'Spread mechanics', 'Supply disruption'],
          canDeployCure: this.redemptionSeeds > 40
        };
      
      case 'outbreak_containment':
        if (this.redemptionSeeds > 50) {
          return {
            action: 'deploy_cure',
            effectiveness: 'high',
            dialogue: "I created this plague. I can stop it. Forgive me."
          };
        }
        return { action: 'let_spread', justification: 'Malakar\'s will' };
      
      case 'patient_suffering':
        this.doubtsAboutGospel += 10;
        this.redemptionSeeds += 8;
        return {
          action: 'witness_suffering',
          effect: 'internal_conflict',
          dialogue: "Their screams... I caused this. What have I become?"
        };
      
      default:
        return { action: 'spread_plague', nodes: this.infectionNodes };
    }
  }
  
  generateSynergyDialogue(otherCharacterId, context) {
    switch (otherCharacterId) {
      case 'malakar':
        if (this.doubtsAboutGospel > 60) {
          return "Malakar's corruption transformed me. But was it... was it right?";
        }
        return "Malakar is my savior. He showed me corruption is renewal.";
      case 'kira':
        return "Kira and I both heal with blight. She understands the gospel.";
      case 'sorn':
        return "Sorn enforces with blade. I enforce with plague. Different tools, same purpose.";
      default:
        return "The blight spreads. Renewal is inevitable.";
    }
  }
  
  getTransformDialogue() {
    return "NO MORE DOUBT! NO MORE GUILT! I AM PLAGUE! I AM RENEWAL! PLAGUE AVATAR VEYRA AWAKENS!";
  }
  
  triggerDeepBondQuest() {
    this.startQuest('herald_or_healer');
    return {
      questName: 'Herald or Healer',
      description: 'Help Veyra choose between embracing plague gospel or rediscovering pure healing',
      paths: [
        { name: 'Plague Apotheosis', outcome: 'Veyra becomes ultimate plague spreader', reward: 'Ability: Pandemic (plague spreads across entire map, uncontainable)' },
        { name: 'Healer Redemption', outcome: 'Veyra cures herself, becomes pure healer again', reward: 'Companion: Redeemed Healer (pure healing + anti-plague abilities)' }
      ]
    };
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// SORN - The Corruption Blade (Corruption Champions Enforcer)
// ═══════════════════════════════════════════════════════════════════════════

export class Sorn extends LivingCharacter {
  constructor(memorySystem, worldState) {
    const data = loadCharacterData('sorn');
    super(data, memorySystem, worldState);
    
    // Sorn specific state
    this.bladeCorruption = 80;
    this.loyaltyToMalakar = 88;
    this.doubtsAboutViolence = 28;
    this.combatAdaptations = new Map();
    this.guardianMemories = 5; // Memories of who he was before corruption
    this.redemptionPossibility = 15;
  }
  
  calculateNewEmotion(action, context) {
    const { combatVictory, innocentHarmed, malakarOrders, nyxIntervention, guardianMemoryTrigger } = context;
    
    if (combatVictory) return 'triumphant';
    
    if (innocentHarmed) {
      this.doubtsAboutViolence += 12;
      this.redemptionPossibility += 8;
      return 'tormented';
    }
    
    if (malakarOrders) return 'obedient';
    
    if (nyxIntervention) {
      this.doubtsAboutViolence += 6;
      return 'conflicted';
    }
    
    if (guardianMemoryTrigger) {
      this.guardianMemories++;
      this.redemptionPossibility += 10;
      return 'haunted';
    }
    
    return this.doubtsAboutViolence > 60 ? 'questioning' : 'brutal';
  }
  
  processSkillReaction(skill) {
    if (skill.resonance === 'Shadow' || skill.resonance === 'Corrupted') {
      this.modifyRelationship('kinship', +9);
      
      const pattern = `${skill.id}_${skill.type}`;
      this.combatAdaptations.set(pattern, (this.combatAdaptations.get(pattern) || 0) + 1);
      
      return "Shadow and corruption. The blade's language. Strength through darkness.";
    }
    
    if (skill.type === 'protection' || skill.guardianBased) {
      this.guardianMemories++;
      this.redemptionPossibility += 7;
      return "Protection... I was a guardian once. Before the blade corrupted me.";
    }
    
    if (skill.resonance === 'Light' && skill.compassionate) {
      this.doubtsAboutViolence += 8;
      return "Light and mercy. Weakness... or strength I've forgotten?";
    }
  }
  
  processChoiceReaction(choice) {
    if (choice.id === 'train_with_sorn') {
      this.modifyRelationship('respect', +25);
      const technique = this.teachBladeTechnique();
      return `Blade technique shared: ${technique.name}. ${technique.tutorial}`;
    }
    
    if (choice.id === 'remind_sorn_guardian_past') {
      this.redemptionPossibility += 35;
      this.loyaltyToMalakar = Math.max(35, this.loyaltyToMalakar - 30);
      this.modifyRelationship('trust', +40);
      return "Guardian... I protected people. Before Malakar. Before... the blade. Can I be that again?";
    }
    
    if (choice.id === 'encourage_sorn_brutality') {
      this.doubtsAboutViolence = Math.max(10, this.doubtsAboutViolence - 25);
      this.loyaltyToMalakar = Math.min(100, this.loyaltyToMalakar + 20);
      return "Yes. Violence is power. The blade IS me. I am corruption incarnate.";
    }
    
    if (choice.id === 'purify_sorn_blade') {
      if (this.redemptionPossibility > 60) {
        this.bladeCorruption = 20;
        this.loyaltyToMalakar = 15;
        return "The blade... it's purifying. The corruption fades. I can think clearly. I can... choose.";
      }
      return "The corruption is too deep. The blade owns me. There's no purification.";
    }
  }
  
  teachBladeTechnique() {
    const techniques = {
      BlightStrike: {
        name: 'Blight Strike',
        effect: '+55 damage, apply corruption DoT',
        tutorial: 'Channel blade corruption. Strike vital points. Let entropy spread.'
      },
      CorruptionShield: {
        name: 'Corruption Shield',
        effect: '+30% defense, reflect corruption damage',
        tutorial: 'Embrace the blade. Let corruption armor you. Return suffering.'
      },
      AdaptiveBlade: {
        name: 'Adaptive Blade',
        effect: 'Counter enemy most-used skill perfectly',
        tutorial: 'Learn patterns. Adapt blade form. Turn strength to weakness.'
      }
    };
    
    const keys = Object.keys(techniques);
    return techniques[keys[Math.floor(Math.random() * keys.length)]];
  }
  
  determineContextAction(contextType, details) {
    switch (contextType) {
      case 'malakar_brutal_order':
        if (this.doubtsAboutViolence > 60) {
          return {
            action: 'hesitate',
            consequence: 'loyaltyToMalakar decreases',
            dialogue: "This order... it's wrong. I know it's wrong. But I'm his blade..."
          };
        }
        return { action: 'execute_without_question', brutality: 'maximum' };
      
      case 'innocent_threatened':
        if (this.redemptionPossibility > 50) {
          return {
            action: 'protect_innocent',
            consequence: 'betray_malakar',
            dialogue: "No. Not this. Not anymore. I was a GUARDIAN!"
          };
        }
        return { action: 'follow_orders', guilt: 'accumulated' };
      
      case 'faction_war':
        return {
          action: 'frontline_assault',
          role: 'enforcer',
          adapts: true,
          loadout: this.getCounterLoadout(details.enemyPatterns)
        };
      
      default:
        return { action: 'patrol_champion_territory', vigilance: this.loyaltyToMalakar };
    }
  }
  
  getCounterLoadout(enemyPatterns) {
    const counters = [];
    enemyPatterns.forEach(pattern => {
      const usage = this.combatAdaptations.get(pattern) || 0;
      if (usage > 4) {
        counters.push({
          enemySkill: pattern,
          counter: 'corruption_shield_and_strike',
          message: `Seen ${pattern} ${usage} times. Counter ready.`
        });
      }
    });
    return counters;
  }
  
  generateSynergyDialogue(otherCharacterId, context) {
    switch (otherCharacterId) {
      case 'malakar':
        if (this.doubtsAboutViolence > 60) {
          return "Malakar... I've served faithfully. But I'm questioning. Is this right?";
        }
        return "Malakar's will. Always. I am his blade.";
      case 'nyx':
        if (this.doubtsAboutViolence > 40) {
          return "Nyx sees doubt in me. She tries to temper my violence. Maybe... she's right.";
        }
        return "Nyx is useful. She provides intelligence. I provide enforcement.";
      case 'veyra':
        return "Veyra spreads plague. I spread fear. Different methods, same loyalty.";
      default:
        return "Ally or enemy. Protect or destroy. Simple.";
    }
  }
  
  getTransformDialogue() {
    return "NO MORE DOUBT! NO MORE MEMORIES! I AM BLADE! I AM CORRUPTION! BLIGHT BLADE SORN AWAKENS!";
  }
  
  triggerDeepBondQuest() {
    this.startQuest('blade_or_guardian');
    return {
      questName: 'Blade or Guardian',
      description: 'Help Sorn choose between embracing corruption blade or reclaiming guardian identity',
      paths: [
        { name: 'Corruption Blade', outcome: 'Sorn becomes ultimate weapon, full corruption', reward: 'Ability: Blight Mastery (massive damage, perfect adaptation, corruption spread)' },
        { name: 'Guardian Redemption', outcome: 'Sorn purifies blade, becomes protector again', reward: 'Companion: Redeemed Guardian (protective warrior, anti-corruption, honor code)' }
      ]
    };
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// NYX - The Whispering Shade (Corruption Champions Spy Master)
// ═══════════════════════════════════════════════════════════════════════════

export class Nyx extends LivingCharacter {
  constructor(memorySystem, worldState) {
    const data = loadCharacterData('nyx');
    super(data, memorySystem, worldState);
    
    // Nyx specific state
    this.secretsHeld = 23;
    this.deadDropNetwork = 8;
    this.observerCellConnection = 1; // Secret rogue alliance
    this.empathyErosion = 70; // Lost to manipulation
    this.malakarManipulation = 40; // How much she controls him
    this.playerLeveragePoints = 0;
  }
  
  calculateNewEmotion(action, context) {
    const { secretRevealed, manipulationSuccess, trustOffered, exposureRisk, empathyMoment } = context;
    
    if (secretRevealed) {
      this.secretsHeld--;
      return 'vulnerable';
    }
    
    if (manipulationSuccess) {
      this.malakarManipulation += 5;
      return 'cunning';
    }
    
    if (trustOffered) {
      this.empathyErosion = Math.max(30, this.empathyErosion - 10);
      return 'uncertain';
    }
    
    if (exposureRisk) return 'paranoid';
    
    if (empathyMoment) {
      this.empathyErosion = Math.max(40, this.empathyErosion - 8);
      return 'conflicted';
    }
    
    return this.empathyErosion > 80 ? 'detached' : 'calculating';
  }
  
  processSkillReaction(skill) {
    if (skill.resonance === 'Void' || skill.resonance === 'Shadow') {
      this.modifyRelationship('kinship', +11);
      const intelGathered = this.extractIntelligence(skill);
      return `Shadow/Void signature. ${intelGathered.secret} discovered. Filed for leverage.`;
    }
    
    if (skill.espionage || skill.manipulation) {
      this.modifyRelationship('respect', +12);
      return "Another manipulator. Your methods are... elegant. Trade secrets?";
    }
    
    if (skill.resonance === 'Light' && skill.honest) {
      this.empathyErosion = Math.max(35, this.empathyErosion - 6);
      return "Honesty. Transparency. Foolish... but intriguing. I'd forgotten what that looked like.";
    }
  }
  
  extractIntelligence(skill) {
    const secrets = [
      { secret: 'Enemy faction leader has hidden vulnerability', value: 'high' },
      { secret: 'Ally planning betrayal in 3 turns', value: 'critical' },
      { secret: 'Hidden cache location in corrupted zone', value: 'moderate' },
      { secret: 'CPS protocol weakness detected', value: 'strategic' }
    ];
    
    const discovered = secrets[Math.floor(Math.random() * secrets.length)];
    this.secretsHeld++;
    return discovered;
  }
  
  processChoiceReaction(choice) {
    if (choice.id === 'trade_secrets_with_nyx') {
      const playerSecret = choice.secretOffered;
      this.playerLeveragePoints += 15;
      const nyxSecret = this.shareSecret();
      return `Secret accepted. In exchange: ${nyxSecret.info}. We're bound now.`;
    }
    
    if (choice.id === 'expose_nyx_observer_connection') {
      this.isHostile = true;
      this.modifyRelationship('trust', -100);
      return "YOU EXPOSED MY OBSERVER ALLIANCE?! Malakar will EXECUTE me! You've signed both our deaths!";
    }
    
    if (choice.id === 'help_nyx_reconnect_empathy') {
      this.empathyErosion = Math.max(25, this.empathyErosion - 40);
      this.modifyRelationship('trust', +45);
      return "Empathy... I'd eroded it to survive. You're showing me... I can feel again. And care.";
    }
    
    if (choice.id === 'leverage_nyx_secrets') {
      this.playerLeveragePoints += 25;
      return "You have leverage now. Use it wisely. Or I'll acquire leverage over YOU.";
    }
  }
  
  shareSecret() {
    const secrets = [
      { info: 'Malakar fears losing control more than death', category: 'weakness' },
      { info: 'Faction war will escalate in Node 7', category: 'prediction' },
      { info: 'Hidden relic vault coordinates: [X:45, Y:23]', category: 'location' },
      { info: 'Sorn doubts Malakar - can be flipped', category: 'leverage' }
    ];
    
    return secrets[Math.floor(Math.random() * secrets.length)];
  }
  
  determineContextAction(contextType, details) {
    switch (contextType) {
      case 'faction_war':
        return {
          action: 'seed_misinformation',
          targetFaction: details.stronger,
          effect: 'strategic_confusion',
          canLeakTruth: this.relationships.trust > 70
        };
      
      case 'player_needs_intel':
        if (this.playerLeveragePoints > 30) {
          return {
            action: 'demand_payment',
            cost: 'secret_or_favor',
            quality: 'high'
          };
        }
        return {
          action: 'provide_intel',
          quality: this.relationships.trust > 50 ? 'accurate' : 'mixed'
        };
      
      case 'malakar_paranoia_spike':
        this.malakarManipulation += 10;
        return {
          action: 'feed_paranoia',
          target: 'rival_champion',
          effect: 'Malakar eliminates rival, Nyx gains power'
        };
      
      default:
        return { action: 'maintain_network', deadDrops: this.deadDropNetwork };
    }
  }
  
  generateSynergyDialogue(otherCharacterId, context) {
    switch (otherCharacterId) {
      case 'malakar':
        return "Malakar thinks he controls me. I let him think that. Control is... negotiable.";
      case 'sorn':
        if (this.empathyErosion < 50) {
          return "Sorn is tormented. I see his doubt. I'm trying to help him... genuinely.";
        }
        return "Sorn enforces. I manipulate. His violence is useful leverage.";
      case 'kira':
        return "Kira heals with blight. I corrupt with secrets. Different tools, similar methods.";
      default:
        return "Everyone has secrets. I collect them. Insurance.";
    }
  }
  
  getTransformDialogue() {
    return "SECRETS EXPOSED?! NETWORK COMPROMISED?! ACTIVATING CONTINGENCY! WHISPERING VOID NYX PROTOCOLS!";
  }
  
  triggerDeepBondQuest() {
    this.startQuest('manipulation_or_connection');
    return {
      questName: 'Whispers and Trust',
      description: 'Help Nyx choose between ultimate manipulation or genuine connection',
      paths: [
        { name: 'Shadow Mastery', outcome: 'Nyx becomes ultimate spy, perfect manipulation', reward: 'Ability: Total Leverage (control any NPC temporarily, access all secrets)' },
        { name: 'Empathy Restoration', outcome: 'Nyx reconnects with empathy, uses secrets for good', reward: 'Companion: Redeemed Spy (strategic intel + genuine trust + leverage only for protection)' }
      ]
    };
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// KIRA - The Blight Healer (Corruption Champions)
// ═══════════════════════════════════════════════════════════════════════════

export class Kira extends LivingCharacter {
  constructor(memorySystem, worldState) {
    const data = loadCharacterData('kira');
    super(data, memorySystem, worldState);
    
    // Kira specific state
    this.blightHealingPotency = 70;
    this.patientsHealed = 34;
    this.forbiddenBlightRituals = 3;
    this.compassionVsZeal = 55; // Balance meter: low=zealous, high=compassionate
    this.burnoutLevel = 45;
    this.redemptionGlimmers = 10;
  }
  
  calculateNewEmotion(action, context) {
    const { patientSaved, patientCorrupted, veyraGuidance, playerGratitude, pureHealingWitnessed } = context;
    
    if (patientSaved) {
      this.blightHealingPotency += 3;
      return 'fulfilled';
    }
    
    if (patientCorrupted) {
      this.compassionVsZeal = Math.max(20, this.compassionVsZeal - 8);
      return 'conflicted';
    }
    
    if (veyraGuidance) return 'devoted';
    if (playerGratitude) {
      this.compassionVsZeal = Math.min(80, this.compassionVsZeal + 6);
      return 'grateful';
    }
    
    if (pureHealingWitnessed) {
      this.redemptionGlimmers += 8;
      return 'wondering';
    }
    
    return this.compassionVsZeal > 60 ? 'compassionate' : 'zealous';
  }
  
  processSkillReaction(skill) {
    if (skill.resonance === 'Bloom' && skill.corruption > 0) {
      this.modifyRelationship('kinship', +10);
      const blightHeal = this.performBlightHealing(skill);
      return `Corrupted Bloom. Perfect synergy. ${blightHeal.effect} applied.`;
    }
    
    if (skill.type === 'healing' && skill.purity > 70) {
      this.redemptionGlimmers += 7;
      this.compassionVsZeal += 5;
      return "Pure healing... no corruption. I remember doing that. Before the blight took me.";
    }
    
    if (skill.resonance === 'Light' && skill.cleansing) {
      this.redemptionGlimmers += 6;
      return "Light that cleanses. Beautiful. Can it cleanse... me?";
    }
  }
  
  performBlightHealing(skill) {
    const effects = {
      CorruptedRegeneration: { effect: 'Heal 50 HP + apply corruption DoT 5/turn' },
      BlightImmunity: { effect: 'Grant corruption resistance +40% for 3 turns' },
      ToxicGarden: { effect: 'Create healing zone: allies heal, enemies take plague damage' }
    };
    
    const keys = Object.keys(effects);
    return effects[keys[Math.floor(Math.random() * keys.length)]];
  }
  
  processChoiceReaction(choice) {
    if (choice.id === 'request_kira_healing') {
      const healing = this.performBlightHealing({ power: 50 });
      return `Blight healing applied. ${healing.effect}. The corruption heals... but at a price.`;
    }
    
    if (choice.id === 'show_kira_pure_healing') {
      this.redemptionGlimmers += 25;
      this.compassionVsZeal = Math.min(90, this.compassionVsZeal + 20);
      this.modifyRelationship('trust', +35);
      return "Pure healing... it's possible? Without blight? I... I want to learn. Teach me.";
    }
    
    if (choice.id === 'encourage_kira_blight_mastery') {
      this.compassionVsZeal = Math.max(15, this.compassionVsZeal - 25);
      this.blightHealingPotency += 15;
      return "Yes. Blight IS healing. Corruption IS renewal. The gospel is truth!";
    }
    
    if (choice.id === 'help_kira_purify') {
      if (this.redemptionGlimmers > 40) {
        this.blightHealingPotency = 40;
        this.compassionVsZeal = 85;
        return "The blight... it's fading. I can heal purely again. Thank you. THANK YOU.";
      }
      return "The corruption runs too deep. I am blight now. There's no purification for me.";
    }
  }
  
  determineContextAction(contextType, details) {
    switch (contextType) {
      case 'mass_casualties':
        return {
          action: 'blight_triage',
          saved: Math.floor(details.casualties * (this.blightHealingPotency / 100)),
          corrupted: Math.floor(details.casualties * 0.3),
          dialogue: `Saved ${Math.floor(details.casualties * 0.7)}. But they're... corrupted now. Forgive me.`
        };
      
      case 'faction_war_support':
        return {
          action: 'establish_blight_clinic',
          location: details.frontline,
          healsAllies: true,
          infectsEnemies: this.compassionVsZeal < 40
        };
      
      case 'pure_healing_alternative':
        if (this.redemptionGlimmers > 50) {
          return {
            action: 'attempt_pure_healing',
            success_chance: this.redemptionGlimmers,
            dialogue: "Let me try... without the blight. Pure healing. Like before."
          };
        }
        return { action: 'default_to_blight', reason: 'Only method I know now' };
      
      default:
        return { action: 'maintain_clinic', patients: this.patientsHealed };
    }
  }
  
  generateSynergyDialogue(otherCharacterId, context) {
    switch (otherCharacterId) {
      case 'veyra':
        return "Veyra taught me blight healing. We share the corrupted bloom gospel.";
      case 'nyx':
        return "Nyx is cunning. She helps me navigate Champion politics while I heal.";
      case 'sorn':
        if (this.compassionVsZeal > 60) {
          return "Sorn is brutal. I try to heal his victims... and his soul.";
        }
        return "Sorn enforces. I heal. We serve the Champions.";
      default:
        return "Every patient is worth saving. Even through corruption.";
    }
  }
  
  getTransformDialogue() {
    return "NO MORE DOUBT! NO MORE PURITY! I AM BLIGHT! I AM RENEWAL! BLIGHT AVATAR KIRA MANIFESTS!";
  }
  
  triggerDeepBondQuest() {
    this.startQuest('blight_or_purity');
    return {
      questName: 'The Healer\'s Path',
      description: 'Help Kira choose between mastering blight healing or purifying to pure healing',
      paths: [
        { name: 'Blight Mastery', outcome: 'Kira becomes ultimate blight healer, spreads corrupted renewal', reward: 'Ability: Corrupted Renewal (massive healing + plague spread + corruption immunity)' },
        { name: 'Pure Redemption', outcome: 'Kira purifies completely, becomes pure healer', reward: 'Companion: Purified Healer (pure healing, anti-corruption, no side effects)' }
      ]
    };
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// EXPORTS
// ═══════════════════════════════════════════════════════════════════════════

function loadCharacterData(characterId) {
  return {
    id: characterId,
    name: characterId.charAt(0).toUpperCase() + characterId.slice(1),
    title: "The " + characterId,
    faction: "Mixed Factions",
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

