# CPS Procedural Storylets — Act I Seeds

Storylets are lightweight, auto-emitted micro-nodes spawned from dialogue (see Part 13 in `dialogue-templates.md`). They expire after a few scenes and write memory keys or trigger skills logic.

---

## Contract (for reference)
```yaml
storylet:
  id: auto.sl.{hash}
  tags: [ region:{region.id}, resonance:{player.resonance.tag} ]
  gate: condition
  choices: [ { id, label, act: dialogue_acts, outcome: { resonance_delta?, memory_key?, reward?, unlocks_nodes? } } ]
  ttl: 1-3 scenes
```

---

## SL-001 Follow the Hum (Nexus Gate)
```yaml
id: auto.sl.follow_hum
tags: [ region:nexus_gate, resonance:Echoes ]
gate:
  all:
    - eq: [region.state, Resonant]
    - eq: [player.resonance.tag, Echoes]
choices:
  - id: ch1
    label: "Follow the hum beyond the arch"
    act: investigate
    outcome:
      resonance_delta: { Echoes: +1 }
      memory_key: "hum.trail"
      unlocks_nodes: [ node_003 ]
  - id: ch2
    label: "Attune and listen longer"
    act: empathize
    outcome:
      reward: { insight: 1 }
      memory_key: "hum.listening"
  ttl: 2
```

## SL-002 Shadow Lane (Pantheon Hall)
```yaml
id: auto.sl.shadow_lane
tags: [ region:pantheon_hall ]
gate:
  all:
    - in: [player.lore_tags, [Shadow, Void]]
    - any: [ eq: [region.state, Corrupted], flag: events.surge ]
choices:
  - id: ch1
    label: "Take the shadow lane"
    act: misdirect
    outcome:
      reward: { route: "stealth_shortcut" }
      memory_key: "pantheon.shadowlane"
  - id: ch2
    label: "Set a decoy and wait"
    act: deceive
    outcome:
      reward: { safety: 1 }
      memory_key: "pantheon.decoy"
  ttl: 3
```

## SL-003 Confessional at the Shrine (Nexus Gate)
```yaml
id: auto.sl.confessional
tags: [ region:nexus_gate, resonance:Renewal ]
gate:
  all:
    - has: [player.fusions, "Light+Echo"]
    - any: [ eq: [region.state, Restored], flag: events.restoration ]
choices:
  - id: ch1
    label: "Confess what you carried through"
    act: confess
    outcome:
      resonance_delta: { Renewal: +1 }
      reward: { trust_boost: 1 }
      memory_key: "shrines.confession"
  - id: ch2
    label: "Promise to return what was taken"
    act: promise
    outcome:
      reward: { vow: true }
      memory_key: "shrines.vow"
  ttl: 2
```

---

Notes
- Outcomes should be routed to `skills-integration.md` triggers where applicable (e.g., unlocks_nodes, resonance deltas).
- These are seeds; designers can tune labels, acts, and outcomes per region tone.

---

## SL-004 Mediate the Fracture (Pantheon Hall)
```yaml
id: auto.sl.mediate_fracture
tags: [ region:pantheon_hall, resonance:Division ]
gate:
  all:
    - in: [player.skills, [Social, Knowledge]]
    - eq: [region.state, Stable]
choices:
  - id: ch1
    label: "Cite precedent to calm the hall"
    act: persuade
    outcome:
      reward: { disposition: { wardens:+1, echo_order:+1 } }
      memory_key: "pantheon.mediated"
  - id: ch2
    label: "Expose a contradiction in Kavan's claim"
    act: challenge
    outcome:
      reward: { awe:+1 }
      memory_key: "pantheon.contradiction"
  ttl: 2
```

## SL-005 Warden Gate Challenge (Nexus Gate perimeter)
```yaml
id: auto.sl.gate_challenge
tags: [ region:nexus_gate ]
gate:
  any:
    - in: [player.lore_tags, [Light, Stone]]
    - flag: events.surge
choices:
  - id: ch1
    label: "Present sigil and lawful cause"
    act: confess
    outcome:
      reward: { passage: true }
      memory_key: "wardens.passage"
  - id: ch2
    label: "Test the locking harmonics"
    act: investigate
    outcome:
      reward: { insight: 1 }
      memory_key: "wardens.harmonics"
  ttl: 2
```

## SL-006 Underveil Contract (Back alleys)
```yaml
id: auto.sl.underveil_contract
tags: [ region:pantheon_hall ]
gate:
  all:
    - in: [player.lore_tags, [Shadow, Void]]
    - not: [ eq: [player.alignment, Lawful] ]
choices:
  - id: ch1
    label: "Sign the shadow slip"
    act: recruit
    outcome:
      reward: { contact: "Lira" }
      memory_key: "underveil.contact"
  - id: ch2
    label: "Refuse; ask for safe route only"
    act: ask
    outcome:
      reward: { route: "safe_lane" }
      memory_key: "underveil.safe"
  ttl: 3
```

## SL-007 Protocol Clue Hunt (Architect Chamber)
```yaml
id: auto.sl.protocol_clues
tags: [ region:architect_chamber, resonance:Fate ]
gate:
  any:
    - eq: [player.resonance.tag, Echoes]
    - in: [player.skills, [Knowledge]]
choices:
  - id: ch1
    label: "Align glyph fragments"
    act: repair
    outcome:
      unlocks_nodes: [ node_121 ]
      memory_key: "protocol.fragments"
  - id: ch2
    label: "Cross-reference chants"
    act: inform
    outcome:
      reward: { lore: 1 }
      memory_key: "protocol.chants"
  ttl: 2
```
