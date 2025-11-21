# CPS Narrative Rule System

## Master Outline

1. Node Link Logic
   - How nodes connect, link types, traversal mechanics
   - Dependencies: story-nodes.md, story skeleton
2. Resonance-Based Branching Rules
   - Resonance tags/values, branching outcomes, access logic
   - Dependencies: story-nodes.md, lore document
3. Corruption Pressure Rules
   - Accumulation, escalation, event triggers
   - Dependencies: story-nodes.md, lore document
4. Character Memory Rules
   - Memory storage, recall, influence on narrative
   - Dependencies: story-nodes.md, world structure document
5. Death/Loop Recursion Triggers
   - Triggers, effects on progression
   - Dependencies: story-nodes.md, story skeleton
6. Alignment Shift Rules
   - Influences, effects, node access
   - Dependencies: story-nodes.md, lore document
7. Skill Influence Logic
   - Skill effects on nodes, branching, events
   - Dependencies: story-nodes.md, world structure document
8. Event Spawning Logic
   - Triggers, event types, system interactions
   - Dependencies: story-nodes.md, story skeleton
9. Region Evolution Logic
   - Influences, changes, narrative impact
   - Dependencies: story-nodes.md, world structure document
10. Dialogue Variation Rules
    - State, resonance, alignment, memory effects
    - Dependencies: story-nodes.md, lore document
11. Boss Resonance Interaction Rules
    - Boss triggers, resonance effects, behavior
    - Dependencies: story-nodes.md, lore document
12. Final Polish and Integration
    - Cross-references, summary tables, implementation readiness
    - Dependencies: all above

---

## Section Mapping Table
| Section | Source Files | Key Concepts |
|---------|-------------|-------------|
| Node Link Logic | story-nodes.md, story skeleton | Node links, traversal |
| Resonance Branching | story-nodes.md, lore | Resonance, branching |
| Corruption Pressure | story-nodes.md, lore | Corruption, escalation |
| Character Memory | story-nodes.md, world structure | Memory, recall |
| Death/Recursion | story-nodes.md, skeleton | Death, recursion |
| Alignment Shift | story-nodes.md, lore | Alignment, shift |
| Skill Influence | story-nodes.md, world structure | Skills, influence |
| Event Spawning | story-nodes.md, skeleton | Events, triggers |
| Region Evolution | story-nodes.md, world structure | Region, evolution |
| Dialogue Variation | story-nodes.md, lore | Dialogue, variation |
| Boss Resonance | story-nodes.md, lore | Boss, resonance |
| Final Integration | all | Integration |

---

## Implementation Notes
- Each section will include: logic blocks, tables, and system rules.
- All rules reference canonical tags and structures from existing files.
- Cross-references and summary tables will be added in the final polish step.

## 1. Node Link Logic

### Overview
Node link logic governs how story nodes connect, the conditions for traversal, and the mechanics for moving between narrative states. Links are defined by type, requirements, and traversal rules.

### Link Types Table
| Link Type         | Description                                 | Example Condition                |
|-------------------|---------------------------------------------|----------------------------------|
| Sequential        | Direct next node in act/story               | Completion of current node       |
| Branching         | Multiple possible next nodes                | Resonance tag, skill, alignment  |
| Hidden            | Only revealed under special conditions      | Memory recall, secret skill      |
| Recursion         | Loop back to previous or alternate node     | Death, recursion trigger         |
| Event-Driven      | Spawned by in-game event                    | Corruption pressure, boss event  |
| Region-Gated      | Access based on region state/evolution      | Region unlocked, evolved         |

### Traversal Mechanics
- **Node Entry:** Player enters a node when all entry conditions are met (see tables below).
- **Node Exit:** Player exits a node by completing required actions, making choices, or triggering events.
- **Link Activation:** Links are activated based on resonance, skill, alignment, region, or event state.
- **Traversal Restrictions:** Some links are locked until hidden conditions or recursion variants are met.

### Link Condition Logic Block
```yaml
link_activation:
  - if: node.completed
    then: activate(sequential_link)
  - if: resonance.matches(branch_tag)
    then: activate(branching_link)
  - if: skill.unlocked(secret_skill)
    then: activate(hidden_link)
  - if: event.triggered(corruption_pressure)
    then: activate(event_driven_link)
  - if: region.state == 'evolved'
    then: activate(region_gated_link)
  - if: player.died or recursion.triggered
    then: activate(recursion_link)
```

### Node Traversal Table
| Condition                | Link Type      | Result                      |
|--------------------------|---------------|-----------------------------|
| Node completed           | Sequential    | Move to next node           |
| Resonance tag matches    | Branching     | Branch to alternate node    |
| Skill unlocked           | Hidden        | Reveal secret node          |
| Event triggered          | Event-Driven  | Spawn event node            |
| Region evolved/unlocked  | Region-Gated  | Access new region node      |
| Death/recursion trigger  | Recursion     | Loop or reset to node       |

