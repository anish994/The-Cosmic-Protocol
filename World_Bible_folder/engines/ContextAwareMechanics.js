/**
 * ═══════════════════════════════════════════════════════════════════════════
 * CONTEXT-AWARE MECHANICS SYSTEM
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * Handles dynamic skill modifications based on:
 * - Time of day/night
 * - Location type and corruption level
 * - Weather and environmental conditions
 * - NPC presence and faction alignment
 * - Player state (corruption, alignment, reputation)
 * - Skill synergies and combo potential
 * 
 * @version 1.0_PREMIUM
 * @date 2025-11-20
 * ═══════════════════════════════════════════════════════════════════════════
 */

// ═══════════════════════════════════════════════════════════════════════════
// CONTEXT ANALYZER - Determines all active modifiers
// ═══════════════════════════════════════════════════════════════════════════

export class ContextAnalyzer {
  constructor(worldState, npcMemory) {
    this.worldState = worldState;
    this.npcMemory = npcMemory;
  }

  analyzeContext(context) {
    return {
      temporal: this.analyzeTime(context),
      spatial: this.analyzeLocation(context),
      environmental: this.analyzeEnvironment(context),
      social: this.analyzeSocialContext(context),
      metaphysical: this.analyzeMetaphysicalState(context)
    };
  }

  analyzeTime(context) {
    const hour = context.timeOfDay || 12;
    const isNight = hour < 6 || hour > 20;
    const isDusk = (hour >= 18 && hour <= 20);
    const isDawn = (hour >= 5 && hour <= 7);
    const isMidnight = hour === 0;
    
    return {
      hour,
      isNight,
      isDawn,
      isDusk,
      isMidnight,
      phase: this.determineDayPhase(hour),
      modifiers: this.getTemporalModifiers(hour)
    };
  }

  determineDayPhase(hour) {
    if (hour >= 6 && hour < 12) return 'MORNING';
    if (hour >= 12 && hour < 18) return 'AFTERNOON';
    if (hour >= 18 && hour < 21) return 'EVENING';
    if (hour >= 21 || hour < 3) return 'NIGHT';
    return 'DEEP_NIGHT';
  }

  getTemporalModifiers(hour) {
    const modifiers = [];
    
    if (hour < 6 || hour > 20) {
      modifiers.push({ type: 'SHADOW_BOOST', value: 25, desc: 'Night empowers shadow' });
      modifiers.push({ type: 'LIGHT_PENALTY', value: -15, desc: 'Light dimmed at night' });
    }
    
    if (hour >= 11 && hour <= 13) {
      modifiers.push({ type: 'LIGHT_BOOST', value: 25, desc: 'Noon amplifies light' });
      modifiers.push({ type: 'SHADOW_PENALTY', value: -15, desc: 'Shadows weak at noon' });
    }
    
    if (hour === 0) {
      modifiers.push({ type: 'VOID_SURGE', value: 50, desc: 'Midnight: Void unleashed' });
      modifiers.push({ type: 'REALITY_THIN', value: 30, desc: 'Reality weakens at midnight' });
    }
    
    return modifiers;
  }

  analyzeLocation(context) {
    const { location } = context;
    const locationState = this.worldState.getLocationState(location);
    
    const locationType = this.determineLocationType(location);
    const corruption = locationState.corruption || 0;
    const landmark = locationState.landmark;
    
    return {
      name: location,
      type: locationType,
      corruption,
      landmark,
      modifiers: this.getLocationModifiers(locationType, corruption, landmark),
      permanentChanges: locationState.changes
    };
  }

  determineLocationType(location) {
    const locationName = location.toLowerCase();
    
    if (locationName.includes('city') || locationName.includes('district')) return 'URBAN';
    if (locationName.includes('ruin') || locationName.includes('ancient')) return 'RUINS';
    if (locationName.includes('temple') || locationName.includes('shrine')) return 'SACRED';
    if (locationName.includes('void') || locationName.includes('rift')) return 'VOID_ZONE';
    if (locationName.includes('forest') || locationName.includes('wild')) return 'WILDERNESS';
    if (locationName.includes('under') || locationName.includes('shadow')) return 'UNDERMIGHT';
    
    return 'NEUTRAL';
  }

