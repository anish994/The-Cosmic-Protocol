/**
 * ═══════════════════════════════════════════════════════════════════════════
 * WORLD EXPLORATION ENGINE
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * Handles:
 * - Interactive Map System
 * - Region Management & Movement
 * - Fog of War & Discovery
 * - Dynamic Area Events
 * - Environmental Interactions
 * 
 * @version 1.0
 * @date 2025-11-21
 * ═══════════════════════════════════════════════════════════════════════════
 */

import { WorldEcosystem } from './WorldEcosystem.js';
import { SkillUnlockSystem } from './SkillUnlockSystem.js';
import { SkillResonanceSystem } from './SkillResonanceSystem.js';
import { WorldStabilitySystem } from './WorldStabilitySystem.js';
import { DeathMechanics } from './DeathMechanics.js';
import { InteractionHandler } from './InteractionRegistry.js';
import { RecursionMemorySystem } from './RecursionMemorySystem.js';
import { StoryNodeSystem } from './StoryNodeSystem.js';
import { LoreIntegrationSystem } from './LoreIntegrationSystem.js';
import { LoreQuestSystem } from './LoreQuestSystem.js';
import { WorldEventSystem } from './WorldEventSystem.js';
import { DynamicEventGenerator } from './DynamicEventGenerator.js';
import { EnemyConsciousnessEngine } from './EnemyConsciousnessEngine.js';
import { WorldScarSystem } from './WorldScarSystem.js';

export class WorldExplorationEngine {
  constructor(worldState) {
    this.worldState = worldState;
    this.ecosystem = new WorldEcosystem(); // Initialize the Living World Ecosystem
    this.skillUnlockSystem = new SkillUnlockSystem(); // Initialize the skill unlock system
    this.skillResonanceSystem = new SkillResonanceSystem(); // Initialize the resonance system
    this.worldStabilitySystem = new WorldStabilitySystem(); // Initialize the stability system
    this.deathMechanics = new DeathMechanics(); // Initialize the death system
    this.recursionMemorySystem = new RecursionMemorySystem(worldState); // Initialize the recursion system
    this.storyNodeSystem = new StoryNodeSystem(worldState, this.recursionMemorySystem); // Initialize Story Director
    this.loreSystem = new LoreIntegrationSystem(); // Initialize Knowledge Graph
    this.worldEventSystem = new WorldEventSystem(worldState, this.storyNodeSystem); // Initialize Living World Events
    
    // Ensure player state exists for tracking unlocks
    this.playerState = this.worldState.playerState || {
      unlockedSkills: [],
      questLog: [], // Track completed quests
      resources: { essence: 0 }, // Currency/XP
      reputation: {
        'ashram_remnants': 0,
        'nomadic_relic_seekers': 0,
        'corruption_champions': 0,
        'untethered_architects': 0,
        'post_human_cults': 0
      },
      stats: {
        storms_weathered: 0,
        anomalies_stabilized: 0,
        deaths: 0
      }
    };
    // Sync back to worldState if it was missing
    this.worldState.playerState = this.playerState;

    this.loreQuestSystem = new LoreQuestSystem(this.loreSystem, this.playerState); // Initialize Quest Engine

    this.currentRegion = null;

    // NEW: Reality Layer Engines
    this.scarSystem = new WorldScarSystem(worldState);
    this.enemyEngine = new EnemyConsciousnessEngine(worldState);
    this.eventGenerator = new DynamicEventGenerator(worldState, this.scarSystem, this.ecosystem);
  }

  initializeNPCs() {
    // Initial placements for key characters
    this.npcLocations.set('Suryanatha', 'ashram_council');
    this.npcLocations.set('Vira', 'ashram_gardens');
    this.npcLocations.set('Malakar', 'entropic_sovereign');
    this.npcLocations.set('Janya', 'relic_matriarchs_vault');
    this.npcLocations.set('Laxus Bloodsage', 'nexus_gate');
  }