### Implementation Notes
- All node links reference canonical node IDs and tags from `story-nodes.md`.
- Traversal logic should be implemented as a state machine, with link activation as transitions.
- Hidden and recursion links require additional state checks (memory, death, alignment, etc.).

## 2. Resonance-Based Branching Rules

### Overview
Resonance is a core narrative mechanic that determines branching, node access, and story outcomes. Each node and character has resonance tags and values that interact to unlock, restrict, or alter narrative paths.

### Resonance Tags Table
| Resonance Tag         | Description                          | Example Node Effect                |
|----------------------|--------------------------------------|------------------------------------|
| Karma                | Moral actions, alignment shifts       | Unlocks/locks karma nodes          |
| Paradox              | Recursion, loop mechanics             | Enables recursion links            |
| Renewal              | Healing, rebirth, hope                | Unlocks restoration nodes          |
| Division             | Faction splits, conflict              | Branches to faction nodes          |
| Forbidden Knowledge  | Secret lore, risk/reward              | Reveals hidden nodes               |
| Unity                | Cooperation, convergence              | Merges story branches              |
| Collapse             | Chaos, instability                    | Triggers collapse events           |
| Final Judgment       | Endgame, reckoning                    | Locks/unlocks final nodes          |
| Echoes               | Memory, past events                   | Alters dialogue, unlocks memories  |
| Pulse                | Scientific, skill matrix              | Unlocks research nodes             |
| Fate                 | Destiny, prophecy                     | Alters future node access          |
| Beauty               | Emotional, aesthetic                  | Unlocks healing or sorrow nodes    |
| Catharsis            | Emotional release                     | Alters emotional state, dialogue   |
| Eternity             | Infinite loops, ultimate recursion    | Enables endless gameplay           |

### Resonance Value Table
| Value Range | Effect on Branching         |
|-------------|----------------------------|
| Low         | Restricts access, locks nodes|
| Medium      | Standard branching          |
| High        | Unlocks secret/advanced nodes|
| Extreme     | Enables recursion, alternate endings|

### Resonance Branching Logic Block
```yaml
branching:
  - if: resonance.tag == node.required_tag and resonance.value >= node.required_value
    then: unlock(node)
  - if: resonance.value < node.required_value
    then: lock(node)
  - if: resonance.tag == 'Paradox' and resonance.value == 'Extreme'
    then: enable(recursion_branch)
  - if: resonance.tag == 'Karma' and resonance.value == 'High'
    then: unlock(alignment_shift)
  - if: resonance.tag == 'Unity' and resonance.value >= 'Medium'
    then: merge(branches)
```

### Resonance Interaction Table
| Node Resonance Tag | Player Resonance Tag | Result                  |
|--------------------|---------------------|-------------------------|
| Karma              | Karma               | Unlocks karma branch    |
| Paradox            | Paradox             | Enables recursion       |
| Renewal            | Renewal             | Unlocks healing path    |
| Division           | Unity               | Merges or splits branch |
| Forbidden Knowledge| Any                 | Reveals hidden node     |
| Collapse           | Collapse            | Triggers collapse event |
| Fate               | Fate                | Alters future branches  |

### Implementation Notes
- Resonance tags and values are referenced from `story-nodes.md` and character data.
- Resonance branching should be implemented as a dynamic filter on available nodes.
- Extreme resonance values trigger recursion, alternate endings, or unlock advanced content.

## 3. Corruption Pressure Rules

### Overview
Corruption is a dynamic system that accumulates through player actions, node outcomes, and environmental triggers. It influences narrative branching, event spawning, and can escalate to trigger major story shifts or boss encounters.

### Corruption Pressure Table
| Corruption Level | Description                | Node/Story Effect                |
|------------------|----------------------------|----------------------------------|
| None             | No corruption present      | Standard node outcomes           |
| Low              | Minor corruption detected  | Subtle changes, minor threats    |
| Medium           | Noticeable corruption      | New corrupted events, altered choices |
| High             | Widespread corruption      | Major node changes, boss spawns  |
| Critical         | Overwhelming corruption    | Forced recursion, world state shift |

### Corruption Accumulation Logic Block
```yaml
corruption_accumulation:
  - if: player.uses_forbidden_skill
    then: corruption += 1
  - if: node.enemyCorruptionInteractions == 'active'
    then: corruption += 1
  - if: event.triggered('corruption')
    then: corruption += event.value
  - if: region.state == 'corrupted'
    then: corruption += region.corruption_value
```

### Corruption Escalation Logic Block
```yaml
corruption_escalation:
  - if: corruption >= critical_threshold
    then:
      - trigger(recursion_event)
      - spawn(boss)
      - alter(region_state, 'corrupted')
  - if: corruption >= high_threshold
    then:
      - spawn(corrupted_event)
      - lock/alter(node_choices)
  - if: corruption >= medium_threshold
    then:
      - introduce(minor_threats)
      - alter(dialogue, 'dark')
```

