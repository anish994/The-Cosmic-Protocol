# CPS Universe Modular Story Nodes
# Node Index (Act I, Nodes 1–3)
| Node ID   | Act | Resonance      | Region           | Outgoing Links |
|-----------|-----|----------------|------------------|---------------|
| node_001  | 1   | Echoes         | nexus_gate       | 2             |
| node_002  | 1   | Division       | pantheon_hall    | 3             |
| node_003  | 1   | Echoes         | architect_chamber| 3             |

## Master Outline
- Act I: Genesis & Incitement (Nodes 1–10)
- Act II: Expansion & Divergence (Nodes 11–20)
- Free Exploration Act (Nodes 21–80)


## Act I: Genesis & Incitement

### Node 1: Arrival at the Nexus Gate
- **Short Description:** The player arrives at the cosmic hub, greeted by mysterious energies and the gathering Pantheon.
- **Tone Tag:** Awe, mystery
- **Region Tag:** Nexus Gate (Central Hub)
- **Resonance Tag:** First Contact
- **Narrative Purpose:** Introduce world, set initial stakes, establish Pantheon
- **Choice Variations:**
  1. Investigate the Gate’s resonance
  2. Speak to the Paradox Child
  3. Attempt to access the forbidden glyph chamber
  4. Observe quietly
- **Triggers:** Arrival event, Pantheon assembly
- **Consequences:** Sets initial skill set, Pantheon alignment
- **Recursion Variant:** Multiple entry points, alternate skill unlocks
- **Hidden Conditions:** Secret glyph only visible to certain alignments
- **Enemy/Corruption Interactions:** Subtle corruption pulse detected (only under surge/secret conditions)
 
#### Node Metadata
id: node_001
act: 1
resonance: [Echoes]
resonance_alias: [FirstContact]
region_id: nexus_gate
region_state: Stable
tone_tags: [harmonic, mysterious]
danger_tier: Low
alignment_required: [Neutral]
alignment_delta: { lawful: 0, chaotic: 0, good: 0, evil: 0 }
factions_involved: [pantheon]
links:
  sequential: [node_002]
  branches: [node_003]
  hidden: []
  event_driven: []
recursion: { enabled: true, variant_id: "entry_alt", loop_to: ["node_003"], memory_keys: ["arrival.attuned"] }
choices:
  - id: c1
    text: "Investigate the Gate’s resonance"
    onChoose:
      resonance_delta: { tag: Pulse, value: 1 }
      alignment_delta: { lawful: 1 }
      corruption_delta: 0
      unlocks: { nodes: ["node_003"], dialogues: ["res.echo"] }
      memory_store: ["arrival.attuned"]
  - id: c2
    text: "Speak to the Paradox Child"
    onChoose:
      resonance_delta: { tag: Paradox, value: 1 }
      alignment_delta: { chaotic: 1 }
      corruption_delta: 0
      unlocks: { nodes: ["node_004"], dialogues: ["paradox.child"] }
      memory_store: ["paradox.met"]
  - id: c3
    text: "Attempt to access the forbidden glyph chamber"
    onChoose:
      resonance_delta: { tag: ForbiddenKnowledge, value: 1 }
      alignment_delta: { evil: 1 }
      corruption_delta: 1
      unlocks: { nodes: ["node_secret_01"], dialogues: ["glyph.forbidden"] }
      memory_store: ["glyph.attempted"]
  - id: c4
    text: "Observe quietly"
    onChoose:
      resonance_delta: { tag: Echoes, value: 0 }
      alignment_delta: { neutral: 1 }
      corruption_delta: 0
      unlocks: { nodes: ["node_002"], dialogues: ["pantheon.assembly"] }
      memory_store: ["arrival.observed"]

##### Consequence Index
| Choice ID | Resonance Delta | Alignment Delta | Corruption Delta | Unlocks (Nodes)      | Unlocks (Dialogues)      | Memory Store         |
|-----------|-----------------|-----------------|------------------|----------------------|--------------------------|----------------------|
| c1        | Pulse +1        | Lawful +1       | 0                | node_003             | res.echo                 | arrival.attuned      |
| c2        | Paradox +1      | Chaotic +1      | 0                | node_004             | paradox.child             | paradox.met          |
| c3        | ForbiddenKnowledge +1 | Evil +1   | 1                | node_secret_01        | glyph.forbidden           | glyph.attempted      |
| c4        | Echoes +0       | Neutral +1      | 0                | node_002              | pantheon.assembly         | arrival.observed     |

### Node 2: The Fractured Pantheon
- **Short Description:** The Pantheon is divided; factions form and the player must choose sides or mediate.
- **Tone Tag:** Tension, intrigue
- **Region Tag:** Pantheon Hall
- **Resonance Tag:** Division
- **Narrative Purpose:** Establish factions, introduce political mechanics
- **Choice Variations:**
  1. Support Kavan’s Echo Order
  2. Ally with Mira’s Karmic Keepers
  3. Mediate between factions
  4. Exploit the division for personal gain
- **Triggers:** Pantheon division event
- **Consequences:** Faction alliances, potential betrayal
- **Recursion Variant:** Faction loyalty varies
- **Hidden Conditions:** Secret alliance if neutral
- **Enemy/Corruption Interactions:** Corruption amplifies division (gated)

#### Node Metadata
id: node_002
act: 1
resonance: [Division]
resonance_alias: [FracturedPantheon]
region_id: pantheon_hall
region_state: Stable
tone_tags: [tension, intrigue]
danger_tier: Low
alignment_required: [Neutral]
alignment_delta: { lawful: 0, chaotic: 0, good: 0, evil: 0 }
factions_involved: [echo_order, karmic_keepers]
links:
  sequential: [node_003]
  branches: []
  hidden: []
  event_driven: []
recursion: { enabled: true, variant_id: "faction_alt", loop_to: [], memory_keys: ["pantheon.divided"] }
choices:
  - id: c1
    text: "Support Kavan’s Echo Order"
    onChoose:
      resonance_delta: { tag: Echoes, value: 1 }
      alignment_delta: { lawful: 1 }
      corruption_delta: 0
      unlocks: { nodes: [], dialogues: ["echo.support"] }
      memory_store: ["echo.ally"]
  - id: c2
    text: "Ally with Mira’s Karmic Keepers"
    onChoose:
      resonance_delta: { tag: Karma, value: 1 }
      alignment_delta: { good: 1 }
      corruption_delta: 0
      unlocks: { nodes: [], dialogues: ["karma.ally"] }
      memory_store: ["karma.ally"]
  - id: c3
    text: "Mediate between factions"
    onChoose:
      resonance_delta: { tag: Harmony, value: 1 }
      alignment_delta: { neutral: 1 }
      corruption_delta: 0
      unlocks: { nodes: [], dialogues: ["mediation.success"] }
      memory_store: ["pantheon.mediated"]
  - id: c4
    text: "Exploit the division for personal gain"
    onChoose:
      resonance_delta: { tag: Power, value: 1 }
      alignment_delta: { chaotic: 1, evil: 1 }
      corruption_delta: 1
      unlocks: { nodes: [], dialogues: ["exploitation.gain"] }
      memory_store: ["division.exploited"]

##### Consequence Index
| Choice ID | Resonance Delta | Alignment Delta | Corruption Delta | Unlocks (Nodes)      | Unlocks (Dialogues)      | Memory Store         |
|-----------|-----------------|-----------------|------------------|----------------------|--------------------------|----------------------|
| c1        | Echoes +1       | Lawful +1       | 0                |                      | echo.support             | echo.ally            |
| c2        | Karma +1        | Good +1         | 0                |                      | karma.ally              | karma.ally           |
| c3        | Harmony +1      | Neutral +1      | 0                |                      | mediation.success       | pantheon.mediated    |
| c4        | Power +1        | Chaotic +1, Evil +1 | 1              |                      | exploitation.gain       | division.exploited   |
- **Short Description:** Set the cadence for a complex weave without over-tightening the fabric.
- **Tone Tag:** Intricate, fateful
- **Region Tag:** Loom of Fate — Chamber of Weaving
- **Resonance Tag:** Final Judgment
- **Narrative Purpose:** Teaches cadence timing and tension safety.
- **Choice Variations:**
  1. Set a conservative cadence (safe)
  2. Push a high cadence for bonuses (risky)
  3. Use a cadence metronome
  4. Wait for pattern_clarity
- **Triggers:** pattern_clarity
- **Consequences:** Stable weave; high cadence risks snagging
- **Recursion Variant:** Baseline tension varies
- **Hidden Conditions:** Extra motif if zero snags
- **Enemy/Corruption Interactions:** Any corruption is restricted to hidden snag branch or surge (gated surge/hidden)

#### Node Metadata
id: node_183
act: 3
resonance: [FinalJudgment]
resonance_alias: []
region_id: loom_of_fate
subregion_id: chamber_of_weaving
region_state: Cadence
tone_tags: [intricate, fateful]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 184: Pattern Bind Safeguard
- **Short Description:** Bind a fragile motif into the weave without causing pattern collapse.
- **Tone Tag:** Intricate, fateful
- **Region Tag:** Loom of Fate — Chamber of Weaving
- **Resonance Tag:** Fate
- **Narrative Purpose:** Teaches safe motif binding and failure mitigation.
- **Choice Variations:**
  1. Bind with wide margins (safe)
  2. Tight bind for stronger effect (risky)
  3. Use a motif stabilizer
  4. Work during weft_wind
- **Triggers:** weft_wind
- **Consequences:** Motif secured; tight bind can induce micro-tears
- **Recursion Variant:** Motif order rotates per seed
- **Hidden Conditions:** Extra stability if no micro-tears
- **Enemy/Corruption Interactions:** Corruption only if micro-tears propagate in hidden branch (gated hidden)

#### Node Metadata
id: node_184
act: 3
resonance: [Fate]
resonance_alias: []
region_id: loom_of_fate
subregion_id: chamber_of_weaving
region_state: Bind
tone_tags: [intricate, fateful]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 185: Crossroad Outcome Preview
- **Short Description:** Preview outcomes at a karmic crossroad before committing a path.
- **Tone Tag:** Fateful, reflective
- **Region Tag:** Loom of Fate — Fate’s Nexus
- **Resonance Tag:** Fate
- **Narrative Purpose:** Introduces preview mechanics and outcome weighing.
- **Choice Variations:**
  1. Preview conservative path (safe)
  2. Preview ambitious path (risky)
  3. Use a verdict lens to clarify
  4. Act during crossroad_focus
- **Triggers:** crossroad_focus
- **Consequences:** Clear previews; ambitious path may hide debt
- **Recursion Variant:** Preview clarity fluctuates
- **Hidden Conditions:** Extra hint if prior choices balanced
- **Enemy/Corruption Interactions:** Any corruption appears only in hidden debt branch (gated hidden)

#### Node Metadata
id: node_185
act: 3
resonance: [Fate]
resonance_alias: []
region_id: loom_of_fate
subregion_id: fates_nexus
region_state: Preview
tone_tags: [fateful, reflective]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 186: Karmic Weight Trade
- **Short Description:** Trade weight between domains to offset a looming cost.
- **Tone Tag:** Fateful, reflective
- **Region Tag:** Loom of Fate — Fate’s Nexus
- **Resonance Tag:** Karma
- **Narrative Purpose:** Teaches weight tradeoffs and domain balancing.
- **Choice Variations:**
  1. Make a modest trade (safe)
  2. Heavy trade for big gains (risky)
  3. Use a weight calibrator
  4. Act during weight_shift
- **Triggers:** weight_shift
- **Consequences:** Costs rebalance; heavy trade may tilt future outcomes
- **Recursion Variant:** Domain couplings rotate
- **Hidden Conditions:** Bonus if all domains remain stable
- **Enemy/Corruption Interactions:** Corruption only under hidden imbalance branch or surge (gated surge/hidden)

#### Node Metadata
id: node_186
act: 3
resonance: [Karma]
resonance_alias: []
region_id: loom_of_fate
subregion_id: fates_nexus
region_state: Trade
tone_tags: [fateful, reflective]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 187: Verdict Chime Tuning
- **Short Description:** Tune verdict chimes to resolve ambiguity in the crossroad’s signals.
- **Tone Tag:** Fateful, reflective
- **Region Tag:** Loom of Fate — Fate’s Nexus
- **Resonance Tag:** Final Judgment
- **Narrative Purpose:** Clarifies verdict cadence to sharpen decisions.
- **Choice Variations:**
  1. Tune in small increments (safe)
  2. Retune aggressively for fast clarity (risky)
  3. Use a chime tuner
  4. Act during crossroad_focus
- **Triggers:** crossroad_focus
- **Consequences:** Ambiguity reduced; aggressive retune risks discord
- **Recursion Variant:** Base detune amount varies
- **Hidden Conditions:** Extra clarity if no discord is introduced
- **Enemy/Corruption Interactions:** Corruption only on hidden discord branch (gated hidden)

#### Node Metadata
id: node_187
act: 3
resonance: [FinalJudgment]
resonance_alias: []
region_id: loom_of_fate
subregion_id: fates_nexus
region_state: Tuning
tone_tags: [fateful, reflective]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 188: Precision Sever
- **Short Description:** Sever a corrupted offshoot thread with minimal collateral echo.
- **Tone Tag:** Intricate, fateful
- **Region Tag:** Loom of Fate — Severance Hall
- **Resonance Tag:** Fate
- **Narrative Purpose:** Teaches precise cutting and echo containment.
- **Choice Variations:**
  1. Make a shallow cut (safe)
  2. Deep cut to remove more blight (risky)
  3. Use an edge hone
  4. Act during edge_hone
- **Triggers:** edge_hone
- **Consequences:** Offshoot removed; deep cut can trigger echo bleed
- **Recursion Variant:** Offshoot angle varies
- **Hidden Conditions:** Bonus if zero collateral
- **Enemy/Corruption Interactions:** Corruption is restricted to hidden echo bleed branch or surge (gated surge/hidden)

#### Node Metadata
id: node_188
act: 3
resonance: [Fate]
resonance_alias: []
region_id: loom_of_fate
subregion_id: severance_hall
region_state: Sever
tone_tags: [intricate, fateful]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 189: Echo Seal
- **Short Description:** Seal the echoes from a previous cut to prevent collateral spread.
- **Tone Tag:** Intricate, reflective
- **Region Tag:** Loom of Fate — Severance Hall
- **Resonance Tag:** Karma
- **Narrative Purpose:** Teaches echo containment and aftermath responsibility.
- **Choice Variations:**
  1. Apply a gentle seal (safe)
  2. Force a hard seal quickly (risky)
  3. Use an echo baffle
  4. Act during echo_bleed
- **Triggers:** echo_bleed
- **Consequences:** Echoes contained; hard seal may fracture nearby threads
- **Recursion Variant:** Echo resonance shifts
- **Hidden Conditions:** Extra stability if no fractures
- **Enemy/Corruption Interactions:** Corruption only on hidden fracture branch (gated hidden)

#### Node Metadata
id: node_189
act: 3
resonance: [Karma]
resonance_alias: []
region_id: loom_of_fate
subregion_id: severance_hall
region_state: Seal
tone_tags: [intricate, reflective]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 190: Thread Rejoin Protocol
- **Short Description:** Rejoin a severed thread to restore continuity without adding tension.
- **Tone Tag:** Intricate, reflective
- **Region Tag:** Loom of Fate — Severance Hall
- **Resonance Tag:** Final Judgment
- **Narrative Purpose:** Demonstrates careful repair and verdict on residual tension.
- **Choice Variations:**
  1. Rejoin with slack buffer (safe)
  2. Tight rejoin for perfect continuity (risky)
  3. Use a rejoin schema
  4. Act during edge_hone
- **Triggers:** edge_hone
- **Consequences:** Continuity restored; tight rejoin may create hidden stress
- **Recursion Variant:** Stress propagation model varies
- **Hidden Conditions:** Extra boon if stress remains zero
- **Enemy/Corruption Interactions:** Corruption only in hidden stress failure branch or surge (gated surge/hidden)

#### Node Metadata
id: node_190
act: 3
resonance: [FinalJudgment]
resonance_alias: []
region_id: loom_of_fate
subregion_id: severance_hall
region_state: Rejoin
tone_tags: [intricate, reflective]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 114: Aurora Bridge Harmonization
- **Consequences:** Grant sigil or impose dishonor penalty
- **Recursion Variant:** Guardian style varies per loop
- **Hidden Conditions:** Extra reward if recital was correct
- **Enemy/Corruption Interactions:** Corruption only on hidden dishonor backlash or surge windows (gated surge/hidden)

#### Node Metadata
id: node_114
act: 3
resonance: [Karma]
resonance_alias: [Fate]
region_id: architect_graves
subregion_id: divine_ossuary
region_state: Stirring
tone_tags: [solemn, mystical]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 115: Rite of Returning Steps
- **Short Description:** Complete a rite to weave a safe passage through the ruins without angering spirits.
- **Tone Tag:** Mystical, atmospheric
- **Region Tag:** Architect Graves — Shamanic Ruins
- **Resonance Tag:** Renewal
- **Narrative Purpose:** Introduce ritual sequencing and safe-route weaving
- **Choice Variations:**
  1. Follow steps precisely
  2. Use a fusion circle aid
  3. Distract shamblers
  4. Withdraw until Spirit Procession
- **Triggers:** Rite of Return event
- **Consequences:** Safe passage opens; corruption risk if failed (gated)
- **Recursion Variant:** Step order mutates
- **Hidden Conditions:** Bonus if a vigil was completed
- **Enemy/Corruption Interactions:** Corruption only on failure (gated)

#### Node Metadata
id: node_115
act: 3
resonance: [Renewal]
resonance_alias: [Echoes]
region_id: architect_graves
subregion_id: shamanic_ruins
region_state: Active
tone_tags: [mystical, atmospheric]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 116: Fusion of the Quiet Grove
- **Short Description:** Attempt a high-risk fusion under a spirit vigil to earn a lasting boon.
- **Tone Tag:** Mystical, solemn
- **Region Tag:** Architect Graves — Shamanic Ruins
- **Resonance Tag:** Echoes
- **Narrative Purpose:** Fusion risk-reward under sanctified pressure
- **Choice Variations:**
  1. Perfect the fusion with patience
  2. Force synergy quickly
  3. Seek a warden’s blessing
  4. Abandon for safety
- **Triggers:** Spirit Procession event
- **Consequences:** Lasting boon on success; spirit anger on failure (gated)
- **Recursion Variant:** Fusion requirements vary per loop
- **Hidden Conditions:** Bonus if prior duel was honorable
- **Enemy/Corruption Interactions:** Spirits punish failure; corruption only on hidden failure branch or surge (gated surge/hidden)

#### Node Metadata
id: node_116
act: 3
resonance: [Echoes]
resonance_alias: [Renewal]
region_id: architect_graves
subregion_id: shamanic_ruins
region_state: Vigil
tone_tags: [mystical, solemn]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 117: Oath of Stone and Echo
- **Short Description:** Trace oath runes reflecting honorable deeds to open a silent passage.
- **Tone Tag:** Solemn, atmospheric
- **Region Tag:** Architect Graves — Chamber of Lost Architects
- **Resonance Tag:** Memory
- **Narrative Purpose:** Deed-reflection gate unlocking path
- **Choice Variations:**
  1. Trace runes with precision
  2. Reference prior records
  3. Forge a decoy oath (risky)
  4. Walk away and return during Oath Rune Glow
- **Triggers:** Oath Rune Glow event
- **Consequences:** Passage opens; phantoms test false oaths
- **Recursion Variant:** Rune schema changes per loop
- **Hidden Conditions:** Bonus if vigil and duel were honorable
- **Enemy/Corruption Interactions:** Low corruption; any corruption only in hidden dishonor backlash (gated hidden)

#### Node Metadata
id: node_117
act: 3
resonance: [Memory]
resonance_alias: [Echoes]
region_id: architect_graves
subregion_id: chamber_of_lost_architects
region_state: Glowing
tone_tags: [solemn, atmospheric]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 118: Vault of Remembered Law
- **Short Description:** Align records to unlock a memory vault that chronicles the fall.
- **Tone Tag:** Solemn, mystical
- **Region Tag:** Architect Graves — Chamber of Lost Architects
- **Resonance Tag:** Fate
- **Narrative Purpose:** Record alignment under time pressure
- **Choice Variations:**
  1. Align records canonically
  2. Explore variant alignments
  3. Seek guidance from a warden
  4. Abandon to avoid patrols
- **Triggers:** Record of Deeds event
- **Consequences:** Vault opens; patrols escalate on mistakes
- **Recursion Variant:** Alignment rules change per loop
- **Hidden Conditions:** Bonus if previous law recital correct
- **Enemy/Corruption Interactions:** Corruption minimal; any corruption only on hidden misalignment branch (gated hidden)

#### Node Metadata
id: node_118
act: 3
resonance: [Fate]
resonance_alias: [Karma]
region_id: architect_graves
subregion_id: chamber_of_lost_architects
region_state: Recording
tone_tags: [solemn, mystical]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 119: Vigil of the Last Memory
- **Short Description:** Maintain a vigil through a full cycle to reassemble a shattered memory.
- **Tone Tag:** Mournful, solemn
- **Region Tag:** Architect Graves — Sepulcher of Echoes
- **Resonance Tag:** Renewal
- **Narrative Purpose:** Endurance and memory restoration under ritual pressure
- **Choice Variations:**
  1. Bear the full cycle
  2. Share vigil with a spirit
  3. Use a tranquil relic
  4. Leave early
- **Triggers:** Echo Awakening event
- **Consequences:** Memory restored; early exit spawns phantoms
- **Recursion Variant:** Fragment order varies
- **Hidden Conditions:** Extra fragment if prior boons held
- **Enemy/Corruption Interactions:** Corruption only on hidden failure branch (gated hidden)

#### Node Metadata
id: node_119
act: 3
resonance: [Renewal]
resonance_alias: [Echoes]
region_id: architect_graves
subregion_id: sepulcher_of_echoes
region_state: Awakening
tone_tags: [mournful, solemn]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 120: Sigil of the Honored Dead
- **Short Description:** Earn the sigil by completing a sequence of honor-bound acts across the graves.
- **Tone Tag:** Solemn, mystical
- **Region Tag:** Architect Graves — Divine Ossuary
- **Resonance Tag:** Karma
- **Narrative Purpose:** Capstone of honorable path across subregions
- **Choice Variations:**
  1. Present true deeds
  2. Seek testament from a revenant
  3. Offer a relic of peace
  4. Attempt to forge proof (risky)
- **Triggers:** Vigil+Recital+Duel chain
- **Consequences:** Sigil awarded or dishonor penalty applied
- **Recursion Variant:** Required acts rotate per loop
- **Hidden Conditions:** Extra blessing if fusion succeeded earlier
- **Enemy/Corruption Interactions:** Dishonor angers spirits; corruption gated

#### Node Metadata
id: node_120
act: 3
resonance: [Karma]
resonance_alias: [Fate]
region_id: architect_graves
subregion_id: divine_ossuary
region_state: Judging
tone_tags: [solemn, mystical]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

---
### Node 121: Decoding the First Protocol
- **Short Description:** Solve a layered glyph chain in the Archive Sanctuaries during a memory surge to stabilize a volatile protocol fragment.
- **Tone Tag:** Mystic, solemn
- **Region Tag:** CPS Memory Zones — Archive Sanctuaries
- **Resonance Tag:** Memory
- **Narrative Purpose:** Introduces protocol puzzle sequencing and surge timing rewards.
- **Choice Variations:**
  1. Decode glyphs in canonical order
  2. Risk a recursion skip to accelerate
  3. Invoke a mnemonic stabilizer
  4. Abandon before instability cascades
- **Triggers:** memory_surge, creation_code_glow
- **Consequences:** Stabilized fragment yields lore; failure spawns data shambler cluster
- **Recursion Variant:** Glyph order mutates on loop seeds
- **Hidden Conditions:** Bonus lore if prior archive harmonization completed
- **Enemy/Corruption Interactions:** Breach spill causes gated corruption only on failed skip

#### Node Metadata
id: node_121
act: 3
resonance: [Memory]
resonance_alias: [Echoes]
region_id: cps_memory_zones
subregion_id: archive_sanctuaries
region_state: Surge
tone_tags: [mystic, solemn]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 122: Harmonize Archive Lattice
- **Short Description:** Align resonance seeds across archive pillars to prevent protocol drift.
- **Tone Tag:** Solemn, enigmatic
- **Region Tag:** CPS Memory Zones — Archive Sanctuaries
- **Resonance Tag:** Protocol
- **Narrative Purpose:** Teaches multi-point harmonization and seed alignment risk tradeoffs.
- **Choice Variations:**
  1. Sequentially align pillars
  2. Parallel align (higher risk, faster)
  3. Use a stabilization relic
  4. Wait for data_storm pattern shift
- **Triggers:** archive_awakened, data_storm
- **Consequences:** Drift prevented unlocks branch access; failure spawns wipe echo
- **Recursion Variant:** Pillar resonance thresholds vary per loop
- **Hidden Conditions:** Extra branch if previous decoding succeeded
- **Enemy/Corruption Interactions:** Corruption gated to parallel alignment failure

#### Node Metadata
id: node_122
act: 3
resonance: [Protocol]
resonance_alias: [Memory]
region_id: cps_memory_zones
subregion_id: archive_sanctuaries
region_state: Stabilizing
tone_tags: [solemn, enigmatic]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 123: Breach Stabilization Rite
- **Short Description:** Hold stabilizers at vault nexus points during a vault_breach_wave to avert cascading failures.
- **Tone Tag:** Solemn, enigmatic
- **Region Tag:** CPS Memory Zones — Protocol Vaults
- **Resonance Tag:** Data
- **Narrative Purpose:** Introduces breach wave mitigation and positional trial mechanics.
- **Choice Variations:**
  1. Anchor all nexus points sequentially
  2. Overcharge a single stabilizer (risky)
  3. Deploy mnemonic buffer nodes
  4. Retreat before cascade escalation
- **Triggers:** vault_breach_wave
- **Consequences:** Averted cascade unlocks relic chest; failure triggers memory_wipe_cycle
- **Recursion Variant:** Nexus point count varies
- **Hidden Conditions:** Bonus reward if previous harmonization succeeded
- **Enemy/Corruption Interactions:** Overcharge failure produces gated corruption pulse

#### Node Metadata
id: node_123
act: 3
resonance: [Data]
resonance_alias: [Protocol]
region_id: cps_memory_zones
subregion_id: protocol_vaults
region_state: Breach
tone_tags: [solemn, enigmatic]
danger_tier: High
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 124: Recovery of Erased Lore
- **Short Description:** Reconstruct a wiped lore node mid memory_wipe_cycle before fragments decay.
- **Tone Tag:** Enigmatic, mystic
- **Region Tag:** CPS Memory Zones — Protocol Vaults
- **Resonance Tag:** Renewal
- **Narrative Purpose:** Teaches rapid fragment retrieval and reconstruction logic.
- **Choice Variations:**
  1. Collect fragments in safe order
  2. Attempt simultaneous reconstruction
  3. Use a protocol checksum relic
  4. Delay until wipe intensity lowers
- **Triggers:** memory_wipe_cycle, protocol_breach
- **Consequences:** Restored lore grants resonance alias; failure spawns adaptive sentinel
- **Recursion Variant:** Fragment decay timers shift
- **Hidden Conditions:** Extra alias if breach stabilizer was perfect
- **Enemy/Corruption Interactions:** Simultaneous attempt failure triggers gated corruption lines

#### Node Metadata
id: node_124
act: 3
resonance: [Renewal]
resonance_alias: [Memory]
region_id: cps_memory_zones
subregion_id: protocol_vaults
region_state: Wipe
tone_tags: [enigmatic, mystic]
danger_tier: High
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 125: Align the Divergent Timeline
- **Short Description:** Pass alignment tests to reveal an alternate timeline artifact.
- **Tone Tag:** Mystic, atmospheric
- **Region Tag:** CPS Memory Zones — Mnemonic Chambers
- **Resonance Tag:** Eternity
- **Narrative Purpose:** Introduces timeline alignment thresholds and alternate variant unlocking.
- **Choice Variations:**
  1. Align via standard mnemonic sequence
  2. Use an echo gate harmonic (consumes resource)
  3. Attempt rapid partial alignment
  4. Observe timeline shift patterns first
- **Triggers:** timeline_shift, echo_gate_alignment
- **Consequences:** Artifact unlocked; failure causes loop desync penalty
- **Recursion Variant:** Alignment test parameters rotate
- **Hidden Conditions:** Bonus artifact trait if prior protocol relic resonance active
- **Enemy/Corruption Interactions:** Rapid attempt failure yields gated corruption echo

#### Node Metadata
id: node_125
act: 3
resonance: [Eternity]
resonance_alias: [Paradox]
region_id: cps_memory_zones
subregion_id: mnemonic_chambers
region_state: Alignment
tone_tags: [mystic, atmospheric]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 126: Gate of Echo Memory
- **Short Description:** Tune gate resonance to access a hidden mnemonic cache before alignment window closes.
- **Tone Tag:** Atmospheric, solemn
- **Region Tag:** CPS Memory Zones — Mnemonic Chambers
- **Resonance Tag:** Protocol
- **Narrative Purpose:** Teaches gate tuning accuracy vs. time pressure tradeoff.
- **Choice Variations:**
  1. Incremental tuning
  2. Risk a jump to final frequency
  3. Use a mnemonic calibrator
  4. Wait for second alignment pulse
- **Triggers:** echo_gate_alignment
- **Consequences:** Cache opens; mistuning spawns wisp interference
- **Recursion Variant:** Frequency start points vary
- **Hidden Conditions:** Extra cache slot if previous timeline alignment succeeded
- **Enemy/Corruption Interactions:** Mistuned jump triggers gated corruption interference

#### Node Metadata
id: node_126
act: 3
resonance: [Protocol]
resonance_alias: [Memory]
region_id: cps_memory_zones
subregion_id: mnemonic_chambers
region_state: Gate
tone_tags: [atmospheric, solemn]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 127: Salvage the Lost Sequence
- **Short Description:** Retrieve protocol pieces during a lost_data_flood before instability corrupts them.
- **Tone Tag:** Solemn, enigmatic
- **Region Tag:** CPS Memory Zones — Chamber of Lost Protocols
- **Resonance Tag:** Data
- **Narrative Purpose:** Introduces rapid salvage under event pressure.
- **Choice Variations:**
  1. Prioritize stable fragments
  2. Risk unstable high-value fragment first
  3. Deploy resonance dampener
  4. Abort after partial salvage
- **Triggers:** lost_data_flood
- **Consequences:** Reassembled sequence unlocks branch; instability causes partial corruption (gated)
- **Recursion Variant:** Fragment stability order randomizes
- **Hidden Conditions:** Extra branch if prior record reconfiguration succeeded
- **Enemy/Corruption Interactions:** Unstable fragment failure yields gated corruption packet

#### Node Metadata
id: node_127
act: 3
resonance: [Data]
resonance_alias: [Protocol]
region_id: cps_memory_zones
subregion_id: chamber_of_lost_protocols
region_state: Flood
tone_tags: [solemn, enigmatic]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 128: Resonance Record Reconfiguration
- **Short Description:** Alter resonance record paths to unlock branch node access across the archive.
- **Tone Tag:** Enigmatic, mystic
- **Region Tag:** CPS Memory Zones — Chamber of Lost Protocols
- **Resonance Tag:** Memory
- **Narrative Purpose:** Teaches record path logic manipulation and outcome shaping.
- **Choice Variations:**
  1. Reroute minimal paths (safe)
  2. Perform deep rewrite (risky, higher unlock)
  3. Use protocol relic resonance as guide
  4. Wait for protocol_relic_resonance hum
- **Triggers:** protocol_relic_resonance
- **Consequences:** Branch nodes unlocked; deep rewrite failure spawns wraith guardian
- **Recursion Variant:** Path graph topology shifts
- **Hidden Conditions:** Extra unlock if salvage was full
- **Enemy/Corruption Interactions:** Deep rewrite failure triggers gated corruption flux

#### Node Metadata
id: node_128
act: 3
resonance: [Memory]
resonance_alias: [Renewal]
region_id: cps_memory_zones
subregion_id: chamber_of_lost_protocols
region_state: Resonance
tone_tags: [enigmatic, mystic]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 129: Data Storm Navigation
- **Short Description:** Navigate shifting corridors during a data_storm to reach a stabilized core node.
- **Tone Tag:** Atmospheric, mystic
- **Region Tag:** CPS Memory Zones — Protocol Vaults
- **Resonance Tag:** Protocol
- **Narrative Purpose:** Tests adaptive pathfinding under dynamic layout mutation.
- **Choice Variations:**
  1. Trace safe glyph paths
  2. Shortcut through unstable corridor
  3. Deploy mapping pulse
  4. Wait for storm lull
- **Triggers:** data_storm
- **Consequences:** Core reached grants protocol boost; shortcut failure spawns adaptive sentinel
- **Recursion Variant:** Corridor mutation rates vary
- **Hidden Conditions:** Bonus boost if wipe cycle previously mitigated
- **Enemy/Corruption Interactions:** Shortcut failure yields gated corruption scramble

#### Node Metadata
id: node_129
act: 3
resonance: [Protocol]
resonance_alias: [Data]
region_id: cps_memory_zones
subregion_id: protocol_vaults
region_state: Storm
tone_tags: [atmospheric, mystic]
danger_tier: High
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 130: Archive Convergence Rite
- **Short Description:** Perform a convergence across all subregions’ resonance threads to imprint a composite memory.
- **Tone Tag:** Solemn, mystic
- **Region Tag:** CPS Memory Zones — Archive Sanctuaries
- **Resonance Tag:** Eternity
- **Narrative Purpose:** Capstone multi-thread ritual synthesizing prior protocol and memory actions.
- **Choice Variations:**
  1. Balanced thread convergence
  2. Prioritize protocol dominance
  3. Infuse renewal surge
  4. Attempt unstable rapid convergence
- **Triggers:** memory_surge + protocol_breach simultaneous window
- **Consequences:** Composite imprint unlocks meta branch; unstable attempt failure spawns echo guardian pair
- **Recursion Variant:** Thread weighting shifts per cycle
- **Hidden Conditions:** Extra imprint trait if all prior CPS nodes succeeded
- **Enemy/Corruption Interactions:** Unstable rapid convergence failure produces gated corruption echo

#### Node Metadata
id: node_130
act: 3
resonance: [Eternity]
resonance_alias: [Memory]
region_id: cps_memory_zones
subregion_id: archive_sanctuaries
region_state: Convergence
tone_tags: [solemn, mystic]
danger_tier: High
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 101: Gravity Flux Event
- **Short Description:** Ride gravity flux windows to reach an inversion keystone above the sky river.
- **Tone Tag:** Mystic, disorienting
- **Region Tag:** Inverted Landmasses — Upside-Down Realms
- **Resonance Tag:** Paradox
- **Narrative Purpose:** Teach vertical routing and gravity windows
- **Choice Variations:**
  1. Wait and time the flux
  2. Use shields to brute-force ascent
  3. Anchor lines and climb
  4. Retreat and scout alternate