  /**
   * Simulate a world turn: Corruption spread, Faction moves, NPC roaming, Ecosystem updates
   */
  simulateTurn() {
    const updates = [];
    
    // 0. Run Ecosystem Simulation (Global State, Factions, Economy)
    // We need to pass the full region database to the ecosystem
    // Since getRegionData creates objects on the fly if not cached, we should ideally have a master list.
    // For now, we'll iterate over the known keys or a hardcoded list of key regions to pass to the ecosystem.
    // In a real implementation, this.regionDatabase would be a property.
    // Let's reconstruct the full map for the ecosystem.
    const allRegionIds = [
      'ashram_central', 'ashram_gardens', 'ashram_council',
      'ruins_outskirts', 'wanderers_echo', 'lost_library',
      'ascendant_mind', 'fleshcraft_lab', 'mutation_pits',
      'deep_wilds', 'guardians_bloom', 'relic_matriarchs_vault',
      'void_rift_alpha', 'entropic_sovereign', 'plague_heralds_bloom',
      'nexus_gate'
    ];
    
    const fullMap = {};
    allRegionIds.forEach(id => fullMap[id] = this.getRegionData(id));

    const ecosystemUpdates = this.ecosystem.processTurn(fullMap, this.recursionMemorySystem.memory.loopCount);
    
    // 0b. Check for World Events
    const newEvents = this.worldEventSystem.checkForEvents();
    if (newEvents.length > 0) {
        updates.push(...newEvents.map(e => `[EVENT] ${e.description}`));
    }

    // 1. Process Faction Movements
    allRegionIds.forEach(regionId => {
      const data = this.getRegionData(regionId);
      
      // Skip processing for locked regions
      if (data.isLocked) return;
      
      const controllingFaction = data.controllingFaction;
      if (controllingFaction && controllingFaction !== 'factionless' && Math.random() < 0.7) {
        // Factions attempt to expand or fortify
        const action = Math.random() < 0.5 ? 'expand' : 'fortify';
        
        if (action === 'expand') {
          // Attempt to claim an adjacent neutral or enemy region
          const potentialTargets = data.connections.map(id => this.getRegionData(id))
            .filter(region => region.controllingFaction === 'factionless' || region.controllingFaction !== controllingFaction);
          
          if (potentialTargets.length > 0) {
            const targetRegion = potentialTargets[Math.floor(Math.random() * potentialTargets.length)];
            targetRegion.controllingFaction = controllingFaction;
            updates.push(`${controllingFaction} expands into ${targetRegion.name}.`);
          }
        } else {
          // Fortify current region or seek to improve stability
          if (Math.random() < 0.7) {
            data.stability = (data.stability || 0) + 10;
            updates.push(`${controllingFaction} fortifies ${data.name}.`);
          }
        }
      }
    });

    // 1.5. Update Region States (e.g., stability, corruption)
    allRegionIds.forEach(regionId => {
      const data = this.getRegionData(regionId);
      
      // Skip processing for locked regions
      if (data.isLocked) return;
      
      // Update corruption decay or spread
      if (data.corruption > 0) {
        data.corruption -= Math.random() * 5;
        if (data.corruption < 0) data.corruption = 0;
      }
      
      // Update stability (random events, faction actions, etc.)
      if (data.stability !== undefined) {
        data.stability += Math.floor(Math.random() * 3) - 1; // Slight random fluctuation
        if (data.stability < 0) data.stability = 0;
      }
    });

    // 2. NPC Roaming (Simple random movement for flavor)
    this.npcLocations.forEach((location, npc) => {
      if (Math.random() > 0.8) { // 20% chance to move
        const currentData = this.getRegionData(location);
        if (currentData.connections.length > 0) {
          const nextRegion = currentData.connections[Math.floor(Math.random() * currentData.connections.length)];
          this.npcLocations.set(npc, nextRegion);
          updates.push(`${npc} moved to ${this.getRegionData(nextRegion).name}.`);
        }
      }
    });

    // 3. Time-Sensitive Event Expiration
    this.activeEvents.forEach((events, regionId) => {
      // Iterate backwards to safely remove
      for (let i = events.length - 1; i >= 0; i--) {
        const event = events[i];
        if (event.turnsRemaining !== undefined) {
          event.turnsRemaining--;
          if (event.turnsRemaining <= 0) {
            updates.push(`Event Expired in ${this.getRegionData(regionId).name}: ${event.description}`);
            events.splice(i, 1); // Remove expired event
            
            // Apply consequences for expiration
            if (event.type === 'FACTION_CLASH') {
              updates.push(`Consequence: One faction gained ground due to your inaction.`);
              // Logic to shift faction power could go here
            }
          }
        }
      }
    });

    return updates;
  }

  /**
   * Get rumors/intel about connected regions
   */
  getRegionIntel(regionId) {
    const data = this.getRegionData(regionId);
    const intel = [];

    data.connections.forEach(connId => {
      const connData = this.getRegionData(connId);
      
      // Corruption Intel
      if (connData.corruption > 50) {
        intel.push(`Rumor: The corruption in ${connData.name} is getting worse.`);
      }

      // NPC Intel
      this.npcLocations.forEach((loc, npc) => {
        if (loc === connId) {
          intel.push(`Sighting: ${npc} was seen in ${connData.name}.`);
        }
      });

      // Event Intel
      const events = this.activeEvents.get(connId);
      if (events && events.length > 0) {
        intel.push(`Alert: Something is happening in ${connData.name}.`);
      }
    });

    return intel;
  }

  /**
   * Initialize the world map with starting regions
   */
  initializeWorld(startingRegionId = 'ashram_central') {
    this.currentRegion = startingRegionId;
    this.discoverRegion(startingRegionId);
    this.updateFogOfWar();
  }

  /**
   * Move the player to a new region
   */
  moveToRegion(targetRegionId) {
    const currentRegionData = this.getRegionData(this.currentRegion);
    
    // Validate movement
    if (!currentRegionData.connections.includes(targetRegionId)) {
      return { success: false, reason: "No direct path to this region." };
    }

    const targetRegionData = this.getRegionData(targetRegionId);
    if (targetRegionData.isLocked) {
      return { success: false, reason: "Region is locked. " + targetRegionData.lockReason };
    }

    // Execute movement
    this.currentRegion = targetRegionId;
    this.discoverRegion(targetRegionId);
    this.updateFogOfWar();
    
    // Trigger arrival events
    const events = this.generateRegionEvents(targetRegionId);
    
    // CHECK FOR STORY NODES
    // The Story Director checks if any major narrative beats happen here
    const storyContext = {
        player: this.playerState,
        region: targetRegionData,
        ecosystem: this.ecosystem
    };
    
    // For now, we hardcode a check for specific nodes based on region
    // In a full system, we'd iterate through available nodes
    let storyEvent = null;
    if (targetRegionId === 'ashram_central') {
        storyEvent = this.storyNodeSystem.resolveNode('ashram_entry', storyContext);
    } else if (targetRegionId === 'ashram_archives') {
        storyEvent = this.storyNodeSystem.resolveNode('archive_truth', storyContext);
    }

    let description = `You have arrived at ${targetRegionData.name}. ${targetRegionData.description}`;
    
    if (storyEvent && !storyEvent.error) {
        description += `\n\n[STORY EVENT] ${storyEvent.title}\n${storyEvent.dialogue}`;
        if (storyEvent.outcomeType === 'FAILURE') {
            description += `\n(Outcome: ${storyEvent.outcomeType})`;
        }
    }

    return {
      success: true,
      region: targetRegionData,
      events: events,
      storyEvent: storyEvent,
      description: description
    };
  }

  /**
   * Reveal a region and its immediate connections
   */
  discoverRegion(regionId) {
    if (!this.knownRegions.has(regionId)) {
      this.knownRegions.add(regionId);
      // Reveal connected regions as "known but unexplored"
      const data = this.getRegionData(regionId);
      data.connections.forEach(connId => {
        // Logic to mark as "seen on map" could go here
      });
    }
  }

