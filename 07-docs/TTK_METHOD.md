# TTK Approximation Method

The analyzer estimates relative balance using keyword proxies (no full sim yet):

- Damage score: [Damage], [Burn], [Decay], [Detonate], [Consume], [Invoke], [Channel], [Collapse]
- Control score: [Silence], [Stasis], [Banish], [Mark], [Expose], [Vulnerable]
- Sustain score: [Heal], [Shield], [Cleanse], [Transmute]
- AoE score: [AoE], [Field]

Efficiency = (damage+control+sustain+aoe) / (kp+cooldown)

Use the notes section to spot over-tuned control or lacking finishers. Adjust via
balance_profiles.json and rerun balance.
