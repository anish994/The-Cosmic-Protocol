// ═══════════════════════════════════════════════════════════════════════════
// RELIC SEEKERS & ARCHITECTS - BATCH 5
// Nomadic Relic Seekers (Complete) + Architect Echo Orders (Partial)
// ═══════════════════════════════════════════════════════════════════════════

const { LivingCharacter } = require('./LivingCharacterSystem.js');

// ═══════════════════════════════════════════════════════════════════════════
// JANYA - The Relic Matriarch (Relic Seekers Leader)
// ═══════════════════════════════════════════════════════════════════════════

class Janya extends LivingCharacter {
  constructor(memorySystem, worldState) {
    const data = loadCharacterData('janya');
    super(data, memorySystem, worldState);
    
    // Janya specific state
    this.relicWisdom = 90;
    this.unityProgress = 65; // Keeping the tribe together
    this.forbiddenRelics = 4;
    this.traditionVsInnovation = 70; // High = tradition
    this.vaultKeys = 3;
  }
  
  calculateNewEmotion(action, context) {
    const { relicFound, tribeThreatened, traditionChallenged, unityRestored, betrayal } = context;
    
    if (relicFound) {
      this.relicWisdom = Math.min(100, this.relicWisdom + 2);
      return 'reverent';
    }
    
    if (tribeThreatened) {
      this.unityProgress -= 5;
      return 'protective';
    }
    
    if (traditionChallenged) {
      this.traditionVsInnovation -= 5;
      return 'stern';
    }
    
    if (unityRestored) {
      this.unityProgress += 10;
      return 'peaceful';
    }
    
    if (betrayal) return 'sorrowful';
    
    return this.unityProgress < 50 ? 'worried' : 'wise';
  }
  
  processSkillReaction(skill) {
    if (skill.resonance === 'Echo' || skill.resonance === 'Bloom') {
      this.modifyRelationship('kinship', +10);
      const synthesis = this.synthesizeRelicEffect(skill);
      return `Echo and Bloom. The old ways. I can weave this into a relic. Effect: ${synthesis.effect}`;
    }
    
    if (skill.relicBased) {
      this.modifyRelationship('respect', +15);
      return "You carry the weight of history. A fellow seeker?";
    }
    
    if (skill.corruption > 50) {
      this.modifyRelationship('discomfort', +10);
      return "That relic... it's tainted. Be careful, child. Power has a price.";
    }
  }
  
  synthesizeRelicEffect(skill) {
    const effects = [
      { effect: 'Amplify next skill by 30%' },
      { effect: 'Restore 10% HP on skill use' },
      { effect: 'Create protective ward (200 HP)' }
    ];
    return effects[Math.floor(Math.random() * effects.length)];
  }
  
  processChoiceReaction(choice) {
    if (choice.id === 'respect_tradition') {
      this.traditionVsInnovation += 10;
      this.modifyRelationship('trust', +25);
      return "You honor the old ways. The ancestors smile upon you.";
    }
    
    if (choice.id === 'propose_innovation') {
      this.traditionVsInnovation -= 15;
      return "Change is dangerous... but perhaps necessary. I will consider your words.";
    }
    
    if (choice.id === 'donate_relic') {
      this.relicWisdom += 5;
      this.modifyRelationship('gratitude', +30);
      return "This relic belongs to the tribe now. It will protect us.";
    }
    
    if (choice.id === 'steal_relic') {
      this.isHostile = true;
      this.modifyRelationship('trust', -100);
      return "Thief! You steal our history?! You are banished!";
    }
  }
  
  determineContextAction(contextType, details) {
    switch (contextType) {
      case 'faction_war':
        return {
          action: 'deploy_relic_wards',
          targetArea: details.defend,
          effect: 'Sanctuary Zone',
          dialogue: "The relics will hold the line. None shall pass."
        };
      
      case 'relic_discovery':
        return {
          action: 'identify_relic',
          rarity: 'legendary',
          lore: "This... this is from the First Age. A powerful find."
        };
      
      default:
        return { action: 'guide_tribe', unity: this.unityProgress };
    }
  }
  
  generateSynergyDialogue(otherCharacterId, context) {
    switch (otherCharacterId) {
      case 'tovin':
        return "Tovin wanders far, but he always returns. He is our eyes.";
      case 'sira':
        return "Sira guards the vault with her life. I worry she forgets to live it.";
      case 'ryn':
        return "Ryn is reckless, but their finds keep us alive. I must guide them.";
      default:
        return "The tribe is strong when we stand together.";
    }
  }
  
  getTransformDialogue() {
    return "THE VAULT IS BREACHED! ANCESTORS, GRANT ME STRENGTH! RELIC WARDEN JANYA AWAKENS!";
  }
  
