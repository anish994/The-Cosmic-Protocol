# CPS Dialogue Template System

This system provides reusable, adaptive dialogue templates driven by Dialogue Tone Rules, Character Interaction Matrices, Narrative Rules, Story Nodes, and Skills Integration. Templates are tag-based and condition-aware; they output lines only when their gates match the current game state.

Dependencies
- Narrative rules: `narrative-rules.md` (sections 2,3,7–11, Appendices)
- Skills Integration: `skills-integration.md` (skill tags, fusion rules, NPC/region logic)
- Story Nodes: `story-nodes.md` (node tags, act, region, boss, event flags)
- Characters: `characters.md` (archetypes, factions, loop memories)

---

## Part 1 — Template Contract and Variables

Canonical variables (read-only)
```yaml
vars:
	speaker: { id, name, archetype, faction }
	target: { id, name, relationship }
	player:
		alignment: alignment_types
		resonance: { tag: resonance_tags, value: resonance_value_bands }
		corruption: { level: None|Low|Medium|High|Critical }
		skills: [skill_types]
		lore_tags: [skill_lore_tags]
		fusions: [string]           # e.g., "Light+Echo"
		loop: { count: int, has_loop_memory: bool }
	region: { id, name, state: region_states }
	node: { id, act, tags: [string], boss?: bool, is_major?: bool }
	events: { last_boss_defeated?: bool, restoration?: bool, surge?: bool }
	secrets: { discovered?: bool, memory_keys?: [string] }
	conversation:
		turn: int
		topics_active: [string]      # e.g., ['quest','region','memory']
		last_lines_cache: [string]
		bias: { safety: float, spice: float, lore: float }
		persona_lock?: bool          # keep voice tightly consistent
	anchoring_facts: [ { id, text, source, canonical: bool } ]
	lore_refs: [ { tag, weight } ]
	visual:
		cue_allowed: bool
		assets_hint?: [ { type: image|sfx|video, key: string } ]
```

Template object (authoring)
```yaml
template:
	id: string
	gates: [condition]
	weight?: int                   # relative selection weight
	style?: { tone?: string, cadence?: string, register?: string }
	lines: [ string ]              # use placeholders like {speaker.name}, {region.state}
```

Condition mini-language
```yaml
condition:
	all|any|not: [ tests... ]

test:
	eq: [path, value]              # eq: [player.resonance.tag, "Echoes"]
	in: [path, [values...]]
	gt|lt|ge|le: [path, number]
	has: [path, value]             # membership in arrays
	flag: path                     # truthy check
```

---

## Part 2 — Dialogue Tone Rules

Tone matrix (resonance × corruption × alignment → tone set)
| Resonance Tag | Corruption Band | Alignment Axis | Tone Keywords |
|---|---|---|---|
| Echoes | Low/Med | Good/Neutral | reflective, harmonic, gentle confidence |
| Echoes | High+ | Any | fragmented, urgent, echo-lag |
| Paradox | Any | Any | recursive, riddled, time-skewed |
| Renewal | Any | Good/Lawful | warm, restorative, patient |
| Collapse | Med/High | Any | brittle, clipped, unstable |
| Unity | Low | Any | inclusive, we-threaded |
| ForbiddenKnowledge | Any | Any | hushed, veiled, precise |

Tone derivation logic
```yaml
tone_rules:
	- if: eq: [player.resonance.tag, Echoes]
		then: add_tone: ["harmonic", "reflective"]
	- if: ge: [player.corruption.level, High]
		then: add_tone: ["brittle", "urgent"]
	- if: in: [player.alignment, [Lawful, Good]]
		then: add_tone: ["measured", "assured"]
```

Lexicon nudge packs (attach by tone tags)
```yaml
lexicon:
	harmonic: { verbs: ["resonate","attune"], nouns: ["chord","echo"], style: "lyrical" }
	brittle:  { verbs: ["crack","splinter"], nouns: ["shard","stress"], style: "staccato" }
	recursive:{ verbs: ["recur","return"], nouns: ["loop","spiral"], style: "elliptic" }
```

---

## Part 3 — Character Interaction Matrices

Archetype × player signals → variant
| Archetype | Likes | Dislikes | Greeting Bias |
|---|---|---|---|
| Scholar | Knowledge, Echo, Time | Corruption, Shadow | formal, curious |
| Healer | Bloom, Light, Social | Void, Combat spam | warm, reassuring |
| Warden | Lawful, Stone, Metal | Shadow, Chaos | terse, procedural |
| Underveil | Shadow, Void, Stealth | Light, Lawful | sly, coded |