- **Triggers:** Gravity Flux event
- **Consequences:** Keystone accessed; echo drain if mistimed
- **Recursion Variant:** Flux timing seed changes per loop
- **Hidden Conditions:** Shortcut opens during entropy harmonization
- **Enemy/Corruption Interactions:** Entropy hazard increases during surge

#### Node Metadata
id: node_101
act: 3
resonance: [Paradox]
resonance_alias: [Echoes]
region_id: inverted_landmasses
subregion_id: upside_down_realms
region_state: Fluxing
tone_tags: [mystic, disorienting]
danger_tier: High
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 102: Skyward Crossing
- **Short Description:** Cross reversed currents to reach a relic spire while platforms stutter.
- **Tone Tag:** Awe, atmospheric
- **Region Tag:** Inverted Landmasses — Upside-Down Realms
- **Resonance Tag:** Echoes
- **Narrative Purpose:** Platform timing under current vectors
- **Choice Variations:**
  1. Map current shifts
  2. Sprint and absorb echo drain
  3. Freeze a platform with a tool
  4. Withdraw during surge
- **Triggers:** Sky River Reverse event
- **Consequences:** Spire reached; hazard escalates on failure
- **Recursion Variant:** Platform stutter seed varies
- **Hidden Conditions:** Bonus during anomaly awakening
- **Enemy/Corruption Interactions:** Wraith patrols intensify under surge

#### Node Metadata
id: node_102
act: 3
resonance: [Echoes]
resonance_alias: [Paradox]
region_id: inverted_landmasses
subregion_id: upside_down_realms
region_state: Reversed
tone_tags: [awe, atmospheric]
danger_tier: High
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 103: Plateau Trial
- **Short Description:** Complete stuttering objectives to stabilize a singularity gate.
- **Tone Tag:** Awe, atmospheric
- **Region Tag:** Inverted Landmasses — Glitched Plateaus
- **Resonance Tag:** Collapse
- **Narrative Purpose:** Timed recursion trial with terrain rewrites
- **Choice Variations:**
  1. Synchronize with stutter patterns
  2. Force objectives with heavy shield
  3. Split to cover switches
  4. Abort before collapse
- **Triggers:** Recursion Trial event
- **Consequences:** Gate stabilizes; route rewrites on failure
- **Recursion Variant:** Objective order changes per loop
- **Hidden Conditions:** Extra reward during singularity bloom
- **Enemy/Corruption Interactions:** Glitch shamblers spawn during failures

#### Node Metadata
id: node_103
act: 3
resonance: [Collapse]
resonance_alias: [Paradox]
region_id: inverted_landmasses
subregion_id: glitched_plateaus
region_state: Stuttering
tone_tags: [awe, atmospheric]
danger_tier: High
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 104: Singularity Gate Run
- **Short Description:** Sprint a collapsing route to claim a core shard before the gate implodes.
- **Tone Tag:** Mystic, disorienting
- **Region Tag:** Inverted Landmasses — Glitched Plateaus
- **Resonance Tag:** Void
- **Narrative Purpose:** High-risk sprint with collapse and parity checks
- **Choice Variations:**
  1. Optimize route with map reads
  2. Tank damage and rush
  3. Use decoys to distract threats
  4. Wait for better alignment
- **Triggers:** Singularity Bloom event
- **Consequences:** Core shard gained; collapse penalties on failure
- **Recursion Variant:** Collapse pattern seed varies
- **Hidden Conditions:** Bonus path during entropy harmonization
- **Enemy/Corruption Interactions:** Reality-warp creatures appear on surge

#### Node Metadata
id: node_104
act: 3
resonance: [Void]
resonance_alias: [Eternity]
region_id: inverted_landmasses
subregion_id: glitched_plateaus
region_state: Collapsing
tone_tags: [mystic, disorienting]
danger_tier: High
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 105: Rite of Null Silence
- **Short Description:** Perform an inversion rite to cross an impossible hall without triggering guardians.
- **Tone Tag:** Mystic, atmospheric
- **Region Tag:** Inverted Landmasses — Null Sanctuaries
- **Resonance Tag:** Paradox
- **Narrative Purpose:** Teach inversion rites and stealth windows
- **Choice Variations:**
  1. Recite steps exactly
  2. Use a stabilizer relic
  3. Distract guardians
  4. Wait for Null Quiet
- **Triggers:** Forbidden Rite event
- **Consequences:** Hall crossed; elite spawns on failure
- **Recursion Variant:** Rite steps differ per loop
- **Hidden Conditions:** Secret door during anomaly awakening
- **Enemy/Corruption Interactions:** Elite wraiths on failure

#### Node Metadata
id: node_105
act: 3
resonance: [Paradox]
resonance_alias: [Echoes]
region_id: inverted_landmasses
subregion_id: null_sanctuaries
region_state: Inversion
tone_tags: [mystic, atmospheric]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 106: Ledger of Forbidden Steps
- **Short Description:** Decode a ritual ledger to unlock a side sanctum before the window closes.
- **Tone Tag:** Mystic, atmospheric
- **Region Tag:** Inverted Landmasses — Null Sanctuaries
- **Resonance Tag:** Echoes
- **Narrative Purpose:** Time-limited lore puzzle with stealth pressure
- **Choice Variations:**
  1. Cross-reference ledgers
  2. Improvise the missing step
  3. Hide and wait for quiet
  4. Abandon to avoid alert
- **Triggers:** Null Quiet event
- **Consequences:** Side sanctum opens; guardians alerted on failure
- **Recursion Variant:** Ledger rules vary by seed
- **Hidden Conditions:** Bonus for perfect timing
- **Enemy/Corruption Interactions:** Guardians awaken if timer expires

#### Node Metadata
id: node_106
act: 3
resonance: [Echoes]
resonance_alias: [Memory]
region_id: inverted_landmasses
subregion_id: null_sanctuaries
region_state: Quiet
tone_tags: [mystic, atmospheric]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 107: Map of the Vanished Path
- **Short Description:** Align dimensional layers to reveal a bypass through the archive.
- **Tone Tag:** Disorienting, awe
- **Region Tag:** Inverted Landmasses — Chamber of Lost Dimensions
- **Resonance Tag:** Echoes
- **Narrative Purpose:** Layer alignment and route discovery
- **Choice Variations:**
  1. Align layers manually
  2. Use an echo tuner
  3. Explore edge paths
  4. Abort alignment
- **Triggers:** Echo Map Shift event
- **Consequences:** Bypass opens; map rewrites on failure
- **Recursion Variant:** Layer keys rotate per loop
- **Hidden Conditions:** Bonus during anomaly log rewrite
- **Enemy/Corruption Interactions:** Wardens patrol under surge

#### Node Metadata
id: node_107
act: 3
resonance: [Echoes]
resonance_alias: [Paradox]
region_id: inverted_landmasses
subregion_id: chamber_of_lost_dimensions
region_state: Shifting
tone_tags: [disorienting, awe]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 108: Log of the Lost Exit
- **Short Description:** Rewrite anomaly logs to open a hidden egress before wardens converge.
- **Tone Tag:** Disorienting, atmospheric
- **Region Tag:** Inverted Landmasses — Chamber of Lost Dimensions
- **Resonance Tag:** Paradox
- **Narrative Purpose:** Objective chain manipulation under pressure
- **Choice Variations:**
  1. Edit logs precisely
  2. Forge a decoy record
  3. Distract wardens
  4. Retreat and try later
- **Triggers:** Anomaly Log Rewrite event
- **Consequences:** Exit opens; patrols intensify on failure
- **Recursion Variant:** Log schema varies per loop
- **Hidden Conditions:** Hidden exit during entropy harmonization
- **Enemy/Corruption Interactions:** Wardens escalate under surge

#### Node Metadata
id: node_108
act: 3
resonance: [Paradox]
resonance_alias: [Echoes]
region_id: inverted_landmasses
subregion_id: chamber_of_lost_dimensions
region_state: Rewriting
tone_tags: [disorienting, atmospheric]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 109: Inversion Collapse Escape
- **Short Description:** Attempt to leave a subzone during a collapse event before routes seal.
- **Tone Tag:** Mystic, disorienting
- **Region Tag:** Inverted Landmasses — Glitched Plateaus
- **Resonance Tag:** Collapse
- **Narrative Purpose:** High-tension escape with route rewrites
- **Choice Variations:**
  1. Read collapse timing
  2. Force through with shields
  3. Redirect collapse via keystone
  4. Surrender and loop
- **Triggers:** Recursion Trial collapse
- **Consequences:** Escape success or forced loop
- **Recursion Variant:** Exit routes change per loop
- **Hidden Conditions:** Extra path during singularity bloom
- **Enemy/Corruption Interactions:** Hazards intensify; creatures mutate under surge

#### Node Metadata
id: node_109
act: 3
resonance: [Collapse]
resonance_alias: [Paradox]
region_id: inverted_landmasses
subregion_id: glitched_plateaus
region_state: Collapsing
tone_tags: [mystic, disorienting]
danger_tier: High
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 110: Inverted Memory Recovery
- **Short Description:** Recover a memory fragment in an inverted subzone before inversion stabilizes.
- **Tone Tag:** Mystic, atmospheric
- **Region Tag:** Inverted Landmasses — Upside-Down Realms
- **Resonance Tag:** Echoes
- **Narrative Purpose:** Memory retrieval under inversion pressure
- **Choice Variations:**
  1. Observe patterns and wait
  2. Rush before stabilization
  3. Use anchor lines
  4. Leave and retry during surge
- **Triggers:** Inversion Surge event
- **Consequences:** Memory obtained; patrols if delayed
- **Recursion Variant:** Fragment location shifts per loop
- **Hidden Conditions:** Extra fragment during anomaly awakening
- **Enemy/Corruption Interactions:** Patrols increase with surge (gated as needed)

#### Node Metadata
id: node_110
act: 3
resonance: [Echoes]
resonance_alias: [Memory]
region_id: inverted_landmasses
subregion_id: upside_down_realms
region_state: Surging
tone_tags: [mystic, atmospheric]
danger_tier: High
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

---
### Node 131: Chorus Pathfinding
- **Short Description:** Follow the chorus across the Reverberant Plains to a hidden cache while avoiding loop traps.
- **Tone Tag:** Mystic, reflective
- **Region Tag:** Echo Fields — Reverberant Plains
- **Resonance Tag:** Echoes
- **Narrative Purpose:** Introduces echo harmonization routes and loop awareness.
- **Choice Variations:**
  1. Track strongest chorus threads
  2. Weave between threads to minimize aggro
  3. Lay a counter-echo marker trail
  4. Retreat when trace_overflow rises
- **Triggers:** echo_bloom, chorus_wave
- **Consequences:** Cache recovered; missteps spawn recursion shamblers
- **Recursion Variant:** Chorus intensity patterns rotate per seed
- **Hidden Conditions:** Bonus artifact if no loop triggers this cycle
- **Enemy/Corruption Interactions:** Loop entrapment only under trace_overflow (gated)

#### Node Metadata
id: node_131
act: 3
resonance: [Echoes]
resonance_alias: []
region_id: echo_fields
subregion_id: reverberant_plains
region_state: Blooming
tone_tags: [mystic, reflective]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 132: Recursion Trace Decode
- **Short Description:** Decode recursion traces to open a short cut without triggering loops.
- **Tone Tag:** Reflective, atmospheric
- **Region Tag:** Echo Fields — Reverberant Plains
- **Resonance Tag:** Paradox
- **Narrative Purpose:** Teaches safe decoding to bypass loop risks.
- **Choice Variations:**
  1. Slow decode along stable traces
  2. Quick decode risking minor loop
  3. Use a harmonizer tool
  4. Wait for recursion_loop event to pass
- **Triggers:** recursion_loop
- **Consequences:** Short cut opens; quick decode failure replays a limited loop
- **Recursion Variant:** Trace geometry varies
- **Hidden Conditions:** Extra lore if also completed Chorus Pathfinding
- **Enemy/Corruption Interactions:** Loop replay is gated and limited

#### Node Metadata
id: node_132
act: 3
resonance: [Paradox]
resonance_alias: [Eternity]
region_id: echo_fields
subregion_id: reverberant_plains
region_state: Looping
tone_tags: [reflective, atmospheric]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 133: Archive Page Alignment
- **Short Description:** Align shifting archive pages to reveal a hidden lore cell.
- **Tone Tag:** Atmospheric, reflective
- **Region Tag:** Echo Fields — Hall of Echoes
- **Resonance Tag:** Memory
- **Narrative Purpose:** Introduces archive alignment under patrol pressure.
- **Choice Variations:**
  1. Align slowly during low vigilance
  2. Fast align between patrol cycles
  3. Use reflection puzzle hint
  4. Call off attempt during echo_guardian_vigil
- **Triggers:** archive_awakening, echo_guardian_vigil
- **Consequences:** Lore cell opens; failure draws a guardian loop
- **Recursion Variant:** Page order shifts
- **Hidden Conditions:** Extra lore if no patrol is alerted
- **Enemy/Corruption Interactions:** Corruption gated only on hidden failure branch during archive_awakening surge (gated surge/hidden)

#### Node Metadata
id: node_133
act: 3
resonance: [Memory]
resonance_alias: [Echoes]
region_id: echo_fields
subregion_id: hall_of_echoes
region_state: Awakening
tone_tags: [atmospheric, reflective]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 134: Vigil Route Bypass
- **Short Description:** Time your movement through guard patrol gaps to reach an artifact.
- **Tone Tag:** Reflective, atmospheric
- **Region Tag:** Echo Fields — Hall of Echoes
- **Resonance Tag:** Echoes
- **Narrative Purpose:** Stealth routing with patrol prediction.
- **Choice Variations:**
  1. Memorize patrol routes then advance
  2. Use an echo dampener
  3. Trigger a decoy resonance
  4. Retreat during heightened vigilance
- **Triggers:** echo_guardian_vigil
- **Consequences:** Artifact recovered; detection triggers looped chase
- **Recursion Variant:** Patrol cycles rotate
- **Hidden Conditions:** Bonus if no detection occurs
- **Enemy/Corruption Interactions:** Corruption gated to hidden branch only; detection loops occur only under surge windows (gated surge/hidden)

#### Node Metadata
id: node_134
act: 3
resonance: [Echoes]
resonance_alias: []
region_id: echo_fields
subregion_id: hall_of_echoes
region_state: Vigil
tone_tags: [reflective, atmospheric]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 135: Vein Pulse Tuning
- **Short Description:** Tune resonance to cross Memory Veins safely during a pulse.
- **Tone Tag:** Mystic, atmospheric
- **Region Tag:** Echo Fields — Memory Veins
- **Resonance Tag:** Pulse
- **Narrative Purpose:** Teaches timing windows and harmonization thresholds.
- **Choice Variations:**
  1. Cross at low amplitude
  2. Ride a mid-amplitude pulse
  3. Use a stabilizer seed
  4. Wait for vein_pulse lull
- **Triggers:** vein_pulse
- **Consequences:** Safe crossing and reward; mistime causes resonance drag
- **Recursion Variant:** Pulse amplitudes vary
- **Hidden Conditions:** Extra reward if no drag occurs
- **Enemy/Corruption Interactions:** Corruption gated to surge event window or hidden failure branch (gated surge/hidden)

#### Node Metadata
id: node_135
act: 3
resonance: [Pulse]
resonance_alias: [Echoes]
region_id: echo_fields
subregion_id: memory_veins
region_state: Pulsing
tone_tags: [mystic, atmospheric]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 136: Loop Bloom Harvest
- **Short Description:** Exploit a micro-loop to gather harmonized fragments quickly.
- **Tone Tag:** Atmospheric, reflective
- **Region Tag:** Echo Fields — Memory Veins
- **Resonance Tag:** Paradox
- **Narrative Purpose:** Resource optimization via controlled loop replay.
- **Choice Variations:**
  1. Harvest conservative amounts
  2. Push the loop for higher yield (risky)
  3. Stabilize with a loop anchor
  4. Exit early if variance spikes
- **Triggers:** loop_bloom
- **Consequences:** Fragments gathered; overpush triggers loop backlash
- **Recursion Variant:** Loop length varies
- **Hidden Conditions:** Extra yield if Vein Pulse Tuning was perfect
- **Enemy/Corruption Interactions:** Corruption gated only on hidden failure branch during loop_bloom surge (gated surge/hidden)

#### Node Metadata
id: node_136
act: 3
resonance: [Paradox]
resonance_alias: [Eternity]
region_id: echo_fields
subregion_id: memory_veins
region_state: Bloom
tone_tags: [atmospheric, reflective]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 137: Whisper Triangulation
- **Short Description:** Align to three whispers to reveal an artifact without raising unrest.
- **Tone Tag:** Haunting, reflective
- **Region Tag:** Echo Fields — Archive of Lost Voices
- **Resonance Tag:** Memory
- **Narrative Purpose:** Teaches whisper triangulation and silent movement bonuses.
- **Choice Variations:**
  1. Move slowly to precise angles
  2. Use a resonance compass
  3. Risk a quick align for speed
  4. Wait for whisper_swell
- **Triggers:** whisper_swell
- **Consequences:** Artifact recovered; rushed align can rouse a wraith
- **Recursion Variant:** Whisper positions shift
- **Hidden Conditions:** Extra lore if no unrest triggered
- **Enemy/Corruption Interactions:** Corruption gated only on hidden failure branch during whisper_swell surge (gated surge/hidden)

#### Node Metadata
id: node_137
act: 3
resonance: [Memory]
resonance_alias: [Echoes]
region_id: echo_fields
subregion_id: archive_of_lost_voices
region_state: Swell
tone_tags: [haunting, reflective]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 138: Silence Cache Stabilization
- **Short Description:** Stabilize a fleeting cache before wraith unrest builds.
- **Tone Tag:** Reflective, atmospheric
- **Region Tag:** Echo Fields — Archive of Lost Voices
- **Resonance Tag:** Echoes
- **Narrative Purpose:** High-focus action with timing and silence maintenance.
- **Choice Variations:**
  1. Stabilize precisely over time
  2. Rapid stabilize (risky)
  3. Use a silence veil
  4. Abort once silence_break triggers
- **Triggers:** silence_break
- **Consequences:** Cache stabilized; rapid attempt can draw unrest
- **Recursion Variant:** Stability windows vary
- **Hidden Conditions:** Extra cache if Whisper Triangulation done this cycle
- **Enemy/Corruption Interactions:** Corruption gated to hidden failure branch during silence_break surge (gated surge/hidden)

#### Node Metadata
id: node_138
act: 3
resonance: [Echoes]
resonance_alias: []
region_id: echo_fields
subregion_id: archive_of_lost_voices
region_state: Break
tone_tags: [reflective, atmospheric]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 139: Reflection Pool Rite
- **Short Description:** Harmonize at the resonance pools to mirror a past choice and unlock an alternate path.
- **Tone Tag:** Reflective, mystic
- **Region Tag:** Echo Fields — Hall of Echoes
- **Resonance Tag:** Memory
- **Narrative Purpose:** Introduces reflection-based branch unlocking.
- **Choice Variations:**
  1. Mirror a virtuous choice
  2. Mirror a pragmatic choice
  3. Decline to mirror, observe outcome
  4. Attempt dual reflection (risky)
- **Triggers:** memory_awakening
- **Consequences:** Alternate branch opens; dual reflection can misalign
- **Recursion Variant:** Reflections available vary
- **Hidden Conditions:** Bonus if prior vigil routes untouched
- **Enemy/Corruption Interactions:** Corruption gated to secret branch or surge-induced misalignment only (gated surge/secret)

#### Node Metadata
id: node_139
act: 3
resonance: [Memory]
resonance_alias: [Reflection]
region_id: echo_fields
subregion_id: hall_of_echoes
region_state: Awakened
tone_tags: [reflective, mystic]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 140: Echo Gate Weave
- **Short Description:** Weave echo threads through a gate lattice to access a sealed passage.
- **Tone Tag:** Mystic, atmospheric
- **Region Tag:** Echo Fields — Memory Veins
- **Resonance Tag:** Echoes
- **Narrative Purpose:** Skillful threading under event pressure to unlock traversal.
- **Choice Variations:**
  1. Slow weave along stable tethers
  2. Fast weave across unstable tethers (risky)
  3. Use a thread tuner
  4. Wait for loop_bloom to simplify
- **Triggers:** loop_bloom
- **Consequences:** Passage opens; fast weave failure tangles threads
- **Recursion Variant:** Tether maps rotate
- **Hidden Conditions:** Extra link if Vein crossings were perfect
- **Enemy/Corruption Interactions:** Corruption gated only under surge window or hidden failure branch (gated surge/hidden)

#### Node Metadata
id: node_140
act: 3
resonance: [Echoes]
resonance_alias: [Pulse]
region_id: echo_fields
subregion_id: memory_veins
region_state: Weave
tone_tags: [mystic, atmospheric]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 141: Glint Path Calibration
- **Short Description:** Time movement through paradox glints to reach a hidden omen shard.
- **Tone Tag:** Surreal, mysterious
- **Region Tag:** Dreamscape — Fractured Visions
- **Resonance Tag:** Vision
- **Narrative Purpose:** Introduces paradox glint timing and safe decode windows.
- **Choice Variations:**
  1. Follow slow, stable glints
  2. Dash across rapid glints (risky)
  3. Anchor a glint with a focus charm
  4. Wait for paradox_glint event to widen windows
- **Triggers:** paradox_glint
- **Consequences:** Hidden shard retrieved; dash failure induces image backlash
- **Recursion Variant:** Glint timing shifts between loops
- **Hidden Conditions:** Bonus path if no vision missteps this cycle
- **Enemy/Corruption Interactions:** Corruption gated to hidden backlash or brief surge window only (gated surge/hidden)

#### Node Metadata
id: node_141
act: 3
resonance: [Vision]
resonance_alias: []
region_id: dreamscape
subregion_id: fractured_visions
region_state: Fracture
tone_tags: [surreal, mysterious]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 142: Fracture Puzzle Weave
- **Short Description:** Solve overlapping image layers without triggering a paradox loop.
- **Tone Tag:** Surreal, mysterious
- **Region Tag:** Dreamscape — Fractured Visions
- **Resonance Tag:** Paradox
- **Narrative Purpose:** Layer alignment puzzle under shifting visuals.
- **Choice Variations:**
  1. Align edges carefully
  2. Force merge two layers (risky)
  3. Use a reflection prism for hints
  4. Pause during image_fracture to expose seams
- **Triggers:** image_fracture
- **Consequences:** Safe alignment unlocks route; forced merge may spawn loop scar
- **Recursion Variant:** Layer order randomizes
- **Hidden Conditions:** Extra cache if no forced merge used
- **Enemy/Corruption Interactions:** Corruption surfaces only on forced merge failures or surge (gated surge/hidden)

#### Node Metadata
id: node_142
act: 3
resonance: [Paradox]
resonance_alias: []
region_id: dreamscape
subregion_id: fractured_visions
region_state: Weave
tone_tags: [surreal, mysterious]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 143: Omen Decipher Ritual
- **Short Description:** Decode an omen chorus safely to reveal a timeline branch.
- **Tone Tag:** Prophetic, atmospheric
- **Region Tag:** Dreamscape — Prophetic Isles
- **Resonance Tag:** Vision
- **Narrative Purpose:** Safe prophecy decipher under chorus windows.
- **Choice Variations:**
  1. Solo decipher slowly
  2. Accelerate decipher (risky)
  3. Harmonize with a tuning relic
  4. Wait for omen_chorus event to open the window
- **Triggers:** omen_chorus
- **Consequences:** Branch preview unlocked; acceleration may misread the omen
- **Recursion Variant:** Chorus intervals vary
- **Hidden Conditions:** Bonus if no acceleration used in prior cycle
- **Enemy/Corruption Interactions:** Corruption gated to secret misread branch or surge misalignment (gated surge/secret)

#### Node Metadata
id: node_143
act: 3
resonance: [Vision]
resonance_alias: []
region_id: dreamscape
subregion_id: prophetic_isles
region_state: Chorus
tone_tags: [prophetic, atmospheric]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 144: Timeline Preview Optimization
- **Short Description:** Use timeline previews to choose an optimal sequence for rewards.
- **Tone Tag:** Prophetic, atmospheric
- **Region Tag:** Dreamscape — Prophetic Isles
- **Resonance Tag:** Memory
- **Narrative Purpose:** Teach preview-driven sequencing and tradeoffs.
- **Choice Variations:**
  1. Prioritize safety
  2. Prioritize reward magnitude (risky)
  3. Balance sequence for stability
  4. Delay until timeline_echo for clearer previews
- **Triggers:** timeline_echo
- **Consequences:** Chosen sequence imprints future outcomes; risky path may destabilize later choices
- **Recursion Variant:** Preview clarity varies with seed
- **Hidden Conditions:** Extra imprint if previous omen decipher was perfect
- **Enemy/Corruption Interactions:** Corruption gated to hidden destabilized branch or brief surge (gated surge/hidden)

#### Node Metadata
id: node_144
act: 3
resonance: [Memory]
resonance_alias: [Reflection]
region_id: dreamscape
subregion_id: prophetic_isles
region_state: Preview
tone_tags: [prophetic, atmospheric]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 145: Layer Slide Traverse
- **Short Description:** Capitalize on a layer slide to reach a rare cache.
- **Tone Tag:** Surreal, atmospheric
- **Region Tag:** Dreamscape — Shifting Horizons
- **Resonance Tag:** Echoes
- **Narrative Purpose:** Navigate sliding layers under time pressure.
- **Choice Variations:**
  1. Follow the safe slide
  2. Jump layers for speed (risky)
  3. Use a layer pin to stabilize
  4. Wait for layer_slide to widen path
- **Triggers:** layer_slide
- **Consequences:** Cache obtained; risky jumps can trap you between layers
- **Recursion Variant:** Slide timing shifts
- **Hidden Conditions:** Extra key if no missteps occurred
- **Enemy/Corruption Interactions:** Corruption gated to hidden trap state or surge window (gated surge/hidden)

#### Node Metadata
id: node_145
act: 3
resonance: [Echoes]
resonance_alias: []
region_id: dreamscape
subregion_id: shifting_horizons
region_state: Slide
tone_tags: [surreal, atmospheric]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 146: Loop Bloom Extraction
- **Short Description:** Manage micro spatial loops to harvest rewards efficiently.
- **Tone Tag:** Surreal, atmospheric
- **Region Tag:** Dreamscape — Shifting Horizons
- **Resonance Tag:** Paradox
- **Narrative Purpose:** Teaches bounded repetition for optimal yield.
- **Choice Variations:**
  1. Harvest conservatively
  2. Push for extra cycles (risky)
  3. Use a loop limiter
  4. Engage during spatial_loop_bloom for safer repeats
- **Triggers:** spatial_loop_bloom
- **Consequences:** Yield scales with control; overpush spawns loop fatigue
- **Recursion Variant:** Loop count variance per seed
- **Hidden Conditions:** Bonus if limiter used perfectly
- **Enemy/Corruption Interactions:** Corruption only manifests on overpush failures or surge (gated surge/hidden)

#### Node Metadata
id: node_146
act: 3
resonance: [Paradox]
resonance_alias: []
region_id: dreamscape
subregion_id: shifting_horizons
region_state: Bloom
tone_tags: [surreal, atmospheric]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 147: Convergence Thread Balance
- **Short Description:** Balance memory and fate threads to unlock a convergence variant.
- **Tone Tag:** Mysterious, prophetic
- **Region Tag:** Dreamscape — Chamber of Eternal Dreams
- **Resonance Tag:** Eternity
- **Narrative Purpose:** Deep reverie decision that shapes future variants.
- **Choice Variations:**
  1. Favor memory threads
  2. Favor fate threads
  3. Hold perfect balance
  4. Wait for reverie_depth to simplify imprinting
- **Triggers:** reverie_depth
- **Consequences:** Unlocks a tailored convergence variant; imbalance can echo later costs
- **Recursion Variant:** Thread weightings rotate
- **Hidden Conditions:** Extra boon if perfect balance achieved
- **Enemy/Corruption Interactions:** Corruption gated to secret imbalance failure or surge (gated surge/secret)

#### Node Metadata
id: node_147
act: 3
resonance: [Eternity]
resonance_alias: []
region_id: dreamscape
subregion_id: chamber_of_eternal_dreams
region_state: Convergence
tone_tags: [mysterious, prophetic]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 148: Reverie Depth Imprint
- **Short Description:** Deepen reverie safely to imprint a choice pattern.
- **Tone Tag:** Mysterious, prophetic
- **Region Tag:** Dreamscape — Chamber of Eternal Dreams
- **Resonance Tag:** Memory
- **Narrative Purpose:** Guides safe deep-reverie imprinting and consequences.
- **Choice Variations:**
  1. Imprint restraint
  2. Imprint ambition (risky)
  3. Imprint equilibrium
  4. Delay until fate_reflection clarifies outcomes
- **Triggers:** fate_reflection
- **Consequences:** Persistent imprint influences future options; ambition may carry subtle cost
- **Recursion Variant:** Imprint clarity varies
- **Hidden Conditions:** Bonus if prior convergence balance was perfect
- **Enemy/Corruption Interactions:** Corruption appears only on failed ambitious imprint or surge (gated surge/hidden)

#### Node Metadata
id: node_148
act: 3
resonance: [Memory]
resonance_alias: [Reflection]
region_id: dreamscape
subregion_id: chamber_of_eternal_dreams
region_state: Imprint
tone_tags: [mysterious, prophetic]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 149: Horizon Weave Cartography
- **Short Description:** Map shifting horizons to stabilize a multi-route weave.
- **Tone Tag:** Surreal, atmospheric
- **Region Tag:** Dreamscape — Shifting Horizons
- **Resonance Tag:** Echoes
- **Narrative Purpose:** Route planning under dynamic layers.
- **Choice Variations:**
  1. Chart conservative weave
  2. Chart aggressive weave (risky)
  3. Use a path compass
  4. Wait for layer_slide to expose a shortcut
- **Triggers:** layer_slide
- **Consequences:** Weave stabilized; aggressive plan may close mid-route
- **Recursion Variant:** Route nodes rotate
- **Hidden Conditions:** Extra link if zero detours taken
- **Enemy/Corruption Interactions:** Corruption gated to hidden closed-route failure or surge (gated surge/hidden)

#### Node Metadata
id: node_149
act: 3
resonance: [Echoes]
resonance_alias: []
region_id: dreamscape
subregion_id: shifting_horizons
region_state: Weave
tone_tags: [surreal, atmospheric]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 150: Omen Gate Alignment
- **Short Description:** Align omen gates to open a convergence passage.
- **Tone Tag:** Prophetic, atmospheric
- **Region Tag:** Dreamscape — Prophetic Isles
- **Resonance Tag:** Vision
- **Narrative Purpose:** High-stakes gate alignment with preview risk management.
- **Choice Variations:**
  1. Align by omen cadence
  2. Force alignment with paradox torque (risky)
  3. Use a chorus attuner
  4. Wait for prophecy_alignment for safer windows
- **Triggers:** prophecy_alignment
- **Consequences:** Passage opens; forced alignment may misroute
- **Recursion Variant:** Gate cadence shifts
- **Hidden Conditions:** Extra convergence boon if prior decipher and preview were flawless
- **Enemy/Corruption Interactions:** Corruption gated to secret misroute branch or surge (gated surge/secret)

#### Node Metadata
id: node_150
act: 3
resonance: [Vision]
resonance_alias: []
region_id: dreamscape
subregion_id: prophetic_isles
region_state: Alignment
tone_tags: [prophetic, atmospheric]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 151: Harmonic Impact Forge
- **Short Description:** Land forging blows on harmonic beats to bind a star-metal core into a stable frame.
- **Tone Tag:** Epic, powerful
- **Region Tag:** Forge of Creation — Cosmic Anvil
- **Resonance Tag:** Creation
- **Narrative Purpose:** Introduces impact timing and harmonic temper setup.
- **Choice Variations:**
  1. Strike only on strong beats (safe)
  2. Double-strike between beats (risky)
  3. Use a unity tuner to lock rhythm
  4. Wait for anvil_resonance window
- **Triggers:** anvil_resonance
- **Consequences:** Stable bind vs. frame fractures; double-strike can overheat
- **Recursion Variant:** Beat pattern rotates per loop
- **Hidden Conditions:** Extra trait if no off-beat strikes occur
- **Enemy/Corruption Interactions:** Essence taint creeps in with overheating; corruption rises if timing is sloppy

#### Node Metadata
id: node_151
act: 3
resonance: [Creation]
resonance_alias: []
region_id: forge_of_creation
subregion_id: cosmic_anvil
region_state: Temper
tone_tags: [epic, powerful]
danger_tier: High
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 152: Harmonic Temper Quench
- **Short Description:** Cool the forged core through unity bands to lock desired traits.
- **Tone Tag:** Epic, transformative
- **Region Tag:** Forge of Creation — Cosmic Anvil
- **Resonance Tag:** Unity
- **Narrative Purpose:** Teaches controlled quenching and band selection.
- **Choice Variations:**
  1. Quench in stable band
  2. Quench across shifting bands (risky)
  3. Use pulse regulator to slow the shift
  4. Wait for harmonic_temper event
- **Triggers:** harmonic_temper
- **Consequences:** Trait locked; risky quench may cause microfractures
- **Recursion Variant:** Band order changes
- **Hidden Conditions:** Bonus trait if no pulse spikes during quench
- **Enemy/Corruption Interactions:** Quenching impurities can mutate traits if misaligned; corruption pressure present

#### Node Metadata
id: node_152
act: 3
resonance: [Unity]
resonance_alias: [Harmony]
region_id: forge_of_creation
subregion_id: cosmic_anvil
region_state: Quench
tone_tags: [epic, transformative]
danger_tier: High
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 153: Essence Ratio Trial
- **Short Description:** Tune volatile essence ratios to achieve a stable power curve in the crucible.
- **Tone Tag:** Risky, transformative
- **Region Tag:** Forge of Creation — Primordial Crucible
- **Resonance Tag:** Pulse
- **Narrative Purpose:** Balances temperature, pressure, and mixture for stability.
- **Choice Variations:**
  1. Conservative ratio (safe)
  2. Aggressive ratio (risky)
  3. Use a vent weave to bleed pressure
  4. Mix during essence_swell for peak output
- **Triggers:** essence_swell
- **Consequences:** Stable curve yields potent core; aggressive ratio risks runaway
- **Recursion Variant:** Optimal ratio shifts with seed
- **Hidden Conditions:** Extra potency if no vent required
- **Enemy/Corruption Interactions:** Corruption manifests as taint in overpressured mixes; mutation risk on runaway

#### Node Metadata
id: node_153
act: 3
resonance: [Pulse]
resonance_alias: []
region_id: forge_of_creation
subregion_id: primordial_crucible
region_state: Mix
tone_tags: [risky, transformative]
danger_tier: High
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 154: Emergency Vent Protocol
- **Short Description:** Purge crucible pressure without losing the artifact’s progress.
- **Tone Tag:** Risky, powerful
- **Region Tag:** Forge of Creation — Primordial Crucible
- **Resonance Tag:** Paradox
- **Narrative Purpose:** Controlled fail-safe to salvage progress during volatility.
- **Choice Variations:**
  1. Slow bleed via side vents
  2. Full purge and rebind (risky)
  3. Invert flow using paradox baffle
  4. Vent during elemental_uprising to harvest cores
