# CPS Skills Integration System

This document integrates the Skills Matrix, Card System, Story Nodes, and Narrative Rules into a single adaptive, tag-based system. It specifies contracts, mappings, fusion rules, and logic triggers so every skill becomes a narrative lever and a gameplay toy.

Dependencies
- Narrative rules: `World Bible folder/narrative-rules.md`
- Card system: `CARD_SKILL_SYSTEM_DESIGN.md` and `SKILL_SYSTEM.md`
- Story content: `story-nodes.md` and characters in `characters.md`
- Skill source: 03-skill-matrix-engines.html (visualization of 1000+ base skills and fusions)

Scope and success criteria
- Every skill entry includes: lore tag, resonance effect, narrative effect, region interaction, quest interaction, character interaction, corruption interaction, fusion variations.
- Create complete trigger sets: skill→story, skill→dialogue, skill→region, skill→boss, skill→ending.
- All behaviors are adaptive and tag-based, using canonical enums from narrative rules.

---

## 1) Canonical contracts and enums

Use the same enums defined in Narrative Rules (Appendix A). Skills add two orthogonal tag axes: skill_type and lore_tag.

Canonical enums (delta)
```yaml
skill_types: [Combat, Social, Knowledge, Stealth, Magic, Crafting, Unique]
skill_lore_tags: [Echo, Void, Bloom, Shadow, Light, Corruption, Metal, Storm, Stone, Blood, Time, Dream, Flame, Frost]
# New runtime enums for the action layer
action_modes: [Attack, Defend, Assist, Explore, Investigate, Converse, Craft, Ritual, Escape]
story_actions: [Persuade, Intimidate, Deceive, Reveal, Cleanse, Collapse, Scout, Disarm, Repair, Conjure, Sanctify, Profane, Soothe, Provoke]
ui_flags: [ShowRuleChips, ShowHeat, ShowDisposition, ShowSynergyHints, WarnParadox, PreviewOutcome]
```

Skill data contract
```yaml
skill:
	id: string                # canonical, kebab-case
	name: string
	cardId?: string           # if bound to a card in Card System
	rarity?: [Common, Uncommon, Rare, Epic, Legendary, Mythic]
	cost?: { energy?: int, focus?: int, cooldown?: int }
	skill_type: skill_types   # gameplay axis
	lore_tag: skill_lore_tags # narrative/lore axis (maps to resonance tags via crosswalk)
	tags: [string]            # freeform: e.g., [Bleed, Cleanse, Teleport]
	action_modes?: [action_modes]     # how this skill can be used in the action layer
	story_actions?: [story_actions]   # narrative verbs this skill unlocks in scenes
	ui_flags?: [ui_flags]             # UI surfacing preferences for this skill
	synergy_hooks?: [string]          # identifiers used by synergy rules (see §4.7)
	heat_tags?: [string]              # contributes to heat/suspicion categories (see §2a.4)
	resonance_effect: string  # short label, e.g., "Clarity Surge"
	narrative_effect: string  # short label, e.g., "Reveals hidden echo nodes"
	region_interaction: string
	quest_interaction: string
	character_interaction: string
	corruption_interaction: string
	fusion_variations: [string] # generated names like "Echo+Light: Ascendant Echo"
	unlocks?: { nodes?: [string], dialogues?: [string], regions?: [string], bosses?: [string], endings?: [string] }
	constraints?: { alignment?: [alignment_types], resonance?: { tag?: resonance_tags, min?: resonance_value_bands } }
```

Crosswalk: lore_tag → resonance_tag
```yaml
crosswalk:
	Echo: Echoes
	Void: Collapse
	Bloom: Renewal
	Shadow: Division
	Light: FinalJudgment
	Corruption: Collapse
	Metal: Pulse
	Storm: Pulse
	Stone: Fate
	Blood: Beauty
	Time: Eternity
	Dream: Catharsis
	Flame: Pulse
	Frost: Beauty
```

Rationale
- skill_type drives mechanical affordances (combat, stealth, etc.).
- lore_tag aligns with resonance thematics and narrative levers.

---

## 2) Tag-to-effect matrices (adaptive mappings)
---

## 2a) Deep Skills-Driven World & NPC Interactions

### Skills as Reality Shifters
- Skills can alter, destroy, or create regions, story nodes, and even game rules.
- Example: `Void Step` can erase barriers, open recursion loops, or collapse entire regions.
- `Bloom Heal` can restore lost lands, revive NPCs, or reverse corruption.
- `Corrupt Surge` can trigger apocalyptic events, mutate NPCs, or rewrite quest outcomes.