  /**
   * Update visibility based on current location
   */
  updateFogOfWar() {
    // In a more complex system, this would calculate line-of-sight or radius
    // For now, we just ensure the current region is fully visible
  }

  /**
   * Get data for a specific region
   * In a real implementation, this would fetch from a database or JSON
   */
  getRegionData(regionId) {
    // If we have a cached version of the database, use it to persist state
    if (!this.regionDatabase) {
      this.regionDatabase = {
      // ═══════════════════════════════════════════════════════════════════════════
      // ASHRAM REMNANTS
      // ═══════════════════════════════════════════════════════════════════════════
      'ashram_central': {
        id: 'ashram_central',
        name: 'Ashram Central Plaza',
        type: 'URBAN',
        description: 'The beating heart of the Ashram, where the remnants gather.',
        lore: 'Once a bustling market, now a fortress of hope. The central fountain still flows with purified water, a symbol of resistance.',
        connections: ['ashram_gardens', 'ashram_archives', 'ruins_outskirts'],
        corruption: 10,
        controllingFaction: 'ashram_remnants',
        isLocked: false,
        interactables: [
          { id: 'broken_fountain', type: 'STRUCTURE', status: 'BROKEN', reqSkill: 'FOUNDATIONAL' },
          { id: 'notice_board', type: 'INFO', status: 'ACTIVE', reqSkill: 'NONE' }
        ],
        rewards: { lootTable: 'civilian_supplies', rareChance: 0.05 }
      },
      'ashram_gardens': {
        id: 'ashram_gardens',
        name: 'Meditation Gardens',
        type: 'SACRED',
        description: 'A peaceful sanctuary of blooming flora and quiet streams.',
        lore: 'Planted by the first Architects, these gardens are said to remember the songs of the old world.',
        connections: ['ashram_central', 'bloomfield_grove'],
        corruption: 5,
        controllingFaction: 'ashram_remnants',
        isLocked: false,
        interactables: [
          { id: 'ancient_shrine', type: 'SHRINE', status: 'DORMANT', reqSkill: 'INVOCATION' }
        ],
        rewards: { lootTable: 'herbal_reagents', rareChance: 0.1 }
      },
      'bloomfield_grove': {
        id: 'bloomfield_grove',
        name: 'Bloomfield Grove',
        type: 'SACRED',
        description: 'A radiant grove where light resonance is strongest.',
        lore: 'The birthplace of the Therapeutic arts. The trees here glow with inner light.',
        connections: ['ashram_gardens'],
        corruption: 0,
        controllingFaction: 'ashram_remnants',
        isLocked: false,
        mechanics: ['HEALING_AURA'],
        interactables: [
          { id: 'light_well', type: 'SOURCE', status: 'ACTIVE', reqSkill: 'THERAPEUTIC' }
        ]
      },
      'echo_caverns': {
        id: 'echo_caverns',
        name: 'Echo Caverns',
        type: 'UNDERMIGHT',
        description: 'A mysterious sub-area where echoes of the past linger.',
        lore: 'Time flows strangely here. The walls whisper secrets of previous loops.',
        connections: ['ashram_archives'],
        corruption: 25,
        controllingFaction: 'neutral_entity_observers',
        isLocked: true,
        lockReason: 'Requires Echo Resonance > 20',
        mechanics: ['TIME_PUZZLE'],
        interactables: [
          { id: 'temporal_rift', type: 'ANOMALY', status: 'UNSTABLE', reqSkill: 'ECHO' }
        ]
      },

      // ═══════════════════════════════════════════════════════════════════════════
      // FACTIONLESS ZONES
      // ═══════════════════════════════════════════════════════════════════════════
      'ruins_outskirts': {
        id: 'ruins_outskirts',
        name: 'Crumbling Outskirts',
        type: 'RUINS',
        description: 'The edge of safety. Beyond lies the wild.',
        lore: 'The remains of the old city wall. Scavengers pick through the bones of the past.',
        connections: ['ashram_central', 'deep_wilds', 'relic_market'],
        corruption: 40,
        controllingFaction: 'factionless',
        isLocked: false,
        interactables: [
          { id: 'collapsed_bridge', type: 'OBSTACLE', status: 'BLOCKED', reqSkill: 'FOUNDATIONAL' }
        ],
        rewards: { lootTable: 'scrap_materials', rareChance: 0.1 }
      },
      'relic_market': {
        id: 'relic_market',
        name: 'Relic Market',
        type: 'URBAN',
        description: 'A bustling trade hub where rare relics are exchanged.',
        lore: 'If it exists, you can buy it here. For a price.',
        connections: ['ruins_outskirts', 'wanderers_echo'],
        corruption: 30,
        controllingFaction: 'factionless',
        isLocked: false,
        interactables: [
          { id: 'black_market_stall', type: 'VENDOR', status: 'OPEN', reqSkill: 'SOCIAL' }
        ]
      },
      'wanderers_echo': {
        id: 'wanderers_echo',
        name: 'Wanderer\'s Echo',
        type: 'NEUTRAL',
        description: 'A neutral hub for travelers and merchants.',
        lore: 'A safe haven for those who refuse to choose a side.',
        connections: ['relic_market', 'lost_library'],
        corruption: 20,
        controllingFaction: 'factionless',
        isLocked: false
      },
      'lost_library': {
        id: 'lost_library',
        name: 'The Lost Library',
        type: 'RUINS',
        description: 'A hidden sub-area containing forbidden knowledge.',
        lore: 'Buried beneath the market, this library holds the truths the factions want to hide.',
        connections: ['wanderers_echo'],
        corruption: 35,
        controllingFaction: 'factionless',
        isLocked: true,
        lockReason: 'Requires Ancient Key or Hacking > 50',
        rewards: { lootTable: 'forbidden_tomes', rareChance: 0.5 }
      },

      // ═══════════════════════════════════════════════════════════════════════════
      // POST-HUMAN CULTS
      // ═══════════════════════════════════════════════════════════════════════════
      'ascendant_mind': {
        id: 'ascendant_mind',
        name: 'The Ascendant Mind',
        type: 'TECH',
        description: 'The cult\'s stronghold, humming with server noise.',
        lore: 'Here, flesh is discarded. Only the code remains.',
        connections: ['fleshcraft_lab', 'prophecy_chamber'],
        corruption: 60,
        controllingFaction: 'post_human_cults',
        isLocked: false
      },
      'fleshcraft_lab': {
        id: 'fleshcraft_lab',
        name: 'Fleshcraft Lab',
        type: 'TECH',
        description: 'Vex\'s bio-engineering lab. The walls breathe, and the pipes pump fluids that look suspiciously like liquefied soul-matter.',
        lore: 'The screams here are not of pain, but of a twisted, ecstatic "becoming". Limbs are commodities, and souls are fuel.',
        connections: ['ascendant_mind', 'mutation_pits'],
        corruption: 75,
        controllingFaction: 'post_human_cults',
        isLocked: false,
        mechanics: ['TOXIC_HAZARD', 'SANITY_DRAIN'],
        interactables: [
          { id: 'bio_vat', type: 'HAZARD', status: 'LEAKING', reqSkill: 'FOUNDATIONAL' }
        ]
      },
      'mutation_pits': {
        id: 'mutation_pits',
        name: 'Mutation Pits',
        type: 'VOID_ZONE',
        description: 'A mass grave of living flesh. Limbs and eyes fuse into a carpet of agony.',
        lore: 'The failed experiments are cast down here. They have evolved into a hive-mind of suffering that whispers your name.',
        connections: ['fleshcraft_lab'],
        corruption: 90,
        controllingFaction: 'post_human_cults',
        isLocked: true,
        lockReason: 'Requires Bio-Hazard Suit or Therapeutic > 60',
        rewards: { lootTable: 'mutagen_samples', rareChance: 0.3 }
      },

      // ═══════════════════════════════════════════════════════════════════════════
      // NOMADIC RELIC SEEKERS
      // ═══════════════════════════════════════════════════════════════════════════
      'deep_wilds': {
        id: 'deep_wilds',
        name: 'The Deep Wilds',
        type: 'WILDERNESS',
        description: 'Untamed nature reclaiming the old world.',
        lore: 'The trees here are older than the Fall. They watch.',
        connections: ['ruins_outskirts', 'guardians_bloom', 'void_rift_alpha'],
        corruption: 60,
        controllingFaction: 'nomadic_relic_seekers',
        isLocked: false,
        interactables: [
          { id: 'corrupted_grove', type: 'HAZARD', status: 'ACTIVE', reqSkill: 'THERAPEUTIC' }
        ]
      },
      'guardians_bloom': {
        id: 'guardians_bloom',
        name: 'Guardian\'s Bloom',
        type: 'WILDERNESS',
        description: 'Sira\'s defensive stronghold, protecting the Seekers\' relics.',
        lore: 'A fortress made of living wood and ancient stone.',
        connections: ['deep_wilds', 'relic_matriarchs_vault'],
        corruption: 40,
        controllingFaction: 'nomadic_relic_seekers',
        isLocked: false,
        mechanics: ['DEFENSE_EVENT']
      },
      'relic_matriarchs_vault': {
        id: 'relic_matriarchs_vault',
        name: 'Relic Matriarch\'s Vault',
        type: 'SACRED',
        description: 'Janya\'s sanctuary, where rare relics are stored.',
        lore: 'The history of the world is stored here, one artifact at a time.',
        connections: ['guardians_bloom'],
        corruption: 20,
        controllingFaction: 'nomadic_relic_seekers',
        isLocked: true,
        lockReason: 'Requires Seeker Reputation > 50',
        rewards: { lootTable: 'ancient_relics', rareChance: 0.8 }
      },

      // ═══════════════════════════════════════════════════════════════════════════
      // CORRUPTION CHAMPIONS
      // ═══════════════════════════════════════════════════════════════════════════
      'void_rift_alpha': {
        id: 'void_rift_alpha',
        name: 'Void Rift Alpha',
        type: 'VOID_ZONE',
        description: 'A tear in reality where the Void bleeds through.',
        lore: 'The first tear. It whispers to those who listen.',
        connections: ['deep_wilds', 'entropic_sovereign'],
        corruption: 95,
        controllingFaction: 'corruption_champions',
        isLocked: true,
        lockReason: 'Requires Void Resonance > 50',
        mechanics: ['VOID_DRAIN'],
        interactables: [
          { id: 'temporal_glitch', type: 'ANOMALY', status: 'UNSTABLE', reqSkill: 'CHRONO' }
        ]
      },
      'entropic_sovereign': {
        id: 'entropic_sovereign',
        name: 'Entropic Sovereign',
        type: 'VOID_ZONE',
        description: 'Malakar\'s stronghold, where entropy is worshipped.',
        lore: 'Here, decay is not an end, but a beginning.',
        connections: ['void_rift_alpha', 'plague_heralds_bloom'],
        corruption: 100,
        controllingFaction: 'corruption_champions',
        isLocked: false,
        rewards: { lootTable: 'void_artifacts', rareChance: 0.6 }
      },
      'plague_heralds_bloom': {
        id: 'plague_heralds_bloom',
        name: 'Plague Herald\'s Bloom',
        type: 'VOID_ZONE',
        description: 'Veyra\'s domain, filled with toxic blooms.',
        lore: 'Beauty and death, intertwined in a poisonous embrace.',
        connections: ['entropic_sovereign'],
        corruption: 90,
        controllingFaction: 'corruption_champions',
        isLocked: false,
        mechanics: ['TOXIC_SPORES']
      },

      // ═══════════════════════════════════════════════════════════════════════════
      // UNTETHERED ARCHITECTS (MYTHIC)
      // ═══════════════════════════════════════════════════════════════════════════
      'nexus_gate': {
        id: 'nexus_gate',
        name: 'The Nexus Gate',
        type: 'MYTHIC',
        description: 'A legendary area tied to recursion and fusion mechanics.',
        lore: 'The point where all timelines converge. Laxus Bloodsage watches from here.',
        connections: ['echo_caverns'], // Hidden connection
        corruption: 0,
        controllingFaction: 'untethered_architects',
        isLocked: true,
        lockReason: 'Requires "Paradox Key" or 100% World Exploration',
        mechanics: ['FUSION_CHAMBER'],
        interactables: [
          { id: 'fusion_console', type: 'MYTHIC', status: 'ACTIVE', reqSkill: 'SINGULARITY' }
        ]
      }
    };
      
      // Add missing regions from the original list to prevent errors if they weren't in the snippet
      const missingRegions = ['ruins_outskirts', 'wanderers_echo', 'lost_library', 'ascendant_mind', 'fleshcraft_lab', 'mutation_pits', 'deep_wilds', 'guardians_bloom', 'relic_matriarchs_vault', 'void_rift_alpha', 'entropic_sovereign', 'plague_heralds_bloom', 'nexus_gate', 'ashram_council', 'ashram_archives'];
      missingRegions.forEach(id => {
          if (!this.regionDatabase[id]) {
              this.regionDatabase[id] = {
                  id: id,
                  name: id.replace(/_/g, ' ').toUpperCase(),
                  type: 'WILD',
                  description: 'A region yet to be fully mapped.',
                  connections: [],
                  corruption: 50,
                  controllingFaction: 'factionless',
                  interactables: []
              };
          }
      });
    }

    const data = this.regionDatabase[regionId];
    if (!data) return null;

    // --- APPLY WORLD SCARS (Recursion Effects) ---
    if (this.recursionMemorySystem) {
        if (this.recursionMemorySystem.hasWorldScar('ASHRAM_BURNED') && regionId === 'ashram_gardens') {
            data.description = "A blackened wasteland of ash and sorrow. The gardens burned in a past life, and the scars remain.";
            data.corruption = 80; 
            data.type = 'SCARRED';
        }
        if (this.recursionMemorySystem.hasWorldScar('VOID_RIFT_SEALED') && regionId === 'void_rift_alpha') {
            data.description = "The rift is silent, sealed by a massive crystalline anchor from a previous timeline.";
            data.corruption = 0;
            data.type = 'STABILIZED';
        }
    }

    return data;
  }

