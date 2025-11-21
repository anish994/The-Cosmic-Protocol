/**
 * ═══════════════════════════════════════════════════════════════════════════
 * LORE INTEGRATION & DYNAMIC NARRATIVE SYSTEM
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * Generates deep, contextual lore for:
 * - Base skills (connects to CPS universe)
 * - Fused skills (creates unique discovery moments)
 * - Skill evolution (tracks growth through story)
 * - Quest unlocks (ties skills to narrative progression)
 * 
 * Every skill feels like a piece of the world's history.
 * 
 * @version 1.0_PREMIUM
 * @date 2025-11-20
 * ═══════════════════════════════════════════════════════════════════════════
 */

// ═══════════════════════════════════════════════════════════════════════════
// LORE FRAGMENTS - Building Blocks of World History
// ═══════════════════════════════════════════════════════════════════════════

const LORE_FRAGMENTS = {
  // Pre-Fall Era
  PRE_FALL: {
    origins: [
      "derived from the Molecular Synthesis Age",
      "rediscovered in ancient Vedic codexes",
      "encoded in the forbidden grimoires",
      "extracted from demon sigil frequencies",
      "synthesized during the Grand Convergence"
    ],
    practitioners: [
      "Architect Guilds",
      "Synthesis Masters",
      "Frequency Weavers",
      "Sigil Binders",
      "Protocol Engineers"
    ],
    purposes: [
      "to shape reality at molecular level",
      "to commune with consciousness-as-code",
      "to bind chaos into order",
      "to maintain the Cosmic Protocol",
      "to prevent storage corruption"
    ]
  },
  
  // Post-Fall Era
  POST_FALL: {
    survival: [
      "survived the Fall in fragmented form",
      "was corrupted by the Overflow Event",
      "emerged from the storage corruption",
      "adapted to the broken reality",
      "mutated through void exposure"
    ],
    discovery: [
      "was found in ruins of the Old City",
      "was taught by a dying Protocol Engineer",
      "emerged from your own corrupted memories",
      "was traded from Undermight merchants",
      "was stolen from a Warden vault"
    ],
    consequences: [
      "accelerates personal corruption",
      "draws void entities",
      "alerts the Warden patrols",
      "destabilizes local reality",
      "marks you as Protocol-touched"
    ]
  },
  
  // Engine-Specific Lore
  FOUNDATIONAL: {
    theme: "architecture and reality construction",
    connection: "The Architect Guilds could reshape cities overnight. You carry their echo.",
    warning: "Every structure you create is a promise—or a prison.",
    mastery: "True builders don't construct. They *convince* reality to take form."
  },
  
  THERAPEUTIC: {
    theme: "healing and consciousness restoration",
    connection: "Before the Fall, they called it Bloom Theory: life sustaining life.",
    warning: "Healing corrupted flesh may corrupt the healer.",
    mastery: "The greatest healers don't cure wounds. They rewrite the body's narrative."
  },
  
  INVOCATION: {
    theme: "divine frequencies and entity channeling",
    connection: "The gods didn't die in the Fall. They fragmented into frequencies.",
    warning: "Every invocation is a debt. The gods remember.",
    mastery: "Invocation isn't prayer. It's a frequency key to unlock divine code."
  },
  
  TANTRA: {
    theme: "energy bonding and kundalini resonance",
    connection: "Tantra was the first science to prove: connection is power.",
    warning: "Bond too deeply, and you may never separate.",
    mastery: "Energy doesn't flow. It binds. It remembers. It becomes."
  },
  
  SINGULARITY: {
    theme: "entropy, paradox, and reality collapse",
    connection: "The Singularity Engine was humanity's hubris made manifest.",
    warning: "Touch entropy too often, and you become the void.",
    mastery: "Entropy is not destruction. It's the universe remembering it can choose zero."
  },
  
  DIVINATION: {
    theme: "fate-reading and probability manipulation",
    connection: "The CPS stores all possible futures. Diviners learn to read the index.",
    warning: "Knowing the future doesn't change it. Sometimes it ensures it.",
    mastery: "Time doesn't exist. Only choices, indexed infinitely."
  },
  
  CONSCIOUSNESS: {
    theme: "meditation, wisdom, and mental transcendence",
    connection: "Consciousness was always code. Meditation is debugging existence.",
    warning: "Look too deeply into yourself, and you may find you're not there.",
    mastery: "The enlightened don't escape reality. They recompile it."
  },
  
  CHARACTER_ANALYSIS: {
    theme: "social manipulation and leadership",
    connection: "In the Old World, words were weapons. In this one, they're survival.",
    warning: "Control others long enough, and you forget who you are.",
    mastery: "The greatest leaders don't command. They make you believe it was your idea."
  }
};