- **Triggers:** elemental_uprising
- **Consequences:** Salvaged progress; full purge may destabilize bindings
- **Recursion Variant:** Vent latency varies
- **Hidden Conditions:** Bonus salvage if inverted flow holds
- **Enemy/Corruption Interactions:** Venting exposes corruption plumes; containment required

#### Node Metadata
id: node_154
act: 3
resonance: [Paradox]
resonance_alias: []
region_id: forge_of_creation
subregion_id: primordial_crucible
region_state: Vent
tone_tags: [risky, powerful]
danger_tier: High
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 155: Blueprint Chant Stabilization
- **Short Description:** Recite blueprint mantras to stabilize a complex living design.
- **Tone Tag:** Epic, transformative
- **Region Tag:** Forge of Creation — Shaping Halls
- **Resonance Tag:** Creation
- **Narrative Purpose:** Pattern clarity and chant cadence to prevent misprints.
- **Choice Variations:**
  1. Slow chant for safety
  2. Rapid chant to capture fleeting pattern (risky)
  3. Use a clarity lens
  4. Act during pattern_clarity for wider tolerance
- **Triggers:** pattern_clarity
- **Consequences:** Pattern binds; rapid chant risks misprint wraiths
- **Recursion Variant:** Cadence requirements rotate
- **Hidden Conditions:** Extra blueprint if no cadence errors
- **Enemy/Corruption Interactions:** Misprints invite corruption filaments; mitigation necessary

#### Node Metadata
id: node_155
act: 3
resonance: [Creation]
resonance_alias: []
region_id: forge_of_creation
subregion_id: shaping_halls
region_state: Weave
tone_tags: [epic, transformative]
danger_tier: High
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 156: Living Design Imprint
- **Short Description:** Embed a defining trait into the living design without triggering overgrowth.
- **Tone Tag:** Epic, powerful
- **Region Tag:** Forge of Creation — Shaping Halls
- **Resonance Tag:** Unity
- **Narrative Purpose:** Teaches imprint timing and trait selection tradeoffs.
- **Choice Variations:**
  1. Imprint resilience
  2. Imprint ambition (risky)
  3. Balance dual traits with attuner
  4. Wait for design_echos to improve quality
- **Triggers:** design_echos
- **Consequences:** Trait embedded; ambition can cause overgrowth later
- **Recursion Variant:** Trait synergy rotates
- **Hidden Conditions:** Extra synergy if prior blueprint was flawless
- **Enemy/Corruption Interactions:** Overgrowth is a corruption vector; keep sealers ready

#### Node Metadata
id: node_156
act: 3
resonance: [Unity]
resonance_alias: [Harmony]
region_id: forge_of_creation
subregion_id: shaping_halls
region_state: Imprint
tone_tags: [epic, powerful]
danger_tier: High
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 157: Chain Reaction Sculpt
- **Short Description:** Guide spark chains into a desired form before cascade runs away.
- **Tone Tag:** Powerful, risky
- **Region Tag:** Forge of Creation — Chamber of Infinite Sparks
- **Resonance Tag:** Pulse
- **Narrative Purpose:** Manage chain reactions for multiplicative outcomes.
- **Choice Variations:**
  1. Short chain for safety
  2. Long chain for yield (risky)
  3. Use a cascade regulator
  4. Act during spark_cascade for best multiplier
- **Triggers:** spark_cascade
- **Consequences:** Formed construct scales with chain length; long chains risk collapse
- **Recursion Variant:** Chain thresholds vary
- **Hidden Conditions:** Extra node if no containment alarms
- **Enemy/Corruption Interactions:** Sparks carry entropy; corruption rises with chain length

#### Node Metadata
id: node_157
act: 3
resonance: [Pulse]
resonance_alias: []
region_id: forge_of_creation
subregion_id: chamber_of_infinite_sparks
region_state: Cascade
tone_tags: [powerful, risky]
danger_tier: High
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 158: Containment Seal Hold
- **Short Description:** Hold the containment seal long enough to harvest peak energy safely.
- **Tone Tag:** Powerful, epic
- **Region Tag:** Forge of Creation — Chamber of Infinite Sparks
- **Resonance Tag:** Unity
- **Narrative Purpose:** Teaches coordination and endurance during containment lapses.
- **Choice Variations:**
  1. Rotate sealers frequently
  2. Solo hold for peak yield (risky)
  3. Use a unity lattice to share load
  4. Attempt during containment_lapse for rare drops
- **Triggers:** containment_lapse
- **Consequences:** Harvest succeeds; solo hold risks catastrophic breach
- **Recursion Variant:** Seal decay rate varies
- **Hidden Conditions:** Extra harvest if no lattice failure
- **Enemy/Corruption Interactions:** Breach floods area with corruption; mitigation mandatory

#### Node Metadata
id: node_158
act: 3
resonance: [Unity]
resonance_alias: []
region_id: forge_of_creation
subregion_id: chamber_of_infinite_sparks
region_state: Contain
tone_tags: [powerful, epic]
danger_tier: High
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 159: Star-Metal Calibration Run
- **Short Description:** Calibrate star-metal lattice alignment across multiple anvils.
- **Tone Tag:** Epic, transformative
- **Region Tag:** Forge of Creation — Cosmic Anvil
- **Resonance Tag:** Creation
- **Narrative Purpose:** Multi-station coordination to align lattice perfectly.
- **Choice Variations:**
  1. Single-station calibration (safe)
  2. Multi-station rapid run (risky)
  3. Use a pulse metronome
  4. Execute during star_metal_fall for rare bonuses
- **Triggers:** star_metal_fall
- **Consequences:** Lattice aligned; rapid run risks misalignment chain
- **Recursion Variant:** Station order rotates
- **Hidden Conditions:** Extra alignment if no retries used
- **Enemy/Corruption Interactions:** Misalignment invites corruption filaments into the lattice

#### Node Metadata
id: node_159
act: 3
resonance: [Creation]
resonance_alias: []
region_id: forge_of_creation
subregion_id: cosmic_anvil
region_state: Align
tone_tags: [epic, transformative]
danger_tier: High
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 160: Infinite Spark Weave
- **Short Description:** Weave multiple spark threads into a coherent artifact signature.
- **Tone Tag:** Powerful, transformative
- **Region Tag:** Forge of Creation — Chamber of Infinite Sparks
- **Resonance Tag:** Renewal
- **Narrative Purpose:** Final synthesis for a stable, regenerative signature.
- **Choice Variations:**
  1. Conservative weave for stability
  2. Aggressive weave for potency (risky)
  3. Use a renewal core to smooth edges
  4. Attempt during spark_storm for maximum potential
- **Triggers:** spark_storm
- **Consequences:** Signature set; aggressive weave risks signature decay
- **Recursion Variant:** Thread harmonics change
- **Hidden Conditions:** Extra regeneration if prior chain sculpt was flawless
- **Enemy/Corruption Interactions:** Stray sparks can taint the weave; corruption mitigation recommended

#### Node Metadata
id: node_160
act: 3
resonance: [Renewal]
resonance_alias: []
region_id: forge_of_creation
subregion_id: chamber_of_infinite_sparks
region_state: Synthesize
tone_tags: [powerful, transformative]
danger_tier: High
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 161: Beatline Traverse
- **Short Description:** Advance along a cadence path, moving only on safe time beats to bypass unstable rifts.
- **Tone Tag:** Urgent, mysterious
- **Region Tag:** Temporal Nexus — Chrono Spire
- **Resonance Tag:** Time
- **Narrative Purpose:** Teaches beat timing and rift glide setup.
- **Choice Variations:**
  1. Move strictly on primary beats (safe)
  2. Slip between beats for speed (risky)
  3. Use a cadence tuner
  4. Wait for cadence_peak
- **Triggers:** cadence_peak
- **Consequences:** Clean traversal vs. rift destabilization
- **Recursion Variant:** Beat spacing shifts seed-to-seed
- **Hidden Conditions:** Bonus glide if zero off-beat steps
- **Enemy/Corruption Interactions:** Temporal erosion appears only on off-beat slips or surge windows (gated surge/hidden)

#### Node Metadata
id: node_161
act: 3
resonance: [Time]
resonance_alias: []
region_id: temporal_nexus
subregion_id: chrono_spire
region_state: Traverse
tone_tags: [urgent, mysterious]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 162: Cadence Bind
- **Short Description:** Bind a temporal effect during a perfect beat window.
- **Tone Tag:** Urgent, tense
- **Region Tag:** Temporal Nexus — Chrono Spire
- **Resonance Tag:** Paradox
- **Narrative Purpose:** Introduces high-precision beat binding.
- **Choice Variations:**
  1. Bind on stable beat (safe)
  2. Attempt double bind (risky)
  3. Use paradox stabilizer
  4. Wait for rift_glide to extend window
- **Triggers:** rift_glide
- **Consequences:** Effect locked; double bind can desync
- **Recursion Variant:** Beat drift magnitude varies
- **Hidden Conditions:** Extra stability if no drift
- **Enemy/Corruption Interactions:** Corruption only manifests on failed double bind or surge (gated surge/hidden)

#### Node Metadata
id: node_162
act: 3
resonance: [Paradox]
resonance_alias: []
region_id: temporal_nexus
subregion_id: chrono_spire
region_state: Bind
tone_tags: [urgent, tense]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 163: Stasis Vault Entry
- **Short Description:** Enter a stasis vault during an expanding freeze window.
- **Tone Tag:** Mysterious, tense
- **Region Tag:** Temporal Nexus — Frozen Continuum
- **Resonance Tag:** Eternity
- **Narrative Purpose:** Teaches controlled exploitation of freeze windows.
- **Choice Variations:**
  1. Enter early (safe)
  2. Wait for maximal expansion (risky)
  3. Use stasis prism to stabilize
  4. Time entry with deep_freeze
- **Triggers:** deep_freeze
- **Consequences:** Secure access vs. shear intrusion
- **Recursion Variant:** Freeze growth rate shifts
- **Hidden Conditions:** Bonus cache if entry timed at peak
- **Enemy/Corruption Interactions:** Temporal shear corruption only under late entry or surge (gated surge/hidden)

#### Node Metadata
id: node_163
act: 3
resonance: [Eternity]
resonance_alias: []
region_id: temporal_nexus
subregion_id: frozen_continuum
region_state: Entry
tone_tags: [mysterious, tense]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 164: Shear-Step Recovery
- **Short Description:** Recover scattered artifacts while avoiding emerging temporal shear zones.
- **Tone Tag:** Tense, mysterious
- **Region Tag:** Temporal Nexus — Frozen Continuum
- **Resonance Tag:** Time
- **Narrative Purpose:** Risk navigation amid shear warnings.
- **Choice Variations:**
  1. Collect only stable items (safe)
  2. Rush unstable items (risky)
  3. Deploy a shear dampener
  4. Wait for shear_warning to predict patterns
- **Triggers:** shear_warning
- **Consequences:** Full retrieval vs. fragmentation loss
- **Recursion Variant:** Shear pattern seeds rotate
- **Hidden Conditions:** Extra item if zero shear crossings
- **Enemy/Corruption Interactions:** Corruption anchored to shear breaches or surge (gated surge/hidden)

#### Node Metadata
id: node_164
act: 3
resonance: [Time]
resonance_alias: []
region_id: temporal_nexus
subregion_id: frozen_continuum
region_state: Recovery
tone_tags: [tense, mysterious]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 165: Cascade Route Set
- **Short Description:** Select cascade flow direction and loop layer count.
- **Tone Tag:** Urgent, tense
- **Region Tag:** Temporal Nexus — Eternal Cascade
- **Resonance Tag:** Paradox
- **Narrative Purpose:** Introduces risk tradeoffs in loop thickness.
- **Choice Variations:**
  1. Thin route (fast, risky)
  2. Thick route (slow, stable)
  3. Adaptive route (balanced)
  4. Wait for loop_thinning
- **Triggers:** loop_thinning
- **Consequences:** Route efficiency vs. stability
- **Recursion Variant:** Layer efficiency modifiers rotate
- **Hidden Conditions:** Bonus if adaptive route perfect balance
- **Enemy/Corruption Interactions:** Corruption rises only on thin overload or surge (gated surge/hidden)

#### Node Metadata
id: node_165
act: 3
resonance: [Paradox]
resonance_alias: []
region_id: temporal_nexus
subregion_id: eternal_cascade
region_state: Route
tone_tags: [urgent, tense]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 166: Loop Layer Harvest
- **Short Description:** Extract cumulative gains across repeated loop layers before instability rises.
- **Tone Tag:** Urgent, mysterious
- **Region Tag:** Temporal Nexus — Eternal Cascade
- **Resonance Tag:** Eternity
- **Narrative Purpose:** Teaches diminishing return pacing.
- **Choice Variations:**
  1. Exit early (safe)
  2. Stay for extended layers (risky)
  3. Use a stability anchor
  4. Shift during loop_thickening for safer harvest
- **Triggers:** loop_thickening
- **Consequences:** Harvest vs. instability loss
- **Recursion Variant:** Return curve changes per seed
- **Hidden Conditions:** Extra yield if exit just before instability spike
- **Enemy/Corruption Interactions:** Corruption only manifests after overstayed layers or surge (gated surge/hidden)

#### Node Metadata
id: node_166
act: 3
resonance: [Eternity]
resonance_alias: []
region_id: temporal_nexus
subregion_id: eternal_cascade
region_state: Harvest
tone_tags: [urgent, mysterious]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 167: Imprint Negotiation
- **Short Description:** Negotiate with a manifested echo of a past choice to accept, refine, or dismiss its boon.
- **Tone Tag:** Mysterious, tense
- **Region Tag:** Temporal Nexus — Chamber of Timeless Echoes
- **Resonance Tag:** Paradox
- **Narrative Purpose:** Introduces echo imprint evaluation.
- **Choice Variations:**
  1. Accept boon as-is
  2. Refine (risky)
  3. Reject for clarity credit
  4. Wait for echo_manifest
- **Triggers:** echo_manifest
- **Consequences:** Boon, improved boon, or future preview credit
- **Recursion Variant:** Echo personalities rotate
- **Hidden Conditions:** Bonus refinement if prior harvest perfect
- **Enemy/Corruption Interactions:** Corruption appears only if refinement fails or surge (gated surge/hidden)

#### Node Metadata
id: node_167
act: 3
resonance: [Paradox]
resonance_alias: []
region_id: temporal_nexus
subregion_id: chamber_of_timeless_echoes
region_state: Imprint
tone_tags: [mysterious, tense]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 168: Reflection Preview
- **Short Description:** View projected long-term outcomes before committing a binding choice.
- **Tone Tag:** Mysterious, tense
- **Region Tag:** Temporal Nexus — Chamber of Timeless Echoes
- **Resonance Tag:** Eternity
- **Narrative Purpose:** Teaches long-term planning via reflection.
- **Choice Variations:**
  1. Commit safe path
  2. Commit ambitious path (risky)
  3. Delay for more clarity
  4. Act during timeless_reflection for extended preview
- **Triggers:** timeless_reflection
- **Consequences:** Locked trajectory; ambitious path may impose future instability
- **Recursion Variant:** Preview fidelity changes
- **Hidden Conditions:** Bonus clarity if ambitious path deferred once
- **Enemy/Corruption Interactions:** Corruption only manifests on failed ambitious lock or surge (gated surge/hidden)

#### Node Metadata
id: node_168
act: 3
resonance: [Eternity]
resonance_alias: []
region_id: temporal_nexus
subregion_id: chamber_of_timeless_echoes
region_state: Reflection
tone_tags: [mysterious, tense]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 169: Acceleration Lattice Tuning
- **Short Description:** Tune an acceleration lattice to smooth time compression across actions.
- **Tone Tag:** Urgent, mysterious
- **Region Tag:** Temporal Nexus — Chrono Spire
- **Resonance Tag:** Time
- **Narrative Purpose:** Pacing control under acceleration pressure.
- **Choice Variations:**
  1. Conservative tuning
  2. Overclock lattice (risky)
  3. Use paradox buffer
  4. Wait for time_surge
- **Triggers:** time_surge
- **Consequences:** Stable compression vs. drift anomalies
- **Recursion Variant:** Baseline compression fluctuates
- **Hidden Conditions:** Extra efficiency if no drift anomalies
- **Enemy/Corruption Interactions:** Corruption emerges only on overclock drift or surge (gated surge/hidden)

#### Node Metadata
id: node_169
act: 3
resonance: [Time]
resonance_alias: []
region_id: temporal_nexus
subregion_id: chrono_spire
region_state: Tune
tone_tags: [urgent, mysterious]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 170: Cascade Shift Orchestration
- **Short Description:** Orchestrate a cascade shift to reorder downstream temporal effects.
- **Tone Tag:** Urgent, tense
- **Region Tag:** Temporal Nexus — Eternal Cascade
- **Resonance Tag:** Paradox
- **Narrative Purpose:** Teaches controlled reordering of time flow.
- **Choice Variations:**
  1. Minor shift (safe)
  2. Major reordering (risky)
  3. Use flow stabilizer
  4. Execute during cascade_shift
- **Triggers:** cascade_shift
- **Consequences:** Reordered effects; major shift may spawn anomalies
- **Recursion Variant:** Downstream effect volatility changes
- **Hidden Conditions:** Bonus routing if shift executed precisely mid-event
- **Enemy/Corruption Interactions:** Corruption only manifests on failed major shift or surge (gated surge/hidden)

#### Node Metadata
id: node_170
act: 3
resonance: [Paradox]
resonance_alias: []
region_id: temporal_nexus
subregion_id: eternal_cascade
region_state: Shift
tone_tags: [urgent, tense]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 171: Motif Alignment
- **Short Description:** Align revealed motifs to stabilize a resonant phrase.
- **Tone Tag:** Harmonic, enlightening
- **Region Tag:** Hall of Harmony — Symphonic Chamber
- **Resonance Tag:** Music
- **Narrative Purpose:** Introduces motif alignment and phrase stability.
- **Choice Variations:**
  1. Align slowly with cues (safe)
  2. Rapid alignment for bonus (risky)
  3. Use a tuning fork
  4. Wait for motif_reveal
- **Triggers:** motif_reveal
- **Consequences:** Phrase stabilizes; rushed alignment may introduce dissonance
- **Recursion Variant:** Motif order rotates
- **Hidden Conditions:** Extra bar if no dissonant notes
- **Enemy/Corruption Interactions:** Any corruption appears only on hidden dissonance branch or surge (gated surge/hidden)

#### Node Metadata
id: node_171
act: 3
resonance: [Music]
resonance_alias: []
region_id: hall_of_harmony
subregion_id: symphonic_chamber
region_state: Alignment
tone_tags: [harmonic, enlightening]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 172: Cue-Weave Sequence
- **Short Description:** Follow conductor cues to weave a complex sequence.
- **Tone Tag:** Harmonic, mysterious
- **Region Tag:** Hall of Harmony — Symphonic Chamber
- **Resonance Tag:** Echoes
- **Narrative Purpose:** Teaches cue timing and sequence boosts.
- **Choice Variations:**
  1. Follow primary cues (safe)
  2. Improvise between cues (risky)
  3. Use a cadence metronome
  4. Wait for conductor_cue
- **Triggers:** conductor_cue
- **Consequences:** Boosted sequence; improvisation may desync
- **Recursion Variant:** Cue timings shift
- **Hidden Conditions:** Extra weave if zero desyncs
- **Enemy/Corruption Interactions:** Corruption only on desync branch (gated hidden)

#### Node Metadata
id: node_172
act: 3
resonance: [Echoes]
resonance_alias: []
region_id: hall_of_harmony
subregion_id: symphonic_chamber
region_state: Sequence
tone_tags: [harmonic, mysterious]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 173: Star Tuning Rite
- **Short Description:** Tune stellar instruments for clarity and reach.
- **Tone Tag:** Harmonic, enlightening
- **Region Tag:** Hall of Harmony — Celestial Orchestra
- **Resonance Tag:** Music
- **Narrative Purpose:** Introduces star tuning and instrument fidelity.
- **Choice Variations:**
  1. Tune conservatively (safe)
  2. Over-tune for brilliance (risky)
  3. Use a star tuner
  4. Wait for star_tuning
- **Triggers:** star_tuning
- **Consequences:** Clear tone vs. string stress
- **Recursion Variant:** Baseline detuning varies
- **Hidden Conditions:** Extra clarity if no string stress
- **Enemy/Corruption Interactions:** Corruption gated to over-tune failure (gated hidden)

#### Node Metadata
id: node_173
act: 3
resonance: [Music]
resonance_alias: []
region_id: hall_of_harmony
subregion_id: celestial_orchestra
region_state: Tuning
tone_tags: [harmonic, enlightening]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 174: Chorus Alignment
- **Short Description:** Synchronize chorus parts to amplify a shared phrase.
- **Tone Tag:** Harmonic, mysterious
- **Region Tag:** Hall of Harmony — Celestial Orchestra
- **Resonance Tag:** Unity
- **Narrative Purpose:** Teaches cooperative alignment for power.
- **Choice Variations:**
  1. Align in sections (safe)
  2. Full chorus align (risky)
  3. Use section leaders
  4. Wait for choir_rise
- **Triggers:** choir_rise
- **Consequences:** Amplified phrase; full align may cause echo feedback
- **Recursion Variant:** Section strength rotates
- **Hidden Conditions:** Bonus if no feedback
- **Enemy/Corruption Interactions:** Corruption appears only on feedback branch (gated hidden)

#### Node Metadata
id: node_174
act: 3
resonance: [Unity]
resonance_alias: [Harmony]
region_id: hall_of_harmony
subregion_id: celestial_orchestra
region_state: Chorus
tone_tags: [harmonic, mysterious]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 175: Tone-Key Cipher
- **Short Description:** Discover the tone-key order to open a resonance vault.
- **Tone Tag:** Mysterious, enlightening
- **Region Tag:** Hall of Harmony — Resonance Vaults
- **Resonance Tag:** Echoes
- **Narrative Purpose:** Key sequence puzzle for vault access.
- **Choice Variations:**
  1. Test keys slowly (safe)
  2. Rapid key cycling (risky)
  3. Use a resonance probe
  4. Wait for key_echo
- **Triggers:** key_echo
- **Consequences:** Vault opens vs. hum alarm
- **Recursion Variant:** Key order shuffles
- **Hidden Conditions:** Extra cache if zero alarms
- **Enemy/Corruption Interactions:** Corruption only manifests on hum alarm branch (gated hidden)

#### Node Metadata
id: node_175
act: 3
resonance: [Echoes]
resonance_alias: []
region_id: hall_of_harmony
subregion_id: resonance_vaults
region_state: Cipher
tone_tags: [mysterious, enlightening]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 176: Echo Chord Resolution
- **Short Description:** Resolve echoing chords to calm a volatile vault hum.
- **Tone Tag:** Mysterious, harmonic
- **Region Tag:** Hall of Harmony — Resonance Vaults
- **Resonance Tag:** Music
- **Narrative Purpose:** Chord resolution under timing pressure.
- **Choice Variations:**
  1. Resolve in standard progression (safe)
  2. Attempt advanced resolution (risky)
  3. Use interval guide
  4. Act during hum_resolve
- **Triggers:** hum_resolve
- **Consequences:** Hums settle; advanced misstep raises alarm
- **Recursion Variant:** Interval map rotates
- **Hidden Conditions:** Extra calm if no missteps
- **Enemy/Corruption Interactions:** Corruption appears only on misstep alarm (gated hidden)

#### Node Metadata
id: node_176
act: 3
resonance: [Music]
resonance_alias: []
region_id: hall_of_harmony
subregion_id: resonance_vaults
region_state: Resolve
tone_tags: [mysterious, harmonic]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 177: Progression Stabilize
- **Short Description:** Hold an endless progression stable through rising dissonance.
- **Tone Tag:** Harmonic, mysterious
- **Region Tag:** Hall of Harmony — Chamber of Eternal Chords
- **Resonance Tag:** Echoes
- **Narrative Purpose:** Teaches progression stability and dissonance mitigation.
- **Choice Variations:**
  1. Stabilize with conservative voicings (safe)
  2. Hold extended voicings (risky)
  3. Use a cadence anchor
  4. Wait for chord_eternum
- **Triggers:** chord_eternum
- **Consequences:** Progression holds; extended voicings can fracture
- **Recursion Variant:** Dissonance profile changes
- **Hidden Conditions:** Extra bar if no fractures
- **Enemy/Corruption Interactions:** Corruption gated to fracture branch only (gated hidden)

#### Node Metadata
id: node_177
act: 3
resonance: [Echoes]
resonance_alias: []
region_id: hall_of_harmony
subregion_id: chamber_of_eternal_chords
region_state: Stabilize
tone_tags: [harmonic, mysterious]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 178: Unity Cadence Imprint
- **Short Description:** Imprint a boon at the final unity cadence.
- **Tone Tag:** Enlightening, harmonic
- **Region Tag:** Hall of Harmony — Chamber of Eternal Chords
- **Resonance Tag:** Unity
- **Narrative Purpose:** Cadence timing and imprint selection.
- **Choice Variations:**
  1. Imprint guidance (safe)
  2. Imprint ambition (risky)
  3. Balance dual boons
  4. Wait for cadence_unity
- **Triggers:** cadence_unity
- **Consequences:** Imprint secured; ambition may create resonance debt
- **Recursion Variant:** Boon pairings rotate
- **Hidden Conditions:** Extra boon if prior progression perfect
- **Enemy/Corruption Interactions:** Corruption only on failed ambitious imprint (gated hidden)

#### Node Metadata
id: node_178
act: 3
resonance: [Unity]
resonance_alias: [Harmony]
region_id: hall_of_harmony
subregion_id: chamber_of_eternal_chords
region_state: Imprint
tone_tags: [enlightening, harmonic]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 179: Resonance Bridge Traverse
- **Short Description:** Cross a temporary resonance bridge between distant chambers.
- **Tone Tag:** Mysterious, harmonic
- **Region Tag:** Hall of Harmony — Celestial Orchestra
- **Resonance Tag:** Echoes
- **Narrative Purpose:** Teaches bridge timing and pathing.
- **Choice Variations:**
  1. Cross during stable section (safe)
  2. Sprint through shifting harmonics (risky)
  3. Use a bridge tuner
  4. Wait for resonance_bridge
- **Triggers:** resonance_bridge
- **Consequences:** Safe traverse vs. drop to dissonant pocket
- **Recursion Variant:** Bridge nodes rotate
- **Hidden Conditions:** Extra link if no slips
- **Enemy/Corruption Interactions:** Corruption appears only in dissonant pocket (gated hidden)

#### Node Metadata
id: node_179
act: 3
resonance: [Echoes]
resonance_alias: []
region_id: hall_of_harmony
subregion_id: celestial_orchestra
region_state: Traverse
tone_tags: [mysterious, harmonic]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 180: Dissonance Burst Containment
- **Short Description:** Contain a sudden dissonance burst before it fractures the hall’s resonance.
- **Tone Tag:** Harmonic, enlightening
- **Region Tag:** Hall of Harmony — Symphonic Chamber
- **Resonance Tag:** Unity
- **Narrative Purpose:** Crisis management of dissonance safely.
- **Choice Variations:**
  1. Shield and disperse (safe)
  2. Counter with inverse chord (risky)
  3. Use resonance dampeners
  4. Act during harmony_swell for easier containment
- **Triggers:** dissonance_burst
- **Consequences:** Contained; inverse chord failure causes local fracture
- **Recursion Variant:** Burst intensity varies
- **Hidden Conditions:** Extra stability if no fractures
- **Enemy/Corruption Interactions:** Any corruption is restricted to hidden fracture branch (gated hidden)

#### Node Metadata
id: node_180
act: 3
resonance: [Unity]
resonance_alias: [Harmony]
region_id: hall_of_harmony
subregion_id: symphonic_chamber
region_state: Contain
tone_tags: [harmonic, enlightening]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 91: Aurora Bridge Harmonization
- **Short Description:** Stabilize an aurora bridge by harmonizing resonance tones to reach a relic grove.
- **Tone Tag:** Mystic, vibrant
- **Region Tag:** Mythic Biomes — Pantheon Wilds
- **Resonance Tag:** Echoes
- **Narrative Purpose:** Teach harmonization and environmental unlocking
- **Choice Variations:**
  1. Match tones precisely
  2. Force a bridge with raw pulse
  3. Lure threats away first
  4. Study glyph leaves for hints
- **Triggers:** Aurora Harmonization event
- **Consequences:** Opens path; spawns mythborn spirits if failed
- **Recursion Variant:** Tone order changes with seed
- **Hidden Conditions:** Extra route during mythic surge
- **Enemy/Corruption Interactions:** Hostility lowers during harmonization window; any corruption only on hidden failure or surge (gated surge/hidden)

#### Node Metadata
id: node_091
act: 3
resonance: [Echoes]
resonance_alias: []
region_id: mythic_biomes
subregion_id: pantheon_wilds
region_state: Active
tone_tags: [mystic, vibrant]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 92: Bloom Chorus Puzzle
- **Short Description:** Align bloom tones to coax open a hidden grove entrance.
- **Tone Tag:** Mystic, atmospheric
- **Region Tag:** Mythic Biomes — Pantheon Wilds
- **Resonance Tag:** Renewal
- **Narrative Purpose:** Puzzle interaction with living flora
- **Choice Variations:**
  1. Listen and echo the chorus
  2. Use artifact to stabilize a note
  3. Prune hostile blooms
  4. Retreat and return during surge
- **Triggers:** Echo Bloom event
- **Consequences:** Opens grove; enrages shamblers on failure
- **Recursion Variant:** Chorus intervals vary per loop
- **Hidden Conditions:** Secret grove during relic resonance
- **Enemy/Corruption Interactions:** Mutation risk only under surge or hidden misalignment branch (gated surge/hidden)

#### Node Metadata
id: node_092
act: 3
resonance: [Renewal]
resonance_alias: [Echoes]
region_id: mythic_biomes
subregion_id: pantheon_wilds
region_state: Blooming
tone_tags: [mystic, atmospheric]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 93: Trial of Living Statues
- **Short Description:** Complete a timed fusion ring while titan statues animate to test your resolve.
- **Tone Tag:** Awe, atmospheric
- **Region Tag:** Mythic Biomes — Titan Gardens
- **Resonance Tag:** Creation
- **Narrative Purpose:** Introduce fusion trial challenges
- **Choice Variations:**
  1. Follow ritual precisely
  2. Brute force with pulse
  3. Distract a titan guardian
  4. Abandon trial and scout
- **Triggers:** Fusion Trial event
- **Consequences:** Grants mythic boon; guardians awaken if failed
- **Recursion Variant:** Ring order and pressure vary per loop
- **Hidden Conditions:** Bonus if harmonized beforehand
- **Enemy/Corruption Interactions:** Titans remain honorable; any corruption only if dishonor triggers hidden backlash (gated hidden)

#### Node Metadata
id: node_093
act: 3
resonance: [Creation]
resonance_alias: [Unity]
region_id: mythic_biomes
subregion_id: titan_gardens
region_state: Active
tone_tags: [awe, atmospheric]
danger_tier: High
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 94: Duel at the Titan Gate
- **Short Description:** Face an animated statue in an honorable duel to claim a seed relic.
- **Tone Tag:** Awe, mystic
- **Region Tag:** Mythic Biomes — Titan Gardens
- **Resonance Tag:** Karma
- **Narrative Purpose:** Skillful duel cadence and honor system
- **Choice Variations:**
  1. Parry and counter with discipline
  2. Break rules for an advantage
  3. Invoke a ritual blessing
  4. Refuse and seek another path
- **Triggers:** Titan Remembrance event
- **Consequences:** Seed relic or honor penalty
- **Recursion Variant:** Duel style changes per loop
- **Hidden Conditions:** Bonus for prior fusion success
- **Enemy/Corruption Interactions:** Corruption gated to surge only (gated)

#### Node Metadata
id: node_094
act: 3
resonance: [Karma]
resonance_alias: [Fate]
region_id: mythic_biomes
subregion_id: titan_gardens
region_state: Animating
tone_tags: [awe, mystic]
danger_tier: High
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 95: Rite of the Deep Gate
- **Short Description:** Complete a precise ritual to traverse aligned gates into the depths.
- **Tone Tag:** Mystic, atmospheric
- **Region Tag:** Mythic Biomes — Sacred Depths
- **Resonance Tag:** Echoes
- **Narrative Purpose:** Gate alignment and ritual timing
- **Choice Variations:**
  1. Recite the rite from memory
  2. Use notes from the Archive
  3. Improvise under pressure
  4. Wait for Sanctum Quiet
- **Triggers:** Gate Alignment event
- **Consequences:** Access deeper sancta; failure attracts guardians
- **Recursion Variant:** Rite steps differ each loop
- **Hidden Conditions:** Extra route during relic resonance
- **Enemy/Corruption Interactions:** Low corruption; any corruption only on hidden ritual failure or surge (gated surge/hidden)

#### Node Metadata
id: node_095
act: 3
resonance: [Echoes]
resonance_alias: [Paradox]
region_id: mythic_biomes
subregion_id: sacred_depths
region_state: Aligned
tone_tags: [mystic, atmospheric]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 96: Sanctum Whisper
- **Short Description:** Decode whisper-lore to open a sanctum cache before hostility returns.
- **Tone Tag:** Mystic, vibrant
- **Region Tag:** Mythic Biomes — Sacred Depths
- **Resonance Tag:** Renewal
- **Narrative Purpose:** Lore puzzle under time-limited safety
- **Choice Variations:**
  1. Match whispers with resonance
  2. Use a relic to amplify
  3. Distract wardens
  4. Withdraw and return during quiet
- **Triggers:** Sanctum Quiet event
- **Consequences:** Cache opens; wardens awaken if timer expires
- **Recursion Variant:** Whisper patterns rotate each loop
- **Hidden Conditions:** Extra lore during mythic surge
- **Enemy/Corruption Interactions:** Low corruption; any corruption only on hidden decode failure or surge (gated surge/hidden)

#### Node Metadata
id: node_096
act: 3
resonance: [Renewal]
resonance_alias: [Echoes]
region_id: mythic_biomes
subregion_id: sacred_depths
region_state: Quiet
tone_tags: [mystic, vibrant]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 97: Ledger of Dawn
- **Short Description:** Re-sequence a living legend to reveal a hidden memory and path.
- **Tone Tag:** Mystic, awe
- **Region Tag:** Mythic Biomes — Archive of Legends
- **Resonance Tag:** Echoes
- **Narrative Purpose:** Narrative puzzle that alters routes
- **Choice Variations:**
  1. Follow canonical sequence
  2. Experiment with variant order
  3. Cross-reference with artifacts
  4. Abandon to avoid warden attention
- **Triggers:** Legend Rewrite event
- **Consequences:** Opens new path; wardens patrol aggressively on failure
- **Recursion Variant:** Sequence rules differ per loop
- **Hidden Conditions:** Bonus if relic resonance active
- **Enemy/Corruption Interactions:** Corruption minimal; any corruption only on hidden sequence collapse or surge (gated surge/hidden)

