# CPS Canon Anchors (Act I Seeds)

Anchors are short, canonical facts retrieved during dialogue generation to ground lines and prevent lore drift. Cite IDs are hidden in runtime but surfaced in QA.

---

## Retrieval Contract
```yaml
anchor:
  id: string
  text: string
  source: { file: string, ref: string }
  canonical: bool
  tags: [ region:*, resonance:*, faction:* ]
```

---

## Act I — Nexus Gate & Pantheon Hall

```yaml
- id: pantheon.echo_gate
  text: "The Nexus Gate sings in harmonic bands when attuned."
  source: { file: "story-nodes.md", ref: "node_001.resonance_alias: FirstContact" }
  canonical: true
  tags: [ region:nexus_gate, resonance:Echoes, faction:pantheon ]

- id: pantheon.assembly
  text: "The Pantheon assembles at the Gate to set initial stakes."
  source: { file: "story-nodes.md", ref: "node_001.Narrative Purpose" }
  canonical: true
  tags: [ region:nexus_gate, faction:pantheon ]

- id: pantheon.division
  text: "The Pantheon is divided; factions form or harden in the Hall."
  source: { file: "story-nodes.md", ref: "node_002.Short Description" }
  canonical: true
  tags: [ region:pantheon_hall, resonance:Division, faction:pantheon ]

- id: echo_order.preference
  text: "The Echo Order favors clarity, memory, and measured cadence."
  source: { file: "characters.md", ref: "Echo Orders overview" }
  canonical: true
  tags: [ faction:echo_order ]

- id: wardens.gate_protocol
  text: "Wardens require proper sigils or lawful cause to open city gates."
  source: { file: "story-nodes.md", ref: "gate-related choices and consequences" }
  canonical: true
  tags: [ faction:wardens, region:pantheon_hall ]

- id: underveil.contract_law
  text: "Underveil contracts are binding in shadow; betrayal carries silent penalties."
  source: { file: "characters.md", ref: "Underveil notes" }
  canonical: true
  tags: [ faction:underveil ]

- id: protocol.first
  text: "The First Protocol is partially encoded in pre-collapse Architect glyphs."
  source: { file: "story-nodes.md", ref: "Node 121: Decoding the First Protocol" }
  canonical: true
  tags: [ resonance:Fate, region:architect_chamber ]

- id: echo.ritual
  text: "Echo rites involve harmonics, memory chords, and ritual patience."
  source: { file: "story-nodes.md", ref: "Act III Echo rites" }
  canonical: true
  tags: [ resonance:Echoes ]
```

---

## Usage
- Dialogue engine retrieves top-k anchors by relevance per scene (see Part 14 in `dialogue-templates.md`).
- At most one anchor per two lines in major scenes; phrasing can paraphrase but must preserve the anchor’s claim.
