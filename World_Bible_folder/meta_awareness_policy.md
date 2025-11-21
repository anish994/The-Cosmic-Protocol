# Meta-Awareness & Player Name Usage Policy v1.0

Purpose: Constrain and codify rare meta-layer interactions (e.g., addressing external user by chosen name) to preserve narrative impact and avoid immersion break or overfitting.

## Core Principles
1. Scarcity: Meta acknowledgements must be rare (max 1 hard meta moment per long arc / ~10 major beats).
2. Subtlety: Never explain the meta mechanic diegetically; present it as refined perception or lattice inference.
3. Consent: Only occur after implicit consent actions (restraint, ethical choice chains) and never during hostile pressure scenarios.
4. Non-Exploitability: No mechanical advantage solely from triggering meta moments.
5. Privacy: Player name stored hashed; only unhashed at display time; never logged externally.

## Allowable Meta Interaction Types
- Name Address (Type: name_reveal_one_time)
- Pattern Commentary (Type: pattern_observation) — abstract references to loop diversity.
- Lattice Insight Teaser (Type: lattice_hint) — suggests unseen system layers without explicit data dump.

## Disallowed
- Repeating the name within the same loop.
- Using name in combat taunts or economy transactions.
- Coupling meta invocation with direct stat buffs.
- Chain meta (no immediate second meta event after one fires; cooldown enforced).

## Cooldowns & Limits
- name_reveal_one_time: lifetime cap 1 (per profile).
- pattern_observation: max 1 per 3 major beats.
- lattice_hint: max 2 per long arc; never adjacent to name_reveal.

## Trigger Dependencies
- Meta events require trustScore >= threshold specific to type:
  - name_reveal_one_time: trust >= 0.80 and restraint_count >= 2
  - pattern_observation: trust >= 0.40
  - lattice_hint: trust >= 0.60
- exploitFlags must be false.

## Data Handling
- player_name_hash = H(player_name + salt)
- Store hash + event flags only.
- name displayed through ephemeral render pipeline; not persisted in raw logs.

## Fallback Behavior
If trust drops below required threshold mid-loop, pending meta events are cancelled silently; no penalty.

## Example Dialogue Patterns
- Name Reveal: "Patterns behind the husk are clearer now, <player_name>." (Never repeats.)
- Pattern Observation: "You altered the recursion cadence—variance restored." (No direct address.)
- Lattice Hint: "A dormant scaffold hums beyond your accessible schema." 

## Implementation Notes
- Gate event emission behind a MetaEventController with internal cooldown ledger.
- Provide test harness that simulates loop variance to validate throttling.

## Change Control
- All expansions to meta events must update this policy; require review tag: META_POLICY_REVIEW.