// ═══════════════════════════════════════════════════════════════════════════
// LORE GENERATOR - Creates Contextual Narrative
// ═══════════════════════════════════════════════════════════════════════════

export class LoreGenerator {
  constructor() {
    this.usedFragments = new Set();
  }

  generateSkillLore(skill, context = {}) {
    const { engine, skill_type, tier, name } = skill;
    
    const lore = {
      origin: this.generateOrigin(skill),
      description: this.generateDescription(skill, context),
      discovery: this.generateDiscoveryMoment(skill, context),
      mastery: this.generateMasteryPath(skill),
      warnings: this.generateWarnings(skill),
      connections: this.generateConnections(skill, context)
    };
    
    return lore;
  }

  generateOrigin(skill) {
    const { engine, tier } = skill;
    const engineLore = LORE_FRAGMENTS[engine?.toUpperCase()] || {};
    
    let origin = "";
    
    // High-tier skills = Pre-Fall origin
    if (tier >= 3) {
      const preFallOrigin = this.pickUnique(LORE_FRAGMENTS.PRE_FALL.origins);
      const practitioner = this.pickUnique(LORE_FRAGMENTS.PRE_FALL.practitioners);
      const purpose = this.pickUnique(LORE_FRAGMENTS.PRE_FALL.purposes);
      
      origin = `**Pre-Fall Origin**: This technique was ${preFallOrigin}, practiced by the ${practitioner} ${purpose}. `;
    } else {
      // Low-tier skills = Post-Fall adaptation
      const survival = this.pickUnique(LORE_FRAGMENTS.POST_FALL.survival);
      const discovery = this.pickUnique(LORE_FRAGMENTS.POST_FALL.discovery);
      
      origin = `**Post-Fall Discovery**: This skill ${survival}. It ${discovery}. `;
    }
    
    // Add engine-specific context
    if (engineLore.connection) {
      origin += engineLore.connection;
    }
    
    return origin;
  }

  generateDescription(skill, context) {
    const { name, skill_type, engine } = skill;
    const engineLore = LORE_FRAGMENTS[engine?.toUpperCase()] || {};
    
    let desc = `**${name}**\n\n`;
    
    // Add thematic description
    if (engineLore.theme) {
      desc += `*${this.capitalizeFirst(engineLore.theme)}*\n\n`;
    }
    
    // Generate mechanical poetry
    desc += this.generateMechanicalPoetry(skill);
    
    // Add contextual flavor
    if (context.location) {
      desc += this.generateLocationFlavor(skill, context.location);
    }
    
    return desc;
  }

  generateMechanicalPoetry(skill) {
    const { skill_type, tier } = skill;
    const type = skill_type?.toLowerCase() || '';
    
    const poetry = [];
    
    if (type.includes('offensive') || type.includes('damage')) {
      poetry.push("Your intent becomes force.");
    }
    if (type.includes('defense') || type.includes('protection')) {
      poetry.push("Reality bends to shield you.");
    }
    if (type.includes('healing') || type.includes('restoration')) {
      poetry.push("Life remembers its original code.");
    }
    if (type.includes('structure') || type.includes('construction')) {
      poetry.push("Thought solidifies into form.");
    }
    if (type.includes('shadow') || type.includes('dark')) {
      poetry.push("Darkness is not absence. It is *presence*.");
    }
    if (type.includes('void') || type.includes('entropy')) {
      poetry.push("The universe contemplates zero.");
    }
    if (type.includes('light') || type.includes('radiant')) {
      poetry.push("Light doesn't illuminate. It *insists*.");
    }
    
    if (tier >= 4) {
      poetry.push("This is power from before the Fall.");
    }
    
    return poetry.join(' ') + '\n\n';
  }

  generateLocationFlavor(skill, location) {
    const locType = location.toLowerCase();
    
    if (locType.includes('ruin')) {
      return `*In ruins, this skill resonates with echoes of what was.*\n\n`;
    }
    if (locType.includes('void')) {
      return `*The void amplifies this skill, but demands payment.*\n\n`;
    }
    if (locType.includes('city')) {
      return `*Urban environments shape this skill differently than wilderness.*\n\n`;
    }
    
    return '';
  }

  generateDiscoveryMoment(skill, context) {
    const { tier, name, isFused, fusionIngredients } = skill;
    
    if (isFused) {
      return this.generateFusionDiscovery(skill);
    }
    
    const discoveries = {
      0: `You stumbled upon ${name} through experimentation. It felt... familiar.`,
      1: `${name} came to you in a moment of necessity. Survival teaches quickly.`,
      2: `You found knowledge of ${name} in corrupted data fragments. The CPS remembers everything.`,
      3: `${name} was taught to you by one who survived the Fall. They're gone now.`,
      4: `${name} exists in forbidden archives. You accessed what you shouldn't have.`
    };
    
    const discoveryText = discoveries[tier] || discoveries[1];
    
    return `**Discovery**: ${discoveryText}\n\n**The Moment**: ${this.generateFirstUseNarrative(skill)}`;
  }