  /**
   * Generate dynamic events for a region based on its state
   */
  generateRegionEvents(regionId) {
    const data = this.getRegionData(regionId);
    const events = [];

    // 1. Corruption Events (Brutal & Graphic)
    if (data.corruption > 50) {
      if (Math.random() > 0.5) {
        const isNightmare = data.corruption > 80;
        events.push({
          id: `evt_corr_${Date.now()}`,
          type: isNightmare ? 'HORROR' : 'COMBAT',
          severity: isNightmare ? 'CRITICAL' : 'HIGH',
          description: isNightmare 
            ? 'Reality tears open. A Void-Hollowed Husk screams with the voice of your lost loved ones.' 
            : 'A corrupted anomaly manifests, dripping with liquid entropy.',
          enemies: isNightmare ? ['Void-Hollowed Husk', 'Memory Eater'] : ['Corrupted Sentinel', 'Void Wisp'],
          effect: isNightmare ? 'SANITY_DRAIN_MAJOR' : 'NONE',
          rewards: { experience: isNightmare ? 300 : 100, loot: 'Void Shard' }
        });
      }
    }

    // 2. Faction Events
    if (data.faction === 'SEEKERS') {
      if (Math.random() > 0.7) {
        events.push({
          id: `evt_fac_${Date.now()}`,
          type: 'TRADE',
          description: 'A Seeker merchant offers rare blueprints.',
          interaction: 'TRADE',
          rewards: { reputation: 'seekers_alliance' }
        });
      }
    }

    // 3. Type-Specific Discovery Events
    if (data.type === 'RUINS') {
      if (Math.random() > 0.6) {
        events.push({
          id: `evt_disc_${Date.now()}`,
          type: 'DISCOVERY',
          description: 'You spot an ancient terminal flickering with power.',
          interaction: 'HACK',
          rewards: { lore: 'PRE_FALL_LOG_01', experience: 200 }
        });
      }
    }

    // 4. Dynamic Mechanics Events
    if (data.mechanics && data.mechanics.includes('DEFENSE_EVENT')) {
      if (Math.random() > 0.7) {
        events.push({
          id: `evt_def_${Date.now()}`,
          type: 'COMBAT',
          severity: 'HIGH',
          description: 'Raiders are attacking the Relic Vault! Defend it!',
          enemies: ['Scavenger Raider', 'Void Mercenary'],
          rewards: { reputation: 'nomadic_relic_seekers', loot: 'Ancient Relic' }
        });
      }
    }

    // 5. Cross-Faction Conflict Events
    // Check neighbors for hostile factions
    const neighbors = data.connections.map(id => this.getRegionData(id));
    // Simple hostility check: If neighbors have different factions and neither is 'factionless' or 'none'
    const hostileNeighbor = neighbors.find(n => 
      n.controllingFaction !== 'none' && 
      n.controllingFaction !== 'factionless' && 
      n.controllingFaction !== data.controllingFaction
    );

    if (hostileNeighbor && data.controllingFaction !== 'factionless' && Math.random() > 0.8) {
      events.push({
        id: `evt_war_${Date.now()}`,
        type: 'FACTION_CLASH',
        severity: 'HIGH',
        description: `Skirmish detected! ${data.controllingFaction} forces are clashing with ${hostileNeighbor.controllingFaction} raiders.`,
        choices: [
          { action: 'SUPPORT_DEFENDER', label: `Support ${data.controllingFaction}` },
          { action: 'SUPPORT_ATTACKER', label: `Support ${hostileNeighbor.controllingFaction}` },
          { action: 'IGNORE', label: 'Ignore the conflict' }
        ],
        turnsRemaining: 3, // Time-Sensitive
        rewards: { reputation: 'variable' }
      });
    }

    // 6. Recursion/Loop Events (Meta-Progression)
    // Assuming worldState has loopCount, defaulting to 1 if not present
    const loopCount = this.worldState.loopCount || 1;
    if (loopCount > 1 && Math.random() > 0.9) {
      events.push({
        id: `evt_loop_${Date.now()}`,
        type: 'RECURSION_ECHO',
        severity: 'MYTHIC',
        description: 'You see a phantom of yourself from a previous loop dying here. It points to a hidden cache.',
        interaction: 'ABSORB_ECHO',
        rewards: { lore: 'LOOP_MEMORY', experience: 500, skillPoint: 1 }
      });
    }

    // 7. Environmental/Weather Events
    if (data.corruption > 70 && Math.random() > 0.7) {
      events.push({
        id: `evt_storm_${Date.now()}`,
        type: 'ENVIRONMENTAL',
        severity: 'CRITICAL',
        description: 'A Void Storm is brewing. Visibility is near zero. Seek shelter immediately.',
        effect: 'MOVEMENT_LOCKED',
        turnsRemaining: 2 // Must be resolved or waited out
      });
    }

    // 8. Fusion Discovery Events (Legendary)
    if (data.type === 'MYTHIC' || (data.type === 'VOID_ZONE' && data.corruption > 90)) {
      if (Math.random() > 0.85) {
        events.push({
          id: `evt_fusion_${Date.now()}`,
          type: 'FUSION_TRIAL',
          severity: 'MYTHIC',
          description: 'The laws of physics are breaking down. A convergence of energies forms a trial.',
          interaction: 'ATTEMPT_TRIAL',
          trialType: 'FUSION_TRIAL_STORM', // Matches the requirement in SkillUnlockSystem
          rewards: { experience: 1000, skillPoint: 2 }
        });
      }
    }

    this.activeEvents.set(regionId, events);
    return events;
  }