Disposition hook
```yaml
interaction_bias:
	- if: in: [player.skills, [Social, Knowledge]] and eq: [speaker.archetype, Scholar]
		then: set_bias: "formal-curious"
	- if: in: [player.lore_tags, [Bloom, Light]] and eq: [speaker.archetype, Healer]
		then: set_bias: "warm-reassuring"
```

---

## Part 4 — Template DSL (placeholders and gates)

Placeholder syntax
- Curly braces: {player.resonance.tag}, {speaker.name}
- Optional segments: [[text]] (render only if previous condition added a matching tone or flag)
- Choice pool: {choose: key} resolves to weighted options from pools

Choice pools
```yaml
pools:
	honorifics: ["Wayfarer","Heir","Witness"]
	echo_titles: ["Resonant One","Chord-Bearer"]
```

---

## Part 5 — Reusable Template Sets

Note: Lines are skeletal; they are patterns to be flavored by lexicon packs and tone tags.

### 5.1 Greeting Variations
```yaml
greetings:
	- id: greet.default
		gates: [ any: [ ] ]
		lines:
			- "{speaker.name}: Greetings, {choose: honorifics}."
	- id: greet.scholar.bias
		gates:
			- all:
				- eq: [speaker.archetype, Scholar]
				- flag: interaction_bias==formal-curious
		lines:
			- "{speaker.name}: Knowledge seeks you, {choose: echo_titles}."
	- id: greet.shadow.faction
		gates:
			- all:
				- eq: [speaker.faction, Underveil]
				- in: [player.lore_tags, [Shadow, Void]]
		lines:
			- "{speaker.name}: Keep your light low; the alleys remember."
```

### 5.2 Corruption-Level Variations
```yaml
corruption_variants:
	- id: corr.low
		gates: [ eq: [player.corruption.level, Low] ]
		lines: [ "The air frets, but holds." ]
	- id: corr.high
		gates: [ in: [player.corruption.level, [High, Critical]] ]
		lines: [ "Every word splinters under pressure." ]
```

### 5.3 Resonance-Based Tone Shifts
```yaml
resonance_tone:
	- id: res.echo
		gates: [ eq: [player.resonance.tag, Echoes] ]
		lines: [ "Your echo precedes you, soft and true." ]
	- id: res.paradox
		gates: [ eq: [player.resonance.tag, Paradox] ]
		lines: [ "We have this talk again, and again, and yet." ]
```

### 5.4 Ally/Enemy Faction Variants
```yaml
faction_variants:
	- id: fac.ally
		gates:
			- all:
				- eq: [speaker.faction, player.faction]
				- not: [ eq: [speaker.faction, null] ]
		lines: [ "We move as one thread today." ]
	- id: fac.enemy
		gates:
			- all:
				- not: [ eq: [speaker.faction, player.faction] ]
				- flag: speaker.faction
		lines: [ "Your sigil frays this ground." ]
```

### 5.5 Death-Loop Aware Lines
```yaml
death_loop:
	- id: loop.first
		gates: [ eq: [player.loop.count, 1] ]
		lines: [ "You carry the first echo of ending." ]
	- id: loop.multi
		gates: [ gt: [player.loop.count, 1] ]
		lines: [ "Your steps are grooved in time's wood." ]
	- id: loop.memory
		gates: [ flag: player.loop.has_loop_memory ]
		lines: [ "Some doors remember you back." ]
```

### 5.6 Post-Boss Variations
```yaml
post_boss:
	- id: boss.win.guardian
		gates:
			- all:
				- flag: events.last_boss_defeated
				- flag: node.boss
		lines: [ "The pattern breaks; the room exhales." ]
```

### 5.7 Post-Region Changes
```yaml
post_region:
	- id: region.restored
		gates:
			- all:
				- eq: [region.state, Restored]
				- flag: events.restoration
		lines: [ "Color returns to the seams of things." ]
```

### 5.8 Secret Dialogue (Hidden Triggers)
```yaml
secret_dialogue:
	- id: secret.echo
		gates:
			- all:
				- flag: secrets.discovered
				- has: [secrets.memory_keys, EchoDoor]
		lines: [ "Hush—the door inside the door." ]
```