### NPCs: Dynamic, Skill-Responsive Personalities
- NPCs track player skill use and adapt their trust, fear, or alliance.
- Possess rare skills? NPCs may worship, challenge, or betray you.
- Use `Shadow Bind` often? NPCs in shadow factions offer secret deals, while lawful NPCs grow suspicious.
- Legendary fusions (e.g., `Echo+Light: Ascendant Echo`) unlock mythic NPC arcs, hidden societies, or world events.

### Exploration & Discovery
- Skills unlock new biomes, hidden sanctums, and alternate realities.
- Example: `Time Flux` reveals ancient ruins, future visions, or time-locked quests.
- `Dream Wave` opens dreamscapes, psychic links, or emotional storylines.
- Fusion skills can create entirely new quest chains, regions, or NPC types.

### Player Power & Vulnerability
- High skill mastery lets players rewrite fate, bypass impossible challenges, or trigger world-changing events.
- Lack of key skills means more danger, locked content, or unique "underdog" storylines.
- Skill use can shift alignment, resonance, and even the laws of physics in-game.

### Smart Adaptive Logic (YAML)
```yaml
skill_world_npc_interaction:
	- if: skill.lore_tag == Void and skill.skill_type == Stealth
		then: erase(barriers), open(recursion_loops), collapse(region)
	- if: skill.lore_tag == Bloom and skill.skill_type == Magic
		then: restore(region), revive(npc), reverse(corruption)
	- if: skill.lore_tag == Corruption and skill.skill_type == Unique
		then: trigger(apocalypse), mutate(npc), rewrite(quest_outcome)
	- if: skill.lore_tag == Time and skill.skill_type == Knowledge
		then: reveal(ancient_ruins), unlock(time_quests), warp(dialogue)
	- if: skill.lore_tag == Dream and skill.skill_type == Social
		then: open(dreamscape), link(psychic_npc), unlock(emotional_storyline)
	- if: fusion.includes(Echo) and fusion.includes(Light)
		then: unlock(mythic_npc_arc), reveal(hidden_society), trigger(world_event)
	- if: skill.usage_count > threshold and npc.faction == 'Shadow'
		then: offer(secret_deal), increase(trust)
	- if: skill.usage_count > threshold and npc.faction == 'Lawful'
		then: increase(suspicion), restrict(access)
	- if: player.lacks(skill_type='Combat') and region.threat_level > high
		then: increase(danger), unlock(underdog_storyline)
```

### Designer Tips
- Make every skill use visible: NPCs comment, regions change, story branches unlock.
- Let fusion skills create new rules, not just new effects.
- Use skill analytics to surface rare interactions and emergent gameplay.
- Encourage players to experiment—reward wild combos and creative solutions.

---

## 2a.1 NPC Disposition and Skill Reputation

NPCs evaluate player behavior via disposition axes and a skill reputation score that accumulates per tag and fusion.

Disposition model
| Axis | Meaning | Sources |
|---|---|---|
| Trust | Willingness to share/help | Echo, Bloom, Social, Light |
| Fear | Intimidation/avoidance | Combat, Void, Corruption, Storm |
| Awe | Mythic respect/reverence | Unique, Light+Echo fusions, Boss feats |
| Suspicion | Legal/moral scrutiny | Shadow, Stealth abuse, Corruption |

Archetype responses
| NPC Archetype | Likes | Dislikes | Special Notes |
|---|---|---|---|
| Scholar | Knowledge, Echo, Time | Corruption, Shadow | Shares lore keys, puzzle skips |
| Healer | Bloom, Light, Social | Void, Combat spam | Heals, grants cleanse charges |
| Warden | Lawful, Metal, Stone | Shadow, Chaos | Opens gates if Trust>Awe>Suspicion |
| Underveil | Shadow, Void, Stealth | Light, Lawful | Sells secrets, stealth contracts |

Logic: update disposition
```yaml
npc_disposition_update:
	- if: skill.lore_tag in [Echo, Bloom] or skill.skill_type == Social
		then: npc.trust += 1
	- if: skill.lore_tag in [Void, Corruption] or skill.skill_type == Combat
		then: npc.fear += 1
	- if: fusion.includes(Light) and fusion.includes(Echo)
		then: npc.awe += 2
	- if: skill.skill_type == Stealth and region.state == Corrupted
		then: npc.suspicion += 1  # patrols tighten in law-bound regions
	- if: npc.archetype == 'Scholar' and skill.skill_type == Knowledge
		then: unlock(dialogue='scholar_shortcut')
```