#### Node Metadata
id: node_097
act: 3
resonance: [Echoes]
resonance_alias: [Memory]
region_id: mythic_biomes
subregion_id: archive_of_legends
region_state: Active
tone_tags: [mystic, awe]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 98: Vault of Bloom
- **Short Description:** Awaken an artifact by matching resonance signatures to open a vault.
- **Tone Tag:** Mystic, atmospheric
- **Region Tag:** Mythic Biomes — Archive of Legends
- **Resonance Tag:** Pulse
- **Narrative Purpose:** Teach resonance matching for artifacts
- **Choice Variations:**
  1. Calibrate with precise tones
  2. Overcharge with pulse
  3. Use a harmonizer tool
  4. Leave to avoid warden notice
- **Triggers:** Relic Resonance event
- **Consequences:** Vault opens; artifact grants upgrade
- **Recursion Variant:** Signature order shifts each loop
- **Hidden Conditions:** Bonus during aurora harmonization
- **Enemy/Corruption Interactions:** Wardens escalate only under surge (gated)

#### Node Metadata
id: node_098
act: 3
resonance: [Pulse]
resonance_alias: []
region_id: mythic_biomes
subregion_id: archive_of_legends
region_state: Resonating
tone_tags: [mystic, atmospheric]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 99: Mythic Procession Crossroads
- **Short Description:** Navigate shifting routes as a procession of titan silhouettes changes the landscape.
- **Tone Tag:** Awe, vibrant
- **Region Tag:** Mythic Biomes — Pantheon Wilds
- **Resonance Tag:** Echoes
- **Narrative Purpose:** Environmental routing under dynamic event pressure
- **Choice Variations:**
  1. Wait and observe patterns
  2. Sprint through shifting paths
  3. Use stealth to shadow the procession
  4. Detour via aurora bridge
- **Triggers:** Wilds Procession event
- **Consequences:** Opens alternate routes; risk of ambush if misread
- **Recursion Variant:** Pattern seed varies
- **Hidden Conditions:** Bonus if prior harmonization succeeded
- **Enemy/Corruption Interactions:** None by default; any corruption only on hidden misroute or surge (gated surge/hidden)

#### Node Metadata
id: node_099
act: 3
resonance: [Echoes]
resonance_alias: []
region_id: mythic_biomes
subregion_id: pantheon_wilds
region_state: Procession
tone_tags: [awe, vibrant]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 100: Titan Gate Ascension
- **Short Description:** Complete a grand fusion trial culminating in an ascent through the Titan Gate.
- **Tone Tag:** Awe, atmospheric
- **Region Tag:** Mythic Biomes — Titan Gardens
- **Resonance Tag:** Unity
- **Narrative Purpose:** Capstone fusion challenge and mythic boon
- **Choice Variations:**
  1. Perfect ritual execution
  2. Power through with unity burst
  3. Seek aid from an ally
  4. Withdraw and retry next cycle
- **Triggers:** Fusion Trial event
- **Consequences:** Major mythic boon; alternate reward if partial success
- **Recursion Variant:** Trial design rotates per loop
- **Hidden Conditions:** Extra reward if prior duel was honorable
- **Enemy/Corruption Interactions:** Titans honorable; corruption only during surge (gated)

#### Node Metadata
id: node_100
act: 3
resonance: [Unity]
resonance_alias: [Creation]
region_id: mythic_biomes
subregion_id: titan_gardens
region_state: Ascending
tone_tags: [awe, atmospheric]
danger_tier: High
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

---
## Act I: Genesis & Incitement (continued)

### Node 6: Paradox Child’s Warning
- **Short Description:** The Paradox Child delivers a cryptic warning about cosmic recursion and hidden dangers.
- **Tone Tag:** Foreboding, enigmatic
- **Region Tag:** Nexus Gate, Outer Ring
- **Resonance Tag:** Paradox
- **Narrative Purpose:** Foreshadow recursion mechanics, introduce hidden threats
- **Choice Variations:**
  1. Heed the warning
  2. Dismiss as myth
  3. Investigate hidden dangers
  4. Secretly follow Paradox Child
- **Triggers:** Paradox Child encounter
- **Consequences:** Unlocks recursion quests, alters threat level
- **Recursion Variant:** Warning may change based on prior choices
- **Hidden Conditions:** Only triggered if player has certain skills
- **Enemy/Corruption Interactions:** Paradox Child may be pursued by corrupted entities

#### Node Metadata
id: node_006
act: 1
resonance: [Paradox]
resonance_alias: []
region_id: nexus_outer_ring
region_state: Alert
tone_tags: [foreboding, enigmatic]
danger_tier: Medium
alignment_required: []
alignment_delta: { lawful: 0, chaotic: 0, good: 0, evil: 0 }
factions_involved: [paradox_child]
links:
  sequential: [node_007]
  branches: []
  hidden: []
  event_driven: []
recursion: { enabled: true, variant_id: "warning_cycle", loop_to: [], memory_keys: ["paradox.warning"] }


### Node 7: Skill Awakening Ritual
- **Short Description:** The player participates in a ritual to awaken latent skills, guided by Mira and Kavan.
- **Tone Tag:** Ritualistic, hopeful
- **Region Tag:** Skill Chamber
- **Resonance Tag:** Renewal
- **Narrative Purpose:** Unlock new skills, deepen character bonds
- **Choice Variations:**
  1. Embrace the ritual
  2. Resist awakening
  3. Seek forbidden skills
  4. Help another character awaken
- **Triggers:** Ritual event
- **Consequences:** New skills unlocked, relationship changes
- **Recursion Variant:** Ritual can be repeated for different outcomes
- **Hidden Conditions:** Hidden skill paths for specific alignments
- **Enemy/Corruption Interactions:** Sabotage only under surge/secret conditions (gated)

#### Node Metadata
id: node_007
act: 1
resonance: [Renewal]
resonance_alias: [Awakening]
region_id: skill_chamber
region_state: Stable
tone_tags: [ritualistic, hopeful]
danger_tier: Low
links:
  sequential: [node_008]
  branches: []
  hidden: []
  event_driven: []

### Node 8: The Forbidden Glyph
- **Short Description:** Discover a forbidden glyph with immense power, but dangerous consequences.
- **Tone Tag:** Dangerous, mysterious
- **Region Tag:** Glyph Vault
- **Resonance Tag:** Forbidden Knowledge
- **Narrative Purpose:** Introduce risk/reward mechanics, expand lore
- **Choice Variations:**
  1. Attempt to use the glyph
  2. Destroy the glyph
  3. Hide the glyph
  4. Trade glyph knowledge
- **Triggers:** Glyph discovery
- **Consequences:** Power boost, risk of corruption
- **Recursion Variant:** Glyph effects change on each use
- **Hidden Conditions:** Glyph only accessible with certain skills
- **Enemy/Corruption Interactions:** Glyph attracts corrupted entities

#### Node Metadata
id: node_008
act: 1
resonance: [ForbiddenKnowledge]
resonance_alias: [Forbidden Knowledge]
region_id: glyph_vault
region_state: Secret
tone_tags: [dangerous, mysterious]
danger_tier: High
links:
  sequential: [node_009]
  branches: []
  hidden: []
  event_driven: []

### Node 9: The Loop Memory Test
- **Short Description:** The player faces a test of memory and recursion, overseen by Orin and the Karmic Keepers.
- **Tone Tag:** Challenging, introspective
- **Region Tag:** Memory Loop Chamber
- **Resonance Tag:** Recursion
- **Narrative Purpose:** Teach recursion mechanics, test player choices
- **Choice Variations:**
  1. Attempt the test
  2. Refuse the test
  3. Help another through the test
  4. Cheat the test
- **Triggers:** Test initiation
- **Consequences:** Unlocks recursion variant, alters karma
- **Recursion Variant:** Test can be repeated with new outcomes
- **Hidden Conditions:** Secret test paths for high karma
- **Enemy/Corruption Interactions:** Test may be corrupted

#### Node Metadata
id: node_009
act: 1
resonance: [Paradox]
resonance_alias: [Recursion]
region_id: memory_loop_chamber
region_state: Active
tone_tags: [challenging, introspective]
danger_tier: Medium
links:
  sequential: [node_010]
  branches: []
  hidden: []
  event_driven: []

### Node 10: The Great Convergence
- **Short Description:** All factions and characters converge for a cosmic event that will shape the universe’s future.
- **Tone Tag:** Epic, climactic
- **Region Tag:** Convergence Nexus
- **Resonance Tag:** Unity
- **Narrative Purpose:** Major branching, set up Act III
- **Choice Variations:**
  1. Advocate for unity
  2. Push for radical change
  3. Sabotage the event
  4. Secretly manipulate outcomes
- **Triggers:** Convergence event
- **Consequences:** Determines Act III entry points
- **Recursion Variant:** Event can be replayed for alternate futures
- **Hidden Conditions:** Hidden outcomes for certain alliances
- **Enemy/Corruption Interactions:** Corruption attempts to disrupt convergence

#### Node Metadata
id: node_010
act: 1
resonance: [Unity]
resonance_alias: []
region_id: convergence_nexus
region_state: Active
tone_tags: [epic, climactic]
danger_tier: High
links:
  sequential: [node_011]
  branches: []
  hidden: []
  event_driven: []

---

## Act II: Expansion & Divergence

### Node 11: The Architect’s Return
- **Short Description:** The Architect returns, revealing truths and challenging the Pantheon’s beliefs.
- **Tone Tag:** Revelatory, tense
- **Region Tag:** Architect’s Chamber
- **Resonance Tag:** Fate
- **Narrative Purpose:** Major lore reveal, shift power dynamics
- **Choice Variations:**
  1. Accept the Architect’s truth
  2. Challenge the Architect
  3. Seek hidden motives
  4. Ally with the Architect
- **Triggers:** Architect’s arrival
- **Consequences:** Alters Pantheon structure, unlocks new quests
- **Recursion Variant:** Truth may change based on prior actions
- **Hidden Conditions:** Only accessible with certain lore knowledge
- **Enemy/Corruption Interactions:** Architect may be targeted by corruption (only under surge/secret conditions)

#### Node Metadata
id: node_011
act: 2
resonance: [Fate]
resonance_alias: [Truth]
region_id: architect_chamber
region_state: Stable
tone_tags: [revelatory, tense]
danger_tier: Low
links:
  sequential: [node_012]
  branches: []
  hidden: []
  event_driven: []

### Node 12: The Pantheon’s Reckoning
- **Short Description:** The Pantheon faces judgment for past actions; player’s choices influence the outcome.
- **Tone Tag:** Judgmental, dramatic
- **Region Tag:** Pantheon Hall
- **Resonance Tag:** Final Judgment
- **Narrative Purpose:** Resolve faction conflicts, test karma system
- **Choice Variations:**
  1. Defend a faction
  2. Expose corruption
  3. Seek forgiveness
  4. Manipulate judgment
- **Triggers:** Judgment event
- **Consequences:** Faction fates decided, karma updated
- **Recursion Variant:** Judgment can be revisited
- **Hidden Conditions:** Secret evidence for high karma
- **Enemy/Corruption Interactions:** Corruption exposed or hidden (only under surge/secret conditions)

#### Node Metadata
id: node_012
act: 2
resonance: [Fate]
resonance_alias: [FinalJudgment]
region_id: pantheon_hall
region_state: Stable
tone_tags: [judgmental, dramatic]
danger_tier: Low
links:
  sequential: [node_013]
  branches: []
  hidden: []
  event_driven: []

### Node 13: The Infinite Fusion
- **Short Description:** Attempt a dangerous fusion of skills and glyphs, risking cosmic instability.
- **Tone Tag:** Risky, transformative
- **Region Tag:** Fusion Chamber
- **Resonance Tag:** Unity
- **Narrative Purpose:** Unlock advanced skills, test risk/reward
- **Choice Variations:**
  1. Attempt fusion
  2. Refuse fusion
  3. Help another fuse
  4. Sabotage fusion
- **Triggers:** Fusion event
- **Consequences:** New skills, risk of instability
- **Recursion Variant:** Fusion outcomes change each attempt
- **Hidden Conditions:** Fusion only for certain skill sets
- **Enemy/Corruption Interactions:** Fusion may unleash corruption

#### Node Metadata
id: node_013
act: 2
resonance: [Unity]
resonance_alias: [Fusion]
region_id: fusion_chamber
region_state: Stable
tone_tags: [risky, transformative]
danger_tier: High
links:
  sequential: [node_014]
  branches: []
  hidden: []
  event_driven: []

### Node 14: The Loop Collapse
- **Short Description:** A recursion loop collapses, threatening the universe’s stability.
- **Tone Tag:** Urgent, chaotic
- **Region Tag:** Loop Chamber
- **Resonance Tag:** Collapse
- **Narrative Purpose:** Test recursion mechanics, introduce high stakes
- **Choice Variations:**
  1. Repair the loop
  2. Escape the collapse
  3. Sacrifice something to stabilize
  4. Exploit the chaos
- **Triggers:** Loop collapse event
- **Consequences:** Universe stability altered
- **Recursion Variant:** Collapse can be triggered in future acts
- **Hidden Conditions:** Secret repair options
- **Enemy/Corruption Interactions:** Collapse may be caused by corruption

#### Node Metadata
id: node_014
act: 2
resonance: [Collapse]
resonance_alias: [Instability]
region_id: loop_chamber
region_state: Crisis
tone_tags: [urgent, chaotic]
danger_tier: High
links:
  sequential: [node_015]
  branches: []
  hidden: []
  event_driven: []

### Node 15: The Final Ledger
- **Short Description:** The ultimate karmic reckoning; all choices are tallied and judged.
- **Tone Tag:** Final, reflective
- **Region Tag:** Ledger Vault
- **Resonance Tag:** Final Judgment
- **Narrative Purpose:** Conclude karma arc, set up Act IV
- **Choice Variations:**
  1. Accept final judgment
  2. Attempt to rewrite fate
  3. Reject judgment
  4. Secretly alter records
- **Triggers:** Final ledger reveal
- **Consequences:** Determines Act IV entry points
- **Recursion Variant:** Ledger can be revisited for alternate endings
- **Hidden Conditions:** Hidden records for high karma
- **Enemy/Corruption Interactions:** Ledger may be corrupted (only under surge/secret conditions)

#### Node Metadata
id: node_015
act: 2
resonance: [Fate]
resonance_alias: [FinalJudgment]
region_id: ledger_vault
region_state: Stable
tone_tags: [judgmental, reflective]
danger_tier: Low
links:
  sequential: [node_016]
  branches: []
  hidden: []
  event_driven: []

---

## Act II: Expansion & Divergence (continued)

### Node 16: The Paradox Resolution
- **Short Description:** The Paradox Child’s true nature is revealed, forcing a choice that will echo through all realities.
- **Tone Tag:** Surreal, decisive
- **Region Tag:** Paradox Chamber
- **Resonance Tag:** Resolution
- **Narrative Purpose:** Resolve recursion arc, reveal hidden truths
- **Choice Variations:**
  1. Accept the Paradox Child’s fate
  2. Defy cosmic law
  3. Merge realities
  4. Banish the Paradox Child
- **Triggers:** Paradox revelation
- **Consequences:** Alters universe structure, unlocks new endings
- **Recursion Variant:** Fate can be revisited in future loops
- **Hidden Conditions:** Only accessible with recursion mastery
- **Enemy/Corruption Interactions:** Paradox Child may be corrupted or purified

#### Node Metadata
id: node_016
act: 2
resonance: [Paradox]
resonance_alias: [Resolution]
region_id: paradox_chamber
region_state: Active
tone_tags: [surreal, decisive]
danger_tier: Medium
links:
  sequential: [node_017]
  branches: []
  hidden: []
  event_driven: []

### Node 17: The Skill System Reborn
- **Short Description:** The skill system is rebuilt from the ashes, offering new paths and powers.
- **Tone Tag:** Hopeful, transformative
- **Region Tag:** Skill Nexus
- **Resonance Tag:** Renewal
- **Narrative Purpose:** Refresh gameplay, introduce new mechanics
- **Choice Variations:**
  1. Embrace new skills
  2. Restore old skills
  3. Create hybrid skills
  4. Reject change
- **Triggers:** Skill system reset
- **Consequences:** Unlocks new skill trees, alters player progression
- **Recursion Variant:** Skill system can be reset in future acts
- **Hidden Conditions:** Hybrid skills only for certain alignments
- **Enemy/Corruption Interactions:** New skills may be vulnerable to corruption (only under surge/secret conditions)

#### Node Metadata
id: node_017
act: 2
resonance: [Renewal]
resonance_alias: []
region_id: skill_nexus
region_state: Stable
tone_tags: [hopeful, transformative]
danger_tier: Low
links:
  sequential: [node_018]
  branches: []
  hidden: []
  event_driven: []

### Node 18: The Final Resonance
- **Short Description:** The last resonance event shakes the universe, determining its ultimate fate.
- **Tone Tag:** Climactic, uncertain
- **Region Tag:** Resonance Core
- **Resonance Tag:** Pulse
- **Narrative Purpose:** Conclude resonance arc, set up final choices
- **Choice Variations:**
  1. Stabilize the resonance
  2. Amplify the pulse
  3. Absorb the resonance
  4. Redirect the energy
- **Triggers:** Final resonance event
- **Consequences:** Universe fate decided, unlocks final act
- **Recursion Variant:** Resonance outcome can be changed in recursion
- **Hidden Conditions:** Absorption only for high resonance
- **Enemy/Corruption Interactions:** Resonance may be corrupted or purified

#### Node Metadata
id: node_018
act: 2
resonance: [Pulse]
resonance_alias: [FinalPulse]
region_id: resonance_core
region_state: Stable
tone_tags: [climactic, uncertain]
danger_tier: High
links:
  sequential: [node_019]
  branches: []
  hidden: []
  event_driven: []

### Node 19: The Infinite Loop
- **Short Description:** The player faces the possibility of endless recursion, with each loop offering new challenges and rewards.
- **Tone Tag:** Infinite, philosophical
- **Region Tag:** Loop Nexus
- **Resonance Tag:** Eternity
- **Narrative Purpose:** Enable replayability, test recursion mastery
- **Choice Variations:**
  1. Enter the infinite loop
  2. Break the cycle
  3. Seek hidden exits
  4. Embrace eternal recursion
- **Triggers:** Loop entry
- **Consequences:** Unlocks endless gameplay, alternate endings
- **Recursion Variant:** Each loop is unique
- **Hidden Conditions:** Hidden exits only for recursion experts
- **Enemy/Corruption Interactions:** Corruption mutates with each loop

#### Node Metadata
id: node_019
act: 2
resonance: [Eternity]
resonance_alias: [Infinity]
region_id: loop_nexus
region_state: Stable
tone_tags: [infinite, philosophical]
danger_tier: Medium
links:
  sequential: [node_020]
  branches: []
  hidden: []
  event_driven: []

### Node 20: The Pantheon’s Legacy
- **Short Description:** The Pantheon’s final decisions shape the future of the CPS universe.
- **Tone Tag:** Reflective, epic
- **Region Tag:** Pantheon Hall
- **Resonance Tag:** Fate
- **Narrative Purpose:** Conclude main narrative, set up future content
- **Choice Variations:**
  1. Preserve tradition
  2. Embrace change
  3. Merge old and new
  4. Secretly rewrite history
- **Triggers:** Legacy event
- **Consequences:** Universe structure finalized
- **Recursion Variant:** Legacy can be revisited in future expansions
- **Hidden Conditions:** Secret rewrite only for high karma
- **Enemy/Corruption Interactions:** Legacy may be corrupted or purified (only under surge/secret conditions)

#### Node Metadata
id: node_020
act: 2
resonance: [Fate]
resonance_alias: [Legacy]
region_id: pantheon_hall
region_state: Stable
tone_tags: [reflective, epic]
danger_tier: Low
links:
  sequential: [node_021]
  branches: []
  hidden: []
  event_driven: []

---

## Free Exploration Act

### Node 21: The Glyph Hunt
- **Short Description:** Embark on a hunt for lost glyphs, uncovering hidden lore and unlocking new abilities.
- **Tone Tag:** Adventurous, mysterious
- **Region Tag:** Hidden Glyph Regions
- **Resonance Tag:** Forbidden Knowledge
- **Narrative Purpose:** Expand lore, unlock rare skills
- **Choice Variations:**
  1. Search ancient ruins
  2. Decode glyph puzzles
  3. Trade with Echo Order scouts
  4. Explore forbidden zones
- **Triggers:** Glyph discovery
- **Consequences:** Unlocks rare skills, lore entries
- **Recursion Variant:** Glyph locations and puzzles change on each playthrough
- **Hidden Conditions:** Some glyphs only for certain alignments
- **Enemy/Corruption Interactions:** Glyphs attract corrupted entities

#### Node Metadata
id: node_021
act: 3
resonance: [ForbiddenKnowledge]
resonance_alias: [Discovery]
region_id: hidden_glyph_regions
region_state: Stable
tone_tags: [adventurous, mysterious]
danger_tier: Medium
links:
  sequential: [node_022]
  branches: []
  hidden: []
  event_driven: []

### Node 22: The Karmic Pilgrimage
- **Short Description:** Journey across regions to balance karma, facing trials and temptations.
- **Tone Tag:** Spiritual, challenging
- **Region Tag:** Pilgrimage Path
- **Resonance Tag:** Karma
- **Narrative Purpose:** Deepen karma system, offer side quests
- **Choice Variations:**
  1. Help others on the path
  2. Seek personal enlightenment
  3. Challenge karma keepers
  4. Secretly alter karma records
- **Triggers:** Pilgrimage initiation
- **Consequences:** Karma adjusted, unlocks new quests
- **Recursion Variant:** Pilgrimage can be repeated for new outcomes
- **Hidden Conditions:** Secret enlightenment for high karma
- **Enemy/Corruption Interactions:** Temptations may be corrupted (only under surge/secret conditions)

#### Node Metadata
id: node_022
act: 3
resonance: [Karma]
resonance_alias: [Balance]
region_id: pilgrimage_path
region_state: Stable
tone_tags: [spiritual, challenging]
danger_tier: Medium
links:
  sequential: [node_023]
  branches: []
  hidden: []
  event_driven: []

### Node 23: The Echo Order’s Trial
- **Short Description:** Face a series of trials set by the Echo Order to prove worthiness.
- **Tone Tag:** Testing, honorable
- **Region Tag:** Echo Order Arena
- **Resonance Tag:** Worthiness
- **Narrative Purpose:** Unlock advanced skills, test player strategy
- **Choice Variations:**
  1. Accept the trial
  2. Refuse the challenge
  3. Help another succeed
  4. Sabotage the trial
- **Triggers:** Trial event
- **Consequences:** Unlocks advanced skills, alters reputation
- **Recursion Variant:** Trials change on each attempt
- **Hidden Conditions:** Secret trial for high reputation
- **Enemy/Corruption Interactions:** Trials may be sabotaged (only under surge/secret conditions)

#### Node Metadata
id: node_023
act: 3
resonance: [Fate]
resonance_alias: [Worthiness]
region_id: echo_order_arena
region_state: Active
tone_tags: [testing, honorable]
danger_tier: Medium
links:
  sequential: [node_024]
  branches: []
  hidden: []
  event_driven: []

### Node 24: The Hidden Pantheon
- **Short Description:** Discover a secret Pantheon with its own laws and mysteries.
- **Tone Tag:** Secretive, revelatory
- **Region Tag:** Hidden Pantheon Hall
- **Resonance Tag:** Mystery
- **Narrative Purpose:** Expand universe, unlock hidden content
- **Choice Variations:**
  1. Join the hidden Pantheon
  2. Expose their secrets
  3. Ally with their leaders
  4. Sabotage their plans
- **Triggers:** Discovery event
- **Consequences:** Unlocks hidden quests, alters alliances
- **Recursion Variant:** Hidden Pantheon changes each playthrough
- **Hidden Conditions:** Only accessible with certain skills
- **Enemy/Corruption Interactions:** Hidden Pantheon may be corrupted (only under surge/secret conditions)

#### Node Metadata
id: node_024
act: 3
resonance: [ForbiddenKnowledge]
resonance_alias: [Mystery]
region_id: hidden_pantheon_hall
region_state: Secret
tone_tags: [secretive, revelatory]
danger_tier: Low
links:
  sequential: [node_025]
  branches: []
  hidden: []
  event_driven: []

### Node 25: The Corruption Purge
- **Short Description:** Lead a campaign to purge corruption from the universe, facing powerful enemies.
- **Tone Tag:** Heroic, intense
- **Region Tag:** Corruption Zones
- **Resonance Tag:** Purification
- **Narrative Purpose:** Combat-focused, resolve corruption arc
- **Choice Variations:**
  1. Lead the purge
  2. Join as support
  3. Secretly aid corruption
  4. Negotiate with corrupted entities
- **Triggers:** Purge event
- **Consequences:** Universe purity altered, unlocks new endings
- **Recursion Variant:** Purge can be repeated for different results
- **Hidden Conditions:** Secret negotiations for high corruption
- **Enemy/Corruption Interactions:** Direct combat and diplomacy

#### Node Metadata
id: node_025
act: 3
resonance: [Renewal]
resonance_alias: [Purification]
region_id: corruption_zones
region_state: War
tone_tags: [heroic, intense]
danger_tier: High
links:
  sequential: [node_026]
  branches: []
  hidden: []
  event_driven: []

### Node 26: The Lorekeeper’s Challenge
- **Short Description:** The Lorekeeper presents riddles and trials to test the player’s knowledge of CPS history.
- **Tone Tag:** Intellectual, mysterious
- **Region Tag:** Lorekeeper’s Archive
- **Resonance Tag:** Wisdom
- **Narrative Purpose:** Deepen lore, reward exploration
- **Choice Variations:**
  1. Solve riddles
  2. Seek hidden answers
  3. Challenge the Lorekeeper
  4. Ignore the challenge
- **Triggers:** Archive entry
- **Consequences:** Unlocks lore, rare items
- **Recursion Variant:** Riddles change each playthrough
- **Hidden Conditions:** Secret answers for high wisdom
- **Enemy/Corruption Interactions:** Lorekeeper may be corrupted (only under surge/secret conditions)

#### Node Metadata
id: node_026
act: 3
resonance: [Echoes]
resonance_alias: [Wisdom]
region_id: lorekeeper_archive
region_state: Stable
tone_tags: [intellectual, mysterious]
danger_tier: Medium
links:
  sequential: [node_027]
  branches: []
  hidden: []
  event_driven: []

### Node 27: The Glyph Merchant’s Bargain
- **Short Description:** Encounter a mysterious merchant offering powerful glyphs at a price.
- **Tone Tag:** Opportunistic, risky
- **Region Tag:** Merchant’s Bazaar
- **Resonance Tag:** Trade
- **Narrative Purpose:** Introduce trading mechanics, risk/reward choices
- **Choice Variations:**
  1. Buy glyphs
  2. Bargain for better deals
  3. Steal glyphs
  4. Refuse the merchant
- **Triggers:** Merchant encounter
- **Consequences:** Gain or lose glyphs, reputation changes
- **Recursion Variant:** Merchant’s stock changes each visit
- **Hidden Conditions:** Special deals for certain skills
- **Enemy/Corruption Interactions:** Merchant may be a corrupted agent

#### Node Metadata
id: node_027
act: 3
resonance: [Karma]
resonance_alias: [Trade]
region_id: merchants_bazaar
region_state: Active
tone_tags: [opportunistic, risky]
danger_tier: Medium
links:
  sequential: [node_028]
  branches: []
  hidden: []
  event_driven: []

### Node 28: The Echo Hunt
- **Short Description:** Track down rogue echoes causing instability in the universe.
- **Tone Tag:** Adventurous, tense
- **Region Tag:** Echo Wilds
- **Resonance Tag:** Instability
- **Narrative Purpose:** Combat and tracking, test player skills
- **Choice Variations:**
  1. Hunt echoes
  2. Befriend echoes
  3. Ignore the disturbance
  4. Use echoes for personal gain
- **Triggers:** Echo disturbance
- **Consequences:** Universe stability altered, skill unlocks
- **Recursion Variant:** Echo locations change each playthrough
- **Hidden Conditions:** Befriending only for high resonance
- **Enemy/Corruption Interactions:** Rogue echoes may be corrupted

#### Node Metadata
id: node_028
act: 3
resonance: [Paradox]
resonance_alias: [Instability]
region_id: echo_wilds
region_state: Unstable
tone_tags: [adventurous, tense]
danger_tier: Medium
links:
  sequential: [node_029]
  branches: []
  hidden: []
  event_driven: []

### Node 29: The Pantheon’s Secret
- **Short Description:** Uncover a hidden secret that could change the fate of the Pantheon.
- **Tone Tag:** Suspenseful, revelatory
- **Region Tag:** Secret Chamber
- **Resonance Tag:** Revelation
- **Narrative Purpose:** Major lore reveal, unlock new quests
- **Choice Variations:**
  1. Reveal the secret
  2. Keep it hidden
  3. Use it for leverage
  4. Destroy all evidence
- **Triggers:** Secret discovery
- **Consequences:** Alters Pantheon dynamics
- **Recursion Variant:** Secret changes each playthrough
- **Hidden Conditions:** Only accessible with certain alliances
- **Enemy/Corruption Interactions:** Secret may be corrupted

#### Node Metadata
id: node_029
act: 3
resonance: [Fate]
resonance_alias: [Revelation]
region_id: secret_chamber
region_state: Hidden
tone_tags: [suspenseful, revelatory]
danger_tier: Medium
links:
  sequential: [node_030]
  branches: []
  hidden: []
  event_driven: []

### Node 30: The Cosmic Tournament
- **Short Description:** Compete in a universe-wide tournament to prove skill and earn rare rewards.
- **Tone Tag:** Competitive, epic
- **Region Tag:** Tournament Arena
- **Resonance Tag:** Glory
- **Narrative Purpose:** Combat, skill mastery, reward system
- **Choice Variations:**
  1. Enter the tournament
  2. Sabotage competitors
  3. Form alliances
  4. Refuse to compete
- **Triggers:** Tournament announcement
- **Consequences:** Gain rare rewards, reputation changes
- **Recursion Variant:** Tournament rules change each playthrough
- **Hidden Conditions:** Secret matches for high skill
- **Enemy/Corruption Interactions:** Tournament may be infiltrated by corruption

#### Node Metadata
id: node_030
act: 3
resonance: [Unity]
resonance_alias: [Glory]
region_id: tournament_arena
region_state: Active
tone_tags: [competitive, epic]
danger_tier: High
links:
  sequential: [node_031]
  branches: []
  hidden: []
  event_driven: []

### Node 31: The Karmic Duel
- **Short Description:** Challenge a rival to a duel that tests karma and skill.
- **Tone Tag:** Dramatic, personal
- **Region Tag:** Duel Grounds
- **Resonance Tag:** Rivalry
- **Narrative Purpose:** Test karma system, deepen character relationships
- **Choice Variations:**
  1. Duel honorably
  2. Cheat to win
  3. Refuse the duel
  4. Seek reconciliation
- **Triggers:** Rival challenge
- **Consequences:** Karma and reputation altered
- **Recursion Variant:** Duel outcomes change each playthrough
- **Hidden Conditions:** Secret reconciliation for high karma
- **Enemy/Corruption Interactions:** Rival may be corrupted (only under surge/secret conditions)

#### Node Metadata
id: node_031
act: 3
resonance: [Fate]
resonance_alias: [Rivalry]
region_id: duel_grounds
region_state: Active
tone_tags: [dramatic, personal]
danger_tier: Medium
links:
  sequential: [node_032]
  branches: []
  hidden: []
  event_driven: []

### Node 32: The Forbidden Library
- **Short Description:** Explore a library of forbidden knowledge, risking corruption for power.
- **Tone Tag:** Dark, alluring
- **Region Tag:** Forbidden Library
- **Resonance Tag:** Knowledge
- **Narrative Purpose:** Risk/reward, lore expansion
- **Choice Variations:**
  1. Read forbidden tomes
  2. Destroy dangerous books
  3. Steal knowledge
  4. Ignore the library
- **Triggers:** Library entry
- **Consequences:** Gain power, risk corruption
- **Recursion Variant:** Library contents change each visit
- **Hidden Conditions:** Secret tomes for high wisdom
- **Enemy/Corruption Interactions:** Library may be corrupted

#### Node Metadata
id: node_032
act: 3
resonance: [ForbiddenKnowledge]
resonance_alias: [Knowledge]
region_id: forbidden_library
region_state: Hidden
tone_tags: [dark, alluring]
danger_tier: Medium
links:
  sequential: [node_033]
  branches: []
  hidden: []
  event_driven: []

### Node 33: The Echo Order’s Betrayal
- **Short Description:** Uncover a betrayal within the Echo Order, forcing difficult choices.
- **Tone Tag:** Suspenseful, emotional
- **Region Tag:** Echo Order Hall
- **Resonance Tag:** Betrayal
- **Narrative Purpose:** Test loyalty, alter alliances
- **Choice Variations:**
  1. Expose the traitor
  2. Join the betrayal
  3. Forgive the traitor
  4. Ignore the situation
- **Triggers:** Betrayal event
- **Consequences:** Alliances and reputation altered
- **Recursion Variant:** Betrayal changes each playthrough
- **Hidden Conditions:** Forgiveness only for high reputation
- **Enemy/Corruption Interactions:** Traitor may be corrupted (only under surge/secret conditions)

#### Node Metadata
id: node_033
act: 3
resonance: [Fate]
resonance_alias: [Betrayal]
region_id: echo_order_hall
region_state: Tense
tone_tags: [suspenseful, emotional]
danger_tier: Medium
links:
  sequential: [node_034]
  branches: []
  hidden: []
  event_driven: []

### Node 34: The Pantheon’s Restoration
- **Short Description:** Help restore the Pantheon after chaos, rebuilding alliances and systems.
- **Tone Tag:** Hopeful, constructive
- **Region Tag:** Pantheon Hall
- **Resonance Tag:** Restoration
- **Narrative Purpose:** Rebuild universe, set up future content
- **Choice Variations:**
  1. Lead restoration
  2. Support others
  3. Sabotage efforts
  4. Ignore restoration
- **Triggers:** Restoration event
- **Consequences:** Universe structure rebuilt
- **Recursion Variant:** Restoration can be revisited
- **Hidden Conditions:** Secret restoration for high karma
- **Enemy/Corruption Interactions:** Restoration may be opposed by corruption (only under surge/secret conditions)

#### Node Metadata
id: node_034
act: 3
resonance: [Renewal]
resonance_alias: [Restoration]
region_id: pantheon_hall
region_state: Stable
tone_tags: [hopeful, constructive]
danger_tier: Low
links:
  sequential: [node_035]
  branches: []
  hidden: []
  event_driven: []

### Node 35: The Paradox Child’s Legacy
- **Short Description:** Discover the lasting impact of the Paradox Child on the universe.
- **Tone Tag:** Reflective, mysterious
- **Region Tag:** Paradox Chamber
- **Resonance Tag:** Legacy
- **Narrative Purpose:** Conclude Paradox Child arc, unlock new lore
- **Choice Variations:**
  1. Embrace the legacy
  2. Reject the legacy
  3. Seek to change the legacy
  4. Hide the truth
