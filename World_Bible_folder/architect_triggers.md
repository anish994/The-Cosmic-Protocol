# Architect Trigger Spec v1.0

Scope: Defines canonical conditions and control flow for hidden/optional encounters with Laxus Bloodsage (untethered_architects) and related boons.

## Canonical Event IDs
- ether_lattice_ping
- silent_card_bloom
- husk_dialogue_unmask (one-time name address gate)
- void_fusion_prototype (reversible proto-fusion preview)

## Preconditions (AND unless noted)
- echoRecursionDepth >= 3
- fusionDiversity >= 5 (distinct primary tags seen in last N major beats, default N=8)
- trustScore >= 0.80 (0.0–1.0; earned via restraint/ethical choices)
- corruptionDebt <= 0 (no outstanding high-corruption flags)
- region.id == "nexus_gate" AND region.state in { "Harmonized", "SurgeWatch" }
- loopMonotonyScore <= 0.60 (0.0–1.0; penalizes repeated exploit routes)
- exploitFlags == false (no active exploit detection)

Notes:
- If Preconditions fail softly (only one threshold miss), degrade to non-interactive "distant glyph shimmer" with no dialogue.
- If multiple misses or exploitFlags==true, suppress manifestation entirely and increment silentObservation.

## Cooldowns & Multiplicity
- appearance.globalCooldownBeats: 2 (min major beats before re-check)
- appearance.maxPerLoop: 1 (Laxus can manifest once per recursion loop)
- nameReveal.oncePerProfile: true (husk_dialogue_unmask triggers a single time ever per save/profile)

## Trust and Restraint
- trustScore increases on choosing restraint in high-power proto-fusion offers (+0.05 per event, cap 1.0)
- trust decays on exploit-like monotony (−0.03 per repeated pattern window)

## Event Flow
1) Preconditions pass -> ether_lattice_ping (ambient, no UI pressure)
2) Optional: silent_card_bloom (lore-forward, no power change)
3) If player selects restraint twice across relevant choices -> husk_dialogue_unmask (one-time name address)
4) When stable and ethical -> void_fusion_prototype (reversible, maxRollbacks=1)

## Failure / Safety
- On corruptionDebt > 0: present hint-only; no boons.
- On repeated exploit loops: switch to observation mode; zero rewards; sarcasm suppressed.
- On rollback misuse (more than 1): lock proto-fusion feature for the loop.

## Telemetry Keys (for optional analytics)
- laxus.appeared (bool)
- laxus.event (enum: ids above)
- laxus.trustScore (float)
- laxus.loopMonotony (float)
- laxus.rollback.used (int)

## Pseudocode (reference)
```
if region.id=="nexus_gate" and region.state in {Harmonized, SurgeWatch}:
  if echoDepth>=3 and fusionDiversity>=5 and trust>=0.8 and debt<=0 and monotony<=0.6 and not exploit:
    manifest(ether_lattice_ping)
    if player.opt_in_lore:
      trigger(silent_card_bloom)
    if player.restrained_twice and not profile.name_revealed:
      trigger(husk_dialogue_unmask)
    if ethics_ok and rollback_remaining>0:
      trigger(void_fusion_prototype)
  elif soft_miss_one_condition:
    show(glyph_shimmer)
  else:
    observe_silently()
```