### Corruption Event Table
| Trigger Condition         | Event Type         | Result                        |
|--------------------------|--------------------|-------------------------------|
| Forbidden skill used      | Minor corruption   | Subtle node changes           |
| Boss defeated             | Corruption drops   | Region partially restored     |
| Region corrupted          | Major corruption   | New events, altered outcomes  |
| Critical corruption       | Recursion trigger  | Loop, world reset             |

### Implementation Notes
- Corruption is tracked per player, region, and global state.
- Escalation triggers can override standard node logic, forcing recursion or boss events.
- Corruption pressure should be surfaced in UI and influence available choices, dialogue, and region evolution.

## 4. Character Memory Rules

### Overview
Character memories are persistent narrative elements that store key events, choices, and emotional states. Memories influence dialogue, node access, branching, and can trigger hidden or recursion events.

### Memory Types Table
| Memory Type      | Description                        | Example Effect                  |
|------------------|------------------------------------|---------------------------------|
| Event Memory     | Records major story events          | Unlocks/locks future nodes      |
| Choice Memory    | Stores player decisions             | Alters dialogue, branching      |
| Emotional Memory | Tracks emotional states             | Changes resonance, dialogue     |
| Loop Memory      | Persists across recursion/death     | Unlocks recursion variants      |
| Secret Memory    | Hidden, revealed by special triggers| Reveals hidden nodes/paths      |

### Memory Storage Logic Block
```yaml
memory_storage:
  - on: event.completed
    do: store(event_memory)
  - on: choice.made
    do: store(choice_memory)
  - on: emotional.state.changed
    do: store(emotional_memory)
  - on: recursion.triggered
    do: store(loop_memory)
  - on: secret.triggered
    do: store(secret_memory)
```

### Memory Recall Logic Block
```yaml
memory_recall:
  - if: node.requires(event_memory)
    then: unlock(node)
  - if: dialogue.requires(choice_memory)
    then: alter(dialogue)
  - if: resonance.requires(emotional_memory)
    then: change(resonance)
  - if: recursion.requires(loop_memory)
    then: enable(recursion_variant)
  - if: node.requires(secret_memory)
    then: reveal(hidden_node)
```

### Memory Influence Table
| Memory Trigger         | Narrative Effect           |
|-----------------------|---------------------------|
| Event completed       | Unlocks/locks nodes        |
| Choice made           | Alters dialogue/branching  |
| Emotional state shift | Changes resonance/dialogue |
| Recursion triggered   | Enables recursion variant  |
| Secret revealed       | Unlocks hidden content     |

### Implementation Notes
- Memories are stored per character and globally for key events.
- Loop and secret memories persist across recursion and death, enabling advanced branching.
- Memory recall should dynamically alter available choices, dialogue, and node access.

## 5. Death/Loop Recursion Triggers

### Overview
Death and loop recursion are core mechanics that reset, alter, or branch the narrative. Triggers include player death, critical corruption, failed events, or special node conditions. Recursion enables new story paths, memory retention, and alternate outcomes.

### Recursion Trigger Table
| Trigger Condition         | Recursion Type      | Result                        |
|--------------------------|---------------------|-------------------------------|
| Player death              | Hard recursion      | Loop reset, memory retained   |
| Critical corruption       | Forced recursion    | World state reset, new threats|
| Failed event/quest        | Soft recursion      | Partial reset, altered nodes  |
| Special node condition    | Voluntary recursion | Player chooses to loop        |
| Boss defeat (certain)     | Branch recursion    | Unlocks alternate endings     |

### Recursion Logic Block
```yaml
recursion_trigger:
  - if: player.died
    then: reset(loop), retain(loop_memory)
  - if: corruption >= critical_threshold
    then: reset(world_state), spawn(new_threats)
  - if: event.failed
    then: partial_reset(nodes)
  - if: node.recursionVariant == 'enabled' and player.chooses_loop
    then: reset(loop), unlock(alternate_path)
  - if: boss.defeated and boss.recursionEnabled
    then: unlock(alternate_ending)
```

### Recursion Progression Table
| Recursion Type      | Memory Retention | Node Changes         | Outcome                    |
|---------------------|------------------|----------------------|----------------------------|
| Hard recursion      | Loop/secret only | Full reset           | New loop, retained secrets |
| Soft recursion      | Event/choice     | Partial reset        | Altered nodes, new options |
| Forced recursion    | Loop/global      | World reset          | New threats, changed world |
| Voluntary recursion | Player choice    | Custom               | Alternate path unlocked    |
| Branch recursion    | Boss/ending      | Endgame branch        | Alternate ending unlocked  |

### Implementation Notes
- Recursion triggers are surfaced in UI and can be player-driven or system-forced.
- Memory retention across loops enables advanced branching and secret content.
- Recursion logic should interact with corruption, memory, and resonance systems for deep narrative variation.