- **Triggers:** Legacy reveal
- **Consequences:** Universe lore altered
- **Recursion Variant:** Legacy changes each playthrough
- **Hidden Conditions:** Change only for recursion mastery
- **Enemy/Corruption Interactions:** Legacy may be corrupted

#### Node Metadata
id: node_035
act: 3
resonance: [Fate]
resonance_alias: [Legacy]
region_id: paradox_chamber
region_state: Reflective
tone_tags: [reflective, mysterious]
danger_tier: Medium
links:
  sequential: [node_036]
  branches: []
  hidden: []
  event_driven: []

### Node 36: The Infinite Archive
- **Short Description:** Explore an endless archive of cosmic records, each revealing new secrets and challenges.
- **Tone Tag:** Infinite, mysterious
- **Region Tag:** Infinite Archive
- **Resonance Tag:** Knowledge
- **Narrative Purpose:** Expand lore, enable endless exploration
- **Choice Variations:**
  1. Research cosmic records
  2. Seek forbidden entries
  3. Create new records
  4. Hide information
- **Triggers:** Archive entry
- **Consequences:** Unlocks new lore, alters universe history
- **Recursion Variant:** Archive contents change each visit
- **Hidden Conditions:** Forbidden entries for high wisdom
- **Enemy/Corruption Interactions:** Archive may be corrupted

#### Node Metadata
id: node_036
act: 3
resonance: [ForbiddenKnowledge]
resonance_alias: [Knowledge]
region_id: infinite_archive
region_state: Endless
tone_tags: [infinite, mysterious]
danger_tier: Medium
links:
  sequential: [node_037]
  branches: []
  hidden: []
  event_driven: []

### Node 37: The Corrupted Pantheon
- **Short Description:** Face a Pantheon overtaken by corruption, forcing difficult choices to restore balance.
- **Tone Tag:** Dark, urgent
- **Region Tag:** Corrupted Pantheon Hall
- **Resonance Tag:** Corruption
- **Narrative Purpose:** Combat corruption, test alliances
- **Choice Variations:**
  1. Purge corruption
  2. Join corrupted Pantheon
  3. Negotiate with corrupted leaders
  4. Escape the chaos
- **Triggers:** Corruption event
- **Consequences:** Universe purity altered, alliances shift
- **Recursion Variant:** Corruption level changes each playthrough
- **Hidden Conditions:** Negotiation only for high reputation
- **Enemy/Corruption Interactions:** Direct combat and diplomacy

#### Node Metadata
id: node_037
act: 3
resonance: [Corruption]
resonance_alias: []
region_id: corrupted_pantheon_hall
region_state: Corrupted
tone_tags: [dark, urgent]
danger_tier: High
links:
  sequential: [node_038]
  branches: []
  hidden: []
  event_driven: []

### Node 38: The Glyph of Destiny
- **Short Description:** Discover a glyph that can alter the fate of the universe.
- **Tone Tag:** Epic, mysterious
- **Region Tag:** Destiny Vault
- **Resonance Tag:** Fate
- **Narrative Purpose:** Major branching, unlock new endings
- **Choice Variations:**
  1. Use the glyph
  2. Destroy the glyph
  3. Hide the glyph
  4. Trade glyph knowledge
- **Triggers:** Glyph discovery
- **Consequences:** Universe fate altered
- **Recursion Variant:** Glyph effects change on each use
- **Hidden Conditions:** Glyph only accessible with certain skills
- **Enemy/Corruption Interactions:** Glyph attracts corrupted entities

#### Node Metadata
id: node_038
act: 3
resonance: [Fate]
resonance_alias: []
region_id: destiny_vault
region_state: Hidden
tone_tags: [epic, mysterious]
danger_tier: High
links:
  sequential: [node_039]
  branches: []
  hidden: []
  event_driven: []

### Node 39: The Karmic Reversal
- **Short Description:** Reverse the flow of karma, changing past actions and consequences.
- **Tone Tag:** Surreal, transformative
- **Region Tag:** Karma Nexus
- **Resonance Tag:** Reversal
- **Narrative Purpose:** Enable alternate endings, test karma system
- **Choice Variations:**
  1. Reverse karma
  2. Accept past actions
  3. Manipulate karma flow
  4. Hide reversal
- **Triggers:** Karma reversal event
- **Consequences:** Past choices rewritten
- **Recursion Variant:** Reversal can be triggered in future acts
- **Hidden Conditions:** Manipulation only for high karma
- **Enemy/Corruption Interactions:** Karma may be corrupted

#### Node Metadata
id: node_039
act: 3
resonance: [Paradox]
resonance_alias: [Reversal]
region_id: karma_nexus
region_state: Flux
tone_tags: [surreal, transformative]
danger_tier: Medium
links:
  sequential: [node_040]
  branches: []
  hidden: []
  event_driven: []

### Node 40: The Cosmic Rebirth
- **Short Description:** Witness the rebirth of the universe, with new laws and possibilities.
- **Tone Tag:** Hopeful, epic
- **Region Tag:** Rebirth Chamber
- **Resonance Tag:** Renewal
- **Narrative Purpose:** Conclude main arc, set up future content
- **Choice Variations:**
  1. Embrace rebirth
  2. Resist change
  3. Shape new laws
  4. Hide old truths
- **Triggers:** Rebirth event
- **Consequences:** Universe structure reset
- **Recursion Variant:** Rebirth can be revisited in expansions
- **Hidden Conditions:** Shaping laws only for recursion mastery
- **Enemy/Corruption Interactions:** Rebirth may be opposed by corruption

#### Node Metadata
id: node_040
act: 3
resonance: [Renewal]
resonance_alias: []
region_id: rebirth_chamber
region_state: Ascendant
tone_tags: [hopeful, epic]
danger_tier: High
links:
  sequential: [node_041]
  branches: []
  hidden: []
  event_driven: []

### Node 41: The Pantheon’s Pilgrimage
- **Short Description:** Join the Pantheon on a journey across the universe to restore balance and uncover hidden truths.
- **Tone Tag:** Adventurous, spiritual
- **Region Tag:** Pilgrimage Path
- **Resonance Tag:** Balance
- **Narrative Purpose:** Deepen lore, offer side quests
- **Choice Variations:**
  1. Help restore balance
  2. Seek personal enlightenment
  3. Challenge Pantheon leaders
  4. Secretly alter pilgrimage records
- **Triggers:** Pilgrimage initiation
- **Consequences:** Karma and reputation adjusted
- **Recursion Variant:** Pilgrimage can be repeated for new outcomes
- **Hidden Conditions:** Secret enlightenment for high karma
- **Enemy/Corruption Interactions:** Temptations may be corrupted (only under surge/secret conditions)

#### Node Metadata
id: node_041
act: 3
resonance: [Karma]
resonance_alias: [Balance]
region_id: pilgrimage_path
region_state: Journey
tone_tags: [spiritual, challenging]
danger_tier: Medium
links:
  sequential: [node_042]
  branches: []
  hidden: []
  event_driven: []

### Node 42: The Echo of Infinity
- **Short Description:** Encounter an echo that reveals infinite possibilities and challenges.
- **Tone Tag:** Infinite, philosophical
- **Region Tag:** Infinity Chamber
- **Resonance Tag:** Possibility
- **Narrative Purpose:** Enable replayability, test recursion mastery
- **Choice Variations:**
  1. Embrace infinity
  2. Seek hidden exits
  3. Break the cycle
  4. Ignore the echo
- **Triggers:** Echo event
- **Consequences:** Unlocks endless gameplay, alternate endings
- **Recursion Variant:** Each echo is unique
- **Hidden Conditions:** Hidden exits only for recursion experts
- **Enemy/Corruption Interactions:** Echo may be corrupted

#### Node Metadata
id: node_042
act: 3
resonance: [Eternity]
resonance_alias: [Possibility]
region_id: infinity_chamber
region_state: Stable
tone_tags: [infinite, philosophical]
danger_tier: Medium
links:
  sequential: [node_043]
  branches: []
  hidden: []
  event_driven: []

### Node 43: The Corruption’s Bargain
- **Short Description:** Negotiate with a powerful corruption entity for forbidden knowledge or power.
- **Tone Tag:** Dark, tempting
- **Region Tag:** Corruption Lair
- **Resonance Tag:** Corruption
- **Narrative Purpose:** Risk/reward corruption negotiation; preserves original theme via alias
- **Choice Variations:**
  1. Accept the bargain
  2. Refuse the offer
  3. Attempt to purify corruption
  4. Betray the entity
- **Triggers:** Bargain event
- **Consequences:** Gain power, risk corruption
- **Recursion Variant:** Bargain terms change each playthrough
- **Hidden Conditions:** Purification only for high karma
- **Enemy/Corruption Interactions:** Direct negotiation and combat; corruption pressure explicit (canonical) (gated surge/hidden optional branches)

#### Node Metadata
id: node_043
act: 3
resonance: [Corruption]
resonance_alias: [Temptation]
region_id: corruption_lair
region_state: Active
tone_tags: [dark, tempting]
danger_tier: High
links:
  sequential: [node_044]
  branches: []
  hidden: []
  event_driven: []

### Node 44: The Lorekeeper’s Secret
- **Short Description:** Uncover a secret held by the Lorekeeper that could change the universe’s history.
- **Tone Tag:** Mysterious, revelatory
- **Region Tag:** Lorekeeper’s Archive
- **Resonance Tag:** Secret
- **Narrative Purpose:** Major lore reveal, unlock new quests
- **Choice Variations:**
  1. Reveal the secret
  2. Keep it hidden
  3. Use it for leverage
  4. Destroy all evidence
- **Triggers:** Secret discovery
- **Consequences:** Alters universe history
- **Recursion Variant:** Secret changes each playthrough
- **Hidden Conditions:** Only accessible with certain alliances
- **Enemy/Corruption Interactions:** Secret may be corrupted (only under surge/secret conditions)

#### Node Metadata
id: node_044
act: 3
resonance: [ForbiddenKnowledge]
resonance_alias: [Secret]
region_id: lorekeeper_archive
region_state: Hidden
tone_tags: [mysterious, revelatory]
danger_tier: Medium
links:
  sequential: [node_045]
  branches: []
  hidden: []
  event_driven: []

### Node 45: The Pantheon’s Eclipse
- **Short Description:** Witness a cosmic eclipse that tests the Pantheon’s unity and resolve.
- **Tone Tag:** Dramatic, epic
- **Region Tag:** Eclipse Nexus
- **Resonance Tag:** Unity
- **Narrative Purpose:** Major event, test alliances
- **Choice Variations:**
  1. Unite the Pantheon
  2. Exploit division
  3. Seek hidden truths
  4. Ignore the eclipse
- **Triggers:** Eclipse event
- **Consequences:** Alliances and universe fate altered
- **Recursion Variant:** Eclipse outcome changes each playthrough
- **Hidden Conditions:** Hidden truths only for high wisdom
- **Enemy/Corruption Interactions:** Eclipse may be corrupted

#### Node Metadata
id: node_045
act: 3
resonance: [Unity]
resonance_alias: []
region_id: eclipse_nexus
region_state: Active
tone_tags: [dramatic, epic]
danger_tier: High
links:
  sequential: [node_046]
  branches: []
  hidden: []
  event_driven: []

---

## Free Exploration Act (Continued)

### Node 46: The Shattered Dream
- **Short Description:** Experience a dreamlike vision of a shattered universe, hinting at the player’s potential impact.
- **Tone Tag:** Surreal, prophetic
- **Region Tag:** Dreamscape
- **Resonance Tag:** Vision
- **Narrative Purpose:** Foreshadow player’s importance, introduce dream mechanics
- **Choice Variations:**
  1. Explore the dream
  2. Seek the dream’s meaning
  3. Ignore the dream
  4. Attempt to change the dream
- **Triggers:** Dream event
- **Consequences:** Unlocks dream-related skills or quests
- **Recursion Variant:** Dream changes based on player’s actions
- **Hidden Conditions:** Secret paths for high intuition
- **Enemy/Corruption Interactions:** Dream may be corrupted

#### Node Metadata
id: node_046
act: 3
resonance: [Vision]
resonance_alias: []
region_id: dreamscape
region_state: Ethereal
tone_tags: [surreal, prophetic]
danger_tier: Medium
links:
  sequential: [node_047]
  branches: []
  hidden: []
  event_driven: []

### Node 47: The Cosmic Forge
- **Short Description:** Discover the Cosmic Forge, where the universe’s laws are written; player can alter a law.
- **Tone Tag:** Powerful, risky
- **Region Tag:** Forge of Creation
- **Resonance Tag:** Creation
- **Narrative Purpose:** Major choice with lasting impact, introduce law-altering mechanics
- **Choice Variations:**
  1. Alter a law
  2. Leave the laws unchanged
  3. Destroy the forge
  4. Hide the forge’s existence
- **Triggers:** Forge discovery
- **Consequences:** Alters a fundamental aspect of the universe
- **Recursion Variant:** Law changes can be reverted or modified in future acts
- **Hidden Conditions:** Only accessible with certain skills
- **Enemy/Corruption Interactions:** Forge may be protected by corrupted entities

#### Node Metadata
id: node_047
act: 3
resonance: [Creation]
resonance_alias: []
region_id: forge_of_creation
region_state: Active
tone_tags: [powerful, risky]
danger_tier: High
links:
  sequential: [node_048]
  branches: []
  hidden: []
  event_driven: []

### Node 48: The Celestial Menagerie
- **Short Description:** Encounter a collection of cosmic creatures, each representing a different aspect of the universe.
- **Tone Tag:** Wonder, curiosity
- **Region Tag:** Menagerie of the Cosmos
- **Resonance Tag:** Diversity
- **Narrative Purpose:** Expand on the universe’s richness, offer unique allies or enemies
- **Choice Variations:**
  1. Study the creatures
  2. Attempt to communicate
  3. Capture a creature
  4. Release the creatures
- **Triggers:** Menagerie discovery
- **Consequences:** Gain a unique ally, enemy, or item
- **Recursion Variant:** Menagerie changes with each visit
- **Hidden Conditions:** Secret creatures for high empathy
- **Enemy/Corruption Interactions:** Some creatures may be corrupted

#### Node Metadata
id: node_048
act: 3
resonance: [Diversity]
resonance_alias: []
region_id: menagerie_cosmos
region_state: Stable
tone_tags: [wonder, curiosity]
danger_tier: Medium
links:
  sequential: [node_049]
  branches: []
  hidden: []
  event_driven: []

### Node 49: The Timekeeper’s Warning
- **Short Description:** The Timekeeper warns of impending temporal disturbances caused by the player’s actions.
- **Tone Tag:** Urgent, mysterious
- **Region Tag:** Temporal Nexus
- **Resonance Tag:** Time
- **Narrative Purpose:** Introduce time travel mechanics, foreshadow consequences of actions
- **Choice Variations:**
  1. Heed the warning
  2. Dismiss the Timekeeper
  3. Investigate temporal disturbances
  4. Attempt to negotiate with the Timekeeper
- **Triggers:** Timekeeper encounter
- **Consequences:** Unlocks time-related quests or skills
- **Recursion Variant:** Temporal disturbances change based on player’s actions
- **Hidden Conditions:** Only visible to those with high perception
- **Enemy/Corruption Interactions:** Timekeeper may be attacked by corrupted entities

#### Node Metadata
id: node_049
act: 3
resonance: [Time]
resonance_alias: []
region_id: temporal_nexus
region_state: Unstable
tone_tags: [urgent, mysterious]
danger_tier: Medium
links:
  sequential: [node_050]
  branches: []
  hidden: []
  event_driven: []

### Node 50: The Cosmic Symphony
- **Short Description:** Experience a symphony that resonates with the very fabric of the universe, offering insights and power.
- **Tone Tag:** Harmonic, enlightening
- **Region Tag:** Hall of Harmony
- **Resonance Tag:** Music
- **Narrative Purpose:** Introduce music-based mechanics, offer unique buffs or debuffs
- **Choice Variations:**
  1. Join the symphony
  2. Analyze the music
  3. Attempt to conduct
  4. Ignore the symphony
- **Triggers:** Symphony event
- **Consequences:** Gain a temporary or permanent buff
- **Recursion Variant:** Symphony changes with each playthrough
- **Hidden Conditions:** Secret conductor’s path for high charisma
- **Enemy/Corruption Interactions:** Corrupted entities may disrupt the symphony (only under surge/secret conditions)

#### Node Metadata
id: node_050
act: 3
resonance: [Music]
resonance_alias: []
region_id: hall_of_harmony
region_state: Active
tone_tags: [harmonic, enlightening]
danger_tier: Medium
links:
  sequential: [node_051]
  branches: []
  hidden: []
  event_driven: []

### Node 51: The Weaving of Fate
- **Short Description:** Witness the threads of fate being woven; player can subtly influence the weaving.
- **Tone Tag:** Intricate, fateful
- **Region Tag:** Loom of Fate
- **Resonance Tag:** Fate
- **Narrative Purpose:** Introduce fate manipulation mechanics, offer unique insights
- **Choice Variations:**
  1. Influence the weaving
  2. Observe quietly
  3. Attempt to destroy the loom
  4. Hide the loom’s existence
- **Triggers:** Loom discovery
- **Consequences:** Alters future possibilities
- **Recursion Variant:** Weaving can be revisited in future acts
- **Hidden Conditions:** Only visible to those with high foresight
- **Enemy/Corruption Interactions:** Loom may be protected by corrupted entities (only under surge/secret conditions)

#### Node Metadata
id: node_051
act: 3
resonance: [Fate]
resonance_alias: []
region_id: loom_of_fate
region_state: Active
tone_tags: [intricate, fateful]
danger_tier: Medium
links:
  sequential: [node_052]
  branches: []
  hidden: []
  event_driven: []

### Node 52: The Karma Cascade
- **Short Description:** A cascade of karmic events forces rapid decisions with lasting impact, some tragic, some redemptive.
- **Tone Tag:** Fast-paced, consequential, bittersweet
- **Region Tag:** Karma Nexus
- **Resonance Tag:** Cascade
- **Narrative Purpose:** Test karma system, introduce rapid branching
- **Choice Variations:**
  1. Save a soul at great cost
  2. Sacrifice your own karma for another
  3. Let fate decide
  4. Secretly alter karma records
- **Triggers:** Cascade event
- **Consequences:** Karma and fate shift dramatically, some outcomes are tragic, others hopeful
- **Recursion Variant:** Cascade sequence changes each playthrough
- **Hidden Conditions:** Secret redemption for high karma
- **Enemy/Corruption Interactions:** Cascade may be manipulated by corrupted entities

#### Node Metadata
id: node_052
act: 3
resonance: [Cascade]
resonance_alias: []
region_id: karma_nexus
region_state: Surge
tone_tags: [fast-paced, consequential, bittersweet]
danger_tier: Medium
links:
  sequential: [node_053]
  branches: []
  hidden: []
  event_driven: []

### Node 53: The Mourning Echo
- **Short Description:** An echo of loss reverberates through the universe, forcing the player to confront grief and memory.
- **Tone Tag:** Sad, reflective, haunting
- **Region Tag:** Echo Chamber of Sorrow
- **Resonance Tag:** Grief
- **Narrative Purpose:** Deepen emotional immersion, unlock memory mechanics
- **Choice Variations:**
  1. Embrace the echo and mourn
  2. Suppress the pain
  3. Seek solace in others
  4. Use grief for strength
- **Triggers:** Loss event
- **Consequences:** Unlocks new memory paths, alters emotional state
- **Recursion Variant:** Echo changes based on past losses
- **Hidden Conditions:** Secret solace for high empathy
- **Enemy/Corruption Interactions:** Grief may be twisted by corruption

#### Node Metadata
id: node_053
act: 3
resonance: [Grief]
resonance_alias: []
region_id: echo_chamber_sorrow
region_state: Active
tone_tags: [sad, reflective, haunting]
danger_tier: Medium
links:
  sequential: [node_054]
  branches: []
  hidden: []
  event_driven: []

### Node 54: The Festival of Shadows
- **Short Description:** A celebration turns dark as shadows consume the revelers, blending joy and terror.
- **Tone Tag:** Joyful, dark, surreal
- **Region Tag:** Festival Grounds
- **Resonance Tag:** Duality
- **Narrative Purpose:** Contrast happiness and horror, test player’s resolve
- **Choice Variations:**
  1. Join the festival
  2. Fight the shadows
  3. Save the innocent
  4. Surrender to darkness
- **Triggers:** Festival event
- **Consequences:** Joy and terror intermingle, fate of revelers decided
- **Recursion Variant:** Festival outcome changes each playthrough
- **Hidden Conditions:** Secret joy for high hope
- **Enemy/Corruption Interactions:** Shadows are agents of corruption

#### Node Metadata
id: node_054
act: 3
resonance: [Duality]
resonance_alias: []
region_id: festival_grounds
region_state: Active
tone_tags: [joyful, dark, surreal]
danger_tier: Medium
links:
  sequential: [node_055]
  branches: []
  hidden: []
  event_driven: []

### Node 55: The Lost Child
- **Short Description:** A child is lost in the void, and the player must choose between hope and despair.
- **Tone Tag:** Sad, hopeful, tense
- **Region Tag:** Void Path
- **Resonance Tag:** Innocence
- **Narrative Purpose:** Test compassion, unlock hope mechanics
- **Choice Variations:**
  1. Search tirelessly
  2. Give up hope
  3. Bargain with void entities
  4. Sacrifice something precious
- **Triggers:** Child disappearance
- **Consequences:** Hope or despair ripple through the universe
- **Recursion Variant:** Child’s fate changes each loop
- **Hidden Conditions:** Secret rescue for high compassion
- **Enemy/Corruption Interactions:** Void entities may corrupt the child

#### Node Metadata
id: node_055
act: 3
resonance: [Innocence]
resonance_alias: []
region_id: void_path
region_state: Alert
tone_tags: [sad, hopeful, tense]
danger_tier: Medium
links:
  sequential: [node_056]
  branches: []
  hidden: []
  event_driven: []

### Node 56: The Feast of Remembrance
- **Short Description:** A somber feast honors the fallen, blending sorrow and celebration.
- **Tone Tag:** Sad, joyful, reflective
- **Region Tag:** Remembrance Hall
- **Resonance Tag:** Memory
- **Narrative Purpose:** Deepen lore, unlock memory and celebration mechanics
- **Choice Variations:**
  1. Honor the fallen
  2. Celebrate survival
  3. Mourn in solitude
  4. Rewrite history
- **Triggers:** Feast event
- **Consequences:** Emotional state and lore altered
- **Recursion Variant:** Feast memories change each playthrough
- **Hidden Conditions:** Secret celebration for high resilience
- **Enemy/Corruption Interactions:** Feast may be haunted by corrupted spirits (only under surge/secret conditions)

#### Node Metadata
id: node_056
act: 3
resonance: [Memory]
resonance_alias: []
region_id: remembrance_hall
region_state: Active
tone_tags: [sad, joyful, reflective]
danger_tier: Medium
links:
  sequential: [node_057]
  branches: []
  hidden: []
  event_driven: []

### Node 57: The Betrayal of Light
- **Short Description:** A trusted ally betrays the player, shattering hope and igniting vengeance.
- **Tone Tag:** Dark, graphic, tragic
- **Region Tag:** Sanctuary of Light
- **Resonance Tag:** Betrayal
- **Narrative Purpose:** Test trust, unlock vengeance mechanics
- **Choice Variations:**
  1. Seek revenge
  2. Forgive the betrayer
  3. Expose the truth
  4. Fall into despair
- **Triggers:** Betrayal event
- **Consequences:** Trust and alliances shattered, new paths open
- **Recursion Variant:** Betrayer changes each playthrough
- **Hidden Conditions:** Secret forgiveness for high empathy
- **Enemy/Corruption Interactions:** Betrayer may be corrupted

#### Node Metadata
id: node_057
act: 3
resonance: [Betrayal]
resonance_alias: []
region_id: sanctuary_of_light
region_state: Fractured
tone_tags: [dark, graphic, tragic]
danger_tier: High
links:
  sequential: [node_058]
  branches: []
  hidden: []
  event_driven: []

### Node 58: The Garden of Sorrow
- **Short Description:** A beautiful garden hides tragic stories and lost souls, blending beauty and pain.
- **Tone Tag:** Sad, beautiful, haunting
- **Region Tag:** Sorrow Garden
- **Resonance Tag:** Beauty
- **Narrative Purpose:** Explore duality, unlock healing mechanics
- **Choice Variations:**
  1. Tend to the garden
  2. Listen to the lost souls
  3. Destroy the beauty
  4. Seek healing
- **Triggers:** Garden entry
- **Consequences:** Healing or pain ripple through the world
- **Recursion Variant:** Garden stories change each loop
- **Hidden Conditions:** Secret healing for high empathy
- **Enemy/Corruption Interactions:** Lost souls may be corrupted (only under surge/secret conditions)

#### Node Metadata
id: node_058
act: 3
resonance: [Beauty]
resonance_alias: []
region_id: sorrow_garden
region_state: Active
tone_tags: [sad, beautiful, haunting]
danger_tier: Medium
links:
  sequential: [node_059]
  branches: []
  hidden: []
  event_driven: []

### Node 59: The Dance of Despair
- **Short Description:** A ritual dance expresses collective grief, with a chance for catharsis or deeper sorrow.
- **Tone Tag:** Sad, graphic, cathartic
- **Region Tag:** Despair Hall
- **Resonance Tag:** Catharsis
- **Narrative Purpose:** Unlock emotional release mechanics
- **Choice Variations:**
  1. Join the dance
  2. Refuse to participate
  3. Lead the ritual
  4. Disrupt the ceremony
- **Triggers:** Dance event
- **Consequences:** Emotional state and group fate altered
- **Recursion Variant:** Dance outcome changes each playthrough
- **Hidden Conditions:** Secret catharsis for high sorrow
- **Enemy/Corruption Interactions:** Despair may be deepened by corruption

#### Node Metadata
id: node_059
act: 3
resonance: [Catharsis]
resonance_alias: []
region_id: despair_hall
region_state: Active
tone_tags: [sad, graphic, cathartic]
danger_tier: Medium
links:
  sequential: [node_060]
  branches: []
  hidden: []
  event_driven: []

### Node 60: The Dawn of Hope
- **Short Description:** After darkness, a new hope rises, offering redemption and joy.
- **Tone Tag:** Joyful, redemptive, uplifting
- **Region Tag:** Hope Sanctuary
- **Resonance Tag:** Renewal
- **Narrative Purpose:** Conclude dark arc, unlock redemption mechanics
- **Choice Variations:**
  1. Embrace hope
  2. Help others find joy
  3. Reject redemption
  4. Hide your happiness
- **Triggers:** Dawn event
- **Consequences:** Redemption and joy ripple through the universe
- **Recursion Variant:** Hope outcome changes each playthrough
- **Hidden Conditions:** Secret joy for high resilience
- **Enemy/Corruption Interactions:** Hope may be threatened by lingering corruption (only under surge/secret conditions)

#### Node Metadata
id: node_060
act: 3
resonance: [Renewal]
resonance_alias: []
region_id: hope_sanctuary
region_state: Restoring
tone_tags: [joyful, redemptive, uplifting]
danger_tier: Medium
links:
  sequential: [node_061]
  branches: []
  hidden: []
  event_driven: []

### Node 61: The Broken Sanctuary
- **Short Description:** A once-sacred place lies in ruins, haunted by memories of violence and lost faith.
- **Tone Tag:** Dark, graphic, tragic
- **Region Tag:** Ruined Sanctuary
- **Resonance Tag:** Loss
- **Narrative Purpose:** Explore aftermath of violence, test resilience
- **Choice Variations:**
  1. Rebuild the sanctuary
  2. Mourn the fallen
  3. Seek vengeance
  4. Abandon hope
- **Triggers:** Sanctuary discovery
- **Consequences:** Faith and resilience altered, new quests unlocked
- **Recursion Variant:** Sanctuary’s fate changes each playthrough
- **Hidden Conditions:** Secret rebuilding for high hope
- **Enemy/Corruption Interactions:** Ruins may be infested by corrupted spirits

#### Node Metadata
id: node_061
act: 3
resonance: [Loss]
resonance_alias: []
region_id: ruined_sanctuary
region_state: Ruined
tone_tags: [dark, graphic, tragic]
danger_tier: Medium
links:
  sequential: [node_062]
  branches: []
  hidden: []
  event_driven: []

### Node 62: The Sorrowful Oracle
- **Short Description:** An oracle weeps for futures lost, offering visions of despair and hope.
- **Tone Tag:** Sad, prophetic, bittersweet
- **Region Tag:** Oracle’s Chamber
- **Resonance Tag:** Fate
- **Narrative Purpose:** Reveal future paths, test player’s resolve
- **Choice Variations:**
  1. Accept a vision of despair
  2. Seek a hopeful prophecy
  3. Reject all visions
  4. Change fate
- **Triggers:** Oracle encounter
- **Consequences:** Future quests and emotional state altered
- **Recursion Variant:** Visions change each loop
- **Hidden Conditions:** Secret prophecy for high wisdom
- **Enemy/Corruption Interactions:** Oracle may be corrupted by despair (only under surge/secret conditions)

#### Node Metadata
id: node_062
act: 3
resonance: [Fate]
resonance_alias: []
region_id: oracle_chamber
region_state: Active
tone_tags: [sad, prophetic, bittersweet]
danger_tier: Medium
links:
  sequential: [node_063]
  branches: []
  hidden: []
  event_driven: []

### Node 63: The Blood Moon Vigil
- **Short Description:** Under a blood-red moon, the player must choose between sacrifice and survival.
- **Tone Tag:** Graphic, tense, tragic
- **Region Tag:** Blood Moon Fields
- **Resonance Tag:** Sacrifice
- **Narrative Purpose:** Test courage, unlock sacrifice mechanics
- **Choice Variations:**
  1. Sacrifice something precious
  2. Fight for survival
  3. Hide from danger
  4. Betray a companion
- **Triggers:** Blood moon event
- **Consequences:** Sacrifice or survival ripple through the world
- **Recursion Variant:** Blood moon effects change each playthrough
- **Hidden Conditions:** Secret survival for high courage
- **Enemy/Corruption Interactions:** Blood moon empowers corrupted entities

#### Node Metadata
id: node_063
act: 3
resonance: [Sacrifice]
resonance_alias: []
region_id: blood_moon_fields
region_state: Active
tone_tags: [graphic, tense, tragic]
danger_tier: High
links:
  sequential: [node_064]
  branches: []
  hidden: []
  event_driven: []

### Node 64: The Joyful Reunion
- **Short Description:** Against all odds, lost friends or family are reunited, bringing hope and healing.
- **Tone Tag:** Joyful, uplifting, emotional
- **Region Tag:** Reunion Grounds
- **Resonance Tag:** Healing
- **Narrative Purpose:** Conclude loss arc, unlock healing mechanics
- **Choice Variations:**
  1. Embrace the reunion
  2. Forgive past wrongs
  3. Hide your joy
  4. Reject reconciliation
- **Triggers:** Reunion event
- **Consequences:** Healing and hope ripple through the universe
- **Recursion Variant:** Reunion participants change each loop
- **Hidden Conditions:** Secret forgiveness for high empathy
- **Enemy/Corruption Interactions:** Reunion may be threatened by corruption (only under surge/secret conditions)

#### Node Metadata
id: node_064
act: 3
resonance: [Healing]
resonance_alias: []
region_id: reunion_grounds
region_state: Active
tone_tags: [joyful, uplifting, emotional]
danger_tier: Low
links:
  sequential: [node_065]
  branches: []
  hidden: []
  event_driven: []

### Node 65: The Descent into Madness
- **Short Description:** The player faces a descent into madness, with choices that blur reality and illusion.
- **Tone Tag:** Dark, surreal, tragic
- **Region Tag:** Madness Labyrinth
- **Resonance Tag:** Insanity
- **Narrative Purpose:** Test sanity, unlock illusion mechanics
- **Choice Variations:**
  1. Embrace madness
  2. Fight for clarity
  3. Lose yourself
  4. Seek help
- **Triggers:** Madness event
- **Consequences:** Sanity and perception altered, new paths open
- **Recursion Variant:** Labyrinth changes each playthrough
- **Hidden Conditions:** Secret clarity for high wisdom
- **Enemy/Corruption Interactions:** Madness may be deepened by corruption

#### Node Metadata
id: node_065
act: 3
resonance: [Insanity]
resonance_alias: []
region_id: madness_labyrinth
region_state: Unstable
tone_tags: [dark, surreal, tragic]
danger_tier: Medium
links:
  sequential: [node_066]
  branches: []
  hidden: []
  event_driven: []

### Node 66: The Light of Forgiveness
- **Short Description:** A chance to forgive those who have wronged you, bringing peace or reopening old wounds.
- **Tone Tag:** Hopeful, sad, redemptive
- **Region Tag:** Forgiveness Sanctuary
- **Resonance Tag:** Redemption
- **Narrative Purpose:** Test forgiveness, unlock redemption mechanics
- **Choice Variations:**
  1. Forgive wholeheartedly
  2. Refuse forgiveness
  3. Seek revenge
  4. Offer conditional peace
- **Triggers:** Forgiveness event
- **Consequences:** Peace or conflict ripple through the world
- **Recursion Variant:** Forgiveness outcomes change each loop
- **Hidden Conditions:** Secret peace for high empathy
- **Enemy/Corruption Interactions:** Old wounds may be exploited by corruption (only under surge/secret conditions)

#### Node Metadata
id: node_066
act: 3
resonance: [Redemption]
resonance_alias: []
region_id: forgiveness_sanctuary
region_state: Active
tone_tags: [hopeful, sad, redemptive]
danger_tier: Low
links:
  sequential: [node_067]
  branches: []
  hidden: []
  event_driven: []

### Node 67: The Ashes of Hope
- **Short Description:** Hope is shattered in a devastating event, but the player can choose to rebuild or surrender.
- **Tone Tag:** Sad, graphic, resilient
- **Region Tag:** Ashen Plains
- **Resonance Tag:** Resilience
- **Narrative Purpose:** Test perseverance, unlock rebuilding mechanics
- **Choice Variations:**
  1. Rebuild from ashes
  2. Surrender to despair
  3. Seek help
  4. Exploit the tragedy
- **Triggers:** Devastation event
- **Consequences:** Resilience or despair ripple through the universe
- **Recursion Variant:** Ashes outcome changes each playthrough
- **Hidden Conditions:** Secret rebuilding for high hope
- **Enemy/Corruption Interactions:** Tragedy may be deepened by corruption

#### Node Metadata
id: node_067
act: 3
resonance: [Resilience]
resonance_alias: []
region_id: ashen_plains
region_state: Devastated
tone_tags: [sad, graphic, resilient]
danger_tier: Medium
links:
  sequential: [node_068]
  branches: []
  hidden: []
  event_driven: []