Gate logic
```yaml
npc_gate:
	- if: npc.trust >= 2 and npc.suspicion == 0
		then: open(gate), grant(key)
	- if: npc.fear >= 2 and npc.trust == 0
		then: demand(tribute) or start(encounter)
```

---

## 2a.2 Region Affordances by Skill & State

Region State × Lore Tag → Navigation/Hazard
| Region State | Echo | Void | Bloom | Shadow | Light | Corruption |
|---|---|---|---|---|---|---|
| Stable | Reveal shortcuts | Create rifts (risk) | Minor heals | Open shadow routes | Purify minor blight | N/A |
| Corrupted | Reveal sanctums | Widen corruption tears | Cleanse tiles | Safe stealth lanes | Cleanse fronts → Restored | Surge escalation |
| Resonant | Amplify echoes | Paradox links | Rapid regrowth | Mask resonance paths | Stabilize resonance | Chaos ripples |
| Evolving | Surface secrets | Collapse unstable paths | Heal evolving tiles | New hidden paths | Restore transitions | Spread to adjacent |
| Collapsed | Echo salvage | Phase-walk edges | Seed recovery | Slip through fissures | Temporary restoration | Deep rot |

Logic
```yaml
region_affordance:
	- if: region.state == Corrupted and skill.lore_tag == Light
		then: set(region.state, Restored), spawn(restoration_events)
	- if: region.state == Resonant and skill.lore_tag == Void
		then: enable(paradox_links), increase(hazard)
	- if: region.state == Collapsed and skill.lore_tag == Echo
		then: reveal(salvage_nodes), unlock(repair_quest)
```

---

## 2a.3 Reality Shift Safeguards & Costs

To keep reality-bending skills fun but fair, apply budgets, debts, and cooldowns.

Constraints
```yaml
reality_constraints:
	entropy_budget_per_act: 5         # number of major world-altering actions
	paradox_debt_cap: 3               # debt increases chance of recursion glitch
	cleanse_cooldown_turns: 2
	collapse_cooldown_turns: 3
	fusion_rarity_cap: Mythic         # fusion rarity cannot exceed this by default
```

Budget logic
```yaml
reality_accounting:
	- on: action in [collapse(region), restore(region), rewrite(quest_outcome)]
		do: entropy_budget_per_act -= 1
	- if: entropy_budget_per_act < 0
		then: add(paradox_debt), trigger(minor_glitch)
```

---

## 2a.4 Balancing & Anti-Exploit Systems

Heat/Suspicion & Diminishing Returns
```yaml
balancing:
	heat_meter:
		- on: repeated_stealth_in_region -> +1
		- if: heat > 3 -> spawn(patrols), lock(secret_shops)
	diminishing_returns:
		- if: same_skill_spam >= 3 -> reduce(effectiveness, 25%)
	adaptive_encounters:
		- if: player.avoids_combat_long -> add(detectors), add(anti_stealth)
	loop_exploit_detection:
		- track: action_hash_sequence(last=25)
		- if: repeats(pattern>=3 cycles) and entropy_budget_per_act <= 1 -> inject(variation_event), reduce(reward_quality, 30%)
		- if: same_fusion_used >= 2 in loop and paradox_debt_cap - current_debt <= 1 -> trigger(paradox_warning), add(minor_glitch)
	narrative_degradation:
		- if: spam_category == Cleanse and region.state already Restored -> swap(narration_lines, "diminished_echo")
		- if: spam_category == Stealth and heat_meter > 4 -> escalate(guard_dialogue), lock(optional_paths)
	adaptive_variation_injection:
		- on: exploit_flagged -> add(randomized_obstacle), add(alternate_node_state)
	protect_legendary_events:
		- if: legendary_trigger_active and repeat_attempt > 1 -> gate(with="architect_cooldown"), modify(outcome="observed_not_awarded")
```

---

## 2a.5 Micro-Scenarios (ready-to-test)

1) Shadow City Gate: use `Shadow Bind` thrice → heat=3; Wardens raise suspicion and require a Social or Light counter.
2) Collapsed Archive: `Echo Pulse` reveals salvage nodes; `Crafting` repairs bridge; unlocks Knowledge shortcut dialogue.
3) Corruption Front: `Light Ascend` cleanses → Restored; triggers restoration festival and opens Ascension trial node.
4) Underveil Treaty: `Void+Shadow` fusion unlocks secret route; lacking `Social`, NPCs demand tribute or betrayal choice.

---

## 2a.6 Debug & Telemetry Hooks