## 6. Alignment Shift Rules

### Overview
Alignment represents a character’s moral, factional, and metaphysical stance. Shifts occur through choices, resonance, corruption, and event outcomes, affecting node access, dialogue, and branching.

### Alignment Types Table
| Alignment Type   | Description                  | Example Effect                  |
|------------------|------------------------------|---------------------------------|
| Lawful           | Order, tradition, rules      | Unlocks lawful nodes, restricts chaos |
| Chaotic          | Change, unpredictability     | Unlocks chaos nodes, restricts order  |
| Neutral          | Balance, adaptability        | Access to both sides, unique branches |
| Good             | Compassion, altruism         | Unlocks benevolent outcomes           |
| Evil             | Selfishness, malice          | Unlocks malevolent outcomes           |
| Factional        | Pantheon, Echo Order, etc.   | Faction-specific nodes, dialogue      |

### Alignment Influence Table
| Influence Source      | Alignment Change         | Result                        |
|----------------------|--------------------------|-------------------------------|
| Resonance (Karma)    | Good/Evil shift          | Unlocks/locks moral nodes     |
| Faction choice       | Factional shift          | Alters available branches     |
| Corruption event     | Evil/chaotic shift       | Unlocks corrupted nodes       |
| Lawful action        | Lawful shift             | Restricts chaos nodes         |
| Chaotic action       | Chaotic shift            | Restricts order nodes         |

### Alignment Shift Logic Block
```yaml
alignment_shift:
  - if: player.choice == 'benevolent'
    then: alignment += good
  - if: player.choice == 'malevolent'
    then: alignment += evil
  - if: player.faction == 'Echo Order'
    then: alignment = factional('Echo Order')
  - if: event.type == 'corruption'
    then: alignment += evil/chaotic
  - if: action.type == 'lawful'
    then: alignment += lawful
  - if: action.type == 'chaotic'
    then: alignment += chaotic
```

### Alignment Effects Table
| Alignment Type   | Node Access         | Dialogue Variation         | Branching Outcome         |
|------------------|---------------------|---------------------------|---------------------------|
| Lawful           | Lawful nodes only   | Formal, rule-based        | Orderly progression       |
| Chaotic          | Chaotic nodes only  | Unpredictable, wild       | Chaotic progression       |
| Neutral          | All nodes           | Balanced, adaptive        | Unique neutral branches   |
| Good             | Benevolent nodes    | Compassionate, hopeful    | Positive outcomes         |
| Evil             | Malevolent nodes    | Dark, manipulative        | Negative outcomes         |
| Factional        | Faction nodes only  | Faction-specific          | Factional progression     |

### Implementation Notes
- Alignment is tracked per character and globally for major shifts.
- Alignment changes dynamically alter available nodes, dialogue, and branching.
- Factional alignment enables unique storylines and endings.

## 7. Skill Influence Logic

### Overview
Skills are player abilities that directly affect node outcomes, branching, event spawning, and narrative progression. Skills can unlock secret paths, alter choices, and trigger unique events.

### Skill Types Table
| Skill Type         | Description                        | Example Effect                  |
|--------------------|------------------------------------|---------------------------------|
| Combat             | Physical prowess, fighting ability | Unlocks combat nodes, boss events |
| Social             | Persuasion, negotiation            | Alters dialogue, unlocks alliances |
| Knowledge          | Lore, puzzle-solving               | Reveals hidden nodes, solves puzzles |
| Stealth            | Avoidance, infiltration            | Unlocks stealth paths, bypasses threats |
| Magic/Resonance    | Metaphysical abilities             | Alters resonance, unlocks magic nodes |
| Crafting           | Creation, repair                   | Unlocks crafting events, repairs nodes |
| Unique/Secret      | Special, rare abilities            | Unlocks secret content, recursion |

### Skill Influence Table
| Skill Used         | Node Effect            | Branching Outcome         | Event Triggered         |
|--------------------|-----------------------|---------------------------|-------------------------|
| Combat             | Defeat enemy/boss     | Unlocks combat branch     | Boss event              |
| Social             | Persuade/ally         | Unlocks alliance branch   | Faction event           |
| Knowledge          | Solve puzzle/lore     | Unlocks lore branch       | Puzzle event            |
| Stealth            | Bypass threat         | Unlocks stealth branch    | Stealth event           |
| Magic/Resonance    | Alter resonance       | Unlocks magic branch      | Resonance event         |
| Crafting           | Repair/create         | Unlocks crafting branch   | Crafting event          |
| Unique/Secret      | Reveal secret         | Unlocks secret branch     | Recursion event         |