  getLocationModifiers(type, corruption, landmark) {
    const modifiers = [];
    
    // Type-based modifiers
    const typeModifiers = {
      URBAN: [
        { type: 'FOUNDATIONAL_BOOST', value: 30, desc: 'Urban enhances construction' },
        { type: 'SOCIAL_BOOST', value: 20, desc: 'Social skills empowered' }
      ],
      RUINS: [
        { type: 'FOUNDATIONAL_BOOST', value: 20, desc: 'Ancient materials resonate' },
        { type: 'DIVINATION_BOOST', value: 25, desc: 'History speaks in ruins' }
      ],
      SACRED: [
        { type: 'LIGHT_BOOST', value: 40, desc: 'Sacred ground empowers light' },
        { type: 'INVOCATION_BOOST', value: 30, desc: 'Gods listen here' },
        { type: 'CORRUPTION_RESIST', value: 50, desc: 'Sacred wards corruption' }
      ],
      VOID_ZONE: [
        { type: 'VOID_BOOST', value: 50, desc: 'Void energy saturates area' },
        { type: 'SINGULARITY_BOOST', value: 40, desc: 'Reality unstable' },
        { type: 'CORRUPTION_ACCELERATE', value: 100, desc: 'Corruption spreads rapidly' }
      ],
      WILDERNESS: [
        { type: 'THERAPEUTIC_BOOST', value: 25, desc: 'Nature enhances healing' },
        { type: 'FOUNDATIONAL_PENALTY', value: -10, desc: 'Nature resists construction' }
      ],
      UNDERMIGHT: [
        { type: 'SHADOW_BOOST', value: 35, desc: 'Darkness pervades' },
        { type: 'TANTRA_BOOST', value: 20, desc: 'Energy flows freely' }
      ]
    };
    
    modifiers.push(...(typeModifiers[type] || []));
    
    // Corruption-based modifiers
    if (corruption > 75) {
      modifiers.push({ type: 'CORRUPTION_CRITICAL', value: 50, desc: 'Heavily corrupted' });
      modifiers.push({ type: 'LIGHT_SUPPRESSION', value: -40, desc: 'Light struggles here' });
    } else if (corruption > 50) {
      modifiers.push({ type: 'CORRUPTION_HIGH', value: 30, desc: 'Corrupted area' });
    } else if (corruption > 25) {
      modifiers.push({ type: 'CORRUPTION_MODERATE', value: 15, desc: 'Corruption present' });
    }
    
    // Landmark modifiers
    if (landmark) {
      modifiers.push({ type: 'LANDMARK_POWER', value: 25, desc: `${landmark.name} empowers skills` });
    }
    
    return modifiers;
  }

  analyzeEnvironment(context) {
    const { weather, visibility, temperature } = context;
    
    return {
      weather: weather || 'CLEAR',
      visibility: visibility || 'NORMAL',
      temperature: temperature || 'MODERATE',
      modifiers: this.getEnvironmentalModifiers(weather, visibility)
    };
  }

  getEnvironmentalModifiers(weather, visibility) {
    const modifiers = [];
    
    if (weather === 'STORM') {
      modifiers.push({ type: 'LIGHTNING_BOOST', value: 40, desc: 'Storm empowers lightning' });
      modifiers.push({ type: 'FIRE_PENALTY', value: -25, desc: 'Rain dampens fire' });
    }
    
    if (weather === 'FOG' || visibility === 'LOW') {
      modifiers.push({ type: 'SHADOW_BOOST', value: 20, desc: 'Obscurement aids shadow' });
      modifiers.push({ type: 'ACCURACY_PENALTY', value: -15, desc: 'Visibility reduced' });
    }
    
    return modifiers;
  }

  analyzeSocialContext(context) {
    const { npcs, factions, witnesses } = context;
    
    const presentNPCs = npcs || [];
    const presentFactions = factions || [];
    const witnessCount = witnesses || presentNPCs.length;
    
    return {
      npcs: presentNPCs,
      factions: presentFactions,
      witnessCount,
      modifiers: this.getSocialModifiers(presentNPCs, presentFactions, witnessCount)
    };
  }

  getSocialModifiers(npcs, factions, witnessCount) {
    const modifiers = [];
    
    if (witnessCount > 5) {
      modifiers.push({ type: 'HEAT_RISK', value: 50, desc: 'Many witnesses present' });
      modifiers.push({ type: 'SOCIAL_PRESSURE', value: 25, desc: 'Crowd affects performance' });
    }
    
    if (npcs.includes('Marcus')) {
      modifiers.push({ type: 'TACTICAL_BONUS', value: 15, desc: 'Marcus provides tactical insight' });
    }
    
    if (npcs.includes('Elena')) {
      modifiers.push({ type: 'KNOWLEDGE_BONUS', value: 15, desc: 'Elena enhances understanding' });
    }
    
    if (factions.includes('Lawful')) {
      modifiers.push({ type: 'ILLEGAL_SKILLS_RISK', value: 100, desc: 'Lawful presence restricts dark arts' });
    }
    
    return modifiers;
  }