```yaml
debug_hooks:
	overlays: [rule_overlay, heat_meter, disposition_axes]
	trace: capture(last=50, filters=[skill, region, npc])
	counters: { entropy_spent, paradox_debt, cleanses_used }
	tunables: { thresholds, cooldowns, rarity_caps }
```


Lore tag → resonance effect (default)
| Lore Tag | Resonance Effect | Narrative Effect | Region Interaction | Quest Interaction | Character Interaction | Corruption Interaction |
|---|---|---|---|---|---|---|
| Echo | Clarity Surge | Reveals hidden echo nodes and memory lines | Reveals Echo Sanctums | Spawns Echo recovery quests | Bonds with Echo-aligned NPCs | Purifies minor corruption |
| Void | Instability Spike | Opens recursion/alternate branches | Creates Void Rifts (hazard) | Stealth/sabotage quest lines | Attracts shadow factions | Amplifies corruption risk |
| Bloom | Regenerative Field | Restores memories, softens outcomes | Heals tiles, shifts Corrupted→Stable | Healing/aid quests | Builds trust quickly | Reduces local corruption |
| Shadow | Obfuscation Veil | Unlocks hidden/stealth paths | Darkens tiles, new shadow routes | Sabotage/spy quests | Enables manipulation | Spreads covert corruption |
| Light | Purification Beam | Unlocks redemption outcomes | Cleanses zones Corrupted→Restored | Ascension trials | Inspires followers | Purges corruption pulses |
| Corruption | Entropic Pressure | Chaos events, dark branches | Spreads Corruption fronts | Forbidden quests | Corrupts NPC arcs | Escalates corruption tiers |
| Metal | Ordered Pulse | Tech/research branches | Stabilizes infrastructure | Crafting/rebuild quests | Aids engineers | Dampens chaotic corruption |
| Storm | Volatility Arc | High-risk/high-reward branches | Weather upheavals | Crisis-response quests | Tests resolve | Random corruption surges |
| Stone | Fate Anchor | Locks/opens destiny paths | Fortifies regions | Pilgrimage quests | Grounds wavering NPCs | Slows corruption spread |
| Blood | Vital Resonance | Sacrifice/kinship arcs | Bio-changes in fauna/flora | Rite-of-blood quests | Deepens bonds or rifts | Corruption trades health |
| Time | Paradox Flux | Loop/recursion specials | Temporal anomalies | Time-locked quests | Memory warp effects | Converts damage↔corruption |
| Dream | Cathartic Wave | Emotional/psyche arcs | Dreamscapes overlay | Therapy/insight quests | Alters inner alignment | Hides corruption in psyche |
| Flame | Accelerant | Fast, decisive branches | Wildfire hazards/cleanses | Urgent strike quests | Rallies hot-headed allies | Burns corruption nodes |
| Frost | Inhibition | Slow-control branches | Freeze hazards, stasis | Containment quests | Cools tempers | Pauses corruption timers |

Skill type → systemic affordances
| Skill Type | Story Access | Dialogue Modifiers | Region Effects | Boss Interactions | Ending Influence |
|---|---|---|---|---|---|
| Combat | Combat branches, boss gates | Intimidate/Challenge lines | Damage hazards, clear threats | Breaks armor/phases | Valor/Doom endings |
| Social | Faction, alliance, diplomacy | Persuade/Charm/Deceive | Calm crowds, open safe routes | Parley, skip phases | Unity/Usurp endings |
| Knowledge | Lore locks, puzzle gates | Scholar/Insight lines | Identify anomalies | Reveal patterns/weak points | Revelation endings |
| Stealth | Secret paths, bypass locks | Quiet/Threaten/Coerce | Reduce alert level | Ambush, backstab, skip phase | Shadow/Exile endings |
| Magic | Resonance/mystic locks | Arcane/Prophecy lines | Surge/cleanse/resonant | Phase shift, surge punish | Ascension/Paradox endings |
| Crafting | Build/repair gates | Trade/Blueprint lines | Restore infrastructure | Deploy gadgets, traps | Rebuild/Founding endings |
| Unique | Secret arcs, recursion toggles | Special legacy lines | Rare state flips | Hidden boss routes | Secret/True endings |

---

## 3) Fusion rules and generators