### Skill Influence Logic Block
```yaml
skill_influence:
  - if: player.skill == 'combat' and node.has_enemy
    then: unlock(combat_branch), trigger(boss_event)
  - if: player.skill == 'social' and node.has_faction
    then: unlock(alliance_branch), alter(dialogue)
  - if: player.skill == 'knowledge' and node.has_puzzle
    then: unlock(lore_branch), trigger(puzzle_event)
  - if: player.skill == 'stealth' and node.has_threat
    then: unlock(stealth_branch), bypass(threat)
  - if: player.skill == 'magic' and node.has_resonance
    then: unlock(magic_branch), alter(resonance)
  - if: player.skill == 'crafting' and node.is_broken
    then: unlock(crafting_branch), repair(node)
  - if: player.skill == 'unique' and node.has_secret
    then: unlock(secret_branch), trigger(recursion_event)
```

### Implementation Notes
- Skills are tracked per player and can be gained, lost, or evolved.
- Skill use dynamically alters available nodes, events, and branching.
- Unique/secret skills enable advanced content and recursion mechanics.

## 8. Event Spawning Logic

### Overview
Events are dynamic occurrences that alter the narrative, environment, or character states. They can be triggered by player actions, node conditions, skill use, resonance shifts, or external factors.

### Event Types Table
| Event Type         | Description                        | Example Trigger                |
|--------------------|------------------------------------|-------------------------------|
| Story Event        | Major plot development             | Node completion, act change   |
| Environmental      | Changes in region or setting       | Region evolution, corruption  |
| Combat Encounter   | Enemy or boss appears              | Node traversal, skill use     |
| Puzzle/Challenge   | Logic or skill-based challenge     | Knowledge skill, node entry   |
| Faction/Alliance   | Faction interaction or alliance    | Social skill, alignment shift |
| Recursion/Loop     | Time loop or recursion event       | Death trigger, secret skill   |
| Resonance Surge    | Resonance value spike              | Magic skill, resonance change |
| Crafting/Repair    | Item or node repair/creation       | Crafting skill, node state    |
| Secret/Unique      | Rare or hidden event               | Unique skill, secret node     |

### Event Trigger Table
| Trigger Source     | Event Type         | System Interaction         |
|--------------------|--------------------|----------------------------|
| Node Completion    | Story Event        | Advances plot, unlocks nodes|
| Skill Use          | Combat, Puzzle     | Alters node, spawns event  |
| Resonance Change   | Resonance Surge    | Alters region, triggers event|
| Alignment Shift    | Faction/Alliance   | Changes alliances, unlocks events|
| Region Evolution   | Environmental      | Alters setting, spawns event|
| Death/Recursion    | Recursion/Loop     | Resets state, spawns event |
| Secret Discovery   | Secret/Unique      | Unlocks rare content       |

### Event Spawning Logic Block
```yaml
event_spawning:
  - if: node.completed and node.is_major
    then: spawn(story_event), advance_plot()
  - if: player.skill == 'combat' and node.has_enemy
    then: spawn(combat_encounter)
  - if: player.skill == 'knowledge' and node.has_puzzle
    then: spawn(puzzle_event)
  - if: region.corruption > threshold
    then: spawn(environmental_event), alter(region)
  - if: player.alignment_changed and node.has_faction
    then: spawn(faction_event), update_alliance()
  - if: player.died and node.is_loop_enabled
    then: spawn(recursion_event), reset_state()
  - if: resonance.value > surge_level
    then: spawn(resonance_surge), alter(region)
  - if: player.skill == 'unique' and node.has_secret
    then: spawn(secret_event), unlock(secret_content)
```

### Implementation Notes
- Events are modular and can interact with multiple systems (nodes, regions, skills, resonance).
- Event triggers are tracked and can be chained for complex narrative effects.
- Secret/unique events provide advanced content and replayability.

## 9. Region Evolution Logic

### Overview
Regions are dynamic environments that evolve based on player actions, events, resonance, corruption, and narrative progression. Region evolution affects available nodes, events, and story outcomes.

### Region States Table
| Region State       | Description                        | Example Effect                 |
|--------------------|------------------------------------|-------------------------------|
| Stable             | Normal, unchanged                  | Standard node access           |
| Corrupted          | Influenced by corruption           | Unlocks corruption events      |
| Resonant           | High resonance activity            | Unlocks resonance nodes/events |
| Evolving           | Actively changing                  | Alters available nodes/events  |
| Collapsed          | Destroyed or inaccessible          | Locks nodes, triggers reset    |
| Restored           | Returned to stable state           | Unlocks restoration events     |
| Secret/Hidden      | Rare, hidden region state          | Unlocks secret content         |

### Region Evolution Table
| Trigger Source     | Region State       | Narrative Effect            |
|--------------------|-------------------|-----------------------------|
| Corruption Surge   | Corrupted         | Spawns corruption events    |
| Resonance Spike    | Resonant          | Alters node access          |
| Event Completion   | Evolving          | Changes available nodes     |
| Node Collapse      | Collapsed         | Locks region, triggers reset|
| Restoration Event  | Restored          | Unlocks restoration nodes   |
| Secret Discovery   | Secret/Hidden     | Reveals hidden content      |

