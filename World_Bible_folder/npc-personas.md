# CPS NPC Personas (Persona DSL + Topic Graph)

This file defines per-NPC voice constraints, topic graphs, and dialogue-act biases to produce natural, coherent conversation that still stays canon-safe and gameplay-aware.

---

## Persona: Vayun (Echo Order Scholar)
```yaml
id: npc.vayun
archetype: Scholar
faction: echo_order
voice:
  register: formal
  tempo: medium
  metaphor_palette: [ echo, light, thread ]
  taboo: [ crude_slang, oath:false_gods ]
  oath_pack: [ "By the Loom", "On my sigil" ]
drives: [ seek, protect, ascend ]
emotion_baseline: calm
style_bias: [ lyrical, precise ]
```

Dialogue Act biases (influenced by player state)
```yaml
da_bias:
  base: { ask: +0.2, inform: +0.2 }
  if_player:
    has_lore_tags.Light: { confess: +0.1, promise: +0.1 }
    has_fusion."Light+Echo": { confess: +0.2 }
    has_lore_tags.Void: { challenge: +0.1, threaten: +0.1 }
```

Topic graph (Act I focus)
```yaml
topic_graph:
  nodes:
    - { id: region.nexus_gate,     label: "Nexus Gate", rarity: common, decay: 0.3 }
    - { id: echo.echo_sanctum,     label: "Echo Sanctum", rarity: rare,   decay: 0.2 }
    - { id: pantheon.politics,     label: "Pantheon Politics", rarity: common, decay: 0.4 }
    - { id: memory.chords,         label: "Memory Chords", rarity: rare,   decay: 0.25 }
  edges:
    - { from: region.nexus_gate, to: echo.echo_sanctum, weight: 0.7, gate: { eq: [player.resonance.tag, Echoes] } }
    - { from: region.nexus_gate, to: pantheon.politics, weight: 0.6 }
    - { from: pantheon.politics, to: memory.chords,     weight: 0.4 }
  curiosity_prompts:
    - when: no_progress>=2
      say: "[[There is more beneath the Gate than ceremony.]]"
    - when: topic_locked
      say: "[[Threads hold you back for now—earn the key.]]"
```

Persona enforcement (dialogue-templates.md → persona_apply)
```yaml
persona_rules:
  enforce:
    - rule: ban slang; prefer technical nouns (harmonics, chord, attunement)
    - rule: allow 1 metaphor per line (echo/light/thread)
    - rule: measured cadence; avoid exclamation unless emotion==exultant
```

Example infused line (illustrative)
```text
Vayun: Your echo precedes you, Wayfarer—soft, true. [[I can be plain with you.]]
```

Notes
- Uses Dialogue Acts and topic_graph defined here; selection and mutation handled by dialogue-templates.md Parts 10–17.
- Vayun’s edges align to Act I nodes: `node_001` (Nexus Gate), `node_002` (Fractured Pantheon).
```

---

## Persona: Lira (Underveil Fixer)
```yaml
id: npc.lira
archetype: Underveil
faction: underveil
voice:
  register: street
  tempo: fast
  metaphor_palette: [ shadow, alley, knife ]
  taboo: [ formal_oaths ]
  oath_pack: [ "Keep low", "No names" ]
drives: [ seek, corrupt, rebel ]
emotion_baseline: anxious
style_bias: [ sardonic, clipped ]
```

DA bias
```yaml
da_bias:
  base: { misdirect:+0.2, threaten:+0.1 }
  if_player:
    has_lore_tags.Shadow: { persuade:+0.1, recruit:+0.1 }
    has_lore_tags.Light:  { challenge:+0.1 }
```

Topic graph (alleys and contracts)
```yaml
topic_graph:
  nodes:
    - { id: underveil.routes,     label: "Shadow Routes", rarity: common, decay: 0.5 }
    - { id: underveil.contracts,  label: "Contracts",     rarity: common, decay: 0.4 }
    - { id: pantheon.secrets,     label: "Pantheon Secrets", rarity: rare, decay: 0.2 }
  edges:
    - { from: underveil.routes, to: underveil.contracts, weight: 0.6 }
    - { from: underveil.contracts, to: pantheon.secrets, weight: 0.4, gate: { any: [ in: [player.lore_tags,[Shadow,Void]], flag: events.surge ] } }
```

---

## Persona: Captain Rhun (Warden)
```yaml
id: npc.rhun
archetype: Warden
faction: wardens
voice:
  register: formal
  tempo: slow
  metaphor_palette: [ stone, law, weight ]
  taboo: [ street_slang, coded_speech ]
  oath_pack: [ "By the Sigil", "On the Record" ]
drives: [ protect, obey ]
emotion_baseline: calm
style_bias: [ terse, procedural ]
```

DA bias
```yaml
da_bias:
  base: { challenge:+0.2, inform:+0.1 }
  if_player:
    has_lore_tags.Light: { empathize:+0.1, promise:+0.1 }
    has_lore_tags.Shadow: { threaten:+0.1, misdirect:+0.1 }
```

Topic graph (gates and law)
```yaml
topic_graph:
  nodes:
    - { id: wardens.gates,   label: "Gate Protocols", rarity: common, decay: 0.4 }
    - { id: law.sigils,      label: "Sigil Law",      rarity: common, decay: 0.3 }
    - { id: threats.surge,   label: "Surge Threats",  rarity: rare,   decay: 0.25 }
  edges:
    - { from: wardens.gates, to: law.sigils,  weight: 0.6 }
    - { from: wardens.gates, to: threats.surge, weight: 0.5, gate: { flag: events.surge } }
```