Naming formula and stacking
```yaml
fusion_rules:
	name: "{loreA}+{loreB}: {effectTitle}"
	effect_stack:
		resonance: combine(primary=loreA.resonance_effect, secondary=loreB.resonance_effect)
		narrative: union(loreA.narrative_effect, loreB.narrative_effect)
		corruption: maxIntensity(loreA.corruption_interaction, loreB.corruption_interaction)
	constraints:
		- disallow: [Light+Corruption] # only via special quests
		- cap: { storm+void: 2 surges per act }
	rarity_shift:
		- if: includes(Light) and includes(Echo) -> +1 rarity
		- if: includes(Void) and includes(Shadow) -> +1 rarity
```

Examples (generated)
- Echo+Light: Ascendant Echo — reveals hidden echoes and purifies, unlocks redemption branches.
- Void+Shadow: Umbral Drift — opens stealth recursion lanes, increases corruption risk.
- Bloom+Metal: Living Machine — heals regions while stabilizing infrastructure, enables rebuild arcs.

---

## 4) Triggers and logic blocks (adaptive)

Skill → Story Node triggers
```yaml
skill_to_story:
	- if: skill.lore_tag == Echo
		then: unlock(nodes.tag==Echoes), reveal(memory_lines)
	- if: skill.lore_tag == Void
		then: enable(recursion_links), spawn(void_rift_events)
	- if: skill.skill_type == Knowledge and node.has_puzzle
		then: solve(puzzle), unlock(lore_branch)
	- if: skill.skill_type == Stealth and node.has_threat
		then: bypass(threat), unlock(stealth_branch)
	- if: includes(skill.tags, Cleanse) and region.state == Corrupted
		then: set(region.state, Restored), reduce(corruption)
```

Skill → Dialogue modifiers
```yaml
skill_to_dialogue:
	- if: skill.skill_type == Social
		then: unlock(dialogue.tags==Persuasion|Alliance)
	- if: skill.lore_tag == Dream
		then: add_option(psyche_insight), alter(tone='empathetic')
	- if: skill.lore_tag == Corruption
		then: add_option(temptation), npc_disposition--
	- if: fusion.includes(Light)
		then: unlock(redemption_lines)
```

Skill → Region change effects
```yaml
skill_to_region:
	- if: skill.lore_tag == Light
		then: cleanse(zone), spawn(restoration_events)
	- if: skill.lore_tag == Shadow
		then: open(shadow_routes), increase(stealth_cover)
	- if: skill.lore_tag == Storm
		then: weather(volatile), spawn(crisis_events)
	- if: skill.lore_tag == Bloom
		then: heal(tiles), reduce(corruption_timer)
```

Skill → Boss interactions
```yaml
skill_to_boss:
	- if: boss.type == resonance_guardian and skill.lore_tag == Echo
		then: reveal(patterns), stagger(window=short)
	- if: boss.type == corruption_lord and skill.lore_tag == Light
		then: suppress(corruption_surge), weaken(phase_shield)
	- if: boss.type == memory_warden and skill.lore_tag == Dream
		then: recall(past_action), alter(phase_script)
	- if: fusion.includes(Void)
		then: enable(skip_phase_chance=low)
```

Skill → Ending pathways
```yaml
skill_to_endings:
	- if: fusion.includes(Light) and alignment in [Good, Lawful]
		then: unlock(ending='Redemption')
	- if: fusion.includes(Void) and resonance.tag==Paradox and resonance.value==Extreme
		then: unlock(ending='Paradox')
	- if: skill.skill_type == Crafting and rebuilt_regions >= N
		then: unlock(ending='Founding')
	- if: skill.lore_tag == Shadow and faction=='Underveil'
		then: unlock(ending='Exile')
```

All logic above composes with Narrative Rules sections 2, 3, 7–11.

---

## 4.5) Narrative Action Layer (runtime)

Purpose: turn static skill definitions into adaptive scene-level verbs combining base actions and empowered skill variants.

Inputs → Processing → Outputs
| Stage | Inputs | Processing | Outputs |
|---|---|---|---|
| Collect | player.skills, active.cards, scene.tags, region.state | index relevant skills by action_modes & story_actions | candidate skill verbs |
| Filter | entropy_budget, heat, npc.disposition, constraints | drop actions violating caps or trust gates | filtered verbs |
| Expand | fusion availability, synergy_hooks, node affordances | generate fused verbs + contextual variants | expanded action set |
| Score | resonance diversity, narrative leverage, risk (paradox, heat) | compute synergy_score(action) | scored actions |
| Surface | ui_flags, rarity, risk level | attach chips, warnings, previews | action_menu[] |
| Resolve | player selection, outcome rolls | apply effects, update meters | narration events, state deltas |