### Node 68: The Song of the Lost
- **Short Description:** A haunting song echoes through the void, calling to those who have lost everything.
- **Tone Tag:** Sad, beautiful, haunting
- **Region Tag:** Void Choir
- **Resonance Tag:** Longing
- **Narrative Purpose:** Deepen emotional immersion, unlock longing mechanics
- **Choice Variations:**
  1. Sing with the choir
  2. Silence the song
  3. Seek the source
  4. Ignore the call
- **Triggers:** Song event
- **Consequences:** Longing and hope ripple through the world
- **Recursion Variant:** Song changes each loop
- **Hidden Conditions:** Secret harmony for high empathy
- **Enemy/Corruption Interactions:** Song may be corrupted

#### Node Metadata
id: node_068
act: 3
resonance: [Longing]
resonance_alias: []
region_id: void_choir
region_state: Active
tone_tags: [sad, beautiful, haunting]
danger_tier: Low
links:
  sequential: [node_069]
  branches: []
  hidden: []
  event_driven: []

### Node 69: The Feast of Joy and Sorrow
- **Short Description:** A grand feast celebrates both triumph and tragedy, blending laughter and tears.
- **Tone Tag:** Joyful, sad, communal
- **Region Tag:** Grand Hall
- **Resonance Tag:** Duality
- **Narrative Purpose:** Explore emotional complexity, unlock communal mechanics
- **Choice Variations:**
  1. Celebrate joy
  2. Mourn losses
  3. Unite the guests
  4. Cause discord
- **Triggers:** Feast event
- **Consequences:** Community and emotion ripple through the universe
- **Recursion Variant:** Feast outcome changes each playthrough
- **Hidden Conditions:** Secret unity for high hope
- **Enemy/Corruption Interactions:** Discord may be sown by corruption (only under surge/secret conditions)

#### Node Metadata
id: node_069
act: 3
resonance: [Duality]
resonance_alias: []
region_id: grand_hall
region_state: Active
tone_tags: [joyful, sad, communal]
danger_tier: Low
links:
  sequential: [node_070]
  branches: []
  hidden: []
  event_driven: []

### Node 70: The Final Goodbye
- **Short Description:** The player must say farewell to someone or something dear, facing the pain and beauty of parting.
- **Tone Tag:** Sad, beautiful, cathartic
- **Region Tag:** Farewell Path
- **Resonance Tag:** Parting
- **Narrative Purpose:** Conclude emotional arcs, unlock catharsis mechanics
- **Choice Variations:**
  1. Say goodbye with love
  2. Refuse to part
  3. Hide your pain
  4. Seek reunion
- **Triggers:** Goodbye event
- **Consequences:** Catharsis and emotional growth ripple through the world
- **Recursion Variant:** Goodbye changes each loop
- **Hidden Conditions:** Secret reunion for high longing
- **Enemy/Corruption Interactions:** Pain may be exploited by corruption (only under surge/secret conditions)

#### Node Metadata
id: node_070
act: 3
resonance: [Parting]
resonance_alias: []
region_id: farewell_path
region_state: Active
tone_tags: [sad, beautiful, cathartic]
danger_tier: Low
links:
  sequential: [node_071]
  branches: []
  hidden: []
  event_driven: []

### Node 71: The Shattered Mirror
- **Short Description:** A mystical mirror breaks, revealing fractured realities and painful truths.
- **Tone Tag:** Dark, surreal, sad
- **Region Tag:** Mirror Chamber
- **Resonance Tag:** Reflection
- **Narrative Purpose:** Explore alternate realities, unlock truth mechanics
- **Choice Variations:**
  1. Face your fractured self
  2. Hide from the truth
  3. Repair the mirror
  4. Embrace the pain
- **Triggers:** Mirror shattering event
- **Consequences:** Reality and self-perception altered
- **Recursion Variant:** Mirror reveals different truths each loop
- **Hidden Conditions:** Secret healing for high self-awareness
- **Enemy/Corruption Interactions:** Fractures may be exploited by corruption

#### Node Metadata
id: node_071
act: 3
resonance: [Reflection]
resonance_alias: []
region_id: mirror_chamber
region_state: Fractured
tone_tags: [dark, surreal, sad]
danger_tier: Medium
links:
  sequential: [node_072]
  branches: []
  hidden: []
  event_driven: []

### Node 72: The Orphan’s Wish
- **Short Description:** An orphan makes a desperate wish, and the player can choose to grant hope or deepen sorrow.
- **Tone Tag:** Sad, hopeful, bittersweet
- **Region Tag:** Wishing Well
- **Resonance Tag:** Hope
- **Narrative Purpose:** Test compassion, unlock wish mechanics
- **Choice Variations:**
  1. Grant the wish
  2. Deny the wish
  3. Twist the wish
  4. Ignore the orphan
- **Triggers:** Wish event
- **Consequences:** Hope or despair ripple through the world
- **Recursion Variant:** Wish outcome changes each playthrough
- **Hidden Conditions:** Secret wish for high empathy
- **Enemy/Corruption Interactions:** Wish may be corrupted (only under surge/secret conditions)

#### Node Metadata
id: node_072
act: 3
resonance: [Hope]
resonance_alias: []
region_id: wishing_well
region_state: Active
tone_tags: [sad, hopeful, bittersweet]
danger_tier: Low
links:
  sequential: [node_073]
  branches: []
  hidden: []
  event_driven: []

### Node 73: The Crimson Pact
- **Short Description:** A blood pact offers power at a terrible price, testing loyalty and morality.
- **Tone Tag:** Graphic, dark, tense
- **Region Tag:** Pact Altar
- **Resonance Tag:** Power
- **Narrative Purpose:** Risk/reward, test loyalty
- **Choice Variations:**
  1. Accept the pact
  2. Refuse the pact
  3. Betray the pact
  4. Break the pact
- **Triggers:** Pact event
- **Consequences:** Power gained or lost, morality altered
- **Recursion Variant:** Pact terms change each loop
- **Hidden Conditions:** Secret power for high loyalty
- **Enemy/Corruption Interactions:** Pact may be corrupted

#### Node Metadata
id: node_073
act: 3
resonance: [Power]
resonance_alias: []
region_id: pact_altar
region_state: Active
tone_tags: [graphic, dark, tense]
danger_tier: Medium
links:
  sequential: [node_074]
  branches: []
  hidden: []
  event_driven: []

### Node 74: The Silent Vigil
- **Short Description:** A silent vigil honors those lost to violence, blending grief and solidarity.
- **Tone Tag:** Sad, communal, reflective
- **Region Tag:** Vigil Grounds
- **Resonance Tag:** Solidarity
- **Narrative Purpose:** Deepen emotional immersion, unlock solidarity mechanics
- **Choice Variations:**
  1. Join the vigil
  2. Mourn alone
  3. Lead the ceremony
  4. Disrupt the silence
- **Triggers:** Vigil event
- **Consequences:** Community and grief ripple through the world
- **Recursion Variant:** Vigil outcome changes each playthrough
- **Hidden Conditions:** Secret unity for high empathy
- **Enemy/Corruption Interactions:** Grief may be exploited by corruption (only under surge/secret conditions)

#### Node Metadata
id: node_074
act: 3
resonance: [Solidarity]
resonance_alias: []
region_id: vigil_grounds
region_state: Active
tone_tags: [sad, communal, reflective]
danger_tier: Low
links:
  sequential: [node_075]
  branches: []
  hidden: []
  event_driven: []

### Node 75: The Joy of Forgiveness
- **Short Description:** A moment of forgiveness brings unexpected happiness and healing.
- **Tone Tag:** Joyful, redemptive, uplifting
- **Region Tag:** Forgiveness Hall
- **Resonance Tag:** Healing
- **Narrative Purpose:** Conclude conflict arc, unlock healing mechanics
- **Choice Variations:**
  1. Forgive wholeheartedly
  2. Refuse forgiveness
  3. Seek reconciliation
  4. Hide your joy
- **Triggers:** Forgiveness event
- **Consequences:** Healing and joy ripple through the universe
- **Recursion Variant:** Forgiveness outcome changes each loop
- **Hidden Conditions:** Secret joy for high resilience
- **Enemy/Corruption Interactions:** Forgiveness may be threatened by lingering corruption (only under surge/secret conditions)

#### Node Metadata
id: node_075
act: 3
resonance: [Healing]
resonance_alias: []
region_id: forgiveness_hall
region_state: Active
tone_tags: [joyful, redemptive, uplifting]
danger_tier: Low
links:
  sequential: [node_076]
  branches: []
  hidden: []
  event_driven: []

### Node 76: The Desolate Throne
- **Short Description:** A throne stands empty, symbolizing lost power and broken dreams.
- **Tone Tag:** Sad, graphic, tragic
- **Region Tag:** Throne Room
- **Resonance Tag:** Ambition
- **Narrative Purpose:** Explore loss of power, test ambition
- **Choice Variations:**
  1. Claim the throne
  2. Restore the old ruler
  3. Leave it empty
  4. Destroy the throne
- **Triggers:** Throne event
- **Consequences:** Power and ambition ripple through the world
- **Recursion Variant:** Throne’s fate changes each playthrough
- **Hidden Conditions:** Secret restoration for high ambition
- **Enemy/Corruption Interactions:** Throne may be corrupted

#### Node Metadata
id: node_076
act: 3
resonance: [Ambition]
resonance_alias: []
region_id: throne_room
region_state: Abandoned
tone_tags: [sad, graphic, tragic]
danger_tier: Medium
links:
  sequential: [node_077]
  branches: []
  hidden: []
  event_driven: []

### Node 77: The Festival of Tears
- **Short Description:** A festival celebrates sorrow, allowing catharsis and unexpected joy.
- **Tone Tag:** Sad, joyful, communal
- **Region Tag:** Festival Plaza
- **Resonance Tag:** Catharsis
- **Narrative Purpose:** Unlock emotional release, blend sadness and happiness
- **Choice Variations:**
  1. Join the festival
  2. Lead the celebration
  3. Hide your tears
  4. Cause discord
- **Triggers:** Festival event
- **Consequences:** Catharsis and community ripple through the universe
- **Recursion Variant:** Festival outcome changes each loop
- **Hidden Conditions:** Secret joy for high hope
- **Enemy/Corruption Interactions:** Discord may be sown by corruption

#### Node Metadata
id: node_077
act: 3
resonance: [Catharsis]
resonance_alias: []
region_id: festival_plaza
region_state: Active
tone_tags: [sad, joyful, communal]
danger_tier: Low
links:
  sequential: [node_078]
  branches: []
  hidden: []
  event_driven: []

### Node 78: The Last Embrace
- **Short Description:** The player shares a final embrace with someone dear, facing the pain and beauty of farewell.
- **Tone Tag:** Sad, beautiful, cathartic
- **Region Tag:** Embrace Path
- **Resonance Tag:** Parting
- **Narrative Purpose:** Conclude emotional arcs, unlock catharsis mechanics
- **Choice Variations:**
  1. Embrace with love
  2. Refuse to part
  3. Hide your pain
  4. Seek reunion
- **Triggers:** Embrace event
- **Consequences:** Catharsis and emotional growth ripple through the world
- **Recursion Variant:** Embrace changes each loop
- **Hidden Conditions:** Secret reunion for high longing
- **Enemy/Corruption Interactions:** Pain may be exploited by corruption (only under surge/secret conditions)

#### Node Metadata
id: node_078
act: 3
resonance: [Parting]
resonance_alias: []
region_id: embrace_path
region_state: Active
tone_tags: [sad, beautiful, cathartic]
danger_tier: Low
links:
  sequential: [node_079]
  branches: []
  hidden: []
  event_driven: []

### Node 79: The Hope Reborn
- **Short Description:** After tragedy, hope is reborn, offering a chance for renewal and joy.
- **Tone Tag:** Joyful, redemptive, uplifting
- **Region Tag:** Renewal Sanctuary
- **Resonance Tag:** Renewal
- **Narrative Purpose:** Conclude dark arc, unlock redemption mechanics
- **Choice Variations:**
  1. Embrace hope
  2. Help others find joy
  3. Reject renewal
  4. Hide your happiness
- **Triggers:** Renewal event
- **Consequences:** Redemption and joy ripple through the universe
- **Recursion Variant:** Hope outcome changes each playthrough
- **Hidden Conditions:** Secret joy for high resilience
- **Enemy/Corruption Interactions:** Hope may be threatened by lingering corruption (only under surge/secret conditions)

#### Node Metadata
id: node_079
act: 3
resonance: [Renewal]
resonance_alias: []
region_id: renewal_sanctuary
region_state: Restoring
tone_tags: [joyful, redemptive, uplifting]
danger_tier: Medium
links:
  sequential: [node_080]
  branches: []
  hidden: []
  event_driven: []

### Node 80: The Endless Cycle
- **Short Description:** The player faces the truth of endless cycles—joy, sorrow, loss, and renewal—choosing how to break or embrace them.
- **Tone Tag:** Philosophical, sad, hopeful
- **Region Tag:** Cycle Nexus
- **Resonance Tag:** Eternity
- **Narrative Purpose:** Conclude the saga, unlock ultimate recursion mechanics
- **Choice Variations:**
  1. Break the cycle
  2. Embrace eternity
  3. Seek a new beginning
  4. Surrender to fate
- **Triggers:** Cycle event
- **Consequences:** Universe fate and player legacy decided
- **Recursion Variant:** Cycle outcome changes each loop
- **Hidden Conditions:** Secret new beginning for recursion mastery
- **Enemy/Corruption Interactions:** Cycle may be corrupted or purified

#### Node Metadata
id: node_080
act: 3
resonance: [Eternity]
resonance_alias: []
region_id: cycle_nexus
region_state: Active
tone_tags: [philosophical, sad, hopeful]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

---

### Node 81: Shifting Nave Trial
- **Short Description:** Navigate a living cathedral as its halls shift with echo cycles to reach a sealed reliquary.
- **Tone Tag:** Solemn, oppressive
- **Region Tag:** Corrupted Zones — Fractured Cathedral
- **Resonance Tag:** Echoes
- **Narrative Purpose:** Teach recursive navigation and echo timing under pressure
- **Choice Variations:**
  1. Wait and study the cycles
  2. Force the path with raw power
  3. Use stealth to bypass guardians
  4. Invoke a minor ritual at the altar
- **Triggers:** Altar cycle; spectral procession
- **Consequences:** Unlocks reliquary, alters patrols, raises cathedral favor
- **Recursion Variant:** Cycle seed changes bridge timings between loops
- **Hidden Conditions:** Extra path if resonance high
- **Enemy/Corruption Interactions:** Corruption present and oppressive by default

#### Node Metadata
id: node_081
act: 3
resonance: [Echoes]
resonance_alias: [Corruption]
region_id: corrupted_zones
subregion_id: fractured_cathedral
region_state: Unstable
tone_tags: [solemn, oppressive]
danger_tier: High
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 82: Mantra of Broken Choirs
- **Short Description:** Solve a three-part broken mantra to awaken a recursion gate beneath the choir stalls.
- **Tone Tag:** Mystic, solemn
- **Region Tag:** Corrupted Zones — Fractured Cathedral
- **Resonance Tag:** Echoes
- **Narrative Purpose:** Unlock recursion travel and lore fragment
- **Choice Variations:**
  1. Attempt the mantra from memory
  2. Study carvings for clues
  3. Trade with a spectral warden
  4. Force the gate with forbidden code
- **Triggers:** Altar awakened state
- **Consequences:** Opens recursion gate; spawns Inverted Wraiths on failure
- **Recursion Variant:** Mantra syllable order mutates with seed
- **Hidden Conditions:** Extra verse appears during data storm
- **Enemy/Corruption Interactions:** Wraiths respond to errors

#### Node Metadata
id: node_082
act: 3
resonance: [Echoes]
resonance_alias: [ForbiddenKnowledge]
region_id: corrupted_zones
subregion_id: fractured_cathedral
region_state: Active
tone_tags: [mystic, solemn]
danger_tier: High
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 83: Barge of Null Prayers
- **Short Description:** Board a relic barge during a code flood and secure an artifact before it submerges.
- **Tone Tag:** Oppressive, atmospheric
- **Region Tag:** Corrupted Zones — Black Code River
- **Resonance Tag:** Paradox
- **Narrative Purpose:** Introduce hazard timing and moving platforms under corruption pressure
- **Choice Variations:**
  1. Time the jumps with current vectors
  2. Stabilize platforms with data locks
  3. Fight mutated leeches head-on
  4. Abandon the barge for river cache
- **Triggers:** Code Flood event
- **Consequences:** Unique artifact or mutated threat escalation
- **Recursion Variant:** Platform cycle seed differs per loop
- **Hidden Conditions:** Secret cache spawns at high resonance
- **Enemy/Corruption Interactions:** Mutation spikes during surge

#### Node Metadata
id: node_083
act: 3
resonance: [Paradox]
resonance_alias: [ForbiddenKnowledge]
region_id: corrupted_zones
subregion_id: black_code_river
region_state: Surging
tone_tags: [oppressive, atmospheric]
danger_tier: High
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 84: Isle of Broken Compilers
- **Short Description:** Stabilize a code-locked isle to reveal a safe route across the river.
- **Tone Tag:** Mystic, atmospheric
- **Region Tag:** Corrupted Zones — Black Code River
- **Resonance Tag:** Forbidden Knowledge
- **Narrative Purpose:** Reward careful observation and data skills
- **Choice Variations:**
  1. Decode the compiler chants
  2. Use brute-force stabilizers
  3. Lure predators away
  4. Dive for alternate route
- **Triggers:** Mutation Spike event
- **Consequences:** Safe isle opens; nearby fauna mutates on failure
- **Recursion Variant:** Compiler phrases shift each loop
- **Hidden Conditions:** Extra reward during echo bloom (dark)
- **Enemy/Corruption Interactions:** Hazards intensify near data flows

#### Node Metadata
id: node_084
act: 3
resonance: [ForbiddenKnowledge]
resonance_alias: [Echoes]
region_id: corrupted_zones
subregion_id: black_code_river
region_state: Active
tone_tags: [mystic, atmospheric]
danger_tier: High
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 85: Rite of the Upside Hymn
- **Short Description:** Perform a gravity-inverted rite to sanctify a cloister and gain a temporary boon.
- **Tone Tag:** Mystic, solemn
- **Region Tag:** Corrupted Zones — Inverted Sanctuary
- **Resonance Tag:** Paradox
- **Narrative Purpose:** Teach ritual timing under inversion
- **Choice Variations:**
  1. Memorize the inverted steps
  2. Anchor yourself with echo
  3. Improvise the rite
  4. Abandon and scout vertical routes
- **Triggers:** Gravity Inversion event
- **Consequences:** Boon on success; elite wraith spawns on failure
- **Recursion Variant:** Step order changes with seed
- **Hidden Conditions:** Hidden mural reveals verse when resonance high
- **Enemy/Corruption Interactions:** Wraith aggro radius increases

#### Node Metadata
id: node_085
act: 3
resonance: [Paradox]
resonance_alias: [Echoes]
region_id: corrupted_zones
subregion_id: inverted_sanctuary
region_state: Inverted
tone_tags: [mystic, solemn]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 86: Cloister of Reversed Steps
- **Short Description:** Traverse rotating cloisters to access a vault while managing echo drain.
- **Tone Tag:** Oppressive, atmospheric
- **Region Tag:** Corrupted Zones — Inverted Sanctuary
- **Resonance Tag:** Echoes
- **Narrative Purpose:** Platforming and route planning under inversion
- **Choice Variations:**
  1. Map rotations and wait
  2. Sprint and accept drain
  3. Use tools to pin platforms
  4. Seek an alternate ceiling route
- **Triggers:** Gravity Inversion event
- **Consequences:** Vault access; echo drain penalties
- **Recursion Variant:** Rotation seed differs per loop
- **Hidden Conditions:** Shortcut opens during forbidden rite
- **Enemy/Corruption Interactions:** Guardians reposition mid-rotation

#### Node Metadata
id: node_086
act: 3
resonance: [Echoes]
resonance_alias: [Paradox]
region_id: corrupted_zones
subregion_id: inverted_sanctuary
region_state: Inverted
tone_tags: [oppressive, atmospheric]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 87: Loopbreaker Run
- **Short Description:** Outpace a loop collapse to reach a stable node and prevent a hard reset.
- **Tone Tag:** Oppressive, atmospheric
- **Region Tag:** Corrupted Zones — Entropic Hollows
- **Resonance Tag:** Recursion
- **Narrative Purpose:** Teach timed escape and route reading under pressure
- **Choice Variations:**
  1. Memorize the pulse pattern
  2. Use shields and push forward
  3. Split the party to trigger switches
  4. Delay collapse with a filament cut
- **Triggers:** Loop Collapse event
- **Consequences:** Reaches stable node or reshuffles maze
- **Recursion Variant:** Collapse path seed changes each loop
- **Hidden Conditions:** Extra route during data storm
- **Enemy/Corruption Interactions:** Serpents emerge near collapse fronts

#### Node Metadata
id: node_087
act: 3
resonance: [Recursion]
resonance_alias: [Entropy]
region_id: corrupted_zones
subregion_id: entropic_hollows
region_state: Collapsing
tone_tags: [oppressive, atmospheric]
danger_tier: High
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 88: Core Filament Severance
- **Short Description:** Cut three core filaments while surviving escalating pulses to unlock the core chamber.
- **Tone Tag:** Solemn, oppressive
- **Region Tag:** Corrupted Zones — Entropic Hollows
- **Resonance Tag:** Recursion
- **Narrative Purpose:** Precision under escalating hazard; unlocks boss access
- **Choice Variations:**
  1. Time cuts with pulse lulls
  2. Tank through with heavy shielding
  3. Distract serpents with decoys
  4. Sacrifice route for speed
- **Triggers:** Core Awakening event
- **Consequences:** Core chamber opens; corruption radius expands
- **Recursion Variant:** Filament order varies by seed
- **Hidden Conditions:** Extra loot with perfect timing
- **Enemy/Corruption Interactions:** Pulses corrupt nearby routes

#### Node Metadata
id: node_088
act: 3
resonance: [Recursion]
resonance_alias: [Entropy]
region_id: corrupted_zones
subregion_id: entropic_hollows
region_state: Active
tone_tags: [solemn, oppressive]
danger_tier: High
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 89: Duel of the Fallen Oath
- **Short Description:** Accept a revenant’s honor duel to claim an oathbound sigil.
- **Tone Tag:** Solemn, mystic
- **Region Tag:** Corrupted Zones — Architect’s Graveyard
- **Resonance Tag:** Echoes
- **Narrative Purpose:** Teach duel cadence and honor constraints
- **Choice Variations:**
  1. Parry and counter
  2. Break honor for quick win
  3. Use ritual blessing
  4. Refuse the duel
- **Triggers:** Revenant Rise event
- **Consequences:** Oathbound sigil or dishonor penalties
- **Recursion Variant:** Duel style differs by seed
- **Hidden Conditions:** Secret technique if prior vigil complete
- **Enemy/Corruption Interactions:** Shadow guardians intervene if dishonored

#### Node Metadata
id: node_089
act: 3
resonance: [Echoes]
resonance_alias: [Fate]
region_id: corrupted_zones
subregion_id: architects_graveyard
region_state: Vigil
tone_tags: [solemn, mystic]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 90: Rune of the Last Architect
- **Short Description:** Solve a rune chain during a tomb quake to open a sealed memory vault.
- **Tone Tag:** Solemn, atmospheric
- **Region Tag:** Corrupted Zones — Architect’s Graveyard
- **Resonance Tag:** Echoes
- **Narrative Purpose:** Puzzle under environmental pressure; deep lore unlock
- **Choice Variations:**
  1. Trace runes in quake lulls
  2. Anchor runes with stabilizers
  3. Seek help from a wisp
  4. Abandon puzzle for safety
- **Triggers:** Tomb Quake event
- **Consequences:** Memory vault opened; hazards trigger in waves
- **Recursion Variant:** Rune sequence varies by seed
- **Hidden Conditions:** Extra lore if vigil held
- **Enemy/Corruption Interactions:** Revenants test resolve during quake

#### Node Metadata
id: node_090
act: 3
resonance: [Echoes]
resonance_alias: [Memory]
region_id: corrupted_zones
subregion_id: architects_graveyard
region_state: Quaking
tone_tags: [solemn, atmospheric]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 191: Spiral Entry Decision
- **Short Description:** Choose how deep to step into the current cycle’s spiral to balance insight vs. burden.
- **Tone Tag:** Philosophical, sad
- **Region Tag:** Cycle Nexus — Eternal Spiral
- **Resonance Tag:** Eternity
- **Narrative Purpose:** Introduces loop length tradeoffs and burden accrual mechanics.
- **Choice Variations:**
  1. Take a short loop for safety (safe)
  2. Commit to a deep spiral for insight (risky)
  3. Use a spiral map to find overlap
  4. Wait for cycle_tension to reveal hidden paths
- **Triggers:** cycle_tension
- **Consequences:** Short loop yields stability; deep spiral unlocks lore but adds burden
- **Recursion Variant:** Loop length modifies memory clarity
- **Hidden Conditions:** Extra closure if a past regret is acknowledged
- **Enemy/Corruption Interactions:** Loop pressure manifests as corruption burden that increases with depth

#### Node Metadata
id: node_191
act: 3
resonance: [Eternity]
resonance_alias: []
region_id: cycle_nexus
subregion_id: eternal_spiral
region_state: Turning
tone_tags: [philosophical, sad]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 192: Loop Rehearsal
- **Short Description:** Rehearse a prior choice outcome to alter its echo strength.
- **Tone Tag:** Philosophical, hopeful
- **Region Tag:** Cycle Nexus — Chamber of Recursion
- **Resonance Tag:** Paradox
- **Narrative Purpose:** Teaches echo strength modulation and outcome reroll windows.
- **Choice Variations:**
  1. Soften the echo to reduce backlash (safe)
  2. Amplify the echo for stronger rewards (risky)
  3. Use an echo recorder to lock the attempt
  4. Act during echo_strength for alternative outcomes
- **Triggers:** echo_strength
- **Consequences:** Adjusted echoes modify later nodes; amplification risks instability
- **Recursion Variant:** Echo thresholds shift with the seed
- **Hidden Conditions:** Bonus outcome if past and present align
- **Enemy/Corruption Interactions:** Amplified echoes attract recursion wraiths; corruption rises on failure

#### Node Metadata
id: node_192
act: 3
resonance: [Paradox]
resonance_alias: []
region_id: cycle_nexus
subregion_id: chamber_of_recursion
region_state: Echoing
tone_tags: [philosophical, hopeful]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 193: Release Rite
- **Short Description:** Perform a rite to release accumulated burdens while retaining lessons.
- **Tone Tag:** Hopeful, philosophical
- **Region Tag:** Cycle Nexus — Renewal Cradle
- **Resonance Tag:** Renewal
- **Narrative Purpose:** Introduces burden release and partial reset mechanics.
- **Choice Variations:**
  1. Release a small burden now (safe)
  2. Attempt a full release (risky)
  3. Use a renewal conduit to stabilize
  4. Act during cradle_opening for maximum relief
- **Triggers:** cradle_opening
- **Consequences:** Reduced penalties; full release risks losing recent gains
- **Recursion Variant:** Retained lessons vary per loop
- **Hidden Conditions:** Extra boon if release follows reconciliation
- **Enemy/Corruption Interactions:** Release dissipates corruption taint; failure vents it into the area

#### Node Metadata
id: node_193
act: 3
resonance: [Renewal]
resonance_alias: []
region_id: cycle_nexus
subregion_id: renewal_cradle
region_state: Opening
tone_tags: [hopeful, philosophical]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 194: Contradiction Bind
- **Short Description:** Bind two incompatible outcomes via a risky paradox ritual.
- **Tone Tag:** Philosophical, sad
- **Region Tag:** Cycle Nexus — Paradox Convergence
- **Resonance Tag:** Paradox
- **Narrative Purpose:** Teaches contradiction binding and fork consolidation.
- **Choice Variations:**
  1. Bind gently with low yield (safe)
  2. Force a strong bind (risky)
  3. Use a contradiction seal
  4. Attempt during contradiction_peak for rare consolidation
- **Triggers:** contradiction_peak
- **Consequences:** Merged outcomes; overbinding shatters both
- **Recursion Variant:** Bind stability windows shift
- **Hidden Conditions:** Extra stability if prior echo was softened
- **Enemy/Corruption Interactions:** Binding backlash releases corruption wisps on failure

#### Node Metadata
id: node_194
act: 3
resonance: [Paradox]
resonance_alias: []
region_id: cycle_nexus
subregion_id: paradox_convergence
region_state: Binding
tone_tags: [philosophical, sad]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 195: Echo Ledger Reconcile
- **Short Description:** Reconcile a ledger of past echoes to reduce recurring penalties.
- **Tone Tag:** Philosophical, sad
- **Region Tag:** Cycle Nexus — Eternal Spiral
- **Resonance Tag:** Eternity
- **Narrative Purpose:** Introduces reconciliation checkpoints and burden accounting.
- **Choice Variations:**
  1. Acknowledge minor debts (safe)
  2. Confront a major regret (risky)
  3. Use a reconciliation altar
  4. Wait for path_overlap to surface matched memories
- **Triggers:** path_overlap
- **Consequences:** Reduced recurring penalties; major regret yields large relief or backlash
- **Recursion Variant:** Ledger entries rotate
- **Hidden Conditions:** Extra insight if deep spiral was completed
- **Enemy/Corruption Interactions:** Unreconciled entries bleed corruption into future loops

#### Node Metadata
id: node_195
act: 3
resonance: [Eternity]
resonance_alias: []
region_id: cycle_nexus
subregion_id: eternal_spiral
region_state: Reconcile
tone_tags: [philosophical, sad]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 196: Scar Mend Protocol
- **Short Description:** Mend a time scar that persists across loops without losing progress.
- **Tone Tag:** Philosophical, hopeful
- **Region Tag:** Cycle Nexus — Chamber of Recursion
- **Resonance Tag:** Renewal
- **Narrative Purpose:** Teaches mitigation of persistent penalties.
- **Choice Variations:**
  1. Apply a careful mend (safe)
  2. Excise the scar entirely (risky)
  3. Use a time balm to reduce cost
  4. Act during time_scars to minimize collateral
- **Triggers:** time_scars
- **Consequences:** Reduced or removed penalty; excision risks echo loss
- **Recursion Variant:** Scar depth varies
- **Hidden Conditions:** Extra mend quality if echo was recorded
- **Enemy/Corruption Interactions:** Exposed scars leak corruption until sealed

#### Node Metadata
id: node_196
act: 3
resonance: [Renewal]
resonance_alias: []
region_id: cycle_nexus
subregion_id: chamber_of_recursion
region_state: Mend
tone_tags: [philosophical, hopeful]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 197: Gentle Reset Window
- **Short Description:** Take a partial reset that preserves lessons while clearing penalties.
- **Tone Tag:** Hopeful, philosophical
- **Region Tag:** Cycle Nexus — Renewal Cradle
- **Resonance Tag:** Renewal
- **Narrative Purpose:** Demonstrates partial reset tradeoffs.
- **Choice Variations:**
  1. Keep most lessons, clear small penalties (safe)
  2. Keep only key lessons, clear all penalties (risky)
  3. Use a renewal veil to protect a memory
  4. Act during gentle_reset for best retention
- **Triggers:** gentle_reset
- **Consequences:** Penalties cleared; retention depends on choice
- **Recursion Variant:** Retention thresholds rotate
- **Hidden Conditions:** Extra retention if a contradiction was bound
- **Enemy/Corruption Interactions:** Reset purges ambient corruption; overuse creates vulnerability

#### Node Metadata
id: node_197
act: 3
resonance: [Renewal]
resonance_alias: []
region_id: cycle_nexus
subregion_id: renewal_cradle
region_state: Reset
tone_tags: [hopeful, philosophical]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 198: Fork Anchor Choice
- **Short Description:** Choose a single anchor branch to stabilize collapsing forks.
- **Tone Tag:** Philosophical, sad
- **Region Tag:** Cycle Nexus — Paradox Convergence
- **Resonance Tag:** Paradox
- **Narrative Purpose:** Teaches anchor selection during fork collapse.
- **Choice Variations:**
  1. Anchor the safer branch (safe)
  2. Anchor the rewarding branch (risky)
  3. Use a fork map to preview outcomes
  4. Act during fork_collapse for stability
- **Triggers:** fork_collapse
- **Consequences:** Stabilized path; risky anchor increases future difficulty
- **Recursion Variant:** Anchor benefit shifts with seed
- **Hidden Conditions:** Extra stability if ledger reconciled
- **Enemy/Corruption Interactions:** Unanchored branches shed corruption into the anchor path

#### Node Metadata
id: node_198
act: 3
resonance: [Paradox]
resonance_alias: []
region_id: cycle_nexus
subregion_id: paradox_convergence
region_state: Anchor
tone_tags: [philosophical, sad]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 199: Cycle Break Attempt
- **Short Description:** Attempt to break a repeating cycle by sacrificing accumulated advantage.
- **Tone Tag:** Philosophical, hopeful
- **Region Tag:** Cycle Nexus — Paradox Convergence
- **Resonance Tag:** Eternity
- **Narrative Purpose:** High-stakes option to end a loop sequence.
- **Choice Variations:**
  1. Offer a modest sacrifice (safe)
  2. Offer a great sacrifice for finality (risky)
  3. Use a convergence font to amplify impact
  4. Wait for renewal_window to soften the cost
- **Triggers:** renewal_window
- **Consequences:** Loop ends or recoils; great sacrifice risks progress loss
- **Recursion Variant:** Sacrifice efficacy varies
- **Hidden Conditions:** Extra boon if contradiction was previously bound
- **Enemy/Corruption Interactions:** Failed break attempts trigger corruption surges along the loop

#### Node Metadata
id: node_199
act: 3
resonance: [Eternity]
resonance_alias: []
region_id: cycle_nexus
subregion_id: paradox_convergence
region_state: Break
tone_tags: [philosophical, hopeful]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 200: Closing the Loop
- **Short Description:** Conclude the cycle with acceptance, sealing lessons into the next arc.
- **Tone Tag:** Philosophical, hopeful
- **Region Tag:** Cycle Nexus — Eternal Spiral
- **Resonance Tag:** Renewal
- **Narrative Purpose:** Provides closure and seeds for downstream regions.
- **Choice Variations:**
  1. Seal lessons gently (safe)
  2. Compress many lessons at once (risky)
  3. Use a spiral seal to organize memories
  4. Act during cycle_tension for a rare insight
- **Triggers:** cycle_tension
- **Consequences:** Lessons sealed; compression risks distortion
- **Recursion Variant:** Seal patterns rotate
- **Hidden Conditions:** Extra clarity if release rite completed
- **Enemy/Corruption Interactions:** Residual corruption reduced on seal; compression leaks if unstable

#### Node Metadata
id: node_200
act: 3
resonance: [Renewal]
resonance_alias: []
region_id: cycle_nexus
subregion_id: eternal_spiral
region_state: Closure
tone_tags: [philosophical, hopeful]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

---