  /**
   * Resolve an active event
   */
  resolveEvent(regionId, eventId, playerAction) {
    const events = this.activeEvents.get(regionId) || [];
    const eventIndex = events.findIndex(e => e.id === eventId);
    
    if (eventIndex === -1) return { success: false, reason: "Event not found or expired." };
    
    const event = events[eventIndex];
    
    // Simple resolution logic (can be expanded)
    let outcome = { success: true, message: "Event resolved.", rewards: event.rewards };
    
    if (event.type === 'COMBAT') {
      outcome.message = `You defeated the ${event.enemies.join(' and ')}!`;
    } else if (event.type === 'DISCOVERY') {
      this.discoveredLandmarks.add(`${regionId}_landmark`);
      outcome.message = `You discovered: ${event.description}`;
    } else if (event.type === 'HAZARD') {
      outcome.message = `You survived the hazard: ${event.description}`;
    } else if (event.type === 'FUSION_TRIAL') {
      // Branching Logic for Fusion Trials
      if (playerAction === 'STABILIZE') {
        outcome.message = `You stabilized the Fusion Trial: ${event.description}. The energy becomes a permanent boon.`;
        outcome.rewards = { ...event.rewards, stability: 10 };
      } else if (playerAction === 'ABSORB') {
        outcome.message = `You absorbed the raw energy of the Fusion Trial: ${event.description}. Power surges through you, but at a cost.`;
        outcome.rewards = { ...event.rewards, corruption: 10, experience: 1500 };
      } else {
        outcome.message = `You completed the Fusion Trial: ${event.description}`;
      }

      // Trigger Unlock for Fusion
      const fusionUnlock = this.skillUnlockSystem.checkUnlocks('EVENT_SURVIVAL', { 
        eventType: event.trialType, 
        playerState: this.playerState 
      });
      if (fusionUnlock.length > 0) {
        outcome.message += ` [FUSION DISCOVERED: ${fusionUnlock.join(', ')}]`;
      }
    }

    // INTEGRATION: Check for Skill Unlocks based on Event Resolution
    const unlockResults = this.skillUnlockSystem.checkUnlocks('EVENT_SURVIVAL', { 
      eventType: event.type, 
      playerState: this.playerState 
    });
    if (unlockResults.length > 0) {
      outcome.message += ` [UNLOCKED: ${unlockResults.join(', ')}]`;
    }

    // INTEGRATION: Handle Reputation Rewards
    if (event.rewards && event.rewards.reputation) {
      const faction = event.rewards.reputation; 
      // Handle simple string reputation rewards (e.g. 'seekers_alliance' -> 'nomadic_relic_seekers')
      // Mapping simplified for this implementation
      let targetFaction = faction;
      if (faction === 'seekers_alliance') targetFaction = 'nomadic_relic_seekers';
      
      if (this.playerState.reputation[targetFaction] !== undefined) {
        this.playerState.reputation[targetFaction] += 10; 
        const repUnlock = this.skillUnlockSystem.checkUnlocks('REPUTATION', { 
          factionId: targetFaction, 
          value: this.playerState.reputation[targetFaction], 
          playerState: this.playerState 
        });
        if (repUnlock.length > 0) {
          outcome.message += ` [FACTION REWARD: ${repUnlock.join(', ')}]`;
        }
      }
    }

    // Remove event after resolution
    events.splice(eventIndex, 1);
    this.activeEvents.set(regionId, events);
    
    return outcome;
  }