### Region Evolution Logic Block
```yaml
region_evolution:
  - if: region.corruption > threshold
    then: set_state(corrupted), spawn(corruption_event)
  - if: region.resonance > spike_level
    then: set_state(resonant), unlock(resonance_nodes)
  - if: event.completed and event.type == 'evolution'
    then: set_state(evolving), alter(nodes)
  - if: node.collapsed
    then: set_state(collapsed), lock(region), trigger(reset)
  - if: event.completed and event.type == 'restoration'
    then: set_state(restored), unlock(restoration_nodes)
  - if: player.discovered_secret and region.has_hidden
    then: set_state(secret), unlock(secret_content)
```

### Implementation Notes
- Region states are tracked and can change dynamically based on multiple triggers.
- Evolution affects node access, event spawning, and narrative progression.
- Secret/hidden states provide advanced exploration and replayability.

## 10. Dialogue Variation Rules

### Overview
Dialogue dynamically adapts to player state, resonance, alignment, memory, and narrative progression. Variation enhances immersion, character depth, and story branching.

### Dialogue Variation Table
| Variation Factor   | Description                        | Example Effect                 |
|--------------------|------------------------------------|-------------------------------|
| State              | Player/character current state      | Changes tone, urgency         |
| Resonance          | Resonance value/tags                | Unlocks special dialogue      |
| Alignment          | Moral/ethical alignment             | Alters choices, responses     |
| Memory             | Recalled or forgotten events        | References past actions       |
| Skill              | Skill use or mastery                | Unlocks skill-based dialogue  |
| Region             | Current region state                | Alters local dialogue         |
| Event              | Active or completed events          | Triggers event-specific lines |
| Secret/Hidden      | Discovered secrets                  | Unlocks secret dialogue       |

### Dialogue Variation Logic Block
```yaml
dialogue_variation:
  - if: player.state == 'wounded'
    then: alter(dialogue, tone='urgent')
  - if: player.resonance > threshold
    then: unlock(special_dialogue)
  - if: player.alignment == 'chaotic'
    then: alter(dialogue, choices='unpredictable')
  - if: player.memory.recalled('betrayal')
    then: reference(past_action), alter(response)
  - if: player.skill == 'social'
    then: unlock(skill_dialogue, type='persuasion')
  - if: region.state == 'corrupted'
    then: alter(dialogue, tone='ominous')
  - if: event.active('boss_battle')
    then: trigger(event_dialogue)
  - if: player.discovered_secret
    then: unlock(secret_dialogue)
```

### Implementation Notes
- Dialogue scripts should support dynamic insertion and conditional branching.
- Variation factors can be combined for complex, layered dialogue.
- Secret/hidden dialogue enhances replayability and depth.

## 11. Boss Resonance Interaction Rules

### Overview
Bosses are major narrative entities whose behavior, difficulty, and event triggers are influenced by resonance values, player actions, and story progression. Boss resonance mechanics create dynamic, memorable encounters.

### Boss Resonance Table
| Boss Type          | Resonance Influence                | Example Effect                 |
|--------------------|------------------------------------|-------------------------------|
| Resonance Guardian | Directly tied to resonance levels  | Alters attack patterns         |
| Corruption Lord    | Reacts to corruption pressure      | Triggers corruption surges     |
| Memory Warden      | Influenced by player memories      | Recalls past actions           |
| Alignment Nemesis  | Responds to alignment shifts       | Alters boss dialogue/choices   |
| Event Catalyst     | Triggers major story events        | Spawns event nodes             |
| Secret Entity      | Hidden, rare boss                  | Unlocks secret content         |

### Boss Event Trigger Table
| Trigger Source     | Boss Type           | Resonance Effect            |
|--------------------|---------------------|-----------------------------|
| Resonance Surge    | Resonance Guardian  | Alters boss abilities       |
| Corruption Spike   | Corruption Lord     | Increases boss aggression   |
| Memory Recall      | Memory Warden       | Changes boss strategy       |
| Alignment Change   | Alignment Nemesis   | Alters boss dialogue        |
| Event Completion   | Event Catalyst      | Spawns new event nodes      |
| Secret Discovery   | Secret Entity       | Unlocks hidden boss event   |

### Boss Resonance Logic Block
```yaml
boss_resonance_interaction:
  - if: resonance.value > guardian_threshold and boss.type == 'resonance_guardian'
    then: alter(boss_abilities), change(attack_pattern)
  - if: region.corruption > lord_threshold and boss.type == 'corruption_lord'
    then: trigger(corruption_surge), increase(aggression)
  - if: player.memory.recalled('betrayal') and boss.type == 'memory_warden'
    then: change(boss_strategy), reference(past_action)
  - if: player.alignment_changed and boss.type == 'alignment_nemesis'
    then: alter(boss_dialogue), unlock(alignment_choices)
  - if: event.completed and boss.type == 'event_catalyst'
    then: spawn(event_nodes), trigger(story_event)
  - if: player.discovered_secret and boss.type == 'secret_entity'
    then: unlock(hidden_boss_event), reveal(secret_content)
```