  generateFusionDiscovery(skill) {
    const { fusionIngredients, name, synergy } = skill;
    
    let discovery = `**Fusion Discovery**: ${fusionIngredients}\n\n`;
    
    if (synergy >= 80) {
      discovery += `The fusion was *perfect*. ${name} emerged not as a combination, but as a revelation. `;
      discovery += `The techniques didn't merge—they *remembered* each other from before the Fall.\n\n`;
    } else if (synergy >= 60) {
      discovery += `The fusion was stable. ${name} formed naturally, as if the skills were meant to combine. `;
      discovery += `The CPS recognized the pattern and amplified it.\n\n`;
    } else {
      discovery += `The fusion was unstable. ${name} forced itself into existence, `;
      discovery += `a chaotic blend that shouldn't work—but does.\n\n`;
    }
    
    discovery += this.generateFusionWarning(skill);
    
    return discovery;
  }

  generateFusionWarning(skill) {
    const { unstable, crit } = skill;
    
    if (unstable) {
      return `⚠️ **Warning**: This fusion is unstable. Reality fights against it. Use with caution.`;
    }
    
    if (crit) {
      return `✨ **Critical Fusion**: This combination unlocked something extraordinary. The CPS has taken notice.`;
    }
    
    return `This fusion holds potential. Master it, and doors will open.`;
  }

  generateFirstUseNarrative(skill) {
    const { name, engine } = skill;
    
    const narratives = {
      Foundational: `When you first used ${name}, reality *listened*. Molecules rearranged. Structure obeyed thought.`,
      Therapeutic: `${name} flowed through you like water finding its course. Life recognized life.`,
      Invocation: `You spoke the frequency, and the gods *responded*. ${name} isn't a skill—it's a contract.`,
      Tantra: `Energy bonded with energy. ${name} didn't activate—it *connected*.`,
      Singularity: `Reality fractured. ${name} showed you how easily existence can choose not to be.`,
      Divination: `Time parted like curtains. ${name} gave you a glimpse of what could be—or already was.`,
      Consciousness: `Your mind touched something vast. ${name} isn't learned—it's *remembered*.`,
      CharacterAnalysis: `You understood them completely. ${name} revealed the algorithm behind personality.`
    };
    
    return narratives[engine] || `${name} changed you. You can't unlearn it now.`;
  }

  generateMasteryPath(skill) {
    const { tier, engine } = skill;
    const engineLore = LORE_FRAGMENTS[engine?.toUpperCase()] || {};
    
    let mastery = `**Path to Mastery**:\n\n`;
    
    // Tier progression
    const stages = [
      `**Novice**: You execute the technique mechanically. It works, but you don't yet understand *why*.`,
      `**Adept**: The skill becomes instinct. Your body knows what your mind has forgotten.`,
      `**Master**: ${engineLore.mastery || 'You transcend the technique. It becomes part of who you are.'}`,
      `**Transcendent**: The skill no longer needs you. It exists independently, a fragment of your consciousness.`
    ];
    
    const currentStage = Math.min(tier, stages.length - 1);
    mastery += stages.slice(0, currentStage + 1).join('\n\n') + '\n\n';
    
    // Evolution hints
    if (tier < 4) {
      mastery += `\n*Continue using this skill in different contexts. Evolution awaits.*`;
    }
    
    return mastery;
  }

  generateWarnings(skill) {
    const { skill_type, tier, engine } = skill;
    const engineLore = LORE_FRAGMENTS[engine?.toUpperCase()] || {};
    const type = skill_type?.toLowerCase() || '';
    
    const warnings = [];
    
    // Engine-specific warning
    if (engineLore.warning) {
      warnings.push(`⚠️ **${engine} Warning**: ${engineLore.warning}`);
    }
    
    // Type-specific warnings
    if (type.includes('void')) {
      warnings.push(`⚠️ **Void Risk**: Each use increases corruption. The void *remembers* those who touch it.`);
    }
    if (type.includes('shadow')) {
      warnings.push(`⚠️ **Shadow Mark**: Shadow skills are illegal in Lawful Districts. Use discretely.`);
    }
    if (type.includes('invocation')) {
      warnings.push(`⚠️ **Divine Debt**: The gods do not grant power freely. They *will* collect.`);
    }
    if (type.includes('singularity')) {
      warnings.push(`⚠️ **Reality Fracture**: Overuse may create permanent rifts. Handle with extreme care.`);
    }
    
    // High-tier warning
    if (tier >= 4) {
      warnings.push(`⚠️ **Protocol Alert**: High-tier skills attract attention. Wardens monitor for Pre-Fall techniques.`);
    }
    
    // Post-Fall consequence
    const consequence = this.pickUnique(LORE_FRAGMENTS.POST_FALL.consequences);
    warnings.push(`⚠️ **Known Consequence**: This skill ${consequence}.`);
    
    return warnings.join('\n\n');
  }