### 5.9 Ambient Whispers
```yaml
ambient_whispers:
	- id: ambient.resonant
		gates: [ flag: events.surge ]
		lines: [ "—listen—listen—your name, reversed—" ]
```

### 5.10 Mythic Chants
```yaml
mythic_chants:
	- id: chant.unity
		gates: [ eq: [player.resonance.tag, Unity] ]
		lines: [ "Thread to thread, we bind the torn." ]
```

### 5.11 Region Atmospheric Narration
```yaml
region_atmo:
	- id: atmo.corrupted
		gates: [ eq: [region.state, Corrupted] ]
		lines: [ "The horizon chews its own line." ]
	- id: atmo.resonant
		gates: [ eq: [region.state, Resonant] ]
		lines: [ "Air hums with choices unmade." ]
```

---

## Part 6 — Skills Integration Hooks

Skill-driven modifiers
```yaml
dialogue_skill_hooks:
	- if: in: [player.skills, [Social]]
		then: add_pool: { honorifics: ["Friend"] }
	- if: in: [player.lore_tags, [Light]] and eq: [region.state, Corrupted]
		then: prepend_template: post_region.region.restored
	- if: has: [player.fusions, "Light+Echo"]
		then: add_tone: ["awe"], add_pool: { echo_titles: ["Ascendant"] }
```

---

## Part 7 — Assembly Order and Selection

Render order
1) Atmo (region), 2) Ambient (if any), 3) Greeting, 4) Faction/Resonance/Corruption overlays, 5) Secret, 6) Post-boss/region notes.

Selector logic
```yaml
selector:
	- collect: all templates whose gates pass
	- apply: tone_rules → attach lexicon packs
	- weight: base 1 + bias + rarity (if mythic)
	- choose: top-N lines by weight, resolve {choose: } pools
	- filter: avoid repeats within last K scenes
	- anchor: retrieve from canon_anchors.md (top-k)
	- persona: apply rules from npc-personas.md if available
	- topic: consult topic_graph (npc-personas.md) for next topic hint
```

---

## Part 8 — QA Scenarios and Notes

Quick scenarios
1) Scholar in Resonant region with Echo tag, Low corruption → formal-curious greeting + res.echo line.
2) Underveil NPC, player with Shadow+Void in Corrupted region → sly greeting + safe-lane hint.
3) After boss fight in Evolving region → post_boss + region narration.
4) Secret unlocked with EchoDoor → secret whisper appended.

Localization guidance
- Keep placeholders intact; avoid inflecting variable tokens.
- Lexicon packs should be translated as sets to preserve tone.

Everything adheres to CPS tone (resonant, mythic, reality-aware) and universe laws via tag-driven gates from Narrative Rules and Skills Integration.

---

## Part 9 — Conversational Layering Engine (Alive + Natural)

Pipeline overview
1) Base Template: select skeletal line by gates.
2) Situational Overlays: add corruption/resonance/faction/region layers.
3) Memory Infusion: fetch NPC episodic/relational/emotional memories; inject references.
4) Emotional Modulation: adjust tone and lexicon via current emotion and drive.
5) Micro-Beat Injection: add short fillers (breaths, hesitations), gestures, or ambient cues.
6) Lightweight Mutation: synonym swaps, cadence tweaks, and register shifts.
7) Multi-Turn Coherence: maintain topic threads; dampen repeats.

Cross-refs
- Persona/Topics: see `npc-personas.md`
- Anchors: see `canon_anchors.md`
- Storylets: see `storylets-act1.md`

### 9.1 NPC Memory & Persona Model
```yaml
npc_memory:
	slots:
		episodic: [ event_id, node_id, timestamp ]            # specific shared events
		relational: [ { target_id, trust, fear, awe } ]        # player/NPC relations
		emotional: [ { mood, intensity, decay } ]              # current mood with decay
	retention:
		- important events pin longer; minor decay per scene
	retrieval:
		- prefer recent + high-intensity memories for infusion

persona:
	drives: [ protect, seek, ascend, corrupt, obey, rebel ]
	style_bias: [ terse, lyrical, clinical, sardonic ]
```