### Implementation Notes
- Bosses should have dynamic states and behaviors based on resonance and other triggers.
- Boss resonance interactions can alter difficulty, unlock new story paths, and provide unique rewards.
- Secret boss events enhance replayability and narrative depth.

## 12. Final Polish and Integration

### Overview
This section ensures all narrative rule systems are complete, consistent, and fully integrated for game implementation. It provides cross-references, summary tables, and integration notes.

### Cross-Reference Table
| Rule Section                  | Key Dependencies                | Integration Notes                |
|-------------------------------|----------------------------------|----------------------------------|
| Node Link Logic               | Story nodes, region states       | Node traversal, region access    |
| Resonance-Based Branching     | Resonance values, skills         | Branching, event spawning        |
| Corruption Pressure           | Corruption, region evolution     | Event triggers, node effects     |
| Character Memory              | Memory, alignment, bosses        | Dialogue, boss strategy          |
| Death/Loop Recursion          | Node states, secret skills       | Recursion, event spawning        |
| Alignment Shift               | Alignment, dialogue, bosses      | Node access, boss behavior       |
| Skill Influence               | Skills, nodes, events            | Branching, event triggers        |
| Event Spawning                | Nodes, skills, region states     | Dynamic events, progression      |
| Region Evolution              | Region states, corruption        | Node access, event spawning      |
| Dialogue Variation            | State, resonance, memory         | Dynamic dialogue, branching      |
| Boss Resonance Interaction    | Resonance, memory, alignment     | Boss events, difficulty          |

### Summary Table: System Interactions
| System         | Interacts With                | Example Integration           |
|----------------|------------------------------|------------------------------|
| Nodes          | Regions, skills, events       | Node unlocks event, region changes |
| Resonance      | Branching, bosses, dialogue   | Resonance alters boss, dialogue   |
| Corruption     | Regions, events, bosses       | Corruption triggers event, boss   |
| Memory         | Dialogue, bosses, recursion   | Memory alters dialogue, boss      |
| Alignment      | Nodes, bosses, dialogue       | Alignment unlocks node, alters boss|
| Skills         | Nodes, events, dialogue       | Skill unlocks node, triggers event|
| Events         | Nodes, regions, bosses        | Event changes region, spawns boss |
| Regions        | Nodes, events, corruption     | Region evolution unlocks node     |
| Dialogue       | State, memory, resonance      | Dialogue adapts to state         |
| Bosses         | Resonance, memory, alignment  | Boss adapts to resonance, memory  |

### Integration Notes
- All rule systems are modular and cross-referenced for seamless implementation.
- Summary tables provide a quick reference for system interactions and dependencies.
- Ensure all logic blocks are implemented as modular functions or scripts for maintainability.
- Test each rule system independently and in combination for emergent narrative effects.
- Update documentation as systems evolve during development.

---

## Appendix A. Canonical Enums and Data Contracts

### Canonical Enums
```yaml
enums:
  alignment_types: [Lawful, Chaotic, Neutral, Good, Evil, Factional]
  region_states: [Stable, Corrupted, Resonant, Evolving, Collapsed, Restored, Secret]
  event_types: [Story, Environmental, Combat, Puzzle, Faction, Recursion, ResonanceSurge, Crafting, Secret]
  skill_types: [Combat, Social, Knowledge, Stealth, Magic, Crafting, Unique]
  resonance_tags: [Karma, Paradox, Renewal, Division, ForbiddenKnowledge, Unity, Collapse, FinalJudgment, Echoes, Pulse, Fate, Beauty, Catharsis, Eternity]
  resonance_value_bands: [Low, Medium, High, Extreme]
  resonance_alias:
    FirstContact: Echoes
    Awakening: Renewal
    Truth: Fate
    Reckoning: FinalJudgment
    Fusion: Unity
    FinalPulse: Pulse
    Infinity: Eternity
    Legacy: Fate
    Discovery: ForbiddenKnowledge
    Balance: Karma
    Recursion: Paradox
    Resolution: Fate
    Worthiness: FinalJudgment
    Mystery: ForbiddenKnowledge
    Purification: Renewal
    Wisdom: Fate
    Trade: Unity
    Instability: Collapse
    Revelation: Fate
    Glory: Beauty
    Rivalry: Division
    Knowledge: ForbiddenKnowledge
    Betrayal: Division
    Restoration: Renewal
    Loss: Catharsis
    Healing: Renewal
    Insanity: Collapse
    Redemption: Renewal
    Longing: Catharsis
    Parting: Catharsis
    Reflection: Echoes
    Power: Pulse
    Solidarity: Unity
  alignment_alias:
    benevolent: Good
    malevolent: Evil
    radical: Chaotic
    orderly: Lawful
    curious: Chaotic
    knowledge: Neutral
    curiosity: Chaotic
  tone_map:
    "Scientific wonder": [harmonic]
    "Foreboding": [brittle]
    "Epic": [harmonic, mythic]
    "Revelatory": [revelatory]
    "Mystery": [mysterious]
    "Tense": [tense]
```

