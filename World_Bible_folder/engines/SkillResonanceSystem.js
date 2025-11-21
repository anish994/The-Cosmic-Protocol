/**
 * ═══════════════════════════════════════════════════════════════════════════
 * SKILL RESONANCE SYSTEM
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * The "Soul" of the game engine.
 * Determines how the living world reacts to the usage of specific skills.
 * Handles the metaphysical axes of:
 * - ORDER <---> CHAOS
 * - CREATION <---> DESTRUCTION
 * - LOVE (Connection) <---> HATE (Isolation)
 * 
 * @version 1.0
 * ═══════════════════════════════════════════════════════════════════════════
 */

export class SkillResonanceSystem {
  constructor() {
    // Metaphysical Definitions for Base Keywords
    this.keywordResonance = {
      'VOID': { chaos: 80, destruction: 50, isolation: 60, flavor: 'The world shivers, as if a cold wind blew through a closed room.' },
      'LIGHT': { chaos: -50, destruction: -50, isolation: -80, flavor: 'The air feels lighter, burdened by fewer shadows.' },
      'CHRONO': { chaos: 20, destruction: 0, isolation: 40, flavor: 'Time stutters, a heartbeat skipped in the chest of the universe.' },
      'NATURE': { chaos: 10, destruction: -40, isolation: -50, flavor: 'Life blooms aggressively, roots seeking purchase in the concrete.' },
      'FOUNDATIONAL': { chaos: -80, destruction: -20, isolation: -20, flavor: 'Reality stabilizes, the geometry of the world snapping into grid.' },
      'INFERNAL': { chaos: 60, destruction: 90, isolation: 30, flavor: 'The heat of judgment, smelling of ozone and burnt karma.' },
      'ASTRAL': { chaos: 30, destruction: 0, isolation: 90, flavor: 'A distant, cold observation from eyes that are not there.' }
    };

    // Specific overrides for known skills
    this.skillOverrides = {
      'void_anchor': { chaos: -30, destruction: 0, isolation: 0, flavor: 'Entropy is forced into a rigid shape, screaming as it solidifies.' },
      'seekers_sight': { chaos: 0, destruction: 0, isolation: -40, flavor: 'Hidden things want to be found, whispering their location to you.' }
    };

    // Faction Personality Database
    this.factionPersonalities = {
      'ashram_remnants': {
        likes: (res) => res.chaos < -30,
        dislikes: (res) => res.chaos > 30,
        likeMsg: "The Ashram nods in approval. 'Order is the only shelter,' they murmur.",
        dislikeMsg: "The Ashram recoils. 'Do not invite the storm inside,' they warn."
      },
      'corruption_champions': {
        likes: (res) => res.chaos > 40 || res.destruction > 40,
        dislikes: (res) => res.chaos < -40,
        likeMsg: "The Champions roar. 'Let it burn! Let it all return to dust!'",
        dislikeMsg: "The Champions sneer. 'Your walls will not save you, builder.'"
      },
      'nomadic_relic_seekers': {
        likes: (res, skill) => skill.type === 'FOUNDATIONAL' || skill.resonance === 'CHRONO',
        dislikes: (res) => false, // They don't care much unless you hurt them
        likeMsg: "The Seekers watch keenly. 'The old ways still work,' one notes, sketching your technique.",
        dislikeMsg: ""
      },
      'post_human_cults': {
        likes: (res) => res.isolation > 40, // They like weird, alien stuff
        dislikes: (res) => res.destruction > 50, // They want to evolve, not destroy
        likeMsg: "The Cult observes. 'A fascinating mutation of the norm,' they click in binary approval.",
        dislikeMsg: "The Cult deems your methods wasteful. 'Destruction without purpose is inefficiency.'"
      },
      'untethered_architects': {
        likes: (res) => res.source === 'FUSION_CALC', // They love Fusions
        dislikes: (res) => res.chaos < -80, // They hate stagnation
        likeMsg: "The Architects lean in. 'A novel configuration. The design... sings.'",
        dislikeMsg: "The Architects turn away. 'Static. Boring. Dead.'"
      }
    };
  }

  /**
   * Analyze a skill (or fusion) to determine its metaphysical weight.
   * @param {Object} skill - { id, type, resonance, isFusion, components[] }
   */
  analyzeSkill(skill) {
    let resonance = { chaos: 0, destruction: 0, isolation: 0, flavor: 'The world watches.' };

    // 1. Check for specific override
    if (this.skillOverrides[skill.id]) {
      return { ...this.skillOverrides[skill.id], source: 'SPECIFIC' };
    }

    // 2. Base Resonance from Type/Keyword
    if (this.keywordResonance[skill.resonance]) {
      resonance = { ...this.keywordResonance[skill.resonance] };
    }

    // 3. Fusion Calculation (The "Systematic" part for uncreated skills)
    if (skill.isFusion && skill.components && skill.components.length > 0) {
      let totalChaos = 0;
      let totalDestruction = 0;
      let totalIsolation = 0;
      let count = 0;

      skill.components.forEach(compType => {
        const compRes = this.keywordResonance[compType];
        if (compRes) {
          totalChaos += compRes.chaos;
          totalDestruction += compRes.destruction;
          totalIsolation += compRes.isolation;
          count++;
        }
      });

      if (count > 0) {
        resonance.chaos = totalChaos / count;
        resonance.destruction = totalDestruction / count;
        resonance.isolation = totalIsolation / count;
      }
      
      resonance.flavor = `A complex resonance of ${skill.components.join(' and ')}.`;
      resonance.source = 'FUSION_CALC';
    }

    return resonance;
  }