Memory infusion rules
```yaml
memory_infusion:
	- if: npc_memory.episodic contains event_id==events.last_boss_defeated
		then: inject: "[[I remember how you broke the pattern.]]"
	- if: relational.trust > 2
		then: inject: "[[I can be plain with you.]]"
	- if: emotional.mood == 'afraid' and intensity>1
		then: inject: "[[Keep your voice low.]]"
```

### 9.2 Emotion & Drive Matrix
| Drive \ Emotion | Calm | Anxious | Angry | Exultant |
|---|---|---|---|---|
| protect | reassuring, cautionary | clipped, scanning | firm, directive | proud, inclusive |
| seek | curious, open | eager, fidgety | demanding | triumphant |
| ascend | reverent, measured | urgent, visionary | zealous | ecstatic |
| corrupt | tempting, silky | needling | predatory | giddy |

Modulation rules
```yaml
emotion_mod:
	- if: drive=='protect' and emotion=='anxious'
		then: add_tone: ['brittle'], add_lex: ['scan','watch']
	- if: drive=='ascend' and emotion in ['calm','exultant']
		then: add_tone: ['harmonic'], add_lex: ['rise','thread']
```

### 9.3 Lightweight LM Mutation Rules (homemade)
```yaml
mutation:
	synonym_sets:
		greet: ["greet","hail","welcome"]
		see:   ["see","note","mark"]
	cadence:
		- rule: if tone includes 'brittle' -> shorten sentences, remove articles
		- rule: if tone includes 'harmonic' -> add soft alliteration 1/4 lines
	register:
		- formal: replace contractions, add honorifics
		- street: allow slang tokens from faction lexicon
	microbeats:
		- breath: ["…", "—", "(breath)"] weighted low
		- gesture: ["(glance)", "(tilt)", "(hands open)"] limited per scene
```

### 9.4 Multi-Turn Coherence Tracking
```yaml
conversation_state:
	topics: [ 'quest', 'region', 'boss', 'memory' ]
	last_lines_cache: N=5
	rules:
		- avoid repeating topic if used in last 2 turns unless new info
		- escalate detail within a topic over turns (tier 1→2→3)
		- permit callback to earlier memory if emotional intensity rises
```

### 9.5 Response Ranking & Variation
```yaml
ranker:
	score(line) = w1*novelty + w2*emotion_fit + w3*memory_relevance + w4*faction_consistency
	pick: top k distinct by surface form; ensure 1 safe, 1 spicy, 1 lore
```

### 9.6 Performance & Caching
```yaml
perf:
	precompute: tone overlays per (resonance, corruption, alignment)
	cache: lexicon packs and synonym choices per scene to keep style stable
	fallback: if memory fetch fails -> skip infusion, keep base line
```

### 9.7 Authoring & Tuning Guidelines
- Keep base templates short; let layers add color.
- Use injection brackets [[like this]] for optional memory beats.
- Prefer tone tags over hardcoding adjectives; lexicon packs carry the style.
- Test with QA scenarios that vary only one axis at a time.

---

## Part 10 — Dialogue Acts (DA) and Story Actions Bridge

Dialogue acts provide intent-level control that maps cleanly to story actions and disposition shifts.

DA set
```yaml
dialogue_acts: [ inform, ask, challenge, empathize, confess, promise, misdirect, threaten, persuade, recruit ]
```

Mapping to story actions and disposition
```yaml
da_mapping:
	inform:     { story_action: Reveal,     disposition: { trust:+0, awe:+0, suspicion:-1 } }
	ask:        { story_action: Investigate,disposition: { trust:+0, awe:+0, suspicion:0 } }
	challenge:  { story_action: Provoke,    disposition: { fear:+1, trust:-1 } }
	empathize:  { story_action: Soothe,     disposition: { trust:+1, suspicion:-1 } }
	confess:    { story_action: Sanctify,   disposition: { trust:+1, awe:+1 } }
	promise:    { story_action: Repair,     disposition: { trust:+1 } }
	misdirect:  { story_action: Deceive,    disposition: { suspicion:+1 } }
	threaten:   { story_action: Intimidate, disposition: { fear:+1, trust:-1 } }
	persuade:   { story_action: Persuade,   disposition: { trust:+1 } }
	recruit:    { story_action: Conjure,    disposition: { awe:+1 } }
```

DA selector (influenced by skills)
```yaml
da_selector:
	- if: in: [player.skills, [Social]] -> bias(acts=[persuade, empathize], +0.3)
	- if: in: [player.lore_tags, [Shadow, Void]] -> bias(acts=[misdirect, threaten], +0.2)
	- if: has: [player.fusions, "Light+Echo"] -> bias(acts=[confess, promise], +0.2)
```