### Node 201: Celestial Catalog Opening
- **Short Description:** The grand catalog unfurls, inviting selective observation of rare cosmic fauna.
- **Tone Tag:** Wonder, Curiosity
- **Region Tag:** Menagerie of the Cosmos — Star Bestiary
- **Resonance Tag:** Unity
- **Narrative Purpose:** Establishes ethics-first observation and initializes menagerie systems.
- **Choice Variations:**
  1. Observe gently with full protocol (safe)
  2. Rushed scan to sample broadly (risky)
  3. Ask curator-hologram for primer tips
  4. Wait for mimicry_bloom to maximize learning
- **Triggers:** catalog_unfurl
- **Consequences:** Gentle observation boosts research multiplier; rushed scan agitates clusters
- **Recursion Variant:** Sigil order changes; different fauna show first
- **Hidden Conditions:** Bonus if empathy_bond already established in another biome
- **Enemy/Corruption Interactions:** None; this space discourages predation

#### Node Metadata
id: node_201
act: 3
resonance: [Unity]
resonance_alias: [Echoes]
region_id: menagerie_of_the_cosmos
subregion_id: star_bestiary
region_state: Entry
tone_tags: [wonder, curiosity]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 202: Migratory Constellation Drift
- **Short Description:** A formation of living stars begins an unscheduled lateral drift across sectors.
- **Tone Tag:** Wonder, Mysterious
- **Region Tag:** Menagerie of the Cosmos — Living Constellations
- **Resonance Tag:** Echoes
- **Narrative Purpose:** Offers choice to stabilize patterns or let emergent behavior surface.
- **Choice Variations:**
  1. Stabilize two path nodes (safe)
  2. Let patterns express fully (risky, high reward)
  3. Tag a single glyph for later follow-up
  4. Sing a resonance to influence direction slightly
- **Triggers:** migration_surge
- **Consequences:** Stabilize eases future navigation; expression unlocks adaptive behavior log
- **Recursion Variant:** Drift vector and hitchhiker fauna vary
- **Hidden Conditions:** Extra insight if constellation_lore cache was opened
- **Enemy/Corruption Interactions:** None; dissonance only if over-forced

#### Node Metadata
id: node_202
act: 3
resonance: [Echoes]
resonance_alias: [Unity]
region_id: menagerie_of_the_cosmos
subregion_id: living_constellations
region_state: Drift
tone_tags: [wonder, mysterious]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 203: Ethical Capture Trial
- **Short Description:** A radiant Lumen Hound exhibits trackable but skittish movement near observation glass.
- **Tone Tag:** Curiosity, Wonder
- **Region Tag:** Menagerie of the Cosmos — Star Bestiary
- **Resonance Tag:** Unity
- **Narrative Purpose:** Tests non-invasive capture discipline to avoid imprint trauma.
- **Choice Variations:**
  1. Perfect timing on stasis web (safe, technical)
  2. Slight over-calibration for certainty (risky)
  3. Abort capture and just observe
  4. Offer calming echo pattern before net
- **Triggers:** herd_flux
- **Consequences:** Perfect timing unlocks empathy lore; misstep adds future skittishness
- **Recursion Variant:** Hound temperament and route seed change
- **Hidden Conditions:** Bonus if echo_song known
- **Enemy/Corruption Interactions:** None; unethical methods disabled

#### Node Metadata
id: node_203
act: 3
resonance: [Unity]
resonance_alias: []
region_id: menagerie_of_the_cosmos
subregion_id: star_bestiary
region_state: Trial
tone_tags: [curiosity, wonder]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 204: Terrarium Lattice Glow
- **Short Description:** Prismatic lattices activate, revealing adaptive ecologies in flux.
- **Tone Tag:** Curiosity, Mysterious
- **Region Tag:** Menagerie of the Cosmos — Prismatic Terrariums
- **Resonance Tag:** Echoes
- **Narrative Purpose:** Choose between gentle tuning or passive logging to guide adaptation.
- **Choice Variations:**
  1. Gentle tune for stable observation (safe)
  2. Passive log to accelerate emergence (risky)
  3. Swap two parameters to test feedback
  4. Pause to study lattice schematics
- **Triggers:** lattice_glow
- **Consequences:** Gentle grants steady yields; passive schedules micro-event variant
- **Recursion Variant:** Parameter pairs and biome response differ
- **Hidden Conditions:** Rare cache if prior ecology notes collected
- **Enemy/Corruption Interactions:** None; glass weavers only deter rough handling

#### Node Metadata
id: node_204
act: 3
resonance: [Echoes]
resonance_alias: [Unity]
region_id: menagerie_of_the_cosmos
subregion_id: prismatic_terrariums
region_state: Observation
tone_tags: [curiosity, mysterious]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 205: Echo Aviary Chorus Uplift
- **Short Description:** Flock harmonics swell, enabling accelerated song mimic learning.
- **Tone Tag:** Wonder, Mysterious
- **Region Tag:** Menagerie of the Cosmos — Echo Aviary
- **Resonance Tag:** Echoes
- **Narrative Purpose:** Trade-off between stable mastery and risky overreach for fast gains.
- **Choice Variations:**
  1. Disciplined mimesis with practice intervals (safe)
  2. Overreach for quick breakthrough (risky)
  3. Duet with lead raptor to steady tempo
  4. Record and analyze for later training
- **Triggers:** chorus_uplift
- **Consequences:** Stable path eases future echo tasks; overreach gives buff then fatigue
- **Recursion Variant:** Song intervals and nest placements change
- **Hidden Conditions:** Bonus tempo if resonance_nests previously tuned
- **Enemy/Corruption Interactions:** None; dissonance backlash only on errors

#### Node Metadata
id: node_205
act: 3
resonance: [Echoes]
resonance_alias: []
region_id: menagerie_of_the_cosmos
subregion_id: echo_aviary
region_state: Practice
tone_tags: [wonder, mysterious]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 206: Pattern Resonance Gate
- **Short Description:** A harmonic convergence opens a knowledge gate among living constellations.
- **Tone Tag:** Mysterious, Wonder
- **Region Tag:** Menagerie of the Cosmos — Living Constellations
- **Resonance Tag:** Unity
- **Narrative Purpose:** Precision test that rewards lore and navigation efficiency.
- **Choice Variations:**
  1. Align glyph phases precisely (safe, skill)
  2. Rush alignment before window closes (risky)
  3. Hold one glyph steady and wait a beat
  4. Use a learned song to smooth jitter
- **Triggers:** pattern_resonance
- **Consequences:** Precise path grants lore cache and path efficiency; rushed creates jitter
- **Recursion Variant:** Glyph order and frequencies change
- **Hidden Conditions:** Extra lore if star_gate_bonus was set
- **Enemy/Corruption Interactions:** None

#### Node Metadata
id: node_206
act: 3
resonance: [Unity]
resonance_alias: [Echoes]
region_id: menagerie_of_the_cosmos
subregion_id: living_constellations
region_state: Gate
tone_tags: [mysterious, wonder]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 207: Herd Flux Anomaly
- **Short Description:** A multi-species herd exhibits synchronized pivoting previously unrecorded.
- **Tone Tag:** Curiosity, Wonder
- **Region Tag:** Menagerie of the Cosmos — Star Bestiary
- **Resonance Tag:** Echoes
- **Narrative Purpose:** Decide between intervention to stabilize study conditions or pure observation.
- **Choice Variations:**
  1. Intervene to stabilize patterns (safe)
  2. Observe-only to capture rare dataset (risky)
  3. Tag each species for longitudinal study
  4. Use empathy signal to calm fluctuations
- **Triggers:** herd_flux
- **Consequences:** Intervention boosts model accuracy; observation archives rare signature
- **Recursion Variant:** Species mix and pivot timing vary
- **Hidden Conditions:** Extra data if prior bestiary routes mapped
- **Enemy/Corruption Interactions:** None

#### Node Metadata
id: node_207
act: 3
resonance: [Echoes]
resonance_alias: [Unity]
region_id: menagerie_of_the_cosmos
subregion_id: star_bestiary
region_state: Flux
tone_tags: [curiosity, wonder]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 208: Nest Recall Replay
- **Short Description:** A memory nest reactivates, replaying earlier choices with spectral accuracy.
- **Tone Tag:** Mysterious, Curiosity
- **Region Tag:** Menagerie of the Cosmos — Echo Aviary
- **Resonance Tag:** Unity
- **Narrative Purpose:** Offers retroactive refinement or philosophical acceptance.
- **Choice Variations:**
  1. Refine imprint to correct a prior approach (safe)
  2. Release memory to learn without changing it (philosophical)
  3. Branch into an alternate cadence briefly
  4. Record overlay for later analysis
- **Triggers:** nest_recall
- **Consequences:** Refine grants retro bonus; release yields unity resonance boost
- **Recursion Variant:** Playback frames and nests vary
- **Hidden Conditions:** Additional insight if duet practiced earlier
- **Enemy/Corruption Interactions:** None

#### Node Metadata
id: node_208
act: 3
resonance: [Unity]
resonance_alias: []
region_id: menagerie_of_the_cosmos
subregion_id: echo_aviary
region_state: Memory
tone_tags: [mysterious, curiosity]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 209: Adaptive Ecology Swap
- **Short Description:** Two micro-biomes begin exchanging environmental parameters.
- **Tone Tag:** Curiosity, Mysterious
- **Region Tag:** Menagerie of the Cosmos — Prismatic Terrariums
- **Resonance Tag:** Echoes
- **Narrative Purpose:** Trade stability for potential rarity in biome outcomes.
- **Choice Variations:**
  1. Moderate exchange for stable hybrid (safe)
  2. Amplify exchange for volatile adaptation (risky)
  3. Isolate variables to study causality
  4. Consult ecology notes for predictions
- **Triggers:** ecology_adapt
- **Consequences:** Moderate yields consistent forms; amplify enables rare variant chance
- **Recursion Variant:** Parameter pairing changes per seed
- **Hidden Conditions:** Extra control if lattice tuned earlier
- **Enemy/Corruption Interactions:** None

#### Node Metadata
id: node_209
act: 3
resonance: [Echoes]
resonance_alias: [Unity]
region_id: menagerie_of_the_cosmos
subregion_id: prismatic_terrariums
region_state: Exchange
tone_tags: [curiosity, mysterious]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 210: Unified Observation Summit
- **Short Description:** A convergence event synchronizes all subregions for a capped observation window.
- **Tone Tag:** Wonder, Mysterious
- **Region Tag:** Menagerie of the Cosmos — Cross-Domain
- **Resonance Tag:** Unity
- **Narrative Purpose:** Capstone choice between integrative breadth and specialized depth.
- **Choice Variations:**
  1. Integrative focus for broad bonuses (safe)
  2. Specialized depth for rare unlock chance (risky)
  3. Snapshot each domain and defer commitment
  4. Invite curator-hologram to advise
- **Triggers:** convergence_window
- **Consequences:** Integrative grants multi-domain buffs; specialized increases rare roll chance
- **Recursion Variant:** Alignment order and window length vary
- **Hidden Conditions:** Extra synergy if earlier nodes were balanced across subregions
- **Enemy/Corruption Interactions:** None

#### Node Metadata
id: node_210
act: 3
resonance: [Unity]
resonance_alias: [Echoes]
region_id: menagerie_of_the_cosmos
subregion_id: cross_domain
region_state: Convergence
tone_tags: [wonder, mysterious]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

---

### Node 211: Fulcrum Threshold Alignment
- **Short Description:** Re-center the balance fulcrum as penumbra thresholds slide under eclipse pressure.
- **Tone Tag:** Dramatic, Epic
- **Region Tag:** Eclipse Nexus — Chamber of Balance
- **Resonance Tag:** Fate
- **Narrative Purpose:** Introduces balance mechanics and cost-of-extremes under High stakes.
- **Choice Variations:**
  1. Add counterweight slowly (safe)
  2. Quick tilt correction with future debt (risky)
  3. Rewrite seal geometry to accept variance
  4. Hold until totality_window for better leverage
- **Triggers:** fulcrum_tilt
- **Consequences:** Stability improves; quick correction adds recoil debt
- **Recursion Variant:** Threshold offsets and costs rotate
- **Hidden Conditions:** Bonus if prior seal schematics recovered
- **Enemy/Corruption Interactions:** Umbra leakage increases during tilt; mitigate with binds

#### Node Metadata
id: node_211
act: 3
resonance: [Fate]
resonance_alias: [Unity]
region_id: eclipse_nexus
subregion_id: chamber_of_balance
region_state: Tilt
tone_tags: [dramatic, epic]
danger_tier: High
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 212: Umbra Surge Anchor
- **Short Description:** Anchor and redirect a violent umbra surge before it tears through bindings.
- **Tone Tag:** Dramatic, Tense
- **Region Tag:** Eclipse Nexus — Shadowed Spire
- **Resonance Tag:** Pulse
- **Narrative Purpose:** Tests surge handling under corruption pressure.
- **Choice Variations:**
  1. Absorb surge with vented bleed (safe)
  2. Redirect surge into decoy seal (risky)
  3. Split surge across three minor anchors
  4. Delay for penumbra_shift to reduce cost
- **Triggers:** umbra_surge
- **Consequences:** Vented bleed spreads minor corruption; redirection risks bind fray
- **Recursion Variant:** Surge waveforms and anchor strengths vary
- **Hidden Conditions:** Reduced cost if bind renewal performed earlier
- **Enemy/Corruption Interactions:** Corruption bleed active; shadow entities amplify errors

#### Node Metadata
id: node_212
act: 3
resonance: [Pulse]
resonance_alias: [Unity]
region_id: eclipse_nexus
subregion_id: shadowed_spire
region_state: Surge
tone_tags: [dramatic, tense]
danger_tier: High
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 213: Flare Baffle Installation
- **Short Description:** Install baffles to tame a chain of solar flares into usable channels.
- **Tone Tag:** Epic, Tense
- **Region Tag:** Eclipse Nexus — Radiant Hall
- **Resonance Tag:** Unity
- **Narrative Purpose:** Channel volatile light safely or risk overbright backlash.
- **Choice Variations:**
  1. Standard baffles for steady control (safe)
  2. Overclocked lattice for throughput (risky)
  3. Prism split to distribute heat
  4. Pause and buffer chant to reduce spike
- **Triggers:** solar_flare
- **Consequences:** Overclocking risks flare backlash; prism split complicates routing
- **Recursion Variant:** Flare timing and lattice tolerances vary
- **Hidden Conditions:** Extra buffer if prism schematics known
- **Enemy/Corruption Interactions:** Corruption catalyzes flares; containment must address taint

#### Node Metadata
id: node_213
act: 3
resonance: [Unity]
resonance_alias: [Pulse]
region_id: eclipse_nexus
subregion_id: radiant_hall
region_state: Containment
tone_tags: [epic, tense]
danger_tier: High
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 214: Penumbra Bridge Negotiation
- **Short Description:** Negotiate a safe crossing as penumbra zones drift and rebalance.
- **Tone Tag:** Dramatic, Tense
- **Region Tag:** Eclipse Nexus — Chamber of Balance
- **Resonance Tag:** Fate
- **Narrative Purpose:** Choose tradeoffs to achieve equilibrium while moving.
- **Choice Variations:**
  1. Pay stability cost for safe steps (safe)
  2. Risk faster cross during shift (risky)
  3. Call help from Radiant Hall for light assist
  4. Wait for totality_window to align paths
- **Triggers:** penumbra_shift
- **Consequences:** Costs shift; risky path may incur recoil scars
- **Recursion Variant:** Bridge segment patterns change
- **Hidden Conditions:** Reduced penalties if counterweights cached
- **Enemy/Corruption Interactions:** Ambient corruption destabilizes segments under stress

#### Node Metadata
id: node_214
act: 3
resonance: [Fate]
resonance_alias: []
region_id: eclipse_nexus
subregion_id: chamber_of_balance
region_state: Traverse
tone_tags: [dramatic, tense]
danger_tier: High
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 215: Bind Renewal Under Pressure
- **Short Description:** Reweave failing seals while umbra entities attempt to pry them apart.
- **Tone Tag:** Dramatic, Epic
- **Region Tag:** Eclipse Nexus — Shadowed Spire
- **Resonance Tag:** Pulse
- **Narrative Purpose:** Reinforce defenses amidst active assault.
- **Choice Variations:**
  1. Layered weave for durability (safe)
  2. Single thick bind for speed (risky)
  3. Bait a micro-surge to reset timing
  4. Call Radiant counterflash to distract attackers
- **Triggers:** bind_fray
- **Consequences:** Thick bind risks brittle failure; layered weave drains resources
- **Recursion Variant:** Attack cadence and bind geometry alter
- **Hidden Conditions:** Better outcomes with earlier surge anchor success
- **Enemy/Corruption Interactions:** Corruption gnaws at seams; mitigation required

#### Node Metadata
id: node_215
act: 3
resonance: [Pulse]
resonance_alias: [Fate]
region_id: eclipse_nexus
subregion_id: shadowed_spire
region_state: Defense
tone_tags: [dramatic, epic]
danger_tier: High
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 216: Prism Sync Orchestration
- **Short Description:** Align split light paths back into a unified channel without overload.
- **Tone Tag:** Epic, Tense
- **Region Tag:** Eclipse Nexus — Radiant Hall
- **Resonance Tag:** Unity
- **Narrative Purpose:** Execute a precision sync to unlock throughput safely.
- **Choice Variations:**
  1. Conservative sync sequence (safe)
  2. Aggressive phase merge for higher output (risky)
  3. Insert corrective buffer chant mid-merge
  4. Wait for totality_window to halve error margin
- **Triggers:** prism_split
- **Consequences:** Aggressive merge risks recoil burst; conservative lowers gains
- **Recursion Variant:** Phase offsets and sync windows vary
- **Hidden Conditions:** Bonus if earlier baffle tuning optimal
- **Enemy/Corruption Interactions:** Corruption introduces phase noise; filtering needed

#### Node Metadata
id: node_216
act: 3
resonance: [Unity]
resonance_alias: [Fate]
region_id: eclipse_nexus
subregion_id: radiant_hall
region_state: Orchestration
tone_tags: [epic, tense]
danger_tier: High
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 217: Equinox Rite Commitment
- **Short Description:** Commit to a rite that locks in a balance frame for the next arc.
- **Tone Tag:** Dramatic, Epic
- **Region Tag:** Eclipse Nexus — Chamber of Balance
- **Resonance Tag:** Fate
- **Narrative Purpose:** Make a defining choice that biases future systems.
- **Choice Variations:**
  1. Lean toward unity (safe)
  2. Lean toward pulse (risky, dynamic future)
  3. Hold midpoint with upkeep cost
  4. Delay until totality_window for boosted stability
- **Triggers:** fulcrum_tilt
- **Consequences:** Sets global bias; upkeep or dynamism side effects
- **Recursion Variant:** Cost curves and bias weights change
- **Hidden Conditions:** Extra option if both Radiant and Shadowed flags set
- **Enemy/Corruption Interactions:** Corruption tests the commitment; minor surges follow

#### Node Metadata
id: node_217
act: 3
resonance: [Fate]
resonance_alias: [Unity]
region_id: eclipse_nexus
subregion_id: chamber_of_balance
region_state: Rite
tone_tags: [dramatic, epic]
danger_tier: High
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 218: Dual-Aspect Trial
- **Short Description:** Face twin avatars of light and shadow in a synchronized challenge.
- **Tone Tag:** Epic, Tense
- **Region Tag:** Eclipse Nexus — Cross-Domain
- **Resonance Tag:** Unity
- **Narrative Purpose:** Prove mastery of channeling and binding simultaneously.
- **Choice Variations:**
  1. Alternate focus per beat (safe)
  2. Full simultaneous handling with tight windows (risky)
  3. Stagger sequence; accept longer fight
  4. Invoke learned duet pattern from Hall of Harmony
- **Triggers:** totality_window
- **Consequences:** Success unlocks cross-domain boons; failure triggers recoil scars
- **Recursion Variant:** Avatar patterns and duet timing vary
- **Hidden Conditions:** Easier if harmony_motif flagged earlier
- **Enemy/Corruption Interactions:** Corruption backlash on simultaneous mishandling

#### Node Metadata
id: node_218
act: 3
resonance: [Unity]
resonance_alias: [Pulse]
region_id: eclipse_nexus
subregion_id: cross_domain
region_state: Trial
tone_tags: [epic, tense]
danger_tier: High
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 219: Vertex Synchronization
- **Short Description:** Synchronize three resonance vertices to prime the Totality Seal.
- **Tone Tag:** Dramatic, Epic
- **Region Tag:** Eclipse Nexus — Eternal Eclipse Core
- **Resonance Tag:** Pulse
- **Narrative Purpose:** Final prep step enabling the capstone seal.
- **Choice Variations:**
  1. Safe two-step sync with buffer (safe)
  2. One-shot sync for efficiency (risky)
  3. Borrow stability from Chamber of Balance
  4. Wait for penumbra_shift to widen tolerance
- **Triggers:** totality_drum
- **Consequences:** One-shot risks large recoil; buffers consume resources
- **Recursion Variant:** Vertex order and drift vary
- **Hidden Conditions:** Bonus if prior syncs were flawless
- **Enemy/Corruption Interactions:** Corruption injects jitter; precise filtering required

#### Node Metadata
id: node_219
act: 3
resonance: [Pulse]
resonance_alias: [Unity]
region_id: eclipse_nexus
subregion_id: eternal_eclipse_core
region_state: Prime
tone_tags: [dramatic, epic]
danger_tier: High
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 220: Totality Seal Ordeal
- **Short Description:** Execute the Totality Seal, fusing opposing forces into a new equilibrium.
- **Tone Tag:** Epic, Dramatic
- **Region Tag:** Eclipse Nexus — Eternal Eclipse Core
- **Resonance Tag:** Unity
- **Narrative Purpose:** Capstone outcome that shapes downstream systems.
- **Choice Variations:**
  1. Balanced seal for stable worlds (safe)
  2. Unity-forward seal for cohesion (risky consolidation)
  3. Pulse-forward seal for dynamism (risky volatility)
  4. Abort and fallback to partial seal
- **Triggers:** totality_window
- **Consequences:** World-state modifiers applied; recoil scars if misaligned
- **Recursion Variant:** Seal cadence and recoil vectors change
- **Hidden Conditions:** Special boon if Equinox Rite was midpoint
- **Enemy/Corruption Interactions:** Corruption backlash proportional to seal bias

#### Node Metadata
id: node_220
act: 3
resonance: [Unity]
resonance_alias: [Fate]
region_id: eclipse_nexus
subregion_id: eternal_eclipse_core
region_state: Totality
tone_tags: [epic, dramatic]
danger_tier: High
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

---

### Node 221: Oath Echo Confrontation
- **Short Description:** Confront a resurging oath echo before it empowers hostile auras.
- **Tone Tag:** Dark, Tragic
- **Region Tag:** Sanctuary of Light — Chamber of Betrayal
- **Resonance Tag:** Fate
- **Narrative Purpose:** Establishes betrayal mechanics and aura collapse triage.
- **Choice Variations:**
  1. Speak contrition to quiet the echo (safe)
  2. Rip the echo out violently (risky, scarring)
  3. Bind the echo into a ward to buy time
  4. Wait for light_quake to expose its core
- **Triggers:** oath_echo
- **Consequences:** Quiet reduces enemy buff; ripping adds permanent scar stack
- **Recursion Variant:** Echo voice and vow content vary
- **Hidden Conditions:** Lesser cost if vow_renewal performed earlier
- **Enemy/Corruption Interactions:** Corruption surge strengthens the echo if ignored

#### Node Metadata
id: node_221
act: 3
resonance: [Fate]
resonance_alias: [Betrayal]
region_id: sanctuary_of_light
subregion_id: chamber_of_betrayal
region_state: Echo
tone_tags: [dark, tragic]
danger_tier: High
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 222: Banner Brace Under Collapse
- **Short Description:** Hold the line as defensive banners fall and auras flicker out.
- **Tone Tag:** Graphic, Dark
- **Region Tag:** Sanctuary of Light — Chamber of Betrayal
- **Resonance Tag:** Loss
- **Narrative Purpose:** Triage during aura collapse; buy time for repairs.
- **Choice Variations:**
  1. Rotate shields methodically (safe)
  2. Countercharge to reclaim space (risky)
  3. Patch a banner with improvised light weave
  4. Wait for penitent_march to split attackers
- **Triggers:** banner_fall
- **Consequences:** Countercharge risks heavy wounds; patch adds temporary buffer
- **Recursion Variant:** Collapse pattern and enemy waves vary
- **Hidden Conditions:** Extra stability if oath echo was confronted
- **Enemy/Corruption Interactions:** Corruption gnaws at patches; repair rate reduced under surge

#### Node Metadata
id: node_222
act: 3
resonance: [Loss]
resonance_alias: []
region_id: sanctuary_of_light
subregion_id: chamber_of_betrayal
region_state: Collapse
tone_tags: [graphic, dark]
danger_tier: High
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 223: Ember Walk Atonement
- **Short Description:** Carry living embers along a penitent path without dropping the flame.
- **Tone Tag:** Tragic, Graphic
- **Region Tag:** Sanctuary of Light — Beacon of Redemption
- **Resonance Tag:** Fate
- **Narrative Purpose:** Earn redemption tokens by enduring controlled suffering.
- **Choice Variations:**
  1. Slow and steady stride (safe)
  2. Quick run to shorten pain (risky)
  3. Share burden among allies to spread scars
  4. Wait for vow_renewal to reduce burn
- **Triggers:** ember_trial
- **Consequences:** Quick run risks stumble; sharing spreads scar stacks evenly
- **Recursion Variant:** Ember weight and gust timing vary
- **Hidden Conditions:** Bonus cleanse if contrition was sincere earlier
- **Enemy/Corruption Interactions:** Corruption flares on ember drops; cleanse reduces future spikes

#### Node Metadata
id: node_223
act: 3
resonance: [Fate]
resonance_alias: [Loss]
region_id: sanctuary_of_light
subregion_id: beacon_of_redemption
region_state: Trial
tone_tags: [tragic, graphic]
danger_tier: High
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 224: Vow Renewal Rite
- **Short Description:** Bind a renewed pledge to dampen future corruption surges.
- **Tone Tag:** Tragic, Dark
- **Region Tag:** Sanctuary of Light — Beacon of Redemption
- **Resonance Tag:** Fate
- **Narrative Purpose:** Trade current strength for long-term resilience.
- **Choice Variations:**
  1. Modest pledge with small upkeep (safe)
  2. Severe pledge for major protection (risky)
  3. Conditional pledge that triggers on collapse
  4. Delay until light_quake for reduced upkeep
- **Triggers:** vow_renewal
- **Consequences:** Severe pledge lowers damage but adds maintenance cost
- **Recursion Variant:** Wording affects exact modifiers
- **Hidden Conditions:** Better coefficients if ember walk completed
- **Enemy/Corruption Interactions:** Corruption is partially repelled when vow is active

#### Node Metadata
id: node_224
act: 3
resonance: [Fate]
resonance_alias: [Betrayal]
region_id: sanctuary_of_light
subregion_id: beacon_of_redemption
region_state: Pledge
tone_tags: [tragic, dark]
danger_tier: High
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 225: Pain Transfer Protocol
- **Short Description:** Convert team wounds into objective progress at the Hall’s ledgers.
- **Tone Tag:** Graphic, Tragic
- **Region Tag:** Sanctuary of Light — Hall of Healing
- **Resonance Tag:** Loss
- **Narrative Purpose:** A high-cost method to push forward despite injuries.
- **Choice Variations:**
  1. Controlled transfer with minimal risk (safe)
  2. Deep transfer for bigger gain (risky)
  3. Split transfers over time to manage spikes
  4. Wait for memory_stitch to reduce backlash
- **Triggers:** pain_transfer
- **Consequences:** Deep transfer risks overbright backlash; controlled is slower
- **Recursion Variant:** Ledger thresholds and backlash timing vary
- **Hidden Conditions:** Lower backlash if scars ledger is balanced
- **Enemy/Corruption Interactions:** Corruption mutates under transfer; mitigation required

#### Node Metadata
id: node_225
act: 3
resonance: [Loss]
resonance_alias: []
region_id: sanctuary_of_light
subregion_id: hall_of_healing
region_state: Transfer
tone_tags: [graphic, tragic]
danger_tier: High
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 226: Memory Stitch Operation
- **Short Description:** Rebind shattered memories to stabilize a guide and open a route.
- **Tone Tag:** Dark, Tragic
- **Region Tag:** Sanctuary of Light — Hall of Healing
- **Resonance Tag:** Fate
- **Narrative Purpose:** Unlock paths by enduring painful recollection.
- **Choice Variations:**
  1. Gentle stitch with many sessions (safe)
  2. Aggressive stitch to finish fast (risky)
  3. Anchor with a personal scar to steady the weave
  4. Wait for penitent_march to soothe the patient
- **Triggers:** memory_stitch
- **Consequences:** Aggressive stitch risks relapse; anchoring costs you a scar
- **Recursion Variant:** Memory order and triggers change
- **Hidden Conditions:** Extra clarity if oath echo was resolved
- **Enemy/Corruption Interactions:** Corruption intrudes during lapses; purge windows brief

#### Node Metadata
id: node_226
act: 3
resonance: [Fate]
resonance_alias: [Loss]
region_id: sanctuary_of_light
subregion_id: hall_of_healing
region_state: Stitch
tone_tags: [dark, tragic]
danger_tier: High
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 227: Overbright Buffer Build
- **Short Description:** Assemble recoil buffers before an impending overbright scream.
- **Tone Tag:** Graphic, Dark
- **Region Tag:** Sanctuary of Light — Luminous Abyss
- **Resonance Tag:** Loss
- **Narrative Purpose:** Prepare defenses ahead of a timed purge event.
- **Choice Variations:**
  1. Redundant buffers for reliability (safe)
  2. Max throughput buffer with narrow margin (risky)
  3. Borrow parts from another subregion to accelerate
  4. Wait to sync with catharsis_fall timing
- **Triggers:** overbright_scream
- **Consequences:** Max throughput risks cascade failure; redundancy costs more
- **Recursion Variant:** Buffer tolerances and timing vary
- **Hidden Conditions:** Bonus if prism sync knowledge exists
- **Enemy/Corruption Interactions:** Corruption complicates buffer calibration; purge may cleanse or harm

#### Node Metadata
id: node_227
act: 3
resonance: [Loss]
resonance_alias: []
region_id: sanctuary_of_light
subregion_id: luminous_abyss
region_state: Buffer
tone_tags: [graphic, dark]
danger_tier: High
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 228: Purge Call Timing
- **Short Description:** Trigger a cathartic purge to cleanse corruption without collapsing the site.
- **Tone Tag:** Dark, Tragic
- **Region Tag:** Sanctuary of Light — Luminous Abyss
- **Resonance Tag:** Fate
- **Narrative Purpose:** High-stakes timing challenge to gain a clean field.
- **Choice Variations:**
  1. Trigger at safe threshold (safe)
  2. Delay to catch more corruption (risky)
  3. Split purge into two smaller waves
  4. Wait for light_quake to widen margin
- **Triggers:** catharsis_fall
- **Consequences:** Over-delay risks collapse; split lowers peak effect
- **Recursion Variant:** Thresholds and corruption density vary
- **Hidden Conditions:** Better outcome if buffers perfectly tuned
- **Enemy/Corruption Interactions:** Purge burns corruption; residue causes mutations

#### Node Metadata
id: node_228
act: 3
resonance: [Fate]
resonance_alias: [Loss]
region_id: sanctuary_of_light
subregion_id: luminous_abyss
region_state: Purge
tone_tags: [dark, tragic]
danger_tier: High
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 229: Contrition Assembly
- **Short Description:** Gather penitent witnesses to anchor a cleansing rite.
- **Tone Tag:** Tragic, Graphic
- **Region Tag:** Sanctuary of Light — Cross-Domain
- **Resonance Tag:** Betrayal
- **Narrative Purpose:** Cross-subregion rally that prepares the capstone.
- **Choice Variations:**
  1. Invite only the willing (safe)
  2. Compel attendance with authority (risky)
  3. Trade favors for broader turnout
  4. Wait for penitent_march to increase attendance naturally
- **Triggers:** penitent_march
- **Consequences:** Compulsion breeds resentment; willing path yields steadier focus
- **Recursion Variant:** Witness mix and focus quality vary
- **Hidden Conditions:** Extra turnout if earlier help was offered freely
- **Enemy/Corruption Interactions:** Corruption seeks to shame witnesses; needs shielding

#### Node Metadata
id: node_229
act: 3
resonance: [Betrayal]
resonance_alias: [Fate]
region_id: sanctuary_of_light
subregion_id: cross_domain
region_state: Assembly
tone_tags: [tragic, graphic]
danger_tier: High
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 230: Radiant Scar Reckoning
- **Short Description:** Weigh your scars and commit to a cleansing outcome that shapes the road ahead.
- **Tone Tag:** Tragic, Dark
- **Region Tag:** Sanctuary of Light — Cross-Domain
- **Resonance Tag:** Fate
- **Narrative Purpose:** Capstone choice trading scars for lasting boons or cleanses.
- **Choice Variations:**
  1. Accept scars and gain permanent resilience (safe)
  2. Burn scars for a fresh start (risky, power loss)
  3. Share scars with allies to redistribute cost
  4. Abort and defer to another rite later
- **Triggers:** light_quake
- **Consequences:** Acceptance grants resilience; burning removes penalties but resets some progress
- **Recursion Variant:** Scar weights and boon curves vary
- **Hidden Conditions:** Special boon if earlier vows upheld under pressure
- **Enemy/Corruption Interactions:** Corruption hits hardest during the reckoning; purges can misfire

#### Node Metadata
id: node_230
act: 3
resonance: [Fate]
resonance_alias: [Loss]
region_id: sanctuary_of_light
subregion_id: cross_domain
region_state: Reckoning
tone_tags: [tragic, dark]
danger_tier: High
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

---

### Node 231: Shard Map in the Hush
- **Short Description:** Chart drifting echo fragments without drawing the hush currents’ bite.
- **Tone Tag:** Sad, Tense
- **Region Tag:** Void Path — Shattered Echoes
- **Resonance Tag:** Echoes
- **Narrative Purpose:** Introduces fragment mapping with silence-timed movement.
- **Choice Variations:**
  1. Move only on low hush beats (safe)
  2. Quick route through a glass rain gap (risky)
  3. Anchor a listening ribbon to stabilize a patch
  4. Wait for hush_deepens to widen timing windows
- **Triggers:** glass_rain
- **Consequences:** Quick route risks cuts; ribbon anchor slows drift for a while
- **Recursion Variant:** Fragment layouts and hush cadence shift by seed
- **Hidden Conditions:** Extra clarity if a prior echo ledger was completed
- **Enemy/Corruption Interactions:** Corruption dust in shards causes bleed-over; purge with gentle wipe

#### Node Metadata
id: node_231
act: 3
resonance: [Echoes]
resonance_alias: []
region_id: void_path
subregion_id: shattered_echoes
region_state: Survey
tone_tags: [sad, tense]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 232: Lantern Carry Vigil
- **Short Description:** Keep a fading lantern alive while guiding a fragile companion.
- **Tone Tag:** Sad, Hopeful
- **Region Tag:** Void Path — Path of Longing
- **Resonance Tag:** Innocence
- **Narrative Purpose:** Escort and maintenance test under soft pressure.
- **Choice Variations:**
  1. Share warmth at the cost of your own pace (safe)
  2. Push onward to beat the draft (risky)
  3. Braid two lanterns for stability
  4. Wait for promise_resurface to open a shortcut