Action menu entry contract
```yaml
action_menu_entry:
	id: string
	label: string
	source_skill?: skill.id
	mode: action_modes
	story_action?: story_actions
	tags: [string]
	cost_preview: { energy?: int, focus?: int, entropy?: int }
	outcome_preview: { narrative?: string, mechanical?: string, risk?: string }
		synergy_score?: float    # see §4.7 Synergy evaluation logic
	flags?: [ui_flags]
	gating?: { trust?: int, resonance_band?: string, heat_max?: int }
```

Generation rules (samples)
```yaml
action_generation:
	- if: skill.story_actions includes Cleanse and region.state == Corrupted
		then: add(id=cleanse-zone, label="Cleanse Zone", from=skill.id, mode=Assist, flags=[ShowRuleChips, PreviewOutcome])
	- if: skill.lore_tag == Void and skill.skill_type in [Stealth, Unique]
		then: add(id=phase-walk, label="Phase Walk", risk=Paradox, mode=Escape, flags=[WarnParadox])
	- if: fusion.includes(Light) and fusion.includes(Echo)
		then: add(id=redeem, label="Redeem", rarity=Mythic, mode=Ritual, story_action=Sanctify)
	- dedupe: prefer higher rarity provenance order [fusion, unique, skill, base]
```

UI chips & narration hooks
```yaml
ui_chips:
	- if: action.flags includes ShowRuleChips -> emit(chips=[resonance, skill_type])
	- if: action.synergy_score >= 2 -> emit(chip=SynergyHint)
	- if: action.risk == Paradox -> emit(chip=ParadoxWarning)
narration_hooks:
	- on: cleanse-zone -> inject(script.tag==Restoration)
	- on: phase-walk -> inject(script.tag==VoidPath)
	- on: redeem and npc.awe >= 2 -> inject(script.tag==RedemptionWitness)
```

Notes
- synergy_score placeholder; formulas will be added in the synergy evaluation section.
- heat_tags from skills feed dynamic suppression or escalation of certain actions.
- Paradox warnings appear only if paradox_debt_cap - current_debt <= 1.

---

## 4.6) Runtime pipeline (pseudocode)

High-level pipeline that runs each scene tick or when inventory/scene state changes.

```pseudo
function build_action_menu(ctx):
		# 1) Collect & annotate
		skills = ctx.player.skills + ctx.cards.bound_skills()
		for s in skills:
				s.tags += s.action_modes + s.story_actions
				s.scene_fit = match_scene(s, ctx.scene.tags, ctx.region.state)

		# 2) Compute availability & constraints
		pool = []
		for s in skills:
				if violates_entropy(s, ctx.budgets) or violates_trust(s, ctx.npc):
						continue  # suppressed
				if on_cooldown(s, ctx.cooldowns):
						continue
				pool.append(s)

		# 3) Generate action candidates from pool
		actions = []
		for s in pool:
				actions += generate_actions_from_skill(s, ctx)
		actions = dedupe_and_prioritize(actions)  # fusion > unique > skill > base

		# 4) Score synergies (see §4.7)
		for a in actions:
				a.synergy_score = compute_synergy(a, ctx)

		# 5) UI injection
		for a in actions:
				attach_ui_chips(a, ctx)  # rule chips, synergy hints, paradox warnings
				attach_outcome_preview(a, ctx)

		# 6) Return ordered menu
		return sort_by([rarity DESC, synergy_score DESC, risk ASC], actions)

function resolve_action(selection, ctx):
		apply_costs(selection, ctx)        # energy/focus/entropy/heat
		apply_world_effects(selection, ctx)
		update_disposition(selection, ctx) # npc trust/fear/awe/suspicion
		enqueue_narration(selection, ctx)  # hook scripts
		update_meters(selection, ctx)      # cooldowns, paradox debt, heat
```

Implementation notes
- match_scene should consider node affordances, resonance gates, and corruption fronts.
- apply_world_effects routes to triggers in §4 (story/dialogue/region/boss/endings).
- Paradox debt increments are tunable by action type; see reality_accounting in §2a.3.

---

## 4.7) Synergy evaluation logic

Goal: prefer diverse, narratively leveraged actions without rewarding spam.

Scoring formula (default weights)
```yaml
synergy_formula:
	score: w1*resonance_diversity + w2*tag_combo + w3*narrative_leverage + w4*rarity_bonus + w5*disposition_fit - w6*heat_penalty - w7*risk_penalty
	weights:
		w1: 0.8   # distinct lore_tags present in current hand/loadout
		w2: 1.0   # matched combos from synergy_hooks (e.g., Echo+Light)
		w3: 0.7   # action aligns with scene tags (e.g., Cleanse in Corrupted)
		w4: 0.3   # rarity uplift (Unique/Mythic small bump only)
		w5: 0.5   # fits npc archetype/disposition goals
		w6: 0.9   # higher heat reduces priority
		w7: 0.6   # paradox/instability risk reduction
```