  /**
   * Trigger Player Death
   * @param {string} killerId - Name/ID of the killer
   */
  triggerDeath(killerId) {
    const regionData = this.getRegionData(this.currentRegion);
    const deathResult = this.deathMechanics.handleDeath(this.playerState, regionData, killerId);
    
    // Respawn Logic
    this.currentRegion = deathResult.respawnPoint;
    
    return deathResult;
  }

  /**
   * Attempt to recover lost essence (Bloodstain)
   */
  recoverEssence() {
    return this.deathMechanics.recoverBloodstain(this.playerState, this.currentRegion);
  }

  /**
   * Interact with the environment using a skill
   */
  interactWithEnvironment(skill, targetObjectId) {
    const regionData = this.getRegionData(this.currentRegion);
    const interactable = regionData.interactables ? regionData.interactables.find(i => i.id === targetObjectId) : null;

    // 1. Calculate Resonance Reaction (The "Soul" Check)
    const resonanceReaction = this.skillResonanceSystem.getReaction(skill, regionData);
    let baseDescription = resonanceReaction.narrative;

    // 2. Apply Stability Change (The "Body" Consequence)
    const stabilityResult = this.worldStabilitySystem.applyStabilityChange(
      regionData, 
      resonanceReaction.worldEffect, 
      resonanceReaction.intensity
    );

    if (stabilityResult.message) {
      baseDescription += `\n[WORLD EFFECT] ${stabilityResult.message}`;
    }
    if (stabilityResult.transformed) {
      baseDescription += `\n[CRITICAL] The region has permanently changed!`;
    }

    // 3. Faction Reactions (The "Social" Consequence)
    if (regionData.controllingFaction && regionData.controllingFaction !== 'factionless' && regionData.controllingFaction !== 'none') {
      const factionReaction = this.skillResonanceSystem.getFactionReaction(skill, regionData.controllingFaction);
      if (factionReaction.reputationChange !== 0) {
        if (!this.playerState.reputation[regionData.controllingFaction]) this.playerState.reputation[regionData.controllingFaction] = 0;
        this.playerState.reputation[regionData.controllingFaction] += factionReaction.reputationChange;
        baseDescription += `\n[FACTION] ${factionReaction.message} (${factionReaction.reputationChange > 0 ? '+' : ''}${factionReaction.reputationChange} Rep)`;
      }
    }

    // NPC Interaction Check (if any NPCs are in the region)
    const npcsInRegion = this.getNPCsInRegion(this.currentRegion);
    if (npcsInRegion.length > 0) {
      const npcReactions = npcsInRegion.map(npc => {
        // 1. Check for Deja Vu (Recursion Memory)
        const dejaVu = this.recursionMemorySystem.getDejaVuReaction(npc.id);
        let dejaVuText = "";
        if (dejaVu) {
            dejaVuText = `\n[DEJA VU] ${npc.name} shudders. "${dejaVu.dialogue}"`;
        }

        // 2. Check for Skill Resonance
        const reaction = this.skillResonanceSystem.getNPCReaction(this.skillResonanceSystem.analyzeSkill(skill), npc);
        if (reaction.emotion !== 'NEUTRAL') {
          return `${npc.name}: "${reaction.dialogue}" (${reaction.emotion})${dejaVuText}`;
        } else if (dejaVuText) {
            return `${npc.name}: ... ${dejaVuText}`;
        }
        return null;
      }).filter(r => r !== null);

      if (npcReactions.length > 0) {
        baseDescription += `\n\nNPC Reactions:\n${npcReactions.join('\n')}`;
      }
    }

    // --- CHECK REGISTRY FOR SYNERGIES ---
    // Check synergies regardless of whether an interactable was targeted or not
    // This allows for "General" synergies (like purifying a room) AND "Specific" ones (burning vines)
    const synergyResult = InteractionHandler.checkSynergy(skill, regionData, targetObjectId);
    if (synergyResult) {
      // If synergy is successful, we return it immediately, appending the base description for flavor
      return {
        success: true,
        result: synergyResult.result,
        description: `${synergyResult.description}\n\n${baseDescription}`
      };
    }

    if (!interactable) {
      // If stability transformed the region, return success immediately as this is a major event
      if (baseDescription.includes('[CRITICAL] The region has permanently changed!')) {
        return {
          success: true,
          result: 'REGION_FRACTURED',
          description: `The environment reacts to your power: ${baseDescription}`
        };
      }

      // Fallback for general interactions if no specific object is targeted
      if (skill.type === 'FOUNDATIONAL' && regionData.type === 'RUINS') {
        return {
          success: true,
          result: 'REBUILT_STRUCTURE',
          description: `You use your foundational skills to stabilize the crumbling ruins. ${baseDescription}`
        };
      }
      // New: Purify Corrupted Zones
      if (skill.resonance === 'LIGHT' && regionData.corruption > 50) {
        return {
          success: true,
          result: 'PURIFIED_ZONE',
          description: `Your light burns away the corruption in the immediate area. ${baseDescription}`
        };
      }
      // New: Reveal Hidden Paths with Void
      if (skill.resonance === 'VOID' && regionData.type === 'UNDERMIGHT') {
        return {
          success: true,
          result: 'PATH_REVEALED',
          description: `The shadows part, revealing a hidden path. ${baseDescription}`
        };
      }
      // Generic Resonance Feedback even if nothing specific happens
      if (resonanceReaction.intensity === 'HIGH' || resonanceReaction.intensity === 'CRITICAL' || resonanceReaction.intensity === 'MEDIUM') {
         return {
           success: true,
           result: 'RESONANCE_ECHO',
           description: `The environment reacts to your power: ${baseDescription}`
         };
      }

      return { success: false, reason: "Target object not found." };
    }

    // Check skill requirements
    if (interactable.reqSkill !== 'NONE' && skill.type !== interactable.reqSkill && skill.resonance !== interactable.reqSkill) {
      return { 
        success: false, 
        reason: `This object requires a ${interactable.reqSkill} skill.` 
      };
    }

    // Process Interaction
    if (interactable.type === 'STRUCTURE' && interactable.status === 'BROKEN') {
      interactable.status = 'REPAIRED';
      return {
        success: true,
        result: 'REPAIRED',
        description: `You repaired the ${interactable.id}. It is now functional. ${baseDescription}`
      };
    }

    if (interactable.type === 'SHRINE' && interactable.status === 'DORMANT') {
      interactable.status = 'ACTIVE';
      return {
        success: true,
        result: 'ACTIVATED',
        description: `The ${interactable.id} hums with power. You feel a blessing. ${baseDescription}`
      };
    }

    if (interactable.type === 'OBSTACLE' && interactable.status === 'BLOCKED') {
      interactable.status = 'CLEARED';
      return {
        success: true,
        result: 'PATH_OPENED',
        description: `You cleared the ${interactable.id}. The path is open. ${baseDescription}`
      };
    }
    
    // New: Anomaly Interaction
    if (interactable.type === 'ANOMALY' && interactable.status === 'UNSTABLE') {
      interactable.status = 'STABILIZED';
      
      // INTEGRATION: Check for Skill Unlocks
      const unlockResults = this.skillUnlockSystem.checkUnlocks('INTERACTION', { 
        targetId: interactable.id, 
        regionId: this.currentRegion,
        playerState: this.playerState 
      });
      
      let desc = `You stabilized the ${interactable.id}. A time-echo reveals a secret. ${baseDescription}`;
      if (unlockResults.length > 0) {
        desc += ` [UNLOCKED: ${unlockResults.join(', ')}]`;
      }

      return {
        success: true,
        result: 'ANOMALY_STABILIZED',
        description: desc
      };
    }

    // New: Mythic Console Interaction
    if (interactable.type === 'MYTHIC' && interactable.status === 'ACTIVE') {
      return {
        success: true,
        result: 'FUSION_INITIATED',
        description: `The ${interactable.id} activates. You can now fuse skills. ${baseDescription}`
      };
    }

    return {
      success: false,
      reason: "Interaction failed or object already active."
    };
  }