Template use
```yaml
template:
	id: npc.request.info
	gates: [ any: [ ] ]
	act: ask
	lines:
		- "{speaker.name}: Tell me what you saw in the {region.id}."
```

Effects
```yaml
on_emit:
	- apply: da_mapping[template.act].disposition
	- trigger: skills-integration.story_actions(da_mapping[template.act].story_action)
```

---

## Part 11 — Topic Graph and Curiosity Prompts

Keep conversations exploratory with a per-NPC topic graph.

Schema
```yaml
topic_graph:
	nodes: [ { id, label, rarity: common|rare|mythic, decay: float } ]
	edges: [ { from, to, weight, gate?: condition } ]
	curiosity_prompts:
		- when: no_progress>=2
			say: "[[There is more beneath the {region.id}.]]"
		- when: topic_locked
			say: "[[You are not ready for that thread.]]"
```

Selection
```yaml
topic_select:
	- prefer: unused within last 2 turns
	- weight: rarity + edge.weight + novelty
	- allow: re-entry if decay < threshold
```

---

## Part 12 — Persona Micro‑DSL (Voice Constraints)

Per-NPC voice rules to maintain strong identity without templates feeling stitched.

DSL
```yaml
persona_dsl:
	voice:
		register: formal|street|clinical|lyrical
		tempo: slow|medium|fast
		metaphor_palette: [ stone, echo, light, machinery ]
		taboo: [ words_or_topics ]
		oath_pack?: [ "By the Loom", "On my sigil" ]
	enforce:
		- rule: no more than 1 metaphor per line unless exultant
		- rule: ban slang if register==formal
		- rule: prefer active voice
```

Application
```yaml
persona_apply:
	- fetch: speaker.persona
	- constrain: mutation.register/cadence/lexicon by persona_dsl.voice
	- filter: lines violating taboo
```

---

## Part 13 — Procedural Storylet Emission (Dialogue → Micro-Nodes)

Dialogue can spawn small, self-contained storylets that behave like nodes without pre-authoring.

Contract
```yaml
storylet:
	id: auto.sl.{hash}
	tags: [ region:{region.id}, resonance:{player.resonance.tag} ]
	gate: condition
	choices: [ { id, label, act: dialogue_acts, outcome: { resonance_delta?, memory_key?, reward? } } ]
	ttl: 1-3 scenes
```

Emission rules
```yaml
emit_rules:
	- if: act==ask and topic=="echo_sanctum" and region.state==Resonant
		then: spawn(storylet with choice "Follow the hum")
	- if: act==confess and npc.trust>=2
		then: spawn(storylet with choice "Share the hidden name")
```

Integration
```yaml
on_storylet_choice:
	- write: story-nodes.memory_keys += choice.outcome.memory_key
	- apply: skills-integration.triggers per outcome
```

---

## Part 14 — Canon Anchoring & Safeguards

Keep generations inside lore bounds while feeling free.

Anchoring
```yaml
canon_anchor:
	retrieve: top-k anchoring_facts by relevance
	require: at least 1 anchor per 2 lines in major scenes
	cite_token: "{anchor:id}" (hidden; for QA only)
```

Mythic constraints
```yaml
mythic_guard:
	forbid: contradictions with resonance laws (e.g., Light+Corruption unless quest flag)
	throttle: meta awareness per meta_awareness_policy.md
	fallback: if contradiction risk>threshold -> swap to symbolic/metaphor phrasing
```

Out-of-canon fallback
```yaml
fallback_lines:
	- "Truth bends here, but law holds; say only what is safe."
```

---

## Part 15 — Visual/SFX Cues

Tie dialogue beats to assets for the illusion of presence.

Cue spec
```yaml
cue:
	id: string
	when: condition
	asset: { type: image|video|sfx, key: string }
	intensity?: low|med|high
```

Examples
```yaml
visual_hooks:
	- when: eq: [region.state, Corrupted]
		asset: { type: image, key: "fx_corruption_mist.png" }
	- when: flag: events.restoration
		asset: { type: sfx, key: "chime_restoration.mp3" }
```

---

## Part 16 — Paraphrase & Grammar Mutation (Beyond Synonyms)

