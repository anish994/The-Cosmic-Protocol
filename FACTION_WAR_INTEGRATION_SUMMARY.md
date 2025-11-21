# Faction War & Living World Integration Summary

## Overview
We have successfully implemented a dynamic "Faction War" layer that sits on top of the narrative engine. The world now tracks the power balance between factions, and this directly influences story outcomes and NPC dialogue.

## Key Components Implemented

### 1. Faction System (`FactionSystem.js`)
- **Function**: Tracks Reputation, Power, and Relationships (Enemies/Allies).
- **Features**:
    - **Ripple Effects**: Helping the Ashram Remnants angers the Untethered Architects.
    - **Power Dynamics**: Factions fight skirmishes (simulated via World Events), changing their global power.
    - **Tiered Reputation**: Tracks status (Nemesis, Neutral, Ally, Exalted).

### 2. Living World Loop
- **Integration**:
    - `LoreQuestSystem` -> Emits `QUEST_COMPLETED`.
    - `FactionSystem` -> Emits `RUMOR_GENERATED` (from skirmishes).
    - `RumorMillSystem` -> Captures these events and creates "News".
    - `StoryNodeSystem` -> Injects these rumors into dialogue (`{RUMOR}`).

### 3. Dialogue Expansion Batch 2 ("The Faction Wars")
- **Content**: New story nodes that react to Faction Power.
- **Examples**:
    - **The Forward Camp**: If Architects have >70 Power, they are confident and offer spoils. If Remnants are pushing (>60 Power), they are desperate.
    - **Black Market**: Prices change based on Reputation. Hostile reputation triggers combat.

## Verification Results
- **Faction Logic**: PASS. Reputation ripples correctly.
- **Rumor Injection**: PASS. Quests and Skirmishes generate rumors that appear in tavern dialogue.
- **Dynamic Story**: PASS. Changing faction power alters the outcome of the "Forward Camp" node.

## Next Steps
- **Territory Control**: Visual map showing faction influence.
- **Dynamic Quests**: Procedurally generated missions to "Shift the Balance" (e.g., "Sabotage Architect Supply Line").