Combo rules (sample)
```yaml
synergy_rules:
	- hook: "echo+light"
		if: includes(lore_tags, Echo) and includes(lore_tags, Light)
		tag_combo: +2
		narrative_leverage: +1  # unlocks redemption/clarity overlays
	- hook: "void+shadow"
		if: includes(lore_tags, Void) and includes(lore_tags, Shadow)
		tag_combo: +2
		risk_penalty: +1        # stealth recursion risk
	- hook: "bloom+metal"
		if: includes(lore_tags, Bloom) and includes(lore_tags, Metal)
		tag_combo: +1.5
		narrative_leverage: +1  # rebuild arcs
```

Example compute
```yaml
example:
	action: Redeem (from Echo+Light fusion)
	context: region.state=Corrupted, npc.archetype=Healer, heat=2, risk=low
	components:
		resonance_diversity: 3       # Echo, Light, Bloom present in hand
		tag_combo: +2 (echo+light)
		narrative_leverage: +1 (Cleanse/Redemption in Corrupted)
		rarity_bonus: +0.3 (Mythic)
		disposition_fit: +0.5 (Healer likes Light/Bloom)
		heat_penalty: 2*0.9 -> 1.8
		risk_penalty: 0
	score ≈ 0.8*3 + 1.0*2 + 0.7*1 + 0.3*0.3 + 0.5*0.5 - 1.8 ≈ 3.4
```

---

## 4.8) Non-combat scenario examples

1) Cathedral of Remnants (Dialogue-first)
- Loadout: Echo Pulse (Knowledge), Light Ascend (Magic), Social basic.
- Actions: Observe, Converse, Reveal (Echo), Redeem (Echo+Light).
- Outcomes: unlocks confession arc, cleanses shrine without a fight, opens Ascension trial.

2) Broken Sky Railway (Repair & Ritual)
- Loadout: Crafting (Repair), Bloom Heal, Metal attunement rune.
- Actions: Inspect Rails (Investigate), Repair Span (Craft), Living Machine (Bloom+Metal) ritual.
- Outcomes: bridge restored, unlocks trade route, spawns rebuild questline.

3) Dream-locked Patient (Psyche)
- Loadout: Dream Wave (Social), Knowledge (Insight), no Combat.
- Actions: Enter Dreamscape (Conjure), Soothe Trauma (Assist), Reveal Memory (Reveal).
- Outcomes: patient awakens, grants lore key, unlocks empathy dialogue thread.

---

## 4.9) Character response mapping (cross-ref)

Map skills to character response layers; see `characters.md` for NPC archetypes and special figures.

```yaml
response_map:
	by_lore_tag:
		Echo:    { trust:+1, awe:+1 on fusion Light, suspicion:0 }
		Light:   { trust:+1, awe:+1, fear:0, suspicion:-1 in lawful regions }
		Shadow:  { suspicion:+1, trust:-1 in law-bound NPCs, underveil_deals:+1 }
		Void:    { fear:+1, awe:+1 if Unique, paradox_risk:+1 }
		Bloom:   { trust:+1, fear:-1, festival_hooks:+1 }
		Corruption: { fear:+1, suspicion:+1, temptation_lines:+1 }
	by_story_action:
		Cleanse:  { healers: trust+1, wardens: unlock_gate_if_suspicion==0 }
		Persuade: { scholars/healers: trust+1, underveil: neutral }
		Intimidate: { wardens: fear+1 -> tribute path, scholars: trust-1 }
```

Special: Laxus Bloodsage (Legendary, Untethered Architects)
- Hooks: Echo+Light awe ≥ 2; trust ≥ threshold from `architect_triggers.md`.
- Responses: on Redeem/Reveal in architect-marked nodes, unlocks hidden observation lines; on repeated Void+Shadow recursion, increases meta suspicion and may delay name reveal (per `meta_awareness_policy.md`).

---

## 5) Card System linkage

Card metadata and binding
```yaml
card:
	id: string
	binds: skill.id
	cost: { energy: int }
	rarity: enum
	upgrades:
		- level: 2; add_tag: [Cleanse]
		- level: 3; reduce_cooldown: 1
	sockets: [Rune, Mod]
	synergies: { with_lore: [Light, Echo], with_type: [Knowledge] }
```