Richer variation without losing meaning.

Transforms
```yaml
paraphrase:
	grammar:
		- tense_shift: keep meaning, vary rhythm
		- clause_flip: subordinate → main where style allows
		- rhetorical: add parallelism/anaphora at low rate when tone==harmonic
	constraints:
		- preserve anchors and variable slots
		- max 1 transform per line unless mythic scene
	randomness:
		seed: scene_id + speaker.id
		temperature: 0.15 (stable)
```

---

## Part 17 — Multi‑Turn Sample (End‑to‑End)

Context
```yaml
player: { lore_tags:[Light,Echo], skills:[Social, Magic], fusions:["Light+Echo"], resonance.tag: Echoes }
region: { id: nexus_gate, state: Corrupted }
speaker: { name: Vayun, archetype: Scholar, faction: echo_order }
conversation: { turn:1, topics_active:["region","memory"], bias:{ safety:0.4, spice:0.2, lore:0.6 } }
```

Turn 1
```yaml
select: greet.scholar.bias → act=inform (mapped Reveal)
line: "Vayun: Knowledge seeks you, Resonant One. [[Color returns to the seams of things.]]"
effects: trust+1; trigger post_region if cleanse just occurred; cue chime_restoration
```

Turn 2
```yaml
DA: ask → topic_select("echo_sanctum")
line: "Vayun: What did the Gate sing when it opened?"
storylet: spawn auto.sl.hum → choice "Follow the hum" (Investigate)
```

Turn 3
```yaml
player_action: Redeem (from Echo+Light) → DA bias to confess/promise
line: "Vayun: [[I can be plain with you.]] The chord rose when you stepped through."
effects: awe+1, trust+1; unlock redemption witness hook
```

Turn 4
```yaml
topic_reentry: "memory" with decay satisfied
line (paraphrased with harmonic): "Vayun: Your echo returns, returns—soft, sure."
```

QA anchors
```yaml
anchors used: [ {id:"pantheon.echo_gate", canonical:true} ]
```

---

## Part 18 — Quality Gates & Anti‑Repetition Heuristics

Line eligibility
```yaml
quality_gates:
	max_repeat_surface: 0 within last 5 lines
	max_repeat_topic: 1 within last 2 turns unless new_info:true
	require_anchor_major: 1 per 2 lines in major scenes
	persona_violation: drop line if taboo hit or register mismatch
```

Heuristics
```yaml
anti_repeat:
	decay_recent_phrases: yes
	rotate_synonym_sets: true
	escalate_detail_on_reentry: true
```

---

## Part 19 — Narrative Camera & SFX Layering (Text‑First Presence)

Camera beats (no animation required)
```yaml
camera:
	close:   "(voice low)"
	medium:  "(glance)"
	wide:    "(the hall hushes)"
	cutaway: "(distant chime)"
```

SFX mix
```yaml
sfx_layers:
	corrupted: [ "fx_corruption_mist.png", "amb_drone_low.mp3" ]
	restored:  [ "glow_soft.png", "chime_restoration.mp3" ]
```

Usage
```yaml
on_tone:
	- if: includes(tone,[brittle]) -> cue: camera.close
	- if: events.restoration -> cue: sfx restored
```

---

## Part 20 — Dynamic Choice Generation & Action Palette Bias

Bias the UI action palette from conversation state and DA.
```yaml
choice_bias:
	- if: template.act==ask and topic=="echo_sanctum" -> promote action Investigate
	- if: template.act==confess and npc.trust>=2 -> promote action Sanctify/Repair
	- if: speaker.archetype==Underveil and player.lore_tags includes Shadow -> promote Stealth routes
```

---

## Part 21 — Runtime API Contract (I/O)

Inputs
```yaml
request:
	scene_id: string
	vars: (see Part 1)
	recent_lines: [string]
	desired_k: int
```

Outputs
```yaml
response:
	lines: [ { text, act?, topic?, cues?: [camera|sfx], anchors?: [id], provenance: { template_id, persona_id? } } ]
	spawned_storylets?: [ storylet.id ]
	disposition_delta?: { trust?, fear?, awe?, suspicion? }
	ui_bias?: { promote_actions: [string] }
```

Error handling
```yaml
fallback:
	- if: no lines pass quality_gates -> emit safe neutral line + anchor
	- if: anchors retrieval fails -> skip anchor requirement for this turn
```