  /**
   * Mock method to get NPCs in a region (would normally query a character DB)
   */
  getNPCsInRegion(regionId) {
    // Mock data for testing
    const mockNPCs = [
      { id: 'vira', name: 'Vira', region: 'ashram_central', faction: 'ashram_remnants', personality: { chaosTolerance: 20, preferredResonance: 'LIGHT' } },
      { id: 'malakar', name: 'Malakar', region: 'void_rift_alpha', faction: 'corruption_champions', personality: { chaosTolerance: 100, preferredResonance: 'VOID' } }
    ];
    return mockNPCs.filter(npc => npc.region === regionId);
  }

  /**
   * Complete a quest and check for rewards/unlocks
   * @param {string} questId - The ID of the completed quest
   */
  completeQuest(questId) {
    if (!this.playerState.questLog.includes(questId)) {
      this.playerState.questLog.push(questId);
      
      // Check for Skill Unlocks
      const unlocks = this.skillUnlockSystem.checkUnlocks('QUEST_COMPLETE', { 
        questId: questId, 
        playerState: this.playerState 
      });
      
      return {
        success: true,
        message: `Quest Completed: ${questId}`,
        unlockedSkills: unlocks
      };
    }
    return { success: false, message: "Quest already completed." };
  }

  /**
   * Trigger a full world reset (New Game+ / Time Loop).
   */
  triggerReset() {
    const resetData = this.recursionMemorySystem.triggerLoopReset();
    
    // Reset world state but keep recursion memory
    this.currentRegion = null;
    this.knownRegions = new Set();
    this.discoveredLandmarks = new Set();
    this.activeEvents = new Map();
    this.regionStates = new Map();
    
    // Reset player state partially
    this.playerState.reputation = {
        'ashram_remnants': 0,
        'nomadic_relic_seekers': 0,
        'corruption_champions': 0,
        'untethered_architects': 0,
        'post_human_cults': 0
    };

    return resetData;
  }

