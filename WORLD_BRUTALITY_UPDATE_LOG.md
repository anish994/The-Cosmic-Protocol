# World Engine: Brutality & Atmosphere Update

## Overview
The world has been darkened. It is no longer just a "game map"; it is a hostile, living entity that actively seeks to disturb and destroy the player. The descriptions are visceral, the events are psychological, and the consequences are severe.

## Key Enhancements

### 1. Visceral Region Descriptions
- **Fleshcraft Lab**: "The walls breathe... pipes pump fluids that look suspiciously like liquefied soul-matter."
- **Mutation Pits**: "A mass grave of living flesh... a hive-mind of suffering that whispers your name."

### 2. Nightmare Events (Corruption > 80)
- **Psychological Horror**: Instead of just fighting "monsters", you fight "Void-Hollowed Husks" that scream with the voices of your lost loved ones.
- **Sanity Drain**: These events inflict `SANITY_DRAIN_MAJOR`, attacking the player's mind as well as their body.
- **Enemies**: `Memory Eater`, `Void-Hollowed Husk`.

### 3. Graphic Hazards
- **Neuro-Toxic Spores**: "The air tastes of copper and rot. Your skin blisters..."
- **Effect**: `HEALING_REDUCED_50_AND_PAIN`. It's not just a debuff; it's suffering.

## Verification
- **Test Suite**: `tests/test_exploration.js` passed.
  - **Nightmare Event**: Successfully generated a "Reality tears open" event in the Mutation Pits.
  - **Toxic Event**: Successfully generated the new "blistering skin" description.

## The Vibe
The world is now "1000% mysterious and dark". It feels dangerous. Every step into a high-corruption zone risks not just death, but madness.