- **Triggers:** lantern_fade
- **Consequences:** Over-pacing risks lantern sputter; braiding steadies light but ties hands
- **Recursion Variant:** Draft strength and companion fragility vary
- **Hidden Conditions:** Better results if earlier promises were upheld
- **Enemy/Corruption Interactions:** Void taint chills the flame; small cleanses keep it true

#### Node Metadata
id: node_232
act: 3
resonance: [Innocence]
resonance_alias: [Echoes]
region_id: void_path
subregion_id: path_of_longing
region_state: Escort
tone_tags: [sad, hopeful]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 233: Hollow Knot Trial
- **Short Description:** Release a tightening hollow knot without snapping the chamber’s balance.
- **Tone Tag:** Tense, Sad
- **Region Tag:** Void Path — Chamber of Emptiness
- **Resonance Tag:** Paradox
- **Narrative Purpose:** Breath timing and precision puzzle under rising pressure.
- **Choice Variations:**
  1. Slow unwind synced to breath (safe)
  2. Quick tug on the weak strand (risky)
  3. Vent a small pocket to reduce pressure
  4. Wait for hollow_bloom to reset cycles
- **Triggers:** knot_tighten
- **Consequences:** Quick tug risks collapse; venting shifts pressure to another spot
- **Recursion Variant:** Knot topology and weak points vary
- **Hidden Conditions:** Easier if breath cadence was learned elsewhere
- **Enemy/Corruption Interactions:** Entropic creep worsens constriction; purge windows brief

#### Node Metadata
id: node_233
act: 3
resonance: [Paradox]
resonance_alias: []
region_id: void_path
subregion_id: chamber_of_emptiness
region_state: Pressure
tone_tags: [tense, sad]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 234: Span the Faint Bridge
- **Short Description:** Cast anchors and call a steady path across a barely-there span.
- **Tone Tag:** Hopeful, Tense
- **Region Tag:** Void Path — Bridge of Hope
- **Resonance Tag:** Echoes
- **Narrative Purpose:** Trust anchoring and call timing to cross safely.
- **Choice Variations:**
  1. Conservative anchors in many points (safe)
  2. Few strong anchors to move faster (risky)
  3. Sync calls with crosswinds to save effort
  4. Wait for return_tide to ease travel
- **Triggers:** ribbon_snap
- **Consequences:** Few anchors risk snap; conservative path slow but sure
- **Recursion Variant:** Gust cycles and span solidity vary
- **Hidden Conditions:** Bonus if listening ribbon is active nearby
- **Enemy/Corruption Interactions:** Corruption frays ribbons; periodic cleanses prevent failure

#### Node Metadata
id: node_234
act: 3
resonance: [Echoes]
resonance_alias: [Innocence]
region_id: void_path
subregion_id: bridge_of_hope
region_state: Traverse
tone_tags: [hopeful, tense]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 235: Whisper Trade with the Void
- **Short Description:** Offer a gentle memory to quiet the void’s pull on a shattered lane.
- **Tone Tag:** Sad, Tense
- **Region Tag:** Void Path — Shattered Echoes
- **Resonance Tag:** Echoes
- **Narrative Purpose:** Sacrifice-like bargaining to improve safety.
- **Choice Variations:**
  1. Offer a small memory (safe)
  2. Offer a bright memory for a strong calm (risky)
  3. Anchor multiple tiny offerings
  4. Wait for hush_deepens to reduce cost
- **Triggers:** hush_pull
- **Consequences:** Bright memory calms long but hurts morale; small fades quickly
- **Recursion Variant:** Memory value and lane pull vary
- **Hidden Conditions:** Extra effect if earlier lantern carry succeeded
- **Enemy/Corruption Interactions:** Corruption echoes twist offerings; cleanse stabilizes the pact

#### Node Metadata
id: node_235
act: 3
resonance: [Echoes]
resonance_alias: [Paradox]
region_id: void_path
subregion_id: shattered_echoes
region_state: Bargain
tone_tags: [sad, tense]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 236: Promise Tune
- **Short Description:** Retune an old promise so it points the way for those who follow.
- **Tone Tag:** Hopeful, Sad
- **Region Tag:** Void Path — Path of Longing
- **Resonance Tag:** Innocence
- **Narrative Purpose:** Convert past intent into present guidance.
- **Choice Variations:**
  1. Gentle retune that lasts longer (safe)
  2. Sharp retune for stronger pull now (risky)
  3. Share the tune among companions
  4. Wait for promise_resurface to amplify
- **Triggers:** promise_resurface
- **Consequences:** Sharp retune may fray later; sharing reduces individual burden
- **Recursion Variant:** Promise wording changes effect shapes
- **Hidden Conditions:** Extra clarity if lanterns were braided earlier
- **Enemy/Corruption Interactions:** Taint seeks to detune promises; periodic cleanses help

#### Node Metadata
id: node_236
act: 3
resonance: [Innocence]
resonance_alias: [Echoes]
region_id: void_path
subregion_id: path_of_longing
region_state: Guidance
tone_tags: [hopeful, sad]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 237: Breath Count Passage
- **Short Description:** Cross the chamber by stepping only on measured breaths.
- **Tone Tag:** Tense, Sad
- **Region Tag:** Void Path — Chamber of Emptiness
- **Resonance Tag:** Paradox
- **Narrative Purpose:** Reinforces precision under pressure.
- **Choice Variations:**
  1. Count together to share rhythm (safe)
  2. Solo sprint between measures (risky)
  3. Install a breath pole to mark cadence
  4. Wait for hollow_bloom to reset timing
- **Triggers:** hollow_bloom
- **Consequences:** Sprint risks misstep; shared rhythm steadies the group
- **Recursion Variant:** Measure lengths and crack timing vary
- **Hidden Conditions:** Bonus if knot trial succeeded earlier
- **Enemy/Corruption Interactions:** Entropy thickens the air; minor purges refresh lungs

#### Node Metadata
id: node_237
act: 3
resonance: [Paradox]
resonance_alias: []
region_id: void_path
subregion_id: chamber_of_emptiness
region_state: Passage
tone_tags: [tense, sad]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 238: Anchor Cast Across the Pale
- **Short Description:** Throw anchor ribbons and call others over a pale gap.
- **Tone Tag:** Hopeful, Tense
- **Region Tag:** Void Path — Bridge of Hope
- **Resonance Tag:** Innocence
- **Narrative Purpose:** Team coordination across fragile spans.
- **Choice Variations:**
  1. Many small anchors and slow calls (safe)
  2. Few big anchors with strong calls (risky)
  3. Cross in staggered pairs
  4. Wait for return_tide to lighten the pull
- **Triggers:** return_tide
- **Consequences:** Big anchors risk failure if calls slip; many small anchors consume supplies
- **Recursion Variant:** Gap width and wind cycles differ
- **Hidden Conditions:** Easier if span was mapped earlier
- **Enemy/Corruption Interactions:** Corruption nibbles at anchor knots; cleanses preserve strength

#### Node Metadata
id: node_238
act: 3
resonance: [Innocence]
resonance_alias: [Echoes]
region_id: void_path
subregion_id: bridge_of_hope
region_state: Anchor
tone_tags: [hopeful, tense]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 239: Echo Choice — Quell or Carry
- **Short Description:** Decide whether to quiet a loud echo or carry it forward as guidance.
- **Tone Tag:** Sad, Hopeful
- **Region Tag:** Void Path — Cross-Domain
- **Resonance Tag:** Echoes
- **Narrative Purpose:** Philosophical fork with mechanical ripple.
- **Choice Variations:**
  1. Quell gently to reduce hazard (safe)
  2. Carry loudly to guide others (risky)
  3. Split the echo into braided strands
  4. Wait for hush_deepens to temper the sound
- **Triggers:** echo_shear
- **Consequences:** Quell lowers future danger; carry opens routes but attracts attention
- **Recursion Variant:** Echo content and volume shift
- **Hidden Conditions:** Extra option if promise tune was perfect
- **Enemy/Corruption Interactions:** Corruption distorts loud echoes; add filters

#### Node Metadata
id: node_239
act: 3
resonance: [Echoes]
resonance_alias: [Paradox]
region_id: void_path
subregion_id: cross_domain
region_state: Choice
tone_tags: [sad, hopeful]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 240: Horizon of Return
- **Short Description:** Set the return vector—go back with what you’ve gathered or linger to deepen the path.
- **Tone Tag:** Hopeful, Sad
- **Region Tag:** Void Path — Cross-Domain
- **Resonance Tag:** Paradox
- **Narrative Purpose:** Capstone choice that biases future traversal and reward cadence.
- **Choice Variations:**
  1. Return now with stable gains (safe)
  2. Linger for deeper insights (risky)
  3. Send others back while you anchor
  4. Wait for return_tide to maximize safety
- **Triggers:** return_tide
- **Consequences:** Linger risks fragment shear; return sets gentle boon trail later
- **Recursion Variant:** Return vector efficiency varies
- **Hidden Conditions:** Special boon if echoes were carried and not quelled
- **Enemy/Corruption Interactions:** Entropy rises as you linger; periodic purges required

#### Node Metadata
id: node_240
act: 3
resonance: [Paradox]
resonance_alias: [Echoes]
region_id: void_path
subregion_id: cross_domain
region_state: Return
tone_tags: [hopeful, sad]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

---

### Node 241: Memory Procession Step
- **Short Description:** Join the slow procession and keep pace to tune your thoughts.
- **Tone Tag:** Reflective, Sad
- **Region Tag:** Remembrance Hall — Hall of Echoing Memories
- **Resonance Tag:** Memory
- **Narrative Purpose:** Introduces procession cadence and clarity boons.
- **Choice Variations:**
  1. Walk in perfect cadence (safe)
  2. Drift ahead to scout (risky)
  3. Hold a lantern high to steady neighbors
  4. Pause at a vigil mark to deepen insight
- **Triggers:** memory_procession
- **Consequences:** Perfect cadence grants clarity; scouting risks missing a cue
- **Recursion Variant:** Choir intervals and pace vary
- **Hidden Conditions:** Extra clarity if a keepsake is tuned
- **Enemy/Corruption Interactions:** None by default; any corruption appears only on hidden branch or surge (gated surge/hidden)

#### Node Metadata
id: node_241
act: 3
resonance: [Memory]
resonance_alias: [Echoes]
region_id: remembrance_hall
subregion_id: hall_of_echoing_memories
region_state: Procession
tone_tags: [reflective, sad]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 242: Choir Note Match
- **Short Description:** Match a rising note to open a gentle shortcut between aisles.
- **Tone Tag:** Reflective, Joyful
- **Region Tag:** Remembrance Hall — Hall of Echoing Memories
- **Resonance Tag:** Echoes
- **Narrative Purpose:** Teaches echo pitch matching for path reveals.
- **Choice Variations:**
  1. Sustain a soft note (safe)
  2. Leap to a harmony above (risky)
  3. Hum in rounds with companions
  4. Wait for echo_choir to swell
- **Triggers:** echo_choir
- **Consequences:** Harmony leap opens a bigger path but strains breath
- **Recursion Variant:** Target pitch shifts per seed
- **Hidden Conditions:** Bonus if procession cadence was perfect
- **Enemy/Corruption Interactions:** None by default; any corruption appears only on hidden branch or surge (gated surge/hidden)

#### Node Metadata
id: node_242
act: 3
resonance: [Echoes]
resonance_alias: [Memory]
region_id: remembrance_hall
subregion_id: hall_of_echoing_memories
region_state: Choir
tone_tags: [reflective, joyful]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 243: Lost Name Tablet Rub
- **Short Description:** Lift a name from a worn tablet and restore it to the wall of lineage.
- **Tone Tag:** Reflective, Joyful
- **Region Tag:** Remembrance Hall — Chamber of Lost Names
- **Resonance Tag:** Memory
- **Narrative Purpose:** Name restoration unlocks small boons and story records.
- **Choice Variations:**
  1. Careful rub with clean paper (safe)
  2. Press hard to recover deep grooves (risky)
  3. Ask a guide to hold the thread steady
  4. Wait for name_resurface to glow
- **Triggers:** name_resurface
- **Consequences:** Hard press risks smudging; careful method preserves clarity
- **Recursion Variant:** Tablet wear and thread tension vary
- **Hidden Conditions:** Extra boon if lineage sorted earlier
- **Enemy/Corruption Interactions:** None by default; any corruption appears only on hidden branch or surge (gated surge/hidden)

#### Node Metadata
id: node_243
act: 3
resonance: [Memory]
resonance_alias: [Renewal]
region_id: remembrance_hall
subregion_id: chamber_of_lost_names
region_state: Recovery
tone_tags: [reflective, joyful]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 244: Lineage Thread Sort
- **Short Description:** Untangle a knot of lineage threads without snapping tenuous links.
- **Tone Tag:** Reflective, Sad
- **Region Tag:** Remembrance Hall — Chamber of Lost Names
- **Resonance Tag:** Echoes
- **Narrative Purpose:** Gentle puzzle about ordering and patience.
- **Choice Variations:**
  1. Sort slowly by color and weight (safe)
  2. Pull a central loop to free many at once (risky)
  3. Weigh threads with a lantern’s heat
  4. Wait for lineage_knot to loosen
- **Triggers:** lineage_knot
- **Consequences:** Central pull can snap a link; slow sort preserves
- **Recursion Variant:** Knot topology and colors vary
- **Hidden Conditions:** Bonus if prior tablet rub succeeded
- **Enemy/Corruption Interactions:** None by default; any corruption appears only on hidden branch or surge (gated surge/hidden)

#### Node Metadata
id: node_244
act: 3
resonance: [Echoes]
resonance_alias: [Memory]
region_id: remembrance_hall
subregion_id: chamber_of_lost_names
region_state: Sorting
tone_tags: [reflective, sad]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 245: Pool of Quiet Look
- **Short Description:** Gaze into a still pool to reflect and draw a gentle insight.
- **Tone Tag:** Reflective, Sad
- **Region Tag:** Remembrance Hall — Garden of Reflection
- **Resonance Tag:** Renewal
- **Narrative Purpose:** Reflection window grants insight tokens for later.
- **Choice Variations:**
  1. Sit and breathe until pool calm (safe)
  2. Skim the surface for fast reading (risky)
  3. Share the view with a companion
  4. Wait for pool_calm for extended time
- **Triggers:** pool_calm
- **Consequences:** Fast skim yields quick but shallow insight
- **Recursion Variant:** Insights and reflections vary
- **Hidden Conditions:** Extra token if keepsake tuned
- **Enemy/Corruption Interactions:** None by default; any corruption appears only on hidden branch or surge (gated surge/hidden)

#### Node Metadata
id: node_245
act: 3
resonance: [Renewal]
resonance_alias: [Memory]
region_id: remembrance_hall
subregion_id: garden_of_reflection
region_state: Reflection
tone_tags: [reflective, sad]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 246: Keepsake Tune
- **Short Description:** Tune a keepsake so it resonates when a loved tale is near.
- **Tone Tag:** Reflective, Joyful
- **Region Tag:** Remembrance Hall — Garden of Reflection
- **Resonance Tag:** Echoes
- **Narrative Purpose:** Create a gentle guidance tool for narrative hooks.
- **Choice Variations:**
  1. Soft tuning for broad range (safe)
  2. Sharp tuning for precise pings (risky)
  3. Bind to a lantern for shared benefit
  4. Wait for keepsake_bloom to amplify
- **Triggers:** keepsake_bloom
- **Consequences:** Sharp tuning pings louder but less often
- **Recursion Variant:** Resonant frequencies vary
- **Hidden Conditions:** Extra stability if choir note matched
- **Enemy/Corruption Interactions:** None by default; any corruption appears only on hidden branch or surge (gated surge/hidden)

#### Node Metadata
id: node_246
act: 3
resonance: [Echoes]
resonance_alias: [Renewal]
region_id: remembrance_hall
subregion_id: garden_of_reflection
region_state: Tuning
tone_tags: [reflective, joyful]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 247: Ledger Amendment
- **Short Description:** Amend one line in a legacy ledger to nudge a future event.
- **Tone Tag:** Reflective, Joyful
- **Region Tag:** Remembrance Hall — Vault of Eternal Remembrance
- **Resonance Tag:** Memory
- **Narrative Purpose:** Demonstrates small, respectful retcon with limits.
- **Choice Variations:**
  1. Minor correction to wording (safe)
  2. Bold change that risks drift (risky)
  3. Add a footnote to contextualize
  4. Wait for ledger_awaken to ease edits
- **Triggers:** ledger_awaken
- **Consequences:** Bold change creates variance; minor preserves integrity
- **Recursion Variant:** Edit slots and drift vary
- **Hidden Conditions:** Bonus if earlier records were restored
- **Enemy/Corruption Interactions:** None by default; any corruption appears only on hidden branch or surge (gated surge/hidden)

#### Node Metadata
id: node_247
act: 3
resonance: [Memory]
resonance_alias: [Echoes]
region_id: remembrance_hall
subregion_id: vault_of_eternal_remembrance
region_state: Amendment
tone_tags: [reflective, joyful]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 248: Story Binding to Lantern
- **Short Description:** Bind a cherished tale to a guidance lantern for future travelers.
- **Tone Tag:** Reflective, Joyful
- **Region Tag:** Remembrance Hall — Vault of Eternal Remembrance
- **Resonance Tag:** Renewal
- **Narrative Purpose:** Convert legacy into guidance that aids allies later.
- **Choice Variations:**
  1. Gentle bind for steady glow (safe)
  2. Bright bind for strong, brief guidance (risky)
  3. Weave multiple small tales together
  4. Wait for story_binding to strengthen bonds
- **Triggers:** story_binding
- **Consequences:** Bright bind fades fast; gentle persists longer
- **Recursion Variant:** Lantern indices and tales vary
- **Hidden Conditions:** Added effect if keepsake tune is active
- **Enemy/Corruption Interactions:** None by default; any corruption appears only on hidden branch or surge (gated surge/hidden)

#### Node Metadata
id: node_248
act: 3
resonance: [Renewal]
resonance_alias: [Memory]
region_id: remembrance_hall
subregion_id: vault_of_eternal_remembrance
region_state: Binding
tone_tags: [reflective, joyful]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 249: Vigil of Gratitude
- **Short Description:** Hold a quiet vigil to honor those who carried you.
- **Tone Tag:** Reflective, Joyful
- **Region Tag:** Remembrance Hall — Cross-Domain
- **Resonance Tag:** Renewal
- **Narrative Purpose:** Communal ceremony that confers small resilience boons.
- **Choice Variations:**
  1. Share words softly (safe)
  2. Sing a verse that risks a catch in your voice (risky)
  3. Invite others to add names to the light
  4. Wait for vigil_light for stronger effect
- **Triggers:** vigil_light
- **Consequences:** Verse may falter but inspires more deeply when it lands
- **Recursion Variant:** Participation and verses vary
- **Hidden Conditions:** Extra boon if a ledger was amended
- **Enemy/Corruption Interactions:** None by default; any corruption appears only on hidden branch or surge (gated surge/hidden)

#### Node Metadata
id: node_249
act: 3
resonance: [Renewal]
resonance_alias: [Echoes]
region_id: remembrance_hall
subregion_id: cross_domain
region_state: Vigil
tone_tags: [reflective, joyful]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

---

### Node 250: Pulse Arrival Sync
- **Short Description:** Align your personal rhythm with the hub's opening Pulse window.
- **Tone Tag:** Awe, Harmonic
- **Region Tag:** Nexus Gate — Arrival Platform
- **Resonance Tag:** Echoes
- **Narrative Purpose:** Introduces hub timing; grants first hub traversal optimization.
- **Choice Variations:**
  1. Breathe and match the baseline hum (safe)
  2. Force rapid sync to skip a cycle (risky)
  3. Observe others to copy optimal cadence
  4. Wait for pulse_peak for bonus imprint stability
- **Triggers:** pulse_sync
- **Consequences:** Rapid sync shortens next travel cooldown but risks minor desync note
- **Recursion Variant:** Hum frequency shifts per session seed
- **Hidden Conditions:** Extra stability if previous act ended on a harmony node
- **Enemy/Corruption Interactions:** None by default; any corruption appears only on alignment surge or hidden override (gated surge/hidden)

#### Node Metadata
id: node_250
act: 3
resonance: [Echoes]
resonance_alias: [Pulse]
region_id: nexus_gate
subregion_id: arrival_platform
region_state: Sync
tone_tags: [awe, harmonic]
danger_tier: Low
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 251: Checkpoint Pillar Imprint
- **Short Description:** Record a fresh CPS imprint to safeguard recent progress.
- **Tone Tag:** Mysterious, Harmonic
- **Region Tag:** Nexus Gate — Arrival Platform
- **Resonance Tag:** Pulse
- **Narrative Purpose:** Teaches imprint tradeoffs (speed vs fidelity).
- **Choice Variations:**
  1. Standard imprint (balanced)
  2. Fast imprint (risky, lower fidelity)
  3. Deep imprint (slower, grants rollback buffer)
  4. Wait for imprint_window to widen
- **Triggers:** imprint_window
- **Consequences:** Fast option reduces next imprint cooldown; deep grants rollback token
- **Recursion Variant:** Window width and token cap vary
- **Hidden Conditions:** Extra rollback if arrival sync perfect
- **Enemy/Corruption Interactions:** None by default; any corruption appears only on alignment surge or hidden override (gated surge/hidden)

#### Node Metadata
id: node_251
act: 3
resonance: [Pulse]
resonance_alias: [Echoes]
region_id: nexus_gate
subregion_id: arrival_platform
region_state: Imprint
tone_tags: [mysterious, harmonic]
danger_tier: Low
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 252: Resonance Allocation Console
- **Short Description:** Distribute limited resonance charges between Swift Gate and Safe Imprint modes.
- **Tone Tag:** Mysterious, Harmonic
- **Region Tag:** Nexus Gate — Resonance Relay Core
- **Resonance Tag:** Pulse
- **Narrative Purpose:** Introduces strategic allocation affecting travel vs checkpoint strength.
- **Choice Variations:**
  1. Even split (balanced)
  2. Favor Swift Gate (faster travel, weaker imprint)
  3. Favor Safe Imprint (stronger imprint, slower travel)
  4. Wait for relay_cycle to highlight optimal channels
- **Triggers:** relay_cycle
- **Consequences:** Allocation defines temporary hub-wide modifiers
- **Recursion Variant:** Charge pool and decay curve vary
- **Hidden Conditions:** Hidden bonus if previous node deep imprint chosen
- **Enemy/Corruption Interactions:** None by default; any corruption appears only on alignment surge or hidden override (gated surge/hidden)

#### Node Metadata
id: node_252
act: 3
resonance: [Pulse]
resonance_alias: [Echoes]
region_id: nexus_gate
subregion_id: resonance_relay
region_state: Allocation
tone_tags: [mysterious, harmonic]
danger_tier: Low
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 253: Echo Damping Adjustment
- **Short Description:** Fine-tune damping filters to reduce unwanted paradox feedback.
- **Tone Tag:** Awe, Mysterious
- **Region Tag:** Nexus Gate — Resonance Relay Core
- **Resonance Tag:** Echoes
- **Narrative Purpose:** Encourages preparation before entering recursion or loop regions.
- **Choice Variations:**
  1. Standard damping (balanced)
  2. Over-damp (safer, slower echo gain)
  3. Under-damp (risky, faster echo gain)
  4. Wait for damping_phase to display projections
- **Triggers:** damping_phase
- **Consequences:** Under-damp grants faster skill echo synergy but raises anomaly chance (documented, gated surge)
- **Recursion Variant:** Projection accuracy varies
- **Hidden Conditions:** Extra precision if Swift Gate mode active
- **Enemy/Corruption Interactions:** None by default; any corruption appears only on alignment surge or hidden override (gated surge/hidden)

#### Node Metadata
id: node_253
act: 3
resonance: [Echoes]
resonance_alias: [Pulse]
region_id: nexus_gate
subregion_id: resonance_relay
region_state: Damping
tone_tags: [awe, mysterious]
danger_tier: Low
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 254: Infusion Schema Selection
- **Short Description:** Select a micro-infusion schema to refine a chosen skill.
- **Tone Tag:** Harmonic, Reflective
- **Region Tag:** Nexus Gate — Skill Infusion Alcoves
- **Resonance Tag:** Echoes
- **Narrative Purpose:** Grants sustainable progression without high-risk fusion.
- **Choice Variations:**
  1. Efficiency schema (cost ↓)
  2. Harmony schema (multi-tag synergy ↑)
  3. Resilience schema (rollback protection)
  4. Wait for infusion_cycle to reveal rare variant
- **Triggers:** infusion_cycle
- **Consequences:** Schema persists until overwritten or full fusion event
- **Recursion Variant:** Variant appearance cadence varies
- **Hidden Conditions:** Rare variant more likely if Safe Imprint was favored
- **Enemy/Corruption Interactions:** None by default; any corruption appears only on alignment surge or hidden override (gated surge/hidden)

#### Node Metadata
id: node_254
act: 3
resonance: [Echoes]
resonance_alias: [Pulse]
region_id: nexus_gate
subregion_id: skill_infusion_alcoves
region_state: Infusion
tone_tags: [harmonic, reflective]
danger_tier: Low
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 255: Memory Fragment Curation
- **Short Description:** Select sanitized memory fragments to preview distant region hooks.
- **Tone Tag:** Awe, Reflective
- **Region Tag:** Nexus Gate — Memory Echo Board
- **Resonance Tag:** Echoes
- **Narrative Purpose:** Offers safe lore choices influencing travel priorities.
- **Choice Variations:**
  1. Choose a mild lore fragment (balanced)
  2. Choose an intense fragment (risky insight)
  3. Compile a composite (slower, broad hints)
  4. Wait for curation_wave to surface rare prompt
- **Triggers:** curation_wave
- **Consequences:** Intense fragment gives stronger hint but minor cooldown penalty
- **Recursion Variant:** Fragment pools shift over timeline index
- **Hidden Conditions:** Composite bonus if echo damping over-damped earlier
- **Enemy/Corruption Interactions:** None by default; any corruption appears only on alignment surge or hidden override (gated surge/hidden)

#### Node Metadata
id: node_255
act: 3
resonance: [Echoes]
resonance_alias: [Pulse]
region_id: nexus_gate
subregion_id: memory_echo_board
region_state: Curation
tone_tags: [awe, reflective]
danger_tier: Low
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 256: Guided Echo Replay
- **Short Description:** Replay a curated echo to gain a temporary synergy buff.
- **Tone Tag:** Harmonic, Reflective
- **Region Tag:** Nexus Gate — Memory Echo Board
- **Resonance Tag:** Pulse
- **Narrative Purpose:** Reinforces safe use of echoes for preparation.
- **Choice Variations:**
  1. Brief replay (short buff)
  2. Extended replay (longer, mild cooldown penalty)
  3. Layer two short replays (combination)
  4. Wait for replay_sync for cleaner visuals
- **Triggers:** replay_sync
- **Consequences:** Extended replay overlaps with travel window timing
- **Recursion Variant:** Buff synergy tags rotate
- **Hidden Conditions:** Combination yields extra synergy if allocation favored Swift Gate
- **Enemy/Corruption Interactions:** None by default; any corruption appears only on alignment surge or hidden override (gated surge/hidden)

#### Node Metadata
id: node_256
act: 3
resonance: [Pulse]
resonance_alias: [Echoes]
region_id: nexus_gate
subregion_id: memory_echo_board
region_state: Replay
tone_tags: [harmonic, reflective]
danger_tier: Low
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 257: Gate Cost Harmonize
- **Short Description:** Perform a brief harmonic act to reduce next traversal cost.
- **Tone Tag:** Harmonic, Awe
- **Region Tag:** Nexus Gate — Traversal Gate Array
- **Resonance Tag:** Pulse
- **Narrative Purpose:** Encourages planning before departure.
- **Choice Variations:**
  1. Simple tone alignment (safe)
  2. Complex chord (risky, bigger reduction)
  3. Group resonance weave (shared moderate reduction)
  4. Wait for gate_cycle to maximize effect
- **Triggers:** gate_cycle
- **Consequences:** Complex chord risks minor desync reducing echo gain rate
- **Recursion Variant:** Base costs shift per recent destination diversity
- **Hidden Conditions:** Group weave stronger if resonance allocation even split
- **Enemy/Corruption Interactions:** None by default; any corruption appears only on alignment surge or hidden override (gated surge/hidden)

#### Node Metadata
id: node_257
act: 3
resonance: [Pulse]
resonance_alias: [Echoes]
region_id: nexus_gate
subregion_id: traversal_gate_array
region_state: Harmonize
tone_tags: [harmonic, awe]
danger_tier: Low
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 258: Destination Gate Selection
- **Short Description:** Choose a destination region; calibrate cost modifiers.
- **Tone Tag:** Mysterious, Harmonic
- **Region Tag:** Nexus Gate — Traversal Gate Array
- **Resonance Tag:** Echoes
- **Narrative Purpose:** Provides explicit routing decision point.
- **Choice Variations:**
  1. Select a known major region
  2. Probe for hidden pantheon entrance (risky)
  3. Queue multiple short hops (efficiency)
  4. Wait for selection_window to show bonus path
- **Triggers:** selection_window
- **Consequences:** Probing increases upcoming travel cooldown but may reveal hidden hall
- **Recursion Variant:** Hidden candidates rotate on timeline index
- **Hidden Conditions:** Bonus path chance rises if gate cost harmonized well
- **Enemy/Corruption Interactions:** None by default; any corruption appears only on alignment surge or hidden override (gated surge/hidden)

#### Node Metadata
id: node_258
act: 3
resonance: [Echoes]
resonance_alias: [Pulse]
region_id: nexus_gate
subregion_id: traversal_gate_array
region_state: Selection
tone_tags: [mysterious, harmonic]
danger_tier: Low
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 259: Alignment Surge Watch
- **Short Description:** Monitor for a rare cross-reality alignment surge.
- **Tone Tag:** Awe, Mysterious
- **Region Tag:** Nexus Gate — Traversal Gate Array
- **Resonance Tag:** Echoes
- **Narrative Purpose:** Foreshadows conditional Medium-tier anomalies and hidden routes.
- **Choice Variations:**
  1. Maintain standard watch (safe)
  2. Amplify sensors (risky, better early warning)
  3. Share telemetry with allies
  4. Wait for surge_glimmer to confirm onset
- **Triggers:** surge_glimmer
- **Consequences:** Amplify may trigger minor anomaly (gated surge note only)
- **Recursion Variant:** Surge probability curve differs by prior travel diversity
- **Hidden Conditions:** Early warning range larger if damping under-damped earlier
- **Enemy/Corruption Interactions:** None by default; any corruption appears only on alignment surge or hidden override (gated surge/hidden)

#### Node Metadata
id: node_259
act: 3
resonance: [Echoes]
resonance_alias: [Pulse]
region_id: nexus_gate
subregion_id: traversal_gate_array
region_state: SurgeWatch
tone_tags: [awe, mysterious]
danger_tier: Low
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

### Node 250: Legacy Lantern Choice
- **Short Description:** Choose how your gathered memories will guide the path ahead.
- **Tone Tag:** Reflective, Joyful
- **Region Tag:** Remembrance Hall — Cross-Domain
- **Resonance Tag:** Memory
- **Narrative Purpose:** Capstone that sets guidance style for later journeys.
- **Choice Variations:**
  1. Steady lantern for reliable small help (safe)
  2. Brilliant lantern for rare strong help (risky)
  3. Share lanterns widely for communal gains
  4. Hold back the light for a later need
- **Triggers:** vigil_light
- **Consequences:** Steady path yields consistency; brilliant path spikes aid
- **Recursion Variant:** Lantern behavior varies by earlier binds
- **Hidden Conditions:** Special boon if all four subregions were honored
- **Enemy/Corruption Interactions:** None by default; any corruption appears only on hidden branch or surge (gated surge/hidden)

#### Node Metadata
id: node_250
act: 3
resonance: [Memory]
resonance_alias: [Renewal]
region_id: remembrance_hall
subregion_id: cross_domain
region_state: Choice
tone_tags: [reflective, joyful]
danger_tier: Medium
links:
  sequential: []
  branches: []
  hidden: []
  event_driven: []

---

## Additional Notes
*** End Patch

- **Recursion Variant:** Each node has a recursion variant that affects future story paths.
- **Hidden Conditions:** Many nodes have hidden conditions that only certain alignments or skill sets can trigger.
- **Enemy/Corruption Interactions:** Many nodes have enemy or corruption interactions that affect the story.
- **Narrative Purpose:** Each node serves a specific narrative purpose in the story.

---

## Implementation Appendix

- Node data contract (for parsers):
  - Node ID: integer (1–80)
  - Node Name: string
  - Short Description: string (<= 280 chars recommended)
  - Tone Tag: comma-separated keywords (e.g., "Dark, graphic, tragic")
  - Region Tag: canonical region name
  - Resonance Tag: single keyword (e.g., "Karma", "Renewal", "Paradox")
  - Narrative Purpose: brief intent statement
  - Choice Variations: 4–8 list items, imperative phrasing
  - Triggers: 1–2 short phrases
  - Consequences: 1–3 outcome statements (stateful)
  - Recursion Variant: single sentence describing loop deviation
  - Hidden Conditions: 1 sentence with condition + reward/effect
  - Enemy/Corruption Interactions: 1 sentence on conflict hooks

- Parsing hints (regex-friendly headings):
  - Section start: ^### Node (?<id>\d+): (?<title>.+)$
  - Field start: ^- \*\*(?<field>[^*]+)\*\*: (?<value>.+)$
  - Choice lines: ^\s{2}\d+\.\s+(?<choice>.+)$

- Tag guidance:
  - Tone tags: Awe, Mystery, Tension, Intrigue, Dark, Graphic, Sad, Joyful, Hopeful, Surreal, Reflective, Climactic, Philosophical, Heroic, Urgent, Competitive
  - Resonance tags: First Contact, Division, Echoes, Pulse, Karma, Paradox, Awakening, Forbidden Knowledge, Recursion, Unity, Truth, Reckoning, Fusion, Collapse, Final Judgment, Renewal, Final Pulse, Infinity, Legacy, Discovery, Balance, Worthiness, Mystery, Purification, Wisdom, Trade, Instability, Revelation, Glory, Rivalry, Knowledge, Betrayal, Restoration, Fate, Beauty, Catharsis, Loss, Healing, Insanity, Redemption, Longing, Parting, Reflection, Power, Solidarity, Eternity

- Implementation notes:
  - Nodes are grouped: Act I (1–10), Act II (11–20), Free Exploration (21–80).
  - Each node is self-contained and can be instanced independently; state hooks: karma, resonance, corruption, faction reputation.
  - Choice count is capped at 4 for readability; extend to 6–8 during implementation if UI supports it.
  - Keep Region Tag values canonical to ensure fast lookup and fast-travel integration.
  - For recursion, store a per-node seed to vary puzzles and encounters deterministically.
