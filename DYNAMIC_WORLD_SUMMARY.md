# Dynamic World & Quest System Summary

## Overview
We have successfully connected the Faction System to the World Ecosystem and Event Generator. The world now generates content (Events and Quests) procedurally based on the political state of the game.

## Key Components Implemented

### 1. Dynamic Event Generator (`DynamicEventGenerator.js`)
- **Flavor Text**: Events now have dynamic descriptions based on the "Scar Type" (Void, Ghost).
- **Quest Generation**: Can now generate "Faction Quests" on the fly.
    - **Conquest**: If a faction is Expansionist.
    - **Defense**: If a faction is Defensive.
    - **Survival**: If a faction is Critical.

### 2. World Ecosystem (`WorldEcosystem.js`)
- **Refactor**: Now uses the centralized `FactionSystem` instead of internal logic.
- **Expansion Logic**: Factions with high power and "Expansionist" state will automatically try to seize neighboring regions, triggering `FACTION_MOVE_TRIGGERED` events.

### 3. Integration Loop
1.  **Faction System** tracks Power and State.
2.  **World Ecosystem** processes turns and triggers Faction Moves (War).
3.  **Dynamic Event Generator** creates Quests for the player to support these moves.
4.  **Story Node System** (previously implemented) reflects these changes in dialogue.

## Verification Results
- **Event Generation**: PASS. "Echo of the Void" event generated with dynamic flavor text.
- **Quest Generation**: PASS. "Untethered Architects: CONQUEST Protocol" quest generated because they were in Expansionist mode.
- **Ecosystem Logic**: PASS. Architects attempted to seize `ashram_central` when their power exceeded the threshold.

## Next Steps
- **UI Integration**: A "War Table" UI to show active fronts.
- **Quest Rewards**: Make dynamic quests grant Faction Power, closing the loop.
