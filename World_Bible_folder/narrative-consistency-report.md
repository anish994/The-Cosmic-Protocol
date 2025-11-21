# CPS Narrative Consistency Audit (2025-11-11)

Scope
- Files reviewed: `story-nodes.md`, `narrative-rules.md`, `characters.md`, `skills-integration.md`, `dialogue-templates.md`
- Checks: resonance consistency, alignment progression logic, recursion rules, node connections, region tone, faction relationships, consequence mapping

---

## 1) Resonance consistency

Findings
- `story-nodes.md` uses resonance tags outside canonical set from `narrative-rules.md` Appendix A.
- Examples (node → tag used) [sample early-act nodes]:
  - Node 1 → First Contact (not in enums)
  - Node 7 → Awakening (not in enums)
  - Node 11 → Truth (not in enums)
  - Node 12 → Reckoning (not in enums)
  - Node 13 → Fusion (not in enums)
  - Node 18 → Final Pulse (not in enums)
  - Node 19 → Infinity (enum has Eternity)
  - Node 20 → Legacy (not in enums)
  - Node 21 → Discovery (not in enums)
  - Node 22 → Balance (not in enums)

Impact
- Branching logic and dialogue tone derivation relying on canonical resonance tags may not fire or will misfire.

Suggested fixes (choose one canonical mapping per node)
- Map or alias to canonical tags:
  - First Contact → Echoes | Pulse | Unity
  - Awakening → Renewal | Echoes
  - Truth → Fate | Echoes (vision/prognosis)
  - Reckoning → FinalJudgment (canonical) or Karma (if moral)
  - Fusion → Unity | Pulse (systemic surge)
  - Final Pulse → Pulse (canonical) + add `final:true`
  - Infinity → Eternity (canonical)
  - Legacy → Fate | Unity
  - Discovery → ForbiddenKnowledge | Echoes
  - Balance → Karma | Unity
- Add Appendix alias table in `narrative-rules.md`: `resonance_alias: { FirstContact: Echoes, Awakening: Renewal, Truth: Fate, ... }`
- Update `story-nodes.md` resonance tags to canonical or add both: `resonance: [Canonical, Alias]` during transition.

---

## 2) Alignment progression logic

Findings
- Nodes reference alignment concepts in prose (choices with moral/legal flavor) but lack explicit alignment requirements or deltas.
- No machine-readable alignment gates/outcomes per choice.

Impact
- Alignment shift rules (Section 6) cannot be applied deterministically; simulation/telemetry blocked.

Suggested fixes
- Add per-node fields:
  - `alignment_required?: [Lawful|Chaotic|Neutral|Good|Evil|Factional]`
  - `alignment_delta?: { lawful?:int, chaotic?:int, good?:int, evil?:int, faction?:{ id:string, delta:int }[] }`
  - `faction_required?: [faction_id]`
- Per-choice consequence map: add `onChoose.alignment_delta`.
- Create `ALIGNMENT_ALIASES` if prose uses terms like “benevolent” → Good, “radical” → Chaotic.
- Provide baseline scale (e.g. -3..+3) and thresholds for state transitions.

---

## 3) Recursion rules

Findings
- Nodes use resonance tags Recursion, Infinity, Collapse with prose-only variants; rules expect canonical tags (Paradox, Eternity, Collapse is ok).
- Recursion variants described globally but not linked to specific node IDs.

Impact
- Recursion triggers may not evaluate; loop branches lack concrete destinations.

Suggested fixes
- Normalize tags: Recursion → Paradox; Infinity → Eternity.
- Add per-node recursion metadata:
  - `recursion: { enabled: bool, variant_id?: string, loop_to?: [node_id], memory_keys?: [string], max_loops?: int }`
- Add alias block in `narrative-rules.md` for recursion tags.
- Include 1–2 explicit loopback links per recursion-enabled node for validation.

---

## 4) Node connections (graph integrity)

Findings
- `story-nodes.md` lacks explicit structured `links` (next, branches, hidden, event-driven) to other node IDs.

Impact
- Traversal/state machine cannot construct a concrete graph; hidden/event links aren’t testable.

Suggested fixes
- Add per-node block (YAML or JSON inline):
```yaml
links:
  sequential: [node_002]
  branches: [node_003, node_004]
  hidden: [node_secret_01]
  event_driven:
    - event: corruption_surge
      to: node_025
  recursion: [node_loop_01]
```
- Add top-level “Node Index” table with NodeId, Act, Resonance, Region, Outgoing Links count.
- Integrity checklist: no dead ends unless terminal; no orphan nodes unless secrets.

---

## 5) Region tone

Findings
- Nodes use prose Tone Tag (e.g., Scientific wonder, Epic, Foreboding) but no mapping to Dialogue Tone matrix or region atmospheric state.
- Region Tag is location, not dynamic state; Section 9 expects `region.state`.

Impact
- Region atmospheric narration and dynamic evolution templates may not activate; tonal drift risk.