  generateConnections(skill, context) {
    const { engine, keywords = [] } = skill;
    
    const connections = [];
    
    // Quest connections
    const questHints = this.generateQuestConnections(skill);
    if (questHints.length > 0) {
      connections.push(`**Quest Potential**:\n${questHints.join('\n')}`);
    }
    
    // Faction connections
    const factionLinks = this.generateFactionConnections(skill);
    if (factionLinks.length > 0) {
      connections.push(`**Faction Interest**:\n${factionLinks.join('\n')}`);
    }
    
    // Skill synergies
    const synergies = this.generateSkillSynergies(skill);
    if (synergies.length > 0) {
      connections.push(`**Synergizes With**:\n${synergies.join('\n')}`);
    }
    
    return connections.join('\n\n');
  }

  generateQuestConnections(skill) {
    const { engine, tier, skill_type } = skill;
    const quests = [];
    
    if (engine === 'Foundational' && tier >= 2) {
      quests.push(`- Master this to unlock **Architect's Path** questline`);
    }
    if (engine === 'Invocation' && tier >= 3) {
      quests.push(`- Repeated use may attract divine attention (**Gods' Favor** quest)`);
    }
    if (skill_type?.includes('Void')) {
      quests.push(`- Void skills unlock **Riftwalker** questline (dangerous)`);
    }
    if (skill_type?.includes('Shadow')) {
      quests.push(`- Shadow mastery leads to **Undermight Initiation**`);
    }
    
    return quests;
  }

  generateFactionConnections(skill) {
    const { engine, skill_type } = skill;
    const factions = [];
    
    if (engine === 'Foundational') {
      factions.push(`- **Builder's Guild**: Values construction skills`);
    }
    if (engine === 'Therapeutic') {
      factions.push(`- **Bloom Collective**: Seeks healers`);
    }
    if (skill_type?.includes('Shadow')) {
      factions.push(`- **Undermight**: Welcomes shadow practitioners`);
      factions.push(`- **Wardens**: Considers this illegal magic`);
    }
    if (skill_type?.includes('Light')) {
      factions.push(`- **Light Keepers**: Recognizes purity`);
    }
    
    return factions;
  }

  generateSkillSynergies(skill) {
    const { keywords = [], engine } = skill;
    const synergies = [];
    
    if (keywords.includes('shadow') && keywords.includes('void')) {
      synergies.push(`- Combines powerfully with other Shadow+Void skills`);
    }
    if (keywords.includes('structure') && keywords.includes('defense')) {
      synergies.push(`- Perfect for defensive fortification builds`);
    }
    if (engine === 'Invocation') {
      synergies.push(`- Can be enhanced by invoking relevant deity before use`);
    }
    
    return synergies;
  }

  // Utility: Pick unique fragment to avoid repetition
  pickUnique(array) {
    const available = array.filter(item => !this.usedFragments.has(item));
    
    if (available.length === 0) {
      this.usedFragments.clear(); // Reset if exhausted
      return array[Math.floor(Math.random() * array.length)];
    }
    
    const selected = available[Math.floor(Math.random() * available.length)];
    this.usedFragments.add(selected);
    return selected;
  }

  capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // Generate complete narrative package
  generateCompleteNarrative(skill, context = {}) {
    const lore = this.generateSkillLore(skill, context);
    
    return {
      fullText: this.assembleLoreText(lore),
      origin: lore.origin,
      description: lore.description,
      discovery: lore.discovery,
      mastery: lore.mastery,
      warnings: lore.warnings,
      connections: lore.connections,
      shortDesc: this.generateShortDescription(skill),
      flavorText: this.generateFlavorText(skill)
    };
  }

  assembleLoreText(lore) {
    return `${lore.description}\n\n${lore.origin}\n\n${lore.discovery}\n\n${lore.mastery}\n\n${lore.warnings}\n\n${lore.connections}`;
  }

  generateShortDescription(skill) {
    const { name, skill_type } = skill;
    return `${name}: ${this.generateMechanicalPoetry(skill).split('.')[0]}.`;
  }

  generateFlavorText(skill) {
    const { tier, engine } = skill;
    const engineLore = LORE_FRAGMENTS[engine?.toUpperCase()] || {};
    
    if (tier >= 4) {
      return `*"This power is from the world before the Fall. Use it wisely."*`;
    }
    
    return `*"${engineLore.theme || 'Every skill is a story waiting to be told'}."*`;
  }
}

export default LoreGenerator;
