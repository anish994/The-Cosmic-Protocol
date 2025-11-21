# Skill Resonance & Living World System

## Overview
The **Skill Resonance System** transforms the game from a simple mechanical loop into a living, breathing ecosystem. Every skill usage—whether a basic attack or a legendary fusion—now carries **metaphysical weight** that the world and its inhabitants react to.

## Core Systems Implemented

### 1. The "Soul" of Skills (`SkillResonanceSystem.js`)
Every skill is analyzed on three metaphysical axes:
- **Order <---> Chaos**: Does the skill stabilize reality or tear it apart?
- **Creation <---> Destruction**: Does it grow life or leave scars?
- **Connection <---> Isolation**: Does it invite spirits or repel them?

**Example:**
- **Void Blast**: High Chaos, High Isolation.
- **Healing Light**: High Order, High Connection.
- **Fusion (Void + Infernal)**: Extreme Chaos & Destruction.

### 2. World Reactions (`WorldExplorationEngine.js`)
The environment itself reacts to these resonances based on its current state (Corruption, Type).
- **Resonance Match**: Using Void in a Void Rift causes the environment to "hum in harmony" (Soothe).
- **Conflict**: Using Chaos in a pure Order zone causes reality to "scream" (Agitate).
- **Purification**: Light skills in corrupted zones actively burn away the corruption.

### 3. NPC Emotional Logic
NPCs are no longer static quest givers. They observe your power and react based on their **Personality Profile**.
- **Vira (Ashram Remnants)**: Fears Chaos. Using a Void skill near her triggers fear dialogue and relationship loss.
- **Malakar (Corruption Champions)**: Admires Chaos. Using the same skill near him triggers admiration and relationship gain.

## Verified Scenarios
1.  **Fusion Resonance**: Casting a **Void-Infernal Fusion** in the peaceful **Ashram Central Plaza** caused the reality to scream and Vira to recoil in fear.
2.  **Harmonic Resonance**: Casting **Void Blast** in the **Void Rift** caused the environment to stabilize and Malakar to nod in approval.
3.  **Purification**: Casting **Healing Light** in a corrupted zone burned away the corruption and drew friendly spirits near.

## Next Steps
- **Visual FX**: Hook these "Resonance Echoes" into the visual particle system.
- **Long-Term Consequences**: Make repeated "Agitation" of a region lead to permanent corruption or fracture.
- **More NPC Profiles**: Expand the mock NPC list to include all 50+ characters from `characters.md`.