  /**
   * Determine the World's Reaction to the skill usage.
   * @param {Object} skill - The skill being used.
   * @param {Object} regionState - Current state of the region (corruption, type).
   */
  getReaction(skill, regionState) {
    const skillRes = this.analyzeSkill(skill);
    const reaction = {
      narrative: '',
      worldEffect: null, // 'STABILIZE', 'CORRUPT', 'AGITATE', 'SOOTHE'
      intensity: 'LOW'
    };

    // --- CHAOS AXIS INTERACTIONS ---
    // High Chaos Skill in High Order Region (Clash)
    if (skillRes.chaos > 50 && regionState.corruption < 20) {
      reaction.narrative = `The orderly reality of ${regionState.name} screams as you tear it with Chaos.`;
      reaction.worldEffect = 'AGITATE';
      reaction.intensity = 'HIGH';
    }
    // High Order Skill in High Chaos Region (Purification/Conflict)
    else if (skillRes.chaos < -50 && regionState.corruption > 80) {
      reaction.narrative = `Your order imposes silence upon the screaming void of ${regionState.name}. The corruption fights back.`;
      reaction.worldEffect = 'STABILIZE';
      reaction.intensity = 'CRITICAL';
    }
    // Resonance Match (Amplification)
    else if (Math.abs(skillRes.chaos - (regionState.corruption - 50) * 2) < 30) {
      reaction.narrative = `The environment hums in harmony with your technique. Power flows effortlessly.`;
      reaction.worldEffect = 'SOOTHE';
      reaction.intensity = 'MEDIUM';
    }
    // High Chaos in High Corruption (Overload/Tear) - If not a match
    else if (skillRes.chaos > 50 && regionState.corruption > 50) {
      reaction.narrative = `The corruption in ${regionState.name} surges violently in response to your power.`;
      reaction.worldEffect = 'AGITATE';
      reaction.intensity = 'HIGH';
    }

    // --- CREATION / DESTRUCTION AXIS ---
    if (skillRes.destruction > 70) {
      reaction.narrative += ` The land scars visibly.`;
    } else if (skillRes.destruction < -50) {
      reaction.narrative += ` Life sprouts from your footsteps.`;
    }

    // --- ISOLATION / CONNECTION (Love/Hate) ---
    if (skillRes.isolation > 50) {
      reaction.narrative += ` You feel the entities here recoil in fear.`;
    } else if (skillRes.isolation < -50) {
      reaction.narrative += ` The spirits of the place draw near, curious and warm.`;
    }

    // Fallback flavor if narrative is empty or just generic
    // We prepend the specific flavor text to give it that "deep" feel
    if (skillRes.flavor) {
      reaction.narrative = `${skillRes.flavor} ${reaction.narrative}`;
    }

    return reaction;
  }

  /**
   * Determine how an NPC reacts to the skill's resonance.
   * @param {Object} skillRes - The analyzed skill resonance.
   * @param {Object} npcProfile - { id, name, faction, personality: { chaosTolerance: number, preferredResonance: string } }
   */
  getNPCReaction(skillRes, npcProfile) {
    const reaction = {
      dialogue: '...',
      relationshipChange: 0,
      emotion: 'NEUTRAL'
    };

    // 1. Faction/Resonance Alignment
    if (npcProfile.personality.preferredResonance === skillRes.source || 
       (npcProfile.personality.preferredResonance === 'VOID' && skillRes.chaos > 50) ||
       (npcProfile.personality.preferredResonance === 'LIGHT' && skillRes.chaos < -50)) {
       
       reaction.dialogue = "Impressive control.";
       reaction.relationshipChange = 5;
       reaction.emotion = 'ADMIRATION';
    }

    // 2. Chaos Tolerance Check
    if (skillRes.chaos > npcProfile.personality.chaosTolerance + 20) {
      reaction.dialogue = "That power... it's too unstable!";
      reaction.relationshipChange = -10;
      reaction.emotion = 'FEAR';
    } else if (skillRes.chaos < -50 && npcProfile.personality.chaosTolerance > 80) {
      reaction.dialogue = "So rigid. You lack imagination.";
      reaction.relationshipChange = -5;
      reaction.emotion = 'BOREDOM';
    }

    return reaction;
  }

  /**
   * Determine how a Faction reacts to the skill's resonance.
   * @param {Object} skill - The skill being used.
   * @param {string} factionId - The ID of the faction observing the skill.
   */
  getFactionReaction(skill, factionId) {
    const skillRes = this.analyzeSkill(skill);
    const reaction = {
      reputationChange: 0,
      message: ''
    };

    const personality = this.factionPersonalities[factionId];
    if (personality) {
      if (personality.likes(skillRes, skill)) {
        reaction.reputationChange = 5; // Standard gain
        reaction.message = personality.likeMsg;
      } else if (personality.dislikes(skillRes, skill)) {
        reaction.reputationChange = -5; // Standard loss
        reaction.message = personality.dislikeMsg;
      }
    }

    return reaction;
  }
}
