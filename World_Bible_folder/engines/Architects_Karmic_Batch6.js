// ═══════════════════════════════════════════════════════════════════════════
// ARCHITECTS & KARMIC KEEPERS - BATCH 6
// Completing Architect Echo Orders + Full Karmic Ledger Keepers + Starting Observers
// ═══════════════════════════════════════════════════════════════════════════

import { LivingCharacter } from './LivingCharacterSystem.js';

// ═══════════════════════════════════════════════════════════════════════════
// MIREN - The Pattern Weaver (Architect Echo Orders Ritualist)
// ═══════════════════════════════════════════════════════════════════════════

export class Miren extends LivingCharacter {
  constructor(memorySystem, worldState) {
    const data = loadCharacterData('miren');
    super(data, memorySystem, worldState);
    
    // Miren specific state
    this.patternCreativity = 85;
    this.ritualStability = 60; // Lower stability due to experimentation
    this.forbiddenPatterns = 4;
    this.rivalryWithSaran = 40;
    this.innovationDrive = 90;
  }
  
  calculateNewEmotion(action, context) {
    const { patternSuccess, ritualDestabilized, newDiscovery, saranCriticism, vayunApproval } = context;
    
    if (patternSuccess) {
      this.patternCreativity = Math.min(100, this.patternCreativity + 3);
      return 'inspired';
    }
    
    if (ritualDestabilized) {
      this.ritualStability -= 10;
      return 'frustrated';
    }
    
    if (newDiscovery) {
      this.innovationDrive += 5;
      return 'obsessed';
    }
    
    if (saranCriticism) {
      this.rivalryWithSaran += 5;
      return 'defiant';
    }
    
    if (vayunApproval) return 'validated';
    
    return this.ritualStability < 40 ? 'chaotic' : 'creative';
  }
  
  processSkillReaction(skill) {
    if (skill.resonance === 'Bloom' || skill.resonance === 'Neutral') {
      this.modifyRelationship('kinship', +12);
      const weave = this.weavePattern(skill);
      return `Bloom and Neutrality. A flexible weave. I can work with this. Pattern: ${weave.name}`;
    }
    
    if (skill.ritual || skill.magic) {
      this.modifyRelationship('respect', +10);
      return "You weave too? Let's compare threads.";
    }
    
    if (skill.rigid || skill.order) {
      this.modifyRelationship('boredom', +15);
      return "So stiff. Where's the art? Where's the risk?";
    }
  }
  
  weavePattern(skill) {
    const patterns = [
      { name: 'Bloom Spiral', effect: 'Growing AoE damage' },
      { name: 'Neutral Web', effect: 'Slows all enemies' },
      { name: 'Chaos Knot', effect: 'Random status effect' }
    ];
    return patterns[Math.floor(Math.random() * patterns.length)];
  }
  
  processChoiceReaction(choice) {
    if (choice.id === 'encourage_innovation') {
      this.innovationDrive += 10;
      this.modifyRelationship('trust', +25);
      return "Yes! Break the mold! The old patterns are boring.";
    }
    
    if (choice.id === 'warn_instability') {
      this.ritualStability += 5;
      this.modifyRelationship('respect', -5);
      return "You sound like Saran. 'Be careful, Miren.' Boring.";
    }
    
    if (choice.id === 'share_forbidden_pattern') {
      this.forbiddenPatterns++;
      this.modifyRelationship('gratitude', +35);
      return "This... this is dangerous. I love it. Let's weave it.";
    }
    
    if (choice.id === 'steal_ritual') {
      this.isHostile = true;
      this.modifyRelationship('trust', -100);
      return "My patterns are MINE! You'll tangle in them and die!";
    }
  }
  
  determineContextAction(contextType, details) {
    switch (contextType) {
      case 'ritual_chamber':
        return {
          action: 'weave_complex_pattern',
          risk: 'high',
          reward: 'massive_buff',
          dialogue: "Just a few more threads... hold the energy steady!"
        };
      
      case 'faction_war':
        return {
          action: 'mass_ritual',
          target: 'battlefield',
          effect: 'Terrain Alteration',
          dialogue: "I'll rewrite the ground they stand on."
        };
      
      default:
        return { action: 'study_glyphs', creativity: this.patternCreativity };
    }
  }
  
  generateSynergyDialogue(otherCharacterId, context) {
    switch (otherCharacterId) {
      case 'vayun':
        return "Vayun wants straight lines. I give him curves. He hates it, but he needs it.";
      case 'saran':
        return "Saran is a wall. I am the wind. He can't stop me.";
      case 'lirael':
        return "Lirael writes history. I make it. We're a good team.";
      default:
        return "The pattern is always shifting.";
    }
  }
  