  triggerDeepBondQuest() {
    this.startQuest('tradition_or_future');
    return {
      questName: 'The Matriarch\'s Legacy',
      description: 'Help Janya decide between preserving ancient traditions or adapting for survival',
      paths: [
        { name: 'Keeper of Old Ways', outcome: 'Janya preserves ancient power, tribe becomes isolationist but powerful', reward: 'Ability: Ancestral Call (summon spirit guardians)' },
        { name: 'Mother of New Paths', outcome: 'Janya embraces change, tribe integrates with world', reward: 'Companion: Enlightened Janya (relic synthesis + tech integration)' }
      ]
    };
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// TOVIN - The Pathfinder (Relic Seekers Scout)
// ═══════════════════════════════════════════════════════════════════════════

export class Tovin extends LivingCharacter {
  constructor(memorySystem, worldState) {
    const data = loadCharacterData('tovin');
    super(data, memorySystem, worldState);
    
    // Tovin specific state
    this.explorationDrive = 85;
    this.loyaltyToJanya = 75;
    this.secretPaths = 12;
    this.ambition = 40;
    this.corruptionScars = 2;
  }
  
  calculateNewEmotion(action, context) {
    const { newPathDiscovered, trapAvoided, janyaDisapproval, ambitionTrigger, corruptionEncounter } = context;
    
    if (newPathDiscovered) {
      this.explorationDrive += 5;
      return 'excited';
    }
    
    if (trapAvoided) return 'confident';
    
    if (janyaDisapproval) {
      this.loyaltyToJanya -= 5;
      return 'resentful';
    }
    
    if (ambitionTrigger) {
      this.ambition += 10;
      return 'ambitious';
    }
    
    if (corruptionEncounter) {
      this.corruptionScars++;
      return 'cautious';
    }
    
    return this.explorationDrive > 80 ? 'restless' : 'bored';
  }
  
  processSkillReaction(skill) {
    if (skill.resonance === 'Light' || skill.resonance === 'Echo') {
      this.modifyRelationship('kinship', +8);
      const shortcut = this.revealShortcut(skill);
      return `Light reveals the way. I see a path... ${shortcut.name}. Want to take it?`;
    }
    
    if (skill.movement || skill.speed) {
      this.modifyRelationship('respect', +12);
      return "Fast. I like that. Keep up if you can.";
    }
    
    if (skill.corruption > 40) {
      return "Corruption clouds the trail. Harder to see the safe way. Watch your step.";
    }
  }
  
  revealShortcut(skill) {
    const paths = [
      { name: 'Echo Bridge', benefit: 'Skip 1 combat encounter' },
      { name: 'Hidden Tunnel', benefit: 'Access secret loot room' },
      { name: 'High Road', benefit: 'Gain high ground advantage (+20% dmg)' }
    ];
    return paths[Math.floor(Math.random() * paths.length)];
  }
  
  processChoiceReaction(choice) {
    if (choice.id === 'follow_tovin') {
      this.modifyRelationship('trust', +20);
      return "Good choice. I've never lost a traveler yet. Well... not permanently.";
    }
    
    if (choice.id === 'doubt_tovin_path') {
      this.modifyRelationship('respect', -10);
      return "Doubt me? Fine. Walk into the trap. See if I care.";
    }
    
    if (choice.id === 'encourage_tovin_ambition') {
      this.ambition += 15;
      this.loyaltyToJanya -= 10;
      return "You're right. Why should I just scout? I found these paths. They should be mine.";
    }
    
    if (choice.id === 'heal_tovin_scars') {
      this.corruptionScars = Math.max(0, this.corruptionScars - 1);
      this.modifyRelationship('gratitude', +35);
      return "The pain... it's gone. I can run freely again. Thank you.";
    }
  }
  
  determineContextAction(contextType, details) {
    switch (contextType) {
      case 'exploration':
        return {
          action: 'scout_ahead',
          risk: 'medium',
          reward: 'map_reveal',
          dialogue: "I'll check the perimeter. Stay low."
        };
      
      case 'ambush_detected':
        return {
          action: 'deploy_decoy_trail',
          success_chance: 80,
          dialogue: "They're tracking us. I'll lead them the wrong way."
        };
      
      default:
        return { action: 'chart_path', paths: this.secretPaths };
    }
  }
  
  generateSynergyDialogue(otherCharacterId, context) {
    switch (otherCharacterId) {
      case 'janya':
        if (this.ambition > 60) {
          return "Janya is wise, but she's slow. The world is changing. We need to move faster.";
        }
        return "Janya guides the tribe. I guide Janya. It works.";
      case 'sira':
        return "Sira never leaves the vault. How can she understand the world if she never sees it?";
      case 'ryn':
        return "Ryn finds the loot, I find the way out. Good partnership.";
      default:
        return "The path is clear. Let's move.";
    }
  }
  
  getTransformDialogue() {
    return "NO MORE WALLS! NO MORE LIMITS! THE WORLD IS MINE! ECHO PATHFINDER TOVIN!";
  }
  
  triggerDeepBondQuest() {
    this.startQuest('loyalty_or_discovery');
    return {
      questName: 'The Scout\'s Horizon',
      description: 'Help Tovin choose between loyalty to the tribe or his own ambition',
      paths: [
        { name: 'Loyal Scout', outcome: 'Tovin dedicates skills to tribe, becomes Master Pathfinder', reward: 'Ability: Tribe\'s Passage (party moves instantly to any discovered node)' },
        { name: 'Lone Explorer', outcome: 'Tovin leaves to map the unknown, sends rare maps back', reward: 'Companion: Legendary Maps (reveal all secrets in any zone)' }
      ]
    };
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// SIRA - The Relic Guardian (Relic Seekers Defender)
// ═══════════════════════════════════════════════════════════════════════════

export class Sira extends LivingCharacter {
  constructor(memorySystem, worldState) {
    const data = loadCharacterData('sira');
    super(data, memorySystem, worldState);
    
    // Sira specific state
    this.defenseStance = 90;
    this.loyaltyToJanya = 95;
    this.vaultIntegrity = 100;
    this.fearOfFailure = 60;
    this.hiddenDoubts = 10;
  }
  
  calculateNewEmotion(action, context) {
    const { vaultThreatened, defenseSuccessful, janyaPraise, failureFear, doubtTrigger } = context;
    
    if (vaultThreatened) {
      this.defenseStance = 100;
      return 'vigilant';
    }
    
    if (defenseSuccessful) {
      this.fearOfFailure = Math.max(20, this.fearOfFailure - 5);
      return 'proud';
    }
    
    if (janyaPraise) return 'honored';
    
    if (failureFear) {
      this.fearOfFailure += 10;
      return 'anxious';
    }
    
    if (doubtTrigger) {
      this.hiddenDoubts += 10;
      return 'conflicted';
    }
    
    return this.defenseStance > 80 ? 'stoic' : 'relaxed';
  }
  
  processSkillReaction(skill) {
    if (skill.resonance === 'Shadow' || skill.resonance === 'Bloom') {
      this.modifyRelationship('kinship', +10);
      const defense = this.bolsterDefense(skill);
      return `Shadow and Bloom. Strong foundations. Shield reinforced. Effect: ${defense.effect}`;
    }
    
    if (skill.type === 'protection') {
      this.modifyRelationship('respect', +15);
      return "A fellow guardian. You know the weight of the shield.";
    }
    
    if (skill.type === 'theft' || skill.stealth) {
      this.modifyRelationship('suspicion', +20);
      return "Sneaking? Not on my watch. Step back from the vault.";
    }
  }
  
  bolsterDefense(skill) {
    return { effect: 'Shield HP +50%, Reflect 20% damage' };
  }
  
  processChoiceReaction(choice) {
    if (choice.id === 'stand_ground') {
      this.modifyRelationship('respect', +25);
      return "You stand firm. Good. The vault needs strong defenders.";
    }
    
    if (choice.id === 'question_blind_loyalty') {
      this.hiddenDoubts += 15;
      this.loyaltyToJanya -= 5;
      return "Loyalty isn't blind. It's... necessary. Isn't it?";
    }
    
    if (choice.id === 'attempt_vault_breach') {
      this.isHostile = true;
      this.modifyRelationship('trust', -100);
      return "BREACH DETECTED! DEFENSE PROTOCOLS ENGAGED! YOU WILL NOT PASS!";
    }
  }
  
  determineContextAction(contextType, details) {
    switch (contextType) {
      case 'vault_defense':
        return {
          action: 'shield_wall',
          duration: 'infinite',
          dialogue: "I am the wall. Nothing gets through."
        };
      
      case 'faction_war':
        return {
          action: 'guard_vip',
          target: 'Janya',
          effect: 'Damage redirection',
          dialogue: "The Matriarch stays safe. I take the hits."
        };
      
      default:
        return { action: 'patrol_vault', vigilance: this.defenseStance };
    }
  }
  
  generateSynergyDialogue(otherCharacterId, context) {
    switch (otherCharacterId) {
      case 'janya':
        return "I serve the Matriarch. Her word is law. Her safety is my life.";
      case 'tovin':
        return "Tovin runs. I stand. We are opposites, but... we need both.";
      case 'ryn':
        return "Ryn brings dangerous things into the vault. I have to watch them closely.";
      default:
        return "The shield holds.";
    }
  }
  
  getTransformDialogue() {
    return "THE VAULT FALLS?! NEVER! I AM THE VAULT! BLOOM GUARDIAN SIRA!";
  }
  
  triggerDeepBondQuest() {
    this.startQuest('shield_or_person');
    return {
      questName: 'The Guardian\'s Burden',
      description: 'Help Sira find identity beyond being a living shield',
      paths: [
        { name: 'Eternal Guardian', outcome: 'Sira merges with vault wards, becomes immortal defender', reward: 'Ability: Aegis of the Vault (invulnerability for 1 turn)' },
        { name: 'Free Protector', outcome: 'Sira learns to protect by choice, not duty', reward: 'Companion: Liberated Sira (high defense + mobility)' }
      ]
    };
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// RYN - The Relic Forager (Relic Seekers Scavenger)
// ═══════════════════════════════════════════════════════════════════════════

export class Ryn extends LivingCharacter {
  constructor(memorySystem, worldState) {
    const data = loadCharacterData('ryn');
    super(data, memorySystem, worldState);
    
    // Ryn specific state
    this.curiosity = 95;
    this.inventory = [];
    this.greed = 45;
    this.loyaltyToTribe = 60;
    this.forbiddenBlueprints = 2;
  }
  
  calculateNewEmotion(action, context) {
    const { rareFind, tradeSuccess, greedTrigger, tribeNeed, danger } = context;
    
    if (rareFind) {
      this.curiosity += 5;
      return 'ecstatic';
    }
    
    if (tradeSuccess) {
      this.greed = Math.max(20, this.greed - 5);
      return 'satisfied';
    }
    
    if (greedTrigger) {
      this.greed += 10;
      return 'covetous';
    }
    
    if (tribeNeed) {
      this.loyaltyToTribe += 5;
      return 'helpful';
    }
    
    if (danger) return 'evasive';
    
    return this.curiosity > 80 ? 'inquisitive' : 'bored';
  }
  
  processSkillReaction(skill) {
    if (skill.resonance === 'Echo' || skill.resonance === 'Neutral') {
      this.modifyRelationship('kinship', +10);
      const loot = this.scavenge(skill);
      return `Echoes hide treasures. Look what I found! ${loot.name}. Want to trade?`;
    }
    
    if (skill.crafting || skill.resource) {
      this.modifyRelationship('respect', +12);
      return "You know value when you see it. Let's do business.";
    }
    
    if (skill.law || skill.order) {
      this.modifyRelationship('discomfort', +8);
      return "Rules, rules. They just get in the way of discovery.";
    }
  }
  
  scavenge(skill) {
    const items = [
      { name: 'Echo Shard', value: 50 },
      { name: 'Ancient Gear', value: 30 },
      { name: 'Lost Blueprint', value: 100 }
    ];
    return items[Math.floor(Math.random() * items.length)];
  }
  
  processChoiceReaction(choice) {
    if (choice.id === 'trade_fairly') {
      this.modifyRelationship('trust', +20);
      return "Fair deal. I like you. Come back anytime.";
    }
    
    if (choice.id === 'offer_rare_relic') {
      this.curiosity += 20;
      this.modifyRelationship('gratitude', +40);
      return "For me?! This is... amazing! I've never seen this design!";
    }
    
    if (choice.id === 'accuse_of_hoarding') {
      this.greed += 10;
      this.modifyRelationship('trust', -15);
      return "It's not hoarding! It's... preserving history. Yeah, that.";
    }
    
    if (choice.id === 'share_blueprint') {
      this.forbiddenBlueprints++;
      return "A secret design? Oh, the things I can build with this...";
    }
  }
  
  determineContextAction(contextType, details) {
    switch (contextType) {
      case 'resource_node':
        return {
          action: 'extract_resources',
          efficiency: 'high',
          yield: 'double',
          dialogue: "Jackpot! This vein is rich."
        };
      
      case 'faction_war':
        return {
          action: 'supply_run',
          target: 'allies',
          effect: 'Resource boost',
          dialogue: "I got the goods. Just keep the bad guys off me."
        };
      
      default:
        return { action: 'forage', location: 'wilds' };
    }
  }
  
  generateSynergyDialogue(otherCharacterId, context) {
    switch (otherCharacterId) {
      case 'tovin':
        return "Tovin finds the places, I find the stuff. Perfect team.";
      case 'sira':
        return "Sira is so uptight. 'Don't touch that,' 'Put that back.' Ugh.";
      case 'vela':
        return "Vela patches me up when things explode. Which happens. Occasionally.";
      default:
        return "One man's trash is my treasure.";
    }
  }
  
  getTransformDialogue() {
    return "YOU WANT MY TREASURE?! YOU'LL HAVE TO BURY ME WITH IT! ECHO FORAGER RYN!";
  }
  
  triggerDeepBondQuest() {
    this.startQuest('greed_or_community');
    return {
      questName: 'The Forager\'s Find',
      description: 'Help Ryn decide between personal wealth or enriching the tribe',
      paths: [
        { name: 'Master Merchant', outcome: 'Ryn builds trade empire, massive personal wealth', reward: 'Ability: Bribe (remove enemies from combat with gold)' },
        { name: 'Tribe Provider', outcome: 'Ryn shares all finds, tribe prospers', reward: 'Companion: Generous Ryn (free resource generation every turn)' }
      ]
    };
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// VELA - The Relic Healer (Relic Seekers Medic)
// ═══════════════════════════════════════════════════════════════════════════

export class Vela extends LivingCharacter {
  constructor(memorySystem, worldState) {
    const data = loadCharacterData('vela');
    super(data, memorySystem, worldState);
    
    // Vela specific state
    this.healingTouch = 85;
    this.relicRepair = 70;
    this.compassion = 90;
    this.burnout = 20;
    this.forbiddenRituals = 1;
  }
  
  calculateNewEmotion(action, context) {
    const { patientHealed, relicRepaired, overwhelmed, forbiddenKnowledge, gratitude } = context;
    
    if (patientHealed) {
      this.burnout = Math.max(0, this.burnout - 5);
      return 'peaceful';
    }
    
    if (relicRepaired) return 'satisfied';
    
    if (overwhelmed) {
      this.burnout += 10;
      return 'exhausted';
    }
    
    if (forbiddenKnowledge) {
      this.forbiddenRituals++;
      return 'curious';
    }
    
    if (gratitude) return 'warm';
    
    return this.compassion > 80 ? 'caring' : 'tired';
  }
  
  processSkillReaction(skill) {
    if (skill.resonance === 'Bloom' || skill.resonance === 'Light') {
      this.modifyRelationship('kinship', +12);
      const heal = this.performDualHeal(skill);
      return `Bloom and Light. Life and clarity. I can heal flesh and stone alike. Effect: ${heal.effect}`;
    }
    
    if (skill.type === 'healing') {
      this.modifyRelationship('respect', +10);
      return "The healer's path is hard. But we walk it together.";
    }
    
    if (skill.destruction) {
      this.modifyRelationship('discomfort', +5);
      return "So much breaking. I can't fix everything, you know.";
    }
  }
  
  performDualHeal(skill) {
    return { effect: 'Heal Ally 40 HP + Repair Equipped Relic 20%' };
  }
  
  processChoiceReaction(choice) {
    if (choice.id === 'help_vela_heal') {
      this.burnout = Math.max(0, this.burnout - 20);
      this.modifyRelationship('gratitude', +35);
      return "You have gentle hands. Thank you. I needed the help.";
    }
    
    if (choice.id === 'ask_relic_repair') {
      this.modifyRelationship('trust', +10);
      return "Broken relic? Let me see. The bloom can knit it back together.";
    }
    
    if (choice.id === 'push_vela_too_hard') {
      this.burnout += 20;
      this.modifyRelationship('trust', -15);
      return "I... I can't. I'm too tired. Please, stop.";
    }
  }
  
  determineContextAction(contextType, details) {
    switch (contextType) {
      case 'mass_damage':
        return {
          action: 'sanctuary_bloom',
          target: 'party',
          effect: 'AoE Heal + Regen',
          dialogue: "Gather close! The bloom will protect us!"
        };
      
      case 'broken_equipment':
        return {
          action: 'restore_relic',
          target: details.item,
          effect: 'Full Repair',
          dialogue: "It's not lost. Just... resting. I'll wake it up."
        };
      
      default:
        return { action: 'tend_garden', bloom: this.healingTouch };
    }
  }
  
  generateSynergyDialogue(otherCharacterId, context) {
    switch (otherCharacterId) {
      case 'janya':
        return "Janya carries the weight of the tribe. I try to ease her burden.";
      case 'ryn':
        return "Ryn gets hurt a lot. Curiosity has a price. Good thing I'm here.";
      case 'sira':
        return "Sira is strong, but even shields crack. I watch for the fractures.";
      default:
        return "Healing is life. Repair is memory. Both are sacred.";
    }
  }
  
  getTransformDialogue() {
    return "I CANNOT HEAL THIS! THE BLOOM CONSUMES ME! BLOOM HEALER VELA!";
  }
  
  triggerDeepBondQuest() {
    this.startQuest('healer_limit');
    return {
      questName: 'The Mender\'s Limit',
      description: 'Help Vela find the balance between healing others and preserving herself',
      paths: [
        { name: 'Sacrificial Healer', outcome: 'Vela gives everything, gains immense power at health cost', reward: 'Ability: Life Transfer (full heal ally, take 50% dmg)' },
        { name: 'Balanced Mender', outcome: 'Vela learns sustainable healing', reward: 'Companion: Ever-Bloom Vela (passive regen aura)' }
      ]
    };
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// VAYUN - The Echo Architect (Architect Orders Leader)
// ═══════════════════════════════════════════════════════════════════════════

export class Vayun extends LivingCharacter {
  constructor(memorySystem, worldState) {
    const data = loadCharacterData('vayun');
    super(data, memorySystem, worldState);
    
    // Vayun specific state
    this.architecturalVision = 95;
    this.orderStability = 80;
    this.lostBlueprints = 6;
    this.perfectionism = 85;
    this.mentorMemory = 'haunted';
  }
  
  calculateNewEmotion(action, context) {
    const { structureBuilt, flawDetected, orderRestored, chaosIncursion, mentorMentioned } = context;
    
    if (structureBuilt) {
      this.architecturalVision += 2;
      return 'satisfied';
    }
    
    if (flawDetected) {
      this.perfectionism += 5;
      return 'critical';
    }
    
    if (orderRestored) {
      this.orderStability += 5;
      return 'calm';
    }
    
    if (chaosIncursion) {
      this.orderStability -= 10;
      return 'alarmed';
    }
    
    if (mentorMentioned) return 'melancholy';
    
    return this.perfectionism > 80 ? 'exacting' : 'visionary';
  }
  
  processSkillReaction(skill) {
    if (skill.resonance === 'Echo' || skill.resonance === 'Light') {
      this.modifyRelationship('kinship', +10);
      const construct = this.designConstruct(skill);
      return `Echo and Light. Pure geometry. I can build with this. Construct: ${construct.name}`;
    }
    
    if (skill.construct || skill.summon) {
      this.modifyRelationship('respect', +12);
      return "You build. Good. Creation is the highest calling.";
    }
    
    if (skill.entropy || skill.chaos) {
      this.modifyRelationship('hostility', +15);
      return "Entropy... the enemy of structure. Keep that chaos away from my designs.";
    }
  }
  
  designConstruct(skill) {
    const constructs = [
      { name: 'Resonance Pylon', effect: 'Buffs nearby allies' },
      { name: 'Light Bridge', effect: 'Creates safe passage' },
      { name: 'Echo Wall', effect: 'Blocks enemy movement' }
    ];
    return constructs[Math.floor(Math.random() * constructs.length)];
  }
  
  processChoiceReaction(choice) {
    if (choice.id === 'follow_blueprint') {
      this.modifyRelationship('respect', +20);
      return "Precision. Accuracy. Excellent. The structure will hold.";
    }
    
    if (choice.id === 'improvise_build') {
      this.perfectionism += 10;
      this.modifyRelationship('respect', -10);
      return "Improvisation introduces flaws! Stick to the plan!";
    }
    
    if (choice.id === 'recover_lost_blueprint') {
      this.lostBlueprints--;
      this.modifyRelationship('gratitude', +40);
      return "My mentor's design... returned. I... thank you. Truly.";
    }
    
    if (choice.id === 'challenge_vayun_vision') {
      this.orderStability -= 5;
      return "You question the geometry? The math does not lie.";
    }
  }
  
  determineContextAction(contextType, details) {
    switch (contextType) {
      case 'fortification':
        return {
          action: 'erect_fortress',
          defense: 'maximum',
          dialogue: "I will raise a bastion that will stand for a thousand cycles."
        };
      
      case 'structural_failure':
        return {
          action: 'reinforce_lattice',
          urgency: 'high',
          dialogue: "Stabilize the grid! Reinforce the nodes! Do not let it collapse!"
        };
      
      default:
        return { action: 'draft_plans', vision: this.architecturalVision };
    }
  }
  
  generateSynergyDialogue(otherCharacterId, context) {
    switch (otherCharacterId) {
      case 'lirael':
        return "Lirael records the history. I build the future. We are the foundation.";
      case 'saran':
        return "Saran guards what I build. A necessary shield for my art.";
      case 'miren':
        return "Miren weaves patterns... chaotic, but sometimes useful. I prefer rigid lines.";
      default:
        return "Order must be maintained.";
    }
  }
  
  getTransformDialogue() {
    return "THE STRUCTURE COLLAPSES! I MUST BECOME THE PILLAR! ECHO GRANDMASTER VAYUN!";
  }
  
  triggerDeepBondQuest() {
    this.startQuest('perfection_or_adaptation');
    return {
      questName: 'The Architect\'s Flaw',
      description: 'Help Vayun accept imperfection or achieve absolute structural purity',
      paths: [
        { name: 'Perfect Order', outcome: 'Vayun achieves geometric perfection, cold and unyielding', reward: 'Ability: Absolute Barrier (indestructible wall for 3 turns)' },
        { name: 'Organic Design', outcome: 'Vayun learns to build with nature/chaos, flexible strength', reward: 'Companion: Adaptive Vayun (constructs heal and adapt to damage)' }
      ]
    };
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// LIRAEL - The Resonance Scribe (Architect Orders Lorekeeper)
// ═══════════════════════════════════════════════════════════════════════════

export class Lirael extends LivingCharacter {
  constructor(memorySystem, worldState) {
    const data = loadCharacterData('lirael');
    super(data, memorySystem, worldState);
    
    // Lirael specific state
    this.loreKnowledge = 90;
    this.patience = 85;
    this.forbiddenChronicles = 3;
    this.familyHonor = 40; // Low due to exile history
    this.secretAmbition = 30;
  }
  
  calculateNewEmotion(action, context) {
    const { loreRecovered, historyDistorted, patienceTested, familyMentioned, ambitionTrigger } = context;
    
    if (loreRecovered) {
      this.loreKnowledge += 2;
      return 'enlightened';
    }
    
    if (historyDistorted) return 'offended';
    
    if (patienceTested) {
      this.patience -= 10;
      return 'annoyed';
    }
    
    if (familyMentioned) return 'shamed';
    
    if (ambitionTrigger) {
      this.secretAmbition += 10;
      return 'determined';
    }
    
    return this.patience > 70 ? 'serene' : 'distracted';
  }
  
  processSkillReaction(skill) {
    if (skill.resonance === 'Light' || skill.resonance === 'Bloom') {
      this.modifyRelationship('kinship', +10);
      const insight = this.recallLore(skill);
      return `Light and Bloom. The ink of history. I recall a story... ${insight.title}.`;
    }
    
    if (skill.lore || skill.knowledge) {
      this.modifyRelationship('respect', +15);
      return "A fellow scholar. The archives are open to you.";
    }
    
    if (skill.deception) {
      this.modifyRelationship('suspicion', +10);
      return "Lies fade. Ink remains. Be careful what you write.";
    }
  }
  
  recallLore(skill) {
    const stories = [
      { title: 'The First Echo', effect: 'Grant XP bonus' },
      { title: 'The Bloom Schism', effect: 'Reveal enemy weakness' },
      { title: 'The Architect\'s Fall', effect: 'Unlock secret door' }
    ];
    return stories[Math.floor(Math.random() * stories.length)];
  }
  
  processChoiceReaction(choice) {
    if (choice.id === 'listen_to_history') {
      this.modifyRelationship('trust', +20);
      return "You listen well. History rewards the attentive.";
    }
    
    if (choice.id === 'restore_family_honor') {
      this.familyHonor += 20;
      this.modifyRelationship('gratitude', +40);
      return "You... you cleared my name? I... I have no words. Thank you.";
    }
    
    if (choice.id === 'burn_forbidden_scroll') {
      this.loreKnowledge -= 5;
      this.modifyRelationship('hostility', +30);
      return "You destroyed knowledge?! Barbarian! Get out!";
    }
    
    if (choice.id === 'encourage_ambition') {
      this.secretAmbition += 15;
      return "Perhaps... perhaps I should write my own chapter. Not just record others.";
    }
  }
  
  determineContextAction(contextType, details) {
    switch (contextType) {
      case 'ancient_ruin':
        return {
          action: 'decipher_glyphs',
          success: 'high',
          dialogue: "These runes... they speak of the Corruption Wars. Fascinating."
        };
      
      case 'faction_dispute':
        return {
          action: 'cite_precedent',
          effect: 'Resolve conflict',
          dialogue: "According to the Treaty of Echoes, this land is neutral."
        };
      
      default:
        return { action: 'scribe_chronicle', pages: this.loreKnowledge };
    }
  }
  
  generateSynergyDialogue(otherCharacterId, context) {
    switch (otherCharacterId) {
      case 'vayun':
        return "Vayun builds the walls. I write what happens inside them.";
      case 'saran':
        return "Saran protects the books. I read them. He doesn't understand them, but he respects them.";
      case 'miren':
        return "Miren's patterns are like living stories. I try to capture them in ink.";
      default:
        return "The pen is mightier than the sword. Eventually.";
    }
  }
  
  getTransformDialogue() {
    return "HISTORY WILL NOT BE ERASED! I AM THE CHRONICLE! BLOOM SCRIBE LIRAEL!";
  }
  
  triggerDeepBondQuest() {
    this.startQuest('record_or_rewrite');
    return {
      questName: 'The Scribe\'s Quill',
      description: 'Help Lirael decide between recording history impartially or shaping it',
      paths: [
        { name: 'Impartial Observer', outcome: 'Lirael becomes perfect historian, unlocks all lore', reward: 'Ability: Total Recall (identify all enemy stats/weaknesses)' },
        { name: 'History Shaper', outcome: 'Lirael uses lore to influence present, restores family', reward: 'Companion: Fate-Weaver Lirael (buffs/debuffs based on "rewriting" reality)' }
      ]
    };
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// SARAN - The Echo Sentinel (Architect Orders Guardian)
// ═══════════════════════════════════════════════════════════════════════════

export class Saran extends LivingCharacter {
  constructor(memorySystem, worldState) {
    const data = loadCharacterData('saran');
    super(data, memorySystem, worldState);
    
    // Saran specific state
    this.shieldStrength = 90;
    this.loyaltyToVayun = 95;
    this.breachCount = 0;
    this.vulnerabilityFear = 50;
    this.hiddenSoftness = 15;
  }
  
  calculateNewEmotion(action, context) {
    const { attackBlocked, sanctumBreached, vayunOrder, kindnessShown, fearTrigger } = context;
    
    if (attackBlocked) {
      this.shieldStrength = Math.min(100, this.shieldStrength + 2);
      return 'steadfast';
    }
    
    if (sanctumBreached) {
      this.breachCount++;
      this.vulnerabilityFear += 10;
      return 'shamed';
    }
    
    if (vayunOrder) return 'obedient';
    
    if (kindnessShown) {
      this.hiddenSoftness += 5;
      return 'awkward';
    }
    
    if (fearTrigger) return 'guarded';
    
    return this.shieldStrength > 80 ? 'vigilant' : 'tense';
  }
  
  processSkillReaction(skill) {
    if (skill.resonance === 'Shadow' || skill.resonance === 'Echo') {
      this.modifyRelationship('kinship', +10);
      const defense = this.echoDefense(skill);
      return `Shadow and Echo. The perfect defense. My shield resonates. Effect: ${defense.effect}`;
    }
    
    if (skill.type === 'defense') {
      this.modifyRelationship('respect', +15);
      return "Shield-brother. Stand with me.";
    }
    
    if (skill.chaos || skill.unpredictable) {
      this.modifyRelationship('discomfort', +10);
      return "Chaos... hard to predict. Hard to block. I don't like it.";
    }
  }
  
  echoDefense(skill) {
    return { effect: 'Create Echo Clone that absorbs 1 hit' };
  }
  
  processChoiceReaction(choice) {
    if (choice.id === 'stand_with_saran') {
      this.modifyRelationship('trust', +25);
      return "You stand beside me? Good. We hold the line together.";
    }
    
    if (choice.id === 'break_saran_guard') {
      this.vulnerabilityFear += 15;
      this.modifyRelationship('respect', -10);
      return "You think you can break me? Try it.";
    }
    
    if (choice.id === 'show_saran_kindness') {
      this.hiddenSoftness += 10;
      this.modifyRelationship('trust', +15);
      return "I... I am not used to kindness. I am a wall. Walls don't feel.";
    }
    
    if (choice.id === 'question_vayun') {
      this.loyaltyToVayun -= 5;
      return "The Grandmaster knows best. Do not question him.";
    }
  }
  
  determineContextAction(contextType, details) {
    switch (contextType) {
      case 'sanctum_defense':
        return {
          action: 'echo_wall',
          target: 'entry',
          effect: 'Impassable Barrier',
          dialogue: "None shall pass. The Echoes forbid it."
        };
      
      case 'vip_escort':
        return {
          action: 'bodyguard',
          target: details.vip,
          effect: 'Intercept Damage',
          dialogue: "Stay behind me. I am the shield."
        };
      
      default:
        return { action: 'patrol_perimeter', vigilance: this.shieldStrength };
    }
  }
  
  generateSynergyDialogue(otherCharacterId, context) {
    switch (otherCharacterId) {
      case 'vayun':
        return "Vayun commands. I obey. He builds the world, I keep it safe.";
      case 'lirael':
        return "Lirael is fragile. Books don't stop arrows. I do.";
      case 'miren':
        return "Miren plays with dangerous threads. I have to be ready when they snap.";
      default:
        return "Defense is the only truth.";
    }
  }
  
  getTransformDialogue() {
    return "THE LINE IS BROKEN?! NO! I AM THE ECHO! ECHO SENTINEL SARAN!";
  }
  
  triggerDeepBondQuest() {
    this.startQuest('wall_or_warrior');
    return {
      questName: 'The Sentinel\'s Heart',
      description: 'Help Saran find the balance between absolute defense and living his own life',
      paths: [
        { name: 'Iron Wall', outcome: 'Saran becomes ultimate defender, emotionless but unbreakable', reward: 'Ability: Fortress Stance (cannot move, but takes 90% less dmg)' },
        { name: 'Living Shield', outcome: 'Saran opens up, protects friends out of love not duty', reward: 'Companion: Loyal Saran (defends you automatically, grants morale buffs)' }
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
    faction: "Relic Seekers / Architects",
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


module.exports = { Janya };
