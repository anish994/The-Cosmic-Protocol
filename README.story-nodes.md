# Story Nodes: Implementation Guide

This document summarizes how to integrate `World Bible folder/story-nodes.md` into your game.

## Contents
- Data contract and schema
- Parsing the markdown
- Validating content
- Consumption patterns (runtime)

## Data Contract
Each node contains the following fields:
- Node ID (implicit in `### Node <n>:` heading)
- Node Name
- Short Description
- Tone Tag
- Region Tag
- Resonance Tag
- Narrative Purpose
- Choice Variations (4–8)
- Triggers
- Consequences
- Recursion Variant
- Hidden Conditions
- Enemy/Corruption Interactions

See `schemas/story-node.schema.json` for a JSON Schema matching these fields.

## Parsing
A minimal parser is provided in `tools/parse_story_nodes.js`.

Example (PowerShell):
```
node tools/parse_story_nodes.js "World Bible folder/story-nodes.md" > 03-data/story-nodes.json
```

## Validation
- All 80 nodes present and sequentially numbered 1–80.
- Required fields present for every node (parser flags any missing in `missing`).
- Choices per node: 4 entries (expandable up to 8 in content pipeline).
- Tone/Resonance/Region tags are free-form but recommended to use the Tag Guidance in the Implementation Appendix at the end of `story-nodes.md`.

## Consumption Patterns
- Load JSON into your narrative engine; index by `id` and `regionTag`.
- Use `recursionVariant` to seed procedural differences on re-entry.
- Gate content using `hiddenConditions` and your state systems (karma, resonance, corruption, faction).
- For combat, bind `enemyCorruptionInteractions` to encounter templates.

## Notes
- Free Exploration nodes (21–80) are self-contained and can be surfaced based on proximity, reputation, or resonance thresholds.
- Acts I–II (1–20) provide the spine. You can still branch directly into Free Exploration while retaining act state.