  getTransformDialogue() {
    return "THE WEAVE SNAPS! CHAOS UNLEASHED! BLOOM WEAVER MIREN!";
  }
  
  triggerDeepBondQuest() {
    this.startQuest('chaos_or_control');
    return {
      questName: 'The Weaver\'s Knot',
      description: 'Help Miren decide between controlled artistry or chaotic genius',
      paths: [
        { name: 'Master Weaver', outcome: 'Miren masters complex but stable patterns', reward: 'Ability: Perfect Weave (double duration on all buffs)' },
        { name: 'Chaos Artist', outcome: 'Miren embraces instability for raw power', reward: 'Companion: Wild Miren (random powerful effects every turn)' }
      ]
    };
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// ESHAN - The Echo Healer (Architect Echo Orders Medic)
// ═══════════════════════════════════════════════════════════════════════════

export class Eshan extends LivingCharacter {
  constructor(memorySystem, worldState) {
    const data = loadCharacterData('eshan');
    super(data, memorySystem, worldState);
    
    // Eshan specific state
    this.echoHealing = 80;
    this.empathy = 95;
    this.pastTrauma = 60; // Failed to save sibling
    this.triageDiscipline = 75;
    this.restorationRituals = 3;
  }
  
  calculateNewEmotion(action, context) {
    const { patientSaved, echoRestored, traumaTriggered, triageChoice, compassionShown } = context;
    
    if (patientSaved) {
      this.echoHealing += 2;
      return 'relieved';
    }
    
    if (echoRestored) return 'peaceful';
    
    if (traumaTriggered) {
      this.pastTrauma += 10;
      return 'grieving';
    }
    
    if (triageChoice) {
      this.triageDiscipline += 5;
      return 'focused';
    }
    
    if (compassionShown) return 'grateful';
    
    return this.empathy > 80 ? 'compassionate' : 'weary';
  }
  
  processSkillReaction(skill) {
    if (skill.resonance === 'Echo' || skill.resonance === 'Light') {
      this.modifyRelationship('kinship', +10);
      const heal = this.restoreEcho(skill);
      return `Echo and Light. The resonance of life. I can restore what was lost. Effect: ${heal.effect}`;
    }
    
    if (skill.healing) {
      this.modifyRelationship('respect', +15);
      return "You heal the body. I heal the memory. Both are needed.";
    }
    
    if (skill.corruption) {
      this.modifyRelationship('fear', +10);
      return "Corruption... it eats the echo. Keep it away.";
    }
  }
  
  restoreEcho(skill) {
    return { effect: 'Restore 30% HP + Reset Cooldowns on 1 Skill' };
  }
  
  processChoiceReaction(choice) {
    if (choice.id === 'help_eshan_triage') {
      this.modifyRelationship('trust', +20);
      return "Thank you. The choices are hard. You made them lighter.";
    }
    
    if (choice.id === 'trigger_trauma') {
      this.pastTrauma += 15;
      this.modifyRelationship('trust', -10);
      return "Please... don't speak of that. I can't save everyone. I know that.";
    }
    
    if (choice.id === 'learn_restoration') {
      this.restorationRituals++;
      this.modifyRelationship('gratitude', +30);
      return "You wish to learn? Good. The world needs more healers.";
    }
    
    if (choice.id === 'force_healing') {
      this.empathy -= 10;
      return "Healing cannot be forced. It must be accepted.";
    }
  }
  
  determineContextAction(contextType, details) {
    switch (contextType) {
      case 'mass_casualty':
        return {
          action: 'echo_resonance',
          target: 'area',
          effect: 'Mass Stabilization',
          dialogue: "Hold onto your echoes! Do not fade!"
        };
      
      case 'corrupted_patient':
        return {
          action: 'quarantine_heal',
          risk: 'medium',
          dialogue: "I will try to separate the corruption from the soul."
        };
      
      default:
        return { action: 'meditate', empathy: this.empathy };
    }
  }
  
  generateSynergyDialogue(otherCharacterId, context) {
    switch (otherCharacterId) {
      case 'vayun':
        return "Vayun builds for eternity. I heal for today.";
      case 'miren':
        return "Miren's rituals are wild. I often have to fix the echoes she breaks.";
      case 'lirael':
        return "Lirael remembers the dead. I try to keep them living.";
      default:
        return "Every life is a song. I keep it playing.";
    }
  }
  
  getTransformDialogue() {
    return "THE ECHO FADES! I CANNOT HOLD IT! ECHO HEALER ESHAN!";
  }
  
  triggerDeepBondQuest() {
    this.startQuest('grief_or_hope');
    return {
      questName: 'The Healer\'s Echo',
      description: 'Help Eshan overcome his past trauma and find new hope',
      paths: [
        { name: 'Wounded Healer', outcome: 'Eshan uses his pain to heal others, very potent but self-damaging', reward: 'Ability: Empathic Link (take damage to heal allies double)' },
        { name: 'Beacon of Hope', outcome: 'Eshan finds peace, becomes pure source of restoration', reward: 'Companion: Radiant Eshan (passive healing + anti-corruption aura)' }
      ]
    };
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// DHARVIN - The Ledger Master (Karmic Ledger Keepers Leader)
// ═══════════════════════════════════════════════════════════════════════════

export class Dharvin extends LivingCharacter {
  constructor(memorySystem, worldState) {
    const data = loadCharacterData('dharvin');
    super(data, memorySystem, worldState);
    
    // Dharvin specific state
    this.karmicBalance = 50; // 0 = Chaos, 100 = Order, 50 = Perfect Balance
    this.ledgerWisdom = 95;
    this.impartiality = 90;
    this.hiddenGuilt = 30; // From past failure
    this.vaultAccess = true;
  }
  
  calculateNewEmotion(action, context) {
    const { balanceRestored, karmaImbalance, unfairDecision, pastFailureTrigger, playerRespect } = context;
    
    if (balanceRestored) {
      this.karmicBalance = 50;
      return 'serene';
    }
    
    if (karmaImbalance) {
      this.karmicBalance += (Math.random() > 0.5 ? 10 : -10);
      return 'concerned';
    }
    
    if (unfairDecision) {
      this.impartiality -= 5;
      return 'stern';
    }
    
    if (pastFailureTrigger) {
      this.hiddenGuilt += 10;
      return 'melancholy';
    }
    
    if (playerRespect) return 'approving';
    
    return Math.abs(this.karmicBalance - 50) < 10 ? 'balanced' : 'unsettled';
  }
  
  processSkillReaction(skill) {
    if (skill.resonance === 'Neutral' || skill.resonance === 'Bloom') {
      this.modifyRelationship('kinship', +10);
      const judgment = this.judgeKarma(skill);
      return `Neutrality and Bloom. Life in balance. The Ledger approves. Judgment: ${judgment.verdict}`;
    }
    
    if (skill.karma || skill.balance) {
      this.modifyRelationship('respect', +15);
      return "You understand the weight of actions. Good.";
    }
    
    if (skill.extreme || skill.chaos) {
      this.modifyRelationship('disapproval', +10);
      return "Too much chaos. The scales tip dangerously.";
    }
  }
  
  judgeKarma(skill) {
    const verdicts = [
      { verdict: 'Balanced', effect: 'Restore 10 Karma' },
      { verdict: 'Positive', effect: 'Grant Luck Buff' },
      { verdict: 'Debt', effect: 'Next skill costs more, deals more' }
    ];
    return verdicts[Math.floor(Math.random() * verdicts.length)];
  }
  
  processChoiceReaction(choice) {
    if (choice.id === 'restore_balance') {
      this.karmicBalance = 50;
      this.modifyRelationship('trust', +25);
      return "You chose the middle path. Wise. The universe thanks you.";
    }
    
    if (choice.id === 'tip_scales') {
      this.karmicBalance += 20;
      this.modifyRelationship('respect', -10);
      return "You disrupt the flow for personal gain? The Ledger records this debt.";
    }
    
    if (choice.id === 'ask_about_past') {
      this.hiddenGuilt += 5;
      this.modifyRelationship('trust', +10);
      return "The past... is a heavy ledger. I carry it so others don't have to.";
    }
    
    if (choice.id === 'steal_ledger_page') {
      this.isHostile = true;
      this.modifyRelationship('trust', -100);
      return "You dare tear the fabric of fate?! Judgment falls upon you!";
    }
  }
  
  determineContextAction(contextType, details) {
    switch (contextType) {
      case 'karmic_dispute':
        return {
          action: 'arbitrate',
          outcome: 'fair',
          dialogue: "Neither side is blameless. Both must pay a price."
        };
      
      case 'faction_war':
        return {
          action: 'enforce_neutrality',
          target: 'all',
          effect: 'Dampen Conflict',
          dialogue: "This war disrupts the cosmic balance. Cease."
        };
      
      default:
        return { action: 'meditate_on_ledger', balance: this.karmicBalance };
    }
  }
  
  generateSynergyDialogue(otherCharacterId, context) {
    switch (otherCharacterId) {
      case 'anya':
        return "Anya records the deeds. I weigh them. She is my memory.";
      case 'kavan':
        return "Kavan is the sword of balance. Sometimes necessary, always heavy.";
      case 'mira':
        return "Mira tries to adjust the scales. I remind her they must move freely.";
      default:
        return "All are subject to the Ledger.";
    }
  }
  
  getTransformDialogue() {
    return "THE SCALES SHATTER! BALANCE IS LOST! UNBALANCED DHARVIN!";
  }
  
  triggerDeepBondQuest() {
    this.startQuest('justice_or_mercy');
    return {
      questName: 'The Master\'s Scales',
      description: 'Help Dharvin decide between absolute justice or karmic mercy',
      paths: [
        { name: 'Avatar of Justice', outcome: 'Dharvin enforces strict karma, high order', reward: 'Ability: Karmic Retribution (enemies take damage equal to damage dealt)' },
        { name: 'Hand of Mercy', outcome: 'Dharvin allows redemption, softer balance', reward: 'Companion: Merciful Dharvin (can forgive debts/cooldowns)' }
      ]
    };
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// ANYA - The Karma Scribe (Karmic Ledger Keepers Recorder)
// ═══════════════════════════════════════════════════════════════════════════

export class Anya extends LivingCharacter {
  constructor(memorySystem, worldState) {
    const data = loadCharacterData('anya');
    super(data, memorySystem, worldState);
    
    // Anya specific state
    this.recordAccuracy = 95;
    this.patience = 90;
    this.forbiddenChronicles = 2;
    this.familyShame = 50; // Ancestral error
    this.empathyVsDuty = 60; // High = Duty
  }
  
  calculateNewEmotion(action, context) {
    const { recordVerified, errorFound, familyRedeemed, dutyChallenged, empathyTrigger } = context;
    
    if (recordVerified) {
      this.recordAccuracy += 1;
      return 'satisfied';
    }
    
    if (errorFound) {
      this.recordAccuracy -= 5;
      return 'anxious';
    }
    
    if (familyRedeemed) {
      this.familyShame -= 20;
      return 'relieved';
    }
    
    if (dutyChallenged) {
      this.empathyVsDuty -= 5;
      return 'conflicted';
    }
    
    if (empathyTrigger) {
      this.empathyVsDuty -= 10;
      return 'compassionate';
    }
    
    return this.patience > 80 ? 'focused' : 'stressed';
  }
  
  processSkillReaction(skill) {
    if (skill.resonance === 'Echo' || skill.resonance === 'Light') {
      this.modifyRelationship('kinship', +10);
      const record = this.logAction(skill);
      return `Echo and Light. Clear to read. I have recorded this. Entry: ${record.id}`;
    }
    
    if (skill.history || skill.record) {
      this.modifyRelationship('respect', +12);
      return "You value the truth. The Ledger is open to you.";
    }
    
    if (skill.deceit || skill.stealth) {
      this.modifyRelationship('suspicion', +15);
      return "You cannot hide from the Ledger. It sees all.";
    }
  }
  
  logAction(skill) {
    return { id: `ACT-${Math.floor(Math.random() * 1000)}`, note: 'Skill usage recorded' };
  }
  
  processChoiceReaction(choice) {
    if (choice.id === 'tell_truth') {
      this.modifyRelationship('trust', +20);
      return "Truth is the ink of the Ledger. Thank you.";
    }
    
    if (choice.id === 'ask_to_falsify') {
      this.empathyVsDuty += 10;
      this.modifyRelationship('respect', -20);
      return "Alter the record? Never. The truth is sacred.";
    }
    
    if (choice.id === 'help_redeem_family') {
      this.familyShame -= 30;
      this.modifyRelationship('gratitude', +40);
      return "You... you fixed the error? My family is free? I... thank you.";
    }
    
    if (choice.id === 'appeal_to_empathy') {
      this.empathyVsDuty -= 15;
      return "The rules are strict... but perhaps... just this once.";
    }
  }
  
  determineContextAction(contextType, details) {
    switch (contextType) {
      case 'historical_inquiry':
        return {
          action: 'consult_archives',
          result: 'detailed_report',
          dialogue: "Let me check the chronicles. Ah, here it is."
        };
      
      case 'karmic_audit':
        return {
          action: 'verify_deeds',
          target: details.subject,
          outcome: 'pass/fail',
          dialogue: "Your ledger is... complicated. Let me calculate."
        };
      
      default:
        return { action: 'transcribe', accuracy: this.recordAccuracy };
    }
  }
  
  generateSynergyDialogue(otherCharacterId, context) {
    switch (otherCharacterId) {
      case 'dharvin':
        return "Dharvin bears the burden of judgment. I just provide the facts.";
      case 'kavan':
        return "Kavan enforces what I write. I must be careful with my pen.";
      case 'orin':
        return "Orin heals the wounds of karma. I record the scars.";
      default:
        return "Everything is written.";
    }
  }
  
  getTransformDialogue() {
    return "THE INK BLEEDS! THE TRUTH TWISTS! ECHO SCRIBE ANYA!";
  }
  
  triggerDeepBondQuest() {
    this.startQuest('truth_or_kindness');
    return {
      questName: 'The Scribe\'s Dilemma',
      description: 'Help Anya decide between absolute historical truth or protecting people from it',
      paths: [
        { name: 'Keeper of Truth', outcome: 'Anya records everything, no matter the cost', reward: 'Ability: True Sight (reveal all hidden enemies/traps)' },
        { name: 'Compassionate Historian', outcome: 'Anya learns to contextualize truth with mercy', reward: 'Companion: Wise Anya (grants lore bonuses + diplomacy buffs)' }
      ]
    };
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// KAVAN - The Balance Guardian (Karmic Ledger Keepers Enforcer)
// ═══════════════════════════════════════════════════════════════════════════

export class Kavan extends LivingCharacter {
  constructor(memorySystem, worldState) {
    const data = loadCharacterData('kavan');
    super(data, memorySystem, worldState);
    
    // Kavan specific state
    this.enforcementZeal = 85;
    this.loyaltyToDharvin = 90;
    this.justiceSense = 95;
    this.mercy = 20;
    this.breachCount = 0;
  }
  
  calculateNewEmotion(action, context) {
    const { lawUpheld, balanceBreached, mercyShown, dharvinOrder, injusticeWitnessed } = context;
    
    if (lawUpheld) {
      this.enforcementZeal += 2;
      return 'righteous';
    }
    
    if (balanceBreached) {
      this.breachCount++;
      return 'angry';
    }
    
    if (mercyShown) {
      this.mercy += 5;
      return 'conflicted';
    }
    
    if (dharvinOrder) return 'obedient';
    
    if (injusticeWitnessed) {
      this.justiceSense += 5;
      return 'determined';
    }
    
    return this.enforcementZeal > 80 ? 'stern' : 'watchful';
  }
  
  processSkillReaction(skill) {
    if (skill.resonance === 'Shadow' || skill.resonance === 'Neutral') {
      this.modifyRelationship('kinship', +10);
      const sanction = this.enforceBalance(skill);
      return `Shadow and Neutrality. The tools of enforcement. I am watching. Effect: ${sanction.effect}`;
    }
    
    if (skill.justice || skill.law) {
      this.modifyRelationship('respect', +15);
      return "You respect the law. Good. We need more like you.";
    }
    
    if (skill.crime || skill.chaos) {
      this.modifyRelationship('hostility', +20);
      return "Violation detected. Cease, or be corrected.";
    }
  }
  
  enforceBalance(skill) {
    return { effect: 'Reflect 30% Damage to Attacker' };
  }
  
  processChoiceReaction(choice) {
    if (choice.id === 'accept_punishment') {
      this.modifyRelationship('respect', +20);
      return "You accept your debt. Honorable. The balance is satisfied.";
    }
    
    if (choice.id === 'resist_arrest') {
      this.isHostile = true;
      this.modifyRelationship('hostility', +50);
      return "Resistance?! Then you will face the full weight of the Ledger!";
    }
    
    if (choice.id === 'plead_for_mercy') {
      this.mercy += 10;
      return "Mercy... is rare. But perhaps warranted. Go.";
    }
    
    if (choice.id === 'uphold_justice') {
      this.justiceSense += 10;
      this.modifyRelationship('trust', +25);
      return "Justice is done. You are a true guardian.";
    }
  }
  
  determineContextAction(contextType, details) {
    switch (contextType) {
      case 'karmic_violation':
        return {
          action: 'detain_violator',
          force: 'high',
          dialogue: "You have unbalanced the scales. Come with me."
        };
      
      case 'sanctum_defense':
        return {
          action: 'karma_shield',
          target: 'gate',
          effect: 'Invulnerability',
          dialogue: "The Ledger is closed to the unworthy."
        };
      
      default:
        return { action: 'patrol', zeal: this.enforcementZeal };
    }
  }
  
  generateSynergyDialogue(otherCharacterId, context) {
    switch (otherCharacterId) {
      case 'dharvin':
        return "Dharvin judges. I execute. It is a simple system.";
      case 'anya':
        return "Anya writes the laws. I ensure they are obeyed.";
      case 'mira':
        return "Mira tries to talk her way out of balance. I prefer action.";
      default:
        return "The law is absolute.";
    }
  }
  
  getTransformDialogue() {
    return "JUSTICE IS BLIND! AND SO AM I! CORRUPTED GUARDIAN KAVAN!";
  }
  
  triggerDeepBondQuest() {
    this.startQuest('law_or_justice');
    return {
      questName: 'The Enforcer\'s Code',
      description: 'Help Kavan decide between following the letter of the law or true justice',
      paths: [
        { name: 'Iron Enforcer', outcome: 'Kavan becomes absolute lawman, no mercy', reward: 'Ability: Lawbringer (stun all enemies who attacked last turn)' },
        { name: 'True Justicar', outcome: 'Kavan follows spirit of justice, protects innocent', reward: 'Companion: Just Kavan (defends weak, buffs allies)' }
      ]
    };
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// MIRA - The Karma Adjuster (Karmic Ledger Keepers Mediator)
// ═══════════════════════════════════════════════════════════════════════════

export class Mira extends LivingCharacter {
  constructor(memorySystem, worldState) {
    const data = loadCharacterData('mira');
    super(data, memorySystem, worldState);
    
    // Mira specific state
    this.negotiationSkill = 90;
    this.empathy = 85;
    this.flexibility = 80;
    this.forbiddenDeals = 3;
    this.rivalryWithKavan = 50;
  }
  
  calculateNewEmotion(action, context) {
    const { dealMade, negotiationFailed, balanceAdjusted, kavanInterference, empathyTrigger } = context;
    
    if (dealMade) {
      this.negotiationSkill += 2;
      return 'satisfied';
    }
    
    if (negotiationFailed) {
      this.negotiationSkill -= 5;
      return 'frustrated';
    }
    
    if (balanceAdjusted) return 'calm';
    
    if (kavanInterference) {
      this.rivalryWithKavan += 5;
      return 'annoyed';
    }
    
    if (empathyTrigger) {
      this.empathy += 5;
      return 'compassionate';
    }
    
    return this.flexibility > 70 ? 'adaptable' : 'rigid';
  }
  
  processSkillReaction(skill) {
    if (skill.resonance === 'Bloom' || skill.resonance === 'Neutral') {
      this.modifyRelationship('kinship', +12);
      const adjustment = this.adjustKarma(skill);
      return `Bloom and Neutrality. Malleable. I can work with this. Adjustment: ${adjustment.effect}`;
    }
    
    if (skill.trade || skill.diplomacy) {
      this.modifyRelationship('respect', +15);
      return "A fellow negotiator. Let's make a deal.";
    }
    
    if (skill.force || skill.violence) {
      this.modifyRelationship('discomfort', +10);
      return "Why fight when we can talk? So crude.";
    }
  }
  
  adjustKarma(skill) {
    return { effect: 'Swap HP percentages with target' };
  }
  
  processChoiceReaction(choice) {
    if (choice.id === 'negotiate_deal') {
      this.modifyRelationship('trust', +20);
      return "A fair trade. Everyone wins. That's true balance.";
    }
    
    if (choice.id === 'refuse_compromise') {
      this.flexibility -= 5;
      this.modifyRelationship('respect', -10);
      return "Stubbornness breaks. Flexibility bends. Remember that.";
    }
    
    if (choice.id === 'make_forbidden_deal') {
      this.forbiddenDeals++;
      this.modifyRelationship('gratitude', +30);
      return "Risky... but profitable. I like your style.";
    }
    
    if (choice.id === 'side_with_kavan') {
      this.rivalryWithKavan += 10;
      this.modifyRelationship('trust', -15);
      return "You prefer his brute force? Disappointing.";
    }
  }
  
  determineContextAction(contextType, details) {
    switch (contextType) {
      case 'conflict_resolution':
        return {
          action: 'mediate',
          outcome: 'compromise',
          dialogue: "Let's find a middle ground. Put down the weapons."
        };
      
      case 'karmic_debt':
        return {
          action: 'restructure_debt',
          terms: 'favorable',
          dialogue: "I can lower the payments... for a favor."
        };
      
      default:
        return { action: 'seek_opportunities', skill: this.negotiationSkill };
    }
  }
  
  generateSynergyDialogue(otherCharacterId, context) {
    switch (otherCharacterId) {
      case 'dharvin':
        return "Dharvin sets the rules. I find the loopholes. It works.";
      case 'kavan':
        return "Kavan is a headache. He sees black and white. I see gray.";
      case 'anya':
        return "Anya records the deal. I make sure it's signed.";
      default:
        return "Everything is negotiable.";
    }
  }
  
  getTransformDialogue() {
    return "THE DEAL IS OFF! I TAKE IT ALL! BLOOM ADJUSTER MIRA!";
  }
  
  triggerDeepBondQuest() {
    this.startQuest('deal_or_duty');
    return {
      questName: 'The Adjuster\'s Bargain',
      description: 'Help Mira decide between personal profit or communal harmony',
      paths: [
        { name: 'Master Broker', outcome: 'Mira becomes ultimate trader, wealthy but isolated', reward: 'Ability: Golden Handshake (gain gold/resources on every kill)' },
        { name: 'Harmonizer', outcome: 'Mira uses skills for peace, beloved by all', reward: 'Companion: Diplomat Mira (prevents enemy aggro, buffs charisma)' }
      ]
    };
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// ORIN - The Karma Healer (Karmic Ledger Keepers Medic)
// ═══════════════════════════════════════════════════════════════════════════

export class Orin extends LivingCharacter {
  constructor(memorySystem, worldState) {
    const data = loadCharacterData('orin');
    super(data, memorySystem, worldState);
    
    // Orin specific state
    this.karmaHealing = 85;
    this.compassion = 95;
    this.spiritualInsight = 80;
    this.burdenOfSins = 40; // Absorbs others' bad karma
    this.purificationRituals = 2;
  }
  
  calculateNewEmotion(action, context) {
    const { soulHealed, sinAbsorbed, overwhelmed, insightGained, gratitude } = context;
    
    if (soulHealed) {
      this.karmaHealing += 2;
      return 'peaceful';
    }
    
    if (sinAbsorbed) {
      this.burdenOfSins += 10;
      return 'heavy';
    }
    
    if (overwhelmed) {
      this.burdenOfSins += 20;
      return 'suffering';
    }
    
    if (insightGained) {
      this.spiritualInsight += 5;
      return 'enlightened';
    }
    
    if (gratitude) return 'warm';
    
    return this.compassion > 80 ? 'serene' : 'troubled';
  }
  
  processSkillReaction(skill) {
    if (skill.resonance === 'Light' || skill.resonance === 'Bloom') {
      this.modifyRelationship('kinship', +12);
      const cleanse = this.cleanseKarma(skill);
      return `Light and Bloom. Pure energy. I can wash away the stains. Effect: ${cleanse.effect}`;
    }
    
    if (skill.healing) {
      this.modifyRelationship('respect', +10);
      return "Healing the soul is as important as the body.";
    }
    
    if (skill.corruption || skill.sin) {
      this.modifyRelationship('pity', +15);
      return "So much darkness... let me help you carry it.";
    }
  }
  
  cleanseKarma(skill) {
    return { effect: 'Remove all debuffs + Restore 20 Karma' };
  }
  
  processChoiceReaction(choice) {
    if (choice.id === 'accept_cleansing') {
      this.modifyRelationship('trust', +25);
      return "Breathe. Let the weight go. You are clean.";
    }
    
    if (choice.id === 'refuse_help') {
      this.modifyRelationship('pity', +10);
      return "You choose to carry the burden? Brave... or foolish.";
    }
    
    if (choice.id === 'help_orin_carry_burden') {
      this.burdenOfSins -= 20;
      this.modifyRelationship('gratitude', +40);
      return "You... you share my load? I have never felt so light. Thank you.";
    }
    
    if (choice.id === 'mock_spirituality') {
      this.spiritualInsight -= 5;
      this.modifyRelationship('respect', -15);
      return "Mockery is a shield for pain. I see through it.";
    }
  }
  
  determineContextAction(contextType, details) {
    switch (contextType) {
      case 'spiritual_crisis':
        return {
          action: 'soul_mend',
          target: 'ally',
          effect: 'Restore Morale',
          dialogue: "Your spirit is fractured. Let me bind it."
        };
      
      case 'corruption_outbreak':
        return {
          action: 'mass_purify',
          cost: 'self_damage',
          dialogue: "I will take the poison into myself. Be free."
        };
      
      default:
        return { action: 'meditate', insight: this.spiritualInsight };
    }
  }
  
  generateSynergyDialogue(otherCharacterId, context) {
    switch (otherCharacterId) {
      case 'dharvin':
        return "Dharvin judges. I heal the judged. We are two hands of the same body.";
      case 'anya':
        return "Anya remembers the sin. I help them forget it.";
      case 'kavan':
        return "Kavan punishes. I forgive. The world needs both.";
      default:
        return "Healing is the only path to peace.";
    }
  }
  
  getTransformDialogue() {
    return "THE SINS ARE TOO HEAVY! I BREAK! KARMA HEALER ORIN!";
  }
  
  triggerDeepBondQuest() {
    this.startQuest('sacrifice_or_self');
    return {
      questName: 'The Sin-Eater\'s Choice',
      description: 'Help Orin decide between absorbing all sins or teaching others to atone',
      paths: [
        { name: 'Sin Eater', outcome: 'Orin absorbs all party debuffs automatically', reward: 'Ability: Martyr\'s Grace (take all ally debuffs, convert to healing)' },
        { name: 'Spiritual Guide', outcome: 'Orin teaches atonement, empowering allies', reward: 'Companion: Enlightened Orin (buffs ally resistance and willpower)' }
      ]
    };
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// ARCHIVIST VEYRA - The Supreme Recordkeeper (Neutral Entity Observers)
// ═══════════════════════════════════════════════════════════════════════════

export class ArchivistVeyra extends LivingCharacter {
  constructor(memorySystem, worldState) {
    const data = loadCharacterData('archivist_veyra');
    super(data, memorySystem, worldState);
    
    // Archivist Veyra specific state
    this.universalRecall = 100;
    this.detachment = 90;
    this.curiosity = 95;
    this.forbiddenArchives = 12;
    this.predecessorMemory = 'haunted';
  }
  
  calculateNewEmotion(action, context) {
    const { newLoreRecorded, archiveBreached, cosmicPatternFound, detachmentTested, predecessorMentioned } = context;
    
    if (newLoreRecorded) {
      this.curiosity += 2;
      return 'intrigued';
    }
    
    if (archiveBreached) {
      this.detachment -= 10;
      return 'alarmed';
    }
    
    if (cosmicPatternFound) {
      this.universalRecall += 1;
      return 'enlightened';
    }
    
    if (detachmentTested) {
      this.detachment -= 5;
      return 'disturbed';
    }
    
    if (predecessorMentioned) return 'melancholy';
    
    return this.detachment > 80 ? 'observant' : 'unsettled';
  }
  
  processSkillReaction(skill) {
    if (skill.resonance === 'Echo' || skill.resonance === 'Neutral') {
      this.modifyRelationship('kinship', +10);
      const recall = this.accessArchive(skill);
      return `Echo and Neutrality. The language of the Archive. I recall... ${recall.entry}.`;
    }
    
    if (skill.knowledge || skill.lore) {
      this.modifyRelationship('respect', +15);
      return "You seek knowledge. I am the source.";
    }
    
    if (skill.oblivion || skill.erasure) {
      this.modifyRelationship('hostility', +20);
      return "Erasure is the enemy. Memory must be preserved.";
    }
  }
  
  accessArchive(skill) {
    return { entry: 'The First Collapse', effect: 'Reveal Boss Weakness' };
  }
  
  processChoiceReaction(choice) {
    if (choice.id === 'share_knowledge') {
      this.modifyRelationship('trust', +20);
      return "Knowledge shared is knowledge preserved. Correct.";
    }
    
    if (choice.id === 'demand_secrets') {
      this.detachment += 5;
      this.modifyRelationship('respect', -10);
      return "You demand? The Archive yields only to the worthy.";
    }
    
    if (choice.id === 'mention_predecessor') {
      this.predecessorMemory = 'active';
      this.modifyRelationship('trust', +15);
      return "You know of them? They... were lost. I remain.";
    }
    
    if (choice.id === 'attempt_breach') {
      this.isHostile = true;
      this.modifyRelationship('trust', -100);
      return "UNAUTHORIZED ACCESS! DATA WRAITH PROTOCOLS ENGAGED!";
    }
  }
  
  determineContextAction(contextType, details) {
    switch (contextType) {
      case 'cosmic_event':
        return {
          action: 'record_event',
          detail: 'high',
          dialogue: "This moment is pivotal. It is written."
        };
      
      case 'timeline_shift':
        return {
          action: 'preserve_memory',
          target: 'player',
          effect: 'Anti-Retcon',
          dialogue: "The timeline shifts, but I remember. And now, so do you."
        };
      
      default:
        return { action: 'catalog', recall: this.universalRecall };
    }
  }
  
  generateSynergyDialogue(otherCharacterId, context) {
    switch (otherCharacterId) {
      case 'observer_prime':
        return "Prime commands. I record. The hierarchy is clear.";
      case 'null_witness':
        return "The Witness sees what I cannot record. Silence has its own data.";
      case 'scribe_of_parity':
        return "Parity seeks balance. I seek truth. Sometimes they differ.";
      default:
        return "All is data.";
    }
  }
  
  getTransformDialogue() {
    return "DATA CORRUPTION! ARCHIVE COLLAPSE! DATA WRAITH VEYRA!";
  }
  
  triggerDeepBondQuest() {
    this.startQuest('memory_or_oblivion');
    return {
      questName: 'The Archivist\'s Burden',
      description: 'Help Archivist Veyra decide between hoarding all knowledge or sharing it to save the future',
      paths: [
        { name: 'Eternal Archive', outcome: 'Veyra seals knowledge to preserve it forever', reward: 'Ability: Akashic Record (access any lore/secret instantly)' },
        { name: 'Open Library', outcome: 'Veyra shares knowledge, risking corruption but empowering all', reward: 'Companion: Enlightened Veyra (reveals all map secrets and enemy stats)' }
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
    faction: "Architects / Karmic",
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