Suggested fixes
- Add per-node:
  - `region_id: string`
  - `region_state: [Stable|Corrupted|Resonant|Evolving|Collapsed|Restored|Secret]`
  - `tone_tags: [harmonic|brittle|recursive|... ]` mapped from prose Tone Tag via `tone_map` table.
- Add `tone_map` appendix: “Scientific wonder” → harmonic; “Foreboding” → brittle; “Epic” → harmonic+mythic; etc.
- Ensure region changes write back to global region state for subsequent nodes/dialogue.

---

## 6) Faction relationships

Findings
- Faction names appear with inconsistent labels ("Echo Order" vs "Architect Echo Orders").
- No canonical `faction_id` or relationship graph consumed by nodes.

Impact
- Ally/enemy dialogue variants and faction-derived alignment shifts cannot be computed.

Suggested fixes
- Establish canonical faction ids: `echo_order`, `karmic_keepers`, `underveil`, `ashram_remnants`, ...
- Add per-node: `factions_involved: [faction_id]`, `faction_shifts?: [{ id, delta }]`.
- Add faction relationship matrix: ally/neutral/enemy + tension score.
- Provide aliases table mapping prose names → ids to normalize ingestion.

---

## 7) Consequence mapping (choice → deltas)

Findings
- Consequences are prose-only; not mapped to state deltas (resonance, corruption, alignment, memory, unlocks).

Impact
- Event spawning, alignment shifts, resonance branching cannot be validated or simulated.

Suggested fixes
- Per choice add machine-readable map:
```yaml
choices:
  - id: c1
    text: "Investigate the Gate’s resonance"
    onChoose:
      resonance_delta: { tag: Pulse, value: +1 }
      alignment_delta: { lawful: +1 }
      corruption_delta: 0
      unlocks: { nodes: [node_003], dialogues: ["res.echo"], skills: ["pulse_scan"] }
      memory_store: ["arrival.attuned"]
```
- Add “Consequence Index” summarizing cumulative deltas per node.
- Validation rule: every choice must touch ≥1 of [resonance|alignment|corruption|memory|unlock].

---

## 8) Tone mismatches & missing links (spot checks)

Examples
- Node 11 “Truth” tag isn’t canonical; tone “Revelatory, tense” (map Truth → Fate to align prophecy arcs).
- Node 18 “Final Pulse” → use Pulse + `endgame:true`; ensure mythic chant dialogue variant triggers.
- Node 19 “Infinity” → Eternity; enable recursion templates.

Fix suggestions
- Add fields: `resonance_alias`, `endgame_flag` where appropriate.
- Ensure end-of-act nodes (e.g., 10, 20) branch to ≥2 thematic divergence nodes (unity vs fragmentation).
- Link “Hidden Conditions” to concrete `memory_keys` or `skills` for testability.

---

## 9) Quick integrity checklist (post-refactor)
- No resonance tag outside enums (or mapped via alias table).
- Each node defines: region_id, region_state, tone_tags, ≥1 outgoing link.
- Each choice: ≥1 state delta and/or unlock, optional memory_store.
- Recursion nodes: loop_to links + memory_keys + max_loops.
- Faction ids referenced exist in relationship matrix.

---

## 10) Optional automation (follow-up)
- Add `schemas/story-node-graph.schema.json` for node structure fields.
- Create `tools/validate_story_graph.js` to:
  - Load nodes JSON/YAML.
  - Check enums/aliases, verify links, ensure choice→delta coverage.
  - Emit JSON report + markdown summary.
- Integrate into CI (pre-commit hook or npm script).

---

## 11) Recommended implementation order
1. Define canonical ids/enums & alias tables (resonance, factions, tone, alignment synonyms).
2. Augment node data structure (links, alignment, recursion, region_state, tone_tags, factions, choices.onChoose).
3. Add consequence indexes and node index summary.
4. Implement validator script & schema.
5. Run audit; fix any remaining orphan or unmapped nodes.

---

## 12) Minimal schema sketch (draft)
```json
{
  "id": "node_001",
  "act": 1,
  "resonance": ["Echoes"],
  "resonance_alias": ["FirstContact"],
  "region_id": "arrival_gate",
  "region_state": "Stable",
  "tone_tags": ["harmonic"],
  "alignment_required": ["Neutral"],
  "alignment_delta": {"lawful": 0, "chaotic": 0, "good": 0, "evil": 0},
  "factions_involved": ["echo_order"],
  "links": {"sequential": ["node_002"], "branches": ["node_003"], "hidden": [], "event_driven": []},
  "recursion": {"enabled": false},
  "choices": [
    {
      "id": "c1",
      "text": "Investigate the Gate’s resonance",
      "onChoose": {
        "resonance_delta": {"tag": "Pulse", "value": 1},
        "alignment_delta": {"lawful": 1},
        "corruption_delta": 0,
        "unlocks": {"nodes": ["node_003"], "dialogues": ["res.echo"], "skills": ["pulse_scan"]},
        "memory_store": ["arrival.attuned"]
      }
    }
  ]
}
```

---

Prepared by: Narrative Systems Audit
