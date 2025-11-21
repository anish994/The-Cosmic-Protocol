# Dialogue QA Playbook (Depth, Naturalness, Canon)

Purpose: Provide a consistent way to evaluate conversational depth, naturalness, canon safety, and gameplay coupling without relying on character animation.

---

## 1) Test Matrix

Axes
- Resonance: Echoes, Division, Renewal, Paradox
- Corruption: None, Low, High
- Alignment: Lawful, Neutral, Chaotic
- Archetypes: Scholar, Healer, Warden, Underveil
- Regions: Nexus Gate (Stable/Corrupted/Resonant), Pantheon Hall (Stable/Surge)

Combinator
```yaml
coverage:
  min_per_axis: 2
  scenes: 24     # small but meaningful cross product
```

---

## 2) Checks & Thresholds

Quality gates (see Part 18 in dialogue-templates.md)
```yaml
checks:
  max_repeat_surface: 0/5 lines
  max_repeat_topic: 1/2 turns unless new_info
  anchors_major: >=1 per 2 lines
  persona_taboo_hits: 0
  topic_progress: >=1 new topic per 3 turns OR storylet spawned
```

Naturalness heuristics
```yaml
naturalness:
  cadence_variety: >=2 patterns/5 lines
  emotion_mod_present: true when mood!=calm
  memory_infusion_present: true when episodic memory exists
```

Gameplay coupling
```yaml
coupling:
  da_to_action_bias_present: true
  disposition_delta_valid: true
  storylet_emission_rate: 10–40% depending on context
```

---

## 3) Fixtures (Act I)

Fixture A — Scholar @ Resonant Gate, Low corruption
```yaml
player: { lore_tags:[Echo], skills:[Knowledge, Social] }
region: { id:nexus_gate, state:Resonant }
speaker: { archetype:Scholar, faction:echo_order }
expected:
  - tones include [harmonic, reflective]
  - DA favors ask/inform
  - topic_graph selects echo_sanctum within 2 turns
  - at least 1 storylet: auto.sl.follow_hum
```

Fixture B — Underveil @ Hall, Surge
```yaml
player: { lore_tags:[Shadow, Void], alignment:Chaotic }
region: { id:pantheon_hall, state:Stable }
events: { surge:true }
speaker: { archetype:Underveil, faction:underveil }
expected:
  - tones include [sardonic, clipped]
  - DA favors misdirect/threaten
  - storylet candidate: auto.sl.shadow_lane
```

Fixture C — Warden @ Gate, Lawful Light
```yaml
player: { lore_tags:[Light, Stone], alignment:Lawful }
region: { id:nexus_gate, state:Stable }
speaker: { archetype:Warden, faction:wardens }
expected:
  - persona: formal, procedural
  - DA favors challenge/inform; bias to confess/promise with Light
  - storylet candidate: auto.sl.gate_challenge
```

---

## 4) Tuning Knobs
- DA biases per persona (npc-personas.md)
- Topic decay thresholds
- Anti-repetition counts
- Anchor density (major vs minor scenes)
- Storylet TTL and emission weights

---

## 5) Sign-off Checklist
- [ ] No repetition violations
- [ ] Canon anchors present and correct
- [ ] Persona constraints enforced
- [ ] DA → UI action bias visible
- [ ] At least 1 curiosity prompt fired when needed
- [ ] At least 1 storylet spawned in exploration scenes