### Data Contracts (engine-level)
```yaml
contracts:
  node:
    id: string
    act: int
    tags: [string]
    required:
      resonance_tag?: enums.resonance_tags
      resonance_value?: enums.resonance_value_bands
      alignment?: enums.alignment_types
      skills?: [enums.skill_types]
      memories?: [string]
    flags:
      has_enemy?: bool
      has_faction?: bool
      has_puzzle?: bool
      has_secret?: bool
      is_major?: bool
      is_loop_enabled?: bool
      collapsed?: bool

  player_state:
    alignment: enums.alignment_types | { faction?: string }
    resonance: { tag: enums.resonance_tags, value: enums.resonance_value_bands }
    skills: [enums.skill_types]
    memory: { recalled: [string], hidden: [string] }
    state_flags: { wounded?: bool, discovered_secret?: bool, alignment_changed?: bool }

  region:
    id: string
    state: enums.region_states
    corruption: int
    resonance: int
    has_hidden: bool

  event:
    id: string
    type: enums.event_types
    value?: int
    completed?: bool
    active?: bool

  boss:
    id: string
    type: [resonance_guardian, corruption_lord, memory_warden, alignment_nemesis, event_catalyst, secret_entity]
    thresholds?: { guardian_threshold?: int, lord_threshold?: int }
```

### Contract Notes
- These contracts align with existing `story-nodes.md` structures and can be validated against your JSON schema in `schemas/story-node.schema.json`.
- Keep enum values consistent across content and runtime to avoid invalid state.

## Appendix B. Validation Checklist and Test Scenarios

### Validation Checklist
- Node links only reference valid node IDs and defined link types (Sequential, Branching, Hidden, Recursion, Event-Driven, Region-Gated).
- All resonance tags and value bands used in nodes exist in Canonical Enums.
- No node requires a skill, memory, alignment, or region state outside the declared enums.
- Corruption thresholds and resonance surge levels are defined in a single configuration and referenced consistently.
- Region evolution transitions are only between declared region_states.
- Dialogue conditions reference valid factors (state, resonance, alignment, memory, skill, region, event, secret).
- Boss types and triggers are from the canonical sets and thresholds are numeric and bounded.

### Quick Test Scenarios (happy path + edges)
1) Happy Path Branching: resonance Karma=High at a node requiring Karma>=High unlocks branch; verify event spawn none, dialogue moral shift present.
2) Hidden Link Reveal: player recalls secret_memory X at node with has_secret=true; hidden link appears; verify node id resolves and is accessible.
3) Corruption Escalation: use forbidden skill 3 times to cross high_threshold; expect corrupted_event spawn and dialogue tone dark.
4) Forced Recursion: set corruption to critical; verify loop reset, loop_memory retained, region state altered to Corrupted.
5) Region Evolution: complete evolution event; region goes Evolving->Resonant on surge; unlock resonance_nodes only.
6) Dialogue Mix: wounded + chaotic + betrayal recalled; dialogue tone urgent, choices unpredictable, past action referenced.
7) Boss Resonance: resonance surge above guardian_threshold vs resonance_guardian; abilities change and pattern shifts.
8) Invalid Enum Guard: inject node with alignment='Heroic' (invalid); validator flags and blocks content load.

## Appendix C. UX Surfacing and "Make Rules Fun"

### Player-Facing Meters
- Resonance Dial: circular meter with tag icon; bands Low/Med/High/Extreme; animates on change.
- Corruption Pressure Bar: segmented bar with threshold markers; triggers screen vignette at High+.
- Alignment Compass: two-axis (Law/Chaos x Good/Evil) with faction overlay.
- Memory Echo Feed: timeline of recalled memories with filters; clickable to view impacts.

### Moment-to-Moment Feedback
- Link Preview Chips: when hovering choices, show tiny chips (Resonance/Skill/Memory) indicating the rule that will unlock/lock.
- Region State Toasts: subtle banners on state change ("Region: Resonant") with short effect summary.
- Rule Crits: rare "Perfect Resonance!" or "Paradox Spike!" popups when hitting Extreme bands to celebrate smart play.

### Debug/Design Aids (toggleable)
- Rule Overlay: display currently evaluated conditions for the active node (resonance checks, alignment gates, etc.).
- Event Trace Log: show last N rule firings with inputs/outputs for QA.
- Content Validator: run lint against enums/contracts before packaging content.

### Implementation Nudge
- Treat rules as toys: surface small wins, micro-animations, and collectible-style reveals for hidden links and secret memories.
- Keep a single source of truth for thresholds and enums to reduce drift and simplify balancing.
