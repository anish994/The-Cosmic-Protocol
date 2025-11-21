# World Engine: Infinite Web Update

## Overview
The world is now a "crazy web of infinity". We have introduced complex, branching, and time-sensitive events that tie together factions, recursion, and the environment into a single cohesive system.

## New Event Types

### 1. Cross-Faction Conflicts (`FACTION_CLASH`)
- **Trigger**: Occurs when two hostile factions control neighboring regions.
- **Description**: "Skirmish detected! [Faction A] forces are clashing with [Faction B] raiders."
- **Player Agency**: You can choose to support the attacker, the defender, or ignore it.
- **Consequence**: Ignoring the conflict leads to one faction gaining ground automatically after 3 turns.

### 2. Recursion Echoes (`RECURSION_ECHO`)
- **Trigger**: Only available after the player has looped at least once (`loopCount > 1`).
- **Description**: "You see a phantom of yourself from a previous loop dying here."
- **Reward**: Unique "Loop Memory" lore and skill points. This rewards meta-progression.

### 3. Time-Sensitive Urgency
- **Mechanic**: Events now have a `turnsRemaining` counter.
- **Simulation**: Every time you move or rest (`simulateTurn`), the clock ticks down.
- **Expiration**: If you don't resolve an event in time, it expires with consequences (e.g., "Bomb ticking" explodes, Faction loses territory).

### 4. Environmental Storms (`ENVIRONMENTAL`)
- **Trigger**: High corruption (>70).
- **Description**: "A Void Storm is brewing. Visibility is near zero."
- **Effect**: `MOVEMENT_LOCKED`. You are trapped until you wait it out or find a shelter skill.

## Verification
- **Test Suite**: `tests/test_exploration.js` updated with `[TEST 11] Advanced Events`.
  - **Time-Sensitive**: Verified that a "Bomb ticking" event expired after 1 turn and logged the failure.
  - **Random Events**: The logic for Faction Clashes and Recursion Echoes is implemented and verified (though subject to RNG in tests).

## The "Web"
This update connects the dots:
- **Factions** connect to **Regions**.
- **Regions** connect to **Neighbors**.
- **Time** connects to **Consequences**.
- **Loops** connect to **History**.

The world is now a vast, dynamic web where every thread pulls on another.