  /**
   * Executes a player action and updates the psychological profile.
   * @param {string} actionType - 'COMBAT', 'DIALOGUE', 'TRADE', 'EXPLORATION'
   * @param {Object} details - { target: string, method: string, impact: Object }
   */
  performAction(actionType, details) {
    console.log(`[ACTION] Player performs ${actionType} on ${details.target}`);
    
    // 1. Record in Psych System
    if (this.storyNodeSystem.psychSystem) {
        this.storyNodeSystem.psychSystem.recordAction(
            actionType, 
            details.impact || {}, 
            `${actionType} on ${details.target} via ${details.method}`
        );
    }

    // 2. Trigger Story/World Reactions
    // (Future expansion: Check if this action triggers a specific node immediately)
  }

  /**
   * Generates enemies for a region based on Tiers and Location.
   * @param {string} regionId 
   * @param {string} difficulty 
   */
  generateEnemies(regionId, difficulty = 'NORMAL') {
      const regionData = this.getRegionData(regionId);
      const baseEnemies = this._getRegionEnemyPool(regionData.type);
      
      // Apply Tier Scaling
      const tierMultiplier = difficulty === 'HARD' ? 1.5 : 1.0;
      
      const consciousEnemies = baseEnemies.map(template => {
          // 1. Scale Stats
          template.stats.hp *= tierMultiplier;
          template.stats.damage *= tierMultiplier;
          
          // 2. Inject Consciousness (Personality, Tactics)
          return this.enemyEngine.generateConsciousEnemy(template, {
              region: regionId,
              factionState: this.ecosystem.factions.get(template.faction) || {}
          });
      });

      return consciousEnemies;
  }

  _getRegionEnemyPool(regionType) {
      // Mock Database of Enemies
      const pools = {
          'SACRED': [
              { id: 'ashram_guard', name: 'Ashram Guardian', faction: 'ashram_remnants', stats: { hp: 100, damage: 10 } },
              { id: 'light_construct', name: 'Solar Golem', faction: 'ashram_remnants', stats: { hp: 200, damage: 20 } }
          ],
          'VOID_ZONE': [
              { id: 'void_leech', name: 'Void Leech', faction: 'corruption_champions', stats: { hp: 50, damage: 15 } },
              { id: 'entropy_knight', name: 'Entropy Knight', faction: 'corruption_champions', stats: { hp: 150, damage: 25 } }
          ],
          'RUINS': [
              { id: 'scavenger', name: 'Relic Scavenger', faction: 'nomadic_relic_seekers', stats: { hp: 80, damage: 12 } },
              { id: 'auto_turret', name: 'Ancient Turret', faction: 'factionless', stats: { hp: 120, damage: 18 } }
          ]
      };
      return pools[regionType] || pools['RUINS'];
  }
}