  analyzeMetaphysicalState(context) {
    const { playerCorruption, playerAlignment, resonance } = context;
    
    return {
      corruption: playerCorruption || 0,
      alignment: playerAlignment || 'NEUTRAL',
      resonance: resonance || 'BALANCED',
      modifiers: this.getMetaphysicalModifiers(playerCorruption, playerAlignment)
    };
  }

  getMetaphysicalModifiers(corruption, alignment) {
    const modifiers = [];
    
    if (corruption > 75) {
      modifiers.push({ type: 'VOID_AFFINITY', value: 50, desc: 'Deep corruption empowers void' });
      modifiers.push({ type: 'LIGHT_REJECTION', value: -40, desc: 'Light rejects corrupted user' });
    }
    
    if (alignment === 'SHADOW') {
      modifiers.push({ type: 'SHADOW_MASTERY', value: 30, desc: 'Shadow alignment grants mastery' });
    }
    
    if (alignment === 'LIGHT') {
      modifiers.push({ type: 'LIGHT_MASTERY', value: 30, desc: 'Light alignment grants purity' });
    }
    
    return modifiers;
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// SKILL MODIFIER ENGINE - Applies context to skills
// ═══════════════════════════════════════════════════════════════════════════

export class SkillModifierEngine {
  constructor(contextAnalyzer) {
    this.contextAnalyzer = contextAnalyzer;
  }

  calculateSkillPower(skill, context) {
    const analysis = this.contextAnalyzer.analyzeContext(context);
    const basePower = skill.combat_effect?.power || skill.tier * 10;
    
    let totalMultiplier = 1.0;
    const activeModifiers = [];
    
    // Apply temporal modifiers
    analysis.temporal.modifiers.forEach(mod => {
      if (this.modifierApplies(mod, skill)) {
        totalMultiplier += (mod.value / 100);
        activeModifiers.push(mod);
      }
    });
    
    // Apply spatial modifiers
    analysis.spatial.modifiers.forEach(mod => {
      if (this.modifierApplies(mod, skill)) {
        totalMultiplier += (mod.value / 100);
        activeModifiers.push(mod);
      }
    });
    
    // Apply environmental modifiers
    analysis.environmental.modifiers.forEach(mod => {
      if (this.modifierApplies(mod, skill)) {
        totalMultiplier += (mod.value / 100);
        activeModifiers.push(mod);
      }
    });
    
    const finalPower = Math.round(basePower * totalMultiplier);
    
    return {
      basePower,
      finalPower,
      multiplier: totalMultiplier,
      activeModifiers,
      bonusPercent: Math.round((totalMultiplier - 1.0) * 100)
    };
  }

  modifierApplies(modifier, skill) {
    const skillType = skill.skill_type?.toLowerCase() || '';
    const engine = skill.engine?.toLowerCase() || '';
    const keywords = skill.keywords || [];
    
    const modType = modifier.type;
    
    // Shadow modifiers
    if (modType.includes('SHADOW') && (
      skillType.includes('shadow') ||
      keywords.includes('shadow') ||
      keywords.includes('dark')
    )) {
      return true;
    }
    
    // Light modifiers
    if (modType.includes('LIGHT') && (
      skillType.includes('light') ||
      keywords.includes('light') ||
      keywords.includes('radiant')
    )) {
      return true;
    }
    
    // Void modifiers
    if (modType.includes('VOID') && (
      skillType.includes('void') ||
      keywords.includes('void') ||
      keywords.includes('entropy')
    )) {
      return true;
    }
    
    // Engine-specific modifiers
    if (modType.includes('FOUNDATIONAL') && engine === 'foundational') return true;
    if (modType.includes('THERAPEUTIC') && engine === 'therapeutic') return true;
    if (modType.includes('INVOCATION') && engine === 'invocation') return true;
    if (modType.includes('TANTRA') && engine === 'tantra') return true;
    if (modType.includes('SINGULARITY') && engine === 'singularity') return true;
    if (modType.includes('DIVINATION') && engine === 'divination') return true;
    
    return false;
  }

  calculateCritChance(skill, context) {
    const analysis = this.contextAnalyzer.analyzeContext(context);
    let baseCrit = skill.combat_effect?.critChance || 10;
    
    // Time-based crit modifiers
    if (analysis.temporal.isMidnight && skill.skill_type?.includes('Void')) {
      baseCrit += 25; // Void crits more at midnight
    }
    
    // Location-based crit modifiers
    if (analysis.spatial.type === 'SACRED' && skill.skill_type?.includes('Light')) {
      baseCrit += 20; // Light crits in sacred places
    }
    
    if (analysis.spatial.corruption > 75 && skill.skill_type?.includes('Shadow')) {
      baseCrit += 30; // Shadow crits in corrupted areas
    }
    
    // Combo potential
    const comboBonus = this.calculateComboBonus(skill, context);
    baseCrit += comboBonus;
    
    return Math.min(95, baseCrit); // Cap at 95%
  }

  calculateUnstableChance(skill, context) {
    const analysis = this.contextAnalyzer.analyzeContext(context);
    let unstableChance = 10;
    
    // High-tier skills more unstable
    unstableChance += (skill.tier || 0) * 5;
    
    // Void skills inherently unstable
    if (skill.skill_type?.includes('Void')) {
      unstableChance += 20;
    }
    
    // Reality fractures increase instability
    if (analysis.spatial.type === 'VOID_ZONE') {
      unstableChance += 30;
    }
    
    // High corruption increases instability
    unstableChance += Math.floor(analysis.spatial.corruption / 10);
    
    // Player corruption matters
    unstableChance += Math.floor((analysis.metaphysical.corruption || 0) / 10);
    
    return Math.min(75, unstableChance); // Cap at 75%
  }

  calculateComboBonus(skill, context) {
    // Check if this skill combos with recently used skills
    const recentSkills = context.recentSkills || [];
    let bonus = 0;
    
    const skillKeywords = new Set(skill.keywords || []);
    
    recentSkills.forEach(recentSkill => {
      const recentKeywords = new Set(recentSkill.keywords || []);
      const sharedKeywords = [...skillKeywords].filter(k => recentKeywords.has(k));
      
      if (sharedKeywords.length > 0) {
        bonus += sharedKeywords.length * 5; // +5% crit per shared keyword
      }
      
      // Special combos
      if (this.isSpecialCombo(skill, recentSkill)) {
        bonus += 15;
      }
    });
    
    return bonus;
  }

  isSpecialCombo(skill1, skill2) {
    const combos = [
      { skills: ['Freeze', 'Shatter'], bonus: true },
      { skills: ['Shadow Bind', 'Void Strike'], bonus: true },
      { skills: ['Light Beam', 'Prism'], bonus: true }
    ];
    
    return combos.some(combo => 
      (combo.skills.includes(skill1.name) && combo.skills.includes(skill2.name))
    );
  }

  generateSynergyEffects(skill, context) {
    const synergies = [];
    const analysis = this.contextAnalyzer.analyzeContext(context);
    
    // Time + Skill synergies
    if (analysis.temporal.isNight && skill.skill_type?.includes('Shadow')) {
      synergies.push({
        type: 'TEMPORAL_SYNERGY',
        name: 'Midnight Shadow',
        effect: 'Shadow skills gain Stealth (+50% evasion)',
        power: 50
      });
    }
    
    // Location + Skill synergies
    if (analysis.spatial.type === 'RUINS' && skill.engine === 'Foundational') {
      synergies.push({
        type: 'SPATIAL_SYNERGY',
        name: 'Ancient Resonance',
        effect: 'Construction skills use ancient materials (double durability)',
        power: 100
      });
    }
    
    // NPC + Skill synergies
    if (analysis.social.npcs.includes('Marcus') && skill.skill_type?.includes('Tactical')) {
      synergies.push({
        type: 'SOCIAL_SYNERGY',
        name: 'Tactical Coordination',
        effect: 'Marcus synchronizes with your tactics (+30% effectiveness)',
        power: 30
      });
    }
    
    return synergies;
  }

  applyContextToSkill(skill, context) {
    const power = this.calculateSkillPower(skill, context);
    const critChance = this.calculateCritChance(skill, context);
    const unstableChance = this.calculateUnstableChance(skill, context);
    const synergies = this.generateSynergyEffects(skill, context);
    
    return {
      skill,
      contextualPower: power,
      critChance,
      unstableChance,
      synergies,
      analysis: this.contextAnalyzer.analyzeContext(context)
    };
  }
}

export default {
  ContextAnalyzer,
  SkillModifierEngine
};
