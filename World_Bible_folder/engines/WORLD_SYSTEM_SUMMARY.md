# World Exploration & Interaction System

## Overview
The **World Exploration Engine** (`WorldExplorationEngine.js`) manages the physical and metaphysical geography of the game world. It handles player movement, region discovery, dynamic events, and environmental interactions.

## Core Systems

### 1. Exploration & Movement
- **Region Graph:** The world is a network of connected regions (Nodes).
- **Movement Logic:** Players can only move to connected regions.
- **Locked Regions:** Some regions are locked behind specific requirements (e.g., "Void Resonance > 50").
- **Fog of War:** Tracks known vs. unknown regions.

### 2. Dynamic Area Events
Events are generated dynamically based on:
- **Corruption Level:** High corruption spawns Void entities and hazards.
- **Faction Control:** Controlling factions spawn patrols, ambushes, or trade opportunities.
- **Region Type:** Ruins yield lore discoveries; Sacred grounds offer blessings.

**Event Types:**
- `COMBAT`: Enemy encounters (scaled by severity).
- `HAZARD`: Environmental dangers (e.g., spell fizzle).
- `SOCIAL`: NPC interactions (trade, dialogue).
- `DISCOVERY`: Finding lore or items.

### 3. Environmental Interactions
Skills can be used to interact with the world in two ways:
- **Targeted Interaction:** Interacting with specific objects (e.g., repairing a `broken_fountain` with `FOUNDATIONAL` skill).
- **General Interaction:** Using a skill on the region itself (e.g., purifying a corrupted zone with `LIGHT` resonance).

**Interactable Types:**
- `STRUCTURE`: Broken buildings, bridges (Requires: Foundational).
- `SHRINE`: Dormant altars (Requires: Invocation).
- `OBSTACLE`: Blocked paths (Requires: Various).
- `HAZARD`: Active dangers (Requires: Therapeutic/Protection).

## Integration
This engine is designed to work alongside the `ContextAwareMechanics` system. While `ContextAware` analyzes *passive* modifiers, `WorldExploration` handles *active* state changes and events.

## Current Regions (Mock Data)
- **Ashram Central Plaza** (Urban, Ashram Controlled)
- **Meditation Gardens** (Sacred, Ashram Controlled)
- **The Old Archives** (Urban, Ashram Controlled)
- **Crumbling Outskirts** (Ruins, Factionless)
- **The Deep Wilds** (Wilderness, Relic Seekers)
- **Void Rift Alpha** (Void Zone, Corruption Champions) - *Locked*