Integration rules
- Card rarity raises fusion rarity ceilings per fusion_rules.rarity_shift.
- Upgrades can add tags that modify adaptive mappings (e.g., adding Cleanse to enable region cleanse triggers).
- Sockets can carry Resonance Runes that temporarily change resonance.tag/value bands.

---

## 6) Example catalog entries (pattern for all 1000+ skills)

| Name | skill_type | lore_tag | resonance_effect | narrative_effect | region_interaction | quest_interaction | character_interaction | corruption_interaction | fusion_variations |
|---|---|---|---|---|---|---|---|---|---|
| Echo Pulse | Knowledge | Echo | Clarity Surge | Reveals echo nodes and memory lines | Reveals Echo Sanctums | Echo recovery quests | Bonds Echo NPCs | Purifies minor corruption | Echo+Light: Ascendant Echo |
| Void Step | Stealth | Void | Instability Spike | Opens recursion branches | Creates Void Rifts | Stealth/sabotage | Befriends shadow factions | Amplifies corruption risk | Void+Shadow: Umbral Drift |
| Bloom Heal | Magic | Bloom | Regenerative Field | Restores memories | Heals corrupted tiles | Aid/healing quests | Heals allies, unlocks trust | Reduces corruption | Bloom+Light: Purity Bloom |
| Shadow Bind | Stealth | Shadow | Obfuscation Veil | Secret node paths | Shadow routes | Sabotage/spy quests | Manipulates rivals | Spreads covert corruption | Shadow+Void: Umbral Veil |
| Light Ascend | Magic | Light | Purification Beam | Redemption outcomes | Cleanses zones | Ascension trials | Inspires followers | Purges corruption | Light+Echo: Ascendant Echo |
| Corrupt Surge | Unique | Corruption | Entropic Pressure | Chaos events | Spreads fronts | Forbidden quests | Corrupts NPC arcs | Escalates tiers | Corruption+Void: Abyssal Bloom |

Note: The full catalog is generated by importing from 03-skill-matrix-engines.html (see pipeline below).

---

## 7) Import pipeline and validation

Goal: transform `03-skill-matrix-engines.html` → normalized `skills.json` → validated entries conforming to the Skill data contract.

Expected JSON shape
```json
{
	"skills": [
		{
			"id": "echo-pulse",
			"name": "Echo Pulse",
			"skill_type": "Knowledge",
			"lore_tag": "Echo",
			"tags": ["Reveal", "Cleanse"],
			"resonance_effect": "Clarity Surge",
			"narrative_effect": "Reveals echo nodes",
			"region_interaction": "Reveals Echo Sanctums",
			"quest_interaction": "Echo recovery quests",
			"character_interaction": "Bonds Echo NPCs",
			"corruption_interaction": "Purifies minor corruption",
			"fusion_variations": ["Echo+Light: Ascendant Echo"]
		}
	]
}
```

Validation gates
- Enum checks for skill_type, lore_tag.
- Crosswalk ensures resonance tag derivation from lore_tag.
- Narrative/region/quest/character/corruption fields are non-empty strings.
- Fusion variations match naming formula and allowed combinations.

Test scenarios
1) Import 10 varied skills; verify enum compliance and auto-fusion generation.
2) Inject invalid lore_tag; validator rejects and reports fix.
3) Add Cleanse tag via card upgrade; region cleanse trigger appears in node UI.
4) Use Void fusion in boss arena; boss phase skip chance unlocked.

---

## 8) Designer notes: making skills “toy-like”

- Surface micro-animations when a skill unlocks a hidden link or modifies dialogue.
- Show rule chips (Resonance/Skill/Memory) on choices impacted by active skills.
- Provide a Skill Heatmap overlay per region showing potential cleanses, rifts, routes.
- Offer "Fusion Hints" when compatible skills co-exist, nudging discovery.

---

## 9) Cross-references

- Narrative Rules: Sections 2 (Resonance), 3 (Corruption), 7 (Skills), 8 (Events), 9 (Regions), 10 (Dialogue), 11 (Bosses).
- Card System: rarities, upgrades, sockets; ensure thresholds/enums live in one config.
- Story Nodes: tag your nodes with resonance tags and gate keys so skill triggers resolve cleanly.

---

## 10) Next implementation steps (optional)

- Add a small parser script to export `skills.json` from the HTML matrix and run enum validation.
- Bind cards to skills via `cardId` and generate in-game tooltips from these mappings.
- Pilot a region with 5–8 nodes and 8–12 skills to verify all triggers in a tight loop.

